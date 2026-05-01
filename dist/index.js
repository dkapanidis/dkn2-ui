import { jsx as v, Fragment as vn, jsxs as G } from "react/jsx-runtime";
import * as p from "react";
import F, { useLayoutEffect as au, useState as ag, forwardRef as xs, createElement as Uo, createContext as En, useRef as Wt, useEffect as Ss, useContext as Ae, useId as lg, useCallback as lu, useMemo as pr, Fragment as cu, useInsertionEffect as uu, Component as cg } from "react";
import * as du from "react-dom";
import fu, { createPortal as qa } from "react-dom";
function Za(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function _e(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const i = Za(r, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const i = o[r];
          typeof i == "function" ? i() : Za(e[r], null);
        }
      };
  };
}
function ae(...e) {
  return p.useCallback(_e(...e), e);
}
var ug = Symbol.for("react.lazy"), Ko = p[" use ".trim().toString()];
function dg(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function pu(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ug && "_payload" in e && dg(e._payload);
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  const t = /* @__PURE__ */ fg(e), n = p.forwardRef((o, r) => {
    let { children: i, ...s } = o;
    pu(i) && typeof Ko == "function" && (i = Ko(i._payload));
    const a = p.Children.toArray(i), l = a.find(hg);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ v(t, { ...s, ref: r, children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ v(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var hu = /* @__PURE__ */ hr("Slot");
// @__NO_SIDE_EFFECTS__
function fg(e) {
  const t = p.forwardRef((n, o) => {
    let { children: r, ...i } = n;
    if (pu(r) && typeof Ko == "function" && (r = Ko(r._payload)), p.isValidElement(r)) {
      const s = gg(r), a = mg(i, r.props);
      return r.type !== p.Fragment && (a.ref = o ? _e(o, s) : s), p.cloneElement(r, a);
    }
    return p.Children.count(r) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var pg = Symbol("radix.slottable");
function hg(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pg;
}
function mg(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function gg(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function mu(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = mu(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function gu() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = mu(e)) && (o && (o += " "), o += t);
  return o;
}
const Qa = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ja = gu, vu = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Ja(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: i } = t, s = Object.keys(r).map((c) => {
    const d = n == null ? void 0 : n[c], u = i == null ? void 0 : i[c];
    if (d === null) return null;
    const f = Qa(d) || Qa(u);
    return r[c][f];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [u, f] = d;
    return f === void 0 || (c[u] = f), c;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, d) => {
    let { class: u, className: f, ...h } = d;
    return Object.entries(h).every((m) => {
      let [g, y] = m;
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
      f
    ] : c;
  }, []);
  return Ja(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, vg = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, yg = (e, t) => ({
  classGroupId: e,
  validator: t
}), yu = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Yo = "-", el = [], wg = "arbitrary..", bg = (e) => {
  const t = Sg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return xg(s);
      const a = s.split(Yo), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return wu(a, l, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const l = o[s], c = n[s];
        return l ? c ? vg(c, l) : l : c || el;
      }
      return n[s] || el;
    }
  };
}, wu = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const r = e[t], i = n.nextPart.get(r);
  if (i) {
    const c = wu(e, t + 1, i);
    if (c) return c;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(Yo) : e.slice(t).join(Yo), l = s.length;
  for (let c = 0; c < l; c++) {
    const d = s[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, xg = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? wg + o : void 0;
})(), Sg = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Cg(n, t);
}, Cg = (e, t) => {
  const n = yu();
  for (const o in e) {
    const r = e[o];
    Cs(r, n, o, t);
  }
  return n;
}, Cs = (e, t, n, o) => {
  const r = e.length;
  for (let i = 0; i < r; i++) {
    const s = e[i];
    Rg(s, t, n, o);
  }
}, Rg = (e, t, n, o) => {
  if (typeof e == "string") {
    Eg(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Pg(e, t, n, o);
    return;
  }
  Tg(e, t, n, o);
}, Eg = (e, t, n) => {
  const o = e === "" ? t : bu(t, e);
  o.classGroupId = n;
}, Pg = (e, t, n, o) => {
  if (Mg(e)) {
    Cs(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(yg(n, e));
}, Tg = (e, t, n, o) => {
  const r = Object.entries(e), i = r.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = r[s];
    Cs(l, bu(t, a), n, o);
  }
}, bu = (e, t) => {
  let n = e;
  const o = t.split(Yo), r = o.length;
  for (let i = 0; i < r; i++) {
    const s = o[i];
    let a = n.nextPart.get(s);
    a || (a = yu(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, Mg = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ag = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const r = (i, s) => {
    n[i] = s, t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = n[i];
      if (s !== void 0)
        return s;
      if ((s = o[i]) !== void 0)
        return r(i, s), s;
    },
    set(i, s) {
      i in n ? n[i] = s : r(i, s);
    }
  };
}, _i = "!", tl = ":", Dg = [], nl = (e, t, n, o, r) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: r
}), _g = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (r) => {
    const i = [];
    let s = 0, a = 0, l = 0, c;
    const d = r.length;
    for (let g = 0; g < d; g++) {
      const y = r[g];
      if (s === 0 && a === 0) {
        if (y === tl) {
          i.push(r.slice(l, g)), l = g + 1;
          continue;
        }
        if (y === "/") {
          c = g;
          continue;
        }
      }
      y === "[" ? s++ : y === "]" ? s-- : y === "(" ? a++ : y === ")" && a--;
    }
    const u = i.length === 0 ? r : r.slice(l);
    let f = u, h = !1;
    u.endsWith(_i) ? (f = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(_i) && (f = u.slice(1), h = !0)
    );
    const m = c && c > l ? c - l : void 0;
    return nl(i, h, f, m);
  };
  if (t) {
    const r = t + tl, i = o;
    o = (s) => s.startsWith(r) ? i(s.slice(r.length)) : nl(Dg, !1, s, void 0, !0);
  }
  if (n) {
    const r = o;
    o = (i) => n({
      className: i,
      parseClassName: r
    });
  }
  return o;
}, kg = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, o) => {
    t.set(n, 1e6 + o);
  }), (n) => {
    const o = [];
    let r = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", l = t.has(s);
      a || l ? (r.length > 0 && (r.sort(), o.push(...r), r = []), o.push(s)) : r.push(s);
    }
    return r.length > 0 && (r.sort(), o.push(...r)), o;
  };
}, Ig = (e) => ({
  cache: Ag(e.cacheSize),
  parseClassName: _g(e),
  sortModifiers: kg(e),
  ...bg(e)
}), Ng = /\s+/, Fg = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: i
  } = t, s = [], a = e.trim().split(Ng);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: u,
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: g
    } = n(d);
    if (u) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!g, w = o(y ? m.substring(0, g) : m);
    if (!w) {
      if (!y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = o(m), !w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const b = f.length === 0 ? "" : f.length === 1 ? f[0] : i(f).join(":"), x = h ? b + _i : b, S = x + w;
    if (s.indexOf(S) > -1)
      continue;
    s.push(S);
    const R = r(w, y);
    for (let E = 0; E < R.length; ++E) {
      const T = R[E];
      s.push(x + T);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Og = (...e) => {
  let t = 0, n, o, r = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = xu(n)) && (r && (r += " "), r += o);
  return r;
}, xu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = xu(e[o])) && (n && (n += " "), n += t);
  return n;
}, Vg = (e, ...t) => {
  let n, o, r, i;
  const s = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = Ig(c), o = n.cache.get, r = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const c = o(l);
    if (c)
      return c;
    const d = Fg(l, n);
    return r(l, d), d;
  };
  return i = s, (...l) => i(Og(...l));
}, Lg = [], de = (e) => {
  const t = (n) => n[e] || Lg;
  return t.isThemeGetter = !0, t;
}, Su = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Cu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $g = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Bg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, jg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xt = (e) => $g.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), St = (e) => !!e && Number.isInteger(Number(e)), Wr = (e) => e.endsWith("%") && re(e.slice(0, -1)), ft = (e) => Bg.test(e), Ru = () => !0, Wg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zg.test(e) && !Hg.test(e)
), Rs = () => !1, Ug = (e) => jg.test(e), Kg = (e) => Gg.test(e), Yg = (e) => !z(e) && !j(e), Xg = (e) => Nt(e, Tu, Rs), z = (e) => Su.test(e), zt = (e) => Nt(e, Mu, Wg), ol = (e) => Nt(e, ov, re), qg = (e) => Nt(e, Du, Ru), Zg = (e) => Nt(e, Au, Rs), rl = (e) => Nt(e, Eu, Rs), Qg = (e) => Nt(e, Pu, Kg), wo = (e) => Nt(e, _u, Ug), j = (e) => Cu.test(e), Nn = (e) => Jt(e, Mu), Jg = (e) => Jt(e, Au), il = (e) => Jt(e, Eu), ev = (e) => Jt(e, Tu), tv = (e) => Jt(e, Pu), bo = (e) => Jt(e, _u, !0), nv = (e) => Jt(e, Du, !0), Nt = (e, t, n) => {
  const o = Su.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, Jt = (e, t, n = !1) => {
  const o = Cu.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, Eu = (e) => e === "position" || e === "percentage", Pu = (e) => e === "image" || e === "url", Tu = (e) => e === "length" || e === "size" || e === "bg-size", Mu = (e) => e === "length", ov = (e) => e === "number", Au = (e) => e === "family-name", Du = (e) => e === "number" || e === "weight", _u = (e) => e === "shadow", rv = () => {
  const e = de("color"), t = de("font"), n = de("text"), o = de("font-weight"), r = de("tracking"), i = de("leading"), s = de("breakpoint"), a = de("container"), l = de("spacing"), c = de("radius"), d = de("shadow"), u = de("inset-shadow"), f = de("text-shadow"), h = de("drop-shadow"), m = de("blur"), g = de("perspective"), y = de("aspect"), w = de("ease"), b = de("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], R = () => [...S(), j, z], E = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], C = () => [j, z, l], I = () => [xt, "full", "auto", ...C()], A = () => [St, "none", "subgrid", j, z], L = () => ["auto", {
    span: ["full", St, j, z]
  }, St, j, z], W = () => [St, "auto", j, z], q = () => ["auto", "min", "max", "fr", j, z], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...C()], D = () => [xt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], P = () => [xt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...C()], k = () => [xt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...C()], _ = () => [e, j, z], ne = () => [...S(), il, rl, {
    position: [j, z]
  }], M = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], V = () => ["auto", "cover", "contain", ev, Xg, {
    size: [j, z]
  }], $ = () => [Wr, Nn, zt], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    j,
    z
  ], B = () => ["", re, Nn, zt], te = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => [re, Wr, il, rl], pe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    j,
    z
  ], $e = () => ["none", re, j, z], Pe = () => ["none", re, j, z], We = () => [re, j, z], Ue = () => [xt, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ft],
      breakpoint: [ft],
      color: [Ru],
      container: [ft],
      "drop-shadow": [ft],
      ease: ["in", "out", "in-out"],
      font: [Yg],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ft],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ft],
      shadow: [ft],
      spacing: ["px", re],
      text: [ft],
      "text-shadow": [ft],
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
        aspect: ["auto", "square", xt, z, j, y]
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
        columns: [re, z, j, a]
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
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
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
        inset: I()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": I(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: I()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": I(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: I()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": I()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [St, "auto", j, z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [xt, "full", "auto", a, ...C()]
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
        flex: [re, xt, "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, j, z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, j, z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [St, "first", "last", "none", j, z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: L()
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
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: L()
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
        "auto-cols": q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
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
        p: C()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: C()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
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
        "space-x": C()
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
        "space-y": C()
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
        size: D()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...P()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...P()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...P()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...k()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...k()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...k()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...D()]
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
          ...D()
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
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Nn, zt]
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
        font: [o, nv, qg]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wr, z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jg, Zg, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [z]
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
        tracking: [r, j, z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [re, "none", j, ol]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", j, z]
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
        list: ["disc", "decimal", "none", j, z]
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
        decoration: [...te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", j, zt]
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
        "underline-offset": [re, "auto", j, z]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j, z]
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
        content: ["none", j, z]
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
        bg: ne()
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
        bg: V()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, St, j, z],
          radial: ["", j, z],
          conic: [St, j, z]
        }, tv, Qg]
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
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
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
        border: B()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": B()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
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
        "divide-y": B()
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
        border: [...te(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...te(), "hidden", "none"]
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
        outline: [...te(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, j, z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, Nn, zt]
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
          bo,
          wo
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
        "inset-shadow": ["none", u, bo, wo]
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
        ring: B()
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
        "ring-offset": [re, zt]
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
        "inset-ring": B()
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
        "text-shadow": ["none", f, bo, wo]
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
        opacity: [re, j, z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        "mask-linear": [re]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": X()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": X()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": _()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": X()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": X()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": _()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": X()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": X()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": _()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": X()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": X()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": _()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": X()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": X()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": _()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": X()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": X()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": _()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": X()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": X()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": _()
      }],
      "mask-image-radial": [{
        "mask-radial": [j, z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": X()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": X()
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
        "mask-conic": [re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": X()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": X()
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
        mask: ne()
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
        mask: V()
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
        mask: ["none", j, z]
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
          j,
          z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: pe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, j, z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, j, z]
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
          bo,
          wo
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
        grayscale: ["", re, j, z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, j, z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, j, z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, j, z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, j, z]
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
          j,
          z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": pe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, j, z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, j, z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, j, z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, j, z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, j, z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, j, z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, j, z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, j, z]
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", j, z]
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
        duration: [re, "initial", j, z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, j, z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [re, j, z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, j, z]
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
        perspective: [g, j, z]
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
        rotate: $e()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": $e()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": $e()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": $e()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Pe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Pe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Pe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Pe()
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
        skew: We()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": We()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": We()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [j, z, "", "none", "gpu", "cpu"]
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
        translate: Ue()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ue()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ue()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ue()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j, z]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": C()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": C()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", j, z]
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
        stroke: [re, Nn, zt, ol]
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
}, iv = /* @__PURE__ */ Vg(rv);
function Y(...e) {
  return iv(gu(e));
}
const sv = vu(
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
), yn = p.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, i) => /* @__PURE__ */ v(
    o ? hu : "button",
    {
      className: Y(sv({ variant: t, size: n, className: e })),
      ref: i,
      ...r
    }
  )
);
yn.displayName = "Button";
const av = vu(
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
function lv({ className: e, variant: t, asChild: n = !1, ...o }) {
  return /* @__PURE__ */ v(n ? hu : "span", { className: Y(av({ variant: t }), e), ...o });
}
const mr = p.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ v(
    "input",
    {
      type: t,
      className: Y(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ref: o,
      ...n
    }
  )
);
mr.displayName = "Input";
var cv = [
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
], uv = cv.reduce((e, t) => {
  const n = /* @__PURE__ */ hr(`Primitive.${t}`), o = p.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), dv = "Label", ku = p.forwardRef((e, t) => /* @__PURE__ */ v(
  uv.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
ku.displayName = dv;
var Iu = ku;
const fv = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  Iu,
  {
    ref: n,
    className: Y(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...t
  }
));
fv.displayName = Iu.displayName;
var pv = [
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
], hv = pv.reduce((e, t) => {
  const n = /* @__PURE__ */ hr(`Primitive.${t}`), o = p.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), mv = "Separator", sl = "horizontal", gv = ["horizontal", "vertical"], Nu = p.forwardRef((e, t) => {
  const { decorative: n, orientation: o = sl, ...r } = e, i = vv(o) ? o : sl, a = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ v(
    hv.div,
    {
      "data-orientation": i,
      ...a,
      ...r,
      ref: t
    }
  );
});
Nu.displayName = mv;
function vv(e) {
  return gv.includes(e);
}
var Fu = Nu;
const Ou = p.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ v(
  Fu,
  {
    ref: r,
    decorative: n,
    orientation: t,
    className: Y(
      "shrink-0 bg-border",
      t === "horizontal" ? "h-px w-full" : "h-full w-px",
      e
    ),
    ...o
  }
));
Ou.displayName = Fu.displayName;
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function yv(e, t) {
  const n = p.createContext(t), o = (i) => {
    const { children: s, ...a } = i, l = p.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ v(n.Provider, { value: l, children: s });
  };
  o.displayName = e + "Provider";
  function r(i) {
    const s = p.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function yt(e, t = []) {
  let n = [];
  function o(i, s) {
    const a = p.createContext(s), l = n.length;
    n = [...n, s];
    const c = (u) => {
      var w;
      const { scope: f, children: h, ...m } = u, g = ((w = f == null ? void 0 : f[e]) == null ? void 0 : w[l]) || a, y = p.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ v(g.Provider, { value: y, children: h });
    };
    c.displayName = i + "Provider";
    function d(u, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a, m = p.useContext(h);
      if (m) return m;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const r = () => {
    const i = n.map((s) => p.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return r.scopeName = e, [o, wv(r, ...t)];
}
function wv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(i) {
      const s = o.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(i)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function bv(e) {
  const t = /* @__PURE__ */ xv(e), n = p.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = p.Children.toArray(i), l = a.find(Cv);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ v(t, { ...s, ref: r, children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ v(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function xv(e) {
  const t = p.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (p.isValidElement(r)) {
      const s = Ev(r), a = Rv(i, r.props);
      return r.type !== p.Fragment && (a.ref = o ? _e(o, s) : s), p.cloneElement(r, a);
    }
    return p.Children.count(r) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sv = Symbol("radix.slottable");
function Cv(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sv;
}
function Rv(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ev(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Pv = [
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
], ie = Pv.reduce((e, t) => {
  const n = /* @__PURE__ */ bv(`Primitive.${t}`), o = p.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Vu(e, t) {
  e && du.flushSync(() => e.dispatchEvent(t));
}
function ve(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function Tv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ve(e);
  p.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Mv = "DismissableLayer", ki = "dismissableLayer.update", Av = "dismissableLayer.pointerDownOutside", Dv = "dismissableLayer.focusOutside", al, Lu = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qn = p.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = p.useContext(Lu), [d, u] = p.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = p.useState({}), m = ae(t, (T) => u(T)), g = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(y), b = d ? g.indexOf(d) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= w, R = Iv((T) => {
      const C = T.target, I = [...c.branches].some((A) => A.contains(C));
      !S || I || (r == null || r(T), s == null || s(T), T.defaultPrevented || a == null || a());
    }, f), E = Nv((T) => {
      const C = T.target;
      [...c.branches].some((A) => A.contains(C)) || (i == null || i(T), s == null || s(T), T.defaultPrevented || a == null || a());
    }, f);
    return Tv((T) => {
      b === c.layers.size - 1 && (o == null || o(T), !T.defaultPrevented && a && (T.preventDefault(), a()));
    }, f), p.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (al = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), ll(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = al);
        };
    }, [d, f, n, c]), p.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), ll());
    }, [d, c]), p.useEffect(() => {
      const T = () => h({});
      return document.addEventListener(ki, T), () => document.removeEventListener(ki, T);
    }, []), /* @__PURE__ */ v(
      ie.div,
      {
        ...l,
        ref: m,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: U(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: U(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Qn.displayName = Mv;
var _v = "DismissableLayerBranch", kv = p.forwardRef((e, t) => {
  const n = p.useContext(Lu), o = p.useRef(null), r = ae(t, o);
  return p.useEffect(() => {
    const i = o.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ v(ie.div, { ...e, ref: r });
});
kv.displayName = _v;
function Iv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ve(e), o = p.useRef(!1), r = p.useRef(() => {
  });
  return p.useEffect(() => {
    const i = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          $u(
            Av,
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
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Nv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ve(e), o = p.useRef(!1);
  return p.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && $u(Dv, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ll() {
  const e = new CustomEvent(ki);
  document.dispatchEvent(e);
}
function $u(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Vu(r, i) : r.dispatchEvent(i);
}
var ht = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {
}, Fv = p[" useId ".trim().toString()] || (() => {
}), Ov = 0;
function xe(e) {
  const [t, n] = p.useState(Fv());
  return ht(() => {
    n((o) => o ?? String(Ov++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Vv = ["top", "right", "bottom", "left"], Mt = Math.min, Fe = Math.max, Xo = Math.round, xo = Math.floor, at = (e) => ({
  x: e,
  y: e
}), Lv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ii(e, t, n) {
  return Fe(e, Mt(t, n));
}
function mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gt(e) {
  return e.split("-")[0];
}
function Pn(e) {
  return e.split("-")[1];
}
function Es(e) {
  return e === "x" ? "y" : "x";
}
function Ps(e) {
  return e === "y" ? "height" : "width";
}
function st(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ts(e) {
  return Es(st(e));
}
function $v(e, t, n) {
  n === void 0 && (n = !1);
  const o = Pn(e), r = Ts(e), i = Ps(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = qo(s)), [s, qo(s)];
}
function Bv(e) {
  const t = qo(e);
  return [Ni(e), t, Ni(t)];
}
function Ni(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const cl = ["left", "right"], ul = ["right", "left"], zv = ["top", "bottom"], Hv = ["bottom", "top"];
function jv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ul : cl : t ? cl : ul;
    case "left":
    case "right":
      return t ? zv : Hv;
    default:
      return [];
  }
}
function Gv(e, t, n, o) {
  const r = Pn(e);
  let i = jv(gt(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Ni)))), i;
}
function qo(e) {
  const t = gt(e);
  return Lv[t] + e.slice(t.length);
}
function Wv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bu(e) {
  return typeof e != "number" ? Wv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zo(e) {
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
function dl(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = st(t), s = Ts(t), a = Ps(s), l = gt(t), c = i === "y", d = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, f = o[a] / 2 - r[a] / 2;
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
  switch (Pn(t)) {
    case "start":
      h[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
async function Uv(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = mt(t, e), m = Bu(h), y = a[f ? u === "floating" ? "reference" : "floating" : u], w = Zo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = u === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Zo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - R.top + m.top) / S.y,
    bottom: (R.bottom - w.bottom + m.bottom) / S.y,
    left: (w.left - R.left + m.left) / S.x,
    right: (R.right - w.right + m.right) / S.x
  };
}
const Kv = 50, Yv = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Uv
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: u
  } = dl(c, o, l), f = o, h = 0;
  const m = {};
  for (let g = 0; g < i.length; g++) {
    const y = i[g];
    if (!y)
      continue;
    const {
      name: w,
      fn: b
    } = y, {
      x,
      y: S,
      data: R,
      reset: E
    } = await b({
      x: d,
      y: u,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, u = S ?? u, m[w] = {
      ...m[w],
      ...R
    }, E && h < Kv && (h++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (c = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: d,
      y: u
    } = dl(c, f, l)), g = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: r,
    middlewareData: m
  };
}, Xv = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = mt(e, t) || {};
    if (c == null)
      return {};
    const u = Bu(d), f = {
      x: n,
      y: o
    }, h = Ts(r), m = Ps(h), g = await s.getDimensions(c), y = h === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", x = y ? "clientHeight" : "clientWidth", S = i.reference[m] + i.reference[h] - f[h] - i.floating[m], R = f[h] - i.reference[h], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = E ? E[x] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(E))) && (T = a.floating[x] || i.floating[m]);
    const C = S / 2 - R / 2, I = T / 2 - g[m] / 2 - 1, A = Mt(u[w], I), L = Mt(u[b], I), W = A, q = T - g[m] - L, K = T / 2 - g[m] / 2 + C, J = Ii(W, K, q), O = !l.arrow && Pn(r) != null && K !== J && i.reference[m] / 2 - (K < W ? A : L) - g[m] / 2 < 0, D = O ? K < W ? K - W : K - q : 0;
    return {
      [h]: f[h] + D,
      data: {
        [h]: J,
        centerOffset: K - J - D,
        ...O && {
          alignmentOffset: D
        }
      },
      reset: O
    };
  }
}), qv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = mt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = gt(r), b = st(a), x = gt(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), R = f || (x || !g ? [qo(a)] : Bv(a)), E = m !== "none";
      !f && E && R.push(...Gv(a, g, m, S));
      const T = [a, ...R], C = await l.detectOverflow(t, y), I = [];
      let A = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (d && I.push(C[w]), u) {
        const K = $v(r, s, S);
        I.push(C[K[0]], C[K[1]]);
      }
      if (A = [...A, {
        placement: r,
        overflows: I
      }], !I.every((K) => K <= 0)) {
        var L, W;
        const K = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, J = T[K];
        if (J && (!(u === "alignment" ? b !== st(J) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((P) => st(P.placement) === b ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: A
            },
            reset: {
              placement: J
            }
          };
        let O = (W = A.filter((D) => D.overflows[0] <= 0).sort((D, P) => D.overflows[1] - P.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!O)
          switch (h) {
            case "bestFit": {
              var q;
              const D = (q = A.filter((P) => {
                if (E) {
                  const k = st(P.placement);
                  return k === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  k === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((k) => k > 0).reduce((k, _) => k + _, 0)]).sort((P, k) => P[1] - k[1])[0]) == null ? void 0 : q[0];
              D && (O = D);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (r !== O)
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
function fl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function pl(e) {
  return Vv.some((t) => e[t] >= 0);
}
const Zv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = mt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await o.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), a = fl(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: pl(a)
            }
          };
        }
        case "escaped": {
          const s = await o.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = fl(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: pl(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, zu = /* @__PURE__ */ new Set(["left", "top"]);
async function Qv(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = gt(n), a = Pn(n), l = st(n) === "y", c = zu.has(s) ? -1 : 1, d = i && l ? -1 : 1, u = mt(t, e);
  let {
    mainAxis: f,
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
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const Jv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Qv(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, ey = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: i
      } = t, {
        mainAxis: s = !0,
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
      } = mt(e, t), d = {
        x: n,
        y: o
      }, u = await i.detectOverflow(t, c), f = st(gt(r)), h = Es(f);
      let m = d[h], g = d[f];
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", x = m + u[w], S = m - u[b];
        m = Ii(x, m, S);
      }
      if (a) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = g + u[w], S = g - u[b];
        g = Ii(x, g, S);
      }
      const y = l.fn({
        ...t,
        [h]: m,
        [f]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [h]: s,
            [f]: a
          }
        }
      };
    }
  };
}, ty = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = mt(e, t), d = {
        x: n,
        y: o
      }, u = st(r), f = Es(u);
      let h = d[f], m = d[u];
      const g = mt(a, t), y = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const x = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[x] + y.mainAxis, R = i.reference[f] + i.reference[x] - y.mainAxis;
        h < S ? h = S : h > R && (h = R);
      }
      if (c) {
        var w, b;
        const x = f === "y" ? "width" : "height", S = zu.has(gt(r)), R = i.reference[u] - i.floating[x] + (S && ((w = s.offset) == null ? void 0 : w[u]) || 0) + (S ? 0 : y.crossAxis), E = i.reference[u] + i.reference[x] + (S ? 0 : ((b = s.offset) == null ? void 0 : b[u]) || 0) - (S ? y.crossAxis : 0);
        m < R ? m = R : m > E && (m = E);
      }
      return {
        [f]: h,
        [u]: m
      };
    }
  };
}, ny = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = mt(e, t), d = await s.detectOverflow(t, c), u = gt(r), f = Pn(r), h = st(r) === "y", {
        width: m,
        height: g
      } = i.floating;
      let y, w;
      u === "top" || u === "bottom" ? (y = u, w = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = u, y = f === "end" ? "top" : "bottom");
      const b = g - d.top - d.bottom, x = m - d.left - d.right, S = Mt(g - d[y], b), R = Mt(m - d[w], x), E = !t.middlewareData.shift;
      let T = S, C = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (C = x), (o = t.middlewareData.shift) != null && o.enabled.y && (T = b), E && !f) {
        const A = Fe(d.left, 0), L = Fe(d.right, 0), W = Fe(d.top, 0), q = Fe(d.bottom, 0);
        h ? C = m - 2 * (A !== 0 || L !== 0 ? A + L : Fe(d.left, d.right)) : T = g - 2 * (W !== 0 || q !== 0 ? W + q : Fe(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: C,
        availableHeight: T
      });
      const I = await s.getDimensions(a.floating);
      return m !== I.width || g !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gr() {
  return typeof window < "u";
}
function Tn(e) {
  return Hu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Oe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ut(e) {
  var t;
  return (t = (Hu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hu(e) {
  return gr() ? e instanceof Node || e instanceof Oe(e).Node : !1;
}
function Je(e) {
  return gr() ? e instanceof Element || e instanceof Oe(e).Element : !1;
}
function wt(e) {
  return gr() ? e instanceof HTMLElement || e instanceof Oe(e).HTMLElement : !1;
}
function hl(e) {
  return !gr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Oe(e).ShadowRoot;
}
function Jn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function oy(e) {
  return /^(table|td|th)$/.test(Tn(e));
}
function vr(e) {
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
const ry = /transform|translate|scale|rotate|perspective|filter/, iy = /paint|layout|strict|content/, Ht = (e) => !!e && e !== "none";
let Ur;
function Ms(e) {
  const t = Je(e) ? et(e) : e;
  return Ht(t.transform) || Ht(t.translate) || Ht(t.scale) || Ht(t.rotate) || Ht(t.perspective) || !As() && (Ht(t.backdropFilter) || Ht(t.filter)) || ry.test(t.willChange || "") || iy.test(t.contain || "");
}
function sy(e) {
  let t = At(e);
  for (; wt(t) && !wn(t); ) {
    if (Ms(t))
      return t;
    if (vr(t))
      return null;
    t = At(t);
  }
  return null;
}
function As() {
  return Ur == null && (Ur = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ur;
}
function wn(e) {
  return /^(html|body|#document)$/.test(Tn(e));
}
function et(e) {
  return Oe(e).getComputedStyle(e);
}
function yr(e) {
  return Je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function At(e) {
  if (Tn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    hl(e) && e.host || // Fallback.
    ut(e)
  );
  return hl(t) ? t.host : t;
}
function ju(e) {
  const t = At(e);
  return wn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && Jn(t) ? t : ju(t);
}
function Gn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ju(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Oe(r);
  if (i) {
    const a = Fi(s);
    return t.concat(s, s.visualViewport || [], Jn(r) ? r : [], a && n ? Gn(a) : []);
  } else
    return t.concat(r, Gn(r, [], n));
}
function Fi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gu(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = wt(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = Xo(n) !== i || Xo(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function Ds(e) {
  return Je(e) ? e : e.contextElement;
}
function mn(e) {
  const t = Ds(e);
  if (!wt(t))
    return at(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Gu(t);
  let s = (i ? Xo(n.width) : n.width) / o, a = (i ? Xo(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const ay = /* @__PURE__ */ at(0);
function Wu(e) {
  const t = Oe(e);
  return !As() || !t.visualViewport ? ay : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ly(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Oe(e) ? !1 : t;
}
function qt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Ds(e);
  let s = at(1);
  t && (o ? Je(o) && (s = mn(o)) : s = mn(e));
  const a = ly(i, n, o) ? Wu(i) : at(0);
  let l = (r.left + a.x) / s.x, c = (r.top + a.y) / s.y, d = r.width / s.x, u = r.height / s.y;
  if (i) {
    const f = Oe(i), h = o && Je(o) ? Oe(o) : o;
    let m = f, g = Fi(m);
    for (; g && o && h !== m; ) {
      const y = mn(g), w = g.getBoundingClientRect(), b = et(g), x = w.left + (g.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = w.top + (g.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, u *= y.y, l += x, c += S, m = Oe(g), g = Fi(m);
    }
  }
  return Zo({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function wr(e, t) {
  const n = yr(e).scrollLeft;
  return t ? t.left + n : qt(ut(e)).left + n;
}
function Uu(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - wr(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function cy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = ut(o), a = t ? vr(t.floating) : !1;
  if (o === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = at(1);
  const d = at(0), u = wt(o);
  if ((u || !u && !i) && ((Tn(o) !== "body" || Jn(s)) && (l = yr(o)), u)) {
    const h = qt(o);
    c = mn(o), d.x = h.x + o.clientLeft, d.y = h.y + o.clientTop;
  }
  const f = s && !u && !i ? Uu(s, l) : at(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function uy(e) {
  return Array.from(e.getClientRects());
}
function dy(e) {
  const t = ut(e), n = yr(e), o = e.ownerDocument.body, r = Fe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = Fe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + wr(e);
  const a = -n.scrollTop;
  return et(o).direction === "rtl" && (s += Fe(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
const ml = 25;
function fy(e, t) {
  const n = Oe(e), o = ut(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const d = As();
    (!d || d && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  const c = wr(o);
  if (c <= 0) {
    const d = o.ownerDocument, u = d.body, f = getComputedStyle(u), h = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(o.clientWidth - u.clientWidth - h);
    m <= ml && (i -= m);
  } else c <= ml && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function py(e, t) {
  const n = qt(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = wt(e) ? mn(e) : at(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = r * i.x, c = o * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function gl(e, t, n) {
  let o;
  if (t === "viewport")
    o = fy(e, n);
  else if (t === "document")
    o = dy(ut(e));
  else if (Je(t))
    o = py(t, n);
  else {
    const r = Wu(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Zo(o);
}
function Ku(e, t) {
  const n = At(e);
  return n === t || !Je(n) || wn(n) ? !1 : et(n).position === "fixed" || Ku(n, t);
}
function hy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Gn(e, [], !1).filter((a) => Je(a) && Tn(a) !== "body"), r = null;
  const i = et(e).position === "fixed";
  let s = i ? At(e) : e;
  for (; Je(s) && !wn(s); ) {
    const a = et(s), l = Ms(s);
    !l && a.position === "fixed" && (r = null), (i ? !l && !r : !l && a.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || Jn(s) && !l && Ku(e, s)) ? o = o.filter((d) => d !== s) : r = a, s = At(s);
  }
  return t.set(e, o), o;
}
function my(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? vr(t) ? [] : hy(t, this._c) : [].concat(n), o], a = gl(t, s[0], r);
  let l = a.top, c = a.right, d = a.bottom, u = a.left;
  for (let f = 1; f < s.length; f++) {
    const h = gl(t, s[f], r);
    l = Fe(h.top, l), c = Mt(h.right, c), d = Mt(h.bottom, d), u = Fe(h.left, u);
  }
  return {
    width: c - u,
    height: d - l,
    x: u,
    y: l
  };
}
function gy(e) {
  const {
    width: t,
    height: n
  } = Gu(e);
  return {
    width: t,
    height: n
  };
}
function vy(e, t, n) {
  const o = wt(t), r = ut(t), i = n === "fixed", s = qt(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = at(0);
  function c() {
    l.x = wr(r);
  }
  if (o || !o && !i)
    if ((Tn(t) !== "body" || Jn(r)) && (a = yr(t)), o) {
      const h = qt(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else r && c();
  i && !o && r && c();
  const d = r && !o && !i ? Uu(r, a) : at(0), u = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Kr(e) {
  return et(e).position === "static";
}
function vl(e, t) {
  if (!wt(e) || et(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ut(e) === n && (n = n.ownerDocument.body), n;
}
function Yu(e, t) {
  const n = Oe(e);
  if (vr(e))
    return n;
  if (!wt(e)) {
    let r = At(e);
    for (; r && !wn(r); ) {
      if (Je(r) && !Kr(r))
        return r;
      r = At(r);
    }
    return n;
  }
  let o = vl(e, t);
  for (; o && oy(o) && Kr(o); )
    o = vl(o, t);
  return o && wn(o) && Kr(o) && !Ms(o) ? n : o || sy(e) || n;
}
const yy = async function(e) {
  const t = this.getOffsetParent || Yu, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: vy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function wy(e) {
  return et(e).direction === "rtl";
}
const by = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cy,
  getDocumentElement: ut,
  getClippingRect: my,
  getOffsetParent: Yu,
  getElementRects: yy,
  getClientRects: uy,
  getDimensions: gy,
  getScale: mn,
  isElement: Je,
  isRTL: wy
};
function Xu(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function xy(e, t) {
  let n = null, o;
  const r = ut(e);
  function i() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: f,
      height: h
    } = c;
    if (a || t(), !f || !h)
      return;
    const m = xo(u), g = xo(r.clientWidth - (d + f)), y = xo(r.clientHeight - (u + h)), w = xo(d), x = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -w + "px",
      threshold: Fe(0, Mt(1, l)) || 1
    };
    let S = !0;
    function R(E) {
      const T = E[0].intersectionRatio;
      if (T !== l) {
        if (!S)
          return s();
        T ? s(!1, T) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !Xu(c, e.getBoundingClientRect()) && s(), S = !1;
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
  return s(!0), i;
}
function Sy(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = Ds(e), d = r || i ? [...c ? Gn(c) : [], ...t ? Gn(t) : []] : [];
  d.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const u = c && a ? xy(c, n) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === c && h && t && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), c && !l && h.observe(c), t && h.observe(t));
  let m, g = l ? qt(e) : null;
  l && y();
  function y() {
    const w = qt(e);
    g && !Xu(g, w) && n(), g = w, m = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((b) => {
      r && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), u == null || u(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const Cy = Jv, Ry = ey, Ey = qv, Py = ny, Ty = Zv, yl = Xv, My = ty, Ay = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: by,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Yv(e, t, {
    ...r,
    platform: i
  });
};
var Dy = typeof document < "u", _y = function() {
}, Fo = Dy ? au : _y;
function Qo(e, t) {
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
        if (!Qo(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !Qo(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qu(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wl(e, t) {
  const n = qu(e);
  return Math.round(t * n) / n;
}
function Yr(e) {
  const t = p.useRef(e);
  return Fo(() => {
    t.current = e;
  }), t;
}
function ky(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, u] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = p.useState(o);
  Qo(f, o) || h(o);
  const [m, g] = p.useState(null), [y, w] = p.useState(null), b = p.useCallback((P) => {
    P !== E.current && (E.current = P, g(P));
  }, []), x = p.useCallback((P) => {
    P !== T.current && (T.current = P, w(P));
  }, []), S = i || m, R = s || y, E = p.useRef(null), T = p.useRef(null), C = p.useRef(d), I = l != null, A = Yr(l), L = Yr(r), W = Yr(c), q = p.useCallback(() => {
    if (!E.current || !T.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: f
    };
    L.current && (P.platform = L.current), Ay(E.current, T.current, P).then((k) => {
      const _ = {
        ...k,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      K.current && !Qo(C.current, _) && (C.current = _, du.flushSync(() => {
        u(_);
      }));
    });
  }, [f, t, n, L, W]);
  Fo(() => {
    c === !1 && C.current.isPositioned && (C.current.isPositioned = !1, u((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const K = p.useRef(!1);
  Fo(() => (K.current = !0, () => {
    K.current = !1;
  }), []), Fo(() => {
    if (S && (E.current = S), R && (T.current = R), S && R) {
      if (A.current)
        return A.current(S, R, q);
      q();
    }
  }, [S, R, q, A, I]);
  const J = p.useMemo(() => ({
    reference: E,
    floating: T,
    setReference: b,
    setFloating: x
  }), [b, x]), O = p.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), D = p.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return P;
    const k = wl(O.floating, d.x), _ = wl(O.floating, d.y);
    return a ? {
      ...P,
      transform: "translate(" + k + "px, " + _ + "px)",
      ...qu(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: k,
      top: _
    };
  }, [n, a, O.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: q,
    refs: J,
    elements: O,
    floatingStyles: D
  }), [d, q, J, O, D]);
}
const Iy = (e) => {
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
      return o && t(o) ? o.current != null ? yl({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? yl({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Ny = (e, t) => {
  const n = Cy(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Fy = (e, t) => {
  const n = Ry(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Oy = (e, t) => ({
  fn: My(e).fn,
  options: [e, t]
}), Vy = (e, t) => {
  const n = Ey(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ly = (e, t) => {
  const n = Py(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, $y = (e, t) => {
  const n = Ty(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, By = (e, t) => {
  const n = Iy(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var zy = "Arrow", Zu = p.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ v(
    ie.svg,
    {
      ...i,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ v("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Zu.displayName = zy;
var Hy = Zu;
function jy(e) {
  const [t, n] = p.useState(void 0);
  return ht(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var _s = "Popper", [Qu, Mn] = yt(_s), [Gy, Ju] = Qu(_s), ed = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = p.useState(null);
  return /* @__PURE__ */ v(Gy, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
ed.displayName = _s;
var td = "PopperAnchor", nd = p.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, i = Ju(td, n), s = p.useRef(null), a = ae(t, s), l = p.useRef(null);
    return p.useEffect(() => {
      const c = l.current;
      l.current = (o == null ? void 0 : o.current) || s.current, c !== l.current && i.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ v(ie.div, { ...r, ref: a });
  }
);
nd.displayName = td;
var ks = "PopperContent", [Wy, Uy] = Qu(ks), od = p.forwardRef(
  (e, t) => {
    var te, ee, X, pe, $e, Pe;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: m,
      ...g
    } = e, y = Ju(ks, n), [w, b] = p.useState(null), x = ae(t, (We) => b(We)), [S, R] = p.useState(null), E = jy(S), T = (E == null ? void 0 : E.width) ?? 0, C = (E == null ? void 0 : E.height) ?? 0, I = o + (i !== "center" ? "-" + i : ""), A = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, L = Array.isArray(c) ? c : [c], W = L.length > 0, q = {
      padding: A,
      boundary: L.filter(Yy),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: K, floatingStyles: J, placement: O, isPositioned: D, middlewareData: P } = ky({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...We) => Sy(...We, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Ny({ mainAxis: r + C, alignmentAxis: s }),
        l && Fy({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Oy() : void 0,
          ...q
        }),
        l && Vy({ ...q }),
        Ly({
          ...q,
          apply: ({ elements: We, rects: Ue, availableWidth: Hr, availableHeight: ho }) => {
            const { width: $t, height: mo } = Ue.reference, Te = We.floating.style;
            Te.setProperty("--radix-popper-available-width", `${Hr}px`), Te.setProperty("--radix-popper-available-height", `${ho}px`), Te.setProperty("--radix-popper-anchor-width", `${$t}px`), Te.setProperty("--radix-popper-anchor-height", `${mo}px`);
          }
        }),
        S && By({ element: S, padding: a }),
        Xy({ arrowWidth: T, arrowHeight: C }),
        f && $y({ strategy: "referenceHidden", ...q })
      ]
    }), [k, _] = sd(O), ne = ve(m);
    ht(() => {
      D && (ne == null || ne());
    }, [D, ne]);
    const M = (te = P.arrow) == null ? void 0 : te.x, V = (ee = P.arrow) == null ? void 0 : ee.y, $ = ((X = P.arrow) == null ? void 0 : X.centerOffset) !== 0, [N, B] = p.useState();
    return ht(() => {
      w && B(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ v(
      "div",
      {
        ref: K.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: D ? J.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N,
          "--radix-popper-transform-origin": [
            (pe = P.transformOrigin) == null ? void 0 : pe.x,
            ($e = P.transformOrigin) == null ? void 0 : $e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Pe = P.hide) == null ? void 0 : Pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ v(
          Wy,
          {
            scope: n,
            placedSide: k,
            onArrowChange: R,
            arrowX: M,
            arrowY: V,
            shouldHideArrow: $,
            children: /* @__PURE__ */ v(
              ie.div,
              {
                "data-side": k,
                "data-align": _,
                ...g,
                ref: x,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
od.displayName = ks;
var rd = "PopperArrow", Ky = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, id = p.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = Uy(rd, o), s = Ky[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v(
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
        children: /* @__PURE__ */ v(
          Hy,
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
id.displayName = rd;
function Yy(e) {
  return e !== null;
}
var Xy = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, w, b;
    const { placement: n, rects: o, middlewareData: r } = t, s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, d] = sd(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, h = (((b = r.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let m = "", g = "";
    return c === "bottom" ? (m = s ? u : `${f}px`, g = `${-l}px`) : c === "top" ? (m = s ? u : `${f}px`, g = `${o.floating.height + l}px`) : c === "right" ? (m = `${-l}px`, g = s ? u : `${h}px`) : c === "left" && (m = `${o.floating.width + l}px`, g = s ? u : `${h}px`), { data: { x: m, y: g } };
  }
});
function sd(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var br = ed, xr = nd, Is = od, Ns = id, qy = "Portal", eo = p.forwardRef((e, t) => {
  var a;
  const { container: n, ...o } = e, [r, i] = p.useState(!1);
  ht(() => i(!0), []);
  const s = n || r && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? fu.createPortal(/* @__PURE__ */ v(ie.div, { ...o, ref: t }), s) : null;
});
eo.displayName = qy;
function Zy(e, t) {
  return p.useReducer((n, o) => t[n][o] ?? n, e);
}
var Se = (e) => {
  const { present: t, children: n } = e, o = Qy(t), r = typeof n == "function" ? n({ present: o.isPresent }) : p.Children.only(n), i = ae(o.ref, Jy(r));
  return typeof n == "function" || o.isPresent ? p.cloneElement(r, { ref: i }) : null;
};
Se.displayName = "Presence";
function Qy(e) {
  const [t, n] = p.useState(), o = p.useRef(null), r = p.useRef(e), i = p.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = Zy(s, {
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
  return p.useEffect(() => {
    const c = So(o.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), ht(() => {
    const c = o.current, d = r.current;
    if (d !== e) {
      const f = i.current, h = So(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), ht(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (h) => {
        const g = So(o.current).includes(CSS.escape(h.animationName));
        if (h.target === t && g && (l("ANIMATION_END"), !r.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, f = (h) => {
        h.target === t && (i.current = So(o.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: p.useCallback((c) => {
      o.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function So(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Jy(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ew = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function tw(e) {
  const t = ({ children: n }) => /* @__PURE__ */ v(vn, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = ew, t;
}
var nw = p[" useInsertionEffect ".trim().toString()] || ht;
function An({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, i, s] = ow({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : r;
  {
    const d = p.useRef(e !== void 0);
    p.useEffect(() => {
      const u = d.current;
      u !== a && console.warn(
        `${o} is changing from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, o]);
  }
  const c = p.useCallback(
    (d) => {
      var u;
      if (a) {
        const f = rw(d) ? d(e) : d;
        f !== e && ((u = s.current) == null || u.call(s, f));
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function ow({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = p.useState(e), r = p.useRef(n), i = p.useRef(t);
  return nw(() => {
    i.current = t;
  }, [t]), p.useEffect(() => {
    var s;
    r.current !== n && ((s = i.current) == null || s.call(i, n), r.current = n);
  }, [n, r]), [n, o, i];
}
function rw(e) {
  return typeof e == "function";
}
var iw = Object.freeze({
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
}), sw = "VisuallyHidden", ad = p.forwardRef(
  (e, t) => /* @__PURE__ */ v(
    ie.span,
    {
      ...e,
      ref: t,
      style: { ...iw, ...e.style }
    }
  )
);
ad.displayName = sw;
var aw = ad, [Sr] = yt("Tooltip", [
  Mn
]), Cr = Mn(), ld = "TooltipProvider", lw = 700, Oi = "tooltip.open", [cw, Fs] = Sr(ld), cd = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = lw,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: i
  } = e, s = p.useRef(!0), a = p.useRef(!1), l = p.useRef(0);
  return p.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ v(
    cw,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: p.useCallback(() => {
        window.clearTimeout(l.current), s.current = !1;
      }, []),
      onClose: p.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: p.useCallback((c) => {
        a.current = c;
      }, []),
      disableHoverableContent: r,
      children: i
    }
  );
};
cd.displayName = ld;
var Wn = "Tooltip", [uw, to] = Sr(Wn), ud = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = Fs(Wn, e.__scopeTooltip), c = Cr(t), [d, u] = p.useState(null), f = xe(), h = p.useRef(0), m = s ?? l.disableHoverableContent, g = a ?? l.delayDuration, y = p.useRef(!1), [w, b] = An({
    prop: o,
    defaultProp: r ?? !1,
    onChange: (T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Oi))) : l.onClose(), i == null || i(T);
    },
    caller: Wn
  }), x = p.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), S = p.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y.current = !1, b(!0);
  }, [b]), R = p.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b(!1);
  }, [b]), E = p.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      y.current = !0, b(!0), h.current = 0;
    }, g);
  }, [g, b]);
  return p.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ v(br, { ...c, children: /* @__PURE__ */ v(
    uw,
    {
      scope: t,
      contentId: f,
      open: w,
      stateAttribute: x,
      trigger: d,
      onTriggerChange: u,
      onTriggerEnter: p.useCallback(() => {
        l.isOpenDelayedRef.current ? E() : S();
      }, [l.isOpenDelayedRef, E, S]),
      onTriggerLeave: p.useCallback(() => {
        m ? R() : (window.clearTimeout(h.current), h.current = 0);
      }, [R, m]),
      onOpen: S,
      onClose: R,
      disableHoverableContent: m,
      children: n
    }
  ) });
};
ud.displayName = Wn;
var Vi = "TooltipTrigger", dd = p.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = to(Vi, n), i = Fs(Vi, n), s = Cr(n), a = p.useRef(null), l = ae(t, a, r.onTriggerChange), c = p.useRef(!1), d = p.useRef(!1), u = p.useCallback(() => c.current = !1, []);
    return p.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ v(xr, { asChild: !0, ...s, children: /* @__PURE__ */ v(
      ie.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: l,
        onPointerMove: U(e.onPointerMove, (f) => {
          f.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (r.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: U(e.onPointerLeave, () => {
          r.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: U(e.onPointerDown, () => {
          r.open && r.onClose(), c.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: U(e.onFocus, () => {
          c.current || r.onOpen();
        }),
        onBlur: U(e.onBlur, r.onClose),
        onClick: U(e.onClick, r.onClose)
      }
    ) });
  }
);
dd.displayName = Vi;
var Os = "TooltipPortal", [dw, fw] = Sr(Os, {
  forceMount: void 0
}), fd = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, i = to(Os, t);
  return /* @__PURE__ */ v(dw, { scope: t, forceMount: n, children: /* @__PURE__ */ v(Se, { present: n || i.open, children: /* @__PURE__ */ v(eo, { asChild: !0, container: r, children: o }) }) });
};
fd.displayName = Os;
var bn = "TooltipContent", pd = p.forwardRef(
  (e, t) => {
    const n = fw(bn, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...i } = e, s = to(bn, e.__scopeTooltip);
    return /* @__PURE__ */ v(Se, { present: o || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ v(hd, { side: r, ...i, ref: t }) : /* @__PURE__ */ v(pw, { side: r, ...i, ref: t }) });
  }
), pw = p.forwardRef((e, t) => {
  const n = to(bn, e.__scopeTooltip), o = Fs(bn, e.__scopeTooltip), r = p.useRef(null), i = ae(t, r), [s, a] = p.useState(null), { trigger: l, onClose: c } = n, d = r.current, { onPointerInTransitChange: u } = o, f = p.useCallback(() => {
    a(null), u(!1);
  }, [u]), h = p.useCallback(
    (m, g) => {
      const y = m.currentTarget, w = { x: m.clientX, y: m.clientY }, b = yw(w, y.getBoundingClientRect()), x = ww(w, b), S = bw(g.getBoundingClientRect()), R = Sw([...x, ...S]);
      a(R), u(!0);
    },
    [u]
  );
  return p.useEffect(() => () => f(), [f]), p.useEffect(() => {
    if (l && d) {
      const m = (y) => h(y, d), g = (y) => h(y, l);
      return l.addEventListener("pointerleave", m), d.addEventListener("pointerleave", g), () => {
        l.removeEventListener("pointerleave", m), d.removeEventListener("pointerleave", g);
      };
    }
  }, [l, d, h, f]), p.useEffect(() => {
    if (s) {
      const m = (g) => {
        const y = g.target, w = { x: g.clientX, y: g.clientY }, b = (l == null ? void 0 : l.contains(y)) || (d == null ? void 0 : d.contains(y)), x = !xw(w, s);
        b ? f() : x && (f(), c());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [l, d, s, c, f]), /* @__PURE__ */ v(hd, { ...e, ref: i });
}), [hw, mw] = Sr(Wn, { isInside: !1 }), gw = /* @__PURE__ */ tw("TooltipContent"), hd = p.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = to(bn, n), c = Cr(n), { onClose: d } = l;
    return p.useEffect(() => (document.addEventListener(Oi, d), () => document.removeEventListener(Oi, d)), [d]), p.useEffect(() => {
      if (l.trigger) {
        const u = (f) => {
          const h = f.target;
          h != null && h.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", u, { capture: !0 }), () => window.removeEventListener("scroll", u, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ v(
      Qn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ G(
          Is,
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
              /* @__PURE__ */ v(gw, { children: o }),
              /* @__PURE__ */ v(hw, { scope: n, isInside: !0, children: /* @__PURE__ */ v(aw, { id: l.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
pd.displayName = bn;
var md = "TooltipArrow", vw = p.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Cr(n);
    return mw(
      md,
      n
    ).isInside ? null : /* @__PURE__ */ v(Ns, { ...r, ...o, ref: t });
  }
);
vw.displayName = md;
function yw(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, i)) {
    case i:
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
function ww(e, t, n = 5) {
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
function bw(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function xw(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, d = a.y, u = l.x, f = l.y;
    d > o != f > o && n < (u - c) * (o - d) / (f - d) + c && (r = !r);
  }
  return r;
}
function Sw(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Cw(t);
}
function Cw(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Rw = cd, Ew = ud, Pw = dd, Tw = fd, gd = pd;
const Rr = Rw, Er = Ew, Pr = Pw, no = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ v(Tw, { children: /* @__PURE__ */ v(
  gd,
  {
    ref: o,
    sideOffset: t,
    className: Y(
      "z-50 w-fit rounded-md bg-primary px-3 py-1.5 text-xs text-balance text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
no.displayName = gd.displayName;
var Xr = "focusScope.autoFocusOnMount", qr = "focusScope.autoFocusOnUnmount", bl = { bubbles: !1, cancelable: !0 }, Mw = "FocusScope", Tr = p.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = p.useState(null), c = ve(r), d = ve(i), u = p.useRef(null), f = ae(t, (g) => l(g)), h = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (o) {
      let g = function(x) {
        if (h.paused || !a) return;
        const S = x.target;
        a.contains(S) ? u.current = S : Ct(u.current, { select: !0 });
      }, y = function(x) {
        if (h.paused || !a) return;
        const S = x.relatedTarget;
        S !== null && (a.contains(S) || Ct(u.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const R of x)
            R.removedNodes.length > 0 && Ct(a);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [o, a, h.paused]), p.useEffect(() => {
    if (a) {
      Sl.add(h);
      const g = document.activeElement;
      if (!a.contains(g)) {
        const w = new CustomEvent(Xr, bl);
        a.addEventListener(Xr, c), a.dispatchEvent(w), w.defaultPrevented || (Aw(Nw(vd(a)), { select: !0 }), document.activeElement === g && Ct(a));
      }
      return () => {
        a.removeEventListener(Xr, c), setTimeout(() => {
          const w = new CustomEvent(qr, bl);
          a.addEventListener(qr, d), a.dispatchEvent(w), w.defaultPrevented || Ct(g ?? document.body, { select: !0 }), a.removeEventListener(qr, d), Sl.remove(h);
        }, 0);
      };
    }
  }, [a, c, d, h]);
  const m = p.useCallback(
    (g) => {
      if (!n && !o || h.paused) return;
      const y = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (y && w) {
        const b = g.currentTarget, [x, S] = Dw(b);
        x && S ? !g.shiftKey && w === S ? (g.preventDefault(), n && Ct(x, { select: !0 })) : g.shiftKey && w === x && (g.preventDefault(), n && Ct(S, { select: !0 })) : w === b && g.preventDefault();
      }
    },
    [n, o, h.paused]
  );
  return /* @__PURE__ */ v(ie.div, { tabIndex: -1, ...s, ref: f, onKeyDown: m });
});
Tr.displayName = Mw;
function Aw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Ct(o, { select: t }), document.activeElement !== n) return;
}
function Dw(e) {
  const t = vd(e), n = xl(t, e), o = xl(t.reverse(), e);
  return [n, o];
}
function vd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xl(e, t) {
  for (const n of e)
    if (!_w(n, { upTo: t })) return n;
}
function _w(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function kw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && kw(e) && t && e.select();
  }
}
var Sl = Iw();
function Iw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Cl(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Cl(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Cl(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Nw(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Zr = 0;
function Vs() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Rl()), document.body.insertAdjacentElement("beforeend", e[1] ?? Rl()), Zr++, () => {
      Zr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Zr--;
    };
  }, []);
}
function Rl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var it = function() {
  return it = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, it.apply(this, arguments);
};
function yd(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Fw(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, i; o < r; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Oo = "right-scroll-bar-position", Vo = "width-before-scroll-bar", Ow = "with-scroll-bars-hidden", Vw = "--removed-body-scroll-bar-size";
function Qr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Lw(e, t) {
  var n = ag(function() {
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
var $w = typeof window < "u" ? p.useLayoutEffect : p.useEffect, El = /* @__PURE__ */ new WeakMap();
function Bw(e, t) {
  var n = Lw(null, function(o) {
    return e.forEach(function(r) {
      return Qr(r, o);
    });
  });
  return $w(function() {
    var o = El.get(n);
    if (o) {
      var r = new Set(o), i = new Set(e), s = n.current;
      r.forEach(function(a) {
        i.has(a) || Qr(a, null);
      }), i.forEach(function(a) {
        r.has(a) || Qr(a, s);
      });
    }
    El.set(n, e);
  }, [e]), n;
}
function zw(e) {
  return e;
}
function Hw(e, t) {
  t === void 0 && (t = zw);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, o);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (o = !0; n.length; ) {
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
      o = !0;
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
  return r;
}
function jw(e) {
  e === void 0 && (e = {});
  var t = Hw(null);
  return t.options = it({ async: !0, ssr: !1 }, e), t;
}
var wd = function(e) {
  var t = e.sideCar, n = yd(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return p.createElement(o, it({}, n));
};
wd.isSideCarExport = !0;
function Gw(e, t) {
  return e.useMedium(t), wd;
}
var bd = jw(), Jr = function() {
}, Mr = p.forwardRef(function(e, t) {
  var n = p.useRef(null), o = p.useState({
    onScrollCapture: Jr,
    onWheelCapture: Jr,
    onTouchMoveCapture: Jr
  }), r = o[0], i = o[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, h = e.noRelative, m = e.noIsolation, g = e.inert, y = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, x = e.gapMode, S = yd(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = f, E = Bw([n, t]), T = it(it({}, S), r);
  return p.createElement(
    p.Fragment,
    null,
    d && p.createElement(R, { sideCar: bd, removeScrollBar: c, shards: u, noRelative: h, noIsolation: m, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n, gapMode: x }),
    s ? p.cloneElement(p.Children.only(a), it(it({}, T), { ref: E })) : p.createElement(b, it({}, T, { className: l, ref: E }), a)
  );
});
Mr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mr.classNames = {
  fullWidth: Vo,
  zeroRight: Oo
};
var Ww = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Uw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ww();
  return t && e.setAttribute("nonce", t), e;
}
function Kw(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Yw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Xw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Uw()) && (Kw(t, n), Yw(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, qw = function() {
  var e = Xw();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, xd = function() {
  var e = qw(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Zw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ei = function(e) {
  return parseInt(e || "", 10) || 0;
}, Qw = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ei(n), ei(o), ei(r)];
}, Jw = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zw;
  var t = Qw(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, eb = xd(), gn = "data-scroll-locked", tb = function(e, t, n, o) {
  var r = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ow, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(gn, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Oo, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Vo, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Oo, " .").concat(Oo, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Vo, " .").concat(Vo, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(gn, `] {
    `).concat(Vw, ": ").concat(a, `px;
  }
`);
}, Pl = function() {
  var e = parseInt(document.body.getAttribute(gn) || "0", 10);
  return isFinite(e) ? e : 0;
}, nb = function() {
  p.useEffect(function() {
    return document.body.setAttribute(gn, (Pl() + 1).toString()), function() {
      var e = Pl() - 1;
      e <= 0 ? document.body.removeAttribute(gn) : document.body.setAttribute(gn, e.toString());
    };
  }, []);
}, ob = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  nb();
  var i = p.useMemo(function() {
    return Jw(r);
  }, [r]);
  return p.createElement(eb, { styles: tb(i, !t, r, n ? "" : "!important") });
}, Li = !1;
if (typeof window < "u")
  try {
    var Co = Object.defineProperty({}, "passive", {
      get: function() {
        return Li = !0, !0;
      }
    });
    window.addEventListener("test", Co, Co), window.removeEventListener("test", Co, Co);
  } catch {
    Li = !1;
  }
var rn = Li ? { passive: !1 } : !1, rb = function(e) {
  return e.tagName === "TEXTAREA";
}, Sd = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rb(e) && n[t] === "visible")
  );
}, ib = function(e) {
  return Sd(e, "overflowY");
}, sb = function(e) {
  return Sd(e, "overflowX");
}, Tl = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Cd(e, o);
    if (r) {
      var i = Rd(e, o), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, ab = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, lb = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Cd = function(e, t) {
  return e === "v" ? ib(t) : sb(t);
}, Rd = function(e, t) {
  return e === "v" ? ab(t) : lb(t);
}, cb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ub = function(e, t, n, o, r) {
  var i = cb(e, window.getComputedStyle(t).direction), s = i * o, a = n.target, l = t.contains(a), c = !1, d = s > 0, u = 0, f = 0;
  do {
    if (!a)
      break;
    var h = Rd(e, a), m = h[0], g = h[1], y = h[2], w = g - y - i * m;
    (m || w) && Cd(e, a) && (u += w, f += m);
    var b = a.parentNode;
    a = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(f) < 1) && (c = !0), c;
}, Ro = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ml = function(e) {
  return [e.deltaX, e.deltaY];
}, Al = function(e) {
  return e && "current" in e ? e.current : e;
}, db = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, fb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, pb = 0, sn = [];
function hb(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), o = p.useRef(), r = p.useState(pb++)[0], i = p.useState(xd)[0], s = p.useRef(e);
  p.useEffect(function() {
    s.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var g = Fw([e.lockRef.current], (e.shards || []).map(Al), !0).filter(Boolean);
      return g.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), g.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = p.useCallback(function(g, y) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = Ro(g), b = n.current, x = "deltaX" in g ? g.deltaX : b[0] - w[0], S = "deltaY" in g ? g.deltaY : b[1] - w[1], R, E = g.target, T = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && T === "h" && E.type === "range")
      return !1;
    var C = window.getSelection(), I = C && C.anchorNode, A = I ? I === E || I.contains(E) : !1;
    if (A)
      return !1;
    var L = Tl(T, E);
    if (!L)
      return !0;
    if (L ? R = T : (R = T === "v" ? "h" : "v", L = Tl(T, E)), !L)
      return !1;
    if (!o.current && "changedTouches" in g && (x || S) && (o.current = R), !R)
      return !0;
    var W = o.current || R;
    return ub(W, y, g, W === "h" ? x : S);
  }, []), l = p.useCallback(function(g) {
    var y = g;
    if (!(!sn.length || sn[sn.length - 1] !== i)) {
      var w = "deltaY" in y ? Ml(y) : Ro(y), b = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && db(R.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var x = (s.current.shards || []).map(Al).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), S = x.length > 0 ? a(y, x[0]) : !s.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), c = p.useCallback(function(g, y, w, b) {
    var x = { name: g, delta: y, target: w, should: b, shadowParent: mb(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), d = p.useCallback(function(g) {
    n.current = Ro(g), o.current = void 0;
  }, []), u = p.useCallback(function(g) {
    c(g.type, Ml(g), g.target, a(g, e.lockRef.current));
  }, []), f = p.useCallback(function(g) {
    c(g.type, Ro(g), g.target, a(g, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return sn.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, rn), document.addEventListener("touchmove", l, rn), document.addEventListener("touchstart", d, rn), function() {
      sn = sn.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, rn), document.removeEventListener("touchmove", l, rn), document.removeEventListener("touchstart", d, rn);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    m ? p.createElement(i, { styles: fb(r) }) : null,
    h ? p.createElement(ob, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function mb(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const gb = Gw(bd, hb);
var Ar = p.forwardRef(function(e, t) {
  return p.createElement(Mr, it({}, e, { ref: t, sideCar: gb }));
});
Ar.classNames = Mr.classNames;
var vb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, an = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), Po = {}, ti = 0, Ed = function(e) {
  return e && (e.host || Ed(e.parentNode));
}, yb = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ed(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, wb = function(e, t, n, o) {
  var r = yb(t, Array.isArray(e) ? e : [e]);
  Po[n] || (Po[n] = /* @__PURE__ */ new WeakMap());
  var i = Po[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(r), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  r.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var h = f.getAttribute(o), m = h !== null && h !== "false", g = (an.get(f) || 0) + 1, y = (i.get(f) || 0) + 1;
          an.set(f, g), i.set(f, y), s.push(f), g === 1 && m && Eo.set(f, !0), y === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return d(t), a.clear(), ti++, function() {
    s.forEach(function(u) {
      var f = an.get(u) - 1, h = i.get(u) - 1;
      an.set(u, f), i.set(u, h), f || (Eo.has(u) || u.removeAttribute(o), Eo.delete(u)), h || u.removeAttribute(n);
    }), ti--, ti || (an = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), Po = {});
  };
}, Ls = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = vb(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), wb(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function bb(e) {
  const t = /* @__PURE__ */ xb(e), n = p.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = p.Children.toArray(i), l = a.find(Cb);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ v(t, { ...s, ref: r, children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ v(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function xb(e) {
  const t = p.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (p.isValidElement(r)) {
      const s = Eb(r), a = Rb(i, r.props);
      return r.type !== p.Fragment && (a.ref = o ? _e(o, s) : s), p.cloneElement(r, a);
    }
    return p.Children.count(r) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sb = Symbol("radix.slottable");
function Cb(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sb;
}
function Rb(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Eb(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Dr = "Dialog", [Pd] = yt(Dr), [Pb, tt] = Pd(Dr), Td = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !0
  } = e, a = p.useRef(null), l = p.useRef(null), [c, d] = An({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: Dr
  });
  return /* @__PURE__ */ v(
    Pb,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: xe(),
      titleId: xe(),
      descriptionId: xe(),
      open: c,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((u) => !u), [d]),
      modal: s,
      children: n
    }
  );
};
Td.displayName = Dr;
var Md = "DialogTrigger", Ad = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = tt(Md, n), i = ae(t, r.triggerRef);
    return /* @__PURE__ */ v(
      ie.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": zs(r.open),
        ...o,
        ref: i,
        onClick: U(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Ad.displayName = Md;
var $s = "DialogPortal", [Tb, Dd] = Pd($s, {
  forceMount: void 0
}), _d = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, i = tt($s, t);
  return /* @__PURE__ */ v(Tb, { scope: t, forceMount: n, children: p.Children.map(o, (s) => /* @__PURE__ */ v(Se, { present: n || i.open, children: /* @__PURE__ */ v(eo, { asChild: !0, container: r, children: s }) })) });
};
_d.displayName = $s;
var Jo = "DialogOverlay", kd = p.forwardRef(
  (e, t) => {
    const n = Dd(Jo, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, i = tt(Jo, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ v(Se, { present: o || i.open, children: /* @__PURE__ */ v(Ab, { ...r, ref: t }) }) : null;
  }
);
kd.displayName = Jo;
var Mb = /* @__PURE__ */ bb("DialogOverlay.RemoveScroll"), Ab = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = tt(Jo, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ v(Ar, { as: Mb, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ v(
        ie.div,
        {
          "data-state": zs(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), Zt = "DialogContent", Id = p.forwardRef(
  (e, t) => {
    const n = Dd(Zt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, i = tt(Zt, e.__scopeDialog);
    return /* @__PURE__ */ v(Se, { present: o || i.open, children: i.modal ? /* @__PURE__ */ v(Db, { ...r, ref: t }) : /* @__PURE__ */ v(_b, { ...r, ref: t }) });
  }
);
Id.displayName = Zt;
var Db = p.forwardRef(
  (e, t) => {
    const n = tt(Zt, e.__scopeDialog), o = p.useRef(null), r = ae(t, n.contentRef, o);
    return p.useEffect(() => {
      const i = o.current;
      if (i) return Ls(i);
    }, []), /* @__PURE__ */ v(
      Nd,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: U(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: U(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), _b = p.forwardRef(
  (e, t) => {
    const n = tt(Zt, e.__scopeDialog), o = p.useRef(!1), r = p.useRef(!1);
    return /* @__PURE__ */ v(
      Nd,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (o.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
        }
      }
    );
  }
), Nd = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, ...s } = e, a = tt(Zt, n), l = p.useRef(null), c = ae(t, l);
    return Vs(), /* @__PURE__ */ G(vn, { children: [
      /* @__PURE__ */ v(
        Tr,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ v(
            Qn,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": zs(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ G(vn, { children: [
        /* @__PURE__ */ v(kb, { titleId: a.titleId }),
        /* @__PURE__ */ v(Nb, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Bs = "DialogTitle", Fd = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = tt(Bs, n);
    return /* @__PURE__ */ v(ie.h2, { id: r.titleId, ...o, ref: t });
  }
);
Fd.displayName = Bs;
var Od = "DialogDescription", Vd = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = tt(Od, n);
    return /* @__PURE__ */ v(ie.p, { id: r.descriptionId, ...o, ref: t });
  }
);
Vd.displayName = Od;
var Ld = "DialogClose", $d = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = tt(Ld, n);
    return /* @__PURE__ */ v(
      ie.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: U(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
$d.displayName = Ld;
function zs(e) {
  return e ? "open" : "closed";
}
var Bd = "DialogTitleWarning", [$A, zd] = yv(Bd, {
  contentName: Zt,
  titleName: Bs,
  docsSlug: "dialog"
}), kb = ({ titleId: e }) => {
  const t = zd(Bd), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return p.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Ib = "DialogDescriptionWarning", Nb = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zd(Ib).contentName}}.`;
  return p.useEffect(() => {
    var i;
    const r = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, Hd = Td, Fb = Ad, jd = _d, Hs = kd, js = Id, Gd = Fd, Wd = Vd, Ud = $d;
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vb = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Dl = (e) => {
  const t = Vb(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Kd = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), Lb = (e) => {
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
var $b = {
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
const Bb = xs(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => Uo(
    "svg",
    {
      ref: l,
      ...$b,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Kd("lucide", r),
      ...!i && !Lb(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([c, d]) => Uo(c, d)),
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
const Le = (e, t) => {
  const n = xs(
    ({ className: o, ...r }, i) => Uo(Bb, {
      ref: i,
      iconNode: t,
      className: Kd(
        `lucide-${Ob(Dl(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = Dl(e), n;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Hb = Le("arrow-up-down", zb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Gb = Le("check", jb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Yd = Le("chevron-left", Wb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ub = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Gs = Le("chevron-right", Ub);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kb = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Yb = Le("circle", Kb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xb = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], qb = Le("command", Xb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], Qb = Le("funnel", Zb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jb = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], e0 = Le("monitor", Jb);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], n0 = Le("moon", t0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], r0 = Le("plus", o0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], s0 = Le("search", i0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], l0 = Le("sun", a0);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ws = Le("x", c0), u0 = Hd, BA = Fb, d0 = jd, zA = Ud, Xd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  Hs,
  {
    ref: n,
    className: Y(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Xd.displayName = Hs.displayName;
const qd = p.forwardRef(({ className: e, children: t, hideClose: n, ...o }, r) => /* @__PURE__ */ G(d0, { children: [
  /* @__PURE__ */ v(Xd, {}),
  /* @__PURE__ */ G(
    js,
    {
      ref: r,
      className: Y(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-lg",
        e
      ),
      ...o,
      children: [
        t,
        !n && /* @__PURE__ */ G(Ud, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ v(Ws, { className: "size-4" }),
          /* @__PURE__ */ v("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
qd.displayName = js.displayName;
const Zd = ({ className: e, ...t }) => /* @__PURE__ */ v(
  "div",
  {
    className: Y("flex flex-col gap-2 text-center sm:text-left", e),
    ...t
  }
);
Zd.displayName = "DialogHeader";
const f0 = ({ className: e, ...t }) => /* @__PURE__ */ v(
  "div",
  {
    className: Y(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      e
    ),
    ...t
  }
);
f0.displayName = "DialogFooter";
const Qd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  Gd,
  {
    ref: n,
    className: Y("text-lg leading-none font-semibold tracking-tight", e),
    ...t
  }
));
Qd.displayName = Gd.displayName;
const Jd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  Wd,
  {
    ref: n,
    className: Y("text-muted-foreground text-sm", e),
    ...t
  }
));
Jd.displayName = Wd.displayName;
// @__NO_SIDE_EFFECTS__
function _l(e) {
  const t = /* @__PURE__ */ p0(e), n = p.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = p.Children.toArray(i), l = a.find(m0);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ v(t, { ...s, ref: r, children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ v(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function p0(e) {
  const t = p.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (p.isValidElement(r)) {
      const s = v0(r), a = g0(i, r.props);
      return r.type !== p.Fragment && (a.ref = o ? _e(o, s) : s), p.cloneElement(r, a);
    }
    return p.Children.count(r) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var h0 = Symbol("radix.slottable");
function m0(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === h0;
}
function g0(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function v0(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ef(e) {
  const t = e + "CollectionProvider", [n, o] = yt(t), [r, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: y, children: w } = g, b = F.useRef(null), x = F.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v(r, { scope: y, itemMap: x, collectionRef: b, children: w });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ _l(a), c = F.forwardRef(
    (g, y) => {
      const { scope: w, children: b } = g, x = i(a, w), S = ae(y, x.collectionRef);
      return /* @__PURE__ */ v(l, { ref: S, children: b });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ _l(d), h = F.forwardRef(
    (g, y) => {
      const { scope: w, children: b, ...x } = g, S = F.useRef(null), R = ae(y, S), E = i(d, w);
      return F.useEffect(() => (E.itemMap.set(S, { ref: S, ...x }), () => void E.itemMap.delete(S))), /* @__PURE__ */ v(f, { [u]: "", ref: R, children: b });
    }
  );
  h.displayName = d;
  function m(g) {
    const y = i(e + "CollectionConsumer", g);
    return F.useCallback(() => {
      const b = y.collectionRef.current;
      if (!b) return [];
      const x = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (E, T) => x.indexOf(E.ref.current) - x.indexOf(T.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: h },
    m,
    o
  ];
}
var y0 = p.createContext(void 0);
function Us(e) {
  const t = p.useContext(y0);
  return e || t || "ltr";
}
var ni = "rovingFocusGroup.onEntryFocus", w0 = { bubbles: !1, cancelable: !0 }, oo = "RovingFocusGroup", [$i, tf, b0] = ef(oo), [x0, nf] = yt(
  oo,
  [b0]
), [S0, C0] = x0(oo), of = p.forwardRef(
  (e, t) => /* @__PURE__ */ v($i.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ v($i.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ v(R0, { ...e, ref: t }) }) })
);
of.displayName = oo;
var R0 = p.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, f = p.useRef(null), h = ae(t, f), m = Us(i), [g, y] = An({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: oo
  }), [w, b] = p.useState(!1), x = ve(c), S = tf(n), R = p.useRef(!1), [E, T] = p.useState(0);
  return p.useEffect(() => {
    const C = f.current;
    if (C)
      return C.addEventListener(ni, x), () => C.removeEventListener(ni, x);
  }, [x]), /* @__PURE__ */ v(
    S0,
    {
      scope: n,
      orientation: o,
      dir: m,
      loop: r,
      currentTabStopId: g,
      onItemFocus: p.useCallback(
        (C) => y(C),
        [y]
      ),
      onItemShiftTab: p.useCallback(() => b(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => T((C) => C + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => T((C) => C - 1),
        []
      ),
      children: /* @__PURE__ */ v(
        ie.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": o,
          ...u,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: U(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: U(e.onFocus, (C) => {
            const I = !R.current;
            if (C.target === C.currentTarget && I && !w) {
              const A = new CustomEvent(ni, w0);
              if (C.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                const L = S().filter((O) => O.focusable), W = L.find((O) => O.active), q = L.find((O) => O.id === g), J = [W, q, ...L].filter(
                  Boolean
                ).map((O) => O.ref.current);
                af(J, d);
              }
            }
            R.current = !1;
          }),
          onBlur: U(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), rf = "RovingFocusGroupItem", sf = p.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = xe(), c = i || l, d = C0(rf, n), u = d.currentTabStopId === c, f = tf(n), { onFocusableItemAdd: h, onFocusableItemRemove: m, currentTabStopId: g } = d;
    return p.useEffect(() => {
      if (o)
        return h(), () => m();
    }, [o, h, m]), /* @__PURE__ */ v(
      $i.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ v(
          ie.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: U(e.onMouseDown, (y) => {
              o ? d.onItemFocus(c) : y.preventDefault();
            }),
            onFocus: U(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: U(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = T0(y, d.orientation, d.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let x = f().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") x.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && x.reverse();
                  const S = x.indexOf(y.currentTarget);
                  x = d.loop ? M0(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => af(x));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: u, hasTabStop: g != null }) : s
          }
        )
      }
    );
  }
);
sf.displayName = rf;
var E0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function P0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function T0(e, t, n) {
  const o = P0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return E0[o];
}
function af(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function M0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var A0 = of, D0 = sf;
// @__NO_SIDE_EFFECTS__
function _0(e) {
  const t = /* @__PURE__ */ k0(e), n = p.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = p.Children.toArray(i), l = a.find(N0);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ v(t, { ...s, ref: r, children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ v(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function k0(e) {
  const t = p.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (p.isValidElement(r)) {
      const s = O0(r), a = F0(i, r.props);
      return r.type !== p.Fragment && (a.ref = o ? _e(o, s) : s), p.cloneElement(r, a);
    }
    return p.Children.count(r) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var I0 = Symbol("radix.slottable");
function N0(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === I0;
}
function F0(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function O0(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Bi = ["Enter", " "], V0 = ["ArrowDown", "PageUp", "Home"], lf = ["ArrowUp", "PageDown", "End"], L0 = [...V0, ...lf], $0 = {
  ltr: [...Bi, "ArrowRight"],
  rtl: [...Bi, "ArrowLeft"]
}, B0 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ro = "Menu", [Un, z0, H0] = ef(ro), [en, cf] = yt(ro, [
  H0,
  Mn,
  nf
]), io = Mn(), uf = nf(), [df, Ft] = en(ro), [j0, so] = en(ro), ff = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, a = io(t), [l, c] = p.useState(null), d = p.useRef(!1), u = ve(i), f = Us(r);
  return p.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ v(br, { ...a, children: /* @__PURE__ */ v(
    df,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ v(
        j0,
        {
          scope: t,
          onClose: p.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: f,
          modal: s,
          children: o
        }
      )
    }
  ) });
};
ff.displayName = ro;
var G0 = "MenuAnchor", Ks = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = io(n);
    return /* @__PURE__ */ v(xr, { ...r, ...o, ref: t });
  }
);
Ks.displayName = G0;
var Ys = "MenuPortal", [W0, pf] = en(Ys, {
  forceMount: void 0
}), hf = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = Ft(Ys, t);
  return /* @__PURE__ */ v(W0, { scope: t, forceMount: n, children: /* @__PURE__ */ v(Se, { present: n || i.open, children: /* @__PURE__ */ v(eo, { asChild: !0, container: r, children: o }) }) });
};
hf.displayName = Ys;
var He = "MenuContent", [U0, Xs] = en(He), mf = p.forwardRef(
  (e, t) => {
    const n = pf(He, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = Ft(He, e.__scopeMenu), s = so(He, e.__scopeMenu);
    return /* @__PURE__ */ v(Un.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ v(Se, { present: o || i.open, children: /* @__PURE__ */ v(Un.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ v(K0, { ...r, ref: t }) : /* @__PURE__ */ v(Y0, { ...r, ref: t }) }) }) });
  }
), K0 = p.forwardRef(
  (e, t) => {
    const n = Ft(He, e.__scopeMenu), o = p.useRef(null), r = ae(t, o);
    return p.useEffect(() => {
      const i = o.current;
      if (i) return Ls(i);
    }, []), /* @__PURE__ */ v(
      qs,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: U(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Y0 = p.forwardRef((e, t) => {
  const n = Ft(He, e.__scopeMenu);
  return /* @__PURE__ */ v(
    qs,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), X0 = /* @__PURE__ */ _0("MenuContent.ScrollLock"), qs = p.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: h,
      disableOutsideScroll: m,
      ...g
    } = e, y = Ft(He, n), w = so(He, n), b = io(n), x = uf(n), S = z0(n), [R, E] = p.useState(null), T = p.useRef(null), C = ae(t, T, y.onContentChange), I = p.useRef(0), A = p.useRef(""), L = p.useRef(0), W = p.useRef(null), q = p.useRef("right"), K = p.useRef(0), J = m ? Ar : p.Fragment, O = m ? { as: X0, allowPinchZoom: !0 } : void 0, D = (k) => {
      var te, ee;
      const _ = A.current + k, ne = S().filter((X) => !X.disabled), M = document.activeElement, V = (te = ne.find((X) => X.ref.current === M)) == null ? void 0 : te.textValue, $ = ne.map((X) => X.textValue), N = ax($, _, V), B = (ee = ne.find((X) => X.textValue === N)) == null ? void 0 : ee.ref.current;
      (function X(pe) {
        A.current = pe, window.clearTimeout(I.current), pe !== "" && (I.current = window.setTimeout(() => X(""), 1e3));
      })(_), B && setTimeout(() => B.focus());
    };
    p.useEffect(() => () => window.clearTimeout(I.current), []), Vs();
    const P = p.useCallback((k) => {
      var ne, M;
      return q.current === ((ne = W.current) == null ? void 0 : ne.side) && cx(k, (M = W.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ v(
      U0,
      {
        scope: n,
        searchRef: A,
        onItemEnter: p.useCallback(
          (k) => {
            P(k) && k.preventDefault();
          },
          [P]
        ),
        onItemLeave: p.useCallback(
          (k) => {
            var _;
            P(k) || ((_ = T.current) == null || _.focus(), E(null));
          },
          [P]
        ),
        onTriggerLeave: p.useCallback(
          (k) => {
            P(k) && k.preventDefault();
          },
          [P]
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: p.useCallback((k) => {
          W.current = k;
        }, []),
        children: /* @__PURE__ */ v(J, { ...O, children: /* @__PURE__ */ v(
          Tr,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: U(i, (k) => {
              var _;
              k.preventDefault(), (_ = T.current) == null || _.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ v(
              Qn,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: f,
                onDismiss: h,
                children: /* @__PURE__ */ v(
                  A0,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: U(l, (k) => {
                      w.isUsingKeyboardRef.current || k.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ v(
                      Is,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": kf(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...g,
                        ref: C,
                        style: { outline: "none", ...g.style },
                        onKeyDown: U(g.onKeyDown, (k) => {
                          const ne = k.target.closest("[data-radix-menu-content]") === k.currentTarget, M = k.ctrlKey || k.altKey || k.metaKey, V = k.key.length === 1;
                          ne && (k.key === "Tab" && k.preventDefault(), !M && V && D(k.key));
                          const $ = T.current;
                          if (k.target !== $ || !L0.includes(k.key)) return;
                          k.preventDefault();
                          const B = S().filter((te) => !te.disabled).map((te) => te.ref.current);
                          lf.includes(k.key) && B.reverse(), ix(B);
                        }),
                        onBlur: U(e.onBlur, (k) => {
                          k.currentTarget.contains(k.target) || (window.clearTimeout(I.current), A.current = "");
                        }),
                        onPointerMove: U(
                          e.onPointerMove,
                          Kn((k) => {
                            const _ = k.target, ne = K.current !== k.clientX;
                            if (k.currentTarget.contains(_) && ne) {
                              const M = k.clientX > K.current ? "right" : "left";
                              q.current = M, K.current = k.clientX;
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
mf.displayName = He;
var q0 = "MenuGroup", Zs = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ v(ie.div, { role: "group", ...o, ref: t });
  }
);
Zs.displayName = q0;
var Z0 = "MenuLabel", gf = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ v(ie.div, { ...o, ref: t });
  }
);
gf.displayName = Z0;
var er = "MenuItem", kl = "menu.itemSelect", _r = p.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, i = p.useRef(null), s = so(er, e.__scopeMenu), a = Xs(er, e.__scopeMenu), l = ae(t, i), c = p.useRef(!1), d = () => {
      const u = i.current;
      if (!n && u) {
        const f = new CustomEvent(kl, { bubbles: !0, cancelable: !0 });
        u.addEventListener(kl, (h) => o == null ? void 0 : o(h), { once: !0 }), Vu(u, f), f.defaultPrevented ? c.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ v(
      vf,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: U(e.onClick, d),
        onPointerDown: (u) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, u), c.current = !0;
        },
        onPointerUp: U(e.onPointerUp, (u) => {
          var f;
          c.current || (f = u.currentTarget) == null || f.click();
        }),
        onKeyDown: U(e.onKeyDown, (u) => {
          const f = a.searchRef.current !== "";
          n || f && u.key === " " || Bi.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
_r.displayName = er;
var vf = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...i } = e, s = Xs(er, n), a = uf(n), l = p.useRef(null), c = ae(t, l), [d, u] = p.useState(!1), [f, h] = p.useState("");
    return p.useEffect(() => {
      const m = l.current;
      m && h((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ v(
      Un.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? f,
        children: /* @__PURE__ */ v(D0, { asChild: !0, ...a, focusable: !o, children: /* @__PURE__ */ v(
          ie.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: U(
              e.onPointerMove,
              Kn((m) => {
                o ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: U(
              e.onPointerLeave,
              Kn((m) => s.onItemLeave(m))
            ),
            onFocus: U(e.onFocus, () => u(!0)),
            onBlur: U(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Q0 = "MenuCheckboxItem", yf = p.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ v(Cf, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ v(
      _r,
      {
        role: "menuitemcheckbox",
        "aria-checked": tr(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": ea(n),
        onSelect: U(
          r.onSelect,
          () => o == null ? void 0 : o(tr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
yf.displayName = Q0;
var wf = "MenuRadioGroup", [J0, ex] = en(
  wf,
  { value: void 0, onValueChange: () => {
  } }
), bf = p.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, i = ve(o);
    return /* @__PURE__ */ v(J0, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ v(Zs, { ...r, ref: t }) });
  }
);
bf.displayName = wf;
var xf = "MenuRadioItem", Sf = p.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = ex(xf, e.__scopeMenu), i = n === r.value;
    return /* @__PURE__ */ v(Cf, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ v(
      _r,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...o,
        ref: t,
        "data-state": ea(i),
        onSelect: U(
          o.onSelect,
          () => {
            var s;
            return (s = r.onValueChange) == null ? void 0 : s.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Sf.displayName = xf;
var Qs = "MenuItemIndicator", [Cf, tx] = en(
  Qs,
  { checked: !1 }
), Rf = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, i = tx(Qs, n);
    return /* @__PURE__ */ v(
      Se,
      {
        present: o || tr(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ v(
          ie.span,
          {
            ...r,
            ref: t,
            "data-state": ea(i.checked)
          }
        )
      }
    );
  }
);
Rf.displayName = Qs;
var nx = "MenuSeparator", Ef = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ v(
      ie.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Ef.displayName = nx;
var ox = "MenuArrow", Pf = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = io(n);
    return /* @__PURE__ */ v(Ns, { ...r, ...o, ref: t });
  }
);
Pf.displayName = ox;
var Js = "MenuSub", [rx, Tf] = en(Js), Mf = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, i = Ft(Js, t), s = io(t), [a, l] = p.useState(null), [c, d] = p.useState(null), u = ve(r);
  return p.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ v(br, { ...s, children: /* @__PURE__ */ v(
    df,
    {
      scope: t,
      open: o,
      onOpenChange: u,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ v(
        rx,
        {
          scope: t,
          contentId: xe(),
          triggerId: xe(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Mf.displayName = Js;
var Ln = "MenuSubTrigger", Af = p.forwardRef(
  (e, t) => {
    const n = Ft(Ln, e.__scopeMenu), o = so(Ln, e.__scopeMenu), r = Tf(Ln, e.__scopeMenu), i = Xs(Ln, e.__scopeMenu), s = p.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, c = { __scopeMenu: e.__scopeMenu }, d = p.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return p.useEffect(() => d, [d]), p.useEffect(() => {
      const u = a.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [a, l]), /* @__PURE__ */ v(Ks, { asChild: !0, ...c, children: /* @__PURE__ */ v(
      vf,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": kf(n.open),
        ...e,
        ref: _e(t, r.onTriggerChange),
        onClick: (u) => {
          var f;
          (f = e.onClick) == null || f.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: U(
          e.onPointerMove,
          Kn((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: U(
          e.onPointerLeave,
          Kn((u) => {
            var h, m;
            d();
            const f = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (f) {
              const g = (m = n.content) == null ? void 0 : m.dataset.side, y = g === "right", w = y ? -5 : 5, b = f[y ? "left" : "right"], x = f[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + w, y: u.clientY },
                  { x: b, y: f.top },
                  { x, y: f.top },
                  { x, y: f.bottom },
                  { x: b, y: f.bottom }
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
        onKeyDown: U(e.onKeyDown, (u) => {
          var h;
          const f = i.searchRef.current !== "";
          e.disabled || f && u.key === " " || $0[o.dir].includes(u.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Af.displayName = Ln;
var Df = "MenuSubContent", _f = p.forwardRef(
  (e, t) => {
    const n = pf(He, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = Ft(He, e.__scopeMenu), s = so(He, e.__scopeMenu), a = Tf(Df, e.__scopeMenu), l = p.useRef(null), c = ae(t, l);
    return /* @__PURE__ */ v(Un.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ v(Se, { present: o || i.open, children: /* @__PURE__ */ v(Un.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ v(
      qs,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...r,
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
        onFocusOutside: U(e.onFocusOutside, (d) => {
          d.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: U(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: U(e.onKeyDown, (d) => {
          var h;
          const u = d.currentTarget.contains(d.target), f = B0[s.dir].includes(d.key);
          u && f && (i.onOpenChange(!1), (h = a.trigger) == null || h.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
_f.displayName = Df;
function kf(e) {
  return e ? "open" : "closed";
}
function tr(e) {
  return e === "indeterminate";
}
function ea(e) {
  return tr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ix(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function sx(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function ax(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = sx(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function lx(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, d = a.y, u = l.x, f = l.y;
    d > o != f > o && n < (u - c) * (o - d) / (f - d) + c && (r = !r);
  }
  return r;
}
function cx(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return lx(n, t);
}
function Kn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ux = ff, dx = Ks, fx = hf, px = mf, hx = Zs, mx = gf, gx = _r, vx = yf, yx = bf, wx = Sf, bx = Rf, xx = Ef, Sx = Pf, Cx = Mf, Rx = Af, Ex = _f, kr = "DropdownMenu", [Px] = yt(
  kr,
  [cf]
), Ce = cf(), [Tx, If] = Px(kr), Nf = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = Ce(t), c = p.useRef(null), [d, u] = An({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: kr
  });
  return /* @__PURE__ */ v(
    Tx,
    {
      scope: t,
      triggerId: xe(),
      triggerRef: c,
      contentId: xe(),
      open: d,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((f) => !f), [u]),
      modal: a,
      children: /* @__PURE__ */ v(ux, { ...l, open: d, onOpenChange: u, dir: o, modal: a, children: n })
    }
  );
};
Nf.displayName = kr;
var Ff = "DropdownMenuTrigger", Of = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, i = If(Ff, n), s = Ce(n);
    return /* @__PURE__ */ v(dx, { asChild: !0, ...s, children: /* @__PURE__ */ v(
      ie.button,
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
        ref: _e(t, i.triggerRef),
        onPointerDown: U(e.onPointerDown, (a) => {
          !o && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: U(e.onKeyDown, (a) => {
          o || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
Of.displayName = Ff;
var Mx = "DropdownMenuPortal", Vf = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = Ce(t);
  return /* @__PURE__ */ v(fx, { ...o, ...n });
};
Vf.displayName = Mx;
var Lf = "DropdownMenuContent", $f = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = If(Lf, n), i = Ce(n), s = p.useRef(!1);
    return /* @__PURE__ */ v(
      px,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...i,
        ...o,
        ref: t,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = r.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: U(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!r.modal || d) && (s.current = !0);
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
$f.displayName = Lf;
var Ax = "DropdownMenuGroup", Bf = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
    return /* @__PURE__ */ v(hx, { ...r, ...o, ref: t });
  }
);
Bf.displayName = Ax;
var Dx = "DropdownMenuLabel", zf = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
    return /* @__PURE__ */ v(mx, { ...r, ...o, ref: t });
  }
);
zf.displayName = Dx;
var _x = "DropdownMenuItem", Hf = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
    return /* @__PURE__ */ v(gx, { ...r, ...o, ref: t });
  }
);
Hf.displayName = _x;
var kx = "DropdownMenuCheckboxItem", jf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(vx, { ...r, ...o, ref: t });
});
jf.displayName = kx;
var Ix = "DropdownMenuRadioGroup", Gf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(yx, { ...r, ...o, ref: t });
});
Gf.displayName = Ix;
var Nx = "DropdownMenuRadioItem", Wf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(wx, { ...r, ...o, ref: t });
});
Wf.displayName = Nx;
var Fx = "DropdownMenuItemIndicator", Uf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(bx, { ...r, ...o, ref: t });
});
Uf.displayName = Fx;
var Ox = "DropdownMenuSeparator", Kf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(xx, { ...r, ...o, ref: t });
});
Kf.displayName = Ox;
var Vx = "DropdownMenuArrow", Lx = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
    return /* @__PURE__ */ v(Sx, { ...r, ...o, ref: t });
  }
);
Lx.displayName = Vx;
var $x = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: i } = e, s = Ce(t), [a, l] = An({
    prop: o,
    defaultProp: i ?? !1,
    onChange: r,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ v(Cx, { ...s, open: a, onOpenChange: l, children: n });
}, Bx = "DropdownMenuSubTrigger", Yf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(Rx, { ...r, ...o, ref: t });
});
Yf.displayName = Bx;
var zx = "DropdownMenuSubContent", Xf = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Ce(n);
  return /* @__PURE__ */ v(
    Ex,
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
Xf.displayName = zx;
var Hx = Nf, jx = Of, qf = Vf, Zf = $f, Gx = Bf, Qf = zf, Jf = Hf, ep = jf, Wx = Gf, tp = Wf, np = Uf, op = Kf, Ux = $x, rp = Yf, ip = Xf;
const Kx = Hx, Yx = jx, HA = Gx, jA = qf, GA = Ux, WA = Wx, Xx = p.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ G(
  rp,
  {
    ref: r,
    className: Y(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ v(Gs, { className: "ml-auto" })
    ]
  }
));
Xx.displayName = rp.displayName;
const qx = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  ip,
  {
    ref: n,
    className: Y(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      e
    ),
    ...t
  }
));
qx.displayName = ip.displayName;
const sp = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ v(qf, { children: /* @__PURE__ */ v(
  Zf,
  {
    ref: o,
    sideOffset: t,
    className: Y(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      e
    ),
    ...n
  }
) }));
sp.displayName = Zf.displayName;
const ap = p.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ v(
  Jf,
  {
    ref: o,
    className: Y(
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t && "pl-8",
      e
    ),
    ...n
  }
));
ap.displayName = Jf.displayName;
const Zx = p.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ G(
  ep,
  {
    ref: r,
    className: Y(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ v("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ v(np, { children: /* @__PURE__ */ v(Gb, { className: "size-4" }) }) }),
      t
    ]
  }
));
Zx.displayName = ep.displayName;
const Qx = p.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ G(
  tp,
  {
    ref: o,
    className: Y(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ v(np, { children: /* @__PURE__ */ v(Yb, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
Qx.displayName = tp.displayName;
const lp = p.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ v(
  Qf,
  {
    ref: o,
    className: Y(
      "px-2 py-1.5 text-xs font-medium text-muted-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
lp.displayName = Qf.displayName;
const cp = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  op,
  {
    ref: n,
    className: Y("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
cp.displayName = op.displayName;
const Jx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ v(
  "span",
  {
    className: Y("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Jx.displayName = "DropdownMenuShortcut";
// @__NO_SIDE_EFFECTS__
function eS(e) {
  const t = /* @__PURE__ */ tS(e), n = p.forwardRef((o, r) => {
    const { children: i, ...s } = o, a = p.Children.toArray(i), l = a.find(oS);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ v(t, { ...s, ref: r, children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ v(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function tS(e) {
  const t = p.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (p.isValidElement(r)) {
      const s = iS(r), a = rS(i, r.props);
      return r.type !== p.Fragment && (a.ref = o ? _e(o, s) : s), p.cloneElement(r, a);
    }
    return p.Children.count(r) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var nS = Symbol("radix.slottable");
function oS(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === nS;
}
function rS(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function iS(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ir = "Popover", [up] = yt(Ir, [
  Mn
]), ao = Mn(), [sS, Ot] = up(Ir), dp = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !1
  } = e, a = ao(t), l = p.useRef(null), [c, d] = p.useState(!1), [u, f] = An({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: Ir
  });
  return /* @__PURE__ */ v(br, { ...a, children: /* @__PURE__ */ v(
    sS,
    {
      scope: t,
      contentId: xe(),
      triggerRef: l,
      open: u,
      onOpenChange: f,
      onOpenToggle: p.useCallback(() => f((h) => !h), [f]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: p.useCallback(() => d(!0), []),
      onCustomAnchorRemove: p.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
dp.displayName = Ir;
var fp = "PopoverAnchor", pp = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Ot(fp, n), i = ao(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = r;
    return p.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ v(xr, { ...i, ...o, ref: t });
  }
);
pp.displayName = fp;
var hp = "PopoverTrigger", mp = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Ot(hp, n), i = ao(n), s = ae(t, r.triggerRef), a = /* @__PURE__ */ v(
      ie.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": bp(r.open),
        ...o,
        ref: s,
        onClick: U(e.onClick, r.onOpenToggle)
      }
    );
    return r.hasCustomAnchor ? a : /* @__PURE__ */ v(xr, { asChild: !0, ...i, children: a });
  }
);
mp.displayName = hp;
var ta = "PopoverPortal", [aS, lS] = up(ta, {
  forceMount: void 0
}), gp = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, i = Ot(ta, t);
  return /* @__PURE__ */ v(aS, { scope: t, forceMount: n, children: /* @__PURE__ */ v(Se, { present: n || i.open, children: /* @__PURE__ */ v(eo, { asChild: !0, container: r, children: o }) }) });
};
gp.displayName = ta;
var xn = "PopoverContent", vp = p.forwardRef(
  (e, t) => {
    const n = lS(xn, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, i = Ot(xn, e.__scopePopover);
    return /* @__PURE__ */ v(Se, { present: o || i.open, children: i.modal ? /* @__PURE__ */ v(uS, { ...r, ref: t }) : /* @__PURE__ */ v(dS, { ...r, ref: t }) });
  }
);
vp.displayName = xn;
var cS = /* @__PURE__ */ eS("PopoverContent.RemoveScroll"), uS = p.forwardRef(
  (e, t) => {
    const n = Ot(xn, e.__scopePopover), o = p.useRef(null), r = ae(t, o), i = p.useRef(!1);
    return p.useEffect(() => {
      const s = o.current;
      if (s) return Ls(s);
    }, []), /* @__PURE__ */ v(Ar, { as: cS, allowPinchZoom: !0, children: /* @__PURE__ */ v(
      yp,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: U(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: U(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), dS = p.forwardRef(
  (e, t) => {
    const n = Ot(xn, e.__scopePopover), o = p.useRef(!1), r = p.useRef(!1);
    return /* @__PURE__ */ v(
      yp,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (o.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
        }
      }
    );
  }
), yp = p.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: o,
      onOpenAutoFocus: r,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: d,
      ...u
    } = e, f = Ot(xn, n), h = ao(n);
    return Vs(), /* @__PURE__ */ v(
      Tr,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: r,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ v(
          Qn,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ v(
              Is,
              {
                "data-state": bp(f.open),
                role: "dialog",
                id: f.contentId,
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
), wp = "PopoverClose", fS = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = Ot(wp, n);
    return /* @__PURE__ */ v(
      ie.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: U(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
fS.displayName = wp;
var pS = "PopoverArrow", hS = p.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...o } = e, r = ao(n);
    return /* @__PURE__ */ v(Ns, { ...r, ...o, ref: t });
  }
);
hS.displayName = pS;
function bp(e) {
  return e ? "open" : "closed";
}
var mS = dp, gS = pp, vS = mp, yS = gp, xp = vp;
const wS = mS, bS = vS, UA = gS, Sp = p.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ v(yS, { children: /* @__PURE__ */ v(
  xp,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: Y(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
      e
    ),
    ...o
  }
) }));
Sp.displayName = xp.displayName;
function xS(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function SS(e, t) {
  return p.useReducer((n, o) => t[n][o] ?? n, e);
}
var na = "ScrollArea", [Cp] = yt(na), [CS, Ge] = Cp(na), Rp = p.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: r,
      scrollHideDelay: i = 600,
      ...s
    } = e, [a, l] = p.useState(null), [c, d] = p.useState(null), [u, f] = p.useState(null), [h, m] = p.useState(null), [g, y] = p.useState(null), [w, b] = p.useState(0), [x, S] = p.useState(0), [R, E] = p.useState(!1), [T, C] = p.useState(!1), I = ae(t, (L) => l(L)), A = Us(r);
    return /* @__PURE__ */ v(
      CS,
      {
        scope: n,
        type: o,
        dir: A,
        scrollHideDelay: i,
        scrollArea: a,
        viewport: c,
        onViewportChange: d,
        content: u,
        onContentChange: f,
        scrollbarX: h,
        onScrollbarXChange: m,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: E,
        scrollbarY: g,
        onScrollbarYChange: y,
        scrollbarYEnabled: T,
        onScrollbarYEnabledChange: C,
        onCornerWidthChange: b,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ v(
          ie.div,
          {
            dir: A,
            ...s,
            ref: I,
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
Rp.displayName = na;
var Ep = "ScrollAreaViewport", Pp = p.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...i } = e, s = Ge(Ep, n), a = p.useRef(null), l = ae(t, a, s.onViewportChange);
    return /* @__PURE__ */ G(vn, { children: [
      /* @__PURE__ */ v(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ v(
        ie.div,
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
          children: /* @__PURE__ */ v("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
Pp.displayName = Ep;
var dt = "ScrollAreaScrollbar", oa = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Ge(dt, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = r, a = e.orientation === "horizontal";
    return p.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), r.type === "hover" ? /* @__PURE__ */ v(RS, { ...o, ref: t, forceMount: n }) : r.type === "scroll" ? /* @__PURE__ */ v(ES, { ...o, ref: t, forceMount: n }) : r.type === "auto" ? /* @__PURE__ */ v(Tp, { ...o, ref: t, forceMount: n }) : r.type === "always" ? /* @__PURE__ */ v(ra, { ...o, ref: t }) : null;
  }
);
oa.displayName = dt;
var RS = p.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Ge(dt, e.__scopeScrollArea), [i, s] = p.useState(!1);
  return p.useEffect(() => {
    const a = r.scrollArea;
    let l = 0;
    if (a) {
      const c = () => {
        window.clearTimeout(l), s(!0);
      }, d = () => {
        l = window.setTimeout(() => s(!1), r.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d);
      };
    }
  }, [r.scrollArea, r.scrollHideDelay]), /* @__PURE__ */ v(Se, { present: n || i, children: /* @__PURE__ */ v(
    Tp,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), ES = p.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Ge(dt, e.__scopeScrollArea), i = e.orientation === "horizontal", s = Fr(() => l("SCROLL_END"), 100), [a, l] = SS("hidden", {
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
  return p.useEffect(() => {
    if (a === "idle") {
      const c = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [a, r.scrollHideDelay, l]), p.useEffect(() => {
    const c = r.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (c) {
      let u = c[d];
      const f = () => {
        const h = c[d];
        u !== h && (l("SCROLL"), s()), u = h;
      };
      return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
    }
  }, [r.viewport, i, l, s]), /* @__PURE__ */ v(Se, { present: n || a !== "hidden", children: /* @__PURE__ */ v(
    ra,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: U(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: U(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Tp = p.forwardRef((e, t) => {
  const n = Ge(dt, e.__scopeScrollArea), { forceMount: o, ...r } = e, [i, s] = p.useState(!1), a = e.orientation === "horizontal", l = Fr(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(a ? c : d);
    }
  }, 10);
  return Sn(n.viewport, l), Sn(n.content, l), /* @__PURE__ */ v(Se, { present: o || i, children: /* @__PURE__ */ v(
    ra,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), ra = p.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = Ge(dt, e.__scopeScrollArea), i = p.useRef(null), s = p.useRef(0), [a, l] = p.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = kp(a.viewport, a.content), d = {
    ...o,
    sizes: a,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (f) => i.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function u(f, h) {
    return _S(f, s.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ v(
    PS,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && i.current) {
          const f = r.viewport.scrollLeft, h = Il(f, a, r.dir);
          i.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        r.viewport && (r.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        r.viewport && (r.viewport.scrollLeft = u(f, r.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ v(
    TS,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && i.current) {
          const f = r.viewport.scrollTop, h = Il(f, a);
          i.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (f) => {
        r.viewport && (r.viewport.scrollTop = f);
      },
      onDragScroll: (f) => {
        r.viewport && (r.viewport.scrollTop = u(f));
      }
    }
  ) : null;
}), PS = p.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, i = Ge(dt, e.__scopeScrollArea), [s, a] = p.useState(), l = p.useRef(null), c = ae(t, l, i.onScrollbarXChange);
  return p.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ v(
    Ap,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Nr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const f = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(f), Np(f, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && o({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: or(s.paddingLeft),
            paddingEnd: or(s.paddingRight)
          }
        });
      }
    }
  );
}), TS = p.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, i = Ge(dt, e.__scopeScrollArea), [s, a] = p.useState(), l = p.useRef(null), c = ae(t, l, i.onScrollbarYChange);
  return p.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ v(
    Ap,
    {
      "data-orientation": "vertical",
      ...r,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Nr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, u) => {
        if (i.viewport) {
          const f = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(f), Np(f, u) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && i.viewport && s && o({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: or(s.paddingTop),
            paddingEnd: or(s.paddingBottom)
          }
        });
      }
    }
  );
}), [MS, Mp] = Cp(dt), Ap = p.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: o,
    hasThumb: r,
    onThumbChange: i,
    onThumbPointerUp: s,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: u,
    ...f
  } = e, h = Ge(dt, n), [m, g] = p.useState(null), y = ae(t, (I) => g(I)), w = p.useRef(null), b = p.useRef(""), x = h.viewport, S = o.content - o.viewport, R = ve(d), E = ve(l), T = Fr(u, 10);
  function C(I) {
    if (w.current) {
      const A = I.clientX - w.current.left, L = I.clientY - w.current.top;
      c({ x: A, y: L });
    }
  }
  return p.useEffect(() => {
    const I = (A) => {
      const L = A.target;
      (m == null ? void 0 : m.contains(L)) && R(A, S);
    };
    return document.addEventListener("wheel", I, { passive: !1 }), () => document.removeEventListener("wheel", I, { passive: !1 });
  }, [x, m, S, R]), p.useEffect(E, [o, E]), Sn(m, T), Sn(h.content, T), /* @__PURE__ */ v(
    MS,
    {
      scope: n,
      scrollbar: m,
      hasThumb: r,
      onThumbChange: ve(i),
      onThumbPointerUp: ve(s),
      onThumbPositionChange: E,
      onThumbPointerDown: ve(a),
      children: /* @__PURE__ */ v(
        ie.div,
        {
          ...f,
          ref: y,
          style: { position: "absolute", ...f.style },
          onPointerDown: U(e.onPointerDown, (I) => {
            I.button === 0 && (I.target.setPointerCapture(I.pointerId), w.current = m.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(I));
          }),
          onPointerMove: U(e.onPointerMove, C),
          onPointerUp: U(e.onPointerUp, (I) => {
            const A = I.target;
            A.hasPointerCapture(I.pointerId) && A.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = b.current, h.viewport && (h.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), nr = "ScrollAreaThumb", Dp = p.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Mp(nr, e.__scopeScrollArea);
    return /* @__PURE__ */ v(Se, { present: n || r.hasThumb, children: /* @__PURE__ */ v(AS, { ref: t, ...o }) });
  }
), AS = p.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e, i = Ge(nr, n), s = Mp(nr, n), { onThumbPositionChange: a } = s, l = ae(
      t,
      (u) => s.onThumbChange(u)
    ), c = p.useRef(void 0), d = Fr(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return p.useEffect(() => {
      const u = i.viewport;
      if (u) {
        const f = () => {
          if (d(), !c.current) {
            const h = kS(u, a);
            c.current = h, a();
          }
        };
        return a(), u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f);
      }
    }, [i.viewport, d, a]), /* @__PURE__ */ v(
      ie.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: U(e.onPointerDownCapture, (u) => {
          const h = u.target.getBoundingClientRect(), m = u.clientX - h.left, g = u.clientY - h.top;
          s.onThumbPointerDown({ x: m, y: g });
        }),
        onPointerUp: U(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
Dp.displayName = nr;
var ia = "ScrollAreaCorner", _p = p.forwardRef(
  (e, t) => {
    const n = Ge(ia, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ v(DS, { ...e, ref: t }) : null;
  }
);
_p.displayName = ia;
var DS = p.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, r = Ge(ia, n), [i, s] = p.useState(0), [a, l] = p.useState(0), c = !!(i && a);
  return Sn(r.scrollbarX, () => {
    var u;
    const d = ((u = r.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    r.onCornerHeightChange(d), l(d);
  }), Sn(r.scrollbarY, () => {
    var u;
    const d = ((u = r.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    r.onCornerWidthChange(d), s(d);
  }), c ? /* @__PURE__ */ v(
    ie.div,
    {
      ...o,
      ref: t,
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
function or(e) {
  return e ? parseInt(e, 10) : 0;
}
function kp(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Nr(e) {
  const t = kp(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function _S(e, t, n, o = "ltr") {
  const r = Nr(n), i = r / 2, s = t || i, a = r - s, l = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, d = n.content - n.viewport, u = o === "ltr" ? [0, d] : [d * -1, 0];
  return Ip([l, c], u)(e);
}
function Il(e, t, n = "ltr") {
  const o = Nr(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - r, s = t.content - t.viewport, a = i - o, l = n === "ltr" ? [0, s] : [s * -1, 0], c = xS(e, l);
  return Ip([0, s], [0, a])(c);
}
function Ip(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Np(e, t) {
  return e > 0 && e < t;
}
var kS = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return (function r() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, o = window.requestAnimationFrame(r);
  })(), () => window.cancelAnimationFrame(o);
};
function Fr(e, t) {
  const n = ve(e), o = p.useRef(0);
  return p.useEffect(() => () => window.clearTimeout(o.current), []), p.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Sn(e, t) {
  const n = ve(t);
  ht(() => {
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
var Fp = Rp, IS = Pp, NS = _p;
const FS = p.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ G(
  Fp,
  {
    ref: o,
    className: Y("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ v(IS, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ v(Op, {}),
      /* @__PURE__ */ v(NS, {})
    ]
  }
));
FS.displayName = Fp.displayName;
const Op = p.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ v(
  oa,
  {
    ref: o,
    orientation: t,
    className: Y(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      e
    ),
    ...n,
    children: /* @__PURE__ */ v(Dp, { className: "bg-border relative flex-1 rounded-full" })
  }
));
Op.displayName = oa.displayName;
var Nl = 1, OS = 0.9, VS = 0.8, LS = 0.17, oi = 0.1, ri = 0.999, $S = 0.9999, BS = 0.99, zS = /[\\\/_+.#"@\[\(\{&]/, HS = /[\\\/_+.#"@\[\(\{&]/g, jS = /[\s-]/, Vp = /[\s-]/g;
function zi(e, t, n, o, r, i, s) {
  if (i === t.length) return r === e.length ? Nl : BS;
  var a = `${r},${i}`;
  if (s[a] !== void 0) return s[a];
  for (var l = o.charAt(i), c = n.indexOf(l, r), d = 0, u, f, h, m; c >= 0; ) u = zi(e, t, n, o, c + 1, i + 1, s), u > d && (c === r ? u *= Nl : zS.test(e.charAt(c - 1)) ? (u *= VS, h = e.slice(r, c - 1).match(HS), h && r > 0 && (u *= Math.pow(ri, h.length))) : jS.test(e.charAt(c - 1)) ? (u *= OS, m = e.slice(r, c - 1).match(Vp), m && r > 0 && (u *= Math.pow(ri, m.length))) : (u *= LS, r > 0 && (u *= Math.pow(ri, c - r))), e.charAt(c) !== t.charAt(i) && (u *= $S)), (u < oi && n.charAt(c - 1) === o.charAt(i + 1) || o.charAt(i + 1) === o.charAt(i) && n.charAt(c - 1) !== o.charAt(i)) && (f = zi(e, t, n, o, c + 1, i + 2, s), f * oi > u && (u = f * oi)), u > d && (d = u), c = n.indexOf(l, c + 1);
  return s[a] = d, d;
}
function Fl(e) {
  return e.toLowerCase().replace(Vp, " ");
}
function GS(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, zi(e, t, Fl(e), Fl(t), 0, 0, {});
}
var WS = [
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
], Vt = WS.reduce((e, t) => {
  const n = /* @__PURE__ */ hr(`Primitive.${t}`), o = p.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Fn = '[cmdk-group=""]', ii = '[cmdk-group-items=""]', US = '[cmdk-group-heading=""]', Lp = '[cmdk-item=""]', Ol = `${Lp}:not([aria-disabled="true"])`, Hi = "cmdk-item-select", ln = "data-value", KS = (e, t, n) => GS(e, t, n), $p = p.createContext(void 0), lo = () => p.useContext($p), Bp = p.createContext(void 0), sa = () => p.useContext(Bp), zp = p.createContext(void 0), Hp = p.forwardRef((e, t) => {
  let n = cn(() => {
    var M, V;
    return { search: "", value: (V = (M = e.value) != null ? M : e.defaultValue) != null ? V : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = cn(() => /* @__PURE__ */ new Set()), r = cn(() => /* @__PURE__ */ new Map()), i = cn(() => /* @__PURE__ */ new Map()), s = cn(() => /* @__PURE__ */ new Set()), a = jp(e), { label: l, children: c, value: d, onValueChange: u, filter: f, shouldFilter: h, loop: m, disablePointerSelection: g = !1, vimBindings: y = !0, ...w } = e, b = xe(), x = xe(), S = xe(), R = p.useRef(null), E = rC();
  Qt(() => {
    if (d !== void 0) {
      let M = d.trim();
      n.current.value = M, T.emit();
    }
  }, [d]), Qt(() => {
    E(6, q);
  }, []);
  let T = p.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, V, $) => {
    var N, B, te, ee;
    if (!Object.is(n.current[M], V)) {
      if (n.current[M] = V, M === "search") W(), A(), E(1, L);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let X = document.getElementById(S);
          X ? X.focus() : (N = document.getElementById(b)) == null || N.focus();
        }
        if (E(7, () => {
          var X;
          n.current.selectedItemId = (X = K()) == null ? void 0 : X.id, T.emit();
        }), $ || E(5, q), ((B = a.current) == null ? void 0 : B.value) !== void 0) {
          let X = V ?? "";
          (ee = (te = a.current).onValueChange) == null || ee.call(te, X);
          return;
        }
      }
      T.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), C = p.useMemo(() => ({ value: (M, V, $) => {
    var N;
    V !== ((N = i.current.get(M)) == null ? void 0 : N.value) && (i.current.set(M, { value: V, keywords: $ }), n.current.filtered.items.set(M, I(V, $)), E(2, () => {
      A(), T.emit();
    }));
  }, item: (M, V) => (o.current.add(M), V && (r.current.has(V) ? r.current.get(V).add(M) : r.current.set(V, /* @__PURE__ */ new Set([M]))), E(3, () => {
    W(), A(), n.current.value || L(), T.emit();
  }), () => {
    i.current.delete(M), o.current.delete(M), n.current.filtered.items.delete(M);
    let $ = K();
    E(4, () => {
      W(), ($ == null ? void 0 : $.getAttribute("id")) === M && L(), T.emit();
    });
  }), group: (M) => (r.current.has(M) || r.current.set(M, /* @__PURE__ */ new Set()), () => {
    i.current.delete(M), r.current.delete(M);
  }), filter: () => a.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => a.current.disablePointerSelection, listId: b, inputId: S, labelId: x, listInnerRef: R }), []);
  function I(M, V) {
    var $, N;
    let B = (N = ($ = a.current) == null ? void 0 : $.filter) != null ? N : KS;
    return M ? B(M, n.current.search, V) : 0;
  }
  function A() {
    if (!n.current.search || a.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, V = [];
    n.current.filtered.groups.forEach((N) => {
      let B = r.current.get(N), te = 0;
      B.forEach((ee) => {
        let X = M.get(ee);
        te = Math.max(X, te);
      }), V.push([N, te]);
    });
    let $ = R.current;
    J().sort((N, B) => {
      var te, ee;
      let X = N.getAttribute("id"), pe = B.getAttribute("id");
      return ((te = M.get(pe)) != null ? te : 0) - ((ee = M.get(X)) != null ? ee : 0);
    }).forEach((N) => {
      let B = N.closest(ii);
      B ? B.appendChild(N.parentElement === B ? N : N.closest(`${ii} > *`)) : $.appendChild(N.parentElement === $ ? N : N.closest(`${ii} > *`));
    }), V.sort((N, B) => B[1] - N[1]).forEach((N) => {
      var B;
      let te = (B = R.current) == null ? void 0 : B.querySelector(`${Fn}[${ln}="${encodeURIComponent(N[0])}"]`);
      te == null || te.parentElement.appendChild(te);
    });
  }
  function L() {
    let M = J().find(($) => $.getAttribute("aria-disabled") !== "true"), V = M == null ? void 0 : M.getAttribute(ln);
    T.setState("value", V || void 0);
  }
  function W() {
    var M, V, $, N;
    if (!n.current.search || a.current.shouldFilter === !1) {
      n.current.filtered.count = o.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let B = 0;
    for (let te of o.current) {
      let ee = (V = (M = i.current.get(te)) == null ? void 0 : M.value) != null ? V : "", X = (N = ($ = i.current.get(te)) == null ? void 0 : $.keywords) != null ? N : [], pe = I(ee, X);
      n.current.filtered.items.set(te, pe), pe > 0 && B++;
    }
    for (let [te, ee] of r.current) for (let X of ee) if (n.current.filtered.items.get(X) > 0) {
      n.current.filtered.groups.add(te);
      break;
    }
    n.current.filtered.count = B;
  }
  function q() {
    var M, V, $;
    let N = K();
    N && (((M = N.parentElement) == null ? void 0 : M.firstChild) === N && (($ = (V = N.closest(Fn)) == null ? void 0 : V.querySelector(US)) == null || $.scrollIntoView({ block: "nearest" })), N.scrollIntoView({ block: "nearest" }));
  }
  function K() {
    var M;
    return (M = R.current) == null ? void 0 : M.querySelector(`${Lp}[aria-selected="true"]`);
  }
  function J() {
    var M;
    return Array.from(((M = R.current) == null ? void 0 : M.querySelectorAll(Ol)) || []);
  }
  function O(M) {
    let V = J()[M];
    V && T.setState("value", V.getAttribute(ln));
  }
  function D(M) {
    var V;
    let $ = K(), N = J(), B = N.findIndex((ee) => ee === $), te = N[B + M];
    (V = a.current) != null && V.loop && (te = B + M < 0 ? N[N.length - 1] : B + M === N.length ? N[0] : N[B + M]), te && T.setState("value", te.getAttribute(ln));
  }
  function P(M) {
    let V = K(), $ = V == null ? void 0 : V.closest(Fn), N;
    for (; $ && !N; ) $ = M > 0 ? nC($, Fn) : oC($, Fn), N = $ == null ? void 0 : $.querySelector(Ol);
    N ? T.setState("value", N.getAttribute(ln)) : D(M);
  }
  let k = () => O(J().length - 1), _ = (M) => {
    M.preventDefault(), M.metaKey ? k() : M.altKey ? P(1) : D(1);
  }, ne = (M) => {
    M.preventDefault(), M.metaKey ? O(0) : M.altKey ? P(-1) : D(-1);
  };
  return p.createElement(Vt.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (M) => {
    var V;
    (V = w.onKeyDown) == null || V.call(w, M);
    let $ = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || $)) switch (M.key) {
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
        y && M.ctrlKey && ne(M);
        break;
      }
      case "ArrowUp": {
        ne(M);
        break;
      }
      case "Home": {
        M.preventDefault(), O(0);
        break;
      }
      case "End": {
        M.preventDefault(), k();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let N = K();
        if (N) {
          let B = new Event(Hi);
          N.dispatchEvent(B);
        }
      }
    }
  } }, p.createElement("label", { "cmdk-label": "", htmlFor: C.inputId, id: C.labelId, style: sC }, l), Or(e, (M) => p.createElement(Bp.Provider, { value: T }, p.createElement($p.Provider, { value: C }, M))));
}), YS = p.forwardRef((e, t) => {
  var n, o;
  let r = xe(), i = p.useRef(null), s = p.useContext(zp), a = lo(), l = jp(e), c = (o = (n = l.current) == null ? void 0 : n.forceMount) != null ? o : s == null ? void 0 : s.forceMount;
  Qt(() => {
    if (!c) return a.item(r, s == null ? void 0 : s.id);
  }, [c]);
  let d = Gp(r, i, [e.value, e.children, i], e.keywords), u = sa(), f = Dt((E) => E.value && E.value === d.current), h = Dt((E) => c || a.filter() === !1 ? !0 : E.search ? E.filtered.items.get(r) > 0 : !0);
  p.useEffect(() => {
    let E = i.current;
    if (!(!E || e.disabled)) return E.addEventListener(Hi, m), () => E.removeEventListener(Hi, m);
  }, [h, e.onSelect, e.disabled]);
  function m() {
    var E, T;
    g(), (T = (E = l.current).onSelect) == null || T.call(E, d.current);
  }
  function g() {
    u.setState("value", d.current, !0);
  }
  if (!h) return null;
  let { disabled: y, value: w, onSelect: b, forceMount: x, keywords: S, ...R } = e;
  return p.createElement(Vt.div, { ref: _e(i, t), ...R, id: r, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!f, "data-disabled": !!y, "data-selected": !!f, onPointerMove: y || a.getDisablePointerSelection() ? void 0 : g, onClick: y ? void 0 : m }, e.children);
}), XS = p.forwardRef((e, t) => {
  let { heading: n, children: o, forceMount: r, ...i } = e, s = xe(), a = p.useRef(null), l = p.useRef(null), c = xe(), d = lo(), u = Dt((h) => r || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Qt(() => d.group(s), []), Gp(s, a, [e.value, e.heading, l]);
  let f = p.useMemo(() => ({ id: s, forceMount: r }), [r]);
  return p.createElement(Vt.div, { ref: _e(a, t), ...i, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && p.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), Or(e, (h) => p.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, p.createElement(zp.Provider, { value: f }, h))));
}), qS = p.forwardRef((e, t) => {
  let { alwaysRender: n, ...o } = e, r = p.useRef(null), i = Dt((s) => !s.search);
  return !n && !i ? null : p.createElement(Vt.div, { ref: _e(r, t), ...o, "cmdk-separator": "", role: "separator" });
}), ZS = p.forwardRef((e, t) => {
  let { onValueChange: n, ...o } = e, r = e.value != null, i = sa(), s = Dt((c) => c.search), a = Dt((c) => c.selectedItemId), l = lo();
  return p.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), p.createElement(Vt.input, { ref: t, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": a, id: l.inputId, type: "text", value: r ? e.value : s, onChange: (c) => {
    r || i.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), QS = p.forwardRef((e, t) => {
  let { children: n, label: o = "Suggestions", ...r } = e, i = p.useRef(null), s = p.useRef(null), a = Dt((c) => c.selectedItemId), l = lo();
  return p.useEffect(() => {
    if (s.current && i.current) {
      let c = s.current, d = i.current, u, f = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return f.observe(c), () => {
        cancelAnimationFrame(u), f.unobserve(c);
      };
    }
  }, []), p.createElement(Vt.div, { ref: _e(i, t), ...r, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": a, "aria-label": o, id: l.listId }, Or(e, (c) => p.createElement("div", { ref: _e(s, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), JS = p.forwardRef((e, t) => {
  let { open: n, onOpenChange: o, overlayClassName: r, contentClassName: i, container: s, ...a } = e;
  return p.createElement(Hd, { open: n, onOpenChange: o }, p.createElement(jd, { container: s }, p.createElement(Hs, { "cmdk-overlay": "", className: r }), p.createElement(js, { "aria-label": e.label, "cmdk-dialog": "", className: i }, p.createElement(Hp, { ref: t, ...a }))));
}), eC = p.forwardRef((e, t) => Dt((n) => n.filtered.count === 0) ? p.createElement(Vt.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), tC = p.forwardRef((e, t) => {
  let { progress: n, children: o, label: r = "Loading...", ...i } = e;
  return p.createElement(Vt.div, { ref: t, ...i, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": r }, Or(e, (s) => p.createElement("div", { "aria-hidden": !0 }, s)));
}), ke = Object.assign(Hp, { List: QS, Item: YS, Input: ZS, Group: XS, Separator: qS, Dialog: JS, Empty: eC, Loading: tC });
function nC(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function oC(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function jp(e) {
  let t = p.useRef(e);
  return Qt(() => {
    t.current = e;
  }), t;
}
var Qt = typeof window > "u" ? p.useEffect : p.useLayoutEffect;
function cn(e) {
  let t = p.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Dt(e) {
  let t = sa(), n = () => e(t.snapshot());
  return p.useSyncExternalStore(t.subscribe, n, n);
}
function Gp(e, t, n, o = []) {
  let r = p.useRef(), i = lo();
  return Qt(() => {
    var s;
    let a = (() => {
      var c;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : r.current;
      }
    })(), l = o.map((c) => c.trim());
    i.value(e, a, l), (s = t.current) == null || s.setAttribute(ln, a), r.current = a;
  }), r;
}
var rC = () => {
  let [e, t] = p.useState(), n = cn(() => /* @__PURE__ */ new Map());
  return Qt(() => {
    n.current.forEach((o) => o()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (o, r) => {
    n.current.set(o, r), t({});
  };
};
function iC(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Or({ asChild: e, children: t }, n) {
  return e && p.isValidElement(t) ? p.cloneElement(iC(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var sC = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Wp = En({});
function aC(e) {
  const t = Wt(null);
  return t.current === null && (t.current = e()), t.current;
}
const lC = typeof window < "u", cC = lC ? au : Ss, aa = /* @__PURE__ */ En(null);
function la(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function rr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const ct = (e, t, n) => n > t ? t : n < e ? e : n;
function ji(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Dn = () => {
}, vt = () => {
};
var su;
typeof process < "u" && ((su = process.env) == null ? void 0 : su.NODE_ENV) !== "production" && (Dn = (e, t, n) => {
  !e && typeof console < "u" && console.warn(ji(t, n));
}, vt = (e, t, n) => {
  if (!e)
    throw new Error(ji(t, n));
});
const _t = {}, Up = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Kp(e) {
  return typeof e == "object" && e !== null;
}
const Yp = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Xp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const je = /* @__NO_SIDE_EFFECTS__ */ (e) => e, uC = (e, t) => (n) => t(e(n)), co = (...e) => e.reduce(uC), Yn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const o = t - e;
  return o === 0 ? 1 : (n - e) / o;
};
class ca {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return la(this.subscriptions, t), () => rr(this.subscriptions, t);
  }
  notify(t, n, o) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1)
        this.subscriptions[0](t, n, o);
      else
        for (let i = 0; i < r; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const De = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ze = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function qp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Vl = /* @__PURE__ */ new Set();
function ua(e, t, n) {
  e || Vl.has(t) || (console.warn(ji(t, n)), Vl.add(t));
}
const Zp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, dC = 1e-7, fC = 12;
function pC(e, t, n, o, r) {
  let i, s, a = 0;
  do
    s = t + (n - t) / 2, i = Zp(s, o, r) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > dC && ++a < fC);
  return s;
}
function uo(e, t, n, o) {
  if (e === t && n === o)
    return je;
  const r = (i) => pC(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Zp(r(i), t, o);
}
const Qp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Jp = (e) => (t) => 1 - e(1 - t), eh = /* @__PURE__ */ uo(0.33, 1.53, 0.69, 0.99), da = /* @__PURE__ */ Jp(eh), th = /* @__PURE__ */ Qp(da), nh = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * da(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), fa = (e) => 1 - Math.sin(Math.acos(e)), oh = Jp(fa), rh = Qp(fa), hC = /* @__PURE__ */ uo(0.42, 0, 1, 1), mC = /* @__PURE__ */ uo(0, 0, 0.58, 1), ih = /* @__PURE__ */ uo(0.42, 0, 0.58, 1), gC = (e) => Array.isArray(e) && typeof e[0] != "number", sh = (e) => Array.isArray(e) && typeof e[0] == "number", Ll = {
  linear: je,
  easeIn: hC,
  easeInOut: ih,
  easeOut: mC,
  circIn: fa,
  circInOut: rh,
  circOut: oh,
  backIn: da,
  backInOut: th,
  backOut: eh,
  anticipate: nh
}, vC = (e) => typeof e == "string", $l = (e) => {
  if (sh(e)) {
    vt(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, o, r] = e;
    return uo(t, n, o, r);
  } else if (vC(e))
    return vt(Ll[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Ll[e];
  return e;
}, To = [
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
function yC(e, t) {
  let n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, i = !1;
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
    schedule: (d, u = !1, f = !1) => {
      const m = f && r ? n : o;
      return u && s.add(d), m.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      o.delete(d), s.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, r) {
        i = !0;
        return;
      }
      r = !0;
      const u = n;
      n = o, o = u, n.forEach(l), n.clear(), r = !1, i && (i = !1, c.process(d));
    }
  };
  return c;
}
const wC = 40;
function ah(e, t) {
  let n = !1, o = !0;
  const r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = To.reduce((x, S) => (x[S] = yC(i), x), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: d, update: u, preRender: f, render: h, postRender: m } = s, g = () => {
    const x = _t.useManualTiming, S = x ? r.timestamp : performance.now();
    n = !1, x || (r.delta = o ? 1e3 / 60 : Math.max(Math.min(S - r.timestamp, wC), 1)), r.timestamp = S, r.isProcessing = !0, a.process(r), l.process(r), c.process(r), d.process(r), u.process(r), f.process(r), h.process(r), m.process(r), r.isProcessing = !1, n && t && (o = !1, e(g));
  }, y = () => {
    n = !0, o = !0, r.isProcessing || e(g);
  };
  return { schedule: To.reduce((x, S) => {
    const R = s[S];
    return x[S] = (E, T = !1, C = !1) => (n || y(), R.schedule(E, T, C)), x;
  }, {}), cancel: (x) => {
    for (let S = 0; S < To.length; S++)
      s[To[S]].cancel(x);
  }, state: r, steps: s };
}
const { schedule: se, cancel: kt, state: ge, steps: si } = /* @__PURE__ */ ah(typeof requestAnimationFrame < "u" ? requestAnimationFrame : je, !0);
let Lo;
function bC() {
  Lo = void 0;
}
const Re = {
  now: () => (Lo === void 0 && Re.set(ge.isProcessing || _t.useManualTiming ? ge.timestamp : performance.now()), Lo),
  set: (e) => {
    Lo = e, queueMicrotask(bC);
  }
}, lh = (e) => (t) => typeof t == "string" && t.startsWith(e), ch = /* @__PURE__ */ lh("--"), xC = /* @__PURE__ */ lh("var(--"), pa = (e) => xC(e) ? SC.test(e.split("/*")[0].trim()) : !1, SC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Bl(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const _n = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Xn = {
  ..._n,
  transform: (e) => ct(0, 1, e)
}, Mo = {
  ..._n,
  default: 1
}, Bn = (e) => Math.round(e * 1e5) / 1e5, ha = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function CC(e) {
  return e == null;
}
const RC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ma = (e, t) => (n) => !!(typeof n == "string" && RC.test(n) && n.startsWith(e) || t && !CC(n) && Object.prototype.hasOwnProperty.call(n, t)), uh = (e, t, n) => (o) => {
  if (typeof o != "string")
    return o;
  const [r, i, s, a] = o.match(ha);
  return {
    [e]: parseFloat(r),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, EC = (e) => ct(0, 255, e), ai = {
  ..._n,
  transform: (e) => Math.round(EC(e))
}, Ut = {
  test: /* @__PURE__ */ ma("rgb", "red"),
  parse: /* @__PURE__ */ uh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: o = 1 }) => "rgba(" + ai.transform(e) + ", " + ai.transform(t) + ", " + ai.transform(n) + ", " + Bn(Xn.transform(o)) + ")"
};
function PC(e) {
  let t = "", n = "", o = "", r = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), o = e.substring(5, 7), r = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), o = e.substring(3, 4), r = e.substring(4, 5), t += t, n += n, o += o, r += r), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(o, 16),
    alpha: r ? parseInt(r, 16) / 255 : 1
  };
}
const Gi = {
  test: /* @__PURE__ */ ma("#"),
  parse: PC,
  transform: Ut.transform
}, fo = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Rt = /* @__PURE__ */ fo("deg"), lt = /* @__PURE__ */ fo("%"), H = /* @__PURE__ */ fo("px"), TC = /* @__PURE__ */ fo("vh"), MC = /* @__PURE__ */ fo("vw"), zl = {
  ...lt,
  parse: (e) => lt.parse(e) / 100,
  transform: (e) => lt.transform(e * 100)
}, dn = {
  test: /* @__PURE__ */ ma("hsl", "hue"),
  parse: /* @__PURE__ */ uh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + lt.transform(Bn(t)) + ", " + lt.transform(Bn(n)) + ", " + Bn(Xn.transform(o)) + ")"
}, ue = {
  test: (e) => Ut.test(e) || Gi.test(e) || dn.test(e),
  parse: (e) => Ut.test(e) ? Ut.parse(e) : dn.test(e) ? dn.parse(e) : Gi.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ut.transform(e) : dn.transform(e),
  getAnimatableNone: (e) => {
    const t = ue.parse(e);
    return t.alpha = 0, ue.transform(t);
  }
}, AC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function DC(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ha)) == null ? void 0 : t.length) || 0) + (((n = e.match(AC)) == null ? void 0 : n.length) || 0) > 0;
}
const dh = "number", fh = "color", _C = "var", kC = "var(", Hl = "${}", IC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Cn(e) {
  const t = e.toString(), n = [], o = {
    color: [],
    number: [],
    var: []
  }, r = [];
  let i = 0;
  const a = t.replace(IC, (l) => (ue.test(l) ? (o.color.push(i), r.push(fh), n.push(ue.parse(l))) : l.startsWith(kC) ? (o.var.push(i), r.push(_C), n.push(l)) : (o.number.push(i), r.push(dh), n.push(parseFloat(l))), ++i, Hl)).split(Hl);
  return { values: n, split: a, indexes: o, types: r };
}
function NC(e) {
  return Cn(e).values;
}
function ph({ split: e, types: t }) {
  const n = e.length;
  return (o) => {
    let r = "";
    for (let i = 0; i < n; i++)
      if (r += e[i], o[i] !== void 0) {
        const s = t[i];
        s === dh ? r += Bn(o[i]) : s === fh ? r += ue.transform(o[i]) : r += o[i];
      }
    return r;
  };
}
function FC(e) {
  return ph(Cn(e));
}
const OC = (e) => typeof e == "number" ? 0 : ue.test(e) ? ue.getAnimatableNone(e) : e, VC = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : OC(e);
function LC(e) {
  const t = Cn(e);
  return ph(t)(t.values.map((o, r) => VC(o, t.split[r])));
}
const Ze = {
  test: DC,
  parse: NC,
  createTransformer: FC,
  getAnimatableNone: LC
};
function li(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function $C({ hue: e, saturation: t, lightness: n, alpha: o }) {
  e /= 360, t /= 100, n /= 100;
  let r = 0, i = 0, s = 0;
  if (!t)
    r = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = li(l, a, e + 1 / 3), i = li(l, a, e), s = li(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: o
  };
}
function ir(e, t) {
  return (n) => n > 0 ? t : e;
}
const le = (e, t, n) => e + (t - e) * n, ci = (e, t, n) => {
  const o = e * e, r = n * (t * t - o) + o;
  return r < 0 ? 0 : Math.sqrt(r);
}, BC = [Gi, Ut, dn], zC = (e) => BC.find((t) => t.test(e));
function jl(e) {
  const t = zC(e);
  if (Dn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === dn && (n = $C(n)), n;
}
const Gl = (e, t) => {
  const n = jl(e), o = jl(t);
  if (!n || !o)
    return ir(e, t);
  const r = { ...n };
  return (i) => (r.red = ci(n.red, o.red, i), r.green = ci(n.green, o.green, i), r.blue = ci(n.blue, o.blue, i), r.alpha = le(n.alpha, o.alpha, i), Ut.transform(r));
}, Wi = /* @__PURE__ */ new Set(["none", "hidden"]);
function HC(e, t) {
  return Wi.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function jC(e, t) {
  return (n) => le(e, t, n);
}
function ga(e) {
  return typeof e == "number" ? jC : typeof e == "string" ? pa(e) ? ir : ue.test(e) ? Gl : UC : Array.isArray(e) ? hh : typeof e == "object" ? ue.test(e) ? Gl : GC : ir;
}
function hh(e, t) {
  const n = [...e], o = n.length, r = e.map((i, s) => ga(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < o; s++)
      n[s] = r[s](i);
    return n;
  };
}
function GC(e, t) {
  const n = { ...e, ...t }, o = {};
  for (const r in n)
    e[r] !== void 0 && t[r] !== void 0 && (o[r] = ga(e[r])(e[r], t[r]));
  return (r) => {
    for (const i in o)
      n[i] = o[i](r);
    return n;
  };
}
function WC(e, t) {
  const n = [], o = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < t.values.length; r++) {
    const i = t.types[r], s = e.indexes[i][o[i]], a = e.values[s] ?? 0;
    n[r] = a, o[i]++;
  }
  return n;
}
const UC = (e, t) => {
  const n = Ze.createTransformer(t), o = Cn(e), r = Cn(t);
  return o.indexes.var.length === r.indexes.var.length && o.indexes.color.length === r.indexes.color.length && o.indexes.number.length >= r.indexes.number.length ? Wi.has(e) && !r.values.length || Wi.has(t) && !o.values.length ? HC(e, t) : co(hh(WC(o, r), r.values), n) : (Dn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), ir(e, t));
};
function mh(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : ga(e)(e, t);
}
const KC = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => se.update(t, n),
    stop: () => kt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ge.isProcessing ? ge.timestamp : Re.now()
  };
}, gh = (e, t, n = 10) => {
  let o = "";
  const r = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < r; i++)
    o += Math.round(e(i / (r - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, sr = 2e4;
function va(e) {
  let t = 0;
  const n = 50;
  let o = e.next(t);
  for (; !o.done && t < sr; )
    t += n, o = e.next(t);
  return t >= sr ? 1 / 0 : t;
}
function YC(e, t = 100, n) {
  const o = n({ ...e, keyframes: [0, t] }), r = Math.min(va(o), sr);
  return {
    type: "keyframes",
    ease: (i) => o.next(r * i).value / t,
    duration: /* @__PURE__ */ ze(r)
  };
}
const ce = {
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
function Ui(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const XC = 12;
function qC(e, t, n) {
  let o = n;
  for (let r = 1; r < XC; r++)
    o = o - e(o) / t(o);
  return o;
}
const ui = 1e-3;
function ZC({ duration: e = ce.duration, bounce: t = ce.bounce, velocity: n = ce.velocity, mass: o = ce.mass }) {
  let r, i;
  Dn(e <= /* @__PURE__ */ De(ce.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let s = 1 - t;
  s = ct(ce.minDamping, ce.maxDamping, s), e = ct(ce.minDuration, ce.maxDuration, /* @__PURE__ */ ze(e)), s < 1 ? (r = (c) => {
    const d = c * s, u = d * e, f = d - n, h = Ui(c, s), m = Math.exp(-u);
    return ui - f / h * m;
  }, i = (c) => {
    const u = c * s * e, f = u * n + n, h = Math.pow(s, 2) * Math.pow(c, 2) * e, m = Math.exp(-u), g = Ui(Math.pow(c, 2), s);
    return (-r(c) + ui > 0 ? -1 : 1) * ((f - h) * m) / g;
  }) : (r = (c) => {
    const d = Math.exp(-c * e), u = (c - n) * e + 1;
    return -ui + d * u;
  }, i = (c) => {
    const d = Math.exp(-c * e), u = (n - c) * (e * e);
    return d * u;
  });
  const a = 5 / e, l = qC(r, i, a);
  if (e = /* @__PURE__ */ De(e), isNaN(l))
    return {
      stiffness: ce.stiffness,
      damping: ce.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * o;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(o * c),
      duration: e
    };
  }
}
const QC = ["duration", "bounce"], JC = ["stiffness", "damping", "mass"];
function Wl(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function eR(e) {
  let t = {
    velocity: ce.velocity,
    stiffness: ce.stiffness,
    damping: ce.damping,
    mass: ce.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Wl(e, JC) && Wl(e, QC))
    if (t.velocity = 0, e.visualDuration) {
      const n = e.visualDuration, o = 2 * Math.PI / (n * 1.2), r = o * o, i = 2 * ct(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
      t = {
        ...t,
        mass: ce.mass,
        stiffness: r,
        damping: i
      };
    } else {
      const n = ZC({ ...e, velocity: 0 });
      t = {
        ...t,
        ...n,
        mass: ce.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function ar(e = ce.visualDuration, t = ce.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: o, restDelta: r } = n;
  const i = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: d, duration: u, velocity: f, isResolvedFromDuration: h } = eR({
    ...n,
    velocity: -/* @__PURE__ */ ze(n.velocity || 0)
  }), m = f || 0, g = c / (2 * Math.sqrt(l * d)), y = s - i, w = /* @__PURE__ */ ze(Math.sqrt(l / d)), b = Math.abs(y) < 5;
  o || (o = b ? ce.restSpeed.granular : ce.restSpeed.default), r || (r = b ? ce.restDelta.granular : ce.restDelta.default);
  let x, S, R, E, T, C;
  if (g < 1)
    R = Ui(w, g), E = (m + g * w * y) / R, x = (A) => {
      const L = Math.exp(-g * w * A);
      return s - L * (E * Math.sin(R * A) + y * Math.cos(R * A));
    }, T = g * w * E + y * R, C = g * w * y - E * R, S = (A) => Math.exp(-g * w * A) * (T * Math.sin(R * A) + C * Math.cos(R * A));
  else if (g === 1) {
    x = (L) => s - Math.exp(-w * L) * (y + (m + w * y) * L);
    const A = m + w * y;
    S = (L) => Math.exp(-w * L) * (w * A * L - m);
  } else {
    const A = w * Math.sqrt(g * g - 1);
    x = (K) => {
      const J = Math.exp(-g * w * K), O = Math.min(A * K, 300);
      return s - J * ((m + g * w * y) * Math.sinh(O) + A * y * Math.cosh(O)) / A;
    };
    const L = (m + g * w * y) / A, W = g * w * L - y * A, q = g * w * y - L * A;
    S = (K) => {
      const J = Math.exp(-g * w * K), O = Math.min(A * K, 300);
      return J * (W * Math.sinh(O) + q * Math.cosh(O));
    };
  }
  const I = {
    calculatedDuration: h && u || null,
    velocity: (A) => /* @__PURE__ */ De(S(A)),
    next: (A) => {
      if (!h && g < 1) {
        const W = Math.exp(-g * w * A), q = Math.sin(R * A), K = Math.cos(R * A), J = s - W * (E * q + y * K), O = /* @__PURE__ */ De(W * (T * q + C * K));
        return a.done = Math.abs(O) <= o && Math.abs(s - J) <= r, a.value = a.done ? s : J, a;
      }
      const L = x(A);
      if (h)
        a.done = A >= u;
      else {
        const W = /* @__PURE__ */ De(S(A));
        a.done = Math.abs(W) <= o && Math.abs(s - L) <= r;
      }
      return a.value = a.done ? s : L, a;
    },
    toString: () => {
      const A = Math.min(va(I), sr), L = gh((W) => I.next(A * W).value, A, 30);
      return A + "ms " + L;
    },
    toTransition: () => {
    }
  };
  return I;
}
ar.applyToOptions = (e) => {
  const t = YC(e, 100, ar);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ De(t.duration), e.type = "keyframes", e;
};
const tR = 5;
function vh(e, t, n) {
  const o = Math.max(t - tR, 0);
  return qp(n - e(o), t - o);
}
function Ki({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: o = 325, bounceDamping: r = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: d }) {
  const u = e[0], f = {
    done: !1,
    value: u
  }, h = (C) => a !== void 0 && C < a || l !== void 0 && C > l, m = (C) => a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
  let g = n * t;
  const y = u + g, w = s === void 0 ? y : s(y);
  w !== y && (g = w - u);
  const b = (C) => -g * Math.exp(-C / o), x = (C) => w + b(C), S = (C) => {
    const I = b(C), A = x(C);
    f.done = Math.abs(I) <= c, f.value = f.done ? w : A;
  };
  let R, E;
  const T = (C) => {
    h(f.value) && (R = C, E = ar({
      keyframes: [f.value, m(f.value)],
      velocity: vh(x, C, f.value),
      // TODO: This should be passing * 1000
      damping: r,
      stiffness: i,
      restDelta: c,
      restSpeed: d
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (C) => {
      let I = !1;
      return !E && R === void 0 && (I = !0, S(C), T(C)), R !== void 0 && C >= R ? E.next(C - R) : (!I && S(C), f);
    }
  };
}
function nR(e, t, n) {
  const o = [], r = n || _t.mix || mh, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = r(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || je : t;
      a = co(l, a);
    }
    o.push(a);
  }
  return o;
}
function oR(e, t, { clamp: n = !0, ease: o, mixer: r } = {}) {
  const i = e.length;
  if (vt(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = nR(t, o, r), l = a.length, c = (d) => {
    if (s && d < e[0])
      return t[0];
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const f = /* @__PURE__ */ Yn(e[u], e[u + 1], d);
    return a[u](f);
  };
  return n ? (d) => c(ct(e[0], e[i - 1], d)) : c;
}
function rR(e, t) {
  const n = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const r = /* @__PURE__ */ Yn(0, t, o);
    e.push(le(n, 1, r));
  }
}
function iR(e) {
  const t = [0];
  return rR(t, e.length - 1), t;
}
function sR(e, t) {
  return e.map((n) => n * t);
}
function aR(e, t) {
  return e.map(() => t || ih).splice(0, e.length - 1);
}
function fn({ duration: e = 300, keyframes: t, times: n, ease: o = "easeInOut" }) {
  const r = gC(o) ? o.map($l) : $l(o), i = {
    done: !1,
    value: t[0]
  }, s = sR(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : iR(t),
    e
  ), a = oR(s, t, {
    ease: Array.isArray(r) ? r : aR(t, r)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const lR = (e) => e !== null;
function Vr(e, { repeat: t, repeatType: n = "loop" }, o, r = 1) {
  const i = e.filter(lR), a = r < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !a || o === void 0 ? i[a] : o;
}
const cR = {
  decay: Ki,
  inertia: Ki,
  tween: fn,
  keyframes: fn,
  spring: ar
};
function yh(e) {
  typeof e.type == "string" && (e.type = cR[e.type]);
}
class ya {
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
const uR = (e) => e / 100;
class lr extends ya {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var o, r;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Re.now() && this.tick(Re.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (r = (o = this.options).onStop) == null || r.call(o));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    yh(t);
    const { type: n = fn, repeat: o = 0, repeatDelay: r = 0, repeatType: i, velocity: s = 0 } = t;
    let { keyframes: a } = t;
    const l = n || fn;
    process.env.NODE_ENV !== "production" && l !== fn && vt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== fn && typeof a[0] != "number" && (this.mixKeyframes = co(uR, mh(a[0], a[1])), a = [0, 100]);
    const c = l({ ...t, keyframes: a });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -s
    })), c.calculatedDuration === null && (c.calculatedDuration = va(c));
    const { calculatedDuration: d } = c;
    this.calculatedDuration = d, this.resolvedDuration = d + r, this.totalDuration = this.resolvedDuration * (o + 1) - r, this.generator = c;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: o, totalDuration: r, mixKeyframes: i, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: c = 0, keyframes: d, repeat: u, repeatType: f, repeatDelay: h, type: m, onUpdate: g, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - r / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const w = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? w < 0 : w > r;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
    let x = this.currentTime, S = o;
    if (u) {
      const C = Math.min(this.currentTime, r) / a;
      let I = Math.floor(C), A = C % 1;
      !A && C >= 1 && (A = 1), A === 1 && I--, I = Math.min(I, u + 1), !!(I % 2) && (f === "reverse" ? (A = 1 - A, h && (A -= h / a)) : f === "mirror" && (S = s)), x = ct(0, 1, A) * a;
    }
    let R;
    b ? (this.delayState.value = d[0], R = this.delayState) : R = S.next(x), i && !b && (R.value = i(R.value));
    let { done: E } = R;
    !b && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
    const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return T && m !== Ki && (R.value = Vr(d, this.options, y, this.speed)), g && g(R.value), T && this.finish(), R;
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
    return /* @__PURE__ */ ze(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ze(t);
  }
  get time() {
    return /* @__PURE__ */ ze(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ De(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
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
    return vh((o) => this.generator.next(o).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(Re.now()), this.playbackSpeed = t, n && this.driver && (this.time = /* @__PURE__ */ ze(this.currentTime));
  }
  play() {
    var r, i;
    if (this.isStopped)
      return;
    const { driver: t = KC, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), (i = (r = this.options).onPlay) == null || i.call(r);
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = n ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Re.now()), this.holdTime = this.currentTime;
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
function dR(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Kt = (e) => e * 180 / Math.PI, Yi = (e) => {
  const t = Kt(Math.atan2(e[1], e[0]));
  return Xi(t);
}, fR = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Yi,
  rotateZ: Yi,
  skewX: (e) => Kt(Math.atan(e[1])),
  skewY: (e) => Kt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Xi = (e) => (e = e % 360, e < 0 && (e += 360), e), Ul = Yi, Kl = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Yl = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), pR = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Kl,
  scaleY: Yl,
  scale: (e) => (Kl(e) + Yl(e)) / 2,
  rotateX: (e) => Xi(Kt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Xi(Kt(Math.atan2(-e[2], e[0]))),
  rotateZ: Ul,
  rotate: Ul,
  skewX: (e) => Kt(Math.atan(e[4])),
  skewY: (e) => Kt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function qi(e) {
  return e.includes("scale") ? 1 : 0;
}
function Zi(e, t) {
  if (!e || e === "none")
    return qi(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, r;
  if (n)
    o = pR, r = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = fR, r = a;
  }
  if (!r)
    return qi(t);
  const i = o[t], s = r[1].split(",").map(mR);
  return typeof i == "function" ? i(s) : s[i];
}
const hR = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Zi(n, t);
};
function mR(e) {
  return parseFloat(e.trim());
}
const kn = [
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
], In = new Set(kn), Xl = (e) => e === _n || e === H, gR = /* @__PURE__ */ new Set(["x", "y", "z"]), vR = kn.filter((e) => !gR.has(e));
function yR(e) {
  const t = [];
  return vR.forEach((n) => {
    const o = e.getValue(n);
    o !== void 0 && (t.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Pt = {
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
  x: (e, { transform: t }) => Zi(t, "x"),
  y: (e, { transform: t }) => Zi(t, "y")
};
Pt.translateX = Pt.x;
Pt.translateY = Pt.y;
const Yt = /* @__PURE__ */ new Set();
let Qi = !1, Ji = !1, es = !1;
function wh() {
  if (Ji) {
    const e = Array.from(Yt).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), n = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const r = yR(o);
      r.length && (n.set(o, r), o.render());
    }), e.forEach((o) => o.measureInitialState()), t.forEach((o) => {
      o.render();
      const r = n.get(o);
      r && r.forEach(([i, s]) => {
        var a;
        (a = o.getValue(i)) == null || a.set(s);
      });
    }), e.forEach((o) => o.measureEndState()), e.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Ji = !1, Qi = !1, Yt.forEach((e) => e.complete(es)), Yt.clear();
}
function bh() {
  Yt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ji = !0);
  });
}
function wR() {
  es = !0, bh(), wh(), es = !1;
}
class wa {
  constructor(t, n, o, r, i, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = o, this.motionValue = r, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Yt.add(this), Qi || (Qi = !0, se.read(bh), se.resolveKeyframes(wh))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: o, motionValue: r } = this;
    if (t[0] === null) {
      const i = r == null ? void 0 : r.get(), s = t[t.length - 1];
      if (i !== void 0)
        t[0] = i;
      else if (o && n) {
        const a = o.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), r && i === void 0 && r.set(t[0]);
    }
    dR(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Yt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Yt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const bR = (e) => e.startsWith("--");
function xh(e, t, n) {
  bR(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const xR = {};
function Sh(e, t) {
  const n = /* @__PURE__ */ Xp(e);
  return () => xR[t] ?? n();
}
const SR = /* @__PURE__ */ Sh(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Ch = /* @__PURE__ */ Sh(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), $n = ([e, t, n, o]) => `cubic-bezier(${e}, ${t}, ${n}, ${o})`, ql = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ $n([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ $n([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ $n([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ $n([0.33, 1.53, 0.69, 0.99])
};
function Rh(e, t) {
  if (e)
    return typeof e == "function" ? Ch() ? gh(e, t) : "ease-out" : sh(e) ? $n(e) : Array.isArray(e) ? e.map((n) => Rh(n, t) || ql.easeOut) : ql[e];
}
function CR(e, t, n, { delay: o = 0, duration: r = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const d = {
    [t]: n
  };
  l && (d.offset = l);
  const u = Rh(a, r);
  Array.isArray(u) && (d.easing = u);
  const f = {
    delay: o,
    duration: r,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return c && (f.pseudoElement = c), e.animate(d, f);
}
function Eh(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function RR({ type: e, ...t }) {
  return Eh(e) && Ch() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Ph extends ya {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t)
      return;
    const { element: n, name: o, keyframes: r, pseudoElement: i, allowFlatten: s = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = s, this.options = t, vt(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const c = RR(t);
    this.animation = CR(n, o, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const d = Vr(r, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(d), xh(n, o, d), this.animation.cancel();
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
    return /* @__PURE__ */ ze(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ze(t);
  }
  get time() {
    return /* @__PURE__ */ ze(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ De(t), n && this.animation.pause();
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
    var i;
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && SR() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), o && (this.animation.rangeEnd = o), je) : r(this);
  }
}
const Th = {
  anticipate: nh,
  backInOut: th,
  circInOut: rh
};
function ER(e) {
  return e in Th;
}
function PR(e) {
  typeof e.ease == "string" && ER(e.ease) && (e.ease = Th[e.ease]);
}
const di = 10;
class TR extends Ph {
  constructor(t) {
    PR(t), yh(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t;
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
    const { motionValue: n, onUpdate: o, onComplete: r, element: i, ...s } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new lr({
      ...s,
      autoplay: !1
    }), l = Math.max(di, Re.now() - this.startTime), c = ct(0, di, l - di), d = a.sample(l).value, { name: u } = this.options;
    i && u && xh(i, u, d), n.setWithVelocity(a.sample(Math.max(0, l - c)).value, d, c), a.stop();
  }
}
const Zl = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ze.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function MR(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function AR(e, t, n, o) {
  const r = e[0];
  if (r === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = Zl(r, t), a = Zl(i, t);
  return Dn(s === a, `You are trying to animate ${t} from "${r}" to "${i}". "${s ? i : r}" is not an animatable value.`, "value-not-animatable"), !s || !a ? !1 : MR(e) || (n === "spring" || Eh(n)) && o;
}
function ts(e) {
  e.duration = 0, e.type = "keyframes";
}
const Mh = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), DR = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function _R(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && DR.test(e[t]))
      return !0;
  return !1;
}
const kR = /* @__PURE__ */ new Set([
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
]), IR = /* @__PURE__ */ Xp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function NR(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: o, repeatType: r, damping: i, type: s, keyframes: a } = e;
  if (!(((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return IR() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Mh.has(n) || kR.has(n) && _R(a)) && (n !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !o && r !== "mirror" && i !== 0 && s !== "inertia";
}
const FR = 40;
class OR extends ya {
  constructor({ autoplay: t = !0, delay: n = 0, type: o = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s = "loop", keyframes: a, name: l, motionValue: c, element: d, ...u }) {
    var m;
    super(), this.stop = () => {
      var g, y;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = Re.now();
    const f = {
      autoplay: t,
      delay: n,
      type: o,
      repeat: r,
      repeatDelay: i,
      repeatType: s,
      name: l,
      motionValue: c,
      element: d,
      ...u
    }, h = (d == null ? void 0 : d.KeyframeResolver) || wa;
    this.keyframeResolver = new h(a, (g, y, w) => this.onKeyframesResolved(g, y, f, !w), l, c, d), (m = this.keyframeResolver) == null || m.scheduleResolve();
  }
  onKeyframesResolved(t, n, o, r) {
    var w, b;
    this.keyframeResolver = void 0;
    const { name: i, type: s, velocity: a, delay: l, isHandoff: c, onUpdate: d } = o;
    this.resolvedAt = Re.now();
    let u = !0;
    AR(t, i, s, a) || (u = !1, (_t.instantAnimations || !l) && (d == null || d(Vr(t, o, n))), t[0] = t[t.length - 1], ts(o), o.repeat = 0);
    const h = {
      startTime: r ? this.resolvedAt ? this.resolvedAt - this.createdAt > FR ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...o,
      keyframes: t
    }, m = u && !c && NR(h), g = (b = (w = h.motionValue) == null ? void 0 : w.owner) == null ? void 0 : b.current;
    let y;
    if (m)
      try {
        y = new TR({
          ...h,
          element: g
        });
      } catch {
        y = new lr(h);
      }
    else
      y = new lr(h);
    y.finished.then(() => {
      this.notifyFinished();
    }).catch(je), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), wR()), this._animation;
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
function Ah(e, t, n, o = 0, r = 1) {
  const i = Array.from(e).sort((c, d) => c.sortNodePosition(d)).indexOf(t), s = e.size, a = (s - 1) * o;
  return typeof n == "function" ? n(i, s) : r === 1 ? i * o : a - i * o;
}
const VR = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function LR(e) {
  const t = VR.exec(e);
  if (!t)
    return [,];
  const [, n, o, r] = t;
  return [`--${n ?? o}`, r];
}
const $R = 4;
function Dh(e, t, n = 1) {
  vt(n <= $R, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [o, r] = LR(e);
  if (!o)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(o);
  if (i) {
    const s = i.trim();
    return Up(s) ? parseFloat(s) : s;
  }
  return pa(r) ? Dh(r, t, n + 1) : r;
}
const BR = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, zR = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), HR = {
  type: "keyframes",
  duration: 0.8
}, jR = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, GR = (e, { keyframes: t }) => t.length > 2 ? HR : In.has(e) ? e.startsWith("scale") ? zR(t[1]) : BR : jR;
function _h(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...o } = e;
    return { ...t, ...o };
  }
  return e;
}
function ba(e, t) {
  const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? _h(n, e) : n;
}
const WR = /* @__PURE__ */ new Set([
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
function UR(e) {
  for (const t in e)
    if (!WR.has(t))
      return !0;
  return !1;
}
const xa = (e, t, n, o = {}, r, i) => (s) => {
  const a = ba(o, e) || {}, l = a.delay || o.delay || 0;
  let { elapsed: c = 0 } = o;
  c = c - /* @__PURE__ */ De(l);
  const d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : r
  };
  UR(a) || Object.assign(d, GR(e, d)), d.duration && (d.duration = /* @__PURE__ */ De(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ De(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (ts(d), d.delay === 0 && (u = !0)), (_t.instantAnimations || _t.skipAnimations || r != null && r.shouldSkipAnimations) && (u = !0, ts(d), d.delay = 0), d.allowFlatten = !a.type && !a.ease, u && !i && t.get() !== void 0) {
    const f = Vr(d.keyframes, a);
    if (f !== void 0) {
      se.update(() => {
        d.onUpdate(f), d.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new lr(d) : new OR(d);
};
function Ql(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, o) => {
    t[0][o] = n.get(), t[1][o] = n.getVelocity();
  }), t;
}
function Sa(e, t, n, o) {
  if (typeof t == "function") {
    const [r, i] = Ql(o);
    t = t(n !== void 0 ? n : e.custom, r, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [r, i] = Ql(o);
    t = t(n !== void 0 ? n : e.custom, r, i);
  }
  return t;
}
function Xt(e, t, n) {
  const o = e.getProps();
  return Sa(o, t, n !== void 0 ? n : o.custom, e);
}
const kh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...kn
]), Jl = 30, KR = (e) => !isNaN(parseFloat(e));
class YR {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      var i;
      const r = Re.now();
      if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
        for (const s of this.dependents)
          s.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Re.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = KR(this.current));
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
    return process.env.NODE_ENV !== "production" && ua(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ca());
    const o = this.events[t].add(n);
    return t === "change" ? () => {
      o(), se.read(() => {
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
    const t = Re.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Jl)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Jl);
    return qp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Rn(e, t) {
  return new YR(e, t);
}
const ns = (e) => Array.isArray(e);
function XR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Rn(n));
}
function qR(e) {
  return ns(e) ? e[e.length - 1] || 0 : e;
}
function ZR(e, t) {
  const n = Xt(e, t);
  let { transitionEnd: o = {}, transition: r = {}, ...i } = n || {};
  i = { ...i, ...o };
  for (const s in i) {
    const a = qR(i[s]);
    XR(e, s, a);
  }
}
const ye = (e) => !!(e && e.getVelocity);
function QR(e) {
  return !!(ye(e) && e.add);
}
function os(e, t) {
  const n = e.getValue("willChange");
  if (QR(n))
    return n.add(t);
  if (!n && _t.WillChange) {
    const o = new _t.WillChange("auto");
    e.addValue("willChange", o), o.add(t);
  }
}
function Ca(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const JR = "framerAppearId", Ih = "data-" + Ca(JR);
function Nh(e) {
  return e.props[Ih];
}
function eE({ protectedKeys: e, needsAnimating: t }, n) {
  const o = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, o;
}
function Fh(e, t, { delay: n = 0, transitionOverride: o, type: r } = {}) {
  let { transition: i, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  i = i ? _h(i, l) : l;
  const c = i == null ? void 0 : i.reduceMotion;
  o && (i = o);
  const d = [], u = r && e.animationState && e.animationState.getState()[r];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null), m = a[f];
    if (m === void 0 || u && eE(u, f))
      continue;
    const g = {
      delay: n,
      ...ba(i || {}, f)
    }, y = h.get();
    if (y !== void 0 && !h.isAnimating() && !Array.isArray(m) && m === y && !g.velocity) {
      se.update(() => h.set(m));
      continue;
    }
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const S = Nh(e);
      if (S) {
        const R = window.MotionHandoffAnimation(S, f, se);
        R !== null && (g.startTime = R, w = !0);
      }
    }
    os(e, f);
    const b = c ?? e.shouldReduceMotion;
    h.start(xa(f, h, m, b && kh.has(f) ? { type: !1 } : g, e, w));
    const x = h.animation;
    x && d.push(x);
  }
  if (s) {
    const f = () => se.update(() => {
      s && ZR(e, s);
    });
    d.length ? Promise.all(d).then(f) : f();
  }
  return d;
}
function rs(e, t, n = {}) {
  var l;
  const o = Xt(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: r = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (r = n.transitionOverride);
  const i = o ? () => Promise.all(Fh(e, o, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: f } = r;
    return tE(e, t, c, d, u, f, n);
  } : () => Promise.resolve(), { when: a } = r;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [i, s] : [s, i];
    return c().then(() => d());
  } else
    return Promise.all([i(), s(n.delay)]);
}
function tE(e, t, n = 0, o = 0, r = 0, i = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(rs(l, t, {
      ...s,
      delay: n + (typeof o == "function" ? 0 : o) + Ah(e.variantChildren, l, o, r, i)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function nE(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const r = t.map((i) => rs(e, i, n));
    o = Promise.all(r);
  } else if (typeof t == "string")
    o = rs(e, t, n);
  else {
    const r = typeof t == "function" ? Xt(e, t, n.custom) : t;
    o = Promise.all(Fh(e, r, n));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const oE = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Oh = (e) => (t) => t.test(e), Vh = [_n, H, lt, Rt, MC, TC, oE], ec = (e) => Vh.find(Oh(e));
function rE(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Yp(e) : !0;
}
const iE = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function sE(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = n.match(ha) || [];
  if (!o)
    return e;
  const r = n.replace(o, "");
  let i = iE.has(t) ? 1 : 0;
  return o !== n && (i *= 100), t + "(" + i + r + ")";
}
const aE = /\b([a-z-]*)\(.*?\)/gu, is = {
  ...Ze,
  getAnimatableNone: (e) => {
    const t = e.match(aE);
    return t ? t.map(sE).join(" ") : e;
  }
}, ss = {
  ...Ze,
  getAnimatableNone: (e) => {
    const t = Ze.parse(e);
    return Ze.createTransformer(e)(t.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, tc = {
  ..._n,
  transform: Math.round
}, lE = {
  rotate: Rt,
  rotateX: Rt,
  rotateY: Rt,
  rotateZ: Rt,
  scale: Mo,
  scaleX: Mo,
  scaleY: Mo,
  scaleZ: Mo,
  skew: Rt,
  skewX: Rt,
  skewY: Rt,
  distance: H,
  translateX: H,
  translateY: H,
  translateZ: H,
  x: H,
  y: H,
  z: H,
  perspective: H,
  transformPerspective: H,
  opacity: Xn,
  originX: zl,
  originY: zl,
  originZ: H
}, Ra = {
  // Border props
  borderWidth: H,
  borderTopWidth: H,
  borderRightWidth: H,
  borderBottomWidth: H,
  borderLeftWidth: H,
  borderRadius: H,
  borderTopLeftRadius: H,
  borderTopRightRadius: H,
  borderBottomRightRadius: H,
  borderBottomLeftRadius: H,
  // Positioning props
  width: H,
  maxWidth: H,
  height: H,
  maxHeight: H,
  top: H,
  right: H,
  bottom: H,
  left: H,
  inset: H,
  insetBlock: H,
  insetBlockStart: H,
  insetBlockEnd: H,
  insetInline: H,
  insetInlineStart: H,
  insetInlineEnd: H,
  // Spacing props
  padding: H,
  paddingTop: H,
  paddingRight: H,
  paddingBottom: H,
  paddingLeft: H,
  paddingBlock: H,
  paddingBlockStart: H,
  paddingBlockEnd: H,
  paddingInline: H,
  paddingInlineStart: H,
  paddingInlineEnd: H,
  margin: H,
  marginTop: H,
  marginRight: H,
  marginBottom: H,
  marginLeft: H,
  marginBlock: H,
  marginBlockStart: H,
  marginBlockEnd: H,
  marginInline: H,
  marginInlineStart: H,
  marginInlineEnd: H,
  // Typography
  fontSize: H,
  // Misc
  backgroundPositionX: H,
  backgroundPositionY: H,
  ...lE,
  zIndex: tc,
  // SVG
  fillOpacity: Xn,
  strokeOpacity: Xn,
  numOctaves: tc
}, cE = {
  ...Ra,
  // Color props
  color: ue,
  backgroundColor: ue,
  outlineColor: ue,
  fill: ue,
  stroke: ue,
  // Border props
  borderColor: ue,
  borderTopColor: ue,
  borderRightColor: ue,
  borderBottomColor: ue,
  borderLeftColor: ue,
  filter: is,
  WebkitFilter: is,
  mask: ss,
  WebkitMask: ss
}, Lh = (e) => cE[e], uE = /* @__PURE__ */ new Set([is, ss]);
function $h(e, t) {
  let n = Lh(e);
  return uE.has(n) || (n = Ze), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const dE = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function fE(e, t, n) {
  let o = 0, r;
  for (; o < e.length && !r; ) {
    const i = e[o];
    typeof i == "string" && !dE.has(i) && Cn(i).values.length && (r = e[o]), o++;
  }
  if (r && n)
    for (const i of t)
      e[i] = $h(n, r);
}
class pE extends wa {
  constructor(t, n, o, r, i) {
    super(t, n, o, r, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: o } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let u = t[d];
      if (typeof u == "string" && (u = u.trim(), pa(u))) {
        const f = Dh(u, n.current);
        f !== void 0 && (t[d] = f), d === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !kh.has(o) || t.length !== 2)
      return;
    const [r, i] = t, s = ec(r), a = ec(i), l = Bl(r), c = Bl(i);
    if (l !== c && Pt[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (Xl(s) && Xl(a))
        for (let d = 0; d < t.length; d++) {
          const u = t[d];
          typeof u == "string" && (t[d] = parseFloat(u));
        }
      else Pt[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, o = [];
    for (let r = 0; r < t.length; r++)
      (t[r] === null || rE(t[r])) && o.push(r);
    o.length && fE(t, o, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Pt[o](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    const i = o.length - 1, s = o[i];
    o[i] = Pt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, c]) => {
      t.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Bh(e, t, n) {
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
const zh = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function hE(e) {
  return Kp(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Ea } = /* @__PURE__ */ ah(queueMicrotask, !1), qe = {
  x: !1,
  y: !1
};
function Hh() {
  return qe.x || qe.y;
}
function mE(e) {
  return e === "x" || e === "y" ? qe[e] ? null : (qe[e] = !0, () => {
    qe[e] = !1;
  }) : qe.x || qe.y ? null : (qe.x = qe.y = !0, () => {
    qe.x = qe.y = !1;
  });
}
function jh(e, t) {
  const n = Bh(e), o = new AbortController(), r = {
    passive: !0,
    ...t,
    signal: o.signal
  };
  return [n, r, () => o.abort()];
}
function gE(e) {
  return !(e.pointerType === "touch" || Hh());
}
function vE(e, t, n = {}) {
  const [o, r, i] = jh(e, n);
  return o.forEach((s) => {
    let a = !1, l = !1, c;
    const d = () => {
      s.removeEventListener("pointerleave", m);
    }, u = (y) => {
      c && (c(y), c = void 0), d();
    }, f = (y) => {
      a = !1, window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), l && (l = !1, u(y));
    }, h = () => {
      a = !0, window.addEventListener("pointerup", f, r), window.addEventListener("pointercancel", f, r);
    }, m = (y) => {
      if (y.pointerType !== "touch") {
        if (a) {
          l = !0;
          return;
        }
        u(y);
      }
    }, g = (y) => {
      if (!gE(y))
        return;
      l = !1;
      const w = t(s, y);
      typeof w == "function" && (c = w, s.addEventListener("pointerleave", m, r));
    };
    s.addEventListener("pointerenter", g, r), s.addEventListener("pointerdown", h, r);
  }), i;
}
const Gh = (e, t) => t ? e === t ? !0 : Gh(e, t.parentElement) : !1, Pa = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, yE = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function wE(e) {
  return yE.has(e.tagName) || e.isContentEditable === !0;
}
const bE = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function xE(e) {
  return bE.has(e.tagName) || e.isContentEditable === !0;
}
const $o = /* @__PURE__ */ new WeakSet();
function nc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function fi(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const SE = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const o = nc(() => {
    if ($o.has(n))
      return;
    fi(n, "down");
    const r = nc(() => {
      fi(n, "up");
    }), i = () => fi(n, "cancel");
    n.addEventListener("keyup", r, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", o, t), n.addEventListener("blur", () => n.removeEventListener("keydown", o), t);
};
function oc(e) {
  return Pa(e) && !Hh();
}
const rc = /* @__PURE__ */ new WeakSet();
function CE(e, t, n = {}) {
  const [o, r, i] = jh(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!oc(a) || rc.has(a))
      return;
    $o.add(l), n.stopPropagation && rc.add(a);
    const c = t(l, a), d = (h, m) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", f), $o.has(l) && $o.delete(l), oc(h) && typeof c == "function" && c(h, { success: m });
    }, u = (h) => {
      d(h, l === window || l === document || n.useGlobalTarget || Gh(l, h.target));
    }, f = (h) => {
      d(h, !1);
    };
    window.addEventListener("pointerup", u, r), window.addEventListener("pointercancel", f, r);
  };
  return o.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, r), hE(a) && (a.addEventListener("focus", (c) => SE(c, r)), !wE(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
function Ta(e) {
  return Kp(e) && "ownerSVGElement" in e;
}
const Bo = /* @__PURE__ */ new WeakMap();
let Et;
const Wh = (e, t, n) => (o, r) => r && r[0] ? r[0][e + "Size"] : Ta(o) && "getBBox" in o ? o.getBBox()[t] : o[n], RE = /* @__PURE__ */ Wh("inline", "width", "offsetWidth"), EE = /* @__PURE__ */ Wh("block", "height", "offsetHeight");
function PE({ target: e, borderBoxSize: t }) {
  var n;
  (n = Bo.get(e)) == null || n.forEach((o) => {
    o(e, {
      get width() {
        return RE(e, t);
      },
      get height() {
        return EE(e, t);
      }
    });
  });
}
function TE(e) {
  e.forEach(PE);
}
function ME() {
  typeof ResizeObserver > "u" || (Et = new ResizeObserver(TE));
}
function AE(e, t) {
  Et || ME();
  const n = Bh(e);
  return n.forEach((o) => {
    let r = Bo.get(o);
    r || (r = /* @__PURE__ */ new Set(), Bo.set(o, r)), r.add(t), Et == null || Et.observe(o);
  }), () => {
    n.forEach((o) => {
      const r = Bo.get(o);
      r == null || r.delete(t), r != null && r.size || Et == null || Et.unobserve(o);
    });
  };
}
const zo = /* @__PURE__ */ new Set();
let pn;
function DE() {
  pn = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    zo.forEach((t) => t(e));
  }, window.addEventListener("resize", pn);
}
function _E(e) {
  return zo.add(e), pn || DE(), () => {
    zo.delete(e), !zo.size && typeof pn == "function" && (window.removeEventListener("resize", pn), pn = void 0);
  };
}
function ic(e, t) {
  return typeof e == "function" ? _E(e) : AE(e, t);
}
function kE(e) {
  return Ta(e) && e.tagName === "svg";
}
const IE = [...Vh, ue, Ze], NE = (e) => IE.find(Oh(e)), sc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), hn = () => ({
  x: sc(),
  y: sc()
}), ac = () => ({ min: 0, max: 0 }), fe = () => ({
  x: ac(),
  y: ac()
}), FE = /* @__PURE__ */ new WeakMap();
function Lr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function qn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Ma = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Aa = ["initial", ...Ma];
function $r(e) {
  return Lr(e.animate) || Aa.some((t) => qn(e[t]));
}
function Uh(e) {
  return !!($r(e) || e.variants);
}
function OE(e, t, n) {
  for (const o in t) {
    const r = t[o], i = n[o];
    if (ye(r))
      e.addValue(o, r);
    else if (ye(i))
      e.addValue(o, Rn(r, { owner: e }));
    else if (i !== r)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        s.liveStyle === !0 ? s.jump(r) : s.hasAnimated || s.set(r);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Rn(s !== void 0 ? s : r, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const as = { current: null }, Kh = { current: !1 }, VE = typeof window < "u";
function LE() {
  if (Kh.current = !0, !!VE)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => as.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      as.current = !1;
}
const lc = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let cr = {};
function Yh(e) {
  cr = e;
}
function $E() {
  return cr;
}
class BE {
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
  constructor({ parent: t, props: n, presenceContext: o, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: s, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wa, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Re.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, se.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: d } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = $r(n), this.isVariantNode = Uh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const m = f[h];
      c[h] !== void 0 && ye(m) && m.set(c[h]);
    }
  }
  mount(t) {
    var n, o;
    if (this.hasBeenMounted)
      for (const r in this.initialValues)
        (n = this.values.get(r)) == null || n.jump(this.initialValues[r]), this.latestValues[r] = this.initialValues[r];
    this.current = t, FE.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Kh.current || LE(), this.shouldReduceMotion = as.current), process.env.NODE_ENV !== "production" && ua(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (o = this.parent) == null || o.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), kt(this.notifyUpdate), kt(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
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
    if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && Mh.has(t) && this.current instanceof HTMLElement) {
      const { factory: s, keyframes: a, times: l, ease: c, duration: d } = n.accelerate, u = new Ph({
        element: this.current,
        name: t,
        keyframes: a,
        times: l,
        ease: c,
        duration: /* @__PURE__ */ De(d)
      }), f = s(u);
      this.valueSubscriptions.set(t, () => {
        f(), u.cancel();
      });
      return;
    }
    const o = In.has(t);
    o && this.onBindTransform && this.onBindTransform();
    const r = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && se.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let i;
    typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      r(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in cr) {
      const n = cr[t];
      if (!n)
        continue;
      const { isEnabled: o, Feature: r } = n;
      if (!this.features[t] && r && o(this.props) && (this.features[t] = new r(this)), this.features[t]) {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe();
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
    for (let o = 0; o < lc.length; o++) {
      const r = lc[o];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const i = "on" + r, s = t[i];
      s && (this.propEventSubscriptions[r] = this.on(r, s));
    }
    this.prevMotionValues = OE(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o === void 0 && n !== void 0 && (o = Rn(n === null ? void 0 : n, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Up(o) || Yp(o)) ? o = parseFloat(o) : !NE(o) && Ze.test(n) && (o = $h(t, n)), this.setBaseTarget(t, ye(o) ? o.get() : o)), ye(o) ? o.get() : o;
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
    let o;
    if (typeof n == "string" || typeof n == "object") {
      const s = Sa(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      s && (o = s[t]);
    }
    if (n && o !== void 0)
      return o;
    const r = this.getBaseTargetFromProps(this.props, t);
    return r !== void 0 && !ye(r) ? r : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ca()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ea.render(this.render);
  }
}
class Xh extends BE {
  constructor() {
    super(...arguments), this.KeyframeResolver = pE;
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
    ye(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Lt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function qh({ top: e, left: t, right: n, bottom: o }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: o }
  };
}
function zE({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function HE(e, t) {
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
function pi(e) {
  return e === void 0 || e === 1;
}
function ls({ scale: e, scaleX: t, scaleY: n }) {
  return !pi(e) || !pi(t) || !pi(n);
}
function Gt(e) {
  return ls(e) || Zh(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Zh(e) {
  return cc(e.x) || cc(e.y);
}
function cc(e) {
  return e && e !== "0%";
}
function ur(e, t, n) {
  const o = e - n, r = t * o;
  return n + r;
}
function uc(e, t, n, o, r) {
  return r !== void 0 && (e = ur(e, r, o)), ur(e, n, o) + t;
}
function cs(e, t = 0, n = 1, o, r) {
  e.min = uc(e.min, t, n, o, r), e.max = uc(e.max, t, n, o, r);
}
function Qh(e, { x: t, y: n }) {
  cs(e.x, t.translate, t.scale, t.originPoint), cs(e.y, n.translate, n.scale, n.originPoint);
}
const dc = 0.999999999999, fc = 1.0000000000001;
function jE(e, t, n, o = !1) {
  var a;
  const r = n.length;
  if (!r)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let l = 0; l < r; l++) {
    i = n[l], s = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (o && i.options.layoutScroll && i.scroll && i !== i.root && (rt(e.x, -i.scroll.offset.x), rt(e.y, -i.scroll.offset.y)), s && (t.x *= s.x.scale, t.y *= s.y.scale, Qh(e, s)), o && Gt(i.latestValues) && Ho(e, i.latestValues, (a = i.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < fc && t.x > dc && (t.x = 1), t.y < fc && t.y > dc && (t.y = 1);
}
function rt(e, t) {
  e.min += t, e.max += t;
}
function pc(e, t, n, o, r = 0.5) {
  const i = le(e.min, e.max, r);
  cs(e, t, n, i, o);
}
function hc(e, t) {
  return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Ho(e, t, n) {
  const o = n ?? e;
  pc(e.x, hc(t.x, o.x), t.scaleX, t.scale, t.originX), pc(e.y, hc(t.y, o.y), t.scaleY, t.scale, t.originY);
}
function Jh(e, t) {
  return qh(HE(e.getBoundingClientRect(), t));
}
function GE(e, t, n) {
  const o = Jh(e, n), { scroll: r } = t;
  return r && (rt(o.x, r.offset.x), rt(o.y, r.offset.y)), o;
}
const WE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, UE = kn.length;
function KE(e, t, n) {
  let o = "", r = !0;
  for (let i = 0; i < UE; i++) {
    const s = kn[i], a = e[s];
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
      const c = zh(a, Ra[s]);
      if (!l) {
        r = !1;
        const d = WE[s] || s;
        o += `${d}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return o = o.trim(), n ? o = n(t, r ? "" : o) : r && (o = "none"), o;
}
function Da(e, t, n) {
  const { style: o, vars: r, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (In.has(l)) {
      s = !0;
      continue;
    } else if (ch(l)) {
      r[l] = c;
      continue;
    } else {
      const d = zh(c, Ra[l]);
      l.startsWith("origin") ? (a = !0, i[l] = d) : o[l] = d;
    }
  }
  if (t.transform || (s || n ? o.transform = KE(t, e.transform, n) : o.transform && (o.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = i;
    o.transformOrigin = `${l} ${c} ${d}`;
  }
}
function em(e, { style: t, vars: n }, o, r) {
  const i = e.style;
  let s;
  for (s in t)
    i[s] = t[s];
  r == null || r.applyProjectionStyles(i, o);
  for (s in n)
    i.setProperty(s, n[s]);
}
function mc(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const On = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (H.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = mc(e, t.target.x), o = mc(e, t.target.y);
    return `${n}% ${o}%`;
  }
}, YE = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const o = e, r = Ze.parse(e);
    if (r.length > 5)
      return o;
    const i = Ze.createTransformer(e), s = typeof r[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    r[0 + s] /= a, r[1 + s] /= l;
    const c = le(a, l, 0.5);
    return typeof r[2 + s] == "number" && (r[2 + s] /= c), typeof r[3 + s] == "number" && (r[3 + s] /= c), i(r);
  }
}, us = {
  borderRadius: {
    ...On,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: On,
  borderTopRightRadius: On,
  borderBottomLeftRadius: On,
  borderBottomRightRadius: On,
  boxShadow: YE
};
function tm(e, { layout: t, layoutId: n }) {
  return In.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!us[e] || e === "opacity");
}
function _a(e, t, n) {
  var s;
  const o = e.style, r = t == null ? void 0 : t.style, i = {};
  if (!o)
    return i;
  for (const a in o)
    (ye(o[a]) || r && ye(r[a]) || tm(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (i[a] = o[a]);
  return i;
}
function XE(e) {
  return window.getComputedStyle(e);
}
class qE extends Xh {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = em;
  }
  readValueFromInstance(t, n) {
    var o;
    if (In.has(n))
      return (o = this.projection) != null && o.isProjecting ? qi(n) : hR(t, n);
    {
      const r = XE(t), i = (ch(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Jh(t, n);
  }
  build(t, n, o) {
    Da(t, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return _a(t, n, o);
  }
}
const ZE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, QE = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function JE(e, t, n = 1, o = 0, r = !0) {
  e.pathLength = 1;
  const i = r ? ZE : QE;
  e[i.offset] = `${-o}`, e[i.array] = `${t} ${n}`;
}
const eP = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function nm(e, {
  attrX: t,
  attrY: n,
  attrScale: o,
  pathLength: r,
  pathSpacing: i = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, d) {
  if (Da(e, a, c), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: u, style: f } = e;
  u.transform && (f.transform = u.transform, delete u.transform), (f.transform || u.transformOrigin) && (f.transformOrigin = u.transformOrigin ?? "50% 50%", delete u.transformOrigin), f.transform && (f.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete u.transformBox);
  for (const h of eP)
    u[h] !== void 0 && (f[h] = u[h], delete u[h]);
  t !== void 0 && (u.x = t), n !== void 0 && (u.y = n), o !== void 0 && (u.scale = o), r !== void 0 && JE(u, r, i, s, !1);
}
const om = /* @__PURE__ */ new Set([
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
]), rm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function tP(e, t, n, o) {
  em(e, t, void 0, o);
  for (const r in t.attrs)
    e.setAttribute(om.has(r) ? r : Ca(r), t.attrs[r]);
}
function im(e, t, n) {
  const o = _a(e, t, n);
  for (const r in e)
    if (ye(e[r]) || ye(t[r])) {
      const i = kn.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      o[i] = e[r];
    }
  return o;
}
class nP extends Xh {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = fe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const o = Lh(n);
      return o && o.default || 0;
    }
    return n = om.has(n) ? n : Ca(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return im(t, n, o);
  }
  build(t, n, o) {
    nm(t, n, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(t, n, o, r) {
    tP(t, n, o, r);
  }
  mount(t) {
    this.isSVGTag = rm(t.tagName), super.mount(t);
  }
}
const oP = Aa.length;
function sm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? sm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < oP; n++) {
    const o = Aa[n], r = e.props[o];
    (qn(r) || r === !1) && (t[o] = r);
  }
  return t;
}
function am(e, t) {
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
const rP = [...Ma].reverse(), iP = Ma.length;
function sP(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: o }) => nE(e, n, o)));
}
function aP(e) {
  let t = sP(e), n = gc(), o = !0, r = !1;
  const i = (c) => (d, u) => {
    var h;
    const f = Xt(e, u, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
    if (f) {
      const { transition: m, transitionEnd: g, ...y } = f;
      d = { ...d, ...y, ...g };
    }
    return d;
  };
  function s(c) {
    t = c(e);
  }
  function a(c) {
    const { props: d } = e, u = sm(e.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let w = 0; w < iP; w++) {
      const b = rP[w], x = n[b], S = d[b] !== void 0 ? d[b] : u[b], R = qn(S), E = b === c ? x.isActive : null;
      E === !1 && (g = w);
      let T = S === u[b] && S !== d[b] && R;
      if (T && (o || r) && e.manuallyAnimateOnMount && (T = !1), x.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
      !S && !x.prevProp || // Or if the prop doesn't define an animation
      Lr(S) || typeof S == "boolean")
        continue;
      if (b === "exit" && x.isActive && E !== !0) {
        x.prevResolvedValues && (m = {
          ...m,
          ...x.prevResolvedValues
        });
        continue;
      }
      const C = lP(x.prevProp, S);
      let I = C || // If we're making this variant active, we want to always make it active
      b === c && x.isActive && !T && R || // If we removed a higher-priority variant (i is in reverse order)
      w > g && R, A = !1;
      const L = Array.isArray(S) ? S : [S];
      let W = L.reduce(i(b), {});
      E === !1 && (W = {});
      const { prevResolvedValues: q = {} } = x, K = {
        ...q,
        ...W
      }, J = (P) => {
        I = !0, h.has(P) && (A = !0, h.delete(P)), x.needsAnimating[P] = !0;
        const k = e.getValue(P);
        k && (k.liveStyle = !1);
      };
      for (const P in K) {
        const k = W[P], _ = q[P];
        if (m.hasOwnProperty(P))
          continue;
        let ne = !1;
        ns(k) && ns(_) ? ne = !am(k, _) : ne = k !== _, ne ? k != null ? J(P) : h.add(P) : k !== void 0 && h.has(P) ? J(P) : x.protectedKeys[P] = !0;
      }
      x.prevProp = S, x.prevResolvedValues = W, x.isActive && (m = { ...m, ...W }), (o || r) && e.blockInitialAnimation && (I = !1);
      const O = T && C;
      I && (!O || A) && f.push(...L.map((P) => {
        const k = { type: b };
        if (typeof P == "string" && (o || r) && !O && e.manuallyAnimateOnMount && e.parent) {
          const { parent: _ } = e, ne = Xt(_, P);
          if (_.enteringChildren && ne) {
            const { delayChildren: M } = ne.transition || {};
            k.delay = Ah(_.enteringChildren, e, M);
          }
        }
        return {
          animation: P,
          options: k
        };
      }));
    }
    if (h.size) {
      const w = {};
      if (typeof d.initial != "boolean") {
        const b = Xt(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        b && b.transition && (w.transition = b.transition);
      }
      h.forEach((b) => {
        const x = e.getBaseTarget(b), S = e.getValue(b);
        S && (S.liveStyle = !0), w[b] = x ?? null;
      }), f.push({ animation: w });
    }
    let y = !!f.length;
    return o && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (y = !1), o = !1, r = !1, y ? t(f) : Promise.resolve();
  }
  function l(c, d) {
    var f;
    if (n[c].isActive === d)
      return Promise.resolve();
    (f = e.variantChildren) == null || f.forEach((h) => {
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
      n = gc(), r = !0;
    }
  };
}
function lP(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !am(t, e) : !1;
}
function jt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function gc() {
  return {
    animate: jt(!0),
    whileInView: jt(),
    whileHover: jt(),
    whileTap: jt(),
    whileDrag: jt(),
    whileFocus: jt(),
    exit: jt()
  };
}
function ds(e, t) {
  e.min = t.min, e.max = t.max;
}
function Xe(e, t) {
  ds(e.x, t.x), ds(e.y, t.y);
}
function vc(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
const lm = 1e-4, cP = 1 - lm, uP = 1 + lm, cm = 0.01, dP = 0 - cm, fP = 0 + cm;
function Ee(e) {
  return e.max - e.min;
}
function pP(e, t, n) {
  return Math.abs(e - t) <= n;
}
function yc(e, t, n, o = 0.5) {
  e.origin = o, e.originPoint = le(t.min, t.max, e.origin), e.scale = Ee(n) / Ee(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= cP && e.scale <= uP || isNaN(e.scale)) && (e.scale = 1), (e.translate >= dP && e.translate <= fP || isNaN(e.translate)) && (e.translate = 0);
}
function zn(e, t, n, o) {
  yc(e.x, t.x, n.x, o ? o.originX : void 0), yc(e.y, t.y, n.y, o ? o.originY : void 0);
}
function wc(e, t, n, o = 0) {
  const r = o ? le(n.min, n.max, o) : n.min;
  e.min = r + t.min, e.max = e.min + Ee(t);
}
function hP(e, t, n, o) {
  wc(e.x, t.x, n.x, o == null ? void 0 : o.x), wc(e.y, t.y, n.y, o == null ? void 0 : o.y);
}
function bc(e, t, n, o = 0) {
  const r = o ? le(n.min, n.max, o) : n.min;
  e.min = t.min - r, e.max = e.min + Ee(t);
}
function dr(e, t, n, o) {
  bc(e.x, t.x, n.x, o == null ? void 0 : o.x), bc(e.y, t.y, n.y, o == null ? void 0 : o.y);
}
function xc(e, t, n, o, r) {
  return e -= t, e = ur(e, 1 / n, o), r !== void 0 && (e = ur(e, 1 / r, o)), e;
}
function mP(e, t = 0, n = 1, o = 0.5, r, i = e, s = e) {
  if (lt.test(t) && (t = parseFloat(t), t = le(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = le(i.min, i.max, o);
  e === i && (a -= t), e.min = xc(e.min, t, n, a, r), e.max = xc(e.max, t, n, a, r);
}
function Sc(e, t, [n, o, r], i, s) {
  mP(e, t[n], t[o], t[r], t.scale, i, s);
}
const gP = ["x", "scaleX", "originX"], vP = ["y", "scaleY", "originY"];
function Cc(e, t, n, o) {
  Sc(e.x, t, gP, n ? n.x : void 0, o ? o.x : void 0), Sc(e.y, t, vP, n ? n.y : void 0, o ? o.y : void 0);
}
function Rc(e) {
  return e.translate === 0 && e.scale === 1;
}
function um(e) {
  return Rc(e.x) && Rc(e.y);
}
function Ec(e, t) {
  return e.min === t.min && e.max === t.max;
}
function yP(e, t) {
  return Ec(e.x, t.x) && Ec(e.y, t.y);
}
function Pc(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function dm(e, t) {
  return Pc(e.x, t.x) && Pc(e.y, t.y);
}
function Tc(e) {
  return Ee(e.x) / Ee(e.y);
}
function Mc(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function ot(e) {
  return [e("x"), e("y")];
}
function wP(e, t, n) {
  let o = "";
  const r = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((r || i || s) && (o = `translate3d(${r}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: d, rotateX: u, rotateY: f, skewX: h, skewY: m } = n;
    c && (o = `perspective(${c}px) ${o}`), d && (o += `rotate(${d}deg) `), u && (o += `rotateX(${u}deg) `), f && (o += `rotateY(${f}deg) `), h && (o += `skewX(${h}deg) `), m && (o += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (o += `scale(${a}, ${l})`), o || "none";
}
const fm = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], bP = fm.length, Ac = (e) => typeof e == "string" ? parseFloat(e) : e, Dc = (e) => typeof e == "number" || H.test(e);
function xP(e, t, n, o, r, i) {
  r ? (e.opacity = le(0, n.opacity ?? 1, SP(o)), e.opacityExit = le(t.opacity ?? 1, 0, CP(o))) : i && (e.opacity = le(t.opacity ?? 1, n.opacity ?? 1, o));
  for (let s = 0; s < bP; s++) {
    const a = fm[s];
    let l = _c(t, a), c = _c(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Dc(l) === Dc(c) ? (e[a] = Math.max(le(Ac(l), Ac(c), o), 0), (lt.test(c) || lt.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, o));
}
function _c(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const SP = /* @__PURE__ */ pm(0, 0.5, oh), CP = /* @__PURE__ */ pm(0.5, 0.95, je);
function pm(e, t, n) {
  return (o) => o < e ? 0 : o > t ? 1 : n(/* @__PURE__ */ Yn(e, t, o));
}
function RP(e, t, n) {
  const o = ye(e) ? e : Rn(e);
  return o.start(xa("", o, t, n)), o.animation;
}
function Zn(e, t, n, o = { passive: !0 }) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n);
}
const EP = (e, t) => e.depth - t.depth;
class PP {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    la(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    rr(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(EP), this.isDirty = !1, this.children.forEach(t);
  }
}
function TP(e, t) {
  const n = Re.now(), o = ({ timestamp: r }) => {
    const i = r - n;
    i >= t && (kt(o), e(i - t));
  };
  return se.setup(o, !0), () => kt(o);
}
function jo(e) {
  return ye(e) ? e.get() : e;
}
class MP {
  constructor() {
    this.members = [];
  }
  add(t) {
    la(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const o = this.members[n];
      if (o === t || o === this.lead || o === this.prevLead)
        continue;
      const r = o.instance;
      (!r || r.isConnected === !1) && !o.snapshot && (rr(this.members, o), o.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (rr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const { layoutDependency: i } = o.options, { layoutDependency: s } = t.options;
      (i === void 0 || i !== s) && (t.resumeFrom = o, n && (o.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), (r = t.root) != null && r.isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, o, r, i, s;
      (o = (n = t.options).onExitComplete) == null || o.call(n), (s = (r = t.resumingFrom) == null ? void 0 : (i = r.options).onExitComplete) == null || s.call(i);
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
const Go = {
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
}, hi = ["", "X", "Y", "Z"], AP = 1e3;
let DP = 0;
function mi(e, t, n, o) {
  const { latestValues: r } = t;
  r[e] && (n[e] = r[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function hm(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Nh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: r, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", se, !(r || i));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && hm(o);
}
function mm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: o, resetTransform: r }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = DP++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(IP), this.nodes.forEach($P), this.nodes.forEach(BP), this.nodes.forEach(NP);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new PP());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new ca()), this.eventHandlers.get(s).add(a);
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
      this.isSVG = Ta(s) && !kE(s), this.instance = s;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let d, u = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        se.read(() => {
          u = window.innerWidth;
        }), e(s, () => {
          const h = window.innerWidth;
          h !== u && (u = h, this.root.updateBlockedByResize = !0, d && d(), d = TP(f, 250), Go.hasAnimatedSinceResize && (Go.hasAnimatedSinceResize = !1, this.nodes.forEach(Nc)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: u, hasRelativeLayoutChanged: f, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || c.getDefaultTransition() || WP, { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = c.getProps(), w = !this.targetLayout || !dm(this.targetLayout, h), b = !u && f;
        if (this.options.layoutRoot || this.resumeFrom || b || u && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const x = {
            ...ba(m, "layout"),
            onPlay: g,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x), this.setAnimationOrigin(d, b);
        } else
          u || Nc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), kt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(zP), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach(OP), this.nodes.forEach(kc);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ic);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(VP), this.nodes.forEach(LP), this.nodes.forEach(_P), this.nodes.forEach(kP)) : this.nodes.forEach(Ic), this.clearAllSnapshots();
      const a = Re.now();
      ge.delta = ct(0, 1e3 / 60, a - ge.timestamp), ge.timestamp = a, ge.isProcessing = !0, si.update.process(ge), si.preRender.process(ge), si.render.process(ge), ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ea.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(FP), this.sharedNodes.forEach(HP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      se.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ee(this.snapshot.measuredBox.x) && !Ee(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = fe()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && this.instance) {
        const l = o(this.instance);
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
      if (!r)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !um(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, d = c !== this.prevTransformTemplateValue;
      s && this.instance && (a || Gt(this.latestValues) || d) && (r(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), UP(l), {
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
        return fe();
      const a = s.measureViewportBox();
      if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(KP))) {
        const { scroll: d } = this.root;
        d && (rt(a.x, d.offset.x), rt(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = fe();
      if (Xe(a, s), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: f } = d;
        d !== this.root && u && f.layoutScroll && (u.wasRoot && Xe(a, s), rt(a.x, u.offset.x), rt(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1, l) {
      var d, u;
      const c = l || fe();
      Xe(c, s);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (rt(c.x, -h.scroll.offset.x), rt(c.y, -h.scroll.offset.y)), Gt(h.latestValues) && Ho(c, h.latestValues, (d = h.layout) == null ? void 0 : d.layoutBox);
      }
      return Gt(this.latestValues) && Ho(c, this.latestValues, (u = this.layout) == null ? void 0 : u.layoutBox), c;
    }
    removeTransform(s) {
      var l;
      const a = fe();
      Xe(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!Gt(d.latestValues))
          continue;
        let u;
        d.instance && (ls(d.latestValues) && d.updateSnapshot(), u = fe(), Xe(u, d.measurePageBox())), Cc(a, d.latestValues, (l = d.snapshot) == null ? void 0 : l.layoutBox, u);
      }
      return Gt(this.latestValues) && Cc(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
      this.resolvedRelativeTargetAt = ge.timestamp;
      const f = this.getClosestProjectingParent();
      f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = fe(), this.targetWithTransforms = fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), hP(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Xe(this.target, this.layout.layoutBox), Qh(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ls(this.parent.latestValues) || Zh(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(s, a, l) {
      this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), dr(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Xe(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var m;
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let l = !0;
      if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ge.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const u = this.treeScale.x, f = this.treeScale.y;
      jE(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = fe());
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (vc(this.prevProjectionDelta.x, this.projectionDelta.x), vc(this.prevProjectionDelta.y, this.projectionDelta.y)), zn(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== u || this.treeScale.y !== f || !Mc(this.projectionDelta.x, this.prevProjectionDelta.x) || !Mc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
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
      this.prevProjectionDelta = hn(), this.projectionDelta = hn(), this.projectionDeltaWithTransform = hn();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, d = { ...this.latestValues }, u = hn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = fe(), h = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, g = h !== m, y = this.getStack(), w = !y || y.members.length <= 1, b = !!(g && !w && this.options.crossfade === !0 && !this.path.some(GP));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (S) => {
        const R = S / 1e3;
        Fc(u.x, s.x, R), Fc(u.y, s.y, R), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (dr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), jP(this.relativeTarget, this.relativeTargetOrigin, f, R), x && yP(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = fe()), Xe(x, this.relativeTarget)), g && (this.animationValues = d, xP(d, c, this.latestValues, R, b, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, c;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (kt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = se.update(() => {
        Go.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Rn(0)), this.motionValue.jump(0, !1), this.currentAnimation = RP(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(AP), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: d } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && gm(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || fe();
          const u = Ee(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + u;
          const f = Ee(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + f;
        }
        Xe(a, l), Ho(a, d), zn(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new MP()), this.sharedNodes.get(s).add(a);
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
      l.z && mi("z", s, c, this.animationValues);
      for (let d = 0; d < hi.length; d++)
        mi(`rotate${hi[d]}`, s, c, this.animationValues), mi(`skew${hi[d]}`, s, c, this.animationValues);
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
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = jo(a == null ? void 0 : a.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = jo(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Gt(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let u = wP(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (u = l(d, u)), s.transform = u;
      const { x: f, y: h } = this.projectionDelta;
      s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`, c.animationValues ? s.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : s.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const m in us) {
        if (d[m] === void 0)
          continue;
        const { correct: g, applyTo: y, isCSSVariable: w } = us[m], b = u === "none" ? d[m] : g(d[m], c);
        if (y) {
          const x = y.length;
          for (let S = 0; S < x; S++)
            s[y[S]] = b;
        } else
          w ? this.options.visualElement.renderState.vars[m] = b : s[m] = b;
      }
      this.options.layoutId && (s.pointerEvents = c === this ? jo(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(kc), this.root.sharedNodes.clear();
    }
  };
}
function _P(e) {
  e.updateLayout();
}
function kP(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = e.layout, { animationType: i } = e.options, s = t.source !== e.layout.source;
    if (i === "size")
      ot((u) => {
        const f = s ? t.measuredBox[u] : t.layoutBox[u], h = Ee(f);
        f.min = o[u].min, f.max = f.min + h;
      });
    else if (i === "x" || i === "y") {
      const u = i === "x" ? "y" : "x";
      ds(s ? t.measuredBox[u] : t.layoutBox[u], o[u]);
    } else gm(i, t.layoutBox, o) && ot((u) => {
      const f = s ? t.measuredBox[u] : t.layoutBox[u], h = Ee(o[u]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const a = hn();
    zn(a, o, t.layoutBox);
    const l = hn();
    s ? zn(l, e.applyTransform(r, !0), t.measuredBox) : zn(l, o, t.layoutBox);
    const c = !um(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: h } = u;
        if (f && h) {
          const m = e.options.layoutAnchor || void 0, g = fe();
          dr(g, t.layoutBox, f.layoutBox, m);
          const y = fe();
          dr(y, o, h.layoutBox, m), dm(g, y) || (d = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = u);
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
function IP(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function NP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function FP(e) {
  e.clearSnapshot();
}
function kc(e) {
  e.clearMeasurements();
}
function OP(e) {
  e.isLayoutDirty = !0, e.updateLayout();
}
function Ic(e) {
  e.isLayoutDirty = !1;
}
function VP(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function LP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Nc(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function $P(e) {
  e.resolveTargetDelta();
}
function BP(e) {
  e.calcProjection();
}
function zP(e) {
  e.resetSkewAndRotation();
}
function HP(e) {
  e.removeLeadSnapshot();
}
function Fc(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Oc(e, t, n, o) {
  e.min = le(t.min, n.min, o), e.max = le(t.max, n.max, o);
}
function jP(e, t, n, o) {
  Oc(e.x, t.x, n.x, o), Oc(e.y, t.y, n.y, o);
}
function GP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const WP = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Vc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Lc = Vc("applewebkit/") && !Vc("chrome/") ? Math.round : je;
function $c(e) {
  e.min = Lc(e.min), e.max = Lc(e.max);
}
function UP(e) {
  $c(e.x), $c(e.y);
}
function gm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !pP(Tc(t), Tc(n), 0.2);
}
function KP(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const YP = mm({
  attachResizeListener: (e, t) => Zn(e, "resize", t),
  measureScroll: () => {
    var e, t;
    return {
      x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), gi = {
  current: void 0
}, vm = mm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!gi.current) {
      const e = new YP({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), gi.current = e;
    }
    return gi.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), ym = En({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function XP(e = !0) {
  const t = Ae(aa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: o, register: r } = t, i = lg();
  Ss(() => {
    if (e)
      return r(i);
  }, [e]);
  const s = lu(() => e && o && o(i), [i, o, e]);
  return !n && o ? [!1, s] : [!0];
}
const wm = En({ strict: !1 }), Bc = {
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
let zc = !1;
function qP() {
  if (zc)
    return;
  const e = {};
  for (const t in Bc)
    e[t] = {
      isEnabled: (n) => Bc[t].some((o) => !!n[o])
    };
  Yh(e), zc = !0;
}
function bm() {
  return qP(), $E();
}
function ZP(e) {
  const t = bm();
  for (const n in e)
    t[n] = {
      ...t[n],
      ...e[n]
    };
  Yh(t);
}
const QP = /* @__PURE__ */ new Set([
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
function fr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || QP.has(e);
}
let xm = (e) => !fr(e);
function JP(e) {
  typeof e == "function" && (xm = (t) => t.startsWith("on") ? !fr(t) : e(t));
}
try {
  JP(require("@emotion/is-prop-valid").default);
} catch {
}
function eT(e, t, n) {
  const o = {};
  for (const r in e)
    r === "values" && typeof e.values == "object" || ye(e[r]) || (xm(r) || n === !0 && fr(r) || !t && !fr(r) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && r.startsWith("onDrag")) && (o[r] = e[r]);
  return o;
}
const Br = /* @__PURE__ */ En({});
function tT(e, t) {
  if ($r(e)) {
    const { initial: n, animate: o } = e;
    return {
      initial: n === !1 || qn(n) ? n : void 0,
      animate: qn(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function nT(e) {
  const { initial: t, animate: n } = tT(e, Ae(Br));
  return pr(() => ({ initial: t, animate: n }), [Hc(t), Hc(n)]);
}
function Hc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ka = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Sm(e, t, n) {
  for (const o in t)
    !ye(t[o]) && !tm(o, n) && (e[o] = t[o]);
}
function oT({ transformTemplate: e }, t) {
  return pr(() => {
    const n = ka();
    return Da(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function rT(e, t) {
  const n = e.style || {}, o = {};
  return Sm(o, n, e), Object.assign(o, oT(e, t)), o;
}
function iT(e, t) {
  const n = {}, o = rT(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const Cm = () => ({
  ...ka(),
  attrs: {}
});
function sT(e, t, n, o) {
  const r = pr(() => {
    const i = Cm();
    return nm(i, t, rm(o), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Sm(i, e.style, e), r.style = { ...i, ...r.style };
  }
  return r;
}
const aT = [
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
function Ia(e) {
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
      !!(aT.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function lT(e, t, n, { latestValues: o }, r, i = !1, s) {
  const l = (s ?? Ia(e) ? sT : iT)(t, o, r, e), c = eT(t, typeof e == "string", i), d = e !== cu ? { ...c, ...l, ref: n } : {}, { children: u } = t, f = pr(() => ye(u) ? u.get() : u, [u]);
  return Uo(e, {
    ...d,
    children: f
  });
}
function cT({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, o, r) {
  return {
    latestValues: uT(n, o, r, e),
    renderState: t()
  };
}
function uT(e, t, n, o) {
  const r = {}, i = o(e, {});
  for (const f in i)
    r[f] = jo(i[f]);
  let { initial: s, animate: a } = e;
  const l = $r(e), c = Uh(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const u = d ? a : s;
  if (u && typeof u != "boolean" && !Lr(u)) {
    const f = Array.isArray(u) ? u : [u];
    for (let h = 0; h < f.length; h++) {
      const m = Sa(e, f[h]);
      if (m) {
        const { transitionEnd: g, transition: y, ...w } = m;
        for (const b in w) {
          let x = w[b];
          if (Array.isArray(x)) {
            const S = d ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (r[b] = x);
        }
        for (const b in g)
          r[b] = g[b];
      }
    }
  }
  return r;
}
const Rm = (e) => (t, n) => {
  const o = Ae(Br), r = Ae(aa), i = () => cT(e, t, o, r);
  return n ? i() : aC(i);
}, dT = /* @__PURE__ */ Rm({
  scrapeMotionValuesFromProps: _a,
  createRenderState: ka
}), fT = /* @__PURE__ */ Rm({
  scrapeMotionValuesFromProps: im,
  createRenderState: Cm
}), pT = Symbol.for("motionComponentSymbol");
function hT(e, t, n) {
  const o = Wt(n);
  uu(() => {
    o.current = n;
  });
  const r = Wt(null);
  return lu((i) => {
    var a;
    i && ((a = e.onMount) == null || a.call(e, i));
    const s = o.current;
    if (typeof s == "function")
      if (i) {
        const l = s(i);
        typeof l == "function" && (r.current = l);
      } else r.current ? (r.current(), r.current = null) : s(i);
    else s && (s.current = i);
    t && (i ? t.mount(i) : t.unmount());
  }, [t]);
}
const Em = En({});
function un(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function mT(e, t, n, o, r, i) {
  var x, S;
  const { visualElement: s } = Ae(Br), a = Ae(wm), l = Ae(aa), c = Ae(ym), d = c.reducedMotion, u = c.skipAnimations, f = Wt(null), h = Wt(!1);
  o = o || a.renderer, !f.current && o && (f.current = o(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: d,
    skipAnimations: u,
    isSVG: i
  }), h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const m = f.current, g = Ae(Em);
  m && !m.projection && r && (m.type === "html" || m.type === "svg") && gT(f.current, n, r, g);
  const y = Wt(!1);
  uu(() => {
    m && y.current && m.update(n, l);
  });
  const w = n[Ih], b = Wt(!!w && typeof window < "u" && !((x = window.MotionHandoffIsComplete) != null && x.call(window, w)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, w)));
  return cC(() => {
    h.current = !0, m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), b.current && m.animationState && m.animationState.animateChanges());
  }), Ss(() => {
    m && (!b.current && m.animationState && m.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var R;
      (R = window.MotionHandoffMarkAsComplete) == null || R.call(window, w);
    }), b.current = !1), m.enteringChildren = void 0);
  }), m;
}
function gT(e, t, n, o) {
  const { layoutId: r, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutAnchor: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Pm(e.parent)), e.projection.setOptions({
    layoutId: r,
    layout: i,
    alwaysMeasureLayout: !!s || a && un(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: o,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: d
  });
}
function Pm(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Pm(e.parent);
}
function vi(e, { forwardMotionProps: t = !1, type: n } = {}, o, r) {
  o && ZP(o);
  const i = n ? n === "svg" : Ia(e), s = i ? fT : dT;
  function a(c, d) {
    let u;
    const f = {
      ...Ae(ym),
      ...c,
      layoutId: vT(c)
    }, { isStatic: h } = f, m = nT(c), g = s(c, h);
    if (!h && typeof window < "u") {
      yT(f, o);
      const y = wT(f);
      u = y.MeasureLayout, m.visualElement = mT(e, g, f, r, y.ProjectionNode, i);
    }
    return G(Br.Provider, { value: m, children: [u && m.visualElement ? v(u, { visualElement: m.visualElement, ...f }) : null, lT(e, c, hT(g, m.visualElement, d), g, h, t, i)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = xs(a);
  return l[pT] = e, l;
}
function vT({ layoutId: e }) {
  const t = Ae(Wp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function yT(e, t) {
  const n = Ae(wm).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Dn(!1, o, "lazy-strict-mode") : vt(!1, o, "lazy-strict-mode");
  }
}
function wT(e) {
  const t = bm(), { drag: n, layout: o } = t;
  if (!n && !o)
    return {};
  const r = { ...n, ...o };
  return {
    MeasureLayout: n != null && n.isEnabled(e) || o != null && o.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function bT(e, t) {
  if (typeof Proxy > "u")
    return vi;
  const n = /* @__PURE__ */ new Map(), o = (i, s) => vi(i, s, e, t), r = (i, s) => (process.env.NODE_ENV !== "production" && ua(!1, "motion() is deprecated. Use motion.create() instead."), o(i, s));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, s) => s === "create" ? o : (n.has(s) || n.set(s, vi(s, void 0, e, t)), n.get(s))
  });
}
const xT = (e, t) => t.isSVG ?? Ia(e) ? new nP(t) : new qE(t, {
  allowProjection: e !== cu
});
class ST extends Lt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = aP(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Lr(t) && (this.unmountControls = t.subscribe(this.node));
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
let CT = 0;
class RT extends Lt {
  constructor() {
    super(...arguments), this.id = CT++, this.isExitComplete = !1;
  }
  update() {
    var i;
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    if (t && o === !1) {
      if (this.isExitComplete) {
        const { initial: s, custom: a } = this.node.getProps();
        if (typeof s == "string") {
          const l = Xt(this.node, s, a);
          if (l) {
            const { transition: c, transitionEnd: d, ...u } = l;
            for (const f in u)
              (i = this.node.getValue(f)) == null || i.jump(u[f]);
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
const ET = {
  animation: {
    Feature: ST
  },
  exit: {
    Feature: RT
  }
};
function po(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const PT = (e) => (t) => Pa(t) && e(t, po(t));
function Hn(e, t, n, o) {
  return Zn(e, t, PT(n), o);
}
const Tm = ({ current: e }) => e ? e.ownerDocument.defaultView : null, jc = (e, t) => Math.abs(e - t);
function TT(e, t) {
  const n = jc(e.x, t.x), o = jc(e.y, t.y);
  return Math.sqrt(n ** 2 + o ** 2);
}
const Gc = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Mm {
  constructor(t, n, { transformPagePoint: o, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: s = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (h) => {
      this.handleScroll(h.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ao(this.lastRawMoveEventInfo, this.transformPagePoint));
      const h = yi(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, g = TT(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !g)
        return;
      const { point: y } = h, { timestamp: w } = ge;
      this.history.push({ ...y, timestamp: w });
      const { onStart: b, onMove: x } = this.handlers;
      m || (b && b(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, m) => {
      this.lastMoveEvent = h, this.lastRawMoveEventInfo = m, this.lastMoveEventInfo = Ao(m, this.transformPagePoint), se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, m) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: w } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = yi(h.type === "pointercancel" ? this.lastMoveEventInfo : Ao(m, this.transformPagePoint), this.history);
      this.startEvent && g && g(h, b), y && y(h, b);
    }, !Pa(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = o, this.distanceThreshold = s, this.contextWindow = r || window;
    const l = po(t), c = Ao(l, this.transformPagePoint), { point: d } = c, { timestamp: u } = ge;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: f } = n;
    f && f(t, yi(c, this.history)), this.removeListeners = co(Hn(this.contextWindow, "pointermove", this.handlePointerMove), Hn(this.contextWindow, "pointerup", this.handlePointerUp), Hn(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const o = getComputedStyle(n);
      (Gc.has(o.overflowX) || Gc.has(o.overflowY)) && this.scrollPositions.set(n, {
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
    }, i = { x: r.x - n.x, y: r.y - n.y };
    i.x === 0 && i.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(t, r), se.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), kt(this.updatePoint);
  }
}
function Ao(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Wc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yi({ point: e }, t) {
  return {
    point: e,
    delta: Wc(e, Am(t)),
    offset: Wc(e, MT(t)),
    velocity: AT(t, 0.1)
  };
}
function MT(e) {
  return e[0];
}
function Am(e) {
  return e[e.length - 1];
}
function AT(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, o = null;
  const r = Am(e);
  for (; n >= 0 && (o = e[n], !(r.timestamp - o.timestamp > /* @__PURE__ */ De(t))); )
    n--;
  if (!o)
    return { x: 0, y: 0 };
  o === e[0] && e.length > 2 && r.timestamp - o.timestamp > /* @__PURE__ */ De(t) * 2 && (o = e[1]);
  const i = /* @__PURE__ */ ze(r.timestamp - o.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (r.x - o.x) / i,
    y: (r.y - o.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function DT(e, { min: t, max: n }, o) {
  return t !== void 0 && e < t ? e = o ? le(t, e, o.min) : Math.max(e, t) : n !== void 0 && e > n && (e = o ? le(n, e, o.max) : Math.min(e, n)), e;
}
function Uc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function _T(e, { top: t, left: n, bottom: o, right: r }) {
  return {
    x: Uc(e.x, n, r),
    y: Uc(e.y, t, o)
  };
}
function Kc(e, t) {
  let n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, o] = [o, n]), { min: n, max: o };
}
function kT(e, t) {
  return {
    x: Kc(e.x, t.x),
    y: Kc(e.y, t.y)
  };
}
function IT(e, t) {
  let n = 0.5;
  const o = Ee(e), r = Ee(t);
  return r > o ? n = /* @__PURE__ */ Yn(t.min, t.max - o, e.min) : o > r && (n = /* @__PURE__ */ Yn(e.min, e.max - r, t.min)), ct(0, 1, n);
}
function NT(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const fs = 0.35;
function FT(e = fs) {
  return e === !1 ? e = 0 : e === !0 && (e = fs), {
    x: Yc(e, "left", "right"),
    y: Yc(e, "top", "bottom")
  };
}
function Yc(e, t, n) {
  return {
    min: Xc(e, t),
    max: Xc(e, n)
  };
}
function Xc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const OT = /* @__PURE__ */ new WeakMap();
class VT {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = fe(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: o } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (u) => {
      n && this.snapToCursor(po(u).point), this.stopAnimation();
    }, s = (u, f) => {
      const { drag: h, dragPropagation: m, onDragStart: g } = this.getProps();
      if (h && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = mE(h), !this.openDragLock))
        return;
      this.latestPointerEvent = u, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ot((w) => {
        let b = this.getAxisMotionValue(w).get() || 0;
        if (lt.test(b)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const S = x.layout.layoutBox[w];
            S && (b = Ee(S) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[w] = b;
      }), g && se.update(() => g(u, f), !1, !0), os(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, a = (u, f) => {
      this.latestPointerEvent = u, this.latestPanInfo = f;
      const { dragPropagation: h, dragDirectionLock: m, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: w } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = $T(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, w), this.updateAxis("y", f.point, w), this.visualElement.render(), y && se.update(() => y(u, f), !1, !0);
    }, l = (u, f) => {
      this.latestPointerEvent = u, this.latestPanInfo = f, this.stop(u, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => {
      const { dragSnapToOrigin: u } = this.getProps();
      (u || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new Mm(t, {
      onSessionStart: i,
      onStart: s,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: o,
      contextWindow: Tm(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const o = t || this.latestPointerEvent, r = n || this.latestPanInfo, i = this.isDragging;
    if (this.cancel(), !i || !r || !o)
      return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && se.postRender(() => a(o, r));
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
    if (!o || !Do(t, r, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (s = DT(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, r = this.constraints;
    t && un(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && o ? this.constraints = _T(o.layoutBox, t) : this.constraints = !1, this.elastic = FT(n), r !== this.constraints && !un(t) && o && this.constraints && !this.hasMutatedConstraints && ot((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = NT(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !un(t))
      return !1;
    const o = t.current;
    vt(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: r } = this.visualElement;
    if (!r || !r.layout)
      return !1;
    const i = GE(o, r.root, this.visualElement.getTransformPagePoint());
    let s = kT(r.layout.layoutBox, i);
    if (n) {
      const a = n(zE(s));
      this.hasMutatedConstraints = !!a, a && (s = qh(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: o, dragElastic: r, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ot((d) => {
      if (!Do(d, n, this.currentDirection))
        return;
      let u = l && l[d] || {};
      (s === !0 || s === d) && (u = { min: 0, max: 0 });
      const f = r ? 200 : 1e6, h = r ? 40 : 1e7, m = {
        type: "inertia",
        velocity: o ? t[d] : 0,
        bounceStiffness: f,
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
    const o = this.getAxisMotionValue(t);
    return os(this.visualElement, t), o.start(xa(t, o, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ot((t) => this.getAxisMotionValue(t).stop());
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
    ot((n) => {
      const { drag: o } = this.getProps();
      if (!Do(n, o, this.currentDirection))
        return;
      const { projection: r } = this.visualElement, i = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: s, max: a } = r.layout.layoutBox[n], l = i.get() || 0;
        i.set(t[n] - le(s, a, 0.5) + l);
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
    if (!un(n) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    ot((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        r[s] = IT({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), ot((s) => {
      if (!Do(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(le(l, c, r[s]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    OT.set(this.visualElement, this);
    const t = this.visualElement.current, n = Hn(t, "pointerdown", (c) => {
      const { drag: d, dragListener: u = !0 } = this.getProps(), f = c.target, h = f !== t && xE(f);
      d && u && !h && this.start(c);
    });
    let o;
    const r = () => {
      const { dragConstraints: c } = this.getProps();
      un(c) && c.current && (this.constraints = this.resolveRefConstraints(), o || (o = LT(t, c.current, () => this.scalePositionWithinConstraints())));
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), se.read(r);
    const a = Zn(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (ot((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += c[u].translate, f.set(f.get() + c[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), s(), l && l(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: o = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: s = fs, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: o,
      dragPropagation: r,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function qc(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function LT(e, t, n) {
  const o = ic(e, qc(n)), r = ic(t, qc(n));
  return () => {
    o(), r();
  };
}
function Do(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $T(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class BT extends Lt {
  constructor(t) {
    super(t), this.removeGroupControls = je, this.removeListeners = je, this.controls = new VT(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || je;
  }
  update() {
    const { dragControls: t } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    t !== n && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const wi = (e) => (t, n) => {
  e && se.update(() => e(t, n), !1, !0);
};
class zT extends Lt {
  constructor() {
    super(...arguments), this.removePointerDownListener = je;
  }
  onPointerDown(t) {
    this.session = new Mm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Tm(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: o, onPanEnd: r } = this.node.getProps();
    return {
      onSessionStart: wi(t),
      onStart: wi(n),
      onMove: wi(o),
      onEnd: (i, s) => {
        delete this.session, r && se.postRender(() => r(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Hn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let bi = !1;
class HT extends cg {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o, layoutId: r } = this.props, { projection: i } = t;
    i && (n.group && n.group.add(i), o && o.register && r && o.register(i), bi && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Go.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: o, drag: r, isPresent: i } = this.props, { projection: s } = o;
    return s && (s.isPresent = i, t.layoutDependency !== n && s.setOptions({
      ...s.options,
      layoutDependency: n
    }), bi = !0, r || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || se.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props, { projection: o } = t;
    o && (o.options.layoutAnchor = n, o.root.didUpdate(), Ea.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o } = this.props, { projection: r } = t;
    bi = !0, r && (r.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(r), o && o.deregister && o.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Dm(e) {
  const [t, n] = XP(), o = Ae(Wp);
  return v(HT, { ...e, layoutGroup: o, switchLayoutGroup: Ae(Em), isPresent: t, safeToRemove: n });
}
const jT = {
  pan: {
    Feature: zT
  },
  drag: {
    Feature: BT,
    ProjectionNode: vm,
    MeasureLayout: Dm
  }
};
function Zc(e, t, n) {
  const { props: o } = e;
  e.animationState && o.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const r = "onHover" + n, i = o[r];
  i && se.postRender(() => i(t, po(t)));
}
class GT extends Lt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = vE(t, (n, o) => (Zc(this.node, o, "Start"), (r) => Zc(this.node, r, "End"))));
  }
  unmount() {
  }
}
class WT extends Lt {
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
    this.unmount = co(Zn(this.node.current, "focus", () => this.onFocus()), Zn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Qc(e, t, n) {
  const { props: o } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && o.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const r = "onTap" + (n === "End" ? "" : n), i = o[r];
  i && se.postRender(() => i(t, po(t)));
}
class UT extends Lt {
  mount() {
    const { current: t } = this.node;
    if (!t)
      return;
    const { globalTapTarget: n, propagate: o } = this.node.props;
    this.unmount = CE(t, (r, i) => (Qc(this.node, i, "Start"), (s, { success: a }) => Qc(this.node, s, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: (o == null ? void 0 : o.tap) === !1
    });
  }
  unmount() {
  }
}
const ps = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), KT = (e) => {
  const t = ps.get(e.target);
  t && t(e);
}, YT = (e) => {
  e.forEach(KT);
};
function XT({ root: e, ...t }) {
  const n = e || document;
  xi.has(n) || xi.set(n, {});
  const o = xi.get(n), r = JSON.stringify(t);
  return o[r] || (o[r] = new IntersectionObserver(YT, { root: e, ...t })), o[r];
}
function qT(e, t, n) {
  const o = XT(t);
  return ps.set(e, n), o.observe(e), () => {
    ps.delete(e), o.unobserve(e);
  };
}
const ZT = {
  some: 0,
  all: 1
};
class QT extends Lt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: o, amount: r = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: o,
      threshold: typeof r == "number" ? r : ZT[r]
    }, a = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, i && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), h = d ? u : f;
      h && h(c);
    };
    this.stopObserver = qT(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(JT(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function JT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const eM = {
  inView: {
    Feature: QT
  },
  tap: {
    Feature: UT
  },
  focus: {
    Feature: WT
  },
  hover: {
    Feature: GT
  }
}, tM = {
  layout: {
    ProjectionNode: vm,
    MeasureLayout: Dm
  }
}, nM = {
  ...ET,
  ...eM,
  ...jT,
  ...tM
}, oM = /* @__PURE__ */ bT(nM, xT), _m = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  ke,
  {
    ref: n,
    className: Y(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e
    ),
    ...t
  }
));
_m.displayName = ke.displayName;
const km = ({
  title: e = "Command Palette",
  description: t = "Search for commands",
  children: n,
  ...o
}) => /* @__PURE__ */ v(u0, { ...o, children: /* @__PURE__ */ G(
  qd,
  {
    className: "overflow-hidden p-0 shadow-lg",
    style: { top: "25%", "--tw-translate-y": "0px" },
    hideClose: !0,
    children: [
      /* @__PURE__ */ G(Zd, { className: "sr-only", children: [
        /* @__PURE__ */ v(Qd, { children: e }),
        /* @__PURE__ */ v(Jd, { children: t })
      ] }),
      /* @__PURE__ */ v(_m, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
    ]
  }
) }), Na = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v("div", { className: "flex items-center px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ v(
  ke.Input,
  {
    ref: n,
    className: Y(
      "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t
  }
) }));
Na.displayName = ke.Input.displayName;
const Fa = p.forwardRef(({ className: e, ...t }, n) => {
  const o = p.useRef(null), [r, i] = p.useState(void 0);
  return p.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const a = new ResizeObserver(([l]) => {
      i(l.contentRect.height);
    });
    return a.observe(s), () => a.disconnect();
  }, []), /* @__PURE__ */ v(
    oM.div,
    {
      animate: { height: r },
      transition: { duration: 0.1, ease: "easeInOut" },
      style: { overflow: "hidden" },
      children: /* @__PURE__ */ v("div", { ref: o, children: /* @__PURE__ */ v(
        ke.List,
        {
          ref: n,
          className: Y("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
          ...t
        }
      ) })
    }
  );
});
Fa.displayName = ke.List.displayName;
const Oa = p.forwardRef((e, t) => /* @__PURE__ */ v(
  ke.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Oa.displayName = ke.Empty.displayName;
const Va = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  ke.Group,
  {
    ref: n,
    className: Y(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e
    ),
    ...t
  }
));
Va.displayName = ke.Group.displayName;
const Im = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  ke.Separator,
  {
    ref: n,
    className: Y("-mx-1 h-px bg-border", e),
    ...t
  }
));
Im.displayName = ke.Separator.displayName;
const La = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  ke.Item,
  {
    ref: n,
    className: Y(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
La.displayName = ke.Item.displayName;
const Nm = ({ className: e, ...t }) => /* @__PURE__ */ v(
  "span",
  {
    className: Y(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      e
    ),
    ...t
  }
);
Nm.displayName = "CommandShortcut";
const Fm = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v("div", { "data-slot": "table-container", className: "relative w-full overflow-auto", children: /* @__PURE__ */ v(
  "table",
  {
    ref: n,
    "data-slot": "table",
    className: Y("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Fm.displayName = "Table";
const Om = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v("thead", { ref: n, "data-slot": "table-header", className: Y("[&_tr]:border-b", e), ...t }));
Om.displayName = "TableHeader";
const Vm = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  "tbody",
  {
    ref: n,
    "data-slot": "table-body",
    className: Y("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Vm.displayName = "TableBody";
const rM = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  "tfoot",
  {
    ref: n,
    "data-slot": "table-footer",
    className: Y("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
    ...t
  }
));
rM.displayName = "TableFooter";
const Wo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  "tr",
  {
    ref: n,
    "data-slot": "table-row",
    className: Y(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      e
    ),
    ...t
  }
));
Wo.displayName = "TableRow";
const Lm = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  "th",
  {
    ref: n,
    "data-slot": "table-head",
    className: Y(
      "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Lm.displayName = "TableHead";
const hs = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  "td",
  {
    ref: n,
    "data-slot": "table-cell",
    className: Y(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
hs.displayName = "TableCell";
const iM = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  "caption",
  {
    ref: n,
    "data-slot": "table-caption",
    className: Y("text-muted-foreground mt-4 text-sm", e),
    ...t
  }
));
iM.displayName = "TableCaption";
function sM(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const aM = (e) => {
  switch (e) {
    case "success":
      return uM;
    case "info":
      return fM;
    case "warning":
      return dM;
    case "error":
      return pM;
    default:
      return null;
  }
}, lM = Array(12).fill(0), cM = ({ visible: e, className: t }) => /* @__PURE__ */ F.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    t
  ].filter(Boolean).join(" "),
  "data-visible": e
}, /* @__PURE__ */ F.createElement("div", {
  className: "sonner-spinner"
}, lM.map((n, o) => /* @__PURE__ */ F.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${o}`
})))), uM = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), dM = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), fM = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), pM = /* @__PURE__ */ F.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ F.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), hM = /* @__PURE__ */ F.createElement("svg", {
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
})), mM = () => {
  const [e, t] = F.useState(document.hidden);
  return F.useEffect(() => {
    const n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
};
let ms = 1;
class gM {
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
      const { message: o, ...r } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : ms++, s = this.toasts.find((l) => l.id === i), a = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map((l) => l.id === i ? (this.publish({
        ...l,
        ...t,
        id: i,
        title: o
      }), {
        ...l,
        ...t,
        id: i,
        dismissible: a,
        title: o
      }) : l) : this.addToast({
        title: o,
        ...r,
        dismissible: a,
        id: i
      }), i;
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
      let i = o !== void 0, s;
      const a = r.then(async (c) => {
        if (s = [
          "resolve",
          c
        ], F.isValidElement(c))
          i = !1, this.create({
            id: o,
            type: "default",
            message: c
          });
        else if (yM(c) && !c.ok) {
          i = !1;
          const u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, f = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description, m = typeof u == "object" && !F.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "error",
            description: f,
            ...m
          });
        } else if (c instanceof Error) {
          i = !1;
          const u = typeof n.error == "function" ? await n.error(c) : n.error, f = typeof n.description == "function" ? await n.description(c) : n.description, m = typeof u == "object" && !F.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "error",
            description: f,
            ...m
          });
        } else if (n.success !== void 0) {
          i = !1;
          const u = typeof n.success == "function" ? await n.success(c) : n.success, f = typeof n.description == "function" ? await n.description(c) : n.description, m = typeof u == "object" && !F.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: o,
            type: "success",
            description: f,
            ...m
          });
        }
      }).catch(async (c) => {
        if (s = [
          "reject",
          c
        ], n.error !== void 0) {
          i = !1;
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
        i && (this.dismiss(o), o = void 0), n.finally == null || n.finally.call(n);
      }), l = () => new Promise((c, d) => a.then(() => s[0] === "reject" ? d(s[1]) : c(s[1])).catch(d));
      return typeof o != "string" && typeof o != "number" ? {
        unwrap: l
      } : Object.assign(o, {
        unwrap: l
      });
    }, this.custom = (t, n) => {
      const o = (n == null ? void 0 : n.id) || ms++;
      return this.create({
        jsx: t(o),
        id: o,
        ...n
      }), o;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Me = new gM(), vM = (e, t) => {
  const n = (t == null ? void 0 : t.id) || ms++;
  return Me.addToast({
    title: e,
    ...t,
    id: n
  }), n;
}, yM = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", wM = vM, bM = () => Me.toasts, xM = () => Me.getActiveToasts();
Object.assign(wM, {
  success: Me.success,
  info: Me.info,
  warning: Me.warning,
  error: Me.error,
  custom: Me.custom,
  message: Me.message,
  promise: Me.promise,
  dismiss: Me.dismiss,
  loading: Me.loading
}, {
  getHistory: bM,
  getToasts: xM
});
sM("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function _o(e) {
  return e.label !== void 0;
}
const SM = 3, CM = "24px", RM = "16px", Jc = 4e3, EM = 356, PM = 14, TM = 45, MM = 200;
function nt(...e) {
  return e.filter(Boolean).join(" ");
}
function AM(e) {
  const [t, n] = e.split("-"), o = [];
  return t && o.push(t), n && o.push(n), o;
}
const DM = (e) => {
  var t, n, o, r, i, s, a, l, c;
  const { invert: d, toast: u, unstyled: f, interacting: h, setHeights: m, visibleToasts: g, heights: y, index: w, toasts: b, expanded: x, removeToast: S, defaultRichColors: R, closeButton: E, style: T, cancelButtonStyle: C, actionButtonStyle: I, className: A = "", descriptionClassName: L = "", duration: W, position: q, gap: K, expandByDefault: J, classNames: O, icons: D, closeButtonAriaLabel: P = "Close toast" } = e, [k, _] = F.useState(null), [ne, M] = F.useState(null), [V, $] = F.useState(!1), [N, B] = F.useState(!1), [te, ee] = F.useState(!1), [X, pe] = F.useState(!1), [$e, Pe] = F.useState(!1), [We, Ue] = F.useState(0), [Hr, ho] = F.useState(0), $t = F.useRef(u.duration || W || Jc), mo = F.useRef(null), Te = F.useRef(null), Zm = w === 0, Qm = w + 1 <= g, Ie = u.type, tn = u.dismissible !== !1, Jm = u.className || "", eg = u.descriptionClassName || "", go = F.useMemo(() => y.findIndex((oe) => oe.toastId === u.id) || 0, [
    y,
    u.id
  ]), tg = F.useMemo(() => {
    var oe;
    return (oe = u.closeButton) != null ? oe : E;
  }, [
    u.closeButton,
    E
  ]), ja = F.useMemo(() => u.duration || W || Jc, [
    u.duration,
    W
  ]), jr = F.useRef(0), nn = F.useRef(0), Ga = F.useRef(0), on = F.useRef(null), [ng, og] = q.split("-"), Wa = F.useMemo(() => y.reduce((oe, he, we) => we >= go ? oe : oe + he.height, 0), [
    y,
    go
  ]), Ua = mM(), rg = u.invert || d, Gr = Ie === "loading";
  nn.current = F.useMemo(() => go * K + Wa, [
    go,
    Wa
  ]), F.useEffect(() => {
    $t.current = ja;
  }, [
    ja
  ]), F.useEffect(() => {
    $(!0);
  }, []), F.useEffect(() => {
    const oe = Te.current;
    if (oe) {
      const he = oe.getBoundingClientRect().height;
      return ho(he), m((we) => [
        {
          toastId: u.id,
          height: he,
          position: u.position
        },
        ...we
      ]), () => m((we) => we.filter((Ne) => Ne.toastId !== u.id));
    }
  }, [
    m,
    u.id
  ]), F.useLayoutEffect(() => {
    if (!V) return;
    const oe = Te.current, he = oe.style.height;
    oe.style.height = "auto";
    const we = oe.getBoundingClientRect().height;
    oe.style.height = he, ho(we), m((Ne) => Ne.find((me) => me.toastId === u.id) ? Ne.map((me) => me.toastId === u.id ? {
      ...me,
      height: we
    } : me) : [
      {
        toastId: u.id,
        height: we,
        position: u.position
      },
      ...Ne
    ]);
  }, [
    V,
    u.title,
    u.description,
    m,
    u.id,
    u.jsx,
    u.action,
    u.cancel
  ]);
  const bt = F.useCallback(() => {
    B(!0), Ue(nn.current), m((oe) => oe.filter((he) => he.toastId !== u.id)), setTimeout(() => {
      S(u);
    }, MM);
  }, [
    u,
    S,
    m,
    nn
  ]);
  F.useEffect(() => {
    if (u.promise && Ie === "loading" || u.duration === 1 / 0 || u.type === "loading") return;
    let oe;
    return x || h || Ua ? (() => {
      if (Ga.current < jr.current) {
        const Ne = (/* @__PURE__ */ new Date()).getTime() - jr.current;
        $t.current = $t.current - Ne;
      }
      Ga.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      $t.current !== 1 / 0 && (jr.current = (/* @__PURE__ */ new Date()).getTime(), oe = setTimeout(() => {
        u.onAutoClose == null || u.onAutoClose.call(u, u), bt();
      }, $t.current));
    })(), () => clearTimeout(oe);
  }, [
    x,
    h,
    u,
    Ie,
    Ua,
    bt
  ]), F.useEffect(() => {
    u.delete && (bt(), u.onDismiss == null || u.onDismiss.call(u, u));
  }, [
    bt,
    u.delete
  ]);
  function ig() {
    var oe;
    if (D != null && D.loading) {
      var he;
      return /* @__PURE__ */ F.createElement("div", {
        className: nt(O == null ? void 0 : O.loader, u == null || (he = u.classNames) == null ? void 0 : he.loader, "sonner-loader"),
        "data-visible": Ie === "loading"
      }, D.loading);
    }
    return /* @__PURE__ */ F.createElement(cM, {
      className: nt(O == null ? void 0 : O.loader, u == null || (oe = u.classNames) == null ? void 0 : oe.loader),
      visible: Ie === "loading"
    });
  }
  const sg = u.icon || (D == null ? void 0 : D[Ie]) || aM(Ie);
  var Ka, Ya;
  return /* @__PURE__ */ F.createElement("li", {
    tabIndex: 0,
    ref: Te,
    className: nt(A, Jm, O == null ? void 0 : O.toast, u == null || (t = u.classNames) == null ? void 0 : t.toast, O == null ? void 0 : O.default, O == null ? void 0 : O[Ie], u == null || (n = u.classNames) == null ? void 0 : n[Ie]),
    "data-sonner-toast": "",
    "data-rich-colors": (Ka = u.richColors) != null ? Ka : R,
    "data-styled": !(u.jsx || u.unstyled || f),
    "data-mounted": V,
    "data-promise": !!u.promise,
    "data-swiped": $e,
    "data-removed": N,
    "data-visible": Qm,
    "data-y-position": ng,
    "data-x-position": og,
    "data-index": w,
    "data-front": Zm,
    "data-swiping": te,
    "data-dismissible": tn,
    "data-type": Ie,
    "data-invert": rg,
    "data-swipe-out": X,
    "data-swipe-direction": ne,
    "data-expanded": !!(x || J && V),
    "data-testid": u.testId,
    style: {
      "--index": w,
      "--toasts-before": w,
      "--z-index": b.length - w,
      "--offset": `${N ? We : nn.current}px`,
      "--initial-height": J ? "auto" : `${Hr}px`,
      ...T,
      ...u.style
    },
    onDragEnd: () => {
      ee(!1), _(null), on.current = null;
    },
    onPointerDown: (oe) => {
      oe.button !== 2 && (Gr || !tn || (mo.current = /* @__PURE__ */ new Date(), Ue(nn.current), oe.target.setPointerCapture(oe.pointerId), oe.target.tagName !== "BUTTON" && (ee(!0), on.current = {
        x: oe.clientX,
        y: oe.clientY
      })));
    },
    onPointerUp: () => {
      var oe, he, we;
      if (X || !tn) return;
      on.current = null;
      const Ne = Number(((oe = Te.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), vo = Number(((he = Te.current) == null ? void 0 : he.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), me = (/* @__PURE__ */ new Date()).getTime() - ((we = mo.current) == null ? void 0 : we.getTime()), Be = k === "x" ? Ne : vo, yo = Math.abs(Be) / me;
      if (Math.abs(Be) >= TM || yo > 0.11) {
        Ue(nn.current), u.onDismiss == null || u.onDismiss.call(u, u), M(k === "x" ? Ne > 0 ? "right" : "left" : vo > 0 ? "down" : "up"), bt(), pe(!0);
        return;
      } else {
        var Ke, Ye;
        (Ke = Te.current) == null || Ke.style.setProperty("--swipe-amount-x", "0px"), (Ye = Te.current) == null || Ye.style.setProperty("--swipe-amount-y", "0px");
      }
      Pe(!1), ee(!1), _(null);
    },
    onPointerMove: (oe) => {
      var he, we, Ne;
      if (!on.current || !tn || ((he = window.getSelection()) == null ? void 0 : he.toString().length) > 0) return;
      const me = oe.clientY - on.current.y, Be = oe.clientX - on.current.x;
      var yo;
      const Ke = (yo = e.swipeDirections) != null ? yo : AM(q);
      !k && (Math.abs(Be) > 1 || Math.abs(me) > 1) && _(Math.abs(Be) > Math.abs(me) ? "x" : "y");
      let Ye = {
        x: 0,
        y: 0
      };
      const Xa = (Bt) => 1 / (1.5 + Math.abs(Bt) / 20);
      if (k === "y") {
        if (Ke.includes("top") || Ke.includes("bottom"))
          if (Ke.includes("top") && me < 0 || Ke.includes("bottom") && me > 0)
            Ye.y = me;
          else {
            const Bt = me * Xa(me);
            Ye.y = Math.abs(Bt) < Math.abs(me) ? Bt : me;
          }
      } else if (k === "x" && (Ke.includes("left") || Ke.includes("right")))
        if (Ke.includes("left") && Be < 0 || Ke.includes("right") && Be > 0)
          Ye.x = Be;
        else {
          const Bt = Be * Xa(Be);
          Ye.x = Math.abs(Bt) < Math.abs(Be) ? Bt : Be;
        }
      (Math.abs(Ye.x) > 0 || Math.abs(Ye.y) > 0) && Pe(!0), (we = Te.current) == null || we.style.setProperty("--swipe-amount-x", `${Ye.x}px`), (Ne = Te.current) == null || Ne.style.setProperty("--swipe-amount-y", `${Ye.y}px`);
    }
  }, tg && !u.jsx && Ie !== "loading" ? /* @__PURE__ */ F.createElement("button", {
    "aria-label": P,
    "data-disabled": Gr,
    "data-close-button": !0,
    onClick: Gr || !tn ? () => {
    } : () => {
      bt(), u.onDismiss == null || u.onDismiss.call(u, u);
    },
    className: nt(O == null ? void 0 : O.closeButton, u == null || (o = u.classNames) == null ? void 0 : o.closeButton)
  }, (Ya = D == null ? void 0 : D.close) != null ? Ya : hM) : null, (Ie || u.icon || u.promise) && u.icon !== null && ((D == null ? void 0 : D[Ie]) !== null || u.icon) ? /* @__PURE__ */ F.createElement("div", {
    "data-icon": "",
    className: nt(O == null ? void 0 : O.icon, u == null || (r = u.classNames) == null ? void 0 : r.icon)
  }, u.promise || u.type === "loading" && !u.icon ? u.icon || ig() : null, u.type !== "loading" ? sg : null) : null, /* @__PURE__ */ F.createElement("div", {
    "data-content": "",
    className: nt(O == null ? void 0 : O.content, u == null || (i = u.classNames) == null ? void 0 : i.content)
  }, /* @__PURE__ */ F.createElement("div", {
    "data-title": "",
    className: nt(O == null ? void 0 : O.title, u == null || (s = u.classNames) == null ? void 0 : s.title)
  }, u.jsx ? u.jsx : typeof u.title == "function" ? u.title() : u.title), u.description ? /* @__PURE__ */ F.createElement("div", {
    "data-description": "",
    className: nt(L, eg, O == null ? void 0 : O.description, u == null || (a = u.classNames) == null ? void 0 : a.description)
  }, typeof u.description == "function" ? u.description() : u.description) : null), /* @__PURE__ */ F.isValidElement(u.cancel) ? u.cancel : u.cancel && _o(u.cancel) ? /* @__PURE__ */ F.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: u.cancelButtonStyle || C,
    onClick: (oe) => {
      _o(u.cancel) && tn && (u.cancel.onClick == null || u.cancel.onClick.call(u.cancel, oe), bt());
    },
    className: nt(O == null ? void 0 : O.cancelButton, u == null || (l = u.classNames) == null ? void 0 : l.cancelButton)
  }, u.cancel.label) : null, /* @__PURE__ */ F.isValidElement(u.action) ? u.action : u.action && _o(u.action) ? /* @__PURE__ */ F.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: u.actionButtonStyle || I,
    onClick: (oe) => {
      _o(u.action) && (u.action.onClick == null || u.action.onClick.call(u.action, oe), !oe.defaultPrevented && bt());
    },
    className: nt(O == null ? void 0 : O.actionButton, u == null || (c = u.classNames) == null ? void 0 : c.actionButton)
  }, u.action.label) : null);
};
function eu() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function _M(e, t) {
  const n = {};
  return [
    e,
    t
  ].forEach((o, r) => {
    const i = r === 1, s = i ? "--mobile-offset" : "--offset", a = i ? RM : CM;
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
    typeof o == "number" || typeof o == "string" ? l(o) : typeof o == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      o[c] === void 0 ? n[`${s}-${c}`] = a : n[`${s}-${c}`] = typeof o[c] == "number" ? `${o[c]}px` : o[c];
    }) : l(a);
  }), n;
}
const kM = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const { id: o, invert: r, position: i = "bottom-right", hotkey: s = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: l, className: c, offset: d, mobileOffset: u, theme: f = "light", richColors: h, duration: m, style: g, visibleToasts: y = SM, toastOptions: w, dir: b = eu(), gap: x = PM, icons: S, containerAriaLabel: R = "Notifications" } = t, [E, T] = F.useState([]), C = F.useMemo(() => o ? E.filter((V) => V.toasterId === o) : E.filter((V) => !V.toasterId), [
    E,
    o
  ]), I = F.useMemo(() => Array.from(new Set([
    i
  ].concat(C.filter((V) => V.position).map((V) => V.position)))), [
    C,
    i
  ]), [A, L] = F.useState([]), [W, q] = F.useState(!1), [K, J] = F.useState(!1), [O, D] = F.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), P = F.useRef(null), k = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), _ = F.useRef(null), ne = F.useRef(!1), M = F.useCallback((V) => {
    T(($) => {
      var N;
      return (N = $.find((B) => B.id === V.id)) != null && N.delete || Me.dismiss(V.id), $.filter(({ id: B }) => B !== V.id);
    });
  }, []);
  return F.useEffect(() => Me.subscribe((V) => {
    if (V.dismiss) {
      requestAnimationFrame(() => {
        T(($) => $.map((N) => N.id === V.id ? {
          ...N,
          delete: !0
        } : N));
      });
      return;
    }
    setTimeout(() => {
      fu.flushSync(() => {
        T(($) => {
          const N = $.findIndex((B) => B.id === V.id);
          return N !== -1 ? [
            ...$.slice(0, N),
            {
              ...$[N],
              ...V
            },
            ...$.slice(N + 1)
          ] : [
            V,
            ...$
          ];
        });
      });
    });
  }), [
    E
  ]), F.useEffect(() => {
    if (f !== "system") {
      D(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")), typeof window > "u") return;
    const V = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      V.addEventListener("change", ({ matches: $ }) => {
        D($ ? "dark" : "light");
      });
    } catch {
      V.addListener(({ matches: N }) => {
        try {
          D(N ? "dark" : "light");
        } catch (B) {
          console.error(B);
        }
      });
    }
  }, [
    f
  ]), F.useEffect(() => {
    E.length <= 1 && q(!1);
  }, [
    E
  ]), F.useEffect(() => {
    const V = ($) => {
      var N;
      if (s.every((ee) => $[ee] || $.code === ee)) {
        var te;
        q(!0), (te = P.current) == null || te.focus();
      }
      $.code === "Escape" && (document.activeElement === P.current || (N = P.current) != null && N.contains(document.activeElement)) && q(!1);
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [
    s
  ]), F.useEffect(() => {
    if (P.current)
      return () => {
        _.current && (_.current.focus({
          preventScroll: !0
        }), _.current = null, ne.current = !1);
      };
  }, [
    P.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ F.createElement("section", {
    ref: n,
    "aria-label": `${R} ${k}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, I.map((V, $) => {
    var N;
    const [B, te] = V.split("-");
    return C.length ? /* @__PURE__ */ F.createElement("ol", {
      key: V,
      dir: b === "auto" ? eu() : b,
      tabIndex: -1,
      ref: P,
      className: c,
      "data-sonner-toaster": !0,
      "data-sonner-theme": O,
      "data-y-position": B,
      "data-x-position": te,
      style: {
        "--front-toast-height": `${((N = A[0]) == null ? void 0 : N.height) || 0}px`,
        "--width": `${EM}px`,
        "--gap": `${x}px`,
        ...g,
        ..._M(d, u)
      },
      onBlur: (ee) => {
        ne.current && !ee.currentTarget.contains(ee.relatedTarget) && (ne.current = !1, _.current && (_.current.focus({
          preventScroll: !0
        }), _.current = null));
      },
      onFocus: (ee) => {
        ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || ne.current || (ne.current = !0, _.current = ee.relatedTarget);
      },
      onMouseEnter: () => q(!0),
      onMouseMove: () => q(!0),
      onMouseLeave: () => {
        K || q(!1);
      },
      onDragEnd: () => q(!1),
      onPointerDown: (ee) => {
        ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || J(!0);
      },
      onPointerUp: () => J(!1)
    }, C.filter((ee) => !ee.position && $ === 0 || ee.position === V).map((ee, X) => {
      var pe, $e;
      return /* @__PURE__ */ F.createElement(DM, {
        key: ee.id,
        icons: S,
        index: X,
        toast: ee,
        defaultRichColors: h,
        duration: (pe = w == null ? void 0 : w.duration) != null ? pe : m,
        className: w == null ? void 0 : w.className,
        descriptionClassName: w == null ? void 0 : w.descriptionClassName,
        invert: r,
        visibleToasts: y,
        closeButton: ($e = w == null ? void 0 : w.closeButton) != null ? $e : l,
        interacting: K,
        position: V,
        style: w == null ? void 0 : w.style,
        unstyled: w == null ? void 0 : w.unstyled,
        classNames: w == null ? void 0 : w.classNames,
        cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
        actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
        closeButtonAriaLabel: w == null ? void 0 : w.closeButtonAriaLabel,
        removeToast: M,
        toasts: C.filter((Pe) => Pe.position == ee.position),
        heights: A.filter((Pe) => Pe.position == ee.position),
        setHeights: L,
        expandByDefault: a,
        gap: x,
        expanded: W,
        swipeDirections: t.swipeDirections
      });
    })) : null;
  }));
}), YA = ({ ...e }) => /* @__PURE__ */ v(
  kM,
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
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e, t) {
  return (n) => {
    t.setState((o) => ({
      ...o,
      [e]: Tt(n, o[e])
    }));
  };
}
function zr(e) {
  return e instanceof Function;
}
function IM(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function NM(e, t) {
  const n = [], o = (r) => {
    r.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && o(s);
    });
  };
  return o(e), n;
}
function Z(e, t, n) {
  let o = [], r;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== o.length || a.some((d, u) => o[u] !== d)))
      return r;
    o = a;
    let c;
    if (n.key && n.debug && (c = Date.now()), r = t(...a), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - s) * 100) / 100, u = Math.round((Date.now() - c) * 100) / 100, f = u / 16, h = (m, g) => {
        for (m = String(m); m.length < g; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${h(u, 5)} /${h(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return r;
  };
}
function Q(e, t, n, o) {
  return {
    debug: () => {
      var r;
      return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: o
  };
}
function FM(e, t, n, o) {
  const r = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(o),
    renderValue: r,
    getContext: Z(() => [e, n, t, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), Q(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function OM(e, t, n, o) {
  var r, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (r = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? r : typeof a.header == "string" ? a.header : void 0, d;
  if (a.accessorFn ? d = a.accessorFn : l && (l.includes(".") ? d = (f) => {
    let h = f;
    for (const g of l.split(".")) {
      var m;
      h = (m = h) == null ? void 0 : m[g], process.env.NODE_ENV !== "production" && h === void 0 && console.warn(`"${g}" in deeply nested key "${l}" returned undefined.`);
    }
    return h;
  } : d = (f) => f[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let u = {
    id: `${String(c)}`,
    accessorFn: d,
    parent: o,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: Z(() => [!0], () => {
      var f;
      return [u, ...(f = u.columns) == null ? void 0 : f.flatMap((h) => h.getFlatColumns())];
    }, Q(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: Z(() => [e._getOrderColumnsFn()], (f) => {
      var h;
      if ((h = u.columns) != null && h.length) {
        let m = u.columns.flatMap((g) => g.getLeafColumns());
        return f(m);
      }
      return [u];
    }, Q(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(u, e);
  return u;
}
const be = "debugHeaders";
function tu(e, t, n) {
  var o;
  let i = {
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
const VM = {
  createTable: (e) => {
    e.getHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => {
      var i, s;
      const a = (i = o == null ? void 0 : o.map((u) => n.find((f) => f.id === u)).filter(Boolean)) != null ? i : [], l = (s = r == null ? void 0 : r.map((u) => n.find((f) => f.id === u)).filter(Boolean)) != null ? s : [], c = n.filter((u) => !(o != null && o.includes(u.id)) && !(r != null && r.includes(u.id)));
      return ko(t, [...a, ...c, ...l], e);
    }, Q(e.options, be, "getHeaderGroups")), e.getCenterHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), ko(t, n, e, "center")), Q(e.options, be, "getCenterHeaderGroups")), e.getLeftHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, o) => {
      var r;
      const i = (r = o == null ? void 0 : o.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? r : [];
      return ko(t, i, e, "left");
    }, Q(e.options, be, "getLeftHeaderGroups")), e.getRightHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, o) => {
      var r;
      const i = (r = o == null ? void 0 : o.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? r : [];
      return ko(t, i, e, "right");
    }, Q(e.options, be, "getRightHeaderGroups")), e.getFooterGroups = Z(() => [e.getHeaderGroups()], (t) => [...t].reverse(), Q(e.options, be, "getFooterGroups")), e.getLeftFooterGroups = Z(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), Q(e.options, be, "getLeftFooterGroups")), e.getCenterFooterGroups = Z(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), Q(e.options, be, "getCenterFooterGroups")), e.getRightFooterGroups = Z(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), Q(e.options, be, "getRightFooterGroups")), e.getFlatHeaders = Z(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Q(e.options, be, "getFlatHeaders")), e.getLeftFlatHeaders = Z(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Q(e.options, be, "getLeftFlatHeaders")), e.getCenterFlatHeaders = Z(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Q(e.options, be, "getCenterFlatHeaders")), e.getRightFlatHeaders = Z(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), Q(e.options, be, "getRightFlatHeaders")), e.getCenterLeafHeaders = Z(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), Q(e.options, be, "getCenterLeafHeaders")), e.getLeftLeafHeaders = Z(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), Q(e.options, be, "getLeftLeafHeaders")), e.getRightLeafHeaders = Z(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), Q(e.options, be, "getRightLeafHeaders")), e.getLeafHeaders = Z(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, o) => {
      var r, i, s, a, l, c;
      return [...(r = (i = t[0]) == null ? void 0 : i.headers) != null ? r : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = o[0]) == null ? void 0 : c.headers) != null ? l : []].map((d) => d.getLeafHeaders()).flat();
    }, Q(e.options, be, "getLeafHeaders"));
  }
};
function ko(e, t, n, o) {
  var r, i;
  let s = 0;
  const a = function(f, h) {
    h === void 0 && (h = 1), s = Math.max(s, h), f.filter((m) => m.getIsVisible()).forEach((m) => {
      var g;
      (g = m.columns) != null && g.length && a(m.columns, h + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (f, h) => {
    const m = {
      depth: h,
      id: [o, `${h}`].filter(Boolean).join("_"),
      headers: []
    }, g = [];
    f.forEach((y) => {
      const w = [...g].reverse()[0], b = y.column.depth === m.depth;
      let x, S = !1;
      if (b && y.column.parent ? x = y.column.parent : (x = y.column, S = !0), w && (w == null ? void 0 : w.column) === x)
        w.subHeaders.push(y);
      else {
        const R = tu(n, x, {
          id: [o, h, x.id, y == null ? void 0 : y.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${g.filter((E) => E.column === x).length}` : void 0,
          depth: h,
          index: g.length
        });
        R.subHeaders.push(y), g.push(R);
      }
      m.headers.push(y), y.headerGroup = m;
    }), l.push(m), h > 0 && c(g, h - 1);
  }, d = t.map((f, h) => tu(n, f, {
    depth: s,
    index: h
  }));
  c(d, s - 1), l.reverse();
  const u = (f) => f.filter((m) => m.column.getIsVisible()).map((m) => {
    let g = 0, y = 0, w = [0];
    m.subHeaders && m.subHeaders.length ? (w = [], u(m.subHeaders).forEach((x) => {
      let {
        colSpan: S,
        rowSpan: R
      } = x;
      g += S, w.push(R);
    })) : g = 1;
    const b = Math.min(...w);
    return y = y + b, m.colSpan = g, m.rowSpan = y, {
      colSpan: g,
      rowSpan: y
    };
  });
  return u((r = (i = l[0]) == null ? void 0 : i.headers) != null ? r : []), l;
}
const $a = (e, t, n, o, r, i, s) => {
  let a = {
    id: t,
    index: o,
    original: n,
    depth: r,
    parentId: s,
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
    getLeafRows: () => NM(a.subRows, (l) => l.subRows),
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
    getAllCells: Z(() => [e.getAllLeafColumns()], (l) => l.map((c) => FM(e, a, c, c.id)), Q(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: Z(() => [a.getAllCells()], (l) => l.reduce((c, d) => (c[d.column.id] = d, c), {}), Q(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, LM = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, $m = (e, t, n) => {
  var o, r;
  const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
$m.autoRemove = (e) => Qe(e);
const Bm = (e, t, n) => {
  var o;
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
};
Bm.autoRemove = (e) => Qe(e);
const zm = (e, t, n) => {
  var o;
  return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
zm.autoRemove = (e) => Qe(e);
const Hm = (e, t, n) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
};
Hm.autoRemove = (e) => Qe(e);
const jm = (e, t, n) => !n.some((o) => {
  var r;
  return !((r = e.getValue(t)) != null && r.includes(o));
});
jm.autoRemove = (e) => Qe(e) || !(e != null && e.length);
const Gm = (e, t, n) => n.some((o) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
});
Gm.autoRemove = (e) => Qe(e) || !(e != null && e.length);
const Wm = (e, t, n) => e.getValue(t) === n;
Wm.autoRemove = (e) => Qe(e);
const Um = (e, t, n) => e.getValue(t) == n;
Um.autoRemove = (e) => Qe(e);
const Ba = (e, t, n) => {
  let [o, r] = n;
  const i = e.getValue(t);
  return i >= o && i <= r;
};
Ba.resolveFilterValue = (e) => {
  let [t, n] = e, o = typeof t != "number" ? parseFloat(t) : t, r = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(o) ? -1 / 0 : o, s = n === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Ba.autoRemove = (e) => Qe(e) || Qe(e[0]) && Qe(e[1]);
const pt = {
  includesString: $m,
  includesStringSensitive: Bm,
  equalsString: zm,
  arrIncludes: Hm,
  arrIncludesAll: jm,
  arrIncludesSome: Gm,
  equals: Wm,
  weakEquals: Um,
  inNumberRange: Ba
};
function Qe(e) {
  return e == null || e === "";
}
const $M = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ve("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
      return typeof o == "string" ? pt.includesString : typeof o == "number" ? pt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? pt.equals : Array.isArray(o) ? pt.arrIncludes : pt.weakEquals;
    }, e.getFilterFn = () => {
      var n, o;
      return zr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : pt[e.columnDef.filterFn]
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
        const r = e.getFilterFn(), i = o == null ? void 0 : o.find((d) => d.id === e.id), s = Tt(n, i ? i.value : void 0);
        if (nu(r, s, e)) {
          var a;
          return (a = o == null ? void 0 : o.filter((d) => d.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
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
        var i;
        return (i = Tt(t, r)) == null ? void 0 : i.filter((s) => {
          const a = n.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (nu(l, s.value, a))
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
function nu(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const BM = (e, t, n) => n.reduce((o, r) => {
  const i = r.getValue(e);
  return o + (typeof i == "number" ? i : 0);
}, 0), zM = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o > i || o === void 0 && i >= i) && (o = i);
  }), o;
}, HM = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o < i || o === void 0 && i >= i) && (o = i);
  }), o;
}, jM = (e, t, n) => {
  let o, r;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
  }), [o, r];
}, GM = (e, t) => {
  let n = 0, o = 0;
  if (t.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++n, o += i);
  }), n) return o / n;
}, WM = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!IM(n))
    return;
  if (n.length === 1)
    return n[0];
  const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
}, UM = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), KM = (e, t) => new Set(t.map((n) => n.getValue(e))).size, YM = (e, t) => t.length, Si = {
  sum: BM,
  min: zM,
  max: HM,
  extent: jM,
  mean: GM,
  median: WM,
  unique: UM,
  uniqueCount: KM,
  count: YM
}, XM = {
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
    onGroupingChange: Ve("grouping", e),
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
        return Si.sum;
      if (Object.prototype.toString.call(o) === "[object Date]")
        return Si.extent;
    }, e.getAggregationFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return zr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : Si[e.columnDef.aggregationFn];
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
function qM(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const o = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? o : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...o];
}
const ZM = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ve("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = Z((n) => [jn(t, n)], (n) => n.findIndex((o) => o.id === e.id), Q(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var o;
      return ((o = jn(t, n)[0]) == null ? void 0 : o.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var o;
      const r = jn(t, n);
      return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = Z(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, o) => (r) => {
      let i = [];
      if (!(t != null && t.length))
        i = r;
      else {
        const s = [...t], a = [...r];
        for (; a.length && s.length; ) {
          const l = s.shift(), c = a.findIndex((d) => d.id === l);
          c > -1 && i.push(a.splice(c, 1)[0]);
        }
        i = [...i, ...a];
      }
      return qM(i, n, o);
    }, Q(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Ci = () => ({
  left: [],
  right: []
}), QM = {
  getInitialState: (e) => ({
    columnPinning: Ci(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ve("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      t.setColumnPinning((r) => {
        var i, s;
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
          left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((u) => !(o != null && o.includes(u))),
          right: ((s = r == null ? void 0 : r.right) != null ? s : []).filter((u) => !(o != null && o.includes(u)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((o) => {
      var r, i, s;
      return ((r = o.columnDef.enablePinning) != null ? r : !0) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((a) => a.id), {
        left: o,
        right: r
      } = t.getState().columnPinning, i = n.some((a) => o == null ? void 0 : o.includes(a)), s = n.some((a) => r == null ? void 0 : r.includes(a));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      return r ? (n = (o = t.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = Z(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, o, r) => {
      const i = [...o ?? [], ...r ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, Q(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = Z(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), Q(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = Z(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), Q(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, o;
      return e.setColumnPinning(t ? Ci() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : Ci());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const o = e.getState().columnPinning;
      if (!t) {
        var r, i;
        return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e.getLeftLeafColumns = Z(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), Q(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = Z(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), Q(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = Z(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o) => {
      const r = [...n ?? [], ...o ?? []];
      return t.filter((i) => !r.includes(i.id));
    }, Q(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function JM(e) {
  return e || (typeof document < "u" ? document : null);
}
const Io = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Ri = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), eA = {
  getDefaultColumnDef: () => Io,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Ri(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ve("columnSizing", e),
    onColumnSizingInfoChange: Ve("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, o, r;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Io.minSize, (o = i ?? e.columnDef.size) != null ? o : Io.size), (r = e.columnDef.maxSize) != null ? r : Io.maxSize);
    }, e.getStart = Z((n) => [n, jn(t, n), t.getState().columnSizing], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), Q(t.options, "debugColumns", "getStart")), e.getAfter = Z((n) => [n, jn(t, n), t.getState().columnSizing], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, i) => r + i.getSize(), 0), Q(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
          var i;
          n += (i = r.column.getSize()) != null ? i : 0;
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
      return (i) => {
        if (!o || !r || (i.persist == null || i.persist(), Ei(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[o.id, o.getSize()]], l = Ei(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, d = (w, b) => {
          typeof b == "number" && (t.setColumnSizingInfo((x) => {
            var S, R;
            const E = t.options.columnResizeDirection === "rtl" ? -1 : 1, T = (b - ((S = x == null ? void 0 : x.startOffset) != null ? S : 0)) * E, C = Math.max(T / ((R = x == null ? void 0 : x.startSize) != null ? R : 0), -0.999999);
            return x.columnSizingStart.forEach((I) => {
              let [A, L] = I;
              c[A] = Math.round(Math.max(L + L * C, 0) * 100) / 100;
            }), {
              ...x,
              deltaOffset: T,
              deltaPercentage: C
            };
          }), (t.options.columnResizeMode === "onChange" || w === "end") && t.setColumnSizing((x) => ({
            ...x,
            ...c
          })));
        }, u = (w) => d("move", w), f = (w) => {
          d("end", w), t.setColumnSizingInfo((b) => ({
            ...b,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, h = JM(n), m = {
          moveHandler: (w) => u(w.clientX),
          upHandler: (w) => {
            h == null || h.removeEventListener("mousemove", m.moveHandler), h == null || h.removeEventListener("mouseup", m.upHandler), f(w.clientX);
          }
        }, g = {
          moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), u(w.touches[0].clientX), !1),
          upHandler: (w) => {
            var b;
            h == null || h.removeEventListener("touchmove", g.moveHandler), h == null || h.removeEventListener("touchend", g.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), f((b = w.touches[0]) == null ? void 0 : b.clientX);
          }
        }, y = tA() ? {
          passive: !1
        } : !1;
        Ei(i) ? (h == null || h.addEventListener("touchmove", g.moveHandler, y), h == null || h.addEventListener("touchend", g.upHandler, y)) : (h == null || h.addEventListener("mousemove", m.moveHandler, y), h == null || h.addEventListener("mouseup", m.upHandler, y)), t.setColumnSizingInfo((w) => ({
          ...w,
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
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? Ri() : (n = e.initialState.columnSizingInfo) != null ? n : Ri());
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
let No = null;
function tA() {
  if (typeof No == "boolean") return No;
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
  return No = e, No;
}
function Ei(e) {
  return e.type === "touchstart";
}
const nA = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ve("columnVisibility", e)
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
      return (n = r.length ? r.some((i) => i.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, o;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((o = t.options.enableHiding) != null ? o : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = Z(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((o) => o.column.getIsVisible()), Q(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = Z(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, o, r) => [...n, ...o, ...r], Q(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, o) => Z(() => [o(), o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), Q(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var o;
      e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var o;
      n = (o = n) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
        ...r,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var o;
      e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
    };
  }
};
function jn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const oA = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, rA = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ve("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const o = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof o == "string" || typeof o == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, o, r, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((o = t.options.enableGlobalFilter) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => pt.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: o
      } = e.options;
      return zr(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : pt[o];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, iA = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ve("expanded", e),
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
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((o) => {
        var r;
        const i = o === !0 ? !0 : !!(o != null && o[e.id]);
        let s = {};
        if (o === !0 ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
          s[a] = !0;
        }) : s = o, n = (r = n) != null ? r : !i, !i && n)
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
}, gs = 0, vs = 10, Pi = () => ({
  pageIndex: gs,
  pageSize: vs
}), sA = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Pi(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ve("pagination", e)
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
      const r = (i) => Tt(o, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (o) => {
      var r;
      e.setPagination(o ? Pi() : (r = e.initialState.pagination) != null ? r : Pi());
    }, e.setPageIndex = (o) => {
      e.setPagination((r) => {
        let i = Tt(o, r.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...r,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (o) => {
      var r, i;
      e.setPageIndex(o ? gs : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : gs);
    }, e.resetPageSize = (o) => {
      var r, i;
      e.setPageSize(o ? vs : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : vs);
    }, e.setPageSize = (o) => {
      e.setPagination((r) => {
        const i = Math.max(1, Tt(o, r.pageSize)), s = r.pageSize * r.pageIndex, a = Math.floor(s / i);
        return {
          ...r,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (o) => e.setPagination((r) => {
      var i;
      let s = Tt(o, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...r,
        pageCount: s
      };
    }), e.getPageOptions = Z(() => [e.getPageCount()], (o) => {
      let r = [];
      return o && o > 0 && (r = [...new Array(o)].fill(null).map((i, s) => s)), r;
    }, Q(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, Ti = () => ({
  top: [],
  bottom: []
}), aA = {
  getInitialState: (e) => ({
    rowPinning: Ti(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ve("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, o, r) => {
      const i = o ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], s = r ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((l) => {
        var c, d;
        if (n === "bottom") {
          var u, f;
          return {
            top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((g) => !(a != null && a.has(g))),
            bottom: [...((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((g) => !(a != null && a.has(g))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var h, m;
          return {
            top: [...((h = l == null ? void 0 : l.top) != null ? h : []).filter((g) => !(a != null && a.has(g))), ...Array.from(a)],
            bottom: ((m = l == null ? void 0 : l.bottom) != null ? m : []).filter((g) => !(a != null && a.has(g)))
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
        enableRowPinning: o,
        enablePinning: r
      } = t.options;
      return typeof o == "function" ? o(e) : (n = o ?? r) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: o,
        bottom: r
      } = t.getState().rowPinning, i = n.some((a) => o == null ? void 0 : o.includes(a)), s = n.some((a) => r == null ? void 0 : r.includes(a));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      if (!r) return -1;
      const i = (n = r === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: a
        } = s;
        return a;
      });
      return (o = i == null ? void 0 : i.indexOf(e.id)) != null ? o : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, o;
      return e.setRowPinning(t ? Ti() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : Ti());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const o = e.getState().rowPinning;
      if (!t) {
        var r, i;
        return !!((r = o.top) != null && r.length || (i = o.bottom) != null && i.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, o) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
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
        position: o
      }));
    }, e.getTopRows = Z(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), Q(e.options, "debugRows", "getTopRows")), e.getBottomRows = Z(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), Q(e.options, "debugRows", "getBottomRows")), e.getCenterRows = Z(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, o) => {
      const r = /* @__PURE__ */ new Set([...n ?? [], ...o ?? []]);
      return t.filter((i) => !r.has(i.id));
    }, Q(e.options, "debugRows", "getCenterRows"));
  }
}, lA = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ve("rowSelection", e),
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
        return t ? r.forEach((i) => {
          i.getCanSelect() && (o[i.id] = !0);
        }) : r.forEach((i) => {
          delete o[i.id];
        }), o;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const o = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), r = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        ys(r, i.id, o, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Z(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Mi(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Q(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = Z(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Mi(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Q(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = Z(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Mi(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Q(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
      t.setRowSelection((i) => {
        var s;
        if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n)
          return i;
        const a = {
          ...i
        };
        return ys(a, e.id, n, (s = o == null ? void 0 : o.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return za(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ws(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ws(e, n) === "all";
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
}, ys = (e, t, n, o, r) => {
  var i;
  const s = r.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => ys(e, a.id, n, o, r));
};
function Mi(e, t) {
  const n = e.getState().rowSelection, o = [], r = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const d = za(l, n);
      if (d && (o.push(l), r[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), d)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: o,
    rowsById: r
  };
}
function za(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function ws(e, t, n) {
  var o;
  if (!((o = e.subRows) != null && o.length)) return !1;
  let r = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !r) && (s.getCanSelect() && (za(s, t) ? i = !0 : r = !1), s.subRows && s.subRows.length)) {
      const a = ws(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), r = !1);
    }
  }), r ? "all" : i ? "some" : !1;
}
const bs = /([0-9]+)/gm, cA = (e, t, n) => Km(It(e.getValue(n)).toLowerCase(), It(t.getValue(n)).toLowerCase()), uA = (e, t, n) => Km(It(e.getValue(n)), It(t.getValue(n))), dA = (e, t, n) => Ha(It(e.getValue(n)).toLowerCase(), It(t.getValue(n)).toLowerCase()), fA = (e, t, n) => Ha(It(e.getValue(n)), It(t.getValue(n))), pA = (e, t, n) => {
  const o = e.getValue(n), r = t.getValue(n);
  return o > r ? 1 : o < r ? -1 : 0;
}, hA = (e, t, n) => Ha(e.getValue(n), t.getValue(n));
function Ha(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function It(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Km(e, t) {
  const n = e.split(bs).filter(Boolean), o = t.split(bs).filter(Boolean);
  for (; n.length && o.length; ) {
    const r = n.shift(), i = o.shift(), s = parseInt(r, 10), a = parseInt(i, 10), l = [s, a].sort();
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
  return n.length - o.length;
}
const Vn = {
  alphanumeric: cA,
  alphanumericCaseSensitive: uA,
  text: dA,
  textCaseSensitive: fA,
  datetime: pA,
  basic: hA
}, mA = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ve("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let o = !1;
      for (const r of n) {
        const i = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Vn.datetime;
        if (typeof i == "string" && (o = !0, i.split(bs).length > 1))
          return Vn.alphanumeric;
      }
      return o ? Vn.text : Vn.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return zr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : Vn[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, o) => {
      const r = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const a = s == null ? void 0 : s.find((h) => h.id === e.id), l = s == null ? void 0 : s.findIndex((h) => h.id === e.id);
        let c = [], d, u = i ? n : r === "desc";
        if (s != null && s.length && e.getCanMultiSort() && o ? a ? d = "toggle" : d = "add" : s != null && s.length && l !== s.length - 1 ? d = "replace" : a ? d = "toggle" : d = "replace", d === "toggle" && (i || r || (d = "remove")), d === "add") {
          var f;
          c = [...s, {
            id: e.id,
            desc: u
          }], c.splice(0, c.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
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
      var n, o;
      return ((n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var o, r;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((o = t.options.enableSortingRemoval) == null || o) && // If enableSortRemove, enable in general
      (!(n && (r = t.options.enableMultiRemove) != null) || r) ? !1 : s === "desc" ? "asc" : "desc" : i;
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
}, gA = [
  VM,
  nA,
  ZM,
  QM,
  LM,
  $M,
  oA,
  //depends on ColumnFaceting
  rA,
  //depends on ColumnFiltering
  mA,
  XM,
  //depends on RowSorting
  iA,
  sA,
  aA,
  lA,
  eA
];
function vA(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const o = [...gA, ...(t = e._features) != null ? t : []];
  let r = {
    _features: o
  };
  const i = r._features.reduce((f, h) => Object.assign(f, h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(r)), {}), s = (f) => r.options.mergeOptions ? r.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  r._features.forEach((f) => {
    var h;
    l = (h = f.getInitialState == null ? void 0 : f.getInitialState(l)) != null ? h : l;
  });
  const c = [];
  let d = !1;
  const u = {
    _features: o,
    options: {
      ...i,
      ...e
    },
    initialState: l,
    _queue: (f) => {
      c.push(f), d || (d = !0, Promise.resolve().then(() => {
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
    setOptions: (f) => {
      const h = Tt(f, r.options);
      r.options = s(h);
    },
    getState: () => r.options.state,
    setState: (f) => {
      r.options.onStateChange == null || r.options.onStateChange(f);
    },
    _getRowId: (f, h, m) => {
      var g;
      return (g = r.options.getRowId == null ? void 0 : r.options.getRowId(f, h, m)) != null ? g : `${m ? [m.id, h].join(".") : h}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, h) => {
      let m = (h ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[f];
      if (!m && (m = r.getCoreRowModel().rowsById[f], !m))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return m;
    },
    _getDefaultColumnDef: Z(() => [r.options.defaultColumn], (f) => {
      var h;
      return f = (h = f) != null ? h : {}, {
        header: (m) => {
          const g = m.header.column.columnDef;
          return g.accessorKey ? g.accessorKey : g.accessorFn ? g.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var g, y;
          return (g = (y = m.renderValue()) == null || y.toString == null ? void 0 : y.toString()) != null ? g : null;
        },
        ...r._features.reduce((m, g) => Object.assign(m, g.getDefaultColumnDef == null ? void 0 : g.getDefaultColumnDef()), {}),
        ...f
      };
    }, Q(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: Z(() => [r._getColumnDefs()], (f) => {
      const h = function(m, g, y) {
        return y === void 0 && (y = 0), m.map((w) => {
          const b = OM(r, w, y, g), x = w;
          return b.columns = x.columns ? h(x.columns, b, y + 1) : [], b;
        });
      };
      return h(f);
    }, Q(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: Z(() => [r.getAllColumns()], (f) => f.flatMap((h) => h.getFlatColumns()), Q(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: Z(() => [r.getAllFlatColumns()], (f) => f.reduce((h, m) => (h[m.id] = m, h), {}), Q(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: Z(() => [r.getAllColumns(), r._getOrderColumnsFn()], (f, h) => {
      let m = f.flatMap((g) => g.getLeafColumns());
      return h(m);
    }, Q(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const h = r._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !h && console.error(`[Table] Column with id '${f}' does not exist.`), h;
    }
  };
  Object.assign(r, u);
  for (let f = 0; f < r._features.length; f++) {
    const h = r._features[f];
    h == null || h.createTable == null || h.createTable(r);
  }
  return r;
}
function yA() {
  return (e) => Z(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, o = function(r, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < r.length; c++) {
        const d = $a(e, e._getRowId(r[c], c, s), r[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, a.push(d), e.options.getSubRows) {
          var l;
          d.originalSubRows = e.options.getSubRows(r[c], c), (l = d.originalSubRows) != null && l.length && (d.subRows = o(d.originalSubRows, i + 1, d));
        }
      }
      return a;
    };
    return n.rows = o(t), n;
  }, Q(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function wA(e) {
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
function bA(e, t, n) {
  return n.options.filterFromLeafRows ? xA(e, t, n) : SA(e, t, n);
}
function xA(e, t, n) {
  var o;
  const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let f = 0; f < l.length; f++) {
      var u;
      let h = l[f];
      const m = $a(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
      if (m.columnFilters = h.columnFilters, (u = h.subRows) != null && u.length && c < s) {
        if (m.subRows = a(h.subRows, c + 1), h = m, t(h) && !m.subRows.length) {
          d.push(h), i[h.id] = h, r.push(h);
          continue;
        }
        if (t(h) || m.subRows.length) {
          d.push(h), i[h.id] = h, r.push(h);
          continue;
        }
      } else
        h = m, t(h) && (d.push(h), i[h.id] = h, r.push(h));
    }
    return d;
  };
  return {
    rows: a(e),
    flatRows: r,
    rowsById: i
  };
}
function SA(e, t, n) {
  var o;
  const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let f = 0; f < l.length; f++) {
      let h = l[f];
      if (t(h)) {
        var u;
        if ((u = h.subRows) != null && u.length && c < s) {
          const g = $a(n, h.id, h.original, h.index, h.depth, void 0, h.parentId);
          g.subRows = a(h.subRows, c + 1), h = g;
        }
        d.push(h), r.push(h), i[h.id] = h;
      }
    }
    return d;
  };
  return {
    rows: a(e),
    flatRows: r,
    rowsById: i
  };
}
function CA() {
  return (e) => Z(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, o) => {
    if (!t.rows.length || !(n != null && n.length) && !o) {
      for (let f = 0; f < t.flatRows.length; f++)
        t.flatRows[f].columnFilters = {}, t.flatRows[f].columnFiltersMeta = {};
      return t;
    }
    const r = [], i = [];
    (n ?? []).forEach((f) => {
      var h;
      const m = e.getColumn(f.id);
      if (!m)
        return;
      const g = m.getFilterFn();
      if (!g) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${m.id}.`);
        return;
      }
      r.push({
        id: f.id,
        filterFn: g,
        resolvedValue: (h = g.resolveFilterValue == null ? void 0 : g.resolveFilterValue(f.value)) != null ? h : f.value
      });
    });
    const s = (n ?? []).map((f) => f.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
    o && a && l.length && (s.push("__global__"), l.forEach((f) => {
      var h;
      i.push({
        id: f.id,
        filterFn: a,
        resolvedValue: (h = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(o)) != null ? h : o
      });
    }));
    let c, d;
    for (let f = 0; f < t.flatRows.length; f++) {
      const h = t.flatRows[f];
      if (h.columnFilters = {}, r.length)
        for (let m = 0; m < r.length; m++) {
          c = r[m];
          const g = c.id;
          h.columnFilters[g] = c.filterFn(h, g, c.resolvedValue, (y) => {
            h.columnFiltersMeta[g] = y;
          });
        }
      if (i.length) {
        for (let m = 0; m < i.length; m++) {
          d = i[m];
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
    const u = (f) => {
      for (let h = 0; h < s.length; h++)
        if (f.columnFilters[s[h]] === !1)
          return !1;
      return !0;
    };
    return bA(t.rows, u, e);
  }, Q(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function RA(e) {
  return (t) => Z(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, o) => {
    if (!o.rows.length)
      return o;
    const {
      pageSize: r,
      pageIndex: i
    } = n;
    let {
      rows: s,
      flatRows: a,
      rowsById: l
    } = o;
    const c = r * i, d = c + r;
    s = s.slice(c, d);
    let u;
    t.options.paginateExpandedRows ? u = {
      rows: s,
      flatRows: a,
      rowsById: l
    } : u = wA({
      rows: s,
      flatRows: a,
      rowsById: l
    }), u.flatRows = [];
    const f = (h) => {
      u.flatRows.push(h), h.subRows.length && h.subRows.forEach(f);
    };
    return u.rows.forEach(f), u;
  }, Q(t.options, "debugTable", "getPaginationRowModel"));
}
function EA() {
  return (e) => Z(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const o = e.getState().sorting, r = [], i = o.filter((l) => {
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
          var f;
          const m = i[h], g = s[m.id], y = g.sortUndefined, w = (f = m == null ? void 0 : m.desc) != null ? f : !1;
          let b = 0;
          if (y) {
            const x = d.getValue(m.id), S = u.getValue(m.id), R = x === void 0, E = S === void 0;
            if (R || E) {
              if (y === "first") return R ? -1 : 1;
              if (y === "last") return R ? 1 : -1;
              b = R && E ? 0 : R ? y : -y;
            }
          }
          if (b === 0 && (b = g.sortingFn(d, u, m.id)), b !== 0)
            return w && (b *= -1), g.invertSorting && (b *= -1), b;
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
  }, Q(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function Ai(e, t) {
  return e ? PA(e) ? /* @__PURE__ */ p.createElement(e, t) : e : null;
}
function PA(e) {
  return TA(e) || typeof e == "function" || MA(e);
}
function TA(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function MA(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function AA(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = p.useState(() => ({
    current: vA(t)
  })), [o, r] = p.useState(() => n.current.initialState);
  return n.current.setOptions((i) => ({
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
  })), n.current;
}
function ou({
  checked: e,
  indeterminate: t,
  onChange: n,
  onClick: o,
  className: r
}) {
  const i = p.useRef(null);
  return p.useEffect(() => {
    i.current && (i.current.indeterminate = !!t);
  }, [t]), /* @__PURE__ */ v(
    "input",
    {
      ref: i,
      type: "checkbox",
      checked: e,
      onChange: n,
      onClick: o,
      className: Y(
        "h-3.5 w-3.5 rounded border-border accent-primary cursor-pointer align-middle",
        r
      )
    }
  );
}
function XA({
  columns: e,
  data: t,
  searchColumn: n,
  searchPlaceholder: o = "Search...",
  rowActions: r,
  getRowLabel: i,
  pageSize: s = 10
}) {
  var O;
  const a = s === "all", [l, c] = p.useState([]), [d, u] = p.useState([]), [f, h] = p.useState({}), [m, g] = p.useState(null), [y, w] = p.useState(null), [b, x] = p.useState(!1), S = p.useMemo(
    () => ({
      id: "_select",
      header: ({ table: D }) => /* @__PURE__ */ v(
        ou,
        {
          checked: D.getIsAllPageRowsSelected(),
          indeterminate: D.getIsSomePageRowsSelected(),
          onChange: D.getToggleAllPageRowsSelectedHandler()
        }
      ),
      cell: ({ row: D }) => /* @__PURE__ */ v(
        ou,
        {
          checked: D.getIsSelected(),
          onChange: D.getToggleSelectedHandler(),
          onClick: (P) => P.stopPropagation()
        }
      ),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 36
    }),
    []
  ), R = p.useMemo(
    () => [S, ...e],
    [S, e]
  ), E = AA({
    data: t,
    columns: R,
    getCoreRowModel: yA(),
    getPaginationRowModel: RA(),
    getSortedRowModel: EA(),
    getFilteredRowModel: CA(),
    onSortingChange: c,
    onColumnFiltersChange: u,
    onRowSelectionChange: h,
    enableRowSelection: !0,
    initialState: {
      pagination: { pageSize: a ? Number.MAX_SAFE_INTEGER : s }
    },
    state: {
      sorting: l,
      columnFilters: d,
      rowSelection: f
    }
  }), T = E.getRowModel().rows, C = E.getSelectedRowModel().rows.map((D) => D.original), I = C.length, A = I > 0 ? C : m !== null && T[m] ? [T[m].original] : [], L = A.length === 0 ? "Actions" : A.length === 1 ? i ? i(A[0]) : "1 row" : `${A.length} rows`;
  p.useEffect(() => {
    const D = (P) => {
      var _;
      const k = P.target;
      if (!(k.tagName === "INPUT" || k.tagName === "TEXTAREA" || k.tagName === "SELECT" || k.isContentEditable))
        if ((P.metaKey || P.ctrlKey) && P.key === "k") {
          if (!(r != null && r.length)) return;
          P.preventDefault(), x(!0);
        } else (P.metaKey || P.ctrlKey) && P.key === "a" ? (P.preventDefault(), E.toggleAllPageRowsSelected(!0)) : P.key === "ArrowDown" ? (P.preventDefault(), g(
          (ne) => ne === null ? 0 : Math.min(ne + 1, T.length - 1)
        )) : P.key === "ArrowUp" ? (P.preventDefault(), g(
          (ne) => ne === null ? 0 : Math.max(ne - 1, 0)
        )) : (P.key === " " || P.key === "x") && m !== null ? (P.preventDefault(), (_ = T[m]) == null || _.toggleSelected()) : P.key === "Enter" && m !== null && (r != null && r.length) ? (P.preventDefault(), x(!0)) : P.key === "Escape" && (y ? w(null) : I > 0 ? E.resetRowSelection() : g(null));
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [r, T, m, I, y, E]), p.useEffect(() => {
    if (!y) return;
    const D = () => w(null);
    return window.addEventListener("click", D), window.addEventListener("scroll", D, !0), () => {
      window.removeEventListener("click", D), window.removeEventListener("scroll", D, !0);
    };
  }, [y]);
  const W = (D, P) => {
    r != null && r.length && (D.preventDefault(), g(P), w({ x: D.clientX, y: D.clientY, rowIndex: P }));
  }, q = () => {
    if (y === null) return C;
    const D = T[y.rowIndex];
    return !D || C.length > 0 && D.getIsSelected() ? C : [D.original];
  }, K = E.getState().pagination.pageIndex, J = E.getPageCount();
  return /* @__PURE__ */ G("div", { className: "flex flex-col gap-3", children: [
    n && /* @__PURE__ */ v("div", { className: "flex items-center", children: /* @__PURE__ */ v(
      mr,
      {
        placeholder: o,
        value: ((O = E.getColumn(n)) == null ? void 0 : O.getFilterValue()) ?? "",
        onChange: (D) => {
          var P;
          return (P = E.getColumn(n)) == null ? void 0 : P.setFilterValue(D.target.value);
        },
        className: "max-w-sm h-8 text-sm"
      }
    ) }),
    /* @__PURE__ */ v("div", { className: "rounded-md border border-border overflow-hidden", children: /* @__PURE__ */ G(Fm, { children: [
      /* @__PURE__ */ v(Om, { children: E.getHeaderGroups().map((D) => /* @__PURE__ */ v(Wo, { className: "bg-muted/30 hover:bg-muted/30", children: D.headers.map((P) => /* @__PURE__ */ v(
        Lm,
        {
          style: P.column.columnDef.size ? { width: P.column.columnDef.size } : void 0,
          className: Y(
            "text-xs font-medium text-muted-foreground uppercase tracking-wide h-8",
            P.id === "_select" && "w-9 px-3",
            P.column.getCanSort() && "cursor-pointer select-none"
          ),
          onClick: P.column.getCanSort() ? P.column.getToggleSortingHandler() : void 0,
          children: P.isPlaceholder ? null : P.id === "_select" ? Ai(P.column.columnDef.header, P.getContext()) : /* @__PURE__ */ G("div", { className: "flex items-center gap-1", children: [
            Ai(P.column.columnDef.header, P.getContext()),
            P.column.getCanSort() && /* @__PURE__ */ v(
              Hb,
              {
                className: Y(
                  "h-3 w-3 transition-opacity",
                  P.column.getIsSorted() ? "opacity-100 text-foreground" : "opacity-30"
                )
              }
            )
          ] })
        },
        P.id
      )) }, D.id)) }),
      /* @__PURE__ */ v(Vm, { children: T.length ? T.map((D, P) => /* @__PURE__ */ v(
        Wo,
        {
          "data-state": D.getIsSelected() ? "selected" : void 0,
          className: Y(
            "border-border/50 h-9 cursor-pointer select-none",
            D.getIsSelected() ? "bg-primary/10 hover:bg-primary/15" : "hover:bg-muted/40",
            m === P && "ring-1 ring-inset ring-primary/50"
          ),
          onClick: () => {
            g(P), D.toggleSelected();
          },
          onMouseEnter: () => g(P),
          onContextMenu: (k) => W(k, P),
          children: D.getVisibleCells().map((k) => /* @__PURE__ */ v(
            hs,
            {
              className: Y(
                "py-1.5 text-sm",
                k.column.id === "_select" && "w-9 px-3"
              ),
              children: Ai(k.column.columnDef.cell, k.getContext())
            },
            k.id
          ))
        },
        D.id
      )) : /* @__PURE__ */ v(Wo, { children: /* @__PURE__ */ v(
        hs,
        {
          colSpan: R.length,
          className: "h-24 text-center text-muted-foreground text-sm",
          children: "No results found."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ G("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ G("p", { className: "text-xs text-muted-foreground", children: [
        E.getFilteredRowModel().rows.length,
        " row",
        E.getFilteredRowModel().rows.length !== 1 ? "s" : ""
      ] }),
      !a && /* @__PURE__ */ G("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ G("span", { className: "text-xs text-muted-foreground", children: [
          "Page ",
          K + 1,
          " of ",
          Math.max(J, 1)
        ] }),
        /* @__PURE__ */ G(
          yn,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => E.previousPage(),
            disabled: !E.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ v(Yd, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ v("span", { className: "sr-only", children: "Previous page" })
            ]
          }
        ),
        /* @__PURE__ */ G(
          yn,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => E.nextPage(),
            disabled: !E.getCanNextPage(),
            children: [
              /* @__PURE__ */ v(Gs, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ v("span", { className: "sr-only", children: "Next page" })
            ]
          }
        )
      ] })
    ] }),
    y && (r == null ? void 0 : r.length) && qa(
      /* @__PURE__ */ v(
        "div",
        {
          style: { top: y.y, left: y.x },
          className: "fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4",
          onClick: (D) => D.stopPropagation(),
          children: r.map((D, P) => /* @__PURE__ */ G(
            "button",
            {
              className: Y(
                "flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent",
                D.destructive && "text-destructive hover:text-destructive focus:text-destructive"
              ),
              onClick: () => {
                D.onClick(q()), w(null);
              },
              children: [
                D.icon,
                D.label
              ]
            },
            P
          ))
        }
      ),
      document.body
    ),
    I > 0 && qa(
      /* @__PURE__ */ G("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg", children: [
        /* @__PURE__ */ G("span", { className: "px-2 text-sm font-medium", children: [
          I,
          " selected"
        ] }),
        /* @__PURE__ */ v(Rr, { children: /* @__PURE__ */ G(Er, { children: [
          /* @__PURE__ */ v(Pr, { asChild: !0, children: /* @__PURE__ */ v(
            "button",
            {
              className: "flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors",
              onClick: () => E.resetRowSelection(),
              children: /* @__PURE__ */ v(Ws, { className: "h-3.5 w-3.5" })
            }
          ) }),
          /* @__PURE__ */ G(no, { className: "flex items-center gap-1.5 bg-primary-foreground text-primary border border-primary/20", children: [
            "Clear selected",
            /* @__PURE__ */ v("kbd", { className: "rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none", children: "Esc" })
          ] })
        ] }) }),
        r != null && r.length ? /* @__PURE__ */ G(
          "button",
          {
            className: "ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity",
            onClick: () => x(!0),
            children: [
              /* @__PURE__ */ v(qb, { className: "h-3.5 w-3.5" }),
              "Actions"
            ]
          }
        ) : null
      ] }),
      document.body
    ),
    r != null && r.length ? /* @__PURE__ */ G(
      km,
      {
        open: b,
        onOpenChange: x,
        title: "Row Actions",
        description: "Choose an action to apply to selected rows",
        children: [
          /* @__PURE__ */ v(Na, { placeholder: "Type a command or search..." }),
          /* @__PURE__ */ G(Fa, { children: [
            /* @__PURE__ */ v(Oa, { children: "No actions available." }),
            /* @__PURE__ */ v(Va, { heading: L, children: r.map((D, P) => /* @__PURE__ */ G(
              La,
              {
                onSelect: () => {
                  D.onClick(A), x(!1);
                },
                className: Y(D.destructive && "text-destructive"),
                children: [
                  D.icon,
                  D.label
                ]
              },
              P
            )) })
          ] })
        ]
      }
    ) : null
  ] });
}
function Ym({
  item: e,
  isActive: t,
  collapsed: n,
  depth: o = 0,
  onActiveChange: r
}) {
  const [i, s] = p.useState(!0), a = e.icon, c = /* @__PURE__ */ G(
    "button",
    {
      onClick: () => {
        e.children && s((d) => !d), e.onClick && e.onClick(), r && r(e.id);
      },
      className: Y(
        "group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
        o > 0 && "ml-4 w-[calc(100%-1rem)]",
        t ? "bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary" : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
        n && "justify-center px-0"
      ),
      children: [
        a && /* @__PURE__ */ v(
          a,
          {
            className: Y(
              "shrink-0 transition-colors",
              n ? "h-4.5 w-4.5" : "h-4 w-4",
              t ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
            )
          }
        ),
        !n && /* @__PURE__ */ G(vn, { children: [
          /* @__PURE__ */ v("span", { className: "flex-1 truncate text-left", children: e.label }),
          e.badge !== void 0 && /* @__PURE__ */ v("span", { className: "ml-auto text-xs tabular-nums text-muted-foreground", children: e.badge })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ G("div", { children: [
    n ? /* @__PURE__ */ v(Rr, { delayDuration: 0, children: /* @__PURE__ */ G(Er, { children: [
      /* @__PURE__ */ v(Pr, { asChild: !0, children: c }),
      /* @__PURE__ */ v(no, { side: "right", children: /* @__PURE__ */ v("p", { children: e.label }) })
    ] }) }) : c,
    !n && e.children && i && /* @__PURE__ */ v("div", { className: "mt-0.5 space-y-0.5", children: e.children.map((d) => /* @__PURE__ */ v(
      Ym,
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
function DA(e) {
  return e.id.startsWith("separator");
}
function qA({
  items: e,
  activeId: t,
  onActiveChange: n,
  collapsed: o = !1,
  onCollapsedChange: r,
  header: i,
  footer: s
}) {
  const a = [];
  let l = [];
  for (const c of e)
    DA(c) ? (a.push(l), l = []) : l.push(c);
  return a.push(l), /* @__PURE__ */ G(
    "div",
    {
      className: Y(
        "flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200",
        o ? "w-12" : "w-56"
      ),
      children: [
        i && /* @__PURE__ */ v("div", { className: Y("shrink-0 border-b border-sidebar-border", o ? "px-2 py-3" : "px-3 py-3"), children: i }),
        /* @__PURE__ */ v("div", { className: "flex-1 overflow-y-auto py-2", children: a.map((c, d) => /* @__PURE__ */ G(p.Fragment, { children: [
          d > 0 && /* @__PURE__ */ v(Ou, { className: "my-2 bg-sidebar-border" }),
          /* @__PURE__ */ v("nav", { className: Y("space-y-0.5", o ? "px-1" : "px-2"), children: c.map((u) => /* @__PURE__ */ v(
            Ym,
            {
              item: u,
              isActive: t === u.id,
              collapsed: o,
              onActiveChange: n
            },
            u.id
          )) })
        ] }, d)) }),
        s && /* @__PURE__ */ v("div", { className: Y("shrink-0 border-t border-sidebar-border", o ? "px-1 py-2" : "px-2 py-2"), children: s }),
        /* @__PURE__ */ v("div", { className: Y("shrink-0 border-t border-sidebar-border", o ? "px-1 py-2" : "px-2 py-2"), children: /* @__PURE__ */ v(Rr, { delayDuration: 0, children: /* @__PURE__ */ G(Er, { children: [
          /* @__PURE__ */ v(Pr, { asChild: !0, children: /* @__PURE__ */ v(
            "button",
            {
              onClick: () => r == null ? void 0 : r(!o),
              className: Y(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors",
                o && "justify-center px-0"
              ),
              children: o ? /* @__PURE__ */ v(Gs, { className: "h-4 w-4" }) : /* @__PURE__ */ G(vn, { children: [
                /* @__PURE__ */ v(Yd, { className: "h-4 w-4" }),
                /* @__PURE__ */ v("span", { children: "Collapse" })
              ] })
            }
          ) }),
          o && /* @__PURE__ */ v(no, { side: "right", children: /* @__PURE__ */ v("p", { children: "Expand sidebar" }) })
        ] }) }) })
      ]
    }
  );
}
function _A({ filter: e, onSelect: t, onClose: n }) {
  const [o, r] = p.useState("");
  return e.type === "select" && e.options ? /* @__PURE__ */ G("div", { className: "space-y-1", children: [
    /* @__PURE__ */ G("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Select ",
      e.label
    ] }),
    e.options.map((i) => /* @__PURE__ */ v(
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
  ] }) : e.type === "boolean" ? /* @__PURE__ */ G("div", { className: "space-y-1", children: [
    /* @__PURE__ */ v("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: e.label }),
    /* @__PURE__ */ v(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t("true", "Yes"), n();
        },
        children: "Yes"
      }
    ),
    /* @__PURE__ */ v(
      "button",
      {
        className: "flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
        onClick: () => {
          t("false", "No"), n();
        },
        children: "No"
      }
    )
  ] }) : /* @__PURE__ */ G("div", { className: "space-y-2", children: [
    /* @__PURE__ */ G("p", { className: "text-xs text-muted-foreground px-1 py-0.5", children: [
      "Enter ",
      e.label
    ] }),
    /* @__PURE__ */ G("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ v(
        mr,
        {
          value: o,
          onChange: (i) => r(i.target.value),
          placeholder: `Filter by ${e.label.toLowerCase()}...`,
          className: "h-7 text-sm",
          onKeyDown: (i) => {
            i.key === "Enter" && o.trim() && (t(o.trim(), o.trim()), n());
          },
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ v(
        yn,
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
function ZA({
  availableFilters: e,
  activeFilters: t,
  onAdd: n,
  onRemove: o,
  onClear: r,
  searchValue: i,
  onSearchChange: s,
  searchPlaceholder: a = "Search..."
}) {
  const [l, c] = p.useState(null), [d, u] = p.useState(!1), [f, h] = p.useState(!1), m = new Set(t.map((b) => b.filterId)), g = e.filter((b) => !m.has(b.id)), y = (b) => {
    h(!1), c(b), u(!0);
  }, w = (b, x) => {
    l && (n({
      filterId: l.id,
      label: `${l.label}: ${x}`,
      value: b
    }), c(null), u(!1));
  };
  return /* @__PURE__ */ G("div", { className: "flex items-center gap-2 flex-wrap", children: [
    s && /* @__PURE__ */ G("div", { className: "relative", children: [
      /* @__PURE__ */ v(s0, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ v(
        mr,
        {
          value: i ?? "",
          onChange: (b) => s(b.target.value),
          placeholder: a,
          className: "h-7 pl-7 text-sm w-48"
        }
      )
    ] }),
    t.map((b) => /* @__PURE__ */ G(
      lv,
      {
        variant: "secondary",
        className: "flex items-center gap-1 h-6 px-2 text-xs font-normal rounded-md",
        children: [
          /* @__PURE__ */ v("span", { children: b.label }),
          /* @__PURE__ */ G(
            "button",
            {
              onClick: () => o(b.filterId),
              className: "ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity",
              children: [
                /* @__PURE__ */ v(Ws, { className: "h-3 w-3" }),
                /* @__PURE__ */ v("span", { className: "sr-only", children: "Remove filter" })
              ]
            }
          )
        ]
      },
      b.filterId
    )),
    /* @__PURE__ */ G(wS, { open: d, onOpenChange: (b) => {
      u(b), b || c(null);
    }, children: [
      /* @__PURE__ */ G(Kx, { open: f, onOpenChange: h, children: [
        /* @__PURE__ */ v(bS, { asChild: !0, children: /* @__PURE__ */ v("span", {}) }),
        /* @__PURE__ */ v(Yx, { asChild: !0, children: /* @__PURE__ */ G(
          yn,
          {
            variant: "ghost",
            size: "sm",
            className: Y(
              "h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
              g.length === 0 && "opacity-50 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ v(r0, { className: "h-3.5 w-3.5" }),
              "Filter"
            ]
          }
        ) }),
        /* @__PURE__ */ G(sp, { align: "start", className: "w-44", children: [
          /* @__PURE__ */ v(lp, { className: "text-xs", children: "Add filter" }),
          /* @__PURE__ */ v(cp, {}),
          g.map((b) => /* @__PURE__ */ G(
            ap,
            {
              onClick: () => y(b),
              className: "text-sm",
              children: [
                /* @__PURE__ */ v(Qb, { className: "h-3.5 w-3.5 mr-2 opacity-50" }),
                b.label
              ]
            },
            b.id
          )),
          g.length === 0 && /* @__PURE__ */ v("p", { className: "px-2 py-1.5 text-xs text-muted-foreground", children: "All filters active" })
        ] })
      ] }),
      l && /* @__PURE__ */ v(Sp, { align: "start", className: "w-64 p-2", children: /* @__PURE__ */ v(
        _A,
        {
          filter: l,
          onSelect: w,
          onClose: () => {
            u(!1), c(null);
          }
        }
      ) })
    ] }),
    t.length > 0 && /* @__PURE__ */ v(
      "button",
      {
        onClick: r,
        className: "text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline",
        children: "Clear all"
      }
    )
  ] });
}
function QA({
  groups: e,
  placeholder: t = "Type a command or search...",
  open: n,
  onOpenChange: o,
  triggerShortcut: r = !0
}) {
  const [i, s] = p.useState(!1), a = n !== void 0, l = a ? n : i, c = p.useCallback(
    (d) => {
      a || s(d), o == null || o(d);
    },
    [a, o]
  );
  return p.useEffect(() => {
    if (!r) return;
    const d = (u) => {
      u.key === "k" && (u.metaKey || u.ctrlKey) && (u.preventDefault(), c(!l));
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [r, l, c]), /* @__PURE__ */ G(km, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ v(Na, { placeholder: t }),
    /* @__PURE__ */ G(Fa, { children: [
      /* @__PURE__ */ v(Oa, { children: "No results found." }),
      e.map((d, u) => /* @__PURE__ */ G(p.Fragment, { children: [
        u > 0 && /* @__PURE__ */ v(Im, {}),
        /* @__PURE__ */ v(Va, { heading: d.label, children: d.items.map((f) => {
          const h = f.icon;
          return /* @__PURE__ */ G(
            La,
            {
              value: [f.label, ...f.keywords ?? []].join(" "),
              onSelect: () => {
                f.onSelect(), c(!1);
              },
              children: [
                h && /* @__PURE__ */ v(h, { className: "mr-2 h-4 w-4 opacity-70" }),
                /* @__PURE__ */ v("span", { children: f.label }),
                f.shortcut && /* @__PURE__ */ v(Nm, { children: f.shortcut })
              ]
            },
            f.id
          );
        }) })
      ] }, d.label))
    ] })
  ] });
}
const Xm = p.createContext(void 0), kA = "dkn2-ui-theme";
function qm() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ru(e) {
  return e === "system" ? qm() : e;
}
function JA({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = kA
}) {
  const [o, r] = p.useState(() => typeof window > "u" ? t : localStorage.getItem(n) ?? t), [i, s] = p.useState(
    () => ru(o)
  );
  p.useEffect(() => {
    const c = document.documentElement, d = ru(o);
    s(d), c.classList.remove("light", "dark"), c.classList.add(d);
  }, [o]), p.useEffect(() => {
    if (o !== "system") return;
    const c = window.matchMedia("(prefers-color-scheme: dark)"), d = () => {
      const u = qm();
      s(u), document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(u);
    };
    return c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [o]);
  const a = p.useCallback(
    (c) => {
      localStorage.setItem(n, c), r(c);
    },
    [n]
  ), l = p.useMemo(
    () => ({ theme: o, resolvedTheme: i, setTheme: a }),
    [o, i, a]
  );
  return /* @__PURE__ */ v(Xm.Provider, { value: l, children: e });
}
function IA() {
  const e = p.useContext(Xm);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
const Di = ["light", "dark", "system"], NA = {
  light: l0,
  dark: n0,
  system: e0
}, iu = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System theme"
};
function e1() {
  const { theme: e, setTheme: t } = IA(), n = () => {
    const r = Di.indexOf(e), i = Di[(r + 1) % Di.length];
    t(i);
  }, o = NA[e];
  return /* @__PURE__ */ v(Rr, { delayDuration: 0, children: /* @__PURE__ */ G(Er, { children: [
    /* @__PURE__ */ v(Pr, { asChild: !0, children: /* @__PURE__ */ v(
      yn,
      {
        variant: "ghost",
        size: "icon",
        onClick: n,
        "aria-label": iu[e],
        children: /* @__PURE__ */ v(o, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ v(no, { children: /* @__PURE__ */ v("p", { children: iu[e] }) })
  ] }) });
}
export {
  lv as Badge,
  yn as Button,
  _m as Command,
  km as CommandDialog,
  Oa as CommandEmpty,
  Va as CommandGroup,
  Na as CommandInput,
  La as CommandItem,
  Fa as CommandList,
  QA as CommandMenu,
  Im as CommandSeparator,
  Nm as CommandShortcut,
  XA as DataTable,
  u0 as Dialog,
  zA as DialogClose,
  qd as DialogContent,
  Jd as DialogDescription,
  f0 as DialogFooter,
  Zd as DialogHeader,
  Xd as DialogOverlay,
  d0 as DialogPortal,
  Qd as DialogTitle,
  BA as DialogTrigger,
  Kx as DropdownMenu,
  Zx as DropdownMenuCheckboxItem,
  sp as DropdownMenuContent,
  HA as DropdownMenuGroup,
  ap as DropdownMenuItem,
  lp as DropdownMenuLabel,
  jA as DropdownMenuPortal,
  WA as DropdownMenuRadioGroup,
  Qx as DropdownMenuRadioItem,
  cp as DropdownMenuSeparator,
  Jx as DropdownMenuShortcut,
  GA as DropdownMenuSub,
  qx as DropdownMenuSubContent,
  Xx as DropdownMenuSubTrigger,
  Yx as DropdownMenuTrigger,
  ZA as FilterBar,
  mr as Input,
  fv as Label,
  wS as Popover,
  UA as PopoverAnchor,
  Sp as PopoverContent,
  bS as PopoverTrigger,
  FS as ScrollArea,
  Op as ScrollBar,
  Ou as Separator,
  qA as SideMenu,
  Fm as Table,
  Vm as TableBody,
  iM as TableCaption,
  hs as TableCell,
  rM as TableFooter,
  Lm as TableHead,
  Om as TableHeader,
  Wo as TableRow,
  JA as ThemeProvider,
  e1 as ThemeToggle,
  YA as Toaster,
  Er as Tooltip,
  no as TooltipContent,
  Rr as TooltipProvider,
  Pr as TooltipTrigger,
  av as badgeVariants,
  sv as buttonVariants,
  Y as cn,
  IA as useTheme
};
