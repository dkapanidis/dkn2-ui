import { jsx as m, jsxs as j, Fragment as pt } from "react/jsx-runtime";
import * as f from "react";
import F, { useLayoutEffect as Tu, useState as bv, forwardRef as Yi, createElement as cr, createContext as On, useRef as Jt, useEffect as Xi, useContext as Oe, useId as xv, useCallback as Mu, useMemo as Nr, Fragment as Au, useInsertionEffect as _u, Component as Sv } from "react";
import * as kr from "react-dom";
import Du, { createPortal as vl } from "react-dom";
function yl(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function De(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = yl(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : yl(e[r], null);
        }
      };
  };
}
function ce(...e) {
  return f.useCallback(De(...e), e);
}
var Cv = Symbol.for("react.lazy"), ur = f[" use ".trim().toString()];
function Rv(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Iu(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Cv && "_payload" in e && Rv(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  const t = /* @__PURE__ */ Ev(e), n = f.forwardRef((o, r) => {
    let { children: s, ...i } = o;
    Iu(s) && typeof ur == "function" && (s = ur(s._payload));
    const a = f.Children.toArray(s), l = a.find(Tv);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Nu = /* @__PURE__ */ Or("Slot");
// @__NO_SIDE_EFFECTS__
function Ev(e) {
  const t = f.forwardRef((n, o) => {
    let { children: r, ...s } = n;
    if (Iu(r) && typeof ur == "function" && (r = ur(r._payload)), f.isValidElement(r)) {
      const i = Av(r), a = Mv(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Pv = Symbol("radix.slottable");
function Tv(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Pv;
}
function Mv(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Av(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ku(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = ku(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ou() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = ku(e)) && (o && (o += " "), o += t);
  return o;
}
const wl = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, bl = Ou, Vu = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return bl(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: s } = t, i = Object.keys(r).map((c) => {
    const d = n == null ? void 0 : n[c], u = s == null ? void 0 : s[c];
    if (d === null) return null;
    const p = wl(d) || wl(u);
    return r[c][p];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [u, p] = d;
    return p === void 0 || (c[u] = p), c;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, d) => {
    let { class: u, className: p, ...h } = d;
    return Object.entries(h).every((g) => {
      let [v, y] = g;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...a
      }[v]) : {
        ...s,
        ...a
      }[v] === y;
    }) ? [
      ...c,
      u,
      p
    ] : c;
  }, []);
  return bl(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, _v = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, Dv = (e, t) => ({
  classGroupId: e,
  validator: t
}), Fu = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), dr = "-", xl = [], Iv = "arbitrary..", Nv = (e) => {
  const t = Ov(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return kv(i);
      const a = i.split(dr), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return Lu(a, l, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const l = o[i], c = n[i];
        return l ? c ? _v(c, l) : l : c || xl;
      }
      return n[i] || xl;
    }
  };
}, Lu = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const r = e[t], s = n.nextPart.get(r);
  if (s) {
    const c = Lu(e, t + 1, s);
    if (c) return c;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(dr) : e.slice(t).join(dr), l = i.length;
  for (let c = 0; c < l; c++) {
    const d = i[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, kv = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? Iv + o : void 0;
})(), Ov = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Vv(n, t);
}, Vv = (e, t) => {
  const n = Fu();
  for (const o in e) {
    const r = e[o];
    qi(r, n, o, t);
  }
  return n;
}, qi = (e, t, n, o) => {
  const r = e.length;
  for (let s = 0; s < r; s++) {
    const i = e[s];
    Fv(i, t, n, o);
  }
}, Fv = (e, t, n, o) => {
  if (typeof e == "string") {
    Lv(e, t, n);
    return;
  }
  if (typeof e == "function") {
    $v(e, t, n, o);
    return;
  }
  Bv(e, t, n, o);
}, Lv = (e, t, n) => {
  const o = e === "" ? t : $u(t, e);
  o.classGroupId = n;
}, $v = (e, t, n, o) => {
  if (zv(e)) {
    qi(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Dv(n, e));
}, Bv = (e, t, n, o) => {
  const r = Object.entries(e), s = r.length;
  for (let i = 0; i < s; i++) {
    const [a, l] = r[i];
    qi(l, $u(t, a), n, o);
  }
}, $u = (e, t) => {
  let n = e;
  const o = t.split(dr), r = o.length;
  for (let s = 0; s < r; s++) {
    const i = o[s];
    let a = n.nextPart.get(i);
    a || (a = Fu(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, zv = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Hv = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const r = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = o[s]) !== void 0)
        return r(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : r(s, i);
    }
  };
}, Qs = "!", Sl = ":", jv = [], Cl = (e, t, n, o, r) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: r
}), Wv = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (r) => {
    const s = [];
    let i = 0, a = 0, l = 0, c;
    const d = r.length;
    for (let v = 0; v < d; v++) {
      const y = r[v];
      if (i === 0 && a === 0) {
        if (y === Sl) {
          s.push(r.slice(l, v)), l = v + 1;
          continue;
        }
        if (y === "/") {
          c = v;
          continue;
        }
      }
      y === "[" ? i++ : y === "]" ? i-- : y === "(" ? a++ : y === ")" && a--;
    }
    const u = s.length === 0 ? r : r.slice(l);
    let p = u, h = !1;
    u.endsWith(Qs) ? (p = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(Qs) && (p = u.slice(1), h = !0)
    );
    const g = c && c > l ? c - l : void 0;
    return Cl(s, h, p, g);
  };
  if (t) {
    const r = t + Sl, s = o;
    o = (i) => i.startsWith(r) ? s(i.slice(r.length)) : Cl(jv, !1, i, void 0, !0);
  }
  if (n) {
    const r = o;
    o = (s) => n({
      className: s,
      parseClassName: r
    });
  }
  return o;
}, Gv = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, o) => {
    t.set(n, 1e6 + o);
  }), (n) => {
    const o = [];
    let r = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], a = i[0] === "[", l = t.has(i);
      a || l ? (r.length > 0 && (r.sort(), o.push(...r), r = []), o.push(i)) : r.push(i);
    }
    return r.length > 0 && (r.sort(), o.push(...r)), o;
  };
}, Uv = (e) => ({
  cache: Hv(e.cacheSize),
  parseClassName: Wv(e),
  sortModifiers: Gv(e),
  ...Nv(e)
}), Kv = /\s+/, Yv = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Kv);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: u,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: v
    } = n(d);
    if (u) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!v, w = o(y ? g.substring(0, v) : g);
    if (!w) {
      if (!y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = o(g), !w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const b = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), x = h ? b + Qs : b, S = x + w;
    if (i.indexOf(S) > -1)
      continue;
    i.push(S);
    const R = r(w, y);
    for (let P = 0; P < R.length; ++P) {
      const T = R[P];
      i.push(x + T);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Xv = (...e) => {
  let t = 0, n, o, r = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = Bu(n)) && (r && (r += " "), r += o);
  return r;
}, Bu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Bu(e[o])) && (n && (n += " "), n += t);
  return n;
}, qv = (e, ...t) => {
  let n, o, r, s;
  const i = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = Uv(c), o = n.cache.get, r = n.cache.set, s = a, a(l);
  }, a = (l) => {
    const c = o(l);
    if (c)
      return c;
    const d = Yv(l, n);
    return r(l, d), d;
  };
  return s = i, (...l) => s(Xv(...l));
}, Zv = [], ge = (e) => {
  const t = (n) => n[e] || Zv;
  return t.isThemeGetter = !0, t;
}, zu = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Hu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Qv = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Jv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ey = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ty = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ny = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, oy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pt = (e) => Qv.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), Tt = (e) => !!e && Number.isInteger(Number(e)), ps = (e) => e.endsWith("%") && le(e.slice(0, -1)), vt = (e) => Jv.test(e), ju = () => !0, ry = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ey.test(e) && !ty.test(e)
), Zi = () => !1, sy = (e) => ny.test(e), iy = (e) => oy.test(e), ay = (e) => !q(e) && !Q(e), ly = (e) => $t(e, Uu, Zi), q = (e) => zu.test(e), Xt = (e) => $t(e, Ku, ry), Rl = (e) => $t(e, gy, le), cy = (e) => $t(e, Xu, ju), uy = (e) => $t(e, Yu, Zi), El = (e) => $t(e, Wu, Zi), dy = (e) => $t(e, Gu, iy), Oo = (e) => $t(e, qu, sy), Q = (e) => Hu.test(e), Gn = (e) => un(e, Ku), fy = (e) => un(e, Yu), Pl = (e) => un(e, Wu), py = (e) => un(e, Uu), hy = (e) => un(e, Gu), Vo = (e) => un(e, qu, !0), my = (e) => un(e, Xu, !0), $t = (e, t, n) => {
  const o = zu.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, un = (e, t, n = !1) => {
  const o = Hu.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, Wu = (e) => e === "position" || e === "percentage", Gu = (e) => e === "image" || e === "url", Uu = (e) => e === "length" || e === "size" || e === "bg-size", Ku = (e) => e === "length", gy = (e) => e === "number", Yu = (e) => e === "family-name", Xu = (e) => e === "number" || e === "weight", qu = (e) => e === "shadow", vy = () => {
  const e = ge("color"), t = ge("font"), n = ge("text"), o = ge("font-weight"), r = ge("tracking"), s = ge("leading"), i = ge("breakpoint"), a = ge("container"), l = ge("spacing"), c = ge("radius"), d = ge("shadow"), u = ge("inset-shadow"), p = ge("text-shadow"), h = ge("drop-shadow"), g = ge("blur"), v = ge("perspective"), y = ge("aspect"), w = ge("ease"), b = ge("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], R = () => [...S(), Q, q], P = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], E = () => [Q, q, l], N = () => [Pt, "full", "auto", ...E()], D = () => [Tt, "none", "subgrid", Q, q], H = () => ["auto", {
    span: ["full", Tt, Q, q]
  }, Tt, Q, q], B = () => [Tt, "auto", Q, q], Y = () => ["auto", "min", "max", "fr", Q, q], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...E()], X = () => [Pt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], L = () => [Pt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], V = () => [Pt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], k = () => [e, Q, q], se = () => [...S(), Pl, El, {
    position: [Q, q]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], C = () => ["auto", "cover", "contain", py, ly, {
    size: [Q, q]
  }], M = () => [ps, Gn, Xt], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    Q,
    q
  ], z = () => ["", le, Gn, Xt], O = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [le, ps, Pl, El], oe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    Q,
    q
  ], ne = () => ["none", le, Q, q], ae = () => ["none", le, Q, q], he = () => [le, Q, q], me = () => [Pt, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [ju],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [ay],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", le],
      text: [vt],
      "text-shadow": [vt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Pt, q, Q, y]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [le, q, Q, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: R()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: N()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": N(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: N()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": N(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: N()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": N()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Tt, "auto", Q, q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Pt, "full", "auto", a, ...E()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [le, Pt, "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", le, Q, q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", le, Q, q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Tt, "first", "last", "none", Q, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: H()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: H()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...K(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...J(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...J()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": K()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...J(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...J()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: E()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: I()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: I()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": E()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: X()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...L()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...L()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...L()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...V()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...V()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...V()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Gn, Xt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, my, cy]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ps, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fy, uy, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [q]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, Q, q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [le, "none", Q, Rl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q, q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Q, q]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...O(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [le, "from-font", "auto", Q, Xt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [le, "auto", Q, q]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Q, q]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: se()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: _()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: C()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Tt, Q, q],
          radial: ["", Q, q],
          conic: [Tt, Q, q]
        }, hy, dy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...O(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...O(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: k()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": k()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...O(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, Q, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", le, Gn, Xt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: k()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Vo,
          Oo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Vo, Oo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: k()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [le, Xt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": k()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": k()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Vo, Oo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [le, Q, q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...W(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [Q, q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": k()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: se()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: _()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: C()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Q, q]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Q,
          q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: oe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [le, Q, q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [le, Q, q]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          Vo,
          Oo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": k()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", le, Q, q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [le, Q, q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", le, Q, q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le, Q, q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", le, Q, q]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Q,
          q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": oe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [le, Q, q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [le, Q, q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", le, Q, q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [le, Q, q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", le, Q, q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [le, Q, q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le, Q, q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", le, Q, q]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, q]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [le, "initial", Q, q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, Q, q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [le, Q, q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, Q, q]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, Q, q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Q, q, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: me()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": me()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": me()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": me()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: k()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: k()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, q]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": E()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": E()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Q, q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...k()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, Gn, Xt, Rl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...k()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, yy = /* @__PURE__ */ qv(vy);
function U(...e) {
  return yy(Ou(e));
}
const wy = Vu(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Tn = f.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, s) => /* @__PURE__ */ m(
    o ? Nu : "button",
    {
      className: U(wy({ variant: t, size: n, className: e })),
      ref: s,
      ...r
    }
  )
);
Tn.displayName = "Button";
const by = Vu(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function xy({ className: e, variant: t, asChild: n = !1, ...o }) {
  return /* @__PURE__ */ m(n ? Nu : "span", { className: U(by({ variant: t }), e), ...o });
}
const Vr = f.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ m(
    "input",
    {
      type: t,
      className: U(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ref: o,
      ...n
    }
  )
);
Vr.displayName = "Input";
var Sy = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Cy = Sy.reduce((e, t) => {
  const n = /* @__PURE__ */ Or(`Primitive.${t}`), o = f.forwardRef((r, s) => {
    const { asChild: i, ...a } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Ry = "Label", Zu = f.forwardRef((e, t) => /* @__PURE__ */ m(
  Cy.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Zu.displayName = Ry;
var Qu = Zu;
const Ey = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Qu,
  {
    ref: n,
    className: U(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...t
  }
));
Ey.displayName = Qu.displayName;
function Js(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function Py(e, t) {
  const n = f.createContext(t), o = (s) => {
    const { children: i, ...a } = s, l = f.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ m(n.Provider, { value: l, children: i });
  };
  o.displayName = e + "Provider";
  function r(s) {
    const i = f.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function rt(e, t = []) {
  let n = [];
  function o(s, i) {
    const a = f.createContext(i), l = n.length;
    n = [...n, i];
    const c = (u) => {
      var w;
      const { scope: p, children: h, ...g } = u, v = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || a, y = f.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ m(v.Provider, { value: y, children: h });
    };
    c.displayName = s + "Provider";
    function d(u, p) {
      var v;
      const h = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || a, g = f.useContext(h);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const r = () => {
    const s = n.map((i) => f.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return r.scopeName = e, [o, Ty(r, ...t)];
}
function Ty(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const i = o.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(s)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Tl(e) {
  const t = /* @__PURE__ */ My(e), n = f.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = f.Children.toArray(s), l = a.find(_y);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const i = Iy(r), a = Dy(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ay = Symbol("radix.slottable");
function _y(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ay;
}
function Dy(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Iy(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Qi(e) {
  const t = e + "CollectionProvider", [n, o] = rt(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: y, children: w } = v, b = F.useRef(null), x = F.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(r, { scope: y, itemMap: x, collectionRef: b, children: w });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Tl(a), c = F.forwardRef(
    (v, y) => {
      const { scope: w, children: b } = v, x = s(a, w), S = ce(y, x.collectionRef);
      return /* @__PURE__ */ m(l, { ref: S, children: b });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", p = /* @__PURE__ */ Tl(d), h = F.forwardRef(
    (v, y) => {
      const { scope: w, children: b, ...x } = v, S = F.useRef(null), R = ce(y, S), P = s(d, w);
      return F.useEffect(() => (P.itemMap.set(S, { ref: S, ...x }), () => void P.itemMap.delete(S))), /* @__PURE__ */ m(p, { [u]: "", ref: R, children: b });
    }
  );
  h.displayName = d;
  function g(v) {
    const y = s(e + "CollectionConsumer", v);
    return F.useCallback(() => {
      const b = y.collectionRef.current;
      if (!b) return [];
      const x = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (P, T) => x.indexOf(P.ref.current) - x.indexOf(T.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: h },
    g,
    o
  ];
}
var Ny = f.createContext(void 0);
function Fr(e) {
  const t = f.useContext(Ny);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function ky(e) {
  const t = /* @__PURE__ */ Oy(e), n = f.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = f.Children.toArray(s), l = a.find(Fy);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Oy(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const i = $y(r), a = Ly(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Vy = Symbol("radix.slottable");
function Fy(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vy;
}
function Ly(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function $y(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var By = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], re = By.reduce((e, t) => {
  const n = /* @__PURE__ */ ky(`Primitive.${t}`), o = f.forwardRef((r, s) => {
    const { asChild: i, ...a } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Ju(e, t) {
  e && kr.flushSync(() => e.dispatchEvent(t));
}
function be(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function zy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = be(e);
  f.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Hy = "DismissableLayer", ei = "dismissableLayer.update", jy = "dismissableLayer.pointerDownOutside", Wy = "dismissableLayer.focusOutside", Ml, ed = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Vn = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = f.useContext(ed), [d, u] = f.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = f.useState({}), g = ce(t, (T) => u(T)), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(y), b = d ? v.indexOf(d) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= w, R = Ky((T) => {
      const E = T.target, N = [...c.branches].some((D) => D.contains(E));
      !S || N || (r == null || r(T), i == null || i(T), T.defaultPrevented || a == null || a());
    }, p), P = Yy((T) => {
      const E = T.target;
      [...c.branches].some((D) => D.contains(E)) || (s == null || s(T), i == null || i(T), T.defaultPrevented || a == null || a());
    }, p);
    return zy((T) => {
      b === c.layers.size - 1 && (o == null || o(T), !T.defaultPrevented && a && (T.preventDefault(), a()));
    }, p), f.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ml = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Al(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ml);
        };
    }, [d, p, n, c]), f.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Al());
    }, [d, c]), f.useEffect(() => {
      const T = () => h({});
      return document.addEventListener(ei, T), () => document.removeEventListener(ei, T);
    }, []), /* @__PURE__ */ m(
      re.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: G(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Vn.displayName = Hy;
var Gy = "DismissableLayerBranch", Uy = f.forwardRef((e, t) => {
  const n = f.useContext(ed), o = f.useRef(null), r = ce(t, o);
  return f.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ m(re.div, { ...e, ref: r });
});
Uy.displayName = Gy;
function Ky(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = be(e), o = f.useRef(!1), r = f.useRef(() => {
  });
  return f.useEffect(() => {
    const s = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          td(
            jy,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Yy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = be(e), o = f.useRef(!1);
  return f.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && td(Wy, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Al() {
  const e = new CustomEvent(ei);
  document.dispatchEvent(e);
}
function td(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Ju(r, s) : r.dispatchEvent(s);
}
var hs = 0;
function Lr() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? _l()), document.body.insertAdjacentElement("beforeend", e[1] ?? _l()), hs++, () => {
      hs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), hs--;
    };
  }, []);
}
function _l() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ms = "focusScope.autoFocusOnMount", gs = "focusScope.autoFocusOnUnmount", Dl = { bubbles: !1, cancelable: !0 }, Xy = "FocusScope", mo = f.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = f.useState(null), c = be(r), d = be(s), u = f.useRef(null), p = ce(t, (v) => l(v)), h = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (o) {
      let v = function(x) {
        if (h.paused || !a) return;
        const S = x.target;
        a.contains(S) ? u.current = S : Mt(u.current, { select: !0 });
      }, y = function(x) {
        if (h.paused || !a) return;
        const S = x.relatedTarget;
        S !== null && (a.contains(S) || Mt(u.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const R of x)
            R.removedNodes.length > 0 && Mt(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [o, a, h.paused]), f.useEffect(() => {
    if (a) {
      Nl.add(h);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const w = new CustomEvent(ms, Dl);
        a.addEventListener(ms, c), a.dispatchEvent(w), w.defaultPrevented || (qy(tw(nd(a)), { select: !0 }), document.activeElement === v && Mt(a));
      }
      return () => {
        a.removeEventListener(ms, c), setTimeout(() => {
          const w = new CustomEvent(gs, Dl);
          a.addEventListener(gs, d), a.dispatchEvent(w), w.defaultPrevented || Mt(v ?? document.body, { select: !0 }), a.removeEventListener(gs, d), Nl.remove(h);
        }, 0);
      };
    }
  }, [a, c, d, h]);
  const g = f.useCallback(
    (v) => {
      if (!n && !o || h.paused) return;
      const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (y && w) {
        const b = v.currentTarget, [x, S] = Zy(b);
        x && S ? !v.shiftKey && w === S ? (v.preventDefault(), n && Mt(x, { select: !0 })) : v.shiftKey && w === x && (v.preventDefault(), n && Mt(S, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, o, h.paused]
  );
  return /* @__PURE__ */ m(re.div, { tabIndex: -1, ...i, ref: p, onKeyDown: g });
});
mo.displayName = Xy;
function qy(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Mt(o, { select: t }), document.activeElement !== n) return;
}
function Zy(e) {
  const t = nd(e), n = Il(t, e), o = Il(t.reverse(), e);
  return [n, o];
}
function nd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Il(e, t) {
  for (const n of e)
    if (!Qy(n, { upTo: t })) return n;
}
function Qy(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Jy(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Jy(e) && t && e.select();
  }
}
var Nl = ew();
function ew() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = kl(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = kl(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function kl(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function tw(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Re = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, nw = f[" useId ".trim().toString()] || (() => {
}), ow = 0;
function ye(e) {
  const [t, n] = f.useState(nw());
  return Re(() => {
    n((o) => o ?? String(ow++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const rw = ["top", "right", "bottom", "left"], Nt = Math.min, Be = Math.max, fr = Math.round, Fo = Math.floor, dt = (e) => ({
  x: e,
  y: e
}), sw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ti(e, t, n) {
  return Be(e, Nt(t, n));
}
function wt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function Fn(e) {
  return e.split("-")[1];
}
function Ji(e) {
  return e === "x" ? "y" : "x";
}
function ea(e) {
  return e === "y" ? "height" : "width";
}
function ut(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ta(e) {
  return Ji(ut(e));
}
function iw(e, t, n) {
  n === void 0 && (n = !1);
  const o = Fn(e), r = ta(e), s = ea(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = pr(i)), [i, pr(i)];
}
function aw(e) {
  const t = pr(e);
  return [ni(e), t, ni(t)];
}
function ni(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ol = ["left", "right"], Vl = ["right", "left"], lw = ["top", "bottom"], cw = ["bottom", "top"];
function uw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Vl : Ol : t ? Ol : Vl;
    case "left":
    case "right":
      return t ? lw : cw;
    default:
      return [];
  }
}
function dw(e, t, n, o) {
  const r = Fn(e);
  let s = uw(bt(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(ni)))), s;
}
function pr(e) {
  const t = bt(e);
  return sw[t] + e.slice(t.length);
}
function fw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function od(e) {
  return typeof e != "number" ? fw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function hr(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Fl(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = ut(t), i = ta(t), a = ea(i), l = bt(t), c = s === "y", d = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, p = o[a] / 2 - r[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      h = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      h = {
        x: o.x,
        y: o.y
      };
  }
  switch (Fn(t)) {
    case "start":
      h[i] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
async function pw(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = wt(t, e), g = od(h), y = a[p ? u === "floating" ? "reference" : "floating" : u], w = hr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = u === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = hr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - R.top + g.top) / S.y,
    bottom: (R.bottom - w.bottom + g.bottom) / S.y,
    left: (w.left - R.left + g.left) / S.x,
    right: (R.right - w.right + g.right) / S.x
  };
}
const hw = 50, mw = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: pw
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: u
  } = Fl(c, o, l), p = o, h = 0;
  const g = {};
  for (let v = 0; v < s.length; v++) {
    const y = s[v];
    if (!y)
      continue;
    const {
      name: w,
      fn: b
    } = y, {
      x,
      y: S,
      data: R,
      reset: P
    } = await b({
      x: d,
      y: u,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: g,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, u = S ?? u, g[w] = {
      ...g[w],
      ...R
    }, P && h < hw && (h++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (c = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : P.rects), {
      x: d,
      y: u
    } = Fl(c, p, l)), v = -1);
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: r,
    middlewareData: g
  };
}, gw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = wt(e, t) || {};
    if (c == null)
      return {};
    const u = od(d), p = {
      x: n,
      y: o
    }, h = ta(r), g = ea(h), v = await i.getDimensions(c), y = h === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", x = y ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[h] - p[h] - s.floating[g], R = p[h] - s.reference[h], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let T = P ? P[x] : 0;
    (!T || !await (i.isElement == null ? void 0 : i.isElement(P))) && (T = a.floating[x] || s.floating[g]);
    const E = S / 2 - R / 2, N = T / 2 - v[g] / 2 - 1, D = Nt(u[w], N), H = Nt(u[b], N), B = D, Y = T - v[g] - H, K = T / 2 - v[g] / 2 + E, J = ti(B, K, Y), I = !l.arrow && Fn(r) != null && K !== J && s.reference[g] / 2 - (K < B ? D : H) - v[g] / 2 < 0, X = I ? K < B ? K - B : K - Y : 0;
    return {
      [h]: p[h] + X,
      data: {
        [h]: J,
        centerOffset: K - J - X,
        ...I && {
          alignmentOffset: X
        }
      },
      reset: I
    };
  }
}), vw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...y
      } = wt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = bt(r), b = ut(a), x = bt(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), R = p || (x || !v ? [pr(a)] : aw(a)), P = g !== "none";
      !p && P && R.push(...dw(a, v, g, S));
      const T = [a, ...R], E = await l.detectOverflow(t, y), N = [];
      let D = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && N.push(E[w]), u) {
        const K = iw(r, i, S);
        N.push(E[K[0]], E[K[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: N
      }], !N.every((K) => K <= 0)) {
        var H, B;
        const K = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, J = T[K];
        if (J && (!(u === "alignment" ? b !== ut(J) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((L) => ut(L.placement) === b ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: D
            },
            reset: {
              placement: J
            }
          };
        let I = (B = D.filter((X) => X.overflows[0] <= 0).sort((X, L) => X.overflows[1] - L.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!I)
          switch (h) {
            case "bestFit": {
              var Y;
              const X = (Y = D.filter((L) => {
                if (P) {
                  const V = ut(L.placement);
                  return V === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((V) => V > 0).reduce((V, k) => V + k, 0)]).sort((L, V) => L[1] - V[1])[0]) == null ? void 0 : Y[0];
              X && (I = X);
              break;
            }
            case "initialPlacement":
              I = a;
              break;
          }
        if (r !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function Ll(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $l(e) {
  return rw.some((t) => e[t] >= 0);
}
const yw = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = wt(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await o.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = Ll(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: $l(a)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = Ll(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: $l(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, rd = /* @__PURE__ */ new Set(["left", "top"]);
async function ww(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = bt(n), a = Fn(n), l = ut(n) === "y", c = rd.has(i) ? -1 : 1, d = s && l ? -1 : 1, u = wt(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: g
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: p * c
  } : {
    x: p * c,
    y: h * d
  };
}
const bw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await ww(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, xw = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: b,
              y: x
            } = w;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = wt(e, t), d = {
        x: n,
        y: o
      }, u = await s.detectOverflow(t, c), p = ut(bt(r)), h = Ji(p);
      let g = d[h], v = d[p];
      if (i) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", x = g + u[w], S = g - u[b];
        g = ti(x, g, S);
      }
      if (a) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = v + u[w], S = v - u[b];
        v = ti(x, v, S);
      }
      const y = l.fn({
        ...t,
        [h]: g,
        [p]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [h]: i,
            [p]: a
          }
        }
      };
    }
  };
}, Sw = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = wt(e, t), d = {
        x: n,
        y: o
      }, u = ut(r), p = Ji(u);
      let h = d[p], g = d[u];
      const v = wt(a, t), y = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const x = p === "y" ? "height" : "width", S = s.reference[p] - s.floating[x] + y.mainAxis, R = s.reference[p] + s.reference[x] - y.mainAxis;
        h < S ? h = S : h > R && (h = R);
      }
      if (c) {
        var w, b;
        const x = p === "y" ? "width" : "height", S = rd.has(bt(r)), R = s.reference[u] - s.floating[x] + (S && ((w = i.offset) == null ? void 0 : w[u]) || 0) + (S ? 0 : y.crossAxis), P = s.reference[u] + s.reference[x] + (S ? 0 : ((b = i.offset) == null ? void 0 : b[u]) || 0) - (S ? y.crossAxis : 0);
        g < R ? g = R : g > P && (g = P);
      }
      return {
        [p]: h,
        [u]: g
      };
    }
  };
}, Cw = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = wt(e, t), d = await i.detectOverflow(t, c), u = bt(r), p = Fn(r), h = ut(r) === "y", {
        width: g,
        height: v
      } = s.floating;
      let y, w;
      u === "top" || u === "bottom" ? (y = u, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = u, y = p === "end" ? "top" : "bottom");
      const b = v - d.top - d.bottom, x = g - d.left - d.right, S = Nt(v - d[y], b), R = Nt(g - d[w], x), P = !t.middlewareData.shift;
      let T = S, E = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = x), (o = t.middlewareData.shift) != null && o.enabled.y && (T = b), P && !p) {
        const D = Be(d.left, 0), H = Be(d.right, 0), B = Be(d.top, 0), Y = Be(d.bottom, 0);
        h ? E = g - 2 * (D !== 0 || H !== 0 ? D + H : Be(d.left, d.right)) : T = v - 2 * (B !== 0 || Y !== 0 ? B + Y : Be(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: T
      });
      const N = await i.getDimensions(a.floating);
      return g !== N.width || v !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $r() {
  return typeof window < "u";
}
function Ln(e) {
  return sd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (sd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sd(e) {
  return $r() ? e instanceof Node || e instanceof ze(e).Node : !1;
}
function nt(e) {
  return $r() ? e instanceof Element || e instanceof ze(e).Element : !1;
}
function Ct(e) {
  return $r() ? e instanceof HTMLElement || e instanceof ze(e).HTMLElement : !1;
}
function Bl(e) {
  return !$r() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ze(e).ShadowRoot;
}
function go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = ot(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function Rw(e) {
  return /^(table|td|th)$/.test(Ln(e));
}
function Br(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Ew = /transform|translate|scale|rotate|perspective|filter/, Pw = /paint|layout|strict|content/, qt = (e) => !!e && e !== "none";
let vs;
function na(e) {
  const t = nt(e) ? ot(e) : e;
  return qt(t.transform) || qt(t.translate) || qt(t.scale) || qt(t.rotate) || qt(t.perspective) || !oa() && (qt(t.backdropFilter) || qt(t.filter)) || Ew.test(t.willChange || "") || Pw.test(t.contain || "");
}
function Tw(e) {
  let t = kt(e);
  for (; Ct(t) && !Mn(t); ) {
    if (na(t))
      return t;
    if (Br(t))
      return null;
    t = kt(t);
  }
  return null;
}
function oa() {
  return vs == null && (vs = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), vs;
}
function Mn(e) {
  return /^(html|body|#document)$/.test(Ln(e));
}
function ot(e) {
  return ze(e).getComputedStyle(e);
}
function zr(e) {
  return nt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function kt(e) {
  if (Ln(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Bl(e) && e.host || // Fallback.
    mt(e)
  );
  return Bl(t) ? t.host : t;
}
function id(e) {
  const t = kt(e);
  return Mn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(t) && go(t) ? t : id(t);
}
function oo(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = id(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = ze(r);
  if (s) {
    const a = oi(i);
    return t.concat(i, i.visualViewport || [], go(r) ? r : [], a && n ? oo(a) : []);
  } else
    return t.concat(r, oo(r, [], n));
}
function oi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ad(e) {
  const t = ot(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Ct(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = fr(n) !== s || fr(o) !== i;
  return a && (n = s, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function ra(e) {
  return nt(e) ? e : e.contextElement;
}
function En(e) {
  const t = ra(e);
  if (!Ct(t))
    return dt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = ad(t);
  let i = (s ? fr(n.width) : n.width) / o, a = (s ? fr(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Mw = /* @__PURE__ */ dt(0);
function ld(e) {
  const t = ze(e);
  return !oa() || !t.visualViewport ? Mw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Aw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ze(e) ? !1 : t;
}
function rn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = ra(e);
  let i = dt(1);
  t && (o ? nt(o) && (i = En(o)) : i = En(e));
  const a = Aw(s, n, o) ? ld(s) : dt(0);
  let l = (r.left + a.x) / i.x, c = (r.top + a.y) / i.y, d = r.width / i.x, u = r.height / i.y;
  if (s) {
    const p = ze(s), h = o && nt(o) ? ze(o) : o;
    let g = p, v = oi(g);
    for (; v && o && h !== g; ) {
      const y = En(v), w = v.getBoundingClientRect(), b = ot(v), x = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = w.top + (v.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, u *= y.y, l += x, c += S, g = ze(v), v = oi(g);
    }
  }
  return hr({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Hr(e, t) {
  const n = zr(e).scrollLeft;
  return t ? t.left + n : rn(mt(e)).left + n;
}
function cd(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Hr(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function _w(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = mt(o), a = t ? Br(t.floating) : !1;
  if (o === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = dt(1);
  const d = dt(0), u = Ct(o);
  if ((u || !u && !s) && ((Ln(o) !== "body" || go(i)) && (l = zr(o)), u)) {
    const h = rn(o);
    c = En(o), d.x = h.x + o.clientLeft, d.y = h.y + o.clientTop;
  }
  const p = i && !u && !s ? cd(i, l) : dt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + p.y
  };
}
function Dw(e) {
  return Array.from(e.getClientRects());
}
function Iw(e) {
  const t = mt(e), n = zr(e), o = e.ownerDocument.body, r = Be(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = Be(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Hr(e);
  const a = -n.scrollTop;
  return ot(o).direction === "rtl" && (i += Be(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: i,
    y: a
  };
}
const zl = 25;
function Nw(e, t) {
  const n = ze(e), o = mt(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, a = 0, l = 0;
  if (r) {
    s = r.width, i = r.height;
    const d = oa();
    (!d || d && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  const c = Hr(o);
  if (c <= 0) {
    const d = o.ownerDocument, u = d.body, p = getComputedStyle(u), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(o.clientWidth - u.clientWidth - h);
    g <= zl && (s -= g);
  } else c <= zl && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function kw(e, t) {
  const n = rn(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Ct(e) ? En(e) : dt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = r * s.x, c = o * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Hl(e, t, n) {
  let o;
  if (t === "viewport")
    o = Nw(e, n);
  else if (t === "document")
    o = Iw(mt(e));
  else if (nt(t))
    o = kw(t, n);
  else {
    const r = ld(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return hr(o);
}
function ud(e, t) {
  const n = kt(e);
  return n === t || !nt(n) || Mn(n) ? !1 : ot(n).position === "fixed" || ud(n, t);
}
function Ow(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = oo(e, [], !1).filter((a) => nt(a) && Ln(a) !== "body"), r = null;
  const s = ot(e).position === "fixed";
  let i = s ? kt(e) : e;
  for (; nt(i) && !Mn(i); ) {
    const a = ot(i), l = na(i);
    !l && a.position === "fixed" && (r = null), (s ? !l && !r : !l && a.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || go(i) && !l && ud(e, i)) ? o = o.filter((d) => d !== i) : r = a, i = kt(i);
  }
  return t.set(e, o), o;
}
function Vw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Br(t) ? [] : Ow(t, this._c) : [].concat(n), o], a = Hl(t, i[0], r);
  let l = a.top, c = a.right, d = a.bottom, u = a.left;
  for (let p = 1; p < i.length; p++) {
    const h = Hl(t, i[p], r);
    l = Be(h.top, l), c = Nt(h.right, c), d = Nt(h.bottom, d), u = Be(h.left, u);
  }
  return {
    width: c - u,
    height: d - l,
    x: u,
    y: l
  };
}
function Fw(e) {
  const {
    width: t,
    height: n
  } = ad(e);
  return {
    width: t,
    height: n
  };
}
function Lw(e, t, n) {
  const o = Ct(t), r = mt(t), s = n === "fixed", i = rn(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dt(0);
  function c() {
    l.x = Hr(r);
  }
  if (o || !o && !s)
    if ((Ln(t) !== "body" || go(r)) && (a = zr(t)), o) {
      const h = rn(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else r && c();
  s && !o && r && c();
  const d = r && !o && !s ? cd(r, a) : dt(0), u = i.left + a.scrollLeft - l.x - d.x, p = i.top + a.scrollTop - l.y - d.y;
  return {
    x: u,
    y: p,
    width: i.width,
    height: i.height
  };
}
function ys(e) {
  return ot(e).position === "static";
}
function jl(e, t) {
  if (!Ct(e) || ot(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function dd(e, t) {
  const n = ze(e);
  if (Br(e))
    return n;
  if (!Ct(e)) {
    let r = kt(e);
    for (; r && !Mn(r); ) {
      if (nt(r) && !ys(r))
        return r;
      r = kt(r);
    }
    return n;
  }
  let o = jl(e, t);
  for (; o && Rw(o) && ys(o); )
    o = jl(o, t);
  return o && Mn(o) && ys(o) && !na(o) ? n : o || Tw(e) || n;
}
const $w = async function(e) {
  const t = this.getOffsetParent || dd, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Lw(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Bw(e) {
  return ot(e).direction === "rtl";
}
const zw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _w,
  getDocumentElement: mt,
  getClippingRect: Vw,
  getOffsetParent: dd,
  getElementRects: $w,
  getClientRects: Dw,
  getDimensions: Fw,
  getScale: En,
  isElement: nt,
  isRTL: Bw
};
function fd(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Hw(e, t) {
  let n = null, o;
  const r = mt(e);
  function s() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: p,
      height: h
    } = c;
    if (a || t(), !p || !h)
      return;
    const g = Fo(u), v = Fo(r.clientWidth - (d + p)), y = Fo(r.clientHeight - (u + h)), w = Fo(d), x = {
      rootMargin: -g + "px " + -v + "px " + -y + "px " + -w + "px",
      threshold: Be(0, Nt(1, l)) || 1
    };
    let S = !0;
    function R(P) {
      const T = P[0].intersectionRatio;
      if (T !== l) {
        if (!S)
          return i();
        T ? i(!1, T) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !fd(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...x,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, x);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function jw(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = ra(e), d = r || s ? [...c ? oo(c) : [], ...t ? oo(t) : []] : [];
  d.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const u = c && a ? Hw(c, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === c && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), c && !l && h.observe(c), t && h.observe(t));
  let g, v = l ? rn(e) : null;
  l && y();
  function y() {
    const w = rn(e);
    v && !fd(v, w) && n(), v = w, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((b) => {
      r && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), u == null || u(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const Ww = bw, Gw = xw, Uw = vw, Kw = Cw, Yw = yw, Wl = gw, Xw = Sw, qw = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: zw,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return mw(e, t, {
    ...r,
    platform: s
  });
};
var Zw = typeof document < "u", Qw = function() {
}, Qo = Zw ? Tu : Qw;
function mr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!mr(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !mr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gl(e, t) {
  const n = pd(e);
  return Math.round(t * n) / n;
}
function ws(e) {
  const t = f.useRef(e);
  return Qo(() => {
    t.current = e;
  }), t;
}
function Jw(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, u] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = f.useState(o);
  mr(p, o) || h(o);
  const [g, v] = f.useState(null), [y, w] = f.useState(null), b = f.useCallback((L) => {
    L !== P.current && (P.current = L, v(L));
  }, []), x = f.useCallback((L) => {
    L !== T.current && (T.current = L, w(L));
  }, []), S = s || g, R = i || y, P = f.useRef(null), T = f.useRef(null), E = f.useRef(d), N = l != null, D = ws(l), H = ws(r), B = ws(c), Y = f.useCallback(() => {
    if (!P.current || !T.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: p
    };
    H.current && (L.platform = H.current), qw(P.current, T.current, L).then((V) => {
      const k = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      K.current && !mr(E.current, k) && (E.current = k, kr.flushSync(() => {
        u(k);
      }));
    });
  }, [p, t, n, H, B]);
  Qo(() => {
    c === !1 && E.current.isPositioned && (E.current.isPositioned = !1, u((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [c]);
  const K = f.useRef(!1);
  Qo(() => (K.current = !0, () => {
    K.current = !1;
  }), []), Qo(() => {
    if (S && (P.current = S), R && (T.current = R), S && R) {
      if (D.current)
        return D.current(S, R, Y);
      Y();
    }
  }, [S, R, Y, D, N]);
  const J = f.useMemo(() => ({
    reference: P,
    floating: T,
    setReference: b,
    setFloating: x
  }), [b, x]), I = f.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), X = f.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return L;
    const V = Gl(I.floating, d.x), k = Gl(I.floating, d.y);
    return a ? {
      ...L,
      transform: "translate(" + V + "px, " + k + "px)",
      ...pd(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: k
    };
  }, [n, a, I.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: Y,
    refs: J,
    elements: I,
    floatingStyles: X
  }), [d, Y, J, I, X]);
}
const eb = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Wl({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Wl({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, tb = (e, t) => {
  const n = Ww(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, nb = (e, t) => {
  const n = Gw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ob = (e, t) => ({
  fn: Xw(e).fn,
  options: [e, t]
}), rb = (e, t) => {
  const n = Uw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, sb = (e, t) => {
  const n = Kw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ib = (e, t) => {
  const n = Yw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ab = (e, t) => {
  const n = eb(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var lb = "Arrow", hd = f.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ m(
    re.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
hd.displayName = lb;
var cb = hd;
function md(e) {
  const [t, n] = f.useState(void 0);
  return Re(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var sa = "Popper", [gd, Bt] = rt(sa), [ub, vd] = gd(sa), yd = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = f.useState(null);
  return /* @__PURE__ */ m(ub, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
yd.displayName = sa;
var wd = "PopperAnchor", bd = f.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = vd(wd, n), i = f.useRef(null), a = ce(t, i), l = f.useRef(null);
    return f.useEffect(() => {
      const c = l.current;
      l.current = (o == null ? void 0 : o.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ m(re.div, { ...r, ref: a });
  }
);
bd.displayName = wd;
var ia = "PopperContent", [db, fb] = gd(ia), xd = f.forwardRef(
  (e, t) => {
    var O, W, $, oe, ne, ae;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: g,
      ...v
    } = e, y = vd(ia, n), [w, b] = f.useState(null), x = ce(t, (he) => b(he)), [S, R] = f.useState(null), P = md(S), T = (P == null ? void 0 : P.width) ?? 0, E = (P == null ? void 0 : P.height) ?? 0, N = o + (s !== "center" ? "-" + s : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, H = Array.isArray(c) ? c : [c], B = H.length > 0, Y = {
      padding: D,
      boundary: H.filter(hb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: K, floatingStyles: J, placement: I, isPositioned: X, middlewareData: L } = Jw({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...he) => jw(...he, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        tb({ mainAxis: r + E, alignmentAxis: i }),
        l && nb({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? ob() : void 0,
          ...Y
        }),
        l && rb({ ...Y }),
        sb({
          ...Y,
          apply: ({ elements: he, rects: me, availableWidth: Kt, availableHeight: Rt }) => {
            const { width: Ye, height: Do } = me.reference, Ne = he.floating.style;
            Ne.setProperty("--radix-popper-available-width", `${Kt}px`), Ne.setProperty("--radix-popper-available-height", `${Rt}px`), Ne.setProperty("--radix-popper-anchor-width", `${Ye}px`), Ne.setProperty("--radix-popper-anchor-height", `${Do}px`);
          }
        }),
        S && ab({ element: S, padding: a }),
        mb({ arrowWidth: T, arrowHeight: E }),
        p && ib({ strategy: "referenceHidden", ...Y })
      ]
    }), [V, k] = Rd(I), se = be(g);
    Re(() => {
      X && (se == null || se());
    }, [X, se]);
    const _ = (O = L.arrow) == null ? void 0 : O.x, C = (W = L.arrow) == null ? void 0 : W.y, M = (($ = L.arrow) == null ? void 0 : $.centerOffset) !== 0, [A, z] = f.useState();
    return Re(() => {
      w && z(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ m(
      "div",
      {
        ref: K.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: X ? J.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A,
          "--radix-popper-transform-origin": [
            (oe = L.transformOrigin) == null ? void 0 : oe.x,
            (ne = L.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ae = L.hide) == null ? void 0 : ae.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          db,
          {
            scope: n,
            placedSide: V,
            onArrowChange: R,
            arrowX: _,
            arrowY: C,
            shouldHideArrow: M,
            children: /* @__PURE__ */ m(
              re.div,
              {
                "data-side": V,
                "data-align": k,
                ...v,
                ref: x,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
xd.displayName = ia;
var Sd = "PopperArrow", pb = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Cd = f.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = fb(Sd, o), i = pb[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ m(
          cb,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Cd.displayName = Sd;
function hb(e) {
  return e !== null;
}
var mb = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, w, b;
    const { placement: n, rects: o, middlewareData: r } = t, i = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = Rd(n), u = { start: "0%", center: "50%", end: "100%" }[d], p = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, h = (((b = r.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let g = "", v = "";
    return c === "bottom" ? (g = i ? u : `${p}px`, v = `${-l}px`) : c === "top" ? (g = i ? u : `${p}px`, v = `${o.floating.height + l}px`) : c === "right" ? (g = `${-l}px`, v = i ? u : `${h}px`) : c === "left" && (g = `${o.floating.width + l}px`, v = i ? u : `${h}px`), { data: { x: g, y: v } };
  }
});
function Rd(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var vo = yd, yo = bd, jr = xd, Wr = Cd, gb = "Portal", $n = f.forwardRef((e, t) => {
  var a;
  const { container: n, ...o } = e, [r, s] = f.useState(!1);
  Re(() => s(!0), []);
  const i = n || r && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Du.createPortal(/* @__PURE__ */ m(re.div, { ...o, ref: t }), i) : null;
});
$n.displayName = gb;
// @__NO_SIDE_EFFECTS__
function vb(e) {
  const t = /* @__PURE__ */ yb(e), n = f.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = f.Children.toArray(s), l = a.find(bb);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function yb(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const i = Sb(r), a = xb(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var wb = Symbol("radix.slottable");
function bb(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wb;
}
function xb(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Sb(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cb = f[" useInsertionEffect ".trim().toString()] || Re;
function xt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, s, i] = Rb({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : r;
  {
    const d = f.useRef(e !== void 0);
    f.useEffect(() => {
      const u = d.current;
      u !== a && console.warn(
        `${o} is changing from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, o]);
  }
  const c = f.useCallback(
    (d) => {
      var u;
      if (a) {
        const p = Eb(d) ? d(e) : d;
        p !== e && ((u = i.current) == null || u.call(i, p));
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function Rb({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = f.useState(e), r = f.useRef(n), s = f.useRef(t);
  return Cb(() => {
    s.current = t;
  }, [t]), f.useEffect(() => {
    var i;
    r.current !== n && ((i = s.current) == null || i.call(s, n), r.current = n);
  }, [n, r]), [n, o, s];
}
function Eb(e) {
  return typeof e == "function";
}
function Ed(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Pd = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Pb = "VisuallyHidden", Td = f.forwardRef(
  (e, t) => /* @__PURE__ */ m(
    re.span,
    {
      ...e,
      ref: t,
      style: { ...Pd, ...e.style }
    }
  )
);
Td.displayName = Pb;
var Tb = Td, Mb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mn = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), $o = {}, bs = 0, Md = function(e) {
  return e && (e.host || Md(e.parentNode));
}, Ab = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Md(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, _b = function(e, t, n, o) {
  var r = Ab(t, Array.isArray(e) ? e : [e]);
  $o[n] || ($o[n] = /* @__PURE__ */ new WeakMap());
  var s = $o[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(r), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  r.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (a.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(o), g = h !== null && h !== "false", v = (mn.get(p) || 0) + 1, y = (s.get(p) || 0) + 1;
          mn.set(p, v), s.set(p, y), i.push(p), v === 1 && g && Lo.set(p, !0), y === 1 && p.setAttribute(n, "true"), g || p.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return d(t), a.clear(), bs++, function() {
    i.forEach(function(u) {
      var p = mn.get(u) - 1, h = s.get(u) - 1;
      mn.set(u, p), s.set(u, h), p || (Lo.has(u) || u.removeAttribute(o), Lo.delete(u)), h || u.removeAttribute(n);
    }), bs--, bs || (mn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), $o = {});
  };
}, Gr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Mb(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), _b(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, ct = function() {
  return ct = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ct.apply(this, arguments);
};
function Ad(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Db(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Jo = "right-scroll-bar-position", er = "width-before-scroll-bar", Ib = "with-scroll-bars-hidden", Nb = "--removed-body-scroll-bar-size";
function xs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function kb(e, t) {
  var n = bv(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Ob = typeof window < "u" ? f.useLayoutEffect : f.useEffect, Ul = /* @__PURE__ */ new WeakMap();
function Vb(e, t) {
  var n = kb(null, function(o) {
    return e.forEach(function(r) {
      return xs(r, o);
    });
  });
  return Ob(function() {
    var o = Ul.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), i = n.current;
      r.forEach(function(a) {
        s.has(a) || xs(a, null);
      }), s.forEach(function(a) {
        r.has(a) || xs(a, i);
      });
    }
    Ul.set(n, e);
  }, [e]), n;
}
function Fb(e) {
  return e;
}
function Lb(e, t) {
  t === void 0 && (t = Fb);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, o);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return r;
}
function $b(e) {
  e === void 0 && (e = {});
  var t = Lb(null);
  return t.options = ct({ async: !0, ssr: !1 }, e), t;
}
var _d = function(e) {
  var t = e.sideCar, n = Ad(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return f.createElement(o, ct({}, n));
};
_d.isSideCarExport = !0;
function Bb(e, t) {
  return e.useMedium(t), _d;
}
var Dd = $b(), Ss = function() {
}, Ur = f.forwardRef(function(e, t) {
  var n = f.useRef(null), o = f.useState({
    onScrollCapture: Ss,
    onWheelCapture: Ss,
    onTouchMoveCapture: Ss
  }), r = o[0], s = o[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, h = e.noRelative, g = e.noIsolation, v = e.inert, y = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, x = e.gapMode, S = Ad(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = p, P = Vb([n, t]), T = ct(ct({}, S), r);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(R, { sideCar: Dd, removeScrollBar: c, shards: u, noRelative: h, noIsolation: g, inert: v, setCallbacks: s, allowPinchZoom: !!y, lockRef: n, gapMode: x }),
    i ? f.cloneElement(f.Children.only(a), ct(ct({}, T), { ref: P })) : f.createElement(b, ct({}, T, { className: l, ref: P }), a)
  );
});
Ur.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ur.classNames = {
  fullWidth: er,
  zeroRight: Jo
};
var zb = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Hb() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zb();
  return t && e.setAttribute("nonce", t), e;
}
function jb(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Wb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Gb = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Hb()) && (jb(t, n), Wb(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ub = function() {
  var e = Gb();
  return function(t, n) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Id = function() {
  var e = Ub(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Kb = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Cs = function(e) {
  return parseInt(e || "", 10) || 0;
}, Yb = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Cs(n), Cs(o), Cs(r)];
}, Xb = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Kb;
  var t = Yb(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, qb = Id(), Pn = "data-scroll-locked", Zb = function(e, t, n, o) {
  var r = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ib, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(Pn, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Jo, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(er, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Jo, " .").concat(Jo, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(er, " .").concat(er, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Pn, `] {
    `).concat(Nb, ": ").concat(a, `px;
  }
`);
}, Kl = function() {
  var e = parseInt(document.body.getAttribute(Pn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Qb = function() {
  f.useEffect(function() {
    return document.body.setAttribute(Pn, (Kl() + 1).toString()), function() {
      var e = Kl() - 1;
      e <= 0 ? document.body.removeAttribute(Pn) : document.body.setAttribute(Pn, e.toString());
    };
  }, []);
}, Jb = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Qb();
  var s = f.useMemo(function() {
    return Xb(r);
  }, [r]);
  return f.createElement(qb, { styles: Zb(s, !t, r, n ? "" : "!important") });
}, ri = !1;
if (typeof window < "u")
  try {
    var Bo = Object.defineProperty({}, "passive", {
      get: function() {
        return ri = !0, !0;
      }
    });
    window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
  } catch {
    ri = !1;
  }
var gn = ri ? { passive: !1 } : !1, ex = function(e) {
  return e.tagName === "TEXTAREA";
}, Nd = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ex(e) && n[t] === "visible")
  );
}, tx = function(e) {
  return Nd(e, "overflowY");
}, nx = function(e) {
  return Nd(e, "overflowX");
}, Yl = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = kd(e, o);
    if (r) {
      var s = Od(e, o), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, ox = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, rx = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, kd = function(e, t) {
  return e === "v" ? tx(t) : nx(t);
}, Od = function(e, t) {
  return e === "v" ? ox(t) : rx(t);
}, sx = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ix = function(e, t, n, o, r) {
  var s = sx(e, window.getComputedStyle(t).direction), i = s * o, a = n.target, l = t.contains(a), c = !1, d = i > 0, u = 0, p = 0;
  do {
    if (!a)
      break;
    var h = Od(e, a), g = h[0], v = h[1], y = h[2], w = v - y - s * g;
    (g || w) && kd(e, a) && (u += w, p += g);
    var b = a.parentNode;
    a = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(p) < 1) && (c = !0), c;
}, zo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Xl = function(e) {
  return [e.deltaX, e.deltaY];
}, ql = function(e) {
  return e && "current" in e ? e.current : e;
}, ax = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, lx = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cx = 0, vn = [];
function ux(e) {
  var t = f.useRef([]), n = f.useRef([0, 0]), o = f.useRef(), r = f.useState(cx++)[0], s = f.useState(Id)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var v = Db([e.lockRef.current], (e.shards || []).map(ql), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = f.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = zo(v), b = n.current, x = "deltaX" in v ? v.deltaX : b[0] - w[0], S = "deltaY" in v ? v.deltaY : b[1] - w[1], R, P = v.target, T = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && T === "h" && P.type === "range")
      return !1;
    var E = window.getSelection(), N = E && E.anchorNode, D = N ? N === P || N.contains(P) : !1;
    if (D)
      return !1;
    var H = Yl(T, P);
    if (!H)
      return !0;
    if (H ? R = T : (R = T === "v" ? "h" : "v", H = Yl(T, P)), !H)
      return !1;
    if (!o.current && "changedTouches" in v && (x || S) && (o.current = R), !R)
      return !0;
    var B = o.current || R;
    return ix(B, y, v, B === "h" ? x : S);
  }, []), l = f.useCallback(function(v) {
    var y = v;
    if (!(!vn.length || vn[vn.length - 1] !== s)) {
      var w = "deltaY" in y ? Xl(y) : zo(y), b = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && ax(R.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var x = (i.current.shards || []).map(ql).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), S = x.length > 0 ? a(y, x[0]) : !i.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(v, y, w, b) {
    var x = { name: v, delta: y, target: w, should: b, shadowParent: dx(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), d = f.useCallback(function(v) {
    n.current = zo(v), o.current = void 0;
  }, []), u = f.useCallback(function(v) {
    c(v.type, Xl(v), v.target, a(v, e.lockRef.current));
  }, []), p = f.useCallback(function(v) {
    c(v.type, zo(v), v.target, a(v, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return vn.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, gn), document.addEventListener("touchmove", l, gn), document.addEventListener("touchstart", d, gn), function() {
      vn = vn.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", l, gn), document.removeEventListener("touchmove", l, gn), document.removeEventListener("touchstart", d, gn);
    };
  }, []);
  var h = e.removeScrollBar, g = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    g ? f.createElement(s, { styles: lx(r) }) : null,
    h ? f.createElement(Jb, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function dx(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const fx = Bb(Dd, ux);
var wo = f.forwardRef(function(e, t) {
  return f.createElement(Ur, ct({}, e, { ref: t, sideCar: fx }));
});
wo.classNames = Ur.classNames;
var px = [" ", "Enter", "ArrowUp", "ArrowDown"], hx = [" ", "Enter"], sn = "Select", [Kr, Yr, mx] = Qi(sn), [Bn] = rt(sn, [
  mx,
  Bt
]), Xr = Bt(), [gx, zt] = Bn(sn), [vx, yx] = Bn(sn), Vd = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: d,
    autoComplete: u,
    disabled: p,
    required: h,
    form: g
  } = e, v = Xr(t), [y, w] = f.useState(null), [b, x] = f.useState(null), [S, R] = f.useState(!1), P = Fr(c), [T, E] = xt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: sn
  }), [N, D] = xt({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: sn
  }), H = f.useRef(null), B = y ? g || !!y.closest("form") : !0, [Y, K] = f.useState(/* @__PURE__ */ new Set()), J = Array.from(Y).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ m(vo, { ...v, children: /* @__PURE__ */ j(
    gx,
    {
      required: h,
      scope: t,
      trigger: y,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: R,
      contentId: ye(),
      value: N,
      onValueChange: D,
      open: T,
      onOpenChange: E,
      dir: P,
      triggerPointerDownPosRef: H,
      disabled: p,
      children: [
        /* @__PURE__ */ m(Kr.Provider, { scope: t, children: /* @__PURE__ */ m(
          vx,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((I) => {
              K((X) => new Set(X).add(I));
            }, []),
            onNativeOptionRemove: f.useCallback((I) => {
              K((X) => {
                const L = new Set(X);
                return L.delete(I), L;
              });
            }, []),
            children: n
          }
        ) }),
        B ? /* @__PURE__ */ j(
          lf,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: d,
            autoComplete: u,
            value: N,
            onChange: (I) => D(I.target.value),
            disabled: p,
            form: g,
            children: [
              N === void 0 ? /* @__PURE__ */ m("option", { value: "" }) : null,
              Array.from(Y)
            ]
          },
          J
        ) : null
      ]
    }
  ) });
};
Vd.displayName = sn;
var Fd = "SelectTrigger", Ld = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = Xr(n), i = zt(Fd, n), a = i.disabled || o, l = ce(t, i.onTriggerChange), c = Yr(n), d = f.useRef("touch"), [u, p, h] = uf((v) => {
      const y = c().filter((x) => !x.disabled), w = y.find((x) => x.value === i.value), b = df(y, v, w);
      b !== void 0 && i.onValueChange(b.value);
    }), g = (v) => {
      a || (i.onOpenChange(!0), h()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ m(yo, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": cf(i.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: G(r.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && g(v);
        }),
        onPointerDown: G(r.onPointerDown, (v) => {
          d.current = v.pointerType;
          const y = v.target;
          y.hasPointerCapture(v.pointerId) && y.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: G(r.onKeyDown, (v) => {
          const y = u.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(y && v.key === " ") && px.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }
);
Ld.displayName = Fd;
var $d = "SelectValue", Bd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: i = "", ...a } = e, l = zt($d, n), { onValueNodeHasChildrenChange: c } = l, d = s !== void 0, u = ce(t, l.onValueNodeChange);
    return Re(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ m(
      re.span,
      {
        ...a,
        ref: u,
        style: { pointerEvents: "none" },
        children: cf(l.value) ? /* @__PURE__ */ m(pt, { children: i }) : s
      }
    );
  }
);
Bd.displayName = $d;
var wx = "SelectIcon", zd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ m(re.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
zd.displayName = wx;
var bx = "SelectPortal", Hd = (e) => /* @__PURE__ */ m($n, { asChild: !0, ...e });
Hd.displayName = bx;
var an = "SelectContent", jd = f.forwardRef(
  (e, t) => {
    const n = zt(an, e.__scopeSelect), [o, r] = f.useState();
    if (Re(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? kr.createPortal(
        /* @__PURE__ */ m(Wd, { scope: e.__scopeSelect, children: /* @__PURE__ */ m(Kr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ m(Gd, { ...e, ref: t });
  }
);
jd.displayName = an;
var Qe = 10, [Wd, Ht] = Bn(an), xx = "SelectContentImpl", Sx = /* @__PURE__ */ vb("SelectContent.RemoveScroll"), Gd = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: y,
      //
      ...w
    } = e, b = zt(an, n), [x, S] = f.useState(null), [R, P] = f.useState(null), T = ce(t, (O) => S(O)), [E, N] = f.useState(null), [D, H] = f.useState(
      null
    ), B = Yr(n), [Y, K] = f.useState(!1), J = f.useRef(!1);
    f.useEffect(() => {
      if (x) return Gr(x);
    }, [x]), Lr();
    const I = f.useCallback(
      (O) => {
        const [W, ...$] = B().map((ae) => ae.ref.current), [oe] = $.slice(-1), ne = document.activeElement;
        for (const ae of O)
          if (ae === ne || (ae == null || ae.scrollIntoView({ block: "nearest" }), ae === W && R && (R.scrollTop = 0), ae === oe && R && (R.scrollTop = R.scrollHeight), ae == null || ae.focus(), document.activeElement !== ne)) return;
      },
      [B, R]
    ), X = f.useCallback(
      () => I([E, x]),
      [I, E, x]
    );
    f.useEffect(() => {
      Y && X();
    }, [Y, X]);
    const { onOpenChange: L, triggerPointerDownPosRef: V } = b;
    f.useEffect(() => {
      if (x) {
        let O = { x: 0, y: 0 };
        const W = (oe) => {
          var ne, ae;
          O = {
            x: Math.abs(Math.round(oe.pageX) - (((ne = V.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(oe.pageY) - (((ae = V.current) == null ? void 0 : ae.y) ?? 0))
          };
        }, $ = (oe) => {
          O.x <= 10 && O.y <= 10 ? oe.preventDefault() : x.contains(oe.target) || L(!1), document.removeEventListener("pointermove", W), V.current = null;
        };
        return V.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", $, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", $, { capture: !0 });
        };
      }
    }, [x, L, V]), f.useEffect(() => {
      const O = () => L(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [L]);
    const [k, se] = uf((O) => {
      const W = B().filter((ne) => !ne.disabled), $ = W.find((ne) => ne.ref.current === document.activeElement), oe = df(W, O, $);
      oe && setTimeout(() => oe.ref.current.focus());
    }), _ = f.useCallback(
      (O, W, $) => {
        const oe = !J.current && !$;
        (b.value !== void 0 && b.value === W || oe) && (N(O), oe && (J.current = !0));
      },
      [b.value]
    ), C = f.useCallback(() => x == null ? void 0 : x.focus(), [x]), M = f.useCallback(
      (O, W, $) => {
        const oe = !J.current && !$;
        (b.value !== void 0 && b.value === W || oe) && H(O);
      },
      [b.value]
    ), A = o === "popper" ? si : Ud, z = A === si ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ m(
      Wd,
      {
        scope: n,
        content: x,
        viewport: R,
        onViewportChange: P,
        itemRefCallback: _,
        selectedItem: E,
        onItemLeave: C,
        itemTextRefCallback: M,
        focusSelectedItem: X,
        selectedItemText: D,
        position: o,
        isPositioned: Y,
        searchRef: k,
        children: /* @__PURE__ */ m(wo, { as: Sx, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          mo,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: G(r, (O) => {
              var W;
              (W = b.trigger) == null || W.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              Vn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  A,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...z,
                    onPlaced: () => K(!0),
                    ref: T,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: G(w.onKeyDown, (O) => {
                      const W = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !W && O.key.length === 1 && se(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let oe = B().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (oe = oe.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const ne = O.target, ae = oe.indexOf(ne);
                          oe = oe.slice(ae + 1);
                        }
                        setTimeout(() => I(oe)), O.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Gd.displayName = xx;
var Cx = "SelectItemAlignedPosition", Ud = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = zt(an, n), i = Ht(an, n), [a, l] = f.useState(null), [c, d] = f.useState(null), u = ce(t, (T) => d(T)), p = Yr(n), h = f.useRef(!1), g = f.useRef(!0), { viewport: v, selectedItem: y, selectedItemText: w, focusSelectedItem: b } = i, x = f.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && v && y && w) {
      const T = s.trigger.getBoundingClientRect(), E = c.getBoundingClientRect(), N = s.valueNode.getBoundingClientRect(), D = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ne = D.left - E.left, ae = N.left - ne, he = T.left - ae, me = T.width + he, Kt = Math.max(me, E.width), Rt = window.innerWidth - Qe, Ye = Js(ae, [
          Qe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Qe, Rt - Kt)
        ]);
        a.style.minWidth = me + "px", a.style.left = Ye + "px";
      } else {
        const ne = E.right - D.right, ae = window.innerWidth - N.right - ne, he = window.innerWidth - T.right - ae, me = T.width + he, Kt = Math.max(me, E.width), Rt = window.innerWidth - Qe, Ye = Js(ae, [
          Qe,
          Math.max(Qe, Rt - Kt)
        ]);
        a.style.minWidth = me + "px", a.style.right = Ye + "px";
      }
      const H = p(), B = window.innerHeight - Qe * 2, Y = v.scrollHeight, K = window.getComputedStyle(c), J = parseInt(K.borderTopWidth, 10), I = parseInt(K.paddingTop, 10), X = parseInt(K.borderBottomWidth, 10), L = parseInt(K.paddingBottom, 10), V = J + I + Y + L + X, k = Math.min(y.offsetHeight * 5, V), se = window.getComputedStyle(v), _ = parseInt(se.paddingTop, 10), C = parseInt(se.paddingBottom, 10), M = T.top + T.height / 2 - Qe, A = B - M, z = y.offsetHeight / 2, O = y.offsetTop + z, W = J + I + O, $ = V - W;
      if (W <= M) {
        const ne = H.length > 0 && y === H[H.length - 1].ref.current;
        a.style.bottom = "0px";
        const ae = c.clientHeight - v.offsetTop - v.offsetHeight, he = Math.max(
          A,
          z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? C : 0) + ae + X
        ), me = W + he;
        a.style.height = me + "px";
      } else {
        const ne = H.length > 0 && y === H[0].ref.current;
        a.style.top = "0px";
        const he = Math.max(
          M,
          J + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? _ : 0) + z
        ) + $;
        a.style.height = he + "px", v.scrollTop = W - M + v.offsetTop;
      }
      a.style.margin = `${Qe}px 0`, a.style.minHeight = k + "px", a.style.maxHeight = B + "px", o == null || o(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    a,
    c,
    v,
    y,
    w,
    s.dir,
    o
  ]);
  Re(() => x(), [x]);
  const [S, R] = f.useState();
  Re(() => {
    c && R(window.getComputedStyle(c).zIndex);
  }, [c]);
  const P = f.useCallback(
    (T) => {
      T && g.current === !0 && (x(), b == null || b(), g.current = !1);
    },
    [x, b]
  );
  return /* @__PURE__ */ m(
    Ex,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ m(
            re.div,
            {
              ...r,
              ref: u,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
Ud.displayName = Cx;
var Rx = "SelectPopperPosition", si = f.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = Qe,
    ...s
  } = e, i = Xr(n);
  return /* @__PURE__ */ m(
    jr,
    {
      ...i,
      ...s,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
si.displayName = Rx;
var [Ex, aa] = Bn(an, {}), ii = "SelectViewport", Kd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Ht(ii, n), i = aa(ii, n), a = ce(t, s.onViewportChange), l = f.useRef(0);
    return /* @__PURE__ */ j(pt, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ m(Kr.Slot, { scope: n, children: /* @__PURE__ */ m(
        re.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: G(r.onScroll, (c) => {
            const d = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && u) {
              const h = Math.abs(l.current - d.scrollTop);
              if (h > 0) {
                const g = window.innerHeight - Qe * 2, v = parseFloat(u.style.minHeight), y = parseFloat(u.style.height), w = Math.max(v, y);
                if (w < g) {
                  const b = w + h, x = Math.min(g, b), S = b - x;
                  u.style.height = x + "px", u.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Kd.displayName = ii;
var Yd = "SelectGroup", [Px, Tx] = Bn(Yd), Xd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = ye();
    return /* @__PURE__ */ m(Px, { scope: n, id: r, children: /* @__PURE__ */ m(re.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
Xd.displayName = Yd;
var qd = "SelectLabel", Zd = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Tx(qd, n);
    return /* @__PURE__ */ m(re.div, { id: r.id, ...o, ref: t });
  }
);
Zd.displayName = qd;
var gr = "SelectItem", [Mx, Qd] = Bn(gr), Jd = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...i
    } = e, a = zt(gr, n), l = Ht(gr, n), c = a.value === o, [d, u] = f.useState(s ?? ""), [p, h] = f.useState(!1), g = ce(
      t,
      (b) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, b, o, r);
      }
    ), v = ye(), y = f.useRef("touch"), w = () => {
      r || (a.onValueChange(o), a.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m(
      Mx,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: v,
        isSelected: c,
        onItemTextChange: f.useCallback((b) => {
          u((x) => x || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          Kr.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: d,
            children: /* @__PURE__ */ m(
              re.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...i,
                ref: g,
                onFocus: G(i.onFocus, () => h(!0)),
                onBlur: G(i.onBlur, () => h(!1)),
                onClick: G(i.onClick, () => {
                  y.current !== "mouse" && w();
                }),
                onPointerUp: G(i.onPointerUp, () => {
                  y.current === "mouse" && w();
                }),
                onPointerDown: G(i.onPointerDown, (b) => {
                  y.current = b.pointerType;
                }),
                onPointerMove: G(i.onPointerMove, (b) => {
                  var x;
                  y.current = b.pointerType, r ? (x = l.onItemLeave) == null || x.call(l) : y.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: G(i.onPointerLeave, (b) => {
                  var x;
                  b.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: G(i.onKeyDown, (b) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (hx.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Jd.displayName = gr;
var Xn = "SelectItemText", ef = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, i = zt(Xn, n), a = Ht(Xn, n), l = Qd(Xn, n), c = yx(Xn, n), [d, u] = f.useState(null), p = ce(
      t,
      (w) => u(w),
      l.onItemTextChange,
      (w) => {
        var b;
        return (b = a.itemTextRefCallback) == null ? void 0 : b.call(a, w, l.value, l.disabled);
      }
    ), h = d == null ? void 0 : d.textContent, g = f.useMemo(
      () => /* @__PURE__ */ m("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: y } = c;
    return Re(() => (v(g), () => y(g)), [v, y, g]), /* @__PURE__ */ j(pt, { children: [
      /* @__PURE__ */ m(re.span, { id: l.textId, ...s, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? kr.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
ef.displayName = Xn;
var tf = "SelectItemIndicator", nf = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return Qd(tf, n).isSelected ? /* @__PURE__ */ m(re.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
nf.displayName = tf;
var ai = "SelectScrollUpButton", of = f.forwardRef((e, t) => {
  const n = Ht(ai, e.__scopeSelect), o = aa(ai, e.__scopeSelect), [r, s] = f.useState(!1), i = ce(t, o.onScrollButtonChange);
  return Re(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ m(
    sf,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
of.displayName = ai;
var li = "SelectScrollDownButton", rf = f.forwardRef((e, t) => {
  const n = Ht(li, e.__scopeSelect), o = aa(li, e.__scopeSelect), [r, s] = f.useState(!1), i = ce(t, o.onScrollButtonChange);
  return Re(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        s(d);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ m(
    sf,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
rf.displayName = li;
var sf = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Ht("SelectScrollButton", n), i = f.useRef(null), a = Yr(n), l = f.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return f.useEffect(() => () => l(), [l]), Re(() => {
    var d;
    const c = a().find((u) => u.ref.current === document.activeElement);
    (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ m(
    re.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: G(r.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(o, 50));
      }),
      onPointerMove: G(r.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(o, 50));
      }),
      onPointerLeave: G(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), Ax = "SelectSeparator", af = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ m(re.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
af.displayName = Ax;
var ci = "SelectArrow", _x = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Xr(n), s = zt(ci, n), i = Ht(ci, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ m(Wr, { ...r, ...o, ref: t }) : null;
  }
);
_x.displayName = ci;
var Dx = "SelectBubbleInput", lf = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = f.useRef(null), s = ce(o, r), i = Ed(t);
    return f.useEffect(() => {
      const a = r.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && d) {
        const u = new Event("change", { bubbles: !0 });
        d.call(a, t), a.dispatchEvent(u);
      }
    }, [i, t]), /* @__PURE__ */ m(
      re.select,
      {
        ...n,
        style: { ...Pd, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
lf.displayName = Dx;
function cf(e) {
  return e === "" || e === void 0;
}
function uf(e) {
  const t = be(e), n = f.useRef(""), o = f.useRef(0), r = f.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), (function l(c) {
        n.current = c, window.clearTimeout(o.current), c !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      })(a);
    },
    [t]
  ), s = f.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function df(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Ix(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Ix(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Nx = Vd, ff = Ld, kx = Bd, Ox = zd, Vx = Hd, pf = jd, Fx = Kd, Lx = Xd, hf = Zd, mf = Jd, $x = ef, Bx = nf, gf = of, vf = rf, yf = af;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hx = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Zl = (e) => {
  const t = Hx(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, wf = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), jx = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gx = Yi(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => cr(
    "svg",
    {
      ref: l,
      ...Wx,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: wf("lucide", r),
      ...!s && !jx(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, d]) => cr(c, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = (e, t) => {
  const n = Yi(
    ({ className: o, ...r }, s) => cr(Gx, {
      ref: s,
      iconNode: t,
      className: wf(
        `lucide-${zx(Zl(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = Zl(e), n;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Kx = Ie("arrow-up-down", Ux);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yx = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], bf = Ie("check", Yx);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], xf = Ie("chevron-down", Xx);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Sf = Ie("chevron-left", qx);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zx = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qn = Ie("chevron-right", Zx);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Jx = Ie("chevron-up", Qx);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], t0 = Ie("circle", e0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], o0 = Ie("command", n0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], s0 = Ie("funnel", r0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], a0 = Ie("monitor", i0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], c0 = Ie("moon", l0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], d0 = Ie("plus", u0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], p0 = Ie("search", f0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], m0 = Ie("sun", h0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], la = Ie("x", g0), j_ = Nx, W_ = Lx, G_ = kx, v0 = f.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ j(
  ff,
  {
    ref: o,
    className: U(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(Ox, { asChild: !0, children: /* @__PURE__ */ m(xf, { className: "size-4 opacity-50" }) })
    ]
  }
));
v0.displayName = ff.displayName;
const Cf = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  gf,
  {
    ref: n,
    className: U("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(Jx, { className: "size-4" })
  }
));
Cf.displayName = gf.displayName;
const Rf = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  vf,
  {
    ref: n,
    className: U("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(xf, { className: "size-4" })
  }
));
Rf.displayName = vf.displayName;
const y0 = f.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, r) => /* @__PURE__ */ m(Vx, { children: /* @__PURE__ */ j(
  pf,
  {
    ref: r,
    className: U(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ m(Cf, {}),
      /* @__PURE__ */ m(
        Fx,
        {
          className: U(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m(Rf, {})
    ]
  }
) }));
y0.displayName = pf.displayName;
const w0 = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  hf,
  {
    ref: n,
    className: U("px-2 py-1.5 text-xs font-semibold text-muted-foreground", e),
    ...t
  }
));
w0.displayName = hf.displayName;
const b0 = f.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ j(
  mf,
  {
    ref: o,
    className: U(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(Bx, { children: /* @__PURE__ */ m(bf, { className: "size-4" }) }) }),
      /* @__PURE__ */ m($x, { children: t })
    ]
  }
));
b0.displayName = mf.displayName;
const x0 = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  yf,
  {
    ref: n,
    className: U("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
x0.displayName = yf.displayName;
var qr = "Switch", [S0] = rt(qr), [C0, R0] = S0(qr), Ef = f.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: c,
      form: d,
      ...u
    } = e, [p, h] = f.useState(null), g = ce(t, (x) => h(x)), v = f.useRef(!1), y = p ? d || !!p.closest("form") : !0, [w, b] = xt({
      prop: r,
      defaultProp: s ?? !1,
      onChange: c,
      caller: qr
    });
    return /* @__PURE__ */ j(C0, { scope: n, checked: w, disabled: a, children: [
      /* @__PURE__ */ m(
        re.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": Af(w),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...u,
          ref: g,
          onClick: G(e.onClick, (x) => {
            b((S) => !S), y && (v.current = x.isPropagationStopped(), v.current || x.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ m(
        Mf,
        {
          control: p,
          bubbles: !v.current,
          name: o,
          value: l,
          checked: w,
          required: i,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ef.displayName = qr;
var Pf = "SwitchThumb", Tf = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = R0(Pf, n);
    return /* @__PURE__ */ m(
      re.span,
      {
        "data-state": Af(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Tf.displayName = Pf;
var E0 = "SwitchBubbleInput", Mf = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: o = !0,
    ...r
  }, s) => {
    const i = f.useRef(null), a = ce(i, s), l = Ed(n), c = md(t);
    return f.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (l !== n && h) {
        const g = new Event("click", { bubbles: o });
        h.call(d, n), d.dispatchEvent(g);
      }
    }, [l, n, o]), /* @__PURE__ */ m(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...r,
        tabIndex: -1,
        ref: a,
        style: {
          ...r.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Mf.displayName = E0;
function Af(e) {
  return e ? "checked" : "unchecked";
}
var _f = Ef, P0 = Tf;
const T0 = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  _f,
  {
    className: U(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ m(
      P0,
      {
        className: U(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
T0.displayName = _f.displayName;
var M0 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], A0 = M0.reduce((e, t) => {
  const n = /* @__PURE__ */ Or(`Primitive.${t}`), o = f.forwardRef((r, s) => {
    const { asChild: i, ...a } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), _0 = "Separator", Ql = "horizontal", D0 = ["horizontal", "vertical"], Df = f.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Ql, ...r } = e, s = I0(o) ? o : Ql, a = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ m(
    A0.div,
    {
      "data-orientation": s,
      ...a,
      ...r,
      ref: t
    }
  );
});
Df.displayName = _0;
function I0(e) {
  return D0.includes(e);
}
var If = Df;
const Nf = f.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ m(
  If,
  {
    ref: r,
    decorative: n,
    orientation: t,
    className: U(
      "shrink-0 bg-border",
      t === "horizontal" ? "h-px w-full" : "h-full w-px",
      e
    ),
    ...o
  }
));
Nf.displayName = If.displayName;
function N0(e, t) {
  return f.useReducer((n, o) => t[n][o] ?? n, e);
}
var Te = (e) => {
  const { present: t, children: n } = e, o = k0(t), r = typeof n == "function" ? n({ present: o.isPresent }) : f.Children.only(n), s = ce(o.ref, O0(r));
  return typeof n == "function" || o.isPresent ? f.cloneElement(r, { ref: s }) : null;
};
Te.displayName = "Presence";
function k0(e) {
  const [t, n] = f.useState(), o = f.useRef(null), r = f.useRef(e), s = f.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = N0(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return f.useEffect(() => {
    const c = Ho(o.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), Re(() => {
    const c = o.current, d = r.current;
    if (d !== e) {
      const p = s.current, h = Ho(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), Re(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (h) => {
        const v = Ho(o.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !r.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, p = (h) => {
        h.target === t && (s.current = Ho(o.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: f.useCallback((c) => {
      o.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Ho(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function O0(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var V0 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function F0(e) {
  const t = ({ children: n }) => /* @__PURE__ */ m(pt, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = V0, t;
}
var [Zr] = rt("Tooltip", [
  Bt
]), Qr = Bt(), kf = "TooltipProvider", L0 = 700, ui = "tooltip.open", [$0, ca] = Zr(kf), Of = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = L0,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, i = f.useRef(!0), a = f.useRef(!1), l = f.useRef(0);
  return f.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ m(
    $0,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: f.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: f.useCallback((c) => {
        a.current = c;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
};
Of.displayName = kf;
var ro = "Tooltip", [B0, bo] = Zr(ro), Vf = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = ca(ro, e.__scopeTooltip), c = Qr(t), [d, u] = f.useState(null), p = ye(), h = f.useRef(0), g = i ?? l.disableHoverableContent, v = a ?? l.delayDuration, y = f.useRef(!1), [w, b] = xt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: (T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ui))) : l.onClose(), s == null || s(T);
    },
    caller: ro
  }), x = f.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), S = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y.current = !1, b(!0);
  }, [b]), R = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b(!1);
  }, [b]), P = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      y.current = !0, b(!0), h.current = 0;
    }, v);
  }, [v, b]);
  return f.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ m(vo, { ...c, children: /* @__PURE__ */ m(
    B0,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: x,
      trigger: d,
      onTriggerChange: u,
      onTriggerEnter: f.useCallback(() => {
        l.isOpenDelayedRef.current ? P() : S();
      }, [l.isOpenDelayedRef, P, S]),
      onTriggerLeave: f.useCallback(() => {
        g ? R() : (window.clearTimeout(h.current), h.current = 0);
      }, [R, g]),
      onOpen: S,
      onClose: R,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
Vf.displayName = ro;
var di = "TooltipTrigger", Ff = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = bo(di, n), s = ca(di, n), i = Qr(n), a = f.useRef(null), l = ce(t, a, r.onTriggerChange), c = f.useRef(!1), d = f.useRef(!1), u = f.useCallback(() => c.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ m(yo, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      re.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: l,
        onPointerMove: G(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: G(e.onPointerLeave, () => {
          r.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: G(e.onPointerDown, () => {
          r.open && r.onClose(), c.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: G(e.onFocus, () => {
          c.current || r.onOpen();
        }),
        onBlur: G(e.onBlur, r.onClose),
        onClick: G(e.onClick, r.onClose)
      }
    ) });
  }
);
Ff.displayName = di;
var ua = "TooltipPortal", [z0, H0] = Zr(ua, {
  forceMount: void 0
}), Lf = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = bo(ua, t);
  return /* @__PURE__ */ m(z0, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Te, { present: n || s.open, children: /* @__PURE__ */ m($n, { asChild: !0, container: r, children: o }) }) });
};
Lf.displayName = ua;
var An = "TooltipContent", $f = f.forwardRef(
  (e, t) => {
    const n = H0(An, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, i = bo(An, e.__scopeTooltip);
    return /* @__PURE__ */ m(Te, { present: o || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ m(Bf, { side: r, ...s, ref: t }) : /* @__PURE__ */ m(j0, { side: r, ...s, ref: t }) });
  }
), j0 = f.forwardRef((e, t) => {
  const n = bo(An, e.__scopeTooltip), o = ca(An, e.__scopeTooltip), r = f.useRef(null), s = ce(t, r), [i, a] = f.useState(null), { trigger: l, onClose: c } = n, d = r.current, { onPointerInTransitChange: u } = o, p = f.useCallback(() => {
    a(null), u(!1);
  }, [u]), h = f.useCallback(
    (g, v) => {
      const y = g.currentTarget, w = { x: g.clientX, y: g.clientY }, b = Y0(w, y.getBoundingClientRect()), x = X0(w, b), S = q0(v.getBoundingClientRect()), R = Q0([...x, ...S]);
      a(R), u(!0);
    },
    [u]
  );
  return f.useEffect(() => () => p(), [p]), f.useEffect(() => {
    if (l && d) {
      const g = (y) => h(y, d), v = (y) => h(y, l);
      return l.addEventListener("pointerleave", g), d.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", g), d.removeEventListener("pointerleave", v);
      };
    }
  }, [l, d, h, p]), f.useEffect(() => {
    if (i) {
      const g = (v) => {
        const y = v.target, w = { x: v.clientX, y: v.clientY }, b = (l == null ? void 0 : l.contains(y)) || (d == null ? void 0 : d.contains(y)), x = !Z0(w, i);
        b ? p() : x && (p(), c());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, d, i, c, p]), /* @__PURE__ */ m(Bf, { ...e, ref: s });
}), [W0, G0] = Zr(ro, { isInside: !1 }), U0 = /* @__PURE__ */ F0("TooltipContent"), Bf = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = bo(An, n), c = Qr(n), { onClose: d } = l;
    return f.useEffect(() => (document.addEventListener(ui, d), () => document.removeEventListener(ui, d)), [d]), f.useEffect(() => {
      if (l.trigger) {
        const u = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", u, { capture: !0 }), () => window.removeEventListener("scroll", u, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ m(
      Vn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ j(
          jr,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ m(U0, { children: o }),
              /* @__PURE__ */ m(W0, { scope: n, isInside: !0, children: /* @__PURE__ */ m(Tb, { id: l.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
$f.displayName = An;
var zf = "TooltipArrow", K0 = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Qr(n);
    return G0(
      zf,
      n
    ).isInside ? null : /* @__PURE__ */ m(Wr, { ...r, ...o, ref: t });
  }
);
K0.displayName = zf;
function Y0(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function X0(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function q0(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function Z0(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, u = l.x, p = l.y;
    d > o != p > o && n < (u - c) * (o - d) / (p - d) + c && (r = !r);
  }
  return r;
}
function Q0(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), J0(t);
}
function J0(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var eS = Of, tS = Vf, nS = Ff, oS = Lf, Hf = $f;
const so = eS, io = tS, ao = nS, _n = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ m(oS, { children: /* @__PURE__ */ m(
  Hf,
  {
    ref: o,
    sideOffset: t,
    className: U(
      "z-50 w-fit rounded-md bg-secondary px-3 py-1.5 text-xs text-balance text-secondary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
_n.displayName = Hf.displayName;
// @__NO_SIDE_EFFECTS__
function rS(e) {
  const t = /* @__PURE__ */ sS(e), n = f.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = f.Children.toArray(s), l = a.find(aS);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function sS(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const i = cS(r), a = lS(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var iS = Symbol("radix.slottable");
function aS(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === iS;
}
function lS(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function cS(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Jr = "Dialog", [jf] = rt(Jr), [uS, st] = jf(Jr), Wf = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: i = !0
  } = e, a = f.useRef(null), l = f.useRef(null), [c, d] = xt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: Jr
  });
  return /* @__PURE__ */ m(
    uS,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: ye(),
      titleId: ye(),
      descriptionId: ye(),
      open: c,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((u) => !u), [d]),
      modal: i,
      children: n
    }
  );
};
Wf.displayName = Jr;
var Gf = "DialogTrigger", Uf = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = st(Gf, n), s = ce(t, r.triggerRef);
    return /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": pa(r.open),
        ...o,
        ref: s,
        onClick: G(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Uf.displayName = Gf;
var da = "DialogPortal", [dS, Kf] = jf(da, {
  forceMount: void 0
}), Yf = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = st(da, t);
  return /* @__PURE__ */ m(dS, { scope: t, forceMount: n, children: f.Children.map(o, (i) => /* @__PURE__ */ m(Te, { present: n || s.open, children: /* @__PURE__ */ m($n, { asChild: !0, container: r, children: i }) })) });
};
Yf.displayName = da;
var vr = "DialogOverlay", Xf = f.forwardRef(
  (e, t) => {
    const n = Kf(vr, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = st(vr, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ m(Te, { present: o || s.open, children: /* @__PURE__ */ m(pS, { ...r, ref: t }) }) : null;
  }
);
Xf.displayName = vr;
var fS = /* @__PURE__ */ rS("DialogOverlay.RemoveScroll"), pS = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = st(vr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(wo, { as: fS, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ m(
        re.div,
        {
          "data-state": pa(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ln = "DialogContent", qf = f.forwardRef(
  (e, t) => {
    const n = Kf(ln, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = st(ln, e.__scopeDialog);
    return /* @__PURE__ */ m(Te, { present: o || s.open, children: s.modal ? /* @__PURE__ */ m(hS, { ...r, ref: t }) : /* @__PURE__ */ m(mS, { ...r, ref: t }) });
  }
);
qf.displayName = ln;
var hS = f.forwardRef(
  (e, t) => {
    const n = st(ln, e.__scopeDialog), o = f.useRef(null), r = ce(t, n.contentRef, o);
    return f.useEffect(() => {
      const s = o.current;
      if (s) return Gr(s);
    }, []), /* @__PURE__ */ m(
      Zf,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: G(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: G(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: G(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), mS = f.forwardRef(
  (e, t) => {
    const n = st(ln, e.__scopeDialog), o = f.useRef(!1), r = f.useRef(!1);
    return /* @__PURE__ */ m(
      Zf,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (o.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const i = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), Zf = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...i } = e, a = st(ln, n), l = f.useRef(null), c = ce(t, l);
    return Lr(), /* @__PURE__ */ j(pt, { children: [
      /* @__PURE__ */ m(
        mo,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ m(
            Vn,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": pa(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ j(pt, { children: [
        /* @__PURE__ */ m(gS, { titleId: a.titleId }),
        /* @__PURE__ */ m(yS, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), fa = "DialogTitle", Qf = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = st(fa, n);
    return /* @__PURE__ */ m(re.h2, { id: r.titleId, ...o, ref: t });
  }
);
Qf.displayName = fa;
var Jf = "DialogDescription", ep = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = st(Jf, n);
    return /* @__PURE__ */ m(re.p, { id: r.descriptionId, ...o, ref: t });
  }
);
ep.displayName = Jf;
var tp = "DialogClose", np = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = st(tp, n);
    return /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: G(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
np.displayName = tp;
function pa(e) {
  return e ? "open" : "closed";
}
var op = "DialogTitleWarning", [U_, rp] = Py(op, {
  contentName: ln,
  titleName: fa,
  docsSlug: "dialog"
}), gS = ({ titleId: e }) => {
  const t = rp(op), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, vS = "DialogDescriptionWarning", yS = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${rp(vS).contentName}}.`;
  return f.useEffect(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, sp = Wf, wS = Uf, ip = Yf, ha = Xf, ma = qf, ap = Qf, lp = ep, cp = np;
const bS = sp, K_ = wS, xS = ip, Y_ = cp, up = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ha,
  {
    ref: n,
    className: U(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
up.displayName = ha.displayName;
const dp = f.forwardRef(({ className: e, children: t, hideClose: n, ...o }, r) => /* @__PURE__ */ j(xS, { children: [
  /* @__PURE__ */ m(up, {}),
  /* @__PURE__ */ j(
    ma,
    {
      ref: r,
      className: U(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg",
        e
      ),
      ...o,
      children: [
        t,
        !n && /* @__PURE__ */ j(cp, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ m(la, { className: "size-4" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
dp.displayName = ma.displayName;
const fp = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "div",
  {
    className: U("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
fp.displayName = "DialogHeader";
const SS = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "div",
  {
    className: U(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      e
    ),
    ...t
  }
);
SS.displayName = "DialogFooter";
const pp = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ap,
  {
    ref: n,
    className: U("text-lg leading-none font-semibold tracking-tight", e),
    ...t
  }
));
pp.displayName = ap.displayName;
const hp = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  lp,
  {
    ref: n,
    className: U("text-muted-foreground text-sm", e),
    ...t
  }
));
hp.displayName = lp.displayName;
var Rs = "rovingFocusGroup.onEntryFocus", CS = { bubbles: !1, cancelable: !0 }, xo = "RovingFocusGroup", [fi, mp, RS] = Qi(xo), [ES, gp] = rt(
  xo,
  [RS]
), [PS, TS] = ES(xo), vp = f.forwardRef(
  (e, t) => /* @__PURE__ */ m(fi.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(fi.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(MS, { ...e, ref: t }) }) })
);
vp.displayName = xo;
var MS = f.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, p = f.useRef(null), h = ce(t, p), g = Fr(s), [v, y] = xt({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: xo
  }), [w, b] = f.useState(!1), x = be(c), S = mp(n), R = f.useRef(!1), [P, T] = f.useState(0);
  return f.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(Rs, x), () => E.removeEventListener(Rs, x);
  }, [x]), /* @__PURE__ */ m(
    PS,
    {
      scope: n,
      orientation: o,
      dir: g,
      loop: r,
      currentTabStopId: v,
      onItemFocus: f.useCallback(
        (E) => y(E),
        [y]
      ),
      onItemShiftTab: f.useCallback(() => b(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => T((E) => E + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => T((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        re.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...u,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: G(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: G(e.onFocus, (E) => {
            const N = !R.current;
            if (E.target === E.currentTarget && N && !w) {
              const D = new CustomEvent(Rs, CS);
              if (E.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const H = S().filter((I) => I.focusable), B = H.find((I) => I.active), Y = H.find((I) => I.id === v), J = [B, Y, ...H].filter(
                  Boolean
                ).map((I) => I.ref.current);
                bp(J, d);
              }
            }
            R.current = !1;
          }),
          onBlur: G(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), yp = "RovingFocusGroupItem", wp = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = ye(), c = s || l, d = TS(yp, n), u = d.currentTabStopId === c, p = mp(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: v } = d;
    return f.useEffect(() => {
      if (o)
        return h(), () => g();
    }, [o, h, g]), /* @__PURE__ */ m(
      fi.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ m(
          re.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: G(e.onMouseDown, (y) => {
              o ? d.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: G(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: G(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = DS(y, d.orientation, d.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let x = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") x.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && x.reverse();
                  const S = x.indexOf(y.currentTarget);
                  x = d.loop ? IS(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => bp(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: u, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
wp.displayName = yp;
var AS = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _S(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function DS(e, t, n) {
  const o = _S(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return AS[o];
}
function bp(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function IS(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var NS = vp, kS = wp;
// @__NO_SIDE_EFFECTS__
function OS(e) {
  const t = /* @__PURE__ */ VS(e), n = f.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = f.Children.toArray(s), l = a.find(LS);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function VS(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const i = BS(r), a = $S(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var FS = Symbol("radix.slottable");
function LS(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === FS;
}
function $S(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function BS(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var pi = ["Enter", " "], zS = ["ArrowDown", "PageUp", "Home"], xp = ["ArrowUp", "PageDown", "End"], HS = [...zS, ...xp], jS = {
  ltr: [...pi, "ArrowRight"],
  rtl: [...pi, "ArrowLeft"]
}, WS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, So = "Menu", [lo, GS, US] = Qi(So), [dn, Sp] = rt(So, [
  US,
  Bt,
  gp
]), Co = Bt(), Cp = gp(), [Rp, jt] = dn(So), [KS, Ro] = dn(So), Ep = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, a = Co(t), [l, c] = f.useState(null), d = f.useRef(!1), u = be(s), p = Fr(r);
  return f.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ m(vo, { ...a, children: /* @__PURE__ */ m(
    Rp,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ m(
        KS,
        {
          scope: t,
          onClose: f.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: i,
          children: o
        }
      )
    }
  ) });
};
Ep.displayName = So;
var YS = "MenuAnchor", ga = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Co(n);
    return /* @__PURE__ */ m(yo, { ...r, ...o, ref: t });
  }
);
ga.displayName = YS;
var va = "MenuPortal", [XS, Pp] = dn(va, {
  forceMount: void 0
}), Tp = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = jt(va, t);
  return /* @__PURE__ */ m(XS, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Te, { present: n || s.open, children: /* @__PURE__ */ m($n, { asChild: !0, container: r, children: o }) }) });
};
Tp.displayName = va;
var Ge = "MenuContent", [qS, ya] = dn(Ge), Mp = f.forwardRef(
  (e, t) => {
    const n = Pp(Ge, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = jt(Ge, e.__scopeMenu), i = Ro(Ge, e.__scopeMenu);
    return /* @__PURE__ */ m(lo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(Te, { present: o || s.open, children: /* @__PURE__ */ m(lo.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ m(ZS, { ...r, ref: t }) : /* @__PURE__ */ m(QS, { ...r, ref: t }) }) }) });
  }
), ZS = f.forwardRef(
  (e, t) => {
    const n = jt(Ge, e.__scopeMenu), o = f.useRef(null), r = ce(t, o);
    return f.useEffect(() => {
      const s = o.current;
      if (s) return Gr(s);
    }, []), /* @__PURE__ */ m(
      wa,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: G(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), QS = f.forwardRef((e, t) => {
  const n = jt(Ge, e.__scopeMenu);
  return /* @__PURE__ */ m(
    wa,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), JS = /* @__PURE__ */ OS("MenuContent.ScrollLock"), wa = f.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: g,
      ...v
    } = e, y = jt(Ge, n), w = Ro(Ge, n), b = Co(n), x = Cp(n), S = GS(n), [R, P] = f.useState(null), T = f.useRef(null), E = ce(t, T, y.onContentChange), N = f.useRef(0), D = f.useRef(""), H = f.useRef(0), B = f.useRef(null), Y = f.useRef("right"), K = f.useRef(0), J = g ? wo : f.Fragment, I = g ? { as: JS, allowPinchZoom: !0 } : void 0, X = (V) => {
      var O, W;
      const k = D.current + V, se = S().filter(($) => !$.disabled), _ = document.activeElement, C = (O = se.find(($) => $.ref.current === _)) == null ? void 0 : O.textValue, M = se.map(($) => $.textValue), A = dC(M, k, C), z = (W = se.find(($) => $.textValue === A)) == null ? void 0 : W.ref.current;
      (function $(oe) {
        D.current = oe, window.clearTimeout(N.current), oe !== "" && (N.current = window.setTimeout(() => $(""), 1e3));
      })(k), z && setTimeout(() => z.focus());
    };
    f.useEffect(() => () => window.clearTimeout(N.current), []), Lr();
    const L = f.useCallback((V) => {
      var se, _;
      return Y.current === ((se = B.current) == null ? void 0 : se.side) && pC(V, (_ = B.current) == null ? void 0 : _.area);
    }, []);
    return /* @__PURE__ */ m(
      qS,
      {
        scope: n,
        searchRef: D,
        onItemEnter: f.useCallback(
          (V) => {
            L(V) && V.preventDefault();
          },
          [L]
        ),
        onItemLeave: f.useCallback(
          (V) => {
            var k;
            L(V) || ((k = T.current) == null || k.focus(), P(null));
          },
          [L]
        ),
        onTriggerLeave: f.useCallback(
          (V) => {
            L(V) && V.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: H,
        onPointerGraceIntentChange: f.useCallback((V) => {
          B.current = V;
        }, []),
        children: /* @__PURE__ */ m(J, { ...I, children: /* @__PURE__ */ m(
          mo,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: G(s, (V) => {
              var k;
              V.preventDefault(), (k = T.current) == null || k.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ m(
              Vn,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ m(
                  NS,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: G(l, (V) => {
                      w.isUsingKeyboardRef.current || V.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      jr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Gp(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: E,
                        style: { outline: "none", ...v.style },
                        onKeyDown: G(v.onKeyDown, (V) => {
                          const se = V.target.closest("[data-radix-menu-content]") === V.currentTarget, _ = V.ctrlKey || V.altKey || V.metaKey, C = V.key.length === 1;
                          se && (V.key === "Tab" && V.preventDefault(), !_ && C && X(V.key));
                          const M = T.current;
                          if (V.target !== M || !HS.includes(V.key)) return;
                          V.preventDefault();
                          const z = S().filter((O) => !O.disabled).map((O) => O.ref.current);
                          xp.includes(V.key) && z.reverse(), cC(z);
                        }),
                        onBlur: G(e.onBlur, (V) => {
                          V.currentTarget.contains(V.target) || (window.clearTimeout(N.current), D.current = "");
                        }),
                        onPointerMove: G(
                          e.onPointerMove,
                          co((V) => {
                            const k = V.target, se = K.current !== V.clientX;
                            if (V.currentTarget.contains(k) && se) {
                              const _ = V.clientX > K.current ? "right" : "left";
                              Y.current = _, K.current = V.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Mp.displayName = Ge;
var eC = "MenuGroup", ba = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ m(re.div, { role: "group", ...o, ref: t });
  }
);
ba.displayName = eC;
var tC = "MenuLabel", Ap = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ m(re.div, { ...o, ref: t });
  }
);
Ap.displayName = tC;
var yr = "MenuItem", Jl = "menu.itemSelect", es = f.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = f.useRef(null), i = Ro(yr, e.__scopeMenu), a = ya(yr, e.__scopeMenu), l = ce(t, s), c = f.useRef(!1), d = () => {
      const u = s.current;
      if (!n && u) {
        const p = new CustomEvent(Jl, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Jl, (h) => o == null ? void 0 : o(h), { once: !0 }), Ju(u, p), p.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ m(
      _p,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: G(e.onClick, d),
        onPointerDown: (u) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, u), c.current = !0;
        },
        onPointerUp: G(e.onPointerUp, (u) => {
          var p;
          c.current || (p = u.currentTarget) == null || p.click();
        }),
        onKeyDown: G(e.onKeyDown, (u) => {
          const p = a.searchRef.current !== "";
          n || p && u.key === " " || pi.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
es.displayName = yr;
var _p = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, i = ya(yr, n), a = Cp(n), l = f.useRef(null), c = ce(t, l), [d, u] = f.useState(!1), [p, h] = f.useState("");
    return f.useEffect(() => {
      const g = l.current;
      g && h((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ m(
      lo.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? p,
        children: /* @__PURE__ */ m(kS, { asChild: !0, ...a, focusable: !o, children: /* @__PURE__ */ m(
          re.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: c,
            onPointerMove: G(
              e.onPointerMove,
              co((g) => {
                o ? i.onItemLeave(g) : (i.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: G(
              e.onPointerLeave,
              co((g) => i.onItemLeave(g))
            ),
            onFocus: G(e.onFocus, () => u(!0)),
            onBlur: G(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), nC = "MenuCheckboxItem", Dp = f.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ m(Vp, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ m(
      es,
      {
        role: "menuitemcheckbox",
        "aria-checked": wr(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": Ca(n),
        onSelect: G(
          r.onSelect,
          () => o == null ? void 0 : o(wr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Dp.displayName = nC;
var Ip = "MenuRadioGroup", [oC, rC] = dn(
  Ip,
  { value: void 0, onValueChange: () => {
  } }
), Np = f.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = be(o);
    return /* @__PURE__ */ m(oC, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ m(ba, { ...r, ref: t }) });
  }
);
Np.displayName = Ip;
var kp = "MenuRadioItem", Op = f.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = rC(kp, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ m(Vp, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ m(
      es,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": Ca(s),
        onSelect: G(
          o.onSelect,
          () => {
            var i;
            return (i = r.onValueChange) == null ? void 0 : i.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Op.displayName = kp;
var xa = "MenuItemIndicator", [Vp, sC] = dn(
  xa,
  { checked: !1 }
), Fp = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = sC(xa, n);
    return /* @__PURE__ */ m(
      Te,
      {
        present: o || wr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ m(
          re.span,
          {
            ...r,
            ref: t,
            "data-state": Ca(s.checked)
          }
        )
      }
    );
  }
);
Fp.displayName = xa;
var iC = "MenuSeparator", Lp = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ m(
      re.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Lp.displayName = iC;
var aC = "MenuArrow", $p = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Co(n);
    return /* @__PURE__ */ m(Wr, { ...r, ...o, ref: t });
  }
);
$p.displayName = aC;
var Sa = "MenuSub", [lC, Bp] = dn(Sa), zp = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = jt(Sa, t), i = Co(t), [a, l] = f.useState(null), [c, d] = f.useState(null), u = be(r);
  return f.useEffect(() => (s.open === !1 && u(!1), () => u(!1)), [s.open, u]), /* @__PURE__ */ m(vo, { ...i, children: /* @__PURE__ */ m(
    Rp,
    {
      scope: t,
      open: o,
      onOpenChange: u,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ m(
        lC,
        {
          scope: t,
          contentId: ye(),
          triggerId: ye(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
zp.displayName = Sa;
var qn = "MenuSubTrigger", Hp = f.forwardRef(
  (e, t) => {
    const n = jt(qn, e.__scopeMenu), o = Ro(qn, e.__scopeMenu), r = Bp(qn, e.__scopeMenu), s = ya(qn, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = s, c = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const u = a.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [a, l]), /* @__PURE__ */ m(ga, { asChild: !0, ...c, children: /* @__PURE__ */ m(
      _p,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Gp(n.open),
        ...e,
        ref: De(t, r.onTriggerChange),
        onClick: (u) => {
          var p;
          (p = e.onClick) == null || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: G(
          e.onPointerMove,
          co((u) => {
            s.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: G(
          e.onPointerLeave,
          co((u) => {
            var h, g;
            d();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (g = n.content) == null ? void 0 : g.dataset.side, y = v === "right", w = y ? -5 : 5, b = p[y ? "left" : "right"], x = p[y ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + w, y: u.clientY },
                  { x: b, y: p.top },
                  { x, y: p.top },
                  { x, y: p.bottom },
                  { x: b, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(u), u.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: G(e.onKeyDown, (u) => {
          var h;
          const p = s.searchRef.current !== "";
          e.disabled || p && u.key === " " || jS[o.dir].includes(u.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Hp.displayName = qn;
var jp = "MenuSubContent", Wp = f.forwardRef(
  (e, t) => {
    const n = Pp(Ge, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = jt(Ge, e.__scopeMenu), i = Ro(Ge, e.__scopeMenu), a = Bp(jp, e.__scopeMenu), l = f.useRef(null), c = ce(t, l);
    return /* @__PURE__ */ m(lo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(Te, { present: o || s.open, children: /* @__PURE__ */ m(lo.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(
      wa,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...r,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var u;
          i.isUsingKeyboardRef.current && ((u = l.current) == null || u.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: G(e.onFocusOutside, (d) => {
          d.target !== a.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: G(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: G(e.onKeyDown, (d) => {
          var h;
          const u = d.currentTarget.contains(d.target), p = WS[i.dir].includes(d.key);
          u && p && (s.onOpenChange(!1), (h = a.trigger) == null || h.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Wp.displayName = jp;
function Gp(e) {
  return e ? "open" : "closed";
}
function wr(e) {
  return e === "indeterminate";
}
function Ca(e) {
  return wr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function cC(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function uC(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function dC(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = uC(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function fC(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, u = l.x, p = l.y;
    d > o != p > o && n < (u - c) * (o - d) / (p - d) + c && (r = !r);
  }
  return r;
}
function pC(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return fC(n, t);
}
function co(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var hC = Ep, mC = ga, gC = Tp, vC = Mp, yC = ba, wC = Ap, bC = es, xC = Dp, SC = Np, CC = Op, RC = Fp, EC = Lp, PC = $p, TC = zp, MC = Hp, AC = Wp, ts = "DropdownMenu", [_C] = rt(
  ts,
  [Sp]
), Me = Sp(), [DC, Up] = _C(ts), Kp = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = Me(t), c = f.useRef(null), [d, u] = xt({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: ts
  });
  return /* @__PURE__ */ m(
    DC,
    {
      scope: t,
      triggerId: ye(),
      triggerRef: c,
      contentId: ye(),
      open: d,
      onOpenChange: u,
      onOpenToggle: f.useCallback(() => u((p) => !p), [u]),
      modal: a,
      children: /* @__PURE__ */ m(hC, { ...l, open: d, onOpenChange: u, dir: o, modal: a, children: n })
    }
  );
};
Kp.displayName = ts;
var Yp = "DropdownMenuTrigger", Xp = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = Up(Yp, n), i = Me(n);
    return /* @__PURE__ */ m(mC, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: De(t, s.triggerRef),
        onPointerDown: G(e.onPointerDown, (a) => {
          !o && a.button === 0 && a.ctrlKey === !1 && (s.onOpenToggle(), s.open || a.preventDefault());
        }),
        onKeyDown: G(e.onKeyDown, (a) => {
          o || (["Enter", " "].includes(a.key) && s.onOpenToggle(), a.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
Xp.displayName = Yp;
var IC = "DropdownMenuPortal", qp = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = Me(t);
  return /* @__PURE__ */ m(gC, { ...o, ...n });
};
qp.displayName = IC;
var Zp = "DropdownMenuContent", Qp = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Up(Zp, n), s = Me(n), i = f.useRef(!1);
    return /* @__PURE__ */ m(
      vC,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: G(e.onCloseAutoFocus, (a) => {
          var l;
          i.current || (l = r.triggerRef.current) == null || l.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: G(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!r.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Qp.displayName = Zp;
var NC = "DropdownMenuGroup", Jp = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
    return /* @__PURE__ */ m(yC, { ...r, ...o, ref: t });
  }
);
Jp.displayName = NC;
var kC = "DropdownMenuLabel", eh = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
    return /* @__PURE__ */ m(wC, { ...r, ...o, ref: t });
  }
);
eh.displayName = kC;
var OC = "DropdownMenuItem", th = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
    return /* @__PURE__ */ m(bC, { ...r, ...o, ref: t });
  }
);
th.displayName = OC;
var VC = "DropdownMenuCheckboxItem", nh = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(xC, { ...r, ...o, ref: t });
});
nh.displayName = VC;
var FC = "DropdownMenuRadioGroup", oh = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(SC, { ...r, ...o, ref: t });
});
oh.displayName = FC;
var LC = "DropdownMenuRadioItem", rh = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(CC, { ...r, ...o, ref: t });
});
rh.displayName = LC;
var $C = "DropdownMenuItemIndicator", sh = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(RC, { ...r, ...o, ref: t });
});
sh.displayName = $C;
var BC = "DropdownMenuSeparator", ih = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(EC, { ...r, ...o, ref: t });
});
ih.displayName = BC;
var zC = "DropdownMenuArrow", HC = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
    return /* @__PURE__ */ m(PC, { ...r, ...o, ref: t });
  }
);
HC.displayName = zC;
var jC = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: s } = e, i = Me(t), [a, l] = xt({
    prop: o,
    defaultProp: s ?? !1,
    onChange: r,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ m(TC, { ...i, open: a, onOpenChange: l, children: n });
}, WC = "DropdownMenuSubTrigger", ah = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(MC, { ...r, ...o, ref: t });
});
ah.displayName = WC;
var GC = "DropdownMenuSubContent", lh = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Me(n);
  return /* @__PURE__ */ m(
    AC,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
lh.displayName = GC;
var UC = Kp, KC = Xp, ch = qp, uh = Qp, YC = Jp, dh = eh, fh = th, ph = nh, XC = oh, hh = rh, mh = sh, gh = ih, qC = jC, vh = ah, yh = lh;
const ZC = UC, QC = KC, X_ = YC, q_ = ch, Z_ = qC, Q_ = XC, JC = f.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ j(
  vh,
  {
    ref: r,
    className: U(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ m(Qn, { className: "ml-auto" })
    ]
  }
));
JC.displayName = vh.displayName;
const eR = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  yh,
  {
    ref: n,
    className: U(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      e
    ),
    ...t
  }
));
eR.displayName = yh.displayName;
const wh = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ m(ch, { children: /* @__PURE__ */ m(
  uh,
  {
    ref: o,
    sideOffset: t,
    className: U(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      e
    ),
    ...n
  }
) }));
wh.displayName = uh.displayName;
const bh = f.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ m(
  fh,
  {
    ref: o,
    className: U(
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...n
  }
));
bh.displayName = fh.displayName;
const tR = f.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ j(
  ph,
  {
    ref: r,
    className: U(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ m("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(mh, { children: /* @__PURE__ */ m(bf, { className: "size-4" }) }) }),
      t
    ]
  }
));
tR.displayName = ph.displayName;
const nR = f.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ j(
  hh,
  {
    ref: o,
    className: U(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(mh, { children: /* @__PURE__ */ m(t0, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
nR.displayName = hh.displayName;
const xh = f.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ m(
  dh,
  {
    ref: o,
    className: U(
      "px-2 py-1.5 text-xs font-medium text-muted-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
xh.displayName = dh.displayName;
const Sh = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  gh,
  {
    ref: n,
    className: U("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Sh.displayName = gh.displayName;
const oR = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "span",
  {
    className: U("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
oR.displayName = "DropdownMenuShortcut";
// @__NO_SIDE_EFFECTS__
function rR(e) {
  const t = /* @__PURE__ */ sR(e), n = f.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = f.Children.toArray(s), l = a.find(aR);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...i, ref: r, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function sR(e) {
  const t = f.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (f.isValidElement(r)) {
      const i = cR(r), a = lR(s, r.props);
      return r.type !== f.Fragment && (a.ref = o ? De(o, i) : i), f.cloneElement(r, a);
    }
    return f.Children.count(r) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var iR = Symbol("radix.slottable");
function aR(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === iR;
}
function lR(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const l = s(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function cR(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ns = "Popover", [Ch] = rt(ns, [
  Bt
]), Eo = Bt(), [uR, Wt] = Ch(ns), Rh = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: i = !1
  } = e, a = Eo(t), l = f.useRef(null), [c, d] = f.useState(!1), [u, p] = xt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: s,
    caller: ns
  });
  return /* @__PURE__ */ m(vo, { ...a, children: /* @__PURE__ */ m(
    uR,
    {
      scope: t,
      contentId: ye(),
      triggerRef: l,
      open: u,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: f.useCallback(() => d(!0), []),
      onCustomAnchorRemove: f.useCallback(() => d(!1), []),
      modal: i,
      children: n
    }
  ) });
};
Rh.displayName = ns;
var Eh = "PopoverAnchor", Ph = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Wt(Eh, n), s = Eo(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: a } = r;
    return f.useEffect(() => (i(), () => a()), [i, a]), /* @__PURE__ */ m(yo, { ...s, ...o, ref: t });
  }
);
Ph.displayName = Eh;
var Th = "PopoverTrigger", Mh = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Wt(Th, n), s = Eo(n), i = ce(t, r.triggerRef), a = /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Nh(r.open),
        ...o,
        ref: i,
        onClick: G(e.onClick, r.onOpenToggle)
      }
    );
    return r.hasCustomAnchor ? a : /* @__PURE__ */ m(yo, { asChild: !0, ...s, children: a });
  }
);
Mh.displayName = Th;
var Ra = "PopoverPortal", [dR, fR] = Ch(Ra, {
  forceMount: void 0
}), Ah = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, s = Wt(Ra, t);
  return /* @__PURE__ */ m(dR, { scope: t, forceMount: n, children: /* @__PURE__ */ m(Te, { present: n || s.open, children: /* @__PURE__ */ m($n, { asChild: !0, container: r, children: o }) }) });
};
Ah.displayName = Ra;
var Dn = "PopoverContent", _h = f.forwardRef(
  (e, t) => {
    const n = fR(Dn, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, s = Wt(Dn, e.__scopePopover);
    return /* @__PURE__ */ m(Te, { present: o || s.open, children: s.modal ? /* @__PURE__ */ m(hR, { ...r, ref: t }) : /* @__PURE__ */ m(mR, { ...r, ref: t }) });
  }
);
_h.displayName = Dn;
var pR = /* @__PURE__ */ rR("PopoverContent.RemoveScroll"), hR = f.forwardRef(
  (e, t) => {
    const n = Wt(Dn, e.__scopePopover), o = f.useRef(null), r = ce(t, o), s = f.useRef(!1);
    return f.useEffect(() => {
      const i = o.current;
      if (i) return Gr(i);
    }, []), /* @__PURE__ */ m(wo, { as: pR, allowPinchZoom: !0, children: /* @__PURE__ */ m(
      Dh,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: G(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), s.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: G(
          e.onPointerDownOutside,
          (i) => {
            const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            s.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: G(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), mR = f.forwardRef(
  (e, t) => {
    const n = Wt(Dn, e.__scopePopover), o = f.useRef(!1), r = f.useRef(!1);
    return /* @__PURE__ */ m(
      Dh,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (o.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const i = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), Dh = f.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: o,
      onOpenAutoFocus: r,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: d,
      ...u
    } = e, p = Wt(Dn, n), h = Eo(n);
    return Lr(), /* @__PURE__ */ m(
      mo,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ m(
          Vn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ m(
              jr,
              {
                "data-state": Nh(p.open),
                role: "dialog",
                id: p.contentId,
                ...h,
                ...u,
                ref: t,
                style: {
                  ...u.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Ih = "PopoverClose", gR = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Wt(Ih, n);
    return /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: G(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
gR.displayName = Ih;
var vR = "PopoverArrow", yR = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Eo(n);
    return /* @__PURE__ */ m(Wr, { ...r, ...o, ref: t });
  }
);
yR.displayName = vR;
function Nh(e) {
  return e ? "open" : "closed";
}
var wR = Rh, bR = Ph, xR = Mh, SR = Ah, kh = _h;
const CR = wR, RR = xR, J_ = bR, Oh = f.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ m(SR, { children: /* @__PURE__ */ m(
  kh,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: U(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
      e
    ),
    ...o
  }
) }));
Oh.displayName = kh.displayName;
function ER(e, t) {
  return f.useReducer((n, o) => t[n][o] ?? n, e);
}
var Ea = "ScrollArea", [Vh] = rt(Ea), [PR, Ke] = Vh(Ea), Fh = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: r,
      scrollHideDelay: s = 600,
      ...i
    } = e, [a, l] = f.useState(null), [c, d] = f.useState(null), [u, p] = f.useState(null), [h, g] = f.useState(null), [v, y] = f.useState(null), [w, b] = f.useState(0), [x, S] = f.useState(0), [R, P] = f.useState(!1), [T, E] = f.useState(!1), N = ce(t, (H) => l(H)), D = Fr(r);
    return /* @__PURE__ */ m(
      PR,
      {
        scope: n,
        type: o,
        dir: D,
        scrollHideDelay: s,
        scrollArea: a,
        viewport: c,
        onViewportChange: d,
        content: u,
        onContentChange: p,
        scrollbarX: h,
        onScrollbarXChange: g,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: P,
        scrollbarY: v,
        onScrollbarYChange: y,
        scrollbarYEnabled: T,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: b,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ m(
          re.div,
          {
            dir: D,
            ...i,
            ref: N,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Fh.displayName = Ea;
var Lh = "ScrollAreaViewport", $h = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...s } = e, i = Ke(Lh, n), a = f.useRef(null), l = ce(t, a, i.onViewportChange);
    return /* @__PURE__ */ j(pt, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(
        re.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ m("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
$h.displayName = Lh;
var gt = "ScrollAreaScrollbar", Pa = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Ke(gt, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = r, a = e.orientation === "horizontal";
    return f.useEffect(() => (a ? s(!0) : i(!0), () => {
      a ? s(!1) : i(!1);
    }), [a, s, i]), r.type === "hover" ? /* @__PURE__ */ m(TR, { ...o, ref: t, forceMount: n }) : r.type === "scroll" ? /* @__PURE__ */ m(MR, { ...o, ref: t, forceMount: n }) : r.type === "auto" ? /* @__PURE__ */ m(Bh, { ...o, ref: t, forceMount: n }) : r.type === "always" ? /* @__PURE__ */ m(Ta, { ...o, ref: t }) : null;
  }
);
Pa.displayName = gt;
var TR = f.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Ke(gt, e.__scopeScrollArea), [s, i] = f.useState(!1);
  return f.useEffect(() => {
    const a = r.scrollArea;
    let l = 0;
    if (a) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, d = () => {
        l = window.setTimeout(() => i(!1), r.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d);
      };
    }
  }, [r.scrollArea, r.scrollHideDelay]), /* @__PURE__ */ m(Te, { present: n || s, children: /* @__PURE__ */ m(
    Bh,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), MR = f.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Ke(gt, e.__scopeScrollArea), s = e.orientation === "horizontal", i = rs(() => l("SCROLL_END"), 100), [a, l] = ER("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return f.useEffect(() => {
    if (a === "idle") {
      const c = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [a, r.scrollHideDelay, l]), f.useEffect(() => {
    const c = r.viewport, d = s ? "scrollLeft" : "scrollTop";
    if (c) {
      let u = c[d];
      const p = () => {
        const h = c[d];
        u !== h && (l("SCROLL"), i()), u = h;
      };
      return c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
    }
  }, [r.viewport, s, l, i]), /* @__PURE__ */ m(Te, { present: n || a !== "hidden", children: /* @__PURE__ */ m(
    Ta,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: G(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: G(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Bh = f.forwardRef((e, t) => {
  const n = Ke(gt, e.__scopeScrollArea), { forceMount: o, ...r } = e, [s, i] = f.useState(!1), a = e.orientation === "horizontal", l = rs(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(a ? c : d);
    }
  }, 10);
  return In(n.viewport, l), In(n.content, l), /* @__PURE__ */ m(Te, { present: o || s, children: /* @__PURE__ */ m(
    Ta,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Ta = f.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = Ke(gt, e.__scopeScrollArea), s = f.useRef(null), i = f.useRef(0), [a, l] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = Gh(a.viewport, a.content), d = {
    ...o,
    sizes: a,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function u(p, h) {
    return kR(p, i.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ m(
    AR,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const p = r.viewport.scrollLeft, h = ec(p, a, r.dir);
          s.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        r.viewport && (r.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        r.viewport && (r.viewport.scrollLeft = u(p, r.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ m(
    _R,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const p = r.viewport.scrollTop, h = ec(p, a);
          s.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        r.viewport && (r.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        r.viewport && (r.viewport.scrollTop = u(p));
      }
    }
  ) : null;
}), AR = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Ke(gt, e.__scopeScrollArea), [i, a] = f.useState(), l = f.useRef(null), c = ce(t, l, s.onScrollbarXChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    Hh,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": os(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, u) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), Kh(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && o({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: xr(i.paddingLeft),
            paddingEnd: xr(i.paddingRight)
          }
        });
      }
    }
  );
}), _R = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Ke(gt, e.__scopeScrollArea), [i, a] = f.useState(), l = f.useRef(null), c = ce(t, l, s.onScrollbarYChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    Hh,
    {
      "data-orientation": "vertical",
      ...r,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": os(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, u) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), Kh(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && o({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: xr(i.paddingTop),
            paddingEnd: xr(i.paddingBottom)
          }
        });
      }
    }
  );
}), [DR, zh] = Vh(gt), Hh = f.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: o,
    hasThumb: r,
    onThumbChange: s,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: u,
    ...p
  } = e, h = Ke(gt, n), [g, v] = f.useState(null), y = ce(t, (N) => v(N)), w = f.useRef(null), b = f.useRef(""), x = h.viewport, S = o.content - o.viewport, R = be(d), P = be(l), T = rs(u, 10);
  function E(N) {
    if (w.current) {
      const D = N.clientX - w.current.left, H = N.clientY - w.current.top;
      c({ x: D, y: H });
    }
  }
  return f.useEffect(() => {
    const N = (D) => {
      const H = D.target;
      (g == null ? void 0 : g.contains(H)) && R(D, S);
    };
    return document.addEventListener("wheel", N, { passive: !1 }), () => document.removeEventListener("wheel", N, { passive: !1 });
  }, [x, g, S, R]), f.useEffect(P, [o, P]), In(g, T), In(h.content, T), /* @__PURE__ */ m(
    DR,
    {
      scope: n,
      scrollbar: g,
      hasThumb: r,
      onThumbChange: be(s),
      onThumbPointerUp: be(i),
      onThumbPositionChange: P,
      onThumbPointerDown: be(a),
      children: /* @__PURE__ */ m(
        re.div,
        {
          ...p,
          ref: y,
          style: { position: "absolute", ...p.style },
          onPointerDown: G(e.onPointerDown, (N) => {
            N.button === 0 && (N.target.setPointerCapture(N.pointerId), w.current = g.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), E(N));
          }),
          onPointerMove: G(e.onPointerMove, E),
          onPointerUp: G(e.onPointerUp, (N) => {
            const D = N.target;
            D.hasPointerCapture(N.pointerId) && D.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = b.current, h.viewport && (h.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), br = "ScrollAreaThumb", jh = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = zh(br, e.__scopeScrollArea);
    return /* @__PURE__ */ m(Te, { present: n || r.hasThumb, children: /* @__PURE__ */ m(IR, { ref: t, ...o }) });
  }
), IR = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e, s = Ke(br, n), i = zh(br, n), { onThumbPositionChange: a } = i, l = ce(
      t,
      (u) => i.onThumbChange(u)
    ), c = f.useRef(void 0), d = rs(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const u = s.viewport;
      if (u) {
        const p = () => {
          if (d(), !c.current) {
            const h = OR(u, a);
            c.current = h, a();
          }
        };
        return a(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
      }
    }, [s.viewport, d, a]), /* @__PURE__ */ m(
      re.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: G(e.onPointerDownCapture, (u) => {
          const h = u.target.getBoundingClientRect(), g = u.clientX - h.left, v = u.clientY - h.top;
          i.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: G(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
jh.displayName = br;
var Ma = "ScrollAreaCorner", Wh = f.forwardRef(
  (e, t) => {
    const n = Ke(Ma, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ m(NR, { ...e, ref: t }) : null;
  }
);
Wh.displayName = Ma;
var NR = f.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, r = Ke(Ma, n), [s, i] = f.useState(0), [a, l] = f.useState(0), c = !!(s && a);
  return In(r.scrollbarX, () => {
    var u;
    const d = ((u = r.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    r.onCornerHeightChange(d), l(d);
  }), In(r.scrollbarY, () => {
    var u;
    const d = ((u = r.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    r.onCornerWidthChange(d), i(d);
  }), c ? /* @__PURE__ */ m(
    re.div,
    {
      ...o,
      ref: t,
      style: {
        width: s,
        height: a,
        position: "absolute",
        right: r.dir === "ltr" ? 0 : void 0,
        left: r.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function xr(e) {
  return e ? parseInt(e, 10) : 0;
}
function Gh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function os(e) {
  const t = Gh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function kR(e, t, n, o = "ltr") {
  const r = os(n), s = r / 2, i = t || s, a = r - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, d = n.content - n.viewport, u = o === "ltr" ? [0, d] : [d * -1, 0];
  return Uh([l, c], u)(e);
}
function ec(e, t, n = "ltr") {
  const o = os(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - r, i = t.content - t.viewport, a = s - o, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Js(e, l);
  return Uh([0, i], [0, a])(c);
}
function Uh(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Kh(e, t) {
  return e > 0 && e < t;
}
var OR = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return (function r() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, a = n.top !== s.top;
    (i || a) && t(), n = s, o = window.requestAnimationFrame(r);
  })(), () => window.cancelAnimationFrame(o);
};
function rs(e, t) {
  const n = be(e), o = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(o.current), []), f.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function In(e, t) {
  const n = be(t);
  Re(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [e, n]);
}
var Yh = Fh, VR = $h, FR = Wh;
const LR = f.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ j(
  Yh,
  {
    ref: o,
    className: U("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ m(VR, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ m(Xh, {}),
      /* @__PURE__ */ m(FR, {})
    ]
  }
));
LR.displayName = Yh.displayName;
const Xh = f.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ m(
  Pa,
  {
    ref: o,
    orientation: t,
    className: U(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m(jh, { className: "bg-border relative flex-1 rounded-full" })
  }
));
Xh.displayName = Pa.displayName;
var tc = 1, $R = 0.9, BR = 0.8, zR = 0.17, Es = 0.1, Ps = 0.999, HR = 0.9999, jR = 0.99, WR = /[\\\/_+.#"@\[\(\{&]/, GR = /[\\\/_+.#"@\[\(\{&]/g, UR = /[\s-]/, qh = /[\s-]/g;
function hi(e, t, n, o, r, s, i) {
  if (s === t.length) return r === e.length ? tc : jR;
  var a = `${r},${s}`;
  if (i[a] !== void 0) return i[a];
  for (var l = o.charAt(s), c = n.indexOf(l, r), d = 0, u, p, h, g; c >= 0; ) u = hi(e, t, n, o, c + 1, s + 1, i), u > d && (c === r ? u *= tc : WR.test(e.charAt(c - 1)) ? (u *= BR, h = e.slice(r, c - 1).match(GR), h && r > 0 && (u *= Math.pow(Ps, h.length))) : UR.test(e.charAt(c - 1)) ? (u *= $R, g = e.slice(r, c - 1).match(qh), g && r > 0 && (u *= Math.pow(Ps, g.length))) : (u *= zR, r > 0 && (u *= Math.pow(Ps, c - r))), e.charAt(c) !== t.charAt(s) && (u *= HR)), (u < Es && n.charAt(c - 1) === o.charAt(s + 1) || o.charAt(s + 1) === o.charAt(s) && n.charAt(c - 1) !== o.charAt(s)) && (p = hi(e, t, n, o, c + 1, s + 2, i), p * Es > u && (u = p * Es)), u > d && (d = u), c = n.indexOf(l, c + 1);
  return i[a] = d, d;
}
function nc(e) {
  return e.toLowerCase().replace(qh, " ");
}
function KR(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, hi(e, t, nc(e), nc(t), 0, 0, {});
}
var YR = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Gt = YR.reduce((e, t) => {
  const n = /* @__PURE__ */ Or(`Primitive.${t}`), o = f.forwardRef((r, s) => {
    const { asChild: i, ...a } = r, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Un = '[cmdk-group=""]', Ts = '[cmdk-group-items=""]', XR = '[cmdk-group-heading=""]', Zh = '[cmdk-item=""]', oc = `${Zh}:not([aria-disabled="true"])`, mi = "cmdk-item-select", yn = "data-value", qR = (e, t, n) => KR(e, t, n), Qh = f.createContext(void 0), Po = () => f.useContext(Qh), Jh = f.createContext(void 0), Aa = () => f.useContext(Jh), em = f.createContext(void 0), tm = f.forwardRef((e, t) => {
  let n = wn(() => {
    var _, C;
    return { search: "", value: (C = (_ = e.value) != null ? _ : e.defaultValue) != null ? C : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = wn(() => /* @__PURE__ */ new Set()), r = wn(() => /* @__PURE__ */ new Map()), s = wn(() => /* @__PURE__ */ new Map()), i = wn(() => /* @__PURE__ */ new Set()), a = nm(e), { label: l, children: c, value: d, onValueChange: u, filter: p, shouldFilter: h, loop: g, disablePointerSelection: v = !1, vimBindings: y = !0, ...w } = e, b = ye(), x = ye(), S = ye(), R = f.useRef(null), P = aE();
  cn(() => {
    if (d !== void 0) {
      let _ = d.trim();
      n.current.value = _, T.emit();
    }
  }, [d]), cn(() => {
    P(6, Y);
  }, []);
  let T = f.useMemo(() => ({ subscribe: (_) => (i.current.add(_), () => i.current.delete(_)), snapshot: () => n.current, setState: (_, C, M) => {
    var A, z, O, W;
    if (!Object.is(n.current[_], C)) {
      if (n.current[_] = C, _ === "search") B(), D(), P(1, H);
      else if (_ === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let $ = document.getElementById(S);
          $ ? $.focus() : (A = document.getElementById(b)) == null || A.focus();
        }
        if (P(7, () => {
          var $;
          n.current.selectedItemId = ($ = K()) == null ? void 0 : $.id, T.emit();
        }), M || P(5, Y), ((z = a.current) == null ? void 0 : z.value) !== void 0) {
          let $ = C ?? "";
          (W = (O = a.current).onValueChange) == null || W.call(O, $);
          return;
        }
      }
      T.emit();
    }
  }, emit: () => {
    i.current.forEach((_) => _());
  } }), []), E = f.useMemo(() => ({ value: (_, C, M) => {
    var A;
    C !== ((A = s.current.get(_)) == null ? void 0 : A.value) && (s.current.set(_, { value: C, keywords: M }), n.current.filtered.items.set(_, N(C, M)), P(2, () => {
      D(), T.emit();
    }));
  }, item: (_, C) => (o.current.add(_), C && (r.current.has(C) ? r.current.get(C).add(_) : r.current.set(C, /* @__PURE__ */ new Set([_]))), P(3, () => {
    B(), D(), n.current.value || H(), T.emit();
  }), () => {
    s.current.delete(_), o.current.delete(_), n.current.filtered.items.delete(_);
    let M = K();
    P(4, () => {
      B(), (M == null ? void 0 : M.getAttribute("id")) === _ && H(), T.emit();
    });
  }), group: (_) => (r.current.has(_) || r.current.set(_, /* @__PURE__ */ new Set()), () => {
    s.current.delete(_), r.current.delete(_);
  }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: b, inputId: S, labelId: x, listInnerRef: R }), []);
  function N(_, C) {
    var M, A;
    let z = (A = (M = a.current) == null ? void 0 : M.filter) != null ? A : qR;
    return _ ? z(_, n.current.search, C) : 0;
  }
  function D() {
    if (!n.current.search || a.current.shouldFilter === !1) return;
    let _ = n.current.filtered.items, C = [];
    n.current.filtered.groups.forEach((A) => {
      let z = r.current.get(A), O = 0;
      z.forEach((W) => {
        let $ = _.get(W);
        O = Math.max($, O);
      }), C.push([A, O]);
    });
    let M = R.current;
    J().sort((A, z) => {
      var O, W;
      let $ = A.getAttribute("id"), oe = z.getAttribute("id");
      return ((O = _.get(oe)) != null ? O : 0) - ((W = _.get($)) != null ? W : 0);
    }).forEach((A) => {
      let z = A.closest(Ts);
      z ? z.appendChild(A.parentElement === z ? A : A.closest(`${Ts} > *`)) : M.appendChild(A.parentElement === M ? A : A.closest(`${Ts} > *`));
    }), C.sort((A, z) => z[1] - A[1]).forEach((A) => {
      var z;
      let O = (z = R.current) == null ? void 0 : z.querySelector(`${Un}[${yn}="${encodeURIComponent(A[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function H() {
    let _ = J().find((M) => M.getAttribute("aria-disabled") !== "true"), C = _ == null ? void 0 : _.getAttribute(yn);
    T.setState("value", C || void 0);
  }
  function B() {
    var _, C, M, A;
    if (!n.current.search || a.current.shouldFilter === !1) {
      n.current.filtered.count = o.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let z = 0;
    for (let O of o.current) {
      let W = (C = (_ = s.current.get(O)) == null ? void 0 : _.value) != null ? C : "", $ = (A = (M = s.current.get(O)) == null ? void 0 : M.keywords) != null ? A : [], oe = N(W, $);
      n.current.filtered.items.set(O, oe), oe > 0 && z++;
    }
    for (let [O, W] of r.current) for (let $ of W) if (n.current.filtered.items.get($) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = z;
  }
  function Y() {
    var _, C, M;
    let A = K();
    A && (((_ = A.parentElement) == null ? void 0 : _.firstChild) === A && ((M = (C = A.closest(Un)) == null ? void 0 : C.querySelector(XR)) == null || M.scrollIntoView({ block: "nearest" })), A.scrollIntoView({ block: "nearest" }));
  }
  function K() {
    var _;
    return (_ = R.current) == null ? void 0 : _.querySelector(`${Zh}[aria-selected="true"]`);
  }
  function J() {
    var _;
    return Array.from(((_ = R.current) == null ? void 0 : _.querySelectorAll(oc)) || []);
  }
  function I(_) {
    let C = J()[_];
    C && T.setState("value", C.getAttribute(yn));
  }
  function X(_) {
    var C;
    let M = K(), A = J(), z = A.findIndex((W) => W === M), O = A[z + _];
    (C = a.current) != null && C.loop && (O = z + _ < 0 ? A[A.length - 1] : z + _ === A.length ? A[0] : A[z + _]), O && T.setState("value", O.getAttribute(yn));
  }
  function L(_) {
    let C = K(), M = C == null ? void 0 : C.closest(Un), A;
    for (; M && !A; ) M = _ > 0 ? sE(M, Un) : iE(M, Un), A = M == null ? void 0 : M.querySelector(oc);
    A ? T.setState("value", A.getAttribute(yn)) : X(_);
  }
  let V = () => I(J().length - 1), k = (_) => {
    _.preventDefault(), _.metaKey ? V() : _.altKey ? L(1) : X(1);
  }, se = (_) => {
    _.preventDefault(), _.metaKey ? I(0) : _.altKey ? L(-1) : X(-1);
  };
  return f.createElement(Gt.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (_) => {
    var C;
    (C = w.onKeyDown) == null || C.call(w, _);
    let M = _.nativeEvent.isComposing || _.keyCode === 229;
    if (!(_.defaultPrevented || M)) switch (_.key) {
      case "n":
      case "j": {
        y && _.ctrlKey && k(_);
        break;
      }
      case "ArrowDown": {
        k(_);
        break;
      }
      case "p":
      case "k": {
        y && _.ctrlKey && se(_);
        break;
      }
      case "ArrowUp": {
        se(_);
        break;
      }
      case "Home": {
        _.preventDefault(), I(0);
        break;
      }
      case "End": {
        _.preventDefault(), V();
        break;
      }
      case "Enter": {
        _.preventDefault();
        let A = K();
        if (A) {
          let z = new Event(mi);
          A.dispatchEvent(z);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: cE }, l), ss(e, (_) => f.createElement(Jh.Provider, { value: T }, f.createElement(Qh.Provider, { value: E }, _))));
}), ZR = f.forwardRef((e, t) => {
  var n, o;
  let r = ye(), s = f.useRef(null), i = f.useContext(em), a = Po(), l = nm(e), c = (o = (n = l.current) == null ? void 0 : n.forceMount) != null ? o : i == null ? void 0 : i.forceMount;
  cn(() => {
    if (!c) return a.item(r, i == null ? void 0 : i.id);
  }, [c]);
  let d = om(r, s, [e.value, e.children, s], e.keywords), u = Aa(), p = Ot((P) => P.value && P.value === d.current), h = Ot((P) => c || a.filter() === !1 ? !0 : P.search ? P.filtered.items.get(r) > 0 : !0);
  f.useEffect(() => {
    let P = s.current;
    if (!(!P || e.disabled)) return P.addEventListener(mi, g), () => P.removeEventListener(mi, g);
  }, [h, e.onSelect, e.disabled]);
  function g() {
    var P, T;
    v(), (T = (P = l.current).onSelect) == null || T.call(P, d.current);
  }
  function v() {
    u.setState("value", d.current, !0);
  }
  if (!h) return null;
  let { disabled: y, value: w, onSelect: b, forceMount: x, keywords: S, ...R } = e;
  return f.createElement(Gt.div, { ref: De(s, t), ...R, id: r, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!p, "data-disabled": !!y, "data-selected": !!p, onPointerMove: y || a.getDisablePointerSelection() ? void 0 : v, onClick: y ? void 0 : g }, e.children);
}), QR = f.forwardRef((e, t) => {
  let { heading: n, children: o, forceMount: r, ...s } = e, i = ye(), a = f.useRef(null), l = f.useRef(null), c = ye(), d = Po(), u = Ot((h) => r || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(i) : !0);
  cn(() => d.group(i), []), om(i, a, [e.value, e.heading, l]);
  let p = f.useMemo(() => ({ id: i, forceMount: r }), [r]);
  return f.createElement(Gt.div, { ref: De(a, t), ...s, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && f.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), ss(e, (h) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, f.createElement(em.Provider, { value: p }, h))));
}), JR = f.forwardRef((e, t) => {
  let { alwaysRender: n, ...o } = e, r = f.useRef(null), s = Ot((i) => !i.search);
  return !n && !s ? null : f.createElement(Gt.div, { ref: De(r, t), ...o, "cmdk-separator": "", role: "separator" });
}), eE = f.forwardRef((e, t) => {
  let { onValueChange: n, ...o } = e, r = e.value != null, s = Aa(), i = Ot((c) => c.search), a = Ot((c) => c.selectedItemId), l = Po();
  return f.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), f.createElement(Gt.input, { ref: t, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": a, id: l.inputId, type: "text", value: r ? e.value : i, onChange: (c) => {
    r || s.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), tE = f.forwardRef((e, t) => {
  let { children: n, label: o = "Suggestions", ...r } = e, s = f.useRef(null), i = f.useRef(null), a = Ot((c) => c.selectedItemId), l = Po();
  return f.useEffect(() => {
    if (i.current && s.current) {
      let c = i.current, d = s.current, u, p = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return p.observe(c), () => {
        cancelAnimationFrame(u), p.unobserve(c);
      };
    }
  }, []), f.createElement(Gt.div, { ref: De(s, t), ...r, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": o, id: l.listId }, ss(e, (c) => f.createElement("div", { ref: De(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), nE = f.forwardRef((e, t) => {
  let { open: n, onOpenChange: o, overlayClassName: r, contentClassName: s, container: i, ...a } = e;
  return f.createElement(sp, { open: n, onOpenChange: o }, f.createElement(ip, { container: i }, f.createElement(ha, { "cmdk-overlay": "", className: r }), f.createElement(ma, { "aria-label": e.label, "cmdk-dialog": "", className: s }, f.createElement(tm, { ref: t, ...a }))));
}), oE = f.forwardRef((e, t) => Ot((n) => n.filtered.count === 0) ? f.createElement(Gt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), rE = f.forwardRef((e, t) => {
  let { progress: n, children: o, label: r = "Loading...", ...s } = e;
  return f.createElement(Gt.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": r }, ss(e, (i) => f.createElement("div", { "aria-hidden": !0 }, i)));
}), Fe = Object.assign(tm, { List: tE, Item: ZR, Input: eE, Group: QR, Separator: JR, Dialog: nE, Empty: oE, Loading: rE });
function sE(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function iE(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function nm(e) {
  let t = f.useRef(e);
  return cn(() => {
    t.current = e;
  }), t;
}
var cn = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function wn(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ot(e) {
  let t = Aa(), n = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, n, n);
}
function om(e, t, n, o = []) {
  let r = f.useRef(), s = Po();
  return cn(() => {
    var i;
    let a = (() => {
      var c;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : r.current;
      }
    })(), l = o.map((c) => c.trim());
    s.value(e, a, l), (i = t.current) == null || i.setAttribute(yn, a), r.current = a;
  }), r;
}
var aE = () => {
  let [e, t] = f.useState(), n = wn(() => /* @__PURE__ */ new Map());
  return cn(() => {
    n.current.forEach((o) => o()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (o, r) => {
    n.current.set(o, r), t({});
  };
};
function lE(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ss({ asChild: e, children: t }, n) {
  return e && f.isValidElement(t) ? f.cloneElement(lE(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var cE = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const rm = On({});
function uE(e) {
  const t = Jt(null);
  return t.current === null && (t.current = e()), t.current;
}
const dE = typeof window < "u", fE = dE ? Tu : Xi, _a = /* @__PURE__ */ On(null);
function Da(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Sr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const ht = (e, t, n) => n > t ? t : n < e ? e : n;
function gi(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let zn = () => {
}, St = () => {
};
var Pu;
typeof process < "u" && ((Pu = process.env) == null ? void 0 : Pu.NODE_ENV) !== "production" && (zn = (e, t, n) => {
  !e && typeof console < "u" && console.warn(gi(t, n));
}, St = (e, t, n) => {
  if (!e)
    throw new Error(gi(t, n));
});
const Vt = {}, sm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function im(e) {
  return typeof e == "object" && e !== null;
}
const am = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function lm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ue = /* @__NO_SIDE_EFFECTS__ */ (e) => e, pE = (e, t) => (n) => t(e(n)), To = (...e) => e.reduce(pE), uo = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const o = t - e;
  return o === 0 ? 1 : (n - e) / o;
};
class Ia {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Da(this.subscriptions, t), () => Sr(this.subscriptions, t);
  }
  notify(t, n, o) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1)
        this.subscriptions[0](t, n, o);
      else
        for (let s = 0; s < r; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ve = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, We = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function cm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const rc = /* @__PURE__ */ new Set();
function Na(e, t, n) {
  e || rc.has(t) || (console.warn(gi(t, n)), rc.add(t));
}
const um = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, hE = 1e-7, mE = 12;
function gE(e, t, n, o, r) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = um(i, o, r) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > hE && ++a < mE);
  return i;
}
function Mo(e, t, n, o) {
  if (e === t && n === o)
    return Ue;
  const r = (s) => gE(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : um(r(s), t, o);
}
const dm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, fm = (e) => (t) => 1 - e(1 - t), pm = /* @__PURE__ */ Mo(0.33, 1.53, 0.69, 0.99), ka = /* @__PURE__ */ fm(pm), hm = /* @__PURE__ */ dm(ka), mm = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * ka(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Oa = (e) => 1 - Math.sin(Math.acos(e)), gm = fm(Oa), vm = dm(Oa), vE = /* @__PURE__ */ Mo(0.42, 0, 1, 1), yE = /* @__PURE__ */ Mo(0, 0, 0.58, 1), ym = /* @__PURE__ */ Mo(0.42, 0, 0.58, 1), wE = (e) => Array.isArray(e) && typeof e[0] != "number", wm = (e) => Array.isArray(e) && typeof e[0] == "number", sc = {
  linear: Ue,
  easeIn: vE,
  easeInOut: ym,
  easeOut: yE,
  circIn: Oa,
  circInOut: vm,
  circOut: gm,
  backIn: ka,
  backInOut: hm,
  backOut: pm,
  anticipate: mm
}, bE = (e) => typeof e == "string", ic = (e) => {
  if (wm(e)) {
    St(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, o, r] = e;
    return Mo(t, n, o, r);
  } else if (bE(e))
    return St(sc[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), sc[e];
  return e;
}, jo = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function xE(e, t) {
  let n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(d) {
    i.has(d) && (c.schedule(d), e()), d(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (d, u = !1, p = !1) => {
      const g = p && r ? n : o;
      return u && i.add(d), g.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      o.delete(d), i.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, r) {
        s = !0;
        return;
      }
      r = !0;
      const u = n;
      n = o, o = u, n.forEach(l), n.clear(), r = !1, s && (s = !1, c.process(d));
    }
  };
  return c;
}
const SE = 40;
function bm(e, t) {
  let n = !1, o = !0;
  const r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = jo.reduce((x, S) => (x[S] = xE(s), x), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: d, update: u, preRender: p, render: h, postRender: g } = i, v = () => {
    const x = Vt.useManualTiming, S = x ? r.timestamp : performance.now();
    n = !1, x || (r.delta = o ? 1e3 / 60 : Math.max(Math.min(S - r.timestamp, SE), 1)), r.timestamp = S, r.isProcessing = !0, a.process(r), l.process(r), c.process(r), d.process(r), u.process(r), p.process(r), h.process(r), g.process(r), r.isProcessing = !1, n && t && (o = !1, e(v));
  }, y = () => {
    n = !0, o = !0, r.isProcessing || e(v);
  };
  return { schedule: jo.reduce((x, S) => {
    const R = i[S];
    return x[S] = (P, T = !1, E = !1) => (n || y(), R.schedule(P, T, E)), x;
  }, {}), cancel: (x) => {
    for (let S = 0; S < jo.length; S++)
      i[jo[S]].cancel(x);
  }, state: r, steps: i };
}
const { schedule: ue, cancel: Ft, state: Se, steps: Ms } = /* @__PURE__ */ bm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let tr;
function CE() {
  tr = void 0;
}
const Ae = {
  now: () => (tr === void 0 && Ae.set(Se.isProcessing || Vt.useManualTiming ? Se.timestamp : performance.now()), tr),
  set: (e) => {
    tr = e, queueMicrotask(CE);
  }
}, xm = (e) => (t) => typeof t == "string" && t.startsWith(e), Sm = /* @__PURE__ */ xm("--"), RE = /* @__PURE__ */ xm("var(--"), Va = (e) => RE(e) ? EE.test(e.split("/*")[0].trim()) : !1, EE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ac(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Hn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, fo = {
  ...Hn,
  transform: (e) => ht(0, 1, e)
}, Wo = {
  ...Hn,
  default: 1
}, Jn = (e) => Math.round(e * 1e5) / 1e5, Fa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function PE(e) {
  return e == null;
}
const TE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, La = (e, t) => (n) => !!(typeof n == "string" && TE.test(n) && n.startsWith(e) || t && !PE(n) && Object.prototype.hasOwnProperty.call(n, t)), Cm = (e, t, n) => (o) => {
  if (typeof o != "string")
    return o;
  const [r, s, i, a] = o.match(Fa);
  return {
    [e]: parseFloat(r),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ME = (e) => ht(0, 255, e), As = {
  ...Hn,
  transform: (e) => Math.round(ME(e))
}, en = {
  test: /* @__PURE__ */ La("rgb", "red"),
  parse: /* @__PURE__ */ Cm("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: o = 1 }) => "rgba(" + As.transform(e) + ", " + As.transform(t) + ", " + As.transform(n) + ", " + Jn(fo.transform(o)) + ")"
};
function AE(e) {
  let t = "", n = "", o = "", r = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), o = e.substring(5, 7), r = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), o = e.substring(3, 4), r = e.substring(4, 5), t += t, n += n, o += o, r += r), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(o, 16),
    alpha: r ? parseInt(r, 16) / 255 : 1
  };
}
const vi = {
  test: /* @__PURE__ */ La("#"),
  parse: AE,
  transform: en.transform
}, Ao = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), At = /* @__PURE__ */ Ao("deg"), ft = /* @__PURE__ */ Ao("%"), Z = /* @__PURE__ */ Ao("px"), _E = /* @__PURE__ */ Ao("vh"), DE = /* @__PURE__ */ Ao("vw"), lc = {
  ...ft,
  parse: (e) => ft.parse(e) / 100,
  transform: (e) => ft.transform(e * 100)
}, xn = {
  test: /* @__PURE__ */ La("hsl", "hue"),
  parse: /* @__PURE__ */ Cm("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + ft.transform(Jn(t)) + ", " + ft.transform(Jn(n)) + ", " + Jn(fo.transform(o)) + ")"
}, pe = {
  test: (e) => en.test(e) || vi.test(e) || xn.test(e),
  parse: (e) => en.test(e) ? en.parse(e) : xn.test(e) ? xn.parse(e) : vi.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? en.transform(e) : xn.transform(e),
  getAnimatableNone: (e) => {
    const t = pe.parse(e);
    return t.alpha = 0, pe.transform(t);
  }
}, IE = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function NE(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Fa)) == null ? void 0 : t.length) || 0) + (((n = e.match(IE)) == null ? void 0 : n.length) || 0) > 0;
}
const Rm = "number", Em = "color", kE = "var", OE = "var(", cc = "${}", VE = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nn(e) {
  const t = e.toString(), n = [], o = {
    color: [],
    number: [],
    var: []
  }, r = [];
  let s = 0;
  const a = t.replace(VE, (l) => (pe.test(l) ? (o.color.push(s), r.push(Em), n.push(pe.parse(l))) : l.startsWith(OE) ? (o.var.push(s), r.push(kE), n.push(l)) : (o.number.push(s), r.push(Rm), n.push(parseFloat(l))), ++s, cc)).split(cc);
  return { values: n, split: a, indexes: o, types: r };
}
function FE(e) {
  return Nn(e).values;
}
function Pm({ split: e, types: t }) {
  const n = e.length;
  return (o) => {
    let r = "";
    for (let s = 0; s < n; s++)
      if (r += e[s], o[s] !== void 0) {
        const i = t[s];
        i === Rm ? r += Jn(o[s]) : i === Em ? r += pe.transform(o[s]) : r += o[s];
      }
    return r;
  };
}
function LE(e) {
  return Pm(Nn(e));
}
const $E = (e) => typeof e == "number" ? 0 : pe.test(e) ? pe.getAnimatableNone(e) : e, BE = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : $E(e);
function zE(e) {
  const t = Nn(e);
  return Pm(t)(t.values.map((o, r) => BE(o, t.split[r])));
}
const et = {
  test: NE,
  parse: FE,
  createTransformer: LE,
  getAnimatableNone: zE
};
function _s(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function HE({ hue: e, saturation: t, lightness: n, alpha: o }) {
  e /= 360, t /= 100, n /= 100;
  let r = 0, s = 0, i = 0;
  if (!t)
    r = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = _s(l, a, e + 1 / 3), s = _s(l, a, e), i = _s(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: o
  };
}
function Cr(e, t) {
  return (n) => n > 0 ? t : e;
}
const de = (e, t, n) => e + (t - e) * n, Ds = (e, t, n) => {
  const o = e * e, r = n * (t * t - o) + o;
  return r < 0 ? 0 : Math.sqrt(r);
}, jE = [vi, en, xn], WE = (e) => jE.find((t) => t.test(e));
function uc(e) {
  const t = WE(e);
  if (zn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === xn && (n = HE(n)), n;
}
const dc = (e, t) => {
  const n = uc(e), o = uc(t);
  if (!n || !o)
    return Cr(e, t);
  const r = { ...n };
  return (s) => (r.red = Ds(n.red, o.red, s), r.green = Ds(n.green, o.green, s), r.blue = Ds(n.blue, o.blue, s), r.alpha = de(n.alpha, o.alpha, s), en.transform(r));
}, yi = /* @__PURE__ */ new Set(["none", "hidden"]);
function GE(e, t) {
  return yi.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function UE(e, t) {
  return (n) => de(e, t, n);
}
function $a(e) {
  return typeof e == "number" ? UE : typeof e == "string" ? Va(e) ? Cr : pe.test(e) ? dc : XE : Array.isArray(e) ? Tm : typeof e == "object" ? pe.test(e) ? dc : KE : Cr;
}
function Tm(e, t) {
  const n = [...e], o = n.length, r = e.map((s, i) => $a(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < o; i++)
      n[i] = r[i](s);
    return n;
  };
}
function KE(e, t) {
  const n = { ...e, ...t }, o = {};
  for (const r in n)
    e[r] !== void 0 && t[r] !== void 0 && (o[r] = $a(e[r])(e[r], t[r]));
  return (r) => {
    for (const s in o)
      n[s] = o[s](r);
    return n;
  };
}
function YE(e, t) {
  const n = [], o = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < t.values.length; r++) {
    const s = t.types[r], i = e.indexes[s][o[s]], a = e.values[i] ?? 0;
    n[r] = a, o[s]++;
  }
  return n;
}
const XE = (e, t) => {
  const n = et.createTransformer(t), o = Nn(e), r = Nn(t);
  return o.indexes.var.length === r.indexes.var.length && o.indexes.color.length === r.indexes.color.length && o.indexes.number.length >= r.indexes.number.length ? yi.has(e) && !r.values.length || yi.has(t) && !o.values.length ? GE(e, t) : To(Tm(YE(o, r), r.values), n) : (zn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Cr(e, t));
};
function Mm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? de(e, t, n) : $a(e)(e, t);
}
const qE = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ue.update(t, n),
    stop: () => Ft(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Se.isProcessing ? Se.timestamp : Ae.now()
  };
}, Am = (e, t, n = 10) => {
  let o = "";
  const r = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < r; s++)
    o += Math.round(e(s / (r - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, Rr = 2e4;
function Ba(e) {
  let t = 0;
  const n = 50;
  let o = e.next(t);
  for (; !o.done && t < Rr; )
    t += n, o = e.next(t);
  return t >= Rr ? 1 / 0 : t;
}
function ZE(e, t = 100, n) {
  const o = n({ ...e, keyframes: [0, t] }), r = Math.min(Ba(o), Rr);
  return {
    type: "keyframes",
    ease: (s) => o.next(r * s).value / t,
    duration: /* @__PURE__ */ We(r)
  };
}
const fe = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function wi(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const QE = 12;
function JE(e, t, n) {
  let o = n;
  for (let r = 1; r < QE; r++)
    o = o - e(o) / t(o);
  return o;
}
const Is = 1e-3;
function eP({ duration: e = fe.duration, bounce: t = fe.bounce, velocity: n = fe.velocity, mass: o = fe.mass }) {
  let r, s;
  zn(e <= /* @__PURE__ */ Ve(fe.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let i = 1 - t;
  i = ht(fe.minDamping, fe.maxDamping, i), e = ht(fe.minDuration, fe.maxDuration, /* @__PURE__ */ We(e)), i < 1 ? (r = (c) => {
    const d = c * i, u = d * e, p = d - n, h = wi(c, i), g = Math.exp(-u);
    return Is - p / h * g;
  }, s = (c) => {
    const u = c * i * e, p = u * n + n, h = Math.pow(i, 2) * Math.pow(c, 2) * e, g = Math.exp(-u), v = wi(Math.pow(c, 2), i);
    return (-r(c) + Is > 0 ? -1 : 1) * ((p - h) * g) / v;
  }) : (r = (c) => {
    const d = Math.exp(-c * e), u = (c - n) * e + 1;
    return -Is + d * u;
  }, s = (c) => {
    const d = Math.exp(-c * e), u = (n - c) * (e * e);
    return d * u;
  });
  const a = 5 / e, l = JE(r, s, a);
  if (e = /* @__PURE__ */ Ve(e), isNaN(l))
    return {
      stiffness: fe.stiffness,
      damping: fe.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * o;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(o * c),
      duration: e
    };
  }
}
const tP = ["duration", "bounce"], nP = ["stiffness", "damping", "mass"];
function fc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function oP(e) {
  let t = {
    velocity: fe.velocity,
    stiffness: fe.stiffness,
    damping: fe.damping,
    mass: fe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!fc(e, nP) && fc(e, tP))
    if (t.velocity = 0, e.visualDuration) {
      const n = e.visualDuration, o = 2 * Math.PI / (n * 1.2), r = o * o, s = 2 * ht(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
      t = {
        ...t,
        mass: fe.mass,
        stiffness: r,
        damping: s
      };
    } else {
      const n = eP({ ...e, velocity: 0 });
      t = {
        ...t,
        ...n,
        mass: fe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Er(e = fe.visualDuration, t = fe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: o, restDelta: r } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: d, duration: u, velocity: p, isResolvedFromDuration: h } = oP({
    ...n,
    velocity: -/* @__PURE__ */ We(n.velocity || 0)
  }), g = p || 0, v = c / (2 * Math.sqrt(l * d)), y = i - s, w = /* @__PURE__ */ We(Math.sqrt(l / d)), b = Math.abs(y) < 5;
  o || (o = b ? fe.restSpeed.granular : fe.restSpeed.default), r || (r = b ? fe.restDelta.granular : fe.restDelta.default);
  let x, S, R, P, T, E;
  if (v < 1)
    R = wi(w, v), P = (g + v * w * y) / R, x = (D) => {
      const H = Math.exp(-v * w * D);
      return i - H * (P * Math.sin(R * D) + y * Math.cos(R * D));
    }, T = v * w * P + y * R, E = v * w * y - P * R, S = (D) => Math.exp(-v * w * D) * (T * Math.sin(R * D) + E * Math.cos(R * D));
  else if (v === 1) {
    x = (H) => i - Math.exp(-w * H) * (y + (g + w * y) * H);
    const D = g + w * y;
    S = (H) => Math.exp(-w * H) * (w * D * H - g);
  } else {
    const D = w * Math.sqrt(v * v - 1);
    x = (K) => {
      const J = Math.exp(-v * w * K), I = Math.min(D * K, 300);
      return i - J * ((g + v * w * y) * Math.sinh(I) + D * y * Math.cosh(I)) / D;
    };
    const H = (g + v * w * y) / D, B = v * w * H - y * D, Y = v * w * y - H * D;
    S = (K) => {
      const J = Math.exp(-v * w * K), I = Math.min(D * K, 300);
      return J * (B * Math.sinh(I) + Y * Math.cosh(I));
    };
  }
  const N = {
    calculatedDuration: h && u || null,
    velocity: (D) => /* @__PURE__ */ Ve(S(D)),
    next: (D) => {
      if (!h && v < 1) {
        const B = Math.exp(-v * w * D), Y = Math.sin(R * D), K = Math.cos(R * D), J = i - B * (P * Y + y * K), I = /* @__PURE__ */ Ve(B * (T * Y + E * K));
        return a.done = Math.abs(I) <= o && Math.abs(i - J) <= r, a.value = a.done ? i : J, a;
      }
      const H = x(D);
      if (h)
        a.done = D >= u;
      else {
        const B = /* @__PURE__ */ Ve(S(D));
        a.done = Math.abs(B) <= o && Math.abs(i - H) <= r;
      }
      return a.value = a.done ? i : H, a;
    },
    toString: () => {
      const D = Math.min(Ba(N), Rr), H = Am((B) => N.next(D * B).value, D, 30);
      return D + "ms " + H;
    },
    toTransition: () => {
    }
  };
  return N;
}
Er.applyToOptions = (e) => {
  const t = ZE(e, 100, Er);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Ve(t.duration), e.type = "keyframes", e;
};
const rP = 5;
function _m(e, t, n) {
  const o = Math.max(t - rP, 0);
  return cm(n - e(o), t - o);
}
function bi({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: o = 325, bounceDamping: r = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: d }) {
  const u = e[0], p = {
    done: !1,
    value: u
  }, h = (E) => a !== void 0 && E < a || l !== void 0 && E > l, g = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let v = n * t;
  const y = u + v, w = i === void 0 ? y : i(y);
  w !== y && (v = w - u);
  const b = (E) => -v * Math.exp(-E / o), x = (E) => w + b(E), S = (E) => {
    const N = b(E), D = x(E);
    p.done = Math.abs(N) <= c, p.value = p.done ? w : D;
  };
  let R, P;
  const T = (E) => {
    h(p.value) && (R = E, P = Er({
      keyframes: [p.value, g(p.value)],
      velocity: _m(x, E, p.value),
      // TODO: This should be passing * 1000
      damping: r,
      stiffness: s,
      restDelta: c,
      restSpeed: d
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (E) => {
      let N = !1;
      return !P && R === void 0 && (N = !0, S(E), T(E)), R !== void 0 && E >= R ? P.next(E - R) : (!N && S(E), p);
    }
  };
}
function sP(e, t, n) {
  const o = [], r = n || Vt.mix || Mm, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = r(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || Ue : t;
      a = To(l, a);
    }
    o.push(a);
  }
  return o;
}
function iP(e, t, { clamp: n = !0, ease: o, mixer: r } = {}) {
  const s = e.length;
  if (St(s === t.length, "Both input and output ranges must be the same length", "range-length"), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = sP(t, o, r), l = a.length, c = (d) => {
    if (i && d < e[0])
      return t[0];
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const p = /* @__PURE__ */ uo(e[u], e[u + 1], d);
    return a[u](p);
  };
  return n ? (d) => c(ht(e[0], e[s - 1], d)) : c;
}
function aP(e, t) {
  const n = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const r = /* @__PURE__ */ uo(0, t, o);
    e.push(de(n, 1, r));
  }
}
function lP(e) {
  const t = [0];
  return aP(t, e.length - 1), t;
}
function cP(e, t) {
  return e.map((n) => n * t);
}
function uP(e, t) {
  return e.map(() => t || ym).splice(0, e.length - 1);
}
function Sn({ duration: e = 300, keyframes: t, times: n, ease: o = "easeInOut" }) {
  const r = wE(o) ? o.map(ic) : ic(o), s = {
    done: !1,
    value: t[0]
  }, i = cP(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : lP(t),
    e
  ), a = iP(i, t, {
    ease: Array.isArray(r) ? r : uP(t, r)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const dP = (e) => e !== null;
function is(e, { repeat: t, repeatType: n = "loop" }, o, r = 1) {
  const s = e.filter(dP), a = r < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !a || o === void 0 ? s[a] : o;
}
const fP = {
  decay: bi,
  inertia: bi,
  tween: Sn,
  keyframes: Sn,
  spring: Er
};
function Dm(e) {
  typeof e.type == "string" && (e.type = fP[e.type]);
}
class za {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const pP = (e) => e / 100;
class Pr extends za {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var o, r;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ae.now() && this.tick(Ae.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (r = (o = this.options).onStop) == null || r.call(o));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Dm(t);
    const { type: n = Sn, repeat: o = 0, repeatDelay: r = 0, repeatType: s, velocity: i = 0 } = t;
    let { keyframes: a } = t;
    const l = n || Sn;
    process.env.NODE_ENV !== "production" && l !== Sn && St(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== Sn && typeof a[0] != "number" && (this.mixKeyframes = To(pP, Mm(a[0], a[1])), a = [0, 100]);
    const c = l({ ...t, keyframes: a });
    s === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = Ba(c));
    const { calculatedDuration: d } = c;
    this.calculatedDuration = d, this.resolvedDuration = d + r, this.totalDuration = this.resolvedDuration * (o + 1) - r, this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: o, totalDuration: r, mixKeyframes: s, mirroredGenerator: i, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: c = 0, keyframes: d, repeat: u, repeatType: p, repeatDelay: h, type: g, onUpdate: v, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - r / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const w = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? w < 0 : w > r;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
    let x = this.currentTime, S = o;
    if (u) {
      const E = Math.min(this.currentTime, r) / a;
      let N = Math.floor(E), D = E % 1;
      !D && E >= 1 && (D = 1), D === 1 && N--, N = Math.min(N, u + 1), !!(N % 2) && (p === "reverse" ? (D = 1 - D, h && (D -= h / a)) : p === "mirror" && (S = i)), x = ht(0, 1, D) * a;
    }
    let R;
    b ? (this.delayState.value = d[0], R = this.delayState) : R = S.next(x), s && !b && (R.value = s(R.value));
    let { done: P } = R;
    !b && l !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
    const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return T && g !== bi && (R.value = is(d, this.options, y, this.speed)), v && v(R.value), T && this.finish(), R;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ We(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ We(t);
  }
  get time() {
    return /* @__PURE__ */ We(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ve(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return _m((o) => this.generator.next(o).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(Ae.now()), this.playbackSpeed = t, n && this.driver && (this.time = /* @__PURE__ */ We(this.currentTime));
  }
  play() {
    var r, s;
    if (this.isStopped)
      return;
    const { driver: t = qE, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), (s = (r = this.options).onPlay) == null || s.call(r);
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = n ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ae.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var t, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this);
  }
}
function hP(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const tn = (e) => e * 180 / Math.PI, xi = (e) => {
  const t = tn(Math.atan2(e[1], e[0]));
  return Si(t);
}, mP = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: xi,
  rotateZ: xi,
  skewX: (e) => tn(Math.atan(e[1])),
  skewY: (e) => tn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Si = (e) => (e = e % 360, e < 0 && (e += 360), e), pc = xi, hc = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), mc = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), gP = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: hc,
  scaleY: mc,
  scale: (e) => (hc(e) + mc(e)) / 2,
  rotateX: (e) => Si(tn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Si(tn(Math.atan2(-e[2], e[0]))),
  rotateZ: pc,
  rotate: pc,
  skewX: (e) => tn(Math.atan(e[4])),
  skewY: (e) => tn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ci(e) {
  return e.includes("scale") ? 1 : 0;
}
function Ri(e, t) {
  if (!e || e === "none")
    return Ci(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, r;
  if (n)
    o = gP, r = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = mP, r = a;
  }
  if (!r)
    return Ci(t);
  const s = o[t], i = r[1].split(",").map(yP);
  return typeof s == "function" ? s(i) : i[s];
}
const vP = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Ri(n, t);
};
function yP(e) {
  return parseFloat(e.trim());
}
const jn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Wn = new Set(jn), gc = (e) => e === Hn || e === Z, wP = /* @__PURE__ */ new Set(["x", "y", "z"]), bP = jn.filter((e) => !wP.has(e));
function xP(e) {
  const t = [];
  return bP.forEach((n) => {
    const o = e.getValue(n);
    o !== void 0 && (t.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Dt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: o }) => {
    const r = e.max - e.min;
    return o === "border-box" ? r : r - parseFloat(t) - parseFloat(n);
  },
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: o }) => {
    const r = e.max - e.min;
    return o === "border-box" ? r : r - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Ri(t, "x"),
  y: (e, { transform: t }) => Ri(t, "y")
};
Dt.translateX = Dt.x;
Dt.translateY = Dt.y;
const nn = /* @__PURE__ */ new Set();
let Ei = !1, Pi = !1, Ti = !1;
function Im() {
  if (Pi) {
    const e = Array.from(nn).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), n = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const r = xP(o);
      r.length && (n.set(o, r), o.render());
    }), e.forEach((o) => o.measureInitialState()), t.forEach((o) => {
      o.render();
      const r = n.get(o);
      r && r.forEach(([s, i]) => {
        var a;
        (a = o.getValue(s)) == null || a.set(i);
      });
    }), e.forEach((o) => o.measureEndState()), e.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Pi = !1, Ei = !1, nn.forEach((e) => e.complete(Ti)), nn.clear();
}
function Nm() {
  nn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Pi = !0);
  });
}
function SP() {
  Ti = !0, Nm(), Im(), Ti = !1;
}
class Ha {
  constructor(t, n, o, r, s, i = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = o, this.motionValue = r, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (nn.add(this), Ei || (Ei = !0, ue.read(Nm), ue.resolveKeyframes(Im))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: o, motionValue: r } = this;
    if (t[0] === null) {
      const s = r == null ? void 0 : r.get(), i = t[t.length - 1];
      if (s !== void 0)
        t[0] = s;
      else if (o && n) {
        const a = o.readValue(n, i);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = i), r && s === void 0 && r.set(t[0]);
    }
    hP(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), nn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (nn.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const CP = (e) => e.startsWith("--");
function km(e, t, n) {
  CP(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const RP = {};
function Om(e, t) {
  const n = /* @__PURE__ */ lm(e);
  return () => RP[t] ?? n();
}
const EP = /* @__PURE__ */ Om(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Vm = /* @__PURE__ */ Om(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Zn = ([e, t, n, o]) => `cubic-bezier(${e}, ${t}, ${n}, ${o})`, vc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Zn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Zn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Zn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Zn([0.33, 1.53, 0.69, 0.99])
};
function Fm(e, t) {
  if (e)
    return typeof e == "function" ? Vm() ? Am(e, t) : "ease-out" : wm(e) ? Zn(e) : Array.isArray(e) ? e.map((n) => Fm(n, t) || vc.easeOut) : vc[e];
}
function PP(e, t, n, { delay: o = 0, duration: r = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const d = {
    [t]: n
  };
  l && (d.offset = l);
  const u = Fm(a, r);
  Array.isArray(u) && (d.easing = u);
  const p = {
    delay: o,
    duration: r,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  };
  return c && (p.pseudoElement = c), e.animate(d, p);
}
function Lm(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function TP({ type: e, ...t }) {
  return Lm(e) && Vm() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class $m extends za {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: n, name: o, keyframes: r, pseudoElement: s, allowFlatten: i = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!s, this.allowFlatten = i, this.options = t, St(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const c = TP(t);
    this.animation = PP(n, o, r, c, s), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        const d = is(r, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(d), km(n, o, d), this.animation.cancel();
      }
      l == null || l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var n, o, r;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement && (t != null && t.isConnected) && ((r = (o = this.animation).commitStyles) == null || r.call(o));
  }
  get duration() {
    var n, o;
    const t = ((o = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : o.call(n).duration) || 0;
    return /* @__PURE__ */ We(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ We(t);
  }
  get time() {
    return /* @__PURE__ */ We(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ve(t), n && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: o, observe: r }) {
    var s;
    return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && EP() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), o && (this.animation.rangeEnd = o), Ue) : r(this);
  }
}
const Bm = {
  anticipate: mm,
  backInOut: hm,
  circInOut: vm
};
function MP(e) {
  return e in Bm;
}
function AP(e) {
  typeof e.ease == "string" && MP(e.ease) && (e.ease = Bm[e.ease]);
}
const Ns = 10;
class _P extends $m {
  constructor(t) {
    AP(t), Dm(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: o, onComplete: r, element: s, ...i } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Pr({
      ...i,
      autoplay: !1
    }), l = Math.max(Ns, Ae.now() - this.startTime), c = ht(0, Ns, l - Ns), d = a.sample(l).value, { name: u } = this.options;
    s && u && km(s, u, d), n.setWithVelocity(a.sample(Math.max(0, l - c)).value, d, c), a.stop();
  }
}
const yc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(et.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function DP(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function IP(e, t, n, o) {
  const r = e[0];
  if (r === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = yc(r, t), a = yc(s, t);
  return zn(i === a, `You are trying to animate ${t} from "${r}" to "${s}". "${i ? s : r}" is not an animatable value.`, "value-not-animatable"), !i || !a ? !1 : DP(e) || (n === "spring" || Lm(n)) && o;
}
function Mi(e) {
  e.duration = 0, e.type = "keyframes";
}
const zm = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), NP = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function kP(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && NP.test(e[t]))
      return !0;
  return !1;
}
const OP = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), VP = /* @__PURE__ */ lm(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function FP(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: o, repeatType: r, damping: s, type: i, keyframes: a } = e;
  if (!(((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return VP() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (zm.has(n) || OP.has(n) && kP(a)) && (n !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !o && r !== "mirror" && s !== 0 && i !== "inertia";
}
const LP = 40;
class $P extends za {
  constructor({ autoplay: t = !0, delay: n = 0, type: o = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: i = "loop", keyframes: a, name: l, motionValue: c, element: d, ...u }) {
    var g;
    super(), this.stop = () => {
      var v, y;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = Ae.now();
    const p = {
      autoplay: t,
      delay: n,
      type: o,
      repeat: r,
      repeatDelay: s,
      repeatType: i,
      name: l,
      motionValue: c,
      element: d,
      ...u
    }, h = (d == null ? void 0 : d.KeyframeResolver) || Ha;
    this.keyframeResolver = new h(a, (v, y, w) => this.onKeyframesResolved(v, y, p, !w), l, c, d), (g = this.keyframeResolver) == null || g.scheduleResolve();
  }
  onKeyframesResolved(t, n, o, r) {
    var w, b;
    this.keyframeResolver = void 0;
    const { name: s, type: i, velocity: a, delay: l, isHandoff: c, onUpdate: d } = o;
    this.resolvedAt = Ae.now();
    let u = !0;
    IP(t, s, i, a) || (u = !1, (Vt.instantAnimations || !l) && (d == null || d(is(t, o, n))), t[0] = t[t.length - 1], Mi(o), o.repeat = 0);
    const h = {
      startTime: r ? this.resolvedAt ? this.resolvedAt - this.createdAt > LP ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...o,
      keyframes: t
    }, g = u && !c && FP(h), v = (b = (w = h.motionValue) == null ? void 0 : w.owner) == null ? void 0 : b.current;
    let y;
    if (g)
      try {
        y = new _P({
          ...h,
          element: v
        });
      } catch {
        y = new Pr(h);
      }
    else
      y = new Pr(h);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(Ue), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    var t;
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), SP()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel();
  }
}
function Hm(e, t, n, o = 0, r = 1) {
  const s = Array.from(e).sort((c, d) => c.sortNodePosition(d)).indexOf(t), i = e.size, a = (i - 1) * o;
  return typeof n == "function" ? n(s, i) : r === 1 ? s * o : a - s * o;
}
const BP = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function zP(e) {
  const t = BP.exec(e);
  if (!t)
    return [,];
  const [, n, o, r] = t;
  return [`--${n ?? o}`, r];
}
const HP = 4;
function jm(e, t, n = 1) {
  St(n <= HP, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [o, r] = zP(e);
  if (!o)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(o);
  if (s) {
    const i = s.trim();
    return sm(i) ? parseFloat(i) : i;
  }
  return Va(r) ? jm(r, t, n + 1) : r;
}
const jP = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, WP = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), GP = {
  type: "keyframes",
  duration: 0.8
}, UP = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, KP = (e, { keyframes: t }) => t.length > 2 ? GP : Wn.has(e) ? e.startsWith("scale") ? WP(t[1]) : jP : UP;
function Wm(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...o } = e;
    return { ...t, ...o };
  }
  return e;
}
function ja(e, t) {
  const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? Wm(n, e) : n;
}
const YP = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function XP(e) {
  for (const t in e)
    if (!YP.has(t))
      return !0;
  return !1;
}
const Wa = (e, t, n, o = {}, r, s) => (i) => {
  const a = ja(o, e) || {}, l = a.delay || o.delay || 0;
  let { elapsed: c = 0 } = o;
  c = c - /* @__PURE__ */ Ve(l);
  const d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (p) => {
      t.set(p), a.onUpdate && a.onUpdate(p);
    },
    onComplete: () => {
      i(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : r
  };
  XP(a) || Object.assign(d, KP(e, d)), d.duration && (d.duration = /* @__PURE__ */ Ve(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ Ve(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Mi(d), d.delay === 0 && (u = !0)), (Vt.instantAnimations || Vt.skipAnimations || r != null && r.shouldSkipAnimations) && (u = !0, Mi(d), d.delay = 0), d.allowFlatten = !a.type && !a.ease, u && !s && t.get() !== void 0) {
    const p = is(d.keyframes, a);
    if (p !== void 0) {
      ue.update(() => {
        d.onUpdate(p), d.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Pr(d) : new $P(d);
};
function wc(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, o) => {
    t[0][o] = n.get(), t[1][o] = n.getVelocity();
  }), t;
}
function Ga(e, t, n, o) {
  if (typeof t == "function") {
    const [r, s] = wc(o);
    t = t(n !== void 0 ? n : e.custom, r, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [r, s] = wc(o);
    t = t(n !== void 0 ? n : e.custom, r, s);
  }
  return t;
}
function on(e, t, n) {
  const o = e.getProps();
  return Ga(o, t, n !== void 0 ? n : o.custom, e);
}
const Gm = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...jn
]), bc = 30, qP = (e) => !isNaN(parseFloat(e));
class ZP {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      var s;
      const r = Ae.now();
      if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current), this.dependents))
        for (const i of this.dependents)
          i.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ae.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = qP(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Na(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ia());
    const o = this.events[t].add(n);
    return t === "change" ? () => {
      o(), ue.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, o) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Ae.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > bc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, bc);
    return cm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function kn(e, t) {
  return new ZP(e, t);
}
const Ai = (e) => Array.isArray(e);
function QP(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, kn(n));
}
function JP(e) {
  return Ai(e) ? e[e.length - 1] || 0 : e;
}
function eT(e, t) {
  const n = on(e, t);
  let { transitionEnd: o = {}, transition: r = {}, ...s } = n || {};
  s = { ...s, ...o };
  for (const i in s) {
    const a = JP(s[i]);
    QP(e, i, a);
  }
}
const Ce = (e) => !!(e && e.getVelocity);
function tT(e) {
  return !!(Ce(e) && e.add);
}
function _i(e, t) {
  const n = e.getValue("willChange");
  if (tT(n))
    return n.add(t);
  if (!n && Vt.WillChange) {
    const o = new Vt.WillChange("auto");
    e.addValue("willChange", o), o.add(t);
  }
}
function Ua(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const nT = "framerAppearId", Um = "data-" + Ua(nT);
function Km(e) {
  return e.props[Um];
}
function oT({ protectedKeys: e, needsAnimating: t }, n) {
  const o = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, o;
}
function Ym(e, t, { delay: n = 0, transitionOverride: o, type: r } = {}) {
  let { transition: s, transitionEnd: i, ...a } = t;
  const l = e.getDefaultTransition();
  s = s ? Wm(s, l) : l;
  const c = s == null ? void 0 : s.reduceMotion;
  o && (s = o);
  const d = [], u = r && e.animationState && e.animationState.getState()[r];
  for (const p in a) {
    const h = e.getValue(p, e.latestValues[p] ?? null), g = a[p];
    if (g === void 0 || u && oT(u, p))
      continue;
    const v = {
      delay: n,
      ...ja(s || {}, p)
    }, y = h.get();
    if (y !== void 0 && !h.isAnimating() && !Array.isArray(g) && g === y && !v.velocity) {
      ue.update(() => h.set(g));
      continue;
    }
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const S = Km(e);
      if (S) {
        const R = window.MotionHandoffAnimation(S, p, ue);
        R !== null && (v.startTime = R, w = !0);
      }
    }
    _i(e, p);
    const b = c ?? e.shouldReduceMotion;
    h.start(Wa(p, h, g, b && Gm.has(p) ? { type: !1 } : v, e, w));
    const x = h.animation;
    x && d.push(x);
  }
  if (i) {
    const p = () => ue.update(() => {
      i && eT(e, i);
    });
    d.length ? Promise.all(d).then(p) : p();
  }
  return d;
}
function Di(e, t, n = {}) {
  var l;
  const o = on(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: r = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (r = n.transitionOverride);
  const s = o ? () => Promise.all(Ym(e, o, n)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: p } = r;
    return rT(e, t, c, d, u, p, n);
  } : () => Promise.resolve(), { when: a } = r;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [s, i] : [i, s];
    return c().then(() => d());
  } else
    return Promise.all([s(), i(n.delay)]);
}
function rT(e, t, n = 0, o = 0, r = 0, s = 1, i) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(Di(l, t, {
      ...i,
      delay: n + (typeof o == "function" ? 0 : o) + Hm(e.variantChildren, l, o, r, s)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function sT(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const r = t.map((s) => Di(e, s, n));
    o = Promise.all(r);
  } else if (typeof t == "string")
    o = Di(e, t, n);
  else {
    const r = typeof t == "function" ? on(e, t, n.custom) : t;
    o = Promise.all(Ym(e, r, n));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const iT = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Xm = (e) => (t) => t.test(e), qm = [Hn, Z, ft, At, DE, _E, iT], xc = (e) => qm.find(Xm(e));
function aT(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || am(e) : !0;
}
const lT = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function cT(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = n.match(Fa) || [];
  if (!o)
    return e;
  const r = n.replace(o, "");
  let s = lT.has(t) ? 1 : 0;
  return o !== n && (s *= 100), t + "(" + s + r + ")";
}
const uT = /\b([a-z-]*)\(.*?\)/gu, Ii = {
  ...et,
  getAnimatableNone: (e) => {
    const t = e.match(uT);
    return t ? t.map(cT).join(" ") : e;
  }
}, Ni = {
  ...et,
  getAnimatableNone: (e) => {
    const t = et.parse(e);
    return et.createTransformer(e)(t.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, Sc = {
  ...Hn,
  transform: Math.round
}, dT = {
  rotate: At,
  rotateX: At,
  rotateY: At,
  rotateZ: At,
  scale: Wo,
  scaleX: Wo,
  scaleY: Wo,
  scaleZ: Wo,
  skew: At,
  skewX: At,
  skewY: At,
  distance: Z,
  translateX: Z,
  translateY: Z,
  translateZ: Z,
  x: Z,
  y: Z,
  z: Z,
  perspective: Z,
  transformPerspective: Z,
  opacity: fo,
  originX: lc,
  originY: lc,
  originZ: Z
}, Ka = {
  // Border props
  borderWidth: Z,
  borderTopWidth: Z,
  borderRightWidth: Z,
  borderBottomWidth: Z,
  borderLeftWidth: Z,
  borderRadius: Z,
  borderTopLeftRadius: Z,
  borderTopRightRadius: Z,
  borderBottomRightRadius: Z,
  borderBottomLeftRadius: Z,
  // Positioning props
  width: Z,
  maxWidth: Z,
  height: Z,
  maxHeight: Z,
  top: Z,
  right: Z,
  bottom: Z,
  left: Z,
  inset: Z,
  insetBlock: Z,
  insetBlockStart: Z,
  insetBlockEnd: Z,
  insetInline: Z,
  insetInlineStart: Z,
  insetInlineEnd: Z,
  // Spacing props
  padding: Z,
  paddingTop: Z,
  paddingRight: Z,
  paddingBottom: Z,
  paddingLeft: Z,
  paddingBlock: Z,
  paddingBlockStart: Z,
  paddingBlockEnd: Z,
  paddingInline: Z,
  paddingInlineStart: Z,
  paddingInlineEnd: Z,
  margin: Z,
  marginTop: Z,
  marginRight: Z,
  marginBottom: Z,
  marginLeft: Z,
  marginBlock: Z,
  marginBlockStart: Z,
  marginBlockEnd: Z,
  marginInline: Z,
  marginInlineStart: Z,
  marginInlineEnd: Z,
  // Typography
  fontSize: Z,
  // Misc
  backgroundPositionX: Z,
  backgroundPositionY: Z,
  ...dT,
  zIndex: Sc,
  // SVG
  fillOpacity: fo,
  strokeOpacity: fo,
  numOctaves: Sc
}, fT = {
  ...Ka,
  // Color props
  color: pe,
  backgroundColor: pe,
  outlineColor: pe,
  fill: pe,
  stroke: pe,
  // Border props
  borderColor: pe,
  borderTopColor: pe,
  borderRightColor: pe,
  borderBottomColor: pe,
  borderLeftColor: pe,
  filter: Ii,
  WebkitFilter: Ii,
  mask: Ni,
  WebkitMask: Ni
}, Zm = (e) => fT[e], pT = /* @__PURE__ */ new Set([Ii, Ni]);
function Qm(e, t) {
  let n = Zm(e);
  return pT.has(n) || (n = et), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const hT = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function mT(e, t, n) {
  let o = 0, r;
  for (; o < e.length && !r; ) {
    const s = e[o];
    typeof s == "string" && !hT.has(s) && Nn(s).values.length && (r = e[o]), o++;
  }
  if (r && n)
    for (const s of t)
      e[s] = Qm(n, r);
}
class gT extends Ha {
  constructor(t, n, o, r, s) {
    super(t, n, o, r, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: o } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let u = t[d];
      if (typeof u == "string" && (u = u.trim(), Va(u))) {
        const p = jm(u, n.current);
        p !== void 0 && (t[d] = p), d === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Gm.has(o) || t.length !== 2)
      return;
    const [r, s] = t, i = xc(r), a = xc(s), l = ac(r), c = ac(s);
    if (l !== c && Dt[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (i !== a)
      if (gc(i) && gc(a))
        for (let d = 0; d < t.length; d++) {
          const u = t[d];
          typeof u == "string" && (t[d] = parseFloat(u));
        }
      else Dt[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, o = [];
    for (let r = 0; r < t.length; r++)
      (t[r] === null || aT(t[r])) && o.push(r);
    o.length && mT(t, o, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Dt[o](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const r = n[n.length - 1];
    r !== void 0 && t.getValue(o, r).jump(r, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: o } = this;
    if (!t || !t.current)
      return;
    const r = t.getValue(n);
    r && r.jump(this.measuredOrigin, !1);
    const s = o.length - 1, i = o[s];
    o[s] = Dt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, c]) => {
      t.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Jm(e, t, n) {
  if (e == null)
    return [];
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let o = document;
    const r = (n == null ? void 0 : n[e]) ?? o.querySelectorAll(e);
    return r ? Array.from(r) : [];
  }
  return Array.from(e).filter((o) => o != null);
}
const eg = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function vT(e) {
  return im(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Ya } = /* @__PURE__ */ bm(queueMicrotask, !1), Je = {
  x: !1,
  y: !1
};
function tg() {
  return Je.x || Je.y;
}
function yT(e) {
  return e === "x" || e === "y" ? Je[e] ? null : (Je[e] = !0, () => {
    Je[e] = !1;
  }) : Je.x || Je.y ? null : (Je.x = Je.y = !0, () => {
    Je.x = Je.y = !1;
  });
}
function ng(e, t) {
  const n = Jm(e), o = new AbortController(), r = {
    passive: !0,
    ...t,
    signal: o.signal
  };
  return [n, r, () => o.abort()];
}
function wT(e) {
  return !(e.pointerType === "touch" || tg());
}
function bT(e, t, n = {}) {
  const [o, r, s] = ng(e, n);
  return o.forEach((i) => {
    let a = !1, l = !1, c;
    const d = () => {
      i.removeEventListener("pointerleave", g);
    }, u = (y) => {
      c && (c(y), c = void 0), d();
    }, p = (y) => {
      a = !1, window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), l && (l = !1, u(y));
    }, h = () => {
      a = !0, window.addEventListener("pointerup", p, r), window.addEventListener("pointercancel", p, r);
    }, g = (y) => {
      if (y.pointerType !== "touch") {
        if (a) {
          l = !0;
          return;
        }
        u(y);
      }
    }, v = (y) => {
      if (!wT(y))
        return;
      l = !1;
      const w = t(i, y);
      typeof w == "function" && (c = w, i.addEventListener("pointerleave", g, r));
    };
    i.addEventListener("pointerenter", v, r), i.addEventListener("pointerdown", h, r);
  }), s;
}
const og = (e, t) => t ? e === t ? !0 : og(e, t.parentElement) : !1, Xa = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, xT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function ST(e) {
  return xT.has(e.tagName) || e.isContentEditable === !0;
}
const CT = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function RT(e) {
  return CT.has(e.tagName) || e.isContentEditable === !0;
}
const nr = /* @__PURE__ */ new WeakSet();
function Cc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ks(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const ET = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const o = Cc(() => {
    if (nr.has(n))
      return;
    ks(n, "down");
    const r = Cc(() => {
      ks(n, "up");
    }), s = () => ks(n, "cancel");
    n.addEventListener("keyup", r, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", o, t), n.addEventListener("blur", () => n.removeEventListener("keydown", o), t);
};
function Rc(e) {
  return Xa(e) && !tg();
}
const Ec = /* @__PURE__ */ new WeakSet();
function PT(e, t, n = {}) {
  const [o, r, s] = ng(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!Rc(a) || Ec.has(a))
      return;
    nr.add(l), n.stopPropagation && Ec.add(a);
    const c = t(l, a), d = (h, g) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", p), nr.has(l) && nr.delete(l), Rc(h) && typeof c == "function" && c(h, { success: g });
    }, u = (h) => {
      d(h, l === window || l === document || n.useGlobalTarget || og(l, h.target));
    }, p = (h) => {
      d(h, !1);
    };
    window.addEventListener("pointerup", u, r), window.addEventListener("pointercancel", p, r);
  };
  return o.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, r), vT(a) && (a.addEventListener("focus", (c) => ET(c, r)), !ST(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), s;
}
function qa(e) {
  return im(e) && "ownerSVGElement" in e;
}
const or = /* @__PURE__ */ new WeakMap();
let _t;
const rg = (e, t, n) => (o, r) => r && r[0] ? r[0][e + "Size"] : qa(o) && "getBBox" in o ? o.getBBox()[t] : o[n], TT = /* @__PURE__ */ rg("inline", "width", "offsetWidth"), MT = /* @__PURE__ */ rg("block", "height", "offsetHeight");
function AT({ target: e, borderBoxSize: t }) {
  var n;
  (n = or.get(e)) == null || n.forEach((o) => {
    o(e, {
      get width() {
        return TT(e, t);
      },
      get height() {
        return MT(e, t);
      }
    });
  });
}
function _T(e) {
  e.forEach(AT);
}
function DT() {
  typeof ResizeObserver > "u" || (_t = new ResizeObserver(_T));
}
function IT(e, t) {
  _t || DT();
  const n = Jm(e);
  return n.forEach((o) => {
    let r = or.get(o);
    r || (r = /* @__PURE__ */ new Set(), or.set(o, r)), r.add(t), _t == null || _t.observe(o);
  }), () => {
    n.forEach((o) => {
      const r = or.get(o);
      r == null || r.delete(t), r != null && r.size || _t == null || _t.unobserve(o);
    });
  };
}
const rr = /* @__PURE__ */ new Set();
let Cn;
function NT() {
  Cn = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    rr.forEach((t) => t(e));
  }, window.addEventListener("resize", Cn);
}
function kT(e) {
  return rr.add(e), Cn || NT(), () => {
    rr.delete(e), !rr.size && typeof Cn == "function" && (window.removeEventListener("resize", Cn), Cn = void 0);
  };
}
function Pc(e, t) {
  return typeof e == "function" ? kT(e) : IT(e, t);
}
function OT(e) {
  return qa(e) && e.tagName === "svg";
}
const VT = [...qm, pe, et], FT = (e) => VT.find(Xm(e)), Tc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rn = () => ({
  x: Tc(),
  y: Tc()
}), Mc = () => ({ min: 0, max: 0 }), ve = () => ({
  x: Mc(),
  y: Mc()
}), LT = /* @__PURE__ */ new WeakMap();
function as(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function po(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Za = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qa = ["initial", ...Za];
function ls(e) {
  return as(e.animate) || Qa.some((t) => po(e[t]));
}
function sg(e) {
  return !!(ls(e) || e.variants);
}
function $T(e, t, n) {
  for (const o in t) {
    const r = t[o], s = n[o];
    if (Ce(r))
      e.addValue(o, r);
    else if (Ce(s))
      e.addValue(o, kn(r, { owner: e }));
    else if (s !== r)
      if (e.hasValue(o)) {
        const i = e.getValue(o);
        i.liveStyle === !0 ? i.jump(r) : i.hasAnimated || i.set(r);
      } else {
        const i = e.getStaticValue(o);
        e.addValue(o, kn(i !== void 0 ? i : r, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const ki = { current: null }, ig = { current: !1 }, BT = typeof window < "u";
function zT() {
  if (ig.current = !0, !!BT)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => ki.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      ki.current = !1;
}
const Ac = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Tr = {};
function ag(e) {
  Tr = e;
}
function HT() {
  return Tr;
}
class jT {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, o) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: o, reducedMotionConfig: r, skipAnimations: s, blockInitialAnimation: i, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ha, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Ae.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, ue.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: d } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = !!i, this.isControllingVariants = ls(n), this.isVariantNode = sg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...p } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in p) {
      const g = p[h];
      c[h] !== void 0 && Ce(g) && g.set(c[h]);
    }
  }
  mount(t) {
    var n, o;
    if (this.hasBeenMounted)
      for (const r in this.initialValues)
        (n = this.values.get(r)) == null || n.jump(this.initialValues[r]), this.latestValues[r] = this.initialValues[r];
    this.current = t, LT.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, s) => this.bindToMotionValue(s, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ig.current || zT(), this.shouldReduceMotion = ki.current), process.env.NODE_ENV !== "production" && Na(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (o = this.parent) == null || o.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), Ft(this.notifyUpdate), Ft(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const o = this.features[n];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && zm.has(t) && this.current instanceof HTMLElement) {
      const { factory: i, keyframes: a, times: l, ease: c, duration: d } = n.accelerate, u = new $m({
        element: this.current,
        name: t,
        keyframes: a,
        times: l,
        ease: c,
        duration: /* @__PURE__ */ Ve(d)
      }), p = i(u);
      this.valueSubscriptions.set(t, () => {
        p(), u.cancel();
      });
      return;
    }
    const o = Wn.has(t);
    o && this.onBindTransform && this.onBindTransform();
    const r = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && ue.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let s;
    typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      r(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Tr) {
      const n = Tr[t];
      if (!n)
        continue;
      const { isEnabled: o, Feature: r } = n;
      if (!this.features[t] && r && o(this.props) && (this.features[t] = new r(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ve();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let o = 0; o < Ac.length; o++) {
      const r = Ac[o];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const s = "on" + r, i = t[s];
      i && (this.propEventSubscriptions[r] = this.on(r, i));
    }
    this.prevMotionValues = $T(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const o = this.values.get(t);
    n !== o && (o && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let o = this.values.get(t);
    return o === void 0 && n !== void 0 && (o = kn(n === null ? void 0 : n, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (sm(o) || am(o)) ? o = parseFloat(o) : !FT(o) && et.test(n) && (o = Qm(t, n)), this.setBaseTarget(t, Ce(o) ? o.get() : o)), Ce(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let o;
    if (typeof n == "string" || typeof n == "object") {
      const i = Ga(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
      i && (o = i[t]);
    }
    if (n && o !== void 0)
      return o;
    const r = this.getBaseTargetFromProps(this.props, t);
    return r !== void 0 && !Ce(r) ? r : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ia()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ya.render(this.render);
  }
}
class lg extends jT {
  constructor() {
    super(...arguments), this.KeyframeResolver = gT;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const o = t.style;
    return o ? o[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: o }) {
    delete n[t], delete o[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ce(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Ut {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function cg({ top: e, left: t, right: n, bottom: o }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: o }
  };
}
function WT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function GT(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), o = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: o.y,
    right: o.x
  };
}
function Os(e) {
  return e === void 0 || e === 1;
}
function Oi({ scale: e, scaleX: t, scaleY: n }) {
  return !Os(e) || !Os(t) || !Os(n);
}
function Qt(e) {
  return Oi(e) || ug(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function ug(e) {
  return _c(e.x) || _c(e.y);
}
function _c(e) {
  return e && e !== "0%";
}
function Mr(e, t, n) {
  const o = e - n, r = t * o;
  return n + r;
}
function Dc(e, t, n, o, r) {
  return r !== void 0 && (e = Mr(e, r, o)), Mr(e, n, o) + t;
}
function Vi(e, t = 0, n = 1, o, r) {
  e.min = Dc(e.min, t, n, o, r), e.max = Dc(e.max, t, n, o, r);
}
function dg(e, { x: t, y: n }) {
  Vi(e.x, t.translate, t.scale, t.originPoint), Vi(e.y, n.translate, n.scale, n.originPoint);
}
const Ic = 0.999999999999, Nc = 1.0000000000001;
function UT(e, t, n, o = !1) {
  var a;
  const r = n.length;
  if (!r)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let l = 0; l < r; l++) {
    s = n[l], i = s.projectionDelta;
    const { visualElement: c } = s.options;
    c && c.props.style && c.props.style.display === "contents" || (o && s.options.layoutScroll && s.scroll && s !== s.root && (lt(e.x, -s.scroll.offset.x), lt(e.y, -s.scroll.offset.y)), i && (t.x *= i.x.scale, t.y *= i.y.scale, dg(e, i)), o && Qt(s.latestValues) && sr(e, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < Nc && t.x > Ic && (t.x = 1), t.y < Nc && t.y > Ic && (t.y = 1);
}
function lt(e, t) {
  e.min += t, e.max += t;
}
function kc(e, t, n, o, r = 0.5) {
  const s = de(e.min, e.max, r);
  Vi(e, t, n, s, o);
}
function Oc(e, t) {
  return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function sr(e, t, n) {
  const o = n ?? e;
  kc(e.x, Oc(t.x, o.x), t.scaleX, t.scale, t.originX), kc(e.y, Oc(t.y, o.y), t.scaleY, t.scale, t.originY);
}
function fg(e, t) {
  return cg(GT(e.getBoundingClientRect(), t));
}
function KT(e, t, n) {
  const o = fg(e, n), { scroll: r } = t;
  return r && (lt(o.x, r.offset.x), lt(o.y, r.offset.y)), o;
}
const YT = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, XT = jn.length;
function qT(e, t, n) {
  let o = "", r = !0;
  for (let s = 0; s < XT; s++) {
    const i = jn[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number")
      l = a === (i.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(a);
      l = i.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!l || n) {
      const c = eg(a, Ka[i]);
      if (!l) {
        r = !1;
        const d = YT[i] || i;
        o += `${d}(${c}) `;
      }
      n && (t[i] = c);
    }
  }
  return o = o.trim(), n ? o = n(t, r ? "" : o) : r && (o = "none"), o;
}
function Ja(e, t, n) {
  const { style: o, vars: r, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Wn.has(l)) {
      i = !0;
      continue;
    } else if (Sm(l)) {
      r[l] = c;
      continue;
    } else {
      const d = eg(c, Ka[l]);
      l.startsWith("origin") ? (a = !0, s[l] = d) : o[l] = d;
    }
  }
  if (t.transform || (i || n ? o.transform = qT(t, e.transform, n) : o.transform && (o.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = s;
    o.transformOrigin = `${l} ${c} ${d}`;
  }
}
function pg(e, { style: t, vars: n }, o, r) {
  const s = e.style;
  let i;
  for (i in t)
    s[i] = t[i];
  r == null || r.applyProjectionStyles(s, o);
  for (i in n)
    s.setProperty(i, n[i]);
}
function Vc(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Kn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (Z.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Vc(e, t.target.x), o = Vc(e, t.target.y);
    return `${n}% ${o}%`;
  }
}, ZT = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const o = e, r = et.parse(e);
    if (r.length > 5)
      return o;
    const s = et.createTransformer(e), i = typeof r[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    r[0 + i] /= a, r[1 + i] /= l;
    const c = de(a, l, 0.5);
    return typeof r[2 + i] == "number" && (r[2 + i] /= c), typeof r[3 + i] == "number" && (r[3 + i] /= c), s(r);
  }
}, Fi = {
  borderRadius: {
    ...Kn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Kn,
  borderTopRightRadius: Kn,
  borderBottomLeftRadius: Kn,
  borderBottomRightRadius: Kn,
  boxShadow: ZT
};
function hg(e, { layout: t, layoutId: n }) {
  return Wn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fi[e] || e === "opacity");
}
function el(e, t, n) {
  var i;
  const o = e.style, r = t == null ? void 0 : t.style, s = {};
  if (!o)
    return s;
  for (const a in o)
    (Ce(o[a]) || r && Ce(r[a]) || hg(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (s[a] = o[a]);
  return s;
}
function QT(e) {
  return window.getComputedStyle(e);
}
class JT extends lg {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = pg;
  }
  readValueFromInstance(t, n) {
    var o;
    if (Wn.has(n))
      return (o = this.projection) != null && o.isProjecting ? Ci(n) : vP(t, n);
    {
      const r = QT(t), s = (Sm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return fg(t, n);
  }
  build(t, n, o) {
    Ja(t, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return el(t, n, o);
  }
}
const eM = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, tM = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function nM(e, t, n = 1, o = 0, r = !0) {
  e.pathLength = 1;
  const s = r ? eM : tM;
  e[s.offset] = `${-o}`, e[s.array] = `${t} ${n}`;
}
const oM = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function mg(e, {
  attrX: t,
  attrY: n,
  attrScale: o,
  pathLength: r,
  pathSpacing: s = 1,
  pathOffset: i = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, d) {
  if (Ja(e, a, c), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: u, style: p } = e;
  u.transform && (p.transform = u.transform, delete u.transform), (p.transform || u.transformOrigin) && (p.transformOrigin = u.transformOrigin ?? "50% 50%", delete u.transformOrigin), p.transform && (p.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete u.transformBox);
  for (const h of oM)
    u[h] !== void 0 && (p[h] = u[h], delete u[h]);
  t !== void 0 && (u.x = t), n !== void 0 && (u.y = n), o !== void 0 && (u.scale = o), r !== void 0 && nM(u, r, s, i, !1);
}
const gg = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), vg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function rM(e, t, n, o) {
  pg(e, t, void 0, o);
  for (const r in t.attrs)
    e.setAttribute(gg.has(r) ? r : Ua(r), t.attrs[r]);
}
function yg(e, t, n) {
  const o = el(e, t, n);
  for (const r in e)
    if (Ce(e[r]) || Ce(t[r])) {
      const s = jn.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      o[s] = e[r];
    }
  return o;
}
class sM extends lg {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ve;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Wn.has(n)) {
      const o = Zm(n);
      return o && o.default || 0;
    }
    return n = gg.has(n) ? n : Ua(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return yg(t, n, o);
  }
  build(t, n, o) {
    mg(t, n, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(t, n, o, r) {
    rM(t, n, o, r);
  }
  mount(t) {
    this.isSVGTag = vg(t.tagName), super.mount(t);
  }
}
const iM = Qa.length;
function wg(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? wg(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < iM; n++) {
    const o = Qa[n], r = e.props[o];
    (po(r) || r === !1) && (t[o] = r);
  }
  return t;
}
function bg(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let o = 0; o < n; o++)
    if (t[o] !== e[o])
      return !1;
  return !0;
}
const aM = [...Za].reverse(), lM = Za.length;
function cM(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: o }) => sT(e, n, o)));
}
function uM(e) {
  let t = cM(e), n = Fc(), o = !0, r = !1;
  const s = (c) => (d, u) => {
    var h;
    const p = on(e, u, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
    if (p) {
      const { transition: g, transitionEnd: v, ...y } = p;
      d = { ...d, ...y, ...v };
    }
    return d;
  };
  function i(c) {
    t = c(e);
  }
  function a(c) {
    const { props: d } = e, u = wg(e.parent) || {}, p = [], h = /* @__PURE__ */ new Set();
    let g = {}, v = 1 / 0;
    for (let w = 0; w < lM; w++) {
      const b = aM[w], x = n[b], S = d[b] !== void 0 ? d[b] : u[b], R = po(S), P = b === c ? x.isActive : null;
      P === !1 && (v = w);
      let T = S === u[b] && S !== d[b] && R;
      if (T && (o || r) && e.manuallyAnimateOnMount && (T = !1), x.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !S && !x.prevProp || // Or if the prop doesn't define an animation
      as(S) || typeof S == "boolean")
        continue;
      if (b === "exit" && x.isActive && P !== !0) {
        x.prevResolvedValues && (g = {
          ...g,
          ...x.prevResolvedValues
        });
        continue;
      }
      const E = dM(x.prevProp, S);
      let N = E || // If we're making this variant active, we want to always make it active
      b === c && x.isActive && !T && R || // If we removed a higher-priority variant (i is in reverse order)
      w > v && R, D = !1;
      const H = Array.isArray(S) ? S : [S];
      let B = H.reduce(s(b), {});
      P === !1 && (B = {});
      const { prevResolvedValues: Y = {} } = x, K = {
        ...Y,
        ...B
      }, J = (L) => {
        N = !0, h.has(L) && (D = !0, h.delete(L)), x.needsAnimating[L] = !0;
        const V = e.getValue(L);
        V && (V.liveStyle = !1);
      };
      for (const L in K) {
        const V = B[L], k = Y[L];
        if (g.hasOwnProperty(L))
          continue;
        let se = !1;
        Ai(V) && Ai(k) ? se = !bg(V, k) : se = V !== k, se ? V != null ? J(L) : h.add(L) : V !== void 0 && h.has(L) ? J(L) : x.protectedKeys[L] = !0;
      }
      x.prevProp = S, x.prevResolvedValues = B, x.isActive && (g = { ...g, ...B }), (o || r) && e.blockInitialAnimation && (N = !1);
      const I = T && E;
      N && (!I || D) && p.push(...H.map((L) => {
        const V = { type: b };
        if (typeof L == "string" && (o || r) && !I && e.manuallyAnimateOnMount && e.parent) {
          const { parent: k } = e, se = on(k, L);
          if (k.enteringChildren && se) {
            const { delayChildren: _ } = se.transition || {};
            V.delay = Hm(k.enteringChildren, e, _);
          }
        }
        return {
          animation: L,
          options: V
        };
      }));
    }
    if (h.size) {
      const w = {};
      if (typeof d.initial != "boolean") {
        const b = on(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        b && b.transition && (w.transition = b.transition);
      }
      h.forEach((b) => {
        const x = e.getBaseTarget(b), S = e.getValue(b);
        S && (S.liveStyle = !0), w[b] = x ?? null;
      }), p.push({ animation: w });
    }
    let y = !!p.length;
    return o && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (y = !1), o = !1, r = !1, y ? t(p) : Promise.resolve();
  }
  function l(c, d) {
    var p;
    if (n[c].isActive === d)
      return Promise.resolve();
    (p = e.variantChildren) == null || p.forEach((h) => {
      var g;
      return (g = h.animationState) == null ? void 0 : g.setActive(c, d);
    }), n[c].isActive = d;
    const u = a(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Fc(), r = !0;
    }
  };
}
function dM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !bg(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Fc() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt()
  };
}
function Li(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ze(e, t) {
  Li(e.x, t.x), Li(e.y, t.y);
}
function Lc(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
const xg = 1e-4, fM = 1 - xg, pM = 1 + xg, Sg = 0.01, hM = 0 - Sg, mM = 0 + Sg;
function _e(e) {
  return e.max - e.min;
}
function gM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $c(e, t, n, o = 0.5) {
  e.origin = o, e.originPoint = de(t.min, t.max, e.origin), e.scale = _e(n) / _e(t), e.translate = de(n.min, n.max, e.origin) - e.originPoint, (e.scale >= fM && e.scale <= pM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= hM && e.translate <= mM || isNaN(e.translate)) && (e.translate = 0);
}
function eo(e, t, n, o) {
  $c(e.x, t.x, n.x, o ? o.originX : void 0), $c(e.y, t.y, n.y, o ? o.originY : void 0);
}
function Bc(e, t, n, o = 0) {
  const r = o ? de(n.min, n.max, o) : n.min;
  e.min = r + t.min, e.max = e.min + _e(t);
}
function vM(e, t, n, o) {
  Bc(e.x, t.x, n.x, o == null ? void 0 : o.x), Bc(e.y, t.y, n.y, o == null ? void 0 : o.y);
}
function zc(e, t, n, o = 0) {
  const r = o ? de(n.min, n.max, o) : n.min;
  e.min = t.min - r, e.max = e.min + _e(t);
}
function Ar(e, t, n, o) {
  zc(e.x, t.x, n.x, o == null ? void 0 : o.x), zc(e.y, t.y, n.y, o == null ? void 0 : o.y);
}
function Hc(e, t, n, o, r) {
  return e -= t, e = Mr(e, 1 / n, o), r !== void 0 && (e = Mr(e, 1 / r, o)), e;
}
function yM(e, t = 0, n = 1, o = 0.5, r, s = e, i = e) {
  if (ft.test(t) && (t = parseFloat(t), t = de(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = de(s.min, s.max, o);
  e === s && (a -= t), e.min = Hc(e.min, t, n, a, r), e.max = Hc(e.max, t, n, a, r);
}
function jc(e, t, [n, o, r], s, i) {
  yM(e, t[n], t[o], t[r], t.scale, s, i);
}
const wM = ["x", "scaleX", "originX"], bM = ["y", "scaleY", "originY"];
function Wc(e, t, n, o) {
  jc(e.x, t, wM, n ? n.x : void 0, o ? o.x : void 0), jc(e.y, t, bM, n ? n.y : void 0, o ? o.y : void 0);
}
function Gc(e) {
  return e.translate === 0 && e.scale === 1;
}
function Cg(e) {
  return Gc(e.x) && Gc(e.y);
}
function Uc(e, t) {
  return e.min === t.min && e.max === t.max;
}
function xM(e, t) {
  return Uc(e.x, t.x) && Uc(e.y, t.y);
}
function Kc(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Rg(e, t) {
  return Kc(e.x, t.x) && Kc(e.y, t.y);
}
function Yc(e) {
  return _e(e.x) / _e(e.y);
}
function Xc(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function at(e) {
  return [e("x"), e("y")];
}
function SM(e, t, n) {
  let o = "";
  const r = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((r || s || i) && (o = `translate3d(${r}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: d, rotateX: u, rotateY: p, skewX: h, skewY: g } = n;
    c && (o = `perspective(${c}px) ${o}`), d && (o += `rotate(${d}deg) `), u && (o += `rotateX(${u}deg) `), p && (o += `rotateY(${p}deg) `), h && (o += `skewX(${h}deg) `), g && (o += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (o += `scale(${a}, ${l})`), o || "none";
}
const Eg = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], CM = Eg.length, qc = (e) => typeof e == "string" ? parseFloat(e) : e, Zc = (e) => typeof e == "number" || Z.test(e);
function RM(e, t, n, o, r, s) {
  r ? (e.opacity = de(0, n.opacity ?? 1, EM(o)), e.opacityExit = de(t.opacity ?? 1, 0, PM(o))) : s && (e.opacity = de(t.opacity ?? 1, n.opacity ?? 1, o));
  for (let i = 0; i < CM; i++) {
    const a = Eg[i];
    let l = Qc(t, a), c = Qc(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Zc(l) === Zc(c) ? (e[a] = Math.max(de(qc(l), qc(c), o), 0), (ft.test(c) || ft.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = de(t.rotate || 0, n.rotate || 0, o));
}
function Qc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const EM = /* @__PURE__ */ Pg(0, 0.5, gm), PM = /* @__PURE__ */ Pg(0.5, 0.95, Ue);
function Pg(e, t, n) {
  return (o) => o < e ? 0 : o > t ? 1 : n(/* @__PURE__ */ uo(e, t, o));
}
function TM(e, t, n) {
  const o = Ce(e) ? e : kn(e);
  return o.start(Wa("", o, t, n)), o.animation;
}
function ho(e, t, n, o = { passive: !0 }) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n);
}
const MM = (e, t) => e.depth - t.depth;
class AM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Da(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Sr(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(MM), this.isDirty = !1, this.children.forEach(t);
  }
}
function _M(e, t) {
  const n = Ae.now(), o = ({ timestamp: r }) => {
    const s = r - n;
    s >= t && (Ft(o), e(s - t));
  };
  return ue.setup(o, !0), () => Ft(o);
}
function ir(e) {
  return Ce(e) ? e.get() : e;
}
class DM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Da(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const o = this.members[n];
      if (o === t || o === this.lead || o === this.prevLead)
        continue;
      const r = o.instance;
      (!r || r.isConnected === !1) && !o.snapshot && (Sr(this.members, o), o.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (Sr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let o = this.members.indexOf(t) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && ((n = r.instance) == null ? void 0 : n.isConnected) !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(t, n) {
    var r;
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.updateSnapshot(), t.scheduleRender();
      const { layoutDependency: s } = o.options, { layoutDependency: i } = t.options;
      (s === void 0 || s !== i) && (t.resumeFrom = o, n && (o.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), (r = t.root) != null && r.isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, o, r, s, i;
      (o = (n = t.options).onExitComplete) == null || o.call(n), (i = (r = t.resumingFrom) == null ? void 0 : (s = r.options).onExitComplete) == null || i.call(s);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const ar = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Vs = ["", "X", "Y", "Z"], IM = 1e3;
let NM = 0;
function Fs(e, t, n, o) {
  const { latestValues: r } = t;
  r[e] && (n[e] = r[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function Tg(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Km(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: r, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ue, !(r || s));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && Tg(o);
}
function Mg({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: o, resetTransform: r }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = NM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(VM), this.nodes.forEach(HM), this.nodes.forEach(jM), this.nodes.forEach(FM);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new AM());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ia()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i) {
      if (this.instance)
        return;
      this.isSVG = qa(i) && !OT(i), this.instance = i;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let d, u = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        ue.read(() => {
          u = window.innerWidth;
        }), e(i, () => {
          const h = window.innerWidth;
          h !== u && (u = h, this.root.updateBlockedByResize = !0, d && d(), d = _M(p, 250), ar.hasAnimatedSinceResize && (ar.hasAnimatedSinceResize = !1, this.nodes.forEach(tu)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: u, hasRelativeLayoutChanged: p, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || YM, { onLayoutAnimationStart: v, onLayoutAnimationComplete: y } = c.getProps(), w = !this.targetLayout || !Rg(this.targetLayout, h), b = !u && p;
        if (this.options.layoutRoot || this.resumeFrom || b || u && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const x = {
            ...ja(g, "layout"),
            onPlay: v,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x), this.setAnimationOrigin(d, b);
        } else
          u || tu(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ft(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(WM), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        u.shouldResetTransform = !0, (typeof u.latestValues.x == "string" || typeof u.latestValues.y == "string") && (u.isLayoutDirty = !0), u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const l = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach($M), this.nodes.forEach(Jc);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(eu);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(BM), this.nodes.forEach(zM), this.nodes.forEach(kM), this.nodes.forEach(OM)) : this.nodes.forEach(eu), this.clearAllSnapshots();
      const a = Ae.now();
      Se.delta = ht(0, 1e3 / 60, a - Se.timestamp), Se.timestamp = a, Se.isProcessing = !0, Ms.update.process(Se), Ms.preRender.process(Se), Ms.render.process(Se), Se.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ya.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(LM), this.sharedNodes.forEach(GM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ue.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ue.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !_e(this.snapshot.measuredBox.x) && !_e(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = ve()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && this.instance) {
        const l = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!r)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Cg(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, d = c !== this.prevTransformTemplateValue;
      i && this.instance && (a || Qt(this.latestValues) || d) && (r(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), XM(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var c;
      const { visualElement: i } = this.options;
      if (!i)
        return ve();
      const a = i.measureViewportBox();
      if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(qM))) {
        const { scroll: d } = this.root;
        d && (lt(a.x, d.offset.x), lt(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(i) {
      var l;
      const a = ve();
      if (Ze(a, i), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: p } = d;
        d !== this.root && u && p.layoutScroll && (u.wasRoot && Ze(a, i), lt(a.x, u.offset.x), lt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(i, a = !1, l) {
      var d, u;
      const c = l || ve();
      Ze(c, i);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (lt(c.x, -h.scroll.offset.x), lt(c.y, -h.scroll.offset.y)), Qt(h.latestValues) && sr(c, h.latestValues, (d = h.layout) == null ? void 0 : d.layoutBox);
      }
      return Qt(this.latestValues) && sr(c, this.latestValues, (u = this.layout) == null ? void 0 : u.layoutBox), c;
    }
    removeTransform(i) {
      var l;
      const a = ve();
      Ze(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!Qt(d.latestValues))
          continue;
        let u;
        d.instance && (Oi(d.latestValues) && d.updateSnapshot(), u = ve(), Ze(u, d.measurePageBox())), Wc(a, d.latestValues, (l = d.snapshot) == null ? void 0 : l.layoutBox, u);
      }
      return Qt(this.latestValues) && Wc(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(i || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: u } = this.options;
      if (!this.layout || !(d || u))
        return;
      this.resolvedRelativeTargetAt = Se.timestamp;
      const p = this.getClosestProjectingParent();
      p && this.linkedParentVersion !== p.layoutVersion && !p.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && p && p.layout ? this.createRelativeTarget(p, this.layout.layoutBox, p.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ve(), this.targetWithTransforms = ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), vM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ze(this.target, this.layout.layoutBox), dg(this.target, this.targetDelta)) : Ze(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? this.createRelativeTarget(p, this.target, p.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Oi(this.parent.latestValues) || ug(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(i, a, l) {
      this.relativeParent = i, this.linkedParentVersion = i.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Ar(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Ze(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var g;
      const i = this.getLead(), a = !!this.resumingFrom || this !== i;
      let l = !0;
      if ((this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === Se.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const u = this.treeScale.x, p = this.treeScale.y;
      UT(this.layoutCorrected, this.treeScale, this.path, a), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = ve());
      const { target: h } = i;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Lc(this.prevProjectionDelta.x, this.projectionDelta.x), Lc(this.prevProjectionDelta.y, this.projectionDelta.y)), eo(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== u || this.treeScale.y !== p || !Xc(this.projectionDelta.x, this.prevProjectionDelta.x) || !Xc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), i) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Rn(), this.projectionDelta = Rn(), this.projectionDeltaWithTransform = Rn();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, d = { ...this.latestValues }, u = Rn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const p = ve(), h = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = h !== g, y = this.getStack(), w = !y || y.members.length <= 1, b = !!(v && !w && this.options.crossfade === !0 && !this.path.some(KM));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (S) => {
        const R = S / 1e3;
        nu(u.x, i.x, R), nu(u.y, i.y, R), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ar(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), UM(this.relativeTarget, this.relativeTargetOrigin, p, R), x && xM(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = ve()), Ze(x, this.relativeTarget)), v && (this.animationValues = d, RM(d, c, this.latestValues, R, b, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      var a, l, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (Ft(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ue.update(() => {
        ar.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = kn(0)), this.motionValue.jump(0, !1), this.currentAnimation = TM(this.motionValue, [0, 1e3], {
          ...i,
          velocity: 0,
          isSync: !0,
          onUpdate: (d) => {
            this.mixTargetDelta(d), i.onUpdate && i.onUpdate(d);
          },
          onStop: () => {
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(IM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: d } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Ag(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ve();
          const u = _e(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + u;
          const p = _e(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + p;
        }
        Ze(a, l), sr(a, d), eo(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new DM()), this.sharedNodes.get(i).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: i } = this.options;
      return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: i } = this.options;
      return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Fs("z", i, c, this.animationValues);
      for (let d = 0; d < Vs.length; d++)
        Fs(`rotate${Vs[d]}`, i, c, this.animationValues), Fs(`skew${Vs[d]}`, i, c, this.animationValues);
      i.render();
      for (const d in c)
        i.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
      i.scheduleRender();
    }
    applyProjectionStyles(i, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        i.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, i.visibility = "", i.opacity = "", i.pointerEvents = ir(a == null ? void 0 : a.pointerEvents) || "", i.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, i.pointerEvents = ir(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Qt(this.latestValues) && (i.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      i.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let u = SM(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (u = l(d, u)), i.transform = u;
      const { x: p, y: h } = this.projectionDelta;
      i.transformOrigin = `${p.origin * 100}% ${h.origin * 100}% 0`, c.animationValues ? i.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : i.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in Fi) {
        if (d[g] === void 0)
          continue;
        const { correct: v, applyTo: y, isCSSVariable: w } = Fi[g], b = u === "none" ? d[g] : v(d[g], c);
        if (y) {
          const x = y.length;
          for (let S = 0; S < x; S++)
            i[y[S]] = b;
        } else
          w ? this.options.visualElement.renderState.vars[g] = b : i[g] = b;
      }
      this.options.layoutId && (i.pointerEvents = c === this ? ir(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(Jc), this.root.sharedNodes.clear();
    }
  };
}
function kM(e) {
  e.updateLayout();
}
function OM(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = e.layout, { animationType: s } = e.options, i = t.source !== e.layout.source;
    if (s === "size")
      at((u) => {
        const p = i ? t.measuredBox[u] : t.layoutBox[u], h = _e(p);
        p.min = o[u].min, p.max = p.min + h;
      });
    else if (s === "x" || s === "y") {
      const u = s === "x" ? "y" : "x";
      Li(i ? t.measuredBox[u] : t.layoutBox[u], o[u]);
    } else Ag(s, t.layoutBox, o) && at((u) => {
      const p = i ? t.measuredBox[u] : t.layoutBox[u], h = _e(o[u]);
      p.max = p.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const a = Rn();
    eo(a, o, t.layoutBox);
    const l = Rn();
    i ? eo(l, e.applyTransform(r, !0), t.measuredBox) : eo(l, o, t.layoutBox);
    const c = !Cg(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: p, layout: h } = u;
        if (p && h) {
          const g = e.options.layoutAnchor || void 0, v = ve();
          Ar(v, t.layoutBox, p.layoutBox, g);
          const y = ve();
          Ar(y, o, h.layoutBox, g), Rg(v, y) || (d = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = v, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: o } = e.options;
    o && o();
  }
  e.options.transition = void 0;
}
function VM(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function FM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function LM(e) {
  e.clearSnapshot();
}
function Jc(e) {
  e.clearMeasurements();
}
function $M(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function eu(e) {
  e.isLayoutDirty = !1;
}
function BM(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function zM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function tu(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function HM(e) {
  e.resolveTargetDelta();
}
function jM(e) {
  e.calcProjection();
}
function WM(e) {
  e.resetSkewAndRotation();
}
function GM(e) {
  e.removeLeadSnapshot();
}
function nu(e, t, n) {
  e.translate = de(t.translate, 0, n), e.scale = de(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ou(e, t, n, o) {
  e.min = de(t.min, n.min, o), e.max = de(t.max, n.max, o);
}
function UM(e, t, n, o) {
  ou(e.x, t.x, n.x, o), ou(e.y, t.y, n.y, o);
}
function KM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const YM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ru = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), su = ru("applewebkit/") && !ru("chrome/") ? Math.round : Ue;
function iu(e) {
  e.min = su(e.min), e.max = su(e.max);
}
function XM(e) {
  iu(e.x), iu(e.y);
}
function Ag(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !gM(Yc(t), Yc(n), 0.2);
}
function qM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const ZM = Mg({
  attachResizeListener: (e, t) => ho(e, "resize", t),
  measureScroll: () => {
    var e, t;
    return {
      x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), Ls = {
  current: void 0
}, _g = Mg({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ls.current) {
      const e = new ZM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ls.current = e;
    }
    return Ls.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Dg = On({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function QM(e = !0) {
  const t = Oe(_a);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: o, register: r } = t, s = xv();
  Xi(() => {
    if (e)
      return r(s);
  }, [e]);
  const i = Mu(() => e && o && o(s), [s, o, e]);
  return !n && o ? [!1, i] : [!0];
}
const Ig = On({ strict: !1 }), au = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let lu = !1;
function JM() {
  if (lu)
    return;
  const e = {};
  for (const t in au)
    e[t] = {
      isEnabled: (n) => au[t].some((o) => !!n[o])
    };
  ag(e), lu = !0;
}
function Ng() {
  return JM(), HT();
}
function eA(e) {
  const t = Ng();
  for (const n in e)
    t[n] = {
      ...t[n],
      ...e[n]
    };
  ag(t);
}
const tA = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function _r(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tA.has(e);
}
let kg = (e) => !_r(e);
function nA(e) {
  typeof e == "function" && (kg = (t) => t.startsWith("on") ? !_r(t) : e(t));
}
try {
  nA(require("@emotion/is-prop-valid").default);
} catch {
}
function oA(e, t, n) {
  const o = {};
  for (const r in e)
    r === "values" && typeof e.values == "object" || Ce(e[r]) || (kg(r) || n === !0 && _r(r) || !t && !_r(r) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && r.startsWith("onDrag")) && (o[r] = e[r]);
  return o;
}
const cs = /* @__PURE__ */ On({});
function rA(e, t) {
  if (ls(e)) {
    const { initial: n, animate: o } = e;
    return {
      initial: n === !1 || po(n) ? n : void 0,
      animate: po(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function sA(e) {
  const { initial: t, animate: n } = rA(e, Oe(cs));
  return Nr(() => ({ initial: t, animate: n }), [cu(t), cu(n)]);
}
function cu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const tl = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Og(e, t, n) {
  for (const o in t)
    !Ce(t[o]) && !hg(o, n) && (e[o] = t[o]);
}
function iA({ transformTemplate: e }, t) {
  return Nr(() => {
    const n = tl();
    return Ja(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function aA(e, t) {
  const n = e.style || {}, o = {};
  return Og(o, n, e), Object.assign(o, iA(e, t)), o;
}
function lA(e, t) {
  const n = {}, o = aA(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const Vg = () => ({
  ...tl(),
  attrs: {}
});
function cA(e, t, n, o) {
  const r = Nr(() => {
    const s = Vg();
    return mg(s, t, vg(o), e.transformTemplate, e.style), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Og(s, e.style, e), r.style = { ...s, ...r.style };
  }
  return r;
}
const uA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function nl(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(uA.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function dA(e, t, n, { latestValues: o }, r, s = !1, i) {
  const l = (i ?? nl(e) ? cA : lA)(t, o, r, e), c = oA(t, typeof e == "string", s), d = e !== Au ? { ...c, ...l, ref: n } : {}, { children: u } = t, p = Nr(() => Ce(u) ? u.get() : u, [u]);
  return cr(e, {
    ...d,
    children: p
  });
}
function fA({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, o, r) {
  return {
    latestValues: pA(n, o, r, e),
    renderState: t()
  };
}
function pA(e, t, n, o) {
  const r = {}, s = o(e, {});
  for (const p in s)
    r[p] = ir(s[p]);
  let { initial: i, animate: a } = e;
  const l = ls(e), c = sg(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || i === !1;
  const u = d ? a : i;
  if (u && typeof u != "boolean" && !as(u)) {
    const p = Array.isArray(u) ? u : [u];
    for (let h = 0; h < p.length; h++) {
      const g = Ga(e, p[h]);
      if (g) {
        const { transitionEnd: v, transition: y, ...w } = g;
        for (const b in w) {
          let x = w[b];
          if (Array.isArray(x)) {
            const S = d ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (r[b] = x);
        }
        for (const b in v)
          r[b] = v[b];
      }
    }
  }
  return r;
}
const Fg = (e) => (t, n) => {
  const o = Oe(cs), r = Oe(_a), s = () => fA(e, t, o, r);
  return n ? s() : uE(s);
}, hA = /* @__PURE__ */ Fg({
  scrapeMotionValuesFromProps: el,
  createRenderState: tl
}), mA = /* @__PURE__ */ Fg({
  scrapeMotionValuesFromProps: yg,
  createRenderState: Vg
}), gA = Symbol.for("motionComponentSymbol");
function vA(e, t, n) {
  const o = Jt(n);
  _u(() => {
    o.current = n;
  });
  const r = Jt(null);
  return Mu((s) => {
    var a;
    s && ((a = e.onMount) == null || a.call(e, s));
    const i = o.current;
    if (typeof i == "function")
      if (s) {
        const l = i(s);
        typeof l == "function" && (r.current = l);
      } else r.current ? (r.current(), r.current = null) : i(s);
    else i && (i.current = s);
    t && (s ? t.mount(s) : t.unmount());
  }, [t]);
}
const Lg = On({});
function bn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function yA(e, t, n, o, r, s) {
  var x, S;
  const { visualElement: i } = Oe(cs), a = Oe(Ig), l = Oe(_a), c = Oe(Dg), d = c.reducedMotion, u = c.skipAnimations, p = Jt(null), h = Jt(!1);
  o = o || a.renderer, !p.current && o && (p.current = o(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: d,
    skipAnimations: u,
    isSVG: s
  }), h.current && p.current && (p.current.manuallyAnimateOnMount = !0));
  const g = p.current, v = Oe(Lg);
  g && !g.projection && r && (g.type === "html" || g.type === "svg") && wA(p.current, n, r, v);
  const y = Jt(!1);
  _u(() => {
    g && y.current && g.update(n, l);
  });
  const w = n[Um], b = Jt(!!w && typeof window < "u" && !((x = window.MotionHandoffIsComplete) != null && x.call(window, w)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, w)));
  return fE(() => {
    h.current = !0, g && (y.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), g.scheduleRenderMicrotask(), b.current && g.animationState && g.animationState.animateChanges());
  }), Xi(() => {
    g && (!b.current && g.animationState && g.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var R;
      (R = window.MotionHandoffMarkAsComplete) == null || R.call(window, w);
    }), b.current = !1), g.enteringChildren = void 0);
  }), g;
}
function wA(e, t, n, o) {
  const { layoutId: r, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutAnchor: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : $g(e.parent)), e.projection.setOptions({
    layoutId: r,
    layout: s,
    alwaysMeasureLayout: !!i || a && bn(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: o,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: d
  });
}
function $g(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : $g(e.parent);
}
function $s(e, { forwardMotionProps: t = !1, type: n } = {}, o, r) {
  o && eA(o);
  const s = n ? n === "svg" : nl(e), i = s ? mA : hA;
  function a(c, d) {
    let u;
    const p = {
      ...Oe(Dg),
      ...c,
      layoutId: bA(c)
    }, { isStatic: h } = p, g = sA(c), v = i(c, h);
    if (!h && typeof window < "u") {
      xA(p, o);
      const y = SA(p);
      u = y.MeasureLayout, g.visualElement = yA(e, v, p, r, y.ProjectionNode, s);
    }
    return j(cs.Provider, { value: g, children: [u && g.visualElement ? m(u, { visualElement: g.visualElement, ...p }) : null, dA(e, c, vA(v, g.visualElement, d), v, h, t, s)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = Yi(a);
  return l[gA] = e, l;
}
function bA({ layoutId: e }) {
  const t = Oe(rm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function xA(e, t) {
  const n = Oe(Ig).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? zn(!1, o, "lazy-strict-mode") : St(!1, o, "lazy-strict-mode");
  }
}
function SA(e) {
  const t = Ng(), { drag: n, layout: o } = t;
  if (!n && !o)
    return {};
  const r = { ...n, ...o };
  return {
    MeasureLayout: n != null && n.isEnabled(e) || o != null && o.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function CA(e, t) {
  if (typeof Proxy > "u")
    return $s;
  const n = /* @__PURE__ */ new Map(), o = (s, i) => $s(s, i, e, t), r = (s, i) => (process.env.NODE_ENV !== "production" && Na(!1, "motion() is deprecated. Use motion.create() instead."), o(s, i));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? o : (n.has(i) || n.set(i, $s(i, void 0, e, t)), n.get(i))
  });
}
const RA = (e, t) => t.isSVG ?? nl(e) ? new sM(t) : new JT(t, {
  allowProjection: e !== Au
});
class EA extends Ut {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = uM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    as(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this);
  }
}
let PA = 0;
class TA extends Ut {
  constructor() {
    super(...arguments), this.id = PA++, this.isExitComplete = !1;
  }
  update() {
    var s;
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    if (t && o === !1) {
      if (this.isExitComplete) {
        const { initial: i, custom: a } = this.node.getProps();
        if (typeof i == "string") {
          const l = on(this.node, i, a);
          if (l) {
            const { transition: c, transitionEnd: d, ...u } = l;
            for (const p in u)
              (s = this.node.getValue(p)) == null || s.jump(u[p]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const r = this.node.animationState.setActive("exit", !t);
    n && !t && r.then(() => {
      this.isExitComplete = !0, n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const MA = {
  animation: {
    Feature: EA
  },
  exit: {
    Feature: TA
  }
};
function _o(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const AA = (e) => (t) => Xa(t) && e(t, _o(t));
function to(e, t, n, o) {
  return ho(e, t, AA(n), o);
}
const Bg = ({ current: e }) => e ? e.ownerDocument.defaultView : null, uu = (e, t) => Math.abs(e - t);
function _A(e, t) {
  const n = uu(e.x, t.x), o = uu(e.y, t.y);
  return Math.sqrt(n ** 2 + o ** 2);
}
const du = /* @__PURE__ */ new Set(["auto", "scroll"]);
class zg {
  constructor(t, n, { transformPagePoint: o, contextWindow: r = window, dragSnapToOrigin: s = !1, distanceThreshold: i = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (h) => {
      this.handleScroll(h.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Go(this.lastRawMoveEventInfo, this.transformPagePoint));
      const h = Bs(this.lastMoveEventInfo, this.history), g = this.startEvent !== null, v = _A(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!g && !v)
        return;
      const { point: y } = h, { timestamp: w } = Se;
      this.history.push({ ...y, timestamp: w });
      const { onStart: b, onMove: x } = this.handlers;
      g || (b && b(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, g) => {
      this.lastMoveEvent = h, this.lastRawMoveEventInfo = g, this.lastMoveEventInfo = Go(g, this.transformPagePoint), ue.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, g) => {
      this.end();
      const { onEnd: v, onSessionEnd: y, resumeAnimation: w } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Bs(h.type === "pointercancel" ? this.lastMoveEventInfo : Go(g, this.transformPagePoint), this.history);
      this.startEvent && v && v(h, b), y && y(h, b);
    }, !Xa(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = o, this.distanceThreshold = i, this.contextWindow = r || window;
    const l = _o(t), c = Go(l, this.transformPagePoint), { point: d } = c, { timestamp: u } = Se;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: p } = n;
    p && p(t, Bs(c, this.history)), this.removeListeners = To(to(this.contextWindow, "pointermove", this.handlePointerMove), to(this.contextWindow, "pointerup", this.handlePointerUp), to(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const o = getComputedStyle(n);
      (du.has(o.overflowX) || du.has(o.overflowY)) && this.scrollPositions.set(n, {
        x: n.scrollLeft,
        y: n.scrollTop
      }), n = n.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n)
      return;
    const o = t === window, r = o ? { x: window.scrollX, y: window.scrollY } : {
      x: t.scrollLeft,
      y: t.scrollTop
    }, s = { x: r.x - n.x, y: r.y - n.y };
    s.x === 0 && s.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x, this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x, this.history[0].y -= s.y), this.scrollPositions.set(t, r), ue.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Ft(this.updatePoint);
  }
}
function Go(e, t) {
  return t ? { point: t(e.point) } : e;
}
function fu(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bs({ point: e }, t) {
  return {
    point: e,
    delta: fu(e, Hg(t)),
    offset: fu(e, DA(t)),
    velocity: IA(t, 0.1)
  };
}
function DA(e) {
  return e[0];
}
function Hg(e) {
  return e[e.length - 1];
}
function IA(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, o = null;
  const r = Hg(e);
  for (; n >= 0 && (o = e[n], !(r.timestamp - o.timestamp > /* @__PURE__ */ Ve(t))); )
    n--;
  if (!o)
    return { x: 0, y: 0 };
  o === e[0] && e.length > 2 && r.timestamp - o.timestamp > /* @__PURE__ */ Ve(t) * 2 && (o = e[1]);
  const s = /* @__PURE__ */ We(r.timestamp - o.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (r.x - o.x) / s,
    y: (r.y - o.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function NA(e, { min: t, max: n }, o) {
  return t !== void 0 && e < t ? e = o ? de(t, e, o.min) : Math.max(e, t) : n !== void 0 && e > n && (e = o ? de(n, e, o.max) : Math.min(e, n)), e;
}
function pu(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function kA(e, { top: t, left: n, bottom: o, right: r }) {
  return {
    x: pu(e.x, n, r),
    y: pu(e.y, t, o)
  };
}
function hu(e, t) {
  let n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, o] = [o, n]), { min: n, max: o };
}
function OA(e, t) {
  return {
    x: hu(e.x, t.x),
    y: hu(e.y, t.y)
  };
}
function VA(e, t) {
  let n = 0.5;
  const o = _e(e), r = _e(t);
  return r > o ? n = /* @__PURE__ */ uo(t.min, t.max - o, e.min) : o > r && (n = /* @__PURE__ */ uo(e.min, e.max - r, t.min)), ht(0, 1, n);
}
function FA(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const $i = 0.35;
function LA(e = $i) {
  return e === !1 ? e = 0 : e === !0 && (e = $i), {
    x: mu(e, "left", "right"),
    y: mu(e, "top", "bottom")
  };
}
function mu(e, t, n) {
  return {
    min: gu(e, t),
    max: gu(e, n)
  };
}
function gu(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const $A = /* @__PURE__ */ new WeakMap();
class BA {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ve(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: o } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const s = (u) => {
      n && this.snapToCursor(_o(u).point), this.stopAnimation();
    }, i = (u, p) => {
      const { drag: h, dragPropagation: g, onDragStart: v } = this.getProps();
      if (h && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = yT(h), !this.openDragLock))
        return;
      this.latestPointerEvent = u, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), at((w) => {
        let b = this.getAxisMotionValue(w).get() || 0;
        if (ft.test(b)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const S = x.layout.layoutBox[w];
            S && (b = _e(S) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[w] = b;
      }), v && ue.update(() => v(u, p), !1, !0), _i(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (u, p) => {
      this.latestPointerEvent = u, this.latestPanInfo = p;
      const { dragPropagation: h, dragDirectionLock: g, onDirectionLock: v, onDrag: y } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: w } = p;
      if (g && this.currentDirection === null) {
        this.currentDirection = HA(w), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, w), this.updateAxis("y", p.point, w), this.visualElement.render(), y && ue.update(() => y(u, p), !1, !0);
    }, l = (u, p) => {
      this.latestPointerEvent = u, this.latestPanInfo = p, this.stop(u, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => {
      const { dragSnapToOrigin: u } = this.getProps();
      (u || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new zg(t, {
      onSessionStart: s,
      onStart: i,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: o,
      contextWindow: Bg(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const o = t || this.latestPointerEvent, r = n || this.latestPanInfo, s = this.isDragging;
    if (this.cancel(), !s || !r || !o)
      return;
    const { velocity: i } = r;
    this.startAnimation(i);
    const { onDragEnd: a } = this.getProps();
    a && ue.postRender(() => a(o, r));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(t, n, o) {
    const { drag: r } = this.getProps();
    if (!o || !Uo(t, r, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (i = NA(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, r = this.constraints;
    t && bn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && o ? this.constraints = kA(o.layoutBox, t) : this.constraints = !1, this.elastic = LA(n), r !== this.constraints && !bn(t) && o && this.constraints && !this.hasMutatedConstraints && at((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = FA(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !bn(t))
      return !1;
    const o = t.current;
    St(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: r } = this.visualElement;
    if (!r || !r.layout)
      return !1;
    const s = KT(o, r.root, this.visualElement.getTransformPagePoint());
    let i = OA(r.layout.layoutBox, s);
    if (n) {
      const a = n(WT(i));
      this.hasMutatedConstraints = !!a, a && (i = cg(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: o, dragElastic: r, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = at((d) => {
      if (!Uo(d, n, this.currentDirection))
        return;
      let u = l && l[d] || {};
      (i === !0 || i === d) && (u = { min: 0, max: 0 });
      const p = r ? 200 : 1e6, h = r ? 40 : 1e7, g = {
        type: "inertia",
        velocity: o ? t[d] : 0,
        bounceStiffness: p,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...u
      };
      return this.startAxisValueAnimation(d, g);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const o = this.getAxisMotionValue(t);
    return _i(this.visualElement, t), o.start(Wa(t, o, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    at((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, o = this.visualElement.getProps(), r = o[n];
    return r || this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    at((n) => {
      const { drag: o } = this.getProps();
      if (!Uo(n, o, this.currentDirection))
        return;
      const { projection: r } = this.visualElement, s = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: i, max: a } = r.layout.layoutBox[n], l = s.get() || 0;
        s.set(t[n] - de(i, a, 0.5) + l);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: o } = this.visualElement;
    if (!bn(n) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    at((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        r[i] = VA({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), at((i) => {
      if (!Uo(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(de(l, c, r[i]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    $A.set(this.visualElement, this);
    const t = this.visualElement.current, n = to(t, "pointerdown", (c) => {
      const { drag: d, dragListener: u = !0 } = this.getProps(), p = c.target, h = p !== t && RT(p);
      d && u && !h && this.start(c);
    });
    let o;
    const r = () => {
      const { dragConstraints: c } = this.getProps();
      bn(c) && c.current && (this.constraints = this.resolveRefConstraints(), o || (o = zA(t, c.current, () => this.scalePositionWithinConstraints())));
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ue.read(r);
    const a = ho(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (at((u) => {
        const p = this.getAxisMotionValue(u);
        p && (this.originPoint[u] += c[u].translate, p.set(p.get() + c[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), i(), l && l(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: o = !1, dragPropagation: r = !1, dragConstraints: s = !1, dragElastic: i = $i, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: o,
      dragPropagation: r,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function vu(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function zA(e, t, n) {
  const o = Pc(e, vu(n)), r = Pc(t, vu(n));
  return () => {
    o(), r();
  };
}
function Uo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function HA(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class jA extends Ut {
  constructor(t) {
    super(t), this.removeGroupControls = Ue, this.removeListeners = Ue, this.controls = new BA(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ue;
  }
  update() {
    const { dragControls: t } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    t !== n && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const zs = (e) => (t, n) => {
  e && ue.update(() => e(t, n), !1, !0);
};
class WA extends Ut {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ue;
  }
  onPointerDown(t) {
    this.session = new zg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Bg(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: o, onPanEnd: r } = this.node.getProps();
    return {
      onSessionStart: zs(t),
      onStart: zs(n),
      onMove: zs(o),
      onEnd: (s, i) => {
        delete this.session, r && ue.postRender(() => r(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = to(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Hs = !1;
class GA extends Sv {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o, layoutId: r } = this.props, { projection: s } = t;
    s && (n.group && n.group.add(s), o && o.register && r && o.register(s), Hs && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), ar.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: o, drag: r, isPresent: s } = this.props, { projection: i } = o;
    return i && (i.isPresent = s, t.layoutDependency !== n && i.setOptions({
      ...i.options,
      layoutDependency: n
    }), Hs = !0, r || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || ue.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props, { projection: o } = t;
    o && (o.options.layoutAnchor = n, o.root.didUpdate(), Ya.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o } = this.props, { projection: r } = t;
    Hs = !0, r && (r.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(r), o && o.deregister && o.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function jg(e) {
  const [t, n] = QM(), o = Oe(rm);
  return m(GA, { ...e, layoutGroup: o, switchLayoutGroup: Oe(Lg), isPresent: t, safeToRemove: n });
}
const UA = {
  pan: {
    Feature: WA
  },
  drag: {
    Feature: jA,
    ProjectionNode: _g,
    MeasureLayout: jg
  }
};
function yu(e, t, n) {
  const { props: o } = e;
  e.animationState && o.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const r = "onHover" + n, s = o[r];
  s && ue.postRender(() => s(t, _o(t)));
}
class KA extends Ut {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = bT(t, (n, o) => (yu(this.node, o, "Start"), (r) => yu(this.node, r, "End"))));
  }
  unmount() {
  }
}
class YA extends Ut {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = To(ho(this.node.current, "focus", () => this.onFocus()), ho(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function wu(e, t, n) {
  const { props: o } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && o.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const r = "onTap" + (n === "End" ? "" : n), s = o[r];
  s && ue.postRender(() => s(t, _o(t)));
}
class XA extends Ut {
  mount() {
    const { current: t } = this.node;
    if (!t)
      return;
    const { globalTapTarget: n, propagate: o } = this.node.props;
    this.unmount = PT(t, (r, s) => (wu(this.node, s, "Start"), (i, { success: a }) => wu(this.node, i, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: (o == null ? void 0 : o.tap) === !1
    });
  }
  unmount() {
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), js = /* @__PURE__ */ new WeakMap(), qA = (e) => {
  const t = Bi.get(e.target);
  t && t(e);
}, ZA = (e) => {
  e.forEach(qA);
};
function QA({ root: e, ...t }) {
  const n = e || document;
  js.has(n) || js.set(n, {});
  const o = js.get(n), r = JSON.stringify(t);
  return o[r] || (o[r] = new IntersectionObserver(ZA, { root: e, ...t })), o[r];
}
function JA(e, t, n) {
  const o = QA(t);
  return Bi.set(e, n), o.observe(e), () => {
    Bi.delete(e), o.unobserve(e);
  };
}
const e1 = {
  some: 0,
  all: 1
};
class t1 extends Ut {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: o, amount: r = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: o,
      threshold: typeof r == "number" ? r : e1[r]
    }, a = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, s && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: p } = this.node.getProps(), h = d ? u : p;
      h && h(c);
    };
    this.stopObserver = JA(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(n1(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function n1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const o1 = {
  inView: {
    Feature: t1
  },
  tap: {
    Feature: XA
  },
  focus: {
    Feature: YA
  },
  hover: {
    Feature: KA
  }
}, r1 = {
  layout: {
    ProjectionNode: _g,
    MeasureLayout: jg
  }
}, s1 = {
  ...MA,
  ...o1,
  ...UA,
  ...r1
}, i1 = /* @__PURE__ */ CA(s1, RA), Wg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Fe,
  {
    ref: n,
    className: U(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e
    ),
    ...t
  }
));
Wg.displayName = Fe.displayName;
const Gg = ({
  title: e = "Command Palette",
  description: t = "Search for commands",
  commandKey: n,
  children: o,
  ...r
}) => /* @__PURE__ */ m(bS, { ...r, children: /* @__PURE__ */ j(
  dp,
  {
    className: "overflow-hidden p-0 shadow-lg",
    style: { top: "25%", "--tw-translate-y": "0px" },
    hideClose: !0,
    children: [
      /* @__PURE__ */ j(fp, { className: "sr-only", children: [
        /* @__PURE__ */ m(pp, { children: e }),
        /* @__PURE__ */ m(hp, { children: t })
      ] }),
      /* @__PURE__ */ m(Wg, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: o }, n)
    ]
  }
) }), ol = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { className: "flex items-center px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ m(
  Fe.Input,
  {
    ref: n,
    className: U(
      "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t
  }
) }));
ol.displayName = Fe.Input.displayName;
const rl = f.forwardRef(({ className: e, ...t }, n) => {
  const o = f.useRef(null), [r, s] = f.useState(void 0);
  return f.useEffect(() => {
    const i = o.current;
    if (!i) return;
    const a = new ResizeObserver(([l]) => {
      s(l.contentRect.height);
    });
    return a.observe(i), () => a.disconnect();
  }, []), /* @__PURE__ */ m(
    i1.div,
    {
      animate: { height: r },
      transition: { duration: 0.1, ease: "easeInOut" },
      style: { overflow: "hidden" },
      children: /* @__PURE__ */ m("div", { ref: o, children: /* @__PURE__ */ m(
        Fe.List,
        {
          ref: n,
          className: U("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
          ...t
        }
      ) })
    }
  );
});
rl.displayName = Fe.List.displayName;
const sl = f.forwardRef((e, t) => /* @__PURE__ */ m(
  Fe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
sl.displayName = Fe.Empty.displayName;
const Dr = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Fe.Group,
  {
    ref: n,
    className: U(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e
    ),
    ...t
  }
));
Dr.displayName = Fe.Group.displayName;
const Ug = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Fe.Separator,
  {
    ref: n,
    className: U("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ug.displayName = Fe.Separator.displayName;
const Ir = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Fe.Item,
  {
    ref: n,
    className: U(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Ir.displayName = Fe.Item.displayName;
const Kg = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "span",
  {
    className: U(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      e
    ),
    ...t
  }
);
Kg.displayName = "CommandShortcut";
const Yg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { "data-slot": "table-container", className: "relative w-full overflow-auto", children: /* @__PURE__ */ m(
  "table",
  {
    ref: n,
    "data-slot": "table",
    className: U("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Yg.displayName = "Table";
const Xg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("thead", { ref: n, "data-slot": "table-header", className: U("[&_tr]:border-b", e), ...t }));
Xg.displayName = "TableHeader";
const qg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tbody",
  {
    ref: n,
    "data-slot": "table-body",
    className: U("[&_tr:last-child]:border-0", e),
    ...t
  }
));
qg.displayName = "TableBody";
const a1 = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tfoot",
  {
    ref: n,
    "data-slot": "table-footer",
    className: U("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
    ...t
  }
));
a1.displayName = "TableFooter";
const lr = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tr",
  {
    ref: n,
    "data-slot": "table-row",
    className: U(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      e
    ),
    ...t
  }
));
lr.displayName = "TableRow";
const Zg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "th",
  {
    ref: n,
    "data-slot": "table-head",
    className: U(
      "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Zg.displayName = "TableHead";
const zi = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "td",
  {
    ref: n,
    "data-slot": "table-cell",
    className: U(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
zi.displayName = "TableCell";
const l1 = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "caption",
  {
    ref: n,
    "data-slot": "table-caption",
    className: U("text-muted-foreground mt-4 text-sm", e),
    ...t
  }
));
l1.displayName = "TableCaption";
function c1(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const u1 = (e) => {
  switch (e) {
    case "success":
      return p1;
    case "info":
      return m1;
    case "warning":
      return h1;
    case "error":
      return g1;
    default:
      return null;
  }
}, d1 = Array(12).fill(0), f1 = ({ visible: e, className: t }) => /* @__PURE__ */ F.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ F.createElement("div", {
  className: "sonner-spinner"
}, d1.map((n, o) => /* @__PURE__ */ F.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${o}`
})))), p1 = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), h1 = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), m1 = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), g1 = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), v1 = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ F.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ F.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), y1 = () => {
  const [e, t] = F.useState(document.hidden);
  return F.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Hi = 1;
class w1 {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const n = this.subscribers.indexOf(t);
      this.subscribers.splice(n, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((n) => n(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var n;
      const { message: o, ...r } = t, s = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Hi++, i = this.toasts.find((l) => l.id === s), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), i ? this.toasts = this.toasts.map((l) => l.id === s ? (this.publish({
        ...l,
        ...t,
        id: s,
        title: o
      }), {
        ...l,
        ...t,
        id: s,
        dismissible: a,
        title: o
      }) : l) : this.addToast({
        title: o,
        ...r,
        dismissible: a,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((o) => o({
        id: n.id,
        dismiss: !0
      }));
    }), t), this.message = (t, n) => this.create({
      ...n,
      message: t
    }), this.error = (t, n) => this.create({
      ...n,
      message: t,
      type: "error"
    }), this.success = (t, n) => this.create({
      ...n,
      type: "success",
      message: t
    }), this.info = (t, n) => this.create({
      ...n,
      type: "info",
      message: t
    }), this.warning = (t, n) => this.create({
      ...n,
      type: "warning",
      message: t
    }), this.loading = (t, n) => this.create({
      ...n,
      type: "loading",
      message: t
    }), this.promise = (t, n) => {
      if (!n)
        return;
      let o;
      n.loading !== void 0 && (o = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const r = Promise.resolve(t instanceof Function ? t() : t);
      let s = o !== void 0, i;
      const a = r.then(async (c) => {
        if (i = [
          "resolve",
          c
        ], F.isValidElement(c))
          s = !1, this.create({
            id: o,
            type: "default",
            message: c
          });
        else if (x1(c) && !c.ok) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, p = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, g = typeof u == "object" && !F.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "error",
            description: p,
            ...g
          });
        } else if (c instanceof Error) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, p = typeof n.description == "function" ? await n.description(c) : n.description, g = typeof u == "object" && !F.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "error",
            description: p,
            ...g
          });
        } else if (n.success !== void 0) {
          s = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, p = typeof n.description == "function" ? await n.description(c) : n.description, g = typeof u == "object" && !F.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "success",
            description: p,
            ...g
          });
        }
      }).catch(async (c) => {
        if (i = [
          "reject",
          c
        ], n.error !== void 0) {
          s = !1;
          const d = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof d == "object" && !F.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: o,
            type: "error",
            description: u,
            ...h
          });
        }
      }).finally(() => {
        s && (this.dismiss(o), o = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, d) => a.then(() => i[0] === "reject" ? d(i[1]) : c(i[1])).catch(d));
      return typeof o != "string" && typeof o != "number" ? {
        unwrap: l
      } : Object.assign(o, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const o = (n == null ? void 0 : n.id) || Hi++;
      return this.create({
        jsx: t(o),
        id: o,
        ...n
      }), o;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const ke = new w1(), b1 = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Hi++;
  return ke.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, x1 = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", S1 = b1, C1 = () => ke.toasts, R1 = () => ke.getActiveToasts();
Object.assign(S1, {
  success: ke.success,
  info: ke.info,
  warning: ke.warning,
  error: ke.error,
  custom: ke.custom,
  message: ke.message,
  promise: ke.promise,
  dismiss: ke.dismiss,
  loading: ke.loading
}, {
  getHistory: C1,
  getToasts: R1
});
c1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Ko(e) {
  return e.label !== void 0;
}
const E1 = 3, P1 = "24px", T1 = "16px", bu = 4e3, M1 = 356, A1 = 14, _1 = 45, D1 = 200;
function it(...e) {
  return e.filter(Boolean).join(" ");
}
function I1(e) {
  const [t, n] = e.split("-"), o = [];
  return t && o.push(t), n && o.push(n), o;
}
const N1 = (e) => {
  var t, n, o, r, s, i, a, l, c;
  const { invert: d, toast: u, unstyled: p, interacting: h, setHeights: g, visibleToasts: v, heights: y, index: w, toasts: b, expanded: x, removeToast: S, defaultRichColors: R, closeButton: P, style: T, cancelButtonStyle: E, actionButtonStyle: N, className: D = "", descriptionClassName: H = "", duration: B, position: Y, gap: K, expandByDefault: J, classNames: I, icons: X, closeButtonAriaLabel: L = "Close toast" } = e, [V, k] = F.useState(null), [se, _] = F.useState(null), [C, M] = F.useState(!1), [A, z] = F.useState(!1), [O, W] = F.useState(!1), [$, oe] = F.useState(!1), [ne, ae] = F.useState(!1), [he, me] = F.useState(0), [Kt, Rt] = F.useState(0), Ye = F.useRef(u.duration || B || bu), Do = F.useRef(null), Ne = F.useRef(null), uv = w === 0, dv = w + 1 <= v, Le = u.type, fn = u.dismissible !== !1, fv = u.className || "", pv = u.descriptionClassName || "", Io = F.useMemo(() => y.findIndex((ie) => ie.toastId === u.id) || 0, [
    y,
    u.id
  ]), hv = F.useMemo(() => {
    var ie;
    return (ie = u.closeButton) != null ? ie : P;
  }, [
    u.closeButton,
    P
  ]), ul = F.useMemo(() => u.duration || B || bu, [
    u.duration,
    B
  ]), ds = F.useRef(0), pn = F.useRef(0), dl = F.useRef(0), hn = F.useRef(null), [mv, gv] = Y.split("-"), fl = F.useMemo(() => y.reduce((ie, we, Ee) => Ee >= Io ? ie : ie + we.height, 0), [
    y,
    Io
  ]), pl = y1(), vv = u.invert || d, fs = Le === "loading";
  pn.current = F.useMemo(() => Io * K + fl, [
    Io,
    fl
  ]), F.useEffect(() => {
    Ye.current = ul;
  }, [
    ul
  ]), F.useEffect(() => {
    M(!0);
  }, []), F.useEffect(() => {
    const ie = Ne.current;
    if (ie) {
      const we = ie.getBoundingClientRect().height;
      return Rt(we), g((Ee) => [
        {
          toastId: u.id,
          height: we,
          position: u.position
        },
        ...Ee
      ]), () => g((Ee) => Ee.filter(($e) => $e.toastId !== u.id));
    }
  }, [
    g,
    u.id
  ]), F.useLayoutEffect(() => {
    if (!C) return;
    const ie = Ne.current, we = ie.style.height;
    ie.style.height = "auto";
    const Ee = ie.getBoundingClientRect().height;
    ie.style.height = we, Rt(Ee), g(($e) => $e.find((xe) => xe.toastId === u.id) ? $e.map((xe) => xe.toastId === u.id ? {
      ...xe,
      height: Ee
    } : xe) : [
      {
        toastId: u.id,
        height: Ee,
        position: u.position
      },
      ...$e
    ]);
  }, [
    C,
    u.title,
    u.description,
    g,
    u.id,
    u.jsx,
    u.action,
    u.cancel
  ]);
  const Et = F.useCallback(() => {
    z(!0), me(pn.current), g((ie) => ie.filter((we) => we.toastId !== u.id)), setTimeout(() => {
      S(u);
    }, D1);
  }, [
    u,
    S,
    g,
    pn
  ]);
  F.useEffect(() => {
    if (u.promise && Le === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let ie;
    return x || h || pl ? (() => {
      if (dl.current < ds.current) {
        const $e = (/* @__PURE__ */ new Date()).getTime() - ds.current;
        Ye.current = Ye.current - $e;
      }
      dl.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      Ye.current !== 1 / 0 && (ds.current = (/* @__PURE__ */ new Date()).getTime(), ie = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), Et();
      }, Ye.current));
    })(), () => clearTimeout(ie);
  }, [
    x,
    h,
    u,
    Le,
    pl,
    Et
  ]), F.useEffect(() => {
    u.delete && (Et(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    Et,
    u.delete
  ]);
  function yv() {
    var ie;
    if (X != null && X.loading) {
      var we;
      return /* @__PURE__ */ F.createElement("div", {
        className: it(I == null ? void 0 : I.loader, u == null || (we = u.classNames) == null ? void 0 : we.loader, "sonner-loader"),
        "data-visible": Le === "loading"
      }, X.loading);
    }
    return /* @__PURE__ */ F.createElement(f1, {
      className: it(I == null ? void 0 : I.loader, u == null || (ie = u.classNames) == null ? void 0 : ie.loader),
      visible: Le === "loading"
    });
  }
  const wv = u.icon || (X == null ? void 0 : X[Le]) || u1(Le);
  var hl, ml;
  return /* @__PURE__ */ F.createElement("li", {
    tabIndex: 0,
    ref: Ne,
    className: it(D, fv, I == null ? void 0 : I.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, I == null ? void 0 : I.default, I == null ? void 0 : I[Le], u == null || (n = u.classNames) == null ? void 0 : n[Le]),
    "data-sonner-toast": "",
    "data-rich-colors": (hl = u.richColors) != null ? hl : R,
    "data-styled": !(u.jsx || u.unstyled || p),
    "data-mounted": C,
    "data-promise": !!u.promise,
    "data-swiped": ne,
    "data-removed": A,
    "data-visible": dv,
    "data-y-position": mv,
    "data-x-position": gv,
    "data-index": w,
    "data-front": uv,
    "data-swiping": O,
    "data-dismissible": fn,
    "data-type": Le,
    "data-invert": vv,
    "data-swipe-out": $,
    "data-swipe-direction": se,
    "data-expanded": !!(x || J && C),
    "data-testid": u.testId,
    style: {
      "--index": w,
      "--toasts-before": w,
      "--z-index": b.length - w,
      "--offset": `${A ? he : pn.current}px`,
      "--initial-height": J ? "auto" : `${Kt}px`,
      ...T,
      ...u.style
    },
    onDragEnd: () => {
      W(!1), k(null), hn.current = null;
    },
    onPointerDown: (ie) => {
      ie.button !== 2 && (fs || !fn || (Do.current = /* @__PURE__ */ new Date(), me(pn.current), ie.target.setPointerCapture(ie.pointerId), ie.target.tagName !== "BUTTON" && (W(!0), hn.current = {
        x: ie.clientX,
        y: ie.clientY
      })));
    },
    onPointerUp: () => {
      var ie, we, Ee;
      if ($ || !fn) return;
      hn.current = null;
      const $e = Number(((ie = Ne.current) == null ? void 0 : ie.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), No = Number(((we = Ne.current) == null ? void 0 : we.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), xe = (/* @__PURE__ */ new Date()).getTime() - ((Ee = Do.current) == null ? void 0 : Ee.getTime()), je = V === "x" ? $e : No, ko = Math.abs(je) / xe;
      if (Math.abs(je) >= _1 || ko > 0.11) {
        me(pn.current), u.onDismiss == null || u.onDismiss.call(u, u), _(V === "x" ? $e > 0 ? "right" : "left" : No > 0 ? "down" : "up"), Et(), oe(!0);
        return;
      } else {
        var Xe, qe;
        (Xe = Ne.current) == null || Xe.style.setProperty("--swipe-amount-x", "0px"), (qe = Ne.current) == null || qe.style.setProperty("--swipe-amount-y", "0px");
      }
      ae(!1), W(!1), k(null);
    },
    onPointerMove: (ie) => {
      var we, Ee, $e;
      if (!hn.current || !fn || ((we = window.getSelection()) == null ? void 0 : we.toString().length) > 0) return;
      const xe = ie.clientY - hn.current.y, je = ie.clientX - hn.current.x;
      var ko;
      const Xe = (ko = e.swipeDirections) != null ? ko : I1(Y);
      !V && (Math.abs(je) > 1 || Math.abs(xe) > 1) && k(Math.abs(je) > Math.abs(xe) ? "x" : "y");
      let qe = {
        x: 0,
        y: 0
      };
      const gl = (Yt) => 1 / (1.5 + Math.abs(Yt) / 20);
      if (V === "y") {
        if (Xe.includes("top") || Xe.includes("bottom"))
          if (Xe.includes("top") && xe < 0 || Xe.includes("bottom") && xe > 0)
            qe.y = xe;
          else {
            const Yt = xe * gl(xe);
            qe.y = Math.abs(Yt) < Math.abs(xe) ? Yt : xe;
          }
      } else if (V === "x" && (Xe.includes("left") || Xe.includes("right")))
        if (Xe.includes("left") && je < 0 || Xe.includes("right") && je > 0)
          qe.x = je;
        else {
          const Yt = je * gl(je);
          qe.x = Math.abs(Yt) < Math.abs(je) ? Yt : je;
        }
      (Math.abs(qe.x) > 0 || Math.abs(qe.y) > 0) && ae(!0), (Ee = Ne.current) == null || Ee.style.setProperty("--swipe-amount-x", `${qe.x}px`), ($e = Ne.current) == null || $e.style.setProperty("--swipe-amount-y", `${qe.y}px`);
    }
  }, hv && !u.jsx && Le !== "loading" ? /* @__PURE__ */ F.createElement("button", {
    "aria-label": L,
    "data-disabled": fs,
    "data-close-button": !0,
    onClick: fs || !fn ? () => {
    } : () => {
      Et(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: it(I == null ? void 0 : I.closeButton, u == null || (o = u.classNames) == null ? void 0 : o.closeButton)
  }, (ml = X == null ? void 0 : X.close) != null ? ml : v1) : null, (Le || u.icon || u.promise) && u.icon !== null && ((X == null ? void 0 : X[Le]) !== null || u.icon) ? /* @__PURE__ */ F.createElement("div", {
    "data-icon": "",
    className: it(I == null ? void 0 : I.icon, u == null || (r = u.classNames) == null ? void 0 : r.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || yv() : null, u.type !== "loading" ? wv : null) : null, /* @__PURE__ */ F.createElement("div", {
    "data-content": "",
    className: it(I == null ? void 0 : I.content, u == null || (s = u.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ F.createElement("div", {
    "data-title": "",
    className: it(I == null ? void 0 : I.title, u == null || (i = u.classNames) == null ? void 0 : i.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ F.createElement("div", {
    "data-description": "",
    className: it(H, pv, I == null ? void 0 : I.description, u == null || (a = u.classNames) == null ? void 0 : a.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ F.isValidElement(u.cancel) ? u.cancel : u.cancel && Ko(u.cancel) ? /* @__PURE__ */ F.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || E,
    onClick: (ie) => {
      Ko(u.cancel) && fn && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, ie), Et());
    },
    className: it(I == null ? void 0 : I.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ F.isValidElement(u.action) ? u.action : u.action && Ko(u.action) ? /* @__PURE__ */ F.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || N,
    onClick: (ie) => {
      Ko(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, ie), !ie.defaultPrevented && Et());
    },
    className: it(I == null ? void 0 : I.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function xu() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function k1(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((o, r) => {
    const s = r === 1, i = s ? "--mobile-offset" : "--offset", a = s ? T1 : P1;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((d) => {
        n[`${i}-${d}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof o == "number" || typeof o == "string" ? l(o) : typeof o == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      o[c] === void 0 ? n[`${i}-${c}`] = a : n[`${i}-${c}`] = typeof o[c] == "number" ? `${o[c]}px` : o[c];
    }) : l(a);
  }), n;
}
const O1 = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const { id: o, invert: r, position: s = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: l, className: c, offset: d, mobileOffset: u, theme: p = "light", richColors: h, duration: g, style: v, visibleToasts: y = E1, toastOptions: w, dir: b = xu(), gap: x = A1, icons: S, containerAriaLabel: R = "Notifications" } = t, [P, T] = F.useState([]), E = F.useMemo(() => o ? P.filter((C) => C.toasterId === o) : P.filter((C) => !C.toasterId), [
    P,
    o
  ]), N = F.useMemo(() => Array.from(new Set([
    s
  ].concat(E.filter((C) => C.position).map((C) => C.position)))), [
    E,
    s
  ]), [D, H] = F.useState([]), [B, Y] = F.useState(!1), [K, J] = F.useState(!1), [I, X] = F.useState(p !== "system" ? p : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), L = F.useRef(null), V = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), k = F.useRef(null), se = F.useRef(!1), _ = F.useCallback((C) => {
    T((M) => {
      var A;
      return (A = M.find((z) => z.id === C.id)) != null && A.delete || ke.dismiss(C.id), M.filter(({ id: z }) => z !== C.id);
    });
  }, []);
  return F.useEffect(() => ke.subscribe((C) => {
    if (C.dismiss) {
      requestAnimationFrame(() => {
        T((M) => M.map((A) => A.id === C.id ? {
          ...A,
          delete: !0
        } : A));
      });
      return;
    }
    setTimeout(() => {
      Du.flushSync(() => {
        T((M) => {
          const A = M.findIndex((z) => z.id === C.id);
          return A !== -1 ? [
            ...M.slice(0, A),
            {
              ...M[A],
              ...C
            },
            ...M.slice(A + 1)
          ] : [
            C,
            ...M
          ];
        });
      });
    });
  }), [
    P
  ]), F.useEffect(() => {
    if (p !== "system") {
      X(p);
      return;
    }
    if (p === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? X("dark") : X("light")), typeof window > "u") return;
    const C = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      C.addEventListener("change", ({ matches: M }) => {
        X(M ? "dark" : "light");
      });
    } catch {
      C.addListener(({ matches: A }) => {
        try {
          X(A ? "dark" : "light");
        } catch (z) {
          console.error(z);
        }
      });
    }
  }, [
    p
  ]), F.useEffect(() => {
    P.length <= 1 && Y(!1);
  }, [
    P
  ]), F.useEffect(() => {
    const C = (M) => {
      var A;
      if (i.every((W) => M[W] || M.code === W)) {
        var O;
        Y(!0), (O = L.current) == null || O.focus();
      }
      M.code === "Escape" && (document.activeElement === L.current || (A = L.current) != null && A.contains(document.activeElement)) && Y(!1);
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [
    i
  ]), F.useEffect(() => {
    if (L.current)
      return () => {
        k.current && (k.current.focus({
          preventScroll: !0
        }), k.current = null, se.current = !1);
      };
  }, [
    L.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ F.createElement("section", {
    ref: n,
    "aria-label": `${R} ${V}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, N.map((C, M) => {
    var A;
    const [z, O] = C.split("-");
    return E.length ? /* @__PURE__ */ F.createElement("ol", {
      key: C,
      dir: b === "auto" ? xu() : b,
      tabIndex: -1,
      ref: L,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": I,
      "data-y-position": z,
      "data-x-position": O,
      style: {
        "--front-toast-height": `${((A = D[0]) == null ? void 0 : A.height) || 0}px`,
        "--width": `${M1}px`,
        "--gap": `${x}px`,
        ...v,
        ...k1(d, u)
      },
      onBlur: (W) => {
        se.current && !W.currentTarget.contains(W.relatedTarget) && (se.current = !1, k.current && (k.current.focus({
          preventScroll: !0
        }), k.current = null));
      },
      onFocus: (W) => {
        W.target instanceof HTMLElement && W.target.dataset.dismissible === "false" || se.current || (se.current = !0, k.current = W.relatedTarget);
      },
      onMouseEnter: () => Y(!0),
      onMouseMove: () => Y(!0),
      onMouseLeave: () => {
        K || Y(!1);
      },
      onDragEnd: () => Y(!1),
      onPointerDown: (W) => {
        W.target instanceof HTMLElement && W.target.dataset.dismissible === "false" || J(!0);
      },
      onPointerUp: () => J(!1)
    }, E.filter((W) => !W.position && M === 0 || W.position === C).map((W, $) => {
      var oe, ne;
      return /* @__PURE__ */ F.createElement(N1, {
        key: W.id,
        icons: S,
        index: $,
        toast: W,
        defaultRichColors: h,
        duration: (oe = w == null ? void 0 : w.duration) != null ? oe : g,
        className: w == null ? void 0 : w.className,
        descriptionClassName: w == null ? void 0 : w.descriptionClassName,
        invert: r,
        visibleToasts: y,
        closeButton: (ne = w == null ? void 0 : w.closeButton) != null ? ne : l,
        interacting: K,
        position: C,
        style: w == null ? void 0 : w.style,
        unstyled: w == null ? void 0 : w.unstyled,
        classNames: w == null ? void 0 : w.classNames,
        cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
        actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
        closeButtonAriaLabel: w == null ? void 0 : w.closeButtonAriaLabel,
        removeToast: _,
        toasts: E.filter((ae) => ae.position == W.position),
        heights: D.filter((ae) => ae.position == W.position),
        setHeights: H,
        expandByDefault: a,
        gap: x,
        expanded: B,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), tD = ({ ...e }) => /* @__PURE__ */ m(
  O1,
  {
    theme: "system",
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    },
    ...e
  }
);
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function It(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e, t) {
  return (n) => {
    t.setState((o) => ({
      ...o,
      [e]: It(n, o[e])
    }));
  };
}
function us(e) {
  return e instanceof Function;
}
function V1(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function F1(e, t) {
  const n = [], o = (r) => {
    r.forEach((s) => {
      n.push(s);
      const i = t(s);
      i != null && i.length && o(i);
    });
  };
  return o(e), n;
}
function ee(e, t, n) {
  let o = [], r;
  return (s) => {
    let i;
    n.key && n.debug && (i = Date.now());
    const a = e(s);
    if (!(a.length !== o.length || a.some((d, u) => o[u] !== d)))
      return r;
    o = a;
    let c;
    if (n.key && n.debug && (c = Date.now()), r = t(...a), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - i) * 100) / 100, u = Math.round((Date.now() - c) * 100) / 100, p = u / 16, h = (g, v) => {
        for (g = String(g); g.length < v; )
          g = " " + g;
        return g;
      };
      console.info(`%c⏱ ${h(u, 5)} /${h(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return r;
  };
}
function te(e, t, n, o) {
  return {
    debug: () => {
      var r;
      return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: o
  };
}
function L1(e, t, n, o) {
  const r = () => {
    var i;
    return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
  }, s = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(o),
    renderValue: r,
    getContext: ee(() => [e, n, t, s], (i, a, l, c) => ({
      table: i,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), te(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((i) => {
    i.createCell == null || i.createCell(s, n, t, e);
  }, {}), s;
}
function $1(e, t, n, o) {
  var r, s;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (r = (s = a.id) != null ? s : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? r : typeof a.header == "string" ? a.header : void 0, d;
  if (a.accessorFn ? d = a.accessorFn : l && (l.includes(".") ? d = (p) => {
    let h = p;
    for (const v of l.split(".")) {
      var g;
      h = (g = h) == null ? void 0 : g[v], process.env.NODE_ENV !== "production" && h === void 0 && console.warn(`"${v}" in deeply nested key "${l}" returned undefined.`);
    }
    return h;
  } : d = (p) => p[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let u = {
    id: `${String(c)}`,
    accessorFn: d,
    parent: o,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: ee(() => [!0], () => {
      var p;
      return [u, ...(p = u.columns) == null ? void 0 : p.flatMap((h) => h.getFlatColumns())];
    }, te(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: ee(() => [e._getOrderColumnsFn()], (p) => {
      var h;
      if ((h = u.columns) != null && h.length) {
        let g = u.columns.flatMap((v) => v.getLeafColumns());
        return p(g);
      }
      return [u];
    }, te(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(u, e);
  return u;
}
const Pe = "debugHeaders";
function Su(e, t, n) {
  var o;
  let s = {
    id: (o = n.id) != null ? o : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const i = [], a = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(a), i.push(l);
      };
      return a(s), i;
    },
    getContext: () => ({
      table: e,
      header: s,
      column: t
    })
  };
  return e._features.forEach((i) => {
    i.createHeader == null || i.createHeader(s, e);
  }), s;
}
const B1 = {
  createTable: (e) => {
    e.getHeaderGroups = ee(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => {
      var s, i;
      const a = (s = o == null ? void 0 : o.map((u) => n.find((p) => p.id === u)).filter(Boolean)) != null ? s : [], l = (i = r == null ? void 0 : r.map((u) => n.find((p) => p.id === u)).filter(Boolean)) != null ? i : [], c = n.filter((u) => !(o != null && o.includes(u.id)) && !(r != null && r.includes(u.id)));
      return Yo(t, [...a, ...c, ...l], e);
    }, te(e.options, Pe, "getHeaderGroups")), e.getCenterHeaderGroups = ee(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => (n = n.filter((s) => !(o != null && o.includes(s.id)) && !(r != null && r.includes(s.id))), Yo(t, n, e, "center")), te(e.options, Pe, "getCenterHeaderGroups")), e.getLeftHeaderGroups = ee(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, o) => {
      var r;
      const s = (r = o == null ? void 0 : o.map((i) => n.find((a) => a.id === i)).filter(Boolean)) != null ? r : [];
      return Yo(t, s, e, "left");
    }, te(e.options, Pe, "getLeftHeaderGroups")), e.getRightHeaderGroups = ee(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, o) => {
      var r;
      const s = (r = o == null ? void 0 : o.map((i) => n.find((a) => a.id === i)).filter(Boolean)) != null ? r : [];
      return Yo(t, s, e, "right");
    }, te(e.options, Pe, "getRightHeaderGroups")), e.getFooterGroups = ee(() => [e.getHeaderGroups()], (t) => [...t].reverse(), te(e.options, Pe, "getFooterGroups")), e.getLeftFooterGroups = ee(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), te(e.options, Pe, "getLeftFooterGroups")), e.getCenterFooterGroups = ee(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), te(e.options, Pe, "getCenterFooterGroups")), e.getRightFooterGroups = ee(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), te(e.options, Pe, "getRightFooterGroups")), e.getFlatHeaders = ee(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), te(e.options, Pe, "getFlatHeaders")), e.getLeftFlatHeaders = ee(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), te(e.options, Pe, "getLeftFlatHeaders")), e.getCenterFlatHeaders = ee(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), te(e.options, Pe, "getCenterFlatHeaders")), e.getRightFlatHeaders = ee(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), te(e.options, Pe, "getRightFlatHeaders")), e.getCenterLeafHeaders = ee(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), te(e.options, Pe, "getCenterLeafHeaders")), e.getLeftLeafHeaders = ee(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), te(e.options, Pe, "getLeftLeafHeaders")), e.getRightLeafHeaders = ee(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), te(e.options, Pe, "getRightLeafHeaders")), e.getLeafHeaders = ee(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, o) => {
      var r, s, i, a, l, c;
      return [...(r = (s = t[0]) == null ? void 0 : s.headers) != null ? r : [], ...(i = (a = n[0]) == null ? void 0 : a.headers) != null ? i : [], ...(l = (c = o[0]) == null ? void 0 : c.headers) != null ? l : []].map((d) => d.getLeafHeaders()).flat();
    }, te(e.options, Pe, "getLeafHeaders"));
  }
};
function Yo(e, t, n, o) {
  var r, s;
  let i = 0;
  const a = function(p, h) {
    h === void 0 && (h = 1), i = Math.max(i, h), p.filter((g) => g.getIsVisible()).forEach((g) => {
      var v;
      (v = g.columns) != null && v.length && a(g.columns, h + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (p, h) => {
    const g = {
      depth: h,
      id: [o, `${h}`].filter(Boolean).join("_"),
      headers: []
    }, v = [];
    p.forEach((y) => {
      const w = [...v].reverse()[0], b = y.column.depth === g.depth;
      let x, S = !1;
      if (b && y.column.parent ? x = y.column.parent : (x = y.column, S = !0), w && (w == null ? void 0 : w.column) === x)
        w.subHeaders.push(y);
      else {
        const R = Su(n, x, {
          id: [o, h, x.id, y == null ? void 0 : y.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${v.filter((P) => P.column === x).length}` : void 0,
          depth: h,
          index: v.length
        });
        R.subHeaders.push(y), v.push(R);
      }
      g.headers.push(y), y.headerGroup = g;
    }), l.push(g), h > 0 && c(v, h - 1);
  }, d = t.map((p, h) => Su(n, p, {
    depth: i,
    index: h
  }));
  c(d, i - 1), l.reverse();
  const u = (p) => p.filter((g) => g.column.getIsVisible()).map((g) => {
    let v = 0, y = 0, w = [0];
    g.subHeaders && g.subHeaders.length ? (w = [], u(g.subHeaders).forEach((x) => {
      let {
        colSpan: S,
        rowSpan: R
      } = x;
      v += S, w.push(R);
    })) : v = 1;
    const b = Math.min(...w);
    return y = y + b, g.colSpan = v, g.rowSpan = y, {
      colSpan: v,
      rowSpan: y
    };
  });
  return u((r = (s = l[0]) == null ? void 0 : s.headers) != null ? r : []), l;
}
const il = (e, t, n, o, r, s, i) => {
  let a = {
    id: t,
    index: o,
    original: n,
    depth: r,
    parentId: i,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (a._valuesCache.hasOwnProperty(l))
        return a._valuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return a._valuesCache[l] = c.accessorFn(a.original, o), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = c.columnDef.getUniqueValues(a.original, o), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = a.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => F1(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = a;
      for (; ; ) {
        const d = c.getParentRow();
        if (!d) break;
        l.push(d), c = d;
      }
      return l.reverse();
    },
    getAllCells: ee(() => [e.getAllLeafColumns()], (l) => l.map((c) => L1(e, a, c, c.id)), te(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: ee(() => [a.getAllCells()], (l) => l.reduce((c, d) => (c[d.column.id] = d, c), {}), te(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, z1 = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Qg = (e, t, n) => {
  var o, r;
  const s = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(s));
};
Qg.autoRemove = (e) => tt(e);
const Jg = (e, t, n) => {
  var o;
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
};
Jg.autoRemove = (e) => tt(e);
const ev = (e, t, n) => {
  var o;
  return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ev.autoRemove = (e) => tt(e);
const tv = (e, t, n) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
};
tv.autoRemove = (e) => tt(e);
const nv = (e, t, n) => !n.some((o) => {
  var r;
  return !((r = e.getValue(t)) != null && r.includes(o));
});
nv.autoRemove = (e) => tt(e) || !(e != null && e.length);
const ov = (e, t, n) => n.some((o) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
});
ov.autoRemove = (e) => tt(e) || !(e != null && e.length);
const rv = (e, t, n) => e.getValue(t) === n;
rv.autoRemove = (e) => tt(e);
const sv = (e, t, n) => e.getValue(t) == n;
sv.autoRemove = (e) => tt(e);
const al = (e, t, n) => {
  let [o, r] = n;
  const s = e.getValue(t);
  return s >= o && s <= r;
};
al.resolveFilterValue = (e) => {
  let [t, n] = e, o = typeof t != "number" ? parseFloat(t) : t, r = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(o) ? -1 / 0 : o, i = n === null || Number.isNaN(r) ? 1 / 0 : r;
  if (s > i) {
    const a = s;
    s = i, i = a;
  }
  return [s, i];
};
al.autoRemove = (e) => tt(e) || tt(e[0]) && tt(e[1]);
const yt = {
  includesString: Qg,
  includesStringSensitive: Jg,
  equalsString: ev,
  arrIncludes: tv,
  arrIncludesAll: nv,
  arrIncludesSome: ov,
  equals: rv,
  weakEquals: sv,
  inNumberRange: al
};
function tt(e) {
  return e == null || e === "";
}
const H1 = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: He("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
      return typeof o == "string" ? yt.includesString : typeof o == "number" ? yt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? yt.equals : Array.isArray(o) ? yt.arrIncludes : yt.weakEquals;
    }, e.getFilterFn = () => {
      var n, o;
      return us(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : yt[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, o, r;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((o = t.options.enableColumnFilters) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((o) => o.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, o;
      return (n = (o = t.getState().columnFilters) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((o) => {
        const r = e.getFilterFn(), s = o == null ? void 0 : o.find((d) => d.id === e.id), i = It(n, s ? s.value : void 0);
        if (Cu(r, i, e)) {
          var a;
          return (a = o == null ? void 0 : o.filter((d) => d.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: i
        };
        if (s) {
          var c;
          return (c = o == null ? void 0 : o.map((d) => d.id === e.id ? l : d)) != null ? c : [];
        }
        return o != null && o.length ? [...o, l] : [l];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), o = (r) => {
        var s;
        return (s = It(t, r)) == null ? void 0 : s.filter((i) => {
          const a = n.find((l) => l.id === i.id);
          if (a) {
            const l = a.getFilterFn();
            if (Cu(l, i.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
    }, e.resetColumnFilters = (t) => {
      var n, o;
      e.setColumnFilters(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Cu(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const j1 = (e, t, n) => n.reduce((o, r) => {
  const s = r.getValue(e);
  return o + (typeof s == "number" ? s : 0);
}, 0), W1 = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const s = r.getValue(e);
    s != null && (o > s || o === void 0 && s >= s) && (o = s);
  }), o;
}, G1 = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const s = r.getValue(e);
    s != null && (o < s || o === void 0 && s >= s) && (o = s);
  }), o;
}, U1 = (e, t, n) => {
  let o, r;
  return n.forEach((s) => {
    const i = s.getValue(e);
    i != null && (o === void 0 ? i >= i && (o = r = i) : (o > i && (o = i), r < i && (r = i)));
  }), [o, r];
}, K1 = (e, t) => {
  let n = 0, o = 0;
  if (t.forEach((r) => {
    let s = r.getValue(e);
    s != null && (s = +s) >= s && (++n, o += s);
  }), n) return o / n;
}, Y1 = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((s) => s.getValue(e));
  if (!V1(n))
    return;
  if (n.length === 1)
    return n[0];
  const o = Math.floor(n.length / 2), r = n.sort((s, i) => s - i);
  return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
}, X1 = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), q1 = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Z1 = (e, t) => t.length, Ws = {
  sum: j1,
  min: W1,
  max: G1,
  extent: U1,
  mean: K1,
  median: Y1,
  unique: X1,
  uniqueCount: q1,
  count: Z1
}, Q1 = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: He("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((o) => o !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, o;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((o = t.options.enableGrouping) != null ? o : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
      if (typeof o == "number")
        return Ws.sum;
      if (Object.prototype.toString.call(o) === "[object Date]")
        return Ws.extent;
    }, e.getAggregationFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return us(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : Ws[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, o;
      e.setGrouping(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const o = t.getColumn(n);
      return o != null && o.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = o.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, o) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = n.subRows) != null && r.length);
    };
  }
};
function J1(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const o = e.filter((s) => !t.includes(s.id));
  return n === "remove" ? o : [...t.map((s) => e.find((i) => i.id === s)).filter(Boolean), ...o];
}
const e_ = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: He("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = ee((n) => [no(t, n)], (n) => n.findIndex((o) => o.id === e.id), te(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var o;
      return ((o = no(t, n)[0]) == null ? void 0 : o.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var o;
      const r = no(t, n);
      return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = ee(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, o) => (r) => {
      let s = [];
      if (!(t != null && t.length))
        s = r;
      else {
        const i = [...t], a = [...r];
        for (; a.length && i.length; ) {
          const l = i.shift(), c = a.findIndex((d) => d.id === l);
          c > -1 && s.push(a.splice(c, 1)[0]);
        }
        s = [...s, ...a];
      }
      return J1(s, n, o);
    }, te(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Gs = () => ({
  left: [],
  right: []
}), t_ = {
  getInitialState: (e) => ({
    columnPinning: Gs(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: He("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      t.setColumnPinning((r) => {
        var s, i;
        if (n === "right") {
          var a, l;
          return {
            left: ((a = r == null ? void 0 : r.left) != null ? a : []).filter((u) => !(o != null && o.includes(u))),
            right: [...((l = r == null ? void 0 : r.right) != null ? l : []).filter((u) => !(o != null && o.includes(u))), ...o]
          };
        }
        if (n === "left") {
          var c, d;
          return {
            left: [...((c = r == null ? void 0 : r.left) != null ? c : []).filter((u) => !(o != null && o.includes(u))), ...o],
            right: ((d = r == null ? void 0 : r.right) != null ? d : []).filter((u) => !(o != null && o.includes(u)))
          };
        }
        return {
          left: ((s = r == null ? void 0 : r.left) != null ? s : []).filter((u) => !(o != null && o.includes(u))),
          right: ((i = r == null ? void 0 : r.right) != null ? i : []).filter((u) => !(o != null && o.includes(u)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((o) => {
      var r, s, i;
      return ((r = o.columnDef.enablePinning) != null ? r : !0) && ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? s : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((a) => a.id), {
        left: o,
        right: r
      } = t.getState().columnPinning, s = n.some((a) => o == null ? void 0 : o.includes(a)), i = n.some((a) => r == null ? void 0 : r.includes(a));
      return s ? "left" : i ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      return r ? (n = (o = t.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = ee(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, o, r) => {
      const s = [...o ?? [], ...r ?? []];
      return n.filter((i) => !s.includes(i.column.id));
    }, te(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = ee(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "left"
    })), te(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = ee(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, o) => (o ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "right"
    })), te(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, o;
      return e.setColumnPinning(t ? Gs() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : Gs());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const o = e.getState().columnPinning;
      if (!t) {
        var r, s;
        return !!((r = o.left) != null && r.length || (s = o.right) != null && s.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e.getLeftLeafColumns = ee(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), te(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = ee(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), te(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = ee(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o) => {
      const r = [...n ?? [], ...o ?? []];
      return t.filter((s) => !r.includes(s.id));
    }, te(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function n_(e) {
  return e || (typeof document < "u" ? document : null);
}
const Xo = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Us = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), o_ = {
  getDefaultColumnDef: () => Xo,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Us(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: He("columnSizing", e),
    onColumnSizingInfoChange: He("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, o, r;
      const s = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Xo.minSize, (o = s ?? e.columnDef.size) != null ? o : Xo.size), (r = e.columnDef.maxSize) != null ? r : Xo.maxSize);
    }, e.getStart = ee((n) => [n, no(t, n), t.getState().columnSizing], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, s) => r + s.getSize(), 0), te(t.options, "debugColumns", "getStart")), e.getAfter = ee((n) => [n, no(t, n), t.getState().columnSizing], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, s) => r + s.getSize(), 0), te(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: o,
          ...r
        } = n;
        return r;
      });
    }, e.getCanResize = () => {
      var n, o;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((o = t.options.enableColumnResizing) != null ? o : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const o = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(o);
        else {
          var s;
          n += (s = r.column.getSize()) != null ? s : 0;
        }
      };
      return o(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const o = t.getColumn(e.column.id), r = o == null ? void 0 : o.getCanResize();
      return (s) => {
        if (!o || !r || (s.persist == null || s.persist(), Ks(s) && s.touches && s.touches.length > 1))
          return;
        const i = e.getSize(), a = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[o.id, o.getSize()]], l = Ks(s) ? Math.round(s.touches[0].clientX) : s.clientX, c = {}, d = (w, b) => {
          typeof b == "number" && (t.setColumnSizingInfo((x) => {
            var S, R;
            const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, T = (b - ((S = x == null ? void 0 : x.startOffset) != null ? S : 0)) * P, E = Math.max(T / ((R = x == null ? void 0 : x.startSize) != null ? R : 0), -0.999999);
            return x.columnSizingStart.forEach((N) => {
              let [D, H] = N;
              c[D] = Math.round(Math.max(H + H * E, 0) * 100) / 100;
            }), {
              ...x,
              deltaOffset: T,
              deltaPercentage: E
            };
          }), (t.options.columnResizeMode === "onChange" || w === "end") && t.setColumnSizing((x) => ({
            ...x,
            ...c
          })));
        }, u = (w) => d("move", w), p = (w) => {
          d("end", w), t.setColumnSizingInfo((b) => ({
            ...b,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, h = n_(n), g = {
          moveHandler: (w) => u(w.clientX),
          upHandler: (w) => {
            h == null || h.removeEventListener("mousemove", g.moveHandler), h == null || h.removeEventListener("mouseup", g.upHandler), p(w.clientX);
          }
        }, v = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), u(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var b;
            h == null || h.removeEventListener("touchmove", v.moveHandler), h == null || h.removeEventListener("touchend", v.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), p((b = w.touches[0]) == null ? void 0 : b.clientX);
          }
        }, y = r_() ? {
          passive: !1
        } : !1;
        Ks(s) ? (h == null || h.addEventListener("touchmove", v.moveHandler, y), h == null || h.addEventListener("touchend", v.upHandler, y)) : (h == null || h.addEventListener("mousemove", g.moveHandler, y), h == null || h.addEventListener("mouseup", g.upHandler, y)), t.setColumnSizingInfo((w) => ({
          ...w,
          startOffset: l,
          startSize: i,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: o.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? Us() : (n = e.initialState.columnSizingInfo) != null ? n : Us());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    };
  }
};
let qo = null;
function r_() {
  if (typeof qo == "boolean") return qo;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return qo = e, qo;
}
function Ks(e) {
  return e.type === "touchstart";
}
const s_ = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: He("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((o) => ({
        ...o,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, o;
      const r = e.columns;
      return (n = r.length ? r.some((s) => s.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, o;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((o = t.options.enableHiding) != null ? o : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = ee(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((o) => o.column.getIsVisible()), te(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = ee(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, o, r) => [...n, ...o, ...r], te(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, o) => ee(() => [o(), o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), te(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var o;
      e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var o;
      n = (o = n) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, s) => ({
        ...r,
        [s.id]: n || !(s.getCanHide != null && s.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var o;
      e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
    };
  }
};
function no(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const i_ = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, a_ = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: He("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const o = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof o == "string" || typeof o == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, o, r, s;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((o = t.options.enableGlobalFilter) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => yt.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: o
      } = e.options;
      return us(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : yt[o];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, l_ = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: He("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var o, r;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? o : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (o) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o), e.toggleAllRowsExpanded = (o) => {
      o ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (o) => {
      var r, s;
      e.setExpanded(o ? {} : (r = (s = e.initialState) == null ? void 0 : s.expanded) != null ? r : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((o) => o.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (o) => {
      o.persist == null || o.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const o = e.getState().expanded;
      return o === !0 || Object.values(o).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const o = e.getState().expanded;
      return typeof o == "boolean" ? o === !0 : !(!Object.keys(o).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let o = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
        const i = s.split(".");
        o = Math.max(o, i.length);
      }), o;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((o) => {
        var r;
        const s = o === !0 ? !0 : !!(o != null && o[e.id]);
        let i = {};
        if (o === !0 ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
          i[a] = !0;
        }) : i = o, n = (r = n) != null ? r : !s, !s && n)
          return {
            ...i,
            [e.id]: !0
          };
        if (s && !n) {
          const {
            [e.id]: a,
            ...l
          } = i;
          return l;
        }
        return o;
      });
    }, e.getIsExpanded = () => {
      var n;
      const o = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : o === !0 || o != null && o[e.id]);
    }, e.getCanExpand = () => {
      var n, o, r;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((o = t.options.enableExpanding) != null ? o : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, o = e;
      for (; n && o.parentId; )
        o = t.getRow(o.parentId, !0), n = o.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, ji = 0, Wi = 10, Ys = () => ({
  pageIndex: ji,
  pageSize: Wi
}), c_ = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Ys(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: He("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var o, r;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? o : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (o) => {
      const r = (s) => It(o, s);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (o) => {
      var r;
      e.setPagination(o ? Ys() : (r = e.initialState.pagination) != null ? r : Ys());
    }, e.setPageIndex = (o) => {
      e.setPagination((r) => {
        let s = It(o, r.pageIndex);
        const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return s = Math.max(0, Math.min(s, i)), {
          ...r,
          pageIndex: s
        };
      });
    }, e.resetPageIndex = (o) => {
      var r, s;
      e.setPageIndex(o ? ji : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? r : ji);
    }, e.resetPageSize = (o) => {
      var r, s;
      e.setPageSize(o ? Wi : (r = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? r : Wi);
    }, e.setPageSize = (o) => {
      e.setPagination((r) => {
        const s = Math.max(1, It(o, r.pageSize)), i = r.pageSize * r.pageIndex, a = Math.floor(i / s);
        return {
          ...r,
          pageIndex: a,
          pageSize: s
        };
      });
    }, e.setPageCount = (o) => e.setPagination((r) => {
      var s;
      let i = It(o, (s = e.options.pageCount) != null ? s : -1);
      return typeof i == "number" && (i = Math.max(-1, i)), {
        ...r,
        pageCount: i
      };
    }), e.getPageOptions = ee(() => [e.getPageCount()], (o) => {
      let r = [];
      return o && o > 0 && (r = [...new Array(o)].fill(null).map((s, i) => i)), r;
    }, te(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: o
      } = e.getState().pagination, r = e.getPageCount();
      return r === -1 ? !0 : r === 0 ? !1 : o < r - 1;
    }, e.previousPage = () => e.setPageIndex((o) => o - 1), e.nextPage = () => e.setPageIndex((o) => o + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var o;
      return (o = e.options.pageCount) != null ? o : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var o;
      return (o = e.options.rowCount) != null ? o : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Xs = () => ({
  top: [],
  bottom: []
}), u_ = {
  getInitialState: (e) => ({
    rowPinning: Xs(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: He("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, o, r) => {
      const s = o ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], i = r ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...i, e.id, ...s]);
      t.setRowPinning((l) => {
        var c, d;
        if (n === "bottom") {
          var u, p;
          return {
            top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((v) => !(a != null && a.has(v))),
            bottom: [...((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var h, g;
          return {
            top: [...((h = l == null ? void 0 : l.top) != null ? h : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)],
            bottom: ((g = l == null ? void 0 : l.bottom) != null ? g : []).filter((v) => !(a != null && a.has(v)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((v) => !(a != null && a.has(v))),
          bottom: ((d = l == null ? void 0 : l.bottom) != null ? d : []).filter((v) => !(a != null && a.has(v)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: o,
        enablePinning: r
      } = t.options;
      return typeof o == "function" ? o(e) : (n = o ?? r) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: o,
        bottom: r
      } = t.getState().rowPinning, s = n.some((a) => o == null ? void 0 : o.includes(a)), i = n.some((a) => r == null ? void 0 : r.includes(a));
      return s ? "top" : i ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      if (!r) return -1;
      const s = (n = r === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((i) => {
        let {
          id: a
        } = i;
        return a;
      });
      return (o = s == null ? void 0 : s.indexOf(e.id)) != null ? o : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, o;
      return e.setRowPinning(t ? Xs() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : Xs());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const o = e.getState().rowPinning;
      if (!t) {
        var r, s;
        return !!((r = o.top) != null && r.length || (s = o.bottom) != null && s.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, o) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((i) => {
          const a = e.getRow(i, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((i) => t.find((a) => a.id === i))
      )).filter(Boolean).map((i) => ({
        ...i,
        position: o
      }));
    }, e.getTopRows = ee(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), te(e.options, "debugRows", "getTopRows")), e.getBottomRows = ee(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), te(e.options, "debugRows", "getBottomRows")), e.getCenterRows = ee(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, o) => {
      const r = /* @__PURE__ */ new Set([...n ?? [], ...o ?? []]);
      return t.filter((s) => !r.has(s.id));
    }, te(e.options, "debugRows", "getCenterRows"));
  }
}, d_ = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: He("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const o = {
          ...n
        }, r = e.getPreGroupedRowModel().flatRows;
        return t ? r.forEach((s) => {
          s.getCanSelect() && (o[s.id] = !0);
        }) : r.forEach((s) => {
          delete o[s.id];
        }), o;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const o = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), r = {
        ...n
      };
      return e.getRowModel().rows.forEach((s) => {
        Gi(r, s.id, o, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = ee(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? qs(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, te(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = ee(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? qs(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, te(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = ee(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? qs(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, te(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let o = !!(t.length && Object.keys(n).length);
      return o && t.some((r) => r.getCanSelect() && !n[r.id]) && (o = !1), o;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let o = !!t.length;
      return o && t.some((r) => !n[r.id]) && (o = !1), o;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, o) => {
      const r = e.getIsSelected();
      t.setRowSelection((s) => {
        var i;
        if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n)
          return s;
        const a = {
          ...s
        };
        return Gi(a, e.id, n, (i = o == null ? void 0 : o.selectChildren) != null ? i : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ll(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Ui(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Ui(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (o) => {
        var r;
        n && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
      };
    };
  }
}, Gi = (e, t, n, o, r) => {
  var s;
  const i = r.getRow(t, !0);
  n ? (i.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), i.getCanSelect() && (e[t] = !0)) : delete e[t], o && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((a) => Gi(e, a.id, n, o, r));
};
function qs(e, t) {
  const n = e.getState().rowSelection, o = [], r = {}, s = function(i, a) {
    return i.map((l) => {
      var c;
      const d = ll(l, n);
      if (d && (o.push(l), r[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: s(l.subRows)
      }), d)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: s(t.rows),
    flatRows: o,
    rowsById: r
  };
}
function ll(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Ui(e, t, n) {
  var o;
  if (!((o = e.subRows) != null && o.length)) return !1;
  let r = !0, s = !1;
  return e.subRows.forEach((i) => {
    if (!(s && !r) && (i.getCanSelect() && (ll(i, t) ? s = !0 : r = !1), i.subRows && i.subRows.length)) {
      const a = Ui(i, t);
      a === "all" ? s = !0 : (a === "some" && (s = !0), r = !1);
    }
  }), r ? "all" : s ? "some" : !1;
}
const Ki = /([0-9]+)/gm, f_ = (e, t, n) => iv(Lt(e.getValue(n)).toLowerCase(), Lt(t.getValue(n)).toLowerCase()), p_ = (e, t, n) => iv(Lt(e.getValue(n)), Lt(t.getValue(n))), h_ = (e, t, n) => cl(Lt(e.getValue(n)).toLowerCase(), Lt(t.getValue(n)).toLowerCase()), m_ = (e, t, n) => cl(Lt(e.getValue(n)), Lt(t.getValue(n))), g_ = (e, t, n) => {
  const o = e.getValue(n), r = t.getValue(n);
  return o > r ? 1 : o < r ? -1 : 0;
}, v_ = (e, t, n) => cl(e.getValue(n), t.getValue(n));
function cl(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Lt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function iv(e, t) {
  const n = e.split(Ki).filter(Boolean), o = t.split(Ki).filter(Boolean);
  for (; n.length && o.length; ) {
    const r = n.shift(), s = o.shift(), i = parseInt(r, 10), a = parseInt(s, 10), l = [i, a].sort();
    if (isNaN(l[0])) {
      if (r > s)
        return 1;
      if (s > r)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(i) ? -1 : 1;
    if (i > a)
      return 1;
    if (a > i)
      return -1;
  }
  return n.length - o.length;
}
const Yn = {
  alphanumeric: f_,
  alphanumericCaseSensitive: p_,
  text: h_,
  textCaseSensitive: m_,
  datetime: g_,
  basic: v_
}, y_ = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: He("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let o = !1;
      for (const r of n) {
        const s = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(s) === "[object Date]")
          return Yn.datetime;
        if (typeof s == "string" && (o = !0, s.split(Ki).length > 1))
          return Yn.alphanumeric;
      }
      return o ? Yn.text : Yn.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return us(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : Yn[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, o) => {
      const r = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
      t.setSorting((i) => {
        const a = i == null ? void 0 : i.find((h) => h.id === e.id), l = i == null ? void 0 : i.findIndex((h) => h.id === e.id);
        let c = [], d, u = s ? n : r === "desc";
        if (i != null && i.length && e.getCanMultiSort() && o ? a ? d = "toggle" : d = "add" : i != null && i.length && l !== i.length - 1 ? d = "replace" : a ? d = "toggle" : d = "replace", d === "toggle" && (s || r || (d = "remove")), d === "add") {
          var p;
          c = [...i, {
            id: e.id,
            desc: u
          }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else d === "toggle" ? c = i.map((h) => h.id === e.id ? {
          ...h,
          desc: u
        } : h) : d === "remove" ? c = i.filter((h) => h.id !== e.id) : c = [{
          id: e.id,
          desc: u
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, o;
      return ((n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var o, r;
      const s = e.getFirstSortDir(), i = e.getIsSorted();
      return i ? i !== s && ((o = t.options.enableSortingRemoval) == null || o) && // If enableSortRemove, enable in general
      (!(n && (r = t.options.enableMultiRemove) != null) || r) ? !1 : i === "desc" ? "asc" : "desc" : s;
    }, e.getCanSort = () => {
      var n, o;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((o = t.options.enableSorting) != null ? o : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, o;
      return (n = (o = e.columnDef.enableMultiSort) != null ? o : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const o = (n = t.getState().sorting) == null ? void 0 : n.find((r) => r.id === e.id);
      return o ? o.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, o;
      return (n = (o = t.getState().sorting) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((o) => o.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (o) => {
        n && (o.persist == null || o.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(o) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, o;
      e.setSorting(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, w_ = [
  B1,
  s_,
  e_,
  t_,
  z1,
  H1,
  i_,
  //depends on ColumnFaceting
  a_,
  //depends on ColumnFiltering
  y_,
  Q1,
  //depends on RowSorting
  l_,
  c_,
  u_,
  d_,
  o_
];
function b_(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const o = [...w_, ...(t = e._features) != null ? t : []];
  let r = {
    _features: o
  };
  const s = r._features.reduce((p, h) => Object.assign(p, h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(r)), {}), i = (p) => r.options.mergeOptions ? r.options.mergeOptions(s, p) : {
    ...s,
    ...p
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  r._features.forEach((p) => {
    var h;
    l = (h = p.getInitialState == null ? void 0 : p.getInitialState(l)) != null ? h : l;
  });
  const c = [];
  let d = !1;
  const u = {
    _features: o,
    options: {
      ...s,
      ...e
    },
    initialState: l,
    _queue: (p) => {
      c.push(p), d || (d = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        d = !1;
      }).catch((h) => setTimeout(() => {
        throw h;
      })));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (p) => {
      const h = It(p, r.options);
      r.options = i(h);
    },
    getState: () => r.options.state,
    setState: (p) => {
      r.options.onStateChange == null || r.options.onStateChange(p);
    },
    _getRowId: (p, h, g) => {
      var v;
      return (v = r.options.getRowId == null ? void 0 : r.options.getRowId(p, h, g)) != null ? v : `${g ? [g.id, h].join(".") : h}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, h) => {
      let g = (h ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[p];
      if (!g && (g = r.getCoreRowModel().rowsById[p], !g))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${p}`) : new Error();
      return g;
    },
    _getDefaultColumnDef: ee(() => [r.options.defaultColumn], (p) => {
      var h;
      return p = (h = p) != null ? h : {}, {
        header: (g) => {
          const v = g.header.column.columnDef;
          return v.accessorKey ? v.accessorKey : v.accessorFn ? v.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (g) => {
          var v, y;
          return (v = (y = g.renderValue()) == null || y.toString == null ? void 0 : y.toString()) != null ? v : null;
        },
        ...r._features.reduce((g, v) => Object.assign(g, v.getDefaultColumnDef == null ? void 0 : v.getDefaultColumnDef()), {}),
        ...p
      };
    }, te(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: ee(() => [r._getColumnDefs()], (p) => {
      const h = function(g, v, y) {
        return y === void 0 && (y = 0), g.map((w) => {
          const b = $1(r, w, y, v), x = w;
          return b.columns = x.columns ? h(x.columns, b, y + 1) : [], b;
        });
      };
      return h(p);
    }, te(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: ee(() => [r.getAllColumns()], (p) => p.flatMap((h) => h.getFlatColumns()), te(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: ee(() => [r.getAllFlatColumns()], (p) => p.reduce((h, g) => (h[g.id] = g, h), {}), te(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: ee(() => [r.getAllColumns(), r._getOrderColumnsFn()], (p, h) => {
      let g = p.flatMap((v) => v.getLeafColumns());
      return h(g);
    }, te(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (p) => {
      const h = r._getAllFlatColumnsById()[p];
      return process.env.NODE_ENV !== "production" && !h && console.error(`[Table] Column with id '${p}' does not exist.`), h;
    }
  };
  Object.assign(r, u);
  for (let p = 0; p < r._features.length; p++) {
    const h = r._features[p];
    h == null || h.createTable == null || h.createTable(r);
  }
  return r;
}
function x_() {
  return (e) => ee(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, o = function(r, s, i) {
      s === void 0 && (s = 0);
      const a = [];
      for (let c = 0; c < r.length; c++) {
        const d = il(e, e._getRowId(r[c], c, i), r[c], c, s, void 0, i == null ? void 0 : i.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, a.push(d), e.options.getSubRows) {
          var l;
          d.originalSubRows = e.options.getSubRows(r[c], c), (l = d.originalSubRows) != null && l.length && (d.subRows = o(d.originalSubRows, s + 1, d));
        }
      }
      return a;
    };
    return n.rows = o(t), n;
  }, te(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function S_(e) {
  const t = [], n = (o) => {
    var r;
    t.push(o), (r = o.subRows) != null && r.length && o.getIsExpanded() && o.subRows.forEach(n);
  };
  return e.rows.forEach(n), {
    rows: t,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function C_(e, t, n) {
  return n.options.filterFromLeafRows ? R_(e, t, n) : E_(e, t, n);
}
function R_(e, t, n) {
  var o;
  const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let p = 0; p < l.length; p++) {
      var u;
      let h = l[p];
      const g = il(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
      if (g.columnFilters = h.columnFilters, (u = h.subRows) != null && u.length && c < i) {
        if (g.subRows = a(h.subRows, c + 1), h = g, t(h) && !g.subRows.length) {
          d.push(h), s[h.id] = h, r.push(h);
          continue;
        }
        if (t(h) || g.subRows.length) {
          d.push(h), s[h.id] = h, r.push(h);
          continue;
        }
      } else
        h = g, t(h) && (d.push(h), s[h.id] = h, r.push(h));
    }
    return d;
  };
  return {
    rows: a(e),
    flatRows: r,
    rowsById: s
  };
}
function E_(e, t, n) {
  var o;
  const r = [], s = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let p = 0; p < l.length; p++) {
      let h = l[p];
      if (t(h)) {
        var u;
        if ((u = h.subRows) != null && u.length && c < i) {
          const v = il(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
          v.subRows = a(h.subRows, c + 1), h = v;
        }
        d.push(h), r.push(h), s[h.id] = h;
      }
    }
    return d;
  };
  return {
    rows: a(e),
    flatRows: r,
    rowsById: s
  };
}
function P_() {
  return (e) => ee(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, o) => {
    if (!t.rows.length || !(n != null && n.length) && !o) {
      for (let p = 0; p < t.flatRows.length; p++)
        t.flatRows[p].columnFilters = {}, t.flatRows[p].columnFiltersMeta = {};
      return t;
    }
    const r = [], s = [];
    (n ?? []).forEach((p) => {
      var h;
      const g = e.getColumn(p.id);
      if (!g)
        return;
      const v = g.getFilterFn();
      if (!v) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${g.id}.`);
        return;
      }
      r.push({
        id: p.id,
        filterFn: v,
        resolvedValue: (h = v.resolveFilterValue == null ? void 0 : v.resolveFilterValue(p.value)) != null ? h : p.value
      });
    });
    const i = (n ?? []).map((p) => p.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((p) => p.getCanGlobalFilter());
    o && a && l.length && (i.push("__global__"), l.forEach((p) => {
      var h;
      s.push({
        id: p.id,
        filterFn: a,
        resolvedValue: (h = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(o)) != null ? h : o
      });
    }));
    let c, d;
    for (let p = 0; p < t.flatRows.length; p++) {
      const h = t.flatRows[p];
      if (h.columnFilters = {}, r.length)
        for (let g = 0; g < r.length; g++) {
          c = r[g];
          const v = c.id;
          h.columnFilters[v] = c.filterFn(h, v, c.resolvedValue, (y) => {
            h.columnFiltersMeta[v] = y;
          });
        }
      if (s.length) {
        for (let g = 0; g < s.length; g++) {
          d = s[g];
          const v = d.id;
          if (d.filterFn(h, v, d.resolvedValue, (y) => {
            h.columnFiltersMeta[v] = y;
          })) {
            h.columnFilters.__global__ = !0;
            break;
          }
        }
        h.columnFilters.__global__ !== !0 && (h.columnFilters.__global__ = !1);
      }
    }
    const u = (p) => {
      for (let h = 0; h < i.length; h++)
        if (p.columnFilters[i[h]] === !1)
          return !1;
      return !0;
    };
    return C_(t.rows, u, e);
  }, te(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function T_(e) {
  return (t) => ee(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, o) => {
    if (!o.rows.length)
      return o;
    const {
      pageSize: r,
      pageIndex: s
    } = n;
    let {
      rows: i,
      flatRows: a,
      rowsById: l
    } = o;
    const c = r * s, d = c + r;
    i = i.slice(c, d);
    let u;
    t.options.paginateExpandedRows ? u = {
      rows: i,
      flatRows: a,
      rowsById: l
    } : u = S_({
      rows: i,
      flatRows: a,
      rowsById: l
    }), u.flatRows = [];
    const p = (h) => {
      u.flatRows.push(h), h.subRows.length && h.subRows.forEach(p);
    };
    return u.rows.forEach(p), u;
  }, te(t.options, "debugTable", "getPaginationRowModel"));
}
function M_() {
  return (e) => ee(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const o = e.getState().sorting, r = [], s = o.filter((l) => {
      var c;
      return (c = e.getColumn(l.id)) == null ? void 0 : c.getCanSort();
    }), i = {};
    s.forEach((l) => {
      const c = e.getColumn(l.id);
      c && (i[l.id] = {
        sortUndefined: c.columnDef.sortUndefined,
        invertSorting: c.columnDef.invertSorting,
        sortingFn: c.getSortingFn()
      });
    });
    const a = (l) => {
      const c = l.map((d) => ({
        ...d
      }));
      return c.sort((d, u) => {
        for (let h = 0; h < s.length; h += 1) {
          var p;
          const g = s[h], v = i[g.id], y = v.sortUndefined, w = (p = g == null ? void 0 : g.desc) != null ? p : !1;
          let b = 0;
          if (y) {
            const x = d.getValue(g.id), S = u.getValue(g.id), R = x === void 0, P = S === void 0;
            if (R || P) {
              if (y === "first") return R ? -1 : 1;
              if (y === "last") return R ? 1 : -1;
              b = R && P ? 0 : R ? y : -y;
            }
          }
          if (b === 0 && (b = v.sortingFn(d, u, g.id)), b !== 0)
            return w && (b *= -1), v.invertSorting && (b *= -1), b;
        }
        return d.index - u.index;
      }), c.forEach((d) => {
        var u;
        r.push(d), (u = d.subRows) != null && u.length && (d.subRows = a(d.subRows));
      }), c;
    };
    return {
      rows: a(n.rows),
      flatRows: r,
      rowsById: n.rowsById
    };
  }, te(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Zo(e, t) {
  return e ? A_(e) ? /* @__PURE__ */ f.createElement(e, t) : e : null;
}
function A_(e) {
  return __(e) || typeof e == "function" || D_(e);
}
function __(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function D_(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function I_(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = f.useState(() => ({
    current: b_(t)
  })), [o, r] = f.useState(() => n.current.initialState);
  return n.current.setOptions((s) => ({
    ...s,
    ...e,
    state: {
      ...o,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (i) => {
      r(i), e.onStateChange == null || e.onStateChange(i);
    }
  })), n.current;
}
function N_({
  checked: e,
  indeterminate: t,
  onChange: n,
  onClick: o,
  className: r
}) {
  const s = f.useRef(null);
  f.useEffect(() => {
    s.current && (s.current.indeterminate = !!t);
  }, [t]);
  const i = e || t;
  return /* @__PURE__ */ j(
    "span",
    {
      className: U("inline-flex items-center justify-center cursor-pointer group", r),
      onClick: o,
      children: [
        /* @__PURE__ */ m("input", { ref: s, type: "checkbox", checked: e, onChange: n, className: "sr-only" }),
        /* @__PURE__ */ j(
          "span",
          {
            className: U(
              "h-3.5 w-3.5 rounded-xs border flex items-center justify-center transition-colors",
              i ? "bg-selected border-selected" : "border-foreground/35 group-hover:border-selected"
            ),
            children: [
              t && /* @__PURE__ */ m("span", { className: "block h-px w-2 bg-selected-foreground" }),
              e && !t && /* @__PURE__ */ m("svg", { viewBox: "0 0 10 8", className: "h-2 w-2.5 fill-none stroke-selected-foreground stroke-[2]", children: /* @__PURE__ */ m("polyline", { points: "1,4 4,7 9,1", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        )
      ]
    }
  );
}
function nD({
  columns: e,
  data: t,
  searchColumn: n,
  searchPlaceholder: o = "Search...",
  rowActions: r,
  getRowLabel: s,
  pageSize: i = 10
}) {
  var _;
  const a = i === "all", [l, c] = f.useState([]), [d, u] = f.useState([]), [p, h] = f.useState({}), [g, v] = f.useState(null), [y, w] = f.useState("mouse"), [b, x] = f.useState(null), [S, R] = f.useState(null), [P, T] = f.useState(!1), [E, N] = f.useState(null);
  f.useEffect(() => {
    if (!P) {
      const C = setTimeout(() => N(null), 200);
      return () => clearTimeout(C);
    }
  }, [P]);
  const D = f.useMemo(
    () => ({
      id: "_select",
      header: () => null,
      cell: ({ row: C }) => /* @__PURE__ */ j(io, { children: [
        /* @__PURE__ */ m(ao, { asChild: !0, children: /* @__PURE__ */ m("span", { className: "inline-flex items-center", children: /* @__PURE__ */ m(
          N_,
          {
            checked: C.getIsSelected(),
            onChange: C.getToggleSelectedHandler(),
            onClick: (M) => {
              M.stopPropagation(), C.toggleSelected();
            }
          }
        ) }) }),
        /* @__PURE__ */ j(_n, { className: "flex items-center gap-1.5", children: [
          "Select row",
          /* @__PURE__ */ m("kbd", { className: "rounded border border-selected/30 bg-selected/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "x" })
        ] })
      ] }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 16
    }),
    [s]
  ), H = f.useMemo(
    () => [D, ...e],
    [D, e]
  ), B = I_({
    data: t,
    columns: H,
    getCoreRowModel: x_(),
    getPaginationRowModel: T_(),
    getSortedRowModel: M_(),
    getFilteredRowModel: P_(),
    onSortingChange: c,
    onColumnFiltersChange: u,
    onRowSelectionChange: h,
    enableRowSelection: !0,
    initialState: {
      pagination: { pageSize: a ? Number.MAX_SAFE_INTEGER : i }
    },
    state: {
      sorting: l,
      columnFilters: d,
      rowSelection: p
    }
  }), Y = B.getRowModel().rows, K = B.getSelectedRowModel().rows.map((C) => C.original), J = K.length, I = J > 0 ? K : g !== null && Y[g] ? [Y[g].original] : [], X = I.length === 0 ? "Actions" : I.length === 1 ? s ? s(I[0]) : "1 row" : `${I.length} rows`;
  f.useEffect(() => {
    const C = (M) => {
      var z, O, W;
      const A = M.target;
      if (!(A.tagName === "INPUT" || A.tagName === "TEXTAREA" || A.tagName === "SELECT" || A.isContentEditable)) {
        if ((M.metaKey || M.ctrlKey) && M.key === "k") {
          if (!(r != null && r.length) || !I.length) return;
          M.preventDefault(), T(!0);
        } else if ((M.metaKey || M.ctrlKey) && M.key === "a")
          M.preventDefault(), B.toggleAllPageRowsSelected(!0);
        else if (M.key === "ArrowDown")
          M.preventDefault(), w("keyboard"), v(
            ($) => $ === null ? 0 : Math.min($ + 1, Y.length - 1)
          );
        else if (M.key === "ArrowUp")
          M.preventDefault(), w("keyboard"), v(
            ($) => $ === null ? 0 : Math.max($ - 1, 0)
          );
        else if ((M.key === " " || M.key === "x") && g !== null)
          M.preventDefault(), (z = Y[g]) == null || z.toggleSelected();
        else if (M.key === "Enter" && g !== null && (r != null && r.length) && I.length)
          M.preventDefault(), T(!0);
        else if (M.key === "Escape")
          b ? x(null) : J > 0 ? B.resetRowSelection() : v(null);
        else if (r != null && r.length && !M.metaKey && !M.ctrlKey && !M.altKey) {
          const $ = r.find((oe) => oe.shortcut === M.key);
          if ($) {
            if (M.preventDefault(), !I.length) return;
            (O = $.subActions) != null && O.length ? (N($), T(!0)) : (W = $.onClick) == null || W.call($, I);
          }
        }
      }
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [r, Y, g, J, b, B]), f.useEffect(() => {
    if (!b) {
      R(null);
      return;
    }
    const C = () => {
      x(null), R(null);
    };
    return window.addEventListener("click", C), window.addEventListener("scroll", C, !0), () => {
      window.removeEventListener("click", C), window.removeEventListener("scroll", C, !0);
    };
  }, [b]);
  const L = (C, M) => {
    r != null && r.length && (C.preventDefault(), v(M), x({ x: C.clientX, y: C.clientY, rowIndex: M }));
  }, V = () => {
    if (b === null) return K;
    const C = Y[b.rowIndex];
    return !C || K.length > 0 && C.getIsSelected() ? K : [C.original];
  }, k = B.getState().pagination.pageIndex, se = B.getPageCount();
  return /* @__PURE__ */ m(so, { children: /* @__PURE__ */ j("div", { className: "flex flex-col gap-3", children: [
    n && /* @__PURE__ */ m("div", { className: "flex items-center", children: /* @__PURE__ */ m(
      Vr,
      {
        placeholder: o,
        value: ((_ = B.getColumn(n)) == null ? void 0 : _.getFilterValue()) ?? "",
        onChange: (C) => {
          var M;
          return (M = B.getColumn(n)) == null ? void 0 : M.setFilterValue(C.target.value);
        },
        className: "max-w-sm h-8 text-sm"
      }
    ) }),
    /* @__PURE__ */ m("div", { children: /* @__PURE__ */ j(Yg, { className: "border-separate border-spacing-0", children: [
      /* @__PURE__ */ m(Xg, { children: B.getHeaderGroups().map((C) => /* @__PURE__ */ m(lr, { className: "hover:bg-transparent", children: C.headers.map((M) => /* @__PURE__ */ m(
        Zg,
        {
          style: M.column.columnDef.size ? { width: M.column.columnDef.size } : void 0,
          className: U(
            "text-xs font-medium text-muted-foreground uppercase tracking-wide h-8",
            M.id === "_select" && "w-6 !pl-2 !pr-0",
            M.column.getCanSort() && "cursor-pointer select-none"
          ),
          onClick: M.column.getCanSort() ? M.column.getToggleSortingHandler() : void 0,
          children: M.isPlaceholder ? null : M.id === "_select" ? Zo(M.column.columnDef.header, M.getContext()) : /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            Zo(M.column.columnDef.header, M.getContext()),
            M.column.getCanSort() && /* @__PURE__ */ m(
              Kx,
              {
                className: U(
                  "h-3 w-3 transition-opacity",
                  M.column.getIsSorted() ? "opacity-100 text-foreground" : "opacity-30"
                )
              }
            )
          ] })
        },
        M.id
      )) }, C.id)) }),
      /* @__PURE__ */ m(qg, { children: Y.length ? Y.map((C, M) => {
        var $, oe;
        const A = C.getIsSelected(), z = (($ = Y[M - 1]) == null ? void 0 : $.getIsSelected()) ?? !1, O = ((oe = Y[M + 1]) == null ? void 0 : oe.getIsSelected()) ?? !1;
        return /* @__PURE__ */ m(
          lr,
          {
            "data-state": A ? "selected" : void 0,
            className: U(
              "h-6 cursor-pointer select-none",
              "data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25",
              g === M && y === "keyboard" && "row-ring"
            ),
            onClick: () => {
              w("mouse"), v(M), C.toggleSelected();
            },
            onMouseEnter: () => {
              w("mouse"), v(M);
            },
            onContextMenu: (ne) => L(ne, M),
            children: C.getVisibleCells().map((ne) => /* @__PURE__ */ m(
              zi,
              {
                className: U(
                  "py-1.5 text-sm",
                  ne.column.id === "_select" && "w-6 !pl-2 !pr-0"
                ),
                children: ne.column.id === "_select" ? /* @__PURE__ */ m("span", { className: U("flex items-center", !C.getIsSelected() && g !== M && "opacity-0"), children: Zo(ne.column.columnDef.cell, ne.getContext()) }) : Zo(ne.column.columnDef.cell, ne.getContext())
              },
              ne.id
            ))
          },
          `${C.id}-${A ? 1 : 0}-${z ? 1 : 0}-${O ? 1 : 0}`
        );
      }) : /* @__PURE__ */ m(lr, { children: /* @__PURE__ */ m(
        zi,
        {
          colSpan: H.length,
          className: "h-24 text-center text-muted-foreground text-sm",
          children: "No results found."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ j("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ j("p", { className: "text-xs text-muted-foreground", children: [
        B.getFilteredRowModel().rows.length,
        " row",
        B.getFilteredRowModel().rows.length !== 1 ? "s" : ""
      ] }),
      !a && /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ j("span", { className: "text-xs text-muted-foreground", children: [
          "Page ",
          k + 1,
          " of ",
          Math.max(se, 1)
        ] }),
        /* @__PURE__ */ j(
          Tn,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => B.previousPage(),
            disabled: !B.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ m(Sf, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ m("span", { className: "sr-only", children: "Previous page" })
            ]
          }
        ),
        /* @__PURE__ */ j(
          Tn,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => B.nextPage(),
            disabled: !B.getCanNextPage(),
            children: [
              /* @__PURE__ */ m(Qn, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ m("span", { className: "sr-only", children: "Next page" })
            ]
          }
        )
      ] })
    ] }),
    b && (r == null ? void 0 : r.length) && vl(
      /* @__PURE__ */ j(pt, { children: [
        /* @__PURE__ */ m(
          "div",
          {
            style: { top: b.y, left: b.x },
            className: "fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
            onClick: (C) => C.stopPropagation(),
            children: r.map((C, M) => {
              var A;
              return /* @__PURE__ */ j(
                "button",
                {
                  className: U(
                    "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                    C.destructive && "text-destructive hover:text-destructive focus:text-destructive",
                    (S == null ? void 0 : S.action) === C && "bg-accent"
                  ),
                  onMouseEnter: (z) => {
                    var O;
                    if ((O = C.subActions) != null && O.length) {
                      const W = z.currentTarget.getBoundingClientRect();
                      R({ action: C, x: W.right + 4, y: W.top });
                    } else
                      R(null);
                  },
                  onClick: () => {
                    var z, O;
                    (z = C.subActions) != null && z.length || ((O = C.onClick) == null || O.call(C, V()), x(null), R(null));
                  },
                  children: [
                    C.icon,
                    /* @__PURE__ */ m("span", { className: "flex-1", children: C.label }),
                    C.shortcut && /* @__PURE__ */ m("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: C.shortcut }),
                    (A = C.subActions) != null && A.length ? /* @__PURE__ */ m(Qn, { className: "h-3 w-3 opacity-50" }) : null
                  ]
                },
                M
              );
            })
          }
        ),
        S && /* @__PURE__ */ m(
          "div",
          {
            style: { top: S.y, left: S.x },
            className: "fixed z-50 min-w-[140px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
            onClick: (C) => C.stopPropagation(),
            children: S.action.subActions.map((C, M) => /* @__PURE__ */ j(
              "button",
              {
                className: U(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                  C.destructive && "text-destructive hover:text-destructive focus:text-destructive"
                ),
                onClick: () => {
                  var A;
                  (A = C.onClick) == null || A.call(C, V()), x(null), R(null);
                },
                children: [
                  C.icon,
                  C.label
                ]
              },
              M
            ))
          }
        )
      ] }),
      document.body
    ),
    J > 0 && vl(
      /* @__PURE__ */ j("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg", children: [
        /* @__PURE__ */ j("span", { className: "px-2 text-sm font-medium", children: [
          J,
          " selected"
        ] }),
        /* @__PURE__ */ m(so, { children: /* @__PURE__ */ j(io, { children: [
          /* @__PURE__ */ m(ao, { asChild: !0, children: /* @__PURE__ */ m(
            "button",
            {
              className: "flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors",
              onClick: () => B.resetRowSelection(),
              children: /* @__PURE__ */ m(la, { className: "h-3.5 w-3.5" })
            }
          ) }),
          /* @__PURE__ */ j(_n, { className: "flex items-center gap-1.5 border border-primary/20", children: [
            "Clear selected",
            /* @__PURE__ */ m("kbd", { className: "rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "Esc" })
          ] })
        ] }) }),
        r != null && r.length ? /* @__PURE__ */ j(
          "button",
          {
            className: "ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity",
            onClick: () => T(!0),
            children: [
              /* @__PURE__ */ m(o0, { className: "h-3.5 w-3.5" }),
              "Actions"
            ]
          }
        ) : null
      ] }),
      document.body
    ),
    r != null && r.length ? /* @__PURE__ */ j(
      Gg,
      {
        open: P,
        onOpenChange: T,
        commandKey: (E == null ? void 0 : E.label) ?? "root",
        title: "Row Actions",
        description: "Choose an action to apply to selected rows",
        children: [
          /* @__PURE__ */ m(
            ol,
            {
              autoFocus: !0,
              placeholder: E ? `Search ${E.label.toLowerCase()}...` : "Type a command or search...",
              onKeyDown: (C) => {
                C.key === "Backspace" && C.target.value === "" && N(null);
              }
            }
          ),
          /* @__PURE__ */ j(rl, { children: [
            /* @__PURE__ */ m(sl, { children: "No actions available." }),
            E ? /* @__PURE__ */ m(Dr, { heading: /* @__PURE__ */ j("span", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ m("span", { children: E.label }),
              /* @__PURE__ */ m("span", { className: "font-normal text-muted-foreground", children: X })
            ] }), children: E.subActions.map((C, M) => /* @__PURE__ */ j(
              Ir,
              {
                onSelect: () => {
                  var A;
                  (A = C.onClick) == null || A.call(C, I), T(!1), N(null);
                },
                className: U(C.destructive && "text-destructive"),
                children: [
                  C.icon,
                  C.label
                ]
              },
              M
            )) }) : /* @__PURE__ */ m(Dr, { heading: X, children: r.map((C, M) => {
              var A;
              return /* @__PURE__ */ j(
                Ir,
                {
                  onSelect: () => {
                    var z, O;
                    (z = C.subActions) != null && z.length ? N(C) : ((O = C.onClick) == null || O.call(C, I), T(!1));
                  },
                  className: U(C.destructive && "text-destructive"),
                  children: [
                    C.icon,
                    /* @__PURE__ */ m("span", { className: "flex-1", children: C.label }),
                    C.shortcut && /* @__PURE__ */ m("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: C.shortcut }),
                    (A = C.subActions) != null && A.length ? /* @__PURE__ */ m(Qn, { className: "h-3.5 w-3.5 text-muted-foreground" }) : null
                  ]
                },
                M
              );
            }) })
          ] })
        ]
      }
    ) : null
  ] }) });
}
function av({
  item: e,
  isActive: t,
  collapsed: n,
  depth: o = 0,
  onActiveChange: r
}) {
  const [s, i] = f.useState(!0), a = e.icon, c = /* @__PURE__ */ j(
    "button",
    {
      onClick: () => {
        e.children && i((d) => !d), e.onClick && e.onClick(), r && r(e.id);
      },
      className: U(
        "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
        o > 0 && "ml-4 w-[calc(100%-1rem)]",
        t ? "bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
        n && "justify-center px-0"
      ),
      children: [
        a && /* @__PURE__ */ m(
          a,
          {
            className: U(
              "shrink-0 transition-colors",
              n ? "h-4.5 w-4.5" : "h-4 w-4",
              t ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            )
          }
        ),
        !n && /* @__PURE__ */ j(pt, { children: [
          /* @__PURE__ */ m("span", { className: "flex-1 truncate text-left", children: e.label }),
          e.badge !== void 0 && /* @__PURE__ */ m("span", { className: "ml-auto text-xs tabular-nums text-muted-foreground", children: e.badge })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ j("div", { children: [
    n ? /* @__PURE__ */ m(so, { delayDuration: 0, children: /* @__PURE__ */ j(io, { children: [
      /* @__PURE__ */ m(ao, { asChild: !0, children: c }),
      /* @__PURE__ */ m(_n, { side: "right", children: /* @__PURE__ */ m("p", { children: e.label }) })
    ] }) }) : c,
    !n && e.children && s && /* @__PURE__ */ m("div", { className: "mt-0.5 space-y-0.5", children: e.children.map((d) => /* @__PURE__ */ m(
      av,
      {
        item: d,
        isActive: !1,
        collapsed: n,
        depth: o + 1,
        onActiveChange: r
      },
      d.id
    )) })
  ] });
}
function k_(e) {
  return e.id.startsWith("separator");
}
function oD({
  items: e,
  activeId: t,
  onActiveChange: n,
  collapsed: o = !1,
  onCollapsedChange: r,
  header: s,
  footer: i
}) {
  const a = [];
  let l = [];
  for (const c of e)
    k_(c) ? (a.push(l), l = []) : l.push(c);
  return a.push(l), /* @__PURE__ */ j(
    "div",
    {
      className: U(
        "flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        o ? "w-12" : "w-56"
      ),
      children: [
        s && /* @__PURE__ */ m("div", { className: U("shrink-0 border-b border-sidebar-border", o ? "px-2 py-3" : "px-3 py-3"), children: s }),
        /* @__PURE__ */ m("div", { className: "flex-1 overflow-y-auto py-2", children: a.map((c, d) => /* @__PURE__ */ j(f.Fragment, { children: [
          d > 0 && /* @__PURE__ */ m(Nf, { className: "my-2 bg-sidebar-border" }),
          /* @__PURE__ */ m("nav", { className: U("space-y-0.5", o ? "px-1" : "px-2"), children: c.map((u) => /* @__PURE__ */ m(
            av,
            {
              item: u,
              isActive: t === u.id,
              collapsed: o,
              onActiveChange: n
            },
            u.id
          )) })
        ] }, d)) }),
        i && /* @__PURE__ */ m("div", { className: U("shrink-0 border-t border-sidebar-border", o ? "px-1 py-2" : "px-2 py-2"), children: i }),
        /* @__PURE__ */ m("div", { className: U("shrink-0 border-t border-sidebar-border", o ? "px-1 py-2" : "px-2 py-2"), children: /* @__PURE__ */ m(so, { delayDuration: 0, children: /* @__PURE__ */ j(io, { children: [
          /* @__PURE__ */ m(ao, { asChild: !0, children: /* @__PURE__ */ m(
            "button",
            {
              onClick: () => r == null ? void 0 : r(!o),
              className: U(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors",
                o && "justify-center px-0"
              ),
              children: o ? /* @__PURE__ */ m(Qn, { className: "h-4 w-4" }) : /* @__PURE__ */ j(pt, { children: [
                /* @__PURE__ */ m(Sf, { className: "h-4 w-4" }),
                /* @__PURE__ */ m("span", { children: "Collapse" })
              ] })
            }
          ) }),
          o && /* @__PURE__ */ m(_n, { side: "right", children: /* @__PURE__ */ m("p", { children: "Expand sidebar" }) })
        ] }) }) })
      ]
    }
  );
}
function O_({ filter: e, onSelect: t, onClose: n }) {
  const [o, r] = f.useState("");
  return e.type === "select" && e.options ? /* @__PURE__ */ j("div", { className: "space-y-1", children: [
    /* @__PURE__ */ j("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Select ",
      e.label
    ] }),
    e.options.map((s) => /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t(s.value, s.label), n();
        },
        children: s.label
      },
      s.value
    ))
  ] }) : e.type === "boolean" ? /* @__PURE__ */ j("div", { className: "space-y-1", children: [
    /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: e.label }),
    /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t("true", "Yes"), n();
        },
        children: "Yes"
      }
    ),
    /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t("false", "No"), n();
        },
        children: "No"
      }
    )
  ] }) : /* @__PURE__ */ j("div", { className: "space-y-2", children: [
    /* @__PURE__ */ j("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Enter ",
      e.label
    ] }),
    /* @__PURE__ */ j("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ m(
        Vr,
        {
          value: o,
          onChange: (s) => r(s.target.value),
          placeholder: `Filter by ${e.label.toLowerCase()}...`,
          className: "h-7 text-sm",
          onKeyDown: (s) => {
            s.key === "Enter" && o.trim() && (t(o.trim(), o.trim()), n());
          },
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ m(
        Tn,
        {
          size: "sm",
          className: "h-7 text-xs",
          onClick: () => {
            o.trim() && (t(o.trim(), o.trim()), n());
          },
          children: "Apply"
        }
      )
    ] })
  ] });
}
function rD({
  availableFilters: e,
  activeFilters: t,
  onAdd: n,
  onRemove: o,
  onClear: r,
  searchValue: s,
  onSearchChange: i,
  searchPlaceholder: a = "Search..."
}) {
  const [l, c] = f.useState(null), [d, u] = f.useState(!1), [p, h] = f.useState(!1), g = new Set(t.map((b) => b.filterId)), v = e.filter((b) => !g.has(b.id)), y = (b) => {
    h(!1), c(b), u(!0);
  }, w = (b, x) => {
    l && (n({
      filterId: l.id,
      label: `${l.label}: ${x}`,
      value: b
    }), c(null), u(!1));
  };
  return /* @__PURE__ */ j("div", { className: "flex items-center gap-2 flex-wrap", children: [
    i && /* @__PURE__ */ j("div", { className: "relative", children: [
      /* @__PURE__ */ m(p0, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ m(
        Vr,
        {
          value: s ?? "",
          onChange: (b) => i(b.target.value),
          placeholder: a,
          className: "h-7 pl-7 text-sm w-48"
        }
      )
    ] }),
    t.map((b) => /* @__PURE__ */ j(
      xy,
      {
        variant: "secondary",
        className: "flex items-center gap-1 h-6 px-2 text-xs font-normal rounded-md",
        children: [
          /* @__PURE__ */ m("span", { children: b.label }),
          /* @__PURE__ */ j(
            "button",
            {
              onClick: () => o(b.filterId),
              className: "ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity",
              children: [
                /* @__PURE__ */ m(la, { className: "h-3 w-3" }),
                /* @__PURE__ */ m("span", { className: "sr-only", children: "Remove filter" })
              ]
            }
          )
        ]
      },
      b.filterId
    )),
    /* @__PURE__ */ j(CR, { open: d, onOpenChange: (b) => {
      u(b), b || c(null);
    }, children: [
      /* @__PURE__ */ j(ZC, { open: p, onOpenChange: h, children: [
        /* @__PURE__ */ m(RR, { asChild: !0, children: /* @__PURE__ */ m("span", {}) }),
        /* @__PURE__ */ m(QC, { asChild: !0, children: /* @__PURE__ */ j(
          Tn,
          {
            variant: "ghost",
            size: "sm",
            className: U(
              "h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
              v.length === 0 && "opacity-50 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ m(d0, { className: "h-3.5 w-3.5" }),
              "Filter"
            ]
          }
        ) }),
        /* @__PURE__ */ j(wh, { align: "start", className: "w-44", children: [
          /* @__PURE__ */ m(xh, { className: "text-xs", children: "Add filter" }),
          /* @__PURE__ */ m(Sh, {}),
          v.map((b) => /* @__PURE__ */ j(
            bh,
            {
              onClick: () => y(b),
              className: "text-sm",
              children: [
                /* @__PURE__ */ m(s0, { className: "h-3.5 w-3.5 mr-2 opacity-50" }),
                b.label
              ]
            },
            b.id
          )),
          v.length === 0 && /* @__PURE__ */ m("p", { className: "px-2 py-1.5 text-xs text-muted-foreground", children: "All filters active" })
        ] })
      ] }),
      l && /* @__PURE__ */ m(Oh, { align: "start", className: "w-64 p-2", children: /* @__PURE__ */ m(
        O_,
        {
          filter: l,
          onSelect: w,
          onClose: () => {
            u(!1), c(null);
          }
        }
      ) })
    ] }),
    t.length > 0 && /* @__PURE__ */ m(
      "button",
      {
        onClick: r,
        className: "text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline",
        children: "Clear all"
      }
    )
  ] });
}
function sD({
  groups: e,
  placeholder: t = "Type a command or search...",
  open: n,
  onOpenChange: o,
  triggerShortcut: r = !0
}) {
  const [s, i] = f.useState(!1), a = n !== void 0, l = a ? n : s, c = f.useCallback(
    (d) => {
      a || i(d), o == null || o(d);
    },
    [a, o]
  );
  return f.useEffect(() => {
    if (!r) return;
    const d = (u) => {
      u.key === "k" && (u.metaKey || u.ctrlKey) && (u.preventDefault(), c(!l));
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [r, l, c]), /* @__PURE__ */ j(Gg, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ m(ol, { placeholder: t }),
    /* @__PURE__ */ j(rl, { children: [
      /* @__PURE__ */ m(sl, { children: "No results found." }),
      e.map((d, u) => /* @__PURE__ */ j(f.Fragment, { children: [
        u > 0 && /* @__PURE__ */ m(Ug, {}),
        /* @__PURE__ */ m(Dr, { heading: d.label, children: d.items.map((p) => {
          const h = p.icon;
          return /* @__PURE__ */ j(
            Ir,
            {
              value: [p.label, ...p.keywords ?? []].join(" "),
              onSelect: () => {
                p.onSelect(), c(!1);
              },
              children: [
                h && /* @__PURE__ */ m(h, { className: "mr-2 h-4 w-4 opacity-70" }),
                /* @__PURE__ */ m("span", { children: p.label }),
                p.shortcut && /* @__PURE__ */ m(Kg, { children: p.shortcut })
              ]
            },
            p.id
          );
        }) })
      ] }, d.label))
    ] })
  ] });
}
function iD({ label: e, description: t, children: n, className: o }) {
  return /* @__PURE__ */ j("div", { className: U("flex items-center justify-between gap-6 py-3 px-4", o), children: [
    /* @__PURE__ */ j("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ m("p", { className: "text-sm font-medium text-foreground", children: e }),
      t && /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground mt-0.5", children: t })
    ] }),
    /* @__PURE__ */ m("div", { className: "shrink-0", children: n })
  ] });
}
function aD({ title: e, children: t, className: n }) {
  return /* @__PURE__ */ j("div", { className: U("space-y-0", n), children: [
    /* @__PURE__ */ m("h2", { className: "text-base font-semibold text-foreground mb-3", children: e }),
    /* @__PURE__ */ m("div", { className: "rounded-lg border border-border bg-card divide-y divide-border overflow-hidden", children: t })
  ] });
}
function lD({ title: e = "Settings", children: t, className: n }) {
  return /* @__PURE__ */ j("div", { className: U("max-w-3xl mx-auto py-8 px-6 space-y-8", n), children: [
    /* @__PURE__ */ m("h1", { className: "text-2xl font-semibold text-foreground", children: e }),
    t
  ] });
}
const lv = f.createContext(void 0), V_ = "dkn2-ui-theme";
function cv() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ru(e) {
  return e === "system" ? cv() : e;
}
function cD({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = V_
}) {
  const [o, r] = f.useState(() => typeof window > "u" ? t : localStorage.getItem(n) ?? t), [s, i] = f.useState(
    () => Ru(o)
  );
  f.useEffect(() => {
    const c = document.documentElement, d = Ru(o);
    i(d), c.classList.remove("light", "dark"), c.classList.add(d);
  }, [o]), f.useEffect(() => {
    if (o !== "system") return;
    const c = window.matchMedia("(prefers-color-scheme: dark)"), d = () => {
      const u = cv();
      i(u), document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(u);
    };
    return c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [o]);
  const a = f.useCallback(
    (c) => {
      localStorage.setItem(n, c), r(c);
    },
    [n]
  ), l = f.useMemo(
    () => ({ theme: o, resolvedTheme: s, setTheme: a }),
    [o, s, a]
  );
  return /* @__PURE__ */ m(lv.Provider, { value: l, children: e });
}
function F_() {
  const e = f.useContext(lv);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const Zs = ["light", "dark", "system"], L_ = {
  light: m0,
  dark: c0,
  system: a0
}, Eu = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme"
};
function uD() {
  const { theme: e, setTheme: t } = F_(), n = () => {
    const r = Zs.indexOf(e), s = Zs[(r + 1) % Zs.length];
    t(s);
  }, o = L_[e];
  return /* @__PURE__ */ m(so, { delayDuration: 0, children: /* @__PURE__ */ j(io, { children: [
    /* @__PURE__ */ m(ao, { asChild: !0, children: /* @__PURE__ */ m(
      Tn,
      {
        variant: "ghost",
        size: "icon",
        onClick: n,
        "aria-label": Eu[e],
        children: /* @__PURE__ */ m(o, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ m(_n, { children: /* @__PURE__ */ m("p", { children: Eu[e] }) })
  ] }) });
}
export {
  xy as Badge,
  Tn as Button,
  Wg as Command,
  Gg as CommandDialog,
  sl as CommandEmpty,
  Dr as CommandGroup,
  ol as CommandInput,
  Ir as CommandItem,
  rl as CommandList,
  sD as CommandMenu,
  Ug as CommandSeparator,
  Kg as CommandShortcut,
  nD as DataTable,
  bS as Dialog,
  Y_ as DialogClose,
  dp as DialogContent,
  hp as DialogDescription,
  SS as DialogFooter,
  fp as DialogHeader,
  up as DialogOverlay,
  xS as DialogPortal,
  pp as DialogTitle,
  K_ as DialogTrigger,
  ZC as DropdownMenu,
  tR as DropdownMenuCheckboxItem,
  wh as DropdownMenuContent,
  X_ as DropdownMenuGroup,
  bh as DropdownMenuItem,
  xh as DropdownMenuLabel,
  q_ as DropdownMenuPortal,
  Q_ as DropdownMenuRadioGroup,
  nR as DropdownMenuRadioItem,
  Sh as DropdownMenuSeparator,
  oR as DropdownMenuShortcut,
  Z_ as DropdownMenuSub,
  eR as DropdownMenuSubContent,
  JC as DropdownMenuSubTrigger,
  QC as DropdownMenuTrigger,
  rD as FilterBar,
  Vr as Input,
  Ey as Label,
  CR as Popover,
  J_ as PopoverAnchor,
  Oh as PopoverContent,
  RR as PopoverTrigger,
  LR as ScrollArea,
  Xh as ScrollBar,
  j_ as Select,
  y0 as SelectContent,
  W_ as SelectGroup,
  b0 as SelectItem,
  w0 as SelectLabel,
  Rf as SelectScrollDownButton,
  Cf as SelectScrollUpButton,
  x0 as SelectSeparator,
  v0 as SelectTrigger,
  G_ as SelectValue,
  Nf as Separator,
  lD as SettingsPage,
  iD as SettingsRow,
  aD as SettingsSection,
  oD as SideMenu,
  T0 as Switch,
  Yg as Table,
  qg as TableBody,
  l1 as TableCaption,
  zi as TableCell,
  a1 as TableFooter,
  Zg as TableHead,
  Xg as TableHeader,
  lr as TableRow,
  cD as ThemeProvider,
  uD as ThemeToggle,
  tD as Toaster,
  io as Tooltip,
  _n as TooltipContent,
  so as TooltipProvider,
  ao as TooltipTrigger,
  by as badgeVariants,
  wy as buttonVariants,
  U as cn,
  F_ as useTheme
};
