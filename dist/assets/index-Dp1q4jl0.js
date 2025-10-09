;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i)
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const r = {}
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    )
  }
  function s(i) {
    if (i.ep) return
    i.ep = !0
    const r = n(i)
    fetch(i.href, r)
  }
})()
function Or(e) {
  const t = Object.create(null)
  for (const n of e.split(",")) t[n] = 1
  return (n) => n in t
}
const $e = {},
  An = [],
  Lt = () => {},
  Xo = () => !1,
  oi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  _r = (e) => e.startsWith("onUpdate:"),
  et = Object.assign,
  jr = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  wc = Object.prototype.hasOwnProperty,
  Pe = (e, t) => wc.call(e, t),
  ae = Array.isArray,
  On = (e) => ai(e) === "[object Map]",
  Jo = (e) => ai(e) === "[object Set]",
  de = (e) => typeof e == "function",
  Be = (e) => typeof e == "string",
  Xt = (e) => typeof e == "symbol",
  _e = (e) => e !== null && typeof e == "object",
  Zo = (e) => (_e(e) || de(e)) && de(e.then) && de(e.catch),
  Qo = Object.prototype.toString,
  ai = (e) => Qo.call(e),
  xc = (e) => ai(e).slice(8, -1),
  ea = (e) => ai(e) === "[object Object]",
  Lr = (e) =>
    Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  es = Or(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ui = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Sc = /-\w/g,
  wt = ui((e) => e.replace(Sc, (t) => t.slice(1).toUpperCase())),
  Ec = /\B([A-Z])/g,
  xn = ui((e) => e.replace(Ec, "-$1").toLowerCase()),
  ci = ui((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ti = ui((e) => (e ? `on${ci(e)}` : "")),
  un = (e, t) => !Object.is(e, t),
  Ns = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  ta = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  dr = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Ml
const di = () =>
  Ml ||
  (Ml =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function fi(e) {
  if (ae(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = Be(s) ? Pc(s) : fi(s)
      if (i) for (const r in i) t[r] = i[r]
    }
    return t
  } else if (Be(e) || _e(e)) return e
}
const Cc = /;(?![^(]*\))/g,
  Tc = /:([^]+)/,
  kc = /\/\*[^]*?\*\//g
function Pc(e) {
  const t = {}
  return (
    e
      .replace(kc, "")
      .split(Cc)
      .forEach((n) => {
        if (n) {
          const s = n.split(Tc)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function k(e) {
  let t = ""
  if (Be(e)) t = e
  else if (ae(e))
    for (let n = 0; n < e.length; n++) {
      const s = k(e[n])
      s && (t += s + " ")
    }
  else if (_e(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const Ic =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Mc = Or(Ic)
function na(e) {
  return !!e || e === ""
}
const sa = (e) => !!(e && e.__v_isRef === !0),
  Ce = (e) =>
    Be(e)
      ? e
      : e == null
        ? ""
        : ae(e) || (_e(e) && (e.toString === Qo || !de(e.toString)))
          ? sa(e)
            ? Ce(e.value)
            : JSON.stringify(e, ia, 2)
          : String(e),
  ia = (e, t) =>
    sa(t)
      ? ia(e, t.value)
      : On(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i], r) => ((n[ki(s, r) + " =>"] = i), n),
              {},
            ),
          }
        : Jo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ki(n)) }
          : Xt(t)
            ? ki(t)
            : _e(t) && !ae(t) && !ea(t)
              ? String(t)
              : t,
  ki = (e, t = "") => {
    var n
    return Xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Xe
class $c {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Xe),
      !t && Xe && (this.index = (Xe.scopes || (Xe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Xe
      try {
        return (Xe = this), t()
      } finally {
        Xe = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Xe), (Xe = this))
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((Xe = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function ra() {
  return Xe
}
function Ac(e, t = !1) {
  Xe && Xe.cleanups.push(e)
}
let Oe
const Pi = new WeakSet()
class la {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Xe && Xe.active && Xe.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Pi.has(this) && (Pi.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || aa(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), $l(this), ua(this)
    const t = Oe,
      n = Ct
    ;(Oe = this), (Ct = !0)
    try {
      return this.fn()
    } finally {
      ca(this), (Oe = t), (Ct = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Rr(t)
      ;(this.deps = this.depsTail = void 0),
        $l(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Pi.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    fr(this) && this.run()
  }
  get dirty() {
    return fr(this)
  }
}
let oa = 0,
  ts,
  ns
function aa(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = ns), (ns = e)
    return
  }
  ;(e.next = ts), (ts = e)
}
function Br() {
  oa++
}
function Nr() {
  if (--oa > 0) return
  if (ns) {
    let t = ns
    for (ns = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; ts; ) {
    let t = ts
    for (ts = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function ua(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function ca(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const i = s.prevDep
    s.version === -1 ? (s === n && (n = i), Rr(s), Oc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (da(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function da(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === as) ||
    ((e.globalVersion = as),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !fr(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = Oe,
    s = Ct
  ;(Oe = e), (Ct = !0)
  try {
    ua(e)
    const i = e.fn(e._value)
    ;(t.version === 0 || un(i, e._value)) &&
      ((e.flags |= 128), (e._value = i), t.version++)
  } catch (i) {
    throw (t.version++, i)
  } finally {
    ;(Oe = n), (Ct = s), ca(e), (e.flags &= -3)
  }
}
function Rr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let r = n.computed.deps; r; r = r.nextDep) Rr(r, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Oc(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Ct = !0
const fa = []
function Kt() {
  fa.push(Ct), (Ct = !1)
}
function Yt() {
  const e = fa.pop()
  Ct = e === void 0 ? !0 : e
}
function $l(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = Oe
    Oe = void 0
    try {
      t()
    } finally {
      Oe = n
    }
  }
}
let as = 0
class _c {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class zr {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0)
  }
  track(t) {
    if (!Oe || !Ct || Oe === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== Oe)
      (n = this.activeLink = new _c(Oe, this)),
        Oe.deps
          ? ((n.prevDep = Oe.depsTail),
            (Oe.depsTail.nextDep = n),
            (Oe.depsTail = n))
          : (Oe.deps = Oe.depsTail = n),
        pa(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = Oe.depsTail),
        (n.nextDep = void 0),
        (Oe.depsTail.nextDep = n),
        (Oe.depsTail = n),
        Oe.deps === n && (Oe.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, as++, this.notify(t)
  }
  notify(t) {
    Br()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Nr()
    }
  }
}
function pa(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) pa(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const qs = new WeakMap(),
  vn = Symbol(""),
  pr = Symbol(""),
  us = Symbol("")
function Je(e, t, n) {
  if (Ct && Oe) {
    let s = qs.get(e)
    s || qs.set(e, (s = new Map()))
    let i = s.get(n)
    i || (s.set(n, (i = new zr())), (i.map = s), (i.key = n)), i.track()
  }
}
function Wt(e, t, n, s, i, r) {
  const o = qs.get(e)
  if (!o) {
    as++
    return
  }
  const l = (a) => {
    a && a.trigger()
  }
  if ((Br(), t === "clear")) o.forEach(l)
  else {
    const a = ae(e),
      u = a && Lr(n)
    if (a && n === "length") {
      const c = Number(s)
      o.forEach((d, f) => {
        ;(f === "length" || f === us || (!Xt(f) && f >= c)) && l(d)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(us)), t)
      ) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(vn)), On(e) && l(o.get(pr)))
          break
        case "delete":
          a || (l(o.get(vn)), On(e) && l(o.get(pr)))
          break
        case "set":
          On(e) && l(o.get(vn))
          break
      }
  }
  Nr()
}
function jc(e, t) {
  const n = qs.get(e)
  return n && n.get(t)
}
function En(e) {
  const t = Te(e)
  return t === e ? t : (Je(t, "iterate", us), yt(e) ? t : t.map(Ue))
}
function pi(e) {
  return Je((e = Te(e)), "iterate", us), e
}
const Lc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ii(this, Symbol.iterator, Ue)
  },
  concat(...e) {
    return En(this).concat(...e.map((t) => (ae(t) ? En(t) : t)))
  },
  entries() {
    return Ii(this, "entries", (e) => ((e[1] = Ue(e[1])), e))
  },
  every(e, t) {
    return zt(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return zt(this, "filter", e, t, (n) => n.map(Ue), arguments)
  },
  find(e, t) {
    return zt(this, "find", e, t, Ue, arguments)
  },
  findIndex(e, t) {
    return zt(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return zt(this, "findLast", e, t, Ue, arguments)
  },
  findLastIndex(e, t) {
    return zt(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return zt(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return Mi(this, "includes", e)
  },
  indexOf(...e) {
    return Mi(this, "indexOf", e)
  },
  join(e) {
    return En(this).join(e)
  },
  lastIndexOf(...e) {
    return Mi(this, "lastIndexOf", e)
  },
  map(e, t) {
    return zt(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return Un(this, "pop")
  },
  push(...e) {
    return Un(this, "push", e)
  },
  reduce(e, ...t) {
    return Al(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Al(this, "reduceRight", e, t)
  },
  shift() {
    return Un(this, "shift")
  },
  some(e, t) {
    return zt(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return Un(this, "splice", e)
  },
  toReversed() {
    return En(this).toReversed()
  },
  toSorted(e) {
    return En(this).toSorted(e)
  },
  toSpliced(...e) {
    return En(this).toSpliced(...e)
  },
  unshift(...e) {
    return Un(this, "unshift", e)
  },
  values() {
    return Ii(this, "values", Ue)
  },
}
function Ii(e, t, n) {
  const s = pi(e),
    i = s[t]()
  return (
    s !== e &&
      !yt(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next()
        return r.done || (r.value = n(r.value)), r
      })),
    i
  )
}
const Bc = Array.prototype
function zt(e, t, n, s, i, r) {
  const o = pi(e),
    l = o !== e && !yt(e),
    a = o[t]
  if (a !== Bc[t]) {
    const d = a.apply(e, r)
    return l ? Ue(d) : d
  }
  let u = n
  o !== e &&
    (l
      ? (u = function (d, f) {
          return n.call(this, Ue(d), f, e)
        })
      : n.length > 2 &&
        (u = function (d, f) {
          return n.call(this, d, f, e)
        }))
  const c = a.call(o, u, s)
  return l && i ? i(c) : c
}
function Al(e, t, n, s) {
  const i = pi(e)
  let r = n
  return (
    i !== e &&
      (yt(e)
        ? n.length > 3 &&
          (r = function (o, l, a) {
            return n.call(this, o, l, a, e)
          })
        : (r = function (o, l, a) {
            return n.call(this, o, Ue(l), a, e)
          })),
    i[t](r, ...s)
  )
}
function Mi(e, t, n) {
  const s = Te(e)
  Je(s, "iterate", us)
  const i = s[t](...n)
  return (i === -1 || i === !1) && Hr(n[0])
    ? ((n[0] = Te(n[0])), s[t](...n))
    : i
}
function Un(e, t, n = []) {
  Kt(), Br()
  const s = Te(e)[t].apply(e, n)
  return Nr(), Yt(), s
}
const Nc = Or("__proto__,__v_isRef,__isVue"),
  ha = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Xt),
  )
function Rc(e) {
  Xt(e) || (e = String(e))
  const t = Te(this)
  return Je(t, "has", e), t.hasOwnProperty(e)
}
class ga {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip
    const i = this._isReadonly,
      r = this._isShallow
    if (n === "__v_isReactive") return !i
    if (n === "__v_isReadonly") return i
    if (n === "__v_isShallow") return r
    if (n === "__v_raw")
      return s === (i ? (r ? Kc : ya) : r ? va : ba).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = ae(t)
    if (!i) {
      let a
      if (o && (a = Lc[n])) return a
      if (n === "hasOwnProperty") return Rc
    }
    const l = Reflect.get(t, n, De(t) ? t : s)
    if ((Xt(n) ? ha.has(n) : Nc(n)) || (i || Je(t, "get", n), r)) return l
    if (De(l)) {
      const a = o && Lr(n) ? l : l.value
      return i && _e(a) ? gr(a) : a
    }
    return _e(l) ? (i ? gr(l) : ys(l)) : l
  }
}
class ma extends ga {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, i) {
    let r = t[n]
    if (!this._isShallow) {
      const a = cn(r)
      if (
        (!yt(s) && !cn(s) && ((r = Te(r)), (s = Te(s))),
        !ae(t) && De(r) && !De(s))
      )
        return a || (r.value = s), !0
    }
    const o = ae(t) && Lr(n) ? Number(n) < t.length : Pe(t, n),
      l = Reflect.set(t, n, s, De(t) ? t : i)
    return (
      t === Te(i) && (o ? un(s, r) && Wt(t, "set", n, s) : Wt(t, "add", n, s)),
      l
    )
  }
  deleteProperty(t, n) {
    const s = Pe(t, n)
    t[n]
    const i = Reflect.deleteProperty(t, n)
    return i && s && Wt(t, "delete", n, void 0), i
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Xt(n) || !ha.has(n)) && Je(t, "has", n), s
  }
  ownKeys(t) {
    return Je(t, "iterate", ae(t) ? "length" : vn), Reflect.ownKeys(t)
  }
}
class zc extends ga {
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
const Dc = new ma(),
  Fc = new zc(),
  Hc = new ma(!0)
const hr = (e) => e,
  Ts = (e) => Reflect.getPrototypeOf(e)
function Gc(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = Te(i),
      o = On(r),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      u = i[e](...s),
      c = n ? hr : t ? Us : Ue
    return (
      !t && Je(r, "iterate", a ? pr : vn),
      {
        next() {
          const { value: d, done: f } = u.next()
          return f
            ? { value: d, done: f }
            : { value: l ? [c(d[0]), c(d[1])] : c(d), done: f }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function ks(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function Vc(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        o = Te(r),
        l = Te(i)
      e || (un(i, l) && Je(o, "get", i), Je(o, "get", l))
      const { has: a } = Ts(o),
        u = t ? hr : e ? Us : Ue
      if (a.call(o, i)) return u(r.get(i))
      if (a.call(o, l)) return u(r.get(l))
      r !== o && r.get(i)
    },
    get size() {
      const i = this.__v_raw
      return !e && Je(Te(i), "iterate", vn), i.size
    },
    has(i) {
      const r = this.__v_raw,
        o = Te(r),
        l = Te(i)
      return (
        e || (un(i, l) && Je(o, "has", i), Je(o, "has", l)),
        i === l ? r.has(i) : r.has(i) || r.has(l)
      )
    },
    forEach(i, r) {
      const o = this,
        l = o.__v_raw,
        a = Te(l),
        u = t ? hr : e ? Us : Ue
      return (
        !e && Je(a, "iterate", vn),
        l.forEach((c, d) => i.call(r, u(c), u(d), o))
      )
    },
  }
  return (
    et(
      n,
      e
        ? {
            add: ks("add"),
            set: ks("set"),
            delete: ks("delete"),
            clear: ks("clear"),
          }
        : {
            add(i) {
              !t && !yt(i) && !cn(i) && (i = Te(i))
              const r = Te(this)
              return (
                Ts(r).has.call(r, i) || (r.add(i), Wt(r, "add", i, i)), this
              )
            },
            set(i, r) {
              !t && !yt(r) && !cn(r) && (r = Te(r))
              const o = Te(this),
                { has: l, get: a } = Ts(o)
              let u = l.call(o, i)
              u || ((i = Te(i)), (u = l.call(o, i)))
              const c = a.call(o, i)
              return (
                o.set(i, r),
                u ? un(r, c) && Wt(o, "set", i, r) : Wt(o, "add", i, r),
                this
              )
            },
            delete(i) {
              const r = Te(this),
                { has: o, get: l } = Ts(r)
              let a = o.call(r, i)
              a || ((i = Te(i)), (a = o.call(r, i))), l && l.call(r, i)
              const u = r.delete(i)
              return a && Wt(r, "delete", i, void 0), u
            },
            clear() {
              const i = Te(this),
                r = i.size !== 0,
                o = i.clear()
              return r && Wt(i, "clear", void 0, void 0), o
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Gc(i, e, t)
    }),
    n
  )
}
function Dr(e, t) {
  const n = Vc(e, t)
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
          ? s
          : Reflect.get(Pe(n, i) && i in s ? n : s, i, r)
}
const Wc = { get: Dr(!1, !1) },
  qc = { get: Dr(!1, !0) },
  Uc = { get: Dr(!0, !1) }
const ba = new WeakMap(),
  va = new WeakMap(),
  ya = new WeakMap(),
  Kc = new WeakMap()
function Yc(e) {
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
function Xc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Yc(xc(e))
}
function ys(e) {
  return cn(e) ? e : Fr(e, !1, Dc, Wc, ba)
}
function wa(e) {
  return Fr(e, !1, Hc, qc, va)
}
function gr(e) {
  return Fr(e, !0, Fc, Uc, ya)
}
function Fr(e, t, n, s, i) {
  if (!_e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = Xc(e)
  if (r === 0) return e
  const o = i.get(e)
  if (o) return o
  const l = new Proxy(e, r === 2 ? s : n)
  return i.set(e, l), l
}
function _n(e) {
  return cn(e) ? _n(e.__v_raw) : !!(e && e.__v_isReactive)
}
function cn(e) {
  return !!(e && e.__v_isReadonly)
}
function yt(e) {
  return !!(e && e.__v_isShallow)
}
function Hr(e) {
  return e ? !!e.__v_raw : !1
}
function Te(e) {
  const t = e && e.__v_raw
  return t ? Te(t) : e
}
function Jc(e) {
  return (
    !Pe(e, "__v_skip") && Object.isExtensible(e) && ta(e, "__v_skip", !0), e
  )
}
const Ue = (e) => (_e(e) ? ys(e) : e),
  Us = (e) => (_e(e) ? gr(e) : e)
function De(e) {
  return e ? e.__v_isRef === !0 : !1
}
function F(e) {
  return xa(e, !1)
}
function Zc(e) {
  return xa(e, !0)
}
function xa(e, t) {
  return De(e) ? e : new Qc(e, t)
}
class Qc {
  constructor(t, n) {
    ;(this.dep = new zr()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Te(t)),
      (this._value = n ? t : Ue(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || yt(t) || cn(t)
    ;(t = s ? t : Te(t)),
      un(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ue(t)),
        this.dep.trigger())
  }
}
function U(e) {
  return De(e) ? e.value : e
}
function Rs(e) {
  return de(e) ? e() : U(e)
}
const ed = {
  get: (e, t, n) => (t === "__v_raw" ? e : U(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t]
    return De(i) && !De(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Sa(e) {
  return _n(e) ? e : new Proxy(e, ed)
}
function Ea(e) {
  const t = ae(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = nd(e, n)
  return t
}
class td {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const t = this._object[this._key]
    return (this._value = t === void 0 ? this._defaultValue : t)
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return jc(Te(this._object), this._key)
  }
}
function nd(e, t, n) {
  const s = e[t]
  return De(s) ? s : new td(e, t, n)
}
class sd {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new zr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = as - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Oe !== this))
      return aa(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return da(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function id(e, t, n = !1) {
  let s, i
  return de(e) ? (s = e) : ((s = e.get), (i = e.set)), new sd(s, i, n)
}
const Ps = {},
  Ks = new WeakMap()
let bn
function rd(e, t = !1, n = bn) {
  if (n) {
    let s = Ks.get(n)
    s || Ks.set(n, (s = [])), s.push(e)
  }
}
function ld(e, t, n = $e) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    u = (w) => (i ? w : yt(w) || i === !1 || i === 0 ? qt(w, 1) : qt(w))
  let c,
    d,
    f,
    h,
    g = !1,
    v = !1
  if (
    (De(e)
      ? ((d = () => e.value), (g = yt(e)))
      : _n(e)
        ? ((d = () => u(e)), (g = !0))
        : ae(e)
          ? ((v = !0),
            (g = e.some((w) => _n(w) || yt(w))),
            (d = () =>
              e.map((w) => {
                if (De(w)) return w.value
                if (_n(w)) return u(w)
                if (de(w)) return a ? a(w, 2) : w()
              })))
          : de(e)
            ? t
              ? (d = a ? () => a(e, 2) : e)
              : (d = () => {
                  if (f) {
                    Kt()
                    try {
                      f()
                    } finally {
                      Yt()
                    }
                  }
                  const w = bn
                  bn = c
                  try {
                    return a ? a(e, 3, [h]) : e(h)
                  } finally {
                    bn = w
                  }
                })
            : (d = Lt),
    t && i)
  ) {
    const w = d,
      E = i === !0 ? 1 / 0 : i
    d = () => qt(w(), E)
  }
  const x = ra(),
    y = () => {
      c.stop(), x && x.active && jr(x.effects, c)
    }
  if (r && t) {
    const w = t
    t = (...E) => {
      w(...E), y()
    }
  }
  let m = v ? new Array(e.length).fill(Ps) : Ps
  const b = (w) => {
    if (!(!(c.flags & 1) || (!c.dirty && !w)))
      if (t) {
        const E = c.run()
        if (i || g || (v ? E.some((P, C) => un(P, m[C])) : un(E, m))) {
          f && f()
          const P = bn
          bn = c
          try {
            const C = [E, m === Ps ? void 0 : v && m[0] === Ps ? [] : m, h]
            ;(m = E), a ? a(t, 3, C) : t(...C)
          } finally {
            bn = P
          }
        }
      } else c.run()
  }
  return (
    l && l(b),
    (c = new la(d)),
    (c.scheduler = o ? () => o(b, !1) : b),
    (h = (w) => rd(w, !1, c)),
    (f = c.onStop =
      () => {
        const w = Ks.get(c)
        if (w) {
          if (a) a(w, 4)
          else for (const E of w) E()
          Ks.delete(c)
        }
      }),
    t ? (s ? b(!0) : (m = c.run())) : o ? o(b.bind(null, !0), !0) : c.run(),
    (y.pause = c.pause.bind(c)),
    (y.resume = c.resume.bind(c)),
    (y.stop = y),
    y
  )
}
function qt(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !_e(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e
  if ((n.set(e, t), t--, De(e))) qt(e.value, t, n)
  else if (ae(e)) for (let s = 0; s < e.length; s++) qt(e[s], t, n)
  else if (Jo(e) || On(e))
    e.forEach((s) => {
      qt(s, t, n)
    })
  else if (ea(e)) {
    for (const s in e) qt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && qt(e[s], t, n)
  }
  return e
}
function ws(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (i) {
    hi(i, t, n)
  }
}
function Nt(e, t, n, s) {
  if (de(e)) {
    const i = ws(e, t, n, s)
    return (
      i &&
        Zo(i) &&
        i.catch((r) => {
          hi(r, t, n)
        }),
      i
    )
  }
  if (ae(e)) {
    const i = []
    for (let r = 0; r < e.length; r++) i.push(Nt(e[r], t, n, s))
    return i
  }
}
function hi(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || $e
  if (t) {
    let l = t.parent
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const c = l.ec
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](e, a, u) === !1) return
      }
      l = l.parent
    }
    if (r) {
      Kt(), ws(r, null, 10, [e, a, u]), Yt()
      return
    }
  }
  od(e, n, i, s, o)
}
function od(e, t, n, s = !0, i = !1) {
  if (i) throw e
  console.error(e)
}
const nt = []
let Ot = -1
const jn = []
let sn = null,
  Pn = 0
const Ca = Promise.resolve()
let Ys = null
function Sn(e) {
  const t = Ys || Ca
  return e ? t.then(this ? e.bind(this) : e) : t
}
function ad(e) {
  let t = Ot + 1,
    n = nt.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = nt[s],
      r = cs(i)
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Gr(e) {
  if (!(e.flags & 1)) {
    const t = cs(e),
      n = nt[nt.length - 1]
    !n || (!(e.flags & 2) && t >= cs(n)) ? nt.push(e) : nt.splice(ad(t), 0, e),
      (e.flags |= 1),
      Ta()
  }
}
function Ta() {
  Ys || (Ys = Ca.then(Pa))
}
function ud(e) {
  ae(e)
    ? jn.push(...e)
    : sn && e.id === -1
      ? sn.splice(Pn + 1, 0, e)
      : e.flags & 1 || (jn.push(e), (e.flags |= 1)),
    Ta()
}
function Ol(e, t, n = Ot + 1) {
  for (; n < nt.length; n++) {
    const s = nt[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      nt.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function ka(e) {
  if (jn.length) {
    const t = [...new Set(jn)].sort((n, s) => cs(n) - cs(s))
    if (((jn.length = 0), sn)) {
      sn.push(...t)
      return
    }
    for (sn = t, Pn = 0; Pn < sn.length; Pn++) {
      const n = sn[Pn]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(sn = null), (Pn = 0)
  }
}
const cs = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Pa(e) {
  try {
    for (Ot = 0; Ot < nt.length; Ot++) {
      const t = nt[Ot]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        ws(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ot < nt.length; Ot++) {
      const t = nt[Ot]
      t && (t.flags &= -2)
    }
    ;(Ot = -1),
      (nt.length = 0),
      ka(),
      (Ys = null),
      (nt.length || jn.length) && Pa()
  }
}
let Ke = null,
  Ia = null
function Xs(e) {
  const t = Ke
  return (Ke = e), (Ia = (e && e.type.__scopeId) || null), t
}
function me(e, t = Ke, n) {
  if (!t || e._n) return e
  const s = (...i) => {
    s._d && Qs(-1)
    const r = Xs(t)
    let o
    try {
      o = e(...i)
    } finally {
      Xs(r), s._d && Qs(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Ma(e, t) {
  if (Ke === null) return e
  const n = vi(Ke),
    s = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = $e] = t[i]
    r &&
      (de(r) && (r = { mounted: r, updated: r }),
      r.deep && qt(o),
      s.push({
        dir: r,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }))
  }
  return e
}
function gn(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs
  for (let o = 0; o < i.length; o++) {
    const l = i[o]
    r && (l.oldValue = r[o].value)
    let a = l.dir[s]
    a && (Kt(), Nt(a, n, 8, [e.el, l, e, t]), Yt())
  }
}
const cd = Symbol("_vte"),
  dd = (e) => e.__isTeleport,
  fd = Symbol("_leaveCb")
function Vr(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Vr(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Fe(e, t) {
  return de(e) ? et({ name: e.name }, t, { setup: e }) : e
}
function $a() {
  const e = xs()
  return e
    ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++
    : ""
}
function Aa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const Js = new WeakMap()
function ss(e, t, n, s, i = !1) {
  if (ae(e)) {
    e.forEach((g, v) => ss(g, t && (ae(t) ? t[v] : t), n, s, i))
    return
  }
  if (Ln(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      ss(e, t, n, s.component.subTree)
    return
  }
  const r = s.shapeFlag & 4 ? vi(s.component) : s.el,
    o = i ? null : r,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === $e ? (l.refs = {}) : l.refs,
    d = l.setupState,
    f = Te(d),
    h = d === $e ? Xo : (g) => Pe(f, g)
  if (u != null && u !== a) {
    if ((_l(t), Be(u))) (c[u] = null), h(u) && (d[u] = null)
    else if (De(u)) {
      u.value = null
      const g = t
      g.k && (c[g.k] = null)
    }
  }
  if (de(a)) ws(a, l, 12, [o, c])
  else {
    const g = Be(a),
      v = De(a)
    if (g || v) {
      const x = () => {
        if (e.f) {
          const y = g ? (h(a) ? d[a] : c[a]) : a.value
          if (i) ae(y) && jr(y, r)
          else if (ae(y)) y.includes(r) || y.push(r)
          else if (g) (c[a] = [r]), h(a) && (d[a] = c[a])
          else {
            const m = [r]
            ;(a.value = m), e.k && (c[e.k] = m)
          }
        } else
          g
            ? ((c[a] = o), h(a) && (d[a] = o))
            : v && ((a.value = o), e.k && (c[e.k] = o))
      }
      if (o) {
        const y = () => {
          x(), Js.delete(e)
        }
        ;(y.id = -1), Js.set(e, y), ct(y, n)
      } else _l(e), x()
    }
  }
}
function _l(e) {
  const t = Js.get(e)
  t && ((t.flags |= 8), Js.delete(e))
}
di().requestIdleCallback
di().cancelIdleCallback
const Ln = (e) => !!e.type.__asyncLoader,
  Oa = (e) => e.type.__isKeepAlive
function pd(e, t) {
  _a(e, "a", t)
}
function hd(e, t) {
  _a(e, "da", t)
}
function _a(e, t, n = Ze) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((gi(t, s, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) Oa(i.parent.vnode) && gd(s, t, n, i), (i = i.parent)
  }
}
function gd(e, t, n, s) {
  const i = gi(t, e, s, !0)
  Zt(() => {
    jr(s[t], i)
  }, n)
}
function gi(e, t, n = Ze, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          Kt()
          const l = Ss(n),
            a = Nt(t, n, e, o)
          return l(), Yt(), a
        })
    return s ? i.unshift(r) : i.push(r), r
  }
}
const Jt =
    (e) =>
    (t, n = Ze) => {
      ;(!ps || e === "sp") && gi(e, (...s) => t(...s), n)
    },
  md = Jt("bm"),
  qe = Jt("m"),
  Wr = Jt("bu"),
  qr = Jt("u"),
  Ur = Jt("bum"),
  Zt = Jt("um"),
  bd = Jt("sp"),
  vd = Jt("rtg"),
  yd = Jt("rtc")
function wd(e, t = Ze) {
  gi("ec", e, t)
}
const Kr = "components",
  xd = "directives"
function Sd(e, t) {
  return Yr(Kr, e, !0, t) || e
}
const ja = Symbol.for("v-ndc")
function Cn(e) {
  return Be(e) ? Yr(Kr, e, !1) || e : e || ja
}
function Ed(e) {
  return Yr(xd, e)
}
function Yr(e, t, n = !0, s = !1) {
  const i = Ke || Ze
  if (i) {
    const r = i.type
    if (e === Kr) {
      const l = df(r, !1)
      if (l && (l === t || l === wt(t) || l === ci(wt(t)))) return r
    }
    const o = jl(i[e] || r[e], t) || jl(i.appContext[e], t)
    return !o && s ? r : o
  }
}
function jl(e, t) {
  return e && (e[t] || e[wt(t)] || e[ci(wt(t))])
}
function Ve(e, t, n, s) {
  let i
  const r = n,
    o = ae(e)
  if (o || Be(e)) {
    const l = o && _n(e)
    let a = !1,
      u = !1
    l && ((a = !yt(e)), (u = cn(e)), (e = pi(e))), (i = new Array(e.length))
    for (let c = 0, d = e.length; c < d; c++)
      i[c] = t(a ? (u ? Us(Ue(e[c])) : Ue(e[c])) : e[c], c, void 0, r)
  } else if (typeof e == "number") {
    i = new Array(e)
    for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, r)
  } else if (_e(e))
    if (e[Symbol.iterator]) i = Array.from(e, (l, a) => t(l, a, void 0, r))
    else {
      const l = Object.keys(e)
      i = new Array(l.length)
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a]
        i[a] = t(e[c], c, a, r)
      }
    }
  else i = []
  return i
}
function Ye(e, t, n = {}, s, i) {
  if (Ke.ce || (Ke.parent && Ln(Ke.parent) && Ke.parent.ce)) {
    const u = Object.keys(n).length > 0
    return O(), oe(pe, null, [te("slot", n, s && s())], u ? -2 : 64)
  }
  let r = e[t]
  r && r._c && (r._d = !1), O()
  const o = r && La(r(n)),
    l = n.key || (o && o.key),
    a = oe(
      pe,
      { key: (l && !Xt(l) ? l : `_${t}`) + (!o && s ? "_fb" : "") },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
  )
}
function La(e) {
  return e.some((t) =>
    fs(t) ? !(t.type === Rt || (t.type === pe && !La(t.children))) : !0,
  )
    ? e
    : null
}
const mr = (e) => (e ? (eu(e) ? vi(e) : mr(e.parent)) : null),
  is = et(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mr(e.parent),
    $root: (e) => mr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Na(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Gr(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Sn.bind(e.proxy)),
    $watch: (e) => Vd.bind(e),
  }),
  $i = (e, t) => e !== $e && !e.__isScriptSetup && Pe(e, t),
  Cd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: l,
        appContext: a,
      } = e
      let u
      if (t[0] !== "$") {
        const h = o[t]
        if (h !== void 0)
          switch (h) {
            case 1:
              return s[t]
            case 2:
              return i[t]
            case 4:
              return n[t]
            case 3:
              return r[t]
          }
        else {
          if ($i(s, t)) return (o[t] = 1), s[t]
          if (i !== $e && Pe(i, t)) return (o[t] = 2), i[t]
          if ((u = e.propsOptions[0]) && Pe(u, t)) return (o[t] = 3), r[t]
          if (n !== $e && Pe(n, t)) return (o[t] = 4), n[t]
          br && (o[t] = 0)
        }
      }
      const c = is[t]
      let d, f
      if (c) return t === "$attrs" && Je(e.attrs, "get", ""), c(e)
      if ((d = l.__cssModules) && (d = d[t])) return d
      if (n !== $e && Pe(n, t)) return (o[t] = 4), n[t]
      if (((f = a.config.globalProperties), Pe(f, t))) return f[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e
      return $i(i, t)
        ? ((i[t] = n), !0)
        : s !== $e && Pe(s, t)
          ? ((s[t] = n), !0)
          : Pe(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((r[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
          type: o,
        },
      },
      l,
    ) {
      let a, u
      return !!(
        n[l] ||
        (e !== $e && l[0] !== "$" && Pe(e, l)) ||
        $i(t, l) ||
        ((a = r[0]) && Pe(a, l)) ||
        Pe(s, l) ||
        Pe(is, l) ||
        Pe(i.config.globalProperties, l) ||
        ((u = o.__cssModules) && u[l])
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
function Ll(e) {
  return ae(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let br = !0
function Td(e) {
  const t = Na(e),
    n = e.proxy,
    s = e.ctx
  ;(br = !1), t.beforeCreate && Bl(t.beforeCreate, e, "bc")
  const {
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: g,
    activated: v,
    deactivated: x,
    beforeDestroy: y,
    beforeUnmount: m,
    destroyed: b,
    unmounted: w,
    render: E,
    renderTracked: P,
    renderTriggered: C,
    errorCaptured: A,
    serverPrefetch: I,
    expose: $,
    inheritAttrs: j,
    components: G,
    directives: q,
    filters: fe,
  } = t
  if ((u && kd(u, s, null), o))
    for (const R in o) {
      const L = o[R]
      de(L) && (s[R] = L.bind(n))
    }
  if (i) {
    const R = i.call(n, n)
    _e(R) && (e.data = ys(R))
  }
  if (((br = !0), r))
    for (const R in r) {
      const L = r[R],
        xe = de(L) ? L.bind(n, n) : de(L.get) ? L.get.bind(n, n) : Lt,
        be = !de(L) && de(L.set) ? L.set.bind(n) : Lt,
        je = Z({ get: xe, set: be })
      Object.defineProperty(s, R, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (Le) => (je.value = Le),
      })
    }
  if (l) for (const R in l) Ba(l[R], s, n, R)
  if (a) {
    const R = de(a) ? a.call(n) : a
    Reflect.ownKeys(R).forEach((L) => {
      ht(L, R[L])
    })
  }
  c && Bl(c, e, "c")
  function _(R, L) {
    ae(L) ? L.forEach((xe) => R(xe.bind(n))) : L && R(L.bind(n))
  }
  if (
    (_(md, d),
    _(qe, f),
    _(Wr, h),
    _(qr, g),
    _(pd, v),
    _(hd, x),
    _(wd, A),
    _(yd, P),
    _(vd, C),
    _(Ur, m),
    _(Zt, w),
    _(bd, I),
    ae($))
  )
    if ($.length) {
      const R = e.exposed || (e.exposed = {})
      $.forEach((L) => {
        Object.defineProperty(R, L, {
          get: () => n[L],
          set: (xe) => (n[L] = xe),
          enumerable: !0,
        })
      })
    } else e.exposed || (e.exposed = {})
  E && e.render === Lt && (e.render = E),
    j != null && (e.inheritAttrs = j),
    G && (e.components = G),
    q && (e.directives = q),
    I && Aa(e)
}
function kd(e, t, n = Lt) {
  ae(e) && (e = vr(e))
  for (const s in e) {
    const i = e[s]
    let r
    _e(i)
      ? "default" in i
        ? (r = Re(i.from || s, i.default, !0))
        : (r = Re(i.from || s))
      : (r = Re(i)),
      De(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (t[s] = r)
  }
}
function Bl(e, t, n) {
  Nt(ae(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ba(e, t, n, s) {
  let i = s.includes(".") ? Ya(n, s) : () => n[s]
  if (Be(e)) {
    const r = t[e]
    de(r) && st(i, r)
  } else if (de(e)) st(i, e.bind(n))
  else if (_e(e))
    if (ae(e)) e.forEach((r) => Ba(r, t, n, s))
    else {
      const r = de(e.handler) ? e.handler.bind(n) : t[e.handler]
      de(r) && st(i, r, e)
    }
}
function Na(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = r.get(t)
  let a
  return (
    l
      ? (a = l)
      : !i.length && !n && !s
        ? (a = t)
        : ((a = {}),
          i.length && i.forEach((u) => Zs(a, u, o, !0)),
          Zs(a, t, o)),
    _e(t) && r.set(t, a),
    a
  )
}
function Zs(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t
  r && Zs(e, r, n, !0), i && i.forEach((o) => Zs(e, o, n, !0))
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Pd[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Pd = {
  data: Nl,
  props: Rl,
  emits: Rl,
  methods: Qn,
  computed: Qn,
  beforeCreate: tt,
  created: tt,
  beforeMount: tt,
  mounted: tt,
  beforeUpdate: tt,
  updated: tt,
  beforeDestroy: tt,
  beforeUnmount: tt,
  destroyed: tt,
  unmounted: tt,
  activated: tt,
  deactivated: tt,
  errorCaptured: tt,
  serverPrefetch: tt,
  components: Qn,
  directives: Qn,
  watch: Md,
  provide: Nl,
  inject: Id,
}
function Nl(e, t) {
  return t
    ? e
      ? function () {
          return et(
            de(e) ? e.call(this, this) : e,
            de(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function Id(e, t) {
  return Qn(vr(e), vr(t))
}
function vr(e) {
  if (ae(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Qn(e, t) {
  return e ? et(Object.create(null), e, t) : t
}
function Rl(e, t) {
  return e
    ? ae(e) && ae(t)
      ? [...new Set([...e, ...t])]
      : et(Object.create(null), Ll(e), Ll(t ?? {}))
    : t
}
function Md(e, t) {
  if (!e) return t
  if (!t) return e
  const n = et(Object.create(null), e)
  for (const s in t) n[s] = tt(e[s], t[s])
  return n
}
function Ra() {
  return {
    app: null,
    config: {
      isNativeTag: Xo,
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
let $d = 0
function Ad(e, t) {
  return function (s, i = null) {
    de(s) || (s = et({}, s)), i != null && !_e(i) && (i = null)
    const r = Ra(),
      o = new WeakSet(),
      l = []
    let a = !1
    const u = (r.app = {
      _uid: $d++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: pf,
      get config() {
        return r.config
      },
      set config(c) {},
      use(c, ...d) {
        return (
          o.has(c) ||
            (c && de(c.install)
              ? (o.add(c), c.install(u, ...d))
              : de(c) && (o.add(c), c(u, ...d))),
          u
        )
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u
      },
      component(c, d) {
        return d ? ((r.components[c] = d), u) : r.components[c]
      },
      directive(c, d) {
        return d ? ((r.directives[c] = d), u) : r.directives[c]
      },
      mount(c, d, f) {
        if (!a) {
          const h = u._ceVNode || te(s, i)
          return (
            (h.appContext = r),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            e(h, c, f),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            vi(h.component)
          )
        }
      },
      onUnmount(c) {
        l.push(c)
      },
      unmount() {
        a &&
          (Nt(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__)
      },
      provide(c, d) {
        return (r.provides[c] = d), u
      },
      runWithContext(c) {
        const d = Bn
        Bn = u
        try {
          return c()
        } finally {
          Bn = d
        }
      },
    })
    return u
  }
}
let Bn = null
function ht(e, t) {
  if (Ze) {
    let n = Ze.provides
    const s = Ze.parent && Ze.parent.provides
    s === n && (n = Ze.provides = Object.create(s)), (n[e] = t)
  }
}
function Re(e, t, n = !1) {
  const s = xs()
  if (s || Bn) {
    let i = Bn
      ? Bn._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && de(t) ? t.call(s && s.proxy) : t
  }
}
const za = {},
  Da = () => Object.create(za),
  Fa = (e) => Object.getPrototypeOf(e) === za
function Od(e, t, n, s = !1) {
  const i = {},
    r = Da()
  ;(e.propsDefaults = Object.create(null)), Ha(e, t, i, r)
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0)
  n ? (e.props = s ? i : wa(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r)
}
function _d(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    l = Te(i),
    [a] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps
      for (let d = 0; d < c.length; d++) {
        let f = c[d]
        if (mi(e.emitsOptions, f)) continue
        const h = t[f]
        if (a)
          if (Pe(r, f)) h !== r[f] && ((r[f] = h), (u = !0))
          else {
            const g = wt(f)
            i[g] = yr(a, l, g, h, e, !1)
          }
        else h !== r[f] && ((r[f] = h), (u = !0))
      }
    }
  } else {
    Ha(e, t, i, r) && (u = !0)
    let c
    for (const d in l)
      (!t || (!Pe(t, d) && ((c = xn(d)) === d || !Pe(t, c)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[c] !== void 0) &&
            (i[d] = yr(a, l, d, void 0, e, !0))
          : delete i[d])
    if (r !== l) for (const d in r) (!t || !Pe(t, d)) && (delete r[d], (u = !0))
  }
  u && Wt(e.attrs, "set", "")
}
function Ha(e, t, n, s) {
  const [i, r] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let a in t) {
      if (es(a)) continue
      const u = t[a]
      let c
      i && Pe(i, (c = wt(a)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : mi(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (o = !0)))
    }
  if (r) {
    const a = Te(n),
      u = l || $e
    for (let c = 0; c < r.length; c++) {
      const d = r[c]
      n[d] = yr(i, a, d, u[d], e, !Pe(u, d))
    }
  }
  return o
}
function yr(e, t, n, s, i, r) {
  const o = e[n]
  if (o != null) {
    const l = Pe(o, "default")
    if (l && s === void 0) {
      const a = o.default
      if (o.type !== Function && !o.skipFactory && de(a)) {
        const { propsDefaults: u } = i
        if (n in u) s = u[n]
        else {
          const c = Ss(i)
          ;(s = u[n] = a.call(null, t)), c()
        }
      } else s = a
      i.ce && i.ce._setProp(n, s)
    }
    o[0] && (r && !l ? (s = !1) : o[1] && (s === "" || s === xn(n)) && (s = !0))
  }
  return s
}
const jd = new WeakMap()
function Ga(e, t, n = !1) {
  const s = n ? jd : t.propsCache,
    i = s.get(e)
  if (i) return i
  const r = e.props,
    o = {},
    l = []
  let a = !1
  if (!de(e)) {
    const c = (d) => {
      a = !0
      const [f, h] = Ga(d, t, !0)
      et(o, f), h && l.push(...h)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!r && !a) return _e(e) && s.set(e, An), An
  if (ae(r))
    for (let c = 0; c < r.length; c++) {
      const d = wt(r[c])
      zl(d) && (o[d] = $e)
    }
  else if (r)
    for (const c in r) {
      const d = wt(c)
      if (zl(d)) {
        const f = r[c],
          h = (o[d] = ae(f) || de(f) ? { type: f } : et({}, f)),
          g = h.type
        let v = !1,
          x = !0
        if (ae(g))
          for (let y = 0; y < g.length; ++y) {
            const m = g[y],
              b = de(m) && m.name
            if (b === "Boolean") {
              v = !0
              break
            } else b === "String" && (x = !1)
          }
        else v = de(g) && g.name === "Boolean"
        ;(h[0] = v), (h[1] = x), (v || Pe(h, "default")) && l.push(d)
      }
    }
  const u = [o, l]
  return _e(e) && s.set(e, u), u
}
function zl(e) {
  return e[0] !== "$" && !es(e)
}
const Xr = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Jr = (e) => (ae(e) ? e.map(_t) : [_t(e)]),
  Ld = (e, t, n) => {
    if (t._n) return t
    const s = me((...i) => Jr(t(...i)), n)
    return (s._c = !1), s
  },
  Va = (e, t, n) => {
    const s = e._ctx
    for (const i in e) {
      if (Xr(i)) continue
      const r = e[i]
      if (de(r)) t[i] = Ld(i, r, s)
      else if (r != null) {
        const o = Jr(r)
        t[i] = () => o
      }
    }
  },
  Wa = (e, t) => {
    const n = Jr(t)
    e.slots.default = () => n
  },
  qa = (e, t, n) => {
    for (const s in t) (n || !Xr(s)) && (e[s] = t[s])
  },
  Bd = (e, t, n) => {
    const s = (e.slots = Da())
    if (e.vnode.shapeFlag & 32) {
      const i = t._
      i ? (qa(s, t, n), n && ta(s, "_", i, !0)) : Va(t, s)
    } else t && Wa(e, t)
  },
  Nd = (e, t, n) => {
    const { vnode: s, slots: i } = e
    let r = !0,
      o = $e
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (r = !1)
          : qa(i, t, n)
        : ((r = !t.$stable), Va(t, i)),
        (o = t)
    } else t && (Wa(e, t), (o = { default: 1 }))
    if (r) for (const l in i) !Xr(l) && o[l] == null && delete i[l]
  },
  ct = Zd
function Rd(e) {
  return zd(e)
}
function zd(e, t) {
  const n = di()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: d,
      nextSibling: f,
      setScopeId: h = Lt,
      insertStaticContent: g,
    } = e,
    v = (
      S,
      T,
      M,
      z = null,
      H = null,
      N = null,
      J = void 0,
      Y = null,
      K = !!T.dynamicChildren,
    ) => {
      if (S === T) return
      S && !Kn(S, T) && ((z = B(S)), Le(S, H, N, !0), (S = null)),
        T.patchFlag === -2 && ((K = !1), (T.dynamicChildren = null))
      const { type: V, ref: re, shapeFlag: Q } = T
      switch (V) {
        case bi:
          x(S, T, M, z)
          break
        case Rt:
          y(S, T, M, z)
          break
        case zs:
          S == null && m(T, M, z, J)
          break
        case pe:
          G(S, T, M, z, H, N, J, Y, K)
          break
        default:
          Q & 1
            ? E(S, T, M, z, H, N, J, Y, K)
            : Q & 6
              ? q(S, T, M, z, H, N, J, Y, K)
              : (Q & 64 || Q & 128) && V.process(S, T, M, z, H, N, J, Y, K, se)
      }
      re != null && H
        ? ss(re, S && S.ref, N, T || S, !T)
        : re == null && S && S.ref != null && ss(S.ref, null, N, S, !0)
    },
    x = (S, T, M, z) => {
      if (S == null) s((T.el = l(T.children)), M, z)
      else {
        const H = (T.el = S.el)
        T.children !== S.children && u(H, T.children)
      }
    },
    y = (S, T, M, z) => {
      S == null ? s((T.el = a(T.children || "")), M, z) : (T.el = S.el)
    },
    m = (S, T, M, z) => {
      ;[S.el, S.anchor] = g(S.children, T, M, z, S.el, S.anchor)
    },
    b = ({ el: S, anchor: T }, M, z) => {
      let H
      for (; S && S !== T; ) (H = f(S)), s(S, M, z), (S = H)
      s(T, M, z)
    },
    w = ({ el: S, anchor: T }) => {
      let M
      for (; S && S !== T; ) (M = f(S)), i(S), (S = M)
      i(T)
    },
    E = (S, T, M, z, H, N, J, Y, K) => {
      T.type === "svg" ? (J = "svg") : T.type === "math" && (J = "mathml"),
        S == null ? P(T, M, z, H, N, J, Y, K) : I(S, T, H, N, J, Y, K)
    },
    P = (S, T, M, z, H, N, J, Y) => {
      let K, V
      const { props: re, shapeFlag: Q, transition: ie, dirs: ue } = S
      if (
        ((K = S.el = o(S.type, N, re && re.is, re)),
        Q & 8
          ? c(K, S.children)
          : Q & 16 && A(S.children, K, null, z, H, Ai(S, N), J, Y),
        ue && gn(S, null, z, "created"),
        C(K, S, S.scopeId, J, z),
        re)
      ) {
        for (const Ae in re)
          Ae !== "value" && !es(Ae) && r(K, Ae, null, re[Ae], N, z)
        "value" in re && r(K, "value", null, re.value, N),
          (V = re.onVnodeBeforeMount) && $t(V, z, S)
      }
      ue && gn(S, null, z, "beforeMount")
      const Se = Dd(H, ie)
      Se && ie.beforeEnter(K),
        s(K, T, M),
        ((V = re && re.onVnodeMounted) || Se || ue) &&
          ct(() => {
            V && $t(V, z, S), Se && ie.enter(K), ue && gn(S, null, z, "mounted")
          }, H)
    },
    C = (S, T, M, z, H) => {
      if ((M && h(S, M), z)) for (let N = 0; N < z.length; N++) h(S, z[N])
      if (H) {
        let N = H.subTree
        if (
          T === N ||
          (Ja(N.type) && (N.ssContent === T || N.ssFallback === T))
        ) {
          const J = H.vnode
          C(S, J, J.scopeId, J.slotScopeIds, H.parent)
        }
      }
    },
    A = (S, T, M, z, H, N, J, Y, K = 0) => {
      for (let V = K; V < S.length; V++) {
        const re = (S[V] = Y ? rn(S[V]) : _t(S[V]))
        v(null, re, T, M, z, H, N, J, Y)
      }
    },
    I = (S, T, M, z, H, N, J) => {
      const Y = (T.el = S.el)
      let { patchFlag: K, dynamicChildren: V, dirs: re } = T
      K |= S.patchFlag & 16
      const Q = S.props || $e,
        ie = T.props || $e
      let ue
      if (
        (M && mn(M, !1),
        (ue = ie.onVnodeBeforeUpdate) && $t(ue, M, T, S),
        re && gn(T, S, M, "beforeUpdate"),
        M && mn(M, !0),
        ((Q.innerHTML && ie.innerHTML == null) ||
          (Q.textContent && ie.textContent == null)) &&
          c(Y, ""),
        V
          ? $(S.dynamicChildren, V, Y, M, z, Ai(T, H), N)
          : J || L(S, T, Y, null, M, z, Ai(T, H), N, !1),
        K > 0)
      ) {
        if (K & 16) j(Y, Q, ie, M, H)
        else if (
          (K & 2 && Q.class !== ie.class && r(Y, "class", null, ie.class, H),
          K & 4 && r(Y, "style", Q.style, ie.style, H),
          K & 8)
        ) {
          const Se = T.dynamicProps
          for (let Ae = 0; Ae < Se.length; Ae++) {
            const Ie = Se[Ae],
              lt = Q[Ie],
              ot = ie[Ie]
            ;(ot !== lt || Ie === "value") && r(Y, Ie, lt, ot, H, M)
          }
        }
        K & 1 && S.children !== T.children && c(Y, T.children)
      } else !J && V == null && j(Y, Q, ie, M, H)
      ;((ue = ie.onVnodeUpdated) || re) &&
        ct(() => {
          ue && $t(ue, M, T, S), re && gn(T, S, M, "updated")
        }, z)
    },
    $ = (S, T, M, z, H, N, J) => {
      for (let Y = 0; Y < T.length; Y++) {
        const K = S[Y],
          V = T[Y],
          re =
            K.el && (K.type === pe || !Kn(K, V) || K.shapeFlag & 198)
              ? d(K.el)
              : M
        v(K, V, re, null, z, H, N, J, !0)
      }
    },
    j = (S, T, M, z, H) => {
      if (T !== M) {
        if (T !== $e)
          for (const N in T) !es(N) && !(N in M) && r(S, N, T[N], null, H, z)
        for (const N in M) {
          if (es(N)) continue
          const J = M[N],
            Y = T[N]
          J !== Y && N !== "value" && r(S, N, Y, J, H, z)
        }
        "value" in M && r(S, "value", T.value, M.value, H)
      }
    },
    G = (S, T, M, z, H, N, J, Y, K) => {
      const V = (T.el = S ? S.el : l("")),
        re = (T.anchor = S ? S.anchor : l(""))
      let { patchFlag: Q, dynamicChildren: ie, slotScopeIds: ue } = T
      ue && (Y = Y ? Y.concat(ue) : ue),
        S == null
          ? (s(V, M, z), s(re, M, z), A(T.children || [], M, re, H, N, J, Y, K))
          : Q > 0 && Q & 64 && ie && S.dynamicChildren
            ? ($(S.dynamicChildren, ie, M, H, N, J, Y),
              (T.key != null || (H && T === H.subTree)) && Ua(S, T, !0))
            : L(S, T, M, re, H, N, J, Y, K)
    },
    q = (S, T, M, z, H, N, J, Y, K) => {
      ;(T.slotScopeIds = Y),
        S == null
          ? T.shapeFlag & 512
            ? H.ctx.activate(T, M, z, J, K)
            : fe(T, M, z, H, N, J, K)
          : ge(S, T, K)
    },
    fe = (S, T, M, z, H, N, J) => {
      const Y = (S.component = lf(S, z, H))
      if ((Oa(S) && (Y.ctx.renderer = se), of(Y, !1, J), Y.asyncDep)) {
        if ((H && H.registerDep(Y, _, J), !S.el)) {
          const K = (Y.subTree = te(Rt))
          y(null, K, T, M), (S.placeholder = K.el)
        }
      } else _(Y, S, T, M, H, N, J)
    },
    ge = (S, T, M) => {
      const z = (T.component = S.component)
      if (Xd(S, T, M))
        if (z.asyncDep && !z.asyncResolved) {
          R(z, T, M)
          return
        } else (z.next = T), z.update()
      else (T.el = S.el), (z.vnode = T)
    },
    _ = (S, T, M, z, H, N, J) => {
      const Y = () => {
        if (S.isMounted) {
          let { next: Q, bu: ie, u: ue, parent: Se, vnode: Ae } = S
          {
            const It = Ka(S)
            if (It) {
              Q && ((Q.el = Ae.el), R(S, Q, J)),
                It.asyncDep.then(() => {
                  S.isUnmounted || Y()
                })
              return
            }
          }
          let Ie = Q,
            lt
          mn(S, !1),
            Q ? ((Q.el = Ae.el), R(S, Q, J)) : (Q = Ae),
            ie && Ns(ie),
            (lt = Q.props && Q.props.onVnodeBeforeUpdate) && $t(lt, Se, Q, Ae),
            mn(S, !0)
          const ot = Fl(S),
            Pt = S.subTree
          ;(S.subTree = ot),
            v(Pt, ot, d(Pt.el), B(Pt), S, H, N),
            (Q.el = ot.el),
            Ie === null && Jd(S, ot.el),
            ue && ct(ue, H),
            (lt = Q.props && Q.props.onVnodeUpdated) &&
              ct(() => $t(lt, Se, Q, Ae), H)
        } else {
          let Q
          const { el: ie, props: ue } = T,
            { bm: Se, m: Ae, parent: Ie, root: lt, type: ot } = S,
            Pt = Ln(T)
          mn(S, !1),
            Se && Ns(Se),
            !Pt && (Q = ue && ue.onVnodeBeforeMount) && $t(Q, Ie, T),
            mn(S, !0)
          {
            lt.ce && lt.ce._def.shadowRoot !== !1 && lt.ce._injectChildStyle(ot)
            const It = (S.subTree = Fl(S))
            v(null, It, M, z, S, H, N), (T.el = It.el)
          }
          if ((Ae && ct(Ae, H), !Pt && (Q = ue && ue.onVnodeMounted))) {
            const It = T
            ct(() => $t(Q, Ie, It), H)
          }
          ;(T.shapeFlag & 256 ||
            (Ie && Ln(Ie.vnode) && Ie.vnode.shapeFlag & 256)) &&
            S.a &&
            ct(S.a, H),
            (S.isMounted = !0),
            (T = M = z = null)
        }
      }
      S.scope.on()
      const K = (S.effect = new la(Y))
      S.scope.off()
      const V = (S.update = K.run.bind(K)),
        re = (S.job = K.runIfDirty.bind(K))
      ;(re.i = S), (re.id = S.uid), (K.scheduler = () => Gr(re)), mn(S, !0), V()
    },
    R = (S, T, M) => {
      T.component = S
      const z = S.vnode.props
      ;(S.vnode = T),
        (S.next = null),
        _d(S, T.props, z, M),
        Nd(S, T.children, M),
        Kt(),
        Ol(S),
        Yt()
    },
    L = (S, T, M, z, H, N, J, Y, K = !1) => {
      const V = S && S.children,
        re = S ? S.shapeFlag : 0,
        Q = T.children,
        { patchFlag: ie, shapeFlag: ue } = T
      if (ie > 0) {
        if (ie & 128) {
          be(V, Q, M, z, H, N, J, Y, K)
          return
        } else if (ie & 256) {
          xe(V, Q, M, z, H, N, J, Y, K)
          return
        }
      }
      ue & 8
        ? (re & 16 && rt(V, H, N), Q !== V && c(M, Q))
        : re & 16
          ? ue & 16
            ? be(V, Q, M, z, H, N, J, Y, K)
            : rt(V, H, N, !0)
          : (re & 8 && c(M, ""), ue & 16 && A(Q, M, z, H, N, J, Y, K))
    },
    xe = (S, T, M, z, H, N, J, Y, K) => {
      ;(S = S || An), (T = T || An)
      const V = S.length,
        re = T.length,
        Q = Math.min(V, re)
      let ie
      for (ie = 0; ie < Q; ie++) {
        const ue = (T[ie] = K ? rn(T[ie]) : _t(T[ie]))
        v(S[ie], ue, M, null, H, N, J, Y, K)
      }
      V > re ? rt(S, H, N, !0, !1, Q) : A(T, M, z, H, N, J, Y, K, Q)
    },
    be = (S, T, M, z, H, N, J, Y, K) => {
      let V = 0
      const re = T.length
      let Q = S.length - 1,
        ie = re - 1
      for (; V <= Q && V <= ie; ) {
        const ue = S[V],
          Se = (T[V] = K ? rn(T[V]) : _t(T[V]))
        if (Kn(ue, Se)) v(ue, Se, M, null, H, N, J, Y, K)
        else break
        V++
      }
      for (; V <= Q && V <= ie; ) {
        const ue = S[Q],
          Se = (T[ie] = K ? rn(T[ie]) : _t(T[ie]))
        if (Kn(ue, Se)) v(ue, Se, M, null, H, N, J, Y, K)
        else break
        Q--, ie--
      }
      if (V > Q) {
        if (V <= ie) {
          const ue = ie + 1,
            Se = ue < re ? T[ue].el : z
          for (; V <= ie; )
            v(null, (T[V] = K ? rn(T[V]) : _t(T[V])), M, Se, H, N, J, Y, K), V++
        }
      } else if (V > ie) for (; V <= Q; ) Le(S[V], H, N, !0), V++
      else {
        const ue = V,
          Se = V,
          Ae = new Map()
        for (V = Se; V <= ie; V++) {
          const ut = (T[V] = K ? rn(T[V]) : _t(T[V]))
          ut.key != null && Ae.set(ut.key, V)
        }
        let Ie,
          lt = 0
        const ot = ie - Se + 1
        let Pt = !1,
          It = 0
        const qn = new Array(ot)
        for (V = 0; V < ot; V++) qn[V] = 0
        for (V = ue; V <= Q; V++) {
          const ut = S[V]
          if (lt >= ot) {
            Le(ut, H, N, !0)
            continue
          }
          let Mt
          if (ut.key != null) Mt = Ae.get(ut.key)
          else
            for (Ie = Se; Ie <= ie; Ie++)
              if (qn[Ie - Se] === 0 && Kn(ut, T[Ie])) {
                Mt = Ie
                break
              }
          Mt === void 0
            ? Le(ut, H, N, !0)
            : ((qn[Mt - Se] = V + 1),
              Mt >= It ? (It = Mt) : (Pt = !0),
              v(ut, T[Mt], M, null, H, N, J, Y, K),
              lt++)
        }
        const kl = Pt ? Fd(qn) : An
        for (Ie = kl.length - 1, V = ot - 1; V >= 0; V--) {
          const ut = Se + V,
            Mt = T[ut],
            Pl = T[ut + 1],
            Il = ut + 1 < re ? Pl.el || Pl.placeholder : z
          qn[V] === 0
            ? v(null, Mt, M, Il, H, N, J, Y, K)
            : Pt && (Ie < 0 || V !== kl[Ie] ? je(Mt, M, Il, 2) : Ie--)
        }
      }
    },
    je = (S, T, M, z, H = null) => {
      const { el: N, type: J, transition: Y, children: K, shapeFlag: V } = S
      if (V & 6) {
        je(S.component.subTree, T, M, z)
        return
      }
      if (V & 128) {
        S.suspense.move(T, M, z)
        return
      }
      if (V & 64) {
        J.move(S, T, M, se)
        return
      }
      if (J === pe) {
        s(N, T, M)
        for (let Q = 0; Q < K.length; Q++) je(K[Q], T, M, z)
        s(S.anchor, T, M)
        return
      }
      if (J === zs) {
        b(S, T, M)
        return
      }
      if (z !== 2 && V & 1 && Y)
        if (z === 0) Y.beforeEnter(N), s(N, T, M), ct(() => Y.enter(N), H)
        else {
          const { leave: Q, delayLeave: ie, afterLeave: ue } = Y,
            Se = () => {
              S.ctx.isUnmounted ? i(N) : s(N, T, M)
            },
            Ae = () => {
              N._isLeaving && N[fd](!0),
                Q(N, () => {
                  Se(), ue && ue()
                })
            }
          ie ? ie(N, Se, Ae) : Ae()
        }
      else s(N, T, M)
    },
    Le = (S, T, M, z = !1, H = !1) => {
      const {
        type: N,
        props: J,
        ref: Y,
        children: K,
        dynamicChildren: V,
        shapeFlag: re,
        patchFlag: Q,
        dirs: ie,
        cacheIndex: ue,
      } = S
      if (
        (Q === -2 && (H = !1),
        Y != null && (Kt(), ss(Y, null, M, S, !0), Yt()),
        ue != null && (T.renderCache[ue] = void 0),
        re & 256)
      ) {
        T.ctx.deactivate(S)
        return
      }
      const Se = re & 1 && ie,
        Ae = !Ln(S)
      let Ie
      if ((Ae && (Ie = J && J.onVnodeBeforeUnmount) && $t(Ie, T, S), re & 6))
        vt(S.component, M, z)
      else {
        if (re & 128) {
          S.suspense.unmount(M, z)
          return
        }
        Se && gn(S, null, T, "beforeUnmount"),
          re & 64
            ? S.type.remove(S, T, M, se, z)
            : V && !V.hasOnce && (N !== pe || (Q > 0 && Q & 64))
              ? rt(V, T, M, !1, !0)
              : ((N === pe && Q & 384) || (!H && re & 16)) && rt(K, T, M),
          z && bt(S)
      }
      ;((Ae && (Ie = J && J.onVnodeUnmounted)) || Se) &&
        ct(() => {
          Ie && $t(Ie, T, S), Se && gn(S, null, T, "unmounted")
        }, M)
    },
    bt = (S) => {
      const { type: T, el: M, anchor: z, transition: H } = S
      if (T === pe) {
        tn(M, z)
        return
      }
      if (T === zs) {
        w(S)
        return
      }
      const N = () => {
        i(M), H && !H.persisted && H.afterLeave && H.afterLeave()
      }
      if (S.shapeFlag & 1 && H && !H.persisted) {
        const { leave: J, delayLeave: Y } = H,
          K = () => J(M, N)
        Y ? Y(S.el, N, K) : K()
      } else N()
    },
    tn = (S, T) => {
      let M
      for (; S !== T; ) (M = f(S)), i(S), (S = M)
      i(T)
    },
    vt = (S, T, M) => {
      const { bum: z, scope: H, job: N, subTree: J, um: Y, m: K, a: V } = S
      Dl(K),
        Dl(V),
        z && Ns(z),
        H.stop(),
        N && ((N.flags |= 8), Le(J, S, T, M)),
        Y && ct(Y, T),
        ct(() => {
          S.isUnmounted = !0
        }, T)
    },
    rt = (S, T, M, z = !1, H = !1, N = 0) => {
      for (let J = N; J < S.length; J++) Le(S[J], T, M, z, H)
    },
    B = (S) => {
      if (S.shapeFlag & 6) return B(S.component.subTree)
      if (S.shapeFlag & 128) return S.suspense.next()
      const T = f(S.anchor || S.el),
        M = T && T[cd]
      return M ? f(M) : T
    }
  let ee = !1
  const X = (S, T, M) => {
      S == null
        ? T._vnode && Le(T._vnode, null, null, !0)
        : v(T._vnode || null, S, T, null, null, null, M),
        (T._vnode = S),
        ee || ((ee = !0), Ol(), ka(), (ee = !1))
    },
    se = {
      p: v,
      um: Le,
      m: je,
      r: bt,
      mt: fe,
      mc: A,
      pc: L,
      pbc: $,
      n: B,
      o: e,
    }
  return { render: X, hydrate: void 0, createApp: Ad(X) }
}
function Ai({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function mn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Dd(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ua(e, t, n = !1) {
  const s = e.children,
    i = t.children
  if (ae(s) && ae(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r]
      let l = i[r]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = i[r] = rn(i[r])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Ua(o, l)),
        l.type === bi && l.patchFlag !== -1 && (l.el = o.el),
        l.type === Rt && !l.el && (l.el = o.el)
    }
}
function Fd(e) {
  const t = e.slice(),
    n = [0]
  let s, i, r, o, l
  const a = e.length
  for (s = 0; s < a; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        ;(t[s] = i), n.push(s)
        continue
      }
      for (r = 0, o = n.length - 1; r < o; )
        (l = (r + o) >> 1), e[n[l]] < u ? (r = l + 1) : (o = l)
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s))
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o])
  return n
}
function Ka(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ka(t)
}
function Dl(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Hd = Symbol.for("v-scx"),
  Gd = () => Re(Hd)
function Qt(e, t) {
  return Zr(e, null, t)
}
function st(e, t, n) {
  return Zr(e, t, n)
}
function Zr(e, t, n = $e) {
  const { immediate: s, deep: i, flush: r, once: o } = n,
    l = et({}, n),
    a = (t && s) || (!t && r !== "post")
  let u
  if (ps) {
    if (r === "sync") {
      const h = Gd()
      u = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!a) {
      const h = () => {}
      return (h.stop = Lt), (h.resume = Lt), (h.pause = Lt), h
    }
  }
  const c = Ze
  l.call = (h, g, v) => Nt(h, c, g, v)
  let d = !1
  r === "post"
    ? (l.scheduler = (h) => {
        ct(h, c && c.suspense)
      })
    : r !== "sync" &&
      ((d = !0),
      (l.scheduler = (h, g) => {
        g ? h() : Gr(h)
      })),
    (l.augmentJob = (h) => {
      t && (h.flags |= 4),
        d && ((h.flags |= 2), c && ((h.id = c.uid), (h.i = c)))
    })
  const f = ld(e, t, l)
  return ps && (u ? u.push(f) : a && f()), f
}
function Vd(e, t, n) {
  const s = this.proxy,
    i = Be(e) ? (e.includes(".") ? Ya(s, e) : () => s[e]) : e.bind(s, s)
  let r
  de(t) ? (r = t) : ((r = t.handler), (n = t))
  const o = Ss(this),
    l = Zr(i, r.bind(s), n)
  return o(), l
}
function Ya(e, t) {
  const n = t.split(".")
  return () => {
    let s = e
    for (let i = 0; i < n.length && s; i++) s = s[n[i]]
    return s
  }
}
const Wd = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${xn(t)}Modifiers`]
function qd(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || $e
  let i = n
  const r = t.startsWith("update:"),
    o = r && Wd(s, t.slice(7))
  o &&
    (o.trim && (i = n.map((c) => (Be(c) ? c.trim() : c))),
    o.number && (i = n.map(dr)))
  let l,
    a = s[(l = Ti(t))] || s[(l = Ti(wt(t)))]
  !a && r && (a = s[(l = Ti(xn(t)))]), a && Nt(a, e, 6, i)
  const u = s[l + "Once"]
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Nt(u, e, 6, i)
  }
}
const Ud = new WeakMap()
function Xa(e, t, n = !1) {
  const s = n ? Ud : t.emitsCache,
    i = s.get(e)
  if (i !== void 0) return i
  const r = e.emits
  let o = {},
    l = !1
  if (!de(e)) {
    const a = (u) => {
      const c = Xa(u, t, !0)
      c && ((l = !0), et(o, c))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !r && !l
    ? (_e(e) && s.set(e, null), null)
    : (ae(r) ? r.forEach((a) => (o[a] = null)) : et(o, r),
      _e(e) && s.set(e, o),
      o)
}
function mi(e, t) {
  return !e || !oi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Pe(e, t[0].toLowerCase() + t.slice(1)) || Pe(e, xn(t)) || Pe(e, t))
}
function Fl(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: o,
      attrs: l,
      emit: a,
      render: u,
      renderCache: c,
      props: d,
      data: f,
      setupState: h,
      ctx: g,
      inheritAttrs: v,
    } = e,
    x = Xs(e)
  let y, m
  try {
    if (n.shapeFlag & 4) {
      const w = i || s,
        E = w
      ;(y = _t(u.call(E, w, c, d, h, f, g))), (m = l)
    } else {
      const w = t
      ;(y = _t(
        w.length > 1 ? w(d, { attrs: l, slots: o, emit: a }) : w(d, null),
      )),
        (m = t.props ? l : Kd(l))
    }
  } catch (w) {
    ;(rs.length = 0), hi(w, e, 1), (y = te(Rt))
  }
  let b = y
  if (m && v !== !1) {
    const w = Object.keys(m),
      { shapeFlag: E } = b
    w.length &&
      E & 7 &&
      (r && w.some(_r) && (m = Yd(m, r)), (b = dn(b, m, !1, !0)))
  }
  return (
    n.dirs &&
      ((b = dn(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Vr(b, n.transition),
    (y = b),
    Xs(x),
    y
  )
}
const Kd = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || oi(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Yd = (e, t) => {
    const n = {}
    for (const s in e) (!_r(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Xd(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: l, patchFlag: a } = t,
    u = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return s ? Hl(s, o, u) : !!o
    if (a & 8) {
      const c = t.dynamicProps
      for (let d = 0; d < c.length; d++) {
        const f = c[d]
        if (o[f] !== s[f] && !mi(u, f)) return !0
      }
    }
  } else
    return (i || l) && (!l || !l.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? Hl(s, o, u)
            : !0
          : !!o
  return !1
}
function Hl(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let i = 0; i < s.length; i++) {
    const r = s[i]
    if (t[r] !== e[r] && !mi(n, r)) return !0
  }
  return !1
}
function Jd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ja = (e) => e.__isSuspense
function Zd(e, t) {
  t && t.pendingBranch
    ? ae(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ud(e)
}
const pe = Symbol.for("v-fgt"),
  bi = Symbol.for("v-txt"),
  Rt = Symbol.for("v-cmt"),
  zs = Symbol.for("v-stc"),
  rs = []
let pt = null
function O(e = !1) {
  rs.push((pt = e ? null : []))
}
function Qd() {
  rs.pop(), (pt = rs[rs.length - 1] || null)
}
let ds = 1
function Qs(e, t = !1) {
  ;(ds += e), e < 0 && pt && t && (pt.hasOnce = !0)
}
function Za(e) {
  return (
    (e.dynamicChildren = ds > 0 ? pt || An : null),
    Qd(),
    ds > 0 && pt && pt.push(e),
    e
  )
}
function D(e, t, n, s, i, r) {
  return Za(p(e, t, n, s, i, r, !0))
}
function oe(e, t, n, s, i) {
  return Za(te(e, t, n, s, i, !0))
}
function fs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Kn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Qa = ({ key: e }) => e ?? null,
  Ds = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Be(e) || De(e) || de(e)
        ? { i: Ke, r: e, k: t, f: !!n }
        : e
      : null
  )
function p(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === pe ? 0 : 1,
  o = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qa(t),
    ref: t && Ds(t),
    scopeId: Ia,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke,
  }
  return (
    l
      ? (Qr(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Be(n) ? 8 : 16),
    ds > 0 &&
      !o &&
      pt &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      pt.push(a),
    a
  )
}
const te = ef
function ef(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === ja) && (e = Rt), fs(e))) {
    const l = dn(e, t, !0)
    return (
      n && Qr(l, n),
      ds > 0 &&
        !r &&
        pt &&
        (l.shapeFlag & 6 ? (pt[pt.indexOf(e)] = l) : pt.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((ff(e) && (e = e.__vccOpts), t)) {
    t = tf(t)
    let { class: l, style: a } = t
    l && !Be(l) && (t.class = k(l)),
      _e(a) && (Hr(a) && !ae(a) && (a = et({}, a)), (t.style = fi(a)))
  }
  const o = Be(e) ? 1 : Ja(e) ? 128 : dd(e) ? 64 : _e(e) ? 4 : de(e) ? 2 : 0
  return p(e, t, n, s, i, o, r, !0)
}
function tf(e) {
  return e ? (Hr(e) || Fa(e) ? et({}, e) : e) : null
}
function dn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e,
    u = t ? el(i || {}, t) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Qa(u),
      ref:
        t && t.ref
          ? n && r
            ? ae(r)
              ? r.concat(Ds(t))
              : [r, Ds(t)]
            : Ds(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== pe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && dn(e.ssContent),
      ssFallback: e.ssFallback && dn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return a && s && Vr(c, a.clone(c)), c
}
function ce(e = " ", t = 0) {
  return te(bi, null, e, t)
}
function nf(e, t) {
  const n = te(zs, null, e)
  return (n.staticCount = t), n
}
function we(e = "", t = !1) {
  return t ? (O(), oe(Rt, null, e)) : te(Rt, null, e)
}
function _t(e) {
  return e == null || typeof e == "boolean"
    ? te(Rt)
    : ae(e)
      ? te(pe, null, e.slice())
      : fs(e)
        ? rn(e)
        : te(bi, null, String(e))
}
function rn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : dn(e)
}
function Qr(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (ae(t)) n = 16
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), Qr(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !Fa(t)
        ? (t._ctx = Ke)
        : i === 3 &&
          Ke &&
          (Ke.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    de(t)
      ? ((t = { default: t, _ctx: Ke }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ce(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function el(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = k([t.class, s.class]))
      else if (i === "style") t.style = fi([t.style, s.style])
      else if (oi(i)) {
        const r = t[i],
          o = s[i]
        o &&
          r !== o &&
          !(ae(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o)
      } else i !== "" && (t[i] = s[i])
  }
  return t
}
function $t(e, t, n, s = null) {
  Nt(e, t, 7, [n, s])
}
const sf = Ra()
let rf = 0
function lf(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || sf,
    r = {
      uid: rf++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new $c(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ga(s, i),
      emitsOptions: Xa(s, i),
      emit: null,
      emitted: null,
      propsDefaults: $e,
      inheritAttrs: s.inheritAttrs,
      ctx: $e,
      data: $e,
      props: $e,
      attrs: $e,
      slots: $e,
      refs: $e,
      setupState: $e,
      setupContext: null,
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
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = qd.bind(null, r)),
    e.ce && e.ce(r),
    r
  )
}
let Ze = null
const xs = () => Ze || Ke
let ei, wr
{
  const e = di(),
    t = (n, s) => {
      let i
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((o) => o(r)) : i[0](r)
        }
      )
    }
  ;(ei = t("__VUE_INSTANCE_SETTERS__", (n) => (Ze = n))),
    (wr = t("__VUE_SSR_SETTERS__", (n) => (ps = n)))
}
const Ss = (e) => {
    const t = Ze
    return (
      ei(e),
      e.scope.on(),
      () => {
        e.scope.off(), ei(t)
      }
    )
  },
  Gl = () => {
    Ze && Ze.scope.off(), ei(null)
  }
function eu(e) {
  return e.vnode.shapeFlag & 4
}
let ps = !1
function of(e, t = !1, n = !1) {
  t && wr(t)
  const { props: s, children: i } = e.vnode,
    r = eu(e)
  Od(e, s, r, t), Bd(e, i, n || t)
  const o = r ? af(e, t) : void 0
  return t && wr(!1), o
}
function af(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Cd))
  const { setup: s } = n
  if (s) {
    Kt()
    const i = (e.setupContext = s.length > 1 ? cf(e) : null),
      r = Ss(e),
      o = ws(s, e, 0, [e.props, i]),
      l = Zo(o)
    if ((Yt(), r(), (l || e.sp) && !Ln(e) && Aa(e), l)) {
      if ((o.then(Gl, Gl), t))
        return o
          .then((a) => {
            Vl(e, a)
          })
          .catch((a) => {
            hi(a, e, 0)
          })
      e.asyncDep = o
    } else Vl(e, o)
  } else tu(e)
}
function Vl(e, t, n) {
  de(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _e(t) && (e.setupState = Sa(t)),
    tu(e)
}
function tu(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || Lt)
  {
    const i = Ss(e)
    Kt()
    try {
      Td(e)
    } finally {
      Yt(), i()
    }
  }
}
const uf = {
  get(e, t) {
    return Je(e, "get", ""), e[t]
  },
}
function cf(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, uf),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function vi(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Sa(Jc(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in is) return is[n](e)
          },
          has(t, n) {
            return n in t || n in is
          },
        }))
    : e.proxy
}
function df(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function ff(e) {
  return de(e) && "__vccOpts" in e
}
const Z = (e, t) => id(e, t, ps)
function Ee(e, t, n) {
  try {
    Qs(-1)
    const s = arguments.length
    return s === 2
      ? _e(t) && !ae(t)
        ? fs(t)
          ? te(e, null, [t])
          : te(e, t)
        : te(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && fs(n) && (n = [n]),
        te(e, t, n))
  } finally {
    Qs(1)
  }
}
const pf = "3.5.22"
let xr
const Wl = typeof window < "u" && window.trustedTypes
if (Wl)
  try {
    xr = Wl.createPolicy("vue", { createHTML: (e) => e })
  } catch {}
const nu = xr ? (e) => xr.createHTML(e) : (e) => e,
  hf = "http://www.w3.org/2000/svg",
  gf = "http://www.w3.org/1998/Math/MathML",
  Gt = typeof document < "u" ? document : null,
  ql = Gt && Gt.createElement("template"),
  mf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? Gt.createElementNS(hf, e)
          : t === "mathml"
            ? Gt.createElementNS(gf, e)
            : n
              ? Gt.createElement(e, { is: n })
              : Gt.createElement(e)
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      )
    },
    createText: (e) => Gt.createTextNode(e),
    createComment: (e) => Gt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Gt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        ql.innerHTML = nu(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        )
        const l = ql.content
        if (s === "svg" || s === "mathml") {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  bf = Symbol("_vtc")
function vf(e, t, n) {
  const s = e[bf]
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const Ul = Symbol("_vod"),
  yf = Symbol("_vsh"),
  wf = Symbol(""),
  xf = /(?:^|;)\s*display\s*:/
function Sf(e, t, n) {
  const s = e.style,
    i = Be(n)
  let r = !1
  if (n && !i) {
    if (t)
      if (Be(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim()
          n[l] == null && Fs(s, l, "")
        }
      else for (const o in t) n[o] == null && Fs(s, o, "")
    for (const o in n) o === "display" && (r = !0), Fs(s, o, n[o])
  } else if (i) {
    if (t !== n) {
      const o = s[wf]
      o && (n += ";" + o), (s.cssText = n), (r = xf.test(n))
    }
  } else t && e.removeAttribute("style")
  Ul in e && ((e[Ul] = r ? s.display : ""), e[yf] && (s.display = "none"))
}
const Kl = /\s*!important$/
function Fs(e, t, n) {
  if (ae(n)) n.forEach((s) => Fs(e, t, s))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const s = Ef(e, t)
    Kl.test(n)
      ? e.setProperty(xn(s), n.replace(Kl, ""), "important")
      : (e[s] = n)
  }
}
const Yl = ["Webkit", "Moz", "ms"],
  Oi = {}
function Ef(e, t) {
  const n = Oi[t]
  if (n) return n
  let s = wt(t)
  if (s !== "filter" && s in e) return (Oi[t] = s)
  s = ci(s)
  for (let i = 0; i < Yl.length; i++) {
    const r = Yl[i] + s
    if (r in e) return (Oi[t] = r)
  }
  return t
}
const Xl = "http://www.w3.org/1999/xlink"
function Jl(e, t, n, s, i, r = Mc(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Xl, t.slice(6, t.length))
      : e.setAttributeNS(Xl, t, n)
    : n == null || (r && !na(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : Xt(n) ? String(n) : n)
}
function Zl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? nu(n) : n)
    return
  }
  const r = e.tagName
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n)
    ;(l !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === "" || n == null) {
    const l = typeof e[t]
    l === "boolean"
      ? (n = na(n))
      : n == null && l === "string"
        ? ((n = ""), (o = !0))
        : l === "number" && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(i || t)
}
function In(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Cf(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Ql = Symbol("_vei")
function Tf(e, t, n, s, i = null) {
  const r = e[Ql] || (e[Ql] = {}),
    o = r[t]
  if (s && o) o.value = s
  else {
    const [l, a] = kf(t)
    if (s) {
      const u = (r[t] = Mf(s, i))
      In(e, l, u, a)
    } else o && (Cf(e, l, o, a), (r[t] = void 0))
  }
}
const eo = /(?:Once|Passive|Capture)$/
function kf(e) {
  let t
  if (eo.test(e)) {
    t = {}
    let s
    for (; (s = e.match(eo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : xn(e.slice(2)), t]
}
let _i = 0
const Pf = Promise.resolve(),
  If = () => _i || (Pf.then(() => (_i = 0)), (_i = Date.now()))
function Mf(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Nt($f(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = If()), n
}
function $f(e, t) {
  if (ae(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    )
  } else return t
}
const to = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Af = (e, t, n, s, i, r) => {
    const o = i === "svg"
    t === "class"
      ? vf(e, s, o)
      : t === "style"
        ? Sf(e, n, s)
        : oi(t)
          ? _r(t) || Tf(e, t, n, s, r)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Of(e, t, s, o)
              )
            ? (Zl(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Jl(e, t, s, o, r, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Be(s))
              ? Zl(e, wt(t), s, r, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Jl(e, t, s, o))
  }
function Of(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && to(t) && de(n))
    )
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1
  if (t === "width" || t === "height") {
    const i = e.tagName
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1
  }
  return to(t) && Be(n) ? !1 : t in e
}
const no = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return ae(t) ? (n) => Ns(t, n) : t
}
function _f(e) {
  e.target.composing = !0
}
function so(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const ji = Symbol("_assign"),
  jf = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[ji] = no(i)
      const r = s || (i.props && i.props.type === "number")
      In(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return
        let l = e.value
        n && (l = l.trim()), r && (l = dr(l)), e[ji](l)
      }),
        n &&
          In(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (In(e, "compositionstart", _f),
          In(e, "compositionend", so),
          In(e, "change", so))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } },
      o,
    ) {
      if (((e[ji] = no(o)), e.composing)) return
      const l =
          (r || e.type === "number") && !/^0\d/.test(e.value)
            ? dr(e.value)
            : e.value,
        a = t ?? ""
      l !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (i && e.value.trim() === a))) ||
          (e.value = a))
    },
  },
  Lf = et({ patchProp: Af }, mf)
let io
function Bf() {
  return io || (io = Rd(Lf))
}
const Nf = (...e) => {
  const t = Bf().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const i = zf(s)
      if (!i) return
      const r = t._component
      !de(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "")
      const o = n(i, !1, Rf(i))
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      )
    }),
    t
  )
}
function Rf(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function zf(e) {
  return Be(e) ? document.querySelector(e) : e
}
const fn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, i] of t) n[s] = i
    return n
  },
  Df = {}
function Ff(e, t) {
  const n = Sd("router-view")
  return O(), oe(n)
}
const Hf = fn(Df, [["render", Ff]])
function Gf(e) {
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
var ro
let Vf = Symbol("headlessui.useid"),
  Wf = 0
const yn =
  (ro = $a) != null
    ? ro
    : function () {
        return Re(Vf, () => `${++Wf}`)()
      }
function ne(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function gt(e, t, ...n) {
  if (e in t) {
    let i = t[e]
    return typeof i == "function" ? i(...n) : i
  }
  let s = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((i) => `"${i}"`)
      .join(", ")}.`,
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(s, gt), s)
}
var qf = Object.defineProperty,
  Uf = (e, t, n) =>
    t in e
      ? qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  lo = (e, t, n) => (Uf(e, typeof t != "symbol" ? t + "" : t, n), n)
let Kf = class {
    constructor() {
      lo(this, "current", this.detect()), lo(this, "currentId", 0)
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
  yi = new Kf()
function Vn(e) {
  if (yi.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = ne(e)
    if (t) return t.ownerDocument
  }
  return document
}
let Sr = [
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
var ze = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(ze || {}),
  on = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(on || {}),
  Yf = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Yf || {})
function wi(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Sr)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var tl = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(tl || {})
function su(e, t = 0) {
  var n
  return e === ((n = Vn(e)) == null ? void 0 : n.body)
    ? !1
    : gt(t, {
        0() {
          return e.matches(Sr)
        },
        1() {
          let s = e
          for (; s !== null; ) {
            if (s.matches(Sr)) return !0
            s = s.parentElement
          }
          return !1
        },
      })
}
var Xf = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Xf || {})
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
let Jf = ["textarea", "input"].join(",")
function Zf(e) {
  var t, n
  return (n = (t = e?.matches) == null ? void 0 : t.call(e, Jf)) != null
    ? n
    : !1
}
function Mn(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let i = t(n),
      r = t(s)
    if (i === null || r === null) return 0
    let o = i.compareDocumentPosition(r)
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
  })
}
function ft(
  e,
  t,
  { sorted: n = !0, relativeTo: s = null, skipElements: i = [] } = {},
) {
  var r
  let o =
      (r = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e?.ownerDocument) != null
        ? r
        : document,
    l = Array.isArray(e) ? (n ? Mn(e) : e) : wi(e)
  i.length > 0 && l.length > 1 && (l = l.filter((g) => !i.includes(g))),
    (s = s ?? o.activeElement)
  let a = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    u = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, l.indexOf(s)) - 1
      if (t & 4) return Math.max(0, l.indexOf(s)) + 1
      if (t & 8) return l.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    f = l.length,
    h
  do {
    if (d >= f || d + f <= 0) return 0
    let g = u + d
    if (t & 16) g = (g + f) % f
    else {
      if (g < 0) return 3
      if (g >= f) return 1
    }
    ;(h = l[g]), h?.focus(c), (d += a)
  } while (h !== o.activeElement)
  return t & 6 && Zf(h) && h.select(), 2
}
function Qf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function ep() {
  return /Android/gi.test(window.navigator.userAgent)
}
function tp() {
  return Qf() || ep()
}
function Is(e, t, n) {
  yi.isServer ||
    Qt((s) => {
      document.addEventListener(e, t, n),
        s(() => document.removeEventListener(e, t, n))
    })
}
function iu(e, t, n) {
  yi.isServer ||
    Qt((s) => {
      window.addEventListener(e, t, n),
        s(() => window.removeEventListener(e, t, n))
    })
}
function np(e, t, n = Z(() => !0)) {
  function s(r, o) {
    if (!n.value || r.defaultPrevented) return
    let l = o(r)
    if (l === null || !l.getRootNode().contains(l)) return
    let a = (function u(c) {
      return typeof c == "function"
        ? u(c())
        : Array.isArray(c) || c instanceof Set
          ? c
          : [c]
    })(e)
    for (let u of a) {
      if (u === null) continue
      let c = u instanceof HTMLElement ? u : ne(u)
      if (
        (c != null && c.contains(l)) ||
        (r.composed && r.composedPath().includes(c))
      )
        return
    }
    return !su(l, tl.Loose) && l.tabIndex !== -1 && r.preventDefault(), t(r, l)
  }
  let i = F(null)
  Is(
    "pointerdown",
    (r) => {
      var o, l
      n.value &&
        (i.value =
          ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null
            ? void 0
            : l[0]) || r.target)
    },
    !0,
  ),
    Is(
      "mousedown",
      (r) => {
        var o, l
        n.value &&
          (i.value =
            ((l = (o = r.composedPath) == null ? void 0 : o.call(r)) == null
              ? void 0
              : l[0]) || r.target)
      },
      !0,
    ),
    Is(
      "click",
      (r) => {
        tp() || (i.value && (s(r, () => i.value), (i.value = null)))
      },
      !0,
    ),
    Is(
      "touchend",
      (r) => s(r, () => (r.target instanceof HTMLElement ? r.target : null)),
      !0,
    ),
    iu(
      "blur",
      (r) =>
        s(r, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    )
}
function oo(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function ru(e, t) {
  let n = F(oo(e.value.type, e.value.as))
  return (
    qe(() => {
      n.value = oo(e.value.type, e.value.as)
    }),
    Qt(() => {
      var s
      n.value ||
        (ne(t) &&
          ne(t) instanceof HTMLButtonElement &&
          !((s = ne(t)) != null && s.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var hs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(hs || {}),
  sp = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(sp || {})
function en({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: s,
  ...i
}) {
  var r
  let o = ou(s, n),
    l = Object.assign(i, { props: o })
  if (e || (t & 2 && o.static)) return Li(l)
  if (t & 1) {
    let a = (r = o.unmount) == null || r ? 0 : 1
    return gt(a, {
      0() {
        return null
      },
      1() {
        return Li({
          ...i,
          props: { ...o, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Li(l)
}
function Li({ props: e, attrs: t, slots: n, slot: s, name: i }) {
  var r, o
  let { as: l, ...a } = au(e, ["unmount", "static"]),
    u = (r = n.default) == null ? void 0 : r.call(n, s),
    c = {}
  if (s) {
    let d = !1,
      f = []
    for (let [h, g] of Object.entries(s))
      typeof g == "boolean" && (d = !0), g === !0 && f.push(h)
    d && (c["data-headlessui-state"] = f.join(" "))
  }
  if (l === "template") {
    if (
      ((u = lu(u ?? [])),
      Object.keys(a).length > 0 || Object.keys(t).length > 0)
    ) {
      let [d, ...f] = u ?? []
      if (!ip(d) || f.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${i} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(a)
              .concat(Object.keys(t))
              .map((v) => v.trim())
              .filter((v, x, y) => y.indexOf(v) === x)
              .sort((v, x) => v.localeCompare(x))
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
      let h = ou((o = d.props) != null ? o : {}, a, c),
        g = dn(d, h, !0)
      for (let v in h)
        v.startsWith("on") && (g.props || (g.props = {}), (g.props[v] = h[v]))
      return g
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u
  }
  return Ee(l, Object.assign({}, a, c), { default: () => u })
}
function lu(e) {
  return e.flatMap((t) => (t.type === pe ? lu(t.children) : [t]))
}
function ou(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let s of e)
    for (let i in s)
      i.startsWith("on") && typeof s[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(s[i]))
        : (t[i] = s[i])
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((s) => [s, void 0])),
    )
  for (let s in n)
    Object.assign(t, {
      [s](i, ...r) {
        let o = n[s]
        for (let l of o) {
          if (i instanceof Event && i.defaultPrevented) return
          l(i, ...r)
        }
      },
    })
  return t
}
function au(e, t = []) {
  let n = Object.assign({}, e)
  for (let s of t) s in n && delete n[s]
  return n
}
function ip(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var zn = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(zn || {})
let Dn = Fe({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var s
        let { features: i, ...r } = e,
          o = {
            "aria-hidden":
              (i & 2) === 2 ? !0 : (s = r["aria-hidden"]) != null ? s : void 0,
            hidden: (i & 4) === 4 ? !0 : void 0,
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
              ...((i & 4) === 4 && (i & 2) !== 2 && { display: "none" }),
            },
          }
        return en({
          ourProps: o,
          theirProps: r,
          slot: {},
          attrs: n,
          slots: t,
          name: "Hidden",
        })
      }
    },
  }),
  uu = Symbol("Context")
var gs = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(gs || {})
function rp() {
  return Re(uu, null)
}
function lp(e) {
  ht(uu, e)
}
var Ge = ((e) => (
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
))(Ge || {})
function op(e, t, n, s) {
  yi.isServer ||
    Qt((i) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, s),
        i(() => e.removeEventListener(t, n, s))
    })
}
var Ut = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Ut || {})
function cu() {
  let e = F(0)
  return (
    iu("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function ap({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let s = F(null),
    i = Vn(s)
  function r() {
    var o, l, a
    let u = []
    for (let c of e)
      c !== null &&
        (c instanceof HTMLElement
          ? u.push(c)
          : "value" in c && c.value instanceof HTMLElement && u.push(c.value))
    if (t != null && t.value) for (let c of t.value) u.push(c)
    for (let c of (o = i?.querySelectorAll("html > *, body > *")) != null
      ? o
      : [])
      c !== document.body &&
        c !== document.head &&
        c instanceof HTMLElement &&
        c.id !== "headlessui-portal-root" &&
        (c.contains(ne(s)) ||
          c.contains(
            (a = (l = ne(s)) == null ? void 0 : l.getRootNode()) == null
              ? void 0
              : a.host,
          ) ||
          u.some((d) => c.contains(d)) ||
          u.push(c))
    return u
  }
  return {
    resolveContainers: r,
    contains(o) {
      return r().some((l) => l.contains(o))
    },
    mainTreeNodeRef: s,
    MainTreeNode() {
      return n != null ? null : Ee(Dn, { features: zn.Hidden, ref: s })
    },
  }
}
let ao = Symbol("PortalParentContext")
function up() {
  let e = Re(ao, null),
    t = F([])
  function n(r) {
    return t.value.push(r), e && e.register(r), () => s(r)
  }
  function s(r) {
    let o = t.value.indexOf(r)
    o !== -1 && t.value.splice(o, 1), e && e.unregister(r)
  }
  let i = { register: n, unregister: s, portals: t }
  return [
    t,
    Fe({
      name: "PortalWrapper",
      setup(r, { slots: o }) {
        return (
          ht(ao, i),
          () => {
            var l
            return (l = o.default) == null ? void 0 : l.call(o)
          }
        )
      },
    }),
  ]
}
var cp = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(cp || {})
let du = Symbol("PopoverContext")
function nl(e) {
  let t = Re(du, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Er.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, nl), n)
  }
  return t
}
let dp = Symbol("PopoverGroupContext")
function fu() {
  return Re(dp, null)
}
let pu = Symbol("PopoverPanelContext")
function fp() {
  return Re(pu, null)
}
let Er = Fe({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: s }) {
      var i
      let r = F(null)
      s({ el: r, $el: r })
      let o = F(1),
        l = F(null),
        a = F(null),
        u = F(null),
        c = F(null),
        d = Z(() => Vn(r)),
        f = Z(() => {
          var E, P
          if (!ne(l) || !ne(c)) return !1
          for (let q of document.querySelectorAll("body > *"))
            if (Number(q?.contains(ne(l))) ^ Number(q?.contains(ne(c))))
              return !0
          let C = wi(),
            A = C.indexOf(ne(l)),
            I = (A + C.length - 1) % C.length,
            $ = (A + 1) % C.length,
            j = C[I],
            G = C[$]
          return (
            !((E = ne(c)) != null && E.contains(j)) &&
            !((P = ne(c)) != null && P.contains(G))
          )
        }),
        h = {
          popoverState: o,
          buttonId: F(null),
          panelId: F(null),
          panel: c,
          button: l,
          isPortalled: f,
          beforePanelSentinel: a,
          afterPanelSentinel: u,
          togglePopover() {
            o.value = gt(o.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            o.value !== 1 && (o.value = 1)
          },
          close(E) {
            h.closePopover()
            let P = E
              ? E instanceof HTMLElement
                ? E
                : E.value instanceof HTMLElement
                  ? ne(E)
                  : ne(h.button)
              : ne(h.button)
            P?.focus()
          },
        }
      ht(du, h), lp(Z(() => gt(o.value, { 0: gs.Open, 1: gs.Closed })))
      let g = {
          buttonId: h.buttonId,
          panelId: h.panelId,
          close() {
            h.closePopover()
          },
        },
        v = fu(),
        x = v?.registerPopover,
        [y, m] = up(),
        b = ap({
          mainTreeNodeRef: v?.mainTreeNodeRef,
          portals: y,
          defaultContainers: [l, c],
        })
      function w() {
        var E, P, C, A
        return (A = v?.isFocusWithinPopoverGroup()) != null
          ? A
          : ((E = d.value) == null ? void 0 : E.activeElement) &&
              (((P = ne(l)) == null
                ? void 0
                : P.contains(d.value.activeElement)) ||
                ((C = ne(c)) == null
                  ? void 0
                  : C.contains(d.value.activeElement)))
      }
      return (
        Qt(() => x?.(g)),
        op(
          (i = d.value) == null ? void 0 : i.defaultView,
          "focus",
          (E) => {
            var P, C
            E.target !== window &&
              E.target instanceof HTMLElement &&
              o.value === 0 &&
              (w() ||
                (l &&
                  c &&
                  (b.contains(E.target) ||
                    ((P = ne(h.beforePanelSentinel)) != null &&
                      P.contains(E.target)) ||
                    ((C = ne(h.afterPanelSentinel)) != null &&
                      C.contains(E.target)) ||
                    h.closePopover())))
          },
          !0,
        ),
        np(
          b.resolveContainers,
          (E, P) => {
            var C
            h.closePopover(),
              su(P, tl.Loose) ||
                (E.preventDefault(), (C = ne(l)) == null || C.focus())
          },
          Z(() => o.value === 0),
        ),
        () => {
          let E = { open: o.value === 0, close: h.close }
          return Ee(pe, [
            Ee(m, {}, () =>
              en({
                theirProps: { ...e, ...n },
                ourProps: { ref: r },
                slot: E,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            Ee(b.MainTreeNode),
          ])
        }
      )
    },
  }),
  uo = Fe({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      var i
      let r = (i = e.id) != null ? i : `headlessui-popover-button-${yn()}`,
        o = nl("PopoverButton"),
        l = Z(() => Vn(o.button))
      s({ el: o.button, $el: o.button }),
        qe(() => {
          o.buttonId.value = r
        }),
        Zt(() => {
          o.buttonId.value = null
        })
      let a = fu(),
        u = a?.closeOthers,
        c = fp(),
        d = Z(() => (c === null ? !1 : c.value === o.panelId.value)),
        f = F(null),
        h = `headlessui-focus-sentinel-${yn()}`
      d.value ||
        Qt(() => {
          o.button.value = ne(f)
        })
      let g = ru(
        Z(() => ({ as: e.as, type: t.type })),
        f,
      )
      function v(E) {
        var P, C, A, I, $
        if (d.value) {
          if (o.popoverState.value === 1) return
          switch (E.key) {
            case Ge.Space:
            case Ge.Enter:
              E.preventDefault(),
                (C = (P = E.target).click) == null || C.call(P),
                o.closePopover(),
                (A = ne(o.button)) == null || A.focus()
              break
          }
        } else
          switch (E.key) {
            case Ge.Space:
            case Ge.Enter:
              E.preventDefault(),
                E.stopPropagation(),
                o.popoverState.value === 1 && u?.(o.buttonId.value),
                o.togglePopover()
              break
            case Ge.Escape:
              if (o.popoverState.value !== 0) return u?.(o.buttonId.value)
              if (
                !ne(o.button) ||
                ((I = l.value) != null &&
                  I.activeElement &&
                  !(
                    ($ = ne(o.button)) != null &&
                    $.contains(l.value.activeElement)
                  ))
              )
                return
              E.preventDefault(), E.stopPropagation(), o.closePopover()
              break
          }
      }
      function x(E) {
        d.value || (E.key === Ge.Space && E.preventDefault())
      }
      function y(E) {
        var P, C
        e.disabled ||
          (d.value
            ? (o.closePopover(), (P = ne(o.button)) == null || P.focus())
            : (E.preventDefault(),
              E.stopPropagation(),
              o.popoverState.value === 1 && u?.(o.buttonId.value),
              o.togglePopover(),
              (C = ne(o.button)) == null || C.focus()))
      }
      function m(E) {
        E.preventDefault(), E.stopPropagation()
      }
      let b = cu()
      function w() {
        let E = ne(o.panel)
        if (!E) return
        function P() {
          gt(b.value, {
            [Ut.Forwards]: () => ft(E, ze.First),
            [Ut.Backwards]: () => ft(E, ze.Last),
          }) === on.Error &&
            ft(
              wi().filter((C) => C.dataset.headlessuiFocusGuard !== "true"),
              gt(b.value, {
                [Ut.Forwards]: ze.Next,
                [Ut.Backwards]: ze.Previous,
              }),
              { relativeTo: ne(o.button) },
            )
        }
        P()
      }
      return () => {
        let E = o.popoverState.value === 0,
          P = { open: E },
          { ...C } = e,
          A = d.value
            ? { ref: f, type: g.value, onKeydown: v, onClick: y }
            : {
                ref: f,
                id: r,
                type: g.value,
                "aria-expanded": o.popoverState.value === 0,
                "aria-controls": ne(o.panel) ? o.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: v,
                onKeyup: x,
                onClick: y,
                onMousedown: m,
              }
        return Ee(pe, [
          en({
            ourProps: A,
            theirProps: { ...t, ...C },
            slot: P,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          E &&
            !d.value &&
            o.isPortalled.value &&
            Ee(Dn, {
              id: h,
              features: zn.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: w,
            }),
        ])
      }
    },
  }),
  co = Fe({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: null },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      var i
      let r = (i = e.id) != null ? i : `headlessui-popover-panel-${yn()}`,
        { focus: o } = e,
        l = nl("PopoverPanel"),
        a = Z(() => Vn(l.panel)),
        u = `headlessui-focus-sentinel-before-${yn()}`,
        c = `headlessui-focus-sentinel-after-${yn()}`
      s({ el: l.panel, $el: l.panel }),
        qe(() => {
          l.panelId.value = r
        }),
        Zt(() => {
          l.panelId.value = null
        }),
        ht(pu, l.panelId),
        Qt(() => {
          var m, b
          if (!o || l.popoverState.value !== 0 || !l.panel) return
          let w = (m = a.value) == null ? void 0 : m.activeElement
          ;((b = ne(l.panel)) != null && b.contains(w)) ||
            ft(ne(l.panel), ze.First)
        })
      let d = rp(),
        f = Z(() =>
          d !== null
            ? (d.value & gs.Open) === gs.Open
            : l.popoverState.value === 0,
        )
      function h(m) {
        var b, w
        switch (m.key) {
          case Ge.Escape:
            if (
              l.popoverState.value !== 0 ||
              !ne(l.panel) ||
              (a.value &&
                !(
                  (b = ne(l.panel)) != null && b.contains(a.value.activeElement)
                ))
            )
              return
            m.preventDefault(),
              m.stopPropagation(),
              l.closePopover(),
              (w = ne(l.button)) == null || w.focus()
            break
        }
      }
      function g(m) {
        var b, w, E, P, C
        let A = m.relatedTarget
        A &&
          ne(l.panel) &&
          (((b = ne(l.panel)) != null && b.contains(A)) ||
            (l.closePopover(),
            (((E =
              (w = ne(l.beforePanelSentinel)) == null ? void 0 : w.contains) !=
              null &&
              E.call(w, A)) ||
              ((C =
                (P = ne(l.afterPanelSentinel)) == null ? void 0 : P.contains) !=
                null &&
                C.call(P, A))) &&
              A.focus({ preventScroll: !0 })))
      }
      let v = cu()
      function x() {
        let m = ne(l.panel)
        if (!m) return
        function b() {
          gt(v.value, {
            [Ut.Forwards]: () => {
              var w
              ft(m, ze.First) === on.Error &&
                ((w = ne(l.afterPanelSentinel)) == null || w.focus())
            },
            [Ut.Backwards]: () => {
              var w
              ;(w = ne(l.button)) == null || w.focus({ preventScroll: !0 })
            },
          })
        }
        b()
      }
      function y() {
        let m = ne(l.panel)
        if (!m) return
        function b() {
          gt(v.value, {
            [Ut.Forwards]: () => {
              let w = ne(l.button),
                E = ne(l.panel)
              if (!w) return
              let P = wi(),
                C = P.indexOf(w),
                A = P.slice(0, C + 1),
                I = [...P.slice(C + 1), ...A]
              for (let $ of I.slice())
                if (
                  $.dataset.headlessuiFocusGuard === "true" ||
                  (E != null && E.contains($))
                ) {
                  let j = I.indexOf($)
                  j !== -1 && I.splice(j, 1)
                }
              ft(I, ze.First, { sorted: !1 })
            },
            [Ut.Backwards]: () => {
              var w
              ft(m, ze.Previous) === on.Error &&
                ((w = ne(l.button)) == null || w.focus())
            },
          })
        }
        b()
      }
      return () => {
        let m = { open: l.popoverState.value === 0, close: l.close },
          { focus: b, ...w } = e,
          E = {
            ref: l.panel,
            id: r,
            onKeydown: h,
            onFocusout: o && l.popoverState.value === 0 ? g : void 0,
            tabIndex: -1,
          }
        return en({
          ourProps: E,
          theirProps: { ...t, ...w },
          attrs: t,
          slot: m,
          slots: {
            ...n,
            default: (...P) => {
              var C
              return [
                Ee(pe, [
                  f.value &&
                    l.isPortalled.value &&
                    Ee(Dn, {
                      id: u,
                      ref: l.beforePanelSentinel,
                      features: zn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: x,
                    }),
                  (C = n.default) == null ? void 0 : C.call(n, ...P),
                  f.value &&
                    l.isPortalled.value &&
                    Ee(Dn, {
                      id: c,
                      ref: l.afterPanelSentinel,
                      features: zn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: y,
                    }),
                ]),
              ]
            },
          },
          features: hs.RenderStrategy | hs.Static,
          visible: f.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  pp = Fe({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = F(!0)
      return () =>
        t.value
          ? Ee(Dn, {
              as: "button",
              type: "button",
              features: zn.Focusable,
              onFocus(n) {
                n.preventDefault()
                let s,
                  i = 50
                function r() {
                  var o
                  if (i-- <= 0) {
                    s && cancelAnimationFrame(s)
                    return
                  }
                  if ((o = e.onFocus) != null && o.call(e)) {
                    ;(t.value = !1), cancelAnimationFrame(s)
                    return
                  }
                  s = requestAnimationFrame(r)
                }
                s = requestAnimationFrame(r)
              },
            })
          : null
    },
  })
var hp = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(hp || {}),
  gp = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(gp || {})
let hu = Symbol("TabsContext")
function Es(e) {
  let t = Re(hu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Es), n)
  }
  return t
}
let sl = Symbol("TabsSSRContext"),
  mp = Fe({
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
      var i
      let r = F((i = e.selectedIndex) != null ? i : e.defaultIndex),
        o = F([]),
        l = F([]),
        a = Z(() => e.selectedIndex !== null),
        u = Z(() => (a.value ? e.selectedIndex : r.value))
      function c(v) {
        var x
        let y = Mn(d.tabs.value, ne),
          m = Mn(d.panels.value, ne),
          b = y.filter((w) => {
            var E
            return !((E = ne(w)) != null && E.hasAttribute("disabled"))
          })
        if (v < 0 || v > y.length - 1) {
          let w = gt(r.value === null ? 0 : Math.sign(v - r.value), {
              [-1]: () => 1,
              0: () =>
                gt(Math.sign(v), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            E = gt(w, {
              0: () => y.indexOf(b[0]),
              1: () => y.indexOf(b[b.length - 1]),
            })
          E !== -1 && (r.value = E), (d.tabs.value = y), (d.panels.value = m)
        } else {
          let w = y.slice(0, v),
            E = [...y.slice(v), ...w].find((C) => b.includes(C))
          if (!E) return
          let P = (x = y.indexOf(E)) != null ? x : d.selectedIndex.value
          P === -1 && (P = d.selectedIndex.value),
            (r.value = P),
            (d.tabs.value = y),
            (d.panels.value = m)
        }
      }
      let d = {
        selectedIndex: Z(() => {
          var v, x
          return (x = (v = r.value) != null ? v : e.defaultIndex) != null
            ? x
            : null
        }),
        orientation: Z(() => (e.vertical ? "vertical" : "horizontal")),
        activation: Z(() => (e.manual ? "manual" : "auto")),
        tabs: o,
        panels: l,
        setSelectedIndex(v) {
          u.value !== v && s("change", v), a.value || c(v)
        },
        registerTab(v) {
          var x
          if (o.value.includes(v)) return
          let y = o.value[r.value]
          if ((o.value.push(v), (o.value = Mn(o.value, ne)), !a.value)) {
            let m = (x = o.value.indexOf(y)) != null ? x : r.value
            m !== -1 && (r.value = m)
          }
        },
        unregisterTab(v) {
          let x = o.value.indexOf(v)
          x !== -1 && o.value.splice(x, 1)
        },
        registerPanel(v) {
          l.value.includes(v) || (l.value.push(v), (l.value = Mn(l.value, ne)))
        },
        unregisterPanel(v) {
          let x = l.value.indexOf(v)
          x !== -1 && l.value.splice(x, 1)
        },
      }
      ht(hu, d)
      let f = F({ tabs: [], panels: [] }),
        h = F(!1)
      qe(() => {
        h.value = !0
      }),
        ht(
          sl,
          Z(() => (h.value ? null : f.value)),
        )
      let g = Z(() => e.selectedIndex)
      return (
        qe(() => {
          st(
            [g],
            () => {
              var v
              return c((v = e.selectedIndex) != null ? v : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        Qt(() => {
          if (!a.value || u.value == null || d.tabs.value.length <= 0) return
          let v = Mn(d.tabs.value, ne)
          v.some((x, y) => ne(d.tabs.value[y]) !== ne(x)) &&
            d.setSelectedIndex(
              v.findIndex((x) => ne(x) === ne(d.tabs.value[u.value])),
            )
        }),
        () => {
          let v = { selectedIndex: r.value }
          return Ee(pe, [
            o.value.length <= 0 &&
              Ee(pp, {
                onFocus: () => {
                  for (let x of o.value) {
                    let y = ne(x)
                    if (y?.tabIndex === 0) return y.focus(), !0
                  }
                  return !1
                },
              }),
            en({
              theirProps: {
                ...n,
                ...au(e, [
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
  bp = Fe({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let s = Es("TabList")
      return () => {
        let i = { selectedIndex: s.selectedIndex.value },
          r = { role: "tablist", "aria-orientation": s.orientation.value }
        return en({
          ourProps: r,
          theirProps: e,
          slot: i,
          attrs: t,
          slots: n,
          name: "TabList",
        })
      }
    },
  }),
  vp = Fe({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      var i
      let r = (i = e.id) != null ? i : `headlessui-tabs-tab-${yn()}`,
        o = Es("Tab"),
        l = F(null)
      s({ el: l, $el: l }),
        qe(() => o.registerTab(l)),
        Zt(() => o.unregisterTab(l))
      let a = Re(sl),
        u = Z(() => {
          if (a.value) {
            let m = a.value.tabs.indexOf(r)
            return m === -1 ? a.value.tabs.push(r) - 1 : m
          }
          return -1
        }),
        c = Z(() => {
          let m = o.tabs.value.indexOf(l)
          return m === -1 ? u.value : m
        }),
        d = Z(() => c.value === o.selectedIndex.value)
      function f(m) {
        var b
        let w = m()
        if (w === on.Success && o.activation.value === "auto") {
          let E = (b = Vn(l)) == null ? void 0 : b.activeElement,
            P = o.tabs.value.findIndex((C) => ne(C) === E)
          P !== -1 && o.setSelectedIndex(P)
        }
        return w
      }
      function h(m) {
        let b = o.tabs.value.map((w) => ne(w)).filter(Boolean)
        if (m.key === Ge.Space || m.key === Ge.Enter) {
          m.preventDefault(), m.stopPropagation(), o.setSelectedIndex(c.value)
          return
        }
        switch (m.key) {
          case Ge.Home:
          case Ge.PageUp:
            return (
              m.preventDefault(), m.stopPropagation(), f(() => ft(b, ze.First))
            )
          case Ge.End:
          case Ge.PageDown:
            return (
              m.preventDefault(), m.stopPropagation(), f(() => ft(b, ze.Last))
            )
        }
        if (
          f(() =>
            gt(o.orientation.value, {
              vertical() {
                return m.key === Ge.ArrowUp
                  ? ft(b, ze.Previous | ze.WrapAround)
                  : m.key === Ge.ArrowDown
                    ? ft(b, ze.Next | ze.WrapAround)
                    : on.Error
              },
              horizontal() {
                return m.key === Ge.ArrowLeft
                  ? ft(b, ze.Previous | ze.WrapAround)
                  : m.key === Ge.ArrowRight
                    ? ft(b, ze.Next | ze.WrapAround)
                    : on.Error
              },
            }),
          ) === on.Success
        )
          return m.preventDefault()
      }
      let g = F(!1)
      function v() {
        var m
        g.value ||
          ((g.value = !0),
          !e.disabled &&
            ((m = ne(l)) == null || m.focus({ preventScroll: !0 }),
            o.setSelectedIndex(c.value),
            Gf(() => {
              g.value = !1
            })))
      }
      function x(m) {
        m.preventDefault()
      }
      let y = ru(
        Z(() => ({ as: e.as, type: t.type })),
        l,
      )
      return () => {
        var m, b
        let w = {
            selected: d.value,
            disabled: (m = e.disabled) != null ? m : !1,
          },
          { ...E } = e,
          P = {
            ref: l,
            onKeydown: h,
            onMousedown: x,
            onClick: v,
            id: r,
            role: "tab",
            type: y.value,
            "aria-controls":
              (b = ne(o.panels.value[c.value])) == null ? void 0 : b.id,
            "aria-selected": d.value,
            tabIndex: d.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return en({
          ourProps: P,
          theirProps: E,
          slot: w,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  yp = Fe({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let s = Es("TabPanels")
      return () => {
        let i = { selectedIndex: s.selectedIndex.value }
        return en({
          theirProps: e,
          ourProps: {},
          slot: i,
          attrs: n,
          slots: t,
          name: "TabPanels",
        })
      }
    },
  }),
  Yn = Fe({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: null },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      var i
      let r = (i = e.id) != null ? i : `headlessui-tabs-panel-${yn()}`,
        o = Es("TabPanel"),
        l = F(null)
      s({ el: l, $el: l }),
        qe(() => o.registerPanel(l)),
        Zt(() => o.unregisterPanel(l))
      let a = Re(sl),
        u = Z(() => {
          if (a.value) {
            let f = a.value.panels.indexOf(r)
            return f === -1 ? a.value.panels.push(r) - 1 : f
          }
          return -1
        }),
        c = Z(() => {
          let f = o.panels.value.indexOf(l)
          return f === -1 ? u.value : f
        }),
        d = Z(() => c.value === o.selectedIndex.value)
      return () => {
        var f
        let h = { selected: d.value },
          { tabIndex: g, ...v } = e,
          x = {
            ref: l,
            id: r,
            role: "tabpanel",
            "aria-labelledby":
              (f = ne(o.tabs.value[c.value])) == null ? void 0 : f.id,
            tabIndex: d.value ? g : -1,
          }
        return !d.value && e.unmount && !e.static
          ? Ee(Dn, { as: "span", "aria-hidden": !0, ...x })
          : en({
              ourProps: x,
              theirProps: v,
              slot: h,
              attrs: t,
              slots: n,
              features: hs.Static | hs.RenderStrategy,
              visible: d.value,
              name: "TabPanel",
            })
      }
    },
  })
function wp(e, t) {
  const n = `${e}Context`,
    s = Symbol(n)
  return [
    (o) => {
      const l = Re(s, o)
      if (l || l === null) return l
      throw new Error(
        `Injection \`${s.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`,
      )
    },
    (o) => (ht(s, o), o),
  ]
}
function il(e) {
  return e ? e.flatMap((t) => (t.type === pe ? il(t.children) : [t])) : []
}
function xp(e) {
  return ra() ? (Ac(e), !0) : !1
}
const gu = typeof window < "u" && typeof document < "u"
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope
const Sp = (e) => typeof e < "u",
  Ep = Object.prototype.toString,
  Cp = (e) => Ep.call(e) === "[object Object]"
function Bi(e) {
  return Array.isArray(e) ? e : [e]
}
function Tp(e, t, n) {
  return st(e, t, { ...n, immediate: !0 })
}
const mu = gu ? window : void 0
function rl(e) {
  var t
  const n = Rs(e)
  return (t = n?.$el) != null ? t : n
}
function kp(...e) {
  const t = [],
    n = () => {
      t.forEach((l) => l()), (t.length = 0)
    },
    s = (l, a, u, c) => (
      l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)
    ),
    i = Z(() => {
      const l = Bi(Rs(e[0])).filter((a) => a != null)
      return l.every((a) => typeof a != "string") ? l : void 0
    }),
    r = Tp(
      () => {
        var l, a
        return [
          (a = (l = i.value) == null ? void 0 : l.map((u) => rl(u))) != null
            ? a
            : [mu].filter((u) => u != null),
          Bi(Rs(i.value ? e[1] : e[0])),
          Bi(U(i.value ? e[2] : e[1])),
          Rs(i.value ? e[3] : e[2]),
        ]
      },
      ([l, a, u, c]) => {
        if ((n(), !l?.length || !a?.length || !u?.length)) return
        const d = Cp(c) ? { ...c } : c
        t.push(
          ...l.flatMap((f) => a.flatMap((h) => u.map((g) => s(f, h, g, d)))),
        )
      },
      { flush: "post" },
    ),
    o = () => {
      r(), n()
    }
  return xp(n), o
}
function Pp(e) {
  return JSON.parse(JSON.stringify(e))
}
function Ip(e, t, n, s = {}) {
  var i, r, o
  const {
      clone: l = !1,
      passive: a = !1,
      eventName: u,
      deep: c = !1,
      defaultValue: d,
      shouldEmit: f,
    } = s,
    h = xs(),
    g =
      n ||
      h?.emit ||
      ((i = h?.$emit) == null ? void 0 : i.bind(h)) ||
      ((o = (r = h?.proxy) == null ? void 0 : r.$emit) == null
        ? void 0
        : o.bind(h?.proxy))
  let v = u
  v = v || `update:${t.toString()}`
  const x = (b) => (l ? (typeof l == "function" ? l(b) : Pp(b)) : b),
    y = () => (Sp(e[t]) ? x(e[t]) : d),
    m = (b) => {
      f ? f(b) && g(v, b) : g(v, b)
    }
  if (a) {
    const b = y(),
      w = F(b)
    let E = !1
    return (
      st(
        () => e[t],
        (P) => {
          E || ((E = !0), (w.value = x(P)), Sn(() => (E = !1)))
        },
      ),
      st(
        w,
        (P) => {
          !E && (P !== e[t] || c) && m(P)
        },
        { deep: c },
      ),
      w
    )
  } else
    return Z({
      get() {
        return y()
      },
      set(b) {
        m(b)
      },
    })
}
function ll() {
  const e = xs(),
    t = F(),
    n = Z(() =>
      ["#text", "#comment"].includes(t.value?.$el.nodeName)
        ? t.value?.$el.nextElementSibling
        : rl(t),
    ),
    s = Object.assign({}, e.exposed),
    i = {}
  for (const o in e.props)
    Object.defineProperty(i, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
    })
  if (Object.keys(s).length > 0)
    for (const o in s)
      Object.defineProperty(i, o, {
        enumerable: !0,
        configurable: !0,
        get: () => s[o],
      })
  Object.defineProperty(i, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el,
  }),
    (e.exposed = i)
  function r(o) {
    ;(t.value = o),
      o &&
        (Object.defineProperty(i, "$el", {
          enumerable: !0,
          configurable: !0,
          get: () => (o instanceof Element ? o : o.$el),
        }),
        (e.exposed = i))
  }
  return { forwardRef: r, currentRef: t, currentElement: n }
}
function Mp(e, t = "reka") {
  return `${t}-${$a?.()}`
}
function $p(e, t) {
  const n = F(e)
  function s(r) {
    return t[n.value][r] ?? n.value
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = s(r)
    },
  }
}
function Ap(e, t) {
  const n = F({}),
    s = F("none"),
    i = F(e),
    r = e.value ? "mounted" : "unmounted"
  let o
  const l = t.value?.ownerDocument.defaultView ?? mu,
    { state: a, dispatch: u } = $p(r, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    }),
    c = (x) => {
      if (gu) {
        const y = new CustomEvent(x, { bubbles: !1, cancelable: !1 })
        t.value?.dispatchEvent(y)
      }
    }
  st(
    e,
    async (x, y) => {
      const m = y !== x
      if ((await Sn(), m)) {
        const b = s.value,
          w = Ms(t.value)
        x
          ? (u("MOUNT"), c("enter"), w === "none" && c("after-enter"))
          : w === "none" || w === "undefined" || n.value?.display === "none"
            ? (u("UNMOUNT"), c("leave"), c("after-leave"))
            : y && b !== w
              ? (u("ANIMATION_OUT"), c("leave"))
              : (u("UNMOUNT"), c("after-leave"))
      }
    },
    { immediate: !0 },
  )
  const d = (x) => {
      const y = Ms(t.value),
        m = y.includes(CSS.escape(x.animationName)),
        b = a.value === "mounted" ? "enter" : "leave"
      if (
        x.target === t.value &&
        m &&
        (c(`after-${b}`), u("ANIMATION_END"), !i.value)
      ) {
        const w = t.value.style.animationFillMode
        ;(t.value.style.animationFillMode = "forwards"),
          (o = l?.setTimeout(() => {
            t.value?.style.animationFillMode === "forwards" &&
              (t.value.style.animationFillMode = w)
          }))
      }
      x.target === t.value && y === "none" && u("ANIMATION_END")
    },
    f = (x) => {
      x.target === t.value && (s.value = Ms(t.value))
    },
    h = st(
      t,
      (x, y) => {
        x
          ? ((n.value = getComputedStyle(x)),
            x.addEventListener("animationstart", f),
            x.addEventListener("animationcancel", d),
            x.addEventListener("animationend", d))
          : (u("ANIMATION_END"),
            o !== void 0 && l?.clearTimeout(o),
            y?.removeEventListener("animationstart", f),
            y?.removeEventListener("animationcancel", d),
            y?.removeEventListener("animationend", d))
      },
      { immediate: !0 },
    ),
    g = st(a, () => {
      const x = Ms(t.value)
      s.value = a.value === "mounted" ? x : "none"
    })
  return (
    Zt(() => {
      h(), g()
    }),
    { isPresent: Z(() => ["mounted", "unmountSuspended"].includes(a.value)) }
  )
}
function Ms(e) {
  return (e && getComputedStyle(e).animationName) || "none"
}
var Op = Fe({
  name: "Presence",
  props: {
    present: { type: Boolean, required: !0 },
    forceMount: { type: Boolean },
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    const { present: s, forceMount: i } = Ea(e),
      r = F(),
      { isPresent: o } = Ap(s, r)
    n({ present: o })
    let l = t.default({ present: o.value })
    l = il(l || [])
    const a = xs()
    if (l && l?.length > 1) {
      const u = a?.parent?.type.name ? `<${a.parent.type.name} />` : "component"
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node.",
          ].map((c) => `  - ${c}`).join(`
`),
        ].join(`
`),
      )
    }
    return () =>
      i.value || s.value || o.value
        ? Ee(t.default({ present: o.value })[0], {
            ref: (u) => {
              const c = rl(u)
              return (
                typeof c?.hasAttribute > "u" ||
                  (c?.hasAttribute("data-reka-popper-content-wrapper")
                    ? (r.value = c.firstElementChild)
                    : (r.value = c)),
                c
              )
            },
          })
        : null
  },
})
const _p = Fe({
    name: "PrimitiveSlot",
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n }) {
      return () => {
        if (!n.default) return null
        const s = il(n.default()),
          i = s.findIndex((a) => a.type !== Rt)
        if (i === -1) return s
        const r = s[i]
        delete r.props?.ref
        const o = r.props ? el(t, r.props) : t,
          l = dn({ ...r, props: {} }, o)
        return s.length === 1 ? l : ((s[i] = l), s)
      }
    },
  }),
  jp = ["area", "img", "input"],
  ol = Fe({
    name: "Primitive",
    inheritAttrs: !1,
    props: {
      asChild: { type: Boolean, default: !1 },
      as: { type: [String, Object], default: "div" },
    },
    setup(e, { attrs: t, slots: n }) {
      const s = e.asChild ? "template" : e.as
      return typeof s == "string" && jp.includes(s)
        ? () => Ee(s, t)
        : s !== "template"
          ? () => Ee(e.as, t, { default: n.default })
          : () => Ee(_p, t, { default: n.default })
    },
  }),
  [bu, Lp] = wp("CollapsibleRoot")
var Bp = Fe({
    __name: "CollapsibleRoot",
    props: {
      defaultOpen: { type: Boolean, required: !1, default: !1 },
      open: { type: Boolean, required: !1, default: void 0 },
      disabled: { type: Boolean, required: !1 },
      unmountOnHide: { type: Boolean, required: !1, default: !0 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: ["update:open"],
    setup(e, { expose: t, emit: n }) {
      const s = e,
        r = Ip(s, "open", n, {
          defaultValue: s.defaultOpen,
          passive: s.open === void 0,
        }),
        { disabled: o, unmountOnHide: l } = Ea(s)
      return (
        Lp({
          contentId: "",
          disabled: o,
          open: r,
          unmountOnHide: l,
          onOpenToggle: () => {
            o.value || (r.value = !r.value)
          },
        }),
        t({ open: r }),
        ll(),
        (a, u) => (
          O(),
          oe(
            U(ol),
            {
              as: a.as,
              "as-child": s.asChild,
              "data-state": U(r) ? "open" : "closed",
              "data-disabled": U(o) ? "" : void 0,
            },
            {
              default: me(() => [Ye(a.$slots, "default", { open: U(r) })]),
              _: 3,
            },
            8,
            ["as", "as-child", "data-state", "data-disabled"],
          )
        )
      )
    },
  }),
  fo = Bp,
  Np = Fe({
    inheritAttrs: !1,
    __name: "CollapsibleContent",
    props: {
      forceMount: { type: Boolean, required: !1 },
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1 },
    },
    emits: ["contentFound"],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        i = bu()
      i.contentId ||= Mp(void 0, "reka-collapsible-content")
      const r = F(),
        { forwardRef: o, currentElement: l } = ll(),
        a = F(0),
        u = F(0),
        c = Z(() => i.open.value),
        d = F(c.value),
        f = F()
      st(
        () => [c.value, r.value?.present],
        async () => {
          await Sn()
          const g = l.value
          if (!g) return
          ;(f.value = f.value || {
            transitionDuration: g.style.transitionDuration,
            animationName: g.style.animationName,
          }),
            (g.style.transitionDuration = "0s"),
            (g.style.animationName = "none")
          const v = g.getBoundingClientRect()
          ;(u.value = v.height),
            (a.value = v.width),
            d.value ||
              ((g.style.transitionDuration = f.value.transitionDuration),
              (g.style.animationName = f.value.animationName))
        },
        { immediate: !0 },
      )
      const h = Z(() => d.value && i.open.value)
      return (
        qe(() => {
          requestAnimationFrame(() => {
            d.value = !1
          })
        }),
        kp(l, "beforematch", (g) => {
          requestAnimationFrame(() => {
            i.onOpenToggle(), s("contentFound")
          })
        }),
        (g, v) => (
          O(),
          oe(
            U(Op),
            {
              ref_key: "presentRef",
              ref: r,
              present: g.forceMount || U(i).open.value,
              "force-mount": !0,
            },
            {
              default: me(({ present: x }) => [
                te(
                  U(ol),
                  el(g.$attrs, {
                    id: U(i).contentId,
                    ref: U(o),
                    "as-child": n.asChild,
                    as: g.as,
                    hidden: x
                      ? void 0
                      : U(i).unmountOnHide.value
                        ? ""
                        : "until-found",
                    "data-state": h.value
                      ? void 0
                      : U(i).open.value
                        ? "open"
                        : "closed",
                    "data-disabled": U(i).disabled?.value ? "" : void 0,
                    style: {
                      "--reka-collapsible-content-height": `${u.value}px`,
                      "--reka-collapsible-content-width": `${a.value}px`,
                    },
                  }),
                  {
                    default: me(() => [
                      !U(i).unmountOnHide.value || x
                        ? Ye(g.$slots, "default", { key: 0 })
                        : we("v-if", !0),
                    ]),
                    _: 2,
                  },
                  1040,
                  [
                    "id",
                    "as-child",
                    "as",
                    "hidden",
                    "data-state",
                    "data-disabled",
                    "style",
                  ],
                ),
              ]),
              _: 3,
            },
            8,
            ["present"],
          )
        )
      )
    },
  }),
  po = Np,
  Rp = Fe({
    __name: "CollapsibleTrigger",
    props: {
      asChild: { type: Boolean, required: !1 },
      as: { type: null, required: !1, default: "button" },
    },
    setup(e) {
      const t = e
      ll()
      const n = bu()
      return (s, i) => (
        O(),
        oe(
          U(ol),
          {
            type: s.as === "button" ? "button" : void 0,
            as: s.as,
            "as-child": t.asChild,
            "aria-controls": U(n).contentId,
            "aria-expanded": U(n).open.value,
            "data-state": U(n).open.value ? "open" : "closed",
            "data-disabled": U(n).disabled?.value ? "" : void 0,
            disabled: U(n).disabled?.value,
            onClick: U(n).onOpenToggle,
          },
          { default: me(() => [Ye(s.$slots, "default")]), _: 3 },
          8,
          [
            "type",
            "as",
            "as-child",
            "aria-controls",
            "aria-expanded",
            "data-state",
            "data-disabled",
            "disabled",
            "onClick",
          ],
        )
      )
    },
  }),
  ho = Rp
const $n = typeof document < "u"
function vu(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function zp(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && vu(e.default))
  )
}
const ke = Object.assign
function Ni(e, t) {
  const n = {}
  for (const s in t) {
    const i = t[s]
    n[s] = Tt(i) ? i.map(e) : e(i)
  }
  return n
}
const ls = () => {},
  Tt = Array.isArray,
  yu = /#/g,
  Dp = /&/g,
  Fp = /\//g,
  Hp = /=/g,
  Gp = /\?/g,
  wu = /\+/g,
  Vp = /%5B/g,
  Wp = /%5D/g,
  xu = /%5E/g,
  qp = /%60/g,
  Su = /%7B/g,
  Up = /%7C/g,
  Eu = /%7D/g,
  Kp = /%20/g
function al(e) {
  return encodeURI("" + e)
    .replace(Up, "|")
    .replace(Vp, "[")
    .replace(Wp, "]")
}
function Yp(e) {
  return al(e).replace(Su, "{").replace(Eu, "}").replace(xu, "^")
}
function Cr(e) {
  return al(e)
    .replace(wu, "%2B")
    .replace(Kp, "+")
    .replace(yu, "%23")
    .replace(Dp, "%26")
    .replace(qp, "`")
    .replace(Su, "{")
    .replace(Eu, "}")
    .replace(xu, "^")
}
function Xp(e) {
  return Cr(e).replace(Hp, "%3D")
}
function Jp(e) {
  return al(e).replace(yu, "%23").replace(Gp, "%3F")
}
function Zp(e) {
  return e == null ? "" : Jp(e).replace(Fp, "%2F")
}
function ms(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const Qp = /\/$/,
  eh = (e) => e.replace(Qp, "")
function Ri(e, t, n = "/") {
  let s,
    i = {},
    r = "",
    o = ""
  const l = t.indexOf("#")
  let a = t.indexOf("?")
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((s = t.slice(0, a)),
      (r = t.slice(a + 1, l > -1 ? l : t.length)),
      (i = e(r))),
    l > -1 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = ih(s ?? t, n)),
    { fullPath: s + (r && "?") + r + o, path: s, query: i, hash: ms(o) }
  )
}
function th(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function go(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function nh(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1
  return (
    s > -1 &&
    s === i &&
    Fn(t.matched[s], n.matched[i]) &&
    Cu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Fn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Cu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!sh(e[n], t[n])) return !1
  return !0
}
function sh(e, t) {
  return Tt(e) ? mo(e, t) : Tt(t) ? mo(t, e) : e === t
}
function mo(e, t) {
  return Tt(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function ih(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    s = e.split("/"),
    i = s[s.length - 1]
  ;(i === ".." || i === ".") && s.push("")
  let r = n.length - 1,
    o,
    l
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== "."))
      if (l === "..") r > 1 && r--
      else break
  return n.slice(0, r).join("/") + "/" + s.slice(o).join("/")
}
const nn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var bs
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(bs || (bs = {}))
var os
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(os || (os = {}))
function rh(e) {
  if (!e)
    if ($n) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), eh(e)
}
const lh = /^[^#]+#/
function oh(e, t) {
  return e.replace(lh, "#") + t
}
function ah(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const xi = () => ({ left: window.scrollX, top: window.scrollY })
function uh(e) {
  let t
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!i) return
    t = ah(i, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function bo(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Tr = new Map()
function ch(e, t) {
  Tr.set(e, t)
}
function dh(e) {
  const t = Tr.get(e)
  return Tr.delete(e), t
}
let fh = () => location.protocol + "//" + location.host
function Tu(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    r = e.indexOf("#")
  if (r > -1) {
    let l = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      a = i.slice(l)
    return a[0] !== "/" && (a = "/" + a), go(a, "")
  }
  return go(n, e) + s + i
}
function ph(e, t, n, s) {
  let i = [],
    r = [],
    o = null
  const l = ({ state: f }) => {
    const h = Tu(e, location),
      g = n.value,
      v = t.value
    let x = 0
    if (f) {
      if (((n.value = h), (t.value = f), o && o === g)) {
        o = null
        return
      }
      x = v ? f.position - v.position : 0
    } else s(h)
    i.forEach((y) => {
      y(n.value, g, {
        delta: x,
        type: bs.pop,
        direction: x ? (x > 0 ? os.forward : os.back) : os.unknown,
      })
    })
  }
  function a() {
    o = n.value
  }
  function u(f) {
    i.push(f)
    const h = () => {
      const g = i.indexOf(f)
      g > -1 && i.splice(g, 1)
    }
    return r.push(h), h
  }
  function c() {
    const { history: f } = window
    f.state && f.replaceState(ke({}, f.state, { scroll: xi() }), "")
  }
  function d() {
    for (const f of r) f()
    ;(r = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", c)
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: d }
  )
}
function vo(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? xi() : null,
  }
}
function hh(e) {
  const { history: t, location: n } = window,
    s = { value: Tu(e, n) },
    i = { value: t.state }
  i.value ||
    r(
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
  function r(a, u, c) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a
          : fh() + e + a
    try {
      t[c ? "replaceState" : "pushState"](u, "", f), (i.value = u)
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](f)
    }
  }
  function o(a, u) {
    const c = ke({}, t.state, vo(i.value.back, a, i.value.forward, !0), u, {
      position: i.value.position,
    })
    r(a, c, !0), (s.value = a)
  }
  function l(a, u) {
    const c = ke({}, i.value, t.state, { forward: a, scroll: xi() })
    r(c.current, c, !0)
    const d = ke({}, vo(s.value, a, null), { position: c.position + 1 }, u)
    r(a, d, !1), (s.value = a)
  }
  return { location: s, state: i, push: l, replace: o }
}
function gh(e) {
  e = rh(e)
  const t = hh(e),
    n = ph(e, t.state, t.location, t.replace)
  function s(r, o = !0) {
    o || n.pauseListeners(), history.go(r)
  }
  const i = ke(
    { location: "", base: e, go: s, createHref: oh.bind(null, e) },
    t,
    n,
  )
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  )
}
function mh(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function ku(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const Pu = Symbol("")
var yo
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(yo || (yo = {}))
function Hn(e, t) {
  return ke(new Error(), { type: e, [Pu]: !0 }, t)
}
function Dt(e, t) {
  return e instanceof Error && Pu in e && (t == null || !!(e.type & t))
}
const wo = "[^/]+?",
  bh = { sensitive: !1, strict: !1, start: !0, end: !0 },
  vh = /[.+*?^${}()[\]/\\]/g
function yh(e, t) {
  const n = ke({}, bh, t),
    s = []
  let i = n.start ? "^" : ""
  const r = []
  for (const u of e) {
    const c = u.length ? [] : [90]
    n.strict && !u.length && (i += "/")
    for (let d = 0; d < u.length; d++) {
      const f = u[d]
      let h = 40 + (n.sensitive ? 0.25 : 0)
      if (f.type === 0)
        d || (i += "/"), (i += f.value.replace(vh, "\\$&")), (h += 40)
      else if (f.type === 1) {
        const { value: g, repeatable: v, optional: x, regexp: y } = f
        r.push({ name: g, repeatable: v, optional: x })
        const m = y || wo
        if (m !== wo) {
          h += 10
          try {
            new RegExp(`(${m})`)
          } catch (w) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${m}): ` + w.message,
            )
          }
        }
        let b = v ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`
        d || (b = x && u.length < 2 ? `(?:/${b})` : "/" + b),
          x && (b += "?"),
          (i += b),
          (h += 20),
          x && (h += -8),
          v && (h += -20),
          m === ".*" && (h += -50)
      }
      c.push(h)
    }
    s.push(c)
  }
  if (n.strict && n.end) {
    const u = s.length - 1
    s[u][s[u].length - 1] += 0.7000000000000001
  }
  n.strict || (i += "/?"),
    n.end ? (i += "$") : n.strict && !i.endsWith("/") && (i += "(?:/|$)")
  const o = new RegExp(i, n.sensitive ? "" : "i")
  function l(u) {
    const c = u.match(o),
      d = {}
    if (!c) return null
    for (let f = 1; f < c.length; f++) {
      const h = c[f] || "",
        g = r[f - 1]
      d[g.name] = h && g.repeatable ? h.split("/") : h
    }
    return d
  }
  function a(u) {
    let c = "",
      d = !1
    for (const f of e) {
      ;(!d || !c.endsWith("/")) && (c += "/"), (d = !1)
      for (const h of f)
        if (h.type === 0) c += h.value
        else if (h.type === 1) {
          const { value: g, repeatable: v, optional: x } = h,
            y = g in u ? u[g] : ""
          if (Tt(y) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const m = Tt(y) ? y.join("/") : y
          if (!m)
            if (x)
              f.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${g}"`)
          c += m
        }
    }
    return c || "/"
  }
  return { re: o, score: s, keys: r, parse: l, stringify: a }
}
function wh(e, t) {
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
function Iu(e, t) {
  let n = 0
  const s = e.score,
    i = t.score
  for (; n < s.length && n < i.length; ) {
    const r = wh(s[n], i[n])
    if (r) return r
    n++
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (xo(s)) return 1
    if (xo(i)) return -1
  }
  return i.length - s.length
}
function xo(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const xh = { type: 0, value: "" },
  Sh = /[a-zA-Z0-9_]/
function Eh(e) {
  if (!e) return [[]]
  if (e === "/") return [[xh]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`)
  }
  let n = 0,
    s = n
  const i = []
  let r
  function o() {
    r && i.push(r), (r = [])
  }
  let l = 0,
    a,
    u = "",
    c = ""
  function d() {
    u &&
      (n === 0
        ? r.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (r.length > 1 &&
              (a === "*" || a === "+") &&
              t(
                `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
              ),
            r.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: a === "*" || a === "+",
              optional: a === "*" || a === "?",
            }))
          : t("Invalid state to consume buffer"),
      (u = ""))
  }
  function f() {
    u += a
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        a === "/" ? (u && d(), o()) : a === ":" ? (d(), (n = 1)) : f()
        break
      case 4:
        f(), (n = s)
        break
      case 1:
        a === "("
          ? (n = 2)
          : Sh.test(a)
            ? f()
            : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--)
        break
      case 2:
        a === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + a)
            : (n = 3)
          : (c += a)
        break
      case 3:
        d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (c = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), o(), i
}
function Ch(e, t, n) {
  const s = yh(Eh(e.path), n),
    i = ke(s, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function Th(e, t) {
  const n = [],
    s = new Map()
  t = To({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(d) {
    return s.get(d)
  }
  function r(d, f, h) {
    const g = !h,
      v = Eo(d)
    v.aliasOf = h && h.record
    const x = To(t, d),
      y = [v]
    if ("alias" in d) {
      const w = typeof d.alias == "string" ? [d.alias] : d.alias
      for (const E of w)
        y.push(
          Eo(
            ke({}, v, {
              components: h ? h.record.components : v.components,
              path: E,
              aliasOf: h ? h.record : v,
            }),
          ),
        )
    }
    let m, b
    for (const w of y) {
      const { path: E } = w
      if (f && E[0] !== "/") {
        const P = f.record.path,
          C = P[P.length - 1] === "/" ? "" : "/"
        w.path = f.record.path + (E && C + E)
      }
      if (
        ((m = Ch(w, f, x)),
        h
          ? h.alias.push(m)
          : ((b = b || m),
            b !== m && b.alias.push(m),
            g && d.name && !Co(m) && o(d.name)),
        Mu(m) && a(m),
        v.children)
      ) {
        const P = v.children
        for (let C = 0; C < P.length; C++) r(P[C], m, h && h.children[C])
      }
      h = h || m
    }
    return b
      ? () => {
          o(b)
        }
      : ls
  }
  function o(d) {
    if (ku(d)) {
      const f = s.get(d)
      f &&
        (s.delete(d),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(o),
        f.alias.forEach(o))
    } else {
      const f = n.indexOf(d)
      f > -1 &&
        (n.splice(f, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function a(d) {
    const f = Ih(d, n)
    n.splice(f, 0, d), d.record.name && !Co(d) && s.set(d.record.name, d)
  }
  function u(d, f) {
    let h,
      g = {},
      v,
      x
    if ("name" in d && d.name) {
      if (((h = s.get(d.name)), !h)) throw Hn(1, { location: d })
      ;(x = h.record.name),
        (g = ke(
          So(
            f.params,
            h.keys
              .filter((b) => !b.optional)
              .concat(h.parent ? h.parent.keys.filter((b) => b.optional) : [])
              .map((b) => b.name),
          ),
          d.params &&
            So(
              d.params,
              h.keys.map((b) => b.name),
            ),
        )),
        (v = h.stringify(g))
    } else if (d.path != null)
      (v = d.path),
        (h = n.find((b) => b.re.test(v))),
        h && ((g = h.parse(v)), (x = h.record.name))
    else {
      if (((h = f.name ? s.get(f.name) : n.find((b) => b.re.test(f.path))), !h))
        throw Hn(1, { location: d, currentLocation: f })
      ;(x = h.record.name),
        (g = ke({}, f.params, d.params)),
        (v = h.stringify(g))
    }
    const y = []
    let m = h
    for (; m; ) y.unshift(m.record), (m = m.parent)
    return { name: x, path: v, params: g, matched: y, meta: Ph(y) }
  }
  e.forEach((d) => r(d))
  function c() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: r,
    resolve: u,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: l,
    getRecordMatcher: i,
  }
}
function So(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function Eo(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: kh(e),
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
  return Object.defineProperty(t, "mods", { value: {} }), t
}
function kh(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n
  return t
}
function Co(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Ph(e) {
  return e.reduce((t, n) => ke(t, n.meta), {})
}
function To(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Ih(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const r = (n + s) >> 1
    Iu(e, t[r]) < 0 ? (s = r) : (n = r + 1)
  }
  const i = Mh(e)
  return i && (s = t.lastIndexOf(i, s - 1)), s
}
function Mh(e) {
  let t = e
  for (; (t = t.parent); ) if (Mu(t) && Iu(e, t) === 0) return t
}
function Mu({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function $h(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const s = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let i = 0; i < s.length; ++i) {
    const r = s[i].replace(wu, " "),
      o = r.indexOf("="),
      l = ms(o < 0 ? r : r.slice(0, o)),
      a = o < 0 ? null : ms(r.slice(o + 1))
    if (l in t) {
      let u = t[l]
      Tt(u) || (u = t[l] = [u]), u.push(a)
    } else t[l] = a
  }
  return t
}
function ko(e) {
  let t = ""
  for (let n in e) {
    const s = e[n]
    if (((n = Xp(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Tt(s) ? s.map((r) => r && Cr(r)) : [s && Cr(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r))
    })
  }
  return t
}
function Ah(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Tt(s)
        ? s.map((i) => (i == null ? null : "" + i))
        : s == null
          ? s
          : "" + s)
  }
  return t
}
const Oh = Symbol(""),
  Po = Symbol(""),
  Si = Symbol(""),
  $u = Symbol(""),
  kr = Symbol("")
function Xn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function ln(e, t, n, s, i, r = (o) => o()) {
  const o = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || [])
  return () =>
    new Promise((l, a) => {
      const u = (f) => {
          f === !1
            ? a(Hn(4, { from: n, to: t }))
            : f instanceof Error
              ? a(f)
              : mh(f)
                ? a(Hn(2, { from: t, to: f }))
                : (o &&
                    s.enterCallbacks[i] === o &&
                    typeof f == "function" &&
                    o.push(f),
                  l())
        },
        c = r(() => e.call(s && s.instances[i], t, n, u))
      let d = Promise.resolve(c)
      e.length < 3 && (d = d.then(u)), d.catch((f) => a(f))
    })
}
function zi(e, t, n, s, i = (r) => r()) {
  const r = []
  for (const o of e)
    for (const l in o.components) {
      let a = o.components[l]
      if (!(t !== "beforeRouteEnter" && !o.instances[l]))
        if (vu(a)) {
          const c = (a.__vccOpts || a)[t]
          c && r.push(ln(c, n, s, o, l, i))
        } else {
          let u = a()
          r.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${o.path}"`,
                )
              const d = zp(c) ? c.default : c
              ;(o.mods[l] = c), (o.components[l] = d)
              const h = (d.__vccOpts || d)[t]
              return h && ln(h, n, s, o, l, i)()
            }),
          )
        }
    }
  return r
}
function Io(e) {
  const t = Re(Si),
    n = Re($u),
    s = Z(() => {
      const a = U(e.to)
      return t.resolve(a)
    }),
    i = Z(() => {
      const { matched: a } = s.value,
        { length: u } = a,
        c = a[u - 1],
        d = n.matched
      if (!c || !d.length) return -1
      const f = d.findIndex(Fn.bind(null, c))
      if (f > -1) return f
      const h = Mo(a[u - 2])
      return u > 1 && Mo(c) === h && d[d.length - 1].path !== h
        ? d.findIndex(Fn.bind(null, a[u - 2]))
        : f
    }),
    r = Z(() => i.value > -1 && Nh(n.params, s.value.params)),
    o = Z(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        Cu(n.params, s.value.params),
    )
  function l(a = {}) {
    if (Bh(a)) {
      const u = t[U(e.replace) ? "replace" : "push"](U(e.to)).catch(ls)
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      )
    }
    return Promise.resolve()
  }
  return {
    route: s,
    href: Z(() => s.value.href),
    isActive: r,
    isExactActive: o,
    navigate: l,
  }
}
function _h(e) {
  return e.length === 1 ? e[0] : e
}
const jh = Fe({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
      viewTransition: Boolean,
    },
    useLink: Io,
    setup(e, { slots: t }) {
      const n = ys(Io(e)),
        { options: s } = Re(Si),
        i = Z(() => ({
          [$o(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [$o(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const r = t.default && _h(t.default(n))
        return e.custom
          ? r
          : Ee(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              r,
            )
      }
    },
  }),
  Lh = jh
function Bh(e) {
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
function Nh(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n]
    if (typeof s == "string") {
      if (s !== i) return !1
    } else if (!Tt(i) || i.length !== s.length || s.some((r, o) => r !== i[o]))
      return !1
  }
  return !0
}
function Mo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const $o = (e, t, n) => e ?? t ?? n,
  Rh = Fe({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Re(kr),
        i = Z(() => e.route || s.value),
        r = Re(Po, 0),
        o = Z(() => {
          let u = U(r)
          const { matched: c } = i.value
          let d
          for (; (d = c[u]) && !d.components; ) u++
          return u
        }),
        l = Z(() => i.value.matched[o.value])
      ht(
        Po,
        Z(() => o.value + 1),
      ),
        ht(Oh, l),
        ht(kr, i)
      const a = F()
      return (
        st(
          () => [a.value, l.value, e.name],
          ([u, c, d], [f, h, g]) => {
            c &&
              ((c.instances[d] = u),
              h &&
                h !== c &&
                u &&
                u === f &&
                (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
              u &&
                c &&
                (!h || !Fn(c, h) || !f) &&
                (c.enterCallbacks[d] || []).forEach((v) => v(u))
          },
          { flush: "post" },
        ),
        () => {
          const u = i.value,
            c = e.name,
            d = l.value,
            f = d && d.components[c]
          if (!f) return Ao(n.default, { Component: f, route: u })
          const h = d.props[c],
            g = h
              ? h === !0
                ? u.params
                : typeof h == "function"
                  ? h(u)
                  : h
              : null,
            x = Ee(
              f,
              ke({}, g, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (d.instances[c] = null)
                },
                ref: a,
              }),
            )
          return Ao(n.default, { Component: x, route: u }) || x
        }
      )
    },
  })
function Ao(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const zh = Rh
function Dh(e) {
  const t = Th(e.routes, e),
    n = e.parseQuery || $h,
    s = e.stringifyQuery || ko,
    i = e.history,
    r = Xn(),
    o = Xn(),
    l = Xn(),
    a = Zc(nn)
  let u = nn
  $n &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const c = Ni.bind(null, (B) => "" + B),
    d = Ni.bind(null, Zp),
    f = Ni.bind(null, ms)
  function h(B, ee) {
    let X, se
    return (
      ku(B) ? ((X = t.getRecordMatcher(B)), (se = ee)) : (se = B),
      t.addRoute(se, X)
    )
  }
  function g(B) {
    const ee = t.getRecordMatcher(B)
    ee && t.removeRoute(ee)
  }
  function v() {
    return t.getRoutes().map((B) => B.record)
  }
  function x(B) {
    return !!t.getRecordMatcher(B)
  }
  function y(B, ee) {
    if (((ee = ke({}, ee || a.value)), typeof B == "string")) {
      const M = Ri(n, B, ee.path),
        z = t.resolve({ path: M.path }, ee),
        H = i.createHref(M.fullPath)
      return ke(M, z, {
        params: f(z.params),
        hash: ms(M.hash),
        redirectedFrom: void 0,
        href: H,
      })
    }
    let X
    if (B.path != null) X = ke({}, B, { path: Ri(n, B.path, ee.path).path })
    else {
      const M = ke({}, B.params)
      for (const z in M) M[z] == null && delete M[z]
      ;(X = ke({}, B, { params: d(M) })), (ee.params = d(ee.params))
    }
    const se = t.resolve(X, ee),
      Me = B.hash || ""
    se.params = c(f(se.params))
    const S = th(s, ke({}, B, { hash: Yp(Me), path: se.path })),
      T = i.createHref(S)
    return ke(
      { fullPath: S, hash: Me, query: s === ko ? Ah(B.query) : B.query || {} },
      se,
      { redirectedFrom: void 0, href: T },
    )
  }
  function m(B) {
    return typeof B == "string" ? Ri(n, B, a.value.path) : ke({}, B)
  }
  function b(B, ee) {
    if (u !== B) return Hn(8, { from: ee, to: B })
  }
  function w(B) {
    return C(B)
  }
  function E(B) {
    return w(ke(m(B), { replace: !0 }))
  }
  function P(B) {
    const ee = B.matched[B.matched.length - 1]
    if (ee && ee.redirect) {
      const { redirect: X } = ee
      let se = typeof X == "function" ? X(B) : X
      return (
        typeof se == "string" &&
          ((se =
            se.includes("?") || se.includes("#") ? (se = m(se)) : { path: se }),
          (se.params = {})),
        ke(
          {
            query: B.query,
            hash: B.hash,
            params: se.path != null ? {} : B.params,
          },
          se,
        )
      )
    }
  }
  function C(B, ee) {
    const X = (u = y(B)),
      se = a.value,
      Me = B.state,
      S = B.force,
      T = B.replace === !0,
      M = P(X)
    if (M)
      return C(
        ke(m(M), {
          state: typeof M == "object" ? ke({}, Me, M.state) : Me,
          force: S,
          replace: T,
        }),
        ee || X,
      )
    const z = X
    z.redirectedFrom = ee
    let H
    return (
      !S &&
        nh(s, se, X) &&
        ((H = Hn(16, { to: z, from: se })), je(se, se, !0, !1)),
      (H ? Promise.resolve(H) : $(z, se))
        .catch((N) => (Dt(N) ? (Dt(N, 2) ? N : be(N)) : L(N, z, se)))
        .then((N) => {
          if (N) {
            if (Dt(N, 2))
              return C(
                ke({ replace: T }, m(N.to), {
                  state: typeof N.to == "object" ? ke({}, Me, N.to.state) : Me,
                  force: S,
                }),
                ee || z,
              )
          } else N = G(z, se, !0, T, Me)
          return j(z, se, N), N
        })
    )
  }
  function A(B, ee) {
    const X = b(B, ee)
    return X ? Promise.reject(X) : Promise.resolve()
  }
  function I(B) {
    const ee = tn.values().next().value
    return ee && typeof ee.runWithContext == "function"
      ? ee.runWithContext(B)
      : B()
  }
  function $(B, ee) {
    let X
    const [se, Me, S] = Fh(B, ee)
    X = zi(se.reverse(), "beforeRouteLeave", B, ee)
    for (const M of se)
      M.leaveGuards.forEach((z) => {
        X.push(ln(z, B, ee))
      })
    const T = A.bind(null, B, ee)
    return (
      X.push(T),
      rt(X)
        .then(() => {
          X = []
          for (const M of r.list()) X.push(ln(M, B, ee))
          return X.push(T), rt(X)
        })
        .then(() => {
          X = zi(Me, "beforeRouteUpdate", B, ee)
          for (const M of Me)
            M.updateGuards.forEach((z) => {
              X.push(ln(z, B, ee))
            })
          return X.push(T), rt(X)
        })
        .then(() => {
          X = []
          for (const M of S)
            if (M.beforeEnter)
              if (Tt(M.beforeEnter))
                for (const z of M.beforeEnter) X.push(ln(z, B, ee))
              else X.push(ln(M.beforeEnter, B, ee))
          return X.push(T), rt(X)
        })
        .then(
          () => (
            B.matched.forEach((M) => (M.enterCallbacks = {})),
            (X = zi(S, "beforeRouteEnter", B, ee, I)),
            X.push(T),
            rt(X)
          ),
        )
        .then(() => {
          X = []
          for (const M of o.list()) X.push(ln(M, B, ee))
          return X.push(T), rt(X)
        })
        .catch((M) => (Dt(M, 8) ? M : Promise.reject(M)))
    )
  }
  function j(B, ee, X) {
    l.list().forEach((se) => I(() => se(B, ee, X)))
  }
  function G(B, ee, X, se, Me) {
    const S = b(B, ee)
    if (S) return S
    const T = ee === nn,
      M = $n ? history.state : {}
    X &&
      (se || T
        ? i.replace(B.fullPath, ke({ scroll: T && M && M.scroll }, Me))
        : i.push(B.fullPath, Me)),
      (a.value = B),
      je(B, ee, X, T),
      be()
  }
  let q
  function fe() {
    q ||
      (q = i.listen((B, ee, X) => {
        if (!vt.listening) return
        const se = y(B),
          Me = P(se)
        if (Me) {
          C(ke(Me, { replace: !0, force: !0 }), se).catch(ls)
          return
        }
        u = se
        const S = a.value
        $n && ch(bo(S.fullPath, X.delta), xi()),
          $(se, S)
            .catch((T) =>
              Dt(T, 12)
                ? T
                : Dt(T, 2)
                  ? (C(ke(m(T.to), { force: !0 }), se)
                      .then((M) => {
                        Dt(M, 20) &&
                          !X.delta &&
                          X.type === bs.pop &&
                          i.go(-1, !1)
                      })
                      .catch(ls),
                    Promise.reject())
                  : (X.delta && i.go(-X.delta, !1), L(T, se, S)),
            )
            .then((T) => {
              ;(T = T || G(se, S, !1)),
                T &&
                  (X.delta && !Dt(T, 8)
                    ? i.go(-X.delta, !1)
                    : X.type === bs.pop && Dt(T, 20) && i.go(-1, !1)),
                j(se, S, T)
            })
            .catch(ls)
      }))
  }
  let ge = Xn(),
    _ = Xn(),
    R
  function L(B, ee, X) {
    be(B)
    const se = _.list()
    return (
      se.length ? se.forEach((Me) => Me(B, ee, X)) : console.error(B),
      Promise.reject(B)
    )
  }
  function xe() {
    return R && a.value !== nn
      ? Promise.resolve()
      : new Promise((B, ee) => {
          ge.add([B, ee])
        })
  }
  function be(B) {
    return (
      R ||
        ((R = !B),
        fe(),
        ge.list().forEach(([ee, X]) => (B ? X(B) : ee())),
        ge.reset()),
      B
    )
  }
  function je(B, ee, X, se) {
    const { scrollBehavior: Me } = e
    if (!$n || !Me) return Promise.resolve()
    const S =
      (!X && dh(bo(B.fullPath, 0))) ||
      ((se || !X) && history.state && history.state.scroll) ||
      null
    return Sn()
      .then(() => Me(B, ee, S))
      .then((T) => T && uh(T))
      .catch((T) => L(T, B, ee))
  }
  const Le = (B) => i.go(B)
  let bt
  const tn = new Set(),
    vt = {
      currentRoute: a,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: x,
      getRoutes: v,
      resolve: y,
      options: e,
      push: w,
      replace: E,
      go: Le,
      back: () => Le(-1),
      forward: () => Le(1),
      beforeEach: r.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: _.add,
      isReady: xe,
      install(B) {
        const ee = this
        B.component("RouterLink", Lh),
          B.component("RouterView", zh),
          (B.config.globalProperties.$router = ee),
          Object.defineProperty(B.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => U(a),
          }),
          $n &&
            !bt &&
            a.value === nn &&
            ((bt = !0), w(i.location).catch((Me) => {}))
        const X = {}
        for (const Me in nn)
          Object.defineProperty(X, Me, {
            get: () => a.value[Me],
            enumerable: !0,
          })
        B.provide(Si, ee), B.provide($u, wa(X)), B.provide(kr, a)
        const se = B.unmount
        tn.add(B),
          (B.unmount = function () {
            tn.delete(B),
              tn.size < 1 &&
                ((u = nn),
                q && q(),
                (q = null),
                (a.value = nn),
                (bt = !1),
                (R = !1)),
              se()
          })
      },
    }
  function rt(B) {
    return B.reduce((ee, X) => ee.then(() => I(X)), Promise.resolve())
  }
  return vt
}
function Fh(e, t) {
  const n = [],
    s = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < r; o++) {
    const l = t.matched[o]
    l && (e.matched.find((u) => Fn(u, l)) ? s.push(l) : n.push(l))
    const a = e.matched[o]
    a && (t.matched.find((u) => Fn(u, a)) || i.push(a))
  }
  return [n, s, i]
}
function Hh() {
  return Re(Si)
}
var $s = {
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
const Gh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  He =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: s = 2,
        absoluteStrokeWidth: i,
        color: r,
        class: o,
        ...l
      },
      { attrs: a, slots: u },
    ) =>
      Ee(
        "svg",
        {
          ...$s,
          width: n || $s.width,
          height: n || $s.height,
          stroke: r || $s.stroke,
          "stroke-width": i ? (Number(s) * 24) / Number(n) : s,
          ...a,
          class: ["lucide", `lucide-${Gh(e)}`],
          ...l,
        },
        [...t.map((c) => Ee(...c)), ...(u.default ? [u.default()] : [])],
      )
const Oo = He("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const _o = He("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const Vh = He("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
])
const Wh = He("CloudDrizzleIcon", [
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
const qh = He("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }],
])
const Au = He("EyeOffIcon", [
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
const Uh = He("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
const Kh = He("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
const Yh = He("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
const Xh = He("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
const Jh = He("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
const Zh = He("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
const Qh = He("PencilRulerIcon", [
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
const e0 = He("RabbitIcon", [
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
const Hs = He("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
const t0 = He("SunIcon", [
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
const Di = He("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const n0 = He("TurtleIcon", [
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
const Pr = He("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  xt =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  St = '</title><path d="',
  Et = '"/></svg>',
  s0 = {
    title: "Blender",
    slug: "blender",
    get svg() {
      return xt + "Blender" + St + this.path + Et
    },
    path: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
    source: "https://www.blender.org/about/logo",
    hex: "E87D0D",
    guidelines: "https://www.blender.org/about/logo",
  },
  Jn = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return xt + "Bootstrap" + St + this.path + Et
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  i0 = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return xt + "Cloudflare" + St + this.path + Et
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  r0 = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return xt + "Figma" + St + this.path + Et
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  Ou = {
    title: "GitHub",
    slug: "github",
    get svg() {
      return xt + "GitHub" + St + this.path + Et
    },
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    source: "https://github.com/logos",
    hex: "181717",
    guidelines: "https://github.com/logos",
  },
  l0 = {
    title: "Instagram",
    slug: "instagram",
    get svg() {
      return xt + "Instagram" + St + this.path + Et
    },
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    source: "https://about.meta.com/brand/resources/instagram",
    hex: "E4405F",
    guidelines: "https://about.meta.com/brand/resources/instagram",
  },
  jo = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return xt + "JavaScript" + St + this.path + Et
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  o0 = {
    title: "LinkedIn",
    slug: "linkedin",
    get svg() {
      return xt + "LinkedIn" + St + this.path + Et
    },
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    source: "https://brand.linkedin.com",
    hex: "0A66C2",
    guidelines: "https://brand.linkedin.com/policies",
  },
  As = {
    title: "PHP",
    slug: "php",
    get svg() {
      return xt + "PHP" + St + this.path + Et
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  a0 = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return xt + "Tailwind CSS" + St + this.path + Et
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  u0 = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return xt + "Vue.js" + St + this.path + Et
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
  At = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return xt + "WordPress" + St + this.path + Et
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  c0 = { class: "flex justify-center p-5 gap-5 content-center" },
  d0 = { class: "flex justify-between gap-2 w-full content-center" },
  f0 = { class: "flex gap-1 p-2" },
  p0 = { class: "flex gap-5 p-2 relative" },
  h0 = { class: "py-1", role: "menu" },
  g0 = ["onClick"],
  m0 = { key: 0 },
  b0 = { key: 1 },
  v0 = { key: 2 },
  y0 = ["onClick"],
  w0 = { class: "flex gap-3 content-center" },
  x0 = {
    href: "https://github.com/josephclaytonhansen",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  S0 = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "16px",
    height: "16px",
  },
  E0 = ["d"],
  C0 = { class: "lg:hidden flex" },
  T0 = { class: "flex gap-1 p-2" },
  k0 = { class: "flex flex-col gap-2 p-2" },
  P0 = { class: "flex justify-between" },
  I0 = { class: "flex justify-between items-center" },
  M0 = { class: "flex gap-1 p-2" },
  $0 = { class: "py-2 px-3 rounded opacity-75 font-semibold" },
  A0 = { class: "ml-5" },
  O0 = { class: "ml-5" },
  _0 = ["onClick"],
  j0 = { class: "py-1 px-3 rounded text-sm" },
  L0 = { class: "ml-5" },
  B0 = ["onClick"],
  N0 = { class: "py-2 px-3 rounded" },
  R0 = { class: "py-2 px-3 rounded opacity-75 font-semibold" },
  z0 = { class: "ml-5" },
  D0 = ["onClick"],
  F0 = { class: "py-2 px-3 rounded" },
  H0 = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = F(5),
        s = t,
        i = Hh(),
        r = [
          {
            id: "web",
            label: "Web",
            items: [
              {
                label: "Web Portfolio",
                path: "/web-portfolio",
                activePath: "/web-portfolio",
              },
              {
                label: "Web Services",
                path: "/web-services",
                activePath: "/web-services",
              },
            ],
          },
          {
            id: "unity",
            label: "Unity",
            items: [
              {
                label: "Helpful Editor Scripts",
                path: "/unity-editor-scripts",
              },
              { label: "Projects", path: "/unity-projects" },
              { label: "Shader Graph", path: "/unity-shader-graph" },
            ],
          },
          {
            id: "programming",
            label: "Programming",
            subsections: [
              {
                id: "php",
                label: "PHP",
                items: [
                  { label: "FigRef", path: "/figref" },
                  {
                    label: "Custom WordPress Themes",
                    path: "/wordpress-themes",
                  },
                  { label: "WordPress Plugins", path: "/wordpress-plugins" },
                ],
              },
              {
                id: "javascript",
                label: "JavaScript",
                items: [
                  {
                    label: "Discourse Image Comparison Slider",
                    path: "/discourse-image-comparison",
                  },
                  { label: "Garden Tracker", path: "/garden-tracker" },
                  {
                    label: "Javascript Snippets",
                    path: "/javascript-snippets",
                  },
                ],
              },
              {
                id: "arduino",
                label: "Arduino",
                items: [
                  {
                    label: "Blender Arduino Controller",
                    path: "/blender-arduino-controller",
                  },
                  { label: "LEDs", path: "/arduino-leds" },
                ],
              },
              {
                id: "python",
                label: "Python",
                items: [
                  { label: "Instagram Scraper", path: "/instagram-scraper" },
                ],
              },
            ],
          },
          {
            id: "blender",
            label: "Blender",
            items: [
              { label: "Art Portfolio", path: "/blender-art" },
              { label: "Custom Build (Fruitbat)", path: "/fruitbat" },
              { label: "My Add-Ons", path: "/blender-addons" },
              {
                label: "Shading Rig + Cel Character Tools",
                path: "/shading-rig",
              },
            ],
          },
          {
            id: "communications",
            label: "Communications",
            items: [
              { label: "Technical Blog", path: "/devlog" },
              { label: "Personal Blog", path: "/blog" },
              { label: "Presentations", path: "/presentations" },
            ],
          },
          {
            id: "aboutme",
            label: "About Me",
            items: [
              { label: "About Me", path: "/about-me" },
              { label: "Resume", path: "/resume" },
              { label: "Contact", path: "/contact" },
            ],
          },
        ],
        o = Z(() => ({
          "bg-slate-200": n.value == 5,
          "bg-slate-300": n.value == 4,
          "bg-slate-600": n.value == 3,
          "bg-slate-800": n.value == 2,
          "bg-slate-900": n.value == 1,
        })),
        l = Z(() => ({
          "bg-slate-100": n.value == 5,
          "bg-slate-200": n.value == 4,
          "bg-slate-500": n.value == 3,
          "bg-slate-700": n.value == 2,
          "bg-slate-800": n.value == 1,
        })),
        a = Z(() => ({
          "text-emerald-500": n.value >= 4,
          "text-orange-200": n.value == 3,
          "text-orange-500": n.value == 2,
          "text-orange-400": n.value == 1,
        })),
        u = Z(() => ({
          "text-emerald-500 hover:text-emerald-400": n.value >= 4,
          "text-orange-200 hover:text-orange-100": n.value == 3,
          "text-orange-500 hover:text-orange-400": n.value == 2,
          "text-orange-400 hover:text-orange-300": n.value == 1,
        })),
        c = Z(() => ({
          "text-slate-900 hover:text-emerald-500": n.value == 5,
          "text-slate-800 hover:text-emerald-500": n.value == 4,
          "text-slate-300 hover:text-orange-200": n.value == 3,
          "text-slate-200 hover:text-orange-500": n.value == 2,
          "text-slate-400 hover:text-orange-400": n.value == 1,
        })),
        d = Z(() => ({
          "text-slate-900": n.value == 5,
          "text-slate-800": n.value == 4,
          "text-slate-300": n.value == 3,
          "text-slate-200": n.value == 2,
          "text-slate-400": n.value == 1,
        })),
        f = Z(() => ({
          "text-slate-700": n.value == 5,
          "text-slate-600": n.value == 4,
          "text-slate-300": n.value == 3,
          "text-slate-200": n.value == 2,
          "text-slate-400": n.value == 1,
        })),
        h = Z(() => ({
          "bg-slate-500 hover:bg-slate-600": n.value >= 4,
          "bg-slate-400 hover:bg-slate-500": n.value == 3,
          "bg-slate-600 hover:bg-slate-700": n.value == 2,
          "bg-slate-700 hover:bg-slate-800": n.value == 1,
        })),
        g = Z(() => ({
          "bg-emerald-600 hover:bg-emerald-700": n.value >= 4,
          "bg-slate-500 hover:bg-slate-600": n.value == 3,
          "bg-orange-600 hover:bg-orange-700": n.value == 2,
          "bg-orange-500 hover:bg-orange-600": n.value == 1,
        })),
        v = (b) => {
          ;(n.value = b.target.value), s("update:brightness", n.value)
          let w = "--swiper-navigation-color",
            E = "--swiper-pagination-color",
            P = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(w, P),
            document.documentElement.style.setProperty(E, P)
          let C = {
              1: "#cbd5e1",
              2: "#e2e8f0",
              3: "#d1d5db",
              4: "#1e293b",
              5: "#0f172a",
            }[n.value],
            A = {
              1: "#fb923c",
              2: "#f97316",
              3: "#fed7aa",
              4: "#10b981",
              5: "#10b981",
            }[n.value]
          document.documentElement.style.setProperty("--link-color", C),
            document.documentElement.style.setProperty("--link-hover-color", A)
        }
      qe(() => {
        let b = window.localStorage
        if (b.getItem("brightness")) {
          n.value = Number(b.getItem("brightness"))
          let w = "--swiper-navigation-color",
            E = "--swiper-pagination-color",
            P = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(w, P),
            document.documentElement.style.setProperty(E, P)
          let C = {
              1: "#cbd5e1",
              2: "#e2e8f0",
              3: "#d1d5db",
              4: "#1e293b",
              5: "#0f172a",
            }[n.value],
            A = {
              1: "#fb923c",
              2: "#f97316",
              3: "#fed7aa",
              4: "#10b981",
              5: "#10b981",
            }[n.value]
          document.documentElement.style.setProperty("--link-color", C),
            document.documentElement.style.setProperty("--link-hover-color", A)
        }
      })
      const x = () => {
          window.location.href = "/"
        },
        y = () => {
          let b = document.getElementById("mobileMenu")
          b.classList.contains("hidden")
            ? b.classList.remove("hidden")
            : b.classList.add("hidden")
        },
        m = (b) => {
          y(), i.push(b)
        }
      return (b, w) => (
        O(),
        D(
          pe,
          null,
          [
            p("div", c0, [
              w[5] || (w[5] = p("div", { class: "w-1/12" }, null, -1)),
              p(
                "div",
                {
                  class: k([
                    "grow rounded lg:flex justify-between p-3 hidden",
                    o.value,
                  ]),
                },
                [
                  p("div", d0, [
                    p("div", f0, [
                      te(
                        U(Di),
                        { class: k(a.value), "stroke-width": "3" },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "p",
                        {
                          class: k([
                            u.value,
                            "font-monospace font-bold cursor-pointer transition-colors duration-300",
                          ]),
                          onClick: x,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    p("div", p0, [
                      (O(),
                      D(
                        pe,
                        null,
                        Ve(r, (E) =>
                          te(
                            U(Er),
                            {
                              key: E.id,
                              class: "relative inline-block text-left",
                            },
                            {
                              default: me(() => [
                                te(
                                  U(uo),
                                  {
                                    "aria-label": `${E.label} dropdown menu`,
                                    class: k([
                                      "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                      c.value,
                                    ]),
                                  },
                                  {
                                    default: me(() => [
                                      ce(Ce(E.label), 1),
                                      te(U(_o)),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["aria-label", "class"],
                                ),
                                te(
                                  U(co),
                                  {
                                    class: k([
                                      "absolute z-10 mt-1 rounded",
                                      [
                                        l.value,
                                        E.subsections ? "w-64" : "w-56",
                                      ],
                                    ]),
                                  },
                                  {
                                    default: me(() => [
                                      p("div", h0, [
                                        E.subsections
                                          ? (O(!0),
                                            D(
                                              pe,
                                              { key: 1 },
                                              Ve(
                                                E.subsections,
                                                (P, C) => (
                                                  O(),
                                                  D(
                                                    pe,
                                                    { key: P.id },
                                                    [
                                                      p(
                                                        "div",
                                                        {
                                                          class: k([
                                                            "px-4 py-1 text-sm font-semibold opacity-75",
                                                            [
                                                              f.value,
                                                              C > 0
                                                                ? "mt-2"
                                                                : "",
                                                            ],
                                                          ]),
                                                        },
                                                        Ce(P.label),
                                                        3,
                                                      ),
                                                      (O(!0),
                                                      D(
                                                        pe,
                                                        null,
                                                        Ve(
                                                          P.items,
                                                          (A) => (
                                                            O(),
                                                            D(
                                                              "a",
                                                              {
                                                                key: A.path,
                                                                onClick: (I) =>
                                                                  b.$router.push(
                                                                    A.path,
                                                                  ),
                                                                class:
                                                                  "block px-6 py-1 cursor-pointer text-sm",
                                                              },
                                                              Ce(A.label),
                                                              9,
                                                              y0,
                                                            )
                                                          ),
                                                        ),
                                                        128,
                                                      )),
                                                    ],
                                                    64,
                                                  )
                                                ),
                                              ),
                                              128,
                                            ))
                                          : (O(!0),
                                            D(
                                              pe,
                                              { key: 0 },
                                              Ve(
                                                E.items,
                                                (P) => (
                                                  O(),
                                                  D(
                                                    "a",
                                                    {
                                                      key: P.path,
                                                      onClick: (C) =>
                                                        b.$router.push(P.path),
                                                      class:
                                                        "block px-4 py-2 cursor-pointer",
                                                      role: "menuitem",
                                                    },
                                                    [
                                                      P.activePath &&
                                                      b.$route.path.startsWith(
                                                        P.activePath,
                                                      )
                                                        ? (O(),
                                                          D(
                                                            "b",
                                                            m0,
                                                            Ce(P.label),
                                                            1,
                                                          ))
                                                        : !P.activePath &&
                                                            b.$route.path ===
                                                              P.path
                                                          ? (O(),
                                                            D(
                                                              "b",
                                                              b0,
                                                              Ce(P.label),
                                                              1,
                                                            ))
                                                          : (O(),
                                                            D(
                                                              "span",
                                                              v0,
                                                              Ce(P.label),
                                                              1,
                                                            )),
                                                    ],
                                                    8,
                                                    g0,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["class"],
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          ),
                        ),
                        64,
                      )),
                    ]),
                    p("div", w0, [
                      p("a", x0, [
                        p(
                          "button",
                          {
                            class: k([
                              h.value,
                              "py-2 px-3 rounded text-white flex items-center gap-2 transition-colors duration-300",
                            ]),
                            "aria-label": "Visit GitHub profile",
                          },
                          [
                            (O(),
                            D("svg", S0, [
                              p("path", { d: U(Ou).path }, null, 8, E0),
                            ])),
                            w[4] || (w[4] = ce(" GitHub ", -1)),
                          ],
                          2,
                        ),
                      ]),
                      p(
                        "a",
                        {
                          onClick:
                            w[0] || (w[0] = (E) => b.$router.push("/contact")),
                        },
                        [
                          p(
                            "button",
                            {
                              class: k([
                                g.value,
                                "py-2 px-3 rounded text-white transition-colors duration-300",
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
              p(
                "div",
                {
                  id: "headerRightColumn",
                  class: k([
                    "rounded relative lg:px-3 lg:pt-3 flex items-center",
                    o.value,
                  ]),
                },
                [
                  p("div", C0, [
                    p("div", T0, [
                      te(
                        U(Di),
                        { class: k(a.value), "stroke-width": "3" },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "p",
                        {
                          class: k([
                            u.value,
                            "font-monospace font-bold cursor-pointer transition-colors duration-300",
                          ]),
                          onClick: x,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                  ]),
                  te(
                    U(Xh),
                    {
                      class: k(["block lg:hidden", d.value]),
                      "stroke-width": "2",
                      onClick: w[1] || (w[1] = (E) => y()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  te(U(Er), null, {
                    default: me(() => [
                      te(
                        U(uo),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
                          class: k(["rounded mt-2 lg:mt-0 px-2", o.value]),
                        },
                        {
                          default: me(() => [
                            n.value == 5
                              ? (O(),
                                oe(U(t0), {
                                  key: 0,
                                  class:
                                    "text-slate-900 hover:text-emerald-500 transition-colors duration-300",
                                }))
                              : n.value == 4
                                ? (O(),
                                  oe(U(qh), {
                                    key: 1,
                                    class:
                                      "text-slate-800 hover:text-emerald-500 transition-colors duration-300",
                                  }))
                                : n.value == 3
                                  ? (O(),
                                    oe(U(Wh), {
                                      key: 2,
                                      class:
                                        "text-slate-300 hover:text-orange-200 transition-colors duration-300",
                                    }))
                                  : n.value == 2
                                    ? (O(),
                                      oe(U(Zh), {
                                        key: 3,
                                        class:
                                          "text-slate-200 hover:text-orange-500 transition-colors duration-300",
                                      }))
                                    : (O(),
                                      oe(U(Jh), {
                                        key: 4,
                                        class:
                                          "text-slate-400 hover:text-orange-400 transition-colors duration-300",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      te(
                        U(co),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: me(() => [
                            p("div", k0, [
                              p("div", P0, [
                                Ma(
                                  p(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        w[2] || (w[2] = (E) => (n.value = E)),
                                      onInput: v,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[jf, n.value]],
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
              w[6] || (w[6] = p("div", { class: "w-1/12" }, null, -1)),
            ]),
            p(
              "div",
              {
                id: "mobileMenu",
                class: k([
                  "w-full fixed h-full p-4 top-0 z-50 overflow-hidden hidden",
                  o.value,
                ]),
              },
              [
                p("div", I0, [
                  p("div", M0, [
                    te(
                      U(Di),
                      { class: k(a.value), "stroke-width": "3" },
                      null,
                      8,
                      ["class"],
                    ),
                    p(
                      "p",
                      {
                        class: k([
                          u.value,
                          "font-monospace font-bold cursor-pointer transition-colors duration-300",
                        ]),
                        onClick: x,
                        id: "logoText",
                      },
                      " josephhansen.dev ",
                      2,
                    ),
                  ]),
                  te(
                    U(Pr),
                    {
                      class: k(u.value),
                      onClick: w[3] || (w[3] = (E) => y()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                p(
                  "ul",
                  { class: k(["mt-4", d.value]) },
                  [
                    (O(),
                    D(
                      pe,
                      null,
                      Ve(
                        r,
                        (E) => (
                          O(),
                          D(
                            pe,
                            { key: E.id },
                            [
                              E.subsections
                                ? (O(),
                                  D(
                                    pe,
                                    { key: 0 },
                                    [
                                      p("li", $0, Ce(E.label), 1),
                                      p("ul", A0, [
                                        (O(!0),
                                        D(
                                          pe,
                                          null,
                                          Ve(
                                            E.subsections,
                                            (P) => (
                                              O(),
                                              oe(
                                                U(fo),
                                                { key: P.id },
                                                {
                                                  default: me(() => [
                                                    te(
                                                      U(ho),
                                                      {
                                                        class:
                                                          "py-1 px-3 rounded opacity-75 text-sm flex justify-between items-center w-full",
                                                      },
                                                      {
                                                        default: me(
                                                          ({ open: C }) => [
                                                            p(
                                                              "span",
                                                              null,
                                                              Ce(P.label),
                                                              1,
                                                            ),
                                                            C
                                                              ? (O(),
                                                                oe(U(Vh), {
                                                                  key: 0,
                                                                  class:
                                                                    "w-4 h-4",
                                                                }))
                                                              : (O(),
                                                                oe(U(_o), {
                                                                  key: 1,
                                                                  class:
                                                                    "w-4 h-4",
                                                                })),
                                                          ],
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024,
                                                    ),
                                                    te(
                                                      U(po),
                                                      null,
                                                      {
                                                        default: me(() => [
                                                          p("ul", O0, [
                                                            (O(!0),
                                                            D(
                                                              pe,
                                                              null,
                                                              Ve(
                                                                P.items,
                                                                (C) => (
                                                                  O(),
                                                                  D(
                                                                    "a",
                                                                    {
                                                                      key: C.path,
                                                                      onClick: (
                                                                        A,
                                                                      ) =>
                                                                        m(
                                                                          C.path,
                                                                        ),
                                                                    },
                                                                    [
                                                                      p(
                                                                        "li",
                                                                        j0,
                                                                        Ce(
                                                                          C.label,
                                                                        ),
                                                                        1,
                                                                      ),
                                                                    ],
                                                                    8,
                                                                    _0,
                                                                  )
                                                                ),
                                                              ),
                                                              128,
                                                            )),
                                                          ]),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1024,
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
                                    ],
                                    64,
                                  ))
                                : (O(),
                                  D(
                                    pe,
                                    { key: 1 },
                                    [
                                      E.id === "web"
                                        ? (O(),
                                          oe(
                                            U(fo),
                                            { key: 0 },
                                            {
                                              default: me(() => [
                                                te(
                                                  U(ho),
                                                  {
                                                    class:
                                                      "py-2 px-3 rounded opacity-75 font-semibold",
                                                  },
                                                  {
                                                    default: me(() => [
                                                      ce(Ce(E.label), 1),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024,
                                                ),
                                                te(
                                                  U(po),
                                                  null,
                                                  {
                                                    default: me(() => [
                                                      p("ul", L0, [
                                                        (O(!0),
                                                        D(
                                                          pe,
                                                          null,
                                                          Ve(
                                                            E.items,
                                                            (P) => (
                                                              O(),
                                                              D(
                                                                "a",
                                                                {
                                                                  key: P.path,
                                                                  onClick: (
                                                                    C,
                                                                  ) =>
                                                                    m(P.path),
                                                                },
                                                                [
                                                                  p(
                                                                    "li",
                                                                    N0,
                                                                    Ce(P.label),
                                                                    1,
                                                                  ),
                                                                ],
                                                                8,
                                                                B0,
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                      ]),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024,
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024,
                                          ))
                                        : (O(),
                                          D(
                                            pe,
                                            { key: 1 },
                                            [
                                              p("li", R0, Ce(E.label), 1),
                                              p("ul", z0, [
                                                (O(!0),
                                                D(
                                                  pe,
                                                  null,
                                                  Ve(
                                                    E.items,
                                                    (P) => (
                                                      O(),
                                                      D(
                                                        "a",
                                                        {
                                                          key: P.path,
                                                          onClick: (C) =>
                                                            m(P.path),
                                                        },
                                                        [
                                                          p(
                                                            "li",
                                                            F0,
                                                            Ce(P.label),
                                                            1,
                                                          ),
                                                        ],
                                                        8,
                                                        D0,
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                              ]),
                                            ],
                                            64,
                                          )),
                                    ],
                                    64,
                                  )),
                            ],
                            64,
                          )
                        ),
                      ),
                      64,
                    )),
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
  G0 = { class: "w-full px-4 sm:px-6 lg:px-8" },
  V0 = { class: "text-sm text-center" },
  W0 = {
    __name: "Footer",
    props: { brightness: { type: Number, required: !0 } },
    setup(e) {
      const t = F(new Date().getFullYear())
      return (n, s) => (
        O(),
        D("footer", G0, [
          p(
            "div",
            {
              class: k([
                "w-full md:w-10/12 sm:w-12/12 mx-auto rounded p-3",
                {
                  "bg-slate-200": e.brightness == 5,
                  "bg-slate-300": e.brightness == 4,
                  "bg-slate-600": e.brightness == 3,
                  "bg-slate-800": e.brightness == 2,
                  "bg-slate-900": e.brightness == 1,
                },
              ]),
            },
            [
              p(
                "div",
                {
                  class: k([
                    "flex flex-col items-center justify-center w-full p-8",
                    {
                      "text-slate-900": e.brightness >= 4,
                      "text-slate-200": e.brightness <= 3,
                    },
                  ]),
                },
                [
                  p("p", V0, [
                    ce(
                      " © " +
                        Ce(t.value) +
                        " Joseph Hansen. All rights reserved. All writing is my own words, no generative AI used. This content, unless otherwise noted, is licensed as ",
                      1,
                    ),
                    s[0] ||
                      (s[0] = p(
                        "a",
                        {
                          href: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
                          "aria-label":
                            "Creative Commons License- CC BY-NC-SA 4.0",
                        },
                        "CC BY-NC-SA 4.0",
                        -1,
                      )),
                    s[1] || (s[1] = ce(". Contact ", -1)),
                    s[2] ||
                      (s[2] = p(
                        "a",
                        { href: "mailto:joseph@josephhansen.dev" },
                        "joseph@josephhansen.dev",
                        -1,
                      )),
                    s[3] || (s[3] = ce(" for inquiries. ", -1)),
                  ]),
                ],
                2,
              ),
            ],
            2,
          ),
        ])
      )
    },
  },
  q0 = { class: "flex justify-center py-5 flex-col" },
  U0 = { class: "inline-block relative" },
  K0 = { class: "font-semibold text-center px-1" },
  Y0 = { class: "flex py-5 justify-center gap-3 w-full" },
  X0 = { href: "/web-portfolio" },
  J0 = { href: "/web-pricing" },
  Z0 = {
    directives: {
      typewriter: {
        beforeUpdate(e, t) {
          if (t.oldValue !== t.value) {
            let n = t.value,
              s = Math.random() * 100 + 25
            ;(e.textContent = ""),
              n.split("").forEach((i, r) => {
                setTimeout(() => {
                  e.textContent += i
                }, s * r)
              })
          }
        },
      },
    },
  },
  Q0 = Object.assign(Z0, {
    __name: "WebServicesHero",
    props: { brightness: Number },
    setup(e) {
      const t = F([
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
        "SEO-ready",
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
      let n = F(0),
        s = F(!1)
      qe(() => {
        ;(t.value = t.value.sort(() => Math.random() - 0.5)),
          setInterval(() => {
            s.value ||
              ((s.value = !0), (n.value = (n.value + 1) % t.value.length))
          }, 4e3)
        const r = () => {
            s.value = !1
          },
          o = () => {
            s.value = !0
          }
        window.addEventListener("mousedown", r),
          window.addEventListener("mouseup", o),
          Zt(() => {
            window.removeEventListener("mousedown", r),
              window.removeEventListener("mouseup", o)
          })
      }),
        Wr(() => {
          s.value = !1
        })
      const i = Z(() => t.value[n.value])
      return (r, o) => {
        const l = Ed("typewriter")
        return (
          O(),
          D("div", q0, [
            p(
              "h1",
              {
                class: k([
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
                o[0] || (o[0] = ce(" I make ", -1)),
                p("div", U0, [
                  Ma((O(), D("span", K0, [ce(Ce(i.value), 1)])), [
                    [l, i.value],
                  ]),
                  p(
                    "div",
                    {
                      class: k([
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
                o[1] || (o[1] = ce(" websites. ", -1)),
              ],
              2,
            ),
            p(
              "p",
              {
                class: k([
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
            p("div", Y0, [
              p("a", X0, [
                p(
                  "button",
                  {
                    "aria-label": "View my portfolio",
                    class: k([
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
              p("a", J0, [
                p(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: k([
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
function Lo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function ul(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {})
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Lo(t[s]) && Lo(e[s]) && Object.keys(t[s]).length > 0 && ul(e[s], t[s])
    })
}
const _u = {
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
function Bt() {
  const e = typeof document < "u" ? document : {}
  return ul(e, _u), e
}
const eg = {
  document: _u,
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
function it() {
  const e = typeof window < "u" ? window : {}
  return ul(e, eg), e
}
function tg(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function ng(e) {
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
function ju(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function ti() {
  return Date.now()
}
function sg(e) {
  const t = it()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function ig(e, t) {
  t === void 0 && (t = "x")
  const n = it()
  let s, i, r
  const o = sg(e)
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
          ? (i = parseFloat(s[12]))
          : (i = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
          ? (i = parseFloat(s[13]))
          : (i = parseFloat(s[5]))),
    i || 0
  )
}
function Os(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  )
}
function rg(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function dt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (s != null && !rg(s)) {
      const i = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0)
      for (let r = 0, o = i.length; r < o; r += 1) {
        const l = i[r],
          a = Object.getOwnPropertyDescriptor(s, l)
        a !== void 0 &&
          a.enumerable &&
          (Os(e[l]) && Os(s[l])
            ? s[l].__swiper__
              ? (e[l] = s[l])
              : dt(e[l], s[l])
            : !Os(e[l]) && Os(s[l])
              ? ((e[l] = {}), s[l].__swiper__ ? (e[l] = s[l]) : dt(e[l], s[l]))
              : (e[l] = s[l]))
      }
    }
  }
  return e
}
function _s(e, t, n) {
  e.style.setProperty(t, n)
}
function Lu(e) {
  let { swiper: t, targetPosition: n, side: s } = e
  const i = it(),
    r = -t.translate
  let o = null,
    l
  const a = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID)
  const u = n > r ? "next" : "prev",
    c = (f, h) => (u === "next" && f >= h) || (u === "prev" && f <= h),
    d = () => {
      ;(l = new Date().getTime()), o === null && (o = l)
      const f = Math.max(Math.min((l - o) / a, 1), 0),
        h = 0.5 - Math.cos(f * Math.PI) / 2
      let g = r + h * (n - r)
      if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [s]: g }), c(g, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: g })
          }),
          i.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = i.requestAnimationFrame(d)
    }
  d()
}
function jt(e, t) {
  t === void 0 && (t = "")
  const n = it(),
    s = [...e.children]
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      s.push(...e.assignedElements()),
    t ? s.filter((i) => i.matches(t)) : s
  )
}
function lg(e, t) {
  const n = [t]
  for (; n.length > 0; ) {
    const s = n.shift()
    if (e === s) return !0
    n.push(
      ...s.children,
      ...(s.shadowRoot ? s.shadowRoot.children : []),
      ...(s.assignedElements ? s.assignedElements() : []),
    )
  }
}
function og(e, t) {
  const n = it()
  let s = t.contains(e)
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = lg(e, t))),
    s
  )
}
function ni(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function si(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : tg(t))), n
}
function ag(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function ug(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function an(e, t) {
  return it().getComputedStyle(e, null).getPropertyValue(t)
}
function ii(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function Bu(e, t) {
  const n = []
  let s = e.parentElement
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement)
  return n
}
function Ir(e, t, n) {
  const s = it()
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
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
  )
}
function We(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
function ri(e, t) {
  t === void 0 && (t = ""),
    typeof trustedTypes < "u"
      ? (e.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (n) => n })
          .createHTML(t))
      : (e.innerHTML = t)
}
let Fi
function cg() {
  const e = it(),
    t = Bt()
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
function Nu() {
  return Fi || (Fi = cg()), Fi
}
let Hi
function dg(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = Nu(),
    s = it(),
    i = s.navigator.platform,
    r = t || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = r.match(/(iPad).*OS\s([\d_]+)/)
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === "Win32"
  let g = i === "MacIntel"
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
      g &&
      n.touch &&
      v.indexOf(`${l}x${a}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !h && ((o.os = "android"), (o.android = !0)),
    (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  )
}
function Ru(e) {
  return e === void 0 && (e = {}), Hi || (Hi = dg(e)), Hi
}
let Gi
function fg() {
  const e = it(),
    t = Ru()
  let n = !1
  function s() {
    const l = e.navigator.userAgent.toLowerCase()
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    )
  }
  if (s()) {
    const l = String(e.navigator.userAgent)
    if (l.includes("Version/")) {
      const [a, u] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c))
      n = a < 16 || (a === 16 && u < 2)
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    r = s(),
    o = r || (i && t.ios)
  return { isSafari: n || r, needPerspectiveFix: n, need3dFix: o, isWebView: i }
}
function zu() {
  return Gi || (Gi = fg()), Gi
}
function pg(e) {
  let { swiper: t, on: n, emit: s } = e
  const i = it()
  let r = null,
    o = null
  const l = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: f, height: h } = t
            let g = f,
              v = h
            d.forEach((x) => {
              let { contentBoxSize: y, contentRect: m, target: b } = x
              ;(b && b !== t.el) ||
                ((g = m ? m.width : (y[0] || y).inlineSize),
                (v = m ? m.height : (y[0] || y).blockSize))
            }),
              (g !== f || v !== h) && l()
          })
        })),
        r.observe(t.el))
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null))
    },
    c = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange")
    }
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a()
      return
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c)
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c)
    })
}
function hg(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e
  const r = [],
    o = it(),
    l = function (c, d) {
      d === void 0 && (d = {})
      const f = o.MutationObserver || o.WebkitMutationObserver,
        h = new f((g) => {
          if (t.__preventObserver__) return
          if (g.length === 1) {
            i("observerUpdate", g[0])
            return
          }
          const v = function () {
            i("observerUpdate", g[0])
          }
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0)
        })
      h.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        r.push(h)
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Bu(t.hostEl)
          for (let d = 0; d < c.length; d += 1) l(c[d])
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 })
      }
    },
    u = () => {
      r.forEach((c) => {
        c.disconnect()
      }),
        r.splice(0, r.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", u)
}
var gg = {
  on(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    const i = n ? "unshift" : "push"
    return (
      e.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](t)
      }),
      s
    )
  },
  once(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    function i() {
      s.off(e, i), i.__emitterProxy && delete i.__emitterProxy
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l]
      t.apply(s, o)
    }
    return (i.__emitterProxy = t), s.on(e, i, n)
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
              n.eventsListeners[s].forEach((i, r) => {
                ;(i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(r, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, s
    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
      r[o] = arguments[o]
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(s, [a, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(s, n)
            })
      }),
      e
    )
  },
}
function mg() {
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
        parseInt(an(s, "padding-left") || 0, 10) -
        parseInt(an(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(an(s, "padding-top") || 0, 10) -
        parseInt(an(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function bg() {
  const e = this
  function t($, j) {
    return parseFloat($.getPropertyValue(e.getDirectionLabel(j)) || 0)
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: i, size: r, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = jt(i, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : c.length
  let f = []
  const h = [],
    g = []
  let v = n.slidesOffsetBefore
  typeof v == "function" && (v = n.slidesOffsetBefore.call(e))
  let x = n.slidesOffsetAfter
  typeof x == "function" && (x = n.slidesOffsetAfter.call(e))
  const y = e.snapGrid.length,
    m = e.slidesGrid.length
  let b = n.spaceBetween,
    w = -v,
    E = 0,
    P = 0
  if (typeof r > "u") return
  typeof b == "string" && b.indexOf("%") >= 0
    ? (b = (parseFloat(b.replace("%", "")) / 100) * r)
    : typeof b == "string" && (b = parseFloat(b)),
    (e.virtualSize = -b),
    c.forEach(($) => {
      o ? ($.style.marginLeft = "") : ($.style.marginRight = ""),
        ($.style.marginBottom = ""),
        ($.style.marginTop = "")
    }),
    n.centeredSlides &&
      n.cssMode &&
      (_s(s, "--swiper-centered-offset-before", ""),
      _s(s, "--swiper-centered-offset-after", ""))
  const C = n.grid && n.grid.rows > 1 && e.grid
  C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
  let A
  const I =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      ($) => typeof n.breakpoints[$].slidesPerView < "u",
    ).length > 0
  for (let $ = 0; $ < d; $ += 1) {
    A = 0
    let j
    if (
      (c[$] && (j = c[$]),
      C && e.grid.updateSlide($, j, c),
      !(c[$] && an(j, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        I && (c[$].style[e.getDirectionLabel("width")] = "")
        const G = getComputedStyle(j),
          q = j.style.transform,
          fe = j.style.webkitTransform
        if (
          (q && (j.style.transform = "none"),
          fe && (j.style.webkitTransform = "none"),
          n.roundLengths)
        )
          A = e.isHorizontal() ? Ir(j, "width") : Ir(j, "height")
        else {
          const ge = t(G, "width"),
            _ = t(G, "padding-left"),
            R = t(G, "padding-right"),
            L = t(G, "margin-left"),
            xe = t(G, "margin-right"),
            be = G.getPropertyValue("box-sizing")
          if (be && be === "border-box") A = ge + L + xe
          else {
            const { clientWidth: je, offsetWidth: Le } = j
            A = ge + _ + R + L + xe + (Le - je)
          }
        }
        q && (j.style.transform = q),
          fe && (j.style.webkitTransform = fe),
          n.roundLengths && (A = Math.floor(A))
      } else
        (A = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (A = Math.floor(A)),
          c[$] && (c[$].style[e.getDirectionLabel("width")] = `${A}px`)
      c[$] && (c[$].swiperSlideSize = A),
        g.push(A),
        n.centeredSlides
          ? ((w = w + A / 2 + E / 2 + b),
            E === 0 && $ !== 0 && (w = w - r / 2 - b),
            $ === 0 && (w = w - r / 2 - b),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            P % n.slidesPerGroup === 0 && f.push(w),
            h.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (P - Math.min(e.params.slidesPerGroupSkip, P)) %
              e.params.slidesPerGroup ===
              0 && f.push(w),
            h.push(w),
            (w = w + A + b)),
        (e.virtualSize += A + b),
        (E = A),
        (P += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, r) + x),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + b}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
    C && e.grid.updateWrapperSize(A, f),
    !n.centeredSlides)
  ) {
    const $ = []
    for (let j = 0; j < f.length; j += 1) {
      let G = f[j]
      n.roundLengths && (G = Math.floor(G)),
        f[j] <= e.virtualSize - r && $.push(G)
    }
    ;(f = $),
      Math.floor(e.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - r)
  }
  if (a && n.loop) {
    const $ = g[0] + b
    if (n.slidesPerGroup > 1) {
      const j = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        G = $ * n.slidesPerGroup
      for (let q = 0; q < j; q += 1) f.push(f[f.length - 1] + G)
    }
    for (let j = 0; j < e.virtual.slidesBefore + e.virtual.slidesAfter; j += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + $),
        h.push(h[h.length - 1] + $),
        (e.virtualSize += $)
  }
  if ((f.length === 0 && (f = [0]), b !== 0)) {
    const $ =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight")
    c.filter((j, G) =>
      !n.cssMode || n.loop ? !0 : G !== c.length - 1,
    ).forEach((j) => {
      j.style[$] = `${b}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let $ = 0
    g.forEach((G) => {
      $ += G + (b || 0)
    }),
      ($ -= b)
    const j = $ > r ? $ - r : 0
    f = f.map((G) => (G <= 0 ? -v : G > j ? j + x : G))
  }
  if (n.centerInsufficientSlides) {
    let $ = 0
    g.forEach((G) => {
      $ += G + (b || 0)
    }),
      ($ -= b)
    const j = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if ($ + j < r) {
      const G = (r - $ - j) / 2
      f.forEach((q, fe) => {
        f[fe] = q - G
      }),
        h.forEach((q, fe) => {
          h[fe] = q + G
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: h,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    _s(s, "--swiper-centered-offset-before", `${-f[0]}px`),
      _s(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`,
      )
    const $ = -e.snapGrid[0],
      j = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((G) => G + $)),
      (e.slidesGrid = e.slidesGrid.map((G) => G + j))
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    f.length !== y &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== m && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const $ = `${n.containerModifierClass}backface-hidden`,
      j = e.el.classList.contains($)
    d <= n.maxBackfaceHiddenSlides
      ? j || e.el.classList.add($)
      : j && e.el.classList.remove($)
  }
}
function vg(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled
  let i = 0,
    r
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const o = (l) => (s ? t.slides[t.getSlideIndexByData(l)] : t.slides[l])
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l)
      })
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const l = t.activeIndex + r
        if (l > t.slides.length && !s) break
        n.push(o(l))
      }
  else n.push(o(t.activeIndex))
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const l = n[r].offsetHeight
      i = l > i ? l : i
    }
  ;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function yg() {
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
const Bo = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function wg(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = t
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset()
  let o = -e
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let l = n.spaceBetween
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l))
  for (let a = 0; a < s.length; a += 1) {
    const u = s[a]
    let c = u.swiperSlideOffset
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset)
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      f =
        (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      h = -(o - c),
      g = h + t.slidesSizesGrid[a],
      v = h >= 0 && h <= t.size - t.slidesSizesGrid[a],
      x =
        (h >= 0 && h < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (h <= 0 && g >= t.size)
    x && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      Bo(u, x, n.slideVisibleClass),
      Bo(u, v, n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -f : f)
  }
}
function xg(e) {
  const t = this
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * c) || 0
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate()
  let { progress: i, isBeginning: r, isEnd: o, progressLoop: l } = t
  const a = r,
    u = o
  if (s === 0) (i = 0), (r = !0), (o = !0)
  else {
    i = (e - t.minTranslate()) / s
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1
    ;(r = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1)
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      h = t.slidesGrid[d],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(e)
    v >= f ? (l = (v - f) / g) : (l = (v + g - h) / g), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: r, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((a && !r) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", i)
}
const Vi = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function Sg() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: i } = e,
    r = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (d) => jt(s, `.${n.slideClass}${d}, swiper-slide${d}`)[0]
  let a, u, c
  if (r)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${d}"]`))
    } else a = l(`[data-swiper-slide-index="${i}"]`)
  else
    o
      ? ((a = t.find((d) => d.column === i)),
        (c = t.find((d) => d.column === i + 1)),
        (u = t.find((d) => d.column === i - 1)))
      : (a = t[i])
  a &&
    (o ||
      ((c = ug(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = ag(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      Vi(d, d === a, n.slideActiveClass),
        Vi(d, d === c, n.slideNextClass),
        Vi(d, d === u, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Gs = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(n())
    if (s) {
      let i = s.querySelector(`.${e.params.lazyPreloaderClass}`)
      !i &&
        e.isElement &&
        (s.shadowRoot
          ? (i = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((i = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                i && i.remove())
            })),
        i && i.remove()
    }
  },
  Wi = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  Mr = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        l = [o - t]
      l.push(...Array.from({ length: t }).map((a, u) => o + s + u)),
        e.slides.forEach((a, u) => {
          l.includes(a.column) && Wi(e, u)
        })
      return
    }
    const r = i + s - 1
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= r + t; o += 1) {
        const l = ((o % n) + n) % n
        ;(l < i || l > r) && Wi(e, l)
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(r + t, n - 1); o += 1)
        o !== i && (o > r || o < i) && Wi(e, o)
  }
function Eg(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate
  let i
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (i = r)
        : s >= t[r] && s < t[r + 1] && (i = r + 1)
      : s >= t[r] && (i = r)
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i
}
function Cg(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: o, snapIndex: l } = t
  let a = e,
    u
  const c = (h) => {
    let g = h - t.virtual.slidesBefore
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    )
  }
  if ((typeof a > "u" && (a = Eg(t)), s.indexOf(n) >= 0)) u = s.indexOf(n)
  else {
    const h = Math.min(i.slidesPerGroupSkip, a)
    u = h + Math.floor((a - h) / i.slidesPerGroup)
  }
  if ((u >= s.length && (u = s.length - 1), a === r && !t.params.loop)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"))
    return
  }
  if (a === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a)
    return
  }
  const d = t.grid && i.grid && i.grid.rows > 1
  let f
  if (t.virtual && i.virtual.enabled && i.loop) f = c(a)
  else if (d) {
    const h = t.slides.find((v) => v.column === a)
    let g = parseInt(h.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(h), 0)),
      (f = Math.floor(g / i.grid.rows))
  } else if (t.slides[a]) {
    const h = t.slides[a].getAttribute("data-swiper-slide-index")
    h ? (f = parseInt(h, 10)) : (f = a)
  } else f = a
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: r,
    activeIndex: a,
  }),
    t.initialized && Mr(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit("realIndexChange"), t.emit("slideChange"))
}
function Tg(e, t) {
  const n = this,
    s = n.params
  let i = e.closest(`.${s.slideClass}, swiper-slide`)
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (i = l)
    })
  let r = !1,
    o
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        ;(r = !0), (o = l)
        break
      }
  }
  if (i && r)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = o)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var kg = {
  updateSize: mg,
  updateSlides: bg,
  updateAutoHeight: vg,
  updateSlidesOffset: yg,
  updateSlidesProgress: wg,
  updateProgress: xg,
  updateSlidesClasses: Sg,
  updateActiveIndex: Cg,
  updateClickedSlide: Tg,
}
function Pg(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = t
  if (n.virtualTranslate) return s ? -i : i
  if (n.cssMode) return i
  let o = ig(r, e)
  return (o += t.cssOverflowAdjustment()), s && (o = -o), o || 0
}
function Ig(e, t) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: o } = n
  let l = 0,
    a = 0
  const u = 0
  n.isHorizontal() ? (l = s ? -e : e) : (a = e),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`))
  let c
  const d = n.maxTranslate() - n.minTranslate()
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function Mg() {
  return -this.snapGrid[0]
}
function $g() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Ag(e, t, n, s, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0)
  const r = this,
    { params: o, wrapperEl: l } = r
  if (r.animating && o.preventInteractionOnTransition) return !1
  const a = r.minTranslate(),
    u = r.maxTranslate()
  let c
  if (
    (s && e > a ? (c = a) : s && e < u ? (c = u) : (c = e),
    r.updateProgress(c),
    o.cssMode)
  ) {
    const d = r.isHorizontal()
    if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c
    else {
      if (!r.support.smoothScroll)
        return (
          Lu({ swiper: r, targetPosition: -c, side: d ? "left" : "top" }), !0
        )
      l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" })
    }
    return !0
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(c),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (f) {
              !r ||
                r.destroyed ||
                (f.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  (r.animating = !1),
                  n && r.emit("transitionEnd")))
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  )
}
var Og = {
  getTranslate: Pg,
  setTranslate: Ig,
  minTranslate: Mg,
  maxTranslate: $g,
  translateTo: Ag,
}
function _g(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function Du(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: i } = e
  const { activeIndex: r, previousIndex: o } = t
  let l = s
  l || (r > o ? (l = "next") : r < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && l === "reset"
      ? t.emit(`slideResetTransition${i}`)
      : n &&
        r !== o &&
        (t.emit(`slideChangeTransition${i}`),
        l === "next"
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`))
}
function jg(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Du({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function Lg(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  ;(n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Du({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var Bg = { setTransition: _g, transitionStart: jg, transitionEnd: Lg }
function Ng(e, t, n, s, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const r = this
  let o = e
  o < 0 && (o = 0)
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: h,
    enabled: g,
  } = r
  if (
    (!g && !s && !i) ||
    r.destroyed ||
    (r.animating && l.preventInteractionOnTransition)
  )
    return !1
  typeof t > "u" && (t = r.params.speed)
  const v = Math.min(r.params.slidesPerGroupSkip, o)
  let x = v + Math.floor((o - v) / r.params.slidesPerGroup)
  x >= a.length && (x = a.length - 1)
  const y = -a[x]
  if (l.normalizeSlideIndex)
    for (let C = 0; C < u.length; C += 1) {
      const A = -Math.floor(y * 100),
        I = Math.floor(u[C] * 100),
        $ = Math.floor(u[C + 1] * 100)
      typeof u[C + 1] < "u"
        ? A >= I && A < $ - ($ - I) / 2
          ? (o = C)
          : A >= I && A < $ && (o = C + 1)
        : A >= I && (o = C)
    }
  if (
    r.initialized &&
    o !== d &&
    ((!r.allowSlideNext &&
      (f
        ? y > r.translate && y > r.minTranslate()
        : y < r.translate && y < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        y > r.translate &&
        y > r.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1
  o !== (c || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(y)
  let m
  o > d ? (m = "next") : o < d ? (m = "prev") : (m = "reset")
  const b = r.virtual && r.params.virtual.enabled
  if (!(b && i) && ((f && -y === r.translate) || (!f && y === r.translate)))
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== "slide" && r.setTranslate(y),
      m !== "reset" && (r.transitionStart(n, m), r.transitionEnd(n, m)),
      !1
    )
  if (l.cssMode) {
    const C = r.isHorizontal(),
      A = f ? y : -y
    if (t === 0)
      b &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[C ? "scrollLeft" : "scrollTop"] = A
            }))
          : (h[C ? "scrollLeft" : "scrollTop"] = A),
        b &&
          requestAnimationFrame(() => {
            ;(r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1)
          })
    else {
      if (!r.support.smoothScroll)
        return (
          Lu({ swiper: r, targetPosition: A, side: C ? "left" : "top" }), !0
        )
      h.scrollTo({ [C ? "left" : "top"]: A, behavior: "smooth" })
    }
    return !0
  }
  const P = zu().isSafari
  return (
    b && !i && P && r.isElement && r.virtual.update(!1, !1, o),
    r.setTransition(t),
    r.setTranslate(y),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(n, m),
    t === 0
      ? r.transitionEnd(n, m)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (A) {
            !r ||
              r.destroyed ||
              (A.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, m)))
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function Rg(e, t, n, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const i = this
  if (i.destroyed) return
  typeof t > "u" && (t = i.params.speed)
  const r = i.grid && i.params.grid && i.params.grid.rows > 1
  let o = e
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore
    else {
      let l
      if (r) {
        const f = o * i.params.grid.rows
        l = i.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === f,
        ).column
      } else l = i.getSlideIndexByData(o)
      const a = r
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params
      let c = i.params.slidesPerView
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1))
      let d = a - l < c
      if (
        (u && (d = d || l < Math.ceil(c / 2)),
        s && u && i.params.slidesPerView !== "auto" && !r && (d = !1),
        d)
      ) {
        const f = u
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
            ? "next"
            : "prev"
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? l + 1 : l - a + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        })
      }
      if (r) {
        const f = o * i.params.grid.rows
        o = i.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === f,
        ).column
      } else o = i.getSlideIndexByData(o)
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, s)
    }),
    i
  )
}
function zg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    { enabled: i, params: r, animating: o } = s
  if (!i || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  let l = r.slidesPerGroup
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1))
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    u = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, e, t, n)
        }),
        !0
      )
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + a, e, t, n)
}
function Dg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = s
  if (!a || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  const c = s.virtual && i.virtual.enabled
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const d = l ? s.translate : -s.translate
  function f(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
  }
  const h = f(d),
    g = r.map((m) => f(m)),
    v = i.freeMode && i.freeMode.enabled
  let x = r[g.indexOf(h) - 1]
  if (typeof x > "u" && (i.cssMode || v)) {
    let m
    r.forEach((b, w) => {
      h >= b && (m = w)
    }),
      typeof m < "u" && (x = v ? r[m] : r[m > 0 ? m - 1 : m])
  }
  let y = 0
  if (
    (typeof x < "u" &&
      ((y = o.indexOf(x)),
      y < 0 && (y = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((y = y - s.slidesPerViewDynamic("previous", !0) + 1),
        (y = Math.max(y, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const m =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(m, e, t, n)
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(y, e, t, n)
      }),
      !0
    )
  return s.slideTo(y, e, t, n)
}
function Fg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n)
    )
}
function Hg(e, t, n, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5)
  const i = this
  if (i.destroyed) return
  typeof e > "u" && (e = i.params.speed)
  let r = i.activeIndex
  const o = Math.min(i.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate
  if (a >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      c = i.snapGrid[l + 1]
    a - u > (c - u) * s && (r += i.params.slidesPerGroup)
  } else {
    const u = i.snapGrid[l - 1],
      c = i.snapGrid[l]
    a - u <= (c - u) * s && (r -= i.params.slidesPerGroup)
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, e, t, n)
  )
}
function Gg() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView
  let i = e.getSlideIndexWhenGrid(e.clickedIndex),
    r
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
    l = e.grid && e.params.grid && e.params.grid.rows > 1
  if (t.loop) {
    if (e.animating) return
    ;(r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? e.slideToLoop(r)
        : i >
            (l
              ? (e.slides.length - s) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - s)
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              jt(n, `${o}[data-swiper-slide-index="${r}"]`)[0],
            )),
            ju(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
  } else e.slideTo(i)
}
var Vg = {
  slideTo: Ng,
  slideToLoop: Rg,
  slideNext: zg,
  slidePrev: Dg,
  slideReset: Fg,
  slideToClosest: Hg,
  slideToClickedSlide: Gg,
}
function Wg(e, t) {
  const n = this,
    { params: s, slidesEl: i } = n
  if (!s.loop || (n.virtual && n.params.virtual.enabled)) return
  const r = () => {
      jt(i, `.${s.slideClass}, swiper-slide`).forEach((h, g) => {
        h.setAttribute("data-swiper-slide-index", g)
      })
    },
    o = () => {
      const f = jt(i, `.${s.slideBlankClass}`)
      f.forEach((h) => {
        h.remove()
      }),
        f.length > 0 && (n.recalcSlides(), n.updateSlides())
    },
    l = n.grid && s.grid && s.grid.rows > 1
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || l) && o()
  const a = s.slidesPerGroup * (l ? s.grid.rows : 1),
    u = n.slides.length % a !== 0,
    c = l && n.slides.length % s.grid.rows !== 0,
    d = (f) => {
      for (let h = 0; h < f; h += 1) {
        const g = n.isElement
          ? si("swiper-slide", [s.slideBlankClass])
          : si("div", [s.slideClass, s.slideBlankClass])
        n.slidesEl.append(g)
      }
    }
  if (u) {
    if (s.loopAddBlankSlides) {
      const f = a - (n.slides.length % a)
      d(f), n.recalcSlides(), n.updateSlides()
    } else
      ni(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    r()
  } else if (c) {
    if (s.loopAddBlankSlides) {
      const f = s.grid.rows - (n.slides.length % s.grid.rows)
      d(f), n.recalcSlides(), n.updateSlides()
    } else
      ni(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    r()
  } else r()
  n.loopFix({
    slideRealIndex: e,
    direction: s.centeredSlides ? void 0 : "next",
    initial: t,
  })
}
function qg(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    initial: o,
    byController: l,
    byMousewheel: a,
  } = e === void 0 ? {} : e
  const u = this
  if (!u.params.loop) return
  u.emit("beforeLoopFix")
  const {
      slides: c,
      allowSlidePrev: d,
      allowSlideNext: f,
      slidesEl: h,
      params: g,
    } = u,
    { centeredSlides: v, initialSlide: x } = g
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && u.snapIndex < g.slidesPerView
          ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
          : u.snapIndex === u.snapGrid.length - 1 &&
            u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = d),
      (u.allowSlideNext = f),
      u.emit("loopFix")
    return
  }
  let y = g.slidesPerView
  y === "auto"
    ? (y = u.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(g.slidesPerView, 10))),
      v && y % 2 === 0 && (y = y + 1))
  const m = g.slidesPerGroupAuto ? y : g.slidesPerGroup
  let b = v ? Math.max(m, Math.ceil(y / 2)) : m
  b % m !== 0 && (b += m - (b % m)),
    (b += g.loopAdditionalSlides),
    (u.loopedSlides = b)
  const w = u.grid && g.grid && g.grid.rows > 1
  c.length < y + b || (u.params.effect === "cards" && c.length < y + b * 2)
    ? ni(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : w &&
      g.grid.fill === "row" &&
      ni(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const E = [],
    P = [],
    C = w ? Math.ceil(c.length / g.grid.rows) : c.length,
    A = o && C - x < y && !v
  let I = A ? x : u.activeIndex
  typeof r > "u"
    ? (r = u.getSlideIndex(
        c.find((_) => _.classList.contains(g.slideActiveClass)),
      ))
    : (I = r)
  const $ = s === "next" || !s,
    j = s === "prev" || !s
  let G = 0,
    q = 0
  const ge = (w ? c[r].column : r) + (v && typeof i > "u" ? -y / 2 + 0.5 : 0)
  if (ge < b) {
    G = Math.max(b - ge, m)
    for (let _ = 0; _ < b - ge; _ += 1) {
      const R = _ - Math.floor(_ / C) * C
      if (w) {
        const L = C - R - 1
        for (let xe = c.length - 1; xe >= 0; xe -= 1)
          c[xe].column === L && E.push(xe)
      } else E.push(C - R - 1)
    }
  } else if (ge + y > C - b) {
    ;(q = Math.max(ge - (C - b * 2), m)), A && (q = Math.max(q, y - C + x + 1))
    for (let _ = 0; _ < q; _ += 1) {
      const R = _ - Math.floor(_ / C) * C
      w
        ? c.forEach((L, xe) => {
            L.column === R && P.push(xe)
          })
        : P.push(R)
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1
    }),
    u.params.effect === "cards" &&
      c.length < y + b * 2 &&
      (P.includes(r) && P.splice(P.indexOf(r), 1),
      E.includes(r) && E.splice(E.indexOf(r), 1)),
    j &&
      E.forEach((_) => {
        ;(c[_].swiperLoopMoveDOM = !0),
          h.prepend(c[_]),
          (c[_].swiperLoopMoveDOM = !1)
      }),
    $ &&
      P.forEach((_) => {
        ;(c[_].swiperLoopMoveDOM = !0),
          h.append(c[_]),
          (c[_].swiperLoopMoveDOM = !1)
      }),
    u.recalcSlides(),
    g.slidesPerView === "auto"
      ? u.updateSlides()
      : w &&
        ((E.length > 0 && j) || (P.length > 0 && $)) &&
        u.slides.forEach((_, R) => {
          u.grid.updateSlide(R, _, u.slides)
        }),
    g.watchSlidesProgress && u.updateSlidesOffset(),
    n)
  ) {
    if (E.length > 0 && j) {
      if (typeof t > "u") {
        const _ = u.slidesGrid[I],
          L = u.slidesGrid[I + G] - _
        a
          ? u.setTranslate(u.translate - L)
          : (u.slideTo(I + Math.ceil(G), 0, !1, !0),
            i &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - L),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - L)))
      } else if (i) {
        const _ = w ? E.length / g.grid.rows : E.length
        u.slideTo(u.activeIndex + _, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate)
      }
    } else if (P.length > 0 && $)
      if (typeof t > "u") {
        const _ = u.slidesGrid[I],
          L = u.slidesGrid[I - q] - _
        a
          ? u.setTranslate(u.translate - L)
          : (u.slideTo(I - q, 0, !1, !0),
            i &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - L),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - L)))
      } else {
        const _ = w ? P.length / g.grid.rows : P.length
        u.slideTo(u.activeIndex - _, 0, !1, !0)
      }
  }
  if (
    ((u.allowSlidePrev = d),
    (u.allowSlideNext = f),
    u.controller && u.controller.control && !l)
  ) {
    const _ = {
      slideRealIndex: t,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    }
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach((R) => {
          !R.destroyed &&
            R.params.loop &&
            R.loopFix({
              ..._,
              slideTo: R.params.slidesPerView === g.slidesPerView ? n : !1,
            })
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ..._,
          slideTo:
            u.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        })
  }
  u.emit("loopFix")
}
function Ug() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const s = []
  e.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex
    s[r] = i
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index")
    }),
    s.forEach((i) => {
      n.append(i)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var Kg = { loopCreate: Wg, loopFix: qg, loopDestroy: Ug }
function Yg(e) {
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
function Xg() {
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
var Jg = { setGrabCursor: Yg, unsetGrabCursor: Xg }
function Zg(e, t) {
  t === void 0 && (t = this)
  function n(s) {
    if (!s || s === Bt() || s === it()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const i = s.closest(e)
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host)
  }
  return n(t)
}
function No(e, t, n) {
  const s = it(),
    { params: i } = e,
    r = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold
  return r && (n <= o || n >= s.innerWidth - o)
    ? r === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function Qg(e) {
  const t = this,
    n = Bt()
  let s = e
  s.originalEvent && (s = s.originalEvent)
  const i = t.touchEventsData
  if (s.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== s.pointerId) return
    i.pointerId = s.pointerId
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (i.touchId = s.targetTouches[0].identifier)
  if (s.type === "touchstart") {
    No(t, s, s.targetTouches[0].pageX)
    return
  }
  const { params: r, touches: o, enabled: l } = t
  if (
    !l ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return
  !t.animating && r.cssMode && r.loop && t.loopFix()
  let a = s.target
  if (
    (r.touchEventsTarget === "wrapper" && !og(a, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    c = s.composedPath ? s.composedPath() : s.path
  u && s.target && s.target.shadowRoot && c && (a = c[0])
  const d = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    f = !!(s.target && s.target.shadowRoot)
  if (r.noSwiping && (f ? Zg(d, a) : a.closest(d))) {
    t.allowClick = !0
    return
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return
  ;(o.currentX = s.pageX), (o.currentY = s.pageY)
  const h = o.currentX,
    g = o.currentY
  if (!No(t, s, h)) return
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = h),
    (o.startY = g),
    (i.touchStartTime = ti()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1)
  let v = !0
  a.matches(i.focusableElements) &&
    ((v = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !a.matches(i.focusableElements))) &&
      n.activeElement.blur()
  const x = v && t.allowTouchMove && r.touchStartPreventDefault
  ;(r.touchStartForcePreventDefault || x) &&
    !a.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s)
}
function em(e) {
  const t = Bt(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: o, enabled: l } = n
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return
  let a = e
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return
  let u
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].find((E) => E.identifier === s.touchId)),
      !u || u.identifier !== s.touchId)
    )
      return
  } else u = a
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a)
    return
  }
  const c = u.pageX,
    d = u.pageY
  if (a.preventedByNestedSwiper) {
    ;(r.startX = c), (r.startY = d)
    return
  }
  if (!n.allowTouchMove) {
    a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: c, startY: d, currentX: c, currentY: d }),
        (s.touchStartTime = ti()))
    return
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (n.isVertical()) {
      if (
        (d < r.startY && n.translate <= n.maxTranslate()) ||
        (d > r.startY && n.translate >= n.minTranslate())
      ) {
        ;(s.isTouched = !1), (s.isMoved = !1)
        return
      }
    } else {
      if (
        o &&
        ((c > r.startX && -n.translate <= n.maxTranslate()) ||
          (c < r.startX && -n.translate >= n.minTranslate()))
      )
        return
      if (
        !o &&
        ((c < r.startX && n.translate <= n.maxTranslate()) ||
          (c > r.startX && n.translate >= n.minTranslate()))
      )
        return
    }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(s.focusableElements))
  ) {
    ;(s.isMoved = !0), (n.allowClick = !1)
    return
  }
  s.allowTouchCallbacks && n.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = c),
    (r.currentY = d)
  const f = r.currentX - r.startX,
    h = r.currentY - r.startY
  if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
    return
  if (typeof s.isScrolling > "u") {
    let E
    ;(n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : f * f + h * h >= 25 &&
        ((E = (Math.atan2(Math.abs(h), Math.abs(f)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle))
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (a.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation()
  let g = n.isHorizontal() ? f : h,
    v = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
  i.oneWayMovement &&
    ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
    (r.diff = g),
    (g *= i.touchRatio),
    o && ((g = -g), (v = -v))
  const x = n.touchesDirection
  ;(n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = v > 0 ? "prev" : "next")
  const y = n.params.loop && !i.cssMode,
    m =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev)
  if (!s.isMoved) {
    if (
      (y && m && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      })
      n.wrapperEl.dispatchEvent(E)
    }
    ;(s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a)
  }
  if (
    (new Date().getTime(),
    i._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      x !== n.touchesDirection &&
      y &&
      m &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(r, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate)
    return
  }
  n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = g + s.startTranslate)
  let b = !0,
    w = i.resistanceRatio
  if (
    (i.touchReleaseOnEdges && (w = 0),
    g > 0
      ? (y &&
          m &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((b = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + g) ** w)))
      : g < 0 &&
        (y &&
          m &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((b = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - g) ** w))),
    b && (a.preventedByNestedSwiper = !0),
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
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;(s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        return
      }
    } else {
      s.currentTranslate = s.startTranslate
      return
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate))
}
function tm(e) {
  const t = this,
    n = t.touchEventsData
  let s = e
  s.originalEvent && (s = s.originalEvent)
  let i
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((i = [...s.changedTouches].find((E) => E.identifier === n.touchId)),
      !i || i.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return
    i = s
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
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t
  if (!c || (!o.simulateTouch && s.pointerType === "mouse")) return
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const d = ti(),
    f = d - n.touchStartTime
  if (t.allowClick) {
    const E = s.path || (s.composedPath && s.composedPath())
    t.updateClickedSlide((E && E[0]) || s.target, E),
      t.emit("tap click", s),
      f < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", s)
  }
  if (
    ((n.lastClickTime = ti()),
    ju(() => {
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
  let h
  if (
    (o.followFinger
      ? (h = a ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    o.cssMode)
  )
    return
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h })
    return
  }
  const g = h >= -t.maxTranslate() && !t.params.loop
  let v = 0,
    x = t.slidesSizesGrid[0]
  for (
    let E = 0;
    E < u.length;
    E += E < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const P = E < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
    typeof u[E + P] < "u"
      ? (g || (h >= u[E] && h < u[E + P])) && ((v = E), (x = u[E + P] - u[E]))
      : (g || h >= u[E]) && ((v = E), (x = u[u.length - 1] - u[u.length - 2]))
  }
  let y = null,
    m = null
  o.rewind &&
    (t.isBeginning
      ? (m =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0))
  const b = (h - u[v]) / x,
    w = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (b >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? y : v + w)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (b > 1 - o.longSwipesRatio
          ? t.slideTo(v + w)
          : m !== null && b < 0 && Math.abs(b) > o.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(v))
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(v + w)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : v + w),
        t.swipeDirection === "prev" && t.slideTo(m !== null ? m : v))
  }
}
function Ro() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e,
    o = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const l = o && t.loop
  ;(t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
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
    (e.allowSlidePrev = i),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function nm(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function sm() {
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
  let i
  const r = e.maxTranslate() - e.minTranslate()
  r === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / r),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function im(e) {
  const t = this
  Gs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function rm() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Fu = (e, t) => {
  const n = Bt(),
    { params: s, el: i, wrapperEl: r, device: o } = e,
    l = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    s.cssMode && r[a]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Ro,
          !0,
        )
      : e[u]("observerUpdate", Ro, !0),
    i[a]("load", e.onLoad, { capture: !0 }))
}
function lm() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = Qg.bind(e)),
    (e.onTouchMove = em.bind(e)),
    (e.onTouchEnd = tm.bind(e)),
    (e.onDocumentTouchStart = rm.bind(e)),
    t.cssMode && (e.onScroll = sm.bind(e)),
    (e.onClick = nm.bind(e)),
    (e.onLoad = im.bind(e)),
    Fu(e, "on")
}
function om() {
  Fu(this, "off")
}
var am = { attachEvents: lm, detachEvents: om }
const zo = (e, t) => e.grid && t.grid && t.grid.rows > 1
function um() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: i } = e,
    r = s.breakpoints
  if (!r || (r && Object.keys(r).length === 0)) return
  const o = Bt(),
    l =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    a =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : o.querySelector(s.breakpointsBase),
    u = e.getBreakpoint(r, l, a)
  if (!u || e.currentBreakpoint === u) return
  const d = (u in r ? r[u] : void 0) || e.originalParams,
    f = zo(e, s),
    h = zo(e, d),
    g = e.params.grabCursor,
    v = d.grabCursor,
    x = s.enabled
  f && !h
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !f &&
      h &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === "column") ||
        (!d.grid.fill && s.grid.fill === "column")) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    g && !v ? e.unsetGrabCursor() : !g && v && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((P) => {
      if (typeof d[P] > "u") return
      const C = s[P] && s[P].enabled,
        A = d[P] && d[P].enabled
      C && !A && e[P].disable(), !C && A && e[P].enable()
    })
  const y = d.direction && d.direction !== s.direction,
    m = s.loop && (d.slidesPerView !== s.slidesPerView || y),
    b = s.loop
  y && n && e.changeDirection(), dt(e.params, d)
  const w = e.params.enabled,
    E = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    x && !w ? e.disable() : !x && w && e.enable(),
    (e.currentBreakpoint = u),
    e.emit("_beforeBreakpoint", d),
    n &&
      (m
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !b && E
          ? (e.loopCreate(t), e.updateSlides())
          : b && !E && e.loopDestroy()),
    e.emit("breakpoint", d)
}
function cm(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let s = !1
  const i = it(),
    r = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1))
        return { value: r * a, point: l }
      }
      return { value: l, point: l }
    })
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10))
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l]
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (s = a)
      : u <= n.clientWidth && (s = a)
  }
  return s || "max"
}
var dm = { setBreakpoint: um, getBreakpoint: cm }
function fm(e, t) {
  const n = []
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(t + i)
          })
        : typeof s == "string" && n.push(t + s)
    }),
    n
  )
}
function pm() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: i, device: r } = e,
    o = fm(
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
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  t.push(...o), i.classList.add(...t), e.emitContainerClasses()
}
function hm() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var gm = { addClasses: pm, removeClasses: hm }
function mm() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n
  if (s) {
    const i = e.slides.length - 1,
      r = e.slidesGrid[i] + e.slidesSizesGrid[i] + s * 2
    e.isLocked = e.size > r
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var bm = { checkOverflow: mm },
  $r = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
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
function vm(e, t) {
  return function (s) {
    s === void 0 && (s = {})
    const i = Object.keys(s)[0],
      r = s[i]
    if (typeof r != "object" || r === null) {
      dt(t, s)
      return
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in r))
    ) {
      dt(t, s)
      return
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      dt(t, s)
  }
}
const qi = {
    eventsEmitter: gg,
    update: kg,
    translate: Og,
    transition: Bg,
    slide: Vg,
    loop: Kg,
    grabCursor: Jg,
    events: am,
    breakpoints: dm,
    checkOverflow: bm,
    classes: gm,
  },
  Ui = {}
let cl = class Ht {
  constructor() {
    let t, n
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r]
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = dt({}, n)),
      t && !n.el && (n.el = t)
    const o = Bt()
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const f = dt({}, n, { el: d })
          c.push(new Ht(f))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = Nu()),
      (l.device = Ru({ userAgent: n.userAgent })),
      (l.browser = zu()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules)
    const a = {}
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: vm(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const u = dt({}, $r, a)
    return (
      (l.params = dt({}, u, Ui, n)),
      (l.originalParams = dt({}, l.params)),
      (l.passedParams = dt({}, n)),
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
      i = jt(n, `.${s.slideClass}, swiper-slide`),
      r = ii(i[0])
    return ii(t) - r
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      ),
    )
  }
  getSlideIndexWhenGrid(t) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === "column"
          ? (t = Math.floor(t / this.params.grid.rows))
          : this.params.grid.fill === "row" &&
            (t = t % Math.ceil(this.slides.length / this.params.grid.rows))),
      t
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: s } = t
    t.slides = jt(n, `.${s.slideClass}, swiper-slide`)
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
    const i = s.minTranslate(),
      o = (s.maxTranslate() - i) * t + i
    s.translateTo(o, typeof n > "u" ? 0 : n),
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
      const i = t.getSlideClasses(s)
      n.push({ slideEl: s, classNames: i }), t.emit("_slideClass", s, i)
    }),
      t.emit("_slideClasses", n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1)
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = s
    let c = 1
    if (typeof i.slidesPerView == "number") return i.slidesPerView
    if (i.centeredSlides) {
      let d = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0,
        f
      for (let h = u + 1; h < r.length; h += 1)
        r[h] &&
          !f &&
          ((d += Math.ceil(r[h].swiperSlideSize)), (c += 1), d > a && (f = !0))
      for (let h = u - 1; h >= 0; h -= 1)
        r[h] && !f && ((d += r[h].swiperSlideSize), (c += 1), d > a && (f = !0))
    } else if (t === "current")
      for (let d = u + 1; d < r.length; d += 1)
        (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1)
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (c += 1)
    return c
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: s } = t
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Gs(t, o)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let r
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      i(), s.autoHeight && t.updateAutoHeight()
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const o = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides
        r = t.slideTo(o.length - 1, 0, !1, !0)
      } else r = t.slideTo(t.activeIndex, 0, !1, !0)
      r || i()
    }
    s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const s = this,
      i = s.params.direction
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "")
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
        s.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0)
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`
    let o =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : jt(s, i())[0]
    return (
      !o &&
        n.params.createElements &&
        ((o = si("div", n.params.wrapperClass)),
        s.append(o),
        jt(s, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l)
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || an(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || an(s, "direction") === "rtl"),
        wrongRTL: an(o, "display") === "-webkit-box",
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
      n.params.loop && n.loopCreate(void 0, !0),
      n.attachEvents()
    const i = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((r) => {
        r.complete
          ? Gs(n, r)
          : r.addEventListener("load", (o) => {
              Gs(n, o.target)
            })
      }),
      Mr(n),
      (n.initialized = !0),
      Mr(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const s = this,
      { params: i, el: r, wrapperEl: o, slides: l } = s
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r && typeof r != "string" && r.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index")
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a)
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), ng(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    dt(Ui, t)
  }
  static get extendedDefaults() {
    return Ui
  }
  static get defaults() {
    return $r
  }
  static installModule(t) {
    Ht.prototype.__modules__ || (Ht.prototype.__modules__ = [])
    const n = Ht.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ht.installModule(n)), Ht)
      : (Ht.installModule(t), Ht)
  }
}
Object.keys(qi).forEach((e) => {
  Object.keys(qi[e]).forEach((t) => {
    cl.prototype[t] = qi[e][t]
  })
})
cl.use([pg, hg])
const Hu = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
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
function wn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  )
}
function Nn(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : wn(t[s]) && wn(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : Nn(e[s], t[s])
          : (e[s] = t[s])
    })
}
function Gu(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function Vu(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function Wu(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function qu(e) {
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
function ym(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function wm(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e
  const u = i.filter(
      (I) => I !== "children" && I !== "direction" && I !== "wrapperClass",
    ),
    {
      params: c,
      pagination: d,
      navigation: f,
      scrollbar: h,
      virtual: g,
      thumbs: v,
    } = t
  let x, y, m, b, w, E, P, C
  i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (x = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (y = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (m = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      h &&
      !h.el &&
      (b = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || r) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (w = !0)
  const A = (I) => {
    t[I] &&
      (t[I].destroy(),
      I === "navigation"
        ? (t.isElement && (t[I].prevEl.remove(), t[I].nextEl.remove()),
          (c[I].prevEl = void 0),
          (c[I].nextEl = void 0),
          (t[I].prevEl = void 0),
          (t[I].nextEl = void 0))
        : (t.isElement && t[I].el.remove(),
          (c[I].el = void 0),
          (t[I].el = void 0)))
  }
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !s.loop ? (E = !0) : !c.loop && s.loop ? (P = !0) : (C = !0)),
    u.forEach((I) => {
      if (wn(c[I]) && wn(s[I]))
        Object.assign(c[I], s[I]),
          (I === "navigation" || I === "pagination" || I === "scrollbar") &&
            "enabled" in s[I] &&
            !s[I].enabled &&
            A(I)
      else {
        const $ = s[I]
        ;($ === !0 || $ === !1) &&
        (I === "navigation" || I === "pagination" || I === "scrollbar")
          ? $ === !1 && A(I)
          : (c[I] = s[I])
      }
    }),
    u.includes("controller") &&
      !y &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && g && c.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes("virtual") &&
        g &&
        c.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && c.loop && (C = !0),
    x && v.init() && v.update(!0),
    y && (t.controller.control = c.controller.control),
    m &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    b &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    w &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          ri(r, t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          ri(o, t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      r && (c.navigation.nextEl = r),
      o && (c.navigation.prevEl = o),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && t.changeDirection(s.direction, !1),
    (E || C) && t.loopDestroy(),
    (P || C) && t.loopCreate(),
    t.update()
}
function Do(e, t) {
  e === void 0 && (e = {})
  const n = { on: {} },
    s = {},
    i = {}
  Nn(n, $r), (n._emitClasses = !0), (n.init = !1)
  const r = {},
    o = Hu.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? wn(e[a])
            ? ((n[a] = {}), (i[a] = {}), Nn(n[a], e[a]), Nn(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
            ? (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (r[a] = e[a]))
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a]
    }),
    { params: n, passedParams: i, rest: r, events: s }
  )
}
function xm(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: o,
    swiper: l,
  } = e
  Gu(t) &&
    s &&
    i &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    Vu(t) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    Wu(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n)
}
function Sm(e, t, n, s, i) {
  const r = []
  if (!t) return r
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a)
  }
  if (n && s) {
    const a = s.map(i),
      u = n.map(i)
    a.join("") !== u.join("") && o("children"),
      s.length !== n.length && o("children")
  }
  return (
    Hu.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (wn(e[a]) && wn(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a])
            u.length !== c.length
              ? o(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a)
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a)
                }))
          } else e[a] !== t[a] && o(a)
      }),
    r
  )
}
const Em = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.emit("_virtualUpdated"),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate())
}
function Ki(e, t, n) {
  e === void 0 && (e = {})
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (o, l) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const u = typeof a.type == "symbol"
          l === "default" && (l = "container-end"),
            u && a.children
              ? r(a.children, l)
              : (a.type &&
                    (a.type.name === "SwiperSlide" ||
                      a.type.name === "AsyncComponentWrapper")) ||
                  (a.componentOptions &&
                    a.componentOptions.tag === "SwiperSlide")
                ? s.push(a)
                : i[l] && i[l].push(a)
        })
    }
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != "function") return
      const l = e[o]()
      r(l, o)
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: i }
  )
}
function Cm(e, t, n) {
  if (!n) return null
  const s = (c) => {
      let d = c
      return c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
    },
    i = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: o } = n,
    l = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    u = []
  for (let c = l; c < a; c += 1)
    c >= r && c <= o && u.length < t.length && u.push(t[s(c)])
  return u.map((c) => {
    if (
      (c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = i),
      c.type)
    )
      return Ee(c.type, { ...c.props }, c.children)
    if (c.componentOptions)
      return Ee(
        c.componentOptions.Ctor,
        { ...c.props },
        c.componentOptions.children,
      )
  })
}
const Tm = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
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
      breakpointsBase: { type: String, default: void 0 },
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
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopAddBlankSlides: { type: Boolean, default: void 0 },
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
      "_virtualUpdated",
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
      const { tag: i, wrapperTag: r } = e,
        o = F("swiper"),
        l = F(null),
        a = F(!1),
        u = F(!1),
        c = F(null),
        d = F(null),
        f = F(null),
        h = { value: [] },
        g = { value: [] },
        v = F(null),
        x = F(null),
        y = F(null),
        m = F(null),
        { params: b, passedParams: w } = Do(e)
      Ki(n, h, g), (f.value = w), (g.value = h.value)
      const E = () => {
        Ki(n, h, g), (a.value = !0)
      }
      ;(b.onAny = function (A) {
        for (
          var I = arguments.length, $ = new Array(I > 1 ? I - 1 : 0), j = 1;
          j < I;
          j++
        )
          $[j - 1] = arguments[j]
        s(A, ...$)
      }),
        Object.assign(b.on, {
          _beforeBreakpoint: E,
          _containerClasses(A, I) {
            o.value = I
          },
        })
      const P = { ...b }
      if (
        (delete P.wrapperClass,
        (d.value = new cl(P)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = h.value
        const A = {
          cache: !1,
          slides: h.value,
          renderExternal: (I) => {
            l.value = I
          },
          renderExternalUpdate: !1,
        }
        Nn(d.value.params.virtual, A), Nn(d.value.originalParams.virtual, A)
      }
      qr(() => {
        !u.value && d.value && (d.value.emitSlidesClasses(), (u.value = !0))
        const { passedParams: A } = Do(e),
          I = Sm(A, f.value, h.value, g.value, ($) => $.props && $.props.key)
        ;(f.value = A),
          (I.length || a.value) &&
            d.value &&
            !d.value.destroyed &&
            wm({
              swiper: d.value,
              slides: h.value,
              passedParams: A,
              changedParams: I,
              nextEl: v.value,
              prevEl: x.value,
              scrollbarEl: m.value,
              paginationEl: y.value,
            }),
          (a.value = !1)
      }),
        ht("swiper", d),
        st(l, () => {
          Sn(() => {
            Em(d.value)
          })
        }),
        qe(() => {
          c.value &&
            (xm(
              {
                el: c.value,
                nextEl: v.value,
                prevEl: x.value,
                paginationEl: y.value,
                scrollbarEl: m.value,
                swiper: d.value,
              },
              b,
            ),
            s("swiper", d.value))
        }),
        Ur(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1)
        })
      function C(A) {
        return b.virtual
          ? Cm(d, A, l.value)
          : (A.forEach((I, $) => {
              I.props || (I.props = {}),
                (I.props.swiperRef = d),
                (I.props.swiperSlideIndex = $)
            }),
            A)
      }
      return () => {
        const { slides: A, slots: I } = Ki(n, h, g)
        return Ee(i, { ref: c, class: qu(o.value) }, [
          I["container-start"],
          Ee(r, { class: ym(b.wrapperClass) }, [
            I["wrapper-start"],
            C(A),
            I["wrapper-end"],
          ]),
          Gu(e) && [
            Ee("div", { ref: x, class: "swiper-button-prev" }),
            Ee("div", { ref: v, class: "swiper-button-next" }),
          ],
          Wu(e) && Ee("div", { ref: m, class: "swiper-scrollbar" }),
          Vu(e) && Ee("div", { ref: y, class: "swiper-pagination" }),
          I["container-end"],
        ])
      }
    },
  },
  km = {
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
      const { swiperRef: i } = e,
        r = F(null),
        o = F("swiper-slide"),
        l = F(!1)
      function a(d, f, h) {
        f === r.value && (o.value = h)
      }
      qe(() => {
        !i || !i.value || (i.value.on("_slideClass", a), (s = !0))
      }),
        Wr(() => {
          s || !i || !i.value || (i.value.on("_slideClass", a), (s = !0))
        }),
        qr(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            i.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"))
        }),
        Ur(() => {
          !i || !i.value || i.value.off("_slideClass", a)
        })
      const u = Z(() => ({
        isActive: o.value.indexOf("swiper-slide-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
        isNext: o.value.indexOf("swiper-slide-next") >= 0,
      }))
      ht("swiperSlide", u)
      const c = () => {
        l.value = !0
      }
      return () =>
        Ee(
          e.tag,
          {
            class: qu(`${o.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && i && i.value && i.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? Ee(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !l.value &&
                    Ee("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !l.value &&
                  Ee("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function Uu(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let r = jt(e.el, `.${s[i]}`)[0]
          r || ((r = si("div", s[i])), (r.className = s[i]), e.el.append(r)),
            (n[i] = r),
            (t[i] = r)
        }
      }),
    n
  )
}
function Pm(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e
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
  function r(g) {
    let v
    return g &&
      typeof g == "string" &&
      t.isElement &&
      ((v = t.el.querySelector(g) || t.hostEl.querySelector(g)), v)
      ? v
      : (g &&
          (typeof g == "string" && (v = [...document.querySelectorAll(g)]),
          t.params.uniqueNavElements &&
          typeof g == "string" &&
          v &&
          v.length > 1 &&
          t.el.querySelectorAll(g).length === 1
            ? (v = t.el.querySelector(g))
            : v && v.length === 1 && (v = v[0])),
        g && !v ? g : v)
  }
  function o(g, v) {
    const x = t.params.navigation
    ;(g = We(g)),
      g.forEach((y) => {
        y &&
          (y.classList[v ? "add" : "remove"](...x.disabledClass.split(" ")),
          y.tagName === "BUTTON" && (y.disabled = v),
          t.params.watchOverflow &&
            t.enabled &&
            y.classList[t.isLocked ? "add" : "remove"](x.lockClass))
      })
  }
  function l() {
    const { nextEl: g, prevEl: v } = t.navigation
    if (t.params.loop) {
      o(v, !1), o(g, !1)
      return
    }
    o(v, t.isBeginning && !t.params.rewind), o(g, t.isEnd && !t.params.rewind)
  }
  function a(g) {
    g.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"))
  }
  function u(g) {
    g.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"))
  }
  function c() {
    const g = t.params.navigation
    if (
      ((t.params.navigation = Uu(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(g.nextEl || g.prevEl))
    )
      return
    let v = r(g.nextEl),
      x = r(g.prevEl)
    Object.assign(t.navigation, { nextEl: v, prevEl: x }),
      (v = We(v)),
      (x = We(x))
    const y = (m, b) => {
      m && m.addEventListener("click", b === "next" ? u : a),
        !t.enabled && m && m.classList.add(...g.lockClass.split(" "))
    }
    v.forEach((m) => y(m, "next")), x.forEach((m) => y(m, "prev"))
  }
  function d() {
    let { nextEl: g, prevEl: v } = t.navigation
    ;(g = We(g)), (v = We(v))
    const x = (y, m) => {
      y.removeEventListener("click", m === "next" ? u : a),
        y.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    g.forEach((y) => x(y, "next")), v.forEach((y) => x(y, "prev"))
  }
  s("init", () => {
    t.params.navigation.enabled === !1 ? h() : (c(), l())
  }),
    s("toEdge fromEdge lock unlock", () => {
      l()
    }),
    s("destroy", () => {
      d()
    }),
    s("enable disable", () => {
      let { nextEl: g, prevEl: v } = t.navigation
      if (((g = We(g)), (v = We(v)), t.enabled)) {
        l()
        return
      }
      ;[...g, ...v]
        .filter((x) => !!x)
        .forEach((x) => x.classList.add(t.params.navigation.lockClass))
    }),
    s("click", (g, v) => {
      let { nextEl: x, prevEl: y } = t.navigation
      ;(x = We(x)), (y = We(y))
      const m = v.target
      let b = y.includes(m) || x.includes(m)
      if (t.isElement && !b) {
        const w = v.path || (v.composedPath && v.composedPath())
        w && (b = w.find((E) => x.includes(E) || y.includes(E)))
      }
      if (t.params.navigation.hideOnClick && !b) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === m || t.pagination.el.contains(m))
        )
          return
        let w
        x.length
          ? (w = x[0].classList.contains(t.params.navigation.hiddenClass))
          : y.length &&
            (w = y[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          [...x, ...y]
            .filter((E) => !!E)
            .forEach((E) => E.classList.toggle(t.params.navigation.hiddenClass))
      }
    })
  const f = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        c(),
        l()
    },
    h = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        d()
    }
  Object.assign(t.navigation, {
    enable: f,
    disable: h,
    update: l,
    init: c,
    destroy: d,
  })
}
function Zn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/()[\]])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function Im(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e
  const r = "swiper-pagination"
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
      formatFractionCurrent: (m) => m,
      formatFractionTotal: (m) => m,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] })
  let o,
    l = 0
  function a() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function u(m, b) {
    const { bulletActiveClass: w } = t.params.pagination
    m &&
      ((m = m[`${b === "prev" ? "previous" : "next"}ElementSibling`]),
      m &&
        (m.classList.add(`${w}-${b}`),
        (m = m[`${b === "prev" ? "previous" : "next"}ElementSibling`]),
        m && m.classList.add(`${w}-${b}-${b}`)))
  }
  function c(m, b, w) {
    if (((m = m % w), (b = b % w), b === m + 1)) return "next"
    if (b === m - 1) return "previous"
  }
  function d(m) {
    const b = m.target.closest(Zn(t.params.pagination.bulletClass))
    if (!b) return
    m.preventDefault()
    const w = ii(b) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === w) return
      const E = c(t.realIndex, w, t.slides.length)
      E === "next"
        ? t.slideNext()
        : E === "previous"
          ? t.slidePrev()
          : t.slideToLoop(w)
    } else t.slideTo(w)
  }
  function f() {
    const m = t.rtl,
      b = t.params.pagination
    if (a()) return
    let w = t.pagination.el
    w = We(w)
    let E, P
    const C =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      A = t.params.loop
        ? Math.ceil(C / t.params.slidesPerGroup)
        : t.snapGrid.length
    if (
      (t.params.loop
        ? ((P = t.previousRealIndex || 0),
          (E =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((E = t.snapIndex), (P = t.previousSnapIndex))
          : ((P = t.previousIndex || 0), (E = t.activeIndex || 0)),
      b.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const I = t.pagination.bullets
      let $, j, G
      if (
        (b.dynamicBullets &&
          ((o = Ir(I[0], t.isHorizontal() ? "width" : "height")),
          w.forEach((q) => {
            q.style[t.isHorizontal() ? "width" : "height"] =
              `${o * (b.dynamicMainBullets + 4)}px`
          }),
          b.dynamicMainBullets > 1 &&
            P !== void 0 &&
            ((l += E - (P || 0)),
            l > b.dynamicMainBullets - 1
              ? (l = b.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          ($ = Math.max(E - l, 0)),
          (j = $ + (Math.min(I.length, b.dynamicMainBullets) - 1)),
          (G = (j + $) / 2)),
        I.forEach((q) => {
          const fe = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (ge) => `${b.bulletActiveClass}${ge}`,
            ),
          ]
            .map((ge) =>
              typeof ge == "string" && ge.includes(" ") ? ge.split(" ") : ge,
            )
            .flat()
          q.classList.remove(...fe)
        }),
        w.length > 1)
      )
        I.forEach((q) => {
          const fe = ii(q)
          fe === E
            ? q.classList.add(...b.bulletActiveClass.split(" "))
            : t.isElement && q.setAttribute("part", "bullet"),
            b.dynamicBullets &&
              (fe >= $ &&
                fe <= j &&
                q.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),
              fe === $ && u(q, "prev"),
              fe === j && u(q, "next"))
        })
      else {
        const q = I[E]
        if (
          (q && q.classList.add(...b.bulletActiveClass.split(" ")),
          t.isElement &&
            I.forEach((fe, ge) => {
              fe.setAttribute("part", ge === E ? "bullet-active" : "bullet")
            }),
          b.dynamicBullets)
        ) {
          const fe = I[$],
            ge = I[j]
          for (let _ = $; _ <= j; _ += 1)
            I[_] &&
              I[_].classList.add(...`${b.bulletActiveClass}-main`.split(" "))
          u(fe, "prev"), u(ge, "next")
        }
      }
      if (b.dynamicBullets) {
        const q = Math.min(I.length, b.dynamicMainBullets + 4),
          fe = (o * q - o) / 2 - G * o,
          ge = m ? "right" : "left"
        I.forEach((_) => {
          _.style[t.isHorizontal() ? ge : "top"] = `${fe}px`
        })
      }
    }
    w.forEach((I, $) => {
      if (
        (b.type === "fraction" &&
          (I.querySelectorAll(Zn(b.currentClass)).forEach((j) => {
            j.textContent = b.formatFractionCurrent(E + 1)
          }),
          I.querySelectorAll(Zn(b.totalClass)).forEach((j) => {
            j.textContent = b.formatFractionTotal(A)
          })),
        b.type === "progressbar")
      ) {
        let j
        b.progressbarOpposite
          ? (j = t.isHorizontal() ? "vertical" : "horizontal")
          : (j = t.isHorizontal() ? "horizontal" : "vertical")
        const G = (E + 1) / A
        let q = 1,
          fe = 1
        j === "horizontal" ? (q = G) : (fe = G),
          I.querySelectorAll(Zn(b.progressbarFillClass)).forEach((ge) => {
            ;(ge.style.transform = `translate3d(0,0,0) scaleX(${q}) scaleY(${fe})`),
              (ge.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      b.type === "custom" && b.renderCustom
        ? (ri(I, b.renderCustom(t, E + 1, A)),
          $ === 0 && i("paginationRender", I))
        : ($ === 0 && i("paginationRender", I), i("paginationUpdate", I)),
        t.params.watchOverflow &&
          t.enabled &&
          I.classList[t.isLocked ? "add" : "remove"](b.lockClass)
    })
  }
  function h() {
    const m = t.params.pagination
    if (a()) return
    const b =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length
    let w = t.pagination.el
    w = We(w)
    let E = ""
    if (m.type === "bullets") {
      let P = t.params.loop
        ? Math.ceil(b / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && P > b && (P = b)
      for (let C = 0; C < P; C += 1)
        m.renderBullet
          ? (E += m.renderBullet.call(t, C, m.bulletClass))
          : (E += `<${m.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`)
    }
    m.type === "fraction" &&
      (m.renderFraction
        ? (E = m.renderFraction.call(t, m.currentClass, m.totalClass))
        : (E = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
      m.type === "progressbar" &&
        (m.renderProgressbar
          ? (E = m.renderProgressbar.call(t, m.progressbarFillClass))
          : (E = `<span class="${m.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      w.forEach((P) => {
        m.type !== "custom" && ri(P, E || ""),
          m.type === "bullets" &&
            t.pagination.bullets.push(...P.querySelectorAll(Zn(m.bulletClass)))
      }),
      m.type !== "custom" && i("paginationRender", w[0])
  }
  function g() {
    t.params.pagination = Uu(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    )
    const m = t.params.pagination
    if (!m.el) return
    let b
    typeof m.el == "string" && t.isElement && (b = t.el.querySelector(m.el)),
      !b &&
        typeof m.el == "string" &&
        (b = [...document.querySelectorAll(m.el)]),
      b || (b = m.el),
      !(!b || b.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof m.el == "string" &&
          Array.isArray(b) &&
          b.length > 1 &&
          ((b = [...t.el.querySelectorAll(m.el)]),
          b.length > 1 && (b = b.find((w) => Bu(w, ".swiper")[0] === t.el))),
        Array.isArray(b) && b.length === 1 && (b = b[0]),
        Object.assign(t.pagination, { el: b }),
        (b = We(b)),
        b.forEach((w) => {
          m.type === "bullets" &&
            m.clickable &&
            w.classList.add(...(m.clickableClass || "").split(" ")),
            w.classList.add(m.modifierClass + m.type),
            w.classList.add(
              t.isHorizontal() ? m.horizontalClass : m.verticalClass,
            ),
            m.type === "bullets" &&
              m.dynamicBullets &&
              (w.classList.add(`${m.modifierClass}${m.type}-dynamic`),
              (l = 0),
              m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
            m.type === "progressbar" &&
              m.progressbarOpposite &&
              w.classList.add(m.progressbarOppositeClass),
            m.clickable && w.addEventListener("click", d),
            t.enabled || w.classList.add(m.lockClass)
        }))
  }
  function v() {
    const m = t.params.pagination
    if (a()) return
    let b = t.pagination.el
    b &&
      ((b = We(b)),
      b.forEach((w) => {
        w.classList.remove(m.hiddenClass),
          w.classList.remove(m.modifierClass + m.type),
          w.classList.remove(
            t.isHorizontal() ? m.horizontalClass : m.verticalClass,
          ),
          m.clickable &&
            (w.classList.remove(...(m.clickableClass || "").split(" ")),
            w.removeEventListener("click", d))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((w) =>
          w.classList.remove(...m.bulletActiveClass.split(" ")),
        )
  }
  s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const m = t.params.pagination
    let { el: b } = t.pagination
    ;(b = We(b)),
      b.forEach((w) => {
        w.classList.remove(m.horizontalClass, m.verticalClass),
          w.classList.add(
            t.isHorizontal() ? m.horizontalClass : m.verticalClass,
          )
      })
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? y() : (g(), h(), f())
    }),
    s("activeIndexChange", () => {
      typeof t.snapIndex > "u" && f()
    }),
    s("snapIndexChange", () => {
      f()
    }),
    s("snapGridLengthChange", () => {
      h(), f()
    }),
    s("destroy", () => {
      v()
    }),
    s("enable disable", () => {
      let { el: m } = t.pagination
      m &&
        ((m = We(m)),
        m.forEach((b) =>
          b.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ))
    }),
    s("lock unlock", () => {
      f()
    }),
    s("click", (m, b) => {
      const w = b.target,
        E = We(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        E &&
        E.length > 0 &&
        !w.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && w === t.navigation.nextEl) ||
            (t.navigation.prevEl && w === t.navigation.prevEl))
        )
          return
        const P = E[0].classList.contains(t.params.pagination.hiddenClass)
        i(P === !0 ? "paginationShow" : "paginationHide"),
          E.forEach((C) => C.classList.toggle(t.params.pagination.hiddenClass))
      }
    })
  const x = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: m } = t.pagination
      m &&
        ((m = We(m)),
        m.forEach((b) =>
          b.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        g(),
        h(),
        f()
    },
    y = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: m } = t.pagination
      m &&
        ((m = We(m)),
        m.forEach((b) =>
          b.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        v()
    }
  Object.assign(t.pagination, {
    enable: x,
    disable: y,
    render: h,
    update: f,
    init: g,
    destroy: v,
  })
}
function Mm(e) {
  let { swiper: t, extendParams: n, on: s, emit: i, params: r } = e
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
  let o,
    l,
    a = r && r.autoplay ? r.autoplay.delay : 3e3,
    u = r && r.autoplay ? r.autoplay.delay : 3e3,
    c,
    d = new Date().getTime(),
    f,
    h,
    g,
    v,
    x,
    y,
    m
  function b(L) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (L.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", b),
        !(m || (L.detail && L.detail.bySwiperTouchMove)) && $()))
  }
  const w = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (f = !0) : f && ((u = c), (f = !1))
      const L = t.autoplay.paused ? c : d + u - new Date().getTime()
      ;(t.autoplay.timeLeft = L),
        i("autoplayTimeLeft", L, L / a),
        (l = requestAnimationFrame(() => {
          w()
        }))
    },
    E = () => {
      let L
      return (
        t.virtual && t.params.virtual.enabled
          ? (L = t.slides.find((be) =>
              be.classList.contains("swiper-slide-active"),
            ))
          : (L = t.slides[t.activeIndex]),
        L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0
      )
    },
    P = (L) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(l), w()
      let xe = typeof L > "u" ? t.params.autoplay.delay : L
      ;(a = t.params.autoplay.delay), (u = t.params.autoplay.delay)
      const be = E()
      !Number.isNaN(be) &&
        be > 0 &&
        typeof L > "u" &&
        ((xe = be), (a = be), (u = be)),
        (c = xe)
      const je = t.params.speed,
        Le = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(je, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, je, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(je, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, je, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                P()
              })))
        }
      return (
        xe > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              Le()
            }, xe)))
          : requestAnimationFrame(() => {
              Le()
            }),
        xe
      )
    },
    C = () => {
      ;(d = new Date().getTime()),
        (t.autoplay.running = !0),
        P(),
        i("autoplayStart")
    },
    A = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(l),
        i("autoplayStop")
    },
    I = (L, xe) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(o), L || (y = !0)
      const be = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", b)
            : $()
      }
      if (((t.autoplay.paused = !0), xe)) {
        x && (c = t.params.autoplay.delay), (x = !1), be()
        return
      }
      ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), be())
    },
    $ = () => {
      ;(t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        y ? ((y = !1), P(c)) : P(),
        (t.autoplay.paused = !1),
        i("autoplayResume"))
    },
    j = () => {
      if (t.destroyed || !t.autoplay.running) return
      const L = Bt()
      L.visibilityState === "hidden" && ((y = !0), I(!0)),
        L.visibilityState === "visible" && $()
    },
    G = (L) => {
      L.pointerType === "mouse" &&
        ((y = !0), (m = !0), !(t.animating || t.autoplay.paused) && I(!0))
    },
    q = (L) => {
      L.pointerType === "mouse" && ((m = !1), t.autoplay.paused && $())
    },
    fe = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", G),
        t.el.addEventListener("pointerleave", q))
    },
    ge = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", G),
        t.el.removeEventListener("pointerleave", q))
    },
    _ = () => {
      Bt().addEventListener("visibilitychange", j)
    },
    R = () => {
      Bt().removeEventListener("visibilitychange", j)
    }
  s("init", () => {
    t.params.autoplay.enabled && (fe(), _(), C())
  }),
    s("destroy", () => {
      ge(), R(), t.autoplay.running && A()
    }),
    s("_freeModeStaticRelease", () => {
      ;(g || y) && $()
    }),
    s("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? A() : I(!0, !0)
    }),
    s("beforeTransitionStart", (L, xe, be) => {
      t.destroyed ||
        !t.autoplay.running ||
        (be || !t.params.autoplay.disableOnInteraction ? I(!0, !0) : A())
    }),
    s("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          A()
          return
        }
        ;(h = !0),
          (g = !1),
          (y = !1),
          (v = setTimeout(() => {
            ;(y = !0), (g = !0), I(!0)
          }, 200))
      }
    }),
    s("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !h)) {
        if (
          (clearTimeout(v),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(g = !1), (h = !1)
          return
        }
        g && t.params.cssMode && $(), (g = !1), (h = !1)
      }
    }),
    s("slideChange", () => {
      t.destroyed || !t.autoplay.running || (x = !0)
    }),
    Object.assign(t.autoplay, { start: C, stop: A, pause: I, resume: $ })
}
const $m = { class: "prose text-center w-full" },
  Am = { href: "/pricing" },
  Om = { key: 1, class: "p-4 rounded mt-4 bg-red-200 text-red-900" },
  _m = ["disabled"],
  Cs = {
    __name: "ctaForm",
    props: { brightness: Number },
    setup(e) {
      const t = F(!1),
        n = F(!1),
        s = F(""),
        i = (l) => {
          if (l >= 4) return "text-slate-800"
          if (l == 3) return "text-slate-200"
          if (l == 2) return "text-slate-300"
          if (l == 1) return "text-slate-300"
        },
        r = (l) => {
          if (l >= 4) return "text-slate-900 bg-white border-emerald-300"
          if (l == 3) return "text-slate-900 bg-slate-200 border-slate-600"
          if (l == 2) return "text-slate-100 bg-slate-900 border-orange-500"
          if (l == 1) return "text-slate-100 bg-black border-orange-400"
        },
        o = async (l) => {
          if ((l.preventDefault(), t.value)) return
          const a = l.target,
            u = a.name.value.trim(),
            c = a.email.value.trim(),
            d = a.message.value.trim(),
            f = "CTA Form: New Project Inquiry"
          if (!u || !c || !d) {
            s.value = "Please fill in all required fields"
            return
          }
          ;(t.value = !0), (s.value = "")
          try {
            const h = await fetch(
                "https://api.josephhansen.dev/api/mail/send",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: u,
                    email: c,
                    subject: f,
                    message: d,
                    referrer: window.location.href,
                    location: "CTA form",
                  }),
                },
              ),
              g = await h.json()
            h.ok
              ? ((n.value = !0), a.reset())
              : (s.value =
                  g.error || "Failed to send message. Please try again.")
          } catch (h) {
            console.error("Form submission error:", h),
              (s.value =
                "Network error. Please check your connection and try again.")
          } finally {
            t.value = !1
          }
        }
      return (l, a) => (
        O(),
        D(
          "div",
          {
            class: k([
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
            p("div", $m, [
              p(
                "h4",
                { class: k(["text-2xl", i(e.brightness)]) },
                [
                  ...(a[0] ||
                    (a[0] = [
                      ce(" Piqued your interest?", -1),
                      p("br", null, null, -1),
                      ce(
                        " Check out the (incredibly simple) service pricing: ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              p("a", Am, [
                p(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: k([
                      "rounded px-5 py-2 text-white font-semibold mt-4",
                      {
                        "bg-emerald-600 hover:bg-emerald-700":
                          e.brightness >= 4,
                        "bg-orange-700 hover:bg-orange-800": e.brightness == 3,
                        "bg-orange-600 hover:bg-orange-700": e.brightness == 2,
                        "bg-orange-500 hover:bg-orange-600": e.brightness == 1,
                      },
                    ]),
                  },
                  " I already have a site ",
                  2,
                ),
              ]),
              p(
                "h4",
                { class: k(["text-2xl mt-8", i(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              n.value
                ? (O(),
                  D(
                    "div",
                    {
                      key: 0,
                      class: k([
                        "p-4 rounded mt-4",
                        {
                          "bg-emerald-200 text-emerald-900": e.brightness >= 4,
                          "bg-slate-700 text-slate-100": e.brightness == 3,
                          "bg-orange-900 text-orange-100": e.brightness <= 2,
                        },
                      ]),
                    },
                    [
                      ...(a[1] ||
                        (a[1] = [
                          p(
                            "p",
                            { class: "font-semibold" },
                            "Thanks for your interest!",
                            -1,
                          ),
                          p(
                            "p",
                            { class: "mt-1" },
                            " Your submission has been processed. I'll be in touch soon! ",
                            -1,
                          ),
                        ])),
                    ],
                    2,
                  ))
                : we("", !0),
              s.value ? (O(), D("div", Om, Ce(s.value), 1)) : we("", !0),
              n.value
                ? we("", !0)
                : (O(),
                  D(
                    "form",
                    { key: 2, id: "cta", onSubmit: o, class: "mt-4" },
                    [
                      p(
                        "input",
                        {
                          type: "text",
                          name: "name",
                          placeholder: "Name *",
                          required: "",
                          class: k([
                            "rounded p-2 w-full border",
                            r(e.brightness),
                          ]),
                        },
                        null,
                        2,
                      ),
                      p(
                        "input",
                        {
                          type: "email",
                          name: "email",
                          placeholder: "Email *",
                          required: "",
                          class: k([
                            "rounded p-2 w-full mt-3 border",
                            r(e.brightness),
                          ]),
                        },
                        null,
                        2,
                      ),
                      p(
                        "textarea",
                        {
                          placeholder: "Message *",
                          name: "message",
                          required: "",
                          rows: "4",
                          class: k([
                            "rounded p-2 w-full mt-3 border",
                            r(e.brightness),
                          ]),
                        },
                        null,
                        2,
                      ),
                      p(
                        "button",
                        {
                          id: "submitButton",
                          type: "submit",
                          disabled: t.value,
                          "aria-label": "Submit contact form",
                          class: k([
                            "rounded px-5 py-2 text-white font-semibold w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed",
                            {
                              "bg-emerald-600 hover:bg-emerald-700":
                                e.brightness >= 4,
                              "bg-slate-400 hover:bg-slate-500":
                                e.brightness == 3,
                              "bg-orange-600 hover:bg-orange-700":
                                e.brightness == 2,
                              "bg-orange-500 hover:bg-orange-600":
                                e.brightness == 1,
                            },
                          ]),
                        },
                        Ce(t.value ? "Sending..." : "Contact Me"),
                        11,
                        _m,
                      ),
                    ],
                    32,
                  )),
            ]),
          ],
          2,
        )
      )
    },
  },
  jm = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  Lm = ["href"],
  Bm = { class: "hidden md:hidden lg:block" },
  Nm = ["href"],
  Rm = ["src", "alt"],
  zm = ["src", "alt"],
  Dm = { class: "block md:block lg:hidden py-6" },
  Fm = { class: "grid grid-cols-2 gap-4" },
  Hm = ["src", "alt"],
  Gm = { class: "flex justify-center pt-6" },
  Vm = {
    __name: "sliderAndGallery",
    props: {
      brightness: Number,
      images: Array,
      captions: Array,
      link: String,
      title: String,
    },
    setup(e) {
      const t = F([]),
        n = [Mm, Im, Pm],
        s = e,
        i = F(""),
        r = F(""),
        o = F([]),
        l = (c) => {
          if (c >= 4) return "text-slate-800"
          if (c == 3) return "text-slate-200"
          if (c == 2) return "text-slate-300"
          if (c == 1) return "text-slate-300"
        },
        a = () => {
          const c = document.getElementById("lightbox"),
            d = document.getElementById("lightbox-img"),
            f = document.getElementById("lightbox-close"),
            h = document.querySelectorAll(".lightbox"),
            g = document.getElementById("lightbox-caption")
          h.forEach((v) => {
            v.addEventListener("click", () => {
              ;(d.src = v.src),
                (g.textContent = v.alt),
                c.classList.remove("hidden")
            })
          }),
            f.addEventListener("click", () => {
              c.classList.add("hidden")
            })
        }
      qe(() => {
        ;(t.value = s.captions),
          (i.value = s.link),
          (r.value = s.title),
          (o.value = s.images),
          Sn(() => {
            a()
          })
      })
      const u = (c) => {
        let d = i.value == "" ? "text-center w-full " : ""
        return (d = d + l(c)), d
      }
      return (c, d) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              i.value == "",
            ]),
          },
          [
            p("div", jm, [
              p(
                "h2",
                {
                  class: k([
                    "text-5xl text-center text-semibold",
                    u(s.brightness),
                  ]),
                },
                Ce(r.value),
                3,
              ),
              i.value != ""
                ? (O(),
                  D(
                    "a",
                    { key: 0, href: i.value },
                    [
                      p(
                        "button",
                        {
                          class: k([
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
                    Lm,
                  ))
                : we("", !0),
            ]),
            p("div", Bm, [
              te(
                U(Tm),
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
                  default: me(() => [
                    (O(!0),
                    D(
                      pe,
                      null,
                      Ve(
                        o.value,
                        (f, h) => (
                          O(),
                          oe(
                            U(km),
                            { class: "image-container", key: h },
                            {
                              default: me(() => [
                                i.value != ""
                                  ? (O(),
                                    D(
                                      "a",
                                      { key: 0, href: i.value },
                                      [
                                        p(
                                          "img",
                                          {
                                            src: f,
                                            alt: t.value[h],
                                            class:
                                              "bg-slate-200 object-contain w-full rounded-xl",
                                          },
                                          null,
                                          8,
                                          Rm,
                                        ),
                                      ],
                                      8,
                                      Nm,
                                    ))
                                  : we("", !0),
                                i.value == ""
                                  ? (O(),
                                    D(
                                      "img",
                                      {
                                        key: 1,
                                        src: f,
                                        alt: t.value[h],
                                        class:
                                          "bg-slate-200 object-contain w-full rounded-xl",
                                      },
                                      null,
                                      8,
                                      zm,
                                    ))
                                  : we("", !0),
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
            d[0] ||
              (d[0] = nf(
                '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-4d27a375><div class="bg-white p-5 rounded shadow-lg" data-v-4d27a375><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-4d27a375><div class="flex justify-center" data-v-4d27a375><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-4d27a375></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-4d27a375> × </button></div></div>',
                1,
              )),
            p("div", Dm, [
              p("div", Fm, [
                (O(!0),
                D(
                  pe,
                  null,
                  Ve(
                    o.value,
                    (f, h) => (
                      O(),
                      D("div", { class: "image-container", key: h }, [
                        p(
                          "img",
                          {
                            src: f,
                            alt: t.value[h],
                            class:
                              "bg-slate-200 object-contain w-full rounded lightbox",
                          },
                          null,
                          8,
                          Hm,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            p(
              "div",
              { class: k([u(s.brightness), "prose pt-6"]) },
              [Ye(c.$slots, "default", {}, void 0, !0)],
              2,
            ),
            p(
              "hr",
              {
                class: k([
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
            p("div", Gm, [
              te(Cs, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  mt = fn(Vm, [["__scopeId", "data-v-4d27a375"]]),
  dl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  fl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  pl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  hl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  gl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  ml =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  bl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  vl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  yl =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  wl =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  Wm =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  qm =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  Um =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  Km =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  Ym =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898383454.webp",
  Xm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  Jm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  Zm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  Qm = "",
  eb = "",
  tb = { class: "px-3 text-center" },
  nb = { class: "text-right italic text-sm mb-0 pb-0" },
  sb = "",
  ib = "Web Design",
  rb = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (i) => {
          if (i >= 4) return "text-slate-800"
          if (i == 3) return "text-slate-200"
          if (i == 2) return "text-slate-300"
          if (i == 1) return "text-slate-300"
        },
        n = F([dl, ml, yl, hl, pl, vl, bl, gl, fl, wl]),
        s = F([
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
      return (i, r) => (
        O(),
        oe(
          mt,
          {
            images: n.value,
            captions: s.value,
            link: sb,
            title: ib,
            brightness: e.brightness,
          },
          {
            default: me(() => [
              Ye(i.$slots, "default", {}, () => [
                p(
                  "h2",
                  { class: k(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. I'll design yours too! ",
                  2,
                ),
                p("div", tb, [
                  r[2] ||
                    (r[2] = p(
                      "p",
                      null,
                      " Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. ",
                      -1,
                    )),
                  r[3] ||
                    (r[3] = p(
                      "p",
                      null,
                      " Don't just take my word for it though, here's what a UX professional has to say: ",
                      -1,
                    )),
                  p(
                    "div",
                    {
                      class: k([
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
                      r[0] ||
                        (r[0] = p(
                          "p",
                          null,
                          " Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just did it. He is incredible. ...I would recommend him to anyone with utmost confidence that he will surpass all expectations. ",
                          -1,
                        )),
                      p("p", nb, [
                        p("b", null, [
                          p(
                            "a",
                            {
                              class: k([t(e.brightness), "font-bold"]),
                              href: "https://www.linkedin.com/in/nathanwesjones/",
                            },
                            "Nathan Jones",
                            2,
                          ),
                        ]),
                      ]),
                      r[1] ||
                        (r[1] = p(
                          "p",
                          { class: "text-right italic text-sm mt-0 pt-0" },
                          " Senior Product Designer at nCino ",
                          -1,
                        )),
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
  lb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  ob = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  ab = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  ub = { href: "https://galaxyit.com/savings-calculator/" },
  cb = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  db = { href: "https://www.buildonyourlandllc.com/" },
  fb = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  pb = { href: "https://bazaar.blendernation.com" },
  hb = {
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
        O(),
        D("div", lb, [
          p("div", ob, [
            p(
              "h2",
              { class: k(["text-3xl mb-1", t(e.brightness)]) },
              " Need a custom pricing calculator? ",
              2,
            ),
            s[0] ||
              (s[0] = p(
                "div",
                { class: "image-container" },
                [
                  p("img", {
                    src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706989687978.webp",
                    alt: "Screenshot of GalaxyIT Pricing Calculator",
                    class: "bg-slate-200 object-contain w-full rounded-xl",
                  }),
                ],
                -1,
              )),
            p("div", ab, [
              p(
                "h3",
                { class: k(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT ",
                2,
              ),
              p("a", ub, [
                p(
                  "button",
                  {
                    class: k([
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
            p(
              "h2",
              { class: k(["text-3xl mb-1", t(e.brightness)]) },
              " What about dynamic hours? ",
              2,
            ),
            s[1] ||
              (s[1] = p(
                "div",
                { class: "image-container" },
                [
                  p("img", {
                    src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706990008524.webp",
                    alt: "Screenshot of Build on Your Land dynamic showroom hours",
                    class: "bg-slate-200 object-contain w-full rounded-xl",
                  }),
                ],
                -1,
              )),
            p("div", cb, [
              p(
                "h3",
                { class: k(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that ",
                2,
              ),
              p("a", db, [
                p(
                  "button",
                  {
                    class: k([
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
            p(
              "h2",
              { class: k(["text-3xl mb-1", t(e.brightness)]) },
              " Maybe you need a complex WordPress theme built from scratch? ",
              2,
            ),
            s[2] ||
              (s[2] = p(
                "div",
                { class: "image-container" },
                [
                  p("img", {
                    src: "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
                    alt: "Screenshot of BlenderNation Bazaar",
                    class: "bg-slate-200 object-contain w-full rounded-xl",
                  }),
                ],
                -1,
              )),
            p("div", fb, [
              p(
                "h3",
                { class: k(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              p("a", pb, [
                p(
                  "button",
                  {
                    class: k([
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
            p(
              "h2",
              { class: k(["text-5xl mb-1", t(e.brightness)]) },
              " No matter how complex your problem may be, I can fix it. ",
              2,
            ),
            p(
              "p",
              { class: k([t(e.brightness), "mt-2"]) },
              " I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff distracting you from your business. I'll take your problems off your plate and develop a solution. ",
              2,
            ),
          ]),
          p("hr", { class: k([t(e.brightness), "my-8"]) }, null, 2),
          te(Cs, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  gb = fn(hb, [["__scopeId", "data-v-c1141d27"]]),
  Rn = (e, t = 0, n = 1) => Sl(El(t, e), n),
  xl = (e) => {
    ;(e._clipped = !1), (e._unclipped = e.slice(0))
    for (let t = 0; t <= 3; t++)
      t < 3
        ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0),
          (e[t] = Rn(e[t], 0, 255)))
        : t === 3 && (e[t] = Rn(e[t], 0, 1))
    return e
  },
  Ku = {}
for (let e of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null",
])
  Ku[`[object ${e}]`] = e.toLowerCase()
function ve(e) {
  return Ku[Object.prototype.toString.call(e)] || "object"
}
const ye = (e, t = null) =>
    e.length >= 3
      ? Array.prototype.slice.call(e)
      : ve(e[0]) == "object" && t
        ? t
            .split("")
            .filter((n) => e[0][n] !== void 0)
            .map((n) => e[0][n])
        : e[0],
  Ei = (e) => {
    if (e.length < 2) return null
    const t = e.length - 1
    return ve(e[t]) == "string" ? e[t].toLowerCase() : null
  },
  { PI: Ci, min: Sl, max: El } = Math,
  Vt = Ci * 2,
  Yi = Ci / 3,
  mb = Ci / 180,
  bb = 180 / Ci,
  he = { format: {}, autodetect: [] }
class W {
  constructor(...t) {
    const n = this
    if (
      ve(t[0]) === "object" &&
      t[0].constructor &&
      t[0].constructor === this.constructor
    )
      return t[0]
    let s = Ei(t),
      i = !1
    if (!s) {
      ;(i = !0),
        he.sorted ||
          ((he.autodetect = he.autodetect.sort((r, o) => o.p - r.p)),
          (he.sorted = !0))
      for (let r of he.autodetect) if (((s = r.test(...t)), s)) break
    }
    if (he.format[s]) {
      const r = he.format[s].apply(null, i ? t : t.slice(0, -1))
      n._rgb = xl(r)
    } else throw new Error("unknown format: " + t)
    n._rgb.length === 3 && n._rgb.push(1)
  }
  toString() {
    return ve(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`
  }
}
const vb = "2.6.0",
  le = (...e) => new le.Color(...e)
le.Color = W
le.version = vb
const yb = (...e) => {
    e = ye(e, "cmyk")
    const [t, n, s, i] = e,
      r = e.length > 4 ? e[4] : 1
    return i === 1
      ? [0, 0, 0, r]
      : [
          t >= 1 ? 0 : 255 * (1 - t) * (1 - i),
          n >= 1 ? 0 : 255 * (1 - n) * (1 - i),
          s >= 1 ? 0 : 255 * (1 - s) * (1 - i),
          r,
        ]
  },
  { max: Fo } = Math,
  wb = (...e) => {
    let [t, n, s] = ye(e, "rgb")
    ;(t = t / 255), (n = n / 255), (s = s / 255)
    const i = 1 - Fo(t, Fo(n, s)),
      r = i < 1 ? 1 / (1 - i) : 0,
      o = (1 - t - i) * r,
      l = (1 - n - i) * r,
      a = (1 - s - i) * r
    return [o, l, a, i]
  }
W.prototype.cmyk = function () {
  return wb(this._rgb)
}
le.cmyk = (...e) => new W(...e, "cmyk")
he.format.cmyk = yb
he.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ye(e, "cmyk")), ve(e) === "array" && e.length === 4))
      return "cmyk"
  },
})
const Xi = (e) => Math.round(e * 100) / 100,
  xb = (...e) => {
    const t = ye(e, "hsla")
    let n = Ei(e) || "lsa"
    return (
      (t[0] = Xi(t[0] || 0)),
      (t[1] = Xi(t[1] * 100) + "%"),
      (t[2] = Xi(t[2] * 100) + "%"),
      n === "hsla" || (t.length > 3 && t[3] < 1)
        ? ((t[3] = t.length > 3 ? t[3] : 1), (n = "hsla"))
        : (t.length = 3),
      `${n}(${t.join(",")})`
    )
  },
  Yu = (...e) => {
    e = ye(e, "rgba")
    let [t, n, s] = e
    ;(t /= 255), (n /= 255), (s /= 255)
    const i = Sl(t, n, s),
      r = El(t, n, s),
      o = (r + i) / 2
    let l, a
    return (
      r === i
        ? ((l = 0), (a = Number.NaN))
        : (l = o < 0.5 ? (r - i) / (r + i) : (r - i) / (2 - r - i)),
      t == r
        ? (a = (n - s) / (r - i))
        : n == r
          ? (a = 2 + (s - t) / (r - i))
          : s == r && (a = 4 + (t - n) / (r - i)),
      (a *= 60),
      a < 0 && (a += 360),
      e.length > 3 && e[3] !== void 0 ? [a, l, o, e[3]] : [a, l, o]
    )
  },
  { round: Ji } = Math,
  Sb = (...e) => {
    const t = ye(e, "rgba")
    let n = Ei(e) || "rgb"
    return n.substr(0, 3) == "hsl"
      ? xb(Yu(t), n)
      : ((t[0] = Ji(t[0])),
        (t[1] = Ji(t[1])),
        (t[2] = Ji(t[2])),
        (n === "rgba" || (t.length > 3 && t[3] < 1)) &&
          ((t[3] = t.length > 3 ? t[3] : 1), (n = "rgba")),
        `${n}(${t.slice(0, n === "rgb" ? 3 : 4).join(",")})`)
  },
  { round: Zi } = Math,
  Ar = (...e) => {
    e = ye(e, "hsl")
    const [t, n, s] = e
    let i, r, o
    if (n === 0) i = r = o = s * 255
    else {
      const l = [0, 0, 0],
        a = [0, 0, 0],
        u = s < 0.5 ? s * (1 + n) : s + n - s * n,
        c = 2 * s - u,
        d = t / 360
      ;(l[0] = d + 1 / 3), (l[1] = d), (l[2] = d - 1 / 3)
      for (let f = 0; f < 3; f++)
        l[f] < 0 && (l[f] += 1),
          l[f] > 1 && (l[f] -= 1),
          6 * l[f] < 1
            ? (a[f] = c + (u - c) * 6 * l[f])
            : 2 * l[f] < 1
              ? (a[f] = u)
              : 3 * l[f] < 2
                ? (a[f] = c + (u - c) * (2 / 3 - l[f]) * 6)
                : (a[f] = c)
      ;[i, r, o] = [Zi(a[0] * 255), Zi(a[1] * 255), Zi(a[2] * 255)]
    }
    return e.length > 3 ? [i, r, o, e[3]] : [i, r, o, 1]
  },
  Xu = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
  Ju = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
  Zu =
    /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  Qu =
    /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  ec =
    /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  tc =
    /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  { round: Ho } = Math,
  Cl = (e) => {
    e = e.toLowerCase().trim()
    let t
    if (he.format.named)
      try {
        return he.format.named(e)
      } catch {}
    if ((t = e.match(Xu))) {
      const n = t.slice(1, 4)
      for (let s = 0; s < 3; s++) n[s] = +n[s]
      return (n[3] = 1), n
    }
    if ((t = e.match(Ju))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 4; s++) n[s] = +n[s]
      return n
    }
    if ((t = e.match(Zu))) {
      const n = t.slice(1, 4)
      for (let s = 0; s < 3; s++) n[s] = Ho(n[s] * 2.55)
      return (n[3] = 1), n
    }
    if ((t = e.match(Qu))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 3; s++) n[s] = Ho(n[s] * 2.55)
      return (n[3] = +n[3]), n
    }
    if ((t = e.match(ec))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Ar(n)
      return (s[3] = 1), s
    }
    if ((t = e.match(tc))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Ar(n)
      return (s[3] = +t[4]), s
    }
  }
Cl.test = (e) =>
  Xu.test(e) ||
  Ju.test(e) ||
  Zu.test(e) ||
  Qu.test(e) ||
  ec.test(e) ||
  tc.test(e)
W.prototype.css = function (e) {
  return Sb(this._rgb, e)
}
le.css = (...e) => new W(...e, "css")
he.format.css = Cl
he.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ve(e) === "string" && Cl.test(e)) return "css"
  },
})
he.format.gl = (...e) => {
  const t = ye(e, "rgba")
  return (t[0] *= 255), (t[1] *= 255), (t[2] *= 255), t
}
le.gl = (...e) => new W(...e, "gl")
W.prototype.gl = function () {
  const e = this._rgb
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
}
const { floor: Eb } = Math,
  Cb = (...e) => {
    e = ye(e, "hcg")
    let [t, n, s] = e,
      i,
      r,
      o
    s = s * 255
    const l = n * 255
    if (n === 0) i = r = o = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const a = Eb(t),
        u = t - a,
        c = s * (1 - n),
        d = c + l * (1 - u),
        f = c + l * u,
        h = c + l
      switch (a) {
        case 0:
          ;[i, r, o] = [h, f, c]
          break
        case 1:
          ;[i, r, o] = [d, h, c]
          break
        case 2:
          ;[i, r, o] = [c, h, f]
          break
        case 3:
          ;[i, r, o] = [c, d, h]
          break
        case 4:
          ;[i, r, o] = [f, c, h]
          break
        case 5:
          ;[i, r, o] = [h, c, d]
          break
      }
    }
    return [i, r, o, e.length > 3 ? e[3] : 1]
  },
  Tb = (...e) => {
    const [t, n, s] = ye(e, "rgb"),
      i = Sl(t, n, s),
      r = El(t, n, s),
      o = r - i,
      l = (o * 100) / 255,
      a = (i / (255 - o)) * 100
    let u
    return (
      o === 0
        ? (u = Number.NaN)
        : (t === r && (u = (n - s) / o),
          n === r && (u = 2 + (s - t) / o),
          s === r && (u = 4 + (t - n) / o),
          (u *= 60),
          u < 0 && (u += 360)),
      [u, l, a]
    )
  }
W.prototype.hcg = function () {
  return Tb(this._rgb)
}
le.hcg = (...e) => new W(...e, "hcg")
he.format.hcg = Cb
he.autodetect.push({
  p: 1,
  test: (...e) => {
    if (((e = ye(e, "hcg")), ve(e) === "array" && e.length === 3)) return "hcg"
  },
})
const kb = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  Pb = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
  nc = (e) => {
    if (e.match(kb)) {
      ;(e.length === 4 || e.length === 7) && (e = e.substr(1)),
        e.length === 3 &&
          ((e = e.split("")), (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]))
      const t = parseInt(e, 16),
        n = t >> 16,
        s = (t >> 8) & 255,
        i = t & 255
      return [n, s, i, 1]
    }
    if (e.match(Pb)) {
      ;(e.length === 5 || e.length === 9) && (e = e.substr(1)),
        e.length === 4 &&
          ((e = e.split("")),
          (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]))
      const t = parseInt(e, 16),
        n = (t >> 24) & 255,
        s = (t >> 16) & 255,
        i = (t >> 8) & 255,
        r = Math.round(((t & 255) / 255) * 100) / 100
      return [n, s, i, r]
    }
    throw new Error(`unknown hex color: ${e}`)
  },
  { round: js } = Math,
  sc = (...e) => {
    let [t, n, s, i] = ye(e, "rgba"),
      r = Ei(e) || "auto"
    i === void 0 && (i = 1),
      r === "auto" && (r = i < 1 ? "rgba" : "rgb"),
      (t = js(t)),
      (n = js(n)),
      (s = js(s))
    let l = "000000" + ((t << 16) | (n << 8) | s).toString(16)
    l = l.substr(l.length - 6)
    let a = "0" + js(i * 255).toString(16)
    switch (((a = a.substr(a.length - 2)), r.toLowerCase())) {
      case "rgba":
        return `#${l}${a}`
      case "argb":
        return `#${a}${l}`
      default:
        return `#${l}`
    }
  }
W.prototype.hex = function (e) {
  return sc(this._rgb, e)
}
le.hex = (...e) => new W(...e, "hex")
he.format.hex = nc
he.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (
      !t.length &&
      ve(e) === "string" &&
      [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
    )
      return "hex"
  },
})
const { cos: Tn } = Math,
  Ib = (...e) => {
    e = ye(e, "hsi")
    let [t, n, s] = e,
      i,
      r,
      o
    return (
      isNaN(t) && (t = 0),
      isNaN(n) && (n = 0),
      t > 360 && (t -= 360),
      t < 0 && (t += 360),
      (t /= 360),
      t < 1 / 3
        ? ((o = (1 - n) / 3),
          (i = (1 + (n * Tn(Vt * t)) / Tn(Yi - Vt * t)) / 3),
          (r = 1 - (o + i)))
        : t < 2 / 3
          ? ((t -= 1 / 3),
            (i = (1 - n) / 3),
            (r = (1 + (n * Tn(Vt * t)) / Tn(Yi - Vt * t)) / 3),
            (o = 1 - (i + r)))
          : ((t -= 2 / 3),
            (r = (1 - n) / 3),
            (o = (1 + (n * Tn(Vt * t)) / Tn(Yi - Vt * t)) / 3),
            (i = 1 - (r + o))),
      (i = Rn(s * i * 3)),
      (r = Rn(s * r * 3)),
      (o = Rn(s * o * 3)),
      [i * 255, r * 255, o * 255, e.length > 3 ? e[3] : 1]
    )
  },
  { min: Mb, sqrt: $b, acos: Ab } = Math,
  Ob = (...e) => {
    let [t, n, s] = ye(e, "rgb")
    ;(t /= 255), (n /= 255), (s /= 255)
    let i
    const r = Mb(t, n, s),
      o = (t + n + s) / 3,
      l = o > 0 ? 1 - r / o : 0
    return (
      l === 0
        ? (i = NaN)
        : ((i = (t - n + (t - s)) / 2),
          (i /= $b((t - n) * (t - n) + (t - s) * (n - s))),
          (i = Ab(i)),
          s > n && (i = Vt - i),
          (i /= Vt)),
      [i * 360, l, o]
    )
  }
W.prototype.hsi = function () {
  return Ob(this._rgb)
}
le.hsi = (...e) => new W(...e, "hsi")
he.format.hsi = Ib
he.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ye(e, "hsi")), ve(e) === "array" && e.length === 3)) return "hsi"
  },
})
W.prototype.hsl = function () {
  return Yu(this._rgb)
}
le.hsl = (...e) => new W(...e, "hsl")
he.format.hsl = Ar
he.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ye(e, "hsl")), ve(e) === "array" && e.length === 3)) return "hsl"
  },
})
const { floor: _b } = Math,
  jb = (...e) => {
    e = ye(e, "hsv")
    let [t, n, s] = e,
      i,
      r,
      o
    if (((s *= 255), n === 0)) i = r = o = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const l = _b(t),
        a = t - l,
        u = s * (1 - n),
        c = s * (1 - n * a),
        d = s * (1 - n * (1 - a))
      switch (l) {
        case 0:
          ;[i, r, o] = [s, d, u]
          break
        case 1:
          ;[i, r, o] = [c, s, u]
          break
        case 2:
          ;[i, r, o] = [u, s, d]
          break
        case 3:
          ;[i, r, o] = [u, c, s]
          break
        case 4:
          ;[i, r, o] = [d, u, s]
          break
        case 5:
          ;[i, r, o] = [s, u, c]
          break
      }
    }
    return [i, r, o, e.length > 3 ? e[3] : 1]
  },
  { min: Lb, max: Bb } = Math,
  Nb = (...e) => {
    e = ye(e, "rgb")
    let [t, n, s] = e
    const i = Lb(t, n, s),
      r = Bb(t, n, s),
      o = r - i
    let l, a, u
    return (
      (u = r / 255),
      r === 0
        ? ((l = Number.NaN), (a = 0))
        : ((a = o / r),
          t === r && (l = (n - s) / o),
          n === r && (l = 2 + (s - t) / o),
          s === r && (l = 4 + (t - n) / o),
          (l *= 60),
          l < 0 && (l += 360)),
      [l, a, u]
    )
  }
W.prototype.hsv = function () {
  return Nb(this._rgb)
}
le.hsv = (...e) => new W(...e, "hsv")
he.format.hsv = jb
he.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ye(e, "hsv")), ve(e) === "array" && e.length === 3)) return "hsv"
  },
})
const at = {
    Kn: 18,
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452,
  },
  { pow: Rb } = Math,
  ic = (...e) => {
    e = ye(e, "lab")
    const [t, n, s] = e
    let i, r, o, l, a, u
    return (
      (r = (t + 16) / 116),
      (i = isNaN(n) ? r : r + n / 500),
      (o = isNaN(s) ? r : r - s / 200),
      (r = at.Yn * er(r)),
      (i = at.Xn * er(i)),
      (o = at.Zn * er(o)),
      (l = Qi(3.2404542 * i - 1.5371385 * r - 0.4985314 * o)),
      (a = Qi(-0.969266 * i + 1.8760108 * r + 0.041556 * o)),
      (u = Qi(0.0556434 * i - 0.2040259 * r + 1.0572252 * o)),
      [l, a, u, e.length > 3 ? e[3] : 1]
    )
  },
  Qi = (e) => 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * Rb(e, 1 / 2.4) - 0.055),
  er = (e) => (e > at.t1 ? e * e * e : at.t2 * (e - at.t0)),
  { pow: rc } = Math,
  lc = (...e) => {
    const [t, n, s] = ye(e, "rgb"),
      [i, r, o] = zb(t, n, s),
      l = 116 * r - 16
    return [l < 0 ? 0 : l, 500 * (i - r), 200 * (r - o)]
  },
  tr = (e) =>
    (e /= 255) <= 0.04045 ? e / 12.92 : rc((e + 0.055) / 1.055, 2.4),
  nr = (e) => (e > at.t3 ? rc(e, 1 / 3) : e / at.t2 + at.t0),
  zb = (e, t, n) => {
    ;(e = tr(e)), (t = tr(t)), (n = tr(n))
    const s = nr((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / at.Xn),
      i = nr((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / at.Yn),
      r = nr((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / at.Zn)
    return [s, i, r]
  }
W.prototype.lab = function () {
  return lc(this._rgb)
}
le.lab = (...e) => new W(...e, "lab")
he.format.lab = ic
he.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ye(e, "lab")), ve(e) === "array" && e.length === 3)) return "lab"
  },
})
const { sin: Db, cos: Fb } = Math,
  oc = (...e) => {
    let [t, n, s] = ye(e, "lch")
    return isNaN(s) && (s = 0), (s = s * mb), [t, Fb(s) * n, Db(s) * n]
  },
  ac = (...e) => {
    e = ye(e, "lch")
    const [t, n, s] = e,
      [i, r, o] = oc(t, n, s),
      [l, a, u] = ic(i, r, o)
    return [l, a, u, e.length > 3 ? e[3] : 1]
  },
  Hb = (...e) => {
    const t = ye(e, "hcl").reverse()
    return ac(...t)
  },
  { sqrt: Gb, atan2: Vb, round: Wb } = Math,
  uc = (...e) => {
    const [t, n, s] = ye(e, "lab"),
      i = Gb(n * n + s * s)
    let r = (Vb(s, n) * bb + 360) % 360
    return Wb(i * 1e4) === 0 && (r = Number.NaN), [t, i, r]
  },
  cc = (...e) => {
    const [t, n, s] = ye(e, "rgb"),
      [i, r, o] = lc(t, n, s)
    return uc(i, r, o)
  }
W.prototype.lch = function () {
  return cc(this._rgb)
}
W.prototype.hcl = function () {
  return cc(this._rgb).reverse()
}
le.lch = (...e) => new W(...e, "lch")
le.hcl = (...e) => new W(...e, "hcl")
he.format.lch = ac
he.format.hcl = Hb
;["lch", "hcl"].forEach((e) =>
  he.autodetect.push({
    p: 2,
    test: (...t) => {
      if (((t = ye(t, e)), ve(t) === "array" && t.length === 3)) return e
    },
  }),
)
const Gn = {
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
}
W.prototype.name = function () {
  const e = sc(this._rgb, "rgb")
  for (let t of Object.keys(Gn)) if (Gn[t] === e) return t.toLowerCase()
  return e
}
he.format.named = (e) => {
  if (((e = e.toLowerCase()), Gn[e])) return nc(Gn[e])
  throw new Error("unknown color name: " + e)
}
he.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ve(e) === "string" && Gn[e.toLowerCase()]) return "named"
  },
})
const qb = (e) => {
    if (ve(e) == "number" && e >= 0 && e <= 16777215) {
      const t = e >> 16,
        n = (e >> 8) & 255,
        s = e & 255
      return [t, n, s, 1]
    }
    throw new Error("unknown num color: " + e)
  },
  Ub = (...e) => {
    const [t, n, s] = ye(e, "rgb")
    return (t << 16) + (n << 8) + s
  }
W.prototype.num = function () {
  return Ub(this._rgb)
}
le.num = (...e) => new W(...e, "num")
he.format.num = qb
he.autodetect.push({
  p: 5,
  test: (...e) => {
    if (
      e.length === 1 &&
      ve(e[0]) === "number" &&
      e[0] >= 0 &&
      e[0] <= 16777215
    )
      return "num"
  },
})
const { round: dc } = Math
W.prototype.rgb = function (e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(dc)
}
W.prototype.rgba = function (e = !0) {
  return this._rgb
    .slice(0, 4)
    .map((t, n) => (n < 3 ? (e === !1 ? t : dc(t)) : t))
}
le.rgb = (...e) => new W(...e, "rgb")
he.format.rgb = (...e) => {
  const t = ye(e, "rgba")
  return t[3] === void 0 && (t[3] = 1), t
}
he.autodetect.push({
  p: 3,
  test: (...e) => {
    if (
      ((e = ye(e, "rgba")),
      ve(e) === "array" &&
        (e.length === 3 ||
          (e.length === 4 && ve(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)))
    )
      return "rgb"
  },
})
const { log: Ls } = Math,
  fc = (e) => {
    const t = e / 100
    let n, s, i
    return (
      t < 66
        ? ((n = 255),
          (s =
            t < 6
              ? 0
              : -155.25485562709179 -
                0.44596950469579133 * (s = t - 2) +
                104.49216199393888 * Ls(s)),
          (i =
            t < 20
              ? 0
              : -254.76935184120902 +
                0.8274096064007395 * (i = t - 10) +
                115.67994401066147 * Ls(i)))
        : ((n =
            351.97690566805693 +
            0.114206453784165 * (n = t - 55) -
            40.25366309332127 * Ls(n)),
          (s =
            325.4494125711974 +
            0.07943456536662342 * (s = t - 50) -
            28.0852963507957 * Ls(s)),
          (i = 255)),
      [n, s, i, 1]
    )
  },
  { round: Kb } = Math,
  Yb = (...e) => {
    const t = ye(e, "rgb"),
      n = t[0],
      s = t[2]
    let i = 1e3,
      r = 4e4
    const o = 0.4
    let l
    for (; r - i > o; ) {
      l = (r + i) * 0.5
      const a = fc(l)
      a[2] / a[0] >= s / n ? (r = l) : (i = l)
    }
    return Kb(l)
  }
W.prototype.temp =
  W.prototype.kelvin =
  W.prototype.temperature =
    function () {
      return Yb(this._rgb)
    }
le.temp = le.kelvin = le.temperature = (...e) => new W(...e, "temp")
he.format.temp = he.format.kelvin = he.format.temperature = fc
const { pow: Vs, sign: Xb } = Math,
  pc = (...e) => {
    e = ye(e, "lab")
    const [t, n, s] = e,
      i = Vs(t + 0.3963377774 * n + 0.2158037573 * s, 3),
      r = Vs(t - 0.1055613458 * n - 0.0638541728 * s, 3),
      o = Vs(t - 0.0894841775 * n - 1.291485548 * s, 3)
    return [
      255 * sr(4.0767416621 * i - 3.3077115913 * r + 0.2309699292 * o),
      255 * sr(-1.2684380046 * i + 2.6097574011 * r - 0.3413193965 * o),
      255 * sr(-0.0041960863 * i - 0.7034186147 * r + 1.707614701 * o),
      e.length > 3 ? e[3] : 1,
    ]
  }
function sr(e) {
  const t = Math.abs(e)
  return t > 0.0031308
    ? (Xb(e) || 1) * (1.055 * Vs(t, 1 / 2.4) - 0.055)
    : e * 12.92
}
const { cbrt: ir, pow: Jb, sign: Zb } = Math,
  hc = (...e) => {
    const [t, n, s] = ye(e, "rgb"),
      [i, r, o] = [rr(t / 255), rr(n / 255), rr(s / 255)],
      l = ir(0.4122214708 * i + 0.5363325363 * r + 0.0514459929 * o),
      a = ir(0.2119034982 * i + 0.6806995451 * r + 0.1073969566 * o),
      u = ir(0.0883024619 * i + 0.2817188376 * r + 0.6299787005 * o)
    return [
      0.2104542553 * l + 0.793617785 * a - 0.0040720468 * u,
      1.9779984951 * l - 2.428592205 * a + 0.4505937099 * u,
      0.0259040371 * l + 0.7827717662 * a - 0.808675766 * u,
    ]
  }
function rr(e) {
  const t = Math.abs(e)
  return t < 0.04045 ? e / 12.92 : (Zb(e) || 1) * Jb((t + 0.055) / 1.055, 2.4)
}
W.prototype.oklab = function () {
  return hc(this._rgb)
}
le.oklab = (...e) => new W(...e, "oklab")
he.format.oklab = pc
he.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = ye(e, "oklab")), ve(e) === "array" && e.length === 3))
      return "oklab"
  },
})
const Qb = (...e) => {
    e = ye(e, "lch")
    const [t, n, s] = e,
      [i, r, o] = oc(t, n, s),
      [l, a, u] = pc(i, r, o)
    return [l, a, u, e.length > 3 ? e[3] : 1]
  },
  e1 = (...e) => {
    const [t, n, s] = ye(e, "rgb"),
      [i, r, o] = hc(t, n, s)
    return uc(i, r, o)
  }
W.prototype.oklch = function () {
  return e1(this._rgb)
}
le.oklch = (...e) => new W(...e, "oklch")
he.format.oklch = Qb
he.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = ye(e, "oklch")), ve(e) === "array" && e.length === 3))
      return "oklch"
  },
})
W.prototype.alpha = function (e, t = !1) {
  return e !== void 0 && ve(e) === "number"
    ? t
      ? ((this._rgb[3] = e), this)
      : new W([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
    : this._rgb[3]
}
W.prototype.clipped = function () {
  return this._rgb._clipped || !1
}
W.prototype.darken = function (e = 1) {
  const t = this,
    n = t.lab()
  return (n[0] -= at.Kn * e), new W(n, "lab").alpha(t.alpha(), !0)
}
W.prototype.brighten = function (e = 1) {
  return this.darken(-e)
}
W.prototype.darker = W.prototype.darken
W.prototype.brighter = W.prototype.brighten
W.prototype.get = function (e) {
  const [t, n] = e.split("."),
    s = this[t]()
  if (n) {
    const i = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0)
    if (i > -1) return s[i]
    throw new Error(`unknown channel ${n} in mode ${t}`)
  } else return s
}
const { pow: t1 } = Math,
  n1 = 1e-7,
  s1 = 20
W.prototype.luminance = function (e, t = "rgb") {
  if (e !== void 0 && ve(e) === "number") {
    if (e === 0) return new W([0, 0, 0, this._rgb[3]], "rgb")
    if (e === 1) return new W([255, 255, 255, this._rgb[3]], "rgb")
    let n = this.luminance(),
      s = s1
    const i = (o, l) => {
        const a = o.interpolate(l, 0.5, t),
          u = a.luminance()
        return Math.abs(e - u) < n1 || !s-- ? a : u > e ? i(o, a) : i(a, l)
      },
      r = (
        n > e ? i(new W([0, 0, 0]), this) : i(this, new W([255, 255, 255]))
      ).rgb()
    return new W([...r, this._rgb[3]])
  }
  return i1(...this._rgb.slice(0, 3))
}
const i1 = (e, t, n) => (
    (e = lr(e)), (t = lr(t)), (n = lr(n)), 0.2126 * e + 0.7152 * t + 0.0722 * n
  ),
  lr = (e) => (
    (e /= 255), e <= 0.03928 ? e / 12.92 : t1((e + 0.055) / 1.055, 2.4)
  ),
  Qe = {},
  vs = (e, t, n = 0.5, ...s) => {
    let i = s[0] || "lrgb"
    if ((!Qe[i] && !s.length && (i = Object.keys(Qe)[0]), !Qe[i]))
      throw new Error(`interpolation mode ${i} is not defined`)
    return (
      ve(e) !== "object" && (e = new W(e)),
      ve(t) !== "object" && (t = new W(t)),
      Qe[i](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
    )
  }
W.prototype.mix = W.prototype.interpolate = function (e, t = 0.5, ...n) {
  return vs(this, e, t, ...n)
}
W.prototype.premultiply = function (e = !1) {
  const t = this._rgb,
    n = t[3]
  return e
    ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
    : new W([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
}
W.prototype.saturate = function (e = 1) {
  const t = this,
    n = t.lch()
  return (
    (n[1] += at.Kn * e),
    n[1] < 0 && (n[1] = 0),
    new W(n, "lch").alpha(t.alpha(), !0)
  )
}
W.prototype.desaturate = function (e = 1) {
  return this.saturate(-e)
}
W.prototype.set = function (e, t, n = !1) {
  const [s, i] = e.split("."),
    r = this[s]()
  if (i) {
    const o = s.indexOf(i) - (s.substr(0, 2) === "ok" ? 2 : 0)
    if (o > -1) {
      if (ve(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            r[o] += +t
            break
          case "-":
            r[o] += +t
            break
          case "*":
            r[o] *= +t.substr(1)
            break
          case "/":
            r[o] /= +t.substr(1)
            break
          default:
            r[o] = +t
        }
      else if (ve(t) === "number") r[o] = t
      else throw new Error("unsupported value for Color.set")
      const l = new W(r, s)
      return n ? ((this._rgb = l._rgb), this) : l
    }
    throw new Error(`unknown channel ${i} in mode ${s}`)
  } else return r
}
W.prototype.tint = function (e = 0.5, ...t) {
  return vs(this, "white", e, ...t)
}
W.prototype.shade = function (e = 0.5, ...t) {
  return vs(this, "black", e, ...t)
}
const r1 = (e, t, n) => {
  const s = e._rgb,
    i = t._rgb
  return new W(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "rgb",
  )
}
Qe.rgb = r1
const { sqrt: or, pow: kn } = Math,
  l1 = (e, t, n) => {
    const [s, i, r] = e._rgb,
      [o, l, a] = t._rgb
    return new W(
      or(kn(s, 2) * (1 - n) + kn(o, 2) * n),
      or(kn(i, 2) * (1 - n) + kn(l, 2) * n),
      or(kn(r, 2) * (1 - n) + kn(a, 2) * n),
      "rgb",
    )
  }
Qe.lrgb = l1
const o1 = (e, t, n) => {
  const s = e.lab(),
    i = t.lab()
  return new W(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "lab",
  )
}
Qe.lab = o1
const Wn = (e, t, n, s) => {
    let i, r
    s === "hsl"
      ? ((i = e.hsl()), (r = t.hsl()))
      : s === "hsv"
        ? ((i = e.hsv()), (r = t.hsv()))
        : s === "hcg"
          ? ((i = e.hcg()), (r = t.hcg()))
          : s === "hsi"
            ? ((i = e.hsi()), (r = t.hsi()))
            : s === "lch" || s === "hcl"
              ? ((s = "hcl"), (i = e.hcl()), (r = t.hcl()))
              : s === "oklch" &&
                ((i = e.oklch().reverse()), (r = t.oklch().reverse()))
    let o, l, a, u, c, d
    ;(s.substr(0, 1) === "h" || s === "oklch") &&
      (([o, a, c] = i), ([l, u, d] = r))
    let f, h, g, v
    return (
      !isNaN(o) && !isNaN(l)
        ? (l > o && l - o > 180
            ? (v = l - (o + 360))
            : l < o && o - l > 180
              ? (v = l + 360 - o)
              : (v = l - o),
          (h = o + n * v))
        : isNaN(o)
          ? isNaN(l)
            ? (h = Number.NaN)
            : ((h = l), (c == 1 || c == 0) && s != "hsv" && (f = u))
          : ((h = o), (d == 1 || d == 0) && s != "hsv" && (f = a)),
      f === void 0 && (f = a + n * (u - a)),
      (g = c + n * (d - c)),
      s === "oklch" ? new W([g, f, h], s) : new W([h, f, g], s)
    )
  },
  gc = (e, t, n) => Wn(e, t, n, "lch")
Qe.lch = gc
Qe.hcl = gc
const a1 = (e, t, n) => {
  const s = e.num(),
    i = t.num()
  return new W(s + n * (i - s), "num")
}
Qe.num = a1
const u1 = (e, t, n) => Wn(e, t, n, "hcg")
Qe.hcg = u1
const c1 = (e, t, n) => Wn(e, t, n, "hsi")
Qe.hsi = c1
const d1 = (e, t, n) => Wn(e, t, n, "hsl")
Qe.hsl = d1
const f1 = (e, t, n) => Wn(e, t, n, "hsv")
Qe.hsv = f1
const p1 = (e, t, n) => {
  const s = e.oklab(),
    i = t.oklab()
  return new W(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "oklab",
  )
}
Qe.oklab = p1
const h1 = (e, t, n) => Wn(e, t, n, "oklch")
Qe.oklch = h1
const { pow: ar, sqrt: ur, PI: cr, cos: Go, sin: Vo, atan2: g1 } = Math,
  m1 = (e, t = "lrgb", n = null) => {
    const s = e.length
    n || (n = Array.from(new Array(s)).map(() => 1))
    const i =
      s /
      n.reduce(function (d, f) {
        return d + f
      })
    if (
      (n.forEach((d, f) => {
        n[f] *= i
      }),
      (e = e.map((d) => new W(d))),
      t === "lrgb")
    )
      return b1(e, n)
    const r = e.shift(),
      o = r.get(t),
      l = []
    let a = 0,
      u = 0
    for (let d = 0; d < o.length; d++)
      if (
        ((o[d] = (o[d] || 0) * n[0]),
        l.push(isNaN(o[d]) ? 0 : n[0]),
        t.charAt(d) === "h" && !isNaN(o[d]))
      ) {
        const f = (o[d] / 180) * cr
        ;(a += Go(f) * n[0]), (u += Vo(f) * n[0])
      }
    let c = r.alpha() * n[0]
    e.forEach((d, f) => {
      const h = d.get(t)
      c += d.alpha() * n[f + 1]
      for (let g = 0; g < o.length; g++)
        if (!isNaN(h[g]))
          if (((l[g] += n[f + 1]), t.charAt(g) === "h")) {
            const v = (h[g] / 180) * cr
            ;(a += Go(v) * n[f + 1]), (u += Vo(v) * n[f + 1])
          } else o[g] += h[g] * n[f + 1]
    })
    for (let d = 0; d < o.length; d++)
      if (t.charAt(d) === "h") {
        let f = (g1(u / l[d], a / l[d]) / cr) * 180
        for (; f < 0; ) f += 360
        for (; f >= 360; ) f -= 360
        o[d] = f
      } else o[d] = o[d] / l[d]
    return (c /= s), new W(o, t).alpha(c > 0.99999 ? 1 : c, !0)
  },
  b1 = (e, t) => {
    const n = e.length,
      s = [0, 0, 0, 0]
    for (let i = 0; i < e.length; i++) {
      const r = e[i],
        o = t[i] / n,
        l = r._rgb
      ;(s[0] += ar(l[0], 2) * o),
        (s[1] += ar(l[1], 2) * o),
        (s[2] += ar(l[2], 2) * o),
        (s[3] += l[3] * o)
    }
    return (
      (s[0] = ur(s[0])),
      (s[1] = ur(s[1])),
      (s[2] = ur(s[2])),
      s[3] > 0.9999999 && (s[3] = 1),
      new W(xl(s))
    )
  },
  { pow: v1 } = Math
function li(e) {
  let t = "rgb",
    n = le("#ccc"),
    s = 0,
    i = [0, 1],
    r = [],
    o = [0, 0],
    l = !1,
    a = [],
    u = !1,
    c = 0,
    d = 1,
    f = !1,
    h = {},
    g = !0,
    v = 1
  const x = function (C) {
      if (
        ((C = C || ["#fff", "#000"]),
        C &&
          ve(C) === "string" &&
          le.brewer &&
          le.brewer[C.toLowerCase()] &&
          (C = le.brewer[C.toLowerCase()]),
        ve(C) === "array")
      ) {
        C.length === 1 && (C = [C[0], C[0]]), (C = C.slice(0))
        for (let A = 0; A < C.length; A++) C[A] = le(C[A])
        r.length = 0
        for (let A = 0; A < C.length; A++) r.push(A / (C.length - 1))
      }
      return E(), (a = C)
    },
    y = function (C) {
      if (l != null) {
        const A = l.length - 1
        let I = 0
        for (; I < A && C >= l[I]; ) I++
        return I - 1
      }
      return 0
    }
  let m = (C) => C,
    b = (C) => C
  const w = function (C, A) {
    let I, $
    if ((A == null && (A = !1), isNaN(C) || C === null)) return n
    A
      ? ($ = C)
      : l && l.length > 2
        ? ($ = y(C) / (l.length - 2))
        : d !== c
          ? ($ = (C - c) / (d - c))
          : ($ = 1),
      ($ = b($)),
      A || ($ = m($)),
      v !== 1 && ($ = v1($, v)),
      ($ = o[0] + $ * (1 - o[0] - o[1])),
      ($ = Rn($, 0, 1))
    const j = Math.floor($ * 1e4)
    if (g && h[j]) I = h[j]
    else {
      if (ve(a) === "array")
        for (let G = 0; G < r.length; G++) {
          const q = r[G]
          if ($ <= q) {
            I = a[G]
            break
          }
          if ($ >= q && G === r.length - 1) {
            I = a[G]
            break
          }
          if ($ > q && $ < r[G + 1]) {
            ;($ = ($ - q) / (r[G + 1] - q)),
              (I = le.interpolate(a[G], a[G + 1], $, t))
            break
          }
        }
      else ve(a) === "function" && (I = a($))
      g && (h[j] = I)
    }
    return I
  }
  var E = () => (h = {})
  x(e)
  const P = function (C) {
    const A = le(w(C))
    return u && A[u] ? A[u]() : A
  }
  return (
    (P.classes = function (C) {
      if (C != null) {
        if (ve(C) === "array") (l = C), (i = [C[0], C[C.length - 1]])
        else {
          const A = le.analyze(i)
          C === 0 ? (l = [A.min, A.max]) : (l = le.limits(A, "e", C))
        }
        return P
      }
      return l
    }),
    (P.domain = function (C) {
      if (!arguments.length) return i
      ;(c = C[0]), (d = C[C.length - 1]), (r = [])
      const A = a.length
      if (C.length === A && c !== d)
        for (let I of Array.from(C)) r.push((I - c) / (d - c))
      else {
        for (let I = 0; I < A; I++) r.push(I / (A - 1))
        if (C.length > 2) {
          const I = C.map((j, G) => G / (C.length - 1)),
            $ = C.map((j) => (j - c) / (d - c))
          $.every((j, G) => I[G] === j) ||
            (b = (j) => {
              if (j <= 0 || j >= 1) return j
              let G = 0
              for (; j >= $[G + 1]; ) G++
              const q = (j - $[G]) / ($[G + 1] - $[G])
              return I[G] + q * (I[G + 1] - I[G])
            })
        }
      }
      return (i = [c, d]), P
    }),
    (P.mode = function (C) {
      return arguments.length ? ((t = C), E(), P) : t
    }),
    (P.range = function (C, A) {
      return x(C), P
    }),
    (P.out = function (C) {
      return (u = C), P
    }),
    (P.spread = function (C) {
      return arguments.length ? ((s = C), P) : s
    }),
    (P.correctLightness = function (C) {
      return (
        C == null && (C = !0),
        (f = C),
        E(),
        f
          ? (m = function (A) {
              const I = w(0, !0).lab()[0],
                $ = w(1, !0).lab()[0],
                j = I > $
              let G = w(A, !0).lab()[0]
              const q = I + ($ - I) * A
              let fe = G - q,
                ge = 0,
                _ = 1,
                R = 20
              for (; Math.abs(fe) > 0.01 && R-- > 0; )
                (function () {
                  return (
                    j && (fe *= -1),
                    fe < 0
                      ? ((ge = A), (A += (_ - A) * 0.5))
                      : ((_ = A), (A += (ge - A) * 0.5)),
                    (G = w(A, !0).lab()[0]),
                    (fe = G - q)
                  )
                })()
              return A
            })
          : (m = (A) => A),
        P
      )
    }),
    (P.padding = function (C) {
      return C != null ? (ve(C) === "number" && (C = [C, C]), (o = C), P) : o
    }),
    (P.colors = function (C, A) {
      arguments.length < 2 && (A = "hex")
      let I = []
      if (arguments.length === 0) I = a.slice(0)
      else if (C === 1) I = [P(0.5)]
      else if (C > 1) {
        const $ = i[0],
          j = i[1] - $
        I = y1(0, C).map((G) => P($ + (G / (C - 1)) * j))
      } else {
        e = []
        let $ = []
        if (l && l.length > 2)
          for (
            let j = 1, G = l.length, q = 1 <= G;
            q ? j < G : j > G;
            q ? j++ : j--
          )
            $.push((l[j - 1] + l[j]) * 0.5)
        else $ = i
        I = $.map((j) => P(j))
      }
      return le[A] && (I = I.map(($) => $[A]())), I
    }),
    (P.cache = function (C) {
      return C != null ? ((g = C), P) : g
    }),
    (P.gamma = function (C) {
      return C != null ? ((v = C), P) : v
    }),
    (P.nodata = function (C) {
      return C != null ? ((n = le(C)), P) : n
    }),
    P
  )
}
function y1(e, t, n) {
  let s = [],
    i = e < t,
    r = t
  for (let o = e; i ? o < r : o > r; i ? o++ : o--) s.push(o)
  return s
}
const w1 = function (e) {
    let t = [1, 1]
    for (let n = 1; n < e; n++) {
      let s = [1]
      for (let i = 1; i <= t.length; i++) s[i] = (t[i] || 0) + t[i - 1]
      t = s
    }
    return t
  },
  x1 = function (e) {
    let t, n, s, i
    if (((e = e.map((r) => new W(r))), e.length === 2))
      ([n, s] = e.map((r) => r.lab())),
        (t = function (r) {
          const o = [0, 1, 2].map((l) => n[l] + r * (s[l] - n[l]))
          return new W(o, "lab")
        })
    else if (e.length === 3)
      ([n, s, i] = e.map((r) => r.lab())),
        (t = function (r) {
          const o = [0, 1, 2].map(
            (l) =>
              (1 - r) * (1 - r) * n[l] + 2 * (1 - r) * r * s[l] + r * r * i[l],
          )
          return new W(o, "lab")
        })
    else if (e.length === 4) {
      let r
      ;([n, s, i, r] = e.map((o) => o.lab())),
        (t = function (o) {
          const l = [0, 1, 2].map(
            (a) =>
              (1 - o) * (1 - o) * (1 - o) * n[a] +
              3 * (1 - o) * (1 - o) * o * s[a] +
              3 * (1 - o) * o * o * i[a] +
              o * o * o * r[a],
          )
          return new W(l, "lab")
        })
    } else if (e.length >= 5) {
      let r, o, l
      ;(r = e.map((a) => a.lab())),
        (l = e.length - 1),
        (o = w1(l)),
        (t = function (a) {
          const u = 1 - a,
            c = [0, 1, 2].map((d) =>
              r.reduce((f, h, g) => f + o[g] * u ** (l - g) * a ** g * h[d], 0),
            )
          return new W(c, "lab")
        })
    } else
      throw new RangeError("No point in running bezier with only one color.")
    return t
  },
  S1 = (e) => {
    const t = x1(e)
    return (t.scale = () => li(t)), t
  },
  kt = (e, t, n) => {
    if (!kt[n]) throw new Error("unknown blend mode " + n)
    return kt[n](e, t)
  },
  pn = (e) => (t, n) => {
    const s = le(n).rgb(),
      i = le(t).rgb()
    return le.rgb(e(s, i))
  },
  hn = (e) => (t, n) => {
    const s = []
    return (
      (s[0] = e(t[0], n[0])), (s[1] = e(t[1], n[1])), (s[2] = e(t[2], n[2])), s
    )
  },
  E1 = (e) => e,
  C1 = (e, t) => (e * t) / 255,
  T1 = (e, t) => (e > t ? t : e),
  k1 = (e, t) => (e > t ? e : t),
  P1 = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)),
  I1 = (e, t) =>
    t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)),
  M1 = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)),
  $1 = (e, t) =>
    e === 255
      ? 255
      : ((e = (255 * (t / 255)) / (1 - e / 255)), e > 255 ? 255 : e)
kt.normal = pn(hn(E1))
kt.multiply = pn(hn(C1))
kt.screen = pn(hn(P1))
kt.overlay = pn(hn(I1))
kt.darken = pn(hn(T1))
kt.lighten = pn(hn(k1))
kt.dodge = pn(hn($1))
kt.burn = pn(hn(M1))
const { pow: A1, sin: O1, cos: _1 } = Math
function j1(e = 300, t = -1.5, n = 1, s = 1, i = [0, 1]) {
  let r = 0,
    o
  ve(i) === "array" ? (o = i[1] - i[0]) : ((o = 0), (i = [i, i]))
  const l = function (a) {
    const u = Vt * ((e + 120) / 360 + t * a),
      c = A1(i[0] + o * a, s),
      f = ((r !== 0 ? n[0] + a * r : n) * c * (1 - c)) / 2,
      h = _1(u),
      g = O1(u),
      v = c + f * (-0.14861 * h + 1.78277 * g),
      x = c + f * (-0.29227 * h - 0.90649 * g),
      y = c + f * (1.97294 * h)
    return le(xl([v * 255, x * 255, y * 255, 1]))
  }
  return (
    (l.start = function (a) {
      return a == null ? e : ((e = a), l)
    }),
    (l.rotations = function (a) {
      return a == null ? t : ((t = a), l)
    }),
    (l.gamma = function (a) {
      return a == null ? s : ((s = a), l)
    }),
    (l.hue = function (a) {
      return a == null
        ? n
        : ((n = a),
          ve(n) === "array"
            ? ((r = n[1] - n[0]), r === 0 && (n = n[1]))
            : (r = 0),
          l)
    }),
    (l.lightness = function (a) {
      return a == null
        ? i
        : (ve(a) === "array"
            ? ((i = a), (o = a[1] - a[0]))
            : ((i = [a, a]), (o = 0)),
          l)
    }),
    (l.scale = () => le.scale(l)),
    l.hue(n),
    l
  )
}
const L1 = "0123456789abcdef",
  { floor: B1, random: N1 } = Math,
  R1 = () => {
    let e = "#"
    for (let t = 0; t < 6; t++) e += L1.charAt(B1(N1() * 16))
    return new W(e, "hex")
  },
  { log: Wo, pow: z1, floor: D1, abs: F1 } = Math
function mc(e, t = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0,
  }
  return (
    ve(e) === "object" && (e = Object.values(e)),
    e.forEach((s) => {
      t && ve(s) === "object" && (s = s[t]),
        s != null &&
          !isNaN(s) &&
          (n.values.push(s),
          (n.sum += s),
          s < n.min && (n.min = s),
          s > n.max && (n.max = s),
          (n.count += 1))
    }),
    (n.domain = [n.min, n.max]),
    (n.limits = (s, i) => bc(n, s, i)),
    n
  )
}
function bc(e, t = "equal", n = 7) {
  ve(e) == "array" && (e = mc(e))
  const { min: s, max: i } = e,
    r = e.values.sort((l, a) => l - a)
  if (n === 1) return [s, i]
  const o = []
  if (
    (t.substr(0, 1) === "c" && (o.push(s), o.push(i)), t.substr(0, 1) === "e")
  ) {
    o.push(s)
    for (let l = 1; l < n; l++) o.push(s + (l / n) * (i - s))
    o.push(i)
  } else if (t.substr(0, 1) === "l") {
    if (s <= 0)
      throw new Error("Logarithmic scales are only possible for values > 0")
    const l = Math.LOG10E * Wo(s),
      a = Math.LOG10E * Wo(i)
    o.push(s)
    for (let u = 1; u < n; u++) o.push(z1(10, l + (u / n) * (a - l)))
    o.push(i)
  } else if (t.substr(0, 1) === "q") {
    o.push(s)
    for (let l = 1; l < n; l++) {
      const a = ((r.length - 1) * l) / n,
        u = D1(a)
      if (u === a) o.push(r[u])
      else {
        const c = a - u
        o.push(r[u] * (1 - c) + r[u + 1] * c)
      }
    }
    o.push(i)
  } else if (t.substr(0, 1) === "k") {
    let l
    const a = r.length,
      u = new Array(a),
      c = new Array(n)
    let d = !0,
      f = 0,
      h = null
    ;(h = []), h.push(s)
    for (let x = 1; x < n; x++) h.push(s + (x / n) * (i - s))
    for (h.push(i); d; ) {
      for (let y = 0; y < n; y++) c[y] = 0
      for (let y = 0; y < a; y++) {
        const m = r[y]
        let b = Number.MAX_VALUE,
          w
        for (let E = 0; E < n; E++) {
          const P = F1(h[E] - m)
          P < b && ((b = P), (w = E)), c[w]++, (u[y] = w)
        }
      }
      const x = new Array(n)
      for (let y = 0; y < n; y++) x[y] = null
      for (let y = 0; y < a; y++)
        (l = u[y]), x[l] === null ? (x[l] = r[y]) : (x[l] += r[y])
      for (let y = 0; y < n; y++) x[y] *= 1 / c[y]
      d = !1
      for (let y = 0; y < n; y++)
        if (x[y] !== h[y]) {
          d = !0
          break
        }
      ;(h = x), f++, f > 200 && (d = !1)
    }
    const g = {}
    for (let x = 0; x < n; x++) g[x] = []
    for (let x = 0; x < a; x++) (l = u[x]), g[l].push(r[x])
    let v = []
    for (let x = 0; x < n; x++) v.push(g[x][0]), v.push(g[x][g[x].length - 1])
    ;(v = v.sort((x, y) => x - y)), o.push(v[0])
    for (let x = 1; x < v.length; x += 2) {
      const y = v[x]
      !isNaN(y) && o.indexOf(y) === -1 && o.push(y)
    }
  }
  return o
}
const H1 = (e, t) => {
    ;(e = new W(e)), (t = new W(t))
    const n = e.luminance(),
      s = t.luminance()
    return n > s ? (n + 0.05) / (s + 0.05) : (s + 0.05) / (n + 0.05)
  },
  {
    sqrt: Ft,
    pow: Ne,
    min: G1,
    max: V1,
    atan2: qo,
    abs: Uo,
    cos: Bs,
    sin: Ko,
    exp: W1,
    PI: Yo,
  } = Math
function q1(e, t, n = 1, s = 1, i = 1) {
  var r = function (bt) {
      return (360 * bt) / (2 * Yo)
    },
    o = function (bt) {
      return (2 * Yo * bt) / 360
    }
  ;(e = new W(e)), (t = new W(t))
  const [l, a, u] = Array.from(e.lab()),
    [c, d, f] = Array.from(t.lab()),
    h = (l + c) / 2,
    g = Ft(Ne(a, 2) + Ne(u, 2)),
    v = Ft(Ne(d, 2) + Ne(f, 2)),
    x = (g + v) / 2,
    y = 0.5 * (1 - Ft(Ne(x, 7) / (Ne(x, 7) + Ne(25, 7)))),
    m = a * (1 + y),
    b = d * (1 + y),
    w = Ft(Ne(m, 2) + Ne(u, 2)),
    E = Ft(Ne(b, 2) + Ne(f, 2)),
    P = (w + E) / 2,
    C = r(qo(u, m)),
    A = r(qo(f, b)),
    I = C >= 0 ? C : C + 360,
    $ = A >= 0 ? A : A + 360,
    j = Uo(I - $) > 180 ? (I + $ + 360) / 2 : (I + $) / 2,
    G =
      1 -
      0.17 * Bs(o(j - 30)) +
      0.24 * Bs(o(2 * j)) +
      0.32 * Bs(o(3 * j + 6)) -
      0.2 * Bs(o(4 * j - 63))
  let q = $ - I
  ;(q = Uo(q) <= 180 ? q : $ <= I ? q + 360 : q - 360),
    (q = 2 * Ft(w * E) * Ko(o(q) / 2))
  const fe = c - l,
    ge = E - w,
    _ = 1 + (0.015 * Ne(h - 50, 2)) / Ft(20 + Ne(h - 50, 2)),
    R = 1 + 0.045 * P,
    L = 1 + 0.015 * P * G,
    xe = 30 * W1(-Ne((j - 275) / 25, 2)),
    je = -(2 * Ft(Ne(P, 7) / (Ne(P, 7) + Ne(25, 7)))) * Ko(2 * o(xe)),
    Le = Ft(
      Ne(fe / (n * _), 2) +
        Ne(ge / (s * R), 2) +
        Ne(q / (i * L), 2) +
        je * (ge / (s * R)) * (q / (i * L)),
    )
  return V1(0, G1(100, Le))
}
function U1(e, t, n = "lab") {
  ;(e = new W(e)), (t = new W(t))
  const s = e.get(n),
    i = t.get(n)
  let r = 0
  for (let o in s) {
    const l = (s[o] || 0) - (i[o] || 0)
    r += l * l
  }
  return Math.sqrt(r)
}
const K1 = (...e) => {
    try {
      return new W(...e), !0
    } catch {
      return !1
    }
  },
  Y1 = {
    cool() {
      return li([le.hsl(180, 1, 0.9), le.hsl(250, 0.7, 0.4)])
    },
    hot() {
      return li(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
    },
  },
  Ws = {
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
  }
for (let e of Object.keys(Ws)) Ws[e.toLowerCase()] = Ws[e]
Object.assign(le, {
  average: m1,
  bezier: S1,
  blend: kt,
  cubehelix: j1,
  mix: vs,
  interpolate: vs,
  random: R1,
  scale: li,
  analyze: mc,
  contrast: H1,
  deltaE: q1,
  distance: U1,
  limits: bc,
  valid: K1,
  scales: Y1,
  input: he,
  colors: Gn,
  brewer: Ws,
})
const X1 = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  J1 = { class: "flex flex-col items-center justify-center w-full" },
  Z1 = {
    class: "flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap",
    style: { gap: "5rem" },
  },
  Q1 = { viewBox: "0 0 36 36", class: "chart" },
  ev = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  tv = { viewBox: "0 0 36 36", class: "chart" },
  nv = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  sv = { id: "speedTable" },
  iv = { class: "flex" },
  rv = { class: "flex" },
  lv = {
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
  ov = Object.assign(lv, {
    __name: "PanelSpeed",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (a) => {
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        },
        s = (a) => {
          if (a >= 4) return "text-emerald-500 bg-emerald-950"
          if (a == 3) return "text-orange-200 bg-orange-950"
          if (a == 2) return "text-orange-500 bg-orange-950"
          if (a == 1) return "text-orange-400 bg-orange-950"
        },
        i = (a) => {
          if (a >= 4) return "border-emerald-500"
          if (a == 3) return "border-orange-200"
          if (a == 2) return "border-orange-500"
          if (a == 1) return "border-orange-400"
        },
        r = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        },
        o = Z(() => {
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
        l = (a) => {
          let u = document.querySelectorAll("tr"),
            c
          a == 5
            ? (c = le("#e2e8f0"))
            : a == 4
              ? (c = le("#cbd5e1"))
              : a == 3
                ? (c = le("#475569"))
                : a == 2
                  ? (c = le("#1e293b"))
                  : a == 1 && (c = le("#0f172a"))
          for (let d = 1; d < u.length; d++)
            d % 2 == 0
              ? (u[d].style.backgroundColor = c.brighten(0))
              : (u[d].style.backgroundColor = c.brighten(0.2))
        }
      return (
        qe(() => {
          l(t.brightness)
        }),
        st(
          () => t.brightness,
          (a, u) => {
            l(a)
          },
        ),
        (a, u) => (
          O(),
          D("div", X1, [
            p("div", J1, [
              p("div", Z1, [
                p(
                  "div",
                  { id: "perfChart", class: k(s(e.brightness)) },
                  [
                    (O(),
                    D("svg", Q1, [
                      u[0] ||
                        (u[0] = p(
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
                        )),
                      p(
                        "path",
                        {
                          class: k(["circle", i(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: o.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            a.circumference + " " + a.circumference,
                          "stroke-dashoffset": a.dashoffset,
                        },
                        null,
                        10,
                        ev,
                      ),
                    ])),
                    p(
                      "div",
                      {
                        id: "chartInner",
                        class: k(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 96 ",
                      2,
                    ),
                    p(
                      "p",
                      {
                        class: k([
                          "text-sm italic opacity-50 mt-3",
                          r(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      [
                        u[1] ||
                          (u[1] = ce(
                            " Google Page Speed desktop performance score for the Bazaar ",
                            -1,
                          )),
                        p(
                          "a",
                          {
                            href: "/portfolio/bazaar",
                            class: k(n(e.brightness)),
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
                p(
                  "div",
                  {
                    id: "perfChart",
                    class: k([s(e.brightness), "hidden sm:hidden md:block"]),
                  },
                  [
                    (O(),
                    D("svg", tv, [
                      u[2] ||
                        (u[2] = p(
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
                        )),
                      p(
                        "path",
                        {
                          class: k(["circle", i(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: o.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            a.circumference + " " + a.circumference,
                          "stroke-dashoffset": a.dashoffset2,
                        },
                        null,
                        10,
                        nv,
                      ),
                    ])),
                    p(
                      "div",
                      {
                        id: "chartInner",
                        class: k(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 99 ",
                      2,
                    ),
                    p(
                      "p",
                      {
                        class: k([
                          "text-sm italic opacity-50 mt-3",
                          r(e.brightness),
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
              p(
                "div",
                {
                  class: k([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    r(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  p(
                    "h2",
                    { class: k(["text-2xl m-0", r(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  p(
                    "h2",
                    { class: k(["text-5xl", r(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  u[8] ||
                    (u[8] = p(
                      "p",
                      null,
                      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
                      -1,
                    )),
                  u[9] ||
                    (u[9] = p(
                      "p",
                      null,
                      [
                        ce(
                          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
                        ),
                        p("b", null, "315 KB"),
                        ce(". That's half of the classic SNES game "),
                        p(
                          "em",
                          null,
                          "The Legend of Zelda: A Link to The Past",
                        ),
                        ce(
                          ", or 4% of the bandwidth it takes just to open Instagram. ",
                        ),
                      ],
                      -1,
                    )),
                  u[10] ||
                    (u[10] = p(
                      "p",
                      null,
                      "You want fast? Let's make it happen.",
                      -1,
                    )),
                  p(
                    "div",
                    {
                      class: k([
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
                    [
                      ...(u[3] ||
                        (u[3] = [
                          p("p", null, "DAMN your sites load fast...", -1),
                          p(
                            "p",
                            { class: "text-right italic text-sm mb-0 pb-0" },
                            [p("b", null, "- T. N., one of my clients")],
                            -1,
                          ),
                        ])),
                    ],
                    2,
                  ),
                  p("h3", { class: k(r(e.brightness)) }, "How I help", 2),
                  p("table", sv, [
                    u[6] ||
                      (u[6] = p(
                        "colgroup",
                        null,
                        [
                          p("col", { style: { width: "30%" } }),
                          p("col", { style: { width: "70%" } }),
                        ],
                        -1,
                      )),
                    p("thead", null, [
                      p("tr", null, [
                        p("th", null, [
                          p("div", iv, [
                            p(
                              "h4",
                              { class: k([r(e.brightness), "text-lg m-0"]) },
                              [
                                u[4] || (u[4] = ce(" Problem ", -1)),
                                te(
                                  U(n0),
                                  {
                                    size: "3rem",
                                    class: k([n(e.brightness), "inline mb-1"]),
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
                        p("th", null, [
                          p("div", rv, [
                            p(
                              "h4",
                              { class: k([r(e.brightness), "text-lg m-0"]) },
                              [
                                u[5] || (u[5] = ce(" What I can do ", -1)),
                                te(
                                  U(e0),
                                  {
                                    size: "3rem",
                                    class: k([n(e.brightness), "inline mb-1"]),
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
                    u[7] ||
                      (u[7] = p(
                        "tbody",
                        null,
                        [
                          p("tr", null, [
                            p("td", null, "Huge, resource-heavy images"),
                            p("td", null, [
                              ce(" Optimize your images. "),
                              p("b", null, "A lot. "),
                              ce(
                                "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
                              ),
                            ]),
                          ]),
                          p("tr", null, [
                            p("td", null, "Unused code, plugins, and assets"),
                            p(
                              "td",
                              null,
                              " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
                            ),
                          ]),
                          p("tr", null, [
                            p(
                              "td",
                              null,
                              "Inefficient, resource-heavy platforms",
                            ),
                            p(
                              "td",
                              null,
                              " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
                            ),
                          ]),
                          p("tr", null, [
                            p("td", null, "Uncached resources"),
                            p(
                              "td",
                              null,
                              " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
                            ),
                          ]),
                        ],
                        -1,
                      )),
                  ]),
                ],
                2,
              ),
              u[11] || (u[11] = p("div", { class: "h-6" }, null, -1)),
              te(Cs, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  av = fn(ov, [["__scopeId", "data-v-a139c5c2"]]),
  uv = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  cv = { class: "lg:w-6/12 sm:w-12/12" },
  dv = { class: "flex items-center w-full" },
  fv = { class: "flex items-center w-full" },
  pv = { class: "flex items-center w-full" },
  hv = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  gv = { class: "prose text-center" },
  mv = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      F(9274)
      const t = F(4709),
        n = F(new Date("2023-10-01")),
        s = F(new Date()),
        i = Z(
          () =>
            ((s.value.getFullYear() - n.value.getFullYear()) * 12 +
              (s.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        r = (a) => (a > 1e6 ? Math.round(a / 1e6).toString() + "m" : a),
        o = (a) => {
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        },
        l = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        }
      return (a, u) => (
        O(),
        D("div", uv, [
          p("div", cv, [
            p(
              "h2",
              { class: k(["text-left text-5xl", l(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            p(
              "p",
              {
                class: k([
                  "text-left text-sm italic opacity-50 mt-3",
                  l(e.brightness),
                ]),
              },
              [
                u[1] || (u[1] = ce(" Website already secure? ", -1)),
                p("b", null, [
                  p(
                    "a",
                    { href: "", class: k(o(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  u[0] || (u[0] = ce(" are you?", -1)),
                ]),
              ],
              2,
            ),
            p(
              "hr",
              { class: k(["mb-5 mt-1 w-6/12 opacity-25", l(e.brightness)]) },
              null,
              2,
            ),
            p(
              "div",
              { class: k(["prose", l(e.brightness)]) },
              [
                u[5] ||
                  (u[5] = p(
                    "p",
                    null,
                    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
                    -1,
                  )),
                u[6] ||
                  (u[6] = p(
                    "p",
                    null,
                    [p("b", null, " Don't worry, I can help!")],
                    -1,
                  )),
                u[7] ||
                  (u[7] = p(
                    "p",
                    null,
                    "My web security specialities include (but aren't limited to):",
                    -1,
                  )),
                p(
                  "div",
                  {
                    class: k([
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
                    p("div", dv, [
                      te(
                        U(Hs),
                        { class: k(["mr-2", o(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "h4",
                        { class: k(["font-bold m-0", l(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    u[2] ||
                      (u[2] = p(
                        "p",
                        null,
                        [
                          ce(
                            " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
                          ),
                          p("em", null, "very"),
                          ce(
                            " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
                          ),
                        ],
                        -1,
                      )),
                  ],
                  2,
                ),
                u[8] || (u[8] = p("div", { class: "h-3" }, null, -1)),
                p(
                  "div",
                  {
                    class: k([
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
                    p("div", fv, [
                      te(
                        U(Hs),
                        { size: "2rem", class: k(["mr-2", o(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "h4",
                        { class: k(["font-bold m-0", l(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    u[3] ||
                      (u[3] = p(
                        "p",
                        null,
                        [
                          ce(
                            " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
                          ),
                          p("em", null, "do"),
                          ce(
                            " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
                          ),
                        ],
                        -1,
                      )),
                  ],
                  2,
                ),
                u[9] || (u[9] = p("div", { class: "h-3" }, null, -1)),
                p(
                  "div",
                  {
                    class: k([
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
                    p("div", pv, [
                      te(
                        U(Hs),
                        { class: k(["mr-2", o(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "h4",
                        { class: k(["font-bold m-0", l(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    u[4] ||
                      (u[4] = p(
                        "p",
                        null,
                        " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
                        -1,
                      )),
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          p("div", hv, [
            p(
              "div",
              {
                class: k([
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
                p("div", gv, [
                  p(
                    "h3",
                    {
                      class: k([
                        "text-5xl font-monospace mt-6",
                        o(e.brightness),
                      ]),
                    },
                    Ce(r(i.value)) + "+ ",
                    3,
                  ),
                  p(
                    "h3",
                    { class: k(["text-xl", l(e.brightness)]) },
                    [
                      u[10] || (u[10] = ce(" attacks blocked on ", -1)),
                      p(
                        "a",
                        {
                          class: k(o(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  p(
                    "p",
                    {
                      class: k(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  p(
                    "p",
                    {
                      class: k(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    [
                      p(
                        "a",
                        { href: "", class: k(o(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      u[11] || (u[11] = ce(" about the Bazaar project ", -1)),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            u[12] || (u[12] = p("div", { class: "h-3" }, null, -1)),
            p("hr", { class: k(["opacity-50", l(e.brightness)]) }, null, 2),
            u[13] || (u[13] = p("div", { class: "h-3" }, null, -1)),
            te(Cs, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  bv = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  vv = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  yv = { class: "flex w-full" },
  wv = { class: "flex w-full pt-4 gap-2" },
  xv = { class: "w-6/12" },
  Sv = { class: "w-6/12" },
  Ev = { class: "w-full flex" },
  Cv = { class: "w-6/12" },
  Tv = { class: "w-6/12 pb-3" },
  kv = {
    __name: "PanelAccessibility",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (u) => {
          if (u >= 4) return "text-emerald-500"
          if (u == 3) return "text-orange-200"
          if (u == 2) return "text-orange-500"
          if (u == 1) return "text-orange-400"
        },
        s = F(!1),
        i = Z(() =>
          s.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        r = Z(() =>
          s.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        o = (u) => {
          if (u >= 4) return "text-slate-800"
          if (u == 3) return "text-slate-200"
          if (u == 2) return "text-slate-300"
          if (u == 1) return "text-slate-300"
        },
        l = (u) => {
          let c = document.querySelectorAll("tr"),
            d
          u == 5
            ? (d = le("#e2e8f0"))
            : u == 4
              ? (d = le("#cbd5e1"))
              : u == 3
                ? (d = le("#475569"))
                : u == 2
                  ? (d = le("#1e293b"))
                  : u == 1 && (d = le("#0f172a"))
          for (let f = 1; f < c.length; f++)
            f % 2 == 0
              ? (c[f].style.backgroundColor = d.brighten(0))
              : (c[f].style.backgroundColor = d.brighten(0.2))
        },
        a = () => {
          ;(s.value = !s.value), s.value
        }
      return (
        qe(() => {
          l(t.brightness)
        }),
        st(
          () => t.brightness,
          (u, c) => {
            l(u)
          },
        ),
        (u, c) => (
          O(),
          D("div", bv, [
            p("div", vv, [
              p(
                "h2",
                { class: k(["text-5xl", o(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              p(
                "h3",
                { class: k(["text-2xl", o(e.brightness)]) },
                "Does yours?",
                2,
              ),
              p(
                "h4",
                { class: k(o(e.brightness)) },
                [
                  c[0] || (c[0] = ce(" What are the ", -1)),
                  p(
                    "a",
                    {
                      class: k(["font-bold", n(e.brightness)]),
                      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    "Web Content Accessibility Guidelines?",
                    2,
                  ),
                ],
                2,
              ),
              p(
                "p",
                { class: k(o(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              p(
                "p",
                { class: k(o(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              p(
                "h4",
                { class: k(o(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              p(
                "p",
                { class: k(o(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              p(
                "p",
                { class: k(o(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              p("div", yv, [
                p(
                  "button",
                  {
                    class: k([
                      {
                        "bg-emerald-600 text-slate-200": e.brightness >= 4,
                        "bg-slate-500 text-slate-200": e.brightness == 3,
                        "bg-orange-600 text-slate-800": e.brightness == 2,
                        "bg-orange-500 text-slate-800": e.brightness == 1,
                      },
                      "text-xl font-semibold rounded px-5 py-2 w-full flex align-middle",
                    ]),
                    onClick: a,
                  },
                  [
                    s.value ? (O(), oe(U(Au), { key: 0 })) : we("", !0),
                    s.value ? we("", !0) : (O(), oe(U(Uh), { key: 1 })),
                    c[1] ||
                      (c[1] = ce(
                        " Toggle red/green color blind/screen reader mode ",
                        -1,
                      )),
                  ],
                  2,
                ),
              ]),
              p("div", wv, [
                p("div", xv, [
                  p(
                    "button",
                    { class: k(["rounded px-5 py-2 w-full", i.value]) },
                    [s.value ? (O(), oe(U(Oo), { key: 0 })) : we("", !0)],
                    2,
                  ),
                ]),
                p("div", Sv, [
                  p(
                    "button",
                    { class: k(["rounded px-5 py-2 w-full", r.value]) },
                    [s.value ? (O(), oe(U(Pr), { key: 0 })) : we("", !0)],
                    2,
                  ),
                ]),
              ]),
              p(
                "h4",
                { class: k(["text-2xl", o(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              p("div", Ev, [
                p("div", Cv, [
                  p(
                    "button",
                    {
                      class: k([
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
                    [c[2] || (c[2] = ce(" Submit ", -1)), te(U(Oo))],
                    2,
                  ),
                ]),
                p("div", Tv, [
                  p(
                    "button",
                    {
                      class: k([
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
                    [c[3] || (c[3] = ce(" Cancel ", -1)), te(U(Pr))],
                    2,
                  ),
                ]),
              ]),
              p(
                "p",
                { class: k(o(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              p(
                "p",
                { class: k(o(e.brightness)) },
                [
                  ...(c[4] ||
                    (c[4] = [
                      ce(
                        " Changes like these may seem small, but they make a ",
                        -1,
                      ),
                      p("em", null, "huge", -1),
                      ce(
                        " difference for the usability of your site. Let me help you be in the 2%. ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
            ]),
            c[5] || (c[5] = p("div", { class: "h-6" }, null, -1)),
            te(Cs, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Pv = ["onMouseover"],
  Iv = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = F([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = F(0)
      const s = (r, o, l, a) => {
          if (o) {
            if (r == 5) return l === a ? "bg-emerald-600" : "bg-emerald-500"
            if (r == 4) return l === a ? "bg-emerald-600" : "bg-emerald-500"
            if (r == 3 || r == 1)
              return l === a ? "bg-orange-500" : "bg-orange-400"
            if (r == 2) return "bg-orange-600"
          } else if (l === a) {
            if (r == 5) return "bg-slate-300"
            if (r == 4) return "bg-slate-400"
            if (r == 3) return "bg-slate-700"
            if (r == 2) return "bg-slate-900"
            if (r == 1) return "bg-black"
          } else {
            if (r == 5) return "bg-slate-200"
            if (r == 4) return "bg-slate-300"
            if (r == 3) return "bg-slate-600"
            if (r == 2) return "bg-slate-800"
            if (r == 1) return "bg-slate-900"
          }
        },
        i = (r, o) => {
          if (o) return r >= 3 ? "text-slate-200" : "text-slate-800"
          if (r >= 4) return "text-emerald-500"
          if (r == 3) return "text-orange-200"
          if (r == 2) return "text-orange-500"
          if (r == 1) return "text-orange-400"
        }
      return (r, o) => (
        O(),
        oe(U(mp), null, {
          default: me(() => [
            te(
              U(bp),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: me(() => [
                  (O(!0),
                  D(
                    pe,
                    null,
                    Ve(
                      t.value,
                      (l) => (
                        O(),
                        oe(
                          U(vp),
                          {
                            key: l.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: me(({ selected: a }) => [
                              p(
                                "div",
                                {
                                  class: k([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    s(e.brightness, a, U(n), l.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (u) =>
                                    De(n) ? (n.value = l.id) : (n = l.id),
                                  onMouseleave:
                                    o[0] ||
                                    (o[0] = (u) =>
                                      De(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  l.id == 0
                                    ? (O(),
                                      oe(
                                        U(Hs),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: k(i(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : we("", !0),
                                  l.id == 1
                                    ? (O(),
                                      oe(
                                        U(Yh),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: k(i(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : we("", !0),
                                  l.id == 4
                                    ? (O(),
                                      oe(
                                        U(Kh),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: k(i(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : we("", !0),
                                  l.id == 3
                                    ? (O(),
                                      oe(
                                        U(Qh),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: k(i(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : we("", !0),
                                  l.id == 5
                                    ? (O(),
                                      oe(
                                        U(Au),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: k(i(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : we("", !0),
                                  p(
                                    "p",
                                    {
                                      class: k([
                                        "font-semibold cursor-pointer",
                                        i(e.brightness, a),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Ce(l.title),
                                    3,
                                  ),
                                ],
                                42,
                                Pv,
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
            te(
              U(yp),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: me(() => [
                  te(
                    U(Yn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: me(() => [
                        te(av, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  te(
                    U(Yn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: me(() => [
                        te(mv, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  te(
                    U(Yn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: me(() => [
                        te(gb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  te(
                    U(Yn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: me(() => [
                        te(rb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  te(
                    U(Yn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: me(() => [
                        te(kv, { brightness: e.brightness }, null, 8, [
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
  Mv = { href: "/pricing" },
  $v = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = F(!1)
      qe(() => {
        const s = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", s),
          Zt(() => {
            window.removeEventListener("scroll", s)
          })
      })
      const n = (s) => {
        if (s >= 4) return "text-slate-800"
        if (s == 3) return "text-slate-200"
        if (s == 2) return "text-slate-300"
        if (s == 1) return "text-slate-300"
      }
      return (s, i) => (
        O(),
        D(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: k([
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
            p(
              "p",
              { class: k(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            p("a", Mv, [
              p(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
                  class: k([
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
  Av = { class: "flex-col" },
  Ov = { class: "prose py-5 flex-col w-full" },
  _v = { class: "flex" },
  jv = { class: "w-6/12" },
  Lv = ["name", "checked", "onClick"],
  Bv = { class: "w-6/12" },
  Nv = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Rv = { class: "flex-col gap-4" },
  zv = { class: "flex items-center" },
  Dv = ["name", "checked", "onClick"],
  Fv = { key: 0 },
  Hv = { key: 1 },
  Gv = { class: "" },
  Vv = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Wv = { class: "flex-col" },
  qv = { class: "flex justify-between" },
  Uv = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Kv = { class: "gap-4 mt-4", name: "pricing" },
  Yv = ["value"],
  Xv = ["value"],
  Jv = { class: "flex gap-4", id: "leftInputs" },
  Zv = { class: "flex gap-4", id: "rightInputs" },
  Qv = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (_) => {
          _.preventDefault()
          const R = "pricing"
          let L = document.getElementsByName("name")[0].value,
            xe = document.getElementsByName("email")[0].value,
            be = document.getElementsByName("website")[0].value,
            je = document.getElementsByName("notes")[0].value,
            Le = document.getElementsByName("services")[0].value,
            bt = document.getElementsByName("total")[0].value,
            tn = window.location.href,
            vt = new XMLHttpRequest()
          vt.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            vt.setRequestHeader("Content-Type", "application/json"),
            vt.send(
              JSON.stringify({
                form: R,
                name: L,
                email: xe,
                website: be,
                notes: je,
                services: Le,
                total: bt,
                referrer: tn,
              }),
            ),
            (vt.onloadend = function () {
              if (
                (console.log(
                  `Status: ${vt.status}, Response: ${vt.responseText}`,
                ),
                vt.status == 200)
              ) {
                let rt = document.getElementsByName(R)[0],
                  B = document.createElement("div")
                B.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (B.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  rt.appendChild(B)
                let ee = document.getElementById("leftInputs"),
                  X = document.getElementById("rightInputs")
                ;(ee.style.display = "none"), (X.style.display = "none")
                let se = document.getElementById("submitButton")
                se.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        s = (_) => {
          if (_ >= 4) return "text-emerald-500"
          if (_ == 3) return "text-orange-200"
          if (_ == 2) return "text-orange-500"
          if (_ == 1) return "text-orange-400"
        },
        i = (_) => {
          if (_ >= 4) return "text-emerald-500"
          if (_ == 3) return "text-slate-800"
          if (_ == 2) return "text-orange-500"
          if (_ == 1) return "text-orange-400"
        },
        r = (_) => {
          if (_ >= 4) return "border-emerald-500"
          if (_ == 3) return "border-orange-200"
          if (_ == 2) return "border-orange-500"
          if (_ == 1) return "border-orange-400"
        },
        o = (_) => {
          if (_ >= 4) return "text-slate-800"
          if (_ == 3) return "text-slate-200"
          if (_ == 2) return "text-slate-300"
          if (_ == 1) return "text-slate-300"
        },
        l = F({
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
        a = Z(() =>
          l.value.speed.audit.enabled &&
          l.value.speed.optimize.enabled &&
          l.value.speed.caching.enabled &&
          l.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        u = Z(() =>
          l.value.security.audit.enabled &&
          l.value.security.ddosprotection.enabled &&
          l.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        c = Z(() =>
          l.value.accessibility.audit.enabled &&
          l.value.accessibility.levelA.enabled &&
          l.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        d = Z(() => 3 / 3),
        f = Z(
          () =>
            Object.values(l.value.speed).reduce(
              (_, R) => _ + (R.enabled ? R.price : 0),
              0,
            ) * a.value,
        ),
        h = Z(
          () =>
            Object.values(l.value.security).reduce(
              (_, R) => _ + (R.enabled ? R.price : 0),
              0,
            ) * u.value,
        ),
        g = Z(
          () =>
            Object.values(l.value.accessibility).reduce(
              (_, R) => _ + (R.enabled ? R.price : 0),
              0,
            ) * c.value,
        ),
        v = Z(
          () =>
            Object.values(l.value.designOverhaul).reduce(
              (_, R) => _ + (R.enabled ? R.price : 0),
              0,
            ) * d.value,
        ),
        x = Z(() => {
          let _ = 0
          for (const [R, L] of Object.entries(l.value.speed))
            L.enabled && (_ += L.price)
          return _
        }),
        y = Z(() => {
          let _ = 0
          for (const [R, L] of Object.entries(l.value.security))
            L.enabled && (_ += L.price)
          return _
        }),
        m = Z(() => {
          let _ = 0
          for (const [R, L] of Object.entries(l.value.accessibility))
            L.enabled && (_ += L.price)
          return _
        }),
        b = Z(() => {
          let _ = 0
          for (const [R, L] of Object.entries(l.value.designOverhaul))
            L.enabled && (_ += L.price)
          return _
        }),
        w = () => {
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
        E = () => {
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
        P = () => {
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
        C = () => {
          l.value.designOverhaul.designOverhaul.enabled
            ? (l.value.designOverhaul.designOverhaul.enabled = !1)
            : (l.value.designOverhaul.designOverhaul.enabled = !0)
        },
        A = (_) => {
          _.title == "Speed"
            ? w()
            : _.title == "Security"
              ? E()
              : _.title == "Accessibility"
                ? P()
                : _.title == "Design Overhaul" && C()
        },
        I = (_) => Object.values(_.services).some((R) => R.enabled),
        $ = F([
          {
            title: "Speed",
            services: l.value.speed,
            enabled: !0,
            discount: a.value,
          },
          {
            title: "Security",
            services: l.value.security,
            enabled: !1,
            discount: u.value,
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
            discount: d.value,
          },
        ]),
        j = (_) => {
          if (_.title === "Speed") return f.value
          if (_.title === "Security") return h.value
          if (_.title === "Accessibility") return g.value
          if (_.title === "Design Overhaul") return v.value
        },
        G = (_) => {
          if (_.title === "Speed") return x.value
          if (_.title === "Security") return y.value
          if (_.title === "Accessibility") return m.value
          if (_.title === "Design Overhaul") return b.value
        },
        q = Z(
          () => j($.value[0]) + j($.value[1]) + j($.value[2]) + j($.value[3]),
        ),
        fe = Z(() => {
          let _ = []
          for (const [R, L] of Object.entries(l.value.speed))
            L.enabled && _.push(L.title)
          for (const [R, L] of Object.entries(l.value.security))
            L.enabled && _.push(L.title)
          for (const [R, L] of Object.entries(l.value.accessibility))
            L.enabled && _.push(L.title)
          for (const [R, L] of Object.entries(l.value.designOverhaul))
            L.enabled && _.push(L.title)
          return _
        }),
        ge = (_) => {
          let R = ""
          return (
            (R += r(_)),
            _ == 5
              ? (R += " bg-slate-100")
              : _ == 4
                ? (R += " bg-slate-400")
                : _ == 3
                  ? (R += " bg-slate-500")
                  : _ == 2
                    ? (R += " bg-slate-700")
                    : _ == 1 && (R += " bg-slate-800"),
            R
          )
        }
      return (_, R) => (
        O(),
        D("div", Av, [
          p("div", Ov, [
            p(
              "h2",
              {
                class: k([
                  "text-5xl text-center text-semibold",
                  o(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            p(
              "p",
              { class: k(["text-center", o(n.brightness)]) },
              [
                R[0] ||
                  (R[0] = ce(
                    " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                    -1,
                  )),
                R[1] || (R[1] = p("br", null, null, -1)),
                R[2] || (R[2] = p("br", null, null, -1)),
                R[3] ||
                  (R[3] = ce(
                    " These services are for your existing website- if you're looking for a new site, ",
                    -1,
                  )),
                p(
                  "a",
                  {
                    href: "/contact",
                    class: k(["font-bold", s(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                R[4] || (R[4] = ce(" for a custom quote. ", -1)),
              ],
              2,
            ),
          ]),
          (O(!0),
          D(
            pe,
            null,
            Ve(
              $.value,
              (L, xe) => (
                O(),
                D(
                  "div",
                  {
                    key: xe,
                    class: k([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      ge(n.brightness),
                    ]),
                  },
                  [
                    p("div", _v, [
                      p("div", jv, [
                        p(
                          "div",
                          {
                            class: k([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              o(n.brightness),
                            ]),
                          },
                          [
                            p(
                              "input",
                              {
                                type: "checkbox",
                                name: L.title,
                                checked: I(L),
                                onClick: (be) => A(L),
                                class: k([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  s(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Lv,
                            ),
                            p("h3", null, Ce(L.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      p("div", Bv, [
                        p(
                          "h3",
                          {
                            class: k([
                              "text-4xl text-bold text-right",
                              s(n.brightness),
                            ]),
                          },
                          [
                            G(L) != Math.floor(j(L))
                              ? (O(), D("span", Nv, "$" + Ce(G(L)), 1))
                              : we("", !0),
                            ce("$" + Ce(j(L)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    p(
                      "hr",
                      { class: k(["my-4 w-full", s(n.brightness)]) },
                      null,
                      2,
                    ),
                    p("div", Rv, [
                      (O(!0),
                      D(
                        pe,
                        null,
                        Ve(
                          L.services,
                          (be, je) => (
                            O(),
                            D(
                              "div",
                              {
                                key: je,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                p("div", zv, [
                                  p(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: be.title,
                                      checked: be.enabled,
                                      onClick: (Le) =>
                                        (be.enabled = !be.enabled),
                                      class: k([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        s(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    Dv,
                                  ),
                                  p(
                                    "p",
                                    { class: k(["", o(n.brightness)]) },
                                    [
                                      be.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (O(),
                                          D("b", Fv, [
                                            p("em", null, Ce(be.title), 1),
                                          ]))
                                        : (O(), D("span", Hv, Ce(be.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                p("div", Gv, [
                                  p(
                                    "h3",
                                    {
                                      class: k([
                                        "text-bold text-right",
                                        s(n.brightness),
                                      ]),
                                    },
                                    [
                                      be.price !=
                                      Math.floor(be.price * L.discount)
                                        ? (O(),
                                          D("span", Vv, "$" + Ce(be.price), 1))
                                        : we("", !0),
                                      ce("$" + Ce(be.price * L.discount), 1),
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
          p("hr", { class: k(["my-4 w-full", s(n.brightness)]) }, null, 2),
          p("div", Wv, [
            p("div", qv, [
              p(
                "h3",
                { class: k(["text-4xl text-bold", s(n.brightness)]) },
                " Total ",
                2,
              ),
              p(
                "h3",
                { class: k(["text-4xl text-bold", s(n.brightness)]) },
                [
                  q.value != Math.floor(q.value)
                    ? (O(), D("span", Uv, "$" + Ce(q.value), 1))
                    : we("", !0),
                  ce("$" + Ce(q.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          p("form", Kv, [
            p(
              "input",
              { type: "hidden", name: "services", value: fe.value },
              null,
              8,
              Yv,
            ),
            p(
              "input",
              { type: "hidden", name: "total", value: q.value },
              null,
              8,
              Xv,
            ),
            p("div", Jv, [
              p(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: k([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    i(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              p(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: k([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    i(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            p("div", Zv, [
              p(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: k([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    i(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              p(
                "textarea",
                {
                  name: "notes",
                  placeholder: "Notes",
                  class: k([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    i(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            p(
              "button",
              {
                "aria-label": "Submit a contact form",
                id: "submitButton",
                type: "submit",
                class: k([
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
          p(
            "p",
            { class: k(["text-center mt-4", o(n.brightness)]) },
            [
              R[5] ||
                (R[5] = ce(
                  " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
                  -1,
                )),
              R[6] || (R[6] = p("br", null, null, -1)),
              R[7] || (R[7] = p("br", null, null, -1)),
              R[8] ||
                (R[8] = ce(
                  "These are one-time services; for ongoing maintenance, please ",
                  -1,
                )),
              p(
                "a",
                { href: "/contact", class: k(["font-bold", s(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              R[9] || (R[9] = ce(" and we can get that figured out.", -1)),
              R[10] || (R[10] = p("br", null, null, -1)),
              R[11] || (R[11] = p("br", null, null, -1)),
              R[12] || (R[12] = ce("I look forward to working with you! ", -1)),
            ],
            2,
          ),
        ])
      )
    },
  },
  e2 = fn(Qv, [["__scopeId", "data-v-e20b9d11"]]),
  t2 = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(), oe(e2, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  n2 = { class: "flex-col max-w-2xl mx-auto px-4" },
  s2 = { class: "py-5 flex-col w-full" },
  i2 = {
    key: 1,
    class: "text-center p-4 rounded mb-4 bg-red-100 text-red-800",
  },
  r2 = ["disabled"],
  vc = {
    __name: "Contact",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = F(!1),
        s = F(!1),
        i = F(""),
        r = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        },
        o = (a) => {
          if (a >= 4) return "text-slate-900 bg-slate-50 border-slate-300"
          if (a == 3) return "text-slate-900 bg-slate-100 border-slate-400"
          if (a == 2) return "text-slate-100 bg-slate-800 border-slate-600"
          if (a == 1) return "text-slate-100 bg-slate-900 border-slate-700"
        },
        l = async (a) => {
          if ((a.preventDefault(), n.value)) return
          const u = a.target,
            c = u.name.value.trim(),
            d = u.email.value.trim(),
            f = u.message.value.trim(),
            h = u.subject?.value?.trim() || "Contact Form Submission"
          if (!c || !d || !f) {
            i.value = "Please fill in all required fields"
            return
          }
          ;(n.value = !0), (i.value = "")
          try {
            const g = await fetch(
                "https://api.josephhansen.dev/api/mail/send",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: c,
                    email: d,
                    subject: h,
                    message: f,
                    referrer: window.location.href,
                    location: "contact page",
                  }),
                },
              ),
              v = await g.json()
            g.ok
              ? ((s.value = !0), u.reset())
              : (i.value =
                  v.error || "Failed to send message. Please try again.")
          } catch (g) {
            console.error("Form submission error:", g),
              (i.value =
                "Network error. Please check your connection and try again.")
          } finally {
            n.value = !1
          }
        }
      return (a, u) => (
        O(),
        D("div", n2, [
          p("div", s2, [
            p(
              "h2",
              {
                class: k([
                  "text-5xl text-center text-semibold",
                  r(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          s.value
            ? (O(),
              D(
                "div",
                {
                  key: 0,
                  class: k([
                    "text-center p-6 rounded mb-4",
                    {
                      "bg-emerald-100 text-emerald-800": e.brightness >= 4,
                      "bg-slate-600 text-slate-100": e.brightness == 3,
                      "bg-orange-900 text-orange-100": e.brightness <= 2,
                    },
                  ]),
                },
                [
                  ...(u[0] ||
                    (u[0] = [
                      p(
                        "p",
                        { class: "text-lg font-semibold" },
                        "Thanks for your message!",
                        -1,
                      ),
                      p(
                        "p",
                        { class: "mt-2" },
                        " Your submission has been received. I'll get back to you soon. ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ))
            : we("", !0),
          i.value ? (O(), D("div", i2, Ce(i.value), 1)) : we("", !0),
          s.value
            ? we("", !0)
            : (O(),
              D(
                "form",
                { key: 2, id: "cta", onSubmit: l },
                [
                  p(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      placeholder: "Name *",
                      required: "",
                      class: k(["rounded p-2 w-full border", o(e.brightness)]),
                    },
                    null,
                    2,
                  ),
                  p(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      placeholder: "Email *",
                      required: "",
                      class: k([
                        "rounded p-2 w-full mt-3 border",
                        o(e.brightness),
                      ]),
                    },
                    null,
                    2,
                  ),
                  p(
                    "input",
                    {
                      type: "text",
                      name: "subject",
                      placeholder: "Subject (optional)",
                      class: k([
                        "rounded p-2 w-full mt-3 border",
                        o(e.brightness),
                      ]),
                    },
                    null,
                    2,
                  ),
                  p(
                    "textarea",
                    {
                      placeholder: "Message *",
                      name: "message",
                      required: "",
                      rows: "6",
                      class: k([
                        "rounded p-2 w-full mt-3 border",
                        o(e.brightness),
                      ]),
                    },
                    null,
                    2,
                  ),
                  p(
                    "button",
                    {
                      id: "submitButton",
                      type: "submit",
                      disabled: n.value,
                      "aria-label": "Submit contact form",
                      class: k([
                        "rounded px-5 py-2 text-white font-semibold w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed",
                        {
                          "bg-emerald-600 hover:bg-emerald-700":
                            e.brightness >= 4,
                          "bg-slate-400 hover:bg-slate-500": e.brightness == 3,
                          "bg-orange-600 hover:bg-orange-700":
                            e.brightness == 2,
                          "bg-orange-500 hover:bg-orange-600":
                            e.brightness == 1,
                        },
                      ]),
                    },
                    Ce(n.value ? "Sending..." : "Contact Me"),
                    11,
                    r2,
                  ),
                ],
                32,
              )),
        ])
      )
    },
  },
  l2 = { class: "flex-col w-full" },
  o2 = { class: "p-5 flex-col w-full" },
  a2 = { class: "grid grid-cols-6" },
  u2 = { class: "col-span-2 sm:col-span-2 md:col-span-1" },
  c2 = { class: "flex gap-2 mt-4 justify-center items-center" },
  d2 = { class: "flex gap-2 mt-4 justify-center items-center" },
  f2 = ["href"],
  p2 = {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "100%",
    height: "100%",
  },
  h2 = ["d"],
  g2 = {
    class: "col-span-4 sm:col-span-4 md:col-span-5 prose pl-5",
    style: { "max-width": "100vw !important" },
  },
  m2 = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        },
        s = (o) => {
          if (o >= 4) return "text-emerald-500"
          if (o == 3) return "text-orange-600"
          if (o == 2) return "text-orange-500"
          if (o == 1) return "text-orange-400"
        },
        i = [o0, Ou, s0, l0],
        r = [
          "https://www.linkedin.com/in/josephclaytonhansen/",
          "https://www.github.com/josephclaytonhansen",
          "https://blenderartists.org/u/joseph/summary",
          "https://www.instagram.com/jhansen_art/",
        ]
      return (o, l) => (
        O(),
        D("div", l2, [
          p("div", o2, [
            p("div", a2, [
              p("div", u2, [
                l[0] ||
                  (l[0] = p(
                    "div",
                    { class: "square-image-container rounded" },
                    [
                      p("img", {
                        class: "rounded pr-4",
                        src: "https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp",
                        alt: "Joseph Hansen",
                      }),
                    ],
                    -1,
                  )),
                p("div", c2, [
                  p("div", d2, [
                    (O(),
                    D(
                      pe,
                      null,
                      Ve(i, (a, u) =>
                        p(
                          "div",
                          { key: u, class: k(["flex-1", s(t.brightness)]) },
                          [
                            p(
                              "a",
                              { href: r[u] },
                              [
                                (O(),
                                D("svg", p2, [
                                  p("path", { d: a.path }, null, 8, h2),
                                ])),
                              ],
                              8,
                              f2,
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
              p("div", g2, [
                p(
                  "h1",
                  { class: k(["text-5xl font-bold mb-0", n(t.brightness)]) },
                  " Joseph Hansen ",
                  2,
                ),
                p(
                  "h3",
                  { class: k(["text-lg", n(t.brightness)]) },
                  " Professionally... ",
                  2,
                ),
                p(
                  "p",
                  { class: k(n(t.brightness)) },
                  " I'm a full-stack web developer with a Strategic Communications degree (and a Visual Communications minor), training in design, extensive marketing experience, and a decade of web design and development experience. My specialities are WordPress and Vue, and I'm also proficient in Django, Ruby on Rails, React, and a massive slate of CMS platforms (including Drupal, Joomla, Caffeine, Shopify, and others.) ",
                  2,
                ),
                p(
                  "p",
                  { class: k(n(t.brightness)) },
                  " Have a WordPress site with an obscure theme? Not to worry, I've worked with every WordPress theme or builder under the sun: Divi, Flatsome, Avada, WP Bakery, Gutenburg, Elementor, and more. I'm experienced in JavaScript, HTML, CSS, PHP, Python, C++, Ruby, and other languages, and I'm passionate about problem-solving through code. ",
                  2,
                ),
                p(
                  "p",
                  { class: k(n(t.brightness)) },
                  " I've been working for marketing agencies for 5 years, and I have extensive freelance experience as well. I've worked with clients in a variety of industries, including healthcare, finance, real estate, and more. I've also worked with a variety of non-profits and educational institutions. ",
                  2,
                ),
                p(
                  "p",
                  { class: k(n(t.brightness)) },
                  " I love problem-solving and I'm passionate about having a good impact. I learn quickly, adapt rapidly, and fit into a team instantaneously. ",
                  2,
                ),
                p(
                  "h3",
                  { class: k(["text-lg", n(t.brightness)]) },
                  " Personally... ",
                  2,
                ),
                p(
                  "p",
                  { class: k(n(t.brightness)) },
                  " If that section above bored you, me too. Luckily, there's a lot more to me than what I do for work. I'd call myself an artist, and that covers a lot of things I love to do. I'm: ",
                  2,
                ),
                p(
                  "ul",
                  { class: k(n(t.brightness)) },
                  [
                    ...(l[1] ||
                      (l[1] = [
                        p("li", null, "a 3D artist and animator", -1),
                        p("li", null, "a digital and traditional painter", -1),
                        p(
                          "li",
                          null,
                          " an avid cook who loves discovering new recipes and cuisines (my favorite seasoning: tamarind paste) ",
                          -1,
                        ),
                        p(
                          "li",
                          null,
                          " a classically trained pianist and organist (with an infinite love for Rachmaninov, Kabalevsky, and Prokokiev) ",
                          -1,
                        ),
                        p(
                          "li",
                          null,
                          " a huge nerd and massive DC fan (favorite fictional characters: Nightwing and Batgirl) ",
                          -1,
                        ),
                        p(
                          "li",
                          null,
                          "a woodworker and electronic tinkerer",
                          -1,
                        ),
                        p("li", null, "and so much more!", -1),
                      ])),
                  ],
                  2,
                ),
                p(
                  "p",
                  { class: k(n(t.brightness)) },
                  " I'm also passionate about social justice, advocacy, and equality. I volunteer extensively (including as a crisis counselor for the Trevor Project), spent many years as the assistant director of a regional non-profit organization, and I'm always looking for ways to make the world a better place. ",
                  2,
                ),
                p(
                  "h3",
                  { class: k(["text-lg", n(t.brightness)]) },
                  " That's me! So... what can I do for you? ",
                  2,
                ),
                te(
                  vc,
                  {
                    brightness: e.brightness,
                    style: { "margin-top": "-7rem" },
                  },
                  null,
                  8,
                  ["brightness"],
                ),
                l[2] ||
                  (l[2] = p(
                    "img",
                    {
                      src: "https://boardgamegeek.com/jswidget.php?username=josephhansen&numitems=10&header=1&text=none&images=medium&show=recentplays&imagesonly=1&imagepos=left&inline=1&showplaydate=1&domains%5B%5D=boardgame&imagewidget=1",
                      border: "0",
                    },
                    null,
                    -1,
                  )),
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  b2 = fn(m2, [["__scopeId", "data-v-16a9d0a6"]]),
  v2 = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  y2 = { class: "py-5 flex-col w-full" },
  w2 = { class: "prose" },
  x2 = ["onMouseover", "onClick"],
  S2 = { class: "image-container" },
  E2 = ["src", "alt"],
  C2 = { class: "flex gap-2 items-center" },
  T2 = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  k2 = ["d"],
  P2 = {
    __name: "WebPortfolio",
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
        i = F([
          {
            icons: [At, As, r0],
            title: "BlenderNation Bazaar",
            image: dl,
            link: "/web-portfolio/bazaar",
          },
          {
            icons: [At, As, jo],
            title: "Feed Council",
            image: fl,
            link: "/web-portfolio/feed-council",
          },
          { icons: [At, i0, As], title: "CHAI", link: "/web-portfolio/chai" },
        ]),
        r = F([
          {
            icons: [At, jo],
            title: "Build On Your Land",
            image: pl,
            link: "/web-portfolio/build-on-your-land",
          },
          {
            icons: [At, As],
            title: "Stuart Pipe and Hose",
            image: hl,
            link: "/web-portfolio/stuart-pipe",
          },
          {
            icons: [At, Jn],
            title: "Atlanta Floor One",
            image: gl,
            link: "/web-portfolio/atlanta-floor-one",
          },
          {
            icons: [At, Jn],
            title: "Swim State Pool",
            image: ml,
            link: "/web-portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [u0, a0],
            image: bl,
            link: "/web-portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [At, Jn],
            image: vl,
            link: "/web-portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [At, Jn],
            image: yl,
            link: "/web-portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [At, Jn],
            image: wl,
            link: "/web-portfolio/aris-search",
          },
        ]),
        o = F(null)
      return (l, a) => (
        O(),
        D("div", v2, [
          p("div", y2, [
            p("span", w2, [
              p(
                "h2",
                {
                  class: k([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              p(
                "p",
                { class: k(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. ",
                2,
              ),
              p(
                "h3",
                { class: k(["text-2xl text-center", n(t.brightness)]) },
                " Check out these full sites I designed and developed ",
                2,
              ),
            ]),
          ]),
          (O(!0),
          D(
            pe,
            null,
            Ve(
              [i.value, r.value],
              (u) => (
                O(),
                D(
                  "div",
                  {
                    class: k([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": u == i.value,
                        "lg:grid-cols-3 mt-4": u == r.value,
                      },
                    ]),
                  },
                  [
                    (O(!0),
                    D(
                      pe,
                      null,
                      Ve(
                        u,
                        (c) => (
                          O(),
                          D(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: c.title,
                              onMouseover: (d) => (o.value = c.title),
                              onMouseleave:
                                a[0] || (a[0] = (d) => (o.value = null)),
                              onClick: (d) => l.$router.push(c.link),
                              style: fi({
                                opacity:
                                  o.value === c.title || o.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              p("div", S2, [
                                p(
                                  "img",
                                  {
                                    src: c.image,
                                    alt: c.title,
                                    class: k([
                                      "object-contain w-full rounded-t-xl",
                                      {
                                        "bg-slate-100": e.brightness == 5,
                                        "bg-slate-200": e.brightness == 4,
                                        "bg-slate-300": e.brightness == 3,
                                        "bg-slate-500": e.brightness == 2,
                                        "bg-slate-600": e.brightness == 1,
                                      },
                                    ]),
                                  },
                                  null,
                                  10,
                                  E2,
                                ),
                              ]),
                              p("div", null, [
                                p("div", null, [
                                  p(
                                    "div",
                                    {
                                      class: k([
                                        "p-4 flex justify-between items-center rounded-b-xl",
                                        {
                                          "bg-slate-100": e.brightness == 5,
                                          "bg-slate-200": e.brightness == 4,
                                          "bg-slate-300": e.brightness == 3,
                                          "bg-slate-500": e.brightness == 2,
                                          "bg-slate-600": e.brightness == 1,
                                        },
                                      ]),
                                    },
                                    [
                                      p("div", null, [
                                        p(
                                          "h5",
                                          {
                                            class: k([
                                              "text-xl m-0 p-0",
                                              s(t.brightness),
                                            ]),
                                          },
                                          Ce(c.title),
                                          3,
                                        ),
                                      ]),
                                      p("div", C2, [
                                        (O(!0),
                                        D(
                                          pe,
                                          null,
                                          Ve(
                                            c.icons,
                                            (d, f) => (
                                              O(),
                                              D(
                                                "div",
                                                {
                                                  key: f,
                                                  class: k([
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
                                                  (O(),
                                                  D("svg", T2, [
                                                    p(
                                                      "path",
                                                      { d: d.path },
                                                      null,
                                                      8,
                                                      k2,
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
                            x2,
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
  I2 = fn(P2, [["__scopeId", "data-v-4614d5aa"]]),
  M2 = {
    __name: "Home",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Welcome to josephhansen.dev",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " This is the homepage skeleton. Add your content here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  $2 = ["src"],
  A2 = { class: "text-inherit" },
  O2 = ["src"],
  _2 = "https://bazaar.blendernation.com",
  j2 = "BlenderNation Bazaar",
  L2 = {
    __name: "Bazaar",
    setup(e) {
      const t = F([dl, Wm, qm, Um, Km]),
        n = F([
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
      return (i, r) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: _2,
            title: j2,
            brightness: i.brightness,
          },
          {
            default: me(() => [
              Ye(i.$slots, "default", {}, () => [
                r[3] ||
                  (r[3] = p(
                    "h3",
                    { class: "text-2xl font-semibold text-inherit" },
                    " The vision: a one-stop shop for Blender users ",
                    -1,
                  )),
                r[4] ||
                  (r[4] = p(
                    "p",
                    { class: "text-inherit" },
                    " When Bart from BlenderNation approached me with the idea for Bazaar, I was pumped. Nothing quite like Bazaar existed at the time: one central hub for Blender users to find tutorials, resources, assets, and add-ons. I was heavily involved with every step of the process of making the Bazaar come to life, and the end result is fantastic. ",
                    -1,
                  )),
                p("figure", null, [
                  p(
                    "img",
                    { src: s.planning, class: "rounded-xl" },
                    null,
                    8,
                    $2,
                  ),
                  r[0] ||
                    (r[0] = p(
                      "figcaption",
                      null,
                      "Bazaar's planning board",
                      -1,
                    )),
                ]),
                p("p", A2, [
                  r[2] ||
                    (r[2] = ce(
                      " With the above Figma document as a guide from Bart, I dove into both design and the backend details for managing the complex data the site would be handling. Bart wanted to do this through WordPress, and I was able to use my expertise to recommend AdvancedCustomFields to do a lot of the major data-wrangling. I also built the theme from scratch, to make sure it was as simplified and lightweight as possible while still providing beautiful, responsive, and functional results. ",
                      -1,
                    )),
                  p("figure", null, [
                    p(
                      "img",
                      { src: s.figma, class: "rounded-xl" },
                      null,
                      8,
                      O2,
                    ),
                    r[1] ||
                      (r[1] = p(
                        "figcaption",
                        null,
                        "My approved design for the Bazaar",
                        -1,
                      )),
                  ]),
                ]),
                r[5] ||
                  (r[5] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Tight deadlines and high stakes ",
                    -1,
                  )),
                r[6] ||
                  (r[6] = p(
                    "p",
                    null,
                    " When Bart approached me, there was about a month until the next Blender Conference, a massive community event that he hoped to present Bazaar at. At this point, the Bazaar was just an idea- there wasn't even a logo yet. Long story short, Bazaar launched successfully with time to spare. This project shows I can work well under pressure and with tight deadlines to achieve exactly what a client needs. ",
                    -1,
                  )),
                r[7] ||
                  (r[7] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Security: keeping the Bazaar safe ",
                    -1,
                  )),
                r[8] ||
                  (r[8] = p(
                    "p",
                    null,
                    " I've implemented powerful security guardrails across Bazaar, ranging from DDoS protection to a comprehensive firewall. I'm proud to report that my security measures are currently preventing around 4500 attacks a month, with that number growing larger all the time. ",
                    -1,
                  )),
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
  B2 = "https://okcsouthstake.org",
  N2 = "OKC South Stake",
  R2 = {
    __name: "OkcSouthStake",
    setup(e) {
      const t = F([
          fl,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277285248.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277310460.webp",
        ]),
        n = F([
          "OKC South Stake homepage (light)",
          "OKC South Stake congregation subpage",
          "OKC South Stake homepage (dark)",
        ])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: B2,
            title: N2,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    ' To describe this project as "massive" would be an understatement. What at first glance appears to be a simple informational website is in fact a comprehensive hub of information, resources, and tools for the members of a regional church. This site is a gigantic, sprawling, and complex project with dozens of custom tools, subdomains, features, and more. ',
                    -1,
                  )),
                i[1] ||
                  (i[1] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Everything in a single web app ",
                    -1,
                  )),
                i[2] ||
                  (i[2] = p(
                    "p",
                    { class: "text-inherit" },
                    " I've designed, built, and developed everything on this site. And I do mean everything. This site has congregation subpages with fully functional and collaborative calendars: ",
                    -1,
                  )),
                i[3] ||
                  (i[3] = p(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277670567.webp",
                      alt: "Example of a congregation subpage calendar",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                i[4] ||
                  (i[4] = p(
                    "p",
                    { class: "text-inherit" },
                    " This web application also has a fully functional CMS and blog system, scheduling systems, complex communication tools, an internal email system, user roles and restricted access, and more. The scope of this site is frankly staggering. If you can imagine a tool an organization might need, it's somewhere on this site. And it's all built with the same care, attention to detail, and quality that I put into every project I work on. ",
                    -1,
                  )),
                i[5] ||
                  (i[5] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Built to take a beating",
                    -1,
                  )),
                i[6] ||
                  (i[6] = p(
                    "p",
                    { class: "text-inherit" },
                    " This site is built to handle a massive amount of traffic and to be as fast as possible. I've optimized it for speed. It's fully responsive, accessible, and built with the latest technologies. It's a site that's built to last, and to be a valuable resource for the members of the church it serves. ",
                    -1,
                  )),
                i[7] ||
                  (i[7] = p(
                    "p",
                    { class: "text-inherit" },
                    " Additionally, this site has advanced security guardrails, DDoS protection, bot monitoring and filtering, extremely strong database encryption, MFA/TFA protection, and other essential security features for a large organizational website. I've extensively tested the security of this site, and I'm proud to say it's rock-solid. ",
                    -1,
                  )),
                i[8] ||
                  (i[8] = p(
                    "p",
                    { class: "text-inherit" },
                    " If you need a web application that's built to last, and built to be a valuable resource for your organization, I'm the developer you need. Let me build your site. ",
                    -1,
                  )),
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
  z2 = "https://arissearch.com//",
  D2 = "Aris Search",
  F2 = {
    __name: "ArisSearch",
    setup(e) {
      const t = F([wl, Zm]),
        n = F(["Aris Search homepage", "Aris Search image effects"])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: z2,
            title: D2,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " Aris Search needed a powerful, functional, site to connect recruiters and job applicants. In addition to a clean, professional design with excellent SEO, I developed everything they needed on the backend to handle their data. The result is a site that's fast, functional, and easy to use. ",
                    -1,
                  )),
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
  H2 = "https://floorsfloors.com/",
  G2 = "Atlanta Floor One",
  V2 = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = F([gl, Ym, Xm, Jm]),
        n = F([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: H2,
            title: G2,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " Atlanta Floor One needed a new website to replace their old, non-functional one. I built them a fast, clean, responsive new site using WordPress. They was extremely happy with the results. ",
                    -1,
                  )),
                i[1] ||
                  (i[1] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Clean and professional with an unusual color palette ",
                    -1,
                  )),
                i[2] ||
                  (i[2] = p(
                    "p",
                    { class: "text-inherit" },
                    " This site was challenging from a design perspective. Atlanta Floor One's logo colors (light green and very dark brown) look great at a small scale, but initial drafts of their site proved overwhelming. Eventually, I added a lighter brown that was more neutral and used the green as an accent color. I also relied heavily on whitespace, giving the colors room to breathe. The result is a professional and unique site. ",
                    -1,
                  )),
                i[3] ||
                  (i[3] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Parallax architectural sketch backgrounds ",
                    -1,
                  )),
                i[4] ||
                  (i[4] = p(
                    "p",
                    { class: "text-inherit" },
                    ' With large spans of whitespace, the site ran the risk of veering into "boring" territory. To combat this, I decided to use architectural sketches as subtle background overlays. Adding a parallax effect to these sketches gave the site a sense of depth and movement, without overwhelming the user. Atlanta Floor One was delighted with the final result. ',
                    -1,
                  )),
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
  W2 = "https://www.buildonyourlandllc.com/",
  q2 = "Build on Your Land",
  U2 = {
    __name: "BuildOnYourLand",
    setup(e) {
      const t = F([
          pl,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275933220.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275982586.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275995615.webp",
        ]),
        n = F([])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: W2,
            title: q2,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " Build On Your Land is one of my favorite sites I've ever built. From dynamic showroom hours developed in JavaScript, to parallax home design backgrounds, the site is full of my best work. The client needed a beautiful, responsive site, and they loved what I built for them. ",
                    -1,
                  )),
                i[1] ||
                  (i[1] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Dynamic showroom hours",
                    -1,
                  )),
                i[2] ||
                  (i[2] = p(
                    "p",
                    { class: "text-inherit" },
                    ' Build on Your Land wanted customers to be able to tell at a glance if the showroom was currently open. The JavaScript/PHP solution I built is simple- the hours show "Open" or "Closed" based on the current time and day- but extremely effective. They were thrilled with the result. ',
                    -1,
                  )),
                i[3] ||
                  (i[3] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Design elements",
                    -1,
                  )),
                i[4] ||
                  (i[4] = p(
                    "p",
                    { class: "text-inherit" },
                    " This site is full of design elements that make it stand out. The parallax home design sketch backgrounds add a unique touch and make the site memorable. ",
                    -1,
                  )),
                i[5] ||
                  (i[5] = p(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
                      alt: "Parallax home design sketch backgrounds",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                i[6] ||
                  (i[6] = p(
                    "p",
                    { class: "text-inherit" },
                    " Every part of the site is packed with care and intention- it shows my design abilities at their best. ",
                    -1,
                  )),
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
  K2 = "https://stehlfamilydental.com/",
  Y2 = "Stuart Hose and Pipe",
  X2 = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = F([yl]),
        n = F(["Stehl Family Dental homepage"])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: K2,
            title: Y2,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " I built a website for Stehl Family Dental, a small dental practice looking to expand their business. Their site needed to make it easy for potential customers to understand what was available and the benefits of choosing them. I built them a professional and engaging site that presents all the important information in a well-designed, easy-to-navigate format. ",
                    -1,
                  )),
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
  J2 = "https://tub-boys.com/",
  Z2 = "Tub Boys",
  Q2 = {
    __name: "TubBoys",
    setup(e) {
      const t = F([
          vl,
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274374594.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274402279.webp",
        ]),
        n = F(["Tub Boys homepage"])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: J2,
            title: Z2,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " Tub Boys didn't have a website, and they were hoping to expand their business through a web presence. I built them a site that exceeded their expectations and helped them grow their business. ",
                    -1,
                  )),
                i[1] ||
                  (i[1] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Using design to present minimal text in a compelling way ",
                    -1,
                  )),
                i[2] ||
                  (i[2] = p(
                    "p",
                    { class: "text-inherit" },
                    ' They had very little copy, so it was my task to make their site engaging and feel full with what I had to work with. I took the opporunity to use large, engaging, typography as well as swooshing lines that invoke a sense of movement. The result feels professional, while still invoking the "fun" energy the client requested. ',
                    -1,
                  )),
                i[3] ||
                  (i[3] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Image comparison sliders",
                    -1,
                  )),
                i[4] ||
                  (i[4] = p(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                i[5] ||
                  (i[5] = p(
                    "p",
                    { class: "text-inherit" },
                    " Tub Boys wanted to be able to showcase their work with before and after images. I devloped a custom JavaScript solution for interactive image sliders that integrated nicely with their WordPress platform. ",
                    -1,
                  )),
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
  ey = "https://stuarthose.com/",
  ty = "Stuart Hose and Pipe",
  ny = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = F([
          hl,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275652278.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275668557.webp",
        ]),
        n = F(["Stuart Hose and Pipe homepage"])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: ey,
            title: ty,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " Stuart Pipe Co. presented a unique challenge: they needed a site that matched extremely precise branding requirements from their parent company, while still being clean, professional, and appealing. I built and designed a site that met all of their requirements, and they were extremely happy with the results. ",
                    -1,
                  )),
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
  sy = "https://swimstatepoolservice.com/",
  iy = "Swim State Pool",
  ry = {
    __name: "SwimStatePool",
    setup(e) {
      const t = F([ml]),
        n = F(["Swim State Pool Services homepage"])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: sy,
            title: iy,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "p",
                    { class: "text-inherit" },
                    " Swim State Pool Services needed a website to help them grow their business. I built them a site that was both professional and engaging, helping them to attract new customers and grow their business. They loved the results, which were a massive upgrade from their existing site. ",
                    -1,
                  )),
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
  ly = "/",
  oy = "josephhansen.dev",
  ay = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = F([bl]),
        n = F(["This site's homepage"])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: ly,
            title: oy,
            brightness: s.brightness,
          },
          {
            default: me(() => [
              Ye(s.$slots, "default", {}, () => [
                i[0] ||
                  (i[0] = p(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " A lightning-fast, responsive, accessible site ",
                    -1,
                  )),
                i[1] ||
                  (i[1] = p(
                    "p",
                    { class: "text-inherit" },
                    " I built this site with care and pride- it's showcasing my abilities, after all. To that end, I've optimized it for speed to the max. This site scores 99/100 on Google's Page Speed test, a score so rare it's essentially mythical. This site is also highly responsive and features five distinct color themes for perfect user satisfication (check out the header to change them!). ",
                    -1,
                  )),
                i[2] ||
                  (i[2] = p(
                    "p",
                    { class: "text-inherit" },
                    " I've built, designed, and developed every part of this site. I use Vue as the JavaScript framework, with Vite, Node.js, Express, MongoDB, and other technologies to make it not just work, but excel. All the images are served in blazing-fast, modern, formats like WebP, and the site is fully accessible, with ARIA roles and other accessibility features. ",
                    -1,
                  )),
                i[3] ||
                  (i[3] = p(
                    "p",
                    { class: "text-inherit" },
                    " Looking for a site that will blow your customer's minds? I make those. Let me build yours. ",
                    -1,
                  )),
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
  uy = "https://www.chai.org/",
  cy = "Coalition Healthcare Artificial Intelligence",
  dy = {
    __name: "Chai",
    setup(e) {
      const t = F([Qm]),
        n = F([])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: uy,
            title: cy,
            brightness: s.brightness,
          },
          { default: me(() => [Ye(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  fy = "https://www.feedcouncil.com/",
  py = "FEED Council",
  hy = {
    __name: "FeedCouncil",
    setup(e) {
      const t = F([eb]),
        n = F([])
      return (s, i) => (
        O(),
        oe(
          mt,
          {
            images: t.value,
            captions: n.value,
            link: fy,
            title: py,
            brightness: s.brightness,
          },
          { default: me(() => [Ye(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  gy = {
    __name: "HelpfulEditorScripts",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Helpful Editor Scripts",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Unity Editor Scripts content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  my = {
    __name: "Projects",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Unity Projects",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Unity Projects content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  by = {
    __name: "ShaderGraph",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Shader Graph",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Unity Shader Graph content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  vy = {
    __name: "FigRef",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p("h1", { class: "text-4xl font-bold mb-6" }, "FigRef", -1),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " FigRef PHP project content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  yy = {
    __name: "CustomWordPressThemes",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Custom WordPress Themes",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Custom WordPress Themes content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  wy = {
    __name: "WordPressPlugins",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "WordPress Plugins",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " WordPress Plugins content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  xy = {
    __name: "DiscourseImageComparison",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Discourse Image Comparison Slider",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Discourse Image Comparison Slider project content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Sy = {
    __name: "GardenTracker",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Garden Tracker",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Garden Tracker JavaScript project content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Ey = {
    __name: "JavaScriptSnippets",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "JavaScript Snippets",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " JavaScript Snippets content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Cy = {
    __name: "BlenderArduinoController",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Blender Arduino Controller",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Blender Arduino Controller project content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Ty = {
    __name: "LEDs",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Arduino LEDs",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Arduino LED projects content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  ky = {
    __name: "InstagramScraper",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Instagram Scraper",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Instagram Scraper Python project content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Py = {
    __name: "ArtPortfolio",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Art Portfolio",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Blender Art Portfolio content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Iy = {
    __name: "CustomBuild",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Custom Build (Fruitbat)",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  ' Custom Blender Build "Fruitbat" content goes here. ',
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  My = {
    __name: "MyAddOns",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p("h1", { class: "text-4xl font-bold mb-6" }, "My Add-Ons", -1),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Blender Add-Ons content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  $y = {
    __name: "ShadingRig",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Shading Rig + Cel Character Tools",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Shading Rig and Cel Character Tools content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Ay = {
    __name: "TechnicalBlog",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Technical Blog",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Technical Blog content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Oy = {
    __name: "PersonalBlog",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Personal Blog",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Personal Blog content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  _y = {
    __name: "Presentations",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Presentations",
                  -1,
                ),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  " Presentations content goes here. ",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  jy = {
    __name: "Resume",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        O(),
        D(
          "div",
          {
            class: k([
              "flex flex-col items-center justify-center w-full p-8",
              {
                "text-slate-900": e.brightness >= 4,
                "text-slate-200": e.brightness <= 3,
              },
            ]),
          },
          [
            ...(n[0] ||
              (n[0] = [
                p("h1", { class: "text-4xl font-bold mb-6" }, "Resume", -1),
                p(
                  "p",
                  { class: "text-lg mb-4 text-center max-w-2xl" },
                  "Resume content goes here.",
                  -1,
                ),
              ])),
          ],
          2,
        )
      )
    },
  },
  Ly = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  By = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  Ny = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = F(5),
        n = F(!1),
        s = e,
        i = (h) => {
          ;(t.value = Number(h)),
            window.localStorage.setItem("brightness", t.value)
          let v = {
              1: "#cbd5e1",
              2: "#e2e8f0",
              3: "#d1d5db",
              4: "#1e293b",
              5: "#0f172a",
            }[t.value],
            x = {
              1: "#fb923c",
              2: "#f97316",
              3: "#fed7aa",
              4: "#10b981",
              5: "#10b981",
            }[t.value]
          document.documentElement.style.setProperty("--link-color", v),
            document.documentElement.style.setProperty("--link-hover-color", x)
        },
        r = {
          "okc-south-stake": R2,
          "aris-search": F2,
          "atlanta-floor-one": V2,
          "build-on-your-land": U2,
          "stehl-family-dental": X2,
          "tub-boys": Q2,
          "stuart-pipe": ny,
          "swim-state-pool": ry,
          "josephhansen-dev": ay,
          bazaar: L2,
          chai: dy,
          "feed-council": hy,
        },
        o = {
          "helpful-editor-scripts": gy,
          "unity-projects": my,
          "shader-graph": by,
        },
        l = {
          figref: vy,
          "wordpress-themes": yy,
          "wordpress-plugins": wy,
          "discourse-image-comparison": xy,
          "garden-tracker": Sy,
          "javascript-snippets": Ey,
          "blender-arduino-controller": Cy,
          "arduino-leds": Ty,
          "instagram-scraper": ky,
        },
        a = {
          "art-portfolio": Py,
          fruitbat: Iy,
          addons: My,
          "shading-rig": $y,
        },
        u = { devlog: Ay, blog: Oy, presentations: _y },
        c = { resume: jy },
        d = Z(() => {
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
      qe(() => {
        let h = window.localStorage
        h.getItem("brightness")
          ? (t.value = Number(h.getItem("brightness")))
          : h.setItem("brightness", t.value)
        let g = {
            1: "#cbd5e1",
            2: "#e2e8f0",
            3: "#d1d5db",
            4: "#1e293b",
            5: "#0f172a",
          }[t.value],
          v = {
            1: "#fb923c",
            2: "#f97316",
            3: "#fed7aa",
            4: "#10b981",
            5: "#10b981",
          }[t.value]
        if (
          (document.documentElement.style.setProperty("--link-color", g),
          document.documentElement.style.setProperty("--link-hover-color", v),
          s.component == "pricing")
        )
          (f.title = "josephhansen.dev | web developer/designer | pricing"),
            (f.meta[1].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (f.meta[6].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (f.meta[4].content = "https://josephhansen.dev/pricing"),
            (f.meta[9].content = "https://josephhansen.dev/pricing")
        else if (s.component == "contact")
          (f.title = "josephhansen.dev | web developer/designer | contact"),
            (f.meta[1].content =
              "josephhansen.dev | web developer/designer | contact"),
            (f.meta[6].content =
              "josephhansen.dev | web developer/designer | contact"),
            (f.meta[4].content = "https://josephhansen.dev/contact"),
            (f.meta[9].content = "https://josephhansen.dev/contact")
        else if (s.component == "about")
          (f.title = "josephhansen.dev | web developer/designer | about"),
            (f.meta[1].content =
              "josephhansen.dev | web developer/designer | about"),
            (f.meta[6].content =
              "josephhansen.dev | web developer/designer | about"),
            (f.meta[4].content = "https://josephhansen.dev/about"),
            (f.meta[9].content = "https://josephhansen.dev/about")
        else if (s.component == "web-portfolio")
          (f.title =
            "josephhansen.dev | web developer/designer | web portfolio"),
            (f.meta[1].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (f.meta[6].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (f.meta[4].content = "https://josephhansen.dev/web-portfolio"),
            (f.meta[9].content = "https://josephhansen.dev/web-portfolio")
        else if (s.component == "web-services")
          (f.title = "josephhansen.dev | web developer/designer | services"),
            (f.meta[1].content =
              "josephhansen.dev | web developer/designer | services"),
            (f.meta[6].content =
              "josephhansen.dev | web developer/designer | services"),
            (f.meta[4].content = "https://josephhansen.dev/web-services"),
            (f.meta[9].content = "https://josephhansen.dev/web-services")
        else if (s.component in r) {
          let x = s.component.replace(/-/g, " ")
          ;(f.title = `josephhansen.dev | web developer/designer | ${x}`),
            (f.meta[1].content = `josephhansen.dev | web developer/designer | ${x}`),
            (f.meta[6].content = `josephhansen.dev | web developer/designer | ${x}`),
            (f.meta[4].content = `https://josephhansen.dev/web-portfolio/${s.component}`),
            (f.meta[9].content = `https://josephhansen.dev/web-portfolio/${s.component}`)
        } else if (s.component in o) {
          let x = s.component.replace(/-/g, " ")
          ;(f.title = `josephhansen.dev | unity developer | ${x}`),
            (f.meta[1].content = `josephhansen.dev | unity developer | ${x}`),
            (f.meta[6].content = `josephhansen.dev | unity developer | ${x}`),
            (f.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (f.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in l) {
          let x = s.component.replace(/-/g, " ")
          ;(f.title = `josephhansen.dev | programmer | ${x}`),
            (f.meta[1].content = `josephhansen.dev | programmer | ${x}`),
            (f.meta[6].content = `josephhansen.dev | programmer | ${x}`),
            (f.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (f.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in a) {
          let x = s.component.replace(/-/g, " ")
          ;(f.title = `josephhansen.dev | blender artist | ${x}`),
            (f.meta[1].content = `josephhansen.dev | blender artist | ${x}`),
            (f.meta[6].content = `josephhansen.dev | blender artist | ${x}`),
            (f.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (f.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in u) {
          let x = s.component.replace(/-/g, " ")
          ;(f.title = `josephhansen.dev | ${x}`),
            (f.meta[1].content = `josephhansen.dev | ${x}`),
            (f.meta[6].content = `josephhansen.dev | ${x}`),
            (f.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (f.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in c) {
          let x = s.component.replace(/-/g, " ")
          ;(f.title = `josephhansen.dev | ${x}`),
            (f.meta[1].content = `josephhansen.dev | ${x}`),
            (f.meta[6].content = `josephhansen.dev | ${x}`),
            (f.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (f.meta[9].content = `https://josephhansen.dev/${s.component}`)
        }
      })
      const f = ys({
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
        Qt(() => {
          ;(document.title = f.title),
            f.meta.forEach((h) => {
              let g = document.querySelector(
                `meta[name="${h.name}"], meta[property="${h.property}"]`,
              )
              g
                ? g.setAttribute("content", h.content)
                : ((g = document.createElement("meta")),
                  h.name && g.setAttribute("name", h.name),
                  h.property && g.setAttribute("property", h.property),
                  g.setAttribute("content", h.content),
                  document.getElementsByTagName("head")[0].appendChild(g))
            })
        }),
        (h, g) => (
          O(),
          D(
            pe,
            null,
            [
              p(
                "main",
                {
                  class: k([["w-dvw", d.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  te(H0, { "onUpdate:brightness": i }),
                  p("div", Ly, [
                    e.component == "pricing"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 0,
                            class: k([
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
                            te(t2, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component == "contact"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 1,
                            class: k([
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
                            te(vc, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component == "web-portfolio"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 2,
                            class: k([
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
                            te(I2, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component == "about-me"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 3,
                            class: k([
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
                            te(b2, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component in r
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 4,
                            class: k([
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
                            (O(),
                            oe(
                              Cn(r[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component in o
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 5,
                            class: k([
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
                            (O(),
                            oe(
                              Cn(o[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component in l
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 6,
                            class: k([
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
                            (O(),
                            oe(
                              Cn(l[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component in a
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 7,
                            class: k([
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
                            (O(),
                            oe(
                              Cn(a[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component in u
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 8,
                            class: k([
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
                            (O(),
                            oe(
                              Cn(u[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component in c
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 9,
                            class: k([
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
                            (O(),
                            oe(
                              Cn(c[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component == "home"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 10,
                            class: k([
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
                            te(M2, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                    e.component == "web-services"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 11,
                            class: k([
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
                            te(Q0, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                  ]),
                  p("div", By, [
                    e.component == "web-services"
                      ? (O(),
                        D(
                          "div",
                          {
                            key: 0,
                            class: k([
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
                            te(Iv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : we("", !0),
                  ]),
                  te(W0, { brightness: t.value, class: "mt-10" }, null, 8, [
                    "brightness",
                  ]),
                ],
                2,
              ),
              n.value
                ? (O(),
                  oe($v, { key: 0, brightness: t.value }, null, 8, [
                    "brightness",
                  ]))
                : we("", !0),
            ],
            64,
          )
        )
      )
    },
  },
  Ry = fn(Ny, [["__scopeId", "data-v-9cee305c"]]),
  Tl = [
    { path: "/", component: null, props: { component: "home" } },
    {
      path: "/web-services",
      component: null,
      props: { component: "web-services" },
    },
    { path: "/pricing", component: null, props: { component: "pricing" } },
    { path: "/contact", component: null, props: { component: "contact" } },
    { path: "/about-me", component: null, props: { component: "about-me" } },
    {
      path: "/web-portfolio",
      component: null,
      props: { component: "web-portfolio" },
    },
    {
      path: "/web-portfolio/bazaar",
      component: null,
      props: { component: "bazaar" },
    },
    {
      path: "/web-portfolio/okc-south-stake",
      component: null,
      props: { component: "okc-south-stake" },
    },
    {
      path: "/web-portfolio/build-on-your-land",
      component: null,
      props: { component: "build-on-your-land" },
    },
    {
      path: "/web-portfolio/aris-search",
      component: null,
      props: { component: "aris-search" },
    },
    {
      path: "/web-portfolio/swim-state-pool",
      component: null,
      props: { component: "swim-state-pool" },
    },
    {
      path: "/web-portfolio/atlanta-floor-one",
      component: null,
      props: { component: "atlanta-floor-one" },
    },
    {
      path: "/web-portfolio/stehl-family-dental",
      component: null,
      props: { component: "stehl-family-dental" },
    },
    {
      path: "/web-portfolio/stuart-pipe",
      component: null,
      props: { component: "stuart-pipe" },
    },
    {
      path: "/web-portfolio/tub-boys",
      component: null,
      props: { component: "tub-boys" },
    },
    {
      path: "/web-portfolio/chai",
      component: null,
      props: { component: "chai" },
    },
    {
      path: "/web-portfolio/feed-council",
      component: null,
      props: { component: "feed-council" },
    },
    {
      path: "/web-portfolio/josephhansen-dev",
      component: null,
      props: { component: "josephhansen-dev" },
    },
    {
      path: "/unity-editor-scripts",
      component: null,
      props: { component: "helpful-editor-scripts" },
    },
    {
      path: "/unity-projects",
      component: null,
      props: { component: "unity-projects" },
    },
    {
      path: "/unity-shader-graph",
      component: null,
      props: { component: "shader-graph" },
    },
    { path: "/figref", component: null, props: { component: "figref" } },
    {
      path: "/wordpress-themes",
      component: null,
      props: { component: "wordpress-themes" },
    },
    {
      path: "/wordpress-plugins",
      component: null,
      props: { component: "wordpress-plugins" },
    },
    {
      path: "/discourse-image-comparison",
      component: null,
      props: { component: "discourse-image-comparison" },
    },
    {
      path: "/garden-tracker",
      component: null,
      props: { component: "garden-tracker" },
    },
    {
      path: "/javascript-snippets",
      component: null,
      props: { component: "javascript-snippets" },
    },
    {
      path: "/blender-arduino-controller",
      component: null,
      props: { component: "blender-arduino-controller" },
    },
    {
      path: "/arduino-leds",
      component: null,
      props: { component: "arduino-leds" },
    },
    {
      path: "/instagram-scraper",
      component: null,
      props: { component: "instagram-scraper" },
    },
    {
      path: "/blender-art",
      component: null,
      props: { component: "art-portfolio" },
    },
    { path: "/fruitbat", component: null, props: { component: "fruitbat" } },
    {
      path: "/blender-addons",
      component: null,
      props: { component: "addons" },
    },
    {
      path: "/shading-rig",
      component: null,
      props: { component: "shading-rig" },
    },
    { path: "/devlog", component: null, props: { component: "devlog" } },
    { path: "/blog", component: null, props: { component: "blog" } },
    {
      path: "/presentations",
      component: null,
      props: { component: "presentations" },
    },
    { path: "/resume", component: null, props: { component: "resume" } },
  ]
Tl.map((e) => e.path)
Tl.forEach((e) => {
  e.component = Ry
})
const zy = Dh({ history: gh(), routes: Tl }),
  yc = Nf(Hf)
yc.use(zy)
yc.mount("#app")
