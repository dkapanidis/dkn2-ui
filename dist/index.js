import { jsx as g, jsxs as W, Fragment as Zt } from "react/jsx-runtime";
import * as f from "react";
import j, { useLayoutEffect as Ol, useState as Qe, forwardRef as Ll, createElement as Ns, createContext as tn, useRef as xe, useEffect as Te, useContext as je, useId as qb, useCallback as Ge, useMemo as Pe, Fragment as Uf, useInsertionEffect as Kf, Component as Zb, memo as Jb, useReducer as Qb } from "react";
import * as ii from "react-dom";
import Yf, { unstable_batchedUpdates as es, createPortal as Fl } from "react-dom";
function pu(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ct(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = pu(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : pu(e[o], null);
        }
      };
  };
}
function we(...e) {
  return f.useCallback(Ct(...e), e);
}
var ew = Symbol.for("react.lazy"), ks = f[" use ".trim().toString()];
function tw(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Xf(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ew && "_payload" in e && tw(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  const t = /* @__PURE__ */ nw(e), n = f.forwardRef((r, o) => {
    let { children: s, ...i } = r;
    Xf(s) && typeof ks == "function" && (s = ks(s._payload));
    const a = f.Children.toArray(s), l = a.find(ow);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var qf = /* @__PURE__ */ ai("Slot");
// @__NO_SIDE_EFFECTS__
function nw(e) {
  const t = f.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (Xf(o) && typeof ks == "function" && (o = ks(o._payload)), f.isValidElement(o)) {
      const i = iw(o), a = sw(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rw = Symbol("radix.slottable");
function ow(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rw;
}
function sw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function iw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Zf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Zf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Jf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Zf(e)) && (r && (r += " "), r += t);
  return r;
}
const hu = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mu = Jf, Qf = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return mu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], d = s == null ? void 0 : s[c];
    if (u === null) return null;
    const p = hu(u) || hu(d);
    return o[c][p];
  }), a = n && Object.entries(n).reduce((c, u) => {
    let [d, p] = u;
    return p === void 0 || (c[d] = p), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: d, className: p, ...h } = u;
    return Object.entries(h).every((v) => {
      let [m, y] = v;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === y;
    }) ? [
      ...c,
      d,
      p
    ] : c;
  }, []);
  return mu(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, aw = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, lw = (e, t) => ({
  classGroupId: e,
  validator: t
}), ep = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Is = "-", gu = [], cw = "arbitrary..", uw = (e) => {
  const t = fw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return dw(i);
      const a = i.split(Is), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return tp(a, l, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const l = r[i], c = n[i];
        return l ? c ? aw(c, l) : l : c || gu;
      }
      return n[i] || gu;
    }
  };
}, tp = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const c = tp(e, t + 1, s);
    if (c) return c;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(Is) : e.slice(t).join(Is), l = i.length;
  for (let c = 0; c < l; c++) {
    const u = i[c];
    if (u.validator(a))
      return u.classGroupId;
  }
}, dw = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? cw + r : void 0;
})(), fw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return pw(n, t);
}, pw = (e, t) => {
  const n = ep();
  for (const r in e) {
    const o = e[r];
    Vl(o, n, r, t);
  }
  return n;
}, Vl = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    hw(i, t, n, r);
  }
}, hw = (e, t, n, r) => {
  if (typeof e == "string") {
    mw(e, t, n);
    return;
  }
  if (typeof e == "function") {
    gw(e, t, n, r);
    return;
  }
  vw(e, t, n, r);
}, mw = (e, t, n) => {
  const r = e === "" ? t : np(t, e);
  r.classGroupId = n;
}, gw = (e, t, n, r) => {
  if (yw(e)) {
    Vl(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(lw(n, e));
}, vw = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [a, l] = o[i];
    Vl(l, np(t, a), n, r);
  }
}, np = (e, t) => {
  let n = e;
  const r = t.split(Is), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let a = n.nextPart.get(i);
    a || (a = ep(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, yw = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, bw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = r[s]) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : o(s, i);
    }
  };
}, _a = "!", vu = ":", ww = [], yu = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), xw = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, c;
    const u = o.length;
    for (let m = 0; m < u; m++) {
      const y = o[m];
      if (i === 0 && a === 0) {
        if (y === vu) {
          s.push(o.slice(l, m)), l = m + 1;
          continue;
        }
        if (y === "/") {
          c = m;
          continue;
        }
      }
      y === "[" ? i++ : y === "]" ? i-- : y === "(" ? a++ : y === ")" && a--;
    }
    const d = s.length === 0 ? o : o.slice(l);
    let p = d, h = !1;
    d.endsWith(_a) ? (p = d.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      d.startsWith(_a) && (p = d.slice(1), h = !0)
    );
    const v = c && c > l ? c - l : void 0;
    return yu(s, h, p, v);
  };
  if (t) {
    const o = t + vu, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : yu(ww, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Sw = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], a = i[0] === "[", l = t.has(i);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Cw = (e) => ({
  cache: bw(e.cacheSize),
  parseClassName: xw(e),
  sortModifiers: Sw(e),
  ...uw(e)
}), Rw = /\s+/, Ew = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Rw);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      isExternal: d,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = n(u);
    if (d) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!m, b = r(y ? v.substring(0, m) : v);
    if (!b) {
      if (!y) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(v), !b) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), w = h ? x + _a : x, S = w + b;
    if (i.indexOf(S) > -1)
      continue;
    i.push(S);
    const R = o(b, y);
    for (let P = 0; P < R.length; ++P) {
      const E = R[P];
      i.push(w + E);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Tw = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = rp(n)) && (o && (o += " "), o += r);
  return o;
}, rp = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = rp(e[r])) && (n && (n += " "), n += t);
  return n;
}, Pw = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const c = t.reduce((u, d) => d(u), e());
    return n = Cw(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const u = Ew(l, n);
    return o(l, u), u;
  };
  return s = i, (...l) => s(Tw(...l));
}, Mw = [], qe = (e) => {
  const t = (n) => n[e] || Mw;
  return t.isThemeGetter = !0, t;
}, op = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Aw = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Dw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Iw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _w = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, kn = (e) => Aw.test(e), be = (e) => !!e && !Number.isNaN(Number(e)), In = (e) => !!e && Number.isInteger(Number(e)), ji = (e) => e.endsWith("%") && be(e.slice(0, -1)), wn = (e) => Dw.test(e), ip = () => !0, Ow = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nw.test(e) && !kw.test(e)
), $l = () => !1, Lw = (e) => Iw.test(e), Fw = (e) => _w.test(e), Vw = (e) => !re(e) && !se(e), $w = (e) => Xn(e, cp, $l), re = (e) => op.test(e), sr = (e) => Xn(e, up, Ow), bu = (e) => Xn(e, Kw, be), Bw = (e) => Xn(e, fp, ip), zw = (e) => Xn(e, dp, $l), wu = (e) => Xn(e, ap, $l), Hw = (e) => Xn(e, lp, Fw), ts = (e) => Xn(e, pp, Lw), se = (e) => sp.test(e), so = (e) => br(e, up), jw = (e) => br(e, dp), xu = (e) => br(e, ap), Gw = (e) => br(e, cp), Ww = (e) => br(e, lp), ns = (e) => br(e, pp, !0), Uw = (e) => br(e, fp, !0), Xn = (e, t, n) => {
  const r = op.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, br = (e, t, n = !1) => {
  const r = sp.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ap = (e) => e === "position" || e === "percentage", lp = (e) => e === "image" || e === "url", cp = (e) => e === "length" || e === "size" || e === "bg-size", up = (e) => e === "length", Kw = (e) => e === "number", dp = (e) => e === "family-name", fp = (e) => e === "number" || e === "weight", pp = (e) => e === "shadow", Yw = () => {
  const e = qe("color"), t = qe("font"), n = qe("text"), r = qe("font-weight"), o = qe("tracking"), s = qe("leading"), i = qe("breakpoint"), a = qe("container"), l = qe("spacing"), c = qe("radius"), u = qe("shadow"), d = qe("inset-shadow"), p = qe("text-shadow"), h = qe("drop-shadow"), v = qe("blur"), m = qe("perspective"), y = qe("aspect"), b = qe("ease"), x = qe("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], R = () => [...S(), se, re], P = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], T = () => [se, re, l], _ = () => [kn, "full", "auto", ...T()], N = () => [In, "none", "subgrid", se, re], O = () => ["auto", {
    span: ["full", In, se, re]
  }, In, se, re], K = () => [In, "auto", se, re], Z = () => ["auto", "min", "max", "fr", se, re], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...T()], q = () => [kn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...T()], G = () => [kn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...T()], L = () => [kn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...T()], I = () => [e, se, re], ee = () => [...S(), xu, wu, {
    position: [se, re]
  }], C = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], M = () => ["auto", "cover", "contain", Gw, $w, {
    size: [se, re]
  }], A = () => [ji, so, sr], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    se,
    re
  ], V = () => ["", be, so, sr], z = () => ["solid", "dashed", "dotted", "double"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [be, ji, xu, wu], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    se,
    re
  ], ne = () => ["none", be, se, re], te = () => ["none", be, se, re], he = () => [be, se, re], pe = () => [kn, "full", ...T()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [wn],
      breakpoint: [wn],
      color: [ip],
      container: [wn],
      "drop-shadow": [wn],
      ease: ["in", "out", "in-out"],
      font: [Vw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [wn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [wn],
      shadow: [wn],
      spacing: ["px", be],
      text: [wn],
      "text-shadow": [wn],
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
        aspect: ["auto", "square", kn, re, se, y]
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
        columns: [be, re, se, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        inset: _()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": _(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: _()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": _(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: _()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": _()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
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
        z: [In, "auto", se, re]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [kn, "full", "auto", a, ...T()]
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
        flex: [be, kn, "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", be, se, re]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", be, se, re]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [In, "first", "last", "none", se, re]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": N()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: O()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": N()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": Z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Z()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: T()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": T()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": T()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...X(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": X()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: T()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: T()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: T()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: T()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: T()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: T()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: T()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: T()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: T()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: T()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: T()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: B()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": T()
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
        "space-y": T()
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
        size: q()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...G()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...G()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...G()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...L()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...L()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...L()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...q()]
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
          ...q()
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
          ...q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, so, sr]
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
        font: [r, Uw, Bw]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ji, re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jw, zw, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [re]
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
        tracking: [o, se, re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [be, "none", se, bu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...T()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", se, re]
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
        list: ["disc", "decimal", "none", se, re]
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
        placeholder: I()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: I()
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
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [be, "from-font", "auto", se, sr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: I()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [be, "auto", se, re]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, re]
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
        content: ["none", se, re]
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
        bg: ee()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: C()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: M()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, In, se, re],
          radial: ["", se, re],
          conic: [In, se, re]
        }, Ww, Hw]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: I()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: A()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: I()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: I()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": V()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
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
        "divide-y": V()
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
        border: [...z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: I()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": I()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": I()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": I()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": I()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": I()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": I()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": I()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": I()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": I()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": I()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: I()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [be, se, re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", be, so, sr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: I()
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
          u,
          ns,
          ts
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: I()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, ns, ts]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": I()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: V()
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
        ring: I()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [be, sr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": I()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": V()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": I()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, ns, ts]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": I()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [be, se, re]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
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
        "mask-linear": [be]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": F()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": I()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": F()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": I()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": F()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": I()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": F()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": I()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": F()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": I()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": F()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": I()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": F()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": I()
      }],
      "mask-image-radial": [{
        "mask-radial": [se, re]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": I()
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
        "mask-conic": [be]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": F()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": I()
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
        mask: ee()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: C()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: M()
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
        mask: ["none", se, re]
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
          se,
          re
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [be, se, re]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [be, se, re]
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
          ns,
          ts
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": I()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", be, se, re]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [be, se, re]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", be, se, re]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [be, se, re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", be, se, re]
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
          se,
          re
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [be, se, re]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [be, se, re]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", be, se, re]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [be, se, re]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", be, se, re]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [be, se, re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [be, se, re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", be, se, re]
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
        "border-spacing": T()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": T()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": T()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, re]
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
        duration: [be, "initial", se, re]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, se, re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [be, se, re]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, se, re]
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
        perspective: [m, se, re]
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
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
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
        transform: [se, re, "", "none", "gpu", "cpu"]
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
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
        accent: I()
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
        caret: I()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, re]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": T()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": T()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", se, re]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...I()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [be, so, sr, bu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...I()]
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
}, Xw = /* @__PURE__ */ Pw(Yw);
function J(...e) {
  return Xw(Jf(e));
}
const qw = Qf(
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
), xo = f.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => /* @__PURE__ */ g(
    r ? qf : "button",
    {
      className: J(qw({ variant: t, size: n, className: e })),
      ref: s,
      ...o
    }
  )
);
xo.displayName = "Button";
const Zw = Qf(
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
function bO({ className: e, variant: t, asChild: n = !1, ...r }) {
  return /* @__PURE__ */ g(n ? qf : "span", { className: J(Zw({ variant: t }), e), ...r });
}
const hp = f.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ g(
    "input",
    {
      type: t,
      className: J(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ref: r,
      ...n
    }
  )
);
hp.displayName = "Input";
var Jw = [
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
], Qw = Jw.reduce((e, t) => {
  const n = /* @__PURE__ */ ai(`Primitive.${t}`), r = f.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), ex = "Label", mp = f.forwardRef((e, t) => /* @__PURE__ */ g(
  Qw.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
mp.displayName = ex;
var gp = mp;
const tx = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  gp,
  {
    ref: n,
    className: J(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...t
  }
));
tx.displayName = gp.displayName;
function Oa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function nx(e, t) {
  const n = f.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = f.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ g(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = f.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function nn(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = f.createContext(i), l = n.length;
    n = [...n, i];
    const c = (d) => {
      var b;
      const { scope: p, children: h, ...v } = d, m = ((b = p == null ? void 0 : p[e]) == null ? void 0 : b[l]) || a, y = f.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ g(m.Provider, { value: y, children: h });
    };
    c.displayName = s + "Provider";
    function u(d, p) {
      var m;
      const h = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[l]) || a, v = f.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [c, u];
  }
  const o = () => {
    const s = n.map((i) => f.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, rx(o, ...t)];
}
function rx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(s)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Su(e) {
  const t = /* @__PURE__ */ ox(e), n = f.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = f.Children.toArray(s), l = a.find(ix);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ox(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (f.isValidElement(o)) {
      const i = lx(o), a = ax(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sx = Symbol("radix.slottable");
function ix(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sx;
}
function ax(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function lx(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Bl(e) {
  const t = e + "CollectionProvider", [n, r] = nn(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (m) => {
    const { scope: y, children: b } = m, x = j.useRef(null), w = j.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g(o, { scope: y, itemMap: w, collectionRef: x, children: b });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Su(a), c = j.forwardRef(
    (m, y) => {
      const { scope: b, children: x } = m, w = s(a, b), S = we(y, w.collectionRef);
      return /* @__PURE__ */ g(l, { ref: S, children: x });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Su(u), h = j.forwardRef(
    (m, y) => {
      const { scope: b, children: x, ...w } = m, S = j.useRef(null), R = we(y, S), P = s(u, b);
      return j.useEffect(() => (P.itemMap.set(S, { ref: S, ...w }), () => void P.itemMap.delete(S))), /* @__PURE__ */ g(p, { [d]: "", ref: R, children: x });
    }
  );
  h.displayName = u;
  function v(m) {
    const y = s(e + "CollectionConsumer", m);
    return j.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(y.itemMap.values()).sort(
        (P, E) => w.indexOf(P.ref.current) - w.indexOf(E.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: h },
    v,
    r
  ];
}
var cx = f.createContext(void 0);
function li(e) {
  const t = f.useContext(cx);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function ux(e) {
  const t = /* @__PURE__ */ dx(e), n = f.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = f.Children.toArray(s), l = a.find(px);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function dx(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (f.isValidElement(o)) {
      const i = mx(o), a = hx(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var fx = Symbol("radix.slottable");
function px(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fx;
}
function hx(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mx(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gx = [
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
], me = gx.reduce((e, t) => {
  const n = /* @__PURE__ */ ux(`Primitive.${t}`), r = f.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function vp(e, t) {
  e && ii.flushSync(() => e.dispatchEvent(t));
}
function ot(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function vx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ot(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var yx = "DismissableLayer", La = "dismissableLayer.update", bx = "dismissableLayer.pointerDownOutside", wx = "dismissableLayer.focusOutside", Cu, yp = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jr = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = f.useContext(yp), [u, d] = f.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = f.useState({}), v = we(t, (E) => d(E)), m = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(y), x = u ? m.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= b, R = Cx((E) => {
      const T = E.target, _ = [...c.branches].some((N) => N.contains(T));
      !S || _ || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, p), P = Rx((E) => {
      const T = E.target;
      [...c.branches].some((N) => N.contains(T)) || (s == null || s(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, p);
    return vx((E) => {
      x === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, p), f.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Cu = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Ru(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Cu);
        };
    }, [u, p, n, c]), f.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Ru());
    }, [u, c]), f.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(La, E), () => document.removeEventListener(La, E);
    }, []), /* @__PURE__ */ g(
      me.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Q(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Q(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Q(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
jr.displayName = yx;
var xx = "DismissableLayerBranch", Sx = f.forwardRef((e, t) => {
  const n = f.useContext(yp), r = f.useRef(null), o = we(t, r);
  return f.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ g(me.div, { ...e, ref: o });
});
Sx.displayName = xx;
function Cx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ot(e), r = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          bp(
            bx,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Rx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ot(e), r = f.useRef(!1);
  return f.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && bp(wx, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ru() {
  const e = new CustomEvent(La);
  document.dispatchEvent(e);
}
function bp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? vp(o, s) : o.dispatchEvent(s);
}
var Gi = 0;
function ci() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Eu()), document.body.insertAdjacentElement("beforeend", e[1] ?? Eu()), Gi++, () => {
      Gi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Gi--;
    };
  }, []);
}
function Eu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Wi = "focusScope.autoFocusOnMount", Ui = "focusScope.autoFocusOnUnmount", Tu = { bubbles: !1, cancelable: !0 }, Ex = "FocusScope", Io = f.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = f.useState(null), c = ot(o), u = ot(s), d = f.useRef(null), p = we(t, (m) => l(m)), h = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (r) {
      let m = function(w) {
        if (h.paused || !a) return;
        const S = w.target;
        a.contains(S) ? d.current = S : _n(d.current, { select: !0 });
      }, y = function(w) {
        if (h.paused || !a) return;
        const S = w.relatedTarget;
        S !== null && (a.contains(S) || _n(d.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const R of w)
            R.removedNodes.length > 0 && _n(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", y);
      const x = new MutationObserver(b);
      return a && x.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), x.disconnect();
      };
    }
  }, [r, a, h.paused]), f.useEffect(() => {
    if (a) {
      Mu.add(h);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const b = new CustomEvent(Wi, Tu);
        a.addEventListener(Wi, c), a.dispatchEvent(b), b.defaultPrevented || (Tx(Nx(wp(a)), { select: !0 }), document.activeElement === m && _n(a));
      }
      return () => {
        a.removeEventListener(Wi, c), setTimeout(() => {
          const b = new CustomEvent(Ui, Tu);
          a.addEventListener(Ui, u), a.dispatchEvent(b), b.defaultPrevented || _n(m ?? document.body, { select: !0 }), a.removeEventListener(Ui, u), Mu.remove(h);
        }, 0);
      };
    }
  }, [a, c, u, h]);
  const v = f.useCallback(
    (m) => {
      if (!n && !r || h.paused) return;
      const y = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
      if (y && b) {
        const x = m.currentTarget, [w, S] = Px(x);
        w && S ? !m.shiftKey && b === S ? (m.preventDefault(), n && _n(w, { select: !0 })) : m.shiftKey && b === w && (m.preventDefault(), n && _n(S, { select: !0 })) : b === x && m.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ g(me.div, { tabIndex: -1, ...i, ref: p, onKeyDown: v });
});
Io.displayName = Ex;
function Tx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (_n(r, { select: t }), document.activeElement !== n) return;
}
function Px(e) {
  const t = wp(e), n = Pu(t, e), r = Pu(t.reverse(), e);
  return [n, r];
}
function wp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pu(e, t) {
  for (const n of e)
    if (!Mx(n, { upTo: t })) return n;
}
function Mx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ax(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function _n(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ax(e) && t && e.select();
  }
}
var Mu = Dx();
function Dx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Au(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Au(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Au(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Nx(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ut = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, kx = f[" useId ".trim().toString()] || (() => {
}), Ix = 0;
function et(e) {
  const [t, n] = f.useState(kx());
  return ut(() => {
    n((r) => r ?? String(Ix++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const _x = ["top", "right", "bottom", "left"], jn = Math.min, Nt = Math.max, _s = Math.round, rs = Math.floor, pn = (e) => ({
  x: e,
  y: e
}), Ox = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fa(e, t, n) {
  return Nt(e, jn(t, n));
}
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cn(e) {
  return e.split("-")[0];
}
function Gr(e) {
  return e.split("-")[1];
}
function zl(e) {
  return e === "x" ? "y" : "x";
}
function Hl(e) {
  return e === "y" ? "height" : "width";
}
function fn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function jl(e) {
  return zl(fn(e));
}
function Lx(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gr(e), o = jl(e), s = Hl(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Os(i)), [i, Os(i)];
}
function Fx(e) {
  const t = Os(e);
  return [Va(e), t, Va(t)];
}
function Va(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Du = ["left", "right"], Nu = ["right", "left"], Vx = ["top", "bottom"], $x = ["bottom", "top"];
function Bx(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Nu : Du : t ? Du : Nu;
    case "left":
    case "right":
      return t ? Vx : $x;
    default:
      return [];
  }
}
function zx(e, t, n, r) {
  const o = Gr(e);
  let s = Bx(Cn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Va)))), s;
}
function Os(e) {
  const t = Cn(e);
  return Ox[t] + e.slice(t.length);
}
function Hx(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xp(e) {
  return typeof e != "number" ? Hx(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ls(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function ku(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = fn(t), i = jl(t), a = Hl(i), l = Cn(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gr(t)) {
    case "start":
      h[i] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
async function jx(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Sn(t, e), v = xp(h), y = a[p ? d === "floating" ? "reference" : "floating" : d], b = Ls(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), x = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Ls(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (b.top - R.top + v.top) / S.y,
    bottom: (R.bottom - b.bottom + v.bottom) / S.y,
    left: (b.left - R.left + v.left) / S.x,
    right: (R.right - b.right + v.right) / S.x
  };
}
const Gx = 50, Wx = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: jx
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = ku(c, r, l), p = r, h = 0;
  const v = {};
  for (let m = 0; m < s.length; m++) {
    const y = s[m];
    if (!y)
      continue;
    const {
      name: b,
      fn: x
    } = y, {
      x: w,
      y: S,
      data: R,
      reset: P
    } = await x({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = S ?? d, v[b] = {
      ...v[b],
      ...R
    }, P && h < Gx && (h++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (c = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: d
    } = ku(c, p, l)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: v
  };
}, Ux = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Sn(e, t) || {};
    if (c == null)
      return {};
    const d = xp(u), p = {
      x: n,
      y: r
    }, h = jl(o), v = Hl(h), m = await i.getDimensions(c), y = h === "y", b = y ? "top" : "left", x = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[h] - p[h] - s.floating[v], R = p[h] - s.reference[h], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let E = P ? P[w] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(P))) && (E = a.floating[w] || s.floating[v]);
    const T = S / 2 - R / 2, _ = E / 2 - m[v] / 2 - 1, N = jn(d[b], _), O = jn(d[x], _), K = N, Z = E - m[v] - O, X = E / 2 - m[v] / 2 + T, U = Fa(K, X, Z), B = !l.arrow && Gr(o) != null && X !== U && s.reference[v] / 2 - (X < K ? N : O) - m[v] / 2 < 0, q = B ? X < K ? X - K : X - Z : 0;
    return {
      [h]: p[h] + q,
      data: {
        [h]: U,
        centerOffset: X - U - q,
        ...B && {
          alignmentOffset: q
        }
      },
      reset: B
    };
  }
}), Kx = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...y
      } = Sn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = Cn(o), x = fn(a), w = Cn(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), R = p || (w || !m ? [Os(a)] : Fx(a)), P = v !== "none";
      !p && P && R.push(...zx(a, m, v, S));
      const E = [a, ...R], T = await l.detectOverflow(t, y), _ = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && _.push(T[b]), d) {
        const X = Lx(o, i, S);
        _.push(T[X[0]], T[X[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: _
      }], !_.every((X) => X <= 0)) {
        var O, K;
        const X = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, U = E[X];
        if (U && (!(d === "alignment" ? x !== fn(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((G) => fn(G.placement) === x ? G.overflows[0] > 0 : !0)))
          return {
            data: {
              index: X,
              overflows: N
            },
            reset: {
              placement: U
            }
          };
        let B = (K = N.filter((q) => q.overflows[0] <= 0).sort((q, G) => q.overflows[1] - G.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!B)
          switch (h) {
            case "bestFit": {
              var Z;
              const q = (Z = N.filter((G) => {
                if (P) {
                  const L = fn(G.placement);
                  return L === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((L) => L > 0).reduce((L, I) => L + I, 0)]).sort((G, L) => G[1] - L[1])[0]) == null ? void 0 : Z[0];
              q && (B = q);
              break;
            }
            case "initialPlacement":
              B = a;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Iu(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _u(e) {
  return _x.some((t) => e[t] >= 0);
}
const Yx = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Sn(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = Iu(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: _u(a)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = Iu(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: _u(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Sp = /* @__PURE__ */ new Set(["left", "top"]);
async function Xx(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Cn(n), a = Gr(n), l = fn(n) === "y", c = Sp.has(i) ? -1 : 1, u = s && l ? -1 : 1, d = Sn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * u,
    y: p * c
  } : {
    x: p * c,
    y: h * u
  };
}
const qx = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await Xx(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Zx = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (b) => {
            let {
              x,
              y: w
            } = b;
            return {
              x,
              y: w
            };
          }
        },
        ...c
      } = Sn(e, t), u = {
        x: n,
        y: r
      }, d = await s.detectOverflow(t, c), p = fn(Cn(o)), h = zl(p);
      let v = u[h], m = u[p];
      if (i) {
        const b = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", w = v + d[b], S = v - d[x];
        v = Fa(w, v, S);
      }
      if (a) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = m + d[b], S = m - d[x];
        m = Fa(w, m, S);
      }
      const y = l.fn({
        ...t,
        [h]: v,
        [p]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: i,
            [p]: a
          }
        }
      };
    }
  };
}, Jx = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Sn(e, t), u = {
        x: n,
        y: r
      }, d = fn(o), p = zl(d);
      let h = u[p], v = u[d];
      const m = Sn(a, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const w = p === "y" ? "height" : "width", S = s.reference[p] - s.floating[w] + y.mainAxis, R = s.reference[p] + s.reference[w] - y.mainAxis;
        h < S ? h = S : h > R && (h = R);
      }
      if (c) {
        var b, x;
        const w = p === "y" ? "width" : "height", S = Sp.has(Cn(o)), R = s.reference[d] - s.floating[w] + (S && ((b = i.offset) == null ? void 0 : b[d]) || 0) + (S ? 0 : y.crossAxis), P = s.reference[d] + s.reference[w] + (S ? 0 : ((x = i.offset) == null ? void 0 : x[d]) || 0) - (S ? y.crossAxis : 0);
        v < R ? v = R : v > P && (v = P);
      }
      return {
        [p]: h,
        [d]: v
      };
    }
  };
}, Qx = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Sn(e, t), u = await i.detectOverflow(t, c), d = Cn(o), p = Gr(o), h = fn(o) === "y", {
        width: v,
        height: m
      } = s.floating;
      let y, b;
      d === "top" || d === "bottom" ? (y = d, b = p === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = p === "end" ? "top" : "bottom");
      const x = m - u.top - u.bottom, w = v - u.left - u.right, S = jn(m - u[y], x), R = jn(v - u[b], w), P = !t.middlewareData.shift;
      let E = S, T = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w), (r = t.middlewareData.shift) != null && r.enabled.y && (E = x), P && !p) {
        const N = Nt(u.left, 0), O = Nt(u.right, 0), K = Nt(u.top, 0), Z = Nt(u.bottom, 0);
        h ? T = v - 2 * (N !== 0 || O !== 0 ? N + O : Nt(u.left, u.right)) : E = m - 2 * (K !== 0 || Z !== 0 ? K + Z : Nt(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const _ = await i.getDimensions(a.floating);
      return v !== _.width || m !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ui() {
  return typeof window < "u";
}
function Wr(e) {
  return Cp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vn(e) {
  var t;
  return (t = (Cp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cp(e) {
  return ui() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function Jt(e) {
  return ui() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function Tn(e) {
  return ui() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function Ou(e) {
  return !ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function _o(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function e0(e) {
  return /^(table|td|th)$/.test(Wr(e));
}
function di(e) {
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
const t0 = /transform|translate|scale|rotate|perspective|filter/, n0 = /paint|layout|strict|content/, ir = (e) => !!e && e !== "none";
let Ki;
function Gl(e) {
  const t = Jt(e) ? Qt(e) : e;
  return ir(t.transform) || ir(t.translate) || ir(t.scale) || ir(t.rotate) || ir(t.perspective) || !Wl() && (ir(t.backdropFilter) || ir(t.filter)) || t0.test(t.willChange || "") || n0.test(t.contain || "");
}
function r0(e) {
  let t = Gn(e);
  for (; Tn(t) && !Or(t); ) {
    if (Gl(t))
      return t;
    if (di(t))
      return null;
    t = Gn(t);
  }
  return null;
}
function Wl() {
  return Ki == null && (Ki = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ki;
}
function Or(e) {
  return /^(html|body|#document)$/.test(Wr(e));
}
function Qt(e) {
  return kt(e).getComputedStyle(e);
}
function fi(e) {
  return Jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Gn(e) {
  if (Wr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ou(e) && e.host || // Fallback.
    vn(e)
  );
  return Ou(t) ? t.host : t;
}
function Rp(e) {
  const t = Gn(e);
  return Or(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tn(t) && _o(t) ? t : Rp(t);
}
function So(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Rp(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = kt(o);
  if (s) {
    const a = $a(i);
    return t.concat(i, i.visualViewport || [], _o(o) ? o : [], a && n ? So(a) : []);
  } else
    return t.concat(o, So(o, [], n));
}
function $a(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ep(e) {
  const t = Qt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Tn(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = _s(n) !== s || _s(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Ul(e) {
  return Jt(e) ? e : e.contextElement;
}
function kr(e) {
  const t = Ul(e);
  if (!Tn(t))
    return pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Ep(t);
  let i = (s ? _s(n.width) : n.width) / r, a = (s ? _s(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const o0 = /* @__PURE__ */ pn(0);
function Tp(e) {
  const t = kt(e);
  return !Wl() || !t.visualViewport ? o0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function s0(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function hr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Ul(e);
  let i = pn(1);
  t && (r ? Jt(r) && (i = kr(r)) : i = kr(e));
  const a = s0(s, n, r) ? Tp(s) : pn(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (s) {
    const p = kt(s), h = r && Jt(r) ? kt(r) : r;
    let v = p, m = $a(v);
    for (; m && r && h !== v; ) {
      const y = kr(m), b = m.getBoundingClientRect(), x = Qt(m), w = b.left + (m.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = b.top + (m.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, c *= y.y, u *= y.x, d *= y.y, l += w, c += S, v = kt(m), m = $a(v);
    }
  }
  return Ls({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function pi(e, t) {
  const n = fi(e).scrollLeft;
  return t ? t.left + n : hr(vn(e)).left + n;
}
function Pp(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - pi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function i0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = vn(r), a = t ? di(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = pn(1);
  const u = pn(0), d = Tn(r);
  if ((d || !d && !s) && ((Wr(r) !== "body" || _o(i)) && (l = fi(r)), d)) {
    const h = hr(r);
    c = kr(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = i && !d && !s ? Pp(i, l) : pn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + p.y
  };
}
function a0(e) {
  return Array.from(e.getClientRects());
}
function l0(e) {
  const t = vn(e), n = fi(e), r = e.ownerDocument.body, o = Nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + pi(e);
  const a = -n.scrollTop;
  return Qt(r).direction === "rtl" && (i += Nt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const Lu = 25;
function c0(e, t) {
  const n = kt(e), r = vn(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Wl();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = pi(r);
  if (c <= 0) {
    const u = r.ownerDocument, d = u.body, p = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(r.clientWidth - d.clientWidth - h);
    v <= Lu && (s -= v);
  } else c <= Lu && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function u0(e, t) {
  const n = hr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Tn(e) ? kr(e) : pn(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Fu(e, t, n) {
  let r;
  if (t === "viewport")
    r = c0(e, n);
  else if (t === "document")
    r = l0(vn(e));
  else if (Jt(t))
    r = u0(t, n);
  else {
    const o = Tp(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ls(r);
}
function Mp(e, t) {
  const n = Gn(e);
  return n === t || !Jt(n) || Or(n) ? !1 : Qt(n).position === "fixed" || Mp(n, t);
}
function d0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = So(e, [], !1).filter((a) => Jt(a) && Wr(a) !== "body"), o = null;
  const s = Qt(e).position === "fixed";
  let i = s ? Gn(e) : e;
  for (; Jt(i) && !Or(i); ) {
    const a = Qt(i), l = Gl(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || _o(i) && !l && Mp(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = Gn(i);
  }
  return t.set(e, r), r;
}
function f0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? di(t) ? [] : d0(t, this._c) : [].concat(n), r], a = Fu(t, i[0], o);
  let l = a.top, c = a.right, u = a.bottom, d = a.left;
  for (let p = 1; p < i.length; p++) {
    const h = Fu(t, i[p], o);
    l = Nt(h.top, l), c = jn(h.right, c), u = jn(h.bottom, u), d = Nt(h.left, d);
  }
  return {
    width: c - d,
    height: u - l,
    x: d,
    y: l
  };
}
function p0(e) {
  const {
    width: t,
    height: n
  } = Ep(e);
  return {
    width: t,
    height: n
  };
}
function h0(e, t, n) {
  const r = Tn(t), o = vn(t), s = n === "fixed", i = hr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = pn(0);
  function c() {
    l.x = pi(o);
  }
  if (r || !r && !s)
    if ((Wr(t) !== "body" || _o(o)) && (a = fi(t)), r) {
      const h = hr(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const u = o && !r && !s ? Pp(o, a) : pn(0), d = i.left + a.scrollLeft - l.x - u.x, p = i.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Yi(e) {
  return Qt(e).position === "static";
}
function Vu(e, t) {
  if (!Tn(e) || Qt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return vn(e) === n && (n = n.ownerDocument.body), n;
}
function Ap(e, t) {
  const n = kt(e);
  if (di(e))
    return n;
  if (!Tn(e)) {
    let o = Gn(e);
    for (; o && !Or(o); ) {
      if (Jt(o) && !Yi(o))
        return o;
      o = Gn(o);
    }
    return n;
  }
  let r = Vu(e, t);
  for (; r && e0(r) && Yi(r); )
    r = Vu(r, t);
  return r && Or(r) && Yi(r) && !Gl(r) ? n : r || r0(e) || n;
}
const m0 = async function(e) {
  const t = this.getOffsetParent || Ap, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: h0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function g0(e) {
  return Qt(e).direction === "rtl";
}
const v0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: i0,
  getDocumentElement: vn,
  getClippingRect: f0,
  getOffsetParent: Ap,
  getElementRects: m0,
  getClientRects: a0,
  getDimensions: p0,
  getScale: kr,
  isElement: Jt,
  isRTL: g0
};
function Dp(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function y0(e, t) {
  let n = null, r;
  const o = vn(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: p,
      height: h
    } = c;
    if (a || t(), !p || !h)
      return;
    const v = rs(d), m = rs(o.clientWidth - (u + p)), y = rs(o.clientHeight - (d + h)), b = rs(u), w = {
      rootMargin: -v + "px " + -m + "px " + -y + "px " + -b + "px",
      threshold: Nt(0, jn(1, l)) || 1
    };
    let S = !0;
    function R(P) {
      const E = P[0].intersectionRatio;
      if (E !== l) {
        if (!S)
          return i();
        E ? i(!1, E) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Dp(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, w);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function b0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Ul(e), u = o || s ? [...c ? So(c) : [], ...t ? So(t) : []] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const d = c && a ? y0(c, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === c && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), c && !l && h.observe(c), t && h.observe(t));
  let v, m = l ? hr(e) : null;
  l && y();
  function y() {
    const b = hr(e);
    m && !Dp(m, b) && n(), m = b, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var b;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), d == null || d(), (b = h) == null || b.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const w0 = qx, x0 = Zx, S0 = Kx, C0 = Qx, R0 = Yx, $u = Ux, E0 = Jx, T0 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: v0,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Wx(e, t, {
    ...o,
    platform: s
  });
};
var P0 = typeof document < "u", M0 = function() {
}, bs = P0 ? Ol : M0;
function Fs(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Fs(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Fs(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Np(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bu(e, t) {
  const n = Np(e);
  return Math.round(t * n) / n;
}
function Xi(e) {
  const t = f.useRef(e);
  return bs(() => {
    t.current = e;
  }), t;
}
function A0(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = f.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = f.useState(r);
  Fs(p, r) || h(r);
  const [v, m] = f.useState(null), [y, b] = f.useState(null), x = f.useCallback((G) => {
    G !== P.current && (P.current = G, m(G));
  }, []), w = f.useCallback((G) => {
    G !== E.current && (E.current = G, b(G));
  }, []), S = s || v, R = i || y, P = f.useRef(null), E = f.useRef(null), T = f.useRef(u), _ = l != null, N = Xi(l), O = Xi(o), K = Xi(c), Z = f.useCallback(() => {
    if (!P.current || !E.current)
      return;
    const G = {
      placement: t,
      strategy: n,
      middleware: p
    };
    O.current && (G.platform = O.current), T0(P.current, E.current, G).then((L) => {
      const I = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: K.current !== !1
      };
      X.current && !Fs(T.current, I) && (T.current = I, ii.flushSync(() => {
        d(I);
      }));
    });
  }, [p, t, n, O, K]);
  bs(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((G) => ({
      ...G,
      isPositioned: !1
    })));
  }, [c]);
  const X = f.useRef(!1);
  bs(() => (X.current = !0, () => {
    X.current = !1;
  }), []), bs(() => {
    if (S && (P.current = S), R && (E.current = R), S && R) {
      if (N.current)
        return N.current(S, R, Z);
      Z();
    }
  }, [S, R, Z, N, _]);
  const U = f.useMemo(() => ({
    reference: P,
    floating: E,
    setReference: x,
    setFloating: w
  }), [x, w]), B = f.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), q = f.useMemo(() => {
    const G = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return G;
    const L = Bu(B.floating, u.x), I = Bu(B.floating, u.y);
    return a ? {
      ...G,
      transform: "translate(" + L + "px, " + I + "px)",
      ...Np(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: I
    };
  }, [n, a, B.floating, u.x, u.y]);
  return f.useMemo(() => ({
    ...u,
    update: Z,
    refs: U,
    elements: B,
    floatingStyles: q
  }), [u, Z, U, B, q]);
}
const D0 = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? $u({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? $u({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, N0 = (e, t) => {
  const n = w0(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, k0 = (e, t) => {
  const n = x0(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, I0 = (e, t) => ({
  fn: E0(e).fn,
  options: [e, t]
}), _0 = (e, t) => {
  const n = S0(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, O0 = (e, t) => {
  const n = C0(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, L0 = (e, t) => {
  const n = R0(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, F0 = (e, t) => {
  const n = D0(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var V0 = "Arrow", kp = f.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ g(
    me.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ g("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
kp.displayName = V0;
var $0 = kp;
function Ip(e) {
  const [t, n] = f.useState(void 0);
  return ut(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Kl = "Popper", [_p, qn] = nn(Kl), [B0, Op] = _p(Kl), Lp = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = f.useState(null);
  return /* @__PURE__ */ g(B0, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Lp.displayName = Kl;
var Fp = "PopperAnchor", Vp = f.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Op(Fp, n), i = f.useRef(null), a = we(t, i), l = f.useRef(null);
    return f.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ g(me.div, { ...o, ref: a });
  }
);
Vp.displayName = Fp;
var Yl = "PopperContent", [z0, H0] = _p(Yl), $p = f.forwardRef(
  (e, t) => {
    var z, $, F, Y, ne, te;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...m
    } = e, y = Op(Yl, n), [b, x] = f.useState(null), w = we(t, (he) => x(he)), [S, R] = f.useState(null), P = Ip(S), E = (P == null ? void 0 : P.width) ?? 0, T = (P == null ? void 0 : P.height) ?? 0, _ = r + (s !== "center" ? "-" + s : ""), N = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, O = Array.isArray(c) ? c : [c], K = O.length > 0, Z = {
      padding: N,
      boundary: O.filter(G0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: K
    }, { refs: X, floatingStyles: U, placement: B, isPositioned: q, middlewareData: G } = A0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...he) => b0(...he, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        N0({ mainAxis: o + T, alignmentAxis: i }),
        l && k0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? I0() : void 0,
          ...Z
        }),
        l && _0({ ...Z }),
        O0({
          ...Z,
          apply: ({ elements: he, rects: pe, availableWidth: ze, availableHeight: Ee }) => {
            const { width: We, height: Gt } = pe.reference, Ue = he.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${ze}px`), Ue.setProperty("--radix-popper-available-height", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-width", `${We}px`), Ue.setProperty("--radix-popper-anchor-height", `${Gt}px`);
          }
        }),
        S && F0({ element: S, padding: a }),
        W0({ arrowWidth: E, arrowHeight: T }),
        p && L0({ strategy: "referenceHidden", ...Z })
      ]
    }), [L, I] = Hp(B), ee = ot(v);
    ut(() => {
      q && (ee == null || ee());
    }, [q, ee]);
    const C = (z = G.arrow) == null ? void 0 : z.x, M = ($ = G.arrow) == null ? void 0 : $.y, A = ((F = G.arrow) == null ? void 0 : F.centerOffset) !== 0, [D, V] = f.useState();
    return ut(() => {
      b && V(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ g(
      "div",
      {
        ref: X.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: q ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D,
          "--radix-popper-transform-origin": [
            (Y = G.transformOrigin) == null ? void 0 : Y.x,
            (ne = G.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((te = G.hide) == null ? void 0 : te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ g(
          z0,
          {
            scope: n,
            placedSide: L,
            onArrowChange: R,
            arrowX: C,
            arrowY: M,
            shouldHideArrow: A,
            children: /* @__PURE__ */ g(
              me.div,
              {
                "data-side": L,
                "data-align": I,
                ...m,
                ref: w,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
$p.displayName = Yl;
var Bp = "PopperArrow", j0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, zp = f.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = H0(Bp, r), i = j0[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ g(
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
        children: /* @__PURE__ */ g(
          $0,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
zp.displayName = Bp;
function G0(e) {
  return e !== null;
}
var W0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, x;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = Hp(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, h = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let v = "", m = "";
    return c === "bottom" ? (v = i ? d : `${p}px`, m = `${-l}px`) : c === "top" ? (v = i ? d : `${p}px`, m = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, m = i ? d : `${h}px`) : c === "left" && (v = `${r.floating.width + l}px`, m = i ? d : `${h}px`), { data: { x: v, y: m } };
  }
});
function Hp(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Oo = Lp, Lo = Vp, hi = $p, mi = zp, U0 = "Portal", Ur = f.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = f.useState(!1);
  ut(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Yf.createPortal(/* @__PURE__ */ g(me.div, { ...r, ref: t }), i) : null;
});
Ur.displayName = U0;
// @__NO_SIDE_EFFECTS__
function K0(e) {
  const t = /* @__PURE__ */ Y0(e), n = f.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = f.Children.toArray(s), l = a.find(q0);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Y0(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (f.isValidElement(o)) {
      const i = J0(o), a = Z0(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var X0 = Symbol("radix.slottable");
function q0(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === X0;
}
function Z0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function J0(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Q0 = f[" useInsertionEffect ".trim().toString()] || ut;
function Rn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = eS({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = f.useRef(e !== void 0);
    f.useEffect(() => {
      const d = u.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = f.useCallback(
    (u) => {
      var d;
      if (a) {
        const p = tS(u) ? u(e) : u;
        p !== e && ((d = i.current) == null || d.call(i, p));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function eS({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = f.useState(e), o = f.useRef(n), s = f.useRef(t);
  return Q0(() => {
    s.current = t;
  }, [t]), f.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function tS(e) {
  return typeof e == "function";
}
function jp(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Gp = Object.freeze({
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
}), nS = "VisuallyHidden", Wp = f.forwardRef(
  (e, t) => /* @__PURE__ */ g(
    me.span,
    {
      ...e,
      ref: t,
      style: { ...Gp, ...e.style }
    }
  )
);
Wp.displayName = nS;
var rS = Wp, oS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Sr = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), ss = {}, qi = 0, Up = function(e) {
  return e && (e.host || Up(e.parentNode));
}, sS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Up(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, iS = function(e, t, n, r) {
  var o = sS(t, Array.isArray(e) ? e : [e]);
  ss[n] || (ss[n] = /* @__PURE__ */ new WeakMap());
  var s = ss[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (a.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), v = h !== null && h !== "false", m = (Sr.get(p) || 0) + 1, y = (s.get(p) || 0) + 1;
          Sr.set(p, m), s.set(p, y), i.push(p), m === 1 && v && os.set(p, !0), y === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), a.clear(), qi++, function() {
    i.forEach(function(d) {
      var p = Sr.get(d) - 1, h = s.get(d) - 1;
      Sr.set(d, p), s.set(d, h), p || (os.has(d) || d.removeAttribute(r), os.delete(d)), h || d.removeAttribute(n);
    }), qi--, qi || (Sr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), ss = {});
  };
}, gi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = oS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), iS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, dn = function() {
  return dn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, dn.apply(this, arguments);
};
function Kp(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function aS(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ws = "right-scroll-bar-position", xs = "width-before-scroll-bar", lS = "with-scroll-bars-hidden", cS = "--removed-body-scroll-bar-size";
function Zi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function uS(e, t) {
  var n = Qe(function() {
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
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var dS = typeof window < "u" ? f.useLayoutEffect : f.useEffect, zu = /* @__PURE__ */ new WeakMap();
function fS(e, t) {
  var n = uS(null, function(r) {
    return e.forEach(function(o) {
      return Zi(o, r);
    });
  });
  return dS(function() {
    var r = zu.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Zi(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Zi(a, i);
      });
    }
    zu.set(n, e);
  }, [e]), n;
}
function pS(e) {
  return e;
}
function hS(e, t) {
  t === void 0 && (t = pS);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
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
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function mS(e) {
  e === void 0 && (e = {});
  var t = hS(null);
  return t.options = dn({ async: !0, ssr: !1 }, e), t;
}
var Yp = function(e) {
  var t = e.sideCar, n = Kp(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return f.createElement(r, dn({}, n));
};
Yp.isSideCarExport = !0;
function gS(e, t) {
  return e.useMedium(t), Yp;
}
var Xp = mS(), Ji = function() {
}, vi = f.forwardRef(function(e, t) {
  var n = f.useRef(null), r = f.useState({
    onScrollCapture: Ji,
    onWheelCapture: Ji,
    onTouchMoveCapture: Ji
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, y = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, S = Kp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = p, P = fS([n, t]), E = dn(dn({}, S), o);
  return f.createElement(
    f.Fragment,
    null,
    u && f.createElement(R, { sideCar: Xp, removeScrollBar: c, shards: d, noRelative: h, noIsolation: v, inert: m, setCallbacks: s, allowPinchZoom: !!y, lockRef: n, gapMode: w }),
    i ? f.cloneElement(f.Children.only(a), dn(dn({}, E), { ref: P })) : f.createElement(x, dn({}, E, { className: l, ref: P }), a)
  );
});
vi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vi.classNames = {
  fullWidth: xs,
  zeroRight: ws
};
var vS = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vS();
  return t && e.setAttribute("nonce", t), e;
}
function bS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var xS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = yS()) && (bS(t, n), wS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, SS = function() {
  var e = xS();
  return function(t, n) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, qp = function() {
  var e = SS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, CS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Qi = function(e) {
  return parseInt(e || "", 10) || 0;
}, RS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Qi(n), Qi(r), Qi(o)];
}, ES = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return CS;
  var t = RS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, TS = qp(), Ir = "data-scroll-locked", PS = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(lS, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ir, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ws, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(xs, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ws, " .").concat(ws, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xs, " .").concat(xs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ir, `] {
    `).concat(cS, ": ").concat(a, `px;
  }
`);
}, Hu = function() {
  var e = parseInt(document.body.getAttribute(Ir) || "0", 10);
  return isFinite(e) ? e : 0;
}, MS = function() {
  f.useEffect(function() {
    return document.body.setAttribute(Ir, (Hu() + 1).toString()), function() {
      var e = Hu() - 1;
      e <= 0 ? document.body.removeAttribute(Ir) : document.body.setAttribute(Ir, e.toString());
    };
  }, []);
}, AS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  MS();
  var s = f.useMemo(function() {
    return ES(o);
  }, [o]);
  return f.createElement(TS, { styles: PS(s, !t, o, n ? "" : "!important") });
}, Ba = !1;
if (typeof window < "u")
  try {
    var is = Object.defineProperty({}, "passive", {
      get: function() {
        return Ba = !0, !0;
      }
    });
    window.addEventListener("test", is, is), window.removeEventListener("test", is, is);
  } catch {
    Ba = !1;
  }
var Cr = Ba ? { passive: !1 } : !1, DS = function(e) {
  return e.tagName === "TEXTAREA";
}, Zp = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !DS(e) && n[t] === "visible")
  );
}, NS = function(e) {
  return Zp(e, "overflowY");
}, kS = function(e) {
  return Zp(e, "overflowX");
}, ju = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Jp(e, r);
    if (o) {
      var s = Qp(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, IS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, _S = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Jp = function(e, t) {
  return e === "v" ? NS(t) : kS(t);
}, Qp = function(e, t) {
  return e === "v" ? IS(t) : _S(t);
}, OS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, LS = function(e, t, n, r, o) {
  var s = OS(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, d = 0, p = 0;
  do {
    if (!a)
      break;
    var h = Qp(e, a), v = h[0], m = h[1], y = h[2], b = m - y - s * v;
    (v || b) && Jp(e, a) && (d += b, p += v);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (c = !0), c;
}, as = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gu = function(e) {
  return [e.deltaX, e.deltaY];
}, Wu = function(e) {
  return e && "current" in e ? e.current : e;
}, FS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, VS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, $S = 0, Rr = [];
function BS(e) {
  var t = f.useRef([]), n = f.useRef([0, 0]), r = f.useRef(), o = f.useState($S++)[0], s = f.useState(qp)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = aS([e.lockRef.current], (e.shards || []).map(Wu), !0).filter(Boolean);
      return m.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = f.useCallback(function(m, y) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var b = as(m), x = n.current, w = "deltaX" in m ? m.deltaX : x[0] - b[0], S = "deltaY" in m ? m.deltaY : x[1] - b[1], R, P = m.target, E = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && E === "h" && P.type === "range")
      return !1;
    var T = window.getSelection(), _ = T && T.anchorNode, N = _ ? _ === P || _.contains(P) : !1;
    if (N)
      return !1;
    var O = ju(E, P);
    if (!O)
      return !0;
    if (O ? R = E : (R = E === "v" ? "h" : "v", O = ju(E, P)), !O)
      return !1;
    if (!r.current && "changedTouches" in m && (w || S) && (r.current = R), !R)
      return !0;
    var K = r.current || R;
    return LS(K, y, m, K === "h" ? w : S);
  }, []), l = f.useCallback(function(m) {
    var y = m;
    if (!(!Rr.length || Rr[Rr.length - 1] !== s)) {
      var b = "deltaY" in y ? Gu(y) : as(y), x = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && FS(R.delta, b);
      })[0];
      if (x && x.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(Wu).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), S = w.length > 0 ? a(y, w[0]) : !i.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(m, y, b, x) {
    var w = { name: m, delta: y, target: b, should: x, shadowParent: zS(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), u = f.useCallback(function(m) {
    n.current = as(m), r.current = void 0;
  }, []), d = f.useCallback(function(m) {
    c(m.type, Gu(m), m.target, a(m, e.lockRef.current));
  }, []), p = f.useCallback(function(m) {
    c(m.type, as(m), m.target, a(m, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return Rr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Cr), document.addEventListener("touchmove", l, Cr), document.addEventListener("touchstart", u, Cr), function() {
      Rr = Rr.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Cr), document.removeEventListener("touchmove", l, Cr), document.removeEventListener("touchstart", u, Cr);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    v ? f.createElement(s, { styles: VS(o) }) : null,
    h ? f.createElement(AS, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function zS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const HS = gS(Xp, BS);
var Fo = f.forwardRef(function(e, t) {
  return f.createElement(vi, dn({}, e, { ref: t, sideCar: HS }));
});
Fo.classNames = vi.classNames;
var jS = [" ", "Enter", "ArrowUp", "ArrowDown"], GS = [" ", "Enter"], mr = "Select", [yi, bi, WS] = Bl(mr), [Kr] = nn(mr, [
  WS,
  qn
]), wi = qn(), [US, Zn] = Kr(mr), [KS, YS] = Kr(mr), eh = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: u,
    autoComplete: d,
    disabled: p,
    required: h,
    form: v
  } = e, m = wi(t), [y, b] = f.useState(null), [x, w] = f.useState(null), [S, R] = f.useState(!1), P = li(c), [E, T] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: mr
  }), [_, N] = Rn({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: mr
  }), O = f.useRef(null), K = y ? v || !!y.closest("form") : !0, [Z, X] = f.useState(/* @__PURE__ */ new Set()), U = Array.from(Z).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ g(Oo, { ...m, children: /* @__PURE__ */ W(
    US,
    {
      required: h,
      scope: t,
      trigger: y,
      onTriggerChange: b,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: R,
      contentId: et(),
      value: _,
      onValueChange: N,
      open: E,
      onOpenChange: T,
      dir: P,
      triggerPointerDownPosRef: O,
      disabled: p,
      children: [
        /* @__PURE__ */ g(yi.Provider, { scope: t, children: /* @__PURE__ */ g(
          KS,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((B) => {
              X((q) => new Set(q).add(B));
            }, []),
            onNativeOptionRemove: f.useCallback((B) => {
              X((q) => {
                const G = new Set(q);
                return G.delete(B), G;
              });
            }, []),
            children: n
          }
        ) }),
        K ? /* @__PURE__ */ W(
          Eh,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: _,
            onChange: (B) => N(B.target.value),
            disabled: p,
            form: v,
            children: [
              _ === void 0 ? /* @__PURE__ */ g("option", { value: "" }) : null,
              Array.from(Z)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
eh.displayName = mr;
var th = "SelectTrigger", nh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = wi(n), i = Zn(th, n), a = i.disabled || r, l = we(t, i.onTriggerChange), c = bi(n), u = f.useRef("touch"), [d, p, h] = Ph((m) => {
      const y = c().filter((w) => !w.disabled), b = y.find((w) => w.value === i.value), x = Mh(y, m, b);
      x !== void 0 && i.onValueChange(x.value);
    }), v = (m) => {
      a || (i.onOpenChange(!0), h()), m && (i.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ g(Lo, { asChild: !0, ...s, children: /* @__PURE__ */ g(
      me.button,
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
        "data-placeholder": Th(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Q(o.onClick, (m) => {
          m.currentTarget.focus(), u.current !== "mouse" && v(m);
        }),
        onPointerDown: Q(o.onPointerDown, (m) => {
          u.current = m.pointerType;
          const y = m.target;
          y.hasPointerCapture(m.pointerId) && y.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (v(m), m.preventDefault());
        }),
        onKeyDown: Q(o.onKeyDown, (m) => {
          const y = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && p(m.key), !(y && m.key === " ") && jS.includes(m.key) && (v(), m.preventDefault());
        })
      }
    ) });
  }
);
nh.displayName = th;
var rh = "SelectValue", oh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Zn(rh, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, d = we(t, l.onValueNodeChange);
    return ut(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ g(
      me.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: Th(l.value) ? /* @__PURE__ */ g(Zt, { children: i }) : s
      }
    );
  }
);
oh.displayName = rh;
var XS = "SelectIcon", sh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ g(me.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
sh.displayName = XS;
var qS = "SelectPortal", ih = (e) => /* @__PURE__ */ g(Ur, { asChild: !0, ...e });
ih.displayName = qS;
var gr = "SelectContent", ah = f.forwardRef(
  (e, t) => {
    const n = Zn(gr, e.__scopeSelect), [r, o] = f.useState();
    if (ut(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? ii.createPortal(
        /* @__PURE__ */ g(lh, { scope: e.__scopeSelect, children: /* @__PURE__ */ g(yi.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ g("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ g(ch, { ...e, ref: t });
  }
);
ah.displayName = gr;
var Kt = 10, [lh, Jn] = Kr(gr), ZS = "SelectContentImpl", JS = /* @__PURE__ */ K0("SelectContent.RemoveScroll"), ch = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: y,
      //
      ...b
    } = e, x = Zn(gr, n), [w, S] = f.useState(null), [R, P] = f.useState(null), E = we(t, (z) => S(z)), [T, _] = f.useState(null), [N, O] = f.useState(
      null
    ), K = bi(n), [Z, X] = f.useState(!1), U = f.useRef(!1);
    f.useEffect(() => {
      if (w) return gi(w);
    }, [w]), ci();
    const B = f.useCallback(
      (z) => {
        const [$, ...F] = K().map((te) => te.ref.current), [Y] = F.slice(-1), ne = document.activeElement;
        for (const te of z)
          if (te === ne || (te == null || te.scrollIntoView({ block: "nearest" }), te === $ && R && (R.scrollTop = 0), te === Y && R && (R.scrollTop = R.scrollHeight), te == null || te.focus(), document.activeElement !== ne)) return;
      },
      [K, R]
    ), q = f.useCallback(
      () => B([T, w]),
      [B, T, w]
    );
    f.useEffect(() => {
      Z && q();
    }, [Z, q]);
    const { onOpenChange: G, triggerPointerDownPosRef: L } = x;
    f.useEffect(() => {
      if (w) {
        let z = { x: 0, y: 0 };
        const $ = (Y) => {
          var ne, te;
          z = {
            x: Math.abs(Math.round(Y.pageX) - (((ne = L.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((te = L.current) == null ? void 0 : te.y) ?? 0))
          };
        }, F = (Y) => {
          z.x <= 10 && z.y <= 10 ? Y.preventDefault() : w.contains(Y.target) || G(!1), document.removeEventListener("pointermove", $), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", $), document.addEventListener("pointerup", F, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", F, { capture: !0 });
        };
      }
    }, [w, G, L]), f.useEffect(() => {
      const z = () => G(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [G]);
    const [I, ee] = Ph((z) => {
      const $ = K().filter((ne) => !ne.disabled), F = $.find((ne) => ne.ref.current === document.activeElement), Y = Mh($, z, F);
      Y && setTimeout(() => Y.ref.current.focus());
    }), C = f.useCallback(
      (z, $, F) => {
        const Y = !U.current && !F;
        (x.value !== void 0 && x.value === $ || Y) && (_(z), Y && (U.current = !0));
      },
      [x.value]
    ), M = f.useCallback(() => w == null ? void 0 : w.focus(), [w]), A = f.useCallback(
      (z, $, F) => {
        const Y = !U.current && !F;
        (x.value !== void 0 && x.value === $ || Y) && O(z);
      },
      [x.value]
    ), D = r === "popper" ? za : uh, V = D === za ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ g(
      lh,
      {
        scope: n,
        content: w,
        viewport: R,
        onViewportChange: P,
        itemRefCallback: C,
        selectedItem: T,
        onItemLeave: M,
        itemTextRefCallback: A,
        focusSelectedItem: q,
        selectedItemText: N,
        position: r,
        isPositioned: Z,
        searchRef: I,
        children: /* @__PURE__ */ g(Fo, { as: JS, allowPinchZoom: !0, children: /* @__PURE__ */ g(
          Io,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: Q(o, (z) => {
              var $;
              ($ = x.trigger) == null || $.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ g(
              jr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ g(
                  D,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ...b,
                    ...V,
                    onPlaced: () => X(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Q(b.onKeyDown, (z) => {
                      const $ = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !$ && z.key.length === 1 && ee(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let Y = K().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const ne = z.target, te = Y.indexOf(ne);
                          Y = Y.slice(te + 1);
                        }
                        setTimeout(() => B(Y)), z.preventDefault();
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
ch.displayName = ZS;
var QS = "SelectItemAlignedPosition", uh = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Zn(gr, n), i = Jn(gr, n), [a, l] = f.useState(null), [c, u] = f.useState(null), d = we(t, (E) => u(E)), p = bi(n), h = f.useRef(!1), v = f.useRef(!0), { viewport: m, selectedItem: y, selectedItemText: b, focusSelectedItem: x } = i, w = f.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && m && y && b) {
      const E = s.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), _ = s.valueNode.getBoundingClientRect(), N = b.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ne = N.left - T.left, te = _.left - ne, he = E.left - te, pe = E.width + he, ze = Math.max(pe, T.width), Ee = window.innerWidth - Kt, We = Oa(te, [
          Kt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Kt, Ee - ze)
        ]);
        a.style.minWidth = pe + "px", a.style.left = We + "px";
      } else {
        const ne = T.right - N.right, te = window.innerWidth - _.right - ne, he = window.innerWidth - E.right - te, pe = E.width + he, ze = Math.max(pe, T.width), Ee = window.innerWidth - Kt, We = Oa(te, [
          Kt,
          Math.max(Kt, Ee - ze)
        ]);
        a.style.minWidth = pe + "px", a.style.right = We + "px";
      }
      const O = p(), K = window.innerHeight - Kt * 2, Z = m.scrollHeight, X = window.getComputedStyle(c), U = parseInt(X.borderTopWidth, 10), B = parseInt(X.paddingTop, 10), q = parseInt(X.borderBottomWidth, 10), G = parseInt(X.paddingBottom, 10), L = U + B + Z + G + q, I = Math.min(y.offsetHeight * 5, L), ee = window.getComputedStyle(m), C = parseInt(ee.paddingTop, 10), M = parseInt(ee.paddingBottom, 10), A = E.top + E.height / 2 - Kt, D = K - A, V = y.offsetHeight / 2, z = y.offsetTop + V, $ = U + B + z, F = L - $;
      if ($ <= A) {
        const ne = O.length > 0 && y === O[O.length - 1].ref.current;
        a.style.bottom = "0px";
        const te = c.clientHeight - m.offsetTop - m.offsetHeight, he = Math.max(
          D,
          V + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? M : 0) + te + q
        ), pe = $ + he;
        a.style.height = pe + "px";
      } else {
        const ne = O.length > 0 && y === O[0].ref.current;
        a.style.top = "0px";
        const he = Math.max(
          A,
          U + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? C : 0) + V
        ) + F;
        a.style.height = he + "px", m.scrollTop = $ - A + m.offsetTop;
      }
      a.style.margin = `${Kt}px 0`, a.style.minHeight = I + "px", a.style.maxHeight = K + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    a,
    c,
    m,
    y,
    b,
    s.dir,
    r
  ]);
  ut(() => w(), [w]);
  const [S, R] = f.useState();
  ut(() => {
    c && R(window.getComputedStyle(c).zIndex);
  }, [c]);
  const P = f.useCallback(
    (E) => {
      E && v.current === !0 && (w(), x == null || x(), v.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ g(
    tC,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ g(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ g(
            me.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
uh.displayName = QS;
var eC = "SelectPopperPosition", za = f.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Kt,
    ...s
  } = e, i = wi(n);
  return /* @__PURE__ */ g(
    hi,
    {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
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
za.displayName = eC;
var [tC, Xl] = Kr(gr, {}), Ha = "SelectViewport", dh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Jn(Ha, n), i = Xl(Ha, n), a = we(t, s.onViewportChange), l = f.useRef(0);
    return /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ g(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ g(yi.Slot, { scope: n, children: /* @__PURE__ */ g(
        me.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
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
            ...o.style
          },
          onScroll: Q(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && d) {
              const h = Math.abs(l.current - u.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - Kt * 2, m = parseFloat(d.style.minHeight), y = parseFloat(d.style.height), b = Math.max(m, y);
                if (b < v) {
                  const x = b + h, w = Math.min(v, x), S = x - w;
                  d.style.height = w + "px", d.style.bottom === "0px" && (u.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
dh.displayName = Ha;
var fh = "SelectGroup", [nC, rC] = Kr(fh), ph = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = et();
    return /* @__PURE__ */ g(nC, { scope: n, id: o, children: /* @__PURE__ */ g(me.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ph.displayName = fh;
var hh = "SelectLabel", mh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = rC(hh, n);
    return /* @__PURE__ */ g(me.div, { id: o.id, ...r, ref: t });
  }
);
mh.displayName = hh;
var Vs = "SelectItem", [oC, gh] = Kr(Vs), vh = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Zn(Vs, n), l = Jn(Vs, n), c = a.value === r, [u, d] = f.useState(s ?? ""), [p, h] = f.useState(!1), v = we(
      t,
      (x) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, x, r, o);
      }
    ), m = et(), y = f.useRef("touch"), b = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ g(
      oC,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: c,
        onItemTextChange: f.useCallback((x) => {
          d((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ g(
          yi.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ g(
              me.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: Q(i.onFocus, () => h(!0)),
                onBlur: Q(i.onBlur, () => h(!1)),
                onClick: Q(i.onClick, () => {
                  y.current !== "mouse" && b();
                }),
                onPointerUp: Q(i.onPointerUp, () => {
                  y.current === "mouse" && b();
                }),
                onPointerDown: Q(i.onPointerDown, (x) => {
                  y.current = x.pointerType;
                }),
                onPointerMove: Q(i.onPointerMove, (x) => {
                  var w;
                  y.current = x.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : y.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Q(i.onPointerLeave, (x) => {
                  var w;
                  x.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: Q(i.onKeyDown, (x) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (GS.includes(x.key) && b(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
vh.displayName = Vs;
var co = "SelectItemText", yh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Zn(co, n), a = Jn(co, n), l = gh(co, n), c = YS(co, n), [u, d] = f.useState(null), p = we(
      t,
      (b) => d(b),
      l.onItemTextChange,
      (b) => {
        var x;
        return (x = a.itemTextRefCallback) == null ? void 0 : x.call(a, b, l.value, l.disabled);
      }
    ), h = u == null ? void 0 : u.textContent, v = f.useMemo(
      () => /* @__PURE__ */ g("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: y } = c;
    return ut(() => (m(v), () => y(v)), [m, y, v]), /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ g(me.span, { id: l.textId, ...s, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ii.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
yh.displayName = co;
var bh = "SelectItemIndicator", wh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return gh(bh, n).isSelected ? /* @__PURE__ */ g(me.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
wh.displayName = bh;
var ja = "SelectScrollUpButton", xh = f.forwardRef((e, t) => {
  const n = Jn(ja, e.__scopeSelect), r = Xl(ja, e.__scopeSelect), [o, s] = f.useState(!1), i = we(t, r.onScrollButtonChange);
  return ut(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ g(
    Ch,
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
xh.displayName = ja;
var Ga = "SelectScrollDownButton", Sh = f.forwardRef((e, t) => {
  const n = Jn(Ga, e.__scopeSelect), r = Xl(Ga, e.__scopeSelect), [o, s] = f.useState(!1), i = we(t, r.onScrollButtonChange);
  return ut(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ g(
    Ch,
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
Sh.displayName = Ga;
var Ch = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Jn("SelectScrollButton", n), i = f.useRef(null), a = bi(n), l = f.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return f.useEffect(() => () => l(), [l]), ut(() => {
    var u;
    const c = a().find((d) => d.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ g(
    me.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: Q(o.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Q(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), sC = "SelectSeparator", Rh = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ g(me.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Rh.displayName = sC;
var Wa = "SelectArrow", iC = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wi(n), s = Zn(Wa, n), i = Jn(Wa, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ g(mi, { ...o, ...r, ref: t }) : null;
  }
);
iC.displayName = Wa;
var aC = "SelectBubbleInput", Eh = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = f.useRef(null), s = we(r, o), i = jp(t);
    return f.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && u) {
        const d = new Event("change", { bubbles: !0 });
        u.call(a, t), a.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ g(
      me.select,
      {
        ...n,
        style: { ...Gp, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Eh.displayName = aC;
function Th(e) {
  return e === "" || e === void 0;
}
function Ph(e) {
  const t = ot(e), n = f.useRef(""), r = f.useRef(0), o = f.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), (function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(a);
    },
    [t]
  ), s = f.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Mh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = lC(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function lC(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var cC = eh, Ah = nh, uC = oh, dC = sh, fC = ih, Dh = ah, pC = dh, hC = ph, Nh = mh, kh = vh, mC = yh, gC = wh, Ih = xh, _h = Sh, Oh = Rh;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yC = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Uu = (e) => {
  const t = yC(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Lh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), bC = (e) => {
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
var wC = {
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
const xC = Ll(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => Ns(
    "svg",
    {
      ref: l,
      ...wC,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Lh("lucide", o),
      ...!s && !bC(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, u]) => Ns(c, u)),
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
const Rt = (e, t) => {
  const n = Ll(
    ({ className: r, ...o }, s) => Ns(xC, {
      ref: s,
      iconNode: t,
      className: Lh(
        `lucide-${vC(Uu(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Uu(e), n;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SC = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], CC = Rt("arrow-down", SC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RC = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ku = Rt("arrow-up", RC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EC = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Lr = Rt("check", EC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TC = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ql = Rt("chevron-down", TC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PC = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Fh = Rt("chevron-left", PC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MC = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Yr = Rt("chevron-right", MC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AC = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], DC = Rt("chevron-up", AC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NC = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], kC = Rt("circle", NC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IC = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], _C = Rt("command", IC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OC = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
], LC = Rt("list-filter", OC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FC = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], VC = Rt("monitor", FC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $C = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], BC = Rt("moon", $C);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zC = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], HC = Rt("plus", zC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jC = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], GC = Rt("sun", jC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WC = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Zl = Rt("x", WC), wO = cC, xO = hC, SO = uC, UC = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  Ah,
  {
    ref: r,
    className: J(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ g(dC, { asChild: !0, children: /* @__PURE__ */ g(ql, { className: "size-4 opacity-50" }) })
    ]
  }
));
UC.displayName = Ah.displayName;
const Vh = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Ih,
  {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ g(DC, { className: "size-4" })
  }
));
Vh.displayName = Ih.displayName;
const $h = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  _h,
  {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ g(ql, { className: "size-4" })
  }
));
$h.displayName = _h.displayName;
const KC = f.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ g(fC, { children: /* @__PURE__ */ W(
  Dh,
  {
    ref: o,
    className: J(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ g(Vh, {}),
      /* @__PURE__ */ g(
        pC,
        {
          className: J(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ g($h, {})
    ]
  }
) }));
KC.displayName = Dh.displayName;
const YC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Nh,
  {
    ref: n,
    className: J("px-2 py-1.5 text-xs font-semibold text-muted-foreground", e),
    ...t
  }
));
YC.displayName = Nh.displayName;
const XC = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  kh,
  {
    ref: r,
    className: J(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ g("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g(gC, { children: /* @__PURE__ */ g(Lr, { className: "size-4" }) }) }),
      /* @__PURE__ */ g(mC, { children: t })
    ]
  }
));
XC.displayName = kh.displayName;
const qC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Oh,
  {
    ref: n,
    className: J("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qC.displayName = Oh.displayName;
var xi = "Switch", [ZC] = nn(xi), [JC, QC] = ZC(xi), Bh = f.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: c,
      form: u,
      ...d
    } = e, [p, h] = f.useState(null), v = we(t, (w) => h(w)), m = f.useRef(!1), y = p ? u || !!p.closest("form") : !0, [b, x] = Rn({
      prop: o,
      defaultProp: s ?? !1,
      onChange: c,
      caller: xi
    });
    return /* @__PURE__ */ W(JC, { scope: n, checked: b, disabled: a, children: [
      /* @__PURE__ */ g(
        me.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": i,
          "data-state": Gh(b),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...d,
          ref: v,
          onClick: Q(e.onClick, (w) => {
            x((S) => !S), y && (m.current = w.isPropagationStopped(), m.current || w.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ g(
        jh,
        {
          control: p,
          bubbles: !m.current,
          name: r,
          value: l,
          checked: b,
          required: i,
          disabled: a,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Bh.displayName = xi;
var zh = "SwitchThumb", Hh = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = QC(zh, n);
    return /* @__PURE__ */ g(
      me.span,
      {
        "data-state": Gh(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Hh.displayName = zh;
var eR = "SwitchBubbleInput", jh = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const i = f.useRef(null), a = we(i, s), l = jp(n), c = Ip(t);
    return f.useEffect(() => {
      const u = i.current;
      if (!u) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== n && h) {
        const v = new Event("click", { bubbles: r });
        h.call(u, n), u.dispatchEvent(v);
      }
    }, [l, n, r]), /* @__PURE__ */ g(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
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
jh.displayName = eR;
function Gh(e) {
  return e ? "checked" : "unchecked";
}
var Wh = Bh, tR = Hh;
const nR = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Wh,
  {
    className: J(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ g(
      tR,
      {
        className: J(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
nR.displayName = Wh.displayName;
var rR = [
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
], oR = rR.reduce((e, t) => {
  const n = /* @__PURE__ */ ai(`Primitive.${t}`), r = f.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), sR = "Separator", Yu = "horizontal", iR = ["horizontal", "vertical"], Uh = f.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Yu, ...o } = e, s = aR(r) ? r : Yu, a = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ g(
    oR.div,
    {
      "data-orientation": s,
      ...a,
      ...o,
      ref: t
    }
  );
});
Uh.displayName = sR;
function aR(e) {
  return iR.includes(e);
}
var Kh = Uh;
const Yh = f.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ g(
  Kh,
  {
    ref: o,
    decorative: n,
    orientation: t,
    className: J(
      "shrink-0 bg-border",
      t === "horizontal" ? "h-px w-full" : "h-full w-px",
      e
    ),
    ...r
  }
));
Yh.displayName = Kh.displayName;
function lR(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var mt = (e) => {
  const { present: t, children: n } = e, r = cR(t), o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n), s = we(r.ref, uR(o));
  return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: s }) : null;
};
mt.displayName = "Presence";
function cR(e) {
  const [t, n] = f.useState(), r = f.useRef(null), o = f.useRef(e), s = f.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = lR(i, {
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
    const c = ls(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), ut(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const p = s.current, h = ls(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ut(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const m = ls(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, p = (h) => {
        h.target === t && (s.current = ls(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: f.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function ls(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function uR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function dR(e) {
  const t = /* @__PURE__ */ fR(e), n = f.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = f.Children.toArray(s), l = a.find(hR);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function fR(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (f.isValidElement(o)) {
      const i = gR(o), a = mR(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var pR = Symbol("radix.slottable");
function hR(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pR;
}
function mR(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function gR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Si = "Dialog", [Xh] = nn(Si), [vR, rn] = Xh(Si), qh = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = f.useRef(null), l = f.useRef(null), [c, u] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Si
  });
  return /* @__PURE__ */ g(
    vR,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: et(),
      titleId: et(),
      descriptionId: et(),
      open: c,
      onOpenChange: u,
      onOpenToggle: f.useCallback(() => u((d) => !d), [u]),
      modal: i,
      children: n
    }
  );
};
qh.displayName = Si;
var Zh = "DialogTrigger", Jh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = rn(Zh, n), s = we(t, o.triggerRef);
    return /* @__PURE__ */ g(
      me.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ec(o.open),
        ...r,
        ref: s,
        onClick: Q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Jh.displayName = Zh;
var Jl = "DialogPortal", [yR, Qh] = Xh(Jl, {
  forceMount: void 0
}), em = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = rn(Jl, t);
  return /* @__PURE__ */ g(yR, { scope: t, forceMount: n, children: f.Children.map(r, (i) => /* @__PURE__ */ g(mt, { present: n || s.open, children: /* @__PURE__ */ g(Ur, { asChild: !0, container: o, children: i }) })) });
};
em.displayName = Jl;
var $s = "DialogOverlay", tm = f.forwardRef(
  (e, t) => {
    const n = Qh($s, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = rn($s, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ g(mt, { present: r || s.open, children: /* @__PURE__ */ g(wR, { ...o, ref: t }) }) : null;
  }
);
tm.displayName = $s;
var bR = /* @__PURE__ */ dR("DialogOverlay.RemoveScroll"), wR = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = rn($s, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ g(Fo, { as: bR, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ g(
        me.div,
        {
          "data-state": ec(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), vr = "DialogContent", nm = f.forwardRef(
  (e, t) => {
    const n = Qh(vr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = rn(vr, e.__scopeDialog);
    return /* @__PURE__ */ g(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ g(xR, { ...o, ref: t }) : /* @__PURE__ */ g(SR, { ...o, ref: t }) });
  }
);
nm.displayName = vr;
var xR = f.forwardRef(
  (e, t) => {
    const n = rn(vr, e.__scopeDialog), r = f.useRef(null), o = we(t, n.contentRef, r);
    return f.useEffect(() => {
      const s = r.current;
      if (s) return gi(s);
    }, []), /* @__PURE__ */ g(
      rm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Q(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Q(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: Q(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), SR = f.forwardRef(
  (e, t) => {
    const n = rn(vr, e.__scopeDialog), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ g(
      rm,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), rm = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = rn(vr, n), l = f.useRef(null), c = we(t, l);
    return ci(), /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ g(
        Io,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ g(
            jr,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": ec(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ W(Zt, { children: [
        /* @__PURE__ */ g(CR, { titleId: a.titleId }),
        /* @__PURE__ */ g(ER, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Ql = "DialogTitle", om = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = rn(Ql, n);
    return /* @__PURE__ */ g(me.h2, { id: o.titleId, ...r, ref: t });
  }
);
om.displayName = Ql;
var sm = "DialogDescription", im = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = rn(sm, n);
    return /* @__PURE__ */ g(me.p, { id: o.descriptionId, ...r, ref: t });
  }
);
im.displayName = sm;
var am = "DialogClose", lm = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = rn(am, n);
    return /* @__PURE__ */ g(
      me.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
lm.displayName = am;
function ec(e) {
  return e ? "open" : "closed";
}
var cm = "DialogTitleWarning", [CO, um] = nx(cm, {
  contentName: vr,
  titleName: Ql,
  docsSlug: "dialog"
}), CR = ({ titleId: e }) => {
  const t = um(cm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, RR = "DialogDescriptionWarning", ER = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${um(RR).contentName}}.`;
  return f.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, dm = qh, TR = Jh, fm = em, tc = tm, nc = nm, pm = om, hm = im, mm = lm, ea = "rovingFocusGroup.onEntryFocus", PR = { bubbles: !1, cancelable: !0 }, Vo = "RovingFocusGroup", [Ua, gm, MR] = Bl(Vo), [AR, vm] = nn(
  Vo,
  [MR]
), [DR, NR] = AR(Vo), ym = f.forwardRef(
  (e, t) => /* @__PURE__ */ g(Ua.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g(Ua.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g(kR, { ...e, ref: t }) }) })
);
ym.displayName = Vo;
var kR = f.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = f.useRef(null), h = we(t, p), v = li(s), [m, y] = Rn({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Vo
  }), [b, x] = f.useState(!1), w = ot(c), S = gm(n), R = f.useRef(!1), [P, E] = f.useState(0);
  return f.useEffect(() => {
    const T = p.current;
    if (T)
      return T.addEventListener(ea, w), () => T.removeEventListener(ea, w);
  }, [w]), /* @__PURE__ */ g(
    DR,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: m,
      onItemFocus: f.useCallback(
        (T) => y(T),
        [y]
      ),
      onItemShiftTab: f.useCallback(() => x(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => E((T) => T + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => E((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ g(
        me.div,
        {
          tabIndex: b || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: Q(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: Q(e.onFocus, (T) => {
            const _ = !R.current;
            if (T.target === T.currentTarget && _ && !b) {
              const N = new CustomEvent(ea, PR);
              if (T.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const O = S().filter((B) => B.focusable), K = O.find((B) => B.active), Z = O.find((B) => B.id === m), U = [K, Z, ...O].filter(
                  Boolean
                ).map((B) => B.ref.current);
                xm(U, u);
              }
            }
            R.current = !1;
          }),
          onBlur: Q(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), bm = "RovingFocusGroupItem", wm = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = et(), c = s || l, u = NR(bm, n), d = u.currentTabStopId === c, p = gm(n), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: m } = u;
    return f.useEffect(() => {
      if (r)
        return h(), () => v();
    }, [r, h, v]), /* @__PURE__ */ g(
      Ua.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ g(
          me.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: Q(e.onMouseDown, (y) => {
              r ? u.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: Q(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: Q(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const b = OR(y, u.orientation, u.dir);
              if (b !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let w = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (b === "last") w.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && w.reverse();
                  const S = w.indexOf(y.currentTarget);
                  w = u.loop ? LR(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => xm(w));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: m != null }) : i
          }
        )
      }
    );
  }
);
wm.displayName = bm;
var IR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _R(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function OR(e, t, n) {
  const r = _R(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return IR[r];
}
function xm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function LR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var FR = ym, VR = wm;
// @__NO_SIDE_EFFECTS__
function $R(e) {
  const t = /* @__PURE__ */ BR(e), n = f.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = f.Children.toArray(s), l = a.find(HR);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function BR(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (f.isValidElement(o)) {
      const i = GR(o), a = jR(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zR = Symbol("radix.slottable");
function HR(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zR;
}
function jR(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function GR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ka = ["Enter", " "], WR = ["ArrowDown", "PageUp", "Home"], Sm = ["ArrowUp", "PageDown", "End"], UR = [...WR, ...Sm], KR = {
  ltr: [...Ka, "ArrowRight"],
  rtl: [...Ka, "ArrowLeft"]
}, YR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, $o = "Menu", [Co, XR, qR] = Bl($o), [wr, Cm] = nn($o, [
  qR,
  qn,
  vm
]), Bo = qn(), Rm = vm(), [Em, Qn] = wr($o), [ZR, zo] = wr($o), Tm = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, a = Bo(t), [l, c] = f.useState(null), u = f.useRef(!1), d = ot(s), p = li(o);
  return f.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ g(Oo, { ...a, children: /* @__PURE__ */ g(
    Em,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ g(
        ZR,
        {
          scope: t,
          onClose: f.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Tm.displayName = $o;
var JR = "MenuAnchor", rc = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Bo(n);
    return /* @__PURE__ */ g(Lo, { ...o, ...r, ref: t });
  }
);
rc.displayName = JR;
var oc = "MenuPortal", [QR, Pm] = wr(oc, {
  forceMount: void 0
}), Mm = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Qn(oc, t);
  return /* @__PURE__ */ g(QR, { scope: t, forceMount: n, children: /* @__PURE__ */ g(mt, { present: n || s.open, children: /* @__PURE__ */ g(Ur, { asChild: !0, container: o, children: r }) }) });
};
Mm.displayName = oc;
var zt = "MenuContent", [eE, sc] = wr(zt), Am = f.forwardRef(
  (e, t) => {
    const n = Pm(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Qn(zt, e.__scopeMenu), i = zo(zt, e.__scopeMenu);
    return /* @__PURE__ */ g(Co.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g(mt, { present: r || s.open, children: /* @__PURE__ */ g(Co.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ g(tE, { ...o, ref: t }) : /* @__PURE__ */ g(nE, { ...o, ref: t }) }) }) });
  }
), tE = f.forwardRef(
  (e, t) => {
    const n = Qn(zt, e.__scopeMenu), r = f.useRef(null), o = we(t, r);
    return f.useEffect(() => {
      const s = r.current;
      if (s) return gi(s);
    }, []), /* @__PURE__ */ g(
      ic,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Q(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), nE = f.forwardRef((e, t) => {
  const n = Qn(zt, e.__scopeMenu);
  return /* @__PURE__ */ g(
    ic,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), rE = /* @__PURE__ */ $R("MenuContent.ScrollLock"), ic = f.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: v,
      ...m
    } = e, y = Qn(zt, n), b = zo(zt, n), x = Bo(n), w = Rm(n), S = XR(n), [R, P] = f.useState(null), E = f.useRef(null), T = we(t, E, y.onContentChange), _ = f.useRef(0), N = f.useRef(""), O = f.useRef(0), K = f.useRef(null), Z = f.useRef("right"), X = f.useRef(0), U = v ? Fo : f.Fragment, B = v ? { as: rE, allowPinchZoom: !0 } : void 0, q = (L) => {
      var z, $;
      const I = N.current + L, ee = S().filter((F) => !F.disabled), C = document.activeElement, M = (z = ee.find((F) => F.ref.current === C)) == null ? void 0 : z.textValue, A = ee.map((F) => F.textValue), D = mE(A, I, M), V = ($ = ee.find((F) => F.textValue === D)) == null ? void 0 : $.ref.current;
      (function F(Y) {
        N.current = Y, window.clearTimeout(_.current), Y !== "" && (_.current = window.setTimeout(() => F(""), 1e3));
      })(I), V && setTimeout(() => V.focus());
    };
    f.useEffect(() => () => window.clearTimeout(_.current), []), ci();
    const G = f.useCallback((L) => {
      var ee, C;
      return Z.current === ((ee = K.current) == null ? void 0 : ee.side) && vE(L, (C = K.current) == null ? void 0 : C.area);
    }, []);
    return /* @__PURE__ */ g(
      eE,
      {
        scope: n,
        searchRef: N,
        onItemEnter: f.useCallback(
          (L) => {
            G(L) && L.preventDefault();
          },
          [G]
        ),
        onItemLeave: f.useCallback(
          (L) => {
            var I;
            G(L) || ((I = E.current) == null || I.focus(), P(null));
          },
          [G]
        ),
        onTriggerLeave: f.useCallback(
          (L) => {
            G(L) && L.preventDefault();
          },
          [G]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: f.useCallback((L) => {
          K.current = L;
        }, []),
        children: /* @__PURE__ */ g(U, { ...B, children: /* @__PURE__ */ g(
          Io,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Q(s, (L) => {
              var I;
              L.preventDefault(), (I = E.current) == null || I.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ g(
              jr,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ g(
                  FR,
                  {
                    asChild: !0,
                    ...w,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: Q(l, (L) => {
                      b.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ g(
                      hi,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Um(y.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...x,
                        ...m,
                        ref: T,
                        style: { outline: "none", ...m.style },
                        onKeyDown: Q(m.onKeyDown, (L) => {
                          const ee = L.target.closest("[data-radix-menu-content]") === L.currentTarget, C = L.ctrlKey || L.altKey || L.metaKey, M = L.key.length === 1;
                          ee && (L.key === "Tab" && L.preventDefault(), !C && M && q(L.key));
                          const A = E.current;
                          if (L.target !== A || !UR.includes(L.key)) return;
                          L.preventDefault();
                          const V = S().filter((z) => !z.disabled).map((z) => z.ref.current);
                          Sm.includes(L.key) && V.reverse(), pE(V);
                        }),
                        onBlur: Q(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(_.current), N.current = "");
                        }),
                        onPointerMove: Q(
                          e.onPointerMove,
                          Ro((L) => {
                            const I = L.target, ee = X.current !== L.clientX;
                            if (L.currentTarget.contains(I) && ee) {
                              const C = L.clientX > X.current ? "right" : "left";
                              Z.current = C, X.current = L.clientX;
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
Am.displayName = zt;
var oE = "MenuGroup", ac = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g(me.div, { role: "group", ...r, ref: t });
  }
);
ac.displayName = oE;
var sE = "MenuLabel", Dm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g(me.div, { ...r, ref: t });
  }
);
Dm.displayName = sE;
var Bs = "MenuItem", Xu = "menu.itemSelect", Ci = f.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = f.useRef(null), i = zo(Bs, e.__scopeMenu), a = sc(Bs, e.__scopeMenu), l = we(t, s), c = f.useRef(!1), u = () => {
      const d = s.current;
      if (!n && d) {
        const p = new CustomEvent(Xu, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Xu, (h) => r == null ? void 0 : r(h), { once: !0 }), vp(d, p), p.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ g(
      Nm,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: Q(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), c.current = !0;
        },
        onPointerUp: Q(e.onPointerUp, (d) => {
          var p;
          c.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: Q(e.onKeyDown, (d) => {
          const p = a.searchRef.current !== "";
          n || p && d.key === " " || Ka.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Ci.displayName = Bs;
var Nm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = sc(Bs, n), a = Rm(n), l = f.useRef(null), c = we(t, l), [u, d] = f.useState(!1), [p, h] = f.useState("");
    return f.useEffect(() => {
      const v = l.current;
      v && h((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ g(
      Co.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ g(VR, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ g(
          me.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: c,
            onPointerMove: Q(
              e.onPointerMove,
              Ro((v) => {
                r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Q(
              e.onPointerLeave,
              Ro((v) => i.onItemLeave(v))
            ),
            onFocus: Q(e.onFocus, () => d(!0)),
            onBlur: Q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), iE = "MenuCheckboxItem", km = f.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ g(Fm, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ g(
      Ci,
      {
        role: "menuitemcheckbox",
        "aria-checked": zs(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": uc(n),
        onSelect: Q(
          o.onSelect,
          () => r == null ? void 0 : r(zs(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
km.displayName = iE;
var Im = "MenuRadioGroup", [aE, lE] = wr(
  Im,
  { value: void 0, onValueChange: () => {
  } }
), _m = f.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = ot(r);
    return /* @__PURE__ */ g(aE, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ g(ac, { ...o, ref: t }) });
  }
);
_m.displayName = Im;
var Om = "MenuRadioItem", Lm = f.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = lE(Om, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ g(Fm, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ g(
      Ci,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": uc(s),
        onSelect: Q(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Lm.displayName = Om;
var lc = "MenuItemIndicator", [Fm, cE] = wr(
  lc,
  { checked: !1 }
), Vm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = cE(lc, n);
    return /* @__PURE__ */ g(
      mt,
      {
        present: r || zs(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ g(
          me.span,
          {
            ...o,
            ref: t,
            "data-state": uc(s.checked)
          }
        )
      }
    );
  }
);
Vm.displayName = lc;
var uE = "MenuSeparator", $m = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g(
      me.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
$m.displayName = uE;
var dE = "MenuArrow", Bm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Bo(n);
    return /* @__PURE__ */ g(mi, { ...o, ...r, ref: t });
  }
);
Bm.displayName = dE;
var cc = "MenuSub", [fE, zm] = wr(cc), Hm = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = Qn(cc, t), i = Bo(t), [a, l] = f.useState(null), [c, u] = f.useState(null), d = ot(o);
  return f.useEffect(() => (s.open === !1 && d(!1), () => d(!1)), [s.open, d]), /* @__PURE__ */ g(Oo, { ...i, children: /* @__PURE__ */ g(
    Em,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ g(
        fE,
        {
          scope: t,
          contentId: et(),
          triggerId: et(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Hm.displayName = cc;
var uo = "MenuSubTrigger", jm = f.forwardRef(
  (e, t) => {
    const n = Qn(uo, e.__scopeMenu), r = zo(uo, e.__scopeMenu), o = zm(uo, e.__scopeMenu), s = sc(uo, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = s, c = { __scopeMenu: e.__scopeMenu }, u = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => u, [u]), f.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), /* @__PURE__ */ g(rc, { asChild: !0, ...c, children: /* @__PURE__ */ g(
      Nm,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Um(n.open),
        ...e,
        ref: Ct(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Q(
          e.onPointerMove,
          Ro((d) => {
            s.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: Q(
          e.onPointerLeave,
          Ro((d) => {
            var h, v;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const m = (v = n.content) == null ? void 0 : v.dataset.side, y = m === "right", b = y ? -5 : 5, x = p[y ? "left" : "right"], w = p[y ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + b, y: d.clientY },
                  { x, y: p.top },
                  { x: w, y: p.top },
                  { x: w, y: p.bottom },
                  { x, y: p.bottom }
                ],
                side: m
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(d), d.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Q(e.onKeyDown, (d) => {
          var h;
          const p = s.searchRef.current !== "";
          e.disabled || p && d.key === " " || KR[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
jm.displayName = uo;
var Gm = "MenuSubContent", Wm = f.forwardRef(
  (e, t) => {
    const n = Pm(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Qn(zt, e.__scopeMenu), i = zo(zt, e.__scopeMenu), a = zm(Gm, e.__scopeMenu), l = f.useRef(null), c = we(t, l);
    return /* @__PURE__ */ g(Co.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g(mt, { present: r || s.open, children: /* @__PURE__ */ g(Co.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ g(
      ic,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          i.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: Q(e.onFocusOutside, (u) => {
          u.target !== a.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: Q(e.onEscapeKeyDown, (u) => {
          i.onClose(), u.preventDefault();
        }),
        onKeyDown: Q(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = YR[i.dir].includes(u.key);
          d && p && (s.onOpenChange(!1), (h = a.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Wm.displayName = Gm;
function Um(e) {
  return e ? "open" : "closed";
}
function zs(e) {
  return e === "indeterminate";
}
function uc(e) {
  return zs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function pE(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function mE(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = hE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function gE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, u = a.y, d = l.x, p = l.y;
    u > r != p > r && n < (d - c) * (r - u) / (p - u) + c && (o = !o);
  }
  return o;
}
function vE(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gE(n, t);
}
function Ro(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var yE = Tm, bE = rc, wE = Mm, xE = Am, SE = ac, CE = Dm, RE = Ci, EE = km, TE = _m, PE = Lm, ME = Vm, AE = $m, DE = Bm, NE = Hm, kE = jm, IE = Wm, Ri = "DropdownMenu", [_E] = nn(
  Ri,
  [Cm]
), gt = Cm(), [OE, Km] = _E(Ri), Ym = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = gt(t), c = f.useRef(null), [u, d] = Rn({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Ri
  });
  return /* @__PURE__ */ g(
    OE,
    {
      scope: t,
      triggerId: et(),
      triggerRef: c,
      contentId: et(),
      open: u,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
      modal: a,
      children: /* @__PURE__ */ g(yE, { ...l, open: u, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
};
Ym.displayName = Ri;
var Xm = "DropdownMenuTrigger", qm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Km(Xm, n), i = gt(n);
    return /* @__PURE__ */ g(bE, { asChild: !0, ...i, children: /* @__PURE__ */ g(
      me.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Ct(t, s.triggerRef),
        onPointerDown: Q(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (s.onOpenToggle(), s.open || a.preventDefault());
        }),
        onKeyDown: Q(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && s.onOpenToggle(), a.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
qm.displayName = Xm;
var LE = "DropdownMenuPortal", Zm = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = gt(t);
  return /* @__PURE__ */ g(wE, { ...r, ...n });
};
Zm.displayName = LE;
var Jm = "DropdownMenuContent", Qm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Km(Jm, n), s = gt(n), i = f.useRef(!1);
    return /* @__PURE__ */ g(
      xE,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: Q(e.onCloseAutoFocus, (a) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: Q(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, u = l.button === 2 || c;
          (!o.modal || u) && (i.current = !0);
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
Qm.displayName = Jm;
var FE = "DropdownMenuGroup", eg = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ g(SE, { ...o, ...r, ref: t });
  }
);
eg.displayName = FE;
var VE = "DropdownMenuLabel", tg = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ g(CE, { ...o, ...r, ref: t });
  }
);
tg.displayName = VE;
var $E = "DropdownMenuItem", ng = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ g(RE, { ...o, ...r, ref: t });
  }
);
ng.displayName = $E;
var BE = "DropdownMenuCheckboxItem", rg = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(EE, { ...o, ...r, ref: t });
});
rg.displayName = BE;
var zE = "DropdownMenuRadioGroup", og = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(TE, { ...o, ...r, ref: t });
});
og.displayName = zE;
var HE = "DropdownMenuRadioItem", sg = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(PE, { ...o, ...r, ref: t });
});
sg.displayName = HE;
var jE = "DropdownMenuItemIndicator", ig = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(ME, { ...o, ...r, ref: t });
});
ig.displayName = jE;
var GE = "DropdownMenuSeparator", ag = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(AE, { ...o, ...r, ref: t });
});
ag.displayName = GE;
var WE = "DropdownMenuArrow", UE = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ g(DE, { ...o, ...r, ref: t });
  }
);
UE.displayName = WE;
var KE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, i = gt(t), [a, l] = Rn({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ g(NE, { ...i, open: a, onOpenChange: l, children: n });
}, YE = "DropdownMenuSubTrigger", lg = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(kE, { ...o, ...r, ref: t });
});
lg.displayName = YE;
var XE = "DropdownMenuSubContent", cg = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ g(
    IE,
    {
      ...o,
      ...r,
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
cg.displayName = XE;
var qE = Ym, ZE = qm, ug = Zm, dg = Qm, JE = eg, fg = tg, pg = ng, hg = rg, QE = og, mg = sg, gg = ig, vg = ag, eT = KE, yg = lg, bg = cg;
// @__NO_SIDE_EFFECTS__
function tT(e) {
  const t = /* @__PURE__ */ nT(e), n = f.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = f.Children.toArray(s), l = a.find(oT);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ g(t, { ...i, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ g(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function nT(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (f.isValidElement(o)) {
      const i = iT(o), a = sT(s, o.props);
      return o.type !== f.Fragment && (a.ref = r ? Ct(r, i) : i), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rT = Symbol("radix.slottable");
function oT(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rT;
}
function sT(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function iT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ei = "Popover", [wg] = nn(Ei, [
  qn
]), Ho = qn(), [aT, er] = wg(Ei), xg = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !1
  } = e, a = Ho(t), l = f.useRef(null), [c, u] = f.useState(!1), [d, p] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ei
  });
  return /* @__PURE__ */ g(Oo, { ...a, children: /* @__PURE__ */ g(
    aT,
    {
      scope: t,
      contentId: et(),
      triggerRef: l,
      open: d,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: f.useCallback(() => u(!0), []),
      onCustomAnchorRemove: f.useCallback(() => u(!1), []),
      modal: i,
      children: n
    }
  ) });
};
xg.displayName = Ei;
var Sg = "PopoverAnchor", Cg = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = er(Sg, n), s = Ho(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: a } = o;
    return f.useEffect(() => (i(), () => a()), [i, a]), /* @__PURE__ */ g(Lo, { ...s, ...r, ref: t });
  }
);
Cg.displayName = Sg;
var Rg = "PopoverTrigger", Eg = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = er(Rg, n), s = Ho(n), i = we(t, o.triggerRef), a = /* @__PURE__ */ g(
      me.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Dg(o.open),
        ...r,
        ref: i,
        onClick: Q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ g(Lo, { asChild: !0, ...s, children: a });
  }
);
Eg.displayName = Rg;
var dc = "PopoverPortal", [lT, cT] = wg(dc, {
  forceMount: void 0
}), Tg = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = er(dc, t);
  return /* @__PURE__ */ g(lT, { scope: t, forceMount: n, children: /* @__PURE__ */ g(mt, { present: n || s.open, children: /* @__PURE__ */ g(Ur, { asChild: !0, container: o, children: r }) }) });
};
Tg.displayName = dc;
var Fr = "PopoverContent", Pg = f.forwardRef(
  (e, t) => {
    const n = cT(Fr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = er(Fr, e.__scopePopover);
    return /* @__PURE__ */ g(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ g(dT, { ...o, ref: t }) : /* @__PURE__ */ g(fT, { ...o, ref: t }) });
  }
);
Pg.displayName = Fr;
var uT = /* @__PURE__ */ tT("PopoverContent.RemoveScroll"), dT = f.forwardRef(
  (e, t) => {
    const n = er(Fr, e.__scopePopover), r = f.useRef(null), o = we(t, r), s = f.useRef(!1);
    return f.useEffect(() => {
      const i = r.current;
      if (i) return gi(i);
    }, []), /* @__PURE__ */ g(Fo, { as: uT, allowPinchZoom: !0, children: /* @__PURE__ */ g(
      Mg,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Q(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), s.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Q(
          e.onPointerDownOutside,
          (i) => {
            const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            s.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), fT = f.forwardRef(
  (e, t) => {
    const n = er(Fr, e.__scopePopover), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ g(
      Mg,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Mg = f.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: u,
      ...d
    } = e, p = er(Fr, n), h = Ho(n);
    return ci(), /* @__PURE__ */ g(
      Io,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ g(
          jr,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ g(
              hi,
              {
                "data-state": Dg(p.open),
                role: "dialog",
                id: p.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
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
), Ag = "PopoverClose", pT = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = er(Ag, n);
    return /* @__PURE__ */ g(
      me.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
pT.displayName = Ag;
var hT = "PopoverArrow", mT = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ho(n);
    return /* @__PURE__ */ g(mi, { ...o, ...r, ref: t });
  }
);
mT.displayName = hT;
function Dg(e) {
  return e ? "open" : "closed";
}
var gT = xg, vT = Cg, yT = Eg, bT = Tg, Ng = Pg;
function wT(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var fc = "ScrollArea", [kg] = nn(fc), [xT, jt] = kg(fc), Ig = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...i
    } = e, [a, l] = f.useState(null), [c, u] = f.useState(null), [d, p] = f.useState(null), [h, v] = f.useState(null), [m, y] = f.useState(null), [b, x] = f.useState(0), [w, S] = f.useState(0), [R, P] = f.useState(!1), [E, T] = f.useState(!1), _ = we(t, (O) => l(O)), N = li(o);
    return /* @__PURE__ */ g(
      xT,
      {
        scope: n,
        type: r,
        dir: N,
        scrollHideDelay: s,
        scrollArea: a,
        viewport: c,
        onViewportChange: u,
        content: d,
        onContentChange: p,
        scrollbarX: h,
        onScrollbarXChange: v,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: P,
        scrollbarY: m,
        onScrollbarYChange: y,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: x,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ g(
          me.div,
          {
            dir: N,
            ...i,
            ref: _,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": b + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Ig.displayName = fc;
var _g = "ScrollAreaViewport", Og = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, i = jt(_g, n), a = f.useRef(null), l = we(t, a, i.onViewportChange);
    return /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ g(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ g(
        me.div,
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
          children: /* @__PURE__ */ g("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Og.displayName = _g;
var yn = "ScrollAreaScrollbar", pc = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = jt(yn, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o, a = e.orientation === "horizontal";
    return f.useEffect(() => (a ? s(!0) : i(!0), () => {
      a ? s(!1) : i(!1);
    }), [a, s, i]), o.type === "hover" ? /* @__PURE__ */ g(ST, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ g(CT, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ g(Lg, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ g(hc, { ...r, ref: t }) : null;
  }
);
pc.displayName = yn;
var ST = f.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = jt(yn, e.__scopeScrollArea), [s, i] = f.useState(!1);
  return f.useEffect(() => {
    const a = o.scrollArea;
    let l = 0;
    if (a) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, u = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", u), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ g(mt, { present: n || s, children: /* @__PURE__ */ g(
    Lg,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), CT = f.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = jt(yn, e.__scopeScrollArea), s = e.orientation === "horizontal", i = Pi(() => l("SCROLL_END"), 100), [a, l] = wT("hidden", {
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
      const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [a, o.scrollHideDelay, l]), f.useEffect(() => {
    const c = o.viewport, u = s ? "scrollLeft" : "scrollTop";
    if (c) {
      let d = c[u];
      const p = () => {
        const h = c[u];
        d !== h && (l("SCROLL"), i()), d = h;
      };
      return c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
    }
  }, [o.viewport, s, l, i]), /* @__PURE__ */ g(mt, { present: n || a !== "hidden", children: /* @__PURE__ */ g(
    hc,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: Q(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: Q(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Lg = f.forwardRef((e, t) => {
  const n = jt(yn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, i] = f.useState(!1), a = e.orientation === "horizontal", l = Pi(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(a ? c : u);
    }
  }, 10);
  return Vr(n.viewport, l), Vr(n.content, l), /* @__PURE__ */ g(mt, { present: r || s, children: /* @__PURE__ */ g(
    hc,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), hc = f.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = jt(yn, e.__scopeScrollArea), s = f.useRef(null), i = f.useRef(0), [a, l] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = zg(a.viewport, a.content), u = {
    ...r,
    sizes: a,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function d(p, h) {
    return AT(p, i.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ g(
    RT,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, h = qu(p, a, o.dir);
          s.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ g(
    ET,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, h = qu(p, a);
          s.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = d(p));
      }
    }
  ) : null;
}), RT = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = jt(yn, e.__scopeScrollArea), [i, a] = f.useState(), l = f.useRef(null), c = we(t, l, s.onScrollbarXChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ g(
    Vg,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ti(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
      onDragScroll: (u) => e.onDragScroll(u.x),
      onWheelScroll: (u, d) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(p), jg(p, d) && u.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: js(i.paddingLeft),
            paddingEnd: js(i.paddingRight)
          }
        });
      }
    }
  );
}), ET = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = jt(yn, e.__scopeScrollArea), [i, a] = f.useState(), l = f.useRef(null), c = we(t, l, s.onScrollbarYChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ g(
    Vg,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ti(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
      onDragScroll: (u) => e.onDragScroll(u.y),
      onWheelScroll: (u, d) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(p), jg(p, d) && u.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: js(i.paddingTop),
            paddingEnd: js(i.paddingBottom)
          }
        });
      }
    }
  );
}), [TT, Fg] = kg(yn), Vg = f.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: u,
    onResize: d,
    ...p
  } = e, h = jt(yn, n), [v, m] = f.useState(null), y = we(t, (_) => m(_)), b = f.useRef(null), x = f.useRef(""), w = h.viewport, S = r.content - r.viewport, R = ot(u), P = ot(l), E = Pi(d, 10);
  function T(_) {
    if (b.current) {
      const N = _.clientX - b.current.left, O = _.clientY - b.current.top;
      c({ x: N, y: O });
    }
  }
  return f.useEffect(() => {
    const _ = (N) => {
      const O = N.target;
      (v == null ? void 0 : v.contains(O)) && R(N, S);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [w, v, S, R]), f.useEffect(P, [r, P]), Vr(v, E), Vr(h.content, E), /* @__PURE__ */ g(
    TT,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: ot(s),
      onThumbPointerUp: ot(i),
      onThumbPositionChange: P,
      onThumbPointerDown: ot(a),
      children: /* @__PURE__ */ g(
        me.div,
        {
          ...p,
          ref: y,
          style: { position: "absolute", ...p.style },
          onPointerDown: Q(e.onPointerDown, (_) => {
            _.button === 0 && (_.target.setPointerCapture(_.pointerId), b.current = v.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), T(_));
          }),
          onPointerMove: Q(e.onPointerMove, T),
          onPointerUp: Q(e.onPointerUp, (_) => {
            const N = _.target;
            N.hasPointerCapture(_.pointerId) && N.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = x.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), Hs = "ScrollAreaThumb", $g = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Fg(Hs, e.__scopeScrollArea);
    return /* @__PURE__ */ g(mt, { present: n || o.hasThumb, children: /* @__PURE__ */ g(PT, { ref: t, ...r }) });
  }
), PT = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = jt(Hs, n), i = Fg(Hs, n), { onThumbPositionChange: a } = i, l = we(
      t,
      (d) => i.onThumbChange(d)
    ), c = f.useRef(void 0), u = Pi(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const d = s.viewport;
      if (d) {
        const p = () => {
          if (u(), !c.current) {
            const h = DT(d, a);
            c.current = h, a();
          }
        };
        return a(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
      }
    }, [s.viewport, u, a]), /* @__PURE__ */ g(
      me.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: Q(e.onPointerDownCapture, (d) => {
          const h = d.target.getBoundingClientRect(), v = d.clientX - h.left, m = d.clientY - h.top;
          i.onThumbPointerDown({ x: v, y: m });
        }),
        onPointerUp: Q(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
$g.displayName = Hs;
var mc = "ScrollAreaCorner", Bg = f.forwardRef(
  (e, t) => {
    const n = jt(mc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ g(MT, { ...e, ref: t }) : null;
  }
);
Bg.displayName = mc;
var MT = f.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = jt(mc, n), [s, i] = f.useState(0), [a, l] = f.useState(0), c = !!(s && a);
  return Vr(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), l(u);
  }), Vr(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), i(u);
  }), c ? /* @__PURE__ */ g(
    me.div,
    {
      ...r,
      ref: t,
      style: {
        width: s,
        height: a,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function js(e) {
  return e ? parseInt(e, 10) : 0;
}
function zg(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ti(e) {
  const t = zg(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function AT(e, t, n, r = "ltr") {
  const o = Ti(n), s = o / 2, i = t || s, a = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return Hg([l, c], d)(e);
}
function qu(e, t, n = "ltr") {
  const r = Ti(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, i = t.content - t.viewport, a = s - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Oa(e, l);
  return Hg([0, i], [0, a])(c);
}
function Hg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function jg(e, t) {
  return e > 0 && e < t;
}
var DT = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, a = n.top !== s.top;
    (i || a) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function Pi(e, t) {
  const n = ot(e), r = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), f.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Vr(e, t) {
  const n = ot(t);
  ut(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Gg = Ig, NT = Og, kT = Bg, IT = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function _T(e) {
  const t = ({ children: n }) => /* @__PURE__ */ g(Zt, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = IT, t;
}
var [Mi] = nn("Tooltip", [
  qn
]), Ai = qn(), Wg = "TooltipProvider", OT = 700, Ya = "tooltip.open", [LT, gc] = Mi(Wg), Ug = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = OT,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = f.useRef(!0), a = f.useRef(!1), l = f.useRef(0);
  return f.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ g(
    LT,
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
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: f.useCallback((c) => {
        a.current = c;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
Ug.displayName = Wg;
var Eo = "Tooltip", [FT, jo] = Mi(Eo), Kg = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = gc(Eo, e.__scopeTooltip), c = Ai(t), [u, d] = f.useState(null), p = et(), h = f.useRef(0), v = i ?? l.disableHoverableContent, m = a ?? l.delayDuration, y = f.useRef(!1), [b, x] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ya))) : l.onClose(), s == null || s(E);
    },
    caller: Eo
  }), w = f.useMemo(() => b ? y.current ? "delayed-open" : "instant-open" : "closed", [b]), S = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y.current = !1, x(!0);
  }, [x]), R = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, x(!1);
  }, [x]), P = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      y.current = !0, x(!0), h.current = 0;
    }, m);
  }, [m, x]);
  return f.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ g(Oo, { ...c, children: /* @__PURE__ */ g(
    FT,
    {
      scope: t,
      contentId: p,
      open: b,
      stateAttribute: w,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: f.useCallback(() => {
        l.isOpenDelayedRef.current ? P() : S();
      }, [l.isOpenDelayedRef, P, S]),
      onTriggerLeave: f.useCallback(() => {
        v ? R() : (window.clearTimeout(h.current), h.current = 0);
      }, [R, v]),
      onOpen: S,
      onClose: R,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
Kg.displayName = Eo;
var Xa = "TooltipTrigger", Yg = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = jo(Xa, n), s = gc(Xa, n), i = Ai(n), a = f.useRef(null), l = we(t, a, o.onTriggerChange), c = f.useRef(!1), u = f.useRef(!1), d = f.useCallback(() => c.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ g(Lo, { asChild: !0, ...i, children: /* @__PURE__ */ g(
      me.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: Q(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: Q(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: Q(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: Q(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: Q(e.onBlur, o.onClose),
        onClick: Q(e.onClick, o.onClose)
      }
    ) });
  }
);
Yg.displayName = Xa;
var vc = "TooltipPortal", [VT, $T] = Mi(vc, {
  forceMount: void 0
}), Xg = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = jo(vc, t);
  return /* @__PURE__ */ g(VT, { scope: t, forceMount: n, children: /* @__PURE__ */ g(mt, { present: n || s.open, children: /* @__PURE__ */ g(Ur, { asChild: !0, container: o, children: r }) }) });
};
Xg.displayName = vc;
var $r = "TooltipContent", qg = f.forwardRef(
  (e, t) => {
    const n = $T($r, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = jo($r, e.__scopeTooltip);
    return /* @__PURE__ */ g(mt, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ g(Zg, { side: o, ...s, ref: t }) : /* @__PURE__ */ g(BT, { side: o, ...s, ref: t }) });
  }
), BT = f.forwardRef((e, t) => {
  const n = jo($r, e.__scopeTooltip), r = gc($r, e.__scopeTooltip), o = f.useRef(null), s = we(t, o), [i, a] = f.useState(null), { trigger: l, onClose: c } = n, u = o.current, { onPointerInTransitChange: d } = r, p = f.useCallback(() => {
    a(null), d(!1);
  }, [d]), h = f.useCallback(
    (v, m) => {
      const y = v.currentTarget, b = { x: v.clientX, y: v.clientY }, x = GT(b, y.getBoundingClientRect()), w = WT(b, x), S = UT(m.getBoundingClientRect()), R = YT([...w, ...S]);
      a(R), d(!0);
    },
    [d]
  );
  return f.useEffect(() => () => p(), [p]), f.useEffect(() => {
    if (l && u) {
      const v = (y) => h(y, u), m = (y) => h(y, l);
      return l.addEventListener("pointerleave", v), u.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", m);
      };
    }
  }, [l, u, h, p]), f.useEffect(() => {
    if (i) {
      const v = (m) => {
        const y = m.target, b = { x: m.clientX, y: m.clientY }, x = (l == null ? void 0 : l.contains(y)) || (u == null ? void 0 : u.contains(y)), w = !KT(b, i);
        x ? p() : w && (p(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, u, i, c, p]), /* @__PURE__ */ g(Zg, { ...e, ref: s });
}), [zT, HT] = Mi(Eo, { isInside: !1 }), jT = /* @__PURE__ */ _T("TooltipContent"), Zg = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = jo($r, n), c = Ai(n), { onClose: u } = l;
    return f.useEffect(() => (document.addEventListener(Ya, u), () => document.removeEventListener(Ya, u)), [u]), f.useEffect(() => {
      if (l.trigger) {
        const d = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ g(
      jr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ W(
          hi,
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
              /* @__PURE__ */ g(jT, { children: r }),
              /* @__PURE__ */ g(zT, { scope: n, isInside: !0, children: /* @__PURE__ */ g(rS, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
qg.displayName = $r;
var Jg = "TooltipArrow", Qg = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ai(n);
    return HT(
      Jg,
      n
    ).isInside ? null : /* @__PURE__ */ g(mi, { ...o, ...r, ref: t });
  }
);
Qg.displayName = Jg;
function GT(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function WT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function UT(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function KT(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, u = a.y, d = l.x, p = l.y;
    u > r != p > r && n < (d - c) * (r - u) / (p - u) + c && (o = !o);
  }
  return o;
}
function YT(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), XT(t);
}
function XT(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var qT = Ug, ZT = Kg, JT = Yg, QT = Xg, eP = qg, tP = Qg;
function Xr({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ g(
    qT,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Bn({
  ...e
}) {
  return /* @__PURE__ */ g(ZT, { "data-slot": "tooltip", ...e });
}
function zn({
  ...e
}) {
  return /* @__PURE__ */ g(JT, { "data-slot": "tooltip-trigger", ...e });
}
function Hn({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ g(QT, { children: /* @__PURE__ */ W(
    eP,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: J(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md border border-border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-sm has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ g(tP, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-popover fill-popover" })
      ]
    }
  ) });
}
const nP = dm, RO = TR, rP = fm, EO = mm, ev = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  tc,
  {
    ref: n,
    className: J(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ev.displayName = tc.displayName;
const tv = f.forwardRef(({ className: e, children: t, hideClose: n, ...r }, o) => /* @__PURE__ */ W(rP, { children: [
  /* @__PURE__ */ g(ev, {}),
  /* @__PURE__ */ W(
    nc,
    {
      ref: o,
      className: J(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg",
        e
      ),
      ...r,
      children: [
        t,
        !n && /* @__PURE__ */ W(mm, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ g(Zl, { className: "size-4" }),
          /* @__PURE__ */ g("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
tv.displayName = nc.displayName;
const nv = ({ className: e, ...t }) => /* @__PURE__ */ g(
  "div",
  {
    className: J("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
nv.displayName = "DialogHeader";
const oP = ({ className: e, ...t }) => /* @__PURE__ */ g(
  "div",
  {
    className: J(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      e
    ),
    ...t
  }
);
oP.displayName = "DialogFooter";
const rv = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  pm,
  {
    ref: n,
    className: J("text-lg leading-none font-semibold tracking-tight", e),
    ...t
  }
));
rv.displayName = pm.displayName;
const ov = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  hm,
  {
    ref: n,
    className: J("text-muted-foreground text-sm", e),
    ...t
  }
));
ov.displayName = hm.displayName;
const TO = qE, PO = ZE, MO = JE, AO = ug, DO = eT, NO = QE, sP = f.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ W(
  yg,
  {
    ref: o,
    className: J(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ g(Yr, { className: "ml-auto" })
    ]
  }
));
sP.displayName = yg.displayName;
const iP = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  bg,
  {
    ref: n,
    className: J(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      e
    ),
    ...t
  }
));
iP.displayName = bg.displayName;
const aP = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ g(ug, { children: /* @__PURE__ */ g(
  dg,
  {
    ref: r,
    sideOffset: t,
    className: J(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      e
    ),
    ...n
  }
) }));
aP.displayName = dg.displayName;
const lP = f.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(
  pg,
  {
    ref: r,
    className: J(
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...n
  }
));
lP.displayName = pg.displayName;
const cP = f.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ W(
  hg,
  {
    ref: o,
    className: J(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ g("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g(gg, { children: /* @__PURE__ */ g(Lr, { className: "size-4" }) }) }),
      t
    ]
  }
));
cP.displayName = hg.displayName;
const uP = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  mg,
  {
    ref: r,
    className: J(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ g("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g(gg, { children: /* @__PURE__ */ g(kC, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
uP.displayName = mg.displayName;
const dP = f.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(
  fg,
  {
    ref: r,
    className: J(
      "px-2 py-1.5 text-xs font-medium text-muted-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
dP.displayName = fg.displayName;
const fP = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  vg,
  {
    ref: n,
    className: J("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
fP.displayName = vg.displayName;
const pP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ g(
  "span",
  {
    className: J("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
pP.displayName = "DropdownMenuShortcut";
const hP = gT, mP = yT, kO = vT, sv = f.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ g(bT, { children: /* @__PURE__ */ g(
  Ng,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: J(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
      e
    ),
    ...r
  }
) }));
sv.displayName = Ng.displayName;
const gP = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ W(
  Gg,
  {
    ref: r,
    className: J("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ g(NT, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ g(iv, {}),
      /* @__PURE__ */ g(kT, {})
    ]
  }
));
gP.displayName = Gg.displayName;
const iv = f.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ g(
  pc,
  {
    ref: r,
    orientation: t,
    className: J(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      e
    ),
    ...n,
    children: /* @__PURE__ */ g($g, { className: "bg-border relative flex-1 rounded-full" })
  }
));
iv.displayName = pc.displayName;
var Zu = 1, vP = 0.9, yP = 0.8, bP = 0.17, ta = 0.1, na = 0.999, wP = 0.9999, xP = 0.99, SP = /[\\\/_+.#"@\[\(\{&]/, CP = /[\\\/_+.#"@\[\(\{&]/g, RP = /[\s-]/, av = /[\s-]/g;
function qa(e, t, n, r, o, s, i) {
  if (s === t.length) return o === e.length ? Zu : xP;
  var a = `${o},${s}`;
  if (i[a] !== void 0) return i[a];
  for (var l = r.charAt(s), c = n.indexOf(l, o), u = 0, d, p, h, v; c >= 0; ) d = qa(e, t, n, r, c + 1, s + 1, i), d > u && (c === o ? d *= Zu : SP.test(e.charAt(c - 1)) ? (d *= yP, h = e.slice(o, c - 1).match(CP), h && o > 0 && (d *= Math.pow(na, h.length))) : RP.test(e.charAt(c - 1)) ? (d *= vP, v = e.slice(o, c - 1).match(av), v && o > 0 && (d *= Math.pow(na, v.length))) : (d *= bP, o > 0 && (d *= Math.pow(na, c - o))), e.charAt(c) !== t.charAt(s) && (d *= wP)), (d < ta && n.charAt(c - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(c - 1) !== r.charAt(s)) && (p = qa(e, t, n, r, c + 1, s + 2, i), p * ta > d && (d = p * ta)), d > u && (u = d), c = n.indexOf(l, c + 1);
  return i[a] = u, u;
}
function Ju(e) {
  return e.toLowerCase().replace(av, " ");
}
function EP(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, qa(e, t, Ju(e), Ju(t), 0, 0, {});
}
var TP = [
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
], tr = TP.reduce((e, t) => {
  const n = /* @__PURE__ */ ai(`Primitive.${t}`), r = f.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), io = '[cmdk-group=""]', ra = '[cmdk-group-items=""]', PP = '[cmdk-group-heading=""]', lv = '[cmdk-item=""]', Qu = `${lv}:not([aria-disabled="true"])`, Za = "cmdk-item-select", Er = "data-value", MP = (e, t, n) => EP(e, t, n), cv = f.createContext(void 0), Go = () => f.useContext(cv), uv = f.createContext(void 0), yc = () => f.useContext(uv), dv = f.createContext(void 0), fv = f.forwardRef((e, t) => {
  let n = Tr(() => {
    var C, M;
    return { search: "", value: (M = (C = e.value) != null ? C : e.defaultValue) != null ? M : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Tr(() => /* @__PURE__ */ new Set()), o = Tr(() => /* @__PURE__ */ new Map()), s = Tr(() => /* @__PURE__ */ new Map()), i = Tr(() => /* @__PURE__ */ new Set()), a = pv(e), { label: l, children: c, value: u, onValueChange: d, filter: p, shouldFilter: h, loop: v, disablePointerSelection: m = !1, vimBindings: y = !0, ...b } = e, x = et(), w = et(), S = et(), R = f.useRef(null), P = $P();
  yr(() => {
    if (u !== void 0) {
      let C = u.trim();
      n.current.value = C, E.emit();
    }
  }, [u]), yr(() => {
    P(6, Z);
  }, []);
  let E = f.useMemo(() => ({ subscribe: (C) => (i.current.add(C), () => i.current.delete(C)), snapshot: () => n.current, setState: (C, M, A) => {
    var D, V, z, $;
    if (!Object.is(n.current[C], M)) {
      if (n.current[C] = M, C === "search") K(), N(), P(1, O);
      else if (C === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let F = document.getElementById(S);
          F ? F.focus() : (D = document.getElementById(x)) == null || D.focus();
        }
        if (P(7, () => {
          var F;
          n.current.selectedItemId = (F = X()) == null ? void 0 : F.id, E.emit();
        }), A || P(5, Z), ((V = a.current) == null ? void 0 : V.value) !== void 0) {
          let F = M ?? "";
          ($ = (z = a.current).onValueChange) == null || $.call(z, F);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((C) => C());
  } }), []), T = f.useMemo(() => ({ value: (C, M, A) => {
    var D;
    M !== ((D = s.current.get(C)) == null ? void 0 : D.value) && (s.current.set(C, { value: M, keywords: A }), n.current.filtered.items.set(C, _(M, A)), P(2, () => {
      N(), E.emit();
    }));
  }, item: (C, M) => (r.current.add(C), M && (o.current.has(M) ? o.current.get(M).add(C) : o.current.set(M, /* @__PURE__ */ new Set([C]))), P(3, () => {
    K(), N(), n.current.value || O(), E.emit();
  }), () => {
    s.current.delete(C), r.current.delete(C), n.current.filtered.items.delete(C);
    let A = X();
    P(4, () => {
      K(), (A == null ? void 0 : A.getAttribute("id")) === C && O(), E.emit();
    });
  }), group: (C) => (o.current.has(C) || o.current.set(C, /* @__PURE__ */ new Set()), () => {
    s.current.delete(C), o.current.delete(C);
  }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: x, inputId: S, labelId: w, listInnerRef: R }), []);
  function _(C, M) {
    var A, D;
    let V = (D = (A = a.current) == null ? void 0 : A.filter) != null ? D : MP;
    return C ? V(C, n.current.search, M) : 0;
  }
  function N() {
    if (!n.current.search || a.current.shouldFilter === !1) return;
    let C = n.current.filtered.items, M = [];
    n.current.filtered.groups.forEach((D) => {
      let V = o.current.get(D), z = 0;
      V.forEach(($) => {
        let F = C.get($);
        z = Math.max(F, z);
      }), M.push([D, z]);
    });
    let A = R.current;
    U().sort((D, V) => {
      var z, $;
      let F = D.getAttribute("id"), Y = V.getAttribute("id");
      return ((z = C.get(Y)) != null ? z : 0) - (($ = C.get(F)) != null ? $ : 0);
    }).forEach((D) => {
      let V = D.closest(ra);
      V ? V.appendChild(D.parentElement === V ? D : D.closest(`${ra} > *`)) : A.appendChild(D.parentElement === A ? D : D.closest(`${ra} > *`));
    }), M.sort((D, V) => V[1] - D[1]).forEach((D) => {
      var V;
      let z = (V = R.current) == null ? void 0 : V.querySelector(`${io}[${Er}="${encodeURIComponent(D[0])}"]`);
      z == null || z.parentElement.appendChild(z);
    });
  }
  function O() {
    let C = U().find((A) => A.getAttribute("aria-disabled") !== "true"), M = C == null ? void 0 : C.getAttribute(Er);
    E.setState("value", M || void 0);
  }
  function K() {
    var C, M, A, D;
    if (!n.current.search || a.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let V = 0;
    for (let z of r.current) {
      let $ = (M = (C = s.current.get(z)) == null ? void 0 : C.value) != null ? M : "", F = (D = (A = s.current.get(z)) == null ? void 0 : A.keywords) != null ? D : [], Y = _($, F);
      n.current.filtered.items.set(z, Y), Y > 0 && V++;
    }
    for (let [z, $] of o.current) for (let F of $) if (n.current.filtered.items.get(F) > 0) {
      n.current.filtered.groups.add(z);
      break;
    }
    n.current.filtered.count = V;
  }
  function Z() {
    var C, M, A;
    let D = X();
    D && (((C = D.parentElement) == null ? void 0 : C.firstChild) === D && ((A = (M = D.closest(io)) == null ? void 0 : M.querySelector(PP)) == null || A.scrollIntoView({ block: "nearest" })), D.scrollIntoView({ block: "nearest" }));
  }
  function X() {
    var C;
    return (C = R.current) == null ? void 0 : C.querySelector(`${lv}[aria-selected="true"]`);
  }
  function U() {
    var C;
    return Array.from(((C = R.current) == null ? void 0 : C.querySelectorAll(Qu)) || []);
  }
  function B(C) {
    let M = U()[C];
    M && E.setState("value", M.getAttribute(Er));
  }
  function q(C) {
    var M;
    let A = X(), D = U(), V = D.findIndex(($) => $ === A), z = D[V + C];
    (M = a.current) != null && M.loop && (z = V + C < 0 ? D[D.length - 1] : V + C === D.length ? D[0] : D[V + C]), z && E.setState("value", z.getAttribute(Er));
  }
  function G(C) {
    let M = X(), A = M == null ? void 0 : M.closest(io), D;
    for (; A && !D; ) A = C > 0 ? FP(A, io) : VP(A, io), D = A == null ? void 0 : A.querySelector(Qu);
    D ? E.setState("value", D.getAttribute(Er)) : q(C);
  }
  let L = () => B(U().length - 1), I = (C) => {
    C.preventDefault(), C.metaKey ? L() : C.altKey ? G(1) : q(1);
  }, ee = (C) => {
    C.preventDefault(), C.metaKey ? B(0) : C.altKey ? G(-1) : q(-1);
  };
  return f.createElement(tr.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (C) => {
    var M;
    (M = b.onKeyDown) == null || M.call(b, C);
    let A = C.nativeEvent.isComposing || C.keyCode === 229;
    if (!(C.defaultPrevented || A)) switch (C.key) {
      case "n":
      case "j": {
        y && C.ctrlKey && I(C);
        break;
      }
      case "ArrowDown": {
        I(C);
        break;
      }
      case "p":
      case "k": {
        y && C.ctrlKey && ee(C);
        break;
      }
      case "ArrowUp": {
        ee(C);
        break;
      }
      case "Home": {
        C.preventDefault(), B(0);
        break;
      }
      case "End": {
        C.preventDefault(), L();
        break;
      }
      case "Enter": {
        C.preventDefault();
        let D = X();
        if (D) {
          let V = new Event(Za);
          D.dispatchEvent(V);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: T.inputId, id: T.labelId, style: zP }, l), Di(e, (C) => f.createElement(uv.Provider, { value: E }, f.createElement(cv.Provider, { value: T }, C))));
}), AP = f.forwardRef((e, t) => {
  var n, r;
  let o = et(), s = f.useRef(null), i = f.useContext(dv), a = Go(), l = pv(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  yr(() => {
    if (!c) return a.item(o, i == null ? void 0 : i.id);
  }, [c]);
  let u = hv(o, s, [e.value, e.children, s], e.keywords), d = yc(), p = Wn((P) => P.value && P.value === u.current), h = Wn((P) => c || a.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let P = s.current;
    if (!(!P || e.disabled)) return P.addEventListener(Za, v), () => P.removeEventListener(Za, v);
  }, [h, e.onSelect, e.disabled]);
  function v() {
    var P, E;
    m(), (E = (P = l.current).onSelect) == null || E.call(P, u.current);
  }
  function m() {
    d.setState("value", u.current, !0);
  }
  if (!h) return null;
  let { disabled: y, value: b, onSelect: x, forceMount: w, keywords: S, ...R } = e;
  return f.createElement(tr.div, { ref: Ct(s, t), ...R, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!p, "data-disabled": !!y, "data-selected": !!p, onPointerMove: y || a.getDisablePointerSelection() ? void 0 : m, onClick: y ? void 0 : v }, e.children);
}), DP = f.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, i = et(), a = f.useRef(null), l = f.useRef(null), c = et(), u = Go(), d = Wn((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(i) : !0);
  yr(() => u.group(i), []), hv(i, a, [e.value, e.heading, l]);
  let p = f.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return f.createElement(tr.div, { ref: Ct(a, t), ...s, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && f.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), Di(e, (h) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, f.createElement(dv.Provider, { value: p }, h))));
}), NP = f.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = f.useRef(null), s = Wn((i) => !i.search);
  return !n && !s ? null : f.createElement(tr.div, { ref: Ct(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), kP = f.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = yc(), i = Wn((c) => c.search), a = Wn((c) => c.selectedItemId), l = Go();
  return f.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), f.createElement(tr.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": a, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (c) => {
    o || s.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), IP = f.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = f.useRef(null), i = f.useRef(null), a = Wn((c) => c.selectedItemId), l = Go();
  return f.useEffect(() => {
    if (i.current && s.current) {
      let c = i.current, u = s.current, d, p = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          u.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return p.observe(c), () => {
        cancelAnimationFrame(d), p.unobserve(c);
      };
    }
  }, []), f.createElement(tr.div, { ref: Ct(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": r, id: l.listId }, Di(e, (c) => f.createElement("div", { ref: Ct(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), _P = f.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: i, ...a } = e;
  return f.createElement(dm, { open: n, onOpenChange: r }, f.createElement(fm, { container: i }, f.createElement(tc, { "cmdk-overlay": "", className: o }), f.createElement(nc, { "aria-label": e.label, "cmdk-dialog": "", className: s }, f.createElement(fv, { ref: t, ...a }))));
}), OP = f.forwardRef((e, t) => Wn((n) => n.filtered.count === 0) ? f.createElement(tr.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), LP = f.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return f.createElement(tr.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Di(e, (i) => f.createElement("div", { "aria-hidden": !0 }, i)));
}), Mt = Object.assign(fv, { List: IP, Item: AP, Input: kP, Group: DP, Separator: NP, Dialog: _P, Empty: OP, Loading: LP });
function FP(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function VP(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function pv(e) {
  let t = f.useRef(e);
  return yr(() => {
    t.current = e;
  }), t;
}
var yr = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function Tr(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Wn(e) {
  let t = yc(), n = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, n, n);
}
function hv(e, t, n, r = []) {
  let o = f.useRef(), s = Go();
  return yr(() => {
    var i;
    let a = (() => {
      var c;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (c = u.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    s.value(e, a, l), (i = t.current) == null || i.setAttribute(Er, a), o.current = a;
  }), o;
}
var $P = () => {
  let [e, t] = f.useState(), n = Tr(() => /* @__PURE__ */ new Map());
  return yr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function BP(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Di({ asChild: e, children: t }, n) {
  return e && f.isValidElement(t) ? f.cloneElement(BP(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var zP = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const mv = tn({});
function HP(e) {
  const t = xe(null);
  return t.current === null && (t.current = e()), t.current;
}
const jP = typeof window < "u", GP = jP ? Ol : Te, bc = /* @__PURE__ */ tn(null);
function wc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gs(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const mn = (e, t, n) => n > t ? t : n < e ? e : n;
function Ja(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let qr = () => {
}, En = () => {
};
var Wf;
typeof process < "u" && ((Wf = process.env) == null ? void 0 : Wf.NODE_ENV) !== "production" && (qr = (e, t, n) => {
  !e && typeof console < "u" && console.warn(Ja(t, n));
}, En = (e, t, n) => {
  if (!e)
    throw new Error(Ja(t, n));
});
const Un = {}, gv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function vv(e) {
  return typeof e == "object" && e !== null;
}
const yv = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function bv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ht = /* @__NO_SIDE_EFFECTS__ */ (e) => e, WP = (e, t) => (n) => t(e(n)), Wo = (...e) => e.reduce(WP), To = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class xc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return wc(this.subscriptions, t), () => Gs(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Pt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Bt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function wv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ed = /* @__PURE__ */ new Set();
function Sc(e, t, n) {
  e || ed.has(t) || (console.warn(Ja(t, n)), ed.add(t));
}
const xv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, UP = 1e-7, KP = 12;
function YP(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = xv(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > UP && ++a < KP);
  return i;
}
function Uo(e, t, n, r) {
  if (e === t && n === r)
    return Ht;
  const o = (s) => YP(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : xv(o(s), t, r);
}
const Sv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Cv = (e) => (t) => 1 - e(1 - t), Rv = /* @__PURE__ */ Uo(0.33, 1.53, 0.69, 0.99), Cc = /* @__PURE__ */ Cv(Rv), Ev = /* @__PURE__ */ Sv(Cc), Tv = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Cc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Rc = (e) => 1 - Math.sin(Math.acos(e)), Pv = Cv(Rc), Mv = Sv(Rc), XP = /* @__PURE__ */ Uo(0.42, 0, 1, 1), qP = /* @__PURE__ */ Uo(0, 0, 0.58, 1), Av = /* @__PURE__ */ Uo(0.42, 0, 0.58, 1), ZP = (e) => Array.isArray(e) && typeof e[0] != "number", Dv = (e) => Array.isArray(e) && typeof e[0] == "number", td = {
  linear: Ht,
  easeIn: XP,
  easeInOut: Av,
  easeOut: qP,
  circIn: Rc,
  circInOut: Mv,
  circOut: Pv,
  backIn: Cc,
  backInOut: Ev,
  backOut: Rv,
  anticipate: Tv
}, JP = (e) => typeof e == "string", nd = (e) => {
  if (Dv(e)) {
    En(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, o] = e;
    return Uo(t, n, r, o);
  } else if (JP(e))
    return En(td[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), td[e];
  return e;
}, cs = [
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
function QP(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    i.has(u) && (c.schedule(u), e()), u(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, d = !1, p = !1) => {
      const v = p && o ? n : r;
      return d && i.add(u), v.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      r.delete(u), i.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (a = u, o) {
        s = !0;
        return;
      }
      o = !0;
      const d = n;
      n = r, r = d, n.forEach(l), n.clear(), o = !1, s && (s = !1, c.process(u));
    }
  };
  return c;
}
const e1 = 40;
function Nv(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = cs.reduce((w, S) => (w[S] = QP(s), w), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: u, update: d, preRender: p, render: h, postRender: v } = i, m = () => {
    const w = Un.useManualTiming, S = w ? o.timestamp : performance.now();
    n = !1, w || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(S - o.timestamp, e1), 1)), o.timestamp = S, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), d.process(o), p.process(o), h.process(o), v.process(o), o.isProcessing = !1, n && t && (r = !1, e(m));
  }, y = () => {
    n = !0, r = !0, o.isProcessing || e(m);
  };
  return { schedule: cs.reduce((w, S) => {
    const R = i[S];
    return w[S] = (P, E = !1, T = !1) => (n || y(), R.schedule(P, E, T)), w;
  }, {}), cancel: (w) => {
    for (let S = 0; S < cs.length; S++)
      i[cs[S]].cancel(w);
  }, state: o, steps: i };
}
const { schedule: Ne, cancel: Kn, state: lt, steps: oa } = /* @__PURE__ */ Nv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ht, !0);
let Ss;
function t1() {
  Ss = void 0;
}
const xt = {
  now: () => (Ss === void 0 && xt.set(lt.isProcessing || Un.useManualTiming ? lt.timestamp : performance.now()), Ss),
  set: (e) => {
    Ss = e, queueMicrotask(t1);
  }
}, kv = (e) => (t) => typeof t == "string" && t.startsWith(e), Iv = /* @__PURE__ */ kv("--"), n1 = /* @__PURE__ */ kv("var(--"), Ec = (e) => n1(e) ? r1.test(e.split("/*")[0].trim()) : !1, r1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function rd(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Zr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Po = {
  ...Zr,
  transform: (e) => mn(0, 1, e)
}, us = {
  ...Zr,
  default: 1
}, po = (e) => Math.round(e * 1e5) / 1e5, Tc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function o1(e) {
  return e == null;
}
const s1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Pc = (e, t) => (n) => !!(typeof n == "string" && s1.test(n) && n.startsWith(e) || t && !o1(n) && Object.prototype.hasOwnProperty.call(n, t)), _v = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(Tc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, i1 = (e) => mn(0, 255, e), sa = {
  ...Zr,
  transform: (e) => Math.round(i1(e))
}, cr = {
  test: /* @__PURE__ */ Pc("rgb", "red"),
  parse: /* @__PURE__ */ _v("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + sa.transform(e) + ", " + sa.transform(t) + ", " + sa.transform(n) + ", " + po(Po.transform(r)) + ")"
};
function a1(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Qa = {
  test: /* @__PURE__ */ Pc("#"),
  parse: a1,
  transform: cr.transform
}, Ko = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), On = /* @__PURE__ */ Ko("deg"), hn = /* @__PURE__ */ Ko("%"), oe = /* @__PURE__ */ Ko("px"), l1 = /* @__PURE__ */ Ko("vh"), c1 = /* @__PURE__ */ Ko("vw"), od = {
  ...hn,
  parse: (e) => hn.parse(e) / 100,
  transform: (e) => hn.transform(e * 100)
}, Mr = {
  test: /* @__PURE__ */ Pc("hsl", "hue"),
  parse: /* @__PURE__ */ _v("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + hn.transform(po(t)) + ", " + hn.transform(po(n)) + ", " + po(Po.transform(r)) + ")"
}, Ye = {
  test: (e) => cr.test(e) || Qa.test(e) || Mr.test(e),
  parse: (e) => cr.test(e) ? cr.parse(e) : Mr.test(e) ? Mr.parse(e) : Qa.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? cr.transform(e) : Mr.transform(e),
  getAnimatableNone: (e) => {
    const t = Ye.parse(e);
    return t.alpha = 0, Ye.transform(t);
  }
}, u1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function d1(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Tc)) == null ? void 0 : t.length) || 0) + (((n = e.match(u1)) == null ? void 0 : n.length) || 0) > 0;
}
const Ov = "number", Lv = "color", f1 = "var", p1 = "var(", sd = "${}", h1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Br(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(h1, (l) => (Ye.test(l) ? (r.color.push(s), o.push(Lv), n.push(Ye.parse(l))) : l.startsWith(p1) ? (r.var.push(s), o.push(f1), n.push(l)) : (r.number.push(s), o.push(Ov), n.push(parseFloat(l))), ++s, sd)).split(sd);
  return { values: n, split: a, indexes: r, types: o };
}
function m1(e) {
  return Br(e).values;
}
function Fv({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let o = "";
    for (let s = 0; s < n; s++)
      if (o += e[s], r[s] !== void 0) {
        const i = t[s];
        i === Ov ? o += po(r[s]) : i === Lv ? o += Ye.transform(r[s]) : o += r[s];
      }
    return o;
  };
}
function g1(e) {
  return Fv(Br(e));
}
const v1 = (e) => typeof e == "number" ? 0 : Ye.test(e) ? Ye.getAnimatableNone(e) : e, y1 = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : v1(e);
function b1(e) {
  const t = Br(e);
  return Fv(t)(t.values.map((r, o) => y1(r, t.split[o])));
}
const Xt = {
  test: d1,
  parse: m1,
  createTransformer: g1,
  getAnimatableNone: b1
};
function ia(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function w1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = ia(l, a, e + 1 / 3), s = ia(l, a, e), i = ia(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function Ws(e, t) {
  return (n) => n > 0 ? t : e;
}
const Le = (e, t, n) => e + (t - e) * n, aa = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, x1 = [Qa, cr, Mr], S1 = (e) => x1.find((t) => t.test(e));
function id(e) {
  const t = S1(e);
  if (qr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === Mr && (n = w1(n)), n;
}
const ad = (e, t) => {
  const n = id(e), r = id(t);
  if (!n || !r)
    return Ws(e, t);
  const o = { ...n };
  return (s) => (o.red = aa(n.red, r.red, s), o.green = aa(n.green, r.green, s), o.blue = aa(n.blue, r.blue, s), o.alpha = Le(n.alpha, r.alpha, s), cr.transform(o));
}, el = /* @__PURE__ */ new Set(["none", "hidden"]);
function C1(e, t) {
  return el.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function R1(e, t) {
  return (n) => Le(e, t, n);
}
function Mc(e) {
  return typeof e == "number" ? R1 : typeof e == "string" ? Ec(e) ? Ws : Ye.test(e) ? ad : P1 : Array.isArray(e) ? Vv : typeof e == "object" ? Ye.test(e) ? ad : E1 : Ws;
}
function Vv(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => Mc(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function E1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Mc(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function T1(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], i = e.indexes[s][r[s]], a = e.values[i] ?? 0;
    n[o] = a, r[s]++;
  }
  return n;
}
const P1 = (e, t) => {
  const n = Xt.createTransformer(t), r = Br(e), o = Br(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? el.has(e) && !o.values.length || el.has(t) && !r.values.length ? C1(e, t) : Wo(Vv(T1(r, o), o.values), n) : (qr(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Ws(e, t));
};
function $v(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Le(e, t, n) : Mc(e)(e, t);
}
const M1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => Ne.update(t, n),
    stop: () => Kn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => lt.isProcessing ? lt.timestamp : xt.now()
  };
}, Bv = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += Math.round(e(s / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Us = 2e4;
function Ac(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Us; )
    t += n, r = e.next(t);
  return t >= Us ? 1 / 0 : t;
}
function A1(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(Ac(r), Us);
  return {
    type: "keyframes",
    ease: (s) => r.next(o * s).value / t,
    duration: /* @__PURE__ */ Bt(o)
  };
}
const Be = {
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
function tl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const D1 = 12;
function N1(e, t, n) {
  let r = n;
  for (let o = 1; o < D1; o++)
    r = r - e(r) / t(r);
  return r;
}
const la = 1e-3;
function k1({ duration: e = Be.duration, bounce: t = Be.bounce, velocity: n = Be.velocity, mass: r = Be.mass }) {
  let o, s;
  qr(e <= /* @__PURE__ */ Pt(Be.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let i = 1 - t;
  i = mn(Be.minDamping, Be.maxDamping, i), e = mn(Be.minDuration, Be.maxDuration, /* @__PURE__ */ Bt(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, p = u - n, h = tl(c, i), v = Math.exp(-d);
    return la - p / h * v;
  }, s = (c) => {
    const d = c * i * e, p = d * n + n, h = Math.pow(i, 2) * Math.pow(c, 2) * e, v = Math.exp(-d), m = tl(Math.pow(c, 2), i);
    return (-o(c) + la > 0 ? -1 : 1) * ((p - h) * v) / m;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -la + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = N1(o, s, a);
  if (e = /* @__PURE__ */ Pt(e), isNaN(l))
    return {
      stiffness: Be.stiffness,
      damping: Be.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const I1 = ["duration", "bounce"], _1 = ["stiffness", "damping", "mass"];
function ld(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function O1(e) {
  let t = {
    velocity: Be.velocity,
    stiffness: Be.stiffness,
    damping: Be.damping,
    mass: Be.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ld(e, _1) && ld(e, I1))
    if (t.velocity = 0, e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * mn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: Be.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = k1({ ...e, velocity: 0 });
      t = {
        ...t,
        ...n,
        mass: Be.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Ks(e = Be.visualDuration, t = Be.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: d, velocity: p, isResolvedFromDuration: h } = O1({
    ...n,
    velocity: -/* @__PURE__ */ Bt(n.velocity || 0)
  }), v = p || 0, m = c / (2 * Math.sqrt(l * u)), y = i - s, b = /* @__PURE__ */ Bt(Math.sqrt(l / u)), x = Math.abs(y) < 5;
  r || (r = x ? Be.restSpeed.granular : Be.restSpeed.default), o || (o = x ? Be.restDelta.granular : Be.restDelta.default);
  let w, S, R, P, E, T;
  if (m < 1)
    R = tl(b, m), P = (v + m * b * y) / R, w = (N) => {
      const O = Math.exp(-m * b * N);
      return i - O * (P * Math.sin(R * N) + y * Math.cos(R * N));
    }, E = m * b * P + y * R, T = m * b * y - P * R, S = (N) => Math.exp(-m * b * N) * (E * Math.sin(R * N) + T * Math.cos(R * N));
  else if (m === 1) {
    w = (O) => i - Math.exp(-b * O) * (y + (v + b * y) * O);
    const N = v + b * y;
    S = (O) => Math.exp(-b * O) * (b * N * O - v);
  } else {
    const N = b * Math.sqrt(m * m - 1);
    w = (X) => {
      const U = Math.exp(-m * b * X), B = Math.min(N * X, 300);
      return i - U * ((v + m * b * y) * Math.sinh(B) + N * y * Math.cosh(B)) / N;
    };
    const O = (v + m * b * y) / N, K = m * b * O - y * N, Z = m * b * y - O * N;
    S = (X) => {
      const U = Math.exp(-m * b * X), B = Math.min(N * X, 300);
      return U * (K * Math.sinh(B) + Z * Math.cosh(B));
    };
  }
  const _ = {
    calculatedDuration: h && d || null,
    velocity: (N) => /* @__PURE__ */ Pt(S(N)),
    next: (N) => {
      if (!h && m < 1) {
        const K = Math.exp(-m * b * N), Z = Math.sin(R * N), X = Math.cos(R * N), U = i - K * (P * Z + y * X), B = /* @__PURE__ */ Pt(K * (E * Z + T * X));
        return a.done = Math.abs(B) <= r && Math.abs(i - U) <= o, a.value = a.done ? i : U, a;
      }
      const O = w(N);
      if (h)
        a.done = N >= d;
      else {
        const K = /* @__PURE__ */ Pt(S(N));
        a.done = Math.abs(K) <= r && Math.abs(i - O) <= o;
      }
      return a.value = a.done ? i : O, a;
    },
    toString: () => {
      const N = Math.min(Ac(_), Us), O = Bv((K) => _.next(N * K).value, N, 30);
      return N + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return _;
}
Ks.applyToOptions = (e) => {
  const t = A1(e, 100, Ks);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Pt(t.duration), e.type = "keyframes", e;
};
const L1 = 5;
function zv(e, t, n) {
  const r = Math.max(t - L1, 0);
  return wv(n - e(r), t - r);
}
function nl({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], p = {
    done: !1,
    value: d
  }, h = (T) => a !== void 0 && T < a || l !== void 0 && T > l, v = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let m = n * t;
  const y = d + m, b = i === void 0 ? y : i(y);
  b !== y && (m = b - d);
  const x = (T) => -m * Math.exp(-T / r), w = (T) => b + x(T), S = (T) => {
    const _ = x(T), N = w(T);
    p.done = Math.abs(_) <= c, p.value = p.done ? b : N;
  };
  let R, P;
  const E = (T) => {
    h(p.value) && (R = T, P = Ks({
      keyframes: [p.value, v(p.value)],
      velocity: zv(w, T, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (T) => {
      let _ = !1;
      return !P && R === void 0 && (_ = !0, S(T), E(T)), R !== void 0 && T >= R ? P.next(T - R) : (!_ && S(T), p);
    }
  };
}
function F1(e, t, n) {
  const r = [], o = n || Un.mix || $v, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || Ht : t;
      a = Wo(l, a);
    }
    r.push(a);
  }
  return r;
}
function V1(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (En(s === t.length, "Both input and output ranges must be the same length", "range-length"), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = F1(t, r, o), l = a.length, c = (u) => {
    if (i && u < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const p = /* @__PURE__ */ To(e[d], e[d + 1], u);
    return a[d](p);
  };
  return n ? (u) => c(mn(e[0], e[s - 1], u)) : c;
}
function $1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ To(0, t, r);
    e.push(Le(n, 1, o));
  }
}
function B1(e) {
  const t = [0];
  return $1(t, e.length - 1), t;
}
function z1(e, t) {
  return e.map((n) => n * t);
}
function H1(e, t) {
  return e.map(() => t || Av).splice(0, e.length - 1);
}
function Ar({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = ZP(r) ? r.map(nd) : nd(r), s = {
    done: !1,
    value: t[0]
  }, i = z1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : B1(t),
    e
  ), a = V1(i, t, {
    ease: Array.isArray(o) ? o : H1(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const j1 = (e) => e !== null;
function Ni(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const s = e.filter(j1), a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const G1 = {
  decay: nl,
  inertia: nl,
  tween: Ar,
  keyframes: Ar,
  spring: Ks
};
function Hv(e) {
  typeof e.type == "string" && (e.type = G1[e.type]);
}
class Dc {
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
const W1 = (e) => e / 100;
class Ys extends Dc {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== xt.now() && this.tick(xt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Hv(t);
    const { type: n = Ar, repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = t;
    let { keyframes: a } = t;
    const l = n || Ar;
    process.env.NODE_ENV !== "production" && l !== Ar && En(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== Ar && typeof a[0] != "number" && (this.mixKeyframes = Wo(W1, $v(a[0], a[1])), a = [0, 100]);
    const c = l({ ...t, keyframes: a });
    s === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = Ac(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: o, mixKeyframes: s, mirroredGenerator: i, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: c = 0, keyframes: u, repeat: d, repeatType: p, repeatDelay: h, type: v, onUpdate: m, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const b = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? b < 0 : b > o;
    this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let w = this.currentTime, S = r;
    if (d) {
      const T = Math.min(this.currentTime, o) / a;
      let _ = Math.floor(T), N = T % 1;
      !N && T >= 1 && (N = 1), N === 1 && _--, _ = Math.min(_, d + 1), !!(_ % 2) && (p === "reverse" ? (N = 1 - N, h && (N -= h / a)) : p === "mirror" && (S = i)), w = mn(0, 1, N) * a;
    }
    let R;
    x ? (this.delayState.value = u[0], R = this.delayState) : R = S.next(w), s && !x && (R.value = s(R.value));
    let { done: P } = R;
    !x && l !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return E && v !== nl && (R.value = Ni(u, this.options, y, this.speed)), m && m(R.value), E && this.finish(), R;
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
    return /* @__PURE__ */ Bt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Bt(t);
  }
  get time() {
    return /* @__PURE__ */ Bt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Pt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
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
    return zv((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(xt.now()), this.playbackSpeed = t, n && this.driver && (this.time = /* @__PURE__ */ Bt(this.currentTime));
  }
  play() {
    var o, s;
    if (this.isStopped)
      return;
    const { driver: t = M1, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), (s = (o = this.options).onPlay) == null || s.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(xt.now()), this.holdTime = this.currentTime;
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
function U1(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const ur = (e) => e * 180 / Math.PI, rl = (e) => {
  const t = ur(Math.atan2(e[1], e[0]));
  return ol(t);
}, K1 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: rl,
  rotateZ: rl,
  skewX: (e) => ur(Math.atan(e[1])),
  skewY: (e) => ur(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ol = (e) => (e = e % 360, e < 0 && (e += 360), e), cd = rl, ud = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), dd = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Y1 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ud,
  scaleY: dd,
  scale: (e) => (ud(e) + dd(e)) / 2,
  rotateX: (e) => ol(ur(Math.atan2(e[6], e[5]))),
  rotateY: (e) => ol(ur(Math.atan2(-e[2], e[0]))),
  rotateZ: cd,
  rotate: cd,
  skewX: (e) => ur(Math.atan(e[4])),
  skewY: (e) => ur(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function sl(e) {
  return e.includes("scale") ? 1 : 0;
}
function il(e, t) {
  if (!e || e === "none")
    return sl(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = Y1, o = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = K1, o = a;
  }
  if (!o)
    return sl(t);
  const s = r[t], i = o[1].split(",").map(q1);
  return typeof s == "function" ? s(i) : i[s];
}
const X1 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return il(n, t);
};
function q1(e) {
  return parseFloat(e.trim());
}
const Jr = [
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
], Qr = new Set(Jr), fd = (e) => e === Zr || e === oe, Z1 = /* @__PURE__ */ new Set(["x", "y", "z"]), J1 = Jr.filter((e) => !Z1.has(e));
function Q1(e) {
  const t = [];
  return J1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Vn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
    const o = e.max - e.min;
    return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n);
  },
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
    const o = e.max - e.min;
    return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => il(t, "x"),
  y: (e, { transform: t }) => il(t, "y")
};
Vn.translateX = Vn.x;
Vn.translateY = Vn.y;
const dr = /* @__PURE__ */ new Set();
let al = !1, ll = !1, cl = !1;
function jv() {
  if (ll) {
    const e = Array.from(dr).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = Q1(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([s, i]) => {
        var a;
        (a = r.getValue(s)) == null || a.set(i);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  ll = !1, al = !1, dr.forEach((e) => e.complete(cl)), dr.clear();
}
function Gv() {
  dr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ll = !0);
  });
}
function eM() {
  cl = !0, Gv(), jv(), cl = !1;
}
class Nc {
  constructor(t, n, r, o, s, i = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (dr.add(this), al || (al = !0, Ne.read(Gv), Ne.resolveKeyframes(jv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    if (t[0] === null) {
      const s = o == null ? void 0 : o.get(), i = t[t.length - 1];
      if (s !== void 0)
        t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, i);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = i), o && s === void 0 && o.set(t[0]);
    }
    U1(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), dr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (dr.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const tM = (e) => e.startsWith("--");
function Wv(e, t, n) {
  tM(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const nM = {};
function Uv(e, t) {
  const n = /* @__PURE__ */ bv(e);
  return () => nM[t] ?? n();
}
const rM = /* @__PURE__ */ Uv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Kv = /* @__PURE__ */ Uv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), fo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, pd = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ fo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ fo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ fo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ fo([0.33, 1.53, 0.69, 0.99])
};
function Yv(e, t) {
  if (e)
    return typeof e == "function" ? Kv() ? Bv(e, t) : "ease-out" : Dv(e) ? fo(e) : Array.isArray(e) ? e.map((n) => Yv(n, t) || pd.easeOut) : pd[e];
}
function oM(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const d = Yv(a, o);
  Array.isArray(d) && (u.easing = d);
  const p = {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  };
  return c && (p.pseudoElement = c), e.animate(u, p);
}
function Xv(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function sM({ type: e, ...t }) {
  return Xv(e) && Kv() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class qv extends Dc {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: s, allowFlatten: i = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!s, this.allowFlatten = i, this.options = t, En(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const c = sM(t);
    this.animation = oM(n, r, o, c, s), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        const u = Ni(o, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(u), Wv(n, r, u), this.animation.cancel();
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
    var n, r, o;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement && (t != null && t.isConnected) && ((o = (r = this.animation).commitStyles) == null || o.call(r));
  }
  get duration() {
    var n, r;
    const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
    return /* @__PURE__ */ Bt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Bt(t);
  }
  get time() {
    return /* @__PURE__ */ Bt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Pt(t), n && this.animation.pause();
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
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: o }) {
    var s;
    return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && rM() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), r && (this.animation.rangeEnd = r), Ht) : o(this);
  }
}
const Zv = {
  anticipate: Tv,
  backInOut: Ev,
  circInOut: Mv
};
function iM(e) {
  return e in Zv;
}
function aM(e) {
  typeof e.ease == "string" && iM(e.ease) && (e.ease = Zv[e.ease]);
}
const ca = 10;
class lM extends qv {
  constructor(t) {
    aM(t), Hv(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
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
    const { motionValue: n, onUpdate: r, onComplete: o, element: s, ...i } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Ys({
      ...i,
      autoplay: !1
    }), l = Math.max(ca, xt.now() - this.startTime), c = mn(0, ca, l - ca), u = a.sample(l).value, { name: d } = this.options;
    s && d && Wv(s, d, u), n.setWithVelocity(a.sample(Math.max(0, l - c)).value, u, c), a.stop();
  }
}
const hd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Xt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function cM(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function uM(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = hd(o, t), a = hd(s, t);
  return qr(i === a, `You are trying to animate ${t} from "${o}" to "${s}". "${i ? s : o}" is not an animatable value.`, "value-not-animatable"), !i || !a ? !1 : cM(e) || (n === "spring" || Xv(n)) && r;
}
function ul(e) {
  e.duration = 0, e.type = "keyframes";
}
const Jv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), dM = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function fM(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && dM.test(e[t]))
      return !0;
  return !1;
}
const pM = /* @__PURE__ */ new Set([
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
]), hM = /* @__PURE__ */ bv(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function mM(e) {
  var d;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: s, type: i, keyframes: a } = e;
  if (!(((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: u } = t.owner.getProps();
  return hM() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Jv.has(n) || pM.has(n) && fM(a)) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && s !== 0 && i !== "inertia";
}
const gM = 40;
class vM extends Dc {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", keyframes: a, name: l, motionValue: c, element: u, ...d }) {
    var v;
    super(), this.stop = () => {
      var m, y;
      this._animation && (this._animation.stop(), (m = this.stopTimeline) == null || m.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = xt.now();
    const p = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: s,
      repeatType: i,
      name: l,
      motionValue: c,
      element: u,
      ...d
    }, h = (u == null ? void 0 : u.KeyframeResolver) || Nc;
    this.keyframeResolver = new h(a, (m, y, b) => this.onKeyframesResolved(m, y, p, !b), l, c, u), (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    var b, x;
    this.keyframeResolver = void 0;
    const { name: s, type: i, velocity: a, delay: l, isHandoff: c, onUpdate: u } = r;
    this.resolvedAt = xt.now();
    let d = !0;
    uM(t, s, i, a) || (d = !1, (Un.instantAnimations || !l) && (u == null || u(Ni(t, r, n))), t[0] = t[t.length - 1], ul(r), r.repeat = 0);
    const h = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > gM ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, v = d && !c && mM(h), m = (x = (b = h.motionValue) == null ? void 0 : b.owner) == null ? void 0 : x.current;
    let y;
    if (v)
      try {
        y = new lM({
          ...h,
          element: m
        });
      } catch {
        y = new Ys(h);
      }
    else
      y = new Ys(h);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(Ht), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), eM()), this._animation;
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
function Qv(e, t, n, r = 0, o = 1) {
  const s = Array.from(e).sort((c, u) => c.sortNodePosition(u)).indexOf(t), i = e.size, a = (i - 1) * r;
  return typeof n == "function" ? n(s, i) : o === 1 ? s * r : a - s * r;
}
const yM = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function bM(e) {
  const t = yM.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const wM = 4;
function ey(e, t, n = 1) {
  En(n <= wM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, o] = bM(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return gv(i) ? parseFloat(i) : i;
  }
  return Ec(o) ? ey(o, t, n + 1) : o;
}
const xM = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, SM = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), CM = {
  type: "keyframes",
  duration: 0.8
}, RM = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, EM = (e, { keyframes: t }) => t.length > 2 ? CM : Qr.has(e) ? e.startsWith("scale") ? SM(t[1]) : xM : RM;
function ty(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function kc(e, t) {
  const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? ty(n, e) : n;
}
const TM = /* @__PURE__ */ new Set([
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
function PM(e) {
  for (const t in e)
    if (!TM.has(t))
      return !0;
  return !1;
}
const Ic = (e, t, n, r = {}, o, s) => (i) => {
  const a = kc(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Pt(l);
  const u = {
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
    element: s ? void 0 : o
  };
  PM(a) || Object.assign(u, EM(e, u)), u.duration && (u.duration = /* @__PURE__ */ Pt(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Pt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (ul(u), u.delay === 0 && (d = !0)), (Un.instantAnimations || Un.skipAnimations || o != null && o.shouldSkipAnimations) && (d = !0, ul(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, d && !s && t.get() !== void 0) {
    const p = Ni(u.keyframes, a);
    if (p !== void 0) {
      Ne.update(() => {
        u.onUpdate(p), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Ys(u) : new vM(u);
};
function md(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function _c(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = md(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = md(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
function fr(e, t, n) {
  const r = e.getProps();
  return _c(r, t, n !== void 0 ? n : r.custom, e);
}
const ny = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jr
]), gd = 30, MM = (e) => !isNaN(parseFloat(e));
class AM {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var s;
      const o = xt.now();
      if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current), this.dependents))
        for (const i of this.dependents)
          i.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = xt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = MM(this.current));
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
    return process.env.NODE_ENV !== "production" && Sc(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new xc());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Ne.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
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
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
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
    const t = xt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > gd)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, gd);
    return wv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function zr(e, t) {
  return new AM(e, t);
}
const dl = (e) => Array.isArray(e);
function DM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zr(n));
}
function NM(e) {
  return dl(e) ? e[e.length - 1] || 0 : e;
}
function kM(e, t) {
  const n = fr(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = NM(s[i]);
    DM(e, i, a);
  }
}
const ct = (e) => !!(e && e.getVelocity);
function IM(e) {
  return !!(ct(e) && e.add);
}
function fl(e, t) {
  const n = e.getValue("willChange");
  if (IM(n))
    return n.add(t);
  if (!n && Un.WillChange) {
    const r = new Un.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Oc(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const _M = "framerAppearId", ry = "data-" + Oc(_M);
function oy(e) {
  return e.props[ry];
}
function OM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function sy(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: s, transitionEnd: i, ...a } = t;
  const l = e.getDefaultTransition();
  s = s ? ty(s, l) : l;
  const c = s == null ? void 0 : s.reduceMotion;
  r && (s = r);
  const u = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const p in a) {
    const h = e.getValue(p, e.latestValues[p] ?? null), v = a[p];
    if (v === void 0 || d && OM(d, p))
      continue;
    const m = {
      delay: n,
      ...kc(s || {}, p)
    }, y = h.get();
    if (y !== void 0 && !h.isAnimating() && !Array.isArray(v) && v === y && !m.velocity) {
      Ne.update(() => h.set(v));
      continue;
    }
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const S = oy(e);
      if (S) {
        const R = window.MotionHandoffAnimation(S, p, Ne);
        R !== null && (m.startTime = R, b = !0);
      }
    }
    fl(e, p);
    const x = c ?? e.shouldReduceMotion;
    h.start(Ic(p, h, v, x && ny.has(p) ? { type: !1 } : m, e, b));
    const w = h.animation;
    w && u.push(w);
  }
  if (i) {
    const p = () => Ne.update(() => {
      i && kM(e, i);
    });
    u.length ? Promise.all(u).then(p) : p();
  }
  return u;
}
function pl(e, t, n = {}) {
  var l;
  const r = fr(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = r ? () => Promise.all(sy(e, r, n)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: p } = o;
    return LM(e, t, c, u, d, p, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [s, i] : [i, s];
    return c().then(() => u());
  } else
    return Promise.all([s(), i(n.delay)]);
}
function LM(e, t, n = 0, r = 0, o = 0, s = 1, i) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(pl(l, t, {
      ...i,
      delay: n + (typeof r == "function" ? 0 : r) + Qv(e.variantChildren, l, r, o, s)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function FM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => pl(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = pl(e, t, n);
  else {
    const o = typeof t == "function" ? fr(e, t, n.custom) : t;
    r = Promise.all(sy(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const VM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, iy = (e) => (t) => t.test(e), ay = [Zr, oe, hn, On, c1, l1, VM], vd = (e) => ay.find(iy(e));
function $M(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || yv(e) : !0;
}
const BM = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function zM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Tc) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = BM.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const HM = /\b([a-z-]*)\(.*?\)/gu, hl = {
  ...Xt,
  getAnimatableNone: (e) => {
    const t = e.match(HM);
    return t ? t.map(zM).join(" ") : e;
  }
}, ml = {
  ...Xt,
  getAnimatableNone: (e) => {
    const t = Xt.parse(e);
    return Xt.createTransformer(e)(t.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, yd = {
  ...Zr,
  transform: Math.round
}, jM = {
  rotate: On,
  rotateX: On,
  rotateY: On,
  rotateZ: On,
  scale: us,
  scaleX: us,
  scaleY: us,
  scaleZ: us,
  skew: On,
  skewX: On,
  skewY: On,
  distance: oe,
  translateX: oe,
  translateY: oe,
  translateZ: oe,
  x: oe,
  y: oe,
  z: oe,
  perspective: oe,
  transformPerspective: oe,
  opacity: Po,
  originX: od,
  originY: od,
  originZ: oe
}, Lc = {
  // Border props
  borderWidth: oe,
  borderTopWidth: oe,
  borderRightWidth: oe,
  borderBottomWidth: oe,
  borderLeftWidth: oe,
  borderRadius: oe,
  borderTopLeftRadius: oe,
  borderTopRightRadius: oe,
  borderBottomRightRadius: oe,
  borderBottomLeftRadius: oe,
  // Positioning props
  width: oe,
  maxWidth: oe,
  height: oe,
  maxHeight: oe,
  top: oe,
  right: oe,
  bottom: oe,
  left: oe,
  inset: oe,
  insetBlock: oe,
  insetBlockStart: oe,
  insetBlockEnd: oe,
  insetInline: oe,
  insetInlineStart: oe,
  insetInlineEnd: oe,
  // Spacing props
  padding: oe,
  paddingTop: oe,
  paddingRight: oe,
  paddingBottom: oe,
  paddingLeft: oe,
  paddingBlock: oe,
  paddingBlockStart: oe,
  paddingBlockEnd: oe,
  paddingInline: oe,
  paddingInlineStart: oe,
  paddingInlineEnd: oe,
  margin: oe,
  marginTop: oe,
  marginRight: oe,
  marginBottom: oe,
  marginLeft: oe,
  marginBlock: oe,
  marginBlockStart: oe,
  marginBlockEnd: oe,
  marginInline: oe,
  marginInlineStart: oe,
  marginInlineEnd: oe,
  // Typography
  fontSize: oe,
  // Misc
  backgroundPositionX: oe,
  backgroundPositionY: oe,
  ...jM,
  zIndex: yd,
  // SVG
  fillOpacity: Po,
  strokeOpacity: Po,
  numOctaves: yd
}, GM = {
  ...Lc,
  // Color props
  color: Ye,
  backgroundColor: Ye,
  outlineColor: Ye,
  fill: Ye,
  stroke: Ye,
  // Border props
  borderColor: Ye,
  borderTopColor: Ye,
  borderRightColor: Ye,
  borderBottomColor: Ye,
  borderLeftColor: Ye,
  filter: hl,
  WebkitFilter: hl,
  mask: ml,
  WebkitMask: ml
}, ly = (e) => GM[e], WM = /* @__PURE__ */ new Set([hl, ml]);
function cy(e, t) {
  let n = ly(e);
  return WM.has(n) || (n = Xt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const UM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function KM(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !UM.has(s) && Br(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = cy(n, o);
}
class YM extends Nc {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let d = t[u];
      if (typeof d == "string" && (d = d.trim(), Ec(d))) {
        const p = ey(d, n.current);
        p !== void 0 && (t[u] = p), u === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !ny.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = vd(o), a = vd(s), l = rd(o), c = rd(s);
    if (l !== c && Vn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (i !== a)
      if (fd(i) && fd(a))
        for (let u = 0; u < t.length; u++) {
          const d = t[u];
          typeof d == "string" && (t[u] = parseFloat(d));
        }
      else Vn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || $M(t[o])) && r.push(o);
    r.length && KM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Vn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const s = r.length - 1, i = r[s];
    r[s] = Vn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, c]) => {
      t.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function uy(e, t, n) {
  if (e == null)
    return [];
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const dy = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function XM(e) {
  return vv(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Fc } = /* @__PURE__ */ Nv(queueMicrotask, !1), Yt = {
  x: !1,
  y: !1
};
function fy() {
  return Yt.x || Yt.y;
}
function qM(e) {
  return e === "x" || e === "y" ? Yt[e] ? null : (Yt[e] = !0, () => {
    Yt[e] = !1;
  }) : Yt.x || Yt.y ? null : (Yt.x = Yt.y = !0, () => {
    Yt.x = Yt.y = !1;
  });
}
function py(e, t) {
  const n = uy(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function ZM(e) {
  return !(e.pointerType === "touch" || fy());
}
function JM(e, t, n = {}) {
  const [r, o, s] = py(e, n);
  return r.forEach((i) => {
    let a = !1, l = !1, c;
    const u = () => {
      i.removeEventListener("pointerleave", v);
    }, d = (y) => {
      c && (c(y), c = void 0), u();
    }, p = (y) => {
      a = !1, window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), l && (l = !1, d(y));
    }, h = () => {
      a = !0, window.addEventListener("pointerup", p, o), window.addEventListener("pointercancel", p, o);
    }, v = (y) => {
      if (y.pointerType !== "touch") {
        if (a) {
          l = !0;
          return;
        }
        d(y);
      }
    }, m = (y) => {
      if (!ZM(y))
        return;
      l = !1;
      const b = t(i, y);
      typeof b == "function" && (c = b, i.addEventListener("pointerleave", v, o));
    };
    i.addEventListener("pointerenter", m, o), i.addEventListener("pointerdown", h, o);
  }), s;
}
const hy = (e, t) => t ? e === t ? !0 : hy(e, t.parentElement) : !1, Vc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, QM = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function eA(e) {
  return QM.has(e.tagName) || e.isContentEditable === !0;
}
const tA = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function nA(e) {
  return tA.has(e.tagName) || e.isContentEditable === !0;
}
const Cs = /* @__PURE__ */ new WeakSet();
function bd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ua(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const rA = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = bd(() => {
    if (Cs.has(n))
      return;
    ua(n, "down");
    const o = bd(() => {
      ua(n, "up");
    }), s = () => ua(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function wd(e) {
  return Vc(e) && !fy();
}
const xd = /* @__PURE__ */ new WeakSet();
function oA(e, t, n = {}) {
  const [r, o, s] = py(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!wd(a) || xd.has(a))
      return;
    Cs.add(l), n.stopPropagation && xd.add(a);
    const c = t(l, a), u = (h, v) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", p), Cs.has(l) && Cs.delete(l), wd(h) && typeof c == "function" && c(h, { success: v });
    }, d = (h) => {
      u(h, l === window || l === document || n.useGlobalTarget || hy(l, h.target));
    }, p = (h) => {
      u(h, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), XM(a) && (a.addEventListener("focus", (c) => rA(c, o)), !eA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), s;
}
function $c(e) {
  return vv(e) && "ownerSVGElement" in e;
}
const Rs = /* @__PURE__ */ new WeakMap();
let Ln;
const my = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : $c(r) && "getBBox" in r ? r.getBBox()[t] : r[n], sA = /* @__PURE__ */ my("inline", "width", "offsetWidth"), iA = /* @__PURE__ */ my("block", "height", "offsetHeight");
function aA({ target: e, borderBoxSize: t }) {
  var n;
  (n = Rs.get(e)) == null || n.forEach((r) => {
    r(e, {
      get width() {
        return sA(e, t);
      },
      get height() {
        return iA(e, t);
      }
    });
  });
}
function lA(e) {
  e.forEach(aA);
}
function cA() {
  typeof ResizeObserver > "u" || (Ln = new ResizeObserver(lA));
}
function uA(e, t) {
  Ln || cA();
  const n = uy(e);
  return n.forEach((r) => {
    let o = Rs.get(r);
    o || (o = /* @__PURE__ */ new Set(), Rs.set(r, o)), o.add(t), Ln == null || Ln.observe(r);
  }), () => {
    n.forEach((r) => {
      const o = Rs.get(r);
      o == null || o.delete(t), o != null && o.size || Ln == null || Ln.unobserve(r);
    });
  };
}
const Es = /* @__PURE__ */ new Set();
let Dr;
function dA() {
  Dr = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Es.forEach((t) => t(e));
  }, window.addEventListener("resize", Dr);
}
function fA(e) {
  return Es.add(e), Dr || dA(), () => {
    Es.delete(e), !Es.size && typeof Dr == "function" && (window.removeEventListener("resize", Dr), Dr = void 0);
  };
}
function Sd(e, t) {
  return typeof e == "function" ? fA(e) : uA(e, t);
}
function pA(e) {
  return $c(e) && e.tagName === "svg";
}
const hA = [...ay, Ye, Xt], mA = (e) => hA.find(iy(e)), Cd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Nr = () => ({
  x: Cd(),
  y: Cd()
}), Rd = () => ({ min: 0, max: 0 }), Ze = () => ({
  x: Rd(),
  y: Rd()
}), gA = /* @__PURE__ */ new WeakMap();
function ki(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Mo(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Bc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], zc = ["initial", ...Bc];
function Ii(e) {
  return ki(e.animate) || zc.some((t) => Mo(e[t]));
}
function gy(e) {
  return !!(Ii(e) || e.variants);
}
function vA(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (ct(o))
      e.addValue(r, o);
    else if (ct(s))
      e.addValue(r, zr(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, zr(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const gl = { current: null }, vy = { current: !1 }, yA = typeof window < "u";
function bA() {
  if (vy.current = !0, !!yA)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => gl.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      gl.current = !1;
}
const Ed = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Xs = {};
function yy(e) {
  Xs = e;
}
function wA() {
  return Xs;
}
class xA {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, skipAnimations: s, blockInitialAnimation: i, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Nc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = xt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, Ne.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = !!i, this.isControllingVariants = Ii(n), this.isVariantNode = gy(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...p } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in p) {
      const v = p[h];
      c[h] !== void 0 && ct(v) && v.set(c[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (n = this.values.get(o)) == null || n.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    this.current = t, gA.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, s) => this.bindToMotionValue(s, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (vy.current || bA(), this.shouldReduceMotion = gl.current), process.env.NODE_ENV !== "production" && Sc(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), Kn(this.notifyUpdate), Kn(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), r.isMounted = !1);
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
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && Jv.has(t) && this.current instanceof HTMLElement) {
      const { factory: i, keyframes: a, times: l, ease: c, duration: u } = n.accelerate, d = new qv({
        element: this.current,
        name: t,
        keyframes: a,
        times: l,
        ease: c,
        duration: /* @__PURE__ */ Pt(u)
      }), p = i(d);
      this.valueSubscriptions.set(t, () => {
        p(), d.cancel();
      });
      return;
    }
    const r = Qr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && Ne.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let s;
    typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xs) {
      const n = Xs[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ze();
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
    for (let r = 0; r < Ed.length; r++) {
      const o = Ed[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = vA(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
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
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = zr(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (gv(r) || yv(r)) ? r = parseFloat(r) : !mA(r) && Xt.test(n) && (r = cy(t, n)), this.setBaseTarget(t, ct(r) ? r.get() : r)), ct(r) ? r.get() : r;
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
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const i = _c(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
      i && (r = i[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ct(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new xc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Fc.render(this.render);
  }
}
class by extends xA {
  constructor() {
    super(...arguments), this.KeyframeResolver = YM;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ct(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class nr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function wy({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function SA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function CA(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function da(e) {
  return e === void 0 || e === 1;
}
function vl({ scale: e, scaleX: t, scaleY: n }) {
  return !da(e) || !da(t) || !da(n);
}
function lr(e) {
  return vl(e) || xy(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function xy(e) {
  return Td(e.x) || Td(e.y);
}
function Td(e) {
  return e && e !== "0%";
}
function qs(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Pd(e, t, n, r, o) {
  return o !== void 0 && (e = qs(e, o, r)), qs(e, n, r) + t;
}
function yl(e, t = 0, n = 1, r, o) {
  e.min = Pd(e.min, t, n, r, o), e.max = Pd(e.max, t, n, r, o);
}
function Sy(e, { x: t, y: n }) {
  yl(e.x, t.translate, t.scale, t.originPoint), yl(e.y, n.translate, n.scale, n.originPoint);
}
const Md = 0.999999999999, Ad = 1.0000000000001;
function RA(e, t, n, r = !1) {
  var a;
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let l = 0; l < o; l++) {
    s = n[l], i = s.projectionDelta;
    const { visualElement: c } = s.options;
    c && c.props.style && c.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && (un(e.x, -s.scroll.offset.x), un(e.y, -s.scroll.offset.y)), i && (t.x *= i.x.scale, t.y *= i.y.scale, Sy(e, i)), r && lr(s.latestValues) && Ts(e, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < Ad && t.x > Md && (t.x = 1), t.y < Ad && t.y > Md && (t.y = 1);
}
function un(e, t) {
  e.min += t, e.max += t;
}
function Dd(e, t, n, r, o = 0.5) {
  const s = Le(e.min, e.max, o);
  yl(e, t, n, s, r);
}
function Nd(e, t) {
  return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Ts(e, t, n) {
  const r = n ?? e;
  Dd(e.x, Nd(t.x, r.x), t.scaleX, t.scale, t.originX), Dd(e.y, Nd(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Cy(e, t) {
  return wy(CA(e.getBoundingClientRect(), t));
}
function EA(e, t, n) {
  const r = Cy(e, n), { scroll: o } = t;
  return o && (un(r.x, o.offset.x), un(r.y, o.offset.y)), r;
}
const TA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, PA = Jr.length;
function MA(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < PA; s++) {
    const i = Jr[s], a = e[i];
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
      const c = dy(a, Lc[i]);
      if (!l) {
        o = !1;
        const u = TA[i] || i;
        r += `${u}(${c}) `;
      }
      n && (t[i] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Hc(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Qr.has(l)) {
      i = !0;
      continue;
    } else if (Iv(l)) {
      o[l] = c;
      continue;
    } else {
      const u = dy(c, Lc[l]);
      l.startsWith("origin") ? (a = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = MA(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function Ry(e, { style: t, vars: n }, r, o) {
  const s = e.style;
  let i;
  for (i in t)
    s[i] = t[i];
  o == null || o.applyProjectionStyles(s, r);
  for (i in n)
    s.setProperty(i, n[i]);
}
function kd(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ao = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (oe.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = kd(e, t.target.x), r = kd(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, AA = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Xt.parse(e);
    if (o.length > 5)
      return r;
    const s = Xt.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = Le(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
}, bl = {
  borderRadius: {
    ...ao,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ao,
  borderTopRightRadius: ao,
  borderBottomLeftRadius: ao,
  borderBottomRightRadius: ao,
  boxShadow: AA
};
function Ey(e, { layout: t, layoutId: n }) {
  return Qr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!bl[e] || e === "opacity");
}
function jc(e, t, n) {
  var i;
  const r = e.style, o = t == null ? void 0 : t.style, s = {};
  if (!r)
    return s;
  for (const a in r)
    (ct(r[a]) || o && ct(o[a]) || Ey(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (s[a] = r[a]);
  return s;
}
function DA(e) {
  return window.getComputedStyle(e);
}
class NA extends by {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ry;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Qr.has(n))
      return (r = this.projection) != null && r.isProjecting ? sl(n) : X1(t, n);
    {
      const o = DA(t), s = (Iv(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Cy(t, n);
  }
  build(t, n, r) {
    Hc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return jc(t, n, r);
  }
}
const kA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, IA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function _A(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? kA : IA;
  e[s.offset] = `${-r}`, e[s.array] = `${t} ${n}`;
}
const OA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Ty(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: o,
  pathSpacing: s = 1,
  pathOffset: i = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, u) {
  if (Hc(e, a, c), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: p } = e;
  d.transform && (p.transform = d.transform, delete d.transform), (p.transform || d.transformOrigin) && (p.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), p.transform && (p.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete d.transformBox);
  for (const h of OA)
    d[h] !== void 0 && (p[h] = d[h], delete d[h]);
  t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), o !== void 0 && _A(d, o, s, i, !1);
}
const Py = /* @__PURE__ */ new Set([
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
]), My = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function LA(e, t, n, r) {
  Ry(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Py.has(o) ? o : Oc(o), t.attrs[o]);
}
function Ay(e, t, n) {
  const r = jc(e, t, n);
  for (const o in e)
    if (ct(e[o]) || ct(t[o])) {
      const s = Jr.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
class FA extends by {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ze;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Qr.has(n)) {
      const r = ly(n);
      return r && r.default || 0;
    }
    return n = Py.has(n) ? n : Oc(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ay(t, n, r);
  }
  build(t, n, r) {
    Ty(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    LA(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = My(t.tagName), super.mount(t);
  }
}
const VA = zc.length;
function Dy(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Dy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < VA; n++) {
    const r = zc[n], o = e.props[r];
    (Mo(o) || o === !1) && (t[r] = o);
  }
  return t;
}
function Ny(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const $A = [...Bc].reverse(), BA = Bc.length;
function zA(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => FM(e, n, r)));
}
function HA(e) {
  let t = zA(e), n = Id(), r = !0, o = !1;
  const s = (c) => (u, d) => {
    var h;
    const p = fr(e, d, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
    if (p) {
      const { transition: v, transitionEnd: m, ...y } = p;
      u = { ...u, ...y, ...m };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function a(c) {
    const { props: u } = e, d = Dy(e.parent) || {}, p = [], h = /* @__PURE__ */ new Set();
    let v = {}, m = 1 / 0;
    for (let b = 0; b < BA; b++) {
      const x = $A[b], w = n[x], S = u[x] !== void 0 ? u[x] : d[x], R = Mo(S), P = x === c ? w.isActive : null;
      P === !1 && (m = b);
      let E = S === d[x] && S !== u[x] && R;
      if (E && (r || o) && e.manuallyAnimateOnMount && (E = !1), w.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !S && !w.prevProp || // Or if the prop doesn't define an animation
      ki(S) || typeof S == "boolean")
        continue;
      if (x === "exit" && w.isActive && P !== !0) {
        w.prevResolvedValues && (v = {
          ...v,
          ...w.prevResolvedValues
        });
        continue;
      }
      const T = jA(w.prevProp, S);
      let _ = T || // If we're making this variant active, we want to always make it active
      x === c && w.isActive && !E && R || // If we removed a higher-priority variant (i is in reverse order)
      b > m && R, N = !1;
      const O = Array.isArray(S) ? S : [S];
      let K = O.reduce(s(x), {});
      P === !1 && (K = {});
      const { prevResolvedValues: Z = {} } = w, X = {
        ...Z,
        ...K
      }, U = (G) => {
        _ = !0, h.has(G) && (N = !0, h.delete(G)), w.needsAnimating[G] = !0;
        const L = e.getValue(G);
        L && (L.liveStyle = !1);
      };
      for (const G in X) {
        const L = K[G], I = Z[G];
        if (v.hasOwnProperty(G))
          continue;
        let ee = !1;
        dl(L) && dl(I) ? ee = !Ny(L, I) : ee = L !== I, ee ? L != null ? U(G) : h.add(G) : L !== void 0 && h.has(G) ? U(G) : w.protectedKeys[G] = !0;
      }
      w.prevProp = S, w.prevResolvedValues = K, w.isActive && (v = { ...v, ...K }), (r || o) && e.blockInitialAnimation && (_ = !1);
      const B = E && T;
      _ && (!B || N) && p.push(...O.map((G) => {
        const L = { type: x };
        if (typeof G == "string" && (r || o) && !B && e.manuallyAnimateOnMount && e.parent) {
          const { parent: I } = e, ee = fr(I, G);
          if (I.enteringChildren && ee) {
            const { delayChildren: C } = ee.transition || {};
            L.delay = Qv(I.enteringChildren, e, C);
          }
        }
        return {
          animation: G,
          options: L
        };
      }));
    }
    if (h.size) {
      const b = {};
      if (typeof u.initial != "boolean") {
        const x = fr(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        x && x.transition && (b.transition = x.transition);
      }
      h.forEach((x) => {
        const w = e.getBaseTarget(x), S = e.getValue(x);
        S && (S.liveStyle = !0), b[x] = w ?? null;
      }), p.push({ animation: b });
    }
    let y = !!p.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, o = !1, y ? t(p) : Promise.resolve();
  }
  function l(c, u) {
    var p;
    if (n[c].isActive === u)
      return Promise.resolve();
    (p = e.variantChildren) == null || p.forEach((h) => {
      var v;
      return (v = h.animationState) == null ? void 0 : v.setActive(c, u);
    }), n[c].isActive = u;
    const d = a(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Id(), o = !0;
    }
  };
}
function jA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ny(t, e) : !1;
}
function ar(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Id() {
  return {
    animate: ar(!0),
    whileInView: ar(),
    whileHover: ar(),
    whileTap: ar(),
    whileDrag: ar(),
    whileFocus: ar(),
    exit: ar()
  };
}
function wl(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ut(e, t) {
  wl(e.x, t.x), wl(e.y, t.y);
}
function _d(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
const ky = 1e-4, GA = 1 - ky, WA = 1 + ky, Iy = 0.01, UA = 0 - Iy, KA = 0 + Iy;
function St(e) {
  return e.max - e.min;
}
function YA(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Od(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Le(t.min, t.max, e.origin), e.scale = St(n) / St(t), e.translate = Le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= GA && e.scale <= WA || isNaN(e.scale)) && (e.scale = 1), (e.translate >= UA && e.translate <= KA || isNaN(e.translate)) && (e.translate = 0);
}
function ho(e, t, n, r) {
  Od(e.x, t.x, n.x, r ? r.originX : void 0), Od(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ld(e, t, n, r = 0) {
  const o = r ? Le(n.min, n.max, r) : n.min;
  e.min = o + t.min, e.max = e.min + St(t);
}
function XA(e, t, n, r) {
  Ld(e.x, t.x, n.x, r == null ? void 0 : r.x), Ld(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function Fd(e, t, n, r = 0) {
  const o = r ? Le(n.min, n.max, r) : n.min;
  e.min = t.min - o, e.max = e.min + St(t);
}
function Zs(e, t, n, r) {
  Fd(e.x, t.x, n.x, r == null ? void 0 : r.x), Fd(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function Vd(e, t, n, r, o) {
  return e -= t, e = qs(e, 1 / n, r), o !== void 0 && (e = qs(e, 1 / o, r)), e;
}
function qA(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (hn.test(t) && (t = parseFloat(t), t = Le(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = Le(s.min, s.max, r);
  e === s && (a -= t), e.min = Vd(e.min, t, n, a, o), e.max = Vd(e.max, t, n, a, o);
}
function $d(e, t, [n, r, o], s, i) {
  qA(e, t[n], t[r], t[o], t.scale, s, i);
}
const ZA = ["x", "scaleX", "originX"], JA = ["y", "scaleY", "originY"];
function Bd(e, t, n, r) {
  $d(e.x, t, ZA, n ? n.x : void 0, r ? r.x : void 0), $d(e.y, t, JA, n ? n.y : void 0, r ? r.y : void 0);
}
function zd(e) {
  return e.translate === 0 && e.scale === 1;
}
function _y(e) {
  return zd(e.x) && zd(e.y);
}
function Hd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function QA(e, t) {
  return Hd(e.x, t.x) && Hd(e.y, t.y);
}
function jd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Oy(e, t) {
  return jd(e.x, t.x) && jd(e.y, t.y);
}
function Gd(e) {
  return St(e.x) / St(e.y);
}
function Wd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function cn(e) {
  return [e("x"), e("y")];
}
function eD(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: p, skewX: h, skewY: v } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), p && (r += `rotateY(${p}deg) `), h && (r += `skewX(${h}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Ly = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], tD = Ly.length, Ud = (e) => typeof e == "string" ? parseFloat(e) : e, Kd = (e) => typeof e == "number" || oe.test(e);
function nD(e, t, n, r, o, s) {
  o ? (e.opacity = Le(0, n.opacity ?? 1, rD(r)), e.opacityExit = Le(t.opacity ?? 1, 0, oD(r))) : s && (e.opacity = Le(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < tD; i++) {
    const a = Ly[i];
    let l = Yd(t, a), c = Yd(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Kd(l) === Kd(c) ? (e[a] = Math.max(Le(Ud(l), Ud(c), r), 0), (hn.test(c) || hn.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = Le(t.rotate || 0, n.rotate || 0, r));
}
function Yd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const rD = /* @__PURE__ */ Fy(0, 0.5, Pv), oD = /* @__PURE__ */ Fy(0.5, 0.95, Ht);
function Fy(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ To(e, t, r));
}
function sD(e, t, n) {
  const r = ct(e) ? e : zr(e);
  return r.start(Ic("", r, t, n)), r.animation;
}
function Ao(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const iD = (e, t) => e.depth - t.depth;
class aD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    wc(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Gs(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(iD), this.isDirty = !1, this.children.forEach(t);
  }
}
function lD(e, t) {
  const n = xt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Kn(r), e(s - t));
  };
  return Ne.setup(r, !0), () => Kn(r);
}
function Ps(e) {
  return ct(e) ? e.get() : e;
}
class cD {
  constructor() {
    this.members = [];
  }
  add(t) {
    wc(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead)
        continue;
      const o = r.instance;
      (!o || o.isConnected === !1) && !r.snapshot && (Gs(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (Gs(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1 && ((n = o.instance) == null ? void 0 : n.isConnected) !== !1)
        return this.promote(o), !0;
    }
    return !1;
  }
  promote(t, n) {
    var o;
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.updateSnapshot(), t.scheduleRender();
      const { layoutDependency: s } = r.options, { layoutDependency: i } = t.options;
      (s === void 0 || s !== i) && (t.resumeFrom = r, n && (r.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (o = t.root) != null && o.isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, s, i;
      (r = (n = t.options).onExitComplete) == null || r.call(n), (i = (o = t.resumingFrom) == null ? void 0 : (s = o.options).onExitComplete) == null || i.call(s);
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
const Ms = {
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
}, fa = ["", "X", "Y", "Z"], uD = 1e3;
let dD = 0;
function pa(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Vy(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = oy(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ne, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Vy(r);
}
function $y({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = dD++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(hD), this.nodes.forEach(wD), this.nodes.forEach(xD), this.nodes.forEach(mD);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new aD());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new xc()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = $c(i) && !pA(i), this.instance = i;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let u, d = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        Ne.read(() => {
          d = window.innerWidth;
        }), e(i, () => {
          const h = window.innerWidth;
          h !== d && (d = h, this.root.updateBlockedByResize = !0, u && u(), u = lD(p, 250), Ms.hasAnimatedSinceResize && (Ms.hasAnimatedSinceResize = !1, this.nodes.forEach(Zd)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: d, hasRelativeLayoutChanged: p, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || TD, { onLayoutAnimationStart: m, onLayoutAnimationComplete: y } = c.getProps(), b = !this.targetLayout || !Oy(this.targetLayout, h), x = !d && p;
        if (this.options.layoutRoot || this.resumeFrom || x || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const w = {
            ...kc(v, "layout"),
            onPlay: m,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w), this.setAnimationOrigin(u, x);
        } else
          d || Zd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Kn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(SD), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vy(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") && (d.isLayoutDirty = !0), d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach(vD), this.nodes.forEach(Xd);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(qd);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(yD), this.nodes.forEach(bD), this.nodes.forEach(fD), this.nodes.forEach(pD)) : this.nodes.forEach(qd), this.clearAllSnapshots();
      const a = xt.now();
      lt.delta = mn(0, 1e3 / 60, a - lt.timestamp), lt.timestamp = a, lt.isProcessing = !0, oa.update.process(lt), oa.preRender.process(lt), oa.render.process(lt), lt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Fc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(gD), this.sharedNodes.forEach(CD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ne.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ne.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !St(this.snapshot.measuredBox.x) && !St(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Ze()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && this.instance) {
        const l = r(this.instance);
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
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !_y(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && this.instance && (a || lr(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), PD(l), {
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
        return Ze();
      const a = i.measureViewportBox();
      if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(MD))) {
        const { scroll: u } = this.root;
        u && (un(a.x, u.offset.x), un(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(i) {
      var l;
      const a = Ze();
      if (Ut(a, i), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: d, options: p } = u;
        u !== this.root && d && p.layoutScroll && (d.wasRoot && Ut(a, i), un(a.x, d.offset.x), un(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(i, a = !1, l) {
      var u, d;
      const c = l || Ze();
      Ut(c, i);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (un(c.x, -h.scroll.offset.x), un(c.y, -h.scroll.offset.y)), lr(h.latestValues) && Ts(c, h.latestValues, (u = h.layout) == null ? void 0 : u.layoutBox);
      }
      return lr(this.latestValues) && Ts(c, this.latestValues, (d = this.layout) == null ? void 0 : d.layoutBox), c;
    }
    removeTransform(i) {
      var l;
      const a = Ze();
      Ut(a, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!lr(u.latestValues))
          continue;
        let d;
        u.instance && (vl(u.latestValues) && u.updateSnapshot(), d = Ze(), Ut(d, u.measurePageBox())), Bd(a, u.latestValues, (l = u.snapshot) == null ? void 0 : l.layoutBox, d);
      }
      return lr(this.latestValues) && Bd(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== lt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(i || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!this.layout || !(u || d))
        return;
      this.resolvedRelativeTargetAt = lt.timestamp;
      const p = this.getClosestProjectingParent();
      p && this.linkedParentVersion !== p.layoutVersion && !p.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && p && p.layout ? this.createRelativeTarget(p, this.layout.layoutBox, p.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ze(), this.targetWithTransforms = Ze()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), XA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ut(this.target, this.layout.layoutBox), Sy(this.target, this.targetDelta)) : Ut(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? this.createRelativeTarget(p, this.target, p.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vl(this.parent.latestValues) || xy(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(i, a, l) {
      this.relativeParent = i, this.linkedParentVersion = i.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ze(), this.relativeTargetOrigin = Ze(), Zs(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Ut(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const i = this.getLead(), a = !!this.resumingFrom || this !== i;
      let l = !0;
      if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === lt.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      Ut(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      RA(this.layoutCorrected, this.treeScale, this.path, a), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = Ze());
      const { target: h } = i;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (_d(this.prevProjectionDelta.x, this.projectionDelta.x), _d(this.prevProjectionDelta.y, this.projectionDelta.y)), ho(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !Wd(this.projectionDelta.x, this.prevProjectionDelta.x) || !Wd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
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
      this.prevProjectionDelta = Nr(), this.projectionDelta = Nr(), this.projectionDeltaWithTransform = Nr();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Nr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const p = Ze(), h = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, m = h !== v, y = this.getStack(), b = !y || y.members.length <= 1, x = !!(m && !b && this.options.crossfade === !0 && !this.path.some(ED));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (S) => {
        const R = S / 1e3;
        Jd(d.x, i.x, R), Jd(d.y, i.y, R), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Zs(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), RD(this.relativeTarget, this.relativeTargetOrigin, p, R), w && QA(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = Ze()), Ut(w, this.relativeTarget)), m && (this.animationValues = u, nD(u, c, this.latestValues, R, x, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      var a, l, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (Kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ne.update(() => {
        Ms.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = zr(0)), this.motionValue.jump(0, !1), this.currentAnimation = sD(this.motionValue, [0, 1e3], {
          ...i,
          velocity: 0,
          isSync: !0,
          onUpdate: (u) => {
            this.mixTargetDelta(u), i.onUpdate && i.onUpdate(u);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(uD), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && By(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Ze();
          const d = St(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const p = St(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + p;
        }
        Ut(a, l), Ts(a, u), ho(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new cD()), this.sharedNodes.get(i).add(a);
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
      l.z && pa("z", i, c, this.animationValues);
      for (let u = 0; u < fa.length; u++)
        pa(`rotate${fa[u]}`, i, c, this.animationValues), pa(`skew${fa[u]}`, i, c, this.animationValues);
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
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
        this.needsReset = !1, i.visibility = "", i.opacity = "", i.pointerEvents = Ps(a == null ? void 0 : a.pointerEvents) || "", i.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, i.pointerEvents = Ps(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !lr(this.latestValues) && (i.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      i.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let d = eD(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (d = l(u, d)), i.transform = d;
      const { x: p, y: h } = this.projectionDelta;
      i.transformOrigin = `${p.origin * 100}% ${h.origin * 100}% 0`, c.animationValues ? i.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : i.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const v in bl) {
        if (u[v] === void 0)
          continue;
        const { correct: m, applyTo: y, isCSSVariable: b } = bl[v], x = d === "none" ? u[v] : m(u[v], c);
        if (y) {
          const w = y.length;
          for (let S = 0; S < w; S++)
            i[y[S]] = x;
        } else
          b ? this.options.visualElement.renderState.vars[v] = x : i[v] = x;
      }
      this.options.layoutId && (i.pointerEvents = c === this ? Ps(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(Xd), this.root.sharedNodes.clear();
    }
  };
}
function fD(e) {
  e.updateLayout();
}
function pD(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = t.source !== e.layout.source;
    if (s === "size")
      cn((d) => {
        const p = i ? t.measuredBox[d] : t.layoutBox[d], h = St(p);
        p.min = r[d].min, p.max = p.min + h;
      });
    else if (s === "x" || s === "y") {
      const d = s === "x" ? "y" : "x";
      wl(i ? t.measuredBox[d] : t.layoutBox[d], r[d]);
    } else By(s, t.layoutBox, r) && cn((d) => {
      const p = i ? t.measuredBox[d] : t.layoutBox[d], h = St(r[d]);
      p.max = p.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + h);
    });
    const a = Nr();
    ho(a, r, t.layoutBox);
    const l = Nr();
    i ? ho(l, e.applyTransform(o, !0), t.measuredBox) : ho(l, r, t.layoutBox);
    const c = !_y(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: p, layout: h } = d;
        if (p && h) {
          const v = e.options.layoutAnchor || void 0, m = Ze();
          Zs(m, t.layoutBox, p.layoutBox, v);
          const y = Ze();
          Zs(y, r, h.layoutBox, v), Oy(m, y) || (u = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = m, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function hD(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function mD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gD(e) {
  e.clearSnapshot();
}
function Xd(e) {
  e.clearMeasurements();
}
function vD(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function qd(e) {
  e.isLayoutDirty = !1;
}
function yD(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function bD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Zd(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function wD(e) {
  e.resolveTargetDelta();
}
function xD(e) {
  e.calcProjection();
}
function SD(e) {
  e.resetSkewAndRotation();
}
function CD(e) {
  e.removeLeadSnapshot();
}
function Jd(e, t, n) {
  e.translate = Le(t.translate, 0, n), e.scale = Le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Qd(e, t, n, r) {
  e.min = Le(t.min, n.min, r), e.max = Le(t.max, n.max, r);
}
function RD(e, t, n, r) {
  Qd(e.x, t.x, n.x, r), Qd(e.y, t.y, n.y, r);
}
function ED(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const TD = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ef = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), tf = ef("applewebkit/") && !ef("chrome/") ? Math.round : Ht;
function nf(e) {
  e.min = tf(e.min), e.max = tf(e.max);
}
function PD(e) {
  nf(e.x), nf(e.y);
}
function By(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !YA(Gd(t), Gd(n), 0.2);
}
function MD(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const AD = $y({
  attachResizeListener: (e, t) => Ao(e, "resize", t),
  measureScroll: () => {
    var e, t;
    return {
      x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), ha = {
  current: void 0
}, zy = $y({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ha.current) {
      const e = new AD({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ha.current = e;
    }
    return ha.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Hy = tn({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function DD(e = !0) {
  const t = je(bc);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = qb();
  Te(() => {
    if (e)
      return o(s);
  }, [e]);
  const i = Ge(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const jy = tn({ strict: !1 }), rf = {
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
let of = !1;
function ND() {
  if (of)
    return;
  const e = {};
  for (const t in rf)
    e[t] = {
      isEnabled: (n) => rf[t].some((r) => !!n[r])
    };
  yy(e), of = !0;
}
function Gy() {
  return ND(), wA();
}
function kD(e) {
  const t = Gy();
  for (const n in e)
    t[n] = {
      ...t[n],
      ...e[n]
    };
  yy(t);
}
const ID = /* @__PURE__ */ new Set([
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
function Js(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ID.has(e);
}
let Wy = (e) => !Js(e);
function _D(e) {
  typeof e == "function" && (Wy = (t) => t.startsWith("on") ? !Js(t) : e(t));
}
try {
  _D(require("@emotion/is-prop-valid").default);
} catch {
}
function OD(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || ct(e[o]) || (Wy(o) || n === !0 && Js(o) || !t && !Js(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
const _i = /* @__PURE__ */ tn({});
function LD(e, t) {
  if (Ii(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Mo(n) ? n : void 0,
      animate: Mo(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function FD(e) {
  const { initial: t, animate: n } = LD(e, je(_i));
  return Pe(() => ({ initial: t, animate: n }), [sf(t), sf(n)]);
}
function sf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Gc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Uy(e, t, n) {
  for (const r in t)
    !ct(t[r]) && !Ey(r, n) && (e[r] = t[r]);
}
function VD({ transformTemplate: e }, t) {
  return Pe(() => {
    const n = Gc();
    return Hc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function $D(e, t) {
  const n = e.style || {}, r = {};
  return Uy(r, n, e), Object.assign(r, VD(e, t)), r;
}
function BD(e, t) {
  const n = {}, r = $D(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Ky = () => ({
  ...Gc(),
  attrs: {}
});
function zD(e, t, n, r) {
  const o = Pe(() => {
    const s = Ky();
    return Ty(s, t, My(r), e.transformTemplate, e.style), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Uy(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
const HD = [
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
function Wc(e) {
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
      !!(HD.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function jD(e, t, n, { latestValues: r }, o, s = !1, i) {
  const l = (i ?? Wc(e) ? zD : BD)(t, r, o, e), c = OD(t, typeof e == "string", s), u = e !== Uf ? { ...c, ...l, ref: n } : {}, { children: d } = t, p = Pe(() => ct(d) ? d.get() : d, [d]);
  return Ns(e, {
    ...u,
    children: p
  });
}
function GD({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: WD(n, r, o, e),
    renderState: t()
  };
}
function WD(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const p in s)
    o[p] = Ps(s[p]);
  let { initial: i, animate: a } = e;
  const l = Ii(e), c = gy(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? a : i;
  if (d && typeof d != "boolean" && !ki(d)) {
    const p = Array.isArray(d) ? d : [d];
    for (let h = 0; h < p.length; h++) {
      const v = _c(e, p[h]);
      if (v) {
        const { transitionEnd: m, transition: y, ...b } = v;
        for (const x in b) {
          let w = b[x];
          if (Array.isArray(w)) {
            const S = u ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (o[x] = w);
        }
        for (const x in m)
          o[x] = m[x];
      }
    }
  }
  return o;
}
const Yy = (e) => (t, n) => {
  const r = je(_i), o = je(bc), s = () => GD(e, t, r, o);
  return n ? s() : HP(s);
}, UD = /* @__PURE__ */ Yy({
  scrapeMotionValuesFromProps: jc,
  createRenderState: Gc
}), KD = /* @__PURE__ */ Yy({
  scrapeMotionValuesFromProps: Ay,
  createRenderState: Ky
}), YD = Symbol.for("motionComponentSymbol");
function XD(e, t, n) {
  const r = xe(n);
  Kf(() => {
    r.current = n;
  });
  const o = xe(null);
  return Ge((s) => {
    var a;
    s && ((a = e.onMount) == null || a.call(e, s));
    const i = r.current;
    if (typeof i == "function")
      if (s) {
        const l = i(s);
        typeof l == "function" && (o.current = l);
      } else o.current ? (o.current(), o.current = null) : i(s);
    else i && (i.current = s);
    t && (s ? t.mount(s) : t.unmount());
  }, [t]);
}
const Xy = tn({});
function Pr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function qD(e, t, n, r, o, s) {
  var w, S;
  const { visualElement: i } = je(_i), a = je(jy), l = je(bc), c = je(Hy), u = c.reducedMotion, d = c.skipAnimations, p = xe(null), h = xe(!1);
  r = r || a.renderer, !p.current && r && (p.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: u,
    skipAnimations: d,
    isSVG: s
  }), h.current && p.current && (p.current.manuallyAnimateOnMount = !0));
  const v = p.current, m = je(Xy);
  v && !v.projection && o && (v.type === "html" || v.type === "svg") && ZD(p.current, n, o, m);
  const y = xe(!1);
  Kf(() => {
    v && y.current && v.update(n, l);
  });
  const b = n[ry], x = xe(!!b && typeof window < "u" && !((w = window.MotionHandoffIsComplete) != null && w.call(window, b)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, b)));
  return GP(() => {
    h.current = !0, v && (y.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), x.current && v.animationState && v.animationState.animateChanges());
  }), Te(() => {
    v && (!x.current && v.animationState && v.animationState.animateChanges(), x.current && (queueMicrotask(() => {
      var R;
      (R = window.MotionHandoffMarkAsComplete) == null || R.call(window, b);
    }), x.current = !1), v.enteringChildren = void 0);
  }), v;
}
function ZD(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutAnchor: u, layoutCrossfade: d } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : qy(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Pr(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    crossfade: d,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: u
  });
}
function qy(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : qy(e.parent);
}
function ma(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
  r && kD(r);
  const s = n ? n === "svg" : Wc(e), i = s ? KD : UD;
  function a(c, u) {
    let d;
    const p = {
      ...je(Hy),
      ...c,
      layoutId: JD(c)
    }, { isStatic: h } = p, v = FD(c), m = i(c, h);
    if (!h && typeof window < "u") {
      QD(p, r);
      const y = eN(p);
      d = y.MeasureLayout, v.visualElement = qD(e, m, p, o, y.ProjectionNode, s);
    }
    return W(_i.Provider, { value: v, children: [d && v.visualElement ? g(d, { visualElement: v.visualElement, ...p }) : null, jD(e, c, XD(m, v.visualElement, u), m, h, t, s)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = Ll(a);
  return l[YD] = e, l;
}
function JD({ layoutId: e }) {
  const t = je(mv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function QD(e, t) {
  const n = je(jy).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? qr(!1, r, "lazy-strict-mode") : En(!1, r, "lazy-strict-mode");
  }
}
function eN(e) {
  const t = Gy(), { drag: n, layout: r } = t;
  if (!n && !r)
    return {};
  const o = { ...n, ...r };
  return {
    MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
function tN(e, t) {
  if (typeof Proxy > "u")
    return ma;
  const n = /* @__PURE__ */ new Map(), r = (s, i) => ma(s, i, e, t), o = (s, i) => (process.env.NODE_ENV !== "production" && Sc(!1, "motion() is deprecated. Use motion.create() instead."), r(s, i));
  return new Proxy(o, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? r : (n.has(i) || n.set(i, ma(i, void 0, e, t)), n.get(i))
  });
}
const nN = (e, t) => t.isSVG ?? Wc(e) ? new FA(t) : new NA(t, {
  allowProjection: e !== Uf
});
class rN extends nr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = HA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ki(t) && (this.unmountControls = t.subscribe(this.node));
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
let oN = 0;
class sN extends nr {
  constructor() {
    super(...arguments), this.id = oN++, this.isExitComplete = !1;
  }
  update() {
    var s;
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: i, custom: a } = this.node.getProps();
        if (typeof i == "string") {
          const l = fr(this.node, i, a);
          if (l) {
            const { transition: c, transitionEnd: u, ...d } = l;
            for (const p in d)
              (s = this.node.getValue(p)) == null || s.jump(d[p]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => {
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
const iN = {
  animation: {
    Feature: rN
  },
  exit: {
    Feature: sN
  }
};
function Yo(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const aN = (e) => (t) => Vc(t) && e(t, Yo(t));
function mo(e, t, n, r) {
  return Ao(e, t, aN(n), r);
}
const Zy = ({ current: e }) => e ? e.ownerDocument.defaultView : null, af = (e, t) => Math.abs(e - t);
function lN(e, t) {
  const n = af(e.x, t.x), r = af(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const lf = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Jy {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: s = !1, distanceThreshold: i = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (h) => {
      this.handleScroll(h.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ds(this.lastRawMoveEventInfo, this.transformPagePoint));
      const h = ga(this.lastMoveEventInfo, this.history), v = this.startEvent !== null, m = lN(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!v && !m)
        return;
      const { point: y } = h, { timestamp: b } = lt;
      this.history.push({ ...y, timestamp: b });
      const { onStart: x, onMove: w } = this.handlers;
      v || (x && x(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, v) => {
      this.lastMoveEvent = h, this.lastRawMoveEventInfo = v, this.lastMoveEventInfo = ds(v, this.transformPagePoint), Ne.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, v) => {
      this.end();
      const { onEnd: m, onSessionEnd: y, resumeAnimation: b } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = ga(h.type === "pointercancel" ? this.lastMoveEventInfo : ds(v, this.transformPagePoint), this.history);
      this.startEvent && m && m(h, x), y && y(h, x);
    }, !Vc(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = i, this.contextWindow = o || window;
    const l = Yo(t), c = ds(l, this.transformPagePoint), { point: u } = c, { timestamp: d } = lt;
    this.history = [{ ...u, timestamp: d }];
    const { onSessionStart: p } = n;
    p && p(t, ga(c, this.history)), this.removeListeners = Wo(mo(this.contextWindow, "pointermove", this.handlePointerMove), mo(this.contextWindow, "pointerup", this.handlePointerUp), mo(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      (lf.has(r.overflowX) || lf.has(r.overflowY)) && this.scrollPositions.set(n, {
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
    const r = t === window, o = r ? { x: window.scrollX, y: window.scrollY } : {
      x: t.scrollLeft,
      y: t.scrollTop
    }, s = { x: o.x - n.x, y: o.y - n.y };
    s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x, this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x, this.history[0].y -= s.y), this.scrollPositions.set(t, o), Ne.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Kn(this.updatePoint);
  }
}
function ds(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ga({ point: e }, t) {
  return {
    point: e,
    delta: cf(e, Qy(t)),
    offset: cf(e, cN(t)),
    velocity: uN(t, 0.1)
  };
}
function cN(e) {
  return e[0];
}
function Qy(e) {
  return e[e.length - 1];
}
function uN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Qy(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Pt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && o.timestamp - r.timestamp > /* @__PURE__ */ Pt(t) * 2 && (r = e[1]);
  const s = /* @__PURE__ */ Bt(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function dN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Le(n, e, r.max) : Math.min(e, n)), e;
}
function uf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function fN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: uf(e.x, n, o),
    y: uf(e.y, t, r)
  };
}
function df(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function pN(e, t) {
  return {
    x: df(e.x, t.x),
    y: df(e.y, t.y)
  };
}
function hN(e, t) {
  let n = 0.5;
  const r = St(e), o = St(t);
  return o > r ? n = /* @__PURE__ */ To(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ To(e.min, e.max - o, t.min)), mn(0, 1, n);
}
function mN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const xl = 0.35;
function gN(e = xl) {
  return e === !1 ? e = 0 : e === !0 && (e = xl), {
    x: ff(e, "left", "right"),
    y: ff(e, "top", "bottom")
  };
}
function ff(e, t, n) {
  return {
    min: pf(e, t),
    max: pf(e, n)
  };
}
function pf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const vN = /* @__PURE__ */ new WeakMap();
class yN {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ze(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (d) => {
      n && this.snapToCursor(Yo(d).point), this.stopAnimation();
    }, i = (d, p) => {
      const { drag: h, dragPropagation: v, onDragStart: m } = this.getProps();
      if (h && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = qM(h), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), cn((b) => {
        let x = this.getAxisMotionValue(b).get() || 0;
        if (hn.test(x)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const S = w.layout.layoutBox[b];
            S && (x = St(S) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[b] = x;
      }), m && Ne.update(() => m(d, p), !1, !0), fl(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (d, p) => {
      this.latestPointerEvent = d, this.latestPanInfo = p;
      const { dragPropagation: h, dragDirectionLock: v, onDirectionLock: m, onDrag: y } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: b } = p;
      if (v && this.currentDirection === null) {
        this.currentDirection = wN(b), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, b), this.updateAxis("y", p.point, b), this.visualElement.render(), y && Ne.update(() => y(d, p), !1, !0);
    }, l = (d, p) => {
      this.latestPointerEvent = d, this.latestPanInfo = p, this.stop(d, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => {
      const { dragSnapToOrigin: d } = this.getProps();
      (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Jy(t, {
      onSessionStart: s,
      onStart: i,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: Zy(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, o = n || this.latestPanInfo, s = this.isDragging;
    if (this.cancel(), !s || !o || !r)
      return;
    const { velocity: i } = o;
    this.startAnimation(i);
    const { onDragEnd: a } = this.getProps();
    a && Ne.postRender(() => a(r, o));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
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
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !fs(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = dN(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, o = this.constraints;
    t && Pr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = fN(r.layoutBox, t) : this.constraints = !1, this.elastic = gN(n), o !== this.constraints && !Pr(t) && r && this.constraints && !this.hasMutatedConstraints && cn((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = mN(r.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pr(t))
      return !1;
    const r = t.current;
    En(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = EA(r, o.root, this.visualElement.getTransformPagePoint());
    let i = pN(o.layout.layoutBox, s);
    if (n) {
      const a = n(SA(i));
      this.hasMutatedConstraints = !!a, a && (i = wy(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = cn((u) => {
      if (!fs(u, n, this.currentDirection))
        return;
      let d = l && l[u] || {};
      (i === !0 || i === u) && (d = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, h = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: p,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, v);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return fl(this.visualElement, t), r.start(Ic(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    cn((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    cn((n) => {
      const { drag: r } = this.getProps();
      if (!fs(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n], l = s.get() || 0;
        s.set(t[n] - Le(i, a, 0.5) + l);
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
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Pr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    cn((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = hN({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), cn((i) => {
      if (!fs(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(Le(l, c, o[i]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    vN.set(this.visualElement, this);
    const t = this.visualElement.current, n = mo(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps(), p = c.target, h = p !== t && nA(p);
      u && d && !h && this.start(c);
    });
    let r;
    const o = () => {
      const { dragConstraints: c } = this.getProps();
      Pr(c) && c.current && (this.constraints = this.resolveRefConstraints(), r || (r = bN(t, c.current, () => this.scalePositionWithinConstraints())));
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), Ne.read(o);
    const a = Ao(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (cn((d) => {
        const p = this.getAxisMotionValue(d);
        p && (this.originPoint[d] += c[d].translate, p.set(p.get() + c[d].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), i(), l && l(), r && r();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = xl, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function hf(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function bN(e, t, n) {
  const r = Sd(e, hf(n)), o = Sd(t, hf(n));
  return () => {
    r(), o();
  };
}
function fs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function wN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class xN extends nr {
  constructor(t) {
    super(t), this.removeGroupControls = Ht, this.removeListeners = Ht, this.controls = new yN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ht;
  }
  update() {
    const { dragControls: t } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    t !== n && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const va = (e) => (t, n) => {
  e && Ne.update(() => e(t, n), !1, !0);
};
class SN extends nr {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ht;
  }
  onPointerDown(t) {
    this.session = new Jy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Zy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: va(t),
      onStart: va(n),
      onMove: va(r),
      onEnd: (s, i) => {
        delete this.session, o && Ne.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = mo(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let ya = !1;
class CN extends Zb {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    s && (n.group && n.group.add(s), r && r.register && o && r.register(s), ya && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Ms.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, { projection: i } = r;
    return i && (i.isPresent = s, t.layoutDependency !== n && i.setOptions({
      ...i.options,
      layoutDependency: n
    }), ya = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || Ne.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props, { projection: r } = t;
    r && (r.options.layoutAnchor = n, r.root.didUpdate(), Fc.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    ya = !0, o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function eb(e) {
  const [t, n] = DD(), r = je(mv);
  return g(CN, { ...e, layoutGroup: r, switchLayoutGroup: je(Xy), isPresent: t, safeToRemove: n });
}
const RN = {
  pan: {
    Feature: SN
  },
  drag: {
    Feature: xN,
    ProjectionNode: zy,
    MeasureLayout: eb
  }
};
function mf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && Ne.postRender(() => s(t, Yo(t)));
}
class EN extends nr {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = JM(t, (n, r) => (mf(this.node, r, "Start"), (o) => mf(this.node, o, "End"))));
  }
  unmount() {
  }
}
class TN extends nr {
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
    this.unmount = Wo(Ao(this.node.current, "focus", () => this.onFocus()), Ao(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function gf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && Ne.postRender(() => s(t, Yo(t)));
}
class PN extends nr {
  mount() {
    const { current: t } = this.node;
    if (!t)
      return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = oA(t, (o, s) => (gf(this.node, s, "Start"), (i, { success: a }) => gf(this.node, i, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: (r == null ? void 0 : r.tap) === !1
    });
  }
  unmount() {
  }
}
const Sl = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), MN = (e) => {
  const t = Sl.get(e.target);
  t && t(e);
}, AN = (e) => {
  e.forEach(MN);
};
function DN({ root: e, ...t }) {
  const n = e || document;
  ba.has(n) || ba.set(n, {});
  const r = ba.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(AN, { root: e, ...t })), r[o];
}
function NN(e, t, n) {
  const r = DN(t);
  return Sl.set(e, n), r.observe(e), () => {
    Sl.delete(e), r.unobserve(e);
  };
}
const kN = {
  some: 0,
  all: 1
};
class IN extends nr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : kN[o]
    }, a = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: p } = this.node.getProps(), h = u ? d : p;
      h && h(c);
    };
    this.stopObserver = NN(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(_N(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function _N({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const ON = {
  inView: {
    Feature: IN
  },
  tap: {
    Feature: PN
  },
  focus: {
    Feature: TN
  },
  hover: {
    Feature: EN
  }
}, LN = {
  layout: {
    ProjectionNode: zy,
    MeasureLayout: eb
  }
}, FN = {
  ...iN,
  ...ON,
  ...RN,
  ...LN
}, VN = /* @__PURE__ */ tN(FN, nN), tb = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Mt,
  {
    ref: n,
    className: J(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e
    ),
    ...t
  }
));
tb.displayName = Mt.displayName;
const nb = ({
  title: e = "Command Palette",
  description: t = "Search for commands",
  commandKey: n,
  children: r,
  ...o
}) => /* @__PURE__ */ g(nP, { ...o, children: /* @__PURE__ */ W(
  tv,
  {
    className: "overflow-hidden p-0 shadow-lg",
    style: { top: "25%", "--tw-translate-y": "0px" },
    hideClose: !0,
    children: [
      /* @__PURE__ */ W(nv, { className: "sr-only", children: [
        /* @__PURE__ */ g(rv, { children: e }),
        /* @__PURE__ */ g(ov, { children: t })
      ] }),
      /* @__PURE__ */ g(tb, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }, n)
    ]
  }
) }), Uc = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g("div", { className: "flex items-center px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ g(
  Mt.Input,
  {
    ref: n,
    className: J(
      "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t
  }
) }));
Uc.displayName = Mt.Input.displayName;
const Kc = f.forwardRef(({ className: e, ...t }, n) => {
  const r = f.useRef(null), [o, s] = f.useState(void 0);
  return f.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const a = new ResizeObserver(([l]) => {
      s(l.contentRect.height);
    });
    return a.observe(i), () => a.disconnect();
  }, []), /* @__PURE__ */ g(
    VN.div,
    {
      animate: { height: o },
      transition: { duration: 0.1, ease: "easeInOut" },
      style: { overflow: "hidden" },
      children: /* @__PURE__ */ g("div", { ref: r, children: /* @__PURE__ */ g(
        Mt.List,
        {
          ref: n,
          className: J("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
          ...t
        }
      ) })
    }
  );
});
Kc.displayName = Mt.List.displayName;
const Yc = f.forwardRef((e, t) => /* @__PURE__ */ g(
  Mt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Yc.displayName = Mt.Empty.displayName;
const Qs = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Mt.Group,
  {
    ref: n,
    className: J(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e
    ),
    ...t
  }
));
Qs.displayName = Mt.Group.displayName;
const rb = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Mt.Separator,
  {
    ref: n,
    className: J("-mx-1 h-px bg-border", e),
    ...t
  }
));
rb.displayName = Mt.Separator.displayName;
const ei = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Mt.Item,
  {
    ref: n,
    className: J(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
ei.displayName = Mt.Item.displayName;
const ob = ({ className: e, ...t }) => /* @__PURE__ */ g(
  "span",
  {
    className: J(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      e
    ),
    ...t
  }
);
ob.displayName = "CommandShortcut";
const sb = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g("div", { "data-slot": "table-container", className: "relative w-full overflow-auto", children: /* @__PURE__ */ g(
  "table",
  {
    ref: n,
    "data-slot": "table",
    className: J("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
sb.displayName = "Table";
const ib = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g("thead", { ref: n, "data-slot": "table-header", className: J("[&_tr]:border-b", e), ...t }));
ib.displayName = "TableHeader";
const ab = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "tbody",
  {
    ref: n,
    "data-slot": "table-body",
    className: J("[&_tr:last-child]:border-0", e),
    ...t
  }
));
ab.displayName = "TableBody";
const $N = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "tfoot",
  {
    ref: n,
    "data-slot": "table-footer",
    className: J("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
    ...t
  }
));
$N.displayName = "TableFooter";
const go = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "tr",
  {
    ref: n,
    "data-slot": "table-row",
    className: J(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      e
    ),
    ...t
  }
));
go.displayName = "TableRow";
const lb = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "th",
  {
    ref: n,
    "data-slot": "table-head",
    className: J(
      "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
lb.displayName = "TableHead";
const ti = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "td",
  {
    ref: n,
    "data-slot": "table-cell",
    className: J(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
ti.displayName = "TableCell";
const BN = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "caption",
  {
    ref: n,
    "data-slot": "table-caption",
    className: J("text-muted-foreground mt-4 text-sm", e),
    ...t
  }
));
BN.displayName = "TableCaption";
function zN(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const HN = (e) => {
  switch (e) {
    case "success":
      return WN;
    case "info":
      return KN;
    case "warning":
      return UN;
    case "error":
      return YN;
    default:
      return null;
  }
}, jN = Array(12).fill(0), GN = ({ visible: e, className: t }) => /* @__PURE__ */ j.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ j.createElement("div", {
  className: "sonner-spinner"
}, jN.map((n, r) => /* @__PURE__ */ j.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), WN = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), UN = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), KN = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), YN = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ j.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), XN = /* @__PURE__ */ j.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ j.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ j.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), qN = () => {
  const [e, t] = j.useState(document.hidden);
  return j.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Cl = 1;
class ZN {
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
      const { message: r, ...o } = t, s = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Cl++, i = this.toasts.find((l) => l.id === s), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), i ? this.toasts = this.toasts.map((l) => l.id === s ? (this.publish({
        ...l,
        ...t,
        id: s,
        title: r
      }), {
        ...l,
        ...t,
        id: s,
        dismissible: a,
        title: r
      }) : l) : this.addToast({
        title: r,
        ...o,
        dismissible: a,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((n) => n({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({
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
      let r;
      n.loading !== void 0 && (r = this.create({
        ...n,
        promise: t,
        type: "loading",
        message: n.loading,
        description: typeof n.description != "function" ? n.description : void 0
      }));
      const o = Promise.resolve(t instanceof Function ? t() : t);
      let s = r !== void 0, i;
      const a = o.then(async (c) => {
        if (i = [
          "resolve",
          c
        ], j.isValidElement(c))
          s = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (QN(c) && !c.ok) {
          s = !1;
          const d = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, p = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, v = typeof d == "object" && !j.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...v
          });
        } else if (c instanceof Error) {
          s = !1;
          const d = typeof n.error == "function" ? await n.error(c) : n.error, p = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof d == "object" && !j.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...v
          });
        } else if (n.success !== void 0) {
          s = !1;
          const d = typeof n.success == "function" ? await n.success(c) : n.success, p = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof d == "object" && !j.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "success",
            description: p,
            ...v
          });
        }
      }).catch(async (c) => {
        if (i = [
          "reject",
          c
        ], n.error !== void 0) {
          s = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, d = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof u == "object" && !j.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: d,
            ...h
          });
        }
      }).finally(() => {
        s && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, u) => a.then(() => i[0] === "reject" ? u(i[1]) : c(i[1])).catch(u));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || Cl++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Tt = new ZN(), JN = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Cl++;
  return Tt.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, QN = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", ek = JN, tk = () => Tt.toasts, nk = () => Tt.getActiveToasts();
Object.assign(ek, {
  success: Tt.success,
  info: Tt.info,
  warning: Tt.warning,
  error: Tt.error,
  custom: Tt.custom,
  message: Tt.message,
  promise: Tt.promise,
  dismiss: Tt.dismiss,
  loading: Tt.loading
}, {
  getHistory: tk,
  getToasts: nk
});
zN("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function ps(e) {
  return e.label !== void 0;
}
const rk = 3, ok = "24px", sk = "16px", vf = 4e3, ik = 356, ak = 14, lk = 45, ck = 200;
function ln(...e) {
  return e.filter(Boolean).join(" ");
}
function uk(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const dk = (e) => {
  var t, n, r, o, s, i, a, l, c;
  const { invert: u, toast: d, unstyled: p, interacting: h, setHeights: v, visibleToasts: m, heights: y, index: b, toasts: x, expanded: w, removeToast: S, defaultRichColors: R, closeButton: P, style: E, cancelButtonStyle: T, actionButtonStyle: _, className: N = "", descriptionClassName: O = "", duration: K, position: Z, gap: X, expandByDefault: U, classNames: B, icons: q, closeButtonAriaLabel: G = "Close toast" } = e, [L, I] = j.useState(null), [ee, C] = j.useState(null), [M, A] = j.useState(!1), [D, V] = j.useState(!1), [z, $] = j.useState(!1), [F, Y] = j.useState(!1), [ne, te] = j.useState(!1), [he, pe] = j.useState(0), [ze, Ee] = j.useState(0), We = j.useRef(d.duration || K || vf), Gt = j.useRef(null), Ue = j.useRef(null), Et = b === 0, dt = b + 1 <= m, Oe = d.type, st = d.dismissible !== !1, xr = d.className || "", ro = d.descriptionClassName || "", Pn = j.useMemo(() => y.findIndex((ae) => ae.toastId === d.id) || 0, [
    y,
    d.id
  ]), _t = j.useMemo(() => {
    var ae;
    return (ae = d.closeButton) != null ? ae : P;
  }, [
    d.closeButton,
    P
  ]), Ot = j.useMemo(() => d.duration || K || vf, [
    d.duration,
    K
  ]), He = j.useRef(0), Lt = j.useRef(0), vt = j.useRef(0), De = j.useRef(null), [Ft, on] = Z.split("-"), Vt = j.useMemo(() => y.reduce((ae, Me, Se) => Se >= Pn ? ae : ae + Me.height, 0), [
    y,
    Pn
  ]), tt = qN(), Mn = d.invert || u, ke = Oe === "loading";
  Lt.current = j.useMemo(() => Pn * X + Vt, [
    Pn,
    Vt
  ]), j.useEffect(() => {
    We.current = Ot;
  }, [
    Ot
  ]), j.useEffect(() => {
    A(!0);
  }, []), j.useEffect(() => {
    const ae = Ue.current;
    if (ae) {
      const Me = ae.getBoundingClientRect().height;
      return Ee(Me), v((Se) => [
        {
          toastId: d.id,
          height: Me,
          position: d.position
        },
        ...Se
      ]), () => v((Se) => Se.filter((Ce) => Ce.toastId !== d.id));
    }
  }, [
    v,
    d.id
  ]), j.useLayoutEffect(() => {
    if (!M) return;
    const ae = Ue.current, Me = ae.style.height;
    ae.style.height = "auto";
    const Se = ae.getBoundingClientRect().height;
    ae.style.height = Me, Ee(Se), v((Ce) => Ce.find((_e) => _e.toastId === d.id) ? Ce.map((_e) => _e.toastId === d.id ? {
      ..._e,
      height: Se
    } : _e) : [
      {
        toastId: d.id,
        height: Se,
        position: d.position
      },
      ...Ce
    ]);
  }, [
    M,
    d.title,
    d.description,
    v,
    d.id,
    d.jsx,
    d.action,
    d.cancel
  ]);
  const Dt = j.useCallback(() => {
    V(!0), pe(Lt.current), v((ae) => ae.filter((Me) => Me.toastId !== d.id)), setTimeout(() => {
      S(d);
    }, ck);
  }, [
    d,
    S,
    v,
    Lt
  ]);
  j.useEffect(() => {
    if (d.promise && Oe === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let ae;
    return w || h || tt ? (() => {
      if (vt.current < He.current) {
        const Ce = (/* @__PURE__ */ new Date()).getTime() - He.current;
        We.current = We.current - Ce;
      }
      vt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      We.current !== 1 / 0 && (He.current = (/* @__PURE__ */ new Date()).getTime(), ae = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), Dt();
      }, We.current));
    })(), () => clearTimeout(ae);
  }, [
    w,
    h,
    d,
    Oe,
    tt,
    Dt
  ]), j.useEffect(() => {
    d.delete && (Dt(), d.onDismiss == null || d.onDismiss.call(d, d));
  }, [
    Dt,
    d.delete
  ]);
  function rr() {
    var ae;
    if (q != null && q.loading) {
      var Me;
      return /* @__PURE__ */ j.createElement("div", {
        className: ln(B == null ? void 0 : B.loader, d == null || (Me = d.classNames) == null ? void 0 : Me.loader, "sonner-loader"),
        "data-visible": Oe === "loading"
      }, q.loading);
    }
    return /* @__PURE__ */ j.createElement(GN, {
      className: ln(B == null ? void 0 : B.loader, d == null || (ae = d.classNames) == null ? void 0 : ae.loader),
      visible: Oe === "loading"
    });
  }
  const or = d.icon || (q == null ? void 0 : q[Oe]) || HN(Oe);
  var Ie, nt;
  return /* @__PURE__ */ j.createElement("li", {
    tabIndex: 0,
    ref: Ue,
    className: ln(N, xr, B == null ? void 0 : B.toast, d == null || (t = d.classNames) == null ? void 0 : t.toast, B == null ? void 0 : B.default, B == null ? void 0 : B[Oe], d == null || (n = d.classNames) == null ? void 0 : n[Oe]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ie = d.richColors) != null ? Ie : R,
    "data-styled": !(d.jsx || d.unstyled || p),
    "data-mounted": M,
    "data-promise": !!d.promise,
    "data-swiped": ne,
    "data-removed": D,
    "data-visible": dt,
    "data-y-position": Ft,
    "data-x-position": on,
    "data-index": b,
    "data-front": Et,
    "data-swiping": z,
    "data-dismissible": st,
    "data-type": Oe,
    "data-invert": Mn,
    "data-swipe-out": F,
    "data-swipe-direction": ee,
    "data-expanded": !!(w || U && M),
    "data-testid": d.testId,
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": x.length - b,
      "--offset": `${D ? he : Lt.current}px`,
      "--initial-height": U ? "auto" : `${ze}px`,
      ...E,
      ...d.style
    },
    onDragEnd: () => {
      $(!1), I(null), De.current = null;
    },
    onPointerDown: (ae) => {
      ae.button !== 2 && (ke || !st || (Gt.current = /* @__PURE__ */ new Date(), pe(Lt.current), ae.target.setPointerCapture(ae.pointerId), ae.target.tagName !== "BUTTON" && ($(!0), De.current = {
        x: ae.clientX,
        y: ae.clientY
      })));
    },
    onPointerUp: () => {
      var ae, Me, Se;
      if (F || !st) return;
      De.current = null;
      const Ce = Number(((ae = Ue.current) == null ? void 0 : ae.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Ke = Number(((Me = Ue.current) == null ? void 0 : Me.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), _e = (/* @__PURE__ */ new Date()).getTime() - ((Se = Gt.current) == null ? void 0 : Se.getTime()), ye = L === "x" ? Ce : Ke, yt = Math.abs(ye) / _e;
      if (Math.abs(ye) >= lk || yt > 0.11) {
        pe(Lt.current), d.onDismiss == null || d.onDismiss.call(d, d), C(L === "x" ? Ce > 0 ? "right" : "left" : Ke > 0 ? "down" : "up"), Dt(), Y(!0);
        return;
      } else {
        var Fe, Ve;
        (Fe = Ue.current) == null || Fe.style.setProperty("--swipe-amount-x", "0px"), (Ve = Ue.current) == null || Ve.style.setProperty("--swipe-amount-y", "0px");
      }
      te(!1), $(!1), I(null);
    },
    onPointerMove: (ae) => {
      var Me, Se, Ce;
      if (!De.current || !st || ((Me = window.getSelection()) == null ? void 0 : Me.toString().length) > 0) return;
      const _e = ae.clientY - De.current.y, ye = ae.clientX - De.current.x;
      var yt;
      const Fe = (yt = e.swipeDirections) != null ? yt : uk(Z);
      !L && (Math.abs(ye) > 1 || Math.abs(_e) > 1) && I(Math.abs(ye) > Math.abs(_e) ? "x" : "y");
      let Ve = {
        x: 0,
        y: 0
      };
      const sn = ($e) => 1 / (1.5 + Math.abs($e) / 20);
      if (L === "y") {
        if (Fe.includes("top") || Fe.includes("bottom"))
          if (Fe.includes("top") && _e < 0 || Fe.includes("bottom") && _e > 0)
            Ve.y = _e;
          else {
            const $e = _e * sn(_e);
            Ve.y = Math.abs($e) < Math.abs(_e) ? $e : _e;
          }
      } else if (L === "x" && (Fe.includes("left") || Fe.includes("right")))
        if (Fe.includes("left") && ye < 0 || Fe.includes("right") && ye > 0)
          Ve.x = ye;
        else {
          const $e = ye * sn(ye);
          Ve.x = Math.abs($e) < Math.abs(ye) ? $e : ye;
        }
      (Math.abs(Ve.x) > 0 || Math.abs(Ve.y) > 0) && te(!0), (Se = Ue.current) == null || Se.style.setProperty("--swipe-amount-x", `${Ve.x}px`), (Ce = Ue.current) == null || Ce.style.setProperty("--swipe-amount-y", `${Ve.y}px`);
    }
  }, _t && !d.jsx && Oe !== "loading" ? /* @__PURE__ */ j.createElement("button", {
    "aria-label": G,
    "data-disabled": ke,
    "data-close-button": !0,
    onClick: ke || !st ? () => {
    } : () => {
      Dt(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: ln(B == null ? void 0 : B.closeButton, d == null || (r = d.classNames) == null ? void 0 : r.closeButton)
  }, (nt = q == null ? void 0 : q.close) != null ? nt : XN) : null, (Oe || d.icon || d.promise) && d.icon !== null && ((q == null ? void 0 : q[Oe]) !== null || d.icon) ? /* @__PURE__ */ j.createElement("div", {
    "data-icon": "",
    className: ln(B == null ? void 0 : B.icon, d == null || (o = d.classNames) == null ? void 0 : o.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || rr() : null, d.type !== "loading" ? or : null) : null, /* @__PURE__ */ j.createElement("div", {
    "data-content": "",
    className: ln(B == null ? void 0 : B.content, d == null || (s = d.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ j.createElement("div", {
    "data-title": "",
    className: ln(B == null ? void 0 : B.title, d == null || (i = d.classNames) == null ? void 0 : i.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ j.createElement("div", {
    "data-description": "",
    className: ln(O, ro, B == null ? void 0 : B.description, d == null || (a = d.classNames) == null ? void 0 : a.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ j.isValidElement(d.cancel) ? d.cancel : d.cancel && ps(d.cancel) ? /* @__PURE__ */ j.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || T,
    onClick: (ae) => {
      ps(d.cancel) && st && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, ae), Dt());
    },
    className: ln(B == null ? void 0 : B.cancelButton, d == null || (l = d.classNames) == null ? void 0 : l.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ j.isValidElement(d.action) ? d.action : d.action && ps(d.action) ? /* @__PURE__ */ j.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || _,
    onClick: (ae) => {
      ps(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, ae), !ae.defaultPrevented && Dt());
    },
    className: ln(B == null ? void 0 : B.actionButton, d == null || (c = d.classNames) == null ? void 0 : c.actionButton)
  }, d.action.label) : null);
};
function yf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function fk(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const s = o === 1, i = s ? "--mobile-offset" : "--offset", a = s ? sk : ok;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((u) => {
        n[`${i}-${u}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      r[c] === void 0 ? n[`${i}-${c}`] = a : n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(a);
  }), n;
}
const pk = /* @__PURE__ */ j.forwardRef(function(t, n) {
  const { id: r, invert: o, position: s = "bottom-right", hotkey: i = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: l, className: c, offset: u, mobileOffset: d, theme: p = "light", richColors: h, duration: v, style: m, visibleToasts: y = rk, toastOptions: b, dir: x = yf(), gap: w = ak, icons: S, containerAriaLabel: R = "Notifications" } = t, [P, E] = j.useState([]), T = j.useMemo(() => r ? P.filter((M) => M.toasterId === r) : P.filter((M) => !M.toasterId), [
    P,
    r
  ]), _ = j.useMemo(() => Array.from(new Set([
    s
  ].concat(T.filter((M) => M.position).map((M) => M.position)))), [
    T,
    s
  ]), [N, O] = j.useState([]), [K, Z] = j.useState(!1), [X, U] = j.useState(!1), [B, q] = j.useState(p !== "system" ? p : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), G = j.useRef(null), L = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), I = j.useRef(null), ee = j.useRef(!1), C = j.useCallback((M) => {
    E((A) => {
      var D;
      return (D = A.find((V) => V.id === M.id)) != null && D.delete || Tt.dismiss(M.id), A.filter(({ id: V }) => V !== M.id);
    });
  }, []);
  return j.useEffect(() => Tt.subscribe((M) => {
    if (M.dismiss) {
      requestAnimationFrame(() => {
        E((A) => A.map((D) => D.id === M.id ? {
          ...D,
          delete: !0
        } : D));
      });
      return;
    }
    setTimeout(() => {
      Yf.flushSync(() => {
        E((A) => {
          const D = A.findIndex((V) => V.id === M.id);
          return D !== -1 ? [
            ...A.slice(0, D),
            {
              ...A[D],
              ...M
            },
            ...A.slice(D + 1)
          ] : [
            M,
            ...A
          ];
        });
      });
    });
  }), [
    P
  ]), j.useEffect(() => {
    if (p !== "system") {
      q(p);
      return;
    }
    if (p === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? q("dark") : q("light")), typeof window > "u") return;
    const M = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      M.addEventListener("change", ({ matches: A }) => {
        q(A ? "dark" : "light");
      });
    } catch {
      M.addListener(({ matches: D }) => {
        try {
          q(D ? "dark" : "light");
        } catch (V) {
          console.error(V);
        }
      });
    }
  }, [
    p
  ]), j.useEffect(() => {
    P.length <= 1 && Z(!1);
  }, [
    P
  ]), j.useEffect(() => {
    const M = (A) => {
      var D;
      if (i.every(($) => A[$] || A.code === $)) {
        var z;
        Z(!0), (z = G.current) == null || z.focus();
      }
      A.code === "Escape" && (document.activeElement === G.current || (D = G.current) != null && D.contains(document.activeElement)) && Z(!1);
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [
    i
  ]), j.useEffect(() => {
    if (G.current)
      return () => {
        I.current && (I.current.focus({
          preventScroll: !0
        }), I.current = null, ee.current = !1);
      };
  }, [
    G.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ j.createElement("section", {
    ref: n,
    "aria-label": `${R} ${L}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, _.map((M, A) => {
    var D;
    const [V, z] = M.split("-");
    return T.length ? /* @__PURE__ */ j.createElement("ol", {
      key: M,
      dir: x === "auto" ? yf() : x,
      tabIndex: -1,
      ref: G,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": B,
      "data-y-position": V,
      "data-x-position": z,
      style: {
        "--front-toast-height": `${((D = N[0]) == null ? void 0 : D.height) || 0}px`,
        "--width": `${ik}px`,
        "--gap": `${w}px`,
        ...m,
        ...fk(u, d)
      },
      onBlur: ($) => {
        ee.current && !$.currentTarget.contains($.relatedTarget) && (ee.current = !1, I.current && (I.current.focus({
          preventScroll: !0
        }), I.current = null));
      },
      onFocus: ($) => {
        $.target instanceof HTMLElement && $.target.dataset.dismissible === "false" || ee.current || (ee.current = !0, I.current = $.relatedTarget);
      },
      onMouseEnter: () => Z(!0),
      onMouseMove: () => Z(!0),
      onMouseLeave: () => {
        X || Z(!1);
      },
      onDragEnd: () => Z(!1),
      onPointerDown: ($) => {
        $.target instanceof HTMLElement && $.target.dataset.dismissible === "false" || U(!0);
      },
      onPointerUp: () => U(!1)
    }, T.filter(($) => !$.position && A === 0 || $.position === M).map(($, F) => {
      var Y, ne;
      return /* @__PURE__ */ j.createElement(dk, {
        key: $.id,
        icons: S,
        index: F,
        toast: $,
        defaultRichColors: h,
        duration: (Y = b == null ? void 0 : b.duration) != null ? Y : v,
        className: b == null ? void 0 : b.className,
        descriptionClassName: b == null ? void 0 : b.descriptionClassName,
        invert: o,
        visibleToasts: y,
        closeButton: (ne = b == null ? void 0 : b.closeButton) != null ? ne : l,
        interacting: X,
        position: M,
        style: b == null ? void 0 : b.style,
        unstyled: b == null ? void 0 : b.unstyled,
        classNames: b == null ? void 0 : b.classNames,
        cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle,
        actionButtonStyle: b == null ? void 0 : b.actionButtonStyle,
        closeButtonAriaLabel: b == null ? void 0 : b.closeButtonAriaLabel,
        removeToast: C,
        toasts: T.filter((te) => te.position == $.position),
        heights: N.filter((te) => te.position == $.position),
        setHeights: O,
        expandByDefault: a,
        gap: w,
        expanded: K,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), _O = ({ ...e }) => /* @__PURE__ */ g(
  pk,
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
), cb = [
  { hex: "#ef4444", name: "Red" },
  { hex: "#f97316", name: "Orange" },
  { hex: "#f59e0b", name: "Amber" },
  { hex: "#eab308", name: "Yellow" },
  { hex: "#84cc16", name: "Lime" },
  { hex: "#22c55e", name: "Green" },
  { hex: "#14b8a6", name: "Teal" },
  { hex: "#0ea5e9", name: "Sky" },
  { hex: "#6366f1", name: "Indigo" },
  { hex: "#a855f7", name: "Purple" },
  { hex: "#64748b", name: "Slate" }
], hk = new Set(cb.map((e) => e.hex));
function As(e, t, n) {
  const r = Math.floor(e / 60) % 6, o = e / 60 - Math.floor(e / 60), s = n * (1 - t), i = n * (1 - o * t), a = n * (1 - (1 - o) * t), l = [
    [n, a, s],
    [i, n, s],
    [s, n, a],
    [s, i, n],
    [a, s, n],
    [n, s, i]
  ], [c, u, d] = l[r];
  return [Math.round(c * 255), Math.round(u * 255), Math.round(d * 255)];
}
function wa(e, t, n) {
  return "#" + [e, t, n].map((r) => r.toString(16).padStart(2, "0")).join("");
}
function Rl(e) {
  const t = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e.trim());
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null;
}
function bf(e, t, n) {
  const r = e / 255, o = t / 255, s = n / 255, i = Math.max(r, o, s), a = Math.min(r, o, s), l = i - a;
  let c = 0;
  return l !== 0 && (i === r ? c = ((o - s) / l + 6) % 6 : i === o ? c = (s - r) / l + 2 : c = (r - o) / l + 4, c *= 60), [c, i === 0 ? 0 : l / i, i];
}
const wf = 0.1;
function xf(e) {
  const t = Rl(e);
  if (!t) return 0;
  const [n, r, o] = t.map((s) => {
    const i = s / 255;
    return i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * n + 0.7152 * r + 0.0722 * o;
}
function xa(e, t, n) {
  const r = wa(...As(e, t, n));
  if (xf(r) >= wf) return { hex: r, adjusted: !1 };
  let o = n, s = 1;
  for (let i = 0; i < 20; i++) {
    const a = (o + s) / 2;
    xf(wa(...As(e, t, a))) >= wf ? s = a : o = a;
  }
  return { hex: wa(...As(e, t, s)), adjusted: !0 };
}
function mk({
  hue: e,
  sat: t,
  val: n,
  onChange: r
}) {
  const o = xe(null), s = xe(!1), i = Ge(() => {
    const l = o.current;
    if (!l) return;
    const c = l.getContext("2d"), u = l.width, d = l.height, [p, h, v] = As(e, 1, 1), m = c.createLinearGradient(0, 0, u, 0);
    m.addColorStop(0, "#fff"), m.addColorStop(1, `rgb(${p},${h},${v})`), c.fillStyle = m, c.fillRect(0, 0, u, d);
    const y = c.createLinearGradient(0, 0, 0, d);
    y.addColorStop(0, "rgba(0,0,0,0)"), y.addColorStop(1, "rgba(0,0,0,1)"), c.fillStyle = y, c.fillRect(0, 0, u, d);
  }, [e]);
  Te(() => {
    i();
  }, [i]);
  const a = Ge((l) => {
    const c = o.current;
    if (!c) return;
    const u = c.getBoundingClientRect(), d = Math.max(0, Math.min(1, (l.clientX - u.left) / u.width)), p = Math.max(0, Math.min(1, (l.clientY - u.top) / u.height));
    r(d, 1 - p);
  }, [r]);
  return Te(() => {
    const l = (u) => {
      s.current && a(u);
    }, c = () => {
      s.current = !1;
    };
    return document.addEventListener("mousemove", l), document.addEventListener("mouseup", c), () => {
      document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", c);
    };
  }, [a]), /* @__PURE__ */ W("div", { className: "relative flex-1 min-w-0", style: { height: 160 }, children: [
    /* @__PURE__ */ g(
      "canvas",
      {
        ref: o,
        width: 400,
        height: 160,
        className: "w-full h-full rounded cursor-crosshair",
        onMouseDown: (l) => {
          s.current = !0, a(l);
        }
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: "absolute w-4 h-4 rounded-full border-2 border-white shadow pointer-events-none -translate-x-1/2 -translate-y-1/2",
        style: { left: `${t * 100}%`, top: `${(1 - n) * 100}%` }
      }
    )
  ] });
}
function gk({ hue: e, onChange: t }) {
  const n = xe(null), r = xe(!1), o = Ge((s) => {
    const i = n.current;
    if (!i) return;
    const a = i.getBoundingClientRect(), l = Math.max(0, Math.min(1, (s.clientY - a.top) / a.height));
    t(l * 360);
  }, [t]);
  return Te(() => {
    const s = (a) => {
      r.current && o(a);
    }, i = () => {
      r.current = !1;
    };
    return document.addEventListener("mousemove", s), document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", i);
    };
  }, [o]), /* @__PURE__ */ g(
    "div",
    {
      ref: n,
      className: "relative w-4 rounded cursor-pointer flex-shrink-0",
      style: {
        height: 160,
        background: "linear-gradient(to bottom, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
      },
      onMouseDown: (s) => {
        r.current = !0, o(s);
      },
      children: /* @__PURE__ */ g(
        "div",
        {
          className: "absolute left-1/2 w-5 h-3 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-white shadow pointer-events-none",
          style: { top: `${e / 360 * 100}%` }
        }
      )
    }
  );
}
function OO({ value: e, onChange: t }) {
  const [n, r] = Qe(!1), [o, s] = Qe("swatches"), [i, a] = Qe(0), [l, c] = Qe(1), [u, d] = Qe(1), p = xe(null);
  Te(() => {
    if (!n) return;
    s(hk.has(e) ? "swatches" : "gradient");
    const w = Rl(e);
    if (w) {
      const [S, R, P] = bf(...w);
      a(S), c(R), d(P);
    }
  }, [n]);
  const { hex: h, adjusted: v } = xa(i, l, u);
  Te(() => {
    if (!n) return;
    const w = (S) => {
      p.current && !p.current.contains(S.target) && r(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [n]);
  function m(w, S) {
    c(w), d(S), t(xa(i, w, S).hex);
  }
  function y(w) {
    a(w), t(xa(w, l, u).hex);
  }
  function b(w) {
    t(w);
    const S = Rl(w);
    if (S) {
      const [R, P, E] = bf(...S);
      a(R), c(P), d(E);
    }
    r(!1);
  }
  const x = o === "gradient";
  return /* @__PURE__ */ g(Xr, { children: /* @__PURE__ */ W("div", { className: "relative inline-block", ref: p, children: [
    /* @__PURE__ */ W(Bn, { children: [
      /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: "w-6 h-6 rounded-full border-2 border-white shadow ring-1 ring-black/10 focus:outline-none",
          style: { background: e },
          onClick: () => r((w) => !w)
        }
      ) }),
      /* @__PURE__ */ g(Hn, { children: e.toUpperCase() })
    ] }),
    n && /* @__PURE__ */ W("div", { className: "absolute z-50 mt-2 rounded-xl border border-border bg-popover shadow-lg p-2", children: [
      /* @__PURE__ */ W("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ W("div", { className: "relative", children: [
          /* @__PURE__ */ W("div", { className: `flex items-center gap-1 transition-opacity duration-150 ${x ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: [
            cb.map(({ hex: w, name: S }) => /* @__PURE__ */ W(Bn, { children: [
              /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g(
                "button",
                {
                  type: "button",
                  className: "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border-2 hover:scale-110 transition-transform focus:outline-none",
                  style: {
                    background: w,
                    borderColor: w === e ? "white" : "transparent",
                    boxShadow: w === e ? `0 0 0 2px ${w}` : void 0
                  },
                  onClick: () => b(w),
                  children: w === e && /* @__PURE__ */ g(Lr, { className: "w-3.5 h-3.5 text-white drop-shadow", strokeWidth: 3 })
                }
              ) }),
              /* @__PURE__ */ g(Hn, { children: S })
            ] }, w)),
            /* @__PURE__ */ g("div", { className: "w-px h-6 bg-border mx-0.5 flex-shrink-0" })
          ] }),
          /* @__PURE__ */ W("div", { className: `absolute inset-0 flex items-center gap-2 transition-opacity duration-150 ${x ? "opacity-100" : "opacity-0 pointer-events-none"}`, children: [
            /* @__PURE__ */ g(
              "button",
              {
                type: "button",
                className: "w-7 h-7 rounded-full flex-shrink-0 border-2 border-white flex items-center justify-center hover:scale-110 transition-transform focus:outline-none",
                style: { background: h, boxShadow: `0 0 0 2px ${h}` },
                onClick: () => r(!1),
                children: /* @__PURE__ */ g(Lr, { className: "w-3.5 h-3.5 text-white drop-shadow", strokeWidth: 3 })
              }
            ),
            /* @__PURE__ */ g("span", { className: "text-xs text-muted-foreground font-mono select-none", children: "HEX" }),
            /* @__PURE__ */ g("span", { className: "text-xs font-mono text-foreground", children: h.toUpperCase() }),
            v && /* @__PURE__ */ g("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "Contrast has been adjusted" })
          ] })
        ] }),
        /* @__PURE__ */ W(Bn, { children: [
          /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g(
            "button",
            {
              type: "button",
              onClick: () => s((w) => w === "gradient" ? "swatches" : "gradient"),
              className: `w-7 h-7 rounded-full flex-shrink-0 border-2 transition-transform hover:scale-110 focus:outline-none border-white ${x ? "ring-2 ring-indigo-500" : ""}`,
              style: {
                background: "conic-gradient(from 0deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)"
              }
            }
          ) }),
          /* @__PURE__ */ g(Hn, { children: "Custom color" })
        ] })
      ] }),
      /* @__PURE__ */ g(
        "div",
        {
          className: "grid",
          style: {
            gridTemplateRows: x ? "1fr" : "0fr",
            transition: "grid-template-rows 200ms ease"
          },
          children: /* @__PURE__ */ g("div", { className: "overflow-hidden min-h-0", children: /* @__PURE__ */ W("div", { className: "flex gap-1 pt-2", children: [
            /* @__PURE__ */ g(mk, { hue: i, sat: l, val: u, onChange: m }),
            /* @__PURE__ */ g("div", { className: "w-7 flex justify-center flex-shrink-0", children: /* @__PURE__ */ g(gk, { hue: i, onChange: y }) })
          ] }) })
        }
      )
    ] })
  ] }) });
}
function vk() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pe(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Oi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function eo(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Xc(e) {
  return "nodeType" in e;
}
function At(e) {
  var t, n;
  return e ? eo(e) ? e : Xc(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function qc(e) {
  const {
    Document: t
  } = At(e);
  return e instanceof t;
}
function Xo(e) {
  return eo(e) ? !1 : e instanceof At(e).HTMLElement;
}
function ub(e) {
  return e instanceof At(e).SVGElement;
}
function to(e) {
  return e ? eo(e) ? e.document : Xc(e) ? qc(e) ? e : Xo(e) || ub(e) ? e.ownerDocument : document : document : document;
}
const gn = Oi ? Ol : Te;
function Zc(e) {
  const t = xe(e);
  return gn(() => {
    t.current = e;
  }), Ge(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function yk() {
  const e = xe(null), t = Ge((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = Ge(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Do(e, t) {
  t === void 0 && (t = [e]);
  const n = xe(e);
  return gn(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function qo(e, t) {
  const n = xe();
  return Pe(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function ni(e) {
  const t = Zc(e), n = xe(null), r = Ge(
    (o) => {
      o !== n.current && (t == null || t(o, n.current)), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function El(e) {
  const t = xe();
  return Te(() => {
    t.current = e;
  }, [e]), t.current;
}
let Sa = {};
function Zo(e, t) {
  return Pe(() => {
    if (t)
      return t;
    const n = Sa[e] == null ? 0 : Sa[e] + 1;
    return Sa[e] = n, e + "-" + n;
  }, [e, t]);
}
function db(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((s, i) => {
      const a = Object.entries(i);
      for (const [l, c] of a) {
        const u = s[l];
        u != null && (s[l] = u + e * c);
      }
      return s;
    }, {
      ...t
    });
  };
}
const _r = /* @__PURE__ */ db(1), No = /* @__PURE__ */ db(-1);
function bk(e) {
  return "clientX" in e && "clientY" in e;
}
function Jc(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = At(e.target);
  return t && e instanceof t;
}
function wk(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = At(e.target);
  return t && e instanceof t;
}
function Tl(e) {
  if (wk(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return bk(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Hr = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Hr.Translate.toString(e), Hr.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Sf = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function xk(e) {
  return e.matches(Sf) ? e : e.querySelector(Sf);
}
const Sk = {
  display: "none"
};
function Ck(e) {
  let {
    id: t,
    value: n
  } = e;
  return j.createElement("div", {
    id: t,
    style: Sk
  }, n);
}
function Rk(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const o = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return j.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Ek() {
  const [e, t] = Qe("");
  return {
    announce: Ge((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const fb = /* @__PURE__ */ tn(null);
function Tk(e) {
  const t = je(fb);
  Te(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Pk() {
  const [e] = Qe(() => /* @__PURE__ */ new Set()), t = Ge((r) => (e.add(r), () => e.delete(r)), [e]);
  return [Ge((r) => {
    let {
      type: o,
      event: s
    } = r;
    e.forEach((i) => {
      var a;
      return (a = i[o]) == null ? void 0 : a.call(i, s);
    });
  }, [e]), t];
}
const Mk = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Ak = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Dk(e) {
  let {
    announcements: t = Ak,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Mk
  } = e;
  const {
    announce: s,
    announcement: i
  } = Ek(), a = Zo("DndLiveRegion"), [l, c] = Qe(!1);
  if (Te(() => {
    c(!0);
  }, []), Tk(Pe(() => ({
    onDragStart(d) {
      let {
        active: p
      } = d;
      s(t.onDragStart({
        active: p
      }));
    },
    onDragMove(d) {
      let {
        active: p,
        over: h
      } = d;
      t.onDragMove && s(t.onDragMove({
        active: p,
        over: h
      }));
    },
    onDragOver(d) {
      let {
        active: p,
        over: h
      } = d;
      s(t.onDragOver({
        active: p,
        over: h
      }));
    },
    onDragEnd(d) {
      let {
        active: p,
        over: h
      } = d;
      s(t.onDragEnd({
        active: p,
        over: h
      }));
    },
    onDragCancel(d) {
      let {
        active: p,
        over: h
      } = d;
      s(t.onDragCancel({
        active: p,
        over: h
      }));
    }
  }), [s, t])), !l)
    return null;
  const u = j.createElement(j.Fragment, null, j.createElement(Ck, {
    id: r,
    value: o.draggable
  }), j.createElement(Rk, {
    id: a,
    announcement: i
  }));
  return n ? Fl(u, n) : u;
}
var Je;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Je || (Je = {}));
function ri() {
}
function Cf(e, t) {
  return Pe(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Nk() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pe(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const en = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function pb(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function hb(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function kk(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Rf(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: o
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + o,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + o,
    y: n + r
  }];
}
function mb(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function Ef(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const Ik = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Ef(t, t.left, t.top), s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const c = pb(Ef(l), o);
      s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return s.sort(hb);
}, _k = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Rf(t), s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const c = Rf(l), u = o.reduce((p, h, v) => p + pb(c[v], h), 0), d = Number((u / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return s.sort(hb);
};
function Ok(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), i = o - r, a = s - n;
  if (r < o && n < s) {
    const l = t.width * t.height, c = e.width * e.height, u = i * a, d = u / (l + c - u);
    return Number(d.toFixed(4));
  }
  return 0;
}
const Lk = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const s of r) {
    const {
      id: i
    } = s, a = n.get(i);
    if (a) {
      const l = Ok(a, t);
      l > 0 && o.push({
        id: i,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return o.sort(kk);
};
function Fk(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function gb(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : en;
}
function Vk(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return o.reduce((i, a) => ({
      ...i,
      top: i.top + e * a.y,
      bottom: i.bottom + e * a.y,
      left: i.left + e * a.x,
      right: i.right + e * a.x
    }), {
      ...n
    });
  };
}
const $k = /* @__PURE__ */ Vk(1);
function Bk(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function zk(e, t, n) {
  const r = Bk(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: s,
    x: i,
    y: a
  } = r, l = e.left - i - (1 - o) * parseFloat(n), c = e.top - a - (1 - s) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = o ? e.width / o : e.width, d = s ? e.height / s : e.height;
  return {
    width: u,
    height: d,
    top: c,
    right: l + u,
    bottom: c + d,
    left: l
  };
}
const Hk = {
  ignoreTransform: !1
};
function no(e, t) {
  t === void 0 && (t = Hk);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: u
    } = At(e).getComputedStyle(e);
    c && (n = zk(n, c, u));
  }
  const {
    top: r,
    left: o,
    width: s,
    height: i,
    bottom: a,
    right: l
  } = n;
  return {
    top: r,
    left: o,
    width: s,
    height: i,
    bottom: a,
    right: l
  };
}
function Tf(e) {
  return no(e, {
    ignoreTransform: !0
  });
}
function jk(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function Gk(e, t) {
  return t === void 0 && (t = At(e).getComputedStyle(e)), t.position === "fixed";
}
function Wk(e, t) {
  t === void 0 && (t = At(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
function Li(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (qc(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Xo(o) || ub(o) || n.includes(o))
      return n;
    const s = At(e).getComputedStyle(o);
    return o !== e && Wk(o, s) && n.push(o), Gk(o, s) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function vb(e) {
  const [t] = Li(e, 1);
  return t ?? null;
}
function Ca(e) {
  return !Oi || !e ? null : eo(e) ? e : Xc(e) ? qc(e) || e === to(e).scrollingElement ? window : Xo(e) ? e : null : null;
}
function yb(e) {
  return eo(e) ? e.scrollX : e.scrollLeft;
}
function bb(e) {
  return eo(e) ? e.scrollY : e.scrollTop;
}
function Pl(e) {
  return {
    x: yb(e),
    y: bb(e)
  };
}
var rt;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(rt || (rt = {}));
function wb(e) {
  return !Oi || !e ? !1 : e === document.scrollingElement;
}
function xb(e) {
  const t = {
    x: 0,
    y: 0
  }, n = wb(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, s = e.scrollLeft <= t.x, i = e.scrollTop >= r.y, a = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: s,
    isBottom: i,
    isRight: a,
    maxScroll: r,
    minScroll: t
  };
}
const Uk = {
  x: 0.2,
  y: 0.2
};
function Kk(e, t, n, r, o) {
  let {
    top: s,
    left: i,
    right: a,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = Uk);
  const {
    isTop: c,
    isBottom: u,
    isLeft: d,
    isRight: p
  } = xb(e), h = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, m = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && s <= t.top + m.height ? (h.y = rt.Backward, v.y = r * Math.abs((t.top + m.height - s) / m.height)) : !u && l >= t.bottom - m.height && (h.y = rt.Forward, v.y = r * Math.abs((t.bottom - m.height - l) / m.height)), !p && a >= t.right - m.width ? (h.x = rt.Forward, v.x = r * Math.abs((t.right - m.width - a) / m.width)) : !d && i <= t.left + m.width && (h.x = rt.Backward, v.x = r * Math.abs((t.left + m.width - i) / m.width)), {
    direction: h,
    speed: v
  };
}
function Yk(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: s,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: s,
      bottom: i,
      width: s,
      height: i
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: o
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Sb(e) {
  return e.reduce((t, n) => _r(t, Pl(n)), en);
}
function Xk(e) {
  return e.reduce((t, n) => t + yb(n), 0);
}
function qk(e) {
  return e.reduce((t, n) => t + bb(n), 0);
}
function Zk(e, t) {
  if (t === void 0 && (t = no), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: s
  } = t(e);
  vb(e) && (o <= 0 || s <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Jk = [["x", ["left", "right"], Xk], ["y", ["top", "bottom"], qk]];
class Qc {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Li(n), o = Sb(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [s, i, a] of Jk)
      for (const l of i)
        Object.defineProperty(this, l, {
          get: () => {
            const c = a(r), u = o[s] - c;
            return this.rect[l] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class vo {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function Qk(e) {
  const {
    EventTarget: t
  } = At(e);
  return e instanceof t ? e : to(e);
}
function Ra(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var $t;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})($t || ($t = {}));
function Pf(e) {
  e.preventDefault();
}
function eI(e) {
  e.stopPropagation();
}
var Re;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Re || (Re = {}));
const Cb = {
  start: [Re.Space, Re.Enter],
  cancel: [Re.Esc],
  end: [Re.Space, Re.Enter, Re.Tab]
}, tI = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case Re.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Re.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Re.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Re.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class eu {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new vo(to(n)), this.windowListeners = new vo(At(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add($t.Resize, this.handleCancel), this.windowListeners.add($t.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add($t.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Zk(r), n(en);
  }
  handleKeyDown(t) {
    if (Jc(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: s = Cb,
        coordinateGetter: i = tI,
        scrollBehavior: a = "smooth"
      } = o, {
        code: l
      } = t;
      if (s.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (s.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, u = c ? {
        x: c.left,
        y: c.top
      } : en;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const d = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (d) {
        const p = No(d, u), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: v
        } = r.current;
        for (const m of v) {
          const y = t.code, {
            isTop: b,
            isRight: x,
            isLeft: w,
            isBottom: S,
            maxScroll: R,
            minScroll: P
          } = xb(m), E = Yk(m), T = {
            x: Math.min(y === Re.Right ? E.right - E.width / 2 : E.right, Math.max(y === Re.Right ? E.left : E.left + E.width / 2, d.x)),
            y: Math.min(y === Re.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(y === Re.Down ? E.top : E.top + E.height / 2, d.y))
          }, _ = y === Re.Right && !x || y === Re.Left && !w, N = y === Re.Down && !S || y === Re.Up && !b;
          if (_ && T.x !== d.x) {
            const O = m.scrollLeft + p.x, K = y === Re.Right && O <= R.x || y === Re.Left && O >= P.x;
            if (K && !p.y) {
              m.scrollTo({
                left: O,
                behavior: a
              });
              return;
            }
            K ? h.x = m.scrollLeft - O : h.x = y === Re.Right ? m.scrollLeft - R.x : m.scrollLeft - P.x, h.x && m.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (N && T.y !== d.y) {
            const O = m.scrollTop + p.y, K = y === Re.Down && O <= R.y || y === Re.Up && O >= P.y;
            if (K && !p.x) {
              m.scrollTo({
                top: O,
                behavior: a
              });
              return;
            }
            K ? h.y = m.scrollTop - O : h.y = y === Re.Down ? m.scrollTop - R.y : m.scrollTop - P.y, h.y && m.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, _r(No(d, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
eu.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Cb,
      onActivation: o
    } = t, {
      active: s
    } = n;
    const {
      code: i
    } = e.nativeEvent;
    if (r.start.includes(i)) {
      const a = s.activatorNode.current;
      return a && e.target !== a ? !1 : (e.preventDefault(), o == null || o({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Mf(e) {
  return !!(e && "distance" in e);
}
function Af(e) {
  return !!(e && "delay" in e);
}
class tu {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = Qk(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: s
    } = t, {
      target: i
    } = s;
    this.props = t, this.events = n, this.document = to(i), this.documentListeners = new vo(this.document), this.listeners = new vo(r), this.windowListeners = new vo(At(i)), this.initialCoordinates = (o = Tl(s)) != null ? o : en, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add($t.Resize, this.handleCancel), this.windowListeners.add($t.DragStart, Pf), this.windowListeners.add($t.VisibilityChange, this.handleCancel), this.windowListeners.add($t.ContextMenu, Pf), this.documentListeners.add($t.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Af(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Mf(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: o
    } = this.props;
    o(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add($t.Click, eI, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add($t.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: s
    } = this, {
      onMove: i,
      options: {
        activationConstraint: a
      }
    } = s;
    if (!o)
      return;
    const l = (n = Tl(t)) != null ? n : en, c = No(o, l);
    if (!r && a) {
      if (Mf(a)) {
        if (a.tolerance != null && Ra(c, a.tolerance))
          return this.handleCancel();
        if (Ra(c, a.distance))
          return this.handleStart();
      }
      if (Af(a) && Ra(c, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, c);
      return;
    }
    t.cancelable && t.preventDefault(), i(l);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === Re.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const nI = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class nu extends tu {
  constructor(t) {
    const {
      event: n
    } = t, r = to(n.target);
    super(t, nI, r);
  }
}
nu.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const rI = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ml;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Ml || (Ml = {}));
class oI extends tu {
  constructor(t) {
    super(t, rI, to(t.event.target));
  }
}
oI.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Ml.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Ea = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class sI extends tu {
  constructor(t) {
    super(t, Ea);
  }
  static setup() {
    return window.addEventListener(Ea.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Ea.move.name, t);
    };
    function t() {
    }
  }
}
sI.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: o
    } = n;
    return o.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var yo;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(yo || (yo = {}));
var oi;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(oi || (oi = {}));
function iI(e) {
  let {
    acceleration: t,
    activator: n = yo.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: s,
    interval: i = 5,
    order: a = oi.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: u,
    delta: d,
    threshold: p
  } = e;
  const h = lI({
    delta: d,
    disabled: !s
  }), [v, m] = yk(), y = xe({
    x: 0,
    y: 0
  }), b = xe({
    x: 0,
    y: 0
  }), x = Pe(() => {
    switch (n) {
      case yo.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case yo.DraggableRect:
        return o;
    }
  }, [n, o, l]), w = xe(null), S = Ge(() => {
    const P = w.current;
    if (!P)
      return;
    const E = y.current.x * b.current.x, T = y.current.y * b.current.y;
    P.scrollBy(E, T);
  }, []), R = Pe(() => a === oi.TreeOrder ? [...c].reverse() : c, [a, c]);
  Te(
    () => {
      if (!s || !c.length || !x) {
        m();
        return;
      }
      for (const P of R) {
        if ((r == null ? void 0 : r(P)) === !1)
          continue;
        const E = c.indexOf(P), T = u[E];
        if (!T)
          continue;
        const {
          direction: _,
          speed: N
        } = Kk(P, T, x, t, p);
        for (const O of ["x", "y"])
          h[O][_[O]] || (N[O] = 0, _[O] = 0);
        if (N.x > 0 || N.y > 0) {
          m(), w.current = P, v(S, i), y.current = N, b.current = _;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, b.current = {
        x: 0,
        y: 0
      }, m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      m,
      s,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      v,
      c,
      R,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p)
    ]
  );
}
const aI = {
  x: {
    [rt.Backward]: !1,
    [rt.Forward]: !1
  },
  y: {
    [rt.Backward]: !1,
    [rt.Forward]: !1
  }
};
function lI(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = El(t);
  return qo((o) => {
    if (n || !r || !o)
      return aI;
    const s = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [rt.Backward]: o.x[rt.Backward] || s.x === -1,
        [rt.Forward]: o.x[rt.Forward] || s.x === 1
      },
      y: {
        [rt.Backward]: o.y[rt.Backward] || s.y === -1,
        [rt.Forward]: o.y[rt.Forward] || s.y === 1
      }
    };
  }, [n, t, r]);
}
function cI(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return qo((o) => {
    var s;
    return t == null ? null : (s = r ?? o) != null ? s : null;
  }, [r, t]);
}
function uI(e, t) {
  return Pe(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, s = o.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...s];
  }, []), [e, t]);
}
var ko;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(ko || (ko = {}));
var Al;
(function(e) {
  e.Optimized = "optimized";
})(Al || (Al = {}));
const Df = /* @__PURE__ */ new Map();
function dI(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [s, i] = Qe(null), {
    frequency: a,
    measure: l,
    strategy: c
  } = o, u = xe(e), d = y(), p = Do(d), h = Ge(function(b) {
    b === void 0 && (b = []), !p.current && i((x) => x === null ? b : x.concat(b.filter((w) => !x.includes(w))));
  }, [p]), v = xe(null), m = qo((b) => {
    if (d && !n)
      return Df;
    if (!b || b === Df || u.current !== e || s != null) {
      const x = /* @__PURE__ */ new Map();
      for (let w of e) {
        if (!w)
          continue;
        if (s && s.length > 0 && !s.includes(w.id) && w.rect.current) {
          x.set(w.id, w.rect.current);
          continue;
        }
        const S = w.node.current, R = S ? new Qc(l(S), S) : null;
        w.rect.current = R, R && x.set(w.id, R);
      }
      return x;
    }
    return b;
  }, [e, s, n, d, l]);
  return Te(() => {
    u.current = e;
  }, [e]), Te(
    () => {
      d || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), Te(
    () => {
      s && s.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), Te(
    () => {
      d || typeof a != "number" || v.current !== null || (v.current = setTimeout(() => {
        h(), v.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, d, h, ...r]
  ), {
    droppableRects: m,
    measureDroppableContainers: h,
    measuringScheduled: s != null
  };
  function y() {
    switch (c) {
      case ko.Always:
        return !1;
      case ko.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Rb(e, t) {
  return qo((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function fI(e, t) {
  return Rb(e, t);
}
function pI(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Zc(t), o = Pe(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, n]);
  return Te(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function Fi(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Zc(t), o = Pe(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return Te(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function hI(e) {
  return new Qc(no(e), e);
}
function Nf(e, t, n) {
  t === void 0 && (t = hI);
  const [r, o] = Qe(null);
  function s() {
    o((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = l ?? n) != null ? c : null;
      }
      const u = t(e);
      return JSON.stringify(l) === JSON.stringify(u) ? l : u;
    });
  }
  const i = pI({
    callback(l) {
      if (e)
        for (const c of l) {
          const {
            type: u,
            target: d
          } = c;
          if (u === "childList" && d instanceof HTMLElement && d.contains(e)) {
            s();
            break;
          }
        }
    }
  }), a = Fi({
    callback: s
  });
  return gn(() => {
    s(), e ? (a == null || a.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a == null || a.disconnect(), i == null || i.disconnect());
  }, [e]), r;
}
function mI(e) {
  const t = Rb(e);
  return gb(e, t);
}
const kf = [];
function gI(e) {
  const t = xe(e), n = qo((r) => e ? r && r !== kf && e && t.current && e.parentNode === t.current.parentNode ? r : Li(e) : kf, [e]);
  return Te(() => {
    t.current = e;
  }, [e]), n;
}
function vI(e) {
  const [t, n] = Qe(null), r = xe(e), o = Ge((s) => {
    const i = Ca(s.target);
    i && n((a) => a ? (a.set(i, Pl(i)), new Map(a)) : null);
  }, []);
  return Te(() => {
    const s = r.current;
    if (e !== s) {
      i(s);
      const a = e.map((l) => {
        const c = Ca(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, Pl(c)]) : null;
      }).filter((l) => l != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      i(e), i(s);
    };
    function i(a) {
      a.forEach((l) => {
        const c = Ca(l);
        c == null || c.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), Pe(() => e.length ? t ? Array.from(t.values()).reduce((s, i) => _r(s, i), en) : Sb(e) : en, [e, t]);
}
function If(e, t) {
  t === void 0 && (t = []);
  const n = xe(null);
  return Te(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), Te(() => {
    const r = e !== en;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? No(e, n.current) : en;
}
function yI(e) {
  Te(
    () => {
      if (!Oi)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n == null || n();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function bI(e, t) {
  return Pe(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: s
    } = r;
    return n[o] = (i) => {
      s(i, t);
    }, n;
  }, {}), [e, t]);
}
function Eb(e) {
  return Pe(() => e ? jk(e) : null, [e]);
}
const _f = [];
function wI(e, t) {
  t === void 0 && (t = no);
  const [n] = e, r = Eb(n ? At(n) : null), [o, s] = Qe(_f);
  function i() {
    s(() => e.length ? e.map((l) => wb(l) ? r : new Qc(t(l), l)) : _f);
  }
  const a = Fi({
    callback: i
  });
  return gn(() => {
    a == null || a.disconnect(), i(), e.forEach((l) => a == null ? void 0 : a.observe(l));
  }, [e]), o;
}
function xI(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Xo(t) ? t : e;
}
function SI(e) {
  let {
    measure: t
  } = e;
  const [n, r] = Qe(null), o = Ge((c) => {
    for (const {
      target: u
    } of c)
      if (Xo(u)) {
        r((d) => {
          const p = t(u);
          return d ? {
            ...d,
            width: p.width,
            height: p.height
          } : p;
        });
        break;
      }
  }, [t]), s = Fi({
    callback: o
  }), i = Ge((c) => {
    const u = xI(c);
    s == null || s.disconnect(), u && (s == null || s.observe(u)), r(u ? t(u) : null);
  }, [t, s]), [a, l] = ni(i);
  return Pe(() => ({
    nodeRef: a,
    rect: n,
    setRef: l
  }), [n, a, l]);
}
const CI = [{
  sensor: nu,
  options: {}
}, {
  sensor: eu,
  options: {}
}], RI = {
  current: {}
}, Ds = {
  draggable: {
    measure: Tf
  },
  droppable: {
    measure: Tf,
    strategy: ko.WhileDragging,
    frequency: Al.Optimized
  },
  dragOverlay: {
    measure: no
  }
};
class bo extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const EI = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new bo(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ri
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Ds,
  measureDroppableContainers: ri,
  windowRect: null,
  measuringScheduled: !1
}, TI = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ri,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ri
}, Vi = /* @__PURE__ */ tn(TI), Tb = /* @__PURE__ */ tn(EI);
function PI() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new bo()
    }
  };
}
function MI(e, t) {
  switch (t.type) {
    case Je.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Je.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case Je.DragEnd:
    case Je.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Je.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new bo(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Je.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const i = new bo(e.droppable.containers);
      return i.set(n, {
        ...s,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case Je.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const s = new bo(e.droppable.containers);
      return s.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    default:
      return e;
  }
}
function AI(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = je(Vi), s = El(r), i = El(n == null ? void 0 : n.id);
  return Te(() => {
    if (!t && !r && s && i != null) {
      if (!Jc(s) || document.activeElement === s.target)
        return;
      const a = o.get(i);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: c
      } = a;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [l.current, c.current]) {
          if (!u)
            continue;
          const d = xk(u);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, i, s]), null;
}
function DI(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, s) => s({
    transform: o,
    ...r
  }), n) : n;
}
function NI(e) {
  return Pe(
    () => ({
      draggable: {
        ...Ds.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Ds.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Ds.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function kI(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const s = xe(!1), {
    x: i,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  gn(() => {
    if (!i && !a || !t) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const u = n(c), d = gb(u, r);
    if (i || (d.x = 0), a || (d.y = 0), s.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const p = vb(c);
      p && p.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, i, a, r, n]);
}
const Pb = /* @__PURE__ */ tn({
  ...en,
  scaleX: 1,
  scaleY: 1
});
var Fn;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Fn || (Fn = {}));
const II = /* @__PURE__ */ Jb(function(t) {
  var n, r, o, s;
  let {
    id: i,
    accessibility: a,
    autoScroll: l = !0,
    children: c,
    sensors: u = CI,
    collisionDetection: d = Lk,
    measuring: p,
    modifiers: h,
    ...v
  } = t;
  const m = Qb(MI, void 0, PI), [y, b] = m, [x, w] = Pk(), [S, R] = Qe(Fn.Uninitialized), P = S === Fn.Initialized, {
    draggable: {
      active: E,
      nodes: T,
      translate: _
    },
    droppable: {
      containers: N
    }
  } = y, O = E != null ? T.get(E) : null, K = xe({
    initial: null,
    translated: null
  }), Z = Pe(() => {
    var Ie;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (Ie = O == null ? void 0 : O.data) != null ? Ie : RI,
      rect: K
    } : null;
  }, [E, O]), X = xe(null), [U, B] = Qe(null), [q, G] = Qe(null), L = Do(v, Object.values(v)), I = Zo("DndDescribedBy", i), ee = Pe(() => N.getEnabled(), [N]), C = NI(p), {
    droppableRects: M,
    measureDroppableContainers: A,
    measuringScheduled: D
  } = dI(ee, {
    dragging: P,
    dependencies: [_.x, _.y],
    config: C.droppable
  }), V = cI(T, E), z = Pe(() => q ? Tl(q) : null, [q]), $ = or(), F = fI(V, C.draggable.measure);
  kI({
    activeNode: E != null ? T.get(E) : null,
    config: $.layoutShiftCompensation,
    initialRect: F,
    measure: C.draggable.measure
  });
  const Y = Nf(V, C.draggable.measure, F), ne = Nf(V ? V.parentElement : null), te = xe({
    activatorEvent: null,
    active: null,
    activeNode: V,
    collisionRect: null,
    collisions: null,
    droppableRects: M,
    draggableNodes: T,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: N,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), he = N.getNodeFor((n = te.current.over) == null ? void 0 : n.id), pe = SI({
    measure: C.dragOverlay.measure
  }), ze = (r = pe.nodeRef.current) != null ? r : V, Ee = P ? (o = pe.rect) != null ? o : Y : null, We = !!(pe.nodeRef.current && pe.rect), Gt = mI(We ? null : Y), Ue = Eb(ze ? At(ze) : null), Et = gI(P ? he ?? V : null), dt = wI(Et), Oe = DI(h, {
    transform: {
      x: _.x - Gt.x,
      y: _.y - Gt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: q,
    active: Z,
    activeNodeRect: Y,
    containerNodeRect: ne,
    draggingNodeRect: Ee,
    over: te.current.over,
    overlayNodeRect: pe.rect,
    scrollableAncestors: Et,
    scrollableAncestorRects: dt,
    windowRect: Ue
  }), st = z ? _r(z, _) : null, xr = vI(Et), ro = If(xr), Pn = If(xr, [Y]), _t = _r(Oe, ro), Ot = Ee ? $k(Ee, Oe) : null, He = Z && Ot ? d({
    active: Z,
    collisionRect: Ot,
    droppableRects: M,
    droppableContainers: ee,
    pointerCoordinates: st
  }) : null, Lt = mb(He, "id"), [vt, De] = Qe(null), Ft = We ? Oe : _r(Oe, Pn), on = Fk(Ft, (s = vt == null ? void 0 : vt.rect) != null ? s : null, Y), Vt = xe(null), tt = Ge(
    (Ie, nt) => {
      let {
        sensor: ae,
        options: Me
      } = nt;
      if (X.current == null)
        return;
      const Se = T.get(X.current);
      if (!Se)
        return;
      const Ce = Ie.nativeEvent, Ke = new ae({
        active: X.current,
        activeNode: Se,
        event: Ce,
        options: Me,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: te,
        onAbort(ye) {
          if (!T.get(ye))
            return;
          const {
            onDragAbort: Fe
          } = L.current, Ve = {
            id: ye
          };
          Fe == null || Fe(Ve), x({
            type: "onDragAbort",
            event: Ve
          });
        },
        onPending(ye, yt, Fe, Ve) {
          if (!T.get(ye))
            return;
          const {
            onDragPending: $e
          } = L.current, ft = {
            id: ye,
            constraint: yt,
            initialCoordinates: Fe,
            offset: Ve
          };
          $e == null || $e(ft), x({
            type: "onDragPending",
            event: ft
          });
        },
        onStart(ye) {
          const yt = X.current;
          if (yt == null)
            return;
          const Fe = T.get(yt);
          if (!Fe)
            return;
          const {
            onDragStart: Ve
          } = L.current, sn = {
            activatorEvent: Ce,
            active: {
              id: yt,
              data: Fe.data,
              rect: K
            }
          };
          es(() => {
            Ve == null || Ve(sn), R(Fn.Initializing), b({
              type: Je.DragStart,
              initialCoordinates: ye,
              active: yt
            }), x({
              type: "onDragStart",
              event: sn
            }), B(Vt.current), G(Ce);
          });
        },
        onMove(ye) {
          b({
            type: Je.DragMove,
            coordinates: ye
          });
        },
        onEnd: _e(Je.DragEnd),
        onCancel: _e(Je.DragCancel)
      });
      Vt.current = Ke;
      function _e(ye) {
        return async function() {
          const {
            active: Fe,
            collisions: Ve,
            over: sn,
            scrollAdjustedTranslate: $e
          } = te.current;
          let ft = null;
          if (Fe && $e) {
            const {
              cancelDrop: An
            } = L.current;
            ft = {
              activatorEvent: Ce,
              active: Fe,
              collisions: Ve,
              delta: $e,
              over: sn
            }, ye === Je.DragEnd && typeof An == "function" && await Promise.resolve(An(ft)) && (ye = Je.DragCancel);
          }
          X.current = null, es(() => {
            b({
              type: ye
            }), R(Fn.Uninitialized), De(null), B(null), G(null), Vt.current = null;
            const An = ye === Je.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ft) {
              const Dn = L.current[An];
              Dn == null || Dn(ft), x({
                type: An,
                event: ft
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), Mn = Ge((Ie, nt) => (ae, Me) => {
    const Se = ae.nativeEvent, Ce = T.get(Me);
    if (
      // Another sensor is already instantiating
      X.current !== null || // No active draggable
      !Ce || // Event has already been captured
      Se.dndKit || Se.defaultPrevented
    )
      return;
    const Ke = {
      active: Ce
    };
    Ie(ae, nt.options, Ke) === !0 && (Se.dndKit = {
      capturedBy: nt.sensor
    }, X.current = Me, tt(ae, nt));
  }, [T, tt]), ke = uI(u, Mn);
  yI(u), gn(() => {
    Y && S === Fn.Initializing && R(Fn.Initialized);
  }, [Y, S]), Te(
    () => {
      const {
        onDragMove: Ie
      } = L.current, {
        active: nt,
        activatorEvent: ae,
        collisions: Me,
        over: Se
      } = te.current;
      if (!nt || !ae)
        return;
      const Ce = {
        active: nt,
        activatorEvent: ae,
        collisions: Me,
        delta: {
          x: _t.x,
          y: _t.y
        },
        over: Se
      };
      es(() => {
        Ie == null || Ie(Ce), x({
          type: "onDragMove",
          event: Ce
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_t.x, _t.y]
  ), Te(
    () => {
      const {
        active: Ie,
        activatorEvent: nt,
        collisions: ae,
        droppableContainers: Me,
        scrollAdjustedTranslate: Se
      } = te.current;
      if (!Ie || X.current == null || !nt || !Se)
        return;
      const {
        onDragOver: Ce
      } = L.current, Ke = Me.get(Lt), _e = Ke && Ke.rect.current ? {
        id: Ke.id,
        rect: Ke.rect.current,
        data: Ke.data,
        disabled: Ke.disabled
      } : null, ye = {
        active: Ie,
        activatorEvent: nt,
        collisions: ae,
        delta: {
          x: Se.x,
          y: Se.y
        },
        over: _e
      };
      es(() => {
        De(_e), Ce == null || Ce(ye), x({
          type: "onDragOver",
          event: ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Lt]
  ), gn(() => {
    te.current = {
      activatorEvent: q,
      active: Z,
      activeNode: V,
      collisionRect: Ot,
      collisions: He,
      droppableRects: M,
      draggableNodes: T,
      draggingNode: ze,
      draggingNodeRect: Ee,
      droppableContainers: N,
      over: vt,
      scrollableAncestors: Et,
      scrollAdjustedTranslate: _t
    }, K.current = {
      initial: Ee,
      translated: Ot
    };
  }, [Z, V, He, Ot, T, ze, Ee, M, N, vt, Et, _t]), iI({
    ...$,
    delta: _,
    draggingRect: Ot,
    pointerCoordinates: st,
    scrollableAncestors: Et,
    scrollableAncestorRects: dt
  });
  const Dt = Pe(() => ({
    active: Z,
    activeNode: V,
    activeNodeRect: Y,
    activatorEvent: q,
    collisions: He,
    containerNodeRect: ne,
    dragOverlay: pe,
    draggableNodes: T,
    droppableContainers: N,
    droppableRects: M,
    over: vt,
    measureDroppableContainers: A,
    scrollableAncestors: Et,
    scrollableAncestorRects: dt,
    measuringConfiguration: C,
    measuringScheduled: D,
    windowRect: Ue
  }), [Z, V, Y, q, He, ne, pe, T, N, M, vt, A, Et, dt, C, D, Ue]), rr = Pe(() => ({
    activatorEvent: q,
    activators: ke,
    active: Z,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: I
    },
    dispatch: b,
    draggableNodes: T,
    over: vt,
    measureDroppableContainers: A
  }), [q, ke, Z, Y, b, I, T, vt, A]);
  return j.createElement(fb.Provider, {
    value: w
  }, j.createElement(Vi.Provider, {
    value: rr
  }, j.createElement(Tb.Provider, {
    value: Dt
  }, j.createElement(Pb.Provider, {
    value: on
  }, c)), j.createElement(AI, {
    disabled: (a == null ? void 0 : a.restoreFocus) === !1
  })), j.createElement(Dk, {
    ...a,
    hiddenTextDescribedById: I
  }));
  function or() {
    const Ie = (U == null ? void 0 : U.autoScrollEnabled) === !1, nt = typeof l == "object" ? l.enabled === !1 : l === !1, ae = P && !Ie && !nt;
    return typeof l == "object" ? {
      ...l,
      enabled: ae
    } : {
      enabled: ae
    };
  }
}), _I = /* @__PURE__ */ tn(null), Of = "button", OI = "Draggable";
function LI(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const s = Zo(OI), {
    activators: i,
    activatorEvent: a,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: u,
    draggableNodes: d,
    over: p
  } = je(Vi), {
    role: h = Of,
    roleDescription: v = "draggable",
    tabIndex: m = 0
  } = o ?? {}, y = (l == null ? void 0 : l.id) === t, b = je(y ? Pb : _I), [x, w] = ni(), [S, R] = ni(), P = bI(i, t), E = Do(n);
  gn(
    () => (d.set(t, {
      id: t,
      key: s,
      node: x,
      activatorNode: S,
      data: E
    }), () => {
      const _ = d.get(t);
      _ && _.key === s && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const T = Pe(() => ({
    role: h,
    tabIndex: m,
    "aria-disabled": r,
    "aria-pressed": y && h === Of ? !0 : void 0,
    "aria-roledescription": v,
    "aria-describedby": u.draggable
  }), [r, h, m, y, v, u.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: c,
    attributes: T,
    isDragging: y,
    listeners: r ? void 0 : P,
    node: x,
    over: p,
    setNodeRef: w,
    setActivatorNodeRef: R,
    transform: b
  };
}
function FI() {
  return je(Tb);
}
const VI = "Droppable", $I = {
  timeout: 25
};
function BI(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const s = Zo(VI), {
    active: i,
    dispatch: a,
    over: l,
    measureDroppableContainers: c
  } = je(Vi), u = xe({
    disabled: n
  }), d = xe(!1), p = xe(null), h = xe(null), {
    disabled: v,
    updateMeasurementsFor: m,
    timeout: y
  } = {
    ...$I,
    ...o
  }, b = Do(m ?? r), x = Ge(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        c(Array.isArray(b.current) ? b.current : [b.current]), h.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), w = Fi({
    callback: x,
    disabled: v || !i
  }), S = Ge((T, _) => {
    w && (_ && (w.unobserve(_), d.current = !1), T && w.observe(T));
  }, [w]), [R, P] = ni(S), E = Do(t);
  return Te(() => {
    !w || !R.current || (w.disconnect(), d.current = !1, w.observe(R.current));
  }, [R, w]), Te(
    () => (a({
      type: Je.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: n,
        node: R,
        rect: p,
        data: E
      }
    }), () => a({
      type: Je.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), Te(() => {
    n !== u.current.disabled && (a({
      type: Je.SetDroppableDisabled,
      id: r,
      key: s,
      disabled: n
    }), u.current.disabled = n);
  }, [r, s, n, a]), {
    active: i,
    rect: p,
    isOver: (l == null ? void 0 : l.id) === r,
    node: R,
    over: l,
    setNodeRef: P
  };
}
function zI(e, t, n) {
  const r = {
    ...e
  };
  return t.top + e.y <= n.top ? r.y = n.top - t.top : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom), t.left + e.x <= n.left ? r.x = n.left - t.left : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right), r;
}
const HI = (e) => {
  let {
    containerNodeRect: t,
    draggingNodeRect: n,
    transform: r
  } = e;
  return !n || !t ? r : zI(r, n, t);
}, jI = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
};
function $i(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function GI(e, t) {
  return e.reduce((n, r, o) => {
    const s = t.get(r);
    return s && (n[o] = s), n;
  }, Array(e.length));
}
function hs(e) {
  return e !== null && e >= 0;
}
function WI(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function UI(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Mb = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const s = $i(t, r, n), i = t[o], a = s[o];
  return !a || !i ? null : {
    x: a.left - i.left,
    y: a.top - i.top,
    scaleX: a.width / i.width,
    scaleY: a.height / i.height
  };
}, ms = {
  scaleX: 1,
  scaleY: 1
}, Lf = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: o,
    rects: s,
    overIndex: i
  } = e;
  const a = (t = s[n]) != null ? t : r;
  if (!a)
    return null;
  if (o === n) {
    const c = s[i];
    return c ? {
      x: 0,
      y: n < i ? c.top + c.height - (a.top + a.height) : c.top - a.top,
      ...ms
    } : null;
  }
  const l = KI(s, o, n);
  return o > n && o <= i ? {
    x: 0,
    y: -a.height - l,
    ...ms
  } : o < n && o >= i ? {
    x: 0,
    y: a.height + l,
    ...ms
  } : {
    x: 0,
    y: 0,
    ...ms
  };
};
function KI(e, t, n) {
  const r = e[t], o = e[t - 1], s = e[t + 1];
  return r ? n < t ? o ? r.top - (o.top + o.height) : s ? s.top - (r.top + r.height) : 0 : s ? s.top - (r.top + r.height) : o ? r.top - (o.top + o.height) : 0 : 0;
}
const Ab = "Sortable", Db = /* @__PURE__ */ j.createContext({
  activeIndex: -1,
  containerId: Ab,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Mb,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Ff(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = Mb,
    disabled: s = !1
  } = e;
  const {
    active: i,
    dragOverlay: a,
    droppableRects: l,
    over: c,
    measureDroppableContainers: u
  } = FI(), d = Zo(Ab, n), p = a.rect !== null, h = Pe(() => r.map((P) => typeof P == "object" && "id" in P ? P.id : P), [r]), v = i != null, m = i ? h.indexOf(i.id) : -1, y = c ? h.indexOf(c.id) : -1, b = xe(h), x = !WI(h, b.current), w = y !== -1 && m === -1 || x, S = UI(s);
  gn(() => {
    x && v && u(h);
  }, [x, h, v, u]), Te(() => {
    b.current = h;
  }, [h]);
  const R = Pe(
    () => ({
      activeIndex: m,
      containerId: d,
      disabled: S,
      disableTransforms: w,
      items: h,
      overIndex: y,
      useDragOverlay: p,
      sortedRects: GI(h, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, d, S.draggable, S.droppable, w, h, y, l, p, o]
  );
  return j.createElement(Db.Provider, {
    value: R
  }, t);
}
const YI = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return $i(n, r, o).indexOf(t);
}, XI = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: s,
    newIndex: i,
    previousItems: a,
    previousContainerId: l,
    transition: c
  } = e;
  return !c || !r || a !== s && o === i ? !1 : n ? !0 : i !== o && t === l;
}, qI = {
  duration: 200,
  easing: "ease"
}, Nb = "transform", ZI = /* @__PURE__ */ Hr.Transition.toString({
  property: Nb,
  duration: 0,
  easing: "linear"
}), JI = {
  roleDescription: "sortable"
};
function QI(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [s, i] = Qe(null), a = xe(n);
  return gn(() => {
    if (!t && n !== a.current && r.current) {
      const l = o.current;
      if (l) {
        const c = no(r.current, {
          ignoreTransform: !0
        }), u = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (u.x || u.y) && i(u);
      }
    }
    n !== a.current && (a.current = n);
  }, [t, n, r, o]), Te(() => {
    s && i(null);
  }, [s]), s;
}
function kb(e) {
  let {
    animateLayoutChanges: t = XI,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: s = YI,
    id: i,
    strategy: a,
    resizeObserverConfig: l,
    transition: c = qI
  } = e;
  const {
    items: u,
    containerId: d,
    activeIndex: p,
    disabled: h,
    disableTransforms: v,
    sortedRects: m,
    overIndex: y,
    useDragOverlay: b,
    strategy: x
  } = je(Db), w = e_(r, h), S = u.indexOf(i), R = Pe(() => ({
    sortable: {
      containerId: d,
      index: S,
      items: u
    },
    ...o
  }), [d, o, S, u]), P = Pe(() => u.slice(u.indexOf(i)), [u, i]), {
    rect: E,
    node: T,
    isOver: _,
    setNodeRef: N
  } = BI({
    id: i,
    data: R,
    disabled: w.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: P,
      ...l
    }
  }), {
    active: O,
    activatorEvent: K,
    activeNodeRect: Z,
    attributes: X,
    setNodeRef: U,
    listeners: B,
    isDragging: q,
    over: G,
    setActivatorNodeRef: L,
    transform: I
  } = LI({
    id: i,
    data: R,
    attributes: {
      ...JI,
      ...n
    },
    disabled: w.draggable
  }), ee = vk(N, U), C = !!O, M = C && !v && hs(p) && hs(y), A = !b && q, D = A && M ? I : null, z = M ? D ?? (a ?? x)({
    rects: m,
    activeNodeRect: Z,
    activeIndex: p,
    overIndex: y,
    index: S
  }) : null, $ = hs(p) && hs(y) ? s({
    id: i,
    items: u,
    activeIndex: p,
    overIndex: y
  }) : S, F = O == null ? void 0 : O.id, Y = xe({
    activeId: F,
    items: u,
    newIndex: $,
    containerId: d
  }), ne = u !== Y.current.items, te = t({
    active: O,
    containerId: d,
    isDragging: q,
    isSorting: C,
    id: i,
    index: S,
    items: u,
    newIndex: Y.current.newIndex,
    previousItems: Y.current.items,
    previousContainerId: Y.current.containerId,
    transition: c,
    wasDragging: Y.current.activeId != null
  }), he = QI({
    disabled: !te,
    index: S,
    node: T,
    rect: E
  });
  return Te(() => {
    C && Y.current.newIndex !== $ && (Y.current.newIndex = $), d !== Y.current.containerId && (Y.current.containerId = d), u !== Y.current.items && (Y.current.items = u);
  }, [C, $, d, u]), Te(() => {
    if (F === Y.current.activeId)
      return;
    if (F != null && Y.current.activeId == null) {
      Y.current.activeId = F;
      return;
    }
    const ze = setTimeout(() => {
      Y.current.activeId = F;
    }, 50);
    return () => clearTimeout(ze);
  }, [F]), {
    active: O,
    activeIndex: p,
    attributes: X,
    data: R,
    rect: E,
    index: S,
    newIndex: $,
    items: u,
    isOver: _,
    isSorting: C,
    isDragging: q,
    listeners: B,
    node: T,
    overIndex: y,
    over: G,
    setNodeRef: ee,
    setActivatorNodeRef: L,
    setDroppableNodeRef: N,
    setDraggableNodeRef: U,
    transform: he ?? z,
    transition: pe()
  };
  function pe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      he || // Or to prevent items jumping to back to their "new" position when items change
      ne && Y.current.newIndex === S
    )
      return ZI;
    if (!(A && !Jc(K) || !c) && (C || te))
      return Hr.Transition.toString({
        ...c,
        property: Nb
      });
  }
}
function e_(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e == null ? void 0 : e.draggable) != null ? n : t.draggable,
    droppable: (r = e == null ? void 0 : e.droppable) != null ? r : t.droppable
  };
}
function si(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const t_ = [Re.Down, Re.Right, Re.Up, Re.Left], n_ = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: s,
      over: i,
      scrollableAncestors: a
    }
  } = t;
  if (t_.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    s.getEnabled().forEach((d) => {
      if (!d || d != null && d.disabled)
        return;
      const p = o.get(d.id);
      if (p)
        switch (e.code) {
          case Re.Down:
            r.top < p.top && l.push(d);
            break;
          case Re.Up:
            r.top > p.top && l.push(d);
            break;
          case Re.Left:
            r.left > p.left && l.push(d);
            break;
          case Re.Right:
            r.left < p.left && l.push(d);
            break;
        }
    });
    const c = _k({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let u = mb(c, "id");
    if (u === (i == null ? void 0 : i.id) && c.length > 1 && (u = c[1].id), u != null) {
      const d = s.get(n.id), p = s.get(u), h = p ? o.get(p.id) : null, v = p == null ? void 0 : p.node.current;
      if (v && h && d && p) {
        const y = Li(v).some((P, E) => a[E] !== P), b = Ib(d, p), x = r_(d, p), w = y || !b ? {
          x: 0,
          y: 0
        } : {
          x: x ? r.width - h.width : 0,
          y: x ? r.height - h.height : 0
        }, S = {
          x: h.left,
          y: h.top
        };
        return w.x && w.y ? S : No(S, w);
      }
    }
  }
};
function Ib(e, t) {
  return !si(e) || !si(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function r_(e, t) {
  return !si(e) || !si(t) || !Ib(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
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
function $n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function It(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: $n(n, r[e])
    }));
  };
}
function Bi(e) {
  return e instanceof Function;
}
function o_(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function s_(e, t) {
  const n = [], r = (o) => {
    o.forEach((s) => {
      n.push(s);
      const i = t(s);
      i != null && i.length && r(i);
    });
  };
  return r(e), n;
}
function ue(e, t, n) {
  let r = [], o;
  return (s) => {
    let i;
    n.key && n.debug && (i = Date.now());
    const a = e(s);
    if (!(a.length !== r.length || a.some((u, d) => r[d] !== u)))
      return o;
    r = a;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...a), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - i) * 100) / 100, d = Math.round((Date.now() - c) * 100) / 100, p = d / 16, h = (v, m) => {
        for (v = String(v); v.length < m; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${h(d, 5)} /${h(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function de(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function i_(e, t, n, r) {
  const o = () => {
    var i;
    return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
  }, s = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: ue(() => [e, n, t, s], (i, a, l, c) => ({
      table: i,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), de(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((i) => {
    i.createCell == null || i.createCell(s, n, t, e);
  }, {}), s;
}
function a_(e, t, n, r) {
  var o, s;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (o = (s = a.id) != null ? s : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, u;
  if (a.accessorFn ? u = a.accessorFn : l && (l.includes(".") ? u = (p) => {
    let h = p;
    for (const m of l.split(".")) {
      var v;
      h = (v = h) == null ? void 0 : v[m], process.env.NODE_ENV !== "production" && h === void 0 && console.warn(`"${m}" in deeply nested key "${l}" returned undefined.`);
    }
    return h;
  } : u = (p) => p[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: ue(() => [!0], () => {
      var p;
      return [d, ...(p = d.columns) == null ? void 0 : p.flatMap((h) => h.getFlatColumns())];
    }, de(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: ue(() => [e._getOrderColumnsFn()], (p) => {
      var h;
      if ((h = d.columns) != null && h.length) {
        let v = d.columns.flatMap((m) => m.getLeafColumns());
        return p(v);
      }
      return [d];
    }, de(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(d, e);
  return d;
}
const ht = "debugHeaders";
function Vf(e, t, n) {
  var r;
  let s = {
    id: (r = n.id) != null ? r : t.id,
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
const l_ = {
  createTable: (e) => {
    e.getHeaderGroups = ue(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var s, i;
      const a = (s = r == null ? void 0 : r.map((d) => n.find((p) => p.id === d)).filter(Boolean)) != null ? s : [], l = (i = o == null ? void 0 : o.map((d) => n.find((p) => p.id === d)).filter(Boolean)) != null ? i : [], c = n.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return gs(t, [...a, ...c, ...l], e);
    }, de(e.options, ht, "getHeaderGroups")), e.getCenterHeaderGroups = ue(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), gs(t, n, e, "center")), de(e.options, ht, "getCenterHeaderGroups")), e.getLeftHeaderGroups = ue(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((i) => n.find((a) => a.id === i)).filter(Boolean)) != null ? o : [];
      return gs(t, s, e, "left");
    }, de(e.options, ht, "getLeftHeaderGroups")), e.getRightHeaderGroups = ue(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const s = (o = r == null ? void 0 : r.map((i) => n.find((a) => a.id === i)).filter(Boolean)) != null ? o : [];
      return gs(t, s, e, "right");
    }, de(e.options, ht, "getRightHeaderGroups")), e.getFooterGroups = ue(() => [e.getHeaderGroups()], (t) => [...t].reverse(), de(e.options, ht, "getFooterGroups")), e.getLeftFooterGroups = ue(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), de(e.options, ht, "getLeftFooterGroups")), e.getCenterFooterGroups = ue(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), de(e.options, ht, "getCenterFooterGroups")), e.getRightFooterGroups = ue(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), de(e.options, ht, "getRightFooterGroups")), e.getFlatHeaders = ue(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), de(e.options, ht, "getFlatHeaders")), e.getLeftFlatHeaders = ue(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), de(e.options, ht, "getLeftFlatHeaders")), e.getCenterFlatHeaders = ue(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), de(e.options, ht, "getCenterFlatHeaders")), e.getRightFlatHeaders = ue(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), de(e.options, ht, "getRightFlatHeaders")), e.getCenterLeafHeaders = ue(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), de(e.options, ht, "getCenterLeafHeaders")), e.getLeftLeafHeaders = ue(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), de(e.options, ht, "getLeftLeafHeaders")), e.getRightLeafHeaders = ue(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), de(e.options, ht, "getRightLeafHeaders")), e.getLeafHeaders = ue(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, s, i, a, l, c;
      return [...(o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : [], ...(i = (a = n[0]) == null ? void 0 : a.headers) != null ? i : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((u) => u.getLeafHeaders()).flat();
    }, de(e.options, ht, "getLeafHeaders"));
  }
};
function gs(e, t, n, r) {
  var o, s;
  let i = 0;
  const a = function(p, h) {
    h === void 0 && (h = 1), i = Math.max(i, h), p.filter((v) => v.getIsVisible()).forEach((v) => {
      var m;
      (m = v.columns) != null && m.length && a(v.columns, h + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (p, h) => {
    const v = {
      depth: h,
      id: [r, `${h}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    p.forEach((y) => {
      const b = [...m].reverse()[0], x = y.column.depth === v.depth;
      let w, S = !1;
      if (x && y.column.parent ? w = y.column.parent : (w = y.column, S = !0), b && (b == null ? void 0 : b.column) === w)
        b.subHeaders.push(y);
      else {
        const R = Vf(n, w, {
          id: [r, h, w.id, y == null ? void 0 : y.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${m.filter((P) => P.column === w).length}` : void 0,
          depth: h,
          index: m.length
        });
        R.subHeaders.push(y), m.push(R);
      }
      v.headers.push(y), y.headerGroup = v;
    }), l.push(v), h > 0 && c(m, h - 1);
  }, u = t.map((p, h) => Vf(n, p, {
    depth: i,
    index: h
  }));
  c(u, i - 1), l.reverse();
  const d = (p) => p.filter((v) => v.column.getIsVisible()).map((v) => {
    let m = 0, y = 0, b = [0];
    v.subHeaders && v.subHeaders.length ? (b = [], d(v.subHeaders).forEach((w) => {
      let {
        colSpan: S,
        rowSpan: R
      } = w;
      m += S, b.push(R);
    })) : m = 1;
    const x = Math.min(...b);
    return y = y + x, v.colSpan = m, v.rowSpan = y, {
      colSpan: m,
      rowSpan: y
    };
  });
  return d((o = (s = l[0]) == null ? void 0 : s.headers) != null ? o : []), l;
}
const ru = (e, t, n, r, o, s, i) => {
  let a = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: i,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (a._valuesCache.hasOwnProperty(l))
        return a._valuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return a._valuesCache[l] = c.accessorFn(a.original, r), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = c.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = a.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => s_(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = a;
      for (; ; ) {
        const u = c.getParentRow();
        if (!u) break;
        l.push(u), c = u;
      }
      return l.reverse();
    },
    getAllCells: ue(() => [e.getAllLeafColumns()], (l) => l.map((c) => i_(e, a, c, c.id)), de(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: ue(() => [a.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), de(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, c_ = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, _b = (e, t, n) => {
  var r, o;
  const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
};
_b.autoRemove = (e) => qt(e);
const Ob = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Ob.autoRemove = (e) => qt(e);
const Lb = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Lb.autoRemove = (e) => qt(e);
const Fb = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Fb.autoRemove = (e) => qt(e);
const Vb = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Vb.autoRemove = (e) => qt(e) || !(e != null && e.length);
const $b = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
$b.autoRemove = (e) => qt(e) || !(e != null && e.length);
const Bb = (e, t, n) => e.getValue(t) === n;
Bb.autoRemove = (e) => qt(e);
const zb = (e, t, n) => e.getValue(t) == n;
zb.autoRemove = (e) => qt(e);
const ou = (e, t, n) => {
  let [r, o] = n;
  const s = e.getValue(t);
  return s >= r && s <= o;
};
ou.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(r) ? -1 / 0 : r, i = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (s > i) {
    const a = s;
    s = i, i = a;
  }
  return [s, i];
};
ou.autoRemove = (e) => qt(e) || qt(e[0]) && qt(e[1]);
const xn = {
  includesString: _b,
  includesStringSensitive: Ob,
  equalsString: Lb,
  arrIncludes: Fb,
  arrIncludesAll: Vb,
  arrIncludesSome: $b,
  equals: Bb,
  weakEquals: zb,
  inNumberRange: ou
};
function qt(e) {
  return e == null || e === "";
}
const u_ = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: It("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? xn.includesString : typeof r == "number" ? xn.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? xn.equals : Array.isArray(r) ? xn.arrIncludes : xn.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Bi(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : xn[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), s = r == null ? void 0 : r.find((u) => u.id === e.id), i = $n(n, s ? s.value : void 0);
        if ($f(o, i, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: i
        };
        if (s) {
          var c;
          return (c = r == null ? void 0 : r.map((u) => u.id === e.id ? l : u)) != null ? c : [];
        }
        return r != null && r.length ? [...r, l] : [l];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var s;
        return (s = $n(t, o)) == null ? void 0 : s.filter((i) => {
          const a = n.find((l) => l.id === i.id);
          if (a) {
            const l = a.getFilterFn();
            if ($f(l, i.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function $f(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const d_ = (e, t, n) => n.reduce((r, o) => {
  const s = o.getValue(e);
  return r + (typeof s == "number" ? s : 0);
}, 0), f_ = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r > s || r === void 0 && s >= s) && (r = s);
  }), r;
}, p_ = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (r < s || r === void 0 && s >= s) && (r = s);
  }), r;
}, h_ = (e, t, n) => {
  let r, o;
  return n.forEach((s) => {
    const i = s.getValue(e);
    i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
  }), [r, o];
}, m_ = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let s = o.getValue(e);
    s != null && (s = +s) >= s && (++n, r += s);
  }), n) return r / n;
}, g_ = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((s) => s.getValue(e));
  if (!o_(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((s, i) => s - i);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, v_ = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), y_ = (e, t) => new Set(t.map((n) => n.getValue(e))).size, b_ = (e, t) => t.length, Ta = {
  sum: d_,
  min: f_,
  max: p_,
  extent: h_,
  mean: m_,
  median: g_,
  unique: v_,
  uniqueCount: y_,
  count: b_
}, w_ = {
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
    onGroupingChange: It("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
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
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return Ta.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Ta.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Bi(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Ta[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function x_(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((s) => !t.includes(s.id));
  return n === "remove" ? r : [...t.map((s) => e.find((i) => i.id === s)).filter(Boolean), ...r];
}
const S_ = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: It("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = ue((n) => [wo(t, n)], (n) => n.findIndex((r) => r.id === e.id), de(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = wo(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = wo(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = ue(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let s = [];
      if (!(t != null && t.length))
        s = o;
      else {
        const i = [...t], a = [...o];
        for (; a.length && i.length; ) {
          const l = i.shift(), c = a.findIndex((u) => u.id === l);
          c > -1 && s.push(a.splice(c, 1)[0]);
        }
        s = [...s, ...a];
      }
      return x_(s, n, r);
    }, de(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Pa = () => ({
  left: [],
  right: []
}), C_ = {
  getInitialState: (e) => ({
    columnPinning: Pa(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: It("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var s, i;
        if (n === "right") {
          var a, l;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((d) => !(r != null && r.includes(d))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((d) => !(r != null && r.includes(d))), ...r]
          };
        }
        if (n === "left") {
          var c, u;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((d) => !(r != null && r.includes(d))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((d) => !(r != null && r.includes(d)))
          };
        }
        return {
          left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((d) => !(r != null && r.includes(d))),
          right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((d) => !(r != null && r.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, s, i;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? s : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((a) => a.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, s = n.some((a) => r == null ? void 0 : r.includes(a)), i = n.some((a) => o == null ? void 0 : o.includes(a));
      return s ? "left" : i ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = ue(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const s = [...r ?? [], ...o ?? []];
      return n.filter((i) => !s.includes(i.column.id));
    }, de(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = ue(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "left"
    })), de(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = ue(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
      ...s,
      position: "right"
    })), de(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? Pa() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Pa());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, s;
        return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = ue(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), de(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = ue(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), de(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = ue(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((s) => !o.includes(s.id));
    }, de(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function R_(e) {
  return e || (typeof document < "u" ? document : null);
}
const vs = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Ma = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), E_ = {
  getDefaultColumnDef: () => vs,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Ma(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: It("columnSizing", e),
    onColumnSizingInfoChange: It("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const s = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : vs.minSize, (r = s ?? e.columnDef.size) != null ? r : vs.size), (o = e.columnDef.maxSize) != null ? o : vs.maxSize);
    }, e.getStart = ue((n) => [n, wo(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), de(t.options, "debugColumns", "getStart")), e.getAfter = ue((n) => [n, wo(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), de(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var s;
          n += (s = o.column.getSize()) != null ? s : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (s) => {
        if (!r || !o || (s.persist == null || s.persist(), Aa(s) && s.touches && s.touches.length > 1))
          return;
        const i = e.getSize(), a = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], l = Aa(s) ? Math.round(s.touches[0].clientX) : s.clientX, c = {}, u = (b, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((w) => {
            var S, R;
            const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, E = (x - ((S = w == null ? void 0 : w.startOffset) != null ? S : 0)) * P, T = Math.max(E / ((R = w == null ? void 0 : w.startSize) != null ? R : 0), -0.999999);
            return w.columnSizingStart.forEach((_) => {
              let [N, O] = _;
              c[N] = Math.round(Math.max(O + O * T, 0) * 100) / 100;
            }), {
              ...w,
              deltaOffset: E,
              deltaPercentage: T
            };
          }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((w) => ({
            ...w,
            ...c
          })));
        }, d = (b) => u("move", b), p = (b) => {
          u("end", b), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, h = R_(n), v = {
          moveHandler: (b) => d(b.clientX),
          upHandler: (b) => {
            h == null || h.removeEventListener("mousemove", v.moveHandler), h == null || h.removeEventListener("mouseup", v.upHandler), p(b.clientX);
          }
        }, m = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), d(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var x;
            h == null || h.removeEventListener("touchmove", m.moveHandler), h == null || h.removeEventListener("touchend", m.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), p((x = b.touches[0]) == null ? void 0 : x.clientX);
          }
        }, y = T_() ? {
          passive: !1
        } : !1;
        Aa(s) ? (h == null || h.addEventListener("touchmove", m.moveHandler, y), h == null || h.addEventListener("touchend", m.upHandler, y)) : (h == null || h.addEventListener("mousemove", v.moveHandler, y), h == null || h.addEventListener("mouseup", v.upHandler, y)), t.setColumnSizingInfo((b) => ({
          ...b,
          startOffset: l,
          startSize: i,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: r.id
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
      e.setColumnSizingInfo(t ? Ma() : (n = e.initialState.columnSizingInfo) != null ? n : Ma());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let ys = null;
function T_() {
  if (typeof ys == "boolean") return ys;
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
  return ys = e, ys;
}
function Aa(e) {
  return e.type === "touchstart";
}
const P_ = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: It("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((s) => s.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = ue(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), de(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = ue(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], de(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => ue(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), de(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, s) => ({
        ...o,
        [s.id]: n || !(s.getCanHide != null && s.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function wo(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const M_ = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, A_ = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: It("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, s;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => xn.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Bi(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : xn[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, D_ = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: It("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, s;
      e.setExpanded(r ? {} : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
        const i = s.split(".");
        r = Math.max(r, i.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const s = r === !0 ? !0 : !!(r != null && r[e.id]);
        let i = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
          i[a] = !0;
        }) : i = r, n = (o = n) != null ? o : !s, !s && n)
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
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, Dl = 0, Nl = 10, Da = () => ({
  pageIndex: Dl,
  pageSize: Nl
}), N_ = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Da(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: It("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (s) => $n(r, s);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Da() : (o = e.initialState.pagination) != null ? o : Da());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let s = $n(r, o.pageIndex);
        const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return s = Math.max(0, Math.min(s, i)), {
          ...o,
          pageIndex: s
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, s;
      e.setPageIndex(r ? Dl : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Dl);
    }, e.resetPageSize = (r) => {
      var o, s;
      e.setPageSize(r ? Nl : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Nl);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const s = Math.max(1, $n(r, o.pageSize)), i = o.pageSize * o.pageIndex, a = Math.floor(i / s);
        return {
          ...o,
          pageIndex: a,
          pageSize: s
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var s;
      let i = $n(r, (s = e.options.pageCount) != null ? s : -1);
      return typeof i == "number" && (i = Math.max(-1, i)), {
        ...o,
        pageCount: i
      };
    }), e.getPageOptions = ue(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((s, i) => i)), o;
    }, de(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Na = () => ({
  top: [],
  bottom: []
}), k_ = {
  getInitialState: (e) => ({
    rowPinning: Na(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: It("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const s = r ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], i = o ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...i, e.id, ...s]);
      t.setRowPinning((l) => {
        var c, u;
        if (n === "bottom") {
          var d, p;
          return {
            top: ((d = l == null ? void 0 : l.top) != null ? d : []).filter((m) => !(a != null && a.has(m))),
            bottom: [...((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((m) => !(a != null && a.has(m))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var h, v;
          return {
            top: [...((h = l == null ? void 0 : l.top) != null ? h : []).filter((m) => !(a != null && a.has(m))), ...Array.from(a)],
            bottom: ((v = l == null ? void 0 : l.bottom) != null ? v : []).filter((m) => !(a != null && a.has(m)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((m) => !(a != null && a.has(m))),
          bottom: ((u = l == null ? void 0 : l.bottom) != null ? u : []).filter((m) => !(a != null && a.has(m)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, s = n.some((a) => r == null ? void 0 : r.includes(a)), i = n.some((a) => o == null ? void 0 : o.includes(a));
      return s ? "top" : i ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const s = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((i) => {
        let {
          id: a
        } = i;
        return a;
      });
      return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? Na() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Na());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, s;
        return !!((o = r.top) != null && o.length || (s = r.bottom) != null && s.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
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
        position: r
      }));
    }, e.getTopRows = ue(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), de(e.options, "debugRows", "getTopRows")), e.getBottomRows = ue(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), de(e.options, "debugRows", "getBottomRows")), e.getCenterRows = ue(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((s) => !o.has(s.id));
    }, de(e.options, "debugRows", "getCenterRows"));
  }
}, I_ = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: It("rowSelection", e),
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
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((s) => {
          s.getCanSelect() && (r[s.id] = !0);
        }) : o.forEach((s) => {
          delete r[s.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((s) => {
        kl(o, s.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = ue(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? ka(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, de(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = ue(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? ka(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, de(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = ue(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? ka(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, de(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
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
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((s) => {
        var i;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return s;
        const a = {
          ...s
        };
        return kl(a, e.id, n, (i = r == null ? void 0 : r.selectChildren) != null ? i : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return su(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Il(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Il(e, n) === "all";
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
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, kl = (e, t, n, r, o) => {
  var s;
  const i = o.getRow(t, !0);
  n ? (i.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), i.getCanSelect() && (e[t] = !0)) : delete e[t], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((a) => kl(e, a.id, n, r, o));
};
function ka(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, s = function(i, a) {
    return i.map((l) => {
      var c;
      const u = su(l, n);
      if (u && (r.push(l), o[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: s(l.subRows)
      }), u)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: s(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function su(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Il(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, s = !1;
  return e.subRows.forEach((i) => {
    if (!(s && !o) && (i.getCanSelect() && (su(i, t) ? s = !0 : o = !1), i.subRows && i.subRows.length)) {
      const a = Il(i, t);
      a === "all" ? s = !0 : (a === "some" && (s = !0), o = !1);
    }
  }), o ? "all" : s ? "some" : !1;
}
const _l = /([0-9]+)/gm, __ = (e, t, n) => Hb(Yn(e.getValue(n)).toLowerCase(), Yn(t.getValue(n)).toLowerCase()), O_ = (e, t, n) => Hb(Yn(e.getValue(n)), Yn(t.getValue(n))), L_ = (e, t, n) => iu(Yn(e.getValue(n)).toLowerCase(), Yn(t.getValue(n)).toLowerCase()), F_ = (e, t, n) => iu(Yn(e.getValue(n)), Yn(t.getValue(n))), V_ = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, $_ = (e, t, n) => iu(e.getValue(n), t.getValue(n));
function iu(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Yn(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Hb(e, t) {
  const n = e.split(_l).filter(Boolean), r = t.split(_l).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), s = r.shift(), i = parseInt(o, 10), a = parseInt(s, 10), l = [i, a].sort();
    if (isNaN(l[0])) {
      if (o > s)
        return 1;
      if (s > o)
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
  return n.length - r.length;
}
const lo = {
  alphanumeric: __,
  alphanumericCaseSensitive: O_,
  text: L_,
  textCaseSensitive: F_,
  datetime: V_,
  basic: $_
}, B_ = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: It("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const s = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(s) === "[object Date]")
          return lo.datetime;
        if (typeof s == "string" && (r = !0, s.split(_l).length > 1))
          return lo.alphanumeric;
      }
      return r ? lo.text : lo.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Bi(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : lo[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
      t.setSorting((i) => {
        const a = i == null ? void 0 : i.find((h) => h.id === e.id), l = i == null ? void 0 : i.findIndex((h) => h.id === e.id);
        let c = [], u, d = s ? n : o === "desc";
        if (i != null && i.length && e.getCanMultiSort() && r ? a ? u = "toggle" : u = "add" : i != null && i.length && l !== i.length - 1 ? u = "replace" : a ? u = "toggle" : u = "replace", u === "toggle" && (s || o || (u = "remove")), u === "add") {
          var p;
          c = [...i, {
            id: e.id,
            desc: d
          }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? c = i.map((h) => h.id === e.id ? {
          ...h,
          desc: d
        } : h) : u === "remove" ? c = i.filter((h) => h.id !== e.id) : c = [{
          id: e.id,
          desc: d
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const s = e.getFirstSortDir(), i = e.getIsSorted();
      return i ? i !== s && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : i === "desc" ? "asc" : "desc" : s;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, z_ = [
  l_,
  P_,
  S_,
  C_,
  c_,
  u_,
  M_,
  //depends on ColumnFaceting
  A_,
  //depends on ColumnFiltering
  B_,
  w_,
  //depends on RowSorting
  D_,
  N_,
  k_,
  I_,
  E_
];
function H_(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...z_, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const s = o._features.reduce((p, h) => Object.assign(p, h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(o)), {}), i = (p) => o.options.mergeOptions ? o.options.mergeOptions(s, p) : {
    ...s,
    ...p
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((p) => {
    var h;
    l = (h = p.getInitialState == null ? void 0 : p.getInitialState(l)) != null ? h : l;
  });
  const c = [];
  let u = !1;
  const d = {
    _features: r,
    options: {
      ...s,
      ...e
    },
    initialState: l,
    _queue: (p) => {
      c.push(p), u || (u = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        u = !1;
      }).catch((h) => setTimeout(() => {
        throw h;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (p) => {
      const h = $n(p, o.options);
      o.options = i(h);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, h, v) => {
      var m;
      return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(p, h, v)) != null ? m : `${v ? [v.id, h].join(".") : h}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, h) => {
      let v = (h ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!v && (v = o.getCoreRowModel().rowsById[p], !v))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${p}`) : new Error();
      return v;
    },
    _getDefaultColumnDef: ue(() => [o.options.defaultColumn], (p) => {
      var h;
      return p = (h = p) != null ? h : {}, {
        header: (v) => {
          const m = v.header.column.columnDef;
          return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (v) => {
          var m, y;
          return (m = (y = v.renderValue()) == null || y.toString == null ? void 0 : y.toString()) != null ? m : null;
        },
        ...o._features.reduce((v, m) => Object.assign(v, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
        ...p
      };
    }, de(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: ue(() => [o._getColumnDefs()], (p) => {
      const h = function(v, m, y) {
        return y === void 0 && (y = 0), v.map((b) => {
          const x = a_(o, b, y, m), w = b;
          return x.columns = w.columns ? h(w.columns, x, y + 1) : [], x;
        });
      };
      return h(p);
    }, de(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: ue(() => [o.getAllColumns()], (p) => p.flatMap((h) => h.getFlatColumns()), de(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: ue(() => [o.getAllFlatColumns()], (p) => p.reduce((h, v) => (h[v.id] = v, h), {}), de(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: ue(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, h) => {
      let v = p.flatMap((m) => m.getLeafColumns());
      return h(v);
    }, de(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (p) => {
      const h = o._getAllFlatColumnsById()[p];
      return process.env.NODE_ENV !== "production" && !h && console.error(`[Table] Column with id '${p}' does not exist.`), h;
    }
  };
  Object.assign(o, d);
  for (let p = 0; p < o._features.length; p++) {
    const h = o._features[p];
    h == null || h.createTable == null || h.createTable(o);
  }
  return o;
}
function j_() {
  return (e) => ue(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, s, i) {
      s === void 0 && (s = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const u = ru(e, e._getRowId(o[c], c, i), o[c], c, s, void 0, i == null ? void 0 : i.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, a.push(u), e.options.getSubRows) {
          var l;
          u.originalSubRows = e.options.getSubRows(o[c], c), (l = u.originalSubRows) != null && l.length && (u.subRows = r(u.originalSubRows, s + 1, u));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, de(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function G_(e) {
  const t = [], n = (r) => {
    var o;
    t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
  };
  return e.rows.forEach(n), {
    rows: t,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function W_(e, t, n) {
  return n.options.filterFromLeafRows ? U_(e, t, n) : K_(e, t, n);
}
function U_(e, t, n) {
  var r;
  const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let p = 0; p < l.length; p++) {
      var d;
      let h = l[p];
      const v = ru(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
      if (v.columnFilters = h.columnFilters, (d = h.subRows) != null && d.length && c < i) {
        if (v.subRows = a(h.subRows, c + 1), h = v, t(h) && !v.subRows.length) {
          u.push(h), s[h.id] = h, o.push(h);
          continue;
        }
        if (t(h) || v.subRows.length) {
          u.push(h), s[h.id] = h, o.push(h);
          continue;
        }
      } else
        h = v, t(h) && (u.push(h), s[h.id] = h, o.push(h));
    }
    return u;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: s
  };
}
function K_(e, t, n) {
  var r;
  const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let p = 0; p < l.length; p++) {
      let h = l[p];
      if (t(h)) {
        var d;
        if ((d = h.subRows) != null && d.length && c < i) {
          const m = ru(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
          m.subRows = a(h.subRows, c + 1), h = m;
        }
        u.push(h), o.push(h), s[h.id] = h;
      }
    }
    return u;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: s
  };
}
function Y_() {
  return (e) => ue(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, r) => {
    if (!t.rows.length || !(n != null && n.length) && !r) {
      for (let p = 0; p < t.flatRows.length; p++)
        t.flatRows[p].columnFilters = {}, t.flatRows[p].columnFiltersMeta = {};
      return t;
    }
    const o = [], s = [];
    (n ?? []).forEach((p) => {
      var h;
      const v = e.getColumn(p.id);
      if (!v)
        return;
      const m = v.getFilterFn();
      if (!m) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${v.id}.`);
        return;
      }
      o.push({
        id: p.id,
        filterFn: m,
        resolvedValue: (h = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(p.value)) != null ? h : p.value
      });
    });
    const i = (n ?? []).map((p) => p.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((p) => p.getCanGlobalFilter());
    r && a && l.length && (i.push("__global__"), l.forEach((p) => {
      var h;
      s.push({
        id: p.id,
        filterFn: a,
        resolvedValue: (h = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(r)) != null ? h : r
      });
    }));
    let c, u;
    for (let p = 0; p < t.flatRows.length; p++) {
      const h = t.flatRows[p];
      if (h.columnFilters = {}, o.length)
        for (let v = 0; v < o.length; v++) {
          c = o[v];
          const m = c.id;
          h.columnFilters[m] = c.filterFn(h, m, c.resolvedValue, (y) => {
            h.columnFiltersMeta[m] = y;
          });
        }
      if (s.length) {
        for (let v = 0; v < s.length; v++) {
          u = s[v];
          const m = u.id;
          if (u.filterFn(h, m, u.resolvedValue, (y) => {
            h.columnFiltersMeta[m] = y;
          })) {
            h.columnFilters.__global__ = !0;
            break;
          }
        }
        h.columnFilters.__global__ !== !0 && (h.columnFilters.__global__ = !1);
      }
    }
    const d = (p) => {
      for (let h = 0; h < i.length; h++)
        if (p.columnFilters[i[h]] === !1)
          return !1;
      return !0;
    };
    return W_(t.rows, d, e);
  }, de(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function X_(e) {
  return (t) => ue(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: o,
      pageIndex: s
    } = n;
    let {
      rows: i,
      flatRows: a,
      rowsById: l
    } = r;
    const c = o * s, u = c + o;
    i = i.slice(c, u);
    let d;
    t.options.paginateExpandedRows ? d = {
      rows: i,
      flatRows: a,
      rowsById: l
    } : d = G_({
      rows: i,
      flatRows: a,
      rowsById: l
    }), d.flatRows = [];
    const p = (h) => {
      d.flatRows.push(h), h.subRows.length && h.subRows.forEach(p);
    };
    return d.rows.forEach(p), d;
  }, de(t.options, "debugTable", "getPaginationRowModel"));
}
function q_() {
  return (e) => ue(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], s = r.filter((l) => {
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
      const c = l.map((u) => ({
        ...u
      }));
      return c.sort((u, d) => {
        for (let h = 0; h < s.length; h += 1) {
          var p;
          const v = s[h], m = i[v.id], y = m.sortUndefined, b = (p = v == null ? void 0 : v.desc) != null ? p : !1;
          let x = 0;
          if (y) {
            const w = u.getValue(v.id), S = d.getValue(v.id), R = w === void 0, P = S === void 0;
            if (R || P) {
              if (y === "first") return R ? -1 : 1;
              if (y === "last") return R ? 1 : -1;
              x = R && P ? 0 : R ? y : -y;
            }
          }
          if (x === 0 && (x = m.sortingFn(u, d, v.id)), x !== 0)
            return b && (x *= -1), m.invertSorting && (x *= -1), x;
        }
        return u.index - d.index;
      }), c.forEach((u) => {
        var d;
        o.push(u), (d = u.subRows) != null && d.length && (u.subRows = a(u.subRows));
      }), c;
    };
    return {
      rows: a(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, de(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function pr(e, t) {
  return e ? Z_(e) ? /* @__PURE__ */ f.createElement(e, t) : e : null;
}
function Z_(e) {
  return J_(e) || typeof e == "function" || Q_(e);
}
function J_(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Q_(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function eO(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = f.useState(() => ({
    current: H_(t)
  })), [r, o] = f.useState(() => n.current.initialState);
  return n.current.setOptions((s) => ({
    ...s,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (i) => {
      o(i), e.onStateChange == null || e.onStateChange(i);
    }
  })), n.current;
}
function tO({
  contextMenu: e,
  contextSub: t,
  rowActions: n,
  onSetContextSub: r,
  onClose: o,
  getContextRows: s
}) {
  return e ? Fl(
    /* @__PURE__ */ W(Zt, { children: [
      /* @__PURE__ */ g(
        "div",
        {
          style: { top: e.y, left: e.x },
          className: "fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
          onClick: (i) => i.stopPropagation(),
          children: n.map((i, a) => {
            var l;
            return /* @__PURE__ */ W(
              "button",
              {
                className: J(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                  i.destructive && "text-destructive hover:text-destructive focus:text-destructive",
                  (t == null ? void 0 : t.action) === i && "bg-accent"
                ),
                onMouseEnter: (c) => {
                  var u;
                  if ((u = i.subActions) != null && u.length) {
                    const d = c.currentTarget.getBoundingClientRect();
                    r({ action: i, x: d.right + 4, y: d.top });
                  } else
                    r(null);
                },
                onClick: () => {
                  var c, u;
                  (c = i.subActions) != null && c.length || ((u = i.onClick) == null || u.call(i, s()), o());
                },
                children: [
                  i.icon,
                  /* @__PURE__ */ g("span", { className: "flex-1", children: i.label }),
                  i.shortcut && /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: i.shortcut }),
                  (l = i.subActions) != null && l.length ? /* @__PURE__ */ g(Yr, { className: "h-3 w-3 opacity-50" }) : null
                ]
              },
              a
            );
          })
        }
      ),
      t && /* @__PURE__ */ g(
        "div",
        {
          style: { top: t.y, left: t.x },
          className: "fixed z-50 min-w-[140px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
          onClick: (i) => i.stopPropagation(),
          children: t.action.subActions.map((i, a) => /* @__PURE__ */ W(
            "button",
            {
              className: J(
                "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                i.destructive && "text-destructive hover:text-destructive focus:text-destructive"
              ),
              onClick: () => {
                var l;
                (l = i.onClick) == null || l.call(i, s()), o();
              },
              children: [
                i.icon,
                /* @__PURE__ */ g("span", { className: "flex-1", children: i.label }),
                i.shortcut && /* @__PURE__ */ g("span", { className: "flex items-center gap-0.5", children: i.shortcut.split("").map((l, c) => /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: l }, c)) })
              ]
            },
            a
          ))
        }
      )
    ] }),
    document.body
  ) : null;
}
function nO({ filterDefs: e, activeFilters: t, onRemoveFilter: n, onClearAll: r }) {
  return t.length === 0 ? null : /* @__PURE__ */ W("div", { className: "flex items-center gap-2 flex-wrap", children: [
    /* @__PURE__ */ g("div", { className: "flex items-center gap-1.5 flex-wrap flex-1", children: t.map((o) => {
      const s = e.find((a) => a.id === o.filterId);
      if (!s) return null;
      const i = o.values.map((a) => {
        const l = s.options.find((c) => c.value === a);
        return /* @__PURE__ */ W("span", { className: "inline-flex items-center gap-1", children: [
          (l == null ? void 0 : l.icon) && /* @__PURE__ */ g("span", { className: "shrink-0", children: l.icon }),
          /* @__PURE__ */ g("span", { children: (l == null ? void 0 : l.label) ?? a })
        ] }, a);
      });
      return /* @__PURE__ */ W(
        "span",
        {
          className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted dark:bg-muted/50 px-2 py-1 text-xs",
          children: [
            s.icon && /* @__PURE__ */ g("span", { className: "text-muted-foreground shrink-0", children: s.icon }),
            /* @__PURE__ */ g("span", { className: "text-muted-foreground", children: s.label }),
            /* @__PURE__ */ g("span", { className: "text-muted-foreground", children: "is" }),
            /* @__PURE__ */ g("span", { className: "flex items-center gap-1 flex-wrap", children: i.reduce((a, l, c) => (c > 0 && a.push(/* @__PURE__ */ g("span", { className: "text-muted-foreground", children: "," }, `sep-${c}`)), a.push(l), a), []) }),
            /* @__PURE__ */ g(
              "button",
              {
                onClick: () => n(o.filterId),
                className: "ml-0.5 rounded-sm text-muted-foreground hover:text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                "aria-label": `Remove ${s.label} filter`,
                children: /* @__PURE__ */ g(Zl, { className: "h-3 w-3" })
              }
            )
          ]
        },
        o.filterId
      );
    }) }),
    r && /* @__PURE__ */ g(xo, { variant: "ghost", size: "sm", className: "h-7 text-xs", onClick: r, children: "Clear" })
  ] });
}
const rO = f.forwardRef(
  function({ active: t, className: n, ...r }, o) {
    return /* @__PURE__ */ g(
      "button",
      {
        ref: o,
        className: J(
          "flex h-8 w-8 items-center justify-center rounded-full border transition-colors outline-none focus-visible:ring-1 focus-visible:ring-ring border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground",
          n
        ),
        "aria-label": "Filter",
        ...r,
        children: /* @__PURE__ */ g(LC, { className: "h-3.5 w-3.5" })
      }
    );
  }
);
function oO({
  filterDefs: e,
  activeFilters: t,
  onToggleValue: n,
  open: r,
  onOpenChange: o,
  trigger: s
}) {
  const [i, a] = f.useState(""), [l, c] = f.useState(""), [u, d] = f.useState(-1), [p, h] = f.useState(-1), [v, m] = f.useState("main"), [y, b] = f.useState(0), x = f.useRef(null), w = f.useRef(null), S = f.useRef(null), R = f.useRef(null), P = f.useRef(null), E = f.useRef([]), T = f.useRef({ x: 0, y: 0 }), _ = f.useRef({ x: 0, y: 0 }), N = f.useRef(null), O = f.useRef(null), K = f.useMemo(
    () => e.filter((C) => C.label.toLowerCase().includes(i.toLowerCase())),
    [e, i]
  ), Z = f.useMemo(() => {
    if (!i) return null;
    const C = i.toLowerCase(), M = [];
    for (const A of e)
      if (A.label.toLowerCase().includes(C))
        M.push({ type: "filter", def: A });
      else
        for (const D of A.options)
          D.label.toLowerCase().includes(C) && M.push({ type: "option", def: A, opt: D });
    return M;
  }, [e, i]), X = Z ?? K.map((C) => ({ type: "filter", def: C })), U = (() => {
    if (Z) {
      const C = Z[u];
      return (C == null ? void 0 : C.type) === "filter" ? C.def : null;
    }
    return K[u] ?? null;
  })(), B = f.useMemo(
    () => (U == null ? void 0 : U.options.filter(
      (C) => C.label.toLowerCase().includes(l.toLowerCase())
    )) ?? [],
    [U, l]
  ), q = (C, M) => {
    var A;
    return ((A = t.find((D) => D.filterId === C)) == null ? void 0 : A.values.includes(M)) ?? !1;
  }, G = (C) => {
    const M = E.current[C], A = P.current;
    if (!M || !A) return;
    const D = M.getBoundingClientRect(), V = A.getBoundingClientRect();
    b(D.top - V.top);
  };
  f.useEffect(() => {
    if (!r) return;
    const C = (M) => {
      T.current = { x: M.clientX, y: M.clientY };
    };
    return window.addEventListener("mousemove", C), () => {
      window.removeEventListener("mousemove", C), N.current && clearTimeout(N.current);
    };
  }, [r]);
  const L = () => {
    const C = O.current;
    if (!C) return !1;
    const M = C.getBoundingClientRect(), A = _.current, D = T.current;
    if (D.x >= A.x) return !1;
    const V = M.right - A.x, z = M.top - A.y, $ = M.right - A.x, F = M.bottom - A.y, Y = D.x - A.x, ne = D.y - A.y, te = V * ne - z * Y, he = $ * ne - F * Y;
    return te * he <= 0;
  };
  f.useEffect(() => {
    r && (a(""), c(""), d(-1), h(-1), m("main"), setTimeout(() => {
      var C;
      return (C = x.current) == null ? void 0 : C.focus();
    }, 0));
  }, [r]), f.useEffect(() => {
    d((C) => C === -1 ? -1 : Math.min(C, X.length - 1));
  }, [X.length]), f.useEffect(() => {
    h(0), c("");
  }, [U == null ? void 0 : U.id]), f.useEffect(() => {
    u >= 0 && G(u);
  }, [u]), f.useEffect(() => {
    var A;
    if (h(0), !U || !l) return;
    const C = new Set(B.map((D) => D.value));
    (((A = t.find((D) => D.filterId === U.id)) == null ? void 0 : A.values) ?? []).filter((D) => !C.has(D)).forEach((D) => n(U.id, D));
  }, [l]), f.useEffect(() => {
    var C, M;
    v === "main" && u >= 0 && ((M = (C = S.current) == null ? void 0 : C.children[u]) == null || M.scrollIntoView({ block: "nearest" }));
  }, [u, v]), f.useEffect(() => {
    var C, M;
    v === "sub" && p >= 0 && ((M = (C = R.current) == null ? void 0 : C.children[p]) == null || M.scrollIntoView({ block: "nearest" }));
  }, [p, v]);
  const I = (C) => {
    const M = X.length;
    if (C.key === "ArrowDown" || C.key === "Tab" && !C.shiftKey)
      C.preventDefault(), d((A) => A === -1 ? 0 : (A + 1) % M);
    else if (C.key === "ArrowUp" || C.key === "Tab" && C.shiftKey)
      C.preventDefault(), d((A) => A <= 0 ? M - 1 : A - 1);
    else if (C.key === " " || C.key === "Enter") {
      if (p >= 0 && U) {
        const A = B[p];
        A && (C.preventDefault(), n(U.id, A.value), C.key === "Enter" && o(!1));
      } else if (C.key === "Enter") {
        const A = u >= 0 ? u : X.length === 1 ? 0 : -1, D = A >= 0 ? X[A] : null;
        D && (C.preventDefault(), D.type === "option" ? (n(D.def.id, D.opt.value), o(!1)) : D.type === "filter" && (B.length === 1 ? (n(D.def.id, B[0].value), o(!1)) : (m("sub"), setTimeout(() => {
          var V;
          return (V = w.current) == null ? void 0 : V.focus();
        }, 0))));
      }
    } else C.key === "ArrowRight" && U ? (C.preventDefault(), m("sub"), setTimeout(() => {
      var A;
      return (A = w.current) == null ? void 0 : A.focus();
    }, 0)) : C.key === "Escape" && o(!1);
  };
  return /* @__PURE__ */ W(hP, { open: r, onOpenChange: o, children: [
    /* @__PURE__ */ g(mP, { asChild: !0, children: s }),
    /* @__PURE__ */ W(
      sv,
      {
        ref: P,
        align: "end",
        className: "w-52 p-0 overflow-visible border border-white/10",
        onOpenAutoFocus: (C) => C.preventDefault(),
        children: [
          U && /* @__PURE__ */ W(
            "div",
            {
              ref: O,
              className: "absolute right-[calc(100%-8px)] w-52 bg-popover rounded-md border border-white/10 shadow-md flex flex-col overflow-hidden",
              style: { top: y },
              onMouseEnter: () => {
                N.current && clearTimeout(N.current);
              },
              onKeyDown: (C) => {
                const M = B.length;
                if (C.key === "ArrowDown" || C.key === "Tab" && !C.shiftKey)
                  C.preventDefault(), h((A) => A === -1 ? 0 : (A + 1) % M);
                else if (C.key === "ArrowUp" || C.key === "Tab" && C.shiftKey)
                  C.preventDefault(), h((A) => A <= 0 ? M - 1 : A - 1);
                else if (C.key === "ArrowLeft" || C.key === "Escape")
                  C.preventDefault(), m("main"), setTimeout(() => {
                    var A;
                    return (A = x.current) == null ? void 0 : A.focus();
                  }, 0);
                else if (C.key === " " || C.key === "Enter") {
                  C.preventDefault();
                  const A = p >= 0 ? B[p] : B.length === 1 ? B[0] : void 0;
                  A && U && (n(U.id, A.value), C.key === "Enter" && o(!1));
                }
              },
              children: [
                /* @__PURE__ */ g("div", { className: "border-b border-white/10 px-3 py-2", children: /* @__PURE__ */ g(
                  "input",
                  {
                    ref: w,
                    placeholder: "Filter...",
                    value: l,
                    onChange: (C) => c(C.target.value),
                    className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground",
                    onFocus: () => m("sub")
                  }
                ) }),
                /* @__PURE__ */ W("div", { ref: R, className: "max-h-64 overflow-y-auto p-1", children: [
                  B.length === 0 && /* @__PURE__ */ g("p", { className: "py-4 text-center text-xs text-muted-foreground", children: "No options." }),
                  B.map((C, M) => {
                    const A = q(U.id, C.value);
                    return /* @__PURE__ */ W(
                      "button",
                      {
                        className: J(
                          "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
                          M === p && v === "sub" ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                        ),
                        onMouseEnter: () => {
                          h(M), m("sub");
                        },
                        onFocus: () => {
                          h(M), m("sub");
                        },
                        onClick: () => {
                          n(U.id, C.value), o(!1);
                        },
                        children: [
                          /* @__PURE__ */ g("span", { className: "flex h-3.5 w-3.5 shrink-0 items-center justify-center", children: A && /* @__PURE__ */ g(Lr, { className: "h-3 w-3" }) }),
                          C.icon && /* @__PURE__ */ g("span", { className: "shrink-0", children: C.icon }),
                          /* @__PURE__ */ g("span", { className: "truncate", children: C.label })
                        ]
                      },
                      C.value
                    );
                  })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ W("div", { className: "flex flex-col", onKeyDown: I, children: [
            /* @__PURE__ */ W("div", { className: "border-b border-white/10 px-3 py-2 flex items-center gap-2", children: [
              /* @__PURE__ */ g(
                "input",
                {
                  ref: x,
                  placeholder: "Add Filter...",
                  value: i,
                  onChange: (C) => a(C.target.value),
                  className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground",
                  onFocus: () => m("main")
                }
              ),
              /* @__PURE__ */ g("span", { className: "text-xs text-muted-foreground border border-white/10 rounded px-1", children: "F" })
            ] }),
            /* @__PURE__ */ W("div", { ref: S, className: "max-h-72 overflow-y-auto p-1", children: [
              X.length === 0 && /* @__PURE__ */ g("p", { className: "py-4 text-center text-xs text-muted-foreground", children: "No filters found." }),
              X.map((C, M) => {
                const D = J(
                  "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
                  M === u ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                );
                if (C.type === "option") {
                  const V = q(C.def.id, C.opt.value);
                  return /* @__PURE__ */ W(
                    "button",
                    {
                      ref: (z) => {
                        E.current[M] = z;
                      },
                      className: D,
                      onMouseEnter: () => {
                        d(M), m("main");
                      },
                      onFocus: () => {
                        d(M), m("main");
                      },
                      onClick: () => n(C.def.id, C.opt.value),
                      children: [
                        C.opt.icon && /* @__PURE__ */ g("span", { className: "shrink-0 text-muted-foreground", children: C.opt.icon }),
                        /* @__PURE__ */ W("span", { className: "flex-1 text-left truncate", children: [
                          /* @__PURE__ */ g("span", { className: "text-muted-foreground", children: C.def.label }),
                          /* @__PURE__ */ g("span", { className: "text-muted-foreground mx-1", children: "›" }),
                          /* @__PURE__ */ g("span", { children: C.opt.label })
                        ] }),
                        V && /* @__PURE__ */ g(Lr, { className: "h-3 w-3 shrink-0" })
                      ]
                    },
                    `${C.def.id}:${C.opt.value}`
                  );
                }
                return /* @__PURE__ */ W(
                  "button",
                  {
                    ref: (V) => {
                      E.current[M] = V;
                    },
                    className: D,
                    onMouseEnter: () => {
                      const V = () => {
                        _.current = T.current, d(M), m("main"), G(M);
                      };
                      N.current && clearTimeout(N.current), U && L() ? N.current = setTimeout(V, 200) : V();
                    },
                    onFocus: () => {
                      d(M), m("main");
                    },
                    onClick: () => {
                      _.current = T.current, d(M), m("sub"), setTimeout(() => {
                        var V;
                        return (V = w.current) == null ? void 0 : V.focus();
                      }, 0);
                    },
                    children: [
                      C.def.icon && /* @__PURE__ */ g("span", { className: "shrink-0 text-muted-foreground", children: C.def.icon }),
                      /* @__PURE__ */ g("span", { className: "flex-1 text-left truncate", children: C.def.label }),
                      /* @__PURE__ */ g(Yr, { className: "h-3.5 w-3.5 text-muted-foreground" })
                    ]
                  },
                  C.def.id
                );
              })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Bf({
  row: e,
  displayIndex: t,
  activeRowIndex: n,
  activeRowSource: r,
  reorderable: o,
  customTranslateY: s,
  isDragGroup: i,
  justDropped: a,
  suppressTransform: l,
  onMeasureHeight: c,
  onRowClick: u,
  onRowMouseEnter: d,
  onContextMenu: p
}) {
  const { attributes: h, listeners: v, setNodeRef: m, transform: y, transition: b, isDragging: x } = kb({
    id: e.id,
    disabled: !o
  }), w = f.useCallback((E) => {
    m(E), E && c && c(E.offsetHeight);
  }, [m, c]), S = e.getIsSelected(), R = n === t, P = s !== null ? {
    transform: `translateY(${s}px)`,
    // The dragged row(s) must track the pointer with no lag; the rows
    // they displace animate into place like dnd-kit's default strategy.
    transition: x || i ? "none" : "transform 200ms ease"
  } : a || l ? { transform: "none", transition: "none" } : { transform: Hr.Transform.toString(y), transition: b };
  return /* @__PURE__ */ g(
    "div",
    {
      ref: w,
      ...o ? h : {},
      ...o ? v : {},
      tabIndex: -1,
      style: P,
      "data-display-index": t,
      "data-state": S ? "selected" : void 0,
      className: J(
        "flex items-center gap-2 px-2 py-1.5 border-b border-border/40 select-none outline-none text-sm",
        o ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
        "data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25",
        R && r === "keyboard" && !x && !i && "row-ring",
        (x || i) && "shadow-sm bg-background relative z-10"
      ),
      onClick: (E) => u(t, E.shiftKey),
      onMouseEnter: () => d(t),
      onContextMenu: (E) => p(E, t),
      children: (() => {
        const E = e.getVisibleCells(), T = E.findIndex((O) => {
          var K;
          return ((K = O.column.columnDef.meta) == null ? void 0 : K.grow) === !0;
        }), _ = T === -1 ? E : E.slice(0, T + 1), N = T === -1 ? [] : E.slice(T + 1);
        return /* @__PURE__ */ W(Zt, { children: [
          _.map((O) => {
            const K = O.column.columnDef.meta, Z = (K == null ? void 0 : K.grow) === !0;
            if (O.column.id === "_select")
              return /* @__PURE__ */ g(
                "span",
                {
                  className: J(
                    "flex items-center shrink-0",
                    !S && n !== t && "opacity-0"
                  ),
                  children: pr(O.column.columnDef.cell, O.getContext())
                },
                O.id
              );
            const X = O.column.columnDef.size;
            return /* @__PURE__ */ g(
              "div",
              {
                className: J(Z ? "flex-1 min-w-0 truncate" : "shrink-0"),
                style: !Z && X ? { width: X } : void 0,
                children: pr(O.column.columnDef.cell, O.getContext())
              },
              O.id
            );
          }),
          N.length > 0 && /* @__PURE__ */ g("div", { className: "ml-auto flex items-center gap-2 shrink-0", children: N.map((O) => /* @__PURE__ */ g("div", { children: pr(O.column.columnDef.cell, O.getContext()) }, O.id)) })
        ] });
      })()
    }
  );
}
function sO({ checked: e, indeterminate: t, onChange: n, onClick: r, className: o }) {
  const s = f.useRef(null);
  f.useEffect(() => {
    s.current && (s.current.indeterminate = !!t);
  }, [t]);
  const i = e || t;
  return /* @__PURE__ */ W(
    "span",
    {
      className: J("inline-flex items-center justify-center cursor-pointer group", o),
      onClick: r,
      children: [
        /* @__PURE__ */ g("input", { ref: s, type: "checkbox", checked: e, onChange: n, tabIndex: -1, className: "sr-only" }),
        /* @__PURE__ */ W(
          "span",
          {
            className: J(
              "h-3.5 w-3.5 rounded-xs border flex items-center justify-center transition-colors",
              i ? "bg-selected border-selected" : "border-foreground/35 group-hover:border-selected"
            ),
            children: [
              t && /* @__PURE__ */ g("span", { className: "block h-px w-2 bg-selected-foreground" }),
              e && !t && /* @__PURE__ */ g("svg", { viewBox: "0 0 10 8", className: "h-2 w-2.5 fill-none stroke-selected-foreground stroke-[2]", children: /* @__PURE__ */ g("polyline", { points: "1,4 4,7 9,1", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        )
      ]
    }
  );
}
function iO({
  selectedCount: e,
  rowActions: t,
  onClearSelection: n,
  onOpenActions: r
}) {
  return e === 0 ? null : Fl(
    /* @__PURE__ */ W("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg", children: [
      /* @__PURE__ */ W("span", { className: "px-2 text-sm font-medium", children: [
        e,
        " selected"
      ] }),
      /* @__PURE__ */ g(Xr, { children: /* @__PURE__ */ W(Bn, { children: [
        /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g(
          "button",
          {
            className: "flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            onClick: n,
            children: /* @__PURE__ */ g(Zl, { className: "h-3.5 w-3.5" })
          }
        ) }),
        /* @__PURE__ */ W(Hn, { className: "flex items-center gap-1.5 border border-primary/20", children: [
          "Clear selected",
          /* @__PURE__ */ g("kbd", { className: "rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "Esc" })
        ] })
      ] }) }),
      t != null && t.length ? /* @__PURE__ */ W(
        "button",
        {
          className: "ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          onClick: r,
          children: [
            /* @__PURE__ */ g(_C, { className: "h-3.5 w-3.5" }),
            "Actions"
          ]
        }
      ) : null
    ] }),
    document.body
  );
}
function zf({
  row: e,
  displayIndex: t,
  activeRowIndex: n,
  activeRowSource: r,
  reorderable: o,
  customTranslateY: s,
  isDragGroup: i,
  justDropped: a,
  suppressTransform: l,
  onMeasureHeight: c,
  onRowClick: u,
  onRowMouseEnter: d,
  onContextMenu: p
}) {
  const { attributes: h, listeners: v, setNodeRef: m, transform: y, transition: b, isDragging: x } = kb({
    id: e.id,
    disabled: !o
  }), w = f.useCallback((P) => {
    m(P), P && c && c(P.offsetHeight);
  }, [m, c]), S = e.getIsSelected(), R = n === t;
  return /* @__PURE__ */ g(
    go,
    {
      ref: w,
      ...o ? h : {},
      ...o ? v : {},
      tabIndex: -1,
      style: s !== null ? {
        transform: `translateY(${s}px)`,
        // The dragged row(s) must track the pointer with no lag; the rows
        // they displace animate into place like dnd-kit's default strategy.
        transition: x || i ? "none" : "transform 200ms ease"
      } : a || l ? { transform: "none", transition: "none" } : { transform: Hr.Transform.toString(y), transition: b },
      "data-display-index": t,
      "data-state": S ? "selected" : void 0,
      className: J(
        "h-6 select-none outline-none",
        o ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
        "data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25",
        R && r === "keyboard" && !x && !i && "row-ring",
        (x || i) && "shadow-sm bg-background relative z-10"
      ),
      onClick: (P) => u(t, P.shiftKey),
      onMouseEnter: () => d(t),
      onContextMenu: (P) => p(P, t),
      children: e.getVisibleCells().map((P) => /* @__PURE__ */ g(
        ti,
        {
          className: J(
            "py-1.5 text-sm",
            P.column.id === "_select" && "w-6 !pl-2 !pr-0"
          ),
          children: P.column.id === "_select" ? /* @__PURE__ */ g("span", { className: J("flex items-center", !S && n !== t && "opacity-0"), children: pr(P.column.columnDef.cell, P.getContext()) }) : pr(P.column.columnDef.cell, P.getContext())
        },
        P.id
      ))
    }
  );
}
function aO({
  open: e,
  onOpenChange: t,
  rowActions: n,
  actionPage: r,
  onSetActionPage: o,
  effectiveRows: s,
  actionsHeading: i
}) {
  return /* @__PURE__ */ W(
    nb,
    {
      open: e,
      onOpenChange: t,
      commandKey: (r == null ? void 0 : r.label) ?? "root",
      title: "Row Actions",
      description: "Choose an action to apply to selected rows",
      children: [
        /* @__PURE__ */ g(
          Uc,
          {
            autoFocus: !0,
            placeholder: r ? `Search ${r.label.toLowerCase()}...` : "Type a command or search...",
            onKeyDown: (a) => {
              a.key === "Backspace" && a.target.value === "" && o(null);
            }
          }
        ),
        /* @__PURE__ */ W(Kc, { children: [
          /* @__PURE__ */ g(Yc, { children: "No actions available." }),
          r ? /* @__PURE__ */ g(Qs, { heading: /* @__PURE__ */ W("span", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ g("span", { children: r.label }),
            /* @__PURE__ */ g("span", { className: "font-normal text-muted-foreground", children: i })
          ] }), children: r.subActions.map((a, l) => /* @__PURE__ */ W(
            ei,
            {
              onSelect: () => {
                var c;
                (c = a.onClick) == null || c.call(a, s), t(!1), o(null);
              },
              className: J(a.destructive && "text-destructive"),
              children: [
                a.icon,
                /* @__PURE__ */ g("span", { className: "flex-1", children: a.label }),
                a.shortcut && /* @__PURE__ */ g("span", { className: "flex items-center gap-0.5", children: a.shortcut.split("").map((c, u) => /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: c }, u)) })
              ]
            },
            l
          )) }) : /* @__PURE__ */ g(Qs, { heading: i, children: n.map((a, l) => {
            var c;
            return /* @__PURE__ */ W(
              ei,
              {
                onSelect: () => {
                  var u, d;
                  (u = a.subActions) != null && u.length ? o(a) : ((d = a.onClick) == null || d.call(a, s), t(!1));
                },
                className: J(a.destructive && "text-destructive"),
                children: [
                  a.icon,
                  /* @__PURE__ */ g("span", { className: "flex-1", children: a.label }),
                  a.shortcut && /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: a.shortcut }),
                  (c = a.subActions) != null && c.length ? /* @__PURE__ */ g(Yr, { className: "h-3.5 w-3.5 text-muted-foreground" }) : null
                ]
              },
              l
            );
          }) })
        ] })
      ]
    }
  );
}
const lO = f.forwardRef(
  function({ rowCount: t, showPagination: n, pageIndex: r, pageCount: o, canPreviousPage: s, canNextPage: i, onPreviousPage: a, onNextPage: l, onShiftTabToTable: c }, u) {
    return /* @__PURE__ */ W(
      "div",
      {
        ref: u,
        className: "flex items-center justify-between",
        onKeyDown: (d) => {
          var p;
          d.key === "Tab" && d.shiftKey && t > 0 && Array.from(
            ((p = u.current) == null ? void 0 : p.querySelectorAll('button:not([disabled]),[tabindex="0"]')) ?? []
          )[0] === document.activeElement && (d.preventDefault(), d.stopPropagation(), c());
        },
        children: [
          /* @__PURE__ */ W("p", { className: "text-xs text-foreground font-semibold text-center w-full", children: [
            t,
            " row",
            t !== 1 ? "s" : ""
          ] }),
          n && /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ W("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: [
              "Page ",
              r + 1,
              " of ",
              Math.max(o, 1)
            ] }),
            /* @__PURE__ */ W(
              xo,
              {
                variant: "outline",
                size: "icon",
                className: "h-7 w-7",
                onClick: a,
                disabled: !s,
                children: [
                  /* @__PURE__ */ g(Fh, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ g("span", { className: "sr-only", children: "Previous page" })
                ]
              }
            ),
            /* @__PURE__ */ W(
              xo,
              {
                variant: "outline",
                size: "icon",
                className: "h-7 w-7",
                onClick: l,
                disabled: !i,
                children: [
                  /* @__PURE__ */ g(Yr, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ g("span", { className: "sr-only", children: "Next page" })
                ]
              }
            )
          ] })
        ]
      }
    );
  }
);
function cO({
  rows: e,
  selectedCount: t,
  orderedData: n,
  setOrderedData: r,
  onRowReorder: o,
  activeRowIndex: s,
  setActiveRowIndex: i,
  getItemId: a,
  table: l,
  rowHeightRef: c,
  headerHeightRef: u,
  onBeforeReorder: d,
  groupBy: p,
  onGroupChange: h
}) {
  const [v, m] = f.useState(null), [y, b] = f.useState(!1), [x, w] = f.useState(0), S = f.useRef(0), [R, P] = f.useState(!1), E = f.useRef(null), T = f.useRef(!1);
  f.useEffect(() => () => {
    E.current && cancelAnimationFrame(E.current);
  }, []);
  const _ = Nk(
    Cf(nu, { activationConstraint: { distance: 5 } }),
    Cf(eu, { coordinateGetter: n_ })
  ), N = f.useCallback((L) => {
    var D;
    if (s === null) return;
    const I = (D = e[s]) == null ? void 0 : D.id;
    if (!I) return;
    const { pageIndex: ee, pageSize: C } = l.getState().pagination, M = ee * C, A = L.findIndex((V) => a(V) === I) - M;
    i(A >= 0 ? A : null);
  }, [s, e, l, a, i]), O = f.useCallback((L) => {
    if (!v || !p) return null;
    const I = e.findIndex((F) => F.id === v);
    if (I === -1) return null;
    const ee = c.current, C = u.current, M = e.map((F) => p(F.original)), A = [];
    for (let F = 0; F < e.length; F++) F !== I && A.push(F);
    const D = (F, Y) => {
      let ne = 0;
      for (let te = F + 1; te <= Y; te++) M[te] !== M[te - 1] && ne++;
      return ne;
    }, V = (F) => F === I ? 0 : F > I ? (F - I) * ee + D(I, F) * C : (F - I) * ee - D(F, I) * C;
    let z = 0;
    for (const F of A) V(F) < L && z++;
    let $ = M[I];
    if (A.length > 0)
      if (z === 0)
        $ = M[A[0]];
      else if (z === A.length)
        $ = M[A[A.length - 1]];
      else {
        const F = M[A[z - 1]], Y = M[A[z]];
        if (F === Y)
          $ = F;
        else {
          const ne = V(A[z]) - ee / 2 - C / 2;
          $ = L < ne ? F : Y;
        }
      }
    return { insertAt: z, targetGroupKey: $ };
  }, [v, p, e, c, u]), K = f.useCallback(() => {
    P(!0), E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
      E.current = requestAnimationFrame(() => {
        P(!1);
      });
    });
  }, []), Z = (L) => {
    T.current = !0;
    const I = String(L.active.id);
    m(I), w(0), S.current = 0;
    const ee = e.find((C) => C.id === I);
    b(((ee == null ? void 0 : ee.getIsSelected()) ?? !1) && t > 1);
  }, X = (L) => {
    S.current = L.delta.y, w(L.delta.y);
  }, U = (L) => {
    const { active: I, over: ee } = L, C = S.current;
    m(null), b(!1), w(0), S.current = 0, setTimeout(() => {
      T.current = !1;
    }, 0);
    const M = String(I.id), A = e.find((V) => V.id === M);
    if (((A == null ? void 0 : A.getIsSelected()) ?? !1) && t > 1) {
      const V = c.current, z = e.findIndex((Ee) => Ee.id === M), $ = e.map((Ee, We) => Ee.getIsSelected() ? -1 : We).filter((Ee) => Ee !== -1), F = $.filter((Ee) => Ee < z).length, Y = Math.max(0, Math.min(
        Math.round(F + C / V),
        $.length
      )), ne = new Set(l.getSelectedRowModel().rows.map((Ee) => Ee.id)), te = n.filter((Ee) => ne.has(a(Ee))), he = n.filter((Ee) => !ne.has(a(Ee))), pe = [
        ...he.slice(0, Y),
        ...te,
        ...he.slice(Y)
      ], ze = d ? d(pe, M, ee ? String(ee.id) : null) : pe;
      K(), N(ze), r(ze), o == null || o(ze);
    } else if (p) {
      const V = O(C);
      if (!V) return;
      const { insertAt: z, targetGroupKey: $ } = V, F = e.filter((pe) => pe.id !== M), Y = z < F.length ? F[z].id : null;
      let ne = n.find((pe) => a(pe) === M);
      if (!ne) return;
      const te = n.filter((pe) => a(pe) !== M);
      h && p(ne) !== $ && (ne = h(ne, $));
      let he;
      if (Y === null)
        he = [...te, ne];
      else {
        const pe = te.findIndex((ze) => a(ze) === Y);
        he = pe === -1 ? [...te, ne] : [...te.slice(0, pe), ne, ...te.slice(pe)];
      }
      K(), N(he), r(he), o == null || o(he);
    } else {
      if (!ee || I.id === ee.id) return;
      const V = n.findIndex((F) => a(F) === M), z = n.findIndex((F) => a(F) === String(ee.id));
      if (V === -1 || z === -1) return;
      const $ = $i(n, V, z);
      N($), r($), o == null || o($);
    }
  };
  let B = null, q = null;
  if (v && (y || !!p)) {
    const L = c.current, I = e.findIndex((ee) => ee.id === v);
    if (I !== -1) {
      const ee = ($) => y ? $.getIsSelected() : $.id === v, C = e.map(($, F) => ee($) ? F : -1).filter(($) => $ !== -1), M = e.map(($, F) => ee($) ? -1 : F).filter(($) => $ !== -1), A = C.length, D = M.filter(($) => $ < I).length, V = D + x / L;
      let z;
      if (y)
        z = Math.max(0, Math.min(Math.round(V), M.length));
      else {
        const $ = O(x);
        z = $ ? $.insertAt : D, q = $ ? $.targetGroupKey : null;
      }
      B = e.map(($, F) => {
        if (ee($)) {
          const te = C.indexOf(F);
          return (Math.max(0, Math.min(V, M.length)) + te - F) * L;
        }
        const Y = M.indexOf(F);
        return ((Y < z ? Y : Y + A) - F) * L;
      });
    }
  }
  return {
    sensors: _,
    dragActiveId: v,
    multiDragActive: y,
    justDropped: R,
    dragOccurredRef: T,
    customTransforms: B,
    dragTargetGroupKey: q,
    handleDragStart: Z,
    handleDragMove: X,
    handleDragEnd: U
  };
}
function uO({
  rowActions: e,
  rows: t,
  activeRowIndex: n,
  selectedCount: r,
  contextMenu: o,
  table: s,
  effectiveRows: i,
  setActionsOpen: a,
  setActionPage: l,
  setActiveRowIndex: c,
  setActiveRowSource: u,
  suppressMouseRef: d,
  setContextMenu: p
}) {
  const h = f.useRef(null);
  f.useEffect(() => {
    const v = (m) => {
      var b, x, w, S;
      const y = m.target;
      if (!(y.tagName === "INPUT" || y.tagName === "TEXTAREA" || y.tagName === "SELECT" || y.isContentEditable)) {
        if ((m.metaKey || m.ctrlKey) && m.key === "k") {
          if (!(e != null && e.length) || !i.length) return;
          m.preventDefault(), a(!0);
        } else if ((m.metaKey || m.ctrlKey) && m.key === "a")
          m.preventDefault(), s.toggleAllPageRowsSelected(!0);
        else if ((m.metaKey || m.ctrlKey) && m.shiftKey && m.key === "ArrowUp" && n !== null) {
          m.preventDefault(), d.current = !0, u("keyboard"), h.current === null && (h.current = n), c(0);
          const R = h.current, P = {};
          for (let E = 0; E <= R; E++)
            P[t[E].id] = !0;
          s.setRowSelection(P);
        } else if ((m.metaKey || m.ctrlKey) && m.shiftKey && m.key === "ArrowDown" && n !== null) {
          m.preventDefault(), d.current = !0, u("keyboard"), h.current === null && (h.current = n), c(t.length - 1);
          const R = h.current, P = {};
          for (let E = R; E <= t.length - 1; E++)
            P[t[E].id] = !0;
          s.setRowSelection(P);
        } else if ((m.metaKey || m.ctrlKey) && m.key === "ArrowUp")
          m.preventDefault(), d.current = !0, u("keyboard"), h.current = null, c(0);
        else if ((m.metaKey || m.ctrlKey) && m.key === "ArrowDown")
          m.preventDefault(), d.current = !0, u("keyboard"), h.current = null, c(t.length - 1);
        else if (m.key === "Tab" && !m.shiftKey && n === t.length - 1)
          c(null);
        else if (m.key === "Tab" && m.shiftKey && n === 0)
          c(null);
        else if (m.key === "ArrowDown" && !m.altKey && m.shiftKey && n !== null) {
          m.preventDefault(), d.current = !0, u("keyboard"), h.current === null && (h.current = n);
          const R = Math.min(n + 1, t.length - 1);
          c(R);
          const P = h.current, E = {};
          for (let T = Math.min(P, R); T <= Math.max(P, R); T++)
            E[t[T].id] = !0;
          s.setRowSelection(E);
        } else if (m.key === "ArrowUp" && !m.altKey && m.shiftKey && n !== null) {
          m.preventDefault(), d.current = !0, u("keyboard"), h.current === null && (h.current = n);
          const R = Math.max(n - 1, 0);
          c(R);
          const P = h.current, E = {};
          for (let T = Math.min(P, R); T <= Math.max(P, R); T++)
            E[t[T].id] = !0;
          s.setRowSelection(E);
        } else if (m.key === "ArrowDown" && !m.altKey || m.key === "Tab" && !m.shiftKey && n !== null && n !== t.length - 1)
          m.preventDefault(), d.current = !0, u("keyboard"), h.current = null, c(
            (R) => R === null ? 0 : Math.min(R + 1, t.length - 1)
          );
        else if (m.key === "ArrowUp" && !m.altKey || m.key === "Tab" && m.shiftKey && n !== null && n !== 0)
          m.preventDefault(), d.current = !0, u("keyboard"), h.current = null, c(
            (R) => R === null ? 0 : Math.max(R - 1, 0)
          );
        else if ((m.key === " " || m.key === "x") && n !== null)
          m.preventDefault(), (b = t[n]) == null || b.toggleSelected();
        else if (m.key === "Enter" && n !== null && (e != null && e.length) && i.length)
          m.preventDefault(), a(!0);
        else if (m.key === "Escape")
          o ? p(null) : r > 0 ? s.resetRowSelection() : c(null);
        else if (e != null && e.length) {
          const P = e.flatMap((E) => E.subActions ?? []).find(
            (E) => E.shortcutKeys && E.shortcutKeys.key === m.key && !!E.shortcutKeys.altKey === m.altKey && !!E.shortcutKeys.shiftKey === m.shiftKey && !!E.shortcutKeys.metaKey === m.metaKey && !!E.shortcutKeys.ctrlKey === m.ctrlKey
          );
          if (P) {
            if (m.preventDefault(), !i.length) return;
            d.current = !0, (x = P.onClick) == null || x.call(P, i);
          } else if (!m.metaKey && !m.ctrlKey && !m.altKey) {
            const E = e.find((T) => T.shortcut === m.key);
            if (E) {
              if (m.preventDefault(), !i.length) return;
              (w = E.subActions) != null && w.length ? (l(E), a(!0)) : (S = E.onClick) == null || S.call(E, i);
            }
          }
        }
      }
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [e, t, n, r, o, s]);
}
function Hf({ label: e, icon: t, count: n, collapsed: r, onToggle: o, onAdd: s, headerStyle: i, onMeasureHeight: a }) {
  const l = f.useCallback((c) => {
    c && a && a(c.offsetHeight);
  }, [a]);
  return /* @__PURE__ */ W("div", { ref: l, className: "flex items-center gap-2 px-2 py-1.5 border-b border-border sticky top-0 bg-background z-10 select-none", style: i, children: [
    /* @__PURE__ */ g(
      "button",
      {
        onClick: o,
        className: "p-0.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground",
        children: /* @__PURE__ */ g(
          ql,
          {
            className: J("h-3.5 w-3.5 transition-transform", r && "-rotate-90")
          }
        )
      }
    ),
    t && /* @__PURE__ */ g("span", { className: "shrink-0 text-muted-foreground", children: t }),
    /* @__PURE__ */ g("span", { className: "text-sm font-medium", children: e }),
    /* @__PURE__ */ g("span", { className: "text-yellow-500 text-xs", children: "⚠" }),
    /* @__PURE__ */ g("span", { className: "text-xs text-muted-foreground", children: n }),
    s && /* @__PURE__ */ g(
      "button",
      {
        className: "ml-auto p-0.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground",
        onClick: s,
        children: /* @__PURE__ */ g(HC, { className: "h-3.5 w-3.5" })
      }
    )
  ] });
}
function LO({
  columns: e,
  data: t,
  searchColumn: n,
  searchPlaceholder: r = "Search...",
  rowActions: o,
  getRowLabel: s,
  pageSize: i = 10,
  onRowReorder: a,
  getRowId: l,
  view: c = "table",
  filterDefs: u,
  activeFilters: d,
  onToggleFilterValue: p,
  onRemoveFilter: h,
  onClearFilters: v,
  sorting: m,
  onSortingChange: y,
  groupBy: b,
  groupConfigs: x,
  onGroupChange: w
}) {
  var lu;
  const S = d !== void 0, R = i === "all", [P, E] = f.useState([]), T = m !== void 0, _ = T ? m : P, N = f.useCallback((k) => {
    const H = typeof k == "function" ? k(_) : k;
    T ? y == null || y(H) : E(H);
  }, [T, _, y]), [O, K] = f.useState([]), [Z, X] = f.useState([]), U = S ? d : Z, [B, q] = f.useState(!1), [G, L] = f.useState(/* @__PURE__ */ new Set()), [I, ee] = f.useState({}), [C, M] = f.useState(null), [A, D] = f.useState("mouse"), V = f.useRef(null), z = f.useRef(null), $ = f.useRef(null), F = f.useRef(null), Y = f.useRef(null), ne = f.useRef(33), te = f.useRef(33), [he, pe] = f.useState(null), [ze, Ee] = f.useState(null), [We, Gt] = f.useState(!1), [Ue, Et] = f.useState(null), [dt, Oe] = f.useState(t), st = f.useRef(!1);
  f.useEffect(() => {
    ee({}), V.current = null;
  }, [U]);
  const xr = f.useMemo(() => !U.length || !(u != null && u.length) ? dt : dt.filter(
    (k) => U.every((H) => {
      if (H.values.length === 0) return !0;
      const ie = u.find((ve) => ve.id === H.filterId);
      return ie ? ie.filterFn(k, H.values) : !0;
    })
  ), [dt, U, u]), ro = f.useCallback((k, H) => {
    if (S) {
      p == null || p(k, H);
      return;
    }
    X((ie) => {
      const ve = ie.find((ge) => ge.filterId === k);
      if (!ve) return [...ie, { filterId: k, values: [H] }];
      const ce = ve.values.includes(H) ? ve.values.filter((ge) => ge !== H) : [...ve.values, H];
      return ce.length === 0 ? ie.filter((ge) => ge.filterId !== k) : ie.map((ge) => ge.filterId === k ? { ...ge, values: ce } : ge);
    });
  }, [S, p]), Pn = f.useCallback((k) => {
    if (S) {
      h == null || h(k);
      return;
    }
    X((H) => H.filter((ie) => ie.filterId !== k));
  }, [S, h]);
  f.useEffect(() => {
    var k;
    if (C !== null) {
      const H = (k = Mn.current[C]) == null ? void 0 : k.id;
      if (H) {
        const ie = l ?? He, ve = t.findIndex((ce) => ie(ce) === H);
        M(ve >= 0 ? ve : null);
      }
    }
    Oe(t);
  }, [t]);
  const _t = f.useRef(/* @__PURE__ */ new WeakMap()), Ot = f.useRef(0), He = f.useCallback((k) => {
    if (typeof k != "object" || k === null) return String(Ot.current++);
    const H = k;
    return _t.current.has(H) || _t.current.set(H, String(Ot.current++)), _t.current.get(H);
  }, []);
  f.useEffect(() => {
    if (!We) {
      const k = setTimeout(() => Et(null), 200);
      return () => clearTimeout(k);
    }
  }, [We]);
  const Lt = f.useMemo(
    () => ({
      id: "_select",
      header: () => null,
      cell: ({ row: k }) => /* @__PURE__ */ W(Bn, { children: [
        /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g("span", { className: "inline-flex items-center", children: /* @__PURE__ */ g(
          sO,
          {
            checked: k.getIsSelected(),
            onChange: k.getToggleSelectedHandler(),
            onClick: (H) => {
              H.stopPropagation(), k.toggleSelected();
            }
          }
        ) }) }),
        /* @__PURE__ */ W(Hn, { className: "flex items-center gap-1.5", children: [
          "Select row",
          /* @__PURE__ */ g("kbd", { className: "rounded border border-selected/30 bg-selected/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "x" })
        ] })
      ] }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 16
    }),
    [s]
  ), vt = f.useMemo(
    () => [
      Lt,
      ...e
    ],
    [Lt, e]
  ), De = eO({
    data: xr,
    columns: vt,
    getRowId: l ?? He,
    getCoreRowModel: j_(),
    getPaginationRowModel: X_(),
    getSortedRowModel: q_(),
    getFilteredRowModel: Y_(),
    onSortingChange: N,
    onColumnFiltersChange: K,
    onRowSelectionChange: ee,
    enableRowSelection: !0,
    initialState: {
      pagination: { pageSize: R ? Number.MAX_SAFE_INTEGER : i }
    },
    state: {
      sorting: _,
      columnFilters: O,
      rowSelection: I
    }
  }), Ft = De.getRowModel().rows, on = De.getSelectedRowModel().rows.map((k) => k.original), Vt = on.length, tt = f.useMemo(() => {
    if (!b) return null;
    const k = /* @__PURE__ */ new Map();
    for (const H of Ft) {
      const ie = b(H.original);
      k.has(ie) || k.set(ie, []), k.get(ie).push(H);
    }
    if (x) {
      const H = Array.from(k.entries());
      return H.sort(([ie], [ve]) => {
        var le, fe;
        const ce = ((le = x[ie]) == null ? void 0 : le.order) ?? 1 / 0, ge = ((fe = x[ve]) == null ? void 0 : fe.order) ?? 1 / 0;
        return ce - ge;
      }), new Map(H);
    }
    return k;
  }, [Ft, b, x]), Mn = f.useRef([]), ke = f.useMemo(() => {
    if (!tt) return Ft;
    const k = [];
    for (const [H, ie] of tt)
      G.has(H) || k.push(...ie);
    return k;
  }, [tt, G, Ft]);
  Mn.current = ke;
  const Dt = f.useMemo(() => {
    const k = /* @__PURE__ */ new Map();
    return ke.forEach((H, ie) => k.set(H.id, ie)), k;
  }, [ke]), rr = f.useMemo(() => {
    if (!tt) return dt;
    const k = l ?? He, H = new Map(dt.map((ce) => [k(ce), ce])), ie = /* @__PURE__ */ new Set(), ve = [];
    for (const [, ce] of tt)
      for (const ge of ce) {
        const le = k(ge.original), fe = H.get(le);
        fe && !ie.has(le) && (ve.push(fe), ie.add(le));
      }
    for (const ce of dt) {
      const ge = k(ce);
      ie.has(ge) || (ve.push(ce), ie.add(ge));
    }
    return ve;
  }, [tt, dt, l, He]), or = f.useRef(rr);
  or.current = rr;
  const Ie = Vt > 0 ? on : C !== null && ke[C] ? [ke[C].original] : [], nt = Ie.length === 0 ? "Actions" : Ie.length === 1 ? s ? s(Ie[0]) : "1 row" : `${Ie.length} rows`, ae = f.useCallback((k, H) => {
    if (!b || !w) return k;
    const ie = l ?? He, ve = k.findIndex((Ae) => ie(Ae) === H);
    if (ve === -1) return k;
    const ce = k[ve], ge = b(ce), le = new Set(De.getSelectedRowModel().rows.map((Ae) => Ae.id)), fe = le.has(H) && le.size > 1, it = (Ae) => !fe || !le.has(ie(Ae));
    let bt = null;
    for (let Ae = ve - 1; Ae >= 0; Ae--)
      if (it(k[Ae])) {
        bt = k[Ae];
        break;
      }
    let pt = null;
    for (let Ae = ve + 1; Ae < k.length; Ae++)
      if (it(k[Ae])) {
        pt = k[Ae];
        break;
      }
    const Wt = bt ? b(bt) : null, an = pt ? b(pt) : null, Xe = Wt !== null && an !== null ? Wt === an ? Wt : ge : Wt ?? an ?? ge;
    if (Xe === ge) return k;
    if (fe)
      return k.map(
        (Ae) => le.has(ie(Ae)) && b(Ae) !== Xe ? w(Ae, Xe) : Ae
      );
    const wt = w(ce, Xe);
    return k.map((Ae) => Ae === ce ? wt : Ae);
  }, [b, w, l, He, De]), {
    sensors: Me,
    dragActiveId: Se,
    multiDragActive: Ce,
    justDropped: Ke,
    dragOccurredRef: _e,
    customTransforms: ye,
    dragTargetGroupKey: yt,
    handleDragStart: Fe,
    handleDragMove: Ve,
    handleDragEnd: sn
  } = cO({
    rows: ke,
    selectedCount: Vt,
    orderedData: rr,
    setOrderedData: Oe,
    onRowReorder: a,
    activeRowIndex: C,
    setActiveRowIndex: M,
    getItemId: l ?? He,
    table: De,
    rowHeightRef: ne,
    headerHeightRef: te,
    onBeforeReorder: ae,
    groupBy: b,
    onGroupChange: w
  }), $e = f.useMemo(() => {
    if (!Se || !b) return null;
    const k = l ?? He, H = dt.find((ie) => k(ie) === Se);
    return H ? b(H) : null;
  }, [Se, b, dt, l, He]), ft = yt ?? $e, An = f.useCallback((k) => {
    var le, fe, it;
    if (!Se || !$e || !x || Ce) return;
    const H = (le = x[k]) == null ? void 0 : le.order;
    if (H === void 0) return;
    const ie = (fe = x[$e]) == null ? void 0 : fe.order;
    if (ie === void 0) return;
    const ce = (it = x[ft ?? $e]) == null ? void 0 : it.order;
    if (ce === void 0 || ie === ce) return;
    const ge = (ie < H ? -1 : 0) + (ce < H ? 1 : 0);
    if (ge !== 0)
      return {
        transform: `translateY(${ge * ne.current}px)`,
        transition: "transform 200ms ease",
        position: "relative"
      };
  }, [Se, $e, ft, x, Ce]);
  uO({
    rowActions: o,
    rows: ke,
    activeRowIndex: C,
    selectedCount: Vt,
    contextMenu: he,
    table: De,
    effectiveRows: Ie,
    setActionsOpen: Gt,
    setActionPage: Et,
    setActiveRowIndex: M,
    setActiveRowSource: D,
    suppressMouseRef: st,
    setContextMenu: pe
  }), f.useEffect(() => {
    const k = () => {
      st.current = !1;
    };
    return window.addEventListener("mousemove", k), () => window.removeEventListener("mousemove", k);
  }, []), f.useEffect(() => {
    if (!(u != null && u.length)) return;
    const k = (H) => {
      const ie = H.target;
      ie.tagName === "INPUT" || ie.tagName === "TEXTAREA" || ie.isContentEditable || (H.key === "f" || H.key === "F") && (H.preventDefault(), q((ve) => !ve));
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [u]), f.useEffect(() => {
    if (!a) return;
    const k = (H) => {
      if (!H.altKey || H.key !== "ArrowUp" && H.key !== "ArrowDown") return;
      const ie = H.target;
      if (ie.tagName === "INPUT" || ie.tagName === "TEXTAREA" || ie.isContentEditable || C === null) return;
      H.preventDefault(), st.current = !0;
      const ve = H.key === "ArrowUp" ? -1 : 1, ce = l ?? He, ge = Mn.current, le = ge[C];
      if (!le) return;
      if (le.getIsSelected() && Vt > 1) {
        const wt = ge.map((at, Qo) => at.getIsSelected() ? -1 : Qo).filter((at) => at !== -1), Ae = wt.filter((at) => at < C).length, bn = H.shiftKey ? ve === -1 ? 0 : wt.length : Math.max(0, Math.min(wt.length, Ae + ve));
        if (bn === Ae) return;
        const Nn = new Set(De.getSelectedRowModel().rows.map((at) => at.id)), oo = or.current, cu = ve === 1 ? oo.filter((at) => !Nn.has(ce(at)))[bn - 1] : oo.filter((at) => !Nn.has(ce(at)))[bn], uu = b ? b(le.original) : null, zi = cu && b ? b(cu) : null;
        if (uu !== null && zi !== null && uu !== zi && b && w) {
          const at = zi, Qo = oo.map((Hi) => Nn.has(ce(Hi)) ? w(Hi, at) : Hi);
          Oe(Qo), a(Qo), M(C);
          return;
        }
        const Xb = oo.filter((at) => Nn.has(ce(at))), du = oo.filter((at) => !Nn.has(ce(at)));
        let fu = [
          ...du.slice(0, bn),
          ...Xb,
          ...du.slice(bn)
        ];
        Oe(fu), a(fu), M(C + (bn - Ae));
        return;
      }
      const it = H.shiftKey ? ve === -1 ? 0 : ge.length - 1 : Math.max(0, Math.min(ge.length - 1, C + ve));
      if (it === C) return;
      const bt = ge[it], pt = or.current;
      if (b && w && b(le.original) !== b(bt.original)) {
        const wt = b(bt.original), Ae = w(le.original, wt), bn = pt.map((Nn) => ce(Nn) === ce(le.original) ? Ae : Nn);
        Oe(bn), a(bn), M(C);
        return;
      }
      const Wt = pt.findIndex((wt) => ce(wt) === ce(le.original)), an = pt.findIndex((wt) => ce(wt) === ce(bt.original));
      if (Wt === -1 || an === -1) return;
      const Xe = $i(pt, Wt, an);
      Oe(Xe), a(Xe), M(it);
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [a, C, l, He, b, w]), f.useEffect(() => {
    var H, ie;
    if (C === null) return;
    const k = (H = F.current) == null ? void 0 : H.querySelector(`[data-display-index="${C}"]`);
    k == null || k.scrollIntoView({ block: "nearest", behavior: "instant" }), A === "keyboard" && ((ie = Y.current) == null || ie.blur());
  }, [C, A]), f.useEffect(() => {
    if (!he) {
      Ee(null);
      return;
    }
    const k = () => {
      pe(null), Ee(null);
    };
    return window.addEventListener("click", k), window.addEventListener("scroll", k, !0), () => {
      window.removeEventListener("click", k), window.removeEventListener("scroll", k, !0);
    };
  }, [he]);
  const Dn = f.useCallback((k, H, ie) => {
    if (!_e.current)
      if (D("mouse"), M(k), H && V.current !== null) {
        const ve = Math.min(V.current, k), ce = Math.max(V.current, k), ge = {};
        for (let le = ve; le <= ce; le++) {
          const fe = Mn.current[le];
          fe && (ge[fe.id] = !0);
        }
        ee((le) => ({ ...le, ...ge }));
      } else
        V.current = k, ie();
  }, []), Jo = (k, H) => {
    o != null && o.length && (k.preventDefault(), M(H), pe({ x: k.clientX, y: k.clientY, rowIndex: H }));
  }, Ub = () => {
    if (he === null) return on;
    const k = Ft[he.rowIndex];
    return !k || on.length > 0 && k.getIsSelected() ? on : [k.original];
  }, Kb = De.getState().pagination.pageIndex, Yb = De.getPageCount(), au = ke.map((k) => k.id);
  return /* @__PURE__ */ g(Xr, { children: /* @__PURE__ */ W("div", { className: "flex flex-col gap-3", children: [
    (n || (u == null ? void 0 : u.length) && !S) && /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
      n && /* @__PURE__ */ g(
        hp,
        {
          placeholder: r,
          value: ((lu = De.getColumn(n)) == null ? void 0 : lu.getFilterValue()) ?? "",
          onChange: (k) => {
            var H;
            return (H = De.getColumn(n)) == null ? void 0 : H.setFilterValue(k.target.value);
          },
          className: "max-w-sm h-8 text-sm"
        }
      ),
      (u == null ? void 0 : u.length) && !S && /* @__PURE__ */ g("div", { className: "ml-auto", children: /* @__PURE__ */ g(
        oO,
        {
          filterDefs: u,
          activeFilters: U,
          onToggleValue: ro,
          open: B,
          onOpenChange: q,
          trigger: /* @__PURE__ */ g(rO, { ref: Y, active: U.length > 0 })
        }
      ) })
    ] }),
    (u == null ? void 0 : u.length) && U.length > 0 && !S && /* @__PURE__ */ g(
      nO,
      {
        filterDefs: u,
        activeFilters: U,
        onRemoveFilter: Pn,
        onClearAll: () => S ? v == null ? void 0 : v() : X([])
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        ref: z,
        tabIndex: 0,
        className: "sr-only",
        onFocus: (k) => {
          var H;
          ke.length !== 0 && ((H = $.current) != null && H.contains(k.relatedTarget) || (M(0), D("keyboard")));
        }
      }
    ),
    /* @__PURE__ */ g(
      II,
      {
        sensors: Me,
        collisionDetection: Ik,
        modifiers: [jI, HI],
        onDragStart: Fe,
        onDragMove: Ve,
        onDragEnd: sn,
        children: /* @__PURE__ */ g("div", { ref: F, children: c === "list" ? /* @__PURE__ */ g(Ff, { items: au, strategy: Lf, children: /* @__PURE__ */ g("div", { children: ke.length === 0 && !tt ? /* @__PURE__ */ g("div", { className: "h-24 flex items-center justify-center text-muted-foreground text-sm", children: "No results found." }) : tt ? Array.from(tt.entries()).map(([k, H], ie) => {
          const ve = G.has(k), ce = x == null ? void 0 : x[k], ge = !Se || ft === $e || Ce ? H.length : k === $e ? H.length - 1 : k === ft ? H.length + 1 : H.length;
          return /* @__PURE__ */ W(f.Fragment, { children: [
            /* @__PURE__ */ g(
              Hf,
              {
                onMeasureHeight: ie === 0 ? (le) => {
                  te.current = le;
                } : void 0,
                label: (ce == null ? void 0 : ce.label) ?? k,
                icon: ce == null ? void 0 : ce.icon,
                count: ge,
                collapsed: ve,
                onToggle: () => L((le) => {
                  const fe = new Set(le);
                  return fe.has(k) ? fe.delete(k) : fe.add(k), fe;
                }),
                headerStyle: An(k)
              }
            ),
            !ve && H.map((le) => {
              const fe = Dt.get(le.id) ?? 0, it = le.getIsSelected(), bt = ke[fe - 1], pt = ke[fe + 1], Wt = (bt == null ? void 0 : bt.getIsSelected()) ?? !1, an = (pt == null ? void 0 : pt.getIsSelected()) ?? !1;
              return /* @__PURE__ */ g(
                Bf,
                {
                  row: le,
                  displayIndex: fe,
                  activeRowIndex: C,
                  activeRowSource: A,
                  reorderable: !!a,
                  customTranslateY: ye ? ye[fe] : null,
                  isDragGroup: Ce && le.getIsSelected(),
                  justDropped: Ke,
                  onMeasureHeight: fe === 0 ? (Xe) => {
                    ne.current = Xe;
                  } : void 0,
                  onRowClick: (Xe, wt) => Dn(Xe, wt, () => le.toggleSelected()),
                  onRowMouseEnter: (Xe) => {
                    st.current || (D("mouse"), M(Xe));
                  },
                  onContextMenu: Jo
                },
                `${le.id}-${it ? 1 : 0}-${Wt ? 1 : 0}-${an ? 1 : 0}`
              );
            })
          ] }, k);
        }) : Ft.map((k, H) => {
          var ge, le;
          const ie = k.getIsSelected(), ve = ((ge = Ft[H - 1]) == null ? void 0 : ge.getIsSelected()) ?? !1, ce = ((le = Ft[H + 1]) == null ? void 0 : le.getIsSelected()) ?? !1;
          return /* @__PURE__ */ g(
            Bf,
            {
              row: k,
              displayIndex: H,
              activeRowIndex: C,
              activeRowSource: A,
              reorderable: !!a,
              customTranslateY: ye ? ye[H] : null,
              isDragGroup: Ce && k.getIsSelected(),
              justDropped: Ke,
              onMeasureHeight: H === 0 ? (fe) => {
                ne.current = fe;
              } : void 0,
              onRowClick: (fe, it) => Dn(fe, it, () => k.toggleSelected()),
              onRowMouseEnter: (fe) => {
                st.current || (D("mouse"), M(fe));
              },
              onContextMenu: Jo
            },
            `${k.id}-${ie ? 1 : 0}-${ve ? 1 : 0}-${ce ? 1 : 0}`
          );
        }) }) }) : /* @__PURE__ */ W(sb, { className: "border-separate border-spacing-0", children: [
          /* @__PURE__ */ g(ib, { children: De.getHeaderGroups().map((k) => /* @__PURE__ */ g(go, { className: "hover:bg-transparent", children: k.headers.map((H) => /* @__PURE__ */ g(
            lb,
            {
              style: H.column.columnDef.size ? { width: H.column.columnDef.size } : void 0,
              className: J(
                "text-xs font-medium text-muted-foreground uppercase tracking-wide h-8 group/th",
                H.id === "_select" && "w-6 !pl-2 !pr-0",
                H.column.getCanSort() && "cursor-pointer select-none"
              ),
              onClick: H.column.getCanSort() ? () => {
                const ie = H.column.getIsSorted();
                H.column.toggleSorting(ie === "asc");
              } : void 0,
              children: H.isPlaceholder ? null : H.id === "_select" ? pr(H.column.columnDef.header, H.getContext()) : /* @__PURE__ */ W("div", { className: "flex items-center gap-1", children: [
                pr(H.column.columnDef.header, H.getContext()),
                H.column.getCanSort() && (() => {
                  const ie = H.column.getIsSorted();
                  return ie === "asc" ? /* @__PURE__ */ g(Ku, { className: "h-3 w-3 text-foreground" }) : ie === "desc" ? /* @__PURE__ */ g(CC, { className: "h-3 w-3 text-foreground" }) : /* @__PURE__ */ g(Ku, { className: "h-3 w-3 opacity-0 group-hover/th:opacity-40 transition-opacity" });
                })()
              ] })
            },
            H.id
          )) }, k.id)) }),
          /* @__PURE__ */ g(Ff, { items: au, strategy: Lf, children: /* @__PURE__ */ g(ab, { children: ke.length === 0 && !tt ? /* @__PURE__ */ g(go, { children: /* @__PURE__ */ g(
            ti,
            {
              colSpan: vt.length,
              className: "h-24 text-center text-muted-foreground text-sm",
              children: "No results found."
            }
          ) }) : tt ? Array.from(tt.entries()).map(([k, H], ie) => {
            const ve = G.has(k), ce = x == null ? void 0 : x[k], ge = !Se || ft === $e || Ce ? H.length : k === $e ? H.length - 1 : k === ft ? H.length + 1 : H.length;
            return /* @__PURE__ */ W(f.Fragment, { children: [
              /* @__PURE__ */ g(go, { className: "hover:bg-transparent", style: An(k), children: /* @__PURE__ */ g(ti, { colSpan: vt.length, className: "p-0", children: /* @__PURE__ */ g(
                Hf,
                {
                  onMeasureHeight: ie === 0 ? (le) => {
                    te.current = le;
                  } : void 0,
                  label: (ce == null ? void 0 : ce.label) ?? k,
                  icon: ce == null ? void 0 : ce.icon,
                  count: ge,
                  collapsed: ve,
                  onToggle: () => L((le) => {
                    const fe = new Set(le);
                    return fe.has(k) ? fe.delete(k) : fe.add(k), fe;
                  })
                }
              ) }) }),
              !ve && H.map((le) => {
                const fe = Dt.get(le.id) ?? 0, it = le.getIsSelected(), bt = ke[fe - 1], pt = ke[fe + 1], Wt = (bt == null ? void 0 : bt.getIsSelected()) ?? !1, an = (pt == null ? void 0 : pt.getIsSelected()) ?? !1;
                return /* @__PURE__ */ g(
                  zf,
                  {
                    row: le,
                    displayIndex: fe,
                    activeRowIndex: C,
                    activeRowSource: A,
                    reorderable: !!a,
                    customTranslateY: ye ? ye[fe] : null,
                    isDragGroup: Ce && le.getIsSelected(),
                    justDropped: Ke,
                    onMeasureHeight: fe === 0 ? (Xe) => {
                      ne.current = Xe;
                    } : void 0,
                    onRowClick: (Xe, wt) => Dn(Xe, wt, () => le.toggleSelected()),
                    onRowMouseEnter: (Xe) => {
                      st.current || (D("mouse"), M(Xe));
                    },
                    onContextMenu: Jo
                  },
                  `${le.id}-${it ? 1 : 0}-${Wt ? 1 : 0}-${an ? 1 : 0}`
                );
              })
            ] }, k);
          }) : ke.map((k, H) => {
            var ge, le;
            const ie = k.getIsSelected(), ve = ((ge = ke[H - 1]) == null ? void 0 : ge.getIsSelected()) ?? !1, ce = ((le = ke[H + 1]) == null ? void 0 : le.getIsSelected()) ?? !1;
            return /* @__PURE__ */ g(
              zf,
              {
                row: k,
                displayIndex: H,
                activeRowIndex: C,
                activeRowSource: A,
                reorderable: !!a,
                customTranslateY: ye ? ye[H] : null,
                isDragGroup: Ce && k.getIsSelected(),
                justDropped: Ke,
                onMeasureHeight: H === 0 ? (fe) => {
                  ne.current = fe;
                } : void 0,
                onRowClick: (fe, it) => Dn(fe, it, () => k.toggleSelected()),
                onRowMouseEnter: (fe) => {
                  st.current || (D("mouse"), M(fe));
                },
                onContextMenu: Jo
              },
              `${k.id}-${ie ? 1 : 0}-${ve ? 1 : 0}-${ce ? 1 : 0}`
            );
          }) }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ g(
      lO,
      {
        ref: $,
        rowCount: De.getFilteredRowModel().rows.length,
        showPagination: !R,
        pageIndex: Kb,
        pageCount: Yb,
        canPreviousPage: De.getCanPreviousPage(),
        canNextPage: De.getCanNextPage(),
        onPreviousPage: () => De.previousPage(),
        onNextPage: () => De.nextPage(),
        onShiftTabToTable: () => {
          var k;
          M(ke.length - 1), D("keyboard"), (k = z.current) == null || k.focus();
        }
      }
    ),
    /* @__PURE__ */ g(
      tO,
      {
        contextMenu: he,
        contextSub: ze,
        rowActions: o ?? [],
        onSetContextSub: Ee,
        onClose: () => {
          pe(null), Ee(null);
        },
        getContextRows: Ub
      }
    ),
    /* @__PURE__ */ g(
      iO,
      {
        selectedCount: Vt,
        rowActions: o,
        onClearSelection: () => De.resetRowSelection(),
        onOpenActions: () => Gt(!0)
      }
    ),
    o != null && o.length ? /* @__PURE__ */ g(
      aO,
      {
        open: We,
        onOpenChange: Gt,
        rowActions: o,
        actionPage: Ue,
        onSetActionPage: Et,
        effectiveRows: Ie,
        actionsHeading: nt
      }
    ) : null
  ] }) });
}
function jb({
  item: e,
  isActive: t,
  collapsed: n,
  depth: r = 0,
  onActiveChange: o
}) {
  const [s, i] = f.useState(!0), a = e.icon, c = /* @__PURE__ */ W(
    "button",
    {
      onClick: () => {
        e.children && i((u) => !u), e.onClick && e.onClick(), o && o(e.id);
      },
      className: J(
        "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
        r > 0 && "ml-4 w-[calc(100%-1rem)]",
        t ? "bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
        n && "justify-center px-0"
      ),
      children: [
        a && /* @__PURE__ */ g(
          a,
          {
            className: J(
              "shrink-0 transition-colors",
              n ? "h-4.5 w-4.5" : "h-4 w-4",
              t ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            )
          }
        ),
        !n && /* @__PURE__ */ W(Zt, { children: [
          /* @__PURE__ */ g("span", { className: "flex-1 truncate text-left", children: e.label }),
          e.badge !== void 0 && /* @__PURE__ */ g("span", { className: "ml-auto text-xs tabular-nums text-muted-foreground", children: e.badge })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ W("div", { children: [
    n ? /* @__PURE__ */ g(Xr, { delayDuration: 0, children: /* @__PURE__ */ W(Bn, { children: [
      /* @__PURE__ */ g(zn, { asChild: !0, children: c }),
      /* @__PURE__ */ g(Hn, { side: "right", children: /* @__PURE__ */ g("p", { children: e.label }) })
    ] }) }) : c,
    !n && e.children && s && /* @__PURE__ */ g("div", { className: "mt-0.5 space-y-0.5", children: e.children.map((u) => /* @__PURE__ */ g(
      jb,
      {
        item: u,
        isActive: !1,
        collapsed: n,
        depth: r + 1,
        onActiveChange: o
      },
      u.id
    )) })
  ] });
}
function dO(e) {
  return e.id.startsWith("separator");
}
function FO({
  items: e,
  activeId: t,
  onActiveChange: n,
  collapsed: r = !1,
  onCollapsedChange: o,
  header: s,
  footer: i
}) {
  const a = [];
  let l = [];
  for (const c of e)
    dO(c) ? (a.push(l), l = []) : l.push(c);
  return a.push(l), /* @__PURE__ */ W(
    "div",
    {
      className: J(
        "flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        r ? "w-12" : "w-56"
      ),
      children: [
        s && /* @__PURE__ */ g("div", { className: J("shrink-0 border-b border-sidebar-border", r ? "px-2 py-3" : "px-3 py-3"), children: s }),
        /* @__PURE__ */ g("div", { className: "flex-1 overflow-y-auto py-2", children: a.map((c, u) => /* @__PURE__ */ W(f.Fragment, { children: [
          u > 0 && /* @__PURE__ */ g(Yh, { className: "my-2 bg-sidebar-border" }),
          /* @__PURE__ */ g("nav", { className: J("space-y-0.5", r ? "px-1" : "px-2"), children: c.map((d) => /* @__PURE__ */ g(
            jb,
            {
              item: d,
              isActive: t === d.id,
              collapsed: r,
              onActiveChange: n
            },
            d.id
          )) })
        ] }, u)) }),
        i && /* @__PURE__ */ g("div", { className: J("shrink-0 border-t border-sidebar-border", r ? "px-1 py-2" : "px-2 py-2"), children: i }),
        /* @__PURE__ */ g("div", { className: J("shrink-0 border-t border-sidebar-border", r ? "px-1 py-2" : "px-2 py-2"), children: /* @__PURE__ */ g(Xr, { delayDuration: 0, children: /* @__PURE__ */ W(Bn, { children: [
          /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g(
            "button",
            {
              onClick: () => o == null ? void 0 : o(!r),
              className: J(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors",
                r && "justify-center px-0"
              ),
              children: r ? /* @__PURE__ */ g(Yr, { className: "h-4 w-4" }) : /* @__PURE__ */ W(Zt, { children: [
                /* @__PURE__ */ g(Fh, { className: "h-4 w-4" }),
                /* @__PURE__ */ g("span", { children: "Collapse" })
              ] })
            }
          ) }),
          r && /* @__PURE__ */ g(Hn, { side: "right", children: /* @__PURE__ */ g("p", { children: "Expand sidebar" }) })
        ] }) }) })
      ]
    }
  );
}
function VO({
  groups: e,
  placeholder: t = "Type a command or search...",
  open: n,
  onOpenChange: r,
  triggerShortcut: o = !0
}) {
  const [s, i] = f.useState(!1), a = n !== void 0, l = a ? n : s, c = f.useCallback(
    (u) => {
      a || i(u), r == null || r(u);
    },
    [a, r]
  );
  return f.useEffect(() => {
    if (!o) return;
    const u = (d) => {
      d.key === "k" && (d.metaKey || d.ctrlKey) && (d.preventDefault(), c(!l));
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [o, l, c]), /* @__PURE__ */ W(nb, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ g(Uc, { placeholder: t }),
    /* @__PURE__ */ W(Kc, { children: [
      /* @__PURE__ */ g(Yc, { children: "No results found." }),
      e.map((u, d) => /* @__PURE__ */ W(f.Fragment, { children: [
        d > 0 && /* @__PURE__ */ g(rb, {}),
        /* @__PURE__ */ g(Qs, { heading: u.label, children: u.items.map((p) => {
          const h = p.icon;
          return /* @__PURE__ */ W(
            ei,
            {
              value: [p.label, ...p.keywords ?? []].join(" "),
              onSelect: () => {
                p.onSelect(), c(!1);
              },
              children: [
                h && /* @__PURE__ */ g(h, { className: "mr-2 h-4 w-4 opacity-70" }),
                /* @__PURE__ */ g("span", { children: p.label }),
                p.shortcut && /* @__PURE__ */ g(ob, { children: p.shortcut })
              ]
            },
            p.id
          );
        }) })
      ] }, u.label))
    ] })
  ] });
}
function $O({ label: e, description: t, children: n, className: r }) {
  return /* @__PURE__ */ W("div", { className: J("flex items-center justify-between gap-6 py-3 px-4", r), children: [
    /* @__PURE__ */ W("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ g("p", { className: "text-sm font-medium text-foreground", children: e }),
      t && /* @__PURE__ */ g("p", { className: "text-xs text-muted-foreground mt-0.5", children: t })
    ] }),
    /* @__PURE__ */ g("div", { className: "shrink-0", children: n })
  ] });
}
function BO({ title: e, children: t, className: n }) {
  return /* @__PURE__ */ W("div", { className: J("space-y-0", n), children: [
    /* @__PURE__ */ g("h2", { className: "text-base font-semibold text-foreground mb-3", children: e }),
    /* @__PURE__ */ g("div", { className: "rounded-lg border border-border bg-card divide-y divide-border overflow-hidden", children: t })
  ] });
}
function zO({ title: e = "Settings", children: t, className: n }) {
  return /* @__PURE__ */ W("div", { className: J("max-w-3xl mx-auto py-8 px-6 space-y-8", n), children: [
    /* @__PURE__ */ g("h1", { className: "text-2xl font-semibold text-foreground", children: e }),
    t
  ] });
}
const Gb = f.createContext(void 0), fO = "dkn2-ui-theme";
function Wb() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function jf(e) {
  return e === "system" ? Wb() : e;
}
function HO({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = fO
}) {
  const [r, o] = f.useState(() => typeof window > "u" ? t : localStorage.getItem(n) ?? t), [s, i] = f.useState(
    () => jf(r)
  );
  f.useEffect(() => {
    const c = document.documentElement, u = jf(r);
    i(u), c.classList.remove("light", "dark"), c.classList.add(u);
  }, [r]), f.useEffect(() => {
    if (r !== "system") return;
    const c = window.matchMedia("(prefers-color-scheme: dark)"), u = () => {
      const d = Wb();
      i(d), document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(d);
    };
    return c.addEventListener("change", u), () => c.removeEventListener("change", u);
  }, [r]);
  const a = f.useCallback(
    (c) => {
      localStorage.setItem(n, c), o(c);
    },
    [n]
  ), l = f.useMemo(
    () => ({ theme: r, resolvedTheme: s, setTheme: a }),
    [r, s, a]
  );
  return /* @__PURE__ */ g(Gb.Provider, { value: l, children: e });
}
function pO() {
  const e = f.useContext(Gb);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const Ia = ["light", "dark", "system"], hO = {
  light: GC,
  dark: BC,
  system: VC
}, Gf = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme"
};
function jO() {
  const { theme: e, setTheme: t } = pO(), n = () => {
    const o = Ia.indexOf(e), s = Ia[(o + 1) % Ia.length];
    t(s);
  }, r = hO[e];
  return /* @__PURE__ */ g(Xr, { delayDuration: 0, children: /* @__PURE__ */ W(Bn, { children: [
    /* @__PURE__ */ g(zn, { asChild: !0, children: /* @__PURE__ */ g(
      xo,
      {
        variant: "ghost",
        size: "icon",
        onClick: n,
        "aria-label": Gf[e],
        children: /* @__PURE__ */ g(r, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ g(Hn, { children: /* @__PURE__ */ g("p", { children: Gf[e] }) })
  ] }) });
}
export {
  bO as Badge,
  xo as Button,
  OO as ColorPicker,
  tb as Command,
  nb as CommandDialog,
  Yc as CommandEmpty,
  Qs as CommandGroup,
  Uc as CommandInput,
  ei as CommandItem,
  Kc as CommandList,
  VO as CommandMenu,
  rb as CommandSeparator,
  ob as CommandShortcut,
  LO as DataTable,
  nP as Dialog,
  EO as DialogClose,
  tv as DialogContent,
  ov as DialogDescription,
  oP as DialogFooter,
  nv as DialogHeader,
  ev as DialogOverlay,
  rP as DialogPortal,
  rv as DialogTitle,
  RO as DialogTrigger,
  TO as DropdownMenu,
  cP as DropdownMenuCheckboxItem,
  aP as DropdownMenuContent,
  MO as DropdownMenuGroup,
  lP as DropdownMenuItem,
  dP as DropdownMenuLabel,
  AO as DropdownMenuPortal,
  NO as DropdownMenuRadioGroup,
  uP as DropdownMenuRadioItem,
  fP as DropdownMenuSeparator,
  pP as DropdownMenuShortcut,
  DO as DropdownMenuSub,
  iP as DropdownMenuSubContent,
  sP as DropdownMenuSubTrigger,
  PO as DropdownMenuTrigger,
  nO as FilterBar,
  rO as FilterButton,
  oO as FilterMenu,
  hp as Input,
  tx as Label,
  hP as Popover,
  kO as PopoverAnchor,
  sv as PopoverContent,
  mP as PopoverTrigger,
  gP as ScrollArea,
  iv as ScrollBar,
  wO as Select,
  KC as SelectContent,
  xO as SelectGroup,
  XC as SelectItem,
  YC as SelectLabel,
  $h as SelectScrollDownButton,
  Vh as SelectScrollUpButton,
  qC as SelectSeparator,
  UC as SelectTrigger,
  SO as SelectValue,
  Yh as Separator,
  zO as SettingsPage,
  $O as SettingsRow,
  BO as SettingsSection,
  FO as SideMenu,
  nR as Switch,
  sb as Table,
  ab as TableBody,
  BN as TableCaption,
  ti as TableCell,
  $N as TableFooter,
  lb as TableHead,
  ib as TableHeader,
  go as TableRow,
  HO as ThemeProvider,
  jO as ThemeToggle,
  _O as Toaster,
  Bn as Tooltip,
  Hn as TooltipContent,
  Xr as TooltipProvider,
  zn as TooltipTrigger,
  Zw as badgeVariants,
  qw as buttonVariants,
  J as cn,
  pO as useTheme
};
