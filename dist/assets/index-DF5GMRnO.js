;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l)
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const i = {}
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    )
  }
  function s(l) {
    if (l.ep) return
    l.ep = !0
    const i = n(l)
    fetch(l.href, i)
  }
})()
function Ai(e) {
  const t = Object.create(null)
  for (const n of e.split(",")) t[n] = 1
  return (n) => n in t
}
const $e = {},
  jn = [],
  Lt = () => {},
  Na = () => !1,
  rl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Oi = (e) => e.startsWith("onUpdate:"),
  Ye = Object.assign,
  Li = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  sc = Object.prototype.hasOwnProperty,
  Ce = (e, t) => sc.call(e, t),
  ce = Array.isArray,
  Bn = (e) => al(e) === "[object Map]",
  za = (e) => al(e) === "[object Set]",
  pe = (e) => typeof e == "function",
  Be = (e) => typeof e == "string",
  Yt = (e) => typeof e == "symbol",
  Oe = (e) => e !== null && typeof e == "object",
  _a = (e) => (Oe(e) || pe(e)) && pe(e.then) && pe(e.catch),
  Da = Object.prototype.toString,
  al = (e) => Da.call(e),
  lc = (e) => al(e).slice(8, -1),
  Fa = (e) => al(e) === "[object Object]",
  ji = (e) =>
    Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ss = Ai(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ol = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  ic = /-\w/g,
  vt = ol((e) => e.replace(ic, (t) => t.slice(1).toUpperCase())),
  rc = /\B([A-Z])/g,
  En = ol((e) => e.replace(rc, "-$1").toLowerCase()),
  ul = ol((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Tl = ol((e) => (e ? `on${ul(e)}` : "")),
  un = (e, t) => !Object.is(e, t),
  zs = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Ha = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  ci = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Cr
const cl = () =>
  Cr ||
  (Cr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function dl(e) {
  if (ce(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        l = Be(s) ? cc(s) : dl(s)
      if (l) for (const i in l) t[i] = l[i]
    }
    return t
  } else if (Be(e) || Oe(e)) return e
}
const ac = /;(?![^(]*\))/g,
  oc = /:([^]+)/,
  uc = /\/\*[^]*?\*\//g
function cc(e) {
  const t = {}
  return (
    e
      .replace(uc, "")
      .split(ac)
      .forEach((n) => {
        if (n) {
          const s = n.split(oc)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function x(e) {
  let t = ""
  if (Be(e)) t = e
  else if (ce(e))
    for (let n = 0; n < e.length; n++) {
      const s = x(e[n])
      s && (t += s + " ")
    }
  else if (Oe(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const dc =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  fc = Ai(dc)
function Ga(e) {
  return !!e || e === ""
}
const Va = (e) => !!(e && e.__v_isRef === !0),
  Je = (e) =>
    Be(e)
      ? e
      : e == null
        ? ""
        : ce(e) || (Oe(e) && (e.toString === Da || !pe(e.toString)))
          ? Va(e)
            ? Je(e.value)
            : JSON.stringify(e, Wa, 2)
          : String(e),
  Wa = (e, t) =>
    Va(t)
      ? Wa(e, t.value)
      : Bn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, l], i) => ((n[kl(s, i) + " =>"] = l), n),
              {},
            ),
          }
        : za(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => kl(n)) }
          : Yt(t)
            ? kl(t)
            : Oe(t) && !ce(t) && !Fa(t)
              ? String(t)
              : t,
  kl = (e, t = "") => {
    var n
    return Yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let st
class pc {
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
        const l = this.parent.scopes.pop()
        l &&
          l !== this &&
          ((this.parent.scopes[this.index] = l), (l.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function hc() {
  return st
}
let Ae
const Pl = new WeakSet()
class qa {
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
      ((this.flags &= -65), Pl.has(this) && (Pl.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ka(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Er(this), Ya(this)
    const t = Ae,
      n = St
    ;(Ae = this), (St = !0)
    try {
      return this.fn()
    } finally {
      Xa(this), (Ae = t), (St = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ni(t)
      ;(this.deps = this.depsTail = void 0),
        Er(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Pl.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    di(this) && this.run()
  }
  get dirty() {
    return di(this)
  }
}
let Ua = 0,
  ls,
  is
function Ka(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = is), (is = e)
    return
  }
  ;(e.next = ls), (ls = e)
}
function Bi() {
  Ua++
}
function Ri() {
  if (--Ua > 0) return
  if (is) {
    let t = is
    for (is = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; ls; ) {
    let t = ls
    for (ls = void 0; t; ) {
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
function Ya(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function Xa(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const l = s.prevDep
    s.version === -1 ? (s === n && (n = l), Ni(s), gc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = l)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function di(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Ja(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Ja(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === ds) ||
    ((e.globalVersion = ds),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !di(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = Ae,
    s = St
  ;(Ae = e), (St = !0)
  try {
    Ya(e)
    const l = e.fn(e._value)
    ;(t.version === 0 || un(l, e._value)) &&
      ((e.flags |= 128), (e._value = l), t.version++)
  } catch (l) {
    throw (t.version++, l)
  } finally {
    ;(Ae = n), (St = s), Xa(e), (e.flags &= -3)
  }
}
function Ni(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: l } = e
  if (
    (s && ((s.nextSub = l), (e.prevSub = void 0)),
    l && ((l.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) Ni(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function gc(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let St = !0
const Za = []
function qt() {
  Za.push(St), (St = !1)
}
function Ut() {
  const e = Za.pop()
  St = e === void 0 ? !0 : e
}
function Er(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = Ae
    Ae = void 0
    try {
      t()
    } finally {
      Ae = n
    }
  }
}
let ds = 0
class mc {
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
class zi {
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
    if (!Ae || !St || Ae === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== Ae)
      (n = this.activeLink = new mc(Ae, this)),
        Ae.deps
          ? ((n.prevDep = Ae.depsTail),
            (Ae.depsTail.nextDep = n),
            (Ae.depsTail = n))
          : (Ae.deps = Ae.depsTail = n),
        Qa(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = Ae.depsTail),
        (n.nextDep = void 0),
        (Ae.depsTail.nextDep = n),
        (Ae.depsTail = n),
        Ae.deps === n && (Ae.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, ds++, this.notify(t)
  }
  notify(t) {
    Bi()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Ri()
    }
  }
}
function Qa(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Qa(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const fi = new WeakMap(),
  xn = Symbol(""),
  pi = Symbol(""),
  fs = Symbol("")
function qe(e, t, n) {
  if (St && Ae) {
    let s = fi.get(e)
    s || fi.set(e, (s = new Map()))
    let l = s.get(n)
    l || (s.set(n, (l = new zi())), (l.map = s), (l.key = n)), l.track()
  }
}
function Ht(e, t, n, s, l, i) {
  const a = fi.get(e)
  if (!a) {
    ds++
    return
  }
  const r = (o) => {
    o && o.trigger()
  }
  if ((Bi(), t === "clear")) a.forEach(r)
  else {
    const o = ce(e),
      c = o && ji(n)
    if (o && n === "length") {
      const u = Number(s)
      a.forEach((d, p) => {
        ;(p === "length" || p === fs || (!Yt(p) && p >= u)) && r(d)
      })
    } else
      switch (
        ((n !== void 0 || a.has(void 0)) && r(a.get(n)), c && r(a.get(fs)), t)
      ) {
        case "add":
          o ? c && r(a.get("length")) : (r(a.get(xn)), Bn(e) && r(a.get(pi)))
          break
        case "delete":
          o || (r(a.get(xn)), Bn(e) && r(a.get(pi)))
          break
        case "set":
          Bn(e) && r(a.get(xn))
          break
      }
  }
  Ri()
}
function Tn(e) {
  const t = Se(e)
  return t === e ? t : (qe(t, "iterate", fs), mt(e) ? t : t.map(Ge))
}
function fl(e) {
  return qe((e = Se(e)), "iterate", fs), e
}
const bc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Il(this, Symbol.iterator, Ge)
  },
  concat(...e) {
    return Tn(this).concat(...e.map((t) => (ce(t) ? Tn(t) : t)))
  },
  entries() {
    return Il(this, "entries", (e) => ((e[1] = Ge(e[1])), e))
  },
  every(e, t) {
    return Rt(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return Rt(this, "filter", e, t, (n) => n.map(Ge), arguments)
  },
  find(e, t) {
    return Rt(this, "find", e, t, Ge, arguments)
  },
  findIndex(e, t) {
    return Rt(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Rt(this, "findLast", e, t, Ge, arguments)
  },
  findLastIndex(e, t) {
    return Rt(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Rt(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return $l(this, "includes", e)
  },
  indexOf(...e) {
    return $l(this, "indexOf", e)
  },
  join(e) {
    return Tn(this).join(e)
  },
  lastIndexOf(...e) {
    return $l(this, "lastIndexOf", e)
  },
  map(e, t) {
    return Rt(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return Xn(this, "pop")
  },
  push(...e) {
    return Xn(this, "push", e)
  },
  reduce(e, ...t) {
    return Tr(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Tr(this, "reduceRight", e, t)
  },
  shift() {
    return Xn(this, "shift")
  },
  some(e, t) {
    return Rt(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return Xn(this, "splice", e)
  },
  toReversed() {
    return Tn(this).toReversed()
  },
  toSorted(e) {
    return Tn(this).toSorted(e)
  },
  toSpliced(...e) {
    return Tn(this).toSpliced(...e)
  },
  unshift(...e) {
    return Xn(this, "unshift", e)
  },
  values() {
    return Il(this, "values", Ge)
  },
}
function Il(e, t, n) {
  const s = fl(e),
    l = s[t]()
  return (
    s !== e &&
      !mt(e) &&
      ((l._next = l.next),
      (l.next = () => {
        const i = l._next()
        return i.done || (i.value = n(i.value)), i
      })),
    l
  )
}
const vc = Array.prototype
function Rt(e, t, n, s, l, i) {
  const a = fl(e),
    r = a !== e && !mt(e),
    o = a[t]
  if (o !== vc[t]) {
    const d = o.apply(e, i)
    return r ? Ge(d) : d
  }
  let c = n
  a !== e &&
    (r
      ? (c = function (d, p) {
          return n.call(this, Ge(d), p, e)
        })
      : n.length > 2 &&
        (c = function (d, p) {
          return n.call(this, d, p, e)
        }))
  const u = o.call(a, c, s)
  return r && l ? l(u) : u
}
function Tr(e, t, n, s) {
  const l = fl(e)
  let i = n
  return (
    l !== e &&
      (mt(e)
        ? n.length > 3 &&
          (i = function (a, r, o) {
            return n.call(this, a, r, o, e)
          })
        : (i = function (a, r, o) {
            return n.call(this, a, Ge(r), o, e)
          })),
    l[t](i, ...s)
  )
}
function $l(e, t, n) {
  const s = Se(e)
  qe(s, "iterate", fs)
  const l = s[t](...n)
  return (l === -1 || l === !1) && Fi(n[0])
    ? ((n[0] = Se(n[0])), s[t](...n))
    : l
}
function Xn(e, t, n = []) {
  qt(), Bi()
  const s = Se(e)[t].apply(e, n)
  return Ri(), Ut(), s
}
const yc = Ai("__proto__,__v_isRef,__isVue"),
  eo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Yt),
  )
function xc(e) {
  Yt(e) || (e = String(e))
  const t = Se(this)
  return qe(t, "has", e), t.hasOwnProperty(e)
}
class to {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip
    const l = this._isReadonly,
      i = this._isShallow
    if (n === "__v_isReactive") return !l
    if (n === "__v_isReadonly") return l
    if (n === "__v_isShallow") return i
    if (n === "__v_raw")
      return s === (l ? (i ? Mc : io) : i ? lo : so).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const a = ce(t)
    if (!l) {
      let o
      if (a && (o = bc[n])) return o
      if (n === "hasOwnProperty") return xc
    }
    const r = Reflect.get(t, n, Fe(t) ? t : s)
    if ((Yt(n) ? eo.has(n) : yc(n)) || (l || qe(t, "get", n), i)) return r
    if (Fe(r)) {
      const o = a && ji(n) ? r : r.value
      return l && Oe(o) ? gi(o) : o
    }
    return Oe(r) ? (l ? gi(r) : Ss(r)) : r
  }
}
class no extends to {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, l) {
    let i = t[n]
    if (!this._isShallow) {
      const o = dn(i)
      if (
        (!mt(s) && !dn(s) && ((i = Se(i)), (s = Se(s))),
        !ce(t) && Fe(i) && !Fe(s))
      )
        return o || (i.value = s), !0
    }
    const a = ce(t) && ji(n) ? Number(n) < t.length : Ce(t, n),
      r = Reflect.set(t, n, s, Fe(t) ? t : l)
    return (
      t === Se(l) && (a ? un(s, i) && Ht(t, "set", n, s) : Ht(t, "add", n, s)),
      r
    )
  }
  deleteProperty(t, n) {
    const s = Ce(t, n)
    t[n]
    const l = Reflect.deleteProperty(t, n)
    return l && s && Ht(t, "delete", n, void 0), l
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Yt(n) || !eo.has(n)) && qe(t, "has", n), s
  }
  ownKeys(t) {
    return qe(t, "iterate", ce(t) ? "length" : xn), Reflect.ownKeys(t)
  }
}
class wc extends to {
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
const Sc = new no(),
  Cc = new wc(),
  Ec = new no(!0)
const hi = (e) => e,
  Ps = (e) => Reflect.getPrototypeOf(e)
function Tc(e, t, n) {
  return function (...s) {
    const l = this.__v_raw,
      i = Se(l),
      a = Bn(i),
      r = e === "entries" || (e === Symbol.iterator && a),
      o = e === "keys" && a,
      c = l[e](...s),
      u = n ? hi : t ? qs : Ge
    return (
      !t && qe(i, "iterate", o ? pi : xn),
      {
        next() {
          const { value: d, done: p } = c.next()
          return p
            ? { value: d, done: p }
            : { value: r ? [u(d[0]), u(d[1])] : u(d), done: p }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Is(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function kc(e, t) {
  const n = {
    get(l) {
      const i = this.__v_raw,
        a = Se(i),
        r = Se(l)
      e || (un(l, r) && qe(a, "get", l), qe(a, "get", r))
      const { has: o } = Ps(a),
        c = t ? hi : e ? qs : Ge
      if (o.call(a, l)) return c(i.get(l))
      if (o.call(a, r)) return c(i.get(r))
      i !== a && i.get(l)
    },
    get size() {
      const l = this.__v_raw
      return !e && qe(Se(l), "iterate", xn), l.size
    },
    has(l) {
      const i = this.__v_raw,
        a = Se(i),
        r = Se(l)
      return (
        e || (un(l, r) && qe(a, "has", l), qe(a, "has", r)),
        l === r ? i.has(l) : i.has(l) || i.has(r)
      )
    },
    forEach(l, i) {
      const a = this,
        r = a.__v_raw,
        o = Se(r),
        c = t ? hi : e ? qs : Ge
      return (
        !e && qe(o, "iterate", xn),
        r.forEach((u, d) => l.call(i, c(u), c(d), a))
      )
    },
  }
  return (
    Ye(
      n,
      e
        ? {
            add: Is("add"),
            set: Is("set"),
            delete: Is("delete"),
            clear: Is("clear"),
          }
        : {
            add(l) {
              !t && !mt(l) && !dn(l) && (l = Se(l))
              const i = Se(this)
              return (
                Ps(i).has.call(i, l) || (i.add(l), Ht(i, "add", l, l)), this
              )
            },
            set(l, i) {
              !t && !mt(i) && !dn(i) && (i = Se(i))
              const a = Se(this),
                { has: r, get: o } = Ps(a)
              let c = r.call(a, l)
              c || ((l = Se(l)), (c = r.call(a, l)))
              const u = o.call(a, l)
              return (
                a.set(l, i),
                c ? un(i, u) && Ht(a, "set", l, i) : Ht(a, "add", l, i),
                this
              )
            },
            delete(l) {
              const i = Se(this),
                { has: a, get: r } = Ps(i)
              let o = a.call(i, l)
              o || ((l = Se(l)), (o = a.call(i, l))), r && r.call(i, l)
              const c = i.delete(l)
              return o && Ht(i, "delete", l, void 0), c
            },
            clear() {
              const l = Se(this),
                i = l.size !== 0,
                a = l.clear()
              return i && Ht(l, "clear", void 0, void 0), a
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
      n[l] = Tc(l, e, t)
    }),
    n
  )
}
function _i(e, t) {
  const n = kc(e, t)
  return (s, l, i) =>
    l === "__v_isReactive"
      ? !e
      : l === "__v_isReadonly"
        ? e
        : l === "__v_raw"
          ? s
          : Reflect.get(Ce(n, l) && l in s ? n : s, l, i)
}
const Pc = { get: _i(!1, !1) },
  Ic = { get: _i(!1, !0) },
  $c = { get: _i(!0, !1) }
const so = new WeakMap(),
  lo = new WeakMap(),
  io = new WeakMap(),
  Mc = new WeakMap()
function Ac(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ac(lc(e))
}
function Ss(e) {
  return dn(e) ? e : Di(e, !1, Sc, Pc, so)
}
function ro(e) {
  return Di(e, !1, Ec, Ic, lo)
}
function gi(e) {
  return Di(e, !0, Cc, $c, io)
}
function Di(e, t, n, s, l) {
  if (!Oe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = Oc(e)
  if (i === 0) return e
  const a = l.get(e)
  if (a) return a
  const r = new Proxy(e, i === 2 ? s : n)
  return l.set(e, r), r
}
function Rn(e) {
  return dn(e) ? Rn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function dn(e) {
  return !!(e && e.__v_isReadonly)
}
function mt(e) {
  return !!(e && e.__v_isShallow)
}
function Fi(e) {
  return e ? !!e.__v_raw : !1
}
function Se(e) {
  const t = e && e.__v_raw
  return t ? Se(t) : e
}
function Lc(e) {
  return (
    !Ce(e, "__v_skip") && Object.isExtensible(e) && Ha(e, "__v_skip", !0), e
  )
}
const Ge = (e) => (Oe(e) ? Ss(e) : e),
  qs = (e) => (Oe(e) ? gi(e) : e)
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1
}
function V(e) {
  return ao(e, !1)
}
function jc(e) {
  return ao(e, !0)
}
function ao(e, t) {
  return Fe(e) ? e : new Bc(e, t)
}
class Bc {
  constructor(t, n) {
    ;(this.dep = new zi()),
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
      s = this.__v_isShallow || mt(t) || dn(t)
    ;(t = s ? t : Se(t)),
      un(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Ge(t)),
        this.dep.trigger())
  }
}
function Z(e) {
  return Fe(e) ? e.value : e
}
const Rc = {
  get: (e, t, n) => (t === "__v_raw" ? e : Z(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const l = e[t]
    return Fe(l) && !Fe(n) ? ((l.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function oo(e) {
  return Rn(e) ? e : new Proxy(e, Rc)
}
class Nc {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new zi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ds - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ae !== this))
      return Ka(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return Ja(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function zc(e, t, n = !1) {
  let s, l
  return pe(e) ? (s = e) : ((s = e.get), (l = e.set)), new Nc(s, l, n)
}
const $s = {},
  Us = new WeakMap()
let yn
function _c(e, t = !1, n = yn) {
  if (n) {
    let s = Us.get(n)
    s || Us.set(n, (s = [])), s.push(e)
  }
}
function Dc(e, t, n = $e) {
  const {
      immediate: s,
      deep: l,
      once: i,
      scheduler: a,
      augmentJob: r,
      call: o,
    } = n,
    c = (S) => (l ? S : mt(S) || l === !1 || l === 0 ? Gt(S, 1) : Gt(S))
  let u,
    d,
    p,
    h,
    m = !1,
    b = !1
  if (
    (Fe(e)
      ? ((d = () => e.value), (m = mt(e)))
      : Rn(e)
        ? ((d = () => c(e)), (m = !0))
        : ce(e)
          ? ((b = !0),
            (m = e.some((S) => Rn(S) || mt(S))),
            (d = () =>
              e.map((S) => {
                if (Fe(S)) return S.value
                if (Rn(S)) return c(S)
                if (pe(S)) return o ? o(S, 2) : S()
              })))
          : pe(e)
            ? t
              ? (d = o ? () => o(e, 2) : e)
              : (d = () => {
                  if (p) {
                    qt()
                    try {
                      p()
                    } finally {
                      Ut()
                    }
                  }
                  const S = yn
                  yn = u
                  try {
                    return o ? o(e, 3, [h]) : e(h)
                  } finally {
                    yn = S
                  }
                })
            : (d = Lt),
    t && l)
  ) {
    const S = d,
      T = l === !0 ? 1 / 0 : l
    d = () => Gt(S(), T)
  }
  const k = hc(),
    w = () => {
      u.stop(), k && k.active && Li(k.effects, u)
    }
  if (i && t) {
    const S = t
    t = (...T) => {
      S(...T), w()
    }
  }
  let g = b ? new Array(e.length).fill($s) : $s
  const v = (S) => {
    if (!(!(u.flags & 1) || (!u.dirty && !S)))
      if (t) {
        const T = u.run()
        if (l || m || (b ? T.some((M, E) => un(M, g[E])) : un(T, g))) {
          p && p()
          const M = yn
          yn = u
          try {
            const E = [T, g === $s ? void 0 : b && g[0] === $s ? [] : g, h]
            ;(g = T), o ? o(t, 3, E) : t(...E)
          } finally {
            yn = M
          }
        }
      } else u.run()
  }
  return (
    r && r(v),
    (u = new qa(d)),
    (u.scheduler = a ? () => a(v, !1) : v),
    (h = (S) => _c(S, !1, u)),
    (p = u.onStop =
      () => {
        const S = Us.get(u)
        if (S) {
          if (o) o(S, 4)
          else for (const T of S) T()
          Us.delete(u)
        }
      }),
    t ? (s ? v(!0) : (g = u.run())) : a ? a(v.bind(null, !0), !0) : u.run(),
    (w.pause = u.pause.bind(u)),
    (w.resume = u.resume.bind(u)),
    (w.stop = w),
    w
  )
}
function Gt(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !Oe(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e
  if ((n.set(e, t), t--, Fe(e))) Gt(e.value, t, n)
  else if (ce(e)) for (let s = 0; s < e.length; s++) Gt(e[s], t, n)
  else if (za(e) || Bn(e))
    e.forEach((s) => {
      Gt(s, t, n)
    })
  else if (Fa(e)) {
    for (const s in e) Gt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Gt(e[s], t, n)
  }
  return e
}
function Cs(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (l) {
    pl(l, t, n)
  }
}
function Bt(e, t, n, s) {
  if (pe(e)) {
    const l = Cs(e, t, n, s)
    return (
      l &&
        _a(l) &&
        l.catch((i) => {
          pl(i, t, n)
        }),
      l
    )
  }
  if (ce(e)) {
    const l = []
    for (let i = 0; i < e.length; i++) l.push(Bt(e[i], t, n, s))
    return l
  }
}
function pl(e, t, n, s = !0) {
  const l = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: a } =
      (t && t.appContext.config) || $e
  if (t) {
    let r = t.parent
    const o = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; r; ) {
      const u = r.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, o, c) === !1) return
      }
      r = r.parent
    }
    if (i) {
      qt(), Cs(i, null, 10, [e, o, c]), Ut()
      return
    }
  }
  Fc(e, n, l, s, a)
}
function Fc(e, t, n, s = !0, l = !1) {
  if (l) throw e
  console.error(e)
}
const Ze = []
let Mt = -1
const Nn = []
let sn = null,
  Mn = 0
const uo = Promise.resolve()
let Ks = null
function hl(e) {
  const t = Ks || uo
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Hc(e) {
  let t = Mt + 1,
    n = Ze.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      l = Ze[s],
      i = ps(l)
    i < e || (i === e && l.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Hi(e) {
  if (!(e.flags & 1)) {
    const t = ps(e),
      n = Ze[Ze.length - 1]
    !n || (!(e.flags & 2) && t >= ps(n)) ? Ze.push(e) : Ze.splice(Hc(t), 0, e),
      (e.flags |= 1),
      co()
  }
}
function co() {
  Ks || (Ks = uo.then(po))
}
function Gc(e) {
  ce(e)
    ? Nn.push(...e)
    : sn && e.id === -1
      ? sn.splice(Mn + 1, 0, e)
      : e.flags & 1 || (Nn.push(e), (e.flags |= 1)),
    co()
}
function kr(e, t, n = Mt + 1) {
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
function fo(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort((n, s) => ps(n) - ps(s))
    if (((Nn.length = 0), sn)) {
      sn.push(...t)
      return
    }
    for (sn = t, Mn = 0; Mn < sn.length; Mn++) {
      const n = sn[Mn]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(sn = null), (Mn = 0)
  }
}
const ps = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function po(e) {
  try {
    for (Mt = 0; Mt < Ze.length; Mt++) {
      const t = Ze[Mt]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Cs(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Mt < Ze.length; Mt++) {
      const t = Ze[Mt]
      t && (t.flags &= -2)
    }
    ;(Mt = -1),
      (Ze.length = 0),
      fo(),
      (Ks = null),
      (Ze.length || Nn.length) && po()
  }
}
let Ve = null,
  ho = null
function Ys(e) {
  const t = Ve
  return (Ve = e), (ho = (e && e.type.__scopeId) || null), t
}
function ae(e, t = Ve, n) {
  if (!t || e._n) return e
  const s = (...l) => {
    s._d && Zs(-1)
    const i = Ys(t)
    let a
    try {
      a = e(...l)
    } finally {
      Ys(i), s._d && Zs(1)
    }
    return a
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function go(e, t) {
  if (Ve === null) return e
  const n = vl(Ve),
    s = e.dirs || (e.dirs = [])
  for (let l = 0; l < t.length; l++) {
    let [i, a, r, o = $e] = t[l]
    i &&
      (pe(i) && (i = { mounted: i, updated: i }),
      i.deep && Gt(a),
      s.push({
        dir: i,
        instance: n,
        value: a,
        oldValue: void 0,
        arg: r,
        modifiers: o,
      }))
  }
  return e
}
function gn(e, t, n, s) {
  const l = e.dirs,
    i = t && t.dirs
  for (let a = 0; a < l.length; a++) {
    const r = l[a]
    i && (r.oldValue = i[a].value)
    let o = r.dir[s]
    o && (qt(), Bt(o, n, 8, [e.el, r, e, t]), Ut())
  }
}
const Vc = Symbol("_vte"),
  Wc = (e) => e.__isTeleport,
  qc = Symbol("_leaveCb")
function Gi(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Gi(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function ft(e, t) {
  return pe(e) ? Ye({ name: e.name }, t, { setup: e }) : e
}
function Uc() {
  const e = _o()
  return e
    ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++
    : ""
}
function mo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const Xs = new WeakMap()
function rs(e, t, n, s, l = !1) {
  if (ce(e)) {
    e.forEach((m, b) => rs(m, t && (ce(t) ? t[b] : t), n, s, l))
    return
  }
  if (zn(s) && !l) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      rs(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? vl(s.component) : s.el,
    a = l ? null : i,
    { i: r, r: o } = e,
    c = t && t.r,
    u = r.refs === $e ? (r.refs = {}) : r.refs,
    d = r.setupState,
    p = Se(d),
    h = d === $e ? Na : (m) => Ce(p, m)
  if (c != null && c !== o) {
    if ((Pr(t), Be(c))) (u[c] = null), h(c) && (d[c] = null)
    else if (Fe(c)) {
      c.value = null
      const m = t
      m.k && (u[m.k] = null)
    }
  }
  if (pe(o)) Cs(o, r, 12, [a, u])
  else {
    const m = Be(o),
      b = Fe(o)
    if (m || b) {
      const k = () => {
        if (e.f) {
          const w = m ? (h(o) ? d[o] : u[o]) : o.value
          if (l) ce(w) && Li(w, i)
          else if (ce(w)) w.includes(i) || w.push(i)
          else if (m) (u[o] = [i]), h(o) && (d[o] = u[o])
          else {
            const g = [i]
            ;(o.value = g), e.k && (u[e.k] = g)
          }
        } else
          m
            ? ((u[o] = a), h(o) && (d[o] = a))
            : b && ((o.value = a), e.k && (u[e.k] = a))
      }
      if (a) {
        const w = () => {
          k(), Xs.delete(e)
        }
        ;(w.id = -1), Xs.set(e, w), at(w, n)
      } else Pr(e), k()
    }
  }
}
function Pr(e) {
  const t = Xs.get(e)
  t && ((t.flags |= 8), Xs.delete(e))
}
cl().requestIdleCallback
cl().cancelIdleCallback
const zn = (e) => !!e.type.__asyncLoader,
  bo = (e) => e.type.__isKeepAlive
function Kc(e, t) {
  vo(e, "a", t)
}
function Yc(e, t) {
  vo(e, "da", t)
}
function vo(e, t, n = Ue) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let l = n
      for (; l; ) {
        if (l.isDeactivated) return
        l = l.parent
      }
      return e()
    })
  if ((gl(t, s, n), n)) {
    let l = n.parent
    for (; l && l.parent; ) bo(l.parent.vnode) && Xc(s, t, n, l), (l = l.parent)
  }
}
function Xc(e, t, n, s) {
  const l = gl(t, e, s, !0)
  fn(() => {
    Li(s[t], l)
  }, n)
}
function gl(e, t, n = Ue, s = !1) {
  if (n) {
    const l = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...a) => {
          qt()
          const r = Es(n),
            o = Bt(t, n, e, a)
          return r(), Ut(), o
        })
    return s ? l.unshift(i) : l.push(i), i
  }
}
const Xt =
    (e) =>
    (t, n = Ue) => {
      ;(!ms || e === "sp") && gl(e, (...s) => t(...s), n)
    },
  Jc = Xt("bm"),
  We = Xt("m"),
  Vi = Xt("bu"),
  Wi = Xt("u"),
  qi = Xt("bum"),
  fn = Xt("um"),
  Zc = Xt("sp"),
  Qc = Xt("rtg"),
  ed = Xt("rtc")
function td(e, t = Ue) {
  gl("ec", e, t)
}
const Ui = "components",
  nd = "directives"
function sd(e, t) {
  return Ki(Ui, e, !0, t) || e
}
const yo = Symbol.for("v-ndc")
function kn(e) {
  return Be(e) ? Ki(Ui, e, !1) || e : e || yo
}
function ld(e) {
  return Ki(nd, e)
}
function Ki(e, t, n = !0, s = !1) {
  const l = Ve || Ue
  if (l) {
    const i = l.type
    if (e === Ui) {
      const r = qd(i, !1)
      if (r && (r === t || r === vt(t) || r === ul(vt(t)))) return i
    }
    const a = Ir(l[e] || i[e], t) || Ir(l.appContext[e], t)
    return !a && s ? i : a
  }
}
function Ir(e, t) {
  return e && (e[t] || e[vt(t)] || e[ul(vt(t))])
}
function Wt(e, t, n, s) {
  let l
  const i = n,
    a = ce(e)
  if (a || Be(e)) {
    const r = a && Rn(e)
    let o = !1,
      c = !1
    r && ((o = !mt(e)), (c = dn(e)), (e = fl(e))), (l = new Array(e.length))
    for (let u = 0, d = e.length; u < d; u++)
      l[u] = t(o ? (c ? qs(Ge(e[u])) : Ge(e[u])) : e[u], u, void 0, i)
  } else if (typeof e == "number") {
    l = new Array(e)
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, i)
  } else if (Oe(e))
    if (e[Symbol.iterator]) l = Array.from(e, (r, o) => t(r, o, void 0, i))
    else {
      const r = Object.keys(e)
      l = new Array(r.length)
      for (let o = 0, c = r.length; o < c; o++) {
        const u = r[o]
        l[o] = t(e[u], u, o, i)
      }
    }
  else l = []
  return l
}
function it(e, t, n = {}, s, l) {
  if (Ve.ce || (Ve.parent && zn(Ve.parent) && Ve.parent.ce)) {
    const c = Object.keys(n).length > 0
    return L(), ge(Pe, null, [q("slot", n, s && s())], c ? -2 : 64)
  }
  let i = e[t]
  i && i._c && (i._d = !1), L()
  const a = i && xo(i(n)),
    r = n.key || (a && a.key),
    o = ge(
      Pe,
      { key: (r && !Yt(r) ? r : `_${t}`) + (!a && s ? "_fb" : "") },
      a || (s ? s() : []),
      a && e._ === 1 ? 64 : -2,
    )
  return (
    !l && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    o
  )
}
function xo(e) {
  return e.some((t) =>
    gs(t) ? !(t.type === Kt || (t.type === Pe && !xo(t.children))) : !0,
  )
    ? e
    : null
}
const mi = (e) => (e ? (Do(e) ? vl(e) : mi(e.parent)) : null),
  as = Ye(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mi(e.parent),
    $root: (e) => mi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => So(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Hi(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = hl.bind(e.proxy)),
    $watch: (e) => Td.bind(e),
  }),
  Ml = (e, t) => e !== $e && !e.__isScriptSetup && Ce(e, t),
  id = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0
      const {
        ctx: n,
        setupState: s,
        data: l,
        props: i,
        accessCache: a,
        type: r,
        appContext: o,
      } = e
      let c
      if (t[0] !== "$") {
        const h = a[t]
        if (h !== void 0)
          switch (h) {
            case 1:
              return s[t]
            case 2:
              return l[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Ml(s, t)) return (a[t] = 1), s[t]
          if (l !== $e && Ce(l, t)) return (a[t] = 2), l[t]
          if ((c = e.propsOptions[0]) && Ce(c, t)) return (a[t] = 3), i[t]
          if (n !== $e && Ce(n, t)) return (a[t] = 4), n[t]
          bi && (a[t] = 0)
        }
      }
      const u = as[t]
      let d, p
      if (u) return t === "$attrs" && qe(e.attrs, "get", ""), u(e)
      if ((d = r.__cssModules) && (d = d[t])) return d
      if (n !== $e && Ce(n, t)) return (a[t] = 4), n[t]
      if (((p = o.config.globalProperties), Ce(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: l, ctx: i } = e
      return Ml(l, t)
        ? ((l[t] = n), !0)
        : s !== $e && Ce(s, t)
          ? ((s[t] = n), !0)
          : Ce(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: l,
          propsOptions: i,
          type: a,
        },
      },
      r,
    ) {
      let o, c
      return !!(
        n[r] ||
        (e !== $e && r[0] !== "$" && Ce(e, r)) ||
        Ml(t, r) ||
        ((o = i[0]) && Ce(o, r)) ||
        Ce(s, r) ||
        Ce(as, r) ||
        Ce(l.config.globalProperties, r) ||
        ((c = a.__cssModules) && c[r])
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Ce(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function $r(e) {
  return ce(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let bi = !0
function rd(e) {
  const t = So(e),
    n = e.proxy,
    s = e.ctx
  ;(bi = !1), t.beforeCreate && Mr(t.beforeCreate, e, "bc")
  const {
    data: l,
    computed: i,
    methods: a,
    watch: r,
    provide: o,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: h,
    updated: m,
    activated: b,
    deactivated: k,
    beforeDestroy: w,
    beforeUnmount: g,
    destroyed: v,
    unmounted: S,
    render: T,
    renderTracked: M,
    renderTriggered: E,
    errorCaptured: A,
    serverPrefetch: I,
    expose: $,
    inheritAttrs: j,
    components: F,
    directives: W,
    filters: de,
  } = t
  if ((c && ad(c, s, null), a))
    for (const z in a) {
      const B = a[z]
      pe(B) && (s[z] = B.bind(n))
    }
  if (l) {
    const z = l.call(n, n)
    Oe(z) && (e.data = Ss(z))
  }
  if (((bi = !0), i))
    for (const z in i) {
      const B = i[z],
        ye = pe(B) ? B.bind(n, n) : pe(B.get) ? B.get.bind(n, n) : Lt,
        me = !pe(B) && pe(B.set) ? B.set.bind(n) : Lt,
        Le = se({ get: ye, set: me })
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (je) => (Le.value = je),
      })
    }
  if (r) for (const z in r) wo(r[z], s, n, z)
  if (o) {
    const z = pe(o) ? o.call(n) : o
    Reflect.ownKeys(z).forEach((B) => {
      bt(B, z[B])
    })
  }
  u && Mr(u, e, "c")
  function O(z, B) {
    ce(B) ? B.forEach((ye) => z(ye.bind(n))) : B && z(B.bind(n))
  }
  if (
    (O(Jc, d),
    O(We, p),
    O(Vi, h),
    O(Wi, m),
    O(Kc, b),
    O(Yc, k),
    O(td, A),
    O(ed, M),
    O(Qc, E),
    O(qi, g),
    O(fn, S),
    O(Zc, I),
    ce($))
  )
    if ($.length) {
      const z = e.exposed || (e.exposed = {})
      $.forEach((B) => {
        Object.defineProperty(z, B, {
          get: () => n[B],
          set: (ye) => (n[B] = ye),
          enumerable: !0,
        })
      })
    } else e.exposed || (e.exposed = {})
  T && e.render === Lt && (e.render = T),
    j != null && (e.inheritAttrs = j),
    F && (e.components = F),
    W && (e.directives = W),
    I && mo(e)
}
function ad(e, t, n = Lt) {
  ce(e) && (e = vi(e))
  for (const s in e) {
    const l = e[s]
    let i
    Oe(l)
      ? "default" in l
        ? (i = ze(l.from || s, l.default, !0))
        : (i = ze(l.from || s))
      : (i = ze(l)),
      Fe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (a) => (i.value = a),
          })
        : (t[s] = i)
  }
}
function Mr(e, t, n) {
  Bt(ce(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function wo(e, t, n, s) {
  let l = s.includes(".") ? jo(n, s) : () => n[s]
  if (Be(e)) {
    const i = t[e]
    pe(i) && cn(l, i)
  } else if (pe(e)) cn(l, e.bind(n))
  else if (Oe(e))
    if (ce(e)) e.forEach((i) => wo(i, t, n, s))
    else {
      const i = pe(e.handler) ? e.handler.bind(n) : t[e.handler]
      pe(i) && cn(l, i, e)
    }
}
function So(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: l,
      optionsCache: i,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    r = i.get(t)
  let o
  return (
    r
      ? (o = r)
      : !l.length && !n && !s
        ? (o = t)
        : ((o = {}),
          l.length && l.forEach((c) => Js(o, c, a, !0)),
          Js(o, t, a)),
    Oe(t) && i.set(t, o),
    o
  )
}
function Js(e, t, n, s = !1) {
  const { mixins: l, extends: i } = t
  i && Js(e, i, n, !0), l && l.forEach((a) => Js(e, a, n, !0))
  for (const a in t)
    if (!(s && a === "expose")) {
      const r = od[a] || (n && n[a])
      e[a] = r ? r(e[a], t[a]) : t[a]
    }
  return e
}
const od = {
  data: Ar,
  props: Or,
  emits: Or,
  methods: ns,
  computed: ns,
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
  components: ns,
  directives: ns,
  watch: cd,
  provide: Ar,
  inject: ud,
}
function Ar(e, t) {
  return t
    ? e
      ? function () {
          return Ye(
            pe(e) ? e.call(this, this) : e,
            pe(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function ud(e, t) {
  return ns(vi(e), vi(t))
}
function vi(e) {
  if (ce(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function ns(e, t) {
  return e ? Ye(Object.create(null), e, t) : t
}
function Or(e, t) {
  return e
    ? ce(e) && ce(t)
      ? [...new Set([...e, ...t])]
      : Ye(Object.create(null), $r(e), $r(t ?? {}))
    : t
}
function cd(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Ye(Object.create(null), e)
  for (const s in t) n[s] = Xe(e[s], t[s])
  return n
}
function Co() {
  return {
    app: null,
    config: {
      isNativeTag: Na,
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
let dd = 0
function fd(e, t) {
  return function (s, l = null) {
    pe(s) || (s = Ye({}, s)), l != null && !Oe(l) && (l = null)
    const i = Co(),
      a = new WeakSet(),
      r = []
    let o = !1
    const c = (i.app = {
      _uid: dd++,
      _component: s,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Kd,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          a.has(u) ||
            (u && pe(u.install)
              ? (a.add(u), u.install(c, ...d))
              : pe(u) && (a.add(u), u(c, ...d))),
          c
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c
      },
      component(u, d) {
        return d ? ((i.components[u] = d), c) : i.components[u]
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), c) : i.directives[u]
      },
      mount(u, d, p) {
        if (!o) {
          const h = c._ceVNode || q(s, l)
          return (
            (h.appContext = i),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            e(h, u, p),
            (o = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            vl(h.component)
          )
        }
      },
      onUnmount(u) {
        r.push(u)
      },
      unmount() {
        o &&
          (Bt(r, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__)
      },
      provide(u, d) {
        return (i.provides[u] = d), c
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
function ze(e, t, n = !1) {
  const s = _o()
  if (s || _n) {
    let l = _n
      ? _n._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (l && e in l) return l[e]
    if (arguments.length > 1) return n && pe(t) ? t.call(s && s.proxy) : t
  }
}
const Eo = {},
  To = () => Object.create(Eo),
  ko = (e) => Object.getPrototypeOf(e) === Eo
function pd(e, t, n, s = !1) {
  const l = {},
    i = To()
  ;(e.propsDefaults = Object.create(null)), Po(e, t, l, i)
  for (const a in e.propsOptions[0]) a in l || (l[a] = void 0)
  n ? (e.props = s ? l : ro(l)) : e.type.props ? (e.props = l) : (e.props = i),
    (e.attrs = i)
}
function hd(e, t, n, s) {
  const {
      props: l,
      attrs: i,
      vnode: { patchFlag: a },
    } = e,
    r = Se(l),
    [o] = e.propsOptions
  let c = !1
  if ((s || a > 0) && !(a & 16)) {
    if (a & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let p = u[d]
        if (ml(e.emitsOptions, p)) continue
        const h = t[p]
        if (o)
          if (Ce(i, p)) h !== i[p] && ((i[p] = h), (c = !0))
          else {
            const m = vt(p)
            l[m] = yi(o, r, m, h, e, !1)
          }
        else h !== i[p] && ((i[p] = h), (c = !0))
      }
    }
  } else {
    Po(e, t, l, i) && (c = !0)
    let u
    for (const d in r)
      (!t || (!Ce(t, d) && ((u = En(d)) === d || !Ce(t, u)))) &&
        (o
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (l[d] = yi(o, r, d, void 0, e, !0))
          : delete l[d])
    if (i !== r) for (const d in i) (!t || !Ce(t, d)) && (delete i[d], (c = !0))
  }
  c && Ht(e.attrs, "set", "")
}
function Po(e, t, n, s) {
  const [l, i] = e.propsOptions
  let a = !1,
    r
  if (t)
    for (let o in t) {
      if (ss(o)) continue
      const c = t[o]
      let u
      l && Ce(l, (u = vt(o)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((r || (r = {}))[u] = c)
        : ml(e.emitsOptions, o) ||
          ((!(o in s) || c !== s[o]) && ((s[o] = c), (a = !0)))
    }
  if (i) {
    const o = Se(n),
      c = r || $e
    for (let u = 0; u < i.length; u++) {
      const d = i[u]
      n[d] = yi(l, o, d, c[d], e, !Ce(c, d))
    }
  }
  return a
}
function yi(e, t, n, s, l, i) {
  const a = e[n]
  if (a != null) {
    const r = Ce(a, "default")
    if (r && s === void 0) {
      const o = a.default
      if (a.type !== Function && !a.skipFactory && pe(o)) {
        const { propsDefaults: c } = l
        if (n in c) s = c[n]
        else {
          const u = Es(l)
          ;(s = c[n] = o.call(null, t)), u()
        }
      } else s = o
      l.ce && l.ce._setProp(n, s)
    }
    a[0] && (i && !r ? (s = !1) : a[1] && (s === "" || s === En(n)) && (s = !0))
  }
  return s
}
const gd = new WeakMap()
function Io(e, t, n = !1) {
  const s = n ? gd : t.propsCache,
    l = s.get(e)
  if (l) return l
  const i = e.props,
    a = {},
    r = []
  let o = !1
  if (!pe(e)) {
    const u = (d) => {
      o = !0
      const [p, h] = Io(d, t, !0)
      Ye(a, p), h && r.push(...h)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!i && !o) return Oe(e) && s.set(e, jn), jn
  if (ce(i))
    for (let u = 0; u < i.length; u++) {
      const d = vt(i[u])
      Lr(d) && (a[d] = $e)
    }
  else if (i)
    for (const u in i) {
      const d = vt(u)
      if (Lr(d)) {
        const p = i[u],
          h = (a[d] = ce(p) || pe(p) ? { type: p } : Ye({}, p)),
          m = h.type
        let b = !1,
          k = !0
        if (ce(m))
          for (let w = 0; w < m.length; ++w) {
            const g = m[w],
              v = pe(g) && g.name
            if (v === "Boolean") {
              b = !0
              break
            } else v === "String" && (k = !1)
          }
        else b = pe(m) && m.name === "Boolean"
        ;(h[0] = b), (h[1] = k), (b || Ce(h, "default")) && r.push(d)
      }
    }
  const c = [a, r]
  return Oe(e) && s.set(e, c), c
}
function Lr(e) {
  return e[0] !== "$" && !ss(e)
}
const Yi = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Xi = (e) => (ce(e) ? e.map(At) : [At(e)]),
  md = (e, t, n) => {
    if (t._n) return t
    const s = ae((...l) => Xi(t(...l)), n)
    return (s._c = !1), s
  },
  $o = (e, t, n) => {
    const s = e._ctx
    for (const l in e) {
      if (Yi(l)) continue
      const i = e[l]
      if (pe(i)) t[l] = md(l, i, s)
      else if (i != null) {
        const a = Xi(i)
        t[l] = () => a
      }
    }
  },
  Mo = (e, t) => {
    const n = Xi(t)
    e.slots.default = () => n
  },
  Ao = (e, t, n) => {
    for (const s in t) (n || !Yi(s)) && (e[s] = t[s])
  },
  bd = (e, t, n) => {
    const s = (e.slots = To())
    if (e.vnode.shapeFlag & 32) {
      const l = t._
      l ? (Ao(s, t, n), n && Ha(s, "_", l, !0)) : $o(t, s)
    } else t && Mo(e, t)
  },
  vd = (e, t, n) => {
    const { vnode: s, slots: l } = e
    let i = !0,
      a = $e
    if (s.shapeFlag & 32) {
      const r = t._
      r
        ? n && r === 1
          ? (i = !1)
          : Ao(l, t, n)
        : ((i = !t.$stable), $o(t, l)),
        (a = t)
    } else t && (Mo(e, t), (a = { default: 1 }))
    if (i) for (const r in l) !Yi(r) && a[r] == null && delete l[r]
  },
  at = Ld
function yd(e) {
  return xd(e)
}
function xd(e, t) {
  const n = cl()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: l,
      patchProp: i,
      createElement: a,
      createText: r,
      createComment: o,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: p,
      setScopeId: h = Lt,
      insertStaticContent: m,
    } = e,
    b = (
      y,
      C,
      P,
      _ = null,
      D = null,
      N = null,
      J = void 0,
      Y = null,
      U = !!C.dynamicChildren,
    ) => {
      if (y === C) return
      y && !Jn(y, C) && ((_ = R(y)), je(y, D, N, !0), (y = null)),
        C.patchFlag === -2 && ((U = !1), (C.dynamicChildren = null))
      const { type: H, ref: ie, shapeFlag: Q } = C
      switch (H) {
        case bl:
          k(y, C, P, _)
          break
        case Kt:
          w(y, C, P, _)
          break
        case _s:
          y == null && g(C, P, _, J)
          break
        case Pe:
          F(y, C, P, _, D, N, J, Y, U)
          break
        default:
          Q & 1
            ? T(y, C, P, _, D, N, J, Y, U)
            : Q & 6
              ? W(y, C, P, _, D, N, J, Y, U)
              : (Q & 64 || Q & 128) && H.process(y, C, P, _, D, N, J, Y, U, ne)
      }
      ie != null && D
        ? rs(ie, y && y.ref, N, C || y, !C)
        : ie == null && y && y.ref != null && rs(y.ref, null, N, y, !0)
    },
    k = (y, C, P, _) => {
      if (y == null) s((C.el = r(C.children)), P, _)
      else {
        const D = (C.el = y.el)
        C.children !== y.children && c(D, C.children)
      }
    },
    w = (y, C, P, _) => {
      y == null ? s((C.el = o(C.children || "")), P, _) : (C.el = y.el)
    },
    g = (y, C, P, _) => {
      ;[y.el, y.anchor] = m(y.children, C, P, _, y.el, y.anchor)
    },
    v = ({ el: y, anchor: C }, P, _) => {
      let D
      for (; y && y !== C; ) (D = p(y)), s(y, P, _), (y = D)
      s(C, P, _)
    },
    S = ({ el: y, anchor: C }) => {
      let P
      for (; y && y !== C; ) (P = p(y)), l(y), (y = P)
      l(C)
    },
    T = (y, C, P, _, D, N, J, Y, U) => {
      C.type === "svg" ? (J = "svg") : C.type === "math" && (J = "mathml"),
        y == null ? M(C, P, _, D, N, J, Y, U) : I(y, C, D, N, J, Y, U)
    },
    M = (y, C, P, _, D, N, J, Y) => {
      let U, H
      const { props: ie, shapeFlag: Q, transition: le, dirs: ue } = y
      if (
        ((U = y.el = a(y.type, N, ie && ie.is, ie)),
        Q & 8
          ? u(U, y.children)
          : Q & 16 && A(y.children, U, null, _, D, Al(y, N), J, Y),
        ue && gn(y, null, _, "created"),
        E(U, y, y.scopeId, J, _),
        ie)
      ) {
        for (const Me in ie)
          Me !== "value" && !ss(Me) && i(U, Me, null, ie[Me], N, _)
        "value" in ie && i(U, "value", null, ie.value, N),
          (H = ie.onVnodeBeforeMount) && It(H, _, y)
      }
      ue && gn(y, null, _, "beforeMount")
      const xe = wd(D, le)
      xe && le.beforeEnter(U),
        s(U, C, P),
        ((H = ie && ie.onVnodeMounted) || xe || ue) &&
          at(() => {
            H && It(H, _, y), xe && le.enter(U), ue && gn(y, null, _, "mounted")
          }, D)
    },
    E = (y, C, P, _, D) => {
      if ((P && h(y, P), _)) for (let N = 0; N < _.length; N++) h(y, _[N])
      if (D) {
        let N = D.subTree
        if (
          C === N ||
          (Ro(N.type) && (N.ssContent === C || N.ssFallback === C))
        ) {
          const J = D.vnode
          E(y, J, J.scopeId, J.slotScopeIds, D.parent)
        }
      }
    },
    A = (y, C, P, _, D, N, J, Y, U = 0) => {
      for (let H = U; H < y.length; H++) {
        const ie = (y[H] = Y ? ln(y[H]) : At(y[H]))
        b(null, ie, C, P, _, D, N, J, Y)
      }
    },
    I = (y, C, P, _, D, N, J) => {
      const Y = (C.el = y.el)
      let { patchFlag: U, dynamicChildren: H, dirs: ie } = C
      U |= y.patchFlag & 16
      const Q = y.props || $e,
        le = C.props || $e
      let ue
      if (
        (P && mn(P, !1),
        (ue = le.onVnodeBeforeUpdate) && It(ue, P, C, y),
        ie && gn(C, y, P, "beforeUpdate"),
        P && mn(P, !0),
        ((Q.innerHTML && le.innerHTML == null) ||
          (Q.textContent && le.textContent == null)) &&
          u(Y, ""),
        H
          ? $(y.dynamicChildren, H, Y, P, _, Al(C, D), N)
          : J || B(y, C, Y, null, P, _, Al(C, D), N, !1),
        U > 0)
      ) {
        if (U & 16) j(Y, Q, le, P, D)
        else if (
          (U & 2 && Q.class !== le.class && i(Y, "class", null, le.class, D),
          U & 4 && i(Y, "style", Q.style, le.style, D),
          U & 8)
        ) {
          const xe = C.dynamicProps
          for (let Me = 0; Me < xe.length; Me++) {
            const Te = xe[Me],
              tt = Q[Te],
              nt = le[Te]
            ;(nt !== tt || Te === "value") && i(Y, Te, tt, nt, D, P)
          }
        }
        U & 1 && y.children !== C.children && u(Y, C.children)
      } else !J && H == null && j(Y, Q, le, P, D)
      ;((ue = le.onVnodeUpdated) || ie) &&
        at(() => {
          ue && It(ue, P, C, y), ie && gn(C, y, P, "updated")
        }, _)
    },
    $ = (y, C, P, _, D, N, J) => {
      for (let Y = 0; Y < C.length; Y++) {
        const U = y[Y],
          H = C[Y],
          ie =
            U.el && (U.type === Pe || !Jn(U, H) || U.shapeFlag & 198)
              ? d(U.el)
              : P
        b(U, H, ie, null, _, D, N, J, !0)
      }
    },
    j = (y, C, P, _, D) => {
      if (C !== P) {
        if (C !== $e)
          for (const N in C) !ss(N) && !(N in P) && i(y, N, C[N], null, D, _)
        for (const N in P) {
          if (ss(N)) continue
          const J = P[N],
            Y = C[N]
          J !== Y && N !== "value" && i(y, N, Y, J, D, _)
        }
        "value" in P && i(y, "value", C.value, P.value, D)
      }
    },
    F = (y, C, P, _, D, N, J, Y, U) => {
      const H = (C.el = y ? y.el : r("")),
        ie = (C.anchor = y ? y.anchor : r(""))
      let { patchFlag: Q, dynamicChildren: le, slotScopeIds: ue } = C
      ue && (Y = Y ? Y.concat(ue) : ue),
        y == null
          ? (s(H, P, _), s(ie, P, _), A(C.children || [], P, ie, D, N, J, Y, U))
          : Q > 0 && Q & 64 && le && y.dynamicChildren
            ? ($(y.dynamicChildren, le, P, D, N, J, Y),
              (C.key != null || (D && C === D.subTree)) && Oo(y, C, !0))
            : B(y, C, P, ie, D, N, J, Y, U)
    },
    W = (y, C, P, _, D, N, J, Y, U) => {
      ;(C.slotScopeIds = Y),
        y == null
          ? C.shapeFlag & 512
            ? D.ctx.activate(C, P, _, J, U)
            : de(C, P, _, D, N, J, U)
          : he(y, C, U)
    },
    de = (y, C, P, _, D, N, J) => {
      const Y = (y.component = Fd(y, _, D))
      if ((bo(y) && (Y.ctx.renderer = ne), Hd(Y, !1, J), Y.asyncDep)) {
        if ((D && D.registerDep(Y, O, J), !y.el)) {
          const U = (Y.subTree = q(Kt))
          w(null, U, C, P), (y.placeholder = U.el)
        }
      } else O(Y, y, C, P, D, N, J)
    },
    he = (y, C, P) => {
      const _ = (C.component = y.component)
      if (Ad(y, C, P))
        if (_.asyncDep && !_.asyncResolved) {
          z(_, C, P)
          return
        } else (_.next = C), _.update()
      else (C.el = y.el), (_.vnode = C)
    },
    O = (y, C, P, _, D, N, J) => {
      const Y = () => {
        if (y.isMounted) {
          let { next: Q, bu: le, u: ue, parent: xe, vnode: Me } = y
          {
            const kt = Lo(y)
            if (kt) {
              Q && ((Q.el = Me.el), z(y, Q, J)),
                kt.asyncDep.then(() => {
                  y.isUnmounted || Y()
                })
              return
            }
          }
          let Te = Q,
            tt
          mn(y, !1),
            Q ? ((Q.el = Me.el), z(y, Q, J)) : (Q = Me),
            le && zs(le),
            (tt = Q.props && Q.props.onVnodeBeforeUpdate) && It(tt, xe, Q, Me),
            mn(y, !0)
          const nt = Br(y),
            Tt = y.subTree
          ;(y.subTree = nt),
            b(Tt, nt, d(Tt.el), R(Tt), y, D, N),
            (Q.el = nt.el),
            Te === null && Od(y, nt.el),
            ue && at(ue, D),
            (tt = Q.props && Q.props.onVnodeUpdated) &&
              at(() => It(tt, xe, Q, Me), D)
        } else {
          let Q
          const { el: le, props: ue } = C,
            { bm: xe, m: Me, parent: Te, root: tt, type: nt } = y,
            Tt = zn(C)
          mn(y, !1),
            xe && zs(xe),
            !Tt && (Q = ue && ue.onVnodeBeforeMount) && It(Q, Te, C),
            mn(y, !0)
          {
            tt.ce && tt.ce._def.shadowRoot !== !1 && tt.ce._injectChildStyle(nt)
            const kt = (y.subTree = Br(y))
            b(null, kt, P, _, y, D, N), (C.el = kt.el)
          }
          if ((Me && at(Me, D), !Tt && (Q = ue && ue.onVnodeMounted))) {
            const kt = C
            at(() => It(Q, Te, kt), D)
          }
          ;(C.shapeFlag & 256 ||
            (Te && zn(Te.vnode) && Te.vnode.shapeFlag & 256)) &&
            y.a &&
            at(y.a, D),
            (y.isMounted = !0),
            (C = P = _ = null)
        }
      }
      y.scope.on()
      const U = (y.effect = new qa(Y))
      y.scope.off()
      const H = (y.update = U.run.bind(U)),
        ie = (y.job = U.runIfDirty.bind(U))
      ;(ie.i = y), (ie.id = y.uid), (U.scheduler = () => Hi(ie)), mn(y, !0), H()
    },
    z = (y, C, P) => {
      C.component = y
      const _ = y.vnode.props
      ;(y.vnode = C),
        (y.next = null),
        hd(y, C.props, _, P),
        vd(y, C.children, P),
        qt(),
        kr(y),
        Ut()
    },
    B = (y, C, P, _, D, N, J, Y, U = !1) => {
      const H = y && y.children,
        ie = y ? y.shapeFlag : 0,
        Q = C.children,
        { patchFlag: le, shapeFlag: ue } = C
      if (le > 0) {
        if (le & 128) {
          me(H, Q, P, _, D, N, J, Y, U)
          return
        } else if (le & 256) {
          ye(H, Q, P, _, D, N, J, Y, U)
          return
        }
      }
      ue & 8
        ? (ie & 16 && et(H, D, N), Q !== H && u(P, Q))
        : ie & 16
          ? ue & 16
            ? me(H, Q, P, _, D, N, J, Y, U)
            : et(H, D, N, !0)
          : (ie & 8 && u(P, ""), ue & 16 && A(Q, P, _, D, N, J, Y, U))
    },
    ye = (y, C, P, _, D, N, J, Y, U) => {
      ;(y = y || jn), (C = C || jn)
      const H = y.length,
        ie = C.length,
        Q = Math.min(H, ie)
      let le
      for (le = 0; le < Q; le++) {
        const ue = (C[le] = U ? ln(C[le]) : At(C[le]))
        b(y[le], ue, P, null, D, N, J, Y, U)
      }
      H > ie ? et(y, D, N, !0, !1, Q) : A(C, P, _, D, N, J, Y, U, Q)
    },
    me = (y, C, P, _, D, N, J, Y, U) => {
      let H = 0
      const ie = C.length
      let Q = y.length - 1,
        le = ie - 1
      for (; H <= Q && H <= le; ) {
        const ue = y[H],
          xe = (C[H] = U ? ln(C[H]) : At(C[H]))
        if (Jn(ue, xe)) b(ue, xe, P, null, D, N, J, Y, U)
        else break
        H++
      }
      for (; H <= Q && H <= le; ) {
        const ue = y[Q],
          xe = (C[le] = U ? ln(C[le]) : At(C[le]))
        if (Jn(ue, xe)) b(ue, xe, P, null, D, N, J, Y, U)
        else break
        Q--, le--
      }
      if (H > Q) {
        if (H <= le) {
          const ue = le + 1,
            xe = ue < ie ? C[ue].el : _
          for (; H <= le; )
            b(null, (C[H] = U ? ln(C[H]) : At(C[H])), P, xe, D, N, J, Y, U), H++
        }
      } else if (H > le) for (; H <= Q; ) je(y[H], D, N, !0), H++
      else {
        const ue = H,
          xe = H,
          Me = new Map()
        for (H = xe; H <= le; H++) {
          const rt = (C[H] = U ? ln(C[H]) : At(C[H]))
          rt.key != null && Me.set(rt.key, H)
        }
        let Te,
          tt = 0
        const nt = le - xe + 1
        let Tt = !1,
          kt = 0
        const Yn = new Array(nt)
        for (H = 0; H < nt; H++) Yn[H] = 0
        for (H = ue; H <= Q; H++) {
          const rt = y[H]
          if (tt >= nt) {
            je(rt, D, N, !0)
            continue
          }
          let Pt
          if (rt.key != null) Pt = Me.get(rt.key)
          else
            for (Te = xe; Te <= le; Te++)
              if (Yn[Te - xe] === 0 && Jn(rt, C[Te])) {
                Pt = Te
                break
              }
          Pt === void 0
            ? je(rt, D, N, !0)
            : ((Yn[Pt - xe] = H + 1),
              Pt >= kt ? (kt = Pt) : (Tt = !0),
              b(rt, C[Pt], P, null, D, N, J, Y, U),
              tt++)
        }
        const xr = Tt ? Sd(Yn) : jn
        for (Te = xr.length - 1, H = nt - 1; H >= 0; H--) {
          const rt = xe + H,
            Pt = C[rt],
            wr = C[rt + 1],
            Sr = rt + 1 < ie ? wr.el || wr.placeholder : _
          Yn[H] === 0
            ? b(null, Pt, P, Sr, D, N, J, Y, U)
            : Tt && (Te < 0 || H !== xr[Te] ? Le(Pt, P, Sr, 2) : Te--)
        }
      }
    },
    Le = (y, C, P, _, D = null) => {
      const { el: N, type: J, transition: Y, children: U, shapeFlag: H } = y
      if (H & 6) {
        Le(y.component.subTree, C, P, _)
        return
      }
      if (H & 128) {
        y.suspense.move(C, P, _)
        return
      }
      if (H & 64) {
        J.move(y, C, P, ne)
        return
      }
      if (J === Pe) {
        s(N, C, P)
        for (let Q = 0; Q < U.length; Q++) Le(U[Q], C, P, _)
        s(y.anchor, C, P)
        return
      }
      if (J === _s) {
        v(y, C, P)
        return
      }
      if (_ !== 2 && H & 1 && Y)
        if (_ === 0) Y.beforeEnter(N), s(N, C, P), at(() => Y.enter(N), D)
        else {
          const { leave: Q, delayLeave: le, afterLeave: ue } = Y,
            xe = () => {
              y.ctx.isUnmounted ? l(N) : s(N, C, P)
            },
            Me = () => {
              N._isLeaving && N[qc](!0),
                Q(N, () => {
                  xe(), ue && ue()
                })
            }
          le ? le(N, xe, Me) : Me()
        }
      else s(N, C, P)
    },
    je = (y, C, P, _ = !1, D = !1) => {
      const {
        type: N,
        props: J,
        ref: Y,
        children: U,
        dynamicChildren: H,
        shapeFlag: ie,
        patchFlag: Q,
        dirs: le,
        cacheIndex: ue,
      } = y
      if (
        (Q === -2 && (D = !1),
        Y != null && (qt(), rs(Y, null, P, y, !0), Ut()),
        ue != null && (C.renderCache[ue] = void 0),
        ie & 256)
      ) {
        C.ctx.deactivate(y)
        return
      }
      const xe = ie & 1 && le,
        Me = !zn(y)
      let Te
      if ((Me && (Te = J && J.onVnodeBeforeUnmount) && It(Te, C, y), ie & 6))
        gt(y.component, P, _)
      else {
        if (ie & 128) {
          y.suspense.unmount(P, _)
          return
        }
        xe && gn(y, null, C, "beforeUnmount"),
          ie & 64
            ? y.type.remove(y, C, P, ne, _)
            : H && !H.hasOnce && (N !== Pe || (Q > 0 && Q & 64))
              ? et(H, C, P, !1, !0)
              : ((N === Pe && Q & 384) || (!D && ie & 16)) && et(U, C, P),
          _ && ht(y)
      }
      ;((Me && (Te = J && J.onVnodeUnmounted)) || xe) &&
        at(() => {
          Te && It(Te, C, y), xe && gn(y, null, C, "unmounted")
        }, P)
    },
    ht = (y) => {
      const { type: C, el: P, anchor: _, transition: D } = y
      if (C === Pe) {
        en(P, _)
        return
      }
      if (C === _s) {
        S(y)
        return
      }
      const N = () => {
        l(P), D && !D.persisted && D.afterLeave && D.afterLeave()
      }
      if (y.shapeFlag & 1 && D && !D.persisted) {
        const { leave: J, delayLeave: Y } = D,
          U = () => J(P, N)
        Y ? Y(y.el, N, U) : U()
      } else N()
    },
    en = (y, C) => {
      let P
      for (; y !== C; ) (P = p(y)), l(y), (y = P)
      l(C)
    },
    gt = (y, C, P) => {
      const { bum: _, scope: D, job: N, subTree: J, um: Y, m: U, a: H } = y
      jr(U),
        jr(H),
        _ && zs(_),
        D.stop(),
        N && ((N.flags |= 8), je(J, y, C, P)),
        Y && at(Y, C),
        at(() => {
          y.isUnmounted = !0
        }, C)
    },
    et = (y, C, P, _ = !1, D = !1, N = 0) => {
      for (let J = N; J < y.length; J++) je(y[J], C, P, _, D)
    },
    R = (y) => {
      if (y.shapeFlag & 6) return R(y.component.subTree)
      if (y.shapeFlag & 128) return y.suspense.next()
      const C = p(y.anchor || y.el),
        P = C && C[Vc]
      return P ? p(P) : C
    }
  let ee = !1
  const X = (y, C, P) => {
      y == null
        ? C._vnode && je(C._vnode, null, null, !0)
        : b(C._vnode || null, y, C, null, null, null, P),
        (C._vnode = y),
        ee || ((ee = !0), kr(), fo(), (ee = !1))
    },
    ne = {
      p: b,
      um: je,
      m: Le,
      r: ht,
      mt: de,
      mc: A,
      pc: B,
      pbc: $,
      n: R,
      o: e,
    }
  return { render: X, hydrate: void 0, createApp: fd(X) }
}
function Al({ type: e, props: t }, n) {
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
function wd(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Oo(e, t, n = !1) {
  const s = e.children,
    l = t.children
  if (ce(s) && ce(l))
    for (let i = 0; i < s.length; i++) {
      const a = s[i]
      let r = l[i]
      r.shapeFlag & 1 &&
        !r.dynamicChildren &&
        ((r.patchFlag <= 0 || r.patchFlag === 32) &&
          ((r = l[i] = ln(l[i])), (r.el = a.el)),
        !n && r.patchFlag !== -2 && Oo(a, r)),
        r.type === bl && r.patchFlag !== -1 && (r.el = a.el),
        r.type === Kt && !r.el && (r.el = a.el)
    }
}
function Sd(e) {
  const t = e.slice(),
    n = [0]
  let s, l, i, a, r
  const o = e.length
  for (s = 0; s < o; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((l = n[n.length - 1]), e[l] < c)) {
        ;(t[s] = l), n.push(s)
        continue
      }
      for (i = 0, a = n.length - 1; i < a; )
        (r = (i + a) >> 1), e[n[r]] < c ? (i = r + 1) : (a = r)
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; ) (n[i] = a), (a = t[a])
  return n
}
function Lo(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Lo(t)
}
function jr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Cd = Symbol.for("v-scx"),
  Ed = () => ze(Cd)
function Jt(e, t) {
  return Ji(e, null, t)
}
function cn(e, t, n) {
  return Ji(e, t, n)
}
function Ji(e, t, n = $e) {
  const { immediate: s, deep: l, flush: i, once: a } = n,
    r = Ye({}, n),
    o = (t && s) || (!t && i !== "post")
  let c
  if (ms) {
    if (i === "sync") {
      const h = Ed()
      c = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!o) {
      const h = () => {}
      return (h.stop = Lt), (h.resume = Lt), (h.pause = Lt), h
    }
  }
  const u = Ue
  r.call = (h, m, b) => Bt(h, u, m, b)
  let d = !1
  i === "post"
    ? (r.scheduler = (h) => {
        at(h, u && u.suspense)
      })
    : i !== "sync" &&
      ((d = !0),
      (r.scheduler = (h, m) => {
        m ? h() : Hi(h)
      })),
    (r.augmentJob = (h) => {
      t && (h.flags |= 4),
        d && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u)))
    })
  const p = Dc(e, t, r)
  return ms && (c ? c.push(p) : o && p()), p
}
function Td(e, t, n) {
  const s = this.proxy,
    l = Be(e) ? (e.includes(".") ? jo(s, e) : () => s[e]) : e.bind(s, s)
  let i
  pe(t) ? (i = t) : ((i = t.handler), (n = t))
  const a = Es(this),
    r = Ji(l, i.bind(s), n)
  return a(), r
}
function jo(e, t) {
  const n = t.split(".")
  return () => {
    let s = e
    for (let l = 0; l < n.length && s; l++) s = s[n[l]]
    return s
  }
}
const kd = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${En(t)}Modifiers`]
function Pd(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || $e
  let l = n
  const i = t.startsWith("update:"),
    a = i && kd(s, t.slice(7))
  a &&
    (a.trim && (l = n.map((u) => (Be(u) ? u.trim() : u))),
    a.number && (l = n.map(ci)))
  let r,
    o = s[(r = Tl(t))] || s[(r = Tl(vt(t)))]
  !o && i && (o = s[(r = Tl(En(t)))]), o && Bt(o, e, 6, l)
  const c = s[r + "Once"]
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[r]) return
    ;(e.emitted[r] = !0), Bt(c, e, 6, l)
  }
}
const Id = new WeakMap()
function Bo(e, t, n = !1) {
  const s = n ? Id : t.emitsCache,
    l = s.get(e)
  if (l !== void 0) return l
  const i = e.emits
  let a = {},
    r = !1
  if (!pe(e)) {
    const o = (c) => {
      const u = Bo(c, t, !0)
      u && ((r = !0), Ye(a, u))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return !i && !r
    ? (Oe(e) && s.set(e, null), null)
    : (ce(i) ? i.forEach((o) => (a[o] = null)) : Ye(a, i),
      Oe(e) && s.set(e, a),
      a)
}
function ml(e, t) {
  return !e || !rl(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, En(t)) || Ce(e, t))
}
function Br(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: l,
      propsOptions: [i],
      slots: a,
      attrs: r,
      emit: o,
      render: c,
      renderCache: u,
      props: d,
      data: p,
      setupState: h,
      ctx: m,
      inheritAttrs: b,
    } = e,
    k = Ys(e)
  let w, g
  try {
    if (n.shapeFlag & 4) {
      const S = l || s,
        T = S
      ;(w = At(c.call(T, S, u, d, h, p, m))), (g = r)
    } else {
      const S = t
      ;(w = At(
        S.length > 1 ? S(d, { attrs: r, slots: a, emit: o }) : S(d, null),
      )),
        (g = t.props ? r : $d(r))
    }
  } catch (S) {
    ;(os.length = 0), pl(S, e, 1), (w = q(Kt))
  }
  let v = w
  if (g && b !== !1) {
    const S = Object.keys(g),
      { shapeFlag: T } = v
    S.length &&
      T & 7 &&
      (i && S.some(Oi) && (g = Md(g, i)), (v = Sn(v, g, !1, !0)))
  }
  return (
    n.dirs &&
      ((v = Sn(v, null, !1, !0)),
      (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Gi(v, n.transition),
    (w = v),
    Ys(k),
    w
  )
}
const $d = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || rl(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Md = (e, t) => {
    const n = {}
    for (const s in e) (!Oi(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Ad(e, t, n) {
  const { props: s, children: l, component: i } = e,
    { props: a, children: r, patchFlag: o } = t,
    c = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return s ? Rr(s, a, c) : !!a
    if (o & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const p = u[d]
        if (a[p] !== s[p] && !ml(c, p)) return !0
      }
    }
  } else
    return (l || r) && (!r || !r.$stable)
      ? !0
      : s === a
        ? !1
        : s
          ? a
            ? Rr(s, a, c)
            : !0
          : !!a
  return !1
}
function Rr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let l = 0; l < s.length; l++) {
    const i = s[l]
    if (t[i] !== e[i] && !ml(n, i)) return !0
  }
  return !1
}
function Od({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ro = (e) => e.__isSuspense
function Ld(e, t) {
  t && t.pendingBranch
    ? ce(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Gc(e)
}
const Pe = Symbol.for("v-fgt"),
  bl = Symbol.for("v-txt"),
  Kt = Symbol.for("v-cmt"),
  _s = Symbol.for("v-stc"),
  os = []
let ct = null
function L(e = !1) {
  os.push((ct = e ? null : []))
}
function jd() {
  os.pop(), (ct = os[os.length - 1] || null)
}
let hs = 1
function Zs(e, t = !1) {
  ;(hs += e), e < 0 && ct && t && (ct.hasOnce = !0)
}
function No(e) {
  return (
    (e.dynamicChildren = hs > 0 ? ct || jn : null),
    jd(),
    hs > 0 && ct && ct.push(e),
    e
  )
}
function K(e, t, n, s, l, i) {
  return No(f(e, t, n, s, l, i, !0))
}
function ge(e, t, n, s, l) {
  return No(q(e, t, n, s, l, !0))
}
function gs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Jn(e, t) {
  return e.type === t.type && e.key === t.key
}
const zo = ({ key: e }) => e ?? null,
  Ds = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Be(e) || Fe(e) || pe(e)
        ? { i: Ve, r: e, k: t, f: !!n }
        : e
      : null
  )
function f(
  e,
  t = null,
  n = null,
  s = 0,
  l = null,
  i = e === Pe ? 0 : 1,
  a = !1,
  r = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zo(t),
    ref: t && Ds(t),
    scopeId: ho,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ve,
  }
  return (
    r
      ? (Zi(o, n), i & 128 && e.normalize(o))
      : n && (o.shapeFlag |= Be(n) ? 8 : 16),
    hs > 0 &&
      !a &&
      ct &&
      (o.patchFlag > 0 || i & 6) &&
      o.patchFlag !== 32 &&
      ct.push(o),
    o
  )
}
const q = Bd
function Bd(e, t = null, n = null, s = 0, l = null, i = !1) {
  if (((!e || e === yo) && (e = Kt), gs(e))) {
    const r = Sn(e, t, !0)
    return (
      n && Zi(r, n),
      hs > 0 &&
        !i &&
        ct &&
        (r.shapeFlag & 6 ? (ct[ct.indexOf(e)] = r) : ct.push(r)),
      (r.patchFlag = -2),
      r
    )
  }
  if ((Ud(e) && (e = e.__vccOpts), t)) {
    t = Rd(t)
    let { class: r, style: o } = t
    r && !Be(r) && (t.class = x(r)),
      Oe(o) && (Fi(o) && !ce(o) && (o = Ye({}, o)), (t.style = dl(o)))
  }
  const a = Be(e) ? 1 : Ro(e) ? 128 : Wc(e) ? 64 : Oe(e) ? 4 : pe(e) ? 2 : 0
  return f(e, t, n, s, l, a, i, !0)
}
function Rd(e) {
  return e ? (Fi(e) || ko(e) ? Ye({}, e) : e) : null
}
function Sn(e, t, n = !1, s = !1) {
  const { props: l, ref: i, patchFlag: a, children: r, transition: o } = e,
    c = t ? zd(l || {}, t) : l,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && zo(c),
      ref:
        t && t.ref
          ? n && i
            ? ce(i)
              ? i.concat(Ds(t))
              : [i, Ds(t)]
            : Ds(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: r,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Pe ? (a === -1 ? 16 : a | 16) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: o,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Sn(e.ssContent),
      ssFallback: e.ssFallback && Sn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return o && s && Gi(u, o.clone(u)), u
}
function oe(e = " ", t = 0) {
  return q(bl, null, e, t)
}
function Nd(e, t) {
  const n = q(_s, null, e)
  return (n.staticCount = t), n
}
function ke(e = "", t = !1) {
  return t ? (L(), ge(Kt, null, e)) : q(Kt, null, e)
}
function At(e) {
  return e == null || typeof e == "boolean"
    ? q(Kt)
    : ce(e)
      ? q(Pe, null, e.slice())
      : gs(e)
        ? ln(e)
        : q(bl, null, String(e))
}
function ln(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Sn(e)
}
function Zi(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (ce(t)) n = 16
  else if (typeof t == "object")
    if (s & 65) {
      const l = t.default
      l && (l._c && (l._d = !1), Zi(e, l()), l._c && (l._d = !0))
      return
    } else {
      n = 32
      const l = t._
      !l && !ko(t)
        ? (t._ctx = Ve)
        : l === 3 &&
          Ve &&
          (Ve.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    pe(t)
      ? ((t = { default: t, _ctx: Ve }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [oe(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function zd(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const l in s)
      if (l === "class")
        t.class !== s.class && (t.class = x([t.class, s.class]))
      else if (l === "style") t.style = dl([t.style, s.style])
      else if (rl(l)) {
        const i = t[l],
          a = s[l]
        a &&
          i !== a &&
          !(ce(i) && i.includes(a)) &&
          (t[l] = i ? [].concat(i, a) : a)
      } else l !== "" && (t[l] = s[l])
  }
  return t
}
function It(e, t, n, s = null) {
  Bt(e, t, 7, [n, s])
}
const _d = Co()
let Dd = 0
function Fd(e, t, n) {
  const s = e.type,
    l = (t ? t.appContext : e.appContext) || _d,
    i = {
      uid: Dd++,
      vnode: e,
      type: s,
      parent: t,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new pc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(l.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Io(s, l),
      emitsOptions: Bo(s, l),
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
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Pd.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let Ue = null
const _o = () => Ue || Ve
let Qs, xi
{
  const e = cl(),
    t = (n, s) => {
      let l
      return (
        (l = e[n]) || (l = e[n] = []),
        l.push(s),
        (i) => {
          l.length > 1 ? l.forEach((a) => a(i)) : l[0](i)
        }
      )
    }
  ;(Qs = t("__VUE_INSTANCE_SETTERS__", (n) => (Ue = n))),
    (xi = t("__VUE_SSR_SETTERS__", (n) => (ms = n)))
}
const Es = (e) => {
    const t = Ue
    return (
      Qs(e),
      e.scope.on(),
      () => {
        e.scope.off(), Qs(t)
      }
    )
  },
  Nr = () => {
    Ue && Ue.scope.off(), Qs(null)
  }
function Do(e) {
  return e.vnode.shapeFlag & 4
}
let ms = !1
function Hd(e, t = !1, n = !1) {
  t && xi(t)
  const { props: s, children: l } = e.vnode,
    i = Do(e)
  pd(e, s, i, t), bd(e, l, n || t)
  const a = i ? Gd(e, t) : void 0
  return t && xi(!1), a
}
function Gd(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, id))
  const { setup: s } = n
  if (s) {
    qt()
    const l = (e.setupContext = s.length > 1 ? Wd(e) : null),
      i = Es(e),
      a = Cs(s, e, 0, [e.props, l]),
      r = _a(a)
    if ((Ut(), i(), (r || e.sp) && !zn(e) && mo(e), r)) {
      if ((a.then(Nr, Nr), t))
        return a
          .then((o) => {
            zr(e, o)
          })
          .catch((o) => {
            pl(o, e, 0)
          })
      e.asyncDep = a
    } else zr(e, a)
  } else Fo(e)
}
function zr(e, t, n) {
  pe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Oe(t) && (e.setupState = oo(t)),
    Fo(e)
}
function Fo(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || Lt)
  {
    const l = Es(e)
    qt()
    try {
      rd(e)
    } finally {
      Ut(), l()
    }
  }
}
const Vd = {
  get(e, t) {
    return qe(e, "get", ""), e[t]
  },
}
function Wd(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Vd),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function vl(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(oo(Lc(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in as) return as[n](e)
          },
          has(t, n) {
            return n in t || n in as
          },
        }))
    : e.proxy
}
function qd(e, t = !0) {
  return pe(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Ud(e) {
  return pe(e) && "__vccOpts" in e
}
const se = (e, t) => zc(e, t, ms)
function Ee(e, t, n) {
  try {
    Zs(-1)
    const s = arguments.length
    return s === 2
      ? Oe(t) && !ce(t)
        ? gs(t)
          ? q(e, null, [t])
          : q(e, t)
        : q(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && gs(n) && (n = [n]),
        q(e, t, n))
  } finally {
    Zs(1)
  }
}
const Kd = "3.5.22"
let wi
const _r = typeof window < "u" && window.trustedTypes
if (_r)
  try {
    wi = _r.createPolicy("vue", { createHTML: (e) => e })
  } catch {}
const Ho = wi ? (e) => wi.createHTML(e) : (e) => e,
  Yd = "http://www.w3.org/2000/svg",
  Xd = "http://www.w3.org/1998/Math/MathML",
  Dt = typeof document < "u" ? document : null,
  Dr = Dt && Dt.createElement("template"),
  Jd = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const l =
        t === "svg"
          ? Dt.createElementNS(Yd, e)
          : t === "mathml"
            ? Dt.createElementNS(Xd, e)
            : n
              ? Dt.createElement(e, { is: n })
              : Dt.createElement(e)
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          l.setAttribute("multiple", s.multiple),
        l
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
    insertStaticContent(e, t, n, s, l, i) {
      const a = n ? n.previousSibling : t.lastChild
      if (l && (l === i || l.nextSibling))
        for (
          ;
          t.insertBefore(l.cloneNode(!0), n),
            !(l === i || !(l = l.nextSibling));

        );
      else {
        Dr.innerHTML = Ho(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        )
        const r = Dr.content
        if (s === "svg" || s === "mathml") {
          const o = r.firstChild
          for (; o.firstChild; ) r.appendChild(o.firstChild)
          r.removeChild(o)
        }
        t.insertBefore(r, n)
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Zd = Symbol("_vtc")
function Qd(e, t, n) {
  const s = e[Zd]
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const Fr = Symbol("_vod"),
  ef = Symbol("_vsh"),
  tf = Symbol(""),
  nf = /(?:^|;)\s*display\s*:/
function sf(e, t, n) {
  const s = e.style,
    l = Be(n)
  let i = !1
  if (n && !l) {
    if (t)
      if (Be(t))
        for (const a of t.split(";")) {
          const r = a.slice(0, a.indexOf(":")).trim()
          n[r] == null && Fs(s, r, "")
        }
      else for (const a in t) n[a] == null && Fs(s, a, "")
    for (const a in n) a === "display" && (i = !0), Fs(s, a, n[a])
  } else if (l) {
    if (t !== n) {
      const a = s[tf]
      a && (n += ";" + a), (s.cssText = n), (i = nf.test(n))
    }
  } else t && e.removeAttribute("style")
  Fr in e && ((e[Fr] = i ? s.display : ""), e[ef] && (s.display = "none"))
}
const Hr = /\s*!important$/
function Fs(e, t, n) {
  if (ce(n)) n.forEach((s) => Fs(e, t, s))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const s = lf(e, t)
    Hr.test(n)
      ? e.setProperty(En(s), n.replace(Hr, ""), "important")
      : (e[s] = n)
  }
}
const Gr = ["Webkit", "Moz", "ms"],
  Ol = {}
function lf(e, t) {
  const n = Ol[t]
  if (n) return n
  let s = vt(t)
  if (s !== "filter" && s in e) return (Ol[t] = s)
  s = ul(s)
  for (let l = 0; l < Gr.length; l++) {
    const i = Gr[l] + s
    if (i in e) return (Ol[t] = i)
  }
  return t
}
const Vr = "http://www.w3.org/1999/xlink"
function Wr(e, t, n, s, l, i = fc(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Vr, t.slice(6, t.length))
      : e.setAttributeNS(Vr, t, n)
    : n == null || (i && !Ga(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : Yt(n) ? String(n) : n)
}
function qr(e, t, n, s, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ho(n) : n)
    return
  }
  const i = e.tagName
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      o = n == null ? (e.type === "checkbox" ? "on" : "") : String(n)
    ;(r !== o || !("_value" in e)) && (e.value = o),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let a = !1
  if (n === "" || n == null) {
    const r = typeof e[t]
    r === "boolean"
      ? (n = Ga(n))
      : n == null && r === "string"
        ? ((n = ""), (a = !0))
        : r === "number" && ((n = 0), (a = !0))
  }
  try {
    e[t] = n
  } catch {}
  a && e.removeAttribute(l || t)
}
function An(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function rf(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Ur = Symbol("_vei")
function af(e, t, n, s, l = null) {
  const i = e[Ur] || (e[Ur] = {}),
    a = i[t]
  if (s && a) a.value = s
  else {
    const [r, o] = of(t)
    if (s) {
      const c = (i[t] = df(s, l))
      An(e, r, c, o)
    } else a && (rf(e, r, a, o), (i[t] = void 0))
  }
}
const Kr = /(?:Once|Passive|Capture)$/
function of(e) {
  let t
  if (Kr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Kr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : En(e.slice(2)), t]
}
let Ll = 0
const uf = Promise.resolve(),
  cf = () => Ll || (uf.then(() => (Ll = 0)), (Ll = Date.now()))
function df(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Bt(ff(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = cf()), n
}
function ff(e, t) {
  if (ce(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (l) => !l._stopped && s && s(l))
    )
  } else return t
}
const Yr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  pf = (e, t, n, s, l, i) => {
    const a = l === "svg"
    t === "class"
      ? Qd(e, s, a)
      : t === "style"
        ? sf(e, n, s)
        : rl(t)
          ? Oi(t) || af(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : hf(e, t, s, a)
              )
            ? (qr(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Wr(e, t, s, a, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Be(s))
              ? qr(e, vt(t), s, i, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Wr(e, t, s, a))
  }
function hf(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Yr(t) && pe(n))
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
    const l = e.tagName
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1
  }
  return Yr(t) && Be(n) ? !1 : t in e
}
const Xr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return ce(t) ? (n) => zs(t, n) : t
}
function gf(e) {
  e.target.composing = !0
}
function Jr(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const jl = Symbol("_assign"),
  mf = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, l) {
      e[jl] = Xr(l)
      const i = s || (l.props && l.props.type === "number")
      An(e, t ? "change" : "input", (a) => {
        if (a.target.composing) return
        let r = e.value
        n && (r = r.trim()), i && (r = ci(r)), e[jl](r)
      }),
        n &&
          An(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (An(e, "compositionstart", gf),
          An(e, "compositionend", Jr),
          An(e, "change", Jr))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: l, number: i } },
      a,
    ) {
      if (((e[jl] = Xr(a)), e.composing)) return
      const r =
          (i || e.type === "number") && !/^0\d/.test(e.value)
            ? ci(e.value)
            : e.value,
        o = t ?? ""
      r !== o &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (l && e.value.trim() === o))) ||
          (e.value = o))
    },
  },
  bf = Ye({ patchProp: pf }, Jd)
let Zr
function vf() {
  return Zr || (Zr = yd(bf))
}
const yf = (...e) => {
  const t = vf().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const l = wf(s)
      if (!l) return
      const i = t._component
      !pe(i) && !i.render && !i.template && (i.template = l.innerHTML),
        l.nodeType === 1 && (l.textContent = "")
      const a = n(l, !1, xf(l))
      return (
        l instanceof Element &&
          (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")),
        a
      )
    }),
    t
  )
}
function xf(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function wf(e) {
  return Be(e) ? document.querySelector(e) : e
}
const Zt = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, l] of t) n[s] = l
    return n
  },
  Sf = {}
function Cf(e, t) {
  const n = sd("router-view")
  return L(), ge(n)
}
const Ef = Zt(Sf, [["render", Cf]])
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
var Qr
let kf = Symbol("headlessui.useid"),
  Pf = 0
const wn =
  (Qr = Uc) != null
    ? Qr
    : function () {
        return ze(kf, () => `${++Pf}`)()
      }
function te(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function dt(e, t, ...n) {
  if (e in t) {
    let l = t[e]
    return typeof l == "function" ? l(...n) : l
  }
  let s = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(s, dt), s)
}
var If = Object.defineProperty,
  $f = (e, t, n) =>
    t in e
      ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ea = (e, t, n) => ($f(e, typeof t != "symbol" ? t + "" : t, n), n)
let Mf = class {
    constructor() {
      ea(this, "current", this.detect()), ea(this, "currentId", 0)
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
  yl = new Mf()
function Un(e) {
  if (yl.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = te(e)
    if (t) return t.ownerDocument
  }
  return document
}
let Si = [
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
var Ne = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Ne || {}),
  an = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(an || {}),
  Af = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Af || {})
function xl(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Si)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var Qi = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Qi || {})
function Go(e, t = 0) {
  var n
  return e === ((n = Un(e)) == null ? void 0 : n.body)
    ? !1
    : dt(t, {
        0() {
          return e.matches(Si)
        },
        1() {
          let s = e
          for (; s !== null; ) {
            if (s.matches(Si)) return !0
            s = s.parentElement
          }
          return !1
        },
      })
}
var Of = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Of || {})
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
let Lf = ["textarea", "input"].join(",")
function jf(e) {
  var t, n
  return (n = (t = e?.matches) == null ? void 0 : t.call(e, Lf)) != null
    ? n
    : !1
}
function On(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let l = t(n),
      i = t(s)
    if (l === null || i === null) return 0
    let a = l.compareDocumentPosition(i)
    return a & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : a & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
  })
}
function ut(
  e,
  t,
  { sorted: n = !0, relativeTo: s = null, skipElements: l = [] } = {},
) {
  var i
  let a =
      (i = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e?.ownerDocument) != null
        ? i
        : document,
    r = Array.isArray(e) ? (n ? On(e) : e) : xl(e)
  l.length > 0 && r.length > 1 && (r = r.filter((m) => !l.includes(m))),
    (s = s ?? a.activeElement)
  let o = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    c = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, r.indexOf(s)) - 1
      if (t & 4) return Math.max(0, r.indexOf(s)) + 1
      if (t & 8) return r.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = r.length,
    h
  do {
    if (d >= p || d + p <= 0) return 0
    let m = c + d
    if (t & 16) m = (m + p) % p
    else {
      if (m < 0) return 3
      if (m >= p) return 1
    }
    ;(h = r[m]), h?.focus(u), (d += o)
  } while (h !== a.activeElement)
  return t & 6 && jf(h) && h.select(), 2
}
function Bf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Rf() {
  return /Android/gi.test(window.navigator.userAgent)
}
function Nf() {
  return Bf() || Rf()
}
function Ms(e, t, n) {
  yl.isServer ||
    Jt((s) => {
      document.addEventListener(e, t, n),
        s(() => document.removeEventListener(e, t, n))
    })
}
function Vo(e, t, n) {
  yl.isServer ||
    Jt((s) => {
      window.addEventListener(e, t, n),
        s(() => window.removeEventListener(e, t, n))
    })
}
function zf(e, t, n = se(() => !0)) {
  function s(i, a) {
    if (!n.value || i.defaultPrevented) return
    let r = a(i)
    if (r === null || !r.getRootNode().contains(r)) return
    let o = (function c(u) {
      return typeof u == "function"
        ? c(u())
        : Array.isArray(u) || u instanceof Set
          ? u
          : [u]
    })(e)
    for (let c of o) {
      if (c === null) continue
      let u = c instanceof HTMLElement ? c : te(c)
      if (
        (u != null && u.contains(r)) ||
        (i.composed && i.composedPath().includes(u))
      )
        return
    }
    return !Go(r, Qi.Loose) && r.tabIndex !== -1 && i.preventDefault(), t(i, r)
  }
  let l = V(null)
  Ms(
    "pointerdown",
    (i) => {
      var a, r
      n.value &&
        (l.value =
          ((r = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
            ? void 0
            : r[0]) || i.target)
    },
    !0,
  ),
    Ms(
      "mousedown",
      (i) => {
        var a, r
        n.value &&
          (l.value =
            ((r = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
              ? void 0
              : r[0]) || i.target)
      },
      !0,
    ),
    Ms(
      "click",
      (i) => {
        Nf() || (l.value && (s(i, () => l.value), (l.value = null)))
      },
      !0,
    ),
    Ms(
      "touchend",
      (i) => s(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0,
    ),
    Vo(
      "blur",
      (i) =>
        s(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    )
}
function ta(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Wo(e, t) {
  let n = V(ta(e.value.type, e.value.as))
  return (
    We(() => {
      n.value = ta(e.value.type, e.value.as)
    }),
    Jt(() => {
      var s
      n.value ||
        (te(t) &&
          te(t) instanceof HTMLButtonElement &&
          !((s = te(t)) != null && s.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var bs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(bs || {}),
  _f = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(_f || {})
function Qt({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: s,
  ...l
}) {
  var i
  let a = Uo(s, n),
    r = Object.assign(l, { props: a })
  if (e || (t & 2 && a.static)) return Bl(r)
  if (t & 1) {
    let o = (i = a.unmount) == null || i ? 0 : 1
    return dt(o, {
      0() {
        return null
      },
      1() {
        return Bl({
          ...l,
          props: { ...a, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Bl(r)
}
function Bl({ props: e, attrs: t, slots: n, slot: s, name: l }) {
  var i, a
  let { as: r, ...o } = Ko(e, ["unmount", "static"]),
    c = (i = n.default) == null ? void 0 : i.call(n, s),
    u = {}
  if (s) {
    let d = !1,
      p = []
    for (let [h, m] of Object.entries(s))
      typeof m == "boolean" && (d = !0), m === !0 && p.push(h)
    d && (u["data-headlessui-state"] = p.join(" "))
  }
  if (r === "template") {
    if (
      ((c = qo(c ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [d, ...p] = c ?? []
      if (!Df(d) || p.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${l} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(o)
              .concat(Object.keys(t))
              .map((b) => b.trim())
              .filter((b, k, w) => w.indexOf(b) === k)
              .sort((b, k) => b.localeCompare(k))
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
      let h = Uo((a = d.props) != null ? a : {}, o, u),
        m = Sn(d, h, !0)
      for (let b in h)
        b.startsWith("on") && (m.props || (m.props = {}), (m.props[b] = h[b]))
      return m
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c
  }
  return Ee(r, Object.assign({}, o, u), { default: () => c })
}
function qo(e) {
  return e.flatMap((t) => (t.type === Pe ? qo(t.children) : [t]))
}
function Uo(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let s of e)
    for (let l in s)
      l.startsWith("on") && typeof s[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(s[l]))
        : (t[l] = s[l])
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((s) => [s, void 0])),
    )
  for (let s in n)
    Object.assign(t, {
      [s](l, ...i) {
        let a = n[s]
        for (let r of a) {
          if (l instanceof Event && l.defaultPrevented) return
          r(l, ...i)
        }
      },
    })
  return t
}
function Ko(e, t = []) {
  let n = Object.assign({}, e)
  for (let s of t) s in n && delete n[s]
  return n
}
function Df(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var Hn = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Hn || {})
let Gn = ft({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var s
        let { features: l, ...i } = e,
          a = {
            "aria-hidden":
              (l & 2) === 2 ? !0 : (s = i["aria-hidden"]) != null ? s : void 0,
            hidden: (l & 4) === 4 ? !0 : void 0,
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
              ...((l & 4) === 4 && (l & 2) !== 2 && { display: "none" }),
            },
          }
        return Qt({
          ourProps: a,
          theirProps: i,
          slot: {},
          attrs: n,
          slots: t,
          name: "Hidden",
        })
      }
    },
  }),
  Yo = Symbol("Context")
var vs = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(vs || {})
function Ff() {
  return ze(Yo, null)
}
function Hf(e) {
  bt(Yo, e)
}
var _e = ((e) => (
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
))(_e || {})
function Gf(e, t, n, s) {
  yl.isServer ||
    Jt((l) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, s),
        l(() => e.removeEventListener(t, n, s))
    })
}
var Vt = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Vt || {})
function Xo() {
  let e = V(0)
  return (
    Vo("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Vf({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let s = V(null),
    l = Un(s)
  function i() {
    var a, r, o
    let c = []
    for (let u of e)
      u !== null &&
        (u instanceof HTMLElement
          ? c.push(u)
          : "value" in u && u.value instanceof HTMLElement && c.push(u.value))
    if (t != null && t.value) for (let u of t.value) c.push(u)
    for (let u of (a = l?.querySelectorAll("html > *, body > *")) != null
      ? a
      : [])
      u !== document.body &&
        u !== document.head &&
        u instanceof HTMLElement &&
        u.id !== "headlessui-portal-root" &&
        (u.contains(te(s)) ||
          u.contains(
            (o = (r = te(s)) == null ? void 0 : r.getRootNode()) == null
              ? void 0
              : o.host,
          ) ||
          c.some((d) => u.contains(d)) ||
          c.push(u))
    return c
  }
  return {
    resolveContainers: i,
    contains(a) {
      return i().some((r) => r.contains(a))
    },
    mainTreeNodeRef: s,
    MainTreeNode() {
      return n != null ? null : Ee(Gn, { features: Hn.Hidden, ref: s })
    },
  }
}
let na = Symbol("PortalParentContext")
function Wf() {
  let e = ze(na, null),
    t = V([])
  function n(i) {
    return t.value.push(i), e && e.register(i), () => s(i)
  }
  function s(i) {
    let a = t.value.indexOf(i)
    a !== -1 && t.value.splice(a, 1), e && e.unregister(i)
  }
  let l = { register: n, unregister: s, portals: t }
  return [
    t,
    ft({
      name: "PortalWrapper",
      setup(i, { slots: a }) {
        return (
          bt(na, l),
          () => {
            var r
            return (r = a.default) == null ? void 0 : r.call(a)
          }
        )
      },
    }),
  ]
}
var qf = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(qf || {})
let Jo = Symbol("PopoverContext")
function er(e) {
  let t = ze(Jo, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${nn.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, er), n)
  }
  return t
}
let Uf = Symbol("PopoverGroupContext")
function Zo() {
  return ze(Uf, null)
}
let Qo = Symbol("PopoverPanelContext")
function Kf() {
  return ze(Qo, null)
}
let nn = ft({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: s }) {
      var l
      let i = V(null)
      s({ el: i, $el: i })
      let a = V(1),
        r = V(null),
        o = V(null),
        c = V(null),
        u = V(null),
        d = se(() => Un(i)),
        p = se(() => {
          var T, M
          if (!te(r) || !te(u)) return !1
          for (let W of document.querySelectorAll("body > *"))
            if (Number(W?.contains(te(r))) ^ Number(W?.contains(te(u))))
              return !0
          let E = xl(),
            A = E.indexOf(te(r)),
            I = (A + E.length - 1) % E.length,
            $ = (A + 1) % E.length,
            j = E[I],
            F = E[$]
          return (
            !((T = te(u)) != null && T.contains(j)) &&
            !((M = te(u)) != null && M.contains(F))
          )
        }),
        h = {
          popoverState: a,
          buttonId: V(null),
          panelId: V(null),
          panel: u,
          button: r,
          isPortalled: p,
          beforePanelSentinel: o,
          afterPanelSentinel: c,
          togglePopover() {
            a.value = dt(a.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            a.value !== 1 && (a.value = 1)
          },
          close(T) {
            h.closePopover()
            let M = T
              ? T instanceof HTMLElement
                ? T
                : T.value instanceof HTMLElement
                  ? te(T)
                  : te(h.button)
              : te(h.button)
            M?.focus()
          },
        }
      bt(Jo, h), Hf(se(() => dt(a.value, { 0: vs.Open, 1: vs.Closed })))
      let m = {
          buttonId: h.buttonId,
          panelId: h.panelId,
          close() {
            h.closePopover()
          },
        },
        b = Zo(),
        k = b?.registerPopover,
        [w, g] = Wf(),
        v = Vf({
          mainTreeNodeRef: b?.mainTreeNodeRef,
          portals: w,
          defaultContainers: [r, u],
        })
      function S() {
        var T, M, E, A
        return (A = b?.isFocusWithinPopoverGroup()) != null
          ? A
          : ((T = d.value) == null ? void 0 : T.activeElement) &&
              (((M = te(r)) == null
                ? void 0
                : M.contains(d.value.activeElement)) ||
                ((E = te(u)) == null
                  ? void 0
                  : E.contains(d.value.activeElement)))
      }
      return (
        Jt(() => k?.(m)),
        Gf(
          (l = d.value) == null ? void 0 : l.defaultView,
          "focus",
          (T) => {
            var M, E
            T.target !== window &&
              T.target instanceof HTMLElement &&
              a.value === 0 &&
              (S() ||
                (r &&
                  u &&
                  (v.contains(T.target) ||
                    ((M = te(h.beforePanelSentinel)) != null &&
                      M.contains(T.target)) ||
                    ((E = te(h.afterPanelSentinel)) != null &&
                      E.contains(T.target)) ||
                    h.closePopover())))
          },
          !0,
        ),
        zf(
          v.resolveContainers,
          (T, M) => {
            var E
            h.closePopover(),
              Go(M, Qi.Loose) ||
                (T.preventDefault(), (E = te(r)) == null || E.focus())
          },
          se(() => a.value === 0),
        ),
        () => {
          let T = { open: a.value === 0, close: h.close }
          return Ee(Pe, [
            Ee(g, {}, () =>
              Qt({
                theirProps: { ...e, ...n },
                ourProps: { ref: i },
                slot: T,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            Ee(v.MainTreeNode),
          ])
        }
      )
    },
  }),
  bn = ft({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      var l
      let i = (l = e.id) != null ? l : `headlessui-popover-button-${wn()}`,
        a = er("PopoverButton"),
        r = se(() => Un(a.button))
      s({ el: a.button, $el: a.button }),
        We(() => {
          a.buttonId.value = i
        }),
        fn(() => {
          a.buttonId.value = null
        })
      let o = Zo(),
        c = o?.closeOthers,
        u = Kf(),
        d = se(() => (u === null ? !1 : u.value === a.panelId.value)),
        p = V(null),
        h = `headlessui-focus-sentinel-${wn()}`
      d.value ||
        Jt(() => {
          a.button.value = te(p)
        })
      let m = Wo(
        se(() => ({ as: e.as, type: t.type })),
        p,
      )
      function b(T) {
        var M, E, A, I, $
        if (d.value) {
          if (a.popoverState.value === 1) return
          switch (T.key) {
            case _e.Space:
            case _e.Enter:
              T.preventDefault(),
                (E = (M = T.target).click) == null || E.call(M),
                a.closePopover(),
                (A = te(a.button)) == null || A.focus()
              break
          }
        } else
          switch (T.key) {
            case _e.Space:
            case _e.Enter:
              T.preventDefault(),
                T.stopPropagation(),
                a.popoverState.value === 1 && c?.(a.buttonId.value),
                a.togglePopover()
              break
            case _e.Escape:
              if (a.popoverState.value !== 0) return c?.(a.buttonId.value)
              if (
                !te(a.button) ||
                ((I = r.value) != null &&
                  I.activeElement &&
                  !(
                    ($ = te(a.button)) != null &&
                    $.contains(r.value.activeElement)
                  ))
              )
                return
              T.preventDefault(), T.stopPropagation(), a.closePopover()
              break
          }
      }
      function k(T) {
        d.value || (T.key === _e.Space && T.preventDefault())
      }
      function w(T) {
        var M, E
        e.disabled ||
          (d.value
            ? (a.closePopover(), (M = te(a.button)) == null || M.focus())
            : (T.preventDefault(),
              T.stopPropagation(),
              a.popoverState.value === 1 && c?.(a.buttonId.value),
              a.togglePopover(),
              (E = te(a.button)) == null || E.focus()))
      }
      function g(T) {
        T.preventDefault(), T.stopPropagation()
      }
      let v = Xo()
      function S() {
        let T = te(a.panel)
        if (!T) return
        function M() {
          dt(v.value, {
            [Vt.Forwards]: () => ut(T, Ne.First),
            [Vt.Backwards]: () => ut(T, Ne.Last),
          }) === an.Error &&
            ut(
              xl().filter((E) => E.dataset.headlessuiFocusGuard !== "true"),
              dt(v.value, {
                [Vt.Forwards]: Ne.Next,
                [Vt.Backwards]: Ne.Previous,
              }),
              { relativeTo: te(a.button) },
            )
        }
        M()
      }
      return () => {
        let T = a.popoverState.value === 0,
          M = { open: T },
          { ...E } = e,
          A = d.value
            ? { ref: p, type: m.value, onKeydown: b, onClick: w }
            : {
                ref: p,
                id: i,
                type: m.value,
                "aria-expanded": a.popoverState.value === 0,
                "aria-controls": te(a.panel) ? a.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: b,
                onKeyup: k,
                onClick: w,
                onMousedown: g,
              }
        return Ee(Pe, [
          Qt({
            ourProps: A,
            theirProps: { ...t, ...E },
            slot: M,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          T &&
            !d.value &&
            a.isPortalled.value &&
            Ee(Gn, {
              id: h,
              features: Hn.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: S,
            }),
        ])
      }
    },
  }),
  vn = ft({
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
      var l
      let i = (l = e.id) != null ? l : `headlessui-popover-panel-${wn()}`,
        { focus: a } = e,
        r = er("PopoverPanel"),
        o = se(() => Un(r.panel)),
        c = `headlessui-focus-sentinel-before-${wn()}`,
        u = `headlessui-focus-sentinel-after-${wn()}`
      s({ el: r.panel, $el: r.panel }),
        We(() => {
          r.panelId.value = i
        }),
        fn(() => {
          r.panelId.value = null
        }),
        bt(Qo, r.panelId),
        Jt(() => {
          var g, v
          if (!a || r.popoverState.value !== 0 || !r.panel) return
          let S = (g = o.value) == null ? void 0 : g.activeElement
          ;((v = te(r.panel)) != null && v.contains(S)) ||
            ut(te(r.panel), Ne.First)
        })
      let d = Ff(),
        p = se(() =>
          d !== null
            ? (d.value & vs.Open) === vs.Open
            : r.popoverState.value === 0,
        )
      function h(g) {
        var v, S
        switch (g.key) {
          case _e.Escape:
            if (
              r.popoverState.value !== 0 ||
              !te(r.panel) ||
              (o.value &&
                !(
                  (v = te(r.panel)) != null && v.contains(o.value.activeElement)
                ))
            )
              return
            g.preventDefault(),
              g.stopPropagation(),
              r.closePopover(),
              (S = te(r.button)) == null || S.focus()
            break
        }
      }
      function m(g) {
        var v, S, T, M, E
        let A = g.relatedTarget
        A &&
          te(r.panel) &&
          (((v = te(r.panel)) != null && v.contains(A)) ||
            (r.closePopover(),
            (((T =
              (S = te(r.beforePanelSentinel)) == null ? void 0 : S.contains) !=
              null &&
              T.call(S, A)) ||
              ((E =
                (M = te(r.afterPanelSentinel)) == null ? void 0 : M.contains) !=
                null &&
                E.call(M, A))) &&
              A.focus({ preventScroll: !0 })))
      }
      let b = Xo()
      function k() {
        let g = te(r.panel)
        if (!g) return
        function v() {
          dt(b.value, {
            [Vt.Forwards]: () => {
              var S
              ut(g, Ne.First) === an.Error &&
                ((S = te(r.afterPanelSentinel)) == null || S.focus())
            },
            [Vt.Backwards]: () => {
              var S
              ;(S = te(r.button)) == null || S.focus({ preventScroll: !0 })
            },
          })
        }
        v()
      }
      function w() {
        let g = te(r.panel)
        if (!g) return
        function v() {
          dt(b.value, {
            [Vt.Forwards]: () => {
              let S = te(r.button),
                T = te(r.panel)
              if (!S) return
              let M = xl(),
                E = M.indexOf(S),
                A = M.slice(0, E + 1),
                I = [...M.slice(E + 1), ...A]
              for (let $ of I.slice())
                if (
                  $.dataset.headlessuiFocusGuard === "true" ||
                  (T != null && T.contains($))
                ) {
                  let j = I.indexOf($)
                  j !== -1 && I.splice(j, 1)
                }
              ut(I, Ne.First, { sorted: !1 })
            },
            [Vt.Backwards]: () => {
              var S
              ut(g, Ne.Previous) === an.Error &&
                ((S = te(r.button)) == null || S.focus())
            },
          })
        }
        v()
      }
      return () => {
        let g = { open: r.popoverState.value === 0, close: r.close },
          { focus: v, ...S } = e,
          T = {
            ref: r.panel,
            id: i,
            onKeydown: h,
            onFocusout: a && r.popoverState.value === 0 ? m : void 0,
            tabIndex: -1,
          }
        return Qt({
          ourProps: T,
          theirProps: { ...t, ...S },
          attrs: t,
          slot: g,
          slots: {
            ...n,
            default: (...M) => {
              var E
              return [
                Ee(Pe, [
                  p.value &&
                    r.isPortalled.value &&
                    Ee(Gn, {
                      id: c,
                      ref: r.beforePanelSentinel,
                      features: Hn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: k,
                    }),
                  (E = n.default) == null ? void 0 : E.call(n, ...M),
                  p.value &&
                    r.isPortalled.value &&
                    Ee(Gn, {
                      id: u,
                      ref: r.afterPanelSentinel,
                      features: Hn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: w,
                    }),
                ]),
              ]
            },
          },
          features: bs.RenderStrategy | bs.Static,
          visible: p.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  Yf = ft({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = V(!0)
      return () =>
        t.value
          ? Ee(Gn, {
              as: "button",
              type: "button",
              features: Hn.Focusable,
              onFocus(n) {
                n.preventDefault()
                let s,
                  l = 50
                function i() {
                  var a
                  if (l-- <= 0) {
                    s && cancelAnimationFrame(s)
                    return
                  }
                  if ((a = e.onFocus) != null && a.call(e)) {
                    ;(t.value = !1), cancelAnimationFrame(s)
                    return
                  }
                  s = requestAnimationFrame(i)
                }
                s = requestAnimationFrame(i)
              },
            })
          : null
    },
  })
var Xf = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(Xf || {}),
  Jf = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Jf || {})
let eu = Symbol("TabsContext")
function Ts(e) {
  let t = ze(eu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Ts), n)
  }
  return t
}
let tr = Symbol("TabsSSRContext"),
  Zf = ft({
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
      var l
      let i = V((l = e.selectedIndex) != null ? l : e.defaultIndex),
        a = V([]),
        r = V([]),
        o = se(() => e.selectedIndex !== null),
        c = se(() => (o.value ? e.selectedIndex : i.value))
      function u(b) {
        var k
        let w = On(d.tabs.value, te),
          g = On(d.panels.value, te),
          v = w.filter((S) => {
            var T
            return !((T = te(S)) != null && T.hasAttribute("disabled"))
          })
        if (b < 0 || b > w.length - 1) {
          let S = dt(i.value === null ? 0 : Math.sign(b - i.value), {
              [-1]: () => 1,
              0: () =>
                dt(Math.sign(b), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            T = dt(S, {
              0: () => w.indexOf(v[0]),
              1: () => w.indexOf(v[v.length - 1]),
            })
          T !== -1 && (i.value = T), (d.tabs.value = w), (d.panels.value = g)
        } else {
          let S = w.slice(0, b),
            T = [...w.slice(b), ...S].find((E) => v.includes(E))
          if (!T) return
          let M = (k = w.indexOf(T)) != null ? k : d.selectedIndex.value
          M === -1 && (M = d.selectedIndex.value),
            (i.value = M),
            (d.tabs.value = w),
            (d.panels.value = g)
        }
      }
      let d = {
        selectedIndex: se(() => {
          var b, k
          return (k = (b = i.value) != null ? b : e.defaultIndex) != null
            ? k
            : null
        }),
        orientation: se(() => (e.vertical ? "vertical" : "horizontal")),
        activation: se(() => (e.manual ? "manual" : "auto")),
        tabs: a,
        panels: r,
        setSelectedIndex(b) {
          c.value !== b && s("change", b), o.value || u(b)
        },
        registerTab(b) {
          var k
          if (a.value.includes(b)) return
          let w = a.value[i.value]
          if ((a.value.push(b), (a.value = On(a.value, te)), !o.value)) {
            let g = (k = a.value.indexOf(w)) != null ? k : i.value
            g !== -1 && (i.value = g)
          }
        },
        unregisterTab(b) {
          let k = a.value.indexOf(b)
          k !== -1 && a.value.splice(k, 1)
        },
        registerPanel(b) {
          r.value.includes(b) || (r.value.push(b), (r.value = On(r.value, te)))
        },
        unregisterPanel(b) {
          let k = r.value.indexOf(b)
          k !== -1 && r.value.splice(k, 1)
        },
      }
      bt(eu, d)
      let p = V({ tabs: [], panels: [] }),
        h = V(!1)
      We(() => {
        h.value = !0
      }),
        bt(
          tr,
          se(() => (h.value ? null : p.value)),
        )
      let m = se(() => e.selectedIndex)
      return (
        We(() => {
          cn(
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
          let b = On(d.tabs.value, te)
          b.some((k, w) => te(d.tabs.value[w]) !== te(k)) &&
            d.setSelectedIndex(
              b.findIndex((k) => te(k) === te(d.tabs.value[c.value])),
            )
        }),
        () => {
          let b = { selectedIndex: i.value }
          return Ee(Pe, [
            a.value.length <= 0 &&
              Ee(Yf, {
                onFocus: () => {
                  for (let k of a.value) {
                    let w = te(k)
                    if (w?.tabIndex === 0) return w.focus(), !0
                  }
                  return !1
                },
              }),
            Qt({
              theirProps: {
                ...n,
                ...Ko(e, [
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
  Qf = ft({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let s = Ts("TabList")
      return () => {
        let l = { selectedIndex: s.selectedIndex.value },
          i = { role: "tablist", "aria-orientation": s.orientation.value }
        return Qt({
          ourProps: i,
          theirProps: e,
          slot: l,
          attrs: t,
          slots: n,
          name: "TabList",
        })
      }
    },
  }),
  ep = ft({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      var l
      let i = (l = e.id) != null ? l : `headlessui-tabs-tab-${wn()}`,
        a = Ts("Tab"),
        r = V(null)
      s({ el: r, $el: r }),
        We(() => a.registerTab(r)),
        fn(() => a.unregisterTab(r))
      let o = ze(tr),
        c = se(() => {
          if (o.value) {
            let g = o.value.tabs.indexOf(i)
            return g === -1 ? o.value.tabs.push(i) - 1 : g
          }
          return -1
        }),
        u = se(() => {
          let g = a.tabs.value.indexOf(r)
          return g === -1 ? c.value : g
        }),
        d = se(() => u.value === a.selectedIndex.value)
      function p(g) {
        var v
        let S = g()
        if (S === an.Success && a.activation.value === "auto") {
          let T = (v = Un(r)) == null ? void 0 : v.activeElement,
            M = a.tabs.value.findIndex((E) => te(E) === T)
          M !== -1 && a.setSelectedIndex(M)
        }
        return S
      }
      function h(g) {
        let v = a.tabs.value.map((S) => te(S)).filter(Boolean)
        if (g.key === _e.Space || g.key === _e.Enter) {
          g.preventDefault(), g.stopPropagation(), a.setSelectedIndex(u.value)
          return
        }
        switch (g.key) {
          case _e.Home:
          case _e.PageUp:
            return (
              g.preventDefault(), g.stopPropagation(), p(() => ut(v, Ne.First))
            )
          case _e.End:
          case _e.PageDown:
            return (
              g.preventDefault(), g.stopPropagation(), p(() => ut(v, Ne.Last))
            )
        }
        if (
          p(() =>
            dt(a.orientation.value, {
              vertical() {
                return g.key === _e.ArrowUp
                  ? ut(v, Ne.Previous | Ne.WrapAround)
                  : g.key === _e.ArrowDown
                    ? ut(v, Ne.Next | Ne.WrapAround)
                    : an.Error
              },
              horizontal() {
                return g.key === _e.ArrowLeft
                  ? ut(v, Ne.Previous | Ne.WrapAround)
                  : g.key === _e.ArrowRight
                    ? ut(v, Ne.Next | Ne.WrapAround)
                    : an.Error
              },
            }),
          ) === an.Success
        )
          return g.preventDefault()
      }
      let m = V(!1)
      function b() {
        var g
        m.value ||
          ((m.value = !0),
          !e.disabled &&
            ((g = te(r)) == null || g.focus({ preventScroll: !0 }),
            a.setSelectedIndex(u.value),
            Tf(() => {
              m.value = !1
            })))
      }
      function k(g) {
        g.preventDefault()
      }
      let w = Wo(
        se(() => ({ as: e.as, type: t.type })),
        r,
      )
      return () => {
        var g, v
        let S = {
            selected: d.value,
            disabled: (g = e.disabled) != null ? g : !1,
          },
          { ...T } = e,
          M = {
            ref: r,
            onKeydown: h,
            onMousedown: k,
            onClick: b,
            id: i,
            role: "tab",
            type: w.value,
            "aria-controls":
              (v = te(a.panels.value[u.value])) == null ? void 0 : v.id,
            "aria-selected": d.value,
            tabIndex: d.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return Qt({
          ourProps: M,
          theirProps: T,
          slot: S,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  tp = ft({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let s = Ts("TabPanels")
      return () => {
        let l = { selectedIndex: s.selectedIndex.value }
        return Qt({
          theirProps: e,
          ourProps: {},
          slot: l,
          attrs: n,
          slots: t,
          name: "TabPanels",
        })
      }
    },
  }),
  Zn = ft({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: null },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      var l
      let i = (l = e.id) != null ? l : `headlessui-tabs-panel-${wn()}`,
        a = Ts("TabPanel"),
        r = V(null)
      s({ el: r, $el: r }),
        We(() => a.registerPanel(r)),
        fn(() => a.unregisterPanel(r))
      let o = ze(tr),
        c = se(() => {
          if (o.value) {
            let p = o.value.panels.indexOf(i)
            return p === -1 ? o.value.panels.push(i) - 1 : p
          }
          return -1
        }),
        u = se(() => {
          let p = a.panels.value.indexOf(r)
          return p === -1 ? c.value : p
        }),
        d = se(() => u.value === a.selectedIndex.value)
      return () => {
        var p
        let h = { selected: d.value },
          { tabIndex: m, ...b } = e,
          k = {
            ref: r,
            id: i,
            role: "tabpanel",
            "aria-labelledby":
              (p = te(a.tabs.value[u.value])) == null ? void 0 : p.id,
            tabIndex: d.value ? m : -1,
          }
        return !d.value && e.unmount && !e.static
          ? Ee(Gn, { as: "span", "aria-hidden": !0, ...k })
          : Qt({
              ourProps: k,
              theirProps: b,
              slot: h,
              attrs: t,
              slots: n,
              features: bs.Static | bs.RenderStrategy,
              visible: d.value,
              name: "TabPanel",
            })
      }
    },
  })
const Ln = typeof document < "u"
function tu(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function np(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && tu(e.default))
  )
}
const we = Object.assign
function Rl(e, t) {
  const n = {}
  for (const s in t) {
    const l = t[s]
    n[s] = Ct(l) ? l.map(e) : e(l)
  }
  return n
}
const us = () => {},
  Ct = Array.isArray,
  nu = /#/g,
  sp = /&/g,
  lp = /\//g,
  ip = /=/g,
  rp = /\?/g,
  su = /\+/g,
  ap = /%5B/g,
  op = /%5D/g,
  lu = /%5E/g,
  up = /%60/g,
  iu = /%7B/g,
  cp = /%7C/g,
  ru = /%7D/g,
  dp = /%20/g
function nr(e) {
  return encodeURI("" + e)
    .replace(cp, "|")
    .replace(ap, "[")
    .replace(op, "]")
}
function fp(e) {
  return nr(e).replace(iu, "{").replace(ru, "}").replace(lu, "^")
}
function Ci(e) {
  return nr(e)
    .replace(su, "%2B")
    .replace(dp, "+")
    .replace(nu, "%23")
    .replace(sp, "%26")
    .replace(up, "`")
    .replace(iu, "{")
    .replace(ru, "}")
    .replace(lu, "^")
}
function pp(e) {
  return Ci(e).replace(ip, "%3D")
}
function hp(e) {
  return nr(e).replace(nu, "%23").replace(rp, "%3F")
}
function gp(e) {
  return e == null ? "" : hp(e).replace(lp, "%2F")
}
function ys(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const mp = /\/$/,
  bp = (e) => e.replace(mp, "")
function Nl(e, t, n = "/") {
  let s,
    l = {},
    i = "",
    a = ""
  const r = t.indexOf("#")
  let o = t.indexOf("?")
  return (
    r < o && r >= 0 && (o = -1),
    o > -1 &&
      ((s = t.slice(0, o)),
      (i = t.slice(o + 1, r > -1 ? r : t.length)),
      (l = e(i))),
    r > -1 && ((s = s || t.slice(0, r)), (a = t.slice(r, t.length))),
    (s = wp(s ?? t, n)),
    { fullPath: s + (i && "?") + i + a, path: s, query: l, hash: ys(a) }
  )
}
function vp(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function sa(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function yp(e, t, n) {
  const s = t.matched.length - 1,
    l = n.matched.length - 1
  return (
    s > -1 &&
    s === l &&
    Vn(t.matched[s], n.matched[l]) &&
    au(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Vn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function au(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!xp(e[n], t[n])) return !1
  return !0
}
function xp(e, t) {
  return Ct(e) ? la(e, t) : Ct(t) ? la(t, e) : e === t
}
function la(e, t) {
  return Ct(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function wp(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    s = e.split("/"),
    l = s[s.length - 1]
  ;(l === ".." || l === ".") && s.push("")
  let i = n.length - 1,
    a,
    r
  for (a = 0; a < s.length; a++)
    if (((r = s[a]), r !== "."))
      if (r === "..") i > 1 && i--
      else break
  return n.slice(0, i).join("/") + "/" + s.slice(a).join("/")
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
var xs
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(xs || (xs = {}))
var cs
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(cs || (cs = {}))
function Sp(e) {
  if (!e)
    if (Ln) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), bp(e)
}
const Cp = /^[^#]+#/
function Ep(e, t) {
  return e.replace(Cp, "#") + t
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
const wl = () => ({ left: window.scrollX, top: window.scrollY })
function kp(e) {
  let t
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      l =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!l) return
    t = Tp(l, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function ia(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Ei = new Map()
function Pp(e, t) {
  Ei.set(e, t)
}
function Ip(e) {
  const t = Ei.get(e)
  return Ei.delete(e), t
}
let $p = () => location.protocol + "//" + location.host
function ou(e, t) {
  const { pathname: n, search: s, hash: l } = t,
    i = e.indexOf("#")
  if (i > -1) {
    let r = l.includes(e.slice(i)) ? e.slice(i).length : 1,
      o = l.slice(r)
    return o[0] !== "/" && (o = "/" + o), sa(o, "")
  }
  return sa(n, e) + s + l
}
function Mp(e, t, n, s) {
  let l = [],
    i = [],
    a = null
  const r = ({ state: p }) => {
    const h = ou(e, location),
      m = n.value,
      b = t.value
    let k = 0
    if (p) {
      if (((n.value = h), (t.value = p), a && a === m)) {
        a = null
        return
      }
      k = b ? p.position - b.position : 0
    } else s(h)
    l.forEach((w) => {
      w(n.value, m, {
        delta: k,
        type: xs.pop,
        direction: k ? (k > 0 ? cs.forward : cs.back) : cs.unknown,
      })
    })
  }
  function o() {
    a = n.value
  }
  function c(p) {
    l.push(p)
    const h = () => {
      const m = l.indexOf(p)
      m > -1 && l.splice(m, 1)
    }
    return i.push(h), h
  }
  function u() {
    const { history: p } = window
    p.state && p.replaceState(we({}, p.state, { scroll: wl() }), "")
  }
  function d() {
    for (const p of i) p()
    ;(i = []),
      window.removeEventListener("popstate", r),
      window.removeEventListener("beforeunload", u)
  }
  return (
    window.addEventListener("popstate", r),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: o, listen: c, destroy: d }
  )
}
function ra(e, t, n, s = !1, l = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: l ? wl() : null,
  }
}
function Ap(e) {
  const { history: t, location: n } = window,
    s = { value: ou(e, n) },
    l = { value: t.state }
  l.value ||
    i(
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
  function i(o, c, u) {
    const d = e.indexOf("#"),
      p =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + o
          : $p() + e + o
    try {
      t[u ? "replaceState" : "pushState"](c, "", p), (l.value = c)
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](p)
    }
  }
  function a(o, c) {
    const u = we({}, t.state, ra(l.value.back, o, l.value.forward, !0), c, {
      position: l.value.position,
    })
    i(o, u, !0), (s.value = o)
  }
  function r(o, c) {
    const u = we({}, l.value, t.state, { forward: o, scroll: wl() })
    i(u.current, u, !0)
    const d = we({}, ra(s.value, o, null), { position: u.position + 1 }, c)
    i(o, d, !1), (s.value = o)
  }
  return { location: s, state: l, push: r, replace: a }
}
function Op(e) {
  e = Sp(e)
  const t = Ap(e),
    n = Mp(e, t.state, t.location, t.replace)
  function s(i, a = !0) {
    a || n.pauseListeners(), history.go(i)
  }
  const l = we(
    { location: "", base: e, go: s, createHref: Ep.bind(null, e) },
    t,
    n,
  )
  return (
    Object.defineProperty(l, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(l, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    l
  )
}
function Lp(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function uu(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const cu = Symbol("")
var aa
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(aa || (aa = {}))
function Wn(e, t) {
  return we(new Error(), { type: e, [cu]: !0 }, t)
}
function Nt(e, t) {
  return e instanceof Error && cu in e && (t == null || !!(e.type & t))
}
const oa = "[^/]+?",
  jp = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Bp = /[.+*?^${}()[\]/\\]/g
function Rp(e, t) {
  const n = we({}, jp, t),
    s = []
  let l = n.start ? "^" : ""
  const i = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (l += "/")
    for (let d = 0; d < c.length; d++) {
      const p = c[d]
      let h = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0)
        d || (l += "/"), (l += p.value.replace(Bp, "\\$&")), (h += 40)
      else if (p.type === 1) {
        const { value: m, repeatable: b, optional: k, regexp: w } = p
        i.push({ name: m, repeatable: b, optional: k })
        const g = w || oa
        if (g !== oa) {
          h += 10
          try {
            new RegExp(`(${g})`)
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${g}): ` + S.message,
            )
          }
        }
        let v = b ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`
        d || (v = k && c.length < 2 ? `(?:/${v})` : "/" + v),
          k && (v += "?"),
          (l += v),
          (h += 20),
          k && (h += -8),
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
  n.strict || (l += "/?"),
    n.end ? (l += "$") : n.strict && !l.endsWith("/") && (l += "(?:/|$)")
  const a = new RegExp(l, n.sensitive ? "" : "i")
  function r(c) {
    const u = c.match(a),
      d = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const h = u[p] || "",
        m = i[p - 1]
      d[m.name] = h && m.repeatable ? h.split("/") : h
    }
    return d
  }
  function o(c) {
    let u = "",
      d = !1
    for (const p of e) {
      ;(!d || !u.endsWith("/")) && (u += "/"), (d = !1)
      for (const h of p)
        if (h.type === 0) u += h.value
        else if (h.type === 1) {
          const { value: m, repeatable: b, optional: k } = h,
            w = m in c ? c[m] : ""
          if (Ct(w) && !b)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const g = Ct(w) ? w.join("/") : w
          if (!g)
            if (k)
              p.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${m}"`)
          u += g
        }
    }
    return u || "/"
  }
  return { re: a, score: s, keys: i, parse: r, stringify: o }
}
function Np(e, t) {
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
function du(e, t) {
  let n = 0
  const s = e.score,
    l = t.score
  for (; n < s.length && n < l.length; ) {
    const i = Np(s[n], l[n])
    if (i) return i
    n++
  }
  if (Math.abs(l.length - s.length) === 1) {
    if (ua(s)) return 1
    if (ua(l)) return -1
  }
  return l.length - s.length
}
function ua(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const zp = { type: 0, value: "" },
  _p = /[a-zA-Z0-9_]/
function Dp(e) {
  if (!e) return [[]]
  if (e === "/") return [[zp]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`)
  }
  let n = 0,
    s = n
  const l = []
  let i
  function a() {
    i && l.push(i), (i = [])
  }
  let r = 0,
    o,
    c = "",
    u = ""
  function d() {
    c &&
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (i.length > 1 &&
              (o === "*" || o === "+") &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            i.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: o === "*" || o === "+",
              optional: o === "*" || o === "?",
            }))
          : t("Invalid state to consume buffer"),
      (c = ""))
  }
  function p() {
    c += o
  }
  for (; r < e.length; ) {
    if (((o = e[r++]), o === "\\" && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        o === "/" ? (c && d(), a()) : o === ":" ? (d(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        o === "("
          ? (n = 2)
          : _p.test(o)
            ? p()
            : (d(), (n = 0), o !== "*" && o !== "?" && o !== "+" && r--)
        break
      case 2:
        o === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + o)
            : (n = 3)
          : (u += o)
        break
      case 3:
        d(), (n = 0), o !== "*" && o !== "?" && o !== "+" && r--, (u = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), a(), l
}
function Fp(e, t, n) {
  const s = Rp(Dp(e.path), n),
    l = we(s, { record: e, parent: t, children: [], alias: [] })
  return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l
}
function Hp(e, t) {
  const n = [],
    s = new Map()
  t = pa({ strict: !1, end: !0, sensitive: !1 }, t)
  function l(d) {
    return s.get(d)
  }
  function i(d, p, h) {
    const m = !h,
      b = da(d)
    b.aliasOf = h && h.record
    const k = pa(t, d),
      w = [b]
    if ("alias" in d) {
      const S = typeof d.alias == "string" ? [d.alias] : d.alias
      for (const T of S)
        w.push(
          da(
            we({}, b, {
              components: h ? h.record.components : b.components,
              path: T,
              aliasOf: h ? h.record : b,
            }),
          ),
        )
    }
    let g, v
    for (const S of w) {
      const { path: T } = S
      if (p && T[0] !== "/") {
        const M = p.record.path,
          E = M[M.length - 1] === "/" ? "" : "/"
        S.path = p.record.path + (T && E + T)
      }
      if (
        ((g = Fp(S, p, k)),
        h
          ? h.alias.push(g)
          : ((v = v || g),
            v !== g && v.alias.push(g),
            m && d.name && !fa(g) && a(d.name)),
        fu(g) && o(g),
        b.children)
      ) {
        const M = b.children
        for (let E = 0; E < M.length; E++) i(M[E], g, h && h.children[E])
      }
      h = h || g
    }
    return v
      ? () => {
          a(v)
        }
      : us
  }
  function a(d) {
    if (uu(d)) {
      const p = s.get(d)
      p &&
        (s.delete(d),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(a),
        p.alias.forEach(a))
    } else {
      const p = n.indexOf(d)
      p > -1 &&
        (n.splice(p, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(a),
        d.alias.forEach(a))
    }
  }
  function r() {
    return n
  }
  function o(d) {
    const p = Wp(d, n)
    n.splice(p, 0, d), d.record.name && !fa(d) && s.set(d.record.name, d)
  }
  function c(d, p) {
    let h,
      m = {},
      b,
      k
    if ("name" in d && d.name) {
      if (((h = s.get(d.name)), !h)) throw Wn(1, { location: d })
      ;(k = h.record.name),
        (m = we(
          ca(
            p.params,
            h.keys
              .filter((v) => !v.optional)
              .concat(h.parent ? h.parent.keys.filter((v) => v.optional) : [])
              .map((v) => v.name),
          ),
          d.params &&
            ca(
              d.params,
              h.keys.map((v) => v.name),
            ),
        )),
        (b = h.stringify(m))
    } else if (d.path != null)
      (b = d.path),
        (h = n.find((v) => v.re.test(b))),
        h && ((m = h.parse(b)), (k = h.record.name))
    else {
      if (((h = p.name ? s.get(p.name) : n.find((v) => v.re.test(p.path))), !h))
        throw Wn(1, { location: d, currentLocation: p })
      ;(k = h.record.name),
        (m = we({}, p.params, d.params)),
        (b = h.stringify(m))
    }
    const w = []
    let g = h
    for (; g; ) w.unshift(g.record), (g = g.parent)
    return { name: k, path: b, params: m, matched: w, meta: Vp(w) }
  }
  e.forEach((d) => i(d))
  function u() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: a,
    clearRoutes: u,
    getRoutes: r,
    getRecordMatcher: l,
  }
}
function ca(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function da(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Gp(e),
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
function Gp(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n
  return t
}
function fa(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Vp(e) {
  return e.reduce((t, n) => we(t, n.meta), {})
}
function pa(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Wp(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    du(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const l = qp(e)
  return l && (s = t.lastIndexOf(l, s - 1)), s
}
function qp(e) {
  let t = e
  for (; (t = t.parent); ) if (fu(t) && du(e, t) === 0) return t
}
function fu({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function Up(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const s = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let l = 0; l < s.length; ++l) {
    const i = s[l].replace(su, " "),
      a = i.indexOf("="),
      r = ys(a < 0 ? i : i.slice(0, a)),
      o = a < 0 ? null : ys(i.slice(a + 1))
    if (r in t) {
      let c = t[r]
      Ct(c) || (c = t[r] = [c]), c.push(o)
    } else t[r] = o
  }
  return t
}
function ha(e) {
  let t = ""
  for (let n in e) {
    const s = e[n]
    if (((n = pp(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Ct(s) ? s.map((i) => i && Ci(i)) : [s && Ci(s)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i))
    })
  }
  return t
}
function Kp(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ct(s)
        ? s.map((l) => (l == null ? null : "" + l))
        : s == null
          ? s
          : "" + s)
  }
  return t
}
const Yp = Symbol(""),
  ga = Symbol(""),
  Sl = Symbol(""),
  pu = Symbol(""),
  Ti = Symbol("")
function Qn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const l = e.indexOf(s)
        l > -1 && e.splice(l, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function rn(e, t, n, s, l, i = (a) => a()) {
  const a = s && (s.enterCallbacks[l] = s.enterCallbacks[l] || [])
  return () =>
    new Promise((r, o) => {
      const c = (p) => {
          p === !1
            ? o(Wn(4, { from: n, to: t }))
            : p instanceof Error
              ? o(p)
              : Lp(p)
                ? o(Wn(2, { from: t, to: p }))
                : (a &&
                    s.enterCallbacks[l] === a &&
                    typeof p == "function" &&
                    a.push(p),
                  r())
        },
        u = i(() => e.call(s && s.instances[l], t, n, c))
      let d = Promise.resolve(u)
      e.length < 3 && (d = d.then(c)), d.catch((p) => o(p))
    })
}
function zl(e, t, n, s, l = (i) => i()) {
  const i = []
  for (const a of e)
    for (const r in a.components) {
      let o = a.components[r]
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (tu(o)) {
          const u = (o.__vccOpts || o)[t]
          u && i.push(rn(u, n, s, a, r, l))
        } else {
          let c = o()
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${r}" at "${a.path}"`,
                )
              const d = np(u) ? u.default : u
              ;(a.mods[r] = u), (a.components[r] = d)
              const h = (d.__vccOpts || d)[t]
              return h && rn(h, n, s, a, r, l)()
            }),
          )
        }
    }
  return i
}
function ma(e) {
  const t = ze(Sl),
    n = ze(pu),
    s = se(() => {
      const o = Z(e.to)
      return t.resolve(o)
    }),
    l = se(() => {
      const { matched: o } = s.value,
        { length: c } = o,
        u = o[c - 1],
        d = n.matched
      if (!u || !d.length) return -1
      const p = d.findIndex(Vn.bind(null, u))
      if (p > -1) return p
      const h = ba(o[c - 2])
      return c > 1 && ba(u) === h && d[d.length - 1].path !== h
        ? d.findIndex(Vn.bind(null, o[c - 2]))
        : p
    }),
    i = se(() => l.value > -1 && e0(n.params, s.value.params)),
    a = se(
      () =>
        l.value > -1 &&
        l.value === n.matched.length - 1 &&
        au(n.params, s.value.params),
    )
  function r(o = {}) {
    if (Qp(o)) {
      const c = t[Z(e.replace) ? "replace" : "push"](Z(e.to)).catch(us)
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
    href: se(() => s.value.href),
    isActive: i,
    isExactActive: a,
    navigate: r,
  }
}
function Xp(e) {
  return e.length === 1 ? e[0] : e
}
const Jp = ft({
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
    useLink: ma,
    setup(e, { slots: t }) {
      const n = Ss(ma(e)),
        { options: s } = ze(Sl),
        l = se(() => ({
          [va(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [va(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const i = t.default && Xp(t.default(n))
        return e.custom
          ? i
          : Ee(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: l.value,
              },
              i,
            )
      }
    },
  }),
  Zp = Jp
function Qp(e) {
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
function e0(e, t) {
  for (const n in t) {
    const s = t[n],
      l = e[n]
    if (typeof s == "string") {
      if (s !== l) return !1
    } else if (!Ct(l) || l.length !== s.length || s.some((i, a) => i !== l[a]))
      return !1
  }
  return !0
}
function ba(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const va = (e, t, n) => e ?? t ?? n,
  t0 = ft({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = ze(Ti),
        l = se(() => e.route || s.value),
        i = ze(ga, 0),
        a = se(() => {
          let c = Z(i)
          const { matched: u } = l.value
          let d
          for (; (d = u[c]) && !d.components; ) c++
          return c
        }),
        r = se(() => l.value.matched[a.value])
      bt(
        ga,
        se(() => a.value + 1),
      ),
        bt(Yp, r),
        bt(Ti, l)
      const o = V()
      return (
        cn(
          () => [o.value, r.value, e.name],
          ([c, u, d], [p, h, m]) => {
            u &&
              ((u.instances[d] = c),
              h &&
                h !== u &&
                c &&
                c === p &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !Vn(u, h) || !p) &&
                (u.enterCallbacks[d] || []).forEach((b) => b(c))
          },
          { flush: "post" },
        ),
        () => {
          const c = l.value,
            u = e.name,
            d = r.value,
            p = d && d.components[u]
          if (!p) return ya(n.default, { Component: p, route: c })
          const h = d.props[u],
            m = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                  ? h(c)
                  : h
              : null,
            k = Ee(
              p,
              we({}, m, t, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (d.instances[u] = null)
                },
                ref: o,
              }),
            )
          return ya(n.default, { Component: k, route: c }) || k
        }
      )
    },
  })
function ya(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const n0 = t0
function s0(e) {
  const t = Hp(e.routes, e),
    n = e.parseQuery || Up,
    s = e.stringifyQuery || ha,
    l = e.history,
    i = Qn(),
    a = Qn(),
    r = Qn(),
    o = jc(tn)
  let c = tn
  Ln &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const u = Rl.bind(null, (R) => "" + R),
    d = Rl.bind(null, gp),
    p = Rl.bind(null, ys)
  function h(R, ee) {
    let X, ne
    return (
      uu(R) ? ((X = t.getRecordMatcher(R)), (ne = ee)) : (ne = R),
      t.addRoute(ne, X)
    )
  }
  function m(R) {
    const ee = t.getRecordMatcher(R)
    ee && t.removeRoute(ee)
  }
  function b() {
    return t.getRoutes().map((R) => R.record)
  }
  function k(R) {
    return !!t.getRecordMatcher(R)
  }
  function w(R, ee) {
    if (((ee = we({}, ee || o.value)), typeof R == "string")) {
      const P = Nl(n, R, ee.path),
        _ = t.resolve({ path: P.path }, ee),
        D = l.createHref(P.fullPath)
      return we(P, _, {
        params: p(_.params),
        hash: ys(P.hash),
        redirectedFrom: void 0,
        href: D,
      })
    }
    let X
    if (R.path != null) X = we({}, R, { path: Nl(n, R.path, ee.path).path })
    else {
      const P = we({}, R.params)
      for (const _ in P) P[_] == null && delete P[_]
      ;(X = we({}, R, { params: d(P) })), (ee.params = d(ee.params))
    }
    const ne = t.resolve(X, ee),
      Ie = R.hash || ""
    ne.params = u(p(ne.params))
    const y = vp(s, we({}, R, { hash: fp(Ie), path: ne.path })),
      C = l.createHref(y)
    return we(
      { fullPath: y, hash: Ie, query: s === ha ? Kp(R.query) : R.query || {} },
      ne,
      { redirectedFrom: void 0, href: C },
    )
  }
  function g(R) {
    return typeof R == "string" ? Nl(n, R, o.value.path) : we({}, R)
  }
  function v(R, ee) {
    if (c !== R) return Wn(8, { from: ee, to: R })
  }
  function S(R) {
    return E(R)
  }
  function T(R) {
    return S(we(g(R), { replace: !0 }))
  }
  function M(R) {
    const ee = R.matched[R.matched.length - 1]
    if (ee && ee.redirect) {
      const { redirect: X } = ee
      let ne = typeof X == "function" ? X(R) : X
      return (
        typeof ne == "string" &&
          ((ne =
            ne.includes("?") || ne.includes("#") ? (ne = g(ne)) : { path: ne }),
          (ne.params = {})),
        we(
          {
            query: R.query,
            hash: R.hash,
            params: ne.path != null ? {} : R.params,
          },
          ne,
        )
      )
    }
  }
  function E(R, ee) {
    const X = (c = w(R)),
      ne = o.value,
      Ie = R.state,
      y = R.force,
      C = R.replace === !0,
      P = M(X)
    if (P)
      return E(
        we(g(P), {
          state: typeof P == "object" ? we({}, Ie, P.state) : Ie,
          force: y,
          replace: C,
        }),
        ee || X,
      )
    const _ = X
    _.redirectedFrom = ee
    let D
    return (
      !y &&
        yp(s, ne, X) &&
        ((D = Wn(16, { to: _, from: ne })), Le(ne, ne, !0, !1)),
      (D ? Promise.resolve(D) : $(_, ne))
        .catch((N) => (Nt(N) ? (Nt(N, 2) ? N : me(N)) : B(N, _, ne)))
        .then((N) => {
          if (N) {
            if (Nt(N, 2))
              return E(
                we({ replace: C }, g(N.to), {
                  state: typeof N.to == "object" ? we({}, Ie, N.to.state) : Ie,
                  force: y,
                }),
                ee || _,
              )
          } else N = F(_, ne, !0, C, Ie)
          return j(_, ne, N), N
        })
    )
  }
  function A(R, ee) {
    const X = v(R, ee)
    return X ? Promise.reject(X) : Promise.resolve()
  }
  function I(R) {
    const ee = en.values().next().value
    return ee && typeof ee.runWithContext == "function"
      ? ee.runWithContext(R)
      : R()
  }
  function $(R, ee) {
    let X
    const [ne, Ie, y] = l0(R, ee)
    X = zl(ne.reverse(), "beforeRouteLeave", R, ee)
    for (const P of ne)
      P.leaveGuards.forEach((_) => {
        X.push(rn(_, R, ee))
      })
    const C = A.bind(null, R, ee)
    return (
      X.push(C),
      et(X)
        .then(() => {
          X = []
          for (const P of i.list()) X.push(rn(P, R, ee))
          return X.push(C), et(X)
        })
        .then(() => {
          X = zl(Ie, "beforeRouteUpdate", R, ee)
          for (const P of Ie)
            P.updateGuards.forEach((_) => {
              X.push(rn(_, R, ee))
            })
          return X.push(C), et(X)
        })
        .then(() => {
          X = []
          for (const P of y)
            if (P.beforeEnter)
              if (Ct(P.beforeEnter))
                for (const _ of P.beforeEnter) X.push(rn(_, R, ee))
              else X.push(rn(P.beforeEnter, R, ee))
          return X.push(C), et(X)
        })
        .then(
          () => (
            R.matched.forEach((P) => (P.enterCallbacks = {})),
            (X = zl(y, "beforeRouteEnter", R, ee, I)),
            X.push(C),
            et(X)
          ),
        )
        .then(() => {
          X = []
          for (const P of a.list()) X.push(rn(P, R, ee))
          return X.push(C), et(X)
        })
        .catch((P) => (Nt(P, 8) ? P : Promise.reject(P)))
    )
  }
  function j(R, ee, X) {
    r.list().forEach((ne) => I(() => ne(R, ee, X)))
  }
  function F(R, ee, X, ne, Ie) {
    const y = v(R, ee)
    if (y) return y
    const C = ee === tn,
      P = Ln ? history.state : {}
    X &&
      (ne || C
        ? l.replace(R.fullPath, we({ scroll: C && P && P.scroll }, Ie))
        : l.push(R.fullPath, Ie)),
      (o.value = R),
      Le(R, ee, X, C),
      me()
  }
  let W
  function de() {
    W ||
      (W = l.listen((R, ee, X) => {
        if (!gt.listening) return
        const ne = w(R),
          Ie = M(ne)
        if (Ie) {
          E(we(Ie, { replace: !0, force: !0 }), ne).catch(us)
          return
        }
        c = ne
        const y = o.value
        Ln && Pp(ia(y.fullPath, X.delta), wl()),
          $(ne, y)
            .catch((C) =>
              Nt(C, 12)
                ? C
                : Nt(C, 2)
                  ? (E(we(g(C.to), { force: !0 }), ne)
                      .then((P) => {
                        Nt(P, 20) &&
                          !X.delta &&
                          X.type === xs.pop &&
                          l.go(-1, !1)
                      })
                      .catch(us),
                    Promise.reject())
                  : (X.delta && l.go(-X.delta, !1), B(C, ne, y)),
            )
            .then((C) => {
              ;(C = C || F(ne, y, !1)),
                C &&
                  (X.delta && !Nt(C, 8)
                    ? l.go(-X.delta, !1)
                    : X.type === xs.pop && Nt(C, 20) && l.go(-1, !1)),
                j(ne, y, C)
            })
            .catch(us)
      }))
  }
  let he = Qn(),
    O = Qn(),
    z
  function B(R, ee, X) {
    me(R)
    const ne = O.list()
    return (
      ne.length ? ne.forEach((Ie) => Ie(R, ee, X)) : console.error(R),
      Promise.reject(R)
    )
  }
  function ye() {
    return z && o.value !== tn
      ? Promise.resolve()
      : new Promise((R, ee) => {
          he.add([R, ee])
        })
  }
  function me(R) {
    return (
      z ||
        ((z = !R),
        de(),
        he.list().forEach(([ee, X]) => (R ? X(R) : ee())),
        he.reset()),
      R
    )
  }
  function Le(R, ee, X, ne) {
    const { scrollBehavior: Ie } = e
    if (!Ln || !Ie) return Promise.resolve()
    const y =
      (!X && Ip(ia(R.fullPath, 0))) ||
      ((ne || !X) && history.state && history.state.scroll) ||
      null
    return hl()
      .then(() => Ie(R, ee, y))
      .then((C) => C && kp(C))
      .catch((C) => B(C, R, ee))
  }
  const je = (R) => l.go(R)
  let ht
  const en = new Set(),
    gt = {
      currentRoute: o,
      listening: !0,
      addRoute: h,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: k,
      getRoutes: b,
      resolve: w,
      options: e,
      push: S,
      replace: T,
      go: je,
      back: () => je(-1),
      forward: () => je(1),
      beforeEach: i.add,
      beforeResolve: a.add,
      afterEach: r.add,
      onError: O.add,
      isReady: ye,
      install(R) {
        const ee = this
        R.component("RouterLink", Zp),
          R.component("RouterView", n0),
          (R.config.globalProperties.$router = ee),
          Object.defineProperty(R.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Z(o),
          }),
          Ln &&
            !ht &&
            o.value === tn &&
            ((ht = !0), S(l.location).catch((Ie) => {}))
        const X = {}
        for (const Ie in tn)
          Object.defineProperty(X, Ie, {
            get: () => o.value[Ie],
            enumerable: !0,
          })
        R.provide(Sl, ee), R.provide(pu, ro(X)), R.provide(Ti, o)
        const ne = R.unmount
        en.add(R),
          (R.unmount = function () {
            en.delete(R),
              en.size < 1 &&
                ((c = tn),
                W && W(),
                (W = null),
                (o.value = tn),
                (ht = !1),
                (z = !1)),
              ne()
          })
      },
    }
  function et(R) {
    return R.reduce((ee, X) => ee.then(() => I(X)), Promise.resolve())
  }
  return gt
}
function l0(e, t) {
  const n = [],
    s = [],
    l = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let a = 0; a < i; a++) {
    const r = t.matched[a]
    r && (e.matched.find((c) => Vn(c, r)) ? s.push(r) : n.push(r))
    const o = e.matched[a]
    o && (t.matched.find((c) => Vn(c, o)) || l.push(o))
  }
  return [n, s, l]
}
function i0() {
  return ze(Sl)
}
var As = {
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
const r0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  He =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: s = 2,
        absoluteStrokeWidth: l,
        color: i,
        class: a,
        ...r
      },
      { attrs: o, slots: c },
    ) =>
      Ee(
        "svg",
        {
          ...As,
          width: n || As.width,
          height: n || As.height,
          stroke: i || As.stroke,
          "stroke-width": l ? (Number(s) * 24) / Number(n) : s,
          ...o,
          class: ["lucide", `lucide-${r0(e)}`],
          ...r,
        },
        [...t.map((u) => Ee(...u)), ...(c.default ? [c.default()] : [])],
      )
const xa = He("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const Pn = He("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const a0 = He("CloudDrizzleIcon", [
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
const o0 = He("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }],
])
const hu = He("EyeOffIcon", [
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
const u0 = He("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
const c0 = He("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
const d0 = He("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
const f0 = He("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
const p0 = He("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
const h0 = He("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
const g0 = He("PencilRulerIcon", [
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
const m0 = He("RabbitIcon", [
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
const b0 = He("SunIcon", [
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
const _l = He("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const v0 = He("TurtleIcon", [
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
const ki = He("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  yt =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  xt = '</title><path d="',
  wt = '"/></svg>',
  y0 = {
    title: "Blender",
    slug: "blender",
    get svg() {
      return yt + "Blender" + xt + this.path + wt
    },
    path: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
    source: "https://www.blender.org/about/logo",
    hex: "E87D0D",
    guidelines: "https://www.blender.org/about/logo",
  },
  es = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return yt + "Bootstrap" + xt + this.path + wt
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  x0 = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return yt + "Cloudflare" + xt + this.path + wt
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  w0 = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return yt + "Figma" + xt + this.path + wt
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  gu = {
    title: "GitHub",
    slug: "github",
    get svg() {
      return yt + "GitHub" + xt + this.path + wt
    },
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    source: "https://github.com/logos",
    hex: "181717",
    guidelines: "https://github.com/logos",
  },
  S0 = {
    title: "Instagram",
    slug: "instagram",
    get svg() {
      return yt + "Instagram" + xt + this.path + wt
    },
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    source: "https://about.meta.com/brand/resources/instagram",
    hex: "E4405F",
    guidelines: "https://about.meta.com/brand/resources/instagram",
  },
  wa = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return yt + "JavaScript" + xt + this.path + wt
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  C0 = {
    title: "LinkedIn",
    slug: "linkedin",
    get svg() {
      return yt + "LinkedIn" + xt + this.path + wt
    },
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    source: "https://brand.linkedin.com",
    hex: "0A66C2",
    guidelines: "https://brand.linkedin.com/policies",
  },
  Os = {
    title: "PHP",
    slug: "php",
    get svg() {
      return yt + "PHP" + xt + this.path + wt
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  E0 = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return yt + "Tailwind CSS" + xt + this.path + wt
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  T0 = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return yt + "Vue.js" + xt + this.path + wt
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
  $t = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return yt + "WordPress" + xt + this.path + wt
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  k0 = { class: "flex justify-center p-5 gap-5 content-center" },
  P0 = { class: "flex justify-between gap-2 w-full content-center" },
  I0 = { class: "flex gap-1 p-2" },
  $0 = { class: "flex gap-5 p-2 relative" },
  M0 = { class: "py-1", role: "menu" },
  A0 = { key: 0 },
  O0 = { key: 1 },
  L0 = { key: 0 },
  j0 = { key: 1 },
  B0 = { class: "py-1", role: "menu" },
  R0 = { class: "py-1", role: "menu" },
  N0 = { class: "py-1", role: "menu" },
  z0 = { class: "py-1", role: "menu" },
  _0 = { class: "py-1", role: "menu" },
  D0 = { class: "flex gap-3 content-center" },
  F0 = {
    href: "https://github.com/josephclaytonhansen",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  H0 = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "16px",
    height: "16px",
  },
  G0 = ["d"],
  V0 = { class: "lg:hidden flex" },
  W0 = { class: "flex gap-1 p-2" },
  q0 = { class: "flex flex-col gap-2 p-2" },
  U0 = { class: "flex justify-between" },
  K0 = { class: "flex justify-between items-center" },
  Y0 = { class: "flex gap-1 p-2" },
  X0 = { class: "ml-5" },
  J0 = { class: "ml-5" },
  Z0 = { class: "ml-5" },
  Q0 = { class: "ml-5" },
  eh = { class: "ml-5" },
  th = { class: "ml-5" },
  nh = { class: "ml-5" },
  sh = { class: "ml-5" },
  lh = { class: "ml-5" },
  ih = { class: "ml-5" },
  rh = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = V(5),
        s = t,
        l = i0(),
        i = (c) => {
          ;(n.value = c.target.value), s("update:brightness", n.value)
          let u = "--swiper-navigation-color",
            d = "--swiper-pagination-color",
            p = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(u, p),
            document.documentElement.style.setProperty(d, p)
        }
      We(() => {
        let c = window.localStorage
        if (c.getItem("brightness")) {
          n.value = Number(c.getItem("brightness"))
          let u = "--swiper-navigation-color",
            d = "--swiper-pagination-color",
            p = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(u, p),
            document.documentElement.style.setProperty(d, p)
        }
      })
      const a = () => {
          window.location.href = "/"
        },
        r = () => {
          let c = document.getElementById("mobileMenu")
          c.classList.contains("hidden")
            ? c.classList.remove("hidden")
            : c.classList.add("hidden")
        },
        o = (c) => {
          r(), l.push(c)
        }
      return (c, u) => (
        L(),
        K(
          Pe,
          null,
          [
            f("div", k0, [
              u[59] || (u[59] = f("div", { class: "w-1/12" }, null, -1)),
              f(
                "div",
                {
                  class: x([
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
                  f("div", P0, [
                    f("div", I0, [
                      q(
                        Z(_l),
                        {
                          class: x({
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
                      f(
                        "p",
                        {
                          class: x([
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
                    f("div", $0, [
                      q(
                        Z(nn),
                        { class: "relative inline-block text-left" },
                        {
                          default: ae(() => [
                            q(
                              Z(bn),
                              {
                                "aria-label": "Web dropdown menu",
                                class: x([
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
                                default: ae(() => [
                                  u[52] || (u[52] = oe(" Web", -1)),
                                  q(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            q(
                              Z(vn),
                              {
                                class: x([
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
                                default: ae(() => [
                                  f("div", M0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[0] ||
                                          (u[0] = (d) =>
                                            c.$router.push("/web-portfolio")),
                                        class: x([
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
                                          ? (L(), K("b", A0, "Web Portfolio"))
                                          : (L(),
                                            K("span", O0, "Web Portfolio")),
                                      ],
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[1] ||
                                          (u[1] = (d) =>
                                            c.$router.push("/web-services")),
                                        class: x([
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
                                          ? (L(), K("b", L0, "Web Services"))
                                          : (L(),
                                            K("span", j0, "Web Services")),
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
                      q(
                        Z(nn),
                        { class: "relative inline-block text-left" },
                        {
                          default: ae(() => [
                            q(
                              Z(bn),
                              {
                                "aria-label": "Unity dropdown menu",
                                class: x([
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
                                default: ae(() => [
                                  u[53] || (u[53] = oe(" Unity", -1)),
                                  q(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            q(
                              Z(vn),
                              {
                                class: x([
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
                                default: ae(() => [
                                  f("div", B0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[2] ||
                                          (u[2] = (d) =>
                                            c.$router.push(
                                              "/unity-editor-scripts",
                                            )),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Helpful Editor Scripts",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[3] ||
                                          (u[3] = (d) =>
                                            c.$router.push("/unity-projects")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Projects",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[4] ||
                                          (u[4] = (d) =>
                                            c.$router.push(
                                              "/unity-shader-graph",
                                            )),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Shader Graph",
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
                      q(
                        Z(nn),
                        { class: "relative inline-block text-left" },
                        {
                          default: ae(() => [
                            q(
                              Z(bn),
                              {
                                "aria-label": "Programming dropdown menu",
                                class: x([
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
                                default: ae(() => [
                                  u[54] || (u[54] = oe(" Programming", -1)),
                                  q(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            q(
                              Z(vn),
                              {
                                class: x([
                                  "absolute z-10 mt-1 w-64 rounded",
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
                                default: ae(() => [
                                  f("div", R0, [
                                    f(
                                      "div",
                                      {
                                        class: x([
                                          "px-4 py-1 text-sm font-semibold opacity-75",
                                          {
                                            "text-slate-700": n.value == 5,
                                            "text-slate-600": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      " PHP ",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[5] ||
                                          (u[5] = (d) =>
                                            c.$router.push("/figref")),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "FigRef",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[6] ||
                                          (u[6] = (d) =>
                                            c.$router.push(
                                              "/wordpress-themes",
                                            )),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Custom WordPress Themes",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[7] ||
                                          (u[7] = (d) =>
                                            c.$router.push(
                                              "/wordpress-plugins",
                                            )),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "WordPress Plugins",
                                      2,
                                    ),
                                    f(
                                      "div",
                                      {
                                        class: x([
                                          "px-4 py-1 text-sm font-semibold opacity-75 mt-2",
                                          {
                                            "text-slate-700": n.value == 5,
                                            "text-slate-600": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      " JavaScript ",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[8] ||
                                          (u[8] = (d) =>
                                            c.$router.push(
                                              "/discourse-image-comparison",
                                            )),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Discourse Image Comparison Slider",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[9] ||
                                          (u[9] = (d) =>
                                            c.$router.push("/garden-tracker")),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Garden Tracker",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[10] ||
                                          (u[10] = (d) =>
                                            c.$router.push(
                                              "/javascript-snippets",
                                            )),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Javascript Snippets",
                                      2,
                                    ),
                                    f(
                                      "div",
                                      {
                                        class: x([
                                          "px-4 py-1 text-sm font-semibold opacity-75 mt-2",
                                          {
                                            "text-slate-700": n.value == 5,
                                            "text-slate-600": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      " Arduino ",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[11] ||
                                          (u[11] = (d) =>
                                            c.$router.push(
                                              "/blender-arduino-controller",
                                            )),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Blender Arduino Controller",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[12] ||
                                          (u[12] = (d) =>
                                            c.$router.push("/arduino-leds")),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "LEDs",
                                      2,
                                    ),
                                    f(
                                      "div",
                                      {
                                        class: x([
                                          "px-4 py-1 text-sm font-semibold opacity-75 mt-2",
                                          {
                                            "text-slate-700": n.value == 5,
                                            "text-slate-600": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      " Python ",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[13] ||
                                          (u[13] = (d) =>
                                            c.$router.push(
                                              "/instagram-scraper",
                                            )),
                                        class: x([
                                          "block px-6 py-1 cursor-pointer text-sm",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Instagram Scraper",
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
                      q(
                        Z(nn),
                        { class: "relative inline-block text-left" },
                        {
                          default: ae(() => [
                            q(
                              Z(bn),
                              {
                                "aria-label": "Blender dropdown menu",
                                class: x([
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
                                default: ae(() => [
                                  u[55] || (u[55] = oe(" Blender", -1)),
                                  q(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            q(
                              Z(vn),
                              {
                                class: x([
                                  "absolute z-10 mt-1 w-64 rounded",
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
                                default: ae(() => [
                                  f("div", N0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[14] ||
                                          (u[14] = (d) =>
                                            c.$router.push("/blender-art")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Art Portfolio",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[15] ||
                                          (u[15] = (d) =>
                                            c.$router.push("/fruitbat")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Custom Build (Fruitbat)",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[16] ||
                                          (u[16] = (d) =>
                                            c.$router.push("/blender-addons")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "My Add-Ons",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[17] ||
                                          (u[17] = (d) =>
                                            c.$router.push("/shading-rig")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Shading Rig + Cel Character Tools",
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
                      q(
                        Z(nn),
                        { class: "relative inline-block text-left" },
                        {
                          default: ae(() => [
                            q(
                              Z(bn),
                              {
                                "aria-label": "Communications dropdown menu",
                                class: x([
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
                                default: ae(() => [
                                  u[56] || (u[56] = oe(" Communications", -1)),
                                  q(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            q(
                              Z(vn),
                              {
                                class: x([
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
                                default: ae(() => [
                                  f("div", z0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[18] ||
                                          (u[18] = (d) =>
                                            c.$router.push("/devlog")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Technical Blog",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[19] ||
                                          (u[19] = (d) =>
                                            c.$router.push("/blog")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Personal Blog",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[20] ||
                                          (u[20] = (d) =>
                                            c.$router.push("/presentations")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Presentations",
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
                      q(
                        Z(nn),
                        { class: "relative inline-block text-left" },
                        {
                          default: ae(() => [
                            q(
                              Z(bn),
                              {
                                "aria-label": "About Me dropdown menu",
                                class: x([
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
                                default: ae(() => [
                                  u[57] || (u[57] = oe(" About Me", -1)),
                                  q(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            q(
                              Z(vn),
                              {
                                class: x([
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
                                default: ae(() => [
                                  f("div", _0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[21] ||
                                          (u[21] = (d) =>
                                            c.$router.push("/about-me")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "About Me",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[22] ||
                                          (u[22] = (d) =>
                                            c.$router.push("/resume")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Resume",
                                      2,
                                    ),
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[23] ||
                                          (u[23] = (d) =>
                                            c.$router.push("/contact")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                      },
                                      "Contact",
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
                    ]),
                    f("div", D0, [
                      f("a", F0, [
                        f(
                          "button",
                          {
                            class: x([
                              {
                                "bg-slate-500": n.value >= 4,
                                "bg-slate-400": n.value == 3,
                                "bg-slate-600": n.value == 2,
                                "bg-slate-700": n.value == 1,
                              },
                              "py-2 px-3 rounded text-white flex items-center gap-2",
                            ]),
                            "aria-label": "Visit GitHub profile",
                          },
                          [
                            (L(),
                            K("svg", H0, [
                              f("path", { d: Z(gu).path }, null, 8, G0),
                            ])),
                            u[58] || (u[58] = oe(" GitHub ", -1)),
                          ],
                          2,
                        ),
                      ]),
                      f(
                        "a",
                        {
                          onClick:
                            u[24] ||
                            (u[24] = (d) => c.$router.push("/contact")),
                        },
                        [
                          f(
                            "button",
                            {
                              class: x([
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
              f(
                "div",
                {
                  id: "headerRightColumn",
                  class: x([
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
                  f("div", V0, [
                    f("div", W0, [
                      q(
                        Z(_l),
                        {
                          class: x({
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
                      f(
                        "p",
                        {
                          class: x([
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
                  q(
                    Z(f0),
                    {
                      class: x([
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
                      onClick: u[25] || (u[25] = (d) => r()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  q(Z(nn), null, {
                    default: ae(() => [
                      q(
                        Z(bn),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
                          class: x([
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
                          default: ae(() => [
                            n.value == 5
                              ? (L(),
                                ge(Z(b0), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (L(),
                                  ge(Z(o0), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (L(),
                                    ge(Z(a0), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (L(),
                                      ge(Z(h0), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (L(),
                                      ge(Z(p0), {
                                        key: 4,
                                        class: "text-slate-400",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      q(
                        Z(vn),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: ae(() => [
                            f("div", q0, [
                              f("div", U0, [
                                go(
                                  f(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        u[26] || (u[26] = (d) => (n.value = d)),
                                      onInput: i,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[mf, n.value]],
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
              u[60] || (u[60] = f("div", { class: "w-1/12" }, null, -1)),
            ]),
            f(
              "div",
              {
                id: "mobileMenu",
                class: x([
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
                f("div", K0, [
                  f("div", Y0, [
                    q(
                      Z(_l),
                      {
                        class: x({
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
                    f(
                      "p",
                      {
                        class: x([
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
                  q(
                    Z(ki),
                    {
                      class: x({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: u[27] || (u[27] = (d) => r()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                f(
                  "ul",
                  {
                    class: x([
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
                    u[89] ||
                      (u[89] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Web",
                        -1,
                      )),
                    f("ul", X0, [
                      f(
                        "a",
                        {
                          onClick:
                            u[28] || (u[28] = (d) => o("/web-portfolio")),
                        },
                        [
                          ...(u[61] ||
                            (u[61] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Web Portfolio",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick: u[29] || (u[29] = (d) => o("/web-services")),
                        },
                        [
                          ...(u[62] ||
                            (u[62] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Web Services",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                    ]),
                    u[90] ||
                      (u[90] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Unity",
                        -1,
                      )),
                    f("ul", J0, [
                      f(
                        "a",
                        {
                          onClick:
                            u[30] ||
                            (u[30] = (d) => o("/unity-editor-scripts")),
                        },
                        [
                          ...(u[63] ||
                            (u[63] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Helpful Editor Scripts",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[31] || (u[31] = (d) => o("/unity-projects")),
                        },
                        [
                          ...(u[64] ||
                            (u[64] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Projects",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[32] || (u[32] = (d) => o("/unity-shader-graph")),
                        },
                        [
                          ...(u[65] ||
                            (u[65] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Shader Graph",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                    ]),
                    u[91] ||
                      (u[91] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Programming",
                        -1,
                      )),
                    f("ul", Z0, [
                      u[75] ||
                        (u[75] = f(
                          "li",
                          { class: "py-1 px-3 rounded opacity-75 text-sm" },
                          "PHP",
                          -1,
                        )),
                      f("ul", Q0, [
                        f(
                          "a",
                          { onClick: u[33] || (u[33] = (d) => o("/figref")) },
                          [
                            ...(u[66] ||
                              (u[66] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "FigRef",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[34] || (u[34] = (d) => o("/wordpress-themes")),
                          },
                          [
                            ...(u[67] ||
                              (u[67] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "Custom WordPress Themes",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[35] || (u[35] = (d) => o("/wordpress-plugins")),
                          },
                          [
                            ...(u[68] ||
                              (u[68] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "WordPress Plugins",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                      ]),
                      u[76] ||
                        (u[76] = f(
                          "li",
                          { class: "py-1 px-3 rounded opacity-75 text-sm" },
                          "JavaScript",
                          -1,
                        )),
                      f("ul", eh, [
                        f(
                          "a",
                          {
                            onClick:
                              u[36] ||
                              (u[36] = (d) => o("/discourse-image-comparison")),
                          },
                          [
                            ...(u[69] ||
                              (u[69] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  " Discourse Image Comparison Slider ",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[37] || (u[37] = (d) => o("/garden-tracker")),
                          },
                          [
                            ...(u[70] ||
                              (u[70] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "Garden Tracker",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[38] ||
                              (u[38] = (d) => o("/javascript-snippets")),
                          },
                          [
                            ...(u[71] ||
                              (u[71] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "Javascript Snippets",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                      ]),
                      u[77] ||
                        (u[77] = f(
                          "li",
                          { class: "py-1 px-3 rounded opacity-75 text-sm" },
                          "Arduino",
                          -1,
                        )),
                      f("ul", th, [
                        f(
                          "a",
                          {
                            onClick:
                              u[39] ||
                              (u[39] = (d) => o("/blender-arduino-controller")),
                          },
                          [
                            ...(u[72] ||
                              (u[72] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  " Blender Arduino Controller ",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[40] || (u[40] = (d) => o("/arduino-leds")),
                          },
                          [
                            ...(u[73] ||
                              (u[73] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "LEDs",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                      ]),
                      u[78] ||
                        (u[78] = f(
                          "li",
                          { class: "py-1 px-3 rounded opacity-75 text-sm" },
                          "Python",
                          -1,
                        )),
                      f("ul", nh, [
                        f(
                          "a",
                          {
                            onClick:
                              u[41] || (u[41] = (d) => o("/instagram-scraper")),
                          },
                          [
                            ...(u[74] ||
                              (u[74] = [
                                f(
                                  "li",
                                  { class: "py-1 px-3 rounded text-sm" },
                                  "Instagram Scraper",
                                  -1,
                                ),
                              ])),
                          ],
                        ),
                      ]),
                    ]),
                    u[92] ||
                      (u[92] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Blender",
                        -1,
                      )),
                    f("ul", sh, [
                      f(
                        "a",
                        {
                          onClick: u[42] || (u[42] = (d) => o("/blender-art")),
                        },
                        [
                          ...(u[79] ||
                            (u[79] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Art Portfolio",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[43] || (u[43] = (d) => o("/fruitbat")) },
                        [
                          ...(u[80] ||
                            (u[80] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Custom Build (Fruitbat)",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[44] || (u[44] = (d) => o("/blender-addons")),
                        },
                        [
                          ...(u[81] ||
                            (u[81] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "My Add-Ons",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick: u[45] || (u[45] = (d) => o("/shading-rig")),
                        },
                        [
                          ...(u[82] ||
                            (u[82] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Shading Rig + Cel Character Tools",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                    ]),
                    u[93] ||
                      (u[93] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Communications",
                        -1,
                      )),
                    f("ul", lh, [
                      f(
                        "a",
                        { onClick: u[46] || (u[46] = (d) => o("/devlog")) },
                        [
                          ...(u[83] ||
                            (u[83] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Technical Blog",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[47] || (u[47] = (d) => o("/blog")) },
                        [
                          ...(u[84] ||
                            (u[84] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Personal Blog",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[48] || (u[48] = (d) => o("/presentations")),
                        },
                        [
                          ...(u[85] ||
                            (u[85] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Presentations",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                    ]),
                    u[94] ||
                      (u[94] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "About Me",
                        -1,
                      )),
                    f("ul", ih, [
                      f(
                        "a",
                        { onClick: u[49] || (u[49] = (d) => o("/about-me")) },
                        [
                          ...(u[86] ||
                            (u[86] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "About Me",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[50] || (u[50] = (d) => o("/resume")) },
                        [
                          ...(u[87] ||
                            (u[87] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Resume",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[51] || (u[51] = (d) => o("/contact")) },
                        [
                          ...(u[88] ||
                            (u[88] = [
                              f(
                                "li",
                                { class: "py-2 px-3 rounded" },
                                "Contact",
                                -1,
                              ),
                            ])),
                        ],
                      ),
                    ]),
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
  ah = Zt(rh, [["__scopeId", "data-v-839f86d1"]]),
  oh = { class: "flex justify-center py-5 flex-col" },
  uh = { class: "inline-block relative" },
  ch = { class: "font-semibold text-center px-1" },
  dh = { class: "flex py-5 justify-center gap-3 w-full" },
  fh = { href: "/web-portfolio" },
  ph = { href: "/web-pricing" },
  hh = {
    directives: {
      typewriter: {
        beforeUpdate(e, t) {
          if (t.oldValue !== t.value) {
            let n = t.value,
              s = Math.random() * 100 + 25
            ;(e.textContent = ""),
              n.split("").forEach((l, i) => {
                setTimeout(() => {
                  e.textContent += l
                }, s * i)
              })
          }
        },
      },
    },
  },
  gh = Object.assign(hh, {
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
        const i = () => {
            s.value = !1
          },
          a = () => {
            s.value = !0
          }
        window.addEventListener("mousedown", i),
          window.addEventListener("mouseup", a),
          fn(() => {
            window.removeEventListener("mousedown", i),
              window.removeEventListener("mouseup", a)
          })
      }),
        Vi(() => {
          s.value = !1
        })
      const l = se(() => t.value[n.value])
      return (i, a) => {
        const r = ld("typewriter")
        return (
          L(),
          K("div", oh, [
            f(
              "h1",
              {
                class: x([
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
                a[0] || (a[0] = oe(" I make ", -1)),
                f("div", uh, [
                  go((L(), K("span", ch, [oe(Je(l.value), 1)])), [
                    [r, l.value],
                  ]),
                  f(
                    "div",
                    {
                      class: x([
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
                a[1] || (a[1] = oe(" websites. ", -1)),
              ],
              2,
            ),
            f(
              "p",
              {
                class: x([
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
            f("div", dh, [
              f("a", fh, [
                f(
                  "button",
                  {
                    "aria-label": "View my portfolio",
                    class: x([
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
              f("a", ph, [
                f(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: x([
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
function Sa(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function sr(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {})
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Sa(t[s]) && Sa(e[s]) && Object.keys(t[s]).length > 0 && sr(e[s], t[s])
    })
}
const mu = {
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
function jt() {
  const e = typeof document < "u" ? document : {}
  return sr(e, mu), e
}
const mh = {
  document: mu,
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
  return sr(e, mh), e
}
function bh(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function vh(e) {
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
function bu(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function el() {
  return Date.now()
}
function yh(e) {
  const t = Qe()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function xh(e, t) {
  t === void 0 && (t = "x")
  const n = Qe()
  let s, l, i
  const a = yh(e)
  return (
    n.WebKitCSSMatrix
      ? ((l = a.transform || a.webkitTransform),
        l.split(",").length > 6 &&
          (l = l
            .split(", ")
            .map((r) => r.replace(",", "."))
            .join(", ")),
        (i = new n.WebKitCSSMatrix(l === "none" ? "" : l)))
      : ((i =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = i.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (l = i.m41)
        : s.length === 16
          ? (l = parseFloat(s[12]))
          : (l = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (l = i.m42)
        : s.length === 16
          ? (l = parseFloat(s[13]))
          : (l = parseFloat(s[5]))),
    l || 0
  )
}
function Ls(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  )
}
function wh(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function ot() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (s != null && !wh(s)) {
      const l = Object.keys(Object(s)).filter((i) => t.indexOf(i) < 0)
      for (let i = 0, a = l.length; i < a; i += 1) {
        const r = l[i],
          o = Object.getOwnPropertyDescriptor(s, r)
        o !== void 0 &&
          o.enumerable &&
          (Ls(e[r]) && Ls(s[r])
            ? s[r].__swiper__
              ? (e[r] = s[r])
              : ot(e[r], s[r])
            : !Ls(e[r]) && Ls(s[r])
              ? ((e[r] = {}), s[r].__swiper__ ? (e[r] = s[r]) : ot(e[r], s[r]))
              : (e[r] = s[r]))
      }
    }
  }
  return e
}
function js(e, t, n) {
  e.style.setProperty(t, n)
}
function vu(e) {
  let { swiper: t, targetPosition: n, side: s } = e
  const l = Qe(),
    i = -t.translate
  let a = null,
    r
  const o = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    l.cancelAnimationFrame(t.cssModeFrameID)
  const c = n > i ? "next" : "prev",
    u = (p, h) => (c === "next" && p >= h) || (c === "prev" && p <= h),
    d = () => {
      ;(r = new Date().getTime()), a === null && (a = r)
      const p = Math.max(Math.min((r - a) / o, 1), 0),
        h = 0.5 - Math.cos(p * Math.PI) / 2
      let m = i + h * (n - i)
      if ((u(m, n) && (m = n), t.wrapperEl.scrollTo({ [s]: m }), u(m, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: m })
          }),
          l.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = l.requestAnimationFrame(d)
    }
  d()
}
function Ot(e, t) {
  t === void 0 && (t = "")
  const n = Qe(),
    s = [...e.children]
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      s.push(...e.assignedElements()),
    t ? s.filter((l) => l.matches(t)) : s
  )
}
function Sh(e, t) {
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
function Ch(e, t) {
  const n = Qe()
  let s = t.contains(e)
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = Sh(e, t))),
    s
  )
}
function tl(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function nl(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : bh(t))), n
}
function Eh(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function Th(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function on(e, t) {
  return Qe().getComputedStyle(e, null).getPropertyValue(t)
}
function sl(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function yu(e, t) {
  const n = []
  let s = e.parentElement
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement)
  return n
}
function Pi(e, t, n) {
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
function ll(e, t) {
  t === void 0 && (t = ""),
    typeof trustedTypes < "u"
      ? (e.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (n) => n })
          .createHTML(t))
      : (e.innerHTML = t)
}
let Dl
function kh() {
  const e = Qe(),
    t = jt()
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
function xu() {
  return Dl || (Dl = kh()), Dl
}
let Fl
function Ph(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = xu(),
    s = Qe(),
    l = s.navigator.platform,
    i = t || s.navigator.userAgent,
    a = { ios: !1, android: !1 },
    r = s.screen.width,
    o = s.screen.height,
    c = i.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = i.match(/(iPad).*OS\s([\d_]+)/)
  const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = l === "Win32"
  let m = l === "MacIntel"
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
      b.indexOf(`${r}x${o}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (m = !1)),
    c && !h && ((a.os = "android"), (a.android = !0)),
    (u || p || d) && ((a.os = "ios"), (a.ios = !0)),
    a
  )
}
function wu(e) {
  return e === void 0 && (e = {}), Fl || (Fl = Ph(e)), Fl
}
let Hl
function Ih() {
  const e = Qe(),
    t = wu()
  let n = !1
  function s() {
    const r = e.navigator.userAgent.toLowerCase()
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    )
  }
  if (s()) {
    const r = String(e.navigator.userAgent)
    if (r.includes("Version/")) {
      const [o, c] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((u) => Number(u))
      n = o < 16 || (o === 16 && c < 2)
    }
  }
  const l = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    i = s(),
    a = i || (l && t.ios)
  return { isSafari: n || i, needPerspectiveFix: n, need3dFix: a, isWebView: l }
}
function Su() {
  return Hl || (Hl = Ih()), Hl
}
function $h(e) {
  let { swiper: t, on: n, emit: s } = e
  const l = Qe()
  let i = null,
    a = null
  const r = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((i = new ResizeObserver((d) => {
          a = l.requestAnimationFrame(() => {
            const { width: p, height: h } = t
            let m = p,
              b = h
            d.forEach((k) => {
              let { contentBoxSize: w, contentRect: g, target: v } = k
              ;(v && v !== t.el) ||
                ((m = g ? g.width : (w[0] || w).inlineSize),
                (b = g ? g.height : (w[0] || w).blockSize))
            }),
              (m !== p || b !== h) && r()
          })
        })),
        i.observe(t.el))
    },
    c = () => {
      a && l.cancelAnimationFrame(a),
        i && i.unobserve && t.el && (i.unobserve(t.el), (i = null))
    },
    u = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange")
    }
  n("init", () => {
    if (t.params.resizeObserver && typeof l.ResizeObserver < "u") {
      o()
      return
    }
    l.addEventListener("resize", r), l.addEventListener("orientationchange", u)
  }),
    n("destroy", () => {
      c(),
        l.removeEventListener("resize", r),
        l.removeEventListener("orientationchange", u)
    })
}
function Mh(e) {
  let { swiper: t, extendParams: n, on: s, emit: l } = e
  const i = [],
    a = Qe(),
    r = function (u, d) {
      d === void 0 && (d = {})
      const p = a.MutationObserver || a.WebkitMutationObserver,
        h = new p((m) => {
          if (t.__preventObserver__) return
          if (m.length === 1) {
            l("observerUpdate", m[0])
            return
          }
          const b = function () {
            l("observerUpdate", m[0])
          }
          a.requestAnimationFrame
            ? a.requestAnimationFrame(b)
            : a.setTimeout(b, 0)
        })
      h.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        i.push(h)
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = yu(t.hostEl)
          for (let d = 0; d < u.length; d += 1) r(u[d])
        }
        r(t.hostEl, { childList: t.params.observeSlideChildren }),
          r(t.wrapperEl, { attributes: !1 })
      }
    },
    c = () => {
      i.forEach((u) => {
        u.disconnect()
      }),
        i.splice(0, i.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", o),
    s("destroy", c)
}
var Ah = {
  on(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    const l = n ? "unshift" : "push"
    return (
      e.split(" ").forEach((i) => {
        s.eventsListeners[i] || (s.eventsListeners[i] = []),
          s.eventsListeners[i][l](t)
      }),
      s
    )
  },
  once(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    function l() {
      s.off(e, l), l.__emitterProxy && delete l.__emitterProxy
      for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++)
        a[r] = arguments[r]
      t.apply(s, a)
    }
    return (l.__emitterProxy = t), s.on(e, l, n)
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
              n.eventsListeners[s].forEach((l, i) => {
                ;(l === t || (l.__emitterProxy && l.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(i, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, s
    for (var l = arguments.length, i = new Array(l), a = 0; a < l; a++)
      i[a] = arguments[a]
    return (
      typeof i[0] == "string" || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (s = e))
        : ((t = i[0].events), (n = i[0].data), (s = i[0].context || e)),
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
function Oh() {
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
        parseInt(on(s, "padding-left") || 0, 10) -
        parseInt(on(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(on(s, "padding-top") || 0, 10) -
        parseInt(on(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function Lh() {
  const e = this
  function t($, j) {
    return parseFloat($.getPropertyValue(e.getDirectionLabel(j)) || 0)
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: l, size: i, rtlTranslate: a, wrongRTL: r } = e,
    o = e.virtual && n.virtual.enabled,
    c = o ? e.virtual.slides.length : e.slides.length,
    u = Ot(l, `.${e.params.slideClass}, swiper-slide`),
    d = o ? e.virtual.slides.length : u.length
  let p = []
  const h = [],
    m = []
  let b = n.slidesOffsetBefore
  typeof b == "function" && (b = n.slidesOffsetBefore.call(e))
  let k = n.slidesOffsetAfter
  typeof k == "function" && (k = n.slidesOffsetAfter.call(e))
  const w = e.snapGrid.length,
    g = e.slidesGrid.length
  let v = n.spaceBetween,
    S = -b,
    T = 0,
    M = 0
  if (typeof i > "u") return
  typeof v == "string" && v.indexOf("%") >= 0
    ? (v = (parseFloat(v.replace("%", "")) / 100) * i)
    : typeof v == "string" && (v = parseFloat(v)),
    (e.virtualSize = -v),
    u.forEach(($) => {
      a ? ($.style.marginLeft = "") : ($.style.marginRight = ""),
        ($.style.marginBottom = ""),
        ($.style.marginTop = "")
    }),
    n.centeredSlides &&
      n.cssMode &&
      (js(s, "--swiper-centered-offset-before", ""),
      js(s, "--swiper-centered-offset-after", ""))
  const E = n.grid && n.grid.rows > 1 && e.grid
  E ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides()
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
      (u[$] && (j = u[$]),
      E && e.grid.updateSlide($, j, u),
      !(u[$] && on(j, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        I && (u[$].style[e.getDirectionLabel("width")] = "")
        const F = getComputedStyle(j),
          W = j.style.transform,
          de = j.style.webkitTransform
        if (
          (W && (j.style.transform = "none"),
          de && (j.style.webkitTransform = "none"),
          n.roundLengths)
        )
          A = e.isHorizontal() ? Pi(j, "width") : Pi(j, "height")
        else {
          const he = t(F, "width"),
            O = t(F, "padding-left"),
            z = t(F, "padding-right"),
            B = t(F, "margin-left"),
            ye = t(F, "margin-right"),
            me = F.getPropertyValue("box-sizing")
          if (me && me === "border-box") A = he + B + ye
          else {
            const { clientWidth: Le, offsetWidth: je } = j
            A = he + O + z + B + ye + (je - Le)
          }
        }
        W && (j.style.transform = W),
          de && (j.style.webkitTransform = de),
          n.roundLengths && (A = Math.floor(A))
      } else
        (A = (i - (n.slidesPerView - 1) * v) / n.slidesPerView),
          n.roundLengths && (A = Math.floor(A)),
          u[$] && (u[$].style[e.getDirectionLabel("width")] = `${A}px`)
      u[$] && (u[$].swiperSlideSize = A),
        m.push(A),
        n.centeredSlides
          ? ((S = S + A / 2 + T / 2 + v),
            T === 0 && $ !== 0 && (S = S - i / 2 - v),
            $ === 0 && (S = S - i / 2 - v),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            n.roundLengths && (S = Math.floor(S)),
            M % n.slidesPerGroup === 0 && p.push(S),
            h.push(S))
          : (n.roundLengths && (S = Math.floor(S)),
            (M - Math.min(e.params.slidesPerGroupSkip, M)) %
              e.params.slidesPerGroup ===
              0 && p.push(S),
            h.push(S),
            (S = S + A + v)),
        (e.virtualSize += A + v),
        (T = A),
        (M += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, i) + k),
    a &&
      r &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + v}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`),
    E && e.grid.updateWrapperSize(A, p),
    !n.centeredSlides)
  ) {
    const $ = []
    for (let j = 0; j < p.length; j += 1) {
      let F = p[j]
      n.roundLengths && (F = Math.floor(F)),
        p[j] <= e.virtualSize - i && $.push(F)
    }
    ;(p = $),
      Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - i)
  }
  if (o && n.loop) {
    const $ = m[0] + v
    if (n.slidesPerGroup > 1) {
      const j = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        F = $ * n.slidesPerGroup
      for (let W = 0; W < j; W += 1) p.push(p[p.length - 1] + F)
    }
    for (let j = 0; j < e.virtual.slidesBefore + e.virtual.slidesAfter; j += 1)
      n.slidesPerGroup === 1 && p.push(p[p.length - 1] + $),
        h.push(h[h.length - 1] + $),
        (e.virtualSize += $)
  }
  if ((p.length === 0 && (p = [0]), v !== 0)) {
    const $ =
      e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight")
    u.filter((j, F) =>
      !n.cssMode || n.loop ? !0 : F !== u.length - 1,
    ).forEach((j) => {
      j.style[$] = `${v}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let $ = 0
    m.forEach((F) => {
      $ += F + (v || 0)
    }),
      ($ -= v)
    const j = $ > i ? $ - i : 0
    p = p.map((F) => (F <= 0 ? -b : F > j ? j + k : F))
  }
  if (n.centerInsufficientSlides) {
    let $ = 0
    m.forEach((F) => {
      $ += F + (v || 0)
    }),
      ($ -= v)
    const j = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if ($ + j < i) {
      const F = (i - $ - j) / 2
      p.forEach((W, de) => {
        p[de] = W - F
      }),
        h.forEach((W, de) => {
          h[de] = W + F
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: p,
      slidesGrid: h,
      slidesSizesGrid: m,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    js(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      js(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - m[m.length - 1] / 2}px`,
      )
    const $ = -e.snapGrid[0],
      j = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((F) => F + $)),
      (e.slidesGrid = e.slidesGrid.map((F) => F + j))
  }
  if (
    (d !== c && e.emit("slidesLengthChange"),
    p.length !== w &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== g && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const $ = `${n.containerModifierClass}backface-hidden`,
      j = e.el.classList.contains($)
    d <= n.maxBackfaceHiddenSlides
      ? j || e.el.classList.add($)
      : j && e.el.classList.remove($)
  }
}
function jh(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled
  let l = 0,
    i
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const a = (r) => (s ? t.slides[t.getSlideIndexByData(r)] : t.slides[r])
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((r) => {
        n.push(r)
      })
    else
      for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        const r = t.activeIndex + i
        if (r > t.slides.length && !s) break
        n.push(a(r))
      }
  else n.push(a(t.activeIndex))
  for (i = 0; i < n.length; i += 1)
    if (typeof n[i] < "u") {
      const r = n[i].offsetHeight
      l = r > l ? r : l
    }
  ;(l || l === 0) && (t.wrapperEl.style.height = `${l}px`)
}
function Bh() {
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
const Ca = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function Rh(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: l, snapGrid: i } = t
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset()
  let a = -e
  l && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let r = n.spaceBetween
  typeof r == "string" && r.indexOf("%") >= 0
    ? (r = (parseFloat(r.replace("%", "")) / 100) * t.size)
    : typeof r == "string" && (r = parseFloat(r))
  for (let o = 0; o < s.length; o += 1) {
    const c = s[o]
    let u = c.swiperSlideOffset
    n.cssMode && n.centeredSlides && (u -= s[0].swiperSlideOffset)
    const d =
        (a + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + r),
      p =
        (a - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + r),
      h = -(a - u),
      m = h + t.slidesSizesGrid[o],
      b = h >= 0 && h <= t.size - t.slidesSizesGrid[o],
      k =
        (h >= 0 && h < t.size - 1) ||
        (m > 1 && m <= t.size) ||
        (h <= 0 && m >= t.size)
    k && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(o)),
      Ca(c, k, n.slideVisibleClass),
      Ca(c, b, n.slideFullyVisibleClass),
      (c.progress = l ? -d : d),
      (c.originalProgress = l ? -p : p)
  }
}
function Nh(e) {
  const t = this
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * u) || 0
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate()
  let { progress: l, isBeginning: i, isEnd: a, progressLoop: r } = t
  const o = i,
    c = a
  if (s === 0) (l = 0), (i = !0), (a = !0)
  else {
    l = (e - t.minTranslate()) / s
    const u = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1
    ;(i = u || l <= 0), (a = d || l >= 1), u && (l = 0), d && (l = 1)
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[u],
      h = t.slidesGrid[d],
      m = t.slidesGrid[t.slidesGrid.length - 1],
      b = Math.abs(e)
    b >= p ? (r = (b - p) / m) : (r = (b + m - h) / m), r > 1 && (r -= 1)
  }
  Object.assign(t, { progress: l, progressLoop: r, isBeginning: i, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    i && !o && t.emit("reachBeginning toEdge"),
    a && !c && t.emit("reachEnd toEdge"),
    ((o && !i) || (c && !a)) && t.emit("fromEdge"),
    t.emit("progress", l)
}
const Gl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function zh() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: l } = e,
    i = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    r = (d) => Ot(s, `.${n.slideClass}${d}, swiper-slide${d}`)[0]
  let o, c, u
  if (i)
    if (n.loop) {
      let d = l - e.virtual.slidesBefore
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (o = r(`[data-swiper-slide-index="${d}"]`))
    } else o = r(`[data-swiper-slide-index="${l}"]`)
  else
    a
      ? ((o = t.find((d) => d.column === l)),
        (u = t.find((d) => d.column === l + 1)),
        (c = t.find((d) => d.column === l - 1)))
      : (o = t[l])
  o &&
    (a ||
      ((u = Th(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (c = Eh(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((d) => {
      Gl(d, d === o, n.slideActiveClass),
        Gl(d, d === u, n.slideNextClass),
        Gl(d, d === c, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Gs = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(n())
    if (s) {
      let l = s.querySelector(`.${e.params.lazyPreloaderClass}`)
      !l &&
        e.isElement &&
        (s.shadowRoot
          ? (l = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((l = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                l && l.remove())
            })),
        l && l.remove()
    }
  },
  Vl = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  Ii = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      l = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = l,
        r = [a - t]
      r.push(...Array.from({ length: t }).map((o, c) => a + s + c)),
        e.slides.forEach((o, c) => {
          r.includes(o.column) && Vl(e, c)
        })
      return
    }
    const i = l + s - 1
    if (e.params.rewind || e.params.loop)
      for (let a = l - t; a <= i + t; a += 1) {
        const r = ((a % n) + n) % n
        ;(r < l || r > i) && Vl(e, r)
      }
    else
      for (let a = Math.max(l - t, 0); a <= Math.min(i + t, n - 1); a += 1)
        a !== l && (a > i || a < l) && Vl(e, a)
  }
function _h(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate
  let l
  for (let i = 0; i < t.length; i += 1)
    typeof t[i + 1] < "u"
      ? s >= t[i] && s < t[i + 1] - (t[i + 1] - t[i]) / 2
        ? (l = i)
        : s >= t[i] && s < t[i + 1] && (l = i + 1)
      : s >= t[i] && (l = i)
  return n.normalizeSlideIndex && (l < 0 || typeof l > "u") && (l = 0), l
}
function Dh(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: l, activeIndex: i, realIndex: a, snapIndex: r } = t
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
  if ((typeof o > "u" && (o = _h(t)), s.indexOf(n) >= 0)) c = s.indexOf(n)
  else {
    const h = Math.min(l.slidesPerGroupSkip, o)
    c = h + Math.floor((o - h) / l.slidesPerGroup)
  }
  if ((c >= s.length && (c = s.length - 1), o === i && !t.params.loop)) {
    c !== r && ((t.snapIndex = c), t.emit("snapIndexChange"))
    return
  }
  if (o === i && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(o)
    return
  }
  const d = t.grid && l.grid && l.grid.rows > 1
  let p
  if (t.virtual && l.virtual.enabled && l.loop) p = u(o)
  else if (d) {
    const h = t.slides.find((b) => b.column === o)
    let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(m) && (m = Math.max(t.slides.indexOf(h), 0)),
      (p = Math.floor(m / l.grid.rows))
  } else if (t.slides[o]) {
    const h = t.slides[o].getAttribute("data-swiper-slide-index")
    h ? (p = parseInt(h, 10)) : (p = o)
  } else p = o
  Object.assign(t, {
    previousSnapIndex: r,
    snapIndex: c,
    previousRealIndex: a,
    realIndex: p,
    previousIndex: i,
    activeIndex: o,
  }),
    t.initialized && Ii(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== p && t.emit("realIndexChange"), t.emit("slideChange"))
}
function Fh(e, t) {
  const n = this,
    s = n.params
  let l = e.closest(`.${s.slideClass}, swiper-slide`)
  !l &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((r) => {
      !l && r.matches && r.matches(`.${s.slideClass}, swiper-slide`) && (l = r)
    })
  let i = !1,
    a
  if (l) {
    for (let r = 0; r < n.slides.length; r += 1)
      if (n.slides[r] === l) {
        ;(i = !0), (a = r)
        break
      }
  }
  if (l && i)
    (n.clickedSlide = l),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            l.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = a)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var Hh = {
  updateSize: Oh,
  updateSlides: Lh,
  updateAutoHeight: jh,
  updateSlidesOffset: Bh,
  updateSlidesProgress: Rh,
  updateProgress: Nh,
  updateSlidesClasses: zh,
  updateActiveIndex: Dh,
  updateClickedSlide: Fh,
}
function Gh(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: s, translate: l, wrapperEl: i } = t
  if (n.virtualTranslate) return s ? -l : l
  if (n.cssMode) return l
  let a = xh(i, e)
  return (a += t.cssOverflowAdjustment()), s && (a = -a), a || 0
}
function Vh(e, t) {
  const n = this,
    { rtlTranslate: s, params: l, wrapperEl: i, progress: a } = n
  let r = 0,
    o = 0
  const c = 0
  n.isHorizontal() ? (r = s ? -e : e) : (o = e),
    l.roundLengths && ((r = Math.floor(r)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? r : o),
    l.cssMode
      ? (i[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -r
          : -o)
      : l.virtualTranslate ||
        (n.isHorizontal()
          ? (r -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (i.style.transform = `translate3d(${r}px, ${o}px, ${c}px)`))
  let u
  const d = n.maxTranslate() - n.minTranslate()
  d === 0 ? (u = 0) : (u = (e - n.minTranslate()) / d),
    u !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function Wh() {
  return -this.snapGrid[0]
}
function qh() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Uh(e, t, n, s, l) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0)
  const i = this,
    { params: a, wrapperEl: r } = i
  if (i.animating && a.preventInteractionOnTransition) return !1
  const o = i.minTranslate(),
    c = i.maxTranslate()
  let u
  if (
    (s && e > o ? (u = o) : s && e < c ? (u = c) : (u = e),
    i.updateProgress(u),
    a.cssMode)
  ) {
    const d = i.isHorizontal()
    if (t === 0) r[d ? "scrollLeft" : "scrollTop"] = -u
    else {
      if (!i.support.smoothScroll)
        return (
          vu({ swiper: i, targetPosition: -u, side: d ? "left" : "top" }), !0
        )
      r.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" })
    }
    return !0
  }
  return (
    t === 0
      ? (i.setTransition(0),
        i.setTranslate(u),
        n && (i.emit("beforeTransitionStart", t, l), i.emit("transitionEnd")))
      : (i.setTransition(t),
        i.setTranslate(u),
        n && (i.emit("beforeTransitionStart", t, l), i.emit("transitionStart")),
        i.animating ||
          ((i.animating = !0),
          i.onTranslateToWrapperTransitionEnd ||
            (i.onTranslateToWrapperTransitionEnd = function (p) {
              !i ||
                i.destroyed ||
                (p.target === this &&
                  (i.wrapperEl.removeEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd,
                  ),
                  (i.onTranslateToWrapperTransitionEnd = null),
                  delete i.onTranslateToWrapperTransitionEnd,
                  (i.animating = !1),
                  n && i.emit("transitionEnd")))
            }),
          i.wrapperEl.addEventListener(
            "transitionend",
            i.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  )
}
var Kh = {
  getTranslate: Gh,
  setTranslate: Vh,
  minTranslate: Wh,
  maxTranslate: qh,
  translateTo: Uh,
}
function Yh(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function Cu(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: l } = e
  const { activeIndex: i, previousIndex: a } = t
  let r = s
  r || (i > a ? (r = "next") : i < a ? (r = "prev") : (r = "reset")),
    t.emit(`transition${l}`),
    n && r === "reset"
      ? t.emit(`slideResetTransition${l}`)
      : n &&
        i !== a &&
        (t.emit(`slideChangeTransition${l}`),
        r === "next"
          ? t.emit(`slideNextTransition${l}`)
          : t.emit(`slidePrevTransition${l}`))
}
function Xh(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Cu({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function Jh(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  ;(n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Cu({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var Zh = { setTransition: Yh, transitionStart: Xh, transitionEnd: Jh }
function Qh(e, t, n, s, l) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const i = this
  let a = e
  a < 0 && (a = 0)
  const {
    params: r,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: m,
  } = i
  if (
    (!m && !s && !l) ||
    i.destroyed ||
    (i.animating && r.preventInteractionOnTransition)
  )
    return !1
  typeof t > "u" && (t = i.params.speed)
  const b = Math.min(i.params.slidesPerGroupSkip, a)
  let k = b + Math.floor((a - b) / i.params.slidesPerGroup)
  k >= o.length && (k = o.length - 1)
  const w = -o[k]
  if (r.normalizeSlideIndex)
    for (let E = 0; E < c.length; E += 1) {
      const A = -Math.floor(w * 100),
        I = Math.floor(c[E] * 100),
        $ = Math.floor(c[E + 1] * 100)
      typeof c[E + 1] < "u"
        ? A >= I && A < $ - ($ - I) / 2
          ? (a = E)
          : A >= I && A < $ && (a = E + 1)
        : A >= I && (a = E)
    }
  if (
    i.initialized &&
    a !== d &&
    ((!i.allowSlideNext &&
      (p
        ? w > i.translate && w > i.minTranslate()
        : w < i.translate && w < i.minTranslate())) ||
      (!i.allowSlidePrev &&
        w > i.translate &&
        w > i.maxTranslate() &&
        (d || 0) !== a))
  )
    return !1
  a !== (u || 0) && n && i.emit("beforeSlideChangeStart"), i.updateProgress(w)
  let g
  a > d ? (g = "next") : a < d ? (g = "prev") : (g = "reset")
  const v = i.virtual && i.params.virtual.enabled
  if (!(v && l) && ((p && -w === i.translate) || (!p && w === i.translate)))
    return (
      i.updateActiveIndex(a),
      r.autoHeight && i.updateAutoHeight(),
      i.updateSlidesClasses(),
      r.effect !== "slide" && i.setTranslate(w),
      g !== "reset" && (i.transitionStart(n, g), i.transitionEnd(n, g)),
      !1
    )
  if (r.cssMode) {
    const E = i.isHorizontal(),
      A = p ? w : -w
    if (t === 0)
      v &&
        ((i.wrapperEl.style.scrollSnapType = "none"),
        (i._immediateVirtual = !0)),
        v && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
          ? ((i._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[E ? "scrollLeft" : "scrollTop"] = A
            }))
          : (h[E ? "scrollLeft" : "scrollTop"] = A),
        v &&
          requestAnimationFrame(() => {
            ;(i.wrapperEl.style.scrollSnapType = ""), (i._immediateVirtual = !1)
          })
    else {
      if (!i.support.smoothScroll)
        return (
          vu({ swiper: i, targetPosition: A, side: E ? "left" : "top" }), !0
        )
      h.scrollTo({ [E ? "left" : "top"]: A, behavior: "smooth" })
    }
    return !0
  }
  const M = Su().isSafari
  return (
    v && !l && M && i.isElement && i.virtual.update(!1, !1, a),
    i.setTransition(t),
    i.setTranslate(w),
    i.updateActiveIndex(a),
    i.updateSlidesClasses(),
    i.emit("beforeTransitionStart", t, s),
    i.transitionStart(n, g),
    t === 0
      ? i.transitionEnd(n, g)
      : i.animating ||
        ((i.animating = !0),
        i.onSlideToWrapperTransitionEnd ||
          (i.onSlideToWrapperTransitionEnd = function (A) {
            !i ||
              i.destroyed ||
              (A.target === this &&
                (i.wrapperEl.removeEventListener(
                  "transitionend",
                  i.onSlideToWrapperTransitionEnd,
                ),
                (i.onSlideToWrapperTransitionEnd = null),
                delete i.onSlideToWrapperTransitionEnd,
                i.transitionEnd(n, g)))
          }),
        i.wrapperEl.addEventListener(
          "transitionend",
          i.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function eg(e, t, n, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const l = this
  if (l.destroyed) return
  typeof t > "u" && (t = l.params.speed)
  const i = l.grid && l.params.grid && l.params.grid.rows > 1
  let a = e
  if (l.params.loop)
    if (l.virtual && l.params.virtual.enabled) a = a + l.virtual.slidesBefore
    else {
      let r
      if (i) {
        const p = a * l.params.grid.rows
        r = l.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p,
        ).column
      } else r = l.getSlideIndexByData(a)
      const o = i
          ? Math.ceil(l.slides.length / l.params.grid.rows)
          : l.slides.length,
        { centeredSlides: c } = l.params
      let u = l.params.slidesPerView
      u === "auto"
        ? (u = l.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(l.params.slidesPerView, 10))),
          c && u % 2 === 0 && (u = u + 1))
      let d = o - r < u
      if (
        (c && (d = d || r < Math.ceil(u / 2)),
        s && c && l.params.slidesPerView !== "auto" && !i && (d = !1),
        d)
      ) {
        const p = c
          ? r < l.activeIndex
            ? "prev"
            : "next"
          : r - l.activeIndex - 1 < l.params.slidesPerView
            ? "next"
            : "prev"
        l.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? r + 1 : r - o + 1,
          slideRealIndex: p === "next" ? l.realIndex : void 0,
        })
      }
      if (i) {
        const p = a * l.params.grid.rows
        a = l.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p,
        ).column
      } else a = l.getSlideIndexByData(a)
    }
  return (
    requestAnimationFrame(() => {
      l.slideTo(a, t, n, s)
    }),
    l
  )
}
function tg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    { enabled: l, params: i, animating: a } = s
  if (!l || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  let r = i.slidesPerGroup
  i.slidesPerView === "auto" &&
    i.slidesPerGroup === 1 &&
    i.slidesPerGroupAuto &&
    (r = Math.max(s.slidesPerViewDynamic("current", !0), 1))
  const o = s.activeIndex < i.slidesPerGroupSkip ? 1 : r,
    c = s.virtual && i.virtual.enabled
  if (i.loop) {
    if (a && !c && i.loopPreventsSliding) return !1
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && i.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + o, e, t, n)
        }),
        !0
      )
  }
  return i.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + o, e, t, n)
}
function ng(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    {
      params: l,
      snapGrid: i,
      slidesGrid: a,
      rtlTranslate: r,
      enabled: o,
      animating: c,
    } = s
  if (!o || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  const u = s.virtual && l.virtual.enabled
  if (l.loop) {
    if (c && !u && l.loopPreventsSliding) return !1
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const d = r ? s.translate : -s.translate
  function p(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
  }
  const h = p(d),
    m = i.map((g) => p(g)),
    b = l.freeMode && l.freeMode.enabled
  let k = i[m.indexOf(h) - 1]
  if (typeof k > "u" && (l.cssMode || b)) {
    let g
    i.forEach((v, S) => {
      h >= v && (g = S)
    }),
      typeof g < "u" && (k = b ? i[g] : i[g > 0 ? g - 1 : g])
  }
  let w = 0
  if (
    (typeof k < "u" &&
      ((w = a.indexOf(k)),
      w < 0 && (w = s.activeIndex - 1),
      l.slidesPerView === "auto" &&
        l.slidesPerGroup === 1 &&
        l.slidesPerGroupAuto &&
        ((w = w - s.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    l.rewind && s.isBeginning)
  ) {
    const g =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(g, e, t, n)
  } else if (l.loop && s.activeIndex === 0 && l.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(w, e, t, n)
      }),
      !0
    )
  return s.slideTo(w, e, t, n)
}
function sg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n)
    )
}
function lg(e, t, n, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5)
  const l = this
  if (l.destroyed) return
  typeof e > "u" && (e = l.params.speed)
  let i = l.activeIndex
  const a = Math.min(l.params.slidesPerGroupSkip, i),
    r = a + Math.floor((i - a) / l.params.slidesPerGroup),
    o = l.rtlTranslate ? l.translate : -l.translate
  if (o >= l.snapGrid[r]) {
    const c = l.snapGrid[r],
      u = l.snapGrid[r + 1]
    o - c > (u - c) * s && (i += l.params.slidesPerGroup)
  } else {
    const c = l.snapGrid[r - 1],
      u = l.snapGrid[r]
    o - c <= (u - c) * s && (i -= l.params.slidesPerGroup)
  }
  return (
    (i = Math.max(i, 0)),
    (i = Math.min(i, l.slidesGrid.length - 1)),
    l.slideTo(i, e, t, n)
  )
}
function ig() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView
  let l = e.getSlideIndexWhenGrid(e.clickedIndex),
    i
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
    r = e.grid && e.params.grid && e.params.grid.rows > 1
  if (t.loop) {
    if (e.animating) return
    ;(i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? e.slideToLoop(i)
        : l >
            (r
              ? (e.slides.length - s) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - s)
          ? (e.loopFix(),
            (l = e.getSlideIndex(
              Ot(n, `${a}[data-swiper-slide-index="${i}"]`)[0],
            )),
            bu(() => {
              e.slideTo(l)
            }))
          : e.slideTo(l)
  } else e.slideTo(l)
}
var rg = {
  slideTo: Qh,
  slideToLoop: eg,
  slideNext: tg,
  slidePrev: ng,
  slideReset: sg,
  slideToClosest: lg,
  slideToClickedSlide: ig,
}
function ag(e, t) {
  const n = this,
    { params: s, slidesEl: l } = n
  if (!s.loop || (n.virtual && n.params.virtual.enabled)) return
  const i = () => {
      Ot(l, `.${s.slideClass}, swiper-slide`).forEach((h, m) => {
        h.setAttribute("data-swiper-slide-index", m)
      })
    },
    a = () => {
      const p = Ot(l, `.${s.slideBlankClass}`)
      p.forEach((h) => {
        h.remove()
      }),
        p.length > 0 && (n.recalcSlides(), n.updateSlides())
    },
    r = n.grid && s.grid && s.grid.rows > 1
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || r) && a()
  const o = s.slidesPerGroup * (r ? s.grid.rows : 1),
    c = n.slides.length % o !== 0,
    u = r && n.slides.length % s.grid.rows !== 0,
    d = (p) => {
      for (let h = 0; h < p; h += 1) {
        const m = n.isElement
          ? nl("swiper-slide", [s.slideBlankClass])
          : nl("div", [s.slideClass, s.slideBlankClass])
        n.slidesEl.append(m)
      }
    }
  if (c) {
    if (s.loopAddBlankSlides) {
      const p = o - (n.slides.length % o)
      d(p), n.recalcSlides(), n.updateSlides()
    } else
      tl(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    i()
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const p = s.grid.rows - (n.slides.length % s.grid.rows)
      d(p), n.recalcSlides(), n.updateSlides()
    } else
      tl(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    i()
  } else i()
  n.loopFix({
    slideRealIndex: e,
    direction: s.centeredSlides ? void 0 : "next",
    initial: t,
  })
}
function og(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: l,
    activeSlideIndex: i,
    initial: a,
    byController: r,
    byMousewheel: o,
  } = e === void 0 ? {} : e
  const c = this
  if (!c.params.loop) return
  c.emit("beforeLoopFix")
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: p,
      slidesEl: h,
      params: m,
    } = c,
    { centeredSlides: b, initialSlide: k } = m
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
      (c.allowSlideNext = p),
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
  const S = c.grid && m.grid && m.grid.rows > 1
  u.length < w + v || (c.params.effect === "cards" && u.length < w + v * 2)
    ? tl(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : S &&
      m.grid.fill === "row" &&
      tl(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const T = [],
    M = [],
    E = S ? Math.ceil(u.length / m.grid.rows) : u.length,
    A = a && E - k < w && !b
  let I = A ? k : c.activeIndex
  typeof i > "u"
    ? (i = c.getSlideIndex(
        u.find((O) => O.classList.contains(m.slideActiveClass)),
      ))
    : (I = i)
  const $ = s === "next" || !s,
    j = s === "prev" || !s
  let F = 0,
    W = 0
  const he = (S ? u[i].column : i) + (b && typeof l > "u" ? -w / 2 + 0.5 : 0)
  if (he < v) {
    F = Math.max(v - he, g)
    for (let O = 0; O < v - he; O += 1) {
      const z = O - Math.floor(O / E) * E
      if (S) {
        const B = E - z - 1
        for (let ye = u.length - 1; ye >= 0; ye -= 1)
          u[ye].column === B && T.push(ye)
      } else T.push(E - z - 1)
    }
  } else if (he + w > E - v) {
    ;(W = Math.max(he - (E - v * 2), g)), A && (W = Math.max(W, w - E + k + 1))
    for (let O = 0; O < W; O += 1) {
      const z = O - Math.floor(O / E) * E
      S
        ? u.forEach((B, ye) => {
            B.column === z && M.push(ye)
          })
        : M.push(z)
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1
    }),
    c.params.effect === "cards" &&
      u.length < w + v * 2 &&
      (M.includes(i) && M.splice(M.indexOf(i), 1),
      T.includes(i) && T.splice(T.indexOf(i), 1)),
    j &&
      T.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          h.prepend(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    $ &&
      M.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          h.append(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    c.recalcSlides(),
    m.slidesPerView === "auto"
      ? c.updateSlides()
      : S &&
        ((T.length > 0 && j) || (M.length > 0 && $)) &&
        c.slides.forEach((O, z) => {
          c.grid.updateSlide(z, O, c.slides)
        }),
    m.watchSlidesProgress && c.updateSlidesOffset(),
    n)
  ) {
    if (T.length > 0 && j) {
      if (typeof t > "u") {
        const O = c.slidesGrid[I],
          B = c.slidesGrid[I + F] - O
        o
          ? c.setTranslate(c.translate - B)
          : (c.slideTo(I + Math.ceil(F), 0, !1, !0),
            l &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - B),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - B)))
      } else if (l) {
        const O = S ? T.length / m.grid.rows : T.length
        c.slideTo(c.activeIndex + O, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate)
      }
    } else if (M.length > 0 && $)
      if (typeof t > "u") {
        const O = c.slidesGrid[I],
          B = c.slidesGrid[I - W] - O
        o
          ? c.setTranslate(c.translate - B)
          : (c.slideTo(I - W, 0, !1, !0),
            l &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - B),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - B)))
      } else {
        const O = S ? M.length / m.grid.rows : M.length
        c.slideTo(c.activeIndex - O, 0, !1, !0)
      }
  }
  if (
    ((c.allowSlidePrev = d),
    (c.allowSlideNext = p),
    c.controller && c.controller.control && !r)
  ) {
    const O = {
      slideRealIndex: t,
      direction: s,
      setTranslate: l,
      activeSlideIndex: i,
      byController: !0,
    }
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...O,
              slideTo: z.params.slidesPerView === m.slidesPerView ? n : !1,
            })
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...O,
          slideTo:
            c.controller.control.params.slidesPerView === m.slidesPerView
              ? n
              : !1,
        })
  }
  c.emit("loopFix")
}
function ug() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const s = []
  e.slides.forEach((l) => {
    const i =
      typeof l.swiperSlideIndex > "u"
        ? l.getAttribute("data-swiper-slide-index") * 1
        : l.swiperSlideIndex
    s[i] = l
  }),
    e.slides.forEach((l) => {
      l.removeAttribute("data-swiper-slide-index")
    }),
    s.forEach((l) => {
      n.append(l)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var cg = { loopCreate: ag, loopFix: og, loopDestroy: ug }
function dg(e) {
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
function fg() {
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
var pg = { setGrabCursor: dg, unsetGrabCursor: fg }
function hg(e, t) {
  t === void 0 && (t = this)
  function n(s) {
    if (!s || s === jt() || s === Qe()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const l = s.closest(e)
    return !l && !s.getRootNode ? null : l || n(s.getRootNode().host)
  }
  return n(t)
}
function Ea(e, t, n) {
  const s = Qe(),
    { params: l } = e,
    i = l.edgeSwipeDetection,
    a = l.edgeSwipeThreshold
  return i && (n <= a || n >= s.innerWidth - a)
    ? i === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function gg(e) {
  const t = this,
    n = jt()
  let s = e
  s.originalEvent && (s = s.originalEvent)
  const l = t.touchEventsData
  if (s.type === "pointerdown") {
    if (l.pointerId !== null && l.pointerId !== s.pointerId) return
    l.pointerId = s.pointerId
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (l.touchId = s.targetTouches[0].identifier)
  if (s.type === "touchstart") {
    Ea(t, s, s.targetTouches[0].pageX)
    return
  }
  const { params: i, touches: a, enabled: r } = t
  if (
    !r ||
    (!i.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && i.preventInteractionOnTransition)
  )
    return
  !t.animating && i.cssMode && i.loop && t.loopFix()
  let o = s.target
  if (
    (i.touchEventsTarget === "wrapper" && !Ch(o, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (l.isTouched && l.isMoved)
  )
    return
  const c = !!i.noSwipingClass && i.noSwipingClass !== "",
    u = s.composedPath ? s.composedPath() : s.path
  c && s.target && s.target.shadowRoot && u && (o = u[0])
  const d = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
    p = !!(s.target && s.target.shadowRoot)
  if (i.noSwiping && (p ? hg(d, o) : o.closest(d))) {
    t.allowClick = !0
    return
  }
  if (i.swipeHandler && !o.closest(i.swipeHandler)) return
  ;(a.currentX = s.pageX), (a.currentY = s.pageY)
  const h = a.currentX,
    m = a.currentY
  if (!Ea(t, s, h)) return
  Object.assign(l, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = h),
    (a.startY = m),
    (l.touchStartTime = el()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    i.threshold > 0 && (l.allowThresholdMove = !1)
  let b = !0
  o.matches(l.focusableElements) &&
    ((b = !1), o.nodeName === "SELECT" && (l.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(l.focusableElements) &&
      n.activeElement !== o &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !o.matches(l.focusableElements))) &&
      n.activeElement.blur()
  const k = b && t.allowTouchMove && i.touchStartPreventDefault
  ;(i.touchStartForcePreventDefault || k) &&
    !o.isContentEditable &&
    s.preventDefault(),
    i.freeMode &&
      i.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !i.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s)
}
function mg(e) {
  const t = jt(),
    n = this,
    s = n.touchEventsData,
    { params: l, touches: i, rtlTranslate: a, enabled: r } = n
  if (!r || (!l.simulateTouch && e.pointerType === "mouse")) return
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
    ;(i.startX = u), (i.startY = d)
    return
  }
  if (!n.allowTouchMove) {
    o.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(i, { startX: u, startY: d, currentX: u, currentY: d }),
        (s.touchStartTime = el()))
    return
  }
  if (l.touchReleaseOnEdges && !l.loop)
    if (n.isVertical()) {
      if (
        (d < i.startY && n.translate <= n.maxTranslate()) ||
        (d > i.startY && n.translate >= n.minTranslate())
      ) {
        ;(s.isTouched = !1), (s.isMoved = !1)
        return
      }
    } else {
      if (
        a &&
        ((u > i.startX && -n.translate <= n.maxTranslate()) ||
          (u < i.startX && -n.translate >= n.minTranslate()))
      )
        return
      if (
        !a &&
        ((u < i.startX && n.translate <= n.maxTranslate()) ||
          (u > i.startX && n.translate >= n.minTranslate()))
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
    (i.previousX = i.currentX),
    (i.previousY = i.currentY),
    (i.currentX = u),
    (i.currentY = d)
  const p = i.currentX - i.startX,
    h = i.currentY - i.startY
  if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
    return
  if (typeof s.isScrolling > "u") {
    let T
    ;(n.isHorizontal() && i.currentY === i.startY) ||
    (n.isVertical() && i.currentX === i.startX)
      ? (s.isScrolling = !1)
      : p * p + h * h >= 25 &&
        ((T = (Math.atan2(Math.abs(h), Math.abs(p)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? T > l.touchAngle
          : 90 - T > l.touchAngle))
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", o),
    typeof s.startMoving > "u" &&
      (i.currentX !== i.startX || i.currentY !== i.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (o.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(n.allowClick = !1),
    !l.cssMode && o.cancelable && o.preventDefault(),
    l.touchMoveStopPropagation && !l.nested && o.stopPropagation()
  let m = n.isHorizontal() ? p : h,
    b = n.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY
  l.oneWayMovement &&
    ((m = Math.abs(m) * (a ? 1 : -1)), (b = Math.abs(b) * (a ? 1 : -1))),
    (i.diff = m),
    (m *= l.touchRatio),
    a && ((m = -m), (b = -b))
  const k = n.touchesDirection
  ;(n.swipeDirection = m > 0 ? "prev" : "next"),
    (n.touchesDirection = b > 0 ? "prev" : "next")
  const w = n.params.loop && !l.cssMode,
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
      l.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)
  }
  if (
    (new Date().getTime(),
    l._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      k !== n.touchesDirection &&
      w &&
      g &&
      Math.abs(m) >= 1)
  ) {
    Object.assign(i, {
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
    S = l.resistanceRatio
  if (
    (l.touchReleaseOnEdges && (S = 0),
    m > 0
      ? (w &&
          g &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (l.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (l.slidesPerView !== "auto" &&
                n.slides.length - l.slidesPerView >= 2
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
          l.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + m) ** S)))
      : m < 0 &&
        (w &&
          g &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (l.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (l.slidesPerView !== "auto" &&
                n.slides.length - l.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (l.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(l.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((v = !1),
          l.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - m) ** S))),
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
    l.threshold > 0)
  )
    if (Math.abs(m) > l.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;(s.allowThresholdMove = !0),
          (i.startX = i.currentX),
          (i.startY = i.currentY),
          (s.currentTranslate = s.startTranslate),
          (i.diff = n.isHorizontal()
            ? i.currentX - i.startX
            : i.currentY - i.startY)
        return
      }
    } else {
      s.currentTranslate = s.startTranslate
      return
    }
  !l.followFinger ||
    l.cssMode ||
    (((l.freeMode && l.freeMode.enabled && n.freeMode) ||
      l.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    l.freeMode && l.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate))
}
function bg(e) {
  const t = this,
    n = t.touchEventsData
  let s = e
  s.originalEvent && (s = s.originalEvent)
  let l
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((l = [...s.changedTouches].find((T) => T.identifier === n.touchId)),
      !l || l.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return
    l = s
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
    params: a,
    touches: r,
    rtlTranslate: o,
    slidesGrid: c,
    enabled: u,
  } = t
  if (!u || (!a.simulateTouch && s.pointerType === "mouse")) return
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const d = el(),
    p = d - n.touchStartTime
  if (t.allowClick) {
    const T = s.path || (s.composedPath && s.composedPath())
    t.updateClickedSlide((T && T[0]) || s.target, T),
      t.emit("tap click", s),
      p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", s)
  }
  if (
    ((n.lastClickTime = el()),
    bu(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (r.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let h
  if (
    (a.followFinger
      ? (h = o ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    a.cssMode)
  )
    return
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h })
    return
  }
  const m = h >= -t.maxTranslate() && !t.params.loop
  let b = 0,
    k = t.slidesSizesGrid[0]
  for (
    let T = 0;
    T < c.length;
    T += T < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const M = T < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    typeof c[T + M] < "u"
      ? (m || (h >= c[T] && h < c[T + M])) && ((b = T), (k = c[T + M] - c[T]))
      : (m || h >= c[T]) && ((b = T), (k = c[c.length - 1] - c[c.length - 2]))
  }
  let w = null,
    g = null
  a.rewind &&
    (t.isBeginning
      ? (g =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (w = 0))
  const v = (h - c[b]) / k,
    S = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (p > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (v >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? w : b + S)
        : t.slideTo(b)),
      t.swipeDirection === "prev" &&
        (v > 1 - a.longSwipesRatio
          ? t.slideTo(b + S)
          : g !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
            ? t.slideTo(g)
            : t.slideTo(b))
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(b + S)
        : t.slideTo(b)
      : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : b + S),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : b))
  }
}
function Ta() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: l, snapGrid: i } = e,
    a = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const r = a && t.loop
  ;(t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !r
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
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
    (e.allowSlidePrev = l),
    (e.allowSlideNext = s),
    e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
}
function vg(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function yg() {
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
  let l
  const i = e.maxTranslate() - e.minTranslate()
  i === 0 ? (l = 0) : (l = (e.translate - e.minTranslate()) / i),
    l !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function xg(e) {
  const t = this
  Gs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function wg() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Eu = (e, t) => {
  const n = jt(),
    { params: s, el: l, wrapperEl: i, device: a } = e,
    r = !!s.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    c = t
  !l ||
    typeof l == "string" ||
    (n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: r }),
    l[o]("touchstart", e.onTouchStart, { passive: !1 }),
    l[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: r }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: r }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      l[o]("click", e.onClick, !0),
    s.cssMode && i[o]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[c](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Ta,
          !0,
        )
      : e[c]("observerUpdate", Ta, !0),
    l[o]("load", e.onLoad, { capture: !0 }))
}
function Sg() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = gg.bind(e)),
    (e.onTouchMove = mg.bind(e)),
    (e.onTouchEnd = bg.bind(e)),
    (e.onDocumentTouchStart = wg.bind(e)),
    t.cssMode && (e.onScroll = yg.bind(e)),
    (e.onClick = vg.bind(e)),
    (e.onLoad = xg.bind(e)),
    Eu(e, "on")
}
function Cg() {
  Eu(this, "off")
}
var Eg = { attachEvents: Sg, detachEvents: Cg }
const ka = (e, t) => e.grid && t.grid && t.grid.rows > 1
function Tg() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: l } = e,
    i = s.breakpoints
  if (!i || (i && Object.keys(i).length === 0)) return
  const a = jt(),
    r =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    o =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : a.querySelector(s.breakpointsBase),
    c = e.getBreakpoint(i, r, o)
  if (!c || e.currentBreakpoint === c) return
  const d = (c in i ? i[c] : void 0) || e.originalParams,
    p = ka(e, s),
    h = ka(e, d),
    m = e.params.grabCursor,
    b = d.grabCursor,
    k = s.enabled
  p && !h
    ? (l.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !p &&
      h &&
      (l.classList.add(`${s.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === "column") ||
        (!d.grid.fill && s.grid.fill === "column")) &&
        l.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    m && !b ? e.unsetGrabCursor() : !m && b && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((M) => {
      if (typeof d[M] > "u") return
      const E = s[M] && s[M].enabled,
        A = d[M] && d[M].enabled
      E && !A && e[M].disable(), !E && A && e[M].enable()
    })
  const w = d.direction && d.direction !== s.direction,
    g = s.loop && (d.slidesPerView !== s.slidesPerView || w),
    v = s.loop
  w && n && e.changeDirection(), ot(e.params, d)
  const S = e.params.enabled,
    T = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    k && !S ? e.disable() : !k && S && e.enable(),
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
function kg(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let s = !1
  const l = Qe(),
    i = t === "window" ? l.innerHeight : n.clientHeight,
    a = Object.keys(e).map((r) => {
      if (typeof r == "string" && r.indexOf("@") === 0) {
        const o = parseFloat(r.substr(1))
        return { value: i * o, point: r }
      }
      return { value: r, point: r }
    })
  a.sort((r, o) => parseInt(r.value, 10) - parseInt(o.value, 10))
  for (let r = 0; r < a.length; r += 1) {
    const { point: o, value: c } = a[r]
    t === "window"
      ? l.matchMedia(`(min-width: ${c}px)`).matches && (s = o)
      : c <= n.clientWidth && (s = o)
  }
  return s || "max"
}
var Pg = { setBreakpoint: Tg, getBreakpoint: kg }
function Ig(e, t) {
  const n = []
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((l) => {
            s[l] && n.push(t + l)
          })
        : typeof s == "string" && n.push(t + s)
    }),
    n
  )
}
function $g() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: l, device: i } = e,
    a = Ig(
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
        { android: i.android },
        { ios: i.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  t.push(...a), l.classList.add(...t), e.emitContainerClasses()
}
function Mg() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var Ag = { addClasses: $g, removeClasses: Mg }
function Og() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n
  if (s) {
    const l = e.slides.length - 1,
      i = e.slidesGrid[l] + e.slidesSizesGrid[l] + s * 2
    e.isLocked = e.size > i
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var Lg = { checkOverflow: Og },
  $i = {
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
function jg(e, t) {
  return function (s) {
    s === void 0 && (s = {})
    const l = Object.keys(s)[0],
      i = s[l]
    if (typeof i != "object" || i === null) {
      ot(t, s)
      return
    }
    if (
      (e[l] === !0 && (e[l] = { enabled: !0 }),
      l === "navigation" &&
        e[l] &&
        e[l].enabled &&
        !e[l].prevEl &&
        !e[l].nextEl &&
        (e[l].auto = !0),
      ["pagination", "scrollbar"].indexOf(l) >= 0 &&
        e[l] &&
        e[l].enabled &&
        !e[l].el &&
        (e[l].auto = !0),
      !(l in e && "enabled" in i))
    ) {
      ot(t, s)
      return
    }
    typeof e[l] == "object" && !("enabled" in e[l]) && (e[l].enabled = !0),
      e[l] || (e[l] = { enabled: !1 }),
      ot(t, s)
  }
}
const Wl = {
    eventsEmitter: Ah,
    update: Hh,
    translate: Kh,
    transition: Zh,
    slide: rg,
    loop: cg,
    grabCursor: pg,
    events: Eg,
    breakpoints: Pg,
    checkOverflow: Lg,
    classes: Ag,
  },
  ql = {}
let lr = class _t {
  constructor() {
    let t, n
    for (var s = arguments.length, l = new Array(s), i = 0; i < s; i++)
      l[i] = arguments[i]
    l.length === 1 &&
    l[0].constructor &&
    Object.prototype.toString.call(l[0]).slice(8, -1) === "Object"
      ? (n = l[0])
      : ([t, n] = l),
      n || (n = {}),
      (n = ot({}, n)),
      t && !n.el && (n.el = t)
    const a = jt()
    if (
      n.el &&
      typeof n.el == "string" &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const u = []
      return (
        a.querySelectorAll(n.el).forEach((d) => {
          const p = ot({}, n, { el: d })
          u.push(new _t(p))
        }),
        u
      )
    }
    const r = this
    ;(r.__swiper__ = !0),
      (r.support = xu()),
      (r.device = wu({ userAgent: n.userAgent })),
      (r.browser = Su()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules)
    const o = {}
    r.modules.forEach((u) => {
      u({
        params: n,
        swiper: r,
        extendParams: jg(n, o),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      })
    })
    const c = ot({}, $i, o)
    return (
      (r.params = ot({}, c, ql, n)),
      (r.originalParams = ot({}, r.params)),
      (r.passedParams = ot({}, n)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((u) => {
          r.on(u, r.params.on[u])
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return r.params.direction === "horizontal"
        },
        isVertical() {
          return r.params.direction === "vertical"
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
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      r.emit("_swiper"),
      r.params.init && r.init(),
      r
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
      l = Ot(n, `.${s.slideClass}, swiper-slide`),
      i = sl(l[0])
    return sl(t) - i
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
    t.slides = Ot(n, `.${s.slideClass}, swiper-slide`)
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
    const l = s.minTranslate(),
      a = (s.maxTranslate() - l) * t + l
    s.translateTo(a, typeof n > "u" ? 0 : n),
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
      const l = t.getSlideClasses(s)
      n.push({ slideEl: s, classNames: l }), t.emit("_slideClass", s, l)
    }),
      t.emit("_slideClasses", n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1)
    const s = this,
      {
        params: l,
        slides: i,
        slidesGrid: a,
        slidesSizesGrid: r,
        size: o,
        activeIndex: c,
      } = s
    let u = 1
    if (typeof l.slidesPerView == "number") return l.slidesPerView
    if (l.centeredSlides) {
      let d = i[c] ? Math.ceil(i[c].swiperSlideSize) : 0,
        p
      for (let h = c + 1; h < i.length; h += 1)
        i[h] &&
          !p &&
          ((d += Math.ceil(i[h].swiperSlideSize)), (u += 1), d > o && (p = !0))
      for (let h = c - 1; h >= 0; h -= 1)
        i[h] && !p && ((d += i[h].swiperSlideSize), (u += 1), d > o && (p = !0))
    } else if (t === "current")
      for (let d = c + 1; d < i.length; d += 1)
        (n ? a[d] + r[d] - a[c] < o : a[d] - a[c] < o) && (u += 1)
    else for (let d = c - 1; d >= 0; d -= 1) a[c] - a[d] < o && (u += 1)
    return u
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: s } = t
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && Gs(t, a)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function l() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        r = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate())
      t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let i
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      l(), s.autoHeight && t.updateAutoHeight()
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const a = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides
        i = t.slideTo(a.length - 1, 0, !1, !0)
      } else i = t.slideTo(t.activeIndex, 0, !1, !0)
      i || l()
    }
    s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const s = this,
      l = s.params.direction
    return (
      t || (t = l === "horizontal" ? "vertical" : "horizontal"),
      t === l ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${l}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((i) => {
          t === "vertical" ? (i.style.width = "") : (i.style.height = "")
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
    const l = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`
    let a =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(l())
        : Ot(s, l())[0]
    return (
      !a &&
        n.params.createElements &&
        ((a = nl("div", n.params.wrapperClass)),
        s.append(a),
        Ot(s, `.${n.params.slideClass}`).forEach((r) => {
          a.append(r)
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: a,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || on(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || on(s, "direction") === "rtl"),
        wrongRTL: on(a, "display") === "-webkit-box",
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
    const l = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && l.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      l.forEach((i) => {
        i.complete
          ? Gs(n, i)
          : i.addEventListener("load", (a) => {
              Gs(n, a.target)
            })
      }),
      Ii(n),
      (n.initialized = !0),
      Ii(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const s = this,
      { params: l, el: i, wrapperEl: a, slides: r } = s
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        l.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          i && typeof i != "string" && i.removeAttribute("style"),
          a && a.removeAttribute("style"),
          r &&
            r.length &&
            r.forEach((o) => {
              o.classList.remove(
                l.slideVisibleClass,
                l.slideFullyVisibleClass,
                l.slideActiveClass,
                l.slideNextClass,
                l.slidePrevClass,
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index")
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((o) => {
          s.off(o)
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), vh(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    ot(ql, t)
  }
  static get extendedDefaults() {
    return ql
  }
  static get defaults() {
    return $i
  }
  static installModule(t) {
    _t.prototype.__modules__ || (_t.prototype.__modules__ = [])
    const n = _t.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => _t.installModule(n)), _t)
      : (_t.installModule(t), _t)
  }
}
Object.keys(Wl).forEach((e) => {
  Object.keys(Wl[e]).forEach((t) => {
    lr.prototype[t] = Wl[e][t]
  })
})
lr.use([$h, Mh])
const Tu = [
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
function Cn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  )
}
function Dn(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Cn(t[s]) && Cn(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : Dn(e[s], t[s])
          : (e[s] = t[s])
    })
}
function ku(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function Pu(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function Iu(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function $u(e) {
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
function Bg(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function Rg(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: l,
    nextEl: i,
    prevEl: a,
    scrollbarEl: r,
    paginationEl: o,
  } = e
  const c = l.filter(
      (I) => I !== "children" && I !== "direction" && I !== "wrapperClass",
    ),
    {
      params: u,
      pagination: d,
      navigation: p,
      scrollbar: h,
      virtual: m,
      thumbs: b,
    } = t
  let k, w, g, v, S, T, M, E
  l.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (k = !0),
    l.includes("controller") &&
      s.controller &&
      s.controller.control &&
      u.controller &&
      !u.controller.control &&
      (w = !0),
    l.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || o) &&
      (u.pagination || u.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    l.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || r) &&
      (u.scrollbar || u.scrollbar === !1) &&
      h &&
      !h.el &&
      (v = !0),
    l.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || a) &&
      (s.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (S = !0)
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
  l.includes("loop") &&
    t.isElement &&
    (u.loop && !s.loop ? (T = !0) : !u.loop && s.loop ? (M = !0) : (E = !0)),
    c.forEach((I) => {
      if (Cn(u[I]) && Cn(s[I]))
        Object.assign(u[I], s[I]),
          (I === "navigation" || I === "pagination" || I === "scrollbar") &&
            "enabled" in s[I] &&
            !s[I].enabled &&
            A(I)
      else {
        const $ = s[I]
        ;($ === !0 || $ === !1) &&
        (I === "navigation" || I === "pagination" || I === "scrollbar")
          ? $ === !1 && A(I)
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
    l.includes("children") && n && m && u.virtual.enabled
      ? ((m.slides = n), m.update(!0))
      : l.includes("virtual") &&
        m &&
        u.virtual.enabled &&
        (n && (m.slides = n), m.update(!0)),
    l.includes("children") && n && u.loop && (E = !0),
    k && b.init() && b.update(!0),
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
        (!r || typeof r == "string") &&
        ((r = document.createElement("div")),
        r.classList.add("swiper-scrollbar"),
        r.part.add("scrollbar"),
        t.el.appendChild(r)),
      r && (u.scrollbar.el = r),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    S &&
      (t.isElement &&
        ((!i || typeof i == "string") &&
          ((i = document.createElement("div")),
          i.classList.add("swiper-button-next"),
          ll(i, t.hostEl.constructor.nextButtonSvg),
          i.part.add("button-next"),
          t.el.appendChild(i)),
        (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-prev"),
          ll(a, t.hostEl.constructor.prevButtonSvg),
          a.part.add("button-prev"),
          t.el.appendChild(a))),
      i && (u.navigation.nextEl = i),
      a && (u.navigation.prevEl = a),
      p.init(),
      p.update()),
    l.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    l.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    l.includes("direction") && t.changeDirection(s.direction, !1),
    (T || E) && t.loopDestroy(),
    (M || E) && t.loopCreate(),
    t.update()
}
function Pa(e, t) {
  e === void 0 && (e = {})
  const n = { on: {} },
    s = {},
    l = {}
  Dn(n, $i), (n._emitClasses = !0), (n.init = !1)
  const i = {},
    a = Tu.map((o) => o.replace(/_/, "")),
    r = Object.assign({}, e)
  return (
    Object.keys(r).forEach((o) => {
      typeof e[o] > "u" ||
        (a.indexOf(o) >= 0
          ? Cn(e[o])
            ? ((n[o] = {}), (l[o] = {}), Dn(n[o], e[o]), Dn(l[o], e[o]))
            : ((n[o] = e[o]), (l[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (i[o] = e[o]))
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o]
    }),
    { params: n, passedParams: l, rest: i, events: s }
  )
}
function Ng(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: l,
    paginationEl: i,
    scrollbarEl: a,
    swiper: r,
  } = e
  ku(t) &&
    s &&
    l &&
    ((r.params.navigation.nextEl = s),
    (r.originalParams.navigation.nextEl = s),
    (r.params.navigation.prevEl = l),
    (r.originalParams.navigation.prevEl = l)),
    Pu(t) &&
      i &&
      ((r.params.pagination.el = i), (r.originalParams.pagination.el = i)),
    Iu(t) &&
      a &&
      ((r.params.scrollbar.el = a), (r.originalParams.scrollbar.el = a)),
    r.init(n)
}
function zg(e, t, n, s, l) {
  const i = []
  if (!t) return i
  const a = (o) => {
    i.indexOf(o) < 0 && i.push(o)
  }
  if (n && s) {
    const o = s.map(l),
      c = n.map(l)
    o.join("") !== c.join("") && a("children"),
      s.length !== n.length && a("children")
  }
  return (
    Tu.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Cn(e[o]) && Cn(t[o])) {
            const c = Object.keys(e[o]),
              u = Object.keys(t[o])
            c.length !== u.length
              ? a(o)
              : (c.forEach((d) => {
                  e[o][d] !== t[o][d] && a(o)
                }),
                u.forEach((d) => {
                  e[o][d] !== t[o][d] && a(o)
                }))
          } else e[o] !== t[o] && a(o)
      }),
    i
  )
}
const _g = (e) => {
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
function Ul(e, t, n) {
  e === void 0 && (e = {})
  const s = [],
    l = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    i = (a, r) => {
      Array.isArray(a) &&
        a.forEach((o) => {
          const c = typeof o.type == "symbol"
          r === "default" && (r = "container-end"),
            c && o.children
              ? i(o.children, r)
              : (o.type &&
                    (o.type.name === "SwiperSlide" ||
                      o.type.name === "AsyncComponentWrapper")) ||
                  (o.componentOptions &&
                    o.componentOptions.tag === "SwiperSlide")
                ? s.push(o)
                : l[r] && l[r].push(o)
        })
    }
  return (
    Object.keys(e).forEach((a) => {
      if (typeof e[a] != "function") return
      const r = e[a]()
      i(r, a)
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: l }
  )
}
function Dg(e, t, n) {
  if (!n) return null
  const s = (u) => {
      let d = u
      return u < 0 ? (d = t.length + u) : d >= t.length && (d = d - t.length), d
    },
    l = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: i, to: a } = n,
    r = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    c = []
  for (let u = r; u < o; u += 1)
    u >= i && u <= a && c.length < t.length && c.push(t[s(u)])
  return c.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = e),
      (u.props.style = l),
      u.type)
    )
      return Ee(u.type, { ...u.props }, u.children)
    if (u.componentOptions)
      return Ee(
        u.componentOptions.Ctor,
        { ...u.props },
        u.componentOptions.children,
      )
  })
}
const Fg = {
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
      const { tag: l, wrapperTag: i } = e,
        a = V("swiper"),
        r = V(null),
        o = V(!1),
        c = V(!1),
        u = V(null),
        d = V(null),
        p = V(null),
        h = { value: [] },
        m = { value: [] },
        b = V(null),
        k = V(null),
        w = V(null),
        g = V(null),
        { params: v, passedParams: S } = Pa(e)
      Ul(n, h, m), (p.value = S), (m.value = h.value)
      const T = () => {
        Ul(n, h, m), (o.value = !0)
      }
      ;(v.onAny = function (A) {
        for (
          var I = arguments.length, $ = new Array(I > 1 ? I - 1 : 0), j = 1;
          j < I;
          j++
        )
          $[j - 1] = arguments[j]
        s(A, ...$)
      }),
        Object.assign(v.on, {
          _beforeBreakpoint: T,
          _containerClasses(A, I) {
            a.value = I
          },
        })
      const M = { ...v }
      if (
        (delete M.wrapperClass,
        (d.value = new lr(M)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = h.value
        const A = {
          cache: !1,
          slides: h.value,
          renderExternal: (I) => {
            r.value = I
          },
          renderExternalUpdate: !1,
        }
        Dn(d.value.params.virtual, A), Dn(d.value.originalParams.virtual, A)
      }
      Wi(() => {
        !c.value && d.value && (d.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: A } = Pa(e),
          I = zg(A, p.value, h.value, m.value, ($) => $.props && $.props.key)
        ;(p.value = A),
          (I.length || o.value) &&
            d.value &&
            !d.value.destroyed &&
            Rg({
              swiper: d.value,
              slides: h.value,
              passedParams: A,
              changedParams: I,
              nextEl: b.value,
              prevEl: k.value,
              scrollbarEl: g.value,
              paginationEl: w.value,
            }),
          (o.value = !1)
      }),
        bt("swiper", d),
        cn(r, () => {
          hl(() => {
            _g(d.value)
          })
        }),
        We(() => {
          u.value &&
            (Ng(
              {
                el: u.value,
                nextEl: b.value,
                prevEl: k.value,
                paginationEl: w.value,
                scrollbarEl: g.value,
                swiper: d.value,
              },
              v,
            ),
            s("swiper", d.value))
        }),
        qi(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1)
        })
      function E(A) {
        return v.virtual
          ? Dg(d, A, r.value)
          : (A.forEach((I, $) => {
              I.props || (I.props = {}),
                (I.props.swiperRef = d),
                (I.props.swiperSlideIndex = $)
            }),
            A)
      }
      return () => {
        const { slides: A, slots: I } = Ul(n, h, m)
        return Ee(l, { ref: u, class: $u(a.value) }, [
          I["container-start"],
          Ee(i, { class: Bg(v.wrapperClass) }, [
            I["wrapper-start"],
            E(A),
            I["wrapper-end"],
          ]),
          ku(e) && [
            Ee("div", { ref: k, class: "swiper-button-prev" }),
            Ee("div", { ref: b, class: "swiper-button-next" }),
          ],
          Iu(e) && Ee("div", { ref: g, class: "swiper-scrollbar" }),
          Pu(e) && Ee("div", { ref: w, class: "swiper-pagination" }),
          I["container-end"],
        ])
      }
    },
  },
  Hg = {
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
      const { swiperRef: l } = e,
        i = V(null),
        a = V("swiper-slide"),
        r = V(!1)
      function o(d, p, h) {
        p === i.value && (a.value = h)
      }
      We(() => {
        !l || !l.value || (l.value.on("_slideClass", o), (s = !0))
      }),
        Vi(() => {
          s || !l || !l.value || (l.value.on("_slideClass", o), (s = !0))
        }),
        Wi(() => {
          !i.value ||
            !l ||
            !l.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (i.value.swiperSlideIndex = e.swiperSlideIndex),
            l.value.destroyed &&
              a.value !== "swiper-slide" &&
              (a.value = "swiper-slide"))
        }),
        qi(() => {
          !l || !l.value || l.value.off("_slideClass", o)
        })
      const c = se(() => ({
        isActive: a.value.indexOf("swiper-slide-active") >= 0,
        isVisible: a.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: a.value.indexOf("swiper-slide-prev") >= 0,
        isNext: a.value.indexOf("swiper-slide-next") >= 0,
      }))
      bt("swiperSlide", c)
      const u = () => {
        r.value = !0
      }
      return () =>
        Ee(
          e.tag,
          {
            class: $u(`${a.value}`),
            ref: i,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && l && l.value && l.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: u,
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
                  n.default && n.default(c.value),
                  e.lazy &&
                    !r.value &&
                    Ee("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(c.value),
                e.lazy &&
                  !r.value &&
                  Ee("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function Mu(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((l) => {
        if (!n[l] && n.auto === !0) {
          let i = Ot(e.el, `.${s[l]}`)[0]
          i || ((i = nl("div", s[l])), (i.className = s[l]), e.el.append(i)),
            (n[l] = i),
            (t[l] = i)
        }
      }),
    n
  )
}
function Gg(e) {
  let { swiper: t, extendParams: n, on: s, emit: l } = e
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
  function i(m) {
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
  function a(m, b) {
    const k = t.params.navigation
    ;(m = De(m)),
      m.forEach((w) => {
        w &&
          (w.classList[b ? "add" : "remove"](...k.disabledClass.split(" ")),
          w.tagName === "BUTTON" && (w.disabled = b),
          t.params.watchOverflow &&
            t.enabled &&
            w.classList[t.isLocked ? "add" : "remove"](k.lockClass))
      })
  }
  function r() {
    const { nextEl: m, prevEl: b } = t.navigation
    if (t.params.loop) {
      a(b, !1), a(m, !1)
      return
    }
    a(b, t.isBeginning && !t.params.rewind), a(m, t.isEnd && !t.params.rewind)
  }
  function o(m) {
    m.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), l("navigationPrev"))
  }
  function c(m) {
    m.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), l("navigationNext"))
  }
  function u() {
    const m = t.params.navigation
    if (
      ((t.params.navigation = Mu(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(m.nextEl || m.prevEl))
    )
      return
    let b = i(m.nextEl),
      k = i(m.prevEl)
    Object.assign(t.navigation, { nextEl: b, prevEl: k }),
      (b = De(b)),
      (k = De(k))
    const w = (g, v) => {
      g && g.addEventListener("click", v === "next" ? c : o),
        !t.enabled && g && g.classList.add(...m.lockClass.split(" "))
    }
    b.forEach((g) => w(g, "next")), k.forEach((g) => w(g, "prev"))
  }
  function d() {
    let { nextEl: m, prevEl: b } = t.navigation
    ;(m = De(m)), (b = De(b))
    const k = (w, g) => {
      w.removeEventListener("click", g === "next" ? c : o),
        w.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    m.forEach((w) => k(w, "next")), b.forEach((w) => k(w, "prev"))
  }
  s("init", () => {
    t.params.navigation.enabled === !1 ? h() : (u(), r())
  }),
    s("toEdge fromEdge lock unlock", () => {
      r()
    }),
    s("destroy", () => {
      d()
    }),
    s("enable disable", () => {
      let { nextEl: m, prevEl: b } = t.navigation
      if (((m = De(m)), (b = De(b)), t.enabled)) {
        r()
        return
      }
      ;[...m, ...b]
        .filter((k) => !!k)
        .forEach((k) => k.classList.add(t.params.navigation.lockClass))
    }),
    s("click", (m, b) => {
      let { nextEl: k, prevEl: w } = t.navigation
      ;(k = De(k)), (w = De(w))
      const g = b.target
      let v = w.includes(g) || k.includes(g)
      if (t.isElement && !v) {
        const S = b.path || (b.composedPath && b.composedPath())
        S && (v = S.find((T) => k.includes(T) || w.includes(T)))
      }
      if (t.params.navigation.hideOnClick && !v) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g || t.pagination.el.contains(g))
        )
          return
        let S
        k.length
          ? (S = k[0].classList.contains(t.params.navigation.hiddenClass))
          : w.length &&
            (S = w[0].classList.contains(t.params.navigation.hiddenClass)),
          l(S === !0 ? "navigationShow" : "navigationHide"),
          [...k, ...w]
            .filter((T) => !!T)
            .forEach((T) => T.classList.toggle(t.params.navigation.hiddenClass))
      }
    })
  const p = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        u(),
        r()
    },
    h = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        d()
    }
  Object.assign(t.navigation, {
    enable: p,
    disable: h,
    update: r,
    init: u,
    destroy: d,
  })
}
function ts(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/()[\]])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function Vg(e) {
  let { swiper: t, extendParams: n, on: s, emit: l } = e
  const i = "swiper-pagination"
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
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] })
  let a,
    r = 0
  function o() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function c(g, v) {
    const { bulletActiveClass: S } = t.params.pagination
    g &&
      ((g = g[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
      g &&
        (g.classList.add(`${S}-${v}`),
        (g = g[`${v === "prev" ? "previous" : "next"}ElementSibling`]),
        g && g.classList.add(`${S}-${v}-${v}`)))
  }
  function u(g, v, S) {
    if (((g = g % S), (v = v % S), v === g + 1)) return "next"
    if (v === g - 1) return "previous"
  }
  function d(g) {
    const v = g.target.closest(ts(t.params.pagination.bulletClass))
    if (!v) return
    g.preventDefault()
    const S = sl(v) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === S) return
      const T = u(t.realIndex, S, t.slides.length)
      T === "next"
        ? t.slideNext()
        : T === "previous"
          ? t.slidePrev()
          : t.slideToLoop(S)
    } else t.slideTo(S)
  }
  function p() {
    const g = t.rtl,
      v = t.params.pagination
    if (o()) return
    let S = t.pagination.el
    S = De(S)
    let T, M
    const E =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      A = t.params.loop
        ? Math.ceil(E / t.params.slidesPerGroup)
        : t.snapGrid.length
    if (
      (t.params.loop
        ? ((M = t.previousRealIndex || 0),
          (T =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((T = t.snapIndex), (M = t.previousSnapIndex))
          : ((M = t.previousIndex || 0), (T = t.activeIndex || 0)),
      v.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const I = t.pagination.bullets
      let $, j, F
      if (
        (v.dynamicBullets &&
          ((a = Pi(I[0], t.isHorizontal() ? "width" : "height")),
          S.forEach((W) => {
            W.style[t.isHorizontal() ? "width" : "height"] =
              `${a * (v.dynamicMainBullets + 4)}px`
          }),
          v.dynamicMainBullets > 1 &&
            M !== void 0 &&
            ((r += T - (M || 0)),
            r > v.dynamicMainBullets - 1
              ? (r = v.dynamicMainBullets - 1)
              : r < 0 && (r = 0)),
          ($ = Math.max(T - r, 0)),
          (j = $ + (Math.min(I.length, v.dynamicMainBullets) - 1)),
          (F = (j + $) / 2)),
        I.forEach((W) => {
          const de = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (he) => `${v.bulletActiveClass}${he}`,
            ),
          ]
            .map((he) =>
              typeof he == "string" && he.includes(" ") ? he.split(" ") : he,
            )
            .flat()
          W.classList.remove(...de)
        }),
        S.length > 1)
      )
        I.forEach((W) => {
          const de = sl(W)
          de === T
            ? W.classList.add(...v.bulletActiveClass.split(" "))
            : t.isElement && W.setAttribute("part", "bullet"),
            v.dynamicBullets &&
              (de >= $ &&
                de <= j &&
                W.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),
              de === $ && c(W, "prev"),
              de === j && c(W, "next"))
        })
      else {
        const W = I[T]
        if (
          (W && W.classList.add(...v.bulletActiveClass.split(" ")),
          t.isElement &&
            I.forEach((de, he) => {
              de.setAttribute("part", he === T ? "bullet-active" : "bullet")
            }),
          v.dynamicBullets)
        ) {
          const de = I[$],
            he = I[j]
          for (let O = $; O <= j; O += 1)
            I[O] &&
              I[O].classList.add(...`${v.bulletActiveClass}-main`.split(" "))
          c(de, "prev"), c(he, "next")
        }
      }
      if (v.dynamicBullets) {
        const W = Math.min(I.length, v.dynamicMainBullets + 4),
          de = (a * W - a) / 2 - F * a,
          he = g ? "right" : "left"
        I.forEach((O) => {
          O.style[t.isHorizontal() ? he : "top"] = `${de}px`
        })
      }
    }
    S.forEach((I, $) => {
      if (
        (v.type === "fraction" &&
          (I.querySelectorAll(ts(v.currentClass)).forEach((j) => {
            j.textContent = v.formatFractionCurrent(T + 1)
          }),
          I.querySelectorAll(ts(v.totalClass)).forEach((j) => {
            j.textContent = v.formatFractionTotal(A)
          })),
        v.type === "progressbar")
      ) {
        let j
        v.progressbarOpposite
          ? (j = t.isHorizontal() ? "vertical" : "horizontal")
          : (j = t.isHorizontal() ? "horizontal" : "vertical")
        const F = (T + 1) / A
        let W = 1,
          de = 1
        j === "horizontal" ? (W = F) : (de = F),
          I.querySelectorAll(ts(v.progressbarFillClass)).forEach((he) => {
            ;(he.style.transform = `translate3d(0,0,0) scaleX(${W}) scaleY(${de})`),
              (he.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      v.type === "custom" && v.renderCustom
        ? (ll(I, v.renderCustom(t, T + 1, A)),
          $ === 0 && l("paginationRender", I))
        : ($ === 0 && l("paginationRender", I), l("paginationUpdate", I)),
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
    let S = t.pagination.el
    S = De(S)
    let T = ""
    if (g.type === "bullets") {
      let M = t.params.loop
        ? Math.ceil(v / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && M > v && (M = v)
      for (let E = 0; E < M; E += 1)
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
      S.forEach((M) => {
        g.type !== "custom" && ll(M, T || ""),
          g.type === "bullets" &&
            t.pagination.bullets.push(...M.querySelectorAll(ts(g.bulletClass)))
      }),
      g.type !== "custom" && l("paginationRender", S[0])
  }
  function m() {
    t.params.pagination = Mu(
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
          v.length > 1 && (v = v.find((S) => yu(S, ".swiper")[0] === t.el))),
        Array.isArray(v) && v.length === 1 && (v = v[0]),
        Object.assign(t.pagination, { el: v }),
        (v = De(v)),
        v.forEach((S) => {
          g.type === "bullets" &&
            g.clickable &&
            S.classList.add(...(g.clickableClass || "").split(" ")),
            S.classList.add(g.modifierClass + g.type),
            S.classList.add(
              t.isHorizontal() ? g.horizontalClass : g.verticalClass,
            ),
            g.type === "bullets" &&
              g.dynamicBullets &&
              (S.classList.add(`${g.modifierClass}${g.type}-dynamic`),
              (r = 0),
              g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)),
            g.type === "progressbar" &&
              g.progressbarOpposite &&
              S.classList.add(g.progressbarOppositeClass),
            g.clickable && S.addEventListener("click", d),
            t.enabled || S.classList.add(g.lockClass)
        }))
  }
  function b() {
    const g = t.params.pagination
    if (o()) return
    let v = t.pagination.el
    v &&
      ((v = De(v)),
      v.forEach((S) => {
        S.classList.remove(g.hiddenClass),
          S.classList.remove(g.modifierClass + g.type),
          S.classList.remove(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass,
          ),
          g.clickable &&
            (S.classList.remove(...(g.clickableClass || "").split(" ")),
            S.removeEventListener("click", d))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((S) =>
          S.classList.remove(...g.bulletActiveClass.split(" ")),
        )
  }
  s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const g = t.params.pagination
    let { el: v } = t.pagination
    ;(v = De(v)),
      v.forEach((S) => {
        S.classList.remove(g.horizontalClass, g.verticalClass),
          S.classList.add(
            t.isHorizontal() ? g.horizontalClass : g.verticalClass,
          )
      })
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? w() : (m(), h(), p())
    }),
    s("activeIndexChange", () => {
      typeof t.snapIndex > "u" && p()
    }),
    s("snapIndexChange", () => {
      p()
    }),
    s("snapGridLengthChange", () => {
      h(), p()
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
      p()
    }),
    s("click", (g, v) => {
      const S = v.target,
        T = De(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        T &&
        T.length > 0 &&
        !S.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && S === t.navigation.nextEl) ||
            (t.navigation.prevEl && S === t.navigation.prevEl))
        )
          return
        const M = T[0].classList.contains(t.params.pagination.hiddenClass)
        l(M === !0 ? "paginationShow" : "paginationHide"),
          T.forEach((E) => E.classList.toggle(t.params.pagination.hiddenClass))
      }
    })
  const k = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: g } = t.pagination
      g &&
        ((g = De(g)),
        g.forEach((v) =>
          v.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        m(),
        h(),
        p()
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
    enable: k,
    disable: w,
    render: h,
    update: p,
    init: m,
    destroy: b,
  })
}
function Wg(e) {
  let { swiper: t, extendParams: n, on: s, emit: l, params: i } = e
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
  let a,
    r,
    o = i && i.autoplay ? i.autoplay.delay : 3e3,
    c = i && i.autoplay ? i.autoplay.delay : 3e3,
    u,
    d = new Date().getTime(),
    p,
    h,
    m,
    b,
    k,
    w,
    g
  function v(B) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (B.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", v),
        !(g || (B.detail && B.detail.bySwiperTouchMove)) && $()))
  }
  const S = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (p = !0) : p && ((c = u), (p = !1))
      const B = t.autoplay.paused ? u : d + c - new Date().getTime()
      ;(t.autoplay.timeLeft = B),
        l("autoplayTimeLeft", B, B / o),
        (r = requestAnimationFrame(() => {
          S()
        }))
    },
    T = () => {
      let B
      return (
        t.virtual && t.params.virtual.enabled
          ? (B = t.slides.find((me) =>
              me.classList.contains("swiper-slide-active"),
            ))
          : (B = t.slides[t.activeIndex]),
        B ? parseInt(B.getAttribute("data-swiper-autoplay"), 10) : void 0
      )
    },
    M = (B) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(r), S()
      let ye = typeof B > "u" ? t.params.autoplay.delay : B
      ;(o = t.params.autoplay.delay), (c = t.params.autoplay.delay)
      const me = T()
      !Number.isNaN(me) &&
        me > 0 &&
        typeof B > "u" &&
        ((ye = me), (o = me), (c = me)),
        (u = ye)
      const Le = t.params.speed,
        je = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(Le, !0, !0), l("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, Le, !0, !0), l("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(Le, !0, !0), l("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, Le, !0, !0), l("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                M()
              })))
        }
      return (
        ye > 0
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              je()
            }, ye)))
          : requestAnimationFrame(() => {
              je()
            }),
        ye
      )
    },
    E = () => {
      ;(d = new Date().getTime()),
        (t.autoplay.running = !0),
        M(),
        l("autoplayStart")
    },
    A = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(a),
        cancelAnimationFrame(r),
        l("autoplayStop")
    },
    I = (B, ye) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(a), B || (w = !0)
      const me = () => {
        l("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", v)
            : $()
      }
      if (((t.autoplay.paused = !0), ye)) {
        k && (u = t.params.autoplay.delay), (k = !1), me()
        return
      }
      ;(u = (u || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && u < 0 && !t.params.loop) && (u < 0 && (u = 0), me())
    },
    $ = () => {
      ;(t.isEnd && u < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        w ? ((w = !1), M(u)) : M(),
        (t.autoplay.paused = !1),
        l("autoplayResume"))
    },
    j = () => {
      if (t.destroyed || !t.autoplay.running) return
      const B = jt()
      B.visibilityState === "hidden" && ((w = !0), I(!0)),
        B.visibilityState === "visible" && $()
    },
    F = (B) => {
      B.pointerType === "mouse" &&
        ((w = !0), (g = !0), !(t.animating || t.autoplay.paused) && I(!0))
    },
    W = (B) => {
      B.pointerType === "mouse" && ((g = !1), t.autoplay.paused && $())
    },
    de = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", F),
        t.el.addEventListener("pointerleave", W))
    },
    he = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", F),
        t.el.removeEventListener("pointerleave", W))
    },
    O = () => {
      jt().addEventListener("visibilitychange", j)
    },
    z = () => {
      jt().removeEventListener("visibilitychange", j)
    }
  s("init", () => {
    t.params.autoplay.enabled && (de(), O(), E())
  }),
    s("destroy", () => {
      he(), z(), t.autoplay.running && A()
    }),
    s("_freeModeStaticRelease", () => {
      ;(m || w) && $()
    }),
    s("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? A() : I(!0, !0)
    }),
    s("beforeTransitionStart", (B, ye, me) => {
      t.destroyed ||
        !t.autoplay.running ||
        (me || !t.params.autoplay.disableOnInteraction ? I(!0, !0) : A())
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
          clearTimeout(a),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(m = !1), (h = !1)
          return
        }
        m && t.params.cssMode && $(), (m = !1), (h = !1)
      }
    }),
    s("slideChange", () => {
      t.destroyed || !t.autoplay.running || (k = !0)
    }),
    Object.assign(t.autoplay, { start: E, stop: A, pause: I, resume: $ })
}
const qg = { class: "prose text-center" },
  Ug = { href: "/pricing" },
  Kg = { id: "cta" },
  ks = {
    __name: "ctaForm",
    props: { brightness: Number },
    setup(e) {
      const t = (l) => {
          if (l >= 4) return "text-slate-800"
          if (l == 3) return "text-slate-200"
          if (l == 2) return "text-slate-300"
          if (l == 1) return "text-slate-300"
        },
        n = (l) => {
          if (l >= 4) return "text-emerald-500"
          if (l == 3) return "text-slate-800"
          if (l == 2) return "text-orange-500"
          if (l == 1) return "text-orange-400"
        },
        s = async (l) => {
          l.preventDefault()
          const i = "contact"
          let a = document.getElementsByName("name")[0].value,
            r = document.getElementsByName("email")[0].value,
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
                form: i,
                name: a,
                email: r,
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
                  p = document.createElement("div")
                p.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (p.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  d.appendChild(p)
                let h = d.getElementsByTagName("input")
                for (let k = 0; k < h.length; k++) h[k].style.display = "none"
                let m = d.getElementsByTagName("textarea")[0]
                m.style.display = "none"
                let b = document.getElementById("submitButton")
                b.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (l, i) => (
        L(),
        K(
          "div",
          {
            class: x([
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
            f("div", qg, [
              f(
                "h4",
                { class: x(["text-2xl", t(e.brightness)]) },
                [
                  ...(i[0] ||
                    (i[0] = [
                      oe(" Piqued your interest?", -1),
                      f("br", null, null, -1),
                      oe(
                        " Check out the (incredibly simple) service pricing: ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              f("a", Ug, [
                f(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    "aria-": "",
                    class: x([
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
              f(
                "h4",
                { class: x(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              f("form", Kg, [
                f("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: x(["rounded p-2 w-full", n]),
                }),
                f("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: x(["rounded p-2 w-full mt-3", n]),
                }),
                f("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: x(["rounded p-2 w-full mt-3", n]),
                }),
                f(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
                    onClick: s,
                    class: x([
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
  Yg = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  Xg = ["href"],
  Jg = { class: "hidden md:hidden lg:block" },
  Zg = ["href"],
  Qg = ["src", "alt"],
  em = ["src", "alt"],
  tm = { class: "block md:block lg:hidden py-6" },
  nm = { class: "grid grid-cols-2 gap-4" },
  sm = ["src", "alt"],
  lm = { class: "flex justify-center pt-6" },
  im = {
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
        n = [Wg, Vg, Gg],
        s = e,
        l = V(""),
        i = V(""),
        a = V([]),
        r = (u) => {
          if (u >= 4) return "text-slate-800"
          if (u == 3) return "text-slate-200"
          if (u == 2) return "text-slate-300"
          if (u == 1) return "text-slate-300"
        },
        o = () => {
          const u = document.getElementById("lightbox"),
            d = document.getElementById("lightbox-img"),
            p = document.getElementById("lightbox-close"),
            h = document.querySelectorAll(".lightbox"),
            m = document.getElementById("lightbox-caption")
          h.forEach((b) => {
            b.addEventListener("click", () => {
              ;(d.src = b.src),
                (m.textContent = b.alt),
                u.classList.remove("hidden")
            })
          }),
            p.addEventListener("click", () => {
              u.classList.add("hidden")
            })
        }
      We(() => {
        ;(t.value = s.captions),
          (l.value = s.link),
          (i.value = s.title),
          (a.value = s.images),
          hl(() => {
            o()
          })
      })
      const c = (u) => {
        let d = l.value == "" ? "text-center w-full " : ""
        return (d = d + r(u)), d
      }
      return (u, d) => (
        L(),
        K(
          "div",
          {
            class: x([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              l.value == "",
            ]),
          },
          [
            f("div", Yg, [
              f(
                "h2",
                {
                  class: x([
                    "text-5xl text-center text-semibold",
                    c(s.brightness),
                  ]),
                },
                Je(i.value),
                3,
              ),
              l.value != ""
                ? (L(),
                  K(
                    "a",
                    { key: 0, href: l.value },
                    [
                      f(
                        "button",
                        {
                          class: x([
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
                    Xg,
                  ))
                : ke("", !0),
            ]),
            f("div", Jg, [
              q(
                Z(Fg),
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
                  default: ae(() => [
                    (L(!0),
                    K(
                      Pe,
                      null,
                      Wt(
                        a.value,
                        (p, h) => (
                          L(),
                          ge(
                            Z(Hg),
                            { class: "image-container", key: h },
                            {
                              default: ae(() => [
                                l.value != ""
                                  ? (L(),
                                    K(
                                      "a",
                                      { key: 0, href: l.value },
                                      [
                                        f(
                                          "img",
                                          {
                                            src: p,
                                            alt: t.value[h],
                                            class:
                                              "bg-slate-200 object-contain w-full rounded-xl",
                                          },
                                          null,
                                          8,
                                          Qg,
                                        ),
                                      ],
                                      8,
                                      Zg,
                                    ))
                                  : ke("", !0),
                                l.value == ""
                                  ? (L(),
                                    K(
                                      "img",
                                      {
                                        key: 1,
                                        src: p,
                                        alt: t.value[h],
                                        class:
                                          "bg-slate-200 object-contain w-full rounded-xl",
                                      },
                                      null,
                                      8,
                                      em,
                                    ))
                                  : ke("", !0),
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
              (d[0] = Nd(
                '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-4d27a375><div class="bg-white p-5 rounded shadow-lg" data-v-4d27a375><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-4d27a375><div class="flex justify-center" data-v-4d27a375><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-4d27a375></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-4d27a375> × </button></div></div>',
                1,
              )),
            f("div", tm, [
              f("div", nm, [
                (L(!0),
                K(
                  Pe,
                  null,
                  Wt(
                    a.value,
                    (p, h) => (
                      L(),
                      K("div", { class: "image-container", key: h }, [
                        f(
                          "img",
                          {
                            src: p,
                            alt: t.value[h],
                            class:
                              "bg-slate-200 object-contain w-full rounded lightbox",
                          },
                          null,
                          8,
                          sm,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            f(
              "div",
              { class: x([c(s.brightness), "prose pt-6"]) },
              [it(u.$slots, "default", {}, void 0, !0)],
              2,
            ),
            f(
              "hr",
              {
                class: x([
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
            f("div", lm, [
              q(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  pt = Zt(im, [["__scopeId", "data-v-4d27a375"]]),
  ir =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  rr =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  ar =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  or =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  ur =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  cr =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  dr =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  fr =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  pr =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  hr =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  rm =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  am =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  om =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  um =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  cm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898383454.webp",
  dm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  fm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  pm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  hm = "",
  gm = "",
  mm = { class: "px-3 text-center" },
  bm = { class: "text-right italic text-sm mb-0 pb-0" },
  vm = "",
  ym = "Web Design",
  xm = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (l) => {
          if (l >= 4) return "text-slate-800"
          if (l == 3) return "text-slate-200"
          if (l == 2) return "text-slate-300"
          if (l == 1) return "text-slate-300"
        },
        n = V([ir, cr, pr, or, ar, fr, dr, ur, rr, hr]),
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
      return (l, i) => (
        L(),
        ge(
          pt,
          {
            images: n.value,
            captions: s.value,
            link: vm,
            title: ym,
            brightness: e.brightness,
          },
          {
            default: ae(() => [
              it(l.$slots, "default", {}, () => [
                f(
                  "h2",
                  { class: x(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. I'll design yours too! ",
                  2,
                ),
                f("div", mm, [
                  i[2] ||
                    (i[2] = f(
                      "p",
                      null,
                      " Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. ",
                      -1,
                    )),
                  i[3] ||
                    (i[3] = f(
                      "p",
                      null,
                      " Don't just take my word for it though, here's what a UX professional has to say: ",
                      -1,
                    )),
                  f(
                    "div",
                    {
                      class: x([
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
                      i[0] ||
                        (i[0] = f(
                          "p",
                          null,
                          " Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just did it. He is incredible. ...I would recommend him to anyone with utmost confidence that he will surpass all expectations. ",
                          -1,
                        )),
                      f("p", bm, [
                        f("b", null, [
                          f(
                            "a",
                            {
                              class: x([t(e.brightness), "font-bold"]),
                              href: "https://www.linkedin.com/in/nathanwesjones/",
                            },
                            "Nathan Jones",
                            2,
                          ),
                        ]),
                      ]),
                      i[1] ||
                        (i[1] = f(
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
  wm = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  Sm = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  Cm = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Em = { href: "https://galaxyit.com/savings-calculator/" },
  Tm = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  km = { href: "https://www.buildonyourlandllc.com/" },
  Pm = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Im = { href: "https://bazaar.blendernation.com" },
  $m = {
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
        L(),
        K("div", wm, [
          f("div", Sm, [
            f(
              "h2",
              { class: x(["text-3xl mb-1", t(e.brightness)]) },
              " Need a custom pricing calculator? ",
              2,
            ),
            s[0] ||
              (s[0] = f(
                "div",
                { class: "image-container" },
                [
                  f("img", {
                    src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706989687978.webp",
                    alt: "Screenshot of GalaxyIT Pricing Calculator",
                    class: "bg-slate-200 object-contain w-full rounded-xl",
                  }),
                ],
                -1,
              )),
            f("div", Cm, [
              f(
                "h3",
                { class: x(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT ",
                2,
              ),
              f("a", Em, [
                f(
                  "button",
                  {
                    class: x([
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
            f(
              "h2",
              { class: x(["text-3xl mb-1", t(e.brightness)]) },
              " What about dynamic hours? ",
              2,
            ),
            s[1] ||
              (s[1] = f(
                "div",
                { class: "image-container" },
                [
                  f("img", {
                    src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706990008524.webp",
                    alt: "Screenshot of Build on Your Land dynamic showroom hours",
                    class: "bg-slate-200 object-contain w-full rounded-xl",
                  }),
                ],
                -1,
              )),
            f("div", Tm, [
              f(
                "h3",
                { class: x(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that ",
                2,
              ),
              f("a", km, [
                f(
                  "button",
                  {
                    class: x([
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
            f(
              "h2",
              { class: x(["text-3xl mb-1", t(e.brightness)]) },
              " Maybe you need a complex WordPress theme built from scratch? ",
              2,
            ),
            s[2] ||
              (s[2] = f(
                "div",
                { class: "image-container" },
                [
                  f("img", {
                    src: "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
                    alt: "Screenshot of BlenderNation Bazaar",
                    class: "bg-slate-200 object-contain w-full rounded-xl",
                  }),
                ],
                -1,
              )),
            f("div", Pm, [
              f(
                "h3",
                { class: x(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              f("a", Im, [
                f(
                  "button",
                  {
                    class: x([
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
            f(
              "h2",
              { class: x(["text-5xl mb-1", t(e.brightness)]) },
              " No matter how complex your problem may be, I can fix it. ",
              2,
            ),
            f(
              "p",
              { class: x([t(e.brightness), "mt-2"]) },
              " I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff distracting you from your business. I'll take your problems off your plate and develop a solution. ",
              2,
            ),
          ]),
          f("hr", { class: x([t(e.brightness), "my-8"]) }, null, 2),
          q(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  Mm = Zt($m, [["__scopeId", "data-v-c1141d27"]]),
  Fn = (e, t = 0, n = 1) => mr(br(t, e), n),
  gr = (e) => {
    ;(e._clipped = !1), (e._unclipped = e.slice(0))
    for (let t = 0; t <= 3; t++)
      t < 3
        ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0),
          (e[t] = Fn(e[t], 0, 255)))
        : t === 3 && (e[t] = Fn(e[t], 0, 1))
    return e
  },
  Au = {}
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
  Au[`[object ${e}]`] = e.toLowerCase()
function be(e) {
  return Au[Object.prototype.toString.call(e)] || "object"
}
const ve = (e, t = null) =>
    e.length >= 3
      ? Array.prototype.slice.call(e)
      : be(e[0]) == "object" && t
        ? t
            .split("")
            .filter((n) => e[0][n] !== void 0)
            .map((n) => e[0][n])
        : e[0],
  Cl = (e) => {
    if (e.length < 2) return null
    const t = e.length - 1
    return be(e[t]) == "string" ? e[t].toLowerCase() : null
  },
  { PI: El, min: mr, max: br } = Math,
  Ft = El * 2,
  Kl = El / 3,
  Am = El / 180,
  Om = 180 / El,
  fe = { format: {}, autodetect: [] }
class G {
  constructor(...t) {
    const n = this
    if (
      be(t[0]) === "object" &&
      t[0].constructor &&
      t[0].constructor === this.constructor
    )
      return t[0]
    let s = Cl(t),
      l = !1
    if (!s) {
      ;(l = !0),
        fe.sorted ||
          ((fe.autodetect = fe.autodetect.sort((i, a) => a.p - i.p)),
          (fe.sorted = !0))
      for (let i of fe.autodetect) if (((s = i.test(...t)), s)) break
    }
    if (fe.format[s]) {
      const i = fe.format[s].apply(null, l ? t : t.slice(0, -1))
      n._rgb = gr(i)
    } else throw new Error("unknown format: " + t)
    n._rgb.length === 3 && n._rgb.push(1)
  }
  toString() {
    return be(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`
  }
}
const Lm = "2.6.0",
  re = (...e) => new re.Color(...e)
re.Color = G
re.version = Lm
const jm = (...e) => {
    e = ve(e, "cmyk")
    const [t, n, s, l] = e,
      i = e.length > 4 ? e[4] : 1
    return l === 1
      ? [0, 0, 0, i]
      : [
          t >= 1 ? 0 : 255 * (1 - t) * (1 - l),
          n >= 1 ? 0 : 255 * (1 - n) * (1 - l),
          s >= 1 ? 0 : 255 * (1 - s) * (1 - l),
          i,
        ]
  },
  { max: Ia } = Math,
  Bm = (...e) => {
    let [t, n, s] = ve(e, "rgb")
    ;(t = t / 255), (n = n / 255), (s = s / 255)
    const l = 1 - Ia(t, Ia(n, s)),
      i = l < 1 ? 1 / (1 - l) : 0,
      a = (1 - t - l) * i,
      r = (1 - n - l) * i,
      o = (1 - s - l) * i
    return [a, r, o, l]
  }
G.prototype.cmyk = function () {
  return Bm(this._rgb)
}
re.cmyk = (...e) => new G(...e, "cmyk")
fe.format.cmyk = jm
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ve(e, "cmyk")), be(e) === "array" && e.length === 4))
      return "cmyk"
  },
})
const Yl = (e) => Math.round(e * 100) / 100,
  Rm = (...e) => {
    const t = ve(e, "hsla")
    let n = Cl(e) || "lsa"
    return (
      (t[0] = Yl(t[0] || 0)),
      (t[1] = Yl(t[1] * 100) + "%"),
      (t[2] = Yl(t[2] * 100) + "%"),
      n === "hsla" || (t.length > 3 && t[3] < 1)
        ? ((t[3] = t.length > 3 ? t[3] : 1), (n = "hsla"))
        : (t.length = 3),
      `${n}(${t.join(",")})`
    )
  },
  Ou = (...e) => {
    e = ve(e, "rgba")
    let [t, n, s] = e
    ;(t /= 255), (n /= 255), (s /= 255)
    const l = mr(t, n, s),
      i = br(t, n, s),
      a = (i + l) / 2
    let r, o
    return (
      i === l
        ? ((r = 0), (o = Number.NaN))
        : (r = a < 0.5 ? (i - l) / (i + l) : (i - l) / (2 - i - l)),
      t == i
        ? (o = (n - s) / (i - l))
        : n == i
          ? (o = 2 + (s - t) / (i - l))
          : s == i && (o = 4 + (t - n) / (i - l)),
      (o *= 60),
      o < 0 && (o += 360),
      e.length > 3 && e[3] !== void 0 ? [o, r, a, e[3]] : [o, r, a]
    )
  },
  { round: Xl } = Math,
  Nm = (...e) => {
    const t = ve(e, "rgba")
    let n = Cl(e) || "rgb"
    return n.substr(0, 3) == "hsl"
      ? Rm(Ou(t), n)
      : ((t[0] = Xl(t[0])),
        (t[1] = Xl(t[1])),
        (t[2] = Xl(t[2])),
        (n === "rgba" || (t.length > 3 && t[3] < 1)) &&
          ((t[3] = t.length > 3 ? t[3] : 1), (n = "rgba")),
        `${n}(${t.slice(0, n === "rgb" ? 3 : 4).join(",")})`)
  },
  { round: Jl } = Math,
  Mi = (...e) => {
    e = ve(e, "hsl")
    const [t, n, s] = e
    let l, i, a
    if (n === 0) l = i = a = s * 255
    else {
      const r = [0, 0, 0],
        o = [0, 0, 0],
        c = s < 0.5 ? s * (1 + n) : s + n - s * n,
        u = 2 * s - c,
        d = t / 360
      ;(r[0] = d + 1 / 3), (r[1] = d), (r[2] = d - 1 / 3)
      for (let p = 0; p < 3; p++)
        r[p] < 0 && (r[p] += 1),
          r[p] > 1 && (r[p] -= 1),
          6 * r[p] < 1
            ? (o[p] = u + (c - u) * 6 * r[p])
            : 2 * r[p] < 1
              ? (o[p] = c)
              : 3 * r[p] < 2
                ? (o[p] = u + (c - u) * (2 / 3 - r[p]) * 6)
                : (o[p] = u)
      ;[l, i, a] = [Jl(o[0] * 255), Jl(o[1] * 255), Jl(o[2] * 255)]
    }
    return e.length > 3 ? [l, i, a, e[3]] : [l, i, a, 1]
  },
  Lu = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
  ju = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
  Bu =
    /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  Ru =
    /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  Nu =
    /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  zu =
    /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  { round: $a } = Math,
  vr = (e) => {
    e = e.toLowerCase().trim()
    let t
    if (fe.format.named)
      try {
        return fe.format.named(e)
      } catch {}
    if ((t = e.match(Lu))) {
      const n = t.slice(1, 4)
      for (let s = 0; s < 3; s++) n[s] = +n[s]
      return (n[3] = 1), n
    }
    if ((t = e.match(ju))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 4; s++) n[s] = +n[s]
      return n
    }
    if ((t = e.match(Bu))) {
      const n = t.slice(1, 4)
      for (let s = 0; s < 3; s++) n[s] = $a(n[s] * 2.55)
      return (n[3] = 1), n
    }
    if ((t = e.match(Ru))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 3; s++) n[s] = $a(n[s] * 2.55)
      return (n[3] = +n[3]), n
    }
    if ((t = e.match(Nu))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Mi(n)
      return (s[3] = 1), s
    }
    if ((t = e.match(zu))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Mi(n)
      return (s[3] = +t[4]), s
    }
  }
vr.test = (e) =>
  Lu.test(e) ||
  ju.test(e) ||
  Bu.test(e) ||
  Ru.test(e) ||
  Nu.test(e) ||
  zu.test(e)
G.prototype.css = function (e) {
  return Nm(this._rgb, e)
}
re.css = (...e) => new G(...e, "css")
fe.format.css = vr
fe.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && be(e) === "string" && vr.test(e)) return "css"
  },
})
fe.format.gl = (...e) => {
  const t = ve(e, "rgba")
  return (t[0] *= 255), (t[1] *= 255), (t[2] *= 255), t
}
re.gl = (...e) => new G(...e, "gl")
G.prototype.gl = function () {
  const e = this._rgb
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
}
const { floor: zm } = Math,
  _m = (...e) => {
    e = ve(e, "hcg")
    let [t, n, s] = e,
      l,
      i,
      a
    s = s * 255
    const r = n * 255
    if (n === 0) l = i = a = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const o = zm(t),
        c = t - o,
        u = s * (1 - n),
        d = u + r * (1 - c),
        p = u + r * c,
        h = u + r
      switch (o) {
        case 0:
          ;[l, i, a] = [h, p, u]
          break
        case 1:
          ;[l, i, a] = [d, h, u]
          break
        case 2:
          ;[l, i, a] = [u, h, p]
          break
        case 3:
          ;[l, i, a] = [u, d, h]
          break
        case 4:
          ;[l, i, a] = [p, u, h]
          break
        case 5:
          ;[l, i, a] = [h, u, d]
          break
      }
    }
    return [l, i, a, e.length > 3 ? e[3] : 1]
  },
  Dm = (...e) => {
    const [t, n, s] = ve(e, "rgb"),
      l = mr(t, n, s),
      i = br(t, n, s),
      a = i - l,
      r = (a * 100) / 255,
      o = (l / (255 - a)) * 100
    let c
    return (
      a === 0
        ? (c = Number.NaN)
        : (t === i && (c = (n - s) / a),
          n === i && (c = 2 + (s - t) / a),
          s === i && (c = 4 + (t - n) / a),
          (c *= 60),
          c < 0 && (c += 360)),
      [c, r, o]
    )
  }
G.prototype.hcg = function () {
  return Dm(this._rgb)
}
re.hcg = (...e) => new G(...e, "hcg")
fe.format.hcg = _m
fe.autodetect.push({
  p: 1,
  test: (...e) => {
    if (((e = ve(e, "hcg")), be(e) === "array" && e.length === 3)) return "hcg"
  },
})
const Fm = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  Hm = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
  _u = (e) => {
    if (e.match(Fm)) {
      ;(e.length === 4 || e.length === 7) && (e = e.substr(1)),
        e.length === 3 &&
          ((e = e.split("")), (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]))
      const t = parseInt(e, 16),
        n = t >> 16,
        s = (t >> 8) & 255,
        l = t & 255
      return [n, s, l, 1]
    }
    if (e.match(Hm)) {
      ;(e.length === 5 || e.length === 9) && (e = e.substr(1)),
        e.length === 4 &&
          ((e = e.split("")),
          (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]))
      const t = parseInt(e, 16),
        n = (t >> 24) & 255,
        s = (t >> 16) & 255,
        l = (t >> 8) & 255,
        i = Math.round(((t & 255) / 255) * 100) / 100
      return [n, s, l, i]
    }
    throw new Error(`unknown hex color: ${e}`)
  },
  { round: Bs } = Math,
  Du = (...e) => {
    let [t, n, s, l] = ve(e, "rgba"),
      i = Cl(e) || "auto"
    l === void 0 && (l = 1),
      i === "auto" && (i = l < 1 ? "rgba" : "rgb"),
      (t = Bs(t)),
      (n = Bs(n)),
      (s = Bs(s))
    let r = "000000" + ((t << 16) | (n << 8) | s).toString(16)
    r = r.substr(r.length - 6)
    let o = "0" + Bs(l * 255).toString(16)
    switch (((o = o.substr(o.length - 2)), i.toLowerCase())) {
      case "rgba":
        return `#${r}${o}`
      case "argb":
        return `#${o}${r}`
      default:
        return `#${r}`
    }
  }
G.prototype.hex = function (e) {
  return Du(this._rgb, e)
}
re.hex = (...e) => new G(...e, "hex")
fe.format.hex = _u
fe.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (
      !t.length &&
      be(e) === "string" &&
      [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
    )
      return "hex"
  },
})
const { cos: In } = Math,
  Gm = (...e) => {
    e = ve(e, "hsi")
    let [t, n, s] = e,
      l,
      i,
      a
    return (
      isNaN(t) && (t = 0),
      isNaN(n) && (n = 0),
      t > 360 && (t -= 360),
      t < 0 && (t += 360),
      (t /= 360),
      t < 1 / 3
        ? ((a = (1 - n) / 3),
          (l = (1 + (n * In(Ft * t)) / In(Kl - Ft * t)) / 3),
          (i = 1 - (a + l)))
        : t < 2 / 3
          ? ((t -= 1 / 3),
            (l = (1 - n) / 3),
            (i = (1 + (n * In(Ft * t)) / In(Kl - Ft * t)) / 3),
            (a = 1 - (l + i)))
          : ((t -= 2 / 3),
            (i = (1 - n) / 3),
            (a = (1 + (n * In(Ft * t)) / In(Kl - Ft * t)) / 3),
            (l = 1 - (i + a))),
      (l = Fn(s * l * 3)),
      (i = Fn(s * i * 3)),
      (a = Fn(s * a * 3)),
      [l * 255, i * 255, a * 255, e.length > 3 ? e[3] : 1]
    )
  },
  { min: Vm, sqrt: Wm, acos: qm } = Math,
  Um = (...e) => {
    let [t, n, s] = ve(e, "rgb")
    ;(t /= 255), (n /= 255), (s /= 255)
    let l
    const i = Vm(t, n, s),
      a = (t + n + s) / 3,
      r = a > 0 ? 1 - i / a : 0
    return (
      r === 0
        ? (l = NaN)
        : ((l = (t - n + (t - s)) / 2),
          (l /= Wm((t - n) * (t - n) + (t - s) * (n - s))),
          (l = qm(l)),
          s > n && (l = Ft - l),
          (l /= Ft)),
      [l * 360, r, a]
    )
  }
G.prototype.hsi = function () {
  return Um(this._rgb)
}
re.hsi = (...e) => new G(...e, "hsi")
fe.format.hsi = Gm
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ve(e, "hsi")), be(e) === "array" && e.length === 3)) return "hsi"
  },
})
G.prototype.hsl = function () {
  return Ou(this._rgb)
}
re.hsl = (...e) => new G(...e, "hsl")
fe.format.hsl = Mi
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ve(e, "hsl")), be(e) === "array" && e.length === 3)) return "hsl"
  },
})
const { floor: Km } = Math,
  Ym = (...e) => {
    e = ve(e, "hsv")
    let [t, n, s] = e,
      l,
      i,
      a
    if (((s *= 255), n === 0)) l = i = a = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const r = Km(t),
        o = t - r,
        c = s * (1 - n),
        u = s * (1 - n * o),
        d = s * (1 - n * (1 - o))
      switch (r) {
        case 0:
          ;[l, i, a] = [s, d, c]
          break
        case 1:
          ;[l, i, a] = [u, s, c]
          break
        case 2:
          ;[l, i, a] = [c, s, d]
          break
        case 3:
          ;[l, i, a] = [c, u, s]
          break
        case 4:
          ;[l, i, a] = [d, c, s]
          break
        case 5:
          ;[l, i, a] = [s, c, u]
          break
      }
    }
    return [l, i, a, e.length > 3 ? e[3] : 1]
  },
  { min: Xm, max: Jm } = Math,
  Zm = (...e) => {
    e = ve(e, "rgb")
    let [t, n, s] = e
    const l = Xm(t, n, s),
      i = Jm(t, n, s),
      a = i - l
    let r, o, c
    return (
      (c = i / 255),
      i === 0
        ? ((r = Number.NaN), (o = 0))
        : ((o = a / i),
          t === i && (r = (n - s) / a),
          n === i && (r = 2 + (s - t) / a),
          s === i && (r = 4 + (t - n) / a),
          (r *= 60),
          r < 0 && (r += 360)),
      [r, o, c]
    )
  }
G.prototype.hsv = function () {
  return Zm(this._rgb)
}
re.hsv = (...e) => new G(...e, "hsv")
fe.format.hsv = Ym
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ve(e, "hsv")), be(e) === "array" && e.length === 3)) return "hsv"
  },
})
const lt = {
    Kn: 18,
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452,
  },
  { pow: Qm } = Math,
  Fu = (...e) => {
    e = ve(e, "lab")
    const [t, n, s] = e
    let l, i, a, r, o, c
    return (
      (i = (t + 16) / 116),
      (l = isNaN(n) ? i : i + n / 500),
      (a = isNaN(s) ? i : i - s / 200),
      (i = lt.Yn * Ql(i)),
      (l = lt.Xn * Ql(l)),
      (a = lt.Zn * Ql(a)),
      (r = Zl(3.2404542 * l - 1.5371385 * i - 0.4985314 * a)),
      (o = Zl(-0.969266 * l + 1.8760108 * i + 0.041556 * a)),
      (c = Zl(0.0556434 * l - 0.2040259 * i + 1.0572252 * a)),
      [r, o, c, e.length > 3 ? e[3] : 1]
    )
  },
  Zl = (e) => 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * Qm(e, 1 / 2.4) - 0.055),
  Ql = (e) => (e > lt.t1 ? e * e * e : lt.t2 * (e - lt.t0)),
  { pow: Hu } = Math,
  Gu = (...e) => {
    const [t, n, s] = ve(e, "rgb"),
      [l, i, a] = e1(t, n, s),
      r = 116 * i - 16
    return [r < 0 ? 0 : r, 500 * (l - i), 200 * (i - a)]
  },
  ei = (e) =>
    (e /= 255) <= 0.04045 ? e / 12.92 : Hu((e + 0.055) / 1.055, 2.4),
  ti = (e) => (e > lt.t3 ? Hu(e, 1 / 3) : e / lt.t2 + lt.t0),
  e1 = (e, t, n) => {
    ;(e = ei(e)), (t = ei(t)), (n = ei(n))
    const s = ti((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / lt.Xn),
      l = ti((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / lt.Yn),
      i = ti((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / lt.Zn)
    return [s, l, i]
  }
G.prototype.lab = function () {
  return Gu(this._rgb)
}
re.lab = (...e) => new G(...e, "lab")
fe.format.lab = Fu
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = ve(e, "lab")), be(e) === "array" && e.length === 3)) return "lab"
  },
})
const { sin: t1, cos: n1 } = Math,
  Vu = (...e) => {
    let [t, n, s] = ve(e, "lch")
    return isNaN(s) && (s = 0), (s = s * Am), [t, n1(s) * n, t1(s) * n]
  },
  Wu = (...e) => {
    e = ve(e, "lch")
    const [t, n, s] = e,
      [l, i, a] = Vu(t, n, s),
      [r, o, c] = Fu(l, i, a)
    return [r, o, c, e.length > 3 ? e[3] : 1]
  },
  s1 = (...e) => {
    const t = ve(e, "hcl").reverse()
    return Wu(...t)
  },
  { sqrt: l1, atan2: i1, round: r1 } = Math,
  qu = (...e) => {
    const [t, n, s] = ve(e, "lab"),
      l = l1(n * n + s * s)
    let i = (i1(s, n) * Om + 360) % 360
    return r1(l * 1e4) === 0 && (i = Number.NaN), [t, l, i]
  },
  Uu = (...e) => {
    const [t, n, s] = ve(e, "rgb"),
      [l, i, a] = Gu(t, n, s)
    return qu(l, i, a)
  }
G.prototype.lch = function () {
  return Uu(this._rgb)
}
G.prototype.hcl = function () {
  return Uu(this._rgb).reverse()
}
re.lch = (...e) => new G(...e, "lch")
re.hcl = (...e) => new G(...e, "hcl")
fe.format.lch = Wu
fe.format.hcl = s1
;["lch", "hcl"].forEach((e) =>
  fe.autodetect.push({
    p: 2,
    test: (...t) => {
      if (((t = ve(t, e)), be(t) === "array" && t.length === 3)) return e
    },
  }),
)
const qn = {
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
  const e = Du(this._rgb, "rgb")
  for (let t of Object.keys(qn)) if (qn[t] === e) return t.toLowerCase()
  return e
}
fe.format.named = (e) => {
  if (((e = e.toLowerCase()), qn[e])) return _u(qn[e])
  throw new Error("unknown color name: " + e)
}
fe.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && be(e) === "string" && qn[e.toLowerCase()]) return "named"
  },
})
const a1 = (e) => {
    if (be(e) == "number" && e >= 0 && e <= 16777215) {
      const t = e >> 16,
        n = (e >> 8) & 255,
        s = e & 255
      return [t, n, s, 1]
    }
    throw new Error("unknown num color: " + e)
  },
  o1 = (...e) => {
    const [t, n, s] = ve(e, "rgb")
    return (t << 16) + (n << 8) + s
  }
G.prototype.num = function () {
  return o1(this._rgb)
}
re.num = (...e) => new G(...e, "num")
fe.format.num = a1
fe.autodetect.push({
  p: 5,
  test: (...e) => {
    if (
      e.length === 1 &&
      be(e[0]) === "number" &&
      e[0] >= 0 &&
      e[0] <= 16777215
    )
      return "num"
  },
})
const { round: Ku } = Math
G.prototype.rgb = function (e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ku)
}
G.prototype.rgba = function (e = !0) {
  return this._rgb
    .slice(0, 4)
    .map((t, n) => (n < 3 ? (e === !1 ? t : Ku(t)) : t))
}
re.rgb = (...e) => new G(...e, "rgb")
fe.format.rgb = (...e) => {
  const t = ve(e, "rgba")
  return t[3] === void 0 && (t[3] = 1), t
}
fe.autodetect.push({
  p: 3,
  test: (...e) => {
    if (
      ((e = ve(e, "rgba")),
      be(e) === "array" &&
        (e.length === 3 ||
          (e.length === 4 && be(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)))
    )
      return "rgb"
  },
})
const { log: Rs } = Math,
  Yu = (e) => {
    const t = e / 100
    let n, s, l
    return (
      t < 66
        ? ((n = 255),
          (s =
            t < 6
              ? 0
              : -155.25485562709179 -
                0.44596950469579133 * (s = t - 2) +
                104.49216199393888 * Rs(s)),
          (l =
            t < 20
              ? 0
              : -254.76935184120902 +
                0.8274096064007395 * (l = t - 10) +
                115.67994401066147 * Rs(l)))
        : ((n =
            351.97690566805693 +
            0.114206453784165 * (n = t - 55) -
            40.25366309332127 * Rs(n)),
          (s =
            325.4494125711974 +
            0.07943456536662342 * (s = t - 50) -
            28.0852963507957 * Rs(s)),
          (l = 255)),
      [n, s, l, 1]
    )
  },
  { round: u1 } = Math,
  c1 = (...e) => {
    const t = ve(e, "rgb"),
      n = t[0],
      s = t[2]
    let l = 1e3,
      i = 4e4
    const a = 0.4
    let r
    for (; i - l > a; ) {
      r = (i + l) * 0.5
      const o = Yu(r)
      o[2] / o[0] >= s / n ? (i = r) : (l = r)
    }
    return u1(r)
  }
G.prototype.temp =
  G.prototype.kelvin =
  G.prototype.temperature =
    function () {
      return c1(this._rgb)
    }
re.temp = re.kelvin = re.temperature = (...e) => new G(...e, "temp")
fe.format.temp = fe.format.kelvin = fe.format.temperature = Yu
const { pow: Vs, sign: d1 } = Math,
  Xu = (...e) => {
    e = ve(e, "lab")
    const [t, n, s] = e,
      l = Vs(t + 0.3963377774 * n + 0.2158037573 * s, 3),
      i = Vs(t - 0.1055613458 * n - 0.0638541728 * s, 3),
      a = Vs(t - 0.0894841775 * n - 1.291485548 * s, 3)
    return [
      255 * ni(4.0767416621 * l - 3.3077115913 * i + 0.2309699292 * a),
      255 * ni(-1.2684380046 * l + 2.6097574011 * i - 0.3413193965 * a),
      255 * ni(-0.0041960863 * l - 0.7034186147 * i + 1.707614701 * a),
      e.length > 3 ? e[3] : 1,
    ]
  }
function ni(e) {
  const t = Math.abs(e)
  return t > 0.0031308
    ? (d1(e) || 1) * (1.055 * Vs(t, 1 / 2.4) - 0.055)
    : e * 12.92
}
const { cbrt: si, pow: f1, sign: p1 } = Math,
  Ju = (...e) => {
    const [t, n, s] = ve(e, "rgb"),
      [l, i, a] = [li(t / 255), li(n / 255), li(s / 255)],
      r = si(0.4122214708 * l + 0.5363325363 * i + 0.0514459929 * a),
      o = si(0.2119034982 * l + 0.6806995451 * i + 0.1073969566 * a),
      c = si(0.0883024619 * l + 0.2817188376 * i + 0.6299787005 * a)
    return [
      0.2104542553 * r + 0.793617785 * o - 0.0040720468 * c,
      1.9779984951 * r - 2.428592205 * o + 0.4505937099 * c,
      0.0259040371 * r + 0.7827717662 * o - 0.808675766 * c,
    ]
  }
function li(e) {
  const t = Math.abs(e)
  return t < 0.04045 ? e / 12.92 : (p1(e) || 1) * f1((t + 0.055) / 1.055, 2.4)
}
G.prototype.oklab = function () {
  return Ju(this._rgb)
}
re.oklab = (...e) => new G(...e, "oklab")
fe.format.oklab = Xu
fe.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = ve(e, "oklab")), be(e) === "array" && e.length === 3))
      return "oklab"
  },
})
const h1 = (...e) => {
    e = ve(e, "lch")
    const [t, n, s] = e,
      [l, i, a] = Vu(t, n, s),
      [r, o, c] = Xu(l, i, a)
    return [r, o, c, e.length > 3 ? e[3] : 1]
  },
  g1 = (...e) => {
    const [t, n, s] = ve(e, "rgb"),
      [l, i, a] = Ju(t, n, s)
    return qu(l, i, a)
  }
G.prototype.oklch = function () {
  return g1(this._rgb)
}
re.oklch = (...e) => new G(...e, "oklch")
fe.format.oklch = h1
fe.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = ve(e, "oklch")), be(e) === "array" && e.length === 3))
      return "oklch"
  },
})
G.prototype.alpha = function (e, t = !1) {
  return e !== void 0 && be(e) === "number"
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
  return (n[0] -= lt.Kn * e), new G(n, "lab").alpha(t.alpha(), !0)
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
    const l = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0)
    if (l > -1) return s[l]
    throw new Error(`unknown channel ${n} in mode ${t}`)
  } else return s
}
const { pow: m1 } = Math,
  b1 = 1e-7,
  v1 = 20
G.prototype.luminance = function (e, t = "rgb") {
  if (e !== void 0 && be(e) === "number") {
    if (e === 0) return new G([0, 0, 0, this._rgb[3]], "rgb")
    if (e === 1) return new G([255, 255, 255, this._rgb[3]], "rgb")
    let n = this.luminance(),
      s = v1
    const l = (a, r) => {
        const o = a.interpolate(r, 0.5, t),
          c = o.luminance()
        return Math.abs(e - c) < b1 || !s-- ? o : c > e ? l(a, o) : l(o, r)
      },
      i = (
        n > e ? l(new G([0, 0, 0]), this) : l(this, new G([255, 255, 255]))
      ).rgb()
    return new G([...i, this._rgb[3]])
  }
  return y1(...this._rgb.slice(0, 3))
}
const y1 = (e, t, n) => (
    (e = ii(e)), (t = ii(t)), (n = ii(n)), 0.2126 * e + 0.7152 * t + 0.0722 * n
  ),
  ii = (e) => (
    (e /= 255), e <= 0.03928 ? e / 12.92 : m1((e + 0.055) / 1.055, 2.4)
  ),
  Ke = {},
  ws = (e, t, n = 0.5, ...s) => {
    let l = s[0] || "lrgb"
    if ((!Ke[l] && !s.length && (l = Object.keys(Ke)[0]), !Ke[l]))
      throw new Error(`interpolation mode ${l} is not defined`)
    return (
      be(e) !== "object" && (e = new G(e)),
      be(t) !== "object" && (t = new G(t)),
      Ke[l](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
    )
  }
G.prototype.mix = G.prototype.interpolate = function (e, t = 0.5, ...n) {
  return ws(this, e, t, ...n)
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
    (n[1] += lt.Kn * e),
    n[1] < 0 && (n[1] = 0),
    new G(n, "lch").alpha(t.alpha(), !0)
  )
}
G.prototype.desaturate = function (e = 1) {
  return this.saturate(-e)
}
G.prototype.set = function (e, t, n = !1) {
  const [s, l] = e.split("."),
    i = this[s]()
  if (l) {
    const a = s.indexOf(l) - (s.substr(0, 2) === "ok" ? 2 : 0)
    if (a > -1) {
      if (be(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            i[a] += +t
            break
          case "-":
            i[a] += +t
            break
          case "*":
            i[a] *= +t.substr(1)
            break
          case "/":
            i[a] /= +t.substr(1)
            break
          default:
            i[a] = +t
        }
      else if (be(t) === "number") i[a] = t
      else throw new Error("unsupported value for Color.set")
      const r = new G(i, s)
      return n ? ((this._rgb = r._rgb), this) : r
    }
    throw new Error(`unknown channel ${l} in mode ${s}`)
  } else return i
}
G.prototype.tint = function (e = 0.5, ...t) {
  return ws(this, "white", e, ...t)
}
G.prototype.shade = function (e = 0.5, ...t) {
  return ws(this, "black", e, ...t)
}
const x1 = (e, t, n) => {
  const s = e._rgb,
    l = t._rgb
  return new G(
    s[0] + n * (l[0] - s[0]),
    s[1] + n * (l[1] - s[1]),
    s[2] + n * (l[2] - s[2]),
    "rgb",
  )
}
Ke.rgb = x1
const { sqrt: ri, pow: $n } = Math,
  w1 = (e, t, n) => {
    const [s, l, i] = e._rgb,
      [a, r, o] = t._rgb
    return new G(
      ri($n(s, 2) * (1 - n) + $n(a, 2) * n),
      ri($n(l, 2) * (1 - n) + $n(r, 2) * n),
      ri($n(i, 2) * (1 - n) + $n(o, 2) * n),
      "rgb",
    )
  }
Ke.lrgb = w1
const S1 = (e, t, n) => {
  const s = e.lab(),
    l = t.lab()
  return new G(
    s[0] + n * (l[0] - s[0]),
    s[1] + n * (l[1] - s[1]),
    s[2] + n * (l[2] - s[2]),
    "lab",
  )
}
Ke.lab = S1
const Kn = (e, t, n, s) => {
    let l, i
    s === "hsl"
      ? ((l = e.hsl()), (i = t.hsl()))
      : s === "hsv"
        ? ((l = e.hsv()), (i = t.hsv()))
        : s === "hcg"
          ? ((l = e.hcg()), (i = t.hcg()))
          : s === "hsi"
            ? ((l = e.hsi()), (i = t.hsi()))
            : s === "lch" || s === "hcl"
              ? ((s = "hcl"), (l = e.hcl()), (i = t.hcl()))
              : s === "oklch" &&
                ((l = e.oklch().reverse()), (i = t.oklch().reverse()))
    let a, r, o, c, u, d
    ;(s.substr(0, 1) === "h" || s === "oklch") &&
      (([a, o, u] = l), ([r, c, d] = i))
    let p, h, m, b
    return (
      !isNaN(a) && !isNaN(r)
        ? (r > a && r - a > 180
            ? (b = r - (a + 360))
            : r < a && a - r > 180
              ? (b = r + 360 - a)
              : (b = r - a),
          (h = a + n * b))
        : isNaN(a)
          ? isNaN(r)
            ? (h = Number.NaN)
            : ((h = r), (u == 1 || u == 0) && s != "hsv" && (p = c))
          : ((h = a), (d == 1 || d == 0) && s != "hsv" && (p = o)),
      p === void 0 && (p = o + n * (c - o)),
      (m = u + n * (d - u)),
      s === "oklch" ? new G([m, p, h], s) : new G([h, p, m], s)
    )
  },
  Zu = (e, t, n) => Kn(e, t, n, "lch")
Ke.lch = Zu
Ke.hcl = Zu
const C1 = (e, t, n) => {
  const s = e.num(),
    l = t.num()
  return new G(s + n * (l - s), "num")
}
Ke.num = C1
const E1 = (e, t, n) => Kn(e, t, n, "hcg")
Ke.hcg = E1
const T1 = (e, t, n) => Kn(e, t, n, "hsi")
Ke.hsi = T1
const k1 = (e, t, n) => Kn(e, t, n, "hsl")
Ke.hsl = k1
const P1 = (e, t, n) => Kn(e, t, n, "hsv")
Ke.hsv = P1
const I1 = (e, t, n) => {
  const s = e.oklab(),
    l = t.oklab()
  return new G(
    s[0] + n * (l[0] - s[0]),
    s[1] + n * (l[1] - s[1]),
    s[2] + n * (l[2] - s[2]),
    "oklab",
  )
}
Ke.oklab = I1
const $1 = (e, t, n) => Kn(e, t, n, "oklch")
Ke.oklch = $1
const { pow: ai, sqrt: oi, PI: ui, cos: Ma, sin: Aa, atan2: M1 } = Math,
  A1 = (e, t = "lrgb", n = null) => {
    const s = e.length
    n || (n = Array.from(new Array(s)).map(() => 1))
    const l =
      s /
      n.reduce(function (d, p) {
        return d + p
      })
    if (
      (n.forEach((d, p) => {
        n[p] *= l
      }),
      (e = e.map((d) => new G(d))),
      t === "lrgb")
    )
      return O1(e, n)
    const i = e.shift(),
      a = i.get(t),
      r = []
    let o = 0,
      c = 0
    for (let d = 0; d < a.length; d++)
      if (
        ((a[d] = (a[d] || 0) * n[0]),
        r.push(isNaN(a[d]) ? 0 : n[0]),
        t.charAt(d) === "h" && !isNaN(a[d]))
      ) {
        const p = (a[d] / 180) * ui
        ;(o += Ma(p) * n[0]), (c += Aa(p) * n[0])
      }
    let u = i.alpha() * n[0]
    e.forEach((d, p) => {
      const h = d.get(t)
      u += d.alpha() * n[p + 1]
      for (let m = 0; m < a.length; m++)
        if (!isNaN(h[m]))
          if (((r[m] += n[p + 1]), t.charAt(m) === "h")) {
            const b = (h[m] / 180) * ui
            ;(o += Ma(b) * n[p + 1]), (c += Aa(b) * n[p + 1])
          } else a[m] += h[m] * n[p + 1]
    })
    for (let d = 0; d < a.length; d++)
      if (t.charAt(d) === "h") {
        let p = (M1(c / r[d], o / r[d]) / ui) * 180
        for (; p < 0; ) p += 360
        for (; p >= 360; ) p -= 360
        a[d] = p
      } else a[d] = a[d] / r[d]
    return (u /= s), new G(a, t).alpha(u > 0.99999 ? 1 : u, !0)
  },
  O1 = (e, t) => {
    const n = e.length,
      s = [0, 0, 0, 0]
    for (let l = 0; l < e.length; l++) {
      const i = e[l],
        a = t[l] / n,
        r = i._rgb
      ;(s[0] += ai(r[0], 2) * a),
        (s[1] += ai(r[1], 2) * a),
        (s[2] += ai(r[2], 2) * a),
        (s[3] += r[3] * a)
    }
    return (
      (s[0] = oi(s[0])),
      (s[1] = oi(s[1])),
      (s[2] = oi(s[2])),
      s[3] > 0.9999999 && (s[3] = 1),
      new G(gr(s))
    )
  },
  { pow: L1 } = Math
function il(e) {
  let t = "rgb",
    n = re("#ccc"),
    s = 0,
    l = [0, 1],
    i = [],
    a = [0, 0],
    r = !1,
    o = [],
    c = !1,
    u = 0,
    d = 1,
    p = !1,
    h = {},
    m = !0,
    b = 1
  const k = function (E) {
      if (
        ((E = E || ["#fff", "#000"]),
        E &&
          be(E) === "string" &&
          re.brewer &&
          re.brewer[E.toLowerCase()] &&
          (E = re.brewer[E.toLowerCase()]),
        be(E) === "array")
      ) {
        E.length === 1 && (E = [E[0], E[0]]), (E = E.slice(0))
        for (let A = 0; A < E.length; A++) E[A] = re(E[A])
        i.length = 0
        for (let A = 0; A < E.length; A++) i.push(A / (E.length - 1))
      }
      return T(), (o = E)
    },
    w = function (E) {
      if (r != null) {
        const A = r.length - 1
        let I = 0
        for (; I < A && E >= r[I]; ) I++
        return I - 1
      }
      return 0
    }
  let g = (E) => E,
    v = (E) => E
  const S = function (E, A) {
    let I, $
    if ((A == null && (A = !1), isNaN(E) || E === null)) return n
    A
      ? ($ = E)
      : r && r.length > 2
        ? ($ = w(E) / (r.length - 2))
        : d !== u
          ? ($ = (E - u) / (d - u))
          : ($ = 1),
      ($ = v($)),
      A || ($ = g($)),
      b !== 1 && ($ = L1($, b)),
      ($ = a[0] + $ * (1 - a[0] - a[1])),
      ($ = Fn($, 0, 1))
    const j = Math.floor($ * 1e4)
    if (m && h[j]) I = h[j]
    else {
      if (be(o) === "array")
        for (let F = 0; F < i.length; F++) {
          const W = i[F]
          if ($ <= W) {
            I = o[F]
            break
          }
          if ($ >= W && F === i.length - 1) {
            I = o[F]
            break
          }
          if ($ > W && $ < i[F + 1]) {
            ;($ = ($ - W) / (i[F + 1] - W)),
              (I = re.interpolate(o[F], o[F + 1], $, t))
            break
          }
        }
      else be(o) === "function" && (I = o($))
      m && (h[j] = I)
    }
    return I
  }
  var T = () => (h = {})
  k(e)
  const M = function (E) {
    const A = re(S(E))
    return c && A[c] ? A[c]() : A
  }
  return (
    (M.classes = function (E) {
      if (E != null) {
        if (be(E) === "array") (r = E), (l = [E[0], E[E.length - 1]])
        else {
          const A = re.analyze(l)
          E === 0 ? (r = [A.min, A.max]) : (r = re.limits(A, "e", E))
        }
        return M
      }
      return r
    }),
    (M.domain = function (E) {
      if (!arguments.length) return l
      ;(u = E[0]), (d = E[E.length - 1]), (i = [])
      const A = o.length
      if (E.length === A && u !== d)
        for (let I of Array.from(E)) i.push((I - u) / (d - u))
      else {
        for (let I = 0; I < A; I++) i.push(I / (A - 1))
        if (E.length > 2) {
          const I = E.map((j, F) => F / (E.length - 1)),
            $ = E.map((j) => (j - u) / (d - u))
          $.every((j, F) => I[F] === j) ||
            (v = (j) => {
              if (j <= 0 || j >= 1) return j
              let F = 0
              for (; j >= $[F + 1]; ) F++
              const W = (j - $[F]) / ($[F + 1] - $[F])
              return I[F] + W * (I[F + 1] - I[F])
            })
        }
      }
      return (l = [u, d]), M
    }),
    (M.mode = function (E) {
      return arguments.length ? ((t = E), T(), M) : t
    }),
    (M.range = function (E, A) {
      return k(E), M
    }),
    (M.out = function (E) {
      return (c = E), M
    }),
    (M.spread = function (E) {
      return arguments.length ? ((s = E), M) : s
    }),
    (M.correctLightness = function (E) {
      return (
        E == null && (E = !0),
        (p = E),
        T(),
        p
          ? (g = function (A) {
              const I = S(0, !0).lab()[0],
                $ = S(1, !0).lab()[0],
                j = I > $
              let F = S(A, !0).lab()[0]
              const W = I + ($ - I) * A
              let de = F - W,
                he = 0,
                O = 1,
                z = 20
              for (; Math.abs(de) > 0.01 && z-- > 0; )
                (function () {
                  return (
                    j && (de *= -1),
                    de < 0
                      ? ((he = A), (A += (O - A) * 0.5))
                      : ((O = A), (A += (he - A) * 0.5)),
                    (F = S(A, !0).lab()[0]),
                    (de = F - W)
                  )
                })()
              return A
            })
          : (g = (A) => A),
        M
      )
    }),
    (M.padding = function (E) {
      return E != null ? (be(E) === "number" && (E = [E, E]), (a = E), M) : a
    }),
    (M.colors = function (E, A) {
      arguments.length < 2 && (A = "hex")
      let I = []
      if (arguments.length === 0) I = o.slice(0)
      else if (E === 1) I = [M(0.5)]
      else if (E > 1) {
        const $ = l[0],
          j = l[1] - $
        I = j1(0, E).map((F) => M($ + (F / (E - 1)) * j))
      } else {
        e = []
        let $ = []
        if (r && r.length > 2)
          for (
            let j = 1, F = r.length, W = 1 <= F;
            W ? j < F : j > F;
            W ? j++ : j--
          )
            $.push((r[j - 1] + r[j]) * 0.5)
        else $ = l
        I = $.map((j) => M(j))
      }
      return re[A] && (I = I.map(($) => $[A]())), I
    }),
    (M.cache = function (E) {
      return E != null ? ((m = E), M) : m
    }),
    (M.gamma = function (E) {
      return E != null ? ((b = E), M) : b
    }),
    (M.nodata = function (E) {
      return E != null ? ((n = re(E)), M) : n
    }),
    M
  )
}
function j1(e, t, n) {
  let s = [],
    l = e < t,
    i = t
  for (let a = e; l ? a < i : a > i; l ? a++ : a--) s.push(a)
  return s
}
const B1 = function (e) {
    let t = [1, 1]
    for (let n = 1; n < e; n++) {
      let s = [1]
      for (let l = 1; l <= t.length; l++) s[l] = (t[l] || 0) + t[l - 1]
      t = s
    }
    return t
  },
  R1 = function (e) {
    let t, n, s, l
    if (((e = e.map((i) => new G(i))), e.length === 2))
      ([n, s] = e.map((i) => i.lab())),
        (t = function (i) {
          const a = [0, 1, 2].map((r) => n[r] + i * (s[r] - n[r]))
          return new G(a, "lab")
        })
    else if (e.length === 3)
      ([n, s, l] = e.map((i) => i.lab())),
        (t = function (i) {
          const a = [0, 1, 2].map(
            (r) =>
              (1 - i) * (1 - i) * n[r] + 2 * (1 - i) * i * s[r] + i * i * l[r],
          )
          return new G(a, "lab")
        })
    else if (e.length === 4) {
      let i
      ;([n, s, l, i] = e.map((a) => a.lab())),
        (t = function (a) {
          const r = [0, 1, 2].map(
            (o) =>
              (1 - a) * (1 - a) * (1 - a) * n[o] +
              3 * (1 - a) * (1 - a) * a * s[o] +
              3 * (1 - a) * a * a * l[o] +
              a * a * a * i[o],
          )
          return new G(r, "lab")
        })
    } else if (e.length >= 5) {
      let i, a, r
      ;(i = e.map((o) => o.lab())),
        (r = e.length - 1),
        (a = B1(r)),
        (t = function (o) {
          const c = 1 - o,
            u = [0, 1, 2].map((d) =>
              i.reduce((p, h, m) => p + a[m] * c ** (r - m) * o ** m * h[d], 0),
            )
          return new G(u, "lab")
        })
    } else
      throw new RangeError("No point in running bezier with only one color.")
    return t
  },
  N1 = (e) => {
    const t = R1(e)
    return (t.scale = () => il(t)), t
  },
  Et = (e, t, n) => {
    if (!Et[n]) throw new Error("unknown blend mode " + n)
    return Et[n](e, t)
  },
  pn = (e) => (t, n) => {
    const s = re(n).rgb(),
      l = re(t).rgb()
    return re.rgb(e(s, l))
  },
  hn = (e) => (t, n) => {
    const s = []
    return (
      (s[0] = e(t[0], n[0])), (s[1] = e(t[1], n[1])), (s[2] = e(t[2], n[2])), s
    )
  },
  z1 = (e) => e,
  _1 = (e, t) => (e * t) / 255,
  D1 = (e, t) => (e > t ? t : e),
  F1 = (e, t) => (e > t ? e : t),
  H1 = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)),
  G1 = (e, t) =>
    t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)),
  V1 = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)),
  W1 = (e, t) =>
    e === 255
      ? 255
      : ((e = (255 * (t / 255)) / (1 - e / 255)), e > 255 ? 255 : e)
Et.normal = pn(hn(z1))
Et.multiply = pn(hn(_1))
Et.screen = pn(hn(H1))
Et.overlay = pn(hn(G1))
Et.darken = pn(hn(D1))
Et.lighten = pn(hn(F1))
Et.dodge = pn(hn(W1))
Et.burn = pn(hn(V1))
const { pow: q1, sin: U1, cos: K1 } = Math
function Y1(e = 300, t = -1.5, n = 1, s = 1, l = [0, 1]) {
  let i = 0,
    a
  be(l) === "array" ? (a = l[1] - l[0]) : ((a = 0), (l = [l, l]))
  const r = function (o) {
    const c = Ft * ((e + 120) / 360 + t * o),
      u = q1(l[0] + a * o, s),
      p = ((i !== 0 ? n[0] + o * i : n) * u * (1 - u)) / 2,
      h = K1(c),
      m = U1(c),
      b = u + p * (-0.14861 * h + 1.78277 * m),
      k = u + p * (-0.29227 * h - 0.90649 * m),
      w = u + p * (1.97294 * h)
    return re(gr([b * 255, k * 255, w * 255, 1]))
  }
  return (
    (r.start = function (o) {
      return o == null ? e : ((e = o), r)
    }),
    (r.rotations = function (o) {
      return o == null ? t : ((t = o), r)
    }),
    (r.gamma = function (o) {
      return o == null ? s : ((s = o), r)
    }),
    (r.hue = function (o) {
      return o == null
        ? n
        : ((n = o),
          be(n) === "array"
            ? ((i = n[1] - n[0]), i === 0 && (n = n[1]))
            : (i = 0),
          r)
    }),
    (r.lightness = function (o) {
      return o == null
        ? l
        : (be(o) === "array"
            ? ((l = o), (a = o[1] - o[0]))
            : ((l = [o, o]), (a = 0)),
          r)
    }),
    (r.scale = () => re.scale(r)),
    r.hue(n),
    r
  )
}
const X1 = "0123456789abcdef",
  { floor: J1, random: Z1 } = Math,
  Q1 = () => {
    let e = "#"
    for (let t = 0; t < 6; t++) e += X1.charAt(J1(Z1() * 16))
    return new G(e, "hex")
  },
  { log: Oa, pow: eb, floor: tb, abs: nb } = Math
function Qu(e, t = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0,
  }
  return (
    be(e) === "object" && (e = Object.values(e)),
    e.forEach((s) => {
      t && be(s) === "object" && (s = s[t]),
        s != null &&
          !isNaN(s) &&
          (n.values.push(s),
          (n.sum += s),
          s < n.min && (n.min = s),
          s > n.max && (n.max = s),
          (n.count += 1))
    }),
    (n.domain = [n.min, n.max]),
    (n.limits = (s, l) => ec(n, s, l)),
    n
  )
}
function ec(e, t = "equal", n = 7) {
  be(e) == "array" && (e = Qu(e))
  const { min: s, max: l } = e,
    i = e.values.sort((r, o) => r - o)
  if (n === 1) return [s, l]
  const a = []
  if (
    (t.substr(0, 1) === "c" && (a.push(s), a.push(l)), t.substr(0, 1) === "e")
  ) {
    a.push(s)
    for (let r = 1; r < n; r++) a.push(s + (r / n) * (l - s))
    a.push(l)
  } else if (t.substr(0, 1) === "l") {
    if (s <= 0)
      throw new Error("Logarithmic scales are only possible for values > 0")
    const r = Math.LOG10E * Oa(s),
      o = Math.LOG10E * Oa(l)
    a.push(s)
    for (let c = 1; c < n; c++) a.push(eb(10, r + (c / n) * (o - r)))
    a.push(l)
  } else if (t.substr(0, 1) === "q") {
    a.push(s)
    for (let r = 1; r < n; r++) {
      const o = ((i.length - 1) * r) / n,
        c = tb(o)
      if (c === o) a.push(i[c])
      else {
        const u = o - c
        a.push(i[c] * (1 - u) + i[c + 1] * u)
      }
    }
    a.push(l)
  } else if (t.substr(0, 1) === "k") {
    let r
    const o = i.length,
      c = new Array(o),
      u = new Array(n)
    let d = !0,
      p = 0,
      h = null
    ;(h = []), h.push(s)
    for (let k = 1; k < n; k++) h.push(s + (k / n) * (l - s))
    for (h.push(l); d; ) {
      for (let w = 0; w < n; w++) u[w] = 0
      for (let w = 0; w < o; w++) {
        const g = i[w]
        let v = Number.MAX_VALUE,
          S
        for (let T = 0; T < n; T++) {
          const M = nb(h[T] - g)
          M < v && ((v = M), (S = T)), u[S]++, (c[w] = S)
        }
      }
      const k = new Array(n)
      for (let w = 0; w < n; w++) k[w] = null
      for (let w = 0; w < o; w++)
        (r = c[w]), k[r] === null ? (k[r] = i[w]) : (k[r] += i[w])
      for (let w = 0; w < n; w++) k[w] *= 1 / u[w]
      d = !1
      for (let w = 0; w < n; w++)
        if (k[w] !== h[w]) {
          d = !0
          break
        }
      ;(h = k), p++, p > 200 && (d = !1)
    }
    const m = {}
    for (let k = 0; k < n; k++) m[k] = []
    for (let k = 0; k < o; k++) (r = c[k]), m[r].push(i[k])
    let b = []
    for (let k = 0; k < n; k++) b.push(m[k][0]), b.push(m[k][m[k].length - 1])
    ;(b = b.sort((k, w) => k - w)), a.push(b[0])
    for (let k = 1; k < b.length; k += 2) {
      const w = b[k]
      !isNaN(w) && a.indexOf(w) === -1 && a.push(w)
    }
  }
  return a
}
const sb = (e, t) => {
    ;(e = new G(e)), (t = new G(t))
    const n = e.luminance(),
      s = t.luminance()
    return n > s ? (n + 0.05) / (s + 0.05) : (s + 0.05) / (n + 0.05)
  },
  {
    sqrt: zt,
    pow: Re,
    min: lb,
    max: ib,
    atan2: La,
    abs: ja,
    cos: Ns,
    sin: Ba,
    exp: rb,
    PI: Ra,
  } = Math
function ab(e, t, n = 1, s = 1, l = 1) {
  var i = function (ht) {
      return (360 * ht) / (2 * Ra)
    },
    a = function (ht) {
      return (2 * Ra * ht) / 360
    }
  ;(e = new G(e)), (t = new G(t))
  const [r, o, c] = Array.from(e.lab()),
    [u, d, p] = Array.from(t.lab()),
    h = (r + u) / 2,
    m = zt(Re(o, 2) + Re(c, 2)),
    b = zt(Re(d, 2) + Re(p, 2)),
    k = (m + b) / 2,
    w = 0.5 * (1 - zt(Re(k, 7) / (Re(k, 7) + Re(25, 7)))),
    g = o * (1 + w),
    v = d * (1 + w),
    S = zt(Re(g, 2) + Re(c, 2)),
    T = zt(Re(v, 2) + Re(p, 2)),
    M = (S + T) / 2,
    E = i(La(c, g)),
    A = i(La(p, v)),
    I = E >= 0 ? E : E + 360,
    $ = A >= 0 ? A : A + 360,
    j = ja(I - $) > 180 ? (I + $ + 360) / 2 : (I + $) / 2,
    F =
      1 -
      0.17 * Ns(a(j - 30)) +
      0.24 * Ns(a(2 * j)) +
      0.32 * Ns(a(3 * j + 6)) -
      0.2 * Ns(a(4 * j - 63))
  let W = $ - I
  ;(W = ja(W) <= 180 ? W : $ <= I ? W + 360 : W - 360),
    (W = 2 * zt(S * T) * Ba(a(W) / 2))
  const de = u - r,
    he = T - S,
    O = 1 + (0.015 * Re(h - 50, 2)) / zt(20 + Re(h - 50, 2)),
    z = 1 + 0.045 * M,
    B = 1 + 0.015 * M * F,
    ye = 30 * rb(-Re((j - 275) / 25, 2)),
    Le = -(2 * zt(Re(M, 7) / (Re(M, 7) + Re(25, 7)))) * Ba(2 * a(ye)),
    je = zt(
      Re(de / (n * O), 2) +
        Re(he / (s * z), 2) +
        Re(W / (l * B), 2) +
        Le * (he / (s * z)) * (W / (l * B)),
    )
  return ib(0, lb(100, je))
}
function ob(e, t, n = "lab") {
  ;(e = new G(e)), (t = new G(t))
  const s = e.get(n),
    l = t.get(n)
  let i = 0
  for (let a in s) {
    const r = (s[a] || 0) - (l[a] || 0)
    i += r * r
  }
  return Math.sqrt(i)
}
const ub = (...e) => {
    try {
      return new G(...e), !0
    } catch {
      return !1
    }
  },
  cb = {
    cool() {
      return il([re.hsl(180, 1, 0.9), re.hsl(250, 0.7, 0.4)])
    },
    hot() {
      return il(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
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
Object.assign(re, {
  average: A1,
  bezier: N1,
  blend: Et,
  cubehelix: Y1,
  mix: ws,
  interpolate: ws,
  random: Q1,
  scale: il,
  analyze: Qu,
  contrast: sb,
  deltaE: ab,
  distance: ob,
  limits: ec,
  valid: ub,
  scales: cb,
  input: fe,
  colors: qn,
  brewer: Ws,
})
const db = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  fb = { class: "flex flex-col items-center justify-center w-full" },
  pb = {
    class: "flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap",
    style: { gap: "5rem" },
  },
  hb = { viewBox: "0 0 36 36", class: "chart" },
  gb = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  mb = { viewBox: "0 0 36 36", class: "chart" },
  bb = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  vb = { id: "speedTable" },
  yb = { class: "flex" },
  xb = { class: "flex" },
  wb = {
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
  Sb = Object.assign(wb, {
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
        l = (o) => {
          if (o >= 4) return "border-emerald-500"
          if (o == 3) return "border-orange-200"
          if (o == 2) return "border-orange-500"
          if (o == 1) return "border-orange-400"
        },
        i = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        },
        a = se(() => {
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
        r = (o) => {
          let c = document.querySelectorAll("tr"),
            u
          o == 5
            ? (u = re("#e2e8f0"))
            : o == 4
              ? (u = re("#cbd5e1"))
              : o == 3
                ? (u = re("#475569"))
                : o == 2
                  ? (u = re("#1e293b"))
                  : o == 1 && (u = re("#0f172a"))
          for (let d = 1; d < c.length; d++)
            d % 2 == 0
              ? (c[d].style.backgroundColor = u.brighten(0))
              : (c[d].style.backgroundColor = u.brighten(0.2))
        }
      return (
        We(() => {
          r(t.brightness)
        }),
        cn(
          () => t.brightness,
          (o, c) => {
            r(o)
          },
        ),
        (o, c) => (
          L(),
          K("div", db, [
            f("div", fb, [
              f("div", pb, [
                f(
                  "div",
                  { id: "perfChart", class: x(s(e.brightness)) },
                  [
                    (L(),
                    K("svg", hb, [
                      c[0] ||
                        (c[0] = f(
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
                      f(
                        "path",
                        {
                          class: x(["circle", l(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: a.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            o.circumference + " " + o.circumference,
                          "stroke-dashoffset": o.dashoffset,
                        },
                        null,
                        10,
                        gb,
                      ),
                    ])),
                    f(
                      "div",
                      {
                        id: "chartInner",
                        class: x(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 96 ",
                      2,
                    ),
                    f(
                      "p",
                      {
                        class: x([
                          "text-sm italic opacity-50 mt-3",
                          i(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      [
                        c[1] ||
                          (c[1] = oe(
                            " Google Page Speed desktop performance score for the Bazaar ",
                            -1,
                          )),
                        f(
                          "a",
                          {
                            href: "/portfolio/bazaar",
                            class: x(n(e.brightness)),
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
                f(
                  "div",
                  {
                    id: "perfChart",
                    class: x([s(e.brightness), "hidden sm:hidden md:block"]),
                  },
                  [
                    (L(),
                    K("svg", mb, [
                      c[2] ||
                        (c[2] = f(
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
                      f(
                        "path",
                        {
                          class: x(["circle", l(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: a.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            o.circumference + " " + o.circumference,
                          "stroke-dashoffset": o.dashoffset2,
                        },
                        null,
                        10,
                        bb,
                      ),
                    ])),
                    f(
                      "div",
                      {
                        id: "chartInner",
                        class: x(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 99 ",
                      2,
                    ),
                    f(
                      "p",
                      {
                        class: x([
                          "text-sm italic opacity-50 mt-3",
                          i(e.brightness),
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
              f(
                "div",
                {
                  class: x([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    i(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  f(
                    "h2",
                    { class: x(["text-2xl m-0", i(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  f(
                    "h2",
                    { class: x(["text-5xl", i(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  c[8] ||
                    (c[8] = f(
                      "p",
                      null,
                      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
                      -1,
                    )),
                  c[9] ||
                    (c[9] = f(
                      "p",
                      null,
                      [
                        oe(
                          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
                        ),
                        f("b", null, "315 KB"),
                        oe(". That's half of the classic SNES game "),
                        f(
                          "em",
                          null,
                          "The Legend of Zelda: A Link to The Past",
                        ),
                        oe(
                          ", or 4% of the bandwidth it takes just to open Instagram. ",
                        ),
                      ],
                      -1,
                    )),
                  c[10] ||
                    (c[10] = f(
                      "p",
                      null,
                      "You want fast? Let's make it happen.",
                      -1,
                    )),
                  f(
                    "div",
                    {
                      class: x([
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
                          f("p", null, "DAMN your sites load fast...", -1),
                          f(
                            "p",
                            { class: "text-right italic text-sm mb-0 pb-0" },
                            [f("b", null, "- T. N., one of my clients")],
                            -1,
                          ),
                        ])),
                    ],
                    2,
                  ),
                  f("h3", { class: x(i(e.brightness)) }, "How I help", 2),
                  f("table", vb, [
                    c[6] ||
                      (c[6] = f(
                        "colgroup",
                        null,
                        [
                          f("col", { style: { width: "30%" } }),
                          f("col", { style: { width: "70%" } }),
                        ],
                        -1,
                      )),
                    f("thead", null, [
                      f("tr", null, [
                        f("th", null, [
                          f("div", yb, [
                            f(
                              "h4",
                              { class: x([i(e.brightness), "text-lg m-0"]) },
                              [
                                c[4] || (c[4] = oe(" Problem ", -1)),
                                q(
                                  Z(v0),
                                  {
                                    size: "3rem",
                                    class: x([n(e.brightness), "inline mb-1"]),
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
                        f("th", null, [
                          f("div", xb, [
                            f(
                              "h4",
                              { class: x([i(e.brightness), "text-lg m-0"]) },
                              [
                                c[5] || (c[5] = oe(" What I can do ", -1)),
                                q(
                                  Z(m0),
                                  {
                                    size: "3rem",
                                    class: x([n(e.brightness), "inline mb-1"]),
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
                      (c[7] = f(
                        "tbody",
                        null,
                        [
                          f("tr", null, [
                            f("td", null, "Huge, resource-heavy images"),
                            f("td", null, [
                              oe(" Optimize your images. "),
                              f("b", null, "A lot. "),
                              oe(
                                "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
                              ),
                            ]),
                          ]),
                          f("tr", null, [
                            f("td", null, "Unused code, plugins, and assets"),
                            f(
                              "td",
                              null,
                              " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
                            ),
                          ]),
                          f("tr", null, [
                            f(
                              "td",
                              null,
                              "Inefficient, resource-heavy platforms",
                            ),
                            f(
                              "td",
                              null,
                              " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
                            ),
                          ]),
                          f("tr", null, [
                            f("td", null, "Uncached resources"),
                            f(
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
              c[11] || (c[11] = f("div", { class: "h-6" }, null, -1)),
              q(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  Cb = Zt(Sb, [["__scopeId", "data-v-a139c5c2"]]),
  Eb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  Tb = { class: "lg:w-6/12 sm:w-12/12" },
  kb = { class: "flex items-center w-full" },
  Pb = { class: "flex items-center w-full" },
  Ib = { class: "flex items-center w-full" },
  $b = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  Mb = { class: "prose text-center" },
  Ab = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      V(9274)
      const t = V(4709),
        n = V(new Date("2023-10-01")),
        s = V(new Date()),
        l = se(
          () =>
            ((s.value.getFullYear() - n.value.getFullYear()) * 12 +
              (s.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        i = (o) => (o > 1e6 ? Math.round(o / 1e6).toString() + "m" : o),
        a = (o) => {
          if (o >= 4) return "text-emerald-500"
          if (o == 3) return "text-orange-200"
          if (o == 2) return "text-orange-500"
          if (o == 1) return "text-orange-400"
        },
        r = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        }
      return (o, c) => (
        L(),
        K("div", Eb, [
          f("div", Tb, [
            f(
              "h2",
              { class: x(["text-left text-5xl", r(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            f(
              "p",
              {
                class: x([
                  "text-left text-sm italic opacity-50 mt-3",
                  r(e.brightness),
                ]),
              },
              [
                c[1] || (c[1] = oe(" Website already secure? ", -1)),
                f("b", null, [
                  f(
                    "a",
                    { href: "", class: x(a(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  c[0] || (c[0] = oe(" are you?", -1)),
                ]),
              ],
              2,
            ),
            f(
              "hr",
              { class: x(["mb-5 mt-1 w-6/12 opacity-25", r(e.brightness)]) },
              null,
              2,
            ),
            f(
              "div",
              { class: x(["prose", r(e.brightness)]) },
              [
                c[5] ||
                  (c[5] = f(
                    "p",
                    null,
                    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
                    -1,
                  )),
                c[6] ||
                  (c[6] = f(
                    "p",
                    null,
                    [f("b", null, " Don't worry, I can help!")],
                    -1,
                  )),
                c[7] ||
                  (c[7] = f(
                    "p",
                    null,
                    "My web security specialities include (but aren't limited to):",
                    -1,
                  )),
                f(
                  "div",
                  {
                    class: x([
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
                    f("div", kb, [
                      q(
                        Z(Hs),
                        { class: x(["mr-2", a(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      f(
                        "h4",
                        { class: x(["font-bold m-0", r(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    c[2] ||
                      (c[2] = f(
                        "p",
                        null,
                        [
                          oe(
                            " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
                          ),
                          f("em", null, "very"),
                          oe(
                            " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
                          ),
                        ],
                        -1,
                      )),
                  ],
                  2,
                ),
                c[8] || (c[8] = f("div", { class: "h-3" }, null, -1)),
                f(
                  "div",
                  {
                    class: x([
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
                    f("div", Pb, [
                      q(
                        Z(Hs),
                        { size: "2rem", class: x(["mr-2", a(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      f(
                        "h4",
                        { class: x(["font-bold m-0", r(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    c[3] ||
                      (c[3] = f(
                        "p",
                        null,
                        [
                          oe(
                            " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
                          ),
                          f("em", null, "do"),
                          oe(
                            " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
                          ),
                        ],
                        -1,
                      )),
                  ],
                  2,
                ),
                c[9] || (c[9] = f("div", { class: "h-3" }, null, -1)),
                f(
                  "div",
                  {
                    class: x([
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
                    f("div", Ib, [
                      q(
                        Z(Hs),
                        { class: x(["mr-2", a(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      f(
                        "h4",
                        { class: x(["font-bold m-0", r(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    c[4] ||
                      (c[4] = f(
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
          f("div", $b, [
            f(
              "div",
              {
                class: x([
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
                f("div", Mb, [
                  f(
                    "h3",
                    {
                      class: x([
                        "text-5xl font-monospace mt-6",
                        a(e.brightness),
                      ]),
                    },
                    Je(i(l.value)) + "+ ",
                    3,
                  ),
                  f(
                    "h3",
                    { class: x(["text-xl", r(e.brightness)]) },
                    [
                      c[10] || (c[10] = oe(" attacks blocked on ", -1)),
                      f(
                        "a",
                        {
                          class: x(a(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  f(
                    "p",
                    {
                      class: x(["italic opacity-50 text-sm", r(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  f(
                    "p",
                    {
                      class: x(["italic opacity-50 text-sm", r(e.brightness)]),
                    },
                    [
                      f(
                        "a",
                        { href: "", class: x(a(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      c[11] || (c[11] = oe(" about the Bazaar project ", -1)),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            c[12] || (c[12] = f("div", { class: "h-3" }, null, -1)),
            f("hr", { class: x(["opacity-50", r(e.brightness)]) }, null, 2),
            c[13] || (c[13] = f("div", { class: "h-3" }, null, -1)),
            q(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  Ob = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  Lb = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  jb = { class: "flex w-full" },
  Bb = { class: "flex w-full pt-4 gap-2" },
  Rb = { class: "w-6/12" },
  Nb = { class: "w-6/12" },
  zb = { class: "w-full flex" },
  _b = { class: "w-6/12" },
  Db = { class: "w-6/12 pb-3" },
  Fb = {
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
        l = se(() =>
          s.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        i = se(() =>
          s.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        a = (c) => {
          if (c >= 4) return "text-slate-800"
          if (c == 3) return "text-slate-200"
          if (c == 2) return "text-slate-300"
          if (c == 1) return "text-slate-300"
        },
        r = (c) => {
          let u = document.querySelectorAll("tr"),
            d
          c == 5
            ? (d = re("#e2e8f0"))
            : c == 4
              ? (d = re("#cbd5e1"))
              : c == 3
                ? (d = re("#475569"))
                : c == 2
                  ? (d = re("#1e293b"))
                  : c == 1 && (d = re("#0f172a"))
          for (let p = 1; p < u.length; p++)
            p % 2 == 0
              ? (u[p].style.backgroundColor = d.brighten(0))
              : (u[p].style.backgroundColor = d.brighten(0.2))
        },
        o = () => {
          ;(s.value = !s.value), s.value
        }
      return (
        We(() => {
          r(t.brightness)
        }),
        cn(
          () => t.brightness,
          (c, u) => {
            r(c)
          },
        ),
        (c, u) => (
          L(),
          K("div", Ob, [
            f("div", Lb, [
              f(
                "h2",
                { class: x(["text-5xl", a(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              f(
                "h3",
                { class: x(["text-2xl", a(e.brightness)]) },
                "Does yours?",
                2,
              ),
              f(
                "h4",
                { class: x(a(e.brightness)) },
                [
                  u[0] || (u[0] = oe(" What are the ", -1)),
                  f(
                    "a",
                    {
                      class: x(["font-bold", n(e.brightness)]),
                      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    "Web Content Accessibility Guidelines?",
                    2,
                  ),
                ],
                2,
              ),
              f(
                "p",
                { class: x(a(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              f(
                "p",
                { class: x(a(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              f(
                "h4",
                { class: x(a(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              f(
                "p",
                { class: x(a(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              f(
                "p",
                { class: x(a(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              f("div", jb, [
                f(
                  "button",
                  {
                    class: x([
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
                    s.value ? (L(), ge(Z(hu), { key: 0 })) : ke("", !0),
                    s.value ? ke("", !0) : (L(), ge(Z(u0), { key: 1 })),
                    u[1] ||
                      (u[1] = oe(
                        " Toggle red/green color blind/screen reader mode ",
                        -1,
                      )),
                  ],
                  2,
                ),
              ]),
              f("div", Bb, [
                f("div", Rb, [
                  f(
                    "button",
                    { class: x(["rounded px-5 py-2 w-full", l.value]) },
                    [s.value ? (L(), ge(Z(xa), { key: 0 })) : ke("", !0)],
                    2,
                  ),
                ]),
                f("div", Nb, [
                  f(
                    "button",
                    { class: x(["rounded px-5 py-2 w-full", i.value]) },
                    [s.value ? (L(), ge(Z(ki), { key: 0 })) : ke("", !0)],
                    2,
                  ),
                ]),
              ]),
              f(
                "h4",
                { class: x(["text-2xl", a(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              f("div", zb, [
                f("div", _b, [
                  f(
                    "button",
                    {
                      class: x([
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
                    [u[2] || (u[2] = oe(" Submit ", -1)), q(Z(xa))],
                    2,
                  ),
                ]),
                f("div", Db, [
                  f(
                    "button",
                    {
                      class: x([
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
                    [u[3] || (u[3] = oe(" Cancel ", -1)), q(Z(ki))],
                    2,
                  ),
                ]),
              ]),
              f(
                "p",
                { class: x(a(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              f(
                "p",
                { class: x(a(e.brightness)) },
                [
                  ...(u[4] ||
                    (u[4] = [
                      oe(
                        " Changes like these may seem small, but they make a ",
                        -1,
                      ),
                      f("em", null, "huge", -1),
                      oe(
                        " difference for the usability of your site. Let me help you be in the 2%. ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
            ]),
            u[5] || (u[5] = f("div", { class: "h-6" }, null, -1)),
            q(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Hb = ["onMouseover"],
  Gb = {
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
      const s = (i, a, r, o) => {
          if (a) {
            if (i == 5) return r === o ? "bg-emerald-600" : "bg-emerald-500"
            if (i == 4) return r === o ? "bg-emerald-600" : "bg-emerald-500"
            if (i == 3 || i == 1)
              return r === o ? "bg-orange-500" : "bg-orange-400"
            if (i == 2) return "bg-orange-600"
          } else if (r === o) {
            if (i == 5) return "bg-slate-300"
            if (i == 4) return "bg-slate-400"
            if (i == 3) return "bg-slate-700"
            if (i == 2) return "bg-slate-900"
            if (i == 1) return "bg-black"
          } else {
            if (i == 5) return "bg-slate-200"
            if (i == 4) return "bg-slate-300"
            if (i == 3) return "bg-slate-600"
            if (i == 2) return "bg-slate-800"
            if (i == 1) return "bg-slate-900"
          }
        },
        l = (i, a) => {
          if (a) return i >= 3 ? "text-slate-200" : "text-slate-800"
          if (i >= 4) return "text-emerald-500"
          if (i == 3) return "text-orange-200"
          if (i == 2) return "text-orange-500"
          if (i == 1) return "text-orange-400"
        }
      return (i, a) => (
        L(),
        ge(Z(Zf), null, {
          default: ae(() => [
            q(
              Z(Qf),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: ae(() => [
                  (L(!0),
                  K(
                    Pe,
                    null,
                    Wt(
                      t.value,
                      (r) => (
                        L(),
                        ge(
                          Z(ep),
                          {
                            key: r.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: ae(({ selected: o }) => [
                              f(
                                "div",
                                {
                                  class: x([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    s(e.brightness, o, Z(n), r.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (c) =>
                                    Fe(n) ? (n.value = r.id) : (n = r.id),
                                  onMouseleave:
                                    a[0] ||
                                    (a[0] = (c) =>
                                      Fe(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  r.id == 0
                                    ? (L(),
                                      ge(
                                        Z(Hs),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(l(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  r.id == 1
                                    ? (L(),
                                      ge(
                                        Z(d0),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(l(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  r.id == 4
                                    ? (L(),
                                      ge(
                                        Z(c0),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(l(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  r.id == 3
                                    ? (L(),
                                      ge(
                                        Z(g0),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(l(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  r.id == 5
                                    ? (L(),
                                      ge(
                                        Z(hu),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(l(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  f(
                                    "p",
                                    {
                                      class: x([
                                        "font-semibold cursor-pointer",
                                        l(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Je(r.title),
                                    3,
                                  ),
                                ],
                                42,
                                Hb,
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
            q(
              Z(tp),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: ae(() => [
                  q(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ae(() => [
                        q(Cb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  q(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ae(() => [
                        q(Ab, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  q(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ae(() => [
                        q(Mm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  q(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ae(() => [
                        q(xm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  q(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ae(() => [
                        q(Fb, { brightness: e.brightness }, null, 8, [
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
  Vb = { href: "/pricing" },
  Wb = {
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
          fn(() => {
            window.removeEventListener("scroll", s)
          })
      })
      const n = (s) => {
        if (s >= 4) return "text-slate-800"
        if (s == 3) return "text-slate-200"
        if (s == 2) return "text-slate-300"
        if (s == 1) return "text-slate-300"
      }
      return (s, l) => (
        L(),
        K(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: x([
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
            f(
              "p",
              { class: x(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            f("a", Vb, [
              f(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
                  class: x([
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
  qb = { class: "flex-col" },
  Ub = { class: "prose py-5 flex-col w-full" },
  Kb = { class: "flex" },
  Yb = { class: "w-6/12" },
  Xb = ["name", "checked", "onClick"],
  Jb = { class: "w-6/12" },
  Zb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Qb = { class: "flex-col gap-4" },
  ev = { class: "flex items-center" },
  tv = ["name", "checked", "onClick"],
  nv = { key: 0 },
  sv = { key: 1 },
  lv = { class: "" },
  iv = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  rv = { class: "flex-col" },
  av = { class: "flex justify-between" },
  ov = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  uv = { class: "gap-4 mt-4", name: "pricing" },
  cv = ["value"],
  dv = ["value"],
  fv = { class: "flex gap-4", id: "leftInputs" },
  pv = { class: "flex gap-4", id: "rightInputs" },
  hv = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (O) => {
          O.preventDefault()
          const z = "pricing"
          let B = document.getElementsByName("name")[0].value,
            ye = document.getElementsByName("email")[0].value,
            me = document.getElementsByName("website")[0].value,
            Le = document.getElementsByName("notes")[0].value,
            je = document.getElementsByName("services")[0].value,
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
                form: z,
                name: B,
                email: ye,
                website: me,
                notes: Le,
                services: je,
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
                let et = document.getElementsByName(z)[0],
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
                  et.appendChild(R)
                let ee = document.getElementById("leftInputs"),
                  X = document.getElementById("rightInputs")
                ;(ee.style.display = "none"), (X.style.display = "none")
                let ne = document.getElementById("submitButton")
                ne.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        s = (O) => {
          if (O >= 4) return "text-emerald-500"
          if (O == 3) return "text-orange-200"
          if (O == 2) return "text-orange-500"
          if (O == 1) return "text-orange-400"
        },
        l = (O) => {
          if (O >= 4) return "text-emerald-500"
          if (O == 3) return "text-slate-800"
          if (O == 2) return "text-orange-500"
          if (O == 1) return "text-orange-400"
        },
        i = (O) => {
          if (O >= 4) return "border-emerald-500"
          if (O == 3) return "border-orange-200"
          if (O == 2) return "border-orange-500"
          if (O == 1) return "border-orange-400"
        },
        a = (O) => {
          if (O >= 4) return "text-slate-800"
          if (O == 3) return "text-slate-200"
          if (O == 2) return "text-slate-300"
          if (O == 1) return "text-slate-300"
        },
        r = V({
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
        o = se(() =>
          r.value.speed.audit.enabled &&
          r.value.speed.optimize.enabled &&
          r.value.speed.caching.enabled &&
          r.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        c = se(() =>
          r.value.security.audit.enabled &&
          r.value.security.ddosprotection.enabled &&
          r.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        u = se(() =>
          r.value.accessibility.audit.enabled &&
          r.value.accessibility.levelA.enabled &&
          r.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        d = se(() => 3 / 3),
        p = se(
          () =>
            Object.values(r.value.speed).reduce(
              (O, z) => O + (z.enabled ? z.price : 0),
              0,
            ) * o.value,
        ),
        h = se(
          () =>
            Object.values(r.value.security).reduce(
              (O, z) => O + (z.enabled ? z.price : 0),
              0,
            ) * c.value,
        ),
        m = se(
          () =>
            Object.values(r.value.accessibility).reduce(
              (O, z) => O + (z.enabled ? z.price : 0),
              0,
            ) * u.value,
        ),
        b = se(
          () =>
            Object.values(r.value.designOverhaul).reduce(
              (O, z) => O + (z.enabled ? z.price : 0),
              0,
            ) * d.value,
        ),
        k = se(() => {
          let O = 0
          for (const [z, B] of Object.entries(r.value.speed))
            B.enabled && (O += B.price)
          return O
        }),
        w = se(() => {
          let O = 0
          for (const [z, B] of Object.entries(r.value.security))
            B.enabled && (O += B.price)
          return O
        }),
        g = se(() => {
          let O = 0
          for (const [z, B] of Object.entries(r.value.accessibility))
            B.enabled && (O += B.price)
          return O
        }),
        v = se(() => {
          let O = 0
          for (const [z, B] of Object.entries(r.value.designOverhaul))
            B.enabled && (O += B.price)
          return O
        }),
        S = () => {
          r.value.speed.audit.enabled &&
          r.value.speed.optimize.enabled &&
          r.value.speed.caching.enabled &&
          r.value.speed.images.enabled
            ? ((r.value.speed.audit.enabled = !1),
              (r.value.speed.optimize.enabled = !1),
              (r.value.speed.caching.enabled = !1),
              (r.value.speed.images.enabled = !1))
            : ((r.value.speed.audit.enabled = !0),
              (r.value.speed.optimize.enabled = !0),
              (r.value.speed.caching.enabled = !0),
              (r.value.speed.images.enabled = !0))
        },
        T = () => {
          r.value.security.audit.enabled &&
          r.value.security.ddosprotection.enabled &&
          r.value.security.protection.enabled
            ? ((r.value.security.audit.enabled = !1),
              (r.value.security.ddosprotection.enabled = !1),
              (r.value.security.protection.enabled = !1))
            : ((r.value.security.audit.enabled = !0),
              (r.value.security.ddosprotection.enabled = !0),
              (r.value.security.protection.enabled = !0))
        },
        M = () => {
          r.value.accessibility.audit.enabled &&
          r.value.accessibility.levelA.enabled &&
          r.value.accessibility.levelAA.enabled
            ? ((r.value.accessibility.audit.enabled = !1),
              (r.value.accessibility.levelA.enabled = !1),
              (r.value.accessibility.levelAA.enabled = !1))
            : ((r.value.accessibility.audit.enabled = !0),
              (r.value.accessibility.levelA.enabled = !0),
              (r.value.accessibility.levelAA.enabled = !0))
        },
        E = () => {
          r.value.designOverhaul.designOverhaul.enabled
            ? (r.value.designOverhaul.designOverhaul.enabled = !1)
            : (r.value.designOverhaul.designOverhaul.enabled = !0)
        },
        A = (O) => {
          O.title == "Speed"
            ? S()
            : O.title == "Security"
              ? T()
              : O.title == "Accessibility"
                ? M()
                : O.title == "Design Overhaul" && E()
        },
        I = (O) => Object.values(O.services).some((z) => z.enabled),
        $ = V([
          {
            title: "Speed",
            services: r.value.speed,
            enabled: !0,
            discount: o.value,
          },
          {
            title: "Security",
            services: r.value.security,
            enabled: !1,
            discount: c.value,
          },
          {
            title: "Accessibility",
            services: r.value.accessibility,
            enabled: !1,
            discount: u.value,
          },
          {
            title: "Design Overhaul",
            services: r.value.designOverhaul,
            enabled: !1,
            discount: d.value,
          },
        ]),
        j = (O) => {
          if (O.title === "Speed") return p.value
          if (O.title === "Security") return h.value
          if (O.title === "Accessibility") return m.value
          if (O.title === "Design Overhaul") return b.value
        },
        F = (O) => {
          if (O.title === "Speed") return k.value
          if (O.title === "Security") return w.value
          if (O.title === "Accessibility") return g.value
          if (O.title === "Design Overhaul") return v.value
        },
        W = se(
          () => j($.value[0]) + j($.value[1]) + j($.value[2]) + j($.value[3]),
        ),
        de = se(() => {
          let O = []
          for (const [z, B] of Object.entries(r.value.speed))
            B.enabled && O.push(B.title)
          for (const [z, B] of Object.entries(r.value.security))
            B.enabled && O.push(B.title)
          for (const [z, B] of Object.entries(r.value.accessibility))
            B.enabled && O.push(B.title)
          for (const [z, B] of Object.entries(r.value.designOverhaul))
            B.enabled && O.push(B.title)
          return O
        }),
        he = (O) => {
          let z = ""
          return (
            (z += i(O)),
            O == 5
              ? (z += " bg-slate-100")
              : O == 4
                ? (z += " bg-slate-400")
                : O == 3
                  ? (z += " bg-slate-500")
                  : O == 2
                    ? (z += " bg-slate-700")
                    : O == 1 && (z += " bg-slate-800"),
            z
          )
        }
      return (O, z) => (
        L(),
        K("div", qb, [
          f("div", Ub, [
            f(
              "h2",
              {
                class: x([
                  "text-5xl text-center text-semibold",
                  a(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            f(
              "p",
              { class: x(["text-center", a(n.brightness)]) },
              [
                z[0] ||
                  (z[0] = oe(
                    " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                    -1,
                  )),
                z[1] || (z[1] = f("br", null, null, -1)),
                z[2] || (z[2] = f("br", null, null, -1)),
                z[3] ||
                  (z[3] = oe(
                    " These services are for your existing website- if you're looking for a new site, ",
                    -1,
                  )),
                f(
                  "a",
                  {
                    href: "/contact",
                    class: x(["font-bold", s(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                z[4] || (z[4] = oe(" for a custom quote. ", -1)),
              ],
              2,
            ),
          ]),
          (L(!0),
          K(
            Pe,
            null,
            Wt(
              $.value,
              (B, ye) => (
                L(),
                K(
                  "div",
                  {
                    key: ye,
                    class: x([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      he(n.brightness),
                    ]),
                  },
                  [
                    f("div", Kb, [
                      f("div", Yb, [
                        f(
                          "div",
                          {
                            class: x([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              a(n.brightness),
                            ]),
                          },
                          [
                            f(
                              "input",
                              {
                                type: "checkbox",
                                name: B.title,
                                checked: I(B),
                                onClick: (me) => A(B),
                                class: x([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  s(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Xb,
                            ),
                            f("h3", null, Je(B.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      f("div", Jb, [
                        f(
                          "h3",
                          {
                            class: x([
                              "text-4xl text-bold text-right",
                              s(n.brightness),
                            ]),
                          },
                          [
                            F(B) != Math.floor(j(B))
                              ? (L(), K("span", Zb, "$" + Je(F(B)), 1))
                              : ke("", !0),
                            oe("$" + Je(j(B)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    f(
                      "hr",
                      { class: x(["my-4 w-full", s(n.brightness)]) },
                      null,
                      2,
                    ),
                    f("div", Qb, [
                      (L(!0),
                      K(
                        Pe,
                        null,
                        Wt(
                          B.services,
                          (me, Le) => (
                            L(),
                            K(
                              "div",
                              {
                                key: Le,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                f("div", ev, [
                                  f(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: me.title,
                                      checked: me.enabled,
                                      onClick: (je) =>
                                        (me.enabled = !me.enabled),
                                      class: x([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        s(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    tv,
                                  ),
                                  f(
                                    "p",
                                    { class: x(["", a(n.brightness)]) },
                                    [
                                      me.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (L(),
                                          K("b", nv, [
                                            f("em", null, Je(me.title), 1),
                                          ]))
                                        : (L(), K("span", sv, Je(me.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                f("div", lv, [
                                  f(
                                    "h3",
                                    {
                                      class: x([
                                        "text-bold text-right",
                                        s(n.brightness),
                                      ]),
                                    },
                                    [
                                      me.price !=
                                      Math.floor(me.price * B.discount)
                                        ? (L(),
                                          K("span", iv, "$" + Je(me.price), 1))
                                        : ke("", !0),
                                      oe("$" + Je(me.price * B.discount), 1),
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
          f("hr", { class: x(["my-4 w-full", s(n.brightness)]) }, null, 2),
          f("div", rv, [
            f("div", av, [
              f(
                "h3",
                { class: x(["text-4xl text-bold", s(n.brightness)]) },
                " Total ",
                2,
              ),
              f(
                "h3",
                { class: x(["text-4xl text-bold", s(n.brightness)]) },
                [
                  W.value != Math.floor(W.value)
                    ? (L(), K("span", ov, "$" + Je(W.value), 1))
                    : ke("", !0),
                  oe("$" + Je(W.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          f("form", uv, [
            f(
              "input",
              { type: "hidden", name: "services", value: de.value },
              null,
              8,
              cv,
            ),
            f(
              "input",
              { type: "hidden", name: "total", value: W.value },
              null,
              8,
              dv,
            ),
            f("div", fv, [
              f(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: x([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    l(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              f(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: x([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    l(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            f("div", pv, [
              f(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: x([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    l(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              f(
                "textarea",
                {
                  name: "notes",
                  placeholder: "Notes",
                  class: x([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    l(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            f(
              "button",
              {
                "aria-label": "Submit a contact form",
                id: "submitButton",
                type: "submit",
                class: x([
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
          f(
            "p",
            { class: x(["text-center mt-4", a(n.brightness)]) },
            [
              z[5] ||
                (z[5] = oe(
                  " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
                  -1,
                )),
              z[6] || (z[6] = f("br", null, null, -1)),
              z[7] || (z[7] = f("br", null, null, -1)),
              z[8] ||
                (z[8] = oe(
                  "These are one-time services; for ongoing maintenance, please ",
                  -1,
                )),
              f(
                "a",
                { href: "/contact", class: x(["font-bold", s(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              z[9] || (z[9] = oe(" and we can get that figured out.", -1)),
              z[10] || (z[10] = f("br", null, null, -1)),
              z[11] || (z[11] = f("br", null, null, -1)),
              z[12] || (z[12] = oe("I look forward to working with you! ", -1)),
            ],
            2,
          ),
        ])
      )
    },
  },
  gv = Zt(hv, [["__scopeId", "data-v-e20b9d11"]]),
  mv = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(), ge(gv, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  bv = { class: "flex-col" },
  vv = { class: "py-5 flex-col w-full" },
  yv = { id: "cta" },
  tc = {
    __name: "Contact",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (l) => {
          if (l >= 4) return "text-slate-800"
          if (l == 3) return "text-slate-200"
          if (l == 2) return "text-slate-300"
          if (l == 1) return "text-slate-300"
        },
        s = async (l) => {
          l.preventDefault()
          const i = "contact"
          let a = document.getElementsByName("name")[0].value,
            r = document.getElementsByName("email")[0].value,
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
                form: i,
                name: a,
                email: r,
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
                  p = document.createElement("div")
                p.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (p.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  d.appendChild(p)
                let h = d.getElementsByTagName("input")
                for (let k = 0; k < h.length; k++) h[k].style.display = "none"
                let m = d.getElementsByTagName("textarea")[0]
                m.style.display = "none"
                let b = document.getElementById("submitButton")
                b.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (l, i) => (
        L(),
        K("div", bv, [
          f("div", vv, [
            f(
              "h2",
              {
                class: x([
                  "text-5xl text-center text-semibold",
                  n(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          f("form", yv, [
            f(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: x(["rounded p-2 w-full", l.inputClass]),
              },
              null,
              2,
            ),
            f(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Email",
                class: x(["rounded p-2 w-full mt-3", l.inputClass]),
              },
              null,
              2,
            ),
            f(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: x(["rounded p-2 w-full mt-3", l.inputClass]),
              },
              null,
              2,
            ),
            f(
              "button",
              {
                id: "submitButton",
                type: "submit",
                "aria-label": "Submit a contact form",
                onClick: s,
                class: x([
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
  xv = { class: "flex-col w-full" },
  wv = { class: "p-5 flex-col w-full" },
  Sv = { class: "grid grid-cols-6" },
  Cv = { class: "col-span-2 sm:col-span-2 md:col-span-1" },
  Ev = { class: "flex gap-2 mt-4 justify-center items-center" },
  Tv = { class: "flex gap-2 mt-4 justify-center items-center" },
  kv = ["href"],
  Pv = {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "100%",
    height: "100%",
  },
  Iv = ["d"],
  $v = {
    class: "col-span-4 sm:col-span-4 md:col-span-5 prose pl-5",
    style: { "max-width": "100vw !important" },
  },
  Mv = {
    __name: "AboutMe",
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
        l = [C0, gu, y0, S0],
        i = [
          "https://www.linkedin.com/in/josephclaytonhansen/",
          "https://www.github.com/josephclaytonhansen",
          "https://blenderartists.org/u/joseph/summary",
          "https://www.instagram.com/jhansen_art/",
        ]
      return (a, r) => (
        L(),
        K("div", xv, [
          f("div", wv, [
            f("div", Sv, [
              f("div", Cv, [
                r[0] ||
                  (r[0] = f(
                    "div",
                    { class: "square-image-container rounded" },
                    [
                      f("img", {
                        class: "rounded pr-4",
                        src: "https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp",
                        alt: "Joseph Hansen",
                      }),
                    ],
                    -1,
                  )),
                f("div", Ev, [
                  f("div", Tv, [
                    (L(),
                    K(
                      Pe,
                      null,
                      Wt(l, (o, c) =>
                        f(
                          "div",
                          { key: c, class: x(["flex-1", s(t.brightness)]) },
                          [
                            f(
                              "a",
                              { href: i[c] },
                              [
                                (L(),
                                K("svg", Pv, [
                                  f("path", { d: o.path }, null, 8, Iv),
                                ])),
                              ],
                              8,
                              kv,
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
              f("div", $v, [
                f(
                  "h1",
                  { class: x(["text-5xl font-bold mb-0", n(t.brightness)]) },
                  " Joseph Hansen ",
                  2,
                ),
                f(
                  "h3",
                  { class: x(["text-lg", n(t.brightness)]) },
                  " Professionally... ",
                  2,
                ),
                f(
                  "p",
                  { class: x(n(t.brightness)) },
                  " I'm a full-stack web developer with a Strategic Communications degree (and a Visual Communications minor), training in design, extensive marketing experience, and a decade of web design and development experience. My specialities are WordPress and Vue, and I'm also proficient in Django, Ruby on Rails, React, and a massive slate of CMS platforms (including Drupal, Joomla, Caffeine, Shopify, and others.) ",
                  2,
                ),
                f(
                  "p",
                  { class: x(n(t.brightness)) },
                  " Have a WordPress site with an obscure theme? Not to worry, I've worked with every WordPress theme or builder under the sun: Divi, Flatsome, Avada, WP Bakery, Gutenburg, Elementor, and more. I'm experienced in JavaScript, HTML, CSS, PHP, Python, C++, Ruby, and other languages, and I'm passionate about problem-solving through code. ",
                  2,
                ),
                f(
                  "p",
                  { class: x(n(t.brightness)) },
                  " I've been working for marketing agencies for 5 years, and I have extensive freelance experience as well. I've worked with clients in a variety of industries, including healthcare, finance, real estate, and more. I've also worked with a variety of non-profits and educational institutions. ",
                  2,
                ),
                f(
                  "p",
                  { class: x(n(t.brightness)) },
                  " I love problem-solving and I'm passionate about having a good impact. I learn quickly, adapt rapidly, and fit into a team instantaneously. ",
                  2,
                ),
                f(
                  "h3",
                  { class: x(["text-lg", n(t.brightness)]) },
                  " Personally... ",
                  2,
                ),
                f(
                  "p",
                  { class: x(n(t.brightness)) },
                  " If that section above bored you, me too. Luckily, there's a lot more to me than what I do for work. I'd call myself an artist, and that covers a lot of things I love to do. I'm: ",
                  2,
                ),
                f(
                  "ul",
                  { class: x(n(t.brightness)) },
                  [
                    ...(r[1] ||
                      (r[1] = [
                        f("li", null, "a 3D artist and animator", -1),
                        f("li", null, "a digital and traditional painter", -1),
                        f(
                          "li",
                          null,
                          " an avid cook who loves discovering new recipes and cuisines (my favorite seasoning: tamarind paste) ",
                          -1,
                        ),
                        f(
                          "li",
                          null,
                          " a classically trained pianist and organist (with an infinite love for Rachmaninov, Kabalevsky, and Prokokiev) ",
                          -1,
                        ),
                        f(
                          "li",
                          null,
                          " a huge nerd and massive DC fan (favorite fictional characters: Nightwing and Batgirl) ",
                          -1,
                        ),
                        f(
                          "li",
                          null,
                          "a woodworker and electronic tinkerer",
                          -1,
                        ),
                        f("li", null, "and so much more!", -1),
                      ])),
                  ],
                  2,
                ),
                f(
                  "p",
                  { class: x(n(t.brightness)) },
                  " I'm also passionate about social justice, advocacy, and equality. I volunteer extensively (including as a crisis counselor for the Trevor Project), spent many years as the assistant director of a regional non-profit organization, and I'm always looking for ways to make the world a better place. ",
                  2,
                ),
                f(
                  "h3",
                  { class: x(["text-lg", n(t.brightness)]) },
                  " That's me! So... what can I do for you? ",
                  2,
                ),
                q(
                  tc,
                  {
                    brightness: e.brightness,
                    style: { "margin-top": "-7rem" },
                  },
                  null,
                  8,
                  ["brightness"],
                ),
                r[2] ||
                  (r[2] = f(
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
  Av = Zt(Mv, [["__scopeId", "data-v-16a9d0a6"]]),
  Ov = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  Lv = { class: "py-5 flex-col w-full" },
  jv = { class: "prose" },
  Bv = ["onMouseover", "onClick"],
  Rv = { class: "image-container" },
  Nv = ["src", "alt"],
  zv = { class: "flex gap-2 items-center" },
  _v = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  Dv = ["d"],
  Fv = {
    __name: "WebPortfolio",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          if (r >= 4) return "text-slate-800"
          if (r == 3) return "text-slate-200"
          if (r == 2) return "text-slate-300"
          if (r == 1) return "text-slate-300"
        },
        s = (r) => {
          if (r >= 4) return "text-emerald-500"
          if (r == 3) return "text-orange-600"
          if (r == 2) return "text-orange-500"
          if (r == 1) return "text-orange-400"
        },
        l = V([
          {
            icons: [$t, Os, w0],
            title: "BlenderNation Bazaar",
            image: ir,
            link: "/web-portfolio/bazaar",
          },
          {
            icons: [$t, Os, wa],
            title: "Feed Council",
            image: rr,
            link: "/web-portfolio/feed-council",
          },
          { icons: [$t, x0, Os], title: "CHAI", link: "/web-portfolio/chai" },
        ]),
        i = V([
          {
            icons: [$t, wa],
            title: "Build On Your Land",
            image: ar,
            link: "/web-portfolio/build-on-your-land",
          },
          {
            icons: [$t, Os],
            title: "Stuart Pipe and Hose",
            image: or,
            link: "/web-portfolio/stuart-pipe",
          },
          {
            icons: [$t, es],
            title: "Atlanta Floor One",
            image: ur,
            link: "/web-portfolio/atlanta-floor-one",
          },
          {
            icons: [$t, es],
            title: "Swim State Pool",
            image: cr,
            link: "/web-portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [T0, E0],
            image: dr,
            link: "/web-portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [$t, es],
            image: fr,
            link: "/web-portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [$t, es],
            image: pr,
            link: "/web-portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [$t, es],
            image: hr,
            link: "/web-portfolio/aris-search",
          },
        ]),
        a = V(null)
      return (r, o) => (
        L(),
        K("div", Ov, [
          f("div", Lv, [
            f("span", jv, [
              f(
                "h2",
                {
                  class: x([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              f(
                "p",
                { class: x(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. ",
                2,
              ),
              f(
                "h3",
                { class: x(["text-2xl text-center", n(t.brightness)]) },
                " Check out these full sites I designed and developed ",
                2,
              ),
            ]),
          ]),
          (L(!0),
          K(
            Pe,
            null,
            Wt(
              [l.value, i.value],
              (c) => (
                L(),
                K(
                  "div",
                  {
                    class: x([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": c == l.value,
                        "lg:grid-cols-3 mt-4": c == i.value,
                      },
                    ]),
                  },
                  [
                    (L(!0),
                    K(
                      Pe,
                      null,
                      Wt(
                        c,
                        (u) => (
                          L(),
                          K(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: u.title,
                              onMouseover: (d) => (a.value = u.title),
                              onMouseleave:
                                o[0] || (o[0] = (d) => (a.value = null)),
                              onClick: (d) => r.$router.push(u.link),
                              style: dl({
                                opacity:
                                  a.value === u.title || a.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              f("div", Rv, [
                                f(
                                  "img",
                                  {
                                    src: u.image,
                                    alt: u.title,
                                    class: x([
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
                                  Nv,
                                ),
                              ]),
                              f("div", null, [
                                f("div", null, [
                                  f(
                                    "div",
                                    {
                                      class: x([
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
                                      f("div", null, [
                                        f(
                                          "h5",
                                          {
                                            class: x([
                                              "text-xl m-0 p-0",
                                              s(t.brightness),
                                            ]),
                                          },
                                          Je(u.title),
                                          3,
                                        ),
                                      ]),
                                      f("div", zv, [
                                        (L(!0),
                                        K(
                                          Pe,
                                          null,
                                          Wt(
                                            u.icons,
                                            (d, p) => (
                                              L(),
                                              K(
                                                "div",
                                                {
                                                  key: p,
                                                  class: x([
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
                                                  (L(),
                                                  K("svg", _v, [
                                                    f(
                                                      "path",
                                                      { d: d.path },
                                                      null,
                                                      8,
                                                      Dv,
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
                            Bv,
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
  Hv = Zt(Fv, [["__scopeId", "data-v-4614d5aa"]]),
  Gv = {
    __name: "Home",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Welcome to josephhansen.dev",
                  -1,
                ),
                f(
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
  Vv = ["src"],
  Wv = { class: "text-inherit" },
  qv = ["src"],
  Uv = "https://bazaar.blendernation.com",
  Kv = "BlenderNation Bazaar",
  Yv = {
    __name: "Bazaar",
    setup(e) {
      const t = V([ir, rm, am, om, um]),
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
      return (l, i) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Uv,
            title: Kv,
            brightness: l.brightness,
          },
          {
            default: ae(() => [
              it(l.$slots, "default", {}, () => [
                i[3] ||
                  (i[3] = f(
                    "h3",
                    { class: "text-2xl font-semibold text-inherit" },
                    " The vision: a one-stop shop for Blender users ",
                    -1,
                  )),
                i[4] ||
                  (i[4] = f(
                    "p",
                    { class: "text-inherit" },
                    " When Bart from BlenderNation approached me with the idea for Bazaar, I was pumped. Nothing quite like Bazaar existed at the time: one central hub for Blender users to find tutorials, resources, assets, and add-ons. I was heavily involved with every step of the process of making the Bazaar come to life, and the end result is fantastic. ",
                    -1,
                  )),
                f("figure", null, [
                  f(
                    "img",
                    { src: s.planning, class: "rounded-xl" },
                    null,
                    8,
                    Vv,
                  ),
                  i[0] ||
                    (i[0] = f(
                      "figcaption",
                      null,
                      "Bazaar's planning board",
                      -1,
                    )),
                ]),
                f("p", Wv, [
                  i[2] ||
                    (i[2] = oe(
                      " With the above Figma document as a guide from Bart, I dove into both design and the backend details for managing the complex data the site would be handling. Bart wanted to do this through WordPress, and I was able to use my expertise to recommend AdvancedCustomFields to do a lot of the major data-wrangling. I also built the theme from scratch, to make sure it was as simplified and lightweight as possible while still providing beautiful, responsive, and functional results. ",
                      -1,
                    )),
                  f("figure", null, [
                    f(
                      "img",
                      { src: s.figma, class: "rounded-xl" },
                      null,
                      8,
                      qv,
                    ),
                    i[1] ||
                      (i[1] = f(
                        "figcaption",
                        null,
                        "My approved design for the Bazaar",
                        -1,
                      )),
                  ]),
                ]),
                i[5] ||
                  (i[5] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Tight deadlines and high stakes ",
                    -1,
                  )),
                i[6] ||
                  (i[6] = f(
                    "p",
                    null,
                    " When Bart approached me, there was about a month until the next Blender Conference, a massive community event that he hoped to present Bazaar at. At this point, the Bazaar was just an idea- there wasn't even a logo yet. Long story short, Bazaar launched successfully with time to spare. This project shows I can work well under pressure and with tight deadlines to achieve exactly what a client needs. ",
                    -1,
                  )),
                i[7] ||
                  (i[7] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Security: keeping the Bazaar safe ",
                    -1,
                  )),
                i[8] ||
                  (i[8] = f(
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
  Xv = "https://okcsouthstake.org",
  Jv = "OKC South Stake",
  Zv = {
    __name: "OkcSouthStake",
    setup(e) {
      const t = V([
          rr,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277285248.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277310460.webp",
        ]),
        n = V([
          "OKC South Stake homepage (light)",
          "OKC South Stake congregation subpage",
          "OKC South Stake homepage (dark)",
        ])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Xv,
            title: Jv,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
                    "p",
                    { class: "text-inherit" },
                    ' To describe this project as "massive" would be an understatement. What at first glance appears to be a simple informational website is in fact a comprehensive hub of information, resources, and tools for the members of a regional church. This site is a gigantic, sprawling, and complex project with dozens of custom tools, subdomains, features, and more. ',
                    -1,
                  )),
                l[1] ||
                  (l[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Everything in a single web app ",
                    -1,
                  )),
                l[2] ||
                  (l[2] = f(
                    "p",
                    { class: "text-inherit" },
                    " I've designed, built, and developed everything on this site. And I do mean everything. This site has congregation subpages with fully functional and collaborative calendars: ",
                    -1,
                  )),
                l[3] ||
                  (l[3] = f(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277670567.webp",
                      alt: "Example of a congregation subpage calendar",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                l[4] ||
                  (l[4] = f(
                    "p",
                    { class: "text-inherit" },
                    " This web application also has a fully functional CMS and blog system, scheduling systems, complex communication tools, an internal email system, user roles and restricted access, and more. The scope of this site is frankly staggering. If you can imagine a tool an organization might need, it's somewhere on this site. And it's all built with the same care, attention to detail, and quality that I put into every project I work on. ",
                    -1,
                  )),
                l[5] ||
                  (l[5] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Built to take a beating",
                    -1,
                  )),
                l[6] ||
                  (l[6] = f(
                    "p",
                    { class: "text-inherit" },
                    " This site is built to handle a massive amount of traffic and to be as fast as possible. I've optimized it for speed. It's fully responsive, accessible, and built with the latest technologies. It's a site that's built to last, and to be a valuable resource for the members of the church it serves. ",
                    -1,
                  )),
                l[7] ||
                  (l[7] = f(
                    "p",
                    { class: "text-inherit" },
                    " Additionally, this site has advanced security guardrails, DDoS protection, bot monitoring and filtering, extremely strong database encryption, MFA/TFA protection, and other essential security features for a large organizational website. I've extensively tested the security of this site, and I'm proud to say it's rock-solid. ",
                    -1,
                  )),
                l[8] ||
                  (l[8] = f(
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
  Qv = "https://arissearch.com//",
  e2 = "Aris Search",
  t2 = {
    __name: "ArisSearch",
    setup(e) {
      const t = V([hr, pm]),
        n = V(["Aris Search homepage", "Aris Search image effects"])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Qv,
            title: e2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
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
  n2 = "https://floorsfloors.com/",
  s2 = "Atlanta Floor One",
  l2 = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = V([ur, cm, dm, fm]),
        n = V([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: n2,
            title: s2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
                    "p",
                    { class: "text-inherit" },
                    " Atlanta Floor One needed a new website to replace their old, non-functional one. I built them a fast, clean, responsive new site using WordPress. They was extremely happy with the results. ",
                    -1,
                  )),
                l[1] ||
                  (l[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Clean and professional with an unusual color palette ",
                    -1,
                  )),
                l[2] ||
                  (l[2] = f(
                    "p",
                    { class: "text-inherit" },
                    " This site was challenging from a design perspective. Atlanta Floor One's logo colors (light green and very dark brown) look great at a small scale, but initial drafts of their site proved overwhelming. Eventually, I added a lighter brown that was more neutral and used the green as an accent color. I also relied heavily on whitespace, giving the colors room to breathe. The result is a professional and unique site. ",
                    -1,
                  )),
                l[3] ||
                  (l[3] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Parallax architectural sketch backgrounds ",
                    -1,
                  )),
                l[4] ||
                  (l[4] = f(
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
  i2 = "https://www.buildonyourlandllc.com/",
  r2 = "Build on Your Land",
  a2 = {
    __name: "BuildOnYourLand",
    setup(e) {
      const t = V([
          ar,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275933220.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275982586.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275995615.webp",
        ]),
        n = V([])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: i2,
            title: r2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
                    "p",
                    { class: "text-inherit" },
                    " Build On Your Land is one of my favorite sites I've ever built. From dynamic showroom hours developed in JavaScript, to parallax home design backgrounds, the site is full of my best work. The client needed a beautiful, responsive site, and they loved what I built for them. ",
                    -1,
                  )),
                l[1] ||
                  (l[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Dynamic showroom hours",
                    -1,
                  )),
                l[2] ||
                  (l[2] = f(
                    "p",
                    { class: "text-inherit" },
                    ' Build on Your Land wanted customers to be able to tell at a glance if the showroom was currently open. The JavaScript/PHP solution I built is simple- the hours show "Open" or "Closed" based on the current time and day- but extremely effective. They were thrilled with the result. ',
                    -1,
                  )),
                l[3] ||
                  (l[3] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Design elements",
                    -1,
                  )),
                l[4] ||
                  (l[4] = f(
                    "p",
                    { class: "text-inherit" },
                    " This site is full of design elements that make it stand out. The parallax home design sketch backgrounds add a unique touch and make the site memorable. ",
                    -1,
                  )),
                l[5] ||
                  (l[5] = f(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
                      alt: "Parallax home design sketch backgrounds",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                l[6] ||
                  (l[6] = f(
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
  o2 = "https://stehlfamilydental.com/",
  u2 = "Stuart Hose and Pipe",
  c2 = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = V([pr]),
        n = V(["Stehl Family Dental homepage"])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: o2,
            title: u2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
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
  d2 = "https://tub-boys.com/",
  f2 = "Tub Boys",
  p2 = {
    __name: "TubBoys",
    setup(e) {
      const t = V([
          fr,
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274374594.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274402279.webp",
        ]),
        n = V(["Tub Boys homepage"])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: d2,
            title: f2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
                    "p",
                    { class: "text-inherit" },
                    " Tub Boys didn't have a website, and they were hoping to expand their business through a web presence. I built them a site that exceeded their expectations and helped them grow their business. ",
                    -1,
                  )),
                l[1] ||
                  (l[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Using design to present minimal text in a compelling way ",
                    -1,
                  )),
                l[2] ||
                  (l[2] = f(
                    "p",
                    { class: "text-inherit" },
                    ' They had very little copy, so it was my task to make their site engaging and feel full with what I had to work with. I took the opporunity to use large, engaging, typography as well as swooshing lines that invoke a sense of movement. The result feels professional, while still invoking the "fun" energy the client requested. ',
                    -1,
                  )),
                l[3] ||
                  (l[3] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Image comparison sliders",
                    -1,
                  )),
                l[4] ||
                  (l[4] = f(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                l[5] ||
                  (l[5] = f(
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
  h2 = "https://stuarthose.com/",
  g2 = "Stuart Hose and Pipe",
  m2 = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = V([
          or,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275652278.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275668557.webp",
        ]),
        n = V(["Stuart Hose and Pipe homepage"])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: h2,
            title: g2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
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
  b2 = "https://swimstatepoolservice.com/",
  v2 = "Swim State Pool",
  y2 = {
    __name: "SwimStatePool",
    setup(e) {
      const t = V([cr]),
        n = V(["Swim State Pool Services homepage"])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: b2,
            title: v2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
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
  x2 = "/",
  w2 = "josephhansen.dev",
  S2 = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = V([dr]),
        n = V(["This site's homepage"])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: x2,
            title: w2,
            brightness: s.brightness,
          },
          {
            default: ae(() => [
              it(s.$slots, "default", {}, () => [
                l[0] ||
                  (l[0] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " A lightning-fast, responsive, accessible site ",
                    -1,
                  )),
                l[1] ||
                  (l[1] = f(
                    "p",
                    { class: "text-inherit" },
                    " I built this site with care and pride- it's showcasing my abilities, after all. To that end, I've optimized it for speed to the max. This site scores 99/100 on Google's Page Speed test, a score so rare it's essentially mythical. This site is also highly responsive and features five distinct color themes for perfect user satisfication (check out the header to change them!). ",
                    -1,
                  )),
                l[2] ||
                  (l[2] = f(
                    "p",
                    { class: "text-inherit" },
                    " I've built, designed, and developed every part of this site. I use Vue as the JavaScript framework, with Vite, Node.js, Express, MongoDB, and other technologies to make it not just work, but excel. All the images are served in blazing-fast, modern, formats like WebP, and the site is fully accessible, with ARIA roles and other accessibility features. ",
                    -1,
                  )),
                l[3] ||
                  (l[3] = f(
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
  C2 = "https://www.chai.org/",
  E2 = "Coalition Healthcare Artificial Intelligence",
  T2 = {
    __name: "Chai",
    setup(e) {
      const t = V([hm]),
        n = V([])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: C2,
            title: E2,
            brightness: s.brightness,
          },
          { default: ae(() => [it(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  k2 = "https://www.feedcouncil.com/",
  P2 = "FEED Council",
  I2 = {
    __name: "FeedCouncil",
    setup(e) {
      const t = V([gm]),
        n = V([])
      return (s, l) => (
        L(),
        ge(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: k2,
            title: P2,
            brightness: s.brightness,
          },
          { default: ae(() => [it(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  $2 = {
    __name: "HelpfulEditorScripts",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Helpful Editor Scripts",
                  -1,
                ),
                f(
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
  M2 = {
    __name: "Projects",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Unity Projects",
                  -1,
                ),
                f(
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
  A2 = {
    __name: "ShaderGraph",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Shader Graph",
                  -1,
                ),
                f(
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
  O2 = {
    __name: "FigRef",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f("h1", { class: "text-4xl font-bold mb-6" }, "FigRef", -1),
                f(
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
  L2 = {
    __name: "CustomWordPressThemes",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Custom WordPress Themes",
                  -1,
                ),
                f(
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
  j2 = {
    __name: "WordPressPlugins",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "WordPress Plugins",
                  -1,
                ),
                f(
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
  B2 = {
    __name: "DiscourseImageComparison",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Discourse Image Comparison Slider",
                  -1,
                ),
                f(
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
  R2 = {
    __name: "GardenTracker",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Garden Tracker",
                  -1,
                ),
                f(
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
  N2 = {
    __name: "JavaScriptSnippets",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "JavaScript Snippets",
                  -1,
                ),
                f(
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
  z2 = {
    __name: "BlenderArduinoController",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Blender Arduino Controller",
                  -1,
                ),
                f(
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
  _2 = {
    __name: "LEDs",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Arduino LEDs",
                  -1,
                ),
                f(
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
  D2 = {
    __name: "InstagramScraper",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Instagram Scraper",
                  -1,
                ),
                f(
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
  F2 = {
    __name: "ArtPortfolio",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Art Portfolio",
                  -1,
                ),
                f(
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
  H2 = {
    __name: "CustomBuild",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Custom Build (Fruitbat)",
                  -1,
                ),
                f(
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
  G2 = {
    __name: "MyAddOns",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f("h1", { class: "text-4xl font-bold mb-6" }, "My Add-Ons", -1),
                f(
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
  V2 = {
    __name: "ShadingRig",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Shading Rig + Cel Character Tools",
                  -1,
                ),
                f(
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
  W2 = {
    __name: "TechnicalBlog",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Technical Blog",
                  -1,
                ),
                f(
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
  q2 = {
    __name: "PersonalBlog",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Personal Blog",
                  -1,
                ),
                f(
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
  U2 = {
    __name: "Presentations",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f(
                  "h1",
                  { class: "text-4xl font-bold mb-6" },
                  "Presentations",
                  -1,
                ),
                f(
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
  K2 = {
    __name: "Resume",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(),
        K(
          "div",
          {
            class: x([
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
                f("h1", { class: "text-4xl font-bold mb-6" }, "Resume", -1),
                f(
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
  Y2 = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  X2 = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  J2 = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = V(1),
        n = e,
        s = (p) => {
          ;(t.value = Number(p)),
            window.localStorage.setItem("brightness", t.value)
        },
        l = {
          "okc-south-stake": Zv,
          "aris-search": t2,
          "atlanta-floor-one": l2,
          "build-on-your-land": a2,
          "stehl-family-dental": c2,
          "tub-boys": p2,
          "stuart-pipe": m2,
          "swim-state-pool": y2,
          "josephhansen-dev": S2,
          bazaar: Yv,
          chai: T2,
          "feed-council": I2,
        },
        i = {
          "helpful-editor-scripts": $2,
          "unity-projects": M2,
          "shader-graph": A2,
        },
        a = {
          figref: O2,
          "wordpress-themes": L2,
          "wordpress-plugins": j2,
          "discourse-image-comparison": B2,
          "garden-tracker": R2,
          "javascript-snippets": N2,
          "blender-arduino-controller": z2,
          "arduino-leds": _2,
          "instagram-scraper": D2,
        },
        r = {
          "art-portfolio": F2,
          fruitbat: H2,
          addons: G2,
          "shading-rig": V2,
        },
        o = { devlog: W2, blog: q2, presentations: U2 },
        c = { resume: K2 },
        u = se(() => {
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
        let p = window.localStorage
        if (
          (p.getItem("brightness")
            ? (t.value = Number(p.getItem("brightness")))
            : p.setItem("brightness", t.value),
          n.component == "pricing")
        )
          (d.title = "josephhansen.dev | web developer/designer | pricing"),
            (d.meta[1].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (d.meta[6].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (d.meta[4].content = "https://josephhansen.dev/pricing"),
            (d.meta[9].content = "https://josephhansen.dev/pricing")
        else if (n.component == "contact")
          (d.title = "josephhansen.dev | web developer/designer | contact"),
            (d.meta[1].content =
              "josephhansen.dev | web developer/designer | contact"),
            (d.meta[6].content =
              "josephhansen.dev | web developer/designer | contact"),
            (d.meta[4].content = "https://josephhansen.dev/contact"),
            (d.meta[9].content = "https://josephhansen.dev/contact")
        else if (n.component == "about")
          (d.title = "josephhansen.dev | web developer/designer | about"),
            (d.meta[1].content =
              "josephhansen.dev | web developer/designer | about"),
            (d.meta[6].content =
              "josephhansen.dev | web developer/designer | about"),
            (d.meta[4].content = "https://josephhansen.dev/about"),
            (d.meta[9].content = "https://josephhansen.dev/about")
        else if (n.component == "web-portfolio")
          (d.title =
            "josephhansen.dev | web developer/designer | web portfolio"),
            (d.meta[1].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (d.meta[6].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (d.meta[4].content = "https://josephhansen.dev/web-portfolio"),
            (d.meta[9].content = "https://josephhansen.dev/web-portfolio")
        else if (n.component == "web-services")
          (d.title = "josephhansen.dev | web developer/designer | services"),
            (d.meta[1].content =
              "josephhansen.dev | web developer/designer | services"),
            (d.meta[6].content =
              "josephhansen.dev | web developer/designer | services"),
            (d.meta[4].content = "https://josephhansen.dev/web-services"),
            (d.meta[9].content = "https://josephhansen.dev/web-services")
        else if (n.component in l) {
          let h = n.component.replace(/-/g, " ")
          ;(d.title = `josephhansen.dev | web developer/designer | ${h}`),
            (d.meta[1].content = `josephhansen.dev | web developer/designer | ${h}`),
            (d.meta[6].content = `josephhansen.dev | web developer/designer | ${h}`),
            (d.meta[4].content = `https://josephhansen.dev/web-portfolio/${n.component}`),
            (d.meta[9].content = `https://josephhansen.dev/web-portfolio/${n.component}`)
        } else if (n.component in i) {
          let h = n.component.replace(/-/g, " ")
          ;(d.title = `josephhansen.dev | unity developer | ${h}`),
            (d.meta[1].content = `josephhansen.dev | unity developer | ${h}`),
            (d.meta[6].content = `josephhansen.dev | unity developer | ${h}`),
            (d.meta[4].content = `https://josephhansen.dev/${n.component}`),
            (d.meta[9].content = `https://josephhansen.dev/${n.component}`)
        } else if (n.component in a) {
          let h = n.component.replace(/-/g, " ")
          ;(d.title = `josephhansen.dev | programmer | ${h}`),
            (d.meta[1].content = `josephhansen.dev | programmer | ${h}`),
            (d.meta[6].content = `josephhansen.dev | programmer | ${h}`),
            (d.meta[4].content = `https://josephhansen.dev/${n.component}`),
            (d.meta[9].content = `https://josephhansen.dev/${n.component}`)
        } else if (n.component in r) {
          let h = n.component.replace(/-/g, " ")
          ;(d.title = `josephhansen.dev | blender artist | ${h}`),
            (d.meta[1].content = `josephhansen.dev | blender artist | ${h}`),
            (d.meta[6].content = `josephhansen.dev | blender artist | ${h}`),
            (d.meta[4].content = `https://josephhansen.dev/${n.component}`),
            (d.meta[9].content = `https://josephhansen.dev/${n.component}`)
        } else if (n.component in o) {
          let h = n.component.replace(/-/g, " ")
          ;(d.title = `josephhansen.dev | ${h}`),
            (d.meta[1].content = `josephhansen.dev | ${h}`),
            (d.meta[6].content = `josephhansen.dev | ${h}`),
            (d.meta[4].content = `https://josephhansen.dev/${n.component}`),
            (d.meta[9].content = `https://josephhansen.dev/${n.component}`)
        } else if (n.component in c) {
          let h = n.component.replace(/-/g, " ")
          ;(d.title = `josephhansen.dev | ${h}`),
            (d.meta[1].content = `josephhansen.dev | ${h}`),
            (d.meta[6].content = `josephhansen.dev | ${h}`),
            (d.meta[4].content = `https://josephhansen.dev/${n.component}`),
            (d.meta[9].content = `https://josephhansen.dev/${n.component}`)
        }
      })
      const d = Ss({
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
          ;(document.title = d.title),
            d.meta.forEach((p) => {
              let h = document.querySelector(
                `meta[name="${p.name}"], meta[property="${p.property}"]`,
              )
              h
                ? h.setAttribute("content", p.content)
                : ((h = document.createElement("meta")),
                  p.name && h.setAttribute("name", p.name),
                  p.property && h.setAttribute("property", p.property),
                  h.setAttribute("content", p.content),
                  document.getElementsByTagName("head")[0].appendChild(h))
            })
        }),
        (p, h) => (
          L(),
          K(
            Pe,
            null,
            [
              f(
                "main",
                {
                  class: x([["w-dvw", u.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  q(ah, { "onUpdate:brightness": s }),
                  f("div", Y2, [
                    e.component == "pricing"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 0,
                            class: x([
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
                            q(mv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component == "contact"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 1,
                            class: x([
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
                            q(tc, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component == "web-portfolio"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 2,
                            class: x([
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
                            q(Hv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component == "about-me"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 3,
                            class: x([
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
                            q(Av, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component in l
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 4,
                            class: x([
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
                            (L(),
                            ge(
                              kn(l[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component in i
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 5,
                            class: x([
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
                            (L(),
                            ge(
                              kn(i[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component in a
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 6,
                            class: x([
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
                            (L(),
                            ge(
                              kn(a[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component in r
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 7,
                            class: x([
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
                            (L(),
                            ge(
                              kn(r[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component in o
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 8,
                            class: x([
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
                            (L(),
                            ge(
                              kn(o[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component in c
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 9,
                            class: x([
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
                            (L(),
                            ge(
                              kn(c[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component == "home"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 10,
                            class: x([
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
                            q(Gv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                    e.component == "web-services"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 11,
                            class: x([
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
                            q(gh, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                  ]),
                  f("div", X2, [
                    e.component == "web-services"
                      ? (L(),
                        K(
                          "div",
                          {
                            key: 0,
                            class: x([
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
                            q(Gb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                  ]),
                ],
                2,
              ),
              q(Wb, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  Z2 = Zt(J2, [["__scopeId", "data-v-d1def462"]]),
  yr = [
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
yr.map((e) => e.path)
yr.forEach((e) => {
  e.component = Z2
})
const Q2 = s0({ history: Op(), routes: yr }),
  nc = yf(Ef)
nc.use(Q2)
nc.mount("#app")
