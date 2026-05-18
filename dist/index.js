import { jsx as g, jsxs as z, Fragment as jt } from "react/jsx-runtime";
import * as f from "react";
import V, { useLayoutEffect as ul, useState as $e, forwardRef as dl, createElement as ti, createContext as It, useRef as fe, useEffect as he, useContext as De, useId as vb, useCallback as Ne, useMemo as ve, Fragment as ff, useInsertionEffect as pf, Component as yb, memo as bb, useReducer as wb } from "react";
import * as Ni from "react-dom";
import hf, { unstable_batchedUpdates as Ro, createPortal as fl } from "react-dom";
function Fc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function st(...e) {
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
function de(...e) {
  return f.useCallback(st(...e), e);
}
var xb = Symbol.for("react.lazy"), ni = f[" use ".trim().toString()];
function Sb(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function mf(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === xb && "_payload" in e && Sb(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Ii(e) {
  const t = /* @__PURE__ */ Cb(e), n = f.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    mf(i) && typeof ni == "function" && (i = ni(i._payload));
    const a = f.Children.toArray(i), l = a.find(Eb);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var gf = /* @__PURE__ */ Ii("Slot");
// @__NO_SIDE_EFFECTS__
function Cb(e) {
  const t = f.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (mf(o) && typeof ni == "function" && (o = ni(o._payload)), f.isValidElement(o)) {
      const s = Tb(o), a = Pb(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Rb = Symbol("radix.slottable");
function Eb(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Rb;
}
function Pb(e, t) {
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
function Tb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function vf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function yf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vf(e)) && (r && (r += " "), r += t);
  return r;
}
const Vc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $c = yf, bf = (e, t) => (n) => {
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
    return Object.entries(h).every((m) => {
      let [v, y] = m;
      return Array.isArray(y) ? y.includes({
        ...i,
        ...a
      }[v]) : {
        ...i,
        ...a
      }[v] === y;
    }) ? [
      ...c,
      u,
      p
    ] : c;
  }, []);
  return $c(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Mb = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Ab = (e, t) => ({
  classGroupId: e,
  validator: t
}), wf = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), ri = "-", Bc = [], Db = "arbitrary..", Nb = (e) => {
  const t = kb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Ib(s);
      const a = s.split(ri), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return xf(a, l, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = r[s], c = n[s];
        return l ? c ? Mb(c, l) : l : c || Bc;
      }
      return n[s] || Bc;
    }
  };
}, xf = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const c = xf(e, t + 1, i);
    if (c) return c;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(ri) : e.slice(t).join(ri), l = s.length;
  for (let c = 0; c < l; c++) {
    const d = s[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Ib = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Db + r : void 0;
})(), kb = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return _b(n, t);
}, _b = (e, t) => {
  const n = wf();
  for (const r in e) {
    const o = e[r];
    pl(o, n, r, t);
  }
  return n;
}, pl = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    Ob(s, t, n, r);
  }
}, Ob = (e, t, n, r) => {
  if (typeof e == "string") {
    Lb(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Fb(e, t, n, r);
    return;
  }
  Vb(e, t, n, r);
}, Lb = (e, t, n) => {
  const r = e === "" ? t : Sf(t, e);
  r.classGroupId = n;
}, Fb = (e, t, n, r) => {
  if ($b(e)) {
    pl(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Ab(n, e));
}, Vb = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    pl(l, Sf(t, a), n, r);
  }
}, Sf = (e, t) => {
  let n = e;
  const r = t.split(ri), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = wf(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, $b = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Bb = (e) => {
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
}, ca = "!", zc = ":", zb = [], Hc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Hb = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let v = 0; v < d; v++) {
      const y = o[v];
      if (s === 0 && a === 0) {
        if (y === zc) {
          i.push(o.slice(l, v)), l = v + 1;
          continue;
        }
        if (y === "/") {
          c = v;
          continue;
        }
      }
      y === "[" ? s++ : y === "]" ? s-- : y === "(" ? a++ : y === ")" && a--;
    }
    const u = i.length === 0 ? o : o.slice(l);
    let p = u, h = !1;
    u.endsWith(ca) ? (p = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(ca) && (p = u.slice(1), h = !0)
    );
    const m = c && c > l ? c - l : void 0;
    return Hc(i, h, p, m);
  };
  if (t) {
    const o = t + zc, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Hc(zb, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, jb = (e) => {
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
}, Wb = (e) => ({
  cache: Bb(e.cacheSize),
  parseClassName: Hb(e),
  sortModifiers: jb(e),
  ...Nb(e)
}), Gb = /\s+/, Ub = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(Gb);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: u,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: v
    } = n(d);
    if (u) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!v, b = r(y ? m.substring(0, v) : m);
    if (!b) {
      if (!y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(m), !b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"), w = h ? x + ca : x, S = w + b;
    if (s.indexOf(S) > -1)
      continue;
    s.push(S);
    const C = o(b, y);
    for (let R = 0; R < C.length; ++R) {
      const P = C[R];
      s.push(w + P);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Kb = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Cf(n)) && (o && (o += " "), o += r);
  return o;
}, Cf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Cf(e[r])) && (n && (n += " "), n += t);
  return n;
}, Yb = (e, ...t) => {
  let n, r, o, i;
  const s = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = Wb(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = Ub(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(Kb(...l));
}, Xb = [], Le = (e) => {
  const t = (n) => n[e] || Xb;
  return t.isThemeGetter = !0, t;
}, Rf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ef = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qb = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Zb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ew = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, sn = (e) => qb.test(e), ue = (e) => !!e && !Number.isNaN(Number(e)), an = (e) => !!e && Number.isInteger(Number(e)), ys = (e) => e.endsWith("%") && ue(e.slice(0, -1)), qt = (e) => Zb.test(e), Pf = () => !0, nw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jb.test(e) && !Qb.test(e)
), hl = () => !1, rw = (e) => ew.test(e), ow = (e) => tw.test(e), iw = (e) => !J(e) && !ee(e), sw = (e) => Cn(e, Af, hl), J = (e) => Rf.test(e), In = (e) => Cn(e, Df, nw), jc = (e) => Cn(e, hw, ue), aw = (e) => Cn(e, If, Pf), lw = (e) => Cn(e, Nf, hl), Wc = (e) => Cn(e, Tf, hl), cw = (e) => Cn(e, Mf, ow), Eo = (e) => Cn(e, kf, rw), ee = (e) => Ef.test(e), Ir = (e) => Gn(e, Df), uw = (e) => Gn(e, Nf), Gc = (e) => Gn(e, Tf), dw = (e) => Gn(e, Af), fw = (e) => Gn(e, Mf), Po = (e) => Gn(e, kf, !0), pw = (e) => Gn(e, If, !0), Cn = (e, t, n) => {
  const r = Rf.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Gn = (e, t, n = !1) => {
  const r = Ef.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Tf = (e) => e === "position" || e === "percentage", Mf = (e) => e === "image" || e === "url", Af = (e) => e === "length" || e === "size" || e === "bg-size", Df = (e) => e === "length", hw = (e) => e === "number", Nf = (e) => e === "family-name", If = (e) => e === "number" || e === "weight", kf = (e) => e === "shadow", mw = () => {
  const e = Le("color"), t = Le("font"), n = Le("text"), r = Le("font-weight"), o = Le("tracking"), i = Le("leading"), s = Le("breakpoint"), a = Le("container"), l = Le("spacing"), c = Le("radius"), d = Le("shadow"), u = Le("inset-shadow"), p = Le("text-shadow"), h = Le("drop-shadow"), m = Le("blur"), v = Le("perspective"), y = Le("aspect"), b = Le("ease"), x = Le("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], C = () => [...S(), ee, J], R = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], E = () => [ee, J, l], A = () => [sn, "full", "auto", ...E()], T = () => [an, "none", "subgrid", ee, J], k = () => ["auto", {
    span: ["full", an, ee, J]
  }, an, ee, J], B = () => [an, "auto", ee, J], U = () => ["auto", "min", "max", "fr", ee, J], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...E()], H = () => [sn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], O = () => [sn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], D = () => [sn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], _ = () => [e, ee, J], oe = () => [...S(), Gc, Wc, {
    position: [ee, J]
  }], M = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], F = () => ["auto", "cover", "contain", dw, sw, {
    size: [ee, J]
  }], W = () => [ys, Ir, In], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    ee,
    J
  ], $ = () => ["", ue, Ir, In], L = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [ue, ys, Gc, Wc], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    ee,
    J
  ], le = () => ["none", ue, ee, J], ie = () => ["none", ue, ee, J], ye = () => [ue, ee, J], me = () => [sn, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qt],
      breakpoint: [qt],
      color: [Pf],
      container: [qt],
      "drop-shadow": [qt],
      ease: ["in", "out", "in-out"],
      font: [iw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qt],
      shadow: [qt],
      spacing: ["px", ue],
      text: [qt],
      "text-shadow": [qt],
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
        aspect: ["auto", "square", sn, J, ee, y]
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
        columns: [ue, J, ee, a]
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
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
        z: [an, "auto", ee, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [sn, "full", "auto", a, ...E()]
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
        flex: [ue, sn, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ue, ee, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ue, ee, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [an, "first", "last", "none", ee, J]
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
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
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
        justify: [...j(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": j()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Z()]
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
        size: H()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...O()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...O()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...O()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...D()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...D()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...D()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...H()]
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
          ...H()
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
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...H()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Ir, In]
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
        font: [r, pw, aw]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ys, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [uw, lw, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [J]
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
        tracking: [o, ee, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ue, "none", ee, jc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee, J]
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
        list: ["disc", "decimal", "none", ee, J]
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
        placeholder: _()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: _()
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ue, "from-font", "auto", ee, In]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: _()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ue, "auto", ee, J]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, J]
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
        content: ["none", ee, J]
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
          }, an, ee, J],
          radial: ["", ee, J],
          conic: [an, ee, J]
        }, fw, cw]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: _()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: _()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": $()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
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
        "divide-y": $()
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
        border: [...L(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...L(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: _()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": _()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": _()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": _()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": _()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": _()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": _()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": _()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": _()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": _()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": _()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: _()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...L(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ue, ee, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ue, Ir, In]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: _()
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
          Po,
          Eo
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: _()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Po, Eo]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": _()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
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
        ring: _()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ue, In]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": _()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": _()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Po, Eo]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": _()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ue, ee, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "mask-linear": [ue]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": _()
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
        "mask-conic": [ue]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": _()
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
        mask: ["none", ee, J]
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
          ee,
          J
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
        brightness: [ue, ee, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue, ee, J]
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
          Po,
          Eo
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": _()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ue, ee, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ue, ee, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ue, ee, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ue, ee, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ue, ee, J]
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
          ee,
          J
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
        "backdrop-brightness": [ue, ee, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue, ee, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ue, ee, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ue, ee, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ue, ee, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ue, ee, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ue, ee, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ue, ee, J]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, J]
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
        duration: [ue, "initial", ee, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, ee, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ue, ee, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, ee, J]
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
        perspective: [v, ee, J]
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
        rotate: le()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": le()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": le()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": le()
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
        skew: ye()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ye()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ye()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ee, J, "", "none", "gpu", "cpu"]
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
        accent: _()
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
        caret: _()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, J]
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
        "will-change": ["auto", "scroll", "contents", "transform", ee, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ..._()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ue, Ir, In, jc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ..._()]
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
}, gw = /* @__PURE__ */ Yb(mw);
function q(...e) {
  return gw(yf(e));
}
const vw = bf(
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
), lr = f.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ g(
    r ? gf : "button",
    {
      className: q(vw({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  )
);
lr.displayName = "Button";
const yw = bf(
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
function bw({ className: e, variant: t, asChild: n = !1, ...r }) {
  return /* @__PURE__ */ g(n ? gf : "span", { className: q(yw({ variant: t }), e), ...r });
}
const ki = f.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ g(
    "input",
    {
      type: t,
      className: q(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ref: r,
      ...n
    }
  )
);
ki.displayName = "Input";
var ww = [
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
], xw = ww.reduce((e, t) => {
  const n = /* @__PURE__ */ Ii(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Sw = "Label", _f = f.forwardRef((e, t) => /* @__PURE__ */ g(
  xw.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
_f.displayName = Sw;
var Of = _f;
const Cw = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Of,
  {
    ref: n,
    className: q(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...t
  }
));
Cw.displayName = Of.displayName;
function ua(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Rw(e, t) {
  const n = f.createContext(t), r = (i) => {
    const { children: s, ...a } = i, l = f.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ g(n.Provider, { value: l, children: s });
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
function kt(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = f.createContext(s), l = n.length;
    n = [...n, s];
    const c = (u) => {
      var b;
      const { scope: p, children: h, ...m } = u, v = ((b = p == null ? void 0 : p[e]) == null ? void 0 : b[l]) || a, y = f.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ g(v.Provider, { value: y, children: h });
    };
    c.displayName = i + "Provider";
    function d(u, p) {
      var v;
      const h = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || a, m = f.useContext(h);
      if (m) return m;
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
  return o.scopeName = e, [r, Ew(o, ...t)];
}
function Ew(...e) {
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
  const t = /* @__PURE__ */ Pw(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(Mw);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Pw(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = Dw(o), a = Aw(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Tw = Symbol("radix.slottable");
function Mw(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Tw;
}
function Aw(e, t) {
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
function Dw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ml(e) {
  const t = e + "CollectionProvider", [n, r] = kt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: y, children: b } = v, x = V.useRef(null), w = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g(o, { scope: y, itemMap: w, collectionRef: x, children: b });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Uc(a), c = V.forwardRef(
    (v, y) => {
      const { scope: b, children: x } = v, w = i(a, b), S = de(y, w.collectionRef);
      return /* @__PURE__ */ g(l, { ref: S, children: x });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", p = /* @__PURE__ */ Uc(d), h = V.forwardRef(
    (v, y) => {
      const { scope: b, children: x, ...w } = v, S = V.useRef(null), C = de(y, S), R = i(d, b);
      return V.useEffect(() => (R.itemMap.set(S, { ref: S, ...w }), () => void R.itemMap.delete(S))), /* @__PURE__ */ g(p, { [u]: "", ref: C, children: x });
    }
  );
  h.displayName = d;
  function m(v) {
    const y = i(e + "CollectionConsumer", v);
    return V.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (R, P) => w.indexOf(R.ref.current) - w.indexOf(P.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: h },
    m,
    r
  ];
}
var Nw = f.createContext(void 0);
function _i(e) {
  const t = f.useContext(Nw);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function Iw(e) {
  const t = /* @__PURE__ */ kw(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(Ow);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function kw(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = Fw(o), a = Lw(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _w = Symbol("radix.slottable");
function Ow(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _w;
}
function Lw(e, t) {
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
function Fw(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Vw = [
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
], ce = Vw.reduce((e, t) => {
  const n = /* @__PURE__ */ Iw(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Lf(e, t) {
  e && Ni.flushSync(() => e.dispatchEvent(t));
}
function He(e) {
  const t = f.useRef(e);
  return f.useEffect(() => {
    t.current = e;
  }), f.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function $w(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Bw = "DismissableLayer", da = "dismissableLayer.update", zw = "dismissableLayer.pointerDownOutside", Hw = "dismissableLayer.focusOutside", Kc, Ff = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vr = f.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = f.useContext(Ff), [d, u] = f.useState(null), p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = f.useState({}), m = de(t, (P) => u(P)), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), x = d ? v.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= b, C = Gw((P) => {
      const E = P.target, A = [...c.branches].some((T) => T.contains(E));
      !S || A || (o == null || o(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, p), R = Uw((P) => {
      const E = P.target;
      [...c.branches].some((T) => T.contains(E)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, p);
    return $w((P) => {
      x === c.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, p), f.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Kc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Yc(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Kc);
        };
    }, [d, p, n, c]), f.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Yc());
    }, [d, c]), f.useEffect(() => {
      const P = () => h({});
      return document.addEventListener(da, P), () => document.removeEventListener(da, P);
    }, []), /* @__PURE__ */ g(
      ce.div,
      {
        ...l,
        ref: m,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
vr.displayName = Bw;
var jw = "DismissableLayerBranch", Ww = f.forwardRef((e, t) => {
  const n = f.useContext(Ff), r = f.useRef(null), o = de(t, r);
  return f.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ g(ce.div, { ...e, ref: o });
});
Ww.displayName = jw;
function Gw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Vf(
            zw,
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
function Uw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = f.useRef(!1);
  return f.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Vf(Hw, n, { originalEvent: i }, {
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
  const e = new CustomEvent(da);
  document.dispatchEvent(e);
}
function Vf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Lf(o, i) : o.dispatchEvent(i);
}
var bs = 0;
function Oi() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Xc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Xc()), bs++, () => {
      bs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), bs--;
    };
  }, []);
}
function Xc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ws = "focusScope.autoFocusOnMount", xs = "focusScope.autoFocusOnUnmount", qc = { bubbles: !1, cancelable: !0 }, Kw = "FocusScope", ro = f.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = f.useState(null), c = He(o), d = He(i), u = f.useRef(null), p = de(t, (v) => l(v)), h = f.useRef({
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
      let v = function(w) {
        if (h.paused || !a) return;
        const S = w.target;
        a.contains(S) ? u.current = S : ln(u.current, { select: !0 });
      }, y = function(w) {
        if (h.paused || !a) return;
        const S = w.relatedTarget;
        S !== null && (a.contains(S) || ln(u.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && ln(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", y);
      const x = new MutationObserver(b);
      return a && x.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), x.disconnect();
      };
    }
  }, [r, a, h.paused]), f.useEffect(() => {
    if (a) {
      Jc.add(h);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const b = new CustomEvent(ws, qc);
        a.addEventListener(ws, c), a.dispatchEvent(b), b.defaultPrevented || (Yw(Qw($f(a)), { select: !0 }), document.activeElement === v && ln(a));
      }
      return () => {
        a.removeEventListener(ws, c), setTimeout(() => {
          const b = new CustomEvent(xs, qc);
          a.addEventListener(xs, d), a.dispatchEvent(b), b.defaultPrevented || ln(v ?? document.body, { select: !0 }), a.removeEventListener(xs, d), Jc.remove(h);
        }, 0);
      };
    }
  }, [a, c, d, h]);
  const m = f.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
      if (y && b) {
        const x = v.currentTarget, [w, S] = Xw(x);
        w && S ? !v.shiftKey && b === S ? (v.preventDefault(), n && ln(w, { select: !0 })) : v.shiftKey && b === w && (v.preventDefault(), n && ln(S, { select: !0 })) : b === x && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ g(ce.div, { tabIndex: -1, ...s, ref: p, onKeyDown: m });
});
ro.displayName = Kw;
function Yw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ln(r, { select: t }), document.activeElement !== n) return;
}
function Xw(e) {
  const t = $f(e), n = Zc(t, e), r = Zc(t.reverse(), e);
  return [n, r];
}
function $f(e) {
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
    if (!qw(n, { upTo: t })) return n;
}
function qw(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Zw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ln(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Zw(e) && t && e.select();
  }
}
var Jc = Jw();
function Jw() {
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
function Qw(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ke = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, ex = f[" useId ".trim().toString()] || (() => {
}), tx = 0;
function Be(e) {
  const [t, n] = f.useState(ex());
  return Ke(() => {
    n((r) => r ?? String(tx++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const nx = ["top", "right", "bottom", "left"], vn = Math.min, ht = Math.max, oi = Math.round, To = Math.floor, zt = (e) => ({
  x: e,
  y: e
}), rx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fa(e, t, n) {
  return ht(e, vn(t, n));
}
function Jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qt(e) {
  return e.split("-")[0];
}
function yr(e) {
  return e.split("-")[1];
}
function gl(e) {
  return e === "x" ? "y" : "x";
}
function vl(e) {
  return e === "y" ? "height" : "width";
}
function Bt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function yl(e) {
  return gl(Bt(e));
}
function ox(e, t, n) {
  n === void 0 && (n = !1);
  const r = yr(e), o = yl(e), i = vl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ii(s)), [s, ii(s)];
}
function ix(e) {
  const t = ii(e);
  return [pa(e), t, pa(t)];
}
function pa(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const eu = ["left", "right"], tu = ["right", "left"], sx = ["top", "bottom"], ax = ["bottom", "top"];
function lx(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? tu : eu : t ? eu : tu;
    case "left":
    case "right":
      return t ? sx : ax;
    default:
      return [];
  }
}
function cx(e, t, n, r) {
  const o = yr(e);
  let i = lx(Qt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(pa)))), i;
}
function ii(e) {
  const t = Qt(e);
  return rx[t] + e.slice(t.length);
}
function ux(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bf(e) {
  return typeof e != "number" ? ux(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function si(e) {
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
  const i = Bt(t), s = yl(t), a = vl(s), l = Qt(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (yr(t)) {
    case "start":
      h[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && c ? -1 : 1);
      break;
  }
  return h;
}
async function dx(e, t) {
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
  } = Jt(t, e), m = Bf(h), y = a[p ? u === "floating" ? "reference" : "floating" : u], b = si(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), x = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = si(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (b.top - C.top + m.top) / S.y,
    bottom: (C.bottom - b.bottom + m.bottom) / S.y,
    left: (b.left - C.left + m.left) / S.x,
    right: (C.right - b.right + m.right) / S.x
  };
}
const fx = 50, px = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: dx
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = nu(c, r, l), p = r, h = 0;
  const m = {};
  for (let v = 0; v < i.length; v++) {
    const y = i[v];
    if (!y)
      continue;
    const {
      name: b,
      fn: x
    } = y, {
      x: w,
      y: S,
      data: C,
      reset: R
    } = await x({
      x: d,
      y: u,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, u = S ?? u, m[b] = {
      ...m[b],
      ...C
    }, R && h < fx && (h++, typeof R == "object" && (R.placement && (p = R.placement), R.rects && (c = R.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: u
    } = nu(c, p, l)), v = -1);
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: m
  };
}, hx = (e) => ({
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
    } = Jt(e, t) || {};
    if (c == null)
      return {};
    const u = Bf(d), p = {
      x: n,
      y: r
    }, h = yl(o), m = vl(h), v = await s.getDimensions(c), y = h === "y", b = y ? "top" : "left", x = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", S = i.reference[m] + i.reference[h] - p[h] - i.floating[m], C = p[h] - i.reference[h], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = R ? R[w] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(R))) && (P = a.floating[w] || i.floating[m]);
    const E = S / 2 - C / 2, A = P / 2 - v[m] / 2 - 1, T = vn(u[b], A), k = vn(u[x], A), B = T, U = P - v[m] - k, j = P / 2 - v[m] / 2 + E, Z = fa(B, j, U), I = !l.arrow && yr(o) != null && j !== Z && i.reference[m] / 2 - (j < B ? T : k) - v[m] / 2 < 0, H = I ? j < B ? j - B : j - U : 0;
    return {
      [h]: p[h] + H,
      data: {
        [h]: Z,
        centerOffset: j - Z - H,
        ...I && {
          alignmentOffset: H
        }
      },
      reset: I
    };
  }
}), mx = function(e) {
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
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...y
      } = Jt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Qt(o), x = Bt(a), w = Qt(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = p || (w || !v ? [ii(a)] : ix(a)), R = m !== "none";
      !p && R && C.push(...cx(a, v, m, S));
      const P = [a, ...C], E = await l.detectOverflow(t, y), A = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(E[b]), u) {
        const j = ox(o, s, S);
        A.push(E[j[0]], E[j[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: A
      }], !A.every((j) => j <= 0)) {
        var k, B;
        const j = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, Z = P[j];
        if (Z && (!(u === "alignment" ? x !== Bt(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((O) => Bt(O.placement) === x ? O.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: T
            },
            reset: {
              placement: Z
            }
          };
        let I = (B = T.filter((H) => H.overflows[0] <= 0).sort((H, O) => H.overflows[1] - O.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!I)
          switch (h) {
            case "bestFit": {
              var U;
              const H = (U = T.filter((O) => {
                if (R) {
                  const D = Bt(O.placement);
                  return D === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((D) => D > 0).reduce((D, _) => D + _, 0)]).sort((O, D) => O[1] - D[1])[0]) == null ? void 0 : U[0];
              H && (I = H);
              break;
            }
            case "initialPlacement":
              I = a;
              break;
          }
        if (o !== I)
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
function ru(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ou(e) {
  return nx.some((t) => e[t] >= 0);
}
const gx = function(e) {
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
      } = Jt(e, t);
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
}, zf = /* @__PURE__ */ new Set(["left", "top"]);
async function vx(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Qt(n), a = yr(n), l = Bt(n) === "y", c = zf.has(s) ? -1 : 1, d = i && l ? -1 : 1, u = Jt(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), l ? {
    x: h * d,
    y: p * c
  } : {
    x: p * c,
    y: h * d
  };
}
const yx = function(e) {
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
      } = t, l = await vx(t, e);
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
}, bx = function(e) {
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
      } = Jt(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, c), p = Bt(Qt(o)), h = gl(p);
      let m = d[h], v = d[p];
      if (s) {
        const b = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", w = m + u[b], S = m - u[x];
        m = fa(w, m, S);
      }
      if (a) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = v + u[b], S = v - u[x];
        v = fa(w, v, S);
      }
      const y = l.fn({
        ...t,
        [h]: m,
        [p]: v
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
}, wx = function(e) {
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
      } = Jt(e, t), d = {
        x: n,
        y: r
      }, u = Bt(o), p = gl(u);
      let h = d[p], m = d[u];
      const v = Jt(a, t), y = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const w = p === "y" ? "height" : "width", S = i.reference[p] - i.floating[w] + y.mainAxis, C = i.reference[p] + i.reference[w] - y.mainAxis;
        h < S ? h = S : h > C && (h = C);
      }
      if (c) {
        var b, x;
        const w = p === "y" ? "width" : "height", S = zf.has(Qt(o)), C = i.reference[u] - i.floating[w] + (S && ((b = s.offset) == null ? void 0 : b[u]) || 0) + (S ? 0 : y.crossAxis), R = i.reference[u] + i.reference[w] + (S ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (S ? y.crossAxis : 0);
        m < C ? m = C : m > R && (m = R);
      }
      return {
        [p]: h,
        [u]: m
      };
    }
  };
}, xx = function(e) {
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
      } = Jt(e, t), d = await s.detectOverflow(t, c), u = Qt(o), p = yr(o), h = Bt(o) === "y", {
        width: m,
        height: v
      } = i.floating;
      let y, b;
      u === "top" || u === "bottom" ? (y = u, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = u, y = p === "end" ? "top" : "bottom");
      const x = v - d.top - d.bottom, w = m - d.left - d.right, S = vn(v - d[y], x), C = vn(m - d[b], w), R = !t.middlewareData.shift;
      let P = S, E = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w), (r = t.middlewareData.shift) != null && r.enabled.y && (P = x), R && !p) {
        const T = ht(d.left, 0), k = ht(d.right, 0), B = ht(d.top, 0), U = ht(d.bottom, 0);
        h ? E = m - 2 * (T !== 0 || k !== 0 ? T + k : ht(d.left, d.right)) : P = v - 2 * (B !== 0 || U !== 0 ? B + U : ht(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: P
      });
      const A = await s.getDimensions(a.floating);
      return m !== A.width || v !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Li() {
  return typeof window < "u";
}
function br(e) {
  return Hf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ut(e) {
  var t;
  return (t = (Hf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hf(e) {
  return Li() ? e instanceof Node || e instanceof mt(e).Node : !1;
}
function At(e) {
  return Li() ? e instanceof Element || e instanceof mt(e).Element : !1;
}
function nn(e) {
  return Li() ? e instanceof HTMLElement || e instanceof mt(e).HTMLElement : !1;
}
function iu(e) {
  return !Li() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mt(e).ShadowRoot;
}
function oo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Sx(e) {
  return /^(table|td|th)$/.test(br(e));
}
function Fi(e) {
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
const Cx = /transform|translate|scale|rotate|perspective|filter/, Rx = /paint|layout|strict|content/, kn = (e) => !!e && e !== "none";
let Ss;
function bl(e) {
  const t = At(e) ? Dt(e) : e;
  return kn(t.transform) || kn(t.translate) || kn(t.scale) || kn(t.rotate) || kn(t.perspective) || !wl() && (kn(t.backdropFilter) || kn(t.filter)) || Cx.test(t.willChange || "") || Rx.test(t.contain || "");
}
function Ex(e) {
  let t = yn(e);
  for (; nn(t) && !cr(t); ) {
    if (bl(t))
      return t;
    if (Fi(t))
      return null;
    t = yn(t);
  }
  return null;
}
function wl() {
  return Ss == null && (Ss = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ss;
}
function cr(e) {
  return /^(html|body|#document)$/.test(br(e));
}
function Dt(e) {
  return mt(e).getComputedStyle(e);
}
function Vi(e) {
  return At(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yn(e) {
  if (br(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    iu(e) && e.host || // Fallback.
    Ut(e)
  );
  return iu(t) ? t.host : t;
}
function jf(e) {
  const t = yn(e);
  return cr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nn(t) && oo(t) ? t : jf(t);
}
function Ur(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = jf(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = mt(o);
  if (i) {
    const a = ha(s);
    return t.concat(s, s.visualViewport || [], oo(o) ? o : [], a && n ? Ur(a) : []);
  } else
    return t.concat(o, Ur(o, [], n));
}
function ha(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wf(e) {
  const t = Dt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = nn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = oi(n) !== i || oi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function xl(e) {
  return At(e) ? e : e.contextElement;
}
function ir(e) {
  const t = xl(e);
  if (!nn(t))
    return zt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Wf(t);
  let s = (i ? oi(n.width) : n.width) / r, a = (i ? oi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Px = /* @__PURE__ */ zt(0);
function Gf(e) {
  const t = mt(e);
  return !wl() || !t.visualViewport ? Px : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tx(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== mt(e) ? !1 : t;
}
function Bn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = xl(e);
  let s = zt(1);
  t && (r ? At(r) && (s = ir(r)) : s = ir(e));
  const a = Tx(i, n, r) ? Gf(i) : zt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i) {
    const p = mt(i), h = r && At(r) ? mt(r) : r;
    let m = p, v = ha(m);
    for (; v && r && h !== m; ) {
      const y = ir(v), b = v.getBoundingClientRect(), x = Dt(v), w = b.left + (v.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = b.top + (v.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, u *= y.y, l += w, c += S, m = mt(v), v = ha(m);
    }
  }
  return si({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function $i(e, t) {
  const n = Vi(e).scrollLeft;
  return t ? t.left + n : Bn(Ut(e)).left + n;
}
function Uf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - $i(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Mx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Ut(r), a = t ? Fi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = zt(1);
  const d = zt(0), u = nn(r);
  if ((u || !u && !i) && ((br(r) !== "body" || oo(s)) && (l = Vi(r)), u)) {
    const h = Bn(r);
    c = ir(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !u && !i ? Uf(s, l) : zt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + p.y
  };
}
function Ax(e) {
  return Array.from(e.getClientRects());
}
function Dx(e) {
  const t = Ut(e), n = Vi(e), r = e.ownerDocument.body, o = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $i(e);
  const a = -n.scrollTop;
  return Dt(r).direction === "rtl" && (s += ht(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const su = 25;
function Nx(e, t) {
  const n = mt(e), r = Ut(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = wl();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = $i(r);
  if (c <= 0) {
    const d = r.ownerDocument, u = d.body, p = getComputedStyle(u), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(r.clientWidth - u.clientWidth - h);
    m <= su && (i -= m);
  } else c <= su && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Ix(e, t) {
  const n = Bn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = nn(e) ? ir(e) : zt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
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
    r = Nx(e, n);
  else if (t === "document")
    r = Dx(Ut(e));
  else if (At(t))
    r = Ix(t, n);
  else {
    const o = Gf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return si(r);
}
function Kf(e, t) {
  const n = yn(e);
  return n === t || !At(n) || cr(n) ? !1 : Dt(n).position === "fixed" || Kf(n, t);
}
function kx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ur(e, [], !1).filter((a) => At(a) && br(a) !== "body"), o = null;
  const i = Dt(e).position === "fixed";
  let s = i ? yn(e) : e;
  for (; At(s) && !cr(s); ) {
    const a = Dt(s), l = bl(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || oo(s) && !l && Kf(e, s)) ? r = r.filter((d) => d !== s) : o = a, s = yn(s);
  }
  return t.set(e, r), r;
}
function _x(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Fi(t) ? [] : kx(t, this._c) : [].concat(n), r], a = au(t, s[0], o);
  let l = a.top, c = a.right, d = a.bottom, u = a.left;
  for (let p = 1; p < s.length; p++) {
    const h = au(t, s[p], o);
    l = ht(h.top, l), c = vn(h.right, c), d = vn(h.bottom, d), u = ht(h.left, u);
  }
  return {
    width: c - u,
    height: d - l,
    x: u,
    y: l
  };
}
function Ox(e) {
  const {
    width: t,
    height: n
  } = Wf(e);
  return {
    width: t,
    height: n
  };
}
function Lx(e, t, n) {
  const r = nn(t), o = Ut(t), i = n === "fixed", s = Bn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = zt(0);
  function c() {
    l.x = $i(o);
  }
  if (r || !r && !i)
    if ((br(t) !== "body" || oo(o)) && (a = Vi(t)), r) {
      const h = Bn(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Uf(o, a) : zt(0), u = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: u,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Cs(e) {
  return Dt(e).position === "static";
}
function lu(e, t) {
  if (!nn(e) || Dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ut(e) === n && (n = n.ownerDocument.body), n;
}
function Yf(e, t) {
  const n = mt(e);
  if (Fi(e))
    return n;
  if (!nn(e)) {
    let o = yn(e);
    for (; o && !cr(o); ) {
      if (At(o) && !Cs(o))
        return o;
      o = yn(o);
    }
    return n;
  }
  let r = lu(e, t);
  for (; r && Sx(r) && Cs(r); )
    r = lu(r, t);
  return r && cr(r) && Cs(r) && !bl(r) ? n : r || Ex(e) || n;
}
const Fx = async function(e) {
  const t = this.getOffsetParent || Yf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Lx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Vx(e) {
  return Dt(e).direction === "rtl";
}
const $x = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mx,
  getDocumentElement: Ut,
  getClippingRect: _x,
  getOffsetParent: Yf,
  getElementRects: Fx,
  getClientRects: Ax,
  getDimensions: Ox,
  getScale: ir,
  isElement: At,
  isRTL: Vx
};
function Xf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bx(e, t) {
  let n = null, r;
  const o = Ut(e);
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
    const m = To(u), v = To(o.clientWidth - (d + p)), y = To(o.clientHeight - (u + h)), b = To(d), w = {
      rootMargin: -m + "px " + -v + "px " + -y + "px " + -b + "px",
      threshold: ht(0, vn(1, l)) || 1
    };
    let S = !0;
    function C(R) {
      const P = R[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Xf(c, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function zx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = xl(e), d = o || i ? [...c ? Ur(c) : [], ...t ? Ur(t) : []] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const u = c && a ? Bx(c, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === c && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), c && !l && h.observe(c), t && h.observe(t));
  let m, v = l ? Bn(e) : null;
  l && y();
  function y() {
    const b = Bn(e);
    v && !Xf(v, b) && n(), v = b, m = requestAnimationFrame(y);
  }
  return n(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u == null || u(), (b = h) == null || b.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const Hx = yx, jx = bx, Wx = mx, Gx = xx, Ux = gx, cu = hx, Kx = wx, Yx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $x,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return px(e, t, {
    ...o,
    platform: i
  });
};
var Xx = typeof document < "u", qx = function() {
}, jo = Xx ? ul : qx;
function ai(e, t) {
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
        if (!ai(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !ai(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function uu(e, t) {
  const n = qf(e);
  return Math.round(t * n) / n;
}
function Rs(e) {
  const t = f.useRef(e);
  return jo(() => {
    t.current = e;
  }), t;
}
function Zx(e) {
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
  ai(p, r) || h(r);
  const [m, v] = f.useState(null), [y, b] = f.useState(null), x = f.useCallback((O) => {
    O !== R.current && (R.current = O, v(O));
  }, []), w = f.useCallback((O) => {
    O !== P.current && (P.current = O, b(O));
  }, []), S = i || m, C = s || y, R = f.useRef(null), P = f.useRef(null), E = f.useRef(d), A = l != null, T = Rs(l), k = Rs(o), B = Rs(c), U = f.useCallback(() => {
    if (!R.current || !P.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: p
    };
    k.current && (O.platform = k.current), Yx(R.current, P.current, O).then((D) => {
      const _ = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      j.current && !ai(E.current, _) && (E.current = _, Ni.flushSync(() => {
        u(_);
      }));
    });
  }, [p, t, n, k, B]);
  jo(() => {
    c === !1 && E.current.isPositioned && (E.current.isPositioned = !1, u((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [c]);
  const j = f.useRef(!1);
  jo(() => (j.current = !0, () => {
    j.current = !1;
  }), []), jo(() => {
    if (S && (R.current = S), C && (P.current = C), S && C) {
      if (T.current)
        return T.current(S, C, U);
      U();
    }
  }, [S, C, U, T, A]);
  const Z = f.useMemo(() => ({
    reference: R,
    floating: P,
    setReference: x,
    setFloating: w
  }), [x, w]), I = f.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), H = f.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return O;
    const D = uu(I.floating, d.x), _ = uu(I.floating, d.y);
    return a ? {
      ...O,
      transform: "translate(" + D + "px, " + _ + "px)",
      ...qf(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: _
    };
  }, [n, a, I.floating, d.x, d.y]);
  return f.useMemo(() => ({
    ...d,
    update: U,
    refs: Z,
    elements: I,
    floatingStyles: H
  }), [d, U, Z, I, H]);
}
const Jx = (e) => {
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
}, Qx = (e, t) => {
  const n = Hx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, e0 = (e, t) => {
  const n = jx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, t0 = (e, t) => ({
  fn: Kx(e).fn,
  options: [e, t]
}), n0 = (e, t) => {
  const n = Wx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, r0 = (e, t) => {
  const n = Gx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, o0 = (e, t) => {
  const n = Ux(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, i0 = (e, t) => {
  const n = Jx(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var s0 = "Arrow", Zf = f.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ g(
    ce.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ g("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Zf.displayName = s0;
var a0 = Zf;
function Jf(e) {
  const [t, n] = f.useState(void 0);
  return Ke(() => {
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
var Sl = "Popper", [Qf, Rn] = kt(Sl), [l0, ep] = Qf(Sl), tp = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = f.useState(null);
  return /* @__PURE__ */ g(l0, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
tp.displayName = Sl;
var np = "PopperAnchor", rp = f.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = ep(np, n), s = f.useRef(null), a = de(t, s), l = f.useRef(null);
    return f.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ g(ce.div, { ...o, ref: a });
  }
);
rp.displayName = np;
var Cl = "PopperContent", [c0, u0] = Qf(Cl), op = f.forwardRef(
  (e, t) => {
    var L, G, K, Y, le, ie;
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
      onPlaced: m,
      ...v
    } = e, y = ep(Cl, n), [b, x] = f.useState(null), w = de(t, (ye) => x(ye)), [S, C] = f.useState(null), R = Jf(S), P = (R == null ? void 0 : R.width) ?? 0, E = (R == null ? void 0 : R.height) ?? 0, A = r + (i !== "center" ? "-" + i : ""), T = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, k = Array.isArray(c) ? c : [c], B = k.length > 0, U = {
      padding: T,
      boundary: k.filter(f0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: j, floatingStyles: Z, placement: I, isPositioned: H, middlewareData: O } = Zx({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...ye) => zx(...ye, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Qx({ mainAxis: o + E, alignmentAxis: s }),
        l && e0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? t0() : void 0,
          ...U
        }),
        l && n0({ ...U }),
        r0({
          ...U,
          apply: ({ elements: ye, rects: me, availableWidth: _e, availableHeight: je }) => {
            const { width: Ye, height: Yt } = me.reference, Te = ye.floating.style;
            Te.setProperty("--radix-popper-available-width", `${_e}px`), Te.setProperty("--radix-popper-available-height", `${je}px`), Te.setProperty("--radix-popper-anchor-width", `${Ye}px`), Te.setProperty("--radix-popper-anchor-height", `${Yt}px`);
          }
        }),
        S && i0({ element: S, padding: a }),
        p0({ arrowWidth: P, arrowHeight: E }),
        p && o0({ strategy: "referenceHidden", ...U })
      ]
    }), [D, _] = ap(I), oe = He(m);
    Ke(() => {
      H && (oe == null || oe());
    }, [H, oe]);
    const M = (L = O.arrow) == null ? void 0 : L.x, F = (G = O.arrow) == null ? void 0 : G.y, W = ((K = O.arrow) == null ? void 0 : K.centerOffset) !== 0, [N, $] = f.useState();
    return Ke(() => {
      b && $(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ g(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: H ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N,
          "--radix-popper-transform-origin": [
            (Y = O.transformOrigin) == null ? void 0 : Y.x,
            (le = O.transformOrigin) == null ? void 0 : le.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ie = O.hide) == null ? void 0 : ie.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ g(
          c0,
          {
            scope: n,
            placedSide: D,
            onArrowChange: C,
            arrowX: M,
            arrowY: F,
            shouldHideArrow: W,
            children: /* @__PURE__ */ g(
              ce.div,
              {
                "data-side": D,
                "data-align": _,
                ...v,
                ref: w,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
op.displayName = Cl;
var ip = "PopperArrow", d0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, sp = f.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = u0(ip, r), s = d0[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ g(
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
        children: /* @__PURE__ */ g(
          a0,
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
sp.displayName = ip;
function f0(e) {
  return e !== null;
}
var p0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, x;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, d] = ap(n), u = { start: "0%", center: "50%", end: "100%" }[d], p = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, h = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
    let m = "", v = "";
    return c === "bottom" ? (m = s ? u : `${p}px`, v = `${-l}px`) : c === "top" ? (m = s ? u : `${p}px`, v = `${r.floating.height + l}px`) : c === "right" ? (m = `${-l}px`, v = s ? u : `${h}px`) : c === "left" && (m = `${r.floating.width + l}px`, v = s ? u : `${h}px`), { data: { x: m, y: v } };
  }
});
function ap(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var io = tp, so = rp, Bi = op, zi = sp, h0 = "Portal", wr = f.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = f.useState(!1);
  Ke(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? hf.createPortal(/* @__PURE__ */ g(ce.div, { ...r, ref: t }), s) : null;
});
wr.displayName = h0;
// @__NO_SIDE_EFFECTS__
function m0(e) {
  const t = /* @__PURE__ */ g0(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(y0);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function g0(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = w0(o), a = b0(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var v0 = Symbol("radix.slottable");
function y0(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === v0;
}
function b0(e, t) {
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
function w0(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var x0 = f[" useInsertionEffect ".trim().toString()] || Ke;
function en({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = S0({
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
        const p = C0(d) ? d(e) : d;
        p !== e && ((u = s.current) == null || u.call(s, p));
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function S0({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = f.useState(e), o = f.useRef(n), i = f.useRef(t);
  return x0(() => {
    i.current = t;
  }, [t]), f.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function C0(e) {
  return typeof e == "function";
}
function lp(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var cp = Object.freeze({
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
}), R0 = "VisuallyHidden", up = f.forwardRef(
  (e, t) => /* @__PURE__ */ g(
    ce.span,
    {
      ...e,
      ref: t,
      style: { ...cp, ...e.style }
    }
  )
);
up.displayName = R0;
var E0 = up, P0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xn = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), Ao = {}, Es = 0, dp = function(e) {
  return e && (e.host || dp(e.parentNode));
}, T0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = dp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, M0 = function(e, t, n, r) {
  var o = T0(t, Array.isArray(e) ? e : [e]);
  Ao[n] || (Ao[n] = /* @__PURE__ */ new WeakMap());
  var i = Ao[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (a.has(p))
        d(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", v = (Xn.get(p) || 0) + 1, y = (i.get(p) || 0) + 1;
          Xn.set(p, v), i.set(p, y), s.push(p), v === 1 && m && Mo.set(p, !0), y === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return d(t), a.clear(), Es++, function() {
    s.forEach(function(u) {
      var p = Xn.get(u) - 1, h = i.get(u) - 1;
      Xn.set(u, p), i.set(u, h), p || (Mo.has(u) || u.removeAttribute(r), Mo.delete(u)), h || u.removeAttribute(n);
    }), Es--, Es || (Xn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), Ao = {});
  };
}, Hi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = P0(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), M0(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, $t = function() {
  return $t = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, $t.apply(this, arguments);
};
function fp(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function A0(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Wo = "right-scroll-bar-position", Go = "width-before-scroll-bar", D0 = "with-scroll-bars-hidden", N0 = "--removed-body-scroll-bar-size";
function Ps(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function I0(e, t) {
  var n = $e(function() {
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
var k0 = typeof window < "u" ? f.useLayoutEffect : f.useEffect, du = /* @__PURE__ */ new WeakMap();
function _0(e, t) {
  var n = I0(null, function(r) {
    return e.forEach(function(o) {
      return Ps(o, r);
    });
  });
  return k0(function() {
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
function O0(e) {
  return e;
}
function L0(e, t) {
  t === void 0 && (t = O0);
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
function F0(e) {
  e === void 0 && (e = {});
  var t = L0(null);
  return t.options = $t({ async: !0, ssr: !1 }, e), t;
}
var pp = function(e) {
  var t = e.sideCar, n = fp(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return f.createElement(r, $t({}, n));
};
pp.isSideCarExport = !0;
function V0(e, t) {
  return e.useMedium(t), pp;
}
var hp = F0(), Ts = function() {
}, ji = f.forwardRef(function(e, t) {
  var n = f.useRef(null), r = f.useState({
    onScrollCapture: Ts,
    onWheelCapture: Ts,
    onTouchMoveCapture: Ts
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, h = e.noRelative, m = e.noIsolation, v = e.inert, y = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, S = fp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, R = _0([n, t]), P = $t($t({}, S), o);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(C, { sideCar: hp, removeScrollBar: c, shards: u, noRelative: h, noIsolation: m, inert: v, setCallbacks: i, allowPinchZoom: !!y, lockRef: n, gapMode: w }),
    s ? f.cloneElement(f.Children.only(a), $t($t({}, P), { ref: R })) : f.createElement(x, $t({}, P, { className: l, ref: R }), a)
  );
});
ji.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ji.classNames = {
  fullWidth: Go,
  zeroRight: Wo
};
var $0 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function B0() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = $0();
  return t && e.setAttribute("nonce", t), e;
}
function z0(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function H0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var j0 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = B0()) && (z0(t, n), H0(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, W0 = function() {
  var e = j0();
  return function(t, n) {
    f.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, mp = function() {
  var e = W0(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, G0 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ms = function(e) {
  return parseInt(e || "", 10) || 0;
}, U0 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ms(n), Ms(r), Ms(o)];
}, K0 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return G0;
  var t = U0(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Y0 = mp(), sr = "data-scroll-locked", X0 = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(D0, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(sr, `] {
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
  
  .`).concat(Wo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Go, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Wo, " .").concat(Wo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Go, " .").concat(Go, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(sr, `] {
    `).concat(N0, ": ").concat(a, `px;
  }
`);
}, fu = function() {
  var e = parseInt(document.body.getAttribute(sr) || "0", 10);
  return isFinite(e) ? e : 0;
}, q0 = function() {
  f.useEffect(function() {
    return document.body.setAttribute(sr, (fu() + 1).toString()), function() {
      var e = fu() - 1;
      e <= 0 ? document.body.removeAttribute(sr) : document.body.setAttribute(sr, e.toString());
    };
  }, []);
}, Z0 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  q0();
  var i = f.useMemo(function() {
    return K0(o);
  }, [o]);
  return f.createElement(Y0, { styles: X0(i, !t, o, n ? "" : "!important") });
}, ma = !1;
if (typeof window < "u")
  try {
    var Do = Object.defineProperty({}, "passive", {
      get: function() {
        return ma = !0, !0;
      }
    });
    window.addEventListener("test", Do, Do), window.removeEventListener("test", Do, Do);
  } catch {
    ma = !1;
  }
var qn = ma ? { passive: !1 } : !1, J0 = function(e) {
  return e.tagName === "TEXTAREA";
}, gp = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !J0(e) && n[t] === "visible")
  );
}, Q0 = function(e) {
  return gp(e, "overflowY");
}, eS = function(e) {
  return gp(e, "overflowX");
}, pu = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = vp(e, r);
    if (o) {
      var i = yp(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, tS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, nS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, vp = function(e, t) {
  return e === "v" ? Q0(t) : eS(t);
}, yp = function(e, t) {
  return e === "v" ? tS(t) : nS(t);
}, rS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, oS = function(e, t, n, r, o) {
  var i = rS(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, d = s > 0, u = 0, p = 0;
  do {
    if (!a)
      break;
    var h = yp(e, a), m = h[0], v = h[1], y = h[2], b = v - y - i * m;
    (m || b) && vp(e, a) && (u += b, p += m);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(p) < 1) && (c = !0), c;
}, No = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, hu = function(e) {
  return [e.deltaX, e.deltaY];
}, mu = function(e) {
  return e && "current" in e ? e.current : e;
}, iS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, aS = 0, Zn = [];
function lS(e) {
  var t = f.useRef([]), n = f.useRef([0, 0]), r = f.useRef(), o = f.useState(aS++)[0], i = f.useState(mp)[0], s = f.useRef(e);
  f.useEffect(function() {
    s.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = A0([e.lockRef.current], (e.shards || []).map(mu), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = f.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = No(v), x = n.current, w = "deltaX" in v ? v.deltaX : x[0] - b[0], S = "deltaY" in v ? v.deltaY : x[1] - b[1], C, R = v.target, P = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && P === "h" && R.type === "range")
      return !1;
    var E = window.getSelection(), A = E && E.anchorNode, T = A ? A === R || A.contains(R) : !1;
    if (T)
      return !1;
    var k = pu(P, R);
    if (!k)
      return !0;
    if (k ? C = P : (C = P === "v" ? "h" : "v", k = pu(P, R)), !k)
      return !1;
    if (!r.current && "changedTouches" in v && (w || S) && (r.current = C), !C)
      return !0;
    var B = r.current || C;
    return oS(B, y, v, B === "h" ? w : S);
  }, []), l = f.useCallback(function(v) {
    var y = v;
    if (!(!Zn.length || Zn[Zn.length - 1] !== i)) {
      var b = "deltaY" in y ? hu(y) : No(y), x = t.current.filter(function(C) {
        return C.name === y.type && (C.target === y.target || y.target === C.shadowParent) && iS(C.delta, b);
      })[0];
      if (x && x.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!x) {
        var w = (s.current.shards || []).map(mu).filter(Boolean).filter(function(C) {
          return C.contains(y.target);
        }), S = w.length > 0 ? a(y, w[0]) : !s.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(v, y, b, x) {
    var w = { name: v, delta: y, target: b, should: x, shadowParent: cS(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), d = f.useCallback(function(v) {
    n.current = No(v), r.current = void 0;
  }, []), u = f.useCallback(function(v) {
    c(v.type, hu(v), v.target, a(v, e.lockRef.current));
  }, []), p = f.useCallback(function(v) {
    c(v.type, No(v), v.target, a(v, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return Zn.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, qn), document.addEventListener("touchmove", l, qn), document.addEventListener("touchstart", d, qn), function() {
      Zn = Zn.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, qn), document.removeEventListener("touchmove", l, qn), document.removeEventListener("touchstart", d, qn);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    m ? f.createElement(i, { styles: sS(o) }) : null,
    h ? f.createElement(Z0, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function cS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const uS = V0(hp, lS);
var ao = f.forwardRef(function(e, t) {
  return f.createElement(ji, $t({}, e, { ref: t, sideCar: uS }));
});
ao.classNames = ji.classNames;
var dS = [" ", "Enter", "ArrowUp", "ArrowDown"], fS = [" ", "Enter"], zn = "Select", [Wi, Gi, pS] = ml(zn), [xr] = kt(zn, [
  pS,
  Rn
]), Ui = Rn(), [hS, En] = xr(zn), [mS, gS] = xr(zn), bp = (e) => {
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
    form: m
  } = e, v = Ui(t), [y, b] = f.useState(null), [x, w] = f.useState(null), [S, C] = f.useState(!1), R = _i(c), [P, E] = en({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: zn
  }), [A, T] = en({
    prop: s,
    defaultProp: a,
    onChange: l,
    caller: zn
  }), k = f.useRef(null), B = y ? m || !!y.closest("form") : !0, [U, j] = f.useState(/* @__PURE__ */ new Set()), Z = Array.from(U).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ g(io, { ...v, children: /* @__PURE__ */ z(
    hS,
    {
      required: h,
      scope: t,
      trigger: y,
      onTriggerChange: b,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: Be(),
      value: A,
      onValueChange: T,
      open: P,
      onOpenChange: E,
      dir: R,
      triggerPointerDownPosRef: k,
      disabled: p,
      children: [
        /* @__PURE__ */ g(Wi.Provider, { scope: t, children: /* @__PURE__ */ g(
          mS,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback((I) => {
              j((H) => new Set(H).add(I));
            }, []),
            onNativeOptionRemove: f.useCallback((I) => {
              j((H) => {
                const O = new Set(H);
                return O.delete(I), O;
              });
            }, []),
            children: n
          }
        ) }),
        B ? /* @__PURE__ */ z(
          Wp,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: d,
            autoComplete: u,
            value: A,
            onChange: (I) => T(I.target.value),
            disabled: p,
            form: m,
            children: [
              A === void 0 ? /* @__PURE__ */ g("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          Z
        ) : null
      ]
    }
  ) });
};
bp.displayName = zn;
var wp = "SelectTrigger", xp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Ui(n), s = En(wp, n), a = s.disabled || r, l = de(t, s.onTriggerChange), c = Gi(n), d = f.useRef("touch"), [u, p, h] = Up((v) => {
      const y = c().filter((w) => !w.disabled), b = y.find((w) => w.value === s.value), x = Kp(y, v, b);
      x !== void 0 && s.onValueChange(x.value);
    }), m = (v) => {
      a || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ g(so, { asChild: !0, ...i, children: /* @__PURE__ */ g(
      ce.button,
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
        "data-placeholder": Gp(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && m(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          d.current = v.pointerType;
          const y = v.target;
          y.hasPointerCapture(v.pointerId) && y.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (m(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const y = u.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(y && v.key === " ") && dS.includes(v.key) && (m(), v.preventDefault());
        })
      }
    ) });
  }
);
xp.displayName = wp;
var Sp = "SelectValue", Cp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, l = En(Sp, n), { onValueNodeHasChildrenChange: c } = l, d = i !== void 0, u = de(t, l.onValueNodeChange);
    return Ke(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ g(
      ce.span,
      {
        ...a,
        ref: u,
        style: { pointerEvents: "none" },
        children: Gp(l.value) ? /* @__PURE__ */ g(jt, { children: s }) : i
      }
    );
  }
);
Cp.displayName = Sp;
var vS = "SelectIcon", Rp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ g(ce.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Rp.displayName = vS;
var yS = "SelectPortal", Ep = (e) => /* @__PURE__ */ g(wr, { asChild: !0, ...e });
Ep.displayName = yS;
var Hn = "SelectContent", Pp = f.forwardRef(
  (e, t) => {
    const n = En(Hn, e.__scopeSelect), [r, o] = f.useState();
    if (Ke(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Ni.createPortal(
        /* @__PURE__ */ g(Tp, { scope: e.__scopeSelect, children: /* @__PURE__ */ g(Wi.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ g("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ g(Mp, { ...e, ref: t });
  }
);
Pp.displayName = Hn;
var Et = 10, [Tp, Pn] = xr(Hn), bS = "SelectContentImpl", wS = /* @__PURE__ */ m0("SelectContent.RemoveScroll"), Mp = f.forwardRef(
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
      sticky: m,
      hideWhenDetached: v,
      avoidCollisions: y,
      //
      ...b
    } = e, x = En(Hn, n), [w, S] = f.useState(null), [C, R] = f.useState(null), P = de(t, (L) => S(L)), [E, A] = f.useState(null), [T, k] = f.useState(
      null
    ), B = Gi(n), [U, j] = f.useState(!1), Z = f.useRef(!1);
    f.useEffect(() => {
      if (w) return Hi(w);
    }, [w]), Oi();
    const I = f.useCallback(
      (L) => {
        const [G, ...K] = B().map((ie) => ie.ref.current), [Y] = K.slice(-1), le = document.activeElement;
        for (const ie of L)
          if (ie === le || (ie == null || ie.scrollIntoView({ block: "nearest" }), ie === G && C && (C.scrollTop = 0), ie === Y && C && (C.scrollTop = C.scrollHeight), ie == null || ie.focus(), document.activeElement !== le)) return;
      },
      [B, C]
    ), H = f.useCallback(
      () => I([E, w]),
      [I, E, w]
    );
    f.useEffect(() => {
      U && H();
    }, [U, H]);
    const { onOpenChange: O, triggerPointerDownPosRef: D } = x;
    f.useEffect(() => {
      if (w) {
        let L = { x: 0, y: 0 };
        const G = (Y) => {
          var le, ie;
          L = {
            x: Math.abs(Math.round(Y.pageX) - (((le = D.current) == null ? void 0 : le.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((ie = D.current) == null ? void 0 : ie.y) ?? 0))
          };
        }, K = (Y) => {
          L.x <= 10 && L.y <= 10 ? Y.preventDefault() : w.contains(Y.target) || O(!1), document.removeEventListener("pointermove", G), D.current = null;
        };
        return D.current !== null && (document.addEventListener("pointermove", G), document.addEventListener("pointerup", K, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", G), document.removeEventListener("pointerup", K, { capture: !0 });
        };
      }
    }, [w, O, D]), f.useEffect(() => {
      const L = () => O(!1);
      return window.addEventListener("blur", L), window.addEventListener("resize", L), () => {
        window.removeEventListener("blur", L), window.removeEventListener("resize", L);
      };
    }, [O]);
    const [_, oe] = Up((L) => {
      const G = B().filter((le) => !le.disabled), K = G.find((le) => le.ref.current === document.activeElement), Y = Kp(G, L, K);
      Y && setTimeout(() => Y.ref.current.focus());
    }), M = f.useCallback(
      (L, G, K) => {
        const Y = !Z.current && !K;
        (x.value !== void 0 && x.value === G || Y) && (A(L), Y && (Z.current = !0));
      },
      [x.value]
    ), F = f.useCallback(() => w == null ? void 0 : w.focus(), [w]), W = f.useCallback(
      (L, G, K) => {
        const Y = !Z.current && !K;
        (x.value !== void 0 && x.value === G || Y) && k(L);
      },
      [x.value]
    ), N = r === "popper" ? ga : Ap, $ = N === ga ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: m,
      hideWhenDetached: v,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ g(
      Tp,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: R,
        itemRefCallback: M,
        selectedItem: E,
        onItemLeave: F,
        itemTextRefCallback: W,
        focusSelectedItem: H,
        selectedItemText: T,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ g(ao, { as: wS, allowPinchZoom: !0, children: /* @__PURE__ */ g(
          ro,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (L) => {
              L.preventDefault();
            },
            onUnmountAutoFocus: X(o, (L) => {
              var G;
              (G = x.trigger) == null || G.focus({ preventScroll: !0 }), L.preventDefault();
            }),
            children: /* @__PURE__ */ g(
              vr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (L) => L.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ g(
                  N,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (L) => L.preventDefault(),
                    ...b,
                    ...$,
                    onPlaced: () => j(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: X(b.onKeyDown, (L) => {
                      const G = L.ctrlKey || L.altKey || L.metaKey;
                      if (L.key === "Tab" && L.preventDefault(), !G && L.key.length === 1 && oe(L.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                        let Y = B().filter((le) => !le.disabled).map((le) => le.ref.current);
                        if (["ArrowUp", "End"].includes(L.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(L.key)) {
                          const le = L.target, ie = Y.indexOf(le);
                          Y = Y.slice(ie + 1);
                        }
                        setTimeout(() => I(Y)), L.preventDefault();
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
Mp.displayName = bS;
var xS = "SelectItemAlignedPosition", Ap = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = En(Hn, n), s = Pn(Hn, n), [a, l] = f.useState(null), [c, d] = f.useState(null), u = de(t, (P) => d(P)), p = Gi(n), h = f.useRef(!1), m = f.useRef(!0), { viewport: v, selectedItem: y, selectedItemText: b, focusSelectedItem: x } = s, w = f.useCallback(() => {
    if (i.trigger && i.valueNode && a && c && v && y && b) {
      const P = i.trigger.getBoundingClientRect(), E = c.getBoundingClientRect(), A = i.valueNode.getBoundingClientRect(), T = b.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const le = T.left - E.left, ie = A.left - le, ye = P.left - ie, me = P.width + ye, _e = Math.max(me, E.width), je = window.innerWidth - Et, Ye = ua(ie, [
          Et,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Et, je - _e)
        ]);
        a.style.minWidth = me + "px", a.style.left = Ye + "px";
      } else {
        const le = E.right - T.right, ie = window.innerWidth - A.right - le, ye = window.innerWidth - P.right - ie, me = P.width + ye, _e = Math.max(me, E.width), je = window.innerWidth - Et, Ye = ua(ie, [
          Et,
          Math.max(Et, je - _e)
        ]);
        a.style.minWidth = me + "px", a.style.right = Ye + "px";
      }
      const k = p(), B = window.innerHeight - Et * 2, U = v.scrollHeight, j = window.getComputedStyle(c), Z = parseInt(j.borderTopWidth, 10), I = parseInt(j.paddingTop, 10), H = parseInt(j.borderBottomWidth, 10), O = parseInt(j.paddingBottom, 10), D = Z + I + U + O + H, _ = Math.min(y.offsetHeight * 5, D), oe = window.getComputedStyle(v), M = parseInt(oe.paddingTop, 10), F = parseInt(oe.paddingBottom, 10), W = P.top + P.height / 2 - Et, N = B - W, $ = y.offsetHeight / 2, L = y.offsetTop + $, G = Z + I + L, K = D - G;
      if (G <= W) {
        const le = k.length > 0 && y === k[k.length - 1].ref.current;
        a.style.bottom = "0px";
        const ie = c.clientHeight - v.offsetTop - v.offsetHeight, ye = Math.max(
          N,
          $ + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (le ? F : 0) + ie + H
        ), me = G + ye;
        a.style.height = me + "px";
      } else {
        const le = k.length > 0 && y === k[0].ref.current;
        a.style.top = "0px";
        const ye = Math.max(
          W,
          Z + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (le ? M : 0) + $
        ) + K;
        a.style.height = ye + "px", v.scrollTop = G - W + v.offsetTop;
      }
      a.style.margin = `${Et}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    a,
    c,
    v,
    y,
    b,
    i.dir,
    r
  ]);
  Ke(() => w(), [w]);
  const [S, C] = f.useState();
  Ke(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const R = f.useCallback(
    (P) => {
      P && m.current === !0 && (w(), x == null || x(), m.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ g(
    CS,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: R,
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
            ce.div,
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
Ap.displayName = xS;
var SS = "SelectPopperPosition", ga = f.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Et,
    ...i
  } = e, s = Ui(n);
  return /* @__PURE__ */ g(
    Bi,
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
ga.displayName = SS;
var [CS, Rl] = xr(Hn, {}), va = "SelectViewport", Dp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = Pn(va, n), s = Rl(va, n), a = de(t, i.onViewportChange), l = f.useRef(0);
    return /* @__PURE__ */ z(jt, { children: [
      /* @__PURE__ */ g(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ g(Wi.Slot, { scope: n, children: /* @__PURE__ */ g(
        ce.div,
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
          onScroll: X(o.onScroll, (c) => {
            const d = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && u) {
              const h = Math.abs(l.current - d.scrollTop);
              if (h > 0) {
                const m = window.innerHeight - Et * 2, v = parseFloat(u.style.minHeight), y = parseFloat(u.style.height), b = Math.max(v, y);
                if (b < m) {
                  const x = b + h, w = Math.min(m, x), S = x - w;
                  u.style.height = w + "px", u.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
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
Dp.displayName = va;
var Np = "SelectGroup", [RS, ES] = xr(Np), Ip = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Be();
    return /* @__PURE__ */ g(RS, { scope: n, id: o, children: /* @__PURE__ */ g(ce.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ip.displayName = Np;
var kp = "SelectLabel", _p = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ES(kp, n);
    return /* @__PURE__ */ g(ce.div, { id: o.id, ...r, ref: t });
  }
);
_p.displayName = kp;
var li = "SelectItem", [PS, Op] = xr(li), Lp = f.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = En(li, n), l = Pn(li, n), c = a.value === r, [d, u] = f.useState(i ?? ""), [p, h] = f.useState(!1), m = de(
      t,
      (x) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, x, r, o);
      }
    ), v = Be(), y = f.useRef("touch"), b = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ g(
      PS,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: c,
        onItemTextChange: f.useCallback((x) => {
          u((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ g(
          Wi.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ g(
              ce.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: m,
                onFocus: X(s.onFocus, () => h(!0)),
                onBlur: X(s.onBlur, () => h(!1)),
                onClick: X(s.onClick, () => {
                  y.current !== "mouse" && b();
                }),
                onPointerUp: X(s.onPointerUp, () => {
                  y.current === "mouse" && b();
                }),
                onPointerDown: X(s.onPointerDown, (x) => {
                  y.current = x.pointerType;
                }),
                onPointerMove: X(s.onPointerMove, (x) => {
                  var w;
                  y.current = x.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : y.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(s.onPointerLeave, (x) => {
                  var w;
                  x.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: X(s.onKeyDown, (x) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (fS.includes(x.key) && b(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Lp.displayName = li;
var Lr = "SelectItemText", Fp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = En(Lr, n), a = Pn(Lr, n), l = Op(Lr, n), c = gS(Lr, n), [d, u] = f.useState(null), p = de(
      t,
      (b) => u(b),
      l.onItemTextChange,
      (b) => {
        var x;
        return (x = a.itemTextRefCallback) == null ? void 0 : x.call(a, b, l.value, l.disabled);
      }
    ), h = d == null ? void 0 : d.textContent, m = f.useMemo(
      () => /* @__PURE__ */ g("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: y } = c;
    return Ke(() => (v(m), () => y(m)), [v, y, m]), /* @__PURE__ */ z(jt, { children: [
      /* @__PURE__ */ g(ce.span, { id: l.textId, ...i, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Ni.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
Fp.displayName = Lr;
var Vp = "SelectItemIndicator", $p = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Op(Vp, n).isSelected ? /* @__PURE__ */ g(ce.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
$p.displayName = Vp;
var ya = "SelectScrollUpButton", Bp = f.forwardRef((e, t) => {
  const n = Pn(ya, e.__scopeSelect), r = Rl(ya, e.__scopeSelect), [o, i] = f.useState(!1), s = de(t, r.onScrollButtonChange);
  return Ke(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        i(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ g(
    Hp,
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
Bp.displayName = ya;
var ba = "SelectScrollDownButton", zp = f.forwardRef((e, t) => {
  const n = Pn(ba, e.__scopeSelect), r = Rl(ba, e.__scopeSelect), [o, i] = f.useState(!1), s = de(t, r.onScrollButtonChange);
  return Ke(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        i(d);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ g(
    Hp,
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
zp.displayName = ba;
var Hp = f.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Pn("SelectScrollButton", n), s = f.useRef(null), a = Gi(n), l = f.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return f.useEffect(() => () => l(), [l]), Ke(() => {
    var d;
    const c = a().find((u) => u.ref.current === document.activeElement);
    (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ g(
    ce.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), TS = "SelectSeparator", jp = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ g(ce.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
jp.displayName = TS;
var wa = "SelectArrow", MS = f.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ui(n), i = En(wa, n), s = Pn(wa, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ g(zi, { ...o, ...r, ref: t }) : null;
  }
);
MS.displayName = wa;
var AS = "SelectBubbleInput", Wp = f.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = f.useRef(null), i = de(r, o), s = lp(t);
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
    }, [s, t]), /* @__PURE__ */ g(
      ce.select,
      {
        ...n,
        style: { ...cp, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
Wp.displayName = AS;
function Gp(e) {
  return e === "" || e === void 0;
}
function Up(e) {
  const t = He(e), n = f.useRef(""), r = f.useRef(0), o = f.useCallback(
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
function Kp(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = DS(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function DS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var NS = bp, Yp = xp, IS = Cp, kS = Rp, _S = Ep, Xp = Pp, OS = Dp, LS = Ip, qp = _p, Zp = Lp, FS = Fp, VS = $p, Jp = Bp, Qp = zp, eh = jp;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $S = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), BS = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), gu = (e) => {
  const t = BS(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, th = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), zS = (e) => {
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
var HS = {
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
const jS = dl(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => ti(
    "svg",
    {
      ref: l,
      ...HS,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: th("lucide", o),
      ...!i && !zS(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([c, d]) => ti(c, d)),
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
const Je = (e, t) => {
  const n = dl(
    ({ className: r, ...o }, i) => ti(jS, {
      ref: i,
      iconNode: t,
      className: th(
        `lucide-${$S(gu(e))}`,
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
const WS = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], GS = Je("arrow-up-down", WS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const US = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ci = Je("check", US);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], nh = Je("chevron-down", KS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YS = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], rh = Je("chevron-left", YS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XS = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], lo = Je("chevron-right", XS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ZS = Je("chevron-up", qS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JS = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], QS = Je("circle", JS);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eC = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], tC = Je("command", eC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nC = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], rC = Je("funnel", nC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oC = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], oh = Je("grip-vertical", oC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iC = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], sC = Je("monitor", iC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aC = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], lC = Je("moon", aC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], uC = Je("plus", cC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dC = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], fC = Je("search", dC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pC = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], hC = Je("sun", pC);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mC = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], El = Je("x", mC), B_ = NS, z_ = LS, H_ = IS, gC = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  Yp,
  {
    ref: r,
    className: q(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ g(kS, { asChild: !0, children: /* @__PURE__ */ g(nh, { className: "size-4 opacity-50" }) })
    ]
  }
));
gC.displayName = Yp.displayName;
const ih = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Jp,
  {
    ref: n,
    className: q("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ g(ZS, { className: "size-4" })
  }
));
ih.displayName = Jp.displayName;
const sh = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Qp,
  {
    ref: n,
    className: q("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ g(nh, { className: "size-4" })
  }
));
sh.displayName = Qp.displayName;
const vC = f.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ g(_S, { children: /* @__PURE__ */ z(
  Xp,
  {
    ref: o,
    className: q(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ g(ih, {}),
      /* @__PURE__ */ g(
        OS,
        {
          className: q(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ g(sh, {})
    ]
  }
) }));
vC.displayName = Xp.displayName;
const yC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  qp,
  {
    ref: n,
    className: q("px-2 py-1.5 text-xs font-semibold text-muted-foreground", e),
    ...t
  }
));
yC.displayName = qp.displayName;
const bC = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  Zp,
  {
    ref: r,
    className: q(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ g("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g(VS, { children: /* @__PURE__ */ g(ci, { className: "size-4" }) }) }),
      /* @__PURE__ */ g(FS, { children: t })
    ]
  }
));
bC.displayName = Zp.displayName;
const wC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  eh,
  {
    ref: n,
    className: q("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
wC.displayName = eh.displayName;
var Ki = "Switch", [xC] = kt(Ki), [SC, CC] = xC(Ki), ah = f.forwardRef(
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
    } = e, [p, h] = f.useState(null), m = de(t, (w) => h(w)), v = f.useRef(!1), y = p ? d || !!p.closest("form") : !0, [b, x] = en({
      prop: o,
      defaultProp: i ?? !1,
      onChange: c,
      caller: Ki
    });
    return /* @__PURE__ */ z(SC, { scope: n, checked: b, disabled: a, children: [
      /* @__PURE__ */ g(
        ce.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": s,
          "data-state": dh(b),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...u,
          ref: m,
          onClick: X(e.onClick, (w) => {
            x((S) => !S), y && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ g(
        uh,
        {
          control: p,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: b,
          required: s,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ah.displayName = Ki;
var lh = "SwitchThumb", ch = f.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = CC(lh, n);
    return /* @__PURE__ */ g(
      ce.span,
      {
        "data-state": dh(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ch.displayName = lh;
var RC = "SwitchBubbleInput", uh = f.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, i) => {
    const s = f.useRef(null), a = de(s, i), l = lp(n), c = Jf(t);
    return f.useEffect(() => {
      const d = s.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (l !== n && h) {
        const m = new Event("click", { bubbles: r });
        h.call(d, n), d.dispatchEvent(m);
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
uh.displayName = RC;
function dh(e) {
  return e ? "checked" : "unchecked";
}
var fh = ah, EC = ch;
const PC = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  fh,
  {
    className: q(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ g(
      EC,
      {
        className: q(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
PC.displayName = fh.displayName;
var TC = [
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
], MC = TC.reduce((e, t) => {
  const n = /* @__PURE__ */ Ii(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), AC = "Separator", vu = "horizontal", DC = ["horizontal", "vertical"], ph = f.forwardRef((e, t) => {
  const { decorative: n, orientation: r = vu, ...o } = e, i = NC(r) ? r : vu, a = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ g(
    MC.div,
    {
      "data-orientation": i,
      ...a,
      ...o,
      ref: t
    }
  );
});
ph.displayName = AC;
function NC(e) {
  return DC.includes(e);
}
var hh = ph;
const mh = f.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ g(
  hh,
  {
    ref: o,
    decorative: n,
    orientation: t,
    className: q(
      "shrink-0 bg-border",
      t === "horizontal" ? "h-px w-full" : "h-full w-px",
      e
    ),
    ...r
  }
));
mh.displayName = hh.displayName;
function IC(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Qe = (e) => {
  const { present: t, children: n } = e, r = kC(t), o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n), i = de(r.ref, _C(o));
  return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: i }) : null;
};
Qe.displayName = "Presence";
function kC(e) {
  const [t, n] = f.useState(), r = f.useRef(null), o = f.useRef(e), i = f.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = IC(s, {
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
    const c = Io(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Ke(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, h = Io(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ke(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (h) => {
        const v = Io(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, p = (h) => {
        h.target === t && (i.current = Io(r.current));
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
function Io(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function _C(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function OC(e) {
  const t = /* @__PURE__ */ LC(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(VC);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function LC(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = BC(o), a = $C(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var FC = Symbol("radix.slottable");
function VC(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === FC;
}
function $C(e, t) {
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
function BC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Yi = "Dialog", [gh] = kt(Yi), [zC, _t] = gh(Yi), vh = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = f.useRef(null), l = f.useRef(null), [c, d] = en({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Yi
  });
  return /* @__PURE__ */ g(
    zC,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Be(),
      titleId: Be(),
      descriptionId: Be(),
      open: c,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((u) => !u), [d]),
      modal: s,
      children: n
    }
  );
};
vh.displayName = Yi;
var yh = "DialogTrigger", bh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(yh, n), i = de(t, o.triggerRef);
    return /* @__PURE__ */ g(
      ce.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ml(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
bh.displayName = yh;
var Pl = "DialogPortal", [HC, wh] = gh(Pl, {
  forceMount: void 0
}), xh = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = _t(Pl, t);
  return /* @__PURE__ */ g(HC, { scope: t, forceMount: n, children: f.Children.map(r, (s) => /* @__PURE__ */ g(Qe, { present: n || i.open, children: /* @__PURE__ */ g(wr, { asChild: !0, container: o, children: s }) })) });
};
xh.displayName = Pl;
var ui = "DialogOverlay", Sh = f.forwardRef(
  (e, t) => {
    const n = wh(ui, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = _t(ui, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ g(Qe, { present: r || i.open, children: /* @__PURE__ */ g(WC, { ...o, ref: t }) }) : null;
  }
);
Sh.displayName = ui;
var jC = /* @__PURE__ */ OC("DialogOverlay.RemoveScroll"), WC = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(ui, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ g(ao, { as: jC, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ g(
        ce.div,
        {
          "data-state": Ml(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), jn = "DialogContent", Ch = f.forwardRef(
  (e, t) => {
    const n = wh(jn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = _t(jn, e.__scopeDialog);
    return /* @__PURE__ */ g(Qe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ g(GC, { ...o, ref: t }) : /* @__PURE__ */ g(UC, { ...o, ref: t }) });
  }
);
Ch.displayName = jn;
var GC = f.forwardRef(
  (e, t) => {
    const n = _t(jn, e.__scopeDialog), r = f.useRef(null), o = de(t, n.contentRef, r);
    return f.useEffect(() => {
      const i = r.current;
      if (i) return Hi(i);
    }, []), /* @__PURE__ */ g(
      Rh,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), UC = f.forwardRef(
  (e, t) => {
    const n = _t(jn, e.__scopeDialog), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ g(
      Rh,
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
), Rh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = _t(jn, n), l = f.useRef(null), c = de(t, l);
    return Oi(), /* @__PURE__ */ z(jt, { children: [
      /* @__PURE__ */ g(
        ro,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ g(
            vr,
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
      /* @__PURE__ */ z(jt, { children: [
        /* @__PURE__ */ g(KC, { titleId: a.titleId }),
        /* @__PURE__ */ g(XC, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Tl = "DialogTitle", Eh = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(Tl, n);
    return /* @__PURE__ */ g(ce.h2, { id: o.titleId, ...r, ref: t });
  }
);
Eh.displayName = Tl;
var Ph = "DialogDescription", Th = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(Ph, n);
    return /* @__PURE__ */ g(ce.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Th.displayName = Ph;
var Mh = "DialogClose", Ah = f.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(Mh, n);
    return /* @__PURE__ */ g(
      ce.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ah.displayName = Mh;
function Ml(e) {
  return e ? "open" : "closed";
}
var Dh = "DialogTitleWarning", [j_, Nh] = Rw(Dh, {
  contentName: jn,
  titleName: Tl,
  docsSlug: "dialog"
}), KC = ({ titleId: e }) => {
  const t = Nh(Dh), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, YC = "DialogDescriptionWarning", XC = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Nh(YC).contentName}}.`;
  return f.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ih = vh, qC = bh, kh = xh, Al = Sh, Dl = Ch, _h = Eh, Oh = Th, Lh = Ah, As = "rovingFocusGroup.onEntryFocus", ZC = { bubbles: !1, cancelable: !0 }, co = "RovingFocusGroup", [xa, Fh, JC] = ml(co), [QC, Vh] = kt(
  co,
  [JC]
), [eR, tR] = QC(co), $h = f.forwardRef(
  (e, t) => /* @__PURE__ */ g(xa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g(xa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g(nR, { ...e, ref: t }) }) })
);
$h.displayName = co;
var nR = f.forwardRef((e, t) => {
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
  } = e, p = f.useRef(null), h = de(t, p), m = _i(i), [v, y] = en({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: co
  }), [b, x] = f.useState(!1), w = He(c), S = Fh(n), C = f.useRef(!1), [R, P] = f.useState(0);
  return f.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(As, w), () => E.removeEventListener(As, w);
  }, [w]), /* @__PURE__ */ g(
    eR,
    {
      scope: n,
      orientation: r,
      dir: m,
      loop: o,
      currentTabStopId: v,
      onItemFocus: f.useCallback(
        (E) => y(E),
        [y]
      ),
      onItemShiftTab: f.useCallback(() => x(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => P((E) => E + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => P((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ g(
        ce.div,
        {
          tabIndex: b || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: X(e.onFocus, (E) => {
            const A = !C.current;
            if (E.target === E.currentTarget && A && !b) {
              const T = new CustomEvent(As, ZC);
              if (E.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const k = S().filter((I) => I.focusable), B = k.find((I) => I.active), U = k.find((I) => I.id === v), Z = [B, U, ...k].filter(
                  Boolean
                ).map((I) => I.ref.current);
                Hh(Z, d);
              }
            }
            C.current = !1;
          }),
          onBlur: X(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Bh = "RovingFocusGroupItem", zh = f.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = Be(), c = i || l, d = tR(Bh, n), u = d.currentTabStopId === c, p = Fh(n), { onFocusableItemAdd: h, onFocusableItemRemove: m, currentTabStopId: v } = d;
    return f.useEffect(() => {
      if (r)
        return h(), () => m();
    }, [r, h, m]), /* @__PURE__ */ g(
      xa.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ g(
          ce.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: X(e.onMouseDown, (y) => {
              r ? d.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: X(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: X(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const b = iR(y, d.orientation, d.dir);
              if (b !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let w = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (b === "last") w.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && w.reverse();
                  const S = w.indexOf(y.currentTarget);
                  w = d.loop ? sR(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => Hh(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: u, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
zh.displayName = Bh;
var rR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function oR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function iR(e, t, n) {
  const r = oR(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return rR[r];
}
function Hh(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function sR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var aR = $h, lR = zh;
// @__NO_SIDE_EFFECTS__
function cR(e) {
  const t = /* @__PURE__ */ uR(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(fR);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function uR(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = hR(o), a = pR(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var dR = Symbol("radix.slottable");
function fR(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === dR;
}
function pR(e, t) {
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
function hR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Sa = ["Enter", " "], mR = ["ArrowDown", "PageUp", "Home"], jh = ["ArrowUp", "PageDown", "End"], gR = [...mR, ...jh], vR = {
  ltr: [...Sa, "ArrowRight"],
  rtl: [...Sa, "ArrowLeft"]
}, yR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, uo = "Menu", [Kr, bR, wR] = ml(uo), [Un, Wh] = kt(uo, [
  wR,
  Rn,
  Vh
]), fo = Rn(), Gh = Vh(), [Uh, Tn] = Un(uo), [xR, po] = Un(uo), Kh = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = fo(t), [l, c] = f.useState(null), d = f.useRef(!1), u = He(i), p = _i(o);
  return f.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ g(io, { ...a, children: /* @__PURE__ */ g(
    Uh,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ g(
        xR,
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
Kh.displayName = uo;
var SR = "MenuAnchor", Nl = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = fo(n);
    return /* @__PURE__ */ g(so, { ...o, ...r, ref: t });
  }
);
Nl.displayName = SR;
var Il = "MenuPortal", [CR, Yh] = Un(Il, {
  forceMount: void 0
}), Xh = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Tn(Il, t);
  return /* @__PURE__ */ g(CR, { scope: t, forceMount: n, children: /* @__PURE__ */ g(Qe, { present: n || i.open, children: /* @__PURE__ */ g(wr, { asChild: !0, container: o, children: r }) }) });
};
Xh.displayName = Il;
var xt = "MenuContent", [RR, kl] = Un(xt), qh = f.forwardRef(
  (e, t) => {
    const n = Yh(xt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Tn(xt, e.__scopeMenu), s = po(xt, e.__scopeMenu);
    return /* @__PURE__ */ g(Kr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g(Qe, { present: r || i.open, children: /* @__PURE__ */ g(Kr.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ g(ER, { ...o, ref: t }) : /* @__PURE__ */ g(PR, { ...o, ref: t }) }) }) });
  }
), ER = f.forwardRef(
  (e, t) => {
    const n = Tn(xt, e.__scopeMenu), r = f.useRef(null), o = de(t, r);
    return f.useEffect(() => {
      const i = r.current;
      if (i) return Hi(i);
    }, []), /* @__PURE__ */ g(
      _l,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), PR = f.forwardRef((e, t) => {
  const n = Tn(xt, e.__scopeMenu);
  return /* @__PURE__ */ g(
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
}), TR = /* @__PURE__ */ cR("MenuContent.ScrollLock"), _l = f.forwardRef(
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
      disableOutsideScroll: m,
      ...v
    } = e, y = Tn(xt, n), b = po(xt, n), x = fo(n), w = Gh(n), S = bR(n), [C, R] = f.useState(null), P = f.useRef(null), E = de(t, P, y.onContentChange), A = f.useRef(0), T = f.useRef(""), k = f.useRef(0), B = f.useRef(null), U = f.useRef("right"), j = f.useRef(0), Z = m ? ao : f.Fragment, I = m ? { as: TR, allowPinchZoom: !0 } : void 0, H = (D) => {
      var L, G;
      const _ = T.current + D, oe = S().filter((K) => !K.disabled), M = document.activeElement, F = (L = oe.find((K) => K.ref.current === M)) == null ? void 0 : L.textValue, W = oe.map((K) => K.textValue), N = $R(W, _, F), $ = (G = oe.find((K) => K.textValue === N)) == null ? void 0 : G.ref.current;
      (function K(Y) {
        T.current = Y, window.clearTimeout(A.current), Y !== "" && (A.current = window.setTimeout(() => K(""), 1e3));
      })(_), $ && setTimeout(() => $.focus());
    };
    f.useEffect(() => () => window.clearTimeout(A.current), []), Oi();
    const O = f.useCallback((D) => {
      var oe, M;
      return U.current === ((oe = B.current) == null ? void 0 : oe.side) && zR(D, (M = B.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ g(
      RR,
      {
        scope: n,
        searchRef: T,
        onItemEnter: f.useCallback(
          (D) => {
            O(D) && D.preventDefault();
          },
          [O]
        ),
        onItemLeave: f.useCallback(
          (D) => {
            var _;
            O(D) || ((_ = P.current) == null || _.focus(), R(null));
          },
          [O]
        ),
        onTriggerLeave: f.useCallback(
          (D) => {
            O(D) && D.preventDefault();
          },
          [O]
        ),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: f.useCallback((D) => {
          B.current = D;
        }, []),
        children: /* @__PURE__ */ g(Z, { ...I, children: /* @__PURE__ */ g(
          ro,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(i, (D) => {
              var _;
              D.preventDefault(), (_ = P.current) == null || _.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ g(
              vr,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ g(
                  aR,
                  {
                    asChild: !0,
                    ...w,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: R,
                    onEntryFocus: X(l, (D) => {
                      b.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ g(
                      Bi,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": pm(y.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...x,
                        ...v,
                        ref: E,
                        style: { outline: "none", ...v.style },
                        onKeyDown: X(v.onKeyDown, (D) => {
                          const oe = D.target.closest("[data-radix-menu-content]") === D.currentTarget, M = D.ctrlKey || D.altKey || D.metaKey, F = D.key.length === 1;
                          oe && (D.key === "Tab" && D.preventDefault(), !M && F && H(D.key));
                          const W = P.current;
                          if (D.target !== W || !gR.includes(D.key)) return;
                          D.preventDefault();
                          const $ = S().filter((L) => !L.disabled).map((L) => L.ref.current);
                          jh.includes(D.key) && $.reverse(), FR($);
                        }),
                        onBlur: X(e.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(A.current), T.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          Yr((D) => {
                            const _ = D.target, oe = j.current !== D.clientX;
                            if (D.currentTarget.contains(_) && oe) {
                              const M = D.clientX > j.current ? "right" : "left";
                              U.current = M, j.current = D.clientX;
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
qh.displayName = xt;
var MR = "MenuGroup", Ol = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g(ce.div, { role: "group", ...r, ref: t });
  }
);
Ol.displayName = MR;
var AR = "MenuLabel", Zh = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g(ce.div, { ...r, ref: t });
  }
);
Zh.displayName = AR;
var di = "MenuItem", yu = "menu.itemSelect", Xi = f.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = f.useRef(null), s = po(di, e.__scopeMenu), a = kl(di, e.__scopeMenu), l = de(t, i), c = f.useRef(!1), d = () => {
      const u = i.current;
      if (!n && u) {
        const p = new CustomEvent(yu, { bubbles: !0, cancelable: !0 });
        u.addEventListener(yu, (h) => r == null ? void 0 : r(h), { once: !0 }), Lf(u, p), p.defaultPrevented ? c.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ g(
      Jh,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: X(e.onClick, d),
        onPointerDown: (u) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, u), c.current = !0;
        },
        onPointerUp: X(e.onPointerUp, (u) => {
          var p;
          c.current || (p = u.currentTarget) == null || p.click();
        }),
        onKeyDown: X(e.onKeyDown, (u) => {
          const p = a.searchRef.current !== "";
          n || p && u.key === " " || Sa.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Xi.displayName = di;
var Jh = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = kl(di, n), a = Gh(n), l = f.useRef(null), c = de(t, l), [d, u] = f.useState(!1), [p, h] = f.useState("");
    return f.useEffect(() => {
      const m = l.current;
      m && h((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ g(
      Kr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ g(lR, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ g(
          ce.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: X(
              e.onPointerMove,
              Yr((m) => {
                r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              Yr((m) => s.onItemLeave(m))
            ),
            onFocus: X(e.onFocus, () => u(!0)),
            onBlur: X(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), DR = "MenuCheckboxItem", Qh = f.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ g(om, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ g(
      Xi,
      {
        role: "menuitemcheckbox",
        "aria-checked": fi(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Vl(n),
        onSelect: X(
          o.onSelect,
          () => r == null ? void 0 : r(fi(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Qh.displayName = DR;
var em = "MenuRadioGroup", [NR, IR] = Un(
  em,
  { value: void 0, onValueChange: () => {
  } }
), tm = f.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = He(r);
    return /* @__PURE__ */ g(NR, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ g(Ol, { ...o, ref: t }) });
  }
);
tm.displayName = em;
var nm = "MenuRadioItem", rm = f.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = IR(nm, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ g(om, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ g(
      Xi,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Vl(i),
        onSelect: X(
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
rm.displayName = nm;
var Ll = "MenuItemIndicator", [om, kR] = Un(
  Ll,
  { checked: !1 }
), im = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = kR(Ll, n);
    return /* @__PURE__ */ g(
      Qe,
      {
        present: r || fi(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ g(
          ce.span,
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
im.displayName = Ll;
var _R = "MenuSeparator", sm = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g(
      ce.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
sm.displayName = _R;
var OR = "MenuArrow", am = f.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = fo(n);
    return /* @__PURE__ */ g(zi, { ...o, ...r, ref: t });
  }
);
am.displayName = OR;
var Fl = "MenuSub", [LR, lm] = Un(Fl), cm = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = Tn(Fl, t), s = fo(t), [a, l] = f.useState(null), [c, d] = f.useState(null), u = He(o);
  return f.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ g(io, { ...s, children: /* @__PURE__ */ g(
    Uh,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ g(
        LR,
        {
          scope: t,
          contentId: Be(),
          triggerId: Be(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
cm.displayName = Fl;
var Fr = "MenuSubTrigger", um = f.forwardRef(
  (e, t) => {
    const n = Tn(Fr, e.__scopeMenu), r = po(Fr, e.__scopeMenu), o = lm(Fr, e.__scopeMenu), i = kl(Fr, e.__scopeMenu), s = f.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, c = { __scopeMenu: e.__scopeMenu }, d = f.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return f.useEffect(() => d, [d]), f.useEffect(() => {
      const u = a.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [a, l]), /* @__PURE__ */ g(Nl, { asChild: !0, ...c, children: /* @__PURE__ */ g(
      Jh,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": pm(n.open),
        ...e,
        ref: st(t, o.onTriggerChange),
        onClick: (u) => {
          var p;
          (p = e.onClick) == null || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          Yr((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          Yr((u) => {
            var h, m;
            d();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (m = n.content) == null ? void 0 : m.dataset.side, y = v === "right", b = y ? -5 : 5, x = p[y ? "left" : "right"], w = p[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + b, y: u.clientY },
                  { x, y: p.top },
                  { x: w, y: p.top },
                  { x: w, y: p.bottom },
                  { x, y: p.bottom }
                ],
                side: v
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
        onKeyDown: X(e.onKeyDown, (u) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && u.key === " " || vR[r.dir].includes(u.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
um.displayName = Fr;
var dm = "MenuSubContent", fm = f.forwardRef(
  (e, t) => {
    const n = Yh(xt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Tn(xt, e.__scopeMenu), s = po(xt, e.__scopeMenu), a = lm(dm, e.__scopeMenu), l = f.useRef(null), c = de(t, l);
    return /* @__PURE__ */ g(Kr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g(Qe, { present: r || i.open, children: /* @__PURE__ */ g(Kr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ g(
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
        onFocusOutside: X(e.onFocusOutside, (d) => {
          d.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (d) => {
          var h;
          const u = d.currentTarget.contains(d.target), p = yR[s.dir].includes(d.key);
          u && p && (i.onOpenChange(!1), (h = a.trigger) == null || h.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
fm.displayName = dm;
function pm(e) {
  return e ? "open" : "closed";
}
function fi(e) {
  return e === "indeterminate";
}
function Vl(e) {
  return fi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function FR(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function VR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function $R(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = VR(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function BR(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, d = a.y, u = l.x, p = l.y;
    d > r != p > r && n < (u - c) * (r - d) / (p - d) + c && (o = !o);
  }
  return o;
}
function zR(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return BR(n, t);
}
function Yr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var HR = Kh, jR = Nl, WR = Xh, GR = qh, UR = Ol, KR = Zh, YR = Xi, XR = Qh, qR = tm, ZR = rm, JR = im, QR = sm, eE = am, tE = cm, nE = um, rE = fm, qi = "DropdownMenu", [oE] = kt(
  qi,
  [Wh]
), et = Wh(), [iE, hm] = oE(qi), mm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = et(t), c = f.useRef(null), [d, u] = en({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: qi
  });
  return /* @__PURE__ */ g(
    iE,
    {
      scope: t,
      triggerId: Be(),
      triggerRef: c,
      contentId: Be(),
      open: d,
      onOpenChange: u,
      onOpenToggle: f.useCallback(() => u((p) => !p), [u]),
      modal: a,
      children: /* @__PURE__ */ g(HR, { ...l, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
};
mm.displayName = qi;
var gm = "DropdownMenuTrigger", vm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = hm(gm, n), s = et(n);
    return /* @__PURE__ */ g(jR, { asChild: !0, ...s, children: /* @__PURE__ */ g(
      ce.button,
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
        ref: st(t, i.triggerRef),
        onPointerDown: X(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: X(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
vm.displayName = gm;
var sE = "DropdownMenuPortal", ym = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = et(t);
  return /* @__PURE__ */ g(WR, { ...r, ...n });
};
ym.displayName = sE;
var bm = "DropdownMenuContent", wm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = hm(bm, n), i = et(n), s = f.useRef(!1);
    return /* @__PURE__ */ g(
      GR,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: X(e.onInteractOutside, (a) => {
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
wm.displayName = bm;
var aE = "DropdownMenuGroup", xm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ g(UR, { ...o, ...r, ref: t });
  }
);
xm.displayName = aE;
var lE = "DropdownMenuLabel", Sm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ g(KR, { ...o, ...r, ref: t });
  }
);
Sm.displayName = lE;
var cE = "DropdownMenuItem", Cm = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ g(YR, { ...o, ...r, ref: t });
  }
);
Cm.displayName = cE;
var uE = "DropdownMenuCheckboxItem", Rm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(XR, { ...o, ...r, ref: t });
});
Rm.displayName = uE;
var dE = "DropdownMenuRadioGroup", Em = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(qR, { ...o, ...r, ref: t });
});
Em.displayName = dE;
var fE = "DropdownMenuRadioItem", Pm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(ZR, { ...o, ...r, ref: t });
});
Pm.displayName = fE;
var pE = "DropdownMenuItemIndicator", Tm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(JR, { ...o, ...r, ref: t });
});
Tm.displayName = pE;
var hE = "DropdownMenuSeparator", Mm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(QR, { ...o, ...r, ref: t });
});
Mm.displayName = hE;
var mE = "DropdownMenuArrow", gE = f.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
    return /* @__PURE__ */ g(eE, { ...o, ...r, ref: t });
  }
);
gE.displayName = mE;
var vE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = et(t), [a, l] = en({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ g(tE, { ...s, open: a, onOpenChange: l, children: n });
}, yE = "DropdownMenuSubTrigger", Am = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(nE, { ...o, ...r, ref: t });
});
Am.displayName = yE;
var bE = "DropdownMenuSubContent", Dm = f.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = et(n);
  return /* @__PURE__ */ g(
    rE,
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
Dm.displayName = bE;
var wE = mm, xE = vm, Nm = ym, Im = wm, SE = xm, km = Sm, _m = Cm, Om = Rm, CE = Em, Lm = Pm, Fm = Tm, Vm = Mm, RE = vE, $m = Am, Bm = Dm;
// @__NO_SIDE_EFFECTS__
function EE(e) {
  const t = /* @__PURE__ */ PE(e), n = f.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = f.Children.toArray(i), l = a.find(ME);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ g(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ g(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function PE(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = DE(o), a = AE(i, o.props);
      return o.type !== f.Fragment && (a.ref = r ? st(r, s) : s), f.cloneElement(o, a);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var TE = Symbol("radix.slottable");
function ME(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === TE;
}
function AE(e, t) {
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
function DE(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Zi = "Popover", [zm] = kt(Zi, [
  Rn
]), ho = Rn(), [NE, Mn] = zm(Zi), Hm = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = ho(t), l = f.useRef(null), [c, d] = f.useState(!1), [u, p] = en({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Zi
  });
  return /* @__PURE__ */ g(io, { ...a, children: /* @__PURE__ */ g(
    NE,
    {
      scope: t,
      contentId: Be(),
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
Hm.displayName = Zi;
var jm = "PopoverAnchor", Wm = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Mn(jm, n), i = ho(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return f.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ g(so, { ...i, ...r, ref: t });
  }
);
Wm.displayName = jm;
var Gm = "PopoverTrigger", Um = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Mn(Gm, n), i = ho(n), s = de(t, o.triggerRef), a = /* @__PURE__ */ g(
      ce.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Zm(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ g(so, { asChild: !0, ...i, children: a });
  }
);
Um.displayName = Gm;
var $l = "PopoverPortal", [IE, kE] = zm($l, {
  forceMount: void 0
}), Km = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Mn($l, t);
  return /* @__PURE__ */ g(IE, { scope: t, forceMount: n, children: /* @__PURE__ */ g(Qe, { present: n || i.open, children: /* @__PURE__ */ g(wr, { asChild: !0, container: o, children: r }) }) });
};
Km.displayName = $l;
var ur = "PopoverContent", Ym = f.forwardRef(
  (e, t) => {
    const n = kE(ur, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Mn(ur, e.__scopePopover);
    return /* @__PURE__ */ g(Qe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ g(OE, { ...o, ref: t }) : /* @__PURE__ */ g(LE, { ...o, ref: t }) });
  }
);
Ym.displayName = ur;
var _E = /* @__PURE__ */ EE("PopoverContent.RemoveScroll"), OE = f.forwardRef(
  (e, t) => {
    const n = Mn(ur, e.__scopePopover), r = f.useRef(null), o = de(t, r), i = f.useRef(!1);
    return f.useEffect(() => {
      const s = r.current;
      if (s) return Hi(s);
    }, []), /* @__PURE__ */ g(ao, { as: _E, allowPinchZoom: !0, children: /* @__PURE__ */ g(
      Xm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: X(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: X(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), LE = f.forwardRef(
  (e, t) => {
    const n = Mn(ur, e.__scopePopover), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ g(
      Xm,
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
), Xm = f.forwardRef(
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
    } = e, p = Mn(ur, n), h = ho(n);
    return Oi(), /* @__PURE__ */ g(
      ro,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ g(
          vr,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ g(
              Bi,
              {
                "data-state": Zm(p.open),
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
), qm = "PopoverClose", FE = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Mn(qm, n);
    return /* @__PURE__ */ g(
      ce.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
FE.displayName = qm;
var VE = "PopoverArrow", $E = f.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ho(n);
    return /* @__PURE__ */ g(zi, { ...o, ...r, ref: t });
  }
);
$E.displayName = VE;
function Zm(e) {
  return e ? "open" : "closed";
}
var BE = Hm, zE = Wm, HE = Um, jE = Km, Jm = Ym;
function WE(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bl = "ScrollArea", [Qm] = kt(Bl), [GE, Ct] = Qm(Bl), eg = f.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...s
    } = e, [a, l] = f.useState(null), [c, d] = f.useState(null), [u, p] = f.useState(null), [h, m] = f.useState(null), [v, y] = f.useState(null), [b, x] = f.useState(0), [w, S] = f.useState(0), [C, R] = f.useState(!1), [P, E] = f.useState(!1), A = de(t, (k) => l(k)), T = _i(o);
    return /* @__PURE__ */ g(
      GE,
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
        onScrollbarXChange: m,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: R,
        scrollbarY: v,
        onScrollbarYChange: y,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: x,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ g(
          ce.div,
          {
            dir: T,
            ...s,
            ref: A,
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
eg.displayName = Bl;
var tg = "ScrollAreaViewport", ng = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, s = Ct(tg, n), a = f.useRef(null), l = de(t, a, s.onViewportChange);
    return /* @__PURE__ */ z(jt, { children: [
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
        ce.div,
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
          children: /* @__PURE__ */ g("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
ng.displayName = tg;
var Kt = "ScrollAreaScrollbar", zl = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ct(Kt, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return f.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ g(UE, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ g(KE, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ g(rg, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ g(Hl, { ...r, ref: t }) : null;
  }
);
zl.displayName = Kt;
var UE = f.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ct(Kt, e.__scopeScrollArea), [i, s] = f.useState(!1);
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ g(Qe, { present: n || i, children: /* @__PURE__ */ g(
    rg,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), KE = f.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ct(Kt, e.__scopeScrollArea), i = e.orientation === "horizontal", s = Qi(() => l("SCROLL_END"), 100), [a, l] = WE("hidden", {
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
  }, [o.viewport, i, l, s]), /* @__PURE__ */ g(Qe, { present: n || a !== "hidden", children: /* @__PURE__ */ g(
    Hl,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: X(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: X(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), rg = f.forwardRef((e, t) => {
  const n = Ct(Kt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, s] = f.useState(!1), a = e.orientation === "horizontal", l = Qi(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(a ? c : d);
    }
  }, 10);
  return dr(n.viewport, l), dr(n.content, l), /* @__PURE__ */ g(Qe, { present: r || i, children: /* @__PURE__ */ g(
    Hl,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Hl = f.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Ct(Kt, e.__scopeScrollArea), i = f.useRef(null), s = f.useRef(0), [a, l] = f.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = lg(a.viewport, a.content), d = {
    ...r,
    sizes: a,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => i.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function u(p, h) {
    return QE(p, s.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ g(
    YE,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollLeft, h = bu(p, a, o.dir);
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
  ) : n === "vertical" ? /* @__PURE__ */ g(
    XE,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const p = o.viewport.scrollTop, h = bu(p, a);
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
}), YE = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Ct(Kt, e.__scopeScrollArea), [s, a] = f.useState(), l = f.useRef(null), c = de(t, l, i.onScrollbarXChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ g(
    ig,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ji(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const p = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), ug(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: hi(s.paddingLeft),
            paddingEnd: hi(s.paddingRight)
          }
        });
      }
    }
  );
}), XE = f.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Ct(Kt, e.__scopeScrollArea), [s, a] = f.useState(), l = f.useRef(null), c = de(t, l, i.onScrollbarYChange);
  return f.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ g(
    ig,
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
        "--radix-scroll-area-thumb-height": Ji(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const p = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), ug(p, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: hi(s.paddingTop),
            paddingEnd: hi(s.paddingBottom)
          }
        });
      }
    }
  );
}), [qE, og] = Qm(Kt), ig = f.forwardRef((e, t) => {
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
  } = e, h = Ct(Kt, n), [m, v] = f.useState(null), y = de(t, (A) => v(A)), b = f.useRef(null), x = f.useRef(""), w = h.viewport, S = r.content - r.viewport, C = He(d), R = He(l), P = Qi(u, 10);
  function E(A) {
    if (b.current) {
      const T = A.clientX - b.current.left, k = A.clientY - b.current.top;
      c({ x: T, y: k });
    }
  }
  return f.useEffect(() => {
    const A = (T) => {
      const k = T.target;
      (m == null ? void 0 : m.contains(k)) && C(T, S);
    };
    return document.addEventListener("wheel", A, { passive: !1 }), () => document.removeEventListener("wheel", A, { passive: !1 });
  }, [w, m, S, C]), f.useEffect(R, [r, R]), dr(m, P), dr(h.content, P), /* @__PURE__ */ g(
    qE,
    {
      scope: n,
      scrollbar: m,
      hasThumb: o,
      onThumbChange: He(i),
      onThumbPointerUp: He(s),
      onThumbPositionChange: R,
      onThumbPointerDown: He(a),
      children: /* @__PURE__ */ g(
        ce.div,
        {
          ...p,
          ref: y,
          style: { position: "absolute", ...p.style },
          onPointerDown: X(e.onPointerDown, (A) => {
            A.button === 0 && (A.target.setPointerCapture(A.pointerId), b.current = m.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), E(A));
          }),
          onPointerMove: X(e.onPointerMove, E),
          onPointerUp: X(e.onPointerUp, (A) => {
            const T = A.target;
            T.hasPointerCapture(A.pointerId) && T.releasePointerCapture(A.pointerId), document.body.style.webkitUserSelect = x.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), pi = "ScrollAreaThumb", sg = f.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = og(pi, e.__scopeScrollArea);
    return /* @__PURE__ */ g(Qe, { present: n || o.hasThumb, children: /* @__PURE__ */ g(ZE, { ref: t, ...r }) });
  }
), ZE = f.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = Ct(pi, n), s = og(pi, n), { onThumbPositionChange: a } = s, l = de(
      t,
      (u) => s.onThumbChange(u)
    ), c = f.useRef(void 0), d = Qi(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return f.useEffect(() => {
      const u = i.viewport;
      if (u) {
        const p = () => {
          if (d(), !c.current) {
            const h = eP(u, a);
            c.current = h, a();
          }
        };
        return a(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
      }
    }, [i.viewport, d, a]), /* @__PURE__ */ g(
      ce.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: X(e.onPointerDownCapture, (u) => {
          const h = u.target.getBoundingClientRect(), m = u.clientX - h.left, v = u.clientY - h.top;
          s.onThumbPointerDown({ x: m, y: v });
        }),
        onPointerUp: X(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
sg.displayName = pi;
var jl = "ScrollAreaCorner", ag = f.forwardRef(
  (e, t) => {
    const n = Ct(jl, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ g(JE, { ...e, ref: t }) : null;
  }
);
ag.displayName = jl;
var JE = f.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Ct(jl, n), [i, s] = f.useState(0), [a, l] = f.useState(0), c = !!(i && a);
  return dr(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), dr(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), c ? /* @__PURE__ */ g(
    ce.div,
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
function hi(e) {
  return e ? parseInt(e, 10) : 0;
}
function lg(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ji(e) {
  const t = lg(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function QE(e, t, n, r = "ltr") {
  const o = Ji(n), i = o / 2, s = t || i, a = o - s, l = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, d = n.content - n.viewport, u = r === "ltr" ? [0, d] : [d * -1, 0];
  return cg([l, c], u)(e);
}
function bu(e, t, n = "ltr") {
  const r = Ji(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, l = n === "ltr" ? [0, s] : [s * -1, 0], c = ua(e, l);
  return cg([0, s], [0, a])(c);
}
function cg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ug(e, t) {
  return e > 0 && e < t;
}
var eP = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function Qi(e, t) {
  const n = He(e), r = f.useRef(0);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), f.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function dr(e, t) {
  const n = He(t);
  Ke(() => {
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
var dg = eg, tP = ng, nP = ag, rP = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function oP(e) {
  const t = ({ children: n }) => /* @__PURE__ */ g(jt, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = rP, t;
}
var [es] = kt("Tooltip", [
  Rn
]), ts = Rn(), fg = "TooltipProvider", iP = 700, Ca = "tooltip.open", [sP, Wl] = es(fg), pg = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = iP,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, s = f.useRef(!0), a = f.useRef(!1), l = f.useRef(0);
  return f.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ g(
    sP,
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
pg.displayName = fg;
var Xr = "Tooltip", [aP, mo] = es(Xr), hg = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = Wl(Xr, e.__scopeTooltip), c = ts(t), [d, u] = f.useState(null), p = Be(), h = f.useRef(0), m = s ?? l.disableHoverableContent, v = a ?? l.delayDuration, y = f.useRef(!1), [b, x] = en({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ca))) : l.onClose(), i == null || i(P);
    },
    caller: Xr
  }), w = f.useMemo(() => b ? y.current ? "delayed-open" : "instant-open" : "closed", [b]), S = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y.current = !1, x(!0);
  }, [x]), C = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, x(!1);
  }, [x]), R = f.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      y.current = !0, x(!0), h.current = 0;
    }, v);
  }, [v, x]);
  return f.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ g(io, { ...c, children: /* @__PURE__ */ g(
    aP,
    {
      scope: t,
      contentId: p,
      open: b,
      stateAttribute: w,
      trigger: d,
      onTriggerChange: u,
      onTriggerEnter: f.useCallback(() => {
        l.isOpenDelayedRef.current ? R() : S();
      }, [l.isOpenDelayedRef, R, S]),
      onTriggerLeave: f.useCallback(() => {
        m ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, m]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: m,
      children: n
    }
  ) });
};
hg.displayName = Xr;
var Ra = "TooltipTrigger", mg = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = mo(Ra, n), i = Wl(Ra, n), s = ts(n), a = f.useRef(null), l = de(t, a, o.onTriggerChange), c = f.useRef(!1), d = f.useRef(!1), u = f.useCallback(() => c.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ g(so, { asChild: !0, ...s, children: /* @__PURE__ */ g(
      ce.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: X(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: X(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: X(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: X(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: X(e.onBlur, o.onClose),
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
mg.displayName = Ra;
var Gl = "TooltipPortal", [lP, cP] = es(Gl, {
  forceMount: void 0
}), gg = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = mo(Gl, t);
  return /* @__PURE__ */ g(lP, { scope: t, forceMount: n, children: /* @__PURE__ */ g(Qe, { present: n || i.open, children: /* @__PURE__ */ g(wr, { asChild: !0, container: o, children: r }) }) });
};
gg.displayName = Gl;
var fr = "TooltipContent", vg = f.forwardRef(
  (e, t) => {
    const n = cP(fr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = mo(fr, e.__scopeTooltip);
    return /* @__PURE__ */ g(Qe, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ g(yg, { side: o, ...i, ref: t }) : /* @__PURE__ */ g(uP, { side: o, ...i, ref: t }) });
  }
), uP = f.forwardRef((e, t) => {
  const n = mo(fr, e.__scopeTooltip), r = Wl(fr, e.__scopeTooltip), o = f.useRef(null), i = de(t, o), [s, a] = f.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: u } = r, p = f.useCallback(() => {
    a(null), u(!1);
  }, [u]), h = f.useCallback(
    (m, v) => {
      const y = m.currentTarget, b = { x: m.clientX, y: m.clientY }, x = hP(b, y.getBoundingClientRect()), w = mP(b, x), S = gP(v.getBoundingClientRect()), C = yP([...w, ...S]);
      a(C), u(!0);
    },
    [u]
  );
  return f.useEffect(() => () => p(), [p]), f.useEffect(() => {
    if (l && d) {
      const m = (y) => h(y, d), v = (y) => h(y, l);
      return l.addEventListener("pointerleave", m), d.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", m), d.removeEventListener("pointerleave", v);
      };
    }
  }, [l, d, h, p]), f.useEffect(() => {
    if (s) {
      const m = (v) => {
        const y = v.target, b = { x: v.clientX, y: v.clientY }, x = (l == null ? void 0 : l.contains(y)) || (d == null ? void 0 : d.contains(y)), w = !vP(b, s);
        x ? p() : w && (p(), c());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [l, d, s, c, p]), /* @__PURE__ */ g(yg, { ...e, ref: i });
}), [dP, fP] = es(Xr, { isInside: !1 }), pP = /* @__PURE__ */ oP("TooltipContent"), yg = f.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = mo(fr, n), c = ts(n), { onClose: d } = l;
    return f.useEffect(() => (document.addEventListener(Ca, d), () => document.removeEventListener(Ca, d)), [d]), f.useEffect(() => {
      if (l.trigger) {
        const u = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", u, { capture: !0 }), () => window.removeEventListener("scroll", u, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ g(
      vr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ z(
          Bi,
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
              /* @__PURE__ */ g(pP, { children: r }),
              /* @__PURE__ */ g(dP, { scope: n, isInside: !0, children: /* @__PURE__ */ g(E0, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
vg.displayName = fr;
var bg = "TooltipArrow", wg = f.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ts(n);
    return fP(
      bg,
      n
    ).isInside ? null : /* @__PURE__ */ g(zi, { ...o, ...r, ref: t });
  }
);
wg.displayName = bg;
function hP(e, t) {
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
function mP(e, t, n = 5) {
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
function gP(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function vP(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, d = a.y, u = l.x, p = l.y;
    d > r != p > r && n < (u - c) * (r - d) / (p - d) + c && (o = !o);
  }
  return o;
}
function yP(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), bP(t);
}
function bP(e) {
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
var wP = pg, xP = hg, SP = mg, CP = gg, RP = vg, EP = wg;
function Sr({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ g(
    wP,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function hn({
  ...e
}) {
  return /* @__PURE__ */ g(xP, { "data-slot": "tooltip", ...e });
}
function mn({
  ...e
}) {
  return /* @__PURE__ */ g(SP, { "data-slot": "tooltip-trigger", ...e });
}
function gn({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ g(CP, { children: /* @__PURE__ */ z(
    RP,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: q(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md border border-border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-sm has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ g(EP, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-popover fill-popover" })
      ]
    }
  ) });
}
const PP = Ih, W_ = qC, TP = kh, G_ = Lh, xg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Al,
  {
    ref: n,
    className: q(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xg.displayName = Al.displayName;
const Sg = f.forwardRef(({ className: e, children: t, hideClose: n, ...r }, o) => /* @__PURE__ */ z(TP, { children: [
  /* @__PURE__ */ g(xg, {}),
  /* @__PURE__ */ z(
    Dl,
    {
      ref: o,
      className: q(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg",
        e
      ),
      ...r,
      children: [
        t,
        !n && /* @__PURE__ */ z(Lh, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ g(El, { className: "size-4" }),
          /* @__PURE__ */ g("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Sg.displayName = Dl.displayName;
const Cg = ({ className: e, ...t }) => /* @__PURE__ */ g(
  "div",
  {
    className: q("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
Cg.displayName = "DialogHeader";
const MP = ({ className: e, ...t }) => /* @__PURE__ */ g(
  "div",
  {
    className: q(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      e
    ),
    ...t
  }
);
MP.displayName = "DialogFooter";
const Rg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  _h,
  {
    ref: n,
    className: q("text-lg leading-none font-semibold tracking-tight", e),
    ...t
  }
));
Rg.displayName = _h.displayName;
const Eg = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Oh,
  {
    ref: n,
    className: q("text-muted-foreground text-sm", e),
    ...t
  }
));
Eg.displayName = Oh.displayName;
const AP = wE, DP = xE, U_ = SE, K_ = Nm, Y_ = RE, X_ = CE, NP = f.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ z(
  $m,
  {
    ref: o,
    className: q(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ g(lo, { className: "ml-auto" })
    ]
  }
));
NP.displayName = $m.displayName;
const IP = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Bm,
  {
    ref: n,
    className: q(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      e
    ),
    ...t
  }
));
IP.displayName = Bm.displayName;
const Pg = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ g(Nm, { children: /* @__PURE__ */ g(
  Im,
  {
    ref: r,
    sideOffset: t,
    className: q(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      e
    ),
    ...n
  }
) }));
Pg.displayName = Im.displayName;
const Tg = f.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(
  _m,
  {
    ref: r,
    className: q(
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Tg.displayName = _m.displayName;
const kP = f.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ z(
  Om,
  {
    ref: o,
    className: q(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ g("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g(Fm, { children: /* @__PURE__ */ g(ci, { className: "size-4" }) }) }),
      t
    ]
  }
));
kP.displayName = Om.displayName;
const _P = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  Lm,
  {
    ref: r,
    className: q(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ g("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g(Fm, { children: /* @__PURE__ */ g(QS, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
_P.displayName = Lm.displayName;
const Mg = f.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(
  km,
  {
    ref: r,
    className: q(
      "px-2 py-1.5 text-xs font-medium text-muted-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Mg.displayName = km.displayName;
const Ag = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Vm,
  {
    ref: n,
    className: q("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Ag.displayName = Vm.displayName;
const OP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ g(
  "span",
  {
    className: q("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
OP.displayName = "DropdownMenuShortcut";
const LP = BE, FP = HE, q_ = zE, Dg = f.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ g(jE, { children: /* @__PURE__ */ g(
  Jm,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: q(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
      e
    ),
    ...r
  }
) }));
Dg.displayName = Jm.displayName;
const VP = f.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(
  dg,
  {
    ref: r,
    className: q("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ g(tP, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ g(Ng, {}),
      /* @__PURE__ */ g(nP, {})
    ]
  }
));
VP.displayName = dg.displayName;
const Ng = f.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ g(
  zl,
  {
    ref: r,
    orientation: t,
    className: q(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      e
    ),
    ...n,
    children: /* @__PURE__ */ g(sg, { className: "bg-border relative flex-1 rounded-full" })
  }
));
Ng.displayName = zl.displayName;
var wu = 1, $P = 0.9, BP = 0.8, zP = 0.17, Ds = 0.1, Ns = 0.999, HP = 0.9999, jP = 0.99, WP = /[\\\/_+.#"@\[\(\{&]/, GP = /[\\\/_+.#"@\[\(\{&]/g, UP = /[\s-]/, Ig = /[\s-]/g;
function Ea(e, t, n, r, o, i, s) {
  if (i === t.length) return o === e.length ? wu : jP;
  var a = `${o},${i}`;
  if (s[a] !== void 0) return s[a];
  for (var l = r.charAt(i), c = n.indexOf(l, o), d = 0, u, p, h, m; c >= 0; ) u = Ea(e, t, n, r, c + 1, i + 1, s), u > d && (c === o ? u *= wu : WP.test(e.charAt(c - 1)) ? (u *= BP, h = e.slice(o, c - 1).match(GP), h && o > 0 && (u *= Math.pow(Ns, h.length))) : UP.test(e.charAt(c - 1)) ? (u *= $P, m = e.slice(o, c - 1).match(Ig), m && o > 0 && (u *= Math.pow(Ns, m.length))) : (u *= zP, o > 0 && (u *= Math.pow(Ns, c - o))), e.charAt(c) !== t.charAt(i) && (u *= HP)), (u < Ds && n.charAt(c - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(c - 1) !== r.charAt(i)) && (p = Ea(e, t, n, r, c + 1, i + 2, s), p * Ds > u && (u = p * Ds)), u > d && (d = u), c = n.indexOf(l, c + 1);
  return s[a] = d, d;
}
function xu(e) {
  return e.toLowerCase().replace(Ig, " ");
}
function KP(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ea(e, t, xu(e), xu(t), 0, 0, {});
}
var YP = [
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
], An = YP.reduce((e, t) => {
  const n = /* @__PURE__ */ Ii(`Primitive.${t}`), r = f.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), kr = '[cmdk-group=""]', Is = '[cmdk-group-items=""]', XP = '[cmdk-group-heading=""]', kg = '[cmdk-item=""]', Su = `${kg}:not([aria-disabled="true"])`, Pa = "cmdk-item-select", Jn = "data-value", qP = (e, t, n) => KP(e, t, n), _g = f.createContext(void 0), go = () => f.useContext(_g), Og = f.createContext(void 0), Ul = () => f.useContext(Og), Lg = f.createContext(void 0), Fg = f.forwardRef((e, t) => {
  let n = Qn(() => {
    var M, F;
    return { search: "", value: (F = (M = e.value) != null ? M : e.defaultValue) != null ? F : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Qn(() => /* @__PURE__ */ new Set()), o = Qn(() => /* @__PURE__ */ new Map()), i = Qn(() => /* @__PURE__ */ new Map()), s = Qn(() => /* @__PURE__ */ new Set()), a = Vg(e), { label: l, children: c, value: d, onValueChange: u, filter: p, shouldFilter: h, loop: m, disablePointerSelection: v = !1, vimBindings: y = !0, ...b } = e, x = Be(), w = Be(), S = Be(), C = f.useRef(null), R = aT();
  Wn(() => {
    if (d !== void 0) {
      let M = d.trim();
      n.current.value = M, P.emit();
    }
  }, [d]), Wn(() => {
    R(6, U);
  }, []);
  let P = f.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, F, W) => {
    var N, $, L, G;
    if (!Object.is(n.current[M], F)) {
      if (n.current[M] = F, M === "search") B(), T(), R(1, k);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let K = document.getElementById(S);
          K ? K.focus() : (N = document.getElementById(x)) == null || N.focus();
        }
        if (R(7, () => {
          var K;
          n.current.selectedItemId = (K = j()) == null ? void 0 : K.id, P.emit();
        }), W || R(5, U), (($ = a.current) == null ? void 0 : $.value) !== void 0) {
          let K = F ?? "";
          (G = (L = a.current).onValueChange) == null || G.call(L, K);
          return;
        }
      }
      P.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), E = f.useMemo(() => ({ value: (M, F, W) => {
    var N;
    F !== ((N = i.current.get(M)) == null ? void 0 : N.value) && (i.current.set(M, { value: F, keywords: W }), n.current.filtered.items.set(M, A(F, W)), R(2, () => {
      T(), P.emit();
    }));
  }, item: (M, F) => (r.current.add(M), F && (o.current.has(F) ? o.current.get(F).add(M) : o.current.set(F, /* @__PURE__ */ new Set([M]))), R(3, () => {
    B(), T(), n.current.value || k(), P.emit();
  }), () => {
    i.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let W = j();
    R(4, () => {
      B(), (W == null ? void 0 : W.getAttribute("id")) === M && k(), P.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    i.current.delete(M), o.current.delete(M);
  }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: x, inputId: S, labelId: w, listInnerRef: C }), []);
  function A(M, F) {
    var W, N;
    let $ = (N = (W = a.current) == null ? void 0 : W.filter) != null ? N : qP;
    return M ? $(M, n.current.search, F) : 0;
  }
  function T() {
    if (!n.current.search || a.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, F = [];
    n.current.filtered.groups.forEach((N) => {
      let $ = o.current.get(N), L = 0;
      $.forEach((G) => {
        let K = M.get(G);
        L = Math.max(K, L);
      }), F.push([N, L]);
    });
    let W = C.current;
    Z().sort((N, $) => {
      var L, G;
      let K = N.getAttribute("id"), Y = $.getAttribute("id");
      return ((L = M.get(Y)) != null ? L : 0) - ((G = M.get(K)) != null ? G : 0);
    }).forEach((N) => {
      let $ = N.closest(Is);
      $ ? $.appendChild(N.parentElement === $ ? N : N.closest(`${Is} > *`)) : W.appendChild(N.parentElement === W ? N : N.closest(`${Is} > *`));
    }), F.sort((N, $) => $[1] - N[1]).forEach((N) => {
      var $;
      let L = ($ = C.current) == null ? void 0 : $.querySelector(`${kr}[${Jn}="${encodeURIComponent(N[0])}"]`);
      L == null || L.parentElement.appendChild(L);
    });
  }
  function k() {
    let M = Z().find((W) => W.getAttribute("aria-disabled") !== "true"), F = M == null ? void 0 : M.getAttribute(Jn);
    P.setState("value", F || void 0);
  }
  function B() {
    var M, F, W, N;
    if (!n.current.search || a.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let $ = 0;
    for (let L of r.current) {
      let G = (F = (M = i.current.get(L)) == null ? void 0 : M.value) != null ? F : "", K = (N = (W = i.current.get(L)) == null ? void 0 : W.keywords) != null ? N : [], Y = A(G, K);
      n.current.filtered.items.set(L, Y), Y > 0 && $++;
    }
    for (let [L, G] of o.current) for (let K of G) if (n.current.filtered.items.get(K) > 0) {
      n.current.filtered.groups.add(L);
      break;
    }
    n.current.filtered.count = $;
  }
  function U() {
    var M, F, W;
    let N = j();
    N && (((M = N.parentElement) == null ? void 0 : M.firstChild) === N && ((W = (F = N.closest(kr)) == null ? void 0 : F.querySelector(XP)) == null || W.scrollIntoView({ block: "nearest" })), N.scrollIntoView({ block: "nearest" }));
  }
  function j() {
    var M;
    return (M = C.current) == null ? void 0 : M.querySelector(`${kg}[aria-selected="true"]`);
  }
  function Z() {
    var M;
    return Array.from(((M = C.current) == null ? void 0 : M.querySelectorAll(Su)) || []);
  }
  function I(M) {
    let F = Z()[M];
    F && P.setState("value", F.getAttribute(Jn));
  }
  function H(M) {
    var F;
    let W = j(), N = Z(), $ = N.findIndex((G) => G === W), L = N[$ + M];
    (F = a.current) != null && F.loop && (L = $ + M < 0 ? N[N.length - 1] : $ + M === N.length ? N[0] : N[$ + M]), L && P.setState("value", L.getAttribute(Jn));
  }
  function O(M) {
    let F = j(), W = F == null ? void 0 : F.closest(kr), N;
    for (; W && !N; ) W = M > 0 ? iT(W, kr) : sT(W, kr), N = W == null ? void 0 : W.querySelector(Su);
    N ? P.setState("value", N.getAttribute(Jn)) : H(M);
  }
  let D = () => I(Z().length - 1), _ = (M) => {
    M.preventDefault(), M.metaKey ? D() : M.altKey ? O(1) : H(1);
  }, oe = (M) => {
    M.preventDefault(), M.metaKey ? I(0) : M.altKey ? O(-1) : H(-1);
  };
  return f.createElement(An.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (M) => {
    var F;
    (F = b.onKeyDown) == null || F.call(b, M);
    let W = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || W)) switch (M.key) {
      case "n":
      case "j": {
        y && M.ctrlKey && _(M);
        break;
      }
      case "ArrowDown": {
        _(M);
        break;
      }
      case "p":
      case "k": {
        y && M.ctrlKey && oe(M);
        break;
      }
      case "ArrowUp": {
        oe(M);
        break;
      }
      case "Home": {
        M.preventDefault(), I(0);
        break;
      }
      case "End": {
        M.preventDefault(), D();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let N = j();
        if (N) {
          let $ = new Event(Pa);
          N.dispatchEvent($);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: cT }, l), ns(e, (M) => f.createElement(Og.Provider, { value: P }, f.createElement(_g.Provider, { value: E }, M))));
}), ZP = f.forwardRef((e, t) => {
  var n, r;
  let o = Be(), i = f.useRef(null), s = f.useContext(Lg), a = go(), l = Vg(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Wn(() => {
    if (!c) return a.item(o, s == null ? void 0 : s.id);
  }, [c]);
  let d = $g(o, i, [e.value, e.children, i], e.keywords), u = Ul(), p = bn((R) => R.value && R.value === d.current), h = bn((R) => c || a.filter() === !1 ? !0 : R.search ? R.filtered.items.get(o) > 0 : !0);
  f.useEffect(() => {
    let R = i.current;
    if (!(!R || e.disabled)) return R.addEventListener(Pa, m), () => R.removeEventListener(Pa, m);
  }, [h, e.onSelect, e.disabled]);
  function m() {
    var R, P;
    v(), (P = (R = l.current).onSelect) == null || P.call(R, d.current);
  }
  function v() {
    u.setState("value", d.current, !0);
  }
  if (!h) return null;
  let { disabled: y, value: b, onSelect: x, forceMount: w, keywords: S, ...C } = e;
  return f.createElement(An.div, { ref: st(i, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!p, "data-disabled": !!y, "data-selected": !!p, onPointerMove: y || a.getDisablePointerSelection() ? void 0 : v, onClick: y ? void 0 : m }, e.children);
}), JP = f.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...i } = e, s = Be(), a = f.useRef(null), l = f.useRef(null), c = Be(), d = go(), u = bn((h) => o || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Wn(() => d.group(s), []), $g(s, a, [e.value, e.heading, l]);
  let p = f.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return f.createElement(An.div, { ref: st(a, t), ...i, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && f.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), ns(e, (h) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, f.createElement(Lg.Provider, { value: p }, h))));
}), QP = f.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = f.useRef(null), i = bn((s) => !s.search);
  return !n && !i ? null : f.createElement(An.div, { ref: st(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), eT = f.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = Ul(), s = bn((c) => c.search), a = bn((c) => c.selectedItemId), l = go();
  return f.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), f.createElement(An.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": a, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), tT = f.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, i = f.useRef(null), s = f.useRef(null), a = bn((c) => c.selectedItemId), l = go();
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
  }, []), f.createElement(An.div, { ref: st(i, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": r, id: l.listId }, ns(e, (c) => f.createElement("div", { ref: st(s, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), nT = f.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: s, ...a } = e;
  return f.createElement(Ih, { open: n, onOpenChange: r }, f.createElement(kh, { container: s }, f.createElement(Al, { "cmdk-overlay": "", className: o }), f.createElement(Dl, { "aria-label": e.label, "cmdk-dialog": "", className: i }, f.createElement(Fg, { ref: t, ...a }))));
}), rT = f.forwardRef((e, t) => bn((n) => n.filtered.count === 0) ? f.createElement(An.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), oT = f.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...i } = e;
  return f.createElement(An.div, { ref: t, ...i, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ns(e, (s) => f.createElement("div", { "aria-hidden": !0 }, s)));
}), ut = Object.assign(Fg, { List: tT, Item: ZP, Input: eT, Group: JP, Separator: QP, Dialog: nT, Empty: rT, Loading: oT });
function iT(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function sT(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Vg(e) {
  let t = f.useRef(e);
  return Wn(() => {
    t.current = e;
  }), t;
}
var Wn = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function Qn(e) {
  let t = f.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function bn(e) {
  let t = Ul(), n = () => e(t.snapshot());
  return f.useSyncExternalStore(t.subscribe, n, n);
}
function $g(e, t, n, r = []) {
  let o = f.useRef(), i = go();
  return Wn(() => {
    var s;
    let a = (() => {
      var c;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    i.value(e, a, l), (s = t.current) == null || s.setAttribute(Jn, a), o.current = a;
  }), o;
}
var aT = () => {
  let [e, t] = f.useState(), n = Qn(() => /* @__PURE__ */ new Map());
  return Wn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function lT(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ns({ asChild: e, children: t }, n) {
  return e && f.isValidElement(t) ? f.cloneElement(lT(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var cT = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Bg = It({});
function uT(e) {
  const t = fe(null);
  return t.current === null && (t.current = e()), t.current;
}
const dT = typeof window < "u", fT = dT ? ul : he, Kl = /* @__PURE__ */ It(null);
function Yl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function mi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Wt = (e, t, n) => n > t ? t : n < e ? e : n;
function Ta(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Cr = () => {
}, tn = () => {
};
var df;
typeof process < "u" && ((df = process.env) == null ? void 0 : df.NODE_ENV) !== "production" && (Cr = (e, t, n) => {
  !e && typeof console < "u" && console.warn(Ta(t, n));
}, tn = (e, t, n) => {
  if (!e)
    throw new Error(Ta(t, n));
});
const wn = {}, zg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Hg(e) {
  return typeof e == "object" && e !== null;
}
const jg = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Wg(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const St = /* @__NO_SIDE_EFFECTS__ */ (e) => e, pT = (e, t) => (n) => t(e(n)), vo = (...e) => e.reduce(pT), qr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Xl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Yl(this.subscriptions, t), () => mi(this.subscriptions, t);
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
const ct = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, wt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Gg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Cu = /* @__PURE__ */ new Set();
function ql(e, t, n) {
  e || Cu.has(t) || (console.warn(Ta(t, n)), Cu.add(t));
}
const Ug = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, hT = 1e-7, mT = 12;
function gT(e, t, n, r, o) {
  let i, s, a = 0;
  do
    s = t + (n - t) / 2, i = Ug(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > hT && ++a < mT);
  return s;
}
function yo(e, t, n, r) {
  if (e === t && n === r)
    return St;
  const o = (i) => gT(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Ug(o(i), t, r);
}
const Kg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Yg = (e) => (t) => 1 - e(1 - t), Xg = /* @__PURE__ */ yo(0.33, 1.53, 0.69, 0.99), Zl = /* @__PURE__ */ Yg(Xg), qg = /* @__PURE__ */ Kg(Zl), Zg = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Zl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Jl = (e) => 1 - Math.sin(Math.acos(e)), Jg = Yg(Jl), Qg = Kg(Jl), vT = /* @__PURE__ */ yo(0.42, 0, 1, 1), yT = /* @__PURE__ */ yo(0, 0, 0.58, 1), ev = /* @__PURE__ */ yo(0.42, 0, 0.58, 1), bT = (e) => Array.isArray(e) && typeof e[0] != "number", tv = (e) => Array.isArray(e) && typeof e[0] == "number", Ru = {
  linear: St,
  easeIn: vT,
  easeInOut: ev,
  easeOut: yT,
  circIn: Jl,
  circInOut: Qg,
  circOut: Jg,
  backIn: Zl,
  backInOut: qg,
  backOut: Xg,
  anticipate: Zg
}, wT = (e) => typeof e == "string", Eu = (e) => {
  if (tv(e)) {
    tn(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, o] = e;
    return yo(t, n, r, o);
  } else if (wT(e))
    return tn(Ru[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Ru[e];
  return e;
}, ko = [
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
function xT(e, t) {
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
      const m = p && o ? n : r;
      return u && s.add(d), m.add(d), d;
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
const ST = 40;
function nv(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = ko.reduce((w, S) => (w[S] = xT(i), w), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: d, update: u, preRender: p, render: h, postRender: m } = s, v = () => {
    const w = wn.useManualTiming, S = w ? o.timestamp : performance.now();
    n = !1, w || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(S - o.timestamp, ST), 1)), o.timestamp = S, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), d.process(o), u.process(o), p.process(o), h.process(o), m.process(o), o.isProcessing = !1, n && t && (r = !1, e(v));
  }, y = () => {
    n = !0, r = !0, o.isProcessing || e(v);
  };
  return { schedule: ko.reduce((w, S) => {
    const C = s[S];
    return w[S] = (R, P = !1, E = !1) => (n || y(), C.schedule(R, P, E)), w;
  }, {}), cancel: (w) => {
    for (let S = 0; S < ko.length; S++)
      s[ko[S]].cancel(w);
  }, state: o, steps: s };
}
const { schedule: Se, cancel: xn, state: Ge, steps: ks } = /* @__PURE__ */ nv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let Uo;
function CT() {
  Uo = void 0;
}
const ot = {
  now: () => (Uo === void 0 && ot.set(Ge.isProcessing || wn.useManualTiming ? Ge.timestamp : performance.now()), Uo),
  set: (e) => {
    Uo = e, queueMicrotask(CT);
  }
}, rv = (e) => (t) => typeof t == "string" && t.startsWith(e), ov = /* @__PURE__ */ rv("--"), RT = /* @__PURE__ */ rv("var(--"), Ql = (e) => RT(e) ? ET.test(e.split("/*")[0].trim()) : !1, ET = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Pu(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Rr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Zr = {
  ...Rr,
  transform: (e) => Wt(0, 1, e)
}, _o = {
  ...Rr,
  default: 1
}, $r = (e) => Math.round(e * 1e5) / 1e5, ec = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function PT(e) {
  return e == null;
}
const TT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tc = (e, t) => (n) => !!(typeof n == "string" && TT.test(n) && n.startsWith(e) || t && !PT(n) && Object.prototype.hasOwnProperty.call(n, t)), iv = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, s, a] = r.match(ec);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, MT = (e) => Wt(0, 255, e), _s = {
  ...Rr,
  transform: (e) => Math.round(MT(e))
}, Ln = {
  test: /* @__PURE__ */ tc("rgb", "red"),
  parse: /* @__PURE__ */ iv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + _s.transform(e) + ", " + _s.transform(t) + ", " + _s.transform(n) + ", " + $r(Zr.transform(r)) + ")"
};
function AT(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Ma = {
  test: /* @__PURE__ */ tc("#"),
  parse: AT,
  transform: Ln.transform
}, bo = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), cn = /* @__PURE__ */ bo("deg"), Ht = /* @__PURE__ */ bo("%"), Q = /* @__PURE__ */ bo("px"), DT = /* @__PURE__ */ bo("vh"), NT = /* @__PURE__ */ bo("vw"), Tu = {
  ...Ht,
  parse: (e) => Ht.parse(e) / 100,
  transform: (e) => Ht.transform(e * 100)
}, tr = {
  test: /* @__PURE__ */ tc("hsl", "hue"),
  parse: /* @__PURE__ */ iv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ht.transform($r(t)) + ", " + Ht.transform($r(n)) + ", " + $r(Zr.transform(r)) + ")"
}, ke = {
  test: (e) => Ln.test(e) || Ma.test(e) || tr.test(e),
  parse: (e) => Ln.test(e) ? Ln.parse(e) : tr.test(e) ? tr.parse(e) : Ma.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ln.transform(e) : tr.transform(e),
  getAnimatableNone: (e) => {
    const t = ke.parse(e);
    return t.alpha = 0, ke.transform(t);
  }
}, IT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function kT(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ec)) == null ? void 0 : t.length) || 0) + (((n = e.match(IT)) == null ? void 0 : n.length) || 0) > 0;
}
const sv = "number", av = "color", _T = "var", OT = "var(", Mu = "${}", LT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace(LT, (l) => (ke.test(l) ? (r.color.push(i), o.push(av), n.push(ke.parse(l))) : l.startsWith(OT) ? (r.var.push(i), o.push(_T), n.push(l)) : (r.number.push(i), o.push(sv), n.push(parseFloat(l))), ++i, Mu)).split(Mu);
  return { values: n, split: a, indexes: r, types: o };
}
function FT(e) {
  return pr(e).values;
}
function lv({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let o = "";
    for (let i = 0; i < n; i++)
      if (o += e[i], r[i] !== void 0) {
        const s = t[i];
        s === sv ? o += $r(r[i]) : s === av ? o += ke.transform(r[i]) : o += r[i];
      }
    return o;
  };
}
function VT(e) {
  return lv(pr(e));
}
const $T = (e) => typeof e == "number" ? 0 : ke.test(e) ? ke.getAnimatableNone(e) : e, BT = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : $T(e);
function zT(e) {
  const t = pr(e);
  return lv(t)(t.values.map((r, o) => BT(r, t.split[o])));
}
const Tt = {
  test: kT,
  parse: FT,
  createTransformer: VT,
  getAnimatableNone: zT
};
function Os(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function HT({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
function gi(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ce = (e, t, n) => e + (t - e) * n, Ls = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, jT = [Ma, Ln, tr], WT = (e) => jT.find((t) => t.test(e));
function Au(e) {
  const t = WT(e);
  if (Cr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === tr && (n = HT(n)), n;
}
const Du = (e, t) => {
  const n = Au(e), r = Au(t);
  if (!n || !r)
    return gi(e, t);
  const o = { ...n };
  return (i) => (o.red = Ls(n.red, r.red, i), o.green = Ls(n.green, r.green, i), o.blue = Ls(n.blue, r.blue, i), o.alpha = Ce(n.alpha, r.alpha, i), Ln.transform(o));
}, Aa = /* @__PURE__ */ new Set(["none", "hidden"]);
function GT(e, t) {
  return Aa.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function UT(e, t) {
  return (n) => Ce(e, t, n);
}
function nc(e) {
  return typeof e == "number" ? UT : typeof e == "string" ? Ql(e) ? gi : ke.test(e) ? Du : XT : Array.isArray(e) ? cv : typeof e == "object" ? ke.test(e) ? Du : KT : gi;
}
function cv(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => nc(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function KT(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = nc(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function YT(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], s = e.indexes[i][r[i]], a = e.values[s] ?? 0;
    n[o] = a, r[i]++;
  }
  return n;
}
const XT = (e, t) => {
  const n = Tt.createTransformer(t), r = pr(e), o = pr(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Aa.has(e) && !o.values.length || Aa.has(t) && !r.values.length ? GT(e, t) : vo(cv(YT(r, o), o.values), n) : (Cr(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), gi(e, t));
};
function uv(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Ce(e, t, n) : nc(e)(e, t);
}
const qT = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => Se.update(t, n),
    stop: () => xn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ge.isProcessing ? Ge.timestamp : ot.now()
  };
}, dv = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, vi = 2e4;
function rc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < vi; )
    t += n, r = e.next(t);
  return t >= vi ? 1 / 0 : t;
}
function ZT(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(rc(r), vi);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ wt(o)
  };
}
const Ee = {
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
function Da(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const JT = 12;
function QT(e, t, n) {
  let r = n;
  for (let o = 1; o < JT; o++)
    r = r - e(r) / t(r);
  return r;
}
const Fs = 1e-3;
function e1({ duration: e = Ee.duration, bounce: t = Ee.bounce, velocity: n = Ee.velocity, mass: r = Ee.mass }) {
  let o, i;
  Cr(e <= /* @__PURE__ */ ct(Ee.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let s = 1 - t;
  s = Wt(Ee.minDamping, Ee.maxDamping, s), e = Wt(Ee.minDuration, Ee.maxDuration, /* @__PURE__ */ wt(e)), s < 1 ? (o = (c) => {
    const d = c * s, u = d * e, p = d - n, h = Da(c, s), m = Math.exp(-u);
    return Fs - p / h * m;
  }, i = (c) => {
    const u = c * s * e, p = u * n + n, h = Math.pow(s, 2) * Math.pow(c, 2) * e, m = Math.exp(-u), v = Da(Math.pow(c, 2), s);
    return (-o(c) + Fs > 0 ? -1 : 1) * ((p - h) * m) / v;
  }) : (o = (c) => {
    const d = Math.exp(-c * e), u = (c - n) * e + 1;
    return -Fs + d * u;
  }, i = (c) => {
    const d = Math.exp(-c * e), u = (n - c) * (e * e);
    return d * u;
  });
  const a = 5 / e, l = QT(o, i, a);
  if (e = /* @__PURE__ */ ct(e), isNaN(l))
    return {
      stiffness: Ee.stiffness,
      damping: Ee.damping,
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
const t1 = ["duration", "bounce"], n1 = ["stiffness", "damping", "mass"];
function Nu(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function r1(e) {
  let t = {
    velocity: Ee.velocity,
    stiffness: Ee.stiffness,
    damping: Ee.damping,
    mass: Ee.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Nu(e, n1) && Nu(e, t1))
    if (t.velocity = 0, e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Wt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: Ee.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = e1({ ...e, velocity: 0 });
      t = {
        ...t,
        ...n,
        mass: Ee.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function yi(e = Ee.visualDuration, t = Ee.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: d, duration: u, velocity: p, isResolvedFromDuration: h } = r1({
    ...n,
    velocity: -/* @__PURE__ */ wt(n.velocity || 0)
  }), m = p || 0, v = c / (2 * Math.sqrt(l * d)), y = s - i, b = /* @__PURE__ */ wt(Math.sqrt(l / d)), x = Math.abs(y) < 5;
  r || (r = x ? Ee.restSpeed.granular : Ee.restSpeed.default), o || (o = x ? Ee.restDelta.granular : Ee.restDelta.default);
  let w, S, C, R, P, E;
  if (v < 1)
    C = Da(b, v), R = (m + v * b * y) / C, w = (T) => {
      const k = Math.exp(-v * b * T);
      return s - k * (R * Math.sin(C * T) + y * Math.cos(C * T));
    }, P = v * b * R + y * C, E = v * b * y - R * C, S = (T) => Math.exp(-v * b * T) * (P * Math.sin(C * T) + E * Math.cos(C * T));
  else if (v === 1) {
    w = (k) => s - Math.exp(-b * k) * (y + (m + b * y) * k);
    const T = m + b * y;
    S = (k) => Math.exp(-b * k) * (b * T * k - m);
  } else {
    const T = b * Math.sqrt(v * v - 1);
    w = (j) => {
      const Z = Math.exp(-v * b * j), I = Math.min(T * j, 300);
      return s - Z * ((m + v * b * y) * Math.sinh(I) + T * y * Math.cosh(I)) / T;
    };
    const k = (m + v * b * y) / T, B = v * b * k - y * T, U = v * b * y - k * T;
    S = (j) => {
      const Z = Math.exp(-v * b * j), I = Math.min(T * j, 300);
      return Z * (B * Math.sinh(I) + U * Math.cosh(I));
    };
  }
  const A = {
    calculatedDuration: h && u || null,
    velocity: (T) => /* @__PURE__ */ ct(S(T)),
    next: (T) => {
      if (!h && v < 1) {
        const B = Math.exp(-v * b * T), U = Math.sin(C * T), j = Math.cos(C * T), Z = s - B * (R * U + y * j), I = /* @__PURE__ */ ct(B * (P * U + E * j));
        return a.done = Math.abs(I) <= r && Math.abs(s - Z) <= o, a.value = a.done ? s : Z, a;
      }
      const k = w(T);
      if (h)
        a.done = T >= u;
      else {
        const B = /* @__PURE__ */ ct(S(T));
        a.done = Math.abs(B) <= r && Math.abs(s - k) <= o;
      }
      return a.value = a.done ? s : k, a;
    },
    toString: () => {
      const T = Math.min(rc(A), vi), k = dv((B) => A.next(T * B).value, T, 30);
      return T + "ms " + k;
    },
    toTransition: () => {
    }
  };
  return A;
}
yi.applyToOptions = (e) => {
  const t = ZT(e, 100, yi);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ ct(t.duration), e.type = "keyframes", e;
};
const o1 = 5;
function fv(e, t, n) {
  const r = Math.max(t - o1, 0);
  return Gg(n - e(r), t - r);
}
function Na({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: d }) {
  const u = e[0], p = {
    done: !1,
    value: u
  }, h = (E) => a !== void 0 && E < a || l !== void 0 && E > l, m = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let v = n * t;
  const y = u + v, b = s === void 0 ? y : s(y);
  b !== y && (v = b - u);
  const x = (E) => -v * Math.exp(-E / r), w = (E) => b + x(E), S = (E) => {
    const A = x(E), T = w(E);
    p.done = Math.abs(A) <= c, p.value = p.done ? b : T;
  };
  let C, R;
  const P = (E) => {
    h(p.value) && (C = E, R = yi({
      keyframes: [p.value, m(p.value)],
      velocity: fv(w, E, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: d
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (E) => {
      let A = !1;
      return !R && C === void 0 && (A = !0, S(E), P(E)), C !== void 0 && E >= C ? R.next(E - C) : (!A && S(E), p);
    }
  };
}
function i1(e, t, n) {
  const r = [], o = n || wn.mix || uv, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || St : t;
      a = vo(l, a);
    }
    r.push(a);
  }
  return r;
}
function s1(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (tn(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = i1(t, r, o), l = a.length, c = (d) => {
    if (s && d < e[0])
      return t[0];
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const p = /* @__PURE__ */ qr(e[u], e[u + 1], d);
    return a[u](p);
  };
  return n ? (d) => c(Wt(e[0], e[i - 1], d)) : c;
}
function a1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ qr(0, t, r);
    e.push(Ce(n, 1, o));
  }
}
function l1(e) {
  const t = [0];
  return a1(t, e.length - 1), t;
}
function c1(e, t) {
  return e.map((n) => n * t);
}
function u1(e, t) {
  return e.map(() => t || ev).splice(0, e.length - 1);
}
function nr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = bT(r) ? r.map(Eu) : Eu(r), i = {
    done: !1,
    value: t[0]
  }, s = c1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : l1(t),
    e
  ), a = s1(s, t, {
    ease: Array.isArray(o) ? o : u1(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const d1 = (e) => e !== null;
function rs(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(d1), a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const f1 = {
  decay: Na,
  inertia: Na,
  tween: nr,
  keyframes: nr,
  spring: yi
};
function pv(e) {
  typeof e.type == "string" && (e.type = f1[e.type]);
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
const p1 = (e) => e / 100;
class bi extends oc {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== ot.now() && this.tick(ot.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    pv(t);
    const { type: n = nr, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = t;
    let { keyframes: a } = t;
    const l = n || nr;
    process.env.NODE_ENV !== "production" && l !== nr && tn(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== nr && typeof a[0] != "number" && (this.mixKeyframes = vo(p1, uv(a[0], a[1])), a = [0, 100]);
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
    const { delay: c = 0, keyframes: d, repeat: u, repeatType: p, repeatDelay: h, type: m, onUpdate: v, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const b = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? b < 0 : b > o;
    this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let w = this.currentTime, S = r;
    if (u) {
      const E = Math.min(this.currentTime, o) / a;
      let A = Math.floor(E), T = E % 1;
      !T && E >= 1 && (T = 1), T === 1 && A--, A = Math.min(A, u + 1), !!(A % 2) && (p === "reverse" ? (T = 1 - T, h && (T -= h / a)) : p === "mirror" && (S = s)), w = Wt(0, 1, T) * a;
    }
    let C;
    x ? (this.delayState.value = d[0], C = this.delayState) : C = S.next(w), i && !x && (C.value = i(C.value));
    let { done: R } = C;
    !x && l !== null && (R = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && R);
    return P && m !== Na && (C.value = rs(d, this.options, y, this.speed)), v && v(C.value), P && this.finish(), C;
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
    return /* @__PURE__ */ wt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ wt(t);
  }
  get time() {
    return /* @__PURE__ */ wt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ ct(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
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
    return fv((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(ot.now()), this.playbackSpeed = t, n && this.driver && (this.time = /* @__PURE__ */ wt(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped)
      return;
    const { driver: t = qT, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), (i = (o = this.options).onPlay) == null || i.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ot.now()), this.holdTime = this.currentTime;
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
function h1(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Fn = (e) => e * 180 / Math.PI, Ia = (e) => {
  const t = Fn(Math.atan2(e[1], e[0]));
  return ka(t);
}, m1 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Ia,
  rotateZ: Ia,
  skewX: (e) => Fn(Math.atan(e[1])),
  skewY: (e) => Fn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ka = (e) => (e = e % 360, e < 0 && (e += 360), e), Iu = Ia, ku = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), _u = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), g1 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ku,
  scaleY: _u,
  scale: (e) => (ku(e) + _u(e)) / 2,
  rotateX: (e) => ka(Fn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => ka(Fn(Math.atan2(-e[2], e[0]))),
  rotateZ: Iu,
  rotate: Iu,
  skewX: (e) => Fn(Math.atan(e[4])),
  skewY: (e) => Fn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function _a(e) {
  return e.includes("scale") ? 1 : 0;
}
function Oa(e, t) {
  if (!e || e === "none")
    return _a(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = g1, o = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = m1, o = a;
  }
  if (!o)
    return _a(t);
  const i = r[t], s = o[1].split(",").map(y1);
  return typeof i == "function" ? i(s) : s[i];
}
const v1 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Oa(n, t);
};
function y1(e) {
  return parseFloat(e.trim());
}
const Er = [
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
], Pr = new Set(Er), Ou = (e) => e === Rr || e === Q, b1 = /* @__PURE__ */ new Set(["x", "y", "z"]), w1 = Er.filter((e) => !b1.has(e));
function x1(e) {
  const t = [];
  return w1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const fn = {
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
  x: (e, { transform: t }) => Oa(t, "x"),
  y: (e, { transform: t }) => Oa(t, "y")
};
fn.translateX = fn.x;
fn.translateY = fn.y;
const Vn = /* @__PURE__ */ new Set();
let La = !1, Fa = !1, Va = !1;
function hv() {
  if (Fa) {
    const e = Array.from(Vn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = x1(r);
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
  Fa = !1, La = !1, Vn.forEach((e) => e.complete(Va)), Vn.clear();
}
function mv() {
  Vn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Fa = !0);
  });
}
function S1() {
  Va = !0, mv(), hv(), Va = !1;
}
class ic {
  constructor(t, n, r, o, i, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Vn.add(this), La || (La = !0, Se.read(mv), Se.resolveKeyframes(hv))) : (this.readKeyframes(), this.complete());
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
    h1(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Vn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Vn.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const C1 = (e) => e.startsWith("--");
function gv(e, t, n) {
  C1(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const R1 = {};
function vv(e, t) {
  const n = /* @__PURE__ */ Wg(e);
  return () => R1[t] ?? n();
}
const E1 = /* @__PURE__ */ vv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), yv = /* @__PURE__ */ vv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Vr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Lu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Vr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Vr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Vr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Vr([0.33, 1.53, 0.69, 0.99])
};
function bv(e, t) {
  if (e)
    return typeof e == "function" ? yv() ? dv(e, t) : "ease-out" : tv(e) ? Vr(e) : Array.isArray(e) ? e.map((n) => bv(n, t) || Lu.easeOut) : Lu[e];
}
function P1(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const d = {
    [t]: n
  };
  l && (d.offset = l);
  const u = bv(a, o);
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
function wv(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function T1({ type: e, ...t }) {
  return wv(e) && yv() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class xv extends oc {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: s = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = s, this.options = t, tn(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const c = T1(t);
    this.animation = P1(n, r, o, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const d = rs(o, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(d), gv(n, r, d), this.animation.cancel();
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
    return /* @__PURE__ */ wt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ wt(t);
  }
  get time() {
    return /* @__PURE__ */ wt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ct(t), n && this.animation.pause();
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
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && E1() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), r && (this.animation.rangeEnd = r), St) : o(this);
  }
}
const Sv = {
  anticipate: Zg,
  backInOut: qg,
  circInOut: Qg
};
function M1(e) {
  return e in Sv;
}
function A1(e) {
  typeof e.ease == "string" && M1(e.ease) && (e.ease = Sv[e.ease]);
}
const Vs = 10;
class D1 extends xv {
  constructor(t) {
    A1(t), pv(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
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
    const a = new bi({
      ...s,
      autoplay: !1
    }), l = Math.max(Vs, ot.now() - this.startTime), c = Wt(0, Vs, l - Vs), d = a.sample(l).value, { name: u } = this.options;
    i && u && gv(i, u, d), n.setWithVelocity(a.sample(Math.max(0, l - c)).value, d, c), a.stop();
  }
}
const Fu = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Tt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function N1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function I1(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = Fu(o, t), a = Fu(i, t);
  return Cr(s === a, `You are trying to animate ${t} from "${o}" to "${i}". "${s ? i : o}" is not an animatable value.`, "value-not-animatable"), !s || !a ? !1 : N1(e) || (n === "spring" || wv(n)) && r;
}
function $a(e) {
  e.duration = 0, e.type = "keyframes";
}
const Cv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), k1 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function _1(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && k1.test(e[t]))
      return !0;
  return !1;
}
const O1 = /* @__PURE__ */ new Set([
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
]), L1 = /* @__PURE__ */ Wg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function F1(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: s, keyframes: a } = e;
  if (!(((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return L1() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Cv.has(n) || O1.has(n) && _1(a)) && (n !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && i !== 0 && s !== "inertia";
}
const V1 = 40;
class $1 extends oc {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", keyframes: a, name: l, motionValue: c, element: d, ...u }) {
    var m;
    super(), this.stop = () => {
      var v, y;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = ot.now();
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
    this.keyframeResolver = new h(a, (v, y, b) => this.onKeyframesResolved(v, y, p, !b), l, c, d), (m = this.keyframeResolver) == null || m.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    var b, x;
    this.keyframeResolver = void 0;
    const { name: i, type: s, velocity: a, delay: l, isHandoff: c, onUpdate: d } = r;
    this.resolvedAt = ot.now();
    let u = !0;
    I1(t, i, s, a) || (u = !1, (wn.instantAnimations || !l) && (d == null || d(rs(t, r, n))), t[0] = t[t.length - 1], $a(r), r.repeat = 0);
    const h = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > V1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, m = u && !c && F1(h), v = (x = (b = h.motionValue) == null ? void 0 : b.owner) == null ? void 0 : x.current;
    let y;
    if (m)
      try {
        y = new D1({
          ...h,
          element: v
        });
      } catch {
        y = new bi(h);
      }
    else
      y = new bi(h);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(St), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), S1()), this._animation;
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
function Rv(e, t, n, r = 0, o = 1) {
  const i = Array.from(e).sort((c, d) => c.sortNodePosition(d)).indexOf(t), s = e.size, a = (s - 1) * r;
  return typeof n == "function" ? n(i, s) : o === 1 ? i * r : a - i * r;
}
const B1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function z1(e) {
  const t = B1.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const H1 = 4;
function Ev(e, t, n = 1) {
  tn(n <= H1, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, o] = z1(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return zg(s) ? parseFloat(s) : s;
  }
  return Ql(o) ? Ev(o, t, n + 1) : o;
}
const j1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, W1 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), G1 = {
  type: "keyframes",
  duration: 0.8
}, U1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, K1 = (e, { keyframes: t }) => t.length > 2 ? G1 : Pr.has(e) ? e.startsWith("scale") ? W1(t[1]) : j1 : U1;
function Pv(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function sc(e, t) {
  const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? Pv(n, e) : n;
}
const Y1 = /* @__PURE__ */ new Set([
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
function X1(e) {
  for (const t in e)
    if (!Y1.has(t))
      return !0;
  return !1;
}
const ac = (e, t, n, r = {}, o, i) => (s) => {
  const a = sc(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ ct(l);
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
  X1(a) || Object.assign(d, K1(e, d)), d.duration && (d.duration = /* @__PURE__ */ ct(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ ct(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && ($a(d), d.delay === 0 && (u = !0)), (wn.instantAnimations || wn.skipAnimations || o != null && o.shouldSkipAnimations) && (u = !0, $a(d), d.delay = 0), d.allowFlatten = !a.type && !a.ease, u && !i && t.get() !== void 0) {
    const p = rs(d.keyframes, a);
    if (p !== void 0) {
      Se.update(() => {
        d.onUpdate(p), d.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new bi(d) : new $1(d);
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
function $n(e, t, n) {
  const r = e.getProps();
  return lc(r, t, n !== void 0 ? n : r.custom, e);
}
const Tv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Er
]), $u = 30, q1 = (e) => !isNaN(parseFloat(e));
class Z1 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var i;
      const o = ot.now();
      if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
        for (const s of this.dependents)
          s.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ot.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = q1(this.current));
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
      r(), Se.read(() => {
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
    const t = ot.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > $u)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $u);
    return Gg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function hr(e, t) {
  return new Z1(e, t);
}
const Ba = (e) => Array.isArray(e);
function J1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hr(n));
}
function Q1(e) {
  return Ba(e) ? e[e.length - 1] || 0 : e;
}
function eM(e, t) {
  const n = $n(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = Q1(i[s]);
    J1(e, s, a);
  }
}
const Ue = (e) => !!(e && e.getVelocity);
function tM(e) {
  return !!(Ue(e) && e.add);
}
function za(e, t) {
  const n = e.getValue("willChange");
  if (tM(n))
    return n.add(t);
  if (!n && wn.WillChange) {
    const r = new wn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function cc(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const nM = "framerAppearId", Mv = "data-" + cc(nM);
function Av(e) {
  return e.props[Mv];
}
function rM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Dv(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  i = i ? Pv(i, l) : l;
  const c = i == null ? void 0 : i.reduceMotion;
  r && (i = r);
  const d = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const p in a) {
    const h = e.getValue(p, e.latestValues[p] ?? null), m = a[p];
    if (m === void 0 || u && rM(u, p))
      continue;
    const v = {
      delay: n,
      ...sc(i || {}, p)
    }, y = h.get();
    if (y !== void 0 && !h.isAnimating() && !Array.isArray(m) && m === y && !v.velocity) {
      Se.update(() => h.set(m));
      continue;
    }
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const S = Av(e);
      if (S) {
        const C = window.MotionHandoffAnimation(S, p, Se);
        C !== null && (v.startTime = C, b = !0);
      }
    }
    za(e, p);
    const x = c ?? e.shouldReduceMotion;
    h.start(ac(p, h, m, x && Tv.has(p) ? { type: !1 } : v, e, b));
    const w = h.animation;
    w && d.push(w);
  }
  if (s) {
    const p = () => Se.update(() => {
      s && eM(e, s);
    });
    d.length ? Promise.all(d).then(p) : p();
  }
  return d;
}
function Ha(e, t, n = {}) {
  var l;
  const r = $n(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Dv(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: p } = o;
    return oM(e, t, c, d, u, p, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [i, s] : [s, i];
    return c().then(() => d());
  } else
    return Promise.all([i(), s(n.delay)]);
}
function oM(e, t, n = 0, r = 0, o = 0, i = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(Ha(l, t, {
      ...s,
      delay: n + (typeof r == "function" ? 0 : r) + Rv(e.variantChildren, l, r, o, i)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function iM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ha(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Ha(e, t, n);
  else {
    const o = typeof t == "function" ? $n(e, t, n.custom) : t;
    r = Promise.all(Dv(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const sM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Nv = (e) => (t) => t.test(e), Iv = [Rr, Q, Ht, cn, NT, DT, sM], Bu = (e) => Iv.find(Nv(e));
function aM(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || jg(e) : !0;
}
const lM = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function cM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ec) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = lM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const uM = /\b([a-z-]*)\(.*?\)/gu, ja = {
  ...Tt,
  getAnimatableNone: (e) => {
    const t = e.match(uM);
    return t ? t.map(cM).join(" ") : e;
  }
}, Wa = {
  ...Tt,
  getAnimatableNone: (e) => {
    const t = Tt.parse(e);
    return Tt.createTransformer(e)(t.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, zu = {
  ...Rr,
  transform: Math.round
}, dM = {
  rotate: cn,
  rotateX: cn,
  rotateY: cn,
  rotateZ: cn,
  scale: _o,
  scaleX: _o,
  scaleY: _o,
  scaleZ: _o,
  skew: cn,
  skewX: cn,
  skewY: cn,
  distance: Q,
  translateX: Q,
  translateY: Q,
  translateZ: Q,
  x: Q,
  y: Q,
  z: Q,
  perspective: Q,
  transformPerspective: Q,
  opacity: Zr,
  originX: Tu,
  originY: Tu,
  originZ: Q
}, uc = {
  // Border props
  borderWidth: Q,
  borderTopWidth: Q,
  borderRightWidth: Q,
  borderBottomWidth: Q,
  borderLeftWidth: Q,
  borderRadius: Q,
  borderTopLeftRadius: Q,
  borderTopRightRadius: Q,
  borderBottomRightRadius: Q,
  borderBottomLeftRadius: Q,
  // Positioning props
  width: Q,
  maxWidth: Q,
  height: Q,
  maxHeight: Q,
  top: Q,
  right: Q,
  bottom: Q,
  left: Q,
  inset: Q,
  insetBlock: Q,
  insetBlockStart: Q,
  insetBlockEnd: Q,
  insetInline: Q,
  insetInlineStart: Q,
  insetInlineEnd: Q,
  // Spacing props
  padding: Q,
  paddingTop: Q,
  paddingRight: Q,
  paddingBottom: Q,
  paddingLeft: Q,
  paddingBlock: Q,
  paddingBlockStart: Q,
  paddingBlockEnd: Q,
  paddingInline: Q,
  paddingInlineStart: Q,
  paddingInlineEnd: Q,
  margin: Q,
  marginTop: Q,
  marginRight: Q,
  marginBottom: Q,
  marginLeft: Q,
  marginBlock: Q,
  marginBlockStart: Q,
  marginBlockEnd: Q,
  marginInline: Q,
  marginInlineStart: Q,
  marginInlineEnd: Q,
  // Typography
  fontSize: Q,
  // Misc
  backgroundPositionX: Q,
  backgroundPositionY: Q,
  ...dM,
  zIndex: zu,
  // SVG
  fillOpacity: Zr,
  strokeOpacity: Zr,
  numOctaves: zu
}, fM = {
  ...uc,
  // Color props
  color: ke,
  backgroundColor: ke,
  outlineColor: ke,
  fill: ke,
  stroke: ke,
  // Border props
  borderColor: ke,
  borderTopColor: ke,
  borderRightColor: ke,
  borderBottomColor: ke,
  borderLeftColor: ke,
  filter: ja,
  WebkitFilter: ja,
  mask: Wa,
  WebkitMask: Wa
}, kv = (e) => fM[e], pM = /* @__PURE__ */ new Set([ja, Wa]);
function _v(e, t) {
  let n = kv(e);
  return pM.has(n) || (n = Tt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const hM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function mM(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !hM.has(i) && pr(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = _v(n, o);
}
class gM extends ic {
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
        const p = Ev(u, n.current);
        p !== void 0 && (t[d] = p), d === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Tv.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = Bu(o), a = Bu(i), l = Pu(o), c = Pu(i);
    if (l !== c && fn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (Ou(s) && Ou(a))
        for (let d = 0; d < t.length; d++) {
          const u = t[d];
          typeof u == "string" && (t[d] = parseFloat(u));
        }
      else fn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || aM(t[o])) && r.push(o);
    r.length && mM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = fn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    r[i] = fn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, c]) => {
      t.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Ov(e, t, n) {
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
const Lv = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function vM(e) {
  return Hg(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: dc } = /* @__PURE__ */ nv(queueMicrotask, !1), Pt = {
  x: !1,
  y: !1
};
function Fv() {
  return Pt.x || Pt.y;
}
function yM(e) {
  return e === "x" || e === "y" ? Pt[e] ? null : (Pt[e] = !0, () => {
    Pt[e] = !1;
  }) : Pt.x || Pt.y ? null : (Pt.x = Pt.y = !0, () => {
    Pt.x = Pt.y = !1;
  });
}
function Vv(e, t) {
  const n = Ov(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function bM(e) {
  return !(e.pointerType === "touch" || Fv());
}
function wM(e, t, n = {}) {
  const [r, o, i] = Vv(e, n);
  return r.forEach((s) => {
    let a = !1, l = !1, c;
    const d = () => {
      s.removeEventListener("pointerleave", m);
    }, u = (y) => {
      c && (c(y), c = void 0), d();
    }, p = (y) => {
      a = !1, window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), l && (l = !1, u(y));
    }, h = () => {
      a = !0, window.addEventListener("pointerup", p, o), window.addEventListener("pointercancel", p, o);
    }, m = (y) => {
      if (y.pointerType !== "touch") {
        if (a) {
          l = !0;
          return;
        }
        u(y);
      }
    }, v = (y) => {
      if (!bM(y))
        return;
      l = !1;
      const b = t(s, y);
      typeof b == "function" && (c = b, s.addEventListener("pointerleave", m, o));
    };
    s.addEventListener("pointerenter", v, o), s.addEventListener("pointerdown", h, o);
  }), i;
}
const $v = (e, t) => t ? e === t ? !0 : $v(e, t.parentElement) : !1, fc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, xM = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function SM(e) {
  return xM.has(e.tagName) || e.isContentEditable === !0;
}
const CM = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function RM(e) {
  return CM.has(e.tagName) || e.isContentEditable === !0;
}
const Ko = /* @__PURE__ */ new WeakSet();
function Hu(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function $s(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const EM = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Hu(() => {
    if (Ko.has(n))
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
  return fc(e) && !Fv();
}
const Wu = /* @__PURE__ */ new WeakSet();
function PM(e, t, n = {}) {
  const [r, o, i] = Vv(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!ju(a) || Wu.has(a))
      return;
    Ko.add(l), n.stopPropagation && Wu.add(a);
    const c = t(l, a), d = (h, m) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", p), Ko.has(l) && Ko.delete(l), ju(h) && typeof c == "function" && c(h, { success: m });
    }, u = (h) => {
      d(h, l === window || l === document || n.useGlobalTarget || $v(l, h.target));
    }, p = (h) => {
      d(h, !1);
    };
    window.addEventListener("pointerup", u, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), vM(a) && (a.addEventListener("focus", (c) => EM(c, o)), !SM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
function pc(e) {
  return Hg(e) && "ownerSVGElement" in e;
}
const Yo = /* @__PURE__ */ new WeakMap();
let un;
const Bv = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : pc(r) && "getBBox" in r ? r.getBBox()[t] : r[n], TM = /* @__PURE__ */ Bv("inline", "width", "offsetWidth"), MM = /* @__PURE__ */ Bv("block", "height", "offsetHeight");
function AM({ target: e, borderBoxSize: t }) {
  var n;
  (n = Yo.get(e)) == null || n.forEach((r) => {
    r(e, {
      get width() {
        return TM(e, t);
      },
      get height() {
        return MM(e, t);
      }
    });
  });
}
function DM(e) {
  e.forEach(AM);
}
function NM() {
  typeof ResizeObserver > "u" || (un = new ResizeObserver(DM));
}
function IM(e, t) {
  un || NM();
  const n = Ov(e);
  return n.forEach((r) => {
    let o = Yo.get(r);
    o || (o = /* @__PURE__ */ new Set(), Yo.set(r, o)), o.add(t), un == null || un.observe(r);
  }), () => {
    n.forEach((r) => {
      const o = Yo.get(r);
      o == null || o.delete(t), o != null && o.size || un == null || un.unobserve(r);
    });
  };
}
const Xo = /* @__PURE__ */ new Set();
let rr;
function kM() {
  rr = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Xo.forEach((t) => t(e));
  }, window.addEventListener("resize", rr);
}
function _M(e) {
  return Xo.add(e), rr || kM(), () => {
    Xo.delete(e), !Xo.size && typeof rr == "function" && (window.removeEventListener("resize", rr), rr = void 0);
  };
}
function Gu(e, t) {
  return typeof e == "function" ? _M(e) : IM(e, t);
}
function OM(e) {
  return pc(e) && e.tagName === "svg";
}
const LM = [...Iv, ke, Tt], FM = (e) => LM.find(Nv(e)), Uu = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), or = () => ({
  x: Uu(),
  y: Uu()
}), Ku = () => ({ min: 0, max: 0 }), Fe = () => ({
  x: Ku(),
  y: Ku()
}), VM = /* @__PURE__ */ new WeakMap();
function os(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Jr(e) {
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
function is(e) {
  return os(e.animate) || mc.some((t) => Jr(e[t]));
}
function zv(e) {
  return !!(is(e) || e.variants);
}
function $M(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Ue(o))
      e.addValue(r, o);
    else if (Ue(i))
      e.addValue(r, hr(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, hr(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ga = { current: null }, Hv = { current: !1 }, BM = typeof window < "u";
function zM() {
  if (Hv.current = !0, !!BM)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ga.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Ga.current = !1;
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
let wi = {};
function jv(e) {
  wi = e;
}
function HM() {
  return wi;
}
class jM {
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
      const h = ot.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, Se.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: d } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.skipAnimationsConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = is(n), this.isVariantNode = zv(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...p } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in p) {
      const m = p[h];
      c[h] !== void 0 && Ue(m) && m.set(c[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (n = this.values.get(o)) == null || n.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    this.current = t, VM.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, i) => this.bindToMotionValue(i, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Hv.current || zM(), this.shouldReduceMotion = Ga.current), process.env.NODE_ENV !== "production" && ql(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), xn(this.notifyUpdate), xn(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
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
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && Cv.has(t) && this.current instanceof HTMLElement) {
      const { factory: s, keyframes: a, times: l, ease: c, duration: d } = n.accelerate, u = new xv({
        element: this.current,
        name: t,
        keyframes: a,
        times: l,
        ease: c,
        duration: /* @__PURE__ */ ct(d)
      }), p = s(u);
      this.valueSubscriptions.set(t, () => {
        p(), u.cancel();
      });
      return;
    }
    const r = Pr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && Se.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
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
    for (t in wi) {
      const n = wi[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Fe();
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
    this.prevMotionValues = $M(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = hr(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (zg(r) || jg(r)) ? r = parseFloat(r) : !FM(r) && Tt.test(n) && (r = _v(t, n)), this.setBaseTarget(t, Ue(r) ? r.get() : r)), Ue(r) ? r.get() : r;
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
    return o !== void 0 && !Ue(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
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
class Wv extends jM {
  constructor() {
    super(...arguments), this.KeyframeResolver = gM;
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
    Ue(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Dn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Gv({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function WM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function GM(e, t) {
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
function Ua({ scale: e, scaleX: t, scaleY: n }) {
  return !Bs(e) || !Bs(t) || !Bs(n);
}
function On(e) {
  return Ua(e) || Uv(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Uv(e) {
  return Xu(e.x) || Xu(e.y);
}
function Xu(e) {
  return e && e !== "0%";
}
function xi(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function qu(e, t, n, r, o) {
  return o !== void 0 && (e = xi(e, o, r)), xi(e, n, r) + t;
}
function Ka(e, t = 0, n = 1, r, o) {
  e.min = qu(e.min, t, n, r, o), e.max = qu(e.max, t, n, r, o);
}
function Kv(e, { x: t, y: n }) {
  Ka(e.x, t.translate, t.scale, t.originPoint), Ka(e.y, n.translate, n.scale, n.originPoint);
}
const Zu = 0.999999999999, Ju = 1.0000000000001;
function UM(e, t, n, r = !1) {
  var a;
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < o; l++) {
    i = n[l], s = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && (Vt(e.x, -i.scroll.offset.x), Vt(e.y, -i.scroll.offset.y)), s && (t.x *= s.x.scale, t.y *= s.y.scale, Kv(e, s)), r && On(i.latestValues) && qo(e, i.latestValues, (a = i.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < Ju && t.x > Zu && (t.x = 1), t.y < Ju && t.y > Zu && (t.y = 1);
}
function Vt(e, t) {
  e.min += t, e.max += t;
}
function Qu(e, t, n, r, o = 0.5) {
  const i = Ce(e.min, e.max, o);
  Ka(e, t, n, i, r);
}
function ed(e, t) {
  return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function qo(e, t, n) {
  const r = n ?? e;
  Qu(e.x, ed(t.x, r.x), t.scaleX, t.scale, t.originX), Qu(e.y, ed(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Yv(e, t) {
  return Gv(GM(e.getBoundingClientRect(), t));
}
function KM(e, t, n) {
  const r = Yv(e, n), { scroll: o } = t;
  return o && (Vt(r.x, o.offset.x), Vt(r.y, o.offset.y)), r;
}
const YM = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, XM = Er.length;
function qM(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < XM; i++) {
    const s = Er[i], a = e[s];
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
      const c = Lv(a, uc[s]);
      if (!l) {
        o = !1;
        const d = YM[s] || s;
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
    if (Pr.has(l)) {
      s = !0;
      continue;
    } else if (ov(l)) {
      o[l] = c;
      continue;
    } else {
      const d = Lv(c, uc[l]);
      l.startsWith("origin") ? (a = !0, i[l] = d) : r[l] = d;
    }
  }
  if (t.transform || (s || n ? r.transform = qM(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
function Xv(e, { style: t, vars: n }, r, o) {
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
const _r = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (Q.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = td(e, t.target.x), r = td(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, ZM = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Tt.parse(e);
    if (o.length > 5)
      return r;
    const i = Tt.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= l;
    const c = Ce(a, l, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
  }
}, Ya = {
  borderRadius: {
    ..._r,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: _r,
  borderTopRightRadius: _r,
  borderBottomLeftRadius: _r,
  borderBottomRightRadius: _r,
  boxShadow: ZM
};
function qv(e, { layout: t, layoutId: n }) {
  return Pr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ya[e] || e === "opacity");
}
function vc(e, t, n) {
  var s;
  const r = e.style, o = t == null ? void 0 : t.style, i = {};
  if (!r)
    return i;
  for (const a in r)
    (Ue(r[a]) || o && Ue(o[a]) || qv(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (i[a] = r[a]);
  return i;
}
function JM(e) {
  return window.getComputedStyle(e);
}
class QM extends Wv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Xv;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Pr.has(n))
      return (r = this.projection) != null && r.isProjecting ? _a(n) : v1(t, n);
    {
      const o = JM(t), i = (ov(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Yv(t, n);
  }
  build(t, n, r) {
    gc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return vc(t, n, r);
  }
}
const eA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, tA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function nA(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? eA : tA;
  e[i.offset] = `${-r}`, e[i.array] = `${t} ${n}`;
}
const rA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Zv(e, {
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
  for (const h of rA)
    u[h] !== void 0 && (p[h] = u[h], delete u[h]);
  t !== void 0 && (u.x = t), n !== void 0 && (u.y = n), r !== void 0 && (u.scale = r), o !== void 0 && nA(u, o, i, s, !1);
}
const Jv = /* @__PURE__ */ new Set([
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
]), Qv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function oA(e, t, n, r) {
  Xv(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Jv.has(o) ? o : cc(o), t.attrs[o]);
}
function ey(e, t, n) {
  const r = vc(e, t, n);
  for (const o in e)
    if (Ue(e[o]) || Ue(t[o])) {
      const i = Er.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
class iA extends Wv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Fe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Pr.has(n)) {
      const r = kv(n);
      return r && r.default || 0;
    }
    return n = Jv.has(n) ? n : cc(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ey(t, n, r);
  }
  build(t, n, r) {
    Zv(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    oA(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Qv(t.tagName), super.mount(t);
  }
}
const sA = mc.length;
function ty(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ty(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < sA; n++) {
    const r = mc[n], o = e.props[r];
    (Jr(o) || o === !1) && (t[r] = o);
  }
  return t;
}
function ny(e, t) {
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
const aA = [...hc].reverse(), lA = hc.length;
function cA(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => iM(e, n, r)));
}
function uA(e) {
  let t = cA(e), n = nd(), r = !0, o = !1;
  const i = (c) => (d, u) => {
    var h;
    const p = $n(e, u, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
    if (p) {
      const { transition: m, transitionEnd: v, ...y } = p;
      d = { ...d, ...y, ...v };
    }
    return d;
  };
  function s(c) {
    t = c(e);
  }
  function a(c) {
    const { props: d } = e, u = ty(e.parent) || {}, p = [], h = /* @__PURE__ */ new Set();
    let m = {}, v = 1 / 0;
    for (let b = 0; b < lA; b++) {
      const x = aA[b], w = n[x], S = d[x] !== void 0 ? d[x] : u[x], C = Jr(S), R = x === c ? w.isActive : null;
      R === !1 && (v = b);
      let P = S === u[x] && S !== d[x] && C;
      if (P && (r || o) && e.manuallyAnimateOnMount && (P = !1), w.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && R === null || // If we didn't and don't have any defined prop for this animation type
      !S && !w.prevProp || // Or if the prop doesn't define an animation
      os(S) || typeof S == "boolean")
        continue;
      if (x === "exit" && w.isActive && R !== !0) {
        w.prevResolvedValues && (m = {
          ...m,
          ...w.prevResolvedValues
        });
        continue;
      }
      const E = dA(w.prevProp, S);
      let A = E || // If we're making this variant active, we want to always make it active
      x === c && w.isActive && !P && C || // If we removed a higher-priority variant (i is in reverse order)
      b > v && C, T = !1;
      const k = Array.isArray(S) ? S : [S];
      let B = k.reduce(i(x), {});
      R === !1 && (B = {});
      const { prevResolvedValues: U = {} } = w, j = {
        ...U,
        ...B
      }, Z = (O) => {
        A = !0, h.has(O) && (T = !0, h.delete(O)), w.needsAnimating[O] = !0;
        const D = e.getValue(O);
        D && (D.liveStyle = !1);
      };
      for (const O in j) {
        const D = B[O], _ = U[O];
        if (m.hasOwnProperty(O))
          continue;
        let oe = !1;
        Ba(D) && Ba(_) ? oe = !ny(D, _) : oe = D !== _, oe ? D != null ? Z(O) : h.add(O) : D !== void 0 && h.has(O) ? Z(O) : w.protectedKeys[O] = !0;
      }
      w.prevProp = S, w.prevResolvedValues = B, w.isActive && (m = { ...m, ...B }), (r || o) && e.blockInitialAnimation && (A = !1);
      const I = P && E;
      A && (!I || T) && p.push(...k.map((O) => {
        const D = { type: x };
        if (typeof O == "string" && (r || o) && !I && e.manuallyAnimateOnMount && e.parent) {
          const { parent: _ } = e, oe = $n(_, O);
          if (_.enteringChildren && oe) {
            const { delayChildren: M } = oe.transition || {};
            D.delay = Rv(_.enteringChildren, e, M);
          }
        }
        return {
          animation: O,
          options: D
        };
      }));
    }
    if (h.size) {
      const b = {};
      if (typeof d.initial != "boolean") {
        const x = $n(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        x && x.transition && (b.transition = x.transition);
      }
      h.forEach((x) => {
        const w = e.getBaseTarget(x), S = e.getValue(x);
        S && (S.liveStyle = !0), b[x] = w ?? null;
      }), p.push({ animation: b });
    }
    let y = !!p.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, o = !1, y ? t(p) : Promise.resolve();
  }
  function l(c, d) {
    var p;
    if (n[c].isActive === d)
      return Promise.resolve();
    (p = e.variantChildren) == null || p.forEach((h) => {
      var m;
      return (m = h.animationState) == null ? void 0 : m.setActive(c, d);
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
function dA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ny(t, e) : !1;
}
function _n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function nd() {
  return {
    animate: _n(!0),
    whileInView: _n(),
    whileHover: _n(),
    whileTap: _n(),
    whileDrag: _n(),
    whileFocus: _n(),
    exit: _n()
  };
}
function Xa(e, t) {
  e.min = t.min, e.max = t.max;
}
function Rt(e, t) {
  Xa(e.x, t.x), Xa(e.y, t.y);
}
function rd(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
const ry = 1e-4, fA = 1 - ry, pA = 1 + ry, oy = 0.01, hA = 0 - oy, mA = 0 + oy;
function it(e) {
  return e.max - e.min;
}
function gA(e, t, n) {
  return Math.abs(e - t) <= n;
}
function od(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Ce(t.min, t.max, e.origin), e.scale = it(n) / it(t), e.translate = Ce(n.min, n.max, e.origin) - e.originPoint, (e.scale >= fA && e.scale <= pA || isNaN(e.scale)) && (e.scale = 1), (e.translate >= hA && e.translate <= mA || isNaN(e.translate)) && (e.translate = 0);
}
function Br(e, t, n, r) {
  od(e.x, t.x, n.x, r ? r.originX : void 0), od(e.y, t.y, n.y, r ? r.originY : void 0);
}
function id(e, t, n, r = 0) {
  const o = r ? Ce(n.min, n.max, r) : n.min;
  e.min = o + t.min, e.max = e.min + it(t);
}
function vA(e, t, n, r) {
  id(e.x, t.x, n.x, r == null ? void 0 : r.x), id(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function sd(e, t, n, r = 0) {
  const o = r ? Ce(n.min, n.max, r) : n.min;
  e.min = t.min - o, e.max = e.min + it(t);
}
function Si(e, t, n, r) {
  sd(e.x, t.x, n.x, r == null ? void 0 : r.x), sd(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function ad(e, t, n, r, o) {
  return e -= t, e = xi(e, 1 / n, r), o !== void 0 && (e = xi(e, 1 / o, r)), e;
}
function yA(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (Ht.test(t) && (t = parseFloat(t), t = Ce(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = Ce(i.min, i.max, r);
  e === i && (a -= t), e.min = ad(e.min, t, n, a, o), e.max = ad(e.max, t, n, a, o);
}
function ld(e, t, [n, r, o], i, s) {
  yA(e, t[n], t[r], t[o], t.scale, i, s);
}
const bA = ["x", "scaleX", "originX"], wA = ["y", "scaleY", "originY"];
function cd(e, t, n, r) {
  ld(e.x, t, bA, n ? n.x : void 0, r ? r.x : void 0), ld(e.y, t, wA, n ? n.y : void 0, r ? r.y : void 0);
}
function ud(e) {
  return e.translate === 0 && e.scale === 1;
}
function iy(e) {
  return ud(e.x) && ud(e.y);
}
function dd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function xA(e, t) {
  return dd(e.x, t.x) && dd(e.y, t.y);
}
function fd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function sy(e, t) {
  return fd(e.x, t.x) && fd(e.y, t.y);
}
function pd(e) {
  return it(e.x) / it(e.y);
}
function hd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function Ft(e) {
  return [e("x"), e("y")];
}
function SA(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: d, rotateX: u, rotateY: p, skewX: h, skewY: m } = n;
    c && (r = `perspective(${c}px) ${r}`), d && (r += `rotate(${d}deg) `), u && (r += `rotateX(${u}deg) `), p && (r += `rotateY(${p}deg) `), h && (r += `skewX(${h}deg) `), m && (r += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const ay = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], CA = ay.length, md = (e) => typeof e == "string" ? parseFloat(e) : e, gd = (e) => typeof e == "number" || Q.test(e);
function RA(e, t, n, r, o, i) {
  o ? (e.opacity = Ce(0, n.opacity ?? 1, EA(r)), e.opacityExit = Ce(t.opacity ?? 1, 0, PA(r))) : i && (e.opacity = Ce(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < CA; s++) {
    const a = ay[s];
    let l = vd(t, a), c = vd(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || gd(l) === gd(c) ? (e[a] = Math.max(Ce(md(l), md(c), r), 0), (Ht.test(c) || Ht.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = Ce(t.rotate || 0, n.rotate || 0, r));
}
function vd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const EA = /* @__PURE__ */ ly(0, 0.5, Jg), PA = /* @__PURE__ */ ly(0.5, 0.95, St);
function ly(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ qr(e, t, r));
}
function TA(e, t, n) {
  const r = Ue(e) ? e : hr(e);
  return r.start(ac("", r, t, n)), r.animation;
}
function Qr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const MA = (e, t) => e.depth - t.depth;
class AA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Yl(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    mi(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(MA), this.isDirty = !1, this.children.forEach(t);
  }
}
function DA(e, t) {
  const n = ot.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (xn(r), e(i - t));
  };
  return Se.setup(r, !0), () => xn(r);
}
function Zo(e) {
  return Ue(e) ? e.get() : e;
}
class NA {
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
      (!o || o.isConnected === !1) && !r.snapshot && (mi(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (mi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
const Jo = {
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
}, zs = ["", "X", "Y", "Z"], IA = 1e3;
let kA = 0;
function Hs(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function cy(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Av(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Se, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && cy(r);
}
function uy({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = kA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(LA), this.nodes.forEach(HA), this.nodes.forEach(jA), this.nodes.forEach(FA);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new AA());
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
      this.isSVG = pc(s) && !OM(s), this.instance = s;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let d, u = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        Se.read(() => {
          u = window.innerWidth;
        }), e(s, () => {
          const h = window.innerWidth;
          h !== u && (u = h, this.root.updateBlockedByResize = !0, d && d(), d = DA(p, 250), Jo.hasAnimatedSinceResize && (Jo.hasAnimatedSinceResize = !1, this.nodes.forEach(wd)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: u, hasRelativeLayoutChanged: p, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || c.getDefaultTransition() || YA, { onLayoutAnimationStart: v, onLayoutAnimationComplete: y } = c.getProps(), b = !this.targetLayout || !sy(this.targetLayout, h), x = !u && p;
        if (this.options.layoutRoot || this.resumeFrom || x || u && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const w = {
            ...sc(m, "layout"),
            onPlay: v,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w), this.setAnimationOrigin(d, x);
        } else
          u || wd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), xn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(WA), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cy(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach($A), this.nodes.forEach(yd);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(bd);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(BA), this.nodes.forEach(zA), this.nodes.forEach(_A), this.nodes.forEach(OA)) : this.nodes.forEach(bd), this.clearAllSnapshots();
      const a = ot.now();
      Ge.delta = Wt(0, 1e3 / 60, a - Ge.timestamp), Ge.timestamp = a, Ge.isProcessing = !0, ks.update.process(Ge), ks.preRender.process(Ge), ks.render.process(Ge), Ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, dc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(VA), this.sharedNodes.forEach(GA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Se.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !it(this.snapshot.measuredBox.x) && !it(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Fe()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !iy(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, d = c !== this.prevTransformTemplateValue;
      s && this.instance && (a || On(this.latestValues) || d) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), XA(l), {
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
        return Fe();
      const a = s.measureViewportBox();
      if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(qA))) {
        const { scroll: d } = this.root;
        d && (Vt(a.x, d.offset.x), Vt(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Fe();
      if (Rt(a, s), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: p } = d;
        d !== this.root && u && p.layoutScroll && (u.wasRoot && Rt(a, s), Vt(a.x, u.offset.x), Vt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1, l) {
      var d, u;
      const c = l || Fe();
      Rt(c, s);
      for (let p = 0; p < this.path.length; p++) {
        const h = this.path[p];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (Vt(c.x, -h.scroll.offset.x), Vt(c.y, -h.scroll.offset.y)), On(h.latestValues) && qo(c, h.latestValues, (d = h.layout) == null ? void 0 : d.layoutBox);
      }
      return On(this.latestValues) && qo(c, this.latestValues, (u = this.layout) == null ? void 0 : u.layoutBox), c;
    }
    removeTransform(s) {
      var l;
      const a = Fe();
      Rt(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!On(d.latestValues))
          continue;
        let u;
        d.instance && (Ua(d.latestValues) && d.updateSnapshot(), u = Fe(), Rt(u, d.measurePageBox())), cd(a, d.latestValues, (l = d.snapshot) == null ? void 0 : l.layoutBox, u);
      }
      return On(this.latestValues) && cd(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
      this.resolvedRelativeTargetAt = Ge.timestamp;
      const p = this.getClosestProjectingParent();
      p && this.linkedParentVersion !== p.layoutVersion && !p.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && p && p.layout ? this.createRelativeTarget(p, this.layout.layoutBox, p.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Fe(), this.targetWithTransforms = Fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), vA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Rt(this.target, this.layout.layoutBox), Kv(this.target, this.targetDelta)) : Rt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? this.createRelativeTarget(p, this.target, p.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ua(this.parent.latestValues) || Uv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(s, a, l) {
      this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Fe(), this.relativeTargetOrigin = Fe(), Si(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Rt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var m;
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let l = !0;
      if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === Ge.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      Rt(this.layoutCorrected, this.layout.layoutBox);
      const u = this.treeScale.x, p = this.treeScale.y;
      UM(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = Fe());
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (rd(this.prevProjectionDelta.x, this.projectionDelta.x), rd(this.prevProjectionDelta.y, this.projectionDelta.y)), Br(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== u || this.treeScale.y !== p || !hd(this.projectionDelta.x, this.prevProjectionDelta.x) || !hd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
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
      this.prevProjectionDelta = or(), this.projectionDelta = or(), this.projectionDeltaWithTransform = or();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, d = { ...this.latestValues }, u = or();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const p = Fe(), h = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, v = h !== m, y = this.getStack(), b = !y || y.members.length <= 1, x = !!(v && !b && this.options.crossfade === !0 && !this.path.some(KA));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        xd(u.x, s.x, C), xd(u.y, s.y, C), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Si(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), UA(this.relativeTarget, this.relativeTargetOrigin, p, C), w && xA(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = Fe()), Rt(w, this.relativeTarget)), v && (this.animationValues = d, RA(d, c, this.latestValues, C, x, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (xn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Se.update(() => {
        Jo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = hr(0)), this.motionValue.jump(0, !1), this.currentAnimation = TA(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(IA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: d } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && dy(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Fe();
          const u = it(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + u;
          const p = it(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + p;
        }
        Rt(a, l), qo(a, d), Br(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new NA()), this.sharedNodes.get(s).add(a);
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
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = Zo(a == null ? void 0 : a.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = Zo(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !On(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let u = SA(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (u = l(d, u)), s.transform = u;
      const { x: p, y: h } = this.projectionDelta;
      s.transformOrigin = `${p.origin * 100}% ${h.origin * 100}% 0`, c.animationValues ? s.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const m in Ya) {
        if (d[m] === void 0)
          continue;
        const { correct: v, applyTo: y, isCSSVariable: b } = Ya[m], x = u === "none" ? d[m] : v(d[m], c);
        if (y) {
          const w = y.length;
          for (let S = 0; S < w; S++)
            s[y[S]] = x;
        } else
          b ? this.options.visualElement.renderState.vars[m] = x : s[m] = x;
      }
      this.options.layoutId && (s.pointerEvents = c === this ? Zo(a == null ? void 0 : a.pointerEvents) || "" : "none");
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
function _A(e) {
  e.updateLayout();
}
function OA(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = t.source !== e.layout.source;
    if (i === "size")
      Ft((u) => {
        const p = s ? t.measuredBox[u] : t.layoutBox[u], h = it(p);
        p.min = r[u].min, p.max = p.min + h;
      });
    else if (i === "x" || i === "y") {
      const u = i === "x" ? "y" : "x";
      Xa(s ? t.measuredBox[u] : t.layoutBox[u], r[u]);
    } else dy(i, t.layoutBox, r) && Ft((u) => {
      const p = s ? t.measuredBox[u] : t.layoutBox[u], h = it(r[u]);
      p.max = p.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const a = or();
    Br(a, r, t.layoutBox);
    const l = or();
    s ? Br(l, e.applyTransform(o, !0), t.measuredBox) : Br(l, r, t.layoutBox);
    const c = !iy(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: p, layout: h } = u;
        if (p && h) {
          const m = e.options.layoutAnchor || void 0, v = Fe();
          Si(v, t.layoutBox, p.layoutBox, m);
          const y = Fe();
          Si(y, r, h.layoutBox, m), sy(v, y) || (d = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = v, e.relativeParent = u);
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
function LA(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function FA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function VA(e) {
  e.clearSnapshot();
}
function yd(e) {
  e.clearMeasurements();
}
function $A(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function bd(e) {
  e.isLayoutDirty = !1;
}
function BA(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function zA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function wd(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function HA(e) {
  e.resolveTargetDelta();
}
function jA(e) {
  e.calcProjection();
}
function WA(e) {
  e.resetSkewAndRotation();
}
function GA(e) {
  e.removeLeadSnapshot();
}
function xd(e, t, n) {
  e.translate = Ce(t.translate, 0, n), e.scale = Ce(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Sd(e, t, n, r) {
  e.min = Ce(t.min, n.min, r), e.max = Ce(t.max, n.max, r);
}
function UA(e, t, n, r) {
  Sd(e.x, t.x, n.x, r), Sd(e.y, t.y, n.y, r);
}
function KA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const YA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cd = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Rd = Cd("applewebkit/") && !Cd("chrome/") ? Math.round : St;
function Ed(e) {
  e.min = Rd(e.min), e.max = Rd(e.max);
}
function XA(e) {
  Ed(e.x), Ed(e.y);
}
function dy(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !gA(pd(t), pd(n), 0.2);
}
function qA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const ZA = uy({
  attachResizeListener: (e, t) => Qr(e, "resize", t),
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
}, fy = uy({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!js.current) {
      const e = new ZA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), js.current = e;
    }
    return js.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), py = It({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function JA(e = !0) {
  const t = De(Kl);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = vb();
  he(() => {
    if (e)
      return o(i);
  }, [e]);
  const s = Ne(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const hy = It({ strict: !1 }), Pd = {
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
function QA() {
  if (Td)
    return;
  const e = {};
  for (const t in Pd)
    e[t] = {
      isEnabled: (n) => Pd[t].some((r) => !!n[r])
    };
  jv(e), Td = !0;
}
function my() {
  return QA(), HM();
}
function eD(e) {
  const t = my();
  for (const n in e)
    t[n] = {
      ...t[n],
      ...e[n]
    };
  jv(t);
}
const tD = /* @__PURE__ */ new Set([
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
function Ci(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tD.has(e);
}
let gy = (e) => !Ci(e);
function nD(e) {
  typeof e == "function" && (gy = (t) => t.startsWith("on") ? !Ci(t) : e(t));
}
try {
  nD(require("@emotion/is-prop-valid").default);
} catch {
}
function rD(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || Ue(e[o]) || (gy(o) || n === !0 && Ci(o) || !t && !Ci(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
const ss = /* @__PURE__ */ It({});
function oD(e, t) {
  if (is(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Jr(n) ? n : void 0,
      animate: Jr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function iD(e) {
  const { initial: t, animate: n } = oD(e, De(ss));
  return ve(() => ({ initial: t, animate: n }), [Md(t), Md(n)]);
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
function vy(e, t, n) {
  for (const r in t)
    !Ue(t[r]) && !qv(r, n) && (e[r] = t[r]);
}
function sD({ transformTemplate: e }, t) {
  return ve(() => {
    const n = yc();
    return gc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function aD(e, t) {
  const n = e.style || {}, r = {};
  return vy(r, n, e), Object.assign(r, sD(e, t)), r;
}
function lD(e, t) {
  const n = {}, r = aD(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const yy = () => ({
  ...yc(),
  attrs: {}
});
function cD(e, t, n, r) {
  const o = ve(() => {
    const i = yy();
    return Zv(i, t, Qv(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    vy(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
const uD = [
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
function bc(e) {
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
      !!(uD.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function dD(e, t, n, { latestValues: r }, o, i = !1, s) {
  const l = (s ?? bc(e) ? cD : lD)(t, r, o, e), c = rD(t, typeof e == "string", i), d = e !== ff ? { ...c, ...l, ref: n } : {}, { children: u } = t, p = ve(() => Ue(u) ? u.get() : u, [u]);
  return ti(e, {
    ...d,
    children: p
  });
}
function fD({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: pD(n, r, o, e),
    renderState: t()
  };
}
function pD(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const p in i)
    o[p] = Zo(i[p]);
  let { initial: s, animate: a } = e;
  const l = is(e), c = zv(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const u = d ? a : s;
  if (u && typeof u != "boolean" && !os(u)) {
    const p = Array.isArray(u) ? u : [u];
    for (let h = 0; h < p.length; h++) {
      const m = lc(e, p[h]);
      if (m) {
        const { transitionEnd: v, transition: y, ...b } = m;
        for (const x in b) {
          let w = b[x];
          if (Array.isArray(w)) {
            const S = d ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (o[x] = w);
        }
        for (const x in v)
          o[x] = v[x];
      }
    }
  }
  return o;
}
const by = (e) => (t, n) => {
  const r = De(ss), o = De(Kl), i = () => fD(e, t, r, o);
  return n ? i() : uT(i);
}, hD = /* @__PURE__ */ by({
  scrapeMotionValuesFromProps: vc,
  createRenderState: yc
}), mD = /* @__PURE__ */ by({
  scrapeMotionValuesFromProps: ey,
  createRenderState: yy
}), gD = Symbol.for("motionComponentSymbol");
function vD(e, t, n) {
  const r = fe(n);
  pf(() => {
    r.current = n;
  });
  const o = fe(null);
  return Ne((i) => {
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
const wy = It({});
function er(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function yD(e, t, n, r, o, i) {
  var w, S;
  const { visualElement: s } = De(ss), a = De(hy), l = De(Kl), c = De(py), d = c.reducedMotion, u = c.skipAnimations, p = fe(null), h = fe(!1);
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
  const m = p.current, v = De(wy);
  m && !m.projection && o && (m.type === "html" || m.type === "svg") && bD(p.current, n, o, v);
  const y = fe(!1);
  pf(() => {
    m && y.current && m.update(n, l);
  });
  const b = n[Mv], x = fe(!!b && typeof window < "u" && !((w = window.MotionHandoffIsComplete) != null && w.call(window, b)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, b)));
  return fT(() => {
    h.current = !0, m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), x.current && m.animationState && m.animationState.animateChanges());
  }), he(() => {
    m && (!x.current && m.animationState && m.animationState.animateChanges(), x.current && (queueMicrotask(() => {
      var C;
      (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, b);
    }), x.current = !1), m.enteringChildren = void 0);
  }), m;
}
function bD(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutAnchor: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : xy(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && er(a),
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
function xy(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : xy(e.parent);
}
function Ws(e, { forwardMotionProps: t = !1, type: n } = {}, r, o) {
  r && eD(r);
  const i = n ? n === "svg" : bc(e), s = i ? mD : hD;
  function a(c, d) {
    let u;
    const p = {
      ...De(py),
      ...c,
      layoutId: wD(c)
    }, { isStatic: h } = p, m = iD(c), v = s(c, h);
    if (!h && typeof window < "u") {
      xD(p, r);
      const y = SD(p);
      u = y.MeasureLayout, m.visualElement = yD(e, v, p, o, y.ProjectionNode, i);
    }
    return z(ss.Provider, { value: m, children: [u && m.visualElement ? g(u, { visualElement: m.visualElement, ...p }) : null, dD(e, c, vD(v, m.visualElement, d), v, h, t, i)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = dl(a);
  return l[gD] = e, l;
}
function wD({ layoutId: e }) {
  const t = De(Bg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function xD(e, t) {
  const n = De(hy).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Cr(!1, r, "lazy-strict-mode") : tn(!1, r, "lazy-strict-mode");
  }
}
function SD(e) {
  const t = my(), { drag: n, layout: r } = t;
  if (!n && !r)
    return {};
  const o = { ...n, ...r };
  return {
    MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
function CD(e, t) {
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
const RD = (e, t) => t.isSVG ?? bc(e) ? new iA(t) : new QM(t, {
  allowProjection: e !== ff
});
class ED extends Dn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = uA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    os(t) && (this.unmountControls = t.subscribe(this.node));
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
let PD = 0;
class TD extends Dn {
  constructor() {
    super(...arguments), this.id = PD++, this.isExitComplete = !1;
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
          const l = $n(this.node, s, a);
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
const MD = {
  animation: {
    Feature: ED
  },
  exit: {
    Feature: TD
  }
};
function wo(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const AD = (e) => (t) => fc(t) && e(t, wo(t));
function zr(e, t, n, r) {
  return Qr(e, t, AD(n), r);
}
const Sy = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Ad = (e, t) => Math.abs(e - t);
function DD(e, t) {
  const n = Ad(e.x, t.x), r = Ad(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const Dd = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Cy {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: s = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (h) => {
      this.handleScroll(h.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Oo(this.lastRawMoveEventInfo, this.transformPagePoint));
      const h = Gs(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, v = DD(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !v)
        return;
      const { point: y } = h, { timestamp: b } = Ge;
      this.history.push({ ...y, timestamp: b });
      const { onStart: x, onMove: w } = this.handlers;
      m || (x && x(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, m) => {
      this.lastMoveEvent = h, this.lastRawMoveEventInfo = m, this.lastMoveEventInfo = Oo(m, this.transformPagePoint), Se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, m) => {
      this.end();
      const { onEnd: v, onSessionEnd: y, resumeAnimation: b } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Gs(h.type === "pointercancel" ? this.lastMoveEventInfo : Oo(m, this.transformPagePoint), this.history);
      this.startEvent && v && v(h, x), y && y(h, x);
    }, !fc(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = o || window;
    const l = wo(t), c = Oo(l, this.transformPagePoint), { point: d } = c, { timestamp: u } = Ge;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: p } = n;
    p && p(t, Gs(c, this.history)), this.removeListeners = vo(zr(this.contextWindow, "pointermove", this.handlePointerMove), zr(this.contextWindow, "pointerup", this.handlePointerUp), zr(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
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
    i.x === 0 && i.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(t, o), Se.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), xn(this.updatePoint);
  }
}
function Oo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Nd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gs({ point: e }, t) {
  return {
    point: e,
    delta: Nd(e, Ry(t)),
    offset: Nd(e, ND(t)),
    velocity: ID(t, 0.1)
  };
}
function ND(e) {
  return e[0];
}
function Ry(e) {
  return e[e.length - 1];
}
function ID(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Ry(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ ct(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && o.timestamp - r.timestamp > /* @__PURE__ */ ct(t) * 2 && (r = e[1]);
  const i = /* @__PURE__ */ wt(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function kD(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Ce(n, e, r.max) : Math.min(e, n)), e;
}
function Id(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function _D(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Id(e.x, n, o),
    y: Id(e.y, t, r)
  };
}
function kd(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function OD(e, t) {
  return {
    x: kd(e.x, t.x),
    y: kd(e.y, t.y)
  };
}
function LD(e, t) {
  let n = 0.5;
  const r = it(e), o = it(t);
  return o > r ? n = /* @__PURE__ */ qr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ qr(e.min, e.max - o, t.min)), Wt(0, 1, n);
}
function FD(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const qa = 0.35;
function VD(e = qa) {
  return e === !1 ? e = 0 : e === !0 && (e = qa), {
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
const $D = /* @__PURE__ */ new WeakMap();
class BD {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Fe(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const i = (u) => {
      n && this.snapToCursor(wo(u).point), this.stopAnimation();
    }, s = (u, p) => {
      const { drag: h, dragPropagation: m, onDragStart: v } = this.getProps();
      if (h && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = yM(h), !this.openDragLock))
        return;
      this.latestPointerEvent = u, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ft((b) => {
        let x = this.getAxisMotionValue(b).get() || 0;
        if (Ht.test(x)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const S = w.layout.layoutBox[b];
            S && (x = it(S) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[b] = x;
      }), v && Se.update(() => v(u, p), !1, !0), za(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (u, p) => {
      this.latestPointerEvent = u, this.latestPanInfo = p;
      const { dragPropagation: h, dragDirectionLock: m, onDirectionLock: v, onDrag: y } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: b } = p;
      if (m && this.currentDirection === null) {
        this.currentDirection = HD(b), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, b), this.updateAxis("y", p.point, b), this.visualElement.render(), y && Se.update(() => y(u, p), !1, !0);
    }, l = (u, p) => {
      this.latestPointerEvent = u, this.latestPanInfo = p, this.stop(u, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => {
      const { dragSnapToOrigin: u } = this.getProps();
      (u || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new Cy(t, {
      onSessionStart: i,
      onStart: s,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: r,
      contextWindow: Sy(this.visualElement),
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
    a && Se.postRender(() => a(r, o));
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
    if (!r || !Lo(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = kD(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && er(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = _D(r.layoutBox, t) : this.constraints = !1, this.elastic = VD(n), o !== this.constraints && !er(t) && r && this.constraints && !this.hasMutatedConstraints && Ft((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = FD(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !er(t))
      return !1;
    const r = t.current;
    tn(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = KM(r, o.root, this.visualElement.getTransformPagePoint());
    let s = OD(o.layout.layoutBox, i);
    if (n) {
      const a = n(WM(s));
      this.hasMutatedConstraints = !!a, a && (s = Gv(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Ft((d) => {
      if (!Lo(d, n, this.currentDirection))
        return;
      let u = l && l[d] || {};
      (s === !0 || s === d) && (u = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, h = o ? 40 : 1e7, m = {
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
      return this.startAxisValueAnimation(d, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return za(this.visualElement, t), r.start(ac(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ft((t) => this.getAxisMotionValue(t).stop());
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
    Ft((n) => {
      const { drag: r } = this.getProps();
      if (!Lo(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n], l = i.get() || 0;
        i.set(t[n] - Ce(s, a, 0.5) + l);
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
    if (!er(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ft((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = LD({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Ft((s) => {
      if (!Lo(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(Ce(l, c, o[s]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    $D.set(this.visualElement, this);
    const t = this.visualElement.current, n = zr(t, "pointerdown", (c) => {
      const { drag: d, dragListener: u = !0 } = this.getProps(), p = c.target, h = p !== t && RM(p);
      d && u && !h && this.start(c);
    });
    let r;
    const o = () => {
      const { dragConstraints: c } = this.getProps();
      er(c) && c.current && (this.constraints = this.resolveRefConstraints(), r || (r = zD(t, c.current, () => this.scalePositionWithinConstraints())));
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", o);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Se.read(o);
    const a = Qr(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (Ft((u) => {
        const p = this.getAxisMotionValue(u);
        p && (this.originPoint[u] += c[u].translate, p.set(p.get() + c[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), s(), l && l(), r && r();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = qa, dragMomentum: a = !0 } = t;
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
function zD(e, t, n) {
  const r = Gu(e, Ld(n)), o = Gu(t, Ld(n));
  return () => {
    r(), o();
  };
}
function Lo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function HD(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class jD extends Dn {
  constructor(t) {
    super(t), this.removeGroupControls = St, this.removeListeners = St, this.controls = new BD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || St;
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
  e && Se.update(() => e(t, n), !1, !0);
};
class WD extends Dn {
  constructor() {
    super(...arguments), this.removePointerDownListener = St;
  }
  onPointerDown(t) {
    this.session = new Cy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Sy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Us(t),
      onStart: Us(n),
      onMove: Us(r),
      onEnd: (i, s) => {
        delete this.session, o && Se.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = zr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Ks = !1;
class GD extends yb {
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
    })), Jo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, { projection: s } = r;
    return s && (s.isPresent = i, t.layoutDependency !== n && s.setOptions({
      ...s.options,
      layoutDependency: n
    }), Ks = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || Se.postRender(() => {
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
function Ey(e) {
  const [t, n] = JA(), r = De(Bg);
  return g(GD, { ...e, layoutGroup: r, switchLayoutGroup: De(wy), isPresent: t, safeToRemove: n });
}
const UD = {
  pan: {
    Feature: WD
  },
  drag: {
    Feature: jD,
    ProjectionNode: fy,
    MeasureLayout: Ey
  }
};
function Fd(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && Se.postRender(() => i(t, wo(t)));
}
class KD extends Dn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = wM(t, (n, r) => (Fd(this.node, r, "Start"), (o) => Fd(this.node, o, "End"))));
  }
  unmount() {
  }
}
class YD extends Dn {
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
    this.unmount = vo(Qr(this.node.current, "focus", () => this.onFocus()), Qr(this.node.current, "blur", () => this.onBlur()));
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
  i && Se.postRender(() => i(t, wo(t)));
}
class XD extends Dn {
  mount() {
    const { current: t } = this.node;
    if (!t)
      return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = PM(t, (o, i) => (Vd(this.node, i, "Start"), (s, { success: a }) => Vd(this.node, s, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: (r == null ? void 0 : r.tap) === !1
    });
  }
  unmount() {
  }
}
const Za = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), qD = (e) => {
  const t = Za.get(e.target);
  t && t(e);
}, ZD = (e) => {
  e.forEach(qD);
};
function JD({ root: e, ...t }) {
  const n = e || document;
  Ys.has(n) || Ys.set(n, {});
  const r = Ys.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(ZD, { root: e, ...t })), r[o];
}
function QD(e, t, n) {
  const r = JD(t);
  return Za.set(e, n), r.observe(e), () => {
    Za.delete(e), r.unobserve(e);
  };
}
const eN = {
  some: 0,
  all: 1
};
class tN extends Dn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : eN[o]
    }, a = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, i && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: p } = this.node.getProps(), h = d ? u : p;
      h && h(c);
    };
    this.stopObserver = QD(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(nN(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function nN({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const rN = {
  inView: {
    Feature: tN
  },
  tap: {
    Feature: XD
  },
  focus: {
    Feature: YD
  },
  hover: {
    Feature: KD
  }
}, oN = {
  layout: {
    ProjectionNode: fy,
    MeasureLayout: Ey
  }
}, iN = {
  ...MD,
  ...rN,
  ...UD,
  ...oN
}, sN = /* @__PURE__ */ CD(iN, RD), Py = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  ut,
  {
    ref: n,
    className: q(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e
    ),
    ...t
  }
));
Py.displayName = ut.displayName;
const Ty = ({
  title: e = "Command Palette",
  description: t = "Search for commands",
  commandKey: n,
  children: r,
  ...o
}) => /* @__PURE__ */ g(PP, { ...o, children: /* @__PURE__ */ z(
  Sg,
  {
    className: "overflow-hidden p-0 shadow-lg",
    style: { top: "25%", "--tw-translate-y": "0px" },
    hideClose: !0,
    children: [
      /* @__PURE__ */ z(Cg, { className: "sr-only", children: [
        /* @__PURE__ */ g(Rg, { children: e }),
        /* @__PURE__ */ g(Eg, { children: t })
      ] }),
      /* @__PURE__ */ g(Py, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r }, n)
    ]
  }
) }), wc = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g("div", { className: "flex items-center px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ g(
  ut.Input,
  {
    ref: n,
    className: q(
      "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t
  }
) }));
wc.displayName = ut.Input.displayName;
const xc = f.forwardRef(({ className: e, ...t }, n) => {
  const r = f.useRef(null), [o, i] = f.useState(void 0);
  return f.useEffect(() => {
    const s = r.current;
    if (!s) return;
    const a = new ResizeObserver(([l]) => {
      i(l.contentRect.height);
    });
    return a.observe(s), () => a.disconnect();
  }, []), /* @__PURE__ */ g(
    sN.div,
    {
      animate: { height: o },
      transition: { duration: 0.1, ease: "easeInOut" },
      style: { overflow: "hidden" },
      children: /* @__PURE__ */ g("div", { ref: r, children: /* @__PURE__ */ g(
        ut.List,
        {
          ref: n,
          className: q("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
          ...t
        }
      ) })
    }
  );
});
xc.displayName = ut.List.displayName;
const Sc = f.forwardRef((e, t) => /* @__PURE__ */ g(
  ut.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Sc.displayName = ut.Empty.displayName;
const Ri = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  ut.Group,
  {
    ref: n,
    className: q(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e
    ),
    ...t
  }
));
Ri.displayName = ut.Group.displayName;
const My = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  ut.Separator,
  {
    ref: n,
    className: q("-mx-1 h-px bg-border", e),
    ...t
  }
));
My.displayName = ut.Separator.displayName;
const Ei = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  ut.Item,
  {
    ref: n,
    className: q(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Ei.displayName = ut.Item.displayName;
const Ay = ({ className: e, ...t }) => /* @__PURE__ */ g(
  "span",
  {
    className: q(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      e
    ),
    ...t
  }
);
Ay.displayName = "CommandShortcut";
const Dy = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g("div", { "data-slot": "table-container", className: "relative w-full overflow-auto", children: /* @__PURE__ */ g(
  "table",
  {
    ref: n,
    "data-slot": "table",
    className: q("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Dy.displayName = "Table";
const Ny = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g("thead", { ref: n, "data-slot": "table-header", className: q("[&_tr]:border-b", e), ...t }));
Ny.displayName = "TableHeader";
const Iy = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "tbody",
  {
    ref: n,
    "data-slot": "table-body",
    className: q("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Iy.displayName = "TableBody";
const aN = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "tfoot",
  {
    ref: n,
    "data-slot": "table-footer",
    className: q("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
    ...t
  }
));
aN.displayName = "TableFooter";
const Pi = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "tr",
  {
    ref: n,
    "data-slot": "table-row",
    className: q(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      e
    ),
    ...t
  }
));
Pi.displayName = "TableRow";
const ky = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "th",
  {
    ref: n,
    "data-slot": "table-head",
    className: q(
      "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
ky.displayName = "TableHead";
const Cc = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "td",
  {
    ref: n,
    "data-slot": "table-cell",
    className: q(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Cc.displayName = "TableCell";
const lN = f.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  "caption",
  {
    ref: n,
    "data-slot": "table-caption",
    className: q("text-muted-foreground mt-4 text-sm", e),
    ...t
  }
));
lN.displayName = "TableCaption";
function cN(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const uN = (e) => {
  switch (e) {
    case "success":
      return pN;
    case "info":
      return mN;
    case "warning":
      return hN;
    case "error":
      return gN;
    default:
      return null;
  }
}, dN = Array(12).fill(0), fN = ({ visible: e, className: t }) => /* @__PURE__ */ V.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ V.createElement("div", {
  className: "sonner-spinner"
}, dN.map((n, r) => /* @__PURE__ */ V.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), pN = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), hN = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), mN = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), gN = /* @__PURE__ */ V.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ V.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), vN = /* @__PURE__ */ V.createElement("svg", {
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
})), yN = () => {
  const [e, t] = V.useState(document.hidden);
  return V.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let Ja = 1;
class bN {
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
      const { message: r, ...o } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : Ja++, s = this.toasts.find((l) => l.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
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
        else if (xN(c) && !c.ok) {
          i = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, p = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, m = typeof u == "object" && !V.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...m
          });
        } else if (c instanceof Error) {
          i = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, p = typeof n.description == "function" ? await n.description(c) : n.description, m = typeof u == "object" && !V.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "error",
            description: p,
            ...m
          });
        } else if (n.success !== void 0) {
          i = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, p = typeof n.description == "function" ? await n.description(c) : n.description, m = typeof u == "object" && !V.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: r,
            type: "success",
            description: p,
            ...m
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
      const r = (n == null ? void 0 : n.id) || Ja++;
      return this.create({
        jsx: t(r),
        id: r,
        ...n
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const lt = new bN(), wN = (e, t) => {
  const n = (t == null ? void 0 : t.id) || Ja++;
  return lt.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, xN = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", SN = wN, CN = () => lt.toasts, RN = () => lt.getActiveToasts();
Object.assign(SN, {
  success: lt.success,
  info: lt.info,
  warning: lt.warning,
  error: lt.error,
  custom: lt.custom,
  message: lt.message,
  promise: lt.promise,
  dismiss: lt.dismiss,
  loading: lt.loading
}, {
  getHistory: CN,
  getToasts: RN
});
cN("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Fo(e) {
  return e.label !== void 0;
}
const EN = 3, PN = "24px", TN = "16px", $d = 4e3, MN = 356, AN = 14, DN = 45, NN = 200;
function Lt(...e) {
  return e.filter(Boolean).join(" ");
}
function IN(e) {
  const [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
const kN = (e) => {
  var t, n, r, o, i, s, a, l, c;
  const { invert: d, toast: u, unstyled: p, interacting: h, setHeights: m, visibleToasts: v, heights: y, index: b, toasts: x, expanded: w, removeToast: S, defaultRichColors: C, closeButton: R, style: P, cancelButtonStyle: E, actionButtonStyle: A, className: T = "", descriptionClassName: k = "", duration: B, position: U, gap: j, expandByDefault: Z, classNames: I, icons: H, closeButtonAriaLabel: O = "Close toast" } = e, [D, _] = V.useState(null), [oe, M] = V.useState(null), [F, W] = V.useState(!1), [N, $] = V.useState(!1), [L, G] = V.useState(!1), [K, Y] = V.useState(!1), [le, ie] = V.useState(!1), [ye, me] = V.useState(0), [_e, je] = V.useState(0), Ye = V.useRef(u.duration || B || $d), Yt = V.useRef(null), Te = V.useRef(null), vt = b === 0, rn = b + 1 <= v, Ie = u.type, yt = u.dismissible !== !1, Nn = u.className || "", te = u.descriptionClassName || "", ne = V.useMemo(() => y.findIndex((re) => re.toastId === u.id) || 0, [
    y,
    u.id
  ]), at = V.useMemo(() => {
    var re;
    return (re = u.closeButton) != null ? re : R;
  }, [
    u.closeButton,
    R
  ]), Xe = V.useMemo(() => u.duration || B || $d, [
    u.duration,
    B
  ]), tt = V.useRef(0), nt = V.useRef(0), We = V.useRef(0), Me = V.useRef(null), [fs, ps] = U.split("-"), Kn = V.useMemo(() => y.reduce((re, we, be) => be >= ne ? re : re + we.height, 0), [
    y,
    ne
  ]), Dr = yN(), hs = u.invert || d, Yn = Ie === "loading";
  nt.current = V.useMemo(() => ne * j + Kn, [
    ne,
    Kn
  ]), V.useEffect(() => {
    Ye.current = Xe;
  }, [
    Xe
  ]), V.useEffect(() => {
    W(!0);
  }, []), V.useEffect(() => {
    const re = Te.current;
    if (re) {
      const we = re.getBoundingClientRect().height;
      return je(we), m((be) => [
        {
          toastId: u.id,
          height: we,
          position: u.position
        },
        ...be
      ]), () => m((be) => be.filter((xe) => xe.toastId !== u.id));
    }
  }, [
    m,
    u.id
  ]), V.useLayoutEffect(() => {
    if (!F) return;
    const re = Te.current, we = re.style.height;
    re.style.height = "auto";
    const be = re.getBoundingClientRect().height;
    re.style.height = we, je(be), m((xe) => xe.find((Re) => Re.toastId === u.id) ? xe.map((Re) => Re.toastId === u.id ? {
      ...Re,
      height: be
    } : Re) : [
      {
        toastId: u.id,
        height: be,
        position: u.position
      },
      ...xe
    ]);
  }, [
    F,
    u.title,
    u.description,
    m,
    u.id,
    u.jsx,
    u.action,
    u.cancel
  ]);
  const Ot = V.useCallback(() => {
    $(!0), me(nt.current), m((re) => re.filter((we) => we.toastId !== u.id)), setTimeout(() => {
      S(u);
    }, NN);
  }, [
    u,
    S,
    m,
    nt
  ]);
  V.useEffect(() => {
    if (u.promise && Ie === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let re;
    return w || h || Dr ? (() => {
      if (We.current < tt.current) {
        const xe = (/* @__PURE__ */ new Date()).getTime() - tt.current;
        Ye.current = Ye.current - xe;
      }
      We.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      Ye.current !== 1 / 0 && (tt.current = (/* @__PURE__ */ new Date()).getTime(), re = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), Ot();
      }, Ye.current));
    })(), () => clearTimeout(re);
  }, [
    w,
    h,
    u,
    Ie,
    Dr,
    Ot
  ]), V.useEffect(() => {
    u.delete && (Ot(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    Ot,
    u.delete
  ]);
  function ms() {
    var re;
    if (H != null && H.loading) {
      var we;
      return /* @__PURE__ */ V.createElement("div", {
        className: Lt(I == null ? void 0 : I.loader, u == null || (we = u.classNames) == null ? void 0 : we.loader, "sonner-loader"),
        "data-visible": Ie === "loading"
      }, H.loading);
    }
    return /* @__PURE__ */ V.createElement(fN, {
      className: Lt(I == null ? void 0 : I.loader, u == null || (re = u.classNames) == null ? void 0 : re.loader),
      visible: Ie === "loading"
    });
  }
  const gs = u.icon || (H == null ? void 0 : H[Ie]) || uN(Ie);
  var Oe, qe;
  return /* @__PURE__ */ V.createElement("li", {
    tabIndex: 0,
    ref: Te,
    className: Lt(T, Nn, I == null ? void 0 : I.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, I == null ? void 0 : I.default, I == null ? void 0 : I[Ie], u == null || (n = u.classNames) == null ? void 0 : n[Ie]),
    "data-sonner-toast": "",
    "data-rich-colors": (Oe = u.richColors) != null ? Oe : C,
    "data-styled": !(u.jsx || u.unstyled || p),
    "data-mounted": F,
    "data-promise": !!u.promise,
    "data-swiped": le,
    "data-removed": N,
    "data-visible": rn,
    "data-y-position": fs,
    "data-x-position": ps,
    "data-index": b,
    "data-front": vt,
    "data-swiping": L,
    "data-dismissible": yt,
    "data-type": Ie,
    "data-invert": hs,
    "data-swipe-out": K,
    "data-swipe-direction": oe,
    "data-expanded": !!(w || Z && F),
    "data-testid": u.testId,
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": x.length - b,
      "--offset": `${N ? ye : nt.current}px`,
      "--initial-height": Z ? "auto" : `${_e}px`,
      ...P,
      ...u.style
    },
    onDragEnd: () => {
      G(!1), _(null), Me.current = null;
    },
    onPointerDown: (re) => {
      re.button !== 2 && (Yn || !yt || (Yt.current = /* @__PURE__ */ new Date(), me(nt.current), re.target.setPointerCapture(re.pointerId), re.target.tagName !== "BUTTON" && (G(!0), Me.current = {
        x: re.clientX,
        y: re.clientY
      })));
    },
    onPointerUp: () => {
      var re, we, be;
      if (K || !yt) return;
      Me.current = null;
      const xe = Number(((re = Te.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), rt = Number(((we = Te.current) == null ? void 0 : we.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Re = (/* @__PURE__ */ new Date()).getTime() - ((be = Yt.current) == null ? void 0 : be.getTime()), ge = D === "x" ? xe : rt, ft = Math.abs(ge) / Re;
      if (Math.abs(ge) >= DN || ft > 0.11) {
        me(nt.current), u.onDismiss == null || u.onDismiss.call(u, u), M(D === "x" ? xe > 0 ? "right" : "left" : rt > 0 ? "down" : "up"), Ot(), Y(!0);
        return;
      } else {
        var Pe, Ae;
        (Pe = Te.current) == null || Pe.style.setProperty("--swipe-amount-x", "0px"), (Ae = Te.current) == null || Ae.style.setProperty("--swipe-amount-y", "0px");
      }
      ie(!1), G(!1), _(null);
    },
    onPointerMove: (re) => {
      var we, be, xe;
      if (!Me.current || !yt || ((we = window.getSelection()) == null ? void 0 : we.toString().length) > 0) return;
      const Re = re.clientY - Me.current.y, ge = re.clientX - Me.current.x;
      var ft;
      const Pe = (ft = e.swipeDirections) != null ? ft : IN(U);
      !D && (Math.abs(ge) > 1 || Math.abs(Re) > 1) && _(Math.abs(ge) > Math.abs(Re) ? "x" : "y");
      let Ae = {
        x: 0,
        y: 0
      };
      const on = (pt) => 1 / (1.5 + Math.abs(pt) / 20);
      if (D === "y") {
        if (Pe.includes("top") || Pe.includes("bottom"))
          if (Pe.includes("top") && Re < 0 || Pe.includes("bottom") && Re > 0)
            Ae.y = Re;
          else {
            const pt = Re * on(Re);
            Ae.y = Math.abs(pt) < Math.abs(Re) ? pt : Re;
          }
      } else if (D === "x" && (Pe.includes("left") || Pe.includes("right")))
        if (Pe.includes("left") && ge < 0 || Pe.includes("right") && ge > 0)
          Ae.x = ge;
        else {
          const pt = ge * on(ge);
          Ae.x = Math.abs(pt) < Math.abs(ge) ? pt : ge;
        }
      (Math.abs(Ae.x) > 0 || Math.abs(Ae.y) > 0) && ie(!0), (be = Te.current) == null || be.style.setProperty("--swipe-amount-x", `${Ae.x}px`), (xe = Te.current) == null || xe.style.setProperty("--swipe-amount-y", `${Ae.y}px`);
    }
  }, at && !u.jsx && Ie !== "loading" ? /* @__PURE__ */ V.createElement("button", {
    "aria-label": O,
    "data-disabled": Yn,
    "data-close-button": !0,
    onClick: Yn || !yt ? () => {
    } : () => {
      Ot(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: Lt(I == null ? void 0 : I.closeButton, u == null || (r = u.classNames) == null ? void 0 : r.closeButton)
  }, (qe = H == null ? void 0 : H.close) != null ? qe : vN) : null, (Ie || u.icon || u.promise) && u.icon !== null && ((H == null ? void 0 : H[Ie]) !== null || u.icon) ? /* @__PURE__ */ V.createElement("div", {
    "data-icon": "",
    className: Lt(I == null ? void 0 : I.icon, u == null || (o = u.classNames) == null ? void 0 : o.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || ms() : null, u.type !== "loading" ? gs : null) : null, /* @__PURE__ */ V.createElement("div", {
    "data-content": "",
    className: Lt(I == null ? void 0 : I.content, u == null || (i = u.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ V.createElement("div", {
    "data-title": "",
    className: Lt(I == null ? void 0 : I.title, u == null || (s = u.classNames) == null ? void 0 : s.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ V.createElement("div", {
    "data-description": "",
    className: Lt(k, te, I == null ? void 0 : I.description, u == null || (a = u.classNames) == null ? void 0 : a.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ V.isValidElement(u.cancel) ? u.cancel : u.cancel && Fo(u.cancel) ? /* @__PURE__ */ V.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || E,
    onClick: (re) => {
      Fo(u.cancel) && yt && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, re), Ot());
    },
    className: Lt(I == null ? void 0 : I.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ V.isValidElement(u.action) ? u.action : u.action && Fo(u.action) ? /* @__PURE__ */ V.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || A,
    onClick: (re) => {
      Fo(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, re), !re.defaultPrevented && Ot());
    },
    className: Lt(I == null ? void 0 : I.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function Bd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function _N(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((r, o) => {
    const i = o === 1, s = i ? "--mobile-offset" : "--offset", a = i ? TN : PN;
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
const ON = /* @__PURE__ */ V.forwardRef(function(t, n) {
  const { id: r, invert: o, position: i = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: l, className: c, offset: d, mobileOffset: u, theme: p = "light", richColors: h, duration: m, style: v, visibleToasts: y = EN, toastOptions: b, dir: x = Bd(), gap: w = AN, icons: S, containerAriaLabel: C = "Notifications" } = t, [R, P] = V.useState([]), E = V.useMemo(() => r ? R.filter((F) => F.toasterId === r) : R.filter((F) => !F.toasterId), [
    R,
    r
  ]), A = V.useMemo(() => Array.from(new Set([
    i
  ].concat(E.filter((F) => F.position).map((F) => F.position)))), [
    E,
    i
  ]), [T, k] = V.useState([]), [B, U] = V.useState(!1), [j, Z] = V.useState(!1), [I, H] = V.useState(p !== "system" ? p : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), O = V.useRef(null), D = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), _ = V.useRef(null), oe = V.useRef(!1), M = V.useCallback((F) => {
    P((W) => {
      var N;
      return (N = W.find(($) => $.id === F.id)) != null && N.delete || lt.dismiss(F.id), W.filter(({ id: $ }) => $ !== F.id);
    });
  }, []);
  return V.useEffect(() => lt.subscribe((F) => {
    if (F.dismiss) {
      requestAnimationFrame(() => {
        P((W) => W.map((N) => N.id === F.id ? {
          ...N,
          delete: !0
        } : N));
      });
      return;
    }
    setTimeout(() => {
      hf.flushSync(() => {
        P((W) => {
          const N = W.findIndex(($) => $.id === F.id);
          return N !== -1 ? [
            ...W.slice(0, N),
            {
              ...W[N],
              ...F
            },
            ...W.slice(N + 1)
          ] : [
            F,
            ...W
          ];
        });
      });
    });
  }), [
    R
  ]), V.useEffect(() => {
    if (p !== "system") {
      H(p);
      return;
    }
    if (p === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window > "u") return;
    const F = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      F.addEventListener("change", ({ matches: W }) => {
        H(W ? "dark" : "light");
      });
    } catch {
      F.addListener(({ matches: N }) => {
        try {
          H(N ? "dark" : "light");
        } catch ($) {
          console.error($);
        }
      });
    }
  }, [
    p
  ]), V.useEffect(() => {
    R.length <= 1 && U(!1);
  }, [
    R
  ]), V.useEffect(() => {
    const F = (W) => {
      var N;
      if (s.every((G) => W[G] || W.code === G)) {
        var L;
        U(!0), (L = O.current) == null || L.focus();
      }
      W.code === "Escape" && (document.activeElement === O.current || (N = O.current) != null && N.contains(document.activeElement)) && U(!1);
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [
    s
  ]), V.useEffect(() => {
    if (O.current)
      return () => {
        _.current && (_.current.focus({
          preventScroll: !0
        }), _.current = null, oe.current = !1);
      };
  }, [
    O.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ V.createElement("section", {
    ref: n,
    "aria-label": `${C} ${D}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, A.map((F, W) => {
    var N;
    const [$, L] = F.split("-");
    return E.length ? /* @__PURE__ */ V.createElement("ol", {
      key: F,
      dir: x === "auto" ? Bd() : x,
      tabIndex: -1,
      ref: O,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": I,
      "data-y-position": $,
      "data-x-position": L,
      style: {
        "--front-toast-height": `${((N = T[0]) == null ? void 0 : N.height) || 0}px`,
        "--width": `${MN}px`,
        "--gap": `${w}px`,
        ...v,
        ..._N(d, u)
      },
      onBlur: (G) => {
        oe.current && !G.currentTarget.contains(G.relatedTarget) && (oe.current = !1, _.current && (_.current.focus({
          preventScroll: !0
        }), _.current = null));
      },
      onFocus: (G) => {
        G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || oe.current || (oe.current = !0, _.current = G.relatedTarget);
      },
      onMouseEnter: () => U(!0),
      onMouseMove: () => U(!0),
      onMouseLeave: () => {
        j || U(!1);
      },
      onDragEnd: () => U(!1),
      onPointerDown: (G) => {
        G.target instanceof HTMLElement && G.target.dataset.dismissible === "false" || Z(!0);
      },
      onPointerUp: () => Z(!1)
    }, E.filter((G) => !G.position && W === 0 || G.position === F).map((G, K) => {
      var Y, le;
      return /* @__PURE__ */ V.createElement(kN, {
        key: G.id,
        icons: S,
        index: K,
        toast: G,
        defaultRichColors: h,
        duration: (Y = b == null ? void 0 : b.duration) != null ? Y : m,
        className: b == null ? void 0 : b.className,
        descriptionClassName: b == null ? void 0 : b.descriptionClassName,
        invert: o,
        visibleToasts: y,
        closeButton: (le = b == null ? void 0 : b.closeButton) != null ? le : l,
        interacting: j,
        position: F,
        style: b == null ? void 0 : b.style,
        unstyled: b == null ? void 0 : b.unstyled,
        classNames: b == null ? void 0 : b.classNames,
        cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle,
        actionButtonStyle: b == null ? void 0 : b.actionButtonStyle,
        closeButtonAriaLabel: b == null ? void 0 : b.closeButtonAriaLabel,
        removeToast: M,
        toasts: E.filter((ie) => ie.position == G.position),
        heights: T.filter((ie) => ie.position == G.position),
        setHeights: k,
        expandByDefault: a,
        gap: w,
        expanded: B,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), J_ = ({ ...e }) => /* @__PURE__ */ g(
  ON,
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
), _y = [
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
], LN = new Set(_y.map((e) => e.hex));
function Qo(e, t, n) {
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
function Qa(e) {
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
  const t = Qa(e);
  if (!t) return 0;
  const [n, r, o] = t.map((i) => {
    const s = i / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * n + 0.7152 * r + 0.0722 * o;
}
function qs(e, t, n) {
  const r = Xs(...Qo(e, t, n));
  if (jd(r) >= Hd) return { hex: r, adjusted: !1 };
  let o = n, i = 1;
  for (let s = 0; s < 20; s++) {
    const a = (o + i) / 2;
    jd(Xs(...Qo(e, t, a))) >= Hd ? i = a : o = a;
  }
  return { hex: Xs(...Qo(e, t, i)), adjusted: !0 };
}
function FN({
  hue: e,
  sat: t,
  val: n,
  onChange: r
}) {
  const o = fe(null), i = fe(!1), s = Ne(() => {
    const l = o.current;
    if (!l) return;
    const c = l.getContext("2d"), d = l.width, u = l.height, [p, h, m] = Qo(e, 1, 1), v = c.createLinearGradient(0, 0, d, 0);
    v.addColorStop(0, "#fff"), v.addColorStop(1, `rgb(${p},${h},${m})`), c.fillStyle = v, c.fillRect(0, 0, d, u);
    const y = c.createLinearGradient(0, 0, 0, u);
    y.addColorStop(0, "rgba(0,0,0,0)"), y.addColorStop(1, "rgba(0,0,0,1)"), c.fillStyle = y, c.fillRect(0, 0, d, u);
  }, [e]);
  he(() => {
    s();
  }, [s]);
  const a = Ne((l) => {
    const c = o.current;
    if (!c) return;
    const d = c.getBoundingClientRect(), u = Math.max(0, Math.min(1, (l.clientX - d.left) / d.width)), p = Math.max(0, Math.min(1, (l.clientY - d.top) / d.height));
    r(u, 1 - p);
  }, [r]);
  return he(() => {
    const l = (d) => {
      i.current && a(d);
    }, c = () => {
      i.current = !1;
    };
    return document.addEventListener("mousemove", l), document.addEventListener("mouseup", c), () => {
      document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", c);
    };
  }, [a]), /* @__PURE__ */ z("div", { className: "relative flex-1 min-w-0", style: { height: 160 }, children: [
    /* @__PURE__ */ g(
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
    /* @__PURE__ */ g(
      "div",
      {
        className: "absolute w-4 h-4 rounded-full border-2 border-white shadow pointer-events-none -translate-x-1/2 -translate-y-1/2",
        style: { left: `${t * 100}%`, top: `${(1 - n) * 100}%` }
      }
    )
  ] });
}
function VN({ hue: e, onChange: t }) {
  const n = fe(null), r = fe(!1), o = Ne((i) => {
    const s = n.current;
    if (!s) return;
    const a = s.getBoundingClientRect(), l = Math.max(0, Math.min(1, (i.clientY - a.top) / a.height));
    t(l * 360);
  }, [t]);
  return he(() => {
    const i = (a) => {
      r.current && o(a);
    }, s = () => {
      r.current = !1;
    };
    return document.addEventListener("mousemove", i), document.addEventListener("mouseup", s), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", s);
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
      onMouseDown: (i) => {
        r.current = !0, o(i);
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
function Q_({ value: e, onChange: t }) {
  const [n, r] = $e(!1), [o, i] = $e("swatches"), [s, a] = $e(0), [l, c] = $e(1), [d, u] = $e(1), p = fe(null);
  he(() => {
    if (!n) return;
    i(LN.has(e) ? "swatches" : "gradient");
    const w = Qa(e);
    if (w) {
      const [S, C, R] = zd(...w);
      a(S), c(C), u(R);
    }
  }, [n]);
  const { hex: h, adjusted: m } = qs(s, l, d);
  he(() => {
    if (!n) return;
    const w = (S) => {
      p.current && !p.current.contains(S.target) && r(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [n]);
  function v(w, S) {
    c(w), u(S), t(qs(s, w, S).hex);
  }
  function y(w) {
    a(w), t(qs(w, l, d).hex);
  }
  function b(w) {
    t(w);
    const S = Qa(w);
    if (S) {
      const [C, R, P] = zd(...S);
      a(C), c(R), u(P);
    }
    r(!1);
  }
  const x = o === "gradient";
  return /* @__PURE__ */ g(Sr, { children: /* @__PURE__ */ z("div", { className: "relative inline-block", ref: p, children: [
    /* @__PURE__ */ z(hn, { children: [
      /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: "w-6 h-6 rounded-full border-2 border-white shadow ring-1 ring-black/10 focus:outline-none",
          style: { background: e },
          onClick: () => r((w) => !w)
        }
      ) }),
      /* @__PURE__ */ g(gn, { children: e.toUpperCase() })
    ] }),
    n && /* @__PURE__ */ z("div", { className: "absolute z-50 mt-2 rounded-xl border border-border bg-popover shadow-lg p-2", children: [
      /* @__PURE__ */ z("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ z("div", { className: "relative", children: [
          /* @__PURE__ */ z("div", { className: `flex items-center gap-1 transition-opacity duration-150 ${x ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: [
            _y.map(({ hex: w, name: S }) => /* @__PURE__ */ z(hn, { children: [
              /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g(
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
                  children: w === e && /* @__PURE__ */ g(ci, { className: "w-3.5 h-3.5 text-white drop-shadow", strokeWidth: 3 })
                }
              ) }),
              /* @__PURE__ */ g(gn, { children: S })
            ] }, w)),
            /* @__PURE__ */ g("div", { className: "w-px h-6 bg-border mx-0.5 flex-shrink-0" })
          ] }),
          /* @__PURE__ */ z("div", { className: `absolute inset-0 flex items-center gap-2 transition-opacity duration-150 ${x ? "opacity-100" : "opacity-0 pointer-events-none"}`, children: [
            /* @__PURE__ */ g(
              "button",
              {
                type: "button",
                className: "w-7 h-7 rounded-full flex-shrink-0 border-2 border-white flex items-center justify-center hover:scale-110 transition-transform focus:outline-none",
                style: { background: h, boxShadow: `0 0 0 2px ${h}` },
                onClick: () => r(!1),
                children: /* @__PURE__ */ g(ci, { className: "w-3.5 h-3.5 text-white drop-shadow", strokeWidth: 3 })
              }
            ),
            /* @__PURE__ */ g("span", { className: "text-xs text-muted-foreground font-mono select-none", children: "HEX" }),
            /* @__PURE__ */ g("span", { className: "text-xs font-mono text-foreground", children: h.toUpperCase() }),
            m && /* @__PURE__ */ g("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "Contrast has been adjusted" })
          ] })
        ] }),
        /* @__PURE__ */ z(hn, { children: [
          /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g(
            "button",
            {
              type: "button",
              onClick: () => i((w) => w === "gradient" ? "swatches" : "gradient"),
              className: `w-7 h-7 rounded-full flex-shrink-0 border-2 transition-transform hover:scale-110 focus:outline-none border-white ${x ? "ring-2 ring-indigo-500" : ""}`,
              style: {
                background: "conic-gradient(from 0deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)"
              }
            }
          ) }),
          /* @__PURE__ */ g(gn, { children: "Custom color" })
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
          children: /* @__PURE__ */ g("div", { className: "overflow-hidden min-h-0", children: /* @__PURE__ */ z("div", { className: "flex gap-1 pt-2", children: [
            /* @__PURE__ */ g(FN, { hue: s, sat: l, val: d, onChange: v }),
            /* @__PURE__ */ g("div", { className: "w-7 flex justify-center flex-shrink-0", children: /* @__PURE__ */ g(VN, { hue: s, onChange: y }) })
          ] }) })
        }
      )
    ] })
  ] }) });
}
function $N() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ve(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const as = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Tr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Rc(e) {
  return "nodeType" in e;
}
function dt(e) {
  var t, n;
  return e ? Tr(e) ? e : Rc(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ec(e) {
  const {
    Document: t
  } = dt(e);
  return e instanceof t;
}
function xo(e) {
  return Tr(e) ? !1 : e instanceof dt(e).HTMLElement;
}
function Oy(e) {
  return e instanceof dt(e).SVGElement;
}
function Mr(e) {
  return e ? Tr(e) ? e.document : Rc(e) ? Ec(e) ? e : xo(e) || Oy(e) ? e.ownerDocument : document : document : document;
}
const Gt = as ? ul : he;
function Pc(e) {
  const t = fe(e);
  return Gt(() => {
    t.current = e;
  }), Ne(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function BN() {
  const e = fe(null), t = Ne((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = Ne(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function eo(e, t) {
  t === void 0 && (t = [e]);
  const n = fe(e);
  return Gt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function So(e, t) {
  const n = fe();
  return ve(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Ti(e) {
  const t = Pc(e), n = fe(null), r = Ne(
    (o) => {
      o !== n.current && (t == null || t(o, n.current)), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function el(e) {
  const t = fe();
  return he(() => {
    t.current = e;
  }, [e]), t.current;
}
let Zs = {};
function Co(e, t) {
  return ve(() => {
    if (t)
      return t;
    const n = Zs[e] == null ? 0 : Zs[e] + 1;
    return Zs[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ly(e) {
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
const ar = /* @__PURE__ */ Ly(1), to = /* @__PURE__ */ Ly(-1);
function zN(e) {
  return "clientX" in e && "clientY" in e;
}
function Tc(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = dt(e.target);
  return t && e instanceof t;
}
function HN(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = dt(e.target);
  return t && e instanceof t;
}
function tl(e) {
  if (HN(e)) {
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
  return zN(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const mr = /* @__PURE__ */ Object.freeze({
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
        return [mr.Translate.toString(e), mr.Scale.toString(e)].join(" ");
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
function jN(e) {
  return e.matches(Wd) ? e : e.querySelector(Wd);
}
const WN = {
  display: "none"
};
function GN(e) {
  let {
    id: t,
    value: n
  } = e;
  return V.createElement("div", {
    id: t,
    style: WN
  }, n);
}
function UN(e) {
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
function KN() {
  const [e, t] = $e("");
  return {
    announce: Ne((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Fy = /* @__PURE__ */ It(null);
function YN(e) {
  const t = De(Fy);
  he(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function XN() {
  const [e] = $e(() => /* @__PURE__ */ new Set()), t = Ne((r) => (e.add(r), () => e.delete(r)), [e]);
  return [Ne((r) => {
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
const qN = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ZN = {
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
function JN(e) {
  let {
    announcements: t = ZN,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = qN
  } = e;
  const {
    announce: i,
    announcement: s
  } = KN(), a = Co("DndLiveRegion"), [l, c] = $e(!1);
  if (he(() => {
    c(!0);
  }, []), YN(ve(() => ({
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
  const d = V.createElement(V.Fragment, null, V.createElement(GN, {
    id: r,
    value: o.draggable
  }), V.createElement(UN, {
    id: a,
    announcement: s
  }));
  return n ? fl(d, n) : d;
}
var Ve;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ve || (Ve = {}));
function Mi() {
}
function Gd(e, t) {
  return ve(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function QN() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ve(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Nt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Vy(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function $y(e, t) {
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
function eI(e, t) {
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
function By(e, t) {
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
const tI = (e) => {
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
      const c = Vy(Kd(l), o);
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: c
        }
      });
    }
  }
  return i.sort($y);
}, nI = (e) => {
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
      const c = Ud(l), d = o.reduce((p, h, m) => p + Vy(c[m], h), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return i.sort($y);
};
function rI(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const l = t.width * t.height, c = e.width * e.height, d = s * a, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const oI = (e) => {
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
      const l = rI(a, t);
      l > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return o.sort(eI);
};
function iI(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function zy(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Nt;
}
function sI(e) {
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
const aI = /* @__PURE__ */ sI(1);
function lI(e) {
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
function cI(e, t, n) {
  const r = lI(t);
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
const uI = {
  ignoreTransform: !1
};
function Ar(e, t) {
  t === void 0 && (t = uI);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = dt(e).getComputedStyle(e);
    c && (n = cI(n, c, d));
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
  return Ar(e, {
    ignoreTransform: !0
  });
}
function dI(e) {
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
function fI(e, t) {
  return t === void 0 && (t = dt(e).getComputedStyle(e)), t.position === "fixed";
}
function pI(e, t) {
  t === void 0 && (t = dt(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function ls(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Ec(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!xo(o) || Oy(o) || n.includes(o))
      return n;
    const i = dt(e).getComputedStyle(o);
    return o !== e && pI(o, i) && n.push(o), fI(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function Hy(e) {
  const [t] = ls(e, 1);
  return t ?? null;
}
function Js(e) {
  return !as || !e ? null : Tr(e) ? e : Rc(e) ? Ec(e) || e === Mr(e).scrollingElement ? window : xo(e) ? e : null : null;
}
function jy(e) {
  return Tr(e) ? e.scrollX : e.scrollLeft;
}
function Wy(e) {
  return Tr(e) ? e.scrollY : e.scrollTop;
}
function nl(e) {
  return {
    x: jy(e),
    y: Wy(e)
  };
}
var ze;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ze || (ze = {}));
function Gy(e) {
  return !as || !e ? !1 : e === document.scrollingElement;
}
function Uy(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Gy(e) ? {
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
const hI = {
  x: 0.2,
  y: 0.2
};
function mI(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = hI);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: p
  } = Uy(e), h = {
    x: 0,
    y: 0
  }, m = {
    x: 0,
    y: 0
  }, v = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && i <= t.top + v.height ? (h.y = ze.Backward, m.y = r * Math.abs((t.top + v.height - i) / v.height)) : !d && l >= t.bottom - v.height && (h.y = ze.Forward, m.y = r * Math.abs((t.bottom - v.height - l) / v.height)), !p && a >= t.right - v.width ? (h.x = ze.Forward, m.x = r * Math.abs((t.right - v.width - a) / v.width)) : !u && s <= t.left + v.width && (h.x = ze.Backward, m.x = r * Math.abs((t.left + v.width - s) / v.width)), {
    direction: h,
    speed: m
  };
}
function gI(e) {
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
function Ky(e) {
  return e.reduce((t, n) => ar(t, nl(n)), Nt);
}
function vI(e) {
  return e.reduce((t, n) => t + jy(n), 0);
}
function yI(e) {
  return e.reduce((t, n) => t + Wy(n), 0);
}
function bI(e, t) {
  if (t === void 0 && (t = Ar), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  Hy(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const wI = [["x", ["left", "right"], vI], ["y", ["top", "bottom"], yI]];
class Mc {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = ls(n), o = Ky(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of wI)
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
class Hr {
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
function xI(e) {
  const {
    EventTarget: t
  } = dt(e);
  return e instanceof t ? e : Mr(e);
}
function Qs(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var bt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(bt || (bt = {}));
function Xd(e) {
  e.preventDefault();
}
function SI(e) {
  e.stopPropagation();
}
var pe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(pe || (pe = {}));
const Yy = {
  start: [pe.Space, pe.Enter],
  cancel: [pe.Esc],
  end: [pe.Space, pe.Enter, pe.Tab]
}, CI = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case pe.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case pe.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case pe.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case pe.Up:
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
    this.props = t, this.listeners = new Hr(Mr(n)), this.windowListeners = new Hr(dt(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(bt.Resize, this.handleCancel), this.windowListeners.add(bt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(bt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && bI(r), n(Nt);
  }
  handleKeyDown(t) {
    if (Tc(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = Yy,
        coordinateGetter: s = CI,
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
      } : Nt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = s(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const p = to(u, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const v of m) {
          const y = t.code, {
            isTop: b,
            isRight: x,
            isLeft: w,
            isBottom: S,
            maxScroll: C,
            minScroll: R
          } = Uy(v), P = gI(v), E = {
            x: Math.min(y === pe.Right ? P.right - P.width / 2 : P.right, Math.max(y === pe.Right ? P.left : P.left + P.width / 2, u.x)),
            y: Math.min(y === pe.Down ? P.bottom - P.height / 2 : P.bottom, Math.max(y === pe.Down ? P.top : P.top + P.height / 2, u.y))
          }, A = y === pe.Right && !x || y === pe.Left && !w, T = y === pe.Down && !S || y === pe.Up && !b;
          if (A && E.x !== u.x) {
            const k = v.scrollLeft + p.x, B = y === pe.Right && k <= C.x || y === pe.Left && k >= R.x;
            if (B && !p.y) {
              v.scrollTo({
                left: k,
                behavior: a
              });
              return;
            }
            B ? h.x = v.scrollLeft - k : h.x = y === pe.Right ? v.scrollLeft - C.x : v.scrollLeft - R.x, h.x && v.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (T && E.y !== u.y) {
            const k = v.scrollTop + p.y, B = y === pe.Down && k <= C.y || y === pe.Up && k >= R.y;
            if (B && !p.x) {
              v.scrollTo({
                top: k,
                behavior: a
              });
              return;
            }
            B ? h.y = v.scrollTop - k : h.y = y === pe.Down ? v.scrollTop - C.y : v.scrollTop - R.y, h.y && v.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, ar(to(u, this.referenceCoordinates), h));
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
      keyboardCodes: r = Yy,
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
    r === void 0 && (r = xI(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = Mr(s), this.documentListeners = new Hr(this.document), this.listeners = new Hr(r), this.windowListeners = new Hr(dt(s)), this.initialCoordinates = (o = tl(i)) != null ? o : Nt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(bt.Resize, this.handleCancel), this.windowListeners.add(bt.DragStart, Xd), this.windowListeners.add(bt.VisibilityChange, this.handleCancel), this.windowListeners.add(bt.ContextMenu, Xd), this.documentListeners.add(bt.Keydown, this.handleKeydown), n) {
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
    t && (this.activated = !0, this.documentListeners.add(bt.Click, SI, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(bt.SelectionChange, this.removeTextSelection), n(t));
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
    const l = (n = tl(t)) != null ? n : Nt, c = to(o, l);
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
    t.code === pe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const RI = {
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
class Nc extends Dc {
  constructor(t) {
    const {
      event: n
    } = t, r = Mr(n.target);
    super(t, RI, r);
  }
}
Nc.activators = [{
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
const EI = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var rl;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(rl || (rl = {}));
class PI extends Dc {
  constructor(t) {
    super(t, EI, Mr(t.event.target));
  }
}
PI.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === rl.RightClick ? !1 : (r == null || r({
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
class TI extends Dc {
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
TI.activators = [{
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
var jr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(jr || (jr = {}));
var Ai;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ai || (Ai = {}));
function MI(e) {
  let {
    acceleration: t,
    activator: n = jr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = Ai.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: p
  } = e;
  const h = DI({
    delta: u,
    disabled: !i
  }), [m, v] = BN(), y = fe({
    x: 0,
    y: 0
  }), b = fe({
    x: 0,
    y: 0
  }), x = ve(() => {
    switch (n) {
      case jr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case jr.DraggableRect:
        return o;
    }
  }, [n, o, l]), w = fe(null), S = Ne(() => {
    const R = w.current;
    if (!R)
      return;
    const P = y.current.x * b.current.x, E = y.current.y * b.current.y;
    R.scrollBy(P, E);
  }, []), C = ve(() => a === Ai.TreeOrder ? [...c].reverse() : c, [a, c]);
  he(
    () => {
      if (!i || !c.length || !x) {
        v();
        return;
      }
      for (const R of C) {
        if ((r == null ? void 0 : r(R)) === !1)
          continue;
        const P = c.indexOf(R), E = d[P];
        if (!E)
          continue;
        const {
          direction: A,
          speed: T
        } = mI(R, E, x, t, p);
        for (const k of ["x", "y"])
          h[k][A[k]] || (T[k] = 0, A[k] = 0);
        if (T.x > 0 || T.y > 0) {
          v(), w.current = R, m(S, s), y.current = T, b.current = A;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, b.current = {
        x: 0,
        y: 0
      }, v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      v,
      i,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      m,
      c,
      C,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p)
    ]
  );
}
const AI = {
  x: {
    [ze.Backward]: !1,
    [ze.Forward]: !1
  },
  y: {
    [ze.Backward]: !1,
    [ze.Forward]: !1
  }
};
function DI(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = el(t);
  return So((o) => {
    if (n || !r || !o)
      return AI;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ze.Backward]: o.x[ze.Backward] || i.x === -1,
        [ze.Forward]: o.x[ze.Forward] || i.x === 1
      },
      y: {
        [ze.Backward]: o.y[ze.Backward] || i.y === -1,
        [ze.Forward]: o.y[ze.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function NI(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return So((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function II(e, t) {
  return ve(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, i = o.activators.map((s) => ({
      eventName: s.eventName,
      handler: t(s.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var no;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(no || (no = {}));
var ol;
(function(e) {
  e.Optimized = "optimized";
})(ol || (ol = {}));
const Jd = /* @__PURE__ */ new Map();
function kI(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = $e(null), {
    frequency: a,
    measure: l,
    strategy: c
  } = o, d = fe(e), u = y(), p = eo(u), h = Ne(function(b) {
    b === void 0 && (b = []), !p.current && s((x) => x === null ? b : x.concat(b.filter((w) => !x.includes(w))));
  }, [p]), m = fe(null), v = So((b) => {
    if (u && !n)
      return Jd;
    if (!b || b === Jd || d.current !== e || i != null) {
      const x = /* @__PURE__ */ new Map();
      for (let w of e) {
        if (!w)
          continue;
        if (i && i.length > 0 && !i.includes(w.id) && w.rect.current) {
          x.set(w.id, w.rect.current);
          continue;
        }
        const S = w.node.current, C = S ? new Mc(l(S), S) : null;
        w.rect.current = C, C && x.set(w.id, C);
      }
      return x;
    }
    return b;
  }, [e, i, n, u, l]);
  return he(() => {
    d.current = e;
  }, [e]), he(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), he(
    () => {
      i && i.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), he(
    () => {
      u || typeof a != "number" || m.current !== null || (m.current = setTimeout(() => {
        h(), m.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, h, ...r]
  ), {
    droppableRects: v,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function y() {
    switch (c) {
      case no.Always:
        return !1;
      case no.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Xy(e, t) {
  return So((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function _I(e, t) {
  return Xy(e, t);
}
function OI(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Pc(t), o = ve(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return he(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function cs(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Pc(t), o = ve(
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
  return he(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function LI(e) {
  return new Mc(Ar(e), e);
}
function Qd(e, t, n) {
  t === void 0 && (t = LI);
  const [r, o] = $e(null);
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
  const s = OI({
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
  }), a = cs({
    callback: i
  });
  return Gt(() => {
    i(), e ? (a == null || a.observe(e), s == null || s.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a == null || a.disconnect(), s == null || s.disconnect());
  }, [e]), r;
}
function FI(e) {
  const t = Xy(e);
  return zy(e, t);
}
const ef = [];
function VI(e) {
  const t = fe(e), n = So((r) => e ? r && r !== ef && e && t.current && e.parentNode === t.current.parentNode ? r : ls(e) : ef, [e]);
  return he(() => {
    t.current = e;
  }, [e]), n;
}
function $I(e) {
  const [t, n] = $e(null), r = fe(e), o = Ne((i) => {
    const s = Js(i.target);
    s && n((a) => a ? (a.set(s, nl(s)), new Map(a)) : null);
  }, []);
  return he(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((l) => {
        const c = Js(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, nl(c)]) : null;
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
  }, [o, e]), ve(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => ar(i, s), Nt) : Ky(e) : Nt, [e, t]);
}
function tf(e, t) {
  t === void 0 && (t = []);
  const n = fe(null);
  return he(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), he(() => {
    const r = e !== Nt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? to(e, n.current) : Nt;
}
function BI(e) {
  he(
    () => {
      if (!as)
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
function zI(e, t) {
  return ve(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: i
    } = r;
    return n[o] = (s) => {
      i(s, t);
    }, n;
  }, {}), [e, t]);
}
function qy(e) {
  return ve(() => e ? dI(e) : null, [e]);
}
const nf = [];
function HI(e, t) {
  t === void 0 && (t = Ar);
  const [n] = e, r = qy(n ? dt(n) : null), [o, i] = $e(nf);
  function s() {
    i(() => e.length ? e.map((l) => Gy(l) ? r : new Mc(t(l), l)) : nf);
  }
  const a = cs({
    callback: s
  });
  return Gt(() => {
    a == null || a.disconnect(), s(), e.forEach((l) => a == null ? void 0 : a.observe(l));
  }, [e]), o;
}
function jI(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return xo(t) ? t : e;
}
function WI(e) {
  let {
    measure: t
  } = e;
  const [n, r] = $e(null), o = Ne((c) => {
    for (const {
      target: d
    } of c)
      if (xo(d)) {
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
  }, [t]), i = cs({
    callback: o
  }), s = Ne((c) => {
    const d = jI(c);
    i == null || i.disconnect(), d && (i == null || i.observe(d)), r(d ? t(d) : null);
  }, [t, i]), [a, l] = Ti(s);
  return ve(() => ({
    nodeRef: a,
    rect: n,
    setRef: l
  }), [n, a, l]);
}
const GI = [{
  sensor: Nc,
  options: {}
}, {
  sensor: Ac,
  options: {}
}], UI = {
  current: {}
}, ei = {
  draggable: {
    measure: Yd
  },
  droppable: {
    measure: Yd,
    strategy: no.WhileDragging,
    frequency: ol.Optimized
  },
  dragOverlay: {
    measure: Ar
  }
};
class Wr extends Map {
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
const KI = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Wr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Mi
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: ei,
  measureDroppableContainers: Mi,
  windowRect: null,
  measuringScheduled: !1
}, YI = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Mi,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Mi
}, us = /* @__PURE__ */ It(YI), Zy = /* @__PURE__ */ It(KI);
function XI() {
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
      containers: new Wr()
    }
  };
}
function qI(e, t) {
  switch (t.type) {
    case Ve.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ve.DragMove:
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
    case Ve.DragEnd:
    case Ve.DragCancel:
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
    case Ve.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new Wr(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Ve.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new Wr(e.droppable.containers);
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
    case Ve.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Wr(e.droppable.containers);
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
function ZI(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = De(us), i = el(r), s = el(n == null ? void 0 : n.id);
  return he(() => {
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
          const u = jN(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function JI(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function QI(e) {
  return ve(
    () => ({
      draggable: {
        ...ei.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...ei.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...ei.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function ek(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const i = fe(!1), {
    x: s,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  Gt(() => {
    if (!s && !a || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = n(c), u = zy(d, r);
    if (s || (u.x = 0), a || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const p = Hy(c);
      p && p.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, s, a, r, n]);
}
const Jy = /* @__PURE__ */ It({
  ...Nt,
  scaleX: 1,
  scaleY: 1
});
var dn;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(dn || (dn = {}));
const tk = /* @__PURE__ */ bb(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: l = !0,
    children: c,
    sensors: d = GI,
    collisionDetection: u = oI,
    measuring: p,
    modifiers: h,
    ...m
  } = t;
  const v = wb(qI, void 0, XI), [y, b] = v, [x, w] = XN(), [S, C] = $e(dn.Uninitialized), R = S === dn.Initialized, {
    draggable: {
      active: P,
      nodes: E,
      translate: A
    },
    droppable: {
      containers: T
    }
  } = y, k = P != null ? E.get(P) : null, B = fe({
    initial: null,
    translated: null
  }), U = ve(() => {
    var Oe;
    return P != null ? {
      id: P,
      // It's possible for the active node to unmount while dragging
      data: (Oe = k == null ? void 0 : k.data) != null ? Oe : UI,
      rect: B
    } : null;
  }, [P, k]), j = fe(null), [Z, I] = $e(null), [H, O] = $e(null), D = eo(m, Object.values(m)), _ = Co("DndDescribedBy", s), oe = ve(() => T.getEnabled(), [T]), M = QI(p), {
    droppableRects: F,
    measureDroppableContainers: W,
    measuringScheduled: N
  } = kI(oe, {
    dragging: R,
    dependencies: [A.x, A.y],
    config: M.droppable
  }), $ = NI(E, P), L = ve(() => H ? tl(H) : null, [H]), G = gs(), K = _I($, M.draggable.measure);
  ek({
    activeNode: P != null ? E.get(P) : null,
    config: G.layoutShiftCompensation,
    initialRect: K,
    measure: M.draggable.measure
  });
  const Y = Qd($, M.draggable.measure, K), le = Qd($ ? $.parentElement : null), ie = fe({
    activatorEvent: null,
    active: null,
    activeNode: $,
    collisionRect: null,
    collisions: null,
    droppableRects: F,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: T,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ye = T.getNodeFor((n = ie.current.over) == null ? void 0 : n.id), me = WI({
    measure: M.dragOverlay.measure
  }), _e = (r = me.nodeRef.current) != null ? r : $, je = R ? (o = me.rect) != null ? o : Y : null, Ye = !!(me.nodeRef.current && me.rect), Yt = FI(Ye ? null : Y), Te = qy(_e ? dt(_e) : null), vt = VI(R ? ye ?? $ : null), rn = HI(vt), Ie = JI(h, {
    transform: {
      x: A.x - Yt.x,
      y: A.y - Yt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: H,
    active: U,
    activeNodeRect: Y,
    containerNodeRect: le,
    draggingNodeRect: je,
    over: ie.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: vt,
    scrollableAncestorRects: rn,
    windowRect: Te
  }), yt = L ? ar(L, A) : null, Nn = $I(vt), te = tf(Nn), ne = tf(Nn, [Y]), at = ar(Ie, te), Xe = je ? aI(je, Ie) : null, tt = U && Xe ? u({
    active: U,
    collisionRect: Xe,
    droppableRects: F,
    droppableContainers: oe,
    pointerCoordinates: yt
  }) : null, nt = By(tt, "id"), [We, Me] = $e(null), fs = Ye ? Ie : ar(Ie, ne), ps = iI(fs, (i = We == null ? void 0 : We.rect) != null ? i : null, Y), Kn = fe(null), Dr = Ne(
    (Oe, qe) => {
      let {
        sensor: re,
        options: we
      } = qe;
      if (j.current == null)
        return;
      const be = E.get(j.current);
      if (!be)
        return;
      const xe = Oe.nativeEvent, rt = new re({
        active: j.current,
        activeNode: be,
        event: xe,
        options: we,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ie,
        onAbort(ge) {
          if (!E.get(ge))
            return;
          const {
            onDragAbort: Pe
          } = D.current, Ae = {
            id: ge
          };
          Pe == null || Pe(Ae), x({
            type: "onDragAbort",
            event: Ae
          });
        },
        onPending(ge, ft, Pe, Ae) {
          if (!E.get(ge))
            return;
          const {
            onDragPending: pt
          } = D.current, Xt = {
            id: ge,
            constraint: ft,
            initialCoordinates: Pe,
            offset: Ae
          };
          pt == null || pt(Xt), x({
            type: "onDragPending",
            event: Xt
          });
        },
        onStart(ge) {
          const ft = j.current;
          if (ft == null)
            return;
          const Pe = E.get(ft);
          if (!Pe)
            return;
          const {
            onDragStart: Ae
          } = D.current, on = {
            activatorEvent: xe,
            active: {
              id: ft,
              data: Pe.data,
              rect: B
            }
          };
          Ro(() => {
            Ae == null || Ae(on), C(dn.Initializing), b({
              type: Ve.DragStart,
              initialCoordinates: ge,
              active: ft
            }), x({
              type: "onDragStart",
              event: on
            }), I(Kn.current), O(xe);
          });
        },
        onMove(ge) {
          b({
            type: Ve.DragMove,
            coordinates: ge
          });
        },
        onEnd: Re(Ve.DragEnd),
        onCancel: Re(Ve.DragCancel)
      });
      Kn.current = rt;
      function Re(ge) {
        return async function() {
          const {
            active: Pe,
            collisions: Ae,
            over: on,
            scrollAdjustedTranslate: pt
          } = ie.current;
          let Xt = null;
          if (Pe && pt) {
            const {
              cancelDrop: Nr
            } = D.current;
            Xt = {
              activatorEvent: xe,
              active: Pe,
              collisions: Ae,
              delta: pt,
              over: on
            }, ge === Ve.DragEnd && typeof Nr == "function" && await Promise.resolve(Nr(Xt)) && (ge = Ve.DragCancel);
          }
          j.current = null, Ro(() => {
            b({
              type: ge
            }), C(dn.Uninitialized), Me(null), I(null), O(null), Kn.current = null;
            const Nr = ge === Ve.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Xt) {
              const vs = D.current[Nr];
              vs == null || vs(Xt), x({
                type: Nr,
                event: Xt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), hs = Ne((Oe, qe) => (re, we) => {
    const be = re.nativeEvent, xe = E.get(we);
    if (
      // Another sensor is already instantiating
      j.current !== null || // No active draggable
      !xe || // Event has already been captured
      be.dndKit || be.defaultPrevented
    )
      return;
    const rt = {
      active: xe
    };
    Oe(re, qe.options, rt) === !0 && (be.dndKit = {
      capturedBy: qe.sensor
    }, j.current = we, Dr(re, qe));
  }, [E, Dr]), Yn = II(d, hs);
  BI(d), Gt(() => {
    Y && S === dn.Initializing && C(dn.Initialized);
  }, [Y, S]), he(
    () => {
      const {
        onDragMove: Oe
      } = D.current, {
        active: qe,
        activatorEvent: re,
        collisions: we,
        over: be
      } = ie.current;
      if (!qe || !re)
        return;
      const xe = {
        active: qe,
        activatorEvent: re,
        collisions: we,
        delta: {
          x: at.x,
          y: at.y
        },
        over: be
      };
      Ro(() => {
        Oe == null || Oe(xe), x({
          type: "onDragMove",
          event: xe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [at.x, at.y]
  ), he(
    () => {
      const {
        active: Oe,
        activatorEvent: qe,
        collisions: re,
        droppableContainers: we,
        scrollAdjustedTranslate: be
      } = ie.current;
      if (!Oe || j.current == null || !qe || !be)
        return;
      const {
        onDragOver: xe
      } = D.current, rt = we.get(nt), Re = rt && rt.rect.current ? {
        id: rt.id,
        rect: rt.rect.current,
        data: rt.data,
        disabled: rt.disabled
      } : null, ge = {
        active: Oe,
        activatorEvent: qe,
        collisions: re,
        delta: {
          x: be.x,
          y: be.y
        },
        over: Re
      };
      Ro(() => {
        Me(Re), xe == null || xe(ge), x({
          type: "onDragOver",
          event: ge
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nt]
  ), Gt(() => {
    ie.current = {
      activatorEvent: H,
      active: U,
      activeNode: $,
      collisionRect: Xe,
      collisions: tt,
      droppableRects: F,
      draggableNodes: E,
      draggingNode: _e,
      draggingNodeRect: je,
      droppableContainers: T,
      over: We,
      scrollableAncestors: vt,
      scrollAdjustedTranslate: at
    }, B.current = {
      initial: je,
      translated: Xe
    };
  }, [U, $, tt, Xe, E, _e, je, F, T, We, vt, at]), MI({
    ...G,
    delta: A,
    draggingRect: Xe,
    pointerCoordinates: yt,
    scrollableAncestors: vt,
    scrollableAncestorRects: rn
  });
  const Ot = ve(() => ({
    active: U,
    activeNode: $,
    activeNodeRect: Y,
    activatorEvent: H,
    collisions: tt,
    containerNodeRect: le,
    dragOverlay: me,
    draggableNodes: E,
    droppableContainers: T,
    droppableRects: F,
    over: We,
    measureDroppableContainers: W,
    scrollableAncestors: vt,
    scrollableAncestorRects: rn,
    measuringConfiguration: M,
    measuringScheduled: N,
    windowRect: Te
  }), [U, $, Y, H, tt, le, me, E, T, F, We, W, vt, rn, M, N, Te]), ms = ve(() => ({
    activatorEvent: H,
    activators: Yn,
    active: U,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: _
    },
    dispatch: b,
    draggableNodes: E,
    over: We,
    measureDroppableContainers: W
  }), [H, Yn, U, Y, b, _, E, We, W]);
  return V.createElement(Fy.Provider, {
    value: w
  }, V.createElement(us.Provider, {
    value: ms
  }, V.createElement(Zy.Provider, {
    value: Ot
  }, V.createElement(Jy.Provider, {
    value: ps
  }, c)), V.createElement(ZI, {
    disabled: (a == null ? void 0 : a.restoreFocus) === !1
  })), V.createElement(JN, {
    ...a,
    hiddenTextDescribedById: _
  }));
  function gs() {
    const Oe = (Z == null ? void 0 : Z.autoScrollEnabled) === !1, qe = typeof l == "object" ? l.enabled === !1 : l === !1, re = R && !Oe && !qe;
    return typeof l == "object" ? {
      ...l,
      enabled: re
    } : {
      enabled: re
    };
  }
}), nk = /* @__PURE__ */ It(null), rf = "button", rk = "Draggable";
function ok(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = Co(rk), {
    activators: s,
    activatorEvent: a,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: p
  } = De(us), {
    role: h = rf,
    roleDescription: m = "draggable",
    tabIndex: v = 0
  } = o ?? {}, y = (l == null ? void 0 : l.id) === t, b = De(y ? Jy : nk), [x, w] = Ti(), [S, C] = Ti(), R = zI(s, t), P = eo(n);
  Gt(
    () => (u.set(t, {
      id: t,
      key: i,
      node: x,
      activatorNode: S,
      data: P
    }), () => {
      const A = u.get(t);
      A && A.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const E = ve(() => ({
    role: h,
    tabIndex: v,
    "aria-disabled": r,
    "aria-pressed": y && h === rf ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": d.draggable
  }), [r, h, v, y, m, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: c,
    attributes: E,
    isDragging: y,
    listeners: r ? void 0 : R,
    node: x,
    over: p,
    setNodeRef: w,
    setActivatorNodeRef: C,
    transform: b
  };
}
function ik() {
  return De(Zy);
}
const sk = "Droppable", ak = {
  timeout: 25
};
function lk(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = Co(sk), {
    active: s,
    dispatch: a,
    over: l,
    measureDroppableContainers: c
  } = De(us), d = fe({
    disabled: n
  }), u = fe(!1), p = fe(null), h = fe(null), {
    disabled: m,
    updateMeasurementsFor: v,
    timeout: y
  } = {
    ...ak,
    ...o
  }, b = eo(v ?? r), x = Ne(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        c(Array.isArray(b.current) ? b.current : [b.current]), h.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), w = cs({
    callback: x,
    disabled: m || !s
  }), S = Ne((E, A) => {
    w && (A && (w.unobserve(A), u.current = !1), E && w.observe(E));
  }, [w]), [C, R] = Ti(S), P = eo(t);
  return he(() => {
    !w || !C.current || (w.disconnect(), u.current = !1, w.observe(C.current));
  }, [C, w]), he(
    () => (a({
      type: Ve.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: C,
        rect: p,
        data: P
      }
    }), () => a({
      type: Ve.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), he(() => {
    n !== d.current.disabled && (a({
      type: Ve.SetDroppableDisabled,
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
    setNodeRef: R
  };
}
function ck(e, t, n) {
  const r = {
    ...e
  };
  return t.top + e.y <= n.top ? r.y = n.top - t.top : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom), t.left + e.x <= n.left ? r.x = n.left - t.left : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right), r;
}
const uk = (e) => {
  let {
    containerNodeRect: t,
    draggingNodeRect: n,
    transform: r
  } = e;
  return !n || !t ? r : ck(r, n, t);
}, dk = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
};
function Ic(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function fk(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function Vo(e) {
  return e !== null && e >= 0;
}
function pk(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function hk(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Qy = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = Ic(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, $o = {
  scaleX: 1,
  scaleY: 1
}, of = (e) => {
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
      ...$o
    } : null;
  }
  const l = mk(i, o, n);
  return o > n && o <= s ? {
    x: 0,
    y: -a.height - l,
    ...$o
  } : o < n && o >= s ? {
    x: 0,
    y: a.height + l,
    ...$o
  } : {
    x: 0,
    y: 0,
    ...$o
  };
};
function mk(e, t, n) {
  const r = e[t], o = e[t - 1], i = e[t + 1];
  return r ? n < t ? o ? r.top - (o.top + o.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : o ? r.top - (o.top + o.height) : 0 : 0;
}
const eb = "Sortable", tb = /* @__PURE__ */ V.createContext({
  activeIndex: -1,
  containerId: eb,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Qy,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function sf(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = Qy,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = ik(), u = Co(eb, n), p = a.rect !== null, h = ve(() => r.map((R) => typeof R == "object" && "id" in R ? R.id : R), [r]), m = s != null, v = s ? h.indexOf(s.id) : -1, y = c ? h.indexOf(c.id) : -1, b = fe(h), x = !pk(h, b.current), w = y !== -1 && v === -1 || x, S = hk(i);
  Gt(() => {
    x && m && d(h);
  }, [x, h, m, d]), he(() => {
    b.current = h;
  }, [h]);
  const C = ve(
    () => ({
      activeIndex: v,
      containerId: u,
      disabled: S,
      disableTransforms: w,
      items: h,
      overIndex: y,
      useDragOverlay: p,
      sortedRects: fk(h, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, u, S.draggable, S.droppable, w, h, y, l, p, o]
  );
  return V.createElement(tb.Provider, {
    value: C
  }, t);
}
const gk = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Ic(n, r, o).indexOf(t);
}, vk = (e) => {
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
}, yk = {
  duration: 200,
  easing: "ease"
}, nb = "transform", bk = /* @__PURE__ */ mr.Transition.toString({
  property: nb,
  duration: 0,
  easing: "linear"
}), wk = {
  roleDescription: "sortable"
};
function xk(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = $e(null), a = fe(n);
  return Gt(() => {
    if (!t && n !== a.current && r.current) {
      const l = o.current;
      if (l) {
        const c = Ar(r.current, {
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
  }, [t, n, r, o]), he(() => {
    i && s(null);
  }, [i]), i;
}
function rb(e) {
  let {
    animateLayoutChanges: t = vk,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = gk,
    id: s,
    strategy: a,
    resizeObserverConfig: l,
    transition: c = yk
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: p,
    disabled: h,
    disableTransforms: m,
    sortedRects: v,
    overIndex: y,
    useDragOverlay: b,
    strategy: x
  } = De(tb), w = Sk(r, h), S = d.indexOf(s), C = ve(() => ({
    sortable: {
      containerId: u,
      index: S,
      items: d
    },
    ...o
  }), [u, o, S, d]), R = ve(() => d.slice(d.indexOf(s)), [d, s]), {
    rect: P,
    node: E,
    isOver: A,
    setNodeRef: T
  } = lk({
    id: s,
    data: C,
    disabled: w.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: R,
      ...l
    }
  }), {
    active: k,
    activatorEvent: B,
    activeNodeRect: U,
    attributes: j,
    setNodeRef: Z,
    listeners: I,
    isDragging: H,
    over: O,
    setActivatorNodeRef: D,
    transform: _
  } = ok({
    id: s,
    data: C,
    attributes: {
      ...wk,
      ...n
    },
    disabled: w.draggable
  }), oe = $N(T, Z), M = !!k, F = M && !m && Vo(p) && Vo(y), W = !b && H, N = W && F ? _ : null, L = F ? N ?? (a ?? x)({
    rects: v,
    activeNodeRect: U,
    activeIndex: p,
    overIndex: y,
    index: S
  }) : null, G = Vo(p) && Vo(y) ? i({
    id: s,
    items: d,
    activeIndex: p,
    overIndex: y
  }) : S, K = k == null ? void 0 : k.id, Y = fe({
    activeId: K,
    items: d,
    newIndex: G,
    containerId: u
  }), le = d !== Y.current.items, ie = t({
    active: k,
    containerId: u,
    isDragging: H,
    isSorting: M,
    id: s,
    index: S,
    items: d,
    newIndex: Y.current.newIndex,
    previousItems: Y.current.items,
    previousContainerId: Y.current.containerId,
    transition: c,
    wasDragging: Y.current.activeId != null
  }), ye = xk({
    disabled: !ie,
    index: S,
    node: E,
    rect: P
  });
  return he(() => {
    M && Y.current.newIndex !== G && (Y.current.newIndex = G), u !== Y.current.containerId && (Y.current.containerId = u), d !== Y.current.items && (Y.current.items = d);
  }, [M, G, u, d]), he(() => {
    if (K === Y.current.activeId)
      return;
    if (K != null && Y.current.activeId == null) {
      Y.current.activeId = K;
      return;
    }
    const _e = setTimeout(() => {
      Y.current.activeId = K;
    }, 50);
    return () => clearTimeout(_e);
  }, [K]), {
    active: k,
    activeIndex: p,
    attributes: j,
    data: C,
    rect: P,
    index: S,
    newIndex: G,
    items: d,
    isOver: A,
    isSorting: M,
    isDragging: H,
    listeners: I,
    node: E,
    overIndex: y,
    over: O,
    setNodeRef: oe,
    setActivatorNodeRef: D,
    setDroppableNodeRef: T,
    setDraggableNodeRef: Z,
    transform: ye ?? L,
    transition: me()
  };
  function me() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ye || // Or to prevent items jumping to back to their "new" position when items change
      le && Y.current.newIndex === S
    )
      return bk;
    if (!(W && !Tc(B) || !c) && (M || ie))
      return mr.Transition.toString({
        ...c,
        property: nb
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
function Di(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const Ck = [pe.Down, pe.Right, pe.Up, pe.Left], Rk = (e, t) => {
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
          case pe.Down:
            r.top < p.top && l.push(u);
            break;
          case pe.Up:
            r.top > p.top && l.push(u);
            break;
          case pe.Left:
            r.left > p.left && l.push(u);
            break;
          case pe.Right:
            r.left < p.left && l.push(u);
            break;
        }
    });
    const c = nI({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let d = By(c, "id");
    if (d === (s == null ? void 0 : s.id) && c.length > 1 && (d = c[1].id), d != null) {
      const u = i.get(n.id), p = i.get(d), h = p ? o.get(p.id) : null, m = p == null ? void 0 : p.node.current;
      if (m && h && u && p) {
        const y = ls(m).some((R, P) => a[P] !== R), b = ob(u, p), x = Ek(u, p), w = y || !b ? {
          x: 0,
          y: 0
        } : {
          x: x ? r.width - h.width : 0,
          y: x ? r.height - h.height : 0
        }, S = {
          x: h.left,
          y: h.top
        };
        return w.x && w.y ? S : to(S, w);
      }
    }
  }
};
function ob(e, t) {
  return !Di(e) || !Di(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function Ek(e, t) {
  return !Di(e) || !Di(t) || !ob(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
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
function pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gt(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: pn(n, r[e])
    }));
  };
}
function ds(e) {
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
function se(e, t, n) {
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
      const d = Math.round((Date.now() - s) * 100) / 100, u = Math.round((Date.now() - c) * 100) / 100, p = u / 16, h = (m, v) => {
        for (m = String(m); m.length < v; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${h(u, 5)} /${h(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function ae(e, t, n, r) {
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
    getContext: se(() => [e, n, t, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), ae(e.options, "debugCells", "cell.getContext"))
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
    for (const v of l.split(".")) {
      var m;
      h = (m = h) == null ? void 0 : m[v], process.env.NODE_ENV !== "production" && h === void 0 && console.warn(`"${v}" in deeply nested key "${l}" returned undefined.`);
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
    getFlatColumns: se(() => [!0], () => {
      var p;
      return [u, ...(p = u.columns) == null ? void 0 : p.flatMap((h) => h.getFlatColumns())];
    }, ae(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: se(() => [e._getOrderColumnsFn()], (p) => {
      var h;
      if ((h = u.columns) != null && h.length) {
        let m = u.columns.flatMap((v) => v.getLeafColumns());
        return p(m);
      }
      return [u];
    }, ae(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(u, e);
  return u;
}
const Ze = "debugHeaders";
function af(e, t, n) {
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
    e.getHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((u) => n.find((p) => p.id === u)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((u) => n.find((p) => p.id === u)).filter(Boolean)) != null ? s : [], c = n.filter((u) => !(r != null && r.includes(u.id)) && !(o != null && o.includes(u.id)));
      return Bo(t, [...a, ...c, ...l], e);
    }, ae(e.options, Ze, "getHeaderGroups")), e.getCenterHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Bo(t, n, e, "center")), ae(e.options, Ze, "getCenterHeaderGroups")), e.getLeftHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Bo(t, i, e, "left");
    }, ae(e.options, Ze, "getLeftHeaderGroups")), e.getRightHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Bo(t, i, e, "right");
    }, ae(e.options, Ze, "getRightHeaderGroups")), e.getFooterGroups = se(() => [e.getHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Ze, "getFooterGroups")), e.getLeftFooterGroups = se(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Ze, "getLeftFooterGroups")), e.getCenterFooterGroups = se(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Ze, "getCenterFooterGroups")), e.getRightFooterGroups = se(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Ze, "getRightFooterGroups")), e.getFlatHeaders = se(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Ze, "getFlatHeaders")), e.getLeftFlatHeaders = se(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Ze, "getLeftFlatHeaders")), e.getCenterFlatHeaders = se(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Ze, "getCenterFlatHeaders")), e.getRightFlatHeaders = se(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Ze, "getRightFlatHeaders")), e.getCenterLeafHeaders = se(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ae(e.options, Ze, "getCenterLeafHeaders")), e.getLeftLeafHeaders = se(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ae(e.options, Ze, "getLeftLeafHeaders")), e.getRightLeafHeaders = se(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ae(e.options, Ze, "getRightLeafHeaders")), e.getLeafHeaders = se(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, a, l, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((d) => d.getLeafHeaders()).flat();
    }, ae(e.options, Ze, "getLeafHeaders"));
  }
};
function Bo(e, t, n, r) {
  var o, i;
  let s = 0;
  const a = function(p, h) {
    h === void 0 && (h = 1), s = Math.max(s, h), p.filter((m) => m.getIsVisible()).forEach((m) => {
      var v;
      (v = m.columns) != null && v.length && a(m.columns, h + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (p, h) => {
    const m = {
      depth: h,
      id: [r, `${h}`].filter(Boolean).join("_"),
      headers: []
    }, v = [];
    p.forEach((y) => {
      const b = [...v].reverse()[0], x = y.column.depth === m.depth;
      let w, S = !1;
      if (x && y.column.parent ? w = y.column.parent : (w = y.column, S = !0), b && (b == null ? void 0 : b.column) === w)
        b.subHeaders.push(y);
      else {
        const C = af(n, w, {
          id: [r, h, w.id, y == null ? void 0 : y.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${v.filter((R) => R.column === w).length}` : void 0,
          depth: h,
          index: v.length
        });
        C.subHeaders.push(y), v.push(C);
      }
      m.headers.push(y), y.headerGroup = m;
    }), l.push(m), h > 0 && c(v, h - 1);
  }, d = t.map((p, h) => af(n, p, {
    depth: s,
    index: h
  }));
  c(d, s - 1), l.reverse();
  const u = (p) => p.filter((m) => m.column.getIsVisible()).map((m) => {
    let v = 0, y = 0, b = [0];
    m.subHeaders && m.subHeaders.length ? (b = [], u(m.subHeaders).forEach((w) => {
      let {
        colSpan: S,
        rowSpan: C
      } = w;
      v += S, b.push(C);
    })) : v = 1;
    const x = Math.min(...b);
    return y = y + x, m.colSpan = v, m.rowSpan = y, {
      colSpan: v,
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
    getAllCells: se(() => [e.getAllLeafColumns()], (l) => l.map((c) => Mk(e, a, c, c.id)), ae(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: se(() => [a.getAllCells()], (l) => l.reduce((c, d) => (c[d.column.id] = d, c), {}), ae(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, Nk = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ib = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ib.autoRemove = (e) => Mt(e);
const sb = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
sb.autoRemove = (e) => Mt(e);
const ab = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ab.autoRemove = (e) => Mt(e);
const lb = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
lb.autoRemove = (e) => Mt(e);
const cb = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
cb.autoRemove = (e) => Mt(e) || !(e != null && e.length);
const ub = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
ub.autoRemove = (e) => Mt(e) || !(e != null && e.length);
const db = (e, t, n) => e.getValue(t) === n;
db.autoRemove = (e) => Mt(e);
const fb = (e, t, n) => e.getValue(t) == n;
fb.autoRemove = (e) => Mt(e);
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
_c.autoRemove = (e) => Mt(e) || Mt(e[0]) && Mt(e[1]);
const Zt = {
  includesString: ib,
  includesStringSensitive: sb,
  equalsString: ab,
  arrIncludes: lb,
  arrIncludesAll: cb,
  arrIncludesSome: ub,
  equals: db,
  weakEquals: fb,
  inNumberRange: _c
};
function Mt(e) {
  return e == null || e === "";
}
const Ik = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: gt("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Zt.includesString : typeof r == "number" ? Zt.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Zt.equals : Array.isArray(r) ? Zt.arrIncludes : Zt.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return ds(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Zt[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((d) => d.id === e.id), s = pn(n, i ? i.value : void 0);
        if (lf(o, s, e)) {
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
        return (i = pn(t, o)) == null ? void 0 : i.filter((s) => {
          const a = n.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (lf(l, s.value, a))
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
function lf(e, t, n) {
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
    onGroupingChange: gt("grouping", e),
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
      return ds(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : ta[e.columnDef.aggregationFn];
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
    onColumnOrderChange: gt("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = se((n) => [Gr(t, n)], (n) => n.findIndex((r) => r.id === e.id), ae(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = Gr(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = Gr(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = se(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
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
    }, ae(e.options, "debugTable", "_getOrderColumnsFn"));
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
    onColumnPinningChange: gt("columnPinning", e)
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
    e.getCenterVisibleCells = se(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, ae(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = se(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), ae(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = se(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), ae(t.options, "debugRows", "getRightVisibleCells"));
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
    }, e.getLeftLeafColumns = se(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), ae(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = se(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), ae(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = se(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, ae(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Uk(e) {
  return e || (typeof document < "u" ? document : null);
}
const zo = {
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
  getDefaultColumnDef: () => zo,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: ra(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: gt("columnSizing", e),
    onColumnSizingInfoChange: gt("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : zo.minSize, (r = i ?? e.columnDef.size) != null ? r : zo.size), (o = e.columnDef.maxSize) != null ? o : zo.maxSize);
    }, e.getStart = se((n) => [n, Gr(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns", "getStart")), e.getAfter = se((n) => [n, Gr(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], l = oa(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, d = (b, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((w) => {
            var S, C;
            const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, P = (x - ((S = w == null ? void 0 : w.startOffset) != null ? S : 0)) * R, E = Math.max(P / ((C = w == null ? void 0 : w.startSize) != null ? C : 0), -0.999999);
            return w.columnSizingStart.forEach((A) => {
              let [T, k] = A;
              c[T] = Math.round(Math.max(k + k * E, 0) * 100) / 100;
            }), {
              ...w,
              deltaOffset: P,
              deltaPercentage: E
            };
          }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((w) => ({
            ...w,
            ...c
          })));
        }, u = (b) => d("move", b), p = (b) => {
          d("end", b), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, h = Uk(n), m = {
          moveHandler: (b) => u(b.clientX),
          upHandler: (b) => {
            h == null || h.removeEventListener("mousemove", m.moveHandler), h == null || h.removeEventListener("mouseup", m.upHandler), p(b.clientX);
          }
        }, v = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), u(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var x;
            h == null || h.removeEventListener("touchmove", v.moveHandler), h == null || h.removeEventListener("touchend", v.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), p((x = b.touches[0]) == null ? void 0 : x.clientX);
          }
        }, y = Yk() ? {
          passive: !1
        } : !1;
        oa(i) ? (h == null || h.addEventListener("touchmove", v.moveHandler, y), h == null || h.addEventListener("touchend", v.upHandler, y)) : (h == null || h.addEventListener("mousemove", m.moveHandler, y), h == null || h.addEventListener("mouseup", m.upHandler, y)), t.setColumnSizingInfo((b) => ({
          ...b,
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
let Ho = null;
function Yk() {
  if (typeof Ho == "boolean") return Ho;
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
  return Ho = e, Ho;
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
    onColumnVisibilityChange: gt("columnVisibility", e)
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
    e._getAllVisibleCells = se(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), ae(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = se(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], ae(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => se(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), ae(e.options, "debugColumns", n));
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
function Gr(e, t) {
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
    onGlobalFilterChange: gt("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => Zt.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return ds(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Zt[r];
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
    onExpandedChange: gt("expanded", e),
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
}, il = 0, sl = 10, ia = () => ({
  pageIndex: il,
  pageSize: sl
}), Qk = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...ia(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: gt("pagination", e)
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
      const o = (i) => pn(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? ia() : (o = e.initialState.pagination) != null ? o : ia());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = pn(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? il : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : il);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? sl : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : sl);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, pn(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = pn(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = se(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, ae(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
    onRowPinningChange: gt("rowPinning", e)
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
            top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((v) => !(a != null && a.has(v))),
            bottom: [...((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var h, m;
          return {
            top: [...((h = l == null ? void 0 : l.top) != null ? h : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)],
            bottom: ((m = l == null ? void 0 : l.bottom) != null ? m : []).filter((v) => !(a != null && a.has(v)))
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
    }, e.getTopRows = se(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), ae(e.options, "debugRows", "getTopRows")), e.getBottomRows = se(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), ae(e.options, "debugRows", "getBottomRows")), e.getCenterRows = se(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, ae(e.options, "debugRows", "getCenterRows"));
  }
}, t_ = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: gt("rowSelection", e),
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
        al(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = se(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? aa(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = se(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? aa(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = se(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? aa(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return al(a, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), a;
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
      return ll(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ll(e, n) === "all";
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
}, al = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => al(e, a.id, n, r, o));
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
function ll(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Oc(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = ll(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const cl = /([0-9]+)/gm, n_ = (e, t, n) => pb(Sn(e.getValue(n)).toLowerCase(), Sn(t.getValue(n)).toLowerCase()), r_ = (e, t, n) => pb(Sn(e.getValue(n)), Sn(t.getValue(n))), o_ = (e, t, n) => Lc(Sn(e.getValue(n)).toLowerCase(), Sn(t.getValue(n)).toLowerCase()), i_ = (e, t, n) => Lc(Sn(e.getValue(n)), Sn(t.getValue(n))), s_ = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, a_ = (e, t, n) => Lc(e.getValue(n), t.getValue(n));
function Lc(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Sn(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function pb(e, t) {
  const n = e.split(cl).filter(Boolean), r = t.split(cl).filter(Boolean);
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
const Or = {
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
    onSortingChange: gt("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Or.datetime;
        if (typeof i == "string" && (r = !0, i.split(cl).length > 1))
          return Or.alphanumeric;
      }
      return r ? Or.text : Or.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return ds(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Or[e.columnDef.sortingFn];
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
  Nk,
  Ik,
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
      const h = pn(p, o.options);
      o.options = s(h);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, h, m) => {
      var v;
      return (v = o.options.getRowId == null ? void 0 : o.options.getRowId(p, h, m)) != null ? v : `${m ? [m.id, h].join(".") : h}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, h) => {
      let m = (h ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!m && (m = o.getCoreRowModel().rowsById[p], !m))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${p}`) : new Error();
      return m;
    },
    _getDefaultColumnDef: se(() => [o.options.defaultColumn], (p) => {
      var h;
      return p = (h = p) != null ? h : {}, {
        header: (m) => {
          const v = m.header.column.columnDef;
          return v.accessorKey ? v.accessorKey : v.accessorFn ? v.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var v, y;
          return (v = (y = m.renderValue()) == null || y.toString == null ? void 0 : y.toString()) != null ? v : null;
        },
        ...o._features.reduce((m, v) => Object.assign(m, v.getDefaultColumnDef == null ? void 0 : v.getDefaultColumnDef()), {}),
        ...p
      };
    }, ae(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: se(() => [o._getColumnDefs()], (p) => {
      const h = function(m, v, y) {
        return y === void 0 && (y = 0), m.map((b) => {
          const x = Ak(o, b, y, v), w = b;
          return x.columns = w.columns ? h(w.columns, x, y + 1) : [], x;
        });
      };
      return h(p);
    }, ae(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: se(() => [o.getAllColumns()], (p) => p.flatMap((h) => h.getFlatColumns()), ae(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: se(() => [o.getAllFlatColumns()], (p) => p.reduce((h, m) => (h[m.id] = m, h), {}), ae(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: se(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, h) => {
      let m = p.flatMap((v) => v.getLeafColumns());
      return h(m);
    }, ae(e, "debugColumns", "getAllLeafColumns")),
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
  return (e) => se(() => [e.options.data], (t) => {
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
  }, ae(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
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
      const m = kc(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
      if (m.columnFilters = h.columnFilters, (u = h.subRows) != null && u.length && c < s) {
        if (m.subRows = a(h.subRows, c + 1), h = m, t(h) && !m.subRows.length) {
          d.push(h), i[h.id] = h, o.push(h);
          continue;
        }
        if (t(h) || m.subRows.length) {
          d.push(h), i[h.id] = h, o.push(h);
          continue;
        }
      } else
        h = m, t(h) && (d.push(h), i[h.id] = h, o.push(h));
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
          const v = kc(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
          v.subRows = a(h.subRows, c + 1), h = v;
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
  return (e) => se(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, r) => {
    if (!t.rows.length || !(n != null && n.length) && !r) {
      for (let p = 0; p < t.flatRows.length; p++)
        t.flatRows[p].columnFilters = {}, t.flatRows[p].columnFiltersMeta = {};
      return t;
    }
    const o = [], i = [];
    (n ?? []).forEach((p) => {
      var h;
      const m = e.getColumn(p.id);
      if (!m)
        return;
      const v = m.getFilterFn();
      if (!v) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${m.id}.`);
        return;
      }
      o.push({
        id: p.id,
        filterFn: v,
        resolvedValue: (h = v.resolveFilterValue == null ? void 0 : v.resolveFilterValue(p.value)) != null ? h : p.value
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
        for (let m = 0; m < o.length; m++) {
          c = o[m];
          const v = c.id;
          h.columnFilters[v] = c.filterFn(h, v, c.resolvedValue, (y) => {
            h.columnFiltersMeta[v] = y;
          });
        }
      if (i.length) {
        for (let m = 0; m < i.length; m++) {
          d = i[m];
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
      for (let h = 0; h < s.length; h++)
        if (p.columnFilters[s[h]] === !1)
          return !1;
      return !0;
    };
    return p_(t.rows, u, e);
  }, ae(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function v_(e) {
  return (t) => se(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, r) => {
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
  }, ae(t.options, "debugTable", "getPaginationRowModel"));
}
function y_() {
  return (e) => se(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
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
          const m = i[h], v = s[m.id], y = v.sortUndefined, b = (p = m == null ? void 0 : m.desc) != null ? p : !1;
          let x = 0;
          if (y) {
            const w = d.getValue(m.id), S = u.getValue(m.id), C = w === void 0, R = S === void 0;
            if (C || R) {
              if (y === "first") return C ? -1 : 1;
              if (y === "last") return C ? 1 : -1;
              x = C && R ? 0 : C ? y : -y;
            }
          }
          if (x === 0 && (x = v.sortingFn(d, u, m.id)), x !== 0)
            return b && (x *= -1), v.invertSorting && (x *= -1), x;
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
  }, ae(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function gr(e, t) {
  return e ? b_(e) ? /* @__PURE__ */ f.createElement(e, t) : e : null;
}
function b_(e) {
  return w_(e) || typeof e == "function" || x_(e);
}
function w_(e) {
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
  contextMenu: e,
  contextSub: t,
  rowActions: n,
  onSetContextSub: r,
  onClose: o,
  getContextRows: i
}) {
  return e ? fl(
    /* @__PURE__ */ z(jt, { children: [
      /* @__PURE__ */ g(
        "div",
        {
          style: { top: e.y, left: e.x },
          className: "fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary",
          onClick: (s) => s.stopPropagation(),
          children: n.map((s, a) => {
            var l;
            return /* @__PURE__ */ z(
              "button",
              {
                className: q(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                  s.destructive && "text-destructive hover:text-destructive focus:text-destructive",
                  (t == null ? void 0 : t.action) === s && "bg-accent"
                ),
                onMouseEnter: (c) => {
                  var d;
                  if ((d = s.subActions) != null && d.length) {
                    const u = c.currentTarget.getBoundingClientRect();
                    r({ action: s, x: u.right + 4, y: u.top });
                  } else
                    r(null);
                },
                onClick: () => {
                  var c, d;
                  (c = s.subActions) != null && c.length || ((d = s.onClick) == null || d.call(s, i()), o());
                },
                children: [
                  s.icon,
                  /* @__PURE__ */ g("span", { className: "flex-1", children: s.label }),
                  s.shortcut && /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: s.shortcut }),
                  (l = s.subActions) != null && l.length ? /* @__PURE__ */ g(lo, { className: "h-3 w-3 opacity-50" }) : null
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
          onClick: (s) => s.stopPropagation(),
          children: t.action.subActions.map((s, a) => /* @__PURE__ */ z(
            "button",
            {
              className: q(
                "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                s.destructive && "text-destructive hover:text-destructive focus:text-destructive"
              ),
              onClick: () => {
                var l;
                (l = s.onClick) == null || l.call(s, i()), o();
              },
              children: [
                s.icon,
                /* @__PURE__ */ g("span", { className: "flex-1", children: s.label }),
                s.shortcut && /* @__PURE__ */ g("span", { className: "flex items-center gap-0.5", children: s.shortcut.split("").map((l, c) => /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: l }, c)) })
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
  const { attributes: p, listeners: h, setNodeRef: m, transform: v, transition: y, isDragging: b } = rb({
    id: e.id,
    disabled: !o
  }), x = f.useCallback((R) => {
    m(R), R && l && l(R.offsetHeight);
  }, [m, l]), w = e.getIsSelected(), S = n === t, C = i !== null ? { transform: `translateY(${i}px)`, transition: "none" } : a ? { transform: "none", transition: "none" } : { transform: mr.Transform.toString(v), transition: y };
  return /* @__PURE__ */ g(
    "div",
    {
      ref: x,
      style: C,
      "data-display-index": t,
      "data-state": w ? "selected" : void 0,
      className: q(
        "flex items-center gap-2 px-2 py-1.5 border-b border-border/40 cursor-pointer select-none text-sm",
        "data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25",
        S && r === "keyboard" && "row-ring",
        (b || s) && "shadow-sm bg-background relative z-10"
      ),
      onClick: () => c(t),
      onMouseEnter: () => d(t),
      onContextMenu: (R) => u(R, t),
      children: e.getVisibleCells().map((R) => {
        const P = R.column.columnDef.meta, E = (P == null ? void 0 : P.grow) === !0;
        if (R.column.id === "_reorder")
          return /* @__PURE__ */ g(
            "span",
            {
              ...p,
              ...h,
              tabIndex: -1,
              className: "flex items-center shrink-0 text-muted-foreground/30 hover:text-muted-foreground/70 cursor-grab active:cursor-grabbing outline-none",
              children: /* @__PURE__ */ g(oh, { className: "h-3.5 w-3.5" })
            },
            R.id
          );
        if (R.column.id === "_select")
          return /* @__PURE__ */ g(
            "span",
            {
              className: q(
                "flex items-center shrink-0",
                !w && n !== t && "opacity-0"
              ),
              children: gr(R.column.columnDef.cell, R.getContext())
            },
            R.id
          );
        const A = R.column.columnDef.size;
        return /* @__PURE__ */ g(
          "div",
          {
            className: q(
              E ? "flex-1 min-w-0 truncate" : "shrink-0"
            ),
            style: !E && A ? { width: A } : void 0,
            children: gr(R.column.columnDef.cell, R.getContext())
          },
          R.id
        );
      })
    }
  );
}
function E_({ checked: e, indeterminate: t, onChange: n, onClick: r, className: o }) {
  const i = f.useRef(null);
  f.useEffect(() => {
    i.current && (i.current.indeterminate = !!t);
  }, [t]);
  const s = e || t;
  return /* @__PURE__ */ z(
    "span",
    {
      className: q("inline-flex items-center justify-center cursor-pointer group", o),
      onClick: r,
      children: [
        /* @__PURE__ */ g("input", { ref: i, type: "checkbox", checked: e, onChange: n, tabIndex: -1, className: "sr-only" }),
        /* @__PURE__ */ z(
          "span",
          {
            className: q(
              "h-3.5 w-3.5 rounded-xs border flex items-center justify-center transition-colors",
              s ? "bg-selected border-selected" : "border-foreground/35 group-hover:border-selected"
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
function P_({
  selectedCount: e,
  rowActions: t,
  onClearSelection: n,
  onOpenActions: r
}) {
  return e === 0 ? null : fl(
    /* @__PURE__ */ z("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg", children: [
      /* @__PURE__ */ z("span", { className: "px-2 text-sm font-medium", children: [
        e,
        " selected"
      ] }),
      /* @__PURE__ */ g(Sr, { children: /* @__PURE__ */ z(hn, { children: [
        /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g(
          "button",
          {
            className: "flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            onClick: n,
            children: /* @__PURE__ */ g(El, { className: "h-3.5 w-3.5" })
          }
        ) }),
        /* @__PURE__ */ z(gn, { className: "flex items-center gap-1.5 border border-primary/20", children: [
          "Clear selected",
          /* @__PURE__ */ g("kbd", { className: "rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "Esc" })
        ] })
      ] }) }),
      t != null && t.length ? /* @__PURE__ */ z(
        "button",
        {
          className: "ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          onClick: r,
          children: [
            /* @__PURE__ */ g(tC, { className: "h-3.5 w-3.5" }),
            "Actions"
          ]
        }
      ) : null
    ] }),
    document.body
  );
}
function T_({
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
  const { attributes: p, listeners: h, setNodeRef: m, transform: v, transition: y, isDragging: b } = rb({
    id: e.id,
    disabled: !o
  }), x = f.useCallback((C) => {
    m(C), C && l && l(C.offsetHeight);
  }, [m, l]), w = e.getIsSelected(), S = n === t;
  return /* @__PURE__ */ g(
    Pi,
    {
      ref: x,
      style: i !== null ? { transform: `translateY(${i}px)`, transition: "none" } : a ? { transform: "none", transition: "none" } : { transform: mr.Transform.toString(v), transition: y },
      "data-display-index": t,
      "data-state": w ? "selected" : void 0,
      className: q(
        "h-6 cursor-pointer select-none",
        "data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25",
        S && r === "keyboard" && "row-ring",
        (b || s) && "shadow-sm bg-background relative z-10"
      ),
      onClick: () => c(t),
      onMouseEnter: () => d(t),
      onContextMenu: (C) => u(C, t),
      children: e.getVisibleCells().map((C) => /* @__PURE__ */ g(
        Cc,
        {
          className: q(
            "py-1.5 text-sm",
            (C.column.id === "_select" || C.column.id === "_reorder") && "w-6 !pl-2 !pr-0"
          ),
          children: C.column.id === "_reorder" ? /* @__PURE__ */ g(
            "span",
            {
              ...p,
              ...h,
              tabIndex: -1,
              className: "flex items-center text-muted-foreground/30 hover:text-muted-foreground/70 cursor-grab active:cursor-grabbing outline-none",
              children: /* @__PURE__ */ g(oh, { className: "h-3.5 w-3.5" })
            }
          ) : C.column.id === "_select" ? /* @__PURE__ */ g("span", { className: q("flex items-center", !w && n !== t && "opacity-0"), children: gr(C.column.columnDef.cell, C.getContext()) }) : gr(C.column.columnDef.cell, C.getContext())
        },
        C.id
      ))
    }
  );
}
function M_({
  open: e,
  onOpenChange: t,
  rowActions: n,
  actionPage: r,
  onSetActionPage: o,
  effectiveRows: i,
  actionsHeading: s
}) {
  return /* @__PURE__ */ z(
    Ty,
    {
      open: e,
      onOpenChange: t,
      commandKey: (r == null ? void 0 : r.label) ?? "root",
      title: "Row Actions",
      description: "Choose an action to apply to selected rows",
      children: [
        /* @__PURE__ */ g(
          wc,
          {
            autoFocus: !0,
            placeholder: r ? `Search ${r.label.toLowerCase()}...` : "Type a command or search...",
            onKeyDown: (a) => {
              a.key === "Backspace" && a.target.value === "" && o(null);
            }
          }
        ),
        /* @__PURE__ */ z(xc, { children: [
          /* @__PURE__ */ g(Sc, { children: "No actions available." }),
          r ? /* @__PURE__ */ g(Ri, { heading: /* @__PURE__ */ z("span", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ g("span", { children: r.label }),
            /* @__PURE__ */ g("span", { className: "font-normal text-muted-foreground", children: s })
          ] }), children: r.subActions.map((a, l) => /* @__PURE__ */ z(
            Ei,
            {
              onSelect: () => {
                var c;
                (c = a.onClick) == null || c.call(a, i), t(!1), o(null);
              },
              className: q(a.destructive && "text-destructive"),
              children: [
                a.icon,
                /* @__PURE__ */ g("span", { className: "flex-1", children: a.label }),
                a.shortcut && /* @__PURE__ */ g("span", { className: "flex items-center gap-0.5", children: a.shortcut.split("").map((c, d) => /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: c }, d)) })
              ]
            },
            l
          )) }) : /* @__PURE__ */ g(Ri, { heading: s, children: n.map((a, l) => {
            var c;
            return /* @__PURE__ */ z(
              Ei,
              {
                onSelect: () => {
                  var d, u;
                  (d = a.subActions) != null && d.length ? o(a) : ((u = a.onClick) == null || u.call(a, i), t(!1));
                },
                className: q(a.destructive && "text-destructive"),
                children: [
                  a.icon,
                  /* @__PURE__ */ g("span", { className: "flex-1", children: a.label }),
                  a.shortcut && /* @__PURE__ */ g("kbd", { className: "rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground", children: a.shortcut }),
                  (c = a.subActions) != null && c.length ? /* @__PURE__ */ g(lo, { className: "h-3.5 w-3.5 text-muted-foreground" }) : null
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
const A_ = f.forwardRef(
  function({ rowCount: t, showPagination: n, pageIndex: r, pageCount: o, canPreviousPage: i, canNextPage: s, onPreviousPage: a, onNextPage: l, onShiftTabToTable: c }, d) {
    return /* @__PURE__ */ z(
      "div",
      {
        ref: d,
        className: "flex items-center justify-between",
        onKeyDown: (u) => {
          var p;
          u.key === "Tab" && u.shiftKey && t > 0 && Array.from(
            ((p = d.current) == null ? void 0 : p.querySelectorAll('button:not([disabled]),[tabindex="0"]')) ?? []
          )[0] === document.activeElement && (u.preventDefault(), u.stopPropagation(), c());
        },
        children: [
          /* @__PURE__ */ z("p", { className: "text-xs text-muted-foreground", children: [
            t,
            " row",
            t !== 1 ? "s" : ""
          ] }),
          n && /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ z("span", { className: "text-xs text-muted-foreground", children: [
              "Page ",
              r + 1,
              " of ",
              Math.max(o, 1)
            ] }),
            /* @__PURE__ */ z(
              lr,
              {
                variant: "outline",
                size: "icon",
                className: "h-7 w-7",
                onClick: a,
                disabled: !i,
                children: [
                  /* @__PURE__ */ g(rh, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ g("span", { className: "sr-only", children: "Previous page" })
                ]
              }
            ),
            /* @__PURE__ */ z(
              lr,
              {
                variant: "outline",
                size: "icon",
                className: "h-7 w-7",
                onClick: l,
                disabled: !s,
                children: [
                  /* @__PURE__ */ g(lo, { className: "h-3.5 w-3.5" }),
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
function D_({
  rows: e,
  selectedCount: t,
  orderedData: n,
  setOrderedData: r,
  onRowReorder: o,
  activeRowIndex: i,
  setActiveRowIndex: s,
  getItemId: a,
  table: l,
  rowHeightRef: c
}) {
  const [d, u] = f.useState(null), [p, h] = f.useState(!1), [m, v] = f.useState(0), y = f.useRef(0), [b, x] = f.useState(!1), w = f.useRef(null);
  f.useEffect(() => () => {
    w.current && cancelAnimationFrame(w.current);
  }, []);
  const S = QN(
    Gd(Nc, { activationConstraint: { distance: 5 } }),
    Gd(Ac, { coordinateGetter: Rk })
  ), C = f.useCallback((T) => {
    var I;
    if (i === null) return;
    const k = (I = e[i]) == null ? void 0 : I.id;
    if (!k) return;
    const { pageIndex: B, pageSize: U } = l.getState().pagination, j = B * U, Z = T.findIndex((H) => a(H) === k) - j;
    s(Z >= 0 ? Z : null);
  }, [i, e, l, a, s]), R = (T) => {
    const k = String(T.active.id);
    u(k), v(0), y.current = 0;
    const B = e.find((U) => U.id === k);
    h(((B == null ? void 0 : B.getIsSelected()) ?? !1) && t > 1);
  }, P = (T) => {
    p && (y.current = T.delta.y, v(T.delta.y));
  }, E = (T) => {
    const { active: k, over: B } = T, U = y.current;
    u(null), h(!1), v(0), y.current = 0;
    const j = e.find((I) => I.id === k.id);
    if (((j == null ? void 0 : j.getIsSelected()) ?? !1) && t > 1) {
      const I = c.current, H = e.findIndex((N) => N.id === k.id), O = e.map((N, $) => N.getIsSelected() ? -1 : $).filter((N) => N !== -1), D = O.filter((N) => N < H).length, _ = Math.max(0, Math.min(
        Math.round(D + U / I),
        O.length
      )), oe = new Set(l.getSelectedRowModel().rows.map((N) => N.id)), M = n.filter((N) => oe.has(a(N))), F = n.filter((N) => !oe.has(a(N))), W = [
        ...F.slice(0, _),
        ...M,
        ...F.slice(_)
      ];
      x(!0), w.current && cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
        w.current = requestAnimationFrame(() => {
          x(!1);
        });
      }), C(W), r(W), o == null || o(W);
    } else {
      if (!B || k.id === B.id) return;
      const I = n.findIndex((D) => a(D) === k.id), H = n.findIndex((D) => a(D) === B.id);
      if (I === -1 || H === -1) return;
      const O = Ic(n, I, H);
      C(O), r(O), o == null || o(O);
    }
  };
  let A = null;
  if (p && d) {
    const T = c.current, k = e.findIndex((B) => B.id === d);
    if (k !== -1) {
      const B = e.map((O, D) => O.getIsSelected() ? D : -1).filter((O) => O !== -1), U = e.map((O, D) => O.getIsSelected() ? -1 : D).filter((O) => O !== -1), j = B.length, I = U.filter((O) => O < k).length + m / T, H = Math.max(0, Math.min(Math.round(I), U.length));
      A = e.map((O, D) => {
        if (O.getIsSelected()) {
          const M = B.indexOf(D);
          return (Math.max(0, Math.min(I, U.length)) + M - D) * T;
        }
        const _ = U.indexOf(D);
        return ((_ < H ? _ : _ + j) - D) * T;
      });
    }
  }
  return {
    sensors: S,
    dragActiveId: d,
    multiDragActive: p,
    justDropped: b,
    customTransforms: A,
    handleDragStart: R,
    handleDragMove: P,
    handleDragEnd: E
  };
}
function N_({
  rowActions: e,
  rows: t,
  activeRowIndex: n,
  selectedCount: r,
  contextMenu: o,
  table: i,
  effectiveRows: s,
  setActionsOpen: a,
  setActionPage: l,
  setActiveRowIndex: c,
  setActiveRowSource: d,
  suppressMouseRef: u,
  setContextMenu: p
}) {
  f.useEffect(() => {
    const h = (m) => {
      var y, b, x, w;
      const v = m.target;
      if (!(v.tagName === "INPUT" || v.tagName === "TEXTAREA" || v.tagName === "SELECT" || v.isContentEditable)) {
        if ((m.metaKey || m.ctrlKey) && m.key === "k") {
          if (!(e != null && e.length) || !s.length) return;
          m.preventDefault(), a(!0);
        } else if ((m.metaKey || m.ctrlKey) && m.key === "a")
          m.preventDefault(), i.toggleAllPageRowsSelected(!0);
        else if ((m.metaKey || m.ctrlKey) && m.key === "ArrowUp")
          m.preventDefault(), u.current = !0, d("keyboard"), c(0);
        else if ((m.metaKey || m.ctrlKey) && m.key === "ArrowDown")
          m.preventDefault(), u.current = !0, d("keyboard"), c(t.length - 1);
        else if (m.key === "Tab" && !m.shiftKey && n === t.length - 1)
          c(null);
        else if (m.key === "Tab" && m.shiftKey && n === 0)
          c(null);
        else if (m.key === "ArrowDown" && !m.altKey || m.key === "Tab" && !m.shiftKey && n !== null && n !== t.length - 1)
          m.preventDefault(), u.current = !0, d("keyboard"), c(
            (S) => S === null ? 0 : Math.min(S + 1, t.length - 1)
          );
        else if (m.key === "ArrowUp" && !m.altKey || m.key === "Tab" && m.shiftKey && n !== null && n !== 0)
          m.preventDefault(), u.current = !0, d("keyboard"), c(
            (S) => S === null ? 0 : Math.max(S - 1, 0)
          );
        else if ((m.key === " " || m.key === "x") && n !== null)
          m.preventDefault(), (y = t[n]) == null || y.toggleSelected();
        else if (m.key === "Enter" && n !== null && (e != null && e.length) && s.length)
          m.preventDefault(), a(!0);
        else if (m.key === "Escape")
          o ? p(null) : r > 0 ? i.resetRowSelection() : c(null);
        else if (e != null && e.length) {
          const C = e.flatMap((R) => R.subActions ?? []).find(
            (R) => R.shortcutKeys && R.shortcutKeys.key === m.key && !!R.shortcutKeys.altKey === m.altKey && !!R.shortcutKeys.shiftKey === m.shiftKey && !!R.shortcutKeys.metaKey === m.metaKey && !!R.shortcutKeys.ctrlKey === m.ctrlKey
          );
          if (C) {
            if (m.preventDefault(), !s.length) return;
            u.current = !0, (b = C.onClick) == null || b.call(C, s);
          } else if (!m.metaKey && !m.ctrlKey && !m.altKey) {
            const R = e.find((P) => P.shortcut === m.key);
            if (R) {
              if (m.preventDefault(), !s.length) return;
              (x = R.subActions) != null && x.length ? (l(R), a(!0)) : (w = R.onClick) == null || w.call(R, s);
            }
          }
        }
      }
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [e, t, n, r, o, i]);
}
function eO({
  columns: e,
  data: t,
  searchColumn: n,
  searchPlaceholder: r = "Search...",
  rowActions: o,
  getRowLabel: i,
  pageSize: s = 10,
  onRowReorder: a,
  getRowId: l,
  view: c = "table"
}) {
  var Nn;
  const d = s === "all", [u, p] = f.useState([]), [h, m] = f.useState([]), [v, y] = f.useState({}), [b, x] = f.useState(null), [w, S] = f.useState("mouse"), C = f.useRef(null), R = f.useRef(null), P = f.useRef(null), E = f.useRef(33), [A, T] = f.useState(null), [k, B] = f.useState(null), [U, j] = f.useState(!1), [Z, I] = f.useState(null), [H, O] = f.useState(t), D = f.useRef(!1);
  f.useEffect(() => {
    var te;
    if (b !== null) {
      const ne = (te = L[b]) == null ? void 0 : te.id;
      if (ne) {
        const at = l ?? M, Xe = t.findIndex((tt) => at(tt) === ne);
        x(Xe >= 0 ? Xe : null);
      }
    }
    O(t);
  }, [t]);
  const _ = f.useRef(/* @__PURE__ */ new WeakMap()), oe = f.useRef(0), M = f.useCallback((te) => {
    if (typeof te != "object" || te === null) return String(oe.current++);
    const ne = te;
    return _.current.has(ne) || _.current.set(ne, String(oe.current++)), _.current.get(ne);
  }, []);
  f.useEffect(() => {
    if (!U) {
      const te = setTimeout(() => I(null), 200);
      return () => clearTimeout(te);
    }
  }, [U]);
  const F = f.useMemo(
    () => ({
      id: "_select",
      header: () => null,
      cell: ({ row: te }) => /* @__PURE__ */ z(hn, { children: [
        /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g("span", { className: "inline-flex items-center", children: /* @__PURE__ */ g(
          E_,
          {
            checked: te.getIsSelected(),
            onChange: te.getToggleSelectedHandler(),
            onClick: (ne) => {
              ne.stopPropagation(), te.toggleSelected();
            }
          }
        ) }) }),
        /* @__PURE__ */ z(gn, { className: "flex items-center gap-1.5", children: [
          "Select row",
          /* @__PURE__ */ g("kbd", { className: "rounded border border-selected/30 bg-selected/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "x" })
        ] })
      ] }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 16
    }),
    [i]
  ), W = f.useMemo(
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
  ), N = f.useMemo(
    () => [
      ...a ? [W] : [],
      F,
      ...e
    ],
    [W, F, e, a]
  ), $ = S_({
    data: H,
    columns: N,
    getRowId: l ?? M,
    getCoreRowModel: d_(),
    getPaginationRowModel: v_(),
    getSortedRowModel: y_(),
    getFilteredRowModel: g_(),
    onSortingChange: p,
    onColumnFiltersChange: m,
    onRowSelectionChange: y,
    enableRowSelection: !0,
    initialState: {
      pagination: { pageSize: d ? Number.MAX_SAFE_INTEGER : s }
    },
    state: {
      sorting: u,
      columnFilters: h,
      rowSelection: v
    }
  }), L = $.getRowModel().rows, G = $.getSelectedRowModel().rows.map((te) => te.original), K = G.length, Y = K > 0 ? G : b !== null && L[b] ? [L[b].original] : [], le = Y.length === 0 ? "Actions" : Y.length === 1 ? i ? i(Y[0]) : "1 row" : `${Y.length} rows`, {
    sensors: ie,
    multiDragActive: ye,
    justDropped: me,
    customTransforms: _e,
    handleDragStart: je,
    handleDragMove: Ye,
    handleDragEnd: Yt
  } = D_({
    rows: L,
    selectedCount: K,
    orderedData: H,
    setOrderedData: O,
    onRowReorder: a,
    activeRowIndex: b,
    setActiveRowIndex: x,
    getItemId: l ?? M,
    table: $,
    rowHeightRef: E
  });
  N_({
    rowActions: o,
    rows: L,
    activeRowIndex: b,
    selectedCount: K,
    contextMenu: A,
    table: $,
    effectiveRows: Y,
    setActionsOpen: j,
    setActionPage: I,
    setActiveRowIndex: x,
    setActiveRowSource: S,
    suppressMouseRef: D,
    setContextMenu: T
  }), f.useEffect(() => {
    const te = () => {
      D.current = !1;
    };
    return window.addEventListener("mousemove", te), () => window.removeEventListener("mousemove", te);
  }, []), f.useEffect(() => {
    var ne;
    if (b === null) return;
    const te = (ne = P.current) == null ? void 0 : ne.querySelector(`[data-display-index="${b}"]`);
    te == null || te.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [b]), f.useEffect(() => {
    if (!A) {
      B(null);
      return;
    }
    const te = () => {
      T(null), B(null);
    };
    return window.addEventListener("click", te), window.addEventListener("scroll", te, !0), () => {
      window.removeEventListener("click", te), window.removeEventListener("scroll", te, !0);
    };
  }, [A]);
  const Te = (te, ne) => {
    o != null && o.length && (te.preventDefault(), x(ne), T({ x: te.clientX, y: te.clientY, rowIndex: ne }));
  }, vt = () => {
    if (A === null) return G;
    const te = L[A.rowIndex];
    return !te || G.length > 0 && te.getIsSelected() ? G : [te.original];
  }, rn = $.getState().pagination.pageIndex, Ie = $.getPageCount(), yt = L.map((te) => te.id);
  return /* @__PURE__ */ g(Sr, { children: /* @__PURE__ */ z("div", { className: "flex flex-col gap-3", children: [
    n && /* @__PURE__ */ g("div", { className: "flex items-center", children: /* @__PURE__ */ g(
      ki,
      {
        placeholder: r,
        value: ((Nn = $.getColumn(n)) == null ? void 0 : Nn.getFilterValue()) ?? "",
        onChange: (te) => {
          var ne;
          return (ne = $.getColumn(n)) == null ? void 0 : ne.setFilterValue(te.target.value);
        },
        className: "max-w-sm h-8 text-sm"
      }
    ) }),
    /* @__PURE__ */ g(
      "div",
      {
        ref: C,
        tabIndex: 0,
        className: "sr-only",
        onFocus: (te) => {
          var ne;
          L.length !== 0 && ((ne = R.current) != null && ne.contains(te.relatedTarget) || (x(0), S("keyboard")));
        }
      }
    ),
    /* @__PURE__ */ g(
      tk,
      {
        sensors: ie,
        collisionDetection: tI,
        modifiers: [dk, uk],
        onDragStart: je,
        onDragMove: Ye,
        onDragEnd: Yt,
        children: /* @__PURE__ */ g("div", { ref: P, children: c === "list" ? /* @__PURE__ */ g(sf, { items: yt, strategy: of, children: /* @__PURE__ */ g("div", { children: L.length ? L.map((te, ne) => {
          var nt, We;
          const at = te.getIsSelected(), Xe = ((nt = L[ne - 1]) == null ? void 0 : nt.getIsSelected()) ?? !1, tt = ((We = L[ne + 1]) == null ? void 0 : We.getIsSelected()) ?? !1;
          return /* @__PURE__ */ g(
            R_,
            {
              row: te,
              displayIndex: ne,
              activeRowIndex: b,
              activeRowSource: w,
              reorderable: !!a,
              customTranslateY: _e ? _e[ne] : null,
              isDragGroup: ye && te.getIsSelected(),
              justDropped: me,
              onMeasureHeight: ne === 0 ? (Me) => {
                E.current = Me;
              } : void 0,
              onRowClick: (Me) => {
                S("mouse"), x(Me), te.toggleSelected();
              },
              onRowMouseEnter: (Me) => {
                D.current || (S("mouse"), x(Me));
              },
              onContextMenu: Te
            },
            `${te.id}-${at ? 1 : 0}-${Xe ? 1 : 0}-${tt ? 1 : 0}`
          );
        }) : /* @__PURE__ */ g("div", { className: "h-24 flex items-center justify-center text-muted-foreground text-sm", children: "No results found." }) }) }) : /* @__PURE__ */ z(Dy, { className: "border-separate border-spacing-0", children: [
          /* @__PURE__ */ g(Ny, { children: $.getHeaderGroups().map((te) => /* @__PURE__ */ g(Pi, { className: "hover:bg-transparent", children: te.headers.map((ne) => /* @__PURE__ */ g(
            ky,
            {
              style: ne.column.columnDef.size ? { width: ne.column.columnDef.size } : void 0,
              className: q(
                "text-xs font-medium text-muted-foreground uppercase tracking-wide h-8",
                (ne.id === "_select" || ne.id === "_reorder") && "w-6 !pl-2 !pr-0",
                ne.column.getCanSort() && "cursor-pointer select-none"
              ),
              onClick: ne.column.getCanSort() ? ne.column.getToggleSortingHandler() : void 0,
              children: ne.isPlaceholder ? null : ne.id === "_select" || ne.id === "_reorder" ? gr(ne.column.columnDef.header, ne.getContext()) : /* @__PURE__ */ z("div", { className: "flex items-center gap-1", children: [
                gr(ne.column.columnDef.header, ne.getContext()),
                ne.column.getCanSort() && /* @__PURE__ */ g(
                  GS,
                  {
                    className: q(
                      "h-3 w-3 transition-opacity",
                      ne.column.getIsSorted() ? "opacity-100 text-foreground" : "opacity-30"
                    )
                  }
                )
              ] })
            },
            ne.id
          )) }, te.id)) }),
          /* @__PURE__ */ g(sf, { items: yt, strategy: of, children: /* @__PURE__ */ g(Iy, { children: L.length ? L.map((te, ne) => {
            var nt, We;
            const at = te.getIsSelected(), Xe = ((nt = L[ne - 1]) == null ? void 0 : nt.getIsSelected()) ?? !1, tt = ((We = L[ne + 1]) == null ? void 0 : We.getIsSelected()) ?? !1;
            return /* @__PURE__ */ g(
              T_,
              {
                row: te,
                displayIndex: ne,
                activeRowIndex: b,
                activeRowSource: w,
                reorderable: !!a,
                customTranslateY: _e ? _e[ne] : null,
                isDragGroup: ye && te.getIsSelected(),
                justDropped: me,
                onMeasureHeight: ne === 0 ? (Me) => {
                  E.current = Me;
                } : void 0,
                onRowClick: (Me) => {
                  S("mouse"), x(Me), te.toggleSelected();
                },
                onRowMouseEnter: (Me) => {
                  D.current || (S("mouse"), x(Me));
                },
                onContextMenu: Te
              },
              `${te.id}-${at ? 1 : 0}-${Xe ? 1 : 0}-${tt ? 1 : 0}`
            );
          }) : /* @__PURE__ */ g(Pi, { children: /* @__PURE__ */ g(
            Cc,
            {
              colSpan: N.length,
              className: "h-24 text-center text-muted-foreground text-sm",
              children: "No results found."
            }
          ) }) }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ g(
      A_,
      {
        ref: R,
        rowCount: $.getFilteredRowModel().rows.length,
        showPagination: !d,
        pageIndex: rn,
        pageCount: Ie,
        canPreviousPage: $.getCanPreviousPage(),
        canNextPage: $.getCanNextPage(),
        onPreviousPage: () => $.previousPage(),
        onNextPage: () => $.nextPage(),
        onShiftTabToTable: () => {
          var te;
          x(L.length - 1), S("keyboard"), (te = C.current) == null || te.focus();
        }
      }
    ),
    /* @__PURE__ */ g(
      C_,
      {
        contextMenu: A,
        contextSub: k,
        rowActions: o ?? [],
        onSetContextSub: B,
        onClose: () => {
          T(null), B(null);
        },
        getContextRows: vt
      }
    ),
    /* @__PURE__ */ g(
      P_,
      {
        selectedCount: K,
        rowActions: o,
        onClearSelection: () => $.resetRowSelection(),
        onOpenActions: () => j(!0)
      }
    ),
    o != null && o.length ? /* @__PURE__ */ g(
      M_,
      {
        open: U,
        onOpenChange: j,
        rowActions: o,
        actionPage: Z,
        onSetActionPage: I,
        effectiveRows: Y,
        actionsHeading: le
      }
    ) : null
  ] }) });
}
function hb({
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
      className: q(
        "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
        r > 0 && "ml-4 w-[calc(100%-1rem)]",
        t ? "bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
        n && "justify-center px-0"
      ),
      children: [
        a && /* @__PURE__ */ g(
          a,
          {
            className: q(
              "shrink-0 transition-colors",
              n ? "h-4.5 w-4.5" : "h-4 w-4",
              t ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            )
          }
        ),
        !n && /* @__PURE__ */ z(jt, { children: [
          /* @__PURE__ */ g("span", { className: "flex-1 truncate text-left", children: e.label }),
          e.badge !== void 0 && /* @__PURE__ */ g("span", { className: "ml-auto text-xs tabular-nums text-muted-foreground", children: e.badge })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ z("div", { children: [
    n ? /* @__PURE__ */ g(Sr, { delayDuration: 0, children: /* @__PURE__ */ z(hn, { children: [
      /* @__PURE__ */ g(mn, { asChild: !0, children: c }),
      /* @__PURE__ */ g(gn, { side: "right", children: /* @__PURE__ */ g("p", { children: e.label }) })
    ] }) }) : c,
    !n && e.children && i && /* @__PURE__ */ g("div", { className: "mt-0.5 space-y-0.5", children: e.children.map((d) => /* @__PURE__ */ g(
      hb,
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
function I_(e) {
  return e.id.startsWith("separator");
}
function tO({
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
    I_(c) ? (a.push(l), l = []) : l.push(c);
  return a.push(l), /* @__PURE__ */ z(
    "div",
    {
      className: q(
        "flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        r ? "w-12" : "w-56"
      ),
      children: [
        i && /* @__PURE__ */ g("div", { className: q("shrink-0 border-b border-sidebar-border", r ? "px-2 py-3" : "px-3 py-3"), children: i }),
        /* @__PURE__ */ g("div", { className: "flex-1 overflow-y-auto py-2", children: a.map((c, d) => /* @__PURE__ */ z(f.Fragment, { children: [
          d > 0 && /* @__PURE__ */ g(mh, { className: "my-2 bg-sidebar-border" }),
          /* @__PURE__ */ g("nav", { className: q("space-y-0.5", r ? "px-1" : "px-2"), children: c.map((u) => /* @__PURE__ */ g(
            hb,
            {
              item: u,
              isActive: t === u.id,
              collapsed: r,
              onActiveChange: n
            },
            u.id
          )) })
        ] }, d)) }),
        s && /* @__PURE__ */ g("div", { className: q("shrink-0 border-t border-sidebar-border", r ? "px-1 py-2" : "px-2 py-2"), children: s }),
        /* @__PURE__ */ g("div", { className: q("shrink-0 border-t border-sidebar-border", r ? "px-1 py-2" : "px-2 py-2"), children: /* @__PURE__ */ g(Sr, { delayDuration: 0, children: /* @__PURE__ */ z(hn, { children: [
          /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g(
            "button",
            {
              onClick: () => o == null ? void 0 : o(!r),
              className: q(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors",
                r && "justify-center px-0"
              ),
              children: r ? /* @__PURE__ */ g(lo, { className: "h-4 w-4" }) : /* @__PURE__ */ z(jt, { children: [
                /* @__PURE__ */ g(rh, { className: "h-4 w-4" }),
                /* @__PURE__ */ g("span", { children: "Collapse" })
              ] })
            }
          ) }),
          r && /* @__PURE__ */ g(gn, { side: "right", children: /* @__PURE__ */ g("p", { children: "Expand sidebar" }) })
        ] }) }) })
      ]
    }
  );
}
function k_({ filter: e, onSelect: t, onClose: n }) {
  const [r, o] = f.useState("");
  return e.type === "select" && e.options ? /* @__PURE__ */ z("div", { className: "space-y-1", children: [
    /* @__PURE__ */ z("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Select ",
      e.label
    ] }),
    e.options.map((i) => /* @__PURE__ */ g(
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
    /* @__PURE__ */ g("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: e.label }),
    /* @__PURE__ */ g(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t("true", "Yes"), n();
        },
        children: "Yes"
      }
    ),
    /* @__PURE__ */ g(
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
      /* @__PURE__ */ g(
        ki,
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
      /* @__PURE__ */ g(
        lr,
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
function nO({
  availableFilters: e,
  activeFilters: t,
  onAdd: n,
  onRemove: r,
  onClear: o,
  searchValue: i,
  onSearchChange: s,
  searchPlaceholder: a = "Search..."
}) {
  const [l, c] = f.useState(null), [d, u] = f.useState(!1), [p, h] = f.useState(!1), m = new Set(t.map((x) => x.filterId)), v = e.filter((x) => !m.has(x.id)), y = (x) => {
    h(!1), c(x), u(!0);
  }, b = (x, w) => {
    l && (n({
      filterId: l.id,
      label: `${l.label}: ${w}`,
      value: x
    }), c(null), u(!1));
  };
  return /* @__PURE__ */ z("div", { className: "flex items-center gap-2 flex-wrap", children: [
    s && /* @__PURE__ */ z("div", { className: "relative", children: [
      /* @__PURE__ */ g(fC, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ g(
        ki,
        {
          value: i ?? "",
          onChange: (x) => s(x.target.value),
          placeholder: a,
          className: "h-7 pl-7 text-sm w-48"
        }
      )
    ] }),
    t.map((x) => /* @__PURE__ */ z(
      bw,
      {
        variant: "secondary",
        className: "flex items-center gap-1 h-6 px-2 text-xs font-normal rounded-md",
        children: [
          /* @__PURE__ */ g("span", { children: x.label }),
          /* @__PURE__ */ z(
            "button",
            {
              onClick: () => r(x.filterId),
              className: "ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity",
              children: [
                /* @__PURE__ */ g(El, { className: "h-3 w-3" }),
                /* @__PURE__ */ g("span", { className: "sr-only", children: "Remove filter" })
              ]
            }
          )
        ]
      },
      x.filterId
    )),
    /* @__PURE__ */ z(LP, { open: d, onOpenChange: (x) => {
      u(x), x || c(null);
    }, children: [
      /* @__PURE__ */ z(AP, { open: p, onOpenChange: h, children: [
        /* @__PURE__ */ g(FP, { asChild: !0, children: /* @__PURE__ */ g("span", {}) }),
        /* @__PURE__ */ g(DP, { asChild: !0, children: /* @__PURE__ */ z(
          lr,
          {
            variant: "ghost",
            size: "sm",
            className: q(
              "h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
              v.length === 0 && "opacity-50 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ g(uC, { className: "h-3.5 w-3.5" }),
              "Filter"
            ]
          }
        ) }),
        /* @__PURE__ */ z(Pg, { align: "start", className: "w-44", children: [
          /* @__PURE__ */ g(Mg, { className: "text-xs", children: "Add filter" }),
          /* @__PURE__ */ g(Ag, {}),
          v.map((x) => /* @__PURE__ */ z(
            Tg,
            {
              onClick: () => y(x),
              className: "text-sm",
              children: [
                /* @__PURE__ */ g(rC, { className: "h-3.5 w-3.5 mr-2 opacity-50" }),
                x.label
              ]
            },
            x.id
          )),
          v.length === 0 && /* @__PURE__ */ g("p", { className: "px-2 py-1.5 text-xs text-muted-foreground", children: "All filters active" })
        ] })
      ] }),
      l && /* @__PURE__ */ g(Dg, { align: "start", className: "w-64 p-2", children: /* @__PURE__ */ g(
        k_,
        {
          filter: l,
          onSelect: b,
          onClose: () => {
            u(!1), c(null);
          }
        }
      ) })
    ] }),
    t.length > 0 && /* @__PURE__ */ g(
      "button",
      {
        onClick: o,
        className: "text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline",
        children: "Clear all"
      }
    )
  ] });
}
function rO({
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
  }, [o, l, c]), /* @__PURE__ */ z(Ty, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ g(wc, { placeholder: t }),
    /* @__PURE__ */ z(xc, { children: [
      /* @__PURE__ */ g(Sc, { children: "No results found." }),
      e.map((d, u) => /* @__PURE__ */ z(f.Fragment, { children: [
        u > 0 && /* @__PURE__ */ g(My, {}),
        /* @__PURE__ */ g(Ri, { heading: d.label, children: d.items.map((p) => {
          const h = p.icon;
          return /* @__PURE__ */ z(
            Ei,
            {
              value: [p.label, ...p.keywords ?? []].join(" "),
              onSelect: () => {
                p.onSelect(), c(!1);
              },
              children: [
                h && /* @__PURE__ */ g(h, { className: "mr-2 h-4 w-4 opacity-70" }),
                /* @__PURE__ */ g("span", { children: p.label }),
                p.shortcut && /* @__PURE__ */ g(Ay, { children: p.shortcut })
              ]
            },
            p.id
          );
        }) })
      ] }, d.label))
    ] })
  ] });
}
function oO({ label: e, description: t, children: n, className: r }) {
  return /* @__PURE__ */ z("div", { className: q("flex items-center justify-between gap-6 py-3 px-4", r), children: [
    /* @__PURE__ */ z("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ g("p", { className: "text-sm font-medium text-foreground", children: e }),
      t && /* @__PURE__ */ g("p", { className: "text-xs text-muted-foreground mt-0.5", children: t })
    ] }),
    /* @__PURE__ */ g("div", { className: "shrink-0", children: n })
  ] });
}
function iO({ title: e, children: t, className: n }) {
  return /* @__PURE__ */ z("div", { className: q("space-y-0", n), children: [
    /* @__PURE__ */ g("h2", { className: "text-base font-semibold text-foreground mb-3", children: e }),
    /* @__PURE__ */ g("div", { className: "rounded-lg border border-border bg-card divide-y divide-border overflow-hidden", children: t })
  ] });
}
function sO({ title: e = "Settings", children: t, className: n }) {
  return /* @__PURE__ */ z("div", { className: q("max-w-3xl mx-auto py-8 px-6 space-y-8", n), children: [
    /* @__PURE__ */ g("h1", { className: "text-2xl font-semibold text-foreground", children: e }),
    t
  ] });
}
const mb = f.createContext(void 0), __ = "dkn2-ui-theme";
function gb() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function cf(e) {
  return e === "system" ? gb() : e;
}
function aO({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = __
}) {
  const [r, o] = f.useState(() => typeof window > "u" ? t : localStorage.getItem(n) ?? t), [i, s] = f.useState(
    () => cf(r)
  );
  f.useEffect(() => {
    const c = document.documentElement, d = cf(r);
    s(d), c.classList.remove("light", "dark"), c.classList.add(d);
  }, [r]), f.useEffect(() => {
    if (r !== "system") return;
    const c = window.matchMedia("(prefers-color-scheme: dark)"), d = () => {
      const u = gb();
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
  return /* @__PURE__ */ g(mb.Provider, { value: l, children: e });
}
function O_() {
  const e = f.useContext(mb);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const la = ["light", "dark", "system"], L_ = {
  light: hC,
  dark: lC,
  system: sC
}, uf = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme"
};
function lO() {
  const { theme: e, setTheme: t } = O_(), n = () => {
    const o = la.indexOf(e), i = la[(o + 1) % la.length];
    t(i);
  }, r = L_[e];
  return /* @__PURE__ */ g(Sr, { delayDuration: 0, children: /* @__PURE__ */ z(hn, { children: [
    /* @__PURE__ */ g(mn, { asChild: !0, children: /* @__PURE__ */ g(
      lr,
      {
        variant: "ghost",
        size: "icon",
        onClick: n,
        "aria-label": uf[e],
        children: /* @__PURE__ */ g(r, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ g(gn, { children: /* @__PURE__ */ g("p", { children: uf[e] }) })
  ] }) });
}
export {
  bw as Badge,
  lr as Button,
  Q_ as ColorPicker,
  Py as Command,
  Ty as CommandDialog,
  Sc as CommandEmpty,
  Ri as CommandGroup,
  wc as CommandInput,
  Ei as CommandItem,
  xc as CommandList,
  rO as CommandMenu,
  My as CommandSeparator,
  Ay as CommandShortcut,
  eO as DataTable,
  PP as Dialog,
  G_ as DialogClose,
  Sg as DialogContent,
  Eg as DialogDescription,
  MP as DialogFooter,
  Cg as DialogHeader,
  xg as DialogOverlay,
  TP as DialogPortal,
  Rg as DialogTitle,
  W_ as DialogTrigger,
  AP as DropdownMenu,
  kP as DropdownMenuCheckboxItem,
  Pg as DropdownMenuContent,
  U_ as DropdownMenuGroup,
  Tg as DropdownMenuItem,
  Mg as DropdownMenuLabel,
  K_ as DropdownMenuPortal,
  X_ as DropdownMenuRadioGroup,
  _P as DropdownMenuRadioItem,
  Ag as DropdownMenuSeparator,
  OP as DropdownMenuShortcut,
  Y_ as DropdownMenuSub,
  IP as DropdownMenuSubContent,
  NP as DropdownMenuSubTrigger,
  DP as DropdownMenuTrigger,
  nO as FilterBar,
  ki as Input,
  Cw as Label,
  LP as Popover,
  q_ as PopoverAnchor,
  Dg as PopoverContent,
  FP as PopoverTrigger,
  VP as ScrollArea,
  Ng as ScrollBar,
  B_ as Select,
  vC as SelectContent,
  z_ as SelectGroup,
  bC as SelectItem,
  yC as SelectLabel,
  sh as SelectScrollDownButton,
  ih as SelectScrollUpButton,
  wC as SelectSeparator,
  gC as SelectTrigger,
  H_ as SelectValue,
  mh as Separator,
  sO as SettingsPage,
  oO as SettingsRow,
  iO as SettingsSection,
  tO as SideMenu,
  PC as Switch,
  Dy as Table,
  Iy as TableBody,
  lN as TableCaption,
  Cc as TableCell,
  aN as TableFooter,
  ky as TableHead,
  Ny as TableHeader,
  Pi as TableRow,
  aO as ThemeProvider,
  lO as ThemeToggle,
  J_ as Toaster,
  hn as Tooltip,
  gn as TooltipContent,
  Sr as TooltipProvider,
  mn as TooltipTrigger,
  yw as badgeVariants,
  vw as buttonVariants,
  q as cn,
  O_ as useTheme
};
