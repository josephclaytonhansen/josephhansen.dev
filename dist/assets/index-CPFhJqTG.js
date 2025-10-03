;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i)
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l)
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
function Mr(e) {
  const t = Object.create(null)
  for (const n of e.split(",")) t[n] = 1
  return (n) => n in t
}
const Ie = {},
  Mn = [],
  Lt = () => {},
  ja = () => !1,
  ni = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Or = (e) => e.startsWith("onUpdate:"),
  Ye = Object.assign,
  Ar = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  tc = Object.prototype.hasOwnProperty,
  Ee = (e, t) => tc.call(e, t),
  oe = Array.isArray,
  On = (e) => si(e) === "[object Map]",
  Ra = (e) => si(e) === "[object Set]",
  de = (e) => typeof e == "function",
  Be = (e) => typeof e == "string",
  Yt = (e) => typeof e == "symbol",
  Ae = (e) => e !== null && typeof e == "object",
  Na = (e) => (Ae(e) || de(e)) && de(e.then) && de(e.catch),
  za = Object.prototype.toString,
  si = (e) => za.call(e),
  nc = (e) => si(e).slice(8, -1),
  Da = (e) => si(e) === "[object Object]",
  $r = (e) =>
    Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Zn = Mr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ii = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  sc = /-\w/g,
  vt = ii((e) => e.replace(sc, (t) => t.slice(1).toUpperCase())),
  ic = /\B([A-Z])/g,
  xn = ii((e) => e.replace(ic, "-$1").toLowerCase()),
  ri = ii((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  xi = ii((e) => (e ? `on${ri(e)}` : "")),
  on = (e, t) => !Object.is(e, t),
  Ls = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Fa = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  or = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let xl
const li = () =>
  xl ||
  (xl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function ai(e) {
  if (oe(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = Be(s) ? oc(s) : ai(s)
      if (i) for (const r in i) t[r] = i[r]
    }
    return t
  } else if (Be(e) || Ae(e)) return e
}
const rc = /;(?![^(]*\))/g,
  lc = /:([^]+)/,
  ac = /\/\*[^]*?\*\//g
function oc(e) {
  const t = {}
  return (
    e
      .replace(ac, "")
      .split(rc)
      .forEach((n) => {
        if (n) {
          const s = n.split(lc)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function P(e) {
  let t = ""
  if (Be(e)) t = e
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const s = P(e[n])
      s && (t += s + " ")
    }
  else if (Ae(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const uc =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  cc = Mr(uc)
function Ha(e) {
  return !!e || e === ""
}
const Ga = (e) => !!(e && e.__v_isRef === !0),
  Je = (e) =>
    Be(e)
      ? e
      : e == null
        ? ""
        : oe(e) || (Ae(e) && (e.toString === za || !de(e.toString)))
          ? Ga(e)
            ? Je(e.value)
            : JSON.stringify(e, Va, 2)
          : String(e),
  Va = (e, t) =>
    Ga(t)
      ? Va(e, t.value)
      : On(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i], r) => ((n[Si(s, r) + " =>"] = i), n),
              {},
            ),
          }
        : Ra(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Si(n)) }
          : Yt(t)
            ? Si(t)
            : Ae(t) && !oe(t) && !Da(t)
              ? String(t)
              : t,
  Si = (e, t = "") => {
    var n
    return Yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let st
class dc {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = st),
      !t && st && (this.index = (st.scopes || (st.scopes = [])).push(this) - 1)
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
      const n = st
      try {
        return (st = this), t()
      } finally {
        st = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = st), (st = this))
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((st = this.prevScope), (this.prevScope = void 0))
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
function fc() {
  return st
}
let Oe
const Ei = new WeakSet()
class Wa {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      st && st.active && st.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ei.has(this) && (Ei.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ua(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Sl(this), Ka(this)
    const t = Oe,
      n = St
    ;(Oe = this), (St = !0)
    try {
      return this.fn()
    } finally {
      Ya(this), (Oe = t), (St = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Br(t)
      ;(this.deps = this.depsTail = void 0),
        Sl(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Ei.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    ur(this) && this.run()
  }
  get dirty() {
    return ur(this)
  }
}
let qa = 0,
  Qn,
  es
function Ua(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = es), (es = e)
    return
  }
  ;(e.next = Qn), (Qn = e)
}
function Lr() {
  qa++
}
function _r() {
  if (--qa > 0) return
  if (es) {
    let t = es
    for (es = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; Qn; ) {
    let t = Qn
    for (Qn = void 0; t; ) {
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
function Ka(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function Ya(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const i = s.prevDep
    s.version === -1 ? (s === n && (n = i), Br(s), pc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function ur(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Xa(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Xa(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === ls) ||
    ((e.globalVersion = ls),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !ur(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = Oe,
    s = St
  ;(Oe = e), (St = !0)
  try {
    Ka(e)
    const i = e.fn(e._value)
    ;(t.version === 0 || on(i, e._value)) &&
      ((e.flags |= 128), (e._value = i), t.version++)
  } catch (i) {
    throw (t.version++, i)
  } finally {
    ;(Oe = n), (St = s), Ya(e), (e.flags &= -3)
  }
}
function Br(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let r = n.computed.deps; r; r = r.nextDep) Br(r, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function pc(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let St = !0
const Ja = []
function qt() {
  Ja.push(St), (St = !1)
}
function Ut() {
  const e = Ja.pop()
  St = e === void 0 ? !0 : e
}
function Sl(e) {
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
let ls = 0
class hc {
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
class jr {
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
    if (!Oe || !St || Oe === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== Oe)
      (n = this.activeLink = new hc(Oe, this)),
        Oe.deps
          ? ((n.prevDep = Oe.depsTail),
            (Oe.depsTail.nextDep = n),
            (Oe.depsTail = n))
          : (Oe.deps = Oe.depsTail = n),
        Za(n)
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
    this.version++, ls++, this.notify(t)
  }
  notify(t) {
    Lr()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      _r()
    }
  }
}
function Za(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Za(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const cr = new WeakMap(),
  bn = Symbol(""),
  dr = Symbol(""),
  as = Symbol("")
function qe(e, t, n) {
  if (St && Oe) {
    let s = cr.get(e)
    s || cr.set(e, (s = new Map()))
    let i = s.get(n)
    i || (s.set(n, (i = new jr())), (i.map = s), (i.key = n)), i.track()
  }
}
function Ht(e, t, n, s, i, r) {
  const l = cr.get(e)
  if (!l) {
    ls++
    return
  }
  const a = (o) => {
    o && o.trigger()
  }
  if ((Lr(), t === "clear")) l.forEach(a)
  else {
    const o = oe(e),
      c = o && $r(n)
    if (o && n === "length") {
      const u = Number(s)
      l.forEach((d, f) => {
        ;(f === "length" || f === as || (!Yt(f) && f >= u)) && a(d)
      })
    } else
      switch (
        ((n !== void 0 || l.has(void 0)) && a(l.get(n)), c && a(l.get(as)), t)
      ) {
        case "add":
          o ? c && a(l.get("length")) : (a(l.get(bn)), On(e) && a(l.get(dr)))
          break
        case "delete":
          o || (a(l.get(bn)), On(e) && a(l.get(dr)))
          break
        case "set":
          On(e) && a(l.get(bn))
          break
      }
  }
  _r()
}
function Sn(e) {
  const t = Se(e)
  return t === e ? t : (qe(t, "iterate", as), mt(e) ? t : t.map(Ge))
}
function oi(e) {
  return qe((e = Se(e)), "iterate", as), e
}
const gc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ti(this, Symbol.iterator, Ge)
  },
  concat(...e) {
    return Sn(this).concat(...e.map((t) => (oe(t) ? Sn(t) : t)))
  },
  entries() {
    return Ti(this, "entries", (e) => ((e[1] = Ge(e[1])), e))
  },
  every(e, t) {
    return jt(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return jt(this, "filter", e, t, (n) => n.map(Ge), arguments)
  },
  find(e, t) {
    return jt(this, "find", e, t, Ge, arguments)
  },
  findIndex(e, t) {
    return jt(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return jt(this, "findLast", e, t, Ge, arguments)
  },
  findLastIndex(e, t) {
    return jt(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return jt(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return Ci(this, "includes", e)
  },
  indexOf(...e) {
    return Ci(this, "indexOf", e)
  },
  join(e) {
    return Sn(this).join(e)
  },
  lastIndexOf(...e) {
    return Ci(this, "lastIndexOf", e)
  },
  map(e, t) {
    return jt(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return Wn(this, "pop")
  },
  push(...e) {
    return Wn(this, "push", e)
  },
  reduce(e, ...t) {
    return El(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return El(this, "reduceRight", e, t)
  },
  shift() {
    return Wn(this, "shift")
  },
  some(e, t) {
    return jt(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return Wn(this, "splice", e)
  },
  toReversed() {
    return Sn(this).toReversed()
  },
  toSorted(e) {
    return Sn(this).toSorted(e)
  },
  toSpliced(...e) {
    return Sn(this).toSpliced(...e)
  },
  unshift(...e) {
    return Wn(this, "unshift", e)
  },
  values() {
    return Ti(this, "values", Ge)
  },
}
function Ti(e, t, n) {
  const s = oi(e),
    i = s[t]()
  return (
    s !== e &&
      !mt(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next()
        return r.done || (r.value = n(r.value)), r
      })),
    i
  )
}
const mc = Array.prototype
function jt(e, t, n, s, i, r) {
  const l = oi(e),
    a = l !== e && !mt(e),
    o = l[t]
  if (o !== mc[t]) {
    const d = o.apply(e, r)
    return a ? Ge(d) : d
  }
  let c = n
  l !== e &&
    (a
      ? (c = function (d, f) {
          return n.call(this, Ge(d), f, e)
        })
      : n.length > 2 &&
        (c = function (d, f) {
          return n.call(this, d, f, e)
        }))
  const u = o.call(l, c, s)
  return a && i ? i(u) : u
}
function El(e, t, n, s) {
  const i = oi(e)
  let r = n
  return (
    i !== e &&
      (mt(e)
        ? n.length > 3 &&
          (r = function (l, a, o) {
            return n.call(this, l, a, o, e)
          })
        : (r = function (l, a, o) {
            return n.call(this, l, Ge(a), o, e)
          })),
    i[t](r, ...s)
  )
}
function Ci(e, t, n) {
  const s = Se(e)
  qe(s, "iterate", as)
  const i = s[t](...n)
  return (i === -1 || i === !1) && zr(n[0])
    ? ((n[0] = Se(n[0])), s[t](...n))
    : i
}
function Wn(e, t, n = []) {
  qt(), Lr()
  const s = Se(e)[t].apply(e, n)
  return _r(), Ut(), s
}
const bc = Mr("__proto__,__v_isRef,__isVue"),
  Qa = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Yt),
  )
function vc(e) {
  Yt(e) || (e = String(e))
  const t = Se(this)
  return qe(t, "has", e), t.hasOwnProperty(e)
}
class eo {
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
      return s === (i ? (r ? Ic : io) : r ? so : no).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const l = oe(t)
    if (!i) {
      let o
      if (l && (o = gc[n])) return o
      if (n === "hasOwnProperty") return vc
    }
    const a = Reflect.get(t, n, Fe(t) ? t : s)
    if ((Yt(n) ? Qa.has(n) : bc(n)) || (i || qe(t, "get", n), r)) return a
    if (Fe(a)) {
      const o = l && $r(n) ? a : a.value
      return i && Ae(o) ? pr(o) : o
    }
    return Ae(a) ? (i ? pr(a) : bs(a)) : a
  }
}
class to extends eo {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, i) {
    let r = t[n]
    if (!this._isShallow) {
      const o = cn(r)
      if (
        (!mt(s) && !cn(s) && ((r = Se(r)), (s = Se(s))),
        !oe(t) && Fe(r) && !Fe(s))
      )
        return o || (r.value = s), !0
    }
    const l = oe(t) && $r(n) ? Number(n) < t.length : Ee(t, n),
      a = Reflect.set(t, n, s, Fe(t) ? t : i)
    return (
      t === Se(i) && (l ? on(s, r) && Ht(t, "set", n, s) : Ht(t, "add", n, s)),
      a
    )
  }
  deleteProperty(t, n) {
    const s = Ee(t, n)
    t[n]
    const i = Reflect.deleteProperty(t, n)
    return i && s && Ht(t, "delete", n, void 0), i
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Yt(n) || !Qa.has(n)) && qe(t, "has", n), s
  }
  ownKeys(t) {
    return qe(t, "iterate", oe(t) ? "length" : bn), Reflect.ownKeys(t)
  }
}
class yc extends eo {
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
const wc = new to(),
  xc = new yc(),
  Sc = new to(!0)
const fr = (e) => e,
  Ss = (e) => Reflect.getPrototypeOf(e)
function Ec(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = Se(i),
      l = On(r),
      a = e === "entries" || (e === Symbol.iterator && l),
      o = e === "keys" && l,
      c = i[e](...s),
      u = n ? fr : t ? Hs : Ge
    return (
      !t && qe(r, "iterate", o ? dr : bn),
      {
        next() {
          const { value: d, done: f } = c.next()
          return f
            ? { value: d, done: f }
            : { value: a ? [u(d[0]), u(d[1])] : u(d), done: f }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Es(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function Tc(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        l = Se(r),
        a = Se(i)
      e || (on(i, a) && qe(l, "get", i), qe(l, "get", a))
      const { has: o } = Ss(l),
        c = t ? fr : e ? Hs : Ge
      if (o.call(l, i)) return c(r.get(i))
      if (o.call(l, a)) return c(r.get(a))
      r !== l && r.get(i)
    },
    get size() {
      const i = this.__v_raw
      return !e && qe(Se(i), "iterate", bn), i.size
    },
    has(i) {
      const r = this.__v_raw,
        l = Se(r),
        a = Se(i)
      return (
        e || (on(i, a) && qe(l, "has", i), qe(l, "has", a)),
        i === a ? r.has(i) : r.has(i) || r.has(a)
      )
    },
    forEach(i, r) {
      const l = this,
        a = l.__v_raw,
        o = Se(a),
        c = t ? fr : e ? Hs : Ge
      return (
        !e && qe(o, "iterate", bn),
        a.forEach((u, d) => i.call(r, c(u), c(d), l))
      )
    },
  }
  return (
    Ye(
      n,
      e
        ? {
            add: Es("add"),
            set: Es("set"),
            delete: Es("delete"),
            clear: Es("clear"),
          }
        : {
            add(i) {
              !t && !mt(i) && !cn(i) && (i = Se(i))
              const r = Se(this)
              return (
                Ss(r).has.call(r, i) || (r.add(i), Ht(r, "add", i, i)), this
              )
            },
            set(i, r) {
              !t && !mt(r) && !cn(r) && (r = Se(r))
              const l = Se(this),
                { has: a, get: o } = Ss(l)
              let c = a.call(l, i)
              c || ((i = Se(i)), (c = a.call(l, i)))
              const u = o.call(l, i)
              return (
                l.set(i, r),
                c ? on(r, u) && Ht(l, "set", i, r) : Ht(l, "add", i, r),
                this
              )
            },
            delete(i) {
              const r = Se(this),
                { has: l, get: a } = Ss(r)
              let o = l.call(r, i)
              o || ((i = Se(i)), (o = l.call(r, i))), a && a.call(r, i)
              const c = r.delete(i)
              return o && Ht(r, "delete", i, void 0), c
            },
            clear() {
              const i = Se(this),
                r = i.size !== 0,
                l = i.clear()
              return r && Ht(i, "clear", void 0, void 0), l
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Ec(i, e, t)
    }),
    n
  )
}
function Rr(e, t) {
  const n = Tc(e, t)
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
          ? s
          : Reflect.get(Ee(n, i) && i in s ? n : s, i, r)
}
const Cc = { get: Rr(!1, !1) },
  Pc = { get: Rr(!1, !0) },
  kc = { get: Rr(!0, !1) }
const no = new WeakMap(),
  so = new WeakMap(),
  io = new WeakMap(),
  Ic = new WeakMap()
function Mc(e) {
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
function Oc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mc(nc(e))
}
function bs(e) {
  return cn(e) ? e : Nr(e, !1, wc, Cc, no)
}
function ro(e) {
  return Nr(e, !1, Sc, Pc, so)
}
function pr(e) {
  return Nr(e, !0, xc, kc, io)
}
function Nr(e, t, n, s, i) {
  if (!Ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = Oc(e)
  if (r === 0) return e
  const l = i.get(e)
  if (l) return l
  const a = new Proxy(e, r === 2 ? s : n)
  return i.set(e, a), a
}
function An(e) {
  return cn(e) ? An(e.__v_raw) : !!(e && e.__v_isReactive)
}
function cn(e) {
  return !!(e && e.__v_isReadonly)
}
function mt(e) {
  return !!(e && e.__v_isShallow)
}
function zr(e) {
  return e ? !!e.__v_raw : !1
}
function Se(e) {
  const t = e && e.__v_raw
  return t ? Se(t) : e
}
function Ac(e) {
  return (
    !Ee(e, "__v_skip") && Object.isExtensible(e) && Fa(e, "__v_skip", !0), e
  )
}
const Ge = (e) => (Ae(e) ? bs(e) : e),
  Hs = (e) => (Ae(e) ? pr(e) : e)
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1
}
function V(e) {
  return lo(e, !1)
}
function $c(e) {
  return lo(e, !0)
}
function lo(e, t) {
  return Fe(e) ? e : new Lc(e, t)
}
class Lc {
  constructor(t, n) {
    ;(this.dep = new jr()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Se(t)),
      (this._value = n ? t : Ge(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || mt(t) || cn(t)
    ;(t = s ? t : Se(t)),
      on(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ge(t)),
        this.dep.trigger())
  }
}
function ne(e) {
  return Fe(e) ? e.value : e
}
const _c = {
  get: (e, t, n) => (t === "__v_raw" ? e : ne(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t]
    return Fe(i) && !Fe(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function ao(e) {
  return An(e) ? e : new Proxy(e, _c)
}
class Bc {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new jr(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ls - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Oe !== this))
      return Ua(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return Xa(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function jc(e, t, n = !1) {
  let s, i
  return de(e) ? (s = e) : ((s = e.get), (i = e.set)), new Bc(s, i, n)
}
const Ts = {},
  Gs = new WeakMap()
let mn
function Rc(e, t = !1, n = mn) {
  if (n) {
    let s = Gs.get(n)
    s || Gs.set(n, (s = [])), s.push(e)
  }
}
function Nc(e, t, n = Ie) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: l,
      augmentJob: a,
      call: o,
    } = n,
    c = (x) => (i ? x : mt(x) || i === !1 || i === 0 ? Gt(x, 1) : Gt(x))
  let u,
    d,
    f,
    h,
    m = !1,
    b = !1
  if (
    (Fe(e)
      ? ((d = () => e.value), (m = mt(e)))
      : An(e)
        ? ((d = () => c(e)), (m = !0))
        : oe(e)
          ? ((b = !0),
            (m = e.some((x) => An(x) || mt(x))),
            (d = () =>
              e.map((x) => {
                if (Fe(x)) return x.value
                if (An(x)) return c(x)
                if (de(x)) return o ? o(x, 2) : x()
              })))
          : de(e)
            ? t
              ? (d = o ? () => o(e, 2) : e)
              : (d = () => {
                  if (f) {
                    qt()
                    try {
                      f()
                    } finally {
                      Ut()
                    }
                  }
                  const x = mn
                  mn = u
                  try {
                    return o ? o(e, 3, [h]) : e(h)
                  } finally {
                    mn = x
                  }
                })
            : (d = Lt),
    t && i)
  ) {
    const x = d,
      T = i === !0 ? 1 / 0 : i
    d = () => Gt(x(), T)
  }
  const C = fc(),
    w = () => {
      u.stop(), C && C.active && Ar(C.effects, u)
    }
  if (r && t) {
    const x = t
    t = (...T) => {
      x(...T), w()
    }
  }
  let g = b ? new Array(e.length).fill(Ts) : Ts
  const v = (x) => {
    if (!(!(u.flags & 1) || (!u.dirty && !x)))
      if (t) {
        const T = u.run()
        if (i || m || (b ? T.some((O, E) => on(O, g[E])) : on(T, g))) {
          f && f()
          const O = mn
          mn = u
          try {
            const E = [T, g === Ts ? void 0 : b && g[0] === Ts ? [] : g, h]
            ;(g = T), o ? o(t, 3, E) : t(...E)
          } finally {
            mn = O
          }
        }
      } else u.run()
  }
  return (
    a && a(v),
    (u = new Wa(d)),
    (u.scheduler = l ? () => l(v, !1) : v),
    (h = (x) => Rc(x, !1, u)),
    (f = u.onStop =
      () => {
        const x = Gs.get(u)
        if (x) {
          if (o) o(x, 4)
          else for (const T of x) T()
          Gs.delete(u)
        }
      }),
    t ? (s ? v(!0) : (g = u.run())) : l ? l(v.bind(null, !0), !0) : u.run(),
    (w.pause = u.pause.bind(u)),
    (w.resume = u.resume.bind(u)),
    (w.stop = w),
    w
  )
}
function Gt(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !Ae(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e
  if ((n.set(e, t), t--, Fe(e))) Gt(e.value, t, n)
  else if (oe(e)) for (let s = 0; s < e.length; s++) Gt(e[s], t, n)
  else if (Ra(e) || On(e))
    e.forEach((s) => {
      Gt(s, t, n)
    })
  else if (Da(e)) {
    for (const s in e) Gt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Gt(e[s], t, n)
  }
  return e
}
function vs(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (i) {
    ui(i, t, n)
  }
}
function Bt(e, t, n, s) {
  if (de(e)) {
    const i = vs(e, t, n, s)
    return (
      i &&
        Na(i) &&
        i.catch((r) => {
          ui(r, t, n)
        }),
      i
    )
  }
  if (oe(e)) {
    const i = []
    for (let r = 0; r < e.length; r++) i.push(Bt(e[r], t, n, s))
    return i
  }
}
function ui(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: l } =
      (t && t.appContext.config) || Ie
  if (t) {
    let a = t.parent
    const o = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; a; ) {
      const u = a.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, o, c) === !1) return
      }
      a = a.parent
    }
    if (r) {
      qt(), vs(r, null, 10, [e, o, c]), Ut()
      return
    }
  }
  zc(e, n, i, s, l)
}
function zc(e, t, n, s = !0, i = !1) {
  if (i) throw e
  console.error(e)
}
const Ze = []
let Ot = -1
const $n = []
let nn = null,
  Cn = 0
const oo = Promise.resolve()
let Vs = null
function ci(e) {
  const t = Vs || oo
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Dc(e) {
  let t = Ot + 1,
    n = Ze.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = Ze[s],
      r = os(i)
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Dr(e) {
  if (!(e.flags & 1)) {
    const t = os(e),
      n = Ze[Ze.length - 1]
    !n || (!(e.flags & 2) && t >= os(n)) ? Ze.push(e) : Ze.splice(Dc(t), 0, e),
      (e.flags |= 1),
      uo()
  }
}
function uo() {
  Vs || (Vs = oo.then(fo))
}
function Fc(e) {
  oe(e)
    ? $n.push(...e)
    : nn && e.id === -1
      ? nn.splice(Cn + 1, 0, e)
      : e.flags & 1 || ($n.push(e), (e.flags |= 1)),
    uo()
}
function Tl(e, t, n = Ot + 1) {
  for (; n < Ze.length; n++) {
    const s = Ze[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      Ze.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function co(e) {
  if ($n.length) {
    const t = [...new Set($n)].sort((n, s) => os(n) - os(s))
    if ((($n.length = 0), nn)) {
      nn.push(...t)
      return
    }
    for (nn = t, Cn = 0; Cn < nn.length; Cn++) {
      const n = nn[Cn]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(nn = null), (Cn = 0)
  }
}
const os = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function fo(e) {
  try {
    for (Ot = 0; Ot < Ze.length; Ot++) {
      const t = Ze[Ot]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        vs(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ot < Ze.length; Ot++) {
      const t = Ze[Ot]
      t && (t.flags &= -2)
    }
    ;(Ot = -1),
      (Ze.length = 0),
      co(),
      (Vs = null),
      (Ze.length || $n.length) && fo()
  }
}
let Ve = null,
  po = null
function Ws(e) {
  const t = Ve
  return (Ve = e), (po = (e && e.type.__scopeId) || null), t
}
function we(e, t = Ve, n) {
  if (!t || e._n) return e
  const s = (...i) => {
    s._d && Ks(-1)
    const r = Ws(t)
    let l
    try {
      l = e(...i)
    } finally {
      Ws(r), s._d && Ks(1)
    }
    return l
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function ho(e, t) {
  if (Ve === null) return e
  const n = hi(Ve),
    s = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [r, l, a, o = Ie] = t[i]
    r &&
      (de(r) && (r = { mounted: r, updated: r }),
      r.deep && Gt(l),
      s.push({
        dir: r,
        instance: n,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: o,
      }))
  }
  return e
}
function hn(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs
  for (let l = 0; l < i.length; l++) {
    const a = i[l]
    r && (a.oldValue = r[l].value)
    let o = a.dir[s]
    o && (qt(), Bt(o, n, 8, [e.el, a, e, t]), Ut())
  }
}
const Hc = Symbol("_vte"),
  Gc = (e) => e.__isTeleport,
  Vc = Symbol("_leaveCb")
function Fr(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Fr(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function ft(e, t) {
  return de(e) ? Ye({ name: e.name }, t, { setup: e }) : e
}
function Wc() {
  const e = No()
  return e
    ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++
    : ""
}
function go(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const qs = new WeakMap()
function ts(e, t, n, s, i = !1) {
  if (oe(e)) {
    e.forEach((m, b) => ts(m, t && (oe(t) ? t[b] : t), n, s, i))
    return
  }
  if (Ln(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      ts(e, t, n, s.component.subTree)
    return
  }
  const r = s.shapeFlag & 4 ? hi(s.component) : s.el,
    l = i ? null : r,
    { i: a, r: o } = e,
    c = t && t.r,
    u = a.refs === Ie ? (a.refs = {}) : a.refs,
    d = a.setupState,
    f = Se(d),
    h = d === Ie ? ja : (m) => Ee(f, m)
  if (c != null && c !== o) {
    if ((Cl(t), Be(c))) (u[c] = null), h(c) && (d[c] = null)
    else if (Fe(c)) {
      c.value = null
      const m = t
      m.k && (u[m.k] = null)
    }
  }
  if (de(o)) vs(o, a, 12, [l, u])
  else {
    const m = Be(o),
      b = Fe(o)
    if (m || b) {
      const C = () => {
        if (e.f) {
          const w = m ? (h(o) ? d[o] : u[o]) : o.value
          if (i) oe(w) && Ar(w, r)
          else if (oe(w)) w.includes(r) || w.push(r)
          else if (m) (u[o] = [r]), h(o) && (d[o] = u[o])
          else {
            const g = [r]
            ;(o.value = g), e.k && (u[e.k] = g)
          }
        } else
          m
            ? ((u[o] = l), h(o) && (d[o] = l))
            : b && ((o.value = l), e.k && (u[e.k] = l))
      }
      if (l) {
        const w = () => {
          C(), qs.delete(e)
        }
        ;(w.id = -1), qs.set(e, w), at(w, n)
      } else Cl(e), C()
    }
  }
}
function Cl(e) {
  const t = qs.get(e)
  t && ((t.flags |= 8), qs.delete(e))
}
li().requestIdleCallback
li().cancelIdleCallback
const Ln = (e) => !!e.type.__asyncLoader,
  mo = (e) => e.type.__isKeepAlive
function qc(e, t) {
  bo(e, "a", t)
}
function Uc(e, t) {
  bo(e, "da", t)
}
function bo(e, t, n = Ue) {
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
  if ((di(t, s, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) mo(i.parent.vnode) && Kc(s, t, n, i), (i = i.parent)
  }
}
function Kc(e, t, n, s) {
  const i = di(t, e, s, !0)
  dn(() => {
    Ar(s[t], i)
  }, n)
}
function di(e, t, n = Ue, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...l) => {
          qt()
          const a = ys(n),
            o = Bt(t, n, e, l)
          return a(), Ut(), o
        })
    return s ? i.unshift(r) : i.push(r), r
  }
}
const Xt =
    (e) =>
    (t, n = Ue) => {
      ;(!ds || e === "sp") && di(e, (...s) => t(...s), n)
    },
  Yc = Xt("bm"),
  We = Xt("m"),
  Hr = Xt("bu"),
  Gr = Xt("u"),
  Vr = Xt("bum"),
  dn = Xt("um"),
  Xc = Xt("sp"),
  Jc = Xt("rtg"),
  Zc = Xt("rtc")
function Qc(e, t = Ue) {
  di("ec", e, t)
}
const Wr = "components",
  ed = "directives"
function td(e, t) {
  return qr(Wr, e, !0, t) || e
}
const vo = Symbol.for("v-ndc")
function nd(e) {
  return Be(e) ? qr(Wr, e, !1) || e : e || vo
}
function sd(e) {
  return qr(ed, e)
}
function qr(e, t, n = !0, s = !1) {
  const i = Ve || Ue
  if (i) {
    const r = i.type
    if (e === Wr) {
      const a = Wd(r, !1)
      if (a && (a === t || a === vt(t) || a === ri(vt(t)))) return r
    }
    const l = Pl(i[e] || r[e], t) || Pl(i.appContext[e], t)
    return !l && s ? r : l
  }
}
function Pl(e, t) {
  return e && (e[t] || e[vt(t)] || e[ri(vt(t))])
}
function Wt(e, t, n, s) {
  let i
  const r = n,
    l = oe(e)
  if (l || Be(e)) {
    const a = l && An(e)
    let o = !1,
      c = !1
    a && ((o = !mt(e)), (c = cn(e)), (e = oi(e))), (i = new Array(e.length))
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(o ? (c ? Hs(Ge(e[u])) : Ge(e[u])) : e[u], u, void 0, r)
  } else if (typeof e == "number") {
    i = new Array(e)
    for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, r)
  } else if (Ae(e))
    if (e[Symbol.iterator]) i = Array.from(e, (a, o) => t(a, o, void 0, r))
    else {
      const a = Object.keys(e)
      i = new Array(a.length)
      for (let o = 0, c = a.length; o < c; o++) {
        const u = a[o]
        i[o] = t(e[u], u, o, r)
      }
    }
  else i = []
  return i
}
function rt(e, t, n = {}, s, i) {
  if (Ve.ce || (Ve.parent && Ln(Ve.parent) && Ve.parent.ce)) {
    const c = Object.keys(n).length > 0
    return H(), be(Pe, null, [Z("slot", n, s && s())], c ? -2 : 64)
  }
  let r = e[t]
  r && r._c && (r._d = !1), H()
  const l = r && yo(r(n)),
    a = n.key || (l && l.key),
    o = be(
      Pe,
      { key: (a && !Yt(a) ? a : `_${t}`) + (!l && s ? "_fb" : "") },
      l || (s ? s() : []),
      l && e._ === 1 ? 64 : -2,
    )
  return (
    !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    o
  )
}
function yo(e) {
  return e.some((t) =>
    cs(t) ? !(t.type === Kt || (t.type === Pe && !yo(t.children))) : !0,
  )
    ? e
    : null
}
const hr = (e) => (e ? (zo(e) ? hi(e) : hr(e.parent)) : null),
  ns = Ye(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => hr(e.parent),
    $root: (e) => hr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xo(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Dr(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = ci.bind(e.proxy)),
    $watch: (e) => Td.bind(e),
  }),
  Pi = (e, t) => e !== Ie && !e.__isScriptSetup && Ee(e, t),
  id = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: l,
        type: a,
        appContext: o,
      } = e
      let c
      if (t[0] !== "$") {
        const h = l[t]
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
          if (Pi(s, t)) return (l[t] = 1), s[t]
          if (i !== Ie && Ee(i, t)) return (l[t] = 2), i[t]
          if ((c = e.propsOptions[0]) && Ee(c, t)) return (l[t] = 3), r[t]
          if (n !== Ie && Ee(n, t)) return (l[t] = 4), n[t]
          gr && (l[t] = 0)
        }
      }
      const u = ns[t]
      let d, f
      if (u) return t === "$attrs" && qe(e.attrs, "get", ""), u(e)
      if ((d = a.__cssModules) && (d = d[t])) return d
      if (n !== Ie && Ee(n, t)) return (l[t] = 4), n[t]
      if (((f = o.config.globalProperties), Ee(f, t))) return f[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e
      return Pi(i, t)
        ? ((i[t] = n), !0)
        : s !== Ie && Ee(s, t)
          ? ((s[t] = n), !0)
          : Ee(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
          type: l,
        },
      },
      a,
    ) {
      let o, c
      return !!(
        n[a] ||
        (e !== Ie && a[0] !== "$" && Ee(e, a)) ||
        Pi(t, a) ||
        ((o = r[0]) && Ee(o, a)) ||
        Ee(s, a) ||
        Ee(ns, a) ||
        Ee(i.config.globalProperties, a) ||
        ((c = l.__cssModules) && c[a])
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Ee(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function kl(e) {
  return oe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let gr = !0
function rd(e) {
  const t = xo(e),
    n = e.proxy,
    s = e.ctx
  ;(gr = !1), t.beforeCreate && Il(t.beforeCreate, e, "bc")
  const {
    data: i,
    computed: r,
    methods: l,
    watch: a,
    provide: o,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: m,
    activated: b,
    deactivated: C,
    beforeDestroy: w,
    beforeUnmount: g,
    destroyed: v,
    unmounted: x,
    render: T,
    renderTracked: O,
    renderTriggered: E,
    errorCaptured: A,
    serverPrefetch: I,
    expose: M,
    inheritAttrs: L,
    components: D,
    directives: W,
    filters: ue,
  } = t
  if ((c && ld(c, s, null), l))
    for (const R in l) {
      const _ = l[R]
      de(_) && (s[R] = _.bind(n))
    }
  if (i) {
    const R = i.call(n, n)
    Ae(R) && (e.data = bs(R))
  }
  if (((gr = !0), r))
    for (const R in r) {
      const _ = r[R],
        ve = de(_) ? _.bind(n, n) : de(_.get) ? _.get.bind(n, n) : Lt,
        he = !de(_) && de(_.set) ? _.set.bind(n) : Lt,
        $e = te({ get: ve, set: he })
      Object.defineProperty(s, R, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: (Le) => ($e.value = Le),
      })
    }
  if (a) for (const R in a) wo(a[R], s, n, R)
  if (o) {
    const R = de(o) ? o.call(n) : o
    Reflect.ownKeys(R).forEach((_) => {
      bt(_, R[_])
    })
  }
  u && Il(u, e, "c")
  function $(R, _) {
    oe(_) ? _.forEach((ve) => R(ve.bind(n))) : _ && R(_.bind(n))
  }
  if (
    ($(Yc, d),
    $(We, f),
    $(Hr, h),
    $(Gr, m),
    $(qc, b),
    $(Uc, C),
    $(Qc, A),
    $(Zc, O),
    $(Jc, E),
    $(Vr, g),
    $(dn, x),
    $(Xc, I),
    oe(M))
  )
    if (M.length) {
      const R = e.exposed || (e.exposed = {})
      M.forEach((_) => {
        Object.defineProperty(R, _, {
          get: () => n[_],
          set: (ve) => (n[_] = ve),
          enumerable: !0,
        })
      })
    } else e.exposed || (e.exposed = {})
  T && e.render === Lt && (e.render = T),
    L != null && (e.inheritAttrs = L),
    D && (e.components = D),
    W && (e.directives = W),
    I && go(e)
}
function ld(e, t, n = Lt) {
  oe(e) && (e = mr(e))
  for (const s in e) {
    const i = e[s]
    let r
    Ae(i)
      ? "default" in i
        ? (r = Ne(i.from || s, i.default, !0))
        : (r = Ne(i.from || s))
      : (r = Ne(i)),
      Fe(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[s] = r)
  }
}
function Il(e, t, n) {
  Bt(oe(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function wo(e, t, n, s) {
  let i = s.includes(".") ? Lo(n, s) : () => n[s]
  if (Be(e)) {
    const r = t[e]
    de(r) && un(i, r)
  } else if (de(e)) un(i, e.bind(n))
  else if (Ae(e))
    if (oe(e)) e.forEach((r) => wo(r, t, n, s))
    else {
      const r = de(e.handler) ? e.handler.bind(n) : t[e.handler]
      de(r) && un(i, r, e)
    }
}
function xo(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    a = r.get(t)
  let o
  return (
    a
      ? (o = a)
      : !i.length && !n && !s
        ? (o = t)
        : ((o = {}),
          i.length && i.forEach((c) => Us(o, c, l, !0)),
          Us(o, t, l)),
    Ae(t) && r.set(t, o),
    o
  )
}
function Us(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t
  r && Us(e, r, n, !0), i && i.forEach((l) => Us(e, l, n, !0))
  for (const l in t)
    if (!(s && l === "expose")) {
      const a = ad[l] || (n && n[l])
      e[l] = a ? a(e[l], t[l]) : t[l]
    }
  return e
}
const ad = {
  data: Ml,
  props: Ol,
  emits: Ol,
  methods: Jn,
  computed: Jn,
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  components: Jn,
  directives: Jn,
  watch: ud,
  provide: Ml,
  inject: od,
}
function Ml(e, t) {
  return t
    ? e
      ? function () {
          return Ye(
            de(e) ? e.call(this, this) : e,
            de(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function od(e, t) {
  return Jn(mr(e), mr(t))
}
function mr(e) {
  if (oe(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Jn(e, t) {
  return e ? Ye(Object.create(null), e, t) : t
}
function Ol(e, t) {
  return e
    ? oe(e) && oe(t)
      ? [...new Set([...e, ...t])]
      : Ye(Object.create(null), kl(e), kl(t ?? {}))
    : t
}
function ud(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Ye(Object.create(null), e)
  for (const s in t) n[s] = Xe(e[s], t[s])
  return n
}
function So() {
  return {
    app: null,
    config: {
      isNativeTag: ja,
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
let cd = 0
function dd(e, t) {
  return function (s, i = null) {
    de(s) || (s = Ye({}, s)), i != null && !Ae(i) && (i = null)
    const r = So(),
      l = new WeakSet(),
      a = []
    let o = !1
    const c = (r.app = {
      _uid: cd++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ud,
      get config() {
        return r.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          l.has(u) ||
            (u && de(u.install)
              ? (l.add(u), u.install(c, ...d))
              : de(u) && (l.add(u), u(c, ...d))),
          c
        )
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), c
      },
      component(u, d) {
        return d ? ((r.components[u] = d), c) : r.components[u]
      },
      directive(u, d) {
        return d ? ((r.directives[u] = d), c) : r.directives[u]
      },
      mount(u, d, f) {
        if (!o) {
          const h = c._ceVNode || Z(s, i)
          return (
            (h.appContext = r),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            e(h, u, f),
            (o = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            hi(h.component)
          )
        }
      },
      onUnmount(u) {
        a.push(u)
      },
      unmount() {
        o &&
          (Bt(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__)
      },
      provide(u, d) {
        return (r.provides[u] = d), c
      },
      runWithContext(u) {
        const d = _n
        _n = c
        try {
          return u()
        } finally {
          _n = d
        }
      },
    })
    return c
  }
}
let _n = null
function bt(e, t) {
  if (Ue) {
    let n = Ue.provides
    const s = Ue.parent && Ue.parent.provides
    s === n && (n = Ue.provides = Object.create(s)), (n[e] = t)
  }
}
function Ne(e, t, n = !1) {
  const s = No()
  if (s || _n) {
    let i = _n
      ? _n._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && de(t) ? t.call(s && s.proxy) : t
  }
}
const Eo = {},
  To = () => Object.create(Eo),
  Co = (e) => Object.getPrototypeOf(e) === Eo
function fd(e, t, n, s = !1) {
  const i = {},
    r = To()
  ;(e.propsDefaults = Object.create(null)), Po(e, t, i, r)
  for (const l in e.propsOptions[0]) l in i || (i[l] = void 0)
  n ? (e.props = s ? i : ro(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r)
}
function pd(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: l },
    } = e,
    a = Se(i),
    [o] = e.propsOptions
  let c = !1
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let f = u[d]
        if (fi(e.emitsOptions, f)) continue
        const h = t[f]
        if (o)
          if (Ee(r, f)) h !== r[f] && ((r[f] = h), (c = !0))
          else {
            const m = vt(f)
            i[m] = br(o, a, m, h, e, !1)
          }
        else h !== r[f] && ((r[f] = h), (c = !0))
      }
    }
  } else {
    Po(e, t, i, r) && (c = !0)
    let u
    for (const d in a)
      (!t || (!Ee(t, d) && ((u = xn(d)) === d || !Ee(t, u)))) &&
        (o
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (i[d] = br(o, a, d, void 0, e, !0))
          : delete i[d])
    if (r !== a) for (const d in r) (!t || !Ee(t, d)) && (delete r[d], (c = !0))
  }
  c && Ht(e.attrs, "set", "")
}
function Po(e, t, n, s) {
  const [i, r] = e.propsOptions
  let l = !1,
    a
  if (t)
    for (let o in t) {
      if (Zn(o)) continue
      const c = t[o]
      let u
      i && Ee(i, (u = vt(o)))
        ? !r || !r.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : fi(e.emitsOptions, o) ||
          ((!(o in s) || c !== s[o]) && ((s[o] = c), (l = !0)))
    }
  if (r) {
    const o = Se(n),
      c = a || Ie
    for (let u = 0; u < r.length; u++) {
      const d = r[u]
      n[d] = br(i, o, d, c[d], e, !Ee(c, d))
    }
  }
  return l
}
function br(e, t, n, s, i, r) {
  const l = e[n]
  if (l != null) {
    const a = Ee(l, "default")
    if (a && s === void 0) {
      const o = l.default
      if (l.type !== Function && !l.skipFactory && de(o)) {
        const { propsDefaults: c } = i
        if (n in c) s = c[n]
        else {
          const u = ys(i)
          ;(s = c[n] = o.call(null, t)), u()
        }
      } else s = o
      i.ce && i.ce._setProp(n, s)
    }
    l[0] && (r && !a ? (s = !1) : l[1] && (s === "" || s === xn(n)) && (s = !0))
  }
  return s
}
const hd = new WeakMap()
function ko(e, t, n = !1) {
  const s = n ? hd : t.propsCache,
    i = s.get(e)
  if (i) return i
  const r = e.props,
    l = {},
    a = []
  let o = !1
  if (!de(e)) {
    const u = (d) => {
      o = !0
      const [f, h] = ko(d, t, !0)
      Ye(l, f), h && a.push(...h)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!r && !o) return Ae(e) && s.set(e, Mn), Mn
  if (oe(r))
    for (let u = 0; u < r.length; u++) {
      const d = vt(r[u])
      Al(d) && (l[d] = Ie)
    }
  else if (r)
    for (const u in r) {
      const d = vt(u)
      if (Al(d)) {
        const f = r[u],
          h = (l[d] = oe(f) || de(f) ? { type: f } : Ye({}, f)),
          m = h.type
        let b = !1,
          C = !0
        if (oe(m))
          for (let w = 0; w < m.length; ++w) {
            const g = m[w],
              v = de(g) && g.name
            if (v === "Boolean") {
              b = !0
              break
            } else v === "String" && (C = !1)
          }
        else b = de(m) && m.name === "Boolean"
        ;(h[0] = b), (h[1] = C), (b || Ee(h, "default")) && a.push(d)
      }
    }
  const c = [l, a]
  return Ae(e) && s.set(e, c), c
}
function Al(e) {
  return e[0] !== "$" && !Zn(e)
}
const Ur = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Kr = (e) => (oe(e) ? e.map(At) : [At(e)]),
  gd = (e, t, n) => {
    if (t._n) return t
    const s = we((...i) => Kr(t(...i)), n)
    return (s._c = !1), s
  },
  Io = (e, t, n) => {
    const s = e._ctx
    for (const i in e) {
      if (Ur(i)) continue
      const r = e[i]
      if (de(r)) t[i] = gd(i, r, s)
      else if (r != null) {
        const l = Kr(r)
        t[i] = () => l
      }
    }
  },
  Mo = (e, t) => {
    const n = Kr(t)
    e.slots.default = () => n
  },
  Oo = (e, t, n) => {
    for (const s in t) (n || !Ur(s)) && (e[s] = t[s])
  },
  md = (e, t, n) => {
    const s = (e.slots = To())
    if (e.vnode.shapeFlag & 32) {
      const i = t._
      i ? (Oo(s, t, n), n && Fa(s, "_", i, !0)) : Io(t, s)
    } else t && Mo(e, t)
  },
  bd = (e, t, n) => {
    const { vnode: s, slots: i } = e
    let r = !0,
      l = Ie
    if (s.shapeFlag & 32) {
      const a = t._
      a
        ? n && a === 1
          ? (r = !1)
          : Oo(i, t, n)
        : ((r = !t.$stable), Io(t, i)),
        (l = t)
    } else t && (Mo(e, t), (l = { default: 1 }))
    if (r) for (const a in i) !Ur(a) && l[a] == null && delete i[a]
  },
  at = $d
function vd(e) {
  return yd(e)
}
function yd(e, t) {
  const n = li()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: l,
      createText: a,
      createComment: o,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: h = Lt,
      insertStaticContent: m,
    } = e,
    b = (
      y,
      S,
      k,
      N = null,
      z = null,
      j = null,
      Y = void 0,
      U = null,
      q = !!S.dynamicChildren,
    ) => {
      if (y === S) return
      y && !qn(y, S) && ((N = B(y)), Le(y, z, j, !0), (y = null)),
        S.patchFlag === -2 && ((q = !1), (S.dynamicChildren = null))
      const { type: F, ref: re, shapeFlag: X } = S
      switch (F) {
        case pi:
          C(y, S, k, N)
          break
        case Kt:
          w(y, S, k, N)
          break
        case _s:
          y == null && g(S, k, N, Y)
          break
        case Pe:
          D(y, S, k, N, z, j, Y, U, q)
          break
        default:
          X & 1
            ? T(y, S, k, N, z, j, Y, U, q)
            : X & 6
              ? W(y, S, k, N, z, j, Y, U, q)
              : (X & 64 || X & 128) && F.process(y, S, k, N, z, j, Y, U, q, ee)
      }
      re != null && z
        ? ts(re, y && y.ref, j, S || y, !S)
        : re == null && y && y.ref != null && ts(y.ref, null, j, y, !0)
    },
    C = (y, S, k, N) => {
      if (y == null) s((S.el = a(S.children)), k, N)
      else {
        const z = (S.el = y.el)
        S.children !== y.children && c(z, S.children)
      }
    },
    w = (y, S, k, N) => {
      y == null ? s((S.el = o(S.children || "")), k, N) : (S.el = y.el)
    },
    g = (y, S, k, N) => {
      ;[y.el, y.anchor] = m(y.children, S, k, N, y.el, y.anchor)
    },
    v = ({ el: y, anchor: S }, k, N) => {
      let z
      for (; y && y !== S; ) (z = f(y)), s(y, k, N), (y = z)
      s(S, k, N)
    },
    x = ({ el: y, anchor: S }) => {
      let k
      for (; y && y !== S; ) (k = f(y)), i(y), (y = k)
      i(S)
    },
    T = (y, S, k, N, z, j, Y, U, q) => {
      S.type === "svg" ? (Y = "svg") : S.type === "math" && (Y = "mathml"),
        y == null ? O(S, k, N, z, j, Y, U, q) : I(y, S, z, j, Y, U, q)
    },
    O = (y, S, k, N, z, j, Y, U) => {
      let q, F
      const { props: re, shapeFlag: X, transition: ie, dirs: ae } = y
      if (
        ((q = y.el = l(y.type, j, re && re.is, re)),
        X & 8
          ? u(q, y.children)
          : X & 16 && A(y.children, q, null, N, z, ki(y, j), Y, U),
        ae && hn(y, null, N, "created"),
        E(q, y, y.scopeId, Y, N),
        re)
      ) {
        for (const Me in re)
          Me !== "value" && !Zn(Me) && r(q, Me, null, re[Me], j, N)
        "value" in re && r(q, "value", null, re.value, j),
          (F = re.onVnodeBeforeMount) && It(F, N, y)
      }
      ae && hn(y, null, N, "beforeMount")
      const ye = wd(z, ie)
      ye && ie.beforeEnter(q),
        s(q, S, k),
        ((F = re && re.onVnodeMounted) || ye || ae) &&
          at(() => {
            F && It(F, N, y), ye && ie.enter(q), ae && hn(y, null, N, "mounted")
          }, z)
    },
    E = (y, S, k, N, z) => {
      if ((k && h(y, k), N)) for (let j = 0; j < N.length; j++) h(y, N[j])
      if (z) {
        let j = z.subTree
        if (
          S === j ||
          (Bo(j.type) && (j.ssContent === S || j.ssFallback === S))
        ) {
          const Y = z.vnode
          E(y, Y, Y.scopeId, Y.slotScopeIds, z.parent)
        }
      }
    },
    A = (y, S, k, N, z, j, Y, U, q = 0) => {
      for (let F = q; F < y.length; F++) {
        const re = (y[F] = U ? sn(y[F]) : At(y[F]))
        b(null, re, S, k, N, z, j, Y, U)
      }
    },
    I = (y, S, k, N, z, j, Y) => {
      const U = (S.el = y.el)
      let { patchFlag: q, dynamicChildren: F, dirs: re } = S
      q |= y.patchFlag & 16
      const X = y.props || Ie,
        ie = S.props || Ie
      let ae
      if (
        (k && gn(k, !1),
        (ae = ie.onVnodeBeforeUpdate) && It(ae, k, S, y),
        re && hn(S, y, k, "beforeUpdate"),
        k && gn(k, !0),
        ((X.innerHTML && ie.innerHTML == null) ||
          (X.textContent && ie.textContent == null)) &&
          u(U, ""),
        F
          ? M(y.dynamicChildren, F, U, k, N, ki(S, z), j)
          : Y || _(y, S, U, null, k, N, ki(S, z), j, !1),
        q > 0)
      ) {
        if (q & 16) L(U, X, ie, k, z)
        else if (
          (q & 2 && X.class !== ie.class && r(U, "class", null, ie.class, z),
          q & 4 && r(U, "style", X.style, ie.style, z),
          q & 8)
        ) {
          const ye = S.dynamicProps
          for (let Me = 0; Me < ye.length; Me++) {
            const Ce = ye[Me],
              tt = X[Ce],
              nt = ie[Ce]
            ;(nt !== tt || Ce === "value") && r(U, Ce, tt, nt, z, k)
          }
        }
        q & 1 && y.children !== S.children && u(U, S.children)
      } else !Y && F == null && L(U, X, ie, k, z)
      ;((ae = ie.onVnodeUpdated) || re) &&
        at(() => {
          ae && It(ae, k, S, y), re && hn(S, y, k, "updated")
        }, N)
    },
    M = (y, S, k, N, z, j, Y) => {
      for (let U = 0; U < S.length; U++) {
        const q = y[U],
          F = S[U],
          re =
            q.el && (q.type === Pe || !qn(q, F) || q.shapeFlag & 198)
              ? d(q.el)
              : k
        b(q, F, re, null, N, z, j, Y, !0)
      }
    },
    L = (y, S, k, N, z) => {
      if (S !== k) {
        if (S !== Ie)
          for (const j in S) !Zn(j) && !(j in k) && r(y, j, S[j], null, z, N)
        for (const j in k) {
          if (Zn(j)) continue
          const Y = k[j],
            U = S[j]
          Y !== U && j !== "value" && r(y, j, U, Y, z, N)
        }
        "value" in k && r(y, "value", S.value, k.value, z)
      }
    },
    D = (y, S, k, N, z, j, Y, U, q) => {
      const F = (S.el = y ? y.el : a("")),
        re = (S.anchor = y ? y.anchor : a(""))
      let { patchFlag: X, dynamicChildren: ie, slotScopeIds: ae } = S
      ae && (U = U ? U.concat(ae) : ae),
        y == null
          ? (s(F, k, N), s(re, k, N), A(S.children || [], k, re, z, j, Y, U, q))
          : X > 0 && X & 64 && ie && y.dynamicChildren
            ? (M(y.dynamicChildren, ie, k, z, j, Y, U),
              (S.key != null || (z && S === z.subTree)) && Ao(y, S, !0))
            : _(y, S, k, re, z, j, Y, U, q)
    },
    W = (y, S, k, N, z, j, Y, U, q) => {
      ;(S.slotScopeIds = U),
        y == null
          ? S.shapeFlag & 512
            ? z.ctx.activate(S, k, N, Y, q)
            : ue(S, k, N, z, j, Y, q)
          : fe(y, S, q)
    },
    ue = (y, S, k, N, z, j, Y) => {
      const U = (y.component = Dd(y, N, z))
      if ((mo(y) && (U.ctx.renderer = ee), Fd(U, !1, Y), U.asyncDep)) {
        if ((z && z.registerDep(U, $, Y), !y.el)) {
          const q = (U.subTree = Z(Kt))
          w(null, q, S, k), (y.placeholder = q.el)
        }
      } else $(U, y, S, k, z, j, Y)
    },
    fe = (y, S, k) => {
      const N = (S.component = y.component)
      if (Od(y, S, k))
        if (N.asyncDep && !N.asyncResolved) {
          R(N, S, k)
          return
        } else (N.next = S), N.update()
      else (S.el = y.el), (N.vnode = S)
    },
    $ = (y, S, k, N, z, j, Y) => {
      const U = () => {
        if (y.isMounted) {
          let { next: X, bu: ie, u: ae, parent: ye, vnode: Me } = y
          {
            const Pt = $o(y)
            if (Pt) {
              X && ((X.el = Me.el), R(y, X, Y)),
                Pt.asyncDep.then(() => {
                  y.isUnmounted || U()
                })
              return
            }
          }
          let Ce = X,
            tt
          gn(y, !1),
            X ? ((X.el = Me.el), R(y, X, Y)) : (X = Me),
            ie && Ls(ie),
            (tt = X.props && X.props.onVnodeBeforeUpdate) && It(tt, ye, X, Me),
            gn(y, !0)
          const nt = Ll(y),
            Ct = y.subTree
          ;(y.subTree = nt),
            b(Ct, nt, d(Ct.el), B(Ct), y, z, j),
            (X.el = nt.el),
            Ce === null && Ad(y, nt.el),
            ae && at(ae, z),
            (tt = X.props && X.props.onVnodeUpdated) &&
              at(() => It(tt, ye, X, Me), z)
        } else {
          let X
          const { el: ie, props: ae } = S,
            { bm: ye, m: Me, parent: Ce, root: tt, type: nt } = y,
            Ct = Ln(S)
          gn(y, !1),
            ye && Ls(ye),
            !Ct && (X = ae && ae.onVnodeBeforeMount) && It(X, Ce, S),
            gn(y, !0)
          {
            tt.ce && tt.ce._def.shadowRoot !== !1 && tt.ce._injectChildStyle(nt)
            const Pt = (y.subTree = Ll(y))
            b(null, Pt, k, N, y, z, j), (S.el = Pt.el)
          }
          if ((Me && at(Me, z), !Ct && (X = ae && ae.onVnodeMounted))) {
            const Pt = S
            at(() => It(X, Ce, Pt), z)
          }
          ;(S.shapeFlag & 256 ||
            (Ce && Ln(Ce.vnode) && Ce.vnode.shapeFlag & 256)) &&
            y.a &&
            at(y.a, z),
            (y.isMounted = !0),
            (S = k = N = null)
        }
      }
      y.scope.on()
      const q = (y.effect = new Wa(U))
      y.scope.off()
      const F = (y.update = q.run.bind(q)),
        re = (y.job = q.runIfDirty.bind(q))
      ;(re.i = y), (re.id = y.uid), (q.scheduler = () => Dr(re)), gn(y, !0), F()
    },
    R = (y, S, k) => {
      S.component = y
      const N = y.vnode.props
      ;(y.vnode = S),
        (y.next = null),
        pd(y, S.props, N, k),
        bd(y, S.children, k),
        qt(),
        Tl(y),
        Ut()
    },
    _ = (y, S, k, N, z, j, Y, U, q = !1) => {
      const F = y && y.children,
        re = y ? y.shapeFlag : 0,
        X = S.children,
        { patchFlag: ie, shapeFlag: ae } = S
      if (ie > 0) {
        if (ie & 128) {
          he(F, X, k, N, z, j, Y, U, q)
          return
        } else if (ie & 256) {
          ve(F, X, k, N, z, j, Y, U, q)
          return
        }
      }
      ae & 8
        ? (re & 16 && et(F, z, j), X !== F && u(k, X))
        : re & 16
          ? ae & 16
            ? he(F, X, k, N, z, j, Y, U, q)
            : et(F, z, j, !0)
          : (re & 8 && u(k, ""), ae & 16 && A(X, k, N, z, j, Y, U, q))
    },
    ve = (y, S, k, N, z, j, Y, U, q) => {
      ;(y = y || Mn), (S = S || Mn)
      const F = y.length,
        re = S.length,
        X = Math.min(F, re)
      let ie
      for (ie = 0; ie < X; ie++) {
        const ae = (S[ie] = q ? sn(S[ie]) : At(S[ie]))
        b(y[ie], ae, k, null, z, j, Y, U, q)
      }
      F > re ? et(y, z, j, !0, !1, X) : A(S, k, N, z, j, Y, U, q, X)
    },
    he = (y, S, k, N, z, j, Y, U, q) => {
      let F = 0
      const re = S.length
      let X = y.length - 1,
        ie = re - 1
      for (; F <= X && F <= ie; ) {
        const ae = y[F],
          ye = (S[F] = q ? sn(S[F]) : At(S[F]))
        if (qn(ae, ye)) b(ae, ye, k, null, z, j, Y, U, q)
        else break
        F++
      }
      for (; F <= X && F <= ie; ) {
        const ae = y[X],
          ye = (S[ie] = q ? sn(S[ie]) : At(S[ie]))
        if (qn(ae, ye)) b(ae, ye, k, null, z, j, Y, U, q)
        else break
        X--, ie--
      }
      if (F > X) {
        if (F <= ie) {
          const ae = ie + 1,
            ye = ae < re ? S[ae].el : N
          for (; F <= ie; )
            b(null, (S[F] = q ? sn(S[F]) : At(S[F])), k, ye, z, j, Y, U, q), F++
        }
      } else if (F > ie) for (; F <= X; ) Le(y[F], z, j, !0), F++
      else {
        const ae = F,
          ye = F,
          Me = new Map()
        for (F = ye; F <= ie; F++) {
          const lt = (S[F] = q ? sn(S[F]) : At(S[F]))
          lt.key != null && Me.set(lt.key, F)
        }
        let Ce,
          tt = 0
        const nt = ie - ye + 1
        let Ct = !1,
          Pt = 0
        const Vn = new Array(nt)
        for (F = 0; F < nt; F++) Vn[F] = 0
        for (F = ae; F <= X; F++) {
          const lt = y[F]
          if (tt >= nt) {
            Le(lt, z, j, !0)
            continue
          }
          let kt
          if (lt.key != null) kt = Me.get(lt.key)
          else
            for (Ce = ye; Ce <= ie; Ce++)
              if (Vn[Ce - ye] === 0 && qn(lt, S[Ce])) {
                kt = Ce
                break
              }
          kt === void 0
            ? Le(lt, z, j, !0)
            : ((Vn[kt - ye] = F + 1),
              kt >= Pt ? (Pt = kt) : (Ct = !0),
              b(lt, S[kt], k, null, z, j, Y, U, q),
              tt++)
        }
        const vl = Ct ? xd(Vn) : Mn
        for (Ce = vl.length - 1, F = nt - 1; F >= 0; F--) {
          const lt = ye + F,
            kt = S[lt],
            yl = S[lt + 1],
            wl = lt + 1 < re ? yl.el || yl.placeholder : N
          Vn[F] === 0
            ? b(null, kt, k, wl, z, j, Y, U, q)
            : Ct && (Ce < 0 || F !== vl[Ce] ? $e(kt, k, wl, 2) : Ce--)
        }
      }
    },
    $e = (y, S, k, N, z = null) => {
      const { el: j, type: Y, transition: U, children: q, shapeFlag: F } = y
      if (F & 6) {
        $e(y.component.subTree, S, k, N)
        return
      }
      if (F & 128) {
        y.suspense.move(S, k, N)
        return
      }
      if (F & 64) {
        Y.move(y, S, k, ee)
        return
      }
      if (Y === Pe) {
        s(j, S, k)
        for (let X = 0; X < q.length; X++) $e(q[X], S, k, N)
        s(y.anchor, S, k)
        return
      }
      if (Y === _s) {
        v(y, S, k)
        return
      }
      if (N !== 2 && F & 1 && U)
        if (N === 0) U.beforeEnter(j), s(j, S, k), at(() => U.enter(j), z)
        else {
          const { leave: X, delayLeave: ie, afterLeave: ae } = U,
            ye = () => {
              y.ctx.isUnmounted ? i(j) : s(j, S, k)
            },
            Me = () => {
              j._isLeaving && j[Vc](!0),
                X(j, () => {
                  ye(), ae && ae()
                })
            }
          ie ? ie(j, ye, Me) : Me()
        }
      else s(j, S, k)
    },
    Le = (y, S, k, N = !1, z = !1) => {
      const {
        type: j,
        props: Y,
        ref: U,
        children: q,
        dynamicChildren: F,
        shapeFlag: re,
        patchFlag: X,
        dirs: ie,
        cacheIndex: ae,
      } = y
      if (
        (X === -2 && (z = !1),
        U != null && (qt(), ts(U, null, k, y, !0), Ut()),
        ae != null && (S.renderCache[ae] = void 0),
        re & 256)
      ) {
        S.ctx.deactivate(y)
        return
      }
      const ye = re & 1 && ie,
        Me = !Ln(y)
      let Ce
      if ((Me && (Ce = Y && Y.onVnodeBeforeUnmount) && It(Ce, S, y), re & 6))
        gt(y.component, k, N)
      else {
        if (re & 128) {
          y.suspense.unmount(k, N)
          return
        }
        ye && hn(y, null, S, "beforeUnmount"),
          re & 64
            ? y.type.remove(y, S, k, ee, N)
            : F && !F.hasOnce && (j !== Pe || (X > 0 && X & 64))
              ? et(F, S, k, !1, !0)
              : ((j === Pe && X & 384) || (!z && re & 16)) && et(q, S, k),
          N && ht(y)
      }
      ;((Me && (Ce = Y && Y.onVnodeUnmounted)) || ye) &&
        at(() => {
          Ce && It(Ce, S, y), ye && hn(y, null, S, "unmounted")
        }, k)
    },
    ht = (y) => {
      const { type: S, el: k, anchor: N, transition: z } = y
      if (S === Pe) {
        en(k, N)
        return
      }
      if (S === _s) {
        x(y)
        return
      }
      const j = () => {
        i(k), z && !z.persisted && z.afterLeave && z.afterLeave()
      }
      if (y.shapeFlag & 1 && z && !z.persisted) {
        const { leave: Y, delayLeave: U } = z,
          q = () => Y(k, j)
        U ? U(y.el, j, q) : q()
      } else j()
    },
    en = (y, S) => {
      let k
      for (; y !== S; ) (k = f(y)), i(y), (y = k)
      i(S)
    },
    gt = (y, S, k) => {
      const { bum: N, scope: z, job: j, subTree: Y, um: U, m: q, a: F } = y
      $l(q),
        $l(F),
        N && Ls(N),
        z.stop(),
        j && ((j.flags |= 8), Le(Y, y, S, k)),
        U && at(U, S),
        at(() => {
          y.isUnmounted = !0
        }, S)
    },
    et = (y, S, k, N = !1, z = !1, j = 0) => {
      for (let Y = j; Y < y.length; Y++) Le(y[Y], S, k, N, z)
    },
    B = (y) => {
      if (y.shapeFlag & 6) return B(y.component.subTree)
      if (y.shapeFlag & 128) return y.suspense.next()
      const S = f(y.anchor || y.el),
        k = S && S[Hc]
      return k ? f(k) : S
    }
  let J = !1
  const K = (y, S, k) => {
      y == null
        ? S._vnode && Le(S._vnode, null, null, !0)
        : b(S._vnode || null, y, S, null, null, null, k),
        (S._vnode = y),
        J || ((J = !0), Tl(), co(), (J = !1))
    },
    ee = {
      p: b,
      um: Le,
      m: $e,
      r: ht,
      mt: ue,
      mc: A,
      pc: _,
      pbc: M,
      n: B,
      o: e,
    }
  return { render: K, hydrate: void 0, createApp: dd(K) }
}
function ki({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function gn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function wd(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Ao(e, t, n = !1) {
  const s = e.children,
    i = t.children
  if (oe(s) && oe(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r]
      let a = i[r]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = sn(i[r])), (a.el = l.el)),
        !n && a.patchFlag !== -2 && Ao(l, a)),
        a.type === pi && a.patchFlag !== -1 && (a.el = l.el),
        a.type === Kt && !a.el && (a.el = l.el)
    }
}
function xd(e) {
  const t = e.slice(),
    n = [0]
  let s, i, r, l, a
  const o = e.length
  for (s = 0; s < o; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        ;(t[s] = i), n.push(s)
        continue
      }
      for (r = 0, l = n.length - 1; r < l; )
        (a = (r + l) >> 1), e[n[a]] < c ? (r = a + 1) : (l = a)
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s))
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; ) (n[r] = l), (l = t[l])
  return n
}
function $o(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : $o(t)
}
function $l(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Sd = Symbol.for("v-scx"),
  Ed = () => Ne(Sd)
function Jt(e, t) {
  return Yr(e, null, t)
}
function un(e, t, n) {
  return Yr(e, t, n)
}
function Yr(e, t, n = Ie) {
  const { immediate: s, deep: i, flush: r, once: l } = n,
    a = Ye({}, n),
    o = (t && s) || (!t && r !== "post")
  let c
  if (ds) {
    if (r === "sync") {
      const h = Ed()
      c = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!o) {
      const h = () => {}
      return (h.stop = Lt), (h.resume = Lt), (h.pause = Lt), h
    }
  }
  const u = Ue
  a.call = (h, m, b) => Bt(h, u, m, b)
  let d = !1
  r === "post"
    ? (a.scheduler = (h) => {
        at(h, u && u.suspense)
      })
    : r !== "sync" &&
      ((d = !0),
      (a.scheduler = (h, m) => {
        m ? h() : Dr(h)
      })),
    (a.augmentJob = (h) => {
      t && (h.flags |= 4),
        d && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u)))
    })
  const f = Nc(e, t, a)
  return ds && (c ? c.push(f) : o && f()), f
}
function Td(e, t, n) {
  const s = this.proxy,
    i = Be(e) ? (e.includes(".") ? Lo(s, e) : () => s[e]) : e.bind(s, s)
  let r
  de(t) ? (r = t) : ((r = t.handler), (n = t))
  const l = ys(this),
    a = Yr(i, r.bind(s), n)
  return l(), a
}
function Lo(e, t) {
  const n = t.split(".")
  return () => {
    let s = e
    for (let i = 0; i < n.length && s; i++) s = s[n[i]]
    return s
  }
}
const Cd = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${xn(t)}Modifiers`]
function Pd(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || Ie
  let i = n
  const r = t.startsWith("update:"),
    l = r && Cd(s, t.slice(7))
  l &&
    (l.trim && (i = n.map((u) => (Be(u) ? u.trim() : u))),
    l.number && (i = n.map(or)))
  let a,
    o = s[(a = xi(t))] || s[(a = xi(vt(t)))]
  !o && r && (o = s[(a = xi(xn(t)))]), o && Bt(o, e, 6, i)
  const c = s[a + "Once"]
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Bt(c, e, 6, i)
  }
}
const kd = new WeakMap()
function _o(e, t, n = !1) {
  const s = n ? kd : t.emitsCache,
    i = s.get(e)
  if (i !== void 0) return i
  const r = e.emits
  let l = {},
    a = !1
  if (!de(e)) {
    const o = (c) => {
      const u = _o(c, t, !0)
      u && ((a = !0), Ye(l, u))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return !r && !a
    ? (Ae(e) && s.set(e, null), null)
    : (oe(r) ? r.forEach((o) => (l[o] = null)) : Ye(l, r),
      Ae(e) && s.set(e, l),
      l)
}
function fi(e, t) {
  return !e || !ni(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Ee(e, t[0].toLowerCase() + t.slice(1)) || Ee(e, xn(t)) || Ee(e, t))
}
function Ll(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: l,
      attrs: a,
      emit: o,
      render: c,
      renderCache: u,
      props: d,
      data: f,
      setupState: h,
      ctx: m,
      inheritAttrs: b,
    } = e,
    C = Ws(e)
  let w, g
  try {
    if (n.shapeFlag & 4) {
      const x = i || s,
        T = x
      ;(w = At(c.call(T, x, u, d, h, f, m))), (g = a)
    } else {
      const x = t
      ;(w = At(
        x.length > 1 ? x(d, { attrs: a, slots: l, emit: o }) : x(d, null),
      )),
        (g = t.props ? a : Id(a))
    }
  } catch (x) {
    ;(ss.length = 0), ui(x, e, 1), (w = Z(Kt))
  }
  let v = w
  if (g && b !== !1) {
    const x = Object.keys(g),
      { shapeFlag: T } = v
    x.length &&
      T & 7 &&
      (r && x.some(Or) && (g = Md(g, r)), (v = yn(v, g, !1, !0)))
  }
  return (
    n.dirs &&
      ((v = yn(v, null, !1, !0)),
      (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Fr(v, n.transition),
    (w = v),
    Ws(C),
    w
  )
}
const Id = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || ni(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Md = (e, t) => {
    const n = {}
    for (const s in e) (!Or(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Od(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: l, children: a, patchFlag: o } = t,
    c = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return s ? _l(s, l, c) : !!l
    if (o & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const f = u[d]
        if (l[f] !== s[f] && !fi(c, f)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === l
        ? !1
        : s
          ? l
            ? _l(s, l, c)
            : !0
          : !!l
  return !1
}
function _l(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let i = 0; i < s.length; i++) {
    const r = s[i]
    if (t[r] !== e[r] && !fi(n, r)) return !0
  }
  return !1
}
function Ad({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Bo = (e) => e.__isSuspense
function $d(e, t) {
  t && t.pendingBranch
    ? oe(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Fc(e)
}
const Pe = Symbol.for("v-fgt"),
  pi = Symbol.for("v-txt"),
  Kt = Symbol.for("v-cmt"),
  _s = Symbol.for("v-stc"),
  ss = []
let ct = null
function H(e = !1) {
  ss.push((ct = e ? null : []))
}
function Ld() {
  ss.pop(), (ct = ss[ss.length - 1] || null)
}
let us = 1
function Ks(e, t = !1) {
  ;(us += e), e < 0 && ct && t && (ct.hasOnce = !0)
}
function jo(e) {
  return (
    (e.dynamicChildren = us > 0 ? ct || Mn : null),
    Ld(),
    us > 0 && ct && ct.push(e),
    e
  )
}
function se(e, t, n, s, i, r) {
  return jo(p(e, t, n, s, i, r, !0))
}
function be(e, t, n, s, i) {
  return jo(Z(e, t, n, s, i, !0))
}
function cs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function qn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ro = ({ key: e }) => e ?? null,
  Bs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Be(e) || Fe(e) || de(e)
        ? { i: Ve, r: e, k: t, f: !!n }
        : e
      : null
  )
function p(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === Pe ? 0 : 1,
  l = !1,
  a = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ro(t),
    ref: t && Bs(t),
    scopeId: po,
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
    ctx: Ve,
  }
  return (
    a
      ? (Xr(o, n), r & 128 && e.normalize(o))
      : n && (o.shapeFlag |= Be(n) ? 8 : 16),
    us > 0 &&
      !l &&
      ct &&
      (o.patchFlag > 0 || r & 6) &&
      o.patchFlag !== 32 &&
      ct.push(o),
    o
  )
}
const Z = _d
function _d(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === vo) && (e = Kt), cs(e))) {
    const a = yn(e, t, !0)
    return (
      n && Xr(a, n),
      us > 0 &&
        !r &&
        ct &&
        (a.shapeFlag & 6 ? (ct[ct.indexOf(e)] = a) : ct.push(a)),
      (a.patchFlag = -2),
      a
    )
  }
  if ((qd(e) && (e = e.__vccOpts), t)) {
    t = Bd(t)
    let { class: a, style: o } = t
    a && !Be(a) && (t.class = P(a)),
      Ae(o) && (zr(o) && !oe(o) && (o = Ye({}, o)), (t.style = ai(o)))
  }
  const l = Be(e) ? 1 : Bo(e) ? 128 : Gc(e) ? 64 : Ae(e) ? 4 : de(e) ? 2 : 0
  return p(e, t, n, s, i, l, r, !0)
}
function Bd(e) {
  return e ? (zr(e) || Co(e) ? Ye({}, e) : e) : null
}
function yn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: l, children: a, transition: o } = e,
    c = t ? Rd(i || {}, t) : i,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Ro(c),
      ref:
        t && t.ref
          ? n && r
            ? oe(r)
              ? r.concat(Bs(t))
              : [r, Bs(t)]
            : Bs(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Pe ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: o,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && yn(e.ssContent),
      ssFallback: e.ssFallback && yn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return o && s && Fr(u, o.clone(u)), u
}
function pe(e = " ", t = 0) {
  return Z(pi, null, e, t)
}
function jd(e, t) {
  const n = Z(_s, null, e)
  return (n.staticCount = t), n
}
function _e(e = "", t = !1) {
  return t ? (H(), be(Kt, null, e)) : Z(Kt, null, e)
}
function At(e) {
  return e == null || typeof e == "boolean"
    ? Z(Kt)
    : oe(e)
      ? Z(Pe, null, e.slice())
      : cs(e)
        ? sn(e)
        : Z(pi, null, String(e))
}
function sn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : yn(e)
}
function Xr(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (oe(t)) n = 16
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), Xr(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !Co(t)
        ? (t._ctx = Ve)
        : i === 3 &&
          Ve &&
          (Ve.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    de(t)
      ? ((t = { default: t, _ctx: Ve }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [pe(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Rd(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = P([t.class, s.class]))
      else if (i === "style") t.style = ai([t.style, s.style])
      else if (ni(i)) {
        const r = t[i],
          l = s[i]
        l &&
          r !== l &&
          !(oe(r) && r.includes(l)) &&
          (t[i] = r ? [].concat(r, l) : l)
      } else i !== "" && (t[i] = s[i])
  }
  return t
}
function It(e, t, n, s = null) {
  Bt(e, t, 7, [n, s])
}
const Nd = So()
let zd = 0
function Dd(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || Nd,
    r = {
      uid: zd++,
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
      scope: new dc(!0),
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
      propsOptions: ko(s, i),
      emitsOptions: _o(s, i),
      emit: null,
      emitted: null,
      propsDefaults: Ie,
      inheritAttrs: s.inheritAttrs,
      ctx: Ie,
      data: Ie,
      props: Ie,
      attrs: Ie,
      slots: Ie,
      refs: Ie,
      setupState: Ie,
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
    (r.emit = Pd.bind(null, r)),
    e.ce && e.ce(r),
    r
  )
}
let Ue = null
const No = () => Ue || Ve
let Ys, vr
{
  const e = li(),
    t = (n, s) => {
      let i
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((l) => l(r)) : i[0](r)
        }
      )
    }
  ;(Ys = t("__VUE_INSTANCE_SETTERS__", (n) => (Ue = n))),
    (vr = t("__VUE_SSR_SETTERS__", (n) => (ds = n)))
}
const ys = (e) => {
    const t = Ue
    return (
      Ys(e),
      e.scope.on(),
      () => {
        e.scope.off(), Ys(t)
      }
    )
  },
  Bl = () => {
    Ue && Ue.scope.off(), Ys(null)
  }
function zo(e) {
  return e.vnode.shapeFlag & 4
}
let ds = !1
function Fd(e, t = !1, n = !1) {
  t && vr(t)
  const { props: s, children: i } = e.vnode,
    r = zo(e)
  fd(e, s, r, t), md(e, i, n || t)
  const l = r ? Hd(e, t) : void 0
  return t && vr(!1), l
}
function Hd(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, id))
  const { setup: s } = n
  if (s) {
    qt()
    const i = (e.setupContext = s.length > 1 ? Vd(e) : null),
      r = ys(e),
      l = vs(s, e, 0, [e.props, i]),
      a = Na(l)
    if ((Ut(), r(), (a || e.sp) && !Ln(e) && go(e), a)) {
      if ((l.then(Bl, Bl), t))
        return l
          .then((o) => {
            jl(e, o)
          })
          .catch((o) => {
            ui(o, e, 0)
          })
      e.asyncDep = l
    } else jl(e, l)
  } else Do(e)
}
function jl(e, t, n) {
  de(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ae(t) && (e.setupState = ao(t)),
    Do(e)
}
function Do(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || Lt)
  {
    const i = ys(e)
    qt()
    try {
      rd(e)
    } finally {
      Ut(), i()
    }
  }
}
const Gd = {
  get(e, t) {
    return qe(e, "get", ""), e[t]
  },
}
function Vd(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Gd),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function hi(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ao(Ac(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in ns) return ns[n](e)
          },
          has(t, n) {
            return n in t || n in ns
          },
        }))
    : e.proxy
}
function Wd(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function qd(e) {
  return de(e) && "__vccOpts" in e
}
const te = (e, t) => jc(e, t, ds)
function Te(e, t, n) {
  try {
    Ks(-1)
    const s = arguments.length
    return s === 2
      ? Ae(t) && !oe(t)
        ? cs(t)
          ? Z(e, null, [t])
          : Z(e, t)
        : Z(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && cs(n) && (n = [n]),
        Z(e, t, n))
  } finally {
    Ks(1)
  }
}
const Ud = "3.5.22"
let yr
const Rl = typeof window < "u" && window.trustedTypes
if (Rl)
  try {
    yr = Rl.createPolicy("vue", { createHTML: (e) => e })
  } catch {}
const Fo = yr ? (e) => yr.createHTML(e) : (e) => e,
  Kd = "http://www.w3.org/2000/svg",
  Yd = "http://www.w3.org/1998/Math/MathML",
  Dt = typeof document < "u" ? document : null,
  Nl = Dt && Dt.createElement("template"),
  Xd = {
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
          ? Dt.createElementNS(Kd, e)
          : t === "mathml"
            ? Dt.createElementNS(Yd, e)
            : n
              ? Dt.createElement(e, { is: n })
              : Dt.createElement(e)
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      )
    },
    createText: (e) => Dt.createTextNode(e),
    createComment: (e) => Dt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Dt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, i, r) {
      const l = n ? n.previousSibling : t.lastChild
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Nl.innerHTML = Fo(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        )
        const a = Nl.content
        if (s === "svg" || s === "mathml") {
          const o = a.firstChild
          for (; o.firstChild; ) a.appendChild(o.firstChild)
          a.removeChild(o)
        }
        t.insertBefore(a, n)
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Jd = Symbol("_vtc")
function Zd(e, t, n) {
  const s = e[Jd]
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const zl = Symbol("_vod"),
  Qd = Symbol("_vsh"),
  ef = Symbol(""),
  tf = /(?:^|;)\s*display\s*:/
function nf(e, t, n) {
  const s = e.style,
    i = Be(n)
  let r = !1
  if (n && !i) {
    if (t)
      if (Be(t))
        for (const l of t.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim()
          n[a] == null && js(s, a, "")
        }
      else for (const l in t) n[l] == null && js(s, l, "")
    for (const l in n) l === "display" && (r = !0), js(s, l, n[l])
  } else if (i) {
    if (t !== n) {
      const l = s[ef]
      l && (n += ";" + l), (s.cssText = n), (r = tf.test(n))
    }
  } else t && e.removeAttribute("style")
  zl in e && ((e[zl] = r ? s.display : ""), e[Qd] && (s.display = "none"))
}
const Dl = /\s*!important$/
function js(e, t, n) {
  if (oe(n)) n.forEach((s) => js(e, t, s))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const s = sf(e, t)
    Dl.test(n)
      ? e.setProperty(xn(s), n.replace(Dl, ""), "important")
      : (e[s] = n)
  }
}
const Fl = ["Webkit", "Moz", "ms"],
  Ii = {}
function sf(e, t) {
  const n = Ii[t]
  if (n) return n
  let s = vt(t)
  if (s !== "filter" && s in e) return (Ii[t] = s)
  s = ri(s)
  for (let i = 0; i < Fl.length; i++) {
    const r = Fl[i] + s
    if (r in e) return (Ii[t] = r)
  }
  return t
}
const Hl = "http://www.w3.org/1999/xlink"
function Gl(e, t, n, s, i, r = cc(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Hl, t.slice(6, t.length))
      : e.setAttributeNS(Hl, t, n)
    : n == null || (r && !Ha(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : Yt(n) ? String(n) : n)
}
function Vl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fo(n) : n)
    return
  }
  const r = e.tagName
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      o = n == null ? (e.type === "checkbox" ? "on" : "") : String(n)
    ;(a !== o || !("_value" in e)) && (e.value = o),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let l = !1
  if (n === "" || n == null) {
    const a = typeof e[t]
    a === "boolean"
      ? (n = Ha(n))
      : n == null && a === "string"
        ? ((n = ""), (l = !0))
        : a === "number" && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(i || t)
}
function Pn(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function rf(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Wl = Symbol("_vei")
function lf(e, t, n, s, i = null) {
  const r = e[Wl] || (e[Wl] = {}),
    l = r[t]
  if (s && l) l.value = s
  else {
    const [a, o] = af(t)
    if (s) {
      const c = (r[t] = cf(s, i))
      Pn(e, a, c, o)
    } else l && (rf(e, a, l, o), (r[t] = void 0))
  }
}
const ql = /(?:Once|Passive|Capture)$/
function af(e) {
  let t
  if (ql.test(e)) {
    t = {}
    let s
    for (; (s = e.match(ql)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : xn(e.slice(2)), t]
}
let Mi = 0
const of = Promise.resolve(),
  uf = () => Mi || (of.then(() => (Mi = 0)), (Mi = Date.now()))
function cf(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Bt(df(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = uf()), n
}
function df(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    )
  } else return t
}
const Ul = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ff = (e, t, n, s, i, r) => {
    const l = i === "svg"
    t === "class"
      ? Zd(e, s, l)
      : t === "style"
        ? nf(e, n, s)
        : ni(t)
          ? Or(t) || lf(e, t, n, s, r)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : pf(e, t, s, l)
              )
            ? (Vl(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Gl(e, t, s, l, r, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Be(s))
              ? Vl(e, vt(t), s, r, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Gl(e, t, s, l))
  }
function pf(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Ul(t) && de(n))
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
  return Ul(t) && Be(n) ? !1 : t in e
}
const Kl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return oe(t) ? (n) => Ls(t, n) : t
}
function hf(e) {
  e.target.composing = !0
}
function Yl(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const Oi = Symbol("_assign"),
  gf = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[Oi] = Kl(i)
      const r = s || (i.props && i.props.type === "number")
      Pn(e, t ? "change" : "input", (l) => {
        if (l.target.composing) return
        let a = e.value
        n && (a = a.trim()), r && (a = or(a)), e[Oi](a)
      }),
        n &&
          Pn(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (Pn(e, "compositionstart", hf),
          Pn(e, "compositionend", Yl),
          Pn(e, "change", Yl))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } },
      l,
    ) {
      if (((e[Oi] = Kl(l)), e.composing)) return
      const a =
          (r || e.type === "number") && !/^0\d/.test(e.value)
            ? or(e.value)
            : e.value,
        o = t ?? ""
      a !== o &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (i && e.value.trim() === o))) ||
          (e.value = o))
    },
  },
  mf = Ye({ patchProp: ff }, Xd)
let Xl
function bf() {
  return Xl || (Xl = vd(mf))
}
const vf = (...e) => {
  const t = bf().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const i = wf(s)
      if (!i) return
      const r = t._component
      !de(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "")
      const l = n(i, !1, yf(i))
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        l
      )
    }),
    t
  )
}
function yf(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function wf(e) {
  return Be(e) ? document.querySelector(e) : e
}
const Zt = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, i] of t) n[s] = i
    return n
  },
  xf = {}
function Sf(e, t) {
  const n = td("router-view")
  return H(), be(n)
}
const Ef = Zt(xf, [["render", Sf]])
function Tf(e) {
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
var Jl
let Cf = Symbol("headlessui.useid"),
  Pf = 0
const vn =
  (Jl = Wc) != null
    ? Jl
    : function () {
        return Ne(Cf, () => `${++Pf}`)()
      }
function Q(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function dt(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(s, dt), s)
}
var kf = Object.defineProperty,
  If = (e, t, n) =>
    t in e
      ? kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Zl = (e, t, n) => (If(e, typeof t != "symbol" ? t + "" : t, n), n)
let Mf = class {
    constructor() {
      Zl(this, "current", this.detect()), Zl(this, "currentId", 0)
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
  gi = new Mf()
function Hn(e) {
  if (gi.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = Q(e)
    if (t) return t.ownerDocument
  }
  return document
}
let wr = [
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
var Re = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Re || {}),
  ln = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(ln || {}),
  Of = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Of || {})
function mi(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(wr)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var Jr = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Jr || {})
function Ho(e, t = 0) {
  var n
  return e === ((n = Hn(e)) == null ? void 0 : n.body)
    ? !1
    : dt(t, {
        0() {
          return e.matches(wr)
        },
        1() {
          let s = e
          for (; s !== null; ) {
            if (s.matches(wr)) return !0
            s = s.parentElement
          }
          return !1
        },
      })
}
var Af = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Af || {})
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
let $f = ["textarea", "input"].join(",")
function Lf(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, $f)) !=
    null
    ? n
    : !1
}
function kn(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let i = t(n),
      r = t(s)
    if (i === null || r === null) return 0
    let l = i.compareDocumentPosition(r)
    return l & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : l & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
  })
}
function ut(
  e,
  t,
  { sorted: n = !0, relativeTo: s = null, skipElements: i = [] } = {},
) {
  var r
  let l =
      (r = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
          ? void 0
          : e.ownerDocument) != null
        ? r
        : document,
    a = Array.isArray(e) ? (n ? kn(e) : e) : mi(e)
  i.length > 0 && a.length > 1 && (a = a.filter((m) => !i.includes(m))),
    (s = s ?? l.activeElement)
  let o = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    c = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, a.indexOf(s)) - 1
      if (t & 4) return Math.max(0, a.indexOf(s)) + 1
      if (t & 8) return a.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    f = a.length,
    h
  do {
    if (d >= f || d + f <= 0) return 0
    let m = c + d
    if (t & 16) m = (m + f) % f
    else {
      if (m < 0) return 3
      if (m >= f) return 1
    }
    ;(h = a[m]), h == null || h.focus(u), (d += o)
  } while (h !== l.activeElement)
  return t & 6 && Lf(h) && h.select(), 2
}
function _f() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Bf() {
  return /Android/gi.test(window.navigator.userAgent)
}
function jf() {
  return _f() || Bf()
}
function Cs(e, t, n) {
  gi.isServer ||
    Jt((s) => {
      document.addEventListener(e, t, n),
        s(() => document.removeEventListener(e, t, n))
    })
}
function Go(e, t, n) {
  gi.isServer ||
    Jt((s) => {
      window.addEventListener(e, t, n),
        s(() => window.removeEventListener(e, t, n))
    })
}
function Rf(e, t, n = te(() => !0)) {
  function s(r, l) {
    if (!n.value || r.defaultPrevented) return
    let a = l(r)
    if (a === null || !a.getRootNode().contains(a)) return
    let o = (function c(u) {
      return typeof u == "function"
        ? c(u())
        : Array.isArray(u) || u instanceof Set
          ? u
          : [u]
    })(e)
    for (let c of o) {
      if (c === null) continue
      let u = c instanceof HTMLElement ? c : Q(c)
      if (
        (u != null && u.contains(a)) ||
        (r.composed && r.composedPath().includes(u))
      )
        return
    }
    return !Ho(a, Jr.Loose) && a.tabIndex !== -1 && r.preventDefault(), t(r, a)
  }
  let i = V(null)
  Cs(
    "pointerdown",
    (r) => {
      var l, a
      n.value &&
        (i.value =
          ((a = (l = r.composedPath) == null ? void 0 : l.call(r)) == null
            ? void 0
            : a[0]) || r.target)
    },
    !0,
  ),
    Cs(
      "mousedown",
      (r) => {
        var l, a
        n.value &&
          (i.value =
            ((a = (l = r.composedPath) == null ? void 0 : l.call(r)) == null
              ? void 0
              : a[0]) || r.target)
      },
      !0,
    ),
    Cs(
      "click",
      (r) => {
        jf() || (i.value && (s(r, () => i.value), (i.value = null)))
      },
      !0,
    ),
    Cs(
      "touchend",
      (r) => s(r, () => (r.target instanceof HTMLElement ? r.target : null)),
      !0,
    ),
    Go(
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
function Ql(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Vo(e, t) {
  let n = V(Ql(e.value.type, e.value.as))
  return (
    We(() => {
      n.value = Ql(e.value.type, e.value.as)
    }),
    Jt(() => {
      var s
      n.value ||
        (Q(t) &&
          Q(t) instanceof HTMLButtonElement &&
          !((s = Q(t)) != null && s.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var fs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(fs || {}),
  Nf = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Nf || {})
function Qt({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: s,
  ...i
}) {
  var r
  let l = qo(s, n),
    a = Object.assign(i, { props: l })
  if (e || (t & 2 && l.static)) return Ai(a)
  if (t & 1) {
    let o = (r = l.unmount) == null || r ? 0 : 1
    return dt(o, {
      0() {
        return null
      },
      1() {
        return Ai({
          ...i,
          props: { ...l, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Ai(a)
}
function Ai({ props: e, attrs: t, slots: n, slot: s, name: i }) {
  var r, l
  let { as: a, ...o } = Uo(e, ["unmount", "static"]),
    c = (r = n.default) == null ? void 0 : r.call(n, s),
    u = {}
  if (s) {
    let d = !1,
      f = []
    for (let [h, m] of Object.entries(s))
      typeof m == "boolean" && (d = !0), m === !0 && f.push(h)
    d && (u["data-headlessui-state"] = f.join(" "))
  }
  if (a === "template") {
    if (
      ((c = Wo(c ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [d, ...f] = c ?? []
      if (!zf(d) || f.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${i} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(o)
              .concat(Object.keys(t))
              .map((b) => b.trim())
              .filter((b, C, w) => w.indexOf(b) === C)
              .sort((b, C) => b.localeCompare(C))
              .map((b) => `  - ${b}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((b) => `  - ${b}`).join(`
`),
          ].join(`
`),
        )
      let h = qo((l = d.props) != null ? l : {}, o, u),
        m = yn(d, h, !0)
      for (let b in h)
        b.startsWith("on") && (m.props || (m.props = {}), (m.props[b] = h[b]))
      return m
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c
  }
  return Te(a, Object.assign({}, o, u), { default: () => c })
}
function Wo(e) {
  return e.flatMap((t) => (t.type === Pe ? Wo(t.children) : [t]))
}
function qo(...e) {
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
        let l = n[s]
        for (let a of l) {
          if (i instanceof Event && i.defaultPrevented) return
          a(i, ...r)
        }
      },
    })
  return t
}
function Uo(e, t = []) {
  let n = Object.assign({}, e)
  for (let s of t) s in n && delete n[s]
  return n
}
function zf(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var Rn = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Rn || {})
let Nn = ft({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var s
        let { features: i, ...r } = e,
          l = {
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
        return Qt({
          ourProps: l,
          theirProps: r,
          slot: {},
          attrs: n,
          slots: t,
          name: "Hidden",
        })
      }
    },
  }),
  Ko = Symbol("Context")
var ps = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ps || {})
function Df() {
  return Ne(Ko, null)
}
function Ff(e) {
  bt(Ko, e)
}
var ze = ((e) => (
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
))(ze || {})
function Hf(e, t, n, s) {
  gi.isServer ||
    Jt((i) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, s),
        i(() => e.removeEventListener(t, n, s))
    })
}
var Vt = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Vt || {})
function Yo() {
  let e = V(0)
  return (
    Go("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Gf({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let s = V(null),
    i = Hn(s)
  function r() {
    var l, a, o
    let c = []
    for (let u of e)
      u !== null &&
        (u instanceof HTMLElement
          ? c.push(u)
          : "value" in u && u.value instanceof HTMLElement && c.push(u.value))
    if (t != null && t.value) for (let u of t.value) c.push(u)
    for (let u of (l =
      i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null
      ? l
      : [])
      u !== document.body &&
        u !== document.head &&
        u instanceof HTMLElement &&
        u.id !== "headlessui-portal-root" &&
        (u.contains(Q(s)) ||
          u.contains(
            (o = (a = Q(s)) == null ? void 0 : a.getRootNode()) == null
              ? void 0
              : o.host,
          ) ||
          c.some((d) => u.contains(d)) ||
          c.push(u))
    return c
  }
  return {
    resolveContainers: r,
    contains(l) {
      return r().some((a) => a.contains(l))
    },
    mainTreeNodeRef: s,
    MainTreeNode() {
      return n != null ? null : Te(Nn, { features: Rn.Hidden, ref: s })
    },
  }
}
let ea = Symbol("PortalParentContext")
function Vf() {
  let e = Ne(ea, null),
    t = V([])
  function n(r) {
    return t.value.push(r), e && e.register(r), () => s(r)
  }
  function s(r) {
    let l = t.value.indexOf(r)
    l !== -1 && t.value.splice(l, 1), e && e.unregister(r)
  }
  let i = { register: n, unregister: s, portals: t }
  return [
    t,
    ft({
      name: "PortalWrapper",
      setup(r, { slots: l }) {
        return (
          bt(ea, i),
          () => {
            var a
            return (a = l.default) == null ? void 0 : a.call(l)
          }
        )
      },
    }),
  ]
}
var Wf = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Wf || {})
let Xo = Symbol("PopoverContext")
function Zr(e) {
  let t = Ne(Xo, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Rs.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Zr), n)
  }
  return t
}
let qf = Symbol("PopoverGroupContext")
function Jo() {
  return Ne(qf, null)
}
let Zo = Symbol("PopoverPanelContext")
function Uf() {
  return Ne(Zo, null)
}
let Rs = ft({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: s }) {
      var i
      let r = V(null)
      s({ el: r, $el: r })
      let l = V(1),
        a = V(null),
        o = V(null),
        c = V(null),
        u = V(null),
        d = te(() => Hn(r)),
        f = te(() => {
          var T, O
          if (!Q(a) || !Q(u)) return !1
          for (let W of document.querySelectorAll("body > *"))
            if (
              Number(W == null ? void 0 : W.contains(Q(a))) ^
              Number(W == null ? void 0 : W.contains(Q(u)))
            )
              return !0
          let E = mi(),
            A = E.indexOf(Q(a)),
            I = (A + E.length - 1) % E.length,
            M = (A + 1) % E.length,
            L = E[I],
            D = E[M]
          return (
            !((T = Q(u)) != null && T.contains(L)) &&
            !((O = Q(u)) != null && O.contains(D))
          )
        }),
        h = {
          popoverState: l,
          buttonId: V(null),
          panelId: V(null),
          panel: u,
          button: a,
          isPortalled: f,
          beforePanelSentinel: o,
          afterPanelSentinel: c,
          togglePopover() {
            l.value = dt(l.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            l.value !== 1 && (l.value = 1)
          },
          close(T) {
            h.closePopover()
            let O = T
              ? T instanceof HTMLElement
                ? T
                : T.value instanceof HTMLElement
                  ? Q(T)
                  : Q(h.button)
              : Q(h.button)
            O == null || O.focus()
          },
        }
      bt(Xo, h), Ff(te(() => dt(l.value, { 0: ps.Open, 1: ps.Closed })))
      let m = {
          buttonId: h.buttonId,
          panelId: h.panelId,
          close() {
            h.closePopover()
          },
        },
        b = Jo(),
        C = b == null ? void 0 : b.registerPopover,
        [w, g] = Vf(),
        v = Gf({
          mainTreeNodeRef: b == null ? void 0 : b.mainTreeNodeRef,
          portals: w,
          defaultContainers: [a, u],
        })
      function x() {
        var T, O, E, A
        return (A = b == null ? void 0 : b.isFocusWithinPopoverGroup()) != null
          ? A
          : ((T = d.value) == null ? void 0 : T.activeElement) &&
              (((O = Q(a)) == null
                ? void 0
                : O.contains(d.value.activeElement)) ||
                ((E = Q(u)) == null
                  ? void 0
                  : E.contains(d.value.activeElement)))
      }
      return (
        Jt(() => (C == null ? void 0 : C(m))),
        Hf(
          (i = d.value) == null ? void 0 : i.defaultView,
          "focus",
          (T) => {
            var O, E
            T.target !== window &&
              T.target instanceof HTMLElement &&
              l.value === 0 &&
              (x() ||
                (a &&
                  u &&
                  (v.contains(T.target) ||
                    ((O = Q(h.beforePanelSentinel)) != null &&
                      O.contains(T.target)) ||
                    ((E = Q(h.afterPanelSentinel)) != null &&
                      E.contains(T.target)) ||
                    h.closePopover())))
          },
          !0,
        ),
        Rf(
          v.resolveContainers,
          (T, O) => {
            var E
            h.closePopover(),
              Ho(O, Jr.Loose) ||
                (T.preventDefault(), (E = Q(a)) == null || E.focus())
          },
          te(() => l.value === 0),
        ),
        () => {
          let T = { open: l.value === 0, close: h.close }
          return Te(Pe, [
            Te(g, {}, () =>
              Qt({
                theirProps: { ...e, ...n },
                ourProps: { ref: r },
                slot: T,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            Te(v.MainTreeNode),
          ])
        }
      )
    },
  }),
  $i = ft({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      var i
      let r = (i = e.id) != null ? i : `headlessui-popover-button-${vn()}`,
        l = Zr("PopoverButton"),
        a = te(() => Hn(l.button))
      s({ el: l.button, $el: l.button }),
        We(() => {
          l.buttonId.value = r
        }),
        dn(() => {
          l.buttonId.value = null
        })
      let o = Jo(),
        c = o == null ? void 0 : o.closeOthers,
        u = Uf(),
        d = te(() => (u === null ? !1 : u.value === l.panelId.value)),
        f = V(null),
        h = `headlessui-focus-sentinel-${vn()}`
      d.value ||
        Jt(() => {
          l.button.value = Q(f)
        })
      let m = Vo(
        te(() => ({ as: e.as, type: t.type })),
        f,
      )
      function b(T) {
        var O, E, A, I, M
        if (d.value) {
          if (l.popoverState.value === 1) return
          switch (T.key) {
            case ze.Space:
            case ze.Enter:
              T.preventDefault(),
                (E = (O = T.target).click) == null || E.call(O),
                l.closePopover(),
                (A = Q(l.button)) == null || A.focus()
              break
          }
        } else
          switch (T.key) {
            case ze.Space:
            case ze.Enter:
              T.preventDefault(),
                T.stopPropagation(),
                l.popoverState.value === 1 &&
                  (c == null || c(l.buttonId.value)),
                l.togglePopover()
              break
            case ze.Escape:
              if (l.popoverState.value !== 0)
                return c == null ? void 0 : c(l.buttonId.value)
              if (
                !Q(l.button) ||
                ((I = a.value) != null &&
                  I.activeElement &&
                  !(
                    (M = Q(l.button)) != null &&
                    M.contains(a.value.activeElement)
                  ))
              )
                return
              T.preventDefault(), T.stopPropagation(), l.closePopover()
              break
          }
      }
      function C(T) {
        d.value || (T.key === ze.Space && T.preventDefault())
      }
      function w(T) {
        var O, E
        e.disabled ||
          (d.value
            ? (l.closePopover(), (O = Q(l.button)) == null || O.focus())
            : (T.preventDefault(),
              T.stopPropagation(),
              l.popoverState.value === 1 && (c == null || c(l.buttonId.value)),
              l.togglePopover(),
              (E = Q(l.button)) == null || E.focus()))
      }
      function g(T) {
        T.preventDefault(), T.stopPropagation()
      }
      let v = Yo()
      function x() {
        let T = Q(l.panel)
        if (!T) return
        function O() {
          dt(v.value, {
            [Vt.Forwards]: () => ut(T, Re.First),
            [Vt.Backwards]: () => ut(T, Re.Last),
          }) === ln.Error &&
            ut(
              mi().filter((E) => E.dataset.headlessuiFocusGuard !== "true"),
              dt(v.value, {
                [Vt.Forwards]: Re.Next,
                [Vt.Backwards]: Re.Previous,
              }),
              { relativeTo: Q(l.button) },
            )
        }
        O()
      }
      return () => {
        let T = l.popoverState.value === 0,
          O = { open: T },
          { ...E } = e,
          A = d.value
            ? { ref: f, type: m.value, onKeydown: b, onClick: w }
            : {
                ref: f,
                id: r,
                type: m.value,
                "aria-expanded": l.popoverState.value === 0,
                "aria-controls": Q(l.panel) ? l.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: b,
                onKeyup: C,
                onClick: w,
                onMousedown: g,
              }
        return Te(Pe, [
          Qt({
            ourProps: A,
            theirProps: { ...t, ...E },
            slot: O,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          T &&
            !d.value &&
            l.isPortalled.value &&
            Te(Nn, {
              id: h,
              features: Rn.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: x,
            }),
        ])
      }
    },
  }),
  Li = ft({
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
      let r = (i = e.id) != null ? i : `headlessui-popover-panel-${vn()}`,
        { focus: l } = e,
        a = Zr("PopoverPanel"),
        o = te(() => Hn(a.panel)),
        c = `headlessui-focus-sentinel-before-${vn()}`,
        u = `headlessui-focus-sentinel-after-${vn()}`
      s({ el: a.panel, $el: a.panel }),
        We(() => {
          a.panelId.value = r
        }),
        dn(() => {
          a.panelId.value = null
        }),
        bt(Zo, a.panelId),
        Jt(() => {
          var g, v
          if (!l || a.popoverState.value !== 0 || !a.panel) return
          let x = (g = o.value) == null ? void 0 : g.activeElement
          ;((v = Q(a.panel)) != null && v.contains(x)) ||
            ut(Q(a.panel), Re.First)
        })
      let d = Df(),
        f = te(() =>
          d !== null
            ? (d.value & ps.Open) === ps.Open
            : a.popoverState.value === 0,
        )
      function h(g) {
        var v, x
        switch (g.key) {
          case ze.Escape:
            if (
              a.popoverState.value !== 0 ||
              !Q(a.panel) ||
              (o.value &&
                !(
                  (v = Q(a.panel)) != null && v.contains(o.value.activeElement)
                ))
            )
              return
            g.preventDefault(),
              g.stopPropagation(),
              a.closePopover(),
              (x = Q(a.button)) == null || x.focus()
            break
        }
      }
      function m(g) {
        var v, x, T, O, E
        let A = g.relatedTarget
        A &&
          Q(a.panel) &&
          (((v = Q(a.panel)) != null && v.contains(A)) ||
            (a.closePopover(),
            (((T =
              (x = Q(a.beforePanelSentinel)) == null ? void 0 : x.contains) !=
              null &&
              T.call(x, A)) ||
              ((E =
                (O = Q(a.afterPanelSentinel)) == null ? void 0 : O.contains) !=
                null &&
                E.call(O, A))) &&
              A.focus({ preventScroll: !0 })))
      }
      let b = Yo()
      function C() {
        let g = Q(a.panel)
        if (!g) return
        function v() {
          dt(b.value, {
            [Vt.Forwards]: () => {
              var x
              ut(g, Re.First) === ln.Error &&
                ((x = Q(a.afterPanelSentinel)) == null || x.focus())
            },
            [Vt.Backwards]: () => {
              var x
              ;(x = Q(a.button)) == null || x.focus({ preventScroll: !0 })
            },
          })
        }
        v()
      }
      function w() {
        let g = Q(a.panel)
        if (!g) return
        function v() {
          dt(b.value, {
            [Vt.Forwards]: () => {
              let x = Q(a.button),
                T = Q(a.panel)
              if (!x) return
              let O = mi(),
                E = O.indexOf(x),
                A = O.slice(0, E + 1),
                I = [...O.slice(E + 1), ...A]
              for (let M of I.slice())
                if (
                  M.dataset.headlessuiFocusGuard === "true" ||
                  (T != null && T.contains(M))
                ) {
                  let L = I.indexOf(M)
                  L !== -1 && I.splice(L, 1)
                }
              ut(I, Re.First, { sorted: !1 })
            },
            [Vt.Backwards]: () => {
              var x
              ut(g, Re.Previous) === ln.Error &&
                ((x = Q(a.button)) == null || x.focus())
            },
          })
        }
        v()
      }
      return () => {
        let g = { open: a.popoverState.value === 0, close: a.close },
          { focus: v, ...x } = e,
          T = {
            ref: a.panel,
            id: r,
            onKeydown: h,
            onFocusout: l && a.popoverState.value === 0 ? m : void 0,
            tabIndex: -1,
          }
        return Qt({
          ourProps: T,
          theirProps: { ...t, ...x },
          attrs: t,
          slot: g,
          slots: {
            ...n,
            default: (...O) => {
              var E
              return [
                Te(Pe, [
                  f.value &&
                    a.isPortalled.value &&
                    Te(Nn, {
                      id: c,
                      ref: a.beforePanelSentinel,
                      features: Rn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: C,
                    }),
                  (E = n.default) == null ? void 0 : E.call(n, ...O),
                  f.value &&
                    a.isPortalled.value &&
                    Te(Nn, {
                      id: u,
                      ref: a.afterPanelSentinel,
                      features: Rn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: w,
                    }),
                ]),
              ]
            },
          },
          features: fs.RenderStrategy | fs.Static,
          visible: f.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  Kf = ft({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = V(!0)
      return () =>
        t.value
          ? Te(Nn, {
              as: "button",
              type: "button",
              features: Rn.Focusable,
              onFocus(n) {
                n.preventDefault()
                let s,
                  i = 50
                function r() {
                  var l
                  if (i-- <= 0) {
                    s && cancelAnimationFrame(s)
                    return
                  }
                  if ((l = e.onFocus) != null && l.call(e)) {
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
var Yf = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(Yf || {}),
  Xf = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Xf || {})
let Qo = Symbol("TabsContext")
function ws(e) {
  let t = Ne(Qo, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ws), n)
  }
  return t
}
let Qr = Symbol("TabsSSRContext"),
  Jf = ft({
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
      let r = V((i = e.selectedIndex) != null ? i : e.defaultIndex),
        l = V([]),
        a = V([]),
        o = te(() => e.selectedIndex !== null),
        c = te(() => (o.value ? e.selectedIndex : r.value))
      function u(b) {
        var C
        let w = kn(d.tabs.value, Q),
          g = kn(d.panels.value, Q),
          v = w.filter((x) => {
            var T
            return !((T = Q(x)) != null && T.hasAttribute("disabled"))
          })
        if (b < 0 || b > w.length - 1) {
          let x = dt(r.value === null ? 0 : Math.sign(b - r.value), {
              [-1]: () => 1,
              0: () =>
                dt(Math.sign(b), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            T = dt(x, {
              0: () => w.indexOf(v[0]),
              1: () => w.indexOf(v[v.length - 1]),
            })
          T !== -1 && (r.value = T), (d.tabs.value = w), (d.panels.value = g)
        } else {
          let x = w.slice(0, b),
            T = [...w.slice(b), ...x].find((E) => v.includes(E))
          if (!T) return
          let O = (C = w.indexOf(T)) != null ? C : d.selectedIndex.value
          O === -1 && (O = d.selectedIndex.value),
            (r.value = O),
            (d.tabs.value = w),
            (d.panels.value = g)
        }
      }
      let d = {
        selectedIndex: te(() => {
          var b, C
          return (C = (b = r.value) != null ? b : e.defaultIndex) != null
            ? C
            : null
        }),
        orientation: te(() => (e.vertical ? "vertical" : "horizontal")),
        activation: te(() => (e.manual ? "manual" : "auto")),
        tabs: l,
        panels: a,
        setSelectedIndex(b) {
          c.value !== b && s("change", b), o.value || u(b)
        },
        registerTab(b) {
          var C
          if (l.value.includes(b)) return
          let w = l.value[r.value]
          if ((l.value.push(b), (l.value = kn(l.value, Q)), !o.value)) {
            let g = (C = l.value.indexOf(w)) != null ? C : r.value
            g !== -1 && (r.value = g)
          }
        },
        unregisterTab(b) {
          let C = l.value.indexOf(b)
          C !== -1 && l.value.splice(C, 1)
        },
        registerPanel(b) {
          a.value.includes(b) || (a.value.push(b), (a.value = kn(a.value, Q)))
        },
        unregisterPanel(b) {
          let C = a.value.indexOf(b)
          C !== -1 && a.value.splice(C, 1)
        },
      }
      bt(Qo, d)
      let f = V({ tabs: [], panels: [] }),
        h = V(!1)
      We(() => {
        h.value = !0
      }),
        bt(
          Qr,
          te(() => (h.value ? null : f.value)),
        )
      let m = te(() => e.selectedIndex)
      return (
        We(() => {
          un(
            [m],
            () => {
              var b
              return u((b = e.selectedIndex) != null ? b : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        Jt(() => {
          if (!o.value || c.value == null || d.tabs.value.length <= 0) return
          let b = kn(d.tabs.value, Q)
          b.some((C, w) => Q(d.tabs.value[w]) !== Q(C)) &&
            d.setSelectedIndex(
              b.findIndex((C) => Q(C) === Q(d.tabs.value[c.value])),
            )
        }),
        () => {
          let b = { selectedIndex: r.value }
          return Te(Pe, [
            l.value.length <= 0 &&
              Te(Kf, {
                onFocus: () => {
                  for (let C of l.value) {
                    let w = Q(C)
                    if ((w == null ? void 0 : w.tabIndex) === 0)
                      return w.focus(), !0
                  }
                  return !1
                },
              }),
            Qt({
              theirProps: {
                ...n,
                ...Uo(e, [
                  "selectedIndex",
                  "defaultIndex",
                  "manual",
                  "vertical",
                  "onChange",
                ]),
              },
              ourProps: {},
              slot: b,
              slots: t,
              attrs: n,
              name: "TabGroup",
            }),
          ])
        }
      )
    },
  }),
  Zf = ft({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let s = ws("TabList")
      return () => {
        let i = { selectedIndex: s.selectedIndex.value },
          r = { role: "tablist", "aria-orientation": s.orientation.value }
        return Qt({
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
  Qf = ft({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      var i
      let r = (i = e.id) != null ? i : `headlessui-tabs-tab-${vn()}`,
        l = ws("Tab"),
        a = V(null)
      s({ el: a, $el: a }),
        We(() => l.registerTab(a)),
        dn(() => l.unregisterTab(a))
      let o = Ne(Qr),
        c = te(() => {
          if (o.value) {
            let g = o.value.tabs.indexOf(r)
            return g === -1 ? o.value.tabs.push(r) - 1 : g
          }
          return -1
        }),
        u = te(() => {
          let g = l.tabs.value.indexOf(a)
          return g === -1 ? c.value : g
        }),
        d = te(() => u.value === l.selectedIndex.value)
      function f(g) {
        var v
        let x = g()
        if (x === ln.Success && l.activation.value === "auto") {
          let T = (v = Hn(a)) == null ? void 0 : v.activeElement,
            O = l.tabs.value.findIndex((E) => Q(E) === T)
          O !== -1 && l.setSelectedIndex(O)
        }
        return x
      }
      function h(g) {
        let v = l.tabs.value.map((x) => Q(x)).filter(Boolean)
        if (g.key === ze.Space || g.key === ze.Enter) {
          g.preventDefault(), g.stopPropagation(), l.setSelectedIndex(u.value)
          return
        }
        switch (g.key) {
          case ze.Home:
          case ze.PageUp:
            return (
              g.preventDefault(), g.stopPropagation(), f(() => ut(v, Re.First))
            )
          case ze.End:
          case ze.PageDown:
            return (
              g.preventDefault(), g.stopPropagation(), f(() => ut(v, Re.Last))
            )
        }
        if (
          f(() =>
            dt(l.orientation.value, {
              vertical() {
                return g.key === ze.ArrowUp
                  ? ut(v, Re.Previous | Re.WrapAround)
                  : g.key === ze.ArrowDown
                    ? ut(v, Re.Next | Re.WrapAround)
                    : ln.Error
              },
              horizontal() {
                return g.key === ze.ArrowLeft
                  ? ut(v, Re.Previous | Re.WrapAround)
                  : g.key === ze.ArrowRight
                    ? ut(v, Re.Next | Re.WrapAround)
                    : ln.Error
              },
            }),
          ) === ln.Success
        )
          return g.preventDefault()
      }
      let m = V(!1)
      function b() {
        var g
        m.value ||
          ((m.value = !0),
          !e.disabled &&
            ((g = Q(a)) == null || g.focus({ preventScroll: !0 }),
            l.setSelectedIndex(u.value),
            Tf(() => {
              m.value = !1
            })))
      }
      function C(g) {
        g.preventDefault()
      }
      let w = Vo(
        te(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var g, v
        let x = {
            selected: d.value,
            disabled: (g = e.disabled) != null ? g : !1,
          },
          { ...T } = e,
          O = {
            ref: a,
            onKeydown: h,
            onMousedown: C,
            onClick: b,
            id: r,
            role: "tab",
            type: w.value,
            "aria-controls":
              (v = Q(l.panels.value[u.value])) == null ? void 0 : v.id,
            "aria-selected": d.value,
            tabIndex: d.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return Qt({
          ourProps: O,
          theirProps: T,
          slot: x,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  ep = ft({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let s = ws("TabPanels")
      return () => {
        let i = { selectedIndex: s.selectedIndex.value }
        return Qt({
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
  Un = ft({
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
      let r = (i = e.id) != null ? i : `headlessui-tabs-panel-${vn()}`,
        l = ws("TabPanel"),
        a = V(null)
      s({ el: a, $el: a }),
        We(() => l.registerPanel(a)),
        dn(() => l.unregisterPanel(a))
      let o = Ne(Qr),
        c = te(() => {
          if (o.value) {
            let f = o.value.panels.indexOf(r)
            return f === -1 ? o.value.panels.push(r) - 1 : f
          }
          return -1
        }),
        u = te(() => {
          let f = l.panels.value.indexOf(a)
          return f === -1 ? c.value : f
        }),
        d = te(() => u.value === l.selectedIndex.value)
      return () => {
        var f
        let h = { selected: d.value },
          { tabIndex: m, ...b } = e,
          C = {
            ref: a,
            id: r,
            role: "tabpanel",
            "aria-labelledby":
              (f = Q(l.tabs.value[u.value])) == null ? void 0 : f.id,
            tabIndex: d.value ? m : -1,
          }
        return !d.value && e.unmount && !e.static
          ? Te(Nn, { as: "span", "aria-hidden": !0, ...C })
          : Qt({
              ourProps: C,
              theirProps: b,
              slot: h,
              attrs: t,
              slots: n,
              features: fs.Static | fs.RenderStrategy,
              visible: d.value,
              name: "TabPanel",
            })
      }
    },
  })
const In = typeof document < "u"
function eu(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function tp(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && eu(e.default))
  )
}
const xe = Object.assign
function _i(e, t) {
  const n = {}
  for (const s in t) {
    const i = t[s]
    n[s] = Et(i) ? i.map(e) : e(i)
  }
  return n
}
const is = () => {},
  Et = Array.isArray,
  tu = /#/g,
  np = /&/g,
  sp = /\//g,
  ip = /=/g,
  rp = /\?/g,
  nu = /\+/g,
  lp = /%5B/g,
  ap = /%5D/g,
  su = /%5E/g,
  op = /%60/g,
  iu = /%7B/g,
  up = /%7C/g,
  ru = /%7D/g,
  cp = /%20/g
function el(e) {
  return encodeURI("" + e)
    .replace(up, "|")
    .replace(lp, "[")
    .replace(ap, "]")
}
function dp(e) {
  return el(e).replace(iu, "{").replace(ru, "}").replace(su, "^")
}
function xr(e) {
  return el(e)
    .replace(nu, "%2B")
    .replace(cp, "+")
    .replace(tu, "%23")
    .replace(np, "%26")
    .replace(op, "`")
    .replace(iu, "{")
    .replace(ru, "}")
    .replace(su, "^")
}
function fp(e) {
  return xr(e).replace(ip, "%3D")
}
function pp(e) {
  return el(e).replace(tu, "%23").replace(rp, "%3F")
}
function hp(e) {
  return e == null ? "" : pp(e).replace(sp, "%2F")
}
function hs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const gp = /\/$/,
  mp = (e) => e.replace(gp, "")
function Bi(e, t, n = "/") {
  let s,
    i = {},
    r = "",
    l = ""
  const a = t.indexOf("#")
  let o = t.indexOf("?")
  return (
    a < o && a >= 0 && (o = -1),
    o > -1 &&
      ((s = t.slice(0, o)),
      (r = t.slice(o + 1, a > -1 ? a : t.length)),
      (i = e(r))),
    a > -1 && ((s = s || t.slice(0, a)), (l = t.slice(a, t.length))),
    (s = wp(s ?? t, n)),
    { fullPath: s + (r && "?") + r + l, path: s, query: i, hash: hs(l) }
  )
}
function bp(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function ta(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function vp(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1
  return (
    s > -1 &&
    s === i &&
    zn(t.matched[s], n.matched[i]) &&
    lu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function zn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function lu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!yp(e[n], t[n])) return !1
  return !0
}
function yp(e, t) {
  return Et(e) ? na(e, t) : Et(t) ? na(t, e) : e === t
}
function na(e, t) {
  return Et(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function wp(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    s = e.split("/"),
    i = s[s.length - 1]
  ;(i === ".." || i === ".") && s.push("")
  let r = n.length - 1,
    l,
    a
  for (l = 0; l < s.length; l++)
    if (((a = s[l]), a !== "."))
      if (a === "..") r > 1 && r--
      else break
  return n.slice(0, r).join("/") + "/" + s.slice(l).join("/")
}
const tn = {
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
var gs
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(gs || (gs = {}))
var rs
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(rs || (rs = {}))
function xp(e) {
  if (!e)
    if (In) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), mp(e)
}
const Sp = /^[^#]+#/
function Ep(e, t) {
  return e.replace(Sp, "#") + t
}
function Tp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const bi = () => ({ left: window.scrollX, top: window.scrollY })
function Cp(e) {
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
    t = Tp(i, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function sa(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Sr = new Map()
function Pp(e, t) {
  Sr.set(e, t)
}
function kp(e) {
  const t = Sr.get(e)
  return Sr.delete(e), t
}
let Ip = () => location.protocol + "//" + location.host
function au(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    r = e.indexOf("#")
  if (r > -1) {
    let a = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      o = i.slice(a)
    return o[0] !== "/" && (o = "/" + o), ta(o, "")
  }
  return ta(n, e) + s + i
}
function Mp(e, t, n, s) {
  let i = [],
    r = [],
    l = null
  const a = ({ state: f }) => {
    const h = au(e, location),
      m = n.value,
      b = t.value
    let C = 0
    if (f) {
      if (((n.value = h), (t.value = f), l && l === m)) {
        l = null
        return
      }
      C = b ? f.position - b.position : 0
    } else s(h)
    i.forEach((w) => {
      w(n.value, m, {
        delta: C,
        type: gs.pop,
        direction: C ? (C > 0 ? rs.forward : rs.back) : rs.unknown,
      })
    })
  }
  function o() {
    l = n.value
  }
  function c(f) {
    i.push(f)
    const h = () => {
      const m = i.indexOf(f)
      m > -1 && i.splice(m, 1)
    }
    return r.push(h), h
  }
  function u() {
    const { history: f } = window
    f.state && f.replaceState(xe({}, f.state, { scroll: bi() }), "")
  }
  function d() {
    for (const f of r) f()
    ;(r = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u)
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: o, listen: c, destroy: d }
  )
}
function ia(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? bi() : null,
  }
}
function Op(e) {
  const { history: t, location: n } = window,
    s = { value: au(e, n) },
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
  function r(o, c, u) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + o
          : Ip() + e + o
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (i.value = c)
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](f)
    }
  }
  function l(o, c) {
    const u = xe({}, t.state, ia(i.value.back, o, i.value.forward, !0), c, {
      position: i.value.position,
    })
    r(o, u, !0), (s.value = o)
  }
  function a(o, c) {
    const u = xe({}, i.value, t.state, { forward: o, scroll: bi() })
    r(u.current, u, !0)
    const d = xe({}, ia(s.value, o, null), { position: u.position + 1 }, c)
    r(o, d, !1), (s.value = o)
  }
  return { location: s, state: i, push: a, replace: l }
}
function Ap(e) {
  e = xp(e)
  const t = Op(e),
    n = Mp(e, t.state, t.location, t.replace)
  function s(r, l = !0) {
    l || n.pauseListeners(), history.go(r)
  }
  const i = xe(
    { location: "", base: e, go: s, createHref: Ep.bind(null, e) },
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
function $p(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function ou(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const uu = Symbol("")
var ra
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(ra || (ra = {}))
function Dn(e, t) {
  return xe(new Error(), { type: e, [uu]: !0 }, t)
}
function Rt(e, t) {
  return e instanceof Error && uu in e && (t == null || !!(e.type & t))
}
const la = "[^/]+?",
  Lp = { sensitive: !1, strict: !1, start: !0, end: !0 },
  _p = /[.+*?^${}()[\]/\\]/g
function Bp(e, t) {
  const n = xe({}, Lp, t),
    s = []
  let i = n.start ? "^" : ""
  const r = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (i += "/")
    for (let d = 0; d < c.length; d++) {
      const f = c[d]
      let h = 40 + (n.sensitive ? 0.25 : 0)
      if (f.type === 0)
        d || (i += "/"), (i += f.value.replace(_p, "\\$&")), (h += 40)
      else if (f.type === 1) {
        const { value: m, repeatable: b, optional: C, regexp: w } = f
        r.push({ name: m, repeatable: b, optional: C })
        const g = w || la
        if (g !== la) {
          h += 10
          try {
            new RegExp(`(${g})`)
          } catch (x) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${g}): ` + x.message,
            )
          }
        }
        let v = b ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`
        d || (v = C && c.length < 2 ? `(?:/${v})` : "/" + v),
          C && (v += "?"),
          (i += v),
          (h += 20),
          C && (h += -8),
          b && (h += -20),
          g === ".*" && (h += -50)
      }
      u.push(h)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const c = s.length - 1
    s[c][s[c].length - 1] += 0.7000000000000001
  }
  n.strict || (i += "/?"),
    n.end ? (i += "$") : n.strict && !i.endsWith("/") && (i += "(?:/|$)")
  const l = new RegExp(i, n.sensitive ? "" : "i")
  function a(c) {
    const u = c.match(l),
      d = {}
    if (!u) return null
    for (let f = 1; f < u.length; f++) {
      const h = u[f] || "",
        m = r[f - 1]
      d[m.name] = h && m.repeatable ? h.split("/") : h
    }
    return d
  }
  function o(c) {
    let u = "",
      d = !1
    for (const f of e) {
      ;(!d || !u.endsWith("/")) && (u += "/"), (d = !1)
      for (const h of f)
        if (h.type === 0) u += h.value
        else if (h.type === 1) {
          const { value: m, repeatable: b, optional: C } = h,
            w = m in c ? c[m] : ""
          if (Et(w) && !b)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const g = Et(w) ? w.join("/") : w
          if (!g)
            if (C)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${m}"`)
          u += g
        }
    }
    return u || "/"
  }
  return { re: l, score: s, keys: r, parse: a, stringify: o }
}
function jp(e, t) {
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
function cu(e, t) {
  let n = 0
  const s = e.score,
    i = t.score
  for (; n < s.length && n < i.length; ) {
    const r = jp(s[n], i[n])
    if (r) return r
    n++
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (aa(s)) return 1
    if (aa(i)) return -1
  }
  return i.length - s.length
}
function aa(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Rp = { type: 0, value: "" },
  Np = /[a-zA-Z0-9_]/
function zp(e) {
  if (!e) return [[]]
  if (e === "/") return [[Rp]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`)
  }
  let n = 0,
    s = n
  const i = []
  let r
  function l() {
    r && i.push(r), (r = [])
  }
  let a = 0,
    o,
    c = "",
    u = ""
  function d() {
    c &&
      (n === 0
        ? r.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (r.length > 1 &&
              (o === "*" || o === "+") &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            r.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: o === "*" || o === "+",
              optional: o === "*" || o === "?",
            }))
          : t("Invalid state to consume buffer"),
      (c = ""))
  }
  function f() {
    c += o
  }
  for (; a < e.length; ) {
    if (((o = e[a++]), o === "\\" && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        o === "/" ? (c && d(), l()) : o === ":" ? (d(), (n = 1)) : f()
        break
      case 4:
        f(), (n = s)
        break
      case 1:
        o === "("
          ? (n = 2)
          : Np.test(o)
            ? f()
            : (d(), (n = 0), o !== "*" && o !== "?" && o !== "+" && a--)
        break
      case 2:
        o === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + o)
            : (n = 3)
          : (u += o)
        break
      case 3:
        d(), (n = 0), o !== "*" && o !== "?" && o !== "+" && a--, (u = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), l(), i
}
function Dp(e, t, n) {
  const s = Bp(zp(e.path), n),
    i = xe(s, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function Fp(e, t) {
  const n = [],
    s = new Map()
  t = da({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(d) {
    return s.get(d)
  }
  function r(d, f, h) {
    const m = !h,
      b = ua(d)
    b.aliasOf = h && h.record
    const C = da(t, d),
      w = [b]
    if ("alias" in d) {
      const x = typeof d.alias == "string" ? [d.alias] : d.alias
      for (const T of x)
        w.push(
          ua(
            xe({}, b, {
              components: h ? h.record.components : b.components,
              path: T,
              aliasOf: h ? h.record : b,
            }),
          ),
        )
    }
    let g, v
    for (const x of w) {
      const { path: T } = x
      if (f && T[0] !== "/") {
        const O = f.record.path,
          E = O[O.length - 1] === "/" ? "" : "/"
        x.path = f.record.path + (T && E + T)
      }
      if (
        ((g = Dp(x, f, C)),
        h
          ? h.alias.push(g)
          : ((v = v || g),
            v !== g && v.alias.push(g),
            m && d.name && !ca(g) && l(d.name)),
        du(g) && o(g),
        b.children)
      ) {
        const O = b.children
        for (let E = 0; E < O.length; E++) r(O[E], g, h && h.children[E])
      }
      h = h || g
    }
    return v
      ? () => {
          l(v)
        }
      : is
  }
  function l(d) {
    if (ou(d)) {
      const f = s.get(d)
      f &&
        (s.delete(d),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(l),
        f.alias.forEach(l))
    } else {
      const f = n.indexOf(d)
      f > -1 &&
        (n.splice(f, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(l),
        d.alias.forEach(l))
    }
  }
  function a() {
    return n
  }
  function o(d) {
    const f = Vp(d, n)
    n.splice(f, 0, d), d.record.name && !ca(d) && s.set(d.record.name, d)
  }
  function c(d, f) {
    let h,
      m = {},
      b,
      C
    if ("name" in d && d.name) {
      if (((h = s.get(d.name)), !h)) throw Dn(1, { location: d })
      ;(C = h.record.name),
        (m = xe(
          oa(
            f.params,
            h.keys
              .filter((v) => !v.optional)
              .concat(h.parent ? h.parent.keys.filter((v) => v.optional) : [])
              .map((v) => v.name),
          ),
          d.params &&
            oa(
              d.params,
              h.keys.map((v) => v.name),
            ),
        )),
        (b = h.stringify(m))
    } else if (d.path != null)
      (b = d.path),
        (h = n.find((v) => v.re.test(b))),
        h && ((m = h.parse(b)), (C = h.record.name))
    else {
      if (((h = f.name ? s.get(f.name) : n.find((v) => v.re.test(f.path))), !h))
        throw Dn(1, { location: d, currentLocation: f })
      ;(C = h.record.name),
        (m = xe({}, f.params, d.params)),
        (b = h.stringify(m))
    }
    const w = []
    let g = h
    for (; g; ) w.unshift(g.record), (g = g.parent)
    return { name: C, path: b, params: m, matched: w, meta: Gp(w) }
  }
  e.forEach((d) => r(d))
  function u() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: r,
    resolve: c,
    removeRoute: l,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: i,
  }
}
function oa(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function ua(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Hp(e),
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
function Hp(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n
  return t
}
function ca(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Gp(e) {
  return e.reduce((t, n) => xe(t, n.meta), {})
}
function da(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Vp(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const r = (n + s) >> 1
    cu(e, t[r]) < 0 ? (s = r) : (n = r + 1)
  }
  const i = Wp(e)
  return i && (s = t.lastIndexOf(i, s - 1)), s
}
function Wp(e) {
  let t = e
  for (; (t = t.parent); ) if (du(t) && cu(e, t) === 0) return t
}
function du({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function qp(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const s = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let i = 0; i < s.length; ++i) {
    const r = s[i].replace(nu, " "),
      l = r.indexOf("="),
      a = hs(l < 0 ? r : r.slice(0, l)),
      o = l < 0 ? null : hs(r.slice(l + 1))
    if (a in t) {
      let c = t[a]
      Et(c) || (c = t[a] = [c]), c.push(o)
    } else t[a] = o
  }
  return t
}
function fa(e) {
  let t = ""
  for (let n in e) {
    const s = e[n]
    if (((n = fp(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Et(s) ? s.map((r) => r && xr(r)) : [s && xr(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r))
    })
  }
  return t
}
function Up(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Et(s)
        ? s.map((i) => (i == null ? null : "" + i))
        : s == null
          ? s
          : "" + s)
  }
  return t
}
const Kp = Symbol(""),
  pa = Symbol(""),
  vi = Symbol(""),
  fu = Symbol(""),
  Er = Symbol("")
function Kn() {
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
function rn(e, t, n, s, i, r = (l) => l()) {
  const l = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || [])
  return () =>
    new Promise((a, o) => {
      const c = (f) => {
          f === !1
            ? o(Dn(4, { from: n, to: t }))
            : f instanceof Error
              ? o(f)
              : $p(f)
                ? o(Dn(2, { from: t, to: f }))
                : (l &&
                    s.enterCallbacks[i] === l &&
                    typeof f == "function" &&
                    l.push(f),
                  a())
        },
        u = r(() => e.call(s && s.instances[i], t, n, c))
      let d = Promise.resolve(u)
      e.length < 3 && (d = d.then(c)), d.catch((f) => o(f))
    })
}
function ji(e, t, n, s, i = (r) => r()) {
  const r = []
  for (const l of e)
    for (const a in l.components) {
      let o = l.components[a]
      if (!(t !== "beforeRouteEnter" && !l.instances[a]))
        if (eu(o)) {
          const u = (o.__vccOpts || o)[t]
          u && r.push(rn(u, n, s, l, a, i))
        } else {
          let c = o()
          r.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${l.path}"`,
                )
              const d = tp(u) ? u.default : u
              ;(l.mods[a] = u), (l.components[a] = d)
              const h = (d.__vccOpts || d)[t]
              return h && rn(h, n, s, l, a, i)()
            }),
          )
        }
    }
  return r
}
function ha(e) {
  const t = Ne(vi),
    n = Ne(fu),
    s = te(() => {
      const o = ne(e.to)
      return t.resolve(o)
    }),
    i = te(() => {
      const { matched: o } = s.value,
        { length: c } = o,
        u = o[c - 1],
        d = n.matched
      if (!u || !d.length) return -1
      const f = d.findIndex(zn.bind(null, u))
      if (f > -1) return f
      const h = ga(o[c - 2])
      return c > 1 && ga(u) === h && d[d.length - 1].path !== h
        ? d.findIndex(zn.bind(null, o[c - 2]))
        : f
    }),
    r = te(() => i.value > -1 && Qp(n.params, s.value.params)),
    l = te(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        lu(n.params, s.value.params),
    )
  function a(o = {}) {
    if (Zp(o)) {
      const c = t[ne(e.replace) ? "replace" : "push"](ne(e.to)).catch(is)
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      )
    }
    return Promise.resolve()
  }
  return {
    route: s,
    href: te(() => s.value.href),
    isActive: r,
    isExactActive: l,
    navigate: a,
  }
}
function Yp(e) {
  return e.length === 1 ? e[0] : e
}
const Xp = ft({
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
    useLink: ha,
    setup(e, { slots: t }) {
      const n = bs(ha(e)),
        { options: s } = Ne(vi),
        i = te(() => ({
          [ma(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ma(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const r = t.default && Yp(t.default(n))
        return e.custom
          ? r
          : Te(
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
  Jp = Xp
function Zp(e) {
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
function Qp(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n]
    if (typeof s == "string") {
      if (s !== i) return !1
    } else if (!Et(i) || i.length !== s.length || s.some((r, l) => r !== i[l]))
      return !1
  }
  return !0
}
function ga(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const ma = (e, t, n) => e ?? t ?? n,
  eh = ft({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ne(Er),
        i = te(() => e.route || s.value),
        r = Ne(pa, 0),
        l = te(() => {
          let c = ne(r)
          const { matched: u } = i.value
          let d
          for (; (d = u[c]) && !d.components; ) c++
          return c
        }),
        a = te(() => i.value.matched[l.value])
      bt(
        pa,
        te(() => l.value + 1),
      ),
        bt(Kp, a),
        bt(Er, i)
      const o = V()
      return (
        un(
          () => [o.value, a.value, e.name],
          ([c, u, d], [f, h, m]) => {
            u &&
              ((u.instances[d] = c),
              h &&
                h !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !zn(u, h) || !f) &&
                (u.enterCallbacks[d] || []).forEach((b) => b(c))
          },
          { flush: "post" },
        ),
        () => {
          const c = i.value,
            u = e.name,
            d = a.value,
            f = d && d.components[u]
          if (!f) return ba(n.default, { Component: f, route: c })
          const h = d.props[u],
            m = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                  ? h(c)
                  : h
              : null,
            C = Te(
              f,
              xe({}, m, t, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (d.instances[u] = null)
                },
                ref: o,
              }),
            )
          return ba(n.default, { Component: C, route: c }) || C
        }
      )
    },
  })
function ba(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const th = eh
function nh(e) {
  const t = Fp(e.routes, e),
    n = e.parseQuery || qp,
    s = e.stringifyQuery || fa,
    i = e.history,
    r = Kn(),
    l = Kn(),
    a = Kn(),
    o = $c(tn)
  let c = tn
  In &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const u = _i.bind(null, (B) => "" + B),
    d = _i.bind(null, hp),
    f = _i.bind(null, hs)
  function h(B, J) {
    let K, ee
    return (
      ou(B) ? ((K = t.getRecordMatcher(B)), (ee = J)) : (ee = B),
      t.addRoute(ee, K)
    )
  }
  function m(B) {
    const J = t.getRecordMatcher(B)
    J && t.removeRoute(J)
  }
  function b() {
    return t.getRoutes().map((B) => B.record)
  }
  function C(B) {
    return !!t.getRecordMatcher(B)
  }
  function w(B, J) {
    if (((J = xe({}, J || o.value)), typeof B == "string")) {
      const k = Bi(n, B, J.path),
        N = t.resolve({ path: k.path }, J),
        z = i.createHref(k.fullPath)
      return xe(k, N, {
        params: f(N.params),
        hash: hs(k.hash),
        redirectedFrom: void 0,
        href: z,
      })
    }
    let K
    if (B.path != null) K = xe({}, B, { path: Bi(n, B.path, J.path).path })
    else {
      const k = xe({}, B.params)
      for (const N in k) k[N] == null && delete k[N]
      ;(K = xe({}, B, { params: d(k) })), (J.params = d(J.params))
    }
    const ee = t.resolve(K, J),
      ke = B.hash || ""
    ee.params = u(f(ee.params))
    const y = bp(s, xe({}, B, { hash: dp(ke), path: ee.path })),
      S = i.createHref(y)
    return xe(
      { fullPath: y, hash: ke, query: s === fa ? Up(B.query) : B.query || {} },
      ee,
      { redirectedFrom: void 0, href: S },
    )
  }
  function g(B) {
    return typeof B == "string" ? Bi(n, B, o.value.path) : xe({}, B)
  }
  function v(B, J) {
    if (c !== B) return Dn(8, { from: J, to: B })
  }
  function x(B) {
    return E(B)
  }
  function T(B) {
    return x(xe(g(B), { replace: !0 }))
  }
  function O(B) {
    const J = B.matched[B.matched.length - 1]
    if (J && J.redirect) {
      const { redirect: K } = J
      let ee = typeof K == "function" ? K(B) : K
      return (
        typeof ee == "string" &&
          ((ee =
            ee.includes("?") || ee.includes("#") ? (ee = g(ee)) : { path: ee }),
          (ee.params = {})),
        xe(
          {
            query: B.query,
            hash: B.hash,
            params: ee.path != null ? {} : B.params,
          },
          ee,
        )
      )
    }
  }
  function E(B, J) {
    const K = (c = w(B)),
      ee = o.value,
      ke = B.state,
      y = B.force,
      S = B.replace === !0,
      k = O(K)
    if (k)
      return E(
        xe(g(k), {
          state: typeof k == "object" ? xe({}, ke, k.state) : ke,
          force: y,
          replace: S,
        }),
        J || K,
      )
    const N = K
    N.redirectedFrom = J
    let z
    return (
      !y &&
        vp(s, ee, K) &&
        ((z = Dn(16, { to: N, from: ee })), $e(ee, ee, !0, !1)),
      (z ? Promise.resolve(z) : M(N, ee))
        .catch((j) => (Rt(j) ? (Rt(j, 2) ? j : he(j)) : _(j, N, ee)))
        .then((j) => {
          if (j) {
            if (Rt(j, 2))
              return E(
                xe({ replace: S }, g(j.to), {
                  state: typeof j.to == "object" ? xe({}, ke, j.to.state) : ke,
                  force: y,
                }),
                J || N,
              )
          } else j = D(N, ee, !0, S, ke)
          return L(N, ee, j), j
        })
    )
  }
  function A(B, J) {
    const K = v(B, J)
    return K ? Promise.reject(K) : Promise.resolve()
  }
  function I(B) {
    const J = en.values().next().value
    return J && typeof J.runWithContext == "function"
      ? J.runWithContext(B)
      : B()
  }
  function M(B, J) {
    let K
    const [ee, ke, y] = sh(B, J)
    K = ji(ee.reverse(), "beforeRouteLeave", B, J)
    for (const k of ee)
      k.leaveGuards.forEach((N) => {
        K.push(rn(N, B, J))
      })
    const S = A.bind(null, B, J)
    return (
      K.push(S),
      et(K)
        .then(() => {
          K = []
          for (const k of r.list()) K.push(rn(k, B, J))
          return K.push(S), et(K)
        })
        .then(() => {
          K = ji(ke, "beforeRouteUpdate", B, J)
          for (const k of ke)
            k.updateGuards.forEach((N) => {
              K.push(rn(N, B, J))
            })
          return K.push(S), et(K)
        })
        .then(() => {
          K = []
          for (const k of y)
            if (k.beforeEnter)
              if (Et(k.beforeEnter))
                for (const N of k.beforeEnter) K.push(rn(N, B, J))
              else K.push(rn(k.beforeEnter, B, J))
          return K.push(S), et(K)
        })
        .then(
          () => (
            B.matched.forEach((k) => (k.enterCallbacks = {})),
            (K = ji(y, "beforeRouteEnter", B, J, I)),
            K.push(S),
            et(K)
          ),
        )
        .then(() => {
          K = []
          for (const k of l.list()) K.push(rn(k, B, J))
          return K.push(S), et(K)
        })
        .catch((k) => (Rt(k, 8) ? k : Promise.reject(k)))
    )
  }
  function L(B, J, K) {
    a.list().forEach((ee) => I(() => ee(B, J, K)))
  }
  function D(B, J, K, ee, ke) {
    const y = v(B, J)
    if (y) return y
    const S = J === tn,
      k = In ? history.state : {}
    K &&
      (ee || S
        ? i.replace(B.fullPath, xe({ scroll: S && k && k.scroll }, ke))
        : i.push(B.fullPath, ke)),
      (o.value = B),
      $e(B, J, K, S),
      he()
  }
  let W
  function ue() {
    W ||
      (W = i.listen((B, J, K) => {
        if (!gt.listening) return
        const ee = w(B),
          ke = O(ee)
        if (ke) {
          E(xe(ke, { replace: !0, force: !0 }), ee).catch(is)
          return
        }
        c = ee
        const y = o.value
        In && Pp(sa(y.fullPath, K.delta), bi()),
          M(ee, y)
            .catch((S) =>
              Rt(S, 12)
                ? S
                : Rt(S, 2)
                  ? (E(xe(g(S.to), { force: !0 }), ee)
                      .then((k) => {
                        Rt(k, 20) &&
                          !K.delta &&
                          K.type === gs.pop &&
                          i.go(-1, !1)
                      })
                      .catch(is),
                    Promise.reject())
                  : (K.delta && i.go(-K.delta, !1), _(S, ee, y)),
            )
            .then((S) => {
              ;(S = S || D(ee, y, !1)),
                S &&
                  (K.delta && !Rt(S, 8)
                    ? i.go(-K.delta, !1)
                    : K.type === gs.pop && Rt(S, 20) && i.go(-1, !1)),
                L(ee, y, S)
            })
            .catch(is)
      }))
  }
  let fe = Kn(),
    $ = Kn(),
    R
  function _(B, J, K) {
    he(B)
    const ee = $.list()
    return (
      ee.length ? ee.forEach((ke) => ke(B, J, K)) : console.error(B),
      Promise.reject(B)
    )
  }
  function ve() {
    return R && o.value !== tn
      ? Promise.resolve()
      : new Promise((B, J) => {
          fe.add([B, J])
        })
  }
  function he(B) {
    return (
      R ||
        ((R = !B),
        ue(),
        fe.list().forEach(([J, K]) => (B ? K(B) : J())),
        fe.reset()),
      B
    )
  }
  function $e(B, J, K, ee) {
    const { scrollBehavior: ke } = e
    if (!In || !ke) return Promise.resolve()
    const y =
      (!K && kp(sa(B.fullPath, 0))) ||
      ((ee || !K) && history.state && history.state.scroll) ||
      null
    return ci()
      .then(() => ke(B, J, y))
      .then((S) => S && Cp(S))
      .catch((S) => _(S, B, J))
  }
  const Le = (B) => i.go(B)
  let ht
  const en = new Set(),
    gt = {
      currentRoute: o,
      listening: !0,
      addRoute: h,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: C,
      getRoutes: b,
      resolve: w,
      options: e,
      push: x,
      replace: T,
      go: Le,
      back: () => Le(-1),
      forward: () => Le(1),
      beforeEach: r.add,
      beforeResolve: l.add,
      afterEach: a.add,
      onError: $.add,
      isReady: ve,
      install(B) {
        const J = this
        B.component("RouterLink", Jp),
          B.component("RouterView", th),
          (B.config.globalProperties.$router = J),
          Object.defineProperty(B.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ne(o),
          }),
          In &&
            !ht &&
            o.value === tn &&
            ((ht = !0), x(i.location).catch((ke) => {}))
        const K = {}
        for (const ke in tn)
          Object.defineProperty(K, ke, {
            get: () => o.value[ke],
            enumerable: !0,
          })
        B.provide(vi, J), B.provide(fu, ro(K)), B.provide(Er, o)
        const ee = B.unmount
        en.add(B),
          (B.unmount = function () {
            en.delete(B),
              en.size < 1 &&
                ((c = tn),
                W && W(),
                (W = null),
                (o.value = tn),
                (ht = !1),
                (R = !1)),
              ee()
          })
      },
    }
  function et(B) {
    return B.reduce((J, K) => J.then(() => I(K)), Promise.resolve())
  }
  return gt
}
function sh(e, t) {
  const n = [],
    s = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length)
  for (let l = 0; l < r; l++) {
    const a = t.matched[l]
    a && (e.matched.find((c) => zn(c, a)) ? s.push(a) : n.push(a))
    const o = e.matched[l]
    o && (t.matched.find((c) => zn(c, o)) || i.push(o))
  }
  return [n, s, i]
}
function ih() {
  return Ne(vi)
}
var Ps = {
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
const rh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  He =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: s = 2,
        absoluteStrokeWidth: i,
        color: r,
        class: l,
        ...a
      },
      { attrs: o, slots: c },
    ) =>
      Te(
        "svg",
        {
          ...Ps,
          width: n || Ps.width,
          height: n || Ps.height,
          stroke: r || Ps.stroke,
          "stroke-width": i ? (Number(s) * 24) / Number(n) : s,
          ...o,
          class: ["lucide", `lucide-${rh(e)}`],
          ...a,
        },
        [...t.map((u) => Te(...u)), ...(c.default ? [c.default()] : [])],
      )
const va = He("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const ya = He("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const lh = He("CloudDrizzleIcon", [
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
const ah = He("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }],
])
const pu = He("EyeOffIcon", [
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
const oh = He("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
const uh = He("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
const ch = He("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
const dh = He("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
const fh = He("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
const ph = He("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
const hh = He("PencilRulerIcon", [
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
const gh = He("RabbitIcon", [
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
const Ns = He("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
const mh = He("SunIcon", [
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
const Ri = He("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const bh = He("TurtleIcon", [
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
const Tr = He("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  vh = { class: "flex justify-center p-5 gap-5 content-center" },
  yh = { class: "flex justify-between gap-2 w-full content-center" },
  wh = { class: "flex gap-1 p-2" },
  xh = { class: "flex gap-5 p-2 relative" },
  Sh = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  Eh = { key: 0 },
  Th = { key: 1 },
  Ch = { key: 0 },
  Ph = { key: 1 },
  kh = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  Ih = { class: "flex gap-5 content-center" },
  Mh = { class: "lg:hidden flex" },
  Oh = { class: "flex gap-1 p-2" },
  Ah = { class: "flex flex-col gap-2 p-2" },
  $h = { class: "flex justify-between" },
  Lh = { class: "flex justify-between items-center" },
  _h = { class: "flex gap-1 p-2" },
  Bh = { class: "ml-5" },
  jh = { class: "ml-5" },
  Rh = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = V(5),
        s = t,
        i = ih(),
        r = (c) => {
          ;(n.value = c.target.value), s("update:brightness", n.value)
          let u = "--swiper-navigation-color",
            d = "--swiper-pagination-color",
            f = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(u, f),
            document.documentElement.style.setProperty(d, f)
        }
      We(() => {
        let c = window.localStorage
        if (c.getItem("brightness")) {
          n.value = Number(c.getItem("brightness"))
          let u = "--swiper-navigation-color",
            d = "--swiper-pagination-color",
            f = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(u, f),
            document.documentElement.style.setProperty(d, f)
        }
      })
      const l = () => {
          window.location.href = "/"
        },
        a = () => {
          let c = document.getElementById("mobileMenu")
          c.classList.contains("hidden")
            ? c.classList.remove("hidden")
            : c.classList.add("hidden")
        },
        o = (c) => {
          a(), i.push(c)
        }
      return (c, u) => (
        H(),
        se(
          Pe,
          null,
          [
            p("div", vh, [
              u[14] || (u[14] = p("div", { class: "w-1/12" }, null, -1)),
              p(
                "div",
                {
                  class: P([
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
                  p("div", yh, [
                    p("div", wh, [
                      Z(
                        ne(Ri),
                        {
                          class: P({
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
                      p(
                        "p",
                        {
                          class: P([
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
                    p("div", xh, [
                      Z(
                        ne(Rs),
                        { class: "relative inline-block text-left" },
                        {
                          default: we(() => [
                            Z(
                              ne($i),
                              {
                                "aria-label": "Web dropdown menu",
                                class: P([
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
                                default: we(() => [
                                  u[12] || (u[12] = pe(" Web", -1)),
                                  Z(ne(ya)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            Z(
                              ne(Li),
                              {
                                class: P([
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
                                default: we(() => [
                                  p("div", Sh, [
                                    p(
                                      "a",
                                      {
                                        onClick:
                                          u[0] ||
                                          (u[0] = (d) =>
                                            c.$router.push("/web-portfolio")),
                                        class: P([
                                          "block px-4 py-2 cursor-pointer",
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
                                      [
                                        c.$route.path.startsWith(
                                          "/web-portfolio",
                                        )
                                          ? (H(), se("b", Eh, "Web Portfolio"))
                                          : (H(),
                                            se("span", Th, "Web Portfolio")),
                                      ],
                                      2,
                                    ),
                                    p(
                                      "a",
                                      {
                                        onClick:
                                          u[1] ||
                                          (u[1] = (d) =>
                                            c.$router.push("/web-services")),
                                        class: P([
                                          "block px-4 py-2 cursor-pointer",
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
                                      [
                                        c.$route.path === "/web-services"
                                          ? (H(), se("b", Ch, "Web Services"))
                                          : (H(),
                                            se("span", Ph, "Web Services")),
                                      ],
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
                      Z(
                        ne(Rs),
                        { class: "relative inline-block text-left" },
                        {
                          default: we(() => [
                            Z(
                              ne($i),
                              {
                                "aria-label": "Creative projects dropdown menu",
                                class: P([
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
                                default: we(() => [
                                  u[13] ||
                                    (u[13] = pe(" Creative Projects", -1)),
                                  Z(ne(ya)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            Z(
                              ne(Li),
                              {
                                class: P([
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
                                default: we(() => [
                                  p("div", kh, [
                                    p(
                                      "a",
                                      {
                                        href: "https://hansenstudios.art/",
                                        class: P([
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
                                      "Art and Animation",
                                      2,
                                    ),
                                    p(
                                      "a",
                                      {
                                        href: "/blog",
                                        class: P([
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
                                    p(
                                      "a",
                                      {
                                        href: "#",
                                        class: P([
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
                                    p(
                                      "a",
                                      {
                                        href: "#",
                                        class: P([
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
                      p(
                        "a",
                        {
                          onClick:
                            u[2] || (u[2] = (d) => c.$router.push("/about-me")),
                        },
                        [
                          p(
                            "h6",
                            {
                              class: P([
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
                    p("div", Ih, [
                      p(
                        "a",
                        {
                          onClick:
                            u[3] || (u[3] = (d) => c.$router.push("/contact")),
                        },
                        [
                          p(
                            "button",
                            {
                              class: P([
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
              p(
                "div",
                {
                  id: "headerRightColumn",
                  class: P([
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
                  p("div", Mh, [
                    p("div", Oh, [
                      Z(
                        ne(Ri),
                        {
                          class: P({
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
                      p(
                        "p",
                        {
                          class: P([
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
                  Z(
                    ne(dh),
                    {
                      class: P([
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
                      onClick: u[4] || (u[4] = (d) => a()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  Z(ne(Rs), null, {
                    default: we(() => [
                      Z(
                        ne($i),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
                          class: P([
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
                          default: we(() => [
                            n.value == 5
                              ? (H(),
                                be(ne(mh), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (H(),
                                  be(ne(ah), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (H(),
                                    be(ne(lh), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (H(),
                                      be(ne(ph), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (H(),
                                      be(ne(fh), {
                                        key: 4,
                                        class: "text-slate-400",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      Z(
                        ne(Li),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: we(() => [
                            p("div", Ah, [
                              p("div", $h, [
                                ho(
                                  p(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        u[5] || (u[5] = (d) => (n.value = d)),
                                      onInput: r,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[gf, n.value]],
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
              u[15] || (u[15] = p("div", { class: "w-1/12" }, null, -1)),
            ]),
            p(
              "div",
              {
                id: "mobileMenu",
                class: P([
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
                p("div", Lh, [
                  p("div", _h, [
                    Z(
                      ne(Ri),
                      {
                        class: P({
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
                    p(
                      "p",
                      {
                        class: P([
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
                  Z(
                    ne(Tr),
                    {
                      class: P({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: u[6] || (u[6] = (d) => a()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                p(
                  "ul",
                  {
                    class: P([
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
                    p("a", { onClick: u[7] || (u[7] = (d) => o("/contact")) }, [
                      ...(u[16] ||
                        (u[16] = [
                          p(
                            "li",
                            { class: "py-2 px-3 rounded" },
                            "Contact",
                            -1,
                          ),
                        ])),
                    ]),
                    u[24] ||
                      (u[24] = p(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75" },
                        "Web",
                        -1,
                      )),
                    p("ul", Bh, [
                      p(
                        "a",
                        {
                          onClick: u[8] || (u[8] = (d) => o("/web-portfolio")),
                        },
                        [
                          ...(u[17] ||
                            (u[17] = [
                              p(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Web Portfolio",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      p(
                        "a",
                        { onClick: u[9] || (u[9] = (d) => o("/web-services")) },
                        [
                          ...(u[18] ||
                            (u[18] = [
                              p(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Web Services",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                    ]),
                    u[25] ||
                      (u[25] = p(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75" },
                        "Creative Projects",
                        -1,
                      )),
                    p("ul", jh, [
                      u[20] ||
                        (u[20] = p(
                          "li",
                          { class: "py-2 px-3 rounded" },
                          "Art and Animation",
                          -1,
                        )),
                      p(
                        "a",
                        { onClick: u[10] || (u[10] = (d) => o("/blog")) },
                        [
                          ...(u[19] ||
                            (u[19] = [
                              p(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Blog / Non-Fiction Writings",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      u[21] ||
                        (u[21] = p(
                          "li",
                          { class: "py-2 px-3 rounded" },
                          "Custom Software",
                          -1,
                        )),
                      u[22] ||
                        (u[22] = p(
                          "li",
                          { class: "py-2 px-3 rounded" },
                          "Cooking and Recipes",
                          -1,
                        )),
                    ]),
                    p(
                      "a",
                      { onClick: u[11] || (u[11] = (d) => o("/about-me")) },
                      [
                        ...(u[23] ||
                          (u[23] = [
                            p(
                              "li",
                              { class: "py-2 px-3 rounded" },
                              "About Me",
                              -1,
                            ),
                          ])),
                      ],
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
  Nh = Zt(Rh, [["__scopeId", "data-v-11d7ddc9"]]),
  zh = { class: "flex justify-center py-5 flex-col" },
  Dh = { class: "inline-block relative" },
  Fh = { class: "font-semibold text-center px-1" },
  Hh = { class: "flex py-5 justify-center gap-3 w-full" },
  Gh = { href: "/web-portfolio" },
  Vh = { href: "/web-pricing" },
  Wh = {
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
  qh = Object.assign(Wh, {
    __name: "WebServicesHero",
    props: { brightness: Number },
    setup(e) {
      const t = V([
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
      let n = V(0),
        s = V(!1)
      We(() => {
        ;(t.value = t.value.sort(() => Math.random() - 0.5)),
          setInterval(() => {
            s.value ||
              ((s.value = !0), (n.value = (n.value + 1) % t.value.length))
          }, 4e3)
        const r = () => {
            s.value = !1
          },
          l = () => {
            s.value = !0
          }
        window.addEventListener("mousedown", r),
          window.addEventListener("mouseup", l),
          dn(() => {
            window.removeEventListener("mousedown", r),
              window.removeEventListener("mouseup", l)
          })
      }),
        Hr(() => {
          s.value = !1
        })
      const i = te(() => t.value[n.value])
      return (r, l) => {
        const a = sd("typewriter")
        return (
          H(),
          se("div", zh, [
            p(
              "h1",
              {
                class: P([
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
                l[0] || (l[0] = pe(" I make ", -1)),
                p("div", Dh, [
                  ho((H(), se("span", Fh, [pe(Je(i.value), 1)])), [
                    [a, i.value],
                  ]),
                  p(
                    "div",
                    {
                      class: P([
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
                l[1] || (l[1] = pe(" websites. ", -1)),
              ],
              2,
            ),
            p(
              "p",
              {
                class: P([
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
            p("div", Hh, [
              p("a", Gh, [
                p(
                  "button",
                  {
                    "aria-label": "View my portfolio",
                    class: P([
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
              p("a", Vh, [
                p(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: P([
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
function wa(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function tl(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {})
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : wa(t[s]) && wa(e[s]) && Object.keys(t[s]).length > 0 && tl(e[s], t[s])
    })
}
const hu = {
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
function _t() {
  const e = typeof document < "u" ? document : {}
  return tl(e, hu), e
}
const Uh = {
  document: hu,
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
function Qe() {
  const e = typeof window < "u" ? window : {}
  return tl(e, Uh), e
}
function Kh(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function Yh(e) {
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
function gu(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Xs() {
  return Date.now()
}
function Xh(e) {
  const t = Qe()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function Jh(e, t) {
  t === void 0 && (t = "x")
  const n = Qe()
  let s, i, r
  const l = Xh(e)
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
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
function ks(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  )
}
function Zh(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function ot() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (s != null && !Zh(s)) {
      const i = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0)
      for (let r = 0, l = i.length; r < l; r += 1) {
        const a = i[r],
          o = Object.getOwnPropertyDescriptor(s, a)
        o !== void 0 &&
          o.enumerable &&
          (ks(e[a]) && ks(s[a])
            ? s[a].__swiper__
              ? (e[a] = s[a])
              : ot(e[a], s[a])
            : !ks(e[a]) && ks(s[a])
              ? ((e[a] = {}), s[a].__swiper__ ? (e[a] = s[a]) : ot(e[a], s[a]))
              : (e[a] = s[a]))
      }
    }
  }
  return e
}
function Is(e, t, n) {
  e.style.setProperty(t, n)
}
function mu(e) {
  let { swiper: t, targetPosition: n, side: s } = e
  const i = Qe(),
    r = -t.translate
  let l = null,
    a
  const o = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID)
  const c = n > r ? "next" : "prev",
    u = (f, h) => (c === "next" && f >= h) || (c === "prev" && f <= h),
    d = () => {
      ;(a = new Date().getTime()), l === null && (l = a)
      const f = Math.max(Math.min((a - l) / o, 1), 0),
        h = 0.5 - Math.cos(f * Math.PI) / 2
      let m = r + h * (n - r)
      if ((u(m, n) && (m = n), t.wrapperEl.scrollTo({ [s]: m }), u(m, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: m })
          }),
          i.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = i.requestAnimationFrame(d)
    }
  d()
}
function $t(e, t) {
  t === void 0 && (t = "")
  const n = Qe(),
    s = [...e.children]
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      s.push(...e.assignedElements()),
    t ? s.filter((i) => i.matches(t)) : s
  )
}
function Qh(e, t) {
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
function e0(e, t) {
  const n = Qe()
  let s = t.contains(e)
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = Qh(e, t))),
    s
  )
}
function Js(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function Zs(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : Kh(t))), n
}
function t0(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function n0(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function an(e, t) {
  return Qe().getComputedStyle(e, null).getPropertyValue(t)
}
function Qs(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function bu(e, t) {
  const n = []
  let s = e.parentElement
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement)
  return n
}
function Cr(e, t, n) {
  const s = Qe()
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
function De(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
function ei(e, t) {
  t === void 0 && (t = ""),
    typeof trustedTypes < "u"
      ? (e.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (n) => n })
          .createHTML(t))
      : (e.innerHTML = t)
}
let Ni
function s0() {
  const e = Qe(),
    t = _t()
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
function vu() {
  return Ni || (Ni = s0()), Ni
}
let zi
function i0(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = vu(),
    s = Qe(),
    i = s.navigator.platform,
    r = t || s.navigator.userAgent,
    l = { ios: !1, android: !1 },
    a = s.screen.width,
    o = s.screen.height,
    c = r.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = r.match(/(iPad).*OS\s([\d_]+)/)
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === "Win32"
  let m = i === "MacIntel"
  const b = [
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
    !u &&
      m &&
      n.touch &&
      b.indexOf(`${a}x${o}`) >= 0 &&
      ((u = r.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (m = !1)),
    c && !h && ((l.os = "android"), (l.android = !0)),
    (u || f || d) && ((l.os = "ios"), (l.ios = !0)),
    l
  )
}
function yu(e) {
  return e === void 0 && (e = {}), zi || (zi = i0(e)), zi
}
let Di
function r0() {
  const e = Qe(),
    t = yu()
  let n = !1
  function s() {
    const a = e.navigator.userAgent.toLowerCase()
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    )
  }
  if (s()) {
    const a = String(e.navigator.userAgent)
    if (a.includes("Version/")) {
      const [o, c] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((u) => Number(u))
      n = o < 16 || (o === 16 && c < 2)
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    r = s(),
    l = r || (i && t.ios)
  return { isSafari: n || r, needPerspectiveFix: n, need3dFix: l, isWebView: i }
}
function wu() {
  return Di || (Di = r0()), Di
}
function l0(e) {
  let { swiper: t, on: n, emit: s } = e
  const i = Qe()
  let r = null,
    l = null
  const a = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((d) => {
          l = i.requestAnimationFrame(() => {
            const { width: f, height: h } = t
            let m = f,
              b = h
            d.forEach((C) => {
              let { contentBoxSize: w, contentRect: g, target: v } = C
              ;(v && v !== t.el) ||
                ((m = g ? g.width : (w[0] || w).inlineSize),
                (b = g ? g.height : (w[0] || w).blockSize))
            }),
              (m !== f || b !== h) && a()
          })
        })),
        r.observe(t.el))
    },
    c = () => {
      l && i.cancelAnimationFrame(l),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null))
    },
    u = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange")
    }
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o()
      return
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", u)
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", u)
    })
}
function a0(e) {
  let { swiper: t, extendParams: n, on: s, emit: i } = e
  const r = [],
    l = Qe(),
    a = function (u, d) {
      d === void 0 && (d = {})
      const f = l.MutationObserver || l.WebkitMutationObserver,
        h = new f((m) => {
          if (t.__preventObserver__) return
          if (m.length === 1) {
            i("observerUpdate", m[0])
            return
          }
          const b = function () {
            i("observerUpdate", m[0])
          }
          l.requestAnimationFrame
            ? l.requestAnimationFrame(b)
            : l.setTimeout(b, 0)
        })
      h.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        r.push(h)
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = bu(t.hostEl)
          for (let d = 0; d < u.length; d += 1) a(u[d])
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 })
      }
    },
    c = () => {
      r.forEach((u) => {
        u.disconnect()
      }),
        r.splice(0, r.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", o),
    s("destroy", c)
}
var o0 = {
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
      for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++)
        l[a] = arguments[a]
      t.apply(s, l)
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
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l]
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (n = r[0].data), (s = r[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(s, [o, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((c) => {
              c.apply(s, n)
            })
      }),
      e
    )
  },
}
function u0() {
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
function c0() {
  const e = this
  function t(M, L) {
    return parseFloat(M.getPropertyValue(e.getDirectionLabel(L)) || 0)
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: i, size: r, rtlTranslate: l, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    c = o ? e.virtual.slides.length : e.slides.length,
    u = $t(i, `.${e.params.slideClass}, swiper-slide`),
    d = o ? e.virtual.slides.length : u.length
  let f = []
  const h = [],
    m = []
  let b = n.slidesOffsetBefore
  typeof b == "function" && (b = n.slidesOffsetBefore.call(e))
  let C = n.slidesOffsetAfter
  typeof C == "function" && (C = n.slidesOffsetAfter.call(e))
  const w = e.snapGrid.length,
    g = e.slidesGrid.length
  let v = n.spaceBetween,
    x = -b,
    T = 0,
    O = 0
  if (typeof r > "u") return
  typeof v == "string" && v.indexOf("%") >= 0
    ? (v = (parseFloat(v.replace("%", "")) / 100) * r)
    : typeof v == "string" && (v = parseFloat(v)),
    (e.virtualSize = -v),
    u.forEach((M) => {
      l ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
        (M.style.marginBottom = ""),
        (M.style.marginTop = "")
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Is(s, "--swiper-centered-offset-before", ""),
      Is(s, "--swiper-centered-offset-after", ""))
  const E = n.grid && n.grid.rows > 1 && e.grid
  E ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides()
  let A
  const I =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (M) => typeof n.breakpoints[M].slidesPerView < "u",
    ).length > 0
  for (let M = 0; M < d; M += 1) {
    A = 0
    let L
    if (
      (u[M] && (L = u[M]),
      E && e.grid.updateSlide(M, L, u),
      !(u[M] && an(L, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        I && (u[M].style[e.getDirectionLabel("width")] = "")
        const D = getComputedStyle(L),
          W = L.style.transform,
          ue = L.style.webkitTransform
        if (
          (W && (L.style.transform = "none"),
          ue && (L.style.webkitTransform = "none"),
          n.roundLengths)
        )
          A = e.isHorizontal() ? Cr(L, "width") : Cr(L, "height")
        else {
          const fe = t(D, "width"),
            $ = t(D, "padding-left"),
            R = t(D, "padding-right"),
            _ = t(D, "margin-left"),
            ve = t(D, "margin-right"),
            he = D.getPropertyValue("box-sizing")
          if (he && he === "border-box") A = fe + _ + ve
          else {
            const { clientWidth: $e, offsetWidth: Le } = L
            A = fe + $ + R + _ + ve + (Le - $e)
          }
        }
        W && (L.style.transform = W),
          ue && (L.style.webkitTransform = ue),
          n.roundLengths && (A = Math.floor(A))
      } else
        (A = (r - (n.slidesPerView - 1) * v) / n.slidesPerView),
          n.roundLengths && (A = Math.floor(A)),
          u[M] && (u[M].style[e.getDirectionLabel("width")] = `${A}px`)
      u[M] && (u[M].swiperSlideSize = A),
        m.push(A),
        n.centeredSlides
          ? ((x = x + A / 2 + T / 2 + v),
            T === 0 && M !== 0 && (x = x - r / 2 - v),
            M === 0 && (x = x - r / 2 - v),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            n.roundLengths && (x = Math.floor(x)),
            O % n.slidesPerGroup === 0 && f.push(x),
            h.push(x))
          : (n.roundLengths && (x = Math.floor(x)),
            (O - Math.min(e.params.slidesPerGroupSkip, O)) %
              e.params.slidesPerGroup ===
              0 && f.push(x),
            h.push(x),
            (x = x + A + v)),
        (e.virtualSize += A + v),
        (T = A),
        (O += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, r) + C),
    l &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + v}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`),
    E && e.grid.updateWrapperSize(A, f),
    !n.centeredSlides)
  ) {
    const M = []
    for (let L = 0; L < f.length; L += 1) {
      let D = f[L]
      n.roundLengths && (D = Math.floor(D)),
        f[L] <= e.virtualSize - r && M.push(D)
    }
    ;(f = M),
      Math.floor(e.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - r)
  }
  if (o && n.loop) {
    const M = m[0] + v
    if (n.slidesPerGroup > 1) {
      const L = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        D = M * n.slidesPerGroup
      for (let W = 0; W < L; W += 1) f.push(f[f.length - 1] + D)
    }
    for (let L = 0; L < e.virtual.slidesBefore + e.virtual.slidesAfter; L += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + M),
        h.push(h[h.length - 1] + M),
        (e.virtualSize += M)
  }
  if ((f.length === 0 && (f = [0]), v !== 0)) {
    const M =
      e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight")
    u.filter((L, D) =>
      !n.cssMode || n.loop ? !0 : D !== u.length - 1,
    ).forEach((L) => {
      L.style[M] = `${v}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let M = 0
    m.forEach((D) => {
      M += D + (v || 0)
    }),
      (M -= v)
    const L = M > r ? M - r : 0
    f = f.map((D) => (D <= 0 ? -b : D > L ? L + C : D))
  }
  if (n.centerInsufficientSlides) {
    let M = 0
    m.forEach((D) => {
      M += D + (v || 0)
    }),
      (M -= v)
    const L = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (M + L < r) {
      const D = (r - M - L) / 2
      f.forEach((W, ue) => {
        f[ue] = W - D
      }),
        h.forEach((W, ue) => {
          h[ue] = W + D
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: f,
      slidesGrid: h,
      slidesSizesGrid: m,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Is(s, "--swiper-centered-offset-before", `${-f[0]}px`),
      Is(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - m[m.length - 1] / 2}px`,
      )
    const M = -e.snapGrid[0],
      L = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((D) => D + M)),
      (e.slidesGrid = e.slidesGrid.map((D) => D + L))
  }
  if (
    (d !== c && e.emit("slidesLengthChange"),
    f.length !== w &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== g && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const M = `${n.containerModifierClass}backface-hidden`,
      L = e.el.classList.contains(M)
    d <= n.maxBackfaceHiddenSlides
      ? L || e.el.classList.add(M)
      : L && e.el.classList.remove(M)
  }
}
function d0(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled
  let i = 0,
    r
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const l = (a) => (s ? t.slides[t.getSlideIndexByData(a)] : t.slides[a])
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a)
      })
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const a = t.activeIndex + r
        if (a > t.slides.length && !s) break
        n.push(l(a))
      }
  else n.push(l(t.activeIndex))
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const a = n[r].offsetHeight
      i = a > i ? a : i
    }
  ;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function f0() {
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
const xa = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function p0(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = t
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset()
  let l = -e
  i && (l = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let a = n.spaceBetween
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a))
  for (let o = 0; o < s.length; o += 1) {
    const c = s[o]
    let u = c.swiperSlideOffset
    n.cssMode && n.centeredSlides && (u -= s[0].swiperSlideOffset)
    const d =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      f =
        (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      h = -(l - u),
      m = h + t.slidesSizesGrid[o],
      b = h >= 0 && h <= t.size - t.slidesSizesGrid[o],
      C =
        (h >= 0 && h < t.size - 1) ||
        (m > 1 && m <= t.size) ||
        (h <= 0 && m >= t.size)
    C && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(o)),
      xa(c, C, n.slideVisibleClass),
      xa(c, b, n.slideFullyVisibleClass),
      (c.progress = i ? -d : d),
      (c.originalProgress = i ? -f : f)
  }
}
function h0(e) {
  const t = this
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * u) || 0
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate()
  let { progress: i, isBeginning: r, isEnd: l, progressLoop: a } = t
  const o = r,
    c = l
  if (s === 0) (i = 0), (r = !0), (l = !0)
  else {
    i = (e - t.minTranslate()) / s
    const u = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1
    ;(r = u || i <= 0), (l = d || i >= 1), u && (i = 0), d && (i = 1)
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[u],
      h = t.slidesGrid[d],
      m = t.slidesGrid[t.slidesGrid.length - 1],
      b = Math.abs(e)
    b >= f ? (a = (b - f) / m) : (a = (b + m - h) / m), a > 1 && (a -= 1)
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: r, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !o && t.emit("reachBeginning toEdge"),
    l && !c && t.emit("reachEnd toEdge"),
    ((o && !r) || (c && !l)) && t.emit("fromEdge"),
    t.emit("progress", i)
}
const Fi = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function g0() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: i } = e,
    r = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    a = (d) => $t(s, `.${n.slideClass}${d}, swiper-slide${d}`)[0]
  let o, c, u
  if (r)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${d}"]`))
    } else o = a(`[data-swiper-slide-index="${i}"]`)
  else
    l
      ? ((o = t.find((d) => d.column === i)),
        (u = t.find((d) => d.column === i + 1)),
        (c = t.find((d) => d.column === i - 1)))
      : (o = t[i])
  o &&
    (l ||
      ((u = n0(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (c = t0(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((d) => {
      Fi(d, d === o, n.slideActiveClass),
        Fi(d, d === u, n.slideNextClass),
        Fi(d, d === c, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const zs = (e, t) => {
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
  Hi = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  Pr = (e) => {
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
      const l = i,
        a = [l - t]
      a.push(...Array.from({ length: t }).map((o, c) => l + s + c)),
        e.slides.forEach((o, c) => {
          a.includes(o.column) && Hi(e, c)
        })
      return
    }
    const r = i + s - 1
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= r + t; l += 1) {
        const a = ((l % n) + n) % n
        ;(a < i || a > r) && Hi(e, a)
      }
    else
      for (let l = Math.max(i - t, 0); l <= Math.min(r + t, n - 1); l += 1)
        l !== i && (l > r || l < i) && Hi(e, l)
  }
function m0(e) {
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
function b0(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: l, snapIndex: a } = t
  let o = e,
    c
  const u = (h) => {
    let m = h - t.virtual.slidesBefore
    return (
      m < 0 && (m = t.virtual.slides.length + m),
      m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
      m
    )
  }
  if ((typeof o > "u" && (o = m0(t)), s.indexOf(n) >= 0)) c = s.indexOf(n)
  else {
    const h = Math.min(i.slidesPerGroupSkip, o)
    c = h + Math.floor((o - h) / i.slidesPerGroup)
  }
  if ((c >= s.length && (c = s.length - 1), o === r && !t.params.loop)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"))
    return
  }
  if (o === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(o)
    return
  }
  const d = t.grid && i.grid && i.grid.rows > 1
  let f
  if (t.virtual && i.virtual.enabled && i.loop) f = u(o)
  else if (d) {
    const h = t.slides.find((b) => b.column === o)
    let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(m) && (m = Math.max(t.slides.indexOf(h), 0)),
      (f = Math.floor(m / i.grid.rows))
  } else if (t.slides[o]) {
    const h = t.slides[o].getAttribute("data-swiper-slide-index")
    h ? (f = parseInt(h, 10)) : (f = o)
  } else f = o
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: l,
    realIndex: f,
    previousIndex: r,
    activeIndex: o,
  }),
    t.initialized && Pr(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== f && t.emit("realIndexChange"), t.emit("slideChange"))
}
function v0(e, t) {
  const n = this,
    s = n.params
  let i = e.closest(`.${s.slideClass}, swiper-slide`)
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${s.slideClass}, swiper-slide`) && (i = a)
    })
  let r = !1,
    l
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        ;(r = !0), (l = a)
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
        : (n.clickedIndex = l)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var y0 = {
  updateSize: u0,
  updateSlides: c0,
  updateAutoHeight: d0,
  updateSlidesOffset: f0,
  updateSlidesProgress: p0,
  updateProgress: h0,
  updateSlidesClasses: g0,
  updateActiveIndex: b0,
  updateClickedSlide: v0,
}
function w0(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = t
  if (n.virtualTranslate) return s ? -i : i
  if (n.cssMode) return i
  let l = Jh(r, e)
  return (l += t.cssOverflowAdjustment()), s && (l = -l), l || 0
}
function x0(e, t) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: l } = n
  let a = 0,
    o = 0
  const c = 0
  n.isHorizontal() ? (a = s ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`))
  let u
  const d = n.maxTranslate() - n.minTranslate()
  d === 0 ? (u = 0) : (u = (e - n.minTranslate()) / d),
    u !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function S0() {
  return -this.snapGrid[0]
}
function E0() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function T0(e, t, n, s, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0)
  const r = this,
    { params: l, wrapperEl: a } = r
  if (r.animating && l.preventInteractionOnTransition) return !1
  const o = r.minTranslate(),
    c = r.maxTranslate()
  let u
  if (
    (s && e > o ? (u = o) : s && e < c ? (u = c) : (u = e),
    r.updateProgress(u),
    l.cssMode)
  ) {
    const d = r.isHorizontal()
    if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -u
    else {
      if (!r.support.smoothScroll)
        return (
          mu({ swiper: r, targetPosition: -u, side: d ? "left" : "top" }), !0
        )
      a.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" })
    }
    return !0
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(u),
        n && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(u),
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
var C0 = {
  getTranslate: w0,
  setTranslate: x0,
  minTranslate: S0,
  maxTranslate: E0,
  translateTo: T0,
}
function P0(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function xu(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: i } = e
  const { activeIndex: r, previousIndex: l } = t
  let a = s
  a || (r > l ? (a = "next") : r < l ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && a === "reset"
      ? t.emit(`slideResetTransition${i}`)
      : n &&
        r !== l &&
        (t.emit(`slideChangeTransition${i}`),
        a === "next"
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`))
}
function k0(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    xu({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function I0(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  ;(n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      xu({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var M0 = { setTransition: P0, transitionStart: k0, transitionEnd: I0 }
function O0(e, t, n, s, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const r = this
  let l = e
  l < 0 && (l = 0)
  const {
    params: a,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: h,
    enabled: m,
  } = r
  if (
    (!m && !s && !i) ||
    r.destroyed ||
    (r.animating && a.preventInteractionOnTransition)
  )
    return !1
  typeof t > "u" && (t = r.params.speed)
  const b = Math.min(r.params.slidesPerGroupSkip, l)
  let C = b + Math.floor((l - b) / r.params.slidesPerGroup)
  C >= o.length && (C = o.length - 1)
  const w = -o[C]
  if (a.normalizeSlideIndex)
    for (let E = 0; E < c.length; E += 1) {
      const A = -Math.floor(w * 100),
        I = Math.floor(c[E] * 100),
        M = Math.floor(c[E + 1] * 100)
      typeof c[E + 1] < "u"
        ? A >= I && A < M - (M - I) / 2
          ? (l = E)
          : A >= I && A < M && (l = E + 1)
        : A >= I && (l = E)
    }
  if (
    r.initialized &&
    l !== d &&
    ((!r.allowSlideNext &&
      (f
        ? w > r.translate && w > r.minTranslate()
        : w < r.translate && w < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        w > r.translate &&
        w > r.maxTranslate() &&
        (d || 0) !== l))
  )
    return !1
  l !== (u || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(w)
  let g
  l > d ? (g = "next") : l < d ? (g = "prev") : (g = "reset")
  const v = r.virtual && r.params.virtual.enabled
  if (!(v && i) && ((f && -w === r.translate) || (!f && w === r.translate)))
    return (
      r.updateActiveIndex(l),
      a.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      a.effect !== "slide" && r.setTranslate(w),
      g !== "reset" && (r.transitionStart(n, g), r.transitionEnd(n, g)),
      !1
    )
  if (a.cssMode) {
    const E = r.isHorizontal(),
      A = f ? w : -w
    if (t === 0)
      v &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        v && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[E ? "scrollLeft" : "scrollTop"] = A
            }))
          : (h[E ? "scrollLeft" : "scrollTop"] = A),
        v &&
          requestAnimationFrame(() => {
            ;(r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1)
          })
    else {
      if (!r.support.smoothScroll)
        return (
          mu({ swiper: r, targetPosition: A, side: E ? "left" : "top" }), !0
        )
      h.scrollTo({ [E ? "left" : "top"]: A, behavior: "smooth" })
    }
    return !0
  }
  const O = wu().isSafari
  return (
    v && !i && O && r.isElement && r.virtual.update(!1, !1, l),
    r.setTransition(t),
    r.setTranslate(w),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(n, g),
    t === 0
      ? r.transitionEnd(n, g)
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
                r.transitionEnd(n, g)))
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function A0(e, t, n, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const i = this
  if (i.destroyed) return
  typeof t > "u" && (t = i.params.speed)
  const r = i.grid && i.params.grid && i.params.grid.rows > 1
  let l = e
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore
    else {
      let a
      if (r) {
        const f = l * i.params.grid.rows
        a = i.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === f,
        ).column
      } else a = i.getSlideIndexByData(l)
      const o = r
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: c } = i.params
      let u = i.params.slidesPerView
      u === "auto"
        ? (u = i.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          c && u % 2 === 0 && (u = u + 1))
      let d = o - a < u
      if (
        (c && (d = d || a < Math.ceil(u / 2)),
        s && c && i.params.slidesPerView !== "auto" && !r && (d = !1),
        d)
      ) {
        const f = c
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
            ? "next"
            : "prev"
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? a + 1 : a - o + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        })
      }
      if (r) {
        const f = l * i.params.grid.rows
        l = i.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === f,
        ).column
      } else l = i.getSlideIndexByData(l)
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(l, t, n, s)
    }),
    i
  )
}
function $0(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    { enabled: i, params: r, animating: l } = s
  if (!i || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  let a = r.slidesPerGroup
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(s.slidesPerViewDynamic("current", !0), 1))
  const o = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    c = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (l && !c && r.loopPreventsSliding) return !1
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + o, e, t, n)
        }),
        !0
      )
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + o, e, t, n)
}
function L0(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: a,
      enabled: o,
      animating: c,
    } = s
  if (!o || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  const u = s.virtual && i.virtual.enabled
  if (i.loop) {
    if (c && !u && i.loopPreventsSliding) return !1
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const d = a ? s.translate : -s.translate
  function f(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
  }
  const h = f(d),
    m = r.map((g) => f(g)),
    b = i.freeMode && i.freeMode.enabled
  let C = r[m.indexOf(h) - 1]
  if (typeof C > "u" && (i.cssMode || b)) {
    let g
    r.forEach((v, x) => {
      h >= v && (g = x)
    }),
      typeof g < "u" && (C = b ? r[g] : r[g > 0 ? g - 1 : g])
  }
  let w = 0
  if (
    (typeof C < "u" &&
      ((w = l.indexOf(C)),
      w < 0 && (w = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((w = w - s.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const g =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(g, e, t, n)
  } else if (i.loop && s.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(w, e, t, n)
      }),
      !0
    )
  return s.slideTo(w, e, t, n)
}
function _0(e, t, n) {
  t === void 0 && (t = !0)
  const s = this
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n)
    )
}
function B0(e, t, n, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5)
  const i = this
  if (i.destroyed) return
  typeof e > "u" && (e = i.params.speed)
  let r = i.activeIndex
  const l = Math.min(i.params.slidesPerGroupSkip, r),
    a = l + Math.floor((r - l) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate
  if (o >= i.snapGrid[a]) {
    const c = i.snapGrid[a],
      u = i.snapGrid[a + 1]
    o - c > (u - c) * s && (r += i.params.slidesPerGroup)
  } else {
    const c = i.snapGrid[a - 1],
      u = i.snapGrid[a]
    o - c <= (u - c) * s && (r -= i.params.slidesPerGroup)
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, e, t, n)
  )
}
function j0() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView
  let i = e.getSlideIndexWhenGrid(e.clickedIndex),
    r
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
    a = e.grid && e.params.grid && e.params.grid.rows > 1
  if (t.loop) {
    if (e.animating) return
    ;(r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? e.slideToLoop(r)
        : i >
            (a
              ? (e.slides.length - s) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - s)
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              $t(n, `${l}[data-swiper-slide-index="${r}"]`)[0],
            )),
            gu(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
  } else e.slideTo(i)
}
var R0 = {
  slideTo: O0,
  slideToLoop: A0,
  slideNext: $0,
  slidePrev: L0,
  slideReset: _0,
  slideToClosest: B0,
  slideToClickedSlide: j0,
}
function N0(e, t) {
  const n = this,
    { params: s, slidesEl: i } = n
  if (!s.loop || (n.virtual && n.params.virtual.enabled)) return
  const r = () => {
      $t(i, `.${s.slideClass}, swiper-slide`).forEach((h, m) => {
        h.setAttribute("data-swiper-slide-index", m)
      })
    },
    l = () => {
      const f = $t(i, `.${s.slideBlankClass}`)
      f.forEach((h) => {
        h.remove()
      }),
        f.length > 0 && (n.recalcSlides(), n.updateSlides())
    },
    a = n.grid && s.grid && s.grid.rows > 1
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || a) && l()
  const o = s.slidesPerGroup * (a ? s.grid.rows : 1),
    c = n.slides.length % o !== 0,
    u = a && n.slides.length % s.grid.rows !== 0,
    d = (f) => {
      for (let h = 0; h < f; h += 1) {
        const m = n.isElement
          ? Zs("swiper-slide", [s.slideBlankClass])
          : Zs("div", [s.slideClass, s.slideBlankClass])
        n.slidesEl.append(m)
      }
    }
  if (c) {
    if (s.loopAddBlankSlides) {
      const f = o - (n.slides.length % o)
      d(f), n.recalcSlides(), n.updateSlides()
    } else
      Js(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    r()
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const f = s.grid.rows - (n.slides.length % s.grid.rows)
      d(f), n.recalcSlides(), n.updateSlides()
    } else
      Js(
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
function z0(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    initial: l,
    byController: a,
    byMousewheel: o,
  } = e === void 0 ? {} : e
  const c = this
  if (!c.params.loop) return
  c.emit("beforeLoopFix")
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: f,
      slidesEl: h,
      params: m,
    } = c,
    { centeredSlides: b, initialSlide: C } = m
  if (
    ((c.allowSlidePrev = !0),
    (c.allowSlideNext = !0),
    c.virtual && m.virtual.enabled)
  ) {
    n &&
      (!m.centeredSlides && c.snapIndex === 0
        ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && c.snapIndex < m.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 &&
            c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
      (c.allowSlidePrev = d),
      (c.allowSlideNext = f),
      c.emit("loopFix")
    return
  }
  let w = m.slidesPerView
  w === "auto"
    ? (w = c.slidesPerViewDynamic())
    : ((w = Math.ceil(parseFloat(m.slidesPerView, 10))),
      b && w % 2 === 0 && (w = w + 1))
  const g = m.slidesPerGroupAuto ? w : m.slidesPerGroup
  let v = b ? Math.max(g, Math.ceil(w / 2)) : g
  v % g !== 0 && (v += g - (v % g)),
    (v += m.loopAdditionalSlides),
    (c.loopedSlides = v)
  const x = c.grid && m.grid && m.grid.rows > 1
  u.length < w + v || (c.params.effect === "cards" && u.length < w + v * 2)
    ? Js(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : x &&
      m.grid.fill === "row" &&
      Js(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const T = [],
    O = [],
    E = x ? Math.ceil(u.length / m.grid.rows) : u.length,
    A = l && E - C < w && !b
  let I = A ? C : c.activeIndex
  typeof r > "u"
    ? (r = c.getSlideIndex(
        u.find(($) => $.classList.contains(m.slideActiveClass)),
      ))
    : (I = r)
  const M = s === "next" || !s,
    L = s === "prev" || !s
  let D = 0,
    W = 0
  const fe = (x ? u[r].column : r) + (b && typeof i > "u" ? -w / 2 + 0.5 : 0)
  if (fe < v) {
    D = Math.max(v - fe, g)
    for (let $ = 0; $ < v - fe; $ += 1) {
      const R = $ - Math.floor($ / E) * E
      if (x) {
        const _ = E - R - 1
        for (let ve = u.length - 1; ve >= 0; ve -= 1)
          u[ve].column === _ && T.push(ve)
      } else T.push(E - R - 1)
    }
  } else if (fe + w > E - v) {
    ;(W = Math.max(fe - (E - v * 2), g)), A && (W = Math.max(W, w - E + C + 1))
    for (let $ = 0; $ < W; $ += 1) {
      const R = $ - Math.floor($ / E) * E
      x
        ? u.forEach((_, ve) => {
            _.column === R && O.push(ve)
          })
        : O.push(R)
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1
    }),
    c.params.effect === "cards" &&
      u.length < w + v * 2 &&
      (O.includes(r) && O.splice(O.indexOf(r), 1),
      T.includes(r) && T.splice(T.indexOf(r), 1)),
    L &&
      T.forEach(($) => {
        ;(u[$].swiperLoopMoveDOM = !0),
          h.prepend(u[$]),
          (u[$].swiperLoopMoveDOM = !1)
      }),
    M &&
      O.forEach(($) => {
        ;(u[$].swiperLoopMoveDOM = !0),
          h.append(u[$]),
          (u[$].swiperLoopMoveDOM = !1)
      }),
    c.recalcSlides(),
    m.slidesPerView === "auto"
      ? c.updateSlides()
      : x &&
        ((T.length > 0 && L) || (O.length > 0 && M)) &&
        c.slides.forEach(($, R) => {
          c.grid.updateSlide(R, $, c.slides)
        }),
    m.watchSlidesProgress && c.updateSlidesOffset(),
    n)
  ) {
    if (T.length > 0 && L) {
      if (typeof t > "u") {
        const $ = c.slidesGrid[I],
          _ = c.slidesGrid[I + D] - $
        o
          ? c.setTranslate(c.translate - _)
          : (c.slideTo(I + Math.ceil(D), 0, !1, !0),
            i &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - _),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - _)))
      } else if (i) {
        const $ = x ? T.length / m.grid.rows : T.length
        c.slideTo(c.activeIndex + $, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate)
      }
    } else if (O.length > 0 && M)
      if (typeof t > "u") {
        const $ = c.slidesGrid[I],
          _ = c.slidesGrid[I - W] - $
        o
          ? c.setTranslate(c.translate - _)
          : (c.slideTo(I - W, 0, !1, !0),
            i &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - _),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - _)))
      } else {
        const $ = x ? O.length / m.grid.rows : O.length
        c.slideTo(c.activeIndex - $, 0, !1, !0)
      }
  }
  if (
    ((c.allowSlidePrev = d),
    (c.allowSlideNext = f),
    c.controller && c.controller.control && !a)
  ) {
    const $ = {
      slideRealIndex: t,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    }
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((R) => {
          !R.destroyed &&
            R.params.loop &&
            R.loopFix({
              ...$,
              slideTo: R.params.slidesPerView === m.slidesPerView ? n : !1,
            })
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...$,
          slideTo:
            c.controller.control.params.slidesPerView === m.slidesPerView
              ? n
              : !1,
        })
  }
  c.emit("loopFix")
}
function D0() {
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
var F0 = { loopCreate: N0, loopFix: z0, loopDestroy: D0 }
function H0(e) {
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
function G0() {
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
var V0 = { setGrabCursor: H0, unsetGrabCursor: G0 }
function W0(e, t) {
  t === void 0 && (t = this)
  function n(s) {
    if (!s || s === _t() || s === Qe()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const i = s.closest(e)
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host)
  }
  return n(t)
}
function Sa(e, t, n) {
  const s = Qe(),
    { params: i } = e,
    r = i.edgeSwipeDetection,
    l = i.edgeSwipeThreshold
  return r && (n <= l || n >= s.innerWidth - l)
    ? r === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function q0(e) {
  const t = this,
    n = _t()
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
    Sa(t, s, s.targetTouches[0].pageX)
    return
  }
  const { params: r, touches: l, enabled: a } = t
  if (
    !a ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return
  !t.animating && r.cssMode && r.loop && t.loopFix()
  let o = s.target
  if (
    (r.touchEventsTarget === "wrapper" && !e0(o, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return
  const c = !!r.noSwipingClass && r.noSwipingClass !== "",
    u = s.composedPath ? s.composedPath() : s.path
  c && s.target && s.target.shadowRoot && u && (o = u[0])
  const d = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    f = !!(s.target && s.target.shadowRoot)
  if (r.noSwiping && (f ? W0(d, o) : o.closest(d))) {
    t.allowClick = !0
    return
  }
  if (r.swipeHandler && !o.closest(r.swipeHandler)) return
  ;(l.currentX = s.pageX), (l.currentY = s.pageY)
  const h = l.currentX,
    m = l.currentY
  if (!Sa(t, s, h)) return
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = h),
    (l.startY = m),
    (i.touchStartTime = Xs()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1)
  let b = !0
  o.matches(i.focusableElements) &&
    ((b = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !o.matches(i.focusableElements))) &&
      n.activeElement.blur()
  const C = b && t.allowTouchMove && r.touchStartPreventDefault
  ;(r.touchStartForcePreventDefault || C) &&
    !o.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s)
}
function U0(e) {
  const t = _t(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: l, enabled: a } = n
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return
  let o = e
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (s.touchId !== null || o.pointerId !== s.pointerId))
  )
    return
  let c
  if (o.type === "touchmove") {
    if (
      ((c = [...o.changedTouches].find((T) => T.identifier === s.touchId)),
      !c || c.identifier !== s.touchId)
    )
      return
  } else c = o
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", o)
    return
  }
  const u = c.pageX,
    d = c.pageY
  if (o.preventedByNestedSwiper) {
    ;(r.startX = u), (r.startY = d)
    return
  }
  if (!n.allowTouchMove) {
    o.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: u, startY: d, currentX: u, currentY: d }),
        (s.touchStartTime = Xs()))
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
        l &&
        ((u > r.startX && -n.translate <= n.maxTranslate()) ||
          (u < r.startX && -n.translate >= n.minTranslate()))
      )
        return
      if (
        !l &&
        ((u < r.startX && n.translate <= n.maxTranslate()) ||
          (u > r.startX && n.translate >= n.minTranslate()))
      )
        return
    }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== o.target &&
      o.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      o.target === t.activeElement &&
      o.target.matches(s.focusableElements))
  ) {
    ;(s.isMoved = !0), (n.allowClick = !1)
    return
  }
  s.allowTouchCallbacks && n.emit("touchMove", o),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = u),
    (r.currentY = d)
  const f = r.currentX - r.startX,
    h = r.currentY - r.startY
  if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
    return
  if (typeof s.isScrolling > "u") {
    let T
    ;(n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : f * f + h * h >= 25 &&
        ((T = (Math.atan2(Math.abs(h), Math.abs(f)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? T > i.touchAngle
          : 90 - T > i.touchAngle))
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", o),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (o.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation()
  let m = n.isHorizontal() ? f : h,
    b = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
  i.oneWayMovement &&
    ((m = Math.abs(m) * (l ? 1 : -1)), (b = Math.abs(b) * (l ? 1 : -1))),
    (r.diff = m),
    (m *= i.touchRatio),
    l && ((m = -m), (b = -b))
  const C = n.touchesDirection
  ;(n.swipeDirection = m > 0 ? "prev" : "next"),
    (n.touchesDirection = b > 0 ? "prev" : "next")
  const w = n.params.loop && !i.cssMode,
    g =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev)
  if (!s.isMoved) {
    if (
      (w && g && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      })
      n.wrapperEl.dispatchEvent(T)
    }
    ;(s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)
  }
  if (
    (new Date().getTime(),
    i._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      C !== n.touchesDirection &&
      w &&
      g &&
      Math.abs(m) >= 1)
  ) {
    Object.assign(r, {
      startX: u,
      startY: d,
      currentX: u,
      currentY: d,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate)
    return
  }
  n.emit("sliderMove", o),
    (s.isMoved = !0),
    (s.currentTranslate = m + s.startTranslate)
  let v = !0,
    x = i.resistanceRatio
  if (
    (i.touchReleaseOnEdges && (x = 0),
    m > 0
      ? (w &&
          g &&
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
          ((v = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + m) ** x)))
      : m < 0 &&
        (w &&
          g &&
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
          ((v = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - m) ** x))),
    v && (o.preventedByNestedSwiper = !0),
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
    if (Math.abs(m) > i.threshold || s.allowThresholdMove) {
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
function K0(e) {
  const t = this,
    n = t.touchEventsData
  let s = e
  s.originalEvent && (s = s.originalEvent)
  let i
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((i = [...s.changedTouches].find((T) => T.identifier === n.touchId)),
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
    params: l,
    touches: a,
    rtlTranslate: o,
    slidesGrid: c,
    enabled: u,
  } = t
  if (!u || (!l.simulateTouch && s.pointerType === "mouse")) return
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  l.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const d = Xs(),
    f = d - n.touchStartTime
  if (t.allowClick) {
    const T = s.path || (s.composedPath && s.composedPath())
    t.updateClickedSlide((T && T[0]) || s.target, T),
      t.emit("tap click", s),
      f < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", s)
  }
  if (
    ((n.lastClickTime = Xs()),
    gu(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let h
  if (
    (l.followFinger
      ? (h = o ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    l.cssMode)
  )
    return
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h })
    return
  }
  const m = h >= -t.maxTranslate() && !t.params.loop
  let b = 0,
    C = t.slidesSizesGrid[0]
  for (
    let T = 0;
    T < c.length;
    T += T < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
  ) {
    const O = T < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup
    typeof c[T + O] < "u"
      ? (m || (h >= c[T] && h < c[T + O])) && ((b = T), (C = c[T + O] - c[T]))
      : (m || h >= c[T]) && ((b = T), (C = c[c.length - 1] - c[c.length - 2]))
  }
  let w = null,
    g = null
  l.rewind &&
    (t.isBeginning
      ? (g =
          l.virtual && l.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (w = 0))
  const v = (h - c[b]) / C,
    x = b < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup
  if (f > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (v >= l.longSwipesRatio
        ? t.slideTo(l.rewind && t.isEnd ? w : b + x)
        : t.slideTo(b)),
      t.swipeDirection === "prev" &&
        (v > 1 - l.longSwipesRatio
          ? t.slideTo(b + x)
          : g !== null && v < 0 && Math.abs(v) > l.longSwipesRatio
            ? t.slideTo(g)
            : t.slideTo(b))
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(b + x)
        : t.slideTo(b)
      : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : b + x),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : b))
  }
}
function Ea() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e,
    l = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const a = l && t.loop
  ;(t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
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
function Y0(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function X0() {
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
function J0(e) {
  const t = this
  zs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function Z0() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Su = (e, t) => {
  const n = _t(),
    { params: s, el: i, wrapperEl: r, device: l } = e,
    a = !!s.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    c = t
  !i ||
    typeof i == "string" ||
    (n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    s.cssMode && r[o]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[c](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Ea,
          !0,
        )
      : e[c]("observerUpdate", Ea, !0),
    i[o]("load", e.onLoad, { capture: !0 }))
}
function Q0() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = q0.bind(e)),
    (e.onTouchMove = U0.bind(e)),
    (e.onTouchEnd = K0.bind(e)),
    (e.onDocumentTouchStart = Z0.bind(e)),
    t.cssMode && (e.onScroll = X0.bind(e)),
    (e.onClick = Y0.bind(e)),
    (e.onLoad = J0.bind(e)),
    Su(e, "on")
}
function eg() {
  Su(this, "off")
}
var tg = { attachEvents: Q0, detachEvents: eg }
const Ta = (e, t) => e.grid && t.grid && t.grid.rows > 1
function ng() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: i } = e,
    r = s.breakpoints
  if (!r || (r && Object.keys(r).length === 0)) return
  const l = _t(),
    a =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    o =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : l.querySelector(s.breakpointsBase),
    c = e.getBreakpoint(r, a, o)
  if (!c || e.currentBreakpoint === c) return
  const d = (c in r ? r[c] : void 0) || e.originalParams,
    f = Ta(e, s),
    h = Ta(e, d),
    m = e.params.grabCursor,
    b = d.grabCursor,
    C = s.enabled
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
    m && !b ? e.unsetGrabCursor() : !m && b && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((O) => {
      if (typeof d[O] > "u") return
      const E = s[O] && s[O].enabled,
        A = d[O] && d[O].enabled
      E && !A && e[O].disable(), !E && A && e[O].enable()
    })
  const w = d.direction && d.direction !== s.direction,
    g = s.loop && (d.slidesPerView !== s.slidesPerView || w),
    v = s.loop
  w && n && e.changeDirection(), ot(e.params, d)
  const x = e.params.enabled,
    T = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    C && !x ? e.disable() : !C && x && e.enable(),
    (e.currentBreakpoint = c),
    e.emit("_beforeBreakpoint", d),
    n &&
      (g
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !v && T
          ? (e.loopCreate(t), e.updateSlides())
          : v && !T && e.loopDestroy()),
    e.emit("breakpoint", d)
}
function sg(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let s = !1
  const i = Qe(),
    r = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1))
        return { value: r * o, point: a }
      }
      return { value: a, point: a }
    })
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10))
  for (let a = 0; a < l.length; a += 1) {
    const { point: o, value: c } = l[a]
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (s = o)
      : c <= n.clientWidth && (s = o)
  }
  return s || "max"
}
var ig = { setBreakpoint: ng, getBreakpoint: sg }
function rg(e, t) {
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
function lg() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: i, device: r } = e,
    l = rg(
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
  t.push(...l), i.classList.add(...t), e.emitContainerClasses()
}
function ag() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var og = { addClasses: lg, removeClasses: ag }
function ug() {
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
var cg = { checkOverflow: ug },
  kr = {
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
function dg(e, t) {
  return function (s) {
    s === void 0 && (s = {})
    const i = Object.keys(s)[0],
      r = s[i]
    if (typeof r != "object" || r === null) {
      ot(t, s)
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
      ot(t, s)
      return
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ot(t, s)
  }
}
const Gi = {
    eventsEmitter: o0,
    update: y0,
    translate: C0,
    transition: M0,
    slide: R0,
    loop: F0,
    grabCursor: V0,
    events: tg,
    breakpoints: ig,
    checkOverflow: cg,
    classes: og,
  },
  Vi = {}
let nl = class zt {
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
      (n = ot({}, n)),
      t && !n.el && (n.el = t)
    const l = _t()
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const u = []
      return (
        l.querySelectorAll(n.el).forEach((d) => {
          const f = ot({}, n, { el: d })
          u.push(new zt(f))
        }),
        u
      )
    }
    const a = this
    ;(a.__swiper__ = !0),
      (a.support = vu()),
      (a.device = yu({ userAgent: n.userAgent })),
      (a.browser = wu()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules)
    const o = {}
    a.modules.forEach((u) => {
      u({
        params: n,
        swiper: a,
        extendParams: dg(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      })
    })
    const c = ot({}, kr, o)
    return (
      (a.params = ot({}, c, Vi, n)),
      (a.originalParams = ot({}, a.params)),
      (a.passedParams = ot({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((u) => {
          a.on(u, a.params.on[u])
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal"
        },
        isVertical() {
          return a.params.direction === "vertical"
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
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
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
      i = $t(n, `.${s.slideClass}, swiper-slide`),
      r = Qs(i[0])
    return Qs(t) - r
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
    t.slides = $t(n, `.${s.slideClass}, swiper-slide`)
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
      l = (s.maxTranslate() - i) * t + i
    s.translateTo(l, typeof n > "u" ? 0 : n),
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
        slidesGrid: l,
        slidesSizesGrid: a,
        size: o,
        activeIndex: c,
      } = s
    let u = 1
    if (typeof i.slidesPerView == "number") return i.slidesPerView
    if (i.centeredSlides) {
      let d = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0,
        f
      for (let h = c + 1; h < r.length; h += 1)
        r[h] &&
          !f &&
          ((d += Math.ceil(r[h].swiperSlideSize)), (u += 1), d > o && (f = !0))
      for (let h = c - 1; h >= 0; h -= 1)
        r[h] && !f && ((d += r[h].swiperSlideSize), (u += 1), d > o && (f = !0))
    } else if (t === "current")
      for (let d = c + 1; d < r.length; d += 1)
        (n ? l[d] + a[d] - l[c] < o : l[d] - l[c] < o) && (u += 1)
    else for (let d = c - 1; d >= 0; d -= 1) l[c] - l[d] < o && (u += 1)
    return u
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: s } = t
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && zs(t, l)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate())
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
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
        const l = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides
        r = t.slideTo(l.length - 1, 0, !1, !0)
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
    let l =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : $t(s, i())[0]
    return (
      !l &&
        n.params.createElements &&
        ((l = Zs("div", n.params.wrapperClass)),
        s.append(l),
        $t(s, `.${n.params.slideClass}`).forEach((a) => {
          l.append(a)
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: l,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || an(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || an(s, "direction") === "rtl"),
        wrongRTL: an(l, "display") === "-webkit-box",
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
          ? zs(n, r)
          : r.addEventListener("load", (l) => {
              zs(n, l.target)
            })
      }),
      Pr(n),
      (n.initialized = !0),
      Pr(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const s = this,
      { params: i, el: r, wrapperEl: l, slides: a } = s
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
          l && l.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index")
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((o) => {
          s.off(o)
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), Yh(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    ot(Vi, t)
  }
  static get extendedDefaults() {
    return Vi
  }
  static get defaults() {
    return kr
  }
  static installModule(t) {
    zt.prototype.__modules__ || (zt.prototype.__modules__ = [])
    const n = zt.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => zt.installModule(n)), zt)
      : (zt.installModule(t), zt)
  }
}
Object.keys(Gi).forEach((e) => {
  Object.keys(Gi[e]).forEach((t) => {
    nl.prototype[t] = Gi[e][t]
  })
})
nl.use([l0, a0])
const Eu = [
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
function Bn(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : wn(t[s]) && wn(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : Bn(e[s], t[s])
          : (e[s] = t[s])
    })
}
function Tu(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function Cu(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function Pu(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function ku(e) {
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
function fg(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function pg(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: l,
    scrollbarEl: a,
    paginationEl: o,
  } = e
  const c = i.filter(
      (I) => I !== "children" && I !== "direction" && I !== "wrapperClass",
    ),
    {
      params: u,
      pagination: d,
      navigation: f,
      scrollbar: h,
      virtual: m,
      thumbs: b,
    } = t
  let C, w, g, v, x, T, O, E
  i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (C = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      u.controller &&
      !u.controller.control &&
      (w = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || o) &&
      (u.pagination || u.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      h &&
      !h.el &&
      (v = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || l) &&
      (s.navigation.nextEl || r) &&
      (u.navigation || u.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (x = !0)
  const A = (I) => {
    t[I] &&
      (t[I].destroy(),
      I === "navigation"
        ? (t.isElement && (t[I].prevEl.remove(), t[I].nextEl.remove()),
          (u[I].prevEl = void 0),
          (u[I].nextEl = void 0),
          (t[I].prevEl = void 0),
          (t[I].nextEl = void 0))
        : (t.isElement && t[I].el.remove(),
          (u[I].el = void 0),
          (t[I].el = void 0)))
  }
  i.includes("loop") &&
    t.isElement &&
    (u.loop && !s.loop ? (T = !0) : !u.loop && s.loop ? (O = !0) : (E = !0)),
    c.forEach((I) => {
      if (wn(u[I]) && wn(s[I]))
        Object.assign(u[I], s[I]),
          (I === "navigation" || I === "pagination" || I === "scrollbar") &&
            "enabled" in s[I] &&
            !s[I].enabled &&
            A(I)
      else {
        const M = s[I]
        ;(M === !0 || M === !1) &&
        (I === "navigation" || I === "pagination" || I === "scrollbar")
          ? M === !1 && A(I)
          : (u[I] = s[I])
      }
    }),
    c.includes("controller") &&
      !w &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      u.controller.control &&
      (t.controller.control = u.controller.control),
    i.includes("children") && n && m && u.virtual.enabled
      ? ((m.slides = n), m.update(!0))
      : i.includes("virtual") &&
        m &&
        u.virtual.enabled &&
        (n && (m.slides = n), m.update(!0)),
    i.includes("children") && n && u.loop && (E = !0),
    C && b.init() && b.update(!0),
    w && (t.controller.control = u.controller.control),
    g &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (u.pagination.el = o),
      d.init(),
      d.render(),
      d.update()),
    v &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (u.scrollbar.el = a),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    x &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          ei(r, t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          ei(l, t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      r && (u.navigation.nextEl = r),
      l && (u.navigation.prevEl = l),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && t.changeDirection(s.direction, !1),
    (T || E) && t.loopDestroy(),
    (O || E) && t.loopCreate(),
    t.update()
}
function Ca(e, t) {
  e === void 0 && (e = {})
  const n = { on: {} },
    s = {},
    i = {}
  Bn(n, kr), (n._emitClasses = !0), (n.init = !1)
  const r = {},
    l = Eu.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e)
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (l.indexOf(o) >= 0
          ? wn(e[o])
            ? ((n[o] = {}), (i[o] = {}), Bn(n[o], e[o]), Bn(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (r[o] = e[o]))
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o]
    }),
    { params: n, passedParams: i, rest: r, events: s }
  )
}
function hg(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: l,
    swiper: a,
  } = e
  Tu(t) &&
    s &&
    i &&
    ((a.params.navigation.nextEl = s),
    (a.originalParams.navigation.nextEl = s),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    Cu(t) &&
      r &&
      ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
    Pu(t) &&
      l &&
      ((a.params.scrollbar.el = l), (a.originalParams.scrollbar.el = l)),
    a.init(n)
}
function gg(e, t, n, s, i) {
  const r = []
  if (!t) return r
  const l = (o) => {
    r.indexOf(o) < 0 && r.push(o)
  }
  if (n && s) {
    const o = s.map(i),
      c = n.map(i)
    o.join("") !== c.join("") && l("children"),
      s.length !== n.length && l("children")
  }
  return (
    Eu.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (wn(e[o]) && wn(t[o])) {
            const c = Object.keys(e[o]),
              u = Object.keys(t[o])
            c.length !== u.length
              ? l(o)
              : (c.forEach((d) => {
                  e[o][d] !== t[o][d] && l(o)
                }),
                u.forEach((d) => {
                  e[o][d] !== t[o][d] && l(o)
                }))
          } else e[o] !== t[o] && l(o)
      }),
    r
  )
}
const mg = (e) => {
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
function Wi(e, t, n) {
  e === void 0 && (e = {})
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (l, a) => {
      Array.isArray(l) &&
        l.forEach((o) => {
          const c = typeof o.type == "symbol"
          a === "default" && (a = "container-end"),
            c && o.children
              ? r(o.children, a)
              : (o.type &&
                    (o.type.name === "SwiperSlide" ||
                      o.type.name === "AsyncComponentWrapper")) ||
                  (o.componentOptions &&
                    o.componentOptions.tag === "SwiperSlide")
                ? s.push(o)
                : i[a] && i[a].push(o)
        })
    }
  return (
    Object.keys(e).forEach((l) => {
      if (typeof e[l] != "function") return
      const a = e[l]()
      r(a, l)
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: i }
  )
}
function bg(e, t, n) {
  if (!n) return null
  const s = (u) => {
      let d = u
      return u < 0 ? (d = t.length + u) : d >= t.length && (d = d - t.length), d
    },
    i = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: l } = n,
    a = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    c = []
  for (let u = a; u < o; u += 1)
    u >= r && u <= l && c.length < t.length && c.push(t[s(u)])
  return c.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = e),
      (u.props.style = i),
      u.type)
    )
      return Te(u.type, { ...u.props }, u.children)
    if (u.componentOptions)
      return Te(
        u.componentOptions.Ctor,
        { ...u.props },
        u.componentOptions.children,
      )
  })
}
const vg = {
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
        l = V("swiper"),
        a = V(null),
        o = V(!1),
        c = V(!1),
        u = V(null),
        d = V(null),
        f = V(null),
        h = { value: [] },
        m = { value: [] },
        b = V(null),
        C = V(null),
        w = V(null),
        g = V(null),
        { params: v, passedParams: x } = Ca(e)
      Wi(n, h, m), (f.value = x), (m.value = h.value)
      const T = () => {
        Wi(n, h, m), (o.value = !0)
      }
      ;(v.onAny = function (A) {
        for (
          var I = arguments.length, M = new Array(I > 1 ? I - 1 : 0), L = 1;
          L < I;
          L++
        )
          M[L - 1] = arguments[L]
        s(A, ...M)
      }),
        Object.assign(v.on, {
          _beforeBreakpoint: T,
          _containerClasses(A, I) {
            l.value = I
          },
        })
      const O = { ...v }
      if (
        (delete O.wrapperClass,
        (d.value = new nl(O)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = h.value
        const A = {
          cache: !1,
          slides: h.value,
          renderExternal: (I) => {
            a.value = I
          },
          renderExternalUpdate: !1,
        }
        Bn(d.value.params.virtual, A), Bn(d.value.originalParams.virtual, A)
      }
      Gr(() => {
        !c.value && d.value && (d.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: A } = Ca(e),
          I = gg(A, f.value, h.value, m.value, (M) => M.props && M.props.key)
        ;(f.value = A),
          (I.length || o.value) &&
            d.value &&
            !d.value.destroyed &&
            pg({
              swiper: d.value,
              slides: h.value,
              passedParams: A,
              changedParams: I,
              nextEl: b.value,
              prevEl: C.value,
              scrollbarEl: g.value,
              paginationEl: w.value,
            }),
          (o.value = !1)
      }),
        bt("swiper", d),
        un(a, () => {
          ci(() => {
            mg(d.value)
          })
        }),
        We(() => {
          u.value &&
            (hg(
              {
                el: u.value,
                nextEl: b.value,
                prevEl: C.value,
                paginationEl: w.value,
                scrollbarEl: g.value,
                swiper: d.value,
              },
              v,
            ),
            s("swiper", d.value))
        }),
        Vr(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1)
        })
      function E(A) {
        return v.virtual
          ? bg(d, A, a.value)
          : (A.forEach((I, M) => {
              I.props || (I.props = {}),
                (I.props.swiperRef = d),
                (I.props.swiperSlideIndex = M)
            }),
            A)
      }
      return () => {
        const { slides: A, slots: I } = Wi(n, h, m)
        return Te(i, { ref: u, class: ku(l.value) }, [
          I["container-start"],
          Te(r, { class: fg(v.wrapperClass) }, [
            I["wrapper-start"],
            E(A),
            I["wrapper-end"],
          ]),
          Tu(e) && [
            Te("div", { ref: C, class: "swiper-button-prev" }),
            Te("div", { ref: b, class: "swiper-button-next" }),
          ],
          Pu(e) && Te("div", { ref: g, class: "swiper-scrollbar" }),
          Cu(e) && Te("div", { ref: w, class: "swiper-pagination" }),
          I["container-end"],
        ])
      }
    },
  },
  yg = {
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
        r = V(null),
        l = V("swiper-slide"),
        a = V(!1)
      function o(d, f, h) {
        f === r.value && (l.value = h)
      }
      We(() => {
        !i || !i.value || (i.value.on("_slideClass", o), (s = !0))
      }),
        Hr(() => {
          s || !i || !i.value || (i.value.on("_slideClass", o), (s = !0))
        }),
        Gr(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            i.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"))
        }),
        Vr(() => {
          !i || !i.value || i.value.off("_slideClass", o)
        })
      const c = te(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0,
      }))
      bt("swiperSlide", c)
      const u = () => {
        a.value = !0
      }
      return () =>
        Te(
          e.tag,
          {
            class: ku(`${l.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && i && i.value && i.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: u,
          },
          e.zoom
            ? Te(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(c.value),
                  e.lazy &&
                    !a.value &&
                    Te("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(c.value),
                e.lazy &&
                  !a.value &&
                  Te("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function Iu(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let r = $t(e.el, `.${s[i]}`)[0]
          r || ((r = Zs("div", s[i])), (r.className = s[i]), e.el.append(r)),
            (n[i] = r),
            (t[i] = r)
        }
      }),
    n
  )
}
function wg(e) {
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
  function r(m) {
    let b
    return m &&
      typeof m == "string" &&
      t.isElement &&
      ((b = t.el.querySelector(m) || t.hostEl.querySelector(m)), b)
      ? b
      : (m &&
          (typeof m == "string" && (b = [...document.querySelectorAll(m)]),
          t.params.uniqueNavElements &&
          typeof m == "string" &&
          b &&
          b.length > 1 &&
          t.el.querySelectorAll(m).length === 1
            ? (b = t.el.querySelector(m))
            : b && b.length === 1 && (b = b[0])),
        m && !b ? m : b)
  }
  function l(m, b) {
    const C = t.params.navigation
    ;(m = De(m)),
      m.forEach((w) => {
        w &&
          (w.classList[b ? "add" : "remove"](...C.disabledClass.split(" ")),
          w.tagName === "BUTTON" && (w.disabled = b),
          t.params.watchOverflow &&
            t.enabled &&
            w.classList[t.isLocked ? "add" : "remove"](C.lockClass))
      })
  }
  function a() {
    const { nextEl: m, prevEl: b } = t.navigation
    if (t.params.loop) {
      l(b, !1), l(m, !1)
      return
    }
    l(b, t.isBeginning && !t.params.rewind), l(m, t.isEnd && !t.params.rewind)
  }
  function o(m) {
    m.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"))
  }
  function c(m) {
    m.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"))
  }
  function u() {
    const m = t.params.navigation
    if (
      ((t.params.navigation = Iu(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(m.nextEl || m.prevEl))
    )
      return
    let b = r(m.nextEl),
      C = r(m.prevEl)
    Object.assign(t.navigation, { nextEl: b, prevEl: C }),
      (b = De(b)),
      (C = De(C))
    const w = (g, v) => {
      g && g.addEventListener("click", v === "next" ? c : o),
        !t.enabled && g && g.classList.add(...m.lockClass.split(" "))
    }
    b.forEach((g) => w(g, "next")), C.forEach((g) => w(g, "prev"))
  }
  function d() {
    let { nextEl: m, prevEl: b } = t.navigation
    ;(m = De(m)), (b = De(b))
    const C = (w, g) => {
      w.removeEventListener("click", g === "next" ? c : o),
        w.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    m.forEach((w) => C(w, "next")), b.forEach((w) => C(w, "prev"))
  }
  s("init", () => {
    t.params.navigation.enabled === !1 ? h() : (u(), a())
  }),
    s("toEdge fromEdge lock unlock", () => {
      a()
    }),
    s("destroy", () => {
      d()
    }),
    s("enable disable", () => {
      let { nextEl: m, prevEl: b } = t.navigation
      if (((m = De(m)), (b = De(b)), t.enabled)) {
        a()
        return
      }
      ;[...m, ...b]
        .filter((C) => !!C)
        .forEach((C) => C.classList.add(t.params.navigation.lockClass))
    }),
    s("click", (m, b) => {
      let { nextEl: C, prevEl: w } = t.navigation
      ;(C = De(C)), (w = De(w))
      const g = b.target
      let v = w.includes(g) || C.includes(g)
      if (t.isElement && !v) {
        const x = b.path || (b.composedPath && b.composedPath())
        x && (v = x.find((T) => C.includes(T) || w.includes(T)))
      }
      if (t.params.navigation.hideOnClick && !v) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g || t.pagination.el.contains(g))
        )
          return
        let x
        C.length
          ? (x = C[0].classList.contains(t.params.navigation.hiddenClass))
          : w.length &&
            (x = w[0].classList.contains(t.params.navigation.hiddenClass)),
          i(x === !0 ? "navigationShow" : "navigationHide"),
          [...C, ...w]
            .filter((T) => !!T)
            .forEach((T) => T.classList.toggle(t.params.navigation.hiddenClass))
      }
    })
  const f = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        u(),
        a()
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
    update: a,
    init: u,
    destroy: d,
  })
}
function Yn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/()[\]])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function xg(e) {
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
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
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
  let l,
    a = 0
  function o() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function c(g, v) {
    const { bulletActiveClass: x } = t.params.pagination
    g &&
      ((g = g[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
      g &&
        (g.classList.add(`${x}-${v}`),
        (g = g[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        g && g.classList.add(`${x}-${v}-${v}`)))
  }
  function u(g, v, x) {
    if (((g = g % x), (v = v % x), v === g + 1)) return "next"
    if (v === g - 1) return "previous"
  }
  function d(g) {
    const v = g.target.closest(Yn(t.params.pagination.bulletClass))
    if (!v) return
    g.preventDefault()
    const x = Qs(v) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === x) return
      const T = u(t.realIndex, x, t.slides.length)
      T === "next"
        ? t.slideNext()
        : T === "previous"
          ? t.slidePrev()
          : t.slideToLoop(x)
    } else t.slideTo(x)
  }
  function f() {
    const g = t.rtl,
      v = t.params.pagination
    if (o()) return
    let x = t.pagination.el
    x = De(x)
    let T, O
    const E =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      A = t.params.loop
        ? Math.ceil(E / t.params.slidesPerGroup)
        : t.snapGrid.length
    if (
      (t.params.loop
        ? ((O = t.previousRealIndex || 0),
          (T =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((T = t.snapIndex), (O = t.previousSnapIndex))
          : ((O = t.previousIndex || 0), (T = t.activeIndex || 0)),
      v.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const I = t.pagination.bullets
      let M, L, D
      if (
        (v.dynamicBullets &&
          ((l = Cr(I[0], t.isHorizontal() ? "width" : "height")),
          x.forEach((W) => {
            W.style[t.isHorizontal() ? "width" : "height"] =
              `${l * (v.dynamicMainBullets + 4)}px`
          }),
          v.dynamicMainBullets > 1 &&
            O !== void 0 &&
            ((a += T - (O || 0)),
            a > v.dynamicMainBullets - 1
              ? (a = v.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (M = Math.max(T - a, 0)),
          (L = M + (Math.min(I.length, v.dynamicMainBullets) - 1)),
          (D = (L + M) / 2)),
        I.forEach((W) => {
          const ue = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (fe) => `${v.bulletActiveClass}${fe}`,
            ),
          ]
            .map((fe) =>
              typeof fe == "string" && fe.includes(" ") ? fe.split(" ") : fe,
            )
            .flat()
          W.classList.remove(...ue)
        }),
        x.length > 1)
      )
        I.forEach((W) => {
          const ue = Qs(W)
          ue === T
            ? W.classList.add(...v.bulletActiveClass.split(" "))
            : t.isElement && W.setAttribute("part", "bullet"),
            v.dynamicBullets &&
              (ue >= M &&
                ue <= L &&
                W.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
              ue === M && c(W, "prev"),
              ue === L && c(W, "next"))
        })
      else {
        const W = I[T]
        if (
          (W && W.classList.add(...v.bulletActiveClass.split(" ")),
          t.isElement &&
            I.forEach((ue, fe) => {
              ue.setAttribute("part", fe === T ? "bullet-active" : "bullet")
            }),
          v.dynamicBullets)
        ) {
          const ue = I[M],
            fe = I[L]
          for (let $ = M; $ <= L; $ += 1)
            I[$] &&
              I[$].classList.add(...`${v.bulletActiveClass}-main`.split(" "))
          c(ue, "prev"), c(fe, "next")
        }
      }
      if (v.dynamicBullets) {
        const W = Math.min(I.length, v.dynamicMainBullets + 4),
          ue = (l * W - l) / 2 - D * l,
          fe = g ? "right" : "left"
        I.forEach(($) => {
          $.style[t.isHorizontal() ? fe : "top"] = `${ue}px`
        })
      }
    }
    x.forEach((I, M) => {
      if (
        (v.type === "fraction" &&
          (I.querySelectorAll(Yn(v.currentClass)).forEach((L) => {
            L.textContent = v.formatFractionCurrent(T + 1)
          }),
          I.querySelectorAll(Yn(v.totalClass)).forEach((L) => {
            L.textContent = v.formatFractionTotal(A)
          })),
        v.type === "progressbar")
      ) {
        let L
        v.progressbarOpposite
          ? (L = t.isHorizontal() ? "vertical" : "horizontal")
          : (L = t.isHorizontal() ? "horizontal" : "vertical")
        const D = (T + 1) / A
        let W = 1,
          ue = 1
        L === "horizontal" ? (W = D) : (ue = D),
          I.querySelectorAll(Yn(v.progressbarFillClass)).forEach((fe) => {
            ;(fe.style.transform = `translate3d(0,0,0) scaleX(${W}) scaleY(${ue})`),
              (fe.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      v.type === "custom" && v.renderCustom
        ? (ei(I, v.renderCustom(t, T + 1, A)),
          M === 0 && i("paginationRender", I))
        : (M === 0 && i("paginationRender", I), i("paginationUpdate", I)),
        t.params.watchOverflow &&
          t.enabled &&
          I.classList[t.isLocked ? "add" : "remove"](v.lockClass)
    })
  }
  function h() {
    const g = t.params.pagination
    if (o()) return
    const v =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length
    let x = t.pagination.el
    x = De(x)
    let T = ""
    if (g.type === "bullets") {
      let O = t.params.loop
        ? Math.ceil(v / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && O > v && (O = v)
      for (let E = 0; E < O; E += 1)
        g.renderBullet
          ? (T += g.renderBullet.call(t, E, g.bulletClass))
          : (T += `<${g.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`)
    }
    g.type === "fraction" &&
      (g.renderFraction
        ? (T = g.renderFraction.call(t, g.currentClass, g.totalClass))
        : (T = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`)),
      g.type === "progressbar" &&
        (g.renderProgressbar
          ? (T = g.renderProgressbar.call(t, g.progressbarFillClass))
          : (T = `<span class="${g.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      x.forEach((O) => {
        g.type !== "custom" && ei(O, T || ""),
          g.type === "bullets" &&
            t.pagination.bullets.push(...O.querySelectorAll(Yn(g.bulletClass)))
      }),
      g.type !== "custom" && i("paginationRender", x[0])
  }
  function m() {
    t.params.pagination = Iu(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    )
    const g = t.params.pagination
    if (!g.el) return
    let v
    typeof g.el == "string" && t.isElement && (v = t.el.querySelector(g.el)),
      !v &&
        typeof g.el == "string" &&
        (v = [...document.querySelectorAll(g.el)]),
      v || (v = g.el),
      !(!v || v.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof g.el == "string" &&
          Array.isArray(v) &&
          v.length > 1 &&
          ((v = [...t.el.querySelectorAll(g.el)]),
          v.length > 1 && (v = v.find((x) => bu(x, ".swiper")[0] === t.el))),
        Array.isArray(v) && v.length === 1 && (v = v[0]),
        Object.assign(t.pagination, { el: v }),
        (v = De(v)),
        v.forEach((x) => {
          g.type === "bullets" &&
            g.clickable &&
            x.classList.add(...(g.clickableClass || "").split(" ")),
            x.classList.add(g.modifierClass + g.type),
            x.classList.add(
              t.isHorizontal() ? g.horizontalClass : g.verticalClass,
            ),
            g.type === "bullets" &&
              g.dynamicBullets &&
              (x.classList.add(`${g.modifierClass}${g.type}-dynamic`),
              (a = 0),
              g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)),
            g.type === "progressbar" &&
              g.progressbarOpposite &&
              x.classList.add(g.progressbarOppositeClass),
            g.clickable && x.addEventListener("click", d),
            t.enabled || x.classList.add(g.lockClass)
        }))
  }
  function b() {
    const g = t.params.pagination
    if (o()) return
    let v = t.pagination.el
    v &&
      ((v = De(v)),
      v.forEach((x) => {
        x.classList.remove(g.hiddenClass),
          x.classList.remove(g.modifierClass + g.type),
          x.classList.remove(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass,
          ),
          g.clickable &&
            (x.classList.remove(...(g.clickableClass || "").split(" ")),
            x.removeEventListener("click", d))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((x) =>
          x.classList.remove(...g.bulletActiveClass.split(" ")),
        )
  }
  s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const g = t.params.pagination
    let { el: v } = t.pagination
    ;(v = De(v)),
      v.forEach((x) => {
        x.classList.remove(g.horizontalClass, g.verticalClass),
          x.classList.add(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass,
          )
      })
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? w() : (m(), h(), f())
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
      b()
    }),
    s("enable disable", () => {
      let { el: g } = t.pagination
      g &&
        ((g = De(g)),
        g.forEach((v) =>
          v.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ))
    }),
    s("lock unlock", () => {
      f()
    }),
    s("click", (g, v) => {
      const x = v.target,
        T = De(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        T &&
        T.length > 0 &&
        !x.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && x === t.navigation.nextEl) ||
            (t.navigation.prevEl && x === t.navigation.prevEl))
        )
          return
        const O = T[0].classList.contains(t.params.pagination.hiddenClass)
        i(O === !0 ? "paginationShow" : "paginationHide"),
          T.forEach((E) => E.classList.toggle(t.params.pagination.hiddenClass))
      }
    })
  const C = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: g } = t.pagination
      g &&
        ((g = De(g)),
        g.forEach((v) =>
          v.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        m(),
        h(),
        f()
    },
    w = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: g } = t.pagination
      g &&
        ((g = De(g)),
        g.forEach((v) =>
          v.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        b()
    }
  Object.assign(t.pagination, {
    enable: C,
    disable: w,
    render: h,
    update: f,
    init: m,
    destroy: b,
  })
}
function Sg(e) {
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
  let l,
    a,
    o = r && r.autoplay ? r.autoplay.delay : 3e3,
    c = r && r.autoplay ? r.autoplay.delay : 3e3,
    u,
    d = new Date().getTime(),
    f,
    h,
    m,
    b,
    C,
    w,
    g
  function v(_) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (_.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", v),
        !(g || (_.detail && _.detail.bySwiperTouchMove)) && M()))
  }
  const x = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (f = !0) : f && ((c = u), (f = !1))
      const _ = t.autoplay.paused ? u : d + c - new Date().getTime()
      ;(t.autoplay.timeLeft = _),
        i("autoplayTimeLeft", _, _ / o),
        (a = requestAnimationFrame(() => {
          x()
        }))
    },
    T = () => {
      let _
      return (
        t.virtual && t.params.virtual.enabled
          ? (_ = t.slides.find((he) =>
              he.classList.contains("swiper-slide-active"),
            ))
          : (_ = t.slides[t.activeIndex]),
        _ ? parseInt(_.getAttribute("data-swiper-autoplay"), 10) : void 0
      )
    },
    O = (_) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(a), x()
      let ve = typeof _ > "u" ? t.params.autoplay.delay : _
      ;(o = t.params.autoplay.delay), (c = t.params.autoplay.delay)
      const he = T()
      !Number.isNaN(he) &&
        he > 0 &&
        typeof _ > "u" &&
        ((ve = he), (o = he), (c = he)),
        (u = ve)
      const $e = t.params.speed,
        Le = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev($e, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, $e, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext($e, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, $e, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                O()
              })))
        }
      return (
        ve > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              Le()
            }, ve)))
          : requestAnimationFrame(() => {
              Le()
            }),
        ve
      )
    },
    E = () => {
      ;(d = new Date().getTime()),
        (t.autoplay.running = !0),
        O(),
        i("autoplayStart")
    },
    A = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(a),
        i("autoplayStop")
    },
    I = (_, ve) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(l), _ || (w = !0)
      const he = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", v)
            : M()
      }
      if (((t.autoplay.paused = !0), ve)) {
        C && (u = t.params.autoplay.delay), (C = !1), he()
        return
      }
      ;(u = (u || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && u < 0 && !t.params.loop) && (u < 0 && (u = 0), he())
    },
    M = () => {
      ;(t.isEnd && u < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        w ? ((w = !1), O(u)) : O(),
        (t.autoplay.paused = !1),
        i("autoplayResume"))
    },
    L = () => {
      if (t.destroyed || !t.autoplay.running) return
      const _ = _t()
      _.visibilityState === "hidden" && ((w = !0), I(!0)),
        _.visibilityState === "visible" && M()
    },
    D = (_) => {
      _.pointerType === "mouse" &&
        ((w = !0), (g = !0), !(t.animating || t.autoplay.paused) && I(!0))
    },
    W = (_) => {
      _.pointerType === "mouse" && ((g = !1), t.autoplay.paused && M())
    },
    ue = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", D),
        t.el.addEventListener("pointerleave", W))
    },
    fe = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", D),
        t.el.removeEventListener("pointerleave", W))
    },
    $ = () => {
      _t().addEventListener("visibilitychange", L)
    },
    R = () => {
      _t().removeEventListener("visibilitychange", L)
    }
  s("init", () => {
    t.params.autoplay.enabled && (ue(), $(), E())
  }),
    s("destroy", () => {
      fe(), R(), t.autoplay.running && A()
    }),
    s("_freeModeStaticRelease", () => {
      ;(m || w) && M()
    }),
    s("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? A() : I(!0, !0)
    }),
    s("beforeTransitionStart", (_, ve, he) => {
      t.destroyed ||
        !t.autoplay.running ||
        (he || !t.params.autoplay.disableOnInteraction ? I(!0, !0) : A())
    }),
    s("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          A()
          return
        }
        ;(h = !0),
          (m = !1),
          (w = !1),
          (b = setTimeout(() => {
            ;(w = !0), (m = !0), I(!0)
          }, 200))
      }
    }),
    s("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !h)) {
        if (
          (clearTimeout(b),
          clearTimeout(l),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(m = !1), (h = !1)
          return
        }
        m && t.params.cssMode && M(), (m = !1), (h = !1)
      }
    }),
    s("slideChange", () => {
      t.destroyed || !t.autoplay.running || (C = !0)
    }),
    Object.assign(t.autoplay, { start: E, stop: A, pause: I, resume: M })
}
const Eg = { class: "prose text-center" },
  Tg = { href: "/pricing" },
  Cg = { id: "cta" },
  xs = {
    __name: "ctaForm",
    props: { brightness: Number },
    setup(e) {
      const t = (i) => {
          if (i >= 4) return "text-slate-800"
          if (i == 3) return "text-slate-200"
          if (i == 2) return "text-slate-300"
          if (i == 1) return "text-slate-300"
        },
        n = (i) => {
          if (i >= 4) return "text-emerald-500"
          if (i == 3) return "text-slate-800"
          if (i == 2) return "text-orange-500"
          if (i == 1) return "text-orange-400"
        },
        s = async (i) => {
          i.preventDefault()
          const r = "contact"
          let l = document.getElementsByName("name")[0].value,
            a = document.getElementsByName("email")[0].value,
            o = document.getElementsByName("message")[0].value,
            c = window.location.href,
            u = new XMLHttpRequest()
          u.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            u.setRequestHeader("Content-Type", "application/json"),
            u.send(
              JSON.stringify({
                form: r,
                name: l,
                email: a,
                message: o,
                referrer: c,
              }),
            ),
            (u.onloadend = function () {
              if (
                (console.log(
                  `Status: ${u.status}, Response: ${u.responseText}`,
                ),
                u.status == 200)
              ) {
                let d = document.getElementById("cta"),
                  f = document.createElement("div")
                f.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (f.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  d.appendChild(f)
                let h = d.getElementsByTagName("input")
                for (let C = 0; C < h.length; C++) h[C].style.display = "none"
                let m = d.getElementsByTagName("textarea")[0]
                m.style.display = "none"
                let b = document.getElementById("submitButton")
                b.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (i, r) => (
        H(),
        se(
          "div",
          {
            class: P([
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
            p("div", Eg, [
              p(
                "h4",
                { class: P(["text-2xl", t(e.brightness)]) },
                [
                  ...(r[0] ||
                    (r[0] = [
                      pe(" Piqued your interest?", -1),
                      p("br", null, null, -1),
                      pe(
                        " Check out the (incredibly simple) service pricing: ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              p("a", Tg, [
                p(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    "aria-": "",
                    class: P([
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
              p(
                "h4",
                { class: P(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              p("form", Cg, [
                p("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: P(["rounded p-2 w-full", n]),
                }),
                p("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: P(["rounded p-2 w-full mt-3", n]),
                }),
                p("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: P(["rounded p-2 w-full mt-3", n]),
                }),
                p(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
                    onClick: s,
                    class: P([
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
  Pg = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  kg = ["href"],
  Ig = { class: "hidden md:hidden lg:block" },
  Mg = ["href"],
  Og = ["src", "alt"],
  Ag = ["src", "alt"],
  $g = { class: "block md:block lg:hidden py-6" },
  Lg = { class: "grid grid-cols-2 gap-4" },
  _g = ["src", "alt"],
  Bg = { class: "flex justify-center pt-6" },
  jg = {
    __name: "sliderAndGallery",
    props: {
      brightness: Number,
      images: Array,
      captions: Array,
      link: String,
      title: String,
    },
    setup(e) {
      const t = V([]),
        n = [Sg, xg, wg],
        s = e,
        i = V(""),
        r = V(""),
        l = V([]),
        a = (u) => {
          if (u >= 4) return "text-slate-800"
          if (u == 3) return "text-slate-200"
          if (u == 2) return "text-slate-300"
          if (u == 1) return "text-slate-300"
        },
        o = () => {
          const u = document.getElementById("lightbox"),
            d = document.getElementById("lightbox-img"),
            f = document.getElementById("lightbox-close"),
            h = document.querySelectorAll(".lightbox"),
            m = document.getElementById("lightbox-caption")
          h.forEach((b) => {
            b.addEventListener("click", () => {
              ;(d.src = b.src),
                (m.textContent = b.alt),
                u.classList.remove("hidden")
            })
          }),
            f.addEventListener("click", () => {
              u.classList.add("hidden")
            })
        }
      We(() => {
        ;(t.value = s.captions),
          (i.value = s.link),
          (r.value = s.title),
          (l.value = s.images),
          ci(() => {
            o()
          })
      })
      const c = (u) => {
        let d = i.value == "" ? "text-center w-full " : ""
        return (d = d + a(u)), d
      }
      return (u, d) => (
        H(),
        se(
          "div",
          {
            class: P([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              i.value == "",
            ]),
          },
          [
            p("div", Pg, [
              p(
                "h2",
                {
                  class: P([
                    "text-5xl text-center text-semibold",
                    c(s.brightness),
                  ]),
                },
                Je(r.value),
                3,
              ),
              i.value != ""
                ? (H(),
                  se(
                    "a",
                    { key: 0, href: i.value },
                    [
                      p(
                        "button",
                        {
                          class: P([
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
                    kg,
                  ))
                : _e("", !0),
            ]),
            p("div", Ig, [
              Z(
                ne(vg),
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
                  default: we(() => [
                    (H(!0),
                    se(
                      Pe,
                      null,
                      Wt(
                        l.value,
                        (f, h) => (
                          H(),
                          be(
                            ne(yg),
                            { class: "image-container", key: h },
                            {
                              default: we(() => [
                                i.value != ""
                                  ? (H(),
                                    se(
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
                                          Og,
                                        ),
                                      ],
                                      8,
                                      Mg,
                                    ))
                                  : _e("", !0),
                                i.value == ""
                                  ? (H(),
                                    se(
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
                                      Ag,
                                    ))
                                  : _e("", !0),
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
              (d[0] = jd(
                '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-4d27a375><div class="bg-white p-5 rounded shadow-lg" data-v-4d27a375><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-4d27a375><div class="flex justify-center" data-v-4d27a375><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-4d27a375></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-4d27a375> × </button></div></div>',
                1,
              )),
            p("div", $g, [
              p("div", Lg, [
                (H(!0),
                se(
                  Pe,
                  null,
                  Wt(
                    l.value,
                    (f, h) => (
                      H(),
                      se("div", { class: "image-container", key: h }, [
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
                          _g,
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
              { class: P([c(s.brightness), "prose pt-6"]) },
              [rt(u.$slots, "default", {}, void 0, !0)],
              2,
            ),
            p(
              "hr",
              {
                class: P([
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
            p("div", Bg, [
              Z(xs, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  pt = Zt(jg, [["__scopeId", "data-v-4d27a375"]]),
  sl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  il =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  rl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  ll =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  al =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  ol =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  ul =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  cl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  dl =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  fl =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  Rg =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  Ng =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  zg =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  Dg =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  Fg =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898383454.webp",
  Hg =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  Gg =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  Vg =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  Wg = "",
  qg = "",
  Ug = { class: "px-3 text-center" },
  Kg = { class: "text-right italic text-sm mb-0 pb-0" },
  Yg = "",
  Xg = "Web Design",
  Jg = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (i) => {
          if (i >= 4) return "text-slate-800"
          if (i == 3) return "text-slate-200"
          if (i == 2) return "text-slate-300"
          if (i == 1) return "text-slate-300"
        },
        n = V([sl, ol, dl, ll, rl, cl, ul, al, il, fl]),
        s = V([
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
        H(),
        be(
          pt,
          {
            images: n.value,
            captions: s.value,
            link: Yg,
            title: Xg,
            brightness: e.brightness,
          },
          {
            default: we(() => [
              rt(i.$slots, "default", {}, () => [
                p(
                  "h2",
                  { class: P(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. I'll design yours too! ",
                  2,
                ),
                p("div", Ug, [
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
                      class: P([
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
                      p("p", Kg, [
                        p("b", null, [
                          p(
                            "a",
                            {
                              class: P([t(e.brightness), "font-bold"]),
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
  Zg = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  Qg = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  em = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  tm = { href: "https://galaxyit.com/savings-calculator/" },
  nm = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  sm = { href: "https://www.buildonyourlandllc.com/" },
  im = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  rm = { href: "https://bazaar.blendernation.com" },
  lm = {
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
        H(),
        se("div", Zg, [
          p("div", Qg, [
            p(
              "h2",
              { class: P(["text-3xl mb-1", t(e.brightness)]) },
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
            p("div", em, [
              p(
                "h3",
                { class: P(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT ",
                2,
              ),
              p("a", tm, [
                p(
                  "button",
                  {
                    class: P([
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
              { class: P(["text-3xl mb-1", t(e.brightness)]) },
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
            p("div", nm, [
              p(
                "h3",
                { class: P(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that ",
                2,
              ),
              p("a", sm, [
                p(
                  "button",
                  {
                    class: P([
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
              { class: P(["text-3xl mb-1", t(e.brightness)]) },
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
            p("div", im, [
              p(
                "h3",
                { class: P(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              p("a", rm, [
                p(
                  "button",
                  {
                    class: P([
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
              { class: P(["text-5xl mb-1", t(e.brightness)]) },
              " No matter how complex your problem may be, I can fix it. ",
              2,
            ),
            p(
              "p",
              { class: P([t(e.brightness), "mt-2"]) },
              " I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff distracting you from your business. I'll take your problems off your plate and develop a solution. ",
              2,
            ),
          ]),
          p("hr", { class: P([t(e.brightness), "my-8"]) }, null, 2),
          Z(xs, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  am = Zt(lm, [["__scopeId", "data-v-c1141d27"]]),
  jn = (e, t = 0, n = 1) => hl(gl(t, e), n),
  pl = (e) => {
    ;(e._clipped = !1), (e._unclipped = e.slice(0))
    for (let t = 0; t <= 3; t++)
      t < 3
        ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0),
          (e[t] = jn(e[t], 0, 255)))
        : t === 3 && (e[t] = jn(e[t], 0, 1))
    return e
  },
  Mu = {}
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
  Mu[`[object ${e}]`] = e.toLowerCase()
function ge(e) {
  return Mu[Object.prototype.toString.call(e)] || "object"
}
const me = (e, t = null) =>
    e.length >= 3
      ? Array.prototype.slice.call(e)
      : ge(e[0]) == "object" && t
        ? t
            .split("")
            .filter((n) => e[0][n] !== void 0)
            .map((n) => e[0][n])
        : e[0],
  yi = (e) => {
    if (e.length < 2) return null
    const t = e.length - 1
    return ge(e[t]) == "string" ? e[t].toLowerCase() : null
  },
  { PI: wi, min: hl, max: gl } = Math,
  Ft = wi * 2,
  qi = wi / 3,
  om = wi / 180,
  um = 180 / wi,
  ce = { format: {}, autodetect: [] }
class G {
  constructor(...t) {
    const n = this
    if (
      ge(t[0]) === "object" &&
      t[0].constructor &&
      t[0].constructor === this.constructor
    )
      return t[0]
    let s = yi(t),
      i = !1
    if (!s) {
      ;(i = !0),
        ce.sorted ||
          ((ce.autodetect = ce.autodetect.sort((r, l) => l.p - r.p)),
          (ce.sorted = !0))
      for (let r of ce.autodetect) if (((s = r.test(...t)), s)) break
    }
    if (ce.format[s]) {
      const r = ce.format[s].apply(null, i ? t : t.slice(0, -1))
      n._rgb = pl(r)
    } else throw new Error("unknown format: " + t)
    n._rgb.length === 3 && n._rgb.push(1)
  }
  toString() {
    return ge(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`
  }
}
const cm = "2.6.0",
  le = (...e) => new le.Color(...e)
le.Color = G
le.version = cm
const dm = (...e) => {
    e = me(e, "cmyk")
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
  { max: Pa } = Math,
  fm = (...e) => {
    let [t, n, s] = me(e, "rgb")
    ;(t = t / 255), (n = n / 255), (s = s / 255)
    const i = 1 - Pa(t, Pa(n, s)),
      r = i < 1 ? 1 / (1 - i) : 0,
      l = (1 - t - i) * r,
      a = (1 - n - i) * r,
      o = (1 - s - i) * r
    return [l, a, o, i]
  }
G.prototype.cmyk = function () {
  return fm(this._rgb)
}
le.cmyk = (...e) => new G(...e, "cmyk")
ce.format.cmyk = dm
ce.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = me(e, "cmyk")), ge(e) === "array" && e.length === 4))
      return "cmyk"
  },
})
const Ui = (e) => Math.round(e * 100) / 100,
  pm = (...e) => {
    const t = me(e, "hsla")
    let n = yi(e) || "lsa"
    return (
      (t[0] = Ui(t[0] || 0)),
      (t[1] = Ui(t[1] * 100) + "%"),
      (t[2] = Ui(t[2] * 100) + "%"),
      n === "hsla" || (t.length > 3 && t[3] < 1)
        ? ((t[3] = t.length > 3 ? t[3] : 1), (n = "hsla"))
        : (t.length = 3),
      `${n}(${t.join(",")})`
    )
  },
  Ou = (...e) => {
    e = me(e, "rgba")
    let [t, n, s] = e
    ;(t /= 255), (n /= 255), (s /= 255)
    const i = hl(t, n, s),
      r = gl(t, n, s),
      l = (r + i) / 2
    let a, o
    return (
      r === i
        ? ((a = 0), (o = Number.NaN))
        : (a = l < 0.5 ? (r - i) / (r + i) : (r - i) / (2 - r - i)),
      t == r
        ? (o = (n - s) / (r - i))
        : n == r
          ? (o = 2 + (s - t) / (r - i))
          : s == r && (o = 4 + (t - n) / (r - i)),
      (o *= 60),
      o < 0 && (o += 360),
      e.length > 3 && e[3] !== void 0 ? [o, a, l, e[3]] : [o, a, l]
    )
  },
  { round: Ki } = Math,
  hm = (...e) => {
    const t = me(e, "rgba")
    let n = yi(e) || "rgb"
    return n.substr(0, 3) == "hsl"
      ? pm(Ou(t), n)
      : ((t[0] = Ki(t[0])),
        (t[1] = Ki(t[1])),
        (t[2] = Ki(t[2])),
        (n === "rgba" || (t.length > 3 && t[3] < 1)) &&
          ((t[3] = t.length > 3 ? t[3] : 1), (n = "rgba")),
        `${n}(${t.slice(0, n === "rgb" ? 3 : 4).join(",")})`)
  },
  { round: Yi } = Math,
  Ir = (...e) => {
    e = me(e, "hsl")
    const [t, n, s] = e
    let i, r, l
    if (n === 0) i = r = l = s * 255
    else {
      const a = [0, 0, 0],
        o = [0, 0, 0],
        c = s < 0.5 ? s * (1 + n) : s + n - s * n,
        u = 2 * s - c,
        d = t / 360
      ;(a[0] = d + 1 / 3), (a[1] = d), (a[2] = d - 1 / 3)
      for (let f = 0; f < 3; f++)
        a[f] < 0 && (a[f] += 1),
          a[f] > 1 && (a[f] -= 1),
          6 * a[f] < 1
            ? (o[f] = u + (c - u) * 6 * a[f])
            : 2 * a[f] < 1
              ? (o[f] = c)
              : 3 * a[f] < 2
                ? (o[f] = u + (c - u) * (2 / 3 - a[f]) * 6)
                : (o[f] = u)
      ;[i, r, l] = [Yi(o[0] * 255), Yi(o[1] * 255), Yi(o[2] * 255)]
    }
    return e.length > 3 ? [i, r, l, e[3]] : [i, r, l, 1]
  },
  Au = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
  $u = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
  Lu =
    /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  _u =
    /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  Bu =
    /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  ju =
    /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  { round: ka } = Math,
  ml = (e) => {
    e = e.toLowerCase().trim()
    let t
    if (ce.format.named)
      try {
        return ce.format.named(e)
      } catch {}
    if ((t = e.match(Au))) {
      const n = t.slice(1, 4)
      for (let s = 0; s < 3; s++) n[s] = +n[s]
      return (n[3] = 1), n
    }
    if ((t = e.match($u))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 4; s++) n[s] = +n[s]
      return n
    }
    if ((t = e.match(Lu))) {
      const n = t.slice(1, 4)
      for (let s = 0; s < 3; s++) n[s] = ka(n[s] * 2.55)
      return (n[3] = 1), n
    }
    if ((t = e.match(_u))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 3; s++) n[s] = ka(n[s] * 2.55)
      return (n[3] = +n[3]), n
    }
    if ((t = e.match(Bu))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Ir(n)
      return (s[3] = 1), s
    }
    if ((t = e.match(ju))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Ir(n)
      return (s[3] = +t[4]), s
    }
  }
ml.test = (e) =>
  Au.test(e) ||
  $u.test(e) ||
  Lu.test(e) ||
  _u.test(e) ||
  Bu.test(e) ||
  ju.test(e)
G.prototype.css = function (e) {
  return hm(this._rgb, e)
}
le.css = (...e) => new G(...e, "css")
ce.format.css = ml
ce.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ge(e) === "string" && ml.test(e)) return "css"
  },
})
ce.format.gl = (...e) => {
  const t = me(e, "rgba")
  return (t[0] *= 255), (t[1] *= 255), (t[2] *= 255), t
}
le.gl = (...e) => new G(...e, "gl")
G.prototype.gl = function () {
  const e = this._rgb
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
}
const { floor: gm } = Math,
  mm = (...e) => {
    e = me(e, "hcg")
    let [t, n, s] = e,
      i,
      r,
      l
    s = s * 255
    const a = n * 255
    if (n === 0) i = r = l = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const o = gm(t),
        c = t - o,
        u = s * (1 - n),
        d = u + a * (1 - c),
        f = u + a * c,
        h = u + a
      switch (o) {
        case 0:
          ;[i, r, l] = [h, f, u]
          break
        case 1:
          ;[i, r, l] = [d, h, u]
          break
        case 2:
          ;[i, r, l] = [u, h, f]
          break
        case 3:
          ;[i, r, l] = [u, d, h]
          break
        case 4:
          ;[i, r, l] = [f, u, h]
          break
        case 5:
          ;[i, r, l] = [h, u, d]
          break
      }
    }
    return [i, r, l, e.length > 3 ? e[3] : 1]
  },
  bm = (...e) => {
    const [t, n, s] = me(e, "rgb"),
      i = hl(t, n, s),
      r = gl(t, n, s),
      l = r - i,
      a = (l * 100) / 255,
      o = (i / (255 - l)) * 100
    let c
    return (
      l === 0
        ? (c = Number.NaN)
        : (t === r && (c = (n - s) / l),
          n === r && (c = 2 + (s - t) / l),
          s === r && (c = 4 + (t - n) / l),
          (c *= 60),
          c < 0 && (c += 360)),
      [c, a, o]
    )
  }
G.prototype.hcg = function () {
  return bm(this._rgb)
}
le.hcg = (...e) => new G(...e, "hcg")
ce.format.hcg = mm
ce.autodetect.push({
  p: 1,
  test: (...e) => {
    if (((e = me(e, "hcg")), ge(e) === "array" && e.length === 3)) return "hcg"
  },
})
const vm = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  ym = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
  Ru = (e) => {
    if (e.match(vm)) {
      ;(e.length === 4 || e.length === 7) && (e = e.substr(1)),
        e.length === 3 &&
          ((e = e.split("")), (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]))
      const t = parseInt(e, 16),
        n = t >> 16,
        s = (t >> 8) & 255,
        i = t & 255
      return [n, s, i, 1]
    }
    if (e.match(ym)) {
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
  { round: Ms } = Math,
  Nu = (...e) => {
    let [t, n, s, i] = me(e, "rgba"),
      r = yi(e) || "auto"
    i === void 0 && (i = 1),
      r === "auto" && (r = i < 1 ? "rgba" : "rgb"),
      (t = Ms(t)),
      (n = Ms(n)),
      (s = Ms(s))
    let a = "000000" + ((t << 16) | (n << 8) | s).toString(16)
    a = a.substr(a.length - 6)
    let o = "0" + Ms(i * 255).toString(16)
    switch (((o = o.substr(o.length - 2)), r.toLowerCase())) {
      case "rgba":
        return `#${a}${o}`
      case "argb":
        return `#${o}${a}`
      default:
        return `#${a}`
    }
  }
G.prototype.hex = function (e) {
  return Nu(this._rgb, e)
}
le.hex = (...e) => new G(...e, "hex")
ce.format.hex = Ru
ce.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (
      !t.length &&
      ge(e) === "string" &&
      [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
    )
      return "hex"
  },
})
const { cos: En } = Math,
  wm = (...e) => {
    e = me(e, "hsi")
    let [t, n, s] = e,
      i,
      r,
      l
    return (
      isNaN(t) && (t = 0),
      isNaN(n) && (n = 0),
      t > 360 && (t -= 360),
      t < 0 && (t += 360),
      (t /= 360),
      t < 1 / 3
        ? ((l = (1 - n) / 3),
          (i = (1 + (n * En(Ft * t)) / En(qi - Ft * t)) / 3),
          (r = 1 - (l + i)))
        : t < 2 / 3
          ? ((t -= 1 / 3),
            (i = (1 - n) / 3),
            (r = (1 + (n * En(Ft * t)) / En(qi - Ft * t)) / 3),
            (l = 1 - (i + r)))
          : ((t -= 2 / 3),
            (r = (1 - n) / 3),
            (l = (1 + (n * En(Ft * t)) / En(qi - Ft * t)) / 3),
            (i = 1 - (r + l))),
      (i = jn(s * i * 3)),
      (r = jn(s * r * 3)),
      (l = jn(s * l * 3)),
      [i * 255, r * 255, l * 255, e.length > 3 ? e[3] : 1]
    )
  },
  { min: xm, sqrt: Sm, acos: Em } = Math,
  Tm = (...e) => {
    let [t, n, s] = me(e, "rgb")
    ;(t /= 255), (n /= 255), (s /= 255)
    let i
    const r = xm(t, n, s),
      l = (t + n + s) / 3,
      a = l > 0 ? 1 - r / l : 0
    return (
      a === 0
        ? (i = NaN)
        : ((i = (t - n + (t - s)) / 2),
          (i /= Sm((t - n) * (t - n) + (t - s) * (n - s))),
          (i = Em(i)),
          s > n && (i = Ft - i),
          (i /= Ft)),
      [i * 360, a, l]
    )
  }
G.prototype.hsi = function () {
  return Tm(this._rgb)
}
le.hsi = (...e) => new G(...e, "hsi")
ce.format.hsi = wm
ce.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = me(e, "hsi")), ge(e) === "array" && e.length === 3)) return "hsi"
  },
})
G.prototype.hsl = function () {
  return Ou(this._rgb)
}
le.hsl = (...e) => new G(...e, "hsl")
ce.format.hsl = Ir
ce.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = me(e, "hsl")), ge(e) === "array" && e.length === 3)) return "hsl"
  },
})
const { floor: Cm } = Math,
  Pm = (...e) => {
    e = me(e, "hsv")
    let [t, n, s] = e,
      i,
      r,
      l
    if (((s *= 255), n === 0)) i = r = l = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const a = Cm(t),
        o = t - a,
        c = s * (1 - n),
        u = s * (1 - n * o),
        d = s * (1 - n * (1 - o))
      switch (a) {
        case 0:
          ;[i, r, l] = [s, d, c]
          break
        case 1:
          ;[i, r, l] = [u, s, c]
          break
        case 2:
          ;[i, r, l] = [c, s, d]
          break
        case 3:
          ;[i, r, l] = [c, u, s]
          break
        case 4:
          ;[i, r, l] = [d, c, s]
          break
        case 5:
          ;[i, r, l] = [s, c, u]
          break
      }
    }
    return [i, r, l, e.length > 3 ? e[3] : 1]
  },
  { min: km, max: Im } = Math,
  Mm = (...e) => {
    e = me(e, "rgb")
    let [t, n, s] = e
    const i = km(t, n, s),
      r = Im(t, n, s),
      l = r - i
    let a, o, c
    return (
      (c = r / 255),
      r === 0
        ? ((a = Number.NaN), (o = 0))
        : ((o = l / r),
          t === r && (a = (n - s) / l),
          n === r && (a = 2 + (s - t) / l),
          s === r && (a = 4 + (t - n) / l),
          (a *= 60),
          a < 0 && (a += 360)),
      [a, o, c]
    )
  }
G.prototype.hsv = function () {
  return Mm(this._rgb)
}
le.hsv = (...e) => new G(...e, "hsv")
ce.format.hsv = Pm
ce.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = me(e, "hsv")), ge(e) === "array" && e.length === 3)) return "hsv"
  },
})
const it = {
    Kn: 18,
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452,
  },
  { pow: Om } = Math,
  zu = (...e) => {
    e = me(e, "lab")
    const [t, n, s] = e
    let i, r, l, a, o, c
    return (
      (r = (t + 16) / 116),
      (i = isNaN(n) ? r : r + n / 500),
      (l = isNaN(s) ? r : r - s / 200),
      (r = it.Yn * Ji(r)),
      (i = it.Xn * Ji(i)),
      (l = it.Zn * Ji(l)),
      (a = Xi(3.2404542 * i - 1.5371385 * r - 0.4985314 * l)),
      (o = Xi(-0.969266 * i + 1.8760108 * r + 0.041556 * l)),
      (c = Xi(0.0556434 * i - 0.2040259 * r + 1.0572252 * l)),
      [a, o, c, e.length > 3 ? e[3] : 1]
    )
  },
  Xi = (e) => 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * Om(e, 1 / 2.4) - 0.055),
  Ji = (e) => (e > it.t1 ? e * e * e : it.t2 * (e - it.t0)),
  { pow: Du } = Math,
  Fu = (...e) => {
    const [t, n, s] = me(e, "rgb"),
      [i, r, l] = Am(t, n, s),
      a = 116 * r - 16
    return [a < 0 ? 0 : a, 500 * (i - r), 200 * (r - l)]
  },
  Zi = (e) =>
    (e /= 255) <= 0.04045 ? e / 12.92 : Du((e + 0.055) / 1.055, 2.4),
  Qi = (e) => (e > it.t3 ? Du(e, 1 / 3) : e / it.t2 + it.t0),
  Am = (e, t, n) => {
    ;(e = Zi(e)), (t = Zi(t)), (n = Zi(n))
    const s = Qi((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / it.Xn),
      i = Qi((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / it.Yn),
      r = Qi((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / it.Zn)
    return [s, i, r]
  }
G.prototype.lab = function () {
  return Fu(this._rgb)
}
le.lab = (...e) => new G(...e, "lab")
ce.format.lab = zu
ce.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = me(e, "lab")), ge(e) === "array" && e.length === 3)) return "lab"
  },
})
const { sin: $m, cos: Lm } = Math,
  Hu = (...e) => {
    let [t, n, s] = me(e, "lch")
    return isNaN(s) && (s = 0), (s = s * om), [t, Lm(s) * n, $m(s) * n]
  },
  Gu = (...e) => {
    e = me(e, "lch")
    const [t, n, s] = e,
      [i, r, l] = Hu(t, n, s),
      [a, o, c] = zu(i, r, l)
    return [a, o, c, e.length > 3 ? e[3] : 1]
  },
  _m = (...e) => {
    const t = me(e, "hcl").reverse()
    return Gu(...t)
  },
  { sqrt: Bm, atan2: jm, round: Rm } = Math,
  Vu = (...e) => {
    const [t, n, s] = me(e, "lab"),
      i = Bm(n * n + s * s)
    let r = (jm(s, n) * um + 360) % 360
    return Rm(i * 1e4) === 0 && (r = Number.NaN), [t, i, r]
  },
  Wu = (...e) => {
    const [t, n, s] = me(e, "rgb"),
      [i, r, l] = Fu(t, n, s)
    return Vu(i, r, l)
  }
G.prototype.lch = function () {
  return Wu(this._rgb)
}
G.prototype.hcl = function () {
  return Wu(this._rgb).reverse()
}
le.lch = (...e) => new G(...e, "lch")
le.hcl = (...e) => new G(...e, "hcl")
ce.format.lch = Gu
ce.format.hcl = _m
;["lch", "hcl"].forEach((e) =>
  ce.autodetect.push({
    p: 2,
    test: (...t) => {
      if (((t = me(t, e)), ge(t) === "array" && t.length === 3)) return e
    },
  }),
)
const Fn = {
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
G.prototype.name = function () {
  const e = Nu(this._rgb, "rgb")
  for (let t of Object.keys(Fn)) if (Fn[t] === e) return t.toLowerCase()
  return e
}
ce.format.named = (e) => {
  if (((e = e.toLowerCase()), Fn[e])) return Ru(Fn[e])
  throw new Error("unknown color name: " + e)
}
ce.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ge(e) === "string" && Fn[e.toLowerCase()]) return "named"
  },
})
const Nm = (e) => {
    if (ge(e) == "number" && e >= 0 && e <= 16777215) {
      const t = e >> 16,
        n = (e >> 8) & 255,
        s = e & 255
      return [t, n, s, 1]
    }
    throw new Error("unknown num color: " + e)
  },
  zm = (...e) => {
    const [t, n, s] = me(e, "rgb")
    return (t << 16) + (n << 8) + s
  }
G.prototype.num = function () {
  return zm(this._rgb)
}
le.num = (...e) => new G(...e, "num")
ce.format.num = Nm
ce.autodetect.push({
  p: 5,
  test: (...e) => {
    if (
      e.length === 1 &&
      ge(e[0]) === "number" &&
      e[0] >= 0 &&
      e[0] <= 16777215
    )
      return "num"
  },
})
const { round: qu } = Math
G.prototype.rgb = function (e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(qu)
}
G.prototype.rgba = function (e = !0) {
  return this._rgb
    .slice(0, 4)
    .map((t, n) => (n < 3 ? (e === !1 ? t : qu(t)) : t))
}
le.rgb = (...e) => new G(...e, "rgb")
ce.format.rgb = (...e) => {
  const t = me(e, "rgba")
  return t[3] === void 0 && (t[3] = 1), t
}
ce.autodetect.push({
  p: 3,
  test: (...e) => {
    if (
      ((e = me(e, "rgba")),
      ge(e) === "array" &&
        (e.length === 3 ||
          (e.length === 4 && ge(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)))
    )
      return "rgb"
  },
})
const { log: Os } = Math,
  Uu = (e) => {
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
                104.49216199393888 * Os(s)),
          (i =
            t < 20
              ? 0
              : -254.76935184120902 +
                0.8274096064007395 * (i = t - 10) +
                115.67994401066147 * Os(i)))
        : ((n =
            351.97690566805693 +
            0.114206453784165 * (n = t - 55) -
            40.25366309332127 * Os(n)),
          (s =
            325.4494125711974 +
            0.07943456536662342 * (s = t - 50) -
            28.0852963507957 * Os(s)),
          (i = 255)),
      [n, s, i, 1]
    )
  },
  { round: Dm } = Math,
  Fm = (...e) => {
    const t = me(e, "rgb"),
      n = t[0],
      s = t[2]
    let i = 1e3,
      r = 4e4
    const l = 0.4
    let a
    for (; r - i > l; ) {
      a = (r + i) * 0.5
      const o = Uu(a)
      o[2] / o[0] >= s / n ? (r = a) : (i = a)
    }
    return Dm(a)
  }
G.prototype.temp =
  G.prototype.kelvin =
  G.prototype.temperature =
    function () {
      return Fm(this._rgb)
    }
le.temp = le.kelvin = le.temperature = (...e) => new G(...e, "temp")
ce.format.temp = ce.format.kelvin = ce.format.temperature = Uu
const { pow: Ds, sign: Hm } = Math,
  Ku = (...e) => {
    e = me(e, "lab")
    const [t, n, s] = e,
      i = Ds(t + 0.3963377774 * n + 0.2158037573 * s, 3),
      r = Ds(t - 0.1055613458 * n - 0.0638541728 * s, 3),
      l = Ds(t - 0.0894841775 * n - 1.291485548 * s, 3)
    return [
      255 * er(4.0767416621 * i - 3.3077115913 * r + 0.2309699292 * l),
      255 * er(-1.2684380046 * i + 2.6097574011 * r - 0.3413193965 * l),
      255 * er(-0.0041960863 * i - 0.7034186147 * r + 1.707614701 * l),
      e.length > 3 ? e[3] : 1,
    ]
  }
function er(e) {
  const t = Math.abs(e)
  return t > 0.0031308
    ? (Hm(e) || 1) * (1.055 * Ds(t, 1 / 2.4) - 0.055)
    : e * 12.92
}
const { cbrt: tr, pow: Gm, sign: Vm } = Math,
  Yu = (...e) => {
    const [t, n, s] = me(e, "rgb"),
      [i, r, l] = [nr(t / 255), nr(n / 255), nr(s / 255)],
      a = tr(0.4122214708 * i + 0.5363325363 * r + 0.0514459929 * l),
      o = tr(0.2119034982 * i + 0.6806995451 * r + 0.1073969566 * l),
      c = tr(0.0883024619 * i + 0.2817188376 * r + 0.6299787005 * l)
    return [
      0.2104542553 * a + 0.793617785 * o - 0.0040720468 * c,
      1.9779984951 * a - 2.428592205 * o + 0.4505937099 * c,
      0.0259040371 * a + 0.7827717662 * o - 0.808675766 * c,
    ]
  }
function nr(e) {
  const t = Math.abs(e)
  return t < 0.04045 ? e / 12.92 : (Vm(e) || 1) * Gm((t + 0.055) / 1.055, 2.4)
}
G.prototype.oklab = function () {
  return Yu(this._rgb)
}
le.oklab = (...e) => new G(...e, "oklab")
ce.format.oklab = Ku
ce.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = me(e, "oklab")), ge(e) === "array" && e.length === 3))
      return "oklab"
  },
})
const Wm = (...e) => {
    e = me(e, "lch")
    const [t, n, s] = e,
      [i, r, l] = Hu(t, n, s),
      [a, o, c] = Ku(i, r, l)
    return [a, o, c, e.length > 3 ? e[3] : 1]
  },
  qm = (...e) => {
    const [t, n, s] = me(e, "rgb"),
      [i, r, l] = Yu(t, n, s)
    return Vu(i, r, l)
  }
G.prototype.oklch = function () {
  return qm(this._rgb)
}
le.oklch = (...e) => new G(...e, "oklch")
ce.format.oklch = Wm
ce.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = me(e, "oklch")), ge(e) === "array" && e.length === 3))
      return "oklch"
  },
})
G.prototype.alpha = function (e, t = !1) {
  return e !== void 0 && ge(e) === "number"
    ? t
      ? ((this._rgb[3] = e), this)
      : new G([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
    : this._rgb[3]
}
G.prototype.clipped = function () {
  return this._rgb._clipped || !1
}
G.prototype.darken = function (e = 1) {
  const t = this,
    n = t.lab()
  return (n[0] -= it.Kn * e), new G(n, "lab").alpha(t.alpha(), !0)
}
G.prototype.brighten = function (e = 1) {
  return this.darken(-e)
}
G.prototype.darker = G.prototype.darken
G.prototype.brighter = G.prototype.brighten
G.prototype.get = function (e) {
  const [t, n] = e.split("."),
    s = this[t]()
  if (n) {
    const i = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0)
    if (i > -1) return s[i]
    throw new Error(`unknown channel ${n} in mode ${t}`)
  } else return s
}
const { pow: Um } = Math,
  Km = 1e-7,
  Ym = 20
G.prototype.luminance = function (e, t = "rgb") {
  if (e !== void 0 && ge(e) === "number") {
    if (e === 0) return new G([0, 0, 0, this._rgb[3]], "rgb")
    if (e === 1) return new G([255, 255, 255, this._rgb[3]], "rgb")
    let n = this.luminance(),
      s = Ym
    const i = (l, a) => {
        const o = l.interpolate(a, 0.5, t),
          c = o.luminance()
        return Math.abs(e - c) < Km || !s-- ? o : c > e ? i(l, o) : i(o, a)
      },
      r = (
        n > e ? i(new G([0, 0, 0]), this) : i(this, new G([255, 255, 255]))
      ).rgb()
    return new G([...r, this._rgb[3]])
  }
  return Xm(...this._rgb.slice(0, 3))
}
const Xm = (e, t, n) => (
    (e = sr(e)), (t = sr(t)), (n = sr(n)), 0.2126 * e + 0.7152 * t + 0.0722 * n
  ),
  sr = (e) => (
    (e /= 255), e <= 0.03928 ? e / 12.92 : Um((e + 0.055) / 1.055, 2.4)
  ),
  Ke = {},
  ms = (e, t, n = 0.5, ...s) => {
    let i = s[0] || "lrgb"
    if ((!Ke[i] && !s.length && (i = Object.keys(Ke)[0]), !Ke[i]))
      throw new Error(`interpolation mode ${i} is not defined`)
    return (
      ge(e) !== "object" && (e = new G(e)),
      ge(t) !== "object" && (t = new G(t)),
      Ke[i](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
    )
  }
G.prototype.mix = G.prototype.interpolate = function (e, t = 0.5, ...n) {
  return ms(this, e, t, ...n)
}
G.prototype.premultiply = function (e = !1) {
  const t = this._rgb,
    n = t[3]
  return e
    ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
    : new G([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
}
G.prototype.saturate = function (e = 1) {
  const t = this,
    n = t.lch()
  return (
    (n[1] += it.Kn * e),
    n[1] < 0 && (n[1] = 0),
    new G(n, "lch").alpha(t.alpha(), !0)
  )
}
G.prototype.desaturate = function (e = 1) {
  return this.saturate(-e)
}
G.prototype.set = function (e, t, n = !1) {
  const [s, i] = e.split("."),
    r = this[s]()
  if (i) {
    const l = s.indexOf(i) - (s.substr(0, 2) === "ok" ? 2 : 0)
    if (l > -1) {
      if (ge(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            r[l] += +t
            break
          case "-":
            r[l] += +t
            break
          case "*":
            r[l] *= +t.substr(1)
            break
          case "/":
            r[l] /= +t.substr(1)
            break
          default:
            r[l] = +t
        }
      else if (ge(t) === "number") r[l] = t
      else throw new Error("unsupported value for Color.set")
      const a = new G(r, s)
      return n ? ((this._rgb = a._rgb), this) : a
    }
    throw new Error(`unknown channel ${i} in mode ${s}`)
  } else return r
}
G.prototype.tint = function (e = 0.5, ...t) {
  return ms(this, "white", e, ...t)
}
G.prototype.shade = function (e = 0.5, ...t) {
  return ms(this, "black", e, ...t)
}
const Jm = (e, t, n) => {
  const s = e._rgb,
    i = t._rgb
  return new G(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "rgb",
  )
}
Ke.rgb = Jm
const { sqrt: ir, pow: Tn } = Math,
  Zm = (e, t, n) => {
    const [s, i, r] = e._rgb,
      [l, a, o] = t._rgb
    return new G(
      ir(Tn(s, 2) * (1 - n) + Tn(l, 2) * n),
      ir(Tn(i, 2) * (1 - n) + Tn(a, 2) * n),
      ir(Tn(r, 2) * (1 - n) + Tn(o, 2) * n),
      "rgb",
    )
  }
Ke.lrgb = Zm
const Qm = (e, t, n) => {
  const s = e.lab(),
    i = t.lab()
  return new G(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "lab",
  )
}
Ke.lab = Qm
const Gn = (e, t, n, s) => {
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
    let l, a, o, c, u, d
    ;(s.substr(0, 1) === "h" || s === "oklch") &&
      (([l, o, u] = i), ([a, c, d] = r))
    let f, h, m, b
    return (
      !isNaN(l) && !isNaN(a)
        ? (a > l && a - l > 180
            ? (b = a - (l + 360))
            : a < l && l - a > 180
              ? (b = a + 360 - l)
              : (b = a - l),
          (h = l + n * b))
        : isNaN(l)
          ? isNaN(a)
            ? (h = Number.NaN)
            : ((h = a), (u == 1 || u == 0) && s != "hsv" && (f = c))
          : ((h = l), (d == 1 || d == 0) && s != "hsv" && (f = o)),
      f === void 0 && (f = o + n * (c - o)),
      (m = u + n * (d - u)),
      s === "oklch" ? new G([m, f, h], s) : new G([h, f, m], s)
    )
  },
  Xu = (e, t, n) => Gn(e, t, n, "lch")
Ke.lch = Xu
Ke.hcl = Xu
const e1 = (e, t, n) => {
  const s = e.num(),
    i = t.num()
  return new G(s + n * (i - s), "num")
}
Ke.num = e1
const t1 = (e, t, n) => Gn(e, t, n, "hcg")
Ke.hcg = t1
const n1 = (e, t, n) => Gn(e, t, n, "hsi")
Ke.hsi = n1
const s1 = (e, t, n) => Gn(e, t, n, "hsl")
Ke.hsl = s1
const i1 = (e, t, n) => Gn(e, t, n, "hsv")
Ke.hsv = i1
const r1 = (e, t, n) => {
  const s = e.oklab(),
    i = t.oklab()
  return new G(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "oklab",
  )
}
Ke.oklab = r1
const l1 = (e, t, n) => Gn(e, t, n, "oklch")
Ke.oklch = l1
const { pow: rr, sqrt: lr, PI: ar, cos: Ia, sin: Ma, atan2: a1 } = Math,
  o1 = (e, t = "lrgb", n = null) => {
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
      (e = e.map((d) => new G(d))),
      t === "lrgb")
    )
      return u1(e, n)
    const r = e.shift(),
      l = r.get(t),
      a = []
    let o = 0,
      c = 0
    for (let d = 0; d < l.length; d++)
      if (
        ((l[d] = (l[d] || 0) * n[0]),
        a.push(isNaN(l[d]) ? 0 : n[0]),
        t.charAt(d) === "h" && !isNaN(l[d]))
      ) {
        const f = (l[d] / 180) * ar
        ;(o += Ia(f) * n[0]), (c += Ma(f) * n[0])
      }
    let u = r.alpha() * n[0]
    e.forEach((d, f) => {
      const h = d.get(t)
      u += d.alpha() * n[f + 1]
      for (let m = 0; m < l.length; m++)
        if (!isNaN(h[m]))
          if (((a[m] += n[f + 1]), t.charAt(m) === "h")) {
            const b = (h[m] / 180) * ar
            ;(o += Ia(b) * n[f + 1]), (c += Ma(b) * n[f + 1])
          } else l[m] += h[m] * n[f + 1]
    })
    for (let d = 0; d < l.length; d++)
      if (t.charAt(d) === "h") {
        let f = (a1(c / a[d], o / a[d]) / ar) * 180
        for (; f < 0; ) f += 360
        for (; f >= 360; ) f -= 360
        l[d] = f
      } else l[d] = l[d] / a[d]
    return (u /= s), new G(l, t).alpha(u > 0.99999 ? 1 : u, !0)
  },
  u1 = (e, t) => {
    const n = e.length,
      s = [0, 0, 0, 0]
    for (let i = 0; i < e.length; i++) {
      const r = e[i],
        l = t[i] / n,
        a = r._rgb
      ;(s[0] += rr(a[0], 2) * l),
        (s[1] += rr(a[1], 2) * l),
        (s[2] += rr(a[2], 2) * l),
        (s[3] += a[3] * l)
    }
    return (
      (s[0] = lr(s[0])),
      (s[1] = lr(s[1])),
      (s[2] = lr(s[2])),
      s[3] > 0.9999999 && (s[3] = 1),
      new G(pl(s))
    )
  },
  { pow: c1 } = Math
function ti(e) {
  let t = "rgb",
    n = le("#ccc"),
    s = 0,
    i = [0, 1],
    r = [],
    l = [0, 0],
    a = !1,
    o = [],
    c = !1,
    u = 0,
    d = 1,
    f = !1,
    h = {},
    m = !0,
    b = 1
  const C = function (E) {
      if (
        ((E = E || ["#fff", "#000"]),
        E &&
          ge(E) === "string" &&
          le.brewer &&
          le.brewer[E.toLowerCase()] &&
          (E = le.brewer[E.toLowerCase()]),
        ge(E) === "array")
      ) {
        E.length === 1 && (E = [E[0], E[0]]), (E = E.slice(0))
        for (let A = 0; A < E.length; A++) E[A] = le(E[A])
        r.length = 0
        for (let A = 0; A < E.length; A++) r.push(A / (E.length - 1))
      }
      return T(), (o = E)
    },
    w = function (E) {
      if (a != null) {
        const A = a.length - 1
        let I = 0
        for (; I < A && E >= a[I]; ) I++
        return I - 1
      }
      return 0
    }
  let g = (E) => E,
    v = (E) => E
  const x = function (E, A) {
    let I, M
    if ((A == null && (A = !1), isNaN(E) || E === null)) return n
    A
      ? (M = E)
      : a && a.length > 2
        ? (M = w(E) / (a.length - 2))
        : d !== u
          ? (M = (E - u) / (d - u))
          : (M = 1),
      (M = v(M)),
      A || (M = g(M)),
      b !== 1 && (M = c1(M, b)),
      (M = l[0] + M * (1 - l[0] - l[1])),
      (M = jn(M, 0, 1))
    const L = Math.floor(M * 1e4)
    if (m && h[L]) I = h[L]
    else {
      if (ge(o) === "array")
        for (let D = 0; D < r.length; D++) {
          const W = r[D]
          if (M <= W) {
            I = o[D]
            break
          }
          if (M >= W && D === r.length - 1) {
            I = o[D]
            break
          }
          if (M > W && M < r[D + 1]) {
            ;(M = (M - W) / (r[D + 1] - W)),
              (I = le.interpolate(o[D], o[D + 1], M, t))
            break
          }
        }
      else ge(o) === "function" && (I = o(M))
      m && (h[L] = I)
    }
    return I
  }
  var T = () => (h = {})
  C(e)
  const O = function (E) {
    const A = le(x(E))
    return c && A[c] ? A[c]() : A
  }
  return (
    (O.classes = function (E) {
      if (E != null) {
        if (ge(E) === "array") (a = E), (i = [E[0], E[E.length - 1]])
        else {
          const A = le.analyze(i)
          E === 0 ? (a = [A.min, A.max]) : (a = le.limits(A, "e", E))
        }
        return O
      }
      return a
    }),
    (O.domain = function (E) {
      if (!arguments.length) return i
      ;(u = E[0]), (d = E[E.length - 1]), (r = [])
      const A = o.length
      if (E.length === A && u !== d)
        for (let I of Array.from(E)) r.push((I - u) / (d - u))
      else {
        for (let I = 0; I < A; I++) r.push(I / (A - 1))
        if (E.length > 2) {
          const I = E.map((L, D) => D / (E.length - 1)),
            M = E.map((L) => (L - u) / (d - u))
          M.every((L, D) => I[D] === L) ||
            (v = (L) => {
              if (L <= 0 || L >= 1) return L
              let D = 0
              for (; L >= M[D + 1]; ) D++
              const W = (L - M[D]) / (M[D + 1] - M[D])
              return I[D] + W * (I[D + 1] - I[D])
            })
        }
      }
      return (i = [u, d]), O
    }),
    (O.mode = function (E) {
      return arguments.length ? ((t = E), T(), O) : t
    }),
    (O.range = function (E, A) {
      return C(E), O
    }),
    (O.out = function (E) {
      return (c = E), O
    }),
    (O.spread = function (E) {
      return arguments.length ? ((s = E), O) : s
    }),
    (O.correctLightness = function (E) {
      return (
        E == null && (E = !0),
        (f = E),
        T(),
        f
          ? (g = function (A) {
              const I = x(0, !0).lab()[0],
                M = x(1, !0).lab()[0],
                L = I > M
              let D = x(A, !0).lab()[0]
              const W = I + (M - I) * A
              let ue = D - W,
                fe = 0,
                $ = 1,
                R = 20
              for (; Math.abs(ue) > 0.01 && R-- > 0; )
                (function () {
                  return (
                    L && (ue *= -1),
                    ue < 0
                      ? ((fe = A), (A += ($ - A) * 0.5))
                      : (($ = A), (A += (fe - A) * 0.5)),
                    (D = x(A, !0).lab()[0]),
                    (ue = D - W)
                  )
                })()
              return A
            })
          : (g = (A) => A),
        O
      )
    }),
    (O.padding = function (E) {
      return E != null ? (ge(E) === "number" && (E = [E, E]), (l = E), O) : l
    }),
    (O.colors = function (E, A) {
      arguments.length < 2 && (A = "hex")
      let I = []
      if (arguments.length === 0) I = o.slice(0)
      else if (E === 1) I = [O(0.5)]
      else if (E > 1) {
        const M = i[0],
          L = i[1] - M
        I = d1(0, E).map((D) => O(M + (D / (E - 1)) * L))
      } else {
        e = []
        let M = []
        if (a && a.length > 2)
          for (
            let L = 1, D = a.length, W = 1 <= D;
            W ? L < D : L > D;
            W ? L++ : L--
          )
            M.push((a[L - 1] + a[L]) * 0.5)
        else M = i
        I = M.map((L) => O(L))
      }
      return le[A] && (I = I.map((M) => M[A]())), I
    }),
    (O.cache = function (E) {
      return E != null ? ((m = E), O) : m
    }),
    (O.gamma = function (E) {
      return E != null ? ((b = E), O) : b
    }),
    (O.nodata = function (E) {
      return E != null ? ((n = le(E)), O) : n
    }),
    O
  )
}
function d1(e, t, n) {
  let s = [],
    i = e < t,
    r = t
  for (let l = e; i ? l < r : l > r; i ? l++ : l--) s.push(l)
  return s
}
const f1 = function (e) {
    let t = [1, 1]
    for (let n = 1; n < e; n++) {
      let s = [1]
      for (let i = 1; i <= t.length; i++) s[i] = (t[i] || 0) + t[i - 1]
      t = s
    }
    return t
  },
  p1 = function (e) {
    let t, n, s, i
    if (((e = e.map((r) => new G(r))), e.length === 2))
      ([n, s] = e.map((r) => r.lab())),
        (t = function (r) {
          const l = [0, 1, 2].map((a) => n[a] + r * (s[a] - n[a]))
          return new G(l, "lab")
        })
    else if (e.length === 3)
      ([n, s, i] = e.map((r) => r.lab())),
        (t = function (r) {
          const l = [0, 1, 2].map(
            (a) =>
              (1 - r) * (1 - r) * n[a] + 2 * (1 - r) * r * s[a] + r * r * i[a],
          )
          return new G(l, "lab")
        })
    else if (e.length === 4) {
      let r
      ;([n, s, i, r] = e.map((l) => l.lab())),
        (t = function (l) {
          const a = [0, 1, 2].map(
            (o) =>
              (1 - l) * (1 - l) * (1 - l) * n[o] +
              3 * (1 - l) * (1 - l) * l * s[o] +
              3 * (1 - l) * l * l * i[o] +
              l * l * l * r[o],
          )
          return new G(a, "lab")
        })
    } else if (e.length >= 5) {
      let r, l, a
      ;(r = e.map((o) => o.lab())),
        (a = e.length - 1),
        (l = f1(a)),
        (t = function (o) {
          const c = 1 - o,
            u = [0, 1, 2].map((d) =>
              r.reduce((f, h, m) => f + l[m] * c ** (a - m) * o ** m * h[d], 0),
            )
          return new G(u, "lab")
        })
    } else
      throw new RangeError("No point in running bezier with only one color.")
    return t
  },
  h1 = (e) => {
    const t = p1(e)
    return (t.scale = () => ti(t)), t
  },
  Tt = (e, t, n) => {
    if (!Tt[n]) throw new Error("unknown blend mode " + n)
    return Tt[n](e, t)
  },
  fn = (e) => (t, n) => {
    const s = le(n).rgb(),
      i = le(t).rgb()
    return le.rgb(e(s, i))
  },
  pn = (e) => (t, n) => {
    const s = []
    return (
      (s[0] = e(t[0], n[0])), (s[1] = e(t[1], n[1])), (s[2] = e(t[2], n[2])), s
    )
  },
  g1 = (e) => e,
  m1 = (e, t) => (e * t) / 255,
  b1 = (e, t) => (e > t ? t : e),
  v1 = (e, t) => (e > t ? e : t),
  y1 = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)),
  w1 = (e, t) =>
    t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)),
  x1 = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)),
  S1 = (e, t) =>
    e === 255
      ? 255
      : ((e = (255 * (t / 255)) / (1 - e / 255)), e > 255 ? 255 : e)
Tt.normal = fn(pn(g1))
Tt.multiply = fn(pn(m1))
Tt.screen = fn(pn(y1))
Tt.overlay = fn(pn(w1))
Tt.darken = fn(pn(b1))
Tt.lighten = fn(pn(v1))
Tt.dodge = fn(pn(S1))
Tt.burn = fn(pn(x1))
const { pow: E1, sin: T1, cos: C1 } = Math
function P1(e = 300, t = -1.5, n = 1, s = 1, i = [0, 1]) {
  let r = 0,
    l
  ge(i) === "array" ? (l = i[1] - i[0]) : ((l = 0), (i = [i, i]))
  const a = function (o) {
    const c = Ft * ((e + 120) / 360 + t * o),
      u = E1(i[0] + l * o, s),
      f = ((r !== 0 ? n[0] + o * r : n) * u * (1 - u)) / 2,
      h = C1(c),
      m = T1(c),
      b = u + f * (-0.14861 * h + 1.78277 * m),
      C = u + f * (-0.29227 * h - 0.90649 * m),
      w = u + f * (1.97294 * h)
    return le(pl([b * 255, C * 255, w * 255, 1]))
  }
  return (
    (a.start = function (o) {
      return o == null ? e : ((e = o), a)
    }),
    (a.rotations = function (o) {
      return o == null ? t : ((t = o), a)
    }),
    (a.gamma = function (o) {
      return o == null ? s : ((s = o), a)
    }),
    (a.hue = function (o) {
      return o == null
        ? n
        : ((n = o),
          ge(n) === "array"
            ? ((r = n[1] - n[0]), r === 0 && (n = n[1]))
            : (r = 0),
          a)
    }),
    (a.lightness = function (o) {
      return o == null
        ? i
        : (ge(o) === "array"
            ? ((i = o), (l = o[1] - o[0]))
            : ((i = [o, o]), (l = 0)),
          a)
    }),
    (a.scale = () => le.scale(a)),
    a.hue(n),
    a
  )
}
const k1 = "0123456789abcdef",
  { floor: I1, random: M1 } = Math,
  O1 = () => {
    let e = "#"
    for (let t = 0; t < 6; t++) e += k1.charAt(I1(M1() * 16))
    return new G(e, "hex")
  },
  { log: Oa, pow: A1, floor: $1, abs: L1 } = Math
function Ju(e, t = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0,
  }
  return (
    ge(e) === "object" && (e = Object.values(e)),
    e.forEach((s) => {
      t && ge(s) === "object" && (s = s[t]),
        s != null &&
          !isNaN(s) &&
          (n.values.push(s),
          (n.sum += s),
          s < n.min && (n.min = s),
          s > n.max && (n.max = s),
          (n.count += 1))
    }),
    (n.domain = [n.min, n.max]),
    (n.limits = (s, i) => Zu(n, s, i)),
    n
  )
}
function Zu(e, t = "equal", n = 7) {
  ge(e) == "array" && (e = Ju(e))
  const { min: s, max: i } = e,
    r = e.values.sort((a, o) => a - o)
  if (n === 1) return [s, i]
  const l = []
  if (
    (t.substr(0, 1) === "c" && (l.push(s), l.push(i)), t.substr(0, 1) === "e")
  ) {
    l.push(s)
    for (let a = 1; a < n; a++) l.push(s + (a / n) * (i - s))
    l.push(i)
  } else if (t.substr(0, 1) === "l") {
    if (s <= 0)
      throw new Error("Logarithmic scales are only possible for values > 0")
    const a = Math.LOG10E * Oa(s),
      o = Math.LOG10E * Oa(i)
    l.push(s)
    for (let c = 1; c < n; c++) l.push(A1(10, a + (c / n) * (o - a)))
    l.push(i)
  } else if (t.substr(0, 1) === "q") {
    l.push(s)
    for (let a = 1; a < n; a++) {
      const o = ((r.length - 1) * a) / n,
        c = $1(o)
      if (c === o) l.push(r[c])
      else {
        const u = o - c
        l.push(r[c] * (1 - u) + r[c + 1] * u)
      }
    }
    l.push(i)
  } else if (t.substr(0, 1) === "k") {
    let a
    const o = r.length,
      c = new Array(o),
      u = new Array(n)
    let d = !0,
      f = 0,
      h = null
    ;(h = []), h.push(s)
    for (let C = 1; C < n; C++) h.push(s + (C / n) * (i - s))
    for (h.push(i); d; ) {
      for (let w = 0; w < n; w++) u[w] = 0
      for (let w = 0; w < o; w++) {
        const g = r[w]
        let v = Number.MAX_VALUE,
          x
        for (let T = 0; T < n; T++) {
          const O = L1(h[T] - g)
          O < v && ((v = O), (x = T)), u[x]++, (c[w] = x)
        }
      }
      const C = new Array(n)
      for (let w = 0; w < n; w++) C[w] = null
      for (let w = 0; w < o; w++)
        (a = c[w]), C[a] === null ? (C[a] = r[w]) : (C[a] += r[w])
      for (let w = 0; w < n; w++) C[w] *= 1 / u[w]
      d = !1
      for (let w = 0; w < n; w++)
        if (C[w] !== h[w]) {
          d = !0
          break
        }
      ;(h = C), f++, f > 200 && (d = !1)
    }
    const m = {}
    for (let C = 0; C < n; C++) m[C] = []
    for (let C = 0; C < o; C++) (a = c[C]), m[a].push(r[C])
    let b = []
    for (let C = 0; C < n; C++) b.push(m[C][0]), b.push(m[C][m[C].length - 1])
    ;(b = b.sort((C, w) => C - w)), l.push(b[0])
    for (let C = 1; C < b.length; C += 2) {
      const w = b[C]
      !isNaN(w) && l.indexOf(w) === -1 && l.push(w)
    }
  }
  return l
}
const _1 = (e, t) => {
    ;(e = new G(e)), (t = new G(t))
    const n = e.luminance(),
      s = t.luminance()
    return n > s ? (n + 0.05) / (s + 0.05) : (s + 0.05) / (n + 0.05)
  },
  {
    sqrt: Nt,
    pow: je,
    min: B1,
    max: j1,
    atan2: Aa,
    abs: $a,
    cos: As,
    sin: La,
    exp: R1,
    PI: _a,
  } = Math
function N1(e, t, n = 1, s = 1, i = 1) {
  var r = function (ht) {
      return (360 * ht) / (2 * _a)
    },
    l = function (ht) {
      return (2 * _a * ht) / 360
    }
  ;(e = new G(e)), (t = new G(t))
  const [a, o, c] = Array.from(e.lab()),
    [u, d, f] = Array.from(t.lab()),
    h = (a + u) / 2,
    m = Nt(je(o, 2) + je(c, 2)),
    b = Nt(je(d, 2) + je(f, 2)),
    C = (m + b) / 2,
    w = 0.5 * (1 - Nt(je(C, 7) / (je(C, 7) + je(25, 7)))),
    g = o * (1 + w),
    v = d * (1 + w),
    x = Nt(je(g, 2) + je(c, 2)),
    T = Nt(je(v, 2) + je(f, 2)),
    O = (x + T) / 2,
    E = r(Aa(c, g)),
    A = r(Aa(f, v)),
    I = E >= 0 ? E : E + 360,
    M = A >= 0 ? A : A + 360,
    L = $a(I - M) > 180 ? (I + M + 360) / 2 : (I + M) / 2,
    D =
      1 -
      0.17 * As(l(L - 30)) +
      0.24 * As(l(2 * L)) +
      0.32 * As(l(3 * L + 6)) -
      0.2 * As(l(4 * L - 63))
  let W = M - I
  ;(W = $a(W) <= 180 ? W : M <= I ? W + 360 : W - 360),
    (W = 2 * Nt(x * T) * La(l(W) / 2))
  const ue = u - a,
    fe = T - x,
    $ = 1 + (0.015 * je(h - 50, 2)) / Nt(20 + je(h - 50, 2)),
    R = 1 + 0.045 * O,
    _ = 1 + 0.015 * O * D,
    ve = 30 * R1(-je((L - 275) / 25, 2)),
    $e = -(2 * Nt(je(O, 7) / (je(O, 7) + je(25, 7)))) * La(2 * l(ve)),
    Le = Nt(
      je(ue / (n * $), 2) +
        je(fe / (s * R), 2) +
        je(W / (i * _), 2) +
        $e * (fe / (s * R)) * (W / (i * _)),
    )
  return j1(0, B1(100, Le))
}
function z1(e, t, n = "lab") {
  ;(e = new G(e)), (t = new G(t))
  const s = e.get(n),
    i = t.get(n)
  let r = 0
  for (let l in s) {
    const a = (s[l] || 0) - (i[l] || 0)
    r += a * a
  }
  return Math.sqrt(r)
}
const D1 = (...e) => {
    try {
      return new G(...e), !0
    } catch {
      return !1
    }
  },
  F1 = {
    cool() {
      return ti([le.hsl(180, 1, 0.9), le.hsl(250, 0.7, 0.4)])
    },
    hot() {
      return ti(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
    },
  },
  Fs = {
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
for (let e of Object.keys(Fs)) Fs[e.toLowerCase()] = Fs[e]
Object.assign(le, {
  average: o1,
  bezier: h1,
  blend: Tt,
  cubehelix: P1,
  mix: ms,
  interpolate: ms,
  random: O1,
  scale: ti,
  analyze: Ju,
  contrast: _1,
  deltaE: N1,
  distance: z1,
  limits: Zu,
  valid: D1,
  scales: F1,
  input: ce,
  colors: Fn,
  brewer: Fs,
})
const H1 = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  G1 = { class: "flex flex-col items-center justify-center w-full" },
  V1 = {
    class: "flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap",
    style: { gap: "5rem" },
  },
  W1 = { viewBox: "0 0 36 36", class: "chart" },
  q1 = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  U1 = { viewBox: "0 0 36 36", class: "chart" },
  K1 = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  Y1 = { id: "speedTable" },
  X1 = { class: "flex" },
  J1 = { class: "flex" },
  Z1 = {
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
  Q1 = Object.assign(Z1, {
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
        i = (o) => {
          if (o >= 4) return "border-emerald-500"
          if (o == 3) return "border-orange-200"
          if (o == 2) return "border-orange-500"
          if (o == 1) return "border-orange-400"
        },
        r = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        },
        l = te(() => {
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
        a = (o) => {
          let c = document.querySelectorAll("tr"),
            u
          o == 5
            ? (u = le("#e2e8f0"))
            : o == 4
              ? (u = le("#cbd5e1"))
              : o == 3
                ? (u = le("#475569"))
                : o == 2
                  ? (u = le("#1e293b"))
                  : o == 1 && (u = le("#0f172a"))
          for (let d = 1; d < c.length; d++)
            d % 2 == 0
              ? (c[d].style.backgroundColor = u.brighten(0))
              : (c[d].style.backgroundColor = u.brighten(0.2))
        }
      return (
        We(() => {
          a(t.brightness)
        }),
        un(
          () => t.brightness,
          (o, c) => {
            a(o)
          },
        ),
        (o, c) => (
          H(),
          se("div", H1, [
            p("div", G1, [
              p("div", V1, [
                p(
                  "div",
                  { id: "perfChart", class: P(s(e.brightness)) },
                  [
                    (H(),
                    se("svg", W1, [
                      c[0] ||
                        (c[0] = p(
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
                          class: P(["circle", i(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: l.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            o.circumference + " " + o.circumference,
                          "stroke-dashoffset": o.dashoffset,
                        },
                        null,
                        10,
                        q1,
                      ),
                    ])),
                    p(
                      "div",
                      {
                        id: "chartInner",
                        class: P(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 96 ",
                      2,
                    ),
                    p(
                      "p",
                      {
                        class: P([
                          "text-sm italic opacity-50 mt-3",
                          r(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      [
                        c[1] ||
                          (c[1] = pe(
                            " Google Page Speed desktop performance score for the Bazaar ",
                            -1,
                          )),
                        p(
                          "a",
                          {
                            href: "/portfolio/bazaar",
                            class: P(n(e.brightness)),
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
                    class: P([s(e.brightness), "hidden sm:hidden md:block"]),
                  },
                  [
                    (H(),
                    se("svg", U1, [
                      c[2] ||
                        (c[2] = p(
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
                          class: P(["circle", i(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: l.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            o.circumference + " " + o.circumference,
                          "stroke-dashoffset": o.dashoffset2,
                        },
                        null,
                        10,
                        K1,
                      ),
                    ])),
                    p(
                      "div",
                      {
                        id: "chartInner",
                        class: P(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 99 ",
                      2,
                    ),
                    p(
                      "p",
                      {
                        class: P([
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
                  class: P([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    r(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  p(
                    "h2",
                    { class: P(["text-2xl m-0", r(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  p(
                    "h2",
                    { class: P(["text-5xl", r(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  c[8] ||
                    (c[8] = p(
                      "p",
                      null,
                      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
                      -1,
                    )),
                  c[9] ||
                    (c[9] = p(
                      "p",
                      null,
                      [
                        pe(
                          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
                        ),
                        p("b", null, "315 KB"),
                        pe(". That's half of the classic SNES game "),
                        p(
                          "em",
                          null,
                          "The Legend of Zelda: A Link to The Past",
                        ),
                        pe(
                          ", or 4% of the bandwidth it takes just to open Instagram. ",
                        ),
                      ],
                      -1,
                    )),
                  c[10] ||
                    (c[10] = p(
                      "p",
                      null,
                      "You want fast? Let's make it happen.",
                      -1,
                    )),
                  p(
                    "div",
                    {
                      class: P([
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
                      ...(c[3] ||
                        (c[3] = [
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
                  p("h3", { class: P(r(e.brightness)) }, "How I help", 2),
                  p("table", Y1, [
                    c[6] ||
                      (c[6] = p(
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
                          p("div", X1, [
                            p(
                              "h4",
                              { class: P([r(e.brightness), "text-lg m-0"]) },
                              [
                                c[4] || (c[4] = pe(" Problem ", -1)),
                                Z(
                                  ne(bh),
                                  {
                                    size: "3rem",
                                    class: P([n(e.brightness), "inline mb-1"]),
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
                          p("div", J1, [
                            p(
                              "h4",
                              { class: P([r(e.brightness), "text-lg m-0"]) },
                              [
                                c[5] || (c[5] = pe(" What I can do ", -1)),
                                Z(
                                  ne(gh),
                                  {
                                    size: "3rem",
                                    class: P([n(e.brightness), "inline mb-1"]),
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
                    c[7] ||
                      (c[7] = p(
                        "tbody",
                        null,
                        [
                          p("tr", null, [
                            p("td", null, "Huge, resource-heavy images"),
                            p("td", null, [
                              pe(" Optimize your images. "),
                              p("b", null, "A lot. "),
                              pe(
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
              c[11] || (c[11] = p("div", { class: "h-6" }, null, -1)),
              Z(xs, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  eb = Zt(Q1, [["__scopeId", "data-v-a139c5c2"]]),
  tb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  nb = { class: "lg:w-6/12 sm:w-12/12" },
  sb = { class: "flex items-center w-full" },
  ib = { class: "flex items-center w-full" },
  rb = { class: "flex items-center w-full" },
  lb = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  ab = { class: "prose text-center" },
  ob = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      V(9274)
      const t = V(4709),
        n = V(new Date("2023-10-01")),
        s = V(new Date()),
        i = te(
          () =>
            ((s.value.getFullYear() - n.value.getFullYear()) * 12 +
              (s.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        r = (o) => (o > 1e6 ? Math.round(o / 1e6).toString() + "m" : o),
        l = (o) => {
          if (o >= 4) return "text-emerald-500"
          if (o == 3) return "text-orange-200"
          if (o == 2) return "text-orange-500"
          if (o == 1) return "text-orange-400"
        },
        a = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        }
      return (o, c) => (
        H(),
        se("div", tb, [
          p("div", nb, [
            p(
              "h2",
              { class: P(["text-left text-5xl", a(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            p(
              "p",
              {
                class: P([
                  "text-left text-sm italic opacity-50 mt-3",
                  a(e.brightness),
                ]),
              },
              [
                c[1] || (c[1] = pe(" Website already secure? ", -1)),
                p("b", null, [
                  p(
                    "a",
                    { href: "", class: P(l(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  c[0] || (c[0] = pe(" are you?", -1)),
                ]),
              ],
              2,
            ),
            p(
              "hr",
              { class: P(["mb-5 mt-1 w-6/12 opacity-25", a(e.brightness)]) },
              null,
              2,
            ),
            p(
              "div",
              { class: P(["prose", a(e.brightness)]) },
              [
                c[5] ||
                  (c[5] = p(
                    "p",
                    null,
                    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
                    -1,
                  )),
                c[6] ||
                  (c[6] = p(
                    "p",
                    null,
                    [p("b", null, " Don't worry, I can help!")],
                    -1,
                  )),
                c[7] ||
                  (c[7] = p(
                    "p",
                    null,
                    "My web security specialities include (but aren't limited to):",
                    -1,
                  )),
                p(
                  "div",
                  {
                    class: P([
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
                    p("div", sb, [
                      Z(
                        ne(Ns),
                        { class: P(["mr-2", l(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "h4",
                        { class: P(["font-bold m-0", a(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    c[2] ||
                      (c[2] = p(
                        "p",
                        null,
                        [
                          pe(
                            " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
                          ),
                          p("em", null, "very"),
                          pe(
                            " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
                          ),
                        ],
                        -1,
                      )),
                  ],
                  2,
                ),
                c[8] || (c[8] = p("div", { class: "h-3" }, null, -1)),
                p(
                  "div",
                  {
                    class: P([
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
                    p("div", ib, [
                      Z(
                        ne(Ns),
                        { size: "2rem", class: P(["mr-2", l(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "h4",
                        { class: P(["font-bold m-0", a(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    c[3] ||
                      (c[3] = p(
                        "p",
                        null,
                        [
                          pe(
                            " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
                          ),
                          p("em", null, "do"),
                          pe(
                            " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
                          ),
                        ],
                        -1,
                      )),
                  ],
                  2,
                ),
                c[9] || (c[9] = p("div", { class: "h-3" }, null, -1)),
                p(
                  "div",
                  {
                    class: P([
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
                    p("div", rb, [
                      Z(
                        ne(Ns),
                        { class: P(["mr-2", l(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      p(
                        "h4",
                        { class: P(["font-bold m-0", a(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    c[4] ||
                      (c[4] = p(
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
          p("div", lb, [
            p(
              "div",
              {
                class: P([
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
                p("div", ab, [
                  p(
                    "h3",
                    {
                      class: P([
                        "text-5xl font-monospace mt-6",
                        l(e.brightness),
                      ]),
                    },
                    Je(r(i.value)) + "+ ",
                    3,
                  ),
                  p(
                    "h3",
                    { class: P(["text-xl", a(e.brightness)]) },
                    [
                      c[10] || (c[10] = pe(" attacks blocked on ", -1)),
                      p(
                        "a",
                        {
                          class: P(l(e.brightness)),
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
                      class: P(["italic opacity-50 text-sm", a(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  p(
                    "p",
                    {
                      class: P(["italic opacity-50 text-sm", a(e.brightness)]),
                    },
                    [
                      p(
                        "a",
                        { href: "", class: P(l(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      c[11] || (c[11] = pe(" about the Bazaar project ", -1)),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            c[12] || (c[12] = p("div", { class: "h-3" }, null, -1)),
            p("hr", { class: P(["opacity-50", a(e.brightness)]) }, null, 2),
            c[13] || (c[13] = p("div", { class: "h-3" }, null, -1)),
            Z(xs, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  ub = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  cb = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  db = { class: "flex w-full" },
  fb = { class: "flex w-full pt-4 gap-2" },
  pb = { class: "w-6/12" },
  hb = { class: "w-6/12" },
  gb = { class: "w-full flex" },
  mb = { class: "w-6/12" },
  bb = { class: "w-6/12 pb-3" },
  vb = {
    __name: "PanelAccessibility",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (c) => {
          if (c >= 4) return "text-emerald-500"
          if (c == 3) return "text-orange-200"
          if (c == 2) return "text-orange-500"
          if (c == 1) return "text-orange-400"
        },
        s = V(!1),
        i = te(() =>
          s.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        r = te(() =>
          s.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        l = (c) => {
          if (c >= 4) return "text-slate-800"
          if (c == 3) return "text-slate-200"
          if (c == 2) return "text-slate-300"
          if (c == 1) return "text-slate-300"
        },
        a = (c) => {
          let u = document.querySelectorAll("tr"),
            d
          c == 5
            ? (d = le("#e2e8f0"))
            : c == 4
              ? (d = le("#cbd5e1"))
              : c == 3
                ? (d = le("#475569"))
                : c == 2
                  ? (d = le("#1e293b"))
                  : c == 1 && (d = le("#0f172a"))
          for (let f = 1; f < u.length; f++)
            f % 2 == 0
              ? (u[f].style.backgroundColor = d.brighten(0))
              : (u[f].style.backgroundColor = d.brighten(0.2))
        },
        o = () => {
          ;(s.value = !s.value), s.value
        }
      return (
        We(() => {
          a(t.brightness)
        }),
        un(
          () => t.brightness,
          (c, u) => {
            a(c)
          },
        ),
        (c, u) => (
          H(),
          se("div", ub, [
            p("div", cb, [
              p(
                "h2",
                { class: P(["text-5xl", l(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              p(
                "h3",
                { class: P(["text-2xl", l(e.brightness)]) },
                "Does yours?",
                2,
              ),
              p(
                "h4",
                { class: P(l(e.brightness)) },
                [
                  u[0] || (u[0] = pe(" What are the ", -1)),
                  p(
                    "a",
                    {
                      class: P(["font-bold", n(e.brightness)]),
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
                { class: P(l(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              p(
                "p",
                { class: P(l(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              p(
                "h4",
                { class: P(l(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              p(
                "p",
                { class: P(l(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              p(
                "p",
                { class: P(l(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              p("div", db, [
                p(
                  "button",
                  {
                    class: P([
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
                    s.value ? (H(), be(ne(pu), { key: 0 })) : _e("", !0),
                    s.value ? _e("", !0) : (H(), be(ne(oh), { key: 1 })),
                    u[1] ||
                      (u[1] = pe(
                        " Toggle red/green color blind/screen reader mode ",
                        -1,
                      )),
                  ],
                  2,
                ),
              ]),
              p("div", fb, [
                p("div", pb, [
                  p(
                    "button",
                    { class: P(["rounded px-5 py-2 w-full", i.value]) },
                    [s.value ? (H(), be(ne(va), { key: 0 })) : _e("", !0)],
                    2,
                  ),
                ]),
                p("div", hb, [
                  p(
                    "button",
                    { class: P(["rounded px-5 py-2 w-full", r.value]) },
                    [s.value ? (H(), be(ne(Tr), { key: 0 })) : _e("", !0)],
                    2,
                  ),
                ]),
              ]),
              p(
                "h4",
                { class: P(["text-2xl", l(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              p("div", gb, [
                p("div", mb, [
                  p(
                    "button",
                    {
                      class: P([
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
                    [u[2] || (u[2] = pe(" Submit ", -1)), Z(ne(va))],
                    2,
                  ),
                ]),
                p("div", bb, [
                  p(
                    "button",
                    {
                      class: P([
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
                    [u[3] || (u[3] = pe(" Cancel ", -1)), Z(ne(Tr))],
                    2,
                  ),
                ]),
              ]),
              p(
                "p",
                { class: P(l(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              p(
                "p",
                { class: P(l(e.brightness)) },
                [
                  ...(u[4] ||
                    (u[4] = [
                      pe(
                        " Changes like these may seem small, but they make a ",
                        -1,
                      ),
                      p("em", null, "huge", -1),
                      pe(
                        " difference for the usability of your site. Let me help you be in the 2%. ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
            ]),
            u[5] || (u[5] = p("div", { class: "h-6" }, null, -1)),
            Z(xs, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  yb = ["onMouseover"],
  wb = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = V([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = V(0)
      const s = (r, l, a, o) => {
          if (l) {
            if (r == 5) return a === o ? "bg-emerald-600" : "bg-emerald-500"
            if (r == 4) return a === o ? "bg-emerald-600" : "bg-emerald-500"
            if (r == 3 || r == 1)
              return a === o ? "bg-orange-500" : "bg-orange-400"
            if (r == 2) return "bg-orange-600"
          } else if (a === o) {
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
        i = (r, l) => {
          if (l) return r >= 3 ? "text-slate-200" : "text-slate-800"
          if (r >= 4) return "text-emerald-500"
          if (r == 3) return "text-orange-200"
          if (r == 2) return "text-orange-500"
          if (r == 1) return "text-orange-400"
        }
      return (r, l) => (
        H(),
        be(ne(Jf), null, {
          default: we(() => [
            Z(
              ne(Zf),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: we(() => [
                  (H(!0),
                  se(
                    Pe,
                    null,
                    Wt(
                      t.value,
                      (a) => (
                        H(),
                        be(
                          ne(Qf),
                          {
                            key: a.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: we(({ selected: o }) => [
                              p(
                                "div",
                                {
                                  class: P([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    s(e.brightness, o, ne(n), a.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (c) =>
                                    Fe(n) ? (n.value = a.id) : (n = a.id),
                                  onMouseleave:
                                    l[0] ||
                                    (l[0] = (c) =>
                                      Fe(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  a.id == 0
                                    ? (H(),
                                      be(
                                        ne(Ns),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: P(i(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : _e("", !0),
                                  a.id == 1
                                    ? (H(),
                                      be(
                                        ne(ch),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: P(i(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : _e("", !0),
                                  a.id == 4
                                    ? (H(),
                                      be(
                                        ne(uh),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: P(i(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : _e("", !0),
                                  a.id == 3
                                    ? (H(),
                                      be(
                                        ne(hh),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: P(i(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : _e("", !0),
                                  a.id == 5
                                    ? (H(),
                                      be(
                                        ne(pu),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: P(i(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : _e("", !0),
                                  p(
                                    "p",
                                    {
                                      class: P([
                                        "font-semibold cursor-pointer",
                                        i(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Je(a.title),
                                    3,
                                  ),
                                ],
                                42,
                                yb,
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
            Z(
              ne(ep),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: we(() => [
                  Z(
                    ne(Un),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: we(() => [
                        Z(eb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  Z(
                    ne(Un),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: we(() => [
                        Z(ob, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  Z(
                    ne(Un),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: we(() => [
                        Z(am, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  Z(
                    ne(Un),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: we(() => [
                        Z(Jg, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  Z(
                    ne(Un),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: we(() => [
                        Z(vb, { brightness: e.brightness }, null, 8, [
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
  xb = { href: "/pricing" },
  Sb = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = V(!1)
      We(() => {
        const s = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", s),
          dn(() => {
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
        H(),
        se(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: P([
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
              { class: P(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            p("a", xb, [
              p(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
                  class: P([
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
  Eb = { class: "flex-col" },
  Tb = { class: "prose py-5 flex-col w-full" },
  Cb = { class: "flex" },
  Pb = { class: "w-6/12" },
  kb = ["name", "checked", "onClick"],
  Ib = { class: "w-6/12" },
  Mb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Ob = { class: "flex-col gap-4" },
  Ab = { class: "flex items-center" },
  $b = ["name", "checked", "onClick"],
  Lb = { key: 0 },
  _b = { key: 1 },
  Bb = { class: "" },
  jb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Rb = { class: "flex-col" },
  Nb = { class: "flex justify-between" },
  zb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Db = { class: "gap-4 mt-4", name: "pricing" },
  Fb = ["value"],
  Hb = ["value"],
  Gb = { class: "flex gap-4", id: "leftInputs" },
  Vb = { class: "flex gap-4", id: "rightInputs" },
  Wb = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async ($) => {
          $.preventDefault()
          const R = "pricing"
          let _ = document.getElementsByName("name")[0].value,
            ve = document.getElementsByName("email")[0].value,
            he = document.getElementsByName("website")[0].value,
            $e = document.getElementsByName("notes")[0].value,
            Le = document.getElementsByName("services")[0].value,
            ht = document.getElementsByName("total")[0].value,
            en = window.location.href,
            gt = new XMLHttpRequest()
          gt.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            gt.setRequestHeader("Content-Type", "application/json"),
            gt.send(
              JSON.stringify({
                form: R,
                name: _,
                email: ve,
                website: he,
                notes: $e,
                services: Le,
                total: ht,
                referrer: en,
              }),
            ),
            (gt.onloadend = function () {
              if (
                (console.log(
                  `Status: ${gt.status}, Response: ${gt.responseText}`,
                ),
                gt.status == 200)
              ) {
                let et = document.getElementsByName(R)[0],
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
                  et.appendChild(B)
                let J = document.getElementById("leftInputs"),
                  K = document.getElementById("rightInputs")
                ;(J.style.display = "none"), (K.style.display = "none")
                let ee = document.getElementById("submitButton")
                ee.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        s = ($) => {
          if ($ >= 4) return "text-emerald-500"
          if ($ == 3) return "text-orange-200"
          if ($ == 2) return "text-orange-500"
          if ($ == 1) return "text-orange-400"
        },
        i = ($) => {
          if ($ >= 4) return "text-emerald-500"
          if ($ == 3) return "text-slate-800"
          if ($ == 2) return "text-orange-500"
          if ($ == 1) return "text-orange-400"
        },
        r = ($) => {
          if ($ >= 4) return "border-emerald-500"
          if ($ == 3) return "border-orange-200"
          if ($ == 2) return "border-orange-500"
          if ($ == 1) return "border-orange-400"
        },
        l = ($) => {
          if ($ >= 4) return "text-slate-800"
          if ($ == 3) return "text-slate-200"
          if ($ == 2) return "text-slate-300"
          if ($ == 1) return "text-slate-300"
        },
        a = V({
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
        o = te(() =>
          a.value.speed.audit.enabled &&
          a.value.speed.optimize.enabled &&
          a.value.speed.caching.enabled &&
          a.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        c = te(() =>
          a.value.security.audit.enabled &&
          a.value.security.ddosprotection.enabled &&
          a.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        u = te(() =>
          a.value.accessibility.audit.enabled &&
          a.value.accessibility.levelA.enabled &&
          a.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        d = te(() => 3 / 3),
        f = te(
          () =>
            Object.values(a.value.speed).reduce(
              ($, R) => $ + (R.enabled ? R.price : 0),
              0,
            ) * o.value,
        ),
        h = te(
          () =>
            Object.values(a.value.security).reduce(
              ($, R) => $ + (R.enabled ? R.price : 0),
              0,
            ) * c.value,
        ),
        m = te(
          () =>
            Object.values(a.value.accessibility).reduce(
              ($, R) => $ + (R.enabled ? R.price : 0),
              0,
            ) * u.value,
        ),
        b = te(
          () =>
            Object.values(a.value.designOverhaul).reduce(
              ($, R) => $ + (R.enabled ? R.price : 0),
              0,
            ) * d.value,
        ),
        C = te(() => {
          let $ = 0
          for (const [R, _] of Object.entries(a.value.speed))
            _.enabled && ($ += _.price)
          return $
        }),
        w = te(() => {
          let $ = 0
          for (const [R, _] of Object.entries(a.value.security))
            _.enabled && ($ += _.price)
          return $
        }),
        g = te(() => {
          let $ = 0
          for (const [R, _] of Object.entries(a.value.accessibility))
            _.enabled && ($ += _.price)
          return $
        }),
        v = te(() => {
          let $ = 0
          for (const [R, _] of Object.entries(a.value.designOverhaul))
            _.enabled && ($ += _.price)
          return $
        }),
        x = () => {
          a.value.speed.audit.enabled &&
          a.value.speed.optimize.enabled &&
          a.value.speed.caching.enabled &&
          a.value.speed.images.enabled
            ? ((a.value.speed.audit.enabled = !1),
              (a.value.speed.optimize.enabled = !1),
              (a.value.speed.caching.enabled = !1),
              (a.value.speed.images.enabled = !1))
            : ((a.value.speed.audit.enabled = !0),
              (a.value.speed.optimize.enabled = !0),
              (a.value.speed.caching.enabled = !0),
              (a.value.speed.images.enabled = !0))
        },
        T = () => {
          a.value.security.audit.enabled &&
          a.value.security.ddosprotection.enabled &&
          a.value.security.protection.enabled
            ? ((a.value.security.audit.enabled = !1),
              (a.value.security.ddosprotection.enabled = !1),
              (a.value.security.protection.enabled = !1))
            : ((a.value.security.audit.enabled = !0),
              (a.value.security.ddosprotection.enabled = !0),
              (a.value.security.protection.enabled = !0))
        },
        O = () => {
          a.value.accessibility.audit.enabled &&
          a.value.accessibility.levelA.enabled &&
          a.value.accessibility.levelAA.enabled
            ? ((a.value.accessibility.audit.enabled = !1),
              (a.value.accessibility.levelA.enabled = !1),
              (a.value.accessibility.levelAA.enabled = !1))
            : ((a.value.accessibility.audit.enabled = !0),
              (a.value.accessibility.levelA.enabled = !0),
              (a.value.accessibility.levelAA.enabled = !0))
        },
        E = () => {
          a.value.designOverhaul.designOverhaul.enabled
            ? (a.value.designOverhaul.designOverhaul.enabled = !1)
            : (a.value.designOverhaul.designOverhaul.enabled = !0)
        },
        A = ($) => {
          $.title == "Speed"
            ? x()
            : $.title == "Security"
              ? T()
              : $.title == "Accessibility"
                ? O()
                : $.title == "Design Overhaul" && E()
        },
        I = ($) => Object.values($.services).some((R) => R.enabled),
        M = V([
          {
            title: "Speed",
            services: a.value.speed,
            enabled: !0,
            discount: o.value,
          },
          {
            title: "Security",
            services: a.value.security,
            enabled: !1,
            discount: c.value,
          },
          {
            title: "Accessibility",
            services: a.value.accessibility,
            enabled: !1,
            discount: u.value,
          },
          {
            title: "Design Overhaul",
            services: a.value.designOverhaul,
            enabled: !1,
            discount: d.value,
          },
        ]),
        L = ($) => {
          if ($.title === "Speed") return f.value
          if ($.title === "Security") return h.value
          if ($.title === "Accessibility") return m.value
          if ($.title === "Design Overhaul") return b.value
        },
        D = ($) => {
          if ($.title === "Speed") return C.value
          if ($.title === "Security") return w.value
          if ($.title === "Accessibility") return g.value
          if ($.title === "Design Overhaul") return v.value
        },
        W = te(
          () => L(M.value[0]) + L(M.value[1]) + L(M.value[2]) + L(M.value[3]),
        ),
        ue = te(() => {
          let $ = []
          for (const [R, _] of Object.entries(a.value.speed))
            _.enabled && $.push(_.title)
          for (const [R, _] of Object.entries(a.value.security))
            _.enabled && $.push(_.title)
          for (const [R, _] of Object.entries(a.value.accessibility))
            _.enabled && $.push(_.title)
          for (const [R, _] of Object.entries(a.value.designOverhaul))
            _.enabled && $.push(_.title)
          return $
        }),
        fe = ($) => {
          let R = ""
          return (
            (R += r($)),
            $ == 5
              ? (R += " bg-slate-100")
              : $ == 4
                ? (R += " bg-slate-400")
                : $ == 3
                  ? (R += " bg-slate-500")
                  : $ == 2
                    ? (R += " bg-slate-700")
                    : $ == 1 && (R += " bg-slate-800"),
            R
          )
        }
      return ($, R) => (
        H(),
        se("div", Eb, [
          p("div", Tb, [
            p(
              "h2",
              {
                class: P([
                  "text-5xl text-center text-semibold",
                  l(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            p(
              "p",
              { class: P(["text-center", l(n.brightness)]) },
              [
                R[0] ||
                  (R[0] = pe(
                    " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                    -1,
                  )),
                R[1] || (R[1] = p("br", null, null, -1)),
                R[2] || (R[2] = p("br", null, null, -1)),
                R[3] ||
                  (R[3] = pe(
                    " These services are for your existing website- if you're looking for a new site, ",
                    -1,
                  )),
                p(
                  "a",
                  {
                    href: "/contact",
                    class: P(["font-bold", s(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                R[4] || (R[4] = pe(" for a custom quote. ", -1)),
              ],
              2,
            ),
          ]),
          (H(!0),
          se(
            Pe,
            null,
            Wt(
              M.value,
              (_, ve) => (
                H(),
                se(
                  "div",
                  {
                    key: ve,
                    class: P([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      fe(n.brightness),
                    ]),
                  },
                  [
                    p("div", Cb, [
                      p("div", Pb, [
                        p(
                          "div",
                          {
                            class: P([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              l(n.brightness),
                            ]),
                          },
                          [
                            p(
                              "input",
                              {
                                type: "checkbox",
                                name: _.title,
                                checked: I(_),
                                onClick: (he) => A(_),
                                class: P([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  s(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              kb,
                            ),
                            p("h3", null, Je(_.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      p("div", Ib, [
                        p(
                          "h3",
                          {
                            class: P([
                              "text-4xl text-bold text-right",
                              s(n.brightness),
                            ]),
                          },
                          [
                            D(_) != Math.floor(L(_))
                              ? (H(), se("span", Mb, "$" + Je(D(_)), 1))
                              : _e("", !0),
                            pe("$" + Je(L(_)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    p(
                      "hr",
                      { class: P(["my-4 w-full", s(n.brightness)]) },
                      null,
                      2,
                    ),
                    p("div", Ob, [
                      (H(!0),
                      se(
                        Pe,
                        null,
                        Wt(
                          _.services,
                          (he, $e) => (
                            H(),
                            se(
                              "div",
                              {
                                key: $e,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                p("div", Ab, [
                                  p(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: he.title,
                                      checked: he.enabled,
                                      onClick: (Le) =>
                                        (he.enabled = !he.enabled),
                                      class: P([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        s(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    $b,
                                  ),
                                  p(
                                    "p",
                                    { class: P(["", l(n.brightness)]) },
                                    [
                                      he.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (H(),
                                          se("b", Lb, [
                                            p("em", null, Je(he.title), 1),
                                          ]))
                                        : (H(),
                                          se("span", _b, Je(he.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                p("div", Bb, [
                                  p(
                                    "h3",
                                    {
                                      class: P([
                                        "text-bold text-right",
                                        s(n.brightness),
                                      ]),
                                    },
                                    [
                                      he.price !=
                                      Math.floor(he.price * _.discount)
                                        ? (H(),
                                          se("span", jb, "$" + Je(he.price), 1))
                                        : _e("", !0),
                                      pe("$" + Je(he.price * _.discount), 1),
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
          p("hr", { class: P(["my-4 w-full", s(n.brightness)]) }, null, 2),
          p("div", Rb, [
            p("div", Nb, [
              p(
                "h3",
                { class: P(["text-4xl text-bold", s(n.brightness)]) },
                " Total ",
                2,
              ),
              p(
                "h3",
                { class: P(["text-4xl text-bold", s(n.brightness)]) },
                [
                  W.value != Math.floor(W.value)
                    ? (H(), se("span", zb, "$" + Je(W.value), 1))
                    : _e("", !0),
                  pe("$" + Je(W.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          p("form", Db, [
            p(
              "input",
              { type: "hidden", name: "services", value: ue.value },
              null,
              8,
              Fb,
            ),
            p(
              "input",
              { type: "hidden", name: "total", value: W.value },
              null,
              8,
              Hb,
            ),
            p("div", Gb, [
              p(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: P([
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
                  class: P([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    i(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            p("div", Vb, [
              p(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: P([
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
                  class: P([
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
                class: P([
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
            { class: P(["text-center mt-4", l(n.brightness)]) },
            [
              R[5] ||
                (R[5] = pe(
                  " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
                  -1,
                )),
              R[6] || (R[6] = p("br", null, null, -1)),
              R[7] || (R[7] = p("br", null, null, -1)),
              R[8] ||
                (R[8] = pe(
                  "These are one-time services; for ongoing maintenance, please ",
                  -1,
                )),
              p(
                "a",
                { href: "/contact", class: P(["font-bold", s(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              R[9] || (R[9] = pe(" and we can get that figured out.", -1)),
              R[10] || (R[10] = p("br", null, null, -1)),
              R[11] || (R[11] = p("br", null, null, -1)),
              R[12] || (R[12] = pe("I look forward to working with you! ", -1)),
            ],
            2,
          ),
        ])
      )
    },
  },
  qb = Zt(Wb, [["__scopeId", "data-v-e20b9d11"]]),
  Ub = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        H(), be(qb, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  Kb = { class: "flex-col" },
  Yb = { class: "py-5 flex-col w-full" },
  Xb = { id: "cta" },
  Qu = {
    __name: "Contact",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (i) => {
          if (i >= 4) return "text-slate-800"
          if (i == 3) return "text-slate-200"
          if (i == 2) return "text-slate-300"
          if (i == 1) return "text-slate-300"
        },
        s = async (i) => {
          i.preventDefault()
          const r = "contact"
          let l = document.getElementsByName("name")[0].value,
            a = document.getElementsByName("email")[0].value,
            o = document.getElementsByName("message")[0].value,
            c = window.location.href,
            u = new XMLHttpRequest()
          u.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            u.setRequestHeader("Content-Type", "application/json"),
            u.send(
              JSON.stringify({
                form: r,
                name: l,
                email: a,
                message: o,
                referrer: c,
              }),
            ),
            (u.onloadend = function () {
              if (
                (console.log(
                  `Status: ${u.status}, Response: ${u.responseText}`,
                ),
                u.status == 200)
              ) {
                let d = document.getElementById("cta"),
                  f = document.createElement("div")
                f.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (f.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  d.appendChild(f)
                let h = d.getElementsByTagName("input")
                for (let C = 0; C < h.length; C++) h[C].style.display = "none"
                let m = d.getElementsByTagName("textarea")[0]
                m.style.display = "none"
                let b = document.getElementById("submitButton")
                b.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (i, r) => (
        H(),
        se("div", Kb, [
          p("div", Yb, [
            p(
              "h2",
              {
                class: P([
                  "text-5xl text-center text-semibold",
                  n(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          p("form", Xb, [
            p(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: P(["rounded p-2 w-full", i.inputClass]),
              },
              null,
              2,
            ),
            p(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Email",
                class: P(["rounded p-2 w-full mt-3", i.inputClass]),
              },
              null,
              2,
            ),
            p(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: P(["rounded p-2 w-full mt-3", i.inputClass]),
              },
              null,
              2,
            ),
            p(
              "button",
              {
                id: "submitButton",
                type: "submit",
                "aria-label": "Submit a contact form",
                onClick: s,
                class: P([
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
  yt =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  wt = '</title><path d="',
  xt = '"/></svg>',
  Jb = {
    title: "Blender",
    slug: "blender",
    get svg() {
      return yt + "Blender" + wt + this.path + xt
    },
    path: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
    source: "https://www.blender.org/about/logo",
    hex: "E87D0D",
    guidelines: "https://www.blender.org/about/logo",
  },
  Xn = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return yt + "Bootstrap" + wt + this.path + xt
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  Zb = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return yt + "Cloudflare" + wt + this.path + xt
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  Qb = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return yt + "Figma" + wt + this.path + xt
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  ev = {
    title: "GitHub",
    slug: "github",
    get svg() {
      return yt + "GitHub" + wt + this.path + xt
    },
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    source: "https://github.com/logos",
    hex: "181717",
    guidelines: "https://github.com/logos",
  },
  tv = {
    title: "Instagram",
    slug: "instagram",
    get svg() {
      return yt + "Instagram" + wt + this.path + xt
    },
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    source: "https://about.meta.com/brand/resources/instagram",
    hex: "E4405F",
    guidelines: "https://about.meta.com/brand/resources/instagram",
  },
  Ba = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return yt + "JavaScript" + wt + this.path + xt
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  nv = {
    title: "LinkedIn",
    slug: "linkedin",
    get svg() {
      return yt + "LinkedIn" + wt + this.path + xt
    },
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    source: "https://brand.linkedin.com",
    hex: "0A66C2",
    guidelines: "https://brand.linkedin.com/policies",
  },
  $s = {
    title: "PHP",
    slug: "php",
    get svg() {
      return yt + "PHP" + wt + this.path + xt
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  sv = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return yt + "Tailwind CSS" + wt + this.path + xt
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  iv = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return yt + "Vue.js" + wt + this.path + xt
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
  Mt = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return yt + "WordPress" + wt + this.path + xt
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  rv = { class: "flex-col w-full" },
  lv = { class: "p-5 flex-col w-full" },
  av = { class: "grid grid-cols-6" },
  ov = { class: "col-span-2 sm:col-span-2 md:col-span-1" },
  uv = { class: "flex gap-2 mt-4 justify-center items-center" },
  cv = { class: "flex gap-2 mt-4 justify-center items-center" },
  dv = ["href"],
  fv = {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "100%",
    height: "100%",
  },
  pv = ["d"],
  hv = {
    class: "col-span-4 sm:col-span-4 md:col-span-5 prose pl-5",
    style: { "max-width": "100vw !important" },
  },
  gv = {
    __name: "AboutMe",
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
        i = [nv, ev, Jb, tv],
        r = [
          "https://www.linkedin.com/in/josephclaytonhansen/",
          "https://www.github.com/josephclaytonhansen",
          "https://blenderartists.org/u/joseph/summary",
          "https://www.instagram.com/jhansen_art/",
        ]
      return (l, a) => (
        H(),
        se("div", rv, [
          p("div", lv, [
            p("div", av, [
              p("div", ov, [
                a[0] ||
                  (a[0] = p(
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
                p("div", uv, [
                  p("div", cv, [
                    (H(),
                    se(
                      Pe,
                      null,
                      Wt(i, (o, c) =>
                        p(
                          "div",
                          { key: c, class: P(["flex-1", s(t.brightness)]) },
                          [
                            p(
                              "a",
                              { href: r[c] },
                              [
                                (H(),
                                se("svg", fv, [
                                  p("path", { d: o.path }, null, 8, pv),
                                ])),
                              ],
                              8,
                              dv,
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
              p("div", hv, [
                p(
                  "h1",
                  { class: P(["text-5xl font-bold mb-0", n(t.brightness)]) },
                  " Joseph Hansen ",
                  2,
                ),
                p(
                  "h3",
                  { class: P(["text-lg", n(t.brightness)]) },
                  " Professionally... ",
                  2,
                ),
                p(
                  "p",
                  { class: P(n(t.brightness)) },
                  " I'm a full-stack web developer with a Strategic Communications degree (and a Visual Communications minor), training in design, extensive marketing experience, and a decade of web design and development experience. My specialities are WordPress and Vue, and I'm also proficient in Django, Ruby on Rails, React, and a massive slate of CMS platforms (including Drupal, Joomla, Caffeine, Shopify, and others.) ",
                  2,
                ),
                p(
                  "p",
                  { class: P(n(t.brightness)) },
                  " Have a WordPress site with an obscure theme? Not to worry, I've worked with every WordPress theme or builder under the sun: Divi, Flatsome, Avada, WP Bakery, Gutenburg, Elementor, and more. I'm experienced in JavaScript, HTML, CSS, PHP, Python, C++, Ruby, and other languages, and I'm passionate about problem-solving through code. ",
                  2,
                ),
                p(
                  "p",
                  { class: P(n(t.brightness)) },
                  " I've been working for marketing agencies for 5 years, and I have extensive freelance experience as well. I've worked with clients in a variety of industries, including healthcare, finance, real estate, and more. I've also worked with a variety of non-profits and educational institutions. ",
                  2,
                ),
                p(
                  "p",
                  { class: P(n(t.brightness)) },
                  " I love problem-solving and I'm passionate about having a good impact. I learn quickly, adapt rapidly, and fit into a team instantaneously. ",
                  2,
                ),
                p(
                  "h3",
                  { class: P(["text-lg", n(t.brightness)]) },
                  " Personally... ",
                  2,
                ),
                p(
                  "p",
                  { class: P(n(t.brightness)) },
                  " If that section above bored you, me too. Luckily, there's a lot more to me than what I do for work. I'd call myself an artist, and that covers a lot of things I love to do. I'm: ",
                  2,
                ),
                p(
                  "ul",
                  { class: P(n(t.brightness)) },
                  [
                    ...(a[1] ||
                      (a[1] = [
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
                  { class: P(n(t.brightness)) },
                  " I'm also passionate about social justice, advocacy, and equality. I volunteer extensively (including as a crisis counselor for the Trevor Project), spent many years as the assistant director of a regional non-profit organization, and I'm always looking for ways to make the world a better place. ",
                  2,
                ),
                p(
                  "h3",
                  { class: P(["text-lg", n(t.brightness)]) },
                  " That's me! So... what can I do for you? ",
                  2,
                ),
                Z(
                  Qu,
                  {
                    brightness: e.brightness,
                    style: { "margin-top": "-7rem" },
                  },
                  null,
                  8,
                  ["brightness"],
                ),
                a[2] ||
                  (a[2] = p(
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
  mv = Zt(gv, [["__scopeId", "data-v-16a9d0a6"]]),
  bv = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  vv = { class: "py-5 flex-col w-full" },
  yv = { class: "prose" },
  wv = ["onMouseover", "onClick"],
  xv = { class: "image-container" },
  Sv = ["src", "alt"],
  Ev = { class: "flex gap-2 items-center" },
  Tv = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  Cv = ["d"],
  Pv = {
    __name: "WebPortfolio",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        },
        s = (a) => {
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-600"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        },
        i = V([
          {
            icons: [Mt, $s, Qb],
            title: "BlenderNation Bazaar",
            image: sl,
            link: "/web-portfolio/bazaar",
          },
          {
            icons: [Mt, $s, Ba],
            title: "Feed Council",
            image: il,
            link: "/web-portfolio/feed-council",
          },
          { icons: [Mt, Zb, $s], title: "CHAI", link: "/web-portfolio/chai" },
        ]),
        r = V([
          {
            icons: [Mt, Ba],
            title: "Build On Your Land",
            image: rl,
            link: "/web-portfolio/build-on-your-land",
          },
          {
            icons: [Mt, $s],
            title: "Stuart Pipe and Hose",
            image: ll,
            link: "/web-portfolio/stuart-pipe",
          },
          {
            icons: [Mt, Xn],
            title: "Atlanta Floor One",
            image: al,
            link: "/web-portfolio/atlanta-floor-one",
          },
          {
            icons: [Mt, Xn],
            title: "Swim State Pool",
            image: ol,
            link: "/web-portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [iv, sv],
            image: ul,
            link: "/web-portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [Mt, Xn],
            image: cl,
            link: "/web-portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [Mt, Xn],
            image: dl,
            link: "/web-portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [Mt, Xn],
            image: fl,
            link: "/web-portfolio/aris-search",
          },
        ]),
        l = V(null)
      return (a, o) => (
        H(),
        se("div", bv, [
          p("div", vv, [
            p("span", yv, [
              p(
                "h2",
                {
                  class: P([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              p(
                "p",
                { class: P(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. ",
                2,
              ),
              p(
                "h3",
                { class: P(["text-2xl text-center", n(t.brightness)]) },
                " Check out these full sites I designed and developed ",
                2,
              ),
            ]),
          ]),
          (H(!0),
          se(
            Pe,
            null,
            Wt(
              [i.value, r.value],
              (c) => (
                H(),
                se(
                  "div",
                  {
                    class: P([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": c == i.value,
                        "lg:grid-cols-3 mt-4": c == r.value,
                      },
                    ]),
                  },
                  [
                    (H(!0),
                    se(
                      Pe,
                      null,
                      Wt(
                        c,
                        (u) => (
                          H(),
                          se(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: u.title,
                              onMouseover: (d) => (l.value = u.title),
                              onMouseleave:
                                o[0] || (o[0] = (d) => (l.value = null)),
                              onClick: (d) => a.$router.push(u.link),
                              style: ai({
                                opacity:
                                  l.value === u.title || l.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              p("div", xv, [
                                p(
                                  "img",
                                  {
                                    src: u.image,
                                    alt: u.title,
                                    class: P([
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
                                  Sv,
                                ),
                              ]),
                              p("div", null, [
                                p("div", null, [
                                  p(
                                    "div",
                                    {
                                      class: P([
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
                                            class: P([
                                              "text-xl m-0 p-0",
                                              s(t.brightness),
                                            ]),
                                          },
                                          Je(u.title),
                                          3,
                                        ),
                                      ]),
                                      p("div", Ev, [
                                        (H(!0),
                                        se(
                                          Pe,
                                          null,
                                          Wt(
                                            u.icons,
                                            (d, f) => (
                                              H(),
                                              se(
                                                "div",
                                                {
                                                  key: f,
                                                  class: P([
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
                                                  (H(),
                                                  se("svg", Tv, [
                                                    p(
                                                      "path",
                                                      { d: d.path },
                                                      null,
                                                      8,
                                                      Cv,
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
                            wv,
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
  kv = Zt(Pv, [["__scopeId", "data-v-4614d5aa"]]),
  Iv = {
    __name: "Home",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        H(),
        se(
          "div",
          {
            class: P([
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
  Mv = ["src"],
  Ov = { class: "text-inherit" },
  Av = ["src"],
  $v = "https://bazaar.blendernation.com",
  Lv = "BlenderNation Bazaar",
  _v = {
    __name: "Bazaar",
    setup(e) {
      const t = V([sl, Rg, Ng, zg, Dg]),
        n = V([
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
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: $v,
            title: Lv,
            brightness: i.brightness,
          },
          {
            default: we(() => [
              rt(i.$slots, "default", {}, () => [
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
                    Mv,
                  ),
                  r[0] ||
                    (r[0] = p(
                      "figcaption",
                      null,
                      "Bazaar's planning board",
                      -1,
                    )),
                ]),
                p("p", Ov, [
                  r[2] ||
                    (r[2] = pe(
                      " With the above Figma document as a guide from Bart, I dove into both design and the backend details for managing the complex data the site would be handling. Bart wanted to do this through WordPress, and I was able to use my expertise to recommend AdvancedCustomFields to do a lot of the major data-wrangling. I also built the theme from scratch, to make sure it was as simplified and lightweight as possible while still providing beautiful, responsive, and functional results. ",
                      -1,
                    )),
                  p("figure", null, [
                    p(
                      "img",
                      { src: s.figma, class: "rounded-xl" },
                      null,
                      8,
                      Av,
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
  Bv = "https://okcsouthstake.org",
  jv = "OKC South Stake",
  Rv = {
    __name: "OkcSouthStake",
    setup(e) {
      const t = V([
          il,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277285248.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277310460.webp",
        ]),
        n = V([
          "OKC South Stake homepage (light)",
          "OKC South Stake congregation subpage",
          "OKC South Stake homepage (dark)",
        ])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Bv,
            title: jv,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  Nv = "https://arissearch.com//",
  zv = "Aris Search",
  Dv = {
    __name: "ArisSearch",
    setup(e) {
      const t = V([fl, Vg]),
        n = V(["Aris Search homepage", "Aris Search image effects"])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Nv,
            title: zv,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  Fv = "https://floorsfloors.com/",
  Hv = "Atlanta Floor One",
  Gv = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = V([al, Fg, Hg, Gg]),
        n = V([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Fv,
            title: Hv,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  Vv = "https://www.buildonyourlandllc.com/",
  Wv = "Build on Your Land",
  qv = {
    __name: "BuildOnYourLand",
    setup(e) {
      const t = V([
          rl,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275933220.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275982586.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275995615.webp",
        ]),
        n = V([])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Vv,
            title: Wv,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  Uv = "https://stehlfamilydental.com/",
  Kv = "Stuart Hose and Pipe",
  Yv = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = V([dl]),
        n = V(["Stehl Family Dental homepage"])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Uv,
            title: Kv,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  Xv = "https://tub-boys.com/",
  Jv = "Tub Boys",
  Zv = {
    __name: "TubBoys",
    setup(e) {
      const t = V([
          cl,
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274374594.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274402279.webp",
        ]),
        n = V(["Tub Boys homepage"])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Xv,
            title: Jv,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  Qv = "https://stuarthose.com/",
  e2 = "Stuart Hose and Pipe",
  t2 = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = V([
          ll,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275652278.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275668557.webp",
        ]),
        n = V(["Stuart Hose and Pipe homepage"])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Qv,
            title: e2,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  n2 = "https://swimstatepoolservice.com/",
  s2 = "Swim State Pool",
  i2 = {
    __name: "SwimStatePool",
    setup(e) {
      const t = V([ol]),
        n = V(["Swim State Pool Services homepage"])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: n2,
            title: s2,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  r2 = "/",
  l2 = "josephhansen.dev",
  a2 = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = V([ul]),
        n = V(["This site's homepage"])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: r2,
            title: l2,
            brightness: s.brightness,
          },
          {
            default: we(() => [
              rt(s.$slots, "default", {}, () => [
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
  o2 = "https://www.chai.org/",
  u2 = "Coalition Healthcare Artificial Intelligence",
  c2 = {
    __name: "Chai",
    setup(e) {
      const t = V([Wg]),
        n = V([])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: o2,
            title: u2,
            brightness: s.brightness,
          },
          { default: we(() => [rt(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  d2 = "https://www.feedcouncil.com/",
  f2 = "FEED Council",
  p2 = {
    __name: "FeedCouncil",
    setup(e) {
      const t = V([qg]),
        n = V([])
      return (s, i) => (
        H(),
        be(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: d2,
            title: f2,
            brightness: s.brightness,
          },
          { default: we(() => [rt(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  h2 = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  g2 = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  m2 = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = V(1),
        n = e,
        s = (a) => {
          ;(t.value = Number(a)),
            window.localStorage.setItem("brightness", t.value)
        },
        i = {
          "okc-south-stake": Rv,
          "aris-search": Dv,
          "atlanta-floor-one": Gv,
          "build-on-your-land": qv,
          "stehl-family-dental": Yv,
          "tub-boys": Zv,
          "stuart-pipe": t2,
          "swim-state-pool": i2,
          "josephhansen-dev": a2,
          bazaar: _v,
          chai: c2,
          "feed-council": p2,
        },
        r = te(() => {
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
      We(() => {
        let a = window.localStorage
        if (
          (a.getItem("brightness")
            ? (t.value = Number(a.getItem("brightness")))
            : a.setItem("brightness", t.value),
          n.component == "pricing")
        )
          (l.title = "josephhansen.dev | web developer/designer | pricing"),
            (l.meta[1].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (l.meta[6].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (l.meta[4].content = "https://josephhansen.dev/pricing"),
            (l.meta[9].content = "https://josephhansen.dev/pricing")
        else if (n.component == "contact")
          (l.title = "josephhansen.dev | web developer/designer | contact"),
            (l.meta[1].content =
              "josephhansen.dev | web developer/designer | contact"),
            (l.meta[6].content =
              "josephhansen.dev | web developer/designer | contact"),
            (l.meta[4].content = "https://josephhansen.dev/contact"),
            (l.meta[9].content = "https://josephhansen.dev/contact")
        else if (n.component == "about")
          (l.title = "josephhansen.dev | web developer/designer | about"),
            (l.meta[1].content =
              "josephhansen.dev | web developer/designer | about"),
            (l.meta[6].content =
              "josephhansen.dev | web developer/designer | about"),
            (l.meta[4].content = "https://josephhansen.dev/about"),
            (l.meta[9].content = "https://josephhansen.dev/about")
        else if (n.component == "web-portfolio")
          (l.title =
            "josephhansen.dev | web developer/designer | web portfolio"),
            (l.meta[1].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (l.meta[6].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (l.meta[4].content = "https://josephhansen.dev/web-portfolio"),
            (l.meta[9].content = "https://josephhansen.dev/web-portfolio")
        else if (n.component == "web-services")
          (l.title = "josephhansen.dev | web developer/designer | services"),
            (l.meta[1].content =
              "josephhansen.dev | web developer/designer | services"),
            (l.meta[6].content =
              "josephhansen.dev | web developer/designer | services"),
            (l.meta[4].content = "https://josephhansen.dev/web-services"),
            (l.meta[9].content = "https://josephhansen.dev/web-services")
        else if (n.component in i) {
          let o = n.component.replace(/-/g, " ")
          ;(l.title = `josephhansen.dev | web developer/designer | ${o}`),
            (l.meta[1].content = `josephhansen.dev | web developer/designer | ${o}`),
            (l.meta[6].content = `josephhansen.dev | web developer/designer | ${o}`),
            (l.meta[4].content = `https://josephhansen.dev/web-portfolio/${n.component}`),
            (l.meta[9].content = `https://josephhansen.dev/web-portfolio/${n.component}`)
        }
      })
      const l = bs({
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
        Jt(() => {
          ;(document.title = l.title),
            l.meta.forEach((a) => {
              let o = document.querySelector(
                `meta[name="${a.name}"], meta[property="${a.property}"]`,
              )
              o
                ? o.setAttribute("content", a.content)
                : ((o = document.createElement("meta")),
                  a.name && o.setAttribute("name", a.name),
                  a.property && o.setAttribute("property", a.property),
                  o.setAttribute("content", a.content),
                  document.getElementsByTagName("head")[0].appendChild(o))
            })
        }),
        (a, o) => (
          H(),
          se(
            Pe,
            null,
            [
              p(
                "main",
                {
                  class: P([["w-dvw", r.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  Z(Nh, { "onUpdate:brightness": s }),
                  p("div", h2, [
                    e.component == "pricing"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 0,
                            class: P([
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
                            Z(Ub, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                    e.component == "contact"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 1,
                            class: P([
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
                            Z(Qu, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                    e.component == "web-portfolio"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 2,
                            class: P([
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
                            Z(kv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                    e.component == "about-me"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 3,
                            class: P([
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
                            Z(mv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                    e.component in i
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 4,
                            class: P([
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
                            (H(),
                            be(
                              nd(i[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : _e("", !0),
                    e.component == "home"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 5,
                            class: P([
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
                            Z(Iv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                    e.component == "web-services"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 6,
                            class: P([
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
                            Z(qh, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                  ]),
                  p("div", g2, [
                    e.component == "web-services"
                      ? (H(),
                        se(
                          "div",
                          {
                            key: 0,
                            class: P([
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
                            Z(wb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : _e("", !0),
                  ]),
                ],
                2,
              ),
              Z(Sb, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  b2 = Zt(m2, [["__scopeId", "data-v-3049e913"]]),
  bl = [
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
  ]
bl.map((e) => e.path)
bl.forEach((e) => {
  e.component = b2
})
const v2 = nh({ history: Ap(), routes: bl }),
  ec = vf(Ef)
ec.use(v2)
ec.mount("#app")
