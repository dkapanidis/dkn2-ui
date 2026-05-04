import { jsx as m, jsxs as z, Fragment as qt } from "react/jsx-runtime";
import * as f from "react";
import V, { useLayoutEffect as dl, useState as Xe, forwardRef as fl, createElement as ii, createContext as Bt, useRef as me, useEffect as we, useContext as ze, useId as pw, useCallback as He, useMemo as Ee, Fragment as uf, useInsertionEffect as df, Component as hw, memo as mw, useReducer as gw } from "react";
import * as Li from "react-dom";
import ff, { unstable_batchedUpdates as Mo, createPortal as ca } from "react-dom";
function Fc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ct(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Fc(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Fc(e[o], null);
        }
      };
  };
}
function he(...e) {
  return f.useCallback(ct(...e), e);
}
var vw = Symbol.for("react.lazy"), si = f[" use ".trim().toString()];
function yw(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function pf(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === vw && "_payload" in e && yw(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = /* @__PURE__ */ ww(e), n = f.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    pf(i) && typeof si == "function" && (i = si(i._payload));
    const a = f.Children.toArray(i), l = a.find(xw);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var hf = /* @__PURE__ */ Fi("Slot");
// @__NO_SIDE_EFFECTS__
function ww(e) {
  const t = f.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (pf(o) && typeof si == "function" && (o = si(o._payload)), f.isValidElement(o)) {
      const s = Cw(o), a = Sw(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var bw = Symbol("radix.slottable");
function xw(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bw;
}
function Sw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Cw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function mf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = mf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function gf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = mf(e)) && (r && (r += " "), r += t);
  return r;
}
const Vc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $c = gf, vf = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return $c(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], u = i == null ? void 0 : i[c];
    if (d === null) return null;
    const p = Vc(d) || Vc(u);
    return o[c][p];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [u, p] = d;
    return p === void 0 || (c[u] = p), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: u, className: p, ...h } = d;
    return Object.entries(h).every((v) => {
      let [g, y] = v;
      return Array.isArray(y) ? y.includes({
        ...i,
        ...a
      }[g]) : {
        ...i,
        ...a
      }[g] === y;
    }) ? [
      ...c,
      u,
      p
    ] : c;
  }, []);
  return $c(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Rw = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Ew = (e, t) => ({
  classGroupId: e,
  validator: t
}), yf = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), ai = "-", Bc = [], Pw = "arbitrary..", Tw = (e) => {
  const t = Aw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Mw(s);
      const a = s.split(ai), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return wf(a, l, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = r[s], c = n[s];
        return l ? c ? Rw(c, l) : l : c || Bc;
      }
      return n[s] || Bc;
    }
  };
}, wf = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const c = wf(e, t + 1, i);
    if (c) return c;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(ai) : e.slice(t).join(ai), l = s.length;
  for (let c = 0; c < l; c++) {
    const d = s[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Mw = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Pw + r : void 0;
})(), Aw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Dw(n, t);
}, Dw = (e, t) => {
  const n = yf();
  for (const r in e) {
    const o = e[r];
    pl(o, n, r, t);
  }
  return n;
}, pl = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    Iw(s, t, n, r);
  }
}, Iw = (e, t, n, r) => {
  if (typeof e == "string") {
    Nw(e, t, n);
    return;
  }
  if (typeof e == "function") {
    kw(e, t, n, r);
    return;
  }
  _w(e, t, n, r);
}, Nw = (e, t, n) => {
  const r = e === "" ? t : bf(t, e);
  r.classGroupId = n;
}, kw = (e, t, n, r) => {
  if (Ow(e)) {
    pl(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Ew(n, e));
}, _w = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    pl(l, bf(t, a), n, r);
  }
}, bf = (e, t) => {
  let n = e;
  const r = t.split(ai), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = yf(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, Ow = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Lw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, s) => {
    n[i] = s, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = n[i];
      if (s !== void 0)
        return s;
      if ((s = r[i]) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      i in n ? n[i] = s : o(i, s);
    }
  };
}, ua = "!", zc = ":", Fw = [], Hc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Vw = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let g = 0; g < d; g++) {
      const y = o[g];
      if (s === 0 && a === 0) {
        if (y === zc) {
          i.push(o.slice(l, g)), l = g + 1;
          continue;
        }
        if (y === "/") {
          c = g;
          continue;
        }
      }
      y === "[" ? s++ : y === "]" ? s-- : y === "(" ? a++ : y === ")" && a--;
    }
    const u = i.length === 0 ? o : o.slice(l);
    let p = u, h = !1;
    u.endsWith(ua) ? (p = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(ua) && (p = u.slice(1), h = !0)
    );
    const v = c && c > l ? c - l : void 0;
    return Hc(i, h, p, v);
  };
  if (t) {
    const o = t + zc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Hc(Fw, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, $w = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", l = t.has(s);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Bw = (e) => ({
  cache: Lw(e.cacheSize),
  parseClassName: Vw(e),
  sortModifiers: $w(e),
  ...Tw(e)
}), zw = /\s+/, Hw = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(zw);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: u,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = n(d);
    if (u) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!g, w = r(y ? v.substring(0, g) : v);
    if (!w) {
      if (!y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(v), !w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), b = h ? x + ua : x, S = b + w;
    if (s.indexOf(S) > -1)
      continue;
    s.push(S);
    const C = o(w, y);
    for (let P = 0; P < C.length; ++P) {
      const E = C[P];
      s.push(b + E);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, jw = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = xf(n)) && (o && (o += " "), o += r);
  return o;
}, xf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xf(e[r])) && (n && (n += " "), n += t);
  return n;
}, Ww = (e, ...t) => {
  let n, r, o, i;
  const s = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = Bw(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = Hw(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(jw(...l));
}, Gw = [], Ue = (e) => {
  const t = (n) => n[e] || Gw;
  return t.isThemeGetter = !0, t;
}, Sf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Cf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Uw = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Kw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, qw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pn = (e) => Uw.test(e), pe = (e) => !!e && !Number.isNaN(Number(e)), hn = (e) => !!e && Number.isInteger(Number(e)), ys = (e) => e.endsWith("%") && pe(e.slice(0, -1)), rn = (e) => Kw.test(e), Rf = () => !0, Jw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yw.test(e) && !Xw.test(e)
), hl = () => !1, Qw = (e) => qw.test(e), eb = (e) => Zw.test(e), tb = (e) => !ee(e) && !ne(e), nb = (e) => Dn(e, Tf, hl), ee = (e) => Sf.test(e), $n = (e) => Dn(e, Mf, Jw), jc = (e) => Dn(e, ub, pe), rb = (e) => Dn(e, Df, Rf), ob = (e) => Dn(e, Af, hl), Wc = (e) => Dn(e, Ef, hl), ib = (e) => Dn(e, Pf, eb), Ao = (e) => Dn(e, If, Qw), ne = (e) => Cf.test(e), Or = (e) => Jn(e, Mf), sb = (e) => Jn(e, Af), Gc = (e) => Jn(e, Ef), ab = (e) => Jn(e, Tf), lb = (e) => Jn(e, Pf), Do = (e) => Jn(e, If, !0), cb = (e) => Jn(e, Df, !0), Dn = (e, t, n) => {
  const r = Sf.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Jn = (e, t, n = !1) => {
  const r = Cf.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Ef = (e) => e === "position" || e === "percentage", Pf = (e) => e === "image" || e === "url", Tf = (e) => e === "length" || e === "size" || e === "bg-size", Mf = (e) => e === "length", ub = (e) => e === "number", Af = (e) => e === "family-name", Df = (e) => e === "number" || e === "weight", If = (e) => e === "shadow", db = () => {
  const e = Ue("color"), t = Ue("font"), n = Ue("text"), r = Ue("font-weight"), o = Ue("tracking"), i = Ue("leading"), s = Ue("breakpoint"), a = Ue("container"), l = Ue("spacing"), c = Ue("radius"), d = Ue("shadow"), u = Ue("inset-shadow"), p = Ue("text-shadow"), h = Ue("drop-shadow"), v = Ue("blur"), g = Ue("perspective"), y = Ue("aspect"), w = Ue("ease"), x = Ue("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], C = () => [...S(), ne, ee], P = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], R = () => [ne, ee, l], A = () => [pn, "full", "auto", ...R()], T = () => [hn, "none", "subgrid", ne, ee], k = () => ["auto", {
    span: ["full", hn, ne, ee]
  }, hn, ne, ee], W = () => [hn, "auto", ne, ee], X = () => ["auto", "min", "max", "fr", ne, ee], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...R()], K = () => [pn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], B = () => [pn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...R()], L = () => [pn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...R()], N = () => [e, ne, ee], se = () => [...S(), Gc, Wc, {
    position: [ne, ee]
  }], M = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], F = () => ["auto", "cover", "contain", ab, nb, {
    size: [ne, ee]
  }], G = () => [ys, Or, $n], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    ne,
    ee
  ], j = () => ["", pe, Or, $n], $ = () => ["solid", "dashed", "dotted", "double"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => [pe, ys, Gc, Wc], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    ne,
    ee
  ], oe = () => ["none", pe, ne, ee], ie = () => ["none", pe, ne, ee], Pe = () => [pe, ne, ee], xe = () => [pn, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [rn],
      breakpoint: [rn],
      color: [Rf],
      container: [rn],
      "drop-shadow": [rn],
      ease: ["in", "out", "in-out"],
      font: [tb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [rn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [rn],
      shadow: [rn],
      spacing: ["px", pe],
      text: [rn],
      "text-shadow": [rn],
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
        aspect: ["auto", "square", pn, ee, ne, y]
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
        columns: [pe, ee, ne, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        object: C()
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
        inset: A()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": A(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: A()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": A(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: A()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": A()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
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
        z: [hn, "auto", ne, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pn, "full", "auto", a, ...R()]
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
        flex: [pe, pn, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", pe, ne, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", pe, ne, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [hn, "first", "last", "none", ne, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": T()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: k()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": T()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: k()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": X()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": X()
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
        justify: [...Y(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Y()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Y()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Q()]
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
        m: O()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: O()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
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
        size: K()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...B()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...B()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...B()]
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
        w: [a, "screen", ...K()]
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
          ...K()
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
          ...K()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...K()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...K()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...K()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Or, $n]
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
        font: [r, cb, rb]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ys, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sb, ob, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ee]
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
        tracking: [o, ne, ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [pe, "none", ne, jc]
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
        "list-image": ["none", ne, ee]
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
        list: ["disc", "decimal", "none", ne, ee]
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
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
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
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [pe, "from-font", "auto", ne, $n]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [pe, "auto", ne, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, ee]
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
        content: ["none", ne, ee]
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
        bg: M()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: F()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, hn, ne, ee],
          radial: ["", ne, ee],
          conic: [hn, ne, ee]
        }, lb, ib]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: _()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: j()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": j()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": j()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": j()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": j()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": j()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": j()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": j()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": j()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": j()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": j()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": j()
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
        "divide-y": j()
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
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: N()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": N()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pe, ne, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", pe, Or, $n]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
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
          Do,
          Ao
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Do, Ao]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: j()
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
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [pe, $n]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": j()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Do, Ao]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [pe, ne, ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
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
        "mask-linear": [pe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": U()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": U()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": U()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": U()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": U()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": U()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": U()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [ne, ee]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
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
        "mask-conic": [pe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": U()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
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
        mask: M()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: F()
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
        mask: ["none", ne, ee]
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
          ne,
          ee
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [pe, ne, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [pe, ne, ee]
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
          Do,
          Ao
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", pe, ne, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [pe, ne, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", pe, ne, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [pe, ne, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", pe, ne, ee]
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
          ne,
          ee
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [pe, ne, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [pe, ne, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", pe, ne, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [pe, ne, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", pe, ne, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [pe, ne, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [pe, ne, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", pe, ne, ee]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, ee]
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
        duration: [pe, "initial", ne, ee]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, ne, ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [pe, ne, ee]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, ne, ee]
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
        perspective: [g, ne, ee]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": oe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
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
        skew: Pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ne, ee, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        translate: xe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": xe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": xe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": xe()
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
        accent: N()
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
        caret: N()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, ee]
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
        "will-change": ["auto", "scroll", "contents", "transform", ne, ee]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [pe, Or, $n, jc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
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
}, fb = /* @__PURE__ */ Ww(db);
function J(...e) {
  return fb(gf(e));
}
const pb = vf(
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
), pr = f.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ m(
    r ? hf : "button",
    {
      className: J(pb({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  )
);
pr.displayName = "Button";
const hb = vf(
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
function mb({ className: e, variant: t, asChild: n = !1, ...r }) {
  return /* @__PURE__ */ m(n ? hf : "span", { className: J(hb({ variant: t }), e), ...r });
}
const Vi = f.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ m(
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
Vi.displayName = "Input";
var gb = [
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
], vb = gb.reduce((e, t) => {
  const n = /* @__PURE__ */ Fi(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), yb = "Label", Nf = f.forwardRef((e, t) => /* @__PURE__ */ m(
  vb.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Nf.displayName = yb;
var kf = Nf;
const wb = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  kf,
  {
    ref: n,
    className: J(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...t
  }
));
wb.displayName = kf.displayName;
function da(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function bb(e, t) {
  const n = f.createContext(t), r = (i) => {
    const { children: s, ...a } = i, l = f.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ m(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = f.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function zt(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = f.createContext(s), l = n.length;
    n = [...n, s];
    const c = (u) => {
      var w;
      const { scope: p, children: h, ...v } = u, g = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || a, y = f.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ m(g.Provider, { value: y, children: h });
    };
    c.displayName = i + "Provider";
    function d(u, p) {
      var g;
      const h = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[l]) || a, v = f.useContext(h);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const o = () => {
    const i = n.map((s) => f.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, xb(o, ...t)];
}
function xb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(i)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Uc(e) {
  const t = /* @__PURE__ */ Sb(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(Rb);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Sb(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = Pb(o), a = Eb(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Cb = Symbol("radix.slottable");
function Rb(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cb;
}
function Eb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Pb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ml(e) {
  const t = e + "CollectionProvider", [n, r] = zt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: y, children: w } = g, x = V.useRef(null), b = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(o, { scope: y, itemMap: b, collectionRef: x, children: w });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Uc(a), c = V.forwardRef(
    (g, y) => {
      const { scope: w, children: x } = g, b = i(a, w), S = he(y, b.collectionRef);
      return /* @__PURE__ */ m(l, { ref: S, children: x });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", p = /* @__PURE__ */ Uc(d), h = V.forwardRef(
    (g, y) => {
      const { scope: w, children: x, ...b } = g, S = V.useRef(null), C = he(y, S), P = i(d, w);
      return V.useEffect(() => (P.itemMap.set(S, { ref: S, ...b }), () => void P.itemMap.delete(S))), /* @__PURE__ */ m(p, { [u]: "", ref: C, children: x });
    }
  );
  h.displayName = d;
  function v(g) {
    const y = i(e + "CollectionConsumer", g);
    return V.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const b = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (P, E) => b.indexOf(P.ref.current) - b.indexOf(E.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: h },
    v,
    r
  ];
}
var Tb = f.createContext(void 0);
function $i(e) {
  const t = f.useContext(Tb);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function Mb(e) {
  const t = /* @__PURE__ */ Ab(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(Ib);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ab(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = kb(o), a = Nb(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Db = Symbol("radix.slottable");
function Ib(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Db;
}
function Nb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _b = [
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
], de = _b.reduce((e, t) => {
  const n = /* @__PURE__ */ Mb(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function _f(e, t) {
  e && Li.flushSync(() => e.dispatchEvent(t));
}
function Je(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ob(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Lb = "DismissableLayer", fa = "dismissableLayer.update", Fb = "dismissableLayer.pointerDownOutside", Vb = "dismissableLayer.focusOutside", Kc, Of = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xr = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = f.useContext(Of), [d, u] = f.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = f.useState({}), v = he(t, (E) => u(E)), g = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(y), x = d ? g.indexOf(d) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= w, C = zb((E) => {
      const R = E.target, A = [...c.branches].some((T) => T.contains(R));
      !S || A || (o == null || o(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, p), P = Hb((E) => {
      const R = E.target;
      [...c.branches].some((T) => T.contains(R)) || (i == null || i(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, p);
    return Ob((E) => {
      x === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, p), f.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Kc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Yc(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Kc);
        };
    }, [d, p, n, c]), f.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Yc());
    }, [d, c]), f.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(fa, E), () => document.removeEventListener(fa, E);
    }, []), /* @__PURE__ */ m(
      de.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: b ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
xr.displayName = Lb;
var $b = "DismissableLayerBranch", Bb = f.forwardRef((e, t) => {
  const n = f.useContext(Of), r = f.useRef(null), o = he(t, r);
  return f.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ m(de.div, { ...e, ref: o });
});
Bb.displayName = $b;
function zb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Lf(
            Fb,
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
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Hb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = f.useRef(!1);
  return f.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Lf(Vb, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Yc() {
  const e = new CustomEvent(fa);
  document.dispatchEvent(e);
}
function Lf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? _f(o, i) : o.dispatchEvent(i);
}
var ws = 0;
function Bi() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Xc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Xc()), ws++, () => {
      ws === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ws--;
    };
  }, []);
}
function Xc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var bs = "focusScope.autoFocusOnMount", xs = "focusScope.autoFocusOnUnmount", qc = { bubbles: !1, cancelable: !0 }, jb = "FocusScope", lo = f.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = f.useState(null), c = Je(o), d = Je(i), u = f.useRef(null), p = he(t, (g) => l(g)), h = f.useRef({
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
      let g = function(b) {
        if (h.paused || !a) return;
        const S = b.target;
        a.contains(S) ? u.current = S : mn(u.current, { select: !0 });
      }, y = function(b) {
        if (h.paused || !a) return;
        const S = b.relatedTarget;
        S !== null && (a.contains(S) || mn(u.current, { select: !0 }));
      }, w = function(b) {
        if (document.activeElement === document.body)
          for (const C of b)
            C.removedNodes.length > 0 && mn(a);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", y);
      const x = new MutationObserver(w);
      return a && x.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", y), x.disconnect();
      };
    }
  }, [r, a, h.paused]), f.useEffect(() => {
    if (a) {
      Jc.add(h);
      const g = document.activeElement;
      if (!a.contains(g)) {
        const w = new CustomEvent(bs, qc);
        a.addEventListener(bs, c), a.dispatchEvent(w), w.defaultPrevented || (Wb(Xb(Ff(a)), { select: !0 }), document.activeElement === g && mn(a));
      }
      return () => {
        a.removeEventListener(bs, c), setTimeout(() => {
          const w = new CustomEvent(xs, qc);
          a.addEventListener(xs, d), a.dispatchEvent(w), w.defaultPrevented || mn(g ?? document.body, { select: !0 }), a.removeEventListener(xs, d), Jc.remove(h);
        }, 0);
      };
    }
  }, [a, c, d, h]);
  const v = f.useCallback(
    (g) => {
      if (!n && !r || h.paused) return;
      const y = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (y && w) {
        const x = g.currentTarget, [b, S] = Gb(x);
        b && S ? !g.shiftKey && w === S ? (g.preventDefault(), n && mn(b, { select: !0 })) : g.shiftKey && w === b && (g.preventDefault(), n && mn(S, { select: !0 })) : w === x && g.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ m(de.div, { tabIndex: -1, ...s, ref: p, onKeyDown: v });
});
lo.displayName = jb;
function Wb(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mn(r, { select: t }), document.activeElement !== n) return;
}
function Gb(e) {
  const t = Ff(e), n = Zc(t, e), r = Zc(t.reverse(), e);
  return [n, r];
}
function Ff(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zc(e, t) {
  for (const n of e)
    if (!Ub(n, { upTo: t })) return n;
}
function Ub(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Kb(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Kb(e) && t && e.select();
  }
}
var Jc = Yb();
function Yb() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qc(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qc(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Qc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Xb(e) {
  return e.filter((t) => t.tagName !== "A");
}
var nt = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, qb = f[" useId ".trim().toString()] || (() => {
}), Zb = 0;
function qe(e) {
  const [t, n] = f.useState(qb());
  return nt(() => {
    n((r) => r ?? String(Zb++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Jb = ["top", "right", "bottom", "left"], Rn = Math.min, wt = Math.max, li = Math.round, Io = Math.floor, Yt = (e) => ({
  x: e,
  y: e
}), Qb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pa(e, t, n) {
  return wt(e, Rn(t, n));
}
function sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function Sr(e) {
  return e.split("-")[1];
}
function gl(e) {
  return e === "x" ? "y" : "x";
}
function vl(e) {
  return e === "y" ? "height" : "width";
}
function Kt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function yl(e) {
  return gl(Kt(e));
}
function ex(e, t, n) {
  n === void 0 && (n = !1);
  const r = Sr(e), o = yl(e), i = vl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ci(s)), [s, ci(s)];
}
function tx(e) {
  const t = ci(e);
  return [ha(e), t, ha(t)];
}
function ha(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const eu = ["left", "right"], tu = ["right", "left"], nx = ["top", "bottom"], rx = ["bottom", "top"];
function ox(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? tu : eu : t ? eu : tu;
    case "left":
    case "right":
      return t ? nx : rx;
    default:
      return [];
  }
}
function ix(e, t, n, r) {
  const o = Sr(e);
  let i = ox(an(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ha)))), i;
}
function ci(e) {
  const t = an(e);
  return Qb[t] + e.slice(t.length);
}
function sx(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vf(e) {
  return typeof e != "number" ? sx(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ui(e) {
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
function nu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Kt(t), s = yl(t), a = vl(s), l = an(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Sr(t)) {
    case "start":
      h[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
async function ax(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = sn(t, e), v = Vf(h), y = a[p ? u === "floating" ? "reference" : "floating" : u], w = ui(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), x = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ui(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: b,
    strategy: l
  }) : x);
  return {
    top: (w.top - C.top + v.top) / S.y,
    bottom: (C.bottom - w.bottom + v.bottom) / S.y,
    left: (w.left - C.left + v.left) / S.x,
    right: (C.right - w.right + v.right) / S.x
  };
}
const lx = 50, cx = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: ax
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = nu(c, r, l), p = r, h = 0;
  const v = {};
  for (let g = 0; g < i.length; g++) {
    const y = i[g];
    if (!y)
      continue;
    const {
      name: w,
      fn: x
    } = y, {
      x: b,
      y: S,
      data: C,
      reset: P
    } = await x({
      x: d,
      y: u,
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
    d = b ?? d, u = S ?? u, v[w] = {
      ...v[w],
      ...C
    }, P && h < lx && (h++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (c = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: d,
      y: u
    } = nu(c, p, l)), g = -1);
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: v
  };
}, ux = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = sn(e, t) || {};
    if (c == null)
      return {};
    const u = Vf(d), p = {
      x: n,
      y: r
    }, h = yl(o), v = vl(h), g = await s.getDimensions(c), y = h === "y", w = y ? "top" : "left", x = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", S = i.reference[v] + i.reference[h] - p[h] - i.floating[v], C = p[h] - i.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = P ? P[b] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(P))) && (E = a.floating[b] || i.floating[v]);
    const R = S / 2 - C / 2, A = E / 2 - g[v] / 2 - 1, T = Rn(u[w], A), k = Rn(u[x], A), W = T, X = E - g[v] - k, Y = E / 2 - g[v] / 2 + R, Q = pa(W, Y, X), O = !l.arrow && Sr(o) != null && Y !== Q && i.reference[v] / 2 - (Y < W ? T : k) - g[v] / 2 < 0, K = O ? Y < W ? Y - W : Y - X : 0;
    return {
      [h]: p[h] + K,
      data: {
        [h]: Q,
        centerOffset: Y - Q - K,
        ...O && {
          alignmentOffset: K
        }
      },
      reset: O
    };
  }
}), dx = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...y
      } = sn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = an(o), x = Kt(a), b = an(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = p || (b || !g ? [ci(a)] : tx(a)), P = v !== "none";
      !p && P && C.push(...ix(a, g, v, S));
      const E = [a, ...C], R = await l.detectOverflow(t, y), A = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(R[w]), u) {
        const Y = ex(o, s, S);
        A.push(R[Y[0]], R[Y[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((Y) => Y <= 0)) {
        var k, W;
        const Y = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, Q = E[Y];
        if (Q && (!(u === "alignment" ? x !== Kt(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((B) => Kt(B.placement) === x ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Y,
              overflows: T
            },
            reset: {
              placement: Q
            }
          };
        let O = (W = T.filter((K) => K.overflows[0] <= 0).sort((K, B) => K.overflows[1] - B.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!O)
          switch (h) {
            case "bestFit": {
              var X;
              const K = (X = T.filter((B) => {
                if (P) {
                  const L = Kt(B.placement);
                  return L === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((L) => L > 0).reduce((L, N) => L + N, 0)]).sort((B, L) => B[1] - L[1])[0]) == null ? void 0 : X[0];
              K && (O = K);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function ru(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ou(e) {
  return Jb.some((t) => e[t] >= 0);
}
const fx = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = sn(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), a = ru(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ou(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = ru(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ou(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, $f = /* @__PURE__ */ new Set(["left", "top"]);
async function px(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = an(n), a = Sr(n), l = Kt(n) === "y", c = $f.has(s) ? -1 : 1, d = i && l ? -1 : 1, u = sn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: v
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * d,
    y: p * c
  } : {
    x: p * c,
    y: h * d
  };
}
const hx = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await px(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, mx = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x,
              y: b
            } = w;
            return {
              x,
              y: b
            };
          }
        },
        ...c
      } = sn(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, c), p = Kt(an(o)), h = gl(p);
      let v = d[h], g = d[p];
      if (s) {
        const w = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", b = v + u[w], S = v - u[x];
        v = pa(b, v, S);
      }
      if (a) {
        const w = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", b = g + u[w], S = g - u[x];
        g = pa(b, g, S);
      }
      const y = l.fn({
        ...t,
        [h]: v,
        [p]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: s,
            [p]: a
          }
        }
      };
    }
  };
}, gx = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = sn(e, t), d = {
        x: n,
        y: r
      }, u = Kt(o), p = gl(u);
      let h = d[p], v = d[u];
      const g = sn(a, t), y = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const b = p === "y" ? "height" : "width", S = i.reference[p] - i.floating[b] + y.mainAxis, C = i.reference[p] + i.reference[b] - y.mainAxis;
        h < S ? h = S : h > C && (h = C);
      }
      if (c) {
        var w, x;
        const b = p === "y" ? "width" : "height", S = $f.has(an(o)), C = i.reference[u] - i.floating[b] + (S && ((w = s.offset) == null ? void 0 : w[u]) || 0) + (S ? 0 : y.crossAxis), P = i.reference[u] + i.reference[b] + (S ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (S ? y.crossAxis : 0);
        v < C ? v = C : v > P && (v = P);
      }
      return {
        [p]: h,
        [u]: v
      };
    }
  };
}, vx = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = sn(e, t), d = await s.detectOverflow(t, c), u = an(o), p = Sr(o), h = Kt(o) === "y", {
        width: v,
        height: g
      } = i.floating;
      let y, w;
      u === "top" || u === "bottom" ? (y = u, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = u, y = p === "end" ? "top" : "bottom");
      const x = g - d.top - d.bottom, b = v - d.left - d.right, S = Rn(g - d[y], x), C = Rn(v - d[w], b), P = !t.middlewareData.shift;
      let E = S, R = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = b), (r = t.middlewareData.shift) != null && r.enabled.y && (E = x), P && !p) {
        const T = wt(d.left, 0), k = wt(d.right, 0), W = wt(d.top, 0), X = wt(d.bottom, 0);
        h ? R = v - 2 * (T !== 0 || k !== 0 ? T + k : wt(d.left, d.right)) : E = g - 2 * (W !== 0 || X !== 0 ? W + X : wt(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: E
      });
      const A = await s.getDimensions(a.floating);
      return v !== A.width || g !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zi() {
  return typeof window < "u";
}
function Cr(e) {
  return Bf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qt(e) {
  var t;
  return (t = (Bf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Bf(e) {
  return zi() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function Ft(e) {
  return zi() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function un(e) {
  return zi() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function iu(e) {
  return !zi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
function co(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function yx(e) {
  return /^(table|td|th)$/.test(Cr(e));
}
function Hi(e) {
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
const wx = /transform|translate|scale|rotate|perspective|filter/, bx = /paint|layout|strict|content/, Bn = (e) => !!e && e !== "none";
let Ss;
function wl(e) {
  const t = Ft(e) ? Vt(e) : e;
  return Bn(t.transform) || Bn(t.translate) || Bn(t.scale) || Bn(t.rotate) || Bn(t.perspective) || !bl() && (Bn(t.backdropFilter) || Bn(t.filter)) || wx.test(t.willChange || "") || bx.test(t.contain || "");
}
function xx(e) {
  let t = En(e);
  for (; un(t) && !hr(t); ) {
    if (wl(t))
      return t;
    if (Hi(t))
      return null;
    t = En(t);
  }
  return null;
}
function bl() {
  return Ss == null && (Ss = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ss;
}
function hr(e) {
  return /^(html|body|#document)$/.test(Cr(e));
}
function Vt(e) {
  return bt(e).getComputedStyle(e);
}
function ji(e) {
  return Ft(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function En(e) {
  if (Cr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    iu(e) && e.host || // Fallback.
    Qt(e)
  );
  return iu(t) ? t.host : t;
}
function zf(e) {
  const t = En(e);
  return hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : un(t) && co(t) ? t : zf(t);
}
function qr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zf(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = bt(o);
  if (i) {
    const a = ma(s);
    return t.concat(s, s.visualViewport || [], co(o) ? o : [], a && n ? qr(a) : []);
  } else
    return t.concat(o, qr(o, [], n));
}
function ma(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hf(e) {
  const t = Vt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = un(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = li(n) !== i || li(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function xl(e) {
  return Ft(e) ? e : e.contextElement;
}
function ur(e) {
  const t = xl(e);
  if (!un(t))
    return Yt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Hf(t);
  let s = (i ? li(n.width) : n.width) / r, a = (i ? li(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Sx = /* @__PURE__ */ Yt(0);
function jf(e) {
  const t = bt(e);
  return !bl() || !t.visualViewport ? Sx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cx(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bt(e) ? !1 : t;
}
function Kn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = xl(e);
  let s = Yt(1);
  t && (r ? Ft(r) && (s = ur(r)) : s = ur(e));
  const a = Cx(i, n, r) ? jf(i) : Yt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i) {
    const p = bt(i), h = r && Ft(r) ? bt(r) : r;
    let v = p, g = ma(v);
    for (; g && r && h !== v; ) {
      const y = ur(g), w = g.getBoundingClientRect(), x = Vt(g), b = w.left + (g.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = w.top + (g.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, u *= y.y, l += b, c += S, v = bt(g), g = ma(v);
    }
  }
  return ui({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Wi(e, t) {
  const n = ji(e).scrollLeft;
  return t ? t.left + n : Kn(Qt(e)).left + n;
}
function Wf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Wi(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Rx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Qt(r), a = t ? Hi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Yt(1);
  const d = Yt(0), u = un(r);
  if ((u || !u && !i) && ((Cr(r) !== "body" || co(s)) && (l = ji(r)), u)) {
    const h = Kn(r);
    c = ur(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !u && !i ? Wf(s, l) : Yt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + p.y
  };
}
function Ex(e) {
  return Array.from(e.getClientRects());
}
function Px(e) {
  const t = Qt(e), n = ji(e), r = e.ownerDocument.body, o = wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wi(e);
  const a = -n.scrollTop;
  return Vt(r).direction === "rtl" && (s += wt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const su = 25;
function Tx(e, t) {
  const n = bt(e), r = Qt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = bl();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Wi(r);
  if (c <= 0) {
    const d = r.ownerDocument, u = d.body, p = getComputedStyle(u), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(r.clientWidth - u.clientWidth - h);
    v <= su && (i -= v);
  } else c <= su && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Mx(e, t) {
  const n = Kn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = un(e) ? ur(e) : Yt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function au(e, t, n) {
  let r;
  if (t === "viewport")
    r = Tx(e, n);
  else if (t === "document")
    r = Px(Qt(e));
  else if (Ft(t))
    r = Mx(t, n);
  else {
    const o = jf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ui(r);
}
function Gf(e, t) {
  const n = En(e);
  return n === t || !Ft(n) || hr(n) ? !1 : Vt(n).position === "fixed" || Gf(n, t);
}
function Ax(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = qr(e, [], !1).filter((a) => Ft(a) && Cr(a) !== "body"), o = null;
  const i = Vt(e).position === "fixed";
  let s = i ? En(e) : e;
  for (; Ft(s) && !hr(s); ) {
    const a = Vt(s), l = wl(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || co(s) && !l && Gf(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = En(s);
  }
  return t.set(e, r), r;
}
function Dx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Hi(t) ? [] : Ax(t, this._c) : [].concat(n), r], a = au(t, s[0], o);
  let l = a.top, c = a.right, d = a.bottom, u = a.left;
  for (let p = 1; p < s.length; p++) {
    const h = au(t, s[p], o);
    l = wt(h.top, l), c = Rn(h.right, c), d = Rn(h.bottom, d), u = wt(h.left, u);
  }
  return {
    width: c - u,
    height: d - l,
    x: u,
    y: l
  };
}
function Ix(e) {
  const {
    width: t,
    height: n
  } = Hf(e);
  return {
    width: t,
    height: n
  };
}
function Nx(e, t, n) {
  const r = un(t), o = Qt(t), i = n === "fixed", s = Kn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yt(0);
  function c() {
    l.x = Wi(o);
  }
  if (r || !r && !i)
    if ((Cr(t) !== "body" || co(o)) && (a = ji(t)), r) {
      const h = Kn(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Wf(o, a) : Yt(0), u = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: u,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Cs(e) {
  return Vt(e).position === "static";
}
function lu(e, t) {
  if (!un(e) || Vt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Qt(e) === n && (n = n.ownerDocument.body), n;
}
function Uf(e, t) {
  const n = bt(e);
  if (Hi(e))
    return n;
  if (!un(e)) {
    let o = En(e);
    for (; o && !hr(o); ) {
      if (Ft(o) && !Cs(o))
        return o;
      o = En(o);
    }
    return n;
  }
  let r = lu(e, t);
  for (; r && yx(r) && Cs(r); )
    r = lu(r, t);
  return r && hr(r) && Cs(r) && !wl(r) ? n : r || xx(e) || n;
}
const kx = async function(e) {
  const t = this.getOffsetParent || Uf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Nx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _x(e) {
  return Vt(e).direction === "rtl";
}
const Ox = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rx,
  getDocumentElement: Qt,
  getClippingRect: Dx,
  getOffsetParent: Uf,
  getElementRects: kx,
  getClientRects: Ex,
  getDimensions: Ix,
  getScale: ur,
  isElement: Ft,
  isRTL: _x
};
function Kf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Lx(e, t) {
  let n = null, r;
  const o = Qt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: p,
      height: h
    } = c;
    if (a || t(), !p || !h)
      return;
    const v = Io(u), g = Io(o.clientWidth - (d + p)), y = Io(o.clientHeight - (u + h)), w = Io(d), b = {
      rootMargin: -v + "px " + -g + "px " + -y + "px " + -w + "px",
      threshold: wt(0, Rn(1, l)) || 1
    };
    let S = !0;
    function C(P) {
      const E = P[0].intersectionRatio;
      if (E !== l) {
        if (!S)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Kf(c, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, b);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Fx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = xl(e), d = o || i ? [...c ? qr(c) : [], ...t ? qr(t) : []] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const u = c && a ? Lx(c, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === c && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), c && !l && h.observe(c), t && h.observe(t));
  let v, g = l ? Kn(e) : null;
  l && y();
  function y() {
    const w = Kn(e);
    g && !Kf(g, w) && n(), g = w, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u == null || u(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const Vx = hx, $x = mx, Bx = dx, zx = vx, Hx = fx, cu = ux, jx = gx, Wx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ox,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return cx(e, t, {
    ...o,
    platform: i
  });
};
var Gx = typeof document < "u", Ux = function() {
}, Ko = Gx ? dl : Ux;
function di(e, t) {
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
        if (!di(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !di(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Yf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function uu(e, t) {
  const n = Yf(e);
  return Math.round(t * n) / n;
}
function Rs(e) {
  const t = f.useRef(e);
  return Ko(() => {
    t.current = e;
  }), t;
}
function Kx(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
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
  }), [p, h] = f.useState(r);
  di(p, r) || h(r);
  const [v, g] = f.useState(null), [y, w] = f.useState(null), x = f.useCallback((B) => {
    B !== P.current && (P.current = B, g(B));
  }, []), b = f.useCallback((B) => {
    B !== E.current && (E.current = B, w(B));
  }, []), S = i || v, C = s || y, P = f.useRef(null), E = f.useRef(null), R = f.useRef(d), A = l != null, T = Rs(l), k = Rs(o), W = Rs(c), X = f.useCallback(() => {
    if (!P.current || !E.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: p
    };
    k.current && (B.platform = k.current), Wx(P.current, E.current, B).then((L) => {
      const N = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      Y.current && !di(R.current, N) && (R.current = N, Li.flushSync(() => {
        u(N);
      }));
    });
  }, [p, t, n, k, W]);
  Ko(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, u((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [c]);
  const Y = f.useRef(!1);
  Ko(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), Ko(() => {
    if (S && (P.current = S), C && (E.current = C), S && C) {
      if (T.current)
        return T.current(S, C, X);
      X();
    }
  }, [S, C, X, T, A]);
  const Q = f.useMemo(() => ({
    reference: P,
    floating: E,
    setReference: x,
    setFloating: b
  }), [x, b]), O = f.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), K = f.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return B;
    const L = uu(O.floating, d.x), N = uu(O.floating, d.y);
    return a ? {
      ...B,
      transform: "translate(" + L + "px, " + N + "px)",
      ...Yf(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: N
    };
  }, [n, a, O.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: X,
    refs: Q,
    elements: O,
    floatingStyles: K
  }), [d, X, Q, O, K]);
}
const Yx = (e) => {
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
      return r && t(r) ? r.current != null ? cu({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? cu({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Xx = (e, t) => {
  const n = Vx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, qx = (e, t) => {
  const n = $x(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Zx = (e, t) => ({
  fn: jx(e).fn,
  options: [e, t]
}), Jx = (e, t) => {
  const n = Bx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Qx = (e, t) => {
  const n = zx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, e0 = (e, t) => {
  const n = Hx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, t0 = (e, t) => {
  const n = Yx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var n0 = "Arrow", Xf = f.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ m(
    de.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Xf.displayName = n0;
var r0 = Xf;
function qf(e) {
  const [t, n] = f.useState(void 0);
  return nt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Sl = "Popper", [Zf, In] = zt(Sl), [o0, Jf] = Zf(Sl), Qf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = f.useState(null);
  return /* @__PURE__ */ m(o0, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Qf.displayName = Sl;
var ep = "PopperAnchor", tp = f.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Jf(ep, n), s = f.useRef(null), a = he(t, s), l = f.useRef(null);
    return f.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ m(de.div, { ...o, ref: a });
  }
);
tp.displayName = ep;
var Cl = "PopperContent", [i0, s0] = Zf(Cl), np = f.forwardRef(
  (e, t) => {
    var $, H, U, Z, oe, ie;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...g
    } = e, y = Jf(Cl, n), [w, x] = f.useState(null), b = he(t, (Pe) => x(Pe)), [S, C] = f.useState(null), P = qf(S), E = (P == null ? void 0 : P.width) ?? 0, R = (P == null ? void 0 : P.height) ?? 0, A = r + (i !== "center" ? "-" + i : ""), T = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, k = Array.isArray(c) ? c : [c], W = k.length > 0, X = {
      padding: T,
      boundary: k.filter(l0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: Y, floatingStyles: Q, placement: O, isPositioned: K, middlewareData: B } = Kx({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...Pe) => Fx(...Pe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Xx({ mainAxis: o + R, alignmentAxis: s }),
        l && qx({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Zx() : void 0,
          ...X
        }),
        l && Jx({ ...X }),
        Qx({
          ...X,
          apply: ({ elements: Pe, rects: xe, availableWidth: Qe, availableHeight: ve }) => {
            const { width: fe, height: ut } = xe.reference, Ne = Pe.floating.style;
            Ne.setProperty("--radix-popper-available-width", `${Qe}px`), Ne.setProperty("--radix-popper-available-height", `${ve}px`), Ne.setProperty("--radix-popper-anchor-width", `${fe}px`), Ne.setProperty("--radix-popper-anchor-height", `${ut}px`);
          }
        }),
        S && t0({ element: S, padding: a }),
        c0({ arrowWidth: E, arrowHeight: R }),
        p && e0({ strategy: "referenceHidden", ...X })
      ]
    }), [L, N] = ip(O), se = Je(v);
    nt(() => {
      K && (se == null || se());
    }, [K, se]);
    const M = ($ = B.arrow) == null ? void 0 : $.x, F = (H = B.arrow) == null ? void 0 : H.y, G = ((U = B.arrow) == null ? void 0 : U.centerOffset) !== 0, [_, j] = f.useState();
    return nt(() => {
      w && j(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ m(
      "div",
      {
        ref: Y.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: K ? Q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: _,
          "--radix-popper-transform-origin": [
            (Z = B.transformOrigin) == null ? void 0 : Z.x,
            (oe = B.transformOrigin) == null ? void 0 : oe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ie = B.hide) == null ? void 0 : ie.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          i0,
          {
            scope: n,
            placedSide: L,
            onArrowChange: C,
            arrowX: M,
            arrowY: F,
            shouldHideArrow: G,
            children: /* @__PURE__ */ m(
              de.div,
              {
                "data-side": L,
                "data-align": N,
                ...g,
                ref: b,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: K ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
np.displayName = Cl;
var rp = "PopperArrow", a0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, op = f.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = s0(rp, r), s = a0[i.placedSide];
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
          r0,
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
op.displayName = rp;
function l0(e) {
  return e !== null;
}
var c0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, w, x;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, d] = ip(n), u = { start: "0%", center: "50%", end: "100%" }[d], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, h = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let v = "", g = "";
    return c === "bottom" ? (v = s ? u : `${p}px`, g = `${-l}px`) : c === "top" ? (v = s ? u : `${p}px`, g = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, g = s ? u : `${h}px`) : c === "left" && (v = `${r.floating.width + l}px`, g = s ? u : `${h}px`), { data: { x: v, y: g } };
  }
});
function ip(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var uo = Qf, fo = tp, Gi = np, Ui = op, u0 = "Portal", Rr = f.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = f.useState(!1);
  nt(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? ff.createPortal(/* @__PURE__ */ m(de.div, { ...r, ref: t }), s) : null;
});
Rr.displayName = u0;
// @__NO_SIDE_EFFECTS__
function d0(e) {
  const t = /* @__PURE__ */ f0(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(h0);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function f0(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = g0(o), a = m0(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var p0 = Symbol("radix.slottable");
function h0(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === p0;
}
function m0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function g0(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var v0 = f[" useInsertionEffect ".trim().toString()] || nt;
function ln({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = y0({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const d = f.useRef(e !== void 0);
    f.useEffect(() => {
      const u = d.current;
      u !== a && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, r]);
  }
  const c = f.useCallback(
    (d) => {
      var u;
      if (a) {
        const p = w0(d) ? d(e) : d;
        p !== e && ((u = s.current) == null || u.call(s, p));
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function y0({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = f.useState(e), o = f.useRef(n), i = f.useRef(t);
  return v0(() => {
    i.current = t;
  }, [t]), f.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function w0(e) {
  return typeof e == "function";
}
function sp(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var ap = Object.freeze({
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
}), b0 = "VisuallyHidden", lp = f.forwardRef(
  (e, t) => /* @__PURE__ */ m(
    de.span,
    {
      ...e,
      ref: t,
      style: { ...ap, ...e.style }
    }
  )
);
lp.displayName = b0;
var x0 = lp, S0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, er = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), ko = {}, Es = 0, cp = function(e) {
  return e && (e.host || cp(e.parentNode));
}, C0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = cp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, R0 = function(e, t, n, r) {
  var o = C0(t, Array.isArray(e) ? e : [e]);
  ko[n] || (ko[n] = /* @__PURE__ */ new WeakMap());
  var i = ko[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (a.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(r), v = h !== null && h !== "false", g = (er.get(p) || 0) + 1, y = (i.get(p) || 0) + 1;
          er.set(p, g), i.set(p, y), s.push(p), g === 1 && v && No.set(p, !0), y === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return d(t), a.clear(), Es++, function() {
    s.forEach(function(u) {
      var p = er.get(u) - 1, h = i.get(u) - 1;
      er.set(u, p), i.set(u, h), p || (No.has(u) || u.removeAttribute(r), No.delete(u)), h || u.removeAttribute(n);
    }), Es--, Es || (er = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), ko = {});
  };
}, Ki = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = S0(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), R0(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ut = function() {
  return Ut = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ut.apply(this, arguments);
};
function up(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function E0(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Yo = "right-scroll-bar-position", Xo = "width-before-scroll-bar", P0 = "with-scroll-bars-hidden", T0 = "--removed-body-scroll-bar-size";
function Ps(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function M0(e, t) {
  var n = Xe(function() {
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
var A0 = typeof window < "u" ? f.useLayoutEffect : f.useEffect, du = /* @__PURE__ */ new WeakMap();
function D0(e, t) {
  var n = M0(null, function(r) {
    return e.forEach(function(o) {
      return Ps(o, r);
    });
  });
  return A0(function() {
    var r = du.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Ps(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Ps(a, s);
      });
    }
    du.set(n, e);
  }, [e]), n;
}
function I0(e) {
  return e;
}
function N0(e, t) {
  t === void 0 && (t = I0);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var l = function() {
        var d = s;
        s = [], d.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          s.push(d), c();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function k0(e) {
  e === void 0 && (e = {});
  var t = N0(null);
  return t.options = Ut({ async: !0, ssr: !1 }, e), t;
}
var dp = function(e) {
  var t = e.sideCar, n = up(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return f.createElement(r, Ut({}, n));
};
dp.isSideCarExport = !0;
function _0(e, t) {
  return e.useMedium(t), dp;
}
var fp = k0(), Ts = function() {
}, Yi = f.forwardRef(function(e, t) {
  var n = f.useRef(null), r = f.useState({
    onScrollCapture: Ts,
    onWheelCapture: Ts,
    onTouchMoveCapture: Ts
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, h = e.noRelative, v = e.noIsolation, g = e.inert, y = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, b = e.gapMode, S = up(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, P = D0([n, t]), E = Ut(Ut({}, S), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(C, { sideCar: fp, removeScrollBar: c, shards: u, noRelative: h, noIsolation: v, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n, gapMode: b }),
    s ? f.cloneElement(f.Children.only(a), Ut(Ut({}, E), { ref: P })) : f.createElement(x, Ut({}, E, { className: l, ref: P }), a)
  );
});
Yi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Yi.classNames = {
  fullWidth: Xo,
  zeroRight: Yo
};
var O0 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function L0() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = O0();
  return t && e.setAttribute("nonce", t), e;
}
function F0(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function V0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $0 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = L0()) && (F0(t, n), V0(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, B0 = function() {
  var e = $0();
  return function(t, n) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, pp = function() {
  var e = B0(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, z0 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ms = function(e) {
  return parseInt(e || "", 10) || 0;
}, H0 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ms(n), Ms(r), Ms(o)];
}, j0 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return z0;
  var t = H0(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, W0 = pp(), dr = "data-scroll-locked", G0 = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(P0, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(dr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Yo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Xo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Yo, " .").concat(Yo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xo, " .").concat(Xo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(dr, `] {
    `).concat(T0, ": ").concat(a, `px;
  }
`);
}, fu = function() {
  var e = parseInt(document.body.getAttribute(dr) || "0", 10);
  return isFinite(e) ? e : 0;
}, U0 = function() {
  f.useEffect(function() {
    return document.body.setAttribute(dr, (fu() + 1).toString()), function() {
      var e = fu() - 1;
      e <= 0 ? document.body.removeAttribute(dr) : document.body.setAttribute(dr, e.toString());
    };
  }, []);
}, K0 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  U0();
  var i = f.useMemo(function() {
    return j0(o);
  }, [o]);
  return f.createElement(W0, { styles: G0(i, !t, o, n ? "" : "!important") });
}, ga = !1;
if (typeof window < "u")
  try {
    var _o = Object.defineProperty({}, "passive", {
      get: function() {
        return ga = !0, !0;
      }
    });
    window.addEventListener("test", _o, _o), window.removeEventListener("test", _o, _o);
  } catch {
    ga = !1;
  }
var tr = ga ? { passive: !1 } : !1, Y0 = function(e) {
  return e.tagName === "TEXTAREA";
}, hp = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Y0(e) && n[t] === "visible")
  );
}, X0 = function(e) {
  return hp(e, "overflowY");
}, q0 = function(e) {
  return hp(e, "overflowX");
}, pu = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = mp(e, r);
    if (o) {
      var i = gp(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Z0 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, J0 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, mp = function(e, t) {
  return e === "v" ? X0(t) : q0(t);
}, gp = function(e, t) {
  return e === "v" ? Z0(t) : J0(t);
}, Q0 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eS = function(e, t, n, r, o) {
  var i = Q0(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, d = s > 0, u = 0, p = 0;
  do {
    if (!a)
      break;
    var h = gp(e, a), v = h[0], g = h[1], y = h[2], w = g - y - i * v;
    (v || w) && mp(e, a) && (u += w, p += v);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(p) < 1) && (c = !0), c;
}, Oo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, hu = function(e) {
  return [e.deltaX, e.deltaY];
}, mu = function(e) {
  return e && "current" in e ? e.current : e;
}, tS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rS = 0, nr = [];
function oS(e) {
  var t = f.useRef([]), n = f.useRef([0, 0]), r = f.useRef(), o = f.useState(rS++)[0], i = f.useState(pp)[0], s = f.useRef(e);
  f.useEffect(function() {
    s.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = E0([e.lockRef.current], (e.shards || []).map(mu), !0).filter(Boolean);
      return g.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = f.useCallback(function(g, y) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = Oo(g), x = n.current, b = "deltaX" in g ? g.deltaX : x[0] - w[0], S = "deltaY" in g ? g.deltaY : x[1] - w[1], C, P = g.target, E = Math.abs(b) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && E === "h" && P.type === "range")
      return !1;
    var R = window.getSelection(), A = R && R.anchorNode, T = A ? A === P || A.contains(P) : !1;
    if (T)
      return !1;
    var k = pu(E, P);
    if (!k)
      return !0;
    if (k ? C = E : (C = E === "v" ? "h" : "v", k = pu(E, P)), !k)
      return !1;
    if (!r.current && "changedTouches" in g && (b || S) && (r.current = C), !C)
      return !0;
    var W = r.current || C;
    return eS(W, y, g, W === "h" ? b : S);
  }, []), l = f.useCallback(function(g) {
    var y = g;
    if (!(!nr.length || nr[nr.length - 1] !== i)) {
      var w = "deltaY" in y ? hu(y) : Oo(y), x = t.current.filter(function(C) {
        return C.name === y.type && (C.target === y.target || y.target === C.shadowParent) && tS(C.delta, w);
      })[0];
      if (x && x.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!x) {
        var b = (s.current.shards || []).map(mu).filter(Boolean).filter(function(C) {
          return C.contains(y.target);
        }), S = b.length > 0 ? a(y, b[0]) : !s.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(g, y, w, x) {
    var b = { name: g, delta: y, target: w, should: x, shadowParent: iS(w) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== b;
      });
    }, 1);
  }, []), d = f.useCallback(function(g) {
    n.current = Oo(g), r.current = void 0;
  }, []), u = f.useCallback(function(g) {
    c(g.type, hu(g), g.target, a(g, e.lockRef.current));
  }, []), p = f.useCallback(function(g) {
    c(g.type, Oo(g), g.target, a(g, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return nr.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, tr), document.addEventListener("touchmove", l, tr), document.addEventListener("touchstart", d, tr), function() {
      nr = nr.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, tr), document.removeEventListener("touchmove", l, tr), document.removeEventListener("touchstart", d, tr);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    v ? f.createElement(i, { styles: nS(o) }) : null,
    h ? f.createElement(K0, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function iS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const sS = _0(fp, oS);
var po = f.forwardRef(function(e, t) {
  return f.createElement(Yi, Ut({}, e, { ref: t, sideCar: sS }));
});
po.classNames = Yi.classNames;
var aS = [" ", "Enter", "ArrowUp", "ArrowDown"], lS = [" ", "Enter"], Yn = "Select", [Xi, qi, cS] = ml(Yn), [Er] = zt(Yn, [
  cS,
  In
]), Zi = In(), [uS, Nn] = Er(Yn), [dS, fS] = Er(Yn), vp = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: d,
    autoComplete: u,
    disabled: p,
    required: h,
    form: v
  } = e, g = Zi(t), [y, w] = f.useState(null), [x, b] = f.useState(null), [S, C] = f.useState(!1), P = $i(c), [E, R] = ln({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Yn
  }), [A, T] = ln({
    prop: s,
    defaultProp: a,
    onChange: l,
    caller: Yn
  }), k = f.useRef(null), W = y ? v || !!y.closest("form") : !0, [X, Y] = f.useState(/* @__PURE__ */ new Set()), Q = Array.from(X).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ m(uo, { ...g, children: /* @__PURE__ */ z(
    uS,
    {
      required: h,
      scope: t,
      trigger: y,
      onTriggerChange: w,
      valueNode: x,
      onValueNodeChange: b,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: qe(),
      value: A,
      onValueChange: T,
      open: E,
      onOpenChange: R,
      dir: P,
      triggerPointerDownPosRef: k,
      disabled: p,
      children: [
        /* @__PURE__ */ m(Xi.Provider, { scope: t, children: /* @__PURE__ */ m(
          dS,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((O) => {
              Y((K) => new Set(K).add(O));
            }, []),
            onNativeOptionRemove: f.useCallback((O) => {
              Y((K) => {
                const B = new Set(K);
                return B.delete(O), B;
              });
            }, []),
            children: n
          }
        ) }),
        W ? /* @__PURE__ */ z(
          Hp,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: d,
            autoComplete: u,
            value: A,
            onChange: (O) => T(O.target.value),
            disabled: p,
            form: v,
            children: [
              A === void 0 ? /* @__PURE__ */ m("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          Q
        ) : null
      ]
    }
  ) });
};
vp.displayName = Yn;
var yp = "SelectTrigger", wp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Zi(n), s = Nn(yp, n), a = s.disabled || r, l = he(t, s.onTriggerChange), c = qi(n), d = f.useRef("touch"), [u, p, h] = Wp((g) => {
      const y = c().filter((b) => !b.disabled), w = y.find((b) => b.value === s.value), x = Gp(y, g, w);
      x !== void 0 && s.onValueChange(x.value);
    }), v = (g) => {
      a || (s.onOpenChange(!0), h()), g && (s.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ m(fo, { asChild: !0, ...i, children: /* @__PURE__ */ m(
      de.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": jp(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: q(o.onClick, (g) => {
          g.currentTarget.focus(), d.current !== "mouse" && v(g);
        }),
        onPointerDown: q(o.onPointerDown, (g) => {
          d.current = g.pointerType;
          const y = g.target;
          y.hasPointerCapture(g.pointerId) && y.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (v(g), g.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (g) => {
          const y = u.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && p(g.key), !(y && g.key === " ") && aS.includes(g.key) && (v(), g.preventDefault());
        })
      }
    ) });
  }
);
wp.displayName = yp;
var bp = "SelectValue", xp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, l = Nn(bp, n), { onValueNodeHasChildrenChange: c } = l, d = i !== void 0, u = he(t, l.onValueNodeChange);
    return nt(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ m(
      de.span,
      {
        ...a,
        ref: u,
        style: { pointerEvents: "none" },
        children: jp(l.value) ? /* @__PURE__ */ m(qt, { children: s }) : i
      }
    );
  }
);
xp.displayName = bp;
var pS = "SelectIcon", Sp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ m(de.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Sp.displayName = pS;
var hS = "SelectPortal", Cp = (e) => /* @__PURE__ */ m(Rr, { asChild: !0, ...e });
Cp.displayName = hS;
var Xn = "SelectContent", Rp = f.forwardRef(
  (e, t) => {
    const n = Nn(Xn, e.__scopeSelect), [r, o] = f.useState();
    if (nt(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Li.createPortal(
        /* @__PURE__ */ m(Ep, { scope: e.__scopeSelect, children: /* @__PURE__ */ m(Xi.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ m(Pp, { ...e, ref: t });
  }
);
Rp.displayName = Xn;
var kt = 10, [Ep, kn] = Er(Xn), mS = "SelectContentImpl", gS = /* @__PURE__ */ d0("SelectContent.RemoveScroll"), Pp = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: y,
      //
      ...w
    } = e, x = Nn(Xn, n), [b, S] = f.useState(null), [C, P] = f.useState(null), E = he(t, ($) => S($)), [R, A] = f.useState(null), [T, k] = f.useState(
      null
    ), W = qi(n), [X, Y] = f.useState(!1), Q = f.useRef(!1);
    f.useEffect(() => {
      if (b) return Ki(b);
    }, [b]), Bi();
    const O = f.useCallback(
      ($) => {
        const [H, ...U] = W().map((ie) => ie.ref.current), [Z] = U.slice(-1), oe = document.activeElement;
        for (const ie of $)
          if (ie === oe || (ie == null || ie.scrollIntoView({ block: "nearest" }), ie === H && C && (C.scrollTop = 0), ie === Z && C && (C.scrollTop = C.scrollHeight), ie == null || ie.focus(), document.activeElement !== oe)) return;
      },
      [W, C]
    ), K = f.useCallback(
      () => O([R, b]),
      [O, R, b]
    );
    f.useEffect(() => {
      X && K();
    }, [X, K]);
    const { onOpenChange: B, triggerPointerDownPosRef: L } = x;
    f.useEffect(() => {
      if (b) {
        let $ = { x: 0, y: 0 };
        const H = (Z) => {
          var oe, ie;
          $ = {
            x: Math.abs(Math.round(Z.pageX) - (((oe = L.current) == null ? void 0 : oe.x) ?? 0)),
            y: Math.abs(Math.round(Z.pageY) - (((ie = L.current) == null ? void 0 : ie.y) ?? 0))
          };
        }, U = (Z) => {
          $.x <= 10 && $.y <= 10 ? Z.preventDefault() : b.contains(Z.target) || B(!1), document.removeEventListener("pointermove", H), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", H), document.addEventListener("pointerup", U, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", H), document.removeEventListener("pointerup", U, { capture: !0 });
        };
      }
    }, [b, B, L]), f.useEffect(() => {
      const $ = () => B(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [B]);
    const [N, se] = Wp(($) => {
      const H = W().filter((oe) => !oe.disabled), U = H.find((oe) => oe.ref.current === document.activeElement), Z = Gp(H, $, U);
      Z && setTimeout(() => Z.ref.current.focus());
    }), M = f.useCallback(
      ($, H, U) => {
        const Z = !Q.current && !U;
        (x.value !== void 0 && x.value === H || Z) && (A($), Z && (Q.current = !0));
      },
      [x.value]
    ), F = f.useCallback(() => b == null ? void 0 : b.focus(), [b]), G = f.useCallback(
      ($, H, U) => {
        const Z = !Q.current && !U;
        (x.value !== void 0 && x.value === H || Z) && k($);
      },
      [x.value]
    ), _ = r === "popper" ? va : Tp, j = _ === va ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ m(
      Ep,
      {
        scope: n,
        content: b,
        viewport: C,
        onViewportChange: P,
        itemRefCallback: M,
        selectedItem: R,
        onItemLeave: F,
        itemTextRefCallback: G,
        focusSelectedItem: K,
        selectedItemText: T,
        position: r,
        isPositioned: X,
        searchRef: N,
        children: /* @__PURE__ */ m(po, { as: gS, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          lo,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: q(o, ($) => {
              var H;
              (H = x.trigger) == null || H.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              xr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  _,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...w,
                    ...j,
                    onPlaced: () => Y(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: q(w.onKeyDown, ($) => {
                      const H = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !H && $.key.length === 1 && se($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let Z = W().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (Z = Z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const oe = $.target, ie = Z.indexOf(oe);
                          Z = Z.slice(ie + 1);
                        }
                        setTimeout(() => O(Z)), $.preventDefault();
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
Pp.displayName = mS;
var vS = "SelectItemAlignedPosition", Tp = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Nn(Xn, n), s = kn(Xn, n), [a, l] = f.useState(null), [c, d] = f.useState(null), u = he(t, (E) => d(E)), p = qi(n), h = f.useRef(!1), v = f.useRef(!0), { viewport: g, selectedItem: y, selectedItemText: w, focusSelectedItem: x } = s, b = f.useCallback(() => {
    if (i.trigger && i.valueNode && a && c && g && y && w) {
      const E = i.trigger.getBoundingClientRect(), R = c.getBoundingClientRect(), A = i.valueNode.getBoundingClientRect(), T = w.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const oe = T.left - R.left, ie = A.left - oe, Pe = E.left - ie, xe = E.width + Pe, Qe = Math.max(xe, R.width), ve = window.innerWidth - kt, fe = da(ie, [
          kt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(kt, ve - Qe)
        ]);
        a.style.minWidth = xe + "px", a.style.left = fe + "px";
      } else {
        const oe = R.right - T.right, ie = window.innerWidth - A.right - oe, Pe = window.innerWidth - E.right - ie, xe = E.width + Pe, Qe = Math.max(xe, R.width), ve = window.innerWidth - kt, fe = da(ie, [
          kt,
          Math.max(kt, ve - Qe)
        ]);
        a.style.minWidth = xe + "px", a.style.right = fe + "px";
      }
      const k = p(), W = window.innerHeight - kt * 2, X = g.scrollHeight, Y = window.getComputedStyle(c), Q = parseInt(Y.borderTopWidth, 10), O = parseInt(Y.paddingTop, 10), K = parseInt(Y.borderBottomWidth, 10), B = parseInt(Y.paddingBottom, 10), L = Q + O + X + B + K, N = Math.min(y.offsetHeight * 5, L), se = window.getComputedStyle(g), M = parseInt(se.paddingTop, 10), F = parseInt(se.paddingBottom, 10), G = E.top + E.height / 2 - kt, _ = W - G, j = y.offsetHeight / 2, $ = y.offsetTop + j, H = Q + O + $, U = L - H;
      if (H <= G) {
        const oe = k.length > 0 && y === k[k.length - 1].ref.current;
        a.style.bottom = "0px";
        const ie = c.clientHeight - g.offsetTop - g.offsetHeight, Pe = Math.max(
          _,
          j + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? F : 0) + ie + K
        ), xe = H + Pe;
        a.style.height = xe + "px";
      } else {
        const oe = k.length > 0 && y === k[0].ref.current;
        a.style.top = "0px";
        const Pe = Math.max(
          G,
          Q + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? M : 0) + j
        ) + U;
        a.style.height = Pe + "px", g.scrollTop = H - G + g.offsetTop;
      }
      a.style.margin = `${kt}px 0`, a.style.minHeight = N + "px", a.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    a,
    c,
    g,
    y,
    w,
    i.dir,
    r
  ]);
  nt(() => b(), [b]);
  const [S, C] = f.useState();
  nt(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const P = f.useCallback(
    (E) => {
      E && v.current === !0 && (b(), x == null || x(), v.current = !1);
    },
    [b, x]
  );
  return /* @__PURE__ */ m(
    wS,
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
            de.div,
            {
              ...o,
              ref: u,
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
Tp.displayName = vS;
var yS = "SelectPopperPosition", va = f.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = kt,
    ...i
  } = e, s = Zi(n);
  return /* @__PURE__ */ m(
    Gi,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
va.displayName = yS;
var [wS, Rl] = Er(Xn, {}), ya = "SelectViewport", Mp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = kn(ya, n), s = Rl(ya, n), a = he(t, i.onViewportChange), l = f.useRef(0);
    return /* @__PURE__ */ z(qt, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(Xi.Slot, { scope: n, children: /* @__PURE__ */ m(
        de.div,
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
          onScroll: q(o.onScroll, (c) => {
            const d = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && u) {
              const h = Math.abs(l.current - d.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - kt * 2, g = parseFloat(u.style.minHeight), y = parseFloat(u.style.height), w = Math.max(g, y);
                if (w < v) {
                  const x = w + h, b = Math.min(v, x), S = x - b;
                  u.style.height = b + "px", u.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
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
Mp.displayName = ya;
var Ap = "SelectGroup", [bS, xS] = Er(Ap), Dp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = qe();
    return /* @__PURE__ */ m(bS, { scope: n, id: o, children: /* @__PURE__ */ m(de.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Dp.displayName = Ap;
var Ip = "SelectLabel", Np = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = xS(Ip, n);
    return /* @__PURE__ */ m(de.div, { id: o.id, ...r, ref: t });
  }
);
Np.displayName = Ip;
var fi = "SelectItem", [SS, kp] = Er(fi), _p = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = Nn(fi, n), l = kn(fi, n), c = a.value === r, [d, u] = f.useState(i ?? ""), [p, h] = f.useState(!1), v = he(
      t,
      (x) => {
        var b;
        return (b = l.itemRefCallback) == null ? void 0 : b.call(l, x, r, o);
      }
    ), g = qe(), y = f.useRef("touch"), w = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m(
      SS,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: f.useCallback((x) => {
          u((b) => b || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          Xi.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ m(
              de.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: q(s.onFocus, () => h(!0)),
                onBlur: q(s.onBlur, () => h(!1)),
                onClick: q(s.onClick, () => {
                  y.current !== "mouse" && w();
                }),
                onPointerUp: q(s.onPointerUp, () => {
                  y.current === "mouse" && w();
                }),
                onPointerDown: q(s.onPointerDown, (x) => {
                  y.current = x.pointerType;
                }),
                onPointerMove: q(s.onPointerMove, (x) => {
                  var b;
                  y.current = x.pointerType, o ? (b = l.onItemLeave) == null || b.call(l) : y.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(s.onPointerLeave, (x) => {
                  var b;
                  x.currentTarget === document.activeElement && ((b = l.onItemLeave) == null || b.call(l));
                }),
                onKeyDown: q(s.onKeyDown, (x) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (lS.includes(x.key) && w(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
_p.displayName = fi;
var $r = "SelectItemText", Op = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = Nn($r, n), a = kn($r, n), l = kp($r, n), c = fS($r, n), [d, u] = f.useState(null), p = he(
      t,
      (w) => u(w),
      l.onItemTextChange,
      (w) => {
        var x;
        return (x = a.itemTextRefCallback) == null ? void 0 : x.call(a, w, l.value, l.disabled);
      }
    ), h = d == null ? void 0 : d.textContent, v = f.useMemo(
      () => /* @__PURE__ */ m("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: y } = c;
    return nt(() => (g(v), () => y(v)), [g, y, v]), /* @__PURE__ */ z(qt, { children: [
      /* @__PURE__ */ m(de.span, { id: l.textId, ...i, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Li.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
Op.displayName = $r;
var Lp = "SelectItemIndicator", Fp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return kp(Lp, n).isSelected ? /* @__PURE__ */ m(de.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Fp.displayName = Lp;
var wa = "SelectScrollUpButton", Vp = f.forwardRef((e, t) => {
  const n = kn(wa, e.__scopeSelect), r = Rl(wa, e.__scopeSelect), [o, i] = f.useState(!1), s = he(t, r.onScrollButtonChange);
  return nt(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        i(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    Bp,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Vp.displayName = wa;
var ba = "SelectScrollDownButton", $p = f.forwardRef((e, t) => {
  const n = kn(ba, e.__scopeSelect), r = Rl(ba, e.__scopeSelect), [o, i] = f.useState(!1), s = he(t, r.onScrollButtonChange);
  return nt(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        i(d);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    Bp,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
$p.displayName = ba;
var Bp = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = kn("SelectScrollButton", n), s = f.useRef(null), a = qi(n), l = f.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return f.useEffect(() => () => l(), [l]), nt(() => {
    var d;
    const c = a().find((u) => u.ref.current === document.activeElement);
    (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ m(
    de.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), CS = "SelectSeparator", zp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ m(de.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
zp.displayName = CS;
var xa = "SelectArrow", RS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Zi(n), i = Nn(xa, n), s = kn(xa, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ m(Ui, { ...o, ...r, ref: t }) : null;
  }
);
RS.displayName = xa;
var ES = "SelectBubbleInput", Hp = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = f.useRef(null), i = he(r, o), s = sp(t);
    return f.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== t && d) {
        const u = new Event("change", { bubbles: !0 });
        d.call(a, t), a.dispatchEvent(u);
      }
    }, [s, t]), /* @__PURE__ */ m(
      de.select,
      {
        ...n,
        style: { ...ap, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
Hp.displayName = ES;
function jp(e) {
  return e === "" || e === void 0;
}
function Wp(e) {
  const t = Je(e), n = f.useRef(""), r = f.useRef(0), o = f.useCallback(
    (s) => {
      const a = n.current + s;
      t(a), (function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(a);
    },
    [t]
  ), i = f.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Gp(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = PS(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function PS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var TS = vp, Up = wp, MS = xp, AS = Sp, DS = Cp, Kp = Rp, IS = Mp, NS = Dp, Yp = Np, Xp = _p, kS = Op, _S = Fp, qp = Vp, Zp = $p, Jp = zp;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), LS = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), gu = (e) => {
  const t = LS(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Qp = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), FS = (e) => {
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
var VS = {
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
const $S = fl(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => ii(
    "svg",
    {
      ref: l,
      ...VS,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Qp("lucide", o),
      ...!i && !FS(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([c, d]) => ii(c, d)),
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
const ot = (e, t) => {
  const n = fl(
    ({ className: r, ...o }, i) => ii($S, {
      ref: i,
      iconNode: t,
      className: Qp(
        `lucide-${OS(gu(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = gu(e), n;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BS = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], zS = ot("arrow-up-down", BS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HS = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], pi = ot("check", HS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], eh = ot("chevron-down", jS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WS = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], th = ot("chevron-left", WS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GS = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Hr = ot("chevron-right", GS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const US = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], KS = ot("chevron-up", US);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YS = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], XS = ot("circle", YS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qS = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], ZS = ot("command", qS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JS = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], QS = ot("funnel", JS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eC = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], tC = ot("grip-vertical", eC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nC = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], rC = ot("monitor", nC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], iC = ot("moon", oC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sC = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], aC = ot("plus", sC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lC = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], cC = ot("search", lC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], dC = ot("sun", uC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], El = ot("x", fC), k_ = TS, __ = NS, O_ = MS, pC = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  Up,
  {
    ref: r,
    className: J(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(AS, { asChild: !0, children: /* @__PURE__ */ m(eh, { className: "size-4 opacity-50" }) })
    ]
  }
));
pC.displayName = Up.displayName;
const nh = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  qp,
  {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(KS, { className: "size-4" })
  }
));
nh.displayName = qp.displayName;
const rh = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Zp,
  {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(eh, { className: "size-4" })
  }
));
rh.displayName = Zp.displayName;
const hC = f.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ m(DS, { children: /* @__PURE__ */ z(
  Kp,
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
      /* @__PURE__ */ m(nh, {}),
      /* @__PURE__ */ m(
        IS,
        {
          className: J(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m(rh, {})
    ]
  }
) }));
hC.displayName = Kp.displayName;
const mC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Yp,
  {
    ref: n,
    className: J("px-2 py-1.5 text-xs font-semibold text-muted-foreground", e),
    ...t
  }
));
mC.displayName = Yp.displayName;
const gC = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  Xp,
  {
    ref: r,
    className: J(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(_S, { children: /* @__PURE__ */ m(pi, { className: "size-4" }) }) }),
      /* @__PURE__ */ m(kS, { children: t })
    ]
  }
));
gC.displayName = Xp.displayName;
const vC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Jp,
  {
    ref: n,
    className: J("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
vC.displayName = Jp.displayName;
var Ji = "Switch", [yC] = zt(Ji), [wC, bC] = yC(Ji), oh = f.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: s,
      disabled: a,
      value: l = "on",
      onCheckedChange: c,
      form: d,
      ...u
    } = e, [p, h] = f.useState(null), v = he(t, (b) => h(b)), g = f.useRef(!1), y = p ? d || !!p.closest("form") : !0, [w, x] = ln({
      prop: o,
      defaultProp: i ?? !1,
      onChange: c,
      caller: Ji
    });
    return /* @__PURE__ */ z(wC, { scope: n, checked: w, disabled: a, children: [
      /* @__PURE__ */ m(
        de.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": lh(w),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...u,
          ref: v,
          onClick: q(e.onClick, (b) => {
            x((S) => !S), y && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ m(
        ah,
        {
          control: p,
          bubbles: !g.current,
          name: r,
          value: l,
          checked: w,
          required: s,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
oh.displayName = Ji;
var ih = "SwitchThumb", sh = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = bC(ih, n);
    return /* @__PURE__ */ m(
      de.span,
      {
        "data-state": lh(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
sh.displayName = ih;
var xC = "SwitchBubbleInput", ah = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, i) => {
    const s = f.useRef(null), a = he(s, i), l = sp(n), c = qf(t);
    return f.useEffect(() => {
      const d = s.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (l !== n && h) {
        const v = new Event("click", { bubbles: r });
        h.call(d, n), d.dispatchEvent(v);
      }
    }, [l, n, r]), /* @__PURE__ */ m(
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
ah.displayName = xC;
function lh(e) {
  return e ? "checked" : "unchecked";
}
var ch = oh, SC = sh;
const CC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ch,
  {
    className: J(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ m(
      SC,
      {
        className: J(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
CC.displayName = ch.displayName;
var RC = [
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
], EC = RC.reduce((e, t) => {
  const n = /* @__PURE__ */ Fi(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), PC = "Separator", vu = "horizontal", TC = ["horizontal", "vertical"], uh = f.forwardRef((e, t) => {
  const { decorative: n, orientation: r = vu, ...o } = e, i = MC(r) ? r : vu, a = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ m(
    EC.div,
    {
      "data-orientation": i,
      ...a,
      ...o,
      ref: t
    }
  );
});
uh.displayName = PC;
function MC(e) {
  return TC.includes(e);
}
var dh = uh;
const fh = f.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ m(
  dh,
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
fh.displayName = dh.displayName;
function AC(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var it = (e) => {
  const { present: t, children: n } = e, r = DC(t), o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n), i = he(r.ref, IC(o));
  return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: i }) : null;
};
it.displayName = "Presence";
function DC(e) {
  const [t, n] = f.useState(), r = f.useRef(null), o = f.useRef(e), i = f.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = AC(s, {
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
    const c = Lo(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), nt(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, h = Lo(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), nt(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (h) => {
        const g = Lo(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = Lo(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
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
function Lo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function IC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function NC(e) {
  const t = /* @__PURE__ */ kC(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(OC);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function kC(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = FC(o), a = LC(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _C = Symbol("radix.slottable");
function OC(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _C;
}
function LC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function FC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Qi = "Dialog", [ph] = zt(Qi), [VC, Ht] = ph(Qi), hh = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = f.useRef(null), l = f.useRef(null), [c, d] = ln({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Qi
  });
  return /* @__PURE__ */ m(
    VC,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: qe(),
      titleId: qe(),
      descriptionId: qe(),
      open: c,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((u) => !u), [d]),
      modal: s,
      children: n
    }
  );
};
hh.displayName = Qi;
var mh = "DialogTrigger", gh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ht(mh, n), i = he(t, o.triggerRef);
    return /* @__PURE__ */ m(
      de.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ml(o.open),
        ...r,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
gh.displayName = mh;
var Pl = "DialogPortal", [$C, vh] = ph(Pl, {
  forceMount: void 0
}), yh = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ht(Pl, t);
  return /* @__PURE__ */ m($C, { scope: t, forceMount: n, children: f.Children.map(r, (s) => /* @__PURE__ */ m(it, { present: n || i.open, children: /* @__PURE__ */ m(Rr, { asChild: !0, container: o, children: s }) })) });
};
yh.displayName = Pl;
var hi = "DialogOverlay", wh = f.forwardRef(
  (e, t) => {
    const n = vh(hi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ht(hi, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ m(it, { present: r || i.open, children: /* @__PURE__ */ m(zC, { ...o, ref: t }) }) : null;
  }
);
wh.displayName = hi;
var BC = /* @__PURE__ */ NC("DialogOverlay.RemoveScroll"), zC = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ht(hi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(po, { as: BC, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m(
        de.div,
        {
          "data-state": Ml(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), qn = "DialogContent", bh = f.forwardRef(
  (e, t) => {
    const n = vh(qn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Ht(qn, e.__scopeDialog);
    return /* @__PURE__ */ m(it, { present: r || i.open, children: i.modal ? /* @__PURE__ */ m(HC, { ...o, ref: t }) : /* @__PURE__ */ m(jC, { ...o, ref: t }) });
  }
);
bh.displayName = qn;
var HC = f.forwardRef(
  (e, t) => {
    const n = Ht(qn, e.__scopeDialog), r = f.useRef(null), o = he(t, n.contentRef, r);
    return f.useEffect(() => {
      const i = r.current;
      if (i) return Ki(i);
    }, []), /* @__PURE__ */ m(
      xh,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), jC = f.forwardRef(
  (e, t) => {
    const n = Ht(qn, e.__scopeDialog), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ m(
      xh,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), xh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = Ht(qn, n), l = f.useRef(null), c = he(t, l);
    return Bi(), /* @__PURE__ */ z(qt, { children: [
      /* @__PURE__ */ m(
        lo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ m(
            xr,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Ml(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ z(qt, { children: [
        /* @__PURE__ */ m(WC, { titleId: a.titleId }),
        /* @__PURE__ */ m(UC, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Tl = "DialogTitle", Sh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ht(Tl, n);
    return /* @__PURE__ */ m(de.h2, { id: o.titleId, ...r, ref: t });
  }
);
Sh.displayName = Tl;
var Ch = "DialogDescription", Rh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ht(Ch, n);
    return /* @__PURE__ */ m(de.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Rh.displayName = Ch;
var Eh = "DialogClose", Ph = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ht(Eh, n);
    return /* @__PURE__ */ m(
      de.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ph.displayName = Eh;
function Ml(e) {
  return e ? "open" : "closed";
}
var Th = "DialogTitleWarning", [L_, Mh] = bb(Th, {
  contentName: qn,
  titleName: Tl,
  docsSlug: "dialog"
}), WC = ({ titleId: e }) => {
  const t = Mh(Th), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, GC = "DialogDescriptionWarning", UC = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Mh(GC).contentName}}.`;
  return f.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ah = hh, KC = gh, Dh = yh, Al = wh, Dl = bh, Ih = Sh, Nh = Rh, kh = Ph, As = "rovingFocusGroup.onEntryFocus", YC = { bubbles: !1, cancelable: !0 }, ho = "RovingFocusGroup", [Sa, _h, XC] = ml(ho), [qC, Oh] = zt(
  ho,
  [XC]
), [ZC, JC] = qC(ho), Lh = f.forwardRef(
  (e, t) => /* @__PURE__ */ m(Sa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(Sa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(QC, { ...e, ref: t }) }) })
);
Lh.displayName = ho;
var QC = f.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, p = f.useRef(null), h = he(t, p), v = $i(i), [g, y] = ln({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: ho
  }), [w, x] = f.useState(!1), b = Je(c), S = _h(n), C = f.useRef(!1), [P, E] = f.useState(0);
  return f.useEffect(() => {
    const R = p.current;
    if (R)
      return R.addEventListener(As, b), () => R.removeEventListener(As, b);
  }, [b]), /* @__PURE__ */ m(
    ZC,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: g,
      onItemFocus: f.useCallback(
        (R) => y(R),
        [y]
      ),
      onItemShiftTab: f.useCallback(() => x(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => E((R) => R + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => E((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        de.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: q(e.onFocus, (R) => {
            const A = !C.current;
            if (R.target === R.currentTarget && A && !w) {
              const T = new CustomEvent(As, YC);
              if (R.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const k = S().filter((O) => O.focusable), W = k.find((O) => O.active), X = k.find((O) => O.id === g), Q = [W, X, ...k].filter(
                  Boolean
                ).map((O) => O.ref.current);
                $h(Q, d);
              }
            }
            C.current = !1;
          }),
          onBlur: q(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Fh = "RovingFocusGroupItem", Vh = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = qe(), c = i || l, d = JC(Fh, n), u = d.currentTabStopId === c, p = _h(n), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: g } = d;
    return f.useEffect(() => {
      if (r)
        return h(), () => v();
    }, [r, h, v]), /* @__PURE__ */ m(
      Sa.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ m(
          de.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: q(e.onMouseDown, (y) => {
              r ? d.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: q(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: q(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = nR(y, d.orientation, d.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let b = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") b.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && b.reverse();
                  const S = b.indexOf(y.currentTarget);
                  b = d.loop ? rR(b, S + 1) : b.slice(S + 1);
                }
                setTimeout(() => $h(b));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: u, hasTabStop: g != null }) : s
          }
        )
      }
    );
  }
);
Vh.displayName = Fh;
var eR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function tR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function nR(e, t, n) {
  const r = tR(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return eR[r];
}
function $h(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function rR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var oR = Lh, iR = Vh;
// @__NO_SIDE_EFFECTS__
function sR(e) {
  const t = /* @__PURE__ */ aR(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(cR);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function aR(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = dR(o), a = uR(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var lR = Symbol("radix.slottable");
function cR(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === lR;
}
function uR(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function dR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ca = ["Enter", " "], fR = ["ArrowDown", "PageUp", "Home"], Bh = ["ArrowUp", "PageDown", "End"], pR = [...fR, ...Bh], hR = {
  ltr: [...Ca, "ArrowRight"],
  rtl: [...Ca, "ArrowLeft"]
}, mR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, mo = "Menu", [Zr, gR, vR] = ml(mo), [Qn, zh] = zt(mo, [
  vR,
  In,
  Oh
]), go = In(), Hh = Oh(), [jh, _n] = Qn(mo), [yR, vo] = Qn(mo), Wh = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = go(t), [l, c] = f.useState(null), d = f.useRef(!1), u = Je(i), p = $i(o);
  return f.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ m(uo, { ...a, children: /* @__PURE__ */ m(
    jh,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ m(
        yR,
        {
          scope: t,
          onClose: f.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
Wh.displayName = mo;
var wR = "MenuAnchor", Il = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = go(n);
    return /* @__PURE__ */ m(fo, { ...o, ...r, ref: t });
  }
);
Il.displayName = wR;
var Nl = "MenuPortal", [bR, Gh] = Qn(Nl, {
  forceMount: void 0
}), Uh = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = _n(Nl, t);
  return /* @__PURE__ */ m(bR, { scope: t, forceMount: n, children: /* @__PURE__ */ m(it, { present: n || i.open, children: /* @__PURE__ */ m(Rr, { asChild: !0, container: o, children: r }) }) });
};
Uh.displayName = Nl;
var Et = "MenuContent", [xR, kl] = Qn(Et), Kh = f.forwardRef(
  (e, t) => {
    const n = Gh(Et, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = _n(Et, e.__scopeMenu), s = vo(Et, e.__scopeMenu);
    return /* @__PURE__ */ m(Zr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(it, { present: r || i.open, children: /* @__PURE__ */ m(Zr.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ m(SR, { ...o, ref: t }) : /* @__PURE__ */ m(CR, { ...o, ref: t }) }) }) });
  }
), SR = f.forwardRef(
  (e, t) => {
    const n = _n(Et, e.__scopeMenu), r = f.useRef(null), o = he(t, r);
    return f.useEffect(() => {
      const i = r.current;
      if (i) return Ki(i);
    }, []), /* @__PURE__ */ m(
      _l,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), CR = f.forwardRef((e, t) => {
  const n = _n(Et, e.__scopeMenu);
  return /* @__PURE__ */ m(
    _l,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), RR = /* @__PURE__ */ sR("MenuContent.ScrollLock"), _l = f.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: v,
      ...g
    } = e, y = _n(Et, n), w = vo(Et, n), x = go(n), b = Hh(n), S = gR(n), [C, P] = f.useState(null), E = f.useRef(null), R = he(t, E, y.onContentChange), A = f.useRef(0), T = f.useRef(""), k = f.useRef(0), W = f.useRef(null), X = f.useRef("right"), Y = f.useRef(0), Q = v ? po : f.Fragment, O = v ? { as: RR, allowPinchZoom: !0 } : void 0, K = (L) => {
      var $, H;
      const N = T.current + L, se = S().filter((U) => !U.disabled), M = document.activeElement, F = ($ = se.find((U) => U.ref.current === M)) == null ? void 0 : $.textValue, G = se.map((U) => U.textValue), _ = LR(G, N, F), j = (H = se.find((U) => U.textValue === _)) == null ? void 0 : H.ref.current;
      (function U(Z) {
        T.current = Z, window.clearTimeout(A.current), Z !== "" && (A.current = window.setTimeout(() => U(""), 1e3));
      })(N), j && setTimeout(() => j.focus());
    };
    f.useEffect(() => () => window.clearTimeout(A.current), []), Bi();
    const B = f.useCallback((L) => {
      var se, M;
      return X.current === ((se = W.current) == null ? void 0 : se.side) && VR(L, (M = W.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ m(
      xR,
      {
        scope: n,
        searchRef: T,
        onItemEnter: f.useCallback(
          (L) => {
            B(L) && L.preventDefault();
          },
          [B]
        ),
        onItemLeave: f.useCallback(
          (L) => {
            var N;
            B(L) || ((N = E.current) == null || N.focus(), P(null));
          },
          [B]
        ),
        onTriggerLeave: f.useCallback(
          (L) => {
            B(L) && L.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: f.useCallback((L) => {
          W.current = L;
        }, []),
        children: /* @__PURE__ */ m(Q, { ...O, children: /* @__PURE__ */ m(
          lo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(i, (L) => {
              var N;
              L.preventDefault(), (N = E.current) == null || N.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ m(
              xr,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ m(
                  oR,
                  {
                    asChild: !0,
                    ...b,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: q(l, (L) => {
                      w.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Gi,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": um(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...x,
                        ...g,
                        ref: R,
                        style: { outline: "none", ...g.style },
                        onKeyDown: q(g.onKeyDown, (L) => {
                          const se = L.target.closest("[data-radix-menu-content]") === L.currentTarget, M = L.ctrlKey || L.altKey || L.metaKey, F = L.key.length === 1;
                          se && (L.key === "Tab" && L.preventDefault(), !M && F && K(L.key));
                          const G = E.current;
                          if (L.target !== G || !pR.includes(L.key)) return;
                          L.preventDefault();
                          const j = S().filter(($) => !$.disabled).map(($) => $.ref.current);
                          Bh.includes(L.key) && j.reverse(), _R(j);
                        }),
                        onBlur: q(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(A.current), T.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          Jr((L) => {
                            const N = L.target, se = Y.current !== L.clientX;
                            if (L.currentTarget.contains(N) && se) {
                              const M = L.clientX > Y.current ? "right" : "left";
                              X.current = M, Y.current = L.clientX;
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
Kh.displayName = Et;
var ER = "MenuGroup", Ol = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(de.div, { role: "group", ...r, ref: t });
  }
);
Ol.displayName = ER;
var PR = "MenuLabel", Yh = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(de.div, { ...r, ref: t });
  }
);
Yh.displayName = PR;
var mi = "MenuItem", yu = "menu.itemSelect", es = f.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = f.useRef(null), s = vo(mi, e.__scopeMenu), a = kl(mi, e.__scopeMenu), l = he(t, i), c = f.useRef(!1), d = () => {
      const u = i.current;
      if (!n && u) {
        const p = new CustomEvent(yu, { bubbles: !0, cancelable: !0 });
        u.addEventListener(yu, (h) => r == null ? void 0 : r(h), { once: !0 }), _f(u, p), p.defaultPrevented ? c.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ m(
      Xh,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: q(e.onClick, d),
        onPointerDown: (u) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, u), c.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (u) => {
          var p;
          c.current || (p = u.currentTarget) == null || p.click();
        }),
        onKeyDown: q(e.onKeyDown, (u) => {
          const p = a.searchRef.current !== "";
          n || p && u.key === " " || Ca.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
es.displayName = mi;
var Xh = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = kl(mi, n), a = Hh(n), l = f.useRef(null), c = he(t, l), [d, u] = f.useState(!1), [p, h] = f.useState("");
    return f.useEffect(() => {
      const v = l.current;
      v && h((v.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ m(
      Zr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ m(iR, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ m(
          de.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: q(
              e.onPointerMove,
              Jr((v) => {
                r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              Jr((v) => s.onItemLeave(v))
            ),
            onFocus: q(e.onFocus, () => u(!0)),
            onBlur: q(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), TR = "MenuCheckboxItem", qh = f.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ m(tm, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ m(
      es,
      {
        role: "menuitemcheckbox",
        "aria-checked": gi(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Vl(n),
        onSelect: q(
          o.onSelect,
          () => r == null ? void 0 : r(gi(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
qh.displayName = TR;
var Zh = "MenuRadioGroup", [MR, AR] = Qn(
  Zh,
  { value: void 0, onValueChange: () => {
  } }
), Jh = f.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Je(r);
    return /* @__PURE__ */ m(MR, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ m(Ol, { ...o, ref: t }) });
  }
);
Jh.displayName = Zh;
var Qh = "MenuRadioItem", em = f.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = AR(Qh, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ m(tm, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ m(
      es,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Vl(i),
        onSelect: q(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
em.displayName = Qh;
var Ll = "MenuItemIndicator", [tm, DR] = Qn(
  Ll,
  { checked: !1 }
), nm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = DR(Ll, n);
    return /* @__PURE__ */ m(
      it,
      {
        present: r || gi(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ m(
          de.span,
          {
            ...o,
            ref: t,
            "data-state": Vl(i.checked)
          }
        )
      }
    );
  }
);
nm.displayName = Ll;
var IR = "MenuSeparator", rm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ m(
      de.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
rm.displayName = IR;
var NR = "MenuArrow", om = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = go(n);
    return /* @__PURE__ */ m(Ui, { ...o, ...r, ref: t });
  }
);
om.displayName = NR;
var Fl = "MenuSub", [kR, im] = Qn(Fl), sm = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = _n(Fl, t), s = go(t), [a, l] = f.useState(null), [c, d] = f.useState(null), u = Je(o);
  return f.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ m(uo, { ...s, children: /* @__PURE__ */ m(
    jh,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ m(
        kR,
        {
          scope: t,
          contentId: qe(),
          triggerId: qe(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
sm.displayName = Fl;
var Br = "MenuSubTrigger", am = f.forwardRef(
  (e, t) => {
    const n = _n(Br, e.__scopeMenu), r = vo(Br, e.__scopeMenu), o = im(Br, e.__scopeMenu), i = kl(Br, e.__scopeMenu), s = f.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, c = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const u = a.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [a, l]), /* @__PURE__ */ m(Il, { asChild: !0, ...c, children: /* @__PURE__ */ m(
      Xh,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": um(n.open),
        ...e,
        ref: ct(t, o.onTriggerChange),
        onClick: (u) => {
          var p;
          (p = e.onClick) == null || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          Jr((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          Jr((u) => {
            var h, v;
            d();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const g = (v = n.content) == null ? void 0 : v.dataset.side, y = g === "right", w = y ? -5 : 5, x = p[y ? "left" : "right"], b = p[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + w, y: u.clientY },
                  { x, y: p.top },
                  { x: b, y: p.top },
                  { x: b, y: p.bottom },
                  { x, y: p.bottom }
                ],
                side: g
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(u), u.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: q(e.onKeyDown, (u) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && u.key === " " || hR[r.dir].includes(u.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
am.displayName = Br;
var lm = "MenuSubContent", cm = f.forwardRef(
  (e, t) => {
    const n = Gh(Et, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = _n(Et, e.__scopeMenu), s = vo(Et, e.__scopeMenu), a = im(lm, e.__scopeMenu), l = f.useRef(null), c = he(t, l);
    return /* @__PURE__ */ m(Zr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(it, { present: r || i.open, children: /* @__PURE__ */ m(Zr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ m(
      _l,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var u;
          s.isUsingKeyboardRef.current && ((u = l.current) == null || u.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (d) => {
          d.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          var h;
          const u = d.currentTarget.contains(d.target), p = mR[s.dir].includes(d.key);
          u && p && (i.onOpenChange(!1), (h = a.trigger) == null || h.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
cm.displayName = lm;
function um(e) {
  return e ? "open" : "closed";
}
function gi(e) {
  return e === "indeterminate";
}
function Vl(e) {
  return gi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function _R(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function OR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function LR(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = OR(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function FR(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, d = a.y, u = l.x, p = l.y;
    d > r != p > r && n < (u - c) * (r - d) / (p - d) + c && (o = !o);
  }
  return o;
}
function VR(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return FR(n, t);
}
function Jr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $R = Wh, BR = Il, zR = Uh, HR = Kh, jR = Ol, WR = Yh, GR = es, UR = qh, KR = Jh, YR = em, XR = nm, qR = rm, ZR = om, JR = sm, QR = am, eE = cm, ts = "DropdownMenu", [tE] = zt(
  ts,
  [zh]
), st = zh(), [nE, dm] = tE(ts), fm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = st(t), c = f.useRef(null), [d, u] = ln({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: ts
  });
  return /* @__PURE__ */ m(
    nE,
    {
      scope: t,
      triggerId: qe(),
      triggerRef: c,
      contentId: qe(),
      open: d,
      onOpenChange: u,
      onOpenToggle: f.useCallback(() => u((p) => !p), [u]),
      modal: a,
      children: /* @__PURE__ */ m($R, { ...l, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
};
fm.displayName = ts;
var pm = "DropdownMenuTrigger", hm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = dm(pm, n), s = st(n);
    return /* @__PURE__ */ m(BR, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      de.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: ct(t, i.triggerRef),
        onPointerDown: q(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
hm.displayName = pm;
var rE = "DropdownMenuPortal", mm = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = st(t);
  return /* @__PURE__ */ m(zR, { ...r, ...n });
};
mm.displayName = rE;
var gm = "DropdownMenuContent", vm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = dm(gm, n), i = st(n), s = f.useRef(!1);
    return /* @__PURE__ */ m(
      HR,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!o.modal || d) && (s.current = !0);
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
vm.displayName = gm;
var oE = "DropdownMenuGroup", ym = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ m(jR, { ...o, ...r, ref: t });
  }
);
ym.displayName = oE;
var iE = "DropdownMenuLabel", wm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ m(WR, { ...o, ...r, ref: t });
  }
);
wm.displayName = iE;
var sE = "DropdownMenuItem", bm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ m(GR, { ...o, ...r, ref: t });
  }
);
bm.displayName = sE;
var aE = "DropdownMenuCheckboxItem", xm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(UR, { ...o, ...r, ref: t });
});
xm.displayName = aE;
var lE = "DropdownMenuRadioGroup", Sm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(KR, { ...o, ...r, ref: t });
});
Sm.displayName = lE;
var cE = "DropdownMenuRadioItem", Cm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(YR, { ...o, ...r, ref: t });
});
Cm.displayName = cE;
var uE = "DropdownMenuItemIndicator", Rm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(XR, { ...o, ...r, ref: t });
});
Rm.displayName = uE;
var dE = "DropdownMenuSeparator", Em = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(qR, { ...o, ...r, ref: t });
});
Em.displayName = dE;
var fE = "DropdownMenuArrow", pE = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
    return /* @__PURE__ */ m(ZR, { ...o, ...r, ref: t });
  }
);
pE.displayName = fE;
var hE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = st(t), [a, l] = ln({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ m(JR, { ...s, open: a, onOpenChange: l, children: n });
}, mE = "DropdownMenuSubTrigger", Pm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(QR, { ...o, ...r, ref: t });
});
Pm.displayName = mE;
var gE = "DropdownMenuSubContent", Tm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = st(n);
  return /* @__PURE__ */ m(
    eE,
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
Tm.displayName = gE;
var vE = fm, yE = hm, Mm = mm, Am = vm, wE = ym, Dm = wm, Im = bm, Nm = xm, bE = Sm, km = Cm, _m = Rm, Om = Em, xE = hE, Lm = Pm, Fm = Tm;
// @__NO_SIDE_EFFECTS__
function SE(e) {
  const t = /* @__PURE__ */ CE(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(EE);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function CE(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = TE(o), a = PE(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? ct(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var RE = Symbol("radix.slottable");
function EE(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === RE;
}
function PE(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function TE(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ns = "Popover", [Vm] = zt(ns, [
  In
]), yo = In(), [ME, On] = Vm(ns), $m = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = yo(t), l = f.useRef(null), [c, d] = f.useState(!1), [u, p] = ln({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: ns
  });
  return /* @__PURE__ */ m(uo, { ...a, children: /* @__PURE__ */ m(
    ME,
    {
      scope: t,
      contentId: qe(),
      triggerRef: l,
      open: u,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: f.useCallback(() => d(!0), []),
      onCustomAnchorRemove: f.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
$m.displayName = ns;
var Bm = "PopoverAnchor", zm = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = On(Bm, n), i = yo(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return f.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ m(fo, { ...i, ...r, ref: t });
  }
);
zm.displayName = Bm;
var Hm = "PopoverTrigger", jm = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = On(Hm, n), i = yo(n), s = he(t, o.triggerRef), a = /* @__PURE__ */ m(
      de.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ym(o.open),
        ...r,
        ref: s,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ m(fo, { asChild: !0, ...i, children: a });
  }
);
jm.displayName = Hm;
var $l = "PopoverPortal", [AE, DE] = Vm($l, {
  forceMount: void 0
}), Wm = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = On($l, t);
  return /* @__PURE__ */ m(AE, { scope: t, forceMount: n, children: /* @__PURE__ */ m(it, { present: n || i.open, children: /* @__PURE__ */ m(Rr, { asChild: !0, container: o, children: r }) }) });
};
Wm.displayName = $l;
var mr = "PopoverContent", Gm = f.forwardRef(
  (e, t) => {
    const n = DE(mr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = On(mr, e.__scopePopover);
    return /* @__PURE__ */ m(it, { present: r || i.open, children: i.modal ? /* @__PURE__ */ m(NE, { ...o, ref: t }) : /* @__PURE__ */ m(kE, { ...o, ref: t }) });
  }
);
Gm.displayName = mr;
var IE = /* @__PURE__ */ SE("PopoverContent.RemoveScroll"), NE = f.forwardRef(
  (e, t) => {
    const n = On(mr, e.__scopePopover), r = f.useRef(null), o = he(t, r), i = f.useRef(!1);
    return f.useEffect(() => {
      const s = r.current;
      if (s) return Ki(s);
    }, []), /* @__PURE__ */ m(po, { as: IE, allowPinchZoom: !0, children: /* @__PURE__ */ m(
      Um,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: q(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: q(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), kE = f.forwardRef(
  (e, t) => {
    const n = On(mr, e.__scopePopover), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ m(
      Um,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Um = f.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: d,
      ...u
    } = e, p = On(mr, n), h = yo(n);
    return Bi(), /* @__PURE__ */ m(
      lo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ m(
          xr,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ m(
              Gi,
              {
                "data-state": Ym(p.open),
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
), Km = "PopoverClose", _E = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = On(Km, n);
    return /* @__PURE__ */ m(
      de.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
_E.displayName = Km;
var OE = "PopoverArrow", LE = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = yo(n);
    return /* @__PURE__ */ m(Ui, { ...o, ...r, ref: t });
  }
);
LE.displayName = OE;
function Ym(e) {
  return e ? "open" : "closed";
}
var FE = $m, VE = zm, $E = jm, BE = Wm, Xm = Gm;
function zE(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bl = "ScrollArea", [qm] = zt(Bl), [HE, Tt] = qm(Bl), Zm = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...s
    } = e, [a, l] = f.useState(null), [c, d] = f.useState(null), [u, p] = f.useState(null), [h, v] = f.useState(null), [g, y] = f.useState(null), [w, x] = f.useState(0), [b, S] = f.useState(0), [C, P] = f.useState(!1), [E, R] = f.useState(!1), A = he(t, (k) => l(k)), T = $i(o);
    return /* @__PURE__ */ m(
      HE,
      {
        scope: n,
        type: r,
        dir: T,
        scrollHideDelay: i,
        scrollArea: a,
        viewport: c,
        onViewportChange: d,
        content: u,
        onContentChange: p,
        scrollbarX: h,
        onScrollbarXChange: v,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: P,
        scrollbarY: g,
        onScrollbarYChange: y,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: R,
        onCornerWidthChange: x,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ m(
          de.div,
          {
            dir: T,
            ...s,
            ref: A,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": b + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Zm.displayName = Bl;
var Jm = "ScrollAreaViewport", Qm = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, s = Tt(Jm, n), a = f.useRef(null), l = he(t, a, s.onViewportChange);
    return /* @__PURE__ */ z(qt, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ m(
        de.div,
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
          children: /* @__PURE__ */ m("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Qm.displayName = Jm;
var en = "ScrollAreaScrollbar", zl = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Tt(en, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return f.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ m(jE, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ m(WE, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ m(eg, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ m(Hl, { ...r, ref: t }) : null;
  }
);
zl.displayName = en;
var jE = f.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(en, e.__scopeScrollArea), [i, s] = f.useState(!1);
  return f.useEffect(() => {
    const a = o.scrollArea;
    let l = 0;
    if (a) {
      const c = () => {
        window.clearTimeout(l), s(!0);
      }, d = () => {
        l = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ m(it, { present: n || i, children: /* @__PURE__ */ m(
    eg,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), WE = f.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(en, e.__scopeScrollArea), i = e.orientation === "horizontal", s = os(() => l("SCROLL_END"), 100), [a, l] = zE("hidden", {
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
    const c = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (c) {
      let u = c[d];
      const p = () => {
        const h = c[d];
        u !== h && (l("SCROLL"), s()), u = h;
      };
      return c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
    }
  }, [o.viewport, i, l, s]), /* @__PURE__ */ m(it, { present: n || a !== "hidden", children: /* @__PURE__ */ m(
    Hl,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: q(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: q(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), eg = f.forwardRef((e, t) => {
  const n = Tt(en, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, s] = f.useState(!1), a = e.orientation === "horizontal", l = os(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(a ? c : d);
    }
  }, 10);
  return gr(n.viewport, l), gr(n.content, l), /* @__PURE__ */ m(it, { present: r || i, children: /* @__PURE__ */ m(
    Hl,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Hl = f.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Tt(en, e.__scopeScrollArea), i = f.useRef(null), s = f.useRef(0), [a, l] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = ig(a.viewport, a.content), d = {
    ...r,
    sizes: a,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => i.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function u(p, h) {
    return qE(p, s.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ m(
    GE,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollLeft, h = wu(p, a, o.dir);
          i.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = u(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ m(
    UE,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollTop, h = wu(p, a);
          i.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = u(p));
      }
    }
  ) : null;
}), GE = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Tt(en, e.__scopeScrollArea), [s, a] = f.useState(), l = f.useRef(null), c = he(t, l, i.onScrollbarXChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    ng,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": rs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const p = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), ag(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: yi(s.paddingLeft),
            paddingEnd: yi(s.paddingRight)
          }
        });
      }
    }
  );
}), UE = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Tt(en, e.__scopeScrollArea), [s, a] = f.useState(), l = f.useRef(null), c = he(t, l, i.onScrollbarYChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ m(
    ng,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": rs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const p = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), ag(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: yi(s.paddingTop),
            paddingEnd: yi(s.paddingBottom)
          }
        });
      }
    }
  );
}), [KE, tg] = qm(en), ng = f.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: u,
    ...p
  } = e, h = Tt(en, n), [v, g] = f.useState(null), y = he(t, (A) => g(A)), w = f.useRef(null), x = f.useRef(""), b = h.viewport, S = r.content - r.viewport, C = Je(d), P = Je(l), E = os(u, 10);
  function R(A) {
    if (w.current) {
      const T = A.clientX - w.current.left, k = A.clientY - w.current.top;
      c({ x: T, y: k });
    }
  }
  return f.useEffect(() => {
    const A = (T) => {
      const k = T.target;
      (v == null ? void 0 : v.contains(k)) && C(T, S);
    };
    return document.addEventListener("wheel", A, { passive: !1 }), () => document.removeEventListener("wheel", A, { passive: !1 });
  }, [b, v, S, C]), f.useEffect(P, [r, P]), gr(v, E), gr(h.content, E), /* @__PURE__ */ m(
    KE,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: Je(i),
      onThumbPointerUp: Je(s),
      onThumbPositionChange: P,
      onThumbPointerDown: Je(a),
      children: /* @__PURE__ */ m(
        de.div,
        {
          ...p,
          ref: y,
          style: { position: "absolute", ...p.style },
          onPointerDown: q(e.onPointerDown, (A) => {
            A.button === 0 && (A.target.setPointerCapture(A.pointerId), w.current = v.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), R(A));
          }),
          onPointerMove: q(e.onPointerMove, R),
          onPointerUp: q(e.onPointerUp, (A) => {
            const T = A.target;
            T.hasPointerCapture(A.pointerId) && T.releasePointerCapture(A.pointerId), document.body.style.webkitUserSelect = x.current, h.viewport && (h.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), vi = "ScrollAreaThumb", rg = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tg(vi, e.__scopeScrollArea);
    return /* @__PURE__ */ m(it, { present: n || o.hasThumb, children: /* @__PURE__ */ m(YE, { ref: t, ...r }) });
  }
), YE = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = Tt(vi, n), s = tg(vi, n), { onThumbPositionChange: a } = s, l = he(
      t,
      (u) => s.onThumbChange(u)
    ), c = f.useRef(void 0), d = os(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const u = i.viewport;
      if (u) {
        const p = () => {
          if (d(), !c.current) {
            const h = ZE(u, a);
            c.current = h, a();
          }
        };
        return a(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
      }
    }, [i.viewport, d, a]), /* @__PURE__ */ m(
      de.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: q(e.onPointerDownCapture, (u) => {
          const h = u.target.getBoundingClientRect(), v = u.clientX - h.left, g = u.clientY - h.top;
          s.onThumbPointerDown({ x: v, y: g });
        }),
        onPointerUp: q(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
rg.displayName = vi;
var jl = "ScrollAreaCorner", og = f.forwardRef(
  (e, t) => {
    const n = Tt(jl, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ m(XE, { ...e, ref: t }) : null;
  }
);
og.displayName = jl;
var XE = f.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Tt(jl, n), [i, s] = f.useState(0), [a, l] = f.useState(0), c = !!(i && a);
  return gr(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), gr(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), c ? /* @__PURE__ */ m(
    de.div,
    {
      ...r,
      ref: t,
      style: {
        width: i,
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
function yi(e) {
  return e ? parseInt(e, 10) : 0;
}
function ig(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function rs(e) {
  const t = ig(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function qE(e, t, n, r = "ltr") {
  const o = rs(n), i = o / 2, s = t || i, a = o - s, l = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, d = n.content - n.viewport, u = r === "ltr" ? [0, d] : [d * -1, 0];
  return sg([l, c], u)(e);
}
function wu(e, t, n = "ltr") {
  const r = rs(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, l = n === "ltr" ? [0, s] : [s * -1, 0], c = da(e, l);
  return sg([0, s], [0, a])(c);
}
function sg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ag(e, t) {
  return e > 0 && e < t;
}
var ZE = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function os(e, t) {
  const n = Je(e), r = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), f.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function gr(e, t) {
  const n = Je(t);
  nt(() => {
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
var lg = Zm, JE = Qm, QE = og, eP = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function tP(e) {
  const t = ({ children: n }) => /* @__PURE__ */ m(qt, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = eP, t;
}
var [is] = zt("Tooltip", [
  In
]), ss = In(), cg = "TooltipProvider", nP = 700, Ra = "tooltip.open", [rP, Wl] = is(cg), ug = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = nP,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, s = f.useRef(!0), a = f.useRef(!1), l = f.useRef(0);
  return f.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ m(
    rP,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: f.useCallback(() => {
        window.clearTimeout(l.current), s.current = !1;
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: f.useCallback((c) => {
        a.current = c;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
ug.displayName = cg;
var Qr = "Tooltip", [oP, wo] = is(Qr), dg = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = Wl(Qr, e.__scopeTooltip), c = ss(t), [d, u] = f.useState(null), p = qe(), h = f.useRef(0), v = s ?? l.disableHoverableContent, g = a ?? l.delayDuration, y = f.useRef(!1), [w, x] = ln({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ra))) : l.onClose(), i == null || i(E);
    },
    caller: Qr
  }), b = f.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), S = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y.current = !1, x(!0);
  }, [x]), C = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, x(!1);
  }, [x]), P = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      y.current = !0, x(!0), h.current = 0;
    }, g);
  }, [g, x]);
  return f.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ m(uo, { ...c, children: /* @__PURE__ */ m(
    oP,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: b,
      trigger: d,
      onTriggerChange: u,
      onTriggerEnter: f.useCallback(() => {
        l.isOpenDelayedRef.current ? P() : S();
      }, [l.isOpenDelayedRef, P, S]),
      onTriggerLeave: f.useCallback(() => {
        v ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, v]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
dg.displayName = Qr;
var Ea = "TooltipTrigger", fg = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = wo(Ea, n), i = Wl(Ea, n), s = ss(n), a = f.useRef(null), l = he(t, a, o.onTriggerChange), c = f.useRef(!1), d = f.useRef(!1), u = f.useCallback(() => c.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ m(fo, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      de.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: q(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: q(e.onBlur, o.onClose),
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
fg.displayName = Ea;
var Gl = "TooltipPortal", [iP, sP] = is(Gl, {
  forceMount: void 0
}), pg = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = wo(Gl, t);
  return /* @__PURE__ */ m(iP, { scope: t, forceMount: n, children: /* @__PURE__ */ m(it, { present: n || i.open, children: /* @__PURE__ */ m(Rr, { asChild: !0, container: o, children: r }) }) });
};
pg.displayName = Gl;
var vr = "TooltipContent", hg = f.forwardRef(
  (e, t) => {
    const n = sP(vr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = wo(vr, e.__scopeTooltip);
    return /* @__PURE__ */ m(it, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ m(mg, { side: o, ...i, ref: t }) : /* @__PURE__ */ m(aP, { side: o, ...i, ref: t }) });
  }
), aP = f.forwardRef((e, t) => {
  const n = wo(vr, e.__scopeTooltip), r = Wl(vr, e.__scopeTooltip), o = f.useRef(null), i = he(t, o), [s, a] = f.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: u } = r, p = f.useCallback(() => {
    a(null), u(!1);
  }, [u]), h = f.useCallback(
    (v, g) => {
      const y = v.currentTarget, w = { x: v.clientX, y: v.clientY }, x = dP(w, y.getBoundingClientRect()), b = fP(w, x), S = pP(g.getBoundingClientRect()), C = mP([...b, ...S]);
      a(C), u(!0);
    },
    [u]
  );
  return f.useEffect(() => () => p(), [p]), f.useEffect(() => {
    if (l && d) {
      const v = (y) => h(y, d), g = (y) => h(y, l);
      return l.addEventListener("pointerleave", v), d.addEventListener("pointerleave", g), () => {
        l.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", g);
      };
    }
  }, [l, d, h, p]), f.useEffect(() => {
    if (s) {
      const v = (g) => {
        const y = g.target, w = { x: g.clientX, y: g.clientY }, x = (l == null ? void 0 : l.contains(y)) || (d == null ? void 0 : d.contains(y)), b = !hP(w, s);
        x ? p() : b && (p(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, d, s, c, p]), /* @__PURE__ */ m(mg, { ...e, ref: i });
}), [lP, cP] = is(Qr, { isInside: !1 }), uP = /* @__PURE__ */ tP("TooltipContent"), mg = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = wo(vr, n), c = ss(n), { onClose: d } = l;
    return f.useEffect(() => (document.addEventListener(Ra, d), () => document.removeEventListener(Ra, d)), [d]), f.useEffect(() => {
      if (l.trigger) {
        const u = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", u, { capture: !0 }), () => window.removeEventListener("scroll", u, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ m(
      xr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ z(
          Gi,
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
              /* @__PURE__ */ m(uP, { children: r }),
              /* @__PURE__ */ m(lP, { scope: n, isInside: !0, children: /* @__PURE__ */ m(x0, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
hg.displayName = vr;
var gg = "TooltipArrow", vg = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ss(n);
    return cP(
      gg,
      n
    ).isInside ? null : /* @__PURE__ */ m(Ui, { ...o, ...r, ref: t });
  }
);
vg.displayName = gg;
function dP(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
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
function fP(e, t, n = 5) {
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
function pP(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function hP(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, d = a.y, u = l.x, p = l.y;
    d > r != p > r && n < (u - c) * (r - d) / (p - d) + c && (o = !o);
  }
  return o;
}
function mP(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), gP(t);
}
function gP(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var vP = ug, yP = dg, wP = fg, bP = pg, xP = hg, SP = vg;
function yr({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ m(
    vP,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function xn({
  ...e
}) {
  return /* @__PURE__ */ m(yP, { "data-slot": "tooltip", ...e });
}
function Sn({
  ...e
}) {
  return /* @__PURE__ */ m(wP, { "data-slot": "tooltip-trigger", ...e });
}
function Cn({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m(bP, { children: /* @__PURE__ */ z(
    xP,
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
        /* @__PURE__ */ m(SP, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-popover fill-popover" })
      ]
    }
  ) });
}
const CP = Ah, F_ = KC, RP = Dh, V_ = kh, yg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Al,
  {
    ref: n,
    className: J(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
yg.displayName = Al.displayName;
const wg = f.forwardRef(({ className: e, children: t, hideClose: n, ...r }, o) => /* @__PURE__ */ z(RP, { children: [
  /* @__PURE__ */ m(yg, {}),
  /* @__PURE__ */ z(
    Dl,
    {
      ref: o,
      className: J(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg",
        e
      ),
      ...r,
      children: [
        t,
        !n && /* @__PURE__ */ z(kh, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ m(El, { className: "size-4" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
wg.displayName = Dl.displayName;
const bg = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "div",
  {
    className: J("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
bg.displayName = "DialogHeader";
const EP = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "div",
  {
    className: J(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      e
    ),
    ...t
  }
);
EP.displayName = "DialogFooter";
const xg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ih,
  {
    ref: n,
    className: J("text-lg leading-none font-semibold tracking-tight", e),
    ...t
  }
));
xg.displayName = Ih.displayName;
const Sg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Nh,
  {
    ref: n,
    className: J("text-muted-foreground text-sm", e),
    ...t
  }
));
Sg.displayName = Nh.displayName;
const PP = vE, TP = yE, $_ = wE, B_ = Mm, z_ = xE, H_ = bE, MP = f.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ z(
  Lm,
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
      /* @__PURE__ */ m(Hr, { className: "ml-auto" })
    ]
  }
));
MP.displayName = Lm.displayName;
const AP = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Fm,
  {
    ref: n,
    className: J(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      e
    ),
    ...t
  }
));
AP.displayName = Fm.displayName;
const Cg = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ m(Mm, { children: /* @__PURE__ */ m(
  Am,
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
Cg.displayName = Am.displayName;
const Rg = f.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  Im,
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
Rg.displayName = Im.displayName;
const DP = f.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ z(
  Nm,
  {
    ref: o,
    className: J(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ m("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(_m, { children: /* @__PURE__ */ m(pi, { className: "size-4" }) }) }),
      t
    ]
  }
));
DP.displayName = Nm.displayName;
const IP = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  km,
  {
    ref: r,
    className: J(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ m(_m, { children: /* @__PURE__ */ m(XS, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
IP.displayName = km.displayName;
const Eg = f.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  Dm,
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
Eg.displayName = Dm.displayName;
const Pg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Om,
  {
    ref: n,
    className: J("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Pg.displayName = Om.displayName;
const NP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "span",
  {
    className: J("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
NP.displayName = "DropdownMenuShortcut";
const kP = FE, _P = $E, j_ = VE, Tg = f.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ m(BE, { children: /* @__PURE__ */ m(
  Xm,
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
Tg.displayName = Xm.displayName;
const OP = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  lg,
  {
    ref: r,
    className: J("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ m(JE, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ m(Mg, {}),
      /* @__PURE__ */ m(QE, {})
    ]
  }
));
OP.displayName = lg.displayName;
const Mg = f.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ m(
  zl,
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
    children: /* @__PURE__ */ m(rg, { className: "bg-border relative flex-1 rounded-full" })
  }
));
Mg.displayName = zl.displayName;
var bu = 1, LP = 0.9, FP = 0.8, VP = 0.17, Ds = 0.1, Is = 0.999, $P = 0.9999, BP = 0.99, zP = /[\\\/_+.#"@\[\(\{&]/, HP = /[\\\/_+.#"@\[\(\{&]/g, jP = /[\s-]/, Ag = /[\s-]/g;
function Pa(e, t, n, r, o, i, s) {
  if (i === t.length) return o === e.length ? bu : BP;
  var a = `${o},${i}`;
  if (s[a] !== void 0) return s[a];
  for (var l = r.charAt(i), c = n.indexOf(l, o), d = 0, u, p, h, v; c >= 0; ) u = Pa(e, t, n, r, c + 1, i + 1, s), u > d && (c === o ? u *= bu : zP.test(e.charAt(c - 1)) ? (u *= FP, h = e.slice(o, c - 1).match(HP), h && o > 0 && (u *= Math.pow(Is, h.length))) : jP.test(e.charAt(c - 1)) ? (u *= LP, v = e.slice(o, c - 1).match(Ag), v && o > 0 && (u *= Math.pow(Is, v.length))) : (u *= VP, o > 0 && (u *= Math.pow(Is, c - o))), e.charAt(c) !== t.charAt(i) && (u *= $P)), (u < Ds && n.charAt(c - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(c - 1) !== r.charAt(i)) && (p = Pa(e, t, n, r, c + 1, i + 2, s), p * Ds > u && (u = p * Ds)), u > d && (d = u), c = n.indexOf(l, c + 1);
  return s[a] = d, d;
}
function xu(e) {
  return e.toLowerCase().replace(Ag, " ");
}
function WP(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Pa(e, t, xu(e), xu(t), 0, 0, {});
}
var GP = [
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
], Ln = GP.reduce((e, t) => {
  const n = /* @__PURE__ */ Fi(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Lr = '[cmdk-group=""]', Ns = '[cmdk-group-items=""]', UP = '[cmdk-group-heading=""]', Dg = '[cmdk-item=""]', Su = `${Dg}:not([aria-disabled="true"])`, Ta = "cmdk-item-select", rr = "data-value", KP = (e, t, n) => WP(e, t, n), Ig = f.createContext(void 0), bo = () => f.useContext(Ig), Ng = f.createContext(void 0), Ul = () => f.useContext(Ng), kg = f.createContext(void 0), _g = f.forwardRef((e, t) => {
  let n = or(() => {
    var M, F;
    return { search: "", value: (F = (M = e.value) != null ? M : e.defaultValue) != null ? F : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = or(() => /* @__PURE__ */ new Set()), o = or(() => /* @__PURE__ */ new Map()), i = or(() => /* @__PURE__ */ new Map()), s = or(() => /* @__PURE__ */ new Set()), a = Og(e), { label: l, children: c, value: d, onValueChange: u, filter: p, shouldFilter: h, loop: v, disablePointerSelection: g = !1, vimBindings: y = !0, ...w } = e, x = qe(), b = qe(), S = qe(), C = f.useRef(null), P = oT();
  Zn(() => {
    if (d !== void 0) {
      let M = d.trim();
      n.current.value = M, E.emit();
    }
  }, [d]), Zn(() => {
    P(6, X);
  }, []);
  let E = f.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, F, G) => {
    var _, j, $, H;
    if (!Object.is(n.current[M], F)) {
      if (n.current[M] = F, M === "search") W(), T(), P(1, k);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let U = document.getElementById(S);
          U ? U.focus() : (_ = document.getElementById(x)) == null || _.focus();
        }
        if (P(7, () => {
          var U;
          n.current.selectedItemId = (U = Y()) == null ? void 0 : U.id, E.emit();
        }), G || P(5, X), ((j = a.current) == null ? void 0 : j.value) !== void 0) {
          let U = F ?? "";
          (H = ($ = a.current).onValueChange) == null || H.call($, U);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), R = f.useMemo(() => ({ value: (M, F, G) => {
    var _;
    F !== ((_ = i.current.get(M)) == null ? void 0 : _.value) && (i.current.set(M, { value: F, keywords: G }), n.current.filtered.items.set(M, A(F, G)), P(2, () => {
      T(), E.emit();
    }));
  }, item: (M, F) => (r.current.add(M), F && (o.current.has(F) ? o.current.get(F).add(M) : o.current.set(F, /* @__PURE__ */ new Set([M]))), P(3, () => {
    W(), T(), n.current.value || k(), E.emit();
  }), () => {
    i.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let G = Y();
    P(4, () => {
      W(), (G == null ? void 0 : G.getAttribute("id")) === M && k(), E.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    i.current.delete(M), o.current.delete(M);
  }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: x, inputId: S, labelId: b, listInnerRef: C }), []);
  function A(M, F) {
    var G, _;
    let j = (_ = (G = a.current) == null ? void 0 : G.filter) != null ? _ : KP;
    return M ? j(M, n.current.search, F) : 0;
  }
  function T() {
    if (!n.current.search || a.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, F = [];
    n.current.filtered.groups.forEach((_) => {
      let j = o.current.get(_), $ = 0;
      j.forEach((H) => {
        let U = M.get(H);
        $ = Math.max(U, $);
      }), F.push([_, $]);
    });
    let G = C.current;
    Q().sort((_, j) => {
      var $, H;
      let U = _.getAttribute("id"), Z = j.getAttribute("id");
      return (($ = M.get(Z)) != null ? $ : 0) - ((H = M.get(U)) != null ? H : 0);
    }).forEach((_) => {
      let j = _.closest(Ns);
      j ? j.appendChild(_.parentElement === j ? _ : _.closest(`${Ns} > *`)) : G.appendChild(_.parentElement === G ? _ : _.closest(`${Ns} > *`));
    }), F.sort((_, j) => j[1] - _[1]).forEach((_) => {
      var j;
      let $ = (j = C.current) == null ? void 0 : j.querySelector(`${Lr}[${rr}="${encodeURIComponent(_[0])}"]`);
      $ == null || $.parentElement.appendChild($);
    });
  }
  function k() {
    let M = Q().find((G) => G.getAttribute("aria-disabled") !== "true"), F = M == null ? void 0 : M.getAttribute(rr);
    E.setState("value", F || void 0);
  }
  function W() {
    var M, F, G, _;
    if (!n.current.search || a.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let j = 0;
    for (let $ of r.current) {
      let H = (F = (M = i.current.get($)) == null ? void 0 : M.value) != null ? F : "", U = (_ = (G = i.current.get($)) == null ? void 0 : G.keywords) != null ? _ : [], Z = A(H, U);
      n.current.filtered.items.set($, Z), Z > 0 && j++;
    }
    for (let [$, H] of o.current) for (let U of H) if (n.current.filtered.items.get(U) > 0) {
      n.current.filtered.groups.add($);
      break;
    }
    n.current.filtered.count = j;
  }
  function X() {
    var M, F, G;
    let _ = Y();
    _ && (((M = _.parentElement) == null ? void 0 : M.firstChild) === _ && ((G = (F = _.closest(Lr)) == null ? void 0 : F.querySelector(UP)) == null || G.scrollIntoView({ block: "nearest" })), _.scrollIntoView({ block: "nearest" }));
  }
  function Y() {
    var M;
    return (M = C.current) == null ? void 0 : M.querySelector(`${Dg}[aria-selected="true"]`);
  }
  function Q() {
    var M;
    return Array.from(((M = C.current) == null ? void 0 : M.querySelectorAll(Su)) || []);
  }
  function O(M) {
    let F = Q()[M];
    F && E.setState("value", F.getAttribute(rr));
  }
  function K(M) {
    var F;
    let G = Y(), _ = Q(), j = _.findIndex((H) => H === G), $ = _[j + M];
    (F = a.current) != null && F.loop && ($ = j + M < 0 ? _[_.length - 1] : j + M === _.length ? _[0] : _[j + M]), $ && E.setState("value", $.getAttribute(rr));
  }
  function B(M) {
    let F = Y(), G = F == null ? void 0 : F.closest(Lr), _;
    for (; G && !_; ) G = M > 0 ? nT(G, Lr) : rT(G, Lr), _ = G == null ? void 0 : G.querySelector(Su);
    _ ? E.setState("value", _.getAttribute(rr)) : K(M);
  }
  let L = () => O(Q().length - 1), N = (M) => {
    M.preventDefault(), M.metaKey ? L() : M.altKey ? B(1) : K(1);
  }, se = (M) => {
    M.preventDefault(), M.metaKey ? O(0) : M.altKey ? B(-1) : K(-1);
  };
  return f.createElement(Ln.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (M) => {
    var F;
    (F = w.onKeyDown) == null || F.call(w, M);
    let G = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || G)) switch (M.key) {
      case "n":
      case "j": {
        y && M.ctrlKey && N(M);
        break;
      }
      case "ArrowDown": {
        N(M);
        break;
      }
      case "p":
      case "k": {
        y && M.ctrlKey && se(M);
        break;
      }
      case "ArrowUp": {
        se(M);
        break;
      }
      case "Home": {
        M.preventDefault(), O(0);
        break;
      }
      case "End": {
        M.preventDefault(), L();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let _ = Y();
        if (_) {
          let j = new Event(Ta);
          _.dispatchEvent(j);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: sT }, l), as(e, (M) => f.createElement(Ng.Provider, { value: E }, f.createElement(Ig.Provider, { value: R }, M))));
}), YP = f.forwardRef((e, t) => {
  var n, r;
  let o = qe(), i = f.useRef(null), s = f.useContext(kg), a = bo(), l = Og(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Zn(() => {
    if (!c) return a.item(o, s == null ? void 0 : s.id);
  }, [c]);
  let d = Lg(o, i, [e.value, e.children, i], e.keywords), u = Ul(), p = Pn((P) => P.value && P.value === d.current), h = Pn((P) => c || a.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let P = i.current;
    if (!(!P || e.disabled)) return P.addEventListener(Ta, v), () => P.removeEventListener(Ta, v);
  }, [h, e.onSelect, e.disabled]);
  function v() {
    var P, E;
    g(), (E = (P = l.current).onSelect) == null || E.call(P, d.current);
  }
  function g() {
    u.setState("value", d.current, !0);
  }
  if (!h) return null;
  let { disabled: y, value: w, onSelect: x, forceMount: b, keywords: S, ...C } = e;
  return f.createElement(Ln.div, { ref: ct(i, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!p, "data-disabled": !!y, "data-selected": !!p, onPointerMove: y || a.getDisablePointerSelection() ? void 0 : g, onClick: y ? void 0 : v }, e.children);
}), XP = f.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...i } = e, s = qe(), a = f.useRef(null), l = f.useRef(null), c = qe(), d = bo(), u = Pn((h) => o || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Zn(() => d.group(s), []), Lg(s, a, [e.value, e.heading, l]);
  let p = f.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return f.createElement(Ln.div, { ref: ct(a, t), ...i, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && f.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), as(e, (h) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, f.createElement(kg.Provider, { value: p }, h))));
}), qP = f.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = f.useRef(null), i = Pn((s) => !s.search);
  return !n && !i ? null : f.createElement(Ln.div, { ref: ct(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), ZP = f.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Ul(), s = Pn((c) => c.search), a = Pn((c) => c.selectedItemId), l = bo();
  return f.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), f.createElement(Ln.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": a, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), JP = f.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, i = f.useRef(null), s = f.useRef(null), a = Pn((c) => c.selectedItemId), l = bo();
  return f.useEffect(() => {
    if (s.current && i.current) {
      let c = s.current, d = i.current, u, p = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return p.observe(c), () => {
        cancelAnimationFrame(u), p.unobserve(c);
      };
    }
  }, []), f.createElement(Ln.div, { ref: ct(i, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": r, id: l.listId }, as(e, (c) => f.createElement("div", { ref: ct(s, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), QP = f.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: s, ...a } = e;
  return f.createElement(Ah, { open: n, onOpenChange: r }, f.createElement(Dh, { container: s }, f.createElement(Al, { "cmdk-overlay": "", className: o }), f.createElement(Dl, { "aria-label": e.label, "cmdk-dialog": "", className: i }, f.createElement(_g, { ref: t, ...a }))));
}), eT = f.forwardRef((e, t) => Pn((n) => n.filtered.count === 0) ? f.createElement(Ln.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), tT = f.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...i } = e;
  return f.createElement(Ln.div, { ref: t, ...i, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, as(e, (s) => f.createElement("div", { "aria-hidden": !0 }, s)));
}), pt = Object.assign(_g, { List: JP, Item: YP, Input: ZP, Group: XP, Separator: qP, Dialog: QP, Empty: eT, Loading: tT });
function nT(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function rT(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Og(e) {
  let t = f.useRef(e);
  return Zn(() => {
    t.current = e;
  }), t;
}
var Zn = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function or(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Pn(e) {
  let t = Ul(), n = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, n, n);
}
function Lg(e, t, n, r = []) {
  let o = f.useRef(), i = bo();
  return Zn(() => {
    var s;
    let a = (() => {
      var c;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    i.value(e, a, l), (s = t.current) == null || s.setAttribute(rr, a), o.current = a;
  }), o;
}
var oT = () => {
  let [e, t] = f.useState(), n = or(() => /* @__PURE__ */ new Map());
  return Zn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function iT(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function as({ asChild: e, children: t }, n) {
  return e && f.isValidElement(t) ? f.cloneElement(iT(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var sT = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Fg = Bt({});
function aT(e) {
  const t = me(null);
  return t.current === null && (t.current = e()), t.current;
}
const lT = typeof window < "u", cT = lT ? dl : we, Kl = /* @__PURE__ */ Bt(null);
function Yl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function wi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Zt = (e, t, n) => n > t ? t : n < e ? e : n;
function Ma(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Pr = () => {
}, cn = () => {
};
var cf;
typeof process < "u" && ((cf = process.env) == null ? void 0 : cf.NODE_ENV) !== "production" && (Pr = (e, t, n) => {
  !e && typeof console < "u" && console.warn(Ma(t, n));
}, cn = (e, t, n) => {
  if (!e)
    throw new Error(Ma(t, n));
});
const Tn = {}, Vg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function $g(e) {
  return typeof e == "object" && e !== null;
}
const Bg = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function zg(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Pt = /* @__NO_SIDE_EFFECTS__ */ (e) => e, uT = (e, t) => (n) => t(e(n)), xo = (...e) => e.reduce(uT), eo = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Xl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Yl(this.subscriptions, t), () => wi(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ft = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Rt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Hg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Cu = /* @__PURE__ */ new Set();
function ql(e, t, n) {
  e || Cu.has(t) || (console.warn(Ma(t, n)), Cu.add(t));
}
const jg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, dT = 1e-7, fT = 12;
function pT(e, t, n, r, o) {
  let i, s, a = 0;
  do
    s = t + (n - t) / 2, i = jg(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > dT && ++a < fT);
  return s;
}
function So(e, t, n, r) {
  if (e === t && n === r)
    return Pt;
  const o = (i) => pT(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : jg(o(i), t, r);
}
const Wg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Gg = (e) => (t) => 1 - e(1 - t), Ug = /* @__PURE__ */ So(0.33, 1.53, 0.69, 0.99), Zl = /* @__PURE__ */ Gg(Ug), Kg = /* @__PURE__ */ Wg(Zl), Yg = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Zl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Jl = (e) => 1 - Math.sin(Math.acos(e)), Xg = Gg(Jl), qg = Wg(Jl), hT = /* @__PURE__ */ So(0.42, 0, 1, 1), mT = /* @__PURE__ */ So(0, 0, 0.58, 1), Zg = /* @__PURE__ */ So(0.42, 0, 0.58, 1), gT = (e) => Array.isArray(e) && typeof e[0] != "number", Jg = (e) => Array.isArray(e) && typeof e[0] == "number", Ru = {
  linear: Pt,
  easeIn: hT,
  easeInOut: Zg,
  easeOut: mT,
  circIn: Jl,
  circInOut: qg,
  circOut: Xg,
  backIn: Zl,
  backInOut: Kg,
  backOut: Ug,
  anticipate: Yg
}, vT = (e) => typeof e == "string", Eu = (e) => {
  if (Jg(e)) {
    cn(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, o] = e;
    return So(t, n, r, o);
  } else if (vT(e))
    return cn(Ru[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Ru[e];
  return e;
}, Fo = [
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
function yT(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(d) {
    s.has(d) && (c.schedule(d), e()), d(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (d, u = !1, p = !1) => {
      const v = p && o ? n : r;
      return u && s.add(d), v.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, o) {
        i = !0;
        return;
      }
      o = !0;
      const u = n;
      n = r, r = u, n.forEach(l), n.clear(), o = !1, i && (i = !1, c.process(d));
    }
  };
  return c;
}
const wT = 40;
function Qg(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = Fo.reduce((b, S) => (b[S] = yT(i), b), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: d, update: u, preRender: p, render: h, postRender: v } = s, g = () => {
    const b = Tn.useManualTiming, S = b ? o.timestamp : performance.now();
    n = !1, b || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(S - o.timestamp, wT), 1)), o.timestamp = S, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), d.process(o), u.process(o), p.process(o), h.process(o), v.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, y = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: Fo.reduce((b, S) => {
    const C = s[S];
    return b[S] = (P, E = !1, R = !1) => (n || y(), C.schedule(P, E, R)), b;
  }, {}), cancel: (b) => {
    for (let S = 0; S < Fo.length; S++)
      s[Fo[S]].cancel(b);
  }, state: o, steps: s };
}
const { schedule: Ie, cancel: Mn, state: et, steps: ks } = /* @__PURE__ */ Qg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pt, !0);
let qo;
function bT() {
  qo = void 0;
}
const at = {
  now: () => (qo === void 0 && at.set(et.isProcessing || Tn.useManualTiming ? et.timestamp : performance.now()), qo),
  set: (e) => {
    qo = e, queueMicrotask(bT);
  }
}, ev = (e) => (t) => typeof t == "string" && t.startsWith(e), tv = /* @__PURE__ */ ev("--"), xT = /* @__PURE__ */ ev("var(--"), Ql = (e) => xT(e) ? ST.test(e.split("/*")[0].trim()) : !1, ST = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Pu(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Tr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, to = {
  ...Tr,
  transform: (e) => Zt(0, 1, e)
}, Vo = {
  ...Tr,
  default: 1
}, jr = (e) => Math.round(e * 1e5) / 1e5, ec = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function CT(e) {
  return e == null;
}
const RT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tc = (e, t) => (n) => !!(typeof n == "string" && RT.test(n) && n.startsWith(e) || t && !CT(n) && Object.prototype.hasOwnProperty.call(n, t)), nv = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, s, a] = r.match(ec);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ET = (e) => Zt(0, 255, e), _s = {
  ...Tr,
  transform: (e) => Math.round(ET(e))
}, jn = {
  test: /* @__PURE__ */ tc("rgb", "red"),
  parse: /* @__PURE__ */ nv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + _s.transform(e) + ", " + _s.transform(t) + ", " + _s.transform(n) + ", " + jr(to.transform(r)) + ")"
};
function PT(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Aa = {
  test: /* @__PURE__ */ tc("#"),
  parse: PT,
  transform: jn.transform
}, Co = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), gn = /* @__PURE__ */ Co("deg"), Xt = /* @__PURE__ */ Co("%"), te = /* @__PURE__ */ Co("px"), TT = /* @__PURE__ */ Co("vh"), MT = /* @__PURE__ */ Co("vw"), Tu = {
  ...Xt,
  parse: (e) => Xt.parse(e) / 100,
  transform: (e) => Xt.transform(e * 100)
}, sr = {
  test: /* @__PURE__ */ tc("hsl", "hue"),
  parse: /* @__PURE__ */ nv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Xt.transform(jr(t)) + ", " + Xt.transform(jr(n)) + ", " + jr(to.transform(r)) + ")"
}, Ge = {
  test: (e) => jn.test(e) || Aa.test(e) || sr.test(e),
  parse: (e) => jn.test(e) ? jn.parse(e) : sr.test(e) ? sr.parse(e) : Aa.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? jn.transform(e) : sr.transform(e),
  getAnimatableNone: (e) => {
    const t = Ge.parse(e);
    return t.alpha = 0, Ge.transform(t);
  }
}, AT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function DT(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ec)) == null ? void 0 : t.length) || 0) + (((n = e.match(AT)) == null ? void 0 : n.length) || 0) > 0;
}
const rv = "number", ov = "color", IT = "var", NT = "var(", Mu = "${}", kT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function wr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace(kT, (l) => (Ge.test(l) ? (r.color.push(i), o.push(ov), n.push(Ge.parse(l))) : l.startsWith(NT) ? (r.var.push(i), o.push(IT), n.push(l)) : (r.number.push(i), o.push(rv), n.push(parseFloat(l))), ++i, Mu)).split(Mu);
  return { values: n, split: a, indexes: r, types: o };
}
function _T(e) {
  return wr(e).values;
}
function iv({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let o = "";
    for (let i = 0; i < n; i++)
      if (o += e[i], r[i] !== void 0) {
        const s = t[i];
        s === rv ? o += jr(r[i]) : s === ov ? o += Ge.transform(r[i]) : o += r[i];
      }
    return o;
  };
}
function OT(e) {
  return iv(wr(e));
}
const LT = (e) => typeof e == "number" ? 0 : Ge.test(e) ? Ge.getAnimatableNone(e) : e, FT = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : LT(e);
function VT(e) {
  const t = wr(e);
  return iv(t)(t.values.map((r, o) => FT(r, t.split[o])));
}
const Ot = {
  test: DT,
  parse: _T,
  createTransformer: OT,
  getAnimatableNone: VT
};
function Os(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function $T({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Os(l, a, e + 1 / 3), i = Os(l, a, e), s = Os(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function bi(e, t) {
  return (n) => n > 0 ? t : e;
}
const Le = (e, t, n) => e + (t - e) * n, Ls = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, BT = [Aa, jn, sr], zT = (e) => BT.find((t) => t.test(e));
function Au(e) {
  const t = zT(e);
  if (Pr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === sr && (n = $T(n)), n;
}
const Du = (e, t) => {
  const n = Au(e), r = Au(t);
  if (!n || !r)
    return bi(e, t);
  const o = { ...n };
  return (i) => (o.red = Ls(n.red, r.red, i), o.green = Ls(n.green, r.green, i), o.blue = Ls(n.blue, r.blue, i), o.alpha = Le(n.alpha, r.alpha, i), jn.transform(o));
}, Da = /* @__PURE__ */ new Set(["none", "hidden"]);
function HT(e, t) {
  return Da.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function jT(e, t) {
  return (n) => Le(e, t, n);
}
function nc(e) {
  return typeof e == "number" ? jT : typeof e == "string" ? Ql(e) ? bi : Ge.test(e) ? Du : UT : Array.isArray(e) ? sv : typeof e == "object" ? Ge.test(e) ? Du : WT : bi;
}
function sv(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => nc(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function WT(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = nc(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function GT(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], s = e.indexes[i][r[i]], a = e.values[s] ?? 0;
    n[o] = a, r[i]++;
  }
  return n;
}
const UT = (e, t) => {
  const n = Ot.createTransformer(t), r = wr(e), o = wr(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Da.has(e) && !o.values.length || Da.has(t) && !r.values.length ? HT(e, t) : xo(sv(GT(r, o), o.values), n) : (Pr(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), bi(e, t));
};
function av(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Le(e, t, n) : nc(e)(e, t);
}
const KT = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => Ie.update(t, n),
    stop: () => Mn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => et.isProcessing ? et.timestamp : at.now()
  };
}, lv = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, xi = 2e4;
function rc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < xi; )
    t += n, r = e.next(t);
  return t >= xi ? 1 / 0 : t;
}
function YT(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(rc(r), xi);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ Rt(o)
  };
}
const Ve = {
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
function Ia(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const XT = 12;
function qT(e, t, n) {
  let r = n;
  for (let o = 1; o < XT; o++)
    r = r - e(r) / t(r);
  return r;
}
const Fs = 1e-3;
function ZT({ duration: e = Ve.duration, bounce: t = Ve.bounce, velocity: n = Ve.velocity, mass: r = Ve.mass }) {
  let o, i;
  Pr(e <= /* @__PURE__ */ ft(Ve.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let s = 1 - t;
  s = Zt(Ve.minDamping, Ve.maxDamping, s), e = Zt(Ve.minDuration, Ve.maxDuration, /* @__PURE__ */ Rt(e)), s < 1 ? (o = (c) => {
    const d = c * s, u = d * e, p = d - n, h = Ia(c, s), v = Math.exp(-u);
    return Fs - p / h * v;
  }, i = (c) => {
    const u = c * s * e, p = u * n + n, h = Math.pow(s, 2) * Math.pow(c, 2) * e, v = Math.exp(-u), g = Ia(Math.pow(c, 2), s);
    return (-o(c) + Fs > 0 ? -1 : 1) * ((p - h) * v) / g;
  }) : (o = (c) => {
    const d = Math.exp(-c * e), u = (c - n) * e + 1;
    return -Fs + d * u;
  }, i = (c) => {
    const d = Math.exp(-c * e), u = (n - c) * (e * e);
    return d * u;
  });
  const a = 5 / e, l = qT(o, i, a);
  if (e = /* @__PURE__ */ ft(e), isNaN(l))
    return {
      stiffness: Ve.stiffness,
      damping: Ve.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const JT = ["duration", "bounce"], QT = ["stiffness", "damping", "mass"];
function Iu(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function e1(e) {
  let t = {
    velocity: Ve.velocity,
    stiffness: Ve.stiffness,
    damping: Ve.damping,
    mass: Ve.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Iu(e, QT) && Iu(e, JT))
    if (t.velocity = 0, e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Zt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: Ve.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = ZT({ ...e, velocity: 0 });
      t = {
        ...t,
        ...n,
        mass: Ve.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Si(e = Ve.visualDuration, t = Ve.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: d, duration: u, velocity: p, isResolvedFromDuration: h } = e1({
    ...n,
    velocity: -/* @__PURE__ */ Rt(n.velocity || 0)
  }), v = p || 0, g = c / (2 * Math.sqrt(l * d)), y = s - i, w = /* @__PURE__ */ Rt(Math.sqrt(l / d)), x = Math.abs(y) < 5;
  r || (r = x ? Ve.restSpeed.granular : Ve.restSpeed.default), o || (o = x ? Ve.restDelta.granular : Ve.restDelta.default);
  let b, S, C, P, E, R;
  if (g < 1)
    C = Ia(w, g), P = (v + g * w * y) / C, b = (T) => {
      const k = Math.exp(-g * w * T);
      return s - k * (P * Math.sin(C * T) + y * Math.cos(C * T));
    }, E = g * w * P + y * C, R = g * w * y - P * C, S = (T) => Math.exp(-g * w * T) * (E * Math.sin(C * T) + R * Math.cos(C * T));
  else if (g === 1) {
    b = (k) => s - Math.exp(-w * k) * (y + (v + w * y) * k);
    const T = v + w * y;
    S = (k) => Math.exp(-w * k) * (w * T * k - v);
  } else {
    const T = w * Math.sqrt(g * g - 1);
    b = (Y) => {
      const Q = Math.exp(-g * w * Y), O = Math.min(T * Y, 300);
      return s - Q * ((v + g * w * y) * Math.sinh(O) + T * y * Math.cosh(O)) / T;
    };
    const k = (v + g * w * y) / T, W = g * w * k - y * T, X = g * w * y - k * T;
    S = (Y) => {
      const Q = Math.exp(-g * w * Y), O = Math.min(T * Y, 300);
      return Q * (W * Math.sinh(O) + X * Math.cosh(O));
    };
  }
  const A = {
    calculatedDuration: h && u || null,
    velocity: (T) => /* @__PURE__ */ ft(S(T)),
    next: (T) => {
      if (!h && g < 1) {
        const W = Math.exp(-g * w * T), X = Math.sin(C * T), Y = Math.cos(C * T), Q = s - W * (P * X + y * Y), O = /* @__PURE__ */ ft(W * (E * X + R * Y));
        return a.done = Math.abs(O) <= r && Math.abs(s - Q) <= o, a.value = a.done ? s : Q, a;
      }
      const k = b(T);
      if (h)
        a.done = T >= u;
      else {
        const W = /* @__PURE__ */ ft(S(T));
        a.done = Math.abs(W) <= r && Math.abs(s - k) <= o;
      }
      return a.value = a.done ? s : k, a;
    },
    toString: () => {
      const T = Math.min(rc(A), xi), k = lv((W) => A.next(T * W).value, T, 30);
      return T + "ms " + k;
    },
    toTransition: () => {
    }
  };
  return A;
}
Si.applyToOptions = (e) => {
  const t = YT(e, 100, Si);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ ft(t.duration), e.type = "keyframes", e;
};
const t1 = 5;
function cv(e, t, n) {
  const r = Math.max(t - t1, 0);
  return Hg(n - e(r), t - r);
}
function Na({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: d }) {
  const u = e[0], p = {
    done: !1,
    value: u
  }, h = (R) => a !== void 0 && R < a || l !== void 0 && R > l, v = (R) => a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
  let g = n * t;
  const y = u + g, w = s === void 0 ? y : s(y);
  w !== y && (g = w - u);
  const x = (R) => -g * Math.exp(-R / r), b = (R) => w + x(R), S = (R) => {
    const A = x(R), T = b(R);
    p.done = Math.abs(A) <= c, p.value = p.done ? w : T;
  };
  let C, P;
  const E = (R) => {
    h(p.value) && (C = R, P = Si({
      keyframes: [p.value, v(p.value)],
      velocity: cv(b, R, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: d
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (R) => {
      let A = !1;
      return !P && C === void 0 && (A = !0, S(R), E(R)), C !== void 0 && R >= C ? P.next(R - C) : (!A && S(R), p);
    }
  };
}
function n1(e, t, n) {
  const r = [], o = n || Tn.mix || av, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Pt : t;
      a = xo(l, a);
    }
    r.push(a);
  }
  return r;
}
function r1(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (cn(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = n1(t, r, o), l = a.length, c = (d) => {
    if (s && d < e[0])
      return t[0];
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const p = /* @__PURE__ */ eo(e[u], e[u + 1], d);
    return a[u](p);
  };
  return n ? (d) => c(Zt(e[0], e[i - 1], d)) : c;
}
function o1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ eo(0, t, r);
    e.push(Le(n, 1, o));
  }
}
function i1(e) {
  const t = [0];
  return o1(t, e.length - 1), t;
}
function s1(e, t) {
  return e.map((n) => n * t);
}
function a1(e, t) {
  return e.map(() => t || Zg).splice(0, e.length - 1);
}
function ar({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = gT(r) ? r.map(Eu) : Eu(r), i = {
    done: !1,
    value: t[0]
  }, s = s1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : i1(t),
    e
  ), a = r1(s, t, {
    ease: Array.isArray(o) ? o : a1(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const l1 = (e) => e !== null;
function ls(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(l1), a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const c1 = {
  decay: Na,
  inertia: Na,
  tween: ar,
  keyframes: ar,
  spring: Si
};
function uv(e) {
  typeof e.type == "string" && (e.type = c1[e.type]);
}
class oc {
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
const u1 = (e) => e / 100;
class Ci extends oc {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== at.now() && this.tick(at.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    uv(t);
    const { type: n = ar, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = t;
    let { keyframes: a } = t;
    const l = n || ar;
    process.env.NODE_ENV !== "production" && l !== ar && cn(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== ar && typeof a[0] != "number" && (this.mixKeyframes = xo(u1, av(a[0], a[1])), a = [0, 100]);
    const c = l({ ...t, keyframes: a });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -s
    })), c.calculatedDuration === null && (c.calculatedDuration = rc(c));
    const { calculatedDuration: d } = c;
    this.calculatedDuration = d, this.resolvedDuration = d + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: o, mixKeyframes: i, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: c = 0, keyframes: d, repeat: u, repeatType: p, repeatDelay: h, type: v, onUpdate: g, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const w = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? w < 0 : w > o;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let b = this.currentTime, S = r;
    if (u) {
      const R = Math.min(this.currentTime, o) / a;
      let A = Math.floor(R), T = R % 1;
      !T && R >= 1 && (T = 1), T === 1 && A--, A = Math.min(A, u + 1), !!(A % 2) && (p === "reverse" ? (T = 1 - T, h && (T -= h / a)) : p === "mirror" && (S = s)), b = Zt(0, 1, T) * a;
    }
    let C;
    x ? (this.delayState.value = d[0], C = this.delayState) : C = S.next(b), i && !x && (C.value = i(C.value));
    let { done: P } = C;
    !x && l !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return E && v !== Na && (C.value = ls(d, this.options, y, this.speed)), g && g(C.value), E && this.finish(), C;
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
    return /* @__PURE__ */ Rt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Rt(t);
  }
  get time() {
    return /* @__PURE__ */ Rt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ ft(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
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
    return cv((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(at.now()), this.playbackSpeed = t, n && this.driver && (this.time = /* @__PURE__ */ Rt(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped)
      return;
    const { driver: t = KT, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), (i = (o = this.options).onPlay) == null || i.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(at.now()), this.holdTime = this.currentTime;
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
function d1(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Wn = (e) => e * 180 / Math.PI, ka = (e) => {
  const t = Wn(Math.atan2(e[1], e[0]));
  return _a(t);
}, f1 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: ka,
  rotateZ: ka,
  skewX: (e) => Wn(Math.atan(e[1])),
  skewY: (e) => Wn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, _a = (e) => (e = e % 360, e < 0 && (e += 360), e), Nu = ka, ku = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), _u = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), p1 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ku,
  scaleY: _u,
  scale: (e) => (ku(e) + _u(e)) / 2,
  rotateX: (e) => _a(Wn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => _a(Wn(Math.atan2(-e[2], e[0]))),
  rotateZ: Nu,
  rotate: Nu,
  skewX: (e) => Wn(Math.atan(e[4])),
  skewY: (e) => Wn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Oa(e) {
  return e.includes("scale") ? 1 : 0;
}
function La(e, t) {
  if (!e || e === "none")
    return Oa(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = p1, o = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = f1, o = a;
  }
  if (!o)
    return Oa(t);
  const i = r[t], s = o[1].split(",").map(m1);
  return typeof i == "function" ? i(s) : s[i];
}
const h1 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return La(n, t);
};
function m1(e) {
  return parseFloat(e.trim());
}
const Mr = [
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
], Ar = new Set(Mr), Ou = (e) => e === Tr || e === te, g1 = /* @__PURE__ */ new Set(["x", "y", "z"]), v1 = Mr.filter((e) => !g1.has(e));
function y1(e) {
  const t = [];
  return v1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const wn = {
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
  x: (e, { transform: t }) => La(t, "x"),
  y: (e, { transform: t }) => La(t, "y")
};
wn.translateX = wn.x;
wn.translateY = wn.y;
const Gn = /* @__PURE__ */ new Set();
let Fa = !1, Va = !1, $a = !1;
function dv() {
  if (Va) {
    const e = Array.from(Gn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = y1(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, s]) => {
        var a;
        (a = r.getValue(i)) == null || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Va = !1, Fa = !1, Gn.forEach((e) => e.complete($a)), Gn.clear();
}
function fv() {
  Gn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Va = !0);
  });
}
function w1() {
  $a = !0, fv(), dv(), $a = !1;
}
class ic {
  constructor(t, n, r, o, i, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Gn.add(this), Fa || (Fa = !0, Ie.read(fv), Ie.resolveKeyframes(dv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    if (t[0] === null) {
      const i = o == null ? void 0 : o.get(), s = t[t.length - 1];
      if (i !== void 0)
        t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), o && i === void 0 && o.set(t[0]);
    }
    d1(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Gn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Gn.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const b1 = (e) => e.startsWith("--");
function pv(e, t, n) {
  b1(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const x1 = {};
function hv(e, t) {
  const n = /* @__PURE__ */ zg(e);
  return () => x1[t] ?? n();
}
const S1 = /* @__PURE__ */ hv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), mv = /* @__PURE__ */ hv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), zr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Lu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ zr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ zr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ zr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ zr([0.33, 1.53, 0.69, 0.99])
};
function gv(e, t) {
  if (e)
    return typeof e == "function" ? mv() ? lv(e, t) : "ease-out" : Jg(e) ? zr(e) : Array.isArray(e) ? e.map((n) => gv(n, t) || Lu.easeOut) : Lu[e];
}
function C1(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const d = {
    [t]: n
  };
  l && (d.offset = l);
  const u = gv(a, o);
  Array.isArray(u) && (d.easing = u);
  const p = {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return c && (p.pseudoElement = c), e.animate(d, p);
}
function vv(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function R1({ type: e, ...t }) {
  return vv(e) && mv() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class yv extends oc {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: s = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = s, this.options = t, cn(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const c = R1(t);
    this.animation = C1(n, r, o, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const d = ls(o, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(d), pv(n, r, d), this.animation.cancel();
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
    return /* @__PURE__ */ Rt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Rt(t);
  }
  get time() {
    return /* @__PURE__ */ Rt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ft(t), n && this.animation.pause();
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
    var i;
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && S1() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), r && (this.animation.rangeEnd = r), Pt) : o(this);
  }
}
const wv = {
  anticipate: Yg,
  backInOut: Kg,
  circInOut: qg
};
function E1(e) {
  return e in wv;
}
function P1(e) {
  typeof e.ease == "string" && E1(e.ease) && (e.ease = wv[e.ease]);
}
const Vs = 10;
class T1 extends yv {
  constructor(t) {
    P1(t), uv(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
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
    const { motionValue: n, onUpdate: r, onComplete: o, element: i, ...s } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Ci({
      ...s,
      autoplay: !1
    }), l = Math.max(Vs, at.now() - this.startTime), c = Zt(0, Vs, l - Vs), d = a.sample(l).value, { name: u } = this.options;
    i && u && pv(i, u, d), n.setWithVelocity(a.sample(Math.max(0, l - c)).value, d, c), a.stop();
  }
}
const Fu = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ot.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function M1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function A1(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = Fu(o, t), a = Fu(i, t);
  return Pr(s === a, `You are trying to animate ${t} from "${o}" to "${i}". "${s ? i : o}" is not an animatable value.`, "value-not-animatable"), !s || !a ? !1 : M1(e) || (n === "spring" || vv(n)) && r;
}
function Ba(e) {
  e.duration = 0, e.type = "keyframes";
}
const bv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), D1 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function I1(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && D1.test(e[t]))
      return !0;
  return !1;
}
const N1 = /* @__PURE__ */ new Set([
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
]), k1 = /* @__PURE__ */ zg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _1(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: s, keyframes: a } = e;
  if (!(((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return k1() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (bv.has(n) || N1.has(n) && I1(a)) && (n !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && i !== 0 && s !== "inertia";
}
const O1 = 40;
class L1 extends oc {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", keyframes: a, name: l, motionValue: c, element: d, ...u }) {
    var v;
    super(), this.stop = () => {
      var g, y;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = at.now();
    const p = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
      name: l,
      motionValue: c,
      element: d,
      ...u
    }, h = (d == null ? void 0 : d.KeyframeResolver) || ic;
    this.keyframeResolver = new h(a, (g, y, w) => this.onKeyframesResolved(g, y, p, !w), l, c, d), (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    var w, x;
    this.keyframeResolver = void 0;
    const { name: i, type: s, velocity: a, delay: l, isHandoff: c, onUpdate: d } = r;
    this.resolvedAt = at.now();
    let u = !0;
    A1(t, i, s, a) || (u = !1, (Tn.instantAnimations || !l) && (d == null || d(ls(t, r, n))), t[0] = t[t.length - 1], Ba(r), r.repeat = 0);
    const h = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > O1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, v = u && !c && _1(h), g = (x = (w = h.motionValue) == null ? void 0 : w.owner) == null ? void 0 : x.current;
    let y;
    if (v)
      try {
        y = new T1({
          ...h,
          element: g
        });
      } catch {
        y = new Ci(h);
      }
    else
      y = new Ci(h);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(Pt), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), w1()), this._animation;
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
function xv(e, t, n, r = 0, o = 1) {
  const i = Array.from(e).sort((c, d) => c.sortNodePosition(d)).indexOf(t), s = e.size, a = (s - 1) * r;
  return typeof n == "function" ? n(i, s) : o === 1 ? i * r : a - i * r;
}
const F1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function V1(e) {
  const t = F1.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const $1 = 4;
function Sv(e, t, n = 1) {
  cn(n <= $1, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, o] = V1(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Vg(s) ? parseFloat(s) : s;
  }
  return Ql(o) ? Sv(o, t, n + 1) : o;
}
const B1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, z1 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), H1 = {
  type: "keyframes",
  duration: 0.8
}, j1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, W1 = (e, { keyframes: t }) => t.length > 2 ? H1 : Ar.has(e) ? e.startsWith("scale") ? z1(t[1]) : B1 : j1;
function Cv(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function sc(e, t) {
  const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? Cv(n, e) : n;
}
const G1 = /* @__PURE__ */ new Set([
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
function U1(e) {
  for (const t in e)
    if (!G1.has(t))
      return !0;
  return !1;
}
const ac = (e, t, n, r = {}, o, i) => (s) => {
  const a = sc(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ ft(l);
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
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  U1(a) || Object.assign(d, W1(e, d)), d.duration && (d.duration = /* @__PURE__ */ ft(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ ft(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Ba(d), d.delay === 0 && (u = !0)), (Tn.instantAnimations || Tn.skipAnimations || o != null && o.shouldSkipAnimations) && (u = !0, Ba(d), d.delay = 0), d.allowFlatten = !a.type && !a.ease, u && !i && t.get() !== void 0) {
    const p = ls(d.keyframes, a);
    if (p !== void 0) {
      Ie.update(() => {
        d.onUpdate(p), d.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Ci(d) : new L1(d);
};
function Vu(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function lc(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Vu(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Vu(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Un(e, t, n) {
  const r = e.getProps();
  return lc(r, t, n !== void 0 ? n : r.custom, e);
}
const Rv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Mr
]), $u = 30, K1 = (e) => !isNaN(parseFloat(e));
class Y1 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var i;
      const o = at.now();
      if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
        for (const s of this.dependents)
          s.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = at.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = K1(this.current));
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
    return process.env.NODE_ENV !== "production" && ql(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Xl());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Ie.read(() => {
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
    const t = at.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > $u)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $u);
    return Hg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function br(e, t) {
  return new Y1(e, t);
}
const za = (e) => Array.isArray(e);
function X1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, br(n));
}
function q1(e) {
  return za(e) ? e[e.length - 1] || 0 : e;
}
function Z1(e, t) {
  const n = Un(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = q1(i[s]);
    X1(e, s, a);
  }
}
const tt = (e) => !!(e && e.getVelocity);
function J1(e) {
  return !!(tt(e) && e.add);
}
function Ha(e, t) {
  const n = e.getValue("willChange");
  if (J1(n))
    return n.add(t);
  if (!n && Tn.WillChange) {
    const r = new Tn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function cc(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const Q1 = "framerAppearId", Ev = "data-" + cc(Q1);
function Pv(e) {
  return e.props[Ev];
}
function eM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Tv(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  i = i ? Cv(i, l) : l;
  const c = i == null ? void 0 : i.reduceMotion;
  r && (i = r);
  const d = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const p in a) {
    const h = e.getValue(p, e.latestValues[p] ?? null), v = a[p];
    if (v === void 0 || u && eM(u, p))
      continue;
    const g = {
      delay: n,
      ...sc(i || {}, p)
    }, y = h.get();
    if (y !== void 0 && !h.isAnimating() && !Array.isArray(v) && v === y && !g.velocity) {
      Ie.update(() => h.set(v));
      continue;
    }
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const S = Pv(e);
      if (S) {
        const C = window.MotionHandoffAnimation(S, p, Ie);
        C !== null && (g.startTime = C, w = !0);
      }
    }
    Ha(e, p);
    const x = c ?? e.shouldReduceMotion;
    h.start(ac(p, h, v, x && Rv.has(p) ? { type: !1 } : g, e, w));
    const b = h.animation;
    b && d.push(b);
  }
  if (s) {
    const p = () => Ie.update(() => {
      s && Z1(e, s);
    });
    d.length ? Promise.all(d).then(p) : p();
  }
  return d;
}
function ja(e, t, n = {}) {
  var l;
  const r = Un(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Tv(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: p } = o;
    return tM(e, t, c, d, u, p, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [i, s] : [s, i];
    return c().then(() => d());
  } else
    return Promise.all([i(), s(n.delay)]);
}
function tM(e, t, n = 0, r = 0, o = 0, i = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(ja(l, t, {
      ...s,
      delay: n + (typeof r == "function" ? 0 : r) + xv(e.variantChildren, l, r, o, i)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function nM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => ja(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = ja(e, t, n);
  else {
    const o = typeof t == "function" ? Un(e, t, n.custom) : t;
    r = Promise.all(Tv(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const rM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Mv = (e) => (t) => t.test(e), Av = [Tr, te, Xt, gn, MT, TT, rM], Bu = (e) => Av.find(Mv(e));
function oM(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Bg(e) : !0;
}
const iM = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function sM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ec) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = iM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const aM = /\b([a-z-]*)\(.*?\)/gu, Wa = {
  ...Ot,
  getAnimatableNone: (e) => {
    const t = e.match(aM);
    return t ? t.map(sM).join(" ") : e;
  }
}, Ga = {
  ...Ot,
  getAnimatableNone: (e) => {
    const t = Ot.parse(e);
    return Ot.createTransformer(e)(t.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, zu = {
  ...Tr,
  transform: Math.round
}, lM = {
  rotate: gn,
  rotateX: gn,
  rotateY: gn,
  rotateZ: gn,
  scale: Vo,
  scaleX: Vo,
  scaleY: Vo,
  scaleZ: Vo,
  skew: gn,
  skewX: gn,
  skewY: gn,
  distance: te,
  translateX: te,
  translateY: te,
  translateZ: te,
  x: te,
  y: te,
  z: te,
  perspective: te,
  transformPerspective: te,
  opacity: to,
  originX: Tu,
  originY: Tu,
  originZ: te
}, uc = {
  // Border props
  borderWidth: te,
  borderTopWidth: te,
  borderRightWidth: te,
  borderBottomWidth: te,
  borderLeftWidth: te,
  borderRadius: te,
  borderTopLeftRadius: te,
  borderTopRightRadius: te,
  borderBottomRightRadius: te,
  borderBottomLeftRadius: te,
  // Positioning props
  width: te,
  maxWidth: te,
  height: te,
  maxHeight: te,
  top: te,
  right: te,
  bottom: te,
  left: te,
  inset: te,
  insetBlock: te,
  insetBlockStart: te,
  insetBlockEnd: te,
  insetInline: te,
  insetInlineStart: te,
  insetInlineEnd: te,
  // Spacing props
  padding: te,
  paddingTop: te,
  paddingRight: te,
  paddingBottom: te,
  paddingLeft: te,
  paddingBlock: te,
  paddingBlockStart: te,
  paddingBlockEnd: te,
  paddingInline: te,
  paddingInlineStart: te,
  paddingInlineEnd: te,
  margin: te,
  marginTop: te,
  marginRight: te,
  marginBottom: te,
  marginLeft: te,
  marginBlock: te,
  marginBlockStart: te,
  marginBlockEnd: te,
  marginInline: te,
  marginInlineStart: te,
  marginInlineEnd: te,
  // Typography
  fontSize: te,
  // Misc
  backgroundPositionX: te,
  backgroundPositionY: te,
  ...lM,
  zIndex: zu,
  // SVG
  fillOpacity: to,
  strokeOpacity: to,
  numOctaves: zu
}, cM = {
  ...uc,
  // Color props
  color: Ge,
  backgroundColor: Ge,
  outlineColor: Ge,
  fill: Ge,
  stroke: Ge,
  // Border props
  borderColor: Ge,
  borderTopColor: Ge,
  borderRightColor: Ge,
  borderBottomColor: Ge,
  borderLeftColor: Ge,
  filter: Wa,
  WebkitFilter: Wa,
  mask: Ga,
  WebkitMask: Ga
}, Dv = (e) => cM[e], uM = /* @__PURE__ */ new Set([Wa, Ga]);
function Iv(e, t) {
  let n = Dv(e);
  return uM.has(n) || (n = Ot), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const dM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function fM(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !dM.has(i) && wr(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = Iv(n, o);
}
class pM extends ic {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let u = t[d];
      if (typeof u == "string" && (u = u.trim(), Ql(u))) {
        const p = Sv(u, n.current);
        p !== void 0 && (t[d] = p), d === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Rv.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = Bu(o), a = Bu(i), l = Pu(o), c = Pu(i);
    if (l !== c && wn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (Ou(s) && Ou(a))
        for (let d = 0; d < t.length; d++) {
          const u = t[d];
          typeof u == "string" && (t[d] = parseFloat(u));
        }
      else wn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || oM(t[o])) && r.push(o);
    r.length && fM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = wn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    const i = r.length - 1, s = r[i];
    r[i] = wn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, c]) => {
      t.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Nv(e, t, n) {
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
const kv = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function hM(e) {
  return $g(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: dc } = /* @__PURE__ */ Qg(queueMicrotask, !1), _t = {
  x: !1,
  y: !1
};
function _v() {
  return _t.x || _t.y;
}
function mM(e) {
  return e === "x" || e === "y" ? _t[e] ? null : (_t[e] = !0, () => {
    _t[e] = !1;
  }) : _t.x || _t.y ? null : (_t.x = _t.y = !0, () => {
    _t.x = _t.y = !1;
  });
}
function Ov(e, t) {
  const n = Nv(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function gM(e) {
  return !(e.pointerType === "touch" || _v());
}
function vM(e, t, n = {}) {
  const [r, o, i] = Ov(e, n);
  return r.forEach((s) => {
    let a = !1, l = !1, c;
    const d = () => {
      s.removeEventListener("pointerleave", v);
    }, u = (y) => {
      c && (c(y), c = void 0), d();
    }, p = (y) => {
      a = !1, window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), l && (l = !1, u(y));
    }, h = () => {
      a = !0, window.addEventListener("pointerup", p, o), window.addEventListener("pointercancel", p, o);
    }, v = (y) => {
      if (y.pointerType !== "touch") {
        if (a) {
          l = !0;
          return;
        }
        u(y);
      }
    }, g = (y) => {
      if (!gM(y))
        return;
      l = !1;
      const w = t(s, y);
      typeof w == "function" && (c = w, s.addEventListener("pointerleave", v, o));
    };
    s.addEventListener("pointerenter", g, o), s.addEventListener("pointerdown", h, o);
  }), i;
}
const Lv = (e, t) => t ? e === t ? !0 : Lv(e, t.parentElement) : !1, fc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, yM = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function wM(e) {
  return yM.has(e.tagName) || e.isContentEditable === !0;
}
const bM = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function xM(e) {
  return bM.has(e.tagName) || e.isContentEditable === !0;
}
const Zo = /* @__PURE__ */ new WeakSet();
function Hu(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function $s(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const SM = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Hu(() => {
    if (Zo.has(n))
      return;
    $s(n, "down");
    const o = Hu(() => {
      $s(n, "up");
    }), i = () => $s(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function ju(e) {
  return fc(e) && !_v();
}
const Wu = /* @__PURE__ */ new WeakSet();
function CM(e, t, n = {}) {
  const [r, o, i] = Ov(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!ju(a) || Wu.has(a))
      return;
    Zo.add(l), n.stopPropagation && Wu.add(a);
    const c = t(l, a), d = (h, v) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", p), Zo.has(l) && Zo.delete(l), ju(h) && typeof c == "function" && c(h, { success: v });
    }, u = (h) => {
      d(h, l === window || l === document || n.useGlobalTarget || Lv(l, h.target));
    }, p = (h) => {
      d(h, !1);
    };
    window.addEventListener("pointerup", u, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), hM(a) && (a.addEventListener("focus", (c) => SM(c, o)), !wM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
function pc(e) {
  return $g(e) && "ownerSVGElement" in e;
}
const Jo = /* @__PURE__ */ new WeakMap();
let vn;
const Fv = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : pc(r) && "getBBox" in r ? r.getBBox()[t] : r[n], RM = /* @__PURE__ */ Fv("inline", "width", "offsetWidth"), EM = /* @__PURE__ */ Fv("block", "height", "offsetHeight");
function PM({ target: e, borderBoxSize: t }) {
  var n;
  (n = Jo.get(e)) == null || n.forEach((r) => {
    r(e, {
      get width() {
        return RM(e, t);
      },
      get height() {
        return EM(e, t);
      }
    });
  });
}
function TM(e) {
  e.forEach(PM);
}
function MM() {
  typeof ResizeObserver > "u" || (vn = new ResizeObserver(TM));
}
function AM(e, t) {
  vn || MM();
  const n = Nv(e);
  return n.forEach((r) => {
    let o = Jo.get(r);
    o || (o = /* @__PURE__ */ new Set(), Jo.set(r, o)), o.add(t), vn == null || vn.observe(r);
  }), () => {
    n.forEach((r) => {
      const o = Jo.get(r);
      o == null || o.delete(t), o != null && o.size || vn == null || vn.unobserve(r);
    });
  };
}
const Qo = /* @__PURE__ */ new Set();
let lr;
function DM() {
  lr = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Qo.forEach((t) => t(e));
  }, window.addEventListener("resize", lr);
}
function IM(e) {
  return Qo.add(e), lr || DM(), () => {
    Qo.delete(e), !Qo.size && typeof lr == "function" && (window.removeEventListener("resize", lr), lr = void 0);
  };
}
function Gu(e, t) {
  return typeof e == "function" ? IM(e) : AM(e, t);
}
function NM(e) {
  return pc(e) && e.tagName === "svg";
}
const kM = [...Av, Ge, Ot], _M = (e) => kM.find(Mv(e)), Uu = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), cr = () => ({
  x: Uu(),
  y: Uu()
}), Ku = () => ({ min: 0, max: 0 }), Ke = () => ({
  x: Ku(),
  y: Ku()
}), OM = /* @__PURE__ */ new WeakMap();
function cs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function no(e) {
  return typeof e == "string" || Array.isArray(e);
}
const hc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], mc = ["initial", ...hc];
function us(e) {
  return cs(e.animate) || mc.some((t) => no(e[t]));
}
function Vv(e) {
  return !!(us(e) || e.variants);
}
function LM(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (tt(o))
      e.addValue(r, o);
    else if (tt(i))
      e.addValue(r, br(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, br(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ua = { current: null }, $v = { current: !1 }, FM = typeof window < "u";
function VM() {
  if ($v.current = !0, !!FM)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ua.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Ua.current = !1;
}
const Yu = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Ri = {};
function Bv(e) {
  Ri = e;
}
function $M() {
  return Ri;
}
class BM {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, skipAnimations: i, blockInitialAnimation: s, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ic, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = at.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, Ie.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: d } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.skipAnimationsConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = us(n), this.isVariantNode = Vv(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...p } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in p) {
      const v = p[h];
      c[h] !== void 0 && tt(v) && v.set(c[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (n = this.values.get(o)) == null || n.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    this.current = t, OM.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, i) => this.bindToMotionValue(i, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : ($v.current || VM(), this.shouldReduceMotion = Ua.current), process.env.NODE_ENV !== "production" && ql(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), Mn(this.notifyUpdate), Mn(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
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
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && bv.has(t) && this.current instanceof HTMLElement) {
      const { factory: s, keyframes: a, times: l, ease: c, duration: d } = n.accelerate, u = new yv({
        element: this.current,
        name: t,
        keyframes: a,
        times: l,
        ease: c,
        duration: /* @__PURE__ */ ft(d)
      }), p = s(u);
      this.valueSubscriptions.set(t, () => {
        p(), u.cancel();
      });
      return;
    }
    const r = Ar.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && Ie.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let i;
    typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ri) {
      const n = Ri[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ke();
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
    for (let r = 0; r < Yu.length; r++) {
      const o = Yu[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = LM(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = br(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Vg(r) || Bg(r)) ? r = parseFloat(r) : !_M(r) && Ot.test(n) && (r = Iv(t, n)), this.setBaseTarget(t, tt(r) ? r.get() : r)), tt(r) ? r.get() : r;
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
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = lc(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      s && (r = s[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !tt(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Xl()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    dc.render(this.render);
  }
}
class zv extends BM {
  constructor() {
    super(...arguments), this.KeyframeResolver = pM;
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
    tt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Fn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Hv({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function zM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function HM(e, t) {
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
function Bs(e) {
  return e === void 0 || e === 1;
}
function Ka({ scale: e, scaleX: t, scaleY: n }) {
  return !Bs(e) || !Bs(t) || !Bs(n);
}
function Hn(e) {
  return Ka(e) || jv(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function jv(e) {
  return Xu(e.x) || Xu(e.y);
}
function Xu(e) {
  return e && e !== "0%";
}
function Ei(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function qu(e, t, n, r, o) {
  return o !== void 0 && (e = Ei(e, o, r)), Ei(e, n, r) + t;
}
function Ya(e, t = 0, n = 1, r, o) {
  e.min = qu(e.min, t, n, r, o), e.max = qu(e.max, t, n, r, o);
}
function Wv(e, { x: t, y: n }) {
  Ya(e.x, t.translate, t.scale, t.originPoint), Ya(e.y, n.translate, n.scale, n.originPoint);
}
const Zu = 0.999999999999, Ju = 1.0000000000001;
function jM(e, t, n, r = !1) {
  var a;
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < o; l++) {
    i = n[l], s = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && (Gt(e.x, -i.scroll.offset.x), Gt(e.y, -i.scroll.offset.y)), s && (t.x *= s.x.scale, t.y *= s.y.scale, Wv(e, s)), r && Hn(i.latestValues) && ei(e, i.latestValues, (a = i.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < Ju && t.x > Zu && (t.x = 1), t.y < Ju && t.y > Zu && (t.y = 1);
}
function Gt(e, t) {
  e.min += t, e.max += t;
}
function Qu(e, t, n, r, o = 0.5) {
  const i = Le(e.min, e.max, o);
  Ya(e, t, n, i, r);
}
function ed(e, t) {
  return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function ei(e, t, n) {
  const r = n ?? e;
  Qu(e.x, ed(t.x, r.x), t.scaleX, t.scale, t.originX), Qu(e.y, ed(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Gv(e, t) {
  return Hv(HM(e.getBoundingClientRect(), t));
}
function WM(e, t, n) {
  const r = Gv(e, n), { scroll: o } = t;
  return o && (Gt(r.x, o.offset.x), Gt(r.y, o.offset.y)), r;
}
const GM = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, UM = Mr.length;
function KM(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < UM; i++) {
    const s = Mr[i], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number")
      l = a === (s.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(a);
      l = s.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!l || n) {
      const c = kv(a, uc[s]);
      if (!l) {
        o = !1;
        const d = GM[s] || s;
        r += `${d}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function gc(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Ar.has(l)) {
      s = !0;
      continue;
    } else if (tv(l)) {
      o[l] = c;
      continue;
    } else {
      const d = kv(c, uc[l]);
      l.startsWith("origin") ? (a = !0, i[l] = d) : r[l] = d;
    }
  }
  if (t.transform || (s || n ? r.transform = KM(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
function Uv(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let s;
  for (s in t)
    i[s] = t[s];
  o == null || o.applyProjectionStyles(i, r);
  for (s in n)
    i.setProperty(s, n[s]);
}
function td(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Fr = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (te.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = td(e, t.target.x), r = td(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, YM = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Ot.parse(e);
    if (o.length > 5)
      return r;
    const i = Ot.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= l;
    const c = Le(a, l, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
  }
}, Xa = {
  borderRadius: {
    ...Fr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Fr,
  borderTopRightRadius: Fr,
  borderBottomLeftRadius: Fr,
  borderBottomRightRadius: Fr,
  boxShadow: YM
};
function Kv(e, { layout: t, layoutId: n }) {
  return Ar.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Xa[e] || e === "opacity");
}
function vc(e, t, n) {
  var s;
  const r = e.style, o = t == null ? void 0 : t.style, i = {};
  if (!r)
    return i;
  for (const a in r)
    (tt(r[a]) || o && tt(o[a]) || Kv(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (i[a] = r[a]);
  return i;
}
function XM(e) {
  return window.getComputedStyle(e);
}
class qM extends zv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Uv;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Ar.has(n))
      return (r = this.projection) != null && r.isProjecting ? Oa(n) : h1(t, n);
    {
      const o = XM(t), i = (tv(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Gv(t, n);
  }
  build(t, n, r) {
    gc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return vc(t, n, r);
  }
}
const ZM = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, JM = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function QM(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? ZM : JM;
  e[i.offset] = `${-r}`, e[i.array] = `${t} ${n}`;
}
const eA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Yv(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: o,
  pathSpacing: i = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, d) {
  if (gc(e, a, c), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: u, style: p } = e;
  u.transform && (p.transform = u.transform, delete u.transform), (p.transform || u.transformOrigin) && (p.transformOrigin = u.transformOrigin ?? "50% 50%", delete u.transformOrigin), p.transform && (p.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete u.transformBox);
  for (const h of eA)
    u[h] !== void 0 && (p[h] = u[h], delete u[h]);
  t !== void 0 && (u.x = t), n !== void 0 && (u.y = n), r !== void 0 && (u.scale = r), o !== void 0 && QM(u, o, i, s, !1);
}
const Xv = /* @__PURE__ */ new Set([
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
]), qv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function tA(e, t, n, r) {
  Uv(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Xv.has(o) ? o : cc(o), t.attrs[o]);
}
function Zv(e, t, n) {
  const r = vc(e, t, n);
  for (const o in e)
    if (tt(e[o]) || tt(t[o])) {
      const i = Mr.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
class nA extends zv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ke;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ar.has(n)) {
      const r = Dv(n);
      return r && r.default || 0;
    }
    return n = Xv.has(n) ? n : cc(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Zv(t, n, r);
  }
  build(t, n, r) {
    Yv(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    tA(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = qv(t.tagName), super.mount(t);
  }
}
const rA = mc.length;
function Jv(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Jv(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < rA; n++) {
    const r = mc[n], o = e.props[r];
    (no(o) || o === !1) && (t[r] = o);
  }
  return t;
}
function Qv(e, t) {
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
const oA = [...hc].reverse(), iA = hc.length;
function sA(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => nM(e, n, r)));
}
function aA(e) {
  let t = sA(e), n = nd(), r = !0, o = !1;
  const i = (c) => (d, u) => {
    var h;
    const p = Un(e, u, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
    if (p) {
      const { transition: v, transitionEnd: g, ...y } = p;
      d = { ...d, ...y, ...g };
    }
    return d;
  };
  function s(c) {
    t = c(e);
  }
  function a(c) {
    const { props: d } = e, u = Jv(e.parent) || {}, p = [], h = /* @__PURE__ */ new Set();
    let v = {}, g = 1 / 0;
    for (let w = 0; w < iA; w++) {
      const x = oA[w], b = n[x], S = d[x] !== void 0 ? d[x] : u[x], C = no(S), P = x === c ? b.isActive : null;
      P === !1 && (g = w);
      let E = S === u[x] && S !== d[x] && C;
      if (E && (r || o) && e.manuallyAnimateOnMount && (E = !1), b.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      cs(S) || typeof S == "boolean")
        continue;
      if (x === "exit" && b.isActive && P !== !0) {
        b.prevResolvedValues && (v = {
          ...v,
          ...b.prevResolvedValues
        });
        continue;
      }
      const R = lA(b.prevProp, S);
      let A = R || // If we're making this variant active, we want to always make it active
      x === c && b.isActive && !E && C || // If we removed a higher-priority variant (i is in reverse order)
      w > g && C, T = !1;
      const k = Array.isArray(S) ? S : [S];
      let W = k.reduce(i(x), {});
      P === !1 && (W = {});
      const { prevResolvedValues: X = {} } = b, Y = {
        ...X,
        ...W
      }, Q = (B) => {
        A = !0, h.has(B) && (T = !0, h.delete(B)), b.needsAnimating[B] = !0;
        const L = e.getValue(B);
        L && (L.liveStyle = !1);
      };
      for (const B in Y) {
        const L = W[B], N = X[B];
        if (v.hasOwnProperty(B))
          continue;
        let se = !1;
        za(L) && za(N) ? se = !Qv(L, N) : se = L !== N, se ? L != null ? Q(B) : h.add(B) : L !== void 0 && h.has(B) ? Q(B) : b.protectedKeys[B] = !0;
      }
      b.prevProp = S, b.prevResolvedValues = W, b.isActive && (v = { ...v, ...W }), (r || o) && e.blockInitialAnimation && (A = !1);
      const O = E && R;
      A && (!O || T) && p.push(...k.map((B) => {
        const L = { type: x };
        if (typeof B == "string" && (r || o) && !O && e.manuallyAnimateOnMount && e.parent) {
          const { parent: N } = e, se = Un(N, B);
          if (N.enteringChildren && se) {
            const { delayChildren: M } = se.transition || {};
            L.delay = xv(N.enteringChildren, e, M);
          }
        }
        return {
          animation: B,
          options: L
        };
      }));
    }
    if (h.size) {
      const w = {};
      if (typeof d.initial != "boolean") {
        const x = Un(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        x && x.transition && (w.transition = x.transition);
      }
      h.forEach((x) => {
        const b = e.getBaseTarget(x), S = e.getValue(x);
        S && (S.liveStyle = !0), w[x] = b ?? null;
      }), p.push({ animation: w });
    }
    let y = !!p.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, o = !1, y ? t(p) : Promise.resolve();
  }
  function l(c, d) {
    var p;
    if (n[c].isActive === d)
      return Promise.resolve();
    (p = e.variantChildren) == null || p.forEach((h) => {
      var v;
      return (v = h.animationState) == null ? void 0 : v.setActive(c, d);
    }), n[c].isActive = d;
    const u = a(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = nd(), o = !0;
    }
  };
}
function lA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qv(t, e) : !1;
}
function zn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function nd() {
  return {
    animate: zn(!0),
    whileInView: zn(),
    whileHover: zn(),
    whileTap: zn(),
    whileDrag: zn(),
    whileFocus: zn(),
    exit: zn()
  };
}
function qa(e, t) {
  e.min = t.min, e.max = t.max;
}
function Nt(e, t) {
  qa(e.x, t.x), qa(e.y, t.y);
}
function rd(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
const ey = 1e-4, cA = 1 - ey, uA = 1 + ey, ty = 0.01, dA = 0 - ty, fA = 0 + ty;
function lt(e) {
  return e.max - e.min;
}
function pA(e, t, n) {
  return Math.abs(e - t) <= n;
}
function od(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Le(t.min, t.max, e.origin), e.scale = lt(n) / lt(t), e.translate = Le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= cA && e.scale <= uA || isNaN(e.scale)) && (e.scale = 1), (e.translate >= dA && e.translate <= fA || isNaN(e.translate)) && (e.translate = 0);
}
function Wr(e, t, n, r) {
  od(e.x, t.x, n.x, r ? r.originX : void 0), od(e.y, t.y, n.y, r ? r.originY : void 0);
}
function id(e, t, n, r = 0) {
  const o = r ? Le(n.min, n.max, r) : n.min;
  e.min = o + t.min, e.max = e.min + lt(t);
}
function hA(e, t, n, r) {
  id(e.x, t.x, n.x, r == null ? void 0 : r.x), id(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function sd(e, t, n, r = 0) {
  const o = r ? Le(n.min, n.max, r) : n.min;
  e.min = t.min - o, e.max = e.min + lt(t);
}
function Pi(e, t, n, r) {
  sd(e.x, t.x, n.x, r == null ? void 0 : r.x), sd(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function ad(e, t, n, r, o) {
  return e -= t, e = Ei(e, 1 / n, r), o !== void 0 && (e = Ei(e, 1 / o, r)), e;
}
function mA(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (Xt.test(t) && (t = parseFloat(t), t = Le(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = Le(i.min, i.max, r);
  e === i && (a -= t), e.min = ad(e.min, t, n, a, o), e.max = ad(e.max, t, n, a, o);
}
function ld(e, t, [n, r, o], i, s) {
  mA(e, t[n], t[r], t[o], t.scale, i, s);
}
const gA = ["x", "scaleX", "originX"], vA = ["y", "scaleY", "originY"];
function cd(e, t, n, r) {
  ld(e.x, t, gA, n ? n.x : void 0, r ? r.x : void 0), ld(e.y, t, vA, n ? n.y : void 0, r ? r.y : void 0);
}
function ud(e) {
  return e.translate === 0 && e.scale === 1;
}
function ny(e) {
  return ud(e.x) && ud(e.y);
}
function dd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function yA(e, t) {
  return dd(e.x, t.x) && dd(e.y, t.y);
}
function fd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ry(e, t) {
  return fd(e.x, t.x) && fd(e.y, t.y);
}
function pd(e) {
  return lt(e.x) / lt(e.y);
}
function hd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function Wt(e) {
  return [e("x"), e("y")];
}
function wA(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: d, rotateX: u, rotateY: p, skewX: h, skewY: v } = n;
    c && (r = `perspective(${c}px) ${r}`), d && (r += `rotate(${d}deg) `), u && (r += `rotateX(${u}deg) `), p && (r += `rotateY(${p}deg) `), h && (r += `skewX(${h}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const oy = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], bA = oy.length, md = (e) => typeof e == "string" ? parseFloat(e) : e, gd = (e) => typeof e == "number" || te.test(e);
function xA(e, t, n, r, o, i) {
  o ? (e.opacity = Le(0, n.opacity ?? 1, SA(r)), e.opacityExit = Le(t.opacity ?? 1, 0, CA(r))) : i && (e.opacity = Le(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < bA; s++) {
    const a = oy[s];
    let l = vd(t, a), c = vd(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || gd(l) === gd(c) ? (e[a] = Math.max(Le(md(l), md(c), r), 0), (Xt.test(c) || Xt.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = Le(t.rotate || 0, n.rotate || 0, r));
}
function vd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const SA = /* @__PURE__ */ iy(0, 0.5, Xg), CA = /* @__PURE__ */ iy(0.5, 0.95, Pt);
function iy(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ eo(e, t, r));
}
function RA(e, t, n) {
  const r = tt(e) ? e : br(e);
  return r.start(ac("", r, t, n)), r.animation;
}
function ro(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const EA = (e, t) => e.depth - t.depth;
class PA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Yl(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    wi(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(EA), this.isDirty = !1, this.children.forEach(t);
  }
}
function TA(e, t) {
  const n = at.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Mn(r), e(i - t));
  };
  return Ie.setup(r, !0), () => Mn(r);
}
function ti(e) {
  return tt(e) ? e.get() : e;
}
class MA {
  constructor() {
    this.members = [];
  }
  add(t) {
    Yl(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead)
        continue;
      const o = r.instance;
      (!o || o.isConnected === !1) && !r.snapshot && (wi(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (wi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const { layoutDependency: i } = r.options, { layoutDependency: s } = t.options;
      (i === void 0 || i !== s) && (t.resumeFrom = r, n && (r.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (o = t.root) != null && o.isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, i, s;
      (r = (n = t.options).onExitComplete) == null || r.call(n), (s = (o = t.resumingFrom) == null ? void 0 : (i = o.options).onExitComplete) == null || s.call(i);
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
const ni = {
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
}, zs = ["", "X", "Y", "Z"], AA = 1e3;
let DA = 0;
function Hs(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function sy(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Pv(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ie, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && sy(r);
}
function ay({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = DA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(kA), this.nodes.forEach($A), this.nodes.forEach(BA), this.nodes.forEach(_A);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new PA());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Xl()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = pc(s) && !NM(s), this.instance = s;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let d, u = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        Ie.read(() => {
          u = window.innerWidth;
        }), e(s, () => {
          const h = window.innerWidth;
          h !== u && (u = h, this.root.updateBlockedByResize = !0, d && d(), d = TA(p, 250), ni.hasAnimatedSinceResize && (ni.hasAnimatedSinceResize = !1, this.nodes.forEach(bd)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: u, hasRelativeLayoutChanged: p, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || GA, { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = c.getProps(), w = !this.targetLayout || !ry(this.targetLayout, h), x = !u && p;
        if (this.options.layoutRoot || this.resumeFrom || x || u && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const b = {
            ...sc(v, "layout"),
            onPlay: g,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b), this.setAnimationOrigin(d, x);
        } else
          u || bd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Mn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(zA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sy(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const l = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach(LA), this.nodes.forEach(yd);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(wd);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(FA), this.nodes.forEach(VA), this.nodes.forEach(IA), this.nodes.forEach(NA)) : this.nodes.forEach(wd), this.clearAllSnapshots();
      const a = at.now();
      et.delta = Zt(0, 1e3 / 60, a - et.timestamp), et.timestamp = a, et.isProcessing = !0, ks.update.process(et), ks.preRender.process(et), ks.render.process(et), et.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, dc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(OA), this.sharedNodes.forEach(HA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ie.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !lt(this.snapshot.measuredBox.x) && !lt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Ke()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && this.instance) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !ny(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, d = c !== this.prevTransformTemplateValue;
      s && this.instance && (a || Hn(this.latestValues) || d) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), UA(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var c;
      const { visualElement: s } = this.options;
      if (!s)
        return Ke();
      const a = s.measureViewportBox();
      if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(KA))) {
        const { scroll: d } = this.root;
        d && (Gt(a.x, d.offset.x), Gt(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Ke();
      if (Nt(a, s), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: p } = d;
        d !== this.root && u && p.layoutScroll && (u.wasRoot && Nt(a, s), Gt(a.x, u.offset.x), Gt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1, l) {
      var d, u;
      const c = l || Ke();
      Nt(c, s);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (Gt(c.x, -h.scroll.offset.x), Gt(c.y, -h.scroll.offset.y)), Hn(h.latestValues) && ei(c, h.latestValues, (d = h.layout) == null ? void 0 : d.layoutBox);
      }
      return Hn(this.latestValues) && ei(c, this.latestValues, (u = this.layout) == null ? void 0 : u.layoutBox), c;
    }
    removeTransform(s) {
      var l;
      const a = Ke();
      Nt(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!Hn(d.latestValues))
          continue;
        let u;
        d.instance && (Ka(d.latestValues) && d.updateSnapshot(), u = Ke(), Nt(u, d.measurePageBox())), cd(a, d.latestValues, (l = d.snapshot) == null ? void 0 : l.layoutBox, u);
      }
      return Hn(this.latestValues) && cd(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== et.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: u } = this.options;
      if (!this.layout || !(d || u))
        return;
      this.resolvedRelativeTargetAt = et.timestamp;
      const p = this.getClosestProjectingParent();
      p && this.linkedParentVersion !== p.layoutVersion && !p.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && p && p.layout ? this.createRelativeTarget(p, this.layout.layoutBox, p.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ke(), this.targetWithTransforms = Ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), hA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Nt(this.target, this.layout.layoutBox), Wv(this.target, this.targetDelta)) : Nt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? this.createRelativeTarget(p, this.target, p.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ka(this.parent.latestValues) || jv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(s, a, l) {
      this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ke(), this.relativeTargetOrigin = Ke(), Pi(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Nt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let l = !0;
      if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === et.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      Nt(this.layoutCorrected, this.layout.layoutBox);
      const u = this.treeScale.x, p = this.treeScale.y;
      jM(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = Ke());
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (rd(this.prevProjectionDelta.x, this.projectionDelta.x), rd(this.prevProjectionDelta.y, this.projectionDelta.y)), Wr(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== u || this.treeScale.y !== p || !hd(this.projectionDelta.x, this.prevProjectionDelta.x) || !hd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = cr(), this.projectionDelta = cr(), this.projectionDeltaWithTransform = cr();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, d = { ...this.latestValues }, u = cr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const p = Ke(), h = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = h !== v, y = this.getStack(), w = !y || y.members.length <= 1, x = !!(g && !w && this.options.crossfade === !0 && !this.path.some(WA));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        xd(u.x, s.x, C), xd(u.y, s.y, C), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pi(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), jA(this.relativeTarget, this.relativeTargetOrigin, p, C), b && yA(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Ke()), Nt(b, this.relativeTarget)), g && (this.animationValues = d, xA(d, c, this.latestValues, C, x, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (Mn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ie.update(() => {
        ni.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = br(0)), this.motionValue.jump(0, !1), this.currentAnimation = RA(this.motionValue, [0, 1e3], {
          ...s,
          velocity: 0,
          isSync: !0,
          onUpdate: (d) => {
            this.mixTargetDelta(d), s.onUpdate && s.onUpdate(d);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(AA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: d } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && ly(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Ke();
          const u = lt(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + u;
          const p = lt(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + p;
        }
        Nt(a, l), ei(a, d), Wr(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new MA()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Hs("z", s, c, this.animationValues);
      for (let d = 0; d < zs.length; d++)
        Hs(`rotate${zs[d]}`, s, c, this.animationValues), Hs(`skew${zs[d]}`, s, c, this.animationValues);
      s.render();
      for (const d in c)
        s.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = ti(a == null ? void 0 : a.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = ti(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Hn(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let u = wA(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (u = l(d, u)), s.transform = u;
      const { x: p, y: h } = this.projectionDelta;
      s.transformOrigin = `${p.origin * 100}% ${h.origin * 100}% 0`, c.animationValues ? s.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in Xa) {
        if (d[v] === void 0)
          continue;
        const { correct: g, applyTo: y, isCSSVariable: w } = Xa[v], x = u === "none" ? d[v] : g(d[v], c);
        if (y) {
          const b = y.length;
          for (let S = 0; S < b; S++)
            s[y[S]] = x;
        } else
          w ? this.options.visualElement.renderState.vars[v] = x : s[v] = x;
      }
      this.options.layoutId && (s.pointerEvents = c === this ? ti(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(yd), this.root.sharedNodes.clear();
    }
  };
}
function IA(e) {
  e.updateLayout();
}
function NA(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = t.source !== e.layout.source;
    if (i === "size")
      Wt((u) => {
        const p = s ? t.measuredBox[u] : t.layoutBox[u], h = lt(p);
        p.min = r[u].min, p.max = p.min + h;
      });
    else if (i === "x" || i === "y") {
      const u = i === "x" ? "y" : "x";
      qa(s ? t.measuredBox[u] : t.layoutBox[u], r[u]);
    } else ly(i, t.layoutBox, r) && Wt((u) => {
      const p = s ? t.measuredBox[u] : t.layoutBox[u], h = lt(r[u]);
      p.max = p.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const a = cr();
    Wr(a, r, t.layoutBox);
    const l = cr();
    s ? Wr(l, e.applyTransform(o, !0), t.measuredBox) : Wr(l, r, t.layoutBox);
    const c = !ny(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: p, layout: h } = u;
        if (p && h) {
          const v = e.options.layoutAnchor || void 0, g = Ke();
          Pi(g, t.layoutBox, p.layoutBox, v);
          const y = Ke();
          Pi(y, r, h.layoutBox, v), ry(g, y) || (d = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function kA(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _A(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function OA(e) {
  e.clearSnapshot();
}
function yd(e) {
  e.clearMeasurements();
}
function LA(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function wd(e) {
  e.isLayoutDirty = !1;
}
function FA(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function VA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function bd(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function $A(e) {
  e.resolveTargetDelta();
}
function BA(e) {
  e.calcProjection();
}
function zA(e) {
  e.resetSkewAndRotation();
}
function HA(e) {
  e.removeLeadSnapshot();
}
function xd(e, t, n) {
  e.translate = Le(t.translate, 0, n), e.scale = Le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Sd(e, t, n, r) {
  e.min = Le(t.min, n.min, r), e.max = Le(t.max, n.max, r);
}
function jA(e, t, n, r) {
  Sd(e.x, t.x, n.x, r), Sd(e.y, t.y, n.y, r);
}
function WA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const GA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cd = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Rd = Cd("applewebkit/") && !Cd("chrome/") ? Math.round : Pt;
function Ed(e) {
  e.min = Rd(e.min), e.max = Rd(e.max);
}
function UA(e) {
  Ed(e.x), Ed(e.y);
}
function ly(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !pA(pd(t), pd(n), 0.2);
}
function KA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const YA = ay({
  attachResizeListener: (e, t) => ro(e, "resize", t),
  measureScroll: () => {
    var e, t;
    return {
      x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), js = {
  current: void 0
}, cy = ay({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!js.current) {
      const e = new YA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), js.current = e;
    }
    return js.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), uy = Bt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function XA(e = !0) {
  const t = ze(Kl);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = pw();
  we(() => {
    if (e)
      return o(i);
  }, [e]);
  const s = He(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const dy = Bt({ strict: !1 }), Pd = {
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
let Td = !1;
function qA() {
  if (Td)
    return;
  const e = {};
  for (const t in Pd)
    e[t] = {
      isEnabled: (n) => Pd[t].some((r) => !!n[r])
    };
  Bv(e), Td = !0;
}
function fy() {
  return qA(), $M();
}
function ZA(e) {
  const t = fy();
  for (const n in e)
    t[n] = {
      ...t[n],
      ...e[n]
    };
  Bv(t);
}
const JA = /* @__PURE__ */ new Set([
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
function Ti(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || JA.has(e);
}
let py = (e) => !Ti(e);
function QA(e) {
  typeof e == "function" && (py = (t) => t.startsWith("on") ? !Ti(t) : e(t));
}
try {
  QA(require("@emotion/is-prop-valid").default);
} catch {
}
function eD(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || tt(e[o]) || (py(o) || n === !0 && Ti(o) || !t && !Ti(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
const ds = /* @__PURE__ */ Bt({});
function tD(e, t) {
  if (us(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || no(n) ? n : void 0,
      animate: no(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function nD(e) {
  const { initial: t, animate: n } = tD(e, ze(ds));
  return Ee(() => ({ initial: t, animate: n }), [Md(t), Md(n)]);
}
function Md(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const yc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function hy(e, t, n) {
  for (const r in t)
    !tt(t[r]) && !Kv(r, n) && (e[r] = t[r]);
}
function rD({ transformTemplate: e }, t) {
  return Ee(() => {
    const n = yc();
    return gc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function oD(e, t) {
  const n = e.style || {}, r = {};
  return hy(r, n, e), Object.assign(r, rD(e, t)), r;
}
function iD(e, t) {
  const n = {}, r = oD(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const my = () => ({
  ...yc(),
  attrs: {}
});
function sD(e, t, n, r) {
  const o = Ee(() => {
    const i = my();
    return Yv(i, t, qv(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    hy(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
const aD = [
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
function wc(e) {
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
      !!(aD.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function lD(e, t, n, { latestValues: r }, o, i = !1, s) {
  const l = (s ?? wc(e) ? sD : iD)(t, r, o, e), c = eD(t, typeof e == "string", i), d = e !== uf ? { ...c, ...l, ref: n } : {}, { children: u } = t, p = Ee(() => tt(u) ? u.get() : u, [u]);
  return ii(e, {
    ...d,
    children: p
  });
}
function cD({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: uD(n, r, o, e),
    renderState: t()
  };
}
function uD(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const p in i)
    o[p] = ti(i[p]);
  let { initial: s, animate: a } = e;
  const l = us(e), c = Vv(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const u = d ? a : s;
  if (u && typeof u != "boolean" && !cs(u)) {
    const p = Array.isArray(u) ? u : [u];
    for (let h = 0; h < p.length; h++) {
      const v = lc(e, p[h]);
      if (v) {
        const { transitionEnd: g, transition: y, ...w } = v;
        for (const x in w) {
          let b = w[x];
          if (Array.isArray(b)) {
            const S = d ? b.length - 1 : 0;
            b = b[S];
          }
          b !== null && (o[x] = b);
        }
        for (const x in g)
          o[x] = g[x];
      }
    }
  }
  return o;
}
const gy = (e) => (t, n) => {
  const r = ze(ds), o = ze(Kl), i = () => cD(e, t, r, o);
  return n ? i() : aT(i);
}, dD = /* @__PURE__ */ gy({
  scrapeMotionValuesFromProps: vc,
  createRenderState: yc
}), fD = /* @__PURE__ */ gy({
  scrapeMotionValuesFromProps: Zv,
  createRenderState: my
}), pD = Symbol.for("motionComponentSymbol");
function hD(e, t, n) {
  const r = me(n);
  df(() => {
    r.current = n;
  });
  const o = me(null);
  return He((i) => {
    var a;
    i && ((a = e.onMount) == null || a.call(e, i));
    const s = r.current;
    if (typeof s == "function")
      if (i) {
        const l = s(i);
        typeof l == "function" && (o.current = l);
      } else o.current ? (o.current(), o.current = null) : s(i);
    else s && (s.current = i);
    t && (i ? t.mount(i) : t.unmount());
  }, [t]);
}
const vy = Bt({});
function ir(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function mD(e, t, n, r, o, i) {
  var b, S;
  const { visualElement: s } = ze(ds), a = ze(dy), l = ze(Kl), c = ze(uy), d = c.reducedMotion, u = c.skipAnimations, p = me(null), h = me(!1);
  r = r || a.renderer, !p.current && r && (p.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: d,
    skipAnimations: u,
    isSVG: i
  }), h.current && p.current && (p.current.manuallyAnimateOnMount = !0));
  const v = p.current, g = ze(vy);
  v && !v.projection && o && (v.type === "html" || v.type === "svg") && gD(p.current, n, o, g);
  const y = me(!1);
  df(() => {
    v && y.current && v.update(n, l);
  });
  const w = n[Ev], x = me(!!w && typeof window < "u" && !((b = window.MotionHandoffIsComplete) != null && b.call(window, w)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, w)));
  return cT(() => {
    h.current = !0, v && (y.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), x.current && v.animationState && v.animationState.animateChanges());
  }), we(() => {
    v && (!x.current && v.animationState && v.animationState.animateChanges(), x.current && (queueMicrotask(() => {
      var C;
      (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, w);
    }), x.current = !1), v.enteringChildren = void 0);
  }), v;
}
function gD(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutAnchor: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : yy(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && ir(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: d
  });
}
function yy(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : yy(e.parent);
}
function Ws(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
  r && ZA(r);
  const i = n ? n === "svg" : wc(e), s = i ? fD : dD;
  function a(c, d) {
    let u;
    const p = {
      ...ze(uy),
      ...c,
      layoutId: vD(c)
    }, { isStatic: h } = p, v = nD(c), g = s(c, h);
    if (!h && typeof window < "u") {
      yD(p, r);
      const y = wD(p);
      u = y.MeasureLayout, v.visualElement = mD(e, g, p, o, y.ProjectionNode, i);
    }
    return z(ds.Provider, { value: v, children: [u && v.visualElement ? m(u, { visualElement: v.visualElement, ...p }) : null, lD(e, c, hD(g, v.visualElement, d), g, h, t, i)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = fl(a);
  return l[pD] = e, l;
}
function vD({ layoutId: e }) {
  const t = ze(Fg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function yD(e, t) {
  const n = ze(dy).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Pr(!1, r, "lazy-strict-mode") : cn(!1, r, "lazy-strict-mode");
  }
}
function wD(e) {
  const t = fy(), { drag: n, layout: r } = t;
  if (!n && !r)
    return {};
  const o = { ...n, ...r };
  return {
    MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
function bD(e, t) {
  if (typeof Proxy > "u")
    return Ws;
  const n = /* @__PURE__ */ new Map(), r = (i, s) => Ws(i, s, e, t), o = (i, s) => (process.env.NODE_ENV !== "production" && ql(!1, "motion() is deprecated. Use motion.create() instead."), r(i, s));
  return new Proxy(o, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, s) => s === "create" ? r : (n.has(s) || n.set(s, Ws(s, void 0, e, t)), n.get(s))
  });
}
const xD = (e, t) => t.isSVG ?? wc(e) ? new nA(t) : new qM(t, {
  allowProjection: e !== uf
});
class SD extends Fn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = aA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    cs(t) && (this.unmountControls = t.subscribe(this.node));
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
let CD = 0;
class RD extends Fn {
  constructor() {
    super(...arguments), this.id = CD++, this.isExitComplete = !1;
  }
  update() {
    var i;
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: s, custom: a } = this.node.getProps();
        if (typeof s == "string") {
          const l = Un(this.node, s, a);
          if (l) {
            const { transition: c, transitionEnd: d, ...u } = l;
            for (const p in u)
              (i = this.node.getValue(p)) == null || i.jump(u[p]);
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
const ED = {
  animation: {
    Feature: SD
  },
  exit: {
    Feature: RD
  }
};
function Ro(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const PD = (e) => (t) => fc(t) && e(t, Ro(t));
function Gr(e, t, n, r) {
  return ro(e, t, PD(n), r);
}
const wy = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Ad = (e, t) => Math.abs(e - t);
function TD(e, t) {
  const n = Ad(e.x, t.x), r = Ad(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const Dd = /* @__PURE__ */ new Set(["auto", "scroll"]);
class by {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: s = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (h) => {
      this.handleScroll(h.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = $o(this.lastRawMoveEventInfo, this.transformPagePoint));
      const h = Gs(this.lastMoveEventInfo, this.history), v = this.startEvent !== null, g = TD(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!v && !g)
        return;
      const { point: y } = h, { timestamp: w } = et;
      this.history.push({ ...y, timestamp: w });
      const { onStart: x, onMove: b } = this.handlers;
      v || (x && x(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, v) => {
      this.lastMoveEvent = h, this.lastRawMoveEventInfo = v, this.lastMoveEventInfo = $o(v, this.transformPagePoint), Ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, v) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: w } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Gs(h.type === "pointercancel" ? this.lastMoveEventInfo : $o(v, this.transformPagePoint), this.history);
      this.startEvent && g && g(h, x), y && y(h, x);
    }, !fc(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = o || window;
    const l = Ro(t), c = $o(l, this.transformPagePoint), { point: d } = c, { timestamp: u } = et;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: p } = n;
    p && p(t, Gs(c, this.history)), this.removeListeners = xo(Gr(this.contextWindow, "pointermove", this.handlePointerMove), Gr(this.contextWindow, "pointerup", this.handlePointerUp), Gr(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      (Dd.has(r.overflowX) || Dd.has(r.overflowY)) && this.scrollPositions.set(n, {
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
    }, i = { x: o.x - n.x, y: o.y - n.y };
    i.x === 0 && i.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(t, o), Ie.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Mn(this.updatePoint);
  }
}
function $o(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Id(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gs({ point: e }, t) {
  return {
    point: e,
    delta: Id(e, xy(t)),
    offset: Id(e, MD(t)),
    velocity: AD(t, 0.1)
  };
}
function MD(e) {
  return e[0];
}
function xy(e) {
  return e[e.length - 1];
}
function AD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = xy(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ ft(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && o.timestamp - r.timestamp > /* @__PURE__ */ ft(t) * 2 && (r = e[1]);
  const i = /* @__PURE__ */ Rt(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function DD(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Le(n, e, r.max) : Math.min(e, n)), e;
}
function Nd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function ID(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Nd(e.x, n, o),
    y: Nd(e.y, t, r)
  };
}
function kd(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ND(e, t) {
  return {
    x: kd(e.x, t.x),
    y: kd(e.y, t.y)
  };
}
function kD(e, t) {
  let n = 0.5;
  const r = lt(e), o = lt(t);
  return o > r ? n = /* @__PURE__ */ eo(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ eo(e.min, e.max - o, t.min)), Zt(0, 1, n);
}
function _D(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Za = 0.35;
function OD(e = Za) {
  return e === !1 ? e = 0 : e === !0 && (e = Za), {
    x: _d(e, "left", "right"),
    y: _d(e, "top", "bottom")
  };
}
function _d(e, t, n) {
  return {
    min: Od(e, t),
    max: Od(e, n)
  };
}
function Od(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const LD = /* @__PURE__ */ new WeakMap();
class FD {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ke(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const i = (u) => {
      n && this.snapToCursor(Ro(u).point), this.stopAnimation();
    }, s = (u, p) => {
      const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
      if (h && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = mM(h), !this.openDragLock))
        return;
      this.latestPointerEvent = u, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Wt((w) => {
        let x = this.getAxisMotionValue(w).get() || 0;
        if (Xt.test(x)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const S = b.layout.layoutBox[w];
            S && (x = lt(S) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[w] = x;
      }), g && Ie.update(() => g(u, p), !1, !0), Ha(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (u, p) => {
      this.latestPointerEvent = u, this.latestPanInfo = p;
      const { dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: w } = p;
      if (v && this.currentDirection === null) {
        this.currentDirection = $D(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, w), this.updateAxis("y", p.point, w), this.visualElement.render(), y && Ie.update(() => y(u, p), !1, !0);
    }, l = (u, p) => {
      this.latestPointerEvent = u, this.latestPanInfo = p, this.stop(u, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => {
      const { dragSnapToOrigin: u } = this.getProps();
      (u || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new by(t, {
      onSessionStart: i,
      onStart: s,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: r,
      contextWindow: wy(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, o = n || this.latestPanInfo, i = this.isDragging;
    if (this.cancel(), !i || !o || !r)
      return;
    const { velocity: s } = o;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && Ie.postRender(() => a(r, o));
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
    if (!r || !Bo(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = DD(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && ir(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = ID(r.layoutBox, t) : this.constraints = !1, this.elastic = OD(n), o !== this.constraints && !ir(t) && r && this.constraints && !this.hasMutatedConstraints && Wt((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = _D(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ir(t))
      return !1;
    const r = t.current;
    cn(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = WM(r, o.root, this.visualElement.getTransformPagePoint());
    let s = ND(o.layout.layoutBox, i);
    if (n) {
      const a = n(zM(s));
      this.hasMutatedConstraints = !!a, a && (s = Hv(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Wt((d) => {
      if (!Bo(d, n, this.currentDirection))
        return;
      let u = l && l[d] || {};
      (s === !0 || s === d) && (u = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, h = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: p,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...u
      };
      return this.startAxisValueAnimation(d, v);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Ha(this.visualElement, t), r.start(ac(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Wt((t) => this.getAxisMotionValue(t).stop());
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
    Wt((n) => {
      const { drag: r } = this.getProps();
      if (!Bo(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n], l = i.get() || 0;
        i.set(t[n] - Le(s, a, 0.5) + l);
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
    if (!ir(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Wt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = kD({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Wt((s) => {
      if (!Bo(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(Le(l, c, o[s]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    LD.set(this.visualElement, this);
    const t = this.visualElement.current, n = Gr(t, "pointerdown", (c) => {
      const { drag: d, dragListener: u = !0 } = this.getProps(), p = c.target, h = p !== t && xM(p);
      d && u && !h && this.start(c);
    });
    let r;
    const o = () => {
      const { dragConstraints: c } = this.getProps();
      ir(c) && c.current && (this.constraints = this.resolveRefConstraints(), r || (r = VD(t, c.current, () => this.scalePositionWithinConstraints())));
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", o);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Ie.read(o);
    const a = ro(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (Wt((u) => {
        const p = this.getAxisMotionValue(u);
        p && (this.originPoint[u] += c[u].translate, p.set(p.get() + c[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), s(), l && l(), r && r();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Za, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Ld(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function VD(e, t, n) {
  const r = Gu(e, Ld(n)), o = Gu(t, Ld(n));
  return () => {
    r(), o();
  };
}
function Bo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $D(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class BD extends Fn {
  constructor(t) {
    super(t), this.removeGroupControls = Pt, this.removeListeners = Pt, this.controls = new FD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Pt;
  }
  update() {
    const { dragControls: t } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    t !== n && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Us = (e) => (t, n) => {
  e && Ie.update(() => e(t, n), !1, !0);
};
class zD extends Fn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Pt;
  }
  onPointerDown(t) {
    this.session = new by(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Us(t),
      onStart: Us(n),
      onMove: Us(r),
      onEnd: (i, s) => {
        delete this.session, o && Ie.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Gr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Ks = !1;
class HD extends hw {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    i && (n.group && n.group.add(i), r && r.register && o && r.register(i), Ks && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), ni.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, { projection: s } = r;
    return s && (s.isPresent = i, t.layoutDependency !== n && s.setOptions({
      ...s.options,
      layoutDependency: n
    }), Ks = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || Ie.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props, { projection: r } = t;
    r && (r.options.layoutAnchor = n, r.root.didUpdate(), dc.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    Ks = !0, o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Sy(e) {
  const [t, n] = XA(), r = ze(Fg);
  return m(HD, { ...e, layoutGroup: r, switchLayoutGroup: ze(vy), isPresent: t, safeToRemove: n });
}
const jD = {
  pan: {
    Feature: zD
  },
  drag: {
    Feature: BD,
    ProjectionNode: cy,
    MeasureLayout: Sy
  }
};
function Fd(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && Ie.postRender(() => i(t, Ro(t)));
}
class WD extends Fn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = vM(t, (n, r) => (Fd(this.node, r, "Start"), (o) => Fd(this.node, o, "End"))));
  }
  unmount() {
  }
}
class GD extends Fn {
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
    this.unmount = xo(ro(this.node.current, "focus", () => this.onFocus()), ro(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Vd(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && Ie.postRender(() => i(t, Ro(t)));
}
class UD extends Fn {
  mount() {
    const { current: t } = this.node;
    if (!t)
      return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = CM(t, (o, i) => (Vd(this.node, i, "Start"), (s, { success: a }) => Vd(this.node, s, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: (r == null ? void 0 : r.tap) === !1
    });
  }
  unmount() {
  }
}
const Ja = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), KD = (e) => {
  const t = Ja.get(e.target);
  t && t(e);
}, YD = (e) => {
  e.forEach(KD);
};
function XD({ root: e, ...t }) {
  const n = e || document;
  Ys.has(n) || Ys.set(n, {});
  const r = Ys.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(YD, { root: e, ...t })), r[o];
}
function qD(e, t, n) {
  const r = XD(t);
  return Ja.set(e, n), r.observe(e), () => {
    Ja.delete(e), r.unobserve(e);
  };
}
const ZD = {
  some: 0,
  all: 1
};
class JD extends Fn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : ZD[o]
    }, a = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, i && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: p } = this.node.getProps(), h = d ? u : p;
      h && h(c);
    };
    this.stopObserver = qD(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(QD(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function QD({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const eI = {
  inView: {
    Feature: JD
  },
  tap: {
    Feature: UD
  },
  focus: {
    Feature: GD
  },
  hover: {
    Feature: WD
  }
}, tI = {
  layout: {
    ProjectionNode: cy,
    MeasureLayout: Sy
  }
}, nI = {
  ...ED,
  ...eI,
  ...jD,
  ...tI
}, rI = /* @__PURE__ */ bD(nI, xD), Cy = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  pt,
  {
    ref: n,
    className: J(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e
    ),
    ...t
  }
));
Cy.displayName = pt.displayName;
const Ry = ({
  title: e = "Command Palette",
  description: t = "Search for commands",
  commandKey: n,
  children: r,
  ...o
}) => /* @__PURE__ */ m(CP, { ...o, children: /* @__PURE__ */ z(
  wg,
  {
    className: "overflow-hidden p-0 shadow-lg",
    style: { top: "25%", "--tw-translate-y": "0px" },
    hideClose: !0,
    children: [
      /* @__PURE__ */ z(bg, { className: "sr-only", children: [
        /* @__PURE__ */ m(xg, { children: e }),
        /* @__PURE__ */ m(Sg, { children: t })
      ] }),
      /* @__PURE__ */ m(Cy, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }, n)
    ]
  }
) }), bc = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { className: "flex items-center px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ m(
  pt.Input,
  {
    ref: n,
    className: J(
      "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t
  }
) }));
bc.displayName = pt.Input.displayName;
const xc = f.forwardRef(({ className: e, ...t }, n) => {
  const r = f.useRef(null), [o, i] = f.useState(void 0);
  return f.useEffect(() => {
    const s = r.current;
    if (!s) return;
    const a = new ResizeObserver(([l]) => {
      i(l.contentRect.height);
    });
    return a.observe(s), () => a.disconnect();
  }, []), /* @__PURE__ */ m(
    rI.div,
    {
      animate: { height: o },
      transition: { duration: 0.1, ease: "easeInOut" },
      style: { overflow: "hidden" },
      children: /* @__PURE__ */ m("div", { ref: r, children: /* @__PURE__ */ m(
        pt.List,
        {
          ref: n,
          className: J("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
          ...t
        }
      ) })
    }
  );
});
xc.displayName = pt.List.displayName;
const Sc = f.forwardRef((e, t) => /* @__PURE__ */ m(
  pt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Sc.displayName = pt.Empty.displayName;
const Mi = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  pt.Group,
  {
    ref: n,
    className: J(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e
    ),
    ...t
  }
));
Mi.displayName = pt.Group.displayName;
const Ey = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  pt.Separator,
  {
    ref: n,
    className: J("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ey.displayName = pt.Separator.displayName;
const Ai = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  pt.Item,
  {
    ref: n,
    className: J(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Ai.displayName = pt.Item.displayName;
const Py = ({ className: e, ...t }) => /* @__PURE__ */ m(
  "span",
  {
    className: J(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      e
    ),
    ...t
  }
);
Py.displayName = "CommandShortcut";
const Ty = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { "data-slot": "table-container", className: "relative w-full overflow-auto", children: /* @__PURE__ */ m(
  "table",
  {
    ref: n,
    "data-slot": "table",
    className: J("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ty.displayName = "Table";
const My = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("thead", { ref: n, "data-slot": "table-header", className: J("[&_tr]:border-b", e), ...t }));
My.displayName = "TableHeader";
const Ay = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tbody",
  {
    ref: n,
    "data-slot": "table-body",
    className: J("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Ay.displayName = "TableBody";
const oI = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tfoot",
  {
    ref: n,
    "data-slot": "table-footer",
    className: J("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
    ...t
  }
));
oI.displayName = "TableFooter";
const Di = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
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
Di.displayName = "TableRow";
const Dy = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
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
Dy.displayName = "TableHead";
const Cc = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
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
Cc.displayName = "TableCell";
const iI = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "caption",
  {
    ref: n,
    "data-slot": "table-caption",
    className: J("text-muted-foreground mt-4 text-sm", e),
    ...t
  }
));
iI.displayName = "TableCaption";
function sI(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const aI = (e) => {
  switch (e) {
    case "success":
      return uI;
    case "info":
      return fI;
    case "warning":
      return dI;
    case "error":
      return pI;
    default:
      return null;
  }
}, lI = Array(12).fill(0), cI = ({ visible: e, className: t }) => /* @__PURE__ */ V.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ V.createElement("div", {
  className: "sonner-spinner"
}, lI.map((n, r) => /* @__PURE__ */ V.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), uI = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), dI = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), fI = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), pI = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), hI = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ V.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ V.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), mI = () => {
  const [e, t] = V.useState(document.hidden);
  return V.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Qa = 1;
class gI {
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
      const { message: r, ...o } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Qa++, s = this.toasts.find((l) => l.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map((l) => l.id === i ? (this.publish({
        ...l,
        ...t,
        id: i,
        title: r
      }), {
        ...l,
        ...t,
        id: i,
        dismissible: a,
        title: r
      }) : l) : this.addToast({
        title: r,
        ...o,
        dismissible: a,
        id: i
      }), i;
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
      let i = r !== void 0, s;
      const a = o.then(async (c) => {
        if (s = [
          "resolve",
          c
        ], V.isValidElement(c))
          i = !1, this.create({
            id: r,
            type: "default",
            message: c
          });
        else if (yI(c) && !c.ok) {
          i = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, p = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, v = typeof u == "object" && !V.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...v
          });
        } else if (c instanceof Error) {
          i = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, p = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof u == "object" && !V.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...v
          });
        } else if (n.success !== void 0) {
          i = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, p = typeof n.description == "function" ? await n.description(c) : n.description, v = typeof u == "object" && !V.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "success",
            description: p,
            ...v
          });
        }
      }).catch(async (c) => {
        if (s = [
          "reject",
          c
        ], n.error !== void 0) {
          i = !1;
          const d = typeof n.error == "function" ? await n.error(c) : n.error, u = typeof n.description == "function" ? await n.description(c) : n.description, h = typeof d == "object" && !V.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: r,
            type: "error",
            description: u,
            ...h
          });
        }
      }).finally(() => {
        i && (this.dismiss(r), r = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, d) => a.then(() => s[0] === "reject" ? d(s[1]) : c(s[1])).catch(d));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: l
      } : Object.assign(r, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const r = (n == null ? void 0 : n.id) || Qa++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const dt = new gI(), vI = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Qa++;
  return dt.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, yI = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", wI = vI, bI = () => dt.toasts, xI = () => dt.getActiveToasts();
Object.assign(wI, {
  success: dt.success,
  info: dt.info,
  warning: dt.warning,
  error: dt.error,
  custom: dt.custom,
  message: dt.message,
  promise: dt.promise,
  dismiss: dt.dismiss,
  loading: dt.loading
}, {
  getHistory: bI,
  getToasts: xI
});
sI("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function zo(e) {
  return e.label !== void 0;
}
const SI = 3, CI = "24px", RI = "16px", $d = 4e3, EI = 356, PI = 14, TI = 45, MI = 200;
function jt(...e) {
  return e.filter(Boolean).join(" ");
}
function AI(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const DI = (e) => {
  var t, n, r, o, i, s, a, l, c;
  const { invert: d, toast: u, unstyled: p, interacting: h, setHeights: v, visibleToasts: g, heights: y, index: w, toasts: x, expanded: b, removeToast: S, defaultRichColors: C, closeButton: P, style: E, cancelButtonStyle: R, actionButtonStyle: A, className: T = "", descriptionClassName: k = "", duration: W, position: X, gap: Y, expandByDefault: Q, classNames: O, icons: K, closeButtonAriaLabel: B = "Close toast" } = e, [L, N] = V.useState(null), [se, M] = V.useState(null), [F, G] = V.useState(!1), [_, j] = V.useState(!1), [$, H] = V.useState(!1), [U, Z] = V.useState(!1), [oe, ie] = V.useState(!1), [Pe, xe] = V.useState(0), [Qe, ve] = V.useState(0), fe = V.useRef(u.duration || W || $d), ut = V.useRef(null), Ne = V.useRef(null), Fe = w === 0, tn = w + 1 <= g, je = u.type, Mt = u.dismissible !== !1, Vn = u.className || "", kr = u.descriptionClassName || "", dn = V.useMemo(() => y.findIndex((re) => re.toastId === u.id) || 0, [
    y,
    u.id
  ]), At = V.useMemo(() => {
    var re;
    return (re = u.closeButton) != null ? re : P;
  }, [
    u.closeButton,
    P
  ]), Dt = V.useMemo(() => u.duration || W || $d, [
    u.duration,
    W
  ]), It = V.useRef(0), mt = V.useRef(0), gt = V.useRef(0), St = V.useRef(null), [D, I] = X.split("-"), ue = V.useMemo(() => y.reduce((re, Se, be) => be >= dn ? re : re + Se.height, 0), [
    y,
    dn
  ]), ge = mI(), Ae = u.invert || d, We = je === "loading";
  mt.current = V.useMemo(() => dn * Y + ue, [
    dn,
    ue
  ]), V.useEffect(() => {
    fe.current = Dt;
  }, [
    Dt
  ]), V.useEffect(() => {
    G(!0);
  }, []), V.useEffect(() => {
    const re = Ne.current;
    if (re) {
      const Se = re.getBoundingClientRect().height;
      return ve(Se), v((be) => [
        {
          toastId: u.id,
          height: Se,
          position: u.position
        },
        ...be
      ]), () => v((be) => be.filter((Ce) => Ce.toastId !== u.id));
    }
  }, [
    v,
    u.id
  ]), V.useLayoutEffect(() => {
    if (!F) return;
    const re = Ne.current, Se = re.style.height;
    re.style.height = "auto";
    const be = re.getBoundingClientRect().height;
    re.style.height = Se, ve(be), v((Ce) => Ce.find((ke) => ke.toastId === u.id) ? Ce.map((ke) => ke.toastId === u.id ? {
      ...ke,
      height: be
    } : ke) : [
      {
        toastId: u.id,
        height: be,
        position: u.position
      },
      ...Ce
    ]);
  }, [
    F,
    u.title,
    u.description,
    v,
    u.id,
    u.jsx,
    u.action,
    u.cancel
  ]);
  const Te = V.useCallback(() => {
    j(!0), xe(mt.current), v((re) => re.filter((Se) => Se.toastId !== u.id)), setTimeout(() => {
      S(u);
    }, MI);
  }, [
    u,
    S,
    v,
    mt
  ]);
  V.useEffect(() => {
    if (u.promise && je === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let re;
    return b || h || ge ? (() => {
      if (gt.current < It.current) {
        const Ce = (/* @__PURE__ */ new Date()).getTime() - It.current;
        fe.current = fe.current - Ce;
      }
      gt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      fe.current !== 1 / 0 && (It.current = (/* @__PURE__ */ new Date()).getTime(), re = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), Te();
      }, fe.current));
    })(), () => clearTimeout(re);
  }, [
    b,
    h,
    u,
    je,
    ge,
    Te
  ]), V.useEffect(() => {
    u.delete && (Te(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    Te,
    u.delete
  ]);
  function _e() {
    var re;
    if (K != null && K.loading) {
      var Se;
      return /* @__PURE__ */ V.createElement("div", {
        className: jt(O == null ? void 0 : O.loader, u == null || (Se = u.classNames) == null ? void 0 : Se.loader, "sonner-loader"),
        "data-visible": je === "loading"
      }, K.loading);
    }
    return /* @__PURE__ */ V.createElement(cI, {
      className: jt(O == null ? void 0 : O.loader, u == null || (re = u.classNames) == null ? void 0 : re.loader),
      visible: je === "loading"
    });
  }
  const De = u.icon || (K == null ? void 0 : K[je]) || aI(je);
  var ae, Oe;
  return /* @__PURE__ */ V.createElement("li", {
    tabIndex: 0,
    ref: Ne,
    className: jt(T, Vn, O == null ? void 0 : O.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, O == null ? void 0 : O.default, O == null ? void 0 : O[je], u == null || (n = u.classNames) == null ? void 0 : n[je]),
    "data-sonner-toast": "",
    "data-rich-colors": (ae = u.richColors) != null ? ae : C,
    "data-styled": !(u.jsx || u.unstyled || p),
    "data-mounted": F,
    "data-promise": !!u.promise,
    "data-swiped": oe,
    "data-removed": _,
    "data-visible": tn,
    "data-y-position": D,
    "data-x-position": I,
    "data-index": w,
    "data-front": Fe,
    "data-swiping": $,
    "data-dismissible": Mt,
    "data-type": je,
    "data-invert": Ae,
    "data-swipe-out": U,
    "data-swipe-direction": se,
    "data-expanded": !!(b || Q && F),
    "data-testid": u.testId,
    style: {
      "--index": w,
      "--toasts-before": w,
      "--z-index": x.length - w,
      "--offset": `${_ ? Pe : mt.current}px`,
      "--initial-height": Q ? "auto" : `${Qe}px`,
      ...E,
      ...u.style
    },
    onDragEnd: () => {
      H(!1), N(null), St.current = null;
    },
    onPointerDown: (re) => {
      re.button !== 2 && (We || !Mt || (ut.current = /* @__PURE__ */ new Date(), xe(mt.current), re.target.setPointerCapture(re.pointerId), re.target.tagName !== "BUTTON" && (H(!0), St.current = {
        x: re.clientX,
        y: re.clientY
      })));
    },
    onPointerUp: () => {
      var re, Se, be;
      if (U || !Mt) return;
      St.current = null;
      const Ce = Number(((re = Ne.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Me = Number(((Se = Ne.current) == null ? void 0 : Se.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), ke = (/* @__PURE__ */ new Date()).getTime() - ((be = ut.current) == null ? void 0 : be.getTime()), Re = L === "x" ? Ce : Me, vt = Math.abs(Re) / ke;
      if (Math.abs(Re) >= TI || vt > 0.11) {
        xe(mt.current), u.onDismiss == null || u.onDismiss.call(u, u), M(L === "x" ? Ce > 0 ? "right" : "left" : Me > 0 ? "down" : "up"), Te(), Z(!0);
        return;
      } else {
        var $e, Be;
        ($e = Ne.current) == null || $e.style.setProperty("--swipe-amount-x", "0px"), (Be = Ne.current) == null || Be.style.setProperty("--swipe-amount-y", "0px");
      }
      ie(!1), H(!1), N(null);
    },
    onPointerMove: (re) => {
      var Se, be, Ce;
      if (!St.current || !Mt || ((Se = window.getSelection()) == null ? void 0 : Se.toString().length) > 0) return;
      const ke = re.clientY - St.current.y, Re = re.clientX - St.current.x;
      var vt;
      const $e = (vt = e.swipeDirections) != null ? vt : AI(X);
      !L && (Math.abs(Re) > 1 || Math.abs(ke) > 1) && N(Math.abs(Re) > Math.abs(ke) ? "x" : "y");
      let Be = {
        x: 0,
        y: 0
      };
      const fn = (yt) => 1 / (1.5 + Math.abs(yt) / 20);
      if (L === "y") {
        if ($e.includes("top") || $e.includes("bottom"))
          if ($e.includes("top") && ke < 0 || $e.includes("bottom") && ke > 0)
            Be.y = ke;
          else {
            const yt = ke * fn(ke);
            Be.y = Math.abs(yt) < Math.abs(ke) ? yt : ke;
          }
      } else if (L === "x" && ($e.includes("left") || $e.includes("right")))
        if ($e.includes("left") && Re < 0 || $e.includes("right") && Re > 0)
          Be.x = Re;
        else {
          const yt = Re * fn(Re);
          Be.x = Math.abs(yt) < Math.abs(Re) ? yt : Re;
        }
      (Math.abs(Be.x) > 0 || Math.abs(Be.y) > 0) && ie(!0), (be = Ne.current) == null || be.style.setProperty("--swipe-amount-x", `${Be.x}px`), (Ce = Ne.current) == null || Ce.style.setProperty("--swipe-amount-y", `${Be.y}px`);
    }
  }, At && !u.jsx && je !== "loading" ? /* @__PURE__ */ V.createElement("button", {
    "aria-label": B,
    "data-disabled": We,
    "data-close-button": !0,
    onClick: We || !Mt ? () => {
    } : () => {
      Te(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: jt(O == null ? void 0 : O.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (Oe = K == null ? void 0 : K.close) != null ? Oe : hI) : null, (je || u.icon || u.promise) && u.icon !== null && ((K == null ? void 0 : K[je]) !== null || u.icon) ? /* @__PURE__ */ V.createElement("div", {
    "data-icon": "",
    className: jt(O == null ? void 0 : O.icon, u == null || (o = u.classNames) == null ? void 0 : o.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || _e() : null, u.type !== "loading" ? De : null) : null, /* @__PURE__ */ V.createElement("div", {
    "data-content": "",
    className: jt(O == null ? void 0 : O.content, u == null || (i = u.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ V.createElement("div", {
    "data-title": "",
    className: jt(O == null ? void 0 : O.title, u == null || (s = u.classNames) == null ? void 0 : s.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ V.createElement("div", {
    "data-description": "",
    className: jt(k, kr, O == null ? void 0 : O.description, u == null || (a = u.classNames) == null ? void 0 : a.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ V.isValidElement(u.cancel) ? u.cancel : u.cancel && zo(u.cancel) ? /* @__PURE__ */ V.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || R,
    onClick: (re) => {
      zo(u.cancel) && Mt && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, re), Te());
    },
    className: jt(O == null ? void 0 : O.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ V.isValidElement(u.action) ? u.action : u.action && zo(u.action) ? /* @__PURE__ */ V.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || A,
    onClick: (re) => {
      zo(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, re), !re.defaultPrevented && Te());
    },
    className: jt(O == null ? void 0 : O.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function Bd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function II(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const i = o === 1, s = i ? "--mobile-offset" : "--offset", a = i ? RI : CI;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((d) => {
        n[`${s}-${d}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      r[c] === void 0 ? n[`${s}-${c}`] = a : n[`${s}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(a);
  }), n;
}
const NI = /* @__PURE__ */ V.forwardRef(function(t, n) {
  const { id: r, invert: o, position: i = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: l, className: c, offset: d, mobileOffset: u, theme: p = "light", richColors: h, duration: v, style: g, visibleToasts: y = SI, toastOptions: w, dir: x = Bd(), gap: b = PI, icons: S, containerAriaLabel: C = "Notifications" } = t, [P, E] = V.useState([]), R = V.useMemo(() => r ? P.filter((F) => F.toasterId === r) : P.filter((F) => !F.toasterId), [
    P,
    r
  ]), A = V.useMemo(() => Array.from(new Set([
    i
  ].concat(R.filter((F) => F.position).map((F) => F.position)))), [
    R,
    i
  ]), [T, k] = V.useState([]), [W, X] = V.useState(!1), [Y, Q] = V.useState(!1), [O, K] = V.useState(p !== "system" ? p : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = V.useRef(null), L = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = V.useRef(null), se = V.useRef(!1), M = V.useCallback((F) => {
    E((G) => {
      var _;
      return (_ = G.find((j) => j.id === F.id)) != null && _.delete || dt.dismiss(F.id), G.filter(({ id: j }) => j !== F.id);
    });
  }, []);
  return V.useEffect(() => dt.subscribe((F) => {
    if (F.dismiss) {
      requestAnimationFrame(() => {
        E((G) => G.map((_) => _.id === F.id ? {
          ..._,
          delete: !0
        } : _));
      });
      return;
    }
    setTimeout(() => {
      ff.flushSync(() => {
        E((G) => {
          const _ = G.findIndex((j) => j.id === F.id);
          return _ !== -1 ? [
            ...G.slice(0, _),
            {
              ...G[_],
              ...F
            },
            ...G.slice(_ + 1)
          ] : [
            F,
            ...G
          ];
        });
      });
    });
  }), [
    P
  ]), V.useEffect(() => {
    if (p !== "system") {
      K(p);
      return;
    }
    if (p === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? K("dark") : K("light")), typeof window > "u") return;
    const F = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      F.addEventListener("change", ({ matches: G }) => {
        K(G ? "dark" : "light");
      });
    } catch {
      F.addListener(({ matches: _ }) => {
        try {
          K(_ ? "dark" : "light");
        } catch (j) {
          console.error(j);
        }
      });
    }
  }, [
    p
  ]), V.useEffect(() => {
    P.length <= 1 && X(!1);
  }, [
    P
  ]), V.useEffect(() => {
    const F = (G) => {
      var _;
      if (s.every((H) => G[H] || G.code === H)) {
        var $;
        X(!0), ($ = B.current) == null || $.focus();
      }
      G.code === "Escape" && (document.activeElement === B.current || (_ = B.current) != null && _.contains(document.activeElement)) && X(!1);
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [
    s
  ]), V.useEffect(() => {
    if (B.current)
      return () => {
        N.current && (N.current.focus({
          preventScroll: !0
        }), N.current = null, se.current = !1);
      };
  }, [
    B.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ V.createElement("section", {
    ref: n,
    "aria-label": `${C} ${L}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, A.map((F, G) => {
    var _;
    const [j, $] = F.split("-");
    return R.length ? /* @__PURE__ */ V.createElement("ol", {
      key: F,
      dir: x === "auto" ? Bd() : x,
      tabIndex: -1,
      ref: B,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": O,
      "data-y-position": j,
      "data-x-position": $,
      style: {
        "--front-toast-height": `${((_ = T[0]) == null ? void 0 : _.height) || 0}px`,
        "--width": `${EI}px`,
        "--gap": `${b}px`,
        ...g,
        ...II(d, u)
      },
      onBlur: (H) => {
        se.current && !H.currentTarget.contains(H.relatedTarget) && (se.current = !1, N.current && (N.current.focus({
          preventScroll: !0
        }), N.current = null));
      },
      onFocus: (H) => {
        H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || se.current || (se.current = !0, N.current = H.relatedTarget);
      },
      onMouseEnter: () => X(!0),
      onMouseMove: () => X(!0),
      onMouseLeave: () => {
        Y || X(!1);
      },
      onDragEnd: () => X(!1),
      onPointerDown: (H) => {
        H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || Q(!0);
      },
      onPointerUp: () => Q(!1)
    }, R.filter((H) => !H.position && G === 0 || H.position === F).map((H, U) => {
      var Z, oe;
      return /* @__PURE__ */ V.createElement(DI, {
        key: H.id,
        icons: S,
        index: U,
        toast: H,
        defaultRichColors: h,
        duration: (Z = w == null ? void 0 : w.duration) != null ? Z : v,
        className: w == null ? void 0 : w.className,
        descriptionClassName: w == null ? void 0 : w.descriptionClassName,
        invert: o,
        visibleToasts: y,
        closeButton: (oe = w == null ? void 0 : w.closeButton) != null ? oe : l,
        interacting: Y,
        position: F,
        style: w == null ? void 0 : w.style,
        unstyled: w == null ? void 0 : w.unstyled,
        classNames: w == null ? void 0 : w.classNames,
        cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
        actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
        closeButtonAriaLabel: w == null ? void 0 : w.closeButtonAriaLabel,
        removeToast: M,
        toasts: R.filter((ie) => ie.position == H.position),
        heights: T.filter((ie) => ie.position == H.position),
        setHeights: k,
        expandByDefault: a,
        gap: b,
        expanded: W,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), G_ = ({ ...e }) => /* @__PURE__ */ m(
  NI,
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
), Iy = [
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
], kI = new Set(Iy.map((e) => e.hex));
function ri(e, t, n) {
  const r = Math.floor(e / 60) % 6, o = e / 60 - Math.floor(e / 60), i = n * (1 - t), s = n * (1 - o * t), a = n * (1 - (1 - o) * t), l = [
    [n, a, i],
    [s, n, i],
    [i, n, a],
    [i, s, n],
    [a, i, n],
    [n, i, s]
  ], [c, d, u] = l[r];
  return [Math.round(c * 255), Math.round(d * 255), Math.round(u * 255)];
}
function Xs(e, t, n) {
  return "#" + [e, t, n].map((r) => r.toString(16).padStart(2, "0")).join("");
}
function el(e) {
  const t = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e.trim());
  return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null;
}
function zd(e, t, n) {
  const r = e / 255, o = t / 255, i = n / 255, s = Math.max(r, o, i), a = Math.min(r, o, i), l = s - a;
  let c = 0;
  return l !== 0 && (s === r ? c = ((o - i) / l + 6) % 6 : s === o ? c = (i - r) / l + 2 : c = (r - o) / l + 4, c *= 60), [c, s === 0 ? 0 : l / s, s];
}
const Hd = 0.1;
function jd(e) {
  const t = el(e);
  if (!t) return 0;
  const [n, r, o] = t.map((i) => {
    const s = i / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * n + 0.7152 * r + 0.0722 * o;
}
function qs(e, t, n) {
  const r = Xs(...ri(e, t, n));
  if (jd(r) >= Hd) return { hex: r, adjusted: !1 };
  let o = n, i = 1;
  for (let s = 0; s < 20; s++) {
    const a = (o + i) / 2;
    jd(Xs(...ri(e, t, a))) >= Hd ? i = a : o = a;
  }
  return { hex: Xs(...ri(e, t, i)), adjusted: !0 };
}
function _I({
  hue: e,
  sat: t,
  val: n,
  onChange: r
}) {
  const o = me(null), i = me(!1), s = He(() => {
    const l = o.current;
    if (!l) return;
    const c = l.getContext("2d"), d = l.width, u = l.height, [p, h, v] = ri(e, 1, 1), g = c.createLinearGradient(0, 0, d, 0);
    g.addColorStop(0, "#fff"), g.addColorStop(1, `rgb(${p},${h},${v})`), c.fillStyle = g, c.fillRect(0, 0, d, u);
    const y = c.createLinearGradient(0, 0, 0, u);
    y.addColorStop(0, "rgba(0,0,0,0)"), y.addColorStop(1, "rgba(0,0,0,1)"), c.fillStyle = y, c.fillRect(0, 0, d, u);
  }, [e]);
  we(() => {
    s();
  }, [s]);
  const a = He((l) => {
    const c = o.current;
    if (!c) return;
    const d = c.getBoundingClientRect(), u = Math.max(0, Math.min(1, (l.clientX - d.left) / d.width)), p = Math.max(0, Math.min(1, (l.clientY - d.top) / d.height));
    r(u, 1 - p);
  }, [r]);
  return we(() => {
    const l = (d) => {
      i.current && a(d);
    }, c = () => {
      i.current = !1;
    };
    return document.addEventListener("mousemove", l), document.addEventListener("mouseup", c), () => {
      document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", c);
    };
  }, [a]), /* @__PURE__ */ z("div", { className: "relative flex-1 min-w-0", style: { height: 160 }, children: [
    /* @__PURE__ */ m(
      "canvas",
      {
        ref: o,
        width: 400,
        height: 160,
        className: "w-full h-full rounded cursor-crosshair",
        onMouseDown: (l) => {
          i.current = !0, a(l);
        }
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: "absolute w-4 h-4 rounded-full border-2 border-white shadow pointer-events-none -translate-x-1/2 -translate-y-1/2",
        style: { left: `${t * 100}%`, top: `${(1 - n) * 100}%` }
      }
    )
  ] });
}
function OI({ hue: e, onChange: t }) {
  const n = me(null), r = me(!1), o = He((i) => {
    const s = n.current;
    if (!s) return;
    const a = s.getBoundingClientRect(), l = Math.max(0, Math.min(1, (i.clientY - a.top) / a.height));
    t(l * 360);
  }, [t]);
  return we(() => {
    const i = (a) => {
      r.current && o(a);
    }, s = () => {
      r.current = !1;
    };
    return document.addEventListener("mousemove", i), document.addEventListener("mouseup", s), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", s);
    };
  }, [o]), /* @__PURE__ */ m(
    "div",
    {
      ref: n,
      className: "relative w-4 rounded cursor-pointer flex-shrink-0",
      style: {
        height: 160,
        background: "linear-gradient(to bottom, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
      },
      onMouseDown: (i) => {
        r.current = !0, o(i);
      },
      children: /* @__PURE__ */ m(
        "div",
        {
          className: "absolute left-1/2 w-5 h-3 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-white shadow pointer-events-none",
          style: { top: `${e / 360 * 100}%` }
        }
      )
    }
  );
}
function U_({ value: e, onChange: t }) {
  const [n, r] = Xe(!1), [o, i] = Xe("swatches"), [s, a] = Xe(0), [l, c] = Xe(1), [d, u] = Xe(1), p = me(null);
  we(() => {
    if (!n) return;
    i(kI.has(e) ? "swatches" : "gradient");
    const b = el(e);
    if (b) {
      const [S, C, P] = zd(...b);
      a(S), c(C), u(P);
    }
  }, [n]);
  const { hex: h, adjusted: v } = qs(s, l, d);
  we(() => {
    if (!n) return;
    const b = (S) => {
      p.current && !p.current.contains(S.target) && r(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [n]);
  function g(b, S) {
    c(b), u(S), t(qs(s, b, S).hex);
  }
  function y(b) {
    a(b), t(qs(b, l, d).hex);
  }
  function w(b) {
    t(b);
    const S = el(b);
    if (S) {
      const [C, P, E] = zd(...S);
      a(C), c(P), u(E);
    }
    r(!1);
  }
  const x = o === "gradient";
  return /* @__PURE__ */ m(yr, { children: /* @__PURE__ */ z("div", { className: "relative inline-block", ref: p, children: [
    /* @__PURE__ */ z(xn, { children: [
      /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          className: "w-6 h-6 rounded-full border-2 border-white shadow ring-1 ring-black/10 focus:outline-none",
          style: { background: e },
          onClick: () => r((b) => !b)
        }
      ) }),
      /* @__PURE__ */ m(Cn, { children: e.toUpperCase() })
    ] }),
    n && /* @__PURE__ */ z("div", { className: "absolute z-50 mt-2 rounded-xl border border-border bg-popover shadow-lg p-2", children: [
      /* @__PURE__ */ z("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ z("div", { className: "relative", children: [
          /* @__PURE__ */ z("div", { className: `flex items-center gap-1 transition-opacity duration-150 ${x ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: [
            Iy.map(({ hex: b, name: S }) => /* @__PURE__ */ z(xn, { children: [
              /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m(
                "button",
                {
                  type: "button",
                  className: "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border-2 hover:scale-110 transition-transform focus:outline-none",
                  style: {
                    background: b,
                    borderColor: b === e ? "white" : "transparent",
                    boxShadow: b === e ? `0 0 0 2px ${b}` : void 0
                  },
                  onClick: () => w(b),
                  children: b === e && /* @__PURE__ */ m(pi, { className: "w-3.5 h-3.5 text-white drop-shadow", strokeWidth: 3 })
                }
              ) }),
              /* @__PURE__ */ m(Cn, { children: S })
            ] }, b)),
            /* @__PURE__ */ m("div", { className: "w-px h-6 bg-border mx-0.5 flex-shrink-0" })
          ] }),
          /* @__PURE__ */ z("div", { className: `absolute inset-0 flex items-center gap-2 transition-opacity duration-150 ${x ? "opacity-100" : "opacity-0 pointer-events-none"}`, children: [
            /* @__PURE__ */ m(
              "button",
              {
                type: "button",
                className: "w-7 h-7 rounded-full flex-shrink-0 border-2 border-white flex items-center justify-center hover:scale-110 transition-transform focus:outline-none",
                style: { background: h, boxShadow: `0 0 0 2px ${h}` },
                onClick: () => r(!1),
                children: /* @__PURE__ */ m(pi, { className: "w-3.5 h-3.5 text-white drop-shadow", strokeWidth: 3 })
              }
            ),
            /* @__PURE__ */ m("span", { className: "text-xs text-muted-foreground font-mono select-none", children: "HEX" }),
            /* @__PURE__ */ m("span", { className: "text-xs font-mono text-foreground", children: h.toUpperCase() }),
            v && /* @__PURE__ */ m("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "Contrast has been adjusted" })
          ] })
        ] }),
        /* @__PURE__ */ z(xn, { children: [
          /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: () => i((b) => b === "gradient" ? "swatches" : "gradient"),
              className: `w-7 h-7 rounded-full flex-shrink-0 border-2 transition-transform hover:scale-110 focus:outline-none border-white ${x ? "ring-2 ring-indigo-500" : ""}`,
              style: {
                background: "conic-gradient(from 0deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)"
              }
            }
          ) }),
          /* @__PURE__ */ m(Cn, { children: "Custom color" })
        ] })
      ] }),
      /* @__PURE__ */ m(
        "div",
        {
          className: "grid",
          style: {
            gridTemplateRows: x ? "1fr" : "0fr",
            transition: "grid-template-rows 200ms ease"
          },
          children: /* @__PURE__ */ m("div", { className: "overflow-hidden min-h-0", children: /* @__PURE__ */ z("div", { className: "flex gap-1 pt-2", children: [
            /* @__PURE__ */ m(_I, { hue: s, sat: l, val: d, onChange: g }),
            /* @__PURE__ */ m("div", { className: "w-7 flex justify-center flex-shrink-0", children: /* @__PURE__ */ m(OI, { hue: s, onChange: y }) })
          ] }) })
        }
      )
    ] })
  ] }) });
}
function LI() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ee(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const fs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Dr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Rc(e) {
  return "nodeType" in e;
}
function ht(e) {
  var t, n;
  return e ? Dr(e) ? e : Rc(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ec(e) {
  const {
    Document: t
  } = ht(e);
  return e instanceof t;
}
function Eo(e) {
  return Dr(e) ? !1 : e instanceof ht(e).HTMLElement;
}
function Ny(e) {
  return e instanceof ht(e).SVGElement;
}
function Ir(e) {
  return e ? Dr(e) ? e.document : Rc(e) ? Ec(e) ? e : Eo(e) || Ny(e) ? e.ownerDocument : document : document : document;
}
const Jt = fs ? dl : we;
function Pc(e) {
  const t = me(e);
  return Jt(() => {
    t.current = e;
  }), He(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function FI() {
  const e = me(null), t = He((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = He(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function oo(e, t) {
  t === void 0 && (t = [e]);
  const n = me(e);
  return Jt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Po(e, t) {
  const n = me();
  return Ee(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Ii(e) {
  const t = Pc(e), n = me(null), r = He(
    (o) => {
      o !== n.current && (t == null || t(o, n.current)), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function tl(e) {
  const t = me();
  return we(() => {
    t.current = e;
  }, [e]), t.current;
}
let Zs = {};
function To(e, t) {
  return Ee(() => {
    if (t)
      return t;
    const n = Zs[e] == null ? 0 : Zs[e] + 1;
    return Zs[e] = n, e + "-" + n;
  }, [e, t]);
}
function ky(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((i, s) => {
      const a = Object.entries(s);
      for (const [l, c] of a) {
        const d = i[l];
        d != null && (i[l] = d + e * c);
      }
      return i;
    }, {
      ...t
    });
  };
}
const fr = /* @__PURE__ */ ky(1), io = /* @__PURE__ */ ky(-1);
function VI(e) {
  return "clientX" in e && "clientY" in e;
}
function Tc(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = ht(e.target);
  return t && e instanceof t;
}
function $I(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = ht(e.target);
  return t && e instanceof t;
}
function nl(e) {
  if ($I(e)) {
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
  return VI(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const so = /* @__PURE__ */ Object.freeze({
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
        return [so.Translate.toString(e), so.Scale.toString(e)].join(" ");
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
}), Wd = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function BI(e) {
  return e.matches(Wd) ? e : e.querySelector(Wd);
}
const zI = {
  display: "none"
};
function HI(e) {
  let {
    id: t,
    value: n
  } = e;
  return V.createElement("div", {
    id: t,
    style: zI
  }, n);
}
function jI(e) {
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
  return V.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function WI() {
  const [e, t] = Xe("");
  return {
    announce: He((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const _y = /* @__PURE__ */ Bt(null);
function GI(e) {
  const t = ze(_y);
  we(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function UI() {
  const [e] = Xe(() => /* @__PURE__ */ new Set()), t = He((r) => (e.add(r), () => e.delete(r)), [e]);
  return [He((r) => {
    let {
      type: o,
      event: i
    } = r;
    e.forEach((s) => {
      var a;
      return (a = s[o]) == null ? void 0 : a.call(s, i);
    });
  }, [e]), t];
}
const KI = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, YI = {
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
function XI(e) {
  let {
    announcements: t = YI,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = KI
  } = e;
  const {
    announce: i,
    announcement: s
  } = WI(), a = To("DndLiveRegion"), [l, c] = Xe(!1);
  if (we(() => {
    c(!0);
  }, []), GI(Ee(() => ({
    onDragStart(u) {
      let {
        active: p
      } = u;
      i(t.onDragStart({
        active: p
      }));
    },
    onDragMove(u) {
      let {
        active: p,
        over: h
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: p,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: p,
        over: h
      } = u;
      i(t.onDragOver({
        active: p,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: p,
        over: h
      } = u;
      i(t.onDragEnd({
        active: p,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: p,
        over: h
      } = u;
      i(t.onDragCancel({
        active: p,
        over: h
      }));
    }
  }), [i, t])), !l)
    return null;
  const d = V.createElement(V.Fragment, null, V.createElement(HI, {
    id: r,
    value: o.draggable
  }), V.createElement(jI, {
    id: a,
    announcement: s
  }));
  return n ? ca(d, n) : d;
}
var Ye;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ye || (Ye = {}));
function Ni() {
}
function Gd(e, t) {
  return Ee(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function qI() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ee(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const $t = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Oy(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ly(e, t) {
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
function ZI(e, t) {
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
function Ud(e) {
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
function Fy(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function Kd(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const JI = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Kd(t, t.left, t.top), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, l = n.get(a);
    if (l) {
      const c = Oy(Kd(l), o);
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: c
        }
      });
    }
  }
  return i.sort(Ly);
}, QI = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Ud(t), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, l = n.get(a);
    if (l) {
      const c = Ud(l), d = o.reduce((p, h, v) => p + Oy(c[v], h), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return i.sort(Ly);
};
function eN(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const l = t.width * t.height, c = e.width * e.height, d = s * a, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const tN = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const i of r) {
    const {
      id: s
    } = i, a = n.get(s);
    if (a) {
      const l = eN(a, t);
      l > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return o.sort(ZI);
};
function nN(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Vy(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : $t;
}
function rN(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return o.reduce((s, a) => ({
      ...s,
      top: s.top + e * a.y,
      bottom: s.bottom + e * a.y,
      left: s.left + e * a.x,
      right: s.right + e * a.x
    }), {
      ...n
    });
  };
}
const oN = /* @__PURE__ */ rN(1);
function iN(e) {
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
function sN(e, t, n) {
  const r = iN(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: s,
    y: a
  } = r, l = e.left - s - (1 - o) * parseFloat(n), c = e.top - a - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = o ? e.width / o : e.width, u = i ? e.height / i : e.height;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l
  };
}
const aN = {
  ignoreTransform: !1
};
function Nr(e, t) {
  t === void 0 && (t = aN);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = ht(e).getComputedStyle(e);
    c && (n = sN(n, c, d));
  }
  const {
    top: r,
    left: o,
    width: i,
    height: s,
    bottom: a,
    right: l
  } = n;
  return {
    top: r,
    left: o,
    width: i,
    height: s,
    bottom: a,
    right: l
  };
}
function Yd(e) {
  return Nr(e, {
    ignoreTransform: !0
  });
}
function lN(e) {
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
function cN(e, t) {
  return t === void 0 && (t = ht(e).getComputedStyle(e)), t.position === "fixed";
}
function uN(e, t) {
  t === void 0 && (t = ht(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function ps(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Ec(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Eo(o) || Ny(o) || n.includes(o))
      return n;
    const i = ht(e).getComputedStyle(o);
    return o !== e && uN(o, i) && n.push(o), cN(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function $y(e) {
  const [t] = ps(e, 1);
  return t ?? null;
}
function Js(e) {
  return !fs || !e ? null : Dr(e) ? e : Rc(e) ? Ec(e) || e === Ir(e).scrollingElement ? window : Eo(e) ? e : null : null;
}
function By(e) {
  return Dr(e) ? e.scrollX : e.scrollLeft;
}
function zy(e) {
  return Dr(e) ? e.scrollY : e.scrollTop;
}
function rl(e) {
  return {
    x: By(e),
    y: zy(e)
  };
}
var Ze;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ze || (Ze = {}));
function Hy(e) {
  return !fs || !e ? !1 : e === document.scrollingElement;
}
function jy(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Hy(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, s = e.scrollTop >= r.y, a = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: s,
    isRight: a,
    maxScroll: r,
    minScroll: t
  };
}
const dN = {
  x: 0.2,
  y: 0.2
};
function fN(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = dN);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: p
  } = jy(e), h = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && i <= t.top + g.height ? (h.y = Ze.Backward, v.y = r * Math.abs((t.top + g.height - i) / g.height)) : !d && l >= t.bottom - g.height && (h.y = Ze.Forward, v.y = r * Math.abs((t.bottom - g.height - l) / g.height)), !p && a >= t.right - g.width ? (h.x = Ze.Forward, v.x = r * Math.abs((t.right - g.width - a) / g.width)) : !u && s <= t.left + g.width && (h.x = Ze.Backward, v.x = r * Math.abs((t.left + g.width - s) / g.width)), {
    direction: h,
    speed: v
  };
}
function pN(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: s
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: s,
      width: i,
      height: s
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
function Wy(e) {
  return e.reduce((t, n) => fr(t, rl(n)), $t);
}
function hN(e) {
  return e.reduce((t, n) => t + By(n), 0);
}
function mN(e) {
  return e.reduce((t, n) => t + zy(n), 0);
}
function gN(e, t) {
  if (t === void 0 && (t = Nr), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  $y(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const vN = [["x", ["left", "right"], hN], ["y", ["top", "bottom"], mN]];
class Mc {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = ps(n), o = Wy(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of vN)
      for (const l of s)
        Object.defineProperty(this, l, {
          get: () => {
            const c = a(r), d = o[i] - c;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Ur {
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
function yN(e) {
  const {
    EventTarget: t
  } = ht(e);
  return e instanceof t ? e : Ir(e);
}
function Qs(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ct;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ct || (Ct = {}));
function Xd(e) {
  e.preventDefault();
}
function wN(e) {
  e.stopPropagation();
}
var ye;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ye || (ye = {}));
const Gy = {
  start: [ye.Space, ye.Enter],
  cancel: [ye.Esc],
  end: [ye.Space, ye.Enter, ye.Tab]
}, bN = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ye.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ye.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ye.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ye.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Ac {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Ur(Ir(n)), this.windowListeners = new Ur(ht(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ct.Resize, this.handleCancel), this.windowListeners.add(Ct.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ct.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && gN(r), n($t);
  }
  handleKeyDown(t) {
    if (Tc(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = Gy,
        coordinateGetter: s = bN,
        scrollBehavior: a = "smooth"
      } = o, {
        code: l
      } = t;
      if (i.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, d = c ? {
        x: c.left,
        y: c.top
      } : $t;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = s(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const p = io(u, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: v
        } = r.current;
        for (const g of v) {
          const y = t.code, {
            isTop: w,
            isRight: x,
            isLeft: b,
            isBottom: S,
            maxScroll: C,
            minScroll: P
          } = jy(g), E = pN(g), R = {
            x: Math.min(y === ye.Right ? E.right - E.width / 2 : E.right, Math.max(y === ye.Right ? E.left : E.left + E.width / 2, u.x)),
            y: Math.min(y === ye.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(y === ye.Down ? E.top : E.top + E.height / 2, u.y))
          }, A = y === ye.Right && !x || y === ye.Left && !b, T = y === ye.Down && !S || y === ye.Up && !w;
          if (A && R.x !== u.x) {
            const k = g.scrollLeft + p.x, W = y === ye.Right && k <= C.x || y === ye.Left && k >= P.x;
            if (W && !p.y) {
              g.scrollTo({
                left: k,
                behavior: a
              });
              return;
            }
            W ? h.x = g.scrollLeft - k : h.x = y === ye.Right ? g.scrollLeft - C.x : g.scrollLeft - P.x, h.x && g.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (T && R.y !== u.y) {
            const k = g.scrollTop + p.y, W = y === ye.Down && k <= C.y || y === ye.Up && k >= P.y;
            if (W && !p.x) {
              g.scrollTo({
                top: k,
                behavior: a
              });
              return;
            }
            W ? h.y = g.scrollTop - k : h.y = y === ye.Down ? g.scrollTop - C.y : g.scrollTop - P.y, h.y && g.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, fr(io(u, this.referenceCoordinates), h));
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
Ac.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Gy,
      onActivation: o
    } = t, {
      active: i
    } = n;
    const {
      code: s
    } = e.nativeEvent;
    if (r.start.includes(s)) {
      const a = i.activatorNode.current;
      return a && e.target !== a ? !1 : (e.preventDefault(), o == null || o({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function qd(e) {
  return !!(e && "distance" in e);
}
function Zd(e) {
  return !!(e && "delay" in e);
}
class Dc {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = yN(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = Ir(s), this.documentListeners = new Ur(this.document), this.listeners = new Ur(r), this.windowListeners = new Ur(ht(s)), this.initialCoordinates = (o = nl(i)) != null ? o : $t, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ct.Resize, this.handleCancel), this.windowListeners.add(Ct.DragStart, Xd), this.windowListeners.add(Ct.VisibilityChange, this.handleCancel), this.windowListeners.add(Ct.ContextMenu, Xd), this.documentListeners.add(Ct.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Zd(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (qd(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ct.Click, wN, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ct.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: s,
      options: {
        activationConstraint: a
      }
    } = i;
    if (!o)
      return;
    const l = (n = nl(t)) != null ? n : $t, c = io(o, l);
    if (!r && a) {
      if (qd(a)) {
        if (a.tolerance != null && Qs(c, a.tolerance))
          return this.handleCancel();
        if (Qs(c, a.distance))
          return this.handleStart();
      }
      if (Zd(a) && Qs(c, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, c);
      return;
    }
    t.cancelable && t.preventDefault(), s(l);
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
    t.code === ye.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const xN = {
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
class Ic extends Dc {
  constructor(t) {
    const {
      event: n
    } = t, r = Ir(n.target);
    super(t, xN, r);
  }
}
Ic.activators = [{
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
const SN = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ol;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ol || (ol = {}));
class CN extends Dc {
  constructor(t) {
    super(t, SN, Ir(t.event.target));
  }
}
CN.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === ol.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const ea = {
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
class RN extends Dc {
  constructor(t) {
    super(t, ea);
  }
  static setup() {
    return window.addEventListener(ea.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(ea.move.name, t);
    };
    function t() {
    }
  }
}
RN.activators = [{
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
var Kr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Kr || (Kr = {}));
var ki;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(ki || (ki = {}));
function EN(e) {
  let {
    acceleration: t,
    activator: n = Kr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = ki.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: p
  } = e;
  const h = TN({
    delta: u,
    disabled: !i
  }), [v, g] = FI(), y = me({
    x: 0,
    y: 0
  }), w = me({
    x: 0,
    y: 0
  }), x = Ee(() => {
    switch (n) {
      case Kr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Kr.DraggableRect:
        return o;
    }
  }, [n, o, l]), b = me(null), S = He(() => {
    const P = b.current;
    if (!P)
      return;
    const E = y.current.x * w.current.x, R = y.current.y * w.current.y;
    P.scrollBy(E, R);
  }, []), C = Ee(() => a === ki.TreeOrder ? [...c].reverse() : c, [a, c]);
  we(
    () => {
      if (!i || !c.length || !x) {
        g();
        return;
      }
      for (const P of C) {
        if ((r == null ? void 0 : r(P)) === !1)
          continue;
        const E = c.indexOf(P), R = d[E];
        if (!R)
          continue;
        const {
          direction: A,
          speed: T
        } = fN(P, R, x, t, p);
        for (const k of ["x", "y"])
          h[k][A[k]] || (T[k] = 0, A[k] = 0);
        if (T.x > 0 || T.y > 0) {
          g(), b.current = P, v(S, s), y.current = T, w.current = A;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      g,
      i,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      v,
      c,
      C,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p)
    ]
  );
}
const PN = {
  x: {
    [Ze.Backward]: !1,
    [Ze.Forward]: !1
  },
  y: {
    [Ze.Backward]: !1,
    [Ze.Forward]: !1
  }
};
function TN(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = tl(t);
  return Po((o) => {
    if (n || !r || !o)
      return PN;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ze.Backward]: o.x[Ze.Backward] || i.x === -1,
        [Ze.Forward]: o.x[Ze.Forward] || i.x === 1
      },
      y: {
        [Ze.Backward]: o.y[Ze.Backward] || i.y === -1,
        [Ze.Forward]: o.y[Ze.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function MN(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Po((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function AN(e, t) {
  return Ee(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, i = o.activators.map((s) => ({
      eventName: s.eventName,
      handler: t(s.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var ao;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(ao || (ao = {}));
var il;
(function(e) {
  e.Optimized = "optimized";
})(il || (il = {}));
const Jd = /* @__PURE__ */ new Map();
function DN(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = Xe(null), {
    frequency: a,
    measure: l,
    strategy: c
  } = o, d = me(e), u = y(), p = oo(u), h = He(function(w) {
    w === void 0 && (w = []), !p.current && s((x) => x === null ? w : x.concat(w.filter((b) => !x.includes(b))));
  }, [p]), v = me(null), g = Po((w) => {
    if (u && !n)
      return Jd;
    if (!w || w === Jd || d.current !== e || i != null) {
      const x = /* @__PURE__ */ new Map();
      for (let b of e) {
        if (!b)
          continue;
        if (i && i.length > 0 && !i.includes(b.id) && b.rect.current) {
          x.set(b.id, b.rect.current);
          continue;
        }
        const S = b.node.current, C = S ? new Mc(l(S), S) : null;
        b.rect.current = C, C && x.set(b.id, C);
      }
      return x;
    }
    return w;
  }, [e, i, n, u, l]);
  return we(() => {
    d.current = e;
  }, [e]), we(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), we(
    () => {
      i && i.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), we(
    () => {
      u || typeof a != "number" || v.current !== null || (v.current = setTimeout(() => {
        h(), v.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, h, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function y() {
    switch (c) {
      case ao.Always:
        return !1;
      case ao.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Uy(e, t) {
  return Po((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function IN(e, t) {
  return Uy(e, t);
}
function NN(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Pc(t), o = Ee(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return we(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function hs(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Pc(t), o = Ee(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return we(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function kN(e) {
  return new Mc(Nr(e), e);
}
function Qd(e, t, n) {
  t === void 0 && (t = kN);
  const [r, o] = Xe(null);
  function i() {
    o((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = l ?? n) != null ? c : null;
      }
      const d = t(e);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const s = NN({
    callback(l) {
      if (e)
        for (const c of l) {
          const {
            type: d,
            target: u
          } = c;
          if (d === "childList" && u instanceof HTMLElement && u.contains(e)) {
            i();
            break;
          }
        }
    }
  }), a = hs({
    callback: i
  });
  return Jt(() => {
    i(), e ? (a == null || a.observe(e), s == null || s.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a == null || a.disconnect(), s == null || s.disconnect());
  }, [e]), r;
}
function _N(e) {
  const t = Uy(e);
  return Vy(e, t);
}
const ef = [];
function ON(e) {
  const t = me(e), n = Po((r) => e ? r && r !== ef && e && t.current && e.parentNode === t.current.parentNode ? r : ps(e) : ef, [e]);
  return we(() => {
    t.current = e;
  }, [e]), n;
}
function LN(e) {
  const [t, n] = Xe(null), r = me(e), o = He((i) => {
    const s = Js(i.target);
    s && n((a) => a ? (a.set(s, rl(s)), new Map(a)) : null);
  }, []);
  return we(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((l) => {
        const c = Js(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, rl(c)]) : null;
      }).filter((l) => l != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      s(e), s(i);
    };
    function s(a) {
      a.forEach((l) => {
        const c = Js(l);
        c == null || c.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), Ee(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => fr(i, s), $t) : Wy(e) : $t, [e, t]);
}
function tf(e, t) {
  t === void 0 && (t = []);
  const n = me(null);
  return we(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), we(() => {
    const r = e !== $t;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? io(e, n.current) : $t;
}
function FN(e) {
  we(
    () => {
      if (!fs)
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
function VN(e, t) {
  return Ee(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: i
    } = r;
    return n[o] = (s) => {
      i(s, t);
    }, n;
  }, {}), [e, t]);
}
function Ky(e) {
  return Ee(() => e ? lN(e) : null, [e]);
}
const nf = [];
function $N(e, t) {
  t === void 0 && (t = Nr);
  const [n] = e, r = Ky(n ? ht(n) : null), [o, i] = Xe(nf);
  function s() {
    i(() => e.length ? e.map((l) => Hy(l) ? r : new Mc(t(l), l)) : nf);
  }
  const a = hs({
    callback: s
  });
  return Jt(() => {
    a == null || a.disconnect(), s(), e.forEach((l) => a == null ? void 0 : a.observe(l));
  }, [e]), o;
}
function BN(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Eo(t) ? t : e;
}
function zN(e) {
  let {
    measure: t
  } = e;
  const [n, r] = Xe(null), o = He((c) => {
    for (const {
      target: d
    } of c)
      if (Eo(d)) {
        r((u) => {
          const p = t(d);
          return u ? {
            ...u,
            width: p.width,
            height: p.height
          } : p;
        });
        break;
      }
  }, [t]), i = hs({
    callback: o
  }), s = He((c) => {
    const d = BN(c);
    i == null || i.disconnect(), d && (i == null || i.observe(d)), r(d ? t(d) : null);
  }, [t, i]), [a, l] = Ii(s);
  return Ee(() => ({
    nodeRef: a,
    rect: n,
    setRef: l
  }), [n, a, l]);
}
const HN = [{
  sensor: Ic,
  options: {}
}, {
  sensor: Ac,
  options: {}
}], jN = {
  current: {}
}, oi = {
  draggable: {
    measure: Yd
  },
  droppable: {
    measure: Yd,
    strategy: ao.WhileDragging,
    frequency: il.Optimized
  },
  dragOverlay: {
    measure: Nr
  }
};
class Yr extends Map {
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
const WN = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Yr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Ni
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: oi,
  measureDroppableContainers: Ni,
  windowRect: null,
  measuringScheduled: !1
}, GN = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Ni,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Ni
}, ms = /* @__PURE__ */ Bt(GN), Yy = /* @__PURE__ */ Bt(WN);
function UN() {
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
      containers: new Yr()
    }
  };
}
function KN(e, t) {
  switch (t.type) {
    case Ye.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ye.DragMove:
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
    case Ye.DragEnd:
    case Ye.DragCancel:
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
    case Ye.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new Yr(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Ye.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new Yr(e.droppable.containers);
      return s.set(n, {
        ...i,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case Ye.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Yr(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function YN(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = ze(ms), i = tl(r), s = tl(n == null ? void 0 : n.id);
  return we(() => {
    if (!t && !r && i && s != null) {
      if (!Tc(i) || document.activeElement === i.target)
        return;
      const a = o.get(s);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: c
      } = a;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, c.current]) {
          if (!d)
            continue;
          const u = BI(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function XN(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function qN(e) {
  return Ee(
    () => ({
      draggable: {
        ...oi.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...oi.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...oi.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function ZN(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const i = me(!1), {
    x: s,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  Jt(() => {
    if (!s && !a || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = n(c), u = Vy(d, r);
    if (s || (u.x = 0), a || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const p = $y(c);
      p && p.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, s, a, r, n]);
}
const Xy = /* @__PURE__ */ Bt({
  ...$t,
  scaleX: 1,
  scaleY: 1
});
var yn;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(yn || (yn = {}));
const JN = /* @__PURE__ */ mw(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: l = !0,
    children: c,
    sensors: d = HN,
    collisionDetection: u = tN,
    measuring: p,
    modifiers: h,
    ...v
  } = t;
  const g = gw(KN, void 0, UN), [y, w] = g, [x, b] = UI(), [S, C] = Xe(yn.Uninitialized), P = S === yn.Initialized, {
    draggable: {
      active: E,
      nodes: R,
      translate: A
    },
    droppable: {
      containers: T
    }
  } = y, k = E != null ? R.get(E) : null, W = me({
    initial: null,
    translated: null
  }), X = Ee(() => {
    var ae;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (ae = k == null ? void 0 : k.data) != null ? ae : jN,
      rect: W
    } : null;
  }, [E, k]), Y = me(null), [Q, O] = Xe(null), [K, B] = Xe(null), L = oo(v, Object.values(v)), N = To("DndDescribedBy", s), se = Ee(() => T.getEnabled(), [T]), M = qN(p), {
    droppableRects: F,
    measureDroppableContainers: G,
    measuringScheduled: _
  } = DN(se, {
    dragging: P,
    dependencies: [A.x, A.y],
    config: M.droppable
  }), j = MN(R, E), $ = Ee(() => K ? nl(K) : null, [K]), H = De(), U = IN(j, M.draggable.measure);
  ZN({
    activeNode: E != null ? R.get(E) : null,
    config: H.layoutShiftCompensation,
    initialRect: U,
    measure: M.draggable.measure
  });
  const Z = Qd(j, M.draggable.measure, U), oe = Qd(j ? j.parentElement : null), ie = me({
    activatorEvent: null,
    active: null,
    activeNode: j,
    collisionRect: null,
    collisions: null,
    droppableRects: F,
    draggableNodes: R,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Pe = T.getNodeFor((n = ie.current.over) == null ? void 0 : n.id), xe = zN({
    measure: M.dragOverlay.measure
  }), Qe = (r = xe.nodeRef.current) != null ? r : j, ve = P ? (o = xe.rect) != null ? o : Z : null, fe = !!(xe.nodeRef.current && xe.rect), ut = _N(fe ? null : Z), Ne = Ky(Qe ? ht(Qe) : null), Fe = ON(P ? Pe ?? j : null), tn = $N(Fe), je = XN(h, {
    transform: {
      x: A.x - ut.x,
      y: A.y - ut.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: X,
    activeNodeRect: Z,
    containerNodeRect: oe,
    draggingNodeRect: ve,
    over: ie.current.over,
    overlayNodeRect: xe.rect,
    scrollableAncestors: Fe,
    scrollableAncestorRects: tn,
    windowRect: Ne
  }), Mt = $ ? fr($, A) : null, Vn = LN(Fe), kr = tf(Vn), dn = tf(Vn, [Z]), At = fr(je, kr), Dt = ve ? oN(ve, je) : null, It = X && Dt ? u({
    active: X,
    collisionRect: Dt,
    droppableRects: F,
    droppableContainers: se,
    pointerCoordinates: Mt
  }) : null, mt = Fy(It, "id"), [gt, St] = Xe(null), D = fe ? je : fr(je, dn), I = nN(D, (i = gt == null ? void 0 : gt.rect) != null ? i : null, Z), ue = me(null), ge = He(
    (ae, Oe) => {
      let {
        sensor: re,
        options: Se
      } = Oe;
      if (Y.current == null)
        return;
      const be = R.get(Y.current);
      if (!be)
        return;
      const Ce = ae.nativeEvent, Me = new re({
        active: Y.current,
        activeNode: be,
        event: Ce,
        options: Se,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ie,
        onAbort(Re) {
          if (!R.get(Re))
            return;
          const {
            onDragAbort: $e
          } = L.current, Be = {
            id: Re
          };
          $e == null || $e(Be), x({
            type: "onDragAbort",
            event: Be
          });
        },
        onPending(Re, vt, $e, Be) {
          if (!R.get(Re))
            return;
          const {
            onDragPending: yt
          } = L.current, nn = {
            id: Re,
            constraint: vt,
            initialCoordinates: $e,
            offset: Be
          };
          yt == null || yt(nn), x({
            type: "onDragPending",
            event: nn
          });
        },
        onStart(Re) {
          const vt = Y.current;
          if (vt == null)
            return;
          const $e = R.get(vt);
          if (!$e)
            return;
          const {
            onDragStart: Be
          } = L.current, fn = {
            activatorEvent: Ce,
            active: {
              id: vt,
              data: $e.data,
              rect: W
            }
          };
          Mo(() => {
            Be == null || Be(fn), C(yn.Initializing), w({
              type: Ye.DragStart,
              initialCoordinates: Re,
              active: vt
            }), x({
              type: "onDragStart",
              event: fn
            }), O(ue.current), B(Ce);
          });
        },
        onMove(Re) {
          w({
            type: Ye.DragMove,
            coordinates: Re
          });
        },
        onEnd: ke(Ye.DragEnd),
        onCancel: ke(Ye.DragCancel)
      });
      ue.current = Me;
      function ke(Re) {
        return async function() {
          const {
            active: $e,
            collisions: Be,
            over: fn,
            scrollAdjustedTranslate: yt
          } = ie.current;
          let nn = null;
          if ($e && yt) {
            const {
              cancelDrop: _r
            } = L.current;
            nn = {
              activatorEvent: Ce,
              active: $e,
              collisions: Be,
              delta: yt,
              over: fn
            }, Re === Ye.DragEnd && typeof _r == "function" && await Promise.resolve(_r(nn)) && (Re = Ye.DragCancel);
          }
          Y.current = null, Mo(() => {
            w({
              type: Re
            }), C(yn.Uninitialized), St(null), O(null), B(null), ue.current = null;
            const _r = Re === Ye.DragEnd ? "onDragEnd" : "onDragCancel";
            if (nn) {
              const vs = L.current[_r];
              vs == null || vs(nn), x({
                type: _r,
                event: nn
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), Ae = He((ae, Oe) => (re, Se) => {
    const be = re.nativeEvent, Ce = R.get(Se);
    if (
      // Another sensor is already instantiating
      Y.current !== null || // No active draggable
      !Ce || // Event has already been captured
      be.dndKit || be.defaultPrevented
    )
      return;
    const Me = {
      active: Ce
    };
    ae(re, Oe.options, Me) === !0 && (be.dndKit = {
      capturedBy: Oe.sensor
    }, Y.current = Se, ge(re, Oe));
  }, [R, ge]), We = AN(d, Ae);
  FN(d), Jt(() => {
    Z && S === yn.Initializing && C(yn.Initialized);
  }, [Z, S]), we(
    () => {
      const {
        onDragMove: ae
      } = L.current, {
        active: Oe,
        activatorEvent: re,
        collisions: Se,
        over: be
      } = ie.current;
      if (!Oe || !re)
        return;
      const Ce = {
        active: Oe,
        activatorEvent: re,
        collisions: Se,
        delta: {
          x: At.x,
          y: At.y
        },
        over: be
      };
      Mo(() => {
        ae == null || ae(Ce), x({
          type: "onDragMove",
          event: Ce
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [At.x, At.y]
  ), we(
    () => {
      const {
        active: ae,
        activatorEvent: Oe,
        collisions: re,
        droppableContainers: Se,
        scrollAdjustedTranslate: be
      } = ie.current;
      if (!ae || Y.current == null || !Oe || !be)
        return;
      const {
        onDragOver: Ce
      } = L.current, Me = Se.get(mt), ke = Me && Me.rect.current ? {
        id: Me.id,
        rect: Me.rect.current,
        data: Me.data,
        disabled: Me.disabled
      } : null, Re = {
        active: ae,
        activatorEvent: Oe,
        collisions: re,
        delta: {
          x: be.x,
          y: be.y
        },
        over: ke
      };
      Mo(() => {
        St(ke), Ce == null || Ce(Re), x({
          type: "onDragOver",
          event: Re
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mt]
  ), Jt(() => {
    ie.current = {
      activatorEvent: K,
      active: X,
      activeNode: j,
      collisionRect: Dt,
      collisions: It,
      droppableRects: F,
      draggableNodes: R,
      draggingNode: Qe,
      draggingNodeRect: ve,
      droppableContainers: T,
      over: gt,
      scrollableAncestors: Fe,
      scrollAdjustedTranslate: At
    }, W.current = {
      initial: ve,
      translated: Dt
    };
  }, [X, j, It, Dt, R, Qe, ve, F, T, gt, Fe, At]), EN({
    ...H,
    delta: A,
    draggingRect: Dt,
    pointerCoordinates: Mt,
    scrollableAncestors: Fe,
    scrollableAncestorRects: tn
  });
  const Te = Ee(() => ({
    active: X,
    activeNode: j,
    activeNodeRect: Z,
    activatorEvent: K,
    collisions: It,
    containerNodeRect: oe,
    dragOverlay: xe,
    draggableNodes: R,
    droppableContainers: T,
    droppableRects: F,
    over: gt,
    measureDroppableContainers: G,
    scrollableAncestors: Fe,
    scrollableAncestorRects: tn,
    measuringConfiguration: M,
    measuringScheduled: _,
    windowRect: Ne
  }), [X, j, Z, K, It, oe, xe, R, T, F, gt, G, Fe, tn, M, _, Ne]), _e = Ee(() => ({
    activatorEvent: K,
    activators: We,
    active: X,
    activeNodeRect: Z,
    ariaDescribedById: {
      draggable: N
    },
    dispatch: w,
    draggableNodes: R,
    over: gt,
    measureDroppableContainers: G
  }), [K, We, X, Z, w, N, R, gt, G]);
  return V.createElement(_y.Provider, {
    value: b
  }, V.createElement(ms.Provider, {
    value: _e
  }, V.createElement(Yy.Provider, {
    value: Te
  }, V.createElement(Xy.Provider, {
    value: I
  }, c)), V.createElement(YN, {
    disabled: (a == null ? void 0 : a.restoreFocus) === !1
  })), V.createElement(XI, {
    ...a,
    hiddenTextDescribedById: N
  }));
  function De() {
    const ae = (Q == null ? void 0 : Q.autoScrollEnabled) === !1, Oe = typeof l == "object" ? l.enabled === !1 : l === !1, re = P && !ae && !Oe;
    return typeof l == "object" ? {
      ...l,
      enabled: re
    } : {
      enabled: re
    };
  }
}), QN = /* @__PURE__ */ Bt(null), rf = "button", ek = "Draggable";
function tk(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = To(ek), {
    activators: s,
    activatorEvent: a,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: p
  } = ze(ms), {
    role: h = rf,
    roleDescription: v = "draggable",
    tabIndex: g = 0
  } = o ?? {}, y = (l == null ? void 0 : l.id) === t, w = ze(y ? Xy : QN), [x, b] = Ii(), [S, C] = Ii(), P = VN(s, t), E = oo(n);
  Jt(
    () => (u.set(t, {
      id: t,
      key: i,
      node: x,
      activatorNode: S,
      data: E
    }), () => {
      const A = u.get(t);
      A && A.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const R = Ee(() => ({
    role: h,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": y && h === rf ? !0 : void 0,
    "aria-roledescription": v,
    "aria-describedby": d.draggable
  }), [r, h, g, y, v, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: c,
    attributes: R,
    isDragging: y,
    listeners: r ? void 0 : P,
    node: x,
    over: p,
    setNodeRef: b,
    setActivatorNodeRef: C,
    transform: w
  };
}
function nk() {
  return ze(Yy);
}
const rk = "Droppable", ok = {
  timeout: 25
};
function ik(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = To(rk), {
    active: s,
    dispatch: a,
    over: l,
    measureDroppableContainers: c
  } = ze(ms), d = me({
    disabled: n
  }), u = me(!1), p = me(null), h = me(null), {
    disabled: v,
    updateMeasurementsFor: g,
    timeout: y
  } = {
    ...ok,
    ...o
  }, w = oo(g ?? r), x = He(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), b = hs({
    callback: x,
    disabled: v || !s
  }), S = He((R, A) => {
    b && (A && (b.unobserve(A), u.current = !1), R && b.observe(R));
  }, [b]), [C, P] = Ii(S), E = oo(t);
  return we(() => {
    !b || !C.current || (b.disconnect(), u.current = !1, b.observe(C.current));
  }, [C, b]), we(
    () => (a({
      type: Ye.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: C,
        rect: p,
        data: E
      }
    }), () => a({
      type: Ye.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), we(() => {
    n !== d.current.disabled && (a({
      type: Ye.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), d.current.disabled = n);
  }, [r, i, n, a]), {
    active: s,
    rect: p,
    isOver: (l == null ? void 0 : l.id) === r,
    node: C,
    over: l,
    setNodeRef: P
  };
}
function sk(e, t, n) {
  const r = {
    ...e
  };
  return t.top + e.y <= n.top ? r.y = n.top - t.top : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom), t.left + e.x <= n.left ? r.x = n.left - t.left : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right), r;
}
const ak = (e) => {
  let {
    containerNodeRect: t,
    draggingNodeRect: n,
    transform: r
  } = e;
  return !n || !t ? r : sk(r, n, t);
}, lk = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
};
function Nc(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function ck(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function Ho(e) {
  return e !== null && e >= 0;
}
function uk(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function dk(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const qy = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = Nc(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, jo = {
  scaleX: 1,
  scaleY: 1
}, fk = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: o,
    rects: i,
    overIndex: s
  } = e;
  const a = (t = i[n]) != null ? t : r;
  if (!a)
    return null;
  if (o === n) {
    const c = i[s];
    return c ? {
      x: 0,
      y: n < s ? c.top + c.height - (a.top + a.height) : c.top - a.top,
      ...jo
    } : null;
  }
  const l = pk(i, o, n);
  return o > n && o <= s ? {
    x: 0,
    y: -a.height - l,
    ...jo
  } : o < n && o >= s ? {
    x: 0,
    y: a.height + l,
    ...jo
  } : {
    x: 0,
    y: 0,
    ...jo
  };
};
function pk(e, t, n) {
  const r = e[t], o = e[t - 1], i = e[t + 1];
  return r ? n < t ? o ? r.top - (o.top + o.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : o ? r.top - (o.top + o.height) : 0 : 0;
}
const Zy = "Sortable", Jy = /* @__PURE__ */ V.createContext({
  activeIndex: -1,
  containerId: Zy,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: qy,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function hk(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = qy,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = nk(), u = To(Zy, n), p = a.rect !== null, h = Ee(() => r.map((P) => typeof P == "object" && "id" in P ? P.id : P), [r]), v = s != null, g = s ? h.indexOf(s.id) : -1, y = c ? h.indexOf(c.id) : -1, w = me(h), x = !uk(h, w.current), b = y !== -1 && g === -1 || x, S = dk(i);
  Jt(() => {
    x && v && d(h);
  }, [x, h, v, d]), we(() => {
    w.current = h;
  }, [h]);
  const C = Ee(
    () => ({
      activeIndex: g,
      containerId: u,
      disabled: S,
      disableTransforms: b,
      items: h,
      overIndex: y,
      useDragOverlay: p,
      sortedRects: ck(h, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, u, S.draggable, S.droppable, b, h, y, l, p, o]
  );
  return V.createElement(Jy.Provider, {
    value: C
  }, t);
}
const mk = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Nc(n, r, o).indexOf(t);
}, gk = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: i,
    newIndex: s,
    previousItems: a,
    previousContainerId: l,
    transition: c
  } = e;
  return !c || !r || a !== i && o === s ? !1 : n ? !0 : s !== o && t === l;
}, vk = {
  duration: 200,
  easing: "ease"
}, Qy = "transform", yk = /* @__PURE__ */ so.Transition.toString({
  property: Qy,
  duration: 0,
  easing: "linear"
}), wk = {
  roleDescription: "sortable"
};
function bk(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = Xe(null), a = me(n);
  return Jt(() => {
    if (!t && n !== a.current && r.current) {
      const l = o.current;
      if (l) {
        const c = Nr(r.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (d.x || d.y) && s(d);
      }
    }
    n !== a.current && (a.current = n);
  }, [t, n, r, o]), we(() => {
    i && s(null);
  }, [i]), i;
}
function xk(e) {
  let {
    animateLayoutChanges: t = gk,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = mk,
    id: s,
    strategy: a,
    resizeObserverConfig: l,
    transition: c = vk
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: p,
    disabled: h,
    disableTransforms: v,
    sortedRects: g,
    overIndex: y,
    useDragOverlay: w,
    strategy: x
  } = ze(Jy), b = Sk(r, h), S = d.indexOf(s), C = Ee(() => ({
    sortable: {
      containerId: u,
      index: S,
      items: d
    },
    ...o
  }), [u, o, S, d]), P = Ee(() => d.slice(d.indexOf(s)), [d, s]), {
    rect: E,
    node: R,
    isOver: A,
    setNodeRef: T
  } = ik({
    id: s,
    data: C,
    disabled: b.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: P,
      ...l
    }
  }), {
    active: k,
    activatorEvent: W,
    activeNodeRect: X,
    attributes: Y,
    setNodeRef: Q,
    listeners: O,
    isDragging: K,
    over: B,
    setActivatorNodeRef: L,
    transform: N
  } = tk({
    id: s,
    data: C,
    attributes: {
      ...wk,
      ...n
    },
    disabled: b.draggable
  }), se = LI(T, Q), M = !!k, F = M && !v && Ho(p) && Ho(y), G = !w && K, _ = G && F ? N : null, $ = F ? _ ?? (a ?? x)({
    rects: g,
    activeNodeRect: X,
    activeIndex: p,
    overIndex: y,
    index: S
  }) : null, H = Ho(p) && Ho(y) ? i({
    id: s,
    items: d,
    activeIndex: p,
    overIndex: y
  }) : S, U = k == null ? void 0 : k.id, Z = me({
    activeId: U,
    items: d,
    newIndex: H,
    containerId: u
  }), oe = d !== Z.current.items, ie = t({
    active: k,
    containerId: u,
    isDragging: K,
    isSorting: M,
    id: s,
    index: S,
    items: d,
    newIndex: Z.current.newIndex,
    previousItems: Z.current.items,
    previousContainerId: Z.current.containerId,
    transition: c,
    wasDragging: Z.current.activeId != null
  }), Pe = bk({
    disabled: !ie,
    index: S,
    node: R,
    rect: E
  });
  return we(() => {
    M && Z.current.newIndex !== H && (Z.current.newIndex = H), u !== Z.current.containerId && (Z.current.containerId = u), d !== Z.current.items && (Z.current.items = d);
  }, [M, H, u, d]), we(() => {
    if (U === Z.current.activeId)
      return;
    if (U != null && Z.current.activeId == null) {
      Z.current.activeId = U;
      return;
    }
    const Qe = setTimeout(() => {
      Z.current.activeId = U;
    }, 50);
    return () => clearTimeout(Qe);
  }, [U]), {
    active: k,
    activeIndex: p,
    attributes: Y,
    data: C,
    rect: E,
    index: S,
    newIndex: H,
    items: d,
    isOver: A,
    isSorting: M,
    isDragging: K,
    listeners: O,
    node: R,
    overIndex: y,
    over: B,
    setNodeRef: se,
    setActivatorNodeRef: L,
    setDroppableNodeRef: T,
    setDraggableNodeRef: Q,
    transform: Pe ?? $,
    transition: xe()
  };
  function xe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Pe || // Or to prevent items jumping to back to their "new" position when items change
      oe && Z.current.newIndex === S
    )
      return yk;
    if (!(G && !Tc(W) || !c) && (M || ie))
      return so.Transition.toString({
        ...c,
        property: Qy
      });
  }
}
function Sk(e, t) {
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
function _i(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const Ck = [ye.Down, ye.Right, ye.Up, ye.Left], Rk = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: i,
      over: s,
      scrollableAncestors: a
    }
  } = t;
  if (Ck.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    i.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const p = o.get(u.id);
      if (p)
        switch (e.code) {
          case ye.Down:
            r.top < p.top && l.push(u);
            break;
          case ye.Up:
            r.top > p.top && l.push(u);
            break;
          case ye.Left:
            r.left > p.left && l.push(u);
            break;
          case ye.Right:
            r.left < p.left && l.push(u);
            break;
        }
    });
    const c = QI({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let d = Fy(c, "id");
    if (d === (s == null ? void 0 : s.id) && c.length > 1 && (d = c[1].id), d != null) {
      const u = i.get(n.id), p = i.get(d), h = p ? o.get(p.id) : null, v = p == null ? void 0 : p.node.current;
      if (v && h && u && p) {
        const y = ps(v).some((P, E) => a[E] !== P), w = ew(u, p), x = Ek(u, p), b = y || !w ? {
          x: 0,
          y: 0
        } : {
          x: x ? r.width - h.width : 0,
          y: x ? r.height - h.height : 0
        }, S = {
          x: h.left,
          y: h.top
        };
        return b.x && b.y ? S : io(S, b);
      }
    }
  }
};
function ew(e, t) {
  return !_i(e) || !_i(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Ek(e, t) {
  return !_i(e) || !_i(t) || !ew(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
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
function bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xt(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: bn(n, r[e])
    }));
  };
}
function gs(e) {
  return e instanceof Function;
}
function Pk(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Tk(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function le(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== r.length || a.some((d, u) => r[u] !== d)))
      return o;
    r = a;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...a), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - s) * 100) / 100, u = Math.round((Date.now() - c) * 100) / 100, p = u / 16, h = (v, g) => {
        for (v = String(v); v.length < g; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${h(u, 5)} /${h(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function ce(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function Mk(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: le(() => [e, n, t, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), ce(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function Ak(e, t, n, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (o = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, d;
  if (a.accessorFn ? d = a.accessorFn : l && (l.includes(".") ? d = (p) => {
    let h = p;
    for (const g of l.split(".")) {
      var v;
      h = (v = h) == null ? void 0 : v[g], process.env.NODE_ENV !== "production" && h === void 0 && console.warn(`"${g}" in deeply nested key "${l}" returned undefined.`);
    }
    return h;
  } : d = (p) => p[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let u = {
    id: `${String(c)}`,
    accessorFn: d,
    parent: r,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: le(() => [!0], () => {
      var p;
      return [u, ...(p = u.columns) == null ? void 0 : p.flatMap((h) => h.getFlatColumns())];
    }, ce(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: le(() => [e._getOrderColumnsFn()], (p) => {
      var h;
      if ((h = u.columns) != null && h.length) {
        let v = u.columns.flatMap((g) => g.getLeafColumns());
        return p(v);
      }
      return [u];
    }, ce(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(u, e);
  return u;
}
const rt = "debugHeaders";
function of(e, t, n) {
  var r;
  let i = {
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
      const s = [], a = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(a), s.push(l);
      };
      return a(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const Dk = {
  createTable: (e) => {
    e.getHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((u) => n.find((p) => p.id === u)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((u) => n.find((p) => p.id === u)).filter(Boolean)) != null ? s : [], c = n.filter((u) => !(r != null && r.includes(u.id)) && !(o != null && o.includes(u.id)));
      return Wo(t, [...a, ...c, ...l], e);
    }, ce(e.options, rt, "getHeaderGroups")), e.getCenterHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Wo(t, n, e, "center")), ce(e.options, rt, "getCenterHeaderGroups")), e.getLeftHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Wo(t, i, e, "left");
    }, ce(e.options, rt, "getLeftHeaderGroups")), e.getRightHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Wo(t, i, e, "right");
    }, ce(e.options, rt, "getRightHeaderGroups")), e.getFooterGroups = le(() => [e.getHeaderGroups()], (t) => [...t].reverse(), ce(e.options, rt, "getFooterGroups")), e.getLeftFooterGroups = le(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), ce(e.options, rt, "getLeftFooterGroups")), e.getCenterFooterGroups = le(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), ce(e.options, rt, "getCenterFooterGroups")), e.getRightFooterGroups = le(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), ce(e.options, rt, "getRightFooterGroups")), e.getFlatHeaders = le(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ce(e.options, rt, "getFlatHeaders")), e.getLeftFlatHeaders = le(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ce(e.options, rt, "getLeftFlatHeaders")), e.getCenterFlatHeaders = le(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ce(e.options, rt, "getCenterFlatHeaders")), e.getRightFlatHeaders = le(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ce(e.options, rt, "getRightFlatHeaders")), e.getCenterLeafHeaders = le(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ce(e.options, rt, "getCenterLeafHeaders")), e.getLeftLeafHeaders = le(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ce(e.options, rt, "getLeftLeafHeaders")), e.getRightLeafHeaders = le(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ce(e.options, rt, "getRightLeafHeaders")), e.getLeafHeaders = le(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, l, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((d) => d.getLeafHeaders()).flat();
    }, ce(e.options, rt, "getLeafHeaders"));
  }
};
function Wo(e, t, n, r) {
  var o, i;
  let s = 0;
  const a = function(p, h) {
    h === void 0 && (h = 1), s = Math.max(s, h), p.filter((v) => v.getIsVisible()).forEach((v) => {
      var g;
      (g = v.columns) != null && g.length && a(v.columns, h + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (p, h) => {
    const v = {
      depth: h,
      id: [r, `${h}`].filter(Boolean).join("_"),
      headers: []
    }, g = [];
    p.forEach((y) => {
      const w = [...g].reverse()[0], x = y.column.depth === v.depth;
      let b, S = !1;
      if (x && y.column.parent ? b = y.column.parent : (b = y.column, S = !0), w && (w == null ? void 0 : w.column) === b)
        w.subHeaders.push(y);
      else {
        const C = of(n, b, {
          id: [r, h, b.id, y == null ? void 0 : y.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${g.filter((P) => P.column === b).length}` : void 0,
          depth: h,
          index: g.length
        });
        C.subHeaders.push(y), g.push(C);
      }
      v.headers.push(y), y.headerGroup = v;
    }), l.push(v), h > 0 && c(g, h - 1);
  }, d = t.map((p, h) => of(n, p, {
    depth: s,
    index: h
  }));
  c(d, s - 1), l.reverse();
  const u = (p) => p.filter((v) => v.column.getIsVisible()).map((v) => {
    let g = 0, y = 0, w = [0];
    v.subHeaders && v.subHeaders.length ? (w = [], u(v.subHeaders).forEach((b) => {
      let {
        colSpan: S,
        rowSpan: C
      } = b;
      g += S, w.push(C);
    })) : g = 1;
    const x = Math.min(...w);
    return y = y + x, v.colSpan = g, v.rowSpan = y, {
      colSpan: g,
      rowSpan: y
    };
  });
  return u((o = (i = l[0]) == null ? void 0 : i.headers) != null ? o : []), l;
}
const kc = (e, t, n, r, o, i, s) => {
  let a = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
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
    getLeafRows: () => Tk(a.subRows, (l) => l.subRows),
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
    getAllCells: le(() => [e.getAllLeafColumns()], (l) => l.map((c) => Mk(e, a, c, c.id)), ce(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: le(() => [a.getAllCells()], (l) => l.reduce((c, d) => (c[d.column.id] = d, c), {}), ce(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, Ik = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, tw = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
tw.autoRemove = (e) => Lt(e);
const nw = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
nw.autoRemove = (e) => Lt(e);
const rw = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
rw.autoRemove = (e) => Lt(e);
const ow = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ow.autoRemove = (e) => Lt(e);
const iw = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
iw.autoRemove = (e) => Lt(e) || !(e != null && e.length);
const sw = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
sw.autoRemove = (e) => Lt(e) || !(e != null && e.length);
const aw = (e, t, n) => e.getValue(t) === n;
aw.autoRemove = (e) => Lt(e);
const lw = (e, t, n) => e.getValue(t) == n;
lw.autoRemove = (e) => Lt(e);
const _c = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
_c.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
_c.autoRemove = (e) => Lt(e) || Lt(e[0]) && Lt(e[1]);
const on = {
  includesString: tw,
  includesStringSensitive: nw,
  equalsString: rw,
  arrIncludes: ow,
  arrIncludesAll: iw,
  arrIncludesSome: sw,
  equals: aw,
  weakEquals: lw,
  inNumberRange: _c
};
function Lt(e) {
  return e == null || e === "";
}
const Nk = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: xt("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? on.includesString : typeof r == "number" ? on.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? on.equals : Array.isArray(r) ? on.arrIncludes : on.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return gs(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : on[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((d) => d.id === e.id), s = bn(n, i ? i.value : void 0);
        if (sf(o, s, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((d) => d.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
          var c;
          return (c = r == null ? void 0 : r.map((d) => d.id === e.id ? l : d)) != null ? c : [];
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
        var i;
        return (i = bn(t, o)) == null ? void 0 : i.filter((s) => {
          const a = n.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (sf(l, s.value, a))
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
function sf(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const kk = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), _k = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Ok = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Lk = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Fk = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Vk = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Pk(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, $k = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Bk = (e, t) => new Set(t.map((n) => n.getValue(e))).size, zk = (e, t) => t.length, ta = {
  sum: kk,
  min: _k,
  max: Ok,
  extent: Lk,
  mean: Fk,
  median: Vk,
  unique: $k,
  uniqueCount: Bk,
  count: zk
}, Hk = {
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
    onGroupingChange: xt("grouping", e),
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
        return ta.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return ta.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return gs(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : ta[e.columnDef.aggregationFn];
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
function jk(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const Wk = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: xt("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = le((n) => [Xr(t, n)], (n) => n.findIndex((r) => r.id === e.id), ce(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Xr(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Xr(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = le(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const s = [...t], a = [...o];
        for (; a.length && s.length; ) {
          const l = s.shift(), c = a.findIndex((d) => d.id === l);
          c > -1 && i.push(a.splice(c, 1)[0]);
        }
        i = [...i, ...a];
      }
      return jk(i, n, r);
    }, ce(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, na = () => ({
  left: [],
  right: []
}), Gk = {
  getInitialState: (e) => ({
    columnPinning: na(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: xt("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var a, l;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((u) => !(r != null && r.includes(u))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((u) => !(r != null && r.includes(u))), ...r]
          };
        }
        if (n === "left") {
          var c, d;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((u) => !(r != null && r.includes(u))), ...r],
            right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((u) => !(r != null && r.includes(u)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((u) => !(r != null && r.includes(u))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((u) => !(r != null && r.includes(u)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((a) => a.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((a) => r == null ? void 0 : r.includes(a)), s = n.some((a) => o == null ? void 0 : o.includes(a));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = le(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, ce(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = le(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), ce(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = le(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), ce(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? na() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : na());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = le(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), ce(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = le(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), ce(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = le(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, ce(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Uk(e) {
  return e || (typeof document < "u" ? document : null);
}
const Go = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, ra = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Kk = {
  getDefaultColumnDef: () => Go,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: ra(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: xt("columnSizing", e),
    onColumnSizingInfoChange: xt("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Go.minSize, (r = i ?? e.columnDef.size) != null ? r : Go.size), (o = e.columnDef.maxSize) != null ? o : Go.maxSize);
    }, e.getStart = le((n) => [n, Xr(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), ce(t.options, "debugColumns", "getStart")), e.getAfter = le((n) => [n, Xr(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), ce(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
          var i;
          n += (i = o.column.getSize()) != null ? i : 0;
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
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), oa(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[r.id, r.getSize()]], l = oa(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, d = (w, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((b) => {
            var S, C;
            const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, E = (x - ((S = b == null ? void 0 : b.startOffset) != null ? S : 0)) * P, R = Math.max(E / ((C = b == null ? void 0 : b.startSize) != null ? C : 0), -0.999999);
            return b.columnSizingStart.forEach((A) => {
              let [T, k] = A;
              c[T] = Math.round(Math.max(k + k * R, 0) * 100) / 100;
            }), {
              ...b,
              deltaOffset: E,
              deltaPercentage: R
            };
          }), (t.options.columnResizeMode === "onChange" || w === "end") && t.setColumnSizing((b) => ({
            ...b,
            ...c
          })));
        }, u = (w) => d("move", w), p = (w) => {
          d("end", w), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, h = Uk(n), v = {
          moveHandler: (w) => u(w.clientX),
          upHandler: (w) => {
            h == null || h.removeEventListener("mousemove", v.moveHandler), h == null || h.removeEventListener("mouseup", v.upHandler), p(w.clientX);
          }
        }, g = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), u(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var x;
            h == null || h.removeEventListener("touchmove", g.moveHandler), h == null || h.removeEventListener("touchend", g.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), p((x = w.touches[0]) == null ? void 0 : x.clientX);
          }
        }, y = Yk() ? {
          passive: !1
        } : !1;
        oa(i) ? (h == null || h.addEventListener("touchmove", g.moveHandler, y), h == null || h.addEventListener("touchend", g.upHandler, y)) : (h == null || h.addEventListener("mousemove", v.moveHandler, y), h == null || h.addEventListener("mouseup", v.upHandler, y)), t.setColumnSizingInfo((w) => ({
          ...w,
          startOffset: l,
          startSize: s,
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
      e.setColumnSizingInfo(t ? ra() : (n = e.initialState.columnSizingInfo) != null ? n : ra());
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
let Uo = null;
function Yk() {
  if (typeof Uo == "boolean") return Uo;
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
  return Uo = e, Uo;
}
function oa(e) {
  return e.type === "touchstart";
}
const Xk = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: xt("columnVisibility", e)
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
      return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = le(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), ce(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = le(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], ce(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => le(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), ce(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function Xr(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const qk = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Zk = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: xt("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => on.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return gs(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : on[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Jk = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: xt("expanded", e),
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
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
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
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const s = i.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
          s[a] = !0;
        }) : s = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: a,
            ...l
          } = s;
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
}, sl = 0, al = 10, ia = () => ({
  pageIndex: sl,
  pageSize: al
}), Qk = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...ia(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: xt("pagination", e)
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
      const o = (i) => bn(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? ia() : (o = e.initialState.pagination) != null ? o : ia());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = bn(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? sl : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : sl);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? al : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : al);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, bn(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = bn(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = le(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, ce(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, sa = () => ({
  top: [],
  bottom: []
}), e_ = {
  getInitialState: (e) => ({
    rowPinning: sa(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: xt("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], s = o ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((l) => {
        var c, d;
        if (n === "bottom") {
          var u, p;
          return {
            top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((g) => !(a != null && a.has(g))),
            bottom: [...((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((g) => !(a != null && a.has(g))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var h, v;
          return {
            top: [...((h = l == null ? void 0 : l.top) != null ? h : []).filter((g) => !(a != null && a.has(g))), ...Array.from(a)],
            bottom: ((v = l == null ? void 0 : l.bottom) != null ? v : []).filter((g) => !(a != null && a.has(g)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((g) => !(a != null && a.has(g))),
          bottom: ((d = l == null ? void 0 : l.bottom) != null ? d : []).filter((g) => !(a != null && a.has(g)))
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
      } = t.getState().rowPinning, i = n.some((a) => r == null ? void 0 : r.includes(a)), s = n.some((a) => o == null ? void 0 : o.includes(a));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: a
        } = s;
        return a;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? sa() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : sa());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((s) => {
          const a = e.getRow(s, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => t.find((a) => a.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = le(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), ce(e.options, "debugRows", "getTopRows")), e.getBottomRows = le(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), ce(e.options, "debugRows", "getBottomRows")), e.getCenterRows = le(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, ce(e.options, "debugRows", "getCenterRows"));
  }
}, t_ = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: xt("rowSelection", e),
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
        return t ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        ll(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = le(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? aa(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ce(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = le(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? aa(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ce(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = le(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? aa(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ce(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
      t.setRowSelection((i) => {
        var s;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const a = {
          ...i
        };
        return ll(a, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Oc(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return cl(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return cl(e, n) === "all";
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
}, ll = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => ll(e, a.id, n, r, o));
};
function aa(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const d = Oc(l, n);
      if (d && (r.push(l), o[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), d)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function Oc(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function cl(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Oc(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = cl(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const ul = /([0-9]+)/gm, n_ = (e, t, n) => cw(An(e.getValue(n)).toLowerCase(), An(t.getValue(n)).toLowerCase()), r_ = (e, t, n) => cw(An(e.getValue(n)), An(t.getValue(n))), o_ = (e, t, n) => Lc(An(e.getValue(n)).toLowerCase(), An(t.getValue(n)).toLowerCase()), i_ = (e, t, n) => Lc(An(e.getValue(n)), An(t.getValue(n))), s_ = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, a_ = (e, t, n) => Lc(e.getValue(n), t.getValue(n));
function Lc(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function An(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function cw(e, t) {
  const n = e.split(ul).filter(Boolean), r = t.split(ul).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), s = parseInt(o, 10), a = parseInt(i, 10), l = [s, a].sort();
    if (isNaN(l[0])) {
      if (o > i)
        return 1;
      if (i > o)
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
  return n.length - r.length;
}
const Vr = {
  alphanumeric: n_,
  alphanumericCaseSensitive: r_,
  text: o_,
  textCaseSensitive: i_,
  datetime: s_,
  basic: a_
}, l_ = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: xt("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Vr.datetime;
        if (typeof i == "string" && (r = !0, i.split(ul).length > 1))
          return Vr.alphanumeric;
      }
      return r ? Vr.text : Vr.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return gs(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Vr[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const a = s == null ? void 0 : s.find((h) => h.id === e.id), l = s == null ? void 0 : s.findIndex((h) => h.id === e.id);
        let c = [], d, u = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? a ? d = "toggle" : d = "add" : s != null && s.length && l !== s.length - 1 ? d = "replace" : a ? d = "toggle" : d = "replace", d === "toggle" && (i || o || (d = "remove")), d === "add") {
          var p;
          c = [...s, {
            id: e.id,
            desc: u
          }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else d === "toggle" ? c = s.map((h) => h.id === e.id ? {
          ...h,
          desc: u
        } : h) : d === "remove" ? c = s.filter((h) => h.id !== e.id) : c = [{
          id: e.id,
          desc: u
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : i;
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
}, c_ = [
  Dk,
  Xk,
  Wk,
  Gk,
  Ik,
  Nk,
  qk,
  //depends on ColumnFaceting
  Zk,
  //depends on ColumnFiltering
  l_,
  Hk,
  //depends on RowSorting
  Jk,
  Qk,
  e_,
  t_,
  Kk
];
function u_(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...c_, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((p, h) => Object.assign(p, h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(o)), {}), s = (p) => o.options.mergeOptions ? o.options.mergeOptions(i, p) : {
    ...i,
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
  let d = !1;
  const u = {
    _features: r,
    options: {
      ...i,
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
      o.setState(o.initialState);
    },
    setOptions: (p) => {
      const h = bn(p, o.options);
      o.options = s(h);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, h, v) => {
      var g;
      return (g = o.options.getRowId == null ? void 0 : o.options.getRowId(p, h, v)) != null ? g : `${v ? [v.id, h].join(".") : h}`;
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
    _getDefaultColumnDef: le(() => [o.options.defaultColumn], (p) => {
      var h;
      return p = (h = p) != null ? h : {}, {
        header: (v) => {
          const g = v.header.column.columnDef;
          return g.accessorKey ? g.accessorKey : g.accessorFn ? g.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (v) => {
          var g, y;
          return (g = (y = v.renderValue()) == null || y.toString == null ? void 0 : y.toString()) != null ? g : null;
        },
        ...o._features.reduce((v, g) => Object.assign(v, g.getDefaultColumnDef == null ? void 0 : g.getDefaultColumnDef()), {}),
        ...p
      };
    }, ce(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: le(() => [o._getColumnDefs()], (p) => {
      const h = function(v, g, y) {
        return y === void 0 && (y = 0), v.map((w) => {
          const x = Ak(o, w, y, g), b = w;
          return x.columns = b.columns ? h(b.columns, x, y + 1) : [], x;
        });
      };
      return h(p);
    }, ce(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: le(() => [o.getAllColumns()], (p) => p.flatMap((h) => h.getFlatColumns()), ce(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: le(() => [o.getAllFlatColumns()], (p) => p.reduce((h, v) => (h[v.id] = v, h), {}), ce(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: le(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, h) => {
      let v = p.flatMap((g) => g.getLeafColumns());
      return h(v);
    }, ce(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (p) => {
      const h = o._getAllFlatColumnsById()[p];
      return process.env.NODE_ENV !== "production" && !h && console.error(`[Table] Column with id '${p}' does not exist.`), h;
    }
  };
  Object.assign(o, u);
  for (let p = 0; p < o._features.length; p++) {
    const h = o._features[p];
    h == null || h.createTable == null || h.createTable(o);
  }
  return o;
}
function d_() {
  return (e) => le(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const d = kc(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, a.push(d), e.options.getSubRows) {
          var l;
          d.originalSubRows = e.options.getSubRows(o[c], c), (l = d.originalSubRows) != null && l.length && (d.subRows = r(d.originalSubRows, i + 1, d));
        }
      }
      return a;
    };
    return n.rows = r(t), n;
  }, ce(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function f_(e) {
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
function p_(e, t, n) {
  return n.options.filterFromLeafRows ? h_(e, t, n) : m_(e, t, n);
}
function h_(e, t, n) {
  var r;
  const o = [], i = {}, s = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let p = 0; p < l.length; p++) {
      var u;
      let h = l[p];
      const v = kc(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
      if (v.columnFilters = h.columnFilters, (u = h.subRows) != null && u.length && c < s) {
        if (v.subRows = a(h.subRows, c + 1), h = v, t(h) && !v.subRows.length) {
          d.push(h), i[h.id] = h, o.push(h);
          continue;
        }
        if (t(h) || v.subRows.length) {
          d.push(h), i[h.id] = h, o.push(h);
          continue;
        }
      } else
        h = v, t(h) && (d.push(h), i[h.id] = h, o.push(h));
    }
    return d;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: i
  };
}
function m_(e, t, n) {
  var r;
  const o = [], i = {}, s = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let p = 0; p < l.length; p++) {
      let h = l[p];
      if (t(h)) {
        var u;
        if ((u = h.subRows) != null && u.length && c < s) {
          const g = kc(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
          g.subRows = a(h.subRows, c + 1), h = g;
        }
        d.push(h), o.push(h), i[h.id] = h;
      }
    }
    return d;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: i
  };
}
function g_() {
  return (e) => le(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, r) => {
    if (!t.rows.length || !(n != null && n.length) && !r) {
      for (let p = 0; p < t.flatRows.length; p++)
        t.flatRows[p].columnFilters = {}, t.flatRows[p].columnFiltersMeta = {};
      return t;
    }
    const o = [], i = [];
    (n ?? []).forEach((p) => {
      var h;
      const v = e.getColumn(p.id);
      if (!v)
        return;
      const g = v.getFilterFn();
      if (!g) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${v.id}.`);
        return;
      }
      o.push({
        id: p.id,
        filterFn: g,
        resolvedValue: (h = g.resolveFilterValue == null ? void 0 : g.resolveFilterValue(p.value)) != null ? h : p.value
      });
    });
    const s = (n ?? []).map((p) => p.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((p) => p.getCanGlobalFilter());
    r && a && l.length && (s.push("__global__"), l.forEach((p) => {
      var h;
      i.push({
        id: p.id,
        filterFn: a,
        resolvedValue: (h = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(r)) != null ? h : r
      });
    }));
    let c, d;
    for (let p = 0; p < t.flatRows.length; p++) {
      const h = t.flatRows[p];
      if (h.columnFilters = {}, o.length)
        for (let v = 0; v < o.length; v++) {
          c = o[v];
          const g = c.id;
          h.columnFilters[g] = c.filterFn(h, g, c.resolvedValue, (y) => {
            h.columnFiltersMeta[g] = y;
          });
        }
      if (i.length) {
        for (let v = 0; v < i.length; v++) {
          d = i[v];
          const g = d.id;
          if (d.filterFn(h, g, d.resolvedValue, (y) => {
            h.columnFiltersMeta[g] = y;
          })) {
            h.columnFilters.__global__ = !0;
            break;
          }
        }
        h.columnFilters.__global__ !== !0 && (h.columnFilters.__global__ = !1);
      }
    }
    const u = (p) => {
      for (let h = 0; h < s.length; h++)
        if (p.columnFilters[s[h]] === !1)
          return !1;
      return !0;
    };
    return p_(t.rows, u, e);
  }, ce(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function v_(e) {
  return (t) => le(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: o,
      pageIndex: i
    } = n;
    let {
      rows: s,
      flatRows: a,
      rowsById: l
    } = r;
    const c = o * i, d = c + o;
    s = s.slice(c, d);
    let u;
    t.options.paginateExpandedRows ? u = {
      rows: s,
      flatRows: a,
      rowsById: l
    } : u = f_({
      rows: s,
      flatRows: a,
      rowsById: l
    }), u.flatRows = [];
    const p = (h) => {
      u.flatRows.push(h), h.subRows.length && h.subRows.forEach(p);
    };
    return u.rows.forEach(p), u;
  }, ce(t.options, "debugTable", "getPaginationRowModel"));
}
function y_() {
  return (e) => le(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], i = r.filter((l) => {
      var c;
      return (c = e.getColumn(l.id)) == null ? void 0 : c.getCanSort();
    }), s = {};
    i.forEach((l) => {
      const c = e.getColumn(l.id);
      c && (s[l.id] = {
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
        for (let h = 0; h < i.length; h += 1) {
          var p;
          const v = i[h], g = s[v.id], y = g.sortUndefined, w = (p = v == null ? void 0 : v.desc) != null ? p : !1;
          let x = 0;
          if (y) {
            const b = d.getValue(v.id), S = u.getValue(v.id), C = b === void 0, P = S === void 0;
            if (C || P) {
              if (y === "first") return C ? -1 : 1;
              if (y === "last") return C ? 1 : -1;
              x = C && P ? 0 : C ? y : -y;
            }
          }
          if (x === 0 && (x = g.sortingFn(d, u, v.id)), x !== 0)
            return w && (x *= -1), g.invertSorting && (x *= -1), x;
        }
        return d.index - u.index;
      }), c.forEach((d) => {
        var u;
        o.push(d), (u = d.subRows) != null && u.length && (d.subRows = a(d.subRows));
      }), c;
    };
    return {
      rows: a(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, ce(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function Oi(e, t) {
  return e ? w_(e) ? /* @__PURE__ */ f.createElement(e, t) : e : null;
}
function w_(e) {
  return b_(e) || typeof e == "function" || x_(e);
}
function b_(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function x_(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function S_(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = f.useState(() => ({
    current: u_(t)
  })), [r, o] = f.useState(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      o(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
function C_({
  checked: e,
  indeterminate: t,
  onChange: n,
  onClick: r,
  className: o
}) {
  const i = f.useRef(null);
  f.useEffect(() => {
    i.current && (i.current.indeterminate = !!t);
  }, [t]);
  const s = e || t;
  return /* @__PURE__ */ z(
    "span",
    {
      className: J("inline-flex items-center justify-center cursor-pointer group", o),
      onClick: r,
      children: [
        /* @__PURE__ */ m("input", { ref: i, type: "checkbox", checked: e, onChange: n, tabIndex: -1, className: "sr-only" }),
        /* @__PURE__ */ z(
          "span",
          {
            className: J(
              "h-3.5 w-3.5 rounded-xs border flex items-center justify-center transition-colors",
              s ? "bg-selected border-selected" : "border-foreground/35 group-hover:border-selected"
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
function R_({
  row: e,
  displayIndex: t,
  activeRowIndex: n,
  activeRowSource: r,
  reorderable: o,
  customTranslateY: i,
  isDragGroup: s,
  justDropped: a,
  onMeasureHeight: l,
  onRowClick: c,
  onRowMouseEnter: d,
  onContextMenu: u
}) {
  const { attributes: p, listeners: h, setNodeRef: v, transform: g, transition: y, isDragging: w } = xk({
    id: e.id,
    disabled: !o
  }), x = f.useCallback((C) => {
    v(C), C && l && l(C.offsetHeight);
  }, [v, l]), b = e.getIsSelected(), S = n === t;
  return /* @__PURE__ */ m(
    Di,
    {
      ref: x,
      style: i !== null ? { transform: `translateY(${i}px)`, transition: "none" } : a ? { transform: "none", transition: "none" } : { transform: so.Transform.toString(g), transition: y },
      "data-display-index": t,
      "data-state": b ? "selected" : void 0,
      className: J(
        "h-6 cursor-pointer select-none",
        "data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25",
        S && r === "keyboard" && "row-ring",
        (w || s) && "shadow-sm bg-background relative z-10"
      ),
      onClick: () => c(t),
      onMouseEnter: () => d(t),
      onContextMenu: (C) => u(C, t),
      children: e.getVisibleCells().map((C) => /* @__PURE__ */ m(
        Cc,
        {
          className: J(
            "py-1.5 text-sm",
            (C.column.id === "_select" || C.column.id === "_reorder") && "w-6 !pl-2 !pr-0"
          ),
          children: C.column.id === "_reorder" ? /* @__PURE__ */ m(
            "span",
            {
              ...p,
              ...h,
              tabIndex: -1,
              className: "flex items-center text-muted-foreground/30 hover:text-muted-foreground/70 cursor-grab active:cursor-grabbing outline-none",
              children: /* @__PURE__ */ m(tC, { className: "h-3.5 w-3.5" })
            }
          ) : C.column.id === "_select" ? /* @__PURE__ */ m("span", { className: J("flex items-center", !b && n !== t && "opacity-0"), children: Oi(C.column.columnDef.cell, C.getContext()) }) : Oi(C.column.columnDef.cell, C.getContext())
        },
        C.id
      ))
    }
  );
}
function K_({
  columns: e,
  data: t,
  searchColumn: n,
  searchPlaceholder: r = "Search...",
  rowActions: o,
  getRowLabel: i,
  pageSize: s = 10,
  onRowReorder: a,
  getRowId: l
}) {
  var St;
  const c = s === "all", [d, u] = f.useState([]), [p, h] = f.useState([]), [v, g] = f.useState({}), [y, w] = f.useState(null), [x, b] = f.useState("mouse"), S = f.useRef(null), C = f.useRef(null), P = f.useRef(null), [E, R] = f.useState(null), [A, T] = f.useState(null), [k, W] = f.useState(!1), [X, Y] = f.useState(null), [Q, O] = f.useState(null), [K, B] = f.useState(!1), [L, N] = f.useState(0), se = f.useRef(0), M = f.useRef(33), [F, G] = f.useState(t), [_, j] = f.useState(!1), $ = f.useRef(null), H = f.useRef(!1);
  f.useEffect(() => {
    var D;
    if (y !== null) {
      const I = (D = fe[y]) == null ? void 0 : D.id;
      if (I) {
        const ue = l ?? oe, ge = t.findIndex((Ae) => ue(Ae) === I);
        w(ge >= 0 ? ge : null);
      }
    }
    G(t);
  }, [t]), f.useEffect(() => () => {
    $.current && cancelAnimationFrame($.current);
  }, []);
  const U = f.useRef(/* @__PURE__ */ new WeakMap()), Z = f.useRef(0), oe = f.useCallback((D) => {
    if (typeof D != "object" || D === null) return String(Z.current++);
    const I = D;
    return U.current.has(I) || U.current.set(I, String(Z.current++)), U.current.get(I);
  }, []);
  f.useEffect(() => {
    if (!k) {
      const D = setTimeout(() => Y(null), 200);
      return () => clearTimeout(D);
    }
  }, [k]);
  const ie = qI(
    Gd(Ic, { activationConstraint: { distance: 5 } }),
    Gd(Ac, { coordinateGetter: Rk })
  ), Pe = f.useMemo(
    () => ({
      id: "_select",
      header: () => null,
      cell: ({ row: D }) => /* @__PURE__ */ z(xn, { children: [
        /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m("span", { className: "inline-flex items-center", children: /* @__PURE__ */ m(
          C_,
          {
            checked: D.getIsSelected(),
            onChange: D.getToggleSelectedHandler(),
            onClick: (I) => {
              I.stopPropagation(), D.toggleSelected();
            }
          }
        ) }) }),
        /* @__PURE__ */ z(Cn, { className: "flex items-center gap-1.5", children: [
          "Select row",
          /* @__PURE__ */ m("kbd", { className: "rounded border border-selected/30 bg-selected/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "x" })
        ] })
      ] }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 16
    }),
    [i]
  ), xe = f.useMemo(
    () => ({
      id: "_reorder",
      header: () => null,
      cell: () => null,
      // rendered inside SortableRow directly
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 16
    }),
    []
  ), Qe = f.useMemo(
    () => [
      ...a ? [xe] : [],
      Pe,
      ...e
    ],
    [xe, Pe, e, a]
  ), ve = S_({
    data: F,
    columns: Qe,
    getRowId: l ?? oe,
    getCoreRowModel: d_(),
    getPaginationRowModel: v_(),
    getSortedRowModel: y_(),
    getFilteredRowModel: g_(),
    onSortingChange: u,
    onColumnFiltersChange: h,
    onRowSelectionChange: g,
    enableRowSelection: !0,
    initialState: {
      pagination: { pageSize: c ? Number.MAX_SAFE_INTEGER : s }
    },
    state: {
      sorting: d,
      columnFilters: p,
      rowSelection: v
    }
  }), fe = ve.getRowModel().rows, ut = ve.getSelectedRowModel().rows.map((D) => D.original), Ne = ut.length, Fe = Ne > 0 ? ut : y !== null && fe[y] ? [fe[y].original] : [], tn = Fe.length === 0 ? "Actions" : Fe.length === 1 ? i ? i(Fe[0]) : "1 row" : `${Fe.length} rows`, je = (D) => {
    const I = String(D.active.id);
    O(I), N(0), se.current = 0;
    const ue = fe.find((ge) => ge.id === I);
    B(((ue == null ? void 0 : ue.getIsSelected()) ?? !1) && Ne > 1);
  }, Mt = (D) => {
    K && (se.current = D.delta.y, N(D.delta.y));
  }, Vn = f.useCallback((D) => {
    var Te;
    if (y === null) return;
    const I = (Te = fe[y]) == null ? void 0 : Te.id;
    if (!I) return;
    const { pageIndex: ue, pageSize: ge } = ve.getState().pagination, Ae = ue * ge, We = D.findIndex((_e) => oe(_e) === I) - Ae;
    w(We >= 0 ? We : null);
  }, [y, fe, ve, oe]), kr = (D) => {
    const { active: I, over: ue } = D, ge = se.current;
    O(null), B(!1), N(0), se.current = 0;
    const Ae = fe.find((Te) => Te.id === I.id);
    if (((Ae == null ? void 0 : Ae.getIsSelected()) ?? !1) && Ne > 1) {
      const Te = M.current, _e = fe.findIndex((Me) => Me.id === I.id), De = fe.map((Me, ke) => Me.getIsSelected() ? -1 : ke).filter((Me) => Me !== -1), ae = De.filter((Me) => Me < _e).length, Oe = Math.max(0, Math.min(
        Math.round(ae + ge / Te),
        De.length
      )), re = new Set(ve.getSelectedRowModel().rows.map((Me) => Me.id)), Se = F.filter((Me) => re.has(oe(Me))), be = F.filter((Me) => !re.has(oe(Me))), Ce = [
        ...be.slice(0, Oe),
        ...Se,
        ...be.slice(Oe)
      ];
      j(!0), $.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
        $.current = requestAnimationFrame(() => {
          j(!1);
        });
      }), Vn(Ce), G(Ce), a == null || a(Ce);
    } else {
      if (!ue || I.id === ue.id) return;
      const Te = F.findIndex((ae) => oe(ae) === I.id), _e = F.findIndex((ae) => oe(ae) === ue.id);
      if (Te === -1 || _e === -1) return;
      const De = Nc(F, Te, _e);
      Vn(De), G(De), a == null || a(De);
    }
  };
  f.useEffect(() => {
    const D = (I) => {
      var ge, Ae, We, Te;
      const ue = I.target;
      if (!(ue.tagName === "INPUT" || ue.tagName === "TEXTAREA" || ue.tagName === "SELECT" || ue.isContentEditable)) {
        if ((I.metaKey || I.ctrlKey) && I.key === "k") {
          if (!(o != null && o.length) || !Fe.length) return;
          I.preventDefault(), W(!0);
        } else if ((I.metaKey || I.ctrlKey) && I.key === "a")
          I.preventDefault(), ve.toggleAllPageRowsSelected(!0);
        else if ((I.metaKey || I.ctrlKey) && I.key === "ArrowUp")
          I.preventDefault(), H.current = !0, b("keyboard"), w(0);
        else if ((I.metaKey || I.ctrlKey) && I.key === "ArrowDown")
          I.preventDefault(), H.current = !0, b("keyboard"), w(fe.length - 1);
        else if (I.key === "Tab" && !I.shiftKey && y === fe.length - 1)
          w(null);
        else if (I.key === "Tab" && I.shiftKey && y === 0)
          w(null);
        else if (I.key === "ArrowDown" && !I.altKey || I.key === "Tab" && !I.shiftKey && y !== null && y !== fe.length - 1)
          I.preventDefault(), H.current = !0, b("keyboard"), w(
            (_e) => _e === null ? 0 : Math.min(_e + 1, fe.length - 1)
          );
        else if (I.key === "ArrowUp" && !I.altKey || I.key === "Tab" && I.shiftKey && y !== null && y !== 0)
          I.preventDefault(), H.current = !0, b("keyboard"), w(
            (_e) => _e === null ? 0 : Math.max(_e - 1, 0)
          );
        else if ((I.key === " " || I.key === "x") && y !== null)
          I.preventDefault(), (ge = fe[y]) == null || ge.toggleSelected();
        else if (I.key === "Enter" && y !== null && (o != null && o.length) && Fe.length)
          I.preventDefault(), W(!0);
        else if (I.key === "Escape")
          E ? R(null) : Ne > 0 ? ve.resetRowSelection() : w(null);
        else if (o != null && o.length) {
          const De = o.flatMap((ae) => ae.subActions ?? []).find(
            (ae) => ae.shortcutKeys && ae.shortcutKeys.key === I.key && !!ae.shortcutKeys.altKey === I.altKey && !!ae.shortcutKeys.shiftKey === I.shiftKey && !!ae.shortcutKeys.metaKey === I.metaKey && !!ae.shortcutKeys.ctrlKey === I.ctrlKey
          );
          if (De) {
            if (I.preventDefault(), !Fe.length) return;
            H.current = !0, (Ae = De.onClick) == null || Ae.call(De, Fe);
          } else if (!I.metaKey && !I.ctrlKey && !I.altKey) {
            const ae = o.find((Oe) => Oe.shortcut === I.key);
            if (ae) {
              if (I.preventDefault(), !Fe.length) return;
              (We = ae.subActions) != null && We.length ? (Y(ae), W(!0)) : (Te = ae.onClick) == null || Te.call(ae, Fe);
            }
          }
        }
      }
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [o, fe, y, Ne, E, ve]), f.useEffect(() => {
    const D = () => {
      H.current = !1;
    };
    return window.addEventListener("mousemove", D), () => window.removeEventListener("mousemove", D);
  }, []), f.useEffect(() => {
    var I;
    if (y === null) return;
    const D = (I = P.current) == null ? void 0 : I.querySelector(`[data-display-index="${y}"]`);
    D == null || D.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [y]), f.useEffect(() => {
    if (!E) {
      T(null);
      return;
    }
    const D = () => {
      R(null), T(null);
    };
    return window.addEventListener("click", D), window.addEventListener("scroll", D, !0), () => {
      window.removeEventListener("click", D), window.removeEventListener("scroll", D, !0);
    };
  }, [E]);
  const dn = (D, I) => {
    o != null && o.length && (D.preventDefault(), w(I), R({ x: D.clientX, y: D.clientY, rowIndex: I }));
  }, At = () => {
    if (E === null) return ut;
    const D = fe[E.rowIndex];
    return !D || ut.length > 0 && D.getIsSelected() ? ut : [D.original];
  }, Dt = ve.getState().pagination.pageIndex, It = ve.getPageCount();
  let mt = null;
  if (K && Q) {
    const D = M.current, I = fe.findIndex((ue) => ue.id === Q);
    if (I !== -1) {
      const ue = fe.map((De, ae) => De.getIsSelected() ? ae : -1).filter((De) => De !== -1), ge = fe.map((De, ae) => De.getIsSelected() ? -1 : ae).filter((De) => De !== -1), Ae = ue.length, Te = ge.filter((De) => De < I).length + L / D, _e = Math.max(0, Math.min(Math.round(Te), ge.length));
      mt = fe.map((De, ae) => {
        if (De.getIsSelected()) {
          const Se = ue.indexOf(ae);
          return (Math.max(0, Math.min(Te, ge.length)) + Se - ae) * D;
        }
        const Oe = ge.indexOf(ae);
        return ((Oe < _e ? Oe : Oe + Ae) - ae) * D;
      });
    }
  }
  const gt = fe.map((D) => D.id);
  return /* @__PURE__ */ m(yr, { children: /* @__PURE__ */ z("div", { className: "flex flex-col gap-3", children: [
    n && /* @__PURE__ */ m("div", { className: "flex items-center", children: /* @__PURE__ */ m(
      Vi,
      {
        placeholder: r,
        value: ((St = ve.getColumn(n)) == null ? void 0 : St.getFilterValue()) ?? "",
        onChange: (D) => {
          var I;
          return (I = ve.getColumn(n)) == null ? void 0 : I.setFilterValue(D.target.value);
        },
        className: "max-w-sm h-8 text-sm"
      }
    ) }),
    /* @__PURE__ */ m(
      "div",
      {
        ref: S,
        tabIndex: 0,
        className: "sr-only",
        onFocus: (D) => {
          var I;
          fe.length !== 0 && ((I = C.current) != null && I.contains(D.relatedTarget) || (w(0), b("keyboard")));
        }
      }
    ),
    /* @__PURE__ */ m(
      JN,
      {
        sensors: ie,
        collisionDetection: JI,
        modifiers: [lk, ak],
        onDragStart: je,
        onDragMove: Mt,
        onDragEnd: kr,
        children: /* @__PURE__ */ m("div", { ref: P, children: /* @__PURE__ */ z(Ty, { className: "border-separate border-spacing-0", children: [
          /* @__PURE__ */ m(My, { children: ve.getHeaderGroups().map((D) => /* @__PURE__ */ m(Di, { className: "hover:bg-transparent", children: D.headers.map((I) => /* @__PURE__ */ m(
            Dy,
            {
              style: I.column.columnDef.size ? { width: I.column.columnDef.size } : void 0,
              className: J(
                "text-xs font-medium text-muted-foreground uppercase tracking-wide h-8",
                (I.id === "_select" || I.id === "_reorder") && "w-6 !pl-2 !pr-0",
                I.column.getCanSort() && "cursor-pointer select-none"
              ),
              onClick: I.column.getCanSort() ? I.column.getToggleSortingHandler() : void 0,
              children: I.isPlaceholder ? null : I.id === "_select" || I.id === "_reorder" ? Oi(I.column.columnDef.header, I.getContext()) : /* @__PURE__ */ z("div", { className: "flex items-center gap-1", children: [
                Oi(I.column.columnDef.header, I.getContext()),
                I.column.getCanSort() && /* @__PURE__ */ m(
                  zS,
                  {
                    className: J(
                      "h-3 w-3 transition-opacity",
                      I.column.getIsSorted() ? "opacity-100 text-foreground" : "opacity-30"
                    )
                  }
                )
              ] })
            },
            I.id
          )) }, D.id)) }),
          /* @__PURE__ */ m(hk, { items: gt, strategy: fk, children: /* @__PURE__ */ m(Ay, { children: fe.length ? fe.map((D, I) => {
            var We, Te;
            const ue = D.getIsSelected(), ge = ((We = fe[I - 1]) == null ? void 0 : We.getIsSelected()) ?? !1, Ae = ((Te = fe[I + 1]) == null ? void 0 : Te.getIsSelected()) ?? !1;
            return /* @__PURE__ */ m(
              R_,
              {
                row: D,
                displayIndex: I,
                activeRowIndex: y,
                activeRowSource: x,
                reorderable: !!a,
                customTranslateY: mt ? mt[I] : null,
                isDragGroup: K && D.getIsSelected(),
                justDropped: _,
                onMeasureHeight: I === 0 ? (_e) => {
                  M.current = _e;
                } : void 0,
                onRowClick: (_e) => {
                  b("mouse"), w(_e), D.toggleSelected();
                },
                onRowMouseEnter: (_e) => {
                  H.current || (b("mouse"), w(_e));
                },
                onContextMenu: dn
              },
              `${D.id}-${ue ? 1 : 0}-${ge ? 1 : 0}-${Ae ? 1 : 0}`
            );
          }) : /* @__PURE__ */ m(Di, { children: /* @__PURE__ */ m(
            Cc,
            {
              colSpan: Qe.length,
              className: "h-24 text-center text-muted-foreground text-sm",
              children: "No results found."
            }
          ) }) }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        ref: C,
        className: "flex items-center justify-between",
        onKeyDown: (D) => {
          var I, ue;
          D.key === "Tab" && D.shiftKey && fe.length > 0 && Array.from(
            ((I = C.current) == null ? void 0 : I.querySelectorAll('button:not([disabled]),[tabindex="0"]')) ?? []
          )[0] === document.activeElement && (D.preventDefault(), D.stopPropagation(), w(fe.length - 1), b("keyboard"), (ue = S.current) == null || ue.focus());
        },
        children: [
          /* @__PURE__ */ z("p", { className: "text-xs text-muted-foreground", children: [
            ve.getFilteredRowModel().rows.length,
            " row",
            ve.getFilteredRowModel().rows.length !== 1 ? "s" : ""
          ] }),
          !c && /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ z("span", { className: "text-xs text-muted-foreground", children: [
              "Page ",
              Dt + 1,
              " of ",
              Math.max(It, 1)
            ] }),
            /* @__PURE__ */ z(
              pr,
              {
                variant: "outline",
                size: "icon",
                className: "h-7 w-7",
                onClick: () => ve.previousPage(),
                disabled: !ve.getCanPreviousPage(),
                children: [
                  /* @__PURE__ */ m(th, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ m("span", { className: "sr-only", children: "Previous page" })
                ]
              }
            ),
            /* @__PURE__ */ z(
              pr,
              {
                variant: "outline",
                size: "icon",
                className: "h-7 w-7",
                onClick: () => ve.nextPage(),
                disabled: !ve.getCanNextPage(),
                children: [
                  /* @__PURE__ */ m(Hr, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ m("span", { className: "sr-only", children: "Next page" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    E && (o == null ? void 0 : o.length) && ca(
      /* @__PURE__ */ z(qt, { children: [
        /* @__PURE__ */ m(
          "div",
          {
            style: { top: E.y, left: E.x },
            className: "fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
            onClick: (D) => D.stopPropagation(),
            children: o.map((D, I) => {
              var ue;
              return /* @__PURE__ */ z(
                "button",
                {
                  className: J(
                    "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                    D.destructive && "text-destructive hover:text-destructive focus:text-destructive",
                    (A == null ? void 0 : A.action) === D && "bg-accent"
                  ),
                  onMouseEnter: (ge) => {
                    var Ae;
                    if ((Ae = D.subActions) != null && Ae.length) {
                      const We = ge.currentTarget.getBoundingClientRect();
                      T({ action: D, x: We.right + 4, y: We.top });
                    } else
                      T(null);
                  },
                  onClick: () => {
                    var ge, Ae;
                    (ge = D.subActions) != null && ge.length || ((Ae = D.onClick) == null || Ae.call(D, At()), R(null), T(null));
                  },
                  children: [
                    D.icon,
                    /* @__PURE__ */ m("span", { className: "flex-1", children: D.label }),
                    D.shortcut && /* @__PURE__ */ m("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: D.shortcut }),
                    (ue = D.subActions) != null && ue.length ? /* @__PURE__ */ m(Hr, { className: "h-3 w-3 opacity-50" }) : null
                  ]
                },
                I
              );
            })
          }
        ),
        A && /* @__PURE__ */ m(
          "div",
          {
            style: { top: A.y, left: A.x },
            className: "fixed z-50 min-w-[140px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
            onClick: (D) => D.stopPropagation(),
            children: A.action.subActions.map((D, I) => /* @__PURE__ */ z(
              "button",
              {
                className: J(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                  D.destructive && "text-destructive hover:text-destructive focus:text-destructive"
                ),
                onClick: () => {
                  var ue;
                  (ue = D.onClick) == null || ue.call(D, At()), R(null), T(null);
                },
                children: [
                  D.icon,
                  /* @__PURE__ */ m("span", { className: "flex-1", children: D.label }),
                  D.shortcut && /* @__PURE__ */ m("span", { className: "flex items-center gap-0.5", children: D.shortcut.split("").map((ue, ge) => /* @__PURE__ */ m("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: ue }, ge)) })
                ]
              },
              I
            ))
          }
        )
      ] }),
      document.body
    ),
    Ne > 0 && ca(
      /* @__PURE__ */ z("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg", children: [
        /* @__PURE__ */ z("span", { className: "px-2 text-sm font-medium", children: [
          Ne,
          " selected"
        ] }),
        /* @__PURE__ */ m(yr, { children: /* @__PURE__ */ z(xn, { children: [
          /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m(
            "button",
            {
              className: "flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              onClick: () => ve.resetRowSelection(),
              children: /* @__PURE__ */ m(El, { className: "h-3.5 w-3.5" })
            }
          ) }),
          /* @__PURE__ */ z(Cn, { className: "flex items-center gap-1.5 border border-primary/20", children: [
            "Clear selected",
            /* @__PURE__ */ m("kbd", { className: "rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "Esc" })
          ] })
        ] }) }),
        o != null && o.length ? /* @__PURE__ */ z(
          "button",
          {
            className: "ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            onClick: () => W(!0),
            children: [
              /* @__PURE__ */ m(ZS, { className: "h-3.5 w-3.5" }),
              "Actions"
            ]
          }
        ) : null
      ] }),
      document.body
    ),
    o != null && o.length ? /* @__PURE__ */ z(
      Ry,
      {
        open: k,
        onOpenChange: W,
        commandKey: (X == null ? void 0 : X.label) ?? "root",
        title: "Row Actions",
        description: "Choose an action to apply to selected rows",
        children: [
          /* @__PURE__ */ m(
            bc,
            {
              autoFocus: !0,
              placeholder: X ? `Search ${X.label.toLowerCase()}...` : "Type a command or search...",
              onKeyDown: (D) => {
                D.key === "Backspace" && D.target.value === "" && Y(null);
              }
            }
          ),
          /* @__PURE__ */ z(xc, { children: [
            /* @__PURE__ */ m(Sc, { children: "No actions available." }),
            X ? /* @__PURE__ */ m(Mi, { heading: /* @__PURE__ */ z("span", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ m("span", { children: X.label }),
              /* @__PURE__ */ m("span", { className: "font-normal text-muted-foreground", children: tn })
            ] }), children: X.subActions.map((D, I) => /* @__PURE__ */ z(
              Ai,
              {
                onSelect: () => {
                  var ue;
                  (ue = D.onClick) == null || ue.call(D, Fe), W(!1), Y(null);
                },
                className: J(D.destructive && "text-destructive"),
                children: [
                  D.icon,
                  /* @__PURE__ */ m("span", { className: "flex-1", children: D.label }),
                  D.shortcut && /* @__PURE__ */ m("span", { className: "flex items-center gap-0.5", children: D.shortcut.split("").map((ue, ge) => /* @__PURE__ */ m("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: ue }, ge)) })
                ]
              },
              I
            )) }) : /* @__PURE__ */ m(Mi, { heading: tn, children: o.map((D, I) => {
              var ue;
              return /* @__PURE__ */ z(
                Ai,
                {
                  onSelect: () => {
                    var ge, Ae;
                    (ge = D.subActions) != null && ge.length ? Y(D) : ((Ae = D.onClick) == null || Ae.call(D, Fe), W(!1));
                  },
                  className: J(D.destructive && "text-destructive"),
                  children: [
                    D.icon,
                    /* @__PURE__ */ m("span", { className: "flex-1", children: D.label }),
                    D.shortcut && /* @__PURE__ */ m("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: D.shortcut }),
                    (ue = D.subActions) != null && ue.length ? /* @__PURE__ */ m(Hr, { className: "h-3.5 w-3.5 text-muted-foreground" }) : null
                  ]
                },
                I
              );
            }) })
          ] })
        ]
      }
    ) : null
  ] }) });
}
function uw({
  item: e,
  isActive: t,
  collapsed: n,
  depth: r = 0,
  onActiveChange: o
}) {
  const [i, s] = f.useState(!0), a = e.icon, c = /* @__PURE__ */ z(
    "button",
    {
      onClick: () => {
        e.children && s((d) => !d), e.onClick && e.onClick(), o && o(e.id);
      },
      className: J(
        "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
        r > 0 && "ml-4 w-[calc(100%-1rem)]",
        t ? "bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
        n && "justify-center px-0"
      ),
      children: [
        a && /* @__PURE__ */ m(
          a,
          {
            className: J(
              "shrink-0 transition-colors",
              n ? "h-4.5 w-4.5" : "h-4 w-4",
              t ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            )
          }
        ),
        !n && /* @__PURE__ */ z(qt, { children: [
          /* @__PURE__ */ m("span", { className: "flex-1 truncate text-left", children: e.label }),
          e.badge !== void 0 && /* @__PURE__ */ m("span", { className: "ml-auto text-xs tabular-nums text-muted-foreground", children: e.badge })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ z("div", { children: [
    n ? /* @__PURE__ */ m(yr, { delayDuration: 0, children: /* @__PURE__ */ z(xn, { children: [
      /* @__PURE__ */ m(Sn, { asChild: !0, children: c }),
      /* @__PURE__ */ m(Cn, { side: "right", children: /* @__PURE__ */ m("p", { children: e.label }) })
    ] }) }) : c,
    !n && e.children && i && /* @__PURE__ */ m("div", { className: "mt-0.5 space-y-0.5", children: e.children.map((d) => /* @__PURE__ */ m(
      uw,
      {
        item: d,
        isActive: !1,
        collapsed: n,
        depth: r + 1,
        onActiveChange: o
      },
      d.id
    )) })
  ] });
}
function E_(e) {
  return e.id.startsWith("separator");
}
function Y_({
  items: e,
  activeId: t,
  onActiveChange: n,
  collapsed: r = !1,
  onCollapsedChange: o,
  header: i,
  footer: s
}) {
  const a = [];
  let l = [];
  for (const c of e)
    E_(c) ? (a.push(l), l = []) : l.push(c);
  return a.push(l), /* @__PURE__ */ z(
    "div",
    {
      className: J(
        "flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        r ? "w-12" : "w-56"
      ),
      children: [
        i && /* @__PURE__ */ m("div", { className: J("shrink-0 border-b border-sidebar-border", r ? "px-2 py-3" : "px-3 py-3"), children: i }),
        /* @__PURE__ */ m("div", { className: "flex-1 overflow-y-auto py-2", children: a.map((c, d) => /* @__PURE__ */ z(f.Fragment, { children: [
          d > 0 && /* @__PURE__ */ m(fh, { className: "my-2 bg-sidebar-border" }),
          /* @__PURE__ */ m("nav", { className: J("space-y-0.5", r ? "px-1" : "px-2"), children: c.map((u) => /* @__PURE__ */ m(
            uw,
            {
              item: u,
              isActive: t === u.id,
              collapsed: r,
              onActiveChange: n
            },
            u.id
          )) })
        ] }, d)) }),
        s && /* @__PURE__ */ m("div", { className: J("shrink-0 border-t border-sidebar-border", r ? "px-1 py-2" : "px-2 py-2"), children: s }),
        /* @__PURE__ */ m("div", { className: J("shrink-0 border-t border-sidebar-border", r ? "px-1 py-2" : "px-2 py-2"), children: /* @__PURE__ */ m(yr, { delayDuration: 0, children: /* @__PURE__ */ z(xn, { children: [
          /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m(
            "button",
            {
              onClick: () => o == null ? void 0 : o(!r),
              className: J(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors",
                r && "justify-center px-0"
              ),
              children: r ? /* @__PURE__ */ m(Hr, { className: "h-4 w-4" }) : /* @__PURE__ */ z(qt, { children: [
                /* @__PURE__ */ m(th, { className: "h-4 w-4" }),
                /* @__PURE__ */ m("span", { children: "Collapse" })
              ] })
            }
          ) }),
          r && /* @__PURE__ */ m(Cn, { side: "right", children: /* @__PURE__ */ m("p", { children: "Expand sidebar" }) })
        ] }) }) })
      ]
    }
  );
}
function P_({ filter: e, onSelect: t, onClose: n }) {
  const [r, o] = f.useState("");
  return e.type === "select" && e.options ? /* @__PURE__ */ z("div", { className: "space-y-1", children: [
    /* @__PURE__ */ z("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Select ",
      e.label
    ] }),
    e.options.map((i) => /* @__PURE__ */ m(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t(i.value, i.label), n();
        },
        children: i.label
      },
      i.value
    ))
  ] }) : e.type === "boolean" ? /* @__PURE__ */ z("div", { className: "space-y-1", children: [
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
  ] }) : /* @__PURE__ */ z("div", { className: "space-y-2", children: [
    /* @__PURE__ */ z("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Enter ",
      e.label
    ] }),
    /* @__PURE__ */ z("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ m(
        Vi,
        {
          value: r,
          onChange: (i) => o(i.target.value),
          placeholder: `Filter by ${e.label.toLowerCase()}...`,
          className: "h-7 text-sm",
          onKeyDown: (i) => {
            i.key === "Enter" && r.trim() && (t(r.trim(), r.trim()), n());
          },
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ m(
        pr,
        {
          size: "sm",
          className: "h-7 text-xs",
          onClick: () => {
            r.trim() && (t(r.trim(), r.trim()), n());
          },
          children: "Apply"
        }
      )
    ] })
  ] });
}
function X_({
  availableFilters: e,
  activeFilters: t,
  onAdd: n,
  onRemove: r,
  onClear: o,
  searchValue: i,
  onSearchChange: s,
  searchPlaceholder: a = "Search..."
}) {
  const [l, c] = f.useState(null), [d, u] = f.useState(!1), [p, h] = f.useState(!1), v = new Set(t.map((x) => x.filterId)), g = e.filter((x) => !v.has(x.id)), y = (x) => {
    h(!1), c(x), u(!0);
  }, w = (x, b) => {
    l && (n({
      filterId: l.id,
      label: `${l.label}: ${b}`,
      value: x
    }), c(null), u(!1));
  };
  return /* @__PURE__ */ z("div", { className: "flex items-center gap-2 flex-wrap", children: [
    s && /* @__PURE__ */ z("div", { className: "relative", children: [
      /* @__PURE__ */ m(cC, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ m(
        Vi,
        {
          value: i ?? "",
          onChange: (x) => s(x.target.value),
          placeholder: a,
          className: "h-7 pl-7 text-sm w-48"
        }
      )
    ] }),
    t.map((x) => /* @__PURE__ */ z(
      mb,
      {
        variant: "secondary",
        className: "flex items-center gap-1 h-6 px-2 text-xs font-normal rounded-md",
        children: [
          /* @__PURE__ */ m("span", { children: x.label }),
          /* @__PURE__ */ z(
            "button",
            {
              onClick: () => r(x.filterId),
              className: "ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity",
              children: [
                /* @__PURE__ */ m(El, { className: "h-3 w-3" }),
                /* @__PURE__ */ m("span", { className: "sr-only", children: "Remove filter" })
              ]
            }
          )
        ]
      },
      x.filterId
    )),
    /* @__PURE__ */ z(kP, { open: d, onOpenChange: (x) => {
      u(x), x || c(null);
    }, children: [
      /* @__PURE__ */ z(PP, { open: p, onOpenChange: h, children: [
        /* @__PURE__ */ m(_P, { asChild: !0, children: /* @__PURE__ */ m("span", {}) }),
        /* @__PURE__ */ m(TP, { asChild: !0, children: /* @__PURE__ */ z(
          pr,
          {
            variant: "ghost",
            size: "sm",
            className: J(
              "h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
              g.length === 0 && "opacity-50 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ m(aC, { className: "h-3.5 w-3.5" }),
              "Filter"
            ]
          }
        ) }),
        /* @__PURE__ */ z(Cg, { align: "start", className: "w-44", children: [
          /* @__PURE__ */ m(Eg, { className: "text-xs", children: "Add filter" }),
          /* @__PURE__ */ m(Pg, {}),
          g.map((x) => /* @__PURE__ */ z(
            Rg,
            {
              onClick: () => y(x),
              className: "text-sm",
              children: [
                /* @__PURE__ */ m(QS, { className: "h-3.5 w-3.5 mr-2 opacity-50" }),
                x.label
              ]
            },
            x.id
          )),
          g.length === 0 && /* @__PURE__ */ m("p", { className: "px-2 py-1.5 text-xs text-muted-foreground", children: "All filters active" })
        ] })
      ] }),
      l && /* @__PURE__ */ m(Tg, { align: "start", className: "w-64 p-2", children: /* @__PURE__ */ m(
        P_,
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
        onClick: o,
        className: "text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline",
        children: "Clear all"
      }
    )
  ] });
}
function q_({
  groups: e,
  placeholder: t = "Type a command or search...",
  open: n,
  onOpenChange: r,
  triggerShortcut: o = !0
}) {
  const [i, s] = f.useState(!1), a = n !== void 0, l = a ? n : i, c = f.useCallback(
    (d) => {
      a || s(d), r == null || r(d);
    },
    [a, r]
  );
  return f.useEffect(() => {
    if (!o) return;
    const d = (u) => {
      u.key === "k" && (u.metaKey || u.ctrlKey) && (u.preventDefault(), c(!l));
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [o, l, c]), /* @__PURE__ */ z(Ry, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ m(bc, { placeholder: t }),
    /* @__PURE__ */ z(xc, { children: [
      /* @__PURE__ */ m(Sc, { children: "No results found." }),
      e.map((d, u) => /* @__PURE__ */ z(f.Fragment, { children: [
        u > 0 && /* @__PURE__ */ m(Ey, {}),
        /* @__PURE__ */ m(Mi, { heading: d.label, children: d.items.map((p) => {
          const h = p.icon;
          return /* @__PURE__ */ z(
            Ai,
            {
              value: [p.label, ...p.keywords ?? []].join(" "),
              onSelect: () => {
                p.onSelect(), c(!1);
              },
              children: [
                h && /* @__PURE__ */ m(h, { className: "mr-2 h-4 w-4 opacity-70" }),
                /* @__PURE__ */ m("span", { children: p.label }),
                p.shortcut && /* @__PURE__ */ m(Py, { children: p.shortcut })
              ]
            },
            p.id
          );
        }) })
      ] }, d.label))
    ] })
  ] });
}
function Z_({ label: e, description: t, children: n, className: r }) {
  return /* @__PURE__ */ z("div", { className: J("flex items-center justify-between gap-6 py-3 px-4", r), children: [
    /* @__PURE__ */ z("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ m("p", { className: "text-sm font-medium text-foreground", children: e }),
      t && /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground mt-0.5", children: t })
    ] }),
    /* @__PURE__ */ m("div", { className: "shrink-0", children: n })
  ] });
}
function J_({ title: e, children: t, className: n }) {
  return /* @__PURE__ */ z("div", { className: J("space-y-0", n), children: [
    /* @__PURE__ */ m("h2", { className: "text-base font-semibold text-foreground mb-3", children: e }),
    /* @__PURE__ */ m("div", { className: "rounded-lg border border-border bg-card divide-y divide-border overflow-hidden", children: t })
  ] });
}
function Q_({ title: e = "Settings", children: t, className: n }) {
  return /* @__PURE__ */ z("div", { className: J("max-w-3xl mx-auto py-8 px-6 space-y-8", n), children: [
    /* @__PURE__ */ m("h1", { className: "text-2xl font-semibold text-foreground", children: e }),
    t
  ] });
}
const dw = f.createContext(void 0), T_ = "dkn2-ui-theme";
function fw() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function af(e) {
  return e === "system" ? fw() : e;
}
function eO({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = T_
}) {
  const [r, o] = f.useState(() => typeof window > "u" ? t : localStorage.getItem(n) ?? t), [i, s] = f.useState(
    () => af(r)
  );
  f.useEffect(() => {
    const c = document.documentElement, d = af(r);
    s(d), c.classList.remove("light", "dark"), c.classList.add(d);
  }, [r]), f.useEffect(() => {
    if (r !== "system") return;
    const c = window.matchMedia("(prefers-color-scheme: dark)"), d = () => {
      const u = fw();
      s(u), document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(u);
    };
    return c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [r]);
  const a = f.useCallback(
    (c) => {
      localStorage.setItem(n, c), o(c);
    },
    [n]
  ), l = f.useMemo(
    () => ({ theme: r, resolvedTheme: i, setTheme: a }),
    [r, i, a]
  );
  return /* @__PURE__ */ m(dw.Provider, { value: l, children: e });
}
function M_() {
  const e = f.useContext(dw);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const la = ["light", "dark", "system"], A_ = {
  light: dC,
  dark: iC,
  system: rC
}, lf = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme"
};
function tO() {
  const { theme: e, setTheme: t } = M_(), n = () => {
    const o = la.indexOf(e), i = la[(o + 1) % la.length];
    t(i);
  }, r = A_[e];
  return /* @__PURE__ */ m(yr, { delayDuration: 0, children: /* @__PURE__ */ z(xn, { children: [
    /* @__PURE__ */ m(Sn, { asChild: !0, children: /* @__PURE__ */ m(
      pr,
      {
        variant: "ghost",
        size: "icon",
        onClick: n,
        "aria-label": lf[e],
        children: /* @__PURE__ */ m(r, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ m(Cn, { children: /* @__PURE__ */ m("p", { children: lf[e] }) })
  ] }) });
}
export {
  mb as Badge,
  pr as Button,
  U_ as ColorPicker,
  Cy as Command,
  Ry as CommandDialog,
  Sc as CommandEmpty,
  Mi as CommandGroup,
  bc as CommandInput,
  Ai as CommandItem,
  xc as CommandList,
  q_ as CommandMenu,
  Ey as CommandSeparator,
  Py as CommandShortcut,
  K_ as DataTable,
  CP as Dialog,
  V_ as DialogClose,
  wg as DialogContent,
  Sg as DialogDescription,
  EP as DialogFooter,
  bg as DialogHeader,
  yg as DialogOverlay,
  RP as DialogPortal,
  xg as DialogTitle,
  F_ as DialogTrigger,
  PP as DropdownMenu,
  DP as DropdownMenuCheckboxItem,
  Cg as DropdownMenuContent,
  $_ as DropdownMenuGroup,
  Rg as DropdownMenuItem,
  Eg as DropdownMenuLabel,
  B_ as DropdownMenuPortal,
  H_ as DropdownMenuRadioGroup,
  IP as DropdownMenuRadioItem,
  Pg as DropdownMenuSeparator,
  NP as DropdownMenuShortcut,
  z_ as DropdownMenuSub,
  AP as DropdownMenuSubContent,
  MP as DropdownMenuSubTrigger,
  TP as DropdownMenuTrigger,
  X_ as FilterBar,
  Vi as Input,
  wb as Label,
  kP as Popover,
  j_ as PopoverAnchor,
  Tg as PopoverContent,
  _P as PopoverTrigger,
  OP as ScrollArea,
  Mg as ScrollBar,
  k_ as Select,
  hC as SelectContent,
  __ as SelectGroup,
  gC as SelectItem,
  mC as SelectLabel,
  rh as SelectScrollDownButton,
  nh as SelectScrollUpButton,
  vC as SelectSeparator,
  pC as SelectTrigger,
  O_ as SelectValue,
  fh as Separator,
  Q_ as SettingsPage,
  Z_ as SettingsRow,
  J_ as SettingsSection,
  Y_ as SideMenu,
  CC as Switch,
  Ty as Table,
  Ay as TableBody,
  iI as TableCaption,
  Cc as TableCell,
  oI as TableFooter,
  Dy as TableHead,
  My as TableHeader,
  Di as TableRow,
  eO as ThemeProvider,
  tO as ThemeToggle,
  G_ as Toaster,
  xn as Tooltip,
  Cn as TooltipContent,
  yr as TooltipProvider,
  Sn as TooltipTrigger,
  hb as badgeVariants,
  pb as buttonVariants,
  J as cn,
  M_ as useTheme
};
