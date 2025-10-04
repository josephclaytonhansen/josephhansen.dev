;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const l of r)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const l = {}
    return (
      r.integrity && (l.integrity = r.integrity),
      r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const l = n(r)
    fetch(r.href, l)
  }
})()
function Al(e) {
  const t = Object.create(null)
  for (const n of e.split(",")) t[n] = 1
  return (n) => n in t
}
const $e = {},
  jn = [],
  Lt = () => {},
  No = () => !1,
  ir = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ol = (e) => e.startsWith("onUpdate:"),
  Ye = Object.assign,
  Ll = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  sc = Object.prototype.hasOwnProperty,
  Ce = (e, t) => sc.call(e, t),
  ce = Array.isArray,
  Bn = (e) => or(e) === "[object Map]",
  zo = (e) => or(e) === "[object Set]",
  pe = (e) => typeof e == "function",
  Be = (e) => typeof e == "string",
  Yt = (e) => typeof e == "symbol",
  Oe = (e) => e !== null && typeof e == "object",
  Do = (e) => (Oe(e) || pe(e)) && pe(e.then) && pe(e.catch),
  Fo = Object.prototype.toString,
  or = (e) => Fo.call(e),
  rc = (e) => or(e).slice(8, -1),
  Ho = (e) => or(e) === "[object Object]",
  jl = (e) =>
    Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ss = Al(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ar = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  lc = /-\w/g,
  bt = ar((e) => e.replace(lc, (t) => t.slice(1).toUpperCase())),
  ic = /\B([A-Z])/g,
  En = ar((e) => e.replace(ic, "-$1").toLowerCase()),
  ur = ar((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Tr = ar((e) => (e ? `on${ur(e)}` : "")),
  an = (e, t) => !Object.is(e, t),
  Ns = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Go = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  cl = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Ci
const cr = () =>
  Ci ||
  (Ci =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function dr(e) {
  if (ce(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = Be(s) ? cc(s) : dr(s)
      if (r) for (const l in r) t[l] = r[l]
    }
    return t
  } else if (Be(e) || Oe(e)) return e
}
const oc = /;(?![^(]*\))/g,
  ac = /:([^]+)/,
  uc = /\/\*[^]*?\*\//g
function cc(e) {
  const t = {}
  return (
    e
      .replace(uc, "")
      .split(oc)
      .forEach((n) => {
        if (n) {
          const s = n.split(ac)
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
  fc = Al(dc)
function Vo(e) {
  return !!e || e === ""
}
const Wo = (e) => !!(e && e.__v_isRef === !0),
  Je = (e) =>
    Be(e)
      ? e
      : e == null
        ? ""
        : ce(e) || (Oe(e) && (e.toString === Fo || !pe(e.toString)))
          ? Wo(e)
            ? Je(e.value)
            : JSON.stringify(e, qo, 2)
          : String(e),
  qo = (e, t) =>
    Wo(t)
      ? qo(e, t.value)
      : Bn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], l) => ((n[kr(s, l) + " =>"] = r), n),
              {},
            ),
          }
        : zo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => kr(n)) }
          : Yt(t)
            ? kr(t)
            : Oe(t) && !ce(t) && !Ho(t)
              ? String(t)
              : t,
  kr = (e, t = "") => {
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
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function hc() {
  return st
}
let Ae
const Pr = new WeakSet()
class Uo {
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
      ((this.flags &= -65), Pr.has(this) && (Pr.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Yo(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Ei(this), Xo(this)
    const t = Ae,
      n = St
    ;(Ae = this), (St = !0)
    try {
      return this.fn()
    } finally {
      Jo(this), (Ae = t), (St = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) _l(t)
      ;(this.deps = this.depsTail = void 0),
        Ei(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Pr.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    dl(this) && this.run()
  }
  get dirty() {
    return dl(this)
  }
}
let Ko = 0,
  rs,
  ls
function Yo(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = ls), (ls = e)
    return
  }
  ;(e.next = rs), (rs = e)
}
function Bl() {
  Ko++
}
function Rl() {
  if (--Ko > 0) return
  if (ls) {
    let t = ls
    for (ls = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; rs; ) {
    let t = rs
    for (rs = void 0; t; ) {
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
function Xo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function Jo(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), _l(s), gc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function dl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Zo(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Zo(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === ds) ||
    ((e.globalVersion = ds),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !dl(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = Ae,
    s = St
  ;(Ae = e), (St = !0)
  try {
    Xo(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || an(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(Ae = n), (St = s), Jo(e), (e.flags &= -3)
  }
}
function _l(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let l = n.computed.deps; l; l = l.nextDep) _l(l, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function gc(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let St = !0
const Qo = []
function qt() {
  Qo.push(St), (St = !1)
}
function Ut() {
  const e = Qo.pop()
  St = e === void 0 ? !0 : e
}
function Ei(e) {
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
class Nl {
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
        ea(n)
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
    Bl()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Rl()
    }
  }
}
function ea(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) ea(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const fl = new WeakMap(),
  yn = Symbol(""),
  pl = Symbol(""),
  fs = Symbol("")
function qe(e, t, n) {
  if (St && Ae) {
    let s = fl.get(e)
    s || fl.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new Nl())), (r.map = s), (r.key = n)), r.track()
  }
}
function Ht(e, t, n, s, r, l) {
  const o = fl.get(e)
  if (!o) {
    ds++
    return
  }
  const i = (a) => {
    a && a.trigger()
  }
  if ((Bl(), t === "clear")) o.forEach(i)
  else {
    const a = ce(e),
      c = a && jl(n)
    if (a && n === "length") {
      const u = Number(s)
      o.forEach((d, p) => {
        ;(p === "length" || p === fs || (!Yt(p) && p >= u)) && i(d)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && i(o.get(n)), c && i(o.get(fs)), t)
      ) {
        case "add":
          a ? c && i(o.get("length")) : (i(o.get(yn)), Bn(e) && i(o.get(pl)))
          break
        case "delete":
          a || (i(o.get(yn)), Bn(e) && i(o.get(pl)))
          break
        case "set":
          Bn(e) && i(o.get(yn))
          break
      }
  }
  Rl()
}
function Tn(e) {
  const t = Se(e)
  return t === e ? t : (qe(t, "iterate", fs), mt(e) ? t : t.map(Ge))
}
function fr(e) {
  return qe((e = Se(e)), "iterate", fs), e
}
const vc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ir(this, Symbol.iterator, Ge)
  },
  concat(...e) {
    return Tn(this).concat(...e.map((t) => (ce(t) ? Tn(t) : t)))
  },
  entries() {
    return Ir(this, "entries", (e) => ((e[1] = Ge(e[1])), e))
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
    return $r(this, "includes", e)
  },
  indexOf(...e) {
    return $r(this, "indexOf", e)
  },
  join(e) {
    return Tn(this).join(e)
  },
  lastIndexOf(...e) {
    return $r(this, "lastIndexOf", e)
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
    return Ti(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return Ti(this, "reduceRight", e, t)
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
    return Ir(this, "values", Ge)
  },
}
function Ir(e, t, n) {
  const s = fr(e),
    r = s[t]()
  return (
    s !== e &&
      !mt(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const l = r._next()
        return l.done || (l.value = n(l.value)), l
      })),
    r
  )
}
const bc = Array.prototype
function Rt(e, t, n, s, r, l) {
  const o = fr(e),
    i = o !== e && !mt(e),
    a = o[t]
  if (a !== bc[t]) {
    const d = a.apply(e, l)
    return i ? Ge(d) : d
  }
  let c = n
  o !== e &&
    (i
      ? (c = function (d, p) {
          return n.call(this, Ge(d), p, e)
        })
      : n.length > 2 &&
        (c = function (d, p) {
          return n.call(this, d, p, e)
        }))
  const u = a.call(o, c, s)
  return i && r ? r(u) : u
}
function Ti(e, t, n, s) {
  const r = fr(e)
  let l = n
  return (
    r !== e &&
      (mt(e)
        ? n.length > 3 &&
          (l = function (o, i, a) {
            return n.call(this, o, i, a, e)
          })
        : (l = function (o, i, a) {
            return n.call(this, o, Ge(i), a, e)
          })),
    r[t](l, ...s)
  )
}
function $r(e, t, n) {
  const s = Se(e)
  qe(s, "iterate", fs)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Fl(n[0])
    ? ((n[0] = Se(n[0])), s[t](...n))
    : r
}
function Xn(e, t, n = []) {
  qt(), Bl()
  const s = Se(e)[t].apply(e, n)
  return Rl(), Ut(), s
}
const xc = Al("__proto__,__v_isRef,__isVue"),
  ta = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Yt),
  )
function yc(e) {
  Yt(e) || (e = String(e))
  const t = Se(this)
  return qe(t, "has", e), t.hasOwnProperty(e)
}
class na {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip
    const r = this._isReadonly,
      l = this._isShallow
    if (n === "__v_isReactive") return !r
    if (n === "__v_isReadonly") return r
    if (n === "__v_isShallow") return l
    if (n === "__v_raw")
      return s === (r ? (l ? Mc : ia) : l ? la : ra).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = ce(t)
    if (!r) {
      let a
      if (o && (a = vc[n])) return a
      if (n === "hasOwnProperty") return yc
    }
    const i = Reflect.get(t, n, Fe(t) ? t : s)
    if ((Yt(n) ? ta.has(n) : xc(n)) || (r || qe(t, "get", n), l)) return i
    if (Fe(i)) {
      const a = o && jl(n) ? i : i.value
      return r && Oe(a) ? gl(a) : a
    }
    return Oe(i) ? (r ? gl(i) : Ss(i)) : i
  }
}
class sa extends na {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let l = t[n]
    if (!this._isShallow) {
      const a = cn(l)
      if (
        (!mt(s) && !cn(s) && ((l = Se(l)), (s = Se(s))),
        !ce(t) && Fe(l) && !Fe(s))
      )
        return a || (l.value = s), !0
    }
    const o = ce(t) && jl(n) ? Number(n) < t.length : Ce(t, n),
      i = Reflect.set(t, n, s, Fe(t) ? t : r)
    return (
      t === Se(r) && (o ? an(s, l) && Ht(t, "set", n, s) : Ht(t, "add", n, s)),
      i
    )
  }
  deleteProperty(t, n) {
    const s = Ce(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && Ht(t, "delete", n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Yt(n) || !ta.has(n)) && qe(t, "has", n), s
  }
  ownKeys(t) {
    return qe(t, "iterate", ce(t) ? "length" : yn), Reflect.ownKeys(t)
  }
}
class wc extends na {
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
const Sc = new sa(),
  Cc = new wc(),
  Ec = new sa(!0)
const hl = (e) => e,
  Ps = (e) => Reflect.getPrototypeOf(e)
function Tc(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      l = Se(r),
      o = Bn(l),
      i = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      c = r[e](...s),
      u = n ? hl : t ? qs : Ge
    return (
      !t && qe(l, "iterate", a ? pl : yn),
      {
        next() {
          const { value: d, done: p } = c.next()
          return p
            ? { value: d, done: p }
            : { value: i ? [u(d[0]), u(d[1])] : u(d), done: p }
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
    get(r) {
      const l = this.__v_raw,
        o = Se(l),
        i = Se(r)
      e || (an(r, i) && qe(o, "get", r), qe(o, "get", i))
      const { has: a } = Ps(o),
        c = t ? hl : e ? qs : Ge
      if (a.call(o, r)) return c(l.get(r))
      if (a.call(o, i)) return c(l.get(i))
      l !== o && l.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && qe(Se(r), "iterate", yn), r.size
    },
    has(r) {
      const l = this.__v_raw,
        o = Se(l),
        i = Se(r)
      return (
        e || (an(r, i) && qe(o, "has", r), qe(o, "has", i)),
        r === i ? l.has(r) : l.has(r) || l.has(i)
      )
    },
    forEach(r, l) {
      const o = this,
        i = o.__v_raw,
        a = Se(i),
        c = t ? hl : e ? qs : Ge
      return (
        !e && qe(a, "iterate", yn),
        i.forEach((u, d) => r.call(l, c(u), c(d), o))
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
            add(r) {
              !t && !mt(r) && !cn(r) && (r = Se(r))
              const l = Se(this)
              return (
                Ps(l).has.call(l, r) || (l.add(r), Ht(l, "add", r, r)), this
              )
            },
            set(r, l) {
              !t && !mt(l) && !cn(l) && (l = Se(l))
              const o = Se(this),
                { has: i, get: a } = Ps(o)
              let c = i.call(o, r)
              c || ((r = Se(r)), (c = i.call(o, r)))
              const u = a.call(o, r)
              return (
                o.set(r, l),
                c ? an(l, u) && Ht(o, "set", r, l) : Ht(o, "add", r, l),
                this
              )
            },
            delete(r) {
              const l = Se(this),
                { has: o, get: i } = Ps(l)
              let a = o.call(l, r)
              a || ((r = Se(r)), (a = o.call(l, r))), i && i.call(l, r)
              const c = l.delete(r)
              return a && Ht(l, "delete", r, void 0), c
            },
            clear() {
              const r = Se(this),
                l = r.size !== 0,
                o = r.clear()
              return l && Ht(r, "clear", void 0, void 0), o
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      n[r] = Tc(r, e, t)
    }),
    n
  )
}
function zl(e, t) {
  const n = kc(e, t)
  return (s, r, l) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(Ce(n, r) && r in s ? n : s, r, l)
}
const Pc = { get: zl(!1, !1) },
  Ic = { get: zl(!1, !0) },
  $c = { get: zl(!0, !1) }
const ra = new WeakMap(),
  la = new WeakMap(),
  ia = new WeakMap(),
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ac(rc(e))
}
function Ss(e) {
  return cn(e) ? e : Dl(e, !1, Sc, Pc, ra)
}
function oa(e) {
  return Dl(e, !1, Ec, Ic, la)
}
function gl(e) {
  return Dl(e, !0, Cc, $c, ia)
}
function Dl(e, t, n, s, r) {
  if (!Oe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const l = Oc(e)
  if (l === 0) return e
  const o = r.get(e)
  if (o) return o
  const i = new Proxy(e, l === 2 ? s : n)
  return r.set(e, i), i
}
function Rn(e) {
  return cn(e) ? Rn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function cn(e) {
  return !!(e && e.__v_isReadonly)
}
function mt(e) {
  return !!(e && e.__v_isShallow)
}
function Fl(e) {
  return e ? !!e.__v_raw : !1
}
function Se(e) {
  const t = e && e.__v_raw
  return t ? Se(t) : e
}
function Lc(e) {
  return (
    !Ce(e, "__v_skip") && Object.isExtensible(e) && Go(e, "__v_skip", !0), e
  )
}
const Ge = (e) => (Oe(e) ? Ss(e) : e),
  qs = (e) => (Oe(e) ? gl(e) : e)
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1
}
function V(e) {
  return aa(e, !1)
}
function jc(e) {
  return aa(e, !0)
}
function aa(e, t) {
  return Fe(e) ? e : new Bc(e, t)
}
class Bc {
  constructor(t, n) {
    ;(this.dep = new Nl()),
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
      an(t, n) &&
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
    const r = e[t]
    return Fe(r) && !Fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function ua(e) {
  return Rn(e) ? e : new Proxy(e, Rc)
}
class _c {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Nl(this)),
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
      return Yo(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return Zo(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Nc(e, t, n = !1) {
  let s, r
  return pe(e) ? (s = e) : ((s = e.get), (r = e.set)), new _c(s, r, n)
}
const $s = {},
  Us = new WeakMap()
let xn
function zc(e, t = !1, n = xn) {
  if (n) {
    let s = Us.get(n)
    s || Us.set(n, (s = [])), s.push(e)
  }
}
function Dc(e, t, n = $e) {
  const {
      immediate: s,
      deep: r,
      once: l,
      scheduler: o,
      augmentJob: i,
      call: a,
    } = n,
    c = (S) => (r ? S : mt(S) || r === !1 || r === 0 ? Gt(S, 1) : Gt(S))
  let u,
    d,
    p,
    h,
    g = !1,
    v = !1
  if (
    (Fe(e)
      ? ((d = () => e.value), (g = mt(e)))
      : Rn(e)
        ? ((d = () => c(e)), (g = !0))
        : ce(e)
          ? ((v = !0),
            (g = e.some((S) => Rn(S) || mt(S))),
            (d = () =>
              e.map((S) => {
                if (Fe(S)) return S.value
                if (Rn(S)) return c(S)
                if (pe(S)) return a ? a(S, 2) : S()
              })))
          : pe(e)
            ? t
              ? (d = a ? () => a(e, 2) : e)
              : (d = () => {
                  if (p) {
                    qt()
                    try {
                      p()
                    } finally {
                      Ut()
                    }
                  }
                  const S = xn
                  xn = u
                  try {
                    return a ? a(e, 3, [h]) : e(h)
                  } finally {
                    xn = S
                  }
                })
            : (d = Lt),
    t && r)
  ) {
    const S = d,
      T = r === !0 ? 1 / 0 : r
    d = () => Gt(S(), T)
  }
  const k = hc(),
    w = () => {
      u.stop(), k && k.active && Ll(k.effects, u)
    }
  if (l && t) {
    const S = t
    t = (...T) => {
      S(...T), w()
    }
  }
  let m = v ? new Array(e.length).fill($s) : $s
  const b = (S) => {
    if (!(!(u.flags & 1) || (!u.dirty && !S)))
      if (t) {
        const T = u.run()
        if (r || g || (v ? T.some((M, E) => an(M, m[E])) : an(T, m))) {
          p && p()
          const M = xn
          xn = u
          try {
            const E = [T, m === $s ? void 0 : v && m[0] === $s ? [] : m, h]
            ;(m = T), a ? a(t, 3, E) : t(...E)
          } finally {
            xn = M
          }
        }
      } else u.run()
  }
  return (
    i && i(b),
    (u = new Uo(d)),
    (u.scheduler = o ? () => o(b, !1) : b),
    (h = (S) => zc(S, !1, u)),
    (p = u.onStop =
      () => {
        const S = Us.get(u)
        if (S) {
          if (a) a(S, 4)
          else for (const T of S) T()
          Us.delete(u)
        }
      }),
    t ? (s ? b(!0) : (m = u.run())) : o ? o(b.bind(null, !0), !0) : u.run(),
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
  else if (zo(e) || Bn(e))
    e.forEach((s) => {
      Gt(s, t, n)
    })
  else if (Ho(e)) {
    for (const s in e) Gt(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Gt(e[s], t, n)
  }
  return e
}
function Cs(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    pr(r, t, n)
  }
}
function Bt(e, t, n, s) {
  if (pe(e)) {
    const r = Cs(e, t, n, s)
    return (
      r &&
        Do(r) &&
        r.catch((l) => {
          pr(l, t, n)
        }),
      r
    )
  }
  if (ce(e)) {
    const r = []
    for (let l = 0; l < e.length; l++) r.push(Bt(e[l], t, n, s))
    return r
  }
}
function pr(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: l, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || $e
  if (t) {
    let i = t.parent
    const a = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; i; ) {
      const u = i.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, a, c) === !1) return
      }
      i = i.parent
    }
    if (l) {
      qt(), Cs(l, null, 10, [e, a, c]), Ut()
      return
    }
  }
  Fc(e, n, r, s, o)
}
function Fc(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const Ze = []
let Mt = -1
const _n = []
let nn = null,
  Mn = 0
const ca = Promise.resolve()
let Ks = null
function hr(e) {
  const t = Ks || ca
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Hc(e) {
  let t = Mt + 1,
    n = Ze.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Ze[s],
      l = ps(r)
    l < e || (l === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Hl(e) {
  if (!(e.flags & 1)) {
    const t = ps(e),
      n = Ze[Ze.length - 1]
    !n || (!(e.flags & 2) && t >= ps(n)) ? Ze.push(e) : Ze.splice(Hc(t), 0, e),
      (e.flags |= 1),
      da()
  }
}
function da() {
  Ks || (Ks = ca.then(pa))
}
function Gc(e) {
  ce(e)
    ? _n.push(...e)
    : nn && e.id === -1
      ? nn.splice(Mn + 1, 0, e)
      : e.flags & 1 || (_n.push(e), (e.flags |= 1)),
    da()
}
function ki(e, t, n = Mt + 1) {
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
function fa(e) {
  if (_n.length) {
    const t = [...new Set(_n)].sort((n, s) => ps(n) - ps(s))
    if (((_n.length = 0), nn)) {
      nn.push(...t)
      return
    }
    for (nn = t, Mn = 0; Mn < nn.length; Mn++) {
      const n = nn[Mn]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(nn = null), (Mn = 0)
  }
}
const ps = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function pa(e) {
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
      fa(),
      (Ks = null),
      (Ze.length || _n.length) && pa()
  }
}
let Ve = null,
  ha = null
function Ys(e) {
  const t = Ve
  return (Ve = e), (ha = (e && e.type.__scopeId) || null), t
}
function oe(e, t = Ve, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Zs(-1)
    const l = Ys(t)
    let o
    try {
      o = e(...r)
    } finally {
      Ys(l), s._d && Zs(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function ga(e, t) {
  if (Ve === null) return e
  const n = br(Ve),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [l, o, i, a = $e] = t[r]
    l &&
      (pe(l) && (l = { mounted: l, updated: l }),
      l.deep && Gt(o),
      s.push({
        dir: l,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: i,
        modifiers: a,
      }))
  }
  return e
}
function gn(e, t, n, s) {
  const r = e.dirs,
    l = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const i = r[o]
    l && (i.oldValue = l[o].value)
    let a = i.dir[s]
    a && (qt(), Bt(a, n, 8, [e.el, i, e, t]), Ut())
  }
}
const Vc = Symbol("_vte"),
  Wc = (e) => e.__isTeleport,
  qc = Symbol("_leaveCb")
function Gl(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Gl(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function ft(e, t) {
  return pe(e) ? Ye({ name: e.name }, t, { setup: e }) : e
}
function Uc() {
  const e = za()
  return e
    ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++
    : ""
}
function ma(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const Xs = new WeakMap()
function is(e, t, n, s, r = !1) {
  if (ce(e)) {
    e.forEach((g, v) => is(g, t && (ce(t) ? t[v] : t), n, s, r))
    return
  }
  if (Nn(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      is(e, t, n, s.component.subTree)
    return
  }
  const l = s.shapeFlag & 4 ? br(s.component) : s.el,
    o = r ? null : l,
    { i, r: a } = e,
    c = t && t.r,
    u = i.refs === $e ? (i.refs = {}) : i.refs,
    d = i.setupState,
    p = Se(d),
    h = d === $e ? No : (g) => Ce(p, g)
  if (c != null && c !== a) {
    if ((Pi(t), Be(c))) (u[c] = null), h(c) && (d[c] = null)
    else if (Fe(c)) {
      c.value = null
      const g = t
      g.k && (u[g.k] = null)
    }
  }
  if (pe(a)) Cs(a, i, 12, [o, u])
  else {
    const g = Be(a),
      v = Fe(a)
    if (g || v) {
      const k = () => {
        if (e.f) {
          const w = g ? (h(a) ? d[a] : u[a]) : a.value
          if (r) ce(w) && Ll(w, l)
          else if (ce(w)) w.includes(l) || w.push(l)
          else if (g) (u[a] = [l]), h(a) && (d[a] = u[a])
          else {
            const m = [l]
            ;(a.value = m), e.k && (u[e.k] = m)
          }
        } else
          g
            ? ((u[a] = o), h(a) && (d[a] = o))
            : v && ((a.value = o), e.k && (u[e.k] = o))
      }
      if (o) {
        const w = () => {
          k(), Xs.delete(e)
        }
        ;(w.id = -1), Xs.set(e, w), ot(w, n)
      } else Pi(e), k()
    }
  }
}
function Pi(e) {
  const t = Xs.get(e)
  t && ((t.flags |= 8), Xs.delete(e))
}
cr().requestIdleCallback
cr().cancelIdleCallback
const Nn = (e) => !!e.type.__asyncLoader,
  va = (e) => e.type.__isKeepAlive
function Kc(e, t) {
  ba(e, "a", t)
}
function Yc(e, t) {
  ba(e, "da", t)
}
function ba(e, t, n = Ue) {
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
  if ((gr(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) va(r.parent.vnode) && Xc(s, t, n, r), (r = r.parent)
  }
}
function Xc(e, t, n, s) {
  const r = gr(t, e, s, !0)
  dn(() => {
    Ll(s[t], r)
  }, n)
}
function gr(e, t, n = Ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...o) => {
          qt()
          const i = Es(n),
            a = Bt(t, n, e, o)
          return i(), Ut(), a
        })
    return s ? r.unshift(l) : r.push(l), l
  }
}
const Xt =
    (e) =>
    (t, n = Ue) => {
      ;(!ms || e === "sp") && gr(e, (...s) => t(...s), n)
    },
  Jc = Xt("bm"),
  We = Xt("m"),
  Vl = Xt("bu"),
  Wl = Xt("u"),
  ql = Xt("bum"),
  dn = Xt("um"),
  Zc = Xt("sp"),
  Qc = Xt("rtg"),
  ed = Xt("rtc")
function td(e, t = Ue) {
  gr("ec", e, t)
}
const Ul = "components",
  nd = "directives"
function sd(e, t) {
  return Kl(Ul, e, !0, t) || e
}
const xa = Symbol.for("v-ndc")
function kn(e) {
  return Be(e) ? Kl(Ul, e, !1) || e : e || xa
}
function rd(e) {
  return Kl(nd, e)
}
function Kl(e, t, n = !0, s = !1) {
  const r = Ve || Ue
  if (r) {
    const l = r.type
    if (e === Ul) {
      const i = qd(l, !1)
      if (i && (i === t || i === bt(t) || i === ur(bt(t)))) return l
    }
    const o = Ii(r[e] || l[e], t) || Ii(r.appContext[e], t)
    return !o && s ? l : o
  }
}
function Ii(e, t) {
  return e && (e[t] || e[bt(t)] || e[ur(bt(t))])
}
function Wt(e, t, n, s) {
  let r
  const l = n,
    o = ce(e)
  if (o || Be(e)) {
    const i = o && Rn(e)
    let a = !1,
      c = !1
    i && ((a = !mt(e)), (c = cn(e)), (e = fr(e))), (r = new Array(e.length))
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(a ? (c ? qs(Ge(e[u])) : Ge(e[u])) : e[u], u, void 0, l)
  } else if (typeof e == "number") {
    r = new Array(e)
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, l)
  } else if (Oe(e))
    if (e[Symbol.iterator]) r = Array.from(e, (i, a) => t(i, a, void 0, l))
    else {
      const i = Object.keys(e)
      r = new Array(i.length)
      for (let a = 0, c = i.length; a < c; a++) {
        const u = i[a]
        r[a] = t(e[u], u, a, l)
      }
    }
  else r = []
  return r
}
function lt(e, t, n = {}, s, r) {
  if (Ve.ce || (Ve.parent && Nn(Ve.parent) && Ve.parent.ce)) {
    const c = Object.keys(n).length > 0
    return L(), he(Pe, null, [U("slot", n, s && s())], c ? -2 : 64)
  }
  let l = e[t]
  l && l._c && (l._d = !1), L()
  const o = l && ya(l(n)),
    i = n.key || (o && o.key),
    a = he(
      Pe,
      { key: (i && !Yt(i) ? i : `_${t}`) + (!o && s ? "_fb" : "") },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    l && l._c && (l._d = !0),
    a
  )
}
function ya(e) {
  return e.some((t) =>
    gs(t) ? !(t.type === Kt || (t.type === Pe && !ya(t.children))) : !0,
  )
    ? e
    : null
}
const ml = (e) => (e ? (Da(e) ? br(e) : ml(e.parent)) : null),
  os = Ye(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ml(e.parent),
    $root: (e) => ml(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sa(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Hl(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = hr.bind(e.proxy)),
    $watch: (e) => Td.bind(e),
  }),
  Mr = (e, t) => e !== $e && !e.__isScriptSetup && Ce(e, t),
  ld = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: l,
        accessCache: o,
        type: i,
        appContext: a,
      } = e
      let c
      if (t[0] !== "$") {
        const h = o[t]
        if (h !== void 0)
          switch (h) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return l[t]
          }
        else {
          if (Mr(s, t)) return (o[t] = 1), s[t]
          if (r !== $e && Ce(r, t)) return (o[t] = 2), r[t]
          if ((c = e.propsOptions[0]) && Ce(c, t)) return (o[t] = 3), l[t]
          if (n !== $e && Ce(n, t)) return (o[t] = 4), n[t]
          vl && (o[t] = 0)
        }
      }
      const u = os[t]
      let d, p
      if (u) return t === "$attrs" && qe(e.attrs, "get", ""), u(e)
      if ((d = i.__cssModules) && (d = d[t])) return d
      if (n !== $e && Ce(n, t)) return (o[t] = 4), n[t]
      if (((p = a.config.globalProperties), Ce(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: l } = e
      return Mr(r, t)
        ? ((r[t] = n), !0)
        : s !== $e && Ce(s, t)
          ? ((s[t] = n), !0)
          : Ce(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((l[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: l,
          type: o,
        },
      },
      i,
    ) {
      let a, c
      return !!(
        n[i] ||
        (e !== $e && i[0] !== "$" && Ce(e, i)) ||
        Mr(t, i) ||
        ((a = l[0]) && Ce(a, i)) ||
        Ce(s, i) ||
        Ce(os, i) ||
        Ce(r.config.globalProperties, i) ||
        ((c = o.__cssModules) && c[i])
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
function $i(e) {
  return ce(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let vl = !0
function id(e) {
  const t = Sa(e),
    n = e.proxy,
    s = e.ctx
  ;(vl = !1), t.beforeCreate && Mi(t.beforeCreate, e, "bc")
  const {
    data: r,
    computed: l,
    methods: o,
    watch: i,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: h,
    updated: g,
    activated: v,
    deactivated: k,
    beforeDestroy: w,
    beforeUnmount: m,
    destroyed: b,
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
  if ((c && od(c, s, null), o))
    for (const N in o) {
      const B = o[N]
      pe(B) && (s[N] = B.bind(n))
    }
  if (r) {
    const N = r.call(n, n)
    Oe(N) && (e.data = Ss(N))
  }
  if (((vl = !0), l))
    for (const N in l) {
      const B = l[N],
        xe = pe(B) ? B.bind(n, n) : pe(B.get) ? B.get.bind(n, n) : Lt,
        me = !pe(B) && pe(B.set) ? B.set.bind(n) : Lt,
        Le = se({ get: xe, set: me })
      Object.defineProperty(s, N, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (je) => (Le.value = je),
      })
    }
  if (i) for (const N in i) wa(i[N], s, n, N)
  if (a) {
    const N = pe(a) ? a.call(n) : a
    Reflect.ownKeys(N).forEach((B) => {
      vt(B, N[B])
    })
  }
  u && Mi(u, e, "c")
  function O(N, B) {
    ce(B) ? B.forEach((xe) => N(xe.bind(n))) : B && N(B.bind(n))
  }
  if (
    (O(Jc, d),
    O(We, p),
    O(Vl, h),
    O(Wl, g),
    O(Kc, v),
    O(Yc, k),
    O(td, A),
    O(ed, M),
    O(Qc, E),
    O(ql, m),
    O(dn, S),
    O(Zc, I),
    ce($))
  )
    if ($.length) {
      const N = e.exposed || (e.exposed = {})
      $.forEach((B) => {
        Object.defineProperty(N, B, {
          get: () => n[B],
          set: (xe) => (n[B] = xe),
          enumerable: !0,
        })
      })
    } else e.exposed || (e.exposed = {})
  T && e.render === Lt && (e.render = T),
    j != null && (e.inheritAttrs = j),
    F && (e.components = F),
    W && (e.directives = W),
    I && ma(e)
}
function od(e, t, n = Lt) {
  ce(e) && (e = bl(e))
  for (const s in e) {
    const r = e[s]
    let l
    Oe(r)
      ? "default" in r
        ? (l = Ne(r.from || s, r.default, !0))
        : (l = Ne(r.from || s))
      : (l = Ne(r)),
      Fe(l)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (o) => (l.value = o),
          })
        : (t[s] = l)
  }
}
function Mi(e, t, n) {
  Bt(ce(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function wa(e, t, n, s) {
  let r = s.includes(".") ? ja(n, s) : () => n[s]
  if (Be(e)) {
    const l = t[e]
    pe(l) && un(r, l)
  } else if (pe(e)) un(r, e.bind(n))
  else if (Oe(e))
    if (ce(e)) e.forEach((l) => wa(l, t, n, s))
    else {
      const l = pe(e.handler) ? e.handler.bind(n) : t[e.handler]
      pe(l) && un(r, l, e)
    }
}
function Sa(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: l,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    i = l.get(t)
  let a
  return (
    i
      ? (a = i)
      : !r.length && !n && !s
        ? (a = t)
        : ((a = {}),
          r.length && r.forEach((c) => Js(a, c, o, !0)),
          Js(a, t, o)),
    Oe(t) && l.set(t, a),
    a
  )
}
function Js(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t
  l && Js(e, l, n, !0), r && r.forEach((o) => Js(e, o, n, !0))
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = ad[o] || (n && n[o])
      e[o] = i ? i(e[o], t[o]) : t[o]
    }
  return e
}
const ad = {
  data: Ai,
  props: Oi,
  emits: Oi,
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
  provide: Ai,
  inject: ud,
}
function Ai(e, t) {
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
  return ns(bl(e), bl(t))
}
function bl(e) {
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
function Oi(e, t) {
  return e
    ? ce(e) && ce(t)
      ? [...new Set([...e, ...t])]
      : Ye(Object.create(null), $i(e), $i(t ?? {}))
    : t
}
function cd(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Ye(Object.create(null), e)
  for (const s in t) n[s] = Xe(e[s], t[s])
  return n
}
function Ca() {
  return {
    app: null,
    config: {
      isNativeTag: No,
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
  return function (s, r = null) {
    pe(s) || (s = Ye({}, s)), r != null && !Oe(r) && (r = null)
    const l = Ca(),
      o = new WeakSet(),
      i = []
    let a = !1
    const c = (l.app = {
      _uid: dd++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: Kd,
      get config() {
        return l.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          o.has(u) ||
            (u && pe(u.install)
              ? (o.add(u), u.install(c, ...d))
              : pe(u) && (o.add(u), u(c, ...d))),
          c
        )
      },
      mixin(u) {
        return l.mixins.includes(u) || l.mixins.push(u), c
      },
      component(u, d) {
        return d ? ((l.components[u] = d), c) : l.components[u]
      },
      directive(u, d) {
        return d ? ((l.directives[u] = d), c) : l.directives[u]
      },
      mount(u, d, p) {
        if (!a) {
          const h = c._ceVNode || U(s, r)
          return (
            (h.appContext = l),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            e(h, u, p),
            (a = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            br(h.component)
          )
        }
      },
      onUnmount(u) {
        i.push(u)
      },
      unmount() {
        a &&
          (Bt(i, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__)
      },
      provide(u, d) {
        return (l.provides[u] = d), c
      },
      runWithContext(u) {
        const d = zn
        zn = c
        try {
          return u()
        } finally {
          zn = d
        }
      },
    })
    return c
  }
}
let zn = null
function vt(e, t) {
  if (Ue) {
    let n = Ue.provides
    const s = Ue.parent && Ue.parent.provides
    s === n && (n = Ue.provides = Object.create(s)), (n[e] = t)
  }
}
function Ne(e, t, n = !1) {
  const s = za()
  if (s || zn) {
    let r = zn
      ? zn._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && pe(t) ? t.call(s && s.proxy) : t
  }
}
const Ea = {},
  Ta = () => Object.create(Ea),
  ka = (e) => Object.getPrototypeOf(e) === Ea
function pd(e, t, n, s = !1) {
  const r = {},
    l = Ta()
  ;(e.propsDefaults = Object.create(null)), Pa(e, t, r, l)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : oa(r)) : e.type.props ? (e.props = r) : (e.props = l),
    (e.attrs = l)
}
function hd(e, t, n, s) {
  const {
      props: r,
      attrs: l,
      vnode: { patchFlag: o },
    } = e,
    i = Se(r),
    [a] = e.propsOptions
  let c = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let p = u[d]
        if (mr(e.emitsOptions, p)) continue
        const h = t[p]
        if (a)
          if (Ce(l, p)) h !== l[p] && ((l[p] = h), (c = !0))
          else {
            const g = bt(p)
            r[g] = xl(a, i, g, h, e, !1)
          }
        else h !== l[p] && ((l[p] = h), (c = !0))
      }
    }
  } else {
    Pa(e, t, r, l) && (c = !0)
    let u
    for (const d in i)
      (!t || (!Ce(t, d) && ((u = En(d)) === d || !Ce(t, u)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (r[d] = xl(a, i, d, void 0, e, !0))
          : delete r[d])
    if (l !== i) for (const d in l) (!t || !Ce(t, d)) && (delete l[d], (c = !0))
  }
  c && Ht(e.attrs, "set", "")
}
function Pa(e, t, n, s) {
  const [r, l] = e.propsOptions
  let o = !1,
    i
  if (t)
    for (let a in t) {
      if (ss(a)) continue
      const c = t[a]
      let u
      r && Ce(r, (u = bt(a)))
        ? !l || !l.includes(u)
          ? (n[u] = c)
          : ((i || (i = {}))[u] = c)
        : mr(e.emitsOptions, a) ||
          ((!(a in s) || c !== s[a]) && ((s[a] = c), (o = !0)))
    }
  if (l) {
    const a = Se(n),
      c = i || $e
    for (let u = 0; u < l.length; u++) {
      const d = l[u]
      n[d] = xl(r, a, d, c[d], e, !Ce(c, d))
    }
  }
  return o
}
function xl(e, t, n, s, r, l) {
  const o = e[n]
  if (o != null) {
    const i = Ce(o, "default")
    if (i && s === void 0) {
      const a = o.default
      if (o.type !== Function && !o.skipFactory && pe(a)) {
        const { propsDefaults: c } = r
        if (n in c) s = c[n]
        else {
          const u = Es(r)
          ;(s = c[n] = a.call(null, t)), u()
        }
      } else s = a
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (l && !i ? (s = !1) : o[1] && (s === "" || s === En(n)) && (s = !0))
  }
  return s
}
const gd = new WeakMap()
function Ia(e, t, n = !1) {
  const s = n ? gd : t.propsCache,
    r = s.get(e)
  if (r) return r
  const l = e.props,
    o = {},
    i = []
  let a = !1
  if (!pe(e)) {
    const u = (d) => {
      a = !0
      const [p, h] = Ia(d, t, !0)
      Ye(o, p), h && i.push(...h)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!l && !a) return Oe(e) && s.set(e, jn), jn
  if (ce(l))
    for (let u = 0; u < l.length; u++) {
      const d = bt(l[u])
      Li(d) && (o[d] = $e)
    }
  else if (l)
    for (const u in l) {
      const d = bt(u)
      if (Li(d)) {
        const p = l[u],
          h = (o[d] = ce(p) || pe(p) ? { type: p } : Ye({}, p)),
          g = h.type
        let v = !1,
          k = !0
        if (ce(g))
          for (let w = 0; w < g.length; ++w) {
            const m = g[w],
              b = pe(m) && m.name
            if (b === "Boolean") {
              v = !0
              break
            } else b === "String" && (k = !1)
          }
        else v = pe(g) && g.name === "Boolean"
        ;(h[0] = v), (h[1] = k), (v || Ce(h, "default")) && i.push(d)
      }
    }
  const c = [o, i]
  return Oe(e) && s.set(e, c), c
}
function Li(e) {
  return e[0] !== "$" && !ss(e)
}
const Yl = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Xl = (e) => (ce(e) ? e.map(At) : [At(e)]),
  md = (e, t, n) => {
    if (t._n) return t
    const s = oe((...r) => Xl(t(...r)), n)
    return (s._c = !1), s
  },
  $a = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Yl(r)) continue
      const l = e[r]
      if (pe(l)) t[r] = md(r, l, s)
      else if (l != null) {
        const o = Xl(l)
        t[r] = () => o
      }
    }
  },
  Ma = (e, t) => {
    const n = Xl(t)
    e.slots.default = () => n
  },
  Aa = (e, t, n) => {
    for (const s in t) (n || !Yl(s)) && (e[s] = t[s])
  },
  vd = (e, t, n) => {
    const s = (e.slots = Ta())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Aa(s, t, n), n && Go(s, "_", r, !0)) : $a(t, s)
    } else t && Ma(e, t)
  },
  bd = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let l = !0,
      o = $e
    if (s.shapeFlag & 32) {
      const i = t._
      i
        ? n && i === 1
          ? (l = !1)
          : Aa(r, t, n)
        : ((l = !t.$stable), $a(t, r)),
        (o = t)
    } else t && (Ma(e, t), (o = { default: 1 }))
    if (l) for (const i in r) !Yl(i) && o[i] == null && delete r[i]
  },
  ot = Ld
function xd(e) {
  return yd(e)
}
function yd(e, t) {
  const n = cr()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: l,
      createElement: o,
      createText: i,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: p,
      setScopeId: h = Lt,
      insertStaticContent: g,
    } = e,
    v = (
      y,
      C,
      P,
      z = null,
      D = null,
      _ = null,
      J = void 0,
      Y = null,
      q = !!C.dynamicChildren,
    ) => {
      if (y === C) return
      y && !Jn(y, C) && ((z = R(y)), je(y, D, _, !0), (y = null)),
        C.patchFlag === -2 && ((q = !1), (C.dynamicChildren = null))
      const { type: H, ref: le, shapeFlag: Q } = C
      switch (H) {
        case vr:
          k(y, C, P, z)
          break
        case Kt:
          w(y, C, P, z)
          break
        case zs:
          y == null && m(C, P, z, J)
          break
        case Pe:
          F(y, C, P, z, D, _, J, Y, q)
          break
        default:
          Q & 1
            ? T(y, C, P, z, D, _, J, Y, q)
            : Q & 6
              ? W(y, C, P, z, D, _, J, Y, q)
              : (Q & 64 || Q & 128) && H.process(y, C, P, z, D, _, J, Y, q, ne)
      }
      le != null && D
        ? is(le, y && y.ref, _, C || y, !C)
        : le == null && y && y.ref != null && is(y.ref, null, _, y, !0)
    },
    k = (y, C, P, z) => {
      if (y == null) s((C.el = i(C.children)), P, z)
      else {
        const D = (C.el = y.el)
        C.children !== y.children && c(D, C.children)
      }
    },
    w = (y, C, P, z) => {
      y == null ? s((C.el = a(C.children || "")), P, z) : (C.el = y.el)
    },
    m = (y, C, P, z) => {
      ;[y.el, y.anchor] = g(y.children, C, P, z, y.el, y.anchor)
    },
    b = ({ el: y, anchor: C }, P, z) => {
      let D
      for (; y && y !== C; ) (D = p(y)), s(y, P, z), (y = D)
      s(C, P, z)
    },
    S = ({ el: y, anchor: C }) => {
      let P
      for (; y && y !== C; ) (P = p(y)), r(y), (y = P)
      r(C)
    },
    T = (y, C, P, z, D, _, J, Y, q) => {
      C.type === "svg" ? (J = "svg") : C.type === "math" && (J = "mathml"),
        y == null ? M(C, P, z, D, _, J, Y, q) : I(y, C, D, _, J, Y, q)
    },
    M = (y, C, P, z, D, _, J, Y) => {
      let q, H
      const { props: le, shapeFlag: Q, transition: re, dirs: ue } = y
      if (
        ((q = y.el = o(y.type, _, le && le.is, le)),
        Q & 8
          ? u(q, y.children)
          : Q & 16 && A(y.children, q, null, z, D, Ar(y, _), J, Y),
        ue && gn(y, null, z, "created"),
        E(q, y, y.scopeId, J, z),
        le)
      ) {
        for (const Me in le)
          Me !== "value" && !ss(Me) && l(q, Me, null, le[Me], _, z)
        "value" in le && l(q, "value", null, le.value, _),
          (H = le.onVnodeBeforeMount) && It(H, z, y)
      }
      ue && gn(y, null, z, "beforeMount")
      const ye = wd(D, re)
      ye && re.beforeEnter(q),
        s(q, C, P),
        ((H = le && le.onVnodeMounted) || ye || ue) &&
          ot(() => {
            H && It(H, z, y), ye && re.enter(q), ue && gn(y, null, z, "mounted")
          }, D)
    },
    E = (y, C, P, z, D) => {
      if ((P && h(y, P), z)) for (let _ = 0; _ < z.length; _++) h(y, z[_])
      if (D) {
        let _ = D.subTree
        if (
          C === _ ||
          (Ra(_.type) && (_.ssContent === C || _.ssFallback === C))
        ) {
          const J = D.vnode
          E(y, J, J.scopeId, J.slotScopeIds, D.parent)
        }
      }
    },
    A = (y, C, P, z, D, _, J, Y, q = 0) => {
      for (let H = q; H < y.length; H++) {
        const le = (y[H] = Y ? sn(y[H]) : At(y[H]))
        v(null, le, C, P, z, D, _, J, Y)
      }
    },
    I = (y, C, P, z, D, _, J) => {
      const Y = (C.el = y.el)
      let { patchFlag: q, dynamicChildren: H, dirs: le } = C
      q |= y.patchFlag & 16
      const Q = y.props || $e,
        re = C.props || $e
      let ue
      if (
        (P && mn(P, !1),
        (ue = re.onVnodeBeforeUpdate) && It(ue, P, C, y),
        le && gn(C, y, P, "beforeUpdate"),
        P && mn(P, !0),
        ((Q.innerHTML && re.innerHTML == null) ||
          (Q.textContent && re.textContent == null)) &&
          u(Y, ""),
        H
          ? $(y.dynamicChildren, H, Y, P, z, Ar(C, D), _)
          : J || B(y, C, Y, null, P, z, Ar(C, D), _, !1),
        q > 0)
      ) {
        if (q & 16) j(Y, Q, re, P, D)
        else if (
          (q & 2 && Q.class !== re.class && l(Y, "class", null, re.class, D),
          q & 4 && l(Y, "style", Q.style, re.style, D),
          q & 8)
        ) {
          const ye = C.dynamicProps
          for (let Me = 0; Me < ye.length; Me++) {
            const Te = ye[Me],
              tt = Q[Te],
              nt = re[Te]
            ;(nt !== tt || Te === "value") && l(Y, Te, tt, nt, D, P)
          }
        }
        q & 1 && y.children !== C.children && u(Y, C.children)
      } else !J && H == null && j(Y, Q, re, P, D)
      ;((ue = re.onVnodeUpdated) || le) &&
        ot(() => {
          ue && It(ue, P, C, y), le && gn(C, y, P, "updated")
        }, z)
    },
    $ = (y, C, P, z, D, _, J) => {
      for (let Y = 0; Y < C.length; Y++) {
        const q = y[Y],
          H = C[Y],
          le =
            q.el && (q.type === Pe || !Jn(q, H) || q.shapeFlag & 198)
              ? d(q.el)
              : P
        v(q, H, le, null, z, D, _, J, !0)
      }
    },
    j = (y, C, P, z, D) => {
      if (C !== P) {
        if (C !== $e)
          for (const _ in C) !ss(_) && !(_ in P) && l(y, _, C[_], null, D, z)
        for (const _ in P) {
          if (ss(_)) continue
          const J = P[_],
            Y = C[_]
          J !== Y && _ !== "value" && l(y, _, Y, J, D, z)
        }
        "value" in P && l(y, "value", C.value, P.value, D)
      }
    },
    F = (y, C, P, z, D, _, J, Y, q) => {
      const H = (C.el = y ? y.el : i("")),
        le = (C.anchor = y ? y.anchor : i(""))
      let { patchFlag: Q, dynamicChildren: re, slotScopeIds: ue } = C
      ue && (Y = Y ? Y.concat(ue) : ue),
        y == null
          ? (s(H, P, z), s(le, P, z), A(C.children || [], P, le, D, _, J, Y, q))
          : Q > 0 && Q & 64 && re && y.dynamicChildren
            ? ($(y.dynamicChildren, re, P, D, _, J, Y),
              (C.key != null || (D && C === D.subTree)) && Oa(y, C, !0))
            : B(y, C, P, le, D, _, J, Y, q)
    },
    W = (y, C, P, z, D, _, J, Y, q) => {
      ;(C.slotScopeIds = Y),
        y == null
          ? C.shapeFlag & 512
            ? D.ctx.activate(C, P, z, J, q)
            : de(C, P, z, D, _, J, q)
          : ge(y, C, q)
    },
    de = (y, C, P, z, D, _, J) => {
      const Y = (y.component = Fd(y, z, D))
      if ((va(y) && (Y.ctx.renderer = ne), Hd(Y, !1, J), Y.asyncDep)) {
        if ((D && D.registerDep(Y, O, J), !y.el)) {
          const q = (Y.subTree = U(Kt))
          w(null, q, C, P), (y.placeholder = q.el)
        }
      } else O(Y, y, C, P, D, _, J)
    },
    ge = (y, C, P) => {
      const z = (C.component = y.component)
      if (Ad(y, C, P))
        if (z.asyncDep && !z.asyncResolved) {
          N(z, C, P)
          return
        } else (z.next = C), z.update()
      else (C.el = y.el), (z.vnode = C)
    },
    O = (y, C, P, z, D, _, J) => {
      const Y = () => {
        if (y.isMounted) {
          let { next: Q, bu: re, u: ue, parent: ye, vnode: Me } = y
          {
            const kt = La(y)
            if (kt) {
              Q && ((Q.el = Me.el), N(y, Q, J)),
                kt.asyncDep.then(() => {
                  y.isUnmounted || Y()
                })
              return
            }
          }
          let Te = Q,
            tt
          mn(y, !1),
            Q ? ((Q.el = Me.el), N(y, Q, J)) : (Q = Me),
            re && Ns(re),
            (tt = Q.props && Q.props.onVnodeBeforeUpdate) && It(tt, ye, Q, Me),
            mn(y, !0)
          const nt = Bi(y),
            Tt = y.subTree
          ;(y.subTree = nt),
            v(Tt, nt, d(Tt.el), R(Tt), y, D, _),
            (Q.el = nt.el),
            Te === null && Od(y, nt.el),
            ue && ot(ue, D),
            (tt = Q.props && Q.props.onVnodeUpdated) &&
              ot(() => It(tt, ye, Q, Me), D)
        } else {
          let Q
          const { el: re, props: ue } = C,
            { bm: ye, m: Me, parent: Te, root: tt, type: nt } = y,
            Tt = Nn(C)
          mn(y, !1),
            ye && Ns(ye),
            !Tt && (Q = ue && ue.onVnodeBeforeMount) && It(Q, Te, C),
            mn(y, !0)
          {
            tt.ce && tt.ce._def.shadowRoot !== !1 && tt.ce._injectChildStyle(nt)
            const kt = (y.subTree = Bi(y))
            v(null, kt, P, z, y, D, _), (C.el = kt.el)
          }
          if ((Me && ot(Me, D), !Tt && (Q = ue && ue.onVnodeMounted))) {
            const kt = C
            ot(() => It(Q, Te, kt), D)
          }
          ;(C.shapeFlag & 256 ||
            (Te && Nn(Te.vnode) && Te.vnode.shapeFlag & 256)) &&
            y.a &&
            ot(y.a, D),
            (y.isMounted = !0),
            (C = P = z = null)
        }
      }
      y.scope.on()
      const q = (y.effect = new Uo(Y))
      y.scope.off()
      const H = (y.update = q.run.bind(q)),
        le = (y.job = q.runIfDirty.bind(q))
      ;(le.i = y), (le.id = y.uid), (q.scheduler = () => Hl(le)), mn(y, !0), H()
    },
    N = (y, C, P) => {
      C.component = y
      const z = y.vnode.props
      ;(y.vnode = C),
        (y.next = null),
        hd(y, C.props, z, P),
        bd(y, C.children, P),
        qt(),
        ki(y),
        Ut()
    },
    B = (y, C, P, z, D, _, J, Y, q = !1) => {
      const H = y && y.children,
        le = y ? y.shapeFlag : 0,
        Q = C.children,
        { patchFlag: re, shapeFlag: ue } = C
      if (re > 0) {
        if (re & 128) {
          me(H, Q, P, z, D, _, J, Y, q)
          return
        } else if (re & 256) {
          xe(H, Q, P, z, D, _, J, Y, q)
          return
        }
      }
      ue & 8
        ? (le & 16 && et(H, D, _), Q !== H && u(P, Q))
        : le & 16
          ? ue & 16
            ? me(H, Q, P, z, D, _, J, Y, q)
            : et(H, D, _, !0)
          : (le & 8 && u(P, ""), ue & 16 && A(Q, P, z, D, _, J, Y, q))
    },
    xe = (y, C, P, z, D, _, J, Y, q) => {
      ;(y = y || jn), (C = C || jn)
      const H = y.length,
        le = C.length,
        Q = Math.min(H, le)
      let re
      for (re = 0; re < Q; re++) {
        const ue = (C[re] = q ? sn(C[re]) : At(C[re]))
        v(y[re], ue, P, null, D, _, J, Y, q)
      }
      H > le ? et(y, D, _, !0, !1, Q) : A(C, P, z, D, _, J, Y, q, Q)
    },
    me = (y, C, P, z, D, _, J, Y, q) => {
      let H = 0
      const le = C.length
      let Q = y.length - 1,
        re = le - 1
      for (; H <= Q && H <= re; ) {
        const ue = y[H],
          ye = (C[H] = q ? sn(C[H]) : At(C[H]))
        if (Jn(ue, ye)) v(ue, ye, P, null, D, _, J, Y, q)
        else break
        H++
      }
      for (; H <= Q && H <= re; ) {
        const ue = y[Q],
          ye = (C[re] = q ? sn(C[re]) : At(C[re]))
        if (Jn(ue, ye)) v(ue, ye, P, null, D, _, J, Y, q)
        else break
        Q--, re--
      }
      if (H > Q) {
        if (H <= re) {
          const ue = re + 1,
            ye = ue < le ? C[ue].el : z
          for (; H <= re; )
            v(null, (C[H] = q ? sn(C[H]) : At(C[H])), P, ye, D, _, J, Y, q), H++
        }
      } else if (H > re) for (; H <= Q; ) je(y[H], D, _, !0), H++
      else {
        const ue = H,
          ye = H,
          Me = new Map()
        for (H = ye; H <= re; H++) {
          const it = (C[H] = q ? sn(C[H]) : At(C[H]))
          it.key != null && Me.set(it.key, H)
        }
        let Te,
          tt = 0
        const nt = re - ye + 1
        let Tt = !1,
          kt = 0
        const Yn = new Array(nt)
        for (H = 0; H < nt; H++) Yn[H] = 0
        for (H = ue; H <= Q; H++) {
          const it = y[H]
          if (tt >= nt) {
            je(it, D, _, !0)
            continue
          }
          let Pt
          if (it.key != null) Pt = Me.get(it.key)
          else
            for (Te = ye; Te <= re; Te++)
              if (Yn[Te - ye] === 0 && Jn(it, C[Te])) {
                Pt = Te
                break
              }
          Pt === void 0
            ? je(it, D, _, !0)
            : ((Yn[Pt - ye] = H + 1),
              Pt >= kt ? (kt = Pt) : (Tt = !0),
              v(it, C[Pt], P, null, D, _, J, Y, q),
              tt++)
        }
        const yi = Tt ? Sd(Yn) : jn
        for (Te = yi.length - 1, H = nt - 1; H >= 0; H--) {
          const it = ye + H,
            Pt = C[it],
            wi = C[it + 1],
            Si = it + 1 < le ? wi.el || wi.placeholder : z
          Yn[H] === 0
            ? v(null, Pt, P, Si, D, _, J, Y, q)
            : Tt && (Te < 0 || H !== yi[Te] ? Le(Pt, P, Si, 2) : Te--)
        }
      }
    },
    Le = (y, C, P, z, D = null) => {
      const { el: _, type: J, transition: Y, children: q, shapeFlag: H } = y
      if (H & 6) {
        Le(y.component.subTree, C, P, z)
        return
      }
      if (H & 128) {
        y.suspense.move(C, P, z)
        return
      }
      if (H & 64) {
        J.move(y, C, P, ne)
        return
      }
      if (J === Pe) {
        s(_, C, P)
        for (let Q = 0; Q < q.length; Q++) Le(q[Q], C, P, z)
        s(y.anchor, C, P)
        return
      }
      if (J === zs) {
        b(y, C, P)
        return
      }
      if (z !== 2 && H & 1 && Y)
        if (z === 0) Y.beforeEnter(_), s(_, C, P), ot(() => Y.enter(_), D)
        else {
          const { leave: Q, delayLeave: re, afterLeave: ue } = Y,
            ye = () => {
              y.ctx.isUnmounted ? r(_) : s(_, C, P)
            },
            Me = () => {
              _._isLeaving && _[qc](!0),
                Q(_, () => {
                  ye(), ue && ue()
                })
            }
          re ? re(_, ye, Me) : Me()
        }
      else s(_, C, P)
    },
    je = (y, C, P, z = !1, D = !1) => {
      const {
        type: _,
        props: J,
        ref: Y,
        children: q,
        dynamicChildren: H,
        shapeFlag: le,
        patchFlag: Q,
        dirs: re,
        cacheIndex: ue,
      } = y
      if (
        (Q === -2 && (D = !1),
        Y != null && (qt(), is(Y, null, P, y, !0), Ut()),
        ue != null && (C.renderCache[ue] = void 0),
        le & 256)
      ) {
        C.ctx.deactivate(y)
        return
      }
      const ye = le & 1 && re,
        Me = !Nn(y)
      let Te
      if ((Me && (Te = J && J.onVnodeBeforeUnmount) && It(Te, C, y), le & 6))
        gt(y.component, P, z)
      else {
        if (le & 128) {
          y.suspense.unmount(P, z)
          return
        }
        ye && gn(y, null, C, "beforeUnmount"),
          le & 64
            ? y.type.remove(y, C, P, ne, z)
            : H && !H.hasOnce && (_ !== Pe || (Q > 0 && Q & 64))
              ? et(H, C, P, !1, !0)
              : ((_ === Pe && Q & 384) || (!D && le & 16)) && et(q, C, P),
          z && ht(y)
      }
      ;((Me && (Te = J && J.onVnodeUnmounted)) || ye) &&
        ot(() => {
          Te && It(Te, C, y), ye && gn(y, null, C, "unmounted")
        }, P)
    },
    ht = (y) => {
      const { type: C, el: P, anchor: z, transition: D } = y
      if (C === Pe) {
        Qt(P, z)
        return
      }
      if (C === zs) {
        S(y)
        return
      }
      const _ = () => {
        r(P), D && !D.persisted && D.afterLeave && D.afterLeave()
      }
      if (y.shapeFlag & 1 && D && !D.persisted) {
        const { leave: J, delayLeave: Y } = D,
          q = () => J(P, _)
        Y ? Y(y.el, _, q) : q()
      } else _()
    },
    Qt = (y, C) => {
      let P
      for (; y !== C; ) (P = p(y)), r(y), (y = P)
      r(C)
    },
    gt = (y, C, P) => {
      const { bum: z, scope: D, job: _, subTree: J, um: Y, m: q, a: H } = y
      ji(q),
        ji(H),
        z && Ns(z),
        D.stop(),
        _ && ((_.flags |= 8), je(J, y, C, P)),
        Y && ot(Y, C),
        ot(() => {
          y.isUnmounted = !0
        }, C)
    },
    et = (y, C, P, z = !1, D = !1, _ = 0) => {
      for (let J = _; J < y.length; J++) je(y[J], C, P, z, D)
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
        : v(C._vnode || null, y, C, null, null, null, P),
        (C._vnode = y),
        ee || ((ee = !0), ki(), fa(), (ee = !1))
    },
    ne = {
      p: v,
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
function Ar({ type: e, props: t }, n) {
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
function Oa(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (ce(s) && ce(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l]
      let i = r[l]
      i.shapeFlag & 1 &&
        !i.dynamicChildren &&
        ((i.patchFlag <= 0 || i.patchFlag === 32) &&
          ((i = r[l] = sn(r[l])), (i.el = o.el)),
        !n && i.patchFlag !== -2 && Oa(o, i)),
        i.type === vr && i.patchFlag !== -1 && (i.el = o.el),
        i.type === Kt && !i.el && (i.el = o.el)
    }
}
function Sd(e) {
  const t = e.slice(),
    n = [0]
  let s, r, l, o, i
  const a = e.length
  for (s = 0; s < a; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((r = n[n.length - 1]), e[r] < c)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (l = 0, o = n.length - 1; l < o; )
        (i = (l + o) >> 1), e[n[i]] < c ? (l = i + 1) : (o = i)
      c < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), (n[l] = s))
    }
  }
  for (l = n.length, o = n[l - 1]; l-- > 0; ) (n[l] = o), (o = t[o])
  return n
}
function La(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : La(t)
}
function ji(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Cd = Symbol.for("v-scx"),
  Ed = () => Ne(Cd)
function Jt(e, t) {
  return Jl(e, null, t)
}
function un(e, t, n) {
  return Jl(e, t, n)
}
function Jl(e, t, n = $e) {
  const { immediate: s, deep: r, flush: l, once: o } = n,
    i = Ye({}, n),
    a = (t && s) || (!t && l !== "post")
  let c
  if (ms) {
    if (l === "sync") {
      const h = Ed()
      c = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!a) {
      const h = () => {}
      return (h.stop = Lt), (h.resume = Lt), (h.pause = Lt), h
    }
  }
  const u = Ue
  i.call = (h, g, v) => Bt(h, u, g, v)
  let d = !1
  l === "post"
    ? (i.scheduler = (h) => {
        ot(h, u && u.suspense)
      })
    : l !== "sync" &&
      ((d = !0),
      (i.scheduler = (h, g) => {
        g ? h() : Hl(h)
      })),
    (i.augmentJob = (h) => {
      t && (h.flags |= 4),
        d && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u)))
    })
  const p = Dc(e, t, i)
  return ms && (c ? c.push(p) : a && p()), p
}
function Td(e, t, n) {
  const s = this.proxy,
    r = Be(e) ? (e.includes(".") ? ja(s, e) : () => s[e]) : e.bind(s, s)
  let l
  pe(t) ? (l = t) : ((l = t.handler), (n = t))
  const o = Es(this),
    i = Jl(r, l.bind(s), n)
  return o(), i
}
function ja(e, t) {
  const n = t.split(".")
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const kd = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${bt(t)}Modifiers`] || e[`${En(t)}Modifiers`]
function Pd(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || $e
  let r = n
  const l = t.startsWith("update:"),
    o = l && kd(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((u) => (Be(u) ? u.trim() : u))),
    o.number && (r = n.map(cl)))
  let i,
    a = s[(i = Tr(t))] || s[(i = Tr(bt(t)))]
  !a && l && (a = s[(i = Tr(En(t)))]), a && Bt(a, e, 6, r)
  const c = s[i + "Once"]
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[i]) return
    ;(e.emitted[i] = !0), Bt(c, e, 6, r)
  }
}
const Id = new WeakMap()
function Ba(e, t, n = !1) {
  const s = n ? Id : t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const l = e.emits
  let o = {},
    i = !1
  if (!pe(e)) {
    const a = (c) => {
      const u = Ba(c, t, !0)
      u && ((i = !0), Ye(o, u))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !l && !i
    ? (Oe(e) && s.set(e, null), null)
    : (ce(l) ? l.forEach((a) => (o[a] = null)) : Ye(o, l),
      Oe(e) && s.set(e, o),
      o)
}
function mr(e, t) {
  return !e || !ir(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, En(t)) || Ce(e, t))
}
function Bi(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [l],
      slots: o,
      attrs: i,
      emit: a,
      render: c,
      renderCache: u,
      props: d,
      data: p,
      setupState: h,
      ctx: g,
      inheritAttrs: v,
    } = e,
    k = Ys(e)
  let w, m
  try {
    if (n.shapeFlag & 4) {
      const S = r || s,
        T = S
      ;(w = At(c.call(T, S, u, d, h, p, g))), (m = i)
    } else {
      const S = t
      ;(w = At(
        S.length > 1 ? S(d, { attrs: i, slots: o, emit: a }) : S(d, null),
      )),
        (m = t.props ? i : $d(i))
    }
  } catch (S) {
    ;(as.length = 0), pr(S, e, 1), (w = U(Kt))
  }
  let b = w
  if (m && v !== !1) {
    const S = Object.keys(m),
      { shapeFlag: T } = b
    S.length &&
      T & 7 &&
      (l && S.some(Ol) && (m = Md(m, l)), (b = Sn(b, m, !1, !0)))
  }
  return (
    n.dirs &&
      ((b = Sn(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Gl(b, n.transition),
    (w = b),
    Ys(k),
    w
  )
}
const $d = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || ir(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Md = (e, t) => {
    const n = {}
    for (const s in e) (!Ol(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Ad(e, t, n) {
  const { props: s, children: r, component: l } = e,
    { props: o, children: i, patchFlag: a } = t,
    c = l.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return s ? Ri(s, o, c) : !!o
    if (a & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const p = u[d]
        if (o[p] !== s[p] && !mr(c, p)) return !0
      }
    }
  } else
    return (r || i) && (!i || !i.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? Ri(s, o, c)
            : !0
          : !!o
  return !1
}
function Ri(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const l = s[r]
    if (t[l] !== e[l] && !mr(n, l)) return !0
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
const Ra = (e) => e.__isSuspense
function Ld(e, t) {
  t && t.pendingBranch
    ? ce(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Gc(e)
}
const Pe = Symbol.for("v-fgt"),
  vr = Symbol.for("v-txt"),
  Kt = Symbol.for("v-cmt"),
  zs = Symbol.for("v-stc"),
  as = []
let ct = null
function L(e = !1) {
  as.push((ct = e ? null : []))
}
function jd() {
  as.pop(), (ct = as[as.length - 1] || null)
}
let hs = 1
function Zs(e, t = !1) {
  ;(hs += e), e < 0 && ct && t && (ct.hasOnce = !0)
}
function _a(e) {
  return (
    (e.dynamicChildren = hs > 0 ? ct || jn : null),
    jd(),
    hs > 0 && ct && ct.push(e),
    e
  )
}
function K(e, t, n, s, r, l) {
  return _a(f(e, t, n, s, r, l, !0))
}
function he(e, t, n, s, r) {
  return _a(U(e, t, n, s, r, !0))
}
function gs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Jn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Na = ({ key: e }) => e ?? null,
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
  r = null,
  l = e === Pe ? 0 : 1,
  o = !1,
  i = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Na(t),
    ref: t && Ds(t),
    scopeId: ha,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ve,
  }
  return (
    i
      ? (Zl(a, n), l & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Be(n) ? 8 : 16),
    hs > 0 &&
      !o &&
      ct &&
      (a.patchFlag > 0 || l & 6) &&
      a.patchFlag !== 32 &&
      ct.push(a),
    a
  )
}
const U = Bd
function Bd(e, t = null, n = null, s = 0, r = null, l = !1) {
  if (((!e || e === xa) && (e = Kt), gs(e))) {
    const i = Sn(e, t, !0)
    return (
      n && Zl(i, n),
      hs > 0 &&
        !l &&
        ct &&
        (i.shapeFlag & 6 ? (ct[ct.indexOf(e)] = i) : ct.push(i)),
      (i.patchFlag = -2),
      i
    )
  }
  if ((Ud(e) && (e = e.__vccOpts), t)) {
    t = Rd(t)
    let { class: i, style: a } = t
    i && !Be(i) && (t.class = x(i)),
      Oe(a) && (Fl(a) && !ce(a) && (a = Ye({}, a)), (t.style = dr(a)))
  }
  const o = Be(e) ? 1 : Ra(e) ? 128 : Wc(e) ? 64 : Oe(e) ? 4 : pe(e) ? 2 : 0
  return f(e, t, n, s, r, o, l, !0)
}
function Rd(e) {
  return e ? (Fl(e) || ka(e) ? Ye({}, e) : e) : null
}
function Sn(e, t, n = !1, s = !1) {
  const { props: r, ref: l, patchFlag: o, children: i, transition: a } = e,
    c = t ? Nd(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Na(c),
      ref:
        t && t.ref
          ? n && l
            ? ce(l)
              ? l.concat(Ds(t))
              : [l, Ds(t)]
            : Ds(t)
          : l,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: i,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Pe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
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
  return a && s && Gl(u, a.clone(u)), u
}
function ae(e = " ", t = 0) {
  return U(vr, null, e, t)
}
function _d(e, t) {
  const n = U(zs, null, e)
  return (n.staticCount = t), n
}
function ke(e = "", t = !1) {
  return t ? (L(), he(Kt, null, e)) : U(Kt, null, e)
}
function At(e) {
  return e == null || typeof e == "boolean"
    ? U(Kt)
    : ce(e)
      ? U(Pe, null, e.slice())
      : gs(e)
        ? sn(e)
        : U(vr, null, String(e))
}
function sn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Sn(e)
}
function Zl(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (ce(t)) n = 16
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Zl(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ka(t)
        ? (t._ctx = Ve)
        : r === 3 &&
          Ve &&
          (Ve.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    pe(t)
      ? ((t = { default: t, _ctx: Ve }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ae(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Nd(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = x([t.class, s.class]))
      else if (r === "style") t.style = dr([t.style, s.style])
      else if (ir(r)) {
        const l = t[r],
          o = s[r]
        o &&
          l !== o &&
          !(ce(l) && l.includes(o)) &&
          (t[r] = l ? [].concat(l, o) : o)
      } else r !== "" && (t[r] = s[r])
  }
  return t
}
function It(e, t, n, s = null) {
  Bt(e, t, 7, [n, s])
}
const zd = Ca()
let Dd = 0
function Fd(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || zd,
    l = {
      uid: Dd++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
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
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ia(s, r),
      emitsOptions: Ba(s, r),
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
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = Pd.bind(null, l)),
    e.ce && e.ce(l),
    l
  )
}
let Ue = null
const za = () => Ue || Ve
let Qs, yl
{
  const e = cr(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (l) => {
          r.length > 1 ? r.forEach((o) => o(l)) : r[0](l)
        }
      )
    }
  ;(Qs = t("__VUE_INSTANCE_SETTERS__", (n) => (Ue = n))),
    (yl = t("__VUE_SSR_SETTERS__", (n) => (ms = n)))
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
  _i = () => {
    Ue && Ue.scope.off(), Qs(null)
  }
function Da(e) {
  return e.vnode.shapeFlag & 4
}
let ms = !1
function Hd(e, t = !1, n = !1) {
  t && yl(t)
  const { props: s, children: r } = e.vnode,
    l = Da(e)
  pd(e, s, l, t), vd(e, r, n || t)
  const o = l ? Gd(e, t) : void 0
  return t && yl(!1), o
}
function Gd(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ld))
  const { setup: s } = n
  if (s) {
    qt()
    const r = (e.setupContext = s.length > 1 ? Wd(e) : null),
      l = Es(e),
      o = Cs(s, e, 0, [e.props, r]),
      i = Do(o)
    if ((Ut(), l(), (i || e.sp) && !Nn(e) && ma(e), i)) {
      if ((o.then(_i, _i), t))
        return o
          .then((a) => {
            Ni(e, a)
          })
          .catch((a) => {
            pr(a, e, 0)
          })
      e.asyncDep = o
    } else Ni(e, o)
  } else Fa(e)
}
function Ni(e, t, n) {
  pe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Oe(t) && (e.setupState = ua(t)),
    Fa(e)
}
function Fa(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || Lt)
  {
    const r = Es(e)
    qt()
    try {
      id(e)
    } finally {
      Ut(), r()
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
function br(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ua(Lc(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in os) return os[n](e)
          },
          has(t, n) {
            return n in t || n in os
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
const se = (e, t) => Nc(e, t, ms)
function Ee(e, t, n) {
  try {
    Zs(-1)
    const s = arguments.length
    return s === 2
      ? Oe(t) && !ce(t)
        ? gs(t)
          ? U(e, null, [t])
          : U(e, t)
        : U(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && gs(n) && (n = [n]),
        U(e, t, n))
  } finally {
    Zs(1)
  }
}
const Kd = "3.5.22"
let wl
const zi = typeof window < "u" && window.trustedTypes
if (zi)
  try {
    wl = zi.createPolicy("vue", { createHTML: (e) => e })
  } catch {}
const Ha = wl ? (e) => wl.createHTML(e) : (e) => e,
  Yd = "http://www.w3.org/2000/svg",
  Xd = "http://www.w3.org/1998/Math/MathML",
  Dt = typeof document < "u" ? document : null,
  Di = Dt && Dt.createElement("template"),
  Jd = {
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
          r.setAttribute("multiple", s.multiple),
        r
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
    insertStaticContent(e, t, n, s, r, l) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === l || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === l || !(r = r.nextSibling));

        );
      else {
        Di.innerHTML = Ha(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e,
        )
        const i = Di.content
        if (s === "svg" || s === "mathml") {
          const a = i.firstChild
          for (; a.firstChild; ) i.appendChild(a.firstChild)
          i.removeChild(a)
        }
        t.insertBefore(i, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
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
const Fi = Symbol("_vod"),
  ef = Symbol("_vsh"),
  tf = Symbol(""),
  nf = /(?:^|;)\s*display\s*:/
function sf(e, t, n) {
  const s = e.style,
    r = Be(n)
  let l = !1
  if (n && !r) {
    if (t)
      if (Be(t))
        for (const o of t.split(";")) {
          const i = o.slice(0, o.indexOf(":")).trim()
          n[i] == null && Fs(s, i, "")
        }
      else for (const o in t) n[o] == null && Fs(s, o, "")
    for (const o in n) o === "display" && (l = !0), Fs(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[tf]
      o && (n += ";" + o), (s.cssText = n), (l = nf.test(n))
    }
  } else t && e.removeAttribute("style")
  Fi in e && ((e[Fi] = l ? s.display : ""), e[ef] && (s.display = "none"))
}
const Hi = /\s*!important$/
function Fs(e, t, n) {
  if (ce(n)) n.forEach((s) => Fs(e, t, s))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const s = rf(e, t)
    Hi.test(n)
      ? e.setProperty(En(s), n.replace(Hi, ""), "important")
      : (e[s] = n)
  }
}
const Gi = ["Webkit", "Moz", "ms"],
  Or = {}
function rf(e, t) {
  const n = Or[t]
  if (n) return n
  let s = bt(t)
  if (s !== "filter" && s in e) return (Or[t] = s)
  s = ur(s)
  for (let r = 0; r < Gi.length; r++) {
    const l = Gi[r] + s
    if (l in e) return (Or[t] = l)
  }
  return t
}
const Vi = "http://www.w3.org/1999/xlink"
function Wi(e, t, n, s, r, l = fc(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Vi, t.slice(6, t.length))
      : e.setAttributeNS(Vi, t, n)
    : n == null || (l && !Vo(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? "" : Yt(n) ? String(n) : n)
}
function qi(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ha(n) : n)
    return
  }
  const l = e.tagName
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const i = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n)
    ;(i !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === "" || n == null) {
    const i = typeof e[t]
    i === "boolean"
      ? (n = Vo(n))
      : n == null && i === "string"
        ? ((n = ""), (o = !0))
        : i === "number" && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function An(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function lf(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Ui = Symbol("_vei")
function of(e, t, n, s, r = null) {
  const l = e[Ui] || (e[Ui] = {}),
    o = l[t]
  if (s && o) o.value = s
  else {
    const [i, a] = af(t)
    if (s) {
      const c = (l[t] = df(s, r))
      An(e, i, c, a)
    } else o && (lf(e, i, o, a), (l[t] = void 0))
  }
}
const Ki = /(?:Once|Passive|Capture)$/
function af(e) {
  let t
  if (Ki.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Ki)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : En(e.slice(2)), t]
}
let Lr = 0
const uf = Promise.resolve(),
  cf = () => Lr || (uf.then(() => (Lr = 0)), (Lr = Date.now()))
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
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Yi = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  pf = (e, t, n, s, r, l) => {
    const o = r === "svg"
    t === "class"
      ? Qd(e, s, o)
      : t === "style"
        ? sf(e, n, s)
        : ir(t)
          ? Ol(t) || of(e, t, n, s, l)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : hf(e, t, s, o)
              )
            ? (qi(e, t, s),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Wi(e, t, s, o, l, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Be(s))
              ? qi(e, bt(t), s, l, t)
              : (t === "true-value"
                  ? (e._trueValue = s)
                  : t === "false-value" && (e._falseValue = s),
                Wi(e, t, s, o))
  }
function hf(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Yi(t) && pe(n))
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
    const r = e.tagName
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1
  }
  return Yi(t) && Be(n) ? !1 : t in e
}
const Xi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return ce(t) ? (n) => Ns(t, n) : t
}
function gf(e) {
  e.target.composing = !0
}
function Ji(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const jr = Symbol("_assign"),
  mf = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[jr] = Xi(r)
      const l = s || (r.props && r.props.type === "number")
      An(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return
        let i = e.value
        n && (i = i.trim()), l && (i = cl(i)), e[jr](i)
      }),
        n &&
          An(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (An(e, "compositionstart", gf),
          An(e, "compositionend", Ji),
          An(e, "change", Ji))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: l } },
      o,
    ) {
      if (((e[jr] = Xi(o)), e.composing)) return
      const i =
          (l || e.type === "number") && !/^0\d/.test(e.value)
            ? cl(e.value)
            : e.value,
        a = t ?? ""
      i !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (r && e.value.trim() === a))) ||
          (e.value = a))
    },
  },
  vf = Ye({ patchProp: pf }, Jd)
let Zi
function bf() {
  return Zi || (Zi = xd(vf))
}
const xf = (...e) => {
  const t = bf().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = wf(s)
      if (!r) return
      const l = t._component
      !pe(l) && !l.render && !l.template && (l.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "")
      const o = n(r, !1, yf(r))
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
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
const fn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Sf = {}
function Cf(e, t) {
  const n = sd("router-view")
  return L(), he(n)
}
const Ef = fn(Sf, [["render", Cf]])
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
var Qi
let kf = Symbol("headlessui.useid"),
  Pf = 0
const wn =
  (Qi = Uc) != null
    ? Qi
    : function () {
        return Ne(kf, () => `${++Pf}`)()
      }
function te(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function dt(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(s, dt), s)
}
var If = Object.defineProperty,
  $f = (e, t, n) =>
    t in e
      ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  eo = (e, t, n) => ($f(e, typeof t != "symbol" ? t + "" : t, n), n)
let Mf = class {
    constructor() {
      eo(this, "current", this.detect()), eo(this, "currentId", 0)
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
  xr = new Mf()
function Un(e) {
  if (xr.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = te(e)
    if (t) return t.ownerDocument
  }
  return document
}
let Sl = [
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
var _e = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(_e || {}),
  ln = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(ln || {}),
  Af = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Af || {})
function yr(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Sl)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var Ql = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Ql || {})
function Ga(e, t = 0) {
  var n
  return e === ((n = Un(e)) == null ? void 0 : n.body)
    ? !1
    : dt(t, {
        0() {
          return e.matches(Sl)
        },
        1() {
          let s = e
          for (; s !== null; ) {
            if (s.matches(Sl)) return !0
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
    let r = t(n),
      l = t(s)
    if (r === null || l === null) return 0
    let o = r.compareDocumentPosition(l)
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
  })
}
function ut(
  e,
  t,
  { sorted: n = !0, relativeTo: s = null, skipElements: r = [] } = {},
) {
  var l
  let o =
      (l = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e?.ownerDocument) != null
        ? l
        : document,
    i = Array.isArray(e) ? (n ? On(e) : e) : yr(e)
  r.length > 0 && i.length > 1 && (i = i.filter((g) => !r.includes(g))),
    (s = s ?? o.activeElement)
  let a = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    c = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, i.indexOf(s)) - 1
      if (t & 4) return Math.max(0, i.indexOf(s)) + 1
      if (t & 8) return i.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = i.length,
    h
  do {
    if (d >= p || d + p <= 0) return 0
    let g = c + d
    if (t & 16) g = (g + p) % p
    else {
      if (g < 0) return 3
      if (g >= p) return 1
    }
    ;(h = i[g]), h?.focus(u), (d += a)
  } while (h !== o.activeElement)
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
function _f() {
  return Bf() || Rf()
}
function Ms(e, t, n) {
  xr.isServer ||
    Jt((s) => {
      document.addEventListener(e, t, n),
        s(() => document.removeEventListener(e, t, n))
    })
}
function Va(e, t, n) {
  xr.isServer ||
    Jt((s) => {
      window.addEventListener(e, t, n),
        s(() => window.removeEventListener(e, t, n))
    })
}
function Nf(e, t, n = se(() => !0)) {
  function s(l, o) {
    if (!n.value || l.defaultPrevented) return
    let i = o(l)
    if (i === null || !i.getRootNode().contains(i)) return
    let a = (function c(u) {
      return typeof u == "function"
        ? c(u())
        : Array.isArray(u) || u instanceof Set
          ? u
          : [u]
    })(e)
    for (let c of a) {
      if (c === null) continue
      let u = c instanceof HTMLElement ? c : te(c)
      if (
        (u != null && u.contains(i)) ||
        (l.composed && l.composedPath().includes(u))
      )
        return
    }
    return !Ga(i, Ql.Loose) && i.tabIndex !== -1 && l.preventDefault(), t(l, i)
  }
  let r = V(null)
  Ms(
    "pointerdown",
    (l) => {
      var o, i
      n.value &&
        (r.value =
          ((i = (o = l.composedPath) == null ? void 0 : o.call(l)) == null
            ? void 0
            : i[0]) || l.target)
    },
    !0,
  ),
    Ms(
      "mousedown",
      (l) => {
        var o, i
        n.value &&
          (r.value =
            ((i = (o = l.composedPath) == null ? void 0 : o.call(l)) == null
              ? void 0
              : i[0]) || l.target)
      },
      !0,
    ),
    Ms(
      "click",
      (l) => {
        _f() || (r.value && (s(l, () => r.value), (r.value = null)))
      },
      !0,
    ),
    Ms(
      "touchend",
      (l) => s(l, () => (l.target instanceof HTMLElement ? l.target : null)),
      !0,
    ),
    Va(
      "blur",
      (l) =>
        s(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    )
}
function to(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Wa(e, t) {
  let n = V(to(e.value.type, e.value.as))
  return (
    We(() => {
      n.value = to(e.value.type, e.value.as)
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
var vs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(vs || {}),
  zf = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(zf || {})
function Zt({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: s,
  ...r
}) {
  var l
  let o = Ua(s, n),
    i = Object.assign(r, { props: o })
  if (e || (t & 2 && o.static)) return Br(i)
  if (t & 1) {
    let a = (l = o.unmount) == null || l ? 0 : 1
    return dt(a, {
      0() {
        return null
      },
      1() {
        return Br({
          ...r,
          props: { ...o, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Br(i)
}
function Br({ props: e, attrs: t, slots: n, slot: s, name: r }) {
  var l, o
  let { as: i, ...a } = Ka(e, ["unmount", "static"]),
    c = (l = n.default) == null ? void 0 : l.call(n, s),
    u = {}
  if (s) {
    let d = !1,
      p = []
    for (let [h, g] of Object.entries(s))
      typeof g == "boolean" && (d = !0), g === !0 && p.push(h)
    d && (u["data-headlessui-state"] = p.join(" "))
  }
  if (i === "template") {
    if (
      ((c = qa(c ?? [])),
      Object.keys(a).length > 0 || Object.keys(t).length > 0)
    ) {
      let [d, ...p] = c ?? []
      if (!Df(d) || p.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${r} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(a)
              .concat(Object.keys(t))
              .map((v) => v.trim())
              .filter((v, k, w) => w.indexOf(v) === k)
              .sort((v, k) => v.localeCompare(k))
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
      let h = Ua((o = d.props) != null ? o : {}, a, u),
        g = Sn(d, h, !0)
      for (let v in h)
        v.startsWith("on") && (g.props || (g.props = {}), (g.props[v] = h[v]))
      return g
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c
  }
  return Ee(i, Object.assign({}, a, u), { default: () => c })
}
function qa(e) {
  return e.flatMap((t) => (t.type === Pe ? qa(t.children) : [t]))
}
function Ua(...e) {
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
      [s](r, ...l) {
        let o = n[s]
        for (let i of o) {
          if (r instanceof Event && r.defaultPrevented) return
          i(r, ...l)
        }
      },
    })
  return t
}
function Ka(e, t = []) {
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
        let { features: r, ...l } = e,
          o = {
            "aria-hidden":
              (r & 2) === 2 ? !0 : (s = l["aria-hidden"]) != null ? s : void 0,
            hidden: (r & 4) === 4 ? !0 : void 0,
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
        return Zt({
          ourProps: o,
          theirProps: l,
          slot: {},
          attrs: n,
          slots: t,
          name: "Hidden",
        })
      }
    },
  }),
  Ya = Symbol("Context")
var bs = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(bs || {})
function Ff() {
  return Ne(Ya, null)
}
function Hf(e) {
  vt(Ya, e)
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
function Gf(e, t, n, s) {
  xr.isServer ||
    Jt((r) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, s),
        r(() => e.removeEventListener(t, n, s))
    })
}
var Vt = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Vt || {})
function Xa() {
  let e = V(0)
  return (
    Va("keydown", (t) => {
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
    r = Un(s)
  function l() {
    var o, i, a
    let c = []
    for (let u of e)
      u !== null &&
        (u instanceof HTMLElement
          ? c.push(u)
          : "value" in u && u.value instanceof HTMLElement && c.push(u.value))
    if (t != null && t.value) for (let u of t.value) c.push(u)
    for (let u of (o = r?.querySelectorAll("html > *, body > *")) != null
      ? o
      : [])
      u !== document.body &&
        u !== document.head &&
        u instanceof HTMLElement &&
        u.id !== "headlessui-portal-root" &&
        (u.contains(te(s)) ||
          u.contains(
            (a = (i = te(s)) == null ? void 0 : i.getRootNode()) == null
              ? void 0
              : a.host,
          ) ||
          c.some((d) => u.contains(d)) ||
          c.push(u))
    return c
  }
  return {
    resolveContainers: l,
    contains(o) {
      return l().some((i) => i.contains(o))
    },
    mainTreeNodeRef: s,
    MainTreeNode() {
      return n != null ? null : Ee(Gn, { features: Hn.Hidden, ref: s })
    },
  }
}
let no = Symbol("PortalParentContext")
function Wf() {
  let e = Ne(no, null),
    t = V([])
  function n(l) {
    return t.value.push(l), e && e.register(l), () => s(l)
  }
  function s(l) {
    let o = t.value.indexOf(l)
    o !== -1 && t.value.splice(o, 1), e && e.unregister(l)
  }
  let r = { register: n, unregister: s, portals: t }
  return [
    t,
    ft({
      name: "PortalWrapper",
      setup(l, { slots: o }) {
        return (
          vt(no, r),
          () => {
            var i
            return (i = o.default) == null ? void 0 : i.call(o)
          }
        )
      },
    }),
  ]
}
var qf = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(qf || {})
let Ja = Symbol("PopoverContext")
function ei(e) {
  let t = Ne(Ja, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${tn.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ei), n)
  }
  return t
}
let Uf = Symbol("PopoverGroupContext")
function Za() {
  return Ne(Uf, null)
}
let Qa = Symbol("PopoverPanelContext")
function Kf() {
  return Ne(Qa, null)
}
let tn = ft({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: s }) {
      var r
      let l = V(null)
      s({ el: l, $el: l })
      let o = V(1),
        i = V(null),
        a = V(null),
        c = V(null),
        u = V(null),
        d = se(() => Un(l)),
        p = se(() => {
          var T, M
          if (!te(i) || !te(u)) return !1
          for (let W of document.querySelectorAll("body > *"))
            if (Number(W?.contains(te(i))) ^ Number(W?.contains(te(u))))
              return !0
          let E = yr(),
            A = E.indexOf(te(i)),
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
          popoverState: o,
          buttonId: V(null),
          panelId: V(null),
          panel: u,
          button: i,
          isPortalled: p,
          beforePanelSentinel: a,
          afterPanelSentinel: c,
          togglePopover() {
            o.value = dt(o.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            o.value !== 1 && (o.value = 1)
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
      vt(Ja, h), Hf(se(() => dt(o.value, { 0: bs.Open, 1: bs.Closed })))
      let g = {
          buttonId: h.buttonId,
          panelId: h.panelId,
          close() {
            h.closePopover()
          },
        },
        v = Za(),
        k = v?.registerPopover,
        [w, m] = Wf(),
        b = Vf({
          mainTreeNodeRef: v?.mainTreeNodeRef,
          portals: w,
          defaultContainers: [i, u],
        })
      function S() {
        var T, M, E, A
        return (A = v?.isFocusWithinPopoverGroup()) != null
          ? A
          : ((T = d.value) == null ? void 0 : T.activeElement) &&
              (((M = te(i)) == null
                ? void 0
                : M.contains(d.value.activeElement)) ||
                ((E = te(u)) == null
                  ? void 0
                  : E.contains(d.value.activeElement)))
      }
      return (
        Jt(() => k?.(g)),
        Gf(
          (r = d.value) == null ? void 0 : r.defaultView,
          "focus",
          (T) => {
            var M, E
            T.target !== window &&
              T.target instanceof HTMLElement &&
              o.value === 0 &&
              (S() ||
                (i &&
                  u &&
                  (b.contains(T.target) ||
                    ((M = te(h.beforePanelSentinel)) != null &&
                      M.contains(T.target)) ||
                    ((E = te(h.afterPanelSentinel)) != null &&
                      E.contains(T.target)) ||
                    h.closePopover())))
          },
          !0,
        ),
        Nf(
          b.resolveContainers,
          (T, M) => {
            var E
            h.closePopover(),
              Ga(M, Ql.Loose) ||
                (T.preventDefault(), (E = te(i)) == null || E.focus())
          },
          se(() => o.value === 0),
        ),
        () => {
          let T = { open: o.value === 0, close: h.close }
          return Ee(Pe, [
            Ee(m, {}, () =>
              Zt({
                theirProps: { ...e, ...n },
                ourProps: { ref: l },
                slot: T,
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
  vn = ft({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      var r
      let l = (r = e.id) != null ? r : `headlessui-popover-button-${wn()}`,
        o = ei("PopoverButton"),
        i = se(() => Un(o.button))
      s({ el: o.button, $el: o.button }),
        We(() => {
          o.buttonId.value = l
        }),
        dn(() => {
          o.buttonId.value = null
        })
      let a = Za(),
        c = a?.closeOthers,
        u = Kf(),
        d = se(() => (u === null ? !1 : u.value === o.panelId.value)),
        p = V(null),
        h = `headlessui-focus-sentinel-${wn()}`
      d.value ||
        Jt(() => {
          o.button.value = te(p)
        })
      let g = Wa(
        se(() => ({ as: e.as, type: t.type })),
        p,
      )
      function v(T) {
        var M, E, A, I, $
        if (d.value) {
          if (o.popoverState.value === 1) return
          switch (T.key) {
            case ze.Space:
            case ze.Enter:
              T.preventDefault(),
                (E = (M = T.target).click) == null || E.call(M),
                o.closePopover(),
                (A = te(o.button)) == null || A.focus()
              break
          }
        } else
          switch (T.key) {
            case ze.Space:
            case ze.Enter:
              T.preventDefault(),
                T.stopPropagation(),
                o.popoverState.value === 1 && c?.(o.buttonId.value),
                o.togglePopover()
              break
            case ze.Escape:
              if (o.popoverState.value !== 0) return c?.(o.buttonId.value)
              if (
                !te(o.button) ||
                ((I = i.value) != null &&
                  I.activeElement &&
                  !(
                    ($ = te(o.button)) != null &&
                    $.contains(i.value.activeElement)
                  ))
              )
                return
              T.preventDefault(), T.stopPropagation(), o.closePopover()
              break
          }
      }
      function k(T) {
        d.value || (T.key === ze.Space && T.preventDefault())
      }
      function w(T) {
        var M, E
        e.disabled ||
          (d.value
            ? (o.closePopover(), (M = te(o.button)) == null || M.focus())
            : (T.preventDefault(),
              T.stopPropagation(),
              o.popoverState.value === 1 && c?.(o.buttonId.value),
              o.togglePopover(),
              (E = te(o.button)) == null || E.focus()))
      }
      function m(T) {
        T.preventDefault(), T.stopPropagation()
      }
      let b = Xa()
      function S() {
        let T = te(o.panel)
        if (!T) return
        function M() {
          dt(b.value, {
            [Vt.Forwards]: () => ut(T, _e.First),
            [Vt.Backwards]: () => ut(T, _e.Last),
          }) === ln.Error &&
            ut(
              yr().filter((E) => E.dataset.headlessuiFocusGuard !== "true"),
              dt(b.value, {
                [Vt.Forwards]: _e.Next,
                [Vt.Backwards]: _e.Previous,
              }),
              { relativeTo: te(o.button) },
            )
        }
        M()
      }
      return () => {
        let T = o.popoverState.value === 0,
          M = { open: T },
          { ...E } = e,
          A = d.value
            ? { ref: p, type: g.value, onKeydown: v, onClick: w }
            : {
                ref: p,
                id: l,
                type: g.value,
                "aria-expanded": o.popoverState.value === 0,
                "aria-controls": te(o.panel) ? o.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: v,
                onKeyup: k,
                onClick: w,
                onMousedown: m,
              }
        return Ee(Pe, [
          Zt({
            ourProps: A,
            theirProps: { ...t, ...E },
            slot: M,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          T &&
            !d.value &&
            o.isPortalled.value &&
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
  bn = ft({
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
      var r
      let l = (r = e.id) != null ? r : `headlessui-popover-panel-${wn()}`,
        { focus: o } = e,
        i = ei("PopoverPanel"),
        a = se(() => Un(i.panel)),
        c = `headlessui-focus-sentinel-before-${wn()}`,
        u = `headlessui-focus-sentinel-after-${wn()}`
      s({ el: i.panel, $el: i.panel }),
        We(() => {
          i.panelId.value = l
        }),
        dn(() => {
          i.panelId.value = null
        }),
        vt(Qa, i.panelId),
        Jt(() => {
          var m, b
          if (!o || i.popoverState.value !== 0 || !i.panel) return
          let S = (m = a.value) == null ? void 0 : m.activeElement
          ;((b = te(i.panel)) != null && b.contains(S)) ||
            ut(te(i.panel), _e.First)
        })
      let d = Ff(),
        p = se(() =>
          d !== null
            ? (d.value & bs.Open) === bs.Open
            : i.popoverState.value === 0,
        )
      function h(m) {
        var b, S
        switch (m.key) {
          case ze.Escape:
            if (
              i.popoverState.value !== 0 ||
              !te(i.panel) ||
              (a.value &&
                !(
                  (b = te(i.panel)) != null && b.contains(a.value.activeElement)
                ))
            )
              return
            m.preventDefault(),
              m.stopPropagation(),
              i.closePopover(),
              (S = te(i.button)) == null || S.focus()
            break
        }
      }
      function g(m) {
        var b, S, T, M, E
        let A = m.relatedTarget
        A &&
          te(i.panel) &&
          (((b = te(i.panel)) != null && b.contains(A)) ||
            (i.closePopover(),
            (((T =
              (S = te(i.beforePanelSentinel)) == null ? void 0 : S.contains) !=
              null &&
              T.call(S, A)) ||
              ((E =
                (M = te(i.afterPanelSentinel)) == null ? void 0 : M.contains) !=
                null &&
                E.call(M, A))) &&
              A.focus({ preventScroll: !0 })))
      }
      let v = Xa()
      function k() {
        let m = te(i.panel)
        if (!m) return
        function b() {
          dt(v.value, {
            [Vt.Forwards]: () => {
              var S
              ut(m, _e.First) === ln.Error &&
                ((S = te(i.afterPanelSentinel)) == null || S.focus())
            },
            [Vt.Backwards]: () => {
              var S
              ;(S = te(i.button)) == null || S.focus({ preventScroll: !0 })
            },
          })
        }
        b()
      }
      function w() {
        let m = te(i.panel)
        if (!m) return
        function b() {
          dt(v.value, {
            [Vt.Forwards]: () => {
              let S = te(i.button),
                T = te(i.panel)
              if (!S) return
              let M = yr(),
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
              ut(I, _e.First, { sorted: !1 })
            },
            [Vt.Backwards]: () => {
              var S
              ut(m, _e.Previous) === ln.Error &&
                ((S = te(i.button)) == null || S.focus())
            },
          })
        }
        b()
      }
      return () => {
        let m = { open: i.popoverState.value === 0, close: i.close },
          { focus: b, ...S } = e,
          T = {
            ref: i.panel,
            id: l,
            onKeydown: h,
            onFocusout: o && i.popoverState.value === 0 ? g : void 0,
            tabIndex: -1,
          }
        return Zt({
          ourProps: T,
          theirProps: { ...t, ...S },
          attrs: t,
          slot: m,
          slots: {
            ...n,
            default: (...M) => {
              var E
              return [
                Ee(Pe, [
                  p.value &&
                    i.isPortalled.value &&
                    Ee(Gn, {
                      id: c,
                      ref: i.beforePanelSentinel,
                      features: Hn.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: k,
                    }),
                  (E = n.default) == null ? void 0 : E.call(n, ...M),
                  p.value &&
                    i.isPortalled.value &&
                    Ee(Gn, {
                      id: u,
                      ref: i.afterPanelSentinel,
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
          features: vs.RenderStrategy | vs.Static,
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
                  r = 50
                function l() {
                  var o
                  if (r-- <= 0) {
                    s && cancelAnimationFrame(s)
                    return
                  }
                  if ((o = e.onFocus) != null && o.call(e)) {
                    ;(t.value = !1), cancelAnimationFrame(s)
                    return
                  }
                  s = requestAnimationFrame(l)
                }
                s = requestAnimationFrame(l)
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
  let t = Ne(eu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Ts), n)
  }
  return t
}
let ti = Symbol("TabsSSRContext"),
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
      var r
      let l = V((r = e.selectedIndex) != null ? r : e.defaultIndex),
        o = V([]),
        i = V([]),
        a = se(() => e.selectedIndex !== null),
        c = se(() => (a.value ? e.selectedIndex : l.value))
      function u(v) {
        var k
        let w = On(d.tabs.value, te),
          m = On(d.panels.value, te),
          b = w.filter((S) => {
            var T
            return !((T = te(S)) != null && T.hasAttribute("disabled"))
          })
        if (v < 0 || v > w.length - 1) {
          let S = dt(l.value === null ? 0 : Math.sign(v - l.value), {
              [-1]: () => 1,
              0: () =>
                dt(Math.sign(v), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            T = dt(S, {
              0: () => w.indexOf(b[0]),
              1: () => w.indexOf(b[b.length - 1]),
            })
          T !== -1 && (l.value = T), (d.tabs.value = w), (d.panels.value = m)
        } else {
          let S = w.slice(0, v),
            T = [...w.slice(v), ...S].find((E) => b.includes(E))
          if (!T) return
          let M = (k = w.indexOf(T)) != null ? k : d.selectedIndex.value
          M === -1 && (M = d.selectedIndex.value),
            (l.value = M),
            (d.tabs.value = w),
            (d.panels.value = m)
        }
      }
      let d = {
        selectedIndex: se(() => {
          var v, k
          return (k = (v = l.value) != null ? v : e.defaultIndex) != null
            ? k
            : null
        }),
        orientation: se(() => (e.vertical ? "vertical" : "horizontal")),
        activation: se(() => (e.manual ? "manual" : "auto")),
        tabs: o,
        panels: i,
        setSelectedIndex(v) {
          c.value !== v && s("change", v), a.value || u(v)
        },
        registerTab(v) {
          var k
          if (o.value.includes(v)) return
          let w = o.value[l.value]
          if ((o.value.push(v), (o.value = On(o.value, te)), !a.value)) {
            let m = (k = o.value.indexOf(w)) != null ? k : l.value
            m !== -1 && (l.value = m)
          }
        },
        unregisterTab(v) {
          let k = o.value.indexOf(v)
          k !== -1 && o.value.splice(k, 1)
        },
        registerPanel(v) {
          i.value.includes(v) || (i.value.push(v), (i.value = On(i.value, te)))
        },
        unregisterPanel(v) {
          let k = i.value.indexOf(v)
          k !== -1 && i.value.splice(k, 1)
        },
      }
      vt(eu, d)
      let p = V({ tabs: [], panels: [] }),
        h = V(!1)
      We(() => {
        h.value = !0
      }),
        vt(
          ti,
          se(() => (h.value ? null : p.value)),
        )
      let g = se(() => e.selectedIndex)
      return (
        We(() => {
          un(
            [g],
            () => {
              var v
              return u((v = e.selectedIndex) != null ? v : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        Jt(() => {
          if (!a.value || c.value == null || d.tabs.value.length <= 0) return
          let v = On(d.tabs.value, te)
          v.some((k, w) => te(d.tabs.value[w]) !== te(k)) &&
            d.setSelectedIndex(
              v.findIndex((k) => te(k) === te(d.tabs.value[c.value])),
            )
        }),
        () => {
          let v = { selectedIndex: l.value }
          return Ee(Pe, [
            o.value.length <= 0 &&
              Ee(Yf, {
                onFocus: () => {
                  for (let k of o.value) {
                    let w = te(k)
                    if (w?.tabIndex === 0) return w.focus(), !0
                  }
                  return !1
                },
              }),
            Zt({
              theirProps: {
                ...n,
                ...Ka(e, [
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
  Qf = ft({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let s = Ts("TabList")
      return () => {
        let r = { selectedIndex: s.selectedIndex.value },
          l = { role: "tablist", "aria-orientation": s.orientation.value }
        return Zt({
          ourProps: l,
          theirProps: e,
          slot: r,
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
      var r
      let l = (r = e.id) != null ? r : `headlessui-tabs-tab-${wn()}`,
        o = Ts("Tab"),
        i = V(null)
      s({ el: i, $el: i }),
        We(() => o.registerTab(i)),
        dn(() => o.unregisterTab(i))
      let a = Ne(ti),
        c = se(() => {
          if (a.value) {
            let m = a.value.tabs.indexOf(l)
            return m === -1 ? a.value.tabs.push(l) - 1 : m
          }
          return -1
        }),
        u = se(() => {
          let m = o.tabs.value.indexOf(i)
          return m === -1 ? c.value : m
        }),
        d = se(() => u.value === o.selectedIndex.value)
      function p(m) {
        var b
        let S = m()
        if (S === ln.Success && o.activation.value === "auto") {
          let T = (b = Un(i)) == null ? void 0 : b.activeElement,
            M = o.tabs.value.findIndex((E) => te(E) === T)
          M !== -1 && o.setSelectedIndex(M)
        }
        return S
      }
      function h(m) {
        let b = o.tabs.value.map((S) => te(S)).filter(Boolean)
        if (m.key === ze.Space || m.key === ze.Enter) {
          m.preventDefault(), m.stopPropagation(), o.setSelectedIndex(u.value)
          return
        }
        switch (m.key) {
          case ze.Home:
          case ze.PageUp:
            return (
              m.preventDefault(), m.stopPropagation(), p(() => ut(b, _e.First))
            )
          case ze.End:
          case ze.PageDown:
            return (
              m.preventDefault(), m.stopPropagation(), p(() => ut(b, _e.Last))
            )
        }
        if (
          p(() =>
            dt(o.orientation.value, {
              vertical() {
                return m.key === ze.ArrowUp
                  ? ut(b, _e.Previous | _e.WrapAround)
                  : m.key === ze.ArrowDown
                    ? ut(b, _e.Next | _e.WrapAround)
                    : ln.Error
              },
              horizontal() {
                return m.key === ze.ArrowLeft
                  ? ut(b, _e.Previous | _e.WrapAround)
                  : m.key === ze.ArrowRight
                    ? ut(b, _e.Next | _e.WrapAround)
                    : ln.Error
              },
            }),
          ) === ln.Success
        )
          return m.preventDefault()
      }
      let g = V(!1)
      function v() {
        var m
        g.value ||
          ((g.value = !0),
          !e.disabled &&
            ((m = te(i)) == null || m.focus({ preventScroll: !0 }),
            o.setSelectedIndex(u.value),
            Tf(() => {
              g.value = !1
            })))
      }
      function k(m) {
        m.preventDefault()
      }
      let w = Wa(
        se(() => ({ as: e.as, type: t.type })),
        i,
      )
      return () => {
        var m, b
        let S = {
            selected: d.value,
            disabled: (m = e.disabled) != null ? m : !1,
          },
          { ...T } = e,
          M = {
            ref: i,
            onKeydown: h,
            onMousedown: k,
            onClick: v,
            id: l,
            role: "tab",
            type: w.value,
            "aria-controls":
              (b = te(o.panels.value[u.value])) == null ? void 0 : b.id,
            "aria-selected": d.value,
            tabIndex: d.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return Zt({
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
        let r = { selectedIndex: s.selectedIndex.value }
        return Zt({
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
      var r
      let l = (r = e.id) != null ? r : `headlessui-tabs-panel-${wn()}`,
        o = Ts("TabPanel"),
        i = V(null)
      s({ el: i, $el: i }),
        We(() => o.registerPanel(i)),
        dn(() => o.unregisterPanel(i))
      let a = Ne(ti),
        c = se(() => {
          if (a.value) {
            let p = a.value.panels.indexOf(l)
            return p === -1 ? a.value.panels.push(l) - 1 : p
          }
          return -1
        }),
        u = se(() => {
          let p = o.panels.value.indexOf(i)
          return p === -1 ? c.value : p
        }),
        d = se(() => u.value === o.selectedIndex.value)
      return () => {
        var p
        let h = { selected: d.value },
          { tabIndex: g, ...v } = e,
          k = {
            ref: i,
            id: l,
            role: "tabpanel",
            "aria-labelledby":
              (p = te(o.tabs.value[u.value])) == null ? void 0 : p.id,
            tabIndex: d.value ? g : -1,
          }
        return !d.value && e.unmount && !e.static
          ? Ee(Gn, { as: "span", "aria-hidden": !0, ...k })
          : Zt({
              ourProps: k,
              theirProps: v,
              slot: h,
              attrs: t,
              slots: n,
              features: vs.Static | vs.RenderStrategy,
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
function Rr(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Ct(r) ? r.map(e) : e(r)
  }
  return n
}
const us = () => {},
  Ct = Array.isArray,
  nu = /#/g,
  sp = /&/g,
  rp = /\//g,
  lp = /=/g,
  ip = /\?/g,
  su = /\+/g,
  op = /%5B/g,
  ap = /%5D/g,
  ru = /%5E/g,
  up = /%60/g,
  lu = /%7B/g,
  cp = /%7C/g,
  iu = /%7D/g,
  dp = /%20/g
function ni(e) {
  return encodeURI("" + e)
    .replace(cp, "|")
    .replace(op, "[")
    .replace(ap, "]")
}
function fp(e) {
  return ni(e).replace(lu, "{").replace(iu, "}").replace(ru, "^")
}
function Cl(e) {
  return ni(e)
    .replace(su, "%2B")
    .replace(dp, "+")
    .replace(nu, "%23")
    .replace(sp, "%26")
    .replace(up, "`")
    .replace(lu, "{")
    .replace(iu, "}")
    .replace(ru, "^")
}
function pp(e) {
  return Cl(e).replace(lp, "%3D")
}
function hp(e) {
  return ni(e).replace(nu, "%23").replace(ip, "%3F")
}
function gp(e) {
  return e == null ? "" : hp(e).replace(rp, "%2F")
}
function xs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const mp = /\/$/,
  vp = (e) => e.replace(mp, "")
function _r(e, t, n = "/") {
  let s,
    r = {},
    l = "",
    o = ""
  const i = t.indexOf("#")
  let a = t.indexOf("?")
  return (
    i < a && i >= 0 && (a = -1),
    a > -1 &&
      ((s = t.slice(0, a)),
      (l = t.slice(a + 1, i > -1 ? i : t.length)),
      (r = e(l))),
    i > -1 && ((s = s || t.slice(0, i)), (o = t.slice(i, t.length))),
    (s = wp(s ?? t, n)),
    { fullPath: s + (l && "?") + l + o, path: s, query: r, hash: xs(o) }
  )
}
function bp(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function so(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function xp(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Vn(t.matched[s], n.matched[r]) &&
    ou(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Vn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ou(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!yp(e[n], t[n])) return !1
  return !0
}
function yp(e, t) {
  return Ct(e) ? ro(e, t) : Ct(t) ? ro(t, e) : e === t
}
function ro(e, t) {
  return Ct(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function wp(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1]
  ;(r === ".." || r === ".") && s.push("")
  let l = n.length - 1,
    o,
    i
  for (o = 0; o < s.length; o++)
    if (((i = s[o]), i !== "."))
      if (i === "..") l > 1 && l--
      else break
  return n.slice(0, l).join("/") + "/" + s.slice(o).join("/")
}
const en = {
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
var ys
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(ys || (ys = {}))
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
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), vp(e)
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
const wr = () => ({ left: window.scrollX, top: window.scrollY })
function kp(e) {
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
    t = Tp(r, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function lo(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const El = new Map()
function Pp(e, t) {
  El.set(e, t)
}
function Ip(e) {
  const t = El.get(e)
  return El.delete(e), t
}
let $p = () => location.protocol + "//" + location.host
function au(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    l = e.indexOf("#")
  if (l > -1) {
    let i = r.includes(e.slice(l)) ? e.slice(l).length : 1,
      a = r.slice(i)
    return a[0] !== "/" && (a = "/" + a), so(a, "")
  }
  return so(n, e) + s + r
}
function Mp(e, t, n, s) {
  let r = [],
    l = [],
    o = null
  const i = ({ state: p }) => {
    const h = au(e, location),
      g = n.value,
      v = t.value
    let k = 0
    if (p) {
      if (((n.value = h), (t.value = p), o && o === g)) {
        o = null
        return
      }
      k = v ? p.position - v.position : 0
    } else s(h)
    r.forEach((w) => {
      w(n.value, g, {
        delta: k,
        type: ys.pop,
        direction: k ? (k > 0 ? cs.forward : cs.back) : cs.unknown,
      })
    })
  }
  function a() {
    o = n.value
  }
  function c(p) {
    r.push(p)
    const h = () => {
      const g = r.indexOf(p)
      g > -1 && r.splice(g, 1)
    }
    return l.push(h), h
  }
  function u() {
    const { history: p } = window
    p.state && p.replaceState(we({}, p.state, { scroll: wr() }), "")
  }
  function d() {
    for (const p of l) p()
    ;(l = []),
      window.removeEventListener("popstate", i),
      window.removeEventListener("beforeunload", u)
  }
  return (
    window.addEventListener("popstate", i),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: d }
  )
}
function io(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? wr() : null,
  }
}
function Ap(e) {
  const { history: t, location: n } = window,
    s = { value: au(e, n) },
    r = { value: t.state }
  r.value ||
    l(
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
  function l(a, c, u) {
    const d = e.indexOf("#"),
      p =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a
          : $p() + e + a
    try {
      t[u ? "replaceState" : "pushState"](c, "", p), (r.value = c)
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](p)
    }
  }
  function o(a, c) {
    const u = we({}, t.state, io(r.value.back, a, r.value.forward, !0), c, {
      position: r.value.position,
    })
    l(a, u, !0), (s.value = a)
  }
  function i(a, c) {
    const u = we({}, r.value, t.state, { forward: a, scroll: wr() })
    l(u.current, u, !0)
    const d = we({}, io(s.value, a, null), { position: u.position + 1 }, c)
    l(a, d, !1), (s.value = a)
  }
  return { location: s, state: r, push: i, replace: o }
}
function Op(e) {
  e = Sp(e)
  const t = Ap(e),
    n = Mp(e, t.state, t.location, t.replace)
  function s(l, o = !0) {
    o || n.pauseListeners(), history.go(l)
  }
  const r = we(
    { location: "", base: e, go: s, createHref: Ep.bind(null, e) },
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
function Lp(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function uu(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const cu = Symbol("")
var oo
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(oo || (oo = {}))
function Wn(e, t) {
  return we(new Error(), { type: e, [cu]: !0 }, t)
}
function _t(e, t) {
  return e instanceof Error && cu in e && (t == null || !!(e.type & t))
}
const ao = "[^/]+?",
  jp = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Bp = /[.+*?^${}()[\]/\\]/g
function Rp(e, t) {
  const n = we({}, jp, t),
    s = []
  let r = n.start ? "^" : ""
  const l = []
  for (const c of e) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (r += "/")
    for (let d = 0; d < c.length; d++) {
      const p = c[d]
      let h = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0)
        d || (r += "/"), (r += p.value.replace(Bp, "\\$&")), (h += 40)
      else if (p.type === 1) {
        const { value: g, repeatable: v, optional: k, regexp: w } = p
        l.push({ name: g, repeatable: v, optional: k })
        const m = w || ao
        if (m !== ao) {
          h += 10
          try {
            new RegExp(`(${m})`)
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${m}): ` + S.message,
            )
          }
        }
        let b = v ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`
        d || (b = k && c.length < 2 ? `(?:/${b})` : "/" + b),
          k && (b += "?"),
          (r += b),
          (h += 20),
          k && (h += -8),
          v && (h += -20),
          m === ".*" && (h += -50)
      }
      u.push(h)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const c = s.length - 1
    s[c][s[c].length - 1] += 0.7000000000000001
  }
  n.strict || (r += "/?"),
    n.end ? (r += "$") : n.strict && !r.endsWith("/") && (r += "(?:/|$)")
  const o = new RegExp(r, n.sensitive ? "" : "i")
  function i(c) {
    const u = c.match(o),
      d = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const h = u[p] || "",
        g = l[p - 1]
      d[g.name] = h && g.repeatable ? h.split("/") : h
    }
    return d
  }
  function a(c) {
    let u = "",
      d = !1
    for (const p of e) {
      ;(!d || !u.endsWith("/")) && (u += "/"), (d = !1)
      for (const h of p)
        if (h.type === 0) u += h.value
        else if (h.type === 1) {
          const { value: g, repeatable: v, optional: k } = h,
            w = g in c ? c[g] : ""
          if (Ct(w) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const m = Ct(w) ? w.join("/") : w
          if (!m)
            if (k)
              p.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${g}"`)
          u += m
        }
    }
    return u || "/"
  }
  return { re: o, score: s, keys: l, parse: i, stringify: a }
}
function _p(e, t) {
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
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const l = _p(s[n], r[n])
    if (l) return l
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (uo(s)) return 1
    if (uo(r)) return -1
  }
  return r.length - s.length
}
function uo(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Np = { type: 0, value: "" },
  zp = /[a-zA-Z0-9_]/
function Dp(e) {
  if (!e) return [[]]
  if (e === "/") return [[Np]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`)
  }
  let n = 0,
    s = n
  const r = []
  let l
  function o() {
    l && r.push(l), (l = [])
  }
  let i = 0,
    a,
    c = "",
    u = ""
  function d() {
    c &&
      (n === 0
        ? l.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (l.length > 1 &&
              (a === "*" || a === "+") &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            l.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: a === "*" || a === "+",
              optional: a === "*" || a === "?",
            }))
          : t("Invalid state to consume buffer"),
      (c = ""))
  }
  function p() {
    c += a
  }
  for (; i < e.length; ) {
    if (((a = e[i++]), a === "\\" && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        a === "/" ? (c && d(), o()) : a === ":" ? (d(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        a === "("
          ? (n = 2)
          : zp.test(a)
            ? p()
            : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && i--)
        break
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a)
        break
      case 3:
        d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && i--, (u = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), o(), r
}
function Fp(e, t, n) {
  const s = Rp(Dp(e.path), n),
    r = we(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Hp(e, t) {
  const n = [],
    s = new Map()
  t = ho({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(d) {
    return s.get(d)
  }
  function l(d, p, h) {
    const g = !h,
      v = fo(d)
    v.aliasOf = h && h.record
    const k = ho(t, d),
      w = [v]
    if ("alias" in d) {
      const S = typeof d.alias == "string" ? [d.alias] : d.alias
      for (const T of S)
        w.push(
          fo(
            we({}, v, {
              components: h ? h.record.components : v.components,
              path: T,
              aliasOf: h ? h.record : v,
            }),
          ),
        )
    }
    let m, b
    for (const S of w) {
      const { path: T } = S
      if (p && T[0] !== "/") {
        const M = p.record.path,
          E = M[M.length - 1] === "/" ? "" : "/"
        S.path = p.record.path + (T && E + T)
      }
      if (
        ((m = Fp(S, p, k)),
        h
          ? h.alias.push(m)
          : ((b = b || m),
            b !== m && b.alias.push(m),
            g && d.name && !po(m) && o(d.name)),
        fu(m) && a(m),
        v.children)
      ) {
        const M = v.children
        for (let E = 0; E < M.length; E++) l(M[E], m, h && h.children[E])
      }
      h = h || m
    }
    return b
      ? () => {
          o(b)
        }
      : us
  }
  function o(d) {
    if (uu(d)) {
      const p = s.get(d)
      p &&
        (s.delete(d),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(o),
        p.alias.forEach(o))
    } else {
      const p = n.indexOf(d)
      p > -1 &&
        (n.splice(p, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o))
    }
  }
  function i() {
    return n
  }
  function a(d) {
    const p = Wp(d, n)
    n.splice(p, 0, d), d.record.name && !po(d) && s.set(d.record.name, d)
  }
  function c(d, p) {
    let h,
      g = {},
      v,
      k
    if ("name" in d && d.name) {
      if (((h = s.get(d.name)), !h)) throw Wn(1, { location: d })
      ;(k = h.record.name),
        (g = we(
          co(
            p.params,
            h.keys
              .filter((b) => !b.optional)
              .concat(h.parent ? h.parent.keys.filter((b) => b.optional) : [])
              .map((b) => b.name),
          ),
          d.params &&
            co(
              d.params,
              h.keys.map((b) => b.name),
            ),
        )),
        (v = h.stringify(g))
    } else if (d.path != null)
      (v = d.path),
        (h = n.find((b) => b.re.test(v))),
        h && ((g = h.parse(v)), (k = h.record.name))
    else {
      if (((h = p.name ? s.get(p.name) : n.find((b) => b.re.test(p.path))), !h))
        throw Wn(1, { location: d, currentLocation: p })
      ;(k = h.record.name),
        (g = we({}, p.params, d.params)),
        (v = h.stringify(g))
    }
    const w = []
    let m = h
    for (; m; ) w.unshift(m.record), (m = m.parent)
    return { name: k, path: v, params: g, matched: w, meta: Vp(w) }
  }
  e.forEach((d) => l(d))
  function u() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: l,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: i,
    getRecordMatcher: r,
  }
}
function co(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function fo(e) {
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
function po(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Vp(e) {
  return e.reduce((t, n) => we(t, n.meta), {})
}
function ho(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Wp(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const l = (n + s) >> 1
    du(e, t[l]) < 0 ? (s = l) : (n = l + 1)
  }
  const r = qp(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
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
  for (let r = 0; r < s.length; ++r) {
    const l = s[r].replace(su, " "),
      o = l.indexOf("="),
      i = xs(o < 0 ? l : l.slice(0, o)),
      a = o < 0 ? null : xs(l.slice(o + 1))
    if (i in t) {
      let c = t[i]
      Ct(c) || (c = t[i] = [c]), c.push(a)
    } else t[i] = a
  }
  return t
}
function go(e) {
  let t = ""
  for (let n in e) {
    const s = e[n]
    if (((n = pp(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Ct(s) ? s.map((l) => l && Cl(l)) : [s && Cl(s)]).forEach((l) => {
      l !== void 0 &&
        ((t += (t.length ? "&" : "") + n), l != null && (t += "=" + l))
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
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
          ? s
          : "" + s)
  }
  return t
}
const Yp = Symbol(""),
  mo = Symbol(""),
  Sr = Symbol(""),
  pu = Symbol(""),
  Tl = Symbol("")
function Qn() {
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
function rn(e, t, n, s, r, l = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((i, a) => {
      const c = (p) => {
          p === !1
            ? a(Wn(4, { from: n, to: t }))
            : p instanceof Error
              ? a(p)
              : Lp(p)
                ? a(Wn(2, { from: t, to: p }))
                : (o &&
                    s.enterCallbacks[r] === o &&
                    typeof p == "function" &&
                    o.push(p),
                  i())
        },
        u = l(() => e.call(s && s.instances[r], t, n, c))
      let d = Promise.resolve(u)
      e.length < 3 && (d = d.then(c)), d.catch((p) => a(p))
    })
}
function Nr(e, t, n, s, r = (l) => l()) {
  const l = []
  for (const o of e)
    for (const i in o.components) {
      let a = o.components[i]
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (tu(a)) {
          const u = (a.__vccOpts || a)[t]
          u && l.push(rn(u, n, s, o, i, r))
        } else {
          let c = a()
          l.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${i}" at "${o.path}"`,
                )
              const d = np(u) ? u.default : u
              ;(o.mods[i] = u), (o.components[i] = d)
              const h = (d.__vccOpts || d)[t]
              return h && rn(h, n, s, o, i, r)()
            }),
          )
        }
    }
  return l
}
function vo(e) {
  const t = Ne(Sr),
    n = Ne(pu),
    s = se(() => {
      const a = Z(e.to)
      return t.resolve(a)
    }),
    r = se(() => {
      const { matched: a } = s.value,
        { length: c } = a,
        u = a[c - 1],
        d = n.matched
      if (!u || !d.length) return -1
      const p = d.findIndex(Vn.bind(null, u))
      if (p > -1) return p
      const h = bo(a[c - 2])
      return c > 1 && bo(u) === h && d[d.length - 1].path !== h
        ? d.findIndex(Vn.bind(null, a[c - 2]))
        : p
    }),
    l = se(() => r.value > -1 && e0(n.params, s.value.params)),
    o = se(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        ou(n.params, s.value.params),
    )
  function i(a = {}) {
    if (Qp(a)) {
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
    isActive: l,
    isExactActive: o,
    navigate: i,
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
    useLink: vo,
    setup(e, { slots: t }) {
      const n = Ss(vo(e)),
        { options: s } = Ne(Sr),
        r = se(() => ({
          [xo(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [xo(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const l = t.default && Xp(t.default(n))
        return e.custom
          ? l
          : Ee(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              l,
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
      r = e[n]
    if (typeof s == "string") {
      if (s !== r) return !1
    } else if (!Ct(r) || r.length !== s.length || s.some((l, o) => l !== r[o]))
      return !1
  }
  return !0
}
function bo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const xo = (e, t, n) => e ?? t ?? n,
  t0 = ft({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ne(Tl),
        r = se(() => e.route || s.value),
        l = Ne(mo, 0),
        o = se(() => {
          let c = Z(l)
          const { matched: u } = r.value
          let d
          for (; (d = u[c]) && !d.components; ) c++
          return c
        }),
        i = se(() => r.value.matched[o.value])
      vt(
        mo,
        se(() => o.value + 1),
      ),
        vt(Yp, i),
        vt(Tl, r)
      const a = V()
      return (
        un(
          () => [a.value, i.value, e.name],
          ([c, u, d], [p, h, g]) => {
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
                (u.enterCallbacks[d] || []).forEach((v) => v(c))
          },
          { flush: "post" },
        ),
        () => {
          const c = r.value,
            u = e.name,
            d = i.value,
            p = d && d.components[u]
          if (!p) return yo(n.default, { Component: p, route: c })
          const h = d.props[u],
            g = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                  ? h(c)
                  : h
              : null,
            k = Ee(
              p,
              we({}, g, t, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (d.instances[u] = null)
                },
                ref: a,
              }),
            )
          return yo(n.default, { Component: k, route: c }) || k
        }
      )
    },
  })
function yo(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const n0 = t0
function s0(e) {
  const t = Hp(e.routes, e),
    n = e.parseQuery || Up,
    s = e.stringifyQuery || go,
    r = e.history,
    l = Qn(),
    o = Qn(),
    i = Qn(),
    a = jc(en)
  let c = en
  Ln &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const u = Rr.bind(null, (R) => "" + R),
    d = Rr.bind(null, gp),
    p = Rr.bind(null, xs)
  function h(R, ee) {
    let X, ne
    return (
      uu(R) ? ((X = t.getRecordMatcher(R)), (ne = ee)) : (ne = R),
      t.addRoute(ne, X)
    )
  }
  function g(R) {
    const ee = t.getRecordMatcher(R)
    ee && t.removeRoute(ee)
  }
  function v() {
    return t.getRoutes().map((R) => R.record)
  }
  function k(R) {
    return !!t.getRecordMatcher(R)
  }
  function w(R, ee) {
    if (((ee = we({}, ee || a.value)), typeof R == "string")) {
      const P = _r(n, R, ee.path),
        z = t.resolve({ path: P.path }, ee),
        D = r.createHref(P.fullPath)
      return we(P, z, {
        params: p(z.params),
        hash: xs(P.hash),
        redirectedFrom: void 0,
        href: D,
      })
    }
    let X
    if (R.path != null) X = we({}, R, { path: _r(n, R.path, ee.path).path })
    else {
      const P = we({}, R.params)
      for (const z in P) P[z] == null && delete P[z]
      ;(X = we({}, R, { params: d(P) })), (ee.params = d(ee.params))
    }
    const ne = t.resolve(X, ee),
      Ie = R.hash || ""
    ne.params = u(p(ne.params))
    const y = bp(s, we({}, R, { hash: fp(Ie), path: ne.path })),
      C = r.createHref(y)
    return we(
      { fullPath: y, hash: Ie, query: s === go ? Kp(R.query) : R.query || {} },
      ne,
      { redirectedFrom: void 0, href: C },
    )
  }
  function m(R) {
    return typeof R == "string" ? _r(n, R, a.value.path) : we({}, R)
  }
  function b(R, ee) {
    if (c !== R) return Wn(8, { from: ee, to: R })
  }
  function S(R) {
    return E(R)
  }
  function T(R) {
    return S(we(m(R), { replace: !0 }))
  }
  function M(R) {
    const ee = R.matched[R.matched.length - 1]
    if (ee && ee.redirect) {
      const { redirect: X } = ee
      let ne = typeof X == "function" ? X(R) : X
      return (
        typeof ne == "string" &&
          ((ne =
            ne.includes("?") || ne.includes("#") ? (ne = m(ne)) : { path: ne }),
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
      ne = a.value,
      Ie = R.state,
      y = R.force,
      C = R.replace === !0,
      P = M(X)
    if (P)
      return E(
        we(m(P), {
          state: typeof P == "object" ? we({}, Ie, P.state) : Ie,
          force: y,
          replace: C,
        }),
        ee || X,
      )
    const z = X
    z.redirectedFrom = ee
    let D
    return (
      !y &&
        xp(s, ne, X) &&
        ((D = Wn(16, { to: z, from: ne })), Le(ne, ne, !0, !1)),
      (D ? Promise.resolve(D) : $(z, ne))
        .catch((_) => (_t(_) ? (_t(_, 2) ? _ : me(_)) : B(_, z, ne)))
        .then((_) => {
          if (_) {
            if (_t(_, 2))
              return E(
                we({ replace: C }, m(_.to), {
                  state: typeof _.to == "object" ? we({}, Ie, _.to.state) : Ie,
                  force: y,
                }),
                ee || z,
              )
          } else _ = F(z, ne, !0, C, Ie)
          return j(z, ne, _), _
        })
    )
  }
  function A(R, ee) {
    const X = b(R, ee)
    return X ? Promise.reject(X) : Promise.resolve()
  }
  function I(R) {
    const ee = Qt.values().next().value
    return ee && typeof ee.runWithContext == "function"
      ? ee.runWithContext(R)
      : R()
  }
  function $(R, ee) {
    let X
    const [ne, Ie, y] = r0(R, ee)
    X = Nr(ne.reverse(), "beforeRouteLeave", R, ee)
    for (const P of ne)
      P.leaveGuards.forEach((z) => {
        X.push(rn(z, R, ee))
      })
    const C = A.bind(null, R, ee)
    return (
      X.push(C),
      et(X)
        .then(() => {
          X = []
          for (const P of l.list()) X.push(rn(P, R, ee))
          return X.push(C), et(X)
        })
        .then(() => {
          X = Nr(Ie, "beforeRouteUpdate", R, ee)
          for (const P of Ie)
            P.updateGuards.forEach((z) => {
              X.push(rn(z, R, ee))
            })
          return X.push(C), et(X)
        })
        .then(() => {
          X = []
          for (const P of y)
            if (P.beforeEnter)
              if (Ct(P.beforeEnter))
                for (const z of P.beforeEnter) X.push(rn(z, R, ee))
              else X.push(rn(P.beforeEnter, R, ee))
          return X.push(C), et(X)
        })
        .then(
          () => (
            R.matched.forEach((P) => (P.enterCallbacks = {})),
            (X = Nr(y, "beforeRouteEnter", R, ee, I)),
            X.push(C),
            et(X)
          ),
        )
        .then(() => {
          X = []
          for (const P of o.list()) X.push(rn(P, R, ee))
          return X.push(C), et(X)
        })
        .catch((P) => (_t(P, 8) ? P : Promise.reject(P)))
    )
  }
  function j(R, ee, X) {
    i.list().forEach((ne) => I(() => ne(R, ee, X)))
  }
  function F(R, ee, X, ne, Ie) {
    const y = b(R, ee)
    if (y) return y
    const C = ee === en,
      P = Ln ? history.state : {}
    X &&
      (ne || C
        ? r.replace(R.fullPath, we({ scroll: C && P && P.scroll }, Ie))
        : r.push(R.fullPath, Ie)),
      (a.value = R),
      Le(R, ee, X, C),
      me()
  }
  let W
  function de() {
    W ||
      (W = r.listen((R, ee, X) => {
        if (!gt.listening) return
        const ne = w(R),
          Ie = M(ne)
        if (Ie) {
          E(we(Ie, { replace: !0, force: !0 }), ne).catch(us)
          return
        }
        c = ne
        const y = a.value
        Ln && Pp(lo(y.fullPath, X.delta), wr()),
          $(ne, y)
            .catch((C) =>
              _t(C, 12)
                ? C
                : _t(C, 2)
                  ? (E(we(m(C.to), { force: !0 }), ne)
                      .then((P) => {
                        _t(P, 20) &&
                          !X.delta &&
                          X.type === ys.pop &&
                          r.go(-1, !1)
                      })
                      .catch(us),
                    Promise.reject())
                  : (X.delta && r.go(-X.delta, !1), B(C, ne, y)),
            )
            .then((C) => {
              ;(C = C || F(ne, y, !1)),
                C &&
                  (X.delta && !_t(C, 8)
                    ? r.go(-X.delta, !1)
                    : X.type === ys.pop && _t(C, 20) && r.go(-1, !1)),
                j(ne, y, C)
            })
            .catch(us)
      }))
  }
  let ge = Qn(),
    O = Qn(),
    N
  function B(R, ee, X) {
    me(R)
    const ne = O.list()
    return (
      ne.length ? ne.forEach((Ie) => Ie(R, ee, X)) : console.error(R),
      Promise.reject(R)
    )
  }
  function xe() {
    return N && a.value !== en
      ? Promise.resolve()
      : new Promise((R, ee) => {
          ge.add([R, ee])
        })
  }
  function me(R) {
    return (
      N ||
        ((N = !R),
        de(),
        ge.list().forEach(([ee, X]) => (R ? X(R) : ee())),
        ge.reset()),
      R
    )
  }
  function Le(R, ee, X, ne) {
    const { scrollBehavior: Ie } = e
    if (!Ln || !Ie) return Promise.resolve()
    const y =
      (!X && Ip(lo(R.fullPath, 0))) ||
      ((ne || !X) && history.state && history.state.scroll) ||
      null
    return hr()
      .then(() => Ie(R, ee, y))
      .then((C) => C && kp(C))
      .catch((C) => B(C, R, ee))
  }
  const je = (R) => r.go(R)
  let ht
  const Qt = new Set(),
    gt = {
      currentRoute: a,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: k,
      getRoutes: v,
      resolve: w,
      options: e,
      push: S,
      replace: T,
      go: je,
      back: () => je(-1),
      forward: () => je(1),
      beforeEach: l.add,
      beforeResolve: o.add,
      afterEach: i.add,
      onError: O.add,
      isReady: xe,
      install(R) {
        const ee = this
        R.component("RouterLink", Zp),
          R.component("RouterView", n0),
          (R.config.globalProperties.$router = ee),
          Object.defineProperty(R.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Z(a),
          }),
          Ln &&
            !ht &&
            a.value === en &&
            ((ht = !0), S(r.location).catch((Ie) => {}))
        const X = {}
        for (const Ie in en)
          Object.defineProperty(X, Ie, {
            get: () => a.value[Ie],
            enumerable: !0,
          })
        R.provide(Sr, ee), R.provide(pu, oa(X)), R.provide(Tl, a)
        const ne = R.unmount
        Qt.add(R),
          (R.unmount = function () {
            Qt.delete(R),
              Qt.size < 1 &&
                ((c = en),
                W && W(),
                (W = null),
                (a.value = en),
                (ht = !1),
                (N = !1)),
              ne()
          })
      },
    }
  function et(R) {
    return R.reduce((ee, X) => ee.then(() => I(X)), Promise.resolve())
  }
  return gt
}
function r0(e, t) {
  const n = [],
    s = [],
    r = [],
    l = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < l; o++) {
    const i = t.matched[o]
    i && (e.matched.find((c) => Vn(c, i)) ? s.push(i) : n.push(i))
    const a = e.matched[o]
    a && (t.matched.find((c) => Vn(c, a)) || r.push(a))
  }
  return [n, s, r]
}
function l0() {
  return Ne(Sr)
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
const i0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  He =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: s = 2,
        absoluteStrokeWidth: r,
        color: l,
        class: o,
        ...i
      },
      { attrs: a, slots: c },
    ) =>
      Ee(
        "svg",
        {
          ...As,
          width: n || As.width,
          height: n || As.height,
          stroke: l || As.stroke,
          "stroke-width": r ? (Number(s) * 24) / Number(n) : s,
          ...a,
          class: ["lucide", `lucide-${i0(e)}`],
          ...i,
        },
        [...t.map((u) => Ee(...u)), ...(c.default ? [c.default()] : [])],
      )
const wo = He("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const Pn = He("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const o0 = He("CloudDrizzleIcon", [
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
const a0 = He("CloudSunIcon", [
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
const v0 = He("SunIcon", [
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
const zr = He("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const b0 = He("TurtleIcon", [
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
const kl = He("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  xt =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  yt = '</title><path d="',
  wt = '"/></svg>',
  x0 = {
    title: "Blender",
    slug: "blender",
    get svg() {
      return xt + "Blender" + yt + this.path + wt
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
      return xt + "Bootstrap" + yt + this.path + wt
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  y0 = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return xt + "Cloudflare" + yt + this.path + wt
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
      return xt + "Figma" + yt + this.path + wt
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
      return xt + "GitHub" + yt + this.path + wt
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
      return xt + "Instagram" + yt + this.path + wt
    },
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    source: "https://about.meta.com/brand/resources/instagram",
    hex: "E4405F",
    guidelines: "https://about.meta.com/brand/resources/instagram",
  },
  So = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return xt + "JavaScript" + yt + this.path + wt
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
      return xt + "LinkedIn" + yt + this.path + wt
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
      return xt + "PHP" + yt + this.path + wt
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
      return xt + "Tailwind CSS" + yt + this.path + wt
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
      return xt + "Vue.js" + yt + this.path + wt
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
      return xt + "WordPress" + yt + this.path + wt
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
  _0 = { class: "py-1", role: "menu" },
  N0 = { class: "py-1", role: "menu" },
  z0 = { class: "py-1", role: "menu" },
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
  rh = { class: "ml-5" },
  lh = { class: "ml-5" },
  ih = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = V(5),
        s = t,
        r = l0(),
        l = (c) => {
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
      const o = () => {
          window.location.href = "/"
        },
        i = () => {
          let c = document.getElementById("mobileMenu")
          c.classList.contains("hidden")
            ? c.classList.remove("hidden")
            : c.classList.add("hidden")
        },
        a = (c) => {
          i(), r.push(c)
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
                      U(
                        Z(zr),
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
                            "font-monospace font-bold cursor-pointer transition-colors duration-300",
                          ]),
                          onClick: o,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    f("div", $0, [
                      U(
                        Z(tn),
                        { class: "relative inline-block text-left" },
                        {
                          default: oe(() => [
                            U(
                              Z(vn),
                              {
                                "aria-label": "Web dropdown menu",
                                class: x([
                                  "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                  {
                                    "text-slate-900 hover:text-emerald-500":
                                      n.value == 5,
                                    "text-slate-800 hover:text-emerald-500":
                                      n.value == 4,
                                    "text-slate-300 hover:text-orange-200":
                                      n.value == 3,
                                    "text-slate-200 hover:text-orange-500":
                                      n.value == 2,
                                    "text-slate-400 hover:text-orange-400":
                                      n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: oe(() => [
                                  u[52] || (u[52] = ae(" Web", -1)),
                                  U(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            U(
                              Z(bn),
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
                                default: oe(() => [
                                  f("div", M0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[0] ||
                                          (u[0] = (d) =>
                                            c.$router.push("/web-portfolio")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                      U(
                        Z(tn),
                        { class: "relative inline-block text-left" },
                        {
                          default: oe(() => [
                            U(
                              Z(vn),
                              {
                                "aria-label": "Unity dropdown menu",
                                class: x([
                                  "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                  {
                                    "text-slate-900 hover:text-emerald-500":
                                      n.value == 5,
                                    "text-slate-800 hover:text-emerald-500":
                                      n.value == 4,
                                    "text-slate-300 hover:text-orange-200":
                                      n.value == 3,
                                    "text-slate-200 hover:text-orange-500":
                                      n.value == 2,
                                    "text-slate-400 hover:text-orange-400":
                                      n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: oe(() => [
                                  u[53] || (u[53] = ae(" Unity", -1)),
                                  U(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            U(
                              Z(bn),
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
                                default: oe(() => [
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                      U(
                        Z(tn),
                        { class: "relative inline-block text-left" },
                        {
                          default: oe(() => [
                            U(
                              Z(vn),
                              {
                                "aria-label": "Programming dropdown menu",
                                class: x([
                                  "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                  {
                                    "text-slate-900 hover:text-emerald-500":
                                      n.value == 5,
                                    "text-slate-800 hover:text-emerald-500":
                                      n.value == 4,
                                    "text-slate-300 hover:text-orange-200":
                                      n.value == 3,
                                    "text-slate-200 hover:text-orange-500":
                                      n.value == 2,
                                    "text-slate-400 hover:text-orange-400":
                                      n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: oe(() => [
                                  u[54] || (u[54] = ae(" Programming", -1)),
                                  U(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            U(
                              Z(bn),
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
                                default: oe(() => [
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-6 py-1 cursor-pointer text-sm transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                      U(
                        Z(tn),
                        { class: "relative inline-block text-left" },
                        {
                          default: oe(() => [
                            U(
                              Z(vn),
                              {
                                "aria-label": "Blender dropdown menu",
                                class: x([
                                  "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                  {
                                    "text-slate-900 hover:text-emerald-500":
                                      n.value == 5,
                                    "text-slate-800 hover:text-emerald-500":
                                      n.value == 4,
                                    "text-slate-300 hover:text-orange-200":
                                      n.value == 3,
                                    "text-slate-200 hover:text-orange-500":
                                      n.value == 2,
                                    "text-slate-400 hover:text-orange-400":
                                      n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: oe(() => [
                                  u[55] || (u[55] = ae(" Blender", -1)),
                                  U(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            U(
                              Z(bn),
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
                                default: oe(() => [
                                  f("div", _0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[14] ||
                                          (u[14] = (d) =>
                                            c.$router.push("/blender-art")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                      U(
                        Z(tn),
                        { class: "relative inline-block text-left" },
                        {
                          default: oe(() => [
                            U(
                              Z(vn),
                              {
                                "aria-label": "Communications dropdown menu",
                                class: x([
                                  "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                  {
                                    "text-slate-900 hover:text-emerald-500":
                                      n.value == 5,
                                    "text-slate-800 hover:text-emerald-500":
                                      n.value == 4,
                                    "text-slate-300 hover:text-orange-200":
                                      n.value == 3,
                                    "text-slate-200 hover:text-orange-500":
                                      n.value == 2,
                                    "text-slate-400 hover:text-orange-400":
                                      n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: oe(() => [
                                  u[56] || (u[56] = ae(" Communications", -1)),
                                  U(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            U(
                              Z(bn),
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
                                default: oe(() => [
                                  f("div", N0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[18] ||
                                          (u[18] = (d) =>
                                            c.$router.push("/devlog")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                      U(
                        Z(tn),
                        { class: "relative inline-block text-left" },
                        {
                          default: oe(() => [
                            U(
                              Z(vn),
                              {
                                "aria-label": "About Me dropdown menu",
                                class: x([
                                  "font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300",
                                  {
                                    "text-slate-900 hover:text-emerald-500":
                                      n.value == 5,
                                    "text-slate-800 hover:text-emerald-500":
                                      n.value == 4,
                                    "text-slate-300 hover:text-orange-200":
                                      n.value == 3,
                                    "text-slate-200 hover:text-orange-500":
                                      n.value == 2,
                                    "text-slate-400 hover:text-orange-400":
                                      n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: oe(() => [
                                  u[57] || (u[57] = ae(" About Me", -1)),
                                  U(Z(Pn)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            U(
                              Z(bn),
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
                                default: oe(() => [
                                  f("div", z0, [
                                    f(
                                      "a",
                                      {
                                        onClick:
                                          u[21] ||
                                          (u[21] = (d) =>
                                            c.$router.push("/about-me")),
                                        class: x([
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                          "block px-4 py-2 cursor-pointer transition-colors duration-300",
                                          {
                                            "text-slate-900 hover:text-emerald-500":
                                              n.value == 5,
                                            "text-slate-800 hover:text-emerald-500":
                                              n.value == 4,
                                            "text-slate-300 hover:text-orange-200":
                                              n.value == 3,
                                            "text-slate-200 hover:text-orange-500":
                                              n.value == 2,
                                            "text-slate-400 hover:text-orange-400":
                                              n.value == 1,
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
                                "bg-slate-500 hover:bg-slate-600": n.value >= 4,
                                "bg-slate-400 hover:bg-slate-500": n.value == 3,
                                "bg-slate-600 hover:bg-slate-700": n.value == 2,
                                "bg-slate-700 hover:bg-slate-800": n.value == 1,
                              },
                              "py-2 px-3 rounded text-white flex items-center gap-2 transition-colors duration-300",
                            ]),
                            "aria-label": "Visit GitHub profile",
                          },
                          [
                            (L(),
                            K("svg", H0, [
                              f("path", { d: Z(gu).path }, null, 8, G0),
                            ])),
                            u[58] || (u[58] = ae(" GitHub ", -1)),
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
                                  "bg-emerald-600 hover:bg-emerald-700":
                                    n.value >= 4,
                                  "bg-slate-500 hover:bg-slate-600":
                                    n.value == 3,
                                  "bg-orange-600 hover:bg-orange-700":
                                    n.value == 2,
                                  "bg-orange-500 hover:bg-orange-600":
                                    n.value == 1,
                                },
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
                      U(
                        Z(zr),
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
                            "font-monospace font-bold cursor-pointer transition-colors duration-300",
                          ]),
                          onClick: o,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                  ]),
                  U(
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
                      onClick: u[25] || (u[25] = (d) => i()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  U(Z(tn), null, {
                    default: oe(() => [
                      U(
                        Z(vn),
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
                          default: oe(() => [
                            n.value == 5
                              ? (L(),
                                he(Z(v0), {
                                  key: 0,
                                  class:
                                    "text-slate-900 hover:text-emerald-500 transition-colors duration-300",
                                }))
                              : n.value == 4
                                ? (L(),
                                  he(Z(a0), {
                                    key: 1,
                                    class:
                                      "text-slate-800 hover:text-emerald-500 transition-colors duration-300",
                                  }))
                                : n.value == 3
                                  ? (L(),
                                    he(Z(o0), {
                                      key: 2,
                                      class:
                                        "text-slate-300 hover:text-orange-200 transition-colors duration-300",
                                    }))
                                  : n.value == 2
                                    ? (L(),
                                      he(Z(h0), {
                                        key: 3,
                                        class:
                                          "text-slate-200 hover:text-orange-500 transition-colors duration-300",
                                      }))
                                    : (L(),
                                      he(Z(p0), {
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
                      U(
                        Z(bn),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: oe(() => [
                            f("div", q0, [
                              f("div", U0, [
                                ga(
                                  f(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        u[26] || (u[26] = (d) => (n.value = d)),
                                      onInput: l,
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
                    U(
                      Z(zr),
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
                          "font-monospace font-bold cursor-pointer transition-colors duration-300",
                        ]),
                        onClick: o,
                        id: "logoText",
                      },
                      " josephhansen.dev ",
                      2,
                    ),
                  ]),
                  U(
                    Z(kl),
                    {
                      class: x({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: u[27] || (u[27] = (d) => i()),
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
                    u[65] ||
                      (u[65] = f(
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
                            u[28] || (u[28] = (d) => a("/web-portfolio")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Web Portfolio ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick: u[29] || (u[29] = (d) => a("/web-services")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Web Services ",
                            2,
                          ),
                        ],
                      ),
                    ]),
                    u[66] ||
                      (u[66] = f(
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
                            (u[30] = (d) => a("/unity-editor-scripts")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Helpful Editor Scripts ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[31] || (u[31] = (d) => a("/unity-projects")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Projects ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[32] || (u[32] = (d) => a("/unity-shader-graph")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Shader Graph ",
                            2,
                          ),
                        ],
                      ),
                    ]),
                    u[67] ||
                      (u[67] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Programming",
                        -1,
                      )),
                    f("ul", Z0, [
                      u[61] ||
                        (u[61] = f(
                          "li",
                          { class: "py-1 px-3 rounded opacity-75 text-sm" },
                          "PHP",
                          -1,
                        )),
                      f("ul", Q0, [
                        f(
                          "a",
                          { onClick: u[33] || (u[33] = (d) => a("/figref")) },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " FigRef ",
                              2,
                            ),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[34] || (u[34] = (d) => a("/wordpress-themes")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " Custom WordPress Themes ",
                              2,
                            ),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[35] || (u[35] = (d) => a("/wordpress-plugins")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " WordPress Plugins ",
                              2,
                            ),
                          ],
                        ),
                      ]),
                      u[62] ||
                        (u[62] = f(
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
                              (u[36] = (d) => a("/discourse-image-comparison")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " Discourse Image Comparison Slider ",
                              2,
                            ),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[37] || (u[37] = (d) => a("/garden-tracker")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " Garden Tracker ",
                              2,
                            ),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[38] ||
                              (u[38] = (d) => a("/javascript-snippets")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " Javascript Snippets ",
                              2,
                            ),
                          ],
                        ),
                      ]),
                      u[63] ||
                        (u[63] = f(
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
                              (u[39] = (d) => a("/blender-arduino-controller")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " Blender Arduino Controller ",
                              2,
                            ),
                          ],
                        ),
                        f(
                          "a",
                          {
                            onClick:
                              u[40] || (u[40] = (d) => a("/arduino-leds")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " LEDs ",
                              2,
                            ),
                          ],
                        ),
                      ]),
                      u[64] ||
                        (u[64] = f(
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
                              u[41] || (u[41] = (d) => a("/instagram-scraper")),
                          },
                          [
                            f(
                              "li",
                              {
                                class: x([
                                  "py-1 px-3 rounded text-sm transition-colors duration-300",
                                  {
                                    "hover:text-emerald-500": n.value >= 4,
                                    "hover:text-orange-200": n.value == 3,
                                    "hover:text-orange-500": n.value == 2,
                                    "hover:text-orange-400": n.value == 1,
                                  },
                                ]),
                              },
                              " Instagram Scraper ",
                              2,
                            ),
                          ],
                        ),
                      ]),
                    ]),
                    u[68] ||
                      (u[68] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Blender",
                        -1,
                      )),
                    f("ul", sh, [
                      f(
                        "a",
                        {
                          onClick: u[42] || (u[42] = (d) => a("/blender-art")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Art Portfolio ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[43] || (u[43] = (d) => a("/fruitbat")) },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Custom Build (Fruitbat) ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[44] || (u[44] = (d) => a("/blender-addons")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " My Add-Ons ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick: u[45] || (u[45] = (d) => a("/shading-rig")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Shading Rig + Cel Character Tools ",
                            2,
                          ),
                        ],
                      ),
                    ]),
                    u[69] ||
                      (u[69] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "Communications",
                        -1,
                      )),
                    f("ul", rh, [
                      f(
                        "a",
                        { onClick: u[46] || (u[46] = (d) => a("/devlog")) },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Technical Blog ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[47] || (u[47] = (d) => a("/blog")) },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Personal Blog ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        {
                          onClick:
                            u[48] || (u[48] = (d) => a("/presentations")),
                        },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Presentations ",
                            2,
                          ),
                        ],
                      ),
                    ]),
                    u[70] ||
                      (u[70] = f(
                        "li",
                        { class: "py-2 px-3 rounded opacity-75 font-semibold" },
                        "About Me",
                        -1,
                      )),
                    f("ul", lh, [
                      f(
                        "a",
                        { onClick: u[49] || (u[49] = (d) => a("/about-me")) },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " About Me ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[50] || (u[50] = (d) => a("/resume")) },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Resume ",
                            2,
                          ),
                        ],
                      ),
                      f(
                        "a",
                        { onClick: u[51] || (u[51] = (d) => a("/contact")) },
                        [
                          f(
                            "li",
                            {
                              class: x([
                                "py-2 px-3 rounded transition-colors duration-300",
                                {
                                  "hover:text-emerald-500": n.value >= 4,
                                  "hover:text-orange-200": n.value == 3,
                                  "hover:text-orange-500": n.value == 2,
                                  "hover:text-orange-400": n.value == 1,
                                },
                              ]),
                            },
                            " Contact ",
                            2,
                          ),
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
  oh = { class: "flex justify-center py-5 flex-col" },
  ah = { class: "inline-block relative" },
  uh = { class: "font-semibold text-center px-1" },
  ch = { class: "flex py-5 justify-center gap-3 w-full" },
  dh = { href: "/web-portfolio" },
  fh = { href: "/web-pricing" },
  ph = {
    directives: {
      typewriter: {
        beforeUpdate(e, t) {
          if (t.oldValue !== t.value) {
            let n = t.value,
              s = Math.random() * 100 + 25
            ;(e.textContent = ""),
              n.split("").forEach((r, l) => {
                setTimeout(() => {
                  e.textContent += r
                }, s * l)
              })
          }
        },
      },
    },
  },
  hh = Object.assign(ph, {
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
        const l = () => {
            s.value = !1
          },
          o = () => {
            s.value = !0
          }
        window.addEventListener("mousedown", l),
          window.addEventListener("mouseup", o),
          dn(() => {
            window.removeEventListener("mousedown", l),
              window.removeEventListener("mouseup", o)
          })
      }),
        Vl(() => {
          s.value = !1
        })
      const r = se(() => t.value[n.value])
      return (l, o) => {
        const i = rd("typewriter")
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
                o[0] || (o[0] = ae(" I make ", -1)),
                f("div", ah, [
                  ga((L(), K("span", uh, [ae(Je(r.value), 1)])), [
                    [i, r.value],
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
                o[1] || (o[1] = ae(" websites. ", -1)),
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
            f("div", ch, [
              f("a", dh, [
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
              f("a", fh, [
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
function Co(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function si(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {})
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Co(t[s]) && Co(e[s]) && Object.keys(t[s]).length > 0 && si(e[s], t[s])
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
  return si(e, mu), e
}
const gh = {
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
  return si(e, gh), e
}
function mh(e) {
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
function vu(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function er() {
  return Date.now()
}
function bh(e) {
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
  let s, r, l
  const o = bh(e)
  return (
    n.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((i) => i.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((l =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (r = l.m41)
        : s.length === 16
          ? (r = parseFloat(s[12]))
          : (r = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (r = l.m42)
        : s.length === 16
          ? (r = parseFloat(s[13]))
          : (r = parseFloat(s[5]))),
    r || 0
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
function yh(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function at() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (s != null && !yh(s)) {
      const r = Object.keys(Object(s)).filter((l) => t.indexOf(l) < 0)
      for (let l = 0, o = r.length; l < o; l += 1) {
        const i = r[l],
          a = Object.getOwnPropertyDescriptor(s, i)
        a !== void 0 &&
          a.enumerable &&
          (Ls(e[i]) && Ls(s[i])
            ? s[i].__swiper__
              ? (e[i] = s[i])
              : at(e[i], s[i])
            : !Ls(e[i]) && Ls(s[i])
              ? ((e[i] = {}), s[i].__swiper__ ? (e[i] = s[i]) : at(e[i], s[i]))
              : (e[i] = s[i]))
      }
    }
  }
  return e
}
function js(e, t, n) {
  e.style.setProperty(t, n)
}
function bu(e) {
  let { swiper: t, targetPosition: n, side: s } = e
  const r = Qe(),
    l = -t.translate
  let o = null,
    i
  const a = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(t.cssModeFrameID)
  const c = n > l ? "next" : "prev",
    u = (p, h) => (c === "next" && p >= h) || (c === "prev" && p <= h),
    d = () => {
      ;(i = new Date().getTime()), o === null && (o = i)
      const p = Math.max(Math.min((i - o) / a, 1), 0),
        h = 0.5 - Math.cos(p * Math.PI) / 2
      let g = l + h * (n - l)
      if ((u(g, n) && (g = n), t.wrapperEl.scrollTo({ [s]: g }), u(g, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: g })
          }),
          r.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = r.requestAnimationFrame(d)
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
    t ? s.filter((r) => r.matches(t)) : s
  )
}
function wh(e, t) {
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
function Sh(e, t) {
  const n = Qe()
  let s = t.contains(e)
  return (
    !s &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = wh(e, t))),
    s
  )
}
function tr(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function nr(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : mh(t))), n
}
function Ch(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function Eh(e, t) {
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
function sr(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function xu(e, t) {
  const n = []
  let s = e.parentElement
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement)
  return n
}
function Pl(e, t, n) {
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
function rr(e, t) {
  t === void 0 && (t = ""),
    typeof trustedTypes < "u"
      ? (e.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (n) => n })
          .createHTML(t))
      : (e.innerHTML = t)
}
let Dr
function Th() {
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
function yu() {
  return Dr || (Dr = Th()), Dr
}
let Fr
function kh(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = yu(),
    s = Qe(),
    r = s.navigator.platform,
    l = t || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    i = s.screen.width,
    a = s.screen.height,
    c = l.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = l.match(/(iPad).*OS\s([\d_]+)/)
  const d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = r === "Win32"
  let g = r === "MacIntel"
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
    !u &&
      g &&
      n.touch &&
      v.indexOf(`${i}x${a}`) >= 0 &&
      ((u = l.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (g = !1)),
    c && !h && ((o.os = "android"), (o.android = !0)),
    (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  )
}
function wu(e) {
  return e === void 0 && (e = {}), Fr || (Fr = kh(e)), Fr
}
let Hr
function Ph() {
  const e = Qe(),
    t = wu()
  let n = !1
  function s() {
    const i = e.navigator.userAgent.toLowerCase()
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    )
  }
  if (s()) {
    const i = String(e.navigator.userAgent)
    if (i.includes("Version/")) {
      const [a, c] = i
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((u) => Number(u))
      n = a < 16 || (a === 16 && c < 2)
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    l = s(),
    o = l || (r && t.ios)
  return { isSafari: n || l, needPerspectiveFix: n, need3dFix: o, isWebView: r }
}
function Su() {
  return Hr || (Hr = Ph()), Hr
}
function Ih(e) {
  let { swiper: t, on: n, emit: s } = e
  const r = Qe()
  let l = null,
    o = null
  const i = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((d) => {
          o = r.requestAnimationFrame(() => {
            const { width: p, height: h } = t
            let g = p,
              v = h
            d.forEach((k) => {
              let { contentBoxSize: w, contentRect: m, target: b } = k
              ;(b && b !== t.el) ||
                ((g = m ? m.width : (w[0] || w).inlineSize),
                (v = m ? m.height : (w[0] || w).blockSize))
            }),
              (g !== p || v !== h) && i()
          })
        })),
        l.observe(t.el))
    },
    c = () => {
      o && r.cancelAnimationFrame(o),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null))
    },
    u = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange")
    }
  n("init", () => {
    if (t.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a()
      return
    }
    r.addEventListener("resize", i), r.addEventListener("orientationchange", u)
  }),
    n("destroy", () => {
      c(),
        r.removeEventListener("resize", i),
        r.removeEventListener("orientationchange", u)
    })
}
function $h(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
  const l = [],
    o = Qe(),
    i = function (u, d) {
      d === void 0 && (d = {})
      const p = o.MutationObserver || o.WebkitMutationObserver,
        h = new p((g) => {
          if (t.__preventObserver__) return
          if (g.length === 1) {
            r("observerUpdate", g[0])
            return
          }
          const v = function () {
            r("observerUpdate", g[0])
          }
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0)
        })
      h.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        l.push(h)
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = xu(t.hostEl)
          for (let d = 0; d < u.length; d += 1) i(u[d])
        }
        i(t.hostEl, { childList: t.params.observeSlideChildren }),
          i(t.wrapperEl, { attributes: !1 })
      }
    },
    c = () => {
      l.forEach((u) => {
        u.disconnect()
      }),
        l.splice(0, l.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", c)
}
var Mh = {
  on(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    const r = n ? "unshift" : "push"
    return (
      e.split(" ").forEach((l) => {
        s.eventsListeners[l] || (s.eventsListeners[l] = []),
          s.eventsListeners[l][r](t)
      }),
      s
    )
  },
  once(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    function r() {
      s.off(e, r), r.__emitterProxy && delete r.__emitterProxy
      for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++)
        o[i] = arguments[i]
      t.apply(s, o)
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
              n.eventsListeners[s].forEach((r, l) => {
                ;(r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(l, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, s
    for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
      l[o] = arguments[o]
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (s = e))
        : ((t = l[0].events), (n = l[0].data), (s = l[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(s, [a, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((c) => {
              c.apply(s, n)
            })
      }),
      e
    )
  },
}
function Ah() {
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
function Oh() {
  const e = this
  function t($, j) {
    return parseFloat($.getPropertyValue(e.getDirectionLabel(j)) || 0)
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: r, size: l, rtlTranslate: o, wrongRTL: i } = e,
    a = e.virtual && n.virtual.enabled,
    c = a ? e.virtual.slides.length : e.slides.length,
    u = Ot(r, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : u.length
  let p = []
  const h = [],
    g = []
  let v = n.slidesOffsetBefore
  typeof v == "function" && (v = n.slidesOffsetBefore.call(e))
  let k = n.slidesOffsetAfter
  typeof k == "function" && (k = n.slidesOffsetAfter.call(e))
  const w = e.snapGrid.length,
    m = e.slidesGrid.length
  let b = n.spaceBetween,
    S = -v,
    T = 0,
    M = 0
  if (typeof l > "u") return
  typeof b == "string" && b.indexOf("%") >= 0
    ? (b = (parseFloat(b.replace("%", "")) / 100) * l)
    : typeof b == "string" && (b = parseFloat(b)),
    (e.virtualSize = -b),
    u.forEach(($) => {
      o ? ($.style.marginLeft = "") : ($.style.marginRight = ""),
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
          A = e.isHorizontal() ? Pl(j, "width") : Pl(j, "height")
        else {
          const ge = t(F, "width"),
            O = t(F, "padding-left"),
            N = t(F, "padding-right"),
            B = t(F, "margin-left"),
            xe = t(F, "margin-right"),
            me = F.getPropertyValue("box-sizing")
          if (me && me === "border-box") A = ge + B + xe
          else {
            const { clientWidth: Le, offsetWidth: je } = j
            A = ge + O + N + B + xe + (je - Le)
          }
        }
        W && (j.style.transform = W),
          de && (j.style.webkitTransform = de),
          n.roundLengths && (A = Math.floor(A))
      } else
        (A = (l - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (A = Math.floor(A)),
          u[$] && (u[$].style[e.getDirectionLabel("width")] = `${A}px`)
      u[$] && (u[$].swiperSlideSize = A),
        g.push(A),
        n.centeredSlides
          ? ((S = S + A / 2 + T / 2 + b),
            T === 0 && $ !== 0 && (S = S - l / 2 - b),
            $ === 0 && (S = S - l / 2 - b),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            n.roundLengths && (S = Math.floor(S)),
            M % n.slidesPerGroup === 0 && p.push(S),
            h.push(S))
          : (n.roundLengths && (S = Math.floor(S)),
            (M - Math.min(e.params.slidesPerGroupSkip, M)) %
              e.params.slidesPerGroup ===
              0 && p.push(S),
            h.push(S),
            (S = S + A + b)),
        (e.virtualSize += A + b),
        (T = A),
        (M += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + k),
    o &&
      i &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + b}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`),
    E && e.grid.updateWrapperSize(A, p),
    !n.centeredSlides)
  ) {
    const $ = []
    for (let j = 0; j < p.length; j += 1) {
      let F = p[j]
      n.roundLengths && (F = Math.floor(F)),
        p[j] <= e.virtualSize - l && $.push(F)
    }
    ;(p = $),
      Math.floor(e.virtualSize - l) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - l)
  }
  if (a && n.loop) {
    const $ = g[0] + b
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
  if ((p.length === 0 && (p = [0]), b !== 0)) {
    const $ =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight")
    u.filter((j, F) =>
      !n.cssMode || n.loop ? !0 : F !== u.length - 1,
    ).forEach((j) => {
      j.style[$] = `${b}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let $ = 0
    g.forEach((F) => {
      $ += F + (b || 0)
    }),
      ($ -= b)
    const j = $ > l ? $ - l : 0
    p = p.map((F) => (F <= 0 ? -v : F > j ? j + k : F))
  }
  if (n.centerInsufficientSlides) {
    let $ = 0
    g.forEach((F) => {
      $ += F + (b || 0)
    }),
      ($ -= b)
    const j = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if ($ + j < l) {
      const F = (l - $ - j) / 2
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
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    js(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      js(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`,
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
function Lh(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled
  let r = 0,
    l
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const o = (i) => (s ? t.slides[t.getSlideIndexByData(i)] : t.slides[i])
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((i) => {
        n.push(i)
      })
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const i = t.activeIndex + l
        if (i > t.slides.length && !s) break
        n.push(o(i))
      }
  else n.push(o(t.activeIndex))
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const i = n[l].offsetHeight
      r = i > r ? i : r
    }
  ;(r || r === 0) && (t.wrapperEl.style.height = `${r}px`)
}
function jh() {
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
const Eo = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function Bh(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: r, snapGrid: l } = t
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset()
  let o = -e
  r && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let i = n.spaceBetween
  typeof i == "string" && i.indexOf("%") >= 0
    ? (i = (parseFloat(i.replace("%", "")) / 100) * t.size)
    : typeof i == "string" && (i = parseFloat(i))
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a]
    let u = c.swiperSlideOffset
    n.cssMode && n.centeredSlides && (u -= s[0].swiperSlideOffset)
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + i),
      p =
        (o - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + i),
      h = -(o - u),
      g = h + t.slidesSizesGrid[a],
      v = h >= 0 && h <= t.size - t.slidesSizesGrid[a],
      k =
        (h >= 0 && h < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (h <= 0 && g >= t.size)
    k && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(a)),
      Eo(c, k, n.slideVisibleClass),
      Eo(c, v, n.slideFullyVisibleClass),
      (c.progress = r ? -d : d),
      (c.originalProgress = r ? -p : p)
  }
}
function Rh(e) {
  const t = this
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * u) || 0
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate()
  let { progress: r, isBeginning: l, isEnd: o, progressLoop: i } = t
  const a = l,
    c = o
  if (s === 0) (r = 0), (l = !0), (o = !0)
  else {
    r = (e - t.minTranslate()) / s
    const u = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1
    ;(l = u || r <= 0), (o = d || r >= 1), u && (r = 0), d && (r = 1)
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[u],
      h = t.slidesGrid[d],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(e)
    v >= p ? (i = (v - p) / g) : (i = (v + g - h) / g), i > 1 && (i -= 1)
  }
  Object.assign(t, { progress: r, progressLoop: i, isBeginning: l, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !a && t.emit("reachBeginning toEdge"),
    o && !c && t.emit("reachEnd toEdge"),
    ((a && !l) || (c && !o)) && t.emit("fromEdge"),
    t.emit("progress", r)
}
const Gr = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function _h() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: r } = e,
    l = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    i = (d) => Ot(s, `.${n.slideClass}${d}, swiper-slide${d}`)[0]
  let a, c, u
  if (l)
    if (n.loop) {
      let d = r - e.virtual.slidesBefore
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = i(`[data-swiper-slide-index="${d}"]`))
    } else a = i(`[data-swiper-slide-index="${r}"]`)
  else
    o
      ? ((a = t.find((d) => d.column === r)),
        (u = t.find((d) => d.column === r + 1)),
        (c = t.find((d) => d.column === r - 1)))
      : (a = t[r])
  a &&
    (o ||
      ((u = Eh(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (c = Ch(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((d) => {
      Gr(d, d === a, n.slideActiveClass),
        Gr(d, d === u, n.slideNextClass),
        Gr(d, d === c, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Gs = (e, t) => {
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
  Vr = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  Il = (e) => {
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
      const o = r,
        i = [o - t]
      i.push(...Array.from({ length: t }).map((a, c) => o + s + c)),
        e.slides.forEach((a, c) => {
          i.includes(a.column) && Vr(e, c)
        })
      return
    }
    const l = r + s - 1
    if (e.params.rewind || e.params.loop)
      for (let o = r - t; o <= l + t; o += 1) {
        const i = ((o % n) + n) % n
        ;(i < r || i > l) && Vr(e, i)
      }
    else
      for (let o = Math.max(r - t, 0); o <= Math.min(l + t, n - 1); o += 1)
        o !== r && (o > l || o < r) && Vr(e, o)
  }
function Nh(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate
  let r
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? s >= t[l] && s < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (r = l)
        : s >= t[l] && s < t[l + 1] && (r = l + 1)
      : s >= t[l] && (r = l)
  return n.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r
}
function zh(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: r, activeIndex: l, realIndex: o, snapIndex: i } = t
  let a = e,
    c
  const u = (h) => {
    let g = h - t.virtual.slidesBefore
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    )
  }
  if ((typeof a > "u" && (a = Nh(t)), s.indexOf(n) >= 0)) c = s.indexOf(n)
  else {
    const h = Math.min(r.slidesPerGroupSkip, a)
    c = h + Math.floor((a - h) / r.slidesPerGroup)
  }
  if ((c >= s.length && (c = s.length - 1), a === l && !t.params.loop)) {
    c !== i && ((t.snapIndex = c), t.emit("snapIndexChange"))
    return
  }
  if (a === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(a)
    return
  }
  const d = t.grid && r.grid && r.grid.rows > 1
  let p
  if (t.virtual && r.virtual.enabled && r.loop) p = u(a)
  else if (d) {
    const h = t.slides.find((v) => v.column === a)
    let g = parseInt(h.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(h), 0)),
      (p = Math.floor(g / r.grid.rows))
  } else if (t.slides[a]) {
    const h = t.slides[a].getAttribute("data-swiper-slide-index")
    h ? (p = parseInt(h, 10)) : (p = a)
  } else p = a
  Object.assign(t, {
    previousSnapIndex: i,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: l,
    activeIndex: a,
  }),
    t.initialized && Il(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== p && t.emit("realIndexChange"), t.emit("slideChange"))
}
function Dh(e, t) {
  const n = this,
    s = n.params
  let r = e.closest(`.${s.slideClass}, swiper-slide`)
  !r &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((i) => {
      !r && i.matches && i.matches(`.${s.slideClass}, swiper-slide`) && (r = i)
    })
  let l = !1,
    o
  if (r) {
    for (let i = 0; i < n.slides.length; i += 1)
      if (n.slides[i] === r) {
        ;(l = !0), (o = i)
        break
      }
  }
  if (r && l)
    (n.clickedSlide = r),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
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
var Fh = {
  updateSize: Ah,
  updateSlides: Oh,
  updateAutoHeight: Lh,
  updateSlidesOffset: jh,
  updateSlidesProgress: Bh,
  updateProgress: Rh,
  updateSlidesClasses: _h,
  updateActiveIndex: zh,
  updateClickedSlide: Dh,
}
function Hh(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: s, translate: r, wrapperEl: l } = t
  if (n.virtualTranslate) return s ? -r : r
  if (n.cssMode) return r
  let o = xh(l, e)
  return (o += t.cssOverflowAdjustment()), s && (o = -o), o || 0
}
function Gh(e, t) {
  const n = this,
    { rtlTranslate: s, params: r, wrapperEl: l, progress: o } = n
  let i = 0,
    a = 0
  const c = 0
  n.isHorizontal() ? (i = s ? -e : e) : (a = e),
    r.roundLengths && ((i = Math.floor(i)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? i : a),
    r.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -i
          : -a)
      : r.virtualTranslate ||
        (n.isHorizontal()
          ? (i -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${i}px, ${a}px, ${c}px)`))
  let u
  const d = n.maxTranslate() - n.minTranslate()
  d === 0 ? (u = 0) : (u = (e - n.minTranslate()) / d),
    u !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function Vh() {
  return -this.snapGrid[0]
}
function Wh() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function qh(e, t, n, s, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0)
  const l = this,
    { params: o, wrapperEl: i } = l
  if (l.animating && o.preventInteractionOnTransition) return !1
  const a = l.minTranslate(),
    c = l.maxTranslate()
  let u
  if (
    (s && e > a ? (u = a) : s && e < c ? (u = c) : (u = e),
    l.updateProgress(u),
    o.cssMode)
  ) {
    const d = l.isHorizontal()
    if (t === 0) i[d ? "scrollLeft" : "scrollTop"] = -u
    else {
      if (!l.support.smoothScroll)
        return (
          bu({ swiper: l, targetPosition: -u, side: d ? "left" : "top" }), !0
        )
      i.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" })
    }
    return !0
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(u),
        n && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(u),
        n && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (p) {
              !l ||
                l.destroyed ||
                (p.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  (l.animating = !1),
                  n && l.emit("transitionEnd")))
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  )
}
var Uh = {
  getTranslate: Hh,
  setTranslate: Gh,
  minTranslate: Vh,
  maxTranslate: Wh,
  translateTo: qh,
}
function Kh(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function Cu(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: r } = e
  const { activeIndex: l, previousIndex: o } = t
  let i = s
  i || (l > o ? (i = "next") : l < o ? (i = "prev") : (i = "reset")),
    t.emit(`transition${r}`),
    n && i === "reset"
      ? t.emit(`slideResetTransition${r}`)
      : n &&
        l !== o &&
        (t.emit(`slideChangeTransition${r}`),
        i === "next"
          ? t.emit(`slideNextTransition${r}`)
          : t.emit(`slidePrevTransition${r}`))
}
function Yh(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Cu({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function Xh(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  ;(n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Cu({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var Jh = { setTransition: Kh, transitionStart: Yh, transitionEnd: Xh }
function Zh(e, t, n, s, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const l = this
  let o = e
  o < 0 && (o = 0)
  const {
    params: i,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: g,
  } = l
  if (
    (!g && !s && !r) ||
    l.destroyed ||
    (l.animating && i.preventInteractionOnTransition)
  )
    return !1
  typeof t > "u" && (t = l.params.speed)
  const v = Math.min(l.params.slidesPerGroupSkip, o)
  let k = v + Math.floor((o - v) / l.params.slidesPerGroup)
  k >= a.length && (k = a.length - 1)
  const w = -a[k]
  if (i.normalizeSlideIndex)
    for (let E = 0; E < c.length; E += 1) {
      const A = -Math.floor(w * 100),
        I = Math.floor(c[E] * 100),
        $ = Math.floor(c[E + 1] * 100)
      typeof c[E + 1] < "u"
        ? A >= I && A < $ - ($ - I) / 2
          ? (o = E)
          : A >= I && A < $ && (o = E + 1)
        : A >= I && (o = E)
    }
  if (
    l.initialized &&
    o !== d &&
    ((!l.allowSlideNext &&
      (p
        ? w > l.translate && w > l.minTranslate()
        : w < l.translate && w < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        w > l.translate &&
        w > l.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1
  o !== (u || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(w)
  let m
  o > d ? (m = "next") : o < d ? (m = "prev") : (m = "reset")
  const b = l.virtual && l.params.virtual.enabled
  if (!(b && r) && ((p && -w === l.translate) || (!p && w === l.translate)))
    return (
      l.updateActiveIndex(o),
      i.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      i.effect !== "slide" && l.setTranslate(w),
      m !== "reset" && (l.transitionStart(n, m), l.transitionEnd(n, m)),
      !1
    )
  if (i.cssMode) {
    const E = l.isHorizontal(),
      A = p ? w : -w
    if (t === 0)
      b &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        b && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[E ? "scrollLeft" : "scrollTop"] = A
            }))
          : (h[E ? "scrollLeft" : "scrollTop"] = A),
        b &&
          requestAnimationFrame(() => {
            ;(l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1)
          })
    else {
      if (!l.support.smoothScroll)
        return (
          bu({ swiper: l, targetPosition: A, side: E ? "left" : "top" }), !0
        )
      h.scrollTo({ [E ? "left" : "top"]: A, behavior: "smooth" })
    }
    return !0
  }
  const M = Su().isSafari
  return (
    b && !r && M && l.isElement && l.virtual.update(!1, !1, o),
    l.setTransition(t),
    l.setTranslate(w),
    l.updateActiveIndex(o),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, s),
    l.transitionStart(n, m),
    t === 0
      ? l.transitionEnd(n, m)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (A) {
            !l ||
              l.destroyed ||
              (A.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd,
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, m)))
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function Qh(e, t, n, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const r = this
  if (r.destroyed) return
  typeof t > "u" && (t = r.params.speed)
  const l = r.grid && r.params.grid && r.params.grid.rows > 1
  let o = e
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore
    else {
      let i
      if (l) {
        const p = o * r.params.grid.rows
        i = r.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p,
        ).column
      } else i = r.getSlideIndexByData(o)
      const a = l
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: c } = r.params
      let u = r.params.slidesPerView
      u === "auto"
        ? (u = r.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          c && u % 2 === 0 && (u = u + 1))
      let d = a - i < u
      if (
        (c && (d = d || i < Math.ceil(u / 2)),
        s && c && r.params.slidesPerView !== "auto" && !l && (d = !1),
        d)
      ) {
        const p = c
          ? i < r.activeIndex
            ? "prev"
            : "next"
          : i - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev"
        r.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? i + 1 : i - a + 1,
          slideRealIndex: p === "next" ? r.realIndex : void 0,
        })
      }
      if (l) {
        const p = o * r.params.grid.rows
        o = r.slides.find(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p,
        ).column
      } else o = r.getSlideIndexByData(o)
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, t, n, s)
    }),
    r
  )
}
function eg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    { enabled: r, params: l, animating: o } = s
  if (!r || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  let i = l.slidesPerGroup
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (i = Math.max(s.slidesPerViewDynamic("current", !0), 1))
  const a = s.activeIndex < l.slidesPerGroupSkip ? 1 : i,
    c = s.virtual && l.virtual.enabled
  if (l.loop) {
    if (o && !c && l.loopPreventsSliding) return !1
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, e, t, n)
        }),
        !0
      )
  }
  return l.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + a, e, t, n)
}
function tg(e, t, n) {
  t === void 0 && (t = !0)
  const s = this,
    {
      params: r,
      snapGrid: l,
      slidesGrid: o,
      rtlTranslate: i,
      enabled: a,
      animating: c,
    } = s
  if (!a || s.destroyed) return s
  typeof e > "u" && (e = s.params.speed)
  const u = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (c && !u && r.loopPreventsSliding) return !1
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const d = i ? s.translate : -s.translate
  function p(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
  }
  const h = p(d),
    g = l.map((m) => p(m)),
    v = r.freeMode && r.freeMode.enabled
  let k = l[g.indexOf(h) - 1]
  if (typeof k > "u" && (r.cssMode || v)) {
    let m
    l.forEach((b, S) => {
      h >= b && (m = S)
    }),
      typeof m < "u" && (k = v ? l[m] : l[m > 0 ? m - 1 : m])
  }
  let w = 0
  if (
    (typeof k < "u" &&
      ((w = o.indexOf(k)),
      w < 0 && (w = s.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((w = w - s.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const m =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(m, e, t, n)
  } else if (r.loop && s.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(w, e, t, n)
      }),
      !0
    )
  return s.slideTo(w, e, t, n)
}
function ng(e, t, n) {
  t === void 0 && (t = !0)
  const s = this
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed), s.slideTo(s.activeIndex, e, t, n)
    )
}
function sg(e, t, n, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5)
  const r = this
  if (r.destroyed) return
  typeof e > "u" && (e = r.params.speed)
  let l = r.activeIndex
  const o = Math.min(r.params.slidesPerGroupSkip, l),
    i = o + Math.floor((l - o) / r.params.slidesPerGroup),
    a = r.rtlTranslate ? r.translate : -r.translate
  if (a >= r.snapGrid[i]) {
    const c = r.snapGrid[i],
      u = r.snapGrid[i + 1]
    a - c > (u - c) * s && (l += r.params.slidesPerGroup)
  } else {
    const c = r.snapGrid[i - 1],
      u = r.snapGrid[i]
    a - c <= (u - c) * s && (l -= r.params.slidesPerGroup)
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, r.slidesGrid.length - 1)),
    r.slideTo(l, e, t, n)
  )
}
function rg() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView
  let r = e.getSlideIndexWhenGrid(e.clickedIndex),
    l
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
    i = e.grid && e.params.grid && e.params.grid.rows > 1
  if (t.loop) {
    if (e.animating) return
    ;(l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? e.slideToLoop(l)
        : r >
            (i
              ? (e.slides.length - s) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - s)
          ? (e.loopFix(),
            (r = e.getSlideIndex(
              Ot(n, `${o}[data-swiper-slide-index="${l}"]`)[0],
            )),
            vu(() => {
              e.slideTo(r)
            }))
          : e.slideTo(r)
  } else e.slideTo(r)
}
var lg = {
  slideTo: Zh,
  slideToLoop: Qh,
  slideNext: eg,
  slidePrev: tg,
  slideReset: ng,
  slideToClosest: sg,
  slideToClickedSlide: rg,
}
function ig(e, t) {
  const n = this,
    { params: s, slidesEl: r } = n
  if (!s.loop || (n.virtual && n.params.virtual.enabled)) return
  const l = () => {
      Ot(r, `.${s.slideClass}, swiper-slide`).forEach((h, g) => {
        h.setAttribute("data-swiper-slide-index", g)
      })
    },
    o = () => {
      const p = Ot(r, `.${s.slideBlankClass}`)
      p.forEach((h) => {
        h.remove()
      }),
        p.length > 0 && (n.recalcSlides(), n.updateSlides())
    },
    i = n.grid && s.grid && s.grid.rows > 1
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || i) && o()
  const a = s.slidesPerGroup * (i ? s.grid.rows : 1),
    c = n.slides.length % a !== 0,
    u = i && n.slides.length % s.grid.rows !== 0,
    d = (p) => {
      for (let h = 0; h < p; h += 1) {
        const g = n.isElement
          ? nr("swiper-slide", [s.slideBlankClass])
          : nr("div", [s.slideClass, s.slideBlankClass])
        n.slidesEl.append(g)
      }
    }
  if (c) {
    if (s.loopAddBlankSlides) {
      const p = a - (n.slides.length % a)
      d(p), n.recalcSlides(), n.updateSlides()
    } else
      tr(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    l()
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const p = s.grid.rows - (n.slides.length % s.grid.rows)
      d(p), n.recalcSlides(), n.updateSlides()
    } else
      tr(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    l()
  } else l()
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
    setTranslate: r,
    activeSlideIndex: l,
    initial: o,
    byController: i,
    byMousewheel: a,
  } = e === void 0 ? {} : e
  const c = this
  if (!c.params.loop) return
  c.emit("beforeLoopFix")
  const {
      slides: u,
      allowSlidePrev: d,
      allowSlideNext: p,
      slidesEl: h,
      params: g,
    } = c,
    { centeredSlides: v, initialSlide: k } = g
  if (
    ((c.allowSlidePrev = !0),
    (c.allowSlideNext = !0),
    c.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && c.snapIndex === 0
        ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && c.snapIndex < g.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 &&
            c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
      (c.allowSlidePrev = d),
      (c.allowSlideNext = p),
      c.emit("loopFix")
    return
  }
  let w = g.slidesPerView
  w === "auto"
    ? (w = c.slidesPerViewDynamic())
    : ((w = Math.ceil(parseFloat(g.slidesPerView, 10))),
      v && w % 2 === 0 && (w = w + 1))
  const m = g.slidesPerGroupAuto ? w : g.slidesPerGroup
  let b = v ? Math.max(m, Math.ceil(w / 2)) : m
  b % m !== 0 && (b += m - (b % m)),
    (b += g.loopAdditionalSlides),
    (c.loopedSlides = b)
  const S = c.grid && g.grid && g.grid.rows > 1
  u.length < w + b || (c.params.effect === "cards" && u.length < w + b * 2)
    ? tr(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : S &&
      g.grid.fill === "row" &&
      tr(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const T = [],
    M = [],
    E = S ? Math.ceil(u.length / g.grid.rows) : u.length,
    A = o && E - k < w && !v
  let I = A ? k : c.activeIndex
  typeof l > "u"
    ? (l = c.getSlideIndex(
        u.find((O) => O.classList.contains(g.slideActiveClass)),
      ))
    : (I = l)
  const $ = s === "next" || !s,
    j = s === "prev" || !s
  let F = 0,
    W = 0
  const ge = (S ? u[l].column : l) + (v && typeof r > "u" ? -w / 2 + 0.5 : 0)
  if (ge < b) {
    F = Math.max(b - ge, m)
    for (let O = 0; O < b - ge; O += 1) {
      const N = O - Math.floor(O / E) * E
      if (S) {
        const B = E - N - 1
        for (let xe = u.length - 1; xe >= 0; xe -= 1)
          u[xe].column === B && T.push(xe)
      } else T.push(E - N - 1)
    }
  } else if (ge + w > E - b) {
    ;(W = Math.max(ge - (E - b * 2), m)), A && (W = Math.max(W, w - E + k + 1))
    for (let O = 0; O < W; O += 1) {
      const N = O - Math.floor(O / E) * E
      S
        ? u.forEach((B, xe) => {
            B.column === N && M.push(xe)
          })
        : M.push(N)
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1
    }),
    c.params.effect === "cards" &&
      u.length < w + b * 2 &&
      (M.includes(l) && M.splice(M.indexOf(l), 1),
      T.includes(l) && T.splice(T.indexOf(l), 1)),
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
    g.slidesPerView === "auto"
      ? c.updateSlides()
      : S &&
        ((T.length > 0 && j) || (M.length > 0 && $)) &&
        c.slides.forEach((O, N) => {
          c.grid.updateSlide(N, O, c.slides)
        }),
    g.watchSlidesProgress && c.updateSlidesOffset(),
    n)
  ) {
    if (T.length > 0 && j) {
      if (typeof t > "u") {
        const O = c.slidesGrid[I],
          B = c.slidesGrid[I + F] - O
        a
          ? c.setTranslate(c.translate - B)
          : (c.slideTo(I + Math.ceil(F), 0, !1, !0),
            r &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - B),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - B)))
      } else if (r) {
        const O = S ? T.length / g.grid.rows : T.length
        c.slideTo(c.activeIndex + O, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate)
      }
    } else if (M.length > 0 && $)
      if (typeof t > "u") {
        const O = c.slidesGrid[I],
          B = c.slidesGrid[I - W] - O
        a
          ? c.setTranslate(c.translate - B)
          : (c.slideTo(I - W, 0, !1, !0),
            r &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - B),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - B)))
      } else {
        const O = S ? M.length / g.grid.rows : M.length
        c.slideTo(c.activeIndex - O, 0, !1, !0)
      }
  }
  if (
    ((c.allowSlidePrev = d),
    (c.allowSlideNext = p),
    c.controller && c.controller.control && !i)
  ) {
    const O = {
      slideRealIndex: t,
      direction: s,
      setTranslate: r,
      activeSlideIndex: l,
      byController: !0,
    }
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((N) => {
          !N.destroyed &&
            N.params.loop &&
            N.loopFix({
              ...O,
              slideTo: N.params.slidesPerView === g.slidesPerView ? n : !1,
            })
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...O,
          slideTo:
            c.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        })
  }
  c.emit("loopFix")
}
function ag() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const s = []
  e.slides.forEach((r) => {
    const l =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex
    s[l] = r
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
var ug = { loopCreate: ig, loopFix: og, loopDestroy: ag }
function cg(e) {
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
function dg() {
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
var fg = { setGrabCursor: cg, unsetGrabCursor: dg }
function pg(e, t) {
  t === void 0 && (t = this)
  function n(s) {
    if (!s || s === jt() || s === Qe()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const r = s.closest(e)
    return !r && !s.getRootNode ? null : r || n(s.getRootNode().host)
  }
  return n(t)
}
function To(e, t, n) {
  const s = Qe(),
    { params: r } = e,
    l = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold
  return l && (n <= o || n >= s.innerWidth - o)
    ? l === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function hg(e) {
  const t = this,
    n = jt()
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
    To(t, s, s.targetTouches[0].pageX)
    return
  }
  const { params: l, touches: o, enabled: i } = t
  if (
    !i ||
    (!l.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return
  !t.animating && l.cssMode && l.loop && t.loopFix()
  let a = s.target
  if (
    (l.touchEventsTarget === "wrapper" && !Sh(a, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return
  const c = !!l.noSwipingClass && l.noSwipingClass !== "",
    u = s.composedPath ? s.composedPath() : s.path
  c && s.target && s.target.shadowRoot && u && (a = u[0])
  const d = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    p = !!(s.target && s.target.shadowRoot)
  if (l.noSwiping && (p ? pg(d, a) : a.closest(d))) {
    t.allowClick = !0
    return
  }
  if (l.swipeHandler && !a.closest(l.swipeHandler)) return
  ;(o.currentX = s.pageX), (o.currentY = s.pageY)
  const h = o.currentX,
    g = o.currentY
  if (!To(t, s, h)) return
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = h),
    (o.startY = g),
    (r.touchStartTime = er()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (r.allowThresholdMove = !1)
  let v = !0
  a.matches(r.focusableElements) &&
    ((v = !1), a.nodeName === "SELECT" && (r.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(r.focusableElements) &&
      n.activeElement !== a &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !a.matches(r.focusableElements))) &&
      n.activeElement.blur()
  const k = v && t.allowTouchMove && l.touchStartPreventDefault
  ;(l.touchStartForcePreventDefault || k) &&
    !a.isContentEditable &&
    s.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s)
}
function gg(e) {
  const t = jt(),
    n = this,
    s = n.touchEventsData,
    { params: r, touches: l, rtlTranslate: o, enabled: i } = n
  if (!i || (!r.simulateTouch && e.pointerType === "mouse")) return
  let a = e
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return
  let c
  if (a.type === "touchmove") {
    if (
      ((c = [...a.changedTouches].find((T) => T.identifier === s.touchId)),
      !c || c.identifier !== s.touchId)
    )
      return
  } else c = a
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a)
    return
  }
  const u = c.pageX,
    d = c.pageY
  if (a.preventedByNestedSwiper) {
    ;(l.startX = u), (l.startY = d)
    return
  }
  if (!n.allowTouchMove) {
    a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(l, { startX: u, startY: d, currentX: u, currentY: d }),
        (s.touchStartTime = er()))
    return
  }
  if (r.touchReleaseOnEdges && !r.loop)
    if (n.isVertical()) {
      if (
        (d < l.startY && n.translate <= n.maxTranslate()) ||
        (d > l.startY && n.translate >= n.minTranslate())
      ) {
        ;(s.isTouched = !1), (s.isMoved = !1)
        return
      }
    } else {
      if (
        o &&
        ((u > l.startX && -n.translate <= n.maxTranslate()) ||
          (u < l.startX && -n.translate >= n.minTranslate()))
      )
        return
      if (
        !o &&
        ((u < l.startX && n.translate <= n.maxTranslate()) ||
          (u > l.startX && n.translate >= n.minTranslate()))
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
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = u),
    (l.currentY = d)
  const p = l.currentX - l.startX,
    h = l.currentY - l.startY
  if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
    return
  if (typeof s.isScrolling > "u") {
    let T
    ;(n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (s.isScrolling = !1)
      : p * p + h * h >= 25 &&
        ((T = (Math.atan2(Math.abs(h), Math.abs(p)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? T > r.touchAngle
          : 90 - T > r.touchAngle))
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (a.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(n.allowClick = !1),
    !r.cssMode && a.cancelable && a.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && a.stopPropagation()
  let g = n.isHorizontal() ? p : h,
    v = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY
  r.oneWayMovement &&
    ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
    (l.diff = g),
    (g *= r.touchRatio),
    o && ((g = -g), (v = -v))
  const k = n.touchesDirection
  ;(n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = v > 0 ? "prev" : "next")
  const w = n.params.loop && !r.cssMode,
    m =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev)
  if (!s.isMoved) {
    if (
      (w && m && n.loopFix({ direction: n.swipeDirection }),
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
      r.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a)
  }
  if (
    (new Date().getTime(),
    r._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      k !== n.touchesDirection &&
      w &&
      m &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(l, {
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
  n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = g + s.startTranslate)
  let b = !0,
    S = r.resistanceRatio
  if (
    (r.touchReleaseOnEdges && (S = 0),
    g > 0
      ? (w &&
          m &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (r.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (r.slidesPerView !== "auto" &&
                n.slides.length - r.slidesPerView >= 2
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
          r.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + g) ** S)))
      : g < 0 &&
        (w &&
          m &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (r.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (r.slidesPerView !== "auto" &&
                n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
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
          ((b = !1),
          r.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - g) ** S))),
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
    r.threshold > 0)
  )
    if (Math.abs(g) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;(s.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (s.currentTranslate = s.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY)
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
function mg(e) {
  const t = this,
    n = t.touchEventsData
  let s = e
  s.originalEvent && (s = s.originalEvent)
  let r
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((r = [...s.changedTouches].find((T) => T.identifier === n.touchId)),
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
    params: o,
    touches: i,
    rtlTranslate: a,
    slidesGrid: c,
    enabled: u,
  } = t
  if (!u || (!o.simulateTouch && s.pointerType === "mouse")) return
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
  const d = er(),
    p = d - n.touchStartTime
  if (t.allowClick) {
    const T = s.path || (s.composedPath && s.composedPath())
    t.updateClickedSlide((T && T[0]) || s.target, T),
      t.emit("tap click", s),
      p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", s)
  }
  if (
    ((n.lastClickTime = er()),
    vu(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (i.diff === 0 && !n.loopSwapReset) ||
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
    k = t.slidesSizesGrid[0]
  for (
    let T = 0;
    T < c.length;
    T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const M = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
    typeof c[T + M] < "u"
      ? (g || (h >= c[T] && h < c[T + M])) && ((v = T), (k = c[T + M] - c[T]))
      : (g || h >= c[T]) && ((v = T), (k = c[c.length - 1] - c[c.length - 2]))
  }
  let w = null,
    m = null
  o.rewind &&
    (t.isBeginning
      ? (m =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (w = 0))
  const b = (h - c[v]) / k,
    S = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (b >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? w : v + S)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (b > 1 - o.longSwipesRatio
          ? t.slideTo(v + S)
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
        ? t.slideTo(v + S)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : v + S),
        t.swipeDirection === "prev" && t.slideTo(m !== null ? m : v))
  }
}
function ko() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: l } = e,
    o = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const i = o && t.loop
  ;(t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !i
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
    (e.allowSlidePrev = r),
    (e.allowSlideNext = s),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
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
function bg() {
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
  const l = e.maxTranslate() - e.minTranslate()
  l === 0 ? (r = 0) : (r = (e.translate - e.minTranslate()) / l),
    r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
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
function yg() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Eu = (e, t) => {
  const n = jt(),
    { params: s, el: r, wrapperEl: l, device: o } = e,
    i = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    c = t
  !r ||
    typeof r == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: i }),
    r[a]("touchstart", e.onTouchStart, { passive: !1 }),
    r[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: i }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: i }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      r[a]("click", e.onClick, !0),
    s.cssMode && l[a]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[c](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          ko,
          !0,
        )
      : e[c]("observerUpdate", ko, !0),
    r[a]("load", e.onLoad, { capture: !0 }))
}
function wg() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = hg.bind(e)),
    (e.onTouchMove = gg.bind(e)),
    (e.onTouchEnd = mg.bind(e)),
    (e.onDocumentTouchStart = yg.bind(e)),
    t.cssMode && (e.onScroll = bg.bind(e)),
    (e.onClick = vg.bind(e)),
    (e.onLoad = xg.bind(e)),
    Eu(e, "on")
}
function Sg() {
  Eu(this, "off")
}
var Cg = { attachEvents: wg, detachEvents: Sg }
const Po = (e, t) => e.grid && t.grid && t.grid.rows > 1
function Eg() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: r } = e,
    l = s.breakpoints
  if (!l || (l && Object.keys(l).length === 0)) return
  const o = jt(),
    i =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    a =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : o.querySelector(s.breakpointsBase),
    c = e.getBreakpoint(l, i, a)
  if (!c || e.currentBreakpoint === c) return
  const d = (c in l ? l[c] : void 0) || e.originalParams,
    p = Po(e, s),
    h = Po(e, d),
    g = e.params.grabCursor,
    v = d.grabCursor,
    k = s.enabled
  p && !h
    ? (r.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !p &&
      h &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === "column") ||
        (!d.grid.fill && s.grid.fill === "column")) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    g && !v ? e.unsetGrabCursor() : !g && v && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((M) => {
      if (typeof d[M] > "u") return
      const E = s[M] && s[M].enabled,
        A = d[M] && d[M].enabled
      E && !A && e[M].disable(), !E && A && e[M].enable()
    })
  const w = d.direction && d.direction !== s.direction,
    m = s.loop && (d.slidesPerView !== s.slidesPerView || w),
    b = s.loop
  w && n && e.changeDirection(), at(e.params, d)
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
      (m
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !b && T
          ? (e.loopCreate(t), e.updateSlides())
          : b && !T && e.loopDestroy()),
    e.emit("breakpoint", d)
}
function Tg(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let s = !1
  const r = Qe(),
    l = t === "window" ? r.innerHeight : n.clientHeight,
    o = Object.keys(e).map((i) => {
      if (typeof i == "string" && i.indexOf("@") === 0) {
        const a = parseFloat(i.substr(1))
        return { value: l * a, point: i }
      }
      return { value: i, point: i }
    })
  o.sort((i, a) => parseInt(i.value, 10) - parseInt(a.value, 10))
  for (let i = 0; i < o.length; i += 1) {
    const { point: a, value: c } = o[i]
    t === "window"
      ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = a)
      : c <= n.clientWidth && (s = a)
  }
  return s || "max"
}
var kg = { setBreakpoint: Eg, getBreakpoint: Tg }
function Pg(e, t) {
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
function Ig() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: r, device: l } = e,
    o = Pg(
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
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  t.push(...o), r.classList.add(...t), e.emitContainerClasses()
}
function $g() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var Mg = { addClasses: Ig, removeClasses: $g }
function Ag() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: s } = n
  if (s) {
    const r = e.slides.length - 1,
      l = e.slidesGrid[r] + e.slidesSizesGrid[r] + s * 2
    e.isLocked = e.size > l
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var Og = { checkOverflow: Ag },
  $l = {
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
function Lg(e, t) {
  return function (s) {
    s === void 0 && (s = {})
    const r = Object.keys(s)[0],
      l = s[r]
    if (typeof l != "object" || l === null) {
      at(t, s)
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
      !(r in e && "enabled" in l))
    ) {
      at(t, s)
      return
    }
    typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0),
      e[r] || (e[r] = { enabled: !1 }),
      at(t, s)
  }
}
const Wr = {
    eventsEmitter: Mh,
    update: Fh,
    translate: Uh,
    transition: Jh,
    slide: lg,
    loop: ug,
    grabCursor: fg,
    events: Cg,
    breakpoints: kg,
    checkOverflow: Og,
    classes: Mg,
  },
  qr = {}
let ri = class zt {
  constructor() {
    let t, n
    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++)
      r[l] = arguments[l]
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (n = r[0])
      : ([t, n] = r),
      n || (n = {}),
      (n = at({}, n)),
      t && !n.el && (n.el = t)
    const o = jt()
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const u = []
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const p = at({}, n, { el: d })
          u.push(new zt(p))
        }),
        u
      )
    }
    const i = this
    ;(i.__swiper__ = !0),
      (i.support = yu()),
      (i.device = wu({ userAgent: n.userAgent })),
      (i.browser = Su()),
      (i.eventsListeners = {}),
      (i.eventsAnyListeners = []),
      (i.modules = [...i.__modules__]),
      n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules)
    const a = {}
    i.modules.forEach((u) => {
      u({
        params: n,
        swiper: i,
        extendParams: Lg(n, a),
        on: i.on.bind(i),
        once: i.once.bind(i),
        off: i.off.bind(i),
        emit: i.emit.bind(i),
      })
    })
    const c = at({}, $l, a)
    return (
      (i.params = at({}, c, qr, n)),
      (i.originalParams = at({}, i.params)),
      (i.passedParams = at({}, n)),
      i.params &&
        i.params.on &&
        Object.keys(i.params.on).forEach((u) => {
          i.on(u, i.params.on[u])
        }),
      i.params && i.params.onAny && i.onAny(i.params.onAny),
      Object.assign(i, {
        enabled: i.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return i.params.direction === "horizontal"
        },
        isVertical() {
          return i.params.direction === "vertical"
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
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: i.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      i.emit("_swiper"),
      i.params.init && i.init(),
      i
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
      r = Ot(n, `.${s.slideClass}, swiper-slide`),
      l = sr(r[0])
    return sr(t) - l
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
    const r = s.minTranslate(),
      o = (s.maxTranslate() - r) * t + r
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
        slides: l,
        slidesGrid: o,
        slidesSizesGrid: i,
        size: a,
        activeIndex: c,
      } = s
    let u = 1
    if (typeof r.slidesPerView == "number") return r.slidesPerView
    if (r.centeredSlides) {
      let d = l[c] ? Math.ceil(l[c].swiperSlideSize) : 0,
        p
      for (let h = c + 1; h < l.length; h += 1)
        l[h] &&
          !p &&
          ((d += Math.ceil(l[h].swiperSlideSize)), (u += 1), d > a && (p = !0))
      for (let h = c - 1; h >= 0; h -= 1)
        l[h] && !p && ((d += l[h].swiperSlideSize), (u += 1), d > a && (p = !0))
    } else if (t === "current")
      for (let d = c + 1; d < l.length; d += 1)
        (n ? o[d] + i[d] - o[c] < a : o[d] - o[c] < a) && (u += 1)
    else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < a && (u += 1)
    return u
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
    function r() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        i = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
      t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let l
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      r(), s.autoHeight && t.updateAutoHeight()
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const o = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides
        l = t.slideTo(o.length - 1, 0, !1, !0)
      } else l = t.slideTo(t.activeIndex, 0, !1, !0)
      l || r()
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
        s.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "")
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
    const r = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`
    let o =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(r())
        : Ot(s, r())[0]
    return (
      !o &&
        n.params.createElements &&
        ((o = nr("div", n.params.wrapperClass)),
        s.append(o),
        Ot(s, `.${n.params.slideClass}`).forEach((i) => {
          o.append(i)
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: o,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || on(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || on(s, "direction") === "rtl"),
        wrongRTL: on(o, "display") === "-webkit-box",
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
    const r = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((l) => {
        l.complete
          ? Gs(n, l)
          : l.addEventListener("load", (o) => {
              Gs(n, o.target)
            })
      }),
      Il(n),
      (n.initialized = !0),
      Il(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const s = this,
      { params: r, el: l, wrapperEl: o, slides: i } = s
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          l && typeof l != "string" && l.removeAttribute("style"),
          o && o.removeAttribute("style"),
          i &&
            i.length &&
            i.forEach((a) => {
              a.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index")
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a)
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), vh(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    at(qr, t)
  }
  static get extendedDefaults() {
    return qr
  }
  static get defaults() {
    return $l
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
Object.keys(Wr).forEach((e) => {
  Object.keys(Wr[e]).forEach((t) => {
    ri.prototype[t] = Wr[e][t]
  })
})
ri.use([Ih, $h])
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
function jg(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function Bg(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: s,
    changedParams: r,
    nextEl: l,
    prevEl: o,
    scrollbarEl: i,
    paginationEl: a,
  } = e
  const c = r.filter(
      (I) => I !== "children" && I !== "direction" && I !== "wrapperClass",
    ),
    {
      params: u,
      pagination: d,
      navigation: p,
      scrollbar: h,
      virtual: g,
      thumbs: v,
    } = t
  let k, w, m, b, S, T, M, E
  r.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (k = !0),
    r.includes("controller") &&
      s.controller &&
      s.controller.control &&
      u.controller &&
      !u.controller.control &&
      (w = !0),
    r.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      d &&
      !d.el &&
      (m = !0),
    r.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || i) &&
      (u.scrollbar || u.scrollbar === !1) &&
      h &&
      !h.el &&
      (b = !0),
    r.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || l) &&
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
  r.includes("loop") &&
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
    r.includes("children") && n && g && u.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : r.includes("virtual") &&
        g &&
        u.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    r.includes("children") && n && u.loop && (E = !0),
    k && v.init() && v.update(!0),
    w && (t.controller.control = u.controller.control),
    m &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (u.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    b &&
      (t.isElement &&
        (!i || typeof i == "string") &&
        ((i = document.createElement("div")),
        i.classList.add("swiper-scrollbar"),
        i.part.add("scrollbar"),
        t.el.appendChild(i)),
      i && (u.scrollbar.el = i),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    S &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          rr(l, t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          rr(o, t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      l && (u.navigation.nextEl = l),
      o && (u.navigation.prevEl = o),
      p.init(),
      p.update()),
    r.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    r.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    r.includes("direction") && t.changeDirection(s.direction, !1),
    (T || E) && t.loopDestroy(),
    (M || E) && t.loopCreate(),
    t.update()
}
function Io(e, t) {
  e === void 0 && (e = {})
  const n = { on: {} },
    s = {},
    r = {}
  Dn(n, $l), (n._emitClasses = !0), (n.init = !1)
  const l = {},
    o = Tu.map((a) => a.replace(/_/, "")),
    i = Object.assign({}, e)
  return (
    Object.keys(i).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? Cn(e[a])
            ? ((n[a] = {}), (r[a] = {}), Dn(n[a], e[a]), Dn(r[a], e[a]))
            : ((n[a] = e[a]), (r[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
            ? (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (l[a] = e[a]))
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a]
    }),
    { params: n, passedParams: r, rest: l, events: s }
  )
}
function Rg(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: r,
    paginationEl: l,
    scrollbarEl: o,
    swiper: i,
  } = e
  ku(t) &&
    s &&
    r &&
    ((i.params.navigation.nextEl = s),
    (i.originalParams.navigation.nextEl = s),
    (i.params.navigation.prevEl = r),
    (i.originalParams.navigation.prevEl = r)),
    Pu(t) &&
      l &&
      ((i.params.pagination.el = l), (i.originalParams.pagination.el = l)),
    Iu(t) &&
      o &&
      ((i.params.scrollbar.el = o), (i.originalParams.scrollbar.el = o)),
    i.init(n)
}
function _g(e, t, n, s, r) {
  const l = []
  if (!t) return l
  const o = (a) => {
    l.indexOf(a) < 0 && l.push(a)
  }
  if (n && s) {
    const a = s.map(r),
      c = n.map(r)
    a.join("") !== c.join("") && o("children"),
      s.length !== n.length && o("children")
  }
  return (
    Tu.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Cn(e[a]) && Cn(t[a])) {
            const c = Object.keys(e[a]),
              u = Object.keys(t[a])
            c.length !== u.length
              ? o(a)
              : (c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a)
                }),
                u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a)
                }))
          } else e[a] !== t[a] && o(a)
      }),
    l
  )
}
const Ng = (e) => {
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
function Ur(e, t, n) {
  e === void 0 && (e = {})
  const s = [],
    r = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    l = (o, i) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const c = typeof a.type == "symbol"
          i === "default" && (i = "container-end"),
            c && a.children
              ? l(a.children, i)
              : (a.type &&
                    (a.type.name === "SwiperSlide" ||
                      a.type.name === "AsyncComponentWrapper")) ||
                  (a.componentOptions &&
                    a.componentOptions.tag === "SwiperSlide")
                ? s.push(a)
                : r[i] && r[i].push(a)
        })
    }
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != "function") return
      const i = e[o]()
      l(i, o)
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: r }
  )
}
function zg(e, t, n) {
  if (!n) return null
  const s = (u) => {
      let d = u
      return u < 0 ? (d = t.length + u) : d >= t.length && (d = d - t.length), d
    },
    r = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: o } = n,
    i = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    c = []
  for (let u = i; u < a; u += 1)
    u >= l && u <= o && c.length < t.length && c.push(t[s(u)])
  return c.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = e),
      (u.props.style = r),
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
const Dg = {
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
      const { tag: r, wrapperTag: l } = e,
        o = V("swiper"),
        i = V(null),
        a = V(!1),
        c = V(!1),
        u = V(null),
        d = V(null),
        p = V(null),
        h = { value: [] },
        g = { value: [] },
        v = V(null),
        k = V(null),
        w = V(null),
        m = V(null),
        { params: b, passedParams: S } = Io(e)
      Ur(n, h, g), (p.value = S), (g.value = h.value)
      const T = () => {
        Ur(n, h, g), (a.value = !0)
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
          _beforeBreakpoint: T,
          _containerClasses(A, I) {
            o.value = I
          },
        })
      const M = { ...b }
      if (
        (delete M.wrapperClass,
        (d.value = new ri(M)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = h.value
        const A = {
          cache: !1,
          slides: h.value,
          renderExternal: (I) => {
            i.value = I
          },
          renderExternalUpdate: !1,
        }
        Dn(d.value.params.virtual, A), Dn(d.value.originalParams.virtual, A)
      }
      Wl(() => {
        !c.value && d.value && (d.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: A } = Io(e),
          I = _g(A, p.value, h.value, g.value, ($) => $.props && $.props.key)
        ;(p.value = A),
          (I.length || a.value) &&
            d.value &&
            !d.value.destroyed &&
            Bg({
              swiper: d.value,
              slides: h.value,
              passedParams: A,
              changedParams: I,
              nextEl: v.value,
              prevEl: k.value,
              scrollbarEl: m.value,
              paginationEl: w.value,
            }),
          (a.value = !1)
      }),
        vt("swiper", d),
        un(i, () => {
          hr(() => {
            Ng(d.value)
          })
        }),
        We(() => {
          u.value &&
            (Rg(
              {
                el: u.value,
                nextEl: v.value,
                prevEl: k.value,
                paginationEl: w.value,
                scrollbarEl: m.value,
                swiper: d.value,
              },
              b,
            ),
            s("swiper", d.value))
        }),
        ql(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1)
        })
      function E(A) {
        return b.virtual
          ? zg(d, A, i.value)
          : (A.forEach((I, $) => {
              I.props || (I.props = {}),
                (I.props.swiperRef = d),
                (I.props.swiperSlideIndex = $)
            }),
            A)
      }
      return () => {
        const { slides: A, slots: I } = Ur(n, h, g)
        return Ee(r, { ref: u, class: $u(o.value) }, [
          I["container-start"],
          Ee(l, { class: jg(b.wrapperClass) }, [
            I["wrapper-start"],
            E(A),
            I["wrapper-end"],
          ]),
          ku(e) && [
            Ee("div", { ref: k, class: "swiper-button-prev" }),
            Ee("div", { ref: v, class: "swiper-button-next" }),
          ],
          Iu(e) && Ee("div", { ref: m, class: "swiper-scrollbar" }),
          Pu(e) && Ee("div", { ref: w, class: "swiper-pagination" }),
          I["container-end"],
        ])
      }
    },
  },
  Fg = {
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
        l = V(null),
        o = V("swiper-slide"),
        i = V(!1)
      function a(d, p, h) {
        p === l.value && (o.value = h)
      }
      We(() => {
        !r || !r.value || (r.value.on("_slideClass", a), (s = !0))
      }),
        Vl(() => {
          s || !r || !r.value || (r.value.on("_slideClass", a), (s = !0))
        }),
        Wl(() => {
          !l.value ||
            !r ||
            !r.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (l.value.swiperSlideIndex = e.swiperSlideIndex),
            r.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"))
        }),
        ql(() => {
          !r || !r.value || r.value.off("_slideClass", a)
        })
      const c = se(() => ({
        isActive: o.value.indexOf("swiper-slide-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
        isNext: o.value.indexOf("swiper-slide-next") >= 0,
      }))
      vt("swiperSlide", c)
      const u = () => {
        i.value = !0
      }
      return () =>
        Ee(
          e.tag,
          {
            class: $u(`${o.value}`),
            ref: l,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && r && r.value && r.value.params.loop
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
                    !i.value &&
                    Ee("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(c.value),
                e.lazy &&
                  !i.value &&
                  Ee("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function Mu(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((r) => {
        if (!n[r] && n.auto === !0) {
          let l = Ot(e.el, `.${s[r]}`)[0]
          l || ((l = nr("div", s[r])), (l.className = s[r]), e.el.append(l)),
            (n[r] = l),
            (t[r] = l)
        }
      }),
    n
  )
}
function Hg(e) {
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
  function l(g) {
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
    const k = t.params.navigation
    ;(g = De(g)),
      g.forEach((w) => {
        w &&
          (w.classList[v ? "add" : "remove"](...k.disabledClass.split(" ")),
          w.tagName === "BUTTON" && (w.disabled = v),
          t.params.watchOverflow &&
            t.enabled &&
            w.classList[t.isLocked ? "add" : "remove"](k.lockClass))
      })
  }
  function i() {
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
        (t.slidePrev(), r("navigationPrev"))
  }
  function c(g) {
    g.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), r("navigationNext"))
  }
  function u() {
    const g = t.params.navigation
    if (
      ((t.params.navigation = Mu(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(g.nextEl || g.prevEl))
    )
      return
    let v = l(g.nextEl),
      k = l(g.prevEl)
    Object.assign(t.navigation, { nextEl: v, prevEl: k }),
      (v = De(v)),
      (k = De(k))
    const w = (m, b) => {
      m && m.addEventListener("click", b === "next" ? c : a),
        !t.enabled && m && m.classList.add(...g.lockClass.split(" "))
    }
    v.forEach((m) => w(m, "next")), k.forEach((m) => w(m, "prev"))
  }
  function d() {
    let { nextEl: g, prevEl: v } = t.navigation
    ;(g = De(g)), (v = De(v))
    const k = (w, m) => {
      w.removeEventListener("click", m === "next" ? c : a),
        w.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    g.forEach((w) => k(w, "next")), v.forEach((w) => k(w, "prev"))
  }
  s("init", () => {
    t.params.navigation.enabled === !1 ? h() : (u(), i())
  }),
    s("toEdge fromEdge lock unlock", () => {
      i()
    }),
    s("destroy", () => {
      d()
    }),
    s("enable disable", () => {
      let { nextEl: g, prevEl: v } = t.navigation
      if (((g = De(g)), (v = De(v)), t.enabled)) {
        i()
        return
      }
      ;[...g, ...v]
        .filter((k) => !!k)
        .forEach((k) => k.classList.add(t.params.navigation.lockClass))
    }),
    s("click", (g, v) => {
      let { nextEl: k, prevEl: w } = t.navigation
      ;(k = De(k)), (w = De(w))
      const m = v.target
      let b = w.includes(m) || k.includes(m)
      if (t.isElement && !b) {
        const S = v.path || (v.composedPath && v.composedPath())
        S && (b = S.find((T) => k.includes(T) || w.includes(T)))
      }
      if (t.params.navigation.hideOnClick && !b) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === m || t.pagination.el.contains(m))
        )
          return
        let S
        k.length
          ? (S = k[0].classList.contains(t.params.navigation.hiddenClass))
          : w.length &&
            (S = w[0].classList.contains(t.params.navigation.hiddenClass)),
          r(S === !0 ? "navigationShow" : "navigationHide"),
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
        i()
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
    update: i,
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
function Gg(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
  const l = "swiper-pagination"
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
      bulletClass: `${l}-bullet`,
      bulletActiveClass: `${l}-bullet-active`,
      modifierClass: `${l}-`,
      currentClass: `${l}-current`,
      totalClass: `${l}-total`,
      hiddenClass: `${l}-hidden`,
      progressbarFillClass: `${l}-progressbar-fill`,
      progressbarOppositeClass: `${l}-progressbar-opposite`,
      clickableClass: `${l}-clickable`,
      lockClass: `${l}-lock`,
      horizontalClass: `${l}-horizontal`,
      verticalClass: `${l}-vertical`,
      paginationDisabledClass: `${l}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] })
  let o,
    i = 0
  function a() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function c(m, b) {
    const { bulletActiveClass: S } = t.params.pagination
    m &&
      ((m = m[`${b === "prev" ? "previous" : "next"}ElementSibling`]),
      m &&
        (m.classList.add(`${S}-${b}`),
        (m = m[`${b === "prev" ? "previous" : "next"}ElementSibling`]),
        m && m.classList.add(`${S}-${b}-${b}`)))
  }
  function u(m, b, S) {
    if (((m = m % S), (b = b % S), b === m + 1)) return "next"
    if (b === m - 1) return "previous"
  }
  function d(m) {
    const b = m.target.closest(ts(t.params.pagination.bulletClass))
    if (!b) return
    m.preventDefault()
    const S = sr(b) * t.params.slidesPerGroup
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
    const m = t.rtl,
      b = t.params.pagination
    if (a()) return
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
      b.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const I = t.pagination.bullets
      let $, j, F
      if (
        (b.dynamicBullets &&
          ((o = Pl(I[0], t.isHorizontal() ? "width" : "height")),
          S.forEach((W) => {
            W.style[t.isHorizontal() ? "width" : "height"] =
              `${o * (b.dynamicMainBullets + 4)}px`
          }),
          b.dynamicMainBullets > 1 &&
            M !== void 0 &&
            ((i += T - (M || 0)),
            i > b.dynamicMainBullets - 1
              ? (i = b.dynamicMainBullets - 1)
              : i < 0 && (i = 0)),
          ($ = Math.max(T - i, 0)),
          (j = $ + (Math.min(I.length, b.dynamicMainBullets) - 1)),
          (F = (j + $) / 2)),
        I.forEach((W) => {
          const de = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (ge) => `${b.bulletActiveClass}${ge}`,
            ),
          ]
            .map((ge) =>
              typeof ge == "string" && ge.includes(" ") ? ge.split(" ") : ge,
            )
            .flat()
          W.classList.remove(...de)
        }),
        S.length > 1)
      )
        I.forEach((W) => {
          const de = sr(W)
          de === T
            ? W.classList.add(...b.bulletActiveClass.split(" "))
            : t.isElement && W.setAttribute("part", "bullet"),
            b.dynamicBullets &&
              (de >= $ &&
                de <= j &&
                W.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),
              de === $ && c(W, "prev"),
              de === j && c(W, "next"))
        })
      else {
        const W = I[T]
        if (
          (W && W.classList.add(...b.bulletActiveClass.split(" ")),
          t.isElement &&
            I.forEach((de, ge) => {
              de.setAttribute("part", ge === T ? "bullet-active" : "bullet")
            }),
          b.dynamicBullets)
        ) {
          const de = I[$],
            ge = I[j]
          for (let O = $; O <= j; O += 1)
            I[O] &&
              I[O].classList.add(...`${b.bulletActiveClass}-main`.split(" "))
          c(de, "prev"), c(ge, "next")
        }
      }
      if (b.dynamicBullets) {
        const W = Math.min(I.length, b.dynamicMainBullets + 4),
          de = (o * W - o) / 2 - F * o,
          ge = m ? "right" : "left"
        I.forEach((O) => {
          O.style[t.isHorizontal() ? ge : "top"] = `${de}px`
        })
      }
    }
    S.forEach((I, $) => {
      if (
        (b.type === "fraction" &&
          (I.querySelectorAll(ts(b.currentClass)).forEach((j) => {
            j.textContent = b.formatFractionCurrent(T + 1)
          }),
          I.querySelectorAll(ts(b.totalClass)).forEach((j) => {
            j.textContent = b.formatFractionTotal(A)
          })),
        b.type === "progressbar")
      ) {
        let j
        b.progressbarOpposite
          ? (j = t.isHorizontal() ? "vertical" : "horizontal")
          : (j = t.isHorizontal() ? "horizontal" : "vertical")
        const F = (T + 1) / A
        let W = 1,
          de = 1
        j === "horizontal" ? (W = F) : (de = F),
          I.querySelectorAll(ts(b.progressbarFillClass)).forEach((ge) => {
            ;(ge.style.transform = `translate3d(0,0,0) scaleX(${W}) scaleY(${de})`),
              (ge.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      b.type === "custom" && b.renderCustom
        ? (rr(I, b.renderCustom(t, T + 1, A)),
          $ === 0 && r("paginationRender", I))
        : ($ === 0 && r("paginationRender", I), r("paginationUpdate", I)),
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
    let S = t.pagination.el
    S = De(S)
    let T = ""
    if (m.type === "bullets") {
      let M = t.params.loop
        ? Math.ceil(b / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && M > b && (M = b)
      for (let E = 0; E < M; E += 1)
        m.renderBullet
          ? (T += m.renderBullet.call(t, E, m.bulletClass))
          : (T += `<${m.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${m.bulletClass}"></${m.bulletElement}>`)
    }
    m.type === "fraction" &&
      (m.renderFraction
        ? (T = m.renderFraction.call(t, m.currentClass, m.totalClass))
        : (T = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
      m.type === "progressbar" &&
        (m.renderProgressbar
          ? (T = m.renderProgressbar.call(t, m.progressbarFillClass))
          : (T = `<span class="${m.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      S.forEach((M) => {
        m.type !== "custom" && rr(M, T || ""),
          m.type === "bullets" &&
            t.pagination.bullets.push(...M.querySelectorAll(ts(m.bulletClass)))
      }),
      m.type !== "custom" && r("paginationRender", S[0])
  }
  function g() {
    t.params.pagination = Mu(
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
          b.length > 1 && (b = b.find((S) => xu(S, ".swiper")[0] === t.el))),
        Array.isArray(b) && b.length === 1 && (b = b[0]),
        Object.assign(t.pagination, { el: b }),
        (b = De(b)),
        b.forEach((S) => {
          m.type === "bullets" &&
            m.clickable &&
            S.classList.add(...(m.clickableClass || "").split(" ")),
            S.classList.add(m.modifierClass + m.type),
            S.classList.add(
              t.isHorizontal() ? m.horizontalClass : m.verticalClass,
            ),
            m.type === "bullets" &&
              m.dynamicBullets &&
              (S.classList.add(`${m.modifierClass}${m.type}-dynamic`),
              (i = 0),
              m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
            m.type === "progressbar" &&
              m.progressbarOpposite &&
              S.classList.add(m.progressbarOppositeClass),
            m.clickable && S.addEventListener("click", d),
            t.enabled || S.classList.add(m.lockClass)
        }))
  }
  function v() {
    const m = t.params.pagination
    if (a()) return
    let b = t.pagination.el
    b &&
      ((b = De(b)),
      b.forEach((S) => {
        S.classList.remove(m.hiddenClass),
          S.classList.remove(m.modifierClass + m.type),
          S.classList.remove(
            t.isHorizontal() ? m.horizontalClass : m.verticalClass,
          ),
          m.clickable &&
            (S.classList.remove(...(m.clickableClass || "").split(" ")),
            S.removeEventListener("click", d))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((S) =>
          S.classList.remove(...m.bulletActiveClass.split(" ")),
        )
  }
  s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const m = t.params.pagination
    let { el: b } = t.pagination
    ;(b = De(b)),
      b.forEach((S) => {
        S.classList.remove(m.horizontalClass, m.verticalClass),
          S.classList.add(
            t.isHorizontal() ? m.horizontalClass : m.verticalClass,
          )
      })
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? w() : (g(), h(), p())
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
      v()
    }),
    s("enable disable", () => {
      let { el: m } = t.pagination
      m &&
        ((m = De(m)),
        m.forEach((b) =>
          b.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ))
    }),
    s("lock unlock", () => {
      p()
    }),
    s("click", (m, b) => {
      const S = b.target,
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
        r(M === !0 ? "paginationShow" : "paginationHide"),
          T.forEach((E) => E.classList.toggle(t.params.pagination.hiddenClass))
      }
    })
  const k = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: m } = t.pagination
      m &&
        ((m = De(m)),
        m.forEach((b) =>
          b.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        g(),
        h(),
        p()
    },
    w = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: m } = t.pagination
      m &&
        ((m = De(m)),
        m.forEach((b) =>
          b.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        v()
    }
  Object.assign(t.pagination, {
    enable: k,
    disable: w,
    render: h,
    update: p,
    init: g,
    destroy: v,
  })
}
function Vg(e) {
  let { swiper: t, extendParams: n, on: s, emit: r, params: l } = e
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
    i,
    a = l && l.autoplay ? l.autoplay.delay : 3e3,
    c = l && l.autoplay ? l.autoplay.delay : 3e3,
    u,
    d = new Date().getTime(),
    p,
    h,
    g,
    v,
    k,
    w,
    m
  function b(B) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (B.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", b),
        !(m || (B.detail && B.detail.bySwiperTouchMove)) && $()))
  }
  const S = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (p = !0) : p && ((c = u), (p = !1))
      const B = t.autoplay.paused ? u : d + c - new Date().getTime()
      ;(t.autoplay.timeLeft = B),
        r("autoplayTimeLeft", B, B / a),
        (i = requestAnimationFrame(() => {
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
      cancelAnimationFrame(i), S()
      let xe = typeof B > "u" ? t.params.autoplay.delay : B
      ;(a = t.params.autoplay.delay), (c = t.params.autoplay.delay)
      const me = T()
      !Number.isNaN(me) &&
        me > 0 &&
        typeof B > "u" &&
        ((xe = me), (a = me), (c = me)),
        (u = xe)
      const Le = t.params.speed,
        je = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(Le, !0, !0), r("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, Le, !0, !0), r("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(Le, !0, !0), r("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, Le, !0, !0), r("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                M()
              })))
        }
      return (
        xe > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              je()
            }, xe)))
          : requestAnimationFrame(() => {
              je()
            }),
        xe
      )
    },
    E = () => {
      ;(d = new Date().getTime()),
        (t.autoplay.running = !0),
        M(),
        r("autoplayStart")
    },
    A = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(i),
        r("autoplayStop")
    },
    I = (B, xe) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(o), B || (w = !0)
      const me = () => {
        r("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", b)
            : $()
      }
      if (((t.autoplay.paused = !0), xe)) {
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
        r("autoplayResume"))
    },
    j = () => {
      if (t.destroyed || !t.autoplay.running) return
      const B = jt()
      B.visibilityState === "hidden" && ((w = !0), I(!0)),
        B.visibilityState === "visible" && $()
    },
    F = (B) => {
      B.pointerType === "mouse" &&
        ((w = !0), (m = !0), !(t.animating || t.autoplay.paused) && I(!0))
    },
    W = (B) => {
      B.pointerType === "mouse" && ((m = !1), t.autoplay.paused && $())
    },
    de = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", F),
        t.el.addEventListener("pointerleave", W))
    },
    ge = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", F),
        t.el.removeEventListener("pointerleave", W))
    },
    O = () => {
      jt().addEventListener("visibilitychange", j)
    },
    N = () => {
      jt().removeEventListener("visibilitychange", j)
    }
  s("init", () => {
    t.params.autoplay.enabled && (de(), O(), E())
  }),
    s("destroy", () => {
      ge(), N(), t.autoplay.running && A()
    }),
    s("_freeModeStaticRelease", () => {
      ;(g || w) && $()
    }),
    s("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? A() : I(!0, !0)
    }),
    s("beforeTransitionStart", (B, xe, me) => {
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
          (g = !1),
          (w = !1),
          (v = setTimeout(() => {
            ;(w = !0), (g = !0), I(!0)
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
      t.destroyed || !t.autoplay.running || (k = !0)
    }),
    Object.assign(t.autoplay, { start: E, stop: A, pause: I, resume: $ })
}
const Wg = { class: "prose text-center" },
  qg = { href: "/pricing" },
  Ug = { id: "cta" },
  ks = {
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
          const l = "contact"
          let o = document.getElementsByName("name")[0].value,
            i = document.getElementsByName("email")[0].value,
            a = document.getElementsByName("message")[0].value,
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
                form: l,
                name: o,
                email: i,
                message: a,
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
                let g = d.getElementsByTagName("textarea")[0]
                g.style.display = "none"
                let v = document.getElementById("submitButton")
                v.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (r, l) => (
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
            f("div", Wg, [
              f(
                "h4",
                { class: x(["text-2xl", t(e.brightness)]) },
                [
                  ...(l[0] ||
                    (l[0] = [
                      ae(" Piqued your interest?", -1),
                      f("br", null, null, -1),
                      ae(
                        " Check out the (incredibly simple) service pricing: ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              f("a", qg, [
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
              f("form", Ug, [
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
  Kg = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  Yg = ["href"],
  Xg = { class: "hidden md:hidden lg:block" },
  Jg = ["href"],
  Zg = ["src", "alt"],
  Qg = ["src", "alt"],
  em = { class: "block md:block lg:hidden py-6" },
  tm = { class: "grid grid-cols-2 gap-4" },
  nm = ["src", "alt"],
  sm = { class: "flex justify-center pt-6" },
  rm = {
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
        n = [Vg, Gg, Hg],
        s = e,
        r = V(""),
        l = V(""),
        o = V([]),
        i = (u) => {
          if (u >= 4) return "text-slate-800"
          if (u == 3) return "text-slate-200"
          if (u == 2) return "text-slate-300"
          if (u == 1) return "text-slate-300"
        },
        a = () => {
          const u = document.getElementById("lightbox"),
            d = document.getElementById("lightbox-img"),
            p = document.getElementById("lightbox-close"),
            h = document.querySelectorAll(".lightbox"),
            g = document.getElementById("lightbox-caption")
          h.forEach((v) => {
            v.addEventListener("click", () => {
              ;(d.src = v.src),
                (g.textContent = v.alt),
                u.classList.remove("hidden")
            })
          }),
            p.addEventListener("click", () => {
              u.classList.add("hidden")
            })
        }
      We(() => {
        ;(t.value = s.captions),
          (r.value = s.link),
          (l.value = s.title),
          (o.value = s.images),
          hr(() => {
            a()
          })
      })
      const c = (u) => {
        let d = r.value == "" ? "text-center w-full " : ""
        return (d = d + i(u)), d
      }
      return (u, d) => (
        L(),
        K(
          "div",
          {
            class: x([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              r.value == "",
            ]),
          },
          [
            f("div", Kg, [
              f(
                "h2",
                {
                  class: x([
                    "text-5xl text-center text-semibold",
                    c(s.brightness),
                  ]),
                },
                Je(l.value),
                3,
              ),
              r.value != ""
                ? (L(),
                  K(
                    "a",
                    { key: 0, href: r.value },
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
                    Yg,
                  ))
                : ke("", !0),
            ]),
            f("div", Xg, [
              U(
                Z(Dg),
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
                  default: oe(() => [
                    (L(!0),
                    K(
                      Pe,
                      null,
                      Wt(
                        o.value,
                        (p, h) => (
                          L(),
                          he(
                            Z(Fg),
                            { class: "image-container", key: h },
                            {
                              default: oe(() => [
                                r.value != ""
                                  ? (L(),
                                    K(
                                      "a",
                                      { key: 0, href: r.value },
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
                                          Zg,
                                        ),
                                      ],
                                      8,
                                      Jg,
                                    ))
                                  : ke("", !0),
                                r.value == ""
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
                                      Qg,
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
              (d[0] = _d(
                '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-4d27a375><div class="bg-white p-5 rounded shadow-lg" data-v-4d27a375><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-4d27a375><div class="flex justify-center" data-v-4d27a375><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-4d27a375></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-4d27a375> × </button></div></div>',
                1,
              )),
            f("div", em, [
              f("div", tm, [
                (L(!0),
                K(
                  Pe,
                  null,
                  Wt(
                    o.value,
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
                          nm,
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
              [lt(u.$slots, "default", {}, void 0, !0)],
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
            f("div", sm, [
              U(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  pt = fn(rm, [["__scopeId", "data-v-4d27a375"]]),
  li =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  ii =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  oi =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  ai =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  ui =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  ci =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  di =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  fi =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  pi =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  hi =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  lm =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  im =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  om =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  am =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  um =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898383454.webp",
  cm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  dm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  fm =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  pm = "",
  hm = "",
  gm = { class: "px-3 text-center" },
  mm = { class: "text-right italic text-sm mb-0 pb-0" },
  vm = "",
  bm = "Web Design",
  xm = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (r) => {
          if (r >= 4) return "text-slate-800"
          if (r == 3) return "text-slate-200"
          if (r == 2) return "text-slate-300"
          if (r == 1) return "text-slate-300"
        },
        n = V([li, ci, pi, ai, oi, fi, di, ui, ii, hi]),
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
      return (r, l) => (
        L(),
        he(
          pt,
          {
            images: n.value,
            captions: s.value,
            link: vm,
            title: bm,
            brightness: e.brightness,
          },
          {
            default: oe(() => [
              lt(r.$slots, "default", {}, () => [
                f(
                  "h2",
                  { class: x(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. I'll design yours too! ",
                  2,
                ),
                f("div", gm, [
                  l[2] ||
                    (l[2] = f(
                      "p",
                      null,
                      " Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. ",
                      -1,
                    )),
                  l[3] ||
                    (l[3] = f(
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
                      l[0] ||
                        (l[0] = f(
                          "p",
                          null,
                          " Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just did it. He is incredible. ...I would recommend him to anyone with utmost confidence that he will surpass all expectations. ",
                          -1,
                        )),
                      f("p", mm, [
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
                      l[1] ||
                        (l[1] = f(
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
  ym = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  wm = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  Sm = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Cm = { href: "https://galaxyit.com/savings-calculator/" },
  Em = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Tm = { href: "https://www.buildonyourlandllc.com/" },
  km = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Pm = { href: "https://bazaar.blendernation.com" },
  Im = {
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
        K("div", ym, [
          f("div", wm, [
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
            f("div", Sm, [
              f(
                "h3",
                { class: x(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT ",
                2,
              ),
              f("a", Cm, [
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
            f("div", Em, [
              f(
                "h3",
                { class: x(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that ",
                2,
              ),
              f("a", Tm, [
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
            f("div", km, [
              f(
                "h3",
                { class: x(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              f("a", Pm, [
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
          U(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  $m = fn(Im, [["__scopeId", "data-v-c1141d27"]]),
  Fn = (e, t = 0, n = 1) => mi(vi(t, e), n),
  gi = (e) => {
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
function ve(e) {
  return Au[Object.prototype.toString.call(e)] || "object"
}
const be = (e, t = null) =>
    e.length >= 3
      ? Array.prototype.slice.call(e)
      : ve(e[0]) == "object" && t
        ? t
            .split("")
            .filter((n) => e[0][n] !== void 0)
            .map((n) => e[0][n])
        : e[0],
  Cr = (e) => {
    if (e.length < 2) return null
    const t = e.length - 1
    return ve(e[t]) == "string" ? e[t].toLowerCase() : null
  },
  { PI: Er, min: mi, max: vi } = Math,
  Ft = Er * 2,
  Kr = Er / 3,
  Mm = Er / 180,
  Am = 180 / Er,
  fe = { format: {}, autodetect: [] }
class G {
  constructor(...t) {
    const n = this
    if (
      ve(t[0]) === "object" &&
      t[0].constructor &&
      t[0].constructor === this.constructor
    )
      return t[0]
    let s = Cr(t),
      r = !1
    if (!s) {
      ;(r = !0),
        fe.sorted ||
          ((fe.autodetect = fe.autodetect.sort((l, o) => o.p - l.p)),
          (fe.sorted = !0))
      for (let l of fe.autodetect) if (((s = l.test(...t)), s)) break
    }
    if (fe.format[s]) {
      const l = fe.format[s].apply(null, r ? t : t.slice(0, -1))
      n._rgb = gi(l)
    } else throw new Error("unknown format: " + t)
    n._rgb.length === 3 && n._rgb.push(1)
  }
  toString() {
    return ve(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`
  }
}
const Om = "2.6.0",
  ie = (...e) => new ie.Color(...e)
ie.Color = G
ie.version = Om
const Lm = (...e) => {
    e = be(e, "cmyk")
    const [t, n, s, r] = e,
      l = e.length > 4 ? e[4] : 1
    return r === 1
      ? [0, 0, 0, l]
      : [
          t >= 1 ? 0 : 255 * (1 - t) * (1 - r),
          n >= 1 ? 0 : 255 * (1 - n) * (1 - r),
          s >= 1 ? 0 : 255 * (1 - s) * (1 - r),
          l,
        ]
  },
  { max: $o } = Math,
  jm = (...e) => {
    let [t, n, s] = be(e, "rgb")
    ;(t = t / 255), (n = n / 255), (s = s / 255)
    const r = 1 - $o(t, $o(n, s)),
      l = r < 1 ? 1 / (1 - r) : 0,
      o = (1 - t - r) * l,
      i = (1 - n - r) * l,
      a = (1 - s - r) * l
    return [o, i, a, r]
  }
G.prototype.cmyk = function () {
  return jm(this._rgb)
}
ie.cmyk = (...e) => new G(...e, "cmyk")
fe.format.cmyk = Lm
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = be(e, "cmyk")), ve(e) === "array" && e.length === 4))
      return "cmyk"
  },
})
const Yr = (e) => Math.round(e * 100) / 100,
  Bm = (...e) => {
    const t = be(e, "hsla")
    let n = Cr(e) || "lsa"
    return (
      (t[0] = Yr(t[0] || 0)),
      (t[1] = Yr(t[1] * 100) + "%"),
      (t[2] = Yr(t[2] * 100) + "%"),
      n === "hsla" || (t.length > 3 && t[3] < 1)
        ? ((t[3] = t.length > 3 ? t[3] : 1), (n = "hsla"))
        : (t.length = 3),
      `${n}(${t.join(",")})`
    )
  },
  Ou = (...e) => {
    e = be(e, "rgba")
    let [t, n, s] = e
    ;(t /= 255), (n /= 255), (s /= 255)
    const r = mi(t, n, s),
      l = vi(t, n, s),
      o = (l + r) / 2
    let i, a
    return (
      l === r
        ? ((i = 0), (a = Number.NaN))
        : (i = o < 0.5 ? (l - r) / (l + r) : (l - r) / (2 - l - r)),
      t == l
        ? (a = (n - s) / (l - r))
        : n == l
          ? (a = 2 + (s - t) / (l - r))
          : s == l && (a = 4 + (t - n) / (l - r)),
      (a *= 60),
      a < 0 && (a += 360),
      e.length > 3 && e[3] !== void 0 ? [a, i, o, e[3]] : [a, i, o]
    )
  },
  { round: Xr } = Math,
  Rm = (...e) => {
    const t = be(e, "rgba")
    let n = Cr(e) || "rgb"
    return n.substr(0, 3) == "hsl"
      ? Bm(Ou(t), n)
      : ((t[0] = Xr(t[0])),
        (t[1] = Xr(t[1])),
        (t[2] = Xr(t[2])),
        (n === "rgba" || (t.length > 3 && t[3] < 1)) &&
          ((t[3] = t.length > 3 ? t[3] : 1), (n = "rgba")),
        `${n}(${t.slice(0, n === "rgb" ? 3 : 4).join(",")})`)
  },
  { round: Jr } = Math,
  Ml = (...e) => {
    e = be(e, "hsl")
    const [t, n, s] = e
    let r, l, o
    if (n === 0) r = l = o = s * 255
    else {
      const i = [0, 0, 0],
        a = [0, 0, 0],
        c = s < 0.5 ? s * (1 + n) : s + n - s * n,
        u = 2 * s - c,
        d = t / 360
      ;(i[0] = d + 1 / 3), (i[1] = d), (i[2] = d - 1 / 3)
      for (let p = 0; p < 3; p++)
        i[p] < 0 && (i[p] += 1),
          i[p] > 1 && (i[p] -= 1),
          6 * i[p] < 1
            ? (a[p] = u + (c - u) * 6 * i[p])
            : 2 * i[p] < 1
              ? (a[p] = c)
              : 3 * i[p] < 2
                ? (a[p] = u + (c - u) * (2 / 3 - i[p]) * 6)
                : (a[p] = u)
      ;[r, l, o] = [Jr(a[0] * 255), Jr(a[1] * 255), Jr(a[2] * 255)]
    }
    return e.length > 3 ? [r, l, o, e[3]] : [r, l, o, 1]
  },
  Lu = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
  ju = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
  Bu =
    /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  Ru =
    /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  _u =
    /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
  Nu =
    /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  { round: Mo } = Math,
  bi = (e) => {
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
      for (let s = 0; s < 3; s++) n[s] = Mo(n[s] * 2.55)
      return (n[3] = 1), n
    }
    if ((t = e.match(Ru))) {
      const n = t.slice(1, 5)
      for (let s = 0; s < 3; s++) n[s] = Mo(n[s] * 2.55)
      return (n[3] = +n[3]), n
    }
    if ((t = e.match(_u))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Ml(n)
      return (s[3] = 1), s
    }
    if ((t = e.match(Nu))) {
      const n = t.slice(1, 4)
      ;(n[1] *= 0.01), (n[2] *= 0.01)
      const s = Ml(n)
      return (s[3] = +t[4]), s
    }
  }
bi.test = (e) =>
  Lu.test(e) ||
  ju.test(e) ||
  Bu.test(e) ||
  Ru.test(e) ||
  _u.test(e) ||
  Nu.test(e)
G.prototype.css = function (e) {
  return Rm(this._rgb, e)
}
ie.css = (...e) => new G(...e, "css")
fe.format.css = bi
fe.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ve(e) === "string" && bi.test(e)) return "css"
  },
})
fe.format.gl = (...e) => {
  const t = be(e, "rgba")
  return (t[0] *= 255), (t[1] *= 255), (t[2] *= 255), t
}
ie.gl = (...e) => new G(...e, "gl")
G.prototype.gl = function () {
  const e = this._rgb
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
}
const { floor: _m } = Math,
  Nm = (...e) => {
    e = be(e, "hcg")
    let [t, n, s] = e,
      r,
      l,
      o
    s = s * 255
    const i = n * 255
    if (n === 0) r = l = o = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const a = _m(t),
        c = t - a,
        u = s * (1 - n),
        d = u + i * (1 - c),
        p = u + i * c,
        h = u + i
      switch (a) {
        case 0:
          ;[r, l, o] = [h, p, u]
          break
        case 1:
          ;[r, l, o] = [d, h, u]
          break
        case 2:
          ;[r, l, o] = [u, h, p]
          break
        case 3:
          ;[r, l, o] = [u, d, h]
          break
        case 4:
          ;[r, l, o] = [p, u, h]
          break
        case 5:
          ;[r, l, o] = [h, u, d]
          break
      }
    }
    return [r, l, o, e.length > 3 ? e[3] : 1]
  },
  zm = (...e) => {
    const [t, n, s] = be(e, "rgb"),
      r = mi(t, n, s),
      l = vi(t, n, s),
      o = l - r,
      i = (o * 100) / 255,
      a = (r / (255 - o)) * 100
    let c
    return (
      o === 0
        ? (c = Number.NaN)
        : (t === l && (c = (n - s) / o),
          n === l && (c = 2 + (s - t) / o),
          s === l && (c = 4 + (t - n) / o),
          (c *= 60),
          c < 0 && (c += 360)),
      [c, i, a]
    )
  }
G.prototype.hcg = function () {
  return zm(this._rgb)
}
ie.hcg = (...e) => new G(...e, "hcg")
fe.format.hcg = Nm
fe.autodetect.push({
  p: 1,
  test: (...e) => {
    if (((e = be(e, "hcg")), ve(e) === "array" && e.length === 3)) return "hcg"
  },
})
const Dm = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  Fm = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
  zu = (e) => {
    if (e.match(Dm)) {
      ;(e.length === 4 || e.length === 7) && (e = e.substr(1)),
        e.length === 3 &&
          ((e = e.split("")), (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]))
      const t = parseInt(e, 16),
        n = t >> 16,
        s = (t >> 8) & 255,
        r = t & 255
      return [n, s, r, 1]
    }
    if (e.match(Fm)) {
      ;(e.length === 5 || e.length === 9) && (e = e.substr(1)),
        e.length === 4 &&
          ((e = e.split("")),
          (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]))
      const t = parseInt(e, 16),
        n = (t >> 24) & 255,
        s = (t >> 16) & 255,
        r = (t >> 8) & 255,
        l = Math.round(((t & 255) / 255) * 100) / 100
      return [n, s, r, l]
    }
    throw new Error(`unknown hex color: ${e}`)
  },
  { round: Bs } = Math,
  Du = (...e) => {
    let [t, n, s, r] = be(e, "rgba"),
      l = Cr(e) || "auto"
    r === void 0 && (r = 1),
      l === "auto" && (l = r < 1 ? "rgba" : "rgb"),
      (t = Bs(t)),
      (n = Bs(n)),
      (s = Bs(s))
    let i = "000000" + ((t << 16) | (n << 8) | s).toString(16)
    i = i.substr(i.length - 6)
    let a = "0" + Bs(r * 255).toString(16)
    switch (((a = a.substr(a.length - 2)), l.toLowerCase())) {
      case "rgba":
        return `#${i}${a}`
      case "argb":
        return `#${a}${i}`
      default:
        return `#${i}`
    }
  }
G.prototype.hex = function (e) {
  return Du(this._rgb, e)
}
ie.hex = (...e) => new G(...e, "hex")
fe.format.hex = zu
fe.autodetect.push({
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
const { cos: In } = Math,
  Hm = (...e) => {
    e = be(e, "hsi")
    let [t, n, s] = e,
      r,
      l,
      o
    return (
      isNaN(t) && (t = 0),
      isNaN(n) && (n = 0),
      t > 360 && (t -= 360),
      t < 0 && (t += 360),
      (t /= 360),
      t < 1 / 3
        ? ((o = (1 - n) / 3),
          (r = (1 + (n * In(Ft * t)) / In(Kr - Ft * t)) / 3),
          (l = 1 - (o + r)))
        : t < 2 / 3
          ? ((t -= 1 / 3),
            (r = (1 - n) / 3),
            (l = (1 + (n * In(Ft * t)) / In(Kr - Ft * t)) / 3),
            (o = 1 - (r + l)))
          : ((t -= 2 / 3),
            (l = (1 - n) / 3),
            (o = (1 + (n * In(Ft * t)) / In(Kr - Ft * t)) / 3),
            (r = 1 - (l + o))),
      (r = Fn(s * r * 3)),
      (l = Fn(s * l * 3)),
      (o = Fn(s * o * 3)),
      [r * 255, l * 255, o * 255, e.length > 3 ? e[3] : 1]
    )
  },
  { min: Gm, sqrt: Vm, acos: Wm } = Math,
  qm = (...e) => {
    let [t, n, s] = be(e, "rgb")
    ;(t /= 255), (n /= 255), (s /= 255)
    let r
    const l = Gm(t, n, s),
      o = (t + n + s) / 3,
      i = o > 0 ? 1 - l / o : 0
    return (
      i === 0
        ? (r = NaN)
        : ((r = (t - n + (t - s)) / 2),
          (r /= Vm((t - n) * (t - n) + (t - s) * (n - s))),
          (r = Wm(r)),
          s > n && (r = Ft - r),
          (r /= Ft)),
      [r * 360, i, o]
    )
  }
G.prototype.hsi = function () {
  return qm(this._rgb)
}
ie.hsi = (...e) => new G(...e, "hsi")
fe.format.hsi = Hm
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = be(e, "hsi")), ve(e) === "array" && e.length === 3)) return "hsi"
  },
})
G.prototype.hsl = function () {
  return Ou(this._rgb)
}
ie.hsl = (...e) => new G(...e, "hsl")
fe.format.hsl = Ml
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = be(e, "hsl")), ve(e) === "array" && e.length === 3)) return "hsl"
  },
})
const { floor: Um } = Math,
  Km = (...e) => {
    e = be(e, "hsv")
    let [t, n, s] = e,
      r,
      l,
      o
    if (((s *= 255), n === 0)) r = l = o = s
    else {
      t === 360 && (t = 0),
        t > 360 && (t -= 360),
        t < 0 && (t += 360),
        (t /= 60)
      const i = Um(t),
        a = t - i,
        c = s * (1 - n),
        u = s * (1 - n * a),
        d = s * (1 - n * (1 - a))
      switch (i) {
        case 0:
          ;[r, l, o] = [s, d, c]
          break
        case 1:
          ;[r, l, o] = [u, s, c]
          break
        case 2:
          ;[r, l, o] = [c, s, d]
          break
        case 3:
          ;[r, l, o] = [c, u, s]
          break
        case 4:
          ;[r, l, o] = [d, c, s]
          break
        case 5:
          ;[r, l, o] = [s, c, u]
          break
      }
    }
    return [r, l, o, e.length > 3 ? e[3] : 1]
  },
  { min: Ym, max: Xm } = Math,
  Jm = (...e) => {
    e = be(e, "rgb")
    let [t, n, s] = e
    const r = Ym(t, n, s),
      l = Xm(t, n, s),
      o = l - r
    let i, a, c
    return (
      (c = l / 255),
      l === 0
        ? ((i = Number.NaN), (a = 0))
        : ((a = o / l),
          t === l && (i = (n - s) / o),
          n === l && (i = 2 + (s - t) / o),
          s === l && (i = 4 + (t - n) / o),
          (i *= 60),
          i < 0 && (i += 360)),
      [i, a, c]
    )
  }
G.prototype.hsv = function () {
  return Jm(this._rgb)
}
ie.hsv = (...e) => new G(...e, "hsv")
fe.format.hsv = Km
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = be(e, "hsv")), ve(e) === "array" && e.length === 3)) return "hsv"
  },
})
const rt = {
    Kn: 18,
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452,
  },
  { pow: Zm } = Math,
  Fu = (...e) => {
    e = be(e, "lab")
    const [t, n, s] = e
    let r, l, o, i, a, c
    return (
      (l = (t + 16) / 116),
      (r = isNaN(n) ? l : l + n / 500),
      (o = isNaN(s) ? l : l - s / 200),
      (l = rt.Yn * Qr(l)),
      (r = rt.Xn * Qr(r)),
      (o = rt.Zn * Qr(o)),
      (i = Zr(3.2404542 * r - 1.5371385 * l - 0.4985314 * o)),
      (a = Zr(-0.969266 * r + 1.8760108 * l + 0.041556 * o)),
      (c = Zr(0.0556434 * r - 0.2040259 * l + 1.0572252 * o)),
      [i, a, c, e.length > 3 ? e[3] : 1]
    )
  },
  Zr = (e) => 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * Zm(e, 1 / 2.4) - 0.055),
  Qr = (e) => (e > rt.t1 ? e * e * e : rt.t2 * (e - rt.t0)),
  { pow: Hu } = Math,
  Gu = (...e) => {
    const [t, n, s] = be(e, "rgb"),
      [r, l, o] = Qm(t, n, s),
      i = 116 * l - 16
    return [i < 0 ? 0 : i, 500 * (r - l), 200 * (l - o)]
  },
  el = (e) =>
    (e /= 255) <= 0.04045 ? e / 12.92 : Hu((e + 0.055) / 1.055, 2.4),
  tl = (e) => (e > rt.t3 ? Hu(e, 1 / 3) : e / rt.t2 + rt.t0),
  Qm = (e, t, n) => {
    ;(e = el(e)), (t = el(t)), (n = el(n))
    const s = tl((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / rt.Xn),
      r = tl((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / rt.Yn),
      l = tl((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / rt.Zn)
    return [s, r, l]
  }
G.prototype.lab = function () {
  return Gu(this._rgb)
}
ie.lab = (...e) => new G(...e, "lab")
fe.format.lab = Fu
fe.autodetect.push({
  p: 2,
  test: (...e) => {
    if (((e = be(e, "lab")), ve(e) === "array" && e.length === 3)) return "lab"
  },
})
const { sin: e1, cos: t1 } = Math,
  Vu = (...e) => {
    let [t, n, s] = be(e, "lch")
    return isNaN(s) && (s = 0), (s = s * Mm), [t, t1(s) * n, e1(s) * n]
  },
  Wu = (...e) => {
    e = be(e, "lch")
    const [t, n, s] = e,
      [r, l, o] = Vu(t, n, s),
      [i, a, c] = Fu(r, l, o)
    return [i, a, c, e.length > 3 ? e[3] : 1]
  },
  n1 = (...e) => {
    const t = be(e, "hcl").reverse()
    return Wu(...t)
  },
  { sqrt: s1, atan2: r1, round: l1 } = Math,
  qu = (...e) => {
    const [t, n, s] = be(e, "lab"),
      r = s1(n * n + s * s)
    let l = (r1(s, n) * Am + 360) % 360
    return l1(r * 1e4) === 0 && (l = Number.NaN), [t, r, l]
  },
  Uu = (...e) => {
    const [t, n, s] = be(e, "rgb"),
      [r, l, o] = Gu(t, n, s)
    return qu(r, l, o)
  }
G.prototype.lch = function () {
  return Uu(this._rgb)
}
G.prototype.hcl = function () {
  return Uu(this._rgb).reverse()
}
ie.lch = (...e) => new G(...e, "lch")
ie.hcl = (...e) => new G(...e, "hcl")
fe.format.lch = Wu
fe.format.hcl = n1
;["lch", "hcl"].forEach((e) =>
  fe.autodetect.push({
    p: 2,
    test: (...t) => {
      if (((t = be(t, e)), ve(t) === "array" && t.length === 3)) return e
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
  if (((e = e.toLowerCase()), qn[e])) return zu(qn[e])
  throw new Error("unknown color name: " + e)
}
fe.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ve(e) === "string" && qn[e.toLowerCase()]) return "named"
  },
})
const i1 = (e) => {
    if (ve(e) == "number" && e >= 0 && e <= 16777215) {
      const t = e >> 16,
        n = (e >> 8) & 255,
        s = e & 255
      return [t, n, s, 1]
    }
    throw new Error("unknown num color: " + e)
  },
  o1 = (...e) => {
    const [t, n, s] = be(e, "rgb")
    return (t << 16) + (n << 8) + s
  }
G.prototype.num = function () {
  return o1(this._rgb)
}
ie.num = (...e) => new G(...e, "num")
fe.format.num = i1
fe.autodetect.push({
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
const { round: Ku } = Math
G.prototype.rgb = function (e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ku)
}
G.prototype.rgba = function (e = !0) {
  return this._rgb
    .slice(0, 4)
    .map((t, n) => (n < 3 ? (e === !1 ? t : Ku(t)) : t))
}
ie.rgb = (...e) => new G(...e, "rgb")
fe.format.rgb = (...e) => {
  const t = be(e, "rgba")
  return t[3] === void 0 && (t[3] = 1), t
}
fe.autodetect.push({
  p: 3,
  test: (...e) => {
    if (
      ((e = be(e, "rgba")),
      ve(e) === "array" &&
        (e.length === 3 ||
          (e.length === 4 && ve(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)))
    )
      return "rgb"
  },
})
const { log: Rs } = Math,
  Yu = (e) => {
    const t = e / 100
    let n, s, r
    return (
      t < 66
        ? ((n = 255),
          (s =
            t < 6
              ? 0
              : -155.25485562709179 -
                0.44596950469579133 * (s = t - 2) +
                104.49216199393888 * Rs(s)),
          (r =
            t < 20
              ? 0
              : -254.76935184120902 +
                0.8274096064007395 * (r = t - 10) +
                115.67994401066147 * Rs(r)))
        : ((n =
            351.97690566805693 +
            0.114206453784165 * (n = t - 55) -
            40.25366309332127 * Rs(n)),
          (s =
            325.4494125711974 +
            0.07943456536662342 * (s = t - 50) -
            28.0852963507957 * Rs(s)),
          (r = 255)),
      [n, s, r, 1]
    )
  },
  { round: a1 } = Math,
  u1 = (...e) => {
    const t = be(e, "rgb"),
      n = t[0],
      s = t[2]
    let r = 1e3,
      l = 4e4
    const o = 0.4
    let i
    for (; l - r > o; ) {
      i = (l + r) * 0.5
      const a = Yu(i)
      a[2] / a[0] >= s / n ? (l = i) : (r = i)
    }
    return a1(i)
  }
G.prototype.temp =
  G.prototype.kelvin =
  G.prototype.temperature =
    function () {
      return u1(this._rgb)
    }
ie.temp = ie.kelvin = ie.temperature = (...e) => new G(...e, "temp")
fe.format.temp = fe.format.kelvin = fe.format.temperature = Yu
const { pow: Vs, sign: c1 } = Math,
  Xu = (...e) => {
    e = be(e, "lab")
    const [t, n, s] = e,
      r = Vs(t + 0.3963377774 * n + 0.2158037573 * s, 3),
      l = Vs(t - 0.1055613458 * n - 0.0638541728 * s, 3),
      o = Vs(t - 0.0894841775 * n - 1.291485548 * s, 3)
    return [
      255 * nl(4.0767416621 * r - 3.3077115913 * l + 0.2309699292 * o),
      255 * nl(-1.2684380046 * r + 2.6097574011 * l - 0.3413193965 * o),
      255 * nl(-0.0041960863 * r - 0.7034186147 * l + 1.707614701 * o),
      e.length > 3 ? e[3] : 1,
    ]
  }
function nl(e) {
  const t = Math.abs(e)
  return t > 0.0031308
    ? (c1(e) || 1) * (1.055 * Vs(t, 1 / 2.4) - 0.055)
    : e * 12.92
}
const { cbrt: sl, pow: d1, sign: f1 } = Math,
  Ju = (...e) => {
    const [t, n, s] = be(e, "rgb"),
      [r, l, o] = [rl(t / 255), rl(n / 255), rl(s / 255)],
      i = sl(0.4122214708 * r + 0.5363325363 * l + 0.0514459929 * o),
      a = sl(0.2119034982 * r + 0.6806995451 * l + 0.1073969566 * o),
      c = sl(0.0883024619 * r + 0.2817188376 * l + 0.6299787005 * o)
    return [
      0.2104542553 * i + 0.793617785 * a - 0.0040720468 * c,
      1.9779984951 * i - 2.428592205 * a + 0.4505937099 * c,
      0.0259040371 * i + 0.7827717662 * a - 0.808675766 * c,
    ]
  }
function rl(e) {
  const t = Math.abs(e)
  return t < 0.04045 ? e / 12.92 : (f1(e) || 1) * d1((t + 0.055) / 1.055, 2.4)
}
G.prototype.oklab = function () {
  return Ju(this._rgb)
}
ie.oklab = (...e) => new G(...e, "oklab")
fe.format.oklab = Xu
fe.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = be(e, "oklab")), ve(e) === "array" && e.length === 3))
      return "oklab"
  },
})
const p1 = (...e) => {
    e = be(e, "lch")
    const [t, n, s] = e,
      [r, l, o] = Vu(t, n, s),
      [i, a, c] = Xu(r, l, o)
    return [i, a, c, e.length > 3 ? e[3] : 1]
  },
  h1 = (...e) => {
    const [t, n, s] = be(e, "rgb"),
      [r, l, o] = Ju(t, n, s)
    return qu(r, l, o)
  }
G.prototype.oklch = function () {
  return h1(this._rgb)
}
ie.oklch = (...e) => new G(...e, "oklch")
fe.format.oklch = p1
fe.autodetect.push({
  p: 3,
  test: (...e) => {
    if (((e = be(e, "oklch")), ve(e) === "array" && e.length === 3))
      return "oklch"
  },
})
G.prototype.alpha = function (e, t = !1) {
  return e !== void 0 && ve(e) === "number"
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
  return (n[0] -= rt.Kn * e), new G(n, "lab").alpha(t.alpha(), !0)
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
    const r = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0)
    if (r > -1) return s[r]
    throw new Error(`unknown channel ${n} in mode ${t}`)
  } else return s
}
const { pow: g1 } = Math,
  m1 = 1e-7,
  v1 = 20
G.prototype.luminance = function (e, t = "rgb") {
  if (e !== void 0 && ve(e) === "number") {
    if (e === 0) return new G([0, 0, 0, this._rgb[3]], "rgb")
    if (e === 1) return new G([255, 255, 255, this._rgb[3]], "rgb")
    let n = this.luminance(),
      s = v1
    const r = (o, i) => {
        const a = o.interpolate(i, 0.5, t),
          c = a.luminance()
        return Math.abs(e - c) < m1 || !s-- ? a : c > e ? r(o, a) : r(a, i)
      },
      l = (
        n > e ? r(new G([0, 0, 0]), this) : r(this, new G([255, 255, 255]))
      ).rgb()
    return new G([...l, this._rgb[3]])
  }
  return b1(...this._rgb.slice(0, 3))
}
const b1 = (e, t, n) => (
    (e = ll(e)), (t = ll(t)), (n = ll(n)), 0.2126 * e + 0.7152 * t + 0.0722 * n
  ),
  ll = (e) => (
    (e /= 255), e <= 0.03928 ? e / 12.92 : g1((e + 0.055) / 1.055, 2.4)
  ),
  Ke = {},
  ws = (e, t, n = 0.5, ...s) => {
    let r = s[0] || "lrgb"
    if ((!Ke[r] && !s.length && (r = Object.keys(Ke)[0]), !Ke[r]))
      throw new Error(`interpolation mode ${r} is not defined`)
    return (
      ve(e) !== "object" && (e = new G(e)),
      ve(t) !== "object" && (t = new G(t)),
      Ke[r](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
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
    (n[1] += rt.Kn * e),
    n[1] < 0 && (n[1] = 0),
    new G(n, "lch").alpha(t.alpha(), !0)
  )
}
G.prototype.desaturate = function (e = 1) {
  return this.saturate(-e)
}
G.prototype.set = function (e, t, n = !1) {
  const [s, r] = e.split("."),
    l = this[s]()
  if (r) {
    const o = s.indexOf(r) - (s.substr(0, 2) === "ok" ? 2 : 0)
    if (o > -1) {
      if (ve(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            l[o] += +t
            break
          case "-":
            l[o] += +t
            break
          case "*":
            l[o] *= +t.substr(1)
            break
          case "/":
            l[o] /= +t.substr(1)
            break
          default:
            l[o] = +t
        }
      else if (ve(t) === "number") l[o] = t
      else throw new Error("unsupported value for Color.set")
      const i = new G(l, s)
      return n ? ((this._rgb = i._rgb), this) : i
    }
    throw new Error(`unknown channel ${r} in mode ${s}`)
  } else return l
}
G.prototype.tint = function (e = 0.5, ...t) {
  return ws(this, "white", e, ...t)
}
G.prototype.shade = function (e = 0.5, ...t) {
  return ws(this, "black", e, ...t)
}
const x1 = (e, t, n) => {
  const s = e._rgb,
    r = t._rgb
  return new G(
    s[0] + n * (r[0] - s[0]),
    s[1] + n * (r[1] - s[1]),
    s[2] + n * (r[2] - s[2]),
    "rgb",
  )
}
Ke.rgb = x1
const { sqrt: il, pow: $n } = Math,
  y1 = (e, t, n) => {
    const [s, r, l] = e._rgb,
      [o, i, a] = t._rgb
    return new G(
      il($n(s, 2) * (1 - n) + $n(o, 2) * n),
      il($n(r, 2) * (1 - n) + $n(i, 2) * n),
      il($n(l, 2) * (1 - n) + $n(a, 2) * n),
      "rgb",
    )
  }
Ke.lrgb = y1
const w1 = (e, t, n) => {
  const s = e.lab(),
    r = t.lab()
  return new G(
    s[0] + n * (r[0] - s[0]),
    s[1] + n * (r[1] - s[1]),
    s[2] + n * (r[2] - s[2]),
    "lab",
  )
}
Ke.lab = w1
const Kn = (e, t, n, s) => {
    let r, l
    s === "hsl"
      ? ((r = e.hsl()), (l = t.hsl()))
      : s === "hsv"
        ? ((r = e.hsv()), (l = t.hsv()))
        : s === "hcg"
          ? ((r = e.hcg()), (l = t.hcg()))
          : s === "hsi"
            ? ((r = e.hsi()), (l = t.hsi()))
            : s === "lch" || s === "hcl"
              ? ((s = "hcl"), (r = e.hcl()), (l = t.hcl()))
              : s === "oklch" &&
                ((r = e.oklch().reverse()), (l = t.oklch().reverse()))
    let o, i, a, c, u, d
    ;(s.substr(0, 1) === "h" || s === "oklch") &&
      (([o, a, u] = r), ([i, c, d] = l))
    let p, h, g, v
    return (
      !isNaN(o) && !isNaN(i)
        ? (i > o && i - o > 180
            ? (v = i - (o + 360))
            : i < o && o - i > 180
              ? (v = i + 360 - o)
              : (v = i - o),
          (h = o + n * v))
        : isNaN(o)
          ? isNaN(i)
            ? (h = Number.NaN)
            : ((h = i), (u == 1 || u == 0) && s != "hsv" && (p = c))
          : ((h = o), (d == 1 || d == 0) && s != "hsv" && (p = a)),
      p === void 0 && (p = a + n * (c - a)),
      (g = u + n * (d - u)),
      s === "oklch" ? new G([g, p, h], s) : new G([h, p, g], s)
    )
  },
  Zu = (e, t, n) => Kn(e, t, n, "lch")
Ke.lch = Zu
Ke.hcl = Zu
const S1 = (e, t, n) => {
  const s = e.num(),
    r = t.num()
  return new G(s + n * (r - s), "num")
}
Ke.num = S1
const C1 = (e, t, n) => Kn(e, t, n, "hcg")
Ke.hcg = C1
const E1 = (e, t, n) => Kn(e, t, n, "hsi")
Ke.hsi = E1
const T1 = (e, t, n) => Kn(e, t, n, "hsl")
Ke.hsl = T1
const k1 = (e, t, n) => Kn(e, t, n, "hsv")
Ke.hsv = k1
const P1 = (e, t, n) => {
  const s = e.oklab(),
    r = t.oklab()
  return new G(
    s[0] + n * (r[0] - s[0]),
    s[1] + n * (r[1] - s[1]),
    s[2] + n * (r[2] - s[2]),
    "oklab",
  )
}
Ke.oklab = P1
const I1 = (e, t, n) => Kn(e, t, n, "oklch")
Ke.oklch = I1
const { pow: ol, sqrt: al, PI: ul, cos: Ao, sin: Oo, atan2: $1 } = Math,
  M1 = (e, t = "lrgb", n = null) => {
    const s = e.length
    n || (n = Array.from(new Array(s)).map(() => 1))
    const r =
      s /
      n.reduce(function (d, p) {
        return d + p
      })
    if (
      (n.forEach((d, p) => {
        n[p] *= r
      }),
      (e = e.map((d) => new G(d))),
      t === "lrgb")
    )
      return A1(e, n)
    const l = e.shift(),
      o = l.get(t),
      i = []
    let a = 0,
      c = 0
    for (let d = 0; d < o.length; d++)
      if (
        ((o[d] = (o[d] || 0) * n[0]),
        i.push(isNaN(o[d]) ? 0 : n[0]),
        t.charAt(d) === "h" && !isNaN(o[d]))
      ) {
        const p = (o[d] / 180) * ul
        ;(a += Ao(p) * n[0]), (c += Oo(p) * n[0])
      }
    let u = l.alpha() * n[0]
    e.forEach((d, p) => {
      const h = d.get(t)
      u += d.alpha() * n[p + 1]
      for (let g = 0; g < o.length; g++)
        if (!isNaN(h[g]))
          if (((i[g] += n[p + 1]), t.charAt(g) === "h")) {
            const v = (h[g] / 180) * ul
            ;(a += Ao(v) * n[p + 1]), (c += Oo(v) * n[p + 1])
          } else o[g] += h[g] * n[p + 1]
    })
    for (let d = 0; d < o.length; d++)
      if (t.charAt(d) === "h") {
        let p = ($1(c / i[d], a / i[d]) / ul) * 180
        for (; p < 0; ) p += 360
        for (; p >= 360; ) p -= 360
        o[d] = p
      } else o[d] = o[d] / i[d]
    return (u /= s), new G(o, t).alpha(u > 0.99999 ? 1 : u, !0)
  },
  A1 = (e, t) => {
    const n = e.length,
      s = [0, 0, 0, 0]
    for (let r = 0; r < e.length; r++) {
      const l = e[r],
        o = t[r] / n,
        i = l._rgb
      ;(s[0] += ol(i[0], 2) * o),
        (s[1] += ol(i[1], 2) * o),
        (s[2] += ol(i[2], 2) * o),
        (s[3] += i[3] * o)
    }
    return (
      (s[0] = al(s[0])),
      (s[1] = al(s[1])),
      (s[2] = al(s[2])),
      s[3] > 0.9999999 && (s[3] = 1),
      new G(gi(s))
    )
  },
  { pow: O1 } = Math
function lr(e) {
  let t = "rgb",
    n = ie("#ccc"),
    s = 0,
    r = [0, 1],
    l = [],
    o = [0, 0],
    i = !1,
    a = [],
    c = !1,
    u = 0,
    d = 1,
    p = !1,
    h = {},
    g = !0,
    v = 1
  const k = function (E) {
      if (
        ((E = E || ["#fff", "#000"]),
        E &&
          ve(E) === "string" &&
          ie.brewer &&
          ie.brewer[E.toLowerCase()] &&
          (E = ie.brewer[E.toLowerCase()]),
        ve(E) === "array")
      ) {
        E.length === 1 && (E = [E[0], E[0]]), (E = E.slice(0))
        for (let A = 0; A < E.length; A++) E[A] = ie(E[A])
        l.length = 0
        for (let A = 0; A < E.length; A++) l.push(A / (E.length - 1))
      }
      return T(), (a = E)
    },
    w = function (E) {
      if (i != null) {
        const A = i.length - 1
        let I = 0
        for (; I < A && E >= i[I]; ) I++
        return I - 1
      }
      return 0
    }
  let m = (E) => E,
    b = (E) => E
  const S = function (E, A) {
    let I, $
    if ((A == null && (A = !1), isNaN(E) || E === null)) return n
    A
      ? ($ = E)
      : i && i.length > 2
        ? ($ = w(E) / (i.length - 2))
        : d !== u
          ? ($ = (E - u) / (d - u))
          : ($ = 1),
      ($ = b($)),
      A || ($ = m($)),
      v !== 1 && ($ = O1($, v)),
      ($ = o[0] + $ * (1 - o[0] - o[1])),
      ($ = Fn($, 0, 1))
    const j = Math.floor($ * 1e4)
    if (g && h[j]) I = h[j]
    else {
      if (ve(a) === "array")
        for (let F = 0; F < l.length; F++) {
          const W = l[F]
          if ($ <= W) {
            I = a[F]
            break
          }
          if ($ >= W && F === l.length - 1) {
            I = a[F]
            break
          }
          if ($ > W && $ < l[F + 1]) {
            ;($ = ($ - W) / (l[F + 1] - W)),
              (I = ie.interpolate(a[F], a[F + 1], $, t))
            break
          }
        }
      else ve(a) === "function" && (I = a($))
      g && (h[j] = I)
    }
    return I
  }
  var T = () => (h = {})
  k(e)
  const M = function (E) {
    const A = ie(S(E))
    return c && A[c] ? A[c]() : A
  }
  return (
    (M.classes = function (E) {
      if (E != null) {
        if (ve(E) === "array") (i = E), (r = [E[0], E[E.length - 1]])
        else {
          const A = ie.analyze(r)
          E === 0 ? (i = [A.min, A.max]) : (i = ie.limits(A, "e", E))
        }
        return M
      }
      return i
    }),
    (M.domain = function (E) {
      if (!arguments.length) return r
      ;(u = E[0]), (d = E[E.length - 1]), (l = [])
      const A = a.length
      if (E.length === A && u !== d)
        for (let I of Array.from(E)) l.push((I - u) / (d - u))
      else {
        for (let I = 0; I < A; I++) l.push(I / (A - 1))
        if (E.length > 2) {
          const I = E.map((j, F) => F / (E.length - 1)),
            $ = E.map((j) => (j - u) / (d - u))
          $.every((j, F) => I[F] === j) ||
            (b = (j) => {
              if (j <= 0 || j >= 1) return j
              let F = 0
              for (; j >= $[F + 1]; ) F++
              const W = (j - $[F]) / ($[F + 1] - $[F])
              return I[F] + W * (I[F + 1] - I[F])
            })
        }
      }
      return (r = [u, d]), M
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
          ? (m = function (A) {
              const I = S(0, !0).lab()[0],
                $ = S(1, !0).lab()[0],
                j = I > $
              let F = S(A, !0).lab()[0]
              const W = I + ($ - I) * A
              let de = F - W,
                ge = 0,
                O = 1,
                N = 20
              for (; Math.abs(de) > 0.01 && N-- > 0; )
                (function () {
                  return (
                    j && (de *= -1),
                    de < 0
                      ? ((ge = A), (A += (O - A) * 0.5))
                      : ((O = A), (A += (ge - A) * 0.5)),
                    (F = S(A, !0).lab()[0]),
                    (de = F - W)
                  )
                })()
              return A
            })
          : (m = (A) => A),
        M
      )
    }),
    (M.padding = function (E) {
      return E != null ? (ve(E) === "number" && (E = [E, E]), (o = E), M) : o
    }),
    (M.colors = function (E, A) {
      arguments.length < 2 && (A = "hex")
      let I = []
      if (arguments.length === 0) I = a.slice(0)
      else if (E === 1) I = [M(0.5)]
      else if (E > 1) {
        const $ = r[0],
          j = r[1] - $
        I = L1(0, E).map((F) => M($ + (F / (E - 1)) * j))
      } else {
        e = []
        let $ = []
        if (i && i.length > 2)
          for (
            let j = 1, F = i.length, W = 1 <= F;
            W ? j < F : j > F;
            W ? j++ : j--
          )
            $.push((i[j - 1] + i[j]) * 0.5)
        else $ = r
        I = $.map((j) => M(j))
      }
      return ie[A] && (I = I.map(($) => $[A]())), I
    }),
    (M.cache = function (E) {
      return E != null ? ((g = E), M) : g
    }),
    (M.gamma = function (E) {
      return E != null ? ((v = E), M) : v
    }),
    (M.nodata = function (E) {
      return E != null ? ((n = ie(E)), M) : n
    }),
    M
  )
}
function L1(e, t, n) {
  let s = [],
    r = e < t,
    l = t
  for (let o = e; r ? o < l : o > l; r ? o++ : o--) s.push(o)
  return s
}
const j1 = function (e) {
    let t = [1, 1]
    for (let n = 1; n < e; n++) {
      let s = [1]
      for (let r = 1; r <= t.length; r++) s[r] = (t[r] || 0) + t[r - 1]
      t = s
    }
    return t
  },
  B1 = function (e) {
    let t, n, s, r
    if (((e = e.map((l) => new G(l))), e.length === 2))
      ([n, s] = e.map((l) => l.lab())),
        (t = function (l) {
          const o = [0, 1, 2].map((i) => n[i] + l * (s[i] - n[i]))
          return new G(o, "lab")
        })
    else if (e.length === 3)
      ([n, s, r] = e.map((l) => l.lab())),
        (t = function (l) {
          const o = [0, 1, 2].map(
            (i) =>
              (1 - l) * (1 - l) * n[i] + 2 * (1 - l) * l * s[i] + l * l * r[i],
          )
          return new G(o, "lab")
        })
    else if (e.length === 4) {
      let l
      ;([n, s, r, l] = e.map((o) => o.lab())),
        (t = function (o) {
          const i = [0, 1, 2].map(
            (a) =>
              (1 - o) * (1 - o) * (1 - o) * n[a] +
              3 * (1 - o) * (1 - o) * o * s[a] +
              3 * (1 - o) * o * o * r[a] +
              o * o * o * l[a],
          )
          return new G(i, "lab")
        })
    } else if (e.length >= 5) {
      let l, o, i
      ;(l = e.map((a) => a.lab())),
        (i = e.length - 1),
        (o = j1(i)),
        (t = function (a) {
          const c = 1 - a,
            u = [0, 1, 2].map((d) =>
              l.reduce((p, h, g) => p + o[g] * c ** (i - g) * a ** g * h[d], 0),
            )
          return new G(u, "lab")
        })
    } else
      throw new RangeError("No point in running bezier with only one color.")
    return t
  },
  R1 = (e) => {
    const t = B1(e)
    return (t.scale = () => lr(t)), t
  },
  Et = (e, t, n) => {
    if (!Et[n]) throw new Error("unknown blend mode " + n)
    return Et[n](e, t)
  },
  pn = (e) => (t, n) => {
    const s = ie(n).rgb(),
      r = ie(t).rgb()
    return ie.rgb(e(s, r))
  },
  hn = (e) => (t, n) => {
    const s = []
    return (
      (s[0] = e(t[0], n[0])), (s[1] = e(t[1], n[1])), (s[2] = e(t[2], n[2])), s
    )
  },
  _1 = (e) => e,
  N1 = (e, t) => (e * t) / 255,
  z1 = (e, t) => (e > t ? t : e),
  D1 = (e, t) => (e > t ? e : t),
  F1 = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)),
  H1 = (e, t) =>
    t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)),
  G1 = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)),
  V1 = (e, t) =>
    e === 255
      ? 255
      : ((e = (255 * (t / 255)) / (1 - e / 255)), e > 255 ? 255 : e)
Et.normal = pn(hn(_1))
Et.multiply = pn(hn(N1))
Et.screen = pn(hn(F1))
Et.overlay = pn(hn(H1))
Et.darken = pn(hn(z1))
Et.lighten = pn(hn(D1))
Et.dodge = pn(hn(V1))
Et.burn = pn(hn(G1))
const { pow: W1, sin: q1, cos: U1 } = Math
function K1(e = 300, t = -1.5, n = 1, s = 1, r = [0, 1]) {
  let l = 0,
    o
  ve(r) === "array" ? (o = r[1] - r[0]) : ((o = 0), (r = [r, r]))
  const i = function (a) {
    const c = Ft * ((e + 120) / 360 + t * a),
      u = W1(r[0] + o * a, s),
      p = ((l !== 0 ? n[0] + a * l : n) * u * (1 - u)) / 2,
      h = U1(c),
      g = q1(c),
      v = u + p * (-0.14861 * h + 1.78277 * g),
      k = u + p * (-0.29227 * h - 0.90649 * g),
      w = u + p * (1.97294 * h)
    return ie(gi([v * 255, k * 255, w * 255, 1]))
  }
  return (
    (i.start = function (a) {
      return a == null ? e : ((e = a), i)
    }),
    (i.rotations = function (a) {
      return a == null ? t : ((t = a), i)
    }),
    (i.gamma = function (a) {
      return a == null ? s : ((s = a), i)
    }),
    (i.hue = function (a) {
      return a == null
        ? n
        : ((n = a),
          ve(n) === "array"
            ? ((l = n[1] - n[0]), l === 0 && (n = n[1]))
            : (l = 0),
          i)
    }),
    (i.lightness = function (a) {
      return a == null
        ? r
        : (ve(a) === "array"
            ? ((r = a), (o = a[1] - a[0]))
            : ((r = [a, a]), (o = 0)),
          i)
    }),
    (i.scale = () => ie.scale(i)),
    i.hue(n),
    i
  )
}
const Y1 = "0123456789abcdef",
  { floor: X1, random: J1 } = Math,
  Z1 = () => {
    let e = "#"
    for (let t = 0; t < 6; t++) e += Y1.charAt(X1(J1() * 16))
    return new G(e, "hex")
  },
  { log: Lo, pow: Q1, floor: ev, abs: tv } = Math
function Qu(e, t = null) {
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
    (n.limits = (s, r) => ec(n, s, r)),
    n
  )
}
function ec(e, t = "equal", n = 7) {
  ve(e) == "array" && (e = Qu(e))
  const { min: s, max: r } = e,
    l = e.values.sort((i, a) => i - a)
  if (n === 1) return [s, r]
  const o = []
  if (
    (t.substr(0, 1) === "c" && (o.push(s), o.push(r)), t.substr(0, 1) === "e")
  ) {
    o.push(s)
    for (let i = 1; i < n; i++) o.push(s + (i / n) * (r - s))
    o.push(r)
  } else if (t.substr(0, 1) === "l") {
    if (s <= 0)
      throw new Error("Logarithmic scales are only possible for values > 0")
    const i = Math.LOG10E * Lo(s),
      a = Math.LOG10E * Lo(r)
    o.push(s)
    for (let c = 1; c < n; c++) o.push(Q1(10, i + (c / n) * (a - i)))
    o.push(r)
  } else if (t.substr(0, 1) === "q") {
    o.push(s)
    for (let i = 1; i < n; i++) {
      const a = ((l.length - 1) * i) / n,
        c = ev(a)
      if (c === a) o.push(l[c])
      else {
        const u = a - c
        o.push(l[c] * (1 - u) + l[c + 1] * u)
      }
    }
    o.push(r)
  } else if (t.substr(0, 1) === "k") {
    let i
    const a = l.length,
      c = new Array(a),
      u = new Array(n)
    let d = !0,
      p = 0,
      h = null
    ;(h = []), h.push(s)
    for (let k = 1; k < n; k++) h.push(s + (k / n) * (r - s))
    for (h.push(r); d; ) {
      for (let w = 0; w < n; w++) u[w] = 0
      for (let w = 0; w < a; w++) {
        const m = l[w]
        let b = Number.MAX_VALUE,
          S
        for (let T = 0; T < n; T++) {
          const M = tv(h[T] - m)
          M < b && ((b = M), (S = T)), u[S]++, (c[w] = S)
        }
      }
      const k = new Array(n)
      for (let w = 0; w < n; w++) k[w] = null
      for (let w = 0; w < a; w++)
        (i = c[w]), k[i] === null ? (k[i] = l[w]) : (k[i] += l[w])
      for (let w = 0; w < n; w++) k[w] *= 1 / u[w]
      d = !1
      for (let w = 0; w < n; w++)
        if (k[w] !== h[w]) {
          d = !0
          break
        }
      ;(h = k), p++, p > 200 && (d = !1)
    }
    const g = {}
    for (let k = 0; k < n; k++) g[k] = []
    for (let k = 0; k < a; k++) (i = c[k]), g[i].push(l[k])
    let v = []
    for (let k = 0; k < n; k++) v.push(g[k][0]), v.push(g[k][g[k].length - 1])
    ;(v = v.sort((k, w) => k - w)), o.push(v[0])
    for (let k = 1; k < v.length; k += 2) {
      const w = v[k]
      !isNaN(w) && o.indexOf(w) === -1 && o.push(w)
    }
  }
  return o
}
const nv = (e, t) => {
    ;(e = new G(e)), (t = new G(t))
    const n = e.luminance(),
      s = t.luminance()
    return n > s ? (n + 0.05) / (s + 0.05) : (s + 0.05) / (n + 0.05)
  },
  {
    sqrt: Nt,
    pow: Re,
    min: sv,
    max: rv,
    atan2: jo,
    abs: Bo,
    cos: _s,
    sin: Ro,
    exp: lv,
    PI: _o,
  } = Math
function iv(e, t, n = 1, s = 1, r = 1) {
  var l = function (ht) {
      return (360 * ht) / (2 * _o)
    },
    o = function (ht) {
      return (2 * _o * ht) / 360
    }
  ;(e = new G(e)), (t = new G(t))
  const [i, a, c] = Array.from(e.lab()),
    [u, d, p] = Array.from(t.lab()),
    h = (i + u) / 2,
    g = Nt(Re(a, 2) + Re(c, 2)),
    v = Nt(Re(d, 2) + Re(p, 2)),
    k = (g + v) / 2,
    w = 0.5 * (1 - Nt(Re(k, 7) / (Re(k, 7) + Re(25, 7)))),
    m = a * (1 + w),
    b = d * (1 + w),
    S = Nt(Re(m, 2) + Re(c, 2)),
    T = Nt(Re(b, 2) + Re(p, 2)),
    M = (S + T) / 2,
    E = l(jo(c, m)),
    A = l(jo(p, b)),
    I = E >= 0 ? E : E + 360,
    $ = A >= 0 ? A : A + 360,
    j = Bo(I - $) > 180 ? (I + $ + 360) / 2 : (I + $) / 2,
    F =
      1 -
      0.17 * _s(o(j - 30)) +
      0.24 * _s(o(2 * j)) +
      0.32 * _s(o(3 * j + 6)) -
      0.2 * _s(o(4 * j - 63))
  let W = $ - I
  ;(W = Bo(W) <= 180 ? W : $ <= I ? W + 360 : W - 360),
    (W = 2 * Nt(S * T) * Ro(o(W) / 2))
  const de = u - i,
    ge = T - S,
    O = 1 + (0.015 * Re(h - 50, 2)) / Nt(20 + Re(h - 50, 2)),
    N = 1 + 0.045 * M,
    B = 1 + 0.015 * M * F,
    xe = 30 * lv(-Re((j - 275) / 25, 2)),
    Le = -(2 * Nt(Re(M, 7) / (Re(M, 7) + Re(25, 7)))) * Ro(2 * o(xe)),
    je = Nt(
      Re(de / (n * O), 2) +
        Re(ge / (s * N), 2) +
        Re(W / (r * B), 2) +
        Le * (ge / (s * N)) * (W / (r * B)),
    )
  return rv(0, sv(100, je))
}
function ov(e, t, n = "lab") {
  ;(e = new G(e)), (t = new G(t))
  const s = e.get(n),
    r = t.get(n)
  let l = 0
  for (let o in s) {
    const i = (s[o] || 0) - (r[o] || 0)
    l += i * i
  }
  return Math.sqrt(l)
}
const av = (...e) => {
    try {
      return new G(...e), !0
    } catch {
      return !1
    }
  },
  uv = {
    cool() {
      return lr([ie.hsl(180, 1, 0.9), ie.hsl(250, 0.7, 0.4)])
    },
    hot() {
      return lr(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
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
Object.assign(ie, {
  average: M1,
  bezier: R1,
  blend: Et,
  cubehelix: K1,
  mix: ws,
  interpolate: ws,
  random: Z1,
  scale: lr,
  analyze: Qu,
  contrast: nv,
  deltaE: iv,
  distance: ov,
  limits: ec,
  valid: av,
  scales: uv,
  input: fe,
  colors: qn,
  brewer: Ws,
})
const cv = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  dv = { class: "flex flex-col items-center justify-center w-full" },
  fv = {
    class: "flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap",
    style: { gap: "5rem" },
  },
  pv = { viewBox: "0 0 36 36", class: "chart" },
  hv = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  gv = { viewBox: "0 0 36 36", class: "chart" },
  mv = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  vv = { id: "speedTable" },
  bv = { class: "flex" },
  xv = { class: "flex" },
  yv = {
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
  wv = Object.assign(yv, {
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
        r = (a) => {
          if (a >= 4) return "border-emerald-500"
          if (a == 3) return "border-orange-200"
          if (a == 2) return "border-orange-500"
          if (a == 1) return "border-orange-400"
        },
        l = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        },
        o = se(() => {
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
        i = (a) => {
          let c = document.querySelectorAll("tr"),
            u
          a == 5
            ? (u = ie("#e2e8f0"))
            : a == 4
              ? (u = ie("#cbd5e1"))
              : a == 3
                ? (u = ie("#475569"))
                : a == 2
                  ? (u = ie("#1e293b"))
                  : a == 1 && (u = ie("#0f172a"))
          for (let d = 1; d < c.length; d++)
            d % 2 == 0
              ? (c[d].style.backgroundColor = u.brighten(0))
              : (c[d].style.backgroundColor = u.brighten(0.2))
        }
      return (
        We(() => {
          i(t.brightness)
        }),
        un(
          () => t.brightness,
          (a, c) => {
            i(a)
          },
        ),
        (a, c) => (
          L(),
          K("div", cv, [
            f("div", dv, [
              f("div", fv, [
                f(
                  "div",
                  { id: "perfChart", class: x(s(e.brightness)) },
                  [
                    (L(),
                    K("svg", pv, [
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
                          class: x(["circle", r(e.brightness)]),
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
                        hv,
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
                          l(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      [
                        c[1] ||
                          (c[1] = ae(
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
                    K("svg", gv, [
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
                          class: x(["circle", r(e.brightness)]),
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
                        mv,
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
                          l(e.brightness),
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
                    l(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  f(
                    "h2",
                    { class: x(["text-2xl m-0", l(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  f(
                    "h2",
                    { class: x(["text-5xl", l(e.brightness)]) },
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
                        ae(
                          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
                        ),
                        f("b", null, "315 KB"),
                        ae(". That's half of the classic SNES game "),
                        f(
                          "em",
                          null,
                          "The Legend of Zelda: A Link to The Past",
                        ),
                        ae(
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
                  f("h3", { class: x(l(e.brightness)) }, "How I help", 2),
                  f("table", vv, [
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
                          f("div", bv, [
                            f(
                              "h4",
                              { class: x([l(e.brightness), "text-lg m-0"]) },
                              [
                                c[4] || (c[4] = ae(" Problem ", -1)),
                                U(
                                  Z(b0),
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
                          f("div", xv, [
                            f(
                              "h4",
                              { class: x([l(e.brightness), "text-lg m-0"]) },
                              [
                                c[5] || (c[5] = ae(" What I can do ", -1)),
                                U(
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
                              ae(" Optimize your images. "),
                              f("b", null, "A lot. "),
                              ae(
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
              U(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  Sv = fn(wv, [["__scopeId", "data-v-a139c5c2"]]),
  Cv = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  Ev = { class: "lg:w-6/12 sm:w-12/12" },
  Tv = { class: "flex items-center w-full" },
  kv = { class: "flex items-center w-full" },
  Pv = { class: "flex items-center w-full" },
  Iv = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  $v = { class: "prose text-center" },
  Mv = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      V(9274)
      const t = V(4709),
        n = V(new Date("2023-10-01")),
        s = V(new Date()),
        r = se(
          () =>
            ((s.value.getFullYear() - n.value.getFullYear()) * 12 +
              (s.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        l = (a) => (a > 1e6 ? Math.round(a / 1e6).toString() + "m" : a),
        o = (a) => {
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        },
        i = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        }
      return (a, c) => (
        L(),
        K("div", Cv, [
          f("div", Ev, [
            f(
              "h2",
              { class: x(["text-left text-5xl", i(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            f(
              "p",
              {
                class: x([
                  "text-left text-sm italic opacity-50 mt-3",
                  i(e.brightness),
                ]),
              },
              [
                c[1] || (c[1] = ae(" Website already secure? ", -1)),
                f("b", null, [
                  f(
                    "a",
                    { href: "", class: x(o(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  c[0] || (c[0] = ae(" are you?", -1)),
                ]),
              ],
              2,
            ),
            f(
              "hr",
              { class: x(["mb-5 mt-1 w-6/12 opacity-25", i(e.brightness)]) },
              null,
              2,
            ),
            f(
              "div",
              { class: x(["prose", i(e.brightness)]) },
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
                    f("div", Tv, [
                      U(
                        Z(Hs),
                        { class: x(["mr-2", o(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      f(
                        "h4",
                        { class: x(["font-bold m-0", i(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    c[2] ||
                      (c[2] = f(
                        "p",
                        null,
                        [
                          ae(
                            " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
                          ),
                          f("em", null, "very"),
                          ae(
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
                    f("div", kv, [
                      U(
                        Z(Hs),
                        { size: "2rem", class: x(["mr-2", o(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      f(
                        "h4",
                        { class: x(["font-bold m-0", i(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    c[3] ||
                      (c[3] = f(
                        "p",
                        null,
                        [
                          ae(
                            " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
                          ),
                          f("em", null, "do"),
                          ae(
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
                    f("div", Pv, [
                      U(
                        Z(Hs),
                        { class: x(["mr-2", o(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      f(
                        "h4",
                        { class: x(["font-bold m-0", i(e.brightness)]) },
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
          f("div", Iv, [
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
                f("div", $v, [
                  f(
                    "h3",
                    {
                      class: x([
                        "text-5xl font-monospace mt-6",
                        o(e.brightness),
                      ]),
                    },
                    Je(l(r.value)) + "+ ",
                    3,
                  ),
                  f(
                    "h3",
                    { class: x(["text-xl", i(e.brightness)]) },
                    [
                      c[10] || (c[10] = ae(" attacks blocked on ", -1)),
                      f(
                        "a",
                        {
                          class: x(o(e.brightness)),
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
                      class: x(["italic opacity-50 text-sm", i(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  f(
                    "p",
                    {
                      class: x(["italic opacity-50 text-sm", i(e.brightness)]),
                    },
                    [
                      f(
                        "a",
                        { href: "", class: x(o(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      c[11] || (c[11] = ae(" about the Bazaar project ", -1)),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            c[12] || (c[12] = f("div", { class: "h-3" }, null, -1)),
            f("hr", { class: x(["opacity-50", i(e.brightness)]) }, null, 2),
            c[13] || (c[13] = f("div", { class: "h-3" }, null, -1)),
            U(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  Av = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  Ov = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  Lv = { class: "flex w-full" },
  jv = { class: "flex w-full pt-4 gap-2" },
  Bv = { class: "w-6/12" },
  Rv = { class: "w-6/12" },
  _v = { class: "w-full flex" },
  Nv = { class: "w-6/12" },
  zv = { class: "w-6/12 pb-3" },
  Dv = {
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
        r = se(() =>
          s.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        l = se(() =>
          s.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        o = (c) => {
          if (c >= 4) return "text-slate-800"
          if (c == 3) return "text-slate-200"
          if (c == 2) return "text-slate-300"
          if (c == 1) return "text-slate-300"
        },
        i = (c) => {
          let u = document.querySelectorAll("tr"),
            d
          c == 5
            ? (d = ie("#e2e8f0"))
            : c == 4
              ? (d = ie("#cbd5e1"))
              : c == 3
                ? (d = ie("#475569"))
                : c == 2
                  ? (d = ie("#1e293b"))
                  : c == 1 && (d = ie("#0f172a"))
          for (let p = 1; p < u.length; p++)
            p % 2 == 0
              ? (u[p].style.backgroundColor = d.brighten(0))
              : (u[p].style.backgroundColor = d.brighten(0.2))
        },
        a = () => {
          ;(s.value = !s.value), s.value
        }
      return (
        We(() => {
          i(t.brightness)
        }),
        un(
          () => t.brightness,
          (c, u) => {
            i(c)
          },
        ),
        (c, u) => (
          L(),
          K("div", Av, [
            f("div", Ov, [
              f(
                "h2",
                { class: x(["text-5xl", o(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              f(
                "h3",
                { class: x(["text-2xl", o(e.brightness)]) },
                "Does yours?",
                2,
              ),
              f(
                "h4",
                { class: x(o(e.brightness)) },
                [
                  u[0] || (u[0] = ae(" What are the ", -1)),
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
                { class: x(o(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              f(
                "p",
                { class: x(o(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              f(
                "h4",
                { class: x(o(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              f(
                "p",
                { class: x(o(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              f(
                "p",
                { class: x(o(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              f("div", Lv, [
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
                    onClick: a,
                  },
                  [
                    s.value ? (L(), he(Z(hu), { key: 0 })) : ke("", !0),
                    s.value ? ke("", !0) : (L(), he(Z(u0), { key: 1 })),
                    u[1] ||
                      (u[1] = ae(
                        " Toggle red/green color blind/screen reader mode ",
                        -1,
                      )),
                  ],
                  2,
                ),
              ]),
              f("div", jv, [
                f("div", Bv, [
                  f(
                    "button",
                    { class: x(["rounded px-5 py-2 w-full", r.value]) },
                    [s.value ? (L(), he(Z(wo), { key: 0 })) : ke("", !0)],
                    2,
                  ),
                ]),
                f("div", Rv, [
                  f(
                    "button",
                    { class: x(["rounded px-5 py-2 w-full", l.value]) },
                    [s.value ? (L(), he(Z(kl), { key: 0 })) : ke("", !0)],
                    2,
                  ),
                ]),
              ]),
              f(
                "h4",
                { class: x(["text-2xl", o(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              f("div", _v, [
                f("div", Nv, [
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
                    [u[2] || (u[2] = ae(" Submit ", -1)), U(Z(wo))],
                    2,
                  ),
                ]),
                f("div", zv, [
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
                    [u[3] || (u[3] = ae(" Cancel ", -1)), U(Z(kl))],
                    2,
                  ),
                ]),
              ]),
              f(
                "p",
                { class: x(o(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              f(
                "p",
                { class: x(o(e.brightness)) },
                [
                  ...(u[4] ||
                    (u[4] = [
                      ae(
                        " Changes like these may seem small, but they make a ",
                        -1,
                      ),
                      f("em", null, "huge", -1),
                      ae(
                        " difference for the usability of your site. Let me help you be in the 2%. ",
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
            ]),
            u[5] || (u[5] = f("div", { class: "h-6" }, null, -1)),
            U(ks, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Fv = ["onMouseover"],
  Hv = {
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
      const s = (l, o, i, a) => {
          if (o) {
            if (l == 5) return i === a ? "bg-emerald-600" : "bg-emerald-500"
            if (l == 4) return i === a ? "bg-emerald-600" : "bg-emerald-500"
            if (l == 3 || l == 1)
              return i === a ? "bg-orange-500" : "bg-orange-400"
            if (l == 2) return "bg-orange-600"
          } else if (i === a) {
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
        r = (l, o) => {
          if (o) return l >= 3 ? "text-slate-200" : "text-slate-800"
          if (l >= 4) return "text-emerald-500"
          if (l == 3) return "text-orange-200"
          if (l == 2) return "text-orange-500"
          if (l == 1) return "text-orange-400"
        }
      return (l, o) => (
        L(),
        he(Z(Zf), null, {
          default: oe(() => [
            U(
              Z(Qf),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: oe(() => [
                  (L(!0),
                  K(
                    Pe,
                    null,
                    Wt(
                      t.value,
                      (i) => (
                        L(),
                        he(
                          Z(ep),
                          {
                            key: i.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: oe(({ selected: a }) => [
                              f(
                                "div",
                                {
                                  class: x([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    s(e.brightness, a, Z(n), i.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (c) =>
                                    Fe(n) ? (n.value = i.id) : (n = i.id),
                                  onMouseleave:
                                    o[0] ||
                                    (o[0] = (c) =>
                                      Fe(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  i.id == 0
                                    ? (L(),
                                      he(
                                        Z(Hs),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(r(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  i.id == 1
                                    ? (L(),
                                      he(
                                        Z(d0),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(r(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  i.id == 4
                                    ? (L(),
                                      he(
                                        Z(c0),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(r(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  i.id == 3
                                    ? (L(),
                                      he(
                                        Z(g0),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(r(e.brightness, a)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : ke("", !0),
                                  i.id == 5
                                    ? (L(),
                                      he(
                                        Z(hu),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: x(r(e.brightness, a)),
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
                                        r(e.brightness, a),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Je(i.title),
                                    3,
                                  ),
                                ],
                                42,
                                Fv,
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
            U(
              Z(tp),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: oe(() => [
                  U(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: oe(() => [
                        U(Sv, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  U(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: oe(() => [
                        U(Mv, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  U(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: oe(() => [
                        U($m, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  U(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: oe(() => [
                        U(xm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  U(
                    Z(Zn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: oe(() => [
                        U(Dv, { brightness: e.brightness }, null, 8, [
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
  Gv = { href: "/pricing" },
  Vv = {
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
      return (s, r) => (
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
            f("a", Gv, [
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
  Wv = { class: "flex-col" },
  qv = { class: "prose py-5 flex-col w-full" },
  Uv = { class: "flex" },
  Kv = { class: "w-6/12" },
  Yv = ["name", "checked", "onClick"],
  Xv = { class: "w-6/12" },
  Jv = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Zv = { class: "flex-col gap-4" },
  Qv = { class: "flex items-center" },
  eb = ["name", "checked", "onClick"],
  tb = { key: 0 },
  nb = { key: 1 },
  sb = { class: "" },
  rb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  lb = { class: "flex-col" },
  ib = { class: "flex justify-between" },
  ob = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  ab = { class: "gap-4 mt-4", name: "pricing" },
  ub = ["value"],
  cb = ["value"],
  db = { class: "flex gap-4", id: "leftInputs" },
  fb = { class: "flex gap-4", id: "rightInputs" },
  pb = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (O) => {
          O.preventDefault()
          const N = "pricing"
          let B = document.getElementsByName("name")[0].value,
            xe = document.getElementsByName("email")[0].value,
            me = document.getElementsByName("website")[0].value,
            Le = document.getElementsByName("notes")[0].value,
            je = document.getElementsByName("services")[0].value,
            ht = document.getElementsByName("total")[0].value,
            Qt = window.location.href,
            gt = new XMLHttpRequest()
          gt.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            gt.setRequestHeader("Content-Type", "application/json"),
            gt.send(
              JSON.stringify({
                form: N,
                name: B,
                email: xe,
                website: me,
                notes: Le,
                services: je,
                total: ht,
                referrer: Qt,
              }),
            ),
            (gt.onloadend = function () {
              if (
                (console.log(
                  `Status: ${gt.status}, Response: ${gt.responseText}`,
                ),
                gt.status == 200)
              ) {
                let et = document.getElementsByName(N)[0],
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
        r = (O) => {
          if (O >= 4) return "text-emerald-500"
          if (O == 3) return "text-slate-800"
          if (O == 2) return "text-orange-500"
          if (O == 1) return "text-orange-400"
        },
        l = (O) => {
          if (O >= 4) return "border-emerald-500"
          if (O == 3) return "border-orange-200"
          if (O == 2) return "border-orange-500"
          if (O == 1) return "border-orange-400"
        },
        o = (O) => {
          if (O >= 4) return "text-slate-800"
          if (O == 3) return "text-slate-200"
          if (O == 2) return "text-slate-300"
          if (O == 1) return "text-slate-300"
        },
        i = V({
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
        a = se(() =>
          i.value.speed.audit.enabled &&
          i.value.speed.optimize.enabled &&
          i.value.speed.caching.enabled &&
          i.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        c = se(() =>
          i.value.security.audit.enabled &&
          i.value.security.ddosprotection.enabled &&
          i.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        u = se(() =>
          i.value.accessibility.audit.enabled &&
          i.value.accessibility.levelA.enabled &&
          i.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        d = se(() => 3 / 3),
        p = se(
          () =>
            Object.values(i.value.speed).reduce(
              (O, N) => O + (N.enabled ? N.price : 0),
              0,
            ) * a.value,
        ),
        h = se(
          () =>
            Object.values(i.value.security).reduce(
              (O, N) => O + (N.enabled ? N.price : 0),
              0,
            ) * c.value,
        ),
        g = se(
          () =>
            Object.values(i.value.accessibility).reduce(
              (O, N) => O + (N.enabled ? N.price : 0),
              0,
            ) * u.value,
        ),
        v = se(
          () =>
            Object.values(i.value.designOverhaul).reduce(
              (O, N) => O + (N.enabled ? N.price : 0),
              0,
            ) * d.value,
        ),
        k = se(() => {
          let O = 0
          for (const [N, B] of Object.entries(i.value.speed))
            B.enabled && (O += B.price)
          return O
        }),
        w = se(() => {
          let O = 0
          for (const [N, B] of Object.entries(i.value.security))
            B.enabled && (O += B.price)
          return O
        }),
        m = se(() => {
          let O = 0
          for (const [N, B] of Object.entries(i.value.accessibility))
            B.enabled && (O += B.price)
          return O
        }),
        b = se(() => {
          let O = 0
          for (const [N, B] of Object.entries(i.value.designOverhaul))
            B.enabled && (O += B.price)
          return O
        }),
        S = () => {
          i.value.speed.audit.enabled &&
          i.value.speed.optimize.enabled &&
          i.value.speed.caching.enabled &&
          i.value.speed.images.enabled
            ? ((i.value.speed.audit.enabled = !1),
              (i.value.speed.optimize.enabled = !1),
              (i.value.speed.caching.enabled = !1),
              (i.value.speed.images.enabled = !1))
            : ((i.value.speed.audit.enabled = !0),
              (i.value.speed.optimize.enabled = !0),
              (i.value.speed.caching.enabled = !0),
              (i.value.speed.images.enabled = !0))
        },
        T = () => {
          i.value.security.audit.enabled &&
          i.value.security.ddosprotection.enabled &&
          i.value.security.protection.enabled
            ? ((i.value.security.audit.enabled = !1),
              (i.value.security.ddosprotection.enabled = !1),
              (i.value.security.protection.enabled = !1))
            : ((i.value.security.audit.enabled = !0),
              (i.value.security.ddosprotection.enabled = !0),
              (i.value.security.protection.enabled = !0))
        },
        M = () => {
          i.value.accessibility.audit.enabled &&
          i.value.accessibility.levelA.enabled &&
          i.value.accessibility.levelAA.enabled
            ? ((i.value.accessibility.audit.enabled = !1),
              (i.value.accessibility.levelA.enabled = !1),
              (i.value.accessibility.levelAA.enabled = !1))
            : ((i.value.accessibility.audit.enabled = !0),
              (i.value.accessibility.levelA.enabled = !0),
              (i.value.accessibility.levelAA.enabled = !0))
        },
        E = () => {
          i.value.designOverhaul.designOverhaul.enabled
            ? (i.value.designOverhaul.designOverhaul.enabled = !1)
            : (i.value.designOverhaul.designOverhaul.enabled = !0)
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
        I = (O) => Object.values(O.services).some((N) => N.enabled),
        $ = V([
          {
            title: "Speed",
            services: i.value.speed,
            enabled: !0,
            discount: a.value,
          },
          {
            title: "Security",
            services: i.value.security,
            enabled: !1,
            discount: c.value,
          },
          {
            title: "Accessibility",
            services: i.value.accessibility,
            enabled: !1,
            discount: u.value,
          },
          {
            title: "Design Overhaul",
            services: i.value.designOverhaul,
            enabled: !1,
            discount: d.value,
          },
        ]),
        j = (O) => {
          if (O.title === "Speed") return p.value
          if (O.title === "Security") return h.value
          if (O.title === "Accessibility") return g.value
          if (O.title === "Design Overhaul") return v.value
        },
        F = (O) => {
          if (O.title === "Speed") return k.value
          if (O.title === "Security") return w.value
          if (O.title === "Accessibility") return m.value
          if (O.title === "Design Overhaul") return b.value
        },
        W = se(
          () => j($.value[0]) + j($.value[1]) + j($.value[2]) + j($.value[3]),
        ),
        de = se(() => {
          let O = []
          for (const [N, B] of Object.entries(i.value.speed))
            B.enabled && O.push(B.title)
          for (const [N, B] of Object.entries(i.value.security))
            B.enabled && O.push(B.title)
          for (const [N, B] of Object.entries(i.value.accessibility))
            B.enabled && O.push(B.title)
          for (const [N, B] of Object.entries(i.value.designOverhaul))
            B.enabled && O.push(B.title)
          return O
        }),
        ge = (O) => {
          let N = ""
          return (
            (N += l(O)),
            O == 5
              ? (N += " bg-slate-100")
              : O == 4
                ? (N += " bg-slate-400")
                : O == 3
                  ? (N += " bg-slate-500")
                  : O == 2
                    ? (N += " bg-slate-700")
                    : O == 1 && (N += " bg-slate-800"),
            N
          )
        }
      return (O, N) => (
        L(),
        K("div", Wv, [
          f("div", qv, [
            f(
              "h2",
              {
                class: x([
                  "text-5xl text-center text-semibold",
                  o(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            f(
              "p",
              { class: x(["text-center", o(n.brightness)]) },
              [
                N[0] ||
                  (N[0] = ae(
                    " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                    -1,
                  )),
                N[1] || (N[1] = f("br", null, null, -1)),
                N[2] || (N[2] = f("br", null, null, -1)),
                N[3] ||
                  (N[3] = ae(
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
                N[4] || (N[4] = ae(" for a custom quote. ", -1)),
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
              (B, xe) => (
                L(),
                K(
                  "div",
                  {
                    key: xe,
                    class: x([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      ge(n.brightness),
                    ]),
                  },
                  [
                    f("div", Uv, [
                      f("div", Kv, [
                        f(
                          "div",
                          {
                            class: x([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              o(n.brightness),
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
                              Yv,
                            ),
                            f("h3", null, Je(B.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      f("div", Xv, [
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
                              ? (L(), K("span", Jv, "$" + Je(F(B)), 1))
                              : ke("", !0),
                            ae("$" + Je(j(B)), 1),
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
                    f("div", Zv, [
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
                                f("div", Qv, [
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
                                    eb,
                                  ),
                                  f(
                                    "p",
                                    { class: x(["", o(n.brightness)]) },
                                    [
                                      me.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (L(),
                                          K("b", tb, [
                                            f("em", null, Je(me.title), 1),
                                          ]))
                                        : (L(), K("span", nb, Je(me.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                f("div", sb, [
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
                                          K("span", rb, "$" + Je(me.price), 1))
                                        : ke("", !0),
                                      ae("$" + Je(me.price * B.discount), 1),
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
          f("div", lb, [
            f("div", ib, [
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
                    ? (L(), K("span", ob, "$" + Je(W.value), 1))
                    : ke("", !0),
                  ae("$" + Je(W.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          f("form", ab, [
            f(
              "input",
              { type: "hidden", name: "services", value: de.value },
              null,
              8,
              ub,
            ),
            f(
              "input",
              { type: "hidden", name: "total", value: W.value },
              null,
              8,
              cb,
            ),
            f("div", db, [
              f(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: x([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    r(e.brightness),
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
                    r(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            f("div", fb, [
              f(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: x([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    r(e.brightness),
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
                    r(e.brightness),
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
            { class: x(["text-center mt-4", o(n.brightness)]) },
            [
              N[5] ||
                (N[5] = ae(
                  " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
                  -1,
                )),
              N[6] || (N[6] = f("br", null, null, -1)),
              N[7] || (N[7] = f("br", null, null, -1)),
              N[8] ||
                (N[8] = ae(
                  "These are one-time services; for ongoing maintenance, please ",
                  -1,
                )),
              f(
                "a",
                { href: "/contact", class: x(["font-bold", s(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              N[9] || (N[9] = ae(" and we can get that figured out.", -1)),
              N[10] || (N[10] = f("br", null, null, -1)),
              N[11] || (N[11] = f("br", null, null, -1)),
              N[12] || (N[12] = ae("I look forward to working with you! ", -1)),
            ],
            2,
          ),
        ])
      )
    },
  },
  hb = fn(pb, [["__scopeId", "data-v-e20b9d11"]]),
  gb = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        L(), he(hb, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  mb = { class: "flex-col" },
  vb = { class: "py-5 flex-col w-full" },
  bb = { id: "cta" },
  tc = {
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
          const l = "contact"
          let o = document.getElementsByName("name")[0].value,
            i = document.getElementsByName("email")[0].value,
            a = document.getElementsByName("message")[0].value,
            c = window.location.href,
            u = new XMLHttpRequest()
          u.open("POST", "https://api.josephhansen.dev/forms/submit", !0),
            u.setRequestHeader("Content-Type", "application/json"),
            u.send(
              JSON.stringify({
                form: l,
                name: o,
                email: i,
                message: a,
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
                let g = d.getElementsByTagName("textarea")[0]
                g.style.display = "none"
                let v = document.getElementById("submitButton")
                v.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (r, l) => (
        L(),
        K("div", mb, [
          f("div", vb, [
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
          f("form", bb, [
            f(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: x(["rounded p-2 w-full", r.inputClass]),
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
                class: x(["rounded p-2 w-full mt-3", r.inputClass]),
              },
              null,
              2,
            ),
            f(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: x(["rounded p-2 w-full mt-3", r.inputClass]),
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
  xb = { class: "flex-col w-full" },
  yb = { class: "p-5 flex-col w-full" },
  wb = { class: "grid grid-cols-6" },
  Sb = { class: "col-span-2 sm:col-span-2 md:col-span-1" },
  Cb = { class: "flex gap-2 mt-4 justify-center items-center" },
  Eb = { class: "flex gap-2 mt-4 justify-center items-center" },
  Tb = ["href"],
  kb = {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "100%",
    height: "100%",
  },
  Pb = ["d"],
  Ib = {
    class: "col-span-4 sm:col-span-4 md:col-span-5 prose pl-5",
    style: { "max-width": "100vw !important" },
  },
  $b = {
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
        r = [C0, gu, x0, S0],
        l = [
          "https://www.linkedin.com/in/josephclaytonhansen/",
          "https://www.github.com/josephclaytonhansen",
          "https://blenderartists.org/u/joseph/summary",
          "https://www.instagram.com/jhansen_art/",
        ]
      return (o, i) => (
        L(),
        K("div", xb, [
          f("div", yb, [
            f("div", wb, [
              f("div", Sb, [
                i[0] ||
                  (i[0] = f(
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
                f("div", Cb, [
                  f("div", Eb, [
                    (L(),
                    K(
                      Pe,
                      null,
                      Wt(r, (a, c) =>
                        f(
                          "div",
                          { key: c, class: x(["flex-1", s(t.brightness)]) },
                          [
                            f(
                              "a",
                              { href: l[c] },
                              [
                                (L(),
                                K("svg", kb, [
                                  f("path", { d: a.path }, null, 8, Pb),
                                ])),
                              ],
                              8,
                              Tb,
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
              f("div", Ib, [
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
                    ...(i[1] ||
                      (i[1] = [
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
                U(
                  tc,
                  {
                    brightness: e.brightness,
                    style: { "margin-top": "-7rem" },
                  },
                  null,
                  8,
                  ["brightness"],
                ),
                i[2] ||
                  (i[2] = f(
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
  Mb = fn($b, [["__scopeId", "data-v-16a9d0a6"]]),
  Ab = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  Ob = { class: "py-5 flex-col w-full" },
  Lb = { class: "prose" },
  jb = ["onMouseover", "onClick"],
  Bb = { class: "image-container" },
  Rb = ["src", "alt"],
  _b = { class: "flex gap-2 items-center" },
  Nb = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  zb = ["d"],
  Db = {
    __name: "WebPortfolio",
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
        r = V([
          {
            icons: [$t, Os, w0],
            title: "BlenderNation Bazaar",
            image: li,
            link: "/web-portfolio/bazaar",
          },
          {
            icons: [$t, Os, So],
            title: "Feed Council",
            image: ii,
            link: "/web-portfolio/feed-council",
          },
          { icons: [$t, y0, Os], title: "CHAI", link: "/web-portfolio/chai" },
        ]),
        l = V([
          {
            icons: [$t, So],
            title: "Build On Your Land",
            image: oi,
            link: "/web-portfolio/build-on-your-land",
          },
          {
            icons: [$t, Os],
            title: "Stuart Pipe and Hose",
            image: ai,
            link: "/web-portfolio/stuart-pipe",
          },
          {
            icons: [$t, es],
            title: "Atlanta Floor One",
            image: ui,
            link: "/web-portfolio/atlanta-floor-one",
          },
          {
            icons: [$t, es],
            title: "Swim State Pool",
            image: ci,
            link: "/web-portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [T0, E0],
            image: di,
            link: "/web-portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [$t, es],
            image: fi,
            link: "/web-portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [$t, es],
            image: pi,
            link: "/web-portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [$t, es],
            image: hi,
            link: "/web-portfolio/aris-search",
          },
        ]),
        o = V(null)
      return (i, a) => (
        L(),
        K("div", Ab, [
          f("div", Ob, [
            f("span", Lb, [
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
              [r.value, l.value],
              (c) => (
                L(),
                K(
                  "div",
                  {
                    class: x([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": c == r.value,
                        "lg:grid-cols-3 mt-4": c == l.value,
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
                              onMouseover: (d) => (o.value = u.title),
                              onMouseleave:
                                a[0] || (a[0] = (d) => (o.value = null)),
                              onClick: (d) => i.$router.push(u.link),
                              style: dr({
                                opacity:
                                  o.value === u.title || o.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              f("div", Bb, [
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
                                  Rb,
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
                                      f("div", _b, [
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
                                                  K("svg", Nb, [
                                                    f(
                                                      "path",
                                                      { d: d.path },
                                                      null,
                                                      8,
                                                      zb,
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
                            jb,
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
  Fb = fn(Db, [["__scopeId", "data-v-4614d5aa"]]),
  Hb = {
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
  Gb = ["src"],
  Vb = { class: "text-inherit" },
  Wb = ["src"],
  qb = "https://bazaar.blendernation.com",
  Ub = "BlenderNation Bazaar",
  Kb = {
    __name: "Bazaar",
    setup(e) {
      const t = V([li, lm, im, om, am]),
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
      return (r, l) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: qb,
            title: Ub,
            brightness: r.brightness,
          },
          {
            default: oe(() => [
              lt(r.$slots, "default", {}, () => [
                l[3] ||
                  (l[3] = f(
                    "h3",
                    { class: "text-2xl font-semibold text-inherit" },
                    " The vision: a one-stop shop for Blender users ",
                    -1,
                  )),
                l[4] ||
                  (l[4] = f(
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
                    Gb,
                  ),
                  l[0] ||
                    (l[0] = f(
                      "figcaption",
                      null,
                      "Bazaar's planning board",
                      -1,
                    )),
                ]),
                f("p", Vb, [
                  l[2] ||
                    (l[2] = ae(
                      " With the above Figma document as a guide from Bart, I dove into both design and the backend details for managing the complex data the site would be handling. Bart wanted to do this through WordPress, and I was able to use my expertise to recommend AdvancedCustomFields to do a lot of the major data-wrangling. I also built the theme from scratch, to make sure it was as simplified and lightweight as possible while still providing beautiful, responsive, and functional results. ",
                      -1,
                    )),
                  f("figure", null, [
                    f(
                      "img",
                      { src: s.figma, class: "rounded-xl" },
                      null,
                      8,
                      Wb,
                    ),
                    l[1] ||
                      (l[1] = f(
                        "figcaption",
                        null,
                        "My approved design for the Bazaar",
                        -1,
                      )),
                  ]),
                ]),
                l[5] ||
                  (l[5] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Tight deadlines and high stakes ",
                    -1,
                  )),
                l[6] ||
                  (l[6] = f(
                    "p",
                    null,
                    " When Bart approached me, there was about a month until the next Blender Conference, a massive community event that he hoped to present Bazaar at. At this point, the Bazaar was just an idea- there wasn't even a logo yet. Long story short, Bazaar launched successfully with time to spare. This project shows I can work well under pressure and with tight deadlines to achieve exactly what a client needs. ",
                    -1,
                  )),
                l[7] ||
                  (l[7] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Security: keeping the Bazaar safe ",
                    -1,
                  )),
                l[8] ||
                  (l[8] = f(
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
  Yb = "https://okcsouthstake.org",
  Xb = "OKC South Stake",
  Jb = {
    __name: "OkcSouthStake",
    setup(e) {
      const t = V([
          ii,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277285248.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277310460.webp",
        ]),
        n = V([
          "OKC South Stake homepage (light)",
          "OKC South Stake congregation subpage",
          "OKC South Stake homepage (dark)",
        ])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Yb,
            title: Xb,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
                    "p",
                    { class: "text-inherit" },
                    ' To describe this project as "massive" would be an understatement. What at first glance appears to be a simple informational website is in fact a comprehensive hub of information, resources, and tools for the members of a regional church. This site is a gigantic, sprawling, and complex project with dozens of custom tools, subdomains, features, and more. ',
                    -1,
                  )),
                r[1] ||
                  (r[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Everything in a single web app ",
                    -1,
                  )),
                r[2] ||
                  (r[2] = f(
                    "p",
                    { class: "text-inherit" },
                    " I've designed, built, and developed everything on this site. And I do mean everything. This site has congregation subpages with fully functional and collaborative calendars: ",
                    -1,
                  )),
                r[3] ||
                  (r[3] = f(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277670567.webp",
                      alt: "Example of a congregation subpage calendar",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                r[4] ||
                  (r[4] = f(
                    "p",
                    { class: "text-inherit" },
                    " This web application also has a fully functional CMS and blog system, scheduling systems, complex communication tools, an internal email system, user roles and restricted access, and more. The scope of this site is frankly staggering. If you can imagine a tool an organization might need, it's somewhere on this site. And it's all built with the same care, attention to detail, and quality that I put into every project I work on. ",
                    -1,
                  )),
                r[5] ||
                  (r[5] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Built to take a beating",
                    -1,
                  )),
                r[6] ||
                  (r[6] = f(
                    "p",
                    { class: "text-inherit" },
                    " This site is built to handle a massive amount of traffic and to be as fast as possible. I've optimized it for speed. It's fully responsive, accessible, and built with the latest technologies. It's a site that's built to last, and to be a valuable resource for the members of the church it serves. ",
                    -1,
                  )),
                r[7] ||
                  (r[7] = f(
                    "p",
                    { class: "text-inherit" },
                    " Additionally, this site has advanced security guardrails, DDoS protection, bot monitoring and filtering, extremely strong database encryption, MFA/TFA protection, and other essential security features for a large organizational website. I've extensively tested the security of this site, and I'm proud to say it's rock-solid. ",
                    -1,
                  )),
                r[8] ||
                  (r[8] = f(
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
  Zb = "https://arissearch.com//",
  Qb = "Aris Search",
  e2 = {
    __name: "ArisSearch",
    setup(e) {
      const t = V([hi, fm]),
        n = V(["Aris Search homepage", "Aris Search image effects"])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: Zb,
            title: Qb,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
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
  t2 = "https://floorsfloors.com/",
  n2 = "Atlanta Floor One",
  s2 = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = V([ui, um, cm, dm]),
        n = V([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: t2,
            title: n2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
                    "p",
                    { class: "text-inherit" },
                    " Atlanta Floor One needed a new website to replace their old, non-functional one. I built them a fast, clean, responsive new site using WordPress. They was extremely happy with the results. ",
                    -1,
                  )),
                r[1] ||
                  (r[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Clean and professional with an unusual color palette ",
                    -1,
                  )),
                r[2] ||
                  (r[2] = f(
                    "p",
                    { class: "text-inherit" },
                    " This site was challenging from a design perspective. Atlanta Floor One's logo colors (light green and very dark brown) look great at a small scale, but initial drafts of their site proved overwhelming. Eventually, I added a lighter brown that was more neutral and used the green as an accent color. I also relied heavily on whitespace, giving the colors room to breathe. The result is a professional and unique site. ",
                    -1,
                  )),
                r[3] ||
                  (r[3] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Parallax architectural sketch backgrounds ",
                    -1,
                  )),
                r[4] ||
                  (r[4] = f(
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
  r2 = "https://www.buildonyourlandllc.com/",
  l2 = "Build on Your Land",
  i2 = {
    __name: "BuildOnYourLand",
    setup(e) {
      const t = V([
          oi,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275933220.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275982586.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275995615.webp",
        ]),
        n = V([])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: r2,
            title: l2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
                    "p",
                    { class: "text-inherit" },
                    " Build On Your Land is one of my favorite sites I've ever built. From dynamic showroom hours developed in JavaScript, to parallax home design backgrounds, the site is full of my best work. The client needed a beautiful, responsive site, and they loved what I built for them. ",
                    -1,
                  )),
                r[1] ||
                  (r[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Dynamic showroom hours",
                    -1,
                  )),
                r[2] ||
                  (r[2] = f(
                    "p",
                    { class: "text-inherit" },
                    ' Build on Your Land wanted customers to be able to tell at a glance if the showroom was currently open. The JavaScript/PHP solution I built is simple- the hours show "Open" or "Closed" based on the current time and day- but extremely effective. They were thrilled with the result. ',
                    -1,
                  )),
                r[3] ||
                  (r[3] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Design elements",
                    -1,
                  )),
                r[4] ||
                  (r[4] = f(
                    "p",
                    { class: "text-inherit" },
                    " This site is full of design elements that make it stand out. The parallax home design sketch backgrounds add a unique touch and make the site memorable. ",
                    -1,
                  )),
                r[5] ||
                  (r[5] = f(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
                      alt: "Parallax home design sketch backgrounds",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                r[6] ||
                  (r[6] = f(
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
  a2 = "Stuart Hose and Pipe",
  u2 = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = V([pi]),
        n = V(["Stehl Family Dental homepage"])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: o2,
            title: a2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
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
  c2 = "https://tub-boys.com/",
  d2 = "Tub Boys",
  f2 = {
    __name: "TubBoys",
    setup(e) {
      const t = V([
          fi,
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274374594.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274402279.webp",
        ]),
        n = V(["Tub Boys homepage"])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: c2,
            title: d2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
                    "p",
                    { class: "text-inherit" },
                    " Tub Boys didn't have a website, and they were hoping to expand their business through a web presence. I built them a site that exceeded their expectations and helped them grow their business. ",
                    -1,
                  )),
                r[1] ||
                  (r[1] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " Using design to present minimal text in a compelling way ",
                    -1,
                  )),
                r[2] ||
                  (r[2] = f(
                    "p",
                    { class: "text-inherit" },
                    ' They had very little copy, so it was my task to make their site engaging and feel full with what I had to work with. I took the opporunity to use large, engaging, typography as well as swooshing lines that invoke a sense of movement. The result feels professional, while still invoking the "fun" energy the client requested. ',
                    -1,
                  )),
                r[3] ||
                  (r[3] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    "Image comparison sliders",
                    -1,
                  )),
                r[4] ||
                  (r[4] = f(
                    "img",
                    {
                      src: "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
                      class: "rounded",
                    },
                    null,
                    -1,
                  )),
                r[5] ||
                  (r[5] = f(
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
  p2 = "https://stuarthose.com/",
  h2 = "Stuart Hose and Pipe",
  g2 = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = V([
          ai,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275652278.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275668557.webp",
        ]),
        n = V(["Stuart Hose and Pipe homepage"])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: p2,
            title: h2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
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
  m2 = "https://swimstatepoolservice.com/",
  v2 = "Swim State Pool",
  b2 = {
    __name: "SwimStatePool",
    setup(e) {
      const t = V([ci]),
        n = V(["Swim State Pool Services homepage"])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: m2,
            title: v2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
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
  y2 = "josephhansen.dev",
  w2 = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = V([di]),
        n = V(["This site's homepage"])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: x2,
            title: y2,
            brightness: s.brightness,
          },
          {
            default: oe(() => [
              lt(s.$slots, "default", {}, () => [
                r[0] ||
                  (r[0] = f(
                    "h3",
                    { class: "text-2xl font-bold text-inherit" },
                    " A lightning-fast, responsive, accessible site ",
                    -1,
                  )),
                r[1] ||
                  (r[1] = f(
                    "p",
                    { class: "text-inherit" },
                    " I built this site with care and pride- it's showcasing my abilities, after all. To that end, I've optimized it for speed to the max. This site scores 99/100 on Google's Page Speed test, a score so rare it's essentially mythical. This site is also highly responsive and features five distinct color themes for perfect user satisfication (check out the header to change them!). ",
                    -1,
                  )),
                r[2] ||
                  (r[2] = f(
                    "p",
                    { class: "text-inherit" },
                    " I've built, designed, and developed every part of this site. I use Vue as the JavaScript framework, with Vite, Node.js, Express, MongoDB, and other technologies to make it not just work, but excel. All the images are served in blazing-fast, modern, formats like WebP, and the site is fully accessible, with ARIA roles and other accessibility features. ",
                    -1,
                  )),
                r[3] ||
                  (r[3] = f(
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
  S2 = "https://www.chai.org/",
  C2 = "Coalition Healthcare Artificial Intelligence",
  E2 = {
    __name: "Chai",
    setup(e) {
      const t = V([pm]),
        n = V([])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: S2,
            title: C2,
            brightness: s.brightness,
          },
          { default: oe(() => [lt(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  T2 = "https://www.feedcouncil.com/",
  k2 = "FEED Council",
  P2 = {
    __name: "FeedCouncil",
    setup(e) {
      const t = V([hm]),
        n = V([])
      return (s, r) => (
        L(),
        he(
          pt,
          {
            images: t.value,
            captions: n.value,
            link: T2,
            title: k2,
            brightness: s.brightness,
          },
          { default: oe(() => [lt(s.$slots, "default")]), _: 3 },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  I2 = {
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
  $2 = {
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
  M2 = {
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
  A2 = {
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
  O2 = {
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
  L2 = {
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
  j2 = {
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
  B2 = {
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
  R2 = {
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
  _2 = {
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
  N2 = {
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
  z2 = {
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
  D2 = {
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
  F2 = {
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
  H2 = {
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
  G2 = {
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
  V2 = {
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
  W2 = {
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
  q2 = {
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
  U2 = {
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
  K2 = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  Y2 = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  X2 = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = V(3),
        n = V(!1),
        s = e,
        r = (h) => {
          ;(t.value = Number(h)),
            window.localStorage.setItem("brightness", t.value)
        },
        l = {
          "okc-south-stake": Jb,
          "aris-search": e2,
          "atlanta-floor-one": s2,
          "build-on-your-land": i2,
          "stehl-family-dental": u2,
          "tub-boys": f2,
          "stuart-pipe": g2,
          "swim-state-pool": b2,
          "josephhansen-dev": w2,
          bazaar: Kb,
          chai: E2,
          "feed-council": P2,
        },
        o = {
          "helpful-editor-scripts": I2,
          "unity-projects": $2,
          "shader-graph": M2,
        },
        i = {
          figref: A2,
          "wordpress-themes": O2,
          "wordpress-plugins": L2,
          "discourse-image-comparison": j2,
          "garden-tracker": B2,
          "javascript-snippets": R2,
          "blender-arduino-controller": _2,
          "arduino-leds": N2,
          "instagram-scraper": z2,
        },
        a = {
          "art-portfolio": D2,
          fruitbat: F2,
          addons: H2,
          "shading-rig": G2,
        },
        c = { devlog: V2, blog: W2, presentations: q2 },
        u = { resume: U2 },
        d = se(() => {
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
        let h = window.localStorage
        if (
          (h.getItem("brightness")
            ? (t.value = Number(h.getItem("brightness")))
            : h.setItem("brightness", t.value),
          s.component == "pricing")
        )
          (p.title = "josephhansen.dev | web developer/designer | pricing"),
            (p.meta[1].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (p.meta[6].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (p.meta[4].content = "https://josephhansen.dev/pricing"),
            (p.meta[9].content = "https://josephhansen.dev/pricing")
        else if (s.component == "contact")
          (p.title = "josephhansen.dev | web developer/designer | contact"),
            (p.meta[1].content =
              "josephhansen.dev | web developer/designer | contact"),
            (p.meta[6].content =
              "josephhansen.dev | web developer/designer | contact"),
            (p.meta[4].content = "https://josephhansen.dev/contact"),
            (p.meta[9].content = "https://josephhansen.dev/contact")
        else if (s.component == "about")
          (p.title = "josephhansen.dev | web developer/designer | about"),
            (p.meta[1].content =
              "josephhansen.dev | web developer/designer | about"),
            (p.meta[6].content =
              "josephhansen.dev | web developer/designer | about"),
            (p.meta[4].content = "https://josephhansen.dev/about"),
            (p.meta[9].content = "https://josephhansen.dev/about")
        else if (s.component == "web-portfolio")
          (p.title =
            "josephhansen.dev | web developer/designer | web portfolio"),
            (p.meta[1].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (p.meta[6].content =
              "josephhansen.dev | web developer/designer | web portfolio"),
            (p.meta[4].content = "https://josephhansen.dev/web-portfolio"),
            (p.meta[9].content = "https://josephhansen.dev/web-portfolio")
        else if (s.component == "web-services")
          (p.title = "josephhansen.dev | web developer/designer | services"),
            (p.meta[1].content =
              "josephhansen.dev | web developer/designer | services"),
            (p.meta[6].content =
              "josephhansen.dev | web developer/designer | services"),
            (p.meta[4].content = "https://josephhansen.dev/web-services"),
            (p.meta[9].content = "https://josephhansen.dev/web-services")
        else if (s.component in l) {
          let g = s.component.replace(/-/g, " ")
          ;(p.title = `josephhansen.dev | web developer/designer | ${g}`),
            (p.meta[1].content = `josephhansen.dev | web developer/designer | ${g}`),
            (p.meta[6].content = `josephhansen.dev | web developer/designer | ${g}`),
            (p.meta[4].content = `https://josephhansen.dev/web-portfolio/${s.component}`),
            (p.meta[9].content = `https://josephhansen.dev/web-portfolio/${s.component}`)
        } else if (s.component in o) {
          let g = s.component.replace(/-/g, " ")
          ;(p.title = `josephhansen.dev | unity developer | ${g}`),
            (p.meta[1].content = `josephhansen.dev | unity developer | ${g}`),
            (p.meta[6].content = `josephhansen.dev | unity developer | ${g}`),
            (p.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (p.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in i) {
          let g = s.component.replace(/-/g, " ")
          ;(p.title = `josephhansen.dev | programmer | ${g}`),
            (p.meta[1].content = `josephhansen.dev | programmer | ${g}`),
            (p.meta[6].content = `josephhansen.dev | programmer | ${g}`),
            (p.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (p.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in a) {
          let g = s.component.replace(/-/g, " ")
          ;(p.title = `josephhansen.dev | blender artist | ${g}`),
            (p.meta[1].content = `josephhansen.dev | blender artist | ${g}`),
            (p.meta[6].content = `josephhansen.dev | blender artist | ${g}`),
            (p.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (p.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in c) {
          let g = s.component.replace(/-/g, " ")
          ;(p.title = `josephhansen.dev | ${g}`),
            (p.meta[1].content = `josephhansen.dev | ${g}`),
            (p.meta[6].content = `josephhansen.dev | ${g}`),
            (p.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (p.meta[9].content = `https://josephhansen.dev/${s.component}`)
        } else if (s.component in u) {
          let g = s.component.replace(/-/g, " ")
          ;(p.title = `josephhansen.dev | ${g}`),
            (p.meta[1].content = `josephhansen.dev | ${g}`),
            (p.meta[6].content = `josephhansen.dev | ${g}`),
            (p.meta[4].content = `https://josephhansen.dev/${s.component}`),
            (p.meta[9].content = `https://josephhansen.dev/${s.component}`)
        }
      })
      const p = Ss({
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
          ;(document.title = p.title),
            p.meta.forEach((h) => {
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
          L(),
          K(
            Pe,
            null,
            [
              f(
                "main",
                {
                  class: x([["w-dvw", d.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  U(ih, { "onUpdate:brightness": r }),
                  f("div", K2, [
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
                            U(gb, { brightness: t.value }, null, 8, [
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
                            U(tc, { brightness: t.value }, null, 8, [
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
                            U(Fb, { brightness: t.value }, null, 8, [
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
                            U(Mb, { brightness: t.value }, null, 8, [
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
                            he(
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
                    e.component in o
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
                            he(
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
                    e.component in i
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
                            he(
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
                            he(
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
                    e.component in c
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
                            he(
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
                    e.component in u
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
                            he(
                              kn(u[e.component]),
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
                            U(Hb, { brightness: t.value }, null, 8, [
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
                            U(hh, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : ke("", !0),
                  ]),
                  f("div", Y2, [
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
                            U(Hv, { brightness: t.value }, null, 8, [
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
              n.value
                ? (L(),
                  he(Vv, { key: 0, brightness: t.value }, null, 8, [
                    "brightness",
                  ]))
                : ke("", !0),
            ],
            64,
          )
        )
      )
    },
  },
  J2 = fn(X2, [["__scopeId", "data-v-5dc26e46"]]),
  xi = [
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
xi.map((e) => e.path)
xi.forEach((e) => {
  e.component = J2
})
const Z2 = s0({ history: Op(), routes: xi }),
  nc = xf(Ef)
nc.use(Z2)
nc.mount("#app")
