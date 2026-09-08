/** @format */

(function () {
    const G = document.createElement('link').relList;
    if (G && G.supports && G.supports('modulepreload')) return;
    for (const _ of document.querySelectorAll('link[rel="modulepreload"]'))
        h(_);
    new MutationObserver((_) => {
        for (const q of _)
            if (q.type === 'childList')
                for (const Z of q.addedNodes)
                    Z.tagName === 'LINK' && Z.rel === 'modulepreload' && h(Z);
    }).observe(document, {childList: !0, subtree: !0});
    function X(_) {
        const q = {};
        return (
            _.integrity && (q.integrity = _.integrity),
            _.referrerPolicy && (q.referrerPolicy = _.referrerPolicy),
            _.crossOrigin === 'use-credentials'
                ? (q.credentials = 'include')
                : _.crossOrigin === 'anonymous'
                  ? (q.credentials = 'omit')
                  : (q.credentials = 'same-origin'),
            q
        );
    }
    function h(_) {
        if (_.ep) return;
        _.ep = !0;
        const q = X(_);
        fetch(_.href, q);
    }
})();
function W0(p) {
    return p &&
        p.__esModule &&
        Object.prototype.hasOwnProperty.call(p, 'default')
        ? p.default
        : p;
}
var nf = {exports: {}},
    bu = {};
var yd;
function k0() {
    if (yd) return bu;
    yd = 1;
    var p = Symbol.for('react.transitional.element'),
        G = Symbol.for('react.fragment');
    function X(h, _, q) {
        var Z = null;
        if (
            (q !== void 0 && (Z = '' + q),
            _.key !== void 0 && (Z = '' + _.key),
            'key' in _)
        ) {
            q = {};
            for (var dl in _) dl !== 'key' && (q[dl] = _[dl]);
        } else q = _;
        return (
            (_ = q.ref),
            {
                $$typeof: p,
                type: h,
                key: Z,
                ref: _ !== void 0 ? _ : null,
                props: q,
            }
        );
    }
    return ((bu.Fragment = G), (bu.jsx = X), (bu.jsxs = X), bu);
}
var vd;
function $0() {
    return (vd || ((vd = 1), (nf.exports = k0())), nf.exports);
}
var f = $0(),
    cf = {exports: {}},
    k = {};
var gd;
function F0() {
    if (gd) return k;
    gd = 1;
    var p = Symbol.for('react.transitional.element'),
        G = Symbol.for('react.portal'),
        X = Symbol.for('react.fragment'),
        h = Symbol.for('react.strict_mode'),
        _ = Symbol.for('react.profiler'),
        q = Symbol.for('react.consumer'),
        Z = Symbol.for('react.context'),
        dl = Symbol.for('react.forward_ref'),
        O = Symbol.for('react.suspense'),
        x = Symbol.for('react.memo'),
        Q = Symbol.for('react.lazy'),
        D = Symbol.for('react.activity'),
        w = Symbol.iterator;
    function fl(r) {
        return r === null || typeof r != 'object'
            ? null
            : ((r = (w && r[w]) || r['@@iterator']),
              typeof r == 'function' ? r : null);
    }
    var sl = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        P = Object.assign,
        xl = {};
    function ll(r, T, M) {
        ((this.props = r),
            (this.context = T),
            (this.refs = xl),
            (this.updater = M || sl));
    }
    ((ll.prototype.isReactComponent = {}),
        (ll.prototype.setState = function (r, T) {
            if (typeof r != 'object' && typeof r != 'function' && r != null)
                throw Error(
                    'takes an object of state variables to update or a function which returns an object of state variables.',
                );
            this.updater.enqueueSetState(this, r, T, 'setState');
        }),
        (ll.prototype.forceUpdate = function (r) {
            this.updater.enqueueForceUpdate(this, r, 'forceUpdate');
        }));
    function ul() {}
    ul.prototype = ll.prototype;
    function J(r, T, M) {
        ((this.props = r),
            (this.context = T),
            (this.refs = xl),
            (this.updater = M || sl));
    }
    var B = (J.prototype = new ul());
    ((B.constructor = J), P(B, ll.prototype), (B.isPureReactComponent = !0));
    var ml = Array.isArray;
    function yl() {}
    var K = {H: null, A: null, T: null, S: null},
        Sl = Object.prototype.hasOwnProperty;
    function Bl(r, T, M) {
        var U = M.ref;
        return {
            $$typeof: p,
            type: r,
            key: T,
            ref: U !== void 0 ? U : null,
            props: M,
        };
    }
    function $l(r, T) {
        return Bl(r.type, T, r.props);
    }
    function Ll(r) {
        return typeof r == 'object' && r !== null && r.$$typeof === p;
    }
    function Ml(r) {
        var T = {'=': '=0', ':': '=2'};
        return (
            '$' +
            r.replace(/[=:]/g, function (M) {
                return T[M];
            })
        );
    }
    var Pl = /\/+/g;
    function N(r, T) {
        return typeof r == 'object' && r !== null && r.key != null
            ? Ml('' + r.key)
            : T.toString(36);
    }
    function vl(r) {
        switch (r.status) {
            case 'fulfilled':
                return r.value;
            case 'rejected':
                throw r.reason;
            default:
                switch (
                    (typeof r.status == 'string'
                        ? r.then(yl, yl)
                        : ((r.status = 'pending'),
                          r.then(
                              function (T) {
                                  r.status === 'pending' &&
                                      ((r.status = 'fulfilled'), (r.value = T));
                              },
                              function (T) {
                                  r.status === 'pending' &&
                                      ((r.status = 'rejected'), (r.reason = T));
                              },
                          )),
                    r.status)
                ) {
                    case 'fulfilled':
                        return r.value;
                    case 'rejected':
                        throw r.reason;
                }
        }
        throw r;
    }
    function S(r, T, M, U, W) {
        var tl = typeof r;
        (tl === 'undefined' || tl === 'boolean') && (r = null);
        var gl = !1;
        if (r === null) gl = !0;
        else
            switch (tl) {
                case 'bigint':
                case 'string':
                case 'number':
                    gl = !0;
                    break;
                case 'object':
                    switch (r.$$typeof) {
                        case p:
                        case G:
                            gl = !0;
                            break;
                        case Q:
                            return (
                                (gl = r._init),
                                S(gl(r._payload), T, M, U, W)
                            );
                    }
            }
        if (gl)
            return (
                (W = W(r)),
                (gl = U === '' ? '.' + N(r, 0) : U),
                ml(W)
                    ? ((M = ''),
                      gl != null && (M = gl.replace(Pl, '$&/') + '/'),
                      S(W, T, M, '', function (Oa) {
                          return Oa;
                      }))
                    : W != null &&
                      (Ll(W) &&
                          (W = $l(
                              W,
                              M +
                                  (W.key == null || (r && r.key === W.key)
                                      ? ''
                                      : ('' + W.key).replace(Pl, '$&/') + '/') +
                                  gl,
                          )),
                      T.push(W)),
                1
            );
        gl = 0;
        var Fl = U === '' ? '.' : U + ':';
        if (ml(r))
            for (var Cl = 0; Cl < r.length; Cl++)
                ((U = r[Cl]), (tl = Fl + N(U, Cl)), (gl += S(U, T, M, tl, W)));
        else if (((Cl = fl(r)), typeof Cl == 'function'))
            for (r = Cl.call(r), Cl = 0; !(U = r.next()).done; )
                ((U = U.value),
                    (tl = Fl + N(U, Cl++)),
                    (gl += S(U, T, M, tl, W)));
        else if (tl === 'object') {
            if (typeof r.then == 'function') return S(vl(r), T, M, U, W);
            throw (
                (T = String(r)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (T === '[object Object]'
                            ? 'object with keys {' +
                              Object.keys(r).join(', ') +
                              '}'
                            : T) +
                        '). If you meant to render a collection of children, use an array instead.',
                )
            );
        }
        return gl;
    }
    function E(r, T, M) {
        if (r == null) return r;
        var U = [],
            W = 0;
        return (
            S(r, U, '', '', function (tl) {
                return T.call(M, tl, W++);
            }),
            U
        );
    }
    function Y(r) {
        if (r._status === -1) {
            var T = r._result;
            ((T = T()),
                T.then(
                    function (M) {
                        (r._status === 0 || r._status === -1) &&
                            ((r._status = 1), (r._result = M));
                    },
                    function (M) {
                        (r._status === 0 || r._status === -1) &&
                            ((r._status = 2), (r._result = M));
                    },
                ),
                r._status === -1 && ((r._status = 0), (r._result = T)));
        }
        if (r._status === 1) return r._result.default;
        throw r._result;
    }
    var j =
            typeof reportError == 'function'
                ? reportError
                : function (r) {
                      if (
                          typeof window == 'object' &&
                          typeof window.ErrorEvent == 'function'
                      ) {
                          var T = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof r == 'object' &&
                                  r !== null &&
                                  typeof r.message == 'string'
                                      ? String(r.message)
                                      : String(r),
                              error: r,
                          });
                          if (!window.dispatchEvent(T)) return;
                      } else if (
                          typeof process == 'object' &&
                          typeof process.emit == 'function'
                      ) {
                          process.emit('uncaughtException', r);
                          return;
                      }
                      console.error(r);
                  },
        V = {
            map: E,
            forEach: function (r, T, M) {
                E(
                    r,
                    function () {
                        T.apply(this, arguments);
                    },
                    M,
                );
            },
            count: function (r) {
                var T = 0;
                return (
                    E(r, function () {
                        T++;
                    }),
                    T
                );
            },
            toArray: function (r) {
                return (
                    E(r, function (T) {
                        return T;
                    }) || []
                );
            },
            only: function (r) {
                if (!Ll(r))
                    throw Error(
                        'React.Children.only expected to receive a single React element child.',
                    );
                return r;
            },
        };
    return (
        (k.Activity = D),
        (k.Children = V),
        (k.Component = ll),
        (k.Fragment = X),
        (k.Profiler = _),
        (k.PureComponent = J),
        (k.StrictMode = h),
        (k.Suspense = O),
        (k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
        (k.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (r) {
                return K.H.useMemoCache(r);
            },
        }),
        (k.cache = function (r) {
            return function () {
                return r.apply(null, arguments);
            };
        }),
        (k.cacheSignal = function () {
            return null;
        }),
        (k.cloneElement = function (r, T, M) {
            if (r == null)
                throw Error(
                    'The argument must be a React element, but you passed ' +
                        r +
                        '.',
                );
            var U = P({}, r.props),
                W = r.key;
            if (T != null)
                for (tl in (T.key !== void 0 && (W = '' + T.key), T))
                    !Sl.call(T, tl) ||
                        tl === 'key' ||
                        tl === '__self' ||
                        tl === '__source' ||
                        (tl === 'ref' && T.ref === void 0) ||
                        (U[tl] = T[tl]);
            var tl = arguments.length - 2;
            if (tl === 1) U.children = M;
            else if (1 < tl) {
                for (var gl = Array(tl), Fl = 0; Fl < tl; Fl++)
                    gl[Fl] = arguments[Fl + 2];
                U.children = gl;
            }
            return Bl(r.type, W, U);
        }),
        (k.createContext = function (r) {
            return (
                (r = {
                    $$typeof: Z,
                    _currentValue: r,
                    _currentValue2: r,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (r.Provider = r),
                (r.Consumer = {$$typeof: q, _context: r}),
                r
            );
        }),
        (k.createElement = function (r, T, M) {
            var U,
                W = {},
                tl = null;
            if (T != null)
                for (U in (T.key !== void 0 && (tl = '' + T.key), T))
                    Sl.call(T, U) &&
                        U !== 'key' &&
                        U !== '__self' &&
                        U !== '__source' &&
                        (W[U] = T[U]);
            var gl = arguments.length - 2;
            if (gl === 1) W.children = M;
            else if (1 < gl) {
                for (var Fl = Array(gl), Cl = 0; Cl < gl; Cl++)
                    Fl[Cl] = arguments[Cl + 2];
                W.children = Fl;
            }
            if (r && r.defaultProps)
                for (U in ((gl = r.defaultProps), gl))
                    W[U] === void 0 && (W[U] = gl[U]);
            return Bl(r, tl, W);
        }),
        (k.createRef = function () {
            return {current: null};
        }),
        (k.forwardRef = function (r) {
            return {$$typeof: dl, render: r};
        }),
        (k.isValidElement = Ll),
        (k.lazy = function (r) {
            return {$$typeof: Q, _payload: {_status: -1, _result: r}, _init: Y};
        }),
        (k.memo = function (r, T) {
            return {$$typeof: x, type: r, compare: T === void 0 ? null : T};
        }),
        (k.startTransition = function (r) {
            var T = K.T,
                M = {};
            K.T = M;
            try {
                var U = r(),
                    W = K.S;
                (W !== null && W(M, U),
                    typeof U == 'object' &&
                        U !== null &&
                        typeof U.then == 'function' &&
                        U.then(yl, j));
            } catch (tl) {
                j(tl);
            } finally {
                (T !== null && M.types !== null && (T.types = M.types),
                    (K.T = T));
            }
        }),
        (k.unstable_useCacheRefresh = function () {
            return K.H.useCacheRefresh();
        }),
        (k.use = function (r) {
            return K.H.use(r);
        }),
        (k.useActionState = function (r, T, M) {
            return K.H.useActionState(r, T, M);
        }),
        (k.useCallback = function (r, T) {
            return K.H.useCallback(r, T);
        }),
        (k.useContext = function (r) {
            return K.H.useContext(r);
        }),
        (k.useDebugValue = function () {}),
        (k.useDeferredValue = function (r, T) {
            return K.H.useDeferredValue(r, T);
        }),
        (k.useEffect = function (r, T) {
            return K.H.useEffect(r, T);
        }),
        (k.useEffectEvent = function (r) {
            return K.H.useEffectEvent(r);
        }),
        (k.useId = function () {
            return K.H.useId();
        }),
        (k.useImperativeHandle = function (r, T, M) {
            return K.H.useImperativeHandle(r, T, M);
        }),
        (k.useInsertionEffect = function (r, T) {
            return K.H.useInsertionEffect(r, T);
        }),
        (k.useLayoutEffect = function (r, T) {
            return K.H.useLayoutEffect(r, T);
        }),
        (k.useMemo = function (r, T) {
            return K.H.useMemo(r, T);
        }),
        (k.useOptimistic = function (r, T) {
            return K.H.useOptimistic(r, T);
        }),
        (k.useReducer = function (r, T, M) {
            return K.H.useReducer(r, T, M);
        }),
        (k.useRef = function (r) {
            return K.H.useRef(r);
        }),
        (k.useState = function (r) {
            return K.H.useState(r);
        }),
        (k.useSyncExternalStore = function (r, T, M) {
            return K.H.useSyncExternalStore(r, T, M);
        }),
        (k.useTransition = function () {
            return K.H.useTransition();
        }),
        (k.version = '19.2.8'),
        k
    );
}
var Sd;
function df() {
    return (Sd || ((Sd = 1), (cf.exports = F0())), cf.exports);
}
var $ = df();
const I0 = W0($);
var ff = {exports: {}},
    xu = {},
    sf = {exports: {}},
    rf = {};
var pd;
function P0() {
    return (
        pd ||
            ((pd = 1),
            (function (p) {
                function G(S, E) {
                    var Y = S.length;
                    S.push(E);
                    l: for (; 0 < Y; ) {
                        var j = (Y - 1) >>> 1,
                            V = S[j];
                        if (0 < _(V, E)) ((S[j] = E), (S[Y] = V), (Y = j));
                        else break l;
                    }
                }
                function X(S) {
                    return S.length === 0 ? null : S[0];
                }
                function h(S) {
                    if (S.length === 0) return null;
                    var E = S[0],
                        Y = S.pop();
                    if (Y !== E) {
                        S[0] = Y;
                        l: for (var j = 0, V = S.length, r = V >>> 1; j < r; ) {
                            var T = 2 * (j + 1) - 1,
                                M = S[T],
                                U = T + 1,
                                W = S[U];
                            if (0 > _(M, Y))
                                U < V && 0 > _(W, M)
                                    ? ((S[j] = W), (S[U] = Y), (j = U))
                                    : ((S[j] = M), (S[T] = Y), (j = T));
                            else if (U < V && 0 > _(W, Y))
                                ((S[j] = W), (S[U] = Y), (j = U));
                            else break l;
                        }
                    }
                    return E;
                }
                function _(S, E) {
                    var Y = S.sortIndex - E.sortIndex;
                    return Y !== 0 ? Y : S.id - E.id;
                }
                if (
                    ((p.unstable_now = void 0),
                    typeof performance == 'object' &&
                        typeof performance.now == 'function')
                ) {
                    var q = performance;
                    p.unstable_now = function () {
                        return q.now();
                    };
                } else {
                    var Z = Date,
                        dl = Z.now();
                    p.unstable_now = function () {
                        return Z.now() - dl;
                    };
                }
                var O = [],
                    x = [],
                    Q = 1,
                    D = null,
                    w = 3,
                    fl = !1,
                    sl = !1,
                    P = !1,
                    xl = !1,
                    ll = typeof setTimeout == 'function' ? setTimeout : null,
                    ul =
                        typeof clearTimeout == 'function' ? clearTimeout : null,
                    J = typeof setImmediate < 'u' ? setImmediate : null;
                function B(S) {
                    for (var E = X(x); E !== null; ) {
                        if (E.callback === null) h(x);
                        else if (E.startTime <= S)
                            (h(x), (E.sortIndex = E.expirationTime), G(O, E));
                        else break;
                        E = X(x);
                    }
                }
                function ml(S) {
                    if (((P = !1), B(S), !sl))
                        if (X(O) !== null) ((sl = !0), yl || ((yl = !0), Ml()));
                        else {
                            var E = X(x);
                            E !== null && vl(ml, E.startTime - S);
                        }
                }
                var yl = !1,
                    K = -1,
                    Sl = 5,
                    Bl = -1;
                function $l() {
                    return xl ? !0 : !(p.unstable_now() - Bl < Sl);
                }
                function Ll() {
                    if (((xl = !1), yl)) {
                        var S = p.unstable_now();
                        Bl = S;
                        var E = !0;
                        try {
                            l: {
                                ((sl = !1),
                                    P && ((P = !1), ul(K), (K = -1)),
                                    (fl = !0));
                                var Y = w;
                                try {
                                    t: {
                                        for (
                                            B(S), D = X(O);
                                            D !== null &&
                                            !(D.expirationTime > S && $l());
                                        ) {
                                            var j = D.callback;
                                            if (typeof j == 'function') {
                                                ((D.callback = null),
                                                    (w = D.priorityLevel));
                                                var V = j(
                                                    D.expirationTime <= S,
                                                );
                                                if (
                                                    ((S = p.unstable_now()),
                                                    typeof V == 'function')
                                                ) {
                                                    ((D.callback = V),
                                                        B(S),
                                                        (E = !0));
                                                    break t;
                                                }
                                                (D === X(O) && h(O), B(S));
                                            } else h(O);
                                            D = X(O);
                                        }
                                        if (D !== null) E = !0;
                                        else {
                                            var r = X(x);
                                            (r !== null &&
                                                vl(ml, r.startTime - S),
                                                (E = !1));
                                        }
                                    }
                                    break l;
                                } finally {
                                    ((D = null), (w = Y), (fl = !1));
                                }
                                E = void 0;
                            }
                        } finally {
                            E ? Ml() : (yl = !1);
                        }
                    }
                }
                var Ml;
                if (typeof J == 'function')
                    Ml = function () {
                        J(Ll);
                    };
                else if (typeof MessageChannel < 'u') {
                    var Pl = new MessageChannel(),
                        N = Pl.port2;
                    ((Pl.port1.onmessage = Ll),
                        (Ml = function () {
                            N.postMessage(null);
                        }));
                } else
                    Ml = function () {
                        ll(Ll, 0);
                    };
                function vl(S, E) {
                    K = ll(function () {
                        S(p.unstable_now());
                    }, E);
                }
                ((p.unstable_IdlePriority = 5),
                    (p.unstable_ImmediatePriority = 1),
                    (p.unstable_LowPriority = 4),
                    (p.unstable_NormalPriority = 3),
                    (p.unstable_Profiling = null),
                    (p.unstable_UserBlockingPriority = 2),
                    (p.unstable_cancelCallback = function (S) {
                        S.callback = null;
                    }),
                    (p.unstable_forceFrameRate = function (S) {
                        0 > S || 125 < S
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                              )
                            : (Sl = 0 < S ? Math.floor(1e3 / S) : 5);
                    }),
                    (p.unstable_getCurrentPriorityLevel = function () {
                        return w;
                    }),
                    (p.unstable_next = function (S) {
                        switch (w) {
                            case 1:
                            case 2:
                            case 3:
                                var E = 3;
                                break;
                            default:
                                E = w;
                        }
                        var Y = w;
                        w = E;
                        try {
                            return S();
                        } finally {
                            w = Y;
                        }
                    }),
                    (p.unstable_requestPaint = function () {
                        xl = !0;
                    }),
                    (p.unstable_runWithPriority = function (S, E) {
                        switch (S) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                S = 3;
                        }
                        var Y = w;
                        w = S;
                        try {
                            return E();
                        } finally {
                            w = Y;
                        }
                    }),
                    (p.unstable_scheduleCallback = function (S, E, Y) {
                        var j = p.unstable_now();
                        switch (
                            (typeof Y == 'object' && Y !== null
                                ? ((Y = Y.delay),
                                  (Y =
                                      typeof Y == 'number' && 0 < Y
                                          ? j + Y
                                          : j))
                                : (Y = j),
                            S)
                        ) {
                            case 1:
                                var V = -1;
                                break;
                            case 2:
                                V = 250;
                                break;
                            case 5:
                                V = 1073741823;
                                break;
                            case 4:
                                V = 1e4;
                                break;
                            default:
                                V = 5e3;
                        }
                        return (
                            (V = Y + V),
                            (S = {
                                id: Q++,
                                callback: E,
                                priorityLevel: S,
                                startTime: Y,
                                expirationTime: V,
                                sortIndex: -1,
                            }),
                            Y > j
                                ? ((S.sortIndex = Y),
                                  G(x, S),
                                  X(O) === null &&
                                      S === X(x) &&
                                      (P ? (ul(K), (K = -1)) : (P = !0),
                                      vl(ml, Y - j)))
                                : ((S.sortIndex = V),
                                  G(O, S),
                                  sl ||
                                      fl ||
                                      ((sl = !0), yl || ((yl = !0), Ml()))),
                            S
                        );
                    }),
                    (p.unstable_shouldYield = $l),
                    (p.unstable_wrapCallback = function (S) {
                        var E = w;
                        return function () {
                            var Y = w;
                            w = E;
                            try {
                                return S.apply(this, arguments);
                            } finally {
                                w = Y;
                            }
                        };
                    }));
            })(rf)),
        rf
    );
}
var bd;
function lm() {
    return (bd || ((bd = 1), (sf.exports = P0())), sf.exports);
}
var of = {exports: {}},
    kl = {};
var xd;
function tm() {
    if (xd) return kl;
    xd = 1;
    var p = df();
    function G(O) {
        var x = 'https://react.dev/errors/' + O;
        if (1 < arguments.length) {
            x += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var Q = 2; Q < arguments.length; Q++)
                x += '&args[]=' + encodeURIComponent(arguments[Q]);
        }
        return (
            'Minified React error #' +
            O +
            '; visit ' +
            x +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function X() {}
    var h = {
            d: {
                f: X,
                r: function () {
                    throw Error(G(522));
                },
                D: X,
                C: X,
                L: X,
                m: X,
                X,
                S: X,
                M: X,
            },
            p: 0,
            findDOMNode: null,
        },
        _ = Symbol.for('react.portal');
    function q(O, x, Q) {
        var D =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: _,
            key: D == null ? null : '' + D,
            children: O,
            containerInfo: x,
            implementation: Q,
        };
    }
    var Z = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function dl(O, x) {
        if (O === 'font') return '';
        if (typeof x == 'string') return x === 'use-credentials' ? x : '';
    }
    return (
        (kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
        (kl.createPortal = function (O, x) {
            var Q =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (
                !x ||
                (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
            )
                throw Error(G(299));
            return q(O, x, null, Q);
        }),
        (kl.flushSync = function (O) {
            var x = Z.T,
                Q = h.p;
            try {
                if (((Z.T = null), (h.p = 2), O)) return O();
            } finally {
                ((Z.T = x), (h.p = Q), h.d.f());
            }
        }),
        (kl.preconnect = function (O, x) {
            typeof O == 'string' &&
                (x
                    ? ((x = x.crossOrigin),
                      (x =
                          typeof x == 'string'
                              ? x === 'use-credentials'
                                  ? x
                                  : ''
                              : void 0))
                    : (x = null),
                h.d.C(O, x));
        }),
        (kl.prefetchDNS = function (O) {
            typeof O == 'string' && h.d.D(O);
        }),
        (kl.preinit = function (O, x) {
            if (typeof O == 'string' && x && typeof x.as == 'string') {
                var Q = x.as,
                    D = dl(Q, x.crossOrigin),
                    w = typeof x.integrity == 'string' ? x.integrity : void 0,
                    fl =
                        typeof x.fetchPriority == 'string'
                            ? x.fetchPriority
                            : void 0;
                Q === 'style'
                    ? h.d.S(
                          O,
                          typeof x.precedence == 'string'
                              ? x.precedence
                              : void 0,
                          {crossOrigin: D, integrity: w, fetchPriority: fl},
                      )
                    : Q === 'script' &&
                      h.d.X(O, {
                          crossOrigin: D,
                          integrity: w,
                          fetchPriority: fl,
                          nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
                      });
            }
        }),
        (kl.preinitModule = function (O, x) {
            if (typeof O == 'string')
                if (typeof x == 'object' && x !== null) {
                    if (x.as == null || x.as === 'script') {
                        var Q = dl(x.as, x.crossOrigin);
                        h.d.M(O, {
                            crossOrigin: Q,
                            integrity:
                                typeof x.integrity == 'string'
                                    ? x.integrity
                                    : void 0,
                            nonce:
                                typeof x.nonce == 'string' ? x.nonce : void 0,
                        });
                    }
                } else x == null && h.d.M(O);
        }),
        (kl.preload = function (O, x) {
            if (
                typeof O == 'string' &&
                typeof x == 'object' &&
                x !== null &&
                typeof x.as == 'string'
            ) {
                var Q = x.as,
                    D = dl(Q, x.crossOrigin);
                h.d.L(O, Q, {
                    crossOrigin: D,
                    integrity:
                        typeof x.integrity == 'string' ? x.integrity : void 0,
                    nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
                    type: typeof x.type == 'string' ? x.type : void 0,
                    fetchPriority:
                        typeof x.fetchPriority == 'string'
                            ? x.fetchPriority
                            : void 0,
                    referrerPolicy:
                        typeof x.referrerPolicy == 'string'
                            ? x.referrerPolicy
                            : void 0,
                    imageSrcSet:
                        typeof x.imageSrcSet == 'string'
                            ? x.imageSrcSet
                            : void 0,
                    imageSizes:
                        typeof x.imageSizes == 'string' ? x.imageSizes : void 0,
                    media: typeof x.media == 'string' ? x.media : void 0,
                });
            }
        }),
        (kl.preloadModule = function (O, x) {
            if (typeof O == 'string')
                if (x) {
                    var Q = dl(x.as, x.crossOrigin);
                    h.d.m(O, {
                        as:
                            typeof x.as == 'string' && x.as !== 'script'
                                ? x.as
                                : void 0,
                        crossOrigin: Q,
                        integrity:
                            typeof x.integrity == 'string'
                                ? x.integrity
                                : void 0,
                    });
                } else h.d.m(O);
        }),
        (kl.requestFormReset = function (O) {
            h.d.r(O);
        }),
        (kl.unstable_batchedUpdates = function (O, x) {
            return O(x);
        }),
        (kl.useFormState = function (O, x, Q) {
            return Z.H.useFormState(O, x, Q);
        }),
        (kl.useFormStatus = function () {
            return Z.H.useHostTransitionStatus();
        }),
        (kl.version = '19.2.8'),
        kl
    );
}
var Td;
function em() {
    if (Td) return of.exports;
    Td = 1;
    function p() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
            } catch (G) {
                console.error(G);
            }
    }
    return (p(), (of.exports = tm()), of.exports);
}
var zd;
function am() {
    if (zd) return xu;
    zd = 1;
    var p = lm(),
        G = df(),
        X = em();
    function h(l) {
        var t = 'https://react.dev/errors/' + l;
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                t += '&args[]=' + encodeURIComponent(arguments[e]);
        }
        return (
            'Minified React error #' +
            l +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function _(l) {
        return !(
            !l ||
            (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
        );
    }
    function q(l) {
        var t = l,
            e = l;
        if (l.alternate) for (; t.return; ) t = t.return;
        else {
            l = t;
            do
                ((t = l),
                    (t.flags & 4098) !== 0 && (e = t.return),
                    (l = t.return));
            while (l);
        }
        return t.tag === 3 ? e : null;
    }
    function Z(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (
                (t === null &&
                    ((l = l.alternate), l !== null && (t = l.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function dl(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (
                (t === null &&
                    ((l = l.alternate), l !== null && (t = l.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function O(l) {
        if (q(l) !== l) throw Error(h(188));
    }
    function x(l) {
        var t = l.alternate;
        if (!t) {
            if (((t = q(l)), t === null)) throw Error(h(188));
            return t !== l ? null : l;
        }
        for (var e = l, a = t; ; ) {
            var u = e.return;
            if (u === null) break;
            var n = u.alternate;
            if (n === null) {
                if (((a = u.return), a !== null)) {
                    e = a;
                    continue;
                }
                break;
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === e) return (O(u), l);
                    if (n === a) return (O(u), t);
                    n = n.sibling;
                }
                throw Error(h(188));
            }
            if (e.return !== a.return) ((e = u), (a = n));
            else {
                for (var i = !1, c = u.child; c; ) {
                    if (c === e) {
                        ((i = !0), (e = u), (a = n));
                        break;
                    }
                    if (c === a) {
                        ((i = !0), (a = u), (e = n));
                        break;
                    }
                    c = c.sibling;
                }
                if (!i) {
                    for (c = n.child; c; ) {
                        if (c === e) {
                            ((i = !0), (e = n), (a = u));
                            break;
                        }
                        if (c === a) {
                            ((i = !0), (a = n), (e = u));
                            break;
                        }
                        c = c.sibling;
                    }
                    if (!i) throw Error(h(189));
                }
            }
            if (e.alternate !== a) throw Error(h(190));
        }
        if (e.tag !== 3) throw Error(h(188));
        return e.stateNode.current === e ? l : t;
    }
    function Q(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null; ) {
            if (((t = Q(l)), t !== null)) return t;
            l = l.sibling;
        }
        return null;
    }
    var D = Object.assign,
        w = Symbol.for('react.element'),
        fl = Symbol.for('react.transitional.element'),
        sl = Symbol.for('react.portal'),
        P = Symbol.for('react.fragment'),
        xl = Symbol.for('react.strict_mode'),
        ll = Symbol.for('react.profiler'),
        ul = Symbol.for('react.consumer'),
        J = Symbol.for('react.context'),
        B = Symbol.for('react.forward_ref'),
        ml = Symbol.for('react.suspense'),
        yl = Symbol.for('react.suspense_list'),
        K = Symbol.for('react.memo'),
        Sl = Symbol.for('react.lazy'),
        Bl = Symbol.for('react.activity'),
        $l = Symbol.for('react.memo_cache_sentinel'),
        Ll = Symbol.iterator;
    function Ml(l) {
        return l === null || typeof l != 'object'
            ? null
            : ((l = (Ll && l[Ll]) || l['@@iterator']),
              typeof l == 'function' ? l : null);
    }
    var Pl = Symbol.for('react.client.reference');
    function N(l) {
        if (l == null) return null;
        if (typeof l == 'function')
            return l.$$typeof === Pl ? null : l.displayName || l.name || null;
        if (typeof l == 'string') return l;
        switch (l) {
            case P:
                return 'Fragment';
            case ll:
                return 'Profiler';
            case xl:
                return 'StrictMode';
            case ml:
                return 'Suspense';
            case yl:
                return 'SuspenseList';
            case Bl:
                return 'Activity';
        }
        if (typeof l == 'object')
            switch (l.$$typeof) {
                case sl:
                    return 'Portal';
                case J:
                    return l.displayName || 'Context';
                case ul:
                    return (l._context.displayName || 'Context') + '.Consumer';
                case B:
                    var t = l.render;
                    return (
                        (l = l.displayName),
                        l ||
                            ((l = t.displayName || t.name || ''),
                            (l =
                                l !== ''
                                    ? 'ForwardRef(' + l + ')'
                                    : 'ForwardRef')),
                        l
                    );
                case K:
                    return (
                        (t = l.displayName || null),
                        t !== null ? t : N(l.type) || 'Memo'
                    );
                case Sl:
                    ((t = l._payload), (l = l._init));
                    try {
                        return N(l(t));
                    } catch {}
            }
        return null;
    }
    var vl = Array.isArray,
        S = G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        E = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Y = {pending: !1, data: null, method: null, action: null},
        j = [],
        V = -1;
    function r(l) {
        return {current: l};
    }
    function T(l) {
        0 > V || ((l.current = j[V]), (j[V] = null), V--);
    }
    function M(l, t) {
        (V++, (j[V] = l.current), (l.current = t));
    }
    var U = r(null),
        W = r(null),
        tl = r(null),
        gl = r(null);
    function Fl(l, t) {
        switch ((M(tl, t), M(W, l), M(U, null), t.nodeType)) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? Yo(l) : 0;
                break;
            default:
                if (((l = t.tagName), (t = t.namespaceURI)))
                    ((t = Yo(t)), (l = Go(t, l)));
                else
                    switch (l) {
                        case 'svg':
                            l = 1;
                            break;
                        case 'math':
                            l = 2;
                            break;
                        default:
                            l = 0;
                    }
        }
        (T(U), M(U, l));
    }
    function Cl() {
        (T(U), T(W), T(tl));
    }
    function Oa(l) {
        l.memoizedState !== null && M(gl, l);
        var t = U.current,
            e = Go(t, l.type);
        t !== e && (M(W, l), M(U, e));
    }
    function Tu(l) {
        (W.current === l && (T(U), T(W)),
            gl.current === l && (T(gl), (vu._currentValue = Y)));
    }
    var Qn, hf;
    function ze(l) {
        if (Qn === void 0)
            try {
                throw Error();
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                ((Qn = (t && t[1]) || ''),
                    (hf =
                        -1 <
                        e.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < e.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : ''));
            }
        return (
            `
` +
            Qn +
            l +
            hf
        );
    }
    var Xn = !1;
    function Zn(l, t) {
        if (!l || Xn) return '';
        Xn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var A = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(A.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(A, []);
                                } catch (g) {
                                    var v = g;
                                }
                                Reflect.construct(l, [], A);
                            } else {
                                try {
                                    A.call();
                                } catch (g) {
                                    v = g;
                                }
                                l.call(A.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (g) {
                                v = g;
                            }
                            (A = l()) &&
                                typeof A.catch == 'function' &&
                                A.catch(function () {});
                        }
                    } catch (g) {
                        if (g && v && typeof g.stack == 'string')
                            return [g.stack, v.stack];
                    }
                    return [null, null];
                },
            };
            a.DetermineComponentFrameRoot.displayName =
                'DetermineComponentFrameRoot';
            var u = Object.getOwnPropertyDescriptor(
                a.DetermineComponentFrameRoot,
                'name',
            );
            u &&
                u.configurable &&
                Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
                    value: 'DetermineComponentFrameRoot',
                });
            var n = a.DetermineComponentFrameRoot(),
                i = n[0],
                c = n[1];
            if (i && c) {
                var s = i.split(`
`),
                    y = c.split(`
`);
                for (
                    u = a = 0;
                    a < s.length &&
                    !s[a].includes('DetermineComponentFrameRoot');
                )
                    a++;
                for (
                    ;
                    u < y.length &&
                    !y[u].includes('DetermineComponentFrameRoot');
                )
                    u++;
                if (a === s.length || u === y.length)
                    for (
                        a = s.length - 1, u = y.length - 1;
                        1 <= a && 0 <= u && s[a] !== y[u];
                    )
                        u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (s[a] !== y[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if ((a--, u--, 0 > u || s[a] !== y[u])) {
                                    var b =
                                        `
` + s[a].replace(' at new ', ' at ');
                                    return (
                                        l.displayName &&
                                            b.includes('<anonymous>') &&
                                            (b = b.replace(
                                                '<anonymous>',
                                                l.displayName,
                                            )),
                                        b
                                    );
                                }
                            while (1 <= a && 0 <= u);
                        break;
                    }
            }
        } finally {
            ((Xn = !1), (Error.prepareStackTrace = e));
        }
        return (e = l ? l.displayName || l.name : '') ? ze(e) : '';
    }
    function Ed(l, t) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return ze(l.type);
            case 16:
                return ze('Lazy');
            case 13:
                return l.child !== t && t !== null
                    ? ze('Suspense Fallback')
                    : ze('Suspense');
            case 19:
                return ze('SuspenseList');
            case 0:
            case 15:
                return Zn(l.type, !1);
            case 11:
                return Zn(l.type.render, !1);
            case 1:
                return Zn(l.type, !0);
            case 31:
                return ze('Activity');
            default:
                return '';
        }
    }
    function mf(l) {
        try {
            var t = '',
                e = null;
            do ((t += Ed(l, e)), (e = l), (l = l.return));
            while (l);
            return t;
        } catch (a) {
            return (
                `
Error generating stack: ` +
                a.message +
                `
` +
                a.stack
            );
        }
    }
    var Vn = Object.prototype.hasOwnProperty,
        Kn = p.unstable_scheduleCallback,
        wn = p.unstable_cancelCallback,
        jd = p.unstable_shouldYield,
        Od = p.unstable_requestPaint,
        ct = p.unstable_now,
        Nd = p.unstable_getCurrentPriorityLevel,
        yf = p.unstable_ImmediatePriority,
        vf = p.unstable_UserBlockingPriority,
        zu = p.unstable_NormalPriority,
        Md = p.unstable_LowPriority,
        gf = p.unstable_IdlePriority,
        _d = p.log,
        Dd = p.unstable_setDisableYieldValue,
        Na = null,
        ft = null;
    function It(l) {
        if (
            (typeof _d == 'function' && Dd(l),
            ft && typeof ft.setStrictMode == 'function')
        )
            try {
                ft.setStrictMode(Na, l);
            } catch {}
    }
    var st = Math.clz32 ? Math.clz32 : Hd,
        Cd = Math.log,
        Ud = Math.LN2;
    function Hd(l) {
        return ((l >>>= 0), l === 0 ? 32 : (31 - ((Cd(l) / Ud) | 0)) | 0);
    }
    var Au = 256,
        Eu = 262144,
        ju = 4194304;
    function Ae(l) {
        var t = l & 42;
        if (t !== 0) return t;
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
                return l & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return l & 3932160;
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
    function Ou(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0) return 0;
        var u = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var c = a & 134217727;
        return (
            c !== 0
                ? ((a = c & ~n),
                  a !== 0
                      ? (u = Ae(a))
                      : ((i &= c),
                        i !== 0
                            ? (u = Ae(i))
                            : e || ((e = c & ~l), e !== 0 && (u = Ae(e)))))
                : ((c = a & ~n),
                  c !== 0
                      ? (u = Ae(c))
                      : i !== 0
                        ? (u = Ae(i))
                        : e || ((e = a & ~l), e !== 0 && (u = Ae(e)))),
            u === 0
                ? 0
                : t !== 0 &&
                    t !== u &&
                    (t & n) === 0 &&
                    ((n = u & -u),
                    (e = t & -t),
                    n >= e || (n === 32 && (e & 4194048) !== 0))
                  ? t
                  : u
        );
    }
    function Ma(l, t) {
        return (
            (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
        );
    }
    function Bd(l, t) {
        switch (l) {
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
                return -1;
        }
    }
    function Sf() {
        var l = ju;
        return ((ju <<= 1), (ju & 62914560) === 0 && (ju = 4194304), l);
    }
    function Jn(l) {
        for (var t = [], e = 0; 31 > e; e++) t.push(l);
        return t;
    }
    function _a(l, t) {
        ((l.pendingLanes |= t),
            t !== 268435456 &&
                ((l.suspendedLanes = 0),
                (l.pingedLanes = 0),
                (l.warmLanes = 0)));
    }
    function Rd(l, t, e, a, u, n) {
        var i = l.pendingLanes;
        ((l.pendingLanes = e),
            (l.suspendedLanes = 0),
            (l.pingedLanes = 0),
            (l.warmLanes = 0),
            (l.expiredLanes &= e),
            (l.entangledLanes &= e),
            (l.errorRecoveryDisabledLanes &= e),
            (l.shellSuspendCounter = 0));
        var c = l.entanglements,
            s = l.expirationTimes,
            y = l.hiddenUpdates;
        for (e = i & ~e; 0 < e; ) {
            var b = 31 - st(e),
                A = 1 << b;
            ((c[b] = 0), (s[b] = -1));
            var v = y[b];
            if (v !== null)
                for (y[b] = null, b = 0; b < v.length; b++) {
                    var g = v[b];
                    g !== null && (g.lane &= -536870913);
                }
            e &= ~A;
        }
        (a !== 0 && pf(l, a, 0),
            n !== 0 &&
                u === 0 &&
                l.tag !== 0 &&
                (l.suspendedLanes |= n & ~(i & ~t)));
    }
    function pf(l, t, e) {
        ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
        var a = 31 - st(t);
        ((l.entangledLanes |= t),
            (l.entanglements[a] =
                l.entanglements[a] | 1073741824 | (e & 261930)));
    }
    function bf(l, t) {
        var e = (l.entangledLanes |= t);
        for (l = l.entanglements; e; ) {
            var a = 31 - st(e),
                u = 1 << a;
            ((u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u));
        }
    }
    function xf(l, t) {
        var e = t & -t;
        return (
            (e = (e & 42) !== 0 ? 1 : Wn(e)),
            (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
        );
    }
    function Wn(l) {
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
    function kn(l) {
        return (
            (l &= -l),
            2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
        );
    }
    function Tf() {
        var l = E.p;
        return l !== 0
            ? l
            : ((l = window.event), l === void 0 ? 32 : fd(l.type));
    }
    function zf(l, t) {
        var e = E.p;
        try {
            return ((E.p = l), t());
        } finally {
            E.p = e;
        }
    }
    var Pt = Math.random().toString(36).slice(2),
        Vl = '__reactFiber$' + Pt,
        lt = '__reactProps$' + Pt,
        Ze = '__reactContainer$' + Pt,
        $n = '__reactEvents$' + Pt,
        qd = '__reactListeners$' + Pt,
        Yd = '__reactHandles$' + Pt,
        Af = '__reactResources$' + Pt,
        Da = '__reactMarker$' + Pt;
    function Fn(l) {
        (delete l[Vl], delete l[lt], delete l[$n], delete l[qd], delete l[Yd]);
    }
    function Ve(l) {
        var t = l[Vl];
        if (t) return t;
        for (var e = l.parentNode; e; ) {
            if ((t = e[Ze] || e[Vl])) {
                if (
                    ((e = t.alternate),
                    t.child !== null || (e !== null && e.child !== null))
                )
                    for (l = wo(l); l !== null; ) {
                        if ((e = l[Vl])) return e;
                        l = wo(l);
                    }
                return t;
            }
            ((l = e), (e = l.parentNode));
        }
        return null;
    }
    function Ke(l) {
        if ((l = l[Vl] || l[Ze])) {
            var t = l.tag;
            if (
                t === 5 ||
                t === 6 ||
                t === 13 ||
                t === 31 ||
                t === 26 ||
                t === 27 ||
                t === 3
            )
                return l;
        }
        return null;
    }
    function Ca(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(h(33));
    }
    function we(l) {
        var t = l[Af];
        return (
            t ||
                (t = l[Af] =
                    {hoistableStyles: new Map(), hoistableScripts: new Map()}),
            t
        );
    }
    function Xl(l) {
        l[Da] = !0;
    }
    var Ef = new Set(),
        jf = {};
    function Ee(l, t) {
        (Je(l, t), Je(l + 'Capture', t));
    }
    function Je(l, t) {
        for (jf[l] = t, l = 0; l < t.length; l++) Ef.add(t[l]);
    }
    var Gd = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
        ),
        Of = {},
        Nf = {};
    function Ld(l) {
        return Vn.call(Nf, l)
            ? !0
            : Vn.call(Of, l)
              ? !1
              : Gd.test(l)
                ? (Nf[l] = !0)
                : ((Of[l] = !0), !1);
    }
    function Nu(l, t, e) {
        if (Ld(t))
            if (e === null) l.removeAttribute(t);
            else {
                switch (typeof e) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        l.removeAttribute(t);
                        return;
                    case 'boolean':
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== 'data-' && a !== 'aria-') {
                            l.removeAttribute(t);
                            return;
                        }
                }
                l.setAttribute(t, '' + e);
            }
    }
    function Mu(l, t, e) {
        if (e === null) l.removeAttribute(t);
        else {
            switch (typeof e) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    l.removeAttribute(t);
                    return;
            }
            l.setAttribute(t, '' + e);
        }
    }
    function Ht(l, t, e, a) {
        if (a === null) l.removeAttribute(e);
        else {
            switch (typeof a) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    l.removeAttribute(e);
                    return;
            }
            l.setAttributeNS(t, e, '' + a);
        }
    }
    function gt(l) {
        switch (typeof l) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return l;
            case 'object':
                return l;
            default:
                return '';
        }
    }
    function Mf(l) {
        var t = l.type;
        return (
            (l = l.nodeName) &&
            l.toLowerCase() === 'input' &&
            (t === 'checkbox' || t === 'radio')
        );
    }
    function Qd(l, t, e) {
        var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (
            !l.hasOwnProperty(t) &&
            typeof a < 'u' &&
            typeof a.get == 'function' &&
            typeof a.set == 'function'
        ) {
            var u = a.get,
                n = a.set;
            return (
                Object.defineProperty(l, t, {
                    configurable: !0,
                    get: function () {
                        return u.call(this);
                    },
                    set: function (i) {
                        ((e = '' + i), n.call(this, i));
                    },
                }),
                Object.defineProperty(l, t, {enumerable: a.enumerable}),
                {
                    getValue: function () {
                        return e;
                    },
                    setValue: function (i) {
                        e = '' + i;
                    },
                    stopTracking: function () {
                        ((l._valueTracker = null), delete l[t]);
                    },
                }
            );
        }
    }
    function In(l) {
        if (!l._valueTracker) {
            var t = Mf(l) ? 'checked' : 'value';
            l._valueTracker = Qd(l, t, '' + l[t]);
        }
    }
    function _f(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var e = t.getValue(),
            a = '';
        return (
            l && (a = Mf(l) ? (l.checked ? 'true' : 'false') : l.value),
            (l = a),
            l !== e ? (t.setValue(l), !0) : !1
        );
    }
    function _u(l) {
        if (
            ((l = l || (typeof document < 'u' ? document : void 0)),
            typeof l > 'u')
        )
            return null;
        try {
            return l.activeElement || l.body;
        } catch {
            return l.body;
        }
    }
    var Xd = /[\n"\\]/g;
    function St(l) {
        return l.replace(Xd, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' ';
        });
    }
    function Pn(l, t, e, a, u, n, i, c) {
        ((l.name = ''),
            i != null &&
            typeof i != 'function' &&
            typeof i != 'symbol' &&
            typeof i != 'boolean'
                ? (l.type = i)
                : l.removeAttribute('type'),
            t != null
                ? i === 'number'
                    ? ((t === 0 && l.value === '') || l.value != t) &&
                      (l.value = '' + gt(t))
                    : l.value !== '' + gt(t) && (l.value = '' + gt(t))
                : (i !== 'submit' && i !== 'reset') ||
                  l.removeAttribute('value'),
            t != null
                ? li(l, i, gt(t))
                : e != null
                  ? li(l, i, gt(e))
                  : a != null && l.removeAttribute('value'),
            u == null && n != null && (l.defaultChecked = !!n),
            u != null &&
                (l.checked =
                    u && typeof u != 'function' && typeof u != 'symbol'),
            c != null &&
            typeof c != 'function' &&
            typeof c != 'symbol' &&
            typeof c != 'boolean'
                ? (l.name = '' + gt(c))
                : l.removeAttribute('name'));
    }
    function Df(l, t, e, a, u, n, i, c) {
        if (
            (n != null &&
                typeof n != 'function' &&
                typeof n != 'symbol' &&
                typeof n != 'boolean' &&
                (l.type = n),
            t != null || e != null)
        ) {
            if (!((n !== 'submit' && n !== 'reset') || t != null)) {
                In(l);
                return;
            }
            ((e = e != null ? '' + gt(e) : ''),
                (t = t != null ? '' + gt(t) : e),
                c || t === l.value || (l.value = t),
                (l.defaultValue = t));
        }
        ((a = a ?? u),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (l.checked = c ? l.checked : !!a),
            (l.defaultChecked = !!a),
            i != null &&
                typeof i != 'function' &&
                typeof i != 'symbol' &&
                typeof i != 'boolean' &&
                (l.name = i),
            In(l));
    }
    function li(l, t, e) {
        (t === 'number' && _u(l.ownerDocument) === l) ||
            l.defaultValue === '' + e ||
            (l.defaultValue = '' + e);
    }
    function We(l, t, e, a) {
        if (((l = l.options), t)) {
            t = {};
            for (var u = 0; u < e.length; u++) t['$' + e[u]] = !0;
            for (e = 0; e < l.length; e++)
                ((u = t.hasOwnProperty('$' + l[e].value)),
                    l[e].selected !== u && (l[e].selected = u),
                    u && a && (l[e].defaultSelected = !0));
        } else {
            for (e = '' + gt(e), t = null, u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    ((l[u].selected = !0), a && (l[u].defaultSelected = !0));
                    return;
                }
                t !== null || l[u].disabled || (t = l[u]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Cf(l, t, e) {
        if (
            t != null &&
            ((t = '' + gt(t)), t !== l.value && (l.value = t), e == null)
        ) {
            l.defaultValue !== t && (l.defaultValue = t);
            return;
        }
        l.defaultValue = e != null ? '' + gt(e) : '';
    }
    function Uf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null) throw Error(h(92));
                if (vl(a)) {
                    if (1 < a.length) throw Error(h(93));
                    a = a[0];
                }
                e = a;
            }
            (e == null && (e = ''), (t = e));
        }
        ((e = gt(t)),
            (l.defaultValue = e),
            (a = l.textContent),
            a === e && a !== '' && a !== null && (l.value = a),
            In(l));
    }
    function ke(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return;
            }
        }
        l.textContent = t;
    }
    var Zd = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
        ),
    );
    function Hf(l, t, e) {
        var a = t.indexOf('--') === 0;
        e == null || typeof e == 'boolean' || e === ''
            ? a
                ? l.setProperty(t, '')
                : t === 'float'
                  ? (l.cssFloat = '')
                  : (l[t] = '')
            : a
              ? l.setProperty(t, e)
              : typeof e != 'number' || e === 0 || Zd.has(t)
                ? t === 'float'
                    ? (l.cssFloat = e)
                    : (l[t] = ('' + e).trim())
                : (l[t] = e + 'px');
    }
    function Bf(l, t, e) {
        if (t != null && typeof t != 'object') throw Error(h(62));
        if (((l = l.style), e != null)) {
            for (var a in e)
                !e.hasOwnProperty(a) ||
                    (t != null && t.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0
                        ? l.setProperty(a, '')
                        : a === 'float'
                          ? (l.cssFloat = '')
                          : (l[a] = ''));
            for (var u in t)
                ((a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Hf(l, u, a));
        } else for (var n in t) t.hasOwnProperty(n) && Hf(l, n, t[n]);
    }
    function ti(l) {
        if (l.indexOf('-') === -1) return !1;
        switch (l) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1;
            default:
                return !0;
        }
    }
    var Vd = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        Kd =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Du(l) {
        return Kd.test('' + l)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : l;
    }
    function Bt() {}
    var ei = null;
    function ai(l) {
        return (
            (l = l.target || l.srcElement || window),
            l.correspondingUseElement && (l = l.correspondingUseElement),
            l.nodeType === 3 ? l.parentNode : l
        );
    }
    var $e = null,
        Fe = null;
    function Rf(l) {
        var t = Ke(l);
        if (t && (l = t.stateNode)) {
            var e = l[lt] || null;
            l: switch (((l = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (Pn(
                            l,
                            e.value,
                            e.defaultValue,
                            e.defaultValue,
                            e.checked,
                            e.defaultChecked,
                            e.type,
                            e.name,
                        ),
                        (t = e.name),
                        e.type === 'radio' && t != null)
                    ) {
                        for (e = l; e.parentNode; ) e = e.parentNode;
                        for (
                            e = e.querySelectorAll(
                                'input[name="' +
                                    St('' + t) +
                                    '"][type="radio"]',
                            ),
                                t = 0;
                            t < e.length;
                            t++
                        ) {
                            var a = e[t];
                            if (a !== l && a.form === l.form) {
                                var u = a[lt] || null;
                                if (!u) throw Error(h(90));
                                Pn(
                                    a,
                                    u.value,
                                    u.defaultValue,
                                    u.defaultValue,
                                    u.checked,
                                    u.defaultChecked,
                                    u.type,
                                    u.name,
                                );
                            }
                        }
                        for (t = 0; t < e.length; t++)
                            ((a = e[t]), a.form === l.form && _f(a));
                    }
                    break l;
                case 'textarea':
                    Cf(l, e.value, e.defaultValue);
                    break l;
                case 'select':
                    ((t = e.value), t != null && We(l, !!e.multiple, t, !1));
            }
        }
    }
    var ui = !1;
    function qf(l, t, e) {
        if (ui) return l(t, e);
        ui = !0;
        try {
            var a = l(t);
            return a;
        } finally {
            if (
                ((ui = !1),
                ($e !== null || Fe !== null) &&
                    (pn(),
                    $e && ((t = $e), (l = Fe), (Fe = $e = null), Rf(t), l)))
            )
                for (t = 0; t < l.length; t++) Rf(l[t]);
        }
    }
    function Ua(l, t) {
        var e = l.stateNode;
        if (e === null) return null;
        var a = e[lt] || null;
        if (a === null) return null;
        e = a[t];
        l: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                ((a = !a.disabled) ||
                    ((l = l.type),
                    (a = !(
                        l === 'button' ||
                        l === 'input' ||
                        l === 'select' ||
                        l === 'textarea'
                    ))),
                    (l = !a));
                break l;
            default:
                l = !1;
        }
        if (l) return null;
        if (e && typeof e != 'function') throw Error(h(231, t, typeof e));
        return e;
    }
    var Rt = !(
            typeof window > 'u' ||
            typeof window.document > 'u' ||
            typeof window.document.createElement > 'u'
        ),
        ni = !1;
    if (Rt)
        try {
            var Ha = {};
            (Object.defineProperty(Ha, 'passive', {
                get: function () {
                    ni = !0;
                },
            }),
                window.addEventListener('test', Ha, Ha),
                window.removeEventListener('test', Ha, Ha));
        } catch {
            ni = !1;
        }
    var le = null,
        ii = null,
        Cu = null;
    function Yf() {
        if (Cu) return Cu;
        var l,
            t = ii,
            e = t.length,
            a,
            u = 'value' in le ? le.value : le.textContent,
            n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++);
        var i = e - l;
        for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
        return (Cu = u.slice(l, 1 < a ? 1 - a : void 0));
    }
    function Uu(l) {
        var t = l.keyCode;
        return (
            'charCode' in l
                ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
                : (l = t),
            l === 10 && (l = 13),
            32 <= l || l === 13 ? l : 0
        );
    }
    function Hu() {
        return !0;
    }
    function Gf() {
        return !1;
    }
    function tt(l) {
        function t(e, a, u, n, i) {
            ((this._reactName = e),
                (this._targetInst = u),
                (this.type = a),
                (this.nativeEvent = n),
                (this.target = i),
                (this.currentTarget = null));
            for (var c in l)
                l.hasOwnProperty(c) &&
                    ((e = l[c]), (this[c] = e ? e(n) : n[c]));
            return (
                (this.isDefaultPrevented = (
                    n.defaultPrevented != null
                        ? n.defaultPrevented
                        : n.returnValue === !1
                )
                    ? Hu
                    : Gf),
                (this.isPropagationStopped = Gf),
                this
            );
        }
        return (
            D(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e &&
                        (e.preventDefault
                            ? e.preventDefault()
                            : typeof e.returnValue != 'unknown' &&
                              (e.returnValue = !1),
                        (this.isDefaultPrevented = Hu));
                },
                stopPropagation: function () {
                    var e = this.nativeEvent;
                    e &&
                        (e.stopPropagation
                            ? e.stopPropagation()
                            : typeof e.cancelBubble != 'unknown' &&
                              (e.cancelBubble = !0),
                        (this.isPropagationStopped = Hu));
                },
                persist: function () {},
                isPersistent: Hu,
            }),
            t
        );
    }
    var je = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (l) {
                return l.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Bu = tt(je),
        Ba = D({}, je, {view: 0, detail: 0}),
        wd = tt(Ba),
        ci,
        fi,
        Ra,
        Ru = D({}, Ba, {
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
            getModifierState: ri,
            button: 0,
            buttons: 0,
            relatedTarget: function (l) {
                return l.relatedTarget === void 0
                    ? l.fromElement === l.srcElement
                        ? l.toElement
                        : l.fromElement
                    : l.relatedTarget;
            },
            movementX: function (l) {
                return 'movementX' in l
                    ? l.movementX
                    : (l !== Ra &&
                          (Ra && l.type === 'mousemove'
                              ? ((ci = l.screenX - Ra.screenX),
                                (fi = l.screenY - Ra.screenY))
                              : (fi = ci = 0),
                          (Ra = l)),
                      ci);
            },
            movementY: function (l) {
                return 'movementY' in l ? l.movementY : fi;
            },
        }),
        Lf = tt(Ru),
        Jd = D({}, Ru, {dataTransfer: 0}),
        Wd = tt(Jd),
        kd = D({}, Ba, {relatedTarget: 0}),
        si = tt(kd),
        $d = D({}, je, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
        Fd = tt($d),
        Id = D({}, je, {
            clipboardData: function (l) {
                return 'clipboardData' in l
                    ? l.clipboardData
                    : window.clipboardData;
            },
        }),
        Pd = tt(Id),
        lh = D({}, je, {data: 0}),
        Qf = tt(lh),
        th = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        eh = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        ah = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
        };
    function uh(l) {
        var t = this.nativeEvent;
        return t.getModifierState
            ? t.getModifierState(l)
            : (l = ah[l])
              ? !!t[l]
              : !1;
    }
    function ri() {
        return uh;
    }
    var nh = D({}, Ba, {
            key: function (l) {
                if (l.key) {
                    var t = th[l.key] || l.key;
                    if (t !== 'Unidentified') return t;
                }
                return l.type === 'keypress'
                    ? ((l = Uu(l)), l === 13 ? 'Enter' : String.fromCharCode(l))
                    : l.type === 'keydown' || l.type === 'keyup'
                      ? eh[l.keyCode] || 'Unidentified'
                      : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ri,
            charCode: function (l) {
                return l.type === 'keypress' ? Uu(l) : 0;
            },
            keyCode: function (l) {
                return l.type === 'keydown' || l.type === 'keyup'
                    ? l.keyCode
                    : 0;
            },
            which: function (l) {
                return l.type === 'keypress'
                    ? Uu(l)
                    : l.type === 'keydown' || l.type === 'keyup'
                      ? l.keyCode
                      : 0;
            },
        }),
        ih = tt(nh),
        ch = D({}, Ru, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Xf = tt(ch),
        fh = D({}, Ba, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ri,
        }),
        sh = tt(fh),
        rh = D({}, je, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
        oh = tt(rh),
        dh = D({}, Ru, {
            deltaX: function (l) {
                return 'deltaX' in l
                    ? l.deltaX
                    : 'wheelDeltaX' in l
                      ? -l.wheelDeltaX
                      : 0;
            },
            deltaY: function (l) {
                return 'deltaY' in l
                    ? l.deltaY
                    : 'wheelDeltaY' in l
                      ? -l.wheelDeltaY
                      : 'wheelDelta' in l
                        ? -l.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        hh = tt(dh),
        mh = D({}, je, {newState: 0, oldState: 0}),
        yh = tt(mh),
        vh = [9, 13, 27, 32],
        oi = Rt && 'CompositionEvent' in window,
        qa = null;
    Rt && 'documentMode' in document && (qa = document.documentMode);
    var gh = Rt && 'TextEvent' in window && !qa,
        Zf = Rt && (!oi || (qa && 8 < qa && 11 >= qa)),
        Vf = ' ',
        Kf = !1;
    function wf(l, t) {
        switch (l) {
            case 'keyup':
                return vh.indexOf(t.keyCode) !== -1;
            case 'keydown':
                return t.keyCode !== 229;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0;
            default:
                return !1;
        }
    }
    function Jf(l) {
        return (
            (l = l.detail),
            typeof l == 'object' && 'data' in l ? l.data : null
        );
    }
    var Ie = !1;
    function Sh(l, t) {
        switch (l) {
            case 'compositionend':
                return Jf(t);
            case 'keypress':
                return t.which !== 32 ? null : ((Kf = !0), Vf);
            case 'textInput':
                return ((l = t.data), l === Vf && Kf ? null : l);
            default:
                return null;
        }
    }
    function ph(l, t) {
        if (Ie)
            return l === 'compositionend' || (!oi && wf(l, t))
                ? ((l = Yf()), (Cu = ii = le = null), (Ie = !1), l)
                : null;
        switch (l) {
            case 'paste':
                return null;
            case 'keypress':
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case 'compositionend':
                return Zf && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var bh = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
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
        week: !0,
    };
    function Wf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === 'input' ? !!bh[l.type] : t === 'textarea';
    }
    function kf(l, t, e, a) {
        ($e ? (Fe ? Fe.push(a) : (Fe = [a])) : ($e = a),
            (t = jn(t, 'onChange')),
            0 < t.length &&
                ((e = new Bu('onChange', 'change', null, e, a)),
                l.push({event: e, listeners: t})));
    }
    var Ya = null,
        Ga = null;
    function xh(l) {
        Co(l, 0);
    }
    function qu(l) {
        var t = Ca(l);
        if (_f(t)) return l;
    }
    function $f(l, t) {
        if (l === 'change') return t;
    }
    var Ff = !1;
    if (Rt) {
        var di;
        if (Rt) {
            var hi = 'oninput' in document;
            if (!hi) {
                var If = document.createElement('div');
                (If.setAttribute('oninput', 'return;'),
                    (hi = typeof If.oninput == 'function'));
            }
            di = hi;
        } else di = !1;
        Ff = di && (!document.documentMode || 9 < document.documentMode);
    }
    function Pf() {
        Ya && (Ya.detachEvent('onpropertychange', ls), (Ga = Ya = null));
    }
    function ls(l) {
        if (l.propertyName === 'value' && qu(Ga)) {
            var t = [];
            (kf(t, Ga, l, ai(l)), qf(xh, t));
        }
    }
    function Th(l, t, e) {
        l === 'focusin'
            ? (Pf(), (Ya = t), (Ga = e), Ya.attachEvent('onpropertychange', ls))
            : l === 'focusout' && Pf();
    }
    function zh(l) {
        if (l === 'selectionchange' || l === 'keyup' || l === 'keydown')
            return qu(Ga);
    }
    function Ah(l, t) {
        if (l === 'click') return qu(t);
    }
    function Eh(l, t) {
        if (l === 'input' || l === 'change') return qu(t);
    }
    function jh(l, t) {
        return (
            (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t)
        );
    }
    var rt = typeof Object.is == 'function' ? Object.is : jh;
    function La(l, t) {
        if (rt(l, t)) return !0;
        if (
            typeof l != 'object' ||
            l === null ||
            typeof t != 'object' ||
            t === null
        )
            return !1;
        var e = Object.keys(l),
            a = Object.keys(t);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Vn.call(t, u) || !rt(l[u], t[u])) return !1;
        }
        return !0;
    }
    function ts(l) {
        for (; l && l.firstChild; ) l = l.firstChild;
        return l;
    }
    function es(l, t) {
        var e = ts(l);
        l = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (((a = l + e.textContent.length), l <= t && a >= t))
                    return {node: e, offset: t - l};
                l = a;
            }
            l: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l;
                    }
                    e = e.parentNode;
                }
                e = void 0;
            }
            e = ts(e);
        }
    }
    function as(l, t) {
        return l && t
            ? l === t
                ? !0
                : l && l.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? as(l, t.parentNode)
                    : 'contains' in l
                      ? l.contains(t)
                      : l.compareDocumentPosition
                        ? !!(l.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function us(l) {
        l =
            l != null &&
            l.ownerDocument != null &&
            l.ownerDocument.defaultView != null
                ? l.ownerDocument.defaultView
                : window;
        for (var t = _u(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var e = typeof t.contentWindow.location.href == 'string';
            } catch {
                e = !1;
            }
            if (e) l = t.contentWindow;
            else break;
            t = _u(l.document);
        }
        return t;
    }
    function mi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' &&
                (l.type === 'text' ||
                    l.type === 'search' ||
                    l.type === 'tel' ||
                    l.type === 'url' ||
                    l.type === 'password')) ||
                t === 'textarea' ||
                l.contentEditable === 'true')
        );
    }
    var Oh = Rt && 'documentMode' in document && 11 >= document.documentMode,
        Pe = null,
        yi = null,
        Qa = null,
        vi = !1;
    function ns(l, t, e) {
        var a =
            e.window === e
                ? e.document
                : e.nodeType === 9
                  ? e
                  : e.ownerDocument;
        vi ||
            Pe == null ||
            Pe !== _u(a) ||
            ((a = Pe),
            'selectionStart' in a && mi(a)
                ? (a = {start: a.selectionStart, end: a.selectionEnd})
                : ((a = (
                      (a.ownerDocument && a.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (a = {
                      anchorNode: a.anchorNode,
                      anchorOffset: a.anchorOffset,
                      focusNode: a.focusNode,
                      focusOffset: a.focusOffset,
                  })),
            (Qa && La(Qa, a)) ||
                ((Qa = a),
                (a = jn(yi, 'onSelect')),
                0 < a.length &&
                    ((t = new Bu('onSelect', 'select', null, t, e)),
                    l.push({event: t, listeners: a}),
                    (t.target = Pe))));
    }
    function Oe(l, t) {
        var e = {};
        return (
            (e[l.toLowerCase()] = t.toLowerCase()),
            (e['Webkit' + l] = 'webkit' + t),
            (e['Moz' + l] = 'moz' + t),
            e
        );
    }
    var la = {
            animationend: Oe('Animation', 'AnimationEnd'),
            animationiteration: Oe('Animation', 'AnimationIteration'),
            animationstart: Oe('Animation', 'AnimationStart'),
            transitionrun: Oe('Transition', 'TransitionRun'),
            transitionstart: Oe('Transition', 'TransitionStart'),
            transitioncancel: Oe('Transition', 'TransitionCancel'),
            transitionend: Oe('Transition', 'TransitionEnd'),
        },
        gi = {},
        is = {};
    Rt &&
        ((is = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete la.animationend.animation,
            delete la.animationiteration.animation,
            delete la.animationstart.animation),
        'TransitionEvent' in window || delete la.transitionend.transition);
    function Ne(l) {
        if (gi[l]) return gi[l];
        if (!la[l]) return l;
        var t = la[l],
            e;
        for (e in t) if (t.hasOwnProperty(e) && e in is) return (gi[l] = t[e]);
        return l;
    }
    var cs = Ne('animationend'),
        fs = Ne('animationiteration'),
        ss = Ne('animationstart'),
        Nh = Ne('transitionrun'),
        Mh = Ne('transitionstart'),
        _h = Ne('transitioncancel'),
        rs = Ne('transitionend'),
        os = new Map(),
        Si =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' ',
            );
    Si.push('scrollEnd');
    function Ot(l, t) {
        (os.set(l, t), Ee(t, [l]));
    }
    var Yu =
            typeof reportError == 'function'
                ? reportError
                : function (l) {
                      if (
                          typeof window == 'object' &&
                          typeof window.ErrorEvent == 'function'
                      ) {
                          var t = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof l == 'object' &&
                                  l !== null &&
                                  typeof l.message == 'string'
                                      ? String(l.message)
                                      : String(l),
                              error: l,
                          });
                          if (!window.dispatchEvent(t)) return;
                      } else if (
                          typeof process == 'object' &&
                          typeof process.emit == 'function'
                      ) {
                          process.emit('uncaughtException', l);
                          return;
                      }
                      console.error(l);
                  },
        pt = [],
        ta = 0,
        pi = 0;
    function Gu() {
        for (var l = ta, t = (pi = ta = 0); t < l; ) {
            var e = pt[t];
            pt[t++] = null;
            var a = pt[t];
            pt[t++] = null;
            var u = pt[t];
            pt[t++] = null;
            var n = pt[t];
            if (((pt[t++] = null), a !== null && u !== null)) {
                var i = a.pending;
                (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
                    (a.pending = u));
            }
            n !== 0 && ds(e, u, n);
        }
    }
    function Lu(l, t, e, a) {
        ((pt[ta++] = l),
            (pt[ta++] = t),
            (pt[ta++] = e),
            (pt[ta++] = a),
            (pi |= a),
            (l.lanes |= a),
            (l = l.alternate),
            l !== null && (l.lanes |= a));
    }
    function bi(l, t, e, a) {
        return (Lu(l, t, e, a), Qu(l));
    }
    function Me(l, t) {
        return (Lu(l, null, null, t), Qu(l));
    }
    function ds(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null; )
            ((n.childLanes |= e),
                (a = n.alternate),
                a !== null && (a.childLanes |= e),
                n.tag === 22 &&
                    ((l = n.stateNode),
                    l === null || l._visibility & 1 || (u = !0)),
                (l = n),
                (n = n.return));
        return l.tag === 3
            ? ((n = l.stateNode),
              u &&
                  t !== null &&
                  ((u = 31 - st(e)),
                  (l = n.hiddenUpdates),
                  (a = l[u]),
                  a === null ? (l[u] = [t]) : a.push(t),
                  (t.lane = e | 536870912)),
              n)
            : null;
    }
    function Qu(l) {
        if (50 < su) throw ((su = 0), (Mc = null), Error(h(185)));
        for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
        return l.tag === 3 ? l.stateNode : null;
    }
    var ea = {};
    function Dh(l, t, e, a) {
        ((this.tag = l),
            (this.key = e),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
    }
    function ot(l, t, e, a) {
        return new Dh(l, t, e, a);
    }
    function xi(l) {
        return ((l = l.prototype), !(!l || !l.isReactComponent));
    }
    function qt(l, t) {
        var e = l.alternate;
        return (
            e === null
                ? ((e = ot(l.tag, t, l.key, l.mode)),
                  (e.elementType = l.elementType),
                  (e.type = l.type),
                  (e.stateNode = l.stateNode),
                  (e.alternate = l),
                  (l.alternate = e))
                : ((e.pendingProps = t),
                  (e.type = l.type),
                  (e.flags = 0),
                  (e.subtreeFlags = 0),
                  (e.deletions = null)),
            (e.flags = l.flags & 65011712),
            (e.childLanes = l.childLanes),
            (e.lanes = l.lanes),
            (e.child = l.child),
            (e.memoizedProps = l.memoizedProps),
            (e.memoizedState = l.memoizedState),
            (e.updateQueue = l.updateQueue),
            (t = l.dependencies),
            (e.dependencies =
                t === null
                    ? null
                    : {lanes: t.lanes, firstContext: t.firstContext}),
            (e.sibling = l.sibling),
            (e.index = l.index),
            (e.ref = l.ref),
            (e.refCleanup = l.refCleanup),
            e
        );
    }
    function hs(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return (
            e === null
                ? ((l.childLanes = 0),
                  (l.lanes = t),
                  (l.child = null),
                  (l.subtreeFlags = 0),
                  (l.memoizedProps = null),
                  (l.memoizedState = null),
                  (l.updateQueue = null),
                  (l.dependencies = null),
                  (l.stateNode = null))
                : ((l.childLanes = e.childLanes),
                  (l.lanes = e.lanes),
                  (l.child = e.child),
                  (l.subtreeFlags = 0),
                  (l.deletions = null),
                  (l.memoizedProps = e.memoizedProps),
                  (l.memoizedState = e.memoizedState),
                  (l.updateQueue = e.updateQueue),
                  (l.type = e.type),
                  (t = e.dependencies),
                  (l.dependencies =
                      t === null
                          ? null
                          : {lanes: t.lanes, firstContext: t.firstContext})),
            l
        );
    }
    function Xu(l, t, e, a, u, n) {
        var i = 0;
        if (((a = l), typeof l == 'function')) xi(l) && (i = 1);
        else if (typeof l == 'string')
            i = R0(l, e, U.current)
                ? 26
                : l === 'html' || l === 'head' || l === 'body'
                  ? 27
                  : 5;
        else
            l: switch (l) {
                case Bl:
                    return (
                        (l = ot(31, e, t, u)),
                        (l.elementType = Bl),
                        (l.lanes = n),
                        l
                    );
                case P:
                    return _e(e.children, u, n, t);
                case xl:
                    ((i = 8), (u |= 24));
                    break;
                case ll:
                    return (
                        (l = ot(12, e, t, u | 2)),
                        (l.elementType = ll),
                        (l.lanes = n),
                        l
                    );
                case ml:
                    return (
                        (l = ot(13, e, t, u)),
                        (l.elementType = ml),
                        (l.lanes = n),
                        l
                    );
                case yl:
                    return (
                        (l = ot(19, e, t, u)),
                        (l.elementType = yl),
                        (l.lanes = n),
                        l
                    );
                default:
                    if (typeof l == 'object' && l !== null)
                        switch (l.$$typeof) {
                            case J:
                                i = 10;
                                break l;
                            case ul:
                                i = 9;
                                break l;
                            case B:
                                i = 11;
                                break l;
                            case K:
                                i = 14;
                                break l;
                            case Sl:
                                ((i = 16), (a = null));
                                break l;
                        }
                    ((i = 29),
                        (e = Error(h(130, l === null ? 'null' : typeof l, ''))),
                        (a = null));
            }
        return (
            (t = ot(i, e, t, u)),
            (t.elementType = l),
            (t.type = a),
            (t.lanes = n),
            t
        );
    }
    function _e(l, t, e, a) {
        return ((l = ot(7, l, a, t)), (l.lanes = e), l);
    }
    function Ti(l, t, e) {
        return ((l = ot(6, l, null, t)), (l.lanes = e), l);
    }
    function ms(l) {
        var t = ot(18, null, null, 0);
        return ((t.stateNode = l), t);
    }
    function zi(l, t, e) {
        return (
            (t = ot(4, l.children !== null ? l.children : [], l.key, t)),
            (t.lanes = e),
            (t.stateNode = {
                containerInfo: l.containerInfo,
                pendingChildren: null,
                implementation: l.implementation,
            }),
            t
        );
    }
    var ys = new WeakMap();
    function bt(l, t) {
        if (typeof l == 'object' && l !== null) {
            var e = ys.get(l);
            return e !== void 0
                ? e
                : ((t = {value: l, source: t, stack: mf(t)}), ys.set(l, t), t);
        }
        return {value: l, source: t, stack: mf(t)};
    }
    var aa = [],
        ua = 0,
        Zu = null,
        Xa = 0,
        xt = [],
        Tt = 0,
        te = null,
        _t = 1,
        Dt = '';
    function Yt(l, t) {
        ((aa[ua++] = Xa), (aa[ua++] = Zu), (Zu = l), (Xa = t));
    }
    function vs(l, t, e) {
        ((xt[Tt++] = _t), (xt[Tt++] = Dt), (xt[Tt++] = te), (te = l));
        var a = _t;
        l = Dt;
        var u = 32 - st(a) - 1;
        ((a &= ~(1 << u)), (e += 1));
        var n = 32 - st(t) + u;
        if (30 < n) {
            var i = u - (u % 5);
            ((n = (a & ((1 << i) - 1)).toString(32)),
                (a >>= i),
                (u -= i),
                (_t = (1 << (32 - st(t) + u)) | (e << u) | a),
                (Dt = n + l));
        } else ((_t = (1 << n) | (e << u) | a), (Dt = l));
    }
    function Ai(l) {
        l.return !== null && (Yt(l, 1), vs(l, 1, 0));
    }
    function Ei(l) {
        for (; l === Zu; )
            ((Zu = aa[--ua]),
                (aa[ua] = null),
                (Xa = aa[--ua]),
                (aa[ua] = null));
        for (; l === te; )
            ((te = xt[--Tt]),
                (xt[Tt] = null),
                (Dt = xt[--Tt]),
                (xt[Tt] = null),
                (_t = xt[--Tt]),
                (xt[Tt] = null));
    }
    function gs(l, t) {
        ((xt[Tt++] = _t),
            (xt[Tt++] = Dt),
            (xt[Tt++] = te),
            (_t = t.id),
            (Dt = t.overflow),
            (te = l));
    }
    var Kl = null,
        jl = null,
        cl = !1,
        ee = null,
        zt = !1,
        ji = Error(h(519));
    function ae(l) {
        var t = Error(
            h(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                    ? 'text'
                    : 'HTML',
                '',
            ),
        );
        throw (Za(bt(t, l)), ji);
    }
    function Ss(l) {
        var t = l.stateNode,
            e = l.type,
            a = l.memoizedProps;
        switch (((t[Vl] = l), (t[lt] = a), e)) {
            case 'dialog':
                (al('cancel', t), al('close', t));
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                al('load', t);
                break;
            case 'video':
            case 'audio':
                for (e = 0; e < ou.length; e++) al(ou[e], t);
                break;
            case 'source':
                al('error', t);
                break;
            case 'img':
            case 'image':
            case 'link':
                (al('error', t), al('load', t));
                break;
            case 'details':
                al('toggle', t);
                break;
            case 'input':
                (al('invalid', t),
                    Df(
                        t,
                        a.value,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                        !0,
                    ));
                break;
            case 'select':
                al('invalid', t);
                break;
            case 'textarea':
                (al('invalid', t), Uf(t, a.value, a.defaultValue, a.children));
        }
        ((e = a.children),
            (typeof e != 'string' &&
                typeof e != 'number' &&
                typeof e != 'bigint') ||
            t.textContent === '' + e ||
            a.suppressHydrationWarning === !0 ||
            Ro(t.textContent, e)
                ? (a.popover != null &&
                      (al('beforetoggle', t), al('toggle', t)),
                  a.onScroll != null && al('scroll', t),
                  a.onScrollEnd != null && al('scrollend', t),
                  a.onClick != null && (t.onclick = Bt),
                  (t = !0))
                : (t = !1),
            t || ae(l, !0));
    }
    function ps(l) {
        for (Kl = l.return; Kl; )
            switch (Kl.tag) {
                case 5:
                case 31:
                case 13:
                    zt = !1;
                    return;
                case 27:
                case 3:
                    zt = !0;
                    return;
                default:
                    Kl = Kl.return;
            }
    }
    function na(l) {
        if (l !== Kl) return !1;
        if (!cl) return (ps(l), (cl = !0), !1);
        var t = l.tag,
            e;
        if (
            ((e = t !== 3 && t !== 27) &&
                ((e = t === 5) &&
                    ((e = l.type),
                    (e =
                        !(e !== 'form' && e !== 'button') ||
                        Vc(l.type, l.memoizedProps))),
                (e = !e)),
            e && jl && ae(l),
            ps(l),
            t === 13)
        ) {
            if (
                ((l = l.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
            )
                throw Error(h(317));
            jl = Ko(l);
        } else if (t === 31) {
            if (
                ((l = l.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
            )
                throw Error(h(317));
            jl = Ko(l);
        } else
            t === 27
                ? ((t = jl),
                  ge(l.type) ? ((l = kc), (kc = null), (jl = l)) : (jl = t))
                : (jl = Kl ? Et(l.stateNode.nextSibling) : null);
        return !0;
    }
    function De() {
        ((jl = Kl = null), (cl = !1));
    }
    function Oi() {
        var l = ee;
        return (
            l !== null &&
                (nt === null ? (nt = l) : nt.push.apply(nt, l), (ee = null)),
            l
        );
    }
    function Za(l) {
        ee === null ? (ee = [l]) : ee.push(l);
    }
    var Ni = r(null),
        Ce = null,
        Gt = null;
    function ue(l, t, e) {
        (M(Ni, t._currentValue), (t._currentValue = e));
    }
    function Lt(l) {
        ((l._currentValue = Ni.current), T(Ni));
    }
    function Mi(l, t, e) {
        for (; l !== null; ) {
            var a = l.alternate;
            if (
                ((l.childLanes & t) !== t
                    ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
                    : a !== null &&
                      (a.childLanes & t) !== t &&
                      (a.childLanes |= t),
                l === e)
            )
                break;
            l = l.return;
        }
    }
    function _i(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var i = u.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var c = n;
                    n = u;
                    for (var s = 0; s < t.length; s++)
                        if (c.context === t[s]) {
                            ((n.lanes |= e),
                                (c = n.alternate),
                                c !== null && (c.lanes |= e),
                                Mi(n.return, e, l),
                                a || (i = null));
                            break l;
                        }
                    n = c.next;
                }
            } else if (u.tag === 18) {
                if (((i = u.return), i === null)) throw Error(h(341));
                ((i.lanes |= e),
                    (n = i.alternate),
                    n !== null && (n.lanes |= e),
                    Mi(i, e, l),
                    (i = null));
            } else i = u.child;
            if (i !== null) i.return = u;
            else
                for (i = u; i !== null; ) {
                    if (i === l) {
                        i = null;
                        break;
                    }
                    if (((u = i.sibling), u !== null)) {
                        ((u.return = i.return), (i = u));
                        break;
                    }
                    i = i.return;
                }
            u = i;
        }
    }
    function ia(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0) n = !0;
                else if ((u.flags & 262144) !== 0) break;
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null) throw Error(h(387));
                if (((i = i.memoizedProps), i !== null)) {
                    var c = u.type;
                    rt(u.pendingProps.value, i.value) ||
                        (l !== null ? l.push(c) : (l = [c]));
                }
            } else if (u === gl.current) {
                if (((i = u.alternate), i === null)) throw Error(h(387));
                i.memoizedState.memoizedState !==
                    u.memoizedState.memoizedState &&
                    (l !== null ? l.push(vu) : (l = [vu]));
            }
            u = u.return;
        }
        (l !== null && _i(t, l, e, a), (t.flags |= 262144));
    }
    function Vu(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!rt(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next;
        }
        return !1;
    }
    function Ue(l) {
        ((Ce = l),
            (Gt = null),
            (l = l.dependencies),
            l !== null && (l.firstContext = null));
    }
    function wl(l) {
        return bs(Ce, l);
    }
    function Ku(l, t) {
        return (Ce === null && Ue(l), bs(l, t));
    }
    function bs(l, t) {
        var e = t._currentValue;
        if (((t = {context: t, memoizedValue: e, next: null}), Gt === null)) {
            if (l === null) throw Error(h(308));
            ((Gt = t),
                (l.dependencies = {lanes: 0, firstContext: t}),
                (l.flags |= 524288));
        } else Gt = Gt.next = t;
        return e;
    }
    var Ch =
            typeof AbortController < 'u'
                ? AbortController
                : function () {
                      var l = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (e, a) {
                                  l.push(a);
                              },
                          });
                      this.abort = function () {
                          ((t.aborted = !0),
                              l.forEach(function (e) {
                                  return e();
                              }));
                      };
                  },
        Uh = p.unstable_scheduleCallback,
        Hh = p.unstable_NormalPriority,
        Rl = {
            $$typeof: J,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function Di() {
        return {controller: new Ch(), data: new Map(), refCount: 0};
    }
    function Va(l) {
        (l.refCount--,
            l.refCount === 0 &&
                Uh(Hh, function () {
                    l.controller.abort();
                }));
    }
    var Ka = null,
        Ci = 0,
        ca = 0,
        fa = null;
    function Bh(l, t) {
        if (Ka === null) {
            var e = (Ka = []);
            ((Ci = 0),
                (ca = Bc()),
                (fa = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        e.push(a);
                    },
                }));
        }
        return (Ci++, t.then(xs, xs), t);
    }
    function xs() {
        if (--Ci === 0 && Ka !== null) {
            fa !== null && (fa.status = 'fulfilled');
            var l = Ka;
            ((Ka = null), (ca = 0), (fa = null));
            for (var t = 0; t < l.length; t++) (0, l[t])();
        }
    }
    function Rh(l, t) {
        var e = [],
            a = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (u) {
                    e.push(u);
                },
            };
        return (
            l.then(
                function () {
                    ((a.status = 'fulfilled'), (a.value = t));
                    for (var u = 0; u < e.length; u++) (0, e[u])(t);
                },
                function (u) {
                    for (
                        a.status = 'rejected', a.reason = u, u = 0;
                        u < e.length;
                        u++
                    )
                        (0, e[u])(void 0);
                },
            ),
            a
        );
    }
    var Ts = S.S;
    S.S = function (l, t) {
        ((no = ct()),
            typeof t == 'object' &&
                t !== null &&
                typeof t.then == 'function' &&
                Bh(l, t),
            Ts !== null && Ts(l, t));
    };
    var He = r(null);
    function Ui() {
        var l = He.current;
        return l !== null ? l : El.pooledCache;
    }
    function wu(l, t) {
        t === null ? M(He, He.current) : M(He, t.pool);
    }
    function zs() {
        var l = Ui();
        return l === null ? null : {parent: Rl._currentValue, pool: l};
    }
    var sa = Error(h(460)),
        Hi = Error(h(474)),
        Ju = Error(h(542)),
        Wu = {then: function () {}};
    function As(l) {
        return ((l = l.status), l === 'fulfilled' || l === 'rejected');
    }
    function Es(l, t, e) {
        switch (
            ((e = l[e]),
            e === void 0 ? l.push(t) : e !== t && (t.then(Bt, Bt), (t = e)),
            t.status)
        ) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw ((l = t.reason), Os(l), l);
            default:
                if (typeof t.status == 'string') t.then(Bt, Bt);
                else {
                    if (((l = El), l !== null && 100 < l.shellSuspendCounter))
                        throw Error(h(482));
                    ((l = t),
                        (l.status = 'pending'),
                        l.then(
                            function (a) {
                                if (t.status === 'pending') {
                                    var u = t;
                                    ((u.status = 'fulfilled'), (u.value = a));
                                }
                            },
                            function (a) {
                                if (t.status === 'pending') {
                                    var u = t;
                                    ((u.status = 'rejected'), (u.reason = a));
                                }
                            },
                        ));
                }
                switch (t.status) {
                    case 'fulfilled':
                        return t.value;
                    case 'rejected':
                        throw ((l = t.reason), Os(l), l);
                }
                throw ((Re = t), sa);
        }
    }
    function Be(l) {
        try {
            var t = l._init;
            return t(l._payload);
        } catch (e) {
            throw e !== null &&
                typeof e == 'object' &&
                typeof e.then == 'function'
                ? ((Re = e), sa)
                : e;
        }
    }
    var Re = null;
    function js() {
        if (Re === null) throw Error(h(459));
        var l = Re;
        return ((Re = null), l);
    }
    function Os(l) {
        if (l === sa || l === Ju) throw Error(h(483));
    }
    var ra = null,
        wa = 0;
    function ku(l) {
        var t = wa;
        return ((wa += 1), ra === null && (ra = []), Es(ra, l, t));
    }
    function Ja(l, t) {
        ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
    }
    function $u(l, t) {
        throw t.$$typeof === w
            ? Error(h(525))
            : ((l = Object.prototype.toString.call(t)),
              Error(
                  h(
                      31,
                      l === '[object Object]'
                          ? 'object with keys {' +
                                Object.keys(t).join(', ') +
                                '}'
                          : l,
                  ),
              ));
    }
    function Ns(l) {
        function t(d, o) {
            if (l) {
                var m = d.deletions;
                m === null ? ((d.deletions = [o]), (d.flags |= 16)) : m.push(o);
            }
        }
        function e(d, o) {
            if (!l) return null;
            for (; o !== null; ) (t(d, o), (o = o.sibling));
            return null;
        }
        function a(d) {
            for (var o = new Map(); d !== null; )
                (d.key !== null ? o.set(d.key, d) : o.set(d.index, d),
                    (d = d.sibling));
            return o;
        }
        function u(d, o) {
            return ((d = qt(d, o)), (d.index = 0), (d.sibling = null), d);
        }
        function n(d, o, m) {
            return (
                (d.index = m),
                l
                    ? ((m = d.alternate),
                      m !== null
                          ? ((m = m.index),
                            m < o ? ((d.flags |= 67108866), o) : m)
                          : ((d.flags |= 67108866), o))
                    : ((d.flags |= 1048576), o)
            );
        }
        function i(d) {
            return (l && d.alternate === null && (d.flags |= 67108866), d);
        }
        function c(d, o, m, z) {
            return o === null || o.tag !== 6
                ? ((o = Ti(m, d.mode, z)), (o.return = d), o)
                : ((o = u(o, m)), (o.return = d), o);
        }
        function s(d, o, m, z) {
            var R = m.type;
            return R === P
                ? b(d, o, m.props.children, z, m.key)
                : o !== null &&
                    (o.elementType === R ||
                        (typeof R == 'object' &&
                            R !== null &&
                            R.$$typeof === Sl &&
                            Be(R) === o.type))
                  ? ((o = u(o, m.props)), Ja(o, m), (o.return = d), o)
                  : ((o = Xu(m.type, m.key, m.props, null, d.mode, z)),
                    Ja(o, m),
                    (o.return = d),
                    o);
        }
        function y(d, o, m, z) {
            return o === null ||
                o.tag !== 4 ||
                o.stateNode.containerInfo !== m.containerInfo ||
                o.stateNode.implementation !== m.implementation
                ? ((o = zi(m, d.mode, z)), (o.return = d), o)
                : ((o = u(o, m.children || [])), (o.return = d), o);
        }
        function b(d, o, m, z, R) {
            return o === null || o.tag !== 7
                ? ((o = _e(m, d.mode, z, R)), (o.return = d), o)
                : ((o = u(o, m)), (o.return = d), o);
        }
        function A(d, o, m) {
            if (
                (typeof o == 'string' && o !== '') ||
                typeof o == 'number' ||
                typeof o == 'bigint'
            )
                return ((o = Ti('' + o, d.mode, m)), (o.return = d), o);
            if (typeof o == 'object' && o !== null) {
                switch (o.$$typeof) {
                    case fl:
                        return (
                            (m = Xu(o.type, o.key, o.props, null, d.mode, m)),
                            Ja(m, o),
                            (m.return = d),
                            m
                        );
                    case sl:
                        return ((o = zi(o, d.mode, m)), (o.return = d), o);
                    case Sl:
                        return ((o = Be(o)), A(d, o, m));
                }
                if (vl(o) || Ml(o))
                    return ((o = _e(o, d.mode, m, null)), (o.return = d), o);
                if (typeof o.then == 'function') return A(d, ku(o), m);
                if (o.$$typeof === J) return A(d, Ku(d, o), m);
                $u(d, o);
            }
            return null;
        }
        function v(d, o, m, z) {
            var R = o !== null ? o.key : null;
            if (
                (typeof m == 'string' && m !== '') ||
                typeof m == 'number' ||
                typeof m == 'bigint'
            )
                return R !== null ? null : c(d, o, '' + m, z);
            if (typeof m == 'object' && m !== null) {
                switch (m.$$typeof) {
                    case fl:
                        return m.key === R ? s(d, o, m, z) : null;
                    case sl:
                        return m.key === R ? y(d, o, m, z) : null;
                    case Sl:
                        return ((m = Be(m)), v(d, o, m, z));
                }
                if (vl(m) || Ml(m))
                    return R !== null ? null : b(d, o, m, z, null);
                if (typeof m.then == 'function') return v(d, o, ku(m), z);
                if (m.$$typeof === J) return v(d, o, Ku(d, m), z);
                $u(d, m);
            }
            return null;
        }
        function g(d, o, m, z, R) {
            if (
                (typeof z == 'string' && z !== '') ||
                typeof z == 'number' ||
                typeof z == 'bigint'
            )
                return ((d = d.get(m) || null), c(o, d, '' + z, R));
            if (typeof z == 'object' && z !== null) {
                switch (z.$$typeof) {
                    case fl:
                        return (
                            (d = d.get(z.key === null ? m : z.key) || null),
                            s(o, d, z, R)
                        );
                    case sl:
                        return (
                            (d = d.get(z.key === null ? m : z.key) || null),
                            y(o, d, z, R)
                        );
                    case Sl:
                        return ((z = Be(z)), g(d, o, m, z, R));
                }
                if (vl(z) || Ml(z))
                    return ((d = d.get(m) || null), b(o, d, z, R, null));
                if (typeof z.then == 'function') return g(d, o, m, ku(z), R);
                if (z.$$typeof === J) return g(d, o, m, Ku(o, z), R);
                $u(o, z);
            }
            return null;
        }
        function C(d, o, m, z) {
            for (
                var R = null, rl = null, H = o, I = (o = 0), il = null;
                H !== null && I < m.length;
                I++
            ) {
                H.index > I ? ((il = H), (H = null)) : (il = H.sibling);
                var ol = v(d, H, m[I], z);
                if (ol === null) {
                    H === null && (H = il);
                    break;
                }
                (l && H && ol.alternate === null && t(d, H),
                    (o = n(ol, o, I)),
                    rl === null ? (R = ol) : (rl.sibling = ol),
                    (rl = ol),
                    (H = il));
            }
            if (I === m.length) return (e(d, H), cl && Yt(d, I), R);
            if (H === null) {
                for (; I < m.length; I++)
                    ((H = A(d, m[I], z)),
                        H !== null &&
                            ((o = n(H, o, I)),
                            rl === null ? (R = H) : (rl.sibling = H),
                            (rl = H)));
                return (cl && Yt(d, I), R);
            }
            for (H = a(H); I < m.length; I++)
                ((il = g(H, d, I, m[I], z)),
                    il !== null &&
                        (l &&
                            il.alternate !== null &&
                            H.delete(il.key === null ? I : il.key),
                        (o = n(il, o, I)),
                        rl === null ? (R = il) : (rl.sibling = il),
                        (rl = il)));
            return (
                l &&
                    H.forEach(function (Te) {
                        return t(d, Te);
                    }),
                cl && Yt(d, I),
                R
            );
        }
        function L(d, o, m, z) {
            if (m == null) throw Error(h(151));
            for (
                var R = null,
                    rl = null,
                    H = o,
                    I = (o = 0),
                    il = null,
                    ol = m.next();
                H !== null && !ol.done;
                I++, ol = m.next()
            ) {
                H.index > I ? ((il = H), (H = null)) : (il = H.sibling);
                var Te = v(d, H, ol.value, z);
                if (Te === null) {
                    H === null && (H = il);
                    break;
                }
                (l && H && Te.alternate === null && t(d, H),
                    (o = n(Te, o, I)),
                    rl === null ? (R = Te) : (rl.sibling = Te),
                    (rl = Te),
                    (H = il));
            }
            if (ol.done) return (e(d, H), cl && Yt(d, I), R);
            if (H === null) {
                for (; !ol.done; I++, ol = m.next())
                    ((ol = A(d, ol.value, z)),
                        ol !== null &&
                            ((o = n(ol, o, I)),
                            rl === null ? (R = ol) : (rl.sibling = ol),
                            (rl = ol)));
                return (cl && Yt(d, I), R);
            }
            for (H = a(H); !ol.done; I++, ol = m.next())
                ((ol = g(H, d, I, ol.value, z)),
                    ol !== null &&
                        (l &&
                            ol.alternate !== null &&
                            H.delete(ol.key === null ? I : ol.key),
                        (o = n(ol, o, I)),
                        rl === null ? (R = ol) : (rl.sibling = ol),
                        (rl = ol)));
            return (
                l &&
                    H.forEach(function (J0) {
                        return t(d, J0);
                    }),
                cl && Yt(d, I),
                R
            );
        }
        function Al(d, o, m, z) {
            if (
                (typeof m == 'object' &&
                    m !== null &&
                    m.type === P &&
                    m.key === null &&
                    (m = m.props.children),
                typeof m == 'object' && m !== null)
            ) {
                switch (m.$$typeof) {
                    case fl:
                        l: {
                            for (var R = m.key; o !== null; ) {
                                if (o.key === R) {
                                    if (((R = m.type), R === P)) {
                                        if (o.tag === 7) {
                                            (e(d, o.sibling),
                                                (z = u(o, m.props.children)),
                                                (z.return = d),
                                                (d = z));
                                            break l;
                                        }
                                    } else if (
                                        o.elementType === R ||
                                        (typeof R == 'object' &&
                                            R !== null &&
                                            R.$$typeof === Sl &&
                                            Be(R) === o.type)
                                    ) {
                                        (e(d, o.sibling),
                                            (z = u(o, m.props)),
                                            Ja(z, m),
                                            (z.return = d),
                                            (d = z));
                                        break l;
                                    }
                                    e(d, o);
                                    break;
                                } else t(d, o);
                                o = o.sibling;
                            }
                            m.type === P
                                ? ((z = _e(m.props.children, d.mode, z, m.key)),
                                  (z.return = d),
                                  (d = z))
                                : ((z = Xu(
                                      m.type,
                                      m.key,
                                      m.props,
                                      null,
                                      d.mode,
                                      z,
                                  )),
                                  Ja(z, m),
                                  (z.return = d),
                                  (d = z));
                        }
                        return i(d);
                    case sl:
                        l: {
                            for (R = m.key; o !== null; ) {
                                if (o.key === R)
                                    if (
                                        o.tag === 4 &&
                                        o.stateNode.containerInfo ===
                                            m.containerInfo &&
                                        o.stateNode.implementation ===
                                            m.implementation
                                    ) {
                                        (e(d, o.sibling),
                                            (z = u(o, m.children || [])),
                                            (z.return = d),
                                            (d = z));
                                        break l;
                                    } else {
                                        e(d, o);
                                        break;
                                    }
                                else t(d, o);
                                o = o.sibling;
                            }
                            ((z = zi(m, d.mode, z)), (z.return = d), (d = z));
                        }
                        return i(d);
                    case Sl:
                        return ((m = Be(m)), Al(d, o, m, z));
                }
                if (vl(m)) return C(d, o, m, z);
                if (Ml(m)) {
                    if (((R = Ml(m)), typeof R != 'function'))
                        throw Error(h(150));
                    return ((m = R.call(m)), L(d, o, m, z));
                }
                if (typeof m.then == 'function') return Al(d, o, ku(m), z);
                if (m.$$typeof === J) return Al(d, o, Ku(d, m), z);
                $u(d, m);
            }
            return (typeof m == 'string' && m !== '') ||
                typeof m == 'number' ||
                typeof m == 'bigint'
                ? ((m = '' + m),
                  o !== null && o.tag === 6
                      ? (e(d, o.sibling),
                        (z = u(o, m)),
                        (z.return = d),
                        (d = z))
                      : (e(d, o),
                        (z = Ti(m, d.mode, z)),
                        (z.return = d),
                        (d = z)),
                  i(d))
                : e(d, o);
        }
        return function (d, o, m, z) {
            try {
                wa = 0;
                var R = Al(d, o, m, z);
                return ((ra = null), R);
            } catch (H) {
                if (H === sa || H === Ju) throw H;
                var rl = ot(29, H, null, d.mode);
                return ((rl.lanes = z), (rl.return = d), rl);
            }
        };
    }
    var qe = Ns(!0),
        Ms = Ns(!1),
        ne = !1;
    function Bi(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {pending: null, lanes: 0, hiddenCallbacks: null},
            callbacks: null,
        };
    }
    function Ri(l, t) {
        ((l = l.updateQueue),
            t.updateQueue === l &&
                (t.updateQueue = {
                    baseState: l.baseState,
                    firstBaseUpdate: l.firstBaseUpdate,
                    lastBaseUpdate: l.lastBaseUpdate,
                    shared: l.shared,
                    callbacks: null,
                }));
    }
    function ie(l) {
        return {lane: l, tag: 0, payload: null, callback: null, next: null};
    }
    function ce(l, t, e) {
        var a = l.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), (hl & 2) !== 0)) {
            var u = a.pending;
            return (
                u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
                (a.pending = t),
                (t = Qu(l)),
                ds(l, null, e),
                t
            );
        }
        return (Lu(l, a, t, e), Qu(l));
    }
    function Wa(l, t, e) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (e & 4194048) !== 0))
        ) {
            var a = t.lanes;
            ((a &= l.pendingLanes), (e |= a), (t.lanes = e), bf(l, e));
        }
    }
    function qi(l, t) {
        var e = l.updateQueue,
            a = l.alternate;
        if (a !== null && ((a = a.updateQueue), e === a)) {
            var u = null,
                n = null;
            if (((e = e.firstBaseUpdate), e !== null)) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null,
                    };
                    (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
                } while (e !== null);
                n === null ? (u = n = t) : (n = n.next = t);
            } else u = n = t;
            ((e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks,
            }),
                (l.updateQueue = e));
            return;
        }
        ((l = e.lastBaseUpdate),
            l === null ? (e.firstBaseUpdate = t) : (l.next = t),
            (e.lastBaseUpdate = t));
    }
    var Yi = !1;
    function ka() {
        if (Yi) {
            var l = fa;
            if (l !== null) throw l;
        }
    }
    function $a(l, t, e, a) {
        Yi = !1;
        var u = l.updateQueue;
        ne = !1;
        var n = u.firstBaseUpdate,
            i = u.lastBaseUpdate,
            c = u.shared.pending;
        if (c !== null) {
            u.shared.pending = null;
            var s = c,
                y = s.next;
            ((s.next = null), i === null ? (n = y) : (i.next = y), (i = s));
            var b = l.alternate;
            b !== null &&
                ((b = b.updateQueue),
                (c = b.lastBaseUpdate),
                c !== i &&
                    (c === null ? (b.firstBaseUpdate = y) : (c.next = y),
                    (b.lastBaseUpdate = s)));
        }
        if (n !== null) {
            var A = u.baseState;
            ((i = 0), (b = y = s = null), (c = n));
            do {
                var v = c.lane & -536870913,
                    g = v !== c.lane;
                if (g ? (nl & v) === v : (a & v) === v) {
                    (v !== 0 && v === ca && (Yi = !0),
                        b !== null &&
                            (b = b.next =
                                {
                                    lane: 0,
                                    tag: c.tag,
                                    payload: c.payload,
                                    callback: null,
                                    next: null,
                                }));
                    l: {
                        var C = l,
                            L = c;
                        v = t;
                        var Al = e;
                        switch (L.tag) {
                            case 1:
                                if (((C = L.payload), typeof C == 'function')) {
                                    A = C.call(Al, A, v);
                                    break l;
                                }
                                A = C;
                                break l;
                            case 3:
                                C.flags = (C.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((C = L.payload),
                                    (v =
                                        typeof C == 'function'
                                            ? C.call(Al, A, v)
                                            : C),
                                    v == null)
                                )
                                    break l;
                                A = D({}, A, v);
                                break l;
                            case 2:
                                ne = !0;
                        }
                    }
                    ((v = c.callback),
                        v !== null &&
                            ((l.flags |= 64),
                            g && (l.flags |= 8192),
                            (g = u.callbacks),
                            g === null ? (u.callbacks = [v]) : g.push(v)));
                } else
                    ((g = {
                        lane: v,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null,
                    }),
                        b === null ? ((y = b = g), (s = A)) : (b = b.next = g),
                        (i |= v));
                if (((c = c.next), c === null)) {
                    if (((c = u.shared.pending), c === null)) break;
                    ((g = c),
                        (c = g.next),
                        (g.next = null),
                        (u.lastBaseUpdate = g),
                        (u.shared.pending = null));
                }
            } while (!0);
            (b === null && (s = A),
                (u.baseState = s),
                (u.firstBaseUpdate = y),
                (u.lastBaseUpdate = b),
                n === null && (u.shared.lanes = 0),
                (de |= i),
                (l.lanes = i),
                (l.memoizedState = A));
        }
    }
    function _s(l, t) {
        if (typeof l != 'function') throw Error(h(191, l));
        l.call(t);
    }
    function Ds(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null, l = 0; l < e.length; l++) _s(e[l], t);
    }
    var oa = r(null),
        Fu = r(0);
    function Cs(l, t) {
        ((l = kt), M(Fu, l), M(oa, t), (kt = l | t.baseLanes));
    }
    function Gi() {
        (M(Fu, kt), M(oa, oa.current));
    }
    function Li() {
        ((kt = Fu.current), T(oa), T(Fu));
    }
    var dt = r(null),
        At = null;
    function fe(l) {
        var t = l.alternate;
        (M(Ul, Ul.current & 1),
            M(dt, l),
            At === null &&
                (t === null ||
                    oa.current !== null ||
                    t.memoizedState !== null) &&
                (At = l));
    }
    function Qi(l) {
        (M(Ul, Ul.current), M(dt, l), At === null && (At = l));
    }
    function Us(l) {
        l.tag === 22
            ? (M(Ul, Ul.current), M(dt, l), At === null && (At = l))
            : se();
    }
    function se() {
        (M(Ul, Ul.current), M(dt, dt.current));
    }
    function ht(l) {
        (T(dt), At === l && (At = null), T(Ul));
    }
    var Ul = r(0);
    function Iu(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (
                    e !== null &&
                    ((e = e.dehydrated), e === null || Jc(e) || Wc(e))
                )
                    return t;
            } else if (
                t.tag === 19 &&
                (t.memoizedProps.revealOrder === 'forwards' ||
                    t.memoizedProps.revealOrder === 'backwards' ||
                    t.memoizedProps.revealOrder ===
                        'unstable_legacy-backwards' ||
                    t.memoizedProps.revealOrder === 'together')
            ) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                ((t.child.return = t), (t = t.child));
                continue;
            }
            if (t === l) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l) return null;
                t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
    }
    var Qt = 0,
        F = null,
        Tl = null,
        ql = null,
        Pu = !1,
        da = !1,
        Ye = !1,
        ln = 0,
        Fa = 0,
        ha = null,
        qh = 0;
    function _l() {
        throw Error(h(321));
    }
    function Xi(l, t) {
        if (t === null) return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!rt(l[e], t[e])) return !1;
        return !0;
    }
    function Zi(l, t, e, a, u, n) {
        return (
            (Qt = n),
            (F = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (S.H = l === null || l.memoizedState === null ? vr : uc),
            (Ye = !1),
            (n = e(a, u)),
            (Ye = !1),
            da && (n = Bs(t, e, a, u)),
            Hs(l),
            n
        );
    }
    function Hs(l) {
        S.H = lu;
        var t = Tl !== null && Tl.next !== null;
        if (
            ((Qt = 0),
            (ql = Tl = F = null),
            (Pu = !1),
            (Fa = 0),
            (ha = null),
            t)
        )
            throw Error(h(300));
        l === null ||
            Yl ||
            ((l = l.dependencies), l !== null && Vu(l) && (Yl = !0));
    }
    function Bs(l, t, e, a) {
        F = l;
        var u = 0;
        do {
            if ((da && (ha = null), (Fa = 0), (da = !1), 25 <= u))
                throw Error(h(301));
            if (((u += 1), (ql = Tl = null), l.updateQueue != null)) {
                var n = l.updateQueue;
                ((n.lastEffect = null),
                    (n.events = null),
                    (n.stores = null),
                    n.memoCache != null && (n.memoCache.index = 0));
            }
            ((S.H = gr), (n = t(e, a)));
        } while (da);
        return n;
    }
    function Yh() {
        var l = S.H,
            t = l.useState()[0];
        return (
            (t = typeof t.then == 'function' ? Ia(t) : t),
            (l = l.useState()[0]),
            (Tl !== null ? Tl.memoizedState : null) !== l && (F.flags |= 1024),
            t
        );
    }
    function Vi() {
        var l = ln !== 0;
        return ((ln = 0), l);
    }
    function Ki(l, t, e) {
        ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e));
    }
    function wi(l) {
        if (Pu) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                (t !== null && (t.pending = null), (l = l.next));
            }
            Pu = !1;
        }
        ((Qt = 0), (ql = Tl = F = null), (da = !1), (Fa = ln = 0), (ha = null));
    }
    function Il() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            ql === null ? (F.memoizedState = ql = l) : (ql = ql.next = l),
            ql
        );
    }
    function Hl() {
        if (Tl === null) {
            var l = F.alternate;
            l = l !== null ? l.memoizedState : null;
        } else l = Tl.next;
        var t = ql === null ? F.memoizedState : ql.next;
        if (t !== null) ((ql = t), (Tl = l));
        else {
            if (l === null)
                throw F.alternate === null ? Error(h(467)) : Error(h(310));
            ((Tl = l),
                (l = {
                    memoizedState: Tl.memoizedState,
                    baseState: Tl.baseState,
                    baseQueue: Tl.baseQueue,
                    queue: Tl.queue,
                    next: null,
                }),
                ql === null ? (F.memoizedState = ql = l) : (ql = ql.next = l));
        }
        return ql;
    }
    function tn() {
        return {lastEffect: null, events: null, stores: null, memoCache: null};
    }
    function Ia(l) {
        var t = Fa;
        return (
            (Fa += 1),
            ha === null && (ha = []),
            (l = Es(ha, l, t)),
            (t = F),
            (ql === null ? t.memoizedState : ql.next) === null &&
                ((t = t.alternate),
                (S.H = t === null || t.memoizedState === null ? vr : uc)),
            l
        );
    }
    function en(l) {
        if (l !== null && typeof l == 'object') {
            if (typeof l.then == 'function') return Ia(l);
            if (l.$$typeof === J) return wl(l);
        }
        throw Error(h(438, String(l)));
    }
    function Ji(l) {
        var t = null,
            e = F.updateQueue;
        if ((e !== null && (t = e.memoCache), t == null)) {
            var a = F.alternate;
            a !== null &&
                ((a = a.updateQueue),
                a !== null &&
                    ((a = a.memoCache),
                    a != null &&
                        (t = {
                            data: a.data.map(function (u) {
                                return u.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (t == null && (t = {data: [], index: 0}),
            e === null && ((e = tn()), (F.updateQueue = e)),
            (e.memoCache = t),
            (e = t.data[t.index]),
            e === void 0)
        )
            for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = $l;
        return (t.index++, e);
    }
    function Xt(l, t) {
        return typeof t == 'function' ? t(l) : t;
    }
    function an(l) {
        var t = Hl();
        return Wi(t, Tl, l);
    }
    function Wi(l, t, e) {
        var a = l.queue;
        if (a === null) throw Error(h(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue,
            n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var i = u.next;
                ((u.next = n.next), (n.next = i));
            }
            ((t.baseQueue = u = n), (a.pending = null));
        }
        if (((n = l.baseState), u === null)) l.memoizedState = n;
        else {
            t = u.next;
            var c = (i = null),
                s = null,
                y = t,
                b = !1;
            do {
                var A = y.lane & -536870913;
                if (A !== y.lane ? (nl & A) === A : (Qt & A) === A) {
                    var v = y.revertLane;
                    if (v === 0)
                        (s !== null &&
                            (s = s.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: y.action,
                                    hasEagerState: y.hasEagerState,
                                    eagerState: y.eagerState,
                                    next: null,
                                }),
                            A === ca && (b = !0));
                    else if ((Qt & v) === v) {
                        ((y = y.next), v === ca && (b = !0));
                        continue;
                    } else
                        ((A = {
                            lane: 0,
                            revertLane: y.revertLane,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null,
                        }),
                            s === null
                                ? ((c = s = A), (i = n))
                                : (s = s.next = A),
                            (F.lanes |= v),
                            (de |= v));
                    ((A = y.action),
                        Ye && e(n, A),
                        (n = y.hasEagerState ? y.eagerState : e(n, A)));
                } else
                    ((v = {
                        lane: A,
                        revertLane: y.revertLane,
                        gesture: y.gesture,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null,
                    }),
                        s === null ? ((c = s = v), (i = n)) : (s = s.next = v),
                        (F.lanes |= A),
                        (de |= A));
                y = y.next;
            } while (y !== null && y !== t);
            if (
                (s === null ? (i = n) : (s.next = c),
                !rt(n, l.memoizedState) &&
                    ((Yl = !0), b && ((e = fa), e !== null)))
            )
                throw e;
            ((l.memoizedState = n),
                (l.baseState = i),
                (l.baseQueue = s),
                (a.lastRenderedState = n));
        }
        return (u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
    }
    function ki(l) {
        var t = Hl(),
            e = t.queue;
        if (e === null) throw Error(h(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch,
            u = e.pending,
            n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var i = (u = u.next);
            do ((n = l(n, i.action)), (i = i.next));
            while (i !== u);
            (rt(n, t.memoizedState) || (Yl = !0),
                (t.memoizedState = n),
                t.baseQueue === null && (t.baseState = n),
                (e.lastRenderedState = n));
        }
        return [n, a];
    }
    function Rs(l, t, e) {
        var a = F,
            u = Hl(),
            n = cl;
        if (n) {
            if (e === void 0) throw Error(h(407));
            e = e();
        } else e = t();
        var i = !rt((Tl || u).memoizedState, e);
        if (
            (i && ((u.memoizedState = e), (Yl = !0)),
            (u = u.queue),
            Ii(Gs.bind(null, a, u, l), [l]),
            u.getSnapshot !== t ||
                i ||
                (ql !== null && ql.memoizedState.tag & 1))
        ) {
            if (
                ((a.flags |= 2048),
                ma(9, {destroy: void 0}, Ys.bind(null, a, u, e, t), null),
                El === null)
            )
                throw Error(h(349));
            n || (Qt & 127) !== 0 || qs(a, t, e);
        }
        return e;
    }
    function qs(l, t, e) {
        ((l.flags |= 16384),
            (l = {getSnapshot: t, value: e}),
            (t = F.updateQueue),
            t === null
                ? ((t = tn()), (F.updateQueue = t), (t.stores = [l]))
                : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
    }
    function Ys(l, t, e, a) {
        ((t.value = e), (t.getSnapshot = a), Ls(t) && Qs(l));
    }
    function Gs(l, t, e) {
        return e(function () {
            Ls(t) && Qs(l);
        });
    }
    function Ls(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !rt(l, e);
        } catch {
            return !0;
        }
    }
    function Qs(l) {
        var t = Me(l, 2);
        t !== null && it(t, l, 2);
    }
    function $i(l) {
        var t = Il();
        if (typeof l == 'function') {
            var e = l;
            if (((l = e()), Ye)) {
                It(!0);
                try {
                    e();
                } finally {
                    It(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = l),
            (t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: l,
            }),
            t
        );
    }
    function Xs(l, t, e, a) {
        return ((l.baseState = e), Wi(l, Tl, typeof a == 'function' ? a : Xt));
    }
    function Gh(l, t, e, a, u) {
        if (cn(l)) throw Error(h(485));
        if (((l = t.action), l !== null)) {
            var n = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (i) {
                    n.listeners.push(i);
                },
            };
            (S.T !== null ? e(!0) : (n.isTransition = !1),
                a(n),
                (e = t.pending),
                e === null
                    ? ((n.next = t.pending = n), Zs(t, n))
                    : ((n.next = e.next), (t.pending = e.next = n)));
        }
    }
    function Zs(l, t) {
        var e = t.action,
            a = t.payload,
            u = l.state;
        if (t.isTransition) {
            var n = S.T,
                i = {};
            S.T = i;
            try {
                var c = e(u, a),
                    s = S.S;
                (s !== null && s(i, c), Vs(l, t, c));
            } catch (y) {
                Fi(l, t, y);
            } finally {
                (n !== null && i.types !== null && (n.types = i.types),
                    (S.T = n));
            }
        } else
            try {
                ((n = e(u, a)), Vs(l, t, n));
            } catch (y) {
                Fi(l, t, y);
            }
    }
    function Vs(l, t, e) {
        e !== null && typeof e == 'object' && typeof e.then == 'function'
            ? e.then(
                  function (a) {
                      Ks(l, t, a);
                  },
                  function (a) {
                      return Fi(l, t, a);
                  },
              )
            : Ks(l, t, e);
    }
    function Ks(l, t, e) {
        ((t.status = 'fulfilled'),
            (t.value = e),
            ws(t),
            (l.state = e),
            (t = l.pending),
            t !== null &&
                ((e = t.next),
                e === t
                    ? (l.pending = null)
                    : ((e = e.next), (t.next = e), Zs(l, e))));
    }
    function Fi(l, t, e) {
        var a = l.pending;
        if (((l.pending = null), a !== null)) {
            a = a.next;
            do ((t.status = 'rejected'), (t.reason = e), ws(t), (t = t.next));
            while (t !== a);
        }
        l.action = null;
    }
    function ws(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function Js(l, t) {
        return t;
    }
    function Ws(l, t) {
        if (cl) {
            var e = El.formState;
            if (e !== null) {
                l: {
                    var a = F;
                    if (cl) {
                        if (jl) {
                            t: {
                                for (var u = jl, n = zt; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break t;
                                    }
                                    if (((u = Et(u.nextSibling)), u === null)) {
                                        u = null;
                                        break t;
                                    }
                                }
                                ((n = u.data),
                                    (u = n === 'F!' || n === 'F' ? u : null));
                            }
                            if (u) {
                                ((jl = Et(u.nextSibling)),
                                    (a = u.data === 'F!'));
                                break l;
                            }
                        }
                        ae(a);
                    }
                    a = !1;
                }
                a && (t = e[0]);
            }
        }
        return (
            (e = Il()),
            (e.memoizedState = e.baseState = t),
            (a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Js,
                lastRenderedState: t,
            }),
            (e.queue = a),
            (e = hr.bind(null, F, a)),
            (a.dispatch = e),
            (a = $i(!1)),
            (n = ac.bind(null, F, !1, a.queue)),
            (a = Il()),
            (u = {state: t, dispatch: null, action: l, pending: null}),
            (a.queue = u),
            (e = Gh.bind(null, F, u, n, e)),
            (u.dispatch = e),
            (a.memoizedState = l),
            [t, e, !1]
        );
    }
    function ks(l) {
        var t = Hl();
        return $s(t, Tl, l);
    }
    function $s(l, t, e) {
        if (
            ((t = Wi(l, t, Js)[0]),
            (l = an(Xt)[0]),
            typeof t == 'object' && t !== null && typeof t.then == 'function')
        )
            try {
                var a = Ia(t);
            } catch (i) {
                throw i === sa ? Ju : i;
            }
        else a = t;
        t = Hl();
        var u = t.queue,
            n = u.dispatch;
        return (
            e !== t.memoizedState &&
                ((F.flags |= 2048),
                ma(9, {destroy: void 0}, Lh.bind(null, u, e), null)),
            [a, n, l]
        );
    }
    function Lh(l, t) {
        l.action = t;
    }
    function Fs(l) {
        var t = Hl(),
            e = Tl;
        if (e !== null) return $s(t, e, l);
        (Hl(), (t = t.memoizedState), (e = Hl()));
        var a = e.queue.dispatch;
        return ((e.memoizedState = l), [t, a, !1]);
    }
    function ma(l, t, e, a) {
        return (
            (l = {tag: l, create: e, deps: a, inst: t, next: null}),
            (t = F.updateQueue),
            t === null && ((t = tn()), (F.updateQueue = t)),
            (e = t.lastEffect),
            e === null
                ? (t.lastEffect = l.next = l)
                : ((a = e.next),
                  (e.next = l),
                  (l.next = a),
                  (t.lastEffect = l)),
            l
        );
    }
    function Is() {
        return Hl().memoizedState;
    }
    function un(l, t, e, a) {
        var u = Il();
        ((F.flags |= l),
            (u.memoizedState = ma(
                1 | t,
                {destroy: void 0},
                e,
                a === void 0 ? null : a,
            )));
    }
    function nn(l, t, e, a) {
        var u = Hl();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        Tl !== null && a !== null && Xi(a, Tl.memoizedState.deps)
            ? (u.memoizedState = ma(t, n, e, a))
            : ((F.flags |= l), (u.memoizedState = ma(1 | t, n, e, a)));
    }
    function Ps(l, t) {
        un(8390656, 8, l, t);
    }
    function Ii(l, t) {
        nn(2048, 8, l, t);
    }
    function Qh(l) {
        F.flags |= 4;
        var t = F.updateQueue;
        if (t === null) ((t = tn()), (F.updateQueue = t), (t.events = [l]));
        else {
            var e = t.events;
            e === null ? (t.events = [l]) : e.push(l);
        }
    }
    function lr(l) {
        var t = Hl().memoizedState;
        return (
            Qh({ref: t, nextImpl: l}),
            function () {
                if ((hl & 2) !== 0) throw Error(h(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function tr(l, t) {
        return nn(4, 2, l, t);
    }
    function er(l, t) {
        return nn(4, 4, l, t);
    }
    function ar(l, t) {
        if (typeof t == 'function') {
            l = l();
            var e = t(l);
            return function () {
                typeof e == 'function' ? e() : t(null);
            };
        }
        if (t != null)
            return (
                (l = l()),
                (t.current = l),
                function () {
                    t.current = null;
                }
            );
    }
    function ur(l, t, e) {
        ((e = e != null ? e.concat([l]) : null),
            nn(4, 4, ar.bind(null, t, l), e));
    }
    function Pi() {}
    function nr(l, t) {
        var e = Hl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Xi(t, a[1])
            ? a[0]
            : ((e.memoizedState = [l, t]), l);
    }
    function ir(l, t) {
        var e = Hl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Xi(t, a[1])) return a[0];
        if (((a = l()), Ye)) {
            It(!0);
            try {
                l();
            } finally {
                It(!1);
            }
        }
        return ((e.memoizedState = [a, t]), a);
    }
    function lc(l, t, e) {
        return e === void 0 || ((Qt & 1073741824) !== 0 && (nl & 261930) === 0)
            ? (l.memoizedState = t)
            : ((l.memoizedState = e), (l = co()), (F.lanes |= l), (de |= l), e);
    }
    function cr(l, t, e, a) {
        return rt(e, t)
            ? e
            : oa.current !== null
              ? ((l = lc(l, e, a)), rt(l, t) || (Yl = !0), l)
              : (Qt & 42) === 0 ||
                  ((Qt & 1073741824) !== 0 && (nl & 261930) === 0)
                ? ((Yl = !0), (l.memoizedState = e))
                : ((l = co()), (F.lanes |= l), (de |= l), t);
    }
    function fr(l, t, e, a, u) {
        var n = E.p;
        E.p = n !== 0 && 8 > n ? n : 8;
        var i = S.T,
            c = {};
        ((S.T = c), ac(l, !1, t, e));
        try {
            var s = u(),
                y = S.S;
            if (
                (y !== null && y(c, s),
                s !== null &&
                    typeof s == 'object' &&
                    typeof s.then == 'function')
            ) {
                var b = Rh(s, a);
                Pa(l, t, b, vt(l));
            } else Pa(l, t, a, vt(l));
        } catch (A) {
            Pa(
                l,
                t,
                {then: function () {}, status: 'rejected', reason: A},
                vt(),
            );
        } finally {
            ((E.p = n),
                i !== null && c.types !== null && (i.types = c.types),
                (S.T = i));
        }
    }
    function Xh() {}
    function tc(l, t, e, a) {
        if (l.tag !== 5) throw Error(h(476));
        var u = sr(l).queue;
        fr(
            l,
            u,
            t,
            Y,
            e === null
                ? Xh
                : function () {
                      return (rr(l), e(a));
                  },
        );
    }
    function sr(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: Y,
            baseState: Y,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: Y,
            },
            next: null,
        };
        var e = {};
        return (
            (t.next = {
                memoizedState: e,
                baseState: e,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Xt,
                    lastRenderedState: e,
                },
                next: null,
            }),
            (l.memoizedState = t),
            (l = l.alternate),
            l !== null && (l.memoizedState = t),
            t
        );
    }
    function rr(l) {
        var t = sr(l);
        (t.next === null && (t = l.alternate.memoizedState),
            Pa(l, t.next.queue, {}, vt()));
    }
    function ec() {
        return wl(vu);
    }
    function or() {
        return Hl().memoizedState;
    }
    function dr() {
        return Hl().memoizedState;
    }
    function Zh(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var e = vt();
                    l = ie(e);
                    var a = ce(t, l, e);
                    (a !== null && (it(a, t, e), Wa(a, t, e)),
                        (t = {cache: Di()}),
                        (l.payload = t));
                    return;
            }
            t = t.return;
        }
    }
    function Vh(l, t, e) {
        var a = vt();
        ((e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            cn(l)
                ? mr(t, e)
                : ((e = bi(l, t, e, a)),
                  e !== null && (it(e, l, a), yr(e, t, a))));
    }
    function hr(l, t, e) {
        var a = vt();
        Pa(l, t, e, a);
    }
    function Pa(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
        if (cn(l)) mr(t, u);
        else {
            var n = l.alternate;
            if (
                l.lanes === 0 &&
                (n === null || n.lanes === 0) &&
                ((n = t.lastRenderedReducer), n !== null)
            )
                try {
                    var i = t.lastRenderedState,
                        c = n(i, e);
                    if (((u.hasEagerState = !0), (u.eagerState = c), rt(c, i)))
                        return (Lu(l, t, u, 0), El === null && Gu(), !1);
                } catch {}
            if (((e = bi(l, t, u, a)), e !== null))
                return (it(e, l, a), yr(e, t, a), !0);
        }
        return !1;
    }
    function ac(l, t, e, a) {
        if (
            ((a = {
                lane: 2,
                revertLane: Bc(),
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            cn(l))
        ) {
            if (t) throw Error(h(479));
        } else ((t = bi(l, e, a, 2)), t !== null && it(t, l, 2));
    }
    function cn(l) {
        var t = l.alternate;
        return l === F || (t !== null && t === F);
    }
    function mr(l, t) {
        da = Pu = !0;
        var e = l.pending;
        (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
            (l.pending = t));
    }
    function yr(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            ((a &= l.pendingLanes), (e |= a), (t.lanes = e), bf(l, e));
        }
    }
    var lu = {
        readContext: wl,
        use: en,
        useCallback: _l,
        useContext: _l,
        useEffect: _l,
        useImperativeHandle: _l,
        useLayoutEffect: _l,
        useInsertionEffect: _l,
        useMemo: _l,
        useReducer: _l,
        useRef: _l,
        useState: _l,
        useDebugValue: _l,
        useDeferredValue: _l,
        useTransition: _l,
        useSyncExternalStore: _l,
        useId: _l,
        useHostTransitionStatus: _l,
        useFormState: _l,
        useActionState: _l,
        useOptimistic: _l,
        useMemoCache: _l,
        useCacheRefresh: _l,
    };
    lu.useEffectEvent = _l;
    var vr = {
            readContext: wl,
            use: en,
            useCallback: function (l, t) {
                return ((Il().memoizedState = [l, t === void 0 ? null : t]), l);
            },
            useContext: wl,
            useEffect: Ps,
            useImperativeHandle: function (l, t, e) {
                ((e = e != null ? e.concat([l]) : null),
                    un(4194308, 4, ar.bind(null, t, l), e));
            },
            useLayoutEffect: function (l, t) {
                return un(4194308, 4, l, t);
            },
            useInsertionEffect: function (l, t) {
                un(4, 2, l, t);
            },
            useMemo: function (l, t) {
                var e = Il();
                t = t === void 0 ? null : t;
                var a = l();
                if (Ye) {
                    It(!0);
                    try {
                        l();
                    } finally {
                        It(!1);
                    }
                }
                return ((e.memoizedState = [a, t]), a);
            },
            useReducer: function (l, t, e) {
                var a = Il();
                if (e !== void 0) {
                    var u = e(t);
                    if (Ye) {
                        It(!0);
                        try {
                            e(t);
                        } finally {
                            It(!1);
                        }
                    }
                } else u = t;
                return (
                    (a.memoizedState = a.baseState = u),
                    (l = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: l,
                        lastRenderedState: u,
                    }),
                    (a.queue = l),
                    (l = l.dispatch = Vh.bind(null, F, l)),
                    [a.memoizedState, l]
                );
            },
            useRef: function (l) {
                var t = Il();
                return ((l = {current: l}), (t.memoizedState = l));
            },
            useState: function (l) {
                l = $i(l);
                var t = l.queue,
                    e = hr.bind(null, F, t);
                return ((t.dispatch = e), [l.memoizedState, e]);
            },
            useDebugValue: Pi,
            useDeferredValue: function (l, t) {
                var e = Il();
                return lc(e, l, t);
            },
            useTransition: function () {
                var l = $i(!1);
                return (
                    (l = fr.bind(null, F, l.queue, !0, !1)),
                    (Il().memoizedState = l),
                    [!1, l]
                );
            },
            useSyncExternalStore: function (l, t, e) {
                var a = F,
                    u = Il();
                if (cl) {
                    if (e === void 0) throw Error(h(407));
                    e = e();
                } else {
                    if (((e = t()), El === null)) throw Error(h(349));
                    (nl & 127) !== 0 || qs(a, t, e);
                }
                u.memoizedState = e;
                var n = {value: e, getSnapshot: t};
                return (
                    (u.queue = n),
                    Ps(Gs.bind(null, a, n, l), [l]),
                    (a.flags |= 2048),
                    ma(9, {destroy: void 0}, Ys.bind(null, a, n, e, t), null),
                    e
                );
            },
            useId: function () {
                var l = Il(),
                    t = El.identifierPrefix;
                if (cl) {
                    var e = Dt,
                        a = _t;
                    ((e = (a & ~(1 << (32 - st(a) - 1))).toString(32) + e),
                        (t = '_' + t + 'R_' + e),
                        (e = ln++),
                        0 < e && (t += 'H' + e.toString(32)),
                        (t += '_'));
                } else
                    ((e = qh++), (t = '_' + t + 'r_' + e.toString(32) + '_'));
                return (l.memoizedState = t);
            },
            useHostTransitionStatus: ec,
            useFormState: Ws,
            useActionState: Ws,
            useOptimistic: function (l) {
                var t = Il();
                t.memoizedState = t.baseState = l;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null,
                };
                return (
                    (t.queue = e),
                    (t = ac.bind(null, F, !0, e)),
                    (e.dispatch = t),
                    [l, t]
                );
            },
            useMemoCache: Ji,
            useCacheRefresh: function () {
                return (Il().memoizedState = Zh.bind(null, F));
            },
            useEffectEvent: function (l) {
                var t = Il(),
                    e = {impl: l};
                return (
                    (t.memoizedState = e),
                    function () {
                        if ((hl & 2) !== 0) throw Error(h(440));
                        return e.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        uc = {
            readContext: wl,
            use: en,
            useCallback: nr,
            useContext: wl,
            useEffect: Ii,
            useImperativeHandle: ur,
            useInsertionEffect: tr,
            useLayoutEffect: er,
            useMemo: ir,
            useReducer: an,
            useRef: Is,
            useState: function () {
                return an(Xt);
            },
            useDebugValue: Pi,
            useDeferredValue: function (l, t) {
                var e = Hl();
                return cr(e, Tl.memoizedState, l, t);
            },
            useTransition: function () {
                var l = an(Xt)[0],
                    t = Hl().memoizedState;
                return [typeof l == 'boolean' ? l : Ia(l), t];
            },
            useSyncExternalStore: Rs,
            useId: or,
            useHostTransitionStatus: ec,
            useFormState: ks,
            useActionState: ks,
            useOptimistic: function (l, t) {
                var e = Hl();
                return Xs(e, Tl, l, t);
            },
            useMemoCache: Ji,
            useCacheRefresh: dr,
        };
    uc.useEffectEvent = lr;
    var gr = {
        readContext: wl,
        use: en,
        useCallback: nr,
        useContext: wl,
        useEffect: Ii,
        useImperativeHandle: ur,
        useInsertionEffect: tr,
        useLayoutEffect: er,
        useMemo: ir,
        useReducer: ki,
        useRef: Is,
        useState: function () {
            return ki(Xt);
        },
        useDebugValue: Pi,
        useDeferredValue: function (l, t) {
            var e = Hl();
            return Tl === null ? lc(e, l, t) : cr(e, Tl.memoizedState, l, t);
        },
        useTransition: function () {
            var l = ki(Xt)[0],
                t = Hl().memoizedState;
            return [typeof l == 'boolean' ? l : Ia(l), t];
        },
        useSyncExternalStore: Rs,
        useId: or,
        useHostTransitionStatus: ec,
        useFormState: Fs,
        useActionState: Fs,
        useOptimistic: function (l, t) {
            var e = Hl();
            return Tl !== null
                ? Xs(e, Tl, l, t)
                : ((e.baseState = l), [l, e.queue.dispatch]);
        },
        useMemoCache: Ji,
        useCacheRefresh: dr,
    };
    gr.useEffectEvent = lr;
    function nc(l, t, e, a) {
        ((t = l.memoizedState),
            (e = e(a, t)),
            (e = e == null ? t : D({}, t, e)),
            (l.memoizedState = e),
            l.lanes === 0 && (l.updateQueue.baseState = e));
    }
    var ic = {
        enqueueSetState: function (l, t, e) {
            l = l._reactInternals;
            var a = vt(),
                u = ie(a);
            ((u.payload = t),
                e != null && (u.callback = e),
                (t = ce(l, u, a)),
                t !== null && (it(t, l, a), Wa(t, l, a)));
        },
        enqueueReplaceState: function (l, t, e) {
            l = l._reactInternals;
            var a = vt(),
                u = ie(a);
            ((u.tag = 1),
                (u.payload = t),
                e != null && (u.callback = e),
                (t = ce(l, u, a)),
                t !== null && (it(t, l, a), Wa(t, l, a)));
        },
        enqueueForceUpdate: function (l, t) {
            l = l._reactInternals;
            var e = vt(),
                a = ie(e);
            ((a.tag = 2),
                t != null && (a.callback = t),
                (t = ce(l, a, e)),
                t !== null && (it(t, l, e), Wa(t, l, e)));
        },
    };
    function Sr(l, t, e, a, u, n, i) {
        return (
            (l = l.stateNode),
            typeof l.shouldComponentUpdate == 'function'
                ? l.shouldComponentUpdate(a, n, i)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !La(e, a) || !La(u, n)
                  : !0
        );
    }
    function pr(l, t, e, a) {
        ((l = t.state),
            typeof t.componentWillReceiveProps == 'function' &&
                t.componentWillReceiveProps(e, a),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                t.UNSAFE_componentWillReceiveProps(e, a),
            t.state !== l && ic.enqueueReplaceState(t, t.state, null));
    }
    function Ge(l, t) {
        var e = t;
        if ('ref' in t) {
            e = {};
            for (var a in t) a !== 'ref' && (e[a] = t[a]);
        }
        if ((l = l.defaultProps)) {
            e === t && (e = D({}, e));
            for (var u in l) e[u] === void 0 && (e[u] = l[u]);
        }
        return e;
    }
    function br(l) {
        Yu(l);
    }
    function xr(l) {
        console.error(l);
    }
    function Tr(l) {
        Yu(l);
    }
    function fn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {componentStack: t.stack});
        } catch (a) {
            setTimeout(function () {
                throw a;
            });
        }
    }
    function zr(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null,
            });
        } catch (u) {
            setTimeout(function () {
                throw u;
            });
        }
    }
    function cc(l, t, e) {
        return (
            (e = ie(e)),
            (e.tag = 3),
            (e.payload = {element: null}),
            (e.callback = function () {
                fn(l, t);
            }),
            e
        );
    }
    function Ar(l) {
        return ((l = ie(l)), (l.tag = 3), l);
    }
    function Er(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == 'function') {
            var n = a.value;
            ((l.payload = function () {
                return u(n);
            }),
                (l.callback = function () {
                    zr(t, e, a);
                }));
        }
        var i = e.stateNode;
        i !== null &&
            typeof i.componentDidCatch == 'function' &&
            (l.callback = function () {
                (zr(t, e, a),
                    typeof u != 'function' &&
                        (he === null ? (he = new Set([this])) : he.add(this)));
                var c = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: c !== null ? c : '',
                });
            });
    }
    function Kh(l, t, e, a, u) {
        if (
            ((e.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
            if (
                ((t = e.alternate),
                t !== null && ia(t, e, u, !0),
                (e = dt.current),
                e !== null)
            ) {
                switch (e.tag) {
                    case 31:
                    case 13:
                        return (
                            At === null
                                ? bn()
                                : e.alternate === null && Dl === 0 && (Dl = 3),
                            (e.flags &= -257),
                            (e.flags |= 65536),
                            (e.lanes = u),
                            a === Wu
                                ? (e.flags |= 16384)
                                : ((t = e.updateQueue),
                                  t === null
                                      ? (e.updateQueue = new Set([a]))
                                      : t.add(a),
                                  Cc(l, a, u)),
                            !1
                        );
                    case 22:
                        return (
                            (e.flags |= 65536),
                            a === Wu
                                ? (e.flags |= 16384)
                                : ((t = e.updateQueue),
                                  t === null
                                      ? ((t = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([a]),
                                        }),
                                        (e.updateQueue = t))
                                      : ((e = t.retryQueue),
                                        e === null
                                            ? (t.retryQueue = new Set([a]))
                                            : e.add(a)),
                                  Cc(l, a, u)),
                            !1
                        );
                }
                throw Error(h(435, e.tag));
            }
            return (Cc(l, a, u), bn(), !1);
        }
        if (cl)
            return (
                (t = dt.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = u),
                      a !== ji &&
                          ((l = Error(h(422), {cause: a})), Za(bt(l, e))))
                    : (a !== ji &&
                          ((t = Error(h(423), {cause: a})), Za(bt(t, e))),
                      (l = l.current.alternate),
                      (l.flags |= 65536),
                      (u &= -u),
                      (l.lanes |= u),
                      (a = bt(a, e)),
                      (u = cc(l.stateNode, a, u)),
                      qi(l, u),
                      Dl !== 4 && (Dl = 2)),
                !1
            );
        var n = Error(h(520), {cause: a});
        if (
            ((n = bt(n, e)),
            fu === null ? (fu = [n]) : fu.push(n),
            Dl !== 4 && (Dl = 2),
            t === null)
        )
            return !0;
        ((a = bt(a, e)), (e = t));
        do {
            switch (e.tag) {
                case 3:
                    return (
                        (e.flags |= 65536),
                        (l = u & -u),
                        (e.lanes |= l),
                        (l = cc(e.stateNode, a, l)),
                        qi(e, l),
                        !1
                    );
                case 1:
                    if (
                        ((t = e.type),
                        (n = e.stateNode),
                        (e.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (n !== null &&
                                    typeof n.componentDidCatch == 'function' &&
                                    (he === null || !he.has(n)))))
                    )
                        return (
                            (e.flags |= 65536),
                            (u &= -u),
                            (e.lanes |= u),
                            (u = Ar(u)),
                            Er(u, l, e, a),
                            qi(e, u),
                            !1
                        );
            }
            e = e.return;
        } while (e !== null);
        return !1;
    }
    var fc = Error(h(461)),
        Yl = !1;
    function Jl(l, t, e, a) {
        t.child = l === null ? Ms(t, null, e, a) : qe(t, l.child, e, a);
    }
    function jr(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ('ref' in a) {
            var i = {};
            for (var c in a) c !== 'ref' && (i[c] = a[c]);
        } else i = a;
        return (
            Ue(t),
            (a = Zi(l, t, e, i, n, u)),
            (c = Vi()),
            l !== null && !Yl
                ? (Ki(l, t, u), Zt(l, t, u))
                : (cl && c && Ai(t), (t.flags |= 1), Jl(l, t, a, u), t.child)
        );
    }
    function Or(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == 'function' &&
                !xi(n) &&
                n.defaultProps === void 0 &&
                e.compare === null
                ? ((t.tag = 15), (t.type = n), Nr(l, t, n, a, u))
                : ((l = Xu(e.type, null, a, t, t.mode, u)),
                  (l.ref = t.ref),
                  (l.return = t),
                  (t.child = l));
        }
        if (((n = l.child), !vc(l, u))) {
            var i = n.memoizedProps;
            if (
                ((e = e.compare),
                (e = e !== null ? e : La),
                e(i, a) && l.ref === t.ref)
            )
                return Zt(l, t, u);
        }
        return (
            (t.flags |= 1),
            (l = qt(n, a)),
            (l.ref = t.ref),
            (l.return = t),
            (t.child = l)
        );
    }
    function Nr(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (La(n, a) && l.ref === t.ref)
                if (((Yl = !1), (t.pendingProps = a = n), vc(l, u)))
                    (l.flags & 131072) !== 0 && (Yl = !0);
                else return ((t.lanes = l.lanes), Zt(l, t, u));
        }
        return sc(l, t, e, a, u);
    }
    function Mr(l, t, e, a) {
        var u = a.children,
            n = l !== null ? l.memoizedState : null;
        if (
            (l === null &&
                t.stateNode === null &&
                (t.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                }),
            a.mode === 'hidden')
        ) {
            if ((t.flags & 128) !== 0) {
                if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
                    for (a = t.child = l.child, u = 0; a !== null; )
                        ((u = u | a.lanes | a.childLanes), (a = a.sibling));
                    a = u & ~n;
                } else ((a = 0), (t.child = null));
                return _r(l, t, n, e, a);
            }
            if ((e & 536870912) !== 0)
                ((t.memoizedState = {baseLanes: 0, cachePool: null}),
                    l !== null && wu(t, n !== null ? n.cachePool : null),
                    n !== null ? Cs(t, n) : Gi(),
                    Us(t));
            else
                return (
                    (a = t.lanes = 536870912),
                    _r(l, t, n !== null ? n.baseLanes | e : e, e, a)
                );
        } else
            n !== null
                ? (wu(t, n.cachePool), Cs(t, n), se(), (t.memoizedState = null))
                : (l !== null && wu(t, null), Gi(), se());
        return (Jl(l, t, u, e), t.child);
    }
    function tu(l, t) {
        return (
            (l !== null && l.tag === 22) ||
                t.stateNode !== null ||
                (t.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                }),
            t.sibling
        );
    }
    function _r(l, t, e, a, u) {
        var n = Ui();
        return (
            (n = n === null ? null : {parent: Rl._currentValue, pool: n}),
            (t.memoizedState = {baseLanes: e, cachePool: n}),
            l !== null && wu(t, null),
            Gi(),
            Us(t),
            l !== null && ia(l, t, a, !0),
            (t.childLanes = u),
            null
        );
    }
    function sn(l, t) {
        return (
            (t = on({mode: t.mode, children: t.children}, l.mode)),
            (t.ref = l.ref),
            (l.child = t),
            (t.return = l),
            t
        );
    }
    function Dr(l, t, e) {
        return (
            qe(t, l.child, null, e),
            (l = sn(t, t.pendingProps)),
            (l.flags |= 2),
            ht(t),
            (t.memoizedState = null),
            l
        );
    }
    function wh(l, t, e) {
        var a = t.pendingProps,
            u = (t.flags & 128) !== 0;
        if (((t.flags &= -129), l === null)) {
            if (cl) {
                if (a.mode === 'hidden')
                    return ((l = sn(t, a)), (t.lanes = 536870912), tu(null, l));
                if (
                    (Qi(t),
                    (l = jl)
                        ? ((l = Vo(l, zt)),
                          (l = l !== null && l.data === '&' ? l : null),
                          l !== null &&
                              ((t.memoizedState = {
                                  dehydrated: l,
                                  treeContext:
                                      te !== null
                                          ? {id: _t, overflow: Dt}
                                          : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (e = ms(l)),
                              (e.return = t),
                              (t.child = e),
                              (Kl = t),
                              (jl = null)))
                        : (l = null),
                    l === null)
                )
                    throw ae(t);
                return ((t.lanes = 536870912), null);
            }
            return sn(t, a);
        }
        var n = l.memoizedState;
        if (n !== null) {
            var i = n.dehydrated;
            if ((Qi(t), u))
                if (t.flags & 256) ((t.flags &= -257), (t = Dr(l, t, e)));
                else if (t.memoizedState !== null)
                    ((t.child = l.child), (t.flags |= 128), (t = null));
                else throw Error(h(558));
            else if (
                (Yl || ia(l, t, e, !1), (u = (e & l.childLanes) !== 0), Yl || u)
            ) {
                if (
                    ((a = El),
                    a !== null &&
                        ((i = xf(a, e)), i !== 0 && i !== n.retryLane))
                )
                    throw ((n.retryLane = i), Me(l, i), it(a, l, i), fc);
                (bn(), (t = Dr(l, t, e)));
            } else
                ((l = n.treeContext),
                    (jl = Et(i.nextSibling)),
                    (Kl = t),
                    (cl = !0),
                    (ee = null),
                    (zt = !1),
                    l !== null && gs(t, l),
                    (t = sn(t, a)),
                    (t.flags |= 4096));
            return t;
        }
        return (
            (l = qt(l.child, {mode: a.mode, children: a.children})),
            (l.ref = t.ref),
            (t.child = l),
            (l.return = t),
            l
        );
    }
    function rn(l, t) {
        var e = t.ref;
        if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != 'function' && typeof e != 'object')
                throw Error(h(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816);
        }
    }
    function sc(l, t, e, a, u) {
        return (
            Ue(t),
            (e = Zi(l, t, e, a, void 0, u)),
            (a = Vi()),
            l !== null && !Yl
                ? (Ki(l, t, u), Zt(l, t, u))
                : (cl && a && Ai(t), (t.flags |= 1), Jl(l, t, e, u), t.child)
        );
    }
    function Cr(l, t, e, a, u, n) {
        return (
            Ue(t),
            (t.updateQueue = null),
            (e = Bs(t, a, e, u)),
            Hs(l),
            (a = Vi()),
            l !== null && !Yl
                ? (Ki(l, t, n), Zt(l, t, n))
                : (cl && a && Ai(t), (t.flags |= 1), Jl(l, t, e, n), t.child)
        );
    }
    function Ur(l, t, e, a, u) {
        if ((Ue(t), t.stateNode === null)) {
            var n = ea,
                i = e.contextType;
            (typeof i == 'object' && i !== null && (n = wl(i)),
                (n = new e(a, n)),
                (t.memoizedState =
                    n.state !== null && n.state !== void 0 ? n.state : null),
                (n.updater = ic),
                (t.stateNode = n),
                (n._reactInternals = t),
                (n = t.stateNode),
                (n.props = a),
                (n.state = t.memoizedState),
                (n.refs = {}),
                Bi(t),
                (i = e.contextType),
                (n.context = typeof i == 'object' && i !== null ? wl(i) : ea),
                (n.state = t.memoizedState),
                (i = e.getDerivedStateFromProps),
                typeof i == 'function' &&
                    (nc(t, e, i, a), (n.state = t.memoizedState)),
                typeof e.getDerivedStateFromProps == 'function' ||
                    typeof n.getSnapshotBeforeUpdate == 'function' ||
                    (typeof n.UNSAFE_componentWillMount != 'function' &&
                        typeof n.componentWillMount != 'function') ||
                    ((i = n.state),
                    typeof n.componentWillMount == 'function' &&
                        n.componentWillMount(),
                    typeof n.UNSAFE_componentWillMount == 'function' &&
                        n.UNSAFE_componentWillMount(),
                    i !== n.state && ic.enqueueReplaceState(n, n.state, null),
                    $a(t, a, n, u),
                    ka(),
                    (n.state = t.memoizedState)),
                typeof n.componentDidMount == 'function' &&
                    (t.flags |= 4194308),
                (a = !0));
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps,
                s = Ge(e, c);
            n.props = s;
            var y = n.context,
                b = e.contextType;
            ((i = ea), typeof b == 'object' && b !== null && (i = wl(b)));
            var A = e.getDerivedStateFromProps;
            ((b =
                typeof A == 'function' ||
                typeof n.getSnapshotBeforeUpdate == 'function'),
                (c = t.pendingProps !== c),
                b ||
                    (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof n.componentWillReceiveProps != 'function') ||
                    ((c || y !== i) && pr(t, n, a, i)),
                (ne = !1));
            var v = t.memoizedState;
            ((n.state = v),
                $a(t, a, n, u),
                ka(),
                (y = t.memoizedState),
                c || v !== y || ne
                    ? (typeof A == 'function' &&
                          (nc(t, e, A, a), (y = t.memoizedState)),
                      (s = ne || Sr(t, e, s, a, v, y, i))
                          ? (b ||
                                (typeof n.UNSAFE_componentWillMount !=
                                    'function' &&
                                    typeof n.componentWillMount !=
                                        'function') ||
                                (typeof n.componentWillMount == 'function' &&
                                    n.componentWillMount(),
                                typeof n.UNSAFE_componentWillMount ==
                                    'function' &&
                                    n.UNSAFE_componentWillMount()),
                            typeof n.componentDidMount == 'function' &&
                                (t.flags |= 4194308))
                          : (typeof n.componentDidMount == 'function' &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = a),
                            (t.memoizedState = y)),
                      (n.props = a),
                      (n.state = y),
                      (n.context = i),
                      (a = s))
                    : (typeof n.componentDidMount == 'function' &&
                          (t.flags |= 4194308),
                      (a = !1)));
        } else {
            ((n = t.stateNode),
                Ri(l, t),
                (i = t.memoizedProps),
                (b = Ge(e, i)),
                (n.props = b),
                (A = t.pendingProps),
                (v = n.context),
                (y = e.contextType),
                (s = ea),
                typeof y == 'object' && y !== null && (s = wl(y)),
                (c = e.getDerivedStateFromProps),
                (y =
                    typeof c == 'function' ||
                    typeof n.getSnapshotBeforeUpdate == 'function') ||
                    (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof n.componentWillReceiveProps != 'function') ||
                    ((i !== A || v !== s) && pr(t, n, a, s)),
                (ne = !1),
                (v = t.memoizedState),
                (n.state = v),
                $a(t, a, n, u),
                ka());
            var g = t.memoizedState;
            i !== A ||
            v !== g ||
            ne ||
            (l !== null && l.dependencies !== null && Vu(l.dependencies))
                ? (typeof c == 'function' &&
                      (nc(t, e, c, a), (g = t.memoizedState)),
                  (b =
                      ne ||
                      Sr(t, e, b, a, v, g, s) ||
                      (l !== null &&
                          l.dependencies !== null &&
                          Vu(l.dependencies)))
                      ? (y ||
                            (typeof n.UNSAFE_componentWillUpdate !=
                                'function' &&
                                typeof n.componentWillUpdate != 'function') ||
                            (typeof n.componentWillUpdate == 'function' &&
                                n.componentWillUpdate(a, g, s),
                            typeof n.UNSAFE_componentWillUpdate == 'function' &&
                                n.UNSAFE_componentWillUpdate(a, g, s)),
                        typeof n.componentDidUpdate == 'function' &&
                            (t.flags |= 4),
                        typeof n.getSnapshotBeforeUpdate == 'function' &&
                            (t.flags |= 1024))
                      : (typeof n.componentDidUpdate != 'function' ||
                            (i === l.memoizedProps && v === l.memoizedState) ||
                            (t.flags |= 4),
                        typeof n.getSnapshotBeforeUpdate != 'function' ||
                            (i === l.memoizedProps && v === l.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = g)),
                  (n.props = a),
                  (n.state = g),
                  (n.context = s),
                  (a = b))
                : (typeof n.componentDidUpdate != 'function' ||
                      (i === l.memoizedProps && v === l.memoizedState) ||
                      (t.flags |= 4),
                  typeof n.getSnapshotBeforeUpdate != 'function' ||
                      (i === l.memoizedProps && v === l.memoizedState) ||
                      (t.flags |= 1024),
                  (a = !1));
        }
        return (
            (n = a),
            rn(l, t),
            (a = (t.flags & 128) !== 0),
            n || a
                ? ((n = t.stateNode),
                  (e =
                      a && typeof e.getDerivedStateFromError != 'function'
                          ? null
                          : n.render()),
                  (t.flags |= 1),
                  l !== null && a
                      ? ((t.child = qe(t, l.child, null, u)),
                        (t.child = qe(t, null, e, u)))
                      : Jl(l, t, e, u),
                  (t.memoizedState = n.state),
                  (l = t.child))
                : (l = Zt(l, t, u)),
            l
        );
    }
    function Hr(l, t, e, a) {
        return (De(), (t.flags |= 256), Jl(l, t, e, a), t.child);
    }
    var rc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
    };
    function oc(l) {
        return {baseLanes: l, cachePool: zs()};
    }
    function dc(l, t, e) {
        return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= yt), l);
    }
    function Br(l, t, e) {
        var a = t.pendingProps,
            u = !1,
            n = (t.flags & 128) !== 0,
            i;
        if (
            ((i = n) ||
                (i =
                    l !== null && l.memoizedState === null
                        ? !1
                        : (Ul.current & 2) !== 0),
            i && ((u = !0), (t.flags &= -129)),
            (i = (t.flags & 32) !== 0),
            (t.flags &= -33),
            l === null)
        ) {
            if (cl) {
                if (
                    (u ? fe(t) : se(),
                    (l = jl)
                        ? ((l = Vo(l, zt)),
                          (l = l !== null && l.data !== '&' ? l : null),
                          l !== null &&
                              ((t.memoizedState = {
                                  dehydrated: l,
                                  treeContext:
                                      te !== null
                                          ? {id: _t, overflow: Dt}
                                          : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (e = ms(l)),
                              (e.return = t),
                              (t.child = e),
                              (Kl = t),
                              (jl = null)))
                        : (l = null),
                    l === null)
                )
                    throw ae(t);
                return (Wc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var c = a.children;
            return (
                (a = a.fallback),
                u
                    ? (se(),
                      (u = t.mode),
                      (c = on({mode: 'hidden', children: c}, u)),
                      (a = _e(a, u, e, null)),
                      (c.return = t),
                      (a.return = t),
                      (c.sibling = a),
                      (t.child = c),
                      (a = t.child),
                      (a.memoizedState = oc(e)),
                      (a.childLanes = dc(l, i, e)),
                      (t.memoizedState = rc),
                      tu(null, a))
                    : (fe(t), hc(t, c))
            );
        }
        var s = l.memoizedState;
        if (s !== null && ((c = s.dehydrated), c !== null)) {
            if (n)
                t.flags & 256
                    ? (fe(t), (t.flags &= -257), (t = mc(l, t, e)))
                    : t.memoizedState !== null
                      ? (se(),
                        (t.child = l.child),
                        (t.flags |= 128),
                        (t = null))
                      : (se(),
                        (c = a.fallback),
                        (u = t.mode),
                        (a = on({mode: 'visible', children: a.children}, u)),
                        (c = _e(c, u, e, null)),
                        (c.flags |= 2),
                        (a.return = t),
                        (c.return = t),
                        (a.sibling = c),
                        (t.child = a),
                        qe(t, l.child, null, e),
                        (a = t.child),
                        (a.memoizedState = oc(e)),
                        (a.childLanes = dc(l, i, e)),
                        (t.memoizedState = rc),
                        (t = tu(null, a)));
            else if ((fe(t), Wc(c))) {
                if (((i = c.nextSibling && c.nextSibling.dataset), i))
                    var y = i.dgst;
                ((i = y),
                    (a = Error(h(419))),
                    (a.stack = ''),
                    (a.digest = i),
                    Za({value: a, source: null, stack: null}),
                    (t = mc(l, t, e)));
            } else if (
                (Yl || ia(l, t, e, !1), (i = (e & l.childLanes) !== 0), Yl || i)
            ) {
                if (
                    ((i = El),
                    i !== null &&
                        ((a = xf(i, e)), a !== 0 && a !== s.retryLane))
                )
                    throw ((s.retryLane = a), Me(l, a), it(i, l, a), fc);
                (Jc(c) || bn(), (t = mc(l, t, e)));
            } else
                Jc(c)
                    ? ((t.flags |= 192), (t.child = l.child), (t = null))
                    : ((l = s.treeContext),
                      (jl = Et(c.nextSibling)),
                      (Kl = t),
                      (cl = !0),
                      (ee = null),
                      (zt = !1),
                      l !== null && gs(t, l),
                      (t = hc(t, a.children)),
                      (t.flags |= 4096));
            return t;
        }
        return u
            ? (se(),
              (c = a.fallback),
              (u = t.mode),
              (s = l.child),
              (y = s.sibling),
              (a = qt(s, {mode: 'hidden', children: a.children})),
              (a.subtreeFlags = s.subtreeFlags & 65011712),
              y !== null
                  ? (c = qt(y, c))
                  : ((c = _e(c, u, e, null)), (c.flags |= 2)),
              (c.return = t),
              (a.return = t),
              (a.sibling = c),
              (t.child = a),
              tu(null, a),
              (a = t.child),
              (c = l.child.memoizedState),
              c === null
                  ? (c = oc(e))
                  : ((u = c.cachePool),
                    u !== null
                        ? ((s = Rl._currentValue),
                          (u = u.parent !== s ? {parent: s, pool: s} : u))
                        : (u = zs()),
                    (c = {baseLanes: c.baseLanes | e, cachePool: u})),
              (a.memoizedState = c),
              (a.childLanes = dc(l, i, e)),
              (t.memoizedState = rc),
              tu(l.child, a))
            : (fe(t),
              (e = l.child),
              (l = e.sibling),
              (e = qt(e, {mode: 'visible', children: a.children})),
              (e.return = t),
              (e.sibling = null),
              l !== null &&
                  ((i = t.deletions),
                  i === null
                      ? ((t.deletions = [l]), (t.flags |= 16))
                      : i.push(l)),
              (t.child = e),
              (t.memoizedState = null),
              e);
    }
    function hc(l, t) {
        return (
            (t = on({mode: 'visible', children: t}, l.mode)),
            (t.return = l),
            (l.child = t)
        );
    }
    function on(l, t) {
        return ((l = ot(22, l, null, t)), (l.lanes = 0), l);
    }
    function mc(l, t, e) {
        return (
            qe(t, l.child, null, e),
            (l = hc(t, t.pendingProps.children)),
            (l.flags |= 2),
            (t.memoizedState = null),
            l
        );
    }
    function Rr(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        (a !== null && (a.lanes |= t), Mi(l.return, t, e));
    }
    function yc(l, t, e, a, u, n) {
        var i = l.memoizedState;
        i === null
            ? (l.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: a,
                  tail: e,
                  tailMode: u,
                  treeForkCount: n,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = a),
              (i.tail = e),
              (i.tailMode = u),
              (i.treeForkCount = n));
    }
    function qr(l, t, e) {
        var a = t.pendingProps,
            u = a.revealOrder,
            n = a.tail;
        a = a.children;
        var i = Ul.current,
            c = (i & 2) !== 0;
        if (
            (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
            M(Ul, i),
            Jl(l, t, a, e),
            (a = cl ? Xa : 0),
            !c && l !== null && (l.flags & 128) !== 0)
        )
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13) l.memoizedState !== null && Rr(l, e, t);
                else if (l.tag === 19) Rr(l, e, t);
                else if (l.child !== null) {
                    ((l.child.return = l), (l = l.child));
                    continue;
                }
                if (l === t) break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t) break l;
                    l = l.return;
                }
                ((l.sibling.return = l.return), (l = l.sibling));
            }
        switch (u) {
            case 'forwards':
                for (e = t.child, u = null; e !== null; )
                    ((l = e.alternate),
                        l !== null && Iu(l) === null && (u = e),
                        (e = e.sibling));
                ((e = u),
                    e === null
                        ? ((u = t.child), (t.child = null))
                        : ((u = e.sibling), (e.sibling = null)),
                    yc(t, !1, u, e, n, a));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (e = null, u = t.child, t.child = null; u !== null; ) {
                    if (((l = u.alternate), l !== null && Iu(l) === null)) {
                        t.child = u;
                        break;
                    }
                    ((l = u.sibling), (u.sibling = e), (e = u), (u = l));
                }
                yc(t, !0, e, null, n, a);
                break;
            case 'together':
                yc(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function Zt(l, t, e) {
        if (
            (l !== null && (t.dependencies = l.dependencies),
            (de |= t.lanes),
            (e & t.childLanes) === 0)
        )
            if (l !== null) {
                if ((ia(l, t, e, !1), (e & t.childLanes) === 0)) return null;
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(h(153));
        if (t.child !== null) {
            for (
                l = t.child,
                    e = qt(l, l.pendingProps),
                    t.child = e,
                    e.return = t;
                l.sibling !== null;
            )
                ((l = l.sibling),
                    (e = e.sibling = qt(l, l.pendingProps)),
                    (e.return = t));
            e.sibling = null;
        }
        return t.child;
    }
    function vc(l, t) {
        return (l.lanes & t) !== 0
            ? !0
            : ((l = l.dependencies), !!(l !== null && Vu(l)));
    }
    function Jh(l, t, e) {
        switch (t.tag) {
            case 3:
                (Fl(t, t.stateNode.containerInfo),
                    ue(t, Rl, l.memoizedState.cache),
                    De());
                break;
            case 27:
            case 5:
                Oa(t);
                break;
            case 4:
                Fl(t, t.stateNode.containerInfo);
                break;
            case 10:
                ue(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null)
                    return ((t.flags |= 128), Qi(t), null);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null
                        ? (fe(t), (t.flags |= 128), null)
                        : (e & t.child.childLanes) !== 0
                          ? Br(l, t, e)
                          : (fe(t),
                            (l = Zt(l, t, e)),
                            l !== null ? l.sibling : null);
                fe(t);
                break;
            case 19:
                var u = (l.flags & 128) !== 0;
                if (
                    ((a = (e & t.childLanes) !== 0),
                    a || (ia(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
                    u)
                ) {
                    if (a) return qr(l, t, e);
                    t.flags |= 128;
                }
                if (
                    ((u = t.memoizedState),
                    u !== null &&
                        ((u.rendering = null),
                        (u.tail = null),
                        (u.lastEffect = null)),
                    M(Ul, Ul.current),
                    a)
                )
                    break;
                return null;
            case 22:
                return ((t.lanes = 0), Mr(l, t, e, t.pendingProps));
            case 24:
                ue(t, Rl, l.memoizedState.cache);
        }
        return Zt(l, t, e);
    }
    function Yr(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) Yl = !0;
            else {
                if (!vc(l, e) && (t.flags & 128) === 0)
                    return ((Yl = !1), Jh(l, t, e));
                Yl = (l.flags & 131072) !== 0;
            }
        else ((Yl = !1), cl && (t.flags & 1048576) !== 0 && vs(t, Xa, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                l: {
                    var a = t.pendingProps;
                    if (
                        ((l = Be(t.elementType)),
                        (t.type = l),
                        typeof l == 'function')
                    )
                        xi(l)
                            ? ((a = Ge(l, a)),
                              (t.tag = 1),
                              (t = Ur(null, t, l, a, e)))
                            : ((t.tag = 0), (t = sc(null, t, l, a, e)));
                    else {
                        if (l != null) {
                            var u = l.$$typeof;
                            if (u === B) {
                                ((t.tag = 11), (t = jr(null, t, l, a, e)));
                                break l;
                            } else if (u === K) {
                                ((t.tag = 14), (t = Or(null, t, l, a, e)));
                                break l;
                            }
                        }
                        throw ((t = N(l) || l), Error(h(306, t, '')));
                    }
                }
                return t;
            case 0:
                return sc(l, t, t.type, t.pendingProps, e);
            case 1:
                return (
                    (a = t.type),
                    (u = Ge(a, t.pendingProps)),
                    Ur(l, t, a, u, e)
                );
            case 3:
                l: {
                    if ((Fl(t, t.stateNode.containerInfo), l === null))
                        throw Error(h(387));
                    a = t.pendingProps;
                    var n = t.memoizedState;
                    ((u = n.element), Ri(l, t), $a(t, a, null, e));
                    var i = t.memoizedState;
                    if (
                        ((a = i.cache),
                        ue(t, Rl, a),
                        a !== n.cache && _i(t, [Rl], e, !0),
                        ka(),
                        (a = i.element),
                        n.isDehydrated)
                    )
                        if (
                            ((n = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache,
                            }),
                            (t.updateQueue.baseState = n),
                            (t.memoizedState = n),
                            t.flags & 256)
                        ) {
                            t = Hr(l, t, a, e);
                            break l;
                        } else if (a !== u) {
                            ((u = bt(Error(h(424)), t)),
                                Za(u),
                                (t = Hr(l, t, a, e)));
                            break l;
                        } else
                            for (
                                l = t.stateNode.containerInfo,
                                    l.nodeType === 9
                                        ? (l = l.body)
                                        : (l =
                                              l.nodeName === 'HTML'
                                                  ? l.ownerDocument.body
                                                  : l),
                                    jl = Et(l.firstChild),
                                    Kl = t,
                                    cl = !0,
                                    ee = null,
                                    zt = !0,
                                    e = Ms(t, null, a, e),
                                    t.child = e;
                                e;
                            )
                                ((e.flags = (e.flags & -3) | 4096),
                                    (e = e.sibling));
                    else {
                        if ((De(), a === u)) {
                            t = Zt(l, t, e);
                            break l;
                        }
                        Jl(l, t, a, e);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    rn(l, t),
                    l === null
                        ? (e = $o(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = e)
                            : cl ||
                              ((e = t.type),
                              (l = t.pendingProps),
                              (a = On(tl.current).createElement(e)),
                              (a[Vl] = t),
                              (a[lt] = l),
                              Wl(a, e, l),
                              Xl(a),
                              (t.stateNode = a))
                        : (t.memoizedState = $o(
                              t.type,
                              l.memoizedProps,
                              t.pendingProps,
                              l.memoizedState,
                          )),
                    null
                );
            case 27:
                return (
                    Oa(t),
                    l === null &&
                        cl &&
                        ((a = t.stateNode =
                            Jo(t.type, t.pendingProps, tl.current)),
                        (Kl = t),
                        (zt = !0),
                        (u = jl),
                        ge(t.type)
                            ? ((kc = u), (jl = Et(a.firstChild)))
                            : (jl = u)),
                    Jl(l, t, t.pendingProps.children, e),
                    rn(l, t),
                    l === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    l === null &&
                        cl &&
                        ((u = a = jl) &&
                            ((a = z0(a, t.type, t.pendingProps, zt)),
                            a !== null
                                ? ((t.stateNode = a),
                                  (Kl = t),
                                  (jl = Et(a.firstChild)),
                                  (zt = !1),
                                  (u = !0))
                                : (u = !1)),
                        u || ae(t)),
                    Oa(t),
                    (u = t.type),
                    (n = t.pendingProps),
                    (i = l !== null ? l.memoizedProps : null),
                    (a = n.children),
                    Vc(u, n)
                        ? (a = null)
                        : i !== null && Vc(u, i) && (t.flags |= 32),
                    t.memoizedState !== null &&
                        ((u = Zi(l, t, Yh, null, null, e)),
                        (vu._currentValue = u)),
                    rn(l, t),
                    Jl(l, t, a, e),
                    t.child
                );
            case 6:
                return (
                    l === null &&
                        cl &&
                        ((l = e = jl) &&
                            ((e = A0(e, t.pendingProps, zt)),
                            e !== null
                                ? ((t.stateNode = e),
                                  (Kl = t),
                                  (jl = null),
                                  (l = !0))
                                : (l = !1)),
                        l || ae(t)),
                    null
                );
            case 13:
                return Br(l, t, e);
            case 4:
                return (
                    Fl(t, t.stateNode.containerInfo),
                    (a = t.pendingProps),
                    l === null ? (t.child = qe(t, null, a, e)) : Jl(l, t, a, e),
                    t.child
                );
            case 11:
                return jr(l, t, t.type, t.pendingProps, e);
            case 7:
                return (Jl(l, t, t.pendingProps, e), t.child);
            case 8:
                return (Jl(l, t, t.pendingProps.children, e), t.child);
            case 12:
                return (Jl(l, t, t.pendingProps.children, e), t.child);
            case 10:
                return (
                    (a = t.pendingProps),
                    ue(t, t.type, a.value),
                    Jl(l, t, a.children, e),
                    t.child
                );
            case 9:
                return (
                    (u = t.type._context),
                    (a = t.pendingProps.children),
                    Ue(t),
                    (u = wl(u)),
                    (a = a(u)),
                    (t.flags |= 1),
                    Jl(l, t, a, e),
                    t.child
                );
            case 14:
                return Or(l, t, t.type, t.pendingProps, e);
            case 15:
                return Nr(l, t, t.type, t.pendingProps, e);
            case 19:
                return qr(l, t, e);
            case 31:
                return wh(l, t, e);
            case 22:
                return Mr(l, t, e, t.pendingProps);
            case 24:
                return (
                    Ue(t),
                    (a = wl(Rl)),
                    l === null
                        ? ((u = Ui()),
                          u === null &&
                              ((u = El),
                              (n = Di()),
                              (u.pooledCache = n),
                              n.refCount++,
                              n !== null && (u.pooledCacheLanes |= e),
                              (u = n)),
                          (t.memoizedState = {parent: a, cache: u}),
                          Bi(t),
                          ue(t, Rl, u))
                        : ((l.lanes & e) !== 0 &&
                              (Ri(l, t), $a(t, null, null, e), ka()),
                          (u = l.memoizedState),
                          (n = t.memoizedState),
                          u.parent !== a
                              ? ((u = {parent: a, cache: a}),
                                (t.memoizedState = u),
                                t.lanes === 0 &&
                                    (t.memoizedState = t.updateQueue.baseState =
                                        u),
                                ue(t, Rl, a))
                              : ((a = n.cache),
                                ue(t, Rl, a),
                                a !== u.cache && _i(t, [Rl], e, !0))),
                    Jl(l, t, t.pendingProps.children, e),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(h(156, t.tag));
    }
    function Vt(l) {
        l.flags |= 4;
    }
    function gc(l, t, e, a, u) {
        if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
            if (((l.flags |= 16777216), (u & 335544128) === u))
                if (l.stateNode.complete) l.flags |= 8192;
                else if (oo()) l.flags |= 8192;
                else throw ((Re = Wu), Hi);
        } else l.flags &= -16777217;
    }
    function Gr(l, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (((l.flags |= 16777216), !td(t)))
            if (oo()) l.flags |= 8192;
            else throw ((Re = Wu), Hi);
    }
    function dn(l, t) {
        (t !== null && (l.flags |= 4),
            l.flags & 16384 &&
                ((t = l.tag !== 22 ? Sf() : 536870912),
                (l.lanes |= t),
                (Sa |= t)));
    }
    function eu(l, t) {
        if (!cl)
            switch (l.tailMode) {
                case 'hidden':
                    t = l.tail;
                    for (var e = null; t !== null; )
                        (t.alternate !== null && (e = t), (t = t.sibling));
                    e === null ? (l.tail = null) : (e.sibling = null);
                    break;
                case 'collapsed':
                    e = l.tail;
                    for (var a = null; e !== null; )
                        (e.alternate !== null && (a = e), (e = e.sibling));
                    a === null
                        ? t || l.tail === null
                            ? (l.tail = null)
                            : (l.tail.sibling = null)
                        : (a.sibling = null);
            }
    }
    function Ol(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            e = 0,
            a = 0;
        if (t)
            for (var u = l.child; u !== null; )
                ((e |= u.lanes | u.childLanes),
                    (a |= u.subtreeFlags & 65011712),
                    (a |= u.flags & 65011712),
                    (u.return = l),
                    (u = u.sibling));
        else
            for (u = l.child; u !== null; )
                ((e |= u.lanes | u.childLanes),
                    (a |= u.subtreeFlags),
                    (a |= u.flags),
                    (u.return = l),
                    (u = u.sibling));
        return ((l.subtreeFlags |= a), (l.childLanes = e), t);
    }
    function Wh(l, t, e) {
        var a = t.pendingProps;
        switch ((Ei(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Ol(t), null);
            case 1:
                return (Ol(t), null);
            case 3:
                return (
                    (e = t.stateNode),
                    (a = null),
                    l !== null && (a = l.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Lt(Rl),
                    Cl(),
                    e.pendingContext &&
                        ((e.context = e.pendingContext),
                        (e.pendingContext = null)),
                    (l === null || l.child === null) &&
                        (na(t)
                            ? Vt(t)
                            : l === null ||
                              (l.memoizedState.isDehydrated &&
                                  (t.flags & 256) === 0) ||
                              ((t.flags |= 1024), Oi())),
                    Ol(t),
                    null
                );
            case 26:
                var u = t.type,
                    n = t.memoizedState;
                return (
                    l === null
                        ? (Vt(t),
                          n !== null
                              ? (Ol(t), Gr(t, n))
                              : (Ol(t), gc(t, u, null, a, e)))
                        : n
                          ? n !== l.memoizedState
                              ? (Vt(t), Ol(t), Gr(t, n))
                              : (Ol(t), (t.flags &= -16777217))
                          : ((l = l.memoizedProps),
                            l !== a && Vt(t),
                            Ol(t),
                            gc(t, u, l, a, e)),
                    null
                );
            case 27:
                if (
                    (Tu(t),
                    (e = tl.current),
                    (u = t.type),
                    l !== null && t.stateNode != null)
                )
                    l.memoizedProps !== a && Vt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(h(166));
                        return (Ol(t), null);
                    }
                    ((l = U.current),
                        na(t)
                            ? Ss(t)
                            : ((l = Jo(u, a, e)), (t.stateNode = l), Vt(t)));
                }
                return (Ol(t), null);
            case 5:
                if ((Tu(t), (u = t.type), l !== null && t.stateNode != null))
                    l.memoizedProps !== a && Vt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(h(166));
                        return (Ol(t), null);
                    }
                    if (((n = U.current), na(t))) Ss(t);
                    else {
                        var i = On(tl.current);
                        switch (n) {
                            case 1:
                                n = i.createElementNS(
                                    'http://www.w3.org/2000/svg',
                                    u,
                                );
                                break;
                            case 2:
                                n = i.createElementNS(
                                    'http://www.w3.org/1998/Math/MathML',
                                    u,
                                );
                                break;
                            default:
                                switch (u) {
                                    case 'svg':
                                        n = i.createElementNS(
                                            'http://www.w3.org/2000/svg',
                                            u,
                                        );
                                        break;
                                    case 'math':
                                        n = i.createElementNS(
                                            'http://www.w3.org/1998/Math/MathML',
                                            u,
                                        );
                                        break;
                                    case 'script':
                                        ((n = i.createElement('div')),
                                            (n.innerHTML =
                                                '<script><\/script>'),
                                            (n = n.removeChild(n.firstChild)));
                                        break;
                                    case 'select':
                                        ((n =
                                            typeof a.is == 'string'
                                                ? i.createElement('select', {
                                                      is: a.is,
                                                  })
                                                : i.createElement('select')),
                                            a.multiple
                                                ? (n.multiple = !0)
                                                : a.size && (n.size = a.size));
                                        break;
                                    default:
                                        n =
                                            typeof a.is == 'string'
                                                ? i.createElement(u, {is: a.is})
                                                : i.createElement(u);
                                }
                        }
                        ((n[Vl] = t), (n[lt] = a));
                        l: for (i = t.child; i !== null; ) {
                            if (i.tag === 5 || i.tag === 6)
                                n.appendChild(i.stateNode);
                            else if (
                                i.tag !== 4 &&
                                i.tag !== 27 &&
                                i.child !== null
                            ) {
                                ((i.child.return = i), (i = i.child));
                                continue;
                            }
                            if (i === t) break l;
                            for (; i.sibling === null; ) {
                                if (i.return === null || i.return === t)
                                    break l;
                                i = i.return;
                            }
                            ((i.sibling.return = i.return), (i = i.sibling));
                        }
                        t.stateNode = n;
                        l: switch ((Wl(n, u, a), u)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                a = !!a.autoFocus;
                                break l;
                            case 'img':
                                a = !0;
                                break l;
                            default:
                                a = !1;
                        }
                        a && Vt(t);
                    }
                }
                return (
                    Ol(t),
                    gc(
                        t,
                        t.type,
                        l === null ? null : l.memoizedProps,
                        t.pendingProps,
                        e,
                    ),
                    null
                );
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== a && Vt(t);
                else {
                    if (typeof a != 'string' && t.stateNode === null)
                        throw Error(h(166));
                    if (((l = tl.current), na(t))) {
                        if (
                            ((l = t.stateNode),
                            (e = t.memoizedProps),
                            (a = null),
                            (u = Kl),
                            u !== null)
                        )
                            switch (u.tag) {
                                case 27:
                                case 5:
                                    a = u.memoizedProps;
                            }
                        ((l[Vl] = t),
                            (l = !!(
                                l.nodeValue === e ||
                                (a !== null &&
                                    a.suppressHydrationWarning === !0) ||
                                Ro(l.nodeValue, e)
                            )),
                            l || ae(t, !0));
                    } else
                        ((l = On(l).createTextNode(a)),
                            (l[Vl] = t),
                            (t.stateNode = l));
                }
                return (Ol(t), null);
            case 31:
                if (
                    ((e = t.memoizedState),
                    l === null || l.memoizedState !== null)
                ) {
                    if (((a = na(t)), e !== null)) {
                        if (l === null) {
                            if (!a) throw Error(h(318));
                            if (
                                ((l = t.memoizedState),
                                (l = l !== null ? l.dehydrated : null),
                                !l)
                            )
                                throw Error(h(557));
                            l[Vl] = t;
                        } else
                            (De(),
                                (t.flags & 128) === 0 &&
                                    (t.memoizedState = null),
                                (t.flags |= 4));
                        (Ol(t), (l = !1));
                    } else
                        ((e = Oi()),
                            l !== null &&
                                l.memoizedState !== null &&
                                (l.memoizedState.hydrationErrors = e),
                            (l = !0));
                    if (!l) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
                    if ((t.flags & 128) !== 0) throw Error(h(558));
                }
                return (Ol(t), null);
            case 13:
                if (
                    ((a = t.memoizedState),
                    l === null ||
                        (l.memoizedState !== null &&
                            l.memoizedState.dehydrated !== null))
                ) {
                    if (((u = na(t)), a !== null && a.dehydrated !== null)) {
                        if (l === null) {
                            if (!u) throw Error(h(318));
                            if (
                                ((u = t.memoizedState),
                                (u = u !== null ? u.dehydrated : null),
                                !u)
                            )
                                throw Error(h(317));
                            u[Vl] = t;
                        } else
                            (De(),
                                (t.flags & 128) === 0 &&
                                    (t.memoizedState = null),
                                (t.flags |= 4));
                        (Ol(t), (u = !1));
                    } else
                        ((u = Oi()),
                            l !== null &&
                                l.memoizedState !== null &&
                                (l.memoizedState.hydrationErrors = u),
                            (u = !0));
                    if (!u) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
                }
                return (
                    ht(t),
                    (t.flags & 128) !== 0
                        ? ((t.lanes = e), t)
                        : ((e = a !== null),
                          (l = l !== null && l.memoizedState !== null),
                          e &&
                              ((a = t.child),
                              (u = null),
                              a.alternate !== null &&
                                  a.alternate.memoizedState !== null &&
                                  a.alternate.memoizedState.cachePool !==
                                      null &&
                                  (u =
                                      a.alternate.memoizedState.cachePool.pool),
                              (n = null),
                              a.memoizedState !== null &&
                                  a.memoizedState.cachePool !== null &&
                                  (n = a.memoizedState.cachePool.pool),
                              n !== u && (a.flags |= 2048)),
                          e !== l && e && (t.child.flags |= 8192),
                          dn(t, t.updateQueue),
                          Ol(t),
                          null)
                );
            case 4:
                return (
                    Cl(),
                    l === null && Gc(t.stateNode.containerInfo),
                    Ol(t),
                    null
                );
            case 10:
                return (Lt(t.type), Ol(t), null);
            case 19:
                if ((T(Ul), (a = t.memoizedState), a === null))
                    return (Ol(t), null);
                if (
                    ((u = (t.flags & 128) !== 0), (n = a.rendering), n === null)
                )
                    if (u) eu(a, !1);
                    else {
                        if (Dl !== 0 || (l !== null && (l.flags & 128) !== 0))
                            for (l = t.child; l !== null; ) {
                                if (((n = Iu(l)), n !== null)) {
                                    for (
                                        t.flags |= 128,
                                            eu(a, !1),
                                            l = n.updateQueue,
                                            t.updateQueue = l,
                                            dn(t, l),
                                            t.subtreeFlags = 0,
                                            l = e,
                                            e = t.child;
                                        e !== null;
                                    )
                                        (hs(e, l), (e = e.sibling));
                                    return (
                                        M(Ul, (Ul.current & 1) | 2),
                                        cl && Yt(t, a.treeForkCount),
                                        t.child
                                    );
                                }
                                l = l.sibling;
                            }
                        a.tail !== null &&
                            ct() > gn &&
                            ((t.flags |= 128),
                            (u = !0),
                            eu(a, !1),
                            (t.lanes = 4194304));
                    }
                else {
                    if (!u)
                        if (((l = Iu(n)), l !== null)) {
                            if (
                                ((t.flags |= 128),
                                (u = !0),
                                (l = l.updateQueue),
                                (t.updateQueue = l),
                                dn(t, l),
                                eu(a, !0),
                                a.tail === null &&
                                    a.tailMode === 'hidden' &&
                                    !n.alternate &&
                                    !cl)
                            )
                                return (Ol(t), null);
                        } else
                            2 * ct() - a.renderingStartTime > gn &&
                                e !== 536870912 &&
                                ((t.flags |= 128),
                                (u = !0),
                                eu(a, !1),
                                (t.lanes = 4194304));
                    a.isBackwards
                        ? ((n.sibling = t.child), (t.child = n))
                        : ((l = a.last),
                          l !== null ? (l.sibling = n) : (t.child = n),
                          (a.last = n));
                }
                return a.tail !== null
                    ? ((l = a.tail),
                      (a.rendering = l),
                      (a.tail = l.sibling),
                      (a.renderingStartTime = ct()),
                      (l.sibling = null),
                      (e = Ul.current),
                      M(Ul, u ? (e & 1) | 2 : e & 1),
                      cl && Yt(t, a.treeForkCount),
                      l)
                    : (Ol(t), null);
            case 22:
            case 23:
                return (
                    ht(t),
                    Li(),
                    (a = t.memoizedState !== null),
                    l !== null
                        ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
                        : a && (t.flags |= 8192),
                    a
                        ? (e & 536870912) !== 0 &&
                          (t.flags & 128) === 0 &&
                          (Ol(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Ol(t),
                    (e = t.updateQueue),
                    e !== null && dn(t, e.retryQueue),
                    (e = null),
                    l !== null &&
                        l.memoizedState !== null &&
                        l.memoizedState.cachePool !== null &&
                        (e = l.memoizedState.cachePool.pool),
                    (a = null),
                    t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (a = t.memoizedState.cachePool.pool),
                    a !== e && (t.flags |= 2048),
                    l !== null && T(He),
                    null
                );
            case 24:
                return (
                    (e = null),
                    l !== null && (e = l.memoizedState.cache),
                    t.memoizedState.cache !== e && (t.flags |= 2048),
                    Lt(Rl),
                    Ol(t),
                    null
                );
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(h(156, t.tag));
    }
    function kh(l, t) {
        switch ((Ei(t), t.tag)) {
            case 1:
                return (
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 3:
                return (
                    Lt(Rl),
                    Cl(),
                    (l = t.flags),
                    (l & 65536) !== 0 && (l & 128) === 0
                        ? ((t.flags = (l & -65537) | 128), t)
                        : null
                );
            case 26:
            case 27:
            case 5:
                return (Tu(t), null);
            case 31:
                if (t.memoizedState !== null) {
                    if ((ht(t), t.alternate === null)) throw Error(h(340));
                    De();
                }
                return (
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 13:
                if (
                    (ht(t),
                    (l = t.memoizedState),
                    l !== null && l.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(h(340));
                    De();
                }
                return (
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 19:
                return (T(Ul), null);
            case 4:
                return (Cl(), null);
            case 10:
                return (Lt(t.type), null);
            case 22:
            case 23:
                return (
                    ht(t),
                    Li(),
                    l !== null && T(He),
                    (l = t.flags),
                    l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
                );
            case 24:
                return (Lt(Rl), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Lr(l, t) {
        switch ((Ei(t), t.tag)) {
            case 3:
                (Lt(Rl), Cl());
                break;
            case 26:
            case 27:
            case 5:
                Tu(t);
                break;
            case 4:
                Cl();
                break;
            case 31:
                t.memoizedState !== null && ht(t);
                break;
            case 13:
                ht(t);
                break;
            case 19:
                T(Ul);
                break;
            case 10:
                Lt(t.type);
                break;
            case 22:
            case 23:
                (ht(t), Li(), l !== null && T(He));
                break;
            case 24:
                Lt(Rl);
        }
    }
    function au(l, t) {
        try {
            var e = t.updateQueue,
                a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var n = e.create,
                            i = e.inst;
                        ((a = n()), (i.destroy = a));
                    }
                    e = e.next;
                } while (e !== u);
            }
        } catch (c) {
            bl(t, t.return, c);
        }
    }
    function re(l, t, e) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var i = a.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            ((i.destroy = void 0), (u = t));
                            var s = e,
                                y = c;
                            try {
                                y();
                            } catch (b) {
                                bl(u, s, b);
                            }
                        }
                    }
                    a = a.next;
                } while (a !== n);
            }
        } catch (b) {
            bl(t, t.return, b);
        }
    }
    function Qr(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Ds(t, e);
            } catch (a) {
                bl(l, l.return, a);
            }
        }
    }
    function Xr(l, t, e) {
        ((e.props = Ge(l.type, l.memoizedProps)), (e.state = l.memoizedState));
        try {
            e.componentWillUnmount();
        } catch (a) {
            bl(l, t, a);
        }
    }
    function uu(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = l.stateNode;
                        break;
                    case 30:
                        a = l.stateNode;
                        break;
                    default:
                        a = l.stateNode;
                }
                typeof e == 'function'
                    ? (l.refCleanup = e(a))
                    : (e.current = a);
            }
        } catch (u) {
            bl(l, t, u);
        }
    }
    function Ct(l, t) {
        var e = l.ref,
            a = l.refCleanup;
        if (e !== null)
            if (typeof a == 'function')
                try {
                    a();
                } catch (u) {
                    bl(l, t, u);
                } finally {
                    ((l.refCleanup = null),
                        (l = l.alternate),
                        l != null && (l.refCleanup = null));
                }
            else if (typeof e == 'function')
                try {
                    e(null);
                } catch (u) {
                    bl(l, t, u);
                }
            else e.current = null;
    }
    function Zr(l) {
        var t = l.type,
            e = l.memoizedProps,
            a = l.stateNode;
        try {
            l: switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    e.autoFocus && a.focus();
                    break l;
                case 'img':
                    e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
            }
        } catch (u) {
            bl(l, l.return, u);
        }
    }
    function Sc(l, t, e) {
        try {
            var a = l.stateNode;
            (g0(a, l.type, e, t), (a[lt] = t));
        } catch (u) {
            bl(l, l.return, u);
        }
    }
    function Vr(l) {
        return (
            l.tag === 5 ||
            l.tag === 3 ||
            l.tag === 26 ||
            (l.tag === 27 && ge(l.type)) ||
            l.tag === 4
        );
    }
    function pc(l) {
        l: for (;;) {
            for (; l.sibling === null; ) {
                if (l.return === null || Vr(l.return)) return null;
                l = l.return;
            }
            for (
                l.sibling.return = l.return, l = l.sibling;
                l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
            ) {
                if (
                    (l.tag === 27 && ge(l.type)) ||
                    l.flags & 2 ||
                    l.child === null ||
                    l.tag === 4
                )
                    continue l;
                ((l.child.return = l), (l = l.child));
            }
            if (!(l.flags & 2)) return l.stateNode;
        }
    }
    function bc(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            ((l = l.stateNode),
                t
                    ? (e.nodeType === 9
                          ? e.body
                          : e.nodeName === 'HTML'
                            ? e.ownerDocument.body
                            : e
                      ).insertBefore(l, t)
                    : ((t =
                          e.nodeType === 9
                              ? e.body
                              : e.nodeName === 'HTML'
                                ? e.ownerDocument.body
                                : e),
                      t.appendChild(l),
                      (e = e._reactRootContainer),
                      e != null || t.onclick !== null || (t.onclick = Bt)));
        else if (
            a !== 4 &&
            (a === 27 && ge(l.type) && ((e = l.stateNode), (t = null)),
            (l = l.child),
            l !== null)
        )
            for (bc(l, t, e), l = l.sibling; l !== null; )
                (bc(l, t, e), (l = l.sibling));
    }
    function hn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            ((l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l));
        else if (
            a !== 4 &&
            (a === 27 && ge(l.type) && (e = l.stateNode),
            (l = l.child),
            l !== null)
        )
            for (hn(l, t, e), l = l.sibling; l !== null; )
                (hn(l, t, e), (l = l.sibling));
    }
    function Kr(l) {
        var t = l.stateNode,
            e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length; )
                t.removeAttributeNode(u[0]);
            (Wl(t, a, e), (t[Vl] = l), (t[lt] = e));
        } catch (n) {
            bl(l, l.return, n);
        }
    }
    var Kt = !1,
        Gl = !1,
        xc = !1,
        wr = typeof WeakSet == 'function' ? WeakSet : Set,
        Zl = null;
    function $h(l, t) {
        if (((l = l.containerInfo), (Xc = Hn), (l = us(l)), mi(l))) {
            if ('selectionStart' in l)
                var e = {start: l.selectionStart, end: l.selectionEnd};
            else
                l: {
                    e = ((e = l.ownerDocument) && e.defaultView) || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var u = a.anchorOffset,
                            n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            (e.nodeType, n.nodeType);
                        } catch {
                            e = null;
                            break l;
                        }
                        var i = 0,
                            c = -1,
                            s = -1,
                            y = 0,
                            b = 0,
                            A = l,
                            v = null;
                        t: for (;;) {
                            for (
                                var g;
                                A !== e ||
                                    (u !== 0 && A.nodeType !== 3) ||
                                    (c = i + u),
                                    A !== n ||
                                        (a !== 0 && A.nodeType !== 3) ||
                                        (s = i + a),
                                    A.nodeType === 3 &&
                                        (i += A.nodeValue.length),
                                    (g = A.firstChild) !== null;
                            )
                                ((v = A), (A = g));
                            for (;;) {
                                if (A === l) break t;
                                if (
                                    (v === e && ++y === u && (c = i),
                                    v === n && ++b === a && (s = i),
                                    (g = A.nextSibling) !== null)
                                )
                                    break;
                                ((A = v), (v = A.parentNode));
                            }
                            A = g;
                        }
                        e = c === -1 || s === -1 ? null : {start: c, end: s};
                    } else e = null;
                }
            e = e || {start: 0, end: 0};
        } else e = null;
        for (
            Zc = {focusedElem: l, selectionRange: e}, Hn = !1, Zl = t;
            Zl !== null;
        )
            if (
                ((t = Zl),
                (l = t.child),
                (t.subtreeFlags & 1028) !== 0 && l !== null)
            )
                ((l.return = t), (Zl = l));
            else
                for (; Zl !== null; ) {
                    switch (
                        ((t = Zl), (n = t.alternate), (l = t.flags), t.tag)
                    ) {
                        case 0:
                            if (
                                (l & 4) !== 0 &&
                                ((l = t.updateQueue),
                                (l = l !== null ? l.events : null),
                                l !== null)
                            )
                                for (e = 0; e < l.length; e++)
                                    ((u = l[e]), (u.ref.impl = u.nextImpl));
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && n !== null) {
                                ((l = void 0),
                                    (e = t),
                                    (u = n.memoizedProps),
                                    (n = n.memoizedState),
                                    (a = e.stateNode));
                                try {
                                    var C = Ge(e.type, u);
                                    ((l = a.getSnapshotBeforeUpdate(C, n)),
                                        (a.__reactInternalSnapshotBeforeUpdate =
                                            l));
                                } catch (L) {
                                    bl(e, e.return, L);
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (
                                    ((l = t.stateNode.containerInfo),
                                    (e = l.nodeType),
                                    e === 9)
                                )
                                    wc(l);
                                else if (e === 1)
                                    switch (l.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            wc(l);
                                            break;
                                        default:
                                            l.textContent = '';
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
                            if ((l & 1024) !== 0) throw Error(h(163));
                    }
                    if (((l = t.sibling), l !== null)) {
                        ((l.return = t.return), (Zl = l));
                        break;
                    }
                    Zl = t.return;
                }
    }
    function Jr(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (Jt(l, e), a & 4 && au(5, e));
                break;
            case 1:
                if ((Jt(l, e), a & 4))
                    if (((l = e.stateNode), t === null))
                        try {
                            l.componentDidMount();
                        } catch (i) {
                            bl(e, e.return, i);
                        }
                    else {
                        var u = Ge(e.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(
                                u,
                                t,
                                l.__reactInternalSnapshotBeforeUpdate,
                            );
                        } catch (i) {
                            bl(e, e.return, i);
                        }
                    }
                (a & 64 && Qr(e), a & 512 && uu(e, e.return));
                break;
            case 3:
                if ((Jt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
                    if (((t = null), e.child !== null))
                        switch (e.child.tag) {
                            case 27:
                            case 5:
                                t = e.child.stateNode;
                                break;
                            case 1:
                                t = e.child.stateNode;
                        }
                    try {
                        Ds(l, t);
                    } catch (i) {
                        bl(e, e.return, i);
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Kr(e);
            case 26:
            case 5:
                (Jt(l, e),
                    t === null && a & 4 && Zr(e),
                    a & 512 && uu(e, e.return));
                break;
            case 12:
                Jt(l, e);
                break;
            case 31:
                (Jt(l, e), a & 4 && $r(l, e));
                break;
            case 13:
                (Jt(l, e),
                    a & 4 && Fr(l, e),
                    a & 64 &&
                        ((l = e.memoizedState),
                        l !== null &&
                            ((l = l.dehydrated),
                            l !== null && ((e = n0.bind(null, e)), E0(l, e)))));
                break;
            case 22:
                if (((a = e.memoizedState !== null || Kt), !a)) {
                    ((t = (t !== null && t.memoizedState !== null) || Gl),
                        (u = Kt));
                    var n = Gl;
                    ((Kt = a),
                        (Gl = t) && !n
                            ? Wt(l, e, (e.subtreeFlags & 8772) !== 0)
                            : Jt(l, e),
                        (Kt = u),
                        (Gl = n));
                }
                break;
            case 30:
                break;
            default:
                Jt(l, e);
        }
    }
    function Wr(l) {
        var t = l.alternate;
        (t !== null && ((l.alternate = null), Wr(t)),
            (l.child = null),
            (l.deletions = null),
            (l.sibling = null),
            l.tag === 5 && ((t = l.stateNode), t !== null && Fn(t)),
            (l.stateNode = null),
            (l.return = null),
            (l.dependencies = null),
            (l.memoizedProps = null),
            (l.memoizedState = null),
            (l.pendingProps = null),
            (l.stateNode = null),
            (l.updateQueue = null));
    }
    var Nl = null,
        et = !1;
    function wt(l, t, e) {
        for (e = e.child; e !== null; ) (kr(l, t, e), (e = e.sibling));
    }
    function kr(l, t, e) {
        if (ft && typeof ft.onCommitFiberUnmount == 'function')
            try {
                ft.onCommitFiberUnmount(Na, e);
            } catch {}
        switch (e.tag) {
            case 26:
                (Gl || Ct(e, t),
                    wt(l, t, e),
                    e.memoizedState
                        ? e.memoizedState.count--
                        : e.stateNode &&
                          ((e = e.stateNode), e.parentNode.removeChild(e)));
                break;
            case 27:
                Gl || Ct(e, t);
                var a = Nl,
                    u = et;
                (ge(e.type) && ((Nl = e.stateNode), (et = !1)),
                    wt(l, t, e),
                    hu(e.stateNode),
                    (Nl = a),
                    (et = u));
                break;
            case 5:
                Gl || Ct(e, t);
            case 6:
                if (
                    ((a = Nl),
                    (u = et),
                    (Nl = null),
                    wt(l, t, e),
                    (Nl = a),
                    (et = u),
                    Nl !== null)
                )
                    if (et)
                        try {
                            (Nl.nodeType === 9
                                ? Nl.body
                                : Nl.nodeName === 'HTML'
                                  ? Nl.ownerDocument.body
                                  : Nl
                            ).removeChild(e.stateNode);
                        } catch (n) {
                            bl(e, t, n);
                        }
                    else
                        try {
                            Nl.removeChild(e.stateNode);
                        } catch (n) {
                            bl(e, t, n);
                        }
                break;
            case 18:
                Nl !== null &&
                    (et
                        ? ((l = Nl),
                          Xo(
                              l.nodeType === 9
                                  ? l.body
                                  : l.nodeName === 'HTML'
                                    ? l.ownerDocument.body
                                    : l,
                              e.stateNode,
                          ),
                          ja(l))
                        : Xo(Nl, e.stateNode));
                break;
            case 4:
                ((a = Nl),
                    (u = et),
                    (Nl = e.stateNode.containerInfo),
                    (et = !0),
                    wt(l, t, e),
                    (Nl = a),
                    (et = u));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (re(2, e, t), Gl || re(4, e, t), wt(l, t, e));
                break;
            case 1:
                (Gl ||
                    (Ct(e, t),
                    (a = e.stateNode),
                    typeof a.componentWillUnmount == 'function' && Xr(e, t, a)),
                    wt(l, t, e));
                break;
            case 21:
                wt(l, t, e);
                break;
            case 22:
                ((Gl = (a = Gl) || e.memoizedState !== null),
                    wt(l, t, e),
                    (Gl = a));
                break;
            default:
                wt(l, t, e);
        }
    }
    function $r(l, t) {
        if (
            t.memoizedState === null &&
            ((l = t.alternate),
            l !== null && ((l = l.memoizedState), l !== null))
        ) {
            l = l.dehydrated;
            try {
                ja(l);
            } catch (e) {
                bl(t, t.return, e);
            }
        }
    }
    function Fr(l, t) {
        if (
            t.memoizedState === null &&
            ((l = t.alternate),
            l !== null &&
                ((l = l.memoizedState),
                l !== null && ((l = l.dehydrated), l !== null)))
        )
            try {
                ja(l);
            } catch (e) {
                bl(t, t.return, e);
            }
    }
    function Fh(l) {
        switch (l.tag) {
            case 31:
            case 13:
            case 19:
                var t = l.stateNode;
                return (t === null && (t = l.stateNode = new wr()), t);
            case 22:
                return (
                    (l = l.stateNode),
                    (t = l._retryCache),
                    t === null && (t = l._retryCache = new wr()),
                    t
                );
            default:
                throw Error(h(435, l.tag));
        }
    }
    function mn(l, t) {
        var e = Fh(l);
        t.forEach(function (a) {
            if (!e.has(a)) {
                e.add(a);
                var u = i0.bind(null, l, a);
                a.then(u, u);
            }
        });
    }
    function at(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a],
                    n = l,
                    i = t,
                    c = i;
                l: for (; c !== null; ) {
                    switch (c.tag) {
                        case 27:
                            if (ge(c.type)) {
                                ((Nl = c.stateNode), (et = !1));
                                break l;
                            }
                            break;
                        case 5:
                            ((Nl = c.stateNode), (et = !1));
                            break l;
                        case 3:
                        case 4:
                            ((Nl = c.stateNode.containerInfo), (et = !0));
                            break l;
                    }
                    c = c.return;
                }
                if (Nl === null) throw Error(h(160));
                (kr(n, i, u),
                    (Nl = null),
                    (et = !1),
                    (n = u.alternate),
                    n !== null && (n.return = null),
                    (u.return = null));
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; ) (Ir(t, l), (t = t.sibling));
    }
    var Nt = null;
    function Ir(l, t) {
        var e = l.alternate,
            a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (at(t, l),
                    ut(l),
                    a & 4 &&
                        (re(3, l, l.return), au(3, l), re(5, l, l.return)));
                break;
            case 1:
                (at(t, l),
                    ut(l),
                    a & 512 && (Gl || e === null || Ct(e, e.return)),
                    a & 64 &&
                        Kt &&
                        ((l = l.updateQueue),
                        l !== null &&
                            ((a = l.callbacks),
                            a !== null &&
                                ((e = l.shared.hiddenCallbacks),
                                (l.shared.hiddenCallbacks =
                                    e === null ? a : e.concat(a))))));
                break;
            case 26:
                var u = Nt;
                if (
                    (at(t, l),
                    ut(l),
                    a & 512 && (Gl || e === null || Ct(e, e.return)),
                    a & 4)
                ) {
                    var n = e !== null ? e.memoizedState : null;
                    if (((a = l.memoizedState), e === null))
                        if (a === null)
                            if (l.stateNode === null) {
                                l: {
                                    ((a = l.type),
                                        (e = l.memoizedProps),
                                        (u = u.ownerDocument || u));
                                    t: switch (a) {
                                        case 'title':
                                            ((n =
                                                u.getElementsByTagName(
                                                    'title',
                                                )[0]),
                                                (!n ||
                                                    n[Da] ||
                                                    n[Vl] ||
                                                    n.namespaceURI ===
                                                        'http://www.w3.org/2000/svg' ||
                                                    n.hasAttribute(
                                                        'itemprop',
                                                    )) &&
                                                    ((n = u.createElement(a)),
                                                    u.head.insertBefore(
                                                        n,
                                                        u.querySelector(
                                                            'head > title',
                                                        ),
                                                    )),
                                                Wl(n, a, e),
                                                (n[Vl] = l),
                                                Xl(n),
                                                (a = n));
                                            break l;
                                        case 'link':
                                            var i = Po('link', 'href', u).get(
                                                a + (e.href || ''),
                                            );
                                            if (i) {
                                                for (
                                                    var c = 0;
                                                    c < i.length;
                                                    c++
                                                )
                                                    if (
                                                        ((n = i[c]),
                                                        n.getAttribute(
                                                            'href',
                                                        ) ===
                                                            (e.href == null ||
                                                            e.href === ''
                                                                ? null
                                                                : e.href) &&
                                                            n.getAttribute(
                                                                'rel',
                                                            ) ===
                                                                (e.rel == null
                                                                    ? null
                                                                    : e.rel) &&
                                                            n.getAttribute(
                                                                'title',
                                                            ) ===
                                                                (e.title == null
                                                                    ? null
                                                                    : e.title) &&
                                                            n.getAttribute(
                                                                'crossorigin',
                                                            ) ===
                                                                (e.crossOrigin ==
                                                                null
                                                                    ? null
                                                                    : e.crossOrigin))
                                                    ) {
                                                        i.splice(c, 1);
                                                        break t;
                                                    }
                                            }
                                            ((n = u.createElement(a)),
                                                Wl(n, a, e),
                                                u.head.appendChild(n));
                                            break;
                                        case 'meta':
                                            if (
                                                (i = Po(
                                                    'meta',
                                                    'content',
                                                    u,
                                                ).get(a + (e.content || '')))
                                            ) {
                                                for (c = 0; c < i.length; c++)
                                                    if (
                                                        ((n = i[c]),
                                                        n.getAttribute(
                                                            'content',
                                                        ) ===
                                                            (e.content == null
                                                                ? null
                                                                : '' +
                                                                  e.content) &&
                                                            n.getAttribute(
                                                                'name',
                                                            ) ===
                                                                (e.name == null
                                                                    ? null
                                                                    : e.name) &&
                                                            n.getAttribute(
                                                                'property',
                                                            ) ===
                                                                (e.property ==
                                                                null
                                                                    ? null
                                                                    : e.property) &&
                                                            n.getAttribute(
                                                                'http-equiv',
                                                            ) ===
                                                                (e.httpEquiv ==
                                                                null
                                                                    ? null
                                                                    : e.httpEquiv) &&
                                                            n.getAttribute(
                                                                'charset',
                                                            ) ===
                                                                (e.charSet ==
                                                                null
                                                                    ? null
                                                                    : e.charSet))
                                                    ) {
                                                        i.splice(c, 1);
                                                        break t;
                                                    }
                                            }
                                            ((n = u.createElement(a)),
                                                Wl(n, a, e),
                                                u.head.appendChild(n));
                                            break;
                                        default:
                                            throw Error(h(468, a));
                                    }
                                    ((n[Vl] = l), Xl(n), (a = n));
                                }
                                l.stateNode = a;
                            } else ld(u, l.type, l.stateNode);
                        else l.stateNode = Io(u, a, l.memoizedProps);
                    else
                        n !== a
                            ? (n === null
                                  ? e.stateNode !== null &&
                                    ((e = e.stateNode),
                                    e.parentNode.removeChild(e))
                                  : n.count--,
                              a === null
                                  ? ld(u, l.type, l.stateNode)
                                  : Io(u, a, l.memoizedProps))
                            : a === null &&
                              l.stateNode !== null &&
                              Sc(l, l.memoizedProps, e.memoizedProps);
                }
                break;
            case 27:
                (at(t, l),
                    ut(l),
                    a & 512 && (Gl || e === null || Ct(e, e.return)),
                    e !== null &&
                        a & 4 &&
                        Sc(l, l.memoizedProps, e.memoizedProps));
                break;
            case 5:
                if (
                    (at(t, l),
                    ut(l),
                    a & 512 && (Gl || e === null || Ct(e, e.return)),
                    l.flags & 32)
                ) {
                    u = l.stateNode;
                    try {
                        ke(u, '');
                    } catch (C) {
                        bl(l, l.return, C);
                    }
                }
                (a & 4 &&
                    l.stateNode != null &&
                    ((u = l.memoizedProps),
                    Sc(l, u, e !== null ? e.memoizedProps : u)),
                    a & 1024 && (xc = !0));
                break;
            case 6:
                if ((at(t, l), ut(l), a & 4)) {
                    if (l.stateNode === null) throw Error(h(162));
                    ((a = l.memoizedProps), (e = l.stateNode));
                    try {
                        e.nodeValue = a;
                    } catch (C) {
                        bl(l, l.return, C);
                    }
                }
                break;
            case 3:
                if (
                    ((_n = null),
                    (u = Nt),
                    (Nt = Nn(t.containerInfo)),
                    at(t, l),
                    (Nt = u),
                    ut(l),
                    a & 4 && e !== null && e.memoizedState.isDehydrated)
                )
                    try {
                        ja(t.containerInfo);
                    } catch (C) {
                        bl(l, l.return, C);
                    }
                xc && ((xc = !1), Pr(l));
                break;
            case 4:
                ((a = Nt),
                    (Nt = Nn(l.stateNode.containerInfo)),
                    at(t, l),
                    ut(l),
                    (Nt = a));
                break;
            case 12:
                (at(t, l), ut(l));
                break;
            case 31:
                (at(t, l),
                    ut(l),
                    a & 4 &&
                        ((a = l.updateQueue),
                        a !== null && ((l.updateQueue = null), mn(l, a))));
                break;
            case 13:
                (at(t, l),
                    ut(l),
                    l.child.flags & 8192 &&
                        (l.memoizedState !== null) !=
                            (e !== null && e.memoizedState !== null) &&
                        (vn = ct()),
                    a & 4 &&
                        ((a = l.updateQueue),
                        a !== null && ((l.updateQueue = null), mn(l, a))));
                break;
            case 22:
                u = l.memoizedState !== null;
                var s = e !== null && e.memoizedState !== null,
                    y = Kt,
                    b = Gl;
                if (
                    ((Kt = y || u),
                    (Gl = b || s),
                    at(t, l),
                    (Gl = b),
                    (Kt = y),
                    ut(l),
                    a & 8192)
                )
                    l: for (
                        t = l.stateNode,
                            t._visibility = u
                                ? t._visibility & -2
                                : t._visibility | 1,
                            u && (e === null || s || Kt || Gl || Le(l)),
                            e = null,
                            t = l;
                        ;
                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (e === null) {
                                s = e = t;
                                try {
                                    if (((n = s.stateNode), u))
                                        ((i = n.style),
                                            typeof i.setProperty == 'function'
                                                ? i.setProperty(
                                                      'display',
                                                      'none',
                                                      'important',
                                                  )
                                                : (i.display = 'none'));
                                    else {
                                        c = s.stateNode;
                                        var A = s.memoizedProps.style,
                                            v =
                                                A != null &&
                                                A.hasOwnProperty('display')
                                                    ? A.display
                                                    : null;
                                        c.style.display =
                                            v == null || typeof v == 'boolean'
                                                ? ''
                                                : ('' + v).trim();
                                    }
                                } catch (C) {
                                    bl(s, s.return, C);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (e === null) {
                                s = t;
                                try {
                                    s.stateNode.nodeValue = u
                                        ? ''
                                        : s.memoizedProps;
                                } catch (C) {
                                    bl(s, s.return, C);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (e === null) {
                                s = t;
                                try {
                                    var g = s.stateNode;
                                    u ? Zo(g, !0) : Zo(s.stateNode, !1);
                                } catch (C) {
                                    bl(s, s.return, C);
                                }
                            }
                        } else if (
                            ((t.tag !== 22 && t.tag !== 23) ||
                                t.memoizedState === null ||
                                t === l) &&
                            t.child !== null
                        ) {
                            ((t.child.return = t), (t = t.child));
                            continue;
                        }
                        if (t === l) break l;
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === l) break l;
                            (e === t && (e = null), (t = t.return));
                        }
                        (e === t && (e = null),
                            (t.sibling.return = t.return),
                            (t = t.sibling));
                    }
                a & 4 &&
                    ((a = l.updateQueue),
                    a !== null &&
                        ((e = a.retryQueue),
                        e !== null && ((a.retryQueue = null), mn(l, e))));
                break;
            case 19:
                (at(t, l),
                    ut(l),
                    a & 4 &&
                        ((a = l.updateQueue),
                        a !== null && ((l.updateQueue = null), mn(l, a))));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                (at(t, l), ut(l));
        }
    }
    function ut(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null; ) {
                    if (Vr(a)) {
                        e = a;
                        break;
                    }
                    a = a.return;
                }
                if (e == null) throw Error(h(160));
                switch (e.tag) {
                    case 27:
                        var u = e.stateNode,
                            n = pc(l);
                        hn(l, n, u);
                        break;
                    case 5:
                        var i = e.stateNode;
                        e.flags & 32 && (ke(i, ''), (e.flags &= -33));
                        var c = pc(l);
                        hn(l, c, i);
                        break;
                    case 3:
                    case 4:
                        var s = e.stateNode.containerInfo,
                            y = pc(l);
                        bc(l, y, s);
                        break;
                    default:
                        throw Error(h(161));
                }
            } catch (b) {
                bl(l, l.return, b);
            }
            l.flags &= -3;
        }
        t & 4096 && (l.flags &= -4097);
    }
    function Pr(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                (Pr(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    (l = l.sibling));
            }
    }
    function Jt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                (Jr(l, t.alternate, t), (t = t.sibling));
    }
    function Le(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (re(4, t, t.return), Le(t));
                    break;
                case 1:
                    Ct(t, t.return);
                    var e = t.stateNode;
                    (typeof e.componentWillUnmount == 'function' &&
                        Xr(t, t.return, e),
                        Le(t));
                    break;
                case 27:
                    hu(t.stateNode);
                case 26:
                case 5:
                    (Ct(t, t.return), Le(t));
                    break;
                case 22:
                    t.memoizedState === null && Le(t);
                    break;
                case 30:
                    Le(t);
                    break;
                default:
                    Le(t);
            }
            l = l.sibling;
        }
    }
    function Wt(l, t, e) {
        for (
            e = e && (t.subtreeFlags & 8772) !== 0, t = t.child;
            t !== null;
        ) {
            var a = t.alternate,
                u = l,
                n = t,
                i = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    (Wt(u, n, e), au(4, n));
                    break;
                case 1:
                    if (
                        (Wt(u, n, e),
                        (a = n),
                        (u = a.stateNode),
                        typeof u.componentDidMount == 'function')
                    )
                        try {
                            u.componentDidMount();
                        } catch (y) {
                            bl(a, a.return, y);
                        }
                    if (((a = n), (u = a.updateQueue), u !== null)) {
                        var c = a.stateNode;
                        try {
                            var s = u.shared.hiddenCallbacks;
                            if (s !== null)
                                for (
                                    u.shared.hiddenCallbacks = null, u = 0;
                                    u < s.length;
                                    u++
                                )
                                    _s(s[u], c);
                        } catch (y) {
                            bl(a, a.return, y);
                        }
                    }
                    (e && i & 64 && Qr(n), uu(n, n.return));
                    break;
                case 27:
                    Kr(n);
                case 26:
                case 5:
                    (Wt(u, n, e),
                        e && a === null && i & 4 && Zr(n),
                        uu(n, n.return));
                    break;
                case 12:
                    Wt(u, n, e);
                    break;
                case 31:
                    (Wt(u, n, e), e && i & 4 && $r(u, n));
                    break;
                case 13:
                    (Wt(u, n, e), e && i & 4 && Fr(u, n));
                    break;
                case 22:
                    (n.memoizedState === null && Wt(u, n, e), uu(n, n.return));
                    break;
                case 30:
                    break;
                default:
                    Wt(u, n, e);
            }
            t = t.sibling;
        }
    }
    function Tc(l, t) {
        var e = null;
        (l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
            (l = null),
            t.memoizedState !== null &&
                t.memoizedState.cachePool !== null &&
                (l = t.memoizedState.cachePool.pool),
            l !== e && (l != null && l.refCount++, e != null && Va(e)));
    }
    function zc(l, t) {
        ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Va(l)));
    }
    function Mt(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) (lo(l, t, e, a), (t = t.sibling));
    }
    function lo(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (Mt(l, t, e, a), u & 2048 && au(9, t));
                break;
            case 1:
                Mt(l, t, e, a);
                break;
            case 3:
                (Mt(l, t, e, a),
                    u & 2048 &&
                        ((l = null),
                        t.alternate !== null &&
                            (l = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== l && (t.refCount++, l != null && Va(l))));
                break;
            case 12:
                if (u & 2048) {
                    (Mt(l, t, e, a), (l = t.stateNode));
                    try {
                        var n = t.memoizedProps,
                            i = n.id,
                            c = n.onPostCommit;
                        typeof c == 'function' &&
                            c(
                                i,
                                t.alternate === null ? 'mount' : 'update',
                                l.passiveEffectDuration,
                                -0,
                            );
                    } catch (s) {
                        bl(t, t.return, s);
                    }
                } else Mt(l, t, e, a);
                break;
            case 31:
                Mt(l, t, e, a);
                break;
            case 13:
                Mt(l, t, e, a);
                break;
            case 23:
                break;
            case 22:
                ((n = t.stateNode),
                    (i = t.alternate),
                    t.memoizedState !== null
                        ? n._visibility & 2
                            ? Mt(l, t, e, a)
                            : nu(l, t)
                        : n._visibility & 2
                          ? Mt(l, t, e, a)
                          : ((n._visibility |= 2),
                            ya(
                                l,
                                t,
                                e,
                                a,
                                (t.subtreeFlags & 10256) !== 0 || !1,
                            )),
                    u & 2048 && Tc(i, t));
                break;
            case 24:
                (Mt(l, t, e, a), u & 2048 && zc(t.alternate, t));
                break;
            default:
                Mt(l, t, e, a);
        }
    }
    function ya(l, t, e, a, u) {
        for (
            u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
            t !== null;
        ) {
            var n = l,
                i = t,
                c = e,
                s = a,
                y = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    (ya(n, i, c, s, u), au(8, i));
                    break;
                case 23:
                    break;
                case 22:
                    var b = i.stateNode;
                    (i.memoizedState !== null
                        ? b._visibility & 2
                            ? ya(n, i, c, s, u)
                            : nu(n, i)
                        : ((b._visibility |= 2), ya(n, i, c, s, u)),
                        u && y & 2048 && Tc(i.alternate, i));
                    break;
                case 24:
                    (ya(n, i, c, s, u), u && y & 2048 && zc(i.alternate, i));
                    break;
                default:
                    ya(n, i, c, s, u);
            }
            t = t.sibling;
        }
    }
    function nu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var e = l,
                    a = t,
                    u = a.flags;
                switch (a.tag) {
                    case 22:
                        (nu(e, a), u & 2048 && Tc(a.alternate, a));
                        break;
                    case 24:
                        (nu(e, a), u & 2048 && zc(a.alternate, a));
                        break;
                    default:
                        nu(e, a);
                }
                t = t.sibling;
            }
    }
    var iu = 8192;
    function va(l, t, e) {
        if (l.subtreeFlags & iu)
            for (l = l.child; l !== null; ) (to(l, t, e), (l = l.sibling));
    }
    function to(l, t, e) {
        switch (l.tag) {
            case 26:
                (va(l, t, e),
                    l.flags & iu &&
                        l.memoizedState !== null &&
                        q0(e, Nt, l.memoizedState, l.memoizedProps));
                break;
            case 5:
                va(l, t, e);
                break;
            case 3:
            case 4:
                var a = Nt;
                ((Nt = Nn(l.stateNode.containerInfo)), va(l, t, e), (Nt = a));
                break;
            case 22:
                l.memoizedState === null &&
                    ((a = l.alternate),
                    a !== null && a.memoizedState !== null
                        ? ((a = iu), (iu = 16777216), va(l, t, e), (iu = a))
                        : va(l, t, e));
                break;
            default:
                va(l, t, e);
        }
    }
    function eo(l) {
        var t = l.alternate;
        if (t !== null && ((l = t.child), l !== null)) {
            t.child = null;
            do ((t = l.sibling), (l.sibling = null), (l = t));
            while (l !== null);
        }
    }
    function cu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    ((Zl = a), uo(a, l));
                }
            eo(l);
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; ) (ao(l), (l = l.sibling));
    }
    function ao(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                (cu(l), l.flags & 2048 && re(9, l, l.return));
                break;
            case 3:
                cu(l);
                break;
            case 12:
                cu(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null &&
                t._visibility & 2 &&
                (l.return === null || l.return.tag !== 13)
                    ? ((t._visibility &= -3), yn(l))
                    : cu(l);
                break;
            default:
                cu(l);
        }
    }
    function yn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    ((Zl = a), uo(a, l));
                }
            eo(l);
        }
        for (l = l.child; l !== null; ) {
            switch (((t = l), t.tag)) {
                case 0:
                case 11:
                case 15:
                    (re(8, t, t.return), yn(t));
                    break;
                case 22:
                    ((e = t.stateNode),
                        e._visibility & 2 && ((e._visibility &= -3), yn(t)));
                    break;
                default:
                    yn(t);
            }
            l = l.sibling;
        }
    }
    function uo(l, t) {
        for (; Zl !== null; ) {
            var e = Zl;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    re(8, e, t);
                    break;
                case 23:
                case 22:
                    if (
                        e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null
                    ) {
                        var a = e.memoizedState.cachePool.pool;
                        a != null && a.refCount++;
                    }
                    break;
                case 24:
                    Va(e.memoizedState.cache);
            }
            if (((a = e.child), a !== null)) ((a.return = e), (Zl = a));
            else
                l: for (e = l; Zl !== null; ) {
                    a = Zl;
                    var u = a.sibling,
                        n = a.return;
                    if ((Wr(a), a === e)) {
                        Zl = null;
                        break l;
                    }
                    if (u !== null) {
                        ((u.return = n), (Zl = u));
                        break l;
                    }
                    Zl = n;
                }
        }
    }
    var Ih = {
            getCacheForType: function (l) {
                var t = wl(Rl),
                    e = t.data.get(l);
                return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
            },
            cacheSignal: function () {
                return wl(Rl).controller.signal;
            },
        },
        Ph = typeof WeakMap == 'function' ? WeakMap : Map,
        hl = 0,
        El = null,
        el = null,
        nl = 0,
        pl = 0,
        mt = null,
        oe = !1,
        ga = !1,
        Ac = !1,
        kt = 0,
        Dl = 0,
        de = 0,
        Qe = 0,
        Ec = 0,
        yt = 0,
        Sa = 0,
        fu = null,
        nt = null,
        jc = !1,
        vn = 0,
        no = 0,
        gn = 1 / 0,
        Sn = null,
        he = null,
        Ql = 0,
        me = null,
        pa = null,
        $t = 0,
        Oc = 0,
        Nc = null,
        io = null,
        su = 0,
        Mc = null;
    function vt() {
        return (hl & 2) !== 0 && nl !== 0
            ? nl & -nl
            : S.T !== null
              ? Bc()
              : Tf();
    }
    function co() {
        if (yt === 0)
            if ((nl & 536870912) === 0 || cl) {
                var l = Eu;
                ((Eu <<= 1), (Eu & 3932160) === 0 && (Eu = 262144), (yt = l));
            } else yt = 536870912;
        return ((l = dt.current), l !== null && (l.flags |= 32), yt);
    }
    function it(l, t, e) {
        (((l === El && (pl === 2 || pl === 9)) ||
            l.cancelPendingCommit !== null) &&
            (ba(l, 0), ye(l, nl, yt, !1)),
            _a(l, e),
            ((hl & 2) === 0 || l !== El) &&
                (l === El &&
                    ((hl & 2) === 0 && (Qe |= e),
                    Dl === 4 && ye(l, nl, yt, !1)),
                Ut(l)));
    }
    function fo(l, t, e) {
        if ((hl & 6) !== 0) throw Error(h(327));
        var a =
                (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) ||
                Ma(l, t),
            u = a ? e0(l, t) : Dc(l, t, !0),
            n = a;
        do {
            if (u === 0) {
                ga && !a && ye(l, t, 0, !1);
                break;
            } else {
                if (((e = l.current.alternate), n && !l0(e))) {
                    ((u = Dc(l, t, !1)), (n = !1));
                    continue;
                }
                if (u === 2) {
                    if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
                    else
                        ((i = l.pendingLanes & -536870913),
                            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;
                            u = fu;
                            var s = c.current.memoizedState.isDehydrated;
                            if (
                                (s && (ba(c, i).flags |= 256),
                                (i = Dc(c, i, !1)),
                                i !== 2)
                            ) {
                                if (Ac && !s) {
                                    ((c.errorRecoveryDisabledLanes |= n),
                                        (Qe |= n),
                                        (u = 4));
                                    break l;
                                }
                                ((n = nt),
                                    (nt = u),
                                    n !== null &&
                                        (nt === null
                                            ? (nt = n)
                                            : nt.push.apply(nt, n)));
                            }
                            u = i;
                        }
                        if (((n = !1), u !== 2)) continue;
                    }
                }
                if (u === 1) {
                    (ba(l, 0), ye(l, t, 0, !0));
                    break;
                }
                l: {
                    switch (((a = l), (n = u), n)) {
                        case 0:
                        case 1:
                            throw Error(h(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            ye(a, t, yt, !oe);
                            break l;
                        case 2:
                            nt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(h(329));
                    }
                    if (
                        (t & 62914560) === t &&
                        ((u = vn + 300 - ct()), 10 < u)
                    ) {
                        if ((ye(a, t, yt, !oe), Ou(a, 0, !0) !== 0)) break l;
                        (($t = t),
                            (a.timeoutHandle = Lo(
                                so.bind(
                                    null,
                                    a,
                                    e,
                                    nt,
                                    Sn,
                                    jc,
                                    t,
                                    yt,
                                    Qe,
                                    Sa,
                                    oe,
                                    n,
                                    'Throttled',
                                    -0,
                                    0,
                                ),
                                u,
                            )));
                        break l;
                    }
                    so(a, e, nt, Sn, jc, t, yt, Qe, Sa, oe, n, null, -0, 0);
                }
            }
            break;
        } while (!0);
        Ut(l);
    }
    function so(l, t, e, a, u, n, i, c, s, y, b, A, v, g) {
        if (
            ((l.timeoutHandle = -1),
            (A = t.subtreeFlags),
            A & 8192 || (A & 16785408) === 16785408)
        ) {
            ((A = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Bt,
            }),
                to(t, n, A));
            var C =
                (n & 62914560) === n
                    ? vn - ct()
                    : (n & 4194048) === n
                      ? no - ct()
                      : 0;
            if (((C = Y0(A, C)), C !== null)) {
                (($t = n),
                    (l.cancelPendingCommit = C(
                        So.bind(
                            null,
                            l,
                            t,
                            n,
                            e,
                            a,
                            u,
                            i,
                            c,
                            s,
                            b,
                            A,
                            null,
                            v,
                            g,
                        ),
                    )),
                    ye(l, n, i, !y));
                return;
            }
        }
        So(l, t, n, e, a, u, i, c, s);
    }
    function l0(l) {
        for (var t = l; ; ) {
            var e = t.tag;
            if (
                (e === 0 || e === 11 || e === 15) &&
                t.flags & 16384 &&
                ((e = t.updateQueue),
                e !== null && ((e = e.stores), e !== null))
            )
                for (var a = 0; a < e.length; a++) {
                    var u = e[a],
                        n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!rt(n(), u)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
                ((e.return = t), (t = e));
            else {
                if (t === l) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l) return !0;
                    t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
            }
        }
        return !0;
    }
    function ye(l, t, e, a) {
        ((t &= ~Ec),
            (t &= ~Qe),
            (l.suspendedLanes |= t),
            (l.pingedLanes &= ~t),
            a && (l.warmLanes |= t),
            (a = l.expirationTimes));
        for (var u = t; 0 < u; ) {
            var n = 31 - st(u),
                i = 1 << n;
            ((a[n] = -1), (u &= ~i));
        }
        e !== 0 && pf(l, e, t);
    }
    function pn() {
        return (hl & 6) === 0 ? (ru(0), !1) : !0;
    }
    function _c() {
        if (el !== null) {
            if (pl === 0) var l = el.return;
            else
                ((l = el),
                    (Gt = Ce = null),
                    wi(l),
                    (ra = null),
                    (wa = 0),
                    (l = el));
            for (; l !== null; ) (Lr(l.alternate, l), (l = l.return));
            el = null;
        }
    }
    function ba(l, t) {
        var e = l.timeoutHandle;
        (e !== -1 && ((l.timeoutHandle = -1), b0(e)),
            (e = l.cancelPendingCommit),
            e !== null && ((l.cancelPendingCommit = null), e()),
            ($t = 0),
            _c(),
            (El = l),
            (el = e = qt(l.current, null)),
            (nl = t),
            (pl = 0),
            (mt = null),
            (oe = !1),
            (ga = Ma(l, t)),
            (Ac = !1),
            (Sa = yt = Ec = Qe = de = Dl = 0),
            (nt = fu = null),
            (jc = !1),
            (t & 8) !== 0 && (t |= t & 32));
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements, a &= t; 0 < a; ) {
                var u = 31 - st(a),
                    n = 1 << u;
                ((t |= l[u]), (a &= ~n));
            }
        return ((kt = t), Gu(), e);
    }
    function ro(l, t) {
        ((F = null),
            (S.H = lu),
            t === sa || t === Ju
                ? ((t = js()), (pl = 3))
                : t === Hi
                  ? ((t = js()), (pl = 4))
                  : (pl =
                        t === fc
                            ? 8
                            : t !== null &&
                                typeof t == 'object' &&
                                typeof t.then == 'function'
                              ? 6
                              : 1),
            (mt = t),
            el === null && ((Dl = 1), fn(l, bt(t, l.current))));
    }
    function oo() {
        var l = dt.current;
        return l === null
            ? !0
            : (nl & 4194048) === nl
              ? At === null
              : (nl & 62914560) === nl || (nl & 536870912) !== 0
                ? l === At
                : !1;
    }
    function ho() {
        var l = S.H;
        return ((S.H = lu), l === null ? lu : l);
    }
    function mo() {
        var l = S.A;
        return ((S.A = Ih), l);
    }
    function bn() {
        ((Dl = 4),
            oe || ((nl & 4194048) !== nl && dt.current !== null) || (ga = !0),
            ((de & 134217727) === 0 && (Qe & 134217727) === 0) ||
                El === null ||
                ye(El, nl, yt, !1));
    }
    function Dc(l, t, e) {
        var a = hl;
        hl |= 2;
        var u = ho(),
            n = mo();
        ((El !== l || nl !== t) && ((Sn = null), ba(l, t)), (t = !1));
        var i = Dl;
        l: do
            try {
                if (pl !== 0 && el !== null) {
                    var c = el,
                        s = mt;
                    switch (pl) {
                        case 8:
                            (_c(), (i = 6));
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            dt.current === null && (t = !0);
                            var y = pl;
                            if (
                                ((pl = 0), (mt = null), xa(l, c, s, y), e && ga)
                            ) {
                                i = 0;
                                break l;
                            }
                            break;
                        default:
                            ((y = pl), (pl = 0), (mt = null), xa(l, c, s, y));
                    }
                }
                (t0(), (i = Dl));
                break;
            } catch (b) {
                ro(l, b);
            }
        while (!0);
        return (
            t && l.shellSuspendCounter++,
            (Gt = Ce = null),
            (hl = a),
            (S.H = u),
            (S.A = n),
            el === null && ((El = null), (nl = 0), Gu()),
            i
        );
    }
    function t0() {
        for (; el !== null; ) yo(el);
    }
    function e0(l, t) {
        var e = hl;
        hl |= 2;
        var a = ho(),
            u = mo();
        El !== l || nl !== t
            ? ((Sn = null), (gn = ct() + 500), ba(l, t))
            : (ga = Ma(l, t));
        l: do
            try {
                if (pl !== 0 && el !== null) {
                    t = el;
                    var n = mt;
                    t: switch (pl) {
                        case 1:
                            ((pl = 0), (mt = null), xa(l, t, n, 1));
                            break;
                        case 2:
                        case 9:
                            if (As(n)) {
                                ((pl = 0), (mt = null), vo(t));
                                break;
                            }
                            ((t = function () {
                                ((pl !== 2 && pl !== 9) || El !== l || (pl = 7),
                                    Ut(l));
                            }),
                                n.then(t, t));
                            break l;
                        case 3:
                            pl = 7;
                            break l;
                        case 4:
                            pl = 5;
                            break l;
                        case 7:
                            As(n)
                                ? ((pl = 0), (mt = null), vo(t))
                                : ((pl = 0), (mt = null), xa(l, t, n, 7));
                            break;
                        case 5:
                            var i = null;
                            switch (el.tag) {
                                case 26:
                                    i = el.memoizedState;
                                case 5:
                                case 27:
                                    var c = el;
                                    if (i ? td(i) : c.stateNode.complete) {
                                        ((pl = 0), (mt = null));
                                        var s = c.sibling;
                                        if (s !== null) el = s;
                                        else {
                                            var y = c.return;
                                            y !== null
                                                ? ((el = y), xn(y))
                                                : (el = null);
                                        }
                                        break t;
                                    }
                            }
                            ((pl = 0), (mt = null), xa(l, t, n, 5));
                            break;
                        case 6:
                            ((pl = 0), (mt = null), xa(l, t, n, 6));
                            break;
                        case 8:
                            (_c(), (Dl = 6));
                            break l;
                        default:
                            throw Error(h(462));
                    }
                }
                a0();
                break;
            } catch (b) {
                ro(l, b);
            }
        while (!0);
        return (
            (Gt = Ce = null),
            (S.H = a),
            (S.A = u),
            (hl = e),
            el !== null ? 0 : ((El = null), (nl = 0), Gu(), Dl)
        );
    }
    function a0() {
        for (; el !== null && !jd(); ) yo(el);
    }
    function yo(l) {
        var t = Yr(l.alternate, l, kt);
        ((l.memoizedProps = l.pendingProps), t === null ? xn(l) : (el = t));
    }
    function vo(l) {
        var t = l,
            e = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Cr(e, t, t.pendingProps, t.type, void 0, nl);
                break;
            case 11:
                t = Cr(e, t, t.pendingProps, t.type.render, t.ref, nl);
                break;
            case 5:
                wi(t);
            default:
                (Lr(e, t), (t = el = hs(t, kt)), (t = Yr(e, t, kt)));
        }
        ((l.memoizedProps = l.pendingProps), t === null ? xn(l) : (el = t));
    }
    function xa(l, t, e, a) {
        ((Gt = Ce = null), wi(t), (ra = null), (wa = 0));
        var u = t.return;
        try {
            if (Kh(l, u, t, e, nl)) {
                ((Dl = 1), fn(l, bt(e, l.current)), (el = null));
                return;
            }
        } catch (n) {
            if (u !== null) throw ((el = u), n);
            ((Dl = 1), fn(l, bt(e, l.current)), (el = null));
            return;
        }
        t.flags & 32768
            ? (cl || a === 1
                  ? (l = !0)
                  : ga || (nl & 536870912) !== 0
                    ? (l = !1)
                    : ((oe = l = !0),
                      (a === 2 || a === 9 || a === 3 || a === 6) &&
                          ((a = dt.current),
                          a !== null && a.tag === 13 && (a.flags |= 16384))),
              go(t, l))
            : xn(t);
    }
    function xn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                go(t, oe);
                return;
            }
            l = t.return;
            var e = Wh(t.alternate, t, kt);
            if (e !== null) {
                el = e;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                el = t;
                return;
            }
            el = t = l;
        } while (t !== null);
        Dl === 0 && (Dl = 5);
    }
    function go(l, t) {
        do {
            var e = kh(l.alternate, l);
            if (e !== null) {
                ((e.flags &= 32767), (el = e));
                return;
            }
            if (
                ((e = l.return),
                e !== null &&
                    ((e.flags |= 32768),
                    (e.subtreeFlags = 0),
                    (e.deletions = null)),
                !t && ((l = l.sibling), l !== null))
            ) {
                el = l;
                return;
            }
            el = l = e;
        } while (l !== null);
        ((Dl = 6), (el = null));
    }
    function So(l, t, e, a, u, n, i, c, s) {
        l.cancelPendingCommit = null;
        do Tn();
        while (Ql !== 0);
        if ((hl & 6) !== 0) throw Error(h(327));
        if (t !== null) {
            if (t === l.current) throw Error(h(177));
            if (
                ((n = t.lanes | t.childLanes),
                (n |= pi),
                Rd(l, e, n, i, c, s),
                l === El && ((el = El = null), (nl = 0)),
                (pa = t),
                (me = l),
                ($t = e),
                (Oc = n),
                (Nc = u),
                (io = a),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((l.callbackNode = null),
                      (l.callbackPriority = 0),
                      c0(zu, function () {
                          return (zo(), null);
                      }))
                    : ((l.callbackNode = null), (l.callbackPriority = 0)),
                (a = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || a)
            ) {
                ((a = S.T),
                    (S.T = null),
                    (u = E.p),
                    (E.p = 2),
                    (i = hl),
                    (hl |= 4));
                try {
                    $h(l, t, e);
                } finally {
                    ((hl = i), (E.p = u), (S.T = a));
                }
            }
            ((Ql = 1), po(), bo(), xo());
        }
    }
    function po() {
        if (Ql === 1) {
            Ql = 0;
            var l = me,
                t = pa,
                e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                ((e = S.T), (S.T = null));
                var a = E.p;
                E.p = 2;
                var u = hl;
                hl |= 4;
                try {
                    Ir(t, l);
                    var n = Zc,
                        i = us(l.containerInfo),
                        c = n.focusedElem,
                        s = n.selectionRange;
                    if (
                        i !== c &&
                        c &&
                        c.ownerDocument &&
                        as(c.ownerDocument.documentElement, c)
                    ) {
                        if (s !== null && mi(c)) {
                            var y = s.start,
                                b = s.end;
                            if (
                                (b === void 0 && (b = y), 'selectionStart' in c)
                            )
                                ((c.selectionStart = y),
                                    (c.selectionEnd = Math.min(
                                        b,
                                        c.value.length,
                                    )));
                            else {
                                var A = c.ownerDocument || document,
                                    v = (A && A.defaultView) || window;
                                if (v.getSelection) {
                                    var g = v.getSelection(),
                                        C = c.textContent.length,
                                        L = Math.min(s.start, C),
                                        Al =
                                            s.end === void 0
                                                ? L
                                                : Math.min(s.end, C);
                                    !g.extend &&
                                        L > Al &&
                                        ((i = Al), (Al = L), (L = i));
                                    var d = es(c, L),
                                        o = es(c, Al);
                                    if (
                                        d &&
                                        o &&
                                        (g.rangeCount !== 1 ||
                                            g.anchorNode !== d.node ||
                                            g.anchorOffset !== d.offset ||
                                            g.focusNode !== o.node ||
                                            g.focusOffset !== o.offset)
                                    ) {
                                        var m = A.createRange();
                                        (m.setStart(d.node, d.offset),
                                            g.removeAllRanges(),
                                            L > Al
                                                ? (g.addRange(m),
                                                  g.extend(o.node, o.offset))
                                                : (m.setEnd(o.node, o.offset),
                                                  g.addRange(m)));
                                    }
                                }
                            }
                        }
                        for (A = [], g = c; (g = g.parentNode); )
                            g.nodeType === 1 &&
                                A.push({
                                    element: g,
                                    left: g.scrollLeft,
                                    top: g.scrollTop,
                                });
                        for (
                            typeof c.focus == 'function' && c.focus(), c = 0;
                            c < A.length;
                            c++
                        ) {
                            var z = A[c];
                            ((z.element.scrollLeft = z.left),
                                (z.element.scrollTop = z.top));
                        }
                    }
                    ((Hn = !!Xc), (Zc = Xc = null));
                } finally {
                    ((hl = u), (E.p = a), (S.T = e));
                }
            }
            ((l.current = t), (Ql = 2));
        }
    }
    function bo() {
        if (Ql === 2) {
            Ql = 0;
            var l = me,
                t = pa,
                e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                ((e = S.T), (S.T = null));
                var a = E.p;
                E.p = 2;
                var u = hl;
                hl |= 4;
                try {
                    Jr(l, t.alternate, t);
                } finally {
                    ((hl = u), (E.p = a), (S.T = e));
                }
            }
            Ql = 3;
        }
    }
    function xo() {
        if (Ql === 4 || Ql === 3) {
            ((Ql = 0), Od());
            var l = me,
                t = pa,
                e = $t,
                a = io;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                ? (Ql = 5)
                : ((Ql = 0), (pa = me = null), To(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (
                (u === 0 && (he = null),
                kn(e),
                (t = t.stateNode),
                ft && typeof ft.onCommitFiberRoot == 'function')
            )
                try {
                    ft.onCommitFiberRoot(
                        Na,
                        t,
                        void 0,
                        (t.current.flags & 128) === 128,
                    );
                } catch {}
            if (a !== null) {
                ((t = S.T), (u = E.p), (E.p = 2), (S.T = null));
                try {
                    for (
                        var n = l.onRecoverableError, i = 0;
                        i < a.length;
                        i++
                    ) {
                        var c = a[i];
                        n(c.value, {componentStack: c.stack});
                    }
                } finally {
                    ((S.T = t), (E.p = u));
                }
            }
            (($t & 3) !== 0 && Tn(),
                Ut(l),
                (u = l.pendingLanes),
                (e & 261930) !== 0 && (u & 42) !== 0
                    ? l === Mc
                        ? su++
                        : ((su = 0), (Mc = l))
                    : (su = 0),
                ru(0));
        }
    }
    function To(l, t) {
        (l.pooledCacheLanes &= t) === 0 &&
            ((t = l.pooledCache), t != null && ((l.pooledCache = null), Va(t)));
    }
    function Tn() {
        return (po(), bo(), xo(), zo());
    }
    function zo() {
        if (Ql !== 5) return !1;
        var l = me,
            t = Oc;
        Oc = 0;
        var e = kn($t),
            a = S.T,
            u = E.p;
        try {
            ((E.p = 32 > e ? 32 : e), (S.T = null), (e = Nc), (Nc = null));
            var n = me,
                i = $t;
            if (((Ql = 0), (pa = me = null), ($t = 0), (hl & 6) !== 0))
                throw Error(h(331));
            var c = hl;
            if (
                ((hl |= 4),
                ao(n.current),
                lo(n, n.current, i, e),
                (hl = c),
                ru(0, !1),
                ft && typeof ft.onPostCommitFiberRoot == 'function')
            )
                try {
                    ft.onPostCommitFiberRoot(Na, n);
                } catch {}
            return !0;
        } finally {
            ((E.p = u), (S.T = a), To(l, t));
        }
    }
    function Ao(l, t, e) {
        ((t = bt(e, t)),
            (t = cc(l.stateNode, t, 2)),
            (l = ce(l, t, 2)),
            l !== null && (_a(l, 2), Ut(l)));
    }
    function bl(l, t, e) {
        if (l.tag === 3) Ao(l, l, e);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Ao(t, l, e);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' &&
                            (he === null || !he.has(a)))
                    ) {
                        ((l = bt(e, l)),
                            (e = Ar(2)),
                            (a = ce(t, e, 2)),
                            a !== null && (Er(e, a, t, l), _a(a, 2), Ut(a)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Cc(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new Ph();
            var u = new Set();
            a.set(t, u);
        } else ((u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u)));
        u.has(e) ||
            ((Ac = !0), u.add(e), (l = u0.bind(null, l, t, e)), t.then(l, l));
    }
    function u0(l, t, e) {
        var a = l.pingCache;
        (a !== null && a.delete(t),
            (l.pingedLanes |= l.suspendedLanes & e),
            (l.warmLanes &= ~e),
            El === l &&
                (nl & e) === e &&
                (Dl === 4 ||
                (Dl === 3 && (nl & 62914560) === nl && 300 > ct() - vn)
                    ? (hl & 2) === 0 && ba(l, 0)
                    : (Ec |= e),
                Sa === nl && (Sa = 0)),
            Ut(l));
    }
    function Eo(l, t) {
        (t === 0 && (t = Sf()),
            (l = Me(l, t)),
            l !== null && (_a(l, t), Ut(l)));
    }
    function n0(l) {
        var t = l.memoizedState,
            e = 0;
        (t !== null && (e = t.retryLane), Eo(l, e));
    }
    function i0(l, t) {
        var e = 0;
        switch (l.tag) {
            case 31:
            case 13:
                var a = l.stateNode,
                    u = l.memoizedState;
                u !== null && (e = u.retryLane);
                break;
            case 19:
                a = l.stateNode;
                break;
            case 22:
                a = l.stateNode._retryCache;
                break;
            default:
                throw Error(h(314));
        }
        (a !== null && a.delete(t), Eo(l, e));
    }
    function c0(l, t) {
        return Kn(l, t);
    }
    var zn = null,
        Ta = null,
        Uc = !1,
        An = !1,
        Hc = !1,
        ve = 0;
    function Ut(l) {
        (l !== Ta &&
            l.next === null &&
            (Ta === null ? (zn = Ta = l) : (Ta = Ta.next = l)),
            (An = !0),
            Uc || ((Uc = !0), s0()));
    }
    function ru(l, t) {
        if (!Hc && An) {
            Hc = !0;
            do
                for (var e = !1, a = zn; a !== null; ) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var n = 0;
                        else {
                            var i = a.suspendedLanes,
                                c = a.pingedLanes;
                            ((n = (1 << (31 - st(42 | l) + 1)) - 1),
                                (n &= u & ~(i & ~c)),
                                (n =
                                    n & 201326741
                                        ? (n & 201326741) | 1
                                        : n
                                          ? n | 2
                                          : 0));
                        }
                        n !== 0 && ((e = !0), Mo(a, n));
                    } else
                        ((n = nl),
                            (n = Ou(
                                a,
                                a === El ? n : 0,
                                a.cancelPendingCommit !== null ||
                                    a.timeoutHandle !== -1,
                            )),
                            (n & 3) === 0 || Ma(a, n) || ((e = !0), Mo(a, n)));
                    a = a.next;
                }
            while (e);
            Hc = !1;
        }
    }
    function f0() {
        jo();
    }
    function jo() {
        An = Uc = !1;
        var l = 0;
        ve !== 0 && p0() && (l = ve);
        for (var t = ct(), e = null, a = zn; a !== null; ) {
            var u = a.next,
                n = Oo(a, t);
            (n === 0
                ? ((a.next = null),
                  e === null ? (zn = u) : (e.next = u),
                  u === null && (Ta = e))
                : ((e = a), (l !== 0 || (n & 3) !== 0) && (An = !0)),
                (a = u));
        }
        ((Ql !== 0 && Ql !== 5) || ru(l), ve !== 0 && (ve = 0));
    }
    function Oo(l, t) {
        for (
            var e = l.suspendedLanes,
                a = l.pingedLanes,
                u = l.expirationTimes,
                n = l.pendingLanes & -62914561;
            0 < n;
        ) {
            var i = 31 - st(n),
                c = 1 << i,
                s = u[i];
            (s === -1
                ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Bd(c, t))
                : s <= t && (l.expiredLanes |= c),
                (n &= ~c));
        }
        if (
            ((t = El),
            (e = nl),
            (e = Ou(
                l,
                l === t ? e : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
            )),
            (a = l.callbackNode),
            e === 0 ||
                (l === t && (pl === 2 || pl === 9)) ||
                l.cancelPendingCommit !== null)
        )
            return (
                a !== null && a !== null && wn(a),
                (l.callbackNode = null),
                (l.callbackPriority = 0)
            );
        if ((e & 3) === 0 || Ma(l, e)) {
            if (((t = e & -e), t === l.callbackPriority)) return t;
            switch ((a !== null && wn(a), kn(e))) {
                case 2:
                case 8:
                    e = vf;
                    break;
                case 32:
                    e = zu;
                    break;
                case 268435456:
                    e = gf;
                    break;
                default:
                    e = zu;
            }
            return (
                (a = No.bind(null, l)),
                (e = Kn(e, a)),
                (l.callbackPriority = t),
                (l.callbackNode = e),
                t
            );
        }
        return (
            a !== null && a !== null && wn(a),
            (l.callbackPriority = 2),
            (l.callbackNode = null),
            2
        );
    }
    function No(l, t) {
        if (Ql !== 0 && Ql !== 5)
            return ((l.callbackNode = null), (l.callbackPriority = 0), null);
        var e = l.callbackNode;
        if (Tn() && l.callbackNode !== e) return null;
        var a = nl;
        return (
            (a = Ou(
                l,
                l === El ? a : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
            )),
            a === 0
                ? null
                : (fo(l, a, t),
                  Oo(l, ct()),
                  l.callbackNode != null && l.callbackNode === e
                      ? No.bind(null, l)
                      : null)
        );
    }
    function Mo(l, t) {
        if (Tn()) return null;
        fo(l, t, !0);
    }
    function s0() {
        x0(function () {
            (hl & 6) !== 0 ? Kn(yf, f0) : jo();
        });
    }
    function Bc() {
        if (ve === 0) {
            var l = ca;
            (l === 0 &&
                ((l = Au), (Au <<= 1), (Au & 261888) === 0 && (Au = 256)),
                (ve = l));
        }
        return ve;
    }
    function _o(l) {
        return l == null || typeof l == 'symbol' || typeof l == 'boolean'
            ? null
            : typeof l == 'function'
              ? l
              : Du('' + l);
    }
    function Do(l, t) {
        var e = t.ownerDocument.createElement('input');
        return (
            (e.name = t.name),
            (e.value = t.value),
            l.id && e.setAttribute('form', l.id),
            t.parentNode.insertBefore(e, t),
            (l = new FormData(l)),
            e.parentNode.removeChild(e),
            l
        );
    }
    function r0(l, t, e, a, u) {
        if (t === 'submit' && e && e.stateNode === u) {
            var n = _o((u[lt] || null).action),
                i = a.submitter;
            i &&
                ((t = (t = i[lt] || null)
                    ? _o(t.formAction)
                    : i.getAttribute('formAction')),
                t !== null && ((n = t), (i = null)));
            var c = new Bu('action', 'action', null, a, u);
            l.push({
                event: c,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (ve !== 0) {
                                    var s = i ? Do(u, i) : new FormData(u);
                                    tc(
                                        e,
                                        {
                                            pending: !0,
                                            data: s,
                                            method: u.method,
                                            action: n,
                                        },
                                        null,
                                        s,
                                    );
                                }
                            } else
                                typeof n == 'function' &&
                                    (c.preventDefault(),
                                    (s = i ? Do(u, i) : new FormData(u)),
                                    tc(
                                        e,
                                        {
                                            pending: !0,
                                            data: s,
                                            method: u.method,
                                            action: n,
                                        },
                                        n,
                                        s,
                                    ));
                        },
                        currentTarget: u,
                    },
                ],
            });
        }
    }
    for (var Rc = 0; Rc < Si.length; Rc++) {
        var qc = Si[Rc],
            o0 = qc.toLowerCase(),
            d0 = qc[0].toUpperCase() + qc.slice(1);
        Ot(o0, 'on' + d0);
    }
    (Ot(cs, 'onAnimationEnd'),
        Ot(fs, 'onAnimationIteration'),
        Ot(ss, 'onAnimationStart'),
        Ot('dblclick', 'onDoubleClick'),
        Ot('focusin', 'onFocus'),
        Ot('focusout', 'onBlur'),
        Ot(Nh, 'onTransitionRun'),
        Ot(Mh, 'onTransitionStart'),
        Ot(_h, 'onTransitionCancel'),
        Ot(rs, 'onTransitionEnd'),
        Je('onMouseEnter', ['mouseout', 'mouseover']),
        Je('onMouseLeave', ['mouseout', 'mouseover']),
        Je('onPointerEnter', ['pointerout', 'pointerover']),
        Je('onPointerLeave', ['pointerout', 'pointerover']),
        Ee(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
                ' ',
            ),
        ),
        Ee(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                ' ',
            ),
        ),
        Ee('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
        ]),
        Ee(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
                ' ',
            ),
        ),
        Ee(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
                ' ',
            ),
        ),
        Ee(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
                ' ',
            ),
        ));
    var ou =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' ',
            ),
        h0 = new Set(
            'beforetoggle cancel close invalid load scroll scrollend toggle'
                .split(' ')
                .concat(ou),
        );
    function Co(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e],
                u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i],
                            s = c.instance,
                            y = c.currentTarget;
                        if (
                            ((c = c.listener),
                            s !== n && u.isPropagationStopped())
                        )
                            break l;
                        ((n = c), (u.currentTarget = y));
                        try {
                            n(u);
                        } catch (b) {
                            Yu(b);
                        }
                        ((u.currentTarget = null), (n = s));
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (
                            ((c = a[i]),
                            (s = c.instance),
                            (y = c.currentTarget),
                            (c = c.listener),
                            s !== n && u.isPropagationStopped())
                        )
                            break l;
                        ((n = c), (u.currentTarget = y));
                        try {
                            n(u);
                        } catch (b) {
                            Yu(b);
                        }
                        ((u.currentTarget = null), (n = s));
                    }
            }
        }
    }
    function al(l, t) {
        var e = t[$n];
        e === void 0 && (e = t[$n] = new Set());
        var a = l + '__bubble';
        e.has(a) || (Uo(t, l, 2, !1), e.add(a));
    }
    function Yc(l, t, e) {
        var a = 0;
        (t && (a |= 4), Uo(e, l, a, t));
    }
    var En = '_reactListening' + Math.random().toString(36).slice(2);
    function Gc(l) {
        if (!l[En]) {
            ((l[En] = !0),
                Ef.forEach(function (e) {
                    e !== 'selectionchange' &&
                        (h0.has(e) || Yc(e, !1, l), Yc(e, !0, l));
                }));
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[En] || ((t[En] = !0), Yc('selectionchange', !1, t));
        }
    }
    function Uo(l, t, e, a) {
        switch (fd(t)) {
            case 2:
                var u = Q0;
                break;
            case 8:
                u = X0;
                break;
            default:
                u = lf;
        }
        ((e = u.bind(null, t, e, l)),
            (u = void 0),
            !ni ||
                (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
                (u = !0),
            a
                ? u !== void 0
                    ? l.addEventListener(t, e, {capture: !0, passive: u})
                    : l.addEventListener(t, e, !0)
                : u !== void 0
                  ? l.addEventListener(t, e, {passive: u})
                  : l.addEventListener(t, e, !1));
    }
    function Lc(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (;;) {
                if (a === null) return;
                var i = a.tag;
                if (i === 3 || i === 4) {
                    var c = a.stateNode.containerInfo;
                    if (c === u) break;
                    if (i === 4)
                        for (i = a.return; i !== null; ) {
                            var s = i.tag;
                            if (
                                (s === 3 || s === 4) &&
                                i.stateNode.containerInfo === u
                            )
                                return;
                            i = i.return;
                        }
                    for (; c !== null; ) {
                        if (((i = Ve(c)), i === null)) return;
                        if (
                            ((s = i.tag),
                            s === 5 || s === 6 || s === 26 || s === 27)
                        ) {
                            a = n = i;
                            continue l;
                        }
                        c = c.parentNode;
                    }
                }
                a = a.return;
            }
        qf(function () {
            var y = n,
                b = ai(e),
                A = [];
            l: {
                var v = os.get(l);
                if (v !== void 0) {
                    var g = Bu,
                        C = l;
                    switch (l) {
                        case 'keypress':
                            if (Uu(e) === 0) break l;
                        case 'keydown':
                        case 'keyup':
                            g = ih;
                            break;
                        case 'focusin':
                            ((C = 'focus'), (g = si));
                            break;
                        case 'focusout':
                            ((C = 'blur'), (g = si));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            g = si;
                            break;
                        case 'click':
                            if (e.button === 2) break l;
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            g = Lf;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            g = Wd;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            g = sh;
                            break;
                        case cs:
                        case fs:
                        case ss:
                            g = Fd;
                            break;
                        case rs:
                            g = oh;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            g = wd;
                            break;
                        case 'wheel':
                            g = hh;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            g = Pd;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            g = Xf;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            g = yh;
                    }
                    var L = (t & 4) !== 0,
                        Al = !L && (l === 'scroll' || l === 'scrollend'),
                        d = L ? (v !== null ? v + 'Capture' : null) : v;
                    L = [];
                    for (var o = y, m; o !== null; ) {
                        var z = o;
                        if (
                            ((m = z.stateNode),
                            (z = z.tag),
                            (z !== 5 && z !== 26 && z !== 27) ||
                                m === null ||
                                d === null ||
                                ((z = Ua(o, d)),
                                z != null && L.push(du(o, z, m))),
                            Al)
                        )
                            break;
                        o = o.return;
                    }
                    0 < L.length &&
                        ((v = new g(v, C, null, e, b)),
                        A.push({event: v, listeners: L}));
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (
                        ((v = l === 'mouseover' || l === 'pointerover'),
                        (g = l === 'mouseout' || l === 'pointerout'),
                        v &&
                            e !== ei &&
                            (C = e.relatedTarget || e.fromElement) &&
                            (Ve(C) || C[Ze]))
                    )
                        break l;
                    if (
                        (g || v) &&
                        ((v =
                            b.window === b
                                ? b
                                : (v = b.ownerDocument)
                                  ? v.defaultView || v.parentWindow
                                  : window),
                        g
                            ? ((C = e.relatedTarget || e.toElement),
                              (g = y),
                              (C = C ? Ve(C) : null),
                              C !== null &&
                                  ((Al = q(C)),
                                  (L = C.tag),
                                  C !== Al ||
                                      (L !== 5 && L !== 27 && L !== 6)) &&
                                  (C = null))
                            : ((g = null), (C = y)),
                        g !== C)
                    ) {
                        if (
                            ((L = Lf),
                            (z = 'onMouseLeave'),
                            (d = 'onMouseEnter'),
                            (o = 'mouse'),
                            (l === 'pointerout' || l === 'pointerover') &&
                                ((L = Xf),
                                (z = 'onPointerLeave'),
                                (d = 'onPointerEnter'),
                                (o = 'pointer')),
                            (Al = g == null ? v : Ca(g)),
                            (m = C == null ? v : Ca(C)),
                            (v = new L(z, o + 'leave', g, e, b)),
                            (v.target = Al),
                            (v.relatedTarget = m),
                            (z = null),
                            Ve(b) === y &&
                                ((L = new L(d, o + 'enter', C, e, b)),
                                (L.target = m),
                                (L.relatedTarget = Al),
                                (z = L)),
                            (Al = z),
                            g && C)
                        )
                            t: {
                                for (
                                    L = m0, d = g, o = C, m = 0, z = d;
                                    z;
                                    z = L(z)
                                )
                                    m++;
                                z = 0;
                                for (var R = o; R; R = L(R)) z++;
                                for (; 0 < m - z; ) ((d = L(d)), m--);
                                for (; 0 < z - m; ) ((o = L(o)), z--);
                                for (; m--; ) {
                                    if (
                                        d === o ||
                                        (o !== null && d === o.alternate)
                                    ) {
                                        L = d;
                                        break t;
                                    }
                                    ((d = L(d)), (o = L(o)));
                                }
                                L = null;
                            }
                        else L = null;
                        (g !== null && Ho(A, v, g, L, !1),
                            C !== null && Al !== null && Ho(A, Al, C, L, !0));
                    }
                }
                l: {
                    if (
                        ((v = y ? Ca(y) : window),
                        (g = v.nodeName && v.nodeName.toLowerCase()),
                        g === 'select' || (g === 'input' && v.type === 'file'))
                    )
                        var rl = $f;
                    else if (Wf(v))
                        if (Ff) rl = Eh;
                        else {
                            rl = zh;
                            var H = Th;
                        }
                    else
                        ((g = v.nodeName),
                            !g ||
                            g.toLowerCase() !== 'input' ||
                            (v.type !== 'checkbox' && v.type !== 'radio')
                                ? y && ti(y.elementType) && (rl = $f)
                                : (rl = Ah));
                    if (rl && (rl = rl(l, y))) {
                        kf(A, rl, e, b);
                        break l;
                    }
                    (H && H(l, v, y),
                        l === 'focusout' &&
                            y &&
                            v.type === 'number' &&
                            y.memoizedProps.value != null &&
                            li(v, 'number', v.value));
                }
                switch (((H = y ? Ca(y) : window), l)) {
                    case 'focusin':
                        (Wf(H) || H.contentEditable === 'true') &&
                            ((Pe = H), (yi = y), (Qa = null));
                        break;
                    case 'focusout':
                        Qa = yi = Pe = null;
                        break;
                    case 'mousedown':
                        vi = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((vi = !1), ns(A, e, b));
                        break;
                    case 'selectionchange':
                        if (Oh) break;
                    case 'keydown':
                    case 'keyup':
                        ns(A, e, b);
                }
                var I;
                if (oi)
                    l: {
                        switch (l) {
                            case 'compositionstart':
                                var il = 'onCompositionStart';
                                break l;
                            case 'compositionend':
                                il = 'onCompositionEnd';
                                break l;
                            case 'compositionupdate':
                                il = 'onCompositionUpdate';
                                break l;
                        }
                        il = void 0;
                    }
                else
                    Ie
                        ? wf(l, e) && (il = 'onCompositionEnd')
                        : l === 'keydown' &&
                          e.keyCode === 229 &&
                          (il = 'onCompositionStart');
                (il &&
                    (Zf &&
                        e.locale !== 'ko' &&
                        (Ie || il !== 'onCompositionStart'
                            ? il === 'onCompositionEnd' && Ie && (I = Yf())
                            : ((le = b),
                              (ii = 'value' in le ? le.value : le.textContent),
                              (Ie = !0))),
                    (H = jn(y, il)),
                    0 < H.length &&
                        ((il = new Qf(il, l, null, e, b)),
                        A.push({event: il, listeners: H}),
                        I
                            ? (il.data = I)
                            : ((I = Jf(e)), I !== null && (il.data = I)))),
                    (I = gh ? Sh(l, e) : ph(l, e)) &&
                        ((il = jn(y, 'onBeforeInput')),
                        0 < il.length &&
                            ((H = new Qf(
                                'onBeforeInput',
                                'beforeinput',
                                null,
                                e,
                                b,
                            )),
                            A.push({event: H, listeners: il}),
                            (H.data = I))),
                    r0(A, l, y, e, b));
            }
            Co(A, t);
        });
    }
    function du(l, t, e) {
        return {instance: l, listener: t, currentTarget: e};
    }
    function jn(l, t) {
        for (var e = t + 'Capture', a = []; l !== null; ) {
            var u = l,
                n = u.stateNode;
            if (
                ((u = u.tag),
                (u !== 5 && u !== 26 && u !== 27) ||
                    n === null ||
                    ((u = Ua(l, e)),
                    u != null && a.unshift(du(l, u, n)),
                    (u = Ua(l, t)),
                    u != null && a.push(du(l, u, n))),
                l.tag === 3)
            )
                return a;
            l = l.return;
        }
        return [];
    }
    function m0(l) {
        if (l === null) return null;
        do l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null;
    }
    function Ho(l, t, e, a, u) {
        for (var n = t._reactName, i = []; e !== null && e !== a; ) {
            var c = e,
                s = c.alternate,
                y = c.stateNode;
            if (((c = c.tag), s !== null && s === a)) break;
            ((c !== 5 && c !== 26 && c !== 27) ||
                y === null ||
                ((s = y),
                u
                    ? ((y = Ua(e, n)), y != null && i.unshift(du(e, y, s)))
                    : u || ((y = Ua(e, n)), y != null && i.push(du(e, y, s)))),
                (e = e.return));
        }
        i.length !== 0 && l.push({event: t, listeners: i});
    }
    var y0 = /\r\n?/g,
        v0 = /\u0000|\uFFFD/g;
    function Bo(l) {
        return (typeof l == 'string' ? l : '' + l)
            .replace(
                y0,
                `
`,
            )
            .replace(v0, '');
    }
    function Ro(l, t) {
        return ((t = Bo(t)), Bo(l) === t);
    }
    function zl(l, t, e, a, u, n) {
        switch (e) {
            case 'children':
                typeof a == 'string'
                    ? t === 'body' || (t === 'textarea' && a === '') || ke(l, a)
                    : (typeof a == 'number' || typeof a == 'bigint') &&
                      t !== 'body' &&
                      ke(l, '' + a);
                break;
            case 'className':
                Mu(l, 'class', a);
                break;
            case 'tabIndex':
                Mu(l, 'tabindex', a);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                Mu(l, e, a);
                break;
            case 'style':
                Bf(l, a, n);
                break;
            case 'data':
                if (t !== 'object') {
                    Mu(l, 'data', a);
                    break;
                }
            case 'src':
            case 'href':
                if (a === '' && (t !== 'a' || e !== 'href')) {
                    l.removeAttribute(e);
                    break;
                }
                if (
                    a == null ||
                    typeof a == 'function' ||
                    typeof a == 'symbol' ||
                    typeof a == 'boolean'
                ) {
                    l.removeAttribute(e);
                    break;
                }
                ((a = Du('' + a)), l.setAttribute(e, a));
                break;
            case 'action':
            case 'formAction':
                if (typeof a == 'function') {
                    l.setAttribute(
                        e,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                    );
                    break;
                } else
                    typeof n == 'function' &&
                        (e === 'formAction'
                            ? (t !== 'input' &&
                                  zl(l, t, 'name', u.name, u, null),
                              zl(l, t, 'formEncType', u.formEncType, u, null),
                              zl(l, t, 'formMethod', u.formMethod, u, null),
                              zl(l, t, 'formTarget', u.formTarget, u, null))
                            : (zl(l, t, 'encType', u.encType, u, null),
                              zl(l, t, 'method', u.method, u, null),
                              zl(l, t, 'target', u.target, u, null)));
                if (
                    a == null ||
                    typeof a == 'symbol' ||
                    typeof a == 'boolean'
                ) {
                    l.removeAttribute(e);
                    break;
                }
                ((a = Du('' + a)), l.setAttribute(e, a));
                break;
            case 'onClick':
                a != null && (l.onclick = Bt);
                break;
            case 'onScroll':
                a != null && al('scroll', l);
                break;
            case 'onScrollEnd':
                a != null && al('scrollend', l);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a))
                        throw Error(h(61));
                    if (((e = a.__html), e != null)) {
                        if (u.children != null) throw Error(h(60));
                        l.innerHTML = e;
                    }
                }
                break;
            case 'multiple':
                l.multiple =
                    a && typeof a != 'function' && typeof a != 'symbol';
                break;
            case 'muted':
                l.muted = a && typeof a != 'function' && typeof a != 'symbol';
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
                break;
            case 'autoFocus':
                break;
            case 'xlinkHref':
                if (
                    a == null ||
                    typeof a == 'function' ||
                    typeof a == 'boolean' ||
                    typeof a == 'symbol'
                ) {
                    l.removeAttribute('xlink:href');
                    break;
                }
                ((e = Du('' + a)),
                    l.setAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        'xlink:href',
                        e,
                    ));
                break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                a != null && typeof a != 'function' && typeof a != 'symbol'
                    ? l.setAttribute(e, '' + a)
                    : l.removeAttribute(e);
                break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                a && typeof a != 'function' && typeof a != 'symbol'
                    ? l.setAttribute(e, '')
                    : l.removeAttribute(e);
                break;
            case 'capture':
            case 'download':
                a === !0
                    ? l.setAttribute(e, '')
                    : a !== !1 &&
                        a != null &&
                        typeof a != 'function' &&
                        typeof a != 'symbol'
                      ? l.setAttribute(e, a)
                      : l.removeAttribute(e);
                break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                a != null &&
                typeof a != 'function' &&
                typeof a != 'symbol' &&
                !isNaN(a) &&
                1 <= a
                    ? l.setAttribute(e, a)
                    : l.removeAttribute(e);
                break;
            case 'rowSpan':
            case 'start':
                a == null ||
                typeof a == 'function' ||
                typeof a == 'symbol' ||
                isNaN(a)
                    ? l.removeAttribute(e)
                    : l.setAttribute(e, a);
                break;
            case 'popover':
                (al('beforetoggle', l), al('toggle', l), Nu(l, 'popover', a));
                break;
            case 'xlinkActuate':
                Ht(l, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
                break;
            case 'xlinkArcrole':
                Ht(l, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
                break;
            case 'xlinkRole':
                Ht(l, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
                break;
            case 'xlinkShow':
                Ht(l, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
                break;
            case 'xlinkTitle':
                Ht(l, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
                break;
            case 'xlinkType':
                Ht(l, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
                break;
            case 'xmlBase':
                Ht(l, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
                break;
            case 'xmlLang':
                Ht(l, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
                break;
            case 'xmlSpace':
                Ht(l, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
                break;
            case 'is':
                Nu(l, 'is', a);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < e.length) ||
                    (e[0] !== 'o' && e[0] !== 'O') ||
                    (e[1] !== 'n' && e[1] !== 'N')) &&
                    ((e = Vd.get(e) || e), Nu(l, e, a));
        }
    }
    function Qc(l, t, e, a, u, n) {
        switch (e) {
            case 'style':
                Bf(l, a, n);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a))
                        throw Error(h(61));
                    if (((e = a.__html), e != null)) {
                        if (u.children != null) throw Error(h(60));
                        l.innerHTML = e;
                    }
                }
                break;
            case 'children':
                typeof a == 'string'
                    ? ke(l, a)
                    : (typeof a == 'number' || typeof a == 'bigint') &&
                      ke(l, '' + a);
                break;
            case 'onScroll':
                a != null && al('scroll', l);
                break;
            case 'onScrollEnd':
                a != null && al('scrollend', l);
                break;
            case 'onClick':
                a != null && (l.onclick = Bt);
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                if (!jf.hasOwnProperty(e))
                    l: {
                        if (
                            e[0] === 'o' &&
                            e[1] === 'n' &&
                            ((u = e.endsWith('Capture')),
                            (t = e.slice(2, u ? e.length - 7 : void 0)),
                            (n = l[lt] || null),
                            (n = n != null ? n[e] : null),
                            typeof n == 'function' &&
                                l.removeEventListener(t, n, u),
                            typeof a == 'function')
                        ) {
                            (typeof n != 'function' &&
                                n !== null &&
                                (e in l
                                    ? (l[e] = null)
                                    : l.hasAttribute(e) &&
                                      l.removeAttribute(e)),
                                l.addEventListener(t, a, u));
                            break l;
                        }
                        e in l
                            ? (l[e] = a)
                            : a === !0
                              ? l.setAttribute(e, '')
                              : Nu(l, e, a);
                    }
        }
    }
    function Wl(l, t, e) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'img':
                (al('error', l), al('load', l));
                var a = !1,
                    u = !1,
                    n;
                for (n in e)
                    if (e.hasOwnProperty(n)) {
                        var i = e[n];
                        if (i != null)
                            switch (n) {
                                case 'src':
                                    a = !0;
                                    break;
                                case 'srcSet':
                                    u = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(h(137, t));
                                default:
                                    zl(l, t, n, i, e, null);
                            }
                    }
                (u && zl(l, t, 'srcSet', e.srcSet, e, null),
                    a && zl(l, t, 'src', e.src, e, null));
                return;
            case 'input':
                al('invalid', l);
                var c = (n = i = u = null),
                    s = null,
                    y = null;
                for (a in e)
                    if (e.hasOwnProperty(a)) {
                        var b = e[a];
                        if (b != null)
                            switch (a) {
                                case 'name':
                                    u = b;
                                    break;
                                case 'type':
                                    i = b;
                                    break;
                                case 'checked':
                                    s = b;
                                    break;
                                case 'defaultChecked':
                                    y = b;
                                    break;
                                case 'value':
                                    n = b;
                                    break;
                                case 'defaultValue':
                                    c = b;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (b != null) throw Error(h(137, t));
                                    break;
                                default:
                                    zl(l, t, a, b, e, null);
                            }
                    }
                Df(l, n, c, s, y, i, u, !1);
                return;
            case 'select':
                (al('invalid', l), (a = i = n = null));
                for (u in e)
                    if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
                        switch (u) {
                            case 'value':
                                n = c;
                                break;
                            case 'defaultValue':
                                i = c;
                                break;
                            case 'multiple':
                                a = c;
                            default:
                                zl(l, t, u, c, e, null);
                        }
                ((t = n),
                    (e = i),
                    (l.multiple = !!a),
                    t != null
                        ? We(l, !!a, t, !1)
                        : e != null && We(l, !!a, e, !0));
                return;
            case 'textarea':
                (al('invalid', l), (n = u = a = null));
                for (i in e)
                    if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
                        switch (i) {
                            case 'value':
                                a = c;
                                break;
                            case 'defaultValue':
                                u = c;
                                break;
                            case 'children':
                                n = c;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (c != null) throw Error(h(91));
                                break;
                            default:
                                zl(l, t, i, c, e, null);
                        }
                Uf(l, a, u, n);
                return;
            case 'option':
                for (s in e)
                    e.hasOwnProperty(s) &&
                        ((a = e[s]), a != null) &&
                        (s === 'selected'
                            ? (l.selected =
                                  a &&
                                  typeof a != 'function' &&
                                  typeof a != 'symbol')
                            : zl(l, t, s, a, e, null));
                return;
            case 'dialog':
                (al('beforetoggle', l),
                    al('toggle', l),
                    al('cancel', l),
                    al('close', l));
                break;
            case 'iframe':
            case 'object':
                al('load', l);
                break;
            case 'video':
            case 'audio':
                for (a = 0; a < ou.length; a++) al(ou[a], l);
                break;
            case 'image':
                (al('error', l), al('load', l));
                break;
            case 'details':
                al('toggle', l);
                break;
            case 'embed':
            case 'source':
            case 'link':
                (al('error', l), al('load', l));
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (y in e)
                    if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
                        switch (y) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(h(137, t));
                            default:
                                zl(l, t, y, a, e, null);
                        }
                return;
            default:
                if (ti(t)) {
                    for (b in e)
                        e.hasOwnProperty(b) &&
                            ((a = e[b]),
                            a !== void 0 && Qc(l, t, b, a, e, void 0));
                    return;
                }
        }
        for (c in e)
            e.hasOwnProperty(c) &&
                ((a = e[c]), a != null && zl(l, t, c, a, e, null));
    }
    function g0(l, t, e, a) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'input':
                var u = null,
                    n = null,
                    i = null,
                    c = null,
                    s = null,
                    y = null,
                    b = null;
                for (g in e) {
                    var A = e[g];
                    if (e.hasOwnProperty(g) && A != null)
                        switch (g) {
                            case 'checked':
                                break;
                            case 'value':
                                break;
                            case 'defaultValue':
                                s = A;
                            default:
                                a.hasOwnProperty(g) || zl(l, t, g, null, a, A);
                        }
                }
                for (var v in a) {
                    var g = a[v];
                    if (
                        ((A = e[v]),
                        a.hasOwnProperty(v) && (g != null || A != null))
                    )
                        switch (v) {
                            case 'type':
                                n = g;
                                break;
                            case 'name':
                                u = g;
                                break;
                            case 'checked':
                                y = g;
                                break;
                            case 'defaultChecked':
                                b = g;
                                break;
                            case 'value':
                                i = g;
                                break;
                            case 'defaultValue':
                                c = g;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (g != null) throw Error(h(137, t));
                                break;
                            default:
                                g !== A && zl(l, t, v, g, a, A);
                        }
                }
                Pn(l, i, c, s, y, b, n, u);
                return;
            case 'select':
                g = i = c = v = null;
                for (n in e)
                    if (((s = e[n]), e.hasOwnProperty(n) && s != null))
                        switch (n) {
                            case 'value':
                                break;
                            case 'multiple':
                                g = s;
                            default:
                                a.hasOwnProperty(n) || zl(l, t, n, null, a, s);
                        }
                for (u in a)
                    if (
                        ((n = a[u]),
                        (s = e[u]),
                        a.hasOwnProperty(u) && (n != null || s != null))
                    )
                        switch (u) {
                            case 'value':
                                v = n;
                                break;
                            case 'defaultValue':
                                c = n;
                                break;
                            case 'multiple':
                                i = n;
                            default:
                                n !== s && zl(l, t, u, n, a, s);
                        }
                ((t = c),
                    (e = i),
                    (a = g),
                    v != null
                        ? We(l, !!e, v, !1)
                        : !!a != !!e &&
                          (t != null
                              ? We(l, !!e, t, !0)
                              : We(l, !!e, e ? [] : '', !1)));
                return;
            case 'textarea':
                g = v = null;
                for (c in e)
                    if (
                        ((u = e[c]),
                        e.hasOwnProperty(c) &&
                            u != null &&
                            !a.hasOwnProperty(c))
                    )
                        switch (c) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                zl(l, t, c, null, a, u);
                        }
                for (i in a)
                    if (
                        ((u = a[i]),
                        (n = e[i]),
                        a.hasOwnProperty(i) && (u != null || n != null))
                    )
                        switch (i) {
                            case 'value':
                                v = u;
                                break;
                            case 'defaultValue':
                                g = u;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (u != null) throw Error(h(91));
                                break;
                            default:
                                u !== n && zl(l, t, i, u, a, n);
                        }
                Cf(l, v, g);
                return;
            case 'option':
                for (var C in e)
                    ((v = e[C]),
                        e.hasOwnProperty(C) &&
                            v != null &&
                            !a.hasOwnProperty(C) &&
                            (C === 'selected'
                                ? (l.selected = !1)
                                : zl(l, t, C, null, a, v)));
                for (s in a)
                    ((v = a[s]),
                        (g = e[s]),
                        a.hasOwnProperty(s) &&
                            v !== g &&
                            (v != null || g != null) &&
                            (s === 'selected'
                                ? (l.selected =
                                      v &&
                                      typeof v != 'function' &&
                                      typeof v != 'symbol')
                                : zl(l, t, s, v, a, g)));
                return;
            case 'img':
            case 'link':
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'embed':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'source':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (var L in e)
                    ((v = e[L]),
                        e.hasOwnProperty(L) &&
                            v != null &&
                            !a.hasOwnProperty(L) &&
                            zl(l, t, L, null, a, v));
                for (y in a)
                    if (
                        ((v = a[y]),
                        (g = e[y]),
                        a.hasOwnProperty(y) &&
                            v !== g &&
                            (v != null || g != null))
                    )
                        switch (y) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (v != null) throw Error(h(137, t));
                                break;
                            default:
                                zl(l, t, y, v, a, g);
                        }
                return;
            default:
                if (ti(t)) {
                    for (var Al in e)
                        ((v = e[Al]),
                            e.hasOwnProperty(Al) &&
                                v !== void 0 &&
                                !a.hasOwnProperty(Al) &&
                                Qc(l, t, Al, void 0, a, v));
                    for (b in a)
                        ((v = a[b]),
                            (g = e[b]),
                            !a.hasOwnProperty(b) ||
                                v === g ||
                                (v === void 0 && g === void 0) ||
                                Qc(l, t, b, v, a, g));
                    return;
                }
        }
        for (var d in e)
            ((v = e[d]),
                e.hasOwnProperty(d) &&
                    v != null &&
                    !a.hasOwnProperty(d) &&
                    zl(l, t, d, null, a, v));
        for (A in a)
            ((v = a[A]),
                (g = e[A]),
                !a.hasOwnProperty(A) ||
                    v === g ||
                    (v == null && g == null) ||
                    zl(l, t, A, v, a, g));
    }
    function qo(l) {
        switch (l) {
            case 'css':
            case 'script':
            case 'font':
            case 'img':
            case 'image':
            case 'input':
            case 'link':
                return !0;
            default:
                return !1;
        }
    }
    function S0() {
        if (typeof performance.getEntriesByType == 'function') {
            for (
                var l = 0,
                    t = 0,
                    e = performance.getEntriesByType('resource'),
                    a = 0;
                a < e.length;
                a++
            ) {
                var u = e[a],
                    n = u.transferSize,
                    i = u.initiatorType,
                    c = u.duration;
                if (n && c && qo(i)) {
                    for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
                        var s = e[a],
                            y = s.startTime;
                        if (y > c) break;
                        var b = s.transferSize,
                            A = s.initiatorType;
                        b &&
                            qo(A) &&
                            ((s = s.responseEnd),
                            (i += b * (s < c ? 1 : (c - y) / (s - y))));
                    }
                    if (
                        (--a,
                        (t += (8 * (n + i)) / (u.duration / 1e3)),
                        l++,
                        10 < l)
                    )
                        break;
                }
            }
            if (0 < l) return t / l / 1e6;
        }
        return navigator.connection &&
            ((l = navigator.connection.downlink), typeof l == 'number')
            ? l
            : 5;
    }
    var Xc = null,
        Zc = null;
    function On(l) {
        return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function Yo(l) {
        switch (l) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function Go(l, t) {
        if (l === 0)
            switch (t) {
                case 'svg':
                    return 1;
                case 'math':
                    return 2;
                default:
                    return 0;
            }
        return l === 1 && t === 'foreignObject' ? 0 : l;
    }
    function Vc(l, t) {
        return (
            l === 'textarea' ||
            l === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Kc = null;
    function p0() {
        var l = window.event;
        return l && l.type === 'popstate'
            ? l === Kc
                ? !1
                : ((Kc = l), !0)
            : ((Kc = null), !1);
    }
    var Lo = typeof setTimeout == 'function' ? setTimeout : void 0,
        b0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        Qo = typeof Promise == 'function' ? Promise : void 0,
        x0 =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof Qo < 'u'
                  ? function (l) {
                        return Qo.resolve(null).then(l).catch(T0);
                    }
                  : Lo;
    function T0(l) {
        setTimeout(function () {
            throw l;
        });
    }
    function ge(l) {
        return l === 'head';
    }
    function Xo(l, t) {
        var e = t,
            a = 0;
        do {
            var u = e.nextSibling;
            if ((l.removeChild(e), u && u.nodeType === 8))
                if (((e = u.data), e === '/$' || e === '/&')) {
                    if (a === 0) {
                        (l.removeChild(u), ja(t));
                        return;
                    }
                    a--;
                } else if (
                    e === '$' ||
                    e === '$?' ||
                    e === '$~' ||
                    e === '$!' ||
                    e === '&'
                )
                    a++;
                else if (e === 'html') hu(l.ownerDocument.documentElement);
                else if (e === 'head') {
                    ((e = l.ownerDocument.head), hu(e));
                    for (var n = e.firstChild; n; ) {
                        var i = n.nextSibling,
                            c = n.nodeName;
                        (n[Da] ||
                            c === 'SCRIPT' ||
                            c === 'STYLE' ||
                            (c === 'LINK' &&
                                n.rel.toLowerCase() === 'stylesheet') ||
                            e.removeChild(n),
                            (n = i));
                    }
                } else e === 'body' && hu(l.ownerDocument.body);
            e = u;
        } while (e);
        ja(t);
    }
    function Zo(l, t) {
        var e = l;
        l = 0;
        do {
            var a = e.nextSibling;
            if (
                (e.nodeType === 1
                    ? t
                        ? ((e._stashedDisplay = e.style.display),
                          (e.style.display = 'none'))
                        : ((e.style.display = e._stashedDisplay || ''),
                          e.getAttribute('style') === '' &&
                              e.removeAttribute('style'))
                    : e.nodeType === 3 &&
                      (t
                          ? ((e._stashedText = e.nodeValue), (e.nodeValue = ''))
                          : (e.nodeValue = e._stashedText || '')),
                a && a.nodeType === 8)
            )
                if (((e = a.data), e === '/$')) {
                    if (l === 0) break;
                    l--;
                } else
                    (e !== '$' && e !== '$?' && e !== '$~' && e !== '$!') ||
                        l++;
            e = a;
        } while (e);
    }
    function wc(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (((t = t.nextSibling), e.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (wc(e), Fn(e));
                    continue;
                case 'SCRIPT':
                case 'STYLE':
                    continue;
                case 'LINK':
                    if (e.rel.toLowerCase() === 'stylesheet') continue;
            }
            l.removeChild(e);
        }
    }
    function z0(l, t, e, a) {
        for (; l.nodeType === 1; ) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== 'INPUT' || l.type !== 'hidden'))
                    break;
            } else if (a) {
                if (!l[Da])
                    switch (t) {
                        case 'meta':
                            if (!l.hasAttribute('itemprop')) break;
                            return l;
                        case 'link':
                            if (
                                ((n = l.getAttribute('rel')),
                                n === 'stylesheet' &&
                                    l.hasAttribute('data-precedence'))
                            )
                                break;
                            if (
                                n !== u.rel ||
                                l.getAttribute('href') !==
                                    (u.href == null || u.href === ''
                                        ? null
                                        : u.href) ||
                                l.getAttribute('crossorigin') !==
                                    (u.crossOrigin == null
                                        ? null
                                        : u.crossOrigin) ||
                                l.getAttribute('title') !==
                                    (u.title == null ? null : u.title)
                            )
                                break;
                            return l;
                        case 'style':
                            if (l.hasAttribute('data-precedence')) break;
                            return l;
                        case 'script':
                            if (
                                ((n = l.getAttribute('src')),
                                (n !== (u.src == null ? null : u.src) ||
                                    l.getAttribute('type') !==
                                        (u.type == null ? null : u.type) ||
                                    l.getAttribute('crossorigin') !==
                                        (u.crossOrigin == null
                                            ? null
                                            : u.crossOrigin)) &&
                                    n &&
                                    l.hasAttribute('async') &&
                                    !l.hasAttribute('itemprop'))
                            )
                                break;
                            return l;
                        default:
                            return l;
                    }
            } else if (t === 'input' && l.type === 'hidden') {
                var n = u.name == null ? null : '' + u.name;
                if (u.type === 'hidden' && l.getAttribute('name') === n)
                    return l;
            } else return l;
            if (((l = Et(l.nextSibling)), l === null)) break;
        }
        return null;
    }
    function A0(l, t, e) {
        if (t === '') return null;
        for (; l.nodeType !== 3; )
            if (
                ((l.nodeType !== 1 ||
                    l.nodeName !== 'INPUT' ||
                    l.type !== 'hidden') &&
                    !e) ||
                ((l = Et(l.nextSibling)), l === null)
            )
                return null;
        return l;
    }
    function Vo(l, t) {
        for (; l.nodeType !== 8; )
            if (
                ((l.nodeType !== 1 ||
                    l.nodeName !== 'INPUT' ||
                    l.type !== 'hidden') &&
                    !t) ||
                ((l = Et(l.nextSibling)), l === null)
            )
                return null;
        return l;
    }
    function Jc(l) {
        return l.data === '$?' || l.data === '$~';
    }
    function Wc(l) {
        return (
            l.data === '$!' ||
            (l.data === '$?' && l.ownerDocument.readyState !== 'loading')
        );
    }
    function E0(l, t) {
        var e = l.ownerDocument;
        if (l.data === '$~') l._reactRetry = t;
        else if (l.data !== '$?' || e.readyState !== 'loading') t();
        else {
            var a = function () {
                (t(), e.removeEventListener('DOMContentLoaded', a));
            };
            (e.addEventListener('DOMContentLoaded', a), (l._reactRetry = a));
        }
    }
    function Et(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (
                    ((t = l.data),
                    t === '$' ||
                        t === '$!' ||
                        t === '$?' ||
                        t === '$~' ||
                        t === '&' ||
                        t === 'F!' ||
                        t === 'F')
                )
                    break;
                if (t === '/$' || t === '/&') return null;
            }
        }
        return l;
    }
    var kc = null;
    function Ko(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === '/$' || e === '/&') {
                    if (t === 0) return Et(l.nextSibling);
                    t--;
                } else
                    (e !== '$' &&
                        e !== '$!' &&
                        e !== '$?' &&
                        e !== '$~' &&
                        e !== '&') ||
                        t++;
            }
            l = l.nextSibling;
        }
        return null;
    }
    function wo(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (
                    e === '$' ||
                    e === '$!' ||
                    e === '$?' ||
                    e === '$~' ||
                    e === '&'
                ) {
                    if (t === 0) return l;
                    t--;
                } else (e !== '/$' && e !== '/&') || t++;
            }
            l = l.previousSibling;
        }
        return null;
    }
    function Jo(l, t, e) {
        switch (((t = On(e)), l)) {
            case 'html':
                if (((l = t.documentElement), !l)) throw Error(h(452));
                return l;
            case 'head':
                if (((l = t.head), !l)) throw Error(h(453));
                return l;
            case 'body':
                if (((l = t.body), !l)) throw Error(h(454));
                return l;
            default:
                throw Error(h(451));
        }
    }
    function hu(l) {
        for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
        Fn(l);
    }
    var jt = new Map(),
        Wo = new Set();
    function Nn(l) {
        return typeof l.getRootNode == 'function'
            ? l.getRootNode()
            : l.nodeType === 9
              ? l
              : l.ownerDocument;
    }
    var Ft = E.d;
    E.d = {f: j0, r: O0, D: N0, C: M0, L: _0, m: D0, X: U0, S: C0, M: H0};
    function j0() {
        var l = Ft.f(),
            t = pn();
        return l || t;
    }
    function O0(l) {
        var t = Ke(l);
        t !== null && t.tag === 5 && t.type === 'form' ? rr(t) : Ft.r(l);
    }
    var za = typeof document > 'u' ? null : document;
    function ko(l, t, e) {
        var a = za;
        if (a && typeof t == 'string' && t) {
            var u = St(t);
            ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
                typeof e == 'string' && (u += '[crossorigin="' + e + '"]'),
                Wo.has(u) ||
                    (Wo.add(u),
                    (l = {rel: l, crossOrigin: e, href: t}),
                    a.querySelector(u) === null &&
                        ((t = a.createElement('link')),
                        Wl(t, 'link', l),
                        Xl(t),
                        a.head.appendChild(t))));
        }
    }
    function N0(l) {
        (Ft.D(l), ko('dns-prefetch', l, null));
    }
    function M0(l, t) {
        (Ft.C(l, t), ko('preconnect', l, t));
    }
    function _0(l, t, e) {
        Ft.L(l, t, e);
        var a = za;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + St(t) + '"]';
            t === 'image' && e && e.imageSrcSet
                ? ((u += '[imagesrcset="' + St(e.imageSrcSet) + '"]'),
                  typeof e.imageSizes == 'string' &&
                      (u += '[imagesizes="' + St(e.imageSizes) + '"]'))
                : (u += '[href="' + St(l) + '"]');
            var n = u;
            switch (t) {
                case 'style':
                    n = Aa(l);
                    break;
                case 'script':
                    n = Ea(l);
            }
            jt.has(n) ||
                ((l = D(
                    {
                        rel: 'preload',
                        href: t === 'image' && e && e.imageSrcSet ? void 0 : l,
                        as: t,
                    },
                    e,
                )),
                jt.set(n, l),
                a.querySelector(u) !== null ||
                    (t === 'style' && a.querySelector(mu(n))) ||
                    (t === 'script' && a.querySelector(yu(n))) ||
                    ((t = a.createElement('link')),
                    Wl(t, 'link', l),
                    Xl(t),
                    a.head.appendChild(t)));
        }
    }
    function D0(l, t) {
        Ft.m(l, t);
        var e = za;
        if (e && l) {
            var a = t && typeof t.as == 'string' ? t.as : 'script',
                u =
                    'link[rel="modulepreload"][as="' +
                    St(a) +
                    '"][href="' +
                    St(l) +
                    '"]',
                n = u;
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    n = Ea(l);
            }
            if (
                !jt.has(n) &&
                ((l = D({rel: 'modulepreload', href: l}, t)),
                jt.set(n, l),
                e.querySelector(u) === null)
            ) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (e.querySelector(yu(n))) return;
                }
                ((a = e.createElement('link')),
                    Wl(a, 'link', l),
                    Xl(a),
                    e.head.appendChild(a));
            }
        }
    }
    function C0(l, t, e) {
        Ft.S(l, t, e);
        var a = za;
        if (a && l) {
            var u = we(a).hoistableStyles,
                n = Aa(l);
            t = t || 'default';
            var i = u.get(n);
            if (!i) {
                var c = {loading: 0, preload: null};
                if ((i = a.querySelector(mu(n)))) c.loading = 5;
                else {
                    ((l = D(
                        {rel: 'stylesheet', href: l, 'data-precedence': t},
                        e,
                    )),
                        (e = jt.get(n)) && $c(l, e));
                    var s = (i = a.createElement('link'));
                    (Xl(s),
                        Wl(s, 'link', l),
                        (s._p = new Promise(function (y, b) {
                            ((s.onload = y), (s.onerror = b));
                        })),
                        s.addEventListener('load', function () {
                            c.loading |= 1;
                        }),
                        s.addEventListener('error', function () {
                            c.loading |= 2;
                        }),
                        (c.loading |= 4),
                        Mn(i, t, a));
                }
                ((i = {type: 'stylesheet', instance: i, count: 1, state: c}),
                    u.set(n, i));
            }
        }
    }
    function U0(l, t) {
        Ft.X(l, t);
        var e = za;
        if (e && l) {
            var a = we(e).hoistableScripts,
                u = Ea(l),
                n = a.get(u);
            n ||
                ((n = e.querySelector(yu(u))),
                n ||
                    ((l = D({src: l, async: !0}, t)),
                    (t = jt.get(u)) && Fc(l, t),
                    (n = e.createElement('script')),
                    Xl(n),
                    Wl(n, 'link', l),
                    e.head.appendChild(n)),
                (n = {type: 'script', instance: n, count: 1, state: null}),
                a.set(u, n));
        }
    }
    function H0(l, t) {
        Ft.M(l, t);
        var e = za;
        if (e && l) {
            var a = we(e).hoistableScripts,
                u = Ea(l),
                n = a.get(u);
            n ||
                ((n = e.querySelector(yu(u))),
                n ||
                    ((l = D({src: l, async: !0, type: 'module'}, t)),
                    (t = jt.get(u)) && Fc(l, t),
                    (n = e.createElement('script')),
                    Xl(n),
                    Wl(n, 'link', l),
                    e.head.appendChild(n)),
                (n = {type: 'script', instance: n, count: 1, state: null}),
                a.set(u, n));
        }
    }
    function $o(l, t, e, a) {
        var u = (u = tl.current) ? Nn(u) : null;
        if (!u) throw Error(h(446));
        switch (l) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof e.precedence == 'string' &&
                    typeof e.href == 'string'
                    ? ((t = Aa(e.href)),
                      (e = we(u).hoistableStyles),
                      (a = e.get(t)),
                      a ||
                          ((a = {
                              type: 'style',
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          e.set(t, a)),
                      a)
                    : {type: 'void', instance: null, count: 0, state: null};
            case 'link':
                if (
                    e.rel === 'stylesheet' &&
                    typeof e.href == 'string' &&
                    typeof e.precedence == 'string'
                ) {
                    l = Aa(e.href);
                    var n = we(u).hoistableStyles,
                        i = n.get(l);
                    if (
                        (i ||
                            ((u = u.ownerDocument || u),
                            (i = {
                                type: 'stylesheet',
                                instance: null,
                                count: 0,
                                state: {loading: 0, preload: null},
                            }),
                            n.set(l, i),
                            (n = u.querySelector(mu(l))) &&
                                !n._p &&
                                ((i.instance = n), (i.state.loading = 5)),
                            jt.has(l) ||
                                ((e = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: e.href,
                                    crossOrigin: e.crossOrigin,
                                    integrity: e.integrity,
                                    media: e.media,
                                    hrefLang: e.hrefLang,
                                    referrerPolicy: e.referrerPolicy,
                                }),
                                jt.set(l, e),
                                n || B0(u, l, e, i.state))),
                        t && a === null)
                    )
                        throw Error(h(528, ''));
                    return i;
                }
                if (t && a !== null) throw Error(h(529, ''));
                return null;
            case 'script':
                return (
                    (t = e.async),
                    (e = e.src),
                    typeof e == 'string' &&
                    t &&
                    typeof t != 'function' &&
                    typeof t != 'symbol'
                        ? ((t = Ea(e)),
                          (e = we(u).hoistableScripts),
                          (a = e.get(t)),
                          a ||
                              ((a = {
                                  type: 'script',
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              e.set(t, a)),
                          a)
                        : {type: 'void', instance: null, count: 0, state: null}
                );
            default:
                throw Error(h(444, l));
        }
    }
    function Aa(l) {
        return 'href="' + St(l) + '"';
    }
    function mu(l) {
        return 'link[rel="stylesheet"][' + l + ']';
    }
    function Fo(l) {
        return D({}, l, {'data-precedence': l.precedence, precedence: null});
    }
    function B0(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + ']')
            ? (a.loading = 1)
            : ((t = l.createElement('link')),
              (a.preload = t),
              t.addEventListener('load', function () {
                  return (a.loading |= 1);
              }),
              t.addEventListener('error', function () {
                  return (a.loading |= 2);
              }),
              Wl(t, 'link', e),
              Xl(t),
              l.head.appendChild(t));
    }
    function Ea(l) {
        return '[src="' + St(l) + '"]';
    }
    function yu(l) {
        return 'script[async]' + l;
    }
    function Io(l, t, e) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var a = l.querySelector(
                        'style[data-href~="' + St(e.href) + '"]',
                    );
                    if (a) return ((t.instance = a), Xl(a), a);
                    var u = D({}, e, {
                        'data-href': e.href,
                        'data-precedence': e.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (a = (l.ownerDocument || l).createElement('style')),
                        Xl(a),
                        Wl(a, 'style', u),
                        Mn(a, e.precedence, l),
                        (t.instance = a)
                    );
                case 'stylesheet':
                    u = Aa(e.href);
                    var n = l.querySelector(mu(u));
                    if (n)
                        return (
                            (t.state.loading |= 4),
                            (t.instance = n),
                            Xl(n),
                            n
                        );
                    ((a = Fo(e)),
                        (u = jt.get(u)) && $c(a, u),
                        (n = (l.ownerDocument || l).createElement('link')),
                        Xl(n));
                    var i = n;
                    return (
                        (i._p = new Promise(function (c, s) {
                            ((i.onload = c), (i.onerror = s));
                        })),
                        Wl(n, 'link', a),
                        (t.state.loading |= 4),
                        Mn(n, e.precedence, l),
                        (t.instance = n)
                    );
                case 'script':
                    return (
                        (n = Ea(e.src)),
                        (u = l.querySelector(yu(n)))
                            ? ((t.instance = u), Xl(u), u)
                            : ((a = e),
                              (u = jt.get(n)) && ((a = D({}, e)), Fc(a, u)),
                              (l = l.ownerDocument || l),
                              (u = l.createElement('script')),
                              Xl(u),
                              Wl(u, 'link', a),
                              l.head.appendChild(u),
                              (t.instance = u))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(h(443, t.type));
            }
        else
            t.type === 'stylesheet' &&
                (t.state.loading & 4) === 0 &&
                ((a = t.instance),
                (t.state.loading |= 4),
                Mn(a, e.precedence, l));
        return t.instance;
    }
    function Mn(l, t, e) {
        for (
            var a = e.querySelectorAll(
                    'link[rel="stylesheet"][data-precedence],style[data-precedence]',
                ),
                u = a.length ? a[a.length - 1] : null,
                n = u,
                i = 0;
            i < a.length;
            i++
        ) {
            var c = a[i];
            if (c.dataset.precedence === t) n = c;
            else if (n !== u) break;
        }
        n
            ? n.parentNode.insertBefore(l, n.nextSibling)
            : ((t = e.nodeType === 9 ? e.head : e),
              t.insertBefore(l, t.firstChild));
    }
    function $c(l, t) {
        (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
            l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
            l.title == null && (l.title = t.title));
    }
    function Fc(l, t) {
        (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
            l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
            l.integrity == null && (l.integrity = t.integrity));
    }
    var _n = null;
    function Po(l, t, e) {
        if (_n === null) {
            var a = new Map(),
                u = (_n = new Map());
            u.set(e, a);
        } else ((u = _n), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
        if (a.has(l)) return a;
        for (
            a.set(l, null), e = e.getElementsByTagName(l), u = 0;
            u < e.length;
            u++
        ) {
            var n = e[u];
            if (
                !(
                    n[Da] ||
                    n[Vl] ||
                    (l === 'link' && n.getAttribute('rel') === 'stylesheet')
                ) &&
                n.namespaceURI !== 'http://www.w3.org/2000/svg'
            ) {
                var i = n.getAttribute(t) || '';
                i = l + i;
                var c = a.get(i);
                c ? c.push(n) : a.set(i, [n]);
            }
        }
        return a;
    }
    function ld(l, t, e) {
        ((l = l.ownerDocument || l),
            l.head.insertBefore(
                e,
                t === 'title' ? l.querySelector('head > title') : null,
            ));
    }
    function R0(l, t, e) {
        if (e === 1 || t.itemProp != null) return !1;
        switch (l) {
            case 'meta':
            case 'title':
                return !0;
            case 'style':
                if (
                    typeof t.precedence != 'string' ||
                    typeof t.href != 'string' ||
                    t.href === ''
                )
                    break;
                return !0;
            case 'link':
                if (
                    typeof t.rel != 'string' ||
                    typeof t.href != 'string' ||
                    t.href === '' ||
                    t.onLoad ||
                    t.onError
                )
                    break;
                return t.rel === 'stylesheet'
                    ? ((l = t.disabled),
                      typeof t.precedence == 'string' && l == null)
                    : !0;
            case 'script':
                if (
                    t.async &&
                    typeof t.async != 'function' &&
                    typeof t.async != 'symbol' &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    typeof t.src == 'string'
                )
                    return !0;
        }
        return !1;
    }
    function td(l) {
        return !(l.type === 'stylesheet' && (l.state.loading & 3) === 0);
    }
    function q0(l, t, e, a) {
        if (
            e.type === 'stylesheet' &&
            (typeof a.media != 'string' ||
                matchMedia(a.media).matches !== !1) &&
            (e.state.loading & 4) === 0
        ) {
            if (e.instance === null) {
                var u = Aa(a.href),
                    n = t.querySelector(mu(u));
                if (n) {
                    ((t = n._p),
                        t !== null &&
                            typeof t == 'object' &&
                            typeof t.then == 'function' &&
                            (l.count++, (l = Dn.bind(l)), t.then(l, l)),
                        (e.state.loading |= 4),
                        (e.instance = n),
                        Xl(n));
                    return;
                }
                ((n = t.ownerDocument || t),
                    (a = Fo(a)),
                    (u = jt.get(u)) && $c(a, u),
                    (n = n.createElement('link')),
                    Xl(n));
                var i = n;
                ((i._p = new Promise(function (c, s) {
                    ((i.onload = c), (i.onerror = s));
                })),
                    Wl(n, 'link', a),
                    (e.instance = n));
            }
            (l.stylesheets === null && (l.stylesheets = new Map()),
                l.stylesheets.set(e, t),
                (t = e.state.preload) &&
                    (e.state.loading & 3) === 0 &&
                    (l.count++,
                    (e = Dn.bind(l)),
                    t.addEventListener('load', e),
                    t.addEventListener('error', e)));
        }
    }
    var Ic = 0;
    function Y0(l, t) {
        return (
            l.stylesheets && l.count === 0 && Un(l, l.stylesheets),
            0 < l.count || 0 < l.imgCount
                ? function (e) {
                      var a = setTimeout(function () {
                          if (
                              (l.stylesheets && Un(l, l.stylesheets),
                              l.unsuspend)
                          ) {
                              var n = l.unsuspend;
                              ((l.unsuspend = null), n());
                          }
                      }, 6e4 + t);
                      0 < l.imgBytes && Ic === 0 && (Ic = 62500 * S0());
                      var u = setTimeout(
                          function () {
                              if (
                                  ((l.waitingForImages = !1),
                                  l.count === 0 &&
                                      (l.stylesheets && Un(l, l.stylesheets),
                                      l.unsuspend))
                              ) {
                                  var n = l.unsuspend;
                                  ((l.unsuspend = null), n());
                              }
                          },
                          (l.imgBytes > Ic ? 50 : 800) + t,
                      );
                      return (
                          (l.unsuspend = e),
                          function () {
                              ((l.unsuspend = null),
                                  clearTimeout(a),
                                  clearTimeout(u));
                          }
                      );
                  }
                : null
        );
    }
    function Dn() {
        if (
            (this.count--,
            this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
        ) {
            if (this.stylesheets) Un(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                ((this.unsuspend = null), l());
            }
        }
    }
    var Cn = null;
    function Un(l, t) {
        ((l.stylesheets = null),
            l.unsuspend !== null &&
                (l.count++,
                (Cn = new Map()),
                t.forEach(G0, l),
                (Cn = null),
                Dn.call(l)));
    }
    function G0(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Cn.get(l);
            if (e) var a = e.get(null);
            else {
                ((e = new Map()), Cn.set(l, e));
                for (
                    var u = l.querySelectorAll(
                            'link[data-precedence],style[data-precedence]',
                        ),
                        n = 0;
                    n < u.length;
                    n++
                ) {
                    var i = u[n];
                    (i.nodeName === 'LINK' ||
                        i.getAttribute('media') !== 'not all') &&
                        (e.set(i.dataset.precedence, i), (a = i));
                }
                a && e.set(null, a);
            }
            ((u = t.instance),
                (i = u.getAttribute('data-precedence')),
                (n = e.get(i) || a),
                n === a && e.set(null, u),
                e.set(i, u),
                this.count++,
                (a = Dn.bind(this)),
                u.addEventListener('load', a),
                u.addEventListener('error', a),
                n
                    ? n.parentNode.insertBefore(u, n.nextSibling)
                    : ((l = l.nodeType === 9 ? l.head : l),
                      l.insertBefore(u, l.firstChild)),
                (t.state.loading |= 4));
        }
    }
    var vu = {
        $$typeof: J,
        Provider: null,
        Consumer: null,
        _currentValue: Y,
        _currentValue2: Y,
        _threadCount: 0,
    };
    function L0(l, t, e, a, u, n, i, c, s) {
        ((this.tag = 1),
            (this.containerInfo = l),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                    null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Jn(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Jn(0)),
            (this.hiddenUpdates = Jn(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = u),
            (this.onCaughtError = n),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map()));
    }
    function ed(l, t, e, a, u, n, i, c, s, y, b, A) {
        return (
            (l = new L0(l, t, e, i, s, y, b, A, c)),
            (t = 1),
            n === !0 && (t |= 24),
            (n = ot(3, null, null, t)),
            (l.current = n),
            (n.stateNode = l),
            (t = Di()),
            t.refCount++,
            (l.pooledCache = t),
            t.refCount++,
            (n.memoizedState = {element: a, isDehydrated: e, cache: t}),
            Bi(n),
            l
        );
    }
    function ad(l) {
        return l ? ((l = ea), l) : ea;
    }
    function ud(l, t, e, a, u, n) {
        ((u = ad(u)),
            a.context === null ? (a.context = u) : (a.pendingContext = u),
            (a = ie(t)),
            (a.payload = {element: e}),
            (n = n === void 0 ? null : n),
            n !== null && (a.callback = n),
            (e = ce(l, a, t)),
            e !== null && (it(e, l, t), Wa(e, l, t)));
    }
    function nd(l, t) {
        if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t;
        }
    }
    function Pc(l, t) {
        (nd(l, t), (l = l.alternate) && nd(l, t));
    }
    function id(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Me(l, 67108864);
            (t !== null && it(t, l, 67108864), Pc(l, 67108864));
        }
    }
    function cd(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = vt();
            t = Wn(t);
            var e = Me(l, t);
            (e !== null && it(e, l, t), Pc(l, t));
        }
    }
    var Hn = !0;
    function Q0(l, t, e, a) {
        var u = S.T;
        S.T = null;
        var n = E.p;
        try {
            ((E.p = 2), lf(l, t, e, a));
        } finally {
            ((E.p = n), (S.T = u));
        }
    }
    function X0(l, t, e, a) {
        var u = S.T;
        S.T = null;
        var n = E.p;
        try {
            ((E.p = 8), lf(l, t, e, a));
        } finally {
            ((E.p = n), (S.T = u));
        }
    }
    function lf(l, t, e, a) {
        if (Hn) {
            var u = tf(a);
            if (u === null) (Lc(l, t, a, Bn, e), sd(l, a));
            else if (V0(u, l, t, e, a)) a.stopPropagation();
            else if ((sd(l, a), t & 4 && -1 < Z0.indexOf(l))) {
                for (; u !== null; ) {
                    var n = Ke(u);
                    if (n !== null)
                        switch (n.tag) {
                            case 3:
                                if (
                                    ((n = n.stateNode),
                                    n.current.memoizedState.isDehydrated)
                                ) {
                                    var i = Ae(n.pendingLanes);
                                    if (i !== 0) {
                                        var c = n;
                                        for (
                                            c.pendingLanes |= 2,
                                                c.entangledLanes |= 2;
                                            i;
                                        ) {
                                            var s = 1 << (31 - st(i));
                                            ((c.entanglements[1] |= s),
                                                (i &= ~s));
                                        }
                                        (Ut(n),
                                            (hl & 6) === 0 &&
                                                ((gn = ct() + 500), ru(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                ((c = Me(n, 2)),
                                    c !== null && it(c, n, 2),
                                    pn(),
                                    Pc(n, 2));
                        }
                    if (
                        ((n = tf(a)), n === null && Lc(l, t, a, Bn, e), n === u)
                    )
                        break;
                    u = n;
                }
                u !== null && a.stopPropagation();
            } else Lc(l, t, a, null, e);
        }
    }
    function tf(l) {
        return ((l = ai(l)), ef(l));
    }
    var Bn = null;
    function ef(l) {
        if (((Bn = null), (l = Ve(l)), l !== null)) {
            var t = q(l);
            if (t === null) l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (((l = Z(t)), l !== null)) return l;
                    l = null;
                } else if (e === 31) {
                    if (((l = dl(t)), l !== null)) return l;
                    l = null;
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null;
                } else t !== l && (l = null);
            }
        }
        return ((Bn = l), null);
    }
    function fd(l) {
        switch (l) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 2;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8;
            case 'message':
                switch (Nd()) {
                    case yf:
                        return 2;
                    case vf:
                        return 8;
                    case zu:
                    case Md:
                        return 32;
                    case gf:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var af = !1,
        Se = null,
        pe = null,
        be = null,
        gu = new Map(),
        Su = new Map(),
        xe = [],
        Z0 =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' ',
            );
    function sd(l, t) {
        switch (l) {
            case 'focusin':
            case 'focusout':
                Se = null;
                break;
            case 'dragenter':
            case 'dragleave':
                pe = null;
                break;
            case 'mouseover':
            case 'mouseout':
                be = null;
                break;
            case 'pointerover':
            case 'pointerout':
                gu.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                Su.delete(t.pointerId);
        }
    }
    function pu(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n
            ? ((l = {
                  blockedOn: t,
                  domEventName: e,
                  eventSystemFlags: a,
                  nativeEvent: n,
                  targetContainers: [u],
              }),
              t !== null && ((t = Ke(t)), t !== null && id(t)),
              l)
            : ((l.eventSystemFlags |= a),
              (t = l.targetContainers),
              u !== null && t.indexOf(u) === -1 && t.push(u),
              l);
    }
    function V0(l, t, e, a, u) {
        switch (t) {
            case 'focusin':
                return ((Se = pu(Se, l, t, e, a, u)), !0);
            case 'dragenter':
                return ((pe = pu(pe, l, t, e, a, u)), !0);
            case 'mouseover':
                return ((be = pu(be, l, t, e, a, u)), !0);
            case 'pointerover':
                var n = u.pointerId;
                return (gu.set(n, pu(gu.get(n) || null, l, t, e, a, u)), !0);
            case 'gotpointercapture':
                return (
                    (n = u.pointerId),
                    Su.set(n, pu(Su.get(n) || null, l, t, e, a, u)),
                    !0
                );
        }
        return !1;
    }
    function rd(l) {
        var t = Ve(l.target);
        if (t !== null) {
            var e = q(t);
            if (e !== null) {
                if (((t = e.tag), t === 13)) {
                    if (((t = Z(e)), t !== null)) {
                        ((l.blockedOn = t),
                            zf(l.priority, function () {
                                cd(e);
                            }));
                        return;
                    }
                } else if (t === 31) {
                    if (((t = dl(e)), t !== null)) {
                        ((l.blockedOn = t),
                            zf(l.priority, function () {
                                cd(e);
                            }));
                        return;
                    }
                } else if (
                    t === 3 &&
                    e.stateNode.current.memoizedState.isDehydrated
                ) {
                    l.blockedOn =
                        e.tag === 3 ? e.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        l.blockedOn = null;
    }
    function Rn(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var e = tf(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type, e);
                ((ei = a), e.target.dispatchEvent(a), (ei = null));
            } else
                return (
                    (t = Ke(e)),
                    t !== null && id(t),
                    (l.blockedOn = e),
                    !1
                );
            t.shift();
        }
        return !0;
    }
    function od(l, t, e) {
        Rn(l) && e.delete(t);
    }
    function K0() {
        ((af = !1),
            Se !== null && Rn(Se) && (Se = null),
            pe !== null && Rn(pe) && (pe = null),
            be !== null && Rn(be) && (be = null),
            gu.forEach(od),
            Su.forEach(od));
    }
    function qn(l, t) {
        l.blockedOn === t &&
            ((l.blockedOn = null),
            af ||
                ((af = !0),
                p.unstable_scheduleCallback(p.unstable_NormalPriority, K0)));
    }
    var Yn = null;
    function dd(l) {
        Yn !== l &&
            ((Yn = l),
            p.unstable_scheduleCallback(p.unstable_NormalPriority, function () {
                Yn === l && (Yn = null);
                for (var t = 0; t < l.length; t += 3) {
                    var e = l[t],
                        a = l[t + 1],
                        u = l[t + 2];
                    if (typeof a != 'function') {
                        if (ef(a || e) === null) continue;
                        break;
                    }
                    var n = Ke(e);
                    n !== null &&
                        (l.splice(t, 3),
                        (t -= 3),
                        tc(
                            n,
                            {pending: !0, data: u, method: e.method, action: a},
                            a,
                            u,
                        ));
                }
            }));
    }
    function ja(l) {
        function t(s) {
            return qn(s, l);
        }
        (Se !== null && qn(Se, l),
            pe !== null && qn(pe, l),
            be !== null && qn(be, l),
            gu.forEach(t),
            Su.forEach(t));
        for (var e = 0; e < xe.length; e++) {
            var a = xe[e];
            a.blockedOn === l && (a.blockedOn = null);
        }
        for (; 0 < xe.length && ((e = xe[0]), e.blockedOn === null); )
            (rd(e), e.blockedOn === null && xe.shift());
        if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
            for (a = 0; a < e.length; a += 3) {
                var u = e[a],
                    n = e[a + 1],
                    i = u[lt] || null;
                if (typeof n == 'function') i || dd(e);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute('formAction')) {
                        if (((u = n), (i = n[lt] || null))) c = i.formAction;
                        else if (ef(u) !== null) continue;
                    } else c = i.action;
                    (typeof c == 'function'
                        ? (e[a + 1] = c)
                        : (e.splice(a, 3), (a -= 3)),
                        dd(e));
                }
            }
    }
    function hd() {
        function l(n) {
            n.canIntercept &&
                n.info === 'react-transition' &&
                n.intercept({
                    handler: function () {
                        return new Promise(function (i) {
                            return (u = i);
                        });
                    },
                    focusReset: 'manual',
                    scroll: 'manual',
                });
        }
        function t() {
            (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
        }
        function e() {
            if (!a && !navigation.transition) {
                var n = navigation.currentEntry;
                n &&
                    n.url != null &&
                    navigation.navigate(n.url, {
                        state: n.getState(),
                        info: 'react-transition',
                        history: 'replace',
                    });
            }
        }
        if (typeof navigation == 'object') {
            var a = !1,
                u = null;
            return (
                navigation.addEventListener('navigate', l),
                navigation.addEventListener('navigatesuccess', t),
                navigation.addEventListener('navigateerror', t),
                setTimeout(e, 100),
                function () {
                    ((a = !0),
                        navigation.removeEventListener('navigate', l),
                        navigation.removeEventListener('navigatesuccess', t),
                        navigation.removeEventListener('navigateerror', t),
                        u !== null && (u(), (u = null)));
                }
            );
        }
    }
    function uf(l) {
        this._internalRoot = l;
    }
    ((Gn.prototype.render = uf.prototype.render =
        function (l) {
            var t = this._internalRoot;
            if (t === null) throw Error(h(409));
            var e = t.current,
                a = vt();
            ud(e, a, l, t, null, null);
        }),
        (Gn.prototype.unmount = uf.prototype.unmount =
            function () {
                var l = this._internalRoot;
                if (l !== null) {
                    this._internalRoot = null;
                    var t = l.containerInfo;
                    (ud(l.current, 2, null, l, null, null),
                        pn(),
                        (t[Ze] = null));
                }
            }));
    function Gn(l) {
        this._internalRoot = l;
    }
    Gn.prototype.unstable_scheduleHydration = function (l) {
        if (l) {
            var t = Tf();
            l = {blockedOn: null, target: l, priority: t};
            for (
                var e = 0;
                e < xe.length && t !== 0 && t < xe[e].priority;
                e++
            );
            (xe.splice(e, 0, l), e === 0 && rd(l));
        }
    };
    var md = G.version;
    if (md !== '19.2.8') throw Error(h(527, md, '19.2.8'));
    E.findDOMNode = function (l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == 'function'
                ? Error(h(188))
                : ((l = Object.keys(l).join(',')), Error(h(268, l)));
        return (
            (l = x(t)),
            (l = l !== null ? Q(l) : null),
            (l = l === null ? null : l.stateNode),
            l
        );
    };
    var w0 = {
        bundleType: 0,
        version: '19.2.8',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: S,
        reconcilerVersion: '19.2.8',
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var Ln = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ln.isDisabled && Ln.supportsFiber)
            try {
                ((Na = Ln.inject(w0)), (ft = Ln));
            } catch {}
    }
    return (
        (xu.createRoot = function (l, t) {
            if (!_(l)) throw Error(h(299));
            var e = !1,
                a = '',
                u = br,
                n = xr,
                i = Tr;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (e = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (n = t.onCaughtError),
                    t.onRecoverableError !== void 0 &&
                        (i = t.onRecoverableError)),
                (t = ed(l, 1, !1, null, null, e, a, null, u, n, i, hd)),
                (l[Ze] = t.current),
                Gc(l),
                new uf(t)
            );
        }),
        (xu.hydrateRoot = function (l, t, e) {
            if (!_(l)) throw Error(h(299));
            var a = !1,
                u = '',
                n = br,
                i = xr,
                c = Tr,
                s = null;
            return (
                e != null &&
                    (e.unstable_strictMode === !0 && (a = !0),
                    e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
                    e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
                    e.onCaughtError !== void 0 && (i = e.onCaughtError),
                    e.onRecoverableError !== void 0 &&
                        (c = e.onRecoverableError),
                    e.formState !== void 0 && (s = e.formState)),
                (t = ed(l, 1, !0, t, e ?? null, a, u, s, n, i, c, hd)),
                (t.context = ad(null)),
                (e = t.current),
                (a = vt()),
                (a = Wn(a)),
                (u = ie(a)),
                (u.callback = null),
                ce(e, u, a),
                (e = a),
                (t.current.lanes = e),
                _a(t, e),
                Ut(t),
                (l[Ze] = t.current),
                Gc(l),
                new Gn(t)
            );
        }),
        (xu.version = '19.2.8'),
        xu
    );
}
var Ad;
function um() {
    if (Ad) return ff.exports;
    Ad = 1;
    function p() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
            } catch (G) {
                console.error(G);
            }
    }
    return (p(), (ff.exports = am()), ff.exports);
}
var nm = um();
function im({listening: p, obsStatus: G, onOpenSettings: X}) {
    const h =
            G &&
            G.toLowerCase().includes('connected') &&
            !G.toLowerCase().includes('not'),
        _ = G && G.toLowerCase().includes('error');
    return f.jsxs('header', {
        className: 'app-header',
        children: [
            f.jsxs('div', {
                className: 'header-brand',
                children: [
                    f.jsx('div', {
                        className: 'brand-icon',
                        title: 'ChurchScreen AI',
                        children: f.jsxs('svg', {
                            width: '20',
                            height: '20',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            strokeWidth: '2.2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            children: [
                                f.jsx('rect', {
                                    x: '2',
                                    y: '3',
                                    width: '20',
                                    height: '14',
                                    rx: '2',
                                    ry: '2',
                                }),
                                f.jsx('line', {
                                    x1: '8',
                                    y1: '21',
                                    x2: '16',
                                    y2: '21',
                                }),
                                f.jsx('line', {
                                    x1: '12',
                                    y1: '17',
                                    x2: '12',
                                    y2: '21',
                                }),
                                f.jsx('circle', {cx: '12', cy: '10', r: '2'}),
                            ],
                        }),
                    }),
                    f.jsxs('div', {
                        className: 'brand-text',
                        children: [
                            f.jsxs('div', {
                                className: 'brand-title',
                                children: [
                                    f.jsx('span', {
                                        children: 'ChurchScreen AI',
                                    }),
                                    f.jsx('span', {
                                        className: 'brand-mode',
                                        children: 'Service Mode',
                                    }),
                                ],
                            }),
                            f.jsx('span', {
                                className: 'brand-subtitle',
                                children: 'Live Scripture Assistant',
                            }),
                        ],
                    }),
                ],
            }),
            f.jsxs('div', {
                className: 'header-status',
                children: [
                    p
                        ? f.jsxs('span', {
                              className: 'badge badge-live',
                              title: 'Audio transcription active',
                              children: [
                                  f.jsx('span', {
                                      className: 'status-dot green pulse',
                                  }),
                                  'Listening',
                              ],
                          })
                        : f.jsxs('span', {
                              className: 'badge badge-standby',
                              title: 'Engine idle / Ready',
                              children: [
                                  f.jsx('span', {className: 'status-dot gray'}),
                                  'Standby',
                              ],
                          }),
                    f.jsxs('span', {
                        className: `badge ${h ? 'badge-live' : _ ? 'badge-danger' : 'badge-standby'}`,
                        title: `OBS status: ${G || 'Offline'}`,
                        children: [
                            f.jsx('span', {
                                className: `status-dot ${h ? 'green' : _ ? 'red' : 'gray'}`,
                            }),
                            h
                                ? 'OBS Connected'
                                : _
                                  ? 'OBS Error'
                                  : 'OBS Offline',
                        ],
                    }),
                    f.jsx('button', {
                        type: 'button',
                        className: 'btn-secondary btn-icon',
                        onClick: X,
                        title: 'Open Settings',
                        'aria-label': 'Settings',
                        children: f.jsxs('svg', {
                            width: '18',
                            height: '18',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            children: [
                                f.jsx('circle', {cx: '12', cy: '12', r: '3'}),
                                f.jsx('path', {
                                    d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
const Xe = 28;
function cm({listening: p, onAudioLevelChange: G}) {
    const [X, h] = $.useState(0),
        [_, q] = $.useState(() => new Array(Xe).fill(6)),
        [Z, dl] = $.useState(!1),
        [O, x] = $.useState('stopped'),
        [Q, D] = $.useState(''),
        w = $.useRef(null),
        fl = $.useRef(null),
        sl = $.useRef(null),
        P = $.useRef(0),
        xl = p || Z;
    return (
        $.useEffect(() => {
            if (!window.churchscreen?.onTranscriptionEvent) return;
            const ll = window.churchscreen.onTranscriptionEvent((ul) => {
                if (ul)
                    if (ul.type === 'status')
                        (x(ul.state || 'stopped'),
                            ul.state === 'stopped' && (h(0), (P.current = 0)));
                    else if (
                        ul.type === 'audio' &&
                        typeof ul.level == 'number'
                    ) {
                        const J = Math.min(1, Math.max(0, ul.level));
                        J > P.current && ((P.current = J), h(J));
                    } else ul.type === 'error' && ul.message && D(ul.message);
            });
            return () => {
                typeof ll == 'function' && ll();
            };
        }, []),
        $.useEffect(() => {
            if (!xl) {
                (w.current &&
                    (cancelAnimationFrame(w.current), (w.current = null)),
                    sl.current &&
                        (sl.current.getTracks().forEach((J) => J.stop()),
                        (sl.current = null)),
                    fl.current &&
                        fl.current.state !== 'closed' &&
                        (fl.current.close().catch(() => {}),
                        (fl.current = null)),
                    (P.current = 0),
                    h(0),
                    q(new Array(Xe).fill(6)));
                return;
            }
            let ll = !0;
            async function ul() {
                try {
                    if (!navigator.mediaDevices?.getUserMedia) return;
                    const J = await navigator.mediaDevices.getUserMedia({
                        audio: {
                            echoCancellation: !1,
                            noiseSuppression: !1,
                            autoGainControl: !1,
                        },
                    });
                    if (!ll) {
                        J.getTracks().forEach(($l) => $l.stop());
                        return;
                    }
                    sl.current = J;
                    const B = window.AudioContext || window.webkitAudioContext,
                        ml = new B();
                    ((fl.current = ml),
                        ml.state === 'suspended' && (await ml.resume()));
                    const yl = ml.createAnalyser();
                    ((yl.fftSize = 64),
                        (yl.smoothingTimeConstant = 0.55),
                        ml.createMediaStreamSource(J).connect(yl));
                    const Sl = new Uint8Array(yl.frequencyBinCount),
                        Bl = () => {
                            if (!ll) return;
                            yl.getByteFrequencyData(Sl);
                            let $l = 0;
                            for (let N = 0; N < Sl.length; N++) $l += Sl[N];
                            const Ll = $l / Sl.length,
                                Ml = Math.min(1, Math.max(0, (Ll / 128) * 1.6));
                            ((P.current = 0.35 * Ml + 0.65 * P.current),
                                h(P.current),
                                G && G(P.current));
                            const Pl = [];
                            for (let N = 0; N < Xe; N++) {
                                const vl = Math.min(
                                        Sl.length - 1,
                                        Math.floor(
                                            (N / Xe) * (Sl.length * 0.8),
                                        ),
                                    ),
                                    S = Sl[vl] / 255,
                                    E = 1 - Math.abs(N - Xe / 2) / (Xe / 1.7),
                                    Y = Math.max(
                                        6,
                                        Math.min(
                                            100,
                                            (S * 0.85 + P.current * 0.75) *
                                                E *
                                                125,
                                        ),
                                    );
                                Pl.push(Y);
                            }
                            (q(Pl), (w.current = requestAnimationFrame(Bl)));
                        };
                    w.current = requestAnimationFrame(Bl);
                } catch {
                    const B = setInterval(() => {
                        if (!ll) return;
                        const ml = P.current || (p ? 0.35 : 0),
                            yl = [];
                        for (let K = 0; K < Xe; K++) {
                            const Sl =
                                    Math.sin(Date.now() * 0.008 + K * 0.35) *
                                    0.3,
                                Bl = Math.max(
                                    6,
                                    Math.min(100, (ml + Sl * ml) * 100),
                                );
                            yl.push(Bl);
                        }
                        q(yl);
                    }, 50);
                    return () => clearInterval(B);
                }
            }
            return (
                ul(),
                () => {
                    ((ll = !1),
                        w.current && cancelAnimationFrame(w.current),
                        sl.current &&
                            sl.current.getTracks().forEach((J) => J.stop()),
                        fl.current &&
                            fl.current.state !== 'closed' &&
                            fl.current.close().catch(() => {}));
                }
            );
        }, [xl, p]),
        f.jsxs('div', {
            className: 'audio-meter-container',
            style: {
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
            },
            children: [
                f.jsxs('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                    },
                    children: [
                        f.jsxs('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.78rem',
                            },
                            children: [
                                f.jsx('span', {
                                    className: `status-dot ${xl ? 'green pulse' : 'gray'}`,
                                }),
                                f.jsx('span', {
                                    style: {
                                        color: 'var(--text-secondary)',
                                        fontWeight: 500,
                                    },
                                    children: xl
                                        ? 'Audio Activity'
                                        : 'Audio Input Standby',
                                }),
                                xl &&
                                    f.jsxs('span', {
                                        style: {
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.72rem',
                                            color:
                                                X > 0.7
                                                    ? 'var(--warning)'
                                                    : 'var(--success)',
                                            background:
                                                'rgba(255,255,255,0.05)',
                                            padding: '1px 6px',
                                            borderRadius: '4px',
                                        },
                                        children: [Math.round(X * 100), '%'],
                                    }),
                            ],
                        }),
                        f.jsx('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            },
                            children:
                                !p &&
                                f.jsx('button', {
                                    type: 'button',
                                    onClick: () => dl((ll) => !ll),
                                    style: {
                                        height: '26px',
                                        padding: '0 8px',
                                        fontSize: '0.72rem',
                                        borderRadius: '4px',
                                        background: Z
                                            ? 'rgba(79, 140, 255, 0.2)'
                                            : 'var(--bg-elevated)',
                                        borderColor: Z
                                            ? 'var(--accent)'
                                            : 'var(--border-subtle)',
                                        color: Z
                                            ? 'var(--accent-hover)'
                                            : 'var(--text-secondary)',
                                    },
                                    children: Z
                                        ? 'Stop Mic Test'
                                        : 'Test Mic Level',
                                }),
                        }),
                    ],
                }),
                f.jsx('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '3px',
                        height: '28px',
                        background: 'rgba(0, 0, 0, 0.35)',
                        borderRadius: '4px',
                        padding: '3px 6px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                    },
                    'aria-label': 'Audio Visualizer',
                    children: _.map((ll, ul) => {
                        let J = 'rgba(255, 255, 255, 0.1)',
                            B = 'none';
                        return (
                            xl &&
                                ll > 10 &&
                                (ll > 80
                                    ? ((J =
                                          'linear-gradient(180deg, #F05D5E, #F5B942)'),
                                      (B = '0 0 4px rgba(240, 93, 94, 0.5)'))
                                    : ll > 55
                                      ? ((J =
                                            'linear-gradient(180deg, #F5B942, #28C76F)'),
                                        (B = '0 0 4px rgba(245, 185, 66, 0.4)'))
                                      : ((J =
                                            'linear-gradient(180deg, #38EF7D, #28C76F)'),
                                        (B =
                                            '0 0 3px rgba(40, 199, 111, 0.3)'))),
                            f.jsx(
                                'div',
                                {
                                    style: {
                                        flex: 1,
                                        height: `${ll}%`,
                                        background: J,
                                        boxShadow: B,
                                        borderRadius: '1px',
                                        minHeight: '4px',
                                        transition: 'height 0.05s ease-out',
                                    },
                                },
                                ul,
                            )
                        );
                    }),
                }),
                Q &&
                    f.jsx('div', {
                        style: {
                            marginTop: '6px',
                            fontSize: '0.76rem',
                            color: 'var(--danger)',
                            background: 'var(--danger-bg)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                        },
                        children: Q,
                    }),
            ],
        })
    );
}
const fm = [
    'Please turn with me to John 3:16.',
    'Our reading is Psalm 23:1-2.',
    'Remember Romans 8:28 today.',
    'I can do all things through Christ, Philippians 4:13.',
];
function sm({
    listening: p,
    onStartListening: G,
    onStopListening: X,
    transcript: h,
    history: _ = [],
    onClearHistory: q,
    onDetect: Z,
    audioDevice: dl = 'Default Microphone',
    hasAudioError: O = !1,
    notice: x = '',
}) {
    const [Q, D] = $.useState(0),
        [w, fl] = $.useState(!1),
        [sl, P] = $.useState('');
    $.useEffect(() => {
        let B = null;
        return (
            p
                ? (B = setInterval(() => {
                      D((ml) => ml + 1);
                  }, 1e3))
                : D(0),
            () => {
                B && clearInterval(B);
            }
        );
    }, [p]);
    const xl = (B) => {
            const ml = Math.floor(B / 60),
                yl = B % 60;
            return `${ml.toString().padStart(2, '0')}:${yl.toString().padStart(2, '0')}`;
        },
        ll = (B) => {
            (B.preventDefault(), sl.trim() && (Z(sl.trim()), P('')));
        },
        ul = (B) => {
            Z(B);
        };
    let J = 'Ready to listen';
    return (
        O ? (J = 'Microphone unavailable') : p && (J = 'Listening'),
        f.jsxs('section', {
            className: 'panel-card transcript-panel',
            'aria-label': 'Live Transcript Panel',
            children: [
                f.jsxs('div', {
                    className: 'panel-top-row',
                    children: [
                        f.jsxs('div', {
                            className: 'panel-state-heading',
                            children: [
                                f.jsx('p', {
                                    className: 'eyebrow',
                                    children: 'LIVE TRANSCRIPT',
                                }),
                                f.jsxs('h2', {
                                    children: [
                                        p &&
                                            f.jsx('span', {
                                                className:
                                                    'status-dot green pulse',
                                                style: {
                                                    width: '10px',
                                                    height: '10px',
                                                },
                                            }),
                                        J,
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: 'panel-state-meta',
                                    children: [
                                        f.jsxs('span', {
                                            className: 'panel-meta-item',
                                            children: [
                                                f.jsxs('svg', {
                                                    width: '14',
                                                    height: '14',
                                                    viewBox: '0 0 24 24',
                                                    fill: 'none',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                    strokeLinejoin: 'round',
                                                    children: [
                                                        f.jsx('path', {
                                                            d: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z',
                                                        }),
                                                        f.jsx('path', {
                                                            d: 'M19 10v2a7 7 0 0 1-14 0v-2',
                                                        }),
                                                        f.jsx('line', {
                                                            x1: '12',
                                                            y1: '19',
                                                            x2: '12',
                                                            y2: '23',
                                                        }),
                                                        f.jsx('line', {
                                                            x1: '8',
                                                            y1: '23',
                                                            x2: '16',
                                                            y2: '23',
                                                        }),
                                                    ],
                                                }),
                                                f.jsxs('span', {
                                                    children: [
                                                        dl,
                                                        ' · ',
                                                        p
                                                            ? 'Input active'
                                                            : 'Standby',
                                                    ],
                                                }),
                                            ],
                                        }),
                                        p &&
                                            f.jsxs('span', {
                                                className: 'timer-tag',
                                                title: 'Listening duration',
                                                children: ['⏱ ', xl(Q)],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsx('div', {
                            children: p
                                ? f.jsxs('button', {
                                      type: 'button',
                                      className: 'btn-danger-outline',
                                      onClick: X,
                                      title: 'Stop listening and pause live speech transcription',
                                      children: [
                                          f.jsx('svg', {
                                              width: '15',
                                              height: '15',
                                              viewBox: '0 0 24 24',
                                              fill: 'currentColor',
                                              children: f.jsx('rect', {
                                                  x: '5',
                                                  y: '5',
                                                  width: '14',
                                                  height: '14',
                                                  rx: '2',
                                              }),
                                          }),
                                          'Stop Listening',
                                      ],
                                  })
                                : f.jsxs('button', {
                                      type: 'button',
                                      className: 'btn-success',
                                      onClick: G,
                                      title: 'Start listening through microphone with local Whisper',
                                      children: [
                                          f.jsxs('svg', {
                                              width: '16',
                                              height: '16',
                                              viewBox: '0 0 24 24',
                                              fill: 'none',
                                              stroke: 'currentColor',
                                              strokeWidth: '2.4',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                              children: [
                                                  f.jsx('path', {
                                                      d: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z',
                                                  }),
                                                  f.jsx('path', {
                                                      d: 'M19 10v2a7 7 0 0 1-14 0v-2',
                                                  }),
                                              ],
                                          }),
                                          'Start Listening',
                                      ],
                                  }),
                        }),
                    ],
                }),
                f.jsx(cm, {listening: p}),
                f.jsxs('div', {
                    className: 'active-transcript-card',
                    children: [
                        f.jsxs('div', {
                            className: 'transcript-header-row',
                            children: [
                                f.jsx('span', {
                                    style: {
                                        fontSize: '0.74rem',
                                        fontWeight: 600,
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                    },
                                    children: 'Current Spoken Transcript',
                                }),
                                h &&
                                    f.jsx('span', {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: 'var(--accent)',
                                            fontWeight: 600,
                                        },
                                        children: 'Live',
                                    }),
                            ],
                        }),
                        f.jsx('div', {
                            className: 'active-transcript-text',
                            children: h
                                ? f.jsxs('span', {
                                      children: [
                                          h,
                                          p &&
                                              f.jsx('span', {
                                                  style: {
                                                      display: 'inline-block',
                                                      width: '6px',
                                                      height: '14px',
                                                      background:
                                                          'var(--accent)',
                                                      marginLeft: '4px',
                                                      verticalAlign: 'middle',
                                                      animation:
                                                          'dotPulse 0.9s infinite',
                                                  },
                                              }),
                                      ],
                                  })
                                : f.jsx('span', {
                                      className:
                                          'active-transcript-placeholder',
                                      children: p
                                          ? 'Listening to spoken words… Speak scripture references like “John 3:16” or “Psalm 23:1”.'
                                          : 'Speech transcription is idle. Click “Start Listening” or use test phrases below.',
                                  }),
                        }),
                    ],
                }),
                f.jsxs('div', {
                    className: 'transcript-history-section',
                    children: [
                        f.jsxs('div', {
                            className: 'history-header',
                            children: [
                                f.jsxs('span', {
                                    style: {
                                        fontSize: '0.74rem',
                                        fontWeight: 700,
                                        color: 'var(--text-secondary)',
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                    },
                                    children: [
                                        'Recent Transcript History (',
                                        _.length,
                                        ')',
                                    ],
                                }),
                                _.length > 0 &&
                                    f.jsx('button', {
                                        type: 'button',
                                        className: 'btn-ghost',
                                        onClick: q,
                                        style: {
                                            height: '22px',
                                            padding: '0 6px',
                                            fontSize: '0.7rem',
                                        },
                                        title: 'Clear transcript history',
                                        children: 'Clear',
                                    }),
                            ],
                        }),
                        f.jsx('div', {
                            className: 'history-list',
                            children:
                                _.length > 0
                                    ? _.map((B, ml) =>
                                          f.jsxs(
                                              'div',
                                              {
                                                  className: 'history-item',
                                                  onClick: () => Z(B.text),
                                                  style: {cursor: 'pointer'},
                                                  title: 'Click to re-run detection on this phrase',
                                                  children: [
                                                      f.jsxs('div', {
                                                          className:
                                                              'history-meta',
                                                          children: [
                                                              f.jsx('span', {
                                                                  style: {
                                                                      fontWeight: 600,
                                                                      color: B.detected
                                                                          ? 'var(--accent)'
                                                                          : 'var(--text-muted)',
                                                                  },
                                                                  children:
                                                                      B.detected
                                                                          ? `✓ ${B.detected.label || B.detected.book}`
                                                                          : 'Transcription',
                                                              }),
                                                              f.jsx('span', {
                                                                  children:
                                                                      B.timestamp ||
                                                                      'Just now',
                                                              }),
                                                          ],
                                                      }),
                                                      f.jsxs('p', {
                                                          className:
                                                              'history-text',
                                                          children: [
                                                              '“',
                                                              B.text,
                                                              '”',
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              B.id || ml,
                                          ),
                                      )
                                    : f.jsx('div', {
                                          className: 'history-empty',
                                          children: f.jsx('span', {
                                              children:
                                                  'No prior speech segments recorded yet during this session.',
                                          }),
                                      }),
                        }),
                    ],
                }),
                f.jsxs('div', {
                    className: 'test-section',
                    children: [
                        f.jsxs('div', {
                            className: 'test-section-header',
                            onClick: () => fl((B) => !B),
                            role: 'button',
                            tabIndex: '0',
                            'aria-expanded': w,
                            children: [
                                f.jsxs('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    },
                                    children: [
                                        f.jsx('svg', {
                                            width: '14',
                                            height: '14',
                                            viewBox: '0 0 24 24',
                                            fill: 'none',
                                            stroke: 'currentColor',
                                            strokeWidth: '2',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                            children: f.jsx('polygon', {
                                                points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2',
                                            }),
                                        }),
                                        f.jsx('span', {
                                            children:
                                                'Operator Testing & Demo Inputs',
                                        }),
                                    ],
                                }),
                                f.jsx('span', {
                                    style: {
                                        fontSize: '0.74rem',
                                        color: 'var(--text-muted)',
                                    },
                                    children: w ? '▲ Hide' : '▼ Expand',
                                }),
                            ],
                        }),
                        w &&
                            f.jsxs('div', {
                                className: 'test-section-content',
                                children: [
                                    f.jsxs('form', {
                                        onSubmit: ll,
                                        className: 'test-input-row',
                                        children: [
                                            f.jsx('input', {
                                                type: 'text',
                                                className: 'test-input',
                                                placeholder:
                                                    'Type custom text (e.g. John 3:16 or Psalm 23:1-2)...',
                                                value: sl,
                                                onChange: (B) =>
                                                    P(B.target.value),
                                            }),
                                            f.jsx('button', {
                                                type: 'submit',
                                                className: 'btn-secondary',
                                                style: {height: '40px'},
                                                children: 'Detect',
                                            }),
                                        ],
                                    }),
                                    f.jsxs('div', {
                                        children: [
                                            f.jsx('div', {
                                                style: {
                                                    fontSize: '0.74rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: '6px',
                                                },
                                                children: 'Quick Test Phrases:',
                                            }),
                                            f.jsx('div', {
                                                className: 'sample-chips',
                                                children: fm.map((B) =>
                                                    f.jsx(
                                                        'button',
                                                        {
                                                            type: 'button',
                                                            className:
                                                                'sample-chip',
                                                            onClick: () =>
                                                                ul(B),
                                                            children: B,
                                                        },
                                                        B,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function rm({
    result: p,
    onDisplay: G,
    onIgnore: X,
    onClearDisplay: h,
    autoDisplay: _ = !1,
    onToggleAutoDisplay: q,
}) {
    const Z = () =>
        f.jsxs('div', {
            className: 'preview-header-bar',
            children: [
                f.jsx('p', {
                    className: 'eyebrow',
                    style: {margin: 0},
                    children: 'SCRIPTURE PREVIEW & OBS',
                }),
                f.jsxs('label', {
                    className: `auto-switch ${_ ? 'active' : ''}`,
                    title: 'Automatically push detected scriptures directly to OBS without pressing Display',
                    children: [
                        f.jsx('input', {
                            type: 'checkbox',
                            checked: !!_,
                            onChange: (O) => q?.(O.target.checked),
                        }),
                        f.jsx('span', {className: 'switch-slider'}),
                        f.jsx('span', {
                            className: `switch-text ${_ ? 'active' : ''}`,
                            children: _ ? '⚡ Auto-Display ON' : 'Manual',
                        }),
                    ],
                }),
            ],
        });
    if (!p || (!p.detected && !p.verse))
        return f.jsxs('section', {
            className: 'panel-card scripture-panel',
            'aria-label': 'Scripture Preview',
            children: [
                Z(),
                f.jsxs('div', {
                    className: 'empty-state',
                    children: [
                        f.jsx('div', {
                            className: 'empty-icon-circle',
                            children: f.jsxs('svg', {
                                width: '28',
                                height: '28',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeWidth: '1.8',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                children: [
                                    f.jsx('path', {
                                        d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
                                    }),
                                    f.jsx('path', {
                                        d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
                                    }),
                                    f.jsx('path', {d: 'M12 6v6'}),
                                    f.jsx('path', {d: 'M9 9h6'}),
                                ],
                            }),
                        }),
                        f.jsx('h3', {
                            className: 'empty-heading',
                            children: 'Waiting for scripture reference',
                        }),
                        f.jsx('p', {
                            className: 'empty-desc',
                            children: _
                                ? 'Hands-free mode active. As soon as a Bible verse is spoken, it will display automatically on OBS!'
                                : 'Detected scriptures will appear here for your review before sending them to the live display.',
                        }),
                        f.jsxs('div', {
                            className: `mode-indicator-pill ${_ ? 'auto' : 'manual'}`,
                            children: [
                                f.jsx('span', {
                                    className: `status-dot ${_ ? 'green' : 'gray'}`,
                                }),
                                f.jsx('span', {
                                    children: _
                                        ? '⚡ Auto-Display Active: Verses push to OBS automatically'
                                        : 'Manual Mode: Click "Display in OBS" to push verses',
                                }),
                            ],
                        }),
                        h &&
                            f.jsx('div', {
                                style: {marginTop: '20px'},
                                children: f.jsx('button', {
                                    type: 'button',
                                    className: 'btn-ghost',
                                    onClick: h,
                                    title: 'Clear current text from the OBS scripture source',
                                    style: {
                                        fontSize: '0.76rem',
                                        color: 'var(--text-muted)',
                                        border: '1px solid var(--border-subtle)',
                                    },
                                    children: 'Clear Live OBS Screen',
                                }),
                            }),
                    ],
                }),
            ],
        });
    if (p.detected && !p.verse) {
        const O =
            p.detected.label ||
            `${p.detected.book} ${p.detected.chapter}:${p.detected.startVerse}`;
        return f.jsxs('section', {
            className: 'panel-card scripture-panel',
            'aria-label': 'Scripture Preview',
            children: [
                Z(),
                f.jsxs('div', {
                    className: 'scripture-card-body',
                    children: [
                        f.jsxs('div', {
                            className: 'scripture-content-wrapper',
                            children: [
                                f.jsxs('div', {
                                    className: 'not-found-card',
                                    children: [
                                        f.jsxs('h3', {
                                            className: 'not-found-heading',
                                            children: [
                                                f.jsxs('svg', {
                                                    width: '20',
                                                    height: '20',
                                                    viewBox: '0 0 24 24',
                                                    fill: 'none',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '2',
                                                    strokeLinecap: 'round',
                                                    strokeLinejoin: 'round',
                                                    children: [
                                                        f.jsx('circle', {
                                                            cx: '12',
                                                            cy: '12',
                                                            r: '10',
                                                        }),
                                                        f.jsx('line', {
                                                            x1: '12',
                                                            y1: '8',
                                                            x2: '12',
                                                            y2: '12',
                                                        }),
                                                        f.jsx('line', {
                                                            x1: '12',
                                                            y1: '16',
                                                            x2: '12.01',
                                                            y2: '16',
                                                        }),
                                                    ],
                                                }),
                                                'Verse not available locally',
                                            ],
                                        }),
                                        f.jsxs('p', {
                                            className: 'not-found-body',
                                            children: [
                                                f.jsx('strong', {children: O}),
                                                ' was recognized from the spoken text, but it is not included in the current local Bible database.',
                                            ],
                                        }),
                                        f.jsx('p', {
                                            className: 'not-found-body',
                                            style: {
                                                fontSize: '0.8rem',
                                                color: 'var(--text-muted)',
                                            },
                                            children:
                                                'Please verify that the chapter and verse numbers exist in the book.',
                                        }),
                                    ],
                                }),
                                p.transcript &&
                                    f.jsxs('div', {
                                        className: 'detection-attribution',
                                        children: [
                                            'Detected from: ',
                                            f.jsxs('span', {
                                                className: 'detection-quote',
                                                children: [
                                                    '“',
                                                    p.transcript,
                                                    '”',
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        f.jsx('div', {
                            className: 'scripture-actions-group',
                            children: f.jsx('button', {
                                type: 'button',
                                className: 'btn-secondary',
                                onClick: X,
                                style: {width: '100%'},
                                children: 'Dismiss Notice',
                            }),
                        }),
                    ],
                }),
            ],
        });
    }
    const {verse: dl} = p;
    return f.jsxs('section', {
        className: 'panel-card scripture-panel',
        'aria-label': 'Scripture Preview',
        children: [
            Z(),
            f.jsxs('div', {
                className: 'scripture-card-body',
                children: [
                    f.jsxs('div', {
                        className: 'scripture-content-wrapper',
                        children: [
                            f.jsxs('div', {
                                className: 'reference-header-row',
                                children: [
                                    f.jsxs('div', {
                                        className: 'reference-title-group',
                                        children: [
                                            f.jsx('h2', {
                                                className: 'reference-heading',
                                                children: dl.reference,
                                            }),
                                            f.jsx('span', {
                                                className: 'translation-badge',
                                                title: 'King James Version',
                                                children: 'KJV',
                                            }),
                                        ],
                                    }),
                                    f.jsxs('div', {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                        },
                                        children: [
                                            _ &&
                                                f.jsx('span', {
                                                    className:
                                                        'badge badge-live',
                                                    style: {
                                                        fontSize: '0.68rem',
                                                        padding: '3px 8px',
                                                    },
                                                    children: '⚡ Auto-Pushed',
                                                }),
                                            f.jsxs('span', {
                                                className: 'confidence-tag',
                                                title: 'Matched canonical reference',
                                                children: [
                                                    f.jsx('svg', {
                                                        width: '14',
                                                        height: '14',
                                                        viewBox: '0 0 24 24',
                                                        fill: 'none',
                                                        stroke: 'currentColor',
                                                        strokeWidth: '2.5',
                                                        strokeLinecap: 'round',
                                                        strokeLinejoin: 'round',
                                                        children: f.jsx(
                                                            'polyline',
                                                            {
                                                                points: '20 6 9 17 4 12',
                                                            },
                                                        ),
                                                    }),
                                                    'High confidence',
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            f.jsx('div', {
                                className: 'scripture-verses-box',
                                tabIndex: '0',
                                'aria-label': 'Verse text',
                                children:
                                    dl.verses &&
                                    dl.verses.map((O) =>
                                        f.jsxs(
                                            'p',
                                            {
                                                className: 'verse-paragraph',
                                                children: [
                                                    f.jsx('sup', {
                                                        className: 'verse-num',
                                                        children: O.verse,
                                                    }),
                                                    O.text,
                                                ],
                                            },
                                            O.verse,
                                        ),
                                    ),
                            }),
                            p.transcript &&
                                f.jsxs('div', {
                                    className: 'detection-attribution',
                                    children: [
                                        'Detected from: ',
                                        f.jsxs('span', {
                                            className: 'detection-quote',
                                            children: ['“', p.transcript, '”'],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    f.jsxs('div', {
                        className: 'scripture-actions-group',
                        children: [
                            f.jsxs('div', {
                                className: 'action-buttons-row',
                                children: [
                                    f.jsxs('button', {
                                        type: 'button',
                                        className: 'btn-primary',
                                        onClick: G,
                                        title: _
                                            ? 'Already sent to OBS automatically. Click to re-display.'
                                            : 'Push this scripture to OBS text source',
                                        children: [
                                            f.jsxs('svg', {
                                                width: '18',
                                                height: '18',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                stroke: 'currentColor',
                                                strokeWidth: '2.2',
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                children: [
                                                    f.jsx('rect', {
                                                        x: '2',
                                                        y: '3',
                                                        width: '20',
                                                        height: '14',
                                                        rx: '2',
                                                        ry: '2',
                                                    }),
                                                    f.jsx('line', {
                                                        x1: '8',
                                                        y1: '21',
                                                        x2: '16',
                                                        y2: '21',
                                                    }),
                                                    f.jsx('line', {
                                                        x1: '12',
                                                        y1: '17',
                                                        x2: '12',
                                                        y2: '21',
                                                    }),
                                                    f.jsx('polygon', {
                                                        points: '10 8 16 10 10 12 10 8',
                                                        fill: 'currentColor',
                                                        stroke: 'none',
                                                    }),
                                                ],
                                            }),
                                            _
                                                ? 'Re-Display in OBS'
                                                : 'Display in OBS',
                                        ],
                                    }),
                                    h &&
                                        f.jsx('button', {
                                            type: 'button',
                                            className: 'btn-secondary',
                                            onClick: h,
                                            title: 'Clear current text from OBS screen',
                                            children: 'Clear Screen',
                                        }),
                                    f.jsx('button', {
                                        type: 'button',
                                        className: 'btn-secondary',
                                        onClick: X,
                                        title: 'Dismiss this preview without modifying OBS',
                                        children: 'Dismiss',
                                    }),
                                ],
                            }),
                            f.jsxs('div', {
                                className: 'obs-target-indicator',
                                children: [
                                    f.jsxs('svg', {
                                        width: '13',
                                        height: '13',
                                        viewBox: '0 0 24 24',
                                        fill: 'none',
                                        stroke: 'currentColor',
                                        strokeWidth: '2',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                        children: [
                                            f.jsx('circle', {
                                                cx: '12',
                                                cy: '12',
                                                r: '10',
                                            }),
                                            f.jsx('line', {
                                                x1: '12',
                                                y1: '16',
                                                x2: '12',
                                                y2: '12',
                                            }),
                                            f.jsx('line', {
                                                x1: '12',
                                                y1: '8',
                                                x2: '12.01',
                                                y2: '8',
                                            }),
                                        ],
                                    }),
                                    f.jsxs('span', {
                                        children: [
                                            'Target: ',
                                            f.jsx('span', {
                                                className: 'obs-target-name',
                                                children: 'OBS Text Layer',
                                            }),
                                            _
                                                ? ' (⚡ Auto-Sync Active)'
                                                : ' (Manual Mode)',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function om({status: p, listening: G, audioDevice: X = 'Default Microphone'}) {
    const h = p.database || 'Database checking…',
        _ = h.toLowerCase().includes('ready');
    let q = 'Whisper ready',
        Z = 'green';
    G
        ? ((q = 'Whisper listening'), (Z = 'green pulse'))
        : p.transcription &&
          (p.transcription.toLowerCase().includes('not-configured') ||
          p.transcription.toLowerCase().includes('stopped')
              ? ((q = 'Whisper standby'), (Z = 'gray'))
              : p.transcription.toLowerCase().includes('running')
                ? ((q = 'Whisper ready'), (Z = 'green'))
                : ((q = `Whisper ${p.transcription}`), (Z = 'amber')));
    const dl = G ? `${X} · Active` : `${X} · Ready`,
        O = G ? 'green' : 'gray',
        x = p.obs || 'Not connected',
        Q =
            x.toLowerCase().includes('connected') &&
            !x.toLowerCase().includes('not'),
        D = x.toLowerCase().includes('error'),
        w = Q
            ? 'OBS Studio: Connected'
            : D
              ? 'OBS Studio: Error'
              : 'OBS Studio: Disconnected',
        fl = Q ? 'green' : D ? 'red' : 'gray';
    return f.jsxs('footer', {
        className: 'system-status-bar',
        role: 'status',
        'aria-label': 'System status',
        children: [
            f.jsxs('div', {
                className: 'status-bar-items',
                children: [
                    f.jsxs('div', {
                        className: 'status-bar-item',
                        title: 'Local SQLite Scripture Database',
                        children: [
                            f.jsx('span', {
                                className: `status-dot ${_ ? 'green' : 'amber'}`,
                            }),
                            f.jsx('span', {
                                className: 'status-bar-label',
                                children: 'Database:',
                            }),
                            f.jsx('span', {
                                className: 'status-bar-value',
                                children: h,
                            }),
                        ],
                    }),
                    f.jsxs('div', {
                        className: 'status-bar-item',
                        title: 'Local Whisper Speech Recognition',
                        children: [
                            f.jsx('span', {className: `status-dot ${Z}`}),
                            f.jsx('span', {
                                className: 'status-bar-label',
                                children: 'Transcription:',
                            }),
                            f.jsx('span', {
                                className: 'status-bar-value',
                                children: q,
                            }),
                        ],
                    }),
                    f.jsxs('div', {
                        className: 'status-bar-item',
                        title: 'Current Audio Input Device',
                        children: [
                            f.jsx('span', {className: `status-dot ${O}`}),
                            f.jsx('span', {
                                className: 'status-bar-label',
                                children: 'Audio:',
                            }),
                            f.jsx('span', {
                                className: 'status-bar-value',
                                children: dl,
                            }),
                        ],
                    }),
                    f.jsxs('div', {
                        className: 'status-bar-item',
                        title: 'OBS Studio WebSocket Connection',
                        children: [
                            f.jsx('span', {className: `status-dot ${fl}`}),
                            f.jsx('span', {
                                className: 'status-bar-label',
                                children: 'Broadcast:',
                            }),
                            f.jsx('span', {
                                className: 'status-bar-value',
                                children: w,
                            }),
                        ],
                    }),
                ],
            }),
            f.jsx('div', {
                className: 'status-bar-meta',
                style: {color: 'var(--text-muted)', fontSize: '0.72rem'},
                children: 'Offline-First',
            }),
        ],
    });
}
function dm({
    isOpen: p,
    onClose: G,
    status: X,
    onTestObsConnection: h,
    selectedAudioDevice: _,
    onSelectAudioDevice: q,
    whisperModel: Z = 'small',
    onSelectWhisperModel: dl,
    autoDisplay: O = !1,
    onToggleAutoDisplay: x,
}) {
    const [Q, D] = $.useState('localhost'),
        [w, fl] = $.useState('4455'),
        [sl, P] = $.useState(''),
        [xl, ll] = $.useState('Scripture Text'),
        [ul, J] = $.useState(''),
        [B, ml] = $.useState(!1),
        [yl, K] = $.useState([]),
        [Sl, Bl] = $.useState([
            {id: 'default', label: 'Default System Microphone (Auto)'},
        ]),
        [$l, Ll] = $.useState('default');
    if (
        ($.useEffect(() => {
            if (p) {
                if (_) {
                    const N =
                        _.id ||
                        (_.index !== void 0 ? String(_.index) : 'default');
                    Ll(N);
                }
                (window.churchscreen?.getObsSettings &&
                    window.churchscreen
                        .getObsSettings()
                        .then((N) => {
                            N &&
                                (N.host && D(N.host),
                                N.port && fl(String(N.port)),
                                N.password !== void 0 && P(N.password),
                                N.source && ll(N.source));
                        })
                        .catch(() => {}),
                    window.churchscreen?.getAudioDevices &&
                        window.churchscreen
                            .getAudioDevices()
                            .then((N) => {
                                if (Array.isArray(N) && N.length > 0) {
                                    const vl = [
                                        {
                                            id: 'default',
                                            index: 'default',
                                            label: 'Default System Microphone (Auto)',
                                        },
                                        ...N.map((S) => ({
                                            id: String(S.index),
                                            index: S.index,
                                            label: S.label || S.name,
                                            name: S.name,
                                            channels: S.channels,
                                            hostapi: S.hostapi,
                                        })),
                                    ];
                                    Bl(vl);
                                }
                            })
                            .catch(() => {}));
            }
        }, [p, _]),
        $.useEffect(() => {
            const N = (vl) => {
                vl.key === 'Escape' && p && Ml();
            };
            return (
                window.addEventListener('keydown', N),
                () => window.removeEventListener('keydown', N)
            );
        }, [p, Q, w, sl, xl]),
        !p)
    )
        return null;
    const Ml = () => {
            (window.churchscreen?.saveObsSettings &&
                window.churchscreen
                    .saveObsSettings({
                        host: Q.trim() || 'localhost',
                        port: w.trim() || '4455',
                        password: sl,
                        source: xl.trim() || 'Scripture Text',
                    })
                    .catch(() => {}),
                G());
        },
        Pl = async () => {
            (ml(!0), J(''));
            try {
                const N = {
                    host: Q.trim() || 'localhost',
                    port: w.trim() || '4455',
                    password: sl,
                    source: xl.trim() || 'Scripture Text',
                };
                if (h) {
                    const vl = await h(N);
                    (J(
                        vl.message ||
                            (vl.success
                                ? 'Connected successfully!'
                                : 'Failed to connect.'),
                    ),
                        vl.textSources &&
                            vl.textSources.length > 0 &&
                            K(vl.textSources));
                }
            } catch (N) {
                J(N.message || 'Failed to connect to OBS.');
            } finally {
                ml(!1);
            }
        };
    return f.jsx('div', {
        className: 'modal-overlay',
        onClick: Ml,
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': 'settings-title',
        children: f.jsxs('div', {
            className: 'modal-container',
            onClick: (N) => N.stopPropagation(),
            children: [
                f.jsxs('div', {
                    className: 'modal-header',
                    children: [
                        f.jsxs('div', {
                            className: 'modal-title-group',
                            children: [
                                f.jsx('h3', {
                                    id: 'settings-title',
                                    children: 'Hardware & Service Settings',
                                }),
                                f.jsx('p', {
                                    children:
                                        'Configure local audio devices, speech recognition engine, and OBS broadcast output.',
                                }),
                            ],
                        }),
                        f.jsx('button', {
                            type: 'button',
                            className: 'btn-ghost btn-icon',
                            onClick: Ml,
                            'aria-label': 'Close settings',
                            style: {width: '32px', height: '32px'},
                            children: '✕',
                        }),
                    ],
                }),
                f.jsxs('div', {
                    className: 'modal-body',
                    children: [
                        f.jsxs('section', {
                            className: 'settings-section',
                            children: [
                                f.jsxs('div', {
                                    className: 'settings-section-title',
                                    children: [
                                        f.jsx('span', {
                                            children: '1. Audio Input',
                                        }),
                                        f.jsx('span', {
                                            className: 'badge badge-info',
                                            children: 'Active',
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        f.jsx('label', {
                                            htmlFor: 'audio-device-select',
                                            children:
                                                'Microphone / Sound Card Input',
                                        }),
                                        f.jsx('select', {
                                            id: 'audio-device-select',
                                            className: 'form-control',
                                            value: $l,
                                            onChange: (N) => {
                                                const vl = N.target.value;
                                                Ll(vl);
                                                const S = Sl.find(
                                                    (E) =>
                                                        String(
                                                            E.id || E.index,
                                                        ) === String(vl),
                                                );
                                                q &&
                                                    (vl === 'default'
                                                        ? q({
                                                              id: 'default',
                                                              index: 'default',
                                                              label: 'Default System Microphone',
                                                          })
                                                        : S &&
                                                          q({
                                                              id: vl,
                                                              index: S.index,
                                                              label: S.label,
                                                              name: S.name,
                                                          }));
                                            },
                                            children: Sl.map((N) =>
                                                f.jsx(
                                                    'option',
                                                    {
                                                        value: N.id || N.index,
                                                        children: N.label,
                                                    },
                                                    N.id || N.index,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                f.jsx('div', {
                                    style: {
                                        fontSize: '0.78rem',
                                        color: 'var(--text-muted)',
                                    },
                                    children:
                                        'Select an external mixer, USB sound card, or audio interface for church service feeds.',
                                }),
                            ],
                        }),
                        f.jsxs('section', {
                            className: 'settings-section',
                            children: [
                                f.jsxs('div', {
                                    className: 'settings-section-title',
                                    children: [
                                        f.jsx('span', {
                                            children:
                                                '2. Local Transcription (Whisper)',
                                        }),
                                        f.jsx('span', {
                                            className: 'badge badge-live',
                                            children: 'Offline-Ready',
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '12px',
                                    },
                                    children: [
                                        f.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                f.jsx('label', {
                                                    children:
                                                        'Whisper Speech Model',
                                                }),
                                                f.jsxs('select', {
                                                    className: 'form-control',
                                                    value: Z || 'small',
                                                    onChange: (N) => {
                                                        dl &&
                                                            dl(N.target.value);
                                                    },
                                                    children: [
                                                        f.jsx('option', {
                                                            value: 'small',
                                                            children:
                                                                'small (Recommended — Best for Accents)',
                                                        }),
                                                        f.jsx('option', {
                                                            value: 'base',
                                                            children:
                                                                'base (Multilingual / Accents)',
                                                        }),
                                                        f.jsx('option', {
                                                            value: 'small.en',
                                                            children:
                                                                'small.en (Standard English)',
                                                        }),
                                                        f.jsx('option', {
                                                            value: 'base.en',
                                                            children:
                                                                'base.en (Standard English — Faster)',
                                                        }),
                                                        f.jsx('option', {
                                                            value: 'tiny.en',
                                                            children:
                                                                'tiny.en (Fastest, low accuracy)',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                f.jsx('label', {
                                                    children: 'Language',
                                                }),
                                                f.jsx('select', {
                                                    className: 'form-control',
                                                    defaultValue: 'en',
                                                    disabled: !0,
                                                    children: f.jsx('option', {
                                                        value: 'en',
                                                        children:
                                                            'English (default)',
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                f.jsx('div', {
                                    style: {
                                        fontSize: '0.78rem',
                                        color: 'var(--text-muted)',
                                    },
                                    children:
                                        'Speech recognition runs 100% locally via faster-whisper without sending audio to the cloud.',
                                }),
                            ],
                        }),
                        f.jsxs('section', {
                            className: 'settings-section',
                            children: [
                                f.jsxs('div', {
                                    className: 'settings-section-title',
                                    children: [
                                        f.jsx('span', {
                                            children: '3. Scripture Database',
                                        }),
                                        f.jsx('span', {
                                            className: 'badge badge-info',
                                            children: 'SQLite Local',
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        f.jsx('label', {
                                            children: 'Active Translation',
                                        }),
                                        f.jsxs('select', {
                                            className: 'form-control',
                                            defaultValue: 'kjv',
                                            children: [
                                                f.jsx('option', {
                                                    value: 'kjv',
                                                    children:
                                                        'King James Version (KJV) — Public Domain (31,100 verses)',
                                                }),
                                                f.jsx('option', {
                                                    value: 'web',
                                                    disabled: !0,
                                                    children:
                                                        'World English Bible (WEB) — (Coming next)',
                                                }),
                                                f.jsx('option', {
                                                    value: 'esv',
                                                    disabled: !0,
                                                    children:
                                                        'ESV — (Coming next)',
                                                }),
                                                f.jsx('option', {
                                                    value: 'niv',
                                                    disabled: !0,
                                                    children:
                                                        'NIV — (Coming next)',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    style: {
                                        fontSize: '0.78rem',
                                        color: 'var(--text-muted)',
                                    },
                                    children: [
                                        'Database status: ',
                                        X.database ||
                                            'Ready (KJV - 31,100 verses)',
                                        '.',
                                    ],
                                }),
                            ],
                        }),
                        f.jsxs('section', {
                            className: 'settings-section',
                            children: [
                                f.jsxs('div', {
                                    className: 'settings-section-title',
                                    children: [
                                        f.jsx('span', {
                                            children:
                                                '4. OBS Studio Broadcast Output',
                                        }),
                                        f.jsx('span', {
                                            className: 'badge badge-standby',
                                            children: 'WebSocket v5',
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '2fr 1fr',
                                        gap: '12px',
                                    },
                                    children: [
                                        f.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                f.jsx('label', {
                                                    children: 'Host Address',
                                                }),
                                                f.jsx('input', {
                                                    type: 'text',
                                                    className: 'form-control',
                                                    value: Q,
                                                    onChange: (N) =>
                                                        D(N.target.value),
                                                    placeholder: 'localhost',
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                f.jsx('label', {
                                                    children: 'Port',
                                                }),
                                                f.jsx('input', {
                                                    type: 'text',
                                                    className: 'form-control',
                                                    value: w,
                                                    onChange: (N) =>
                                                        fl(N.target.value),
                                                    placeholder: '4455',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '12px',
                                    },
                                    children: [
                                        f.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                f.jsxs('div', {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent:
                                                            'space-between',
                                                        alignItems: 'center',
                                                        marginBottom: '4px',
                                                    },
                                                    children: [
                                                        f.jsx('label', {
                                                            style: {margin: 0},
                                                            children:
                                                                'WebSocket Password',
                                                        }),
                                                        f.jsx('button', {
                                                            type: 'button',
                                                            onClick:
                                                                async () => {
                                                                    try {
                                                                        const N =
                                                                            await navigator.clipboard.readText();
                                                                        N &&
                                                                            P(
                                                                                N.trim(),
                                                                            );
                                                                    } catch {}
                                                                },
                                                            style: {
                                                                background:
                                                                    'none',
                                                                border: 'none',
                                                                color: 'var(--accent)',
                                                                cursor: 'pointer',
                                                                fontSize:
                                                                    '0.74rem',
                                                                padding:
                                                                    '0 2px',
                                                                textDecoration:
                                                                    'underline',
                                                            },
                                                            title: 'Paste password from clipboard',
                                                            children: 'Paste',
                                                        }),
                                                    ],
                                                }),
                                                f.jsx('input', {
                                                    type: 'password',
                                                    className: 'form-control',
                                                    value: sl,
                                                    onChange: (N) =>
                                                        P(N.target.value),
                                                    placeholder:
                                                        '(Leave blank if no auth)',
                                                }),
                                            ],
                                        }),
                                        f.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                f.jsx('label', {
                                                    children:
                                                        'Target Text Source Name',
                                                }),
                                                f.jsx('input', {
                                                    type: 'text',
                                                    className: 'form-control',
                                                    value: xl,
                                                    onChange: (N) =>
                                                        ll(N.target.value),
                                                    placeholder:
                                                        'Scripture Text',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                yl.length > 0 &&
                                    f.jsxs('div', {
                                        style: {
                                            fontSize: '0.75rem',
                                            marginBottom: '8px',
                                        },
                                        children: [
                                            f.jsx('span', {
                                                style: {
                                                    color: 'var(--text-muted)',
                                                },
                                                children:
                                                    'Detected text sources in OBS: ',
                                            }),
                                            yl.map((N) =>
                                                f.jsx(
                                                    'button',
                                                    {
                                                        type: 'button',
                                                        onClick: () => ll(N),
                                                        style: {
                                                            marginRight: '6px',
                                                            background:
                                                                'rgba(255,255,255,0.08)',
                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                            borderRadius: '4px',
                                                            color: 'var(--accent)',
                                                            padding: '2px 6px',
                                                            cursor: 'pointer',
                                                            fontSize: '0.75rem',
                                                        },
                                                        children: N,
                                                    },
                                                    N,
                                                ),
                                            ),
                                        ],
                                    }),
                                f.jsxs('div', {
                                    style: {
                                        margin: '12px 0 14px',
                                        padding: '10px 14px',
                                        background: O
                                            ? 'rgba(40, 199, 111, 0.1)'
                                            : 'rgba(255, 255, 255, 0.04)',
                                        border: `1px solid ${O ? 'rgba(40, 199, 111, 0.35)' : 'var(--border-subtle)'}`,
                                        borderRadius: 'var(--radius-sm)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    },
                                    onClick: () => x?.(!O),
                                    children: [
                                        f.jsxs('div', {
                                            children: [
                                                f.jsxs('div', {
                                                    style: {
                                                        fontWeight: 600,
                                                        fontSize: '0.85rem',
                                                        color: O
                                                            ? '#4ade80'
                                                            : 'var(--text-primary)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                    },
                                                    children: [
                                                        f.jsx('span', {
                                                            children:
                                                                '⚡ Auto-Display to OBS (Hands-Free Mode)',
                                                        }),
                                                        O &&
                                                            f.jsx('span', {
                                                                className:
                                                                    'badge badge-live',
                                                                style: {
                                                                    fontSize:
                                                                        '0.65rem',
                                                                    padding:
                                                                        '1px 6px',
                                                                },
                                                                children:
                                                                    'Active',
                                                            }),
                                                    ],
                                                }),
                                                f.jsx('div', {
                                                    style: {
                                                        fontSize: '0.76rem',
                                                        color: 'var(--text-muted)',
                                                        marginTop: '3px',
                                                    },
                                                    children:
                                                        'Automatically broadcast detected verses to OBS without requiring operator confirmation.',
                                                }),
                                            ],
                                        }),
                                        f.jsx('input', {
                                            type: 'checkbox',
                                            checked: !!O,
                                            onChange: (N) =>
                                                x?.(N.target.checked),
                                            onClick: (N) => N.stopPropagation(),
                                            style: {
                                                width: '18px',
                                                height: '18px',
                                                accentColor: 'var(--success)',
                                                cursor: 'pointer',
                                            },
                                        }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: '4px',
                                    },
                                    children: [
                                        f.jsx('button', {
                                            type: 'button',
                                            className: 'btn-secondary',
                                            onClick: Pl,
                                            disabled: B,
                                            style: {
                                                height: '34px',
                                                fontSize: '0.78rem',
                                            },
                                            children: B
                                                ? 'Testing…'
                                                : 'Test OBS Connection',
                                        }),
                                        f.jsxs('span', {
                                            style: {
                                                fontSize: '0.74rem',
                                                color: 'var(--text-muted)',
                                            },
                                            children: [
                                                'Target: OBS Studio (Port ',
                                                w,
                                                ')',
                                            ],
                                        }),
                                    ],
                                }),
                                ul &&
                                    f.jsx('div', {
                                        style: {
                                            marginTop: '10px',
                                            fontSize: '0.8rem',
                                            padding: '8px 12px',
                                            borderRadius: '6px',
                                            background: ul.includes(
                                                'Successfully',
                                            )
                                                ? 'rgba(40, 199, 111, 0.15)'
                                                : 'rgba(79, 140, 255, 0.15)',
                                            color: ul.includes('Successfully')
                                                ? '#28c76f'
                                                : 'var(--accent)',
                                            border: `1px solid ${ul.includes('Successfully') ? 'rgba(40, 199, 111, 0.4)' : 'rgba(79, 140, 255, 0.3)'}`,
                                        },
                                        children: ul,
                                    }),
                            ],
                        }),
                    ],
                }),
                f.jsx('div', {
                    className: 'modal-footer',
                    children: f.jsx('button', {
                        type: 'button',
                        className: 'btn-primary',
                        onClick: Ml,
                        style: {height: '38px', padding: '0 20px'},
                        children: 'Done',
                    }),
                }),
            ],
        }),
    });
}
function hm({notice: p, onClose: G, duration: X = 5e3}) {
    if (
        ($.useEffect(() => {
            if (!p) return;
            const q = setTimeout(() => {
                G();
            }, X);
            return () => clearTimeout(q);
        }, [p, G, X]),
        !p)
    )
        return null;
    const h =
            p.type === 'error' ||
            (typeof p == 'string' &&
                (p.toLowerCase().includes('error') ||
                    p.toLowerCase().includes('failed'))),
        _ = typeof p == 'string' ? p : p.text || p.message;
    return f.jsx('aside', {
        className: 'toast-container',
        'aria-live': 'polite',
        children: f.jsxs('div', {
            className: 'toast',
            children: [
                f.jsx('div', {
                    style: {marginTop: '2px'},
                    children: h
                        ? f.jsxs('svg', {
                              width: '18',
                              height: '18',
                              viewBox: '0 0 24 24',
                              fill: 'none',
                              stroke: 'var(--danger)',
                              strokeWidth: '2.2',
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              children: [
                                  f.jsx('circle', {
                                      cx: '12',
                                      cy: '12',
                                      r: '10',
                                  }),
                                  f.jsx('line', {
                                      x1: '12',
                                      y1: '8',
                                      x2: '12',
                                      y2: '12',
                                  }),
                                  f.jsx('line', {
                                      x1: '12',
                                      y1: '16',
                                      x2: '12.01',
                                      y2: '16',
                                  }),
                              ],
                          })
                        : f.jsxs('svg', {
                              width: '18',
                              height: '18',
                              viewBox: '0 0 24 24',
                              fill: 'none',
                              stroke: 'var(--accent)',
                              strokeWidth: '2.2',
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              children: [
                                  f.jsx('circle', {
                                      cx: '12',
                                      cy: '12',
                                      r: '10',
                                  }),
                                  f.jsx('line', {
                                      x1: '12',
                                      y1: '16',
                                      x2: '12',
                                      y2: '12',
                                  }),
                                  f.jsx('line', {
                                      x1: '12',
                                      y1: '8',
                                      x2: '12.01',
                                      y2: '8',
                                  }),
                              ],
                          }),
                }),
                f.jsx('div', {className: 'toast-message', children: _}),
                f.jsx('button', {
                    type: 'button',
                    className: 'toast-close',
                    onClick: G,
                    'aria-label': 'Close notification',
                    children: '✕',
                }),
            ],
        }),
    });
}
function mm() {
    const [p, G] = $.useState({}),
        [X, h] = $.useState(''),
        [_, q] = $.useState([]),
        [Z, dl] = $.useState(null),
        [O, x] = $.useState(null),
        [Q, D] = $.useState(!1),
        [w, fl] = $.useState(!1),
        [sl, P] = $.useState(!1),
        [xl, ll] = $.useState(
            () => localStorage.getItem('churchscreen_auto_display') === 'true',
        ),
        ul = $.useRef(null);
    ($.useEffect(() => {
        window.churchscreen?.getObsSettings &&
            window.churchscreen
                .getObsSettings()
                .then((j) => {
                    j &&
                        typeof j.autoDisplay == 'boolean' &&
                        (ll(j.autoDisplay),
                        localStorage.setItem(
                            'churchscreen_auto_display',
                            String(j.autoDisplay),
                        ));
                })
                .catch(() => {});
    }, []),
        $.useEffect(() => {
            if (!window.churchscreen?.getStatus) return;
            const j = () => {
                window.churchscreen
                    .getStatus()
                    .then(G)
                    .catch(() => {});
            };
            j();
            const V = setInterval(j, 3e3);
            return () => clearInterval(V);
        }, []));
    const J = $.useCallback(
        async (j) => {
            if (!(!j || !window.churchscreen?.processTranscript))
                try {
                    const V = await window.churchscreen.processTranscript(j);
                    dl(V);
                    const r = new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    });
                    if (
                        (q((T) => [
                            {
                                id: Date.now(),
                                text: j,
                                timestamp: r,
                                detected: V?.detected || null,
                            },
                            ...T.slice(0, 49),
                        ]),
                        xl &&
                            V?.verse &&
                            ul.current !== V.verse.reference &&
                            ((ul.current = V.verse.reference),
                            window.churchscreen?.displayVerse))
                    ) {
                        const T = await window.churchscreen.displayVerse(
                            V.verse,
                        );
                        (T?.sent
                            ? x({
                                  type: 'success',
                                  message: `⚡ Auto-displayed ${V.verse.reference} in OBS`,
                              })
                            : T?.message &&
                              x({type: 'info', message: T.message}),
                            window.churchscreen?.getStatus &&
                                window.churchscreen
                                    .getStatus()
                                    .then(G)
                                    .catch(() => {}));
                    }
                } catch (V) {
                    x({
                        type: 'error',
                        message: V.message || 'Reference detection failed',
                    });
                }
        },
        [xl],
    );
    $.useEffect(() => {
        if (!window.churchscreen?.onTranscriptionEvent) return;
        const j = (r) => {
                if (r)
                    switch (r.type) {
                        case 'status':
                            (G((T) => ({...T, transcription: r.state})),
                                (r.state === 'stopped' ||
                                    r.state === 'not-configured') &&
                                    D(!1),
                                r.message &&
                                    x({type: 'info', message: r.message}));
                            break;
                        case 'transcript':
                            (h(r.text), r.isFinal && J(r.text));
                            break;
                        case 'error':
                            (x({type: 'error', message: r.message}),
                                D(!1),
                                P(!0));
                            break;
                    }
            },
            V = window.churchscreen.onTranscriptionEvent(j);
        return () => {
            typeof V == 'function' && V();
        };
    }, [J]);
    const B = (j) => {
            (ll(j),
                localStorage.setItem('churchscreen_auto_display', String(j)),
                window.churchscreen?.saveObsSettings &&
                    window.churchscreen
                        .saveObsSettings({autoDisplay: j})
                        .catch(() => {}),
                x({
                    type: j ? 'success' : 'info',
                    message: j
                        ? '⚡ Auto-Display enabled: Recognized scriptures will automatically push to OBS.'
                        : '✋ Auto-Display disabled: Manual operator verification required.',
                }));
        },
        ml = async () => {
            if (!(!Z?.verse || !window.churchscreen?.displayVerse))
                try {
                    ul.current = Z.verse.reference;
                    const j = await window.churchscreen.displayVerse(Z.verse);
                    (j?.message &&
                        x({
                            type: j.sent ? 'success' : 'info',
                            message: j.message,
                        }),
                        window.churchscreen.getStatus &&
                            window.churchscreen
                                .getStatus()
                                .then(G)
                                .catch(() => {}));
                } catch (j) {
                    x({
                        type: 'error',
                        message: j.message || 'Failed to display verse in OBS',
                    });
                }
        },
        yl = () => {
            dl(null);
        },
        [K, Sl] = $.useState(() => {
            try {
                const j = localStorage.getItem('churchscreen_audio_device');
                return j
                    ? JSON.parse(j)
                    : {
                          id: 'default',
                          index: 'default',
                          label: 'Default System Microphone',
                      };
            } catch {
                return {
                    id: 'default',
                    index: 'default',
                    label: 'Default System Microphone',
                };
            }
        }),
        [Bl, $l] = $.useState(() => {
            try {
                return (
                    localStorage.getItem('churchscreen_whisper_model') ||
                    'small'
                );
            } catch {
                return 'small';
            }
        }),
        Ll = async (j = null, V = null) => {
            (x(null), P(!1));
            try {
                const r = j || K,
                    T = V || Bl || 'small',
                    U = {
                        audioDevice:
                            r &&
                            r.index !== 'default' &&
                            r.index !== null &&
                            r.index !== void 0
                                ? Number(r.index)
                                : null,
                        model: T,
                    },
                    W = await window.churchscreen?.startTranscription?.(U);
                W && W.error
                    ? (D(!1), P(!0), x({type: 'error', message: W.error}))
                    : D(!0);
            } catch (r) {
                (D(!1),
                    P(!0),
                    x({
                        type: 'error',
                        message: r.message || 'Failed to start transcription',
                    }));
            }
        },
        Ml = async (j) => {
            Sl(j);
            try {
                localStorage.setItem(
                    'churchscreen_audio_device',
                    JSON.stringify(j),
                );
            } catch {}
            Q &&
                (window.churchscreen?.stopTranscription &&
                    (await window.churchscreen.stopTranscription()),
                setTimeout(() => {
                    Ll(j);
                }, 400));
        },
        Pl = async (j) => {
            $l(j);
            try {
                localStorage.setItem('churchscreen_whisper_model', j);
            } catch {}
            Q &&
                (window.churchscreen?.stopTranscription &&
                    (await window.churchscreen.stopTranscription()),
                setTimeout(() => {
                    Ll(null, j);
                }, 500));
        },
        N = async () => {
            (window.churchscreen?.stopTranscription &&
                (await window.churchscreen.stopTranscription()),
                D(!1));
        },
        vl = () => {
            q([]);
        },
        S = (j) => {
            (h(j), J(j));
        },
        E = async () => {
            if (window.churchscreen?.clearObsDisplay)
                try {
                    ul.current = null;
                    const j = await window.churchscreen.clearObsDisplay();
                    x({type: j.cleared ? 'info' : 'error', message: j.message});
                } catch (j) {
                    x({
                        type: 'error',
                        message: j.message || 'Failed to clear OBS display',
                    });
                }
        },
        Y = async (j) => {
            if (window.churchscreen?.testObsConnection)
                try {
                    const V = await window.churchscreen.testObsConnection(j);
                    return (
                        window.churchscreen.getStatus &&
                            window.churchscreen
                                .getStatus()
                                .then(G)
                                .catch(() => {}),
                        V
                    );
                } catch (V) {
                    return {
                        success: !1,
                        message: V.message || 'Failed to connect to OBS',
                    };
                }
            return {success: !1, message: 'OBS bridge not available'};
        };
    return f.jsxs('div', {
        className: 'app-container',
        children: [
            f.jsx(im, {
                listening: Q,
                obsStatus: p.obs,
                onOpenSettings: () => fl(!0),
            }),
            f.jsxs('main', {
                className: 'workspace',
                children: [
                    f.jsx(sm, {
                        listening: Q,
                        onStartListening: Ll,
                        onStopListening: N,
                        transcript: X,
                        history: _,
                        onClearHistory: vl,
                        onDetect: S,
                        audioDevice: K?.label || 'Default System Microphone',
                        hasAudioError: sl,
                        notice: O,
                    }),
                    f.jsx(rm, {
                        result: Z,
                        onDisplay: ml,
                        onIgnore: yl,
                        onClearDisplay: E,
                        autoDisplay: xl,
                        onToggleAutoDisplay: B,
                    }),
                ],
            }),
            f.jsx(om, {
                status: p,
                listening: Q,
                audioDevice: K?.label || 'Default System Microphone',
            }),
            f.jsx(dm, {
                isOpen: w,
                onClose: () => fl(!1),
                status: p,
                onTestObsConnection: Y,
                selectedAudioDevice: K,
                onSelectAudioDevice: Ml,
                whisperModel: Bl,
                onSelectWhisperModel: Pl,
                autoDisplay: xl,
                onToggleAutoDisplay: B,
            }),
            f.jsx(hm, {notice: O, onClose: () => x(null)}),
        ],
    });
}
nm.createRoot(document.getElementById('root')).render(
    f.jsx(I0.StrictMode, {children: f.jsx(mm, {})}),
);
