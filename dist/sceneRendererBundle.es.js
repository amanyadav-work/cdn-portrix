import ce, { useState as I, useEffect as q, useLayoutEffect as le, useRef as z } from "react";
import { Canvas as ue, useThree as fe, useFrame as de } from "@react-three/fiber";
import { useGLTF as Z } from "@react-three/drei";
import k from "gsap";
import { ScrollTrigger as V } from "gsap/ScrollTrigger";
import * as R from "three";
var A = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function pe() {
  if (W) return _;
  W = 1;
  var d = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function m(o, i, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      n = {};
      for (var p in i)
        p !== "key" && (n[p] = i[p]);
    } else n = i;
    return i = n.ref, {
      $$typeof: d,
      type: o,
      key: a,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return _.Fragment = f, _.jsx = m, _.jsxs = m, _;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function me() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && function() {
    function d(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ae ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case H:
          return "Profiler";
        case B:
          return "StrictMode";
        case re:
          return "Suspense";
        case te:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case v:
            return "Portal";
          case K:
            return (e.displayName || "Context") + ".Provider";
          case Q:
            return (e._context.displayName || "Context") + ".Consumer";
          case ee:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ne:
            return r = e.displayName || null, r !== null ? r : d(e.type) || "Memo";
          case L:
            r = e._payload, e = e._init;
            try {
              return d(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function m(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), f(e);
      }
    }
    function o(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var r = d(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function t() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function x() {
      var e = d(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function s(e, r, t, c, y, b, C, N) {
      return t = b.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: b,
        _owner: y
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function u(e, r, t, c, y, b, C, N) {
      var l = r.children;
      if (l !== void 0)
        if (c)
          if (se(l)) {
            for (c = 0; c < l.length; c++)
              h(l[c]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(l);
      if (D.call(r, "key")) {
        l = d(e);
        var S = Object.keys(r).filter(function(ie) {
          return ie !== "key";
        });
        c = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", X[l + c] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          l,
          S,
          l
        ), X[l + c] = !0);
      }
      if (l = null, t !== void 0 && (m(t), l = "" + t), a(r) && (m(r.key), l = "" + r.key), "key" in r) {
        t = {};
        for (var Y in r)
          Y !== "key" && (t[Y] = r[Y]);
      } else t = r;
      return l && p(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), s(
        e,
        l,
        b,
        y,
        i(),
        t,
        C,
        N
      );
    }
    function h(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var T = ce, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), O = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, se = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, M = {}, $ = T["react-stack-bottom-frame"].bind(
      T,
      n
    )(), U = P(o(n)), X = {};
    w.Fragment = j, w.jsx = function(e, r, t, c, y) {
      var b = 1e4 > O.recentlyCreatedOwnerStacks++;
      return u(
        e,
        r,
        t,
        !1,
        c,
        y,
        b ? Error("react-stack-top-frame") : $,
        b ? P(o(e)) : U
      );
    }, w.jsxs = function(e, r, t, c, y) {
      var b = 1e4 > O.recentlyCreatedOwnerStacks++;
      return u(
        e,
        r,
        t,
        !0,
        c,
        y,
        b ? Error("react-stack-top-frame") : $,
        b ? P(o(e)) : U
      );
    };
  }()), w;
}
var J;
function be() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? A.exports = pe() : A.exports = me()), A.exports;
}
var E = be();
const Ee = {
  "sec-1": { name: "sec-1", modelTransform: { posX: -1, posY: 0, posZ: 0, rotX: 0, rotY: -5, rotZ: 0 }, background: { type: "solid", color1: "#fbfbfb", color2: "#350000" }, lights: [{ id: 17530033689119426e-4, type: "Point", intensity: 9.999999999999998, color: "#e8d8d4", position: [2, 5, 3], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }, { id: 17530033689117395e-4, type: "Ambient", intensity: 28, color: "#7f7f7f", position: [0, 0, 0], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }, { id: 17530039069154421e-4, type: "Directional", intensity: 9.700000000000001, color: "#ffeeee", position: [6.7, 8.700000000000001, 0], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }], selectedAnimation: "Idle", loopCount: "Infinity" },
  "sec-2": { name: "sec-2", modelTransform: { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: -0.7000000000000001, rotZ: 0 }, background: { type: "solid", color1: "#ff6262", color2: "#350000" }, lights: [{ id: 1753003615642278e-3, type: "Directional", intensity: 25, color: "#ff3300", position: [2, 5, 3], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }, { id: 17530036156426309e-4, type: "Ambient", intensity: 28, color: "#803030", position: [0, 0, 0], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }], selectedAnimation: "Idle", loopCount: "Infinity" },
  "sec-3": { name: "sec-3", modelTransform: { posX: -2.7, posY: -0.9, posZ: 3.4000000000000004, rotX: 0, rotY: 1.2000000000000002, rotZ: 0 }, background: { type: "solid", color1: "#0bbc96", color2: "#350000" }, lights: [{ id: 17530037182022205e-4, type: "Directional", intensity: 25, color: "#07ff00", position: [-11102230246251565e-32, 5, 3], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }, { id: 17530037182026328e-4, type: "Ambient", intensity: 28, color: "#2d5c36", position: [0, 0, 0], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }], selectedAnimation: "Take 001", loopCount: "Infinity" },
  "sec-4": { name: "sec-4", modelTransform: { posX: 0, posY: -1.2000000000000002, posZ: 4.9, rotX: 0, rotY: -6.1000000000000005, rotZ: 0 }, background: { type: "solid", color1: "#cfb82f", color2: "#350000" }, lights: [{ id: 1753003968378131e-3, type: "Directional", intensity: 6.699999999999999, color: "#e1ff00", position: [2, 5, 3], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }, { id: 17530039683783835e-4, type: "Ambient", intensity: 5.999999999999999, color: "#708030", position: [0, 0, 0], castShadow: !1, angle: 0, penumbra: 0, distance: 0, decay: 1 }], selectedAnimation: "Idle", loopCount: "Infinity" }
};
k.registerPlugin(V);
function ye({ modelPath: d, activeSection: f, sceneSettings: m }) {
  const o = z(), { scene: i } = Z(d);
  Z.preload(d);
  const { scene: n } = fe(), a = z({
    position: new R.Vector3(),
    rotation: new R.Euler()
  }).current, [p, x] = I([]);
  return q(() => {
    if (!f) return;
    const s = m[f];
    if (!s || !s.modelTransform) return;
    const { modelTransform: u, background: h, lights: T } = s;
    if (k.to(a.position, {
      x: u.posX,
      y: u.posY,
      z: u.posZ,
      duration: 1,
      ease: "power1.out"
    }), k.to(a.rotation, {
      x: u.rotX,
      y: u.rotY,
      z: u.rotZ,
      duration: 1,
      ease: "power1.out"
    }), h.type === "solid") {
      const g = new R.Color(h.color1);
      n.background || (n.background = new R.Color(g));
      const v = n.background;
      k.to(v, {
        r: g.r,
        g: g.g,
        b: g.b,
        duration: 1,
        onUpdate: () => {
          n.background.setRGB(v.r, v.g, v.b);
        }
      });
    } else
      n.background = null;
    x(T || []);
  }, [f, n, m]), de(() => {
    o.current && (o.current.position.lerp(a.position, 0.1), o.current.rotation.x = R.MathUtils.lerp(o.current.rotation.x, a.rotation.x, 0.1), o.current.rotation.y = R.MathUtils.lerp(o.current.rotation.y, a.rotation.y, 0.1), o.current.rotation.z = R.MathUtils.lerp(o.current.rotation.z, a.rotation.z, 0.1));
  }), /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    p.map((s) => {
      const u = {
        key: s.id,
        position: s.position,
        intensity: s.intensity,
        color: s.color,
        castShadow: s.castShadow
      };
      switch (s.type) {
        case "Directional":
          return /* @__PURE__ */ E.jsx("directionalLight", { ...u });
        case "Point":
          return /* @__PURE__ */ E.jsx("pointLight", { ...u });
        case "Ambient":
          return /* @__PURE__ */ E.jsx("ambientLight", { ...u });
        case "Spot":
          return /* @__PURE__ */ E.jsx(
            "spotLight",
            {
              ...u,
              angle: s.angle || Math.PI / 6,
              penumbra: s.penumbra || 0,
              decay: s.decay || 1,
              distance: s.distance || 0
            }
          );
        default:
          return null;
      }
    }),
    /* @__PURE__ */ E.jsx("primitive", { object: i, ref: o })
  ] });
}
function he({ modelPath: d = "https://white-deane-36.tiiny.site/models/Compressed-Sphere-Bot.glb" }) {
  const [f, m] = I(Ee), [o, i] = I(Object.values(f)[0].name);
  return q(() => {
    const n = (a) => {
      a?.data?.type && a.data.type === "UPDATE_SCENE_SETTINGS" && m(a.data.data);
    };
    return window.addEventListener("message", n), () => window.removeEventListener("message", n);
  }, []), le(() => {
    const n = k.context(() => {
      Object.values(f).forEach((p, x, s) => {
        V.create({
          trigger: `#${p.name}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => i(p.name),
          onEnterBack: () => i(p.name)
        });
      });
    });
    return () => n.revert();
  }, [f]), /* @__PURE__ */ E.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ E.jsx(
        ue,
        {
          style: { background: "transparent" },
          camera: { position: [0, 0, 10], fov: 50 },
          shadows: !0,
          children: /* @__PURE__ */ E.jsx(ye, { modelPath: d, activeSection: o, sceneSettings: f })
        }
      )
    }
  );
}
export {
  he as default
};
