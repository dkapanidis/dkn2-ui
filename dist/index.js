import { jsx as m, Fragment as Nt, jsxs as W } from "react/jsx-runtime";
import * as c from "react";
import N, { useLayoutEffect as iu, useState as su, forwardRef as Gi, createElement as To } from "react";
import * as Wi from "react-dom";
import ji from "react-dom";
function qr(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function be(...e) {
  return (n) => {
    let t = !1;
    const o = e.map((r) => {
      const i = qr(r, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const i = o[r];
          typeof i == "function" ? i() : qr(e[r], null);
        }
      };
  };
}
function ie(...e) {
  return c.useCallback(be(...e), e);
}
var au = Symbol.for("react.lazy"), Pn = c[" use ".trim().toString()];
function lu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Ui(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === au && "_payload" in e && lu(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  const n = /* @__PURE__ */ cu(e), t = c.forwardRef((o, r) => {
    let { children: i, ...s } = o;
    Ui(i) && typeof Pn == "function" && (i = Pn(i._payload));
    const a = c.Children.toArray(i), l = a.find(du);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ m(n, { ...s, ref: r, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ m(n, { ...s, ref: r, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
var Yi = /* @__PURE__ */ Ln("Slot");
// @__NO_SIDE_EFFECTS__
function cu(e) {
  const n = c.forwardRef((t, o) => {
    let { children: r, ...i } = t;
    if (Ui(r) && typeof Pn == "function" && (r = Pn(r._payload)), c.isValidElement(r)) {
      const s = pu(r), a = fu(i, r.props);
      return r.type !== c.Fragment && (a.ref = o ? be(o, s) : s), c.cloneElement(r, a);
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var uu = Symbol("radix.slottable");
function du(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === uu;
}
function fu(e, n) {
  const t = { ...n };
  for (const o in n) {
    const r = e[o], i = n[o];
    /^on[A-Z]/.test(o) ? r && i ? t[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (t[o] = r) : o === "style" ? t[o] = { ...r, ...i } : o === "className" && (t[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function pu(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function Ki(e) {
  var n, t, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (n = 0; n < r; n++) e[n] && (t = Ki(e[n])) && (o && (o += " "), o += t);
  } else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function Xi() {
  for (var e, n, t = 0, o = "", r = arguments.length; t < r; t++) (e = arguments[t]) && (n = Ki(e)) && (o && (o += " "), o += n);
  return o;
}
const Zr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Qr = Xi, qi = (e, n) => (t) => {
  var o;
  if ((n == null ? void 0 : n.variants) == null) return Qr(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: r, defaultVariants: i } = n, s = Object.keys(r).map((u) => {
    const f = t == null ? void 0 : t[u], d = i == null ? void 0 : i[u];
    if (f === null) return null;
    const g = Zr(f) || Zr(d);
    return r[u][g];
  }), a = t && Object.entries(t).reduce((u, f) => {
    let [d, g] = f;
    return g === void 0 || (u[d] = g), u;
  }, {}), l = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, f) => {
    let { class: d, className: g, ...p } = f;
    return Object.entries(p).every((h) => {
      let [v, w] = h;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...a
      }[v]) : {
        ...i,
        ...a
      }[v] === w;
    }) ? [
      ...u,
      d,
      g
    ] : u;
  }, []);
  return Qr(e, s, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, gu = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let o = 0; o < e.length; o++)
    t[o] = e[o];
  for (let o = 0; o < n.length; o++)
    t[e.length + o] = n[o];
  return t;
}, mu = (e, n) => ({
  classGroupId: e,
  validator: n
}), Zi = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), Mn = "-", Jr = [], hu = "arbitrary..", vu = (e) => {
  const n = bu(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return wu(s);
      const a = s.split(Mn), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return Qi(a, l, n);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = o[s], u = t[s];
        return l ? u ? gu(u, l) : l : u || Jr;
      }
      return t[s] || Jr;
    }
  };
}, Qi = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const r = e[n], i = t.nextPart.get(r);
  if (i) {
    const u = Qi(e, n + 1, i);
    if (u) return u;
  }
  const s = t.validators;
  if (s === null)
    return;
  const a = n === 0 ? e.join(Mn) : e.slice(n).join(Mn), l = s.length;
  for (let u = 0; u < l; u++) {
    const f = s[u];
    if (f.validator(a))
      return f.classGroupId;
  }
}, wu = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), o = n.slice(0, t);
  return o ? hu + o : void 0;
})(), bu = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return yu(t, n);
}, yu = (e, n) => {
  const t = Zi();
  for (const o in e) {
    const r = e[o];
    Jo(r, t, o, n);
  }
  return t;
}, Jo = (e, n, t, o) => {
  const r = e.length;
  for (let i = 0; i < r; i++) {
    const s = e[i];
    xu(s, n, t, o);
  }
}, xu = (e, n, t, o) => {
  if (typeof e == "string") {
    Cu(e, n, t);
    return;
  }
  if (typeof e == "function") {
    Su(e, n, t, o);
    return;
  }
  Ru(e, n, t, o);
}, Cu = (e, n, t) => {
  const o = e === "" ? n : Ji(n, e);
  o.classGroupId = t;
}, Su = (e, n, t, o) => {
  if (Eu(e)) {
    Jo(e(o), n, t, o);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(mu(t, e));
}, Ru = (e, n, t, o) => {
  const r = Object.entries(e), i = r.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = r[s];
    Jo(l, Ji(n, a), t, o);
  }
}, Ji = (e, n) => {
  let t = e;
  const o = n.split(Mn), r = o.length;
  for (let i = 0; i < r; i++) {
    const s = o[i];
    let a = t.nextPart.get(s);
    a || (a = Zi(), t.nextPart.set(s, a)), t = a;
  }
  return t;
}, Eu = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, _u = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const r = (i, s) => {
    t[i] = s, n++, n > e && (n = 0, o = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = t[i];
      if (s !== void 0)
        return s;
      if ((s = o[i]) !== void 0)
        return r(i, s), s;
    },
    set(i, s) {
      i in t ? t[i] = s : r(i, s);
    }
  };
}, Do = "!", ei = ":", Pu = [], ti = (e, n, t, o, r) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: o,
  isExternal: r
}), Mu = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let o = (r) => {
    const i = [];
    let s = 0, a = 0, l = 0, u;
    const f = r.length;
    for (let v = 0; v < f; v++) {
      const w = r[v];
      if (s === 0 && a === 0) {
        if (w === ei) {
          i.push(r.slice(l, v)), l = v + 1;
          continue;
        }
        if (w === "/") {
          u = v;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? a++ : w === ")" && a--;
    }
    const d = i.length === 0 ? r : r.slice(l);
    let g = d, p = !1;
    d.endsWith(Do) ? (g = d.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      d.startsWith(Do) && (g = d.slice(1), p = !0)
    );
    const h = u && u > l ? u - l : void 0;
    return ti(i, p, g, h);
  };
  if (n) {
    const r = n + ei, i = o;
    o = (s) => s.startsWith(r) ? i(s.slice(r.length)) : ti(Pu, !1, s, void 0, !0);
  }
  if (t) {
    const r = o;
    o = (i) => t({
      className: i,
      parseClassName: r
    });
  }
  return o;
}, Au = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, o) => {
    n.set(t, 1e6 + o);
  }), (t) => {
    const o = [];
    let r = [];
    for (let i = 0; i < t.length; i++) {
      const s = t[i], a = s[0] === "[", l = n.has(s);
      a || l ? (r.length > 0 && (r.sort(), o.push(...r), r = []), o.push(s)) : r.push(s);
    }
    return r.length > 0 && (r.sort(), o.push(...r)), o;
  };
}, Nu = (e) => ({
  cache: _u(e.cacheSize),
  parseClassName: Mu(e),
  sortModifiers: Au(e),
  ...vu(e)
}), Iu = /\s+/, ku = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: i
  } = n, s = [], a = e.trim().split(Iu);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const f = a[u], {
      isExternal: d,
      modifiers: g,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = t(f);
    if (d) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let w = !!v, b = o(w ? h.substring(0, v) : h);
    if (!b) {
      if (!w) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = o(h), !b) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const y = g.length === 0 ? "" : g.length === 1 ? g[0] : i(g).join(":"), x = p ? y + Do : y, C = x + b;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const _ = r(b, w);
    for (let S = 0; S < _.length; ++S) {
      const P = _[S];
      s.push(x + P);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Tu = (...e) => {
  let n = 0, t, o, r = "";
  for (; n < e.length; )
    (t = e[n++]) && (o = es(t)) && (r && (r += " "), r += o);
  return r;
}, es = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (n = es(e[o])) && (t && (t += " "), t += n);
  return t;
}, Du = (e, ...n) => {
  let t, o, r, i;
  const s = (l) => {
    const u = n.reduce((f, d) => d(f), e());
    return t = Nu(u), o = t.cache.get, r = t.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = o(l);
    if (u)
      return u;
    const f = ku(l, t);
    return r(l, f), f;
  };
  return i = s, (...l) => i(Tu(...l));
}, Ou = [], se = (e) => {
  const n = (t) => t[e] || Ou;
  return n.isThemeGetter = !0, n;
}, ts = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ns = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Fu = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, $u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Lu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, zu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Fu.test(e), te = (e) => !!e && !Number.isNaN(Number(e)), et = (e) => !!e && Number.isInteger(Number(e)), co = (e) => e.endsWith("%") && te(e.slice(0, -1)), je = (e) => $u.test(e), os = () => !0, Bu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Lu.test(e) && !Vu.test(e)
), er = () => !1, Gu = (e) => zu.test(e), Wu = (e) => Hu.test(e), ju = (e) => !$(e) && !L(e), Uu = (e) => at(e, ss, er), $ = (e) => ts.test(e), pt = (e) => at(e, as, Bu), ni = (e) => at(e, ed, te), Yu = (e) => at(e, cs, os), Ku = (e) => at(e, ls, er), oi = (e) => at(e, rs, er), Xu = (e) => at(e, is, Wu), dn = (e) => at(e, us, Gu), L = (e) => ns.test(e), zt = (e) => wt(e, as), qu = (e) => wt(e, ls), ri = (e) => wt(e, rs), Zu = (e) => wt(e, ss), Qu = (e) => wt(e, is), fn = (e) => wt(e, us, !0), Ju = (e) => wt(e, cs, !0), at = (e, n, t) => {
  const o = ts.exec(e);
  return o ? o[1] ? n(o[1]) : t(o[2]) : !1;
}, wt = (e, n, t = !1) => {
  const o = ns.exec(e);
  return o ? o[1] ? n(o[1]) : t : !1;
}, rs = (e) => e === "position" || e === "percentage", is = (e) => e === "image" || e === "url", ss = (e) => e === "length" || e === "size" || e === "bg-size", as = (e) => e === "length", ed = (e) => e === "number", ls = (e) => e === "family-name", cs = (e) => e === "number" || e === "weight", us = (e) => e === "shadow", td = () => {
  const e = se("color"), n = se("font"), t = se("text"), o = se("font-weight"), r = se("tracking"), i = se("leading"), s = se("breakpoint"), a = se("container"), l = se("spacing"), u = se("radius"), f = se("shadow"), d = se("inset-shadow"), g = se("text-shadow"), p = se("drop-shadow"), h = se("blur"), v = se("perspective"), w = se("aspect"), b = se("ease"), y = se("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], _ = () => [...C(), L, $], S = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], R = () => [L, $, l], D = () => [Je, "full", "auto", ...R()], V = () => [et, "none", "subgrid", L, $], K = () => ["auto", {
    span: ["full", et, L, $]
  }, et, L, $], ee = () => [et, "auto", L, $], Q = () => ["auto", "min", "max", "fr", L, $], Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], k = () => ["auto", ...R()], G = () => [Je, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], z = () => [Je, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...R()], T = () => [Je, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...R()], A = () => [e, L, $], oe = () => [...C(), ri, oi, {
    position: [L, $]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], I = () => ["auto", "cover", "contain", Zu, Uu, {
    size: [L, $]
  }], O = () => [co, zt, pt], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    L,
    $
  ], F = () => ["", te, zt, pt], q = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [te, co, ri, oi], ae = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    L,
    $
  ], _e = () => ["none", te, L, $], he = () => ["none", te, L, $], Ie = () => [te, L, $], ke = () => [Je, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [je],
      breakpoint: [je],
      color: [os],
      container: [je],
      "drop-shadow": [je],
      ease: ["in", "out", "in-out"],
      font: [ju],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [je],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [je],
      shadow: [je],
      spacing: ["px", te],
      text: [je],
      "text-shadow": [je],
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
        aspect: ["auto", "square", Je, $, L, w]
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
        columns: [te, $, L, a]
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
        object: _()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        inset: D()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: D()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: D()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": D()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        z: [et, "auto", L, $]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Je, "full", "auto", a, ...R()]
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
        flex: [te, Je, "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", te, L, $]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", te, L, $]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [et, "first", "last", "none", L, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: K()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: K()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": Q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ne(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ne()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ne(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ne(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ne()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: R()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: k()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: k()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: k()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: k()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: k()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: k()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: k()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: k()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: k()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: k()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: k()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": R()
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
        "space-y": R()
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
        size: G()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...z()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...z()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...z()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...T()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...T()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...T()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...G()]
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
          ...G()
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
            screen: [s]
          },
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, zt, pt]
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
        font: [o, Ju, Yu]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", co, $]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qu, Ku, n]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [$]
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
        tracking: [r, L, $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [te, "none", L, ni]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L, $]
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
        list: ["disc", "decimal", "none", L, $]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [te, "from-font", "auto", L, pt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [te, "auto", L, $]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L, $]
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
        content: ["none", L, $]
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
        bg: oe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: E()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: I()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, et, L, $],
          radial: ["", L, $],
          conic: [et, L, $]
        }, Qu, Xu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: F()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": F()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
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
        "divide-y": F()
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
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: A()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": A()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [te, L, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", te, zt, pt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          f,
          fn,
          dn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, fn, dn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: F()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [te, pt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": F()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, fn, dn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [te, L, $]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
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
        "mask-linear": [te]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": B()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": B()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [L, $]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [te]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": B()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": B()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: oe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: E()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: I()
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
        mask: ["none", L, $]
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
          L,
          $
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ae()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [te, L, $]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [te, L, $]
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
          p,
          fn,
          dn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", te, L, $]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [te, L, $]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", te, L, $]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [te, L, $]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", te, L, $]
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
          L,
          $
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ae()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [te, L, $]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [te, L, $]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", te, L, $]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [te, L, $]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", te, L, $]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [te, L, $]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [te, L, $]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", te, L, $]
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
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", L, $]
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
        duration: [te, "initial", L, $]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, L, $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [te, L, $]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, L, $]
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
        perspective: [v, L, $]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: _e()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": _e()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": _e()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": _e()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: he()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": he()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": he()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": he()
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
        skew: Ie()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ie()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ie()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [L, $, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _()
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L, $]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": R()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": R()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", L, $]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [te, zt, pt, ni]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, nd = /* @__PURE__ */ Du(td);
function Y(...e) {
  return nd(Xi(e));
}
const od = qi(
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
), It = c.forwardRef(
  ({ className: e, variant: n, size: t, asChild: o = !1, ...r }, i) => /* @__PURE__ */ m(
    o ? Yi : "button",
    {
      className: Y(od({ variant: n, size: t, className: e })),
      ref: i,
      ...r
    }
  )
);
It.displayName = "Button";
const rd = qi(
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
function id({ className: e, variant: n, asChild: t = !1, ...o }) {
  return /* @__PURE__ */ m(t ? Yi : "span", { className: Y(rd({ variant: n }), e), ...o });
}
const Vn = c.forwardRef(
  ({ className: e, type: n, ...t }, o) => /* @__PURE__ */ m(
    "input",
    {
      type: n,
      className: Y(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ref: o,
      ...t
    }
  )
);
Vn.displayName = "Input";
var sd = [
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
], ad = sd.reduce((e, n) => {
  const t = /* @__PURE__ */ Ln(`Primitive.${n}`), o = c.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${n}`, { ...e, [n]: o };
}, {}), ld = "Label", ds = c.forwardRef((e, n) => /* @__PURE__ */ m(
  ad.label,
  {
    ...e,
    ref: n,
    onMouseDown: (t) => {
      var r;
      t.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
ds.displayName = ld;
var fs = ds;
const cd = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  fs,
  {
    ref: t,
    className: Y(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...n
  }
));
cd.displayName = fs.displayName;
var ud = [
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
], dd = ud.reduce((e, n) => {
  const t = /* @__PURE__ */ Ln(`Primitive.${n}`), o = c.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${n}`, { ...e, [n]: o };
}, {}), fd = "Separator", ii = "horizontal", pd = ["horizontal", "vertical"], ps = c.forwardRef((e, n) => {
  const { decorative: t, orientation: o = ii, ...r } = e, i = gd(o) ? o : ii, a = t ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ m(
    dd.div,
    {
      "data-orientation": i,
      ...a,
      ...r,
      ref: n
    }
  );
});
ps.displayName = fd;
function gd(e) {
  return pd.includes(e);
}
var gs = ps;
const ms = c.forwardRef(({ className: e, orientation: n = "horizontal", decorative: t = !0, ...o }, r) => /* @__PURE__ */ m(
  gs,
  {
    ref: r,
    decorative: t,
    orientation: n,
    className: Y(
      "shrink-0 bg-border",
      n === "horizontal" ? "h-px w-full" : "h-full w-px",
      e
    ),
    ...o
  }
));
ms.displayName = gs.displayName;
function H(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), t === !1 || !r.defaultPrevented)
      return n == null ? void 0 : n(r);
  };
}
function md(e, n) {
  const t = c.createContext(n), o = (i) => {
    const { children: s, ...a } = i, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ m(t.Provider, { value: l, children: s });
  };
  o.displayName = e + "Provider";
  function r(i) {
    const s = c.useContext(t);
    if (s) return s;
    if (n !== void 0) return n;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function qe(e, n = []) {
  let t = [];
  function o(i, s) {
    const a = c.createContext(s), l = t.length;
    t = [...t, s];
    const u = (d) => {
      var b;
      const { scope: g, children: p, ...h } = d, v = ((b = g == null ? void 0 : g[e]) == null ? void 0 : b[l]) || a, w = c.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ m(v.Provider, { value: w, children: p });
    };
    u.displayName = i + "Provider";
    function f(d, g) {
      var v;
      const p = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[l]) || a, h = c.useContext(p);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const r = () => {
    const i = t.map((s) => c.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return r.scopeName = e, [o, hd(r, ...n)];
}
function hd(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(i) {
      const s = o.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function vd(e) {
  const n = /* @__PURE__ */ wd(e), t = c.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = c.Children.toArray(i), l = a.find(yd);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ m(n, { ...s, ref: r, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ m(n, { ...s, ref: r, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function wd(e) {
  const n = c.forwardRef((t, o) => {
    const { children: r, ...i } = t;
    if (c.isValidElement(r)) {
      const s = Cd(r), a = xd(i, r.props);
      return r.type !== c.Fragment && (a.ref = o ? be(o, s) : s), c.cloneElement(r, a);
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var bd = Symbol("radix.slottable");
function yd(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bd;
}
function xd(e, n) {
  const t = { ...n };
  for (const o in n) {
    const r = e[o], i = n[o];
    /^on[A-Z]/.test(o) ? r && i ? t[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (t[o] = r) : o === "style" ? t[o] = { ...r, ...i } : o === "className" && (t[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Cd(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Sd = [
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
], re = Sd.reduce((e, n) => {
  const t = /* @__PURE__ */ vd(`Primitive.${n}`), o = c.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${n}`, { ...e, [n]: o };
}, {});
function hs(e, n) {
  e && Wi.flushSync(() => e.dispatchEvent(n));
}
function ue(e) {
  const n = c.useRef(e);
  return c.useEffect(() => {
    n.current = e;
  }), c.useMemo(() => (...t) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...t);
  }, []);
}
function Rd(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = ue(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && t(r);
    };
    return n.addEventListener("keydown", o, { capture: !0 }), () => n.removeEventListener("keydown", o, { capture: !0 });
  }, [t, n]);
}
var Ed = "DismissableLayer", Oo = "dismissableLayer.update", _d = "dismissableLayer.pointerDownOutside", Pd = "dismissableLayer.focusOutside", si, vs = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xt = c.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(vs), [f, d] = c.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = c.useState({}), h = ie(n, (P) => d(P)), v = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(w), y = f ? v.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= b, _ = Nd((P) => {
      const R = P.target, D = [...u.branches].some((V) => V.contains(R));
      !C || D || (r == null || r(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, g), S = Id((P) => {
      const R = P.target;
      [...u.branches].some((V) => V.contains(R)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, g);
    return Rd((P) => {
      y === u.layers.size - 1 && (o == null || o(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, g), c.useEffect(() => {
      if (f)
        return t && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (si = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), ai(), () => {
          t && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = si);
        };
    }, [f, g, t, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), ai());
    }, [f, u]), c.useEffect(() => {
      const P = () => p({});
      return document.addEventListener(Oo, P), () => document.removeEventListener(Oo, P);
    }, []), /* @__PURE__ */ m(
      re.div,
      {
        ...l,
        ref: h,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Xt.displayName = Ed;
var Md = "DismissableLayerBranch", Ad = c.forwardRef((e, n) => {
  const t = c.useContext(vs), o = c.useRef(null), r = ie(n, o);
  return c.useEffect(() => {
    const i = o.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ m(re.div, { ...e, ref: r });
});
Ad.displayName = Md;
function Nd(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = ue(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          ws(
            _d,
            t,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (n.removeEventListener("click", r.current), r.current = l, n.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        n.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), n.removeEventListener("pointerdown", i), n.removeEventListener("click", r.current);
    };
  }, [n, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Id(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = ue(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && ws(Pd, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", r), () => n.removeEventListener("focusin", r);
  }, [n, t]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ai() {
  const e = new CustomEvent(Oo);
  document.dispatchEvent(e);
}
function ws(e, n, t, { discrete: o }) {
  const r = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && r.addEventListener(e, n, { once: !0 }), o ? hs(r, i) : r.dispatchEvent(i);
}
var Ye = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, kd = c[" useId ".trim().toString()] || (() => {
}), Td = 0;
function pe(e) {
  const [n, t] = c.useState(kd());
  return Ye(() => {
    t((o) => o ?? String(Td++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
const Dd = ["top", "right", "bottom", "left"], ot = Math.min, Se = Math.max, An = Math.round, pn = Math.floor, Be = (e) => ({
  x: e,
  y: e
}), Od = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fo(e, n, t) {
  return Se(e, ot(n, t));
}
function Ke(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Xe(e) {
  return e.split("-")[0];
}
function Ft(e) {
  return e.split("-")[1];
}
function tr(e) {
  return e === "x" ? "y" : "x";
}
function nr(e) {
  return e === "y" ? "height" : "width";
}
function He(e) {
  const n = e[0];
  return n === "t" || n === "b" ? "y" : "x";
}
function or(e) {
  return tr(He(e));
}
function Fd(e, n, t) {
  t === void 0 && (t = !1);
  const o = Ft(e), r = or(e), i = nr(r);
  let s = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (s = Nn(s)), [s, Nn(s)];
}
function $d(e) {
  const n = Nn(e);
  return [$o(e), n, $o(n)];
}
function $o(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const li = ["left", "right"], ci = ["right", "left"], Ld = ["top", "bottom"], Vd = ["bottom", "top"];
function zd(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? ci : li : n ? li : ci;
    case "left":
    case "right":
      return n ? Ld : Vd;
    default:
      return [];
  }
}
function Hd(e, n, t, o) {
  const r = Ft(e);
  let i = zd(Xe(e), t === "start", o);
  return r && (i = i.map((s) => s + "-" + r), n && (i = i.concat(i.map($o)))), i;
}
function Nn(e) {
  const n = Xe(e);
  return Od[n] + e.slice(n.length);
}
function Bd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bs(e) {
  return typeof e != "number" ? Bd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function In(e) {
  const {
    x: n,
    y: t,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: t,
    left: n,
    right: n + o,
    bottom: t + r,
    x: n,
    y: t
  };
}
function ui(e, n, t) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = He(n), s = or(n), a = nr(s), l = Xe(n), u = i === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, g = o[a] / 2 - r[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ft(n)) {
    case "start":
      p[s] -= g * (t && u ? -1 : 1);
      break;
    case "end":
      p[s] += g * (t && u ? -1 : 1);
      break;
  }
  return p;
}
async function Gd(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: g = !1,
    padding: p = 0
  } = Ke(n, e), h = bs(p), w = a[g ? d === "floating" ? "reference" : "floating" : d], b = In(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(w))) == null || t ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), y = d === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = In(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: x,
    strategy: l
  }) : y);
  return {
    top: (b.top - _.top + h.top) / C.y,
    bottom: (_.bottom - b.bottom + h.bottom) / C.y,
    left: (b.left - _.left + h.left) / C.x,
    right: (_.right - b.right + h.right) / C.x
  };
}
const Wd = 50, jd = async (e, n, t) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = t, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Gd
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let u = await s.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: f,
    y: d
  } = ui(u, o, l), g = o, p = 0;
  const h = {};
  for (let v = 0; v < i.length; v++) {
    const w = i[v];
    if (!w)
      continue;
    const {
      name: b,
      fn: y
    } = w, {
      x,
      y: C,
      data: _,
      reset: S
    } = await y({
      x: f,
      y: d,
      initialPlacement: o,
      placement: g,
      strategy: r,
      middlewareData: h,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    f = x ?? f, d = C ?? d, h[b] = {
      ...h[b],
      ..._
    }, S && p < Wd && (p++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (u = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : S.rects), {
      x: f,
      y: d
    } = ui(u, g, l)), v = -1);
  }
  return {
    x: f,
    y: d,
    placement: g,
    strategy: r,
    middlewareData: h
  };
}, Ud = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = n, {
      element: u,
      padding: f = 0
    } = Ke(e, n) || {};
    if (u == null)
      return {};
    const d = bs(f), g = {
      x: t,
      y: o
    }, p = or(r), h = nr(p), v = await s.getDimensions(u), w = p === "y", b = w ? "top" : "left", y = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[p] - g[p] - i.floating[h], _ = g[p] - i.reference[p], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let P = S ? S[x] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(S))) && (P = a.floating[x] || i.floating[h]);
    const R = C / 2 - _ / 2, D = P / 2 - v[h] / 2 - 1, V = ot(d[b], D), K = ot(d[y], D), ee = V, Q = P - v[h] - K, Z = P / 2 - v[h] / 2 + R, ne = Fo(ee, Z, Q), k = !l.arrow && Ft(r) != null && Z !== ne && i.reference[h] / 2 - (Z < ee ? V : K) - v[h] / 2 < 0, G = k ? Z < ee ? Z - ee : Z - Q : 0;
    return {
      [p]: g[p] + G,
      data: {
        [p]: ne,
        centerOffset: Z - ne - G,
        ...k && {
          alignmentOffset: G
        }
      },
      reset: k
    };
  }
}), Yd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = n, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: g,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...w
      } = Ke(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = Xe(r), y = He(a), x = Xe(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = g || (x || !v ? [Nn(a)] : $d(a)), S = h !== "none";
      !g && S && _.push(...Hd(a, v, h, C));
      const P = [a, ..._], R = await l.detectOverflow(n, w), D = [];
      let V = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && D.push(R[b]), d) {
        const Z = Fd(r, s, C);
        D.push(R[Z[0]], R[Z[1]]);
      }
      if (V = [...V, {
        placement: r,
        overflows: D
      }], !D.every((Z) => Z <= 0)) {
        var K, ee;
        const Z = (((K = i.flip) == null ? void 0 : K.index) || 0) + 1, ne = P[Z];
        if (ne && (!(d === "alignment" ? y !== He(ne) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        V.every((z) => He(z.placement) === y ? z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Z,
              overflows: V
            },
            reset: {
              placement: ne
            }
          };
        let k = (ee = V.filter((G) => G.overflows[0] <= 0).sort((G, z) => G.overflows[1] - z.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!k)
          switch (p) {
            case "bestFit": {
              var Q;
              const G = (Q = V.filter((z) => {
                if (S) {
                  const T = He(z.placement);
                  return T === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((T) => T > 0).reduce((T, A) => T + A, 0)]).sort((z, T) => z[1] - T[1])[0]) == null ? void 0 : Q[0];
              G && (k = G);
              break;
            }
            case "initialPlacement":
              k = a;
              break;
          }
        if (r !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function di(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function fi(e) {
  return Dd.some((n) => e[n] >= 0);
}
const Kd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t,
        platform: o
      } = n, {
        strategy: r = "referenceHidden",
        ...i
      } = Ke(e, n);
      switch (r) {
        case "referenceHidden": {
          const s = await o.detectOverflow(n, {
            ...i,
            elementContext: "reference"
          }), a = di(s, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: fi(a)
            }
          };
        }
        case "escaped": {
          const s = await o.detectOverflow(n, {
            ...i,
            altBoundary: !0
          }), a = di(s, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: fi(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ys = /* @__PURE__ */ new Set(["left", "top"]);
async function Xd(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Xe(t), a = Ft(t), l = He(t) === "y", u = ys.has(s) ? -1 : 1, f = i && l ? -1 : 1, d = Ke(n, e);
  let {
    mainAxis: g,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof h == "number" && (p = a === "end" ? h * -1 : h), l ? {
    x: p * f,
    y: g * u
  } : {
    x: g * u,
    y: p * f
  };
}
const qd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: a
      } = n, l = await Xd(n, e);
      return s === ((t = a.offset) == null ? void 0 : t.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Zd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: o,
        placement: r,
        platform: i
      } = n, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (b) => {
            let {
              x: y,
              y: x
            } = b;
            return {
              x: y,
              y: x
            };
          }
        },
        ...u
      } = Ke(e, n), f = {
        x: t,
        y: o
      }, d = await i.detectOverflow(n, u), g = He(Xe(r)), p = tr(g);
      let h = f[p], v = f[g];
      if (s) {
        const b = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", x = h + d[b], C = h - d[y];
        h = Fo(x, h, C);
      }
      if (a) {
        const b = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", x = v + d[b], C = v - d[y];
        v = Fo(x, v, C);
      }
      const w = l.fn({
        ...n,
        [p]: h,
        [g]: v
      });
      return {
        ...w,
        data: {
          x: w.x - t,
          y: w.y - o,
          enabled: {
            [p]: s,
            [g]: a
          }
        }
      };
    }
  };
}, Qd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = n, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Ke(e, n), f = {
        x: t,
        y: o
      }, d = He(r), g = tr(d);
      let p = f[g], h = f[d];
      const v = Ke(a, n), w = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const x = g === "y" ? "height" : "width", C = i.reference[g] - i.floating[x] + w.mainAxis, _ = i.reference[g] + i.reference[x] - w.mainAxis;
        p < C ? p = C : p > _ && (p = _);
      }
      if (u) {
        var b, y;
        const x = g === "y" ? "width" : "height", C = ys.has(Xe(r)), _ = i.reference[d] - i.floating[x] + (C && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (C ? 0 : w.crossAxis), S = i.reference[d] + i.reference[x] + (C ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (C ? w.crossAxis : 0);
        h < _ ? h = _ : h > S && (h = S);
      }
      return {
        [g]: p,
        [d]: h
      };
    }
  };
}, Jd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: a
      } = n, {
        apply: l = () => {
        },
        ...u
      } = Ke(e, n), f = await s.detectOverflow(n, u), d = Xe(r), g = Ft(r), p = He(r) === "y", {
        width: h,
        height: v
      } = i.floating;
      let w, b;
      d === "top" || d === "bottom" ? (w = d, b = g === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, w = g === "end" ? "top" : "bottom");
      const y = v - f.top - f.bottom, x = h - f.left - f.right, C = ot(v - f[w], y), _ = ot(h - f[b], x), S = !n.middlewareData.shift;
      let P = C, R = _;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (R = x), (o = n.middlewareData.shift) != null && o.enabled.y && (P = y), S && !g) {
        const V = Se(f.left, 0), K = Se(f.right, 0), ee = Se(f.top, 0), Q = Se(f.bottom, 0);
        p ? R = h - 2 * (V !== 0 || K !== 0 ? V + K : Se(f.left, f.right)) : P = v - 2 * (ee !== 0 || Q !== 0 ? ee + Q : Se(f.top, f.bottom));
      }
      await l({
        ...n,
        availableWidth: R,
        availableHeight: P
      });
      const D = await s.getDimensions(a.floating);
      return h !== D.width || v !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zn() {
  return typeof window < "u";
}
function $t(e) {
  return xs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Re(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ge(e) {
  var n;
  return (n = (xs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function xs(e) {
  return zn() ? e instanceof Node || e instanceof Re(e).Node : !1;
}
function Fe(e) {
  return zn() ? e instanceof Element || e instanceof Re(e).Element : !1;
}
function Ze(e) {
  return zn() ? e instanceof HTMLElement || e instanceof Re(e).HTMLElement : !1;
}
function pi(e) {
  return !zn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Re(e).ShadowRoot;
}
function qt(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && r !== "inline" && r !== "contents";
}
function ef(e) {
  return /^(table|td|th)$/.test($t(e));
}
function Hn(e) {
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
const tf = /transform|translate|scale|rotate|perspective|filter/, nf = /paint|layout|strict|content/, gt = (e) => !!e && e !== "none";
let uo;
function rr(e) {
  const n = Fe(e) ? $e(e) : e;
  return gt(n.transform) || gt(n.translate) || gt(n.scale) || gt(n.rotate) || gt(n.perspective) || !ir() && (gt(n.backdropFilter) || gt(n.filter)) || tf.test(n.willChange || "") || nf.test(n.contain || "");
}
function of(e) {
  let n = rt(e);
  for (; Ze(n) && !kt(n); ) {
    if (rr(n))
      return n;
    if (Hn(n))
      return null;
    n = rt(n);
  }
  return null;
}
function ir() {
  return uo == null && (uo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), uo;
}
function kt(e) {
  return /^(html|body|#document)$/.test($t(e));
}
function $e(e) {
  return Re(e).getComputedStyle(e);
}
function Bn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rt(e) {
  if ($t(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pi(e) && e.host || // Fallback.
    Ge(e)
  );
  return pi(n) ? n.host : n;
}
function Cs(e) {
  const n = rt(e);
  return kt(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ze(n) && qt(n) ? n : Cs(n);
}
function jt(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = Cs(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Re(r);
  if (i) {
    const a = Lo(s);
    return n.concat(s, s.visualViewport || [], qt(r) ? r : [], a && t ? jt(a) : []);
  } else
    return n.concat(r, jt(r, [], t));
}
function Lo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ss(e) {
  const n = $e(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = Ze(e), i = r ? e.offsetWidth : t, s = r ? e.offsetHeight : o, a = An(t) !== i || An(o) !== s;
  return a && (t = i, o = s), {
    width: t,
    height: o,
    $: a
  };
}
function sr(e) {
  return Fe(e) ? e : e.contextElement;
}
function Mt(e) {
  const n = sr(e);
  if (!Ze(n))
    return Be(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Ss(n);
  let s = (i ? An(t.width) : t.width) / o, a = (i ? An(t.height) : t.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const rf = /* @__PURE__ */ Be(0);
function Rs(e) {
  const n = Re(e);
  return !ir() || !n.visualViewport ? rf : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function sf(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Re(e) ? !1 : n;
}
function mt(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), i = sr(e);
  let s = Be(1);
  n && (o ? Fe(o) && (s = Mt(o)) : s = Mt(e));
  const a = sf(i, t, o) ? Rs(i) : Be(0);
  let l = (r.left + a.x) / s.x, u = (r.top + a.y) / s.y, f = r.width / s.x, d = r.height / s.y;
  if (i) {
    const g = Re(i), p = o && Fe(o) ? Re(o) : o;
    let h = g, v = Lo(h);
    for (; v && o && p !== h; ) {
      const w = Mt(v), b = v.getBoundingClientRect(), y = $e(v), x = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * w.x, C = b.top + (v.clientTop + parseFloat(y.paddingTop)) * w.y;
      l *= w.x, u *= w.y, f *= w.x, d *= w.y, l += x, u += C, h = Re(v), v = Lo(h);
    }
  }
  return In({
    width: f,
    height: d,
    x: l,
    y: u
  });
}
function Gn(e, n) {
  const t = Bn(e).scrollLeft;
  return n ? n.left + t : mt(Ge(e)).left + t;
}
function Es(e, n) {
  const t = e.getBoundingClientRect(), o = t.left + n.scrollLeft - Gn(e, t), r = t.top + n.scrollTop;
  return {
    x: o,
    y: r
  };
}
function af(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = Ge(o), a = n ? Hn(n.floating) : !1;
  if (o === s || a && i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Be(1);
  const f = Be(0), d = Ze(o);
  if ((d || !d && !i) && (($t(o) !== "body" || qt(s)) && (l = Bn(o)), d)) {
    const p = mt(o);
    u = Mt(o), f.x = p.x + o.clientLeft, f.y = p.y + o.clientTop;
  }
  const g = s && !d && !i ? Es(s, l) : Be(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + f.x + g.x,
    y: t.y * u.y - l.scrollTop * u.y + f.y + g.y
  };
}
function lf(e) {
  return Array.from(e.getClientRects());
}
function cf(e) {
  const n = Ge(e), t = Bn(e), o = e.ownerDocument.body, r = Se(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), i = Se(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -t.scrollLeft + Gn(e);
  const a = -t.scrollTop;
  return $e(o).direction === "rtl" && (s += Se(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
const gi = 25;
function uf(e, n) {
  const t = Re(e), o = Ge(e), r = t.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const f = ir();
    (!f || f && n === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  const u = Gn(o);
  if (u <= 0) {
    const f = o.ownerDocument, d = f.body, g = getComputedStyle(d), p = f.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, h = Math.abs(o.clientWidth - d.clientWidth - p);
    h <= gi && (i -= h);
  } else u <= gi && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function df(e, n) {
  const t = mt(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, i = Ze(e) ? Mt(e) : Be(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = r * i.x, u = o * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function mi(e, n, t) {
  let o;
  if (n === "viewport")
    o = uf(e, t);
  else if (n === "document")
    o = cf(Ge(e));
  else if (Fe(n))
    o = df(n, t);
  else {
    const r = Rs(e);
    o = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return In(o);
}
function _s(e, n) {
  const t = rt(e);
  return t === n || !Fe(t) || kt(t) ? !1 : $e(t).position === "fixed" || _s(t, n);
}
function ff(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = jt(e, [], !1).filter((a) => Fe(a) && $t(a) !== "body"), r = null;
  const i = $e(e).position === "fixed";
  let s = i ? rt(e) : e;
  for (; Fe(s) && !kt(s); ) {
    const a = $e(s), l = rr(s);
    !l && a.position === "fixed" && (r = null), (i ? !l && !r : !l && a.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || qt(s) && !l && _s(e, s)) ? o = o.filter((f) => f !== s) : r = a, s = rt(s);
  }
  return n.set(e, o), o;
}
function pf(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...t === "clippingAncestors" ? Hn(n) ? [] : ff(n, this._c) : [].concat(t), o], a = mi(n, s[0], r);
  let l = a.top, u = a.right, f = a.bottom, d = a.left;
  for (let g = 1; g < s.length; g++) {
    const p = mi(n, s[g], r);
    l = Se(p.top, l), u = ot(p.right, u), f = ot(p.bottom, f), d = Se(p.left, d);
  }
  return {
    width: u - d,
    height: f - l,
    x: d,
    y: l
  };
}
function gf(e) {
  const {
    width: n,
    height: t
  } = Ss(e);
  return {
    width: n,
    height: t
  };
}
function mf(e, n, t) {
  const o = Ze(n), r = Ge(n), i = t === "fixed", s = mt(e, !0, i, n);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Be(0);
  function u() {
    l.x = Gn(r);
  }
  if (o || !o && !i)
    if (($t(n) !== "body" || qt(r)) && (a = Bn(n)), o) {
      const p = mt(n, !0, i, n);
      l.x = p.x + n.clientLeft, l.y = p.y + n.clientTop;
    } else r && u();
  i && !o && r && u();
  const f = r && !o && !i ? Es(r, a) : Be(0), d = s.left + a.scrollLeft - l.x - f.x, g = s.top + a.scrollTop - l.y - f.y;
  return {
    x: d,
    y: g,
    width: s.width,
    height: s.height
  };
}
function fo(e) {
  return $e(e).position === "static";
}
function hi(e, n) {
  if (!Ze(e) || $e(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Ge(e) === t && (t = t.ownerDocument.body), t;
}
function Ps(e, n) {
  const t = Re(e);
  if (Hn(e))
    return t;
  if (!Ze(e)) {
    let r = rt(e);
    for (; r && !kt(r); ) {
      if (Fe(r) && !fo(r))
        return r;
      r = rt(r);
    }
    return t;
  }
  let o = hi(e, n);
  for (; o && ef(o) && fo(o); )
    o = hi(o, n);
  return o && kt(o) && fo(o) && !rr(o) ? t : o || of(e) || t;
}
const hf = async function(e) {
  const n = this.getOffsetParent || Ps, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: mf(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function vf(e) {
  return $e(e).direction === "rtl";
}
const wf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: af,
  getDocumentElement: Ge,
  getClippingRect: pf,
  getOffsetParent: Ps,
  getElementRects: hf,
  getClientRects: lf,
  getDimensions: gf,
  getScale: Mt,
  isElement: Fe,
  isRTL: vf
};
function Ms(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function bf(e, n) {
  let t = null, o;
  const r = Ge(e);
  function i() {
    var a;
    clearTimeout(o), (a = t) == null || a.disconnect(), t = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: g,
      height: p
    } = u;
    if (a || n(), !g || !p)
      return;
    const h = pn(d), v = pn(r.clientWidth - (f + g)), w = pn(r.clientHeight - (d + p)), b = pn(f), x = {
      rootMargin: -h + "px " + -v + "px " + -w + "px " + -b + "px",
      threshold: Se(0, ot(1, l)) || 1
    };
    let C = !0;
    function _(S) {
      const P = S[0].intersectionRatio;
      if (P !== l) {
        if (!C)
          return s();
        P ? s(!1, P) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Ms(u, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      t = new IntersectionObserver(_, {
        ...x,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(_, x);
    }
    t.observe(e);
  }
  return s(!0), i;
}
function yf(e, n, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = sr(e), f = r || i ? [...u ? jt(u) : [], ...n ? jt(n) : []] : [];
  f.forEach((b) => {
    r && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const d = u && a ? bf(u, t) : null;
  let g = -1, p = null;
  s && (p = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === u && p && n && (p.unobserve(n), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(n);
    })), t();
  }), u && !l && p.observe(u), n && p.observe(n));
  let h, v = l ? mt(e) : null;
  l && w();
  function w() {
    const b = mt(e);
    v && !Ms(v, b) && t(), v = b, h = requestAnimationFrame(w);
  }
  return t(), () => {
    var b;
    f.forEach((y) => {
      r && y.removeEventListener("scroll", t), i && y.removeEventListener("resize", t);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const xf = qd, Cf = Zd, Sf = Yd, Rf = Jd, Ef = Kd, vi = Ud, _f = Qd, Pf = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: wf,
    ...t
  }, i = {
    ...r.platform,
    _c: o
  };
  return jd(e, n, {
    ...r,
    platform: i
  });
};
var Mf = typeof document < "u", Af = function() {
}, Sn = Mf ? iu : Af;
function kn(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let t, o, r;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t !== n.length) return !1;
      for (o = t; o-- !== 0; )
        if (!kn(e[o], n[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), t = r.length, t !== Object.keys(n).length)
      return !1;
    for (o = t; o-- !== 0; )
      if (!{}.hasOwnProperty.call(n, r[o]))
        return !1;
    for (o = t; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !kn(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function As(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wi(e, n) {
  const t = As(e);
  return Math.round(n * t) / t;
}
function po(e) {
  const n = c.useRef(e);
  return Sn(() => {
    n.current = e;
  }), n;
}
function Nf(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, d] = c.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [g, p] = c.useState(o);
  kn(g, o) || p(o);
  const [h, v] = c.useState(null), [w, b] = c.useState(null), y = c.useCallback((z) => {
    z !== S.current && (S.current = z, v(z));
  }, []), x = c.useCallback((z) => {
    z !== P.current && (P.current = z, b(z));
  }, []), C = i || h, _ = s || w, S = c.useRef(null), P = c.useRef(null), R = c.useRef(f), D = l != null, V = po(l), K = po(r), ee = po(u), Q = c.useCallback(() => {
    if (!S.current || !P.current)
      return;
    const z = {
      placement: n,
      strategy: t,
      middleware: g
    };
    K.current && (z.platform = K.current), Pf(S.current, P.current, z).then((T) => {
      const A = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ee.current !== !1
      };
      Z.current && !kn(R.current, A) && (R.current = A, Wi.flushSync(() => {
        d(A);
      }));
    });
  }, [g, n, t, K, ee]);
  Sn(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, d((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [u]);
  const Z = c.useRef(!1);
  Sn(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), Sn(() => {
    if (C && (S.current = C), _ && (P.current = _), C && _) {
      if (V.current)
        return V.current(C, _, Q);
      Q();
    }
  }, [C, _, Q, V, D]);
  const ne = c.useMemo(() => ({
    reference: S,
    floating: P,
    setReference: y,
    setFloating: x
  }), [y, x]), k = c.useMemo(() => ({
    reference: C,
    floating: _
  }), [C, _]), G = c.useMemo(() => {
    const z = {
      position: t,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return z;
    const T = wi(k.floating, f.x), A = wi(k.floating, f.y);
    return a ? {
      ...z,
      transform: "translate(" + T + "px, " + A + "px)",
      ...As(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: T,
      top: A
    };
  }, [t, a, k.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: Q,
    refs: ne,
    elements: k,
    floatingStyles: G
  }), [f, Q, ne, k, G]);
}
const If = (e) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(t) : e;
      return o && n(o) ? o.current != null ? vi({
        element: o.current,
        padding: r
      }).fn(t) : {} : o ? vi({
        element: o,
        padding: r
      }).fn(t) : {};
    }
  };
}, kf = (e, n) => {
  const t = xf(e);
  return {
    name: t.name,
    fn: t.fn,
    options: [e, n]
  };
}, Tf = (e, n) => {
  const t = Cf(e);
  return {
    name: t.name,
    fn: t.fn,
    options: [e, n]
  };
}, Df = (e, n) => ({
  fn: _f(e).fn,
  options: [e, n]
}), Of = (e, n) => {
  const t = Sf(e);
  return {
    name: t.name,
    fn: t.fn,
    options: [e, n]
  };
}, Ff = (e, n) => {
  const t = Rf(e);
  return {
    name: t.name,
    fn: t.fn,
    options: [e, n]
  };
}, $f = (e, n) => {
  const t = Ef(e);
  return {
    name: t.name,
    fn: t.fn,
    options: [e, n]
  };
}, Lf = (e, n) => {
  const t = If(e);
  return {
    name: t.name,
    fn: t.fn,
    options: [e, n]
  };
};
var Vf = "Arrow", Ns = c.forwardRef((e, n) => {
  const { children: t, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ m(
    re.svg,
    {
      ...i,
      ref: n,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ns.displayName = Vf;
var zf = Ns;
function Hf(e) {
  const [n, t] = c.useState(void 0);
  return Ye(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, a = u.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        t({ width: s, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
var ar = "Popper", [Is, Lt] = qe(ar), [Bf, ks] = Is(ar), Ts = (e) => {
  const { __scopePopper: n, children: t } = e, [o, r] = c.useState(null);
  return /* @__PURE__ */ m(Bf, { scope: n, anchor: o, onAnchorChange: r, children: t });
};
Ts.displayName = ar;
var Ds = "PopperAnchor", Os = c.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: o, ...r } = e, i = ks(Ds, t), s = c.useRef(null), a = ie(n, s), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = (o == null ? void 0 : o.current) || s.current, u !== l.current && i.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ m(re.div, { ...r, ref: a });
  }
);
Os.displayName = Ds;
var lr = "PopperContent", [Gf, Wf] = Is(lr), Fs = c.forwardRef(
  (e, n) => {
    var q, X, B, ae, _e, he;
    const {
      __scopePopper: t,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: h,
      ...v
    } = e, w = ks(lr, t), [b, y] = c.useState(null), x = ie(n, (Ie) => y(Ie)), [C, _] = c.useState(null), S = Hf(C), P = (S == null ? void 0 : S.width) ?? 0, R = (S == null ? void 0 : S.height) ?? 0, D = o + (i !== "center" ? "-" + i : ""), V = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, K = Array.isArray(u) ? u : [u], ee = K.length > 0, Q = {
      padding: V,
      boundary: K.filter(Uf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ee
    }, { refs: Z, floatingStyles: ne, placement: k, isPositioned: G, middlewareData: z } = Nf({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...Ie) => yf(...Ie, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        kf({ mainAxis: r + R, alignmentAxis: s }),
        l && Tf({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Df() : void 0,
          ...Q
        }),
        l && Of({ ...Q }),
        Ff({
          ...Q,
          apply: ({ elements: Ie, rects: ke, availableWidth: so, availableHeight: sn }) => {
            const { width: dt, height: an } = ke.reference, ve = Ie.floating.style;
            ve.setProperty("--radix-popper-available-width", `${so}px`), ve.setProperty("--radix-popper-available-height", `${sn}px`), ve.setProperty("--radix-popper-anchor-width", `${dt}px`), ve.setProperty("--radix-popper-anchor-height", `${an}px`);
          }
        }),
        C && Lf({ element: C, padding: a }),
        Yf({ arrowWidth: P, arrowHeight: R }),
        g && $f({ strategy: "referenceHidden", ...Q })
      ]
    }), [T, A] = Vs(k), oe = ue(h);
    Ye(() => {
      G && (oe == null || oe());
    }, [G, oe]);
    const E = (q = z.arrow) == null ? void 0 : q.x, I = (X = z.arrow) == null ? void 0 : X.y, O = ((B = z.arrow) == null ? void 0 : B.centerOffset) !== 0, [M, F] = c.useState();
    return Ye(() => {
      b && F(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ m(
      "div",
      {
        ref: Z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ne,
          transform: G ? ne.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M,
          "--radix-popper-transform-origin": [
            (ae = z.transformOrigin) == null ? void 0 : ae.x,
            (_e = z.transformOrigin) == null ? void 0 : _e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((he = z.hide) == null ? void 0 : he.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          Gf,
          {
            scope: t,
            placedSide: T,
            onArrowChange: _,
            arrowX: E,
            arrowY: I,
            shouldHideArrow: O,
            children: /* @__PURE__ */ m(
              re.div,
              {
                "data-side": T,
                "data-align": A,
                ...v,
                ref: x,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Fs.displayName = lr;
var $s = "PopperArrow", jf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ls = c.forwardRef(function(n, t) {
  const { __scopePopper: o, ...r } = n, i = Wf($s, o), s = jf[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ m(
          zf,
          {
            ...r,
            ref: t,
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
Ls.displayName = $s;
function Uf(e) {
  return e !== null;
}
var Yf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var w, b, y;
    const { placement: t, rects: o, middlewareData: r } = n, s = ((w = r.arrow) == null ? void 0 : w.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, f] = Vs(t), d = { start: "0%", center: "50%", end: "100%" }[f], g = (((b = r.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, p = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let h = "", v = "";
    return u === "bottom" ? (h = s ? d : `${g}px`, v = `${-l}px`) : u === "top" ? (h = s ? d : `${g}px`, v = `${o.floating.height + l}px`) : u === "right" ? (h = `${-l}px`, v = s ? d : `${p}px`) : u === "left" && (h = `${o.floating.width + l}px`, v = s ? d : `${p}px`), { data: { x: h, y: v } };
  }
});
function Vs(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var Wn = Ts, jn = Os, cr = Fs, ur = Ls, Kf = "Portal", Zt = c.forwardRef((e, n) => {
  var a;
  const { container: t, ...o } = e, [r, i] = c.useState(!1);
  Ye(() => i(!0), []);
  const s = t || r && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? ji.createPortal(/* @__PURE__ */ m(re.div, { ...o, ref: n }), s) : null;
});
Zt.displayName = Kf;
function Xf(e, n) {
  return c.useReducer((t, o) => n[t][o] ?? t, e);
}
var ge = (e) => {
  const { present: n, children: t } = e, o = qf(n), r = typeof t == "function" ? t({ present: o.isPresent }) : c.Children.only(t), i = ie(o.ref, Zf(r));
  return typeof t == "function" || o.isPresent ? c.cloneElement(r, { ref: i }) : null;
};
ge.displayName = "Presence";
function qf(e) {
  const [n, t] = c.useState(), o = c.useRef(null), r = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = Xf(s, {
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
  return c.useEffect(() => {
    const u = gn(o.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), Ye(() => {
    const u = o.current, f = r.current;
    if (f !== e) {
      const g = i.current, p = gn(u);
      e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && g !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), Ye(() => {
    if (n) {
      let u;
      const f = n.ownerDocument.defaultView ?? window, d = (p) => {
        const v = gn(o.current).includes(CSS.escape(p.animationName));
        if (p.target === n && v && (l("ANIMATION_END"), !r.current)) {
          const w = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = w);
          });
        }
      }, g = (p) => {
        p.target === n && (i.current = gn(o.current));
      };
      return n.addEventListener("animationstart", g), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
        f.clearTimeout(u), n.removeEventListener("animationstart", g), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      o.current = u ? getComputedStyle(u) : null, t(u);
    }, [])
  };
}
function gn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Zf(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Qf = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Jf(e) {
  const n = ({ children: t }) => /* @__PURE__ */ m(Nt, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = Qf, n;
}
var ep = c[" useInsertionEffect ".trim().toString()] || Ye;
function Vt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: o
}) {
  const [r, i, s] = tp({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, l = a ? e : r;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const d = f.current;
      d !== a && console.warn(
        `${o} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = a;
    }, [a, o]);
  }
  const u = c.useCallback(
    (f) => {
      var d;
      if (a) {
        const g = np(f) ? f(e) : f;
        g !== e && ((d = s.current) == null || d.call(s, g));
      } else
        i(f);
    },
    [a, e, i, s]
  );
  return [l, u];
}
function tp({
  defaultProp: e,
  onChange: n
}) {
  const [t, o] = c.useState(e), r = c.useRef(t), i = c.useRef(n);
  return ep(() => {
    i.current = n;
  }, [n]), c.useEffect(() => {
    var s;
    r.current !== t && ((s = i.current) == null || s.call(i, t), r.current = t);
  }, [t, r]), [t, o, i];
}
function np(e) {
  return typeof e == "function";
}
var op = Object.freeze({
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
}), rp = "VisuallyHidden", zs = c.forwardRef(
  (e, n) => /* @__PURE__ */ m(
    re.span,
    {
      ...e,
      ref: n,
      style: { ...op, ...e.style }
    }
  )
);
zs.displayName = rp;
var ip = zs, [Un] = qe("Tooltip", [
  Lt
]), Yn = Lt(), Hs = "TooltipProvider", sp = 700, Vo = "tooltip.open", [ap, dr] = Un(Hs), Bs = (e) => {
  const {
    __scopeTooltip: n,
    delayDuration: t = sp,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: i
  } = e, s = c.useRef(!0), a = c.useRef(!1), l = c.useRef(0);
  return c.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ m(
    ap,
    {
      scope: n,
      isOpenDelayedRef: s,
      delayDuration: t,
      onOpen: c.useCallback(() => {
        window.clearTimeout(l.current), s.current = !1;
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: c.useCallback((u) => {
        a.current = u;
      }, []),
      disableHoverableContent: r,
      children: i
    }
  );
};
Bs.displayName = Hs;
var Ut = "Tooltip", [lp, Qt] = Un(Ut), Gs = (e) => {
  const {
    __scopeTooltip: n,
    children: t,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = dr(Ut, e.__scopeTooltip), u = Yn(n), [f, d] = c.useState(null), g = pe(), p = c.useRef(0), h = s ?? l.disableHoverableContent, v = a ?? l.delayDuration, w = c.useRef(!1), [b, y] = Vt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: (P) => {
      P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Vo))) : l.onClose(), i == null || i(P);
    },
    caller: Ut
  }), x = c.useMemo(() => b ? w.current ? "delayed-open" : "instant-open" : "closed", [b]), C = c.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, w.current = !1, y(!0);
  }, [y]), _ = c.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, y(!1);
  }, [y]), S = c.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      w.current = !0, y(!0), p.current = 0;
    }, v);
  }, [v, y]);
  return c.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ m(Wn, { ...u, children: /* @__PURE__ */ m(
    lp,
    {
      scope: n,
      contentId: g,
      open: b,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayedRef.current ? S() : C();
      }, [l.isOpenDelayedRef, S, C]),
      onTriggerLeave: c.useCallback(() => {
        h ? _() : (window.clearTimeout(p.current), p.current = 0);
      }, [_, h]),
      onOpen: C,
      onClose: _,
      disableHoverableContent: h,
      children: t
    }
  ) });
};
Gs.displayName = Ut;
var zo = "TooltipTrigger", Ws = c.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...o } = e, r = Qt(zo, t), i = dr(zo, t), s = Yn(t), a = c.useRef(null), l = ie(n, a, r.onTriggerChange), u = c.useRef(!1), f = c.useRef(!1), d = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ m(jn, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      re.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: l,
        onPointerMove: H(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (r.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: H(e.onPointerLeave, () => {
          r.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: H(e.onPointerDown, () => {
          r.open && r.onClose(), u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: H(e.onFocus, () => {
          u.current || r.onOpen();
        }),
        onBlur: H(e.onBlur, r.onClose),
        onClick: H(e.onClick, r.onClose)
      }
    ) });
  }
);
Ws.displayName = zo;
var fr = "TooltipPortal", [cp, up] = Un(fr, {
  forceMount: void 0
}), js = (e) => {
  const { __scopeTooltip: n, forceMount: t, children: o, container: r } = e, i = Qt(fr, n);
  return /* @__PURE__ */ m(cp, { scope: n, forceMount: t, children: /* @__PURE__ */ m(ge, { present: t || i.open, children: /* @__PURE__ */ m(Zt, { asChild: !0, container: r, children: o }) }) });
};
js.displayName = fr;
var Tt = "TooltipContent", Us = c.forwardRef(
  (e, n) => {
    const t = up(Tt, e.__scopeTooltip), { forceMount: o = t.forceMount, side: r = "top", ...i } = e, s = Qt(Tt, e.__scopeTooltip);
    return /* @__PURE__ */ m(ge, { present: o || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ m(Ys, { side: r, ...i, ref: n }) : /* @__PURE__ */ m(dp, { side: r, ...i, ref: n }) });
  }
), dp = c.forwardRef((e, n) => {
  const t = Qt(Tt, e.__scopeTooltip), o = dr(Tt, e.__scopeTooltip), r = c.useRef(null), i = ie(n, r), [s, a] = c.useState(null), { trigger: l, onClose: u } = t, f = r.current, { onPointerInTransitChange: d } = o, g = c.useCallback(() => {
    a(null), d(!1);
  }, [d]), p = c.useCallback(
    (h, v) => {
      const w = h.currentTarget, b = { x: h.clientX, y: h.clientY }, y = hp(b, w.getBoundingClientRect()), x = vp(b, y), C = wp(v.getBoundingClientRect()), _ = yp([...x, ...C]);
      a(_), d(!0);
    },
    [d]
  );
  return c.useEffect(() => () => g(), [g]), c.useEffect(() => {
    if (l && f) {
      const h = (w) => p(w, f), v = (w) => p(w, l);
      return l.addEventListener("pointerleave", h), f.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", h), f.removeEventListener("pointerleave", v);
      };
    }
  }, [l, f, p, g]), c.useEffect(() => {
    if (s) {
      const h = (v) => {
        const w = v.target, b = { x: v.clientX, y: v.clientY }, y = (l == null ? void 0 : l.contains(w)) || (f == null ? void 0 : f.contains(w)), x = !bp(b, s);
        y ? g() : x && (g(), u());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [l, f, s, u, g]), /* @__PURE__ */ m(Ys, { ...e, ref: i });
}), [fp, pp] = Un(Ut, { isInside: !1 }), gp = /* @__PURE__ */ Jf("TooltipContent"), Ys = c.forwardRef(
  (e, n) => {
    const {
      __scopeTooltip: t,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = Qt(Tt, t), u = Yn(t), { onClose: f } = l;
    return c.useEffect(() => (document.addEventListener(Vo, f), () => document.removeEventListener(Vo, f)), [f]), c.useEffect(() => {
      if (l.trigger) {
        const d = (g) => {
          const p = g.target;
          p != null && p.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ m(
      Xt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ W(
          cr,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: n,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ m(gp, { children: o }),
              /* @__PURE__ */ m(fp, { scope: t, isInside: !0, children: /* @__PURE__ */ m(ip, { id: l.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
Us.displayName = Tt;
var Ks = "TooltipArrow", mp = c.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...o } = e, r = Yn(t);
    return pp(
      Ks,
      t
    ).isInside ? null : /* @__PURE__ */ m(ur, { ...r, ...o, ref: n });
  }
);
mp.displayName = Ks;
function hp(e, n) {
  const t = Math.abs(n.top - e.y), o = Math.abs(n.bottom - e.y), r = Math.abs(n.right - e.x), i = Math.abs(n.left - e.x);
  switch (Math.min(t, o, r, i)) {
    case i:
      return "left";
    case r:
      return "right";
    case t:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vp(e, n, t = 5) {
  const o = [];
  switch (n) {
    case "top":
      o.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      o.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      o.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return o;
}
function wp(e) {
  const { top: n, right: t, bottom: o, left: r } = e;
  return [
    { x: r, y: n },
    { x: t, y: n },
    { x: t, y: o },
    { x: r, y: o }
  ];
}
function bp(e, n) {
  const { x: t, y: o } = e;
  let r = !1;
  for (let i = 0, s = n.length - 1; i < n.length; s = i++) {
    const a = n[i], l = n[s], u = a.x, f = a.y, d = l.x, g = l.y;
    f > o != g > o && t < (d - u) * (o - f) / (g - f) + u && (r = !r);
  }
  return r;
}
function yp(e) {
  const n = e.slice();
  return n.sort((t, o) => t.x < o.x ? -1 : t.x > o.x ? 1 : t.y < o.y ? -1 : t.y > o.y ? 1 : 0), xp(n);
}
function xp(e) {
  if (e.length <= 1) return e.slice();
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  n.pop();
  const t = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
var Cp = Bs, Sp = Gs, Rp = Ws, Ep = js, Xs = Us;
const pr = Cp, gr = Sp, mr = Rp, Kn = c.forwardRef(({ className: e, sideOffset: n = 4, ...t }, o) => /* @__PURE__ */ m(Ep, { children: /* @__PURE__ */ m(
  Xs,
  {
    ref: o,
    sideOffset: n,
    className: Y(
      "z-50 w-fit rounded-md bg-primary px-3 py-1.5 text-xs text-balance text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Kn.displayName = Xs.displayName;
var go = "focusScope.autoFocusOnMount", mo = "focusScope.autoFocusOnUnmount", bi = { bubbles: !1, cancelable: !0 }, _p = "FocusScope", Xn = c.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = c.useState(null), u = ue(r), f = ue(i), d = c.useRef(null), g = ie(n, (v) => l(v)), p = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (o) {
      let v = function(x) {
        if (p.paused || !a) return;
        const C = x.target;
        a.contains(C) ? d.current = C : tt(d.current, { select: !0 });
      }, w = function(x) {
        if (p.paused || !a) return;
        const C = x.relatedTarget;
        C !== null && (a.contains(C) || tt(d.current, { select: !0 }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const _ of x)
            _.removedNodes.length > 0 && tt(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", w);
      const y = new MutationObserver(b);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", w), y.disconnect();
      };
    }
  }, [o, a, p.paused]), c.useEffect(() => {
    if (a) {
      xi.add(p);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const b = new CustomEvent(go, bi);
        a.addEventListener(go, u), a.dispatchEvent(b), b.defaultPrevented || (Pp(kp(qs(a)), { select: !0 }), document.activeElement === v && tt(a));
      }
      return () => {
        a.removeEventListener(go, u), setTimeout(() => {
          const b = new CustomEvent(mo, bi);
          a.addEventListener(mo, f), a.dispatchEvent(b), b.defaultPrevented || tt(v ?? document.body, { select: !0 }), a.removeEventListener(mo, f), xi.remove(p);
        }, 0);
      };
    }
  }, [a, u, f, p]);
  const h = c.useCallback(
    (v) => {
      if (!t && !o || p.paused) return;
      const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
      if (w && b) {
        const y = v.currentTarget, [x, C] = Mp(y);
        x && C ? !v.shiftKey && b === C ? (v.preventDefault(), t && tt(x, { select: !0 })) : v.shiftKey && b === x && (v.preventDefault(), t && tt(C, { select: !0 })) : b === y && v.preventDefault();
      }
    },
    [t, o, p.paused]
  );
  return /* @__PURE__ */ m(re.div, { tabIndex: -1, ...s, ref: g, onKeyDown: h });
});
Xn.displayName = _p;
function Pp(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const o of e)
    if (tt(o, { select: n }), document.activeElement !== t) return;
}
function Mp(e) {
  const n = qs(e), t = yi(n, e), o = yi(n.reverse(), e);
  return [t, o];
}
function qs(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function yi(e, n) {
  for (const t of e)
    if (!Ap(t, { upTo: n })) return t;
}
function Ap(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Np(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && Np(e) && n && e.select();
  }
}
var xi = Ip();
function Ip() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && (t == null || t.pause()), e = Ci(e, n), e.unshift(n);
    },
    remove(n) {
      var t;
      e = Ci(e, n), (t = e[0]) == null || t.resume();
    }
  };
}
function Ci(e, n) {
  const t = [...e], o = t.indexOf(n);
  return o !== -1 && t.splice(o, 1), t;
}
function kp(e) {
  return e.filter((n) => n.tagName !== "A");
}
var ho = 0;
function hr() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Si()), document.body.insertAdjacentElement("beforeend", e[1] ?? Si()), ho++, () => {
      ho === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ho--;
    };
  }, []);
}
function Si() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ze = function() {
  return ze = Object.assign || function(n) {
    for (var t, o = 1, r = arguments.length; o < r; o++) {
      t = arguments[o];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, ze.apply(this, arguments);
};
function Zs(e, n) {
  var t = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]]);
  return t;
}
function Tp(e, n, t) {
  if (t || arguments.length === 2) for (var o = 0, r = n.length, i; o < r; o++)
    (i || !(o in n)) && (i || (i = Array.prototype.slice.call(n, 0, o)), i[o] = n[o]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var Rn = "right-scroll-bar-position", En = "width-before-scroll-bar", Dp = "with-scroll-bars-hidden", Op = "--removed-body-scroll-bar-size";
function vo(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Fp(e, n) {
  var t = su(function() {
    return {
      // value
      value: e,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return t.value;
        },
        set current(o) {
          var r = t.value;
          r !== o && (t.value = o, t.callback(o, r));
        }
      }
    };
  })[0];
  return t.callback = n, t.facade;
}
var $p = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Ri = /* @__PURE__ */ new WeakMap();
function Lp(e, n) {
  var t = Fp(null, function(o) {
    return e.forEach(function(r) {
      return vo(r, o);
    });
  });
  return $p(function() {
    var o = Ri.get(t);
    if (o) {
      var r = new Set(o), i = new Set(e), s = t.current;
      r.forEach(function(a) {
        i.has(a) || vo(a, null);
      }), i.forEach(function(a) {
        r.has(a) || vo(a, s);
      });
    }
    Ri.set(t, e);
  }, [e]), t;
}
function Vp(e) {
  return e;
}
function zp(e, n) {
  n === void 0 && (n = Vp);
  var t = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : e;
    },
    useMedium: function(i) {
      var s = n(i, o);
      return t.push(s), function() {
        t = t.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (o = !0; t.length; ) {
        var s = t;
        t = [], s.forEach(i);
      }
      t = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return t;
        }
      };
    },
    assignMedium: function(i) {
      o = !0;
      var s = [];
      if (t.length) {
        var a = t;
        t = [], a.forEach(i), s = t;
      }
      var l = function() {
        var f = s;
        s = [], f.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), t = {
        push: function(f) {
          s.push(f), u();
        },
        filter: function(f) {
          return s = s.filter(f), t;
        }
      };
    }
  };
  return r;
}
function Hp(e) {
  e === void 0 && (e = {});
  var n = zp(null);
  return n.options = ze({ async: !0, ssr: !1 }, e), n;
}
var Qs = function(e) {
  var n = e.sideCar, t = Zs(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = n.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return c.createElement(o, ze({}, t));
};
Qs.isSideCarExport = !0;
function Bp(e, n) {
  return e.useMedium(n), Qs;
}
var Js = Hp(), wo = function() {
}, qn = c.forwardRef(function(e, n) {
  var t = c.useRef(null), o = c.useState({
    onScrollCapture: wo,
    onWheelCapture: wo,
    onTouchMoveCapture: wo
  }), r = o[0], i = o[1], s = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, d = e.shards, g = e.sideCar, p = e.noRelative, h = e.noIsolation, v = e.inert, w = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, x = e.gapMode, C = Zs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = g, S = Lp([t, n]), P = ze(ze({}, C), r);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(_, { sideCar: Js, removeScrollBar: u, shards: d, noRelative: p, noIsolation: h, inert: v, setCallbacks: i, allowPinchZoom: !!w, lockRef: t, gapMode: x }),
    s ? c.cloneElement(c.Children.only(a), ze(ze({}, P), { ref: S })) : c.createElement(y, ze({}, P, { className: l, ref: S }), a)
  );
});
qn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qn.classNames = {
  fullWidth: En,
  zeroRight: Rn
};
var Gp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wp() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Gp();
  return n && e.setAttribute("nonce", n), e;
}
function jp(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function Up(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var Yp = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = Wp()) && (jp(n, t), Up(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, Kp = function() {
  var e = Yp();
  return function(n, t) {
    c.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, ea = function() {
  var e = Kp(), n = function(t) {
    var o = t.styles, r = t.dynamic;
    return e(o, r), null;
  };
  return n;
}, Xp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bo = function(e) {
  return parseInt(e || "", 10) || 0;
}, qp = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], o = n[e === "padding" ? "paddingTop" : "marginTop"], r = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [bo(t), bo(o), bo(r)];
}, Zp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Xp;
  var n = qp(e), t = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, o - t + n[2] - n[0])
  };
}, Qp = ea(), At = "data-scroll-locked", Jp = function(e, n, t, o) {
  var r = e.left, i = e.top, s = e.right, a = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Dp, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(At, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(o, ";"),
    t === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `),
    t === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Rn, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Rn, " .").concat(Rn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(At, `] {
    `).concat(Op, ": ").concat(a, `px;
  }
`);
}, Ei = function() {
  var e = parseInt(document.body.getAttribute(At) || "0", 10);
  return isFinite(e) ? e : 0;
}, eg = function() {
  c.useEffect(function() {
    return document.body.setAttribute(At, (Ei() + 1).toString()), function() {
      var e = Ei() - 1;
      e <= 0 ? document.body.removeAttribute(At) : document.body.setAttribute(At, e.toString());
    };
  }, []);
}, tg = function(e) {
  var n = e.noRelative, t = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  eg();
  var i = c.useMemo(function() {
    return Zp(r);
  }, [r]);
  return c.createElement(Qp, { styles: Jp(i, !n, r, t ? "" : "!important") });
}, Ho = !1;
if (typeof window < "u")
  try {
    var mn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ho = !0, !0;
      }
    });
    window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
  } catch {
    Ho = !1;
  }
var St = Ho ? { passive: !1 } : !1, ng = function(e) {
  return e.tagName === "TEXTAREA";
}, ta = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !ng(e) && t[n] === "visible")
  );
}, og = function(e) {
  return ta(e, "overflowY");
}, rg = function(e) {
  return ta(e, "overflowX");
}, _i = function(e, n) {
  var t = n.ownerDocument, o = n;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = na(e, o);
    if (r) {
      var i = oa(e, o), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== t.body);
  return !1;
}, ig = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, o = e.clientHeight;
  return [
    n,
    t,
    o
  ];
}, sg = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, o = e.clientWidth;
  return [
    n,
    t,
    o
  ];
}, na = function(e, n) {
  return e === "v" ? og(n) : rg(n);
}, oa = function(e, n) {
  return e === "v" ? ig(n) : sg(n);
}, ag = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, lg = function(e, n, t, o, r) {
  var i = ag(e, window.getComputedStyle(n).direction), s = i * o, a = t.target, l = n.contains(a), u = !1, f = s > 0, d = 0, g = 0;
  do {
    if (!a)
      break;
    var p = oa(e, a), h = p[0], v = p[1], w = p[2], b = v - w - i * h;
    (h || b) && na(e, a) && (d += b, g += h);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (n.contains(a) || n === a)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(g) < 1) && (u = !0), u;
}, hn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Pi = function(e) {
  return [e.deltaX, e.deltaY];
}, Mi = function(e) {
  return e && "current" in e ? e.current : e;
}, cg = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, ug = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, dg = 0, Rt = [];
function fg(e) {
  var n = c.useRef([]), t = c.useRef([0, 0]), o = c.useRef(), r = c.useState(dg++)[0], i = c.useState(ea)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var v = Tp([e.lockRef.current], (e.shards || []).map(Mi), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = hn(v), y = t.current, x = "deltaX" in v ? v.deltaX : y[0] - b[0], C = "deltaY" in v ? v.deltaY : y[1] - b[1], _, S = v.target, P = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && P === "h" && S.type === "range")
      return !1;
    var R = window.getSelection(), D = R && R.anchorNode, V = D ? D === S || D.contains(S) : !1;
    if (V)
      return !1;
    var K = _i(P, S);
    if (!K)
      return !0;
    if (K ? _ = P : (_ = P === "v" ? "h" : "v", K = _i(P, S)), !K)
      return !1;
    if (!o.current && "changedTouches" in v && (x || C) && (o.current = _), !_)
      return !0;
    var ee = o.current || _;
    return lg(ee, w, v, ee === "h" ? x : C);
  }, []), l = c.useCallback(function(v) {
    var w = v;
    if (!(!Rt.length || Rt[Rt.length - 1] !== i)) {
      var b = "deltaY" in w ? Pi(w) : hn(w), y = n.current.filter(function(_) {
        return _.name === w.type && (_.target === w.target || w.target === _.shadowParent) && cg(_.delta, b);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var x = (s.current.shards || []).map(Mi).filter(Boolean).filter(function(_) {
          return _.contains(w.target);
        }), C = x.length > 0 ? a(w, x[0]) : !s.current.noIsolation;
        C && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, w, b, y) {
    var x = { name: v, delta: w, target: b, should: y, shadowParent: pg(b) };
    n.current.push(x), setTimeout(function() {
      n.current = n.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = c.useCallback(function(v) {
    t.current = hn(v), o.current = void 0;
  }, []), d = c.useCallback(function(v) {
    u(v.type, Pi(v), v.target, a(v, e.lockRef.current));
  }, []), g = c.useCallback(function(v) {
    u(v.type, hn(v), v.target, a(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Rt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, St), document.addEventListener("touchmove", l, St), document.addEventListener("touchstart", f, St), function() {
      Rt = Rt.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, St), document.removeEventListener("touchmove", l, St), document.removeEventListener("touchstart", f, St);
    };
  }, []);
  var p = e.removeScrollBar, h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(i, { styles: ug(r) }) : null,
    p ? c.createElement(tg, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function pg(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const gg = Bp(Js, fg);
var Zn = c.forwardRef(function(e, n) {
  return c.createElement(qn, ze({}, e, { ref: n, sideCar: gg }));
});
Zn.classNames = qn.classNames;
var mg = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Et = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), wn = {}, yo = 0, ra = function(e) {
  return e && (e.host || ra(e.parentNode));
}, hg = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var o = ra(t);
    return o && e.contains(o) ? o : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, vg = function(e, n, t, o) {
  var r = hg(n, Array.isArray(e) ? e : [e]);
  wn[t] || (wn[t] = /* @__PURE__ */ new WeakMap());
  var i = wn[t], s = [], a = /* @__PURE__ */ new Set(), l = new Set(r), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  r.forEach(u);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(g) {
      if (a.has(g))
        f(g);
      else
        try {
          var p = g.getAttribute(o), h = p !== null && p !== "false", v = (Et.get(g) || 0) + 1, w = (i.get(g) || 0) + 1;
          Et.set(g, v), i.set(g, w), s.push(g), v === 1 && h && vn.set(g, !0), w === 1 && g.setAttribute(t, "true"), h || g.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", g, b);
        }
    });
  };
  return f(n), a.clear(), yo++, function() {
    s.forEach(function(d) {
      var g = Et.get(d) - 1, p = i.get(d) - 1;
      Et.set(d, g), i.set(d, p), g || (vn.has(d) || d.removeAttribute(o), vn.delete(d)), p || d.removeAttribute(t);
    }), yo--, yo || (Et = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), wn = {});
  };
}, vr = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = mg(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), vg(o, r, t, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function wg(e) {
  const n = /* @__PURE__ */ bg(e), t = c.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = c.Children.toArray(i), l = a.find(xg);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ m(n, { ...s, ref: r, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ m(n, { ...s, ref: r, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function bg(e) {
  const n = c.forwardRef((t, o) => {
    const { children: r, ...i } = t;
    if (c.isValidElement(r)) {
      const s = Sg(r), a = Cg(i, r.props);
      return r.type !== c.Fragment && (a.ref = o ? be(o, s) : s), c.cloneElement(r, a);
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var yg = Symbol("radix.slottable");
function xg(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yg;
}
function Cg(e, n) {
  const t = { ...n };
  for (const o in n) {
    const r = e[o], i = n[o];
    /^on[A-Z]/.test(o) ? r && i ? t[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (t[o] = r) : o === "style" ? t[o] = { ...r, ...i } : o === "className" && (t[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Sg(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Qn = "Dialog", [ia] = qe(Qn), [Rg, Le] = ia(Qn), sa = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, f] = Vt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: Qn
  });
  return /* @__PURE__ */ m(
    Rg,
    {
      scope: n,
      triggerRef: a,
      contentRef: l,
      contentId: pe(),
      titleId: pe(),
      descriptionId: pe(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((d) => !d), [f]),
      modal: s,
      children: t
    }
  );
};
sa.displayName = Qn;
var aa = "DialogTrigger", la = c.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...o } = e, r = Le(aa, t), i = ie(n, r.triggerRef);
    return /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": yr(r.open),
        ...o,
        ref: i,
        onClick: H(e.onClick, r.onOpenToggle)
      }
    );
  }
);
la.displayName = aa;
var wr = "DialogPortal", [Eg, ca] = ia(wr, {
  forceMount: void 0
}), ua = (e) => {
  const { __scopeDialog: n, forceMount: t, children: o, container: r } = e, i = Le(wr, n);
  return /* @__PURE__ */ m(Eg, { scope: n, forceMount: t, children: c.Children.map(o, (s) => /* @__PURE__ */ m(ge, { present: t || i.open, children: /* @__PURE__ */ m(Zt, { asChild: !0, container: r, children: s }) })) });
};
ua.displayName = wr;
var Tn = "DialogOverlay", da = c.forwardRef(
  (e, n) => {
    const t = ca(Tn, e.__scopeDialog), { forceMount: o = t.forceMount, ...r } = e, i = Le(Tn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ m(ge, { present: o || i.open, children: /* @__PURE__ */ m(Pg, { ...r, ref: n }) }) : null;
  }
);
da.displayName = Tn;
var _g = /* @__PURE__ */ wg("DialogOverlay.RemoveScroll"), Pg = c.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...o } = e, r = Le(Tn, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(Zn, { as: _g, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ m(
        re.div,
        {
          "data-state": yr(r.open),
          ...o,
          ref: n,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ht = "DialogContent", fa = c.forwardRef(
  (e, n) => {
    const t = ca(ht, e.__scopeDialog), { forceMount: o = t.forceMount, ...r } = e, i = Le(ht, e.__scopeDialog);
    return /* @__PURE__ */ m(ge, { present: o || i.open, children: i.modal ? /* @__PURE__ */ m(Mg, { ...r, ref: n }) : /* @__PURE__ */ m(Ag, { ...r, ref: n }) });
  }
);
fa.displayName = ht;
var Mg = c.forwardRef(
  (e, n) => {
    const t = Le(ht, e.__scopeDialog), o = c.useRef(null), r = ie(n, t.contentRef, o);
    return c.useEffect(() => {
      const i = o.current;
      if (i) return vr(i);
    }, []), /* @__PURE__ */ m(
      pa,
      {
        ...e,
        ref: r,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = t.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: H(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: H(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Ag = c.forwardRef(
  (e, n) => {
    const t = Le(ht, e.__scopeDialog), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ m(
      pa,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (o.current || (a = t.triggerRef.current) == null || a.focus(), i.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (i) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const s = i.target;
          ((u = t.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
        }
      }
    );
  }
), pa = c.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, ...s } = e, a = Le(ht, t), l = c.useRef(null), u = ie(n, l);
    return hr(), /* @__PURE__ */ W(Nt, { children: [
      /* @__PURE__ */ m(
        Xn,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ m(
            Xt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": yr(a.open),
              ...s,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ W(Nt, { children: [
        /* @__PURE__ */ m(Ng, { titleId: a.titleId }),
        /* @__PURE__ */ m(kg, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), br = "DialogTitle", ga = c.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...o } = e, r = Le(br, t);
    return /* @__PURE__ */ m(re.h2, { id: r.titleId, ...o, ref: n });
  }
);
ga.displayName = br;
var ma = "DialogDescription", ha = c.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...o } = e, r = Le(ma, t);
    return /* @__PURE__ */ m(re.p, { id: r.descriptionId, ...o, ref: n });
  }
);
ha.displayName = ma;
var va = "DialogClose", wa = c.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...o } = e, r = Le(va, t);
    return /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: H(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
wa.displayName = va;
function yr(e) {
  return e ? "open" : "closed";
}
var ba = "DialogTitleWarning", [Lb, ya] = md(ba, {
  contentName: ht,
  titleName: br,
  docsSlug: "dialog"
}), Ng = ({ titleId: e }) => {
  const n = ya(ba), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, Ig = "DialogDescriptionWarning", kg = ({ contentRef: e, descriptionId: n }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ya(Ig).contentName}}.`;
  return c.useEffect(() => {
    var i;
    const r = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    n && r && (document.getElementById(n) || console.warn(o));
  }, [o, e, n]), null;
}, xa = sa, Tg = la, Ca = ua, xr = da, Cr = fa, Sa = ga, Ra = ha, Ea = wa;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Og = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), Ai = (e) => {
  const n = Og(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, _a = (...e) => e.filter((n, t, o) => !!n && n.trim() !== "" && o.indexOf(n) === t).join(" ").trim(), Fg = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $g = {
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
const Lg = Gi(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => To(
    "svg",
    {
      ref: l,
      ...$g,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: o ? Number(t) * 24 / Number(n) : t,
      className: _a("lucide", r),
      ...!i && !Fg(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([u, f]) => To(u, f)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = (e, n) => {
  const t = Gi(
    ({ className: o, ...r }, i) => To(Lg, {
      ref: i,
      iconNode: n,
      className: _a(
        `lucide-${Dg(Ai(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return t.displayName = Ai(e), t;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], zg = Ae("arrow-up-down", Vg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Bg = Ae("check", Hg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gg = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Pa = Ae("chevron-left", Gg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Sr = Ae("chevron-right", Wg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jg = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ug = Ae("circle", jg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], Kg = Ae("funnel", Yg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], qg = Ae("monitor", Xg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], Qg = Ae("moon", Zg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], em = Ae("plus", Jg);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Ma = Ae("search", tm);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], om = Ae("sun", nm);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Aa = Ae("x", rm), im = xa, Vb = Tg, sm = Ca, zb = Ea, Na = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  xr,
  {
    ref: t,
    className: Y(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n
  }
));
Na.displayName = xr.displayName;
const Ia = c.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ W(sm, { children: [
  /* @__PURE__ */ m(Na, {}),
  /* @__PURE__ */ W(
    Cr,
    {
      ref: o,
      className: Y(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg",
        e
      ),
      ...t,
      children: [
        n,
        /* @__PURE__ */ W(Ea, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ m(Aa, { className: "size-4" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ia.displayName = Cr.displayName;
const ka = ({ className: e, ...n }) => /* @__PURE__ */ m(
  "div",
  {
    className: Y("flex flex-col gap-2 text-center sm:text-left", e),
    ...n
  }
);
ka.displayName = "DialogHeader";
const am = ({ className: e, ...n }) => /* @__PURE__ */ m(
  "div",
  {
    className: Y(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      e
    ),
    ...n
  }
);
am.displayName = "DialogFooter";
const Ta = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  Sa,
  {
    ref: t,
    className: Y("text-lg leading-none font-semibold tracking-tight", e),
    ...n
  }
));
Ta.displayName = Sa.displayName;
const Da = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  Ra,
  {
    ref: t,
    className: Y("text-muted-foreground text-sm", e),
    ...n
  }
));
Da.displayName = Ra.displayName;
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  const n = /* @__PURE__ */ lm(e), t = c.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = c.Children.toArray(i), l = a.find(um);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ m(n, { ...s, ref: r, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ m(n, { ...s, ref: r, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function lm(e) {
  const n = c.forwardRef((t, o) => {
    const { children: r, ...i } = t;
    if (c.isValidElement(r)) {
      const s = fm(r), a = dm(i, r.props);
      return r.type !== c.Fragment && (a.ref = o ? be(o, s) : s), c.cloneElement(r, a);
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var cm = Symbol("radix.slottable");
function um(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cm;
}
function dm(e, n) {
  const t = { ...n };
  for (const o in n) {
    const r = e[o], i = n[o];
    /^on[A-Z]/.test(o) ? r && i ? t[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (t[o] = r) : o === "style" ? t[o] = { ...r, ...i } : o === "className" && (t[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function fm(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function Oa(e) {
  const n = e + "CollectionProvider", [t, o] = qe(n), [r, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: w, children: b } = v, y = N.useRef(null), x = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(r, { scope: w, itemMap: x, collectionRef: y, children: b });
  };
  s.displayName = n;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Ni(a), u = N.forwardRef(
    (v, w) => {
      const { scope: b, children: y } = v, x = i(a, b), C = ie(w, x.collectionRef);
      return /* @__PURE__ */ m(l, { ref: C, children: y });
    }
  );
  u.displayName = a;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", g = /* @__PURE__ */ Ni(f), p = N.forwardRef(
    (v, w) => {
      const { scope: b, children: y, ...x } = v, C = N.useRef(null), _ = ie(w, C), S = i(f, b);
      return N.useEffect(() => (S.itemMap.set(C, { ref: C, ...x }), () => void S.itemMap.delete(C))), /* @__PURE__ */ m(g, { [d]: "", ref: _, children: y });
    }
  );
  p.displayName = f;
  function h(v) {
    const w = i(e + "CollectionConsumer", v);
    return N.useCallback(() => {
      const y = w.collectionRef.current;
      if (!y) return [];
      const x = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (S, P) => x.indexOf(S.ref.current) - x.indexOf(P.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: s, Slot: u, ItemSlot: p },
    h,
    o
  ];
}
var pm = c.createContext(void 0);
function Rr(e) {
  const n = c.useContext(pm);
  return e || n || "ltr";
}
var xo = "rovingFocusGroup.onEntryFocus", gm = { bubbles: !1, cancelable: !0 }, Jt = "RovingFocusGroup", [Bo, Fa, mm] = Oa(Jt), [hm, $a] = qe(
  Jt,
  [mm]
), [vm, wm] = hm(Jt), La = c.forwardRef(
  (e, n) => /* @__PURE__ */ m(Bo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(Bo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(bm, { ...e, ref: n }) }) })
);
La.displayName = Jt;
var bm = c.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: o,
    loop: r = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, g = c.useRef(null), p = ie(n, g), h = Rr(i), [v, w] = Vt({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: Jt
  }), [b, y] = c.useState(!1), x = ue(u), C = Fa(t), _ = c.useRef(!1), [S, P] = c.useState(0);
  return c.useEffect(() => {
    const R = g.current;
    if (R)
      return R.addEventListener(xo, x), () => R.removeEventListener(xo, x);
  }, [x]), /* @__PURE__ */ m(
    vm,
    {
      scope: t,
      orientation: o,
      dir: h,
      loop: r,
      currentTabStopId: v,
      onItemFocus: c.useCallback(
        (R) => w(R),
        [w]
      ),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => P((R) => R + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => P((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        re.div,
        {
          tabIndex: b || S === 0 ? -1 : 0,
          "data-orientation": o,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: H(e.onFocus, (R) => {
            const D = !_.current;
            if (R.target === R.currentTarget && D && !b) {
              const V = new CustomEvent(xo, gm);
              if (R.currentTarget.dispatchEvent(V), !V.defaultPrevented) {
                const K = C().filter((k) => k.focusable), ee = K.find((k) => k.active), Q = K.find((k) => k.id === v), ne = [ee, Q, ...K].filter(
                  Boolean
                ).map((k) => k.ref.current);
                Ha(ne, f);
              }
            }
            _.current = !1;
          }),
          onBlur: H(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Va = "RovingFocusGroupItem", za = c.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: o = !0,
      active: r = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = pe(), u = i || l, f = wm(Va, t), d = f.currentTabStopId === u, g = Fa(t), { onFocusableItemAdd: p, onFocusableItemRemove: h, currentTabStopId: v } = f;
    return c.useEffect(() => {
      if (o)
        return p(), () => h();
    }, [o, p, h]), /* @__PURE__ */ m(
      Bo.ItemSlot,
      {
        scope: t,
        id: u,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ m(
          re.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...a,
            ref: n,
            onMouseDown: H(e.onMouseDown, (w) => {
              o ? f.onItemFocus(u) : w.preventDefault();
            }),
            onFocus: H(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: H(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const b = Cm(w, f.orientation, f.dir);
              if (b !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let x = g().filter((C) => C.focusable).map((C) => C.ref.current);
                if (b === "last") x.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && x.reverse();
                  const C = x.indexOf(w.currentTarget);
                  x = f.loop ? Sm(x, C + 1) : x.slice(C + 1);
                }
                setTimeout(() => Ha(x));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
za.displayName = Va;
var ym = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function xm(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Cm(e, n, t) {
  const o = xm(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return ym[o];
}
function Ha(e, n = !1) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function Sm(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
var Rm = La, Em = za;
// @__NO_SIDE_EFFECTS__
function _m(e) {
  const n = /* @__PURE__ */ Pm(e), t = c.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = c.Children.toArray(i), l = a.find(Am);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ m(n, { ...s, ref: r, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ m(n, { ...s, ref: r, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Pm(e) {
  const n = c.forwardRef((t, o) => {
    const { children: r, ...i } = t;
    if (c.isValidElement(r)) {
      const s = Im(r), a = Nm(i, r.props);
      return r.type !== c.Fragment && (a.ref = o ? be(o, s) : s), c.cloneElement(r, a);
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Mm = Symbol("radix.slottable");
function Am(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Mm;
}
function Nm(e, n) {
  const t = { ...n };
  for (const o in n) {
    const r = e[o], i = n[o];
    /^on[A-Z]/.test(o) ? r && i ? t[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (t[o] = r) : o === "style" ? t[o] = { ...r, ...i } : o === "className" && (t[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Im(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Go = ["Enter", " "], km = ["ArrowDown", "PageUp", "Home"], Ba = ["ArrowUp", "PageDown", "End"], Tm = [...km, ...Ba], Dm = {
  ltr: [...Go, "ArrowRight"],
  rtl: [...Go, "ArrowLeft"]
}, Om = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, en = "Menu", [Yt, Fm, $m] = Oa(en), [bt, Ga] = qe(en, [
  $m,
  Lt,
  $a
]), tn = Lt(), Wa = $a(), [ja, lt] = bt(en), [Lm, nn] = bt(en), Ua = (e) => {
  const { __scopeMenu: n, open: t = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, a = tn(n), [l, u] = c.useState(null), f = c.useRef(!1), d = ue(i), g = Rr(r);
  return c.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ m(Wn, { ...a, children: /* @__PURE__ */ m(
    ja,
    {
      scope: n,
      open: t,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ m(
        Lm,
        {
          scope: n,
          onClose: c.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: g,
          modal: s,
          children: o
        }
      )
    }
  ) });
};
Ua.displayName = en;
var Vm = "MenuAnchor", Er = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, r = tn(t);
    return /* @__PURE__ */ m(jn, { ...r, ...o, ref: n });
  }
);
Er.displayName = Vm;
var _r = "MenuPortal", [zm, Ya] = bt(_r, {
  forceMount: void 0
}), Ka = (e) => {
  const { __scopeMenu: n, forceMount: t, children: o, container: r } = e, i = lt(_r, n);
  return /* @__PURE__ */ m(zm, { scope: n, forceMount: t, children: /* @__PURE__ */ m(ge, { present: t || i.open, children: /* @__PURE__ */ m(Zt, { asChild: !0, container: r, children: o }) }) });
};
Ka.displayName = _r;
var Me = "MenuContent", [Hm, Pr] = bt(Me), Xa = c.forwardRef(
  (e, n) => {
    const t = Ya(Me, e.__scopeMenu), { forceMount: o = t.forceMount, ...r } = e, i = lt(Me, e.__scopeMenu), s = nn(Me, e.__scopeMenu);
    return /* @__PURE__ */ m(Yt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(ge, { present: o || i.open, children: /* @__PURE__ */ m(Yt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ m(Bm, { ...r, ref: n }) : /* @__PURE__ */ m(Gm, { ...r, ref: n }) }) }) });
  }
), Bm = c.forwardRef(
  (e, n) => {
    const t = lt(Me, e.__scopeMenu), o = c.useRef(null), r = ie(n, o);
    return c.useEffect(() => {
      const i = o.current;
      if (i) return vr(i);
    }, []), /* @__PURE__ */ m(
      Mr,
      {
        ...e,
        ref: r,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: H(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), Gm = c.forwardRef((e, n) => {
  const t = lt(Me, e.__scopeMenu);
  return /* @__PURE__ */ m(
    Mr,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Wm = /* @__PURE__ */ _m("MenuContent.ScrollLock"), Mr = c.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: g,
      onDismiss: p,
      disableOutsideScroll: h,
      ...v
    } = e, w = lt(Me, t), b = nn(Me, t), y = tn(t), x = Wa(t), C = Fm(t), [_, S] = c.useState(null), P = c.useRef(null), R = ie(n, P, w.onContentChange), D = c.useRef(0), V = c.useRef(""), K = c.useRef(0), ee = c.useRef(null), Q = c.useRef("right"), Z = c.useRef(0), ne = h ? Zn : c.Fragment, k = h ? { as: Wm, allowPinchZoom: !0 } : void 0, G = (T) => {
      var q, X;
      const A = V.current + T, oe = C().filter((B) => !B.disabled), E = document.activeElement, I = (q = oe.find((B) => B.ref.current === E)) == null ? void 0 : q.textValue, O = oe.map((B) => B.textValue), M = nh(O, A, I), F = (X = oe.find((B) => B.textValue === M)) == null ? void 0 : X.ref.current;
      (function B(ae) {
        V.current = ae, window.clearTimeout(D.current), ae !== "" && (D.current = window.setTimeout(() => B(""), 1e3));
      })(A), F && setTimeout(() => F.focus());
    };
    c.useEffect(() => () => window.clearTimeout(D.current), []), hr();
    const z = c.useCallback((T) => {
      var oe, E;
      return Q.current === ((oe = ee.current) == null ? void 0 : oe.side) && rh(T, (E = ee.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ m(
      Hm,
      {
        scope: t,
        searchRef: V,
        onItemEnter: c.useCallback(
          (T) => {
            z(T) && T.preventDefault();
          },
          [z]
        ),
        onItemLeave: c.useCallback(
          (T) => {
            var A;
            z(T) || ((A = P.current) == null || A.focus(), S(null));
          },
          [z]
        ),
        onTriggerLeave: c.useCallback(
          (T) => {
            z(T) && T.preventDefault();
          },
          [z]
        ),
        pointerGraceTimerRef: K,
        onPointerGraceIntentChange: c.useCallback((T) => {
          ee.current = T;
        }, []),
        children: /* @__PURE__ */ m(ne, { ...k, children: /* @__PURE__ */ m(
          Xn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: H(i, (T) => {
              var A;
              T.preventDefault(), (A = P.current) == null || A.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ m(
              Xt,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: d,
                onInteractOutside: g,
                onDismiss: p,
                children: /* @__PURE__ */ m(
                  Rm,
                  {
                    asChild: !0,
                    ...x,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: H(l, (T) => {
                      b.isUsingKeyboardRef.current || T.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      cr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": fl(w.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...y,
                        ...v,
                        ref: R,
                        style: { outline: "none", ...v.style },
                        onKeyDown: H(v.onKeyDown, (T) => {
                          const oe = T.target.closest("[data-radix-menu-content]") === T.currentTarget, E = T.ctrlKey || T.altKey || T.metaKey, I = T.key.length === 1;
                          oe && (T.key === "Tab" && T.preventDefault(), !E && I && G(T.key));
                          const O = P.current;
                          if (T.target !== O || !Tm.includes(T.key)) return;
                          T.preventDefault();
                          const F = C().filter((q) => !q.disabled).map((q) => q.ref.current);
                          Ba.includes(T.key) && F.reverse(), eh(F);
                        }),
                        onBlur: H(e.onBlur, (T) => {
                          T.currentTarget.contains(T.target) || (window.clearTimeout(D.current), V.current = "");
                        }),
                        onPointerMove: H(
                          e.onPointerMove,
                          Kt((T) => {
                            const A = T.target, oe = Z.current !== T.clientX;
                            if (T.currentTarget.contains(A) && oe) {
                              const E = T.clientX > Z.current ? "right" : "left";
                              Q.current = E, Z.current = T.clientX;
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
Xa.displayName = Me;
var jm = "MenuGroup", Ar = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ m(re.div, { role: "group", ...o, ref: n });
  }
);
Ar.displayName = jm;
var Um = "MenuLabel", qa = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ m(re.div, { ...o, ref: n });
  }
);
qa.displayName = Um;
var Dn = "MenuItem", Ii = "menu.itemSelect", Jn = c.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: o, ...r } = e, i = c.useRef(null), s = nn(Dn, e.__scopeMenu), a = Pr(Dn, e.__scopeMenu), l = ie(n, i), u = c.useRef(!1), f = () => {
      const d = i.current;
      if (!t && d) {
        const g = new CustomEvent(Ii, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Ii, (p) => o == null ? void 0 : o(p), { once: !0 }), hs(d, g), g.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ m(
      Za,
      {
        ...r,
        ref: l,
        disabled: t,
        onClick: H(e.onClick, f),
        onPointerDown: (d) => {
          var g;
          (g = e.onPointerDown) == null || g.call(e, d), u.current = !0;
        },
        onPointerUp: H(e.onPointerUp, (d) => {
          var g;
          u.current || (g = d.currentTarget) == null || g.click();
        }),
        onKeyDown: H(e.onKeyDown, (d) => {
          const g = a.searchRef.current !== "";
          t || g && d.key === " " || Go.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Jn.displayName = Dn;
var Za = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: o = !1, textValue: r, ...i } = e, s = Pr(Dn, t), a = Wa(t), l = c.useRef(null), u = ie(n, l), [f, d] = c.useState(!1), [g, p] = c.useState("");
    return c.useEffect(() => {
      const h = l.current;
      h && p((h.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ m(
      Yt.ItemSlot,
      {
        scope: t,
        disabled: o,
        textValue: r ?? g,
        children: /* @__PURE__ */ m(Em, { asChild: !0, ...a, focusable: !o, children: /* @__PURE__ */ m(
          re.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: H(
              e.onPointerMove,
              Kt((h) => {
                o ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: H(
              e.onPointerLeave,
              Kt((h) => s.onItemLeave(h))
            ),
            onFocus: H(e.onFocus, () => d(!0)),
            onBlur: H(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), Ym = "MenuCheckboxItem", Qa = c.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ m(ol, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ m(
      Jn,
      {
        role: "menuitemcheckbox",
        "aria-checked": On(t) ? "mixed" : t,
        ...r,
        ref: n,
        "data-state": kr(t),
        onSelect: H(
          r.onSelect,
          () => o == null ? void 0 : o(On(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Qa.displayName = Ym;
var Ja = "MenuRadioGroup", [Km, Xm] = bt(
  Ja,
  { value: void 0, onValueChange: () => {
  } }
), el = c.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: o, ...r } = e, i = ue(o);
    return /* @__PURE__ */ m(Km, { scope: e.__scopeMenu, value: t, onValueChange: i, children: /* @__PURE__ */ m(Ar, { ...r, ref: n }) });
  }
);
el.displayName = Ja;
var tl = "MenuRadioItem", nl = c.forwardRef(
  (e, n) => {
    const { value: t, ...o } = e, r = Xm(tl, e.__scopeMenu), i = t === r.value;
    return /* @__PURE__ */ m(ol, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ m(
      Jn,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...o,
        ref: n,
        "data-state": kr(i),
        onSelect: H(
          o.onSelect,
          () => {
            var s;
            return (s = r.onValueChange) == null ? void 0 : s.call(r, t);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
nl.displayName = tl;
var Nr = "MenuItemIndicator", [ol, qm] = bt(
  Nr,
  { checked: !1 }
), rl = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: o, ...r } = e, i = qm(Nr, t);
    return /* @__PURE__ */ m(
      ge,
      {
        present: o || On(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ m(
          re.span,
          {
            ...r,
            ref: n,
            "data-state": kr(i.checked)
          }
        )
      }
    );
  }
);
rl.displayName = Nr;
var Zm = "MenuSeparator", il = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ m(
      re.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }
);
il.displayName = Zm;
var Qm = "MenuArrow", sl = c.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, r = tn(t);
    return /* @__PURE__ */ m(ur, { ...r, ...o, ref: n });
  }
);
sl.displayName = Qm;
var Ir = "MenuSub", [Jm, al] = bt(Ir), ll = (e) => {
  const { __scopeMenu: n, children: t, open: o = !1, onOpenChange: r } = e, i = lt(Ir, n), s = tn(n), [a, l] = c.useState(null), [u, f] = c.useState(null), d = ue(r);
  return c.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ m(Wn, { ...s, children: /* @__PURE__ */ m(
    ja,
    {
      scope: n,
      open: o,
      onOpenChange: d,
      content: u,
      onContentChange: f,
      children: /* @__PURE__ */ m(
        Jm,
        {
          scope: n,
          contentId: pe(),
          triggerId: pe(),
          trigger: a,
          onTriggerChange: l,
          children: t
        }
      )
    }
  ) });
};
ll.displayName = Ir;
var Gt = "MenuSubTrigger", cl = c.forwardRef(
  (e, n) => {
    const t = lt(Gt, e.__scopeMenu), o = nn(Gt, e.__scopeMenu), r = al(Gt, e.__scopeMenu), i = Pr(Gt, e.__scopeMenu), s = c.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, f = c.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return c.useEffect(() => f, [f]), c.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), /* @__PURE__ */ m(Er, { asChild: !0, ...u, children: /* @__PURE__ */ m(
      Za,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": r.contentId,
        "data-state": fl(t.open),
        ...e,
        ref: be(n, r.onTriggerChange),
        onClick: (d) => {
          var g;
          (g = e.onClick) == null || g.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: H(
          e.onPointerMove,
          Kt((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !t.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              t.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          Kt((d) => {
            var p, h;
            f();
            const g = (p = t.content) == null ? void 0 : p.getBoundingClientRect();
            if (g) {
              const v = (h = t.content) == null ? void 0 : h.dataset.side, w = v === "right", b = w ? -5 : 5, y = g[w ? "left" : "right"], x = g[w ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + b, y: d.clientY },
                  { x: y, y: g.top },
                  { x, y: g.top },
                  { x, y: g.bottom },
                  { x: y, y: g.bottom }
                ],
                side: v
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: H(e.onKeyDown, (d) => {
          var p;
          const g = i.searchRef.current !== "";
          e.disabled || g && d.key === " " || Dm[o.dir].includes(d.key) && (t.onOpenChange(!0), (p = t.content) == null || p.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
cl.displayName = Gt;
var ul = "MenuSubContent", dl = c.forwardRef(
  (e, n) => {
    const t = Ya(Me, e.__scopeMenu), { forceMount: o = t.forceMount, ...r } = e, i = lt(Me, e.__scopeMenu), s = nn(Me, e.__scopeMenu), a = al(ul, e.__scopeMenu), l = c.useRef(null), u = ie(n, l);
    return /* @__PURE__ */ m(Yt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(ge, { present: o || i.open, children: /* @__PURE__ */ m(Yt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(
      Mr,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...r,
        ref: u,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var d;
          s.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: H(e.onFocusOutside, (f) => {
          f.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: H(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: H(e.onKeyDown, (f) => {
          var p;
          const d = f.currentTarget.contains(f.target), g = Om[s.dir].includes(f.key);
          d && g && (i.onOpenChange(!1), (p = a.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
dl.displayName = ul;
function fl(e) {
  return e ? "open" : "closed";
}
function On(e) {
  return e === "indeterminate";
}
function kr(e) {
  return On(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function eh(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function th(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
function nh(e, n, t) {
  const r = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let s = th(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((u) => u !== t));
  const l = s.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function oh(e, n) {
  const { x: t, y: o } = e;
  let r = !1;
  for (let i = 0, s = n.length - 1; i < n.length; s = i++) {
    const a = n[i], l = n[s], u = a.x, f = a.y, d = l.x, g = l.y;
    f > o != g > o && t < (d - u) * (o - f) / (g - f) + u && (r = !r);
  }
  return r;
}
function rh(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return oh(t, n);
}
function Kt(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var ih = Ua, sh = Er, ah = Ka, lh = Xa, ch = Ar, uh = qa, dh = Jn, fh = Qa, ph = el, gh = nl, mh = rl, hh = il, vh = sl, wh = ll, bh = cl, yh = dl, eo = "DropdownMenu", [xh] = qe(
  eo,
  [Ga]
), me = Ga(), [Ch, pl] = xh(eo), gl = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = me(n), u = c.useRef(null), [f, d] = Vt({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: eo
  });
  return /* @__PURE__ */ m(
    Ch,
    {
      scope: n,
      triggerId: pe(),
      triggerRef: u,
      contentId: pe(),
      open: f,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((g) => !g), [d]),
      modal: a,
      children: /* @__PURE__ */ m(ih, { ...l, open: f, onOpenChange: d, dir: o, modal: a, children: t })
    }
  );
};
gl.displayName = eo;
var ml = "DropdownMenuTrigger", hl = c.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: o = !1, ...r } = e, i = pl(ml, t), s = me(t);
    return /* @__PURE__ */ m(sh, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: be(n, i.triggerRef),
        onPointerDown: H(e.onPointerDown, (a) => {
          !o && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: H(e.onKeyDown, (a) => {
          o || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
hl.displayName = ml;
var Sh = "DropdownMenuPortal", vl = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, o = me(n);
  return /* @__PURE__ */ m(ah, { ...o, ...t });
};
vl.displayName = Sh;
var wl = "DropdownMenuContent", bl = c.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, r = pl(wl, t), i = me(t), s = c.useRef(!1);
    return /* @__PURE__ */ m(
      lh,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...i,
        ...o,
        ref: n,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = r.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || u;
          (!r.modal || f) && (s.current = !0);
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
bl.displayName = wl;
var Rh = "DropdownMenuGroup", yl = c.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
    return /* @__PURE__ */ m(ch, { ...r, ...o, ref: n });
  }
);
yl.displayName = Rh;
var Eh = "DropdownMenuLabel", xl = c.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
    return /* @__PURE__ */ m(uh, { ...r, ...o, ref: n });
  }
);
xl.displayName = Eh;
var _h = "DropdownMenuItem", Cl = c.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
    return /* @__PURE__ */ m(dh, { ...r, ...o, ref: n });
  }
);
Cl.displayName = _h;
var Ph = "DropdownMenuCheckboxItem", Sl = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(fh, { ...r, ...o, ref: n });
});
Sl.displayName = Ph;
var Mh = "DropdownMenuRadioGroup", Rl = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(ph, { ...r, ...o, ref: n });
});
Rl.displayName = Mh;
var Ah = "DropdownMenuRadioItem", El = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(gh, { ...r, ...o, ref: n });
});
El.displayName = Ah;
var Nh = "DropdownMenuItemIndicator", _l = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(mh, { ...r, ...o, ref: n });
});
_l.displayName = Nh;
var Ih = "DropdownMenuSeparator", Pl = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(hh, { ...r, ...o, ref: n });
});
Pl.displayName = Ih;
var kh = "DropdownMenuArrow", Th = c.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
    return /* @__PURE__ */ m(vh, { ...r, ...o, ref: n });
  }
);
Th.displayName = kh;
var Dh = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: o, onOpenChange: r, defaultOpen: i } = e, s = me(n), [a, l] = Vt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: r,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ m(wh, { ...s, open: a, onOpenChange: l, children: t });
}, Oh = "DropdownMenuSubTrigger", Ml = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(bh, { ...r, ...o, ref: n });
});
Ml.displayName = Oh;
var Fh = "DropdownMenuSubContent", Al = c.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...o } = e, r = me(t);
  return /* @__PURE__ */ m(
    yh,
    {
      ...r,
      ...o,
      ref: n,
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
Al.displayName = Fh;
var $h = gl, Lh = hl, Nl = vl, Il = bl, Vh = yl, kl = xl, Tl = Cl, Dl = Sl, zh = Rl, Ol = El, Fl = _l, $l = Pl, Hh = Dh, Ll = Ml, Vl = Al;
const Bh = $h, Gh = Lh, Hb = Vh, Bb = Nl, Gb = Hh, Wb = zh, Wh = c.forwardRef(({ className: e, inset: n, children: t, ...o }, r) => /* @__PURE__ */ W(
  Ll,
  {
    ref: r,
    className: Y(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      n && "pl-8",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ m(Sr, { className: "ml-auto" })
    ]
  }
));
Wh.displayName = Ll.displayName;
const jh = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  Vl,
  {
    ref: t,
    className: Y(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      e
    ),
    ...n
  }
));
jh.displayName = Vl.displayName;
const zl = c.forwardRef(({ className: e, sideOffset: n = 4, ...t }, o) => /* @__PURE__ */ m(Nl, { children: /* @__PURE__ */ m(
  Il,
  {
    ref: o,
    sideOffset: n,
    className: Y(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      e
    ),
    ...t
  }
) }));
zl.displayName = Il.displayName;
const Hl = c.forwardRef(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ m(
  Tl,
  {
    ref: o,
    className: Y(
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      n && "pl-8",
      e
    ),
    ...t
  }
));
Hl.displayName = Tl.displayName;
const Uh = c.forwardRef(({ className: e, children: n, checked: t, ...o }, r) => /* @__PURE__ */ W(
  Dl,
  {
    ref: r,
    className: Y(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: t,
    ...o,
    children: [
      /* @__PURE__ */ m("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(Fl, { children: /* @__PURE__ */ m(Bg, { className: "size-4" }) }) }),
      n
    ]
  }
));
Uh.displayName = Dl.displayName;
const Yh = c.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ W(
  Ol,
  {
    ref: o,
    className: Y(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ m("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(Fl, { children: /* @__PURE__ */ m(Ug, { className: "size-2 fill-current" }) }) }),
      n
    ]
  }
));
Yh.displayName = Ol.displayName;
const Bl = c.forwardRef(({ className: e, inset: n, ...t }, o) => /* @__PURE__ */ m(
  kl,
  {
    ref: o,
    className: Y(
      "px-2 py-1.5 text-xs font-medium text-muted-foreground",
      n && "pl-8",
      e
    ),
    ...t
  }
));
Bl.displayName = kl.displayName;
const Gl = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  $l,
  {
    ref: t,
    className: Y("-mx-1 my-1 h-px bg-muted", e),
    ...n
  }
));
Gl.displayName = $l.displayName;
const Kh = ({
  className: e,
  ...n
}) => /* @__PURE__ */ m(
  "span",
  {
    className: Y("ml-auto text-xs tracking-widest opacity-60", e),
    ...n
  }
);
Kh.displayName = "DropdownMenuShortcut";
// @__NO_SIDE_EFFECTS__
function Xh(e) {
  const n = /* @__PURE__ */ qh(e), t = c.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = c.Children.toArray(i), l = a.find(Qh);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ m(n, { ...s, ref: r, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ m(n, { ...s, ref: r, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function qh(e) {
  const n = c.forwardRef((t, o) => {
    const { children: r, ...i } = t;
    if (c.isValidElement(r)) {
      const s = ev(r), a = Jh(i, r.props);
      return r.type !== c.Fragment && (a.ref = o ? be(o, s) : s), c.cloneElement(r, a);
    }
    return c.Children.count(r) > 1 ? c.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Zh = Symbol("radix.slottable");
function Qh(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zh;
}
function Jh(e, n) {
  const t = { ...n };
  for (const o in n) {
    const r = e[o], i = n[o];
    /^on[A-Z]/.test(o) ? r && i ? t[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (t[o] = r) : o === "style" ? t[o] = { ...r, ...i } : o === "className" && (t[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function ev(e) {
  var o, r;
  let n = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var to = "Popover", [Wl] = qe(to, [
  Lt
]), on = Lt(), [tv, ct] = Wl(to), jl = (e) => {
  const {
    __scopePopover: n,
    children: t,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !1
  } = e, a = on(n), l = c.useRef(null), [u, f] = c.useState(!1), [d, g] = Vt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: to
  });
  return /* @__PURE__ */ m(Wn, { ...a, children: /* @__PURE__ */ m(
    tv,
    {
      scope: n,
      contentId: pe(),
      triggerRef: l,
      open: d,
      onOpenChange: g,
      onOpenToggle: c.useCallback(() => g((p) => !p), [g]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: c.useCallback(() => f(!0), []),
      onCustomAnchorRemove: c.useCallback(() => f(!1), []),
      modal: s,
      children: t
    }
  ) });
};
jl.displayName = to;
var Ul = "PopoverAnchor", Yl = c.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...o } = e, r = ct(Ul, t), i = on(t), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = r;
    return c.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ m(jn, { ...i, ...o, ref: n });
  }
);
Yl.displayName = Ul;
var Kl = "PopoverTrigger", Xl = c.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...o } = e, r = ct(Kl, t), i = on(t), s = ie(n, r.triggerRef), a = /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": ec(r.open),
        ...o,
        ref: s,
        onClick: H(e.onClick, r.onOpenToggle)
      }
    );
    return r.hasCustomAnchor ? a : /* @__PURE__ */ m(jn, { asChild: !0, ...i, children: a });
  }
);
Xl.displayName = Kl;
var Tr = "PopoverPortal", [nv, ov] = Wl(Tr, {
  forceMount: void 0
}), ql = (e) => {
  const { __scopePopover: n, forceMount: t, children: o, container: r } = e, i = ct(Tr, n);
  return /* @__PURE__ */ m(nv, { scope: n, forceMount: t, children: /* @__PURE__ */ m(ge, { present: t || i.open, children: /* @__PURE__ */ m(Zt, { asChild: !0, container: r, children: o }) }) });
};
ql.displayName = Tr;
var Dt = "PopoverContent", Zl = c.forwardRef(
  (e, n) => {
    const t = ov(Dt, e.__scopePopover), { forceMount: o = t.forceMount, ...r } = e, i = ct(Dt, e.__scopePopover);
    return /* @__PURE__ */ m(ge, { present: o || i.open, children: i.modal ? /* @__PURE__ */ m(iv, { ...r, ref: n }) : /* @__PURE__ */ m(sv, { ...r, ref: n }) });
  }
);
Zl.displayName = Dt;
var rv = /* @__PURE__ */ Xh("PopoverContent.RemoveScroll"), iv = c.forwardRef(
  (e, n) => {
    const t = ct(Dt, e.__scopePopover), o = c.useRef(null), r = ie(n, o), i = c.useRef(!1);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return vr(s);
    }, []), /* @__PURE__ */ m(Zn, { as: rv, allowPinchZoom: !0, children: /* @__PURE__ */ m(
      Ql,
      {
        ...e,
        ref: r,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = t.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: H(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || l;
            i.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: H(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), sv = c.forwardRef(
  (e, n) => {
    const t = ct(Dt, e.__scopePopover), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ m(
      Ql,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (o.current || (a = t.triggerRef.current) == null || a.focus(), i.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (i) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const s = i.target;
          ((u = t.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
        }
      }
    );
  }
), Ql = c.forwardRef(
  (e, n) => {
    const {
      __scopePopover: t,
      trapFocus: o,
      onOpenAutoFocus: r,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      ...d
    } = e, g = ct(Dt, t), p = on(t);
    return hr(), /* @__PURE__ */ m(
      Xn,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ m(
          Xt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ m(
              cr,
              {
                "data-state": ec(g.open),
                role: "dialog",
                id: g.contentId,
                ...p,
                ...d,
                ref: n,
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
), Jl = "PopoverClose", av = c.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...o } = e, r = ct(Jl, t);
    return /* @__PURE__ */ m(
      re.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: H(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
av.displayName = Jl;
var lv = "PopoverArrow", cv = c.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...o } = e, r = on(t);
    return /* @__PURE__ */ m(ur, { ...r, ...o, ref: n });
  }
);
cv.displayName = lv;
function ec(e) {
  return e ? "open" : "closed";
}
var uv = jl, dv = Yl, fv = Xl, pv = ql, tc = Zl;
const gv = uv, mv = fv, jb = dv, nc = c.forwardRef(({ className: e, align: n = "center", sideOffset: t = 4, ...o }, r) => /* @__PURE__ */ m(pv, { children: /* @__PURE__ */ m(
  tc,
  {
    ref: r,
    align: n,
    sideOffset: t,
    className: Y(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
      e
    ),
    ...o
  }
) }));
nc.displayName = tc.displayName;
function hv(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
function vv(e, n) {
  return c.useReducer((t, o) => n[t][o] ?? t, e);
}
var Dr = "ScrollArea", [oc] = qe(Dr), [wv, Ne] = oc(Dr), rc = c.forwardRef(
  (e, n) => {
    const {
      __scopeScrollArea: t,
      type: o = "hover",
      dir: r,
      scrollHideDelay: i = 600,
      ...s
    } = e, [a, l] = c.useState(null), [u, f] = c.useState(null), [d, g] = c.useState(null), [p, h] = c.useState(null), [v, w] = c.useState(null), [b, y] = c.useState(0), [x, C] = c.useState(0), [_, S] = c.useState(!1), [P, R] = c.useState(!1), D = ie(n, (K) => l(K)), V = Rr(r);
    return /* @__PURE__ */ m(
      wv,
      {
        scope: t,
        type: o,
        dir: V,
        scrollHideDelay: i,
        scrollArea: a,
        viewport: u,
        onViewportChange: f,
        content: d,
        onContentChange: g,
        scrollbarX: p,
        onScrollbarXChange: h,
        scrollbarXEnabled: _,
        onScrollbarXEnabledChange: S,
        scrollbarY: v,
        onScrollbarYChange: w,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: y,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ m(
          re.div,
          {
            dir: V,
            ...s,
            ref: D,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": b + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
rc.displayName = Dr;
var ic = "ScrollAreaViewport", sc = c.forwardRef(
  (e, n) => {
    const { __scopeScrollArea: t, children: o, nonce: r, ...i } = e, s = Ne(ic, t), a = c.useRef(null), l = ie(n, a, s.onViewportChange);
    return /* @__PURE__ */ W(Nt, { children: [
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
          ...i,
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
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ m("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
sc.displayName = ic;
var We = "ScrollAreaScrollbar", Or = c.forwardRef(
  (e, n) => {
    const { forceMount: t, ...o } = e, r = Ne(We, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = r, a = e.orientation === "horizontal";
    return c.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), r.type === "hover" ? /* @__PURE__ */ m(bv, { ...o, ref: n, forceMount: t }) : r.type === "scroll" ? /* @__PURE__ */ m(yv, { ...o, ref: n, forceMount: t }) : r.type === "auto" ? /* @__PURE__ */ m(ac, { ...o, ref: n, forceMount: t }) : r.type === "always" ? /* @__PURE__ */ m(Fr, { ...o, ref: n }) : null;
  }
);
Or.displayName = We;
var bv = c.forwardRef((e, n) => {
  const { forceMount: t, ...o } = e, r = Ne(We, e.__scopeScrollArea), [i, s] = c.useState(!1);
  return c.useEffect(() => {
    const a = r.scrollArea;
    let l = 0;
    if (a) {
      const u = () => {
        window.clearTimeout(l), s(!0);
      }, f = () => {
        l = window.setTimeout(() => s(!1), r.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", f), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", f);
      };
    }
  }, [r.scrollArea, r.scrollHideDelay]), /* @__PURE__ */ m(ge, { present: t || i, children: /* @__PURE__ */ m(
    ac,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: n
    }
  ) });
}), yv = c.forwardRef((e, n) => {
  const { forceMount: t, ...o } = e, r = Ne(We, e.__scopeScrollArea), i = e.orientation === "horizontal", s = oo(() => l("SCROLL_END"), 100), [a, l] = vv("hidden", {
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
  return c.useEffect(() => {
    if (a === "idle") {
      const u = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [a, r.scrollHideDelay, l]), c.useEffect(() => {
    const u = r.viewport, f = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let d = u[f];
      const g = () => {
        const p = u[f];
        d !== p && (l("SCROLL"), s()), d = p;
      };
      return u.addEventListener("scroll", g), () => u.removeEventListener("scroll", g);
    }
  }, [r.viewport, i, l, s]), /* @__PURE__ */ m(ge, { present: t || a !== "hidden", children: /* @__PURE__ */ m(
    Fr,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...o,
      ref: n,
      onPointerEnter: H(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: H(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), ac = c.forwardRef((e, n) => {
  const t = Ne(We, e.__scopeScrollArea), { forceMount: o, ...r } = e, [i, s] = c.useState(!1), a = e.orientation === "horizontal", l = oo(() => {
    if (t.viewport) {
      const u = t.viewport.offsetWidth < t.viewport.scrollWidth, f = t.viewport.offsetHeight < t.viewport.scrollHeight;
      s(a ? u : f);
    }
  }, 10);
  return Ot(t.viewport, l), Ot(t.content, l), /* @__PURE__ */ m(ge, { present: o || i, children: /* @__PURE__ */ m(
    Fr,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: n
    }
  ) });
}), Fr = c.forwardRef((e, n) => {
  const { orientation: t = "vertical", ...o } = e, r = Ne(We, e.__scopeScrollArea), i = c.useRef(null), s = c.useRef(0), [a, l] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = fc(a.viewport, a.content), f = {
    ...o,
    sizes: a,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (g) => i.current = g,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (g) => s.current = g
  };
  function d(g, p) {
    return _v(g, s.current, a, p);
  }
  return t === "horizontal" ? /* @__PURE__ */ m(
    xv,
    {
      ...f,
      ref: n,
      onThumbPositionChange: () => {
        if (r.viewport && i.current) {
          const g = r.viewport.scrollLeft, p = ki(g, a, r.dir);
          i.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (g) => {
        r.viewport && (r.viewport.scrollLeft = g);
      },
      onDragScroll: (g) => {
        r.viewport && (r.viewport.scrollLeft = d(g, r.dir));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ m(
    Cv,
    {
      ...f,
      ref: n,
      onThumbPositionChange: () => {
        if (r.viewport && i.current) {
          const g = r.viewport.scrollTop, p = ki(g, a);
          i.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (g) => {
        r.viewport && (r.viewport.scrollTop = g);
      },
      onDragScroll: (g) => {
        r.viewport && (r.viewport.scrollTop = d(g));
      }
    }
  ) : null;
}), xv = c.forwardRef((e, n) => {
  const { sizes: t, onSizesChange: o, ...r } = e, i = Ne(We, e.__scopeScrollArea), [s, a] = c.useState(), l = c.useRef(null), u = ie(n, l, i.onScrollbarXChange);
  return c.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    cc,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: u,
      sizes: t,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": no(t) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, d) => {
        if (i.viewport) {
          const g = i.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(g), gc(g, d) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && o({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: $n(s.paddingLeft),
            paddingEnd: $n(s.paddingRight)
          }
        });
      }
    }
  );
}), Cv = c.forwardRef((e, n) => {
  const { sizes: t, onSizesChange: o, ...r } = e, i = Ne(We, e.__scopeScrollArea), [s, a] = c.useState(), l = c.useRef(null), u = ie(n, l, i.onScrollbarYChange);
  return c.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    cc,
    {
      "data-orientation": "vertical",
      ...r,
      ref: u,
      sizes: t,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": no(t) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, d) => {
        if (i.viewport) {
          const g = i.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(g), gc(g, d) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && o({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: $n(s.paddingTop),
            paddingEnd: $n(s.paddingBottom)
          }
        });
      }
    }
  );
}), [Sv, lc] = oc(We), cc = c.forwardRef((e, n) => {
  const {
    __scopeScrollArea: t,
    sizes: o,
    hasThumb: r,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: f,
    onResize: d,
    ...g
  } = e, p = Ne(We, t), [h, v] = c.useState(null), w = ie(n, (D) => v(D)), b = c.useRef(null), y = c.useRef(""), x = p.viewport, C = o.content - o.viewport, _ = ue(f), S = ue(l), P = oo(d, 10);
  function R(D) {
    if (b.current) {
      const V = D.clientX - b.current.left, K = D.clientY - b.current.top;
      u({ x: V, y: K });
    }
  }
  return c.useEffect(() => {
    const D = (V) => {
      const K = V.target;
      (h == null ? void 0 : h.contains(K)) && _(V, C);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [x, h, C, _]), c.useEffect(S, [o, S]), Ot(h, P), Ot(p.content, P), /* @__PURE__ */ m(
    Sv,
    {
      scope: t,
      scrollbar: h,
      hasThumb: r,
      onThumbChange: ue(i),
      onThumbPointerUp: ue(s),
      onThumbPositionChange: S,
      onThumbPointerDown: ue(a),
      children: /* @__PURE__ */ m(
        re.div,
        {
          ...g,
          ref: w,
          style: { position: "absolute", ...g.style },
          onPointerDown: H(e.onPointerDown, (D) => {
            D.button === 0 && (D.target.setPointerCapture(D.pointerId), b.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), R(D));
          }),
          onPointerMove: H(e.onPointerMove, R),
          onPointerUp: H(e.onPointerUp, (D) => {
            const V = D.target;
            V.hasPointerCapture(D.pointerId) && V.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), Fn = "ScrollAreaThumb", uc = c.forwardRef(
  (e, n) => {
    const { forceMount: t, ...o } = e, r = lc(Fn, e.__scopeScrollArea);
    return /* @__PURE__ */ m(ge, { present: t || r.hasThumb, children: /* @__PURE__ */ m(Rv, { ref: n, ...o }) });
  }
), Rv = c.forwardRef(
  (e, n) => {
    const { __scopeScrollArea: t, style: o, ...r } = e, i = Ne(Fn, t), s = lc(Fn, t), { onThumbPositionChange: a } = s, l = ie(
      n,
      (d) => s.onThumbChange(d)
    ), u = c.useRef(void 0), f = oo(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const d = i.viewport;
      if (d) {
        const g = () => {
          if (f(), !u.current) {
            const p = Pv(d, a);
            u.current = p, a();
          }
        };
        return a(), d.addEventListener("scroll", g), () => d.removeEventListener("scroll", g);
      }
    }, [i.viewport, f, a]), /* @__PURE__ */ m(
      re.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: H(e.onPointerDownCapture, (d) => {
          const p = d.target.getBoundingClientRect(), h = d.clientX - p.left, v = d.clientY - p.top;
          s.onThumbPointerDown({ x: h, y: v });
        }),
        onPointerUp: H(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
uc.displayName = Fn;
var $r = "ScrollAreaCorner", dc = c.forwardRef(
  (e, n) => {
    const t = Ne($r, e.__scopeScrollArea), o = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && o ? /* @__PURE__ */ m(Ev, { ...e, ref: n }) : null;
  }
);
dc.displayName = $r;
var Ev = c.forwardRef((e, n) => {
  const { __scopeScrollArea: t, ...o } = e, r = Ne($r, t), [i, s] = c.useState(0), [a, l] = c.useState(0), u = !!(i && a);
  return Ot(r.scrollbarX, () => {
    var d;
    const f = ((d = r.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    r.onCornerHeightChange(f), l(f);
  }), Ot(r.scrollbarY, () => {
    var d;
    const f = ((d = r.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    r.onCornerWidthChange(f), s(f);
  }), u ? /* @__PURE__ */ m(
    re.div,
    {
      ...o,
      ref: n,
      style: {
        width: i,
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
function $n(e) {
  return e ? parseInt(e, 10) : 0;
}
function fc(e, n) {
  const t = e / n;
  return isNaN(t) ? 0 : t;
}
function no(e) {
  const n = fc(e.viewport, e.content), t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - t) * n;
  return Math.max(o, 18);
}
function _v(e, n, t, o = "ltr") {
  const r = no(t), i = r / 2, s = n || i, a = r - s, l = t.scrollbar.paddingStart + s, u = t.scrollbar.size - t.scrollbar.paddingEnd - a, f = t.content - t.viewport, d = o === "ltr" ? [0, f] : [f * -1, 0];
  return pc([l, u], d)(e);
}
function ki(e, n, t = "ltr") {
  const o = no(n), r = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, i = n.scrollbar.size - r, s = n.content - n.viewport, a = i - o, l = t === "ltr" ? [0, s] : [s * -1, 0], u = hv(e, l);
  return pc([0, s], [0, a])(u);
}
function pc(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const o = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + o * (t - e[0]);
  };
}
function gc(e, n) {
  return e > 0 && e < n;
}
var Pv = (e, n = () => {
}) => {
  let t = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return (function r() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = t.left !== i.left, a = t.top !== i.top;
    (s || a) && n(), t = i, o = window.requestAnimationFrame(r);
  })(), () => window.cancelAnimationFrame(o);
};
function oo(e, n) {
  const t = ue(e), o = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), c.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(t, n);
  }, [t, n]);
}
function Ot(e, n) {
  const t = ue(n);
  Ye(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(t);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [e, t]);
}
var mc = rc, Mv = sc, Av = dc;
const Nv = c.forwardRef(({ className: e, children: n, ...t }, o) => /* @__PURE__ */ W(
  mc,
  {
    ref: o,
    className: Y("relative overflow-hidden", e),
    ...t,
    children: [
      /* @__PURE__ */ m(Mv, { className: "h-full w-full rounded-[inherit]", children: n }),
      /* @__PURE__ */ m(hc, {}),
      /* @__PURE__ */ m(Av, {})
    ]
  }
));
Nv.displayName = mc.displayName;
const hc = c.forwardRef(({ className: e, orientation: n = "vertical", ...t }, o) => /* @__PURE__ */ m(
  Or,
  {
    ref: o,
    orientation: n,
    className: Y(
      "flex touch-none select-none transition-colors",
      n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m(uc, { className: "bg-border relative flex-1 rounded-full" })
  }
));
hc.displayName = Or.displayName;
var Ti = 1, Iv = 0.9, kv = 0.8, Tv = 0.17, Co = 0.1, So = 0.999, Dv = 0.9999, Ov = 0.99, Fv = /[\\\/_+.#"@\[\(\{&]/, $v = /[\\\/_+.#"@\[\(\{&]/g, Lv = /[\s-]/, vc = /[\s-]/g;
function Wo(e, n, t, o, r, i, s) {
  if (i === n.length) return r === e.length ? Ti : Ov;
  var a = `${r},${i}`;
  if (s[a] !== void 0) return s[a];
  for (var l = o.charAt(i), u = t.indexOf(l, r), f = 0, d, g, p, h; u >= 0; ) d = Wo(e, n, t, o, u + 1, i + 1, s), d > f && (u === r ? d *= Ti : Fv.test(e.charAt(u - 1)) ? (d *= kv, p = e.slice(r, u - 1).match($v), p && r > 0 && (d *= Math.pow(So, p.length))) : Lv.test(e.charAt(u - 1)) ? (d *= Iv, h = e.slice(r, u - 1).match(vc), h && r > 0 && (d *= Math.pow(So, h.length))) : (d *= Tv, r > 0 && (d *= Math.pow(So, u - r))), e.charAt(u) !== n.charAt(i) && (d *= Dv)), (d < Co && t.charAt(u - 1) === o.charAt(i + 1) || o.charAt(i + 1) === o.charAt(i) && t.charAt(u - 1) !== o.charAt(i)) && (g = Wo(e, n, t, o, u + 1, i + 2, s), g * Co > d && (d = g * Co)), d > f && (f = d), u = t.indexOf(l, u + 1);
  return s[a] = f, f;
}
function Di(e) {
  return e.toLowerCase().replace(vc, " ");
}
function Vv(e, n, t) {
  return e = t && t.length > 0 ? `${e + " " + t.join(" ")}` : e, Wo(e, n, Di(e), Di(n), 0, 0, {});
}
var zv = [
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
], ut = zv.reduce((e, n) => {
  const t = /* @__PURE__ */ Ln(`Primitive.${n}`), o = c.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${n}`, { ...e, [n]: o };
}, {}), Ht = '[cmdk-group=""]', Ro = '[cmdk-group-items=""]', Hv = '[cmdk-group-heading=""]', wc = '[cmdk-item=""]', Oi = `${wc}:not([aria-disabled="true"])`, jo = "cmdk-item-select", _t = "data-value", Bv = (e, n, t) => Vv(e, n, t), bc = c.createContext(void 0), rn = () => c.useContext(bc), yc = c.createContext(void 0), Lr = () => c.useContext(yc), xc = c.createContext(void 0), Cc = c.forwardRef((e, n) => {
  let t = Pt(() => {
    var E, I;
    return { search: "", value: (I = (E = e.value) != null ? E : e.defaultValue) != null ? I : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = Pt(() => /* @__PURE__ */ new Set()), r = Pt(() => /* @__PURE__ */ new Map()), i = Pt(() => /* @__PURE__ */ new Map()), s = Pt(() => /* @__PURE__ */ new Set()), a = Sc(e), { label: l, children: u, value: f, onValueChange: d, filter: g, shouldFilter: p, loop: h, disablePointerSelection: v = !1, vimBindings: w = !0, ...b } = e, y = pe(), x = pe(), C = pe(), _ = c.useRef(null), S = Jv();
  vt(() => {
    if (f !== void 0) {
      let E = f.trim();
      t.current.value = E, P.emit();
    }
  }, [f]), vt(() => {
    S(6, Q);
  }, []);
  let P = c.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => t.current, setState: (E, I, O) => {
    var M, F, q, X;
    if (!Object.is(t.current[E], I)) {
      if (t.current[E] = I, E === "search") ee(), V(), S(1, K);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let B = document.getElementById(C);
          B ? B.focus() : (M = document.getElementById(y)) == null || M.focus();
        }
        if (S(7, () => {
          var B;
          t.current.selectedItemId = (B = Z()) == null ? void 0 : B.id, P.emit();
        }), O || S(5, Q), ((F = a.current) == null ? void 0 : F.value) !== void 0) {
          let B = I ?? "";
          (X = (q = a.current).onValueChange) == null || X.call(q, B);
          return;
        }
      }
      P.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), R = c.useMemo(() => ({ value: (E, I, O) => {
    var M;
    I !== ((M = i.current.get(E)) == null ? void 0 : M.value) && (i.current.set(E, { value: I, keywords: O }), t.current.filtered.items.set(E, D(I, O)), S(2, () => {
      V(), P.emit();
    }));
  }, item: (E, I) => (o.current.add(E), I && (r.current.has(I) ? r.current.get(I).add(E) : r.current.set(I, /* @__PURE__ */ new Set([E]))), S(3, () => {
    ee(), V(), t.current.value || K(), P.emit();
  }), () => {
    i.current.delete(E), o.current.delete(E), t.current.filtered.items.delete(E);
    let O = Z();
    S(4, () => {
      ee(), (O == null ? void 0 : O.getAttribute("id")) === E && K(), P.emit();
    });
  }), group: (E) => (r.current.has(E) || r.current.set(E, /* @__PURE__ */ new Set()), () => {
    i.current.delete(E), r.current.delete(E);
  }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: y, inputId: C, labelId: x, listInnerRef: _ }), []);
  function D(E, I) {
    var O, M;
    let F = (M = (O = a.current) == null ? void 0 : O.filter) != null ? M : Bv;
    return E ? F(E, t.current.search, I) : 0;
  }
  function V() {
    if (!t.current.search || a.current.shouldFilter === !1) return;
    let E = t.current.filtered.items, I = [];
    t.current.filtered.groups.forEach((M) => {
      let F = r.current.get(M), q = 0;
      F.forEach((X) => {
        let B = E.get(X);
        q = Math.max(B, q);
      }), I.push([M, q]);
    });
    let O = _.current;
    ne().sort((M, F) => {
      var q, X;
      let B = M.getAttribute("id"), ae = F.getAttribute("id");
      return ((q = E.get(ae)) != null ? q : 0) - ((X = E.get(B)) != null ? X : 0);
    }).forEach((M) => {
      let F = M.closest(Ro);
      F ? F.appendChild(M.parentElement === F ? M : M.closest(`${Ro} > *`)) : O.appendChild(M.parentElement === O ? M : M.closest(`${Ro} > *`));
    }), I.sort((M, F) => F[1] - M[1]).forEach((M) => {
      var F;
      let q = (F = _.current) == null ? void 0 : F.querySelector(`${Ht}[${_t}="${encodeURIComponent(M[0])}"]`);
      q == null || q.parentElement.appendChild(q);
    });
  }
  function K() {
    let E = ne().find((O) => O.getAttribute("aria-disabled") !== "true"), I = E == null ? void 0 : E.getAttribute(_t);
    P.setState("value", I || void 0);
  }
  function ee() {
    var E, I, O, M;
    if (!t.current.search || a.current.shouldFilter === !1) {
      t.current.filtered.count = o.current.size;
      return;
    }
    t.current.filtered.groups = /* @__PURE__ */ new Set();
    let F = 0;
    for (let q of o.current) {
      let X = (I = (E = i.current.get(q)) == null ? void 0 : E.value) != null ? I : "", B = (M = (O = i.current.get(q)) == null ? void 0 : O.keywords) != null ? M : [], ae = D(X, B);
      t.current.filtered.items.set(q, ae), ae > 0 && F++;
    }
    for (let [q, X] of r.current) for (let B of X) if (t.current.filtered.items.get(B) > 0) {
      t.current.filtered.groups.add(q);
      break;
    }
    t.current.filtered.count = F;
  }
  function Q() {
    var E, I, O;
    let M = Z();
    M && (((E = M.parentElement) == null ? void 0 : E.firstChild) === M && ((O = (I = M.closest(Ht)) == null ? void 0 : I.querySelector(Hv)) == null || O.scrollIntoView({ block: "nearest" })), M.scrollIntoView({ block: "nearest" }));
  }
  function Z() {
    var E;
    return (E = _.current) == null ? void 0 : E.querySelector(`${wc}[aria-selected="true"]`);
  }
  function ne() {
    var E;
    return Array.from(((E = _.current) == null ? void 0 : E.querySelectorAll(Oi)) || []);
  }
  function k(E) {
    let I = ne()[E];
    I && P.setState("value", I.getAttribute(_t));
  }
  function G(E) {
    var I;
    let O = Z(), M = ne(), F = M.findIndex((X) => X === O), q = M[F + E];
    (I = a.current) != null && I.loop && (q = F + E < 0 ? M[M.length - 1] : F + E === M.length ? M[0] : M[F + E]), q && P.setState("value", q.getAttribute(_t));
  }
  function z(E) {
    let I = Z(), O = I == null ? void 0 : I.closest(Ht), M;
    for (; O && !M; ) O = E > 0 ? Zv(O, Ht) : Qv(O, Ht), M = O == null ? void 0 : O.querySelector(Oi);
    M ? P.setState("value", M.getAttribute(_t)) : G(E);
  }
  let T = () => k(ne().length - 1), A = (E) => {
    E.preventDefault(), E.metaKey ? T() : E.altKey ? z(1) : G(1);
  }, oe = (E) => {
    E.preventDefault(), E.metaKey ? k(0) : E.altKey ? z(-1) : G(-1);
  };
  return c.createElement(ut.div, { ref: n, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (E) => {
    var I;
    (I = b.onKeyDown) == null || I.call(b, E);
    let O = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || O)) switch (E.key) {
      case "n":
      case "j": {
        w && E.ctrlKey && A(E);
        break;
      }
      case "ArrowDown": {
        A(E);
        break;
      }
      case "p":
      case "k": {
        w && E.ctrlKey && oe(E);
        break;
      }
      case "ArrowUp": {
        oe(E);
        break;
      }
      case "Home": {
        E.preventDefault(), k(0);
        break;
      }
      case "End": {
        E.preventDefault(), T();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let M = Z();
        if (M) {
          let F = new Event(jo);
          M.dispatchEvent(F);
        }
      }
    }
  } }, c.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: tw }, l), ro(e, (E) => c.createElement(yc.Provider, { value: P }, c.createElement(bc.Provider, { value: R }, E))));
}), Gv = c.forwardRef((e, n) => {
  var t, o;
  let r = pe(), i = c.useRef(null), s = c.useContext(xc), a = rn(), l = Sc(e), u = (o = (t = l.current) == null ? void 0 : t.forceMount) != null ? o : s == null ? void 0 : s.forceMount;
  vt(() => {
    if (!u) return a.item(r, s == null ? void 0 : s.id);
  }, [u]);
  let f = Rc(r, i, [e.value, e.children, i], e.keywords), d = Lr(), g = it((S) => S.value && S.value === f.current), p = it((S) => u || a.filter() === !1 ? !0 : S.search ? S.filtered.items.get(r) > 0 : !0);
  c.useEffect(() => {
    let S = i.current;
    if (!(!S || e.disabled)) return S.addEventListener(jo, h), () => S.removeEventListener(jo, h);
  }, [p, e.onSelect, e.disabled]);
  function h() {
    var S, P;
    v(), (P = (S = l.current).onSelect) == null || P.call(S, f.current);
  }
  function v() {
    d.setState("value", f.current, !0);
  }
  if (!p) return null;
  let { disabled: w, value: b, onSelect: y, forceMount: x, keywords: C, ..._ } = e;
  return c.createElement(ut.div, { ref: be(i, n), ..._, id: r, "cmdk-item": "", role: "option", "aria-disabled": !!w, "aria-selected": !!g, "data-disabled": !!w, "data-selected": !!g, onPointerMove: w || a.getDisablePointerSelection() ? void 0 : v, onClick: w ? void 0 : h }, e.children);
}), Wv = c.forwardRef((e, n) => {
  let { heading: t, children: o, forceMount: r, ...i } = e, s = pe(), a = c.useRef(null), l = c.useRef(null), u = pe(), f = rn(), d = it((p) => r || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(s) : !0);
  vt(() => f.group(s), []), Rc(s, a, [e.value, e.heading, l]);
  let g = c.useMemo(() => ({ id: s, forceMount: r }), [r]);
  return c.createElement(ut.div, { ref: be(a, n), ...i, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, t && c.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, t), ro(e, (p) => c.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": t ? u : void 0 }, c.createElement(xc.Provider, { value: g }, p))));
}), jv = c.forwardRef((e, n) => {
  let { alwaysRender: t, ...o } = e, r = c.useRef(null), i = it((s) => !s.search);
  return !t && !i ? null : c.createElement(ut.div, { ref: be(r, n), ...o, "cmdk-separator": "", role: "separator" });
}), Uv = c.forwardRef((e, n) => {
  let { onValueChange: t, ...o } = e, r = e.value != null, i = Lr(), s = it((u) => u.search), a = it((u) => u.selectedItemId), l = rn();
  return c.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), c.createElement(ut.input, { ref: n, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": a, id: l.inputId, type: "text", value: r ? e.value : s, onChange: (u) => {
    r || i.setState("search", u.target.value), t == null || t(u.target.value);
  } });
}), Yv = c.forwardRef((e, n) => {
  let { children: t, label: o = "Suggestions", ...r } = e, i = c.useRef(null), s = c.useRef(null), a = it((u) => u.selectedItemId), l = rn();
  return c.useEffect(() => {
    if (s.current && i.current) {
      let u = s.current, f = i.current, d, g = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let p = u.offsetHeight;
          f.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return g.observe(u), () => {
        cancelAnimationFrame(d), g.unobserve(u);
      };
    }
  }, []), c.createElement(ut.div, { ref: be(i, n), ...r, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": o, id: l.listId }, ro(e, (u) => c.createElement("div", { ref: be(s, l.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), Kv = c.forwardRef((e, n) => {
  let { open: t, onOpenChange: o, overlayClassName: r, contentClassName: i, container: s, ...a } = e;
  return c.createElement(xa, { open: t, onOpenChange: o }, c.createElement(Ca, { container: s }, c.createElement(xr, { "cmdk-overlay": "", className: r }), c.createElement(Cr, { "aria-label": e.label, "cmdk-dialog": "", className: i }, c.createElement(Cc, { ref: n, ...a }))));
}), Xv = c.forwardRef((e, n) => it((t) => t.filtered.count === 0) ? c.createElement(ut.div, { ref: n, ...e, "cmdk-empty": "", role: "presentation" }) : null), qv = c.forwardRef((e, n) => {
  let { progress: t, children: o, label: r = "Loading...", ...i } = e;
  return c.createElement(ut.div, { ref: n, ...i, "cmdk-loading": "", role: "progressbar", "aria-valuenow": t, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": r }, ro(e, (s) => c.createElement("div", { "aria-hidden": !0 }, s)));
}), ye = Object.assign(Cc, { List: Yv, Item: Gv, Input: Uv, Group: Wv, Separator: jv, Dialog: Kv, Empty: Xv, Loading: qv });
function Zv(e, n) {
  let t = e.nextElementSibling;
  for (; t; ) {
    if (t.matches(n)) return t;
    t = t.nextElementSibling;
  }
}
function Qv(e, n) {
  let t = e.previousElementSibling;
  for (; t; ) {
    if (t.matches(n)) return t;
    t = t.previousElementSibling;
  }
}
function Sc(e) {
  let n = c.useRef(e);
  return vt(() => {
    n.current = e;
  }), n;
}
var vt = typeof window > "u" ? c.useEffect : c.useLayoutEffect;
function Pt(e) {
  let n = c.useRef();
  return n.current === void 0 && (n.current = e()), n;
}
function it(e) {
  let n = Lr(), t = () => e(n.snapshot());
  return c.useSyncExternalStore(n.subscribe, t, t);
}
function Rc(e, n, t, o = []) {
  let r = c.useRef(), i = rn();
  return vt(() => {
    var s;
    let a = (() => {
      var u;
      for (let f of t) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (u = f.current.textContent) == null ? void 0 : u.trim() : r.current;
      }
    })(), l = o.map((u) => u.trim());
    i.value(e, a, l), (s = n.current) == null || s.setAttribute(_t, a), r.current = a;
  }), r;
}
var Jv = () => {
  let [e, n] = c.useState(), t = Pt(() => /* @__PURE__ */ new Map());
  return vt(() => {
    t.current.forEach((o) => o()), t.current = /* @__PURE__ */ new Map();
  }, [e]), (o, r) => {
    t.current.set(o, r), n({});
  };
};
function ew(e) {
  let n = e.type;
  return typeof n == "function" ? n(e.props) : "render" in n ? n.render(e.props) : e;
}
function ro({ asChild: e, children: n }, t) {
  return e && c.isValidElement(n) ? c.cloneElement(ew(n), { ref: n.ref }, t(n.props.children)) : t(n);
}
var tw = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Ec = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  ye,
  {
    ref: t,
    className: Y(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e
    ),
    ...n
  }
));
Ec.displayName = ye.displayName;
const nw = ({
  title: e = "Command Palette",
  description: n = "Search for commands",
  children: t,
  ...o
}) => /* @__PURE__ */ m(im, { ...o, children: /* @__PURE__ */ W(Ia, { className: "overflow-hidden p-0 shadow-lg", children: [
  /* @__PURE__ */ W(ka, { className: "sr-only", children: [
    /* @__PURE__ */ m(Ta, { children: e }),
    /* @__PURE__ */ m(Da, { children: n })
  ] }),
  /* @__PURE__ */ m(Ec, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t })
] }) }), _c = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ W("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ m(Ma, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ m(
    ye.Input,
    {
      ref: t,
      className: Y(
        "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n
    }
  )
] }));
_c.displayName = ye.Input.displayName;
const Pc = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  ye.List,
  {
    ref: t,
    className: Y("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...n
  }
));
Pc.displayName = ye.List.displayName;
const Mc = c.forwardRef((e, n) => /* @__PURE__ */ m(
  ye.Empty,
  {
    ref: n,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Mc.displayName = ye.Empty.displayName;
const Ac = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  ye.Group,
  {
    ref: t,
    className: Y(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e
    ),
    ...n
  }
));
Ac.displayName = ye.Group.displayName;
const Nc = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  ye.Separator,
  {
    ref: t,
    className: Y("-mx-1 h-px bg-border", e),
    ...n
  }
));
Nc.displayName = ye.Separator.displayName;
const Ic = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  ye.Item,
  {
    ref: t,
    className: Y(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...n
  }
));
Ic.displayName = ye.Item.displayName;
const kc = ({ className: e, ...n }) => /* @__PURE__ */ m(
  "span",
  {
    className: Y(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      e
    ),
    ...n
  }
);
kc.displayName = "CommandShortcut";
const Tc = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m("div", { "data-slot": "table-container", className: "relative w-full overflow-auto", children: /* @__PURE__ */ m(
  "table",
  {
    ref: t,
    "data-slot": "table",
    className: Y("w-full caption-bottom text-sm", e),
    ...n
  }
) }));
Tc.displayName = "Table";
const Dc = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m("thead", { ref: t, "data-slot": "table-header", className: Y("[&_tr]:border-b", e), ...n }));
Dc.displayName = "TableHeader";
const Oc = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  "tbody",
  {
    ref: t,
    "data-slot": "table-body",
    className: Y("[&_tr:last-child]:border-0", e),
    ...n
  }
));
Oc.displayName = "TableBody";
const ow = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  "tfoot",
  {
    ref: t,
    "data-slot": "table-footer",
    className: Y("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
    ...n
  }
));
ow.displayName = "TableFooter";
const _n = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  "tr",
  {
    ref: t,
    "data-slot": "table-row",
    className: Y(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      e
    ),
    ...n
  }
));
_n.displayName = "TableRow";
const Fc = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  "th",
  {
    ref: t,
    "data-slot": "table-head",
    className: Y(
      "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...n
  }
));
Fc.displayName = "TableHead";
const Uo = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  "td",
  {
    ref: t,
    "data-slot": "table-cell",
    className: Y(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...n
  }
));
Uo.displayName = "TableCell";
const rw = c.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ m(
  "caption",
  {
    ref: t,
    "data-slot": "table-caption",
    className: Y("text-muted-foreground mt-4 text-sm", e),
    ...n
  }
));
rw.displayName = "TableCaption";
function iw(e) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], t = document.createElement("style");
  t.type = "text/css", n.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
const sw = (e) => {
  switch (e) {
    case "success":
      return cw;
    case "info":
      return dw;
    case "warning":
      return uw;
    case "error":
      return fw;
    default:
      return null;
  }
}, aw = Array(12).fill(0), lw = ({ visible: e, className: n }) => /* @__PURE__ */ N.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    n
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ N.createElement("div", {
  className: "sonner-spinner"
}, aw.map((t, o) => /* @__PURE__ */ N.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${o}`
})))), cw = /* @__PURE__ */ N.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ N.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), uw = /* @__PURE__ */ N.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ N.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), dw = /* @__PURE__ */ N.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ N.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), fw = /* @__PURE__ */ N.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ N.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), pw = /* @__PURE__ */ N.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ N.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ N.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), gw = () => {
  const [e, n] = N.useState(document.hidden);
  return N.useEffect(() => {
    const t = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), e;
};
let Yo = 1;
class mw {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      const t = this.subscribers.indexOf(n);
      this.subscribers.splice(t, 1);
    }), this.publish = (n) => {
      this.subscribers.forEach((t) => t(n));
    }, this.addToast = (n) => {
      this.publish(n), this.toasts = [
        ...this.toasts,
        n
      ];
    }, this.create = (n) => {
      var t;
      const { message: o, ...r } = n, i = typeof (n == null ? void 0 : n.id) == "number" || ((t = n.id) == null ? void 0 : t.length) > 0 ? n.id : Yo++, s = this.toasts.find((l) => l.id === i), a = n.dismissible === void 0 ? !0 : n.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map((l) => l.id === i ? (this.publish({
        ...l,
        ...n,
        id: i,
        title: o
      }), {
        ...l,
        ...n,
        id: i,
        dismissible: a,
        title: o
      }) : l) : this.addToast({
        title: o,
        ...r,
        dismissible: a,
        id: i
      }), i;
    }, this.dismiss = (n) => (n ? (this.dismissedToasts.add(n), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
      id: n,
      dismiss: !0
    })))) : this.toasts.forEach((t) => {
      this.subscribers.forEach((o) => o({
        id: t.id,
        dismiss: !0
      }));
    }), n), this.message = (n, t) => this.create({
      ...t,
      message: n
    }), this.error = (n, t) => this.create({
      ...t,
      message: n,
      type: "error"
    }), this.success = (n, t) => this.create({
      ...t,
      type: "success",
      message: n
    }), this.info = (n, t) => this.create({
      ...t,
      type: "info",
      message: n
    }), this.warning = (n, t) => this.create({
      ...t,
      type: "warning",
      message: n
    }), this.loading = (n, t) => this.create({
      ...t,
      type: "loading",
      message: n
    }), this.promise = (n, t) => {
      if (!t)
        return;
      let o;
      t.loading !== void 0 && (o = this.create({
        ...t,
        promise: n,
        type: "loading",
        message: t.loading,
        description: typeof t.description != "function" ? t.description : void 0
      }));
      const r = Promise.resolve(n instanceof Function ? n() : n);
      let i = o !== void 0, s;
      const a = r.then(async (u) => {
        if (s = [
          "resolve",
          u
        ], N.isValidElement(u))
          i = !1, this.create({
            id: o,
            type: "default",
            message: u
          });
        else if (vw(u) && !u.ok) {
          i = !1;
          const d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${u.status}`) : t.error, g = typeof t.description == "function" ? await t.description(`HTTP error! status: ${u.status}`) : t.description, h = typeof d == "object" && !N.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: o,
            type: "error",
            description: g,
            ...h
          });
        } else if (u instanceof Error) {
          i = !1;
          const d = typeof t.error == "function" ? await t.error(u) : t.error, g = typeof t.description == "function" ? await t.description(u) : t.description, h = typeof d == "object" && !N.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: o,
            type: "error",
            description: g,
            ...h
          });
        } else if (t.success !== void 0) {
          i = !1;
          const d = typeof t.success == "function" ? await t.success(u) : t.success, g = typeof t.description == "function" ? await t.description(u) : t.description, h = typeof d == "object" && !N.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: o,
            type: "success",
            description: g,
            ...h
          });
        }
      }).catch(async (u) => {
        if (s = [
          "reject",
          u
        ], t.error !== void 0) {
          i = !1;
          const f = typeof t.error == "function" ? await t.error(u) : t.error, d = typeof t.description == "function" ? await t.description(u) : t.description, p = typeof f == "object" && !N.isValidElement(f) ? f : {
            message: f
          };
          this.create({
            id: o,
            type: "error",
            description: d,
            ...p
          });
        }
      }).finally(() => {
        i && (this.dismiss(o), o = void 0), t.finally == null || t.finally.call(t);
      }), l = () => new Promise((u, f) => a.then(() => s[0] === "reject" ? f(s[1]) : u(s[1])).catch(f));
      return typeof o != "string" && typeof o != "number" ? {
        unwrap: l
      } : Object.assign(o, {
        unwrap: l
      });
    }, this.custom = (n, t) => {
      const o = (t == null ? void 0 : t.id) || Yo++;
      return this.create({
        jsx: n(o),
        id: o,
        ...t
      }), o;
    }, this.getActiveToasts = () => this.toasts.filter((n) => !this.dismissedToasts.has(n.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const we = new mw(), hw = (e, n) => {
  const t = (n == null ? void 0 : n.id) || Yo++;
  return we.addToast({
    title: e,
    ...n,
    id: t
  }), t;
}, vw = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", ww = hw, bw = () => we.toasts, yw = () => we.getActiveToasts();
Object.assign(ww, {
  success: we.success,
  info: we.info,
  warning: we.warning,
  error: we.error,
  custom: we.custom,
  message: we.message,
  promise: we.promise,
  dismiss: we.dismiss,
  loading: we.loading
}, {
  getHistory: bw,
  getToasts: yw
});
iw("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function bn(e) {
  return e.label !== void 0;
}
const xw = 3, Cw = "24px", Sw = "16px", Fi = 4e3, Rw = 356, Ew = 14, _w = 45, Pw = 200;
function Ve(...e) {
  return e.filter(Boolean).join(" ");
}
function Mw(e) {
  const [n, t] = e.split("-"), o = [];
  return n && o.push(n), t && o.push(t), o;
}
const Aw = (e) => {
  var n, t, o, r, i, s, a, l, u;
  const { invert: f, toast: d, unstyled: g, interacting: p, setHeights: h, visibleToasts: v, heights: w, index: b, toasts: y, expanded: x, removeToast: C, defaultRichColors: _, closeButton: S, style: P, cancelButtonStyle: R, actionButtonStyle: D, className: V = "", descriptionClassName: K = "", duration: ee, position: Q, gap: Z, expandByDefault: ne, classNames: k, icons: G, closeButtonAriaLabel: z = "Close toast" } = e, [T, A] = N.useState(null), [oe, E] = N.useState(null), [I, O] = N.useState(!1), [M, F] = N.useState(!1), [q, X] = N.useState(!1), [B, ae] = N.useState(!1), [_e, he] = N.useState(!1), [Ie, ke] = N.useState(0), [so, sn] = N.useState(0), dt = N.useRef(d.duration || ee || Fi), an = N.useRef(null), ve = N.useRef(null), Xc = b === 0, qc = b + 1 <= v, xe = d.type, yt = d.dismissible !== !1, Zc = d.className || "", Qc = d.descriptionClassName || "", ln = N.useMemo(() => w.findIndex((J) => J.toastId === d.id) || 0, [
    w,
    d.id
  ]), Jc = N.useMemo(() => {
    var J;
    return (J = d.closeButton) != null ? J : S;
  }, [
    d.closeButton,
    S
  ]), Gr = N.useMemo(() => d.duration || ee || Fi, [
    d.duration,
    ee
  ]), ao = N.useRef(0), xt = N.useRef(0), Wr = N.useRef(0), Ct = N.useRef(null), [eu, tu] = Q.split("-"), jr = N.useMemo(() => w.reduce((J, le, de) => de >= ln ? J : J + le.height, 0), [
    w,
    ln
  ]), Ur = gw(), nu = d.invert || f, lo = xe === "loading";
  xt.current = N.useMemo(() => ln * Z + jr, [
    ln,
    jr
  ]), N.useEffect(() => {
    dt.current = Gr;
  }, [
    Gr
  ]), N.useEffect(() => {
    O(!0);
  }, []), N.useEffect(() => {
    const J = ve.current;
    if (J) {
      const le = J.getBoundingClientRect().height;
      return sn(le), h((de) => [
        {
          toastId: d.id,
          height: le,
          position: d.position
        },
        ...de
      ]), () => h((de) => de.filter((Ce) => Ce.toastId !== d.id));
    }
  }, [
    h,
    d.id
  ]), N.useLayoutEffect(() => {
    if (!I) return;
    const J = ve.current, le = J.style.height;
    J.style.height = "auto";
    const de = J.getBoundingClientRect().height;
    J.style.height = le, sn(de), h((Ce) => Ce.find((ce) => ce.toastId === d.id) ? Ce.map((ce) => ce.toastId === d.id ? {
      ...ce,
      height: de
    } : ce) : [
      {
        toastId: d.id,
        height: de,
        position: d.position
      },
      ...Ce
    ]);
  }, [
    I,
    d.title,
    d.description,
    h,
    d.id,
    d.jsx,
    d.action,
    d.cancel
  ]);
  const Qe = N.useCallback(() => {
    F(!0), ke(xt.current), h((J) => J.filter((le) => le.toastId !== d.id)), setTimeout(() => {
      C(d);
    }, Pw);
  }, [
    d,
    C,
    h,
    xt
  ]);
  N.useEffect(() => {
    if (d.promise && xe === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let J;
    return x || p || Ur ? (() => {
      if (Wr.current < ao.current) {
        const Ce = (/* @__PURE__ */ new Date()).getTime() - ao.current;
        dt.current = dt.current - Ce;
      }
      Wr.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      dt.current !== 1 / 0 && (ao.current = (/* @__PURE__ */ new Date()).getTime(), J = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), Qe();
      }, dt.current));
    })(), () => clearTimeout(J);
  }, [
    x,
    p,
    d,
    xe,
    Ur,
    Qe
  ]), N.useEffect(() => {
    d.delete && (Qe(), d.onDismiss == null || d.onDismiss.call(d, d));
  }, [
    Qe,
    d.delete
  ]);
  function ou() {
    var J;
    if (G != null && G.loading) {
      var le;
      return /* @__PURE__ */ N.createElement("div", {
        className: Ve(k == null ? void 0 : k.loader, d == null || (le = d.classNames) == null ? void 0 : le.loader, "sonner-loader"),
        "data-visible": xe === "loading"
      }, G.loading);
    }
    return /* @__PURE__ */ N.createElement(lw, {
      className: Ve(k == null ? void 0 : k.loader, d == null || (J = d.classNames) == null ? void 0 : J.loader),
      visible: xe === "loading"
    });
  }
  const ru = d.icon || (G == null ? void 0 : G[xe]) || sw(xe);
  var Yr, Kr;
  return /* @__PURE__ */ N.createElement("li", {
    tabIndex: 0,
    ref: ve,
    className: Ve(V, Zc, k == null ? void 0 : k.toast, d == null || (n = d.classNames) == null ? void 0 : n.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[xe], d == null || (t = d.classNames) == null ? void 0 : t[xe]),
    "data-sonner-toast": "",
    "data-rich-colors": (Yr = d.richColors) != null ? Yr : _,
    "data-styled": !(d.jsx || d.unstyled || g),
    "data-mounted": I,
    "data-promise": !!d.promise,
    "data-swiped": _e,
    "data-removed": M,
    "data-visible": qc,
    "data-y-position": eu,
    "data-x-position": tu,
    "data-index": b,
    "data-front": Xc,
    "data-swiping": q,
    "data-dismissible": yt,
    "data-type": xe,
    "data-invert": nu,
    "data-swipe-out": B,
    "data-swipe-direction": oe,
    "data-expanded": !!(x || ne && I),
    "data-testid": d.testId,
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": y.length - b,
      "--offset": `${M ? Ie : xt.current}px`,
      "--initial-height": ne ? "auto" : `${so}px`,
      ...P,
      ...d.style
    },
    onDragEnd: () => {
      X(!1), A(null), Ct.current = null;
    },
    onPointerDown: (J) => {
      J.button !== 2 && (lo || !yt || (an.current = /* @__PURE__ */ new Date(), ke(xt.current), J.target.setPointerCapture(J.pointerId), J.target.tagName !== "BUTTON" && (X(!0), Ct.current = {
        x: J.clientX,
        y: J.clientY
      })));
    },
    onPointerUp: () => {
      var J, le, de;
      if (B || !yt) return;
      Ct.current = null;
      const Ce = Number(((J = ve.current) == null ? void 0 : J.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), cn = Number(((le = ve.current) == null ? void 0 : le.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), ce = (/* @__PURE__ */ new Date()).getTime() - ((de = an.current) == null ? void 0 : de.getTime()), Pe = T === "x" ? Ce : cn, un = Math.abs(Pe) / ce;
      if (Math.abs(Pe) >= _w || un > 0.11) {
        ke(xt.current), d.onDismiss == null || d.onDismiss.call(d, d), E(T === "x" ? Ce > 0 ? "right" : "left" : cn > 0 ? "down" : "up"), Qe(), ae(!0);
        return;
      } else {
        var Te, De;
        (Te = ve.current) == null || Te.style.setProperty("--swipe-amount-x", "0px"), (De = ve.current) == null || De.style.setProperty("--swipe-amount-y", "0px");
      }
      he(!1), X(!1), A(null);
    },
    onPointerMove: (J) => {
      var le, de, Ce;
      if (!Ct.current || !yt || ((le = window.getSelection()) == null ? void 0 : le.toString().length) > 0) return;
      const ce = J.clientY - Ct.current.y, Pe = J.clientX - Ct.current.x;
      var un;
      const Te = (un = e.swipeDirections) != null ? un : Mw(Q);
      !T && (Math.abs(Pe) > 1 || Math.abs(ce) > 1) && A(Math.abs(Pe) > Math.abs(ce) ? "x" : "y");
      let De = {
        x: 0,
        y: 0
      };
      const Xr = (ft) => 1 / (1.5 + Math.abs(ft) / 20);
      if (T === "y") {
        if (Te.includes("top") || Te.includes("bottom"))
          if (Te.includes("top") && ce < 0 || Te.includes("bottom") && ce > 0)
            De.y = ce;
          else {
            const ft = ce * Xr(ce);
            De.y = Math.abs(ft) < Math.abs(ce) ? ft : ce;
          }
      } else if (T === "x" && (Te.includes("left") || Te.includes("right")))
        if (Te.includes("left") && Pe < 0 || Te.includes("right") && Pe > 0)
          De.x = Pe;
        else {
          const ft = Pe * Xr(Pe);
          De.x = Math.abs(ft) < Math.abs(Pe) ? ft : Pe;
        }
      (Math.abs(De.x) > 0 || Math.abs(De.y) > 0) && he(!0), (de = ve.current) == null || de.style.setProperty("--swipe-amount-x", `${De.x}px`), (Ce = ve.current) == null || Ce.style.setProperty("--swipe-amount-y", `${De.y}px`);
    }
  }, Jc && !d.jsx && xe !== "loading" ? /* @__PURE__ */ N.createElement("button", {
    "aria-label": z,
    "data-disabled": lo,
    "data-close-button": !0,
    onClick: lo || !yt ? () => {
    } : () => {
      Qe(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: Ve(k == null ? void 0 : k.closeButton, d == null || (o = d.classNames) == null ? void 0 : o.closeButton)
  }, (Kr = G == null ? void 0 : G.close) != null ? Kr : pw) : null, (xe || d.icon || d.promise) && d.icon !== null && ((G == null ? void 0 : G[xe]) !== null || d.icon) ? /* @__PURE__ */ N.createElement("div", {
    "data-icon": "",
    className: Ve(k == null ? void 0 : k.icon, d == null || (r = d.classNames) == null ? void 0 : r.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || ou() : null, d.type !== "loading" ? ru : null) : null, /* @__PURE__ */ N.createElement("div", {
    "data-content": "",
    className: Ve(k == null ? void 0 : k.content, d == null || (i = d.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ N.createElement("div", {
    "data-title": "",
    className: Ve(k == null ? void 0 : k.title, d == null || (s = d.classNames) == null ? void 0 : s.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ N.createElement("div", {
    "data-description": "",
    className: Ve(K, Qc, k == null ? void 0 : k.description, d == null || (a = d.classNames) == null ? void 0 : a.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ N.isValidElement(d.cancel) ? d.cancel : d.cancel && bn(d.cancel) ? /* @__PURE__ */ N.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || R,
    onClick: (J) => {
      bn(d.cancel) && yt && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, J), Qe());
    },
    className: Ve(k == null ? void 0 : k.cancelButton, d == null || (l = d.classNames) == null ? void 0 : l.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ N.isValidElement(d.action) ? d.action : d.action && bn(d.action) ? /* @__PURE__ */ N.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || D,
    onClick: (J) => {
      bn(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, J), !J.defaultPrevented && Qe());
    },
    className: Ve(k == null ? void 0 : k.actionButton, d == null || (u = d.classNames) == null ? void 0 : u.actionButton)
  }, d.action.label) : null);
};
function $i() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Nw(e, n) {
  const t = {};
  return [
    e,
    n
  ].forEach((o, r) => {
    const i = r === 1, s = i ? "--mobile-offset" : "--offset", a = i ? Sw : Cw;
    function l(u) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        t[`${s}-${f}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof o == "number" || typeof o == "string" ? l(o) : typeof o == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((u) => {
      o[u] === void 0 ? t[`${s}-${u}`] = a : t[`${s}-${u}`] = typeof o[u] == "number" ? `${o[u]}px` : o[u];
    }) : l(a);
  }), t;
}
const Iw = /* @__PURE__ */ N.forwardRef(function(n, t) {
  const { id: o, invert: r, position: i = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: l, className: u, offset: f, mobileOffset: d, theme: g = "light", richColors: p, duration: h, style: v, visibleToasts: w = xw, toastOptions: b, dir: y = $i(), gap: x = Ew, icons: C, containerAriaLabel: _ = "Notifications" } = n, [S, P] = N.useState([]), R = N.useMemo(() => o ? S.filter((I) => I.toasterId === o) : S.filter((I) => !I.toasterId), [
    S,
    o
  ]), D = N.useMemo(() => Array.from(new Set([
    i
  ].concat(R.filter((I) => I.position).map((I) => I.position)))), [
    R,
    i
  ]), [V, K] = N.useState([]), [ee, Q] = N.useState(!1), [Z, ne] = N.useState(!1), [k, G] = N.useState(g !== "system" ? g : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), z = N.useRef(null), T = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), A = N.useRef(null), oe = N.useRef(!1), E = N.useCallback((I) => {
    P((O) => {
      var M;
      return (M = O.find((F) => F.id === I.id)) != null && M.delete || we.dismiss(I.id), O.filter(({ id: F }) => F !== I.id);
    });
  }, []);
  return N.useEffect(() => we.subscribe((I) => {
    if (I.dismiss) {
      requestAnimationFrame(() => {
        P((O) => O.map((M) => M.id === I.id ? {
          ...M,
          delete: !0
        } : M));
      });
      return;
    }
    setTimeout(() => {
      ji.flushSync(() => {
        P((O) => {
          const M = O.findIndex((F) => F.id === I.id);
          return M !== -1 ? [
            ...O.slice(0, M),
            {
              ...O[M],
              ...I
            },
            ...O.slice(M + 1)
          ] : [
            I,
            ...O
          ];
        });
      });
    });
  }), [
    S
  ]), N.useEffect(() => {
    if (g !== "system") {
      G(g);
      return;
    }
    if (g === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? G("dark") : G("light")), typeof window > "u") return;
    const I = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      I.addEventListener("change", ({ matches: O }) => {
        G(O ? "dark" : "light");
      });
    } catch {
      I.addListener(({ matches: M }) => {
        try {
          G(M ? "dark" : "light");
        } catch (F) {
          console.error(F);
        }
      });
    }
  }, [
    g
  ]), N.useEffect(() => {
    S.length <= 1 && Q(!1);
  }, [
    S
  ]), N.useEffect(() => {
    const I = (O) => {
      var M;
      if (s.every((X) => O[X] || O.code === X)) {
        var q;
        Q(!0), (q = z.current) == null || q.focus();
      }
      O.code === "Escape" && (document.activeElement === z.current || (M = z.current) != null && M.contains(document.activeElement)) && Q(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [
    s
  ]), N.useEffect(() => {
    if (z.current)
      return () => {
        A.current && (A.current.focus({
          preventScroll: !0
        }), A.current = null, oe.current = !1);
      };
  }, [
    z.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ N.createElement("section", {
    ref: t,
    "aria-label": `${_} ${T}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, D.map((I, O) => {
    var M;
    const [F, q] = I.split("-");
    return R.length ? /* @__PURE__ */ N.createElement("ol", {
      key: I,
      dir: y === "auto" ? $i() : y,
      tabIndex: -1,
      ref: z,
      className: u,
      "data-sonner-toaster": !0,
      "data-sonner-theme": k,
      "data-y-position": F,
      "data-x-position": q,
      style: {
        "--front-toast-height": `${((M = V[0]) == null ? void 0 : M.height) || 0}px`,
        "--width": `${Rw}px`,
        "--gap": `${x}px`,
        ...v,
        ...Nw(f, d)
      },
      onBlur: (X) => {
        oe.current && !X.currentTarget.contains(X.relatedTarget) && (oe.current = !1, A.current && (A.current.focus({
          preventScroll: !0
        }), A.current = null));
      },
      onFocus: (X) => {
        X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || oe.current || (oe.current = !0, A.current = X.relatedTarget);
      },
      onMouseEnter: () => Q(!0),
      onMouseMove: () => Q(!0),
      onMouseLeave: () => {
        Z || Q(!1);
      },
      onDragEnd: () => Q(!1),
      onPointerDown: (X) => {
        X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || ne(!0);
      },
      onPointerUp: () => ne(!1)
    }, R.filter((X) => !X.position && O === 0 || X.position === I).map((X, B) => {
      var ae, _e;
      return /* @__PURE__ */ N.createElement(Aw, {
        key: X.id,
        icons: C,
        index: B,
        toast: X,
        defaultRichColors: p,
        duration: (ae = b == null ? void 0 : b.duration) != null ? ae : h,
        className: b == null ? void 0 : b.className,
        descriptionClassName: b == null ? void 0 : b.descriptionClassName,
        invert: r,
        visibleToasts: w,
        closeButton: (_e = b == null ? void 0 : b.closeButton) != null ? _e : l,
        interacting: Z,
        position: I,
        style: b == null ? void 0 : b.style,
        unstyled: b == null ? void 0 : b.unstyled,
        classNames: b == null ? void 0 : b.classNames,
        cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle,
        actionButtonStyle: b == null ? void 0 : b.actionButtonStyle,
        closeButtonAriaLabel: b == null ? void 0 : b.closeButtonAriaLabel,
        removeToast: E,
        toasts: R.filter((he) => he.position == X.position),
        heights: V.filter((he) => he.position == X.position),
        setHeights: K,
        expandByDefault: a,
        gap: x,
        expanded: ee,
        swipeDirections: n.swipeDirections
      });
    })) : null;
  }));
}), Ub = ({ ...e }) => /* @__PURE__ */ m(
  Iw,
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
function nt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ee(e, n) {
  return (t) => {
    n.setState((o) => ({
      ...o,
      [e]: nt(t, o[e])
    }));
  };
}
function io(e) {
  return e instanceof Function;
}
function kw(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function Tw(e, n) {
  const t = [], o = (r) => {
    r.forEach((i) => {
      t.push(i);
      const s = n(i);
      s != null && s.length && o(s);
    });
  };
  return o(e), t;
}
function j(e, n, t) {
  let o = [], r;
  return (i) => {
    let s;
    t.key && t.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== o.length || a.some((f, d) => o[d] !== f)))
      return r;
    o = a;
    let u;
    if (t.key && t.debug && (u = Date.now()), r = n(...a), t == null || t.onChange == null || t.onChange(r), t.key && t.debug && t != null && t.debug()) {
      const f = Math.round((Date.now() - s) * 100) / 100, d = Math.round((Date.now() - u) * 100) / 100, g = d / 16, p = (h, v) => {
        for (h = String(h); h.length < v; )
          h = " " + h;
        return h;
      };
      console.info(`%c⏱ ${p(d, 5)} /${p(f, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return r;
  };
}
function U(e, n, t, o) {
  return {
    debug: () => {
      var r;
      return (r = e == null ? void 0 : e.debugAll) != null ? r : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: o
  };
}
function Dw(e, n, t, o) {
  const r = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(o),
    renderValue: r,
    getContext: j(() => [e, t, n, i], (s, a, l, u) => ({
      table: s,
      column: a,
      row: l,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), U(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, t, n, e);
  }, {}), i;
}
function Ow(e, n, t, o) {
  var r, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...n
  }, l = a.accessorKey;
  let u = (r = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? r : typeof a.header == "string" ? a.header : void 0, f;
  if (a.accessorFn ? f = a.accessorFn : l && (l.includes(".") ? f = (g) => {
    let p = g;
    for (const v of l.split(".")) {
      var h;
      p = (h = p) == null ? void 0 : h[v], process.env.NODE_ENV !== "production" && p === void 0 && console.warn(`"${v}" in deeply nested key "${l}" returned undefined.`);
    }
    return p;
  } : f = (g) => g[a.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(u)}`,
    accessorFn: f,
    parent: o,
    depth: t,
    columnDef: a,
    columns: [],
    getFlatColumns: j(() => [!0], () => {
      var g;
      return [d, ...(g = d.columns) == null ? void 0 : g.flatMap((p) => p.getFlatColumns())];
    }, U(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: j(() => [e._getOrderColumnsFn()], (g) => {
      var p;
      if ((p = d.columns) != null && p.length) {
        let h = d.columns.flatMap((v) => v.getLeafColumns());
        return g(h);
      }
      return [d];
    }, U(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const g of e._features)
    g.createColumn == null || g.createColumn(d, e);
  return d;
}
const fe = "debugHeaders";
function Li(e, n, t) {
  var o;
  let i = {
    id: (o = t.id) != null ? o : n.id,
    column: n,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const s = [], a = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(a), s.push(l);
      };
      return a(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: n
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const Fw = {
  createTable: (e) => {
    e.getHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, o, r) => {
      var i, s;
      const a = (i = o == null ? void 0 : o.map((d) => t.find((g) => g.id === d)).filter(Boolean)) != null ? i : [], l = (s = r == null ? void 0 : r.map((d) => t.find((g) => g.id === d)).filter(Boolean)) != null ? s : [], u = t.filter((d) => !(o != null && o.includes(d.id)) && !(r != null && r.includes(d.id)));
      return yn(n, [...a, ...u, ...l], e);
    }, U(e.options, fe, "getHeaderGroups")), e.getCenterHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, o, r) => (t = t.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), yn(n, t, e, "center")), U(e.options, fe, "getCenterHeaderGroups")), e.getLeftHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, o) => {
      var r;
      const i = (r = o == null ? void 0 : o.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? r : [];
      return yn(n, i, e, "left");
    }, U(e.options, fe, "getLeftHeaderGroups")), e.getRightHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, o) => {
      var r;
      const i = (r = o == null ? void 0 : o.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? r : [];
      return yn(n, i, e, "right");
    }, U(e.options, fe, "getRightHeaderGroups")), e.getFooterGroups = j(() => [e.getHeaderGroups()], (n) => [...n].reverse(), U(e.options, fe, "getFooterGroups")), e.getLeftFooterGroups = j(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), U(e.options, fe, "getLeftFooterGroups")), e.getCenterFooterGroups = j(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), U(e.options, fe, "getCenterFooterGroups")), e.getRightFooterGroups = j(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), U(e.options, fe, "getRightFooterGroups")), e.getFlatHeaders = j(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, fe, "getFlatHeaders")), e.getLeftFlatHeaders = j(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, fe, "getLeftFlatHeaders")), e.getCenterFlatHeaders = j(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, fe, "getCenterFlatHeaders")), e.getRightFlatHeaders = j(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), U(e.options, fe, "getRightFlatHeaders")), e.getCenterLeafHeaders = j(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var o;
      return !((o = t.subHeaders) != null && o.length);
    }), U(e.options, fe, "getCenterLeafHeaders")), e.getLeftLeafHeaders = j(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var o;
      return !((o = t.subHeaders) != null && o.length);
    }), U(e.options, fe, "getLeftLeafHeaders")), e.getRightLeafHeaders = j(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var o;
      return !((o = t.subHeaders) != null && o.length);
    }), U(e.options, fe, "getRightLeafHeaders")), e.getLeafHeaders = j(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, o) => {
      var r, i, s, a, l, u;
      return [...(r = (i = n[0]) == null ? void 0 : i.headers) != null ? r : [], ...(s = (a = t[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (u = o[0]) == null ? void 0 : u.headers) != null ? l : []].map((f) => f.getLeafHeaders()).flat();
    }, U(e.options, fe, "getLeafHeaders"));
  }
};
function yn(e, n, t, o) {
  var r, i;
  let s = 0;
  const a = function(g, p) {
    p === void 0 && (p = 1), s = Math.max(s, p), g.filter((h) => h.getIsVisible()).forEach((h) => {
      var v;
      (v = h.columns) != null && v.length && a(h.columns, p + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const u = (g, p) => {
    const h = {
      depth: p,
      id: [o, `${p}`].filter(Boolean).join("_"),
      headers: []
    }, v = [];
    g.forEach((w) => {
      const b = [...v].reverse()[0], y = w.column.depth === h.depth;
      let x, C = !1;
      if (y && w.column.parent ? x = w.column.parent : (x = w.column, C = !0), b && (b == null ? void 0 : b.column) === x)
        b.subHeaders.push(w);
      else {
        const _ = Li(t, x, {
          id: [o, p, x.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${v.filter((S) => S.column === x).length}` : void 0,
          depth: p,
          index: v.length
        });
        _.subHeaders.push(w), v.push(_);
      }
      h.headers.push(w), w.headerGroup = h;
    }), l.push(h), p > 0 && u(v, p - 1);
  }, f = n.map((g, p) => Li(t, g, {
    depth: s,
    index: p
  }));
  u(f, s - 1), l.reverse();
  const d = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
    let v = 0, w = 0, b = [0];
    h.subHeaders && h.subHeaders.length ? (b = [], d(h.subHeaders).forEach((x) => {
      let {
        colSpan: C,
        rowSpan: _
      } = x;
      v += C, b.push(_);
    })) : v = 1;
    const y = Math.min(...b);
    return w = w + y, h.colSpan = v, h.rowSpan = w, {
      colSpan: v,
      rowSpan: w
    };
  });
  return d((r = (i = l[0]) == null ? void 0 : i.headers) != null ? r : []), l;
}
const Vr = (e, n, t, o, r, i, s) => {
  let a = {
    id: n,
    index: o,
    original: t,
    depth: r,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (a._valuesCache.hasOwnProperty(l))
        return a._valuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return a._valuesCache[l] = u.accessorFn(a.original, o), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = u.columnDef.getUniqueValues(a.original, o), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var u;
      return (u = a.getValue(l)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Tw(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], u = a;
      for (; ; ) {
        const f = u.getParentRow();
        if (!f) break;
        l.push(f), u = f;
      }
      return l.reverse();
    },
    getAllCells: j(() => [e.getAllLeafColumns()], (l) => l.map((u) => Dw(e, a, u, u.id)), U(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: j(() => [a.getAllCells()], (l) => l.reduce((u, f) => (u[f.column.id] = f, u), {}), U(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const u = e._features[l];
    u == null || u.createRow == null || u.createRow(a, e);
  }
  return a;
}, $w = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, $c = (e, n, t) => {
  var o, r;
  const i = t == null || (o = t.toString()) == null ? void 0 : o.toLowerCase();
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
$c.autoRemove = (e) => Oe(e);
const Lc = (e, n, t) => {
  var o;
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null) && o.includes(t));
};
Lc.autoRemove = (e) => Oe(e);
const Vc = (e, n, t) => {
  var o;
  return ((o = e.getValue(n)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
Vc.autoRemove = (e) => Oe(e);
const zc = (e, n, t) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(t);
};
zc.autoRemove = (e) => Oe(e);
const Hc = (e, n, t) => !t.some((o) => {
  var r;
  return !((r = e.getValue(n)) != null && r.includes(o));
});
Hc.autoRemove = (e) => Oe(e) || !(e != null && e.length);
const Bc = (e, n, t) => t.some((o) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(o);
});
Bc.autoRemove = (e) => Oe(e) || !(e != null && e.length);
const Gc = (e, n, t) => e.getValue(n) === t;
Gc.autoRemove = (e) => Oe(e);
const Wc = (e, n, t) => e.getValue(n) == t;
Wc.autoRemove = (e) => Oe(e);
const zr = (e, n, t) => {
  let [o, r] = t;
  const i = e.getValue(n);
  return i >= o && i <= r;
};
zr.resolveFilterValue = (e) => {
  let [n, t] = e, o = typeof n != "number" ? parseFloat(n) : n, r = typeof t != "number" ? parseFloat(t) : t, i = n === null || Number.isNaN(o) ? -1 / 0 : o, s = t === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
zr.autoRemove = (e) => Oe(e) || Oe(e[0]) && Oe(e[1]);
const Ue = {
  includesString: $c,
  includesStringSensitive: Lc,
  equalsString: Vc,
  arrIncludes: zc,
  arrIncludesAll: Hc,
  arrIncludesSome: Bc,
  equals: Gc,
  weakEquals: Wc,
  inNumberRange: zr
};
function Oe(e) {
  return e == null || e === "";
}
const Lw = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ee("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], o = t == null ? void 0 : t.getValue(e.id);
      return typeof o == "string" ? Ue.includesString : typeof o == "number" ? Ue.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? Ue.equals : Array.isArray(o) ? Ue.arrIncludes : Ue.weakEquals;
    }, e.getFilterFn = () => {
      var t, o;
      return io(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (o = n.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? t : Ue[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, o, r;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((o = n.options.enableColumnFilters) != null ? o : !0) && ((r = n.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = n.getState().columnFilters) == null || (t = t.find((o) => o.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, o;
      return (t = (o = n.getState().columnFilters) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      n.setColumnFilters((o) => {
        const r = e.getFilterFn(), i = o == null ? void 0 : o.find((f) => f.id === e.id), s = nt(t, i ? i.value : void 0);
        if (Vi(r, s, e)) {
          var a;
          return (a = o == null ? void 0 : o.filter((f) => f.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
          var u;
          return (u = o == null ? void 0 : o.map((f) => f.id === e.id ? l : f)) != null ? u : [];
        }
        return o != null && o.length ? [...o, l] : [l];
      });
    };
  },
  createRow: (e, n) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (n) => {
      const t = e.getAllLeafColumns(), o = (r) => {
        var i;
        return (i = nt(n, r)) == null ? void 0 : i.filter((s) => {
          const a = t.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (Vi(l, s.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
    }, e.resetColumnFilters = (n) => {
      var t, o;
      e.setColumnFilters(n ? [] : (t = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Vi(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const Vw = (e, n, t) => t.reduce((o, r) => {
  const i = r.getValue(e);
  return o + (typeof i == "number" ? i : 0);
}, 0), zw = (e, n, t) => {
  let o;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o > i || o === void 0 && i >= i) && (o = i);
  }), o;
}, Hw = (e, n, t) => {
  let o;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o < i || o === void 0 && i >= i) && (o = i);
  }), o;
}, Bw = (e, n, t) => {
  let o, r;
  return t.forEach((i) => {
    const s = i.getValue(e);
    s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
  }), [o, r];
}, Gw = (e, n) => {
  let t = 0, o = 0;
  if (n.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++t, o += i);
  }), t) return o / t;
}, Ww = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((i) => i.getValue(e));
  if (!kw(t))
    return;
  if (t.length === 1)
    return t[0];
  const o = Math.floor(t.length / 2), r = t.sort((i, s) => i - s);
  return t.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
}, jw = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Uw = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Yw = (e, n) => n.length, Eo = {
  sum: Vw,
  min: zw,
  max: Hw,
  extent: Bw,
  mean: Gw,
  median: Ww,
  unique: jw,
  uniqueCount: Uw,
  count: Yw
}, Kw = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var n, t;
      return (n = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? n : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Ee("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, n) => {
    e.toggleGrouping = () => {
      n.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((o) => o !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, o;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((o = n.options.enableGrouping) != null ? o : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = n.getCoreRowModel().flatRows[0], o = t == null ? void 0 : t.getValue(e.id);
      if (typeof o == "number")
        return Eo.sum;
      if (Object.prototype.toString.call(o) === "[object Date]")
        return Eo.extent;
    }, e.getAggregationFn = () => {
      var t, o;
      if (!e)
        throw new Error();
      return io(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (o = n.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? t : Eo[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (n) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(n), e.resetGrouping = (n) => {
      var t, o;
      e.setGrouping(n ? [] : (t = (o = e.initialState) == null ? void 0 : o.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, n) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const o = n.getColumn(t);
      return o != null && o.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = o.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, n, t, o) => {
    e.getIsGrouped = () => n.getIsGrouped() && n.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && n.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = t.subRows) != null && r.length);
    };
  }
};
function Xw(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const o = e.filter((i) => !n.includes(i.id));
  return t === "remove" ? o : [...n.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...o];
}
const qw = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ee("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = j((t) => [Wt(n, t)], (t) => t.findIndex((o) => o.id === e.id), U(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var o;
      return ((o = Wt(n, t)[0]) == null ? void 0 : o.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var o;
      const r = Wt(n, t);
      return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = j(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, o) => (r) => {
      let i = [];
      if (!(n != null && n.length))
        i = r;
      else {
        const s = [...n], a = [...r];
        for (; a.length && s.length; ) {
          const l = s.shift(), u = a.findIndex((f) => f.id === l);
          u > -1 && i.push(a.splice(u, 1)[0]);
        }
        i = [...i, ...a];
      }
      return Xw(i, t, o);
    }, U(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, _o = () => ({
  left: [],
  right: []
}), Zw = {
  getInitialState: (e) => ({
    columnPinning: _o(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ee("columnPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      n.setColumnPinning((r) => {
        var i, s;
        if (t === "right") {
          var a, l;
          return {
            left: ((a = r == null ? void 0 : r.left) != null ? a : []).filter((d) => !(o != null && o.includes(d))),
            right: [...((l = r == null ? void 0 : r.right) != null ? l : []).filter((d) => !(o != null && o.includes(d))), ...o]
          };
        }
        if (t === "left") {
          var u, f;
          return {
            left: [...((u = r == null ? void 0 : r.left) != null ? u : []).filter((d) => !(o != null && o.includes(d))), ...o],
            right: ((f = r == null ? void 0 : r.right) != null ? f : []).filter((d) => !(o != null && o.includes(d)))
          };
        }
        return {
          left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((d) => !(o != null && o.includes(d))),
          right: ((s = r == null ? void 0 : r.right) != null ? s : []).filter((d) => !(o != null && o.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((o) => {
      var r, i, s;
      return ((r = o.columnDef.enablePinning) != null ? r : !0) && ((i = (s = n.options.enableColumnPinning) != null ? s : n.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((a) => a.id), {
        left: o,
        right: r
      } = n.getState().columnPinning, i = t.some((a) => o == null ? void 0 : o.includes(a)), s = t.some((a) => r == null ? void 0 : r.includes(a));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, o;
      const r = e.getIsPinned();
      return r ? (t = (o = n.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.getCenterVisibleCells = j(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, o, r) => {
      const i = [...o ?? [], ...r ?? []];
      return t.filter((s) => !i.includes(s.column.id));
    }, U(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = j(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, o) => (o ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), U(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = j(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, o) => (o ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), U(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, o;
      return e.setColumnPinning(n ? _o() : (t = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? t : _o());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const o = e.getState().columnPinning;
      if (!n) {
        var r, i;
        return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
      }
      return !!((t = o[n]) != null && t.length);
    }, e.getLeftLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((o) => n.find((r) => r.id === o)).filter(Boolean), U(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((o) => n.find((r) => r.id === o)).filter(Boolean), U(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, o) => {
      const r = [...t ?? [], ...o ?? []];
      return n.filter((i) => !r.includes(i.id));
    }, U(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Qw(e) {
  return e || (typeof document < "u" ? document : null);
}
const xn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Po = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Jw = {
  getDefaultColumnDef: () => xn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Po(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ee("columnSizing", e),
    onColumnSizingInfoChange: Ee("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, o, r;
      const i = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : xn.minSize, (o = i ?? e.columnDef.size) != null ? o : xn.size), (r = e.columnDef.maxSize) != null ? r : xn.maxSize);
    }, e.getStart = j((t) => [t, Wt(n, t), n.getState().columnSizing], (t, o) => o.slice(0, e.getIndex(t)).reduce((r, i) => r + i.getSize(), 0), U(n.options, "debugColumns", "getStart")), e.getAfter = j((t) => [t, Wt(n, t), n.getState().columnSizing], (t, o) => o.slice(e.getIndex(t) + 1).reduce((r, i) => r + i.getSize(), 0), U(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
      n.setColumnSizing((t) => {
        let {
          [e.id]: o,
          ...r
        } = t;
        return r;
      });
    }, e.getCanResize = () => {
      var t, o;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((o = n.options.enableColumnResizing) != null ? o : !0);
    }, e.getIsResizing = () => n.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, n) => {
    e.getSize = () => {
      let t = 0;
      const o = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(o);
        else {
          var i;
          t += (i = r.column.getSize()) != null ? i : 0;
        }
      };
      return o(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const o = n.getColumn(e.column.id), r = o == null ? void 0 : o.getCanResize();
      return (i) => {
        if (!o || !r || (i.persist == null || i.persist(), Mo(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[o.id, o.getSize()]], l = Mo(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, f = (b, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((x) => {
            var C, _;
            const S = n.options.columnResizeDirection === "rtl" ? -1 : 1, P = (y - ((C = x == null ? void 0 : x.startOffset) != null ? C : 0)) * S, R = Math.max(P / ((_ = x == null ? void 0 : x.startSize) != null ? _ : 0), -0.999999);
            return x.columnSizingStart.forEach((D) => {
              let [V, K] = D;
              u[V] = Math.round(Math.max(K + K * R, 0) * 100) / 100;
            }), {
              ...x,
              deltaOffset: P,
              deltaPercentage: R
            };
          }), (n.options.columnResizeMode === "onChange" || b === "end") && n.setColumnSizing((x) => ({
            ...x,
            ...u
          })));
        }, d = (b) => f("move", b), g = (b) => {
          f("end", b), n.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, p = Qw(t), h = {
          moveHandler: (b) => d(b.clientX),
          upHandler: (b) => {
            p == null || p.removeEventListener("mousemove", h.moveHandler), p == null || p.removeEventListener("mouseup", h.upHandler), g(b.clientX);
          }
        }, v = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), d(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var y;
            p == null || p.removeEventListener("touchmove", v.moveHandler), p == null || p.removeEventListener("touchend", v.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), g((y = b.touches[0]) == null ? void 0 : y.clientX);
          }
        }, w = eb() ? {
          passive: !1
        } : !1;
        Mo(i) ? (p == null || p.addEventListener("touchmove", v.moveHandler, w), p == null || p.addEventListener("touchend", v.upHandler, w)) : (p == null || p.addEventListener("mousemove", h.moveHandler, w), p == null || p.addEventListener("mouseup", h.upHandler, w)), n.setColumnSizingInfo((b) => ({
          ...b,
          startOffset: l,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: o.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (n) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(n), e.setColumnSizingInfo = (n) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(n), e.resetColumnSizing = (n) => {
      var t;
      e.setColumnSizing(n ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (n) => {
      var t;
      e.setColumnSizingInfo(n ? Po() : (t = e.initialState.columnSizingInfo) != null ? t : Po());
    }, e.getTotalSize = () => {
      var n, t;
      return (n = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    }, e.getLeftTotalSize = () => {
      var n, t;
      return (n = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    }, e.getCenterTotalSize = () => {
      var n, t;
      return (n = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    }, e.getRightTotalSize = () => {
      var n, t;
      return (n = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    };
  }
};
let Cn = null;
function eb() {
  if (typeof Cn == "boolean") return Cn;
  let e = !1;
  try {
    const n = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, n), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return Cn = e, Cn;
}
function Mo(e) {
  return e.type === "touchstart";
}
const tb = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ee("columnVisibility", e)
  }),
  createColumn: (e, n) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && n.setColumnVisibility((o) => ({
        ...o,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, o;
      const r = e.columns;
      return (t = r.length ? r.some((i) => i.getIsVisible()) : (o = n.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, o;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((o = n.options.enableHiding) != null ? o : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = j(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((o) => o.column.getIsVisible()), U(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = j(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, o, r) => [...t, ...o, ...r], U(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, o) => j(() => [o(), o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), U(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var o;
      e.setColumnVisibility(t ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var o;
      t = (o = t) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
        ...r,
        [i.id]: t || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var o;
      e.toggleAllColumnsVisible((o = t.target) == null ? void 0 : o.checked);
    };
  }
};
function Wt(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const nb = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, ob = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ee("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const o = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof o == "string" || typeof o == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getCanGlobalFilter = () => {
      var t, o, r, i;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((o = n.options.enableGlobalFilter) != null ? o : !0) && ((r = n.options.enableFilters) != null ? r : !0) && ((i = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => Ue.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: o
      } = e.options;
      return io(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[o]) != null ? n : Ue[o];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, rb = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ee("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetExpanded = () => {
      var o, r;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? o : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (o) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o), e.toggleAllRowsExpanded = (o) => {
      o ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (o) => {
      var r, i;
      e.setExpanded(o ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
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
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const s = i.split(".");
        o = Math.max(o, s.length);
      }), o;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((o) => {
        var r;
        const i = o === !0 ? !0 : !!(o != null && o[e.id]);
        let s = {};
        if (o === !0 ? Object.keys(n.getRowModel().rowsById).forEach((a) => {
          s[a] = !0;
        }) : s = o, t = (r = t) != null ? r : !i, !i && t)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !t) {
          const {
            [e.id]: a,
            ...l
          } = s;
          return l;
        }
        return o;
      });
    }, e.getIsExpanded = () => {
      var t;
      const o = n.getState().expanded;
      return !!((t = n.options.getIsRowExpanded == null ? void 0 : n.options.getIsRowExpanded(e)) != null ? t : o === !0 || o != null && o[e.id]);
    }, e.getCanExpand = () => {
      var t, o, r;
      return (t = n.options.getRowCanExpand == null ? void 0 : n.options.getRowCanExpand(e)) != null ? t : ((o = n.options.enableExpanding) != null ? o : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, o = e;
      for (; t && o.parentId; )
        o = n.getRow(o.parentId, !0), t = o.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, Ko = 0, Xo = 10, Ao = () => ({
  pageIndex: Ko,
  pageSize: Xo
}), ib = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Ao(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ee("pagination", e)
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetPageIndex = () => {
      var o, r;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? o : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (o) => {
      const r = (i) => nt(o, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (o) => {
      var r;
      e.setPagination(o ? Ao() : (r = e.initialState.pagination) != null ? r : Ao());
    }, e.setPageIndex = (o) => {
      e.setPagination((r) => {
        let i = nt(o, r.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...r,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (o) => {
      var r, i;
      e.setPageIndex(o ? Ko : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : Ko);
    }, e.resetPageSize = (o) => {
      var r, i;
      e.setPageSize(o ? Xo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Xo);
    }, e.setPageSize = (o) => {
      e.setPagination((r) => {
        const i = Math.max(1, nt(o, r.pageSize)), s = r.pageSize * r.pageIndex, a = Math.floor(s / i);
        return {
          ...r,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (o) => e.setPagination((r) => {
      var i;
      let s = nt(o, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...r,
        pageCount: s
      };
    }), e.getPageOptions = j(() => [e.getPageCount()], (o) => {
      let r = [];
      return o && o > 0 && (r = [...new Array(o)].fill(null).map((i, s) => s)), r;
    }, U(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, No = () => ({
  top: [],
  bottom: []
}), sb = {
  getInitialState: (e) => ({
    rowPinning: No(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ee("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, o, r) => {
      const i = o ? e.getLeafRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], s = r ? e.getParentRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      n.setRowPinning((l) => {
        var u, f;
        if (t === "bottom") {
          var d, g;
          return {
            top: ((d = l == null ? void 0 : l.top) != null ? d : []).filter((v) => !(a != null && a.has(v))),
            bottom: [...((g = l == null ? void 0 : l.bottom) != null ? g : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)]
          };
        }
        if (t === "top") {
          var p, h;
          return {
            top: [...((p = l == null ? void 0 : l.top) != null ? p : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)],
            bottom: ((h = l == null ? void 0 : l.bottom) != null ? h : []).filter((v) => !(a != null && a.has(v)))
          };
        }
        return {
          top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((v) => !(a != null && a.has(v))),
          bottom: ((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((v) => !(a != null && a.has(v)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: o,
        enablePinning: r
      } = n.options;
      return typeof o == "function" ? o(e) : (t = o ?? r) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: o,
        bottom: r
      } = n.getState().rowPinning, i = t.some((a) => o == null ? void 0 : o.includes(a)), s = t.some((a) => r == null ? void 0 : r.includes(a));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, o;
      const r = e.getIsPinned();
      if (!r) return -1;
      const i = (t = r === "top" ? n.getTopRows() : n.getBottomRows()) == null ? void 0 : t.map((s) => {
        let {
          id: a
        } = s;
        return a;
      });
      return (o = i == null ? void 0 : i.indexOf(e.id)) != null ? o : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, o;
      return e.setRowPinning(n ? No() : (t = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? t : No());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const o = e.getState().rowPinning;
      if (!n) {
        var r, i;
        return !!((r = o.top) != null && r.length || (i = o.bottom) != null && i.length);
      }
      return !!((t = o[n]) != null && t.length);
    }, e._getPinnedRows = (n, t, o) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((s) => {
          const a = e.getRow(s, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((s) => n.find((a) => a.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: o
      }));
    }, e.getTopRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), U(e.options, "debugRows", "getTopRows")), e.getBottomRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), U(e.options, "debugRows", "getBottomRows")), e.getCenterRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, o) => {
      const r = /* @__PURE__ */ new Set([...t ?? [], ...o ?? []]);
      return n.filter((i) => !r.has(i.id));
    }, U(e.options, "debugRows", "getCenterRows"));
  }
}, ab = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ee("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (n) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(n), e.resetRowSelection = (n) => {
      var t;
      return e.setRowSelection(n ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (n) => {
      e.setRowSelection((t) => {
        n = typeof n < "u" ? n : !e.getIsAllRowsSelected();
        const o = {
          ...t
        }, r = e.getPreGroupedRowModel().flatRows;
        return n ? r.forEach((i) => {
          i.getCanSelect() && (o[i.id] = !0);
        }) : r.forEach((i) => {
          delete o[i.id];
        }), o;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const o = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), r = {
        ...t
      };
      return e.getRowModel().rows.forEach((i) => {
        qo(r, i.id, o, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = j(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? Io(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, U(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = j(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? Io(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, U(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = j(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? Io(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, U(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const n = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let o = !!(n.length && Object.keys(t).length);
      return o && n.some((r) => r.getCanSelect() && !t[r.id]) && (o = !1), o;
    }, e.getIsAllPageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let o = !!n.length;
      return o && n.some((r) => !t[r.id]) && (o = !1), o;
    }, e.getIsSomeRowsSelected = () => {
      var n;
      const t = Object.keys((n = e.getState().rowSelection) != null ? n : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : n.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (n) => {
      e.toggleAllRowsSelected(n.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (n) => {
      e.toggleAllPageRowsSelected(n.target.checked);
    };
  },
  createRow: (e, n) => {
    e.toggleSelected = (t, o) => {
      const r = e.getIsSelected();
      n.setRowSelection((i) => {
        var s;
        if (t = typeof t < "u" ? t : !r, e.getCanSelect() && r === t)
          return i;
        const a = {
          ...i
        };
        return qo(a, e.id, t, (s = o == null ? void 0 : o.selectChildren) != null ? s : !0, n), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Hr(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Zo(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Zo(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof n.options.enableRowSelection == "function" ? n.options.enableRowSelection(e) : (t = n.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof n.options.enableSubRowSelection == "function" ? n.options.enableSubRowSelection(e) : (t = n.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof n.options.enableMultiRowSelection == "function" ? n.options.enableMultiRowSelection(e) : (t = n.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (o) => {
        var r;
        t && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
      };
    };
  }
}, qo = (e, n, t, o, r) => {
  var i;
  const s = r.getRow(n, !0);
  t ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[n] = !0)) : delete e[n], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => qo(e, a.id, t, o, r));
};
function Io(e, n) {
  const t = e.getState().rowSelection, o = [], r = {}, i = function(s, a) {
    return s.map((l) => {
      var u;
      const f = Hr(l, t);
      if (f && (o.push(l), r[l.id] = l), (u = l.subRows) != null && u.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), f)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(n.rows),
    flatRows: o,
    rowsById: r
  };
}
function Hr(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function Zo(e, n, t) {
  var o;
  if (!((o = e.subRows) != null && o.length)) return !1;
  let r = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !r) && (s.getCanSelect() && (Hr(s, n) ? i = !0 : r = !1), s.subRows && s.subRows.length)) {
      const a = Zo(s, n);
      a === "all" ? i = !0 : (a === "some" && (i = !0), r = !1);
    }
  }), r ? "all" : i ? "some" : !1;
}
const Qo = /([0-9]+)/gm, lb = (e, n, t) => jc(st(e.getValue(t)).toLowerCase(), st(n.getValue(t)).toLowerCase()), cb = (e, n, t) => jc(st(e.getValue(t)), st(n.getValue(t))), ub = (e, n, t) => Br(st(e.getValue(t)).toLowerCase(), st(n.getValue(t)).toLowerCase()), db = (e, n, t) => Br(st(e.getValue(t)), st(n.getValue(t))), fb = (e, n, t) => {
  const o = e.getValue(t), r = n.getValue(t);
  return o > r ? 1 : o < r ? -1 : 0;
}, pb = (e, n, t) => Br(e.getValue(t), n.getValue(t));
function Br(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function st(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function jc(e, n) {
  const t = e.split(Qo).filter(Boolean), o = n.split(Qo).filter(Boolean);
  for (; t.length && o.length; ) {
    const r = t.shift(), i = o.shift(), s = parseInt(r, 10), a = parseInt(i, 10), l = [s, a].sort();
    if (isNaN(l[0])) {
      if (r > i)
        return 1;
      if (i > r)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(s) ? -1 : 1;
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  }
  return t.length - o.length;
}
const Bt = {
  alphanumeric: lb,
  alphanumericCaseSensitive: cb,
  text: ub,
  textCaseSensitive: db,
  datetime: fb,
  basic: pb
}, gb = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ee("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let o = !1;
      for (const r of t) {
        const i = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Bt.datetime;
        if (typeof i == "string" && (o = !0, i.split(Qo).length > 1))
          return Bt.alphanumeric;
      }
      return o ? Bt.text : Bt.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, o;
      if (!e)
        throw new Error();
      return io(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (o = n.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? t : Bt[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, o) => {
      const r = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
      n.setSorting((s) => {
        const a = s == null ? void 0 : s.find((p) => p.id === e.id), l = s == null ? void 0 : s.findIndex((p) => p.id === e.id);
        let u = [], f, d = i ? t : r === "desc";
        if (s != null && s.length && e.getCanMultiSort() && o ? a ? f = "toggle" : f = "add" : s != null && s.length && l !== s.length - 1 ? f = "replace" : a ? f = "toggle" : f = "replace", f === "toggle" && (i || r || (f = "remove")), f === "add") {
          var g;
          u = [...s, {
            id: e.id,
            desc: d
          }], u.splice(0, u.length - ((g = n.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? u = s.map((p) => p.id === e.id ? {
          ...p,
          desc: d
        } : p) : f === "remove" ? u = s.filter((p) => p.id !== e.id) : u = [{
          id: e.id,
          desc: d
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var t, o;
      return ((t = (o = e.columnDef.sortDescFirst) != null ? o : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var o, r;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((o = n.options.enableSortingRemoval) == null || o) && // If enableSortRemove, enable in general
      (!(t && (r = n.options.enableMultiRemove) != null) || r) ? !1 : s === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var t, o;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((o = n.options.enableSorting) != null ? o : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, o;
      return (t = (o = e.columnDef.enableMultiSort) != null ? o : n.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const o = (t = n.getState().sorting) == null ? void 0 : t.find((r) => r.id === e.id);
      return o ? o.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, o;
      return (t = (o = n.getState().sorting) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      n.setSorting((t) => t != null && t.length ? t.filter((o) => o.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (o) => {
        t && (o.persist == null || o.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? n.options.isMultiSortEvent == null ? void 0 : n.options.isMultiSortEvent(o) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (n) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(n), e.resetSorting = (n) => {
      var t, o;
      e.setSorting(n ? [] : (t = (o = e.initialState) == null ? void 0 : o.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, mb = [
  Fw,
  tb,
  qw,
  Zw,
  $w,
  Lw,
  nb,
  //depends on ColumnFaceting
  ob,
  //depends on ColumnFiltering
  gb,
  Kw,
  //depends on RowSorting
  rb,
  ib,
  sb,
  ab,
  Jw
];
function hb(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const o = [...mb, ...(n = e._features) != null ? n : []];
  let r = {
    _features: o
  };
  const i = r._features.reduce((g, p) => Object.assign(g, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)), {}), s = (g) => r.options.mergeOptions ? r.options.mergeOptions(i, g) : {
    ...i,
    ...g
  };
  let l = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  r._features.forEach((g) => {
    var p;
    l = (p = g.getInitialState == null ? void 0 : g.getInitialState(l)) != null ? p : l;
  });
  const u = [];
  let f = !1;
  const d = {
    _features: o,
    options: {
      ...i,
      ...e
    },
    initialState: l,
    _queue: (g) => {
      u.push(g), f || (f = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        f = !1;
      }).catch((p) => setTimeout(() => {
        throw p;
      })));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (g) => {
      const p = nt(g, r.options);
      r.options = s(p);
    },
    getState: () => r.options.state,
    setState: (g) => {
      r.options.onStateChange == null || r.options.onStateChange(g);
    },
    _getRowId: (g, p, h) => {
      var v;
      return (v = r.options.getRowId == null ? void 0 : r.options.getRowId(g, p, h)) != null ? v : `${h ? [h.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, p) => {
      let h = (p ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[g];
      if (!h && (h = r.getCoreRowModel().rowsById[g], !h))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${g}`) : new Error();
      return h;
    },
    _getDefaultColumnDef: j(() => [r.options.defaultColumn], (g) => {
      var p;
      return g = (p = g) != null ? p : {}, {
        header: (h) => {
          const v = h.header.column.columnDef;
          return v.accessorKey ? v.accessorKey : v.accessorFn ? v.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (h) => {
          var v, w;
          return (v = (w = h.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? v : null;
        },
        ...r._features.reduce((h, v) => Object.assign(h, v.getDefaultColumnDef == null ? void 0 : v.getDefaultColumnDef()), {}),
        ...g
      };
    }, U(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: j(() => [r._getColumnDefs()], (g) => {
      const p = function(h, v, w) {
        return w === void 0 && (w = 0), h.map((b) => {
          const y = Ow(r, b, w, v), x = b;
          return y.columns = x.columns ? p(x.columns, y, w + 1) : [], y;
        });
      };
      return p(g);
    }, U(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: j(() => [r.getAllColumns()], (g) => g.flatMap((p) => p.getFlatColumns()), U(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: j(() => [r.getAllFlatColumns()], (g) => g.reduce((p, h) => (p[h.id] = h, p), {}), U(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: j(() => [r.getAllColumns(), r._getOrderColumnsFn()], (g, p) => {
      let h = g.flatMap((v) => v.getLeafColumns());
      return p(h);
    }, U(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (g) => {
      const p = r._getAllFlatColumnsById()[g];
      return process.env.NODE_ENV !== "production" && !p && console.error(`[Table] Column with id '${g}' does not exist.`), p;
    }
  };
  Object.assign(r, d);
  for (let g = 0; g < r._features.length; g++) {
    const p = r._features[g];
    p == null || p.createTable == null || p.createTable(r);
  }
  return r;
}
function vb() {
  return (e) => j(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, o = function(r, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let u = 0; u < r.length; u++) {
        const f = Vr(e, e._getRowId(r[u], u, s), r[u], u, i, void 0, s == null ? void 0 : s.id);
        if (t.flatRows.push(f), t.rowsById[f.id] = f, a.push(f), e.options.getSubRows) {
          var l;
          f.originalSubRows = e.options.getSubRows(r[u], u), (l = f.originalSubRows) != null && l.length && (f.subRows = o(f.originalSubRows, i + 1, f));
        }
      }
      return a;
    };
    return t.rows = o(n), t;
  }, U(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function wb(e) {
  const n = [], t = (o) => {
    var r;
    n.push(o), (r = o.subRows) != null && r.length && o.getIsExpanded() && o.subRows.forEach(t);
  };
  return e.rows.forEach(t), {
    rows: n,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function bb(e, n, t) {
  return t.options.filterFromLeafRows ? yb(e, n, t) : xb(e, n, t);
}
function yb(e, n, t) {
  var o;
  const r = [], i = {}, s = (o = t.options.maxLeafRowFilterDepth) != null ? o : 100, a = function(l, u) {
    u === void 0 && (u = 0);
    const f = [];
    for (let g = 0; g < l.length; g++) {
      var d;
      let p = l[g];
      const h = Vr(t, p.id, p.original, p.index, p.depth, void 0, p.parentId);
      if (h.columnFilters = p.columnFilters, (d = p.subRows) != null && d.length && u < s) {
        if (h.subRows = a(p.subRows, u + 1), p = h, n(p) && !h.subRows.length) {
          f.push(p), i[p.id] = p, r.push(p);
          continue;
        }
        if (n(p) || h.subRows.length) {
          f.push(p), i[p.id] = p, r.push(p);
          continue;
        }
      } else
        p = h, n(p) && (f.push(p), i[p.id] = p, r.push(p));
    }
    return f;
  };
  return {
    rows: a(e),
    flatRows: r,
    rowsById: i
  };
}
function xb(e, n, t) {
  var o;
  const r = [], i = {}, s = (o = t.options.maxLeafRowFilterDepth) != null ? o : 100, a = function(l, u) {
    u === void 0 && (u = 0);
    const f = [];
    for (let g = 0; g < l.length; g++) {
      let p = l[g];
      if (n(p)) {
        var d;
        if ((d = p.subRows) != null && d.length && u < s) {
          const v = Vr(t, p.id, p.original, p.index, p.depth, void 0, p.parentId);
          v.subRows = a(p.subRows, u + 1), p = v;
        }
        f.push(p), r.push(p), i[p.id] = p;
      }
    }
    return f;
  };
  return {
    rows: a(e),
    flatRows: r,
    rowsById: i
  };
}
function Cb() {
  return (e) => j(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (n, t, o) => {
    if (!n.rows.length || !(t != null && t.length) && !o) {
      for (let g = 0; g < n.flatRows.length; g++)
        n.flatRows[g].columnFilters = {}, n.flatRows[g].columnFiltersMeta = {};
      return n;
    }
    const r = [], i = [];
    (t ?? []).forEach((g) => {
      var p;
      const h = e.getColumn(g.id);
      if (!h)
        return;
      const v = h.getFilterFn();
      if (!v) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${h.id}.`);
        return;
      }
      r.push({
        id: g.id,
        filterFn: v,
        resolvedValue: (p = v.resolveFilterValue == null ? void 0 : v.resolveFilterValue(g.value)) != null ? p : g.value
      });
    });
    const s = (t ?? []).map((g) => g.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
    o && a && l.length && (s.push("__global__"), l.forEach((g) => {
      var p;
      i.push({
        id: g.id,
        filterFn: a,
        resolvedValue: (p = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(o)) != null ? p : o
      });
    }));
    let u, f;
    for (let g = 0; g < n.flatRows.length; g++) {
      const p = n.flatRows[g];
      if (p.columnFilters = {}, r.length)
        for (let h = 0; h < r.length; h++) {
          u = r[h];
          const v = u.id;
          p.columnFilters[v] = u.filterFn(p, v, u.resolvedValue, (w) => {
            p.columnFiltersMeta[v] = w;
          });
        }
      if (i.length) {
        for (let h = 0; h < i.length; h++) {
          f = i[h];
          const v = f.id;
          if (f.filterFn(p, v, f.resolvedValue, (w) => {
            p.columnFiltersMeta[v] = w;
          })) {
            p.columnFilters.__global__ = !0;
            break;
          }
        }
        p.columnFilters.__global__ !== !0 && (p.columnFilters.__global__ = !1);
      }
    }
    const d = (g) => {
      for (let p = 0; p < s.length; p++)
        if (g.columnFilters[s[p]] === !1)
          return !1;
      return !0;
    };
    return bb(n.rows, d, e);
  }, U(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function Sb(e) {
  return (n) => j(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, o) => {
    if (!o.rows.length)
      return o;
    const {
      pageSize: r,
      pageIndex: i
    } = t;
    let {
      rows: s,
      flatRows: a,
      rowsById: l
    } = o;
    const u = r * i, f = u + r;
    s = s.slice(u, f);
    let d;
    n.options.paginateExpandedRows ? d = {
      rows: s,
      flatRows: a,
      rowsById: l
    } : d = wb({
      rows: s,
      flatRows: a,
      rowsById: l
    }), d.flatRows = [];
    const g = (p) => {
      d.flatRows.push(p), p.subRows.length && p.subRows.forEach(g);
    };
    return d.rows.forEach(g), d;
  }, U(n.options, "debugTable", "getPaginationRowModel"));
}
function Rb() {
  return (e) => j(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const o = e.getState().sorting, r = [], i = o.filter((l) => {
      var u;
      return (u = e.getColumn(l.id)) == null ? void 0 : u.getCanSort();
    }), s = {};
    i.forEach((l) => {
      const u = e.getColumn(l.id);
      u && (s[l.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const a = (l) => {
      const u = l.map((f) => ({
        ...f
      }));
      return u.sort((f, d) => {
        for (let p = 0; p < i.length; p += 1) {
          var g;
          const h = i[p], v = s[h.id], w = v.sortUndefined, b = (g = h == null ? void 0 : h.desc) != null ? g : !1;
          let y = 0;
          if (w) {
            const x = f.getValue(h.id), C = d.getValue(h.id), _ = x === void 0, S = C === void 0;
            if (_ || S) {
              if (w === "first") return _ ? -1 : 1;
              if (w === "last") return _ ? 1 : -1;
              y = _ && S ? 0 : _ ? w : -w;
            }
          }
          if (y === 0 && (y = v.sortingFn(f, d, h.id)), y !== 0)
            return b && (y *= -1), v.invertSorting && (y *= -1), y;
        }
        return f.index - d.index;
      }), u.forEach((f) => {
        var d;
        r.push(f), (d = f.subRows) != null && d.length && (f.subRows = a(f.subRows));
      }), u;
    };
    return {
      rows: a(t.rows),
      flatRows: r,
      rowsById: t.rowsById
    };
  }, U(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function zi(e, n) {
  return e ? Eb(e) ? /* @__PURE__ */ c.createElement(e, n) : e : null;
}
function Eb(e) {
  return _b(e) || typeof e == "function" || Pb(e);
}
function _b(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function Pb(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Mb(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = c.useState(() => ({
    current: hb(n)
  })), [o, r] = c.useState(() => t.current.initialState);
  return t.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...o,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      r(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), t.current;
}
function Yb({
  columns: e,
  data: n,
  searchColumn: t,
  searchPlaceholder: o = "Search..."
}) {
  var d, g;
  const [r, i] = c.useState([]), [s, a] = c.useState([]), l = Mb({
    data: n,
    columns: e,
    getCoreRowModel: vb(),
    getPaginationRowModel: Sb(),
    getSortedRowModel: Rb(),
    getFilteredRowModel: Cb(),
    onSortingChange: i,
    onColumnFiltersChange: a,
    state: {
      sorting: r,
      columnFilters: s
    }
  }), u = l.getState().pagination.pageIndex, f = l.getPageCount();
  return /* @__PURE__ */ W("div", { className: "flex flex-col gap-3", children: [
    t && /* @__PURE__ */ m("div", { className: "flex items-center", children: /* @__PURE__ */ m(
      Vn,
      {
        placeholder: o,
        value: ((d = l.getColumn(t)) == null ? void 0 : d.getFilterValue()) ?? "",
        onChange: (p) => {
          var h;
          return (h = l.getColumn(t)) == null ? void 0 : h.setFilterValue(p.target.value);
        },
        className: "max-w-sm h-8 text-sm"
      }
    ) }),
    /* @__PURE__ */ m("div", { className: "rounded-md border border-border overflow-hidden", children: /* @__PURE__ */ W(Tc, { children: [
      /* @__PURE__ */ m(Dc, { children: l.getHeaderGroups().map((p) => /* @__PURE__ */ m(_n, { className: "bg-muted/30 hover:bg-muted/30", children: p.headers.map((h) => /* @__PURE__ */ m(
        Fc,
        {
          className: Y(
            "text-xs font-medium text-muted-foreground uppercase tracking-wide h-8",
            h.column.getCanSort() && "cursor-pointer select-none"
          ),
          onClick: h.column.getCanSort() ? h.column.getToggleSortingHandler() : void 0,
          children: h.isPlaceholder ? null : /* @__PURE__ */ W("div", { className: "flex items-center gap-1", children: [
            zi(
              h.column.columnDef.header,
              h.getContext()
            ),
            h.column.getCanSort() && /* @__PURE__ */ m(
              zg,
              {
                className: Y(
                  "h-3 w-3 transition-opacity",
                  h.column.getIsSorted() ? "opacity-100 text-foreground" : "opacity-30"
                )
              }
            )
          ] })
        },
        h.id
      )) }, p.id)) }),
      /* @__PURE__ */ m(Oc, { children: (g = l.getRowModel().rows) != null && g.length ? l.getRowModel().rows.map((p) => /* @__PURE__ */ m(
        _n,
        {
          "data-state": p.getIsSelected() && "selected",
          className: "hover:bg-muted/40 border-border/50 h-9",
          children: p.getVisibleCells().map((h) => /* @__PURE__ */ m(Uo, { className: "py-1.5 text-sm", children: zi(
            h.column.columnDef.cell,
            h.getContext()
          ) }, h.id))
        },
        p.id
      )) : /* @__PURE__ */ m(_n, { children: /* @__PURE__ */ m(
        Uo,
        {
          colSpan: e.length,
          className: "h-24 text-center text-muted-foreground text-sm",
          children: "No results found."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ W("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ W("p", { className: "text-xs text-muted-foreground", children: [
        l.getFilteredRowModel().rows.length,
        " row",
        l.getFilteredRowModel().rows.length !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ W("span", { className: "text-xs text-muted-foreground", children: [
          "Page ",
          u + 1,
          " of ",
          Math.max(f, 1)
        ] }),
        /* @__PURE__ */ W(
          It,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => l.previousPage(),
            disabled: !l.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ m(Pa, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ m("span", { className: "sr-only", children: "Previous page" })
            ]
          }
        ),
        /* @__PURE__ */ W(
          It,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => l.nextPage(),
            disabled: !l.getCanNextPage(),
            children: [
              /* @__PURE__ */ m(Sr, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ m("span", { className: "sr-only", children: "Next page" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Uc({
  item: e,
  isActive: n,
  collapsed: t,
  depth: o = 0,
  onActiveChange: r
}) {
  const [i, s] = c.useState(!0), a = e.icon, u = /* @__PURE__ */ W(
    "button",
    {
      onClick: () => {
        e.children && s((f) => !f), e.onClick && e.onClick(), r && r(e.id);
      },
      className: Y(
        "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
        o > 0 && "ml-4 w-[calc(100%-1rem)]",
        n ? "bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
        t && "justify-center px-0"
      ),
      children: [
        a && /* @__PURE__ */ m(
          a,
          {
            className: Y(
              "shrink-0 transition-colors",
              t ? "h-4.5 w-4.5" : "h-4 w-4",
              n ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            )
          }
        ),
        !t && /* @__PURE__ */ W(Nt, { children: [
          /* @__PURE__ */ m("span", { className: "flex-1 truncate text-left", children: e.label }),
          e.badge !== void 0 && /* @__PURE__ */ m("span", { className: "ml-auto text-xs tabular-nums text-muted-foreground", children: e.badge })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ W("div", { children: [
    t ? /* @__PURE__ */ m(pr, { delayDuration: 0, children: /* @__PURE__ */ W(gr, { children: [
      /* @__PURE__ */ m(mr, { asChild: !0, children: u }),
      /* @__PURE__ */ m(Kn, { side: "right", children: /* @__PURE__ */ m("p", { children: e.label }) })
    ] }) }) : u,
    !t && e.children && i && /* @__PURE__ */ m("div", { className: "mt-0.5 space-y-0.5", children: e.children.map((f) => /* @__PURE__ */ m(
      Uc,
      {
        item: f,
        isActive: !1,
        collapsed: t,
        depth: o + 1,
        onActiveChange: r
      },
      f.id
    )) })
  ] });
}
function Ab(e) {
  return e.id.startsWith("separator");
}
function Kb({
  items: e,
  activeId: n,
  onActiveChange: t,
  collapsed: o = !1,
  onCollapsedChange: r,
  header: i,
  footer: s
}) {
  const a = [];
  let l = [];
  for (const u of e)
    Ab(u) ? (a.push(l), l = []) : l.push(u);
  return a.push(l), /* @__PURE__ */ W(
    "div",
    {
      className: Y(
        "flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        o ? "w-12" : "w-56"
      ),
      children: [
        i && /* @__PURE__ */ m("div", { className: Y("shrink-0 border-b border-sidebar-border", o ? "px-2 py-3" : "px-3 py-3"), children: i }),
        /* @__PURE__ */ m("div", { className: "flex-1 overflow-y-auto py-2", children: a.map((u, f) => /* @__PURE__ */ W(c.Fragment, { children: [
          f > 0 && /* @__PURE__ */ m(ms, { className: "my-2 bg-sidebar-border" }),
          /* @__PURE__ */ m("nav", { className: Y("space-y-0.5", o ? "px-1" : "px-2"), children: u.map((d) => /* @__PURE__ */ m(
            Uc,
            {
              item: d,
              isActive: n === d.id,
              collapsed: o,
              onActiveChange: t
            },
            d.id
          )) })
        ] }, f)) }),
        s && /* @__PURE__ */ m("div", { className: Y("shrink-0 border-t border-sidebar-border", o ? "px-1 py-2" : "px-2 py-2"), children: s }),
        /* @__PURE__ */ m("div", { className: Y("shrink-0 border-t border-sidebar-border", o ? "px-1 py-2" : "px-2 py-2"), children: /* @__PURE__ */ m(pr, { delayDuration: 0, children: /* @__PURE__ */ W(gr, { children: [
          /* @__PURE__ */ m(mr, { asChild: !0, children: /* @__PURE__ */ m(
            "button",
            {
              onClick: () => r == null ? void 0 : r(!o),
              className: Y(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors",
                o && "justify-center px-0"
              ),
              children: o ? /* @__PURE__ */ m(Sr, { className: "h-4 w-4" }) : /* @__PURE__ */ W(Nt, { children: [
                /* @__PURE__ */ m(Pa, { className: "h-4 w-4" }),
                /* @__PURE__ */ m("span", { children: "Collapse" })
              ] })
            }
          ) }),
          o && /* @__PURE__ */ m(Kn, { side: "right", children: /* @__PURE__ */ m("p", { children: "Expand sidebar" }) })
        ] }) }) })
      ]
    }
  );
}
function Nb({ filter: e, onSelect: n, onClose: t }) {
  const [o, r] = c.useState("");
  return e.type === "select" && e.options ? /* @__PURE__ */ W("div", { className: "space-y-1", children: [
    /* @__PURE__ */ W("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Select ",
      e.label
    ] }),
    e.options.map((i) => /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          n(i.value, i.label), t();
        },
        children: i.label
      },
      i.value
    ))
  ] }) : e.type === "boolean" ? /* @__PURE__ */ W("div", { className: "space-y-1", children: [
    /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: e.label }),
    /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          n("true", "Yes"), t();
        },
        children: "Yes"
      }
    ),
    /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          n("false", "No"), t();
        },
        children: "No"
      }
    )
  ] }) : /* @__PURE__ */ W("div", { className: "space-y-2", children: [
    /* @__PURE__ */ W("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Enter ",
      e.label
    ] }),
    /* @__PURE__ */ W("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ m(
        Vn,
        {
          value: o,
          onChange: (i) => r(i.target.value),
          placeholder: `Filter by ${e.label.toLowerCase()}...`,
          className: "h-7 text-sm",
          onKeyDown: (i) => {
            i.key === "Enter" && o.trim() && (n(o.trim(), o.trim()), t());
          },
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ m(
        It,
        {
          size: "sm",
          className: "h-7 text-xs",
          onClick: () => {
            o.trim() && (n(o.trim(), o.trim()), t());
          },
          children: "Apply"
        }
      )
    ] })
  ] });
}
function Xb({
  availableFilters: e,
  activeFilters: n,
  onAdd: t,
  onRemove: o,
  onClear: r,
  searchValue: i,
  onSearchChange: s,
  searchPlaceholder: a = "Search..."
}) {
  const [l, u] = c.useState(null), [f, d] = c.useState(!1), [g, p] = c.useState(!1), h = new Set(n.map((y) => y.filterId)), v = e.filter((y) => !h.has(y.id)), w = (y) => {
    p(!1), u(y), d(!0);
  }, b = (y, x) => {
    l && (t({
      filterId: l.id,
      label: `${l.label}: ${x}`,
      value: y
    }), u(null), d(!1));
  };
  return /* @__PURE__ */ W("div", { className: "flex items-center gap-2 flex-wrap", children: [
    s && /* @__PURE__ */ W("div", { className: "relative", children: [
      /* @__PURE__ */ m(Ma, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ m(
        Vn,
        {
          value: i ?? "",
          onChange: (y) => s(y.target.value),
          placeholder: a,
          className: "h-7 pl-7 text-sm w-48"
        }
      )
    ] }),
    n.map((y) => /* @__PURE__ */ W(
      id,
      {
        variant: "secondary",
        className: "flex items-center gap-1 h-6 px-2 text-xs font-normal rounded-md",
        children: [
          /* @__PURE__ */ m("span", { children: y.label }),
          /* @__PURE__ */ W(
            "button",
            {
              onClick: () => o(y.filterId),
              className: "ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity",
              children: [
                /* @__PURE__ */ m(Aa, { className: "h-3 w-3" }),
                /* @__PURE__ */ m("span", { className: "sr-only", children: "Remove filter" })
              ]
            }
          )
        ]
      },
      y.filterId
    )),
    /* @__PURE__ */ W(gv, { open: f, onOpenChange: (y) => {
      d(y), y || u(null);
    }, children: [
      /* @__PURE__ */ W(Bh, { open: g, onOpenChange: p, children: [
        /* @__PURE__ */ m(mv, { asChild: !0, children: /* @__PURE__ */ m("span", {}) }),
        /* @__PURE__ */ m(Gh, { asChild: !0, children: /* @__PURE__ */ W(
          It,
          {
            variant: "ghost",
            size: "sm",
            className: Y(
              "h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
              v.length === 0 && "opacity-50 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ m(em, { className: "h-3.5 w-3.5" }),
              "Filter"
            ]
          }
        ) }),
        /* @__PURE__ */ W(zl, { align: "start", className: "w-44", children: [
          /* @__PURE__ */ m(Bl, { className: "text-xs", children: "Add filter" }),
          /* @__PURE__ */ m(Gl, {}),
          v.map((y) => /* @__PURE__ */ W(
            Hl,
            {
              onClick: () => w(y),
              className: "text-sm",
              children: [
                /* @__PURE__ */ m(Kg, { className: "h-3.5 w-3.5 mr-2 opacity-50" }),
                y.label
              ]
            },
            y.id
          )),
          v.length === 0 && /* @__PURE__ */ m("p", { className: "px-2 py-1.5 text-xs text-muted-foreground", children: "All filters active" })
        ] })
      ] }),
      l && /* @__PURE__ */ m(nc, { align: "start", className: "w-64 p-2", children: /* @__PURE__ */ m(
        Nb,
        {
          filter: l,
          onSelect: b,
          onClose: () => {
            d(!1), u(null);
          }
        }
      ) })
    ] }),
    n.length > 0 && /* @__PURE__ */ m(
      "button",
      {
        onClick: r,
        className: "text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline",
        children: "Clear all"
      }
    )
  ] });
}
function qb({
  groups: e,
  placeholder: n = "Type a command or search...",
  open: t,
  onOpenChange: o,
  triggerShortcut: r = !0
}) {
  const [i, s] = c.useState(!1), a = t !== void 0, l = a ? t : i, u = c.useCallback(
    (f) => {
      a || s(f), o == null || o(f);
    },
    [a, o]
  );
  return c.useEffect(() => {
    if (!r) return;
    const f = (d) => {
      d.key === "k" && (d.metaKey || d.ctrlKey) && (d.preventDefault(), u(!l));
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, l, u]), /* @__PURE__ */ W(nw, { open: l, onOpenChange: u, children: [
    /* @__PURE__ */ m(_c, { placeholder: n }),
    /* @__PURE__ */ W(Pc, { children: [
      /* @__PURE__ */ m(Mc, { children: "No results found." }),
      e.map((f, d) => /* @__PURE__ */ W(c.Fragment, { children: [
        d > 0 && /* @__PURE__ */ m(Nc, {}),
        /* @__PURE__ */ m(Ac, { heading: f.label, children: f.items.map((g) => {
          const p = g.icon;
          return /* @__PURE__ */ W(
            Ic,
            {
              value: [g.label, ...g.keywords ?? []].join(" "),
              onSelect: () => {
                g.onSelect(), u(!1);
              },
              children: [
                p && /* @__PURE__ */ m(p, { className: "mr-2 h-4 w-4 opacity-70" }),
                /* @__PURE__ */ m("span", { children: g.label }),
                g.shortcut && /* @__PURE__ */ m(kc, { children: g.shortcut })
              ]
            },
            g.id
          );
        }) })
      ] }, f.label))
    ] })
  ] });
}
const Yc = c.createContext(void 0), Ib = "dkn2-ui-theme";
function Kc() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Hi(e) {
  return e === "system" ? Kc() : e;
}
function Zb({
  children: e,
  defaultTheme: n = "system",
  storageKey: t = Ib
}) {
  const [o, r] = c.useState(() => typeof window > "u" ? n : localStorage.getItem(t) ?? n), [i, s] = c.useState(
    () => Hi(o)
  );
  c.useEffect(() => {
    const u = document.documentElement, f = Hi(o);
    s(f), u.classList.remove("light", "dark"), u.classList.add(f);
  }, [o]), c.useEffect(() => {
    if (o !== "system") return;
    const u = window.matchMedia("(prefers-color-scheme: dark)"), f = () => {
      const d = Kc();
      s(d), document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(d);
    };
    return u.addEventListener("change", f), () => u.removeEventListener("change", f);
  }, [o]);
  const a = c.useCallback(
    (u) => {
      localStorage.setItem(t, u), r(u);
    },
    [t]
  ), l = c.useMemo(
    () => ({ theme: o, resolvedTheme: i, setTheme: a }),
    [o, i, a]
  );
  return /* @__PURE__ */ m(Yc.Provider, { value: l, children: e });
}
function kb() {
  const e = c.useContext(Yc);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const ko = ["light", "dark", "system"], Tb = {
  light: om,
  dark: Qg,
  system: qg
}, Bi = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme"
};
function Qb() {
  const { theme: e, setTheme: n } = kb(), t = () => {
    const r = ko.indexOf(e), i = ko[(r + 1) % ko.length];
    n(i);
  }, o = Tb[e];
  return /* @__PURE__ */ m(pr, { delayDuration: 0, children: /* @__PURE__ */ W(gr, { children: [
    /* @__PURE__ */ m(mr, { asChild: !0, children: /* @__PURE__ */ m(
      It,
      {
        variant: "ghost",
        size: "icon",
        onClick: t,
        "aria-label": Bi[e],
        children: /* @__PURE__ */ m(o, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ m(Kn, { children: /* @__PURE__ */ m("p", { children: Bi[e] }) })
  ] }) });
}
export {
  id as Badge,
  It as Button,
  Ec as Command,
  nw as CommandDialog,
  Mc as CommandEmpty,
  Ac as CommandGroup,
  _c as CommandInput,
  Ic as CommandItem,
  Pc as CommandList,
  qb as CommandMenu,
  Nc as CommandSeparator,
  kc as CommandShortcut,
  Yb as DataTable,
  im as Dialog,
  zb as DialogClose,
  Ia as DialogContent,
  Da as DialogDescription,
  am as DialogFooter,
  ka as DialogHeader,
  Na as DialogOverlay,
  sm as DialogPortal,
  Ta as DialogTitle,
  Vb as DialogTrigger,
  Bh as DropdownMenu,
  Uh as DropdownMenuCheckboxItem,
  zl as DropdownMenuContent,
  Hb as DropdownMenuGroup,
  Hl as DropdownMenuItem,
  Bl as DropdownMenuLabel,
  Bb as DropdownMenuPortal,
  Wb as DropdownMenuRadioGroup,
  Yh as DropdownMenuRadioItem,
  Gl as DropdownMenuSeparator,
  Kh as DropdownMenuShortcut,
  Gb as DropdownMenuSub,
  jh as DropdownMenuSubContent,
  Wh as DropdownMenuSubTrigger,
  Gh as DropdownMenuTrigger,
  Xb as FilterBar,
  Vn as Input,
  cd as Label,
  gv as Popover,
  jb as PopoverAnchor,
  nc as PopoverContent,
  mv as PopoverTrigger,
  Nv as ScrollArea,
  hc as ScrollBar,
  ms as Separator,
  Kb as SideMenu,
  Tc as Table,
  Oc as TableBody,
  rw as TableCaption,
  Uo as TableCell,
  ow as TableFooter,
  Fc as TableHead,
  Dc as TableHeader,
  _n as TableRow,
  Zb as ThemeProvider,
  Qb as ThemeToggle,
  Ub as Toaster,
  gr as Tooltip,
  Kn as TooltipContent,
  pr as TooltipProvider,
  mr as TooltipTrigger,
  rd as badgeVariants,
  od as buttonVariants,
  Y as cn,
  kb as useTheme
};
