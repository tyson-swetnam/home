function PS(W) {
  return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W;
}
var og = { exports: {} }, hp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _b;
function eT() {
  if (_b) return hp;
  _b = 1;
  var W = Symbol.for("react.transitional.element"), ce = Symbol.for("react.fragment");
  function Ne(_, Se, Oe) {
    var lt = null;
    if (Oe !== void 0 && (lt = "" + Oe), Se.key !== void 0 && (lt = "" + Se.key), "key" in Se) {
      Oe = {};
      for (var yt in Se)
        yt !== "key" && (Oe[yt] = Se[yt]);
    } else Oe = Se;
    return Se = Oe.ref, {
      $$typeof: W,
      type: _,
      key: lt,
      ref: Se !== void 0 ? Se : null,
      props: Oe
    };
  }
  return hp.Fragment = ce, hp.jsx = Ne, hp.jsxs = Ne, hp;
}
var yp = {}, fg = { exports: {} }, We = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function tT() {
  if (Hb) return We;
  Hb = 1;
  var W = Symbol.for("react.transitional.element"), ce = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), Oe = Symbol.for("react.consumer"), lt = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), K = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function M(g) {
    return g === null || typeof g != "object" ? null : (g = $ && g[$] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var ae = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ue = Object.assign, Ke = {};
  function Ce(g, N, Q) {
    this.props = g, this.context = N, this.refs = Ke, this.updater = Q || ae;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(g, N) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, N, "setState");
  }, Ce.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function Xe() {
  }
  Xe.prototype = Ce.prototype;
  function It(g, N, Q) {
    this.props = g, this.context = N, this.refs = Ke, this.updater = Q || ae;
  }
  var ct = It.prototype = new Xe();
  ct.constructor = It, Ue(ct, Ce.prototype), ct.isPureReactComponent = !0;
  var wt = Array.isArray, Be = { H: null, A: null, T: null, S: null, V: null }, Rt = Object.prototype.hasOwnProperty;
  function Fe(g, N, Q, F, ne, Te) {
    return Q = Te.ref, {
      $$typeof: W,
      type: g,
      key: N,
      ref: Q !== void 0 ? Q : null,
      props: Te
    };
  }
  function Ot(g, N) {
    return Fe(
      g.type,
      N,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function se(g) {
    return typeof g == "object" && g !== null && g.$$typeof === W;
  }
  function zt(g) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Q) {
      return N[Q];
    });
  }
  var ve = /\/+/g;
  function Re(g, N) {
    return typeof g == "object" && g !== null && g.key != null ? zt("" + g.key) : N.toString(36);
  }
  function Mt() {
  }
  function jt(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(Mt, Mt) : (g.status = "pending", g.then(
          function(N) {
            g.status === "pending" && (g.status = "fulfilled", g.value = N);
          },
          function(N) {
            g.status === "pending" && (g.status = "rejected", g.reason = N);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function mt(g, N, Q, F, ne) {
    var Te = typeof g;
    (Te === "undefined" || Te === "boolean") && (g = null);
    var ue = !1;
    if (g === null) ue = !0;
    else
      switch (Te) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case W:
            case ce:
              ue = !0;
              break;
            case oe:
              return ue = g._init, mt(
                ue(g._payload),
                N,
                Q,
                F,
                ne
              );
          }
      }
    if (ue)
      return ne = ne(g), ue = F === "" ? "." + Re(g, 0) : F, wt(ne) ? (Q = "", ue != null && (Q = ue.replace(ve, "$&/") + "/"), mt(ne, N, Q, "", function(xt) {
        return xt;
      })) : ne != null && (se(ne) && (ne = Ot(
        ne,
        Q + (ne.key == null || g && g.key === ne.key ? "" : ("" + ne.key).replace(
          ve,
          "$&/"
        ) + "/") + ue
      )), N.push(ne)), 1;
    ue = 0;
    var nl = F === "" ? "." : F + ":";
    if (wt(g))
      for (var Me = 0; Me < g.length; Me++)
        F = g[Me], Te = nl + Re(F, Me), ue += mt(
          F,
          N,
          Q,
          Te,
          ne
        );
    else if (Me = M(g), typeof Me == "function")
      for (g = Me.call(g), Me = 0; !(F = g.next()).done; )
        F = F.value, Te = nl + Re(F, Me++), ue += mt(
          F,
          N,
          Q,
          Te,
          ne
        );
    else if (Te === "object") {
      if (typeof g.then == "function")
        return mt(
          jt(g),
          N,
          Q,
          F,
          ne
        );
      throw N = String(g), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function O(g, N, Q) {
    if (g == null) return g;
    var F = [], ne = 0;
    return mt(g, F, "", "", function(Te) {
      return N.call(Q, Te, ne++);
    }), F;
  }
  function k(g) {
    if (g._status === -1) {
      var N = g._result;
      N = N(), N.then(
        function(Q) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Q);
        },
        function(Q) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Q);
        }
      ), g._status === -1 && (g._status = 0, g._result = N);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var I = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function me() {
  }
  return We.Children = {
    map: O,
    forEach: function(g, N, Q) {
      O(
        g,
        function() {
          N.apply(this, arguments);
        },
        Q
      );
    },
    count: function(g) {
      var N = 0;
      return O(g, function() {
        N++;
      }), N;
    },
    toArray: function(g) {
      return O(g, function(N) {
        return N;
      }) || [];
    },
    only: function(g) {
      if (!se(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, We.Component = Ce, We.Fragment = Ne, We.Profiler = Se, We.PureComponent = It, We.StrictMode = _, We.Suspense = w, We.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Be, We.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return Be.H.useMemoCache(g);
    }
  }, We.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, We.cloneElement = function(g, N, Q) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var F = Ue({}, g.props), ne = g.key, Te = void 0;
    if (N != null)
      for (ue in N.ref !== void 0 && (Te = void 0), N.key !== void 0 && (ne = "" + N.key), N)
        !Rt.call(N, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && N.ref === void 0 || (F[ue] = N[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) F.children = Q;
    else if (1 < ue) {
      for (var nl = Array(ue), Me = 0; Me < ue; Me++)
        nl[Me] = arguments[Me + 2];
      F.children = nl;
    }
    return Fe(g.type, ne, void 0, void 0, Te, F);
  }, We.createContext = function(g) {
    return g = {
      $$typeof: lt,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: Oe,
      _context: g
    }, g;
  }, We.createElement = function(g, N, Q) {
    var F, ne = {}, Te = null;
    if (N != null)
      for (F in N.key !== void 0 && (Te = "" + N.key), N)
        Rt.call(N, F) && F !== "key" && F !== "__self" && F !== "__source" && (ne[F] = N[F]);
    var ue = arguments.length - 2;
    if (ue === 1) ne.children = Q;
    else if (1 < ue) {
      for (var nl = Array(ue), Me = 0; Me < ue; Me++)
        nl[Me] = arguments[Me + 2];
      ne.children = nl;
    }
    if (g && g.defaultProps)
      for (F in ue = g.defaultProps, ue)
        ne[F] === void 0 && (ne[F] = ue[F]);
    return Fe(g, Te, void 0, void 0, null, ne);
  }, We.createRef = function() {
    return { current: null };
  }, We.forwardRef = function(g) {
    return { $$typeof: yt, render: g };
  }, We.isValidElement = se, We.lazy = function(g) {
    return {
      $$typeof: oe,
      _payload: { _status: -1, _result: g },
      _init: k
    };
  }, We.memo = function(g, N) {
    return {
      $$typeof: K,
      type: g,
      compare: N === void 0 ? null : N
    };
  }, We.startTransition = function(g) {
    var N = Be.T, Q = {};
    Be.T = Q;
    try {
      var F = g(), ne = Be.S;
      ne !== null && ne(Q, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(me, I);
    } catch (Te) {
      I(Te);
    } finally {
      Be.T = N;
    }
  }, We.unstable_useCacheRefresh = function() {
    return Be.H.useCacheRefresh();
  }, We.use = function(g) {
    return Be.H.use(g);
  }, We.useActionState = function(g, N, Q) {
    return Be.H.useActionState(g, N, Q);
  }, We.useCallback = function(g, N) {
    return Be.H.useCallback(g, N);
  }, We.useContext = function(g) {
    return Be.H.useContext(g);
  }, We.useDebugValue = function() {
  }, We.useDeferredValue = function(g, N) {
    return Be.H.useDeferredValue(g, N);
  }, We.useEffect = function(g, N, Q) {
    var F = Be.H;
    if (typeof Q == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return F.useEffect(g, N);
  }, We.useId = function() {
    return Be.H.useId();
  }, We.useImperativeHandle = function(g, N, Q) {
    return Be.H.useImperativeHandle(g, N, Q);
  }, We.useInsertionEffect = function(g, N) {
    return Be.H.useInsertionEffect(g, N);
  }, We.useLayoutEffect = function(g, N) {
    return Be.H.useLayoutEffect(g, N);
  }, We.useMemo = function(g, N) {
    return Be.H.useMemo(g, N);
  }, We.useOptimistic = function(g, N) {
    return Be.H.useOptimistic(g, N);
  }, We.useReducer = function(g, N, Q) {
    return Be.H.useReducer(g, N, Q);
  }, We.useRef = function(g) {
    return Be.H.useRef(g);
  }, We.useState = function(g) {
    return Be.H.useState(g);
  }, We.useSyncExternalStore = function(g, N, Q) {
    return Be.H.useSyncExternalStore(
      g,
      N,
      Q
    );
  }, We.useTransition = function() {
    return Be.H.useTransition();
  }, We.version = "19.1.0", We;
}
var vp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
vp.exports;
var xb;
function lT() {
  return xb || (xb = 1, function(W, ce) {
    process.env.NODE_ENV !== "production" && function() {
      function Ne(m, D) {
        Object.defineProperty(Oe.prototype, m, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              D[0],
              D[1]
            );
          }
        });
      }
      function _(m) {
        return m === null || typeof m != "object" ? null : (m = Rn && m[Rn] || m["@@iterator"], typeof m == "function" ? m : null);
      }
      function Se(m, D) {
        m = (m = m.constructor) && (m.displayName || m.name) || "ReactClass";
        var ee = m + "." + D;
        Gi[ee] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          D,
          m
        ), Gi[ee] = !0);
      }
      function Oe(m, D, ee) {
        this.props = m, this.context = D, this.refs = df, this.updater = ee || On;
      }
      function lt() {
      }
      function yt(m, D, ee) {
        this.props = m, this.context = D, this.refs = df, this.updater = ee || On;
      }
      function w(m) {
        return "" + m;
      }
      function K(m) {
        try {
          w(m);
          var D = !1;
        } catch {
          D = !0;
        }
        if (D) {
          D = console;
          var ee = D.error, le = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return ee.call(
            D,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            le
          ), w(m);
        }
      }
      function oe(m) {
        if (m == null) return null;
        if (typeof m == "function")
          return m.$$typeof === Ps ? null : m.displayName || m.name || null;
        if (typeof m == "string") return m;
        switch (m) {
          case g:
            return "Fragment";
          case Q:
            return "Profiler";
          case N:
            return "StrictMode";
          case ue:
            return "Suspense";
          case nl:
            return "SuspenseList";
          case la:
            return "Activity";
        }
        if (typeof m == "object")
          switch (typeof m.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), m.$$typeof) {
            case me:
              return "Portal";
            case ne:
              return (m.displayName || "Context") + ".Provider";
            case F:
              return (m._context.displayName || "Context") + ".Consumer";
            case Te:
              var D = m.render;
              return m = m.displayName, m || (m = D.displayName || D.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
            case Me:
              return D = m.displayName || null, D !== null ? D : oe(m.type) || "Memo";
            case xt:
              D = m._payload, m = m._init;
              try {
                return oe(m(D));
              } catch {
              }
          }
        return null;
      }
      function $(m) {
        if (m === g) return "<>";
        if (typeof m == "object" && m !== null && m.$$typeof === xt)
          return "<...>";
        try {
          var D = oe(m);
          return D ? "<" + D + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function M() {
        var m = Qe.A;
        return m === null ? null : m.getOwner();
      }
      function ae() {
        return Error("react-stack-top-frame");
      }
      function Ue(m) {
        if (Dn.call(m, "key")) {
          var D = Object.getOwnPropertyDescriptor(m, "key").get;
          if (D && D.isReactWarning) return !1;
        }
        return m.key !== void 0;
      }
      function Ke(m, D) {
        function ee() {
          pu || (pu = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            D
          ));
        }
        ee.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: ee,
          configurable: !0
        });
      }
      function Ce() {
        var m = oe(this.type);
        return hf[m] || (hf[m] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), m = this.props.ref, m !== void 0 ? m : null;
      }
      function Xe(m, D, ee, le, ye, _e, Ye, nt) {
        return ee = _e.ref, m = {
          $$typeof: I,
          type: m,
          key: D,
          props: _e,
          _owner: ye
        }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(m, "ref", {
          enumerable: !1,
          get: Ce
        }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(m, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(m, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ye
        }), Object.defineProperty(m, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: nt
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      }
      function It(m, D) {
        return D = Xe(
          m.type,
          D,
          void 0,
          void 0,
          m._owner,
          m.props,
          m._debugStack,
          m._debugTask
        ), m._store && (D._store.validated = m._store.validated), D;
      }
      function ct(m) {
        return typeof m == "object" && m !== null && m.$$typeof === I;
      }
      function wt(m) {
        var D = { "=": "=0", ":": "=2" };
        return "$" + m.replace(/[=:]/g, function(ee) {
          return D[ee];
        });
      }
      function Be(m, D) {
        return typeof m == "object" && m !== null && m.key != null ? (K(m.key), wt("" + m.key)) : D.toString(36);
      }
      function Rt() {
      }
      function Fe(m) {
        switch (m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
          default:
            switch (typeof m.status == "string" ? m.then(Rt, Rt) : (m.status = "pending", m.then(
              function(D) {
                m.status === "pending" && (m.status = "fulfilled", m.value = D);
              },
              function(D) {
                m.status === "pending" && (m.status = "rejected", m.reason = D);
              }
            )), m.status) {
              case "fulfilled":
                return m.value;
              case "rejected":
                throw m.reason;
            }
        }
        throw m;
      }
      function Ot(m, D, ee, le, ye) {
        var _e = typeof m;
        (_e === "undefined" || _e === "boolean") && (m = null);
        var Ye = !1;
        if (m === null) Ye = !0;
        else
          switch (_e) {
            case "bigint":
            case "string":
            case "number":
              Ye = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case I:
                case me:
                  Ye = !0;
                  break;
                case xt:
                  return Ye = m._init, Ot(
                    Ye(m._payload),
                    D,
                    ee,
                    le,
                    ye
                  );
              }
          }
        if (Ye) {
          Ye = m, ye = ye(Ye);
          var nt = le === "" ? "." + Be(Ye, 0) : le;
          return $u(ye) ? (ee = "", nt != null && (ee = nt.replace(Al, "$&/") + "/"), Ot(ye, D, ee, "", function(el) {
            return el;
          })) : ye != null && (ct(ye) && (ye.key != null && (Ye && Ye.key === ye.key || K(ye.key)), ee = It(
            ye,
            ee + (ye.key == null || Ye && Ye.key === ye.key ? "" : ("" + ye.key).replace(
              Al,
              "$&/"
            ) + "/") + nt
          ), le !== "" && Ye != null && ct(Ye) && Ye.key == null && Ye._store && !Ye._store.validated && (ee._store.validated = 2), ye = ee), D.push(ye)), 1;
        }
        if (Ye = 0, nt = le === "" ? "." : le + ":", $u(m))
          for (var qe = 0; qe < m.length; qe++)
            le = m[qe], _e = nt + Be(le, qe), Ye += Ot(
              le,
              D,
              ee,
              _e,
              ye
            );
        else if (qe = _(m), typeof qe == "function")
          for (qe === m.entries && (qa || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), qa = !0), m = qe.call(m), qe = 0; !(le = m.next()).done; )
            le = le.value, _e = nt + Be(le, qe++), Ye += Ot(
              le,
              D,
              ee,
              _e,
              ye
            );
        else if (_e === "object") {
          if (typeof m.then == "function")
            return Ot(
              Fe(m),
              D,
              ee,
              le,
              ye
            );
          throw D = String(m), Error(
            "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Ye;
      }
      function se(m, D, ee) {
        if (m == null) return m;
        var le = [], ye = 0;
        return Ot(m, le, "", "", function(_e) {
          return D.call(ee, _e, ye++);
        }), le;
      }
      function zt(m) {
        if (m._status === -1) {
          var D = m._result;
          D = D(), D.then(
            function(ee) {
              (m._status === 0 || m._status === -1) && (m._status = 1, m._result = ee);
            },
            function(ee) {
              (m._status === 0 || m._status === -1) && (m._status = 2, m._result = ee);
            }
          ), m._status === -1 && (m._status = 0, m._result = D);
        }
        if (m._status === 1)
          return D = m._result, D === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            D
          ), "default" in D || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            D
          ), D.default;
        throw m._result;
      }
      function ve() {
        var m = Qe.H;
        return m === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), m;
      }
      function Re() {
      }
      function Mt(m) {
        if ($c === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7);
            $c = (W && W[D]).call(
              W,
              "timers"
            ).setImmediate;
          } catch {
            $c = function(le) {
              yf === !1 && (yf = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = le, ye.port2.postMessage(void 0);
            };
          }
        return $c(m);
      }
      function jt(m) {
        return 1 < m.length && typeof AggregateError == "function" ? new AggregateError(m) : m[0];
      }
      function mt(m, D) {
        D !== ln - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), ln = D;
      }
      function O(m, D, ee) {
        var le = Qe.actQueue;
        if (le !== null)
          if (le.length !== 0)
            try {
              k(le), Mt(function() {
                return O(m, D, ee);
              });
              return;
            } catch (ye) {
              Qe.thrownErrors.push(ye);
            }
          else Qe.actQueue = null;
        0 < Qe.thrownErrors.length ? (le = jt(Qe.thrownErrors), Qe.thrownErrors.length = 0, ee(le)) : D(m);
      }
      function k(m) {
        if (!Rl) {
          Rl = !0;
          var D = 0;
          try {
            for (; D < m.length; D++) {
              var ee = m[D];
              do {
                Qe.didUsePromise = !1;
                var le = ee(!1);
                if (le !== null) {
                  if (Qe.didUsePromise) {
                    m[D] = ee, m.splice(0, D);
                    return;
                  }
                  ee = le;
                } else break;
              } while (!0);
            }
            m.length = 0;
          } catch (ye) {
            m.splice(0, D + 1), Qe.thrownErrors.push(ye);
          } finally {
            Rl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var I = Symbol.for("react.transitional.element"), me = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), nl = Symbol.for("react.suspense_list"), Me = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), la = Symbol.for("react.activity"), Rn = Symbol.iterator, Gi = {}, On = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(m) {
          Se(m, "forceUpdate");
        },
        enqueueReplaceState: function(m) {
          Se(m, "replaceState");
        },
        enqueueSetState: function(m) {
          Se(m, "setState");
        }
      }, Kc = Object.assign, df = {};
      Object.freeze(df), Oe.prototype.isReactComponent = {}, Oe.prototype.setState = function(m, D) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, m, D, "setState");
      }, Oe.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      var Pt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, hl;
      for (hl in Pt)
        Pt.hasOwnProperty(hl) && Ne(hl, Pt[hl]);
      lt.prototype = Oe.prototype, Pt = yt.prototype = new lt(), Pt.constructor = yt, Kc(Pt, Oe.prototype), Pt.isPureReactComponent = !0;
      var $u = Array.isArray, Ps = Symbol.for("react.client.reference"), Qe = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Dn = Object.prototype.hasOwnProperty, Jc = console.createTask ? console.createTask : function() {
        return null;
      };
      Pt = {
        "react-stack-bottom-frame": function(m) {
          return m();
        }
      };
      var pu, er, hf = {}, Wu = Pt["react-stack-bottom-frame"].bind(Pt, ae)(), El = Jc($(ae)), qa = !1, Al = /\/+/g, kc = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var D = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
            error: m
          });
          if (!window.dispatchEvent(D)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", m);
          return;
        }
        console.error(m);
      }, yf = !1, $c = null, ln = 0, aa = !1, Rl = !1, an = typeof queueMicrotask == "function" ? function(m) {
        queueMicrotask(function() {
          return queueMicrotask(m);
        });
      } : Mt;
      Pt = Object.freeze({
        __proto__: null,
        c: function(m) {
          return ve().useMemoCache(m);
        }
      }), ce.Children = {
        map: se,
        forEach: function(m, D, ee) {
          se(
            m,
            function() {
              D.apply(this, arguments);
            },
            ee
          );
        },
        count: function(m) {
          var D = 0;
          return se(m, function() {
            D++;
          }), D;
        },
        toArray: function(m) {
          return se(m, function(D) {
            return D;
          }) || [];
        },
        only: function(m) {
          if (!ct(m))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return m;
        }
      }, ce.Component = Oe, ce.Fragment = g, ce.Profiler = Q, ce.PureComponent = yt, ce.StrictMode = N, ce.Suspense = ue, ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qe, ce.__COMPILER_RUNTIME = Pt, ce.act = function(m) {
        var D = Qe.actQueue, ee = ln;
        ln++;
        var le = Qe.actQueue = D !== null ? D : [], ye = !1;
        try {
          var _e = m();
        } catch (qe) {
          Qe.thrownErrors.push(qe);
        }
        if (0 < Qe.thrownErrors.length)
          throw mt(D, ee), m = jt(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        if (_e !== null && typeof _e == "object" && typeof _e.then == "function") {
          var Ye = _e;
          return an(function() {
            ye || aa || (aa = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(qe, el) {
              ye = !0, Ye.then(
                function(nn) {
                  if (mt(D, ee), ee === 0) {
                    try {
                      k(le), Mt(function() {
                        return O(
                          nn,
                          qe,
                          el
                        );
                      });
                    } catch (Rh) {
                      Qe.thrownErrors.push(Rh);
                    }
                    if (0 < Qe.thrownErrors.length) {
                      var tr = jt(
                        Qe.thrownErrors
                      );
                      Qe.thrownErrors.length = 0, el(tr);
                    }
                  } else qe(nn);
                },
                function(nn) {
                  mt(D, ee), 0 < Qe.thrownErrors.length && (nn = jt(
                    Qe.thrownErrors
                  ), Qe.thrownErrors.length = 0), el(nn);
                }
              );
            }
          };
        }
        var nt = _e;
        if (mt(D, ee), ee === 0 && (k(le), le.length !== 0 && an(function() {
          ye || aa || (aa = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Qe.actQueue = null), 0 < Qe.thrownErrors.length)
          throw m = jt(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        return {
          then: function(qe, el) {
            ye = !0, ee === 0 ? (Qe.actQueue = le, Mt(function() {
              return O(
                nt,
                qe,
                el
              );
            })) : qe(nt);
          }
        };
      }, ce.cache = function(m) {
        return function() {
          return m.apply(null, arguments);
        };
      }, ce.captureOwnerStack = function() {
        var m = Qe.getCurrentStack;
        return m === null ? null : m();
      }, ce.cloneElement = function(m, D, ee) {
        if (m == null)
          throw Error(
            "The argument must be a React element, but you passed " + m + "."
          );
        var le = Kc({}, m.props), ye = m.key, _e = m._owner;
        if (D != null) {
          var Ye;
          e: {
            if (Dn.call(D, "ref") && (Ye = Object.getOwnPropertyDescriptor(
              D,
              "ref"
            ).get) && Ye.isReactWarning) {
              Ye = !1;
              break e;
            }
            Ye = D.ref !== void 0;
          }
          Ye && (_e = M()), Ue(D) && (K(D.key), ye = "" + D.key);
          for (nt in D)
            !Dn.call(D, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && D.ref === void 0 || (le[nt] = D[nt]);
        }
        var nt = arguments.length - 2;
        if (nt === 1) le.children = ee;
        else if (1 < nt) {
          Ye = Array(nt);
          for (var qe = 0; qe < nt; qe++)
            Ye[qe] = arguments[qe + 2];
          le.children = Ye;
        }
        for (le = Xe(
          m.type,
          ye,
          void 0,
          void 0,
          _e,
          le,
          m._debugStack,
          m._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          _e = arguments[ye], ct(_e) && _e._store && (_e._store.validated = 1);
        return le;
      }, ce.createContext = function(m) {
        return m = {
          $$typeof: ne,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, m.Provider = m, m.Consumer = {
          $$typeof: F,
          _context: m
        }, m._currentRenderer = null, m._currentRenderer2 = null, m;
      }, ce.createElement = function(m, D, ee) {
        for (var le = 2; le < arguments.length; le++) {
          var ye = arguments[le];
          ct(ye) && ye._store && (ye._store.validated = 1);
        }
        if (le = {}, ye = null, D != null)
          for (qe in er || !("__self" in D) || "key" in D || (er = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Ue(D) && (K(D.key), ye = "" + D.key), D)
            Dn.call(D, qe) && qe !== "key" && qe !== "__self" && qe !== "__source" && (le[qe] = D[qe]);
        var _e = arguments.length - 2;
        if (_e === 1) le.children = ee;
        else if (1 < _e) {
          for (var Ye = Array(_e), nt = 0; nt < _e; nt++)
            Ye[nt] = arguments[nt + 2];
          Object.freeze && Object.freeze(Ye), le.children = Ye;
        }
        if (m && m.defaultProps)
          for (qe in _e = m.defaultProps, _e)
            le[qe] === void 0 && (le[qe] = _e[qe]);
        ye && Ke(
          le,
          typeof m == "function" ? m.displayName || m.name || "Unknown" : m
        );
        var qe = 1e4 > Qe.recentlyCreatedOwnerStacks++;
        return Xe(
          m,
          ye,
          void 0,
          void 0,
          M(),
          le,
          qe ? Error("react-stack-top-frame") : Wu,
          qe ? Jc($(m)) : El
        );
      }, ce.createRef = function() {
        var m = { current: null };
        return Object.seal(m), m;
      }, ce.forwardRef = function(m) {
        m != null && m.$$typeof === Me ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof m != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          m === null ? "null" : typeof m
        ) : m.length !== 0 && m.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), m != null && m.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var D = { $$typeof: Te, render: m }, ee;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(le) {
            ee = le, m.name || m.displayName || (Object.defineProperty(m, "name", { value: le }), m.displayName = le);
          }
        }), D;
      }, ce.isValidElement = ct, ce.lazy = function(m) {
        return {
          $$typeof: xt,
          _payload: { _status: -1, _result: m },
          _init: zt
        };
      }, ce.memo = function(m, D) {
        m == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          m === null ? "null" : typeof m
        ), D = {
          $$typeof: Me,
          type: m,
          compare: D === void 0 ? null : D
        };
        var ee;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(le) {
            ee = le, m.name || m.displayName || (Object.defineProperty(m, "name", { value: le }), m.displayName = le);
          }
        }), D;
      }, ce.startTransition = function(m) {
        var D = Qe.T, ee = {};
        Qe.T = ee, ee._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var le = m(), ye = Qe.S;
          ye !== null && ye(ee, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Re, kc);
        } catch (_e) {
          kc(_e);
        } finally {
          D === null && ee._updatedFibers && (m = ee._updatedFibers.size, ee._updatedFibers.clear(), 10 < m && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Qe.T = D;
        }
      }, ce.unstable_useCacheRefresh = function() {
        return ve().useCacheRefresh();
      }, ce.use = function(m) {
        return ve().use(m);
      }, ce.useActionState = function(m, D, ee) {
        return ve().useActionState(
          m,
          D,
          ee
        );
      }, ce.useCallback = function(m, D) {
        return ve().useCallback(m, D);
      }, ce.useContext = function(m) {
        var D = ve();
        return m.$$typeof === F && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), D.useContext(m);
      }, ce.useDebugValue = function(m, D) {
        return ve().useDebugValue(m, D);
      }, ce.useDeferredValue = function(m, D) {
        return ve().useDeferredValue(m, D);
      }, ce.useEffect = function(m, D, ee) {
        m == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var le = ve();
        if (typeof ee == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return le.useEffect(m, D);
      }, ce.useId = function() {
        return ve().useId();
      }, ce.useImperativeHandle = function(m, D, ee) {
        return ve().useImperativeHandle(m, D, ee);
      }, ce.useInsertionEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ve().useInsertionEffect(m, D);
      }, ce.useLayoutEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ve().useLayoutEffect(m, D);
      }, ce.useMemo = function(m, D) {
        return ve().useMemo(m, D);
      }, ce.useOptimistic = function(m, D) {
        return ve().useOptimistic(m, D);
      }, ce.useReducer = function(m, D, ee) {
        return ve().useReducer(m, D, ee);
      }, ce.useRef = function(m) {
        return ve().useRef(m);
      }, ce.useState = function(m) {
        return ve().useState(m);
      }, ce.useSyncExternalStore = function(m, D, ee) {
        return ve().useSyncExternalStore(
          m,
          D,
          ee
        );
      }, ce.useTransition = function() {
        return ve().useTransition();
      }, ce.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(vp, vp.exports)), vp.exports;
}
var Nb;
function Ah() {
  return Nb || (Nb = 1, process.env.NODE_ENV === "production" ? fg.exports = tT() : fg.exports = lT()), fg.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bb;
function aT() {
  return Bb || (Bb = 1, process.env.NODE_ENV !== "production" && function() {
    function W(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === zt ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case Ke:
          return "Fragment";
        case Xe:
          return "Profiler";
        case Ce:
          return "StrictMode";
        case Be:
          return "Suspense";
        case Rt:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case Ue:
            return "Portal";
          case ct:
            return (g.displayName || "Context") + ".Provider";
          case It:
            return (g._context.displayName || "Context") + ".Consumer";
          case wt:
            var N = g.render;
            return g = g.displayName, g || (g = N.displayName || N.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case Fe:
            return N = g.displayName || null, N !== null ? N : W(g.type) || "Memo";
          case Ot:
            N = g._payload, g = g._init;
            try {
              return W(g(N));
            } catch {
            }
        }
      return null;
    }
    function ce(g) {
      return "" + g;
    }
    function Ne(g) {
      try {
        ce(g);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var Q = N.error, F = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Q.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), ce(g);
      }
    }
    function _(g) {
      if (g === Ke) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === Ot)
        return "<...>";
      try {
        var N = W(g);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Se() {
      var g = ve.A;
      return g === null ? null : g.getOwner();
    }
    function Oe() {
      return Error("react-stack-top-frame");
    }
    function lt(g) {
      if (Re.call(g, "key")) {
        var N = Object.getOwnPropertyDescriptor(g, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function yt(g, N) {
      function Q() {
        mt || (mt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      Q.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Q,
        configurable: !0
      });
    }
    function w() {
      var g = W(this.type);
      return O[g] || (O[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function K(g, N, Q, F, ne, Te, ue, nl) {
      return Q = Te.ref, g = {
        $$typeof: ae,
        type: g,
        key: N,
        props: Te,
        _owner: ne
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: nl
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function oe(g, N, Q, F, ne, Te, ue, nl) {
      var Me = N.children;
      if (Me !== void 0)
        if (F)
          if (Mt(Me)) {
            for (F = 0; F < Me.length; F++)
              $(Me[F]);
            Object.freeze && Object.freeze(Me);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else $(Me);
      if (Re.call(N, "key")) {
        Me = W(g);
        var xt = Object.keys(N).filter(function(Rn) {
          return Rn !== "key";
        });
        F = 0 < xt.length ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}", me[Me + F] || (xt = 0 < xt.length ? "{" + xt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          Me,
          xt,
          Me
        ), me[Me + F] = !0);
      }
      if (Me = null, Q !== void 0 && (Ne(Q), Me = "" + Q), lt(N) && (Ne(N.key), Me = "" + N.key), "key" in N) {
        Q = {};
        for (var la in N)
          la !== "key" && (Q[la] = N[la]);
      } else Q = N;
      return Me && yt(
        Q,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), K(
        g,
        Me,
        Te,
        ne,
        Se(),
        Q,
        ue,
        nl
      );
    }
    function $(g) {
      typeof g == "object" && g !== null && g.$$typeof === ae && g._store && (g._store.validated = 1);
    }
    var M = Ah(), ae = Symbol.for("react.transitional.element"), Ue = Symbol.for("react.portal"), Ke = Symbol.for("react.fragment"), Ce = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), It = Symbol.for("react.consumer"), ct = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), Fe = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), zt = Symbol.for("react.client.reference"), ve = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Re = Object.prototype.hasOwnProperty, Mt = Array.isArray, jt = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var mt, O = {}, k = M["react-stack-bottom-frame"].bind(
      M,
      Oe
    )(), I = jt(_(Oe)), me = {};
    yp.Fragment = Ke, yp.jsx = function(g, N, Q, F, ne) {
      var Te = 1e4 > ve.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        N,
        Q,
        !1,
        F,
        ne,
        Te ? Error("react-stack-top-frame") : k,
        Te ? jt(_(g)) : I
      );
    }, yp.jsxs = function(g, N, Q, F, ne) {
      var Te = 1e4 > ve.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        N,
        Q,
        !0,
        F,
        ne,
        Te ? Error("react-stack-top-frame") : k,
        Te ? jt(_(g)) : I
      );
    };
  }()), yp;
}
var qb;
function nT() {
  return qb || (qb = 1, process.env.NODE_ENV === "production" ? og.exports = eT() : og.exports = aT()), og.exports;
}
var Zl = nT(), Is = Ah(), sg = { exports: {} }, mp = {}, rg = { exports: {} }, C0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yb;
function uT() {
  return Yb || (Yb = 1, function(W) {
    function ce(O, k) {
      var I = O.length;
      O.push(k);
      e: for (; 0 < I; ) {
        var me = I - 1 >>> 1, g = O[me];
        if (0 < Se(g, k))
          O[me] = k, O[I] = g, I = me;
        else break e;
      }
    }
    function Ne(O) {
      return O.length === 0 ? null : O[0];
    }
    function _(O) {
      if (O.length === 0) return null;
      var k = O[0], I = O.pop();
      if (I !== k) {
        O[0] = I;
        e: for (var me = 0, g = O.length, N = g >>> 1; me < N; ) {
          var Q = 2 * (me + 1) - 1, F = O[Q], ne = Q + 1, Te = O[ne];
          if (0 > Se(F, I))
            ne < g && 0 > Se(Te, F) ? (O[me] = Te, O[ne] = I, me = ne) : (O[me] = F, O[Q] = I, me = Q);
          else if (ne < g && 0 > Se(Te, I))
            O[me] = Te, O[ne] = I, me = ne;
          else break e;
        }
      }
      return k;
    }
    function Se(O, k) {
      var I = O.sortIndex - k.sortIndex;
      return I !== 0 ? I : O.id - k.id;
    }
    if (W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Oe = performance;
      W.unstable_now = function() {
        return Oe.now();
      };
    } else {
      var lt = Date, yt = lt.now();
      W.unstable_now = function() {
        return lt.now() - yt;
      };
    }
    var w = [], K = [], oe = 1, $ = null, M = 3, ae = !1, Ue = !1, Ke = !1, Ce = !1, Xe = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    function wt(O) {
      for (var k = Ne(K); k !== null; ) {
        if (k.callback === null) _(K);
        else if (k.startTime <= O)
          _(K), k.sortIndex = k.expirationTime, ce(w, k);
        else break;
        k = Ne(K);
      }
    }
    function Be(O) {
      if (Ke = !1, wt(O), !Ue)
        if (Ne(w) !== null)
          Ue = !0, Rt || (Rt = !0, Re());
        else {
          var k = Ne(K);
          k !== null && mt(Be, k.startTime - O);
        }
    }
    var Rt = !1, Fe = -1, Ot = 5, se = -1;
    function zt() {
      return Ce ? !0 : !(W.unstable_now() - se < Ot);
    }
    function ve() {
      if (Ce = !1, Rt) {
        var O = W.unstable_now();
        se = O;
        var k = !0;
        try {
          e: {
            Ue = !1, Ke && (Ke = !1, It(Fe), Fe = -1), ae = !0;
            var I = M;
            try {
              t: {
                for (wt(O), $ = Ne(w); $ !== null && !($.expirationTime > O && zt()); ) {
                  var me = $.callback;
                  if (typeof me == "function") {
                    $.callback = null, M = $.priorityLevel;
                    var g = me(
                      $.expirationTime <= O
                    );
                    if (O = W.unstable_now(), typeof g == "function") {
                      $.callback = g, wt(O), k = !0;
                      break t;
                    }
                    $ === Ne(w) && _(w), wt(O);
                  } else _(w);
                  $ = Ne(w);
                }
                if ($ !== null) k = !0;
                else {
                  var N = Ne(K);
                  N !== null && mt(
                    Be,
                    N.startTime - O
                  ), k = !1;
                }
              }
              break e;
            } finally {
              $ = null, M = I, ae = !1;
            }
            k = void 0;
          }
        } finally {
          k ? Re() : Rt = !1;
        }
      }
    }
    var Re;
    if (typeof ct == "function")
      Re = function() {
        ct(ve);
      };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel(), jt = Mt.port2;
      Mt.port1.onmessage = ve, Re = function() {
        jt.postMessage(null);
      };
    } else
      Re = function() {
        Xe(ve, 0);
      };
    function mt(O, k) {
      Fe = Xe(function() {
        O(W.unstable_now());
      }, k);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, W.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ot = 0 < O ? Math.floor(1e3 / O) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, W.unstable_next = function(O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = M;
      }
      var I = M;
      M = k;
      try {
        return O();
      } finally {
        M = I;
      }
    }, W.unstable_requestPaint = function() {
      Ce = !0;
    }, W.unstable_runWithPriority = function(O, k) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var I = M;
      M = O;
      try {
        return k();
      } finally {
        M = I;
      }
    }, W.unstable_scheduleCallback = function(O, k, I) {
      var me = W.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? me + I : me) : I = me, O) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = I + g, O = {
        id: oe++,
        callback: k,
        priorityLevel: O,
        startTime: I,
        expirationTime: g,
        sortIndex: -1
      }, I > me ? (O.sortIndex = I, ce(K, O), Ne(w) === null && O === Ne(K) && (Ke ? (It(Fe), Fe = -1) : Ke = !0, mt(Be, I - me))) : (O.sortIndex = g, ce(w, O), Ue || ae || (Ue = !0, Rt || (Rt = !0, Re()))), O;
    }, W.unstable_shouldYield = zt, W.unstable_wrapCallback = function(O) {
      var k = M;
      return function() {
        var I = M;
        M = k;
        try {
          return O.apply(this, arguments);
        } finally {
          M = I;
        }
      };
    };
  }(C0)), C0;
}
var _0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wb;
function iT() {
  return wb || (wb = 1, function(W) {
    process.env.NODE_ENV !== "production" && function() {
      function ce() {
        if (Be = !1, se) {
          var O = W.unstable_now();
          Re = O;
          var k = !0;
          try {
            e: {
              ct = !1, wt && (wt = !1, Fe(zt), zt = -1), It = !0;
              var I = Xe;
              try {
                t: {
                  for (lt(O), Ce = _(ae); Ce !== null && !(Ce.expirationTime > O && w()); ) {
                    var me = Ce.callback;
                    if (typeof me == "function") {
                      Ce.callback = null, Xe = Ce.priorityLevel;
                      var g = me(
                        Ce.expirationTime <= O
                      );
                      if (O = W.unstable_now(), typeof g == "function") {
                        Ce.callback = g, lt(O), k = !0;
                        break t;
                      }
                      Ce === _(ae) && Se(ae), lt(O);
                    } else Se(ae);
                    Ce = _(ae);
                  }
                  if (Ce !== null) k = !0;
                  else {
                    var N = _(Ue);
                    N !== null && K(
                      yt,
                      N.startTime - O
                    ), k = !1;
                  }
                }
                break e;
              } finally {
                Ce = null, Xe = I, It = !1;
              }
              k = void 0;
            }
          } finally {
            k ? Mt() : se = !1;
          }
        }
      }
      function Ne(O, k) {
        var I = O.length;
        O.push(k);
        e: for (; 0 < I; ) {
          var me = I - 1 >>> 1, g = O[me];
          if (0 < Oe(g, k))
            O[me] = k, O[I] = g, I = me;
          else break e;
        }
      }
      function _(O) {
        return O.length === 0 ? null : O[0];
      }
      function Se(O) {
        if (O.length === 0) return null;
        var k = O[0], I = O.pop();
        if (I !== k) {
          O[0] = I;
          e: for (var me = 0, g = O.length, N = g >>> 1; me < N; ) {
            var Q = 2 * (me + 1) - 1, F = O[Q], ne = Q + 1, Te = O[ne];
            if (0 > Oe(F, I))
              ne < g && 0 > Oe(Te, F) ? (O[me] = Te, O[ne] = I, me = ne) : (O[me] = F, O[Q] = I, me = Q);
            else if (ne < g && 0 > Oe(Te, I))
              O[me] = Te, O[ne] = I, me = ne;
            else break e;
          }
        }
        return k;
      }
      function Oe(O, k) {
        var I = O.sortIndex - k.sortIndex;
        return I !== 0 ? I : O.id - k.id;
      }
      function lt(O) {
        for (var k = _(Ue); k !== null; ) {
          if (k.callback === null) Se(Ue);
          else if (k.startTime <= O)
            Se(Ue), k.sortIndex = k.expirationTime, Ne(ae, k);
          else break;
          k = _(Ue);
        }
      }
      function yt(O) {
        if (wt = !1, lt(O), !ct)
          if (_(ae) !== null)
            ct = !0, se || (se = !0, Mt());
          else {
            var k = _(Ue);
            k !== null && K(
              yt,
              k.startTime - O
            );
          }
      }
      function w() {
        return Be ? !0 : !(W.unstable_now() - Re < ve);
      }
      function K(O, k) {
        zt = Rt(function() {
          O(W.unstable_now());
        }, k);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var oe = performance;
        W.unstable_now = function() {
          return oe.now();
        };
      } else {
        var $ = Date, M = $.now();
        W.unstable_now = function() {
          return $.now() - M;
        };
      }
      var ae = [], Ue = [], Ke = 1, Ce = null, Xe = 3, It = !1, ct = !1, wt = !1, Be = !1, Rt = typeof setTimeout == "function" ? setTimeout : null, Fe = typeof clearTimeout == "function" ? clearTimeout : null, Ot = typeof setImmediate < "u" ? setImmediate : null, se = !1, zt = -1, ve = 5, Re = -1;
      if (typeof Ot == "function")
        var Mt = function() {
          Ot(ce);
        };
      else if (typeof MessageChannel < "u") {
        var jt = new MessageChannel(), mt = jt.port2;
        jt.port1.onmessage = ce, Mt = function() {
          mt.postMessage(null);
        };
      } else
        Mt = function() {
          Rt(ce, 0);
        };
      W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, W.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : ve = 0 < O ? Math.floor(1e3 / O) : 5;
      }, W.unstable_getCurrentPriorityLevel = function() {
        return Xe;
      }, W.unstable_next = function(O) {
        switch (Xe) {
          case 1:
          case 2:
          case 3:
            var k = 3;
            break;
          default:
            k = Xe;
        }
        var I = Xe;
        Xe = k;
        try {
          return O();
        } finally {
          Xe = I;
        }
      }, W.unstable_requestPaint = function() {
        Be = !0;
      }, W.unstable_runWithPriority = function(O, k) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var I = Xe;
        Xe = O;
        try {
          return k();
        } finally {
          Xe = I;
        }
      }, W.unstable_scheduleCallback = function(O, k, I) {
        var me = W.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? me + I : me) : I = me, O) {
          case 1:
            var g = -1;
            break;
          case 2:
            g = 250;
            break;
          case 5:
            g = 1073741823;
            break;
          case 4:
            g = 1e4;
            break;
          default:
            g = 5e3;
        }
        return g = I + g, O = {
          id: Ke++,
          callback: k,
          priorityLevel: O,
          startTime: I,
          expirationTime: g,
          sortIndex: -1
        }, I > me ? (O.sortIndex = I, Ne(Ue, O), _(ae) === null && O === _(Ue) && (wt ? (Fe(zt), zt = -1) : wt = !0, K(yt, I - me))) : (O.sortIndex = g, Ne(ae, O), ct || It || (ct = !0, se || (se = !0, Mt()))), O;
      }, W.unstable_shouldYield = w, W.unstable_wrapCallback = function(O) {
        var k = Xe;
        return function() {
          var I = Xe;
          Xe = k;
          try {
            return O.apply(this, arguments);
          } finally {
            Xe = I;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(_0)), _0;
}
var jb;
function Kb() {
  return jb || (jb = 1, process.env.NODE_ENV === "production" ? rg.exports = uT() : rg.exports = iT()), rg.exports;
}
var dg = { exports: {} }, ba = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function cT() {
  if (Gb) return ba;
  Gb = 1;
  var W = Ah();
  function ce(w) {
    var K = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      K += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var oe = 2; oe < arguments.length; oe++)
        K += "&args[]=" + encodeURIComponent(arguments[oe]);
    }
    return "Minified React error #" + w + "; visit " + K + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ne() {
  }
  var _ = {
    d: {
      f: Ne,
      r: function() {
        throw Error(ce(522));
      },
      D: Ne,
      C: Ne,
      L: Ne,
      m: Ne,
      X: Ne,
      S: Ne,
      M: Ne
    },
    p: 0,
    findDOMNode: null
  }, Se = Symbol.for("react.portal");
  function Oe(w, K, oe) {
    var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Se,
      key: $ == null ? null : "" + $,
      children: w,
      containerInfo: K,
      implementation: oe
    };
  }
  var lt = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function yt(w, K) {
    if (w === "font") return "";
    if (typeof K == "string")
      return K === "use-credentials" ? K : "";
  }
  return ba.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, ba.createPortal = function(w, K) {
    var oe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!K || K.nodeType !== 1 && K.nodeType !== 9 && K.nodeType !== 11)
      throw Error(ce(299));
    return Oe(w, K, null, oe);
  }, ba.flushSync = function(w) {
    var K = lt.T, oe = _.p;
    try {
      if (lt.T = null, _.p = 2, w) return w();
    } finally {
      lt.T = K, _.p = oe, _.d.f();
    }
  }, ba.preconnect = function(w, K) {
    typeof w == "string" && (K ? (K = K.crossOrigin, K = typeof K == "string" ? K === "use-credentials" ? K : "" : void 0) : K = null, _.d.C(w, K));
  }, ba.prefetchDNS = function(w) {
    typeof w == "string" && _.d.D(w);
  }, ba.preinit = function(w, K) {
    if (typeof w == "string" && K && typeof K.as == "string") {
      var oe = K.as, $ = yt(oe, K.crossOrigin), M = typeof K.integrity == "string" ? K.integrity : void 0, ae = typeof K.fetchPriority == "string" ? K.fetchPriority : void 0;
      oe === "style" ? _.d.S(
        w,
        typeof K.precedence == "string" ? K.precedence : void 0,
        {
          crossOrigin: $,
          integrity: M,
          fetchPriority: ae
        }
      ) : oe === "script" && _.d.X(w, {
        crossOrigin: $,
        integrity: M,
        fetchPriority: ae,
        nonce: typeof K.nonce == "string" ? K.nonce : void 0
      });
    }
  }, ba.preinitModule = function(w, K) {
    if (typeof w == "string")
      if (typeof K == "object" && K !== null) {
        if (K.as == null || K.as === "script") {
          var oe = yt(
            K.as,
            K.crossOrigin
          );
          _.d.M(w, {
            crossOrigin: oe,
            integrity: typeof K.integrity == "string" ? K.integrity : void 0,
            nonce: typeof K.nonce == "string" ? K.nonce : void 0
          });
        }
      } else K == null && _.d.M(w);
  }, ba.preload = function(w, K) {
    if (typeof w == "string" && typeof K == "object" && K !== null && typeof K.as == "string") {
      var oe = K.as, $ = yt(oe, K.crossOrigin);
      _.d.L(w, oe, {
        crossOrigin: $,
        integrity: typeof K.integrity == "string" ? K.integrity : void 0,
        nonce: typeof K.nonce == "string" ? K.nonce : void 0,
        type: typeof K.type == "string" ? K.type : void 0,
        fetchPriority: typeof K.fetchPriority == "string" ? K.fetchPriority : void 0,
        referrerPolicy: typeof K.referrerPolicy == "string" ? K.referrerPolicy : void 0,
        imageSrcSet: typeof K.imageSrcSet == "string" ? K.imageSrcSet : void 0,
        imageSizes: typeof K.imageSizes == "string" ? K.imageSizes : void 0,
        media: typeof K.media == "string" ? K.media : void 0
      });
    }
  }, ba.preloadModule = function(w, K) {
    if (typeof w == "string")
      if (K) {
        var oe = yt(K.as, K.crossOrigin);
        _.d.m(w, {
          as: typeof K.as == "string" && K.as !== "script" ? K.as : void 0,
          crossOrigin: oe,
          integrity: typeof K.integrity == "string" ? K.integrity : void 0
        });
      } else _.d.m(w);
  }, ba.requestFormReset = function(w) {
    _.d.r(w);
  }, ba.unstable_batchedUpdates = function(w, K) {
    return w(K);
  }, ba.useFormState = function(w, K, oe) {
    return lt.H.useFormState(w, K, oe);
  }, ba.useFormStatus = function() {
    return lt.H.useHostTransitionStatus();
  }, ba.version = "19.1.0", ba;
}
var Sa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lb;
function oT() {
  return Lb || (Lb = 1, process.env.NODE_ENV !== "production" && function() {
    function W() {
    }
    function ce($) {
      return "" + $;
    }
    function Ne($, M, ae) {
      var Ue = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        ce(Ue);
        var Ke = !1;
      } catch {
        Ke = !0;
      }
      return Ke && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Ue[Symbol.toStringTag] || Ue.constructor.name || "Object"
      ), ce(Ue)), {
        $$typeof: K,
        key: Ue == null ? null : "" + Ue,
        children: $,
        containerInfo: M,
        implementation: ae
      };
    }
    function _($, M) {
      if ($ === "font") return "";
      if (typeof M == "string")
        return M === "use-credentials" ? M : "";
    }
    function Se($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : 'something with type "' + typeof $ + '"';
    }
    function Oe($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : typeof $ == "string" ? JSON.stringify($) : typeof $ == "number" ? "`" + $ + "`" : 'something with type "' + typeof $ + '"';
    }
    function lt() {
      var $ = oe.H;
      return $ === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), $;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yt = Ah(), w = {
      d: {
        f: W,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: W,
        C: W,
        L: W,
        m: W,
        X: W,
        S: W,
        M: W
      },
      p: 0,
      findDOMNode: null
    }, K = Symbol.for("react.portal"), oe = yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Sa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Sa.createPortal = function($, M) {
      var ae = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return Ne($, M, null, ae);
    }, Sa.flushSync = function($) {
      var M = oe.T, ae = w.p;
      try {
        if (oe.T = null, w.p = 2, $)
          return $();
      } finally {
        oe.T = M, w.p = ae, w.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Sa.preconnect = function($, M) {
      typeof $ == "string" && $ ? M != null && typeof M != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Oe(M)
      ) : M != null && typeof M.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Se(M.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Se($)
      ), typeof $ == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, w.d.C($, M));
    }, Sa.prefetchDNS = function($) {
      if (typeof $ != "string" || !$)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Se($)
        );
      else if (1 < arguments.length) {
        var M = arguments[1];
        typeof M == "object" && M.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Oe(M)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Oe(M)
        );
      }
      typeof $ == "string" && w.d.D($);
    }, Sa.preinit = function($, M) {
      if (typeof $ == "string" && $ ? M == null || typeof M != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Oe(M)
      ) : M.as !== "style" && M.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Oe(M.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Se($)
      ), typeof $ == "string" && M && typeof M.as == "string") {
        var ae = M.as, Ue = _(ae, M.crossOrigin), Ke = typeof M.integrity == "string" ? M.integrity : void 0, Ce = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
        ae === "style" ? w.d.S(
          $,
          typeof M.precedence == "string" ? M.precedence : void 0,
          {
            crossOrigin: Ue,
            integrity: Ke,
            fetchPriority: Ce
          }
        ) : ae === "script" && w.d.X($, {
          crossOrigin: Ue,
          integrity: Ke,
          fetchPriority: Ce,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0
        });
      }
    }, Sa.preinitModule = function($, M) {
      var ae = "";
      if (typeof $ == "string" && $ || (ae += " The `href` argument encountered was " + Se($) + "."), M !== void 0 && typeof M != "object" ? ae += " The `options` argument encountered was " + Se(M) + "." : M && "as" in M && M.as !== "script" && (ae += " The `as` option encountered was " + Oe(M.as) + "."), ae)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ae
        );
      else
        switch (ae = M && typeof M.as == "string" ? M.as : "script", ae) {
          case "script":
            break;
          default:
            ae = Oe(ae), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ae,
              $
            );
        }
      typeof $ == "string" && (typeof M == "object" && M !== null ? (M.as == null || M.as === "script") && (ae = _(
        M.as,
        M.crossOrigin
      ), w.d.M($, {
        crossOrigin: ae,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0
      })) : M == null && w.d.M($));
    }, Sa.preload = function($, M) {
      var ae = "";
      if (typeof $ == "string" && $ || (ae += " The `href` argument encountered was " + Se($) + "."), M == null || typeof M != "object" ? ae += " The `options` argument encountered was " + Se(M) + "." : typeof M.as == "string" && M.as || (ae += " The `as` option encountered was " + Se(M.as) + "."), ae && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ae
      ), typeof $ == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
        ae = M.as;
        var Ue = _(
          ae,
          M.crossOrigin
        );
        w.d.L($, ae, {
          crossOrigin: Ue,
          integrity: typeof M.integrity == "string" ? M.integrity : void 0,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0,
          type: typeof M.type == "string" ? M.type : void 0,
          fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
          referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
          imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
          imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
          media: typeof M.media == "string" ? M.media : void 0
        });
      }
    }, Sa.preloadModule = function($, M) {
      var ae = "";
      typeof $ == "string" && $ || (ae += " The `href` argument encountered was " + Se($) + "."), M !== void 0 && typeof M != "object" ? ae += " The `options` argument encountered was " + Se(M) + "." : M && "as" in M && typeof M.as != "string" && (ae += " The `as` option encountered was " + Se(M.as) + "."), ae && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ae
      ), typeof $ == "string" && (M ? (ae = _(
        M.as,
        M.crossOrigin
      ), w.d.m($, {
        as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
        crossOrigin: ae,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0
      })) : w.d.m($));
    }, Sa.requestFormReset = function($) {
      w.d.r($);
    }, Sa.unstable_batchedUpdates = function($, M) {
      return $(M);
    }, Sa.useFormState = function($, M, ae) {
      return lt().useFormState($, M, ae);
    }, Sa.useFormStatus = function() {
      return lt().useHostTransitionStatus();
    }, Sa.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sa;
}
var Vb;
function Jb() {
  if (Vb) return dg.exports;
  Vb = 1;
  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W);
      } catch (ce) {
        console.error(ce);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (W(), dg.exports = cT()) : dg.exports = oT(), dg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xb;
function fT() {
  if (Xb) return mp;
  Xb = 1;
  var W = Kb(), ce = Ah(), Ne = Jb();
  function _(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Se(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Oe(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function lt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function yt(l) {
    if (Oe(l) !== l)
      throw Error(_(188));
  }
  function w(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Oe(l), n === null) throw Error(_(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return yt(s), l;
          if (r === c) return yt(s), n;
          r = r.sibling;
        }
        throw Error(_(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, p = s.child; p; ) {
          if (p === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (p === c) {
            y = !0, c = s, u = r;
            break;
          }
          p = p.sibling;
        }
        if (!y) {
          for (p = r.child; p; ) {
            if (p === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (p === c) {
              y = !0, c = r, u = s;
              break;
            }
            p = p.sibling;
          }
          if (!y) throw Error(_(189));
        }
      }
      if (u.alternate !== c) throw Error(_(190));
    }
    if (u.tag !== 3) throw Error(_(188));
    return u.stateNode.current === u ? l : n;
  }
  function K(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = K(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var oe = Object.assign, $ = Symbol.for("react.element"), M = Symbol.for("react.transitional.element"), ae = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), Ke = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), It = Symbol.for("react.consumer"), ct = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), Fe = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), zt = Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function Re(l) {
    return l === null || typeof l != "object" ? null : (l = ve && l[ve] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Mt = Symbol.for("react.client.reference");
  function jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Mt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ue:
        return "Fragment";
      case Ce:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Be:
        return "Suspense";
      case Rt:
        return "SuspenseList";
      case se:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ae:
          return "Portal";
        case ct:
          return (l.displayName || "Context") + ".Provider";
        case It:
          return (l._context.displayName || "Context") + ".Consumer";
        case wt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Fe:
          return n = l.displayName || null, n !== null ? n : jt(l.type) || "Memo";
        case Ot:
          n = l._payload, l = l._init;
          try {
            return jt(l(n));
          } catch {
          }
      }
    return null;
  }
  var mt = Array.isArray, O = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], g = -1;
  function N(l) {
    return { current: l };
  }
  function Q(l) {
    0 > g || (l.current = me[g], me[g] = null, g--);
  }
  function F(l, n) {
    g++, me[g] = l.current, l.current = n;
  }
  var ne = N(null), Te = N(null), ue = N(null), nl = N(null);
  function Me(l, n) {
    switch (F(ue, n), F(Te, l), F(ne, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? wu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = wu(n), l = Lo(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Q(ne), F(ne, l);
  }
  function xt() {
    Q(ne), Q(Te), Q(ue);
  }
  function la(l) {
    l.memoizedState !== null && F(nl, l);
    var n = ne.current, u = Lo(n, l.type);
    n !== u && (F(Te, l), F(ne, u));
  }
  function Rn(l) {
    Te.current === l && (Q(ne), Q(Te)), nl.current === l && (Q(nl), va._currentValue = I);
  }
  var Gi = Object.prototype.hasOwnProperty, On = W.unstable_scheduleCallback, Kc = W.unstable_cancelCallback, df = W.unstable_shouldYield, Pt = W.unstable_requestPaint, hl = W.unstable_now, $u = W.unstable_getCurrentPriorityLevel, Ps = W.unstable_ImmediatePriority, Qe = W.unstable_UserBlockingPriority, Dn = W.unstable_NormalPriority, Jc = W.unstable_LowPriority, pu = W.unstable_IdlePriority, er = W.log, hf = W.unstable_setDisableYieldValue, Wu = null, El = null;
  function qa(l) {
    if (typeof er == "function" && hf(l), El && typeof El.setStrictMode == "function")
      try {
        El.setStrictMode(Wu, l);
      } catch {
      }
  }
  var Al = Math.clz32 ? Math.clz32 : $c, kc = Math.log, yf = Math.LN2;
  function $c(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (kc(l) / yf | 0) | 0;
  }
  var ln = 256, aa = 4194304;
  function Rl(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function an(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~r, c !== 0 ? s = Rl(c) : (y &= p, y !== 0 ? s = Rl(y) : u || (u = p & ~l, u !== 0 && (s = Rl(u))))) : (p = c & ~r, p !== 0 ? s = Rl(p) : y !== 0 ? s = Rl(y) : u || (u = c & ~l, u !== 0 && (s = Rl(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function m(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function D(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ee() {
    var l = ln;
    return ln <<= 1, (ln & 4194048) === 0 && (ln = 256), l;
  }
  function le() {
    var l = aa;
    return aa <<= 1, (aa & 62914560) === 0 && (aa = 4194304), l;
  }
  function ye(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function _e(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ye(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, C = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var X = 31 - Al(u), J = 1 << X;
      p[X] = 0, S[X] = -1;
      var x = C[X];
      if (x !== null)
        for (C[X] = null, X = 0; X < x.length; X++) {
          var q = x[X];
          q !== null && (q.lane &= -536870913);
        }
      u &= ~J;
    }
    c !== 0 && nt(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function nt(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Al(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function qe(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Al(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function el(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function nn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tr() {
    var l = k.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Mm(l.type));
  }
  function Rh(l, n) {
    var u = k.p;
    try {
      return k.p = l, n();
    } finally {
      k.p = u;
    }
  }
  var ul = Math.random().toString(36).slice(2), yl = "__reactFiber$" + ul, Kl = "__reactProps$" + ul, Wc = "__reactContainer$" + ul, lr = "__reactEvents$" + ul, gp = "__reactListeners$" + ul, ar = "__reactHandles$" + ul, bp = "__reactResources$" + ul, re = "__reactMarker$" + ul;
  function mf(l) {
    delete l[yl], delete l[Kl], delete l[lr], delete l[gp], delete l[ar];
  }
  function Ol(l) {
    var n = l[yl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Wc] || u[yl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Hl(l); l !== null; ) {
            if (u = l[yl]) return u;
            l = Hl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Li(l) {
    if (l = l[yl] || l[Wc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function pf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(_(33));
  }
  function vu(l) {
    var n = l[bp];
    return n || (n = l[bp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function il(l) {
    l[re] = !0;
  }
  var vf = /* @__PURE__ */ new Set(), Ta = {};
  function Fu(l, n) {
    Iu(l, n), Iu(l + "Capture", n);
  }
  function Iu(l, n) {
    for (Ta[l] = n, l = 0; l < n.length; l++)
      vf.add(n[l]);
  }
  var Sp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nr = {}, Oh = {};
  function Tp(l) {
    return Gi.call(Oh, l) ? !0 : Gi.call(nr, l) ? !1 : Sp.test(l) ? Oh[l] = !0 : (nr[l] = !0, !1);
  }
  function gu(l, n, u) {
    if (Tp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function gf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function zn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var ur, Dh;
  function Vi(l) {
    if (ur === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        ur = n && n[1] || "", Dh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ur + l + Dh;
  }
  var Jl = !1;
  function Pu(l, n) {
    if (!l || Jl) return "";
    Jl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (q) {
                  var x = q;
                }
                Reflect.construct(l, [], J);
              } else {
                try {
                  J.call();
                } catch (q) {
                  x = q;
                }
                l.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                x = q;
              }
              (J = l()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (q) {
            if (q && x && typeof q.stack == "string")
              return [q.stack, x.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], p = r[1];
      if (y && p) {
        var S = y.split(`
`), C = p.split(`
`);
        for (s = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < C.length && !C[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === S.length || s === C.length)
          for (c = S.length - 1, s = C.length - 1; 1 <= c && 0 <= s && S[c] !== C[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (S[c] !== C[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || S[c] !== C[s]) {
                  var X = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", l.displayName)), X;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Jl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Vi(u) : "";
  }
  function Xi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Vi(l.type);
      case 16:
        return Vi("Lazy");
      case 13:
        return Vi("Suspense");
      case 19:
        return Vi("SuspenseList");
      case 0:
      case 15:
        return Pu(l.type, !1);
      case 11:
        return Pu(l.type.render, !1);
      case 1:
        return Pu(l.type, !0);
      case 31:
        return Vi("Activity");
      default:
        return "";
    }
  }
  function zh(l) {
    try {
      var n = "";
      do
        n += Xi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Yl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Mh(l) {
    var n = bf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function ei(l) {
    l._valueTracker || (l._valueTracker = Mh(l));
  }
  function Qi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = bf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Fc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var hg = /[\n"\\]/g;
  function Ya(l) {
    return l.replace(
      hg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ir(l, n, u, c, s, r, y, p) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Yl(n)) : l.value !== "" + Yl(n) && (l.value = "" + Yl(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? Sf(l, y, Yl(n)) : u != null ? Sf(l, y, Yl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + Yl(p) : l.removeAttribute("name");
  }
  function cr(l, n, u, c, s, r, y, p) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Yl(u) : "", n = n != null ? "" + Yl(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function Sf(l, n, u) {
    n === "number" && Fc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Zi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Yl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Uh(l, n, u) {
    if (n != null && (n = "" + Yl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Yl(u) : "";
  }
  function Ch(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(_(92));
        if (mt(c)) {
          if (1 < c.length) throw Error(_(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Yl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Ic(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Ep = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function or(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Ep.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Tf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(_(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && or(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && or(l, r, n[r]);
  }
  function Ki(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ap = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ef(l) {
    return Ap.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ji = null;
  function fr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Pc = null, eo = null;
  function Rp(l) {
    var n = Li(l);
    if (n && (l = n.stateNode)) {
      var u = l[Kl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ir(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ya(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Kl] || null;
                if (!s) throw Error(_(90));
                ir(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Qi(c);
          }
          break e;
        case "textarea":
          Uh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Zi(l, !!u.multiple, n, !1);
      }
    }
  }
  var _h = !1;
  function to(l, n, u) {
    if (_h) return l(n, u);
    _h = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (_h = !1, (Pc !== null || eo !== null) && (Oc(), Pc && (n = Pc, l = eo, eo = Pc = null, Rp(n), l)))
        for (n = 0; n < l.length; n++) Rp(l[n]);
    }
  }
  function ki(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Kl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        _(231, n, typeof u)
      );
    return u;
  }
  var Mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sr = !1;
  if (Mn)
    try {
      var bu = {};
      Object.defineProperty(bu, "passive", {
        get: function() {
          sr = !0;
        }
      }), window.addEventListener("test", bu, bu), window.removeEventListener("test", bu, bu);
    } catch {
      sr = !1;
    }
  var Su = null, lo = null, $i = null;
  function Hh() {
    if ($i) return $i;
    var l, n = lo, u = n.length, c, s = "value" in Su ? Su.value : Su.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return $i = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Dl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function rr() {
    return !0;
  }
  function dr() {
    return !1;
  }
  function kl(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(r) : r[p]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? rr : dr, this.isPropagationStopped = dr, this;
    }
    return oe(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = rr);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = rr);
      },
      persist: function() {
      },
      isPersistent: rr
    }), n;
  }
  var ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, hr = kl(ti), Af = oe({}, ti, { view: 0, detail: 0 }), Op = kl(Af), xh, yr, Rf, Wi = oe({}, Af, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Rf && (Rf && l.type === "mousemove" ? (xh = l.screenX - Rf.screenX, yr = l.screenY - Rf.screenY) : yr = xh = 0, Rf = l), xh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : yr;
    }
  }), Nh = kl(Wi), Dp = oe({}, Wi, { dataTransfer: 0 }), zp = kl(Dp), mg = oe({}, Af, { relatedTarget: 0 }), Bh = kl(mg), pg = oe({}, ti, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vg = kl(pg), gg = oe({}, ti, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Of = kl(gg), Mp = oe({}, ti, { data: 0 }), qh = kl(Mp), Up = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Cp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Yh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _p(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Yh[l]) ? !!n[l] : !1;
  }
  function Tu() {
    return _p;
  }
  var Fi = oe({}, Af, {
    key: function(l) {
      if (l.key) {
        var n = Up[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Dl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function(l) {
      return l.type === "keypress" ? Dl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Dl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), un = kl(Fi), Ea = oe({}, Wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Df = kl(Ea), mr = oe({}, Af, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu
  }), wh = kl(mr), na = oe({}, ti, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hp = kl(na), pr = oe({}, Wi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = kl(pr), jh = oe({}, ti, {
    newState: 0,
    oldState: 0
  }), xp = kl(jh), Np = [9, 13, 27, 32], zf = Mn && "CompositionEvent" in window, Mf = null;
  Mn && "documentMode" in document && (Mf = document.documentMode);
  var Gh = Mn && "TextEvent" in window && !Mf, Un = Mn && (!zf || Mf && 8 < Mf && 11 >= Mf), Lh = " ", vr = !1;
  function Uf(l, n) {
    switch (l) {
      case "keyup":
        return Np.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function li(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ai = !1;
  function Vh(l, n) {
    switch (l) {
      case "compositionend":
        return li(n);
      case "keypress":
        return n.which !== 32 ? null : (vr = !0, Lh);
      case "textInput":
        return l = n.data, l === Lh && vr ? null : l;
      default:
        return null;
    }
  }
  function Pi(l, n) {
    if (ai)
      return l === "compositionend" || !zf && Uf(l, n) ? (l = Hh(), $i = lo = Su = null, ai = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Un && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Bp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function gr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Bp[l.type] : n === "textarea";
  }
  function br(l, n, u, c) {
    Pc ? eo ? eo.push(c) : eo = [c] : Pc = c, n = Go(n, "onChange"), 0 < n.length && (u = new hr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var cn = null, on = null;
  function Xh(l) {
    Uc(l, 0);
  }
  function Cn(l) {
    var n = pf(l);
    if (Qi(n)) return l;
  }
  function Qh(l, n) {
    if (l === "change") return n;
  }
  var Zh = !1;
  if (Mn) {
    var ec;
    if (Mn) {
      var tc = "oninput" in document;
      if (!tc) {
        var Kh = document.createElement("div");
        Kh.setAttribute("oninput", "return;"), tc = typeof Kh.oninput == "function";
      }
      ec = tc;
    } else ec = !1;
    Zh = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function ao() {
    cn && (cn.detachEvent("onpropertychange", Jh), on = cn = null);
  }
  function Jh(l) {
    if (l.propertyName === "value" && Cn(on)) {
      var n = [];
      br(
        n,
        on,
        l,
        fr(l)
      ), to(Xh, n);
    }
  }
  function Sr(l, n, u) {
    l === "focusin" ? (ao(), cn = n, on = u, cn.attachEvent("onpropertychange", Jh)) : l === "focusout" && ao();
  }
  function ni(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Cn(on);
  }
  function Eu(l, n) {
    if (l === "click") return Cn(n);
  }
  function kh(l, n) {
    if (l === "input" || l === "change")
      return Cn(n);
  }
  function $h(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var zl = typeof Object.is == "function" ? Object.is : $h;
  function ui(l, n) {
    if (zl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Gi.call(n, s) || !zl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function ii(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ct(l, n) {
    var u = ii(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ii(u);
    }
  }
  function Cf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Cf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Wh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Fc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Fc(l.document);
    }
    return n;
  }
  function _f(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var lc = Mn && "documentMode" in document && 11 >= document.documentMode, _n = null, fn = null, ci = null, ac = !1;
  function Tr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    ac || _n == null || _n !== Fc(c) || (c = _n, "selectionStart" in c && _f(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ci && ui(ci, c) || (ci = c, c = Go(fn, "onSelect"), 0 < c.length && (n = new hr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = _n)));
  }
  function Au(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var nc = {
    animationend: Au("Animation", "AnimationEnd"),
    animationiteration: Au("Animation", "AnimationIteration"),
    animationstart: Au("Animation", "AnimationStart"),
    transitionrun: Au("Transition", "TransitionRun"),
    transitionstart: Au("Transition", "TransitionStart"),
    transitioncancel: Au("Transition", "TransitionCancel"),
    transitionend: Au("Transition", "TransitionEnd")
  }, wa = {}, sn = {};
  Mn && (sn = document.createElement("div").style, "AnimationEvent" in window || (delete nc.animationend.animation, delete nc.animationiteration.animation, delete nc.animationstart.animation), "TransitionEvent" in window || delete nc.transitionend.transition);
  function Hn(l) {
    if (wa[l]) return wa[l];
    if (!nc[l]) return l;
    var n = nc[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in sn)
        return wa[l] = n[u];
    return l;
  }
  var qp = Hn("animationend"), Fh = Hn("animationiteration"), Yp = Hn("animationstart"), Ih = Hn("transitionrun"), Er = Hn("transitionstart"), wp = Hn("transitioncancel"), Ph = Hn("transitionend"), ey = /* @__PURE__ */ new Map(), no = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  no.push("scrollEnd");
  function ja(l, n) {
    ey.set(l, n), Fu(n, [l]);
  }
  var ty = /* @__PURE__ */ new WeakMap();
  function Aa(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ty.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: zh(n)
      }, ty.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: zh(n)
    };
  }
  var ua = [], oi = 0, xn = 0;
  function rn() {
    for (var l = oi, n = xn = oi = 0; n < l; ) {
      var u = ua[n];
      ua[n++] = null;
      var c = ua[n];
      ua[n++] = null;
      var s = ua[n];
      ua[n++] = null;
      var r = ua[n];
      if (ua[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && io(u, s, r);
    }
  }
  function fi(l, n, u, c) {
    ua[oi++] = l, ua[oi++] = n, ua[oi++] = u, ua[oi++] = c, xn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function uo(l, n, u, c) {
    return fi(l, n, u, c), Hf(l);
  }
  function Nn(l, n) {
    return fi(l, null, null, n), Hf(l);
  }
  function io(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Al(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Hf(l) {
    if (50 < No)
      throw No = 0, tm = null, Error(_(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var co = {};
  function jp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ia(l, n, u, c) {
    return new jp(l, n, u, c);
  }
  function xf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function dn(l, n) {
    var u = l.alternate;
    return u === null ? (u = ia(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Je(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function P(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") xf(l) && (y = 1);
    else if (typeof l == "string")
      y = bv(
        l,
        u,
        ne.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case se:
          return l = ia(31, u, n, s), l.elementType = se, l.lanes = r, l;
        case Ue:
          return Ga(u.children, s, r, n);
        case Ke:
          y = 8, s |= 24;
          break;
        case Ce:
          return l = ia(12, u, n, s | 2), l.elementType = Ce, l.lanes = r, l;
        case Be:
          return l = ia(13, u, n, s), l.elementType = Be, l.lanes = r, l;
        case Rt:
          return l = ia(19, u, n, s), l.elementType = Rt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Xe:
              case ct:
                y = 10;
                break e;
              case It:
                y = 9;
                break e;
              case wt:
                y = 11;
                break e;
              case Fe:
                y = 14;
                break e;
              case Ot:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            _(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ia(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Ga(l, n, u, c) {
    return l = ia(7, l, c, n), l.lanes = u, l;
  }
  function oo(l, n, u) {
    return l = ia(6, l, null, n), l.lanes = u, l;
  }
  function Gt(l, n, u) {
    return n = ia(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var si = [], ri = 0, Nf = null, fo = 0, La = [], ca = 0, Ru = null, hn = 1, Xt = "";
  function ut(l, n) {
    si[ri++] = fo, si[ri++] = Nf, Nf = l, fo = n;
  }
  function Ar(l, n, u) {
    La[ca++] = hn, La[ca++] = Xt, La[ca++] = Ru, Ru = l;
    var c = hn;
    l = Xt;
    var s = 32 - Al(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Al(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, hn = 1 << 32 - Al(n) + s | u << s | c, Xt = r + l;
    } else
      hn = 1 << r | u << s | c, Xt = l;
  }
  function uc(l) {
    l.return !== null && (ut(l, 1), Ar(l, 1, 0));
  }
  function Bn(l) {
    for (; l === Nf; )
      Nf = si[--ri], si[ri] = null, fo = si[--ri], si[ri] = null;
    for (; l === Ru; )
      Ru = La[--ca], La[ca] = null, Xt = La[--ca], La[ca] = null, hn = La[--ca], La[ca] = null;
  }
  var Ft = null, st = null, ft = !1, Va = null, Xa = !1, ic = Error(_(519));
  function Ou(l) {
    var n = Error(_(418, ""));
    throw ho(Aa(n, l)), ic;
  }
  function Bf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[yl] = l, n[Kl] = c, u) {
      case "dialog":
        je("cancel", n), je("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        je("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Ss.length; u++)
          je(Ss[u], n);
        break;
      case "source":
        je("error", n);
        break;
      case "img":
      case "image":
      case "link":
        je("error", n), je("load", n);
        break;
      case "details":
        je("toggle", n);
        break;
      case "input":
        je("invalid", n), cr(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), ei(n);
        break;
      case "select":
        je("invalid", n);
        break;
      case "textarea":
        je("invalid", n), Ch(n, c.value, c.defaultValue, c.children), ei(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || mm(n.textContent, u) ? (c.popover != null && (je("beforetoggle", n), je("toggle", n)), c.onScroll != null && je("scroll", n), c.onScrollEnd != null && je("scrollend", n), c.onClick != null && (n.onclick = xd), n = !0) : n = !1, n || Ou(l);
  }
  function ly(l) {
    for (Ft = l.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Xa = !1;
          return;
        case 27:
        case 3:
          Xa = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function so(l) {
    if (l !== Ft) return !1;
    if (!ft) return ly(l), ft = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || tu(l.type, l.memoizedProps)), u = !u), u && st && Ou(l), ly(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(_(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                st = bn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        st = null;
      }
    } else
      n === 27 ? (n = st, Ui(l.type) ? (l = Ci, Ci = null, st = l) : st = n) : st = Ft ? bn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ro() {
    st = Ft = null, ft = !1;
  }
  function ay() {
    var l = Va;
    return l !== null && (ha === null ? ha = l : ha.push.apply(
      ha,
      l
    ), Va = null), l;
  }
  function ho(l) {
    Va === null ? Va = [l] : Va.push(l);
  }
  var qf = N(null), Du = null, yn = null;
  function zu(l, n, u) {
    F(qf, n._currentValue), n._currentValue = u;
  }
  function qn(l) {
    l._currentValue = qf.current, Q(qf);
  }
  function Rr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ny(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var p = r;
          r = s;
          for (var S = 0; S < n.length; S++)
            if (p.context === n[S]) {
              r.lanes |= u, p = r.alternate, p !== null && (p.lanes |= u), Rr(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = p.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(_(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), Rr(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function yo(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(_(387));
        if (y = y.memoizedProps, y !== null) {
          var p = s.type;
          zl(s.pendingProps.value, y.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (s === nl.current) {
        if (y = s.alternate, y === null) throw Error(_(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(va) : l = [va]);
      }
      s = s.return;
    }
    l !== null && ny(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Yf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!zl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function di(l) {
    Du = l, yn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ml(l) {
    return uy(Du, l);
  }
  function wf(l, n) {
    return Du === null && di(l), uy(l, n);
  }
  function uy(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, yn === null) {
      if (l === null) throw Error(_(308));
      yn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else yn = yn.next = n;
    return u;
  }
  var mo = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Or = W.unstable_scheduleCallback, Gp = W.unstable_NormalPriority, cl = {
    $$typeof: ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function po() {
    return {
      controller: new mo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yn(l) {
    l.refCount--, l.refCount === 0 && Or(Gp, function() {
      l.controller.abort();
    });
  }
  var hi = null, jf = 0, Qa = 0, ol = null;
  function Dr(l, n) {
    if (hi === null) {
      var u = hi = [];
      jf = 0, Qa = Mc(), ol = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return jf++, n.then(zr, zr), n;
  }
  function zr() {
    if (--jf === 0 && hi !== null) {
      ol !== null && (ol.status = "fulfilled");
      var l = hi;
      hi = null, Qa = 0, ol = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Lp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Mr = O.S;
  O.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Dr(l, n), Mr !== null && Mr(l, n);
  };
  var wn = N(null);
  function Gf() {
    var l = wn.current;
    return l !== null ? l : Dt.pooledCache;
  }
  function cc(l, n) {
    n === null ? F(wn, wn.current) : F(wn, n.pool);
  }
  function Ur() {
    var l = Gf();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var yi = Error(_(460)), Cr = Error(_(474)), Lf = Error(_(542)), _r = { then: function() {
  } };
  function Hr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Vf() {
  }
  function iy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Vf, Vf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, oy(l), l;
      default:
        if (typeof n.status == "string") n.then(Vf, Vf);
        else {
          if (l = Dt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(_(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, oy(l), l;
        }
        throw oc = n, yi;
    }
  }
  var oc = null;
  function cy() {
    if (oc === null) throw Error(_(459));
    var l = oc;
    return oc = null, l;
  }
  function oy(l) {
    if (l === yi || l === Lf)
      throw Error(_(483));
  }
  var jn = !1;
  function xr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function oa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (vt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Hf(l), io(l, null, u), n;
    }
    return fi(l, c, n, u), Hf(l);
  }
  function fc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, qe(l, u);
    }
  }
  function fy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var sy = !1;
  function vo() {
    if (sy) {
      var l = ol;
      if (l !== null) throw l;
    }
  }
  function Mu(l, n, u, c) {
    sy = !1;
    var s = l.updateQueue;
    jn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var S = p, C = S.next;
      S.next = null, y === null ? r = C : y.next = C, y = S;
      var X = l.alternate;
      X !== null && (X = X.updateQueue, p = X.lastBaseUpdate, p !== y && (p === null ? X.firstBaseUpdate = C : p.next = C, X.lastBaseUpdate = S));
    }
    if (r !== null) {
      var J = s.baseState;
      y = 0, X = C = S = null, p = r;
      do {
        var x = p.lane & -536870913, q = x !== p.lane;
        if (q ? (et & x) === x : (c & x) === x) {
          x !== 0 && x === Qa && (sy = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, be = p;
            x = n;
            var dt = u;
            switch (be.tag) {
              case 1:
                if (ge = be.payload, typeof ge == "function") {
                  J = ge.call(dt, J, x);
                  break e;
                }
                J = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = be.payload, x = typeof ge == "function" ? ge.call(dt, J, x) : ge, x == null) break e;
                J = oe({}, J, x);
                break e;
              case 2:
                jn = !0;
            }
          }
          x = p.callback, x !== null && (l.flags |= 64, q && (l.flags |= 8192), q = s.callbacks, q === null ? s.callbacks = [x] : q.push(x));
        } else
          q = {
            lane: x,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, X === null ? (C = X = q, S = J) : X = X.next = q, y |= x;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          q = p, p = q.next, q.next = null, s.lastBaseUpdate = q, s.shared.pending = null;
        }
      } while (!0);
      X === null && (S = J), s.baseState = S, s.firstBaseUpdate = C, s.lastBaseUpdate = X, r === null && (s.shared.lanes = 0), Bu |= y, l.lanes = y, l.memoizedState = J;
    }
  }
  function Br(l, n) {
    if (typeof l != "function")
      throw Error(_(191, l));
    l.call(n);
  }
  function Xf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Br(u[l], n);
  }
  var sc = N(null), Qf = N(0);
  function pl(l, n) {
    l = Nu, F(Qf, l), F(sc, n), Nu = l | n.baseLanes;
  }
  function go() {
    F(Qf, Nu), F(sc, sc.current);
  }
  function bo() {
    Nu = Qf.current, Q(sc), Q(Qf);
  }
  var Za = 0, we = null, pt = null, Lt = null, Zf = !1, Ra = !1, mi = !1, mn = 0, Oa = 0, Uu = null, ry = 0;
  function Vt() {
    throw Error(_(321));
  }
  function qr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!zl(l[u], n[u])) return !1;
    return !0;
  }
  function Yr(l, n, u, c, s, r) {
    return Za = r, we = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Dy : zy, mi = !1, r = u(c, s), mi = !1, Ra && (r = dy(
      n,
      u,
      c,
      s
    )), pi(l), r;
  }
  function pi(l) {
    O.H = ed;
    var n = pt !== null && pt.next !== null;
    if (Za = 0, Lt = pt = we = null, Zf = !1, Oa = 0, Uu = null, n) throw Error(_(300));
    l === null || fl || (l = l.dependencies, l !== null && Yf(l) && (fl = !0));
  }
  function dy(l, n, u, c) {
    we = l;
    var s = 0;
    do {
      if (Ra && (Uu = null), Oa = 0, Ra = !1, 25 <= s) throw Error(_(301));
      if (s += 1, Lt = pt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = Cu, r = n(u, c);
    } while (Ra);
    return r;
  }
  function Vp() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Jf(n) : n, l = l.useState()[0], (pt !== null ? pt.memoizedState : null) !== l && (we.flags |= 1024), n;
  }
  function wr() {
    var l = mn !== 0;
    return mn = 0, l;
  }
  function So(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function jr(l) {
    if (Zf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zf = !1;
    }
    Za = 0, Lt = pt = we = null, Ra = !1, Oa = mn = 0, Uu = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? we.memoizedState = Lt = l : Lt = Lt.next = l, Lt;
  }
  function Qt() {
    if (pt === null) {
      var l = we.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = pt.next;
    var n = Lt === null ? we.memoizedState : Lt.next;
    if (n !== null)
      Lt = n, pt = l;
    else {
      if (l === null)
        throw we.alternate === null ? Error(_(467)) : Error(_(310));
      pt = l, l = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Lt === null ? we.memoizedState = Lt = l : Lt = Lt.next = l;
    }
    return Lt;
  }
  function Kf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Jf(l) {
    var n = Oa;
    return Oa += 1, Uu === null && (Uu = []), l = iy(Uu, l, n), n = we, (Lt === null ? n.memoizedState : Lt.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Dy : zy), l;
  }
  function tl(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Jf(l);
      if (l.$$typeof === ct) return ml(l);
    }
    throw Error(_(438, String(l)));
  }
  function Gr(l) {
    var n = null, u = we.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = we.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Kf(), we.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = zt;
    return n.index++, u;
  }
  function Ln(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function kf(l) {
    var n = Qt();
    return Lr(n, pt, l);
  }
  function Lr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(_(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var p = y = null, S = null, C = n, X = !1;
      do {
        var J = C.lane & -536870913;
        if (J !== C.lane ? (et & J) === J : (Za & J) === J) {
          var x = C.revertLane;
          if (x === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), J === Qa && (X = !0);
          else if ((Za & x) === x) {
            C = C.next, x === Qa && (X = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (p = S = J, y = r) : S = S.next = J, we.lanes |= x, Bu |= x;
          J = C.action, mi && u(r, J), r = C.hasEagerState ? C.eagerState : u(r, J);
        } else
          x = {
            lane: J,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (p = S = x, y = r) : S = S.next = x, we.lanes |= J, Bu |= J;
        C = C.next;
      } while (C !== null && C !== n);
      if (S === null ? y = r : S.next = p, !zl(r, l.memoizedState) && (fl = !0, X && (u = ol, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = S, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Vr(l) {
    var n = Qt(), u = n.queue;
    if (u === null) throw Error(_(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      zl(r, n.memoizedState) || (fl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function $f(l, n, u) {
    var c = we, s = Qt(), r = ft;
    if (r) {
      if (u === void 0) throw Error(_(407));
      u = u();
    } else u = n();
    var y = !zl(
      (pt || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, fl = !0), s = s.queue;
    var p = yy.bind(null, c, s, l);
    if (Tt(2048, 8, p, [l]), s.getSnapshot !== n || y || Lt !== null && Lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, fa(
        9,
        If(),
        hy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Dt === null) throw Error(_(349));
      r || (Za & 124) !== 0 || Xr(c, n, u);
    }
    return u;
  }
  function Xr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = we.updateQueue, n === null ? (n = Kf(), we.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function hy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, my(n) && Qr(l);
  }
  function yy(l, n, u) {
    return u(function() {
      my(n) && Qr(l);
    });
  }
  function my(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !zl(l, u);
    } catch {
      return !0;
    }
  }
  function Qr(l) {
    var n = Nn(l, 2);
    n !== null && Ma(n, l, 2);
  }
  function Wf(l) {
    var n = wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), mi) {
        qa(!0);
        try {
          u();
        } finally {
          qa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ln,
      lastRenderedState: l
    }, n;
  }
  function Zr(l, n, u, c) {
    return l.baseState = u, Lr(
      l,
      pt,
      typeof c == "function" ? c : Ln
    );
  }
  function Xp(l, n, u, c, s) {
    if (yc(l)) throw Error(_(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      O.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Kr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Kr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, y = {};
      O.T = y;
      try {
        var p = u(s, c), S = O.S;
        S !== null && S(y, p), Ff(l, n, p);
      } catch (C) {
        kr(l, n, C);
      } finally {
        O.T = r;
      }
    } else
      try {
        r = u(s, c), Ff(l, n, r);
      } catch (C) {
        kr(l, n, C);
      }
  }
  function Ff(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Jr(l, n, c);
      },
      function(c) {
        return kr(l, n, c);
      }
    ) : Jr(l, n, u);
  }
  function Jr(l, n, u) {
    n.status = "fulfilled", n.value = u, py(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Kr(l, u)));
  }
  function kr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, py(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function py(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function $r(l, n) {
    return n;
  }
  function vy(l, n) {
    if (ft) {
      var u = Dt.formState;
      if (u !== null) {
        e: {
          var c = we;
          if (ft) {
            if (st) {
              t: {
                for (var s = st, r = Xa; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = bn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                st = bn(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            Ou(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = wl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $r,
      lastRenderedState: n
    }, u.queue = c, u = Ry.bind(
      null,
      we,
      c
    ), c.dispatch = u, c = Wf(!1), r = ts.bind(
      null,
      we,
      !1,
      c.queue
    ), c = wl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Xp.bind(
      null,
      we,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Vn(l) {
    var n = Qt();
    return Wr(n, pt, l);
  }
  function Wr(l, n, u) {
    if (n = Lr(
      l,
      n,
      $r
    )[0], l = kf(Ln)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Jf(n);
      } catch (y) {
        throw y === yi ? Lf : y;
      }
    else c = n;
    n = Qt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (we.flags |= 2048, fa(
      9,
      If(),
      bg.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function bg(l, n) {
    l.action = n;
  }
  function Fr(l) {
    var n = Qt(), u = pt;
    if (u !== null)
      return Wr(n, u, l);
    Qt(), n = n.memoizedState, u = Qt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function fa(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = we.updateQueue, n === null && (n = Kf(), we.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function If() {
    return { destroy: void 0, resource: void 0 };
  }
  function Pf() {
    return Qt().memoizedState;
  }
  function vi(l, n, u, c) {
    var s = wl();
    c = c === void 0 ? null : c, we.flags |= l, s.memoizedState = fa(
      1 | n,
      If(),
      u,
      c
    );
  }
  function Tt(l, n, u, c) {
    var s = Qt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    pt !== null && c !== null && qr(c, pt.memoizedState.deps) ? s.memoizedState = fa(n, r, u, c) : (we.flags |= l, s.memoizedState = fa(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Qp(l, n) {
    vi(8390656, 8, l, n);
  }
  function Zp(l, n) {
    Tt(2048, 8, l, n);
  }
  function gy(l, n) {
    return Tt(4, 2, l, n);
  }
  function pn(l, n) {
    return Tt(4, 4, l, n);
  }
  function by(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Ir(l, n, u) {
    u = u != null ? u.concat([l]) : null, Tt(4, 4, by.bind(null, n, l), u);
  }
  function rc() {
  }
  function dc(l, n) {
    var u = Qt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && qr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Sy(l, n) {
    var u = Qt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && qr(n, c[1]))
      return c[0];
    if (c = l(), mi) {
      qa(!0);
      try {
        l();
      } finally {
        qa(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function es(l, n, u) {
    return u === void 0 || (Za & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = lm(), we.lanes |= l, Bu |= l, u);
  }
  function Ty(l, n, u, c) {
    return zl(u, n) ? u : sc.current !== null ? (l = es(l, u, c), zl(l, n) || (fl = !0), l) : (Za & 42) === 0 ? (fl = !0, l.memoizedState = u) : (l = lm(), we.lanes |= l, Bu |= l, n);
  }
  function Kp(l, n, u, c, s) {
    var r = k.p;
    k.p = r !== 0 && 8 > r ? r : 8;
    var y = O.T, p = {};
    O.T = p, ts(l, !1, n, u);
    try {
      var S = s(), C = O.S;
      if (C !== null && C(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var X = Lp(
          S,
          c
        );
        hc(
          l,
          n,
          X,
          za(l)
        );
      } else
        hc(
          l,
          n,
          c,
          za(l)
        );
    } catch (J) {
      hc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: J },
        za()
      );
    } finally {
      k.p = r, O.T = y;
    }
  }
  function Sg() {
  }
  function Pr(l, n, u, c) {
    if (l.tag !== 5) throw Error(_(476));
    var s = Jp(l).queue;
    Kp(
      l,
      s,
      n,
      I,
      u === null ? Sg : function() {
        return To(l), u(c);
      }
    );
  }
  function Jp(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: I
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function To(l) {
    var n = Jp(l).next.queue;
    hc(l, n, {}, za());
  }
  function Ka() {
    return ml(va);
  }
  function Ey() {
    return Qt().memoizedState;
  }
  function kp() {
    return Qt().memoizedState;
  }
  function $p(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = za();
          l = oa(u);
          var c = Gn(n, l, u);
          c !== null && (Ma(c, n, u), fc(c, n, u)), n = { cache: po() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Ay(l, n, u) {
    var c = za();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yc(l) ? Wp(n, u) : (u = uo(l, n, u, c), u !== null && (Ma(u, l, c), Oy(u, n, c)));
  }
  function Ry(l, n, u) {
    var c = za();
    hc(l, n, u, c);
  }
  function hc(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yc(l)) Wp(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, p = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = p, zl(p, y))
            return fi(l, n, s, 0), Dt === null && rn(), !1;
        } catch {
        } finally {
        }
      if (u = uo(l, n, s, c), u !== null)
        return Ma(u, l, c), Oy(u, n, c), !0;
    }
    return !1;
  }
  function ts(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Mc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yc(l)) {
      if (n) throw Error(_(479));
    } else
      n = uo(
        l,
        u,
        c,
        2
      ), n !== null && Ma(n, l, 2);
  }
  function yc(l) {
    var n = l.alternate;
    return l === we || n !== null && n === we;
  }
  function Wp(l, n) {
    Ra = Zf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Oy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, qe(l, u);
    }
  }
  var ed = {
    readContext: ml,
    use: tl,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt
  }, Dy = {
    readContext: ml,
    use: tl,
    useCallback: function(l, n) {
      return wl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ml,
    useEffect: Qp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, vi(
        4194308,
        4,
        by.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return vi(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      vi(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = wl();
      n = n === void 0 ? null : n;
      var c = l();
      if (mi) {
        qa(!0);
        try {
          l();
        } finally {
          qa(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = wl();
      if (u !== void 0) {
        var s = u(n);
        if (mi) {
          qa(!0);
          try {
            u(n);
          } finally {
            qa(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Ay.bind(
        null,
        we,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = wl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Wf(l);
      var n = l.queue, u = Ry.bind(null, we, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = wl();
      return es(u, l, n);
    },
    useTransition: function() {
      var l = Wf(!1);
      return l = Kp.bind(
        null,
        we,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = we, s = wl();
      if (ft) {
        if (u === void 0)
          throw Error(_(407));
        u = u();
      } else {
        if (u = n(), Dt === null)
          throw Error(_(349));
        (et & 124) !== 0 || Xr(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Qp(yy.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, fa(
        9,
        If(),
        hy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = wl(), n = Dt.identifierPrefix;
      if (ft) {
        var u = Xt, c = hn;
        u = (c & ~(1 << 32 - Al(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = mn++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = ry++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ka,
    useFormState: vy,
    useActionState: vy,
    useOptimistic: function(l) {
      var n = wl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = ts.bind(
        null,
        we,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Gr,
    useCacheRefresh: function() {
      return wl().memoizedState = $p.bind(
        null,
        we
      );
    }
  }, zy = {
    readContext: ml,
    use: tl,
    useCallback: dc,
    useContext: ml,
    useEffect: Zp,
    useImperativeHandle: Ir,
    useInsertionEffect: gy,
    useLayoutEffect: pn,
    useMemo: Sy,
    useReducer: kf,
    useRef: Pf,
    useState: function() {
      return kf(Ln);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Qt();
      return Ty(
        u,
        pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = kf(Ln)[0], n = Qt().memoizedState;
      return [
        typeof l == "boolean" ? l : Jf(l),
        n
      ];
    },
    useSyncExternalStore: $f,
    useId: Ey,
    useHostTransitionStatus: Ka,
    useFormState: Vn,
    useActionState: Vn,
    useOptimistic: function(l, n) {
      var u = Qt();
      return Zr(u, pt, l, n);
    },
    useMemoCache: Gr,
    useCacheRefresh: kp
  }, Cu = {
    readContext: ml,
    use: tl,
    useCallback: dc,
    useContext: ml,
    useEffect: Zp,
    useImperativeHandle: Ir,
    useInsertionEffect: gy,
    useLayoutEffect: pn,
    useMemo: Sy,
    useReducer: Vr,
    useRef: Pf,
    useState: function() {
      return Vr(Ln);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Qt();
      return pt === null ? es(u, l, n) : Ty(
        u,
        pt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Vr(Ln)[0], n = Qt().memoizedState;
      return [
        typeof l == "boolean" ? l : Jf(l),
        n
      ];
    },
    useSyncExternalStore: $f,
    useId: Ey,
    useHostTransitionStatus: Ka,
    useFormState: Fr,
    useActionState: Fr,
    useOptimistic: function(l, n) {
      var u = Qt();
      return pt !== null ? Zr(u, pt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Gr,
    useCacheRefresh: kp
  }, mc = null, Eo = 0;
  function td(l) {
    var n = Eo;
    return Eo += 1, mc === null && (mc = []), iy(mc, l, n);
  }
  function pc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function jl(l, n) {
    throw n.$$typeof === $ ? Error(_(525)) : (l = Object.prototype.toString.call(n), Error(
      _(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function My(l) {
    var n = l._init;
    return n(l._payload);
  }
  function sa(l) {
    function n(z, R) {
      if (l) {
        var U = z.deletions;
        U === null ? (z.deletions = [R], z.flags |= 16) : U.push(R);
      }
    }
    function u(z, R) {
      if (!l) return null;
      for (; R !== null; )
        n(z, R), R = R.sibling;
      return null;
    }
    function c(z) {
      for (var R = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? R.set(z.key, z) : R.set(z.index, z), z = z.sibling;
      return R;
    }
    function s(z, R) {
      return z = dn(z, R), z.index = 0, z.sibling = null, z;
    }
    function r(z, R, U) {
      return z.index = U, l ? (U = z.alternate, U !== null ? (U = U.index, U < R ? (z.flags |= 67108866, R) : U) : (z.flags |= 67108866, R)) : (z.flags |= 1048576, R);
    }
    function y(z) {
      return l && z.alternate === null && (z.flags |= 67108866), z;
    }
    function p(z, R, U, Z) {
      return R === null || R.tag !== 6 ? (R = oo(U, z.mode, Z), R.return = z, R) : (R = s(R, U), R.return = z, R);
    }
    function S(z, R, U, Z) {
      var fe = U.type;
      return fe === Ue ? X(
        z,
        R,
        U.props.children,
        Z,
        U.key
      ) : R !== null && (R.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Ot && My(fe) === R.type) ? (R = s(R, U.props), pc(R, U), R.return = z, R) : (R = P(
        U.type,
        U.key,
        U.props,
        null,
        z.mode,
        Z
      ), pc(R, U), R.return = z, R);
    }
    function C(z, R, U, Z) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== U.containerInfo || R.stateNode.implementation !== U.implementation ? (R = Gt(U, z.mode, Z), R.return = z, R) : (R = s(R, U.children || []), R.return = z, R);
    }
    function X(z, R, U, Z, fe) {
      return R === null || R.tag !== 7 ? (R = Ga(
        U,
        z.mode,
        Z,
        fe
      ), R.return = z, R) : (R = s(R, U), R.return = z, R);
    }
    function J(z, R, U) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = oo(
          "" + R,
          z.mode,
          U
        ), R.return = z, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case M:
            return U = P(
              R.type,
              R.key,
              R.props,
              null,
              z.mode,
              U
            ), pc(U, R), U.return = z, U;
          case ae:
            return R = Gt(
              R,
              z.mode,
              U
            ), R.return = z, R;
          case Ot:
            var Z = R._init;
            return R = Z(R._payload), J(z, R, U);
        }
        if (mt(R) || Re(R))
          return R = Ga(
            R,
            z.mode,
            U,
            null
          ), R.return = z, R;
        if (typeof R.then == "function")
          return J(z, td(R), U);
        if (R.$$typeof === ct)
          return J(
            z,
            wf(z, R),
            U
          );
        jl(z, R);
      }
      return null;
    }
    function x(z, R, U, Z) {
      var fe = R !== null ? R.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return fe !== null ? null : p(z, R, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            return U.key === fe ? S(z, R, U, Z) : null;
          case ae:
            return U.key === fe ? C(z, R, U, Z) : null;
          case Ot:
            return fe = U._init, U = fe(U._payload), x(z, R, U, Z);
        }
        if (mt(U) || Re(U))
          return fe !== null ? null : X(z, R, U, Z, null);
        if (typeof U.then == "function")
          return x(
            z,
            R,
            td(U),
            Z
          );
        if (U.$$typeof === ct)
          return x(
            z,
            R,
            wf(z, U),
            Z
          );
        jl(z, U);
      }
      return null;
    }
    function q(z, R, U, Z, fe) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return z = z.get(U) || null, p(R, z, "" + Z, fe);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case M:
            return z = z.get(
              Z.key === null ? U : Z.key
            ) || null, S(R, z, Z, fe);
          case ae:
            return z = z.get(
              Z.key === null ? U : Z.key
            ) || null, C(R, z, Z, fe);
          case Ot:
            var ke = Z._init;
            return Z = ke(Z._payload), q(
              z,
              R,
              U,
              Z,
              fe
            );
        }
        if (mt(Z) || Re(Z))
          return z = z.get(U) || null, X(R, z, Z, fe, null);
        if (typeof Z.then == "function")
          return q(
            z,
            R,
            U,
            td(Z),
            fe
          );
        if (Z.$$typeof === ct)
          return q(
            z,
            R,
            U,
            wf(R, Z),
            fe
          );
        jl(R, Z);
      }
      return null;
    }
    function ge(z, R, U, Z) {
      for (var fe = null, ke = null, pe = R, Ae = R = 0, bl = null; pe !== null && Ae < U.length; Ae++) {
        pe.index > Ae ? (bl = pe, pe = null) : bl = pe.sibling;
        var ot = x(
          z,
          pe,
          U[Ae],
          Z
        );
        if (ot === null) {
          pe === null && (pe = bl);
          break;
        }
        l && pe && ot.alternate === null && n(z, pe), R = r(ot, R, Ae), ke === null ? fe = ot : ke.sibling = ot, ke = ot, pe = bl;
      }
      if (Ae === U.length)
        return u(z, pe), ft && ut(z, Ae), fe;
      if (pe === null) {
        for (; Ae < U.length; Ae++)
          pe = J(z, U[Ae], Z), pe !== null && (R = r(
            pe,
            R,
            Ae
          ), ke === null ? fe = pe : ke.sibling = pe, ke = pe);
        return ft && ut(z, Ae), fe;
      }
      for (pe = c(pe); Ae < U.length; Ae++)
        bl = q(
          pe,
          z,
          Ae,
          U[Ae],
          Z
        ), bl !== null && (l && bl.alternate !== null && pe.delete(
          bl.key === null ? Ae : bl.key
        ), R = r(
          bl,
          R,
          Ae
        ), ke === null ? fe = bl : ke.sibling = bl, ke = bl);
      return l && pe.forEach(function(Bi) {
        return n(z, Bi);
      }), ft && ut(z, Ae), fe;
    }
    function be(z, R, U, Z) {
      if (U == null) throw Error(_(151));
      for (var fe = null, ke = null, pe = R, Ae = R = 0, bl = null, ot = U.next(); pe !== null && !ot.done; Ae++, ot = U.next()) {
        pe.index > Ae ? (bl = pe, pe = null) : bl = pe.sibling;
        var Bi = x(z, pe, ot.value, Z);
        if (Bi === null) {
          pe === null && (pe = bl);
          break;
        }
        l && pe && Bi.alternate === null && n(z, pe), R = r(Bi, R, Ae), ke === null ? fe = Bi : ke.sibling = Bi, ke = Bi, pe = bl;
      }
      if (ot.done)
        return u(z, pe), ft && ut(z, Ae), fe;
      if (pe === null) {
        for (; !ot.done; Ae++, ot = U.next())
          ot = J(z, ot.value, Z), ot !== null && (R = r(ot, R, Ae), ke === null ? fe = ot : ke.sibling = ot, ke = ot);
        return ft && ut(z, Ae), fe;
      }
      for (pe = c(pe); !ot.done; Ae++, ot = U.next())
        ot = q(pe, z, Ae, ot.value, Z), ot !== null && (l && ot.alternate !== null && pe.delete(ot.key === null ? Ae : ot.key), R = r(ot, R, Ae), ke === null ? fe = ot : ke.sibling = ot, ke = ot);
      return l && pe.forEach(function(Hg) {
        return n(z, Hg);
      }), ft && ut(z, Ae), fe;
    }
    function dt(z, R, U, Z) {
      if (typeof U == "object" && U !== null && U.type === Ue && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            e: {
              for (var fe = U.key; R !== null; ) {
                if (R.key === fe) {
                  if (fe = U.type, fe === Ue) {
                    if (R.tag === 7) {
                      u(
                        z,
                        R.sibling
                      ), Z = s(
                        R,
                        U.props.children
                      ), Z.return = z, z = Z;
                      break e;
                    }
                  } else if (R.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === Ot && My(fe) === R.type) {
                    u(
                      z,
                      R.sibling
                    ), Z = s(R, U.props), pc(Z, U), Z.return = z, z = Z;
                    break e;
                  }
                  u(z, R);
                  break;
                } else n(z, R);
                R = R.sibling;
              }
              U.type === Ue ? (Z = Ga(
                U.props.children,
                z.mode,
                Z,
                U.key
              ), Z.return = z, z = Z) : (Z = P(
                U.type,
                U.key,
                U.props,
                null,
                z.mode,
                Z
              ), pc(Z, U), Z.return = z, z = Z);
            }
            return y(z);
          case ae:
            e: {
              for (fe = U.key; R !== null; ) {
                if (R.key === fe)
                  if (R.tag === 4 && R.stateNode.containerInfo === U.containerInfo && R.stateNode.implementation === U.implementation) {
                    u(
                      z,
                      R.sibling
                    ), Z = s(R, U.children || []), Z.return = z, z = Z;
                    break e;
                  } else {
                    u(z, R);
                    break;
                  }
                else n(z, R);
                R = R.sibling;
              }
              Z = Gt(U, z.mode, Z), Z.return = z, z = Z;
            }
            return y(z);
          case Ot:
            return fe = U._init, U = fe(U._payload), dt(
              z,
              R,
              U,
              Z
            );
        }
        if (mt(U))
          return ge(
            z,
            R,
            U,
            Z
          );
        if (Re(U)) {
          if (fe = Re(U), typeof fe != "function") throw Error(_(150));
          return U = fe.call(U), be(
            z,
            R,
            U,
            Z
          );
        }
        if (typeof U.then == "function")
          return dt(
            z,
            R,
            td(U),
            Z
          );
        if (U.$$typeof === ct)
          return dt(
            z,
            R,
            wf(z, U),
            Z
          );
        jl(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, R !== null && R.tag === 6 ? (u(z, R.sibling), Z = s(R, U), Z.return = z, z = Z) : (u(z, R), Z = oo(U, z.mode, Z), Z.return = z, z = Z), y(z)) : u(z, R);
    }
    return function(z, R, U, Z) {
      try {
        Eo = 0;
        var fe = dt(
          z,
          R,
          U,
          Z
        );
        return mc = null, fe;
      } catch (pe) {
        if (pe === yi || pe === Lf) throw pe;
        var ke = ia(29, pe, null, z.mode);
        return ke.lanes = Z, ke.return = z, ke;
      } finally {
      }
    };
  }
  var vc = sa(!0), Xn = sa(!1), Da = N(null), Gl = null;
  function _u(l) {
    var n = l.alternate;
    F(Et, Et.current & 1), F(Da, l), Gl === null && (n === null || sc.current !== null || n.memoizedState !== null) && (Gl = l);
  }
  function Qn(l) {
    if (l.tag === 22) {
      if (F(Et, Et.current), F(Da, l), Gl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Gl = l);
      }
    } else Zn();
  }
  function Zn() {
    F(Et, Et.current), F(Da, Da.current);
  }
  function vn(l) {
    Q(Da), Gl === l && (Gl = null), Q(Et);
  }
  var Et = N(0);
  function ls(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Os(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function gi(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : oe({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ld = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = za(), s = oa(c);
      s.payload = n, u != null && (s.callback = u), n = Gn(l, s, c), n !== null && (Ma(n, l, c), fc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = za(), s = oa(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Gn(l, s, c), n !== null && (Ma(n, l, c), fc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = za(), c = oa(u);
      c.tag = 2, n != null && (c.callback = n), n = Gn(l, c, u), n !== null && (Ma(n, l, u), fc(n, l, u));
    }
  };
  function Ao(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !ui(u, c) || !ui(s, r) : !0;
  }
  function gc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && ld.enqueueReplaceState(n, n.state, null);
  }
  function bi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = oe({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var as = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Ro(l) {
    as(l);
  }
  function Uy(l) {
    console.error(l);
  }
  function ns(l) {
    as(l);
  }
  function us(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Cy(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function _y(l, n, u) {
    return u = oa(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      us(l, n);
    }, u;
  }
  function Hy(l) {
    return l = oa(l), l.tag = 3, l;
  }
  function ra(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Cy(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      Cy(n, u, c), typeof s != "function" && (Ai === null ? Ai = /* @__PURE__ */ new Set([this]) : Ai.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function Fp(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && yo(
        n,
        u,
        s,
        !0
      ), u = Da.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Gl === null ? zc() : u.alternate === null && kt === 0 && (kt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === _r ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Md(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === _r ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Md(l, c, s)), !1;
        }
        throw Error(_(435, u.tag));
      }
      return Md(l, c, s), zc(), !1;
    }
    if (ft)
      return n = Da.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== ic && (l = Error(_(422), { cause: c }), ho(Aa(l, u)))) : (c !== ic && (n = Error(_(423), {
        cause: c
      }), ho(
        Aa(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Aa(c, u), s = _y(
        l.stateNode,
        c,
        s
      ), fy(l, s), kt !== 4 && (kt = 2)), !1;
    var r = Error(_(520), { cause: c });
    if (r = Aa(r, u), _o === null ? _o = [r] : _o.push(r), kt !== 4 && (kt = 2), n === null) return !0;
    c = Aa(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = _y(u.stateNode, c, l), fy(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Ai === null || !Ai.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Hy(s), ra(
              s,
              l,
              u,
              c
            ), fy(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Zt = Error(_(461)), fl = !1;
  function vl(l, n, u, c) {
    n.child = l === null ? Xn(n, null, u, c) : vc(
      n,
      l.child,
      u,
      c
    );
  }
  function Ip(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var p in c)
        p !== "ref" && (y[p] = c[p]);
    } else y = c;
    return di(n), c = Yr(
      l,
      n,
      u,
      y,
      r,
      s
    ), p = wr(), l !== null && !fl ? (So(l, n, s), Kn(l, n, s)) : (ft && p && uc(n), n.flags |= 1, vl(l, n, c, s), n.child);
  }
  function Hu(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !xf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, bc(
        l,
        n,
        r,
        c,
        s
      )) : (l = P(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !dd(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ui, u(y, c) && l.ref === n.ref)
        return Kn(l, n, s);
    }
    return n.flags |= 1, l = dn(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function bc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ui(r, c) && l.ref === n.ref)
        if (fl = !1, n.pendingProps = c = r, dd(l, s))
          (l.flags & 131072) !== 0 && (fl = !0);
        else
          return n.lanes = l.lanes, Kn(l, n, s);
    }
    return nd(
      l,
      n,
      u,
      c,
      s
    );
  }
  function ad(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return Sc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && cc(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? pl(n, r) : go(), Qn(n);
      else
        return n.lanes = n.childLanes = 536870912, Sc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (cc(n, r.cachePool), pl(n, r), Zn(), n.memoizedState = null) : (l !== null && cc(n, null), go(), Zn());
    return vl(l, n, s, u), n.child;
  }
  function Sc(l, n, u, c) {
    var s = Gf();
    return s = s === null ? null : { parent: cl._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && cc(n, null), go(), Qn(n), l !== null && yo(l, n, c, !0), null;
  }
  function is(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(_(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function nd(l, n, u, c, s) {
    return di(n), u = Yr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = wr(), l !== null && !fl ? (So(l, n, s), Kn(l, n, s)) : (ft && c && uc(n), n.flags |= 1, vl(l, n, u, s), n.child);
  }
  function xy(l, n, u, c, s, r) {
    return di(n), n.updateQueue = null, u = dy(
      n,
      c,
      u,
      s
    ), pi(l), c = wr(), l !== null && !fl ? (So(l, n, r), Kn(l, n, r)) : (ft && c && uc(n), n.flags |= 1, vl(l, n, u, r), n.child);
  }
  function ud(l, n, u, c, s) {
    if (di(n), n.stateNode === null) {
      var r = co, y = u.contextType;
      typeof y == "object" && y !== null && (r = ml(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ld, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, xr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? ml(y) : co, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (gi(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && ld.enqueueReplaceState(r, r.state, null), Mu(n, c, r, s), vo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var p = n.memoizedProps, S = bi(u, p);
      r.props = S;
      var C = r.context, X = u.contextType;
      y = co, typeof X == "object" && X !== null && (y = ml(X));
      var J = u.getDerivedStateFromProps;
      X = typeof J == "function" || typeof r.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, X || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (p || C !== y) && gc(
        n,
        r,
        c,
        y
      ), jn = !1;
      var x = n.memoizedState;
      r.state = x, Mu(n, c, r, s), vo(), C = n.memoizedState, p || x !== C || jn ? (typeof J == "function" && (gi(
        n,
        u,
        J,
        c
      ), C = n.memoizedState), (S = jn || Ao(
        n,
        u,
        S,
        c,
        x,
        C,
        y
      )) ? (X || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = C), r.props = c, r.state = C, r.context = y, c = S) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Nr(l, n), y = n.memoizedProps, X = bi(u, y), r.props = X, J = n.pendingProps, x = r.context, C = u.contextType, S = co, typeof C == "object" && C !== null && (S = ml(C)), p = u.getDerivedStateFromProps, (C = typeof p == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== J || x !== S) && gc(
        n,
        r,
        c,
        S
      ), jn = !1, x = n.memoizedState, r.state = x, Mu(n, c, r, s), vo();
      var q = n.memoizedState;
      y !== J || x !== q || jn || l !== null && l.dependencies !== null && Yf(l.dependencies) ? (typeof p == "function" && (gi(
        n,
        u,
        p,
        c
      ), q = n.memoizedState), (X = jn || Ao(
        n,
        u,
        X,
        c,
        x,
        q,
        S
      ) || l !== null && l.dependencies !== null && Yf(l.dependencies)) ? (C || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, q, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        q,
        S
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = q), r.props = c, r.state = q, r.context = S, c = X) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, is(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = vc(
      n,
      l.child,
      null,
      s
    ), n.child = vc(
      n,
      null,
      u,
      s
    )) : vl(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Kn(
      l,
      n,
      s
    ), l;
  }
  function id(l, n, u, c) {
    return ro(), n.flags |= 256, vl(l, n, u, c), n.child;
  }
  var cd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ny(l) {
    return { baseLanes: l, cachePool: Ur() };
  }
  function By(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= $a), l;
  }
  function qy(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (Et.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ft) {
        if (s ? _u(n) : Zn(), ft) {
          var p = st, S;
          if (S = p) {
            e: {
              for (S = p, p = Xa; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = bn(
                  S.nextSibling
                ), S === null) {
                  p = null;
                  break e;
                }
              }
              p = S;
            }
            p !== null ? (n.memoizedState = {
              dehydrated: p,
              treeContext: Ru !== null ? { id: hn, overflow: Xt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = ia(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, Ft = n, st = null, S = !0) : S = !1;
          }
          S || Ou(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Os(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        vn(n);
      }
      return p = c.children, c = c.fallback, s ? (Zn(), s = n.mode, p = fd(
        { mode: "hidden", children: p },
        s
      ), c = Ga(
        c,
        s,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, s = n.child, s.memoizedState = Ny(u), s.childLanes = By(
        l,
        y,
        u
      ), n.memoizedState = cd, c) : (_u(n), od(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (r)
        n.flags & 256 ? (_u(n), n.flags &= -257, n = Si(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Zn(), n.child = l.child, n.flags |= 128, n = null) : (Zn(), s = c.fallback, p = n.mode, c = fd(
          { mode: "visible", children: c.children },
          p
        ), s = Ga(
          s,
          p,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, vc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Ny(u), c.childLanes = By(
          l,
          y,
          u
        ), n.memoizedState = cd, n = s);
      else if (_u(n), Os(p)) {
        if (y = p.nextSibling && p.nextSibling.dataset, y) var C = y.dgst;
        y = C, c = Error(_(419)), c.stack = "", c.digest = y, ho({ value: c, source: null, stack: null }), n = Si(
          l,
          n,
          u
        );
      } else if (fl || yo(l, n, u, !1), y = (u & l.childLanes) !== 0, fl || y) {
        if (y = Dt, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : el(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, Nn(l, c), Ma(y, l, c), Zt;
        p.data === "$?" || zc(), n = Si(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, st = bn(
          p.nextSibling
        ), Ft = n, ft = !0, Va = null, Xa = !1, l !== null && (La[ca++] = hn, La[ca++] = Xt, La[ca++] = Ru, hn = l.id, Xt = l.overflow, Ru = n), n = od(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Zn(), s = c.fallback, p = n.mode, S = l.child, C = S.sibling, c = dn(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? s = dn(C, s) : (s = Ga(
      s,
      p,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, p = l.child.memoizedState, p === null ? p = Ny(u) : (S = p.cachePool, S !== null ? (C = cl._currentValue, S = S.parent !== C ? { parent: C, pool: C } : S) : S = Ur(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), s.memoizedState = p, s.childLanes = By(
      l,
      y,
      u
    ), n.memoizedState = cd, c) : (_u(n), u = l.child, l = u.sibling, u = dn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function od(l, n) {
    return n = fd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function fd(l, n) {
    return l = ia(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function Si(l, n, u) {
    return vc(n, l.child, null, u), l = od(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function cs(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Rr(l.return, n, u);
  }
  function sd(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function rd(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (vl(l, n, c.children, u), c = Et.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && cs(l, u, n);
          else if (l.tag === 19)
            cs(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (F(Et, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && ls(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), sd(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && ls(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        sd(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        sd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Kn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Bu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (yo(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(_(153));
    if (n.child !== null) {
      for (l = n.child, u = dn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = dn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function dd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yf(l)));
  }
  function Pp(l, n, u) {
    switch (n.tag) {
      case 3:
        Me(n, n.stateNode.containerInfo), zu(n, cl, l.memoizedState.cache), ro();
        break;
      case 27:
      case 5:
        la(n);
        break;
      case 4:
        Me(n, n.stateNode.containerInfo);
        break;
      case 10:
        zu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (_u(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? qy(l, n, u) : (_u(n), l = Kn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        _u(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (yo(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return rd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F(Et, Et.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, ad(l, n, u);
      case 24:
        zu(n, cl, l.memoizedState.cache);
    }
    return Kn(l, n, u);
  }
  function ev(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        fl = !0;
      else {
        if (!dd(l, u) && (n.flags & 128) === 0)
          return fl = !1, Pp(
            l,
            n,
            u
          );
        fl = (l.flags & 131072) !== 0;
      }
    else
      fl = !1, ft && (n.flags & 1048576) !== 0 && Ar(n, fo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            xf(c) ? (l = bi(c, l), n.tag = 1, n = ud(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = nd(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === wt) {
                n.tag = 11, n = Ip(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Fe) {
                n.tag = 14, n = Hu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = jt(c) || c, Error(_(306, n, ""));
          }
        }
        return n;
      case 0:
        return nd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = bi(
          c,
          n.pendingProps
        ), ud(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Me(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(_(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Nr(l, n), Mu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, zu(n, cl, c), c !== r.cache && ny(
            n,
            [cl],
            u,
            !0
          ), vo(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = id(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Aa(
                Error(_(424)),
                n
              ), ho(s), n = id(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (st = bn(l.firstChild), Ft = n, ft = !0, Va = null, Xa = !0, u = Xn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (ro(), c === s) {
              n = Kn(
                l,
                n,
                u
              );
              break e;
            }
            vl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return is(l, n), l === null ? (u = pv(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ft || (u = n.type, l = n.pendingProps, c = Fa(
          ue.current
        ).createElement(u), c[yl] = n, c[Kl] = l, De(c, u, l), il(c), n.stateNode = c) : n.memoizedState = pv(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return la(n), l === null && ft && (c = n.stateNode = ie(
          n.type,
          n.pendingProps,
          ue.current
        ), Ft = n, Xa = !0, s = st, Ui(n.type) ? (Ci = s, st = bn(
          c.firstChild
        )) : st = s), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), is(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ft && ((s = c = st) && (c = Xo(
          c,
          n.type,
          n.pendingProps,
          Xa
        ), c !== null ? (n.stateNode = c, Ft = n, st = bn(
          c.firstChild
        ), Xa = !1, s = !0) : s = !1), s || Ou(n)), la(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, tu(s, r) ? c = null : y !== null && tu(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Yr(
          l,
          n,
          Vp,
          null,
          null,
          u
        ), va._currentValue = s), is(l, n), vl(l, n, c, u), n.child;
      case 6:
        return l === null && ft && ((l = u = st) && (u = Ug(
          u,
          n.pendingProps,
          Xa
        ), u !== null ? (n.stateNode = u, Ft = n, st = null, l = !0) : l = !1), l || Ou(n)), null;
      case 13:
        return qy(l, n, u);
      case 4:
        return Me(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = vc(
          n,
          null,
          c,
          u
        ) : vl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Ip(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return vl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, zu(n, n.type, c.value), vl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, di(n), s = ml(s), c = c(s), n.flags |= 1, vl(l, n, c, u), n.child;
      case 14:
        return Hu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return bc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return rd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = fd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = dn(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return ad(l, n, u);
      case 24:
        return di(n), c = ml(cl), l === null ? (s = Gf(), s === null && (s = Dt, r = po(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, xr(n), zu(n, cl, s)) : ((l.lanes & u) !== 0 && (Nr(l, n), Mu(n, null, null, u), vo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), zu(n, cl, c)) : (c = r.cache, zu(n, cl, c), c !== s.cache && ny(
          n,
          [cl],
          u,
          !0
        ))), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(_(156, n.tag));
  }
  function Jn(l) {
    l.flags |= 4;
  }
  function Oo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !bm(n)) {
      if (n = Da.current, n !== null && ((et & 4194048) === et ? Gl !== null : (et & 62914560) !== et && (et & 536870912) === 0 || n !== Gl))
        throw oc = _r, Cr;
      l.flags |= 8192;
    }
  }
  function os(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? le() : 536870912, l.lanes |= n, Co |= n);
  }
  function Do(l, n) {
    if (!ft)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ee(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Yy(l, n, u) {
    var c = n.pendingProps;
    switch (Bn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(n), null;
      case 1:
        return Ee(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), qn(cl), xt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (so(n) ? Jn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ay())), Ee(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Jn(n), u !== null ? (Ee(n), Oo(n, u)) : (Ee(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Jn(n), Ee(n), Oo(n, u)) : (Ee(n), n.flags &= -16777217) : (l.memoizedProps !== c && Jn(n), Ee(n), n.flags &= -16777217), null;
      case 27:
        Rn(n), u = ue.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(_(166));
            return Ee(n), null;
          }
          l = ne.current, so(n) ? Bf(n) : (l = ie(s, c, u), n.stateNode = l, Jn(n));
        }
        return Ee(n), null;
      case 5:
        if (Rn(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(_(166));
            return Ee(n), null;
          }
          if (l = ne.current, so(n))
            Bf(n);
          else {
            switch (s = Fa(
              ue.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[yl] = n, l[Kl] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (De(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Jn(n);
          }
        }
        return Ee(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(_(166));
          if (l = ue.current, so(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Ft, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[yl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || mm(l.nodeValue, u)), l || Ou(n);
          } else
            l = Fa(l).createTextNode(
              c
            ), l[yl] = n, n.stateNode = l;
        }
        return Ee(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = so(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(_(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(_(317));
              s[yl] = n;
            } else
              ro(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ee(n), s = !1;
          } else
            s = ay(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (vn(n), n) : (vn(n), null);
        }
        if (vn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), os(n, n.updateQueue), Ee(n), null;
      case 4:
        return xt(), l === null && hm(n.stateNode.containerInfo), Ee(n), null;
      case 10:
        return qn(n.type), Ee(n), null;
      case 19:
        if (Q(Et), s = n.memoizedState, s === null) return Ee(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) Do(s, !1);
          else {
            if (kt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = ls(l), r !== null) {
                  for (n.flags |= 128, Do(s, !1), l = r.updateQueue, n.updateQueue = l, os(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Je(u, l), u = u.sibling;
                  return F(
                    Et,
                    Et.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && hl() > Td && (n.flags |= 128, c = !0, Do(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = ls(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, os(n, l), Do(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !ft)
                return Ee(n), null;
            } else
              2 * hl() - s.renderingStartTime > Td && u !== 536870912 && (n.flags |= 128, c = !0, Do(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = hl(), n.sibling = null, l = Et.current, F(Et, c ? l & 1 | 2 : l & 1), n) : (Ee(n), null);
      case 22:
      case 23:
        return vn(n), bo(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ee(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ee(n), u = n.updateQueue, u !== null && os(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && Q(wn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), qn(cl), Ee(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(_(156, n.tag));
  }
  function Tg(l, n) {
    switch (Bn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return qn(cl), xt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Rn(n), null;
      case 13:
        if (vn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(_(340));
          ro();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return Q(Et), null;
      case 4:
        return xt(), null;
      case 10:
        return qn(n.type), null;
      case 22:
      case 23:
        return vn(n), bo(), l !== null && Q(wn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return qn(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wy(l, n) {
    switch (Bn(n), n.tag) {
      case 3:
        qn(cl), xt();
        break;
      case 26:
      case 27:
      case 5:
        Rn(n);
        break;
      case 4:
        xt();
        break;
      case 13:
        vn(n);
        break;
      case 19:
        Q(Et);
        break;
      case 10:
        qn(n.type);
        break;
      case 22:
      case 23:
        vn(n), bo(), l !== null && Q(wn);
        break;
      case 24:
        qn(cl);
    }
  }
  function fs(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (p) {
      bt(n, n.return, p);
    }
  }
  function Ti(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, p = y.destroy;
            if (p !== void 0) {
              y.destroy = void 0, s = n;
              var S = u, C = p;
              try {
                C();
              } catch (X) {
                bt(
                  s,
                  S,
                  X
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (X) {
      bt(n, n.return, X);
    }
  }
  function hd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Xf(n, u);
      } catch (c) {
        bt(l, l.return, c);
      }
    }
  }
  function jy(l, n, u) {
    u.props = bi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      bt(l, n, c);
    }
  }
  function zo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      bt(l, n, s);
    }
  }
  function gn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          bt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          bt(l, n, s);
        }
      else u.current = null;
  }
  function Mo(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      bt(l, l.return, s);
    }
  }
  function Gy(l, n, u) {
    try {
      var c = l.stateNode;
      Dg(c, l.type, u, n), c[Kl] = n;
    } catch (s) {
      bt(l, l.return, s);
    }
  }
  function tv(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ui(l.type) || l.tag === 4;
  }
  function Ja(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || tv(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ui(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = xd));
    else if (c !== 4 && (c === 27 && Ui(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Tc(l, n, u), l = l.sibling; l !== null; )
        Tc(l, n, u), l = l.sibling;
  }
  function yd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Ui(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (yd(l, n, u), l = l.sibling; l !== null; )
        yd(l, n, u), l = l.sibling;
  }
  function md(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      De(n, c, u), n[yl] = l, n[Kl] = u;
    } catch (r) {
      bt(l, l.return, r);
    }
  }
  var kn = !1, Kt = !1, pd = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, sl = null;
  function Ly(l, n) {
    if (l = l.containerInfo, Es = Ms, l = Wh(l), _f(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, p = -1, S = -1, C = 0, X = 0, J = l, x = null;
            t: for (; ; ) {
              for (var q; J !== u || s !== 0 && J.nodeType !== 3 || (p = y + s), J !== r || c !== 0 && J.nodeType !== 3 || (S = y + c), J.nodeType === 3 && (y += J.nodeValue.length), (q = J.firstChild) !== null; )
                x = J, J = q;
              for (; ; ) {
                if (J === l) break t;
                if (x === u && ++C === s && (p = y), x === r && ++X === c && (S = y), (q = J.nextSibling) !== null) break;
                J = x, x = J.parentNode;
              }
              J = q;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (As = { focusedElem: l, selectionRange: u }, Ms = !1, sl = n; sl !== null; )
      if (n = sl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, sl = l;
      else
        for (; sl !== null; ) {
          switch (n = sl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ge = bi(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (be) {
                  bt(
                    u,
                    u.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Rs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rs(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(_(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, sl = l;
            break;
          }
          sl = n.return;
        }
  }
  function Vy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Wn(l, u), c & 4 && fs(5, u);
        break;
      case 1:
        if (Wn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              bt(u, u.return, y);
            }
          else {
            var s = bi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              bt(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && hd(u), c & 512 && zo(u, u.return);
        break;
      case 3:
        if (Wn(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Xf(l, n);
          } catch (y) {
            bt(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && md(u);
      case 26:
      case 5:
        Wn(l, u), n === null && c & 4 && Mo(u), c & 512 && zo(u, u.return);
        break;
      case 12:
        Wn(l, u);
        break;
      case 13:
        Wn(l, u), c & 4 && gd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Eg.bind(
          null,
          u
        ), Cg(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || kn, !c) {
          n = n !== null && n.memoizedState !== null || Kt, s = kn;
          var r = Kt;
          kn = c, (Kt = n) && !r ? Ei(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Wn(l, u), kn = s, Kt = r;
        }
        break;
      case 30:
        break;
      default:
        Wn(l, u);
    }
  }
  function Xy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Xy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && mf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Nt = null, Ml = !1;
  function $n(l, n, u) {
    for (u = u.child; u !== null; )
      Ie(l, n, u), u = u.sibling;
  }
  function Ie(l, n, u) {
    if (El && typeof El.onCommitFiberUnmount == "function")
      try {
        El.onCommitFiberUnmount(Wu, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Kt || gn(u, n), $n(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Kt || gn(u, n);
        var c = Nt, s = Ml;
        Ui(u.type) && (Nt = u.stateNode, Ml = !1), $n(
          l,
          n,
          u
        ), ma(u.stateNode), Nt = c, Ml = s;
        break;
      case 5:
        Kt || gn(u, n);
      case 6:
        if (c = Nt, s = Ml, Nt = null, $n(
          l,
          n,
          u
        ), Nt = c, Ml = s, Nt !== null)
          if (Ml)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(u.stateNode);
            } catch (r) {
              bt(
                u,
                n,
                r
              );
            }
          else
            try {
              Nt.removeChild(u.stateNode);
            } catch (r) {
              bt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Nt !== null && (Ml ? (l = Nt, Bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), nu(l)) : Bd(Nt, u.stateNode));
        break;
      case 4:
        c = Nt, s = Ml, Nt = u.stateNode.containerInfo, Ml = !0, $n(
          l,
          n,
          u
        ), Nt = c, Ml = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Kt || Ti(2, u, n), Kt || Ti(4, u, n), $n(
          l,
          n,
          u
        );
        break;
      case 1:
        Kt || (gn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && jy(
          u,
          n,
          c
        )), $n(
          l,
          n,
          u
        );
        break;
      case 21:
        $n(
          l,
          n,
          u
        );
        break;
      case 22:
        Kt = (c = Kt) || u.memoizedState !== null, $n(
          l,
          n,
          u
        ), Kt = c;
        break;
      default:
        $n(
          l,
          n,
          u
        );
    }
  }
  function gd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        nu(l);
      } catch (u) {
        bt(n, n.return, u);
      }
  }
  function Qy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new vd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new vd()), n;
      default:
        throw Error(_(435, l.tag));
    }
  }
  function bd(l, n) {
    var u = Qy(l);
    n.forEach(function(c) {
      var s = Ag.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function $l(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, p = y;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Ui(p.type)) {
                Nt = p.stateNode, Ml = !1;
                break e;
              }
              break;
            case 5:
              Nt = p.stateNode, Ml = !1;
              break e;
            case 3:
            case 4:
              Nt = p.stateNode.containerInfo, Ml = !0;
              break e;
          }
          p = p.return;
        }
        if (Nt === null) throw Error(_(160));
        Ie(r, y, s), Nt = null, Ml = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        ss(n, l), n = n.sibling;
  }
  var Wl = null;
  function ss(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(n, l), gl(l), c & 4 && (Ti(3, l, l.return), fs(3, l), Ti(5, l, l.return));
        break;
      case 1:
        $l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), c & 64 && kn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Wl;
        if ($l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[re] || r[yl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), De(r, c, u), r[yl] = l, il(r), c = r;
                      break e;
                    case "link":
                      var y = vm(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var p = 0; p < y.length; p++)
                          if (r = y[p], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), De(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = vm(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < y.length; p++)
                          if (r = y[p], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), De(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(_(468, c));
                  }
                  r[yl] = l, il(r), c = r;
                }
                l.stateNode = c;
              } else
                gm(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = gv(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? gm(
              s,
              l.type,
              l.stateNode
            ) : gv(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Gy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        $l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), u !== null && c & 4 && Gy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if ($l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Ic(s, "");
          } catch (q) {
            bt(l, l.return, q);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Gy(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (pd = !0);
        break;
      case 6:
        if ($l(n, l), gl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(_(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (q) {
            bt(l, l.return, q);
          }
        }
        break;
      case 3:
        if (xi = null, s = Wl, Wl = qd(n.containerInfo), $l(n, l), Wl = s, gl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            nu(n.containerInfo);
          } catch (q) {
            bt(l, l.return, q);
          }
        pd && (pd = !1, Zy(l));
        break;
      case 4:
        c = Wl, Wl = qd(
          l.stateNode.containerInfo
        ), $l(n, l), gl(l), Wl = c;
        break;
      case 12:
        $l(n, l), gl(l);
        break;
      case 13:
        $l(n, l), gl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Py = hl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, bd(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, C = kn, X = Kt;
        if (kn = C || s, Kt = X || S, $l(n, l), Kt = X, kn = C, gl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || S || kn || Kt || Bt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (r = S.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    p = S.stateNode;
                    var J = S.memoizedProps.style, x = J != null && J.hasOwnProperty("display") ? J.display : null;
                    p.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (q) {
                  bt(S, S.return, q);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (q) {
                  bt(S, S.return, q);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, bd(l, u))));
        break;
      case 19:
        $l(n, l), gl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, bd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(n, l), gl(l);
    }
  }
  function gl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (tv(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(_(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ja(l);
            yd(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Ic(y, ""), u.flags &= -33);
            var p = Ja(l);
            yd(l, p, y);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, C = Ja(l);
            Tc(
              l,
              C,
              S
            );
            break;
          default:
            throw Error(_(161));
        }
      } catch (X) {
        bt(l, l.return, X);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Wn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Vy(l, n.alternate, n), n = n.sibling;
  }
  function Bt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ti(4, n, n.return), Bt(n);
          break;
        case 1:
          gn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && jy(
            n,
            n.return,
            u
          ), Bt(n);
          break;
        case 27:
          ma(n.stateNode);
        case 26:
        case 5:
          gn(n, n.return), Bt(n);
          break;
        case 22:
          n.memoizedState === null && Bt(n);
          break;
        case 30:
          Bt(n);
          break;
        default:
          Bt(n);
      }
      l = l.sibling;
    }
  }
  function Ei(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ei(
            s,
            r,
            u
          ), fs(4, r);
          break;
        case 1:
          if (Ei(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (C) {
              bt(c, c.return, C);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var p = c.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Br(S[s], p);
            } catch (C) {
              bt(c, c.return, C);
            }
          }
          u && y & 64 && hd(r), zo(r, r.return);
          break;
        case 27:
          md(r);
        case 26:
        case 5:
          Ei(
            s,
            r,
            u
          ), u && c === null && y & 4 && Mo(r), zo(r, r.return);
          break;
        case 12:
          Ei(
            s,
            r,
            u
          );
          break;
        case 13:
          Ei(
            s,
            r,
            u
          ), u && y & 4 && gd(s, r);
          break;
        case 22:
          r.memoizedState === null && Ei(
            s,
            r,
            u
          ), zo(r, r.return);
          break;
        case 30:
          break;
        default:
          Ei(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function ka(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yn(u));
  }
  function Sd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l));
  }
  function Ul(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ky(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Ky(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          l,
          n,
          u,
          c
        ), s & 2048 && fs(9, n);
        break;
      case 1:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Ul(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l)));
        break;
      case 12:
        if (s & 2048) {
          Ul(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, p = r.onPostCommit;
            typeof p == "function" && p(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            bt(n, n.return, S);
          }
        } else
          Ul(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : rt(l, n) : r._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, xu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && ka(y, n);
        break;
      case 24:
        Ul(
          l,
          n,
          u,
          c
        ), s & 2048 && Sd(n.alternate, n);
        break;
      default:
        Ul(
          l,
          n,
          u,
          c
        );
    }
  }
  function xu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, p = u, S = c, C = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          xu(
            r,
            y,
            p,
            S,
            s
          ), fs(8, y);
          break;
        case 23:
          break;
        case 22:
          var X = y.stateNode;
          y.memoizedState !== null ? X._visibility & 2 ? xu(
            r,
            y,
            p,
            S,
            s
          ) : rt(
            r,
            y
          ) : (X._visibility |= 2, xu(
            r,
            y,
            p,
            S,
            s
          )), s && C & 2048 && ka(
            y.alternate,
            y
          );
          break;
        case 24:
          xu(
            r,
            y,
            p,
            S,
            s
          ), s && C & 2048 && Sd(y.alternate, y);
          break;
        default:
          xu(
            r,
            y,
            p,
            S,
            s
          );
      }
      n = n.sibling;
    }
  }
  function rt(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            rt(u, c), s & 2048 && ka(
              c.alternate,
              c
            );
            break;
          case 24:
            rt(u, c), s & 2048 && Sd(c.alternate, c);
            break;
          default:
            rt(u, c);
        }
        n = n.sibling;
      }
  }
  var Ec = 8192;
  function Jt(l) {
    if (l.subtreeFlags & Ec)
      for (l = l.child; l !== null; )
        lv(l), l = l.sibling;
  }
  function lv(l) {
    switch (l.tag) {
      case 26:
        Jt(l), l.flags & Ec && l.memoizedState !== null && Tv(
          Wl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Jt(l);
        break;
      case 3:
      case 4:
        var n = Wl;
        Wl = qd(l.stateNode.containerInfo), Jt(l), Wl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Ec, Ec = 16777216, Jt(l), Ec = n) : Jt(l));
        break;
      default:
        Jt(l);
    }
  }
  function Jy(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Ac(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          sl = c, $y(
            c,
            l
          );
        }
      Jy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ky(l), l = l.sibling;
  }
  function ky(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ac(l), l.flags & 2048 && Ti(9, l, l.return);
        break;
      case 3:
        Ac(l);
        break;
      case 12:
        Ac(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Fl(l)) : Ac(l);
        break;
      default:
        Ac(l);
    }
  }
  function Fl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          sl = c, $y(
            c,
            l
          );
        }
      Jy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Ti(8, n, n.return), Fl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Fl(n));
          break;
        default:
          Fl(n);
      }
      l = l.sibling;
    }
  }
  function $y(l, n) {
    for (; sl !== null; ) {
      var u = sl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ti(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Yn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, sl = c;
      else
        e: for (u = l; sl !== null; ) {
          c = sl;
          var s = c.sibling, r = c.return;
          if (Xy(c), c === u) {
            sl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, sl = s;
            break e;
          }
          sl = r;
        }
    }
  }
  var Wy = {
    getCacheForType: function(l) {
      var n = ml(cl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, av = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, Dt = null, Pe = null, et = 0, gt = 0, da = null, Fn = !1, Uo = !1, Fy = !1, Nu = 0, kt = 0, Bu = 0, Rc = 0, In = 0, $a = 0, Co = 0, _o = null, ha = null, Iy = !1, Py = 0, Td = 1 / 0, Ho = null, Ai = null, Cl = 0, Pn = null, xo = null, _l = 0, Ed = 0, Ad = null, em = null, No = 0, tm = null;
  function za() {
    if ((vt & 2) !== 0 && et !== 0)
      return et & -et;
    if (O.T !== null) {
      var l = Qa;
      return l !== 0 ? l : Mc();
    }
    return tr();
  }
  function lm() {
    $a === 0 && ($a = (et & 536870912) === 0 || ft ? ee() : 536870912);
    var l = Da.current;
    return l !== null && (l.flags |= 32), $a;
  }
  function Ma(l, n, u) {
    (l === Dt && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null) && (eu(l, 0), qu(
      l,
      et,
      $a,
      !1
    )), _e(l, u), ((vt & 2) === 0 || l !== Dt) && (l === Dt && ((vt & 2) === 0 && (Rc |= u), kt === 4 && qu(
      l,
      et,
      $a,
      !1
    )), ya(l));
  }
  function Bo(l, n, u) {
    if ((vt & 6) !== 0) throw Error(_(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || m(l, n), s = c ? nm(l, n) : Rd(l, n, !0), r = c;
    do {
      if (s === 0) {
        Uo && !c && qu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !nv(u)) {
          s = Rd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var p = l;
              s = _o;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (eu(p, y).flags |= 256), y = Rd(
                p,
                y,
                !1
              ), y !== 2) {
                if (Fy && !S) {
                  p.errorRecoveryDisabledLanes |= r, Rc |= r, s = 4;
                  break e;
                }
                r = ha, ha = s, r !== null && (ha === null ? ha = r : ha.push.apply(
                  ha,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          eu(l, 0), qu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(_(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              qu(
                c,
                n,
                $a,
                !Fn
              );
              break e;
            case 2:
              ha = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(_(329));
          }
          if ((n & 62914560) === n && (s = Py + 300 - hl(), 10 < s)) {
            if (qu(
              c,
              n,
              $a,
              !Fn
            ), an(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Nd(
              rs.bind(
                null,
                c,
                u,
                ha,
                Ho,
                Iy,
                n,
                $a,
                Rc,
                Co,
                Fn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          rs(
            c,
            u,
            ha,
            Ho,
            Iy,
            n,
            $a,
            Rc,
            Co,
            Fn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ya(l);
  }
  function rs(l, n, u, c, s, r, y, p, S, C, X, J, x, q) {
    if (l.timeoutHandle = -1, J = n.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (Jo = { stylesheets: null, count: 0, unsuspend: Sv }, lv(n), J = Sm(), J !== null)) {
      l.cancelPendingCommit = J(
        cv.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          p,
          S,
          X,
          1,
          x,
          q
        )
      ), qu(l, r, y, !C);
      return;
    }
    cv(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      p,
      S
    );
  }
  function nv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!zl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function qu(l, n, u, c) {
    n &= ~In, n &= ~Rc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Al(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && nt(l, u, n);
  }
  function Oc() {
    return (vt & 6) === 0 ? (ms(0), !1) : !0;
  }
  function Ri() {
    if (Pe !== null) {
      if (gt === 0)
        var l = Pe.return;
      else
        l = Pe, yn = Du = null, jr(l), mc = null, Eo = 0, l = Pe;
      for (; l !== null; )
        wy(l.alternate, l), l = l.return;
      Pe = null;
    }
  }
  function eu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, zg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ri(), Dt = l, Pe = u = dn(l.current, null), et = n, gt = 0, da = null, Fn = !1, Uo = m(l, n), Fy = !1, Co = $a = In = Rc = Bu = kt = 0, ha = _o = null, Iy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Al(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Nu = n, rn(), u;
  }
  function am(l, n) {
    we = null, O.H = ed, n === yi || n === Lf ? (n = cy(), gt = 3) : n === Cr ? (n = cy(), gt = 4) : gt = n === Zt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, da = n, Pe === null && (kt = 1, us(
      l,
      Aa(n, l.current)
    ));
  }
  function uv() {
    var l = O.H;
    return O.H = ed, l === null ? ed : l;
  }
  function Dc() {
    var l = O.A;
    return O.A = Wy, l;
  }
  function zc() {
    kt = 4, Fn || (et & 4194048) !== et && Da.current !== null || (Uo = !0), (Bu & 134217727) === 0 && (Rc & 134217727) === 0 || Dt === null || qu(
      Dt,
      et,
      $a,
      !1
    );
  }
  function Rd(l, n, u) {
    var c = vt;
    vt |= 2;
    var s = uv(), r = Dc();
    (Dt !== l || et !== n) && (Ho = null, eu(l, n)), n = !1;
    var y = kt;
    e: do
      try {
        if (gt !== 0 && Pe !== null) {
          var p = Pe, S = da;
          switch (gt) {
            case 8:
              Ri(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Da.current === null && (n = !0);
              var C = gt;
              if (gt = 0, da = null, qo(l, p, S, C), u && Uo) {
                y = 0;
                break e;
              }
              break;
            default:
              C = gt, gt = 0, da = null, qo(l, p, S, C);
          }
        }
        Od(), y = kt;
        break;
      } catch (X) {
        am(l, X);
      }
    while (!0);
    return n && l.shellSuspendCounter++, yn = Du = null, vt = c, O.H = s, O.A = r, Pe === null && (Dt = null, et = 0, rn()), y;
  }
  function Od() {
    for (; Pe !== null; ) im(Pe);
  }
  function nm(l, n) {
    var u = vt;
    vt |= 2;
    var c = uv(), s = Dc();
    Dt !== l || et !== n ? (Ho = null, Td = hl() + 500, eu(l, n)) : Uo = m(
      l,
      n
    );
    e: do
      try {
        if (gt !== 0 && Pe !== null) {
          n = Pe;
          var r = da;
          t: switch (gt) {
            case 1:
              gt = 0, da = null, qo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Hr(r)) {
                gt = 0, da = null, cm(n);
                break;
              }
              n = function() {
                gt !== 2 && gt !== 9 || Dt !== l || (gt = 7), ya(l);
              }, r.then(n, n);
              break e;
            case 3:
              gt = 7;
              break e;
            case 4:
              gt = 5;
              break e;
            case 7:
              Hr(r) ? (gt = 0, da = null, cm(n)) : (gt = 0, da = null, qo(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (Pe.tag) {
                case 26:
                  y = Pe.memoizedState;
                case 5:
                case 27:
                  var p = Pe;
                  if (!y || bm(y)) {
                    gt = 0, da = null;
                    var S = p.sibling;
                    if (S !== null) Pe = S;
                    else {
                      var C = p.return;
                      C !== null ? (Pe = C, ds(C)) : Pe = null;
                    }
                    break t;
                  }
              }
              gt = 0, da = null, qo(l, n, r, 5);
              break;
            case 6:
              gt = 0, da = null, qo(l, n, r, 6);
              break;
            case 8:
              Ri(), kt = 6;
              break e;
            default:
              throw Error(_(462));
          }
        }
        um();
        break;
      } catch (X) {
        am(l, X);
      }
    while (!0);
    return yn = Du = null, O.H = c, O.A = s, vt = u, Pe !== null ? 0 : (Dt = null, et = 0, rn(), kt);
  }
  function um() {
    for (; Pe !== null && !df(); )
      im(Pe);
  }
  function im(l) {
    var n = ev(l.alternate, l, Nu);
    l.memoizedProps = l.pendingProps, n === null ? ds(l) : Pe = n;
  }
  function cm(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = xy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = xy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        jr(n);
      default:
        wy(u, n), n = Pe = Je(n, Nu), n = ev(u, n, Nu);
    }
    l.memoizedProps = l.pendingProps, n === null ? ds(l) : Pe = n;
  }
  function qo(l, n, u, c) {
    yn = Du = null, jr(n), mc = null, Eo = 0;
    var s = n.return;
    try {
      if (Fp(
        l,
        s,
        n,
        u,
        et
      )) {
        kt = 1, us(
          l,
          Aa(u, l.current)
        ), Pe = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Pe = s, r;
      kt = 1, us(
        l,
        Aa(u, l.current)
      ), Pe = null;
      return;
    }
    n.flags & 32768 ? (ft || c === 1 ? l = !0 : Uo || (et & 536870912) !== 0 ? l = !1 : (Fn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Da.current, c !== null && c.tag === 13 && (c.flags |= 16384))), iv(n, l)) : ds(n);
  }
  function ds(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        iv(
          n,
          Fn
        );
        return;
      }
      l = n.return;
      var u = Yy(
        n.alternate,
        n,
        Nu
      );
      if (u !== null) {
        Pe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Pe = n;
        return;
      }
      Pe = n = l;
    } while (n !== null);
    kt === 0 && (kt = 5);
  }
  function iv(l, n) {
    do {
      var u = Tg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Pe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Pe = l;
        return;
      }
      Pe = l = u;
    } while (l !== null);
    kt = 6, Pe = null;
  }
  function cv(l, n, u, c, s, r, y, p, S) {
    l.cancelPendingCommit = null;
    do
      zd();
    while (Cl !== 0);
    if ((vt & 6) !== 0) throw Error(_(327));
    if (n !== null) {
      if (n === l.current) throw Error(_(177));
      if (r = n.lanes | n.childLanes, r |= xn, Ye(
        l,
        u,
        r,
        y,
        p,
        S
      ), l === Dt && (Pe = Dt = null, et = 0), xo = n, Pn = l, _l = u, Ed = r, Ad = s, em = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rg(Dn, function() {
        return om(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = O.T, O.T = null, s = k.p, k.p = 2, y = vt, vt |= 4;
        try {
          Ly(l, n, u);
        } finally {
          vt = y, k.p = s, O.T = c;
        }
      }
      Cl = 1, ov(), hs(), Dd();
    }
  }
  function ov() {
    if (Cl === 1) {
      Cl = 0;
      var l = Pn, n = xo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var c = k.p;
        k.p = 2;
        var s = vt;
        vt |= 4;
        try {
          ss(n, l);
          var r = As, y = Wh(l.containerInfo), p = r.focusedElem, S = r.selectionRange;
          if (y !== p && p && p.ownerDocument && Cf(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && _f(p)) {
              var C = S.start, X = S.end;
              if (X === void 0 && (X = C), "selectionStart" in p)
                p.selectionStart = C, p.selectionEnd = Math.min(
                  X,
                  p.value.length
                );
              else {
                var J = p.ownerDocument || document, x = J && J.defaultView || window;
                if (x.getSelection) {
                  var q = x.getSelection(), ge = p.textContent.length, be = Math.min(S.start, ge), dt = S.end === void 0 ? be : Math.min(S.end, ge);
                  !q.extend && be > dt && (y = dt, dt = be, be = y);
                  var z = Ct(
                    p,
                    be
                  ), R = Ct(
                    p,
                    dt
                  );
                  if (z && R && (q.rangeCount !== 1 || q.anchorNode !== z.node || q.anchorOffset !== z.offset || q.focusNode !== R.node || q.focusOffset !== R.offset)) {
                    var U = J.createRange();
                    U.setStart(z.node, z.offset), q.removeAllRanges(), be > dt ? (q.addRange(U), q.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), q.addRange(U));
                  }
                }
              }
            }
            for (J = [], q = p; q = q.parentNode; )
              q.nodeType === 1 && J.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < J.length; p++) {
              var Z = J[p];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Ms = !!Es, As = Es = null;
        } finally {
          vt = s, k.p = c, O.T = u;
        }
      }
      l.current = n, Cl = 2;
    }
  }
  function hs() {
    if (Cl === 2) {
      Cl = 0;
      var l = Pn, n = xo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var c = k.p;
        k.p = 2;
        var s = vt;
        vt |= 4;
        try {
          Vy(l, n.alternate, n);
        } finally {
          vt = s, k.p = c, O.T = u;
        }
      }
      Cl = 3;
    }
  }
  function Dd() {
    if (Cl === 4 || Cl === 3) {
      Cl = 0, Pt();
      var l = Pn, n = xo, u = _l, c = em;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Cl = 5 : (Cl = 0, xo = Pn = null, fv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Ai = null), nn(u), n = n.stateNode, El && typeof El.onCommitFiberRoot == "function")
        try {
          El.onCommitFiberRoot(
            Wu,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = O.T, s = k.p, k.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var p = c[y];
            r(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          O.T = n, k.p = s;
        }
      }
      (_l & 3) !== 0 && zd(), ya(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === tm ? No++ : (No = 0, tm = l) : No = 0, ms(0);
    }
  }
  function fv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yn(n)));
  }
  function zd(l) {
    return ov(), hs(), Dd(), om();
  }
  function om() {
    if (Cl !== 5) return !1;
    var l = Pn, n = Ed;
    Ed = 0;
    var u = nn(_l), c = O.T, s = k.p;
    try {
      k.p = 32 > u ? 32 : u, O.T = null, u = Ad, Ad = null;
      var r = Pn, y = _l;
      if (Cl = 0, xo = Pn = null, _l = 0, (vt & 6) !== 0) throw Error(_(331));
      var p = vt;
      if (vt |= 4, ky(r.current), Ky(
        r,
        r.current,
        y,
        u
      ), vt = p, ms(0, !1), El && typeof El.onPostCommitFiberRoot == "function")
        try {
          El.onPostCommitFiberRoot(Wu, r);
        } catch {
        }
      return !0;
    } finally {
      k.p = s, O.T = c, fv(l, n);
    }
  }
  function fm(l, n, u) {
    n = Aa(u, n), n = _y(l.stateNode, n, 2), l = Gn(l, n, 2), l !== null && (_e(l, 2), ya(l));
  }
  function bt(l, n, u) {
    if (l.tag === 3)
      fm(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          fm(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ai === null || !Ai.has(c))) {
            l = Aa(u, l), u = Hy(2), c = Gn(n, u, 2), c !== null && (ra(
              u,
              c,
              n,
              l
            ), _e(c, 2), ya(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Md(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new av();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Fy = !0, s.add(u), l = sm.bind(null, l, n, u), n.then(l, l));
  }
  function sm(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Dt === l && (et & u) === u && (kt === 4 || kt === 3 && (et & 62914560) === et && 300 > hl() - Py ? (vt & 2) === 0 && eu(l, 0) : In |= u, Co === et && (Co = 0)), ya(l);
  }
  function rm(l, n) {
    n === 0 && (n = le()), l = Nn(l, n), l !== null && (_e(l, n), ya(l));
  }
  function Eg(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), rm(l, u);
  }
  function Ag(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(_(314));
    }
    c !== null && c.delete(n), rm(l, u);
  }
  function Rg(l, n) {
    return On(l, n);
  }
  var Ud = null, Oi = null, ys = !1, Yo = !1, Cd = !1, Di = 0;
  function ya(l) {
    l !== Oi && l.next === null && (Oi === null ? Ud = Oi = l : Oi = Oi.next = l), Yo = !0, ys || (ys = !0, dv());
  }
  function ms(l, n) {
    if (!Cd && Yo) {
      Cd = !0;
      do
        for (var u = !1, c = Ud; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, p = c.pingedLanes;
              r = (1 << 31 - Al(42 | l) + 1) - 1, r &= s & ~(y & ~p), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, vs(c, r));
          } else
            r = et, r = an(
              c,
              c === Dt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || m(c, r) || (u = !0, vs(c, r));
          c = c.next;
        }
      while (u);
      Cd = !1;
    }
  }
  function sv() {
    ps();
  }
  function ps() {
    Yo = ys = !1;
    var l = 0;
    Di !== 0 && (ju() && (l = Di), Di = 0);
    for (var n = hl(), u = null, c = Ud; c !== null; ) {
      var s = c.next, r = dm(c, n);
      r === 0 ? (c.next = null, u === null ? Ud = s : u.next = s, s === null && (Oi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Yo = !0)), c = s;
    }
    ms(l);
  }
  function dm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Al(r), p = 1 << y, S = s[y];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (s[y] = D(p, n)) : S <= n && (l.expiredLanes |= p), r &= ~p;
    }
    if (n = Dt, u = et, u = an(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Kc(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || m(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Kc(c), nn(u)) {
        case 2:
        case 8:
          u = Qe;
          break;
        case 32:
          u = Dn;
          break;
        case 268435456:
          u = pu;
          break;
        default:
          u = Dn;
      }
      return c = rv.bind(null, l), u = On(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Kc(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rv(l, n) {
    if (Cl !== 0 && Cl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zd() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = an(
      l,
      l === Dt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Bo(l, c, n), dm(l, hl()), l.callbackNode != null && l.callbackNode === u ? rv.bind(null, l) : null);
  }
  function vs(l, n) {
    if (zd()) return null;
    Bo(l, n, !0);
  }
  function dv() {
    Mg(function() {
      (vt & 6) !== 0 ? On(
        Ps,
        sv
      ) : ps();
    });
  }
  function Mc() {
    return Di === 0 && (Di = ee()), Di;
  }
  function _d(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ef("" + l);
  }
  function gs(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function hv(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = _d(
        (s[Kl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Kl] || null) ? _d(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var p = new hr(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Di !== 0) {
                  var S = y ? gs(s, y) : new FormData(s);
                  Pr(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: r
                    },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" && (p.preventDefault(), S = y ? gs(s, y) : new FormData(s), Pr(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: r
                  },
                  r,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var $t = 0; $t < no.length; $t++) {
    var bs = no[$t], Og = bs.toLowerCase(), Ze = bs[0].toUpperCase() + bs.slice(1);
    ja(
      Og,
      "on" + Ze
    );
  }
  ja(qp, "onAnimationEnd"), ja(Fh, "onAnimationIteration"), ja(Yp, "onAnimationStart"), ja("dblclick", "onDoubleClick"), ja("focusin", "onFocus"), ja("focusout", "onBlur"), ja(Ih, "onTransitionRun"), ja(Er, "onTransitionStart"), ja(wp, "onTransitionCancel"), ja(Ph, "onTransitionEnd"), Iu("onMouseEnter", ["mouseout", "mouseover"]), Iu("onMouseLeave", ["mouseout", "mouseover"]), Iu("onPointerEnter", ["pointerout", "pointerover"]), Iu("onPointerLeave", ["pointerout", "pointerover"]), Fu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), zi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ss)
  );
  function Uc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var p = c[y], S = p.instance, C = p.currentTarget;
            if (p = p.listener, S !== r && s.isPropagationStopped())
              break e;
            r = p, s.currentTarget = C;
            try {
              r(s);
            } catch (X) {
              as(X);
            }
            s.currentTarget = null, r = S;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (p = c[y], S = p.instance, C = p.currentTarget, p = p.listener, S !== r && s.isPropagationStopped())
              break e;
            r = p, s.currentTarget = C;
            try {
              r(s);
            } catch (X) {
              as(X);
            }
            s.currentTarget = null, r = S;
          }
      }
    }
  }
  function je(l, n) {
    var u = n[lr];
    u === void 0 && (u = n[lr] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Hd(n, l, 2, !1), u.add(c));
  }
  function wo(l, n, u) {
    var c = 0;
    n && (c |= 4), Hd(
      u,
      l,
      c,
      n
    );
  }
  var jo = "_reactListening" + Math.random().toString(36).slice(2);
  function hm(l) {
    if (!l[jo]) {
      l[jo] = !0, vf.forEach(function(u) {
        u !== "selectionchange" && (zi.has(u) || wo(u, !1, l), wo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[jo] || (n[jo] = !0, wo("selectionchange", !1, n));
    }
  }
  function Hd(l, n, u, c) {
    switch (Mm(n)) {
      case 2:
        var s = Ev;
        break;
      case 8:
        s = Av;
        break;
      default:
        s = Dm;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !sr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Wa(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var p = c.stateNode.containerInfo;
          if (p === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; p !== null; ) {
            if (y = Ol(p), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = r = y;
              continue e;
            }
            p = p.parentNode;
          }
        }
        c = c.return;
      }
    to(function() {
      var C = r, X = fr(u), J = [];
      e: {
        var x = ey.get(l);
        if (x !== void 0) {
          var q = hr, ge = l;
          switch (l) {
            case "keypress":
              if (Dl(u) === 0) break e;
            case "keydown":
            case "keyup":
              q = un;
              break;
            case "focusin":
              ge = "focus", q = Bh;
              break;
            case "focusout":
              ge = "blur", q = Bh;
              break;
            case "beforeblur":
            case "afterblur":
              q = Bh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = Nh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = wh;
              break;
            case qp:
            case Fh:
            case Yp:
              q = vg;
              break;
            case Ph:
              q = Hp;
              break;
            case "scroll":
            case "scrollend":
              q = Op;
              break;
            case "wheel":
              q = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Of;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Df;
              break;
            case "toggle":
            case "beforetoggle":
              q = xp;
          }
          var be = (n & 4) !== 0, dt = !be && (l === "scroll" || l === "scrollend"), z = be ? x !== null ? x + "Capture" : null : x;
          be = [];
          for (var R = C, U; R !== null; ) {
            var Z = R;
            if (U = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || U === null || z === null || (Z = ki(R, z), Z != null && be.push(
              Yu(R, Z, U)
            )), dt) break;
            R = R.return;
          }
          0 < be.length && (x = new q(
            x,
            ge,
            null,
            u,
            X
          ), J.push({ event: x, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (x = l === "mouseover" || l === "pointerover", q = l === "mouseout" || l === "pointerout", x && u !== Ji && (ge = u.relatedTarget || u.fromElement) && (Ol(ge) || ge[Wc]))
            break e;
          if ((q || x) && (x = X.window === X ? X : (x = X.ownerDocument) ? x.defaultView || x.parentWindow : window, q ? (ge = u.relatedTarget || u.toElement, q = C, ge = ge ? Ol(ge) : null, ge !== null && (dt = Oe(ge), be = ge.tag, ge !== dt || be !== 5 && be !== 27 && be !== 6) && (ge = null)) : (q = null, ge = C), q !== ge)) {
            if (be = Nh, Z = "onMouseLeave", z = "onMouseEnter", R = "mouse", (l === "pointerout" || l === "pointerover") && (be = Df, Z = "onPointerLeave", z = "onPointerEnter", R = "pointer"), dt = q == null ? x : pf(q), U = ge == null ? x : pf(ge), x = new be(
              Z,
              R + "leave",
              q,
              u,
              X
            ), x.target = dt, x.relatedTarget = U, Z = null, Ol(X) === C && (be = new be(
              z,
              R + "enter",
              ge,
              u,
              X
            ), be.target = U, be.relatedTarget = dt, Z = be), dt = Z, q && ge)
              t: {
                for (be = q, z = ge, R = 0, U = be; U; U = Mi(U))
                  R++;
                for (U = 0, Z = z; Z; Z = Mi(Z))
                  U++;
                for (; 0 < R - U; )
                  be = Mi(be), R--;
                for (; 0 < U - R; )
                  z = Mi(z), U--;
                for (; R--; ) {
                  if (be === z || z !== null && be === z.alternate)
                    break t;
                  be = Mi(be), z = Mi(z);
                }
                be = null;
              }
            else be = null;
            q !== null && Ts(
              J,
              x,
              q,
              be,
              !1
            ), ge !== null && dt !== null && Ts(
              J,
              dt,
              ge,
              be,
              !0
            );
          }
        }
        e: {
          if (x = C ? pf(C) : window, q = x.nodeName && x.nodeName.toLowerCase(), q === "select" || q === "input" && x.type === "file")
            var fe = Qh;
          else if (gr(x))
            if (Zh)
              fe = kh;
            else {
              fe = ni;
              var ke = Sr;
            }
          else
            q = x.nodeName, !q || q.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? C && Ki(C.elementType) && (fe = Qh) : fe = Eu;
          if (fe && (fe = fe(l, C))) {
            br(
              J,
              fe,
              u,
              X
            );
            break e;
          }
          ke && ke(l, x, C), l === "focusout" && C && x.type === "number" && C.memoizedProps.value != null && Sf(x, "number", x.value);
        }
        switch (ke = C ? pf(C) : window, l) {
          case "focusin":
            (gr(ke) || ke.contentEditable === "true") && (_n = ke, fn = C, ci = null);
            break;
          case "focusout":
            ci = fn = _n = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, Tr(J, u, X);
            break;
          case "selectionchange":
            if (lc) break;
          case "keydown":
          case "keyup":
            Tr(J, u, X);
        }
        var pe;
        if (zf)
          e: {
            switch (l) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          ai ? Uf(l, u) && (Ae = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (Un && u.locale !== "ko" && (ai || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && ai && (pe = Hh()) : (Su = X, lo = "value" in Su ? Su.value : Su.textContent, ai = !0)), ke = Go(C, Ae), 0 < ke.length && (Ae = new qh(
          Ae,
          l,
          null,
          u,
          X
        ), J.push({ event: Ae, listeners: ke }), pe ? Ae.data = pe : (pe = li(u), pe !== null && (Ae.data = pe)))), (pe = Gh ? Vh(l, u) : Pi(l, u)) && (Ae = Go(C, "onBeforeInput"), 0 < Ae.length && (ke = new qh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          X
        ), J.push({
          event: ke,
          listeners: Ae
        }), ke.data = pe)), hv(
          J,
          l,
          C,
          u,
          X
        );
      }
      Uc(J, n);
    });
  }
  function Yu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Go(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = ki(l, u), s != null && c.unshift(
        Yu(l, s, r)
      ), s = ki(l, n), s != null && c.push(
        Yu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Mi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ts(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, C = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || C === null || (S = C, s ? (C = ki(u, r), C != null && y.unshift(
        Yu(u, C, S)
      )) : s || (C = ki(u, r), C != null && y.push(
        Yu(u, C, S)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var Ua = /\r\n?/g, ym = /\u0000|\uFFFD/g;
  function yv(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ua, `
`).replace(ym, "");
  }
  function mm(l, n) {
    return n = yv(n), yv(l) === n;
  }
  function xd() {
  }
  function He(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Ic(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Ic(l, "" + c);
        break;
      case "className":
        gf(l, "class", c);
        break;
      case "tabIndex":
        gf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gf(l, u, c);
        break;
      case "style":
        Tf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          gf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Ef("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && He(l, n, "name", s.name, s, null), He(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), He(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), He(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (He(l, n, "encType", s.encType, s, null), He(l, n, "method", s.method, s, null), He(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Ef("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = xd);
        break;
      case "onScroll":
        c != null && je("scroll", l);
        break;
      case "onScrollEnd":
        c != null && je("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(_(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(_(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ef("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        je("beforetoggle", l), je("toggle", l), gu(l, "popover", c);
        break;
      case "xlinkActuate":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        zn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        zn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        zn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        gu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = yg.get(u) || u, gu(l, u, c));
    }
  }
  function Y(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Tf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(_(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(_(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Ic(l, c) : (typeof c == "number" || typeof c == "bigint") && Ic(l, "" + c);
        break;
      case "onScroll":
        c != null && je("scroll", l);
        break;
      case "onScrollEnd":
        c != null && je("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = xd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ta.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Kl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : gu(l, u, c);
          }
    }
  }
  function De(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        je("error", l), je("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(137, n));
                default:
                  He(l, n, r, y, u, null);
              }
          }
        s && He(l, n, "srcSet", u.srcSet, u, null), c && He(l, n, "src", u.src, u, null);
        return;
      case "input":
        je("invalid", l);
        var p = r = y = s = null, S = null, C = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var X = u[c];
            if (X != null)
              switch (c) {
                case "name":
                  s = X;
                  break;
                case "type":
                  y = X;
                  break;
                case "checked":
                  S = X;
                  break;
                case "defaultChecked":
                  C = X;
                  break;
                case "value":
                  r = X;
                  break;
                case "defaultValue":
                  p = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(_(137, n));
                  break;
                default:
                  He(l, n, c, X, u, null);
              }
          }
        cr(
          l,
          r,
          p,
          S,
          C,
          y,
          s,
          !1
        ), ei(l);
        return;
      case "select":
        je("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (p = u[s], p != null))
            switch (s) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                y = p;
                break;
              case "multiple":
                c = p;
              default:
                He(l, n, s, p, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? Zi(l, !!c, n, !1) : u != null && Zi(l, !!c, u, !0);
        return;
      case "textarea":
        je("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (p = u[y], p != null))
            switch (y) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(_(91));
                break;
              default:
                He(l, n, y, p, u, null);
            }
        Ch(l, c, s, r), ei(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                He(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        je("beforetoggle", l), je("toggle", l), je("cancel", l), je("close", l);
        break;
      case "iframe":
      case "object":
        je("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Ss.length; c++)
          je(Ss[c], l);
        break;
      case "image":
        je("error", l), je("load", l);
        break;
      case "details":
        je("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        je("error", l), je("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in u)
          if (u.hasOwnProperty(C) && (c = u[C], c != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(_(137, n));
              default:
                He(l, n, C, c, u, null);
            }
        return;
      default:
        if (Ki(n)) {
          for (X in u)
            u.hasOwnProperty(X) && (c = u[X], c !== void 0 && Y(
              l,
              n,
              X,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && He(l, n, p, c, u, null));
  }
  function Dg(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, y = null, p = null, S = null, C = null, X = null;
        for (q in u) {
          var J = u[q];
          if (u.hasOwnProperty(q) && J != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = J;
              default:
                c.hasOwnProperty(q) || He(l, n, q, null, c, J);
            }
        }
        for (var x in c) {
          var q = c[x];
          if (J = u[x], c.hasOwnProperty(x) && (q != null || J != null))
            switch (x) {
              case "type":
                r = q;
                break;
              case "name":
                s = q;
                break;
              case "checked":
                C = q;
                break;
              case "defaultChecked":
                X = q;
                break;
              case "value":
                y = q;
                break;
              case "defaultValue":
                p = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(_(137, n));
                break;
              default:
                q !== J && He(
                  l,
                  n,
                  x,
                  q,
                  c,
                  J
                );
            }
        }
        ir(
          l,
          y,
          p,
          S,
          C,
          X,
          r,
          s
        );
        return;
      case "select":
        q = y = p = x = null;
        for (r in u)
          if (S = u[r], u.hasOwnProperty(r) && S != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                q = S;
              default:
                c.hasOwnProperty(r) || He(
                  l,
                  n,
                  r,
                  null,
                  c,
                  S
                );
            }
        for (s in c)
          if (r = c[s], S = u[s], c.hasOwnProperty(s) && (r != null || S != null))
            switch (s) {
              case "value":
                x = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== S && He(
                  l,
                  n,
                  s,
                  r,
                  c,
                  S
                );
            }
        n = p, u = y, c = q, x != null ? Zi(l, !!u, x, !1) : !!c != !!u && (n != null ? Zi(l, !!u, n, !0) : Zi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        q = x = null;
        for (p in u)
          if (s = u[p], u.hasOwnProperty(p) && s != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(l, n, p, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                x = s;
                break;
              case "defaultValue":
                q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(_(91));
                break;
              default:
                s !== r && He(l, n, y, s, c, r);
            }
        Uh(l, x, q);
        return;
      case "option":
        for (var ge in u)
          if (x = u[ge], u.hasOwnProperty(ge) && x != null && !c.hasOwnProperty(ge))
            switch (ge) {
              case "selected":
                l.selected = !1;
                break;
              default:
                He(
                  l,
                  n,
                  ge,
                  null,
                  c,
                  x
                );
            }
        for (S in c)
          if (x = c[S], q = u[S], c.hasOwnProperty(S) && x !== q && (x != null || q != null))
            switch (S) {
              case "selected":
                l.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                He(
                  l,
                  n,
                  S,
                  x,
                  c,
                  q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in u)
          x = u[be], u.hasOwnProperty(be) && x != null && !c.hasOwnProperty(be) && He(l, n, be, null, c, x);
        for (C in c)
          if (x = c[C], q = u[C], c.hasOwnProperty(C) && x !== q && (x != null || q != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(_(137, n));
                break;
              default:
                He(
                  l,
                  n,
                  C,
                  x,
                  c,
                  q
                );
            }
        return;
      default:
        if (Ki(n)) {
          for (var dt in u)
            x = u[dt], u.hasOwnProperty(dt) && x !== void 0 && !c.hasOwnProperty(dt) && Y(
              l,
              n,
              dt,
              void 0,
              c,
              x
            );
          for (X in c)
            x = c[X], q = u[X], !c.hasOwnProperty(X) || x === q || x === void 0 && q === void 0 || Y(
              l,
              n,
              X,
              x,
              c,
              q
            );
          return;
        }
    }
    for (var z in u)
      x = u[z], u.hasOwnProperty(z) && x != null && !c.hasOwnProperty(z) && He(l, n, z, null, c, x);
    for (J in c)
      x = c[J], q = u[J], !c.hasOwnProperty(J) || x === q || x == null && q == null || He(l, n, J, x, c, q);
  }
  var Es = null, As = null;
  function Fa(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function wu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lo(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function tu(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Vo = null;
  function ju() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vo ? !1 : (Vo = l, !0) : (Vo = null, !1);
  }
  var Nd = typeof setTimeout == "function" ? setTimeout : void 0, zg = typeof clearTimeout == "function" ? clearTimeout : void 0, mv = typeof Promise == "function" ? Promise : void 0, Mg = typeof queueMicrotask == "function" ? queueMicrotask : typeof mv < "u" ? function(l) {
    return mv.resolve(null).then(l).catch(lu);
  } : Nd;
  function lu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ui(l) {
    return l === "head";
  }
  function Bd(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && ma(y.documentElement), u & 2 && ma(y.body), u & 4)
              for (u = y.head, ma(u), y = u.firstChild; y; ) {
                var p = y.nextSibling, S = y.nodeName;
                y[re] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = p;
              }
          }
          if (s === 0) {
            l.removeChild(r), nu(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    nu(n);
  }
  function Rs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rs(u), mf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Xo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[re])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = bn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Ug(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = bn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Os(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Cg(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function bn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var Ci = null;
  function Hl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ie(l, n, u) {
    switch (n = Fa(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(_(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(_(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(_(454));
        return l;
      default:
        throw Error(_(451));
    }
  }
  function ma(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    mf(l);
  }
  var Wt = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Set();
  function qd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Gu = k.d;
  k.d = {
    f: Yd,
    r: wd,
    D: Lu,
    C: jd,
    L: _i,
    m: Vl,
    X: Hi,
    S: pa,
    M: pm
  };
  function Yd() {
    var l = Gu.f(), n = Oc();
    return l || n;
  }
  function wd(l) {
    var n = Li(l);
    n !== null && n.tag === 5 && n.type === "form" ? To(n) : Gu.r(l);
  }
  var xl = typeof document > "u" ? null : document;
  function Sn(l, n, u) {
    var c = xl;
    if (c && typeof n == "string" && n) {
      var s = Ya(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Ll.has(s) || (Ll.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), De(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Lu(l) {
    Gu.D(l), Sn("dns-prefetch", l, null);
  }
  function jd(l, n) {
    Gu.C(l, n), Sn("preconnect", l, n);
  }
  function _i(l, n, u) {
    Gu.L(l, n, u);
    var c = xl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Ya(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ya(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ya(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ya(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Qo(l);
          break;
        case "script":
          r = Ia(l);
      }
      Wt.has(r) || (l = oe(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Wt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Zo(r)) || n === "script" && c.querySelector(Cc(r)) || (n = c.createElement("link"), De(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Vl(l, n) {
    Gu.m(l, n);
    var u = xl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Ya(c) + '"][href="' + Ya(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ia(l);
      }
      if (!Wt.has(r) && (l = oe({ rel: "modulepreload", href: l }, n), Wt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Cc(r)))
              return;
        }
        c = u.createElement("link"), De(c, "link", l), il(c), u.head.appendChild(c);
      }
    }
  }
  function pa(l, n, u) {
    Gu.S(l, n, u);
    var c = xl;
    if (c && l) {
      var s = vu(c).hoistableStyles, r = Qo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var p = { loading: 0, preload: null };
        if (y = c.querySelector(
          Zo(r)
        ))
          p.loading = 5;
        else {
          l = oe(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Wt.get(r)) && Ld(l, u);
          var S = y = c.createElement("link");
          il(S), De(S, "link", l), S._p = new Promise(function(C, X) {
            S.onload = C, S.onerror = X;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Gd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: p
        }, s.set(r, y);
      }
    }
  }
  function Hi(l, n) {
    Gu.X(l, n);
    var u = xl;
    if (u && l) {
      var c = vu(u).hoistableScripts, s = Ia(l), r = c.get(s);
      r || (r = u.querySelector(Cc(s)), r || (l = oe({ src: l, async: !0 }, n), (n = Wt.get(s)) && Vd(l, n), r = u.createElement("script"), il(r), De(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function pm(l, n) {
    Gu.M(l, n);
    var u = xl;
    if (u && l) {
      var c = vu(u).hoistableScripts, s = Ia(l), r = c.get(s);
      r || (r = u.querySelector(Cc(s)), r || (l = oe({ src: l, async: !0, type: "module" }, n), (n = Wt.get(s)) && Vd(l, n), r = u.createElement("script"), il(r), De(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function pv(l, n, u, c) {
    var s = (s = ue.current) ? qd(s) : null;
    if (!s) throw Error(_(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Qo(u.href), u = vu(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Qo(u.href);
          var r = vu(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            Zo(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), Wt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Wt.set(l, u), r || vv(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(_(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(_(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ia(u), u = vu(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(_(444, l));
    }
  }
  function Qo(l) {
    return 'href="' + Ya(l) + '"';
  }
  function Zo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ko(l) {
    return oe({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function vv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), De(n, "link", u), il(n), l.head.appendChild(n));
  }
  function Ia(l) {
    return '[src="' + Ya(l) + '"]';
  }
  function Cc(l) {
    return "script[async]" + l;
  }
  function gv(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ya(u.href) + '"]'
          );
          if (c)
            return n.instance = c, il(c), c;
          var s = oe({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), il(c), De(c, "style", s), Gd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Qo(u.href);
          var r = l.querySelector(
            Zo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, il(r), r;
          c = Ko(u), (s = Wt.get(s)) && Ld(c, s), r = (l.ownerDocument || l).createElement("link"), il(r);
          var y = r;
          return y._p = new Promise(function(p, S) {
            y.onload = p, y.onerror = S;
          }), De(r, "link", c), n.state.loading |= 4, Gd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ia(u.src), (s = l.querySelector(
            Cc(r)
          )) ? (n.instance = s, il(s), s) : (c = u, (s = Wt.get(r)) && (c = oe({}, u), Vd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), il(s), De(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(_(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Gd(c, u.precedence, l));
    return n.instance;
  }
  function Gd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var p = c[y];
      if (p.dataset.precedence === n) r = p;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Ld(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Vd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var xi = null;
  function vm(l, n, u) {
    if (xi === null) {
      var c = /* @__PURE__ */ new Map(), s = xi = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = xi, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[re] || r[yl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var p = c.get(y);
        p ? p.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function gm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function bv(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function bm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Jo = null;
  function Sv() {
  }
  function Tv(l, n, u) {
    if (Jo === null) throw Error(_(475));
    var c = Jo;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Qo(u.href), r = l.querySelector(
          Zo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Ds.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, il(r);
          return;
        }
        r = l.ownerDocument || l, u = Ko(u), (s = Wt.get(s)) && Ld(u, s), r = r.createElement("link"), il(r);
        var y = r;
        y._p = new Promise(function(p, S) {
          y.onload = p, y.onerror = S;
        }), De(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Ds.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function Sm() {
    if (Jo === null) throw Error(_(475));
    var l = Jo;
    return l.stylesheets && l.count === 0 && zs(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && zs(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Ds() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zs(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var ko = null;
  function zs(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, ko = /* @__PURE__ */ new Map(), n.forEach(Ca, l), ko = null, Ds.call(l));
  }
  function Ca(l, n) {
    if (!(n.state.loading & 4)) {
      var u = ko.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), ko.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = Ds.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var va = {
    $$typeof: ct,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function _g(l, n, u, c, s, r, y, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ye(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ye(0), this.hiddenUpdates = ye(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tm(l, n, u, c, s, r, y, p, S, C, X, J) {
    return l = new _g(
      l,
      n,
      u,
      y,
      p,
      S,
      C,
      J
    ), n = 1, r === !0 && (n |= 24), r = ia(3, null, null, n), l.current = r, r.stateNode = l, n = po(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, xr(r), l;
  }
  function Em(l) {
    return l ? (l = co, l) : co;
  }
  function Am(l, n, u, c, s, r) {
    s = Em(s), c.context === null ? c.context = s : c.pendingContext = s, c = oa(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Gn(l, c, n), u !== null && (Ma(u, l, n), fc(u, l, n));
  }
  function Rm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Xd(l, n) {
    Rm(l, n), (l = l.alternate) && Rm(l, n);
  }
  function Om(l) {
    if (l.tag === 13) {
      var n = Nn(l, 67108864);
      n !== null && Ma(n, l, 67108864), Xd(l, 67108864);
    }
  }
  var Ms = !0;
  function Ev(l, n, u, c) {
    var s = O.T;
    O.T = null;
    var r = k.p;
    try {
      k.p = 2, Dm(l, n, u, c);
    } finally {
      k.p = r, O.T = s;
    }
  }
  function Av(l, n, u, c) {
    var s = O.T;
    O.T = null;
    var r = k.p;
    try {
      k.p = 8, Dm(l, n, u, c);
    } finally {
      k.p = r, O.T = s;
    }
  }
  function Dm(l, n, u, c) {
    if (Ms) {
      var s = Qd(c);
      if (s === null)
        Wa(
          l,
          n,
          c,
          Zd,
          u
        ), _c(l, c);
      else if (Ov(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (_c(l, c), n & 4 && -1 < Rv.indexOf(l)) {
        for (; s !== null; ) {
          var r = Li(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = Rl(r.pendingLanes);
                  if (y !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Al(y);
                      p.entanglements[1] |= S, y &= ~S;
                    }
                    ya(r), (vt & 6) === 0 && (Td = hl() + 500, ms(0));
                  }
                }
                break;
              case 13:
                p = Nn(r, 2), p !== null && Ma(p, r, 2), Oc(), Xd(r, 2);
            }
          if (r = Qd(c), r === null && Wa(
            l,
            n,
            c,
            Zd,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Wa(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Qd(l) {
    return l = fr(l), zm(l);
  }
  var Zd = null;
  function zm(l) {
    if (Zd = null, l = Ol(l), l !== null) {
      var n = Oe(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = lt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Zd = l, null;
  }
  function Mm(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($u()) {
          case Ps:
            return 2;
          case Qe:
            return 8;
          case Dn:
          case Jc:
            return 32;
          case pu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $o = !1, au = null, Vu = null, Xu = null, Us = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Ni = [], Rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _c(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        au = null;
        break;
      case "dragenter":
      case "dragleave":
        Vu = null;
        break;
      case "mouseover":
      case "mouseout":
        Xu = null;
        break;
      case "pointerover":
      case "pointerout":
        Us.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cs.delete(n.pointerId);
    }
  }
  function Hc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Li(n), n !== null && Om(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Ov(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return au = Hc(
          au,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Vu = Hc(
          Vu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Xu = Hc(
          Xu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Us.set(
          r,
          Hc(
            Us.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Cs.set(
          r,
          Hc(
            Cs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Um(l) {
    var n = Ol(l.target);
    if (n !== null) {
      var u = Oe(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = lt(u), n !== null) {
            l.blockedOn = n, Rh(l.priority, function() {
              if (u.tag === 13) {
                var c = za();
                c = el(c);
                var s = Nn(u, c);
                s !== null && Ma(s, u, c), Xd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _s(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Qd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ji = c, u.target.dispatchEvent(c), Ji = null;
      } else
        return n = Li(u), n !== null && Om(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Hs(l, n, u) {
    _s(l) && u.delete(n);
  }
  function Wo() {
    $o = !1, au !== null && _s(au) && (au = null), Vu !== null && _s(Vu) && (Vu = null), Xu !== null && _s(Xu) && (Xu = null), Us.forEach(Hs), Cs.forEach(Hs);
  }
  function Kd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, $o || ($o = !0, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      Wo
    )));
  }
  var xc = null;
  function Cm(l) {
    xc !== l && (xc = l, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      function() {
        xc === l && (xc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (zm(c || u) === null)
              continue;
            break;
          }
          var r = Li(u);
          r !== null && (l.splice(n, 3), n -= 3, Pr(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function nu(l) {
    function n(S) {
      return Kd(S, l);
    }
    au !== null && Kd(au, l), Vu !== null && Kd(Vu, l), Xu !== null && Kd(Xu, l), Us.forEach(n), Cs.forEach(n);
    for (var u = 0; u < Ni.length; u++) {
      var c = Ni[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ni.length && (u = Ni[0], u.blockedOn === null); )
      Um(u), u.blockedOn === null && Ni.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[Kl] || null;
        if (typeof r == "function")
          y || Cm(u);
        else if (y) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Kl] || null)
              p = y.formAction;
            else if (zm(s) !== null) continue;
          } else p = y.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), Cm(u);
        }
      }
  }
  function _m(l) {
    this._internalRoot = l;
  }
  Jd.prototype.render = _m.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(_(409));
    var u = n.current, c = za();
    Am(u, c, l, n, null, null);
  }, Jd.prototype.unmount = _m.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Am(l.current, 2, null, l, null, null), Oc(), n[Wc] = null;
    }
  };
  function Jd(l) {
    this._internalRoot = l;
  }
  Jd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = tr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ni.length && n !== 0 && n < Ni[u].priority; u++) ;
      Ni.splice(u, 0, l), u === 0 && Um(l);
    }
  };
  var Hm = ce.version;
  if (Hm !== "19.1.0")
    throw Error(
      _(
        527,
        Hm,
        "19.1.0"
      )
    );
  k.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(_(188)) : (l = Object.keys(l).join(","), Error(_(268, l)));
    return l = w(n), l = l !== null ? K(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Il = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber)
      try {
        Wu = xs.inject(
          Il
        ), El = xs;
      } catch {
      }
  }
  return mp.createRoot = function(l, n) {
    if (!Se(l)) throw Error(_(299));
    var u = !1, c = "", s = Ro, r = Uy, y = ns, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = Tm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      p,
      null
    ), l[Wc] = n.current, hm(l), new _m(n);
  }, mp.hydrateRoot = function(l, n, u) {
    if (!Se(l)) throw Error(_(299));
    var c = !1, s = "", r = Ro, y = Uy, p = ns, S = null, C = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (C = u.formState)), n = Tm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      p,
      S,
      C
    ), n.context = Em(null), u = n.current, c = za(), c = el(c), s = oa(c), s.callback = null, Gn(u, s, c), u = c, n.current.lanes = u, _e(n, u), ya(n), l[Wc] = n.current, hm(l), new Jd(n);
  }, mp.version = "19.1.0", mp;
}
var pp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qb;
function sT() {
  return Qb || (Qb = 1, process.env.NODE_ENV !== "production" && function() {
    function W(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ce(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = He(e) ? e.slice() : Ze({}, e);
      return f[o] = ce(e[o], t, a + 1, i), f;
    }
    function Ne(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return _(e, t, a, 0);
      }
    }
    function _(e, t, a, i) {
      var o = t[i], f = He(e) ? e.slice() : Ze({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], He(f) ? f.splice(o, 1) : delete f[o]) : f[o] = _(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Se(e, t, a) {
      var i = t[a], o = He(e) ? e.slice() : Ze({}, e);
      return a + 1 === t.length ? (He(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Se(e[i], t, a + 1), o);
    }
    function Oe() {
      return !1;
    }
    function lt() {
      return null;
    }
    function yt() {
    }
    function w() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function K() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function oe() {
    }
    function $(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function M(e, t, a, i) {
      return new Mf(e, t, a, i);
    }
    function ae(e, t) {
      e.context === Fo && (bt(e.current, 2, t, e, null, null), bc());
    }
    function Ue(e, t) {
      if (iu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Oo(), zf(
          e.current,
          t,
          a
        ), bc();
      }
    }
    function Ke(e) {
      iu = e;
    }
    function Ce(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Xe(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function It(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function ct(e) {
      if (Xe(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function wt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Xe(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return ct(o), e;
            if (f === i) return ct(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Be(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Be(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Rt(e) {
      return e === null || typeof e != "object" ? null : (e = mm && e[mm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Fe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === xd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case je:
          return "Fragment";
        case jo:
          return "Profiler";
        case wo:
          return "StrictMode";
        case Go:
          return "Suspense";
        case Mi:
          return "SuspenseList";
        case ym:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Uc:
            return "Portal";
          case Wa:
            return (e.displayName || "Context") + ".Provider";
          case Hd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Yu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ts:
            return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
          case Ua:
            t = e._payload, e = e._init;
            try {
              return Fe(e(t));
            } catch {
            }
        }
      return null;
    }
    function Ot(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Fe(t);
        case 8:
          return t === wo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return se(e.return);
      }
      return null;
    }
    function zt(e) {
      return { current: e };
    }
    function ve(e, t) {
      0 > Fa ? console.error("Unexpected pop.") : (t !== As[Fa] && console.error("Unexpected Fiber popped."), e.current = Es[Fa], Es[Fa] = null, As[Fa] = null, Fa--);
    }
    function Re(e, t, a) {
      Fa++, Es[Fa] = e.current, As[Fa] = a, e.current = t;
    }
    function Mt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function jt(e, t) {
      Re(tu, t, e), Re(Lo, e, e), Re(wu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? gt(t) : Xc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = gt(t), t = da(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Th;
                break;
              case "math":
                t = tg;
                break;
              default:
                t = Xc;
            }
      }
      a = a.toLowerCase(), a = Uh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ve(wu, e), Re(wu, a, e);
    }
    function mt(e) {
      ve(wu, e), ve(Lo, e), ve(tu, e);
    }
    function O() {
      return Mt(wu.current);
    }
    function k(e) {
      e.memoizedState !== null && Re(Vo, e, e);
      var t = Mt(wu.current), a = e.type, i = da(t.context, a);
      a = Uh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Re(Lo, e, e), Re(wu, i, e));
    }
    function I(e) {
      Lo.current === e && (ve(wu, e), ve(Lo, e)), Vo.current === e && (ve(Vo, e), sp._currentValue = Fs);
    }
    function me(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function g(e) {
      try {
        return N(e), !1;
      } catch {
        return !0;
      }
    }
    function N(e) {
      return "" + e;
    }
    function Q(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), N(e);
    }
    function F(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), N(e);
    }
    function ne(e) {
      if (g(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          me(e)
        ), N(e);
    }
    function Te(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ci = t.inject(e), Hl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ue(e) {
      if (typeof Cg == "function" && bn(e), Hl && typeof Hl.setStrictMode == "function")
        try {
          Hl.setStrictMode(Ci, e);
        } catch (t) {
          ma || (ma = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function nl(e) {
      ie = e;
    }
    function Me() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function xt(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function la() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function Rn(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function Gi() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function On(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    function Kc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (qd(e) / Gu | 0) | 0;
    }
    function df(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Pt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function hl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Pt(i) : (d &= h, d !== 0 ? o = Pt(d) : a || (a = h & ~e, a !== 0 && (o = Pt(a))))) : (h = i & ~f, h !== 0 ? o = Pt(h) : d !== 0 ? o = Pt(d) : a || (a = i & ~e, a !== 0 && (o = Pt(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function $u(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ps(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Qe() {
      var e = Yd;
      return Yd <<= 1, (Yd & 4194048) === 0 && (Yd = 256), e;
    }
    function Dn() {
      var e = wd;
      return wd <<= 1, (wd & 62914560) === 0 && (wd = 4194304), e;
    }
    function Jc(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function pu(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function er(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, v = e.expirationTimes, b = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var B = 31 - Ll(a), G = 1 << B;
        h[B] = 0, v[B] = -1;
        var H = b[B];
        if (H !== null)
          for (b[B] = null, B = 0; B < H.length; B++) {
            var L = H[B];
            L !== null && (L.lane &= -536870913);
          }
        a &= ~G;
      }
      i !== 0 && hf(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function hf(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ll(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Wu(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ll(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function El(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function qa(e, t, a) {
      if (Wt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ll(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Al(e, t) {
      if (Wt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ll(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function kc(e) {
      return e &= -e, xl < e ? Sn < e ? (e & 134217727) !== 0 ? Lu : jd : Sn : xl;
    }
    function yf() {
      var e = De.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Lu : Cd(e.type));
    }
    function $c(e, t) {
      var a = De.p;
      try {
        return De.p = e, t();
      } finally {
        De.p = a;
      }
    }
    function ln(e) {
      delete e[Vl], delete e[pa], delete e[pm], delete e[pv], delete e[Qo];
    }
    function aa(e) {
      var t = e[Vl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Hi] || a[Vl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = No(e); e !== null; ) {
              if (a = e[Vl])
                return a;
              e = No(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Rl(e) {
      if (e = e[Vl] || e[Hi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function an(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function m(e) {
      var t = e[Zo];
      return t || (t = e[Zo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function D(e) {
      e[Ko] = !0;
    }
    function ee(e, t) {
      le(e, t), le(e + "Capture", t);
    }
    function le(e, t) {
      Ia[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ia[e] = t;
      var a = e.toLowerCase();
      for (Cc[a] = e, e === "onDoubleClick" && (Cc.ondblclick = e), e = 0; e < t.length; e++)
        vv.add(t[e]);
    }
    function ye(e, t) {
      gv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function _e(e) {
      return ju.call(Vd, e) ? !0 : ju.call(Ld, e) ? !1 : Gd.test(e) ? Vd[e] = !0 : (Ld[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ye(e, t, a) {
      if (_e(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Q(a, t), e === "" + a ? a : e);
      }
    }
    function nt(e, t, a) {
      if (_e(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Q(a, t), e.setAttribute(t, "" + a);
        }
    }
    function qe(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Q(a, t), e.setAttribute(t, "" + a);
      }
    }
    function el(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Q(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function nn() {
    }
    function tr() {
      if (xi === 0) {
        vm = console.log, gm = console.info, bv = console.warn, bm = console.error, Jo = console.group, Sv = console.groupCollapsed, Tv = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: nn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      xi++;
    }
    function Rh() {
      if (xi--, xi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ze({}, e, { value: vm }),
          info: Ze({}, e, { value: gm }),
          warn: Ze({}, e, { value: bv }),
          error: Ze({}, e, { value: bm }),
          group: Ze({}, e, { value: Jo }),
          groupCollapsed: Ze({}, e, { value: Sv }),
          groupEnd: Ze({}, e, { value: Tv })
        });
      }
      0 > xi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ul(e) {
      if (Sm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Sm = t && t[1] || "", Ds = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Sm + e + Ds;
    }
    function yl(e, t) {
      if (!e || ko) return "";
      var a = zs.get(e);
      if (a !== void 0) return a;
      ko = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Y.H, Y.H = null, tr();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var H = function() {
                  throw Error();
                };
                if (Object.defineProperty(H.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(H, []);
                  } catch (de) {
                    var L = de;
                  }
                  Reflect.construct(e, [], H);
                } else {
                  try {
                    H.call();
                  } catch (de) {
                    L = de;
                  }
                  e.call(H.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (de) {
                  L = de;
                }
                (H = e()) && typeof H.catch == "function" && H.catch(function() {
                });
              }
            } catch (de) {
              if (de && L && typeof de.stack == "string")
                return [de.stack, L.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], v = d[1];
        if (h && v) {
          var b = h.split(`
`), B = v.split(`
`);
          for (d = f = 0; f < b.length && !b[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < B.length && !B[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === b.length || d === B.length)
            for (f = b.length - 1, d = B.length - 1; 1 <= f && 0 <= d && b[f] !== B[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (b[f] !== B[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || b[f] !== B[d]) {
                    var G = `
` + b[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && zs.set(e, G), G;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        ko = !1, Y.H = i, Rh(), Error.prepareStackTrace = a;
      }
      return b = (b = e ? e.displayName || e.name : "") ? ul(b) : "", typeof e == "function" && zs.set(e, b), b;
    }
    function Kl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Wc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ul(e.type);
        case 16:
          return ul("Lazy");
        case 13:
          return ul("Suspense");
        case 19:
          return ul("SuspenseList");
        case 0:
        case 15:
          return yl(e.type, !1);
        case 11:
          return yl(e.type.render, !1);
        case 1:
          return yl(e.type, !0);
        case 31:
          return ul("Activity");
        default:
          return "";
      }
    }
    function lr(e) {
      try {
        var t = "";
        do {
          t += Wc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = ul(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (v) {
        return `
Error generating stack: ` + v.message + `
` + v.stack;
      }
    }
    function gp(e) {
      return (e = e ? e.displayName || e.name : "") ? ul(e) : "";
    }
    function ar() {
      if (Ca === null) return null;
      var e = Ca._debugOwner;
      return e != null ? Ot(e) : null;
    }
    function bp() {
      if (Ca === null) return "";
      var e = Ca;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ul(e.type);
            break;
          case 13:
            t += ul("Suspense");
            break;
          case 19:
            t += ul("SuspenseList");
            break;
          case 31:
            t += ul("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += gp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += gp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Kl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Kl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function re(e, t, a, i, o, f, d) {
      var h = Ca;
      mf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        mf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function mf(e) {
      Y.getCurrentStack = e === null ? null : bp, va = !1, Ca = e;
    }
    function Ol(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ne(e), e;
        default:
          return "";
      }
    }
    function Li(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pf(e) {
      var t = Li(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ne(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            ne(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            ne(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function vu(e) {
      e._valueTracker || (e._valueTracker = pf(e));
    }
    function il(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Li(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ta(e) {
      return e.replace(
        _g,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Fu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Em || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ar() || "A component",
        t.type
      ), Em = !0), t.value === void 0 || t.defaultValue === void 0 || Tm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ar() || "A component",
        t.type
      ), Tm = !0);
    }
    function Iu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Q(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ol(t)) : e.value !== "" + Ol(t) && (e.value = "" + Ol(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? nr(e, d, Ol(t)) : a != null ? nr(e, d, Ol(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Q(h, "name"), e.name = "" + Ol(h)) : e.removeAttribute("name");
    }
    function Sp(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Q(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + Ol(a) : "", t = t != null ? "" + Ol(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Q(d, "name"), e.name = d);
    }
    function nr(e, t, a) {
      t === "number" && vf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Oh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? bs.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Rm || (Rm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Xd || (Xd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Am || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Am = !0);
    }
    function Tp() {
      var e = ar();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function gu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ol(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function gf(e, t) {
      for (e = 0; e < Ms.length; e++) {
        var a = Ms[e];
        if (t[a] != null) {
          var i = He(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Tp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Tp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Om || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Om = !0);
    }
    function zn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Ev || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ar() || "A component"
      ), Ev = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ur(e, t, a) {
      if (t != null && (t = "" + Ol(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ol(a) : "";
    }
    function Dh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (He(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ol(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Vi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Vi(e.children[0], t) : e;
    }
    function Jl(e) {
      return "  " + "  ".repeat(e);
    }
    function Pu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Xi(e) {
      return "- " + "  ".repeat(e);
    }
    function zh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Yl(e, t) {
      return Av.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function bf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Pu(a) + Yl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Pu(a) + Yl(e, i) + `
` + Xi(a) + Yl(t, i) + `
`;
      }
      return Jl(a) + Yl(e, i) + `
`;
    }
    function Mh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function ei(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (He(e)) return "[...]";
          if (e.$$typeof === zi)
            return (t = Fe(e.type)) ? "<" + t + ">" : "<...>";
          var a = Mh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = ei(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Qi(e, t) {
      return typeof e != "string" || Av.test(e) ? "{" + ei(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Fc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Qi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function hg(e, t, a) {
      var i = "", o = Ze({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = ei(e[f], d);
          t.hasOwnProperty(f) ? (d = ei(t[f], d), i += Pu(a) + f + ": " + h + `
`, i += Xi(a) + f + ": " + d + `
`) : i += Pu(a) + f + ": " + h + `
`;
        }
      for (var v in o)
        o.hasOwnProperty(v) && (e = ei(
          o[v],
          120 - 2 * a - v.length - 2
        ), i += Xi(a) + v + ": " + e + `
`);
      return i;
    }
    function Ya(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (b in a)
        a.hasOwnProperty(b) && f.set(
          b.toLowerCase(),
          b
        );
      if (f.size === 1 && f.has("children"))
        o += Fc(
          e,
          t,
          Jl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, v = f.get(d.toLowerCase());
            if (v !== void 0) {
              f.delete(d.toLowerCase());
              var b = t[d];
              v = a[v];
              var B = Qi(
                b,
                h
              );
              h = Qi(
                v,
                h
              ), typeof b == "object" && b !== null && typeof v == "object" && v !== null && Mh(b) === "Object" && Mh(v) === "Object" && (2 < Object.keys(b).length || 2 < Object.keys(v).length || -1 < B.indexOf("...") || -1 < h.indexOf("...")) ? o += Jl(i + 1) + d + `={{
` + hg(
                b,
                v,
                i + 2
              ) + Jl(i + 1) + `}}
` : (o += Pu(i + 1) + d + "=" + B + `
`, o += Xi(i + 1) + d + "=" + h + `
`);
            } else
              o += Jl(i + 1) + d + "=" + Qi(t[d], h) + `
`;
          }
        f.forEach(function(G) {
          if (G !== "children") {
            var H = 120 - 2 * (i + 1) - G.length - 1;
            o += Xi(i + 1) + G + "=" + Qi(a[G], H) + `
`;
          }
        }), o = o === "" ? Jl(i) + "<" + e + `>
` : Jl(i) + "<" + e + `
` + o + Jl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += bf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + bf("" + t, null, i + 1) : o + bf("" + t, void 0, i + 1)), o;
    }
    function ir(e, t) {
      var a = zh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += ir(e, t), e = e.sibling;
        return a;
      }
      return Jl(t) + "<" + a + `>
`;
    }
    function cr(e, t) {
      var a = Vi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Jl(t) + `...
` + cr(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Jl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = bf(o, e.serverProps, t), t++;
      else if (f = zh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (b in o)
            if (o.hasOwnProperty(b) && b !== "children") {
              var v = Qi(o[b], 15);
              if (d -= b.length + v.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + b + "=" + v;
            }
          i = Jl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Fc(
            f,
            o,
            Pu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ya(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var b = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (b += cr(d, t), f++) : b += ir(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (b += Jl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], b = typeof f == "string" ? b + (Xi(t) + Yl(f, 120 - 2 * t) + `
`) : b + Fc(
          f.type,
          f.props,
          Xi(t)
        );
      return a + i + b;
    }
    function Sf(e) {
      try {
        return `

` + cr(e, 0);
      } catch {
        return "";
      }
    }
    function Zi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Sf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Uh(e, t) {
      var a = Ze({}, e || Mm), i = { tag: t };
      return Qd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Zd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Dm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Ch(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return zm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Ic(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Ep(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function or(e, t) {
      t = t || Mm;
      var a = t.current;
      if (t = (a = Ch(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Ic(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, $o[t]) return !1;
      $o[t] = !0;
      var o = (t = Ca) ? Ep(t.return, i) : null, f = t !== null && o !== null ? Zi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || re(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Tf(e, t, a) {
      if (a || Ch("#text", t, !1))
        return !0;
      if (a = "#text|" + t, $o[a]) return !1;
      $o[a] = !0;
      var i = (a = Ca) ? Ep(a, t) : null;
      return a = a !== null && i !== null ? Zi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Ki(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function yg(e) {
      return e.replace(Ni, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Ap(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        yg(t.replace(Cs, "ms-"))
      )) : Us.test(t) ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Rv.test(a) || Hc.hasOwnProperty(a) && Hc[a] || (Hc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Rv, "")
      )), typeof a == "number" && (isNaN(a) ? Ov || (Ov = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Um || (Um = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || _s.has(t) ? t === "float" ? e.cssFloat = a : (F(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Ef(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = au[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = au[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var v in t)
            for (o = au[v] || [v], f = 0; f < o.length; f++)
              h[o[f]] = v;
          v = {};
          for (var b in i)
            if (o = i[b], (f = h[b]) && o !== f && (d = o + "," + f, !v[d])) {
              v[d] = !0, d = console;
              var B = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                B == null || typeof B == "boolean" || B === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var G in a)
          !a.hasOwnProperty(G) || t != null && t.hasOwnProperty(G) || (G.indexOf("--") === 0 ? e.setProperty(G, "") : G === "float" ? e.cssFloat = "" : e[G] = "");
        for (var H in t)
          b = t[H], t.hasOwnProperty(H) && a[H] !== b && Ap(e, H, b);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Ap(e, i, t[i]);
    }
    function Ji(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function fr(e) {
      return Kd.get(e) || e;
    }
    function Pc(e, t) {
      if (ju.call(nu, t) && nu[t])
        return !0;
      if (Jd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Cm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), nu[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), nu[t] = !0;
      }
      if (_m.test(t)) {
        if (e = t.toLowerCase(), e = Cm.hasOwnProperty(e) ? e : null, e == null) return nu[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), nu[t] = !0);
      }
      return !0;
    }
    function eo(e, t) {
      var a = [], i;
      for (i in t)
        Pc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Rp(e, t, a, i) {
      if (ju.call(Il, t) && Il[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Il[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Il[t] = !0;
        if (xs.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Il[t] = !0;
      } else if (xs.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Il[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Il[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Il[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Il[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Il[t] = !0;
      if (xc.hasOwnProperty(o)) {
        if (o = xc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Il[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Il[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Il[t] = !0);
          }
        case "function":
        case "symbol":
          return Il[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Il[t] = !0;
          }
      }
      return !0;
    }
    function _h(e, t, a) {
      var i = [], o;
      for (o in t)
        Rp(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function to(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ki(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Mn(e) {
      var t = Rl(e);
      if (t && (e = t.stateNode)) {
        var a = e[pa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Iu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Q(t, "name"), a = a.querySelectorAll(
                'input[name="' + Ta(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[pa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Iu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && il(i);
            }
            break e;
          case "textarea":
            ur(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && gu(e, !!a.multiple, t, !1);
        }
      }
    }
    function sr(e, t, a) {
      if (p) return e(t, a);
      p = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (p = !1, (r !== null || y !== null) && (bc(), r && (t = r, e = y, y = r = null, Mn(t), e)))
          for (t = 0; t < e.length; t++) Mn(e[t]);
      }
    }
    function bu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[pa] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Su() {
      if (q) return q;
      var e, t = x, a = t.length, i, o = "value" in J ? J.value : J.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return q = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function lo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function $i() {
      return !0;
    }
    function Hh() {
      return !1;
    }
    function Dl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? $i : Hh, this.isPropagationStopped = Hh, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = $i);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = $i);
        },
        persist: function() {
        },
        isPersistent: $i
      }), t;
    }
    function rr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = eS[e]) ? !!t[e] : !1;
    }
    function dr() {
      return rr;
    }
    function kl(e, t) {
      switch (e) {
        case "keyup":
          return dS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== B0;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ti(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function hr(e, t) {
      switch (e) {
        case "compositionend":
          return ti(t);
        case "keypress":
          return t.which !== Y0 ? null : (j0 = !0, w0);
        case "textInput":
          return e = t.data, e === w0 && j0 ? null : e;
        default:
          return null;
      }
    }
    function Af(e, t) {
      if (kd)
        return e === "compositionend" || !xg && kl(e, t) ? (e = Su(), q = x = J = null, kd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return q0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Op(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!yS[e.type] : t === "textarea";
    }
    function xh(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function yr(e, t, a, i) {
      r ? y ? y.push(i) : y = [i] : r = i, t = ss(t, "onChange"), 0 < t.length && (a = new be(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Rf(e) {
      $n(e, 0);
    }
    function Wi(e) {
      var t = an(e);
      if (il(t)) return e;
    }
    function Nh(e, t) {
      if (e === "change") return t;
    }
    function Dp() {
      Nm && (Nm.detachEvent("onpropertychange", zp), Bm = Nm = null);
    }
    function zp(e) {
      if (e.propertyName === "value" && Wi(Bm)) {
        var t = [];
        yr(
          t,
          Bm,
          e,
          ki(e)
        ), sr(Rf, t);
      }
    }
    function mg(e, t, a) {
      e === "focusin" ? (Dp(), Nm = t, Bm = a, Nm.attachEvent("onpropertychange", zp)) : e === "focusout" && Dp();
    }
    function Bh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Wi(Bm);
    }
    function pg(e, t) {
      if (e === "click") return Wi(t);
    }
    function vg(e, t) {
      if (e === "input" || e === "change")
        return Wi(t);
    }
    function gg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Of(e, t) {
      if (_a(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!ju.call(t, o) || !_a(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Mp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function qh(e, t) {
      var a = Mp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Mp(a);
      }
    }
    function Up(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Up(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Cp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = vf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = vf(e.document);
      }
      return t;
    }
    function Yh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function _p(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Bg || $d == null || $d !== vf(i) || (i = $d, "selectionStart" in i && Yh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), qm && Of(qm, i) || (qm = i, i = ss(Ng, "onSelect"), 0 < i.length && (t = new be(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = $d)));
    }
    function Tu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Fi(e) {
      if (qg[e]) return qg[e];
      if (!Wd[e]) return e;
      var t = Wd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in L0)
          return qg[e] = t[a];
      return e;
    }
    function un(e, t) {
      K0.set(e, t), ee(t, [e]);
    }
    function Ea(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = wg.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: lr(t)
        }, wg.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: lr(t)
      };
    }
    function Df() {
      for (var e = Fd, t = jg = Fd = 0; t < e; ) {
        var a = uu[t];
        uu[t++] = null;
        var i = uu[t];
        uu[t++] = null;
        var o = uu[t];
        uu[t++] = null;
        var f = uu[t];
        if (uu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Hp(a, o, f);
      }
    }
    function mr(e, t, a, i) {
      uu[Fd++] = e, uu[Fd++] = t, uu[Fd++] = a, uu[Fd++] = i, jg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function wh(e, t, a, i) {
      return mr(e, t, a, i), pr(e);
    }
    function na(e, t) {
      return mr(e, null, null, t), pr(e);
    }
    function Hp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Dv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ll(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function pr(e) {
      if (np > YS)
        throw Ks = np = 0, up = m0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Ks > wS && (Ks = 0, up = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && gn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && gn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ii(e) {
      if (iu === null) return e;
      var t = iu(e);
      return t === void 0 ? e : t.current;
    }
    function jh(e) {
      if (iu === null) return e;
      var t = iu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ii(e.render), e.render !== t) ? (t = { $$typeof: Yu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function xp(e, t) {
      if (iu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Ua) && (i = !0);
          break;
        case 11:
          (o === Yu || o === Ua) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Ts || o === Ua) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = iu(a), e !== void 0 && e === iu(t)));
    }
    function Np(e) {
      iu !== null && typeof WeakSet == "function" && (Id === null && (Id = /* @__PURE__ */ new WeakSet()), Id.add(e));
    }
    function zf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, v = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          v = h;
          break;
        case 11:
          v = h.render;
      }
      if (iu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var b = !1;
      h = !1, v !== null && (v = iu(v), v !== void 0 && (a.has(v) ? h = !0 : t.has(v) && (d === 1 ? h = !0 : b = !0))), Id !== null && (Id.has(e) || i !== null && Id.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || b) && (i = na(e, 2), i !== null && Zt(i, e, 2)), o === null || h || zf(
        o,
        t,
        a
      ), f !== null && zf(
        f,
        t,
        a
      );
    }
    function Mf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, k0 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Gh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Un(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = M(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ii(e.type);
          break;
        case 1:
          a.type = Ii(e.type);
          break;
        case 11:
          a.type = jh(e.type);
      }
      return a;
    }
    function Lh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function vr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Gh(e) && (d = 1), h = Ii(h);
      else if (typeof e == "string")
        d = O(), d = qo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case ym:
            return t = M(31, a, t, o), t.elementType = ym, t.lanes = f, t;
          case je:
            return li(
              a.children,
              o,
              f,
              t
            );
          case wo:
            d = 8, o |= ga, o |= Qu;
            break;
          case jo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = M(12, e, t, i | Pl), t.elementType = jo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Go:
            return t = M(13, a, t, o), t.elementType = Go, t.lanes = f, t;
          case Mi:
            return t = M(19, a, t, o), t.elementType = Mi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hm:
                case Wa:
                  d = 10;
                  break e;
                case Hd:
                  d = 9;
                  break e;
                case Yu:
                  d = 11, h = jh(h);
                  break e;
                case Ts:
                  d = 14;
                  break e;
                case Ua:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : He(e) ? a = "array" : e !== void 0 && e.$$typeof === zi ? (a = "<" + (Fe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Ot(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = M(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Uf(e, t, a) {
      return t = vr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function li(e, t, a, i) {
      return e = M(7, e, i, t), e.lanes = a, e;
    }
    function ai(e, t, a) {
      return e = M(6, e, null, t), e.lanes = a, e;
    }
    function Vh(e, t, a) {
      return t = M(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Pi(e, t) {
      cn(), Pd[eh++] = Mv, Pd[eh++] = zv, zv = e, Mv = t;
    }
    function Bp(e, t, a) {
      cn(), cu[ou++] = Bc, cu[ou++] = qc, cu[ou++] = Ns, Ns = e;
      var i = Bc;
      e = qc;
      var o = 32 - Ll(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ll(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Bc = 1 << 32 - Ll(t) + o | a << o | i, qc = f + e;
      } else
        Bc = 1 << f | a << o | i, qc = e;
    }
    function gr(e) {
      cn(), e.return !== null && (Pi(e, 1), Bp(e, 1, 0));
    }
    function br(e) {
      for (; e === zv; )
        zv = Pd[--eh], Pd[eh] = null, Mv = Pd[--eh], Pd[eh] = null;
      for (; e === Ns; )
        Ns = cu[--ou], cu[ou] = null, qc = cu[--ou], cu[ou] = null, Bc = cu[--ou], cu[ou] = null;
    }
    function cn() {
      ht || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function on(e, t) {
      if (e.return === null) {
        if (fu === null)
          fu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (fu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          fu.distanceFromLeaf > t && (fu.distanceFromLeaf = t);
        }
        return fu;
      }
      var a = on(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Xh(e, t) {
      Yc || (e = on(e, 0), e.serverProps = null, t !== null && (t = Ed(t), e.serverTail.push(t)));
    }
    function Cn(e) {
      var t = "", a = fu;
      throw a !== null && (fu = null, t = Sf(a)), ao(
        Ea(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Gg;
    }
    function Qh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Vl] = e, t[pa] = i, Wn(a, i), a) {
        case "dialog":
          Ie("cancel", t), Ie("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ie("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ip.length; a++)
            Ie(ip[a], t);
          break;
        case "source":
          Ie("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ie("error", t), Ie("load", t);
          break;
        case "details":
          Ie("toggle", t);
          break;
        case "input":
          ye("input", i), Ie("invalid", t), Fu(t, i), Sp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), vu(t);
          break;
        case "option":
          Oh(t, i);
          break;
        case "select":
          ye("select", i), Ie("invalid", t), gf(t, i);
          break;
        case "textarea":
          ye("textarea", i), Ie("invalid", t), zn(t, i), Dh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), vu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Ky(t.textContent, a) ? (i.popover != null && (Ie("beforetoggle", t), Ie("toggle", t)), i.onScroll != null && Ie("scroll", t), i.onScrollEnd != null && Ie("scrollend", t), i.onClick != null && (t.onclick = xu), t = !0) : t = !1, t || Cn(e);
    }
    function Zh(e) {
      for (Ha = e.return; Ha; )
        switch (Ha.tag) {
          case 5:
          case 13:
            qi = !1;
            return;
          case 27:
          case 3:
            qi = !0;
            return;
          default:
            Ha = Ha.return;
        }
    }
    function ec(e) {
      if (e !== Ha) return !1;
      if (!ht)
        return Zh(e), ht = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Fn(e.type, e.memoizedProps)), a = !a), a && ll) {
        for (a = ll; a; ) {
          var i = on(e, 0), o = Ed(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? em(a) : _l(a.nextSibling);
        }
        Cn(e);
      }
      if (Zh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ll = em(e);
      } else
        t === 27 ? (t = ll, In(e.type) ? (e = z0, z0 = null, ll = e) : ll = t) : ll = Ha ? _l(e.stateNode.nextSibling) : null;
      return !0;
    }
    function tc() {
      ll = Ha = null, Yc = ht = !1;
    }
    function Kh() {
      var e = Bs;
      return e !== null && (Ba === null ? Ba = e : Ba.push.apply(
        Ba,
        e
      ), Bs = null), e;
    }
    function ao(e) {
      Bs === null ? Bs = [e] : Bs.push(e);
    }
    function Jh() {
      var e = fu;
      if (e !== null) {
        fu = null;
        for (var t = Sf(e); 0 < e.children.length; )
          e = e.children[0];
        re(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Sr() {
      th = Uv = null, lh = !1;
    }
    function ni(e, t, a) {
      Re(Lg, t._currentValue, e), t._currentValue = a, Re(Vg, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== I0 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = I0;
    }
    function Eu(e, t) {
      e._currentValue = Lg.current;
      var a = Vg.current;
      ve(Vg, t), e._currentRenderer = a, ve(Lg, t);
    }
    function kh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $h(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var v = 0; v < t.length; v++)
              if (h.context === t[v]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), kh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), kh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function zl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            _a(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Vo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(sp) : e = [sp]);
        }
        o = o.return;
      }
      e !== null && $h(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ui(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!_a(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ii(e) {
      Uv = e, th = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ct(e) {
      return lh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Wh(Uv, e);
    }
    function Cf(e, t) {
      return Uv === null && ii(e), Wh(e, t);
    }
    function Wh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, th === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        th = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else th = th.next = t;
      return a;
    }
    function _f() {
      return {
        controller: new ES(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function lc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _n(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && AS(RS, function() {
        e.controller.abort();
      });
    }
    function fn() {
      var e = qs;
      return qs = 0, e;
    }
    function ci(e) {
      var t = qs;
      return qs = e, t;
    }
    function ac(e) {
      var t = qs;
      return qs += e, t;
    }
    function Tr(e) {
      Pa = ah(), 0 > e.actualStartTime && (e.actualStartTime = Pa);
    }
    function Au(e) {
      if (0 <= Pa) {
        var t = ah() - Pa;
        e.actualDuration += t, e.selfBaseDuration = t, Pa = -1;
      }
    }
    function nc(e) {
      if (0 <= Pa) {
        var t = ah() - Pa;
        e.actualDuration += t, Pa = -1;
      }
    }
    function wa() {
      if (0 <= Pa) {
        var e = ah() - Pa;
        Pa = -1, qs += e;
      }
    }
    function sn() {
      Pa = ah();
    }
    function Hn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function qp(e, t) {
      if (Ym === null) {
        var a = Ym = [];
        Xg = 0, Ys = Ly(), nh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Xg++, t.then(Fh, Fh), t;
    }
    function Fh() {
      if (--Xg === 0 && Ym !== null) {
        nh !== null && (nh.status = "fulfilled");
        var e = Ym;
        Ym = null, Ys = 0, nh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Yp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Ih() {
      var e = ws.current;
      return e !== null ? e : _t.pooledCache;
    }
    function Er(e, t) {
      t === null ? Re(ws, ws.current, e) : Re(ws, t.pool, e);
    }
    function wp() {
      var e = Ih();
      return e === null ? null : { parent: Nl._currentValue, pool: e };
    }
    function Ph() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function ey(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function no() {
    }
    function ja(e, t, a) {
      Y.actQueue !== null && (Y.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(no, no), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Aa(e), e;
        default:
          if (typeof t.status == "string")
            t.then(no, no);
          else {
            if (e = _t, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Aa(e), e;
          }
          throw Zm = t, Bv = !0, Qm;
      }
    }
    function ty() {
      if (Zm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Zm;
      return Zm = null, Bv = !1, e;
    }
    function Aa(e) {
      if (e === Qm || e === Nv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function ua(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function oi(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function xn(e) {
      return {
        lane: e,
        tag: a1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function rn(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Kg === i && !i1) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), i1 = !0;
      }
      return (St & Na) !== Tn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = pr(e), Hp(e, null, a), t) : (mr(e, i, t, a), pr(e));
    }
    function fi(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Wu(e, a);
      }
    }
    function uo(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Nn() {
      if (Jg) {
        var e = nh;
        if (e !== null) throw e;
      }
    }
    function io(e, t, a, i) {
      Jg = !1;
      var o = e.updateQueue;
      Io = !1, Kg = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var v = h, b = v.next;
        v.next = null, d === null ? f = b : d.next = b, d = v;
        var B = e.alternate;
        B !== null && (B = B.updateQueue, h = B.lastBaseUpdate, h !== d && (h === null ? B.firstBaseUpdate = b : h.next = b, B.lastBaseUpdate = v));
      }
      if (f !== null) {
        var G = o.baseState;
        d = 0, B = b = v = null, h = f;
        do {
          var H = h.lane & -536870913, L = H !== h.lane;
          if (L ? (at & H) === H : (i & H) === H) {
            H !== 0 && H === Ys && (Jg = !0), B !== null && (B = B.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              H = e;
              var de = h, ze = t, Ht = a;
              switch (de.tag) {
                case n1:
                  if (de = de.payload, typeof de == "function") {
                    lh = !0;
                    var it = de.call(
                      Ht,
                      G,
                      ze
                    );
                    if (H.mode & ga) {
                      ue(!0);
                      try {
                        de.call(Ht, G, ze);
                      } finally {
                        ue(!1);
                      }
                    }
                    lh = !1, G = it;
                    break e;
                  }
                  G = de;
                  break e;
                case Zg:
                  H.flags = H.flags & -65537 | 128;
                case a1:
                  if (it = de.payload, typeof it == "function") {
                    if (lh = !0, de = it.call(
                      Ht,
                      G,
                      ze
                    ), H.mode & ga) {
                      ue(!0);
                      try {
                        it.call(Ht, G, ze);
                      } finally {
                        ue(!1);
                      }
                    }
                    lh = !1;
                  } else de = it;
                  if (de == null) break e;
                  G = Ze({}, G, de);
                  break e;
                case u1:
                  Io = !0;
              }
            }
            H = h.callback, H !== null && (e.flags |= 64, L && (e.flags |= 8192), L = o.callbacks, L === null ? o.callbacks = [H] : L.push(H));
          } else
            L = {
              lane: H,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, B === null ? (b = B = L, v = G) : B = B.next = L, d |= H;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            L = h, h = L.next, L.next = null, o.lastBaseUpdate = L, o.shared.pending = null;
          }
        } while (!0);
        B === null && (v = G), o.baseState = v, o.firstBaseUpdate = b, o.lastBaseUpdate = B, f === null && (o.shared.lanes = 0), lf |= d, e.lanes = d, e.memoizedState = G;
      }
      Kg = null;
    }
    function Hf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function co(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Hf(a[e], t);
    }
    function jp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Hf(a[e], t);
    }
    function ia(e, t) {
      var a = ji;
      Re(qv, a, e), Re(uh, t, e), ji = a | t.baseLanes;
    }
    function xf(e) {
      Re(qv, ji, e), Re(
        uh,
        uh.current,
        e
      );
    }
    function dn(e) {
      ji = qv.current, ve(uh, e), ve(qv, e);
    }
    function Je() {
      var e = j;
      du === null ? du = [e] : du.push(e);
    }
    function P() {
      var e = j;
      if (du !== null && (jc++, du[jc] !== e)) {
        var t = se(xe);
        if (!c1.has(t) && (c1.add(t), du !== null)) {
          for (var a = "", i = 0; i <= jc; i++) {
            var o = du[i], f = i === jc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ga(e) {
      e == null || He(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        j,
        typeof e
      );
    }
    function oo() {
      var e = se(xe);
      f1.has(e) || (f1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Gt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function si(e, t) {
      if (Jm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          j
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        j,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!_a(e[a], t[a])) return !1;
      return !0;
    }
    function ri(e, t, a, i, o, f) {
      Po = f, xe = t, du = e !== null ? e._debugHookTypes : null, jc = -1, Jm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(xe), kg.has(f) || (kg.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e !== null && e.memoizedState !== null ? Wg : du !== null ? s1 : $g, Gs = f = (t.mode & ga) !== qt;
      var d = Fg(a, i, o);
      if (Gs = !1, ch && (d = fo(
        t,
        a,
        i,
        o
      )), f) {
        ue(!0);
        try {
          d = fo(
            t,
            a,
            i,
            o
          );
        } finally {
          ue(!1);
        }
      }
      return Nf(e, t), d;
    }
    function Nf(e, t) {
      t._debugHookTypes = du, t.dependencies === null ? wc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: wc
      }) : t.dependencies._debugThenableState = wc, Y.H = jv;
      var a = Ut !== null && Ut.next !== null;
      if (Po = 0, du = j = Sl = Ut = xe = null, jc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Yv = !1, Km = 0, wc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xl || (e = e.dependencies, e !== null && ui(e) && (Xl = !0)), Bv ? (Bv = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", o1.has(t) || kg.has(t) || (o1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function fo(e, t, a, i) {
      xe = e;
      var o = 0;
      do {
        if (ch && (wc = null), Km = 0, ch = !1, o >= DS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Jm = !1, Sl = Ut = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        jc = -1, Y.H = r1, f = Fg(t, a, i);
      } while (ch);
      return f;
    }
    function La() {
      var e = Y.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? uc(t) : t, e = e.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== e && (xe.flags |= 1024), t;
    }
    function ca() {
      var e = wv !== 0;
      return wv = 0, e;
    }
    function Ru(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Qu) !== qt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function hn(e) {
      if (Yv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yv = !1;
      }
      Po = 0, du = Sl = Ut = xe = null, jc = -1, j = null, ch = !1, Km = wv = 0, wc = null;
    }
    function Xt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sl === null ? xe.memoizedState = Sl = e : Sl = Sl.next = e, Sl;
    }
    function ut() {
      if (Ut === null) {
        var e = xe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ut.next;
      var t = Sl === null ? xe.memoizedState : Sl.next;
      if (t !== null)
        Sl = t, Ut = e;
      else {
        if (e === null)
          throw xe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Ut = e, e = {
          memoizedState: Ut.memoizedState,
          baseState: Ut.baseState,
          baseQueue: Ut.baseQueue,
          queue: Ut.queue,
          next: null
        }, Sl === null ? xe.memoizedState = Sl = e : Sl = Sl.next = e;
      }
      return Sl;
    }
    function Ar() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function uc(e) {
      var t = Km;
      return Km += 1, wc === null && (wc = Ph()), e = ja(wc, e, t), t = xe, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, Y.H = t !== null && t.memoizedState !== null ? Wg : $g), e;
    }
    function Bn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return uc(e);
        if (e.$$typeof === Wa) return Ct(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ft(e) {
      var t = null, a = xe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = xe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ar(), xe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Jm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = yv;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function st(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ft(e, t, a) {
      var i = Xt();
      if (a !== void 0) {
        var o = a(t);
        if (Gs) {
          ue(!0);
          try {
            a(t);
          } finally {
            ue(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = sy.bind(
        null,
        xe,
        e
      ), [i.memoizedState, e];
    }
    function Va(e) {
      var t = ut();
      return Xa(t, Ut, e);
    }
    function Xa(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, v = null, b = t, B = !1;
        do {
          var G = b.lane & -536870913;
          if (G !== b.lane ? (at & G) === G : (Po & G) === G) {
            var H = b.revertLane;
            if (H === 0)
              v !== null && (v = v.next = {
                lane: 0,
                revertLane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }), G === Ys && (B = !0);
            else if ((Po & H) === H) {
              b = b.next, H === Ys && (B = !0);
              continue;
            } else
              G = {
                lane: 0,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, v === null ? (h = v = G, d = f) : v = v.next = G, xe.lanes |= H, lf |= H;
            G = b.action, Gs && a(f, G), f = b.hasEagerState ? b.eagerState : a(f, G);
          } else
            H = {
              lane: G,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, v === null ? (h = v = H, d = f) : v = v.next = H, xe.lanes |= G, lf |= G;
          b = b.next;
        } while (b !== null && b !== t);
        if (v === null ? d = f : v.next = h, !_a(f, e.memoizedState) && (Xl = !0, B && (a = nh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = v, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function ic(e) {
      var t = ut(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        _a(f, t.memoizedState) || (Xl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Ou(e, t, a) {
      var i = xe, o = Xt();
      if (ht) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        ih || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), ih = !0);
      } else {
        if (f = t(), ih || (a = t(), _a(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), ih = !0)), _t === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (at & 124) !== 0 || ly(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Dr(
        ro.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Yn(
        ru | Bl,
        hi(),
        so.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Bf(e, t, a) {
      var i = xe, o = ut(), f = ht;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !ih) {
        var d = t();
        _a(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), ih = !0);
      }
      (d = !_a(
        (Ut || o).memoizedState,
        a
      )) && (o.memoizedState = a, Xl = !0), o = o.queue;
      var h = ro.bind(null, i, o, e);
      if (ol(2048, Bl, h, [e]), o.getSnapshot !== t || d || Sl !== null && Sl.memoizedState.tag & ru) {
        if (i.flags |= 2048, Yn(
          ru | Bl,
          hi(),
          so.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), _t === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Po & 124) !== 0 || ly(i, t, a);
      }
      return a;
    }
    function ly(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = xe.updateQueue, t === null ? (t = Ar(), xe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function so(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ay(t) && ho(e);
    }
    function ro(e, t, a) {
      return a(function() {
        ay(t) && ho(e);
      });
    }
    function ay(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !_a(e, a);
      } catch {
        return !0;
      }
    }
    function ho(e) {
      var t = na(e, 2);
      t !== null && Zt(t, e, 2);
    }
    function qf(e) {
      var t = Xt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Gs) {
          ue(!0);
          try {
            a();
          } finally {
            ue(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: st,
        lastRenderedState: e
      }, t;
    }
    function Du(e) {
      e = qf(e);
      var t = e.queue, a = vo.bind(null, xe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function yn(e) {
      var t = Xt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Br.bind(
        null,
        xe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function zu(e, t) {
      var a = ut();
      return qn(a, Ut, e, t);
    }
    function qn(e, t, a, i) {
      return e.baseState = a, Xa(
        e,
        Ut,
        typeof i == "function" ? i : st
      );
    }
    function Rr(e, t) {
      var a = ut();
      return Ut !== null ? qn(a, Ut, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function ny(e, t, a, i, o) {
      if (Xf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Y.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, yo(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function yo(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Y.T, d = {};
        Y.T = d, Y.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), v = Y.S;
          v !== null && v(d, h), Yf(e, t, h);
        } catch (b) {
          ml(e, t, b);
        } finally {
          Y.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Yf(e, t, d);
        } catch (b) {
          ml(e, t, b);
        }
    }
    function Yf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          di(e, t, i);
        },
        function(i) {
          return ml(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : di(e, t, a);
    }
    function di(e, t, a) {
      t.status = "fulfilled", t.value = a, wf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, yo(e, a)));
    }
    function ml(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, wf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function wf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function uy(e, t) {
      return t;
    }
    function mo(e, t) {
      if (ht) {
        var a = _t.formState;
        if (a !== null) {
          e: {
            var i = xe;
            if (ht) {
              if (ll) {
                t: {
                  for (var o = ll, f = qi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = _l(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === A0 || f === fb ? o : null;
                }
                if (o) {
                  ll = _l(
                    o.nextSibling
                  ), i = o.data === A0;
                  break e;
                }
              }
              Cn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Xt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uy,
        lastRenderedState: t
      }, a.queue = i, a = vo.bind(
        null,
        xe,
        i
      ), i.dispatch = a, i = qf(!1), f = Br.bind(
        null,
        xe,
        !1,
        i.queue
      ), i = Xt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = ny.bind(
        null,
        xe,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Or(e) {
      var t = ut();
      return Gp(t, Ut, e);
    }
    function Gp(e, t, a) {
      if (t = Xa(
        e,
        t,
        uy
      )[0], e = Va(st)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = uc(t);
        } catch (d) {
          throw d === Qm ? Nv : d;
        }
      else i = t;
      t = ut();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (xe.flags |= 2048, Yn(
        ru | Bl,
        hi(),
        cl.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function cl(e, t) {
      e.action = t;
    }
    function po(e) {
      var t = ut(), a = Ut;
      if (a !== null)
        return Gp(t, a, e);
      ut(), t = t.memoizedState, a = ut();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Yn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = xe.updateQueue, t === null && (t = Ar(), xe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function hi() {
      return { destroy: void 0, resource: void 0 };
    }
    function jf(e) {
      var t = Xt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Qa(e, t, a, i) {
      var o = Xt();
      i = i === void 0 ? null : i, xe.flags |= e, o.memoizedState = Yn(
        ru | t,
        hi(),
        a,
        i
      );
    }
    function ol(e, t, a, i) {
      var o = ut();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Ut !== null && i !== null && si(i, Ut.memoizedState.deps) ? o.memoizedState = Yn(t, f, a, i) : (xe.flags |= e, o.memoizedState = Yn(
        ru | t,
        f,
        a,
        i
      ));
    }
    function Dr(e, t) {
      (xe.mode & Qu) !== qt && (xe.mode & J0) === qt ? Qa(276826112, Bl, e, t) : Qa(8390656, Bl, e, t);
    }
    function zr(e, t) {
      var a = 4194308;
      return (xe.mode & Qu) !== qt && (a |= 134217728), Qa(a, ea, e, t);
    }
    function Lp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Mr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (xe.mode & Qu) !== qt && (i |= 134217728), Qa(
        i,
        ea,
        Lp.bind(null, t, e),
        a
      );
    }
    function wn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, ol(
        4,
        ea,
        Lp.bind(null, t, e),
        a
      );
    }
    function Gf(e, t) {
      return Xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function cc(e, t) {
      var a = ut();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && si(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Ur(e, t) {
      var a = Xt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Gs) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function yi(e, t) {
      var a = ut();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && si(t, i[1]))
        return i[0];
      if (i = e(), Gs) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Cr(e, t) {
      var a = Xt();
      return Hr(a, e, t);
    }
    function Lf(e, t) {
      var a = ut();
      return Vf(
        a,
        Ut.memoizedState,
        e,
        t
      );
    }
    function _r(e, t) {
      var a = ut();
      return Ut === null ? Hr(a, e, t) : Vf(
        a,
        Ut.memoizedState,
        e,
        t
      );
    }
    function Hr(e, t, a) {
      return a === void 0 || (Po & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Fp(), xe.lanes |= e, lf |= e, a);
    }
    function Vf(e, t, a, i) {
      return _a(a, t) ? a : uh.current !== null ? (e = Hr(e, a, i), _a(e, t) || (Xl = !0), e) : (Po & 42) === 0 ? (Xl = !0, e.memoizedState = a) : (e = Fp(), xe.lanes |= e, lf |= e, t);
    }
    function iy(e, t, a, i, o) {
      var f = De.p;
      De.p = f !== 0 && f < Sn ? f : Sn;
      var d = Y.T, h = {};
      Y.T = h, Br(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var v = o(), b = Y.S;
        if (b !== null && b(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
          var B = Yp(
            v,
            i
          );
          Mu(
            e,
            t,
            B,
            ra(e)
          );
        } else
          Mu(
            e,
            t,
            i,
            ra(e)
          );
      } catch (G) {
        Mu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: G },
          ra(e)
        );
      } finally {
        De.p = f, Y.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function oc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = cy(e).queue;
      iy(
        e,
        o,
        t,
        Fs,
        a === null ? oe : function() {
          return oy(e), a(i);
        }
      );
    }
    function cy(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Fs,
        baseState: Fs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: st,
          lastRenderedState: Fs
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: st,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function oy(e) {
      Y.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = cy(e).next.queue;
      Mu(
        e,
        t,
        {},
        ra(e)
      );
    }
    function jn() {
      var e = qf(!1);
      return e = iy.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), Xt().memoizedState = e, [!1, e];
    }
    function xr() {
      var e = Va(st)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : uc(e),
        t
      ];
    }
    function Nr() {
      var e = ic(st)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : uc(e),
        t
      ];
    }
    function oa() {
      return Ct(sp);
    }
    function Gn() {
      var e = Xt(), t = _t.identifierPrefix;
      if (ht) {
        var a = qc, i = Bc;
        a = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = wv++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = OS++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function fc() {
      return Xt().memoizedState = fy.bind(
        null,
        xe
      );
    }
    function fy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ra(a);
            e = xn(i);
            var o = rn(a, e, i);
            o !== null && (Zt(o, a, i), fi(o, a, i)), a = _f(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function sy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Xf(e) ? sc(t, o) : (o = wh(e, t, o, i), o !== null && (Zt(o, e, i), Qf(o, t, i))), On(e, i);
    }
    function vo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e), Mu(e, t, a, i), On(e, i);
    }
    function Mu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Xf(e)) sc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Y.H;
          Y.H = Ku;
          try {
            var h = t.lastRenderedState, v = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = v, _a(v, h))
              return mr(e, t, o, 0), _t === null && Df(), !1;
          } catch {
          } finally {
            Y.H = d;
          }
        }
        if (a = wh(e, t, o, i), a !== null)
          return Zt(a, e, i), Qf(a, t, i), !0;
      }
      return !1;
    }
    function Br(e, t, a, i) {
      if (Y.T === null && Ys === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ly(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Xf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = wh(
          e,
          a,
          i,
          2
        ), t !== null && Zt(t, e, 2);
      On(e, 2);
    }
    function Xf(e) {
      var t = e.alternate;
      return e === xe || t !== null && t === xe;
    }
    function sc(e, t) {
      ch = Yv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Qf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Wu(e, a);
      }
    }
    function pl(e) {
      var t = $e;
      return e != null && ($e = t === null ? e : t.concat(e)), t;
    }
    function go(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Uf(e, a.mode, 0), t._debugInfo = $e, t.return = a), re(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function bo(e) {
      var t = km;
      return km += 1, oh === null && (oh = Ph()), ja(oh, e, t);
    }
    function Za(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function we(e, t) {
      throw t.$$typeof === Ss ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function pt(e, t) {
      var a = se(e) || "Component";
      D1[a] || (D1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Lt(e, t) {
      var a = se(e) || "Component";
      z1[a] || (z1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Zf(e) {
      function t(T, E) {
        if (e) {
          var A = T.deletions;
          A === null ? (T.deletions = [E], T.flags |= 16) : A.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = Un(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, A) {
        return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < E ? (T.flags |= 67108866, E) : A) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, A, V) {
        return E === null || E.tag !== 6 ? (E = ai(
          A,
          T.mode,
          V
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = $e, E) : (E = o(E, A), E.return = T, E._debugInfo = $e, E);
      }
      function v(T, E, A, V) {
        var te = A.type;
        return te === je ? (E = B(
          T,
          E,
          A.props.children,
          V,
          A.key
        ), go(A, E, T), E) : E !== null && (E.elementType === te || xp(E, A) || typeof te == "object" && te !== null && te.$$typeof === Ua && ef(te) === E.type) ? (E = o(E, A.props), Za(E, A), E.return = T, E._debugOwner = A._owner, E._debugInfo = $e, E) : (E = Uf(A, T.mode, V), Za(E, A), E.return = T, E._debugInfo = $e, E);
      }
      function b(T, E, A, V) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== A.containerInfo || E.stateNode.implementation !== A.implementation ? (E = Vh(A, T.mode, V), E.return = T, E._debugInfo = $e, E) : (E = o(E, A.children || []), E.return = T, E._debugInfo = $e, E);
      }
      function B(T, E, A, V, te) {
        return E === null || E.tag !== 7 ? (E = li(
          A,
          T.mode,
          V,
          te
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = $e, E) : (E = o(E, A), E.return = T, E._debugInfo = $e, E);
      }
      function G(T, E, A) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = ai(
            "" + E,
            T.mode,
            A
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = $e, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case zi:
              return A = Uf(
                E,
                T.mode,
                A
              ), Za(A, E), A.return = T, T = pl(E._debugInfo), A._debugInfo = $e, $e = T, A;
            case Uc:
              return E = Vh(
                E,
                T.mode,
                A
              ), E.return = T, E._debugInfo = $e, E;
            case Ua:
              var V = pl(E._debugInfo);
              return E = ef(E), T = G(T, E, A), $e = V, T;
          }
          if (He(E) || Rt(E))
            return A = li(
              E,
              T.mode,
              A,
              null
            ), A.return = T, A._debugOwner = T, A._debugTask = T._debugTask, T = pl(E._debugInfo), A._debugInfo = $e, $e = T, A;
          if (typeof E.then == "function")
            return V = pl(E._debugInfo), T = G(
              T,
              bo(E),
              A
            ), $e = V, T;
          if (E.$$typeof === Wa)
            return G(
              T,
              Cf(T, E),
              A
            );
          we(T, E);
        }
        return typeof E == "function" && pt(T, E), typeof E == "symbol" && Lt(T, E), null;
      }
      function H(T, E, A, V) {
        var te = E !== null ? E.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
          return te !== null ? null : h(T, E, "" + A, V);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case zi:
              return A.key === te ? (te = pl(A._debugInfo), T = v(
                T,
                E,
                A,
                V
              ), $e = te, T) : null;
            case Uc:
              return A.key === te ? b(T, E, A, V) : null;
            case Ua:
              return te = pl(A._debugInfo), A = ef(A), T = H(
                T,
                E,
                A,
                V
              ), $e = te, T;
          }
          if (He(A) || Rt(A))
            return te !== null ? null : (te = pl(A._debugInfo), T = B(
              T,
              E,
              A,
              V,
              null
            ), $e = te, T);
          if (typeof A.then == "function")
            return te = pl(A._debugInfo), T = H(
              T,
              E,
              bo(A),
              V
            ), $e = te, T;
          if (A.$$typeof === Wa)
            return H(
              T,
              E,
              Cf(T, A),
              V
            );
          we(T, A);
        }
        return typeof A == "function" && pt(T, A), typeof A == "symbol" && Lt(T, A), null;
      }
      function L(T, E, A, V, te) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return T = T.get(A) || null, h(E, T, "" + V, te);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case zi:
              return A = T.get(
                V.key === null ? A : V.key
              ) || null, T = pl(V._debugInfo), E = v(
                E,
                A,
                V,
                te
              ), $e = T, E;
            case Uc:
              return T = T.get(
                V.key === null ? A : V.key
              ) || null, b(E, T, V, te);
            case Ua:
              var Ge = pl(V._debugInfo);
              return V = ef(V), E = L(
                T,
                E,
                A,
                V,
                te
              ), $e = Ge, E;
          }
          if (He(V) || Rt(V))
            return A = T.get(A) || null, T = pl(V._debugInfo), E = B(
              E,
              A,
              V,
              te,
              null
            ), $e = T, E;
          if (typeof V.then == "function")
            return Ge = pl(V._debugInfo), E = L(
              T,
              E,
              A,
              bo(V),
              te
            ), $e = Ge, E;
          if (V.$$typeof === Wa)
            return L(
              T,
              E,
              A,
              Cf(E, V),
              te
            );
          we(E, V);
        }
        return typeof V == "function" && pt(E, V), typeof V == "symbol" && Lt(E, V), null;
      }
      function de(T, E, A, V) {
        if (typeof A != "object" || A === null) return V;
        switch (A.$$typeof) {
          case zi:
          case Uc:
            yt(T, E, A);
            var te = A.key;
            if (typeof te != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(te);
              break;
            }
            if (!V.has(te)) {
              V.add(te);
              break;
            }
            re(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                te
              );
            });
            break;
          case Ua:
            A = ef(A), de(T, E, A, V);
        }
        return V;
      }
      function ze(T, E, A, V) {
        for (var te = null, Ge = null, he = null, Le = E, Ve = E = 0, Yt = null; Le !== null && Ve < A.length; Ve++) {
          Le.index > Ve ? (Yt = Le, Le = null) : Yt = Le.sibling;
          var dl = H(
            T,
            Le,
            A[Ve],
            V
          );
          if (dl === null) {
            Le === null && (Le = Yt);
            break;
          }
          te = de(
            T,
            dl,
            A[Ve],
            te
          ), e && Le && dl.alternate === null && t(T, Le), E = f(dl, E, Ve), he === null ? Ge = dl : he.sibling = dl, he = dl, Le = Yt;
        }
        if (Ve === A.length)
          return a(T, Le), ht && Pi(T, Ve), Ge;
        if (Le === null) {
          for (; Ve < A.length; Ve++)
            Le = G(T, A[Ve], V), Le !== null && (te = de(
              T,
              Le,
              A[Ve],
              te
            ), E = f(
              Le,
              E,
              Ve
            ), he === null ? Ge = Le : he.sibling = Le, he = Le);
          return ht && Pi(T, Ve), Ge;
        }
        for (Le = i(Le); Ve < A.length; Ve++)
          Yt = L(
            Le,
            T,
            Ve,
            A[Ve],
            V
          ), Yt !== null && (te = de(
            T,
            Yt,
            A[Ve],
            te
          ), e && Yt.alternate !== null && Le.delete(
            Yt.key === null ? Ve : Yt.key
          ), E = f(
            Yt,
            E,
            Ve
          ), he === null ? Ge = Yt : he.sibling = Yt, he = Yt);
        return e && Le.forEach(function(Zc) {
          return t(T, Zc);
        }), ht && Pi(T, Ve), Ge;
      }
      function Ht(T, E, A, V) {
        if (A == null)
          throw Error("An iterable object provided no iterator.");
        for (var te = null, Ge = null, he = E, Le = E = 0, Ve = null, Yt = null, dl = A.next(); he !== null && !dl.done; Le++, dl = A.next()) {
          he.index > Le ? (Ve = he, he = null) : Ve = he.sibling;
          var Zc = H(T, he, dl.value, V);
          if (Zc === null) {
            he === null && (he = Ve);
            break;
          }
          Yt = de(
            T,
            Zc,
            dl.value,
            Yt
          ), e && he && Zc.alternate === null && t(T, he), E = f(Zc, E, Le), Ge === null ? te = Zc : Ge.sibling = Zc, Ge = Zc, he = Ve;
        }
        if (dl.done)
          return a(T, he), ht && Pi(T, Le), te;
        if (he === null) {
          for (; !dl.done; Le++, dl = A.next())
            he = G(T, dl.value, V), he !== null && (Yt = de(
              T,
              he,
              dl.value,
              Yt
            ), E = f(
              he,
              E,
              Le
            ), Ge === null ? te = he : Ge.sibling = he, Ge = he);
          return ht && Pi(T, Le), te;
        }
        for (he = i(he); !dl.done; Le++, dl = A.next())
          Ve = L(
            he,
            T,
            Le,
            dl.value,
            V
          ), Ve !== null && (Yt = de(
            T,
            Ve,
            dl.value,
            Yt
          ), e && Ve.alternate !== null && he.delete(
            Ve.key === null ? Le : Ve.key
          ), E = f(
            Ve,
            E,
            Le
          ), Ge === null ? te = Ve : Ge.sibling = Ve, Ge = Ve);
        return e && he.forEach(function(IS) {
          return t(T, IS);
        }), ht && Pi(T, Le), te;
      }
      function it(T, E, A, V) {
        if (typeof A == "object" && A !== null && A.type === je && A.key === null && (go(A, null, T), A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case zi:
              var te = pl(A._debugInfo);
              e: {
                for (var Ge = A.key; E !== null; ) {
                  if (E.key === Ge) {
                    if (Ge = A.type, Ge === je) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), V = o(
                          E,
                          A.props.children
                        ), V.return = T, V._debugOwner = A._owner, V._debugInfo = $e, go(A, V, T), T = V;
                        break e;
                      }
                    } else if (E.elementType === Ge || xp(
                      E,
                      A
                    ) || typeof Ge == "object" && Ge !== null && Ge.$$typeof === Ua && ef(Ge) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), V = o(E, A.props), Za(V, A), V.return = T, V._debugOwner = A._owner, V._debugInfo = $e, T = V;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                A.type === je ? (V = li(
                  A.props.children,
                  T.mode,
                  V,
                  A.key
                ), V.return = T, V._debugOwner = T, V._debugTask = T._debugTask, V._debugInfo = $e, go(A, V, T), T = V) : (V = Uf(
                  A,
                  T.mode,
                  V
                ), Za(V, A), V.return = T, V._debugInfo = $e, T = V);
              }
              return T = d(T), $e = te, T;
            case Uc:
              e: {
                for (te = A, A = te.key; E !== null; ) {
                  if (E.key === A)
                    if (E.tag === 4 && E.stateNode.containerInfo === te.containerInfo && E.stateNode.implementation === te.implementation) {
                      a(
                        T,
                        E.sibling
                      ), V = o(
                        E,
                        te.children || []
                      ), V.return = T, T = V;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                V = Vh(
                  te,
                  T.mode,
                  V
                ), V.return = T, T = V;
              }
              return d(T);
            case Ua:
              return te = pl(A._debugInfo), A = ef(A), T = it(
                T,
                E,
                A,
                V
              ), $e = te, T;
          }
          if (He(A))
            return te = pl(A._debugInfo), T = ze(
              T,
              E,
              A,
              V
            ), $e = te, T;
          if (Rt(A)) {
            if (te = pl(A._debugInfo), Ge = Rt(A), typeof Ge != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var he = Ge.call(A);
            return he === A ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(he) !== "[object Generator]") && (R1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), R1 = !0) : A.entries !== Ge || Pg || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Pg = !0), T = Ht(
              T,
              E,
              he,
              V
            ), $e = te, T;
          }
          if (typeof A.then == "function")
            return te = pl(A._debugInfo), T = it(
              T,
              E,
              bo(A),
              V
            ), $e = te, T;
          if (A.$$typeof === Wa)
            return it(
              T,
              E,
              Cf(T, A),
              V
            );
          we(T, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (te = "" + A, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), V = o(E, te), V.return = T, T = V) : (a(T, E), V = ai(
          te,
          T.mode,
          V
        ), V.return = T, V._debugOwner = T, V._debugTask = T._debugTask, V._debugInfo = $e, T = V), d(T)) : (typeof A == "function" && pt(T, A), typeof A == "symbol" && Lt(T, A), a(T, E));
      }
      return function(T, E, A, V) {
        var te = $e;
        $e = null;
        try {
          km = 0;
          var Ge = it(
            T,
            E,
            A,
            V
          );
          return oh = null, Ge;
        } catch (Yt) {
          if (Yt === Qm || Yt === Nv) throw Yt;
          var he = M(29, Yt, null, T.mode);
          he.lanes = V, he.return = T;
          var Le = he._debugInfo = $e;
          if (he._debugOwner = T._debugOwner, he._debugTask = T._debugTask, Le != null) {
            for (var Ve = Le.length - 1; 0 <= Ve; Ve--)
              if (typeof Le[Ve].stack == "string") {
                he._debugOwner = Le[Ve], he._debugTask = Le[Ve].debugTask;
                break;
              }
          }
          return he;
        } finally {
          $e = te;
        }
      };
    }
    function Ra(e) {
      var t = e.alternate;
      Re(
        ql,
        ql.current & sh,
        e
      ), Re(hu, e, e), wi === null && (t === null || uh.current !== null || t.memoizedState !== null) && (wi = e);
    }
    function mi(e) {
      if (e.tag === 22) {
        if (Re(ql, ql.current, e), Re(hu, e, e), wi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (wi = e);
        }
      } else mn(e);
    }
    function mn(e) {
      Re(ql, ql.current, e), Re(
        hu,
        hu.current,
        e
      );
    }
    function Oa(e) {
      ve(hu, e), wi === e && (wi = null), ve(ql, e);
    }
    function Uu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Vc || Pn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function ry(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        j1.has(t) || (j1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Vt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ga) {
        ue(!0);
        try {
          f = a(i, o);
        } finally {
          ue(!1);
        }
      }
      f === void 0 && (t = Fe(t) || "Component", B1.has(t) || (B1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ze({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function qr(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ga) {
          ue(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ue(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Fe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Of(a, i) || !Of(o, f) : !0;
    }
    function Yr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", C1.has(e) || (C1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), e0.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function pi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ze({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function dy(e) {
      t0(e), console.warn(
        `%s

%s
`,
        rh ? "An error occurred in the <" + rh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Vp(e) {
      var t = rh ? "The above error occurred in the <" + rh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((l0 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          vb + e[0],
          gb,
          ng + i + ng,
          bb
        ) : e.splice(
          0,
          0,
          vb,
          gb,
          ng + i + ng,
          bb
        ), e.unshift(console), i = WS.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function wr(e) {
      t0(e);
    }
    function So(e, t) {
      try {
        rh = t.source ? se(t.source) : null, l0 = null;
        var a = t.value;
        if (Y.actQueue !== null)
          Y.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function jr(e, t, a) {
      try {
        rh = a.source ? se(a.source) : null, l0 = se(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wl(e, t, a) {
      return a = xn(a), a.tag = Zg, a.payload = { element: null }, a.callback = function() {
        re(t.source, So, e, t);
      }, a;
    }
    function Qt(e) {
      return e = xn(e), e.tag = Zg, e;
    }
    function Kf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Np(a), re(
            i.source,
            jr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Np(a), re(
          i.source,
          jr,
          t,
          a,
          i
        ), typeof o != "function" && (nf === null ? nf = /* @__PURE__ */ new Set([this]) : nf.add(this)), zS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function Jf(e, t, a, i, o) {
      if (a.flags |= 32768, Wt && Mo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && zl(
          t,
          a,
          o,
          !0
        ), ht && (Yc = !0), a = hu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return wi === null ? ud() : a.alternate === null && al === Lc && (al = i0), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Qg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Yy(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Qg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Yy(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Yy(e, i, o), ud(), !1;
      }
      if (ht)
        return Yc = !0, t = hu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Gg && ao(
          Ea(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Gg && ao(
          Ea(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ea(i, a), o = wl(
          e.stateNode,
          i,
          o
        ), uo(e, o), al !== Ls && (al = mh)), !1;
      var f = Ea(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (lp === null ? lp = [f] : lp.push(f), al !== Ls && (al = mh), t === null) return !0;
      i = Ea(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = wl(
              a.stateNode,
              i,
              e
            ), uo(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (nf === null || !nf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Qt(o), Kf(
                o,
                e,
                a,
                i
              ), uo(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function tl(e, t, a, i) {
      t.child = e === null ? M1(t, null, a, i) : fh(
        t,
        e.child,
        a,
        i
      );
    }
    function Gr(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ii(t), xt(t), i = ri(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = ca(), la(), e !== null && !Xl ? (Ru(e, t, o), Vn(e, t, o)) : (ht && h && gr(t), t.flags |= 1, tl(e, t, i, o), t.child);
    }
    function Ln(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Gh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Ii(f), t.tag = 15, t.type = a, Qr(t, f), kf(
          e,
          t,
          a,
          i,
          o
        )) : (e = vr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Wr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Of, a(d, i) && e.ref === t.ref)
          return Vn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Un(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function kf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Of(f, i) && e.ref === t.ref && t.type === e.type)
          if (Xl = !1, t.pendingProps = i = f, Wr(e, o))
            (e.flags & 131072) !== 0 && (Xl = !0);
          else
            return t.lanes = e.lanes, Vn(e, t, o);
      }
      return Xr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Lr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Vr(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Er(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? ia(t, f) : xf(t), mi(t);
        else
          return t.lanes = t.childLanes = 536870912, Vr(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Er(t, f.cachePool), ia(t, f), mn(t), t.memoizedState = null) : (e !== null && Er(t, null), xf(t), mn(t));
      return tl(e, t, o, a), t.child;
    }
    function Vr(e, t, a, i) {
      var o = Ih();
      return o = o === null ? null : {
        parent: Nl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Er(t, null), xf(t), mi(t), e !== null && zl(e, t, i, !0), null;
    }
    function $f(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Xr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Fe(a) || "Unknown";
        L1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), L1[f] = !0);
      }
      return t.mode & ga && Zu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Qr(t, t.type), a.contextTypes && (f = Fe(a) || "Unknown", X1[f] || (X1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ii(t), xt(t), a = ri(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = ca(), la(), e !== null && !Xl ? (Ru(e, t, o), Vn(e, t, o)) : (ht && i && gr(t), t.flags |= 1, tl(e, t, a, o), t.child);
    }
    function hy(e, t, a, i, o, f) {
      return ii(t), xt(t), jc = -1, Jm = e !== null && e.type !== t.type, t.updateQueue = null, a = fo(
        t,
        i,
        a,
        o
      ), Nf(e, t), i = ca(), la(), e !== null && !Xl ? (Ru(e, t, f), Vn(e, t, f)) : (ht && i && gr(t), t.flags |= 1, tl(e, t, a, f), t.child);
    }
    function yy(e, t, a, i, o) {
      switch (lt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = _t, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Qt(h), Kf(
            h,
            d,
            t,
            Ea(f, t)
          ), uo(t, h);
      }
      if (ii(t), t.stateNode === null) {
        if (d = Fo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Wa) && !w1.has(a) && (w1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Hd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Fe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Ct(f)), f = new a(i, d), t.mode & ga) {
          ue(!0);
          try {
            f = new a(i, d);
          } finally {
            ue(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = e0, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = U1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Fe(a) || "Component", _1.has(d) || (_1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var v = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? v = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (v = "UNSAFE_componentWillUpdate"), d !== null || h !== null || v !== null) {
            f = Fe(a) || "Component";
            var b = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            x1.has(f) || (x1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              b,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              v !== null ? `
  ` + v : ""
            ));
          }
        }
        f = t.stateNode, d = Fe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Y1.has(a) && (Y1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !q1.has(a) && (q1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Fe(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || H1.has(a) || (H1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Fe(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || He(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, ua(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Ct(d) : Fo, f.state === i && (d = Fe(a) || "Component", N1.has(d) || (N1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ga && Zu.recordLegacyContextWarning(
          t,
          f
        ), Zu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Vt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), e0.enqueueReplaceState(
          f,
          f.state,
          null
        )), io(t, i, f, o), Nn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var B = t.memoizedProps;
        h = pi(a, B), f.props = h;
        var G = f.context;
        v = a.contextType, d = Fo, typeof v == "object" && v !== null && (d = Ct(v)), b = a.getDerivedStateFromProps, v = typeof b == "function" || typeof f.getSnapshotBeforeUpdate == "function", B = t.pendingProps !== B, v || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (B || G !== d) && Yr(
          t,
          f,
          i,
          d
        ), Io = !1;
        var H = t.memoizedState;
        f.state = H, io(t, i, f, o), Nn(), G = t.memoizedState, B || H !== G || Io ? (typeof b == "function" && (Vt(
          t,
          a,
          b,
          i
        ), G = t.memoizedState), (h = Io || qr(
          t,
          a,
          h,
          i,
          H,
          G,
          d
        )) ? (v || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, oi(e, t), d = t.memoizedProps, v = pi(a, d), f.props = v, b = t.pendingProps, H = f.context, G = a.contextType, h = Fo, typeof G == "object" && G !== null && (h = Ct(G)), B = a.getDerivedStateFromProps, (G = typeof B == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== b || H !== h) && Yr(
          t,
          f,
          i,
          h
        ), Io = !1, H = t.memoizedState, f.state = H, io(t, i, f, o), Nn();
        var L = t.memoizedState;
        d !== b || H !== L || Io || e !== null && e.dependencies !== null && ui(e.dependencies) ? (typeof B == "function" && (Vt(
          t,
          a,
          B,
          i
        ), L = t.memoizedState), (v = Io || qr(
          t,
          a,
          v,
          i,
          H,
          L,
          h
        ) || e !== null && e.dependencies !== null && ui(e.dependencies)) ? (G || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, L, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          L,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = h, f = v) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, $f(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, mf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Pa = -1;
        else {
          if (xt(t), a = y1(h), t.mode & ga) {
            ue(!0);
            try {
              y1(h);
            } finally {
              ue(!1);
            }
          }
          la();
        }
        t.flags |= 1, e !== null && d ? (t.child = fh(
          t,
          e.child,
          null,
          o
        ), t.child = fh(
          t,
          null,
          a,
          o
        )) : tl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Vn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (dh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), dh = !0), e;
    }
    function my(e, t, a, i) {
      return tc(), t.flags |= 256, tl(e, t, a, i), t.child;
    }
    function Qr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Fe(t) || "Unknown", Q1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Q1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Fe(t) || "Unknown", V1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), V1[t] = !0));
    }
    function Wf(e) {
      return { baseLanes: e, cachePool: wp() };
    }
    function Zr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= An), e;
    }
    function Xp(e, t, a) {
      var i, o = t.pendingProps;
      Oe(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (ql.current & $m) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ht) {
          if (f ? Ra(t) : mn(t), ht) {
            var h = ll, v;
            if (!(v = !h)) {
              e: {
                var b = h;
                for (v = qi; b.nodeType !== 8; ) {
                  if (!v) {
                    v = null;
                    break e;
                  }
                  if (b = _l(b.nextSibling), b === null) {
                    v = null;
                    break e;
                  }
                }
                v = b;
              }
              v !== null ? (cn(), t.memoizedState = {
                dehydrated: v,
                treeContext: Ns !== null ? { id: Bc, overflow: qc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = M(18, null, null, qt), b.stateNode = v, b.return = t, t.child = b, Ha = t, ll = null, v = !0) : v = !1, v = !v;
            }
            v && (Xh(
              t,
              h
            ), Cn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Pn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Oa(t);
        }
        return h = o.children, o = o.fallback, f ? (mn(t), f = t.mode, h = Ff(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = li(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Wf(a), f.childLanes = Zr(
          e,
          i,
          a
        ), t.memoizedState = n0, o) : (Ra(t), Kr(
          t,
          h
        ));
      }
      var B = e.memoizedState;
      if (B !== null && (h = B.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Ra(t), t.flags &= -257, t = Jr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (mn(t), t.child = e.child, t.flags |= 128, t = null) : (mn(t), f = o.fallback, h = t.mode, o = Ff(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = li(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, fh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Wf(a), o.childLanes = Zr(
            e,
            i,
            a
          ), t.memoizedState = n0, t = f);
        else if (Ra(t), ht && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Pn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            v = i.dgst;
            var G = i.msg;
            b = i.stck;
            var H = i.cstck;
          }
          h = G, i = v, o = b, v = f = H, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = v === void 0 ? null : v, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && wg.set(
            f,
            o
          ), ao(o), t = Jr(
            e,
            t,
            a
          );
        } else if (Xl || zl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Xl || i) {
          if (i = _t, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : El(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== B.retryLane))
            throw B.retryLane = o, na(
              e,
              o
            ), Zt(
              i,
              e,
              o
            ), G1;
          h.data === Vc || ud(), t = Jr(
            e,
            t,
            a
          );
        } else
          h.data === Vc ? (t.flags |= 192, t.child = e.child, t = null) : (e = B.treeContext, ll = _l(
            h.nextSibling
          ), Ha = t, ht = !0, Bs = null, Yc = !1, fu = null, qi = !1, e !== null && (cn(), cu[ou++] = Bc, cu[ou++] = qc, cu[ou++] = Ns, Bc = e.id, qc = e.overflow, Ns = t), t = Kr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (mn(t), f = o.fallback, h = t.mode, v = e.child, b = v.sibling, o = Un(
        v,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = v.subtreeFlags & 65011712, b !== null ? f = Un(
        b,
        f
      ) : (f = li(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Wf(a) : (v = h.cachePool, v !== null ? (b = Nl._currentValue, v = v.parent !== b ? { parent: b, pool: b } : v) : v = wp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: v
      }), f.memoizedState = h, f.childLanes = Zr(
        e,
        i,
        a
      ), t.memoizedState = n0, o) : (Ra(t), a = e.child, e = a.sibling, a = Un(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Kr(e, t) {
      return t = Ff(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ff(e, t) {
      return e = M(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Dv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Jr(e, t, a) {
      return fh(t, e.child, null, a), e = Kr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function kr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), kh(
        e.return,
        t,
        a
      );
    }
    function py(e, t) {
      var a = He(e);
      return e = !a && typeof Rt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function $r(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function vy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !Z1[o])
        if (Z1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || a0[f] || (f !== "collapsed" && f !== "hidden" ? (a0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (a0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (He(i)) {
          for (var d = 0; d < i.length; d++)
            if (!py(i[d], d)) break e;
        } else if (d = Rt(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), v = 0; !h.done; h = d.next()) {
              if (!py(h.value, v)) break e;
              v++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (tl(e, t, i, a), i = ql.current, (i & $m) !== 0)
        i = i & sh | $m, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && kr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              kr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= sh;
      }
      switch (Re(ql, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Uu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), $r(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Uu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          $r(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          $r(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Vn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Pa = -1, lf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (zl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Un(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Un(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Wr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ui(e)));
    }
    function bg(e, t, a) {
      switch (t.tag) {
        case 3:
          jt(
            t,
            t.stateNode.containerInfo
          ), ni(
            t,
            Nl,
            e.memoizedState.cache
          ), tc();
          break;
        case 27:
        case 5:
          k(t);
          break;
        case 4:
          jt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ni(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Ra(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Xp(
              e,
              t,
              a
            ) : (Ra(t), e = Vn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Ra(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (zl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return vy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Re(
            ql,
            ql.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Lr(e, t, a);
        case 24:
          ni(
            t,
            Nl,
            e.memoizedState.cache
          );
      }
      return Vn(e, t, a);
    }
    function Fr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = vr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Xl = !0;
        else {
          if (!Wr(e, a) && (t.flags & 128) === 0)
            return Xl = !1, bg(
              e,
              t,
              a
            );
          Xl = (e.flags & 131072) !== 0;
        }
      else
        Xl = !1, (i = ht) && (cn(), i = (t.flags & 1048576) !== 0), i && (i = t.index, cn(), Bp(t, Mv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = ef(t.elementType), t.type = e, typeof e == "function")
            Gh(e) ? (i = pi(
              e,
              i
            ), t.tag = 1, t.type = e = Ii(e), t = yy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Qr(t, e), t.type = e = Ii(e), t = Xr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Yu) {
                t.tag = 11, t.type = e = jh(e), t = Gr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Ts) {
                t.tag = 14, t = Ln(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ua && (t = " Did you wrap a component in React.lazy() more than once?"), e = Fe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Xr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = pi(
            i,
            t.pendingProps
          ), yy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (jt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, oi(e, t), io(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, ni(t, Nl, i), i !== f.cache && $h(
              t,
              [Nl],
              a,
              !0
            ), Nn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = my(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Ea(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ao(o), t = my(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (ll = _l(e.firstChild), Ha = t, ht = !0, Bs = null, Yc = !1, fu = null, qi = !0, e = M1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (tc(), i === o) {
                t = Vn(
                  e,
                  t,
                  a
                );
                break e;
              }
              tl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return $f(e, t), e === null ? (e = qu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ht || (e = t.type, a = t.pendingProps, i = Mt(
            tu.current
          ), i = et(
            i
          ).createElement(e), i[Vl] = t, i[pa] = a, Jt(i, e, a), D(i), t.stateNode = i) : t.memoizedState = qu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return k(t), e === null && ht && (i = Mt(tu.current), o = O(), i = t.stateNode = lm(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Yc || (o = Dt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (on(t, 0).serverProps = o)), Ha = t, qi = !0, o = ll, In(t.type) ? (z0 = o, ll = _l(
            i.firstChild
          )) : ll = o), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), $f(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ht && (f = O(), i = or(
            t.type,
            f.ancestorInfo
          ), o = ll, (d = !o) || (d = Ai(
            o,
            t.type,
            t.pendingProps,
            qi
          ), d !== null ? (t.stateNode = d, Yc || (f = Dt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (on(t, 0).serverProps = f)), Ha = t, ll = _l(
            d.firstChild
          ), qi = !1, f = !0) : f = !1, d = !f), d && (i && Xh(t, o), Cn(t))), k(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Fn(o, f) ? i = null : d !== null && Fn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ri(
            e,
            t,
            La,
            null,
            null,
            a
          ), sp._currentValue = o), $f(e, t), tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ht && (e = t.pendingProps, a = O(), i = a.ancestorInfo.current, e = i != null ? Tf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = ll, (i = !a) || (i = Cl(
            a,
            t.pendingProps,
            qi
          ), i !== null ? (t.stateNode = i, Ha = t, ll = null, i = !0) : i = !1, i = !i), i && (e && Xh(t, a), Cn(t))), null;
        case 13:
          return Xp(e, t, a);
        case 4:
          return jt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = fh(
            t,
            null,
            i,
            a
          ) : tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Gr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return tl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || K1 || (K1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ni(t, i, f), tl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ii(t), o = Ct(o), xt(t), i = Fg(
            i,
            o,
            void 0
          ), la(), t.flags |= 1, tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Ln(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return kf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return vy(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Ff(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Un(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Lr(e, t, a);
        case 24:
          return ii(t), i = Ct(Nl), e === null ? (o = Ih(), o === null && (o = _t, f = _f(), o.pooledCache = f, lc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, ua(t), ni(t, Nl, o)) : ((e.lanes & a) !== 0 && (oi(e, t), io(t, null, null, a), Nn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ni(t, Nl, i)) : (i = f.cache, ni(t, Nl, i), i !== o.cache && $h(
            t,
            [Nl],
            a,
            !0
          ))), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function fa(e) {
      e.flags |= 4;
    }
    function If(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & yu) !== Ws)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !ds(t)) {
        if (t = hu.current, t !== null && ((at & 4194048) === at ? wi !== null : (at & 62914560) !== at && (at & 536870912) === 0 || t !== wi))
          throw Zm = Qg, l1;
        e.flags |= 8192;
      }
    }
    function Pf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Dn() : 536870912, e.lanes |= t, Qs |= t);
    }
    function vi(e, t) {
      if (!ht)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Tt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Pl) !== qt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Pl) !== qt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Qp(e, t, a) {
      var i = t.pendingProps;
      switch (br(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Tt(t), null;
        case 1:
          return Tt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Eu(Nl, t), mt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ec(t) ? (Jh(), fa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Kh())), Tt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (fa(t), a !== null ? (Tt(t), If(
            t,
            a
          )) : (Tt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (fa(t), Tt(t), If(
            t,
            a
          )) : (Tt(t), t.flags &= -16777217) : (e.memoizedProps !== i && fa(t), Tt(t), t.flags &= -16777217), null;
        case 27:
          I(t), a = Mt(tu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && fa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Tt(t), null;
            }
            e = O(), ec(t) ? Qh(t) : (e = lm(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, fa(t));
          }
          return Tt(t), null;
        case 5:
          if (I(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && fa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Tt(t), null;
            }
            if (o = O(), ec(t))
              Qh(t);
            else {
              switch (e = Mt(tu.current), or(a, o.ancestorInfo), o = o.context, e = et(e), o) {
                case Th:
                  e = e.createElementNS(Wo, a);
                  break;
                case tg:
                  e = e.createElementNS(
                    Hs,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Wo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Hs,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || ju.call(
                        rb,
                        a
                      ) || (rb[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Vl] = t, e[pa] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Jt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && fa(t);
            }
          }
          return Tt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && fa(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Mt(tu.current), a = O(), ec(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Yc, i = null;
              var f = Ha;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Ad(
                      e,
                      a,
                      i
                    ), o !== null && (on(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Ad(
                      e,
                      a,
                      i
                    ), o !== null && (on(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Vl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ky(e.nodeValue, a)), e || Cn(t);
            } else
              o = a.ancestorInfo.current, o != null && Tf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = et(e).createTextNode(
                i
              ), e[Vl] = t, t.stateNode = e;
          }
          return Tt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = ec(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Vl] = t, Tt(t), (t.mode & Pl) !== qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Jh(), tc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Tt(t), (t.mode & Pl) !== qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Kh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Oa(t), t) : (Oa(t), null);
          }
          return Oa(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Pl) !== qt && Hn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Pf(t, t.updateQueue), Tt(t), (t.mode & Pl) !== qt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return mt(t), e === null && Qy(
            t.stateNode.containerInfo
          ), Tt(t), null;
        case 10:
          return Eu(t.type, t), Tt(t), null;
        case 19:
          if (ve(ql, t), o = t.memoizedState, o === null) return Tt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) vi(o, !1);
            else {
              if (al !== Lc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Uu(e), f !== null) {
                    for (t.flags |= 128, vi(o, !1), e = f.updateQueue, t.updateQueue = e, Pf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Lh(a, e), a = a.sibling;
                    return Re(
                      ql,
                      ql.current & sh | $m,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && lu() > Xv && (t.flags |= 128, i = !0, vi(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Uu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Pf(t, e), vi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ht)
                  return Tt(t), null;
              } else
                2 * lu() - o.renderingStartTime > Xv && a !== 536870912 && (t.flags |= 128, i = !0, vi(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = lu(), e.sibling = null, a = ql.current, a = i ? a & sh | $m : a & sh, Re(ql, a, t), e) : (Tt(t), null);
        case 22:
        case 23:
          return Oa(t), dn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), a = t.updateQueue, a !== null && Pf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ve(ws, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Eu(Nl, t), Tt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Zp(e, t) {
      switch (br(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Pl) !== qt && Hn(t), t) : null;
        case 3:
          return Eu(Nl, t), mt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return I(t), null;
        case 13:
          if (Oa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            tc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Pl) !== qt && Hn(t), t) : null;
        case 19:
          return ve(ql, t), null;
        case 4:
          return mt(t), null;
        case 10:
          return Eu(t.type, t), null;
        case 22:
        case 23:
          return Oa(t), dn(t), e !== null && ve(ws, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Pl) !== qt && Hn(t), t) : null;
        case 24:
          return Eu(Nl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function gy(e, t) {
      switch (br(t), t.tag) {
        case 3:
          Eu(Nl, t), mt(t);
          break;
        case 26:
        case 27:
        case 5:
          I(t);
          break;
        case 4:
          mt(t);
          break;
        case 13:
          Oa(t);
          break;
        case 19:
          ve(ql, t);
          break;
        case 10:
          Eu(t.type, t);
          break;
        case 22:
        case 23:
          Oa(t), dn(t), e !== null && ve(ws, t);
          break;
        case 24:
          Eu(Nl, t);
      }
    }
    function pn(e) {
      return (e.mode & Pl) !== qt;
    }
    function by(e, t) {
      pn(e) ? (sn(), rc(t, e), wa()) : rc(t, e);
    }
    function Ir(e, t, a) {
      pn(e) ? (sn(), dc(
        a,
        e,
        t
      ), wa()) : dc(
        a,
        e,
        t
      );
    }
    function rc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & Bl) !== su ? ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(
              t
            ) : (e & ea) !== su && ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & xa) !== su && (bh = !0), i = re(
              t,
              MS,
              a
            ), (e & xa) !== su && (bh = !1), (e & Bl) !== su ? ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped() : (e & ea) !== su && ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & ea) !== 0 ? "useLayoutEffect" : (a.tag & xa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, re(
                t,
                function(h, v) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    v
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Ee(t, t.return, h);
      }
    }
    function dc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Bl) !== su ? ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & ea) !== su && ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & xa) !== su && (bh = !0), o = t, re(
                o,
                US,
                o,
                a,
                h
              ), (e & xa) !== su && (bh = !1), (e & Bl) !== su ? ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped() : (e & ea) !== su && ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (v) {
        Ee(t, t.return, v);
      }
    }
    function Sy(e, t) {
      pn(e) ? (sn(), rc(t, e), wa()) : rc(t, e);
    }
    function es(e, t, a) {
      pn(e) ? (sn(), dc(
        a,
        e,
        t
      ), wa()) : dc(
        a,
        e,
        t
      );
    }
    function Ty(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || dh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          re(
            e,
            jp,
            t,
            a
          );
        } catch (i) {
          Ee(e, e.return, i);
        }
      }
    }
    function Kp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Sg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || dh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = pi(
          e.type,
          a,
          e.elementType === e.type
        ), f = re(
          e,
          Kp,
          t,
          o,
          i
        );
        a = J1, f !== void 0 || a.has(e.type) || (a.add(e.type), re(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ee(e, e.return, d);
      }
    }
    function Pr(e, t, a) {
      a.props = pi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, pn(e) ? (sn(), re(
        e,
        S1,
        e,
        t,
        a
      ), wa()) : re(
        e,
        S1,
        e,
        t,
        a
      );
    }
    function Jp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (pn(e))
            try {
              sn(), e.refCleanup = t(a);
            } finally {
              wa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function To(e, t) {
      try {
        re(e, Jp, e);
      } catch (a) {
        Ee(e, t, a);
      }
    }
    function Ka(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (pn(e))
              try {
                sn(), re(e, i);
              } finally {
                wa(e);
              }
            else re(e, i);
          } catch (o) {
            Ee(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (pn(e))
              try {
                sn(), re(e, a, null);
              } finally {
                wa(e);
              }
            else re(e, a, null);
          } catch (o) {
            Ee(e, t, o);
          }
        else a.current = null;
    }
    function Ey(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", _v && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function kp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", _v && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function $p(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        re(
          e,
          Nu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ee(e, e.return, o);
      }
    }
    function Ay(e, t, a) {
      try {
        re(
          e,
          kt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ee(e, e.return, i);
      }
    }
    function Ry(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && In(e.type) || e.tag === 4;
    }
    function hc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ry(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && In(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ts(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = xu));
      else if (i !== 4 && (i === 27 && In(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (ts(e, t, a), e = e.sibling; e !== null; )
          ts(e, t, a), e = e.sibling;
    }
    function yc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && In(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (yc(e, t, a), e = e.sibling; e !== null; )
          yc(e, t, a), e = e.sibling;
    }
    function Wp(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ry(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = hc(e), yc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Bu(a), t.flags &= -33), t = hc(e), yc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = hc(e), ts(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Oy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        re(
          e,
          Ma,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ee(e, e.return, i);
      }
    }
    function ed(e, t) {
      if (e = e.containerInfo, R0 = ug, e = Cp(e), Yh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, v = -1, b = 0, B = 0, G = e, H = null;
              t: for (; ; ) {
                for (var L; G !== a || o !== 0 && G.nodeType !== 3 || (h = d + o), G !== f || i !== 0 && G.nodeType !== 3 || (v = d + i), G.nodeType === 3 && (d += G.nodeValue.length), (L = G.firstChild) !== null; )
                  H = G, G = L;
                for (; ; ) {
                  if (G === e) break t;
                  if (H === a && ++b === o && (h = d), H === f && ++B === i && (v = d), (L = G.nextSibling) !== null) break;
                  G = H, H = G.parentNode;
                }
                G = L;
              }
              a = h === -1 || v === -1 ? null : { start: h, end: v };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (O0 = {
        focusedElem: e,
        selectionRange: a
      }, ug = !1, Ql = t; Ql !== null; )
        if (t = Ql, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Ql = e;
        else
          for (; Ql !== null; ) {
            switch (e = t = Ql, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Sg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ho(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ho(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ql = e;
              break;
            }
            Ql = t.return;
          }
    }
    function Dy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xn(e, a), i & 4 && by(a, ea | ru);
          break;
        case 1:
          if (Xn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || dh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), pn(a) ? (sn(), re(
                a,
                Ig,
                a,
                e
              ), wa()) : re(
                a,
                Ig,
                a,
                e
              );
            else {
              var o = pi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || dh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), pn(a) ? (sn(), re(
                a,
                v1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), wa()) : re(
                a,
                v1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Ty(a), i & 512 && To(a, a.return);
          break;
        case 3:
          if (t = fn(), Xn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              re(
                a,
                jp,
                i,
                o
              );
            } catch (d) {
              Ee(a, a.return, d);
            }
          }
          e.effectDuration += ci(t);
          break;
        case 27:
          t === null && i & 4 && Oy(a);
        case 26:
        case 5:
          Xn(e, a), t === null && i & 4 && $p(a), i & 512 && To(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = fn(), Xn(e, a), e = a.stateNode, e.effectDuration += ac(i);
            try {
              re(
                a,
                Ey,
                a,
                t,
                Cv,
                e.effectDuration
              );
            } catch (d) {
              Ee(a, a.return, d);
            }
          } else Xn(e, a);
          break;
        case 13:
          Xn(e, a), i & 4 && Eo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = fs.bind(
            null,
            a
          ), xo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Gc, !i) {
            t = t !== null && t.memoizedState !== null || rl, o = Gc;
            var f = rl;
            Gc = i, (rl = t) && !f ? Qn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Xn(e, a), Gc = o, rl = f;
          }
          break;
        case 30:
          break;
        default:
          Xn(e, a);
      }
    }
    function zy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ln(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Cu(e, t, a) {
      for (a = a.child; a !== null; )
        mc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function mc(e, t, a) {
      if (Hl && typeof Hl.onCommitFiberUnmount == "function")
        try {
          Hl.onCommitFiberUnmount(Ci, a);
        } catch (f) {
          ma || (ma = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          rl || Ka(a, t), Cu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          rl || Ka(a, t);
          var i = Tl, o = en;
          In(a.type) && (Tl = a.stateNode, en = !1), Cu(
            e,
            t,
            a
          ), re(
            a,
            Bo,
            a.stateNode
          ), Tl = i, en = o;
          break;
        case 5:
          rl || Ka(a, t);
        case 6:
          if (i = Tl, o = en, Tl = null, Cu(
            e,
            t,
            a
          ), Tl = i, en = o, Tl !== null)
            if (en)
              try {
                re(
                  a,
                  Co,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Ee(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                re(
                  a,
                  $a,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Ee(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Tl !== null && (en ? (e = Tl, _o(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Mc(e)) : _o(Tl, a.stateNode));
          break;
        case 4:
          i = Tl, o = en, Tl = a.stateNode.containerInfo, en = !0, Cu(
            e,
            t,
            a
          ), Tl = i, en = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          rl || dc(
            xa,
            a,
            t
          ), rl || Ir(
            a,
            t,
            ea
          ), Cu(
            e,
            t,
            a
          );
          break;
        case 1:
          rl || (Ka(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Pr(
            a,
            t,
            i
          )), Cu(
            e,
            t,
            a
          );
          break;
        case 21:
          Cu(
            e,
            t,
            a
          );
          break;
        case 22:
          rl = (i = rl) || a.memoizedState !== null, Cu(
            e,
            t,
            a
          ), rl = i;
          break;
        default:
          Cu(
            e,
            t,
            a
          );
      }
    }
    function Eo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          re(
            t,
            za,
            e
          );
        } catch (a) {
          Ee(t, t.return, a);
        }
    }
    function td(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new k1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new k1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function pc(e, t) {
      var a = td(e);
      t.forEach(function(i) {
        var o = Ti.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Wt)
            if (hh !== null && yh !== null)
              Mo(yh, hh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function jl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (In(h.type)) {
                  Tl = h.stateNode, en = !1;
                  break e;
                }
                break;
              case 5:
                Tl = h.stateNode, en = !1;
                break e;
              case 3:
              case 4:
                Tl = h.stateNode.containerInfo, en = !0;
                break e;
            }
            h = h.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          mc(o, f, d), Tl = null, en = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          My(t, e), t = t.sibling;
    }
    function My(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jl(t, e), sa(e), i & 4 && (dc(
            xa | ru,
            e,
            e.return
          ), rc(xa | ru, e), Ir(
            e,
            e.return,
            ea | ru
          ));
          break;
        case 1:
          jl(t, e), sa(e), i & 512 && (rl || a === null || Ka(a, a.return)), i & 64 && Gc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ju;
          if (jl(t, e), sa(e), i & 512 && (rl || a === null || Ka(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Ko] || o[Vl] || o.namespaceURI === Wo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Jt(o, i, a), o[Vl] = e, D(o), i = o;
                        break e;
                      case "link":
                        var f = im(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Jt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = im(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], Q(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Jt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Vl] = e, D(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  cm(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Rd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? cm(
                o,
                e.type,
                e.stateNode
              ) : Rd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Ay(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          jl(t, e), sa(e), i & 512 && (rl || a === null || Ka(a, a.return)), a !== null && i & 4 && Ay(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (jl(t, e), sa(e), i & 512 && (rl || a === null || Ka(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              re(e, Bu, t);
            } catch (B) {
              Ee(e, e.return, B);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Ay(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (u0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (jl(t, e), sa(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              re(
                e,
                Rc,
                t,
                a,
                i
              );
            } catch (B) {
              Ee(e, e.return, B);
            }
          }
          break;
        case 3:
          if (o = fn(), lg = null, f = Ju, Ju = rs(t.containerInfo), jl(t, e), Ju = f, sa(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              re(
                e,
                tm,
                t.containerInfo
              );
            } catch (B) {
              Ee(e, e.return, B);
            }
          u0 && (u0 = !1, vc(e)), t.effectDuration += ci(o);
          break;
        case 4:
          i = Ju, Ju = rs(
            e.stateNode.containerInfo
          ), jl(t, e), sa(e), Ju = i;
          break;
        case 12:
          i = fn(), jl(t, e), sa(e), e.stateNode.effectDuration += ac(i);
          break;
        case 13:
          jl(t, e), sa(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (r0 = lu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, pc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, v = Gc, b = rl;
          if (Gc = v || o, rl = b || h, jl(t, e), rl = b, Gc = v, sa(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~Dv : t._visibility | Dv, o && (a === null || h || Gc || rl || Gl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? re(h, ha, f) : re(
                      h,
                      Py,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (B) {
                    Ee(h, h.return, B);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? re(h, Iy, d) : re(
                      h,
                      Td,
                      d,
                      h.memoizedProps
                    );
                  } catch (B) {
                    Ee(h, h.return, B);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, pc(e, a))));
          break;
        case 19:
          jl(t, e), sa(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, pc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          jl(t, e), sa(e);
      }
    }
    function sa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          re(e, Wp, e);
        } catch (a) {
          Ee(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function vc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          vc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Xn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Dy(e, t.alternate, t), t = t.sibling;
    }
    function Da(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ir(
            e,
            e.return,
            ea
          ), Gl(e);
          break;
        case 1:
          Ka(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Pr(
            e,
            e.return,
            t
          ), Gl(e);
          break;
        case 27:
          re(
            e,
            Bo,
            e.stateNode
          );
        case 26:
        case 5:
          Ka(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
    }
    function Gl(e) {
      for (e = e.child; e !== null; )
        Da(e), e = e.sibling;
    }
    function _u(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Qn(
            e,
            a,
            i
          ), by(a, ea);
          break;
        case 1:
          if (Qn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && re(
            a,
            Ig,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              re(
                a,
                co,
                t,
                e
              );
            } catch (f) {
              Ee(a, a.return, f);
            }
          }
          i && o & 64 && Ty(a), To(a, a.return);
          break;
        case 27:
          Oy(a);
        case 26:
        case 5:
          Qn(
            e,
            a,
            i
          ), i && t === null && o & 4 && $p(a), To(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = fn(), Qn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ac(o);
            try {
              re(
                a,
                Ey,
                a,
                t,
                Cv,
                i.effectDuration
              );
            } catch (f) {
              Ee(a, a.return, f);
            }
          } else
            Qn(
              e,
              a,
              i
            );
          break;
        case 13:
          Qn(
            e,
            a,
            i
          ), i && o & 4 && Eo(e, a);
          break;
        case 22:
          a.memoizedState === null && Qn(
            e,
            a,
            i
          ), To(a, a.return);
          break;
        case 30:
          break;
        default:
          Qn(
            e,
            a,
            i
          );
      }
    }
    function Qn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        _u(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Zn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && lc(e), a != null && _n(a));
    }
    function vn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (lc(t), e != null && _n(e));
    }
    function Et(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          ls(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function ls(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Et(
            e,
            t,
            a,
            i
          ), o & 2048 && Sy(t, Bl | ru);
          break;
        case 1:
          Et(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = fn();
          Et(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (lc(t), a != null && _n(a))), e.passiveEffectDuration += ci(f);
          break;
        case 12:
          if (o & 2048) {
            o = fn(), Et(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += ac(o);
            try {
              re(
                t,
                kp,
                t,
                t.alternate,
                Cv,
                e.passiveEffectDuration
              );
            } catch (h) {
              Ee(t, t.return, h);
            }
          } else
            Et(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Et(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Nc ? Et(
            e,
            t,
            a,
            i
          ) : Ao(
            e,
            t
          ) : f._visibility & Nc ? Et(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Nc, gi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Zn(d, t);
          break;
        case 24:
          Et(
            e,
            t,
            a,
            i
          ), o & 2048 && vn(t.alternate, t);
          break;
        default:
          Et(
            e,
            t,
            a,
            i
          );
      }
    }
    function gi(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        ld(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function ld(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          gi(
            e,
            t,
            a,
            i,
            o
          ), Sy(t, Bl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Nc ? gi(
            e,
            t,
            a,
            i,
            o
          ) : Ao(
            e,
            t
          ) : (d._visibility |= Nc, gi(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Zn(
            t.alternate,
            t
          );
          break;
        case 24:
          gi(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && vn(t.alternate, t);
          break;
        default:
          gi(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function Ao(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Ao(
                a,
                i
              ), o & 2048 && Zn(
                i.alternate,
                i
              );
              break;
            case 24:
              Ao(
                a,
                i
              ), o & 2048 && vn(
                i.alternate,
                i
              );
              break;
            default:
              Ao(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function gc(e) {
      if (e.subtreeFlags & Wm)
        for (e = e.child; e !== null; )
          bi(e), e = e.sibling;
    }
    function bi(e) {
      switch (e.tag) {
        case 26:
          gc(e), e.flags & Wm && e.memoizedState !== null && cv(
            Ju,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          gc(e);
          break;
        case 3:
        case 4:
          var t = Ju;
          Ju = rs(
            e.stateNode.containerInfo
          ), gc(e), Ju = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wm, Wm = 16777216, gc(e), Wm = t) : gc(e));
          break;
        default:
          gc(e);
      }
    }
    function as(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Ro(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, Cy(
              i,
              e
            );
          }
        as(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Uy(e), e = e.sibling;
    }
    function Uy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ro(e), e.flags & 2048 && es(
            e,
            e.return,
            Bl | ru
          );
          break;
        case 3:
          var t = fn();
          Ro(e), e.stateNode.passiveEffectDuration += ci(t);
          break;
        case 12:
          t = fn(), Ro(e), e.stateNode.passiveEffectDuration += ac(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Nc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Nc, ns(e)) : Ro(e);
          break;
        default:
          Ro(e);
      }
    }
    function ns(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, Cy(
              i,
              e
            );
          }
        as(e);
      }
      for (e = e.child; e !== null; )
        us(e), e = e.sibling;
    }
    function us(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          es(
            e,
            e.return,
            Bl
          ), ns(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Nc && (t._visibility &= ~Nc, ns(e));
          break;
        default:
          ns(e);
      }
    }
    function Cy(e, t) {
      for (; Ql !== null; ) {
        var a = Ql, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            es(
              i,
              t,
              Bl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && lc(i));
            break;
          case 24:
            _n(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Ql = i;
        else
          e: for (a = e; Ql !== null; ) {
            i = Ql;
            var o = i.sibling, f = i.return;
            if (zy(i), i === a) {
              Ql = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Ql = o;
              break e;
            }
            Ql = f;
          }
      }
    }
    function _y() {
      _S.forEach(function(e) {
        return e();
      });
    }
    function Hy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Y.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ra(e) {
      if ((St & Na) !== Tn && at !== 0)
        return at & -at;
      var t = Y.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Ys, e !== 0 ? e : Ly()) : yf();
    }
    function Fp() {
      An === 0 && (An = (at & 536870912) === 0 || ht ? Qe() : 536870912);
      var e = hu.current;
      return e !== null && (e.flags |= 32), An;
    }
    function Zt(e, t, a) {
      if (bh && console.error("useInsertionEffect must not schedule updates."), p0 && (Qv = !0), (e === _t && (At === Vs || At === Xs) || e.cancelPendingCommit !== null) && (Sc(e, 0), Hu(
        e,
        at,
        An,
        !1
      )), pu(e, a), (St & Na) !== 0 && e === _t) {
        if (va)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && se(tt) || "Unknown", nb.has(e) || (nb.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              ab || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), ab = !0);
          }
      } else
        Wt && qa(e, t, a), tv(t), e === _t && ((St & Na) === Tn && (af |= a), al === Ls && Hu(
          e,
          at,
          An,
          !1
        )), Ja(e);
    }
    function fl(e, t, a) {
      if ((St & (Na | ku)) !== Tn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $u(e, t), o = i ? Ny(e, t) : id(e, t, !0), f = i;
      do {
        if (o === Lc) {
          vh && !i && Hu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Ip(a)) {
            o = id(e, t, !1), f = !1;
            continue;
          }
          if (o === mh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = lp;
                var v = o.current.memoizedState.isDehydrated;
                if (v && (Sc(
                  o,
                  h
                ).flags |= 256), h = id(
                  o,
                  h,
                  !1
                ), h !== mh) {
                  if (f0 && !v) {
                    o.errorRecoveryDisabledLanes |= f, af |= f, o = Ls;
                    break e;
                  }
                  o = Ba, Ba = d, o !== null && (Ba === null ? Ba = o : Ba.push.apply(
                    Ba,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== mh) continue;
            }
          }
          if (o === Im) {
            Sc(e, 0), Hu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Lc:
              case Im:
                throw Error("Root did not complete. This is a bug in React.");
              case Ls:
                if ((t & 4194048) !== t) break;
              case Lv:
                Hu(
                  i,
                  t,
                  An,
                  !tf
                );
                break e;
              case mh:
                Ba = null;
                break;
              case i0:
              case $1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Y.actQueue !== null)
              rd(
                i,
                a,
                t,
                Ba,
                ap,
                Vv,
                An,
                af,
                Qs
              );
            else {
              if ((t & 62914560) === t && (f = r0 + F1 - lu(), 10 < f)) {
                if (Hu(
                  i,
                  t,
                  An,
                  !tf
                ), hl(i, 0, !0) !== 0) break e;
                i.timeoutHandle = db(
                  vl.bind(
                    null,
                    i,
                    a,
                    Ba,
                    ap,
                    Vv,
                    t,
                    An,
                    af,
                    Qs,
                    tf,
                    o,
                    BS,
                    P0,
                    0
                  ),
                  f
                );
                break e;
              }
              vl(
                i,
                a,
                Ba,
                ap,
                Vv,
                t,
                An,
                af,
                Qs,
                tf,
                o,
                xS,
                P0,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ja(e);
    }
    function vl(e, t, a, i, o, f, d, h, v, b, B, G, H, L) {
      if (e.timeoutHandle = $s, G = t.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (fp = { stylesheets: null, count: 0, unsuspend: iv }, bi(t), G = ov(), G !== null)) {
        e.cancelPendingCommit = G(
          rd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            v,
            B,
            NS,
            H,
            L
          )
        ), Hu(
          e,
          f,
          d,
          !b
        );
        return;
      }
      rd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        v
      );
    }
    function Ip(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!_a(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Hu(e, t, a, i) {
      t &= ~s0, t &= ~af, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ll(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && hf(e, a, t);
    }
    function bc() {
      return (St & (Na | ku)) === Tn ? (Tc(0), !1) : !0;
    }
    function ad() {
      if (tt !== null) {
        if (At === tn)
          var e = tt.return;
        else
          e = tt, Sr(), hn(e), oh = null, km = 0, e = tt;
        for (; e !== null; )
          gy(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function Sc(e, t) {
      var a = e.timeoutHandle;
      a !== $s && (e.timeoutHandle = $s, kS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ad(), _t = e, tt = a = Un(e.current, null), at = t, At = tn, En = null, tf = !1, vh = $u(e, t), f0 = !1, al = Lc, Qs = An = s0 = af = lf = 0, Ba = lp = null, Vv = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Ll(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return ji = t, Df(), t = F0(), 1e3 < t - W0 && (Y.recentlyCreatedOwnerStacks = 0, W0 = t), Zu.discardPendingWarnings(), a;
    }
    function is(e, t) {
      xe = null, Y.H = jv, Y.getCurrentStack = null, va = !1, Ca = null, t === Qm || t === Nv ? (t = ty(), At = ep) : t === l1 ? (t = ty(), At = W1) : At = t === G1 ? o0 : t !== null && typeof t == "object" && typeof t.then == "function" ? ph : Pm, En = t;
      var a = tt;
      if (a === null)
        al = Im, So(
          e,
          Ea(t, e.current)
        );
      else
        switch (a.mode & Pl && Au(a), la(), At) {
          case Pm:
            ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(
              a,
              t,
              at
            );
            break;
          case Vs:
          case Xs:
          case ep:
          case ph:
          case tp:
            ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(
              a,
              t,
              at
            );
        }
    }
    function nd() {
      var e = Y.H;
      return Y.H = jv, e === null ? jv : e;
    }
    function xy() {
      var e = Y.A;
      return Y.A = CS, e;
    }
    function ud() {
      al = Ls, tf || (at & 4194048) !== at && hu.current !== null || (vh = !0), (lf & 134217727) === 0 && (af & 134217727) === 0 || _t === null || Hu(
        _t,
        at,
        An,
        !1
      );
    }
    function id(e, t, a) {
      var i = St;
      St |= Na;
      var o = nd(), f = xy();
      if (_t !== e || at !== t) {
        if (Wt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Mo(e, at), d.clear()), Al(e, t);
        }
        ap = null, Sc(e, t);
      }
      Rn(t), t = !1, d = al;
      e: do
        try {
          if (At !== tn && tt !== null) {
            var h = tt, v = En;
            switch (At) {
              case o0:
                ad(), d = Lv;
                break e;
              case ep:
              case Vs:
              case Xs:
              case ph:
                hu.current === null && (t = !0);
                var b = At;
                if (At = tn, En = null, Si(e, h, v, b), a && vh) {
                  d = Lc;
                  break e;
                }
                break;
              default:
                b = At, At = tn, En = null, Si(e, h, v, b);
            }
          }
          cd(), d = al;
          break;
        } catch (B) {
          is(e, B);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Sr(), St = i, Y.H = o, Y.A = f, Gi(), tt === null && (_t = null, at = 0, Df()), d;
    }
    function cd() {
      for (; tt !== null; ) qy(tt);
    }
    function Ny(e, t) {
      var a = St;
      St |= Na;
      var i = nd(), o = xy();
      if (_t !== e || at !== t) {
        if (Wt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Mo(e, at), f.clear()), Al(e, t);
        }
        ap = null, Xv = lu() + I1, Sc(e, t);
      } else
        vh = $u(
          e,
          t
        );
      Rn(t);
      e: do
        try {
          if (At !== tn && tt !== null)
            t: switch (t = tt, f = En, At) {
              case Pm:
                At = tn, En = null, Si(
                  e,
                  t,
                  f,
                  Pm
                );
                break;
              case Vs:
              case Xs:
                if (ey(f)) {
                  At = tn, En = null, od(t);
                  break;
                }
                t = function() {
                  At !== Vs && At !== Xs || _t !== e || (At = tp), Ja(e);
                }, f.then(t, t);
                break e;
              case ep:
                At = tp;
                break e;
              case W1:
                At = c0;
                break e;
              case tp:
                ey(f) ? (At = tn, En = null, od(t)) : (At = tn, En = null, Si(
                  e,
                  t,
                  f,
                  tp
                ));
                break;
              case c0:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (!d || ds(d)) {
                      At = tn, En = null;
                      var v = h.sibling;
                      if (v !== null) tt = v;
                      else {
                        var b = h.return;
                        b !== null ? (tt = b, cs(b)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                At = tn, En = null, Si(
                  e,
                  t,
                  f,
                  c0
                );
                break;
              case ph:
                At = tn, En = null, Si(
                  e,
                  t,
                  f,
                  ph
                );
                break;
              case o0:
                ad(), al = Lv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Y.actQueue !== null ? cd() : By();
          break;
        } catch (B) {
          is(e, B);
        }
      while (!0);
      return Sr(), Y.H = i, Y.A = o, St = a, tt !== null ? (ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded(), Lc) : (Gi(), _t = null, at = 0, Df(), al);
    }
    function By() {
      for (; tt !== null && !mv(); )
        qy(tt);
    }
    function qy(e) {
      var t = e.alternate;
      (e.mode & Pl) !== qt ? (Tr(e), t = re(
        e,
        Fr,
        t,
        e,
        ji
      ), Au(e)) : t = re(
        e,
        Fr,
        t,
        e,
        ji
      ), e.memoizedProps = e.pendingProps, t === null ? cs(e) : tt = t;
    }
    function od(e) {
      var t = re(e, fd, e);
      e.memoizedProps = e.pendingProps, t === null ? cs(e) : tt = t;
    }
    function fd(e) {
      var t = e.alternate, a = (e.mode & Pl) !== qt;
      switch (a && Tr(e), e.tag) {
        case 15:
        case 0:
          t = hy(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            at
          );
          break;
        case 11:
          t = hy(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            at
          );
          break;
        case 5:
          hn(e);
        default:
          gy(t, e), e = tt = Lh(e, ji), t = Fr(t, e, ji);
      }
      return a && Au(e), t;
    }
    function Si(e, t, a, i) {
      Sr(), hn(t), oh = null, km = 0;
      var o = t.return;
      try {
        if (Jf(
          e,
          o,
          t,
          a,
          at
        )) {
          al = Im, So(
            e,
            Ea(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        al = Im, So(
          e,
          Ea(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (ht || i === Pm ? e = !0 : vh || (at & 536870912) !== 0 ? e = !1 : (tf = e = !0, (i === Vs || i === Xs || i === ep || i === ph) && (i = hu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), sd(t, e)) : cs(t);
    }
    function cs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          sd(
            t,
            tf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Tr(t), a = re(
          t,
          Qp,
          a,
          t,
          ji
        ), (t.mode & Pl) !== qt && nc(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      al === Lc && (al = $1);
    }
    function sd(e, t) {
      do {
        var a = Zp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & Pl) !== qt) {
          nc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = a;
      } while (e !== null);
      al = Lv, tt = null;
    }
    function rd(e, t, a, i, o, f, d, h, v) {
      e.cancelPendingCommit = null;
      do
        Oo();
      while (ta !== Zs);
      if (Zu.flushLegacyContextWarning(), Zu.flushPendingUnsafeLifecycleWarnings(), (St & (Na | ku)) !== Tn)
        throw Error("Should not already be working.");
      if (ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(a), t === null) Me();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= jg, er(
          e,
          a,
          f,
          d,
          h,
          v
        ), e === _t && (tt = _t = null, at = 0), gh = t, uf = e, cf = a, h0 = f, y0 = o, lb = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gy(Xo, function() {
          return os(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Cv = ah(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Y.T, Y.T = null, o = De.p, De.p = xl, d = St, St |= ku;
          try {
            ed(e, t, a);
          } finally {
            St = d, De.p = o, Y.T = i;
          }
        }
        ta = P1, Kn(), dd(), Pp();
      }
    }
    function Kn() {
      if (ta === P1) {
        ta = Zs;
        var e = uf, t = gh, a = cf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Y.T, Y.T = null;
          var o = De.p;
          De.p = xl;
          var f = St;
          St |= ku;
          try {
            hh = a, yh = e, My(t, e), yh = hh = null, a = O0;
            var d = Cp(e.containerInfo), h = a.focusedElem, v = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Up(
              h.ownerDocument.documentElement,
              h
            )) {
              if (v !== null && Yh(h)) {
                var b = v.start, B = v.end;
                if (B === void 0 && (B = b), "selectionStart" in h)
                  h.selectionStart = b, h.selectionEnd = Math.min(
                    B,
                    h.value.length
                  );
                else {
                  var G = h.ownerDocument || document, H = G && G.defaultView || window;
                  if (H.getSelection) {
                    var L = H.getSelection(), de = h.textContent.length, ze = Math.min(
                      v.start,
                      de
                    ), Ht = v.end === void 0 ? ze : Math.min(v.end, de);
                    !L.extend && ze > Ht && (d = Ht, Ht = ze, ze = d);
                    var it = qh(
                      h,
                      ze
                    ), T = qh(
                      h,
                      Ht
                    );
                    if (it && T && (L.rangeCount !== 1 || L.anchorNode !== it.node || L.anchorOffset !== it.offset || L.focusNode !== T.node || L.focusOffset !== T.offset)) {
                      var E = G.createRange();
                      E.setStart(it.node, it.offset), L.removeAllRanges(), ze > Ht ? (L.addRange(E), L.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), L.addRange(E));
                    }
                  }
                }
              }
              for (G = [], L = h; L = L.parentNode; )
                L.nodeType === 1 && G.push({
                  element: L,
                  left: L.scrollLeft,
                  top: L.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < G.length; h++) {
                var A = G[h];
                A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
              }
            }
            ug = !!R0, O0 = R0 = null;
          } finally {
            St = f, De.p = o, Y.T = i;
          }
        }
        e.current = t, ta = eb;
      }
    }
    function dd() {
      if (ta === eb) {
        ta = Zs;
        var e = uf, t = gh, a = cf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Y.T, Y.T = null;
          var o = De.p;
          De.p = xl;
          var f = St;
          St |= ku;
          try {
            ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(a), hh = a, yh = e, Dy(
              e,
              t.alternate,
              t
            ), yh = hh = null, ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
          } finally {
            St = f, De.p = o, Y.T = i;
          }
        }
        ta = tb;
      }
    }
    function Pp() {
      if (ta === qS || ta === tb) {
        ta = Zs, Mg();
        var e = uf, t = gh, a = cf, i = lb, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ta = d0 : (ta = Zs, gh = uf = null, Jn(e, e.pendingLanes), Ks = 0, up = null);
        var f = e.pendingLanes;
        if (f === 0 && (nf = null), o || zo(e), o = kc(a), t = t.stateNode, Hl && typeof Hl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case xl:
                var h = Bd;
                break;
              case Sn:
                h = Rs;
                break;
              case Lu:
                h = Xo;
                break;
              case jd:
                h = Os;
                break;
              default:
                h = Xo;
            }
            Hl.onCommitFiberRoot(
              Ci,
              t,
              h,
              d
            );
          } catch (G) {
            ma || (ma = !0, console.error(
              "React instrumentation encountered an error: %s",
              G
            ));
          }
        if (Wt && e.memoizedUpdaters.clear(), _y(), i !== null) {
          d = Y.T, h = De.p, De.p = xl, Y.T = null;
          try {
            var v = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var b = i[t], B = ev(b.stack);
              re(
                b.source,
                v,
                b.value,
                B
              );
            }
          } finally {
            Y.T = d, De.p = h;
          }
        }
        (cf & 3) !== 0 && Oo(), Ja(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Hv = !0, e === m0 ? np++ : (np = 0, m0 = e)) : np = 0, Tc(0), Me();
      }
    }
    function ev(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Jn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _n(t)));
    }
    function Oo(e) {
      return Kn(), dd(), Pp(), os();
    }
    function os() {
      if (ta !== d0) return !1;
      var e = uf, t = h0;
      h0 = 0;
      var a = kc(cf), i = Lu > a ? Lu : a;
      a = Y.T;
      var o = De.p;
      try {
        De.p = i, Y.T = null, i = y0, y0 = null;
        var f = uf, d = cf;
        if (ta = Zs, gh = uf = null, cf = 0, (St & (Na | ku)) !== Tn)
          throw Error("Cannot flush passive effects while already rendering.");
        p0 = !0, Qv = !1, ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(d);
        var h = St;
        if (St |= ku, Uy(f.current), ls(
          f,
          f.current,
          d,
          i
        ), ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped(), zo(f), St = h, Tc(0, !1), Qv ? f === up ? Ks++ : (Ks = 0, up = f) : Ks = 0, Qv = p0 = !1, Hl && typeof Hl.onPostCommitFiberRoot == "function")
          try {
            Hl.onPostCommitFiberRoot(Ci, f);
          } catch (b) {
            ma || (ma = !0, console.error(
              "React instrumentation encountered an error: %s",
              b
            ));
          }
        var v = f.current.stateNode;
        return v.effectDuration = 0, v.passiveEffectDuration = 0, !0;
      } finally {
        De.p = o, Y.T = a, Jn(e, t);
      }
    }
    function Do(e, t, a) {
      t = Ea(a, t), t = wl(e.stateNode, t, 2), e = rn(e, t, 2), e !== null && (pu(e, 2), Ja(e));
    }
    function Ee(e, t, a) {
      if (bh = !1, e.tag === 3)
        Do(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Do(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (nf === null || !nf.has(i))) {
              e = Ea(a, e), a = Qt(2), i = rn(t, a, 2), i !== null && (Kf(
                a,
                i,
                t,
                e
              ), pu(i, 2), Ja(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function Yy(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new HS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (f0 = !0, o.add(a), i = Tg.bind(null, e, t, a), Wt && Mo(e, a), t.then(i, i));
    }
    function Tg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Hy() && Y.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), _t === e && (at & a) === a && (al === Ls || al === i0 && (at & 62914560) === at && lu() - r0 < F1 ? (St & Na) === Tn && Sc(e, 0) : s0 |= a, Qs === at && (Qs = 0)), Ja(e);
    }
    function wy(e, t) {
      t === 0 && (t = Dn()), e = na(e, t), e !== null && (pu(e, t), Ja(e));
    }
    function fs(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), wy(e, a);
    }
    function Ti(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), wy(e, a);
    }
    function hd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === wo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && re(
            o,
            jy,
            i,
            o,
            (o.mode & J0) === qt
          ) : hd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? re(
            o,
            jy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && re(
            o,
            hd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function jy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      ue(!0);
      try {
        Da(t), a && us(t), _u(e, t.alternate, t, !1), a && ld(e, t, 0, null, !1, 0);
      } finally {
        ue(!1);
      }
    }
    function zo(e) {
      var t = !0;
      e.current.mode & (ga | Qu) || (t = !1), hd(
        e,
        e.current,
        t
      );
    }
    function gn(e) {
      if ((St & Na) === Tn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", Zv !== null) {
            if (Zv.has(t)) return;
            Zv.add(t);
          } else Zv = /* @__PURE__ */ new Set([t]);
          re(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Mo(e, t) {
      Wt && e.memoizedUpdaters.forEach(function(a) {
        qa(e, a, t);
      });
    }
    function Gy(e, t) {
      var a = Y.actQueue;
      return a !== null ? (a.push(t), jS) : Nd(e, t);
    }
    function tv(e) {
      Hy() && Y.actQueue === null && re(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Ja(e) {
      e !== Sh && e.next === null && (Sh === null ? Kv = Sh = e : Sh = Sh.next = e), Jv = !0, Y.actQueue !== null ? g0 || (g0 = !0, sl()) : v0 || (v0 = !0, sl());
    }
    function Tc(e, t) {
      if (!b0 && Jv) {
        b0 = !0;
        do
          for (var a = !1, i = Kv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ll(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, pd(i, f));
            } else
              f = at, f = hl(
                i,
                i === _t ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== $s
              ), (f & 3) === 0 || $u(i, f) || (a = !0, pd(i, f));
            i = i.next;
          }
        while (a);
        b0 = !1;
      }
    }
    function yd() {
      md();
    }
    function md() {
      Jv = g0 = v0 = !1;
      var e = 0;
      Js !== 0 && (Uo() && (e = Js), Js = 0);
      for (var t = lu(), a = null, i = Kv; i !== null; ) {
        var o = i.next, f = kn(i, t);
        f === 0 ? (i.next = null, a === null ? Kv = o : a.next = o, o === null && (Sh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Jv = !0)), i = o;
      }
      Tc(e);
    }
    function kn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ll(f), h = 1 << d, v = o[d];
        v === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Ps(h, t)) : v <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = _t, a = at, a = hl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $s
      ), i = e.callbackNode, a === 0 || e === t && (At === Vs || At === Xs) || e.cancelPendingCommit !== null)
        return i !== null && vd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || $u(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Y.actQueue !== null && i !== S0)
          vd(i);
        else return t;
        switch (kc(a)) {
          case xl:
          case Sn:
            a = Rs;
            break;
          case Lu:
            a = Xo;
            break;
          case jd:
            a = Os;
            break;
          default:
            a = Xo;
        }
        return i = Kt.bind(null, e), Y.actQueue !== null ? (Y.actQueue.push(i), a = S0) : a = Nd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && vd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Kt(e, t) {
      if (Hv = _v = !1, ta !== Zs && ta !== d0)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Oo() && e.callbackNode !== a)
        return null;
      var i = at;
      return i = hl(
        e,
        e === _t ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $s
      ), i === 0 ? null : (fl(
        e,
        i,
        t
      ), kn(e, lu()), e.callbackNode != null && e.callbackNode === a ? Kt.bind(null, e) : null);
    }
    function pd(e, t) {
      if (Oo()) return null;
      _v = Hv, Hv = !1, fl(e, t, !0);
    }
    function vd(e) {
      e !== S0 && e !== null && zg(e);
    }
    function sl() {
      Y.actQueue !== null && Y.actQueue.push(function() {
        return md(), null;
      }), $S(function() {
        (St & (Na | ku)) !== Tn ? Nd(
          Bd,
          yd
        ) : md();
      });
    }
    function Ly() {
      return Js === 0 && (Js = Qe()), Js;
    }
    function Vy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Q(e, "action"), to("" + e));
    }
    function Xy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Nt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Vy(
          (o[pa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[pa] || null) ? Vy(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new be(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Js !== 0) {
                    var v = d ? Xy(
                      o,
                      d
                    ) : new FormData(o), b = {
                      pending: !0,
                      data: v,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(b), oc(
                      a,
                      b,
                      null,
                      v
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), v = d ? Xy(
                    o,
                    d
                  ) : new FormData(o), b = {
                    pending: !0,
                    data: v,
                    method: o.method,
                    action: f
                  }, Object.freeze(b), oc(
                    a,
                    b,
                    f,
                    v
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Ml(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        t0(i);
      }
      e.currentTarget = null;
    }
    function $n(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], v = h.instance, b = h.currentTarget;
              if (h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? re(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], v = h.instance, b = h.currentTarget, h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? re(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
        }
      }
    }
    function Ie(e, t) {
      T0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[pm];
      a === void 0 && (a = t[pm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (bd(t, e, 2, !1), a.add(i));
    }
    function gd(e, t, a) {
      T0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), bd(
        a,
        e,
        i,
        t
      );
    }
    function Qy(e) {
      if (!e[kv]) {
        e[kv] = !0, vv.forEach(function(a) {
          a !== "selectionchange" && (T0.has(a) || gd(a, !1, e), gd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[kv] || (t[kv] = !0, gd("selectionchange", !1, t));
      }
    }
    function bd(e, t, a, i) {
      switch (Cd(t)) {
        case xl:
          var o = Rg;
          break;
        case Sn:
          o = Ud;
          break;
        default:
          o = Oi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !C || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function $l(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var v = d.tag;
                if ((v === 3 || v === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = aa(h), d === null) return;
              if (v = d.tag, v === 5 || v === 6 || v === 26 || v === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      sr(function() {
        var b = f, B = ki(a), G = [];
        e: {
          var H = K0.get(e);
          if (H !== void 0) {
            var L = be, de = e;
            switch (e) {
              case "keypress":
                if (lo(a) === 0) break e;
              case "keydown":
              case "keyup":
                L = lS;
                break;
              case "focusin":
                de = "focus", L = ot;
                break;
              case "focusout":
                de = "blur", L = ot;
                break;
              case "beforeblur":
              case "afterblur":
                L = ot;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                L = ke;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                L = Ae;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                L = uS;
                break;
              case V0:
              case X0:
              case Q0:
                L = Hg;
                break;
              case Z0:
                L = cS;
                break;
              case "scroll":
              case "scrollend":
                L = z;
                break;
              case "wheel":
                L = fS;
                break;
              case "copy":
              case "cut":
              case "paste":
                L = $b;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                L = N0;
                break;
              case "toggle":
              case "beforetoggle":
                L = rS;
            }
            var ze = (t & 4) !== 0, Ht = !ze && (e === "scroll" || e === "scrollend"), it = ze ? H !== null ? H + "Capture" : null : H;
            ze = [];
            for (var T = b, E; T !== null; ) {
              var A = T;
              if (E = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || E === null || it === null || (A = bu(T, it), A != null && ze.push(
                Wl(
                  T,
                  A,
                  E
                )
              )), Ht) break;
              T = T.return;
            }
            0 < ze.length && (H = new L(
              H,
              de,
              null,
              a,
              B
            ), G.push({
              event: H,
              listeners: ze
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (H = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", H && a !== s && (de = a.relatedTarget || a.fromElement) && (aa(de) || de[Hi]))
              break e;
            if ((L || H) && (H = B.window === B ? B : (H = B.ownerDocument) ? H.defaultView || H.parentWindow : window, L ? (de = a.relatedTarget || a.toElement, L = b, de = de ? aa(de) : null, de !== null && (Ht = Xe(de), ze = de.tag, de !== Ht || ze !== 5 && ze !== 27 && ze !== 6) && (de = null)) : (L = null, de = b), L !== de)) {
              if (ze = ke, A = "onMouseLeave", it = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ze = N0, A = "onPointerLeave", it = "onPointerEnter", T = "pointer"), Ht = L == null ? H : an(L), E = de == null ? H : an(de), H = new ze(
                A,
                T + "leave",
                L,
                a,
                B
              ), H.target = Ht, H.relatedTarget = E, A = null, aa(B) === b && (ze = new ze(
                it,
                T + "enter",
                de,
                a,
                B
              ), ze.target = E, ze.relatedTarget = Ht, A = ze), Ht = A, L && de)
                t: {
                  for (ze = L, it = de, T = 0, E = ze; E; E = gl(E))
                    T++;
                  for (E = 0, A = it; A; A = gl(A))
                    E++;
                  for (; 0 < T - E; )
                    ze = gl(ze), T--;
                  for (; 0 < E - T; )
                    it = gl(it), E--;
                  for (; T--; ) {
                    if (ze === it || it !== null && ze === it.alternate)
                      break t;
                    ze = gl(ze), it = gl(it);
                  }
                  ze = null;
                }
              else ze = null;
              L !== null && Zy(
                G,
                H,
                L,
                ze,
                !1
              ), de !== null && Ht !== null && Zy(
                G,
                Ht,
                de,
                ze,
                !0
              );
            }
          }
          e: {
            if (H = b ? an(b) : window, L = H.nodeName && H.nodeName.toLowerCase(), L === "select" || L === "input" && H.type === "file")
              var V = Nh;
            else if (Op(H))
              if (G0)
                V = vg;
              else {
                V = Bh;
                var te = mg;
              }
            else
              L = H.nodeName, !L || L.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? b && Ji(b.elementType) && (V = Nh) : V = pg;
            if (V && (V = V(e, b))) {
              yr(
                G,
                V,
                a,
                B
              );
              break e;
            }
            te && te(e, H, b), e === "focusout" && b && H.type === "number" && b.memoizedProps.value != null && nr(H, "number", H.value);
          }
          switch (te = b ? an(b) : window, e) {
            case "focusin":
              (Op(te) || te.contentEditable === "true") && ($d = te, Ng = b, qm = null);
              break;
            case "focusout":
              qm = Ng = $d = null;
              break;
            case "mousedown":
              Bg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Bg = !1, _p(
                G,
                a,
                B
              );
              break;
            case "selectionchange":
              if (mS) break;
            case "keydown":
            case "keyup":
              _p(
                G,
                a,
                B
              );
          }
          var Ge;
          if (xg)
            e: {
              switch (e) {
                case "compositionstart":
                  var he = "onCompositionStart";
                  break e;
                case "compositionend":
                  he = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  he = "onCompositionUpdate";
                  break e;
              }
              he = void 0;
            }
          else
            kd ? kl(e, a) && (he = "onCompositionEnd") : e === "keydown" && a.keyCode === B0 && (he = "onCompositionStart");
          he && (q0 && a.locale !== "ko" && (kd || he !== "onCompositionStart" ? he === "onCompositionEnd" && kd && (Ge = Su()) : (J = B, x = "value" in J ? J.value : J.textContent, kd = !0)), te = ss(
            b,
            he
          ), 0 < te.length && (he = new x0(
            he,
            e,
            null,
            a,
            B
          ), G.push({
            event: he,
            listeners: te
          }), Ge ? he.data = Ge : (Ge = ti(a), Ge !== null && (he.data = Ge)))), (Ge = hS ? hr(e, a) : Af(e, a)) && (he = ss(
            b,
            "onBeforeInput"
          ), 0 < he.length && (te = new Fb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            B
          ), G.push({
            event: te,
            listeners: he
          }), te.data = Ge)), Nt(
            G,
            e,
            b,
            a,
            B
          );
        }
        $n(G, t);
      });
    }
    function Wl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ss(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = bu(e, a), o != null && i.unshift(
          Wl(e, o, f)
        ), o = bu(e, t), o != null && i.push(
          Wl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function gl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Zy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, v = h.alternate, b = h.stateNode;
        if (h = h.tag, v !== null && v === i) break;
        h !== 5 && h !== 26 && h !== 27 || b === null || (v = b, o ? (b = bu(a, f), b != null && d.unshift(
          Wl(a, b, v)
        )) : o || (b = bu(a, f), b != null && d.push(
          Wl(a, b, v)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Wn(e, t) {
      eo(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Hm || (Hm = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ia,
        possibleRegistrationNames: Cc
      };
      Ji(e) || typeof t.is == "string" || _h(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Bt(e, t, a, i) {
      t !== a && (a = Ul(a), Ul(t) !== a && (i[e] = t));
    }
    function Ei(e, t, a) {
      t.forEach(function(i) {
        a[Jy(i)] = i === "style" ? Ac(e) : e.getAttribute(i);
      });
    }
    function ka(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Sd(e, t) {
      return e = e.namespaceURI === Hs || e.namespaceURI === Wo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ul(e) {
      return g(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        me(e)
      ), N(e)), (typeof e == "string" ? e : "" + e).replace(GS, `
`).replace(LS, "");
    }
    function Ky(e, t) {
      return t = Ul(t), Ul(e) === t;
    }
    function xu() {
    }
    function rt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Tf(i, t, !1), t === "body" || t === "textarea" && i === "" || Ki(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Tf("" + i, t, !1), t !== "body" && Ki(e, "" + i));
          break;
        case "className":
          qe(e, "class", i);
          break;
        case "tabIndex":
          qe(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          qe(e, a, i);
          break;
        case "style":
          Ef(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            qe(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Q(i, a), i = to("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Fv || (Fv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Wv || (Wv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || $v ? t !== "button" || o.type == null || o.type === "submit" || $v ? typeof i == "function" && (o.name == null || cb || (cb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Fv || (Fv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Wv || (Wv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : ($v = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : ($v = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && rt(e, t, "name", o.name, o, null), rt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), rt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), rt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (rt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), rt(e, t, "method", o.method, o, null), rt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Q(i, a), i = to("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && ka(a, i), e.onclick = xu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ka(a, i), Ie("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ka(a, i), Ie("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Q(i, a), a = to("" + i), e.setAttributeNS(ks, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Q(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Iv[a] || (Iv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Q(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Q(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Q(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ie("beforetoggle", e), Ie("toggle", e), nt(e, "popover", i);
          break;
        case "xlinkActuate":
          el(
            e,
            ks,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          el(
            e,
            ks,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          el(
            e,
            ks,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          el(
            e,
            ks,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          el(
            e,
            ks,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          el(
            e,
            ks,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          el(
            e,
            E0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          el(
            e,
            E0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          el(
            e,
            E0,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), nt(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          ob || i == null || typeof i != "object" || (ob = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = fr(a), nt(e, a, i)) : Ia.hasOwnProperty(a) && i != null && typeof i != "function" && ka(a, i);
      }
    }
    function Ec(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Ef(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Ki(e, i) : (typeof i == "number" || typeof i == "bigint") && Ki(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ka(a, i), Ie("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ka(a, i), Ie("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && ka(a, i), e.onclick = xu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Ia.hasOwnProperty(a))
            i != null && typeof i != "function" && ka(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[pa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : nt(e, a, i);
            }
      }
    }
    function Jt(e, t, a) {
      switch (Wn(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ie("error", e), Ie("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    rt(e, t, f, d, a, null);
                }
            }
          o && rt(e, t, "srcSet", a.srcSet, a, null), i && rt(e, t, "src", a.src, a, null);
          return;
        case "input":
          ye("input", a), Ie("invalid", e);
          var h = f = d = o = null, v = null, b = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var B = a[i];
              if (B != null)
                switch (i) {
                  case "name":
                    o = B;
                    break;
                  case "type":
                    d = B;
                    break;
                  case "checked":
                    v = B;
                    break;
                  case "defaultChecked":
                    b = B;
                    break;
                  case "value":
                    f = B;
                    break;
                  case "defaultValue":
                    h = B;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (B != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    rt(e, t, i, B, a, null);
                }
            }
          Fu(e, a), Sp(
            e,
            f,
            h,
            v,
            b,
            d,
            o,
            !1
          ), vu(e);
          return;
        case "select":
          ye("select", a), Ie("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  rt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          gf(e, a), t = f, a = d, e.multiple = !!i, t != null ? gu(e, !!i, t, !1) : a != null && gu(e, !!i, a, !0);
          return;
        case "textarea":
          ye("textarea", a), Ie("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  rt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          zn(e, a), Dh(e, i, o, f), vu(e);
          return;
        case "option":
          Oh(e, a);
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  rt(e, t, v, i, a, null);
              }
          return;
        case "dialog":
          Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
          break;
        case "iframe":
        case "object":
          Ie("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < ip.length; i++)
            Ie(ip[i], e);
          break;
        case "image":
          Ie("error", e), Ie("load", e);
          break;
        case "details":
          Ie("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ie("error", e), Ie("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  rt(e, t, b, i, a, null);
              }
          return;
        default:
          if (Ji(t)) {
            for (B in a)
              a.hasOwnProperty(B) && (i = a[B], i !== void 0 && Ec(
                e,
                t,
                B,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && rt(e, t, h, i, a, null));
    }
    function lv(e, t, a, i) {
      switch (Wn(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, v = null, b = null, B = null;
          for (L in a) {
            var G = a[L];
            if (a.hasOwnProperty(L) && G != null)
              switch (L) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  v = G;
                default:
                  i.hasOwnProperty(L) || rt(
                    e,
                    t,
                    L,
                    null,
                    i,
                    G
                  );
              }
          }
          for (var H in i) {
            var L = i[H];
            if (G = a[H], i.hasOwnProperty(H) && (L != null || G != null))
              switch (H) {
                case "type":
                  f = L;
                  break;
                case "name":
                  o = L;
                  break;
                case "checked":
                  b = L;
                  break;
                case "defaultChecked":
                  B = L;
                  break;
                case "value":
                  d = L;
                  break;
                case "defaultValue":
                  h = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  L !== G && rt(
                    e,
                    t,
                    H,
                    L,
                    i,
                    G
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || ib || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ib = !0), !t || i || ub || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ub = !0), Iu(
            e,
            d,
            h,
            v,
            b,
            B,
            f,
            o
          );
          return;
        case "select":
          L = d = h = H = null;
          for (f in a)
            if (v = a[f], a.hasOwnProperty(f) && v != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  L = v;
                default:
                  i.hasOwnProperty(f) || rt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    v
                  );
              }
          for (o in i)
            if (f = i[o], v = a[o], i.hasOwnProperty(o) && (f != null || v != null))
              switch (o) {
                case "value":
                  H = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== v && rt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    v
                  );
              }
          i = h, t = d, a = L, H != null ? gu(e, !!t, H, !1) : !!a != !!t && (i != null ? gu(e, !!t, i, !0) : gu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          L = H = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  rt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  H = o;
                  break;
                case "defaultValue":
                  L = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && rt(e, t, d, o, i, f);
              }
          ur(e, H, L);
          return;
        case "option":
          for (var de in a)
            if (H = a[de], a.hasOwnProperty(de) && H != null && !i.hasOwnProperty(de))
              switch (de) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  rt(
                    e,
                    t,
                    de,
                    null,
                    i,
                    H
                  );
              }
          for (v in i)
            if (H = i[v], L = a[v], i.hasOwnProperty(v) && H !== L && (H != null || L != null))
              switch (v) {
                case "selected":
                  e.selected = H && typeof H != "function" && typeof H != "symbol";
                  break;
                default:
                  rt(
                    e,
                    t,
                    v,
                    H,
                    i,
                    L
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ze in a)
            H = a[ze], a.hasOwnProperty(ze) && H != null && !i.hasOwnProperty(ze) && rt(
              e,
              t,
              ze,
              null,
              i,
              H
            );
          for (b in i)
            if (H = i[b], L = a[b], i.hasOwnProperty(b) && H !== L && (H != null || L != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  rt(
                    e,
                    t,
                    b,
                    H,
                    i,
                    L
                  );
              }
          return;
        default:
          if (Ji(t)) {
            for (var Ht in a)
              H = a[Ht], a.hasOwnProperty(Ht) && H !== void 0 && !i.hasOwnProperty(Ht) && Ec(
                e,
                t,
                Ht,
                void 0,
                i,
                H
              );
            for (B in i)
              H = i[B], L = a[B], !i.hasOwnProperty(B) || H === L || H === void 0 && L === void 0 || Ec(
                e,
                t,
                B,
                H,
                i,
                L
              );
            return;
          }
      }
      for (var it in a)
        H = a[it], a.hasOwnProperty(it) && H != null && !i.hasOwnProperty(it) && rt(e, t, it, null, i, H);
      for (G in i)
        H = i[G], L = a[G], !i.hasOwnProperty(G) || H === L || H == null && L == null || rt(e, t, G, H, i, L);
    }
    function Jy(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Ac(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function ky(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (F(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || _s.has(f) ? (F(d, f), i += o + f.replace(Vu, "-$1").toLowerCase().replace(Xu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Vu, "-$1").toLowerCase().replace(Xu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ul(i), Ul(t) !== i && (a.style = Ac(e)));
      }
    }
    function Fl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Q(i, t), e === "" + i)
              return;
        }
      Bt(t, e, i, f);
    }
    function $y(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Bt(t, e, i, f);
    }
    function Wy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Q(i, a), e === "" + i)
              return;
        }
      Bt(t, e, i, f);
    }
    function av(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Q(i, t), e === "" + i))
              return;
        }
      Bt(t, e, i, f);
    }
    function vt(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Q(i, t), a = to("" + i), e === a)
              return;
        }
      Bt(t, e, i, f);
    }
    function Dt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ji(t)) {
        for (var v in a)
          if (a.hasOwnProperty(v)) {
            var b = a[v];
            if (b != null) {
              if (Ia.hasOwnProperty(v))
                typeof b != "function" && ka(v, b);
              else if (a.suppressHydrationWarning !== !0)
                switch (v) {
                  case "children":
                    typeof b != "string" && typeof b != "number" || Bt(
                      "children",
                      e.textContent,
                      b,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = Sd(e, b), Bt(
                      v,
                      d,
                      b,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(v), ky(e, b, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(v.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      v
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ye(
                      e,
                      "class",
                      b
                    ), Bt(
                      "className",
                      d,
                      b,
                      o
                    );
                    continue;
                  default:
                    i.context === Xc && t !== "svg" && t !== "math" ? f.delete(v.toLowerCase()) : f.delete(v), d = Ye(
                      e,
                      v,
                      b
                    ), Bt(
                      v,
                      d,
                      b,
                      o
                    );
                }
            }
          }
      } else
        for (b in a)
          if (a.hasOwnProperty(b) && (v = a[b], v != null)) {
            if (Ia.hasOwnProperty(b))
              typeof v != "function" && ka(b, v);
            else if (a.suppressHydrationWarning !== !0)
              switch (b) {
                case "children":
                  typeof v != "string" && typeof v != "number" || Bt(
                    "children",
                    e.textContent,
                    v,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = Sd(e, v), d !== v && (o[b] = { __html: d }));
                  continue;
                case "className":
                  Fl(
                    e,
                    b,
                    "class",
                    v,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Fl(
                    e,
                    b,
                    "tabindex",
                    v,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(b), ky(e, v, o);
                  continue;
                case "multiple":
                  f.delete(b), Bt(
                    b,
                    e.multiple,
                    v,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(b), Bt(
                    b,
                    e.muted,
                    v,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Bt(
                    b,
                    e.autofocus,
                    v,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(b), d = e.getAttribute("data"), Bt(
                      b,
                      d,
                      v,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(v !== "" || t === "a" && b === "href" || t === "object" && b === "data")) {
                    console.error(
                      b === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      b,
                      b
                    );
                    continue;
                  }
                  vt(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(b), typeof v == "function") {
                    f.delete(b.toLowerCase()), b === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === VS) {
                    f.delete(b.toLowerCase()), Bt(
                      b,
                      "function",
                      v,
                      o
                    );
                    continue;
                  }
                  vt(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  vt(
                    e,
                    b,
                    "xlink:href",
                    v,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Wy(
                    e,
                    b,
                    "contenteditable",
                    v,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Wy(
                    e,
                    b,
                    "spellcheck",
                    v,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Wy(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  $y(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var B = d = b, G = o;
                    if (f.delete(B), h = h.getAttribute(B), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (v === !1) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (v === !0 && h === "") break e;
                          break;
                        default:
                          if (Q(v, d), h === "" + v)
                            break e;
                      }
                    Bt(
                      d,
                      h,
                      v,
                      G
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, B = d = b, G = o, f.delete(B), h = h.getAttribute(B), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(v) || 1 > v) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(v) || 1 > v) && (Q(v, d), h === "" + v))
                            break e;
                      }
                    Bt(
                      d,
                      h,
                      v,
                      G
                    );
                  }
                  continue;
                case "rowSpan":
                  av(
                    e,
                    b,
                    "rowspan",
                    v,
                    f,
                    o
                  );
                  continue;
                case "start":
                  av(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Fl(
                    e,
                    b,
                    "x-height",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Fl(
                    e,
                    b,
                    "xlink:actuate",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Fl(
                    e,
                    b,
                    "xlink:arcrole",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Fl(
                    e,
                    b,
                    "xlink:role",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Fl(
                    e,
                    b,
                    "xlink:show",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Fl(
                    e,
                    b,
                    "xlink:title",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Fl(
                    e,
                    b,
                    "xlink:type",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Fl(
                    e,
                    b,
                    "xml:base",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Fl(
                    e,
                    b,
                    "xml:lang",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Fl(
                    e,
                    b,
                    "xml:space",
                    v,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  v !== "" || Iv[b] || (Iv[b] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    b
                  )), $y(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
                    h = fr(b), d = !1, i.context === Xc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (B = b.toLowerCase(), B = xc.hasOwnProperty(
                      B
                    ) && xc[B] || null, B !== null && B !== b && (d = !0, f.delete(B)), f.delete(h));
                    e: if (B = e, G = h, h = v, _e(G))
                      if (B.hasAttribute(G))
                        B = B.getAttribute(
                          G
                        ), Q(
                          h,
                          G
                        ), h = B === "" + h ? h : B;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (B = G.toLowerCase().slice(0, 5), B !== "data-" && B !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Bt(
                      b,
                      h,
                      v,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ei(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Pe(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function et(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function gt(e) {
      switch (e) {
        case Wo:
          return Th;
        case Hs:
          return tg;
        default:
          return Xc;
      }
    }
    function da(e, t) {
      if (e === Xc)
        switch (t) {
          case "svg":
            return Th;
          case "math":
            return tg;
          default:
            return Xc;
        }
      return e === Th && t === "foreignObject" ? Xc : e;
    }
    function Fn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Uo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === D0 ? !1 : (D0 = e, !0) : (D0 = null, !1);
    }
    function Fy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Nu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function kt(e, t, a, i) {
      lv(e, t, a, i), e[pa] = i;
    }
    function Bu(e) {
      Ki(e, "");
    }
    function Rc(e, t, a) {
      e.nodeValue = a;
    }
    function In(e) {
      return e === "head";
    }
    function $a(e, t) {
      e.removeChild(t);
    }
    function Co(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function _o(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === eg) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & QS && Bo(d.documentElement), a & ZS && Bo(d.body), a & KS)
                for (a = d.head, Bo(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, v = d.nodeName;
                  d[Ko] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), Mc(t);
              return;
            }
            o--;
          } else
            a === Pv || a === Vc || a === cp ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Mc(t);
    }
    function ha(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Iy(e) {
      e.nodeValue = "";
    }
    function Py(e, t) {
      t = t[JS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Td(e, t) {
      e.nodeValue = t;
    }
    function Ho(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ho(a), ln(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ai(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ko])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Q(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = _l(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Cl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = _l(e.nextSibling), e === null)) return null;
      return e;
    }
    function Pn(e) {
      return e.data === cp || e.data === Vc && e.ownerDocument.readyState === sb;
    }
    function xo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Vc || a.readyState === sb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function _l(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Pv || t === cp || t === Vc || t === A0 || t === fb)
            break;
          if (t === eg) return null;
        }
      }
      return e;
    }
    function Ed(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Jy(f.name)] = f.name.toLowerCase() === "style" ? Ac(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ad(e, t, a) {
      return a === null || a[XS] !== !0 ? (e.nodeValue === t ? e = null : (t = Ul(t), e = Ul(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function em(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === eg) {
            if (t === 0)
              return _l(e.nextSibling);
            t--;
          } else
            a !== Pv && a !== cp && a !== Vc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function No(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Pv || a === cp || a === Vc) {
            if (t === 0) return e;
            t--;
          } else a === eg && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function tm(e) {
      Mc(e);
    }
    function za(e) {
      Mc(e);
    }
    function lm(e, t, a, i, o) {
      switch (o && or(e, i.ancestorInfo), t = et(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Ma(e, t, a, i) {
      if (!a[Hi] && Rl(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Jt(a, e, t), a[Vl] = i, a[pa] = t;
    }
    function Bo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      ln(e);
    }
    function rs(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function nv(e, t, a) {
      var i = Eh;
      if (i && typeof t == "string" && t) {
        var o = Ta(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), pb.has(o) || (pb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Jt(t, "link", e), D(t), i.head.appendChild(t)));
      }
    }
    function qu(e, t, a, i) {
      var o = (o = tu.current) ? rs(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Ri(a.href), t = m(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Ri(a.href);
            var f = m(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Ws, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              eu(e)
            )) && !f._p && (d.instance = f, d.state.loading = op | yu), !mu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              mu.set(e, h), f || uv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Oc(t) + `
  + ` + Oc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Oc(t) + `
  + ` + Oc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Dc(a), t = m(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Oc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : ju.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : ju.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : ju.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Ri(e) {
      return 'href="' + Ta(e) + '"';
    }
    function eu(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function am(e) {
      return Ze({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function uv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = op : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= op;
      }), t.addEventListener("error", function() {
        return i.loading |= yb;
      }), Jt(t, "link", a), D(t), e.head.appendChild(t));
    }
    function Dc(e) {
      return '[src="' + Ta(e) + '"]';
    }
    function zc(e) {
      return "script[async]" + e;
    }
    function Rd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Ta(a.href) + '"]'
            );
            if (i)
              return t.instance = i, D(i), i;
            var o = Ze({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), D(i), Jt(i, "style", o), Od(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Ri(a.href);
            var f = e.querySelector(
              eu(o)
            );
            if (f)
              return t.state.loading |= yu, t.instance = f, D(f), f;
            i = am(a), (o = mu.get(o)) && nm(i, o), f = (e.ownerDocument || e).createElement("link"), D(f);
            var d = f;
            return d._p = new Promise(function(h, v) {
              d.onload = h, d.onerror = v;
            }), Jt(f, "link", i), t.state.loading |= yu, Od(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Dc(a.src), (o = e.querySelector(
              zc(f)
            )) ? (t.instance = o, D(o), o) : (i = a, (o = mu.get(f)) && (i = Ze({}, a), um(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), D(o), Jt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & yu) === Ws && (i = t.instance, t.state.loading |= yu, Od(i, a.precedence, e));
      return t.instance;
    }
    function Od(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function nm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function um(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function im(e, t, a) {
      if (lg === null) {
        var i = /* @__PURE__ */ new Map(), o = lg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = lg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ko] || f[Vl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Wo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function cm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function qo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Th || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Pe(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function ds(e) {
      return !(e.type === "stylesheet" && (e.state.loading & mb) === Ws);
    }
    function iv() {
    }
    function cv(e, t, a) {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = fp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & yu) === Ws) {
        if (t.instance === null) {
          var o = Ri(a.href), f = e.querySelector(
            eu(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = hs.bind(i), e.then(i, i)), t.state.loading |= yu, t.instance = f, D(f);
            return;
          }
          f = e.ownerDocument || e, a = am(a), (o = mu.get(o)) && nm(a, o), f = f.createElement("link"), D(f);
          var d = f;
          d._p = new Promise(function(h, v) {
            d.onload = h, d.onerror = v;
          }), Jt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & mb) === Ws && (i.count++, t = hs.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function ov() {
      if (fp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = fp;
      return e.stylesheets && e.count === 0 && Dd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Dd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function hs() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Dd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Dd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, ag = /* @__PURE__ */ new Map(), t.forEach(fv, e), ag = null, hs.call(e));
    }
    function fv(e, t) {
      if (!(t.state.loading & yu)) {
        var a = ag.get(e);
        if (a) var i = a.get(M0);
        else {
          a = /* @__PURE__ */ new Map(), ag.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(M0, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(M0, o), a.set(d, o), this.count++, i = hs.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= yu;
      }
    }
    function zd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = $s, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jc(0), this.hiddenUpdates = Jc(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function om(e, t, a, i, o, f, d, h, v, b, B, G) {
      return e = new zd(
        e,
        t,
        a,
        d,
        h,
        v,
        b,
        G
      ), t = bS, f === !0 && (t |= ga | Qu), Wt && (t |= Pl), f = M(3, null, null, t), e.current = f, f.stateNode = e, t = _f(), lc(t), e.pooledCache = t, lc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, ua(f), e;
    }
    function fm(e) {
      return e ? (e = Fo, e) : Fo;
    }
    function bt(e, t, a, i, o, f) {
      if (Hl && typeof Hl.onScheduleFiberRoot == "function")
        try {
          Hl.onScheduleFiberRoot(Ci, i, a);
        } catch (d) {
          ma || (ma = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(t), o = fm(o), i.context === null ? i.context = o : i.pendingContext = o, va && Ca !== null && !Sb && (Sb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(Ca) || "Unknown"
      )), i = xn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = rn(e, i, t), a !== null && (Zt(a, e, t), fi(a, e, t));
    }
    function Md(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function sm(e, t) {
      Md(e, t), (e = e.alternate) && Md(e, t);
    }
    function rm(e) {
      if (e.tag === 13) {
        var t = na(e, 67108864);
        t !== null && Zt(t, e, 67108864), sm(e, 67108864);
      }
    }
    function Eg() {
      return Ca;
    }
    function Ag() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = df(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Rg(e, t, a, i) {
      var o = Y.T;
      Y.T = null;
      var f = De.p;
      try {
        De.p = xl, Oi(e, t, a, i);
      } finally {
        De.p = f, Y.T = o;
      }
    }
    function Ud(e, t, a, i) {
      var o = Y.T;
      Y.T = null;
      var f = De.p;
      try {
        De.p = Sn, Oi(e, t, a, i);
      } finally {
        De.p = f, Y.T = o;
      }
    }
    function Oi(e, t, a, i) {
      if (ug) {
        var o = ys(i);
        if (o === null)
          $l(
            e,
            t,
            i,
            ig,
            a
          ), Di(e, i);
        else if (ms(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Di(e, i), t & 4 && -1 < FS.indexOf(e)) {
          for (; o !== null; ) {
            var f = Rl(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Pt(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var v = 1 << 31 - Ll(d);
                        h.entanglements[1] |= v, d &= ~v;
                      }
                      Ja(f), (St & (Na | ku)) === Tn && (Xv = lu() + I1, Tc(0));
                    }
                  }
                  break;
                case 13:
                  h = na(f, 2), h !== null && Zt(h, f, 2), bc(), sm(f, 2);
              }
            if (f = ys(i), f === null && $l(
              e,
              t,
              i,
              ig,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          $l(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function ys(e) {
      return e = ki(e), Yo(e);
    }
    function Yo(e) {
      if (ig = null, e = aa(e), e !== null) {
        var t = Xe(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = It(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ig = e, null;
    }
    function Cd(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return xl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Sn;
        case "message":
          switch (Ui()) {
            case Bd:
              return xl;
            case Rs:
              return Sn;
            case Xo:
            case Ug:
              return Lu;
            case Os:
              return jd;
            default:
              return Lu;
          }
        default:
          return Lu;
      }
    }
    function Di(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          of = null;
          break;
        case "dragenter":
        case "dragleave":
          ff = null;
          break;
        case "mouseover":
        case "mouseout":
          sf = null;
          break;
        case "pointerover":
        case "pointerout":
          rp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          dp.delete(t.pointerId);
      }
    }
    function ya(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Rl(t), t !== null && rm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ms(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return of = ya(
            of,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return ff = ya(
            ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return sf = ya(
            sf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return rp.set(
            f,
            ya(
              rp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, dp.set(
            f,
            ya(
              dp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function sv(e) {
      var t = aa(e.target);
      if (t !== null) {
        var a = Xe(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = It(a), t !== null) {
              e.blockedOn = t, $c(e.priority, function() {
                if (a.tag === 13) {
                  var i = ra(a);
                  i = El(i);
                  var o = na(
                    a,
                    i
                  );
                  o !== null && Zt(o, a, i), sm(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ps(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = ys(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = Rl(a), t !== null && rm(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function dm(e, t, a) {
      ps(e) && a.delete(t);
    }
    function rv() {
      U0 = !1, of !== null && ps(of) && (of = null), ff !== null && ps(ff) && (ff = null), sf !== null && ps(sf) && (sf = null), rp.forEach(dm), dp.forEach(dm);
    }
    function vs(e, t) {
      e.blockedOn === t && (e.blockedOn = null, U0 || (U0 = !0, $t.unstable_scheduleCallback(
        $t.unstable_NormalPriority,
        rv
      )));
    }
    function dv(e) {
      cg !== e && (cg = e, $t.unstable_scheduleCallback(
        $t.unstable_NormalPriority,
        function() {
          cg === e && (cg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Yo(i || a) === null)
                continue;
              break;
            }
            var f = Rl(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), oc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Mc(e) {
      function t(v) {
        return vs(v, e);
      }
      of !== null && vs(of, e), ff !== null && vs(ff, e), sf !== null && vs(sf, e), rp.forEach(t), dp.forEach(t);
      for (var a = 0; a < rf.length; a++) {
        var i = rf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < rf.length && (a = rf[0], a.blockedOn === null); )
        sv(a), a.blockedOn === null && rf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[pa] || null;
          if (typeof f == "function")
            d || dv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[pa] || null)
                h = d.formAction;
              else if (Yo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), dv(a);
          }
        }
    }
    function _d(e) {
      this._internalRoot = e;
    }
    function gs(e) {
      this._internalRoot = e;
    }
    function hv(e) {
      e[Hi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var $t = Kb(), bs = Ah(), Og = Jb(), Ze = Object.assign, Ss = Symbol.for("react.element"), zi = Symbol.for("react.transitional.element"), Uc = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), wo = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), hm = Symbol.for("react.provider"), Hd = Symbol.for("react.consumer"), Wa = Symbol.for("react.context"), Yu = Symbol.for("react.forward_ref"), Go = Symbol.for("react.suspense"), Mi = Symbol.for("react.suspense_list"), Ts = Symbol.for("react.memo"), Ua = Symbol.for("react.lazy"), ym = Symbol.for("react.activity"), yv = Symbol.for("react.memo_cache_sentinel"), mm = Symbol.iterator, xd = Symbol.for("react.client.reference"), He = Array.isArray, Y = bs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, De = Og.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Dg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Es = [], As = [], Fa = -1, wu = zt(null), Lo = zt(null), tu = zt(null), Vo = zt(null), ju = Object.prototype.hasOwnProperty, Nd = $t.unstable_scheduleCallback, zg = $t.unstable_cancelCallback, mv = $t.unstable_shouldYield, Mg = $t.unstable_requestPaint, lu = $t.unstable_now, Ui = $t.unstable_getCurrentPriorityLevel, Bd = $t.unstable_ImmediatePriority, Rs = $t.unstable_UserBlockingPriority, Xo = $t.unstable_NormalPriority, Ug = $t.unstable_LowPriority, Os = $t.unstable_IdlePriority, Cg = $t.log, bn = $t.unstable_setDisableYieldValue, Ci = null, Hl = null, ie = null, ma = !1, Wt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ll = Math.clz32 ? Math.clz32 : Kc, qd = Math.log, Gu = Math.LN2, Yd = 256, wd = 4194304, xl = 2, Sn = 8, Lu = 32, jd = 268435456, _i = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + _i, pa = "__reactProps$" + _i, Hi = "__reactContainer$" + _i, pm = "__reactEvents$" + _i, pv = "__reactListeners$" + _i, Qo = "__reactHandles$" + _i, Zo = "__reactResources$" + _i, Ko = "__reactMarker$" + _i, vv = /* @__PURE__ */ new Set(), Ia = {}, Cc = {}, gv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Gd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ld = {}, Vd = {}, xi = 0, vm, gm, bv, bm, Jo, Sv, Tv;
    nn.__reactDisabledLog = !0;
    var Sm, Ds, ko = !1, zs = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ca = null, va = !1, _g = /[\n"\\]/g, Tm = !1, Em = !1, Am = !1, Rm = !1, Xd = !1, Om = !1, Ms = ["value", "defaultValue"], Ev = !1, Av = /["'&<>\n\t]|^\s|\s$/, Dm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Qd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Zd = Qd.concat(["button"]), zm = "dd dt li option optgroup p rp rt".split(" "), Mm = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, $o = {}, au = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Vu = /([A-Z])/g, Xu = /^ms-/, Us = /^(?:webkit|moz|o)[A-Z]/, Cs = /^-ms-/, Ni = /-(.)/g, Rv = /;\s*$/, _c = {}, Hc = {}, Ov = !1, Um = !1, _s = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Hs = "http://www.w3.org/1998/Math/MathML", Wo = "http://www.w3.org/2000/svg", Kd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), xc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Cm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, nu = {}, _m = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Jd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hm = !1, Il = {}, xs = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = !1;
    if (S)
      try {
        var X = {};
        Object.defineProperty(X, "passive", {
          get: function() {
            C = !0;
          }
        }), window.addEventListener("test", X, X), window.removeEventListener("test", X, X);
      } catch {
        C = !1;
      }
    var J = null, x = null, q = null, ge = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, be = Dl(ge), dt = Ze({}, ge, { view: 0, detail: 0 }), z = Dl(dt), R, U, Z, fe = Ze({}, dt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: dr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Z && (Z && e.type === "mousemove" ? (R = e.screenX - Z.screenX, U = e.screenY - Z.screenY) : U = R = 0, Z = e), R);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : U;
      }
    }), ke = Dl(fe), pe = Ze({}, fe, { dataTransfer: 0 }), Ae = Dl(pe), bl = Ze({}, dt, { relatedTarget: 0 }), ot = Dl(bl), Bi = Ze({}, ge, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Hg = Dl(Bi), kb = Ze({}, ge, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), $b = Dl(kb), Wb = Ze({}, ge, { data: 0 }), x0 = Dl(
      Wb
    ), Fb = x0, Ib = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Pb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, eS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, tS = Ze({}, dt, {
      key: function(e) {
        if (e.key) {
          var t = Ib[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dr,
      charCode: function(e) {
        return e.type === "keypress" ? lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), lS = Dl(tS), aS = Ze({}, fe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), N0 = Dl(aS), nS = Ze({}, dt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dr
    }), uS = Dl(nS), iS = Ze({}, ge, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cS = Dl(iS), oS = Ze({}, fe, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), fS = Dl(oS), sS = Ze({}, ge, {
      newState: 0,
      oldState: 0
    }), rS = Dl(sS), dS = [9, 13, 27, 32], B0 = 229, xg = S && "CompositionEvent" in window, xm = null;
    S && "documentMode" in document && (xm = document.documentMode);
    var hS = S && "TextEvent" in window && !xm, q0 = S && (!xg || xm && 8 < xm && 11 >= xm), Y0 = 32, w0 = String.fromCharCode(Y0), j0 = !1, kd = !1, yS = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Nm = null, Bm = null, G0 = !1;
    S && (G0 = xh("input") && (!document.documentMode || 9 < document.documentMode));
    var _a = typeof Object.is == "function" ? Object.is : gg, mS = S && "documentMode" in document && 11 >= document.documentMode, $d = null, Ng = null, qm = null, Bg = !1, Wd = {
      animationend: Tu("Animation", "AnimationEnd"),
      animationiteration: Tu("Animation", "AnimationIteration"),
      animationstart: Tu("Animation", "AnimationStart"),
      transitionrun: Tu("Transition", "TransitionRun"),
      transitionstart: Tu("Transition", "TransitionStart"),
      transitioncancel: Tu("Transition", "TransitionCancel"),
      transitionend: Tu("Transition", "TransitionEnd")
    }, qg = {}, L0 = {};
    S && (L0 = document.createElement("div").style, "AnimationEvent" in window || (delete Wd.animationend.animation, delete Wd.animationiteration.animation, delete Wd.animationstart.animation), "TransitionEvent" in window || delete Wd.transitionend.transition);
    var V0 = Fi("animationend"), X0 = Fi("animationiteration"), Q0 = Fi("animationstart"), pS = Fi("transitionrun"), vS = Fi("transitionstart"), gS = Fi("transitioncancel"), Z0 = Fi("transitionend"), K0 = /* @__PURE__ */ new Map(), Yg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Yg.push("scrollEnd");
    var wg = /* @__PURE__ */ new WeakMap(), Dv = 1, Nc = 2, uu = [], Fd = 0, jg = 0, Fo = {};
    Object.freeze(Fo);
    var iu = null, Id = null, qt = 0, bS = 1, Pl = 2, ga = 8, Qu = 16, J0 = 64, k0 = !1;
    try {
      var $0 = Object.preventExtensions({});
    } catch {
      k0 = !0;
    }
    var Pd = [], eh = 0, zv = null, Mv = 0, cu = [], ou = 0, Ns = null, Bc = 1, qc = "", Ha = null, ll = null, ht = !1, Yc = !1, fu = null, Bs = null, qi = !1, Gg = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), W0 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var SS = performance, F0 = function() {
        return SS.now();
      };
    else {
      var TS = Date;
      F0 = function() {
        return TS.now();
      };
    }
    var Lg = zt(null), Vg = zt(null), I0 = {}, Uv = null, th = null, lh = !1, ES = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, AS = $t.unstable_scheduleCallback, RS = $t.unstable_NormalPriority, Nl = {
      $$typeof: Wa,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, ah = $t.unstable_now, P0 = -0, Cv = -0, Pa = -1.1, qs = -0, _v = !1, Hv = !1, Ym = null, Xg = 0, Ys = 0, nh = null, e1 = Y.S;
    Y.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && qp(e, t), e1 !== null && e1(e, t);
    };
    var ws = zt(null), Zu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, wm = [], jm = [], Gm = [], Lm = [], Vm = [], Xm = [], js = /* @__PURE__ */ new Set();
    Zu.recordUnsafeLifecycleWarnings = function(e, t) {
      js.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && wm.push(e), e.mode & ga && typeof t.UNSAFE_componentWillMount == "function" && jm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gm.push(e), e.mode & ga && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vm.push(e), e.mode & ga && typeof t.UNSAFE_componentWillUpdate == "function" && Xm.push(e));
    }, Zu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < wm.length && (wm.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), js.add(h.type);
      }), wm = []);
      var t = /* @__PURE__ */ new Set();
      0 < jm.length && (jm.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), js.add(h.type);
      }), jm = []);
      var a = /* @__PURE__ */ new Set();
      0 < Gm.length && (Gm.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), js.add(h.type);
      }), Gm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Lm.length && (Lm.forEach(
        function(h) {
          i.add(
            se(h) || "Component"
          ), js.add(h.type);
        }
      ), Lm = []);
      var o = /* @__PURE__ */ new Set();
      0 < Vm.length && (Vm.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), js.add(h.type);
      }), Vm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Xm.length && (Xm.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), js.add(h.type);
      }), Xm = []), 0 < t.size) {
        var d = $(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = $(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = $(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = $(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = $(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = $(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var xv = /* @__PURE__ */ new Map(), t1 = /* @__PURE__ */ new Set();
    Zu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ga && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !t1.has(e.type) && (i = xv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], xv.set(a, i)), i.push(e));
    }, Zu.flushLegacyContextWarning = function() {
      xv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), t1.add(o.type);
          });
          var i = $(a);
          re(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Zu.discardPendingWarnings = function() {
      wm = [], jm = [], Gm = [], Lm = [], Vm = [], Xm = [], xv = /* @__PURE__ */ new Map();
    };
    var Qm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), l1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Nv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Qg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Zm = null, Bv = !1, su = 0, ru = 1, xa = 2, ea = 4, Bl = 8, a1 = 0, n1 = 1, u1 = 2, Zg = 3, Io = !1, i1 = !1, Kg = null, Jg = !1, uh = zt(null), qv = zt(0), ih, c1 = /* @__PURE__ */ new Set(), o1 = /* @__PURE__ */ new Set(), kg = /* @__PURE__ */ new Set(), f1 = /* @__PURE__ */ new Set(), Po = 0, xe = null, Ut = null, Sl = null, Yv = !1, ch = !1, Gs = !1, wv = 0, Km = 0, wc = null, OS = 0, DS = 25, j = null, du = null, jc = -1, Jm = !1, jv = {
      readContext: Ct,
      use: Bn,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt
    }, $g = null, s1 = null, Wg = null, r1 = null, Yi = null, Ku = null, Gv = null;
    $g = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Bn,
      useCallback: function(e, t) {
        return j = "useCallback", Je(), Ga(t), Gf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", Je(), Ct(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", Je(), Ga(t), Dr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", Je(), Ga(a), Mr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", Je(), Ga(t), Qa(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", Je(), Ga(t), zr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", Je(), Ga(t);
        var a = Y.H;
        Y.H = Yi;
        try {
          return Ur(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", Je();
        var i = Y.H;
        Y.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", Je(), jf(e);
      },
      useState: function(e) {
        j = "useState", Je();
        var t = Y.H;
        Y.H = Yi;
        try {
          return Du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", Je();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", Je(), Cr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", Je(), jn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", Je(), Ou(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", Je(), Gn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", Je(), oo(), mo(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", Je(), mo(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", Je(), yn(e);
      },
      useHostTransitionStatus: oa,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Je(), fc();
      }
    }, s1 = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Bn,
      useCallback: function(e, t) {
        return j = "useCallback", P(), Gf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", P(), Ct(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", P(), Dr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", P(), Mr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", P(), Qa(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", P(), zr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", P();
        var a = Y.H;
        Y.H = Yi;
        try {
          return Ur(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", P();
        var i = Y.H;
        Y.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", P(), jf(e);
      },
      useState: function(e) {
        j = "useState", P();
        var t = Y.H;
        Y.H = Yi;
        try {
          return Du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", P(), Cr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", P(), jn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", P(), Ou(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", P(), Gn();
      },
      useActionState: function(e, t) {
        return j = "useActionState", P(), mo(e, t);
      },
      useFormState: function(e, t) {
        return j = "useFormState", P(), oo(), mo(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", P(), yn(e);
      },
      useHostTransitionStatus: oa,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", P(), fc();
      }
    }, Wg = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Bn,
      useCallback: function(e, t) {
        return j = "useCallback", P(), cc(e, t);
      },
      useContext: function(e) {
        return j = "useContext", P(), Ct(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", P(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", P(), wn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", P();
        var a = Y.H;
        Y.H = Ku;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", P();
        var i = Y.H;
        Y.H = Ku;
        try {
          return Va(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", P(), ut().memoizedState;
      },
      useState: function() {
        j = "useState", P();
        var e = Y.H;
        Y.H = Ku;
        try {
          return Va(st);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", P(), Lf(e, t);
      },
      useTransition: function() {
        return j = "useTransition", P(), xr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", P(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", P(), ut().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", P(), oo(), Or(e);
      },
      useActionState: function(e) {
        return j = "useActionState", P(), Or(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", P(), zu(e, t);
      },
      useHostTransitionStatus: oa,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", P(), ut().memoizedState;
      }
    }, r1 = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Bn,
      useCallback: function(e, t) {
        return j = "useCallback", P(), cc(e, t);
      },
      useContext: function(e) {
        return j = "useContext", P(), Ct(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", P(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", P(), wn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", P();
        var a = Y.H;
        Y.H = Gv;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", P();
        var i = Y.H;
        Y.H = Gv;
        try {
          return ic(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", P(), ut().memoizedState;
      },
      useState: function() {
        j = "useState", P();
        var e = Y.H;
        Y.H = Gv;
        try {
          return ic(st);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", P(), _r(e, t);
      },
      useTransition: function() {
        return j = "useTransition", P(), Nr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", P(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", P(), ut().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", P(), oo(), po(e);
      },
      useActionState: function(e) {
        return j = "useActionState", P(), po(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", P(), Rr(e, t);
      },
      useHostTransitionStatus: oa,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", P(), ut().memoizedState;
      }
    }, Yi = {
      readContext: function(e) {
        return K(), Ct(e);
      },
      use: function(e) {
        return w(), Bn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", w(), Je(), Gf(e, t);
      },
      useContext: function(e) {
        return j = "useContext", w(), Je(), Ct(e);
      },
      useEffect: function(e, t) {
        return j = "useEffect", w(), Je(), Dr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", w(), Je(), Mr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        j = "useInsertionEffect", w(), Je(), Qa(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", w(), Je(), zr(e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", w(), Je();
        var a = Y.H;
        Y.H = Yi;
        try {
          return Ur(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", w(), Je();
        var i = Y.H;
        Y.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return j = "useRef", w(), Je(), jf(e);
      },
      useState: function(e) {
        j = "useState", w(), Je();
        var t = Y.H;
        Y.H = Yi;
        try {
          return Du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", w(), Je();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", w(), Je(), Cr(e, t);
      },
      useTransition: function() {
        return j = "useTransition", w(), Je(), jn();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", w(), Je(), Ou(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", w(), Je(), Gn();
      },
      useFormState: function(e, t) {
        return j = "useFormState", w(), Je(), mo(e, t);
      },
      useActionState: function(e, t) {
        return j = "useActionState", w(), Je(), mo(e, t);
      },
      useOptimistic: function(e) {
        return j = "useOptimistic", w(), Je(), yn(e);
      },
      useMemoCache: function(e) {
        return w(), Ft(e);
      },
      useHostTransitionStatus: oa,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", Je(), fc();
      }
    }, Ku = {
      readContext: function(e) {
        return K(), Ct(e);
      },
      use: function(e) {
        return w(), Bn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", w(), P(), cc(e, t);
      },
      useContext: function(e) {
        return j = "useContext", w(), P(), Ct(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", w(), P(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", w(), P(), wn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", w(), P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", w(), P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", w(), P();
        var a = Y.H;
        Y.H = Ku;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", w(), P();
        var i = Y.H;
        Y.H = Ku;
        try {
          return Va(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", w(), P(), ut().memoizedState;
      },
      useState: function() {
        j = "useState", w(), P();
        var e = Y.H;
        Y.H = Ku;
        try {
          return Va(st);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", w(), P();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", w(), P(), Lf(e, t);
      },
      useTransition: function() {
        return j = "useTransition", w(), P(), xr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", w(), P(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", w(), P(), ut().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", w(), P(), Or(e);
      },
      useActionState: function(e) {
        return j = "useActionState", w(), P(), Or(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", w(), P(), zu(e, t);
      },
      useMemoCache: function(e) {
        return w(), Ft(e);
      },
      useHostTransitionStatus: oa,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", P(), ut().memoizedState;
      }
    }, Gv = {
      readContext: function(e) {
        return K(), Ct(e);
      },
      use: function(e) {
        return w(), Bn(e);
      },
      useCallback: function(e, t) {
        return j = "useCallback", w(), P(), cc(e, t);
      },
      useContext: function(e) {
        return j = "useContext", w(), P(), Ct(e);
      },
      useEffect: function(e, t) {
        j = "useEffect", w(), P(), ol(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return j = "useImperativeHandle", w(), P(), wn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return j = "useInsertionEffect", w(), P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return j = "useLayoutEffect", w(), P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        j = "useMemo", w(), P();
        var a = Y.H;
        Y.H = Ku;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        j = "useReducer", w(), P();
        var i = Y.H;
        Y.H = Ku;
        try {
          return ic(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return j = "useRef", w(), P(), ut().memoizedState;
      },
      useState: function() {
        j = "useState", w(), P();
        var e = Y.H;
        Y.H = Ku;
        try {
          return ic(st);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        j = "useDebugValue", w(), P();
      },
      useDeferredValue: function(e, t) {
        return j = "useDeferredValue", w(), P(), _r(e, t);
      },
      useTransition: function() {
        return j = "useTransition", w(), P(), Nr();
      },
      useSyncExternalStore: function(e, t, a) {
        return j = "useSyncExternalStore", w(), P(), Bf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return j = "useId", w(), P(), ut().memoizedState;
      },
      useFormState: function(e) {
        return j = "useFormState", w(), P(), po(e);
      },
      useActionState: function(e) {
        return j = "useActionState", w(), P(), po(e);
      },
      useOptimistic: function(e, t) {
        return j = "useOptimistic", w(), P(), Rr(e, t);
      },
      useMemoCache: function(e) {
        return w(), Ft(e);
      },
      useHostTransitionStatus: oa,
      useCacheRefresh: function() {
        return j = "useCacheRefresh", P(), ut().memoizedState;
      }
    };
    var d1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = va;
        va = !0;
        try {
          return e(t, a);
        } finally {
          va = i;
        }
      }
    }, Fg = d1["react-stack-bottom-frame"].bind(d1), h1 = {
      "react-stack-bottom-frame": function(e) {
        var t = va;
        va = !0;
        try {
          return e.render();
        } finally {
          va = t;
        }
      }
    }, y1 = h1["react-stack-bottom-frame"].bind(h1), m1 = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ee(e, e.return, a);
        }
      }
    }, Ig = m1["react-stack-bottom-frame"].bind(m1), p1 = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ee(e, e.return, f);
        }
      }
    }, v1 = p1["react-stack-bottom-frame"].bind(p1), g1 = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, zS = g1["react-stack-bottom-frame"].bind(g1), b1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ee(e, t, i);
        }
      }
    }, S1 = b1["react-stack-bottom-frame"].bind(b1), T1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, MS = T1["react-stack-bottom-frame"].bind(T1), E1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ee(e, t, i);
        }
      }
    }, US = E1["react-stack-bottom-frame"].bind(E1), A1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ef = A1["react-stack-bottom-frame"].bind(A1), oh = null, km = 0, $e = null, Pg, R1 = Pg = !1, O1 = {}, D1 = {}, z1 = {};
    yt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!O1[o]) {
          O1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = se(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = se(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), re(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var fh = Zf(!0), M1 = Zf(!1), hu = zt(null), wi = null, sh = 1, $m = 2, ql = zt(0), U1 = {}, C1 = /* @__PURE__ */ new Set(), _1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), N1 = /* @__PURE__ */ new Set(), B1 = /* @__PURE__ */ new Set(), q1 = /* @__PURE__ */ new Set(), Y1 = /* @__PURE__ */ new Set(), w1 = /* @__PURE__ */ new Set(), j1 = /* @__PURE__ */ new Set();
    Object.freeze(U1);
    var e0 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = xn(i);
        o.payload = t, a != null && (ry(a), o.callback = a), t = rn(e, o, i), t !== null && (Zt(t, e, i), fi(t, e, i)), On(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = xn(i);
        o.tag = n1, o.payload = t, a != null && (ry(a), o.callback = a), t = rn(e, o, i), t !== null && (Zt(t, e, i), fi(t, e, i)), On(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ra(e), i = xn(a);
        i.tag = u1, t != null && (ry(t), i.callback = t), t = rn(e, i, a), t !== null && (Zt(t, e, a), fi(t, e, a)), ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, a);
      }
    }, t0 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, rh = null, l0 = null, G1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xl = !1, L1 = {}, V1 = {}, X1 = {}, Q1 = {}, dh = !1, Z1 = {}, a0 = {}, n0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, K1 = !1, J1 = null;
    J1 = /* @__PURE__ */ new Set();
    var Gc = !1, rl = !1, u0 = !1, k1 = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, hh = null, yh = null, Tl = null, en = !1, Ju = null, Wm = 8192, CS = {
      getCacheForType: function(e) {
        var t = Ct(Nl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Ca;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Fm = Symbol.for;
      Fm("selector.component"), Fm("selector.has_pseudo_class"), Fm("selector.role"), Fm("selector.test_id"), Fm("selector.text");
    }
    var _S = [], HS = typeof WeakMap == "function" ? WeakMap : Map, Tn = 0, Na = 2, ku = 4, Lc = 0, Im = 1, mh = 2, i0 = 3, Ls = 4, Lv = 6, $1 = 5, St = Tn, _t = null, tt = null, at = 0, tn = 0, Pm = 1, Vs = 2, ep = 3, W1 = 4, c0 = 5, ph = 6, tp = 7, o0 = 8, Xs = 9, At = tn, En = null, tf = !1, vh = !1, f0 = !1, ji = 0, al = Lc, lf = 0, af = 0, s0 = 0, An = 0, Qs = 0, lp = null, Ba = null, Vv = !1, r0 = 0, F1 = 300, Xv = 1 / 0, I1 = 500, ap = null, nf = null, xS = 0, NS = 1, BS = 2, Zs = 0, P1 = 1, eb = 2, tb = 3, qS = 4, d0 = 5, ta = 0, uf = null, gh = null, cf = 0, h0 = 0, y0 = null, lb = null, YS = 50, np = 0, m0 = null, p0 = !1, Qv = !1, wS = 50, Ks = 0, up = null, bh = !1, Zv = null, ab = !1, nb = /* @__PURE__ */ new Set(), jS = {}, Kv = null, Sh = null, v0 = !1, g0 = !1, Jv = !1, b0 = !1, Js = 0, S0 = {};
    (function() {
      for (var e = 0; e < Yg.length; e++) {
        var t = Yg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), un(a, "on" + t);
      }
      un(V0, "onAnimationEnd"), un(X0, "onAnimationIteration"), un(Q0, "onAnimationStart"), un("dblclick", "onDoubleClick"), un("focusin", "onFocus"), un("focusout", "onBlur"), un(pS, "onTransitionRun"), un(vS, "onTransitionStart"), un(gS, "onTransitionCancel"), un(Z0, "onTransitionEnd");
    })(), le("onMouseEnter", ["mouseout", "mouseover"]), le("onMouseLeave", ["mouseout", "mouseover"]), le("onPointerEnter", ["pointerout", "pointerover"]), le("onPointerLeave", ["pointerout", "pointerover"]), ee(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ee(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ee("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ee(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ee(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ee(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ip = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), T0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ip)
    ), kv = "_reactListening" + Math.random().toString(36).slice(2), ub = !1, ib = !1, $v = !1, cb = !1, Wv = !1, Fv = !1, ob = !1, Iv = {}, GS = /\r\n?/g, LS = /\u0000|\uFFFD/g, ks = "http://www.w3.org/1999/xlink", E0 = "http://www.w3.org/XML/1998/namespace", VS = "javascript:throw new Error('React form unexpectedly submitted.')", XS = "suppressHydrationWarning", Pv = "$", eg = "/$", Vc = "$?", cp = "$!", QS = 1, ZS = 2, KS = 4, A0 = "F!", fb = "F", sb = "complete", JS = "style", Xc = 0, Th = 1, tg = 2, R0 = null, O0 = null, rb = { dialog: !0, webview: !0 }, D0 = null, db = typeof setTimeout == "function" ? setTimeout : void 0, kS = typeof clearTimeout == "function" ? clearTimeout : void 0, $s = -1, hb = typeof Promise == "function" ? Promise : void 0, $S = typeof queueMicrotask == "function" ? queueMicrotask : typeof hb < "u" ? function(e) {
      return hb.resolve(null).then(e).catch(Fy);
    } : db, z0 = null, Ws = 0, op = 1, yb = 2, mb = 3, yu = 4, mu = /* @__PURE__ */ new Map(), pb = /* @__PURE__ */ new Set(), Qc = De.d;
    De.d = {
      f: function() {
        var e = Qc.f(), t = bc();
        return e || t;
      },
      r: function(e) {
        var t = Rl(e);
        t !== null && t.tag === 5 && t.type === "form" ? oy(t) : Qc.r(e);
      },
      D: function(e) {
        Qc.D(e), nv("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Qc.C(e, t), nv("preconnect", e, t);
      },
      L: function(e, t, a) {
        Qc.L(e, t, a);
        var i = Eh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Ta(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Ta(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Ta(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Ta(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Ri(e);
              break;
            case "script":
              f = Dc(e);
          }
          mu.has(f) || (e = Ze(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), mu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            eu(f)
          ) || t === "script" && i.querySelector(zc(f)) || (t = i.createElement("link"), Jt(t, "link", e), D(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Qc.m(e, t);
        var a = Eh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Ta(i) + '"][href="' + Ta(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Dc(e);
          }
          if (!mu.has(f) && (e = Ze({ rel: "modulepreload", href: e }, t), mu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(zc(f)))
                  return;
            }
            i = a.createElement("link"), Jt(i, "link", e), D(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Qc.X(e, t);
        var a = Eh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Dc(e), f = i.get(o);
          f || (f = a.querySelector(
            zc(o)
          ), f || (e = Ze({ src: e, async: !0 }, t), (t = mu.get(o)) && um(e, t), f = a.createElement("script"), D(f), Jt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Qc.S(e, t, a);
        var i = Eh;
        if (i && e) {
          var o = m(i).hoistableStyles, f = Ri(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Ws, preload: null };
            if (d = i.querySelector(
              eu(f)
            ))
              h.loading = op | yu;
            else {
              e = Ze(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = mu.get(f)) && nm(e, a);
              var v = d = i.createElement("link");
              D(v), Jt(v, "link", e), v._p = new Promise(function(b, B) {
                v.onload = b, v.onerror = B;
              }), v.addEventListener("load", function() {
                h.loading |= op;
              }), v.addEventListener("error", function() {
                h.loading |= yb;
              }), h.loading |= yu, Od(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Qc.M(e, t);
        var a = Eh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Dc(e), f = i.get(o);
          f || (f = a.querySelector(
            zc(o)
          ), f || (e = Ze({ src: e, async: !0, type: "module" }, t), (t = mu.get(o)) && um(e, t), f = a.createElement("script"), D(f), Jt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Eh = typeof document > "u" ? null : document, lg = null, fp = null, M0 = null, ag = null, Fs = Dg, sp = {
      $$typeof: Wa,
      Provider: null,
      Consumer: null,
      _currentValue: Fs,
      _currentValue2: Fs,
      _threadCount: 0
    }, vb = "%c%s%c ", gb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", bb = "", ng = " ", WS = Function.prototype.bind, Sb = !1, Tb = null, Eb = null, Ab = null, Rb = null, Ob = null, Db = null, zb = null, Mb = null, Ub = null;
    Tb = function(e, t, a, i) {
      t = W(e, t), t !== null && (a = ce(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = na(e, 2), a !== null && Zt(a, e, 2));
    }, Eb = function(e, t, a) {
      t = W(e, t), t !== null && (a = Se(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = na(e, 2), a !== null && Zt(a, e, 2));
    }, Ab = function(e, t, a, i) {
      t = W(e, t), t !== null && (a = Ne(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = na(e, 2), a !== null && Zt(a, e, 2));
    }, Rb = function(e, t, a) {
      e.pendingProps = ce(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Zt(t, e, 2);
    }, Ob = function(e, t) {
      e.pendingProps = Se(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Zt(t, e, 2);
    }, Db = function(e, t, a) {
      e.pendingProps = Ne(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Zt(t, e, 2);
    }, zb = function(e) {
      var t = na(e, 2);
      t !== null && Zt(t, e, 2);
    }, Mb = function(e) {
      lt = e;
    }, Ub = function(e) {
      Oe = e;
    };
    var ug = !0, ig = null, U0 = !1, of = null, ff = null, sf = null, rp = /* @__PURE__ */ new Map(), dp = /* @__PURE__ */ new Map(), rf = [], FS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), cg = null;
    if (gs.prototype.render = _d.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Ce(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ra(i);
      bt(i, o, a, t, null, null);
    }, gs.prototype.unmount = _d.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (St & (Na | ku)) !== Tn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), bt(e.current, 2, null, e, null, null), bc(), t[Hi] = null;
      }
    }, gs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = yf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < rf.length && t !== 0 && t < rf[a].priority; a++) ;
        rf.splice(a, 0, e), a === 0 && sv(e);
      }
    }, function() {
      var e = bs.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), De.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = wt(t), e = e !== null ? Be(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Y,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = Tb, e.overrideHookStateDeletePath = Eb, e.overrideHookStateRenamePath = Ab, e.overrideProps = Rb, e.overridePropsDeletePath = Ob, e.overridePropsRenamePath = Db, e.scheduleUpdate = zb, e.setErrorHandler = Mb, e.setSuspenseHandler = Ub, e.scheduleRefresh = Ue, e.scheduleRoot = ae, e.setRefreshHandler = Ke, e.getCurrentFiber = Eg, e.getLaneLabelMap = Ag, e.injectProfilingHooks = nl, Te(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Cb = window.location.protocol;
      /^(https?|file):$/.test(Cb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Cb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    pp.createRoot = function(e, t) {
      if (!Ce(e))
        throw Error("Target container is not a DOM element.");
      hv(e);
      var a = !1, i = "", o = dy, f = Vp, d = wr, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === zi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = om(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Hi] = t.current, Qy(e), new _d(t);
    }, pp.hydrateRoot = function(e, t, a) {
      if (!Ce(e))
        throw Error("Target container is not a DOM element.");
      hv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = dy, d = Vp, h = wr, v = null, b = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks), a.formState !== void 0 && (b = a.formState)), t = om(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        v,
        b
      ), t.context = fm(null), a = t.current, i = ra(a), i = El(i), o = xn(i), o.callback = null, rn(a, o, i), a = i, t.current.lanes = a, pu(t, a), Ja(t), e[Hi] = t.current, Qy(e), new gs(t);
    }, pp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), pp;
}
var Zb;
function rT() {
  if (Zb) return sg.exports;
  Zb = 1;
  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W);
      } catch (ce) {
        console.error(ce);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (W(), sg.exports = fT()) : sg.exports = sT(), sg.exports;
}
var dT = rT();
const hT = /* @__PURE__ */ PS(dT), yT = () => {
  const [W, ce] = Is.useState(!0), [Ne, _] = Is.useState([]), [Se, Oe] = Is.useState(""), [lt, yt] = Is.useState(!1), [w, K] = Is.useState(""), oe = Is.useRef(null), $ = () => {
    oe.current?.scrollIntoView({ behavior: "smooth" });
  };
  Is.useEffect(() => {
    $();
  }, [Ne]);
  const M = async () => {
    if (!Se.trim() || lt) return;
    const Ke = { role: "user", content: Se.trim() };
    _((Ce) => [...Ce, Ke]), Oe(""), yt(!0), K("");
    try {
      throw new Error("API key not configured");
    } catch (Ce) {
      console.error("Error sending message:", Ce), K(`Error: ${Ce.message}`), _((Xe) => [...Xe, {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again."
      }]);
    } finally {
      yt(!1);
    }
  }, ae = (Ke) => {
    Ke.key === "Enter" && !Ke.shiftKey && (Ke.preventDefault(), M());
  }, Ue = () => {
    ce(!W);
  };
  return W ? /* @__PURE__ */ Zl.jsx("div", { className: "llm-widget minimized", onClick: Ue, children: /* @__PURE__ */ Zl.jsx("div", { className: "widget-header", children: /* @__PURE__ */ Zl.jsx("span", { style: { fontSize: "24px" }, children: "💬" }) }) }) : /* @__PURE__ */ Zl.jsxs("div", { className: "llm-widget", children: [
    /* @__PURE__ */ Zl.jsxs("div", { className: "widget-header", onClick: Ue, children: [
      /* @__PURE__ */ Zl.jsx("div", { className: "widget-title", children: "CyVerse AI Assistant" }),
      /* @__PURE__ */ Zl.jsx("button", { className: "toggle-btn", onClick: (Ke) => {
        Ke.stopPropagation(), Ue();
      }, children: "−" })
    ] }),
    /* @__PURE__ */ Zl.jsxs("div", { className: "chat-container", children: [
      /* @__PURE__ */ Zl.jsxs("div", { className: "messages", children: [
        Ne.length === 0 && /* @__PURE__ */ Zl.jsx("div", { className: "message assistant", children: "Hi! I'm your AI assistant powered by CyVerse Verde. Ask me anything!" }),
        Ne.map((Ke, Ce) => /* @__PURE__ */ Zl.jsx("div", { className: `message ${Ke.role}`, children: Ke.content }, Ce)),
        lt && /* @__PURE__ */ Zl.jsx("div", { className: "message loading", children: "AI is thinking..." }),
        /* @__PURE__ */ Zl.jsx("div", { ref: oe })
      ] }),
      /* @__PURE__ */ Zl.jsxs("div", { className: "input-container", children: [
        /* @__PURE__ */ Zl.jsx(
          "input",
          {
            type: "text",
            className: "message-input",
            value: Se,
            onChange: (Ke) => Oe(Ke.target.value),
            onKeyPress: ae,
            placeholder: "Ask me anything...",
            disabled: lt
          }
        ),
        /* @__PURE__ */ Zl.jsx(
          "button",
          {
            className: "send-btn",
            onClick: M,
            disabled: lt || !Se.trim(),
            children: "Send"
          }
        )
      ] }),
      w && /* @__PURE__ */ Zl.jsx("div", { className: "error-message", children: w })
    ] })
  ] });
}, H0 = document.createElement("div");
H0.id = "llm-widget-container";
document.body.appendChild(H0);
hT.createRoot(H0).render(/* @__PURE__ */ Zl.jsx(yT, {}));
