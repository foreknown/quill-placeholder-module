var la = Object.defineProperty;
var oa = (n, t, e) => t in n ? la(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var x = (n, t, e) => oa(n, typeof t != "symbol" ? t + "" : t, e);
var Gl = typeof global == "object" && global && global.Object === Object && global, aa = typeof self == "object" && self && self.Object === Object && self, Rt = Gl || aa || Function("return this")(), te = Rt.Symbol, Kl = Object.prototype, ca = Kl.hasOwnProperty, ua = Kl.toString, gn = te ? te.toStringTag : void 0;
function ha(n) {
  var t = ca.call(n, gn), e = n[gn];
  try {
    n[gn] = void 0;
    var r = !0;
  } catch {
  }
  var s = ua.call(n);
  return r && (t ? n[gn] = e : delete n[gn]), s;
}
var fa = Object.prototype, da = fa.toString;
function ga(n) {
  return da.call(n);
}
var pa = "[object Null]", ma = "[object Undefined]", zi = te ? te.toStringTag : void 0;
function Ve(n) {
  return n == null ? n === void 0 ? ma : pa : zi && zi in Object(n) ? ha(n) : ga(n);
}
function Ut(n) {
  return n != null && typeof n == "object";
}
var fe = Array.isArray;
function ee(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
function Vl(n) {
  return n;
}
var ba = "[object AsyncFunction]", ya = "[object Function]", va = "[object GeneratorFunction]", Ea = "[object Proxy]";
function bi(n) {
  if (!ee(n))
    return !1;
  var t = Ve(n);
  return t == ya || t == va || t == ba || t == Ea;
}
var Cs = Rt["__core-js_shared__"], Gi = function() {
  var n = /[^.]+$/.exec(Cs && Cs.keys && Cs.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Aa(n) {
  return !!Gi && Gi in n;
}
var Na = Function.prototype, wa = Na.toString;
function me(n) {
  if (n != null) {
    try {
      return wa.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Ta = /[\\^$.*+?()[\]{}|]/g, xa = /^\[object .+?Constructor\]$/, La = Function.prototype, Sa = Object.prototype, _a = La.toString, Oa = Sa.hasOwnProperty, qa = RegExp(
  "^" + _a.call(Oa).replace(Ta, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ca(n) {
  if (!ee(n) || Aa(n))
    return !1;
  var t = bi(n) ? qa : xa;
  return t.test(me(n));
}
function Ia(n, t) {
  return n == null ? void 0 : n[t];
}
function be(n, t) {
  var e = Ia(n, t);
  return Ca(e) ? e : void 0;
}
var Gs = be(Rt, "WeakMap"), Ki = Object.create, Ra = /* @__PURE__ */ function() {
  function n() {
  }
  return function(t) {
    if (!ee(t))
      return {};
    if (Ki)
      return Ki(t);
    n.prototype = t;
    var e = new n();
    return n.prototype = void 0, e;
  };
}();
function ka(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t);
    case 1:
      return n.call(t, e[0]);
    case 2:
      return n.call(t, e[0], e[1]);
    case 3:
      return n.call(t, e[0], e[1], e[2]);
  }
  return n.apply(t, e);
}
function Wl(n, t) {
  var e = -1, r = n.length;
  for (t || (t = Array(r)); ++e < r; )
    t[e] = n[e];
  return t;
}
var Ba = 800, Ma = 16, $a = Date.now;
function Da(n) {
  var t = 0, e = 0;
  return function() {
    var r = $a(), s = Ma - (r - e);
    if (e = r, s > 0) {
      if (++t >= Ba)
        return arguments[0];
    } else
      t = 0;
    return n.apply(void 0, arguments);
  };
}
function ja(n) {
  return function() {
    return n;
  };
}
var Er = function() {
  try {
    var n = be(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}(), Pa = Er ? function(n, t) {
  return Er(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ja(t),
    writable: !0
  });
} : Vl, Ua = Da(Pa);
function Fa(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1; )
    ;
  return n;
}
var Ha = 9007199254740991, za = /^(?:0|[1-9]\d*)$/;
function Zl(n, t) {
  var e = typeof n;
  return t = t ?? Ha, !!t && (e == "number" || e != "symbol" && za.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function yi(n, t, e) {
  t == "__proto__" && Er ? Er(n, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[t] = e;
}
function qn(n, t) {
  return n === t || n !== n && t !== t;
}
var Ga = Object.prototype, Ka = Ga.hasOwnProperty;
function Xl(n, t, e) {
  var r = n[t];
  (!(Ka.call(n, t) && qn(r, e)) || e === void 0 && !(t in n)) && yi(n, t, e);
}
function Cn(n, t, e, r) {
  var s = !e;
  e || (e = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var a = t[i], c = void 0;
    c === void 0 && (c = n[a]), s ? yi(e, a, c) : Xl(e, a, c);
  }
  return e;
}
var Vi = Math.max;
function Va(n, t, e) {
  return t = Vi(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, i = Vi(r.length - t, 0), l = Array(i); ++s < i; )
      l[s] = r[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = r[s];
    return a[t] = e(l), ka(n, this, a);
  };
}
function Wa(n, t) {
  return Ua(Va(n, t, Vl), n + "");
}
var Za = 9007199254740991;
function Yl(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Za;
}
function Lr(n) {
  return n != null && Yl(n.length) && !bi(n);
}
function Xa(n, t, e) {
  if (!ee(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? Lr(e) && Zl(t, e.length) : r == "string" && t in e) ? qn(e[t], n) : !1;
}
function Ya(n) {
  return Wa(function(t, e) {
    var r = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, l = s > 2 ? e[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, l && Xa(e[0], e[1], l) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var a = e[r];
      a && n(t, a, r, i);
    }
    return t;
  });
}
var Qa = Object.prototype;
function vi(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || Qa;
  return n === e;
}
function Ja(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var tc = "[object Arguments]";
function Wi(n) {
  return Ut(n) && Ve(n) == tc;
}
var Ql = Object.prototype, ec = Ql.hasOwnProperty, nc = Ql.propertyIsEnumerable, Ks = Wi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wi : function(n) {
  return Ut(n) && ec.call(n, "callee") && !nc.call(n, "callee");
};
function rc() {
  return !1;
}
var Jl = typeof exports == "object" && exports && !exports.nodeType && exports, Zi = Jl && typeof module == "object" && module && !module.nodeType && module, sc = Zi && Zi.exports === Jl, Xi = sc ? Rt.Buffer : void 0, ic = Xi ? Xi.isBuffer : void 0, Nn = ic || rc, lc = "[object Arguments]", oc = "[object Array]", ac = "[object Boolean]", cc = "[object Date]", uc = "[object Error]", hc = "[object Function]", fc = "[object Map]", dc = "[object Number]", gc = "[object Object]", pc = "[object RegExp]", mc = "[object Set]", bc = "[object String]", yc = "[object WeakMap]", vc = "[object ArrayBuffer]", Ec = "[object DataView]", Ac = "[object Float32Array]", Nc = "[object Float64Array]", wc = "[object Int8Array]", Tc = "[object Int16Array]", xc = "[object Int32Array]", Lc = "[object Uint8Array]", Sc = "[object Uint8ClampedArray]", _c = "[object Uint16Array]", Oc = "[object Uint32Array]", F = {};
F[Ac] = F[Nc] = F[wc] = F[Tc] = F[xc] = F[Lc] = F[Sc] = F[_c] = F[Oc] = !0;
F[lc] = F[oc] = F[vc] = F[ac] = F[Ec] = F[cc] = F[uc] = F[hc] = F[fc] = F[dc] = F[gc] = F[pc] = F[mc] = F[bc] = F[yc] = !1;
function qc(n) {
  return Ut(n) && Yl(n.length) && !!F[Ve(n)];
}
function Ei(n) {
  return function(t) {
    return n(t);
  };
}
var to = typeof exports == "object" && exports && !exports.nodeType && exports, bn = to && typeof module == "object" && module && !module.nodeType && module, Cc = bn && bn.exports === to, Is = Cc && Gl.process, He = function() {
  try {
    var n = bn && bn.require && bn.require("util").types;
    return n || Is && Is.binding && Is.binding("util");
  } catch {
  }
}(), Yi = He && He.isTypedArray, Ai = Yi ? Ei(Yi) : qc, Ic = Object.prototype, Rc = Ic.hasOwnProperty;
function eo(n, t) {
  var e = fe(n), r = !e && Ks(n), s = !e && !r && Nn(n), i = !e && !r && !s && Ai(n), l = e || r || s || i, a = l ? Ja(n.length, String) : [], c = a.length;
  for (var h in n)
    (t || Rc.call(n, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Zl(h, c))) && a.push(h);
  return a;
}
function no(n, t) {
  return function(e) {
    return n(t(e));
  };
}
var kc = no(Object.keys, Object), Bc = Object.prototype, Mc = Bc.hasOwnProperty;
function $c(n) {
  if (!vi(n))
    return kc(n);
  var t = [];
  for (var e in Object(n))
    Mc.call(n, e) && e != "constructor" && t.push(e);
  return t;
}
function Ni(n) {
  return Lr(n) ? eo(n) : $c(n);
}
function Dc(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
var jc = Object.prototype, Pc = jc.hasOwnProperty;
function Uc(n) {
  if (!ee(n))
    return Dc(n);
  var t = vi(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !Pc.call(n, r)) || e.push(r);
  return e;
}
function In(n) {
  return Lr(n) ? eo(n, !0) : Uc(n);
}
var wn = be(Object, "create");
function Fc() {
  this.__data__ = wn ? wn(null) : {}, this.size = 0;
}
function Hc(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var zc = "__lodash_hash_undefined__", Gc = Object.prototype, Kc = Gc.hasOwnProperty;
function Vc(n) {
  var t = this.__data__;
  if (wn) {
    var e = t[n];
    return e === zc ? void 0 : e;
  }
  return Kc.call(t, n) ? t[n] : void 0;
}
var Wc = Object.prototype, Zc = Wc.hasOwnProperty;
function Xc(n) {
  var t = this.__data__;
  return wn ? t[n] !== void 0 : Zc.call(t, n);
}
var Yc = "__lodash_hash_undefined__";
function Qc(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = wn && t === void 0 ? Yc : t, this;
}
function de(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
de.prototype.clear = Fc;
de.prototype.delete = Hc;
de.prototype.get = Vc;
de.prototype.has = Xc;
de.prototype.set = Qc;
function Jc() {
  this.__data__ = [], this.size = 0;
}
function Sr(n, t) {
  for (var e = n.length; e--; )
    if (qn(n[e][0], t))
      return e;
  return -1;
}
var tu = Array.prototype, eu = tu.splice;
function nu(n) {
  var t = this.__data__, e = Sr(t, n);
  if (e < 0)
    return !1;
  var r = t.length - 1;
  return e == r ? t.pop() : eu.call(t, e, 1), --this.size, !0;
}
function ru(n) {
  var t = this.__data__, e = Sr(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function su(n) {
  return Sr(this.__data__, n) > -1;
}
function iu(n, t) {
  var e = this.__data__, r = Sr(e, n);
  return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
}
function zt(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
zt.prototype.clear = Jc;
zt.prototype.delete = nu;
zt.prototype.get = ru;
zt.prototype.has = su;
zt.prototype.set = iu;
var Tn = be(Rt, "Map");
function lu() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (Tn || zt)(),
    string: new de()
  };
}
function ou(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function _r(n, t) {
  var e = n.__data__;
  return ou(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function au(n) {
  var t = _r(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function cu(n) {
  return _r(this, n).get(n);
}
function uu(n) {
  return _r(this, n).has(n);
}
function hu(n, t) {
  var e = _r(this, n), r = e.size;
  return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
}
function ye(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = lu;
ye.prototype.delete = au;
ye.prototype.get = cu;
ye.prototype.has = uu;
ye.prototype.set = hu;
function ro(n, t) {
  for (var e = -1, r = t.length, s = n.length; ++e < r; )
    n[s + e] = t[e];
  return n;
}
var wi = no(Object.getPrototypeOf, Object), fu = "[object Object]", du = Function.prototype, gu = Object.prototype, so = du.toString, pu = gu.hasOwnProperty, mu = so.call(Object);
function bu(n) {
  if (!Ut(n) || Ve(n) != fu)
    return !1;
  var t = wi(n);
  if (t === null)
    return !0;
  var e = pu.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && so.call(e) == mu;
}
function yu() {
  this.__data__ = new zt(), this.size = 0;
}
function vu(n) {
  var t = this.__data__, e = t.delete(n);
  return this.size = t.size, e;
}
function Eu(n) {
  return this.__data__.get(n);
}
function Au(n) {
  return this.__data__.has(n);
}
var Nu = 200;
function wu(n, t) {
  var e = this.__data__;
  if (e instanceof zt) {
    var r = e.__data__;
    if (!Tn || r.length < Nu - 1)
      return r.push([n, t]), this.size = ++e.size, this;
    e = this.__data__ = new ye(r);
  }
  return e.set(n, t), this.size = e.size, this;
}
function Ot(n) {
  var t = this.__data__ = new zt(n);
  this.size = t.size;
}
Ot.prototype.clear = yu;
Ot.prototype.delete = vu;
Ot.prototype.get = Eu;
Ot.prototype.has = Au;
Ot.prototype.set = wu;
function Tu(n, t) {
  return n && Cn(t, Ni(t), n);
}
function xu(n, t) {
  return n && Cn(t, In(t), n);
}
var io = typeof exports == "object" && exports && !exports.nodeType && exports, Qi = io && typeof module == "object" && module && !module.nodeType && module, Lu = Qi && Qi.exports === io, Ji = Lu ? Rt.Buffer : void 0, tl = Ji ? Ji.allocUnsafe : void 0;
function lo(n, t) {
  if (t)
    return n.slice();
  var e = n.length, r = tl ? tl(e) : new n.constructor(e);
  return n.copy(r), r;
}
function Su(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, s = 0, i = []; ++e < r; ) {
    var l = n[e];
    t(l, e, n) && (i[s++] = l);
  }
  return i;
}
function oo() {
  return [];
}
var _u = Object.prototype, Ou = _u.propertyIsEnumerable, el = Object.getOwnPropertySymbols, Ti = el ? function(n) {
  return n == null ? [] : (n = Object(n), Su(el(n), function(t) {
    return Ou.call(n, t);
  }));
} : oo;
function qu(n, t) {
  return Cn(n, Ti(n), t);
}
var Cu = Object.getOwnPropertySymbols, ao = Cu ? function(n) {
  for (var t = []; n; )
    ro(t, Ti(n)), n = wi(n);
  return t;
} : oo;
function Iu(n, t) {
  return Cn(n, ao(n), t);
}
function co(n, t, e) {
  var r = t(n);
  return fe(n) ? r : ro(r, e(n));
}
function Vs(n) {
  return co(n, Ni, Ti);
}
function Ru(n) {
  return co(n, In, ao);
}
var Ws = be(Rt, "DataView"), Zs = be(Rt, "Promise"), Xs = be(Rt, "Set"), nl = "[object Map]", ku = "[object Object]", rl = "[object Promise]", sl = "[object Set]", il = "[object WeakMap]", ll = "[object DataView]", Bu = me(Ws), Mu = me(Tn), $u = me(Zs), Du = me(Xs), ju = me(Gs), yt = Ve;
(Ws && yt(new Ws(new ArrayBuffer(1))) != ll || Tn && yt(new Tn()) != nl || Zs && yt(Zs.resolve()) != rl || Xs && yt(new Xs()) != sl || Gs && yt(new Gs()) != il) && (yt = function(n) {
  var t = Ve(n), e = t == ku ? n.constructor : void 0, r = e ? me(e) : "";
  if (r)
    switch (r) {
      case Bu:
        return ll;
      case Mu:
        return nl;
      case $u:
        return rl;
      case Du:
        return sl;
      case ju:
        return il;
    }
  return t;
});
var Pu = Object.prototype, Uu = Pu.hasOwnProperty;
function Fu(n) {
  var t = n.length, e = new n.constructor(t);
  return t && typeof n[0] == "string" && Uu.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
var Ar = Rt.Uint8Array;
function xi(n) {
  var t = new n.constructor(n.byteLength);
  return new Ar(t).set(new Ar(n)), t;
}
function Hu(n, t) {
  var e = t ? xi(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var zu = /\w*$/;
function Gu(n) {
  var t = new n.constructor(n.source, zu.exec(n));
  return t.lastIndex = n.lastIndex, t;
}
var ol = te ? te.prototype : void 0, al = ol ? ol.valueOf : void 0;
function Ku(n) {
  return al ? Object(al.call(n)) : {};
}
function uo(n, t) {
  var e = t ? xi(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
var Vu = "[object Boolean]", Wu = "[object Date]", Zu = "[object Map]", Xu = "[object Number]", Yu = "[object RegExp]", Qu = "[object Set]", Ju = "[object String]", th = "[object Symbol]", eh = "[object ArrayBuffer]", nh = "[object DataView]", rh = "[object Float32Array]", sh = "[object Float64Array]", ih = "[object Int8Array]", lh = "[object Int16Array]", oh = "[object Int32Array]", ah = "[object Uint8Array]", ch = "[object Uint8ClampedArray]", uh = "[object Uint16Array]", hh = "[object Uint32Array]";
function fh(n, t, e) {
  var r = n.constructor;
  switch (t) {
    case eh:
      return xi(n);
    case Vu:
    case Wu:
      return new r(+n);
    case nh:
      return Hu(n, e);
    case rh:
    case sh:
    case ih:
    case lh:
    case oh:
    case ah:
    case ch:
    case uh:
    case hh:
      return uo(n, e);
    case Zu:
      return new r();
    case Xu:
    case Ju:
      return new r(n);
    case Yu:
      return Gu(n);
    case Qu:
      return new r();
    case th:
      return Ku(n);
  }
}
function ho(n) {
  return typeof n.constructor == "function" && !vi(n) ? Ra(wi(n)) : {};
}
var dh = "[object Map]";
function gh(n) {
  return Ut(n) && yt(n) == dh;
}
var cl = He && He.isMap, ph = cl ? Ei(cl) : gh, mh = "[object Set]";
function bh(n) {
  return Ut(n) && yt(n) == mh;
}
var ul = He && He.isSet, yh = ul ? Ei(ul) : bh, vh = 1, Eh = 2, Ah = 4, fo = "[object Arguments]", Nh = "[object Array]", wh = "[object Boolean]", Th = "[object Date]", xh = "[object Error]", go = "[object Function]", Lh = "[object GeneratorFunction]", Sh = "[object Map]", _h = "[object Number]", po = "[object Object]", Oh = "[object RegExp]", qh = "[object Set]", Ch = "[object String]", Ih = "[object Symbol]", Rh = "[object WeakMap]", kh = "[object ArrayBuffer]", Bh = "[object DataView]", Mh = "[object Float32Array]", $h = "[object Float64Array]", Dh = "[object Int8Array]", jh = "[object Int16Array]", Ph = "[object Int32Array]", Uh = "[object Uint8Array]", Fh = "[object Uint8ClampedArray]", Hh = "[object Uint16Array]", zh = "[object Uint32Array]", P = {};
P[fo] = P[Nh] = P[kh] = P[Bh] = P[wh] = P[Th] = P[Mh] = P[$h] = P[Dh] = P[jh] = P[Ph] = P[Sh] = P[_h] = P[po] = P[Oh] = P[qh] = P[Ch] = P[Ih] = P[Uh] = P[Fh] = P[Hh] = P[zh] = !0;
P[xh] = P[go] = P[Rh] = !1;
function br(n, t, e, r, s, i) {
  var l, a = t & vh, c = t & Eh, h = t & Ah;
  if (l !== void 0)
    return l;
  if (!ee(n))
    return n;
  var d = fe(n);
  if (d) {
    if (l = Fu(n), !a)
      return Wl(n, l);
  } else {
    var m = yt(n), g = m == go || m == Lh;
    if (Nn(n))
      return lo(n, a);
    if (m == po || m == fo || g && !s) {
      if (l = c || g ? {} : ho(n), !a)
        return c ? Iu(n, xu(l, n)) : qu(n, Tu(l, n));
    } else {
      if (!P[m])
        return s ? n : {};
      l = fh(n, m, a);
    }
  }
  i || (i = new Ot());
  var p = i.get(n);
  if (p)
    return p;
  i.set(n, l), yh(n) ? n.forEach(function(y) {
    l.add(br(y, t, e, y, n, i));
  }) : ph(n) && n.forEach(function(y, E) {
    l.set(E, br(y, t, e, E, n, i));
  });
  var b = h ? c ? Ru : Vs : c ? In : Ni, v = d ? void 0 : b(n);
  return Fa(v || n, function(y, E) {
    v && (E = y, y = n[E]), Xl(l, E, br(y, t, e, E, n, i));
  }), l;
}
var Gh = 1, Kh = 4;
function Pe(n) {
  return br(n, Gh | Kh);
}
var Vh = "__lodash_hash_undefined__";
function Wh(n) {
  return this.__data__.set(n, Vh), this;
}
function Zh(n) {
  return this.__data__.has(n);
}
function Nr(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new ye(); ++t < e; )
    this.add(n[t]);
}
Nr.prototype.add = Nr.prototype.push = Wh;
Nr.prototype.has = Zh;
function Xh(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r; )
    if (t(n[e], e, n))
      return !0;
  return !1;
}
function Yh(n, t) {
  return n.has(t);
}
var Qh = 1, Jh = 2;
function mo(n, t, e, r, s, i) {
  var l = e & Qh, a = n.length, c = t.length;
  if (a != c && !(l && c > a))
    return !1;
  var h = i.get(n), d = i.get(t);
  if (h && d)
    return h == t && d == n;
  var m = -1, g = !0, p = e & Jh ? new Nr() : void 0;
  for (i.set(n, t), i.set(t, n); ++m < a; ) {
    var b = n[m], v = t[m];
    if (r)
      var y = l ? r(v, b, m, t, n, i) : r(b, v, m, n, t, i);
    if (y !== void 0) {
      if (y)
        continue;
      g = !1;
      break;
    }
    if (p) {
      if (!Xh(t, function(E, w) {
        if (!Yh(p, w) && (b === E || s(b, E, e, r, i)))
          return p.push(w);
      })) {
        g = !1;
        break;
      }
    } else if (!(b === v || s(b, v, e, r, i))) {
      g = !1;
      break;
    }
  }
  return i.delete(n), i.delete(t), g;
}
function tf(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r, s) {
    e[++t] = [s, r];
  }), e;
}
function ef(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r) {
    e[++t] = r;
  }), e;
}
var nf = 1, rf = 2, sf = "[object Boolean]", lf = "[object Date]", of = "[object Error]", af = "[object Map]", cf = "[object Number]", uf = "[object RegExp]", hf = "[object Set]", ff = "[object String]", df = "[object Symbol]", gf = "[object ArrayBuffer]", pf = "[object DataView]", hl = te ? te.prototype : void 0, Rs = hl ? hl.valueOf : void 0;
function mf(n, t, e, r, s, i, l) {
  switch (e) {
    case pf:
      if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
        return !1;
      n = n.buffer, t = t.buffer;
    case gf:
      return !(n.byteLength != t.byteLength || !i(new Ar(n), new Ar(t)));
    case sf:
    case lf:
    case cf:
      return qn(+n, +t);
    case of:
      return n.name == t.name && n.message == t.message;
    case uf:
    case ff:
      return n == t + "";
    case af:
      var a = tf;
    case hf:
      var c = r & nf;
      if (a || (a = ef), n.size != t.size && !c)
        return !1;
      var h = l.get(n);
      if (h)
        return h == t;
      r |= rf, l.set(n, t);
      var d = mo(a(n), a(t), r, s, i, l);
      return l.delete(n), d;
    case df:
      if (Rs)
        return Rs.call(n) == Rs.call(t);
  }
  return !1;
}
var bf = 1, yf = Object.prototype, vf = yf.hasOwnProperty;
function Ef(n, t, e, r, s, i) {
  var l = e & bf, a = Vs(n), c = a.length, h = Vs(t), d = h.length;
  if (c != d && !l)
    return !1;
  for (var m = c; m--; ) {
    var g = a[m];
    if (!(l ? g in t : vf.call(t, g)))
      return !1;
  }
  var p = i.get(n), b = i.get(t);
  if (p && b)
    return p == t && b == n;
  var v = !0;
  i.set(n, t), i.set(t, n);
  for (var y = l; ++m < c; ) {
    g = a[m];
    var E = n[g], w = t[g];
    if (r)
      var T = l ? r(w, E, g, t, n, i) : r(E, w, g, n, t, i);
    if (!(T === void 0 ? E === w || s(E, w, e, r, i) : T)) {
      v = !1;
      break;
    }
    y || (y = g == "constructor");
  }
  if (v && !y) {
    var _ = n.constructor, L = t.constructor;
    _ != L && "constructor" in n && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof L == "function" && L instanceof L) && (v = !1);
  }
  return i.delete(n), i.delete(t), v;
}
var Af = 1, fl = "[object Arguments]", dl = "[object Array]", hr = "[object Object]", Nf = Object.prototype, gl = Nf.hasOwnProperty;
function wf(n, t, e, r, s, i) {
  var l = fe(n), a = fe(t), c = l ? dl : yt(n), h = a ? dl : yt(t);
  c = c == fl ? hr : c, h = h == fl ? hr : h;
  var d = c == hr, m = h == hr, g = c == h;
  if (g && Nn(n)) {
    if (!Nn(t))
      return !1;
    l = !0, d = !1;
  }
  if (g && !d)
    return i || (i = new Ot()), l || Ai(n) ? mo(n, t, e, r, s, i) : mf(n, t, c, e, r, s, i);
  if (!(e & Af)) {
    var p = d && gl.call(n, "__wrapped__"), b = m && gl.call(t, "__wrapped__");
    if (p || b) {
      var v = p ? n.value() : n, y = b ? t.value() : t;
      return i || (i = new Ot()), s(v, y, e, r, i);
    }
  }
  return g ? (i || (i = new Ot()), Ef(n, t, e, r, s, i)) : !1;
}
function bo(n, t, e, r, s) {
  return n === t ? !0 : n == null || t == null || !Ut(n) && !Ut(t) ? n !== n && t !== t : wf(n, t, e, r, bo, s);
}
function Tf(n) {
  return function(t, e, r) {
    for (var s = -1, i = Object(t), l = r(t), a = l.length; a--; ) {
      var c = l[++s];
      if (e(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var xf = Tf();
function Ys(n, t, e) {
  (e !== void 0 && !qn(n[t], e) || e === void 0 && !(t in n)) && yi(n, t, e);
}
function Lf(n) {
  return Ut(n) && Lr(n);
}
function Qs(n, t) {
  if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
    return n[t];
}
function Sf(n) {
  return Cn(n, In(n));
}
function _f(n, t, e, r, s, i, l) {
  var a = Qs(n, e), c = Qs(t, e), h = l.get(c);
  if (h) {
    Ys(n, e, h);
    return;
  }
  var d = i ? i(a, c, e + "", n, t, l) : void 0, m = d === void 0;
  if (m) {
    var g = fe(c), p = !g && Nn(c), b = !g && !p && Ai(c);
    d = c, g || p || b ? fe(a) ? d = a : Lf(a) ? d = Wl(a) : p ? (m = !1, d = lo(c, !0)) : b ? (m = !1, d = uo(c, !0)) : d = [] : bu(c) || Ks(c) ? (d = a, Ks(a) ? d = Sf(a) : (!ee(a) || bi(a)) && (d = ho(c))) : m = !1;
  }
  m && (l.set(c, d), s(d, c, r, i, l), l.delete(c)), Ys(n, e, d);
}
function yo(n, t, e, r, s) {
  n !== t && xf(t, function(i, l) {
    if (s || (s = new Ot()), ee(i))
      _f(n, t, l, e, yo, r, s);
    else {
      var a = r ? r(Qs(n, l), i, l + "", n, t, s) : void 0;
      a === void 0 && (a = i), Ys(n, l, a);
    }
  }, In);
}
function Li(n, t) {
  return bo(n, t);
}
var Jt = Ya(function(n, t, e) {
  yo(n, t, e);
}), q = /* @__PURE__ */ ((n) => (n[n.TYPE = 3] = "TYPE", n[n.LEVEL = 12] = "LEVEL", n[n.ATTRIBUTE = 13] = "ATTRIBUTE", n[n.BLOT = 14] = "BLOT", n[n.INLINE = 7] = "INLINE", n[n.BLOCK = 11] = "BLOCK", n[n.BLOCK_BLOT = 10] = "BLOCK_BLOT", n[n.INLINE_BLOT = 6] = "INLINE_BLOT", n[n.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n[n.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n[n.ANY = 15] = "ANY", n))(q || {});
class Ct {
  constructor(t, e, r = {}) {
    this.attrName = t, this.keyName = e;
    const s = q.TYPE & q.ATTRIBUTE;
    this.scope = r.scope != null ? (
      // Ignore type bits, force attribute bit
      r.scope & q.LEVEL | s
    ) : q.ATTRIBUTE, r.whitelist != null && (this.whitelist = r.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class Ue extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const vo = class Js {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let r = null;
      try {
        r = t.parentNode;
      } catch {
        return null;
      }
      return this.find(r, e);
    }
    return null;
  }
  create(t, e, r) {
    const s = this.query(e);
    if (s == null)
      throw new Ue(`Unable to create ${e} blot`);
    const i = s, l = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(r)
    ), a = new i(t, l, r);
    return Js.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return Js.find(t, e);
  }
  query(t, e = q.ANY) {
    let r;
    return typeof t == "string" ? r = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? r = this.types.text : typeof t == "number" ? t & q.LEVEL & q.BLOCK ? r = this.types.block : t & q.LEVEL & q.INLINE && (r = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((s) => (r = this.classes[s], !!r)), r = r || this.tags[t.tagName]), r == null ? null : "scope" in r && e & q.LEVEL & r.scope && e & q.TYPE & r.scope ? r : null;
  }
  register(...t) {
    return t.map((e) => {
      const r = "blotName" in e, s = "attrName" in e;
      if (!r && !s)
        throw new Ue("Invalid definition");
      if (r && e.blotName === "abstract")
        throw new Ue("Cannot register abstract class");
      const i = r ? e.blotName : s ? e.attrName : void 0;
      return this.types[i] = e, s ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : r && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((l) => l.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((l) => {
        (this.tags[l] == null || e.className == null) && (this.tags[l] = e);
      }))), e;
    });
  }
};
vo.blots = /* @__PURE__ */ new WeakMap();
let ge = vo;
function pl(n, t) {
  return (n.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class Of extends Ct {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    pl(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (pl(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const Nt = Of;
function ks(n) {
  const t = n.split("-"), e = t.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  return t[0] + e;
}
class qf extends Ct {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[ks(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[ks(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[ks(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const ne = qf;
class Cf {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = ge.find(this.domNode);
    if (t == null)
      return;
    const e = Ct.keys(this.domNode), r = Nt.keys(this.domNode), s = ne.keys(this.domNode);
    e.concat(r).concat(s).forEach((i) => {
      const l = t.scroll.query(i, q.ATTRIBUTE);
      l instanceof Ct && (this.attributes[l.attrName] = l);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const r = this.attributes[e].value(this.domNode);
      t.format(e, r);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const Or = Cf, Eo = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, ge.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new Ue("Blot definition missing tagName");
    let e, r;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (r = t.toUpperCase(), parseInt(r, 10).toString() === r && (r = parseInt(r, 10))) : typeof t == "number" && (r = t), typeof r == "number" ? e = document.createElement(this.tagName[r - 1]) : r && this.tagName.indexOf(r) > -1 ? e = document.createElement(r) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), ge.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, r, s) {
    const i = this.isolate(t, e);
    if (this.scroll.query(r, q.BLOT) != null && s)
      i.wrap(r, s);
    else if (this.scroll.query(r, q.ATTRIBUTE) != null) {
      const l = this.scroll.create(this.statics.scope);
      i.wrap(l), l.format(r, s);
    }
  }
  insertAt(t, e, r) {
    const s = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r), i = this.split(t);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(t, e) {
    const r = this.split(t);
    if (r == null)
      throw new Error("Attempt to isolate at end");
    return r.split(e), r;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(r, this.next || void 0), this.remove()), r;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(r, this.next || void 0), typeof r.appendChild != "function")
      throw new Ue(`Cannot wrap ${t}`);
    return r.appendChild(this), r;
  }
};
Eo.blotName = "abstract";
let Ao = Eo;
const No = class extends Ao {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t, e) {
    let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (r += 1), [this.parent.domNode, r];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
No.scope = q.INLINE_BLOT;
let If = No;
const Q = If;
class Rf {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let r = e();
    for (; r && t > 0; )
      t -= 1, r = e();
    return r;
  }
  contains(t) {
    const e = this.iterator();
    let r = e();
    for (; r; ) {
      if (r === t)
        return !0;
      r = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let r = e(), s = 0;
    for (; r; ) {
      if (r === t)
        return s;
      s += 1, r = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, r = this.head;
    for (; r != null; ) {
      if (r === t)
        return e;
      e += r.length(), r = r.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const r = this.iterator();
    let s = r();
    for (; s; ) {
      const i = s.length();
      if (t < i || e && t === i && (s.next == null || s.next.length() !== 0))
        return [s, t];
      t -= i, s = r();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let r = e();
    for (; r; )
      t(r), r = e();
  }
  forEachAt(t, e, r) {
    if (e <= 0)
      return;
    const [s, i] = this.find(t);
    let l = t - i;
    const a = this.iterator(s);
    let c = a();
    for (; c && l < t + e; ) {
      const h = c.length();
      t > l ? r(
        c,
        t - l,
        Math.min(e, l + h - t)
      ) : r(c, 0, Math.min(h, t + e - l)), l += h, c = a();
    }
  }
  map(t) {
    return this.reduce((e, r) => (e.push(t(r)), e), []);
  }
  reduce(t, e) {
    const r = this.iterator();
    let s = r();
    for (; s; )
      e = t(e, s), s = r();
    return e;
  }
}
function ml(n, t) {
  const e = t.find(n);
  if (e)
    return e;
  try {
    return t.create(n);
  } catch {
    const r = t.create(q.INLINE);
    return Array.from(n.childNodes).forEach((s) => {
      r.domNode.appendChild(s);
    }), n.parentNode && n.parentNode.replaceChild(r.domNode, n), r.attach(), r;
  }
}
const wo = class Zt extends Ao {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, Zt.uiClass && this.uiNode.classList.add(Zt.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new Rf(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = ml(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof Ue)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (r, s, i) => {
      r.deleteAt(s, i);
    });
  }
  descendant(t, e = 0) {
    const [r, s] = this.children.find(e);
    return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, s] : r instanceof Zt ? r.descendant(t, s) : [null, -1];
  }
  descendants(t, e = 0, r = Number.MAX_VALUE) {
    let s = [], i = r;
    return this.children.forEachAt(
      e,
      r,
      (l, a, c) => {
        (t.blotName == null && t(l) || t.blotName != null && l instanceof t) && s.push(l), l instanceof Zt && (s = s.concat(
          l.descendants(t, a, i)
        )), i -= c;
      }
    ), s;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (r) => e instanceof r
      ) || (e.statics.scope === q.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof Zt ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, r, s) {
    this.children.forEachAt(t, e, (i, l, a) => {
      i.formatAt(l, a, r, s);
    });
  }
  insertAt(t, e, r) {
    const [s, i] = this.children.find(t);
    if (s)
      s.insertAt(i, e, r);
    else {
      const l = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r);
      this.appendChild(l);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let r = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (r = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== r) && this.domNode.insertBefore(t.domNode, r), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((r) => {
      t.insertBefore(r, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [r, s] = this.children.find(t, e), i = [[this, t]];
    return r instanceof Zt ? i.concat(r.path(s, e)) : (r != null && i.push([r, s]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return r instanceof Zt && this.moveChildren(r), super.replaceWith(r);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.clone();
    return this.parent && this.parent.insertBefore(r, this.next || void 0), this.children.forEachAt(t, this.length(), (s, i, l) => {
      const a = s.split(i, e);
      a != null && r.appendChild(a);
    }), r;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const r = [], s = [];
    t.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (r.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const l = this.scroll.find(i);
      l != null && (l.domNode.parentNode == null || l.domNode.parentNode === this.domNode) && l.detach();
    }), r.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, l) => i === l ? 0 : i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let l = null;
      i.nextSibling != null && (l = this.scroll.find(i.nextSibling));
      const a = ml(i, this.scroll);
      (a.next !== l || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, l || void 0));
    }), this.enforceAllowedChildren();
  }
};
wo.uiClass = "";
let kf = wo;
const Et = kf;
function Bf(n, t) {
  if (Object.keys(n).length !== Object.keys(t).length)
    return !1;
  for (const e in n)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
const Re = class ke extends Et {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(ke.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Or(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((r) => {
        r instanceof ke || (r = r.wrap(ke.blotName, !0)), this.attributes.copy(r);
      }), this.unwrap();
    else {
      const r = this.scroll.query(t, q.INLINE);
      if (r == null)
        return;
      r instanceof Ct ? this.attributes.attribute(r, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.formats()[r] != null || this.scroll.query(r, q.ATTRIBUTE) ? this.isolate(t, e).format(r, s) : super.formatAt(t, e, r, s);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const r = this.next;
    r instanceof ke && r.prev === this && Bf(e, r.formats()) && (r.moveChildren(this), r.remove());
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const r = super.wrap(t, e);
    return r instanceof ke && this.attributes.move(r), r;
  }
};
Re.allowedChildren = [Re, Q], Re.blotName = "inline", Re.scope = q.INLINE_BLOT, Re.tagName = "SPAN";
let Mf = Re;
const Si = Mf, Be = class ti extends Et {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(ti.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Or(this.domNode);
  }
  format(t, e) {
    const r = this.scroll.query(t, q.BLOCK);
    r != null && (r instanceof Ct ? this.attributes.attribute(r, e) : t === this.statics.blotName && !e ? this.replaceWith(ti.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.scroll.query(r, q.BLOCK) != null ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    if (r == null || this.scroll.query(e, q.INLINE) != null)
      super.insertAt(t, e, r);
    else {
      const s = this.split(t);
      if (s != null) {
        const i = this.scroll.create(e, r);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
};
Be.blotName = "block", Be.scope = q.BLOCK_BLOT, Be.tagName = "P", Be.allowedChildren = [
  Si,
  Be,
  Q
];
let $f = Be;
const xn = $f, ei = class extends Et {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.enforceAllowedChildren();
  }
  insertAt(t, e, r) {
    super.insertAt(t, e, r), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
ei.blotName = "container", ei.scope = q.BLOCK_BLOT;
let Df = ei;
const qr = Df;
class jf extends Q {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, r, s) {
    t === 0 && e === this.length() ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const it = jf, Pf = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Uf = 100, Me = class extends Et {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((r) => {
      this.update(r);
    }), this.observer.observe(this.domNode, Pf), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const r = this.registry.find(t, e);
    return r ? r.scroll === this ? r : e ? this.find(r.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = q.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((r) => {
      r.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, r, s) {
    this.update(), super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    this.update(), super.insertAt(t, e, r);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const r = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      t.push(s.pop());
    const i = (c, h = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (r.has(c.domNode) || r.set(c.domNode, []), h && i(c.parent));
    }, l = (c) => {
      r.has(c.domNode) && (c instanceof Et && c.children.forEach(l), r.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= Uf)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const d = this.find(h.target, !0);
        d != null && (d.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((m) => {
          const g = this.find(m, !1);
          i(g, !1), g instanceof Et && g.children.forEach((p) => {
            i(p, !1);
          });
        })) : h.type === "attributes" && i(d.prev)), i(d));
      }), this.children.forEach(l), a = Array.from(this.observer.takeRecords()), s = a.slice(); s.length > 0; )
        t.push(s.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const r = /* @__PURE__ */ new WeakMap();
    t.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : r.has(i.domNode) ? (r.get(i.domNode).push(s), null) : (r.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && r.has(s.domNode) && s.update(r.get(s.domNode) || [], e);
    }), e.mutationsMap = r, r.has(this.domNode) && super.update(r.get(this.domNode), e), this.optimize(t, e);
  }
};
Me.blotName = "scroll", Me.defaultChild = xn, Me.allowedChildren = [xn, qr], Me.scope = q.BLOCK_BLOT, Me.tagName = "DIV";
let Ff = Me;
const _i = Ff, ni = class To extends Q {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, r) {
    r == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, r);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof To && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(r, this.next || void 0), this.text = this.statics.value(this.domNode), r;
  }
  update(t, e) {
    t.some((r) => r.type === "characterData" && r.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
ni.blotName = "text", ni.scope = q.INLINE_BLOT;
let Hf = ni;
const wr = Hf, zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: Ct,
  AttributorStore: Or,
  BlockBlot: xn,
  ClassAttributor: Nt,
  ContainerBlot: qr,
  EmbedBlot: it,
  InlineBlot: Si,
  LeafBlot: Q,
  ParentBlot: Et,
  Registry: ge,
  Scope: q,
  ScrollBlot: _i,
  StyleAttributor: ne,
  TextBlot: wr
}, Symbol.toStringTag, { value: "Module" }));
var Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ri = { exports: {} }, st = -1, et = 1, G = 0;
function Ln(n, t, e, r, s) {
  if (n === t)
    return n ? [[G, n]] : [];
  if (e != null) {
    var i = Jf(n, t, e);
    if (i)
      return i;
  }
  var l = Oi(n, t), a = n.substring(0, l);
  n = n.substring(l), t = t.substring(l), l = Cr(n, t);
  var c = n.substring(n.length - l);
  n = n.substring(0, n.length - l), t = t.substring(0, t.length - l);
  var h = Gf(n, t);
  return a && h.unshift([G, a]), c && h.push([G, c]), qi(h, s), r && Wf(h), h;
}
function Gf(n, t) {
  var e;
  if (!n)
    return [[et, t]];
  if (!t)
    return [[st, n]];
  var r = n.length > t.length ? n : t, s = n.length > t.length ? t : n, i = r.indexOf(s);
  if (i !== -1)
    return e = [
      [et, r.substring(0, i)],
      [G, s],
      [et, r.substring(i + s.length)]
    ], n.length > t.length && (e[0][0] = e[2][0] = st), e;
  if (s.length === 1)
    return [
      [st, n],
      [et, t]
    ];
  var l = Vf(n, t);
  if (l) {
    var a = l[0], c = l[1], h = l[2], d = l[3], m = l[4], g = Ln(a, h), p = Ln(c, d);
    return g.concat([[G, m]], p);
  }
  return Kf(n, t);
}
function Kf(n, t) {
  for (var e = n.length, r = t.length, s = Math.ceil((e + r) / 2), i = s, l = 2 * s, a = new Array(l), c = new Array(l), h = 0; h < l; h++)
    a[h] = -1, c[h] = -1;
  a[i + 1] = 0, c[i + 1] = 0;
  for (var d = e - r, m = d % 2 !== 0, g = 0, p = 0, b = 0, v = 0, y = 0; y < s; y++) {
    for (var E = -y + g; E <= y - p; E += 2) {
      var w = i + E, T;
      E === -y || E !== y && a[w - 1] < a[w + 1] ? T = a[w + 1] : T = a[w - 1] + 1;
      for (var _ = T - E; T < e && _ < r && n.charAt(T) === t.charAt(_); )
        T++, _++;
      if (a[w] = T, T > e)
        p += 2;
      else if (_ > r)
        g += 2;
      else if (m) {
        var L = i + d - E;
        if (L >= 0 && L < l && c[L] !== -1) {
          var I = e - c[L];
          if (T >= I)
            return bl(n, t, T, _);
        }
      }
    }
    for (var k = -y + b; k <= y - v; k += 2) {
      var L = i + k, I;
      k === -y || k !== y && c[L - 1] < c[L + 1] ? I = c[L + 1] : I = c[L - 1] + 1;
      for (var U = I - k; I < e && U < r && n.charAt(e - I - 1) === t.charAt(r - U - 1); )
        I++, U++;
      if (c[L] = I, I > e)
        v += 2;
      else if (U > r)
        b += 2;
      else if (!m) {
        var w = i + d - k;
        if (w >= 0 && w < l && a[w] !== -1) {
          var T = a[w], _ = i + T - w;
          if (I = e - I, T >= I)
            return bl(n, t, T, _);
        }
      }
    }
  }
  return [
    [st, n],
    [et, t]
  ];
}
function bl(n, t, e, r) {
  var s = n.substring(0, e), i = t.substring(0, r), l = n.substring(e), a = t.substring(r), c = Ln(s, i), h = Ln(l, a);
  return c.concat(h);
}
function Oi(n, t) {
  if (!n || !t || n.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(i, s) == t.substring(i, s) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return Lo(n.charCodeAt(s - 1)) && s--, s;
}
function yl(n, t) {
  var e = n.length, r = t.length;
  if (e == 0 || r == 0)
    return 0;
  e > r ? n = n.substring(e - r) : e < r && (t = t.substring(0, e));
  var s = Math.min(e, r);
  if (n == t)
    return s;
  for (var i = 0, l = 1; ; ) {
    var a = n.substring(s - l), c = t.indexOf(a);
    if (c == -1)
      return i;
    l += c, (c == 0 || n.substring(s - l) == t.substring(0, l)) && (i = l, l++);
  }
}
function Cr(n, t) {
  if (!n || !t || n.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(n.length - s, n.length - i) == t.substring(t.length - s, t.length - i) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return So(n.charCodeAt(n.length - s)) && s--, s;
}
function Vf(n, t) {
  var e = n.length > t.length ? n : t, r = n.length > t.length ? t : n;
  if (e.length < 4 || r.length * 2 < e.length)
    return null;
  function s(p, b, v) {
    for (var y = p.substring(v, v + Math.floor(p.length / 4)), E = -1, w = "", T, _, L, I; (E = b.indexOf(y, E + 1)) !== -1; ) {
      var k = Oi(
        p.substring(v),
        b.substring(E)
      ), U = Cr(
        p.substring(0, v),
        b.substring(0, E)
      );
      w.length < U + k && (w = b.substring(E - U, E) + b.substring(E, E + k), T = p.substring(0, v - U), _ = p.substring(v + k), L = b.substring(0, E - U), I = b.substring(E + k));
    }
    return w.length * 2 >= p.length ? [
      T,
      _,
      L,
      I,
      w
    ] : null;
  }
  var i = s(
    e,
    r,
    Math.ceil(e.length / 4)
  ), l = s(
    e,
    r,
    Math.ceil(e.length / 2)
  ), a;
  if (!i && !l)
    return null;
  l ? i ? a = i[4].length > l[4].length ? i : l : a = l : a = i;
  var c, h, d, m;
  n.length > t.length ? (c = a[0], h = a[1], d = a[2], m = a[3]) : (d = a[0], m = a[1], c = a[2], h = a[3]);
  var g = a[4];
  return [c, h, d, m, g];
}
function Wf(n) {
  for (var t = !1, e = [], r = 0, s = null, i = 0, l = 0, a = 0, c = 0, h = 0; i < n.length; )
    n[i][0] == G ? (e[r++] = i, l = c, a = h, c = 0, h = 0, s = n[i][1]) : (n[i][0] == et ? c += n[i][1].length : h += n[i][1].length, s && s.length <= Math.max(l, a) && s.length <= Math.max(c, h) && (n.splice(e[r - 1], 0, [
      st,
      s
    ]), n[e[r - 1] + 1][0] = et, r--, r--, i = r > 0 ? e[r - 1] : -1, l = 0, a = 0, c = 0, h = 0, s = null, t = !0)), i++;
  for (t && qi(n), Yf(n), i = 1; i < n.length; ) {
    if (n[i - 1][0] == st && n[i][0] == et) {
      var d = n[i - 1][1], m = n[i][1], g = yl(d, m), p = yl(m, d);
      g >= p ? (g >= d.length / 2 || g >= m.length / 2) && (n.splice(i, 0, [
        G,
        m.substring(0, g)
      ]), n[i - 1][1] = d.substring(
        0,
        d.length - g
      ), n[i + 1][1] = m.substring(g), i++) : (p >= d.length / 2 || p >= m.length / 2) && (n.splice(i, 0, [
        G,
        d.substring(0, p)
      ]), n[i - 1][0] = et, n[i - 1][1] = m.substring(
        0,
        m.length - p
      ), n[i + 1][0] = st, n[i + 1][1] = d.substring(p), i++), i++;
    }
    i++;
  }
}
var vl = /[^a-zA-Z0-9]/, El = /\s/, Al = /[\r\n]/, Zf = /\n\r?\n$/, Xf = /^\r?\n\r?\n/;
function Yf(n) {
  function t(p, b) {
    if (!p || !b)
      return 6;
    var v = p.charAt(p.length - 1), y = b.charAt(0), E = v.match(vl), w = y.match(vl), T = E && v.match(El), _ = w && y.match(El), L = T && v.match(Al), I = _ && y.match(Al), k = L && p.match(Zf), U = I && b.match(Xf);
    return k || U ? 5 : L || I ? 4 : E && !T && _ ? 3 : T || _ ? 2 : E || w ? 1 : 0;
  }
  for (var e = 1; e < n.length - 1; ) {
    if (n[e - 1][0] == G && n[e + 1][0] == G) {
      var r = n[e - 1][1], s = n[e][1], i = n[e + 1][1], l = Cr(r, s);
      if (l) {
        var a = s.substring(s.length - l);
        r = r.substring(0, r.length - l), s = a + s.substring(0, s.length - l), i = a + i;
      }
      for (var c = r, h = s, d = i, m = t(r, s) + t(s, i); s.charAt(0) === i.charAt(0); ) {
        r += s.charAt(0), s = s.substring(1) + i.charAt(0), i = i.substring(1);
        var g = t(r, s) + t(s, i);
        g >= m && (m = g, c = r, h = s, d = i);
      }
      n[e - 1][1] != c && (c ? n[e - 1][1] = c : (n.splice(e - 1, 1), e--), n[e][1] = h, d ? n[e + 1][1] = d : (n.splice(e + 1, 1), e--));
    }
    e++;
  }
}
function qi(n, t) {
  n.push([G, ""]);
  for (var e = 0, r = 0, s = 0, i = "", l = "", a; e < n.length; ) {
    if (e < n.length - 1 && !n[e][1]) {
      n.splice(e, 1);
      continue;
    }
    switch (n[e][0]) {
      case et:
        s++, l += n[e][1], e++;
        break;
      case st:
        r++, i += n[e][1], e++;
        break;
      case G:
        var c = e - s - r - 1;
        if (t) {
          if (c >= 0 && Oo(n[c][1])) {
            var h = n[c][1].slice(-1);
            if (n[c][1] = n[c][1].slice(
              0,
              -1
            ), i = h + i, l = h + l, !n[c][1]) {
              n.splice(c, 1), e--;
              var d = c - 1;
              n[d] && n[d][0] === et && (s++, l = n[d][1] + l, d--), n[d] && n[d][0] === st && (r++, i = n[d][1] + i, d--), c = d;
            }
          }
          if (_o(n[e][1])) {
            var h = n[e][1].charAt(0);
            n[e][1] = n[e][1].slice(1), i += h, l += h;
          }
        }
        if (e < n.length - 1 && !n[e][1]) {
          n.splice(e, 1);
          break;
        }
        if (i.length > 0 || l.length > 0) {
          i.length > 0 && l.length > 0 && (a = Oi(l, i), a !== 0 && (c >= 0 ? n[c][1] += l.substring(
            0,
            a
          ) : (n.splice(0, 0, [
            G,
            l.substring(0, a)
          ]), e++), l = l.substring(a), i = i.substring(a)), a = Cr(l, i), a !== 0 && (n[e][1] = l.substring(l.length - a) + n[e][1], l = l.substring(
            0,
            l.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var m = s + r;
          i.length === 0 && l.length === 0 ? (n.splice(e - m, m), e = e - m) : i.length === 0 ? (n.splice(e - m, m, [et, l]), e = e - m + 1) : l.length === 0 ? (n.splice(e - m, m, [st, i]), e = e - m + 1) : (n.splice(
            e - m,
            m,
            [st, i],
            [et, l]
          ), e = e - m + 2);
        }
        e !== 0 && n[e - 1][0] === G ? (n[e - 1][1] += n[e][1], n.splice(e, 1)) : e++, s = 0, r = 0, i = "", l = "";
        break;
    }
  }
  n[n.length - 1][1] === "" && n.pop();
  var g = !1;
  for (e = 1; e < n.length - 1; )
    n[e - 1][0] === G && n[e + 1][0] === G && (n[e][1].substring(
      n[e][1].length - n[e - 1][1].length
    ) === n[e - 1][1] ? (n[e][1] = n[e - 1][1] + n[e][1].substring(
      0,
      n[e][1].length - n[e - 1][1].length
    ), n[e + 1][1] = n[e - 1][1] + n[e + 1][1], n.splice(e - 1, 1), g = !0) : n[e][1].substring(0, n[e + 1][1].length) == n[e + 1][1] && (n[e - 1][1] += n[e + 1][1], n[e][1] = n[e][1].substring(n[e + 1][1].length) + n[e + 1][1], n.splice(e + 1, 1), g = !0)), e++;
  g && qi(n, t);
}
function Lo(n) {
  return n >= 55296 && n <= 56319;
}
function So(n) {
  return n >= 56320 && n <= 57343;
}
function _o(n) {
  return So(n.charCodeAt(0));
}
function Oo(n) {
  return Lo(n.charCodeAt(n.length - 1));
}
function Qf(n) {
  for (var t = [], e = 0; e < n.length; e++)
    n[e][1].length > 0 && t.push(n[e]);
  return t;
}
function Bs(n, t, e, r) {
  return Oo(n) || _o(r) ? null : Qf([
    [G, n],
    [st, t],
    [et, e],
    [G, r]
  ]);
}
function Jf(n, t, e) {
  var r = typeof e == "number" ? { index: e, length: 0 } : e.oldRange, s = typeof e == "number" ? null : e.newRange, i = n.length, l = t.length;
  if (r.length === 0 && (s === null || s.length === 0)) {
    var a = r.index, c = n.slice(0, a), h = n.slice(a), d = s ? s.index : null;
    t: {
      var m = a + l - i;
      if (d !== null && d !== m || m < 0 || m > l)
        break t;
      var g = t.slice(0, m), p = t.slice(m);
      if (p !== h)
        break t;
      var b = Math.min(a, m), v = c.slice(0, b), y = g.slice(0, b);
      if (v !== y)
        break t;
      var E = c.slice(b), w = g.slice(b);
      return Bs(v, E, w, h);
    }
    t: {
      if (d !== null && d !== a)
        break t;
      var T = a, g = t.slice(0, T), p = t.slice(T);
      if (g !== c)
        break t;
      var _ = Math.min(i - T, l - T), L = h.slice(h.length - _), I = p.slice(p.length - _);
      if (L !== I)
        break t;
      var E = h.slice(0, h.length - _), w = p.slice(0, p.length - _);
      return Bs(c, E, w, L);
    }
  }
  if (r.length > 0 && s && s.length === 0)
    t: {
      var v = n.slice(0, r.index), L = n.slice(r.index + r.length), b = v.length, _ = L.length;
      if (l < b + _)
        break t;
      var y = t.slice(0, b), I = t.slice(l - _);
      if (v !== y || L !== I)
        break t;
      var E = n.slice(b, i - _), w = t.slice(b, l - _);
      return Bs(v, E, w, L);
    }
  return null;
}
function Ir(n, t, e, r) {
  return Ln(n, t, e, r, !0);
}
Ir.INSERT = et;
Ir.DELETE = st;
Ir.EQUAL = G;
var td = Ir, Tr = { exports: {} };
Tr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", l = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", d = "[object Function]", m = "[object GeneratorFunction]", g = "[object Map]", p = "[object Number]", b = "[object Object]", v = "[object Promise]", y = "[object RegExp]", E = "[object Set]", w = "[object String]", T = "[object Symbol]", _ = "[object WeakMap]", L = "[object ArrayBuffer]", I = "[object DataView]", k = "[object Float32Array]", U = "[object Float64Array]", Bt = "[object Int8Array]", Kt = "[object Int16Array]", re = "[object Int32Array]", se = "[object Uint8Array]", $n = "[object Uint8ClampedArray]", Dn = "[object Uint16Array]", jn = "[object Uint32Array]", $r = /[\\^$.*+?()[\]{}|]/g, Dr = /\w*$/, jr = /^\[object .+?Constructor\]$/, Pr = /^(?:0|[1-9]\d*)$/, D = {};
  D[i] = D[l] = D[L] = D[I] = D[a] = D[c] = D[k] = D[U] = D[Bt] = D[Kt] = D[re] = D[g] = D[p] = D[b] = D[y] = D[E] = D[w] = D[T] = D[se] = D[$n] = D[Dn] = D[jn] = !0, D[h] = D[d] = D[_] = !1;
  var Ur = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, Fr = typeof self == "object" && self && self.Object === Object && self, ft = Ur || Fr || Function("return this")(), Pn = t && !t.nodeType && t, j = Pn && !0 && n && !n.nodeType && n, Un = j && j.exports === Pn;
  function Hr(o, u) {
    return o.set(u[0], u[1]), o;
  }
  function dt(o, u) {
    return o.add(u), o;
  }
  function Fn(o, u) {
    for (var f = -1, A = o ? o.length : 0; ++f < A && u(o[f], f, o) !== !1; )
      ;
    return o;
  }
  function Hn(o, u) {
    for (var f = -1, A = u.length, R = o.length; ++f < A; )
      o[R + f] = u[f];
    return o;
  }
  function We(o, u, f, A) {
    for (var R = -1, C = o ? o.length : 0; ++R < C; )
      f = u(f, o[R], R, o);
    return f;
  }
  function Ze(o, u) {
    for (var f = -1, A = Array(o); ++f < o; )
      A[f] = u(f);
    return A;
  }
  function zn(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Xe(o) {
    var u = !1;
    if (o != null && typeof o.toString != "function")
      try {
        u = !!(o + "");
      } catch {
      }
    return u;
  }
  function Gn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A, R) {
      f[++u] = [R, A];
    }), f;
  }
  function Ye(o, u) {
    return function(f) {
      return o(u(f));
    };
  }
  function Kn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A) {
      f[++u] = A;
    }), f;
  }
  var zr = Array.prototype, Gr = Function.prototype, Ne = Object.prototype, Qe = ft["__core-js_shared__"], Vn = function() {
    var o = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Wn = Gr.toString, Tt = Ne.hasOwnProperty, we = Ne.toString, Kr = RegExp(
    "^" + Wn.call(Tt).replace($r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ie = Un ? ft.Buffer : void 0, Te = ft.Symbol, Je = ft.Uint8Array, lt = Ye(Object.getPrototypeOf, Object), Zn = Object.create, Xn = Ne.propertyIsEnumerable, Vr = zr.splice, tn = Object.getOwnPropertySymbols, xe = ie ? ie.isBuffer : void 0, Yn = Ye(Object.keys, Object), Le = pt(ft, "DataView"), le = pt(ft, "Map"), gt = pt(ft, "Promise"), Se = pt(ft, "Set"), en = pt(ft, "WeakMap"), oe = pt(Object, "create"), nn = tt(Le), ae = tt(le), rn = tt(gt), sn = tt(Se), ln = tt(en), Vt = Te ? Te.prototype : void 0, Qn = Vt ? Vt.valueOf : void 0;
  function Mt(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Wr() {
    this.__data__ = oe ? oe(null) : {};
  }
  function Zr(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function Xr(o) {
    var u = this.__data__;
    if (oe) {
      var f = u[o];
      return f === r ? void 0 : f;
    }
    return Tt.call(u, o) ? u[o] : void 0;
  }
  function Jn(o) {
    var u = this.__data__;
    return oe ? u[o] !== void 0 : Tt.call(u, o);
  }
  function on(o, u) {
    var f = this.__data__;
    return f[o] = oe && u === void 0 ? r : u, this;
  }
  Mt.prototype.clear = Wr, Mt.prototype.delete = Zr, Mt.prototype.get = Xr, Mt.prototype.has = Jn, Mt.prototype.set = on;
  function K(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Yr() {
    this.__data__ = [];
  }
  function Qr(o) {
    var u = this.__data__, f = Oe(u, o);
    if (f < 0)
      return !1;
    var A = u.length - 1;
    return f == A ? u.pop() : Vr.call(u, f, 1), !0;
  }
  function Jr(o) {
    var u = this.__data__, f = Oe(u, o);
    return f < 0 ? void 0 : u[f][1];
  }
  function ts(o) {
    return Oe(this.__data__, o) > -1;
  }
  function es(o, u) {
    var f = this.__data__, A = Oe(f, o);
    return A < 0 ? f.push([o, u]) : f[A][1] = u, this;
  }
  K.prototype.clear = Yr, K.prototype.delete = Qr, K.prototype.get = Jr, K.prototype.has = ts, K.prototype.set = es;
  function Z(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function ns() {
    this.__data__ = {
      hash: new Mt(),
      map: new (le || K)(),
      string: new Mt()
    };
  }
  function rs(o) {
    return ue(this, o).delete(o);
  }
  function ss(o) {
    return ue(this, o).get(o);
  }
  function is(o) {
    return ue(this, o).has(o);
  }
  function ls(o, u) {
    return ue(this, o).set(o, u), this;
  }
  Z.prototype.clear = ns, Z.prototype.delete = rs, Z.prototype.get = ss, Z.prototype.has = is, Z.prototype.set = ls;
  function nt(o) {
    this.__data__ = new K(o);
  }
  function os() {
    this.__data__ = new K();
  }
  function as(o) {
    return this.__data__.delete(o);
  }
  function cs(o) {
    return this.__data__.get(o);
  }
  function us(o) {
    return this.__data__.has(o);
  }
  function hs(o, u) {
    var f = this.__data__;
    if (f instanceof K) {
      var A = f.__data__;
      if (!le || A.length < e - 1)
        return A.push([o, u]), this;
      f = this.__data__ = new Z(A);
    }
    return f.set(o, u), this;
  }
  nt.prototype.clear = os, nt.prototype.delete = as, nt.prototype.get = cs, nt.prototype.has = us, nt.prototype.set = hs;
  function _e(o, u) {
    var f = hn(o) || Ce(o) ? Ze(o.length, String) : [], A = f.length, R = !!A;
    for (var C in o)
      Tt.call(o, C) && !(R && (C == "length" || xs(C, A))) && f.push(C);
    return f;
  }
  function tr(o, u, f) {
    var A = o[u];
    (!(Tt.call(o, u) && ir(A, f)) || f === void 0 && !(u in o)) && (o[u] = f);
  }
  function Oe(o, u) {
    for (var f = o.length; f--; )
      if (ir(o[f][0], u))
        return f;
    return -1;
  }
  function xt(o, u) {
    return o && un(u, dn(u), o);
  }
  function an(o, u, f, A, R, C, M) {
    var B;
    if (A && (B = C ? A(o, R, C, M) : A(o)), B !== void 0)
      return B;
    if (!St(o))
      return o;
    var H = hn(o);
    if (H) {
      if (B = ws(o), !u)
        return Es(o, B);
    } else {
      var $ = Dt(o), X = $ == d || $ == m;
      if (lr(o))
        return qe(o, u);
      if ($ == b || $ == i || X && !C) {
        if (Xe(o))
          return C ? o : {};
        if (B = Lt(X ? {} : o), !u)
          return As(o, xt(B, o));
      } else {
        if (!D[$])
          return C ? o : {};
        B = Ts(o, $, an, u);
      }
    }
    M || (M = new nt());
    var rt = M.get(o);
    if (rt)
      return rt;
    if (M.set(o, B), !H)
      var z = f ? Ns(o) : dn(o);
    return Fn(z || o, function(Y, V) {
      z && (V = Y, Y = o[V]), tr(B, V, an(Y, u, f, A, V, o, M));
    }), B;
  }
  function fs(o) {
    return St(o) ? Zn(o) : {};
  }
  function ds(o, u, f) {
    var A = u(o);
    return hn(o) ? A : Hn(A, f(o));
  }
  function gs(o) {
    return we.call(o);
  }
  function ps(o) {
    if (!St(o) || Ss(o))
      return !1;
    var u = fn(o) || Xe(o) ? Kr : jr;
    return u.test(tt(o));
  }
  function ms(o) {
    if (!rr(o))
      return Yn(o);
    var u = [];
    for (var f in Object(o))
      Tt.call(o, f) && f != "constructor" && u.push(f);
    return u;
  }
  function qe(o, u) {
    if (u)
      return o.slice();
    var f = new o.constructor(o.length);
    return o.copy(f), f;
  }
  function cn(o) {
    var u = new o.constructor(o.byteLength);
    return new Je(u).set(new Je(o)), u;
  }
  function ce(o, u) {
    var f = u ? cn(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.byteLength);
  }
  function er(o, u, f) {
    var A = u ? f(Gn(o), !0) : Gn(o);
    return We(A, Hr, new o.constructor());
  }
  function nr(o) {
    var u = new o.constructor(o.source, Dr.exec(o));
    return u.lastIndex = o.lastIndex, u;
  }
  function bs(o, u, f) {
    var A = u ? f(Kn(o), !0) : Kn(o);
    return We(A, dt, new o.constructor());
  }
  function ys(o) {
    return Qn ? Object(Qn.call(o)) : {};
  }
  function vs(o, u) {
    var f = u ? cn(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.length);
  }
  function Es(o, u) {
    var f = -1, A = o.length;
    for (u || (u = Array(A)); ++f < A; )
      u[f] = o[f];
    return u;
  }
  function un(o, u, f, A) {
    f || (f = {});
    for (var R = -1, C = u.length; ++R < C; ) {
      var M = u[R], B = void 0;
      tr(f, M, B === void 0 ? o[M] : B);
    }
    return f;
  }
  function As(o, u) {
    return un(o, $t(o), u);
  }
  function Ns(o) {
    return ds(o, dn, $t);
  }
  function ue(o, u) {
    var f = o.__data__;
    return Ls(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function pt(o, u) {
    var f = zn(o, u);
    return ps(f) ? f : void 0;
  }
  var $t = tn ? Ye(tn, Object) : Os, Dt = gs;
  (Le && Dt(new Le(new ArrayBuffer(1))) != I || le && Dt(new le()) != g || gt && Dt(gt.resolve()) != v || Se && Dt(new Se()) != E || en && Dt(new en()) != _) && (Dt = function(o) {
    var u = we.call(o), f = u == b ? o.constructor : void 0, A = f ? tt(f) : void 0;
    if (A)
      switch (A) {
        case nn:
          return I;
        case ae:
          return g;
        case rn:
          return v;
        case sn:
          return E;
        case ln:
          return _;
      }
    return u;
  });
  function ws(o) {
    var u = o.length, f = o.constructor(u);
    return u && typeof o[0] == "string" && Tt.call(o, "index") && (f.index = o.index, f.input = o.input), f;
  }
  function Lt(o) {
    return typeof o.constructor == "function" && !rr(o) ? fs(lt(o)) : {};
  }
  function Ts(o, u, f, A) {
    var R = o.constructor;
    switch (u) {
      case L:
        return cn(o);
      case a:
      case c:
        return new R(+o);
      case I:
        return ce(o, A);
      case k:
      case U:
      case Bt:
      case Kt:
      case re:
      case se:
      case $n:
      case Dn:
      case jn:
        return vs(o, A);
      case g:
        return er(o, A, f);
      case p:
      case w:
        return new R(o);
      case y:
        return nr(o);
      case E:
        return bs(o, A, f);
      case T:
        return ys(o);
    }
  }
  function xs(o, u) {
    return u = u ?? s, !!u && (typeof o == "number" || Pr.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function Ls(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function Ss(o) {
    return !!Vn && Vn in o;
  }
  function rr(o) {
    var u = o && o.constructor, f = typeof u == "function" && u.prototype || Ne;
    return o === f;
  }
  function tt(o) {
    if (o != null) {
      try {
        return Wn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function sr(o) {
    return an(o, !0, !0);
  }
  function ir(o, u) {
    return o === u || o !== o && u !== u;
  }
  function Ce(o) {
    return _s(o) && Tt.call(o, "callee") && (!Xn.call(o, "callee") || we.call(o) == i);
  }
  var hn = Array.isArray;
  function Ie(o) {
    return o != null && or(o.length) && !fn(o);
  }
  function _s(o) {
    return ar(o) && Ie(o);
  }
  var lr = xe || qs;
  function fn(o) {
    var u = St(o) ? we.call(o) : "";
    return u == d || u == m;
  }
  function or(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= s;
  }
  function St(o) {
    var u = typeof o;
    return !!o && (u == "object" || u == "function");
  }
  function ar(o) {
    return !!o && typeof o == "object";
  }
  function dn(o) {
    return Ie(o) ? _e(o) : ms(o);
  }
  function Os() {
    return [];
  }
  function qs() {
    return !1;
  }
  n.exports = sr;
})(Tr, Tr.exports);
var qo = Tr.exports, xr = { exports: {} };
xr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 1, i = 2, l = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", d = "[object Boolean]", m = "[object Date]", g = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", E = "[object Null]", w = "[object Object]", T = "[object Promise]", _ = "[object Proxy]", L = "[object RegExp]", I = "[object Set]", k = "[object String]", U = "[object Symbol]", Bt = "[object Undefined]", Kt = "[object WeakMap]", re = "[object ArrayBuffer]", se = "[object DataView]", $n = "[object Float32Array]", Dn = "[object Float64Array]", jn = "[object Int8Array]", $r = "[object Int16Array]", Dr = "[object Int32Array]", jr = "[object Uint8Array]", Pr = "[object Uint8ClampedArray]", D = "[object Uint16Array]", Ur = "[object Uint32Array]", Fr = /[\\^$.*+?()[\]{}|]/g, ft = /^\[object .+?Constructor\]$/, Pn = /^(?:0|[1-9]\d*)$/, j = {};
  j[$n] = j[Dn] = j[jn] = j[$r] = j[Dr] = j[jr] = j[Pr] = j[D] = j[Ur] = !0, j[a] = j[c] = j[re] = j[d] = j[se] = j[m] = j[g] = j[p] = j[v] = j[y] = j[w] = j[L] = j[I] = j[k] = j[Kt] = !1;
  var Un = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, Hr = typeof self == "object" && self && self.Object === Object && self, dt = Un || Hr || Function("return this")(), Fn = t && !t.nodeType && t, Hn = Fn && !0 && n && !n.nodeType && n, We = Hn && Hn.exports === Fn, Ze = We && Un.process, zn = function() {
    try {
      return Ze && Ze.binding && Ze.binding("util");
    } catch {
    }
  }(), Xe = zn && zn.isTypedArray;
  function Gn(o, u) {
    for (var f = -1, A = o == null ? 0 : o.length, R = 0, C = []; ++f < A; ) {
      var M = o[f];
      u(M, f, o) && (C[R++] = M);
    }
    return C;
  }
  function Ye(o, u) {
    for (var f = -1, A = u.length, R = o.length; ++f < A; )
      o[R + f] = u[f];
    return o;
  }
  function Kn(o, u) {
    for (var f = -1, A = o == null ? 0 : o.length; ++f < A; )
      if (u(o[f], f, o))
        return !0;
    return !1;
  }
  function zr(o, u) {
    for (var f = -1, A = Array(o); ++f < o; )
      A[f] = u(f);
    return A;
  }
  function Gr(o) {
    return function(u) {
      return o(u);
    };
  }
  function Ne(o, u) {
    return o.has(u);
  }
  function Qe(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Vn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A, R) {
      f[++u] = [R, A];
    }), f;
  }
  function Wn(o, u) {
    return function(f) {
      return o(u(f));
    };
  }
  function Tt(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A) {
      f[++u] = A;
    }), f;
  }
  var we = Array.prototype, Kr = Function.prototype, ie = Object.prototype, Te = dt["__core-js_shared__"], Je = Kr.toString, lt = ie.hasOwnProperty, Zn = function() {
    var o = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Xn = ie.toString, Vr = RegExp(
    "^" + Je.call(lt).replace(Fr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), tn = We ? dt.Buffer : void 0, xe = dt.Symbol, Yn = dt.Uint8Array, Le = ie.propertyIsEnumerable, le = we.splice, gt = xe ? xe.toStringTag : void 0, Se = Object.getOwnPropertySymbols, en = tn ? tn.isBuffer : void 0, oe = Wn(Object.keys, Object), nn = $t(dt, "DataView"), ae = $t(dt, "Map"), rn = $t(dt, "Promise"), sn = $t(dt, "Set"), ln = $t(dt, "WeakMap"), Vt = $t(Object, "create"), Qn = tt(nn), Mt = tt(ae), Wr = tt(rn), Zr = tt(sn), Xr = tt(ln), Jn = xe ? xe.prototype : void 0, on = Jn ? Jn.valueOf : void 0;
  function K(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Yr() {
    this.__data__ = Vt ? Vt(null) : {}, this.size = 0;
  }
  function Qr(o) {
    var u = this.has(o) && delete this.__data__[o];
    return this.size -= u ? 1 : 0, u;
  }
  function Jr(o) {
    var u = this.__data__;
    if (Vt) {
      var f = u[o];
      return f === r ? void 0 : f;
    }
    return lt.call(u, o) ? u[o] : void 0;
  }
  function ts(o) {
    var u = this.__data__;
    return Vt ? u[o] !== void 0 : lt.call(u, o);
  }
  function es(o, u) {
    var f = this.__data__;
    return this.size += this.has(o) ? 0 : 1, f[o] = Vt && u === void 0 ? r : u, this;
  }
  K.prototype.clear = Yr, K.prototype.delete = Qr, K.prototype.get = Jr, K.prototype.has = ts, K.prototype.set = es;
  function Z(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function ns() {
    this.__data__ = [], this.size = 0;
  }
  function rs(o) {
    var u = this.__data__, f = qe(u, o);
    if (f < 0)
      return !1;
    var A = u.length - 1;
    return f == A ? u.pop() : le.call(u, f, 1), --this.size, !0;
  }
  function ss(o) {
    var u = this.__data__, f = qe(u, o);
    return f < 0 ? void 0 : u[f][1];
  }
  function is(o) {
    return qe(this.__data__, o) > -1;
  }
  function ls(o, u) {
    var f = this.__data__, A = qe(f, o);
    return A < 0 ? (++this.size, f.push([o, u])) : f[A][1] = u, this;
  }
  Z.prototype.clear = ns, Z.prototype.delete = rs, Z.prototype.get = ss, Z.prototype.has = is, Z.prototype.set = ls;
  function nt(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function os() {
    this.size = 0, this.__data__ = {
      hash: new K(),
      map: new (ae || Z)(),
      string: new K()
    };
  }
  function as(o) {
    var u = pt(this, o).delete(o);
    return this.size -= u ? 1 : 0, u;
  }
  function cs(o) {
    return pt(this, o).get(o);
  }
  function us(o) {
    return pt(this, o).has(o);
  }
  function hs(o, u) {
    var f = pt(this, o), A = f.size;
    return f.set(o, u), this.size += f.size == A ? 0 : 1, this;
  }
  nt.prototype.clear = os, nt.prototype.delete = as, nt.prototype.get = cs, nt.prototype.has = us, nt.prototype.set = hs;
  function _e(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.__data__ = new nt(); ++u < f; )
      this.add(o[u]);
  }
  function tr(o) {
    return this.__data__.set(o, r), this;
  }
  function Oe(o) {
    return this.__data__.has(o);
  }
  _e.prototype.add = _e.prototype.push = tr, _e.prototype.has = Oe;
  function xt(o) {
    var u = this.__data__ = new Z(o);
    this.size = u.size;
  }
  function an() {
    this.__data__ = new Z(), this.size = 0;
  }
  function fs(o) {
    var u = this.__data__, f = u.delete(o);
    return this.size = u.size, f;
  }
  function ds(o) {
    return this.__data__.get(o);
  }
  function gs(o) {
    return this.__data__.has(o);
  }
  function ps(o, u) {
    var f = this.__data__;
    if (f instanceof Z) {
      var A = f.__data__;
      if (!ae || A.length < e - 1)
        return A.push([o, u]), this.size = ++f.size, this;
      f = this.__data__ = new nt(A);
    }
    return f.set(o, u), this.size = f.size, this;
  }
  xt.prototype.clear = an, xt.prototype.delete = fs, xt.prototype.get = ds, xt.prototype.has = gs, xt.prototype.set = ps;
  function ms(o, u) {
    var f = Ce(o), A = !f && ir(o), R = !f && !A && Ie(o), C = !f && !A && !R && ar(o), M = f || A || R || C, B = M ? zr(o.length, String) : [], H = B.length;
    for (var $ in o)
      lt.call(o, $) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
      ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
      Ts($, H))) && B.push($);
    return B;
  }
  function qe(o, u) {
    for (var f = o.length; f--; )
      if (sr(o[f][0], u))
        return f;
    return -1;
  }
  function cn(o, u, f) {
    var A = u(o);
    return Ce(o) ? A : Ye(A, f(o));
  }
  function ce(o) {
    return o == null ? o === void 0 ? Bt : E : gt && gt in Object(o) ? Dt(o) : rr(o);
  }
  function er(o) {
    return St(o) && ce(o) == a;
  }
  function nr(o, u, f, A, R) {
    return o === u ? !0 : o == null || u == null || !St(o) && !St(u) ? o !== o && u !== u : bs(o, u, f, A, nr, R);
  }
  function bs(o, u, f, A, R, C) {
    var M = Ce(o), B = Ce(u), H = M ? c : Lt(o), $ = B ? c : Lt(u);
    H = H == a ? w : H, $ = $ == a ? w : $;
    var X = H == w, rt = $ == w, z = H == $;
    if (z && Ie(o)) {
      if (!Ie(u))
        return !1;
      M = !0, X = !1;
    }
    if (z && !X)
      return C || (C = new xt()), M || ar(o) ? un(o, u, f, A, R, C) : As(o, u, H, f, A, R, C);
    if (!(f & s)) {
      var Y = X && lt.call(o, "__wrapped__"), V = rt && lt.call(u, "__wrapped__");
      if (Y || V) {
        var Wt = Y ? o.value() : o, jt = V ? u.value() : u;
        return C || (C = new xt()), R(Wt, jt, f, A, C);
      }
    }
    return z ? (C || (C = new xt()), Ns(o, u, f, A, R, C)) : !1;
  }
  function ys(o) {
    if (!or(o) || Ls(o))
      return !1;
    var u = lr(o) ? Vr : ft;
    return u.test(tt(o));
  }
  function vs(o) {
    return St(o) && fn(o.length) && !!j[ce(o)];
  }
  function Es(o) {
    if (!Ss(o))
      return oe(o);
    var u = [];
    for (var f in Object(o))
      lt.call(o, f) && f != "constructor" && u.push(f);
    return u;
  }
  function un(o, u, f, A, R, C) {
    var M = f & s, B = o.length, H = u.length;
    if (B != H && !(M && H > B))
      return !1;
    var $ = C.get(o);
    if ($ && C.get(u))
      return $ == u;
    var X = -1, rt = !0, z = f & i ? new _e() : void 0;
    for (C.set(o, u), C.set(u, o); ++X < B; ) {
      var Y = o[X], V = u[X];
      if (A)
        var Wt = M ? A(V, Y, X, u, o, C) : A(Y, V, X, o, u, C);
      if (Wt !== void 0) {
        if (Wt)
          continue;
        rt = !1;
        break;
      }
      if (z) {
        if (!Kn(u, function(jt, he) {
          if (!Ne(z, he) && (Y === jt || R(Y, jt, f, A, C)))
            return z.push(he);
        })) {
          rt = !1;
          break;
        }
      } else if (!(Y === V || R(Y, V, f, A, C))) {
        rt = !1;
        break;
      }
    }
    return C.delete(o), C.delete(u), rt;
  }
  function As(o, u, f, A, R, C, M) {
    switch (f) {
      case se:
        if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset)
          return !1;
        o = o.buffer, u = u.buffer;
      case re:
        return !(o.byteLength != u.byteLength || !C(new Yn(o), new Yn(u)));
      case d:
      case m:
      case y:
        return sr(+o, +u);
      case g:
        return o.name == u.name && o.message == u.message;
      case L:
      case k:
        return o == u + "";
      case v:
        var B = Vn;
      case I:
        var H = A & s;
        if (B || (B = Tt), o.size != u.size && !H)
          return !1;
        var $ = M.get(o);
        if ($)
          return $ == u;
        A |= i, M.set(o, u);
        var X = un(B(o), B(u), A, R, C, M);
        return M.delete(o), X;
      case U:
        if (on)
          return on.call(o) == on.call(u);
    }
    return !1;
  }
  function Ns(o, u, f, A, R, C) {
    var M = f & s, B = ue(o), H = B.length, $ = ue(u), X = $.length;
    if (H != X && !M)
      return !1;
    for (var rt = H; rt--; ) {
      var z = B[rt];
      if (!(M ? z in u : lt.call(u, z)))
        return !1;
    }
    var Y = C.get(o);
    if (Y && C.get(u))
      return Y == u;
    var V = !0;
    C.set(o, u), C.set(u, o);
    for (var Wt = M; ++rt < H; ) {
      z = B[rt];
      var jt = o[z], he = u[z];
      if (A)
        var Hi = M ? A(he, jt, z, u, o, C) : A(jt, he, z, o, u, C);
      if (!(Hi === void 0 ? jt === he || R(jt, he, f, A, C) : Hi)) {
        V = !1;
        break;
      }
      Wt || (Wt = z == "constructor");
    }
    if (V && !Wt) {
      var cr = o.constructor, ur = u.constructor;
      cr != ur && "constructor" in o && "constructor" in u && !(typeof cr == "function" && cr instanceof cr && typeof ur == "function" && ur instanceof ur) && (V = !1);
    }
    return C.delete(o), C.delete(u), V;
  }
  function ue(o) {
    return cn(o, dn, ws);
  }
  function pt(o, u) {
    var f = o.__data__;
    return xs(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function $t(o, u) {
    var f = Qe(o, u);
    return ys(f) ? f : void 0;
  }
  function Dt(o) {
    var u = lt.call(o, gt), f = o[gt];
    try {
      o[gt] = void 0;
      var A = !0;
    } catch {
    }
    var R = Xn.call(o);
    return A && (u ? o[gt] = f : delete o[gt]), R;
  }
  var ws = Se ? function(o) {
    return o == null ? [] : (o = Object(o), Gn(Se(o), function(u) {
      return Le.call(o, u);
    }));
  } : Os, Lt = ce;
  (nn && Lt(new nn(new ArrayBuffer(1))) != se || ae && Lt(new ae()) != v || rn && Lt(rn.resolve()) != T || sn && Lt(new sn()) != I || ln && Lt(new ln()) != Kt) && (Lt = function(o) {
    var u = ce(o), f = u == w ? o.constructor : void 0, A = f ? tt(f) : "";
    if (A)
      switch (A) {
        case Qn:
          return se;
        case Mt:
          return v;
        case Wr:
          return T;
        case Zr:
          return I;
        case Xr:
          return Kt;
      }
    return u;
  });
  function Ts(o, u) {
    return u = u ?? l, !!u && (typeof o == "number" || Pn.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function xs(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function Ls(o) {
    return !!Zn && Zn in o;
  }
  function Ss(o) {
    var u = o && o.constructor, f = typeof u == "function" && u.prototype || ie;
    return o === f;
  }
  function rr(o) {
    return Xn.call(o);
  }
  function tt(o) {
    if (o != null) {
      try {
        return Je.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function sr(o, u) {
    return o === u || o !== o && u !== u;
  }
  var ir = er(/* @__PURE__ */ function() {
    return arguments;
  }()) ? er : function(o) {
    return St(o) && lt.call(o, "callee") && !Le.call(o, "callee");
  }, Ce = Array.isArray;
  function hn(o) {
    return o != null && fn(o.length) && !lr(o);
  }
  var Ie = en || qs;
  function _s(o, u) {
    return nr(o, u);
  }
  function lr(o) {
    if (!or(o))
      return !1;
    var u = ce(o);
    return u == p || u == b || u == h || u == _;
  }
  function fn(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function or(o) {
    var u = typeof o;
    return o != null && (u == "object" || u == "function");
  }
  function St(o) {
    return o != null && typeof o == "object";
  }
  var ar = Xe ? Gr(Xe) : vs;
  function dn(o) {
    return hn(o) ? ms(o) : Es(o);
  }
  function Os() {
    return [];
  }
  function qs() {
    return !1;
  }
  n.exports = _s;
})(xr, xr.exports);
var Co = xr.exports, Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
const ed = qo, nd = Co;
var si;
(function(n) {
  function t(i = {}, l = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    let c = ed(l);
    a || (c = Object.keys(c).reduce((h, d) => (c[d] != null && (h[d] = c[d]), h), {}));
    for (const h in i)
      i[h] !== void 0 && l[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.compose = t;
  function e(i = {}, l = {}) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    const a = Object.keys(i).concat(Object.keys(l)).reduce((c, h) => (nd(i[h], l[h]) || (c[h] = l[h] === void 0 ? null : l[h]), c), {});
    return Object.keys(a).length > 0 ? a : void 0;
  }
  n.diff = e;
  function r(i = {}, l = {}) {
    i = i || {};
    const a = Object.keys(l).reduce((c, h) => (l[h] !== i[h] && i[h] !== void 0 && (c[h] = l[h]), c), {});
    return Object.keys(i).reduce((c, h) => (i[h] !== l[h] && l[h] === void 0 && (c[h] = null), c), a);
  }
  n.invert = r;
  function s(i, l, a = !1) {
    if (typeof i != "object")
      return l;
    if (typeof l != "object")
      return;
    if (!a)
      return l;
    const c = Object.keys(l).reduce((h, d) => (i[d] === void 0 && (h[d] = l[d]), h), {});
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.transform = s;
})(si || (si = {}));
Ci.default = si;
var Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
var ii;
(function(n) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  n.length = t;
})(ii || (ii = {}));
Rr.default = ii;
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
const Nl = Rr;
class rd {
  constructor(t) {
    this.ops = t, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t) {
    t || (t = 1 / 0);
    const e = this.ops[this.index];
    if (e) {
      const r = this.offset, s = Nl.default.length(e);
      if (t >= s - r ? (t = s - r, this.index += 1, this.offset = 0) : this.offset += t, typeof e.delete == "number")
        return { delete: t };
      {
        const i = {};
        return e.attributes && (i.attributes = e.attributes), typeof e.retain == "number" ? i.retain = t : typeof e.retain == "object" && e.retain !== null ? i.retain = e.retain : typeof e.insert == "string" ? i.insert = e.insert.substr(r, t) : i.insert = e.insert, i;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? Nl.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const t = this.ops[this.index];
    return t ? typeof t.delete == "number" ? "delete" : typeof t.retain == "number" || typeof t.retain == "object" && t.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t = this.offset, e = this.index, r = this.next(), s = this.ops.slice(this.index);
        return this.offset = t, this.index = e, [r].concat(s);
      }
    } else return [];
  }
}
Ii.default = rd;
(function(n, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = td, r = qo, s = Co, i = Ci;
  t.AttributeMap = i.default;
  const l = Rr;
  t.Op = l.default;
  const a = Ii;
  t.OpIterator = a.default;
  const c = "\0", h = (m, g) => {
    if (typeof m != "object" || m === null)
      throw new Error(`cannot retain a ${typeof m}`);
    if (typeof g != "object" || g === null)
      throw new Error(`cannot retain a ${typeof g}`);
    const p = Object.keys(m)[0];
    if (!p || p !== Object.keys(g)[0])
      throw new Error(`embed types not matched: ${p} != ${Object.keys(g)[0]}`);
    return [p, m[p], g[p]];
  };
  class d {
    constructor(g) {
      Array.isArray(g) ? this.ops = g : g != null && Array.isArray(g.ops) ? this.ops = g.ops : this.ops = [];
    }
    static registerEmbed(g, p) {
      this.handlers[g] = p;
    }
    static unregisterEmbed(g) {
      delete this.handlers[g];
    }
    static getHandler(g) {
      const p = this.handlers[g];
      if (!p)
        throw new Error(`no handlers for embed type "${g}"`);
      return p;
    }
    insert(g, p) {
      const b = {};
      return typeof g == "string" && g.length === 0 ? this : (b.insert = g, p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b));
    }
    delete(g) {
      return g <= 0 ? this : this.push({ delete: g });
    }
    retain(g, p) {
      if (typeof g == "number" && g <= 0)
        return this;
      const b = { retain: g };
      return p != null && typeof p == "object" && Object.keys(p).length > 0 && (b.attributes = p), this.push(b);
    }
    push(g) {
      let p = this.ops.length, b = this.ops[p - 1];
      if (g = r(g), typeof b == "object") {
        if (typeof g.delete == "number" && typeof b.delete == "number")
          return this.ops[p - 1] = { delete: b.delete + g.delete }, this;
        if (typeof b.delete == "number" && g.insert != null && (p -= 1, b = this.ops[p - 1], typeof b != "object"))
          return this.ops.unshift(g), this;
        if (s(g.attributes, b.attributes)) {
          if (typeof g.insert == "string" && typeof b.insert == "string")
            return this.ops[p - 1] = { insert: b.insert + g.insert }, typeof g.attributes == "object" && (this.ops[p - 1].attributes = g.attributes), this;
          if (typeof g.retain == "number" && typeof b.retain == "number")
            return this.ops[p - 1] = { retain: b.retain + g.retain }, typeof g.attributes == "object" && (this.ops[p - 1].attributes = g.attributes), this;
        }
      }
      return p === this.ops.length ? this.ops.push(g) : this.ops.splice(p, 0, g), this;
    }
    chop() {
      const g = this.ops[this.ops.length - 1];
      return g && typeof g.retain == "number" && !g.attributes && this.ops.pop(), this;
    }
    filter(g) {
      return this.ops.filter(g);
    }
    forEach(g) {
      this.ops.forEach(g);
    }
    map(g) {
      return this.ops.map(g);
    }
    partition(g) {
      const p = [], b = [];
      return this.forEach((v) => {
        (g(v) ? p : b).push(v);
      }), [p, b];
    }
    reduce(g, p) {
      return this.ops.reduce(g, p);
    }
    changeLength() {
      return this.reduce((g, p) => p.insert ? g + l.default.length(p) : p.delete ? g - p.delete : g, 0);
    }
    length() {
      return this.reduce((g, p) => g + l.default.length(p), 0);
    }
    slice(g = 0, p = 1 / 0) {
      const b = [], v = new a.default(this.ops);
      let y = 0;
      for (; y < p && v.hasNext(); ) {
        let E;
        y < g ? E = v.next(g - y) : (E = v.next(p - y), b.push(E)), y += l.default.length(E);
      }
      return new d(b);
    }
    compose(g) {
      const p = new a.default(this.ops), b = new a.default(g.ops), v = [], y = b.peek();
      if (y != null && typeof y.retain == "number" && y.attributes == null) {
        let w = y.retain;
        for (; p.peekType() === "insert" && p.peekLength() <= w; )
          w -= p.peekLength(), v.push(p.next());
        y.retain - w > 0 && b.next(y.retain - w);
      }
      const E = new d(v);
      for (; p.hasNext() || b.hasNext(); )
        if (b.peekType() === "insert")
          E.push(b.next());
        else if (p.peekType() === "delete")
          E.push(p.next());
        else {
          const w = Math.min(p.peekLength(), b.peekLength()), T = p.next(w), _ = b.next(w);
          if (_.retain) {
            const L = {};
            if (typeof T.retain == "number")
              L.retain = typeof _.retain == "number" ? w : _.retain;
            else if (typeof _.retain == "number")
              T.retain == null ? L.insert = T.insert : L.retain = T.retain;
            else {
              const k = T.retain == null ? "insert" : "retain", [U, Bt, Kt] = h(T[k], _.retain), re = d.getHandler(U);
              L[k] = {
                [U]: re.compose(Bt, Kt, k === "retain")
              };
            }
            const I = i.default.compose(T.attributes, _.attributes, typeof T.retain == "number");
            if (I && (L.attributes = I), E.push(L), !b.hasNext() && s(E.ops[E.ops.length - 1], L)) {
              const k = new d(p.rest());
              return E.concat(k).chop();
            }
          } else typeof _.delete == "number" && (typeof T.retain == "number" || typeof T.retain == "object" && T.retain !== null) && E.push(_);
        }
      return E.chop();
    }
    concat(g) {
      const p = new d(this.ops.slice());
      return g.ops.length > 0 && (p.push(g.ops[0]), p.ops = p.ops.concat(g.ops.slice(1))), p;
    }
    diff(g, p) {
      if (this.ops === g.ops)
        return new d();
      const b = [this, g].map((T) => T.map((_) => {
        if (_.insert != null)
          return typeof _.insert == "string" ? _.insert : c;
        const L = T === g ? "on" : "with";
        throw new Error("diff() called " + L + " non-document");
      }).join("")), v = new d(), y = e(b[0], b[1], p, !0), E = new a.default(this.ops), w = new a.default(g.ops);
      return y.forEach((T) => {
        let _ = T[1].length;
        for (; _ > 0; ) {
          let L = 0;
          switch (T[0]) {
            case e.INSERT:
              L = Math.min(w.peekLength(), _), v.push(w.next(L));
              break;
            case e.DELETE:
              L = Math.min(_, E.peekLength()), E.next(L), v.delete(L);
              break;
            case e.EQUAL:
              L = Math.min(E.peekLength(), w.peekLength(), _);
              const I = E.next(L), k = w.next(L);
              s(I.insert, k.insert) ? v.retain(L, i.default.diff(I.attributes, k.attributes)) : v.push(k).delete(L);
              break;
          }
          _ -= L;
        }
      }), v.chop();
    }
    eachLine(g, p = `
`) {
      const b = new a.default(this.ops);
      let v = new d(), y = 0;
      for (; b.hasNext(); ) {
        if (b.peekType() !== "insert")
          return;
        const E = b.peek(), w = l.default.length(E) - b.peekLength(), T = typeof E.insert == "string" ? E.insert.indexOf(p, w) - w : -1;
        if (T < 0)
          v.push(b.next());
        else if (T > 0)
          v.push(b.next(T));
        else {
          if (g(v, b.next(1).attributes || {}, y) === !1)
            return;
          y += 1, v = new d();
        }
      }
      v.length() > 0 && g(v, {}, y);
    }
    invert(g) {
      const p = new d();
      return this.reduce((b, v) => {
        if (v.insert)
          p.delete(l.default.length(v));
        else {
          if (typeof v.retain == "number" && v.attributes == null)
            return p.retain(v.retain), b + v.retain;
          if (v.delete || typeof v.retain == "number") {
            const y = v.delete || v.retain;
            return g.slice(b, b + y).forEach((w) => {
              v.delete ? p.push(w) : v.retain && v.attributes && p.retain(l.default.length(w), i.default.invert(v.attributes, w.attributes));
            }), b + y;
          } else if (typeof v.retain == "object" && v.retain !== null) {
            const y = g.slice(b, b + 1), E = new a.default(y.ops).next(), [w, T, _] = h(v.retain, E.insert), L = d.getHandler(w);
            return p.retain({ [w]: L.invert(T, _) }, i.default.invert(v.attributes, E.attributes)), b + 1;
          }
        }
        return b;
      }, 0), p.chop();
    }
    transform(g, p = !1) {
      if (p = !!p, typeof g == "number")
        return this.transformPosition(g, p);
      const b = g, v = new a.default(this.ops), y = new a.default(b.ops), E = new d();
      for (; v.hasNext() || y.hasNext(); )
        if (v.peekType() === "insert" && (p || y.peekType() !== "insert"))
          E.retain(l.default.length(v.next()));
        else if (y.peekType() === "insert")
          E.push(y.next());
        else {
          const w = Math.min(v.peekLength(), y.peekLength()), T = v.next(w), _ = y.next(w);
          if (T.delete)
            continue;
          if (_.delete)
            E.push(_);
          else {
            const L = T.retain, I = _.retain;
            let k = typeof I == "object" && I !== null ? I : w;
            if (typeof L == "object" && L !== null && typeof I == "object" && I !== null) {
              const U = Object.keys(L)[0];
              if (U === Object.keys(I)[0]) {
                const Bt = d.getHandler(U);
                Bt && (k = {
                  [U]: Bt.transform(L[U], I[U], p)
                });
              }
            }
            E.retain(k, i.default.transform(T.attributes, _.attributes, p));
          }
        }
      return E.chop();
    }
    transformPosition(g, p = !1) {
      p = !!p;
      const b = new a.default(this.ops);
      let v = 0;
      for (; b.hasNext() && v <= g; ) {
        const y = b.peekLength(), E = b.peekType();
        if (b.next(), E === "delete") {
          g -= Math.min(y, g - v);
          continue;
        } else E === "insert" && (v < g || !p) && (g += y);
        v += y;
      }
      return g;
    }
  }
  d.Op = l.default, d.OpIterator = a.default, d.AttributeMap = i.default, d.handlers = {}, t.default = d, n.exports = d, n.exports.default = d;
})(ri, ri.exports);
var ht = ri.exports;
const O = /* @__PURE__ */ xo(ht);
class wt extends it {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
wt.blotName = "break";
wt.tagName = "BR";
let At = class extends wr {
};
function kr(n) {
  return n.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
const _t = class _t extends Si {
  static compare(t, e) {
    const r = _t.order.indexOf(t), s = _t.order.indexOf(e);
    return r >= 0 || s >= 0 ? r - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, r, s) {
    if (_t.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, q.BLOT)) {
      const i = this.isolate(t, e);
      s && i.wrap(r, s);
    } else
      super.formatAt(t, e, r, s);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof _t && _t.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
};
x(_t, "allowedChildren", [_t, wt, it, At]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
x(_t, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]);
let It = _t;
const wl = 1;
class W extends xn {
  constructor() {
    super(...arguments);
    x(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = Io(this)), this.cache.delta;
  }
  deleteAt(e, r) {
    super.deleteAt(e, r), this.cache = {};
  }
  formatAt(e, r, s, i) {
    r <= 0 || (this.scroll.query(s, q.BLOCK) ? e + r === this.length() && this.format(s, i) : super.formatAt(e, Math.min(r, this.length() - e - 1), s, i), this.cache = {});
  }
  insertAt(e, r, s) {
    if (s != null) {
      super.insertAt(e, r, s), this.cache = {};
      return;
    }
    if (r.length === 0) return;
    const i = r.split(`
`), l = i.shift();
    l.length > 0 && (e < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e, this.length() - 1), l) : this.children.tail.insertAt(this.children.tail.length(), l), this.cache = {});
    let a = this;
    i.reduce((c, h) => (a = a.split(c, !0), a.insertAt(0, h), h.length), e + l.length);
  }
  insertBefore(e, r) {
    const {
      head: s
    } = this.children;
    super.insertBefore(e, r), s instanceof wt && s.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + wl), this.cache.length;
  }
  moveChildren(e, r) {
    super.moveChildren(e, r), this.cache = {};
  }
  optimize(e) {
    super.optimize(e), this.cache = {};
  }
  path(e) {
    return super.path(e, !0);
  }
  removeChild(e) {
    super.removeChild(e), this.cache = {};
  }
  split(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (r && (e === 0 || e >= this.length() - wl)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const s = super.split(e, r);
    return this.cache = {}, s;
  }
}
W.blotName = "block";
W.tagName = "P";
W.defaultChild = wt;
W.allowedChildren = [wt, It, it, At];
class ut extends it {
  attach() {
    super.attach(), this.attributes = new Or(this.domNode);
  }
  delta() {
    return new O().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const r = this.scroll.query(t, q.BLOCK_ATTRIBUTE);
    r != null && this.attributes.attribute(r, e);
  }
  formatAt(t, e, r, s) {
    this.format(r, s);
  }
  insertAt(t, e, r) {
    if (r != null) {
      super.insertAt(t, e, r);
      return;
    }
    const s = e.split(`
`), i = s.pop(), l = s.map((c) => {
      const h = this.scroll.create(W.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    l.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
ut.scope = q.BLOCK_BLOT;
function Io(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.descendants(Q).reduce((e, r) => r.length() === 0 ? e : e.insert(r.value(), at(r, {}, t)), new O()).insert(`
`, at(n));
}
function at(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return n == null || ("formats" in n && typeof n.formats == "function" && (t = {
    ...t,
    ...n.formats()
  }, e && delete t["code-token"]), n.parent == null || n.parent.statics.blotName === "scroll" || n.parent.statics.scope !== n.statics.scope) ? t : at(n.parent, t, e);
}
const ot = class ot extends it {
  // Zero width no break space
  static value() {
  }
  constructor(t, e, r) {
    super(t, e), this.selection = r, this.textNode = document.createTextNode(ot.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t, e) {
    if (this.savedLength !== 0) {
      super.format(t, e);
      return;
    }
    let r = this, s = 0;
    for (; r != null && r.statics.scope !== q.BLOCK_BLOT; )
      s += r.offset(r.parent), r = r.parent;
    r != null && (this.savedLength = ot.CONTENTS.length, r.optimize(), r.formatAt(s, ot.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const t = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e = this.prev instanceof At ? this.prev : null, r = e ? e.length() : 0, s = this.next instanceof At ? this.next : null, i = s ? s.text : "", {
      textNode: l
    } = this, a = l.data.split(ot.CONTENTS).join("");
    l.data = ot.CONTENTS;
    let c;
    if (e)
      c = e, (a || s) && (e.insertAt(e.length(), a + i), s && s.remove());
    else if (s)
      c = s, s.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      c = this.scroll.create(h), this.parent.insertBefore(c, this);
    }
    if (this.remove(), t) {
      const h = (g, p) => e && g === e.domNode ? p : g === l ? r + p - 1 : s && g === s.domNode ? r + a.length + p : null, d = h(t.start.node, t.start.offset), m = h(t.end.node, t.end.offset);
      if (d !== null && m !== null)
        return {
          startNode: c.domNode,
          startOffset: d,
          endNode: c.domNode,
          endOffset: m
        };
    }
    return null;
  }
  update(t, e) {
    if (t.some((r) => r.type === "characterData" && r.target === this.textNode)) {
      const r = this.restore();
      r && (e.range = r);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t) {
    super.optimize(t);
    let {
      parent: e
    } = this;
    for (; e; ) {
      if (e.domNode.tagName === "A") {
        this.savedLength = ot.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
};
x(ot, "blotName", "cursor"), x(ot, "className", "ql-cursor"), x(ot, "tagName", "span"), x(ot, "CONTENTS", "\uFEFF");
let ze = ot;
var Ro = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (e = !1));
  function s(c, h, d) {
    this.fn = c, this.context = h, this.once = d || !1;
  }
  function i(c, h, d, m, g) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var p = new s(d, m || c, g), b = e ? e + h : h;
    return c._events[b] ? c._events[b].fn ? c._events[b] = [c._events[b], p] : c._events[b].push(p) : (c._events[b] = p, c._eventsCount++), c;
  }
  function l(c, h) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[h];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], d, m;
    if (this._eventsCount === 0) return h;
    for (m in d = this._events)
      t.call(d, m) && h.push(e ? m.slice(1) : m);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(d)) : h;
  }, a.prototype.listeners = function(h) {
    var d = e ? e + h : h, m = this._events[d];
    if (!m) return [];
    if (m.fn) return [m.fn];
    for (var g = 0, p = m.length, b = new Array(p); g < p; g++)
      b[g] = m[g].fn;
    return b;
  }, a.prototype.listenerCount = function(h) {
    var d = e ? e + h : h, m = this._events[d];
    return m ? m.fn ? 1 : m.length : 0;
  }, a.prototype.emit = function(h, d, m, g, p, b) {
    var v = e ? e + h : h;
    if (!this._events[v]) return !1;
    var y = this._events[v], E = arguments.length, w, T;
    if (y.fn) {
      switch (y.once && this.removeListener(h, y.fn, void 0, !0), E) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, d), !0;
        case 3:
          return y.fn.call(y.context, d, m), !0;
        case 4:
          return y.fn.call(y.context, d, m, g), !0;
        case 5:
          return y.fn.call(y.context, d, m, g, p), !0;
        case 6:
          return y.fn.call(y.context, d, m, g, p, b), !0;
      }
      for (T = 1, w = new Array(E - 1); T < E; T++)
        w[T - 1] = arguments[T];
      y.fn.apply(y.context, w);
    } else {
      var _ = y.length, L;
      for (T = 0; T < _; T++)
        switch (y[T].once && this.removeListener(h, y[T].fn, void 0, !0), E) {
          case 1:
            y[T].fn.call(y[T].context);
            break;
          case 2:
            y[T].fn.call(y[T].context, d);
            break;
          case 3:
            y[T].fn.call(y[T].context, d, m);
            break;
          case 4:
            y[T].fn.call(y[T].context, d, m, g);
            break;
          default:
            if (!w) for (L = 1, w = new Array(E - 1); L < E; L++)
              w[L - 1] = arguments[L];
            y[T].fn.apply(y[T].context, w);
        }
    }
    return !0;
  }, a.prototype.on = function(h, d, m) {
    return i(this, h, d, m, !1);
  }, a.prototype.once = function(h, d, m) {
    return i(this, h, d, m, !0);
  }, a.prototype.removeListener = function(h, d, m, g) {
    var p = e ? e + h : h;
    if (!this._events[p]) return this;
    if (!d)
      return l(this, p), this;
    var b = this._events[p];
    if (b.fn)
      b.fn === d && (!g || b.once) && (!m || b.context === m) && l(this, p);
    else {
      for (var v = 0, y = [], E = b.length; v < E; v++)
        (b[v].fn !== d || g && !b[v].once || m && b[v].context !== m) && y.push(b[v]);
      y.length ? this._events[p] = y.length === 1 ? y[0] : y : l(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var d;
    return h ? (d = e ? e + h : h, this._events[d] && l(this, d)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, n.exports = a;
})(Ro);
var sd = Ro.exports;
const id = /* @__PURE__ */ xo(sd), li = /* @__PURE__ */ new WeakMap(), oi = ["error", "warn", "log", "info"];
let ai = "warn";
function ko(n) {
  if (ai && oi.indexOf(n) <= oi.indexOf(ai)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      e[r - 1] = arguments[r];
    console[n](...e);
  }
}
function Gt(n) {
  return oi.reduce((t, e) => (t[e] = ko.bind(console, e, n), t), {});
}
Gt.level = (n) => {
  ai = n;
};
ko.level = Gt.level;
const Ms = Gt("quill:events"), ld = ["selectionchange", "mousedown", "mouseup", "click"];
ld.forEach((n) => {
  document.addEventListener(n, function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = li.get(s);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class S extends id {
  constructor() {
    super(), this.domListeners = {}, this.on("error", Ms.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return Ms.log.call(Ms, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      r[s - 1] = arguments[s];
    (this.domListeners[t.type] || []).forEach((i) => {
      let {
        node: l,
        handler: a
      } = i;
      (t.target === l || l.contains(t.target)) && a(t, ...r);
    });
  }
  listenDOM(t, e, r) {
    this.domListeners[t] || (this.domListeners[t] = []), this.domListeners[t].push({
      node: e,
      handler: r
    });
  }
}
x(S, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), x(S, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const $s = Gt("quill:selection");
class pe {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class od {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new pe(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, S.sources.USER), 1);
    }), this.emitter.on(S.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const r = this.getNativeRange();
      r != null && r.start.node !== this.cursor.textNode && this.emitter.once(S.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(r.start.node) && this.root.contains(r.end.node) && this.setNativeRange(r.start.node, r.start.offset, r.end.node, r.end.offset);
          const l = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(l ? S.sources.SILENT : s);
        } catch {
        }
      });
    }), this.emitter.on(S.events.SCROLL_OPTIMIZE, (r, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: l,
          endNode: a,
          endOffset: c
        } = s.range;
        this.setNativeRange(i, l, a, c), this.update(S.sources.SILENT);
      }
    }), this.update(S.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(S.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(S.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const t = this.cursor.restore();
        if (!t) return;
        setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(S.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    const r = this.getNativeRange();
    if (!(r == null || !r.native.collapsed || this.scroll.query(t, q.BLOCK))) {
      if (r.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(r.start.node, !1);
        if (s == null) return;
        if (s instanceof Q) {
          const i = s.split(r.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, r.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r = this.scroll.length();
    t = Math.min(t, r - 1), e = Math.min(t + e, r - 1) - t;
    let s, [i, l] = this.scroll.leaf(t);
    if (i == null) return null;
    if (e > 0 && l === i.length()) {
      const [d] = this.scroll.leaf(t + 1);
      if (d) {
        const [m] = this.scroll.line(t), [g] = this.scroll.line(t + 1);
        m === g && (i = d, l = 0);
      }
    }
    [s, l] = i.position(l, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(s, l), [i, l] = this.scroll.leaf(t + e), i == null ? null : ([s, l] = i.position(l, !0), a.setEnd(s, l), a.getBoundingClientRect());
    let c = "left", h;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      l < s.data.length ? (a.setStart(s, l), a.setEnd(s, l + 1)) : (a.setStart(s, l - 1), a.setEnd(s, l), c = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element)) return null;
      h = i.domNode.getBoundingClientRect(), l > 0 && (c = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[c],
      right: h[c],
      top: h.top,
      width: 0
    };
  }
  getNativeRange() {
    const t = document.getSelection();
    if (t == null || t.rangeCount <= 0) return null;
    const e = t.getRangeAt(0);
    if (e == null) return null;
    const r = this.normalizeNative(e);
    return $s.info("getNativeRange", r), r;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ds(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const r = e.map((l) => {
      const [a, c] = l, h = this.scroll.find(a, !0), d = h.offset(this.scroll);
      return c === 0 ? d : h instanceof Q ? d + h.index(a, c) : d + h.length();
    }), s = Math.min(Math.max(...r), this.scroll.length() - 1), i = Math.min(s, ...r);
    return new pe(i, s - i);
  }
  normalizeNative(t) {
    if (!Ds(this.root, t.startContainer) || !t.collapsed && !Ds(this.root, t.endContainer))
      return null;
    const e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    return [e.start, e.end].forEach((r) => {
      let {
        node: s,
        offset: i
      } = r;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      r.node = s, r.offset = i;
    }), e;
  }
  rangeToNative(t) {
    const e = this.scroll.length(), r = (s, i) => {
      s = Math.min(e - 1, s);
      const [l, a] = this.scroll.leaf(s);
      return l ? l.position(a, i) : [null, -1];
    };
    return [...r(t.index, !1), ...r(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if ($s.info("setNativeRange", t, e, r, s), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
    r.parentNode == null))
      return;
    const l = document.getSelection();
    if (l != null)
      if (t != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || t !== a.startContainer || e !== a.startOffset || r !== a.endContainer || s !== a.endOffset) {
          t instanceof Element && t.tagName === "BR" && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), r instanceof Element && r.tagName === "BR" && (s = Array.from(r.parentNode.childNodes).indexOf(r), r = r.parentNode);
          const c = document.createRange();
          c.setStart(t, e), c.setEnd(r, s), l.removeAllRanges(), l.addRange(c);
        }
      } else
        l.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S.sources.API;
    if (typeof e == "string" && (r = e, e = !1), $s.info("setRange", t), t != null) {
      const s = this.rangeToNative(t);
      this.setNativeRange(...s, e);
    } else
      this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.sources.USER;
    const e = this.lastRange, [r, s] = this.getRange();
    if (this.lastRange = r, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !Li(e, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const l = this.cursor.restore();
        l && this.setNativeRange(l.startNode, l.startOffset, l.endNode, l.endOffset);
      }
      const i = [S.events.SELECTION_CHANGE, Pe(this.lastRange), Pe(e), t];
      this.emitter.emit(S.events.EDITOR_CHANGE, ...i), t !== S.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function Ds(n, t) {
  try {
    t.parentNode;
  } catch {
    return !1;
  }
  return n.contains(t);
}
const ad = /^[ -~]*$/;
class cd {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const r = Tl(t), s = new O();
    return hd(r.ops.slice()).reduce((l, a) => {
      const c = ht.Op.length(a);
      let h = a.attributes || {}, d = !1, m = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const b = a.insert;
          m = !b.endsWith(`
`) && (e <= l || !!this.scroll.descendant(ut, l)[0]), this.scroll.insertAt(l, b);
          const [v, y] = this.scroll.line(l);
          let E = Jt({}, at(v));
          if (v instanceof W) {
            const [w] = v.descendant(Q, y);
            w && (E = Jt(E, at(w)));
          }
          h = ht.AttributeMap.diff(E, h) || {};
        } else if (typeof a.insert == "object") {
          const b = Object.keys(a.insert)[0];
          if (b == null) return l;
          const v = this.scroll.query(b, q.INLINE) != null;
          if (v)
            (e <= l || this.scroll.descendant(ut, l)[0]) && (m = !0);
          else if (l > 0) {
            const [y, E] = this.scroll.descendant(Q, l - 1);
            y instanceof At ? y.value()[E] !== `
` && (d = !0) : y instanceof it && y.statics.scope === q.INLINE_BLOT && (d = !0);
          }
          if (this.scroll.insertAt(l, b, a.insert[b]), v) {
            const [y] = this.scroll.descendant(Q, l);
            if (y) {
              const E = Jt({}, at(y));
              h = ht.AttributeMap.diff(E, h) || {};
            }
          }
        }
        e += c;
      } else if (s.push(a), a.retain !== null && typeof a.retain == "object") {
        const b = Object.keys(a.retain)[0];
        if (b == null) return l;
        this.scroll.updateEmbedAt(l, b, a.retain[b]);
      }
      Object.keys(h).forEach((b) => {
        this.scroll.formatAt(l, c, b, h[b]);
      });
      const g = d ? 1 : 0, p = m ? 1 : 0;
      return e += g + p, s.retain(g), s.delete(p), l + c + g + p;
    }, 0), s.reduce((l, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(l, a.delete), l) : l + ht.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new O().retain(t).delete(e));
  }
  formatLine(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((l) => {
        l.format(i, r[i]);
      });
    }), this.scroll.optimize();
    const s = new O().retain(t).retain(e, Pe(r));
    return this.update(s);
  }
  formatText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r).forEach((i) => {
      this.scroll.formatAt(t, e, i, r[i]);
    });
    const s = new O().retain(t).retain(e, Pe(r));
    return this.update(s);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new O());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = [], s = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof W ? r.push(c) : c instanceof Q && s.push(c);
    }) : (r = this.scroll.lines(t, e), s = this.scroll.descendants(Q, t, e));
    const [i, l] = [r, s].map((a) => {
      const c = a.shift();
      if (c == null) return {};
      let h = at(c);
      for (; Object.keys(h).length > 0; ) {
        const d = a.shift();
        if (d == null) return h;
        h = ud(at(d), h);
      }
      return h;
    });
    return {
      ...i,
      ...l
    };
  }
  getHTML(t, e) {
    const [r, s] = this.scroll.line(t);
    if (r) {
      const i = r.length();
      return r.length() >= s + e && !(s === 0 && e === i) ? Sn(r, s, e, !0) : Sn(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((r) => typeof r.insert == "string").map((r) => r.insert).join("");
  }
  insertContents(t, e) {
    const r = Tl(e), s = new O().retain(t).concat(r);
    return this.scroll.insertContents(t, r), this.update(s);
  }
  insertEmbed(t, e, r) {
    return this.scroll.insertAt(t, e, r), this.update(new O().retain(t).insert({
      [e]: r
    }));
  }
  insertText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t, e), Object.keys(r).forEach((s) => {
      this.scroll.formatAt(t, e.length, s, r[s]);
    }), this.update(new O().retain(t).insert(e, Pe(r)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return !0;
    if (this.scroll.children.length > 1) return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== W.blotName) return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof wt;
  }
  removeFormat(t, e) {
    const r = this.getText(t, e), [s, i] = this.scroll.line(t + e);
    let l = 0, a = new O();
    s != null && (l = s.length() - i, a = s.delta().slice(i, i + l - 1).insert(`
`));
    const h = this.getContents(t, e + l).diff(new O().insert(r).concat(a)), d = new O().retain(t).concat(h);
    return this.applyDelta(d);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(ad) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), l = at(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(ze.CONTENTS, ""), h = new O().insert(c), d = new O().insert(i.value()), m = r && {
        oldRange: xl(r.oldRange, -a),
        newRange: xl(r.newRange, -a)
      };
      t = new O().retain(a).concat(h.diff(d, m)).reduce((p, b) => b.insert ? p.insert(b.insert, l) : p.push(b), new O()), this.delta = s.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !Li(s.compose(t), this.delta)) && (t = s.diff(this.delta, r));
    return t;
  }
}
function $e(n, t, e) {
  if (n.length === 0) {
    const [p] = js(e.pop());
    return t <= 0 ? `</li></${p}>` : `</li></${p}>${$e([], t - 1, e)}`;
  }
  const [{
    child: r,
    offset: s,
    length: i,
    indent: l,
    type: a
  }, ...c] = n, [h, d] = js(a);
  if (l > t)
    return e.push(a), l === t + 1 ? `<${h}><li${d}>${Sn(r, s, i)}${$e(c, l, e)}` : `<${h}><li>${$e(n, t + 1, e)}`;
  const m = e[e.length - 1];
  if (l === t && a === m)
    return `</li><li${d}>${Sn(r, s, i)}${$e(c, l, e)}`;
  const [g] = js(e.pop());
  return `</li></${g}>${$e(n, t - 1, e)}`;
}
function Sn(n, t, e) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in n && typeof n.html == "function")
    return n.html(t, e);
  if (n instanceof At)
    return kr(n.value().slice(t, t + e));
  if (n instanceof Et) {
    if (n.statics.blotName === "list-container") {
      const h = [];
      return n.children.forEachAt(t, e, (d, m, g) => {
        const p = "formats" in d && typeof d.formats == "function" ? d.formats() : {};
        h.push({
          child: d,
          offset: m,
          length: g,
          indent: p.indent || 0,
          type: p.list
        });
      }), $e(h, -1, []);
    }
    const s = [];
    if (n.children.forEachAt(t, e, (h, d, m) => {
      s.push(Sn(h, d, m));
    }), r || n.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: l
    } = n.domNode, [a, c] = i.split(`>${l}<`);
    return a === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${c}` : `${a}>${s.join("")}<${c}`;
  }
  return n.domNode instanceof Element ? n.domNode.outerHTML : "";
}
function ud(n, t) {
  return Object.keys(t).reduce((e, r) => {
    if (n[r] == null) return e;
    const s = t[r];
    return s === n[r] ? e[r] = s : Array.isArray(s) ? s.indexOf(n[r]) < 0 ? e[r] = s.concat([n[r]]) : e[r] = s : e[r] = [s, n[r]], e;
  }, {});
}
function js(n) {
  const t = n === "ordered" ? "ol" : "ul";
  switch (n) {
    case "checked":
      return [t, ' data-list="checked"'];
    case "unchecked":
      return [t, ' data-list="unchecked"'];
    default:
      return [t, ""];
  }
}
function Tl(n) {
  return n.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const r = e.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t.insert(r, e.attributes);
    }
    return t.push(e);
  }, new O());
}
function xl(n, t) {
  let {
    index: e,
    length: r
  } = n;
  return new pe(e + t, r);
}
function hd(n) {
  const t = [];
  return n.forEach((e) => {
    typeof e.insert == "string" ? e.insert.split(`
`).forEach((s, i) => {
      i && t.push({
        insert: `
`,
        attributes: e.attributes
      }), s && t.push({
        insert: s,
        attributes: e.attributes
      });
    }) : t.push(e);
  }), t;
}
var zs;
let kt = (zs = class {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}, x(zs, "DEFAULTS", {}), zs);
const fr = "\uFEFF";
let Ri = class extends it {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r) => {
      this.contentNode.appendChild(r);
    }), this.leftGuard = document.createTextNode(fr), this.rightGuard = document.createTextNode(fr), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, r;
    const s = t.data.split(fr).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof At) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), e = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this), e = {
          startNode: r,
          startOffset: s.length
        };
    else t === this.rightGuard && (this.next instanceof At ? (this.next.insertAt(0, s), e = {
      startNode: this.next.domNode,
      startOffset: s.length
    }) : (r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this.next), e = {
      startNode: r,
      startOffset: s.length
    }));
    return t.data = fr, e;
  }
  update(t, e) {
    t.forEach((r) => {
      if (r.type === "characterData" && (r.target === this.leftGuard || r.target === this.rightGuard)) {
        const s = this.restore(r.target);
        s && (e.range = s);
      }
    });
  }
};
class fd {
  constructor(t, e) {
    x(this, "isComposing", !1);
    this.scroll = t, this.emitter = e, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t) => {
      this.isComposing || this.handleCompositionStart(t);
    }), this.scroll.domNode.addEventListener("compositionend", (t) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    e && !(e instanceof Ri) && (this.emitter.emit(S.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(S.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(S.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(S.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const vn = class vn {
  constructor(t, e) {
    x(this, "modules", {});
    this.quill = t, this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      this.modules[t] == null && this.addModule(t);
    });
  }
  addModule(t) {
    const e = this.quill.constructor.import(`modules/${t}`);
    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
  }
};
x(vn, "DEFAULTS", {
  modules: {}
}), x(vn, "themes", {
  default: vn
});
let Ge = vn;
const dd = (n) => n.parentElement || n.getRootNode().host || null, gd = (n) => {
  const t = n.getBoundingClientRect(), e = "offsetWidth" in n && Math.abs(t.width) / n.offsetWidth || 1, r = "offsetHeight" in n && Math.abs(t.height) / n.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + n.clientWidth * e,
    bottom: t.top + n.clientHeight * r,
    left: t.left
  };
}, dr = (n) => {
  const t = parseInt(n, 10);
  return Number.isNaN(t) ? 0 : t;
}, Ll = (n, t, e, r, s, i) => n < e && t > r ? 0 : n < e ? -(e - n + s) : t > r ? t - n > r - e ? n + s - e : t - r + i : 0, pd = (n, t) => {
  var i, l, a;
  const e = n.ownerDocument;
  let r = t, s = n;
  for (; s; ) {
    const c = s === e.body, h = c ? {
      top: 0,
      right: ((i = window.visualViewport) == null ? void 0 : i.width) ?? e.documentElement.clientWidth,
      bottom: ((l = window.visualViewport) == null ? void 0 : l.height) ?? e.documentElement.clientHeight,
      left: 0
    } : gd(s), d = getComputedStyle(s), m = Ll(r.left, r.right, h.left, h.right, dr(d.scrollPaddingLeft), dr(d.scrollPaddingRight)), g = Ll(r.top, r.bottom, h.top, h.bottom, dr(d.scrollPaddingTop), dr(d.scrollPaddingBottom));
    if (m || g)
      if (c)
        (a = e.defaultView) == null || a.scrollBy(m, g);
      else {
        const {
          scrollLeft: p,
          scrollTop: b
        } = s;
        g && (s.scrollTop += g), m && (s.scrollLeft += m);
        const v = s.scrollLeft - p, y = s.scrollTop - b;
        r = {
          left: r.left - v,
          top: r.top - y,
          right: r.right - v,
          bottom: r.bottom - y
        };
      }
    s = c || d.position === "fixed" ? null : dd(s);
  }
}, md = 100, bd = ["block", "break", "cursor", "inline", "scroll", "text"], yd = (n, t, e) => {
  const r = new ge();
  return bd.forEach((s) => {
    const i = t.query(s);
    i && r.register(i);
  }), n.forEach((s) => {
    let i = t.query(s);
    i || e.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let l = 0;
    for (; i; )
      if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, l += 1, l > md) {
        e.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), r;
}, Fe = Gt("quill"), gr = new ge();
Et.uiClass = "ql-ui";
const bt = class bt {
  static debug(t) {
    t === !0 && (t = "log"), Gt.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return li.get(t) || gr.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && Fe.error(`Cannot import ${t}. Are you sure it was registered?`), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), r = "attrName" in t ? t.attrName : t.blotName;
      typeof r == "string" ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach((s) => {
        this.register(s, t[s], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], r = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !r && Fe.warn(`Overwriting ${t} with`, e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && gr.register(e), typeof e.register == "function" && e.register(gr);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = vd(t, e), this.container = this.options.container, this.container == null) {
      Fe.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && bt.debug(this.options.debug);
    const r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", li.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new S();
    const s = _i.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new cd(this.scroll), this.selection = new od(this.scroll, this.emitter), this.composition = new fd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(S.events.EDITOR_CHANGE, (l) => {
      l === S.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(S.events.SCROLL_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      mt.call(this, () => this.editor.update(null, a, d), l);
    }), this.emitter.on(S.events.SCROLL_EMBED_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      mt.call(this, () => {
        const m = new O().retain(l.offset(this)).retain({
          [l.statics.blotName]: a
        });
        return this.editor.update(m, [], d);
      }, bt.sources.USER);
    }), r) {
      const l = this.clipboard.convert({
        html: `${r}<p><br></p>`,
        text: `
`
      });
      this.setContents(l);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t == "string") {
      const r = t;
      t = document.createElement("div"), t.classList.add(r);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, r) {
    return [t, e, , r] = Pt(t, e, r), mt.call(this, () => this.editor.deleteText(t, e), r, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    const e = t();
    return this.allowReadOnlyEdits = !1, e;
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S.sources.API;
    return mt.call(this, () => {
      const s = this.getSelection(!0);
      let i = new O();
      if (s == null) return i;
      if (this.scroll.query(t, q.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [t]: e
        });
      else {
        if (s.length === 0)
          return this.selection.format(t, e), i;
        i = this.editor.formatText(s.index, s.length, {
          [t]: e
        });
      }
      return this.setSelection(s, S.sources.SILENT), i;
    }, r);
  }
  formatLine(t, e, r, s, i) {
    let l;
    return [t, e, l, i] = Pt(
      t,
      e,
      // @ts-expect-error
      r,
      s,
      i
    ), mt.call(this, () => this.editor.formatLine(t, e, l), i, t, 0);
  }
  formatText(t, e, r, s, i) {
    let l;
    return [t, e, l, i] = Pt(
      // @ts-expect-error
      t,
      e,
      r,
      s,
      i
    ), mt.call(this, () => this.editor.formatText(t, e, l), i, t, 0);
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = null;
    if (typeof t == "number" ? r = this.selection.getBounds(t, e) : r = this.selection.getBounds(t.index, t.length), !r) return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: r.bottom - s.top,
      height: r.height,
      left: r.left - s.left,
      right: r.right - s.left,
      top: r.top - s.top,
      width: r.width
    };
  }
  getContents() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t;
    return [t, e] = Pt(t, e), this.editor.getContents(t, e);
  }
  getFormat() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t == "number" ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t != "number" ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = Pt(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = Pt(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : bt.sources.API;
    return mt.call(this, () => this.editor.insertEmbed(t, e, r), s, t);
  }
  insertText(t, e, r, s, i) {
    let l;
    return [t, , l, i] = Pt(t, 0, r, s, i), mt.call(this, () => this.editor.insertText(t, e, l), i, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, r) {
    return [t, e, , r] = Pt(t, e, r), mt.call(this, () => this.editor.removeFormat(t, e), r, t);
  }
  scrollRectIntoView(t) {
    pd(this.root, t);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t = this.selection.lastRange, e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.sources.API;
    return mt.call(this, () => {
      t = new O(t);
      const r = this.getLength(), s = this.editor.deleteText(0, r), i = this.editor.insertContents(0, t), l = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(l);
    }, e);
  }
  setSelection(t, e, r) {
    t == null ? this.selection.setRange(null, e || bt.sources.API) : ([t, e, , r] = Pt(t, e, r), this.selection.setRange(new pe(Math.max(0, t), e), r), r !== S.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.sources.API;
    const r = new O().insert(t);
    return this.setContents(r, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.sources.API;
    return mt.call(this, () => (t = new O(t), this.editor.applyDelta(t)), e, !0);
  }
};
x(bt, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: gr,
  theme: "default"
}), x(bt, "events", S.events), x(bt, "sources", S.sources), x(bt, "version", "2.0.2"), x(bt, "imports", {
  delta: O,
  parchment: zf,
  "core/module": kt,
  "core/theme": Ge
});
let N = bt;
function Sl(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function Ps(n) {
  return Object.entries(n ?? {}).reduce((t, e) => {
    let [r, s] = e;
    return {
      ...t,
      [r]: s === !0 ? {} : s
    };
  }, {});
}
function _l(n) {
  return Object.fromEntries(Object.entries(n).filter((t) => t[1] !== void 0));
}
function vd(n, t) {
  const e = Sl(n);
  if (!e)
    throw new Error("Invalid Quill container");
  const s = !t.theme || t.theme === N.DEFAULTS.theme ? Ge : N.import(`themes/${t.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${t.theme}. Did you register it?`);
  const {
    modules: i,
    ...l
  } = N.DEFAULTS, {
    modules: a,
    ...c
  } = s.DEFAULTS;
  let h = Ps(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const d = Jt({}, Ps(i), Ps(a), h), m = {
    ...l,
    ..._l(c),
    ..._l(t)
  };
  let g = t.registry;
  return g ? t.formats && Fe.warn('Ignoring "formats" option because "registry" is specified') : g = t.formats ? yd(t.formats, m.registry, Fe) : m.registry, {
    ...m,
    registry: g,
    container: e,
    theme: s,
    modules: Object.entries(d).reduce((p, b) => {
      let [v, y] = b;
      if (!y) return p;
      const E = N.import(`modules/${v}`);
      return E == null ? (Fe.error(`Cannot load ${v} module. Are you sure you registered it?`), p) : {
        ...p,
        // @ts-expect-error
        [v]: Jt({}, E.DEFAULTS || {}, y)
      };
    }, {}),
    bounds: Sl(m.bounds)
  };
}
function mt(n, t, e, r) {
  if (!this.isEnabled() && t === S.sources.USER && !this.allowReadOnlyEdits)
    return new O();
  let s = e == null ? null : this.getSelection();
  const i = this.editor.delta, l = n();
  if (s != null && (e === !0 && (e = s.index), r == null ? s = Ol(s, l, t) : r !== 0 && (s = Ol(s, e, r, t)), this.setSelection(s, S.sources.SILENT)), l.length() > 0) {
    const a = [S.events.TEXT_CHANGE, l, i, t];
    this.emitter.emit(S.events.EDITOR_CHANGE, ...a), t !== S.sources.SILENT && this.emitter.emit(...a);
  }
  return l;
}
function Pt(n, t, e, r, s) {
  let i = {};
  return typeof n.index == "number" && typeof n.length == "number" ? typeof t != "number" ? (s = r, r = e, e = t, t = n.length, n = n.index) : (t = n.length, n = n.index) : typeof t != "number" && (s = r, r = e, e = t, t = 0), typeof e == "object" ? (i = e, s = r) : typeof e == "string" && (r != null ? i[e] = r : s = e), s = s || S.sources.API, [n, t, i, s];
}
function Ol(n, t, e, r) {
  const s = typeof e == "number" ? e : 0;
  if (n == null) return null;
  let i, l;
  return t && typeof t.transformPosition == "function" ? [i, l] = [n.index, n.index + n.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, r !== S.sources.USER)
  )) : [i, l] = [n.index, n.index + n.length].map((a) => a < t || a === t && r === S.sources.USER ? a : s >= 0 ? a + s : Math.max(t, a + s)), new pe(i, l - i);
}
class ve extends qr {
}
function ql(n) {
  return n instanceof W || n instanceof ut;
}
function Cl(n) {
  return typeof n.updateContent == "function";
}
class De extends _i {
  constructor(t, e, r) {
    let {
      emitter: s
    } = r;
    super(t, e), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const t = this.batch;
    this.batch = !1, this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(S.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(S.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(S.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [r, s] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && r !== i && s > 0) {
      if (r instanceof ut || i instanceof ut) {
        this.optimize();
        return;
      }
      const l = i.children.head instanceof wt ? null : i.children.head;
      r.moveChildren(i, l), r.remove();
    }
    this.optimize();
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.optimize();
  }
  insertAt(t, e, r) {
    if (t >= this.length())
      if (r == null || this.scroll.query(e, q.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), r == null && e.endsWith(`
`) ? s.insertAt(0, e.slice(0, -1), r) : s.insertAt(0, e, r);
      } else {
        const s = this.scroll.create(e, r);
        this.appendChild(s);
      }
    else
      super.insertAt(t, e, r);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === q.INLINE_BLOT) {
      const r = this.scroll.create(this.statics.defaultChild.blotName);
      r.appendChild(t), super.insertBefore(r, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const r = this.deltaToRenderBlocks(e.concat(new O().insert(`
`))), s = r.pop();
    if (s == null) return;
    this.batchStart();
    const i = r.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(ut, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new O().insert({
        [i.key]: i.value
      });
      Us(this, t, h);
      const d = i.type === "block" ? 1 : 0, m = t + h.length() + d;
      c && this.insertAt(m - 1, `
`);
      const g = at(this.line(t)[0]), p = ht.AttributeMap.diff(g, i.attributes) || {};
      Object.keys(p).forEach((b) => {
        this.formatAt(m - 1, 1, b, p[b]);
      }), t = m;
    }
    let [l, a] = this.children.find(t);
    if (r.length && (l && (l = l.split(a), a = 0), r.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, l || void 0);
        Us(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, l || void 0), Object.keys(c.attributes).forEach((d) => {
          h.format(d, c.attributes[d]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = l ? l.offset(l.scroll) + a : this.length();
      Us(this, c, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t) {
    const e = this.path(t).pop();
    if (!e)
      return [null, -1];
    const [r, s] = e;
    return r instanceof Q ? [r, s] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(ql, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r = (s, i, l) => {
      let a = [], c = l;
      return s.children.forEachAt(i, l, (h, d, m) => {
        ql(h) ? a.push(h) : h instanceof qr && (a = a.concat(r(h, d, c))), c -= m;
      }), a;
    };
    return r(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(S.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {
  }
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = S.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((r) => {
      let {
        target: s
      } = r;
      const i = this.find(s, !0);
      return i && !Cl(i);
    }), t.length > 0 && this.emitter.emit(S.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(S.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, r) {
    const [s] = this.descendant((i) => i instanceof ut, t);
    s && s.statics.blotName === e && Cl(s) && s.updateContent(r);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let r = new O();
    return t.forEach((s) => {
      const i = s == null ? void 0 : s.insert;
      if (i)
        if (typeof i == "string") {
          const l = i.split(`
`);
          l.slice(0, -1).forEach((c) => {
            r.insert(c, s.attributes), e.push({
              type: "block",
              delta: r,
              attributes: s.attributes ?? {}
            }), r = new O();
          });
          const a = l[l.length - 1];
          a && r.insert(a, s.attributes);
        } else {
          const l = Object.keys(i)[0];
          if (!l) return;
          this.query(l, q.INLINE) ? r.push(s) : (r.length() && e.push({
            type: "block",
            delta: r,
            attributes: {}
          }), r = new O(), e.push({
            type: "blockEmbed",
            key: l,
            value: i[l],
            attributes: s.attributes ?? {}
          }));
        }
    }), r.length() && e.push({
      type: "block",
      delta: r,
      attributes: {}
    }), e;
  }
  createBlock(t, e) {
    let r;
    const s = {};
    Object.entries(t).forEach((a) => {
      let [c, h] = a;
      this.query(c, q.BLOCK & q.BLOT) != null ? r = c : s[c] = h;
    });
    const i = this.create(r || this.statics.defaultChild.blotName, r ? t[r] : void 0);
    this.insertBefore(i, e || void 0);
    const l = i.length();
    return Object.entries(s).forEach((a) => {
      let [c, h] = a;
      i.formatAt(0, l, c, h);
    }), i;
  }
}
x(De, "blotName", "scroll"), x(De, "className", "ql-editor"), x(De, "tagName", "DIV"), x(De, "defaultChild", W), x(De, "allowedChildren", [W, ut, ve]);
function Us(n, t, e) {
  e.reduce((r, s) => {
    const i = ht.Op.length(s);
    let l = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const a = s.insert;
        n.insertAt(r, a);
        const [c] = n.descendant(Q, r), h = at(c);
        l = ht.AttributeMap.diff(h, l) || {};
      } else if (typeof s.insert == "object") {
        const a = Object.keys(s.insert)[0];
        if (a == null) return r;
        if (n.insertAt(r, a, s.insert[a]), n.scroll.query(a, q.INLINE) != null) {
          const [h] = n.descendant(Q, r), d = at(h);
          l = ht.AttributeMap.diff(d, l) || {};
        }
      }
    }
    return Object.keys(l).forEach((a) => {
      n.formatAt(r, i, a, l[a]);
    }), r + i;
  }, t);
}
const ki = {
  scope: q.BLOCK,
  whitelist: ["right", "center", "justify"]
}, Ed = new Ct("align", "align", ki), Bo = new Nt("align", "ql-align", ki), Mo = new ne("align", "text-align", ki);
class $o extends ne {
  value(t) {
    let e = super.value(t);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : e;
  }
}
const Ad = new Nt("color", "ql-color", {
  scope: q.INLINE
}), Bi = new $o("color", "color", {
  scope: q.INLINE
}), Nd = new Nt("background", "ql-bg", {
  scope: q.INLINE
}), Mi = new $o("background", "background-color", {
  scope: q.INLINE
});
class Ee extends ve {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((r) => r.length() <= 1 ? "" : r.domNode.innerText).join(`
`).slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${kr(this.code(t, e))}
</pre>`;
  }
}
class J extends W {
  static register() {
    N.register(Ee);
  }
}
x(J, "TAB", "  ");
class $i extends It {
}
$i.blotName = "code";
$i.tagName = "CODE";
J.blotName = "code-block";
J.className = "ql-code-block";
J.tagName = "DIV";
Ee.blotName = "code-block-container";
Ee.className = "ql-code-block-container";
Ee.tagName = "DIV";
Ee.allowedChildren = [J];
J.allowedChildren = [At, wt, ze];
J.requiredContainer = Ee;
const Di = {
  scope: q.BLOCK,
  whitelist: ["rtl"]
}, Do = new Ct("direction", "dir", Di), jo = new Nt("direction", "ql-direction", Di), Po = new ne("direction", "direction", Di), Uo = {
  scope: q.INLINE,
  whitelist: ["serif", "monospace"]
}, Fo = new Nt("font", "ql-font", Uo);
class wd extends ne {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const Ho = new wd("font", "font-family", Uo), zo = new Nt("size", "ql-size", {
  scope: q.INLINE,
  whitelist: ["small", "large", "huge"]
}), Go = new ne("size", "font-size", {
  scope: q.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), Td = Gt("quill:keyboard"), xd = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class Br extends kt {
  static match(t, e) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r) => !!e[r] !== t[r] && e[r] !== null) ? !1 : e.key === t.key || e.key === t.which;
  }
  constructor(t, e) {
    super(t, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((r) => {
      this.options.bindings[r] && this.addBinding(this.options.bindings[r]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = Sd(t);
    if (s == null) {
      Td.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof e == "function" && (e = {
      handler: e
    }), typeof r == "function" && (r = {
      handler: r
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((l) => {
      const a = {
        ...s,
        key: l,
        ...e,
        ...r
      };
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace")) return;
      const s = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((E) => Br.match(t, E));
      if (s.length === 0) return;
      const i = N.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      const l = this.quill.getSelection();
      if (l == null || !this.quill.hasFocus()) return;
      const [a, c] = this.quill.getLine(l.index), [h, d] = this.quill.getLeaf(l.index), [m, g] = l.length === 0 ? [h, d] : this.quill.getLeaf(l.index + l.length), p = h instanceof wr ? h.value().slice(0, d) : "", b = m instanceof wr ? m.value().slice(g) : "", v = {
        collapsed: l.length === 0,
        // @ts-expect-error Fix me later
        empty: l.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(l),
        line: a,
        offset: c,
        prefix: p,
        suffix: b,
        event: t
      };
      s.some((E) => {
        if (E.collapsed != null && E.collapsed !== v.collapsed || E.empty != null && E.empty !== v.empty || E.offset != null && E.offset !== v.offset)
          return !1;
        if (Array.isArray(E.format)) {
          if (E.format.every((w) => v.format[w] == null))
            return !1;
        } else if (typeof E.format == "object" && !Object.keys(E.format).every((w) => E.format[w] === !0 ? v.format[w] != null : E.format[w] === !1 ? v.format[w] == null : Li(E.format[w], v.format[w])))
          return !1;
        return E.prefix != null && !E.prefix.test(v.prefix) || E.suffix != null && !E.suffix.test(v.suffix) ? !1 : E.handler.call(this, l, v, E) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1) return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let l = new O().retain(t.index - r).delete(r);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), d = this.quill.getFormat(t.index - 1, 1);
        if (s = ht.AttributeMap.diff(h, d) || {}, Object.keys(s).length > 0) {
          const m = new O().retain(t.index + i.length() - 2).retain(1, s);
          l = l.compose(m);
        }
      }
    }
    this.quill.updateContents(l, N.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - r) return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let l = new O().retain(t.index).delete(r);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        s = ht.AttributeMap.diff(c, h) || {}, Object.keys(s).length > 0 && (l = l.retain(a.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(l, N.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    ji({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const r = Object.keys(e.format).reduce((i, l) => (this.quill.scroll.query(l, q.BLOCK) && !Array.isArray(e.format[l]) && (i[l] = e.format[l]), i), {}), s = new O().retain(t.index).delete(t.length).insert(`
`, r);
    this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(t.index + 1, N.sources.SILENT), this.quill.focus();
  }
}
const Ld = {
  bindings: {
    bold: Fs("bold"),
    italic: Fs("italic"),
    underline: Fs("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", N.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", N.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(n, t) {
        t.format.indent != null ? this.quill.format("indent", "-1", N.sources.USER) : t.format.list != null && this.quill.format("list", !1, N.sources.USER);
      }
    },
    "indent code-block": Il(!0),
    "outdent code-block": Il(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(n) {
        this.quill.deleteText(n.index - 1, 1, N.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n, t) {
        if (t.format.table) return !0;
        this.quill.history.cutoff();
        const e = new O().retain(n.index).delete(n.length).insert("	");
        return this.quill.updateContents(e, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index + 1, N.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, N.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(n, t) {
        const e = {
          list: !1
        };
        t.format.indent && (e.indent = !1), this.quill.formatLine(n.index, n.length, e, N.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(n) {
        const [t, e] = this.quill.getLine(n.index), r = {
          // @ts-expect-error Fix me later
          ...t.formats(),
          list: "checked"
        }, s = new O().retain(n.index).insert(`
`, r).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(n.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(n, t) {
        const [e, r] = this.quill.getLine(n.index), s = new O().retain(n.index).insert(`
`, t.format).retain(e.length() - r - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(n.index + 1, N.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(n) {
        const t = this.quill.getModule("table");
        if (t) {
          const [e, r, s, i] = t.getTable(n), l = _d(e, r, s, i);
          if (l == null) return;
          let a = e.offset();
          if (l < 0) {
            const c = new O().retain(a).insert(`
`);
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(n.index + 1, n.length, N.sources.SILENT);
          } else if (l > 0) {
            a += e.length();
            const c = new O().retain(a).insert(`
`);
            this.quill.updateContents(c, N.sources.USER), this.quill.setSelection(a, N.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n, t) {
        const {
          event: e,
          line: r
        } = t, s = r.offset(this.quill.scroll);
        e.shiftKey ? this.quill.setSelection(s - 1, N.sources.USER) : this.quill.setSelection(s + r.length(), N.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(n, t) {
        if (this.quill.scroll.query("list") == null) return !0;
        const {
          length: e
        } = t.prefix, [r, s] = this.quill.getLine(n.index);
        if (s > e) return !0;
        let i;
        switch (t.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(n.index, " ", N.sources.USER), this.quill.history.cutoff();
        const l = new O().retain(n.index - s).delete(e + 1).retain(r.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(l, N.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index - e, N.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n) {
        const [t, e] = this.quill.getLine(n.index);
        let r = 2, s = t;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, r -= 1, r <= 0) {
            const i = new O().retain(n.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, N.sources.USER), this.quill.setSelection(n.index - 1, N.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": pr("ArrowLeft", !1),
    "embed left shift": pr("ArrowLeft", !0),
    "embed right": pr("ArrowRight", !1),
    "embed right shift": pr("ArrowRight", !0),
    "table down": Rl(!1),
    "table up": Rl(!0)
  }
};
Br.DEFAULTS = Ld;
function Il(n) {
  return {
    key: "Tab",
    shiftKey: !n,
    format: {
      "code-block": !0
    },
    handler(t, e) {
      let {
        event: r
      } = e;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (t.length === 0 && !r.shiftKey) {
        this.quill.insertText(t.index, i, N.sources.USER), this.quill.setSelection(t.index + i.length, N.sources.SILENT);
        return;
      }
      const l = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      l.forEach((h, d) => {
        n ? (h.insertAt(0, i), d === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), d === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(N.sources.USER), this.quill.setSelection(a, c, N.sources.SILENT);
    }
  };
}
function pr(n, t) {
  return {
    key: n,
    shiftKey: t,
    altKey: null,
    [n === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r) {
      let {
        index: s
      } = r;
      n === "ArrowRight" && (s += r.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof it ? (n === "ArrowLeft" ? t ? this.quill.setSelection(r.index - 1, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index - 1, N.sources.USER) : t ? this.quill.setSelection(r.index, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index + r.length + 1, N.sources.USER), !1) : !0;
    }
  };
}
function Fs(n) {
  return {
    key: n[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(n, !e.format[n], N.sources.USER);
    }
  };
}
function Rl(n) {
  return {
    key: n ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(t, e) {
      const r = n ? "prev" : "next", s = e.line, i = s.parent[r];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let l = i.children.head, a = s;
          for (; a.prev != null; )
            a = a.prev, l = l.next;
          const c = l.offset(this.quill.scroll) + Math.min(e.offset, l.length() - 1);
          this.quill.setSelection(c, 0, N.sources.USER);
        }
      } else {
        const l = s.table()[r];
        l != null && (n ? this.quill.setSelection(l.offset(this.quill.scroll) + l.length() - 1, 0, N.sources.USER) : this.quill.setSelection(l.offset(this.quill.scroll), 0, N.sources.USER));
      }
      return !1;
    }
  };
}
function Sd(n) {
  if (typeof n == "string" || typeof n == "number")
    n = {
      key: n
    };
  else if (typeof n == "object")
    n = Pe(n);
  else
    return null;
  return n.shortKey && (n[xd] = n.shortKey, delete n.shortKey), n;
}
function ji(n) {
  let {
    quill: t,
    range: e
  } = n;
  const r = t.getLines(e);
  let s = {};
  if (r.length > 1) {
    const i = r[0].formats(), l = r[r.length - 1].formats();
    s = ht.AttributeMap.diff(l, i) || {};
  }
  t.deleteText(e, N.sources.USER), Object.keys(s).length > 0 && t.formatLine(e.index, 1, s, N.sources.USER), t.setSelection(e.index, N.sources.SILENT);
}
function _d(n, t, e, r) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? r === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const Od = /font-weight:\s*normal/, qd = ["P", "OL", "UL"], kl = (n) => n && qd.includes(n.tagName), Cd = (n) => {
  Array.from(n.querySelectorAll("br")).filter((t) => kl(t.previousElementSibling) && kl(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, Id = (n) => {
  Array.from(n.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(Od);
  }).forEach((t) => {
    var r;
    const e = n.createDocumentFragment();
    e.append(...t.childNodes), (r = t.parentNode) == null || r.replaceChild(e, t);
  });
};
function Rd(n) {
  n.querySelector('[id^="docs-internal-guid-"]') && (Id(n), Cd(n));
}
const kd = /\bmso-list:[^;]*ignore/i, Bd = /\bmso-list:[^;]*\bl(\d+)/i, Md = /\bmso-list:[^;]*\blevel(\d+)/i, $d = (n, t) => {
  const e = n.getAttribute("style"), r = e == null ? void 0 : e.match(Bd);
  if (!r)
    return null;
  const s = Number(r[1]), i = e == null ? void 0 : e.match(Md), l = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${l}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: l,
    type: h,
    element: n
  };
}, Dd = (n) => {
  var l, a;
  const t = Array.from(n.querySelectorAll("[style*=mso-list]")), e = [], r = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match(kd) ? e.push(c) : r.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const s = n.documentElement.innerHTML, i = r.map((c) => $d(c, s)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let h = i.shift();
    for (; h; )
      c.push(h), h = i.length && ((l = i[0]) == null ? void 0 : l.element) === h.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === h.id ? i.shift() : null;
    const d = document.createElement("ul");
    c.forEach((p) => {
      const b = document.createElement("li");
      b.setAttribute("data-list", p.type), p.indent > 1 && b.setAttribute("class", `ql-indent-${p.indent - 1}`), b.innerHTML = p.element.innerHTML, d.appendChild(b);
    });
    const m = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: g
    } = m ?? {};
    m && (g == null || g.replaceChild(d, m)), c.slice(1).forEach((p) => {
      let {
        element: b
      } = p;
      g == null || g.removeChild(b);
    });
  }
};
function jd(n) {
  n.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Dd(n);
}
const Pd = [jd, Rd], Ud = (n) => {
  n.documentElement && Pd.forEach((t) => {
    t(n);
  });
}, Fd = Gt("quill:clipboard"), Hd = [[Node.TEXT_NODE, eg], [Node.TEXT_NODE, Ml], ["br", Wd], [Node.ELEMENT_NODE, Ml], [Node.ELEMENT_NODE, Vd], [Node.ELEMENT_NODE, Kd], [Node.ELEMENT_NODE, Jd], ["li", Yd], ["ol, ul", Qd], ["pre", Zd], ["tr", tg], ["b", Hs("bold")], ["i", Hs("italic")], ["strike", Hs("strike")], ["style", Xd]], zd = [Ed, Do].reduce((n, t) => (n[t.keyName] = t, n), {}), Bl = [Mo, Mi, Bi, Po, Ho, Go].reduce((n, t) => (n[t.keyName] = t, n), {});
class Ko extends kt {
  constructor(t, e) {
    super(t, e), this.quill.root.addEventListener("copy", (r) => this.onCaptureCopy(r, !1)), this.quill.root.addEventListener("cut", (r) => this.onCaptureCopy(r, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Hd.concat(this.options.matchers ?? []).forEach((r) => {
      let [s, i] = r;
      this.addMatcher(s, i);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html: e,
      text: r
    } = t, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[J.blotName])
      return new O().insert(r || "", {
        [J.blotName]: s[J.blotName]
      });
    if (!e)
      return new O().insert(r || "", s);
    const i = this.convertHTML(e);
    return Rn(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new O().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    Ud(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const r = e.body, s = /* @__PURE__ */ new WeakMap(), [i, l] = this.prepareMatching(r, s);
    return Pi(this.quill.scroll, r, i, l, s);
  }
  dangerouslyPasteHTML(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N.sources.API;
    if (typeof t == "string") {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(s, e), this.quill.setSelection(0, N.sources.SILENT);
    } else {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new O().retain(t).concat(s), r), this.quill.setSelection(t + s.length(), N.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    var l, a;
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t.defaultPrevented) return;
    t.preventDefault();
    const [r] = this.quill.selection.getRange();
    if (r == null) return;
    const {
      html: s,
      text: i
    } = this.onCopy(r, e);
    (l = t.clipboardData) == null || l.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", s), e && ji({
      range: r,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t) {
    return t.split(/\r?\n/).filter((e) => e[0] !== "#").join(`
`);
  }
  onCapturePaste(t) {
    var l, a, c, h, d;
    if (t.defaultPrevented || !this.quill.isEnabled()) return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null) return;
    const r = (l = t.clipboardData) == null ? void 0 : l.getData("text/html");
    let s = (a = t.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!r && !s) {
      const m = (c = t.clipboardData) == null ? void 0 : c.getData("text/uri-list");
      m && (s = this.normalizeURIList(m));
    }
    const i = Array.from(((h = t.clipboardData) == null ? void 0 : h.files) || []);
    if (!r && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (r && i.length > 0) {
      const m = new DOMParser().parseFromString(r, "text/html");
      if (m.body.childElementCount === 1 && ((d = m.body.firstElementChild) == null ? void 0 : d.tagName) === "IMG") {
        this.quill.uploader.upload(e, i);
        return;
      }
    }
    this.onPaste(e, {
      html: r,
      text: s
    });
  }
  onCopy(t) {
    const e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text: r,
      html: s
    } = e;
    const i = this.quill.getFormat(t.index), l = this.convert({
      text: r,
      html: s
    }, i);
    Fd.log("onPaste", l, {
      text: r,
      html: s
    });
    const a = new O().retain(t.index).delete(t.length).concat(l);
    this.quill.updateContents(a, N.sources.USER), this.quill.setSelection(a.length() - t.length, N.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    const r = [], s = [];
    return this.matchers.forEach((i) => {
      const [l, a] = i;
      switch (l) {
        case Node.TEXT_NODE:
          s.push(a);
          break;
        case Node.ELEMENT_NODE:
          r.push(a);
          break;
        default:
          Array.from(t.querySelectorAll(l)).forEach((c) => {
            if (e.has(c)) {
              const h = e.get(c);
              h == null || h.push(a);
            } else
              e.set(c, [a]);
          });
          break;
      }
    }), [r, s];
  }
}
x(Ko, "DEFAULTS", {
  matchers: []
});
function Ae(n, t, e, r) {
  return r.query(t) ? n.reduce((s, i) => {
    if (!i.insert) return s;
    if (i.attributes && i.attributes[t])
      return s.push(i);
    const l = e ? {
      [t]: e
    } : {};
    return s.insert(i.insert, {
      ...l,
      ...i.attributes
    });
  }, new O()) : n;
}
function Rn(n, t) {
  let e = "";
  for (let r = n.ops.length - 1; r >= 0 && e.length < t.length; --r) {
    const s = n.ops[r];
    if (typeof s.insert != "string") break;
    e = s.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function Yt(n, t) {
  if (!(n instanceof Element)) return !1;
  const e = t.query(n);
  return e && e.prototype instanceof it ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n.tagName.toLowerCase());
}
function Gd(n, t) {
  return n.previousElementSibling && n.nextElementSibling && !Yt(n.previousElementSibling, t) && !Yt(n.nextElementSibling, t);
}
const mr = /* @__PURE__ */ new WeakMap();
function Vo(n) {
  return n == null ? !1 : (mr.has(n) || (n.tagName === "PRE" ? mr.set(n, !0) : mr.set(n, Vo(n.parentNode))), mr.get(n));
}
function Pi(n, t, e, r, s) {
  return t.nodeType === t.TEXT_NODE ? r.reduce((i, l) => l(t, i, n), new O()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, l) => {
    let a = Pi(n, l, e, r, s);
    return l.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(l, c, n), a), a = (s.get(l) || []).reduce((c, h) => h(l, c, n), a)), i.concat(a);
  }, new O()) : new O();
}
function Hs(n) {
  return (t, e, r) => Ae(e, n, !0, r);
}
function Kd(n, t, e) {
  const r = Ct.keys(n), s = Nt.keys(n), i = ne.keys(n), l = {};
  return r.concat(s).concat(i).forEach((a) => {
    let c = e.query(a, q.ATTRIBUTE);
    c != null && (l[c.attrName] = c.value(n), l[c.attrName]) || (c = zd[a], c != null && (c.attrName === a || c.keyName === a) && (l[c.attrName] = c.value(n) || void 0), c = Bl[a], c != null && (c.attrName === a || c.keyName === a) && (c = Bl[a], l[c.attrName] = c.value(n) || void 0));
  }), Object.entries(l).reduce((a, c) => {
    let [h, d] = c;
    return Ae(a, h, d, e);
  }, t);
}
function Vd(n, t, e) {
  const r = e.query(n);
  if (r == null) return t;
  if (r.prototype instanceof it) {
    const s = {}, i = r.value(n);
    if (i != null)
      return s[r.blotName] = i, new O().insert(s, r.formats(n, e));
  } else if (r.prototype instanceof xn && !Rn(t, `
`) && t.insert(`
`), "blotName" in r && "formats" in r && typeof r.formats == "function")
    return Ae(t, r.blotName, r.formats(n, e), e);
  return t;
}
function Wd(n, t) {
  return Rn(t, `
`) || t.insert(`
`), t;
}
function Zd(n, t, e) {
  const r = e.query("code-block"), s = r && "formats" in r && typeof r.formats == "function" ? r.formats(n, e) : !0;
  return Ae(t, "code-block", s, e);
}
function Xd() {
  return new O();
}
function Yd(n, t, e) {
  const r = e.query(n);
  if (r == null || // @ts-expect-error
  r.blotName !== "list" || !Rn(t, `
`))
    return t;
  let s = -1, i = n.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? t : t.reduce((l, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? l.push(a) : l.insert(a.insert, {
    indent: s,
    ...a.attributes || {}
  }) : l, new O());
}
function Qd(n, t, e) {
  const r = n;
  let s = r.tagName === "OL" ? "ordered" : "bullet";
  const i = r.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), Ae(t, "list", s, e);
}
function Ml(n, t, e) {
  if (!Rn(t, `
`)) {
    if (Yt(n, e) && (n.childNodes.length > 0 || n instanceof HTMLParagraphElement))
      return t.insert(`
`);
    if (t.length() > 0 && n.nextSibling) {
      let r = n.nextSibling;
      for (; r != null; ) {
        if (Yt(r, e))
          return t.insert(`
`);
        const s = e.query(r);
        if (s && s.prototype instanceof ut)
          return t.insert(`
`);
        r = r.firstChild;
      }
    }
  }
  return t;
}
function Jd(n, t, e) {
  var i;
  const r = {}, s = n.style || {};
  return s.fontStyle === "italic" && (r.italic = !0), s.textDecoration === "underline" && (r.underline = !0), s.textDecoration === "line-through" && (r.strike = !0), ((i = s.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((l, a) => {
    let [c, h] = a;
    return Ae(l, c, h, e);
  }, t), parseFloat(s.textIndent || 0) > 0 ? new O().insert("	").concat(t) : t;
}
function tg(n, t, e) {
  var s, i;
  const r = ((s = n.parentElement) == null ? void 0 : s.tagName) === "TABLE" ? n.parentElement : (i = n.parentElement) == null ? void 0 : i.parentElement;
  if (r != null) {
    const a = Array.from(r.querySelectorAll("tr")).indexOf(n) + 1;
    return Ae(t, "table", a, e);
  }
  return t;
}
function eg(n, t, e) {
  var s;
  let r = n.data;
  if (((s = n.parentElement) == null ? void 0 : s.tagName) === "O:P")
    return t.insert(r.trim());
  if (!Vo(n)) {
    if (r.trim().length === 0 && r.includes(`
`) && !Gd(n, e))
      return t;
    const i = (l, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && l ? " " : c;
    };
    r = r.replace(/\r\n/g, " ").replace(/\n/g, " "), r = r.replace(/\s\s+/g, i.bind(i, !0)), (n.previousSibling == null && n.parentElement != null && Yt(n.parentElement, e) || n.previousSibling instanceof Element && Yt(n.previousSibling, e)) && (r = r.replace(/^\s+/, i.bind(i, !1))), (n.nextSibling == null && n.parentElement != null && Yt(n.parentElement, e) || n.nextSibling instanceof Element && Yt(n.nextSibling, e)) && (r = r.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(r);
}
class Wo extends kt {
  constructor(e, r) {
    super(e, r);
    x(this, "lastRecorded", 0);
    x(this, "ignoreChange", !1);
    x(this, "stack", {
      undo: [],
      redo: []
    });
    x(this, "currentRange", null);
    this.quill.on(N.events.EDITOR_CHANGE, (s, i, l, a) => {
      s === N.events.SELECTION_CHANGE ? i && a !== N.sources.SILENT && (this.currentRange = i) : s === N.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === N.sources.USER ? this.record(i, l) : this.transform(i)), this.currentRange = ci(this.currentRange, i));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s) => {
      s.inputType === "historyUndo" ? (this.undo(), s.preventDefault()) : s.inputType === "historyRedo" && (this.redo(), s.preventDefault());
    });
  }
  change(e, r) {
    if (this.stack[e].length === 0) return;
    const s = this.stack[e].pop();
    if (!s) return;
    const i = this.quill.getContents(), l = s.delta.invert(i);
    this.stack[r].push({
      delta: l,
      range: ci(s.range, l)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(s.delta, N.sources.USER), this.ignoreChange = !1, this.restoreSelection(s);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e, r) {
    if (e.ops.length === 0) return;
    this.stack.redo = [];
    let s = e.invert(r), i = this.currentRange;
    const l = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > l && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (s = s.compose(a.delta), i = a.range);
    } else
      this.lastRecorded = l;
    s.length() !== 0 && (this.stack.undo.push({
      delta: s,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e) {
    $l(this.stack.undo, e), $l(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, N.sources.USER);
    else {
      const r = rg(this.quill.scroll, e.delta);
      this.quill.setSelection(r, N.sources.USER);
    }
  }
}
x(Wo, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function $l(n, t) {
  let e = t;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = n[r];
    n[r] = {
      delta: e.transform(s.delta, !0),
      range: s.range && ci(s.range, e)
    }, e = s.delta.transform(e), n[r].delta.length() === 0 && n.splice(r, 1);
  }
}
function ng(n, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith(`
`) : e.attributes != null ? Object.keys(e.attributes).some((r) => n.query(r, q.BLOCK) != null) : !1;
}
function rg(n, t) {
  const e = t.reduce((s, i) => s + (i.delete || 0), 0);
  let r = t.length() - e;
  return ng(n, t) && (r -= 1), r;
}
function ci(n, t) {
  if (!n) return n;
  const e = t.transformPosition(n.index), r = t.transformPosition(n.index + n.length);
  return {
    index: e,
    length: r - e
  };
}
class Zo extends kt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("drop", (r) => {
      var l;
      r.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(r.clientX, r.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(r.clientX, r.clientY);
        s = document.createRange(), s.setStart(a.offsetNode, a.offset), s.setEnd(a.offsetNode, a.offset);
      }
      const i = s && t.selection.normalizeNative(s);
      if (i) {
        const a = t.selection.normalizedToRange(i);
        (l = r.dataTransfer) != null && l.files && this.upload(a, r.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    const r = [];
    Array.from(e).forEach((s) => {
      var i;
      s && ((i = this.options.mimetypes) != null && i.includes(s.type)) && r.push(s);
    }), r.length > 0 && this.options.handler.call(this, t, r);
  }
}
Zo.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n, t) {
    if (!this.quill.scroll.query("image"))
      return;
    const e = t.map((r) => new Promise((s) => {
      const i = new FileReader();
      i.onload = () => {
        s(i.result);
      }, i.readAsDataURL(r);
    }));
    Promise.all(e).then((r) => {
      const s = r.reduce((i, l) => i.insert({
        image: l
      }), new O().retain(n.index).delete(n.length));
      this.quill.updateContents(s, S.sources.USER), this.quill.setSelection(n.index + r.length, S.sources.SILENT);
    });
  }
};
const sg = ["insertText", "insertReplacementText"];
class ig extends kt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (r) => {
      this.handleBeforeInput(r);
    }), /Android/i.test(navigator.userAgent) || t.on(N.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    ji({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t.length === 0) return !1;
    if (e) {
      const r = this.quill.getFormat(t.index, 1);
      this.deleteRange(t), this.quill.updateContents(new O().retain(t.index).insert(e, r), N.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, N.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !sg.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const r = lg(t);
    if (r == null)
      return;
    const s = this.quill.selection.normalizeNative(e), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, r) && t.preventDefault();
  }
  handleCompositionStart() {
    const t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
function lg(n) {
  var t;
  return typeof n.data == "string" ? n.data : (t = n.dataTransfer) != null && t.types.includes("text/plain") ? n.dataTransfer.getData("text/plain") : null;
}
const og = /Mac/i.test(navigator.platform), ag = 100, cg = (n) => !!(n.key === "ArrowLeft" || n.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n.key === "ArrowUp" || n.key === "ArrowDown" || n.key === "Home" || og && n.key === "a" && n.ctrlKey === !0);
class ug extends kt {
  constructor(e, r) {
    super(e, r);
    x(this, "isListening", !1);
    x(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e, r) {
        let {
          line: s,
          event: i
        } = r;
        if (!(s instanceof Et) || !s.uiNode)
          return !0;
        const l = getComputedStyle(s.domNode).direction === "rtl";
        return l && i.key !== "ArrowRight" || !l && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), N.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && cg(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + ag, this.isListening) return;
    this.isListening = !0;
    const e = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e, {
      once: !0
    });
  }
  handleSelectionChange() {
    const e = document.getSelection();
    if (!e) return;
    const r = e.getRangeAt(0);
    if (r.collapsed !== !0 || r.startOffset !== 0) return;
    const s = this.quill.scroll.find(r.startContainer);
    if (!(s instanceof Et) || !s.uiNode) return;
    const i = document.createRange();
    i.setStartAfter(s.uiNode), i.setEndAfter(s.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
N.register({
  "blots/block": W,
  "blots/block/embed": ut,
  "blots/break": wt,
  "blots/container": ve,
  "blots/cursor": ze,
  "blots/embed": Ri,
  "blots/inline": It,
  "blots/scroll": De,
  "blots/text": At,
  "modules/clipboard": Ko,
  "modules/history": Wo,
  "modules/keyboard": Br,
  "modules/uploader": Zo,
  "modules/input": ig,
  "modules/uiNode": ug
});
class hg extends Nt {
  add(t, e) {
    let r = 0;
    if (e === "+1" || e === "-1") {
      const s = this.value(t) || 0;
      r = e === "+1" ? s + 1 : s - 1;
    } else typeof e == "number" && (r = e);
    return r === 0 ? (this.remove(t), !0) : super.add(t, r.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
}
const fg = new hg("indent", "ql-indent", {
  scope: q.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class ui extends W {
}
x(ui, "blotName", "blockquote"), x(ui, "tagName", "blockquote");
class hi extends W {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
x(hi, "blotName", "header"), x(hi, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class kn extends ve {
}
kn.blotName = "list-container";
kn.tagName = "OL";
class Bn extends W {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    N.register(kn);
  }
  constructor(t, e) {
    super(t, e);
    const r = e.ownerDocument.createElement("span"), s = (i) => {
      if (!t.isEnabled()) return;
      const l = this.statics.formats(e, t);
      l === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : l === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    r.addEventListener("mousedown", s), r.addEventListener("touchstart", s), this.attachUI(r);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
Bn.blotName = "list";
Bn.tagName = "LI";
kn.allowedChildren = [Bn];
Bn.requiredContainer = kn;
class _n extends It {
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
x(_n, "blotName", "bold"), x(_n, "tagName", ["STRONG", "B"]);
class fi extends _n {
}
x(fi, "blotName", "italic"), x(fi, "tagName", ["EM", "I"]);
class Qt extends It {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return Xo(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
x(Qt, "blotName", "link"), x(Qt, "tagName", "A"), x(Qt, "SANITIZED_URL", "about:blank"), x(Qt, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Xo(n, t) {
  const e = document.createElement("a");
  e.href = n;
  const r = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(r) > -1;
}
class di extends It {
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB") return "sub";
    if (t.tagName === "SUP") return "super";
  }
}
x(di, "blotName", "script"), x(di, "tagName", ["SUB", "SUP"]);
class gi extends _n {
}
x(gi, "blotName", "strike"), x(gi, "tagName", ["S", "STRIKE"]);
class pi extends It {
}
x(pi, "blotName", "underline"), x(pi, "tagName", "U");
class yr extends Ri {
  static create(t) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e = super.create(t);
    return typeof t == "string" && (window.katex.render(t, e, {
      throwOnError: !1,
      errorColor: "#f00"
    }), e.setAttribute("data-value", t)), e;
  }
  static value(t) {
    return t.getAttribute("data-value");
  }
  html() {
    const {
      formula: t
    } = this.value();
    return `<span>${t}</span>`;
  }
}
x(yr, "blotName", "formula"), x(yr, "className", "ql-formula"), x(yr, "tagName", "SPAN");
const Dl = ["alt", "height", "width"];
class mi extends it {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Dl.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return Xo(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Dl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
x(mi, "blotName", "image"), x(mi, "tagName", "IMG");
const jl = ["height", "width"];
class vr extends ut {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return jl.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static sanitize(t) {
    return Qt.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    jl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
}
x(vr, "blotName", "video"), x(vr, "className", "ql-video"), x(vr, "tagName", "IFRAME");
const mn = new Nt("code-token", "hljs", {
  scope: q.INLINE
});
class Ft extends It {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(J.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, r) {
    super(t, e, r), mn.add(this.domNode, r);
  }
  format(t, e) {
    t !== Ft.blotName ? super.format(t, e) : e ? mn.add(this.domNode, e) : (mn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), mn.value(this.domNode) || this.unwrap();
  }
}
Ft.blotName = "code-token";
Ft.className = "ql-token";
class ct extends J {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e);
  }
  replaceWith(t, e) {
    return this.formatAt(0, this.length(), Ft.blotName, !1), super.replaceWith(t, e);
  }
}
class yn extends Ee {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === ct.blotName && (this.forceNext = !0, this.children.forEach((r) => {
      r.format(t, e);
    }));
  }
  formatAt(t, e, r, s) {
    r === ct.blotName && (this.forceNext = !0), super.formatAt(t, e, r, s);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null) return;
    const s = `${Array.from(this.domNode.childNodes).filter((l) => l !== this.uiNode).map((l) => l.textContent).join(`
`)}
`, i = ct.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const l = this.children.reduce((c, h) => c.concat(Io(h, !1)), new O()), a = t(s, i);
        l.diff(a).reduce((c, h) => {
          let {
            retain: d,
            attributes: m
          } = h;
          return d ? (m && Object.keys(m).forEach((g) => {
            [ct.blotName, Ft.blotName].includes(g) && this.formatAt(c, d, g, m[g]);
          }), c + d) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [r] = this.children.find(t);
    return `<pre data-language="${r ? ct.formats(r.domNode) : "plain"}">
${kr(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = ct.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
yn.allowedChildren = [ct];
ct.requiredContainer = yn;
ct.allowedChildren = [Ft, ze, At, wt];
const dg = (n, t, e) => {
  if (typeof n.versionString == "string") {
    const r = n.versionString.split(".")[0];
    if (parseInt(r, 10) >= 11)
      return n.highlight(e, {
        language: t
      }).value;
  }
  return n.highlight(t, e).value;
};
class Yo extends kt {
  static register() {
    N.register(Ft, !0), N.register(ct, !0), N.register(yn, !0);
  }
  constructor(t, e) {
    if (super(t, e), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r, s) => {
      let {
        key: i
      } = s;
      return r[i] = !0, r;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(N.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof yn)) return;
      const e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r) => {
        let {
          key: s,
          label: i
        } = r;
        const l = e.ownerDocument.createElement("option");
        l.textContent = i, l.setAttribute("value", s), e.appendChild(l);
      }), e.addEventListener("change", () => {
        t.format(ct.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = ct.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(N.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing) return;
    this.quill.update(N.sources.USER);
    const r = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(yn) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(N.sources.SILENT), r != null && this.quill.setSelection(r, N.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return kr(t).split(`
`).reduce((s, i, l) => (l !== 0 && s.insert(`
`, {
        [J.blotName]: e
      }), s.insert(i)), new O());
    const r = this.quill.root.ownerDocument.createElement("div");
    return r.classList.add(J.className), r.innerHTML = dg(this.options.hljs, e, t), Pi(this.quill.scroll, r, [(s, i) => {
      const l = mn.value(s);
      return l ? i.compose(new O().retain(i.length(), {
        [Ft.blotName]: l
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((l, a, c) => (c !== 0 && l.insert(`
`, {
      [J.blotName]: e
    }), l.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Yo.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
const En = class En extends W {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", Ui()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === En.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
x(En, "blotName", "table"), x(En, "tagName", "TD");
let vt = En;
class Ht extends ve {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t = this.children.head.formats(), e = this.children.tail.formats(), r = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return t.table === e.table && t.table === r.table && t.table === s.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t), this.children.forEach((e) => {
      if (e.next == null) return;
      const r = e.formats(), s = e.next.formats();
      if (r.table !== s.table) {
        const i = this.splitAfter(e);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
x(Ht, "blotName", "table-row"), x(Ht, "tagName", "TR");
class qt extends ve {
}
x(qt, "blotName", "table-body"), x(qt, "tagName", "TBODY");
class Ke extends ve {
  balanceCells() {
    const t = this.descendants(Ht), e = t.reduce((r, s) => Math.max(s.children.length, r), 0);
    t.forEach((r) => {
      new Array(e - r.children.length).fill(0).forEach(() => {
        let s;
        r.children.head != null && (s = vt.formats(r.children.head.domNode));
        const i = this.scroll.create(vt.blotName, s);
        r.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(qt);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t);
      s != null && s.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(qt);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t), i = vt.formats(r.children.head.domNode), l = this.scroll.create(vt.blotName, i);
      r.insertBefore(l, s);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(qt);
    if (e == null || e.children.head == null) return;
    const r = Ui(), s = this.scroll.create(Ht.blotName);
    e.children.head.children.forEach(() => {
      const l = this.scroll.create(vt.blotName, r);
      s.appendChild(l);
    });
    const i = e.children.at(t);
    e.insertBefore(s, i);
  }
  rows() {
    const t = this.children.head;
    return t == null ? [] : t.children.map((e) => e);
  }
}
x(Ke, "blotName", "table-container"), x(Ke, "tagName", "TABLE");
Ke.allowedChildren = [qt];
qt.requiredContainer = Ke;
qt.allowedChildren = [Ht];
Ht.requiredContainer = qt;
Ht.allowedChildren = [vt];
vt.requiredContainer = Ht;
function Ui() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class gg extends kt {
  static register() {
    N.register(vt), N.register(Ht), N.register(qt), N.register(Ke);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ke).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(N.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(N.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null) return;
    const e = t.offset();
    t.remove(), this.quill.update(N.sources.USER), this.quill.setSelection(e, N.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null) return [null, null, null, -1];
    const [e, r] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== vt.blotName)
      return [null, null, null, -1];
    const s = e.parent;
    return [s.parent.parent, s, e, r];
  }
  insertColumn(t) {
    const e = this.quill.getSelection();
    if (!e) return;
    const [r, s, i] = this.getTable(e);
    if (i == null) return;
    const l = i.cellOffset();
    r.insertColumn(l + t), this.quill.update(N.sources.USER);
    let a = s.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, N.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    const e = this.quill.getSelection();
    if (!e) return;
    const [r, s, i] = this.getTable(e);
    if (i == null) return;
    const l = s.rowOffset();
    r.insertRow(l + t), this.quill.update(N.sources.USER), t > 0 ? this.quill.setSelection(e, N.sources.SILENT) : this.quill.setSelection(e.index + s.children.length, e.length, N.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    const r = this.quill.getSelection();
    if (r == null) return;
    const s = new Array(t).fill(0).reduce((i) => {
      const l = new Array(e).fill(`
`).join("");
      return i.insert(l, {
        table: Ui()
      });
    }, new O().retain(r.index));
    this.quill.updateContents(s, N.sources.USER), this.quill.setSelection(r.index, N.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(N.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(N.events.TEXT_CHANGE, (r, s, i) => {
        i === N.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Pl = Gt("quill:toolbar");
class Fi extends kt {
  constructor(t, e) {
    var r, s;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), pg(i, this.options.container), (s = (r = t.container) == null ? void 0 : r.parentNode) == null || s.insertBefore(i, t.container), this.container = i;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Pl.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const l = (a = this.options.handlers) == null ? void 0 : a[i];
      l && this.addHandler(i, l);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(N.events.EDITOR_CHANGE, () => {
      const [i] = this.quill.selection.getRange();
      this.update(i);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((s) => s.indexOf("ql-") === 0);
    if (!e) return;
    if (e = e.slice(3), t.tagName === "BUTTON" && t.setAttribute("type", "button"), this.handlers[e] == null && this.quill.scroll.query(e) == null) {
      Pl.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    const r = t.tagName === "SELECT" ? "change" : "click";
    t.addEventListener(r, (s) => {
      let i;
      if (t.tagName === "SELECT") {
        if (t.selectedIndex < 0) return;
        const a = t.options[t.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        t.classList.contains("ql-active") ? i = !1 : i = t.value || !t.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [l] = this.quill.selection.getRange();
      if (this.handlers[e] != null)
        this.handlers[e].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e).prototype instanceof it
      ) {
        if (i = prompt(`Enter ${e}`), !i) return;
        this.quill.updateContents(new O().retain(l.index).delete(l.length).insert({
          [e]: i
        }), N.sources.USER);
      } else
        this.quill.format(e, i, N.sources.USER);
      this.update(l);
    }), this.controls.push([e, t]);
  }
  update(t) {
    const e = t == null ? {} : this.quill.getFormat(t);
    this.controls.forEach((r) => {
      const [s, i] = r;
      if (i.tagName === "SELECT") {
        let l = null;
        if (t == null)
          l = null;
        else if (e[s] == null)
          l = i.querySelector("option[selected]");
        else if (!Array.isArray(e[s])) {
          let a = e[s];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), l = i.querySelector(`option[value="${a}"]`);
        }
        l == null ? (i.value = "", i.selectedIndex = -1) : l.selected = !0;
      } else if (t == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const l = e[s], a = l === i.getAttribute("value") || l != null && l.toString() === i.getAttribute("value") || l == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const l = e[s] != null;
        i.classList.toggle("ql-active", l), i.setAttribute("aria-pressed", l.toString());
      }
    });
  }
}
Fi.DEFAULTS = {};
function Ul(n, t, e) {
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), e != null ? (r.value = e, r.setAttribute("aria-label", `${t}: ${e}`)) : r.setAttribute("aria-label", t), n.appendChild(r);
}
function pg(n, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const r = document.createElement("span");
    r.classList.add("ql-formats"), e.forEach((s) => {
      if (typeof s == "string")
        Ul(r, s);
      else {
        const i = Object.keys(s)[0], l = s[i];
        Array.isArray(l) ? mg(r, i, l) : Ul(r, i, l);
      }
    }), n.appendChild(r);
  });
}
function mg(n, t, e) {
  const r = document.createElement("select");
  r.classList.add(`ql-${t}`), e.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), r.appendChild(i);
  }), n.appendChild(r);
}
Fi.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n = this.quill.getSelection();
      if (n != null)
        if (n.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, q.INLINE) != null && this.quill.format(e, !1, N.sources.USER);
          });
        } else
          this.quill.removeFormat(n.index, n.length, N.sources.USER);
    },
    direction(n) {
      const {
        align: t
      } = this.quill.getFormat();
      n === "rtl" && t == null ? this.quill.format("align", "right", N.sources.USER) : !n && t === "right" && this.quill.format("align", !1, N.sources.USER), this.quill.format("direction", n, N.sources.USER);
    },
    indent(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), r = parseInt(e.indent || 0, 10);
      if (n === "+1" || n === "-1") {
        let s = n === "+1" ? 1 : -1;
        e.direction === "rtl" && (s *= -1), this.quill.format("indent", r + s, N.sources.USER);
      }
    },
    link(n) {
      n === !0 && (n = prompt("Enter link URL:")), this.quill.format("link", n, N.sources.USER);
    },
    list(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      n === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, N.sources.USER) : this.quill.format("list", "unchecked", N.sources.USER) : this.quill.format("list", n, N.sources.USER);
    }
  }
};
const bg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', yg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', vg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', Eg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', Ag = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', Ng = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', wg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', Tg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Fl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', xg = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', Lg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', Sg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', _g = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', Og = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', qg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Cg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Ig = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', Rg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', kg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', Bg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', Mg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', $g = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', Dg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', jg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Pg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', Ug = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Fg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Hg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', zg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Gg = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', Kg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', Vg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', Wg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', On = {
  align: {
    "": bg,
    center: yg,
    right: vg,
    justify: Eg
  },
  background: Ag,
  blockquote: Ng,
  bold: wg,
  clean: Tg,
  code: Fl,
  "code-block": Fl,
  color: xg,
  direction: {
    "": Lg,
    rtl: Sg
  },
  formula: _g,
  header: {
    1: Og,
    2: qg,
    3: Cg,
    4: Ig,
    5: Rg,
    6: kg
  },
  italic: Bg,
  image: Mg,
  indent: {
    "+1": $g,
    "-1": Dg
  },
  link: jg,
  list: {
    bullet: Pg,
    check: Ug,
    ordered: Fg
  },
  script: {
    sub: Hg,
    super: zg
  },
  strike: Gg,
  table: Kg,
  underline: Vg,
  video: Wg
}, Zg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Hl = 0;
function zl(n, t) {
  n.setAttribute(t, `${n.getAttribute(t) !== "true"}`);
}
class Mr {
  constructor(t) {
    this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), zl(this.label, "aria-expanded"), zl(this.options, "aria-hidden");
  }
  buildItem(t) {
    const e = document.createElement("span");
    e.tabIndex = "0", e.setAttribute("role", "button"), e.classList.add("ql-picker-item");
    const r = t.getAttribute("value");
    return r && e.setAttribute("data-value", r), t.textContent && e.setAttribute("data-label", t.textContent), e.addEventListener("click", () => {
      this.selectItem(e, !0);
    }), e.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(e, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), e;
  }
  buildLabel() {
    const t = document.createElement("span");
    return t.classList.add("ql-picker-label"), t.innerHTML = Zg, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = `ql-picker-options-${Hl}`, Hl += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
      const r = this.buildItem(e);
      t.appendChild(r), e.selected === !0 && this.selectItem(r);
    }), this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t) => {
      this.container.setAttribute(t.name, t.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = this.container.querySelector(".ql-selected");
    t !== r && (r != null && r.classList.remove("ql-selected"), t != null && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      const r = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t = this.select.options[this.select.selectedIndex], this.selectItem(r);
    } else
      this.selectItem(null);
    const e = t != null && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
}
class Qo extends Mr {
  constructor(t, e) {
    super(t), this.label.innerHTML = e, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r) => {
      r.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    const e = super.buildItem(t);
    return e.style.backgroundColor = t.getAttribute("value") || "", e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = this.label.querySelector(".ql-color-label"), s = t && t.getAttribute("data-value") || "";
    r && (r.tagName === "line" ? r.style.stroke = s : r.style.fill = s);
  }
}
class Jo extends Mr {
  constructor(t, e) {
    super(t), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r) => {
      r.innerHTML = e[r.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = t || this.defaultItem;
    if (r != null) {
      if (this.label.innerHTML === r.innerHTML) return;
      this.label.innerHTML = r.innerHTML;
    }
  }
}
const Xg = (n) => {
  const {
    overflowY: t
  } = getComputedStyle(n, null);
  return t !== "visible" && t !== "clip";
};
class ta {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Xg(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    const e = t.left + t.width / 2 - this.root.offsetWidth / 2, r = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e}px`, this.root.style.top = `${r}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let l = 0;
    if (i.right > s.right && (l = s.right - i.right, this.root.style.left = `${e + l}px`), i.left < s.left && (l = s.left - i.left, this.root.style.left = `${e + l}px`), i.bottom > s.bottom) {
      const a = i.bottom - i.top, c = t.bottom - t.top + a;
      this.root.style.top = `${r - c}px`, this.root.classList.add("ql-flip");
    }
    return l;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const Yg = [!1, "center", "right", "justify"], Qg = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], Jg = [!1, "serif", "monospace"], tp = ["1", "2", "3", !1], ep = ["small", !1, "large", "huge"];
class Mn extends Ge {
  constructor(t, e) {
    super(t, e);
    const r = (s) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", r);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    t.emitter.listenDOM("click", document.body, r);
  }
  addModule(t) {
    const e = super.addModule(t);
    return t === "toolbar" && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((r) => {
      (r.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), e[i] != null))
          if (i === "direction")
            r.innerHTML = e[i][""] + e[i].rtl;
          else if (typeof e[i] == "string")
            r.innerHTML = e[i];
          else {
            const l = r.value || "";
            l != null && e[i][l] && (r.innerHTML = e[i][l]);
          }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && pn(s, Yg), typeof e.align == "object"))
        return new Jo(s, e.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && pn(s, Qg, i === "background" ? "#ffffff" : "#000000"), new Qo(s, e[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? pn(s, Jg) : s.classList.contains("ql-header") ? pn(s, tp) : s.classList.contains("ql-size") && pn(s, ep)), new Mr(s);
    });
    const r = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(S.events.EDITOR_CHANGE, r);
  }
}
Mn.DEFAULTS = Jt({}, Ge.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let n = this.container.querySelector("input.ql-image[type=file]");
          n == null && (n = document.createElement("input"), n.setAttribute("type", "file"), n.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n.classList.add("ql-image"), n.addEventListener("change", () => {
            const t = this.quill.getSelection(!0);
            this.quill.uploader.upload(t, n.files), n.value = "";
          }), this.container.appendChild(n)), n.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class ea extends ta {
  constructor(t, e) {
    super(t, e), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      t.key === "Enter" ? (this.save(), t.preventDefault()) : t.key === "Escape" && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    e != null ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r = this.quill.getBounds(this.quill.selection.savedRange);
    r != null && this.position(r), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""), this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: t
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, S.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, S.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = np(t);
      case "formula": {
        if (!t) break;
        const e = this.quill.getSelection(!0);
        if (e != null) {
          const r = e.index + e.length;
          this.quill.insertEmbed(
            r,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t,
            S.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r + 1, " ", S.sources.USER), this.quill.setSelection(r + 2, S.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function np(n) {
  let t = n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : n;
}
function pn(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((r) => {
    const s = document.createElement("option");
    r === e ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(r)), n.appendChild(s);
  });
}
const rp = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class na extends ea {
  constructor(t, e) {
    super(t, e), this.quill.on(S.events.EDITOR_CHANGE, (r, s, i, l) => {
      if (r === S.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && l === S.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a = this.quill.getLines(s.index, s.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(s);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), d = Math.min(c.length() - 1, s.index + s.length - h), m = this.quill.getBounds(new pe(h, d));
            m != null && this.position(m);
          }
        } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(S.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden")) return;
        const t = this.quill.getSelection();
        if (t != null) {
          const e = this.quill.getBounds(t);
          e != null && this.position(e);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t) {
    const e = super.position(t), r = this.root.querySelector(".ql-tooltip-arrow");
    return r.style.marginLeft = "", e !== 0 && (r.style.marginLeft = `${-1 * e - r.offsetWidth / 2}px`), e;
  }
}
x(na, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class ra extends Mn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = rp), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new na(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), On), this.buildPickers(t.container.querySelectorAll("select"), On));
  }
}
ra.DEFAULTS = Jt({}, Mn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          n ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
const sp = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class sa extends ea {
  constructor() {
    super(...arguments);
    x(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e) => {
      if (this.linkRange != null) {
        const r = this.linkRange;
        this.restoreFocus(), this.quill.formatText(r, "link", !1, S.sources.USER), delete this.linkRange;
      }
      e.preventDefault(), this.hide();
    }), this.quill.on(S.events.SELECTION_CHANGE, (e, r, s) => {
      if (e != null) {
        if (e.length === 0 && s === S.sources.USER) {
          const [i, l] = this.quill.scroll.descendant(Qt, e.index);
          if (i != null) {
            this.linkRange = new pe(e.index - l, i.length());
            const a = Qt.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
x(sa, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class ia extends Mn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = sp), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), On), this.buildPickers(t.container.querySelectorAll("select"), On), this.tooltip = new sa(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, r) => {
      t.handlers.link.call(t, !r.format.link);
    }));
  }
}
ia.DEFAULTS = Jt({}, Mn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          if (n) {
            const t = this.quill.getSelection();
            if (t == null || t.length === 0) return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && e.indexOf("mailto:") !== 0 && (e = `mailto:${e}`);
            const {
              tooltip: r
            } = this.quill.theme;
            r.edit("link", e);
          } else
            this.quill.format("link", !1, N.sources.USER);
        }
      }
    }
  }
});
N.register({
  "attributors/attribute/direction": Do,
  "attributors/class/align": Bo,
  "attributors/class/background": Nd,
  "attributors/class/color": Ad,
  "attributors/class/direction": jo,
  "attributors/class/font": Fo,
  "attributors/class/size": zo,
  "attributors/style/align": Mo,
  "attributors/style/background": Mi,
  "attributors/style/color": Bi,
  "attributors/style/direction": Po,
  "attributors/style/font": Ho,
  "attributors/style/size": Go
}, !0);
N.register({
  "formats/align": Bo,
  "formats/direction": jo,
  "formats/indent": fg,
  "formats/background": Mi,
  "formats/color": Bi,
  "formats/font": Fo,
  "formats/size": zo,
  "formats/blockquote": ui,
  "formats/code-block": J,
  "formats/header": hi,
  "formats/list": Bn,
  "formats/bold": _n,
  "formats/code": $i,
  "formats/italic": fi,
  "formats/link": Qt,
  "formats/script": di,
  "formats/strike": gi,
  "formats/underline": pi,
  "formats/formula": yr,
  "formats/image": mi,
  "formats/video": vr,
  "modules/syntax": Yo,
  "modules/table": gg,
  "modules/toolbar": Fi,
  "themes/bubble": ra,
  "themes/snow": ia,
  "ui/icons": On,
  "ui/picker": Mr,
  "ui/icon-picker": Jo,
  "ui/color-picker": Qo,
  "ui/tooltip": ta
}, !0);
const ip = N.import("blots/embed"), An = class An extends ip {
  constructor(t, e) {
    super(t, e);
  }
  static create(t) {
    let e = super.create(t);
    if (!(e instanceof HTMLElement))
      return e;
    t.required && e.setAttribute("data-required", "true"), e.setAttribute("data-id", t.id), e.setAttribute("data-label", t.label), e.setAttribute("spellcheck", "false");
    const { delimiters: r } = An, s = typeof r == "string" ? `${r}${t.label}${r}` : `${r[0]}${t.label}${r[1] || r[0]}`, i = document.createTextNode(s);
    if (N.version < "1.3") {
      const l = document.createElement("span");
      l.setAttribute("contenteditable", "false"), l.appendChild(i), e.appendChild(l);
    } else
      e.appendChild(i);
    return e;
  }
  static value(t) {
    return t.dataset;
  }
  length() {
    return 1;
  }
  deleteAt(t, e) {
    this.domNode instanceof HTMLElement && !this.domNode.dataset.required && super.deleteAt(t, e);
  }
};
An.blotName = "placeholder", An.tagName = "span";
let je = An;
const lp = N.import("core/module");
class pp extends lp {
  constructor(t, e) {
    super(t, e), e && (Array.isArray(e.placeholders) && (this.placeholders = e.placeholders), je.className = e.className || "ql-placeholder-content", je.delimiters = e.delimiters || ["{", "}"]), N.register(je), t.getModule("toolbar").addHandler("placeholder", this.toolbarHandler), t.root.addEventListener("click", this.onClick), t.on("text-change", this.onTextChange);
  }
  onClick(t) {
    let e = t.target;
    const r = ge.find(e.parentNode);
    if (r instanceof je) {
      const s = this.quill.getIndex(r);
      this.quill.setSelection(s, r.length(), N.sources.USER);
    }
  }
  toolbarHandler(t) {
    const e = this.quill.getSelection();
    if (e !== null) {
      const r = this.placeholders.filter((s) => s.id === t)[0];
      if (!r)
        throw new Error(`Missing placeholder for ${t}`);
      this.quill.deleteText(e.index, e.length), this.quill.insertEmbed(e.index, "placeholder", r, N.sources.USER), this.quill.setSelection(e.index + 1, 0);
    }
  }
  onTextChange(t, e, r) {
    if (r === N.sources.USER) {
      const i = this.quill.getContents().diff(e);
      i.ops.filter((a) => {
        let c = a.insert;
        return c && c.placeholder && c.placeholder.required;
      }).length && this.quill.updateContents(i, N.sources.SILENT);
    }
  }
}
export {
  pp as PlaceholderModule
};
