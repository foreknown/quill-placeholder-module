var ca = Object.defineProperty;
var ua = (n, t, e) => t in n ? ca(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var x = (n, t, e) => ua(n, typeof t != "symbol" ? t + "" : t, e);
var Wl = typeof global == "object" && global && global.Object === Object && global, ha = typeof self == "object" && self && self.Object === Object && self, Bt = Wl || ha || Function("return this")(), ne = Bt.Symbol, Zl = Object.prototype, fa = Zl.hasOwnProperty, da = Zl.toString, bn = ne ? ne.toStringTag : void 0;
function ga(n) {
  var t = fa.call(n, bn), e = n[bn];
  try {
    n[bn] = void 0;
    var r = !0;
  } catch {
  }
  var s = da.call(n);
  return r && (t ? n[bn] = e : delete n[bn]), s;
}
var pa = Object.prototype, ma = pa.toString;
function ba(n) {
  return ma.call(n);
}
var ya = "[object Null]", va = "[object Undefined]", Vi = ne ? ne.toStringTag : void 0;
function Xe(n) {
  return n == null ? n === void 0 ? va : ya : Vi && Vi in Object(n) ? ga(n) : ba(n);
}
function Ht(n) {
  return n != null && typeof n == "object";
}
var pe = Array.isArray;
function se(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
function Xl(n) {
  return n;
}
var Ea = "[object AsyncFunction]", Aa = "[object Function]", Na = "[object GeneratorFunction]", wa = "[object Proxy]";
function Ei(n) {
  if (!se(n))
    return !1;
  var t = Xe(n);
  return t == Aa || t == Na || t == Ea || t == wa;
}
var ks = Bt["__core-js_shared__"], Wi = function() {
  var n = /[^.]+$/.exec(ks && ks.keys && ks.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Ta(n) {
  return !!Wi && Wi in n;
}
var xa = Function.prototype, La = xa.toString;
function ye(n) {
  if (n != null) {
    try {
      return La.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var Sa = /[\\^$.*+?()[\]{}|]/g, _a = /^\[object .+?Constructor\]$/, Oa = Function.prototype, qa = Object.prototype, Ca = Oa.toString, Ia = qa.hasOwnProperty, ka = RegExp(
  "^" + Ca.call(Ia).replace(Sa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ra(n) {
  if (!se(n) || Ta(n))
    return !1;
  var t = Ei(n) ? ka : _a;
  return t.test(ye(n));
}
function Ba(n, t) {
  return n == null ? void 0 : n[t];
}
function ve(n, t) {
  var e = Ba(n, t);
  return Ra(e) ? e : void 0;
}
var Ws = ve(Bt, "WeakMap"), Zi = Object.create, Ma = /* @__PURE__ */ function() {
  function n() {
  }
  return function(t) {
    if (!se(t))
      return {};
    if (Zi)
      return Zi(t);
    n.prototype = t;
    var e = new n();
    return n.prototype = void 0, e;
  };
}();
function $a(n, t, e) {
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
function Yl(n, t) {
  var e = -1, r = n.length;
  for (t || (t = Array(r)); ++e < r; )
    t[e] = n[e];
  return t;
}
var Da = 800, ja = 16, Pa = Date.now;
function Ua(n) {
  var t = 0, e = 0;
  return function() {
    var r = Pa(), s = ja - (r - e);
    if (e = r, s > 0) {
      if (++t >= Da)
        return arguments[0];
    } else
      t = 0;
    return n.apply(void 0, arguments);
  };
}
function Fa(n) {
  return function() {
    return n;
  };
}
var Nr = function() {
  try {
    var n = ve(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}(), Ha = Nr ? function(n, t) {
  return Nr(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Fa(t),
    writable: !0
  });
} : Xl, za = Ua(Ha);
function Ga(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1; )
    ;
  return n;
}
var Ka = 9007199254740991, Va = /^(?:0|[1-9]\d*)$/;
function Ql(n, t) {
  var e = typeof n;
  return t = t ?? Ka, !!t && (e == "number" || e != "symbol" && Va.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function Ai(n, t, e) {
  t == "__proto__" && Nr ? Nr(n, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[t] = e;
}
function In(n, t) {
  return n === t || n !== n && t !== t;
}
var Wa = Object.prototype, Za = Wa.hasOwnProperty;
function Jl(n, t, e) {
  var r = n[t];
  (!(Za.call(n, t) && In(r, e)) || e === void 0 && !(t in n)) && Ai(n, t, e);
}
function kn(n, t, e, r) {
  var s = !e;
  e || (e = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var a = t[i], c = void 0;
    c === void 0 && (c = n[a]), s ? Ai(e, a, c) : Jl(e, a, c);
  }
  return e;
}
var Xi = Math.max;
function Xa(n, t, e) {
  return t = Xi(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, i = Xi(r.length - t, 0), l = Array(i); ++s < i; )
      l[s] = r[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = r[s];
    return a[t] = e(l), $a(n, this, a);
  };
}
function Ya(n, t) {
  return za(Xa(n, t, Xl), n + "");
}
var Qa = 9007199254740991;
function to(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Qa;
}
function _r(n) {
  return n != null && to(n.length) && !Ei(n);
}
function Ja(n, t, e) {
  if (!se(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? _r(e) && Ql(t, e.length) : r == "string" && t in e) ? In(e[t], n) : !1;
}
function tc(n) {
  return Ya(function(t, e) {
    var r = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, l = s > 2 ? e[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, l && Ja(e[0], e[1], l) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var a = e[r];
      a && n(t, a, r, i);
    }
    return t;
  });
}
var ec = Object.prototype;
function Ni(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || ec;
  return n === e;
}
function nc(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var rc = "[object Arguments]";
function Yi(n) {
  return Ht(n) && Xe(n) == rc;
}
var eo = Object.prototype, sc = eo.hasOwnProperty, ic = eo.propertyIsEnumerable, Zs = Yi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Yi : function(n) {
  return Ht(n) && sc.call(n, "callee") && !ic.call(n, "callee");
};
function lc() {
  return !1;
}
var no = typeof exports == "object" && exports && !exports.nodeType && exports, Qi = no && typeof module == "object" && module && !module.nodeType && module, oc = Qi && Qi.exports === no, Ji = oc ? Bt.Buffer : void 0, ac = Ji ? Ji.isBuffer : void 0, Tn = ac || lc, cc = "[object Arguments]", uc = "[object Array]", hc = "[object Boolean]", fc = "[object Date]", dc = "[object Error]", gc = "[object Function]", pc = "[object Map]", mc = "[object Number]", bc = "[object Object]", yc = "[object RegExp]", vc = "[object Set]", Ec = "[object String]", Ac = "[object WeakMap]", Nc = "[object ArrayBuffer]", wc = "[object DataView]", Tc = "[object Float32Array]", xc = "[object Float64Array]", Lc = "[object Int8Array]", Sc = "[object Int16Array]", _c = "[object Int32Array]", Oc = "[object Uint8Array]", qc = "[object Uint8ClampedArray]", Cc = "[object Uint16Array]", Ic = "[object Uint32Array]", F = {};
F[Tc] = F[xc] = F[Lc] = F[Sc] = F[_c] = F[Oc] = F[qc] = F[Cc] = F[Ic] = !0;
F[cc] = F[uc] = F[Nc] = F[hc] = F[wc] = F[fc] = F[dc] = F[gc] = F[pc] = F[mc] = F[bc] = F[yc] = F[vc] = F[Ec] = F[Ac] = !1;
function kc(n) {
  return Ht(n) && to(n.length) && !!F[Xe(n)];
}
function wi(n) {
  return function(t) {
    return n(t);
  };
}
var ro = typeof exports == "object" && exports && !exports.nodeType && exports, En = ro && typeof module == "object" && module && !module.nodeType && module, Rc = En && En.exports === ro, Rs = Rc && Wl.process, Ke = function() {
  try {
    var n = En && En.require && En.require("util").types;
    return n || Rs && Rs.binding && Rs.binding("util");
  } catch {
  }
}(), tl = Ke && Ke.isTypedArray, Ti = tl ? wi(tl) : kc, Bc = Object.prototype, Mc = Bc.hasOwnProperty;
function so(n, t) {
  var e = pe(n), r = !e && Zs(n), s = !e && !r && Tn(n), i = !e && !r && !s && Ti(n), l = e || r || s || i, a = l ? nc(n.length, String) : [], c = a.length;
  for (var h in n)
    (t || Mc.call(n, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Ql(h, c))) && a.push(h);
  return a;
}
function io(n, t) {
  return function(e) {
    return n(t(e));
  };
}
var $c = io(Object.keys, Object), Dc = Object.prototype, jc = Dc.hasOwnProperty;
function Pc(n) {
  if (!Ni(n))
    return $c(n);
  var t = [];
  for (var e in Object(n))
    jc.call(n, e) && e != "constructor" && t.push(e);
  return t;
}
function xi(n) {
  return _r(n) ? so(n) : Pc(n);
}
function Uc(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
var Fc = Object.prototype, Hc = Fc.hasOwnProperty;
function zc(n) {
  if (!se(n))
    return Uc(n);
  var t = Ni(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !Hc.call(n, r)) || e.push(r);
  return e;
}
function Rn(n) {
  return _r(n) ? so(n, !0) : zc(n);
}
var xn = ve(Object, "create");
function Gc() {
  this.__data__ = xn ? xn(null) : {}, this.size = 0;
}
function Kc(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Vc = "__lodash_hash_undefined__", Wc = Object.prototype, Zc = Wc.hasOwnProperty;
function Xc(n) {
  var t = this.__data__;
  if (xn) {
    var e = t[n];
    return e === Vc ? void 0 : e;
  }
  return Zc.call(t, n) ? t[n] : void 0;
}
var Yc = Object.prototype, Qc = Yc.hasOwnProperty;
function Jc(n) {
  var t = this.__data__;
  return xn ? t[n] !== void 0 : Qc.call(t, n);
}
var tu = "__lodash_hash_undefined__";
function eu(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = xn && t === void 0 ? tu : t, this;
}
function me(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = Gc;
me.prototype.delete = Kc;
me.prototype.get = Xc;
me.prototype.has = Jc;
me.prototype.set = eu;
function nu() {
  this.__data__ = [], this.size = 0;
}
function Or(n, t) {
  for (var e = n.length; e--; )
    if (In(n[e][0], t))
      return e;
  return -1;
}
var ru = Array.prototype, su = ru.splice;
function iu(n) {
  var t = this.__data__, e = Or(t, n);
  if (e < 0)
    return !1;
  var r = t.length - 1;
  return e == r ? t.pop() : su.call(t, e, 1), --this.size, !0;
}
function lu(n) {
  var t = this.__data__, e = Or(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function ou(n) {
  return Or(this.__data__, n) > -1;
}
function au(n, t) {
  var e = this.__data__, r = Or(e, n);
  return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
}
function Kt(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
Kt.prototype.clear = nu;
Kt.prototype.delete = iu;
Kt.prototype.get = lu;
Kt.prototype.has = ou;
Kt.prototype.set = au;
var Ln = ve(Bt, "Map");
function cu() {
  this.size = 0, this.__data__ = {
    hash: new me(),
    map: new (Ln || Kt)(),
    string: new me()
  };
}
function uu(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function qr(n, t) {
  var e = n.__data__;
  return uu(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function hu(n) {
  var t = qr(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function fu(n) {
  return qr(this, n).get(n);
}
function du(n) {
  return qr(this, n).has(n);
}
function gu(n, t) {
  var e = qr(this, n), r = e.size;
  return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
}
function Ee(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
Ee.prototype.clear = cu;
Ee.prototype.delete = hu;
Ee.prototype.get = fu;
Ee.prototype.has = du;
Ee.prototype.set = gu;
function lo(n, t) {
  for (var e = -1, r = t.length, s = n.length; ++e < r; )
    n[s + e] = t[e];
  return n;
}
var Li = io(Object.getPrototypeOf, Object), pu = "[object Object]", mu = Function.prototype, bu = Object.prototype, oo = mu.toString, yu = bu.hasOwnProperty, vu = oo.call(Object);
function Eu(n) {
  if (!Ht(n) || Xe(n) != pu)
    return !1;
  var t = Li(n);
  if (t === null)
    return !0;
  var e = yu.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && oo.call(e) == vu;
}
function Au() {
  this.__data__ = new Kt(), this.size = 0;
}
function Nu(n) {
  var t = this.__data__, e = t.delete(n);
  return this.size = t.size, e;
}
function wu(n) {
  return this.__data__.get(n);
}
function Tu(n) {
  return this.__data__.has(n);
}
var xu = 200;
function Lu(n, t) {
  var e = this.__data__;
  if (e instanceof Kt) {
    var r = e.__data__;
    if (!Ln || r.length < xu - 1)
      return r.push([n, t]), this.size = ++e.size, this;
    e = this.__data__ = new Ee(r);
  }
  return e.set(n, t), this.size = e.size, this;
}
function Ct(n) {
  var t = this.__data__ = new Kt(n);
  this.size = t.size;
}
Ct.prototype.clear = Au;
Ct.prototype.delete = Nu;
Ct.prototype.get = wu;
Ct.prototype.has = Tu;
Ct.prototype.set = Lu;
function Su(n, t) {
  return n && kn(t, xi(t), n);
}
function _u(n, t) {
  return n && kn(t, Rn(t), n);
}
var ao = typeof exports == "object" && exports && !exports.nodeType && exports, el = ao && typeof module == "object" && module && !module.nodeType && module, Ou = el && el.exports === ao, nl = Ou ? Bt.Buffer : void 0, rl = nl ? nl.allocUnsafe : void 0;
function co(n, t) {
  if (t)
    return n.slice();
  var e = n.length, r = rl ? rl(e) : new n.constructor(e);
  return n.copy(r), r;
}
function qu(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, s = 0, i = []; ++e < r; ) {
    var l = n[e];
    t(l, e, n) && (i[s++] = l);
  }
  return i;
}
function uo() {
  return [];
}
var Cu = Object.prototype, Iu = Cu.propertyIsEnumerable, sl = Object.getOwnPropertySymbols, Si = sl ? function(n) {
  return n == null ? [] : (n = Object(n), qu(sl(n), function(t) {
    return Iu.call(n, t);
  }));
} : uo;
function ku(n, t) {
  return kn(n, Si(n), t);
}
var Ru = Object.getOwnPropertySymbols, ho = Ru ? function(n) {
  for (var t = []; n; )
    lo(t, Si(n)), n = Li(n);
  return t;
} : uo;
function Bu(n, t) {
  return kn(n, ho(n), t);
}
function fo(n, t, e) {
  var r = t(n);
  return pe(n) ? r : lo(r, e(n));
}
function Xs(n) {
  return fo(n, xi, Si);
}
function Mu(n) {
  return fo(n, Rn, ho);
}
var Ys = ve(Bt, "DataView"), Qs = ve(Bt, "Promise"), Js = ve(Bt, "Set"), il = "[object Map]", $u = "[object Object]", ll = "[object Promise]", ol = "[object Set]", al = "[object WeakMap]", cl = "[object DataView]", Du = ye(Ys), ju = ye(Ln), Pu = ye(Qs), Uu = ye(Js), Fu = ye(Ws), Et = Xe;
(Ys && Et(new Ys(new ArrayBuffer(1))) != cl || Ln && Et(new Ln()) != il || Qs && Et(Qs.resolve()) != ll || Js && Et(new Js()) != ol || Ws && Et(new Ws()) != al) && (Et = function(n) {
  var t = Xe(n), e = t == $u ? n.constructor : void 0, r = e ? ye(e) : "";
  if (r)
    switch (r) {
      case Du:
        return cl;
      case ju:
        return il;
      case Pu:
        return ll;
      case Uu:
        return ol;
      case Fu:
        return al;
    }
  return t;
});
var Hu = Object.prototype, zu = Hu.hasOwnProperty;
function Gu(n) {
  var t = n.length, e = new n.constructor(t);
  return t && typeof n[0] == "string" && zu.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
var wr = Bt.Uint8Array;
function _i(n) {
  var t = new n.constructor(n.byteLength);
  return new wr(t).set(new wr(n)), t;
}
function Ku(n, t) {
  var e = t ? _i(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var Vu = /\w*$/;
function Wu(n) {
  var t = new n.constructor(n.source, Vu.exec(n));
  return t.lastIndex = n.lastIndex, t;
}
var ul = ne ? ne.prototype : void 0, hl = ul ? ul.valueOf : void 0;
function Zu(n) {
  return hl ? Object(hl.call(n)) : {};
}
function go(n, t) {
  var e = t ? _i(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
var Xu = "[object Boolean]", Yu = "[object Date]", Qu = "[object Map]", Ju = "[object Number]", th = "[object RegExp]", eh = "[object Set]", nh = "[object String]", rh = "[object Symbol]", sh = "[object ArrayBuffer]", ih = "[object DataView]", lh = "[object Float32Array]", oh = "[object Float64Array]", ah = "[object Int8Array]", ch = "[object Int16Array]", uh = "[object Int32Array]", hh = "[object Uint8Array]", fh = "[object Uint8ClampedArray]", dh = "[object Uint16Array]", gh = "[object Uint32Array]";
function ph(n, t, e) {
  var r = n.constructor;
  switch (t) {
    case sh:
      return _i(n);
    case Xu:
    case Yu:
      return new r(+n);
    case ih:
      return Ku(n, e);
    case lh:
    case oh:
    case ah:
    case ch:
    case uh:
    case hh:
    case fh:
    case dh:
    case gh:
      return go(n, e);
    case Qu:
      return new r();
    case Ju:
    case nh:
      return new r(n);
    case th:
      return Wu(n);
    case eh:
      return new r();
    case rh:
      return Zu(n);
  }
}
function po(n) {
  return typeof n.constructor == "function" && !Ni(n) ? Ma(Li(n)) : {};
}
var mh = "[object Map]";
function bh(n) {
  return Ht(n) && Et(n) == mh;
}
var fl = Ke && Ke.isMap, yh = fl ? wi(fl) : bh, vh = "[object Set]";
function Eh(n) {
  return Ht(n) && Et(n) == vh;
}
var dl = Ke && Ke.isSet, Ah = dl ? wi(dl) : Eh, Nh = 1, wh = 2, Th = 4, mo = "[object Arguments]", xh = "[object Array]", Lh = "[object Boolean]", Sh = "[object Date]", _h = "[object Error]", bo = "[object Function]", Oh = "[object GeneratorFunction]", qh = "[object Map]", Ch = "[object Number]", yo = "[object Object]", Ih = "[object RegExp]", kh = "[object Set]", Rh = "[object String]", Bh = "[object Symbol]", Mh = "[object WeakMap]", $h = "[object ArrayBuffer]", Dh = "[object DataView]", jh = "[object Float32Array]", Ph = "[object Float64Array]", Uh = "[object Int8Array]", Fh = "[object Int16Array]", Hh = "[object Int32Array]", zh = "[object Uint8Array]", Gh = "[object Uint8ClampedArray]", Kh = "[object Uint16Array]", Vh = "[object Uint32Array]", P = {};
P[mo] = P[xh] = P[$h] = P[Dh] = P[Lh] = P[Sh] = P[jh] = P[Ph] = P[Uh] = P[Fh] = P[Hh] = P[qh] = P[Ch] = P[yo] = P[Ih] = P[kh] = P[Rh] = P[Bh] = P[zh] = P[Gh] = P[Kh] = P[Vh] = !0;
P[_h] = P[bo] = P[Mh] = !1;
function vr(n, t, e, r, s, i) {
  var l, a = t & Nh, c = t & wh, h = t & Th;
  if (l !== void 0)
    return l;
  if (!se(n))
    return n;
  var d = pe(n);
  if (d) {
    if (l = Gu(n), !a)
      return Yl(n, l);
  } else {
    var m = Et(n), g = m == bo || m == Oh;
    if (Tn(n))
      return co(n, a);
    if (m == yo || m == mo || g && !s) {
      if (l = c || g ? {} : po(n), !a)
        return c ? Bu(n, _u(l, n)) : ku(n, Su(l, n));
    } else {
      if (!P[m])
        return s ? n : {};
      l = ph(n, m, a);
    }
  }
  i || (i = new Ct());
  var p = i.get(n);
  if (p)
    return p;
  i.set(n, l), Ah(n) ? n.forEach(function(y) {
    l.add(vr(y, t, e, y, n, i));
  }) : yh(n) && n.forEach(function(y, E) {
    l.set(E, vr(y, t, e, E, n, i));
  });
  var b = h ? c ? Mu : Xs : c ? Rn : xi, v = d ? void 0 : b(n);
  return Ga(v || n, function(y, E) {
    v && (E = y, y = n[E]), Jl(l, E, vr(y, t, e, E, n, i));
  }), l;
}
var Wh = 1, Zh = 4;
function He(n) {
  return vr(n, Wh | Zh);
}
var Xh = "__lodash_hash_undefined__";
function Yh(n) {
  return this.__data__.set(n, Xh), this;
}
function Qh(n) {
  return this.__data__.has(n);
}
function Tr(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new Ee(); ++t < e; )
    this.add(n[t]);
}
Tr.prototype.add = Tr.prototype.push = Yh;
Tr.prototype.has = Qh;
function Jh(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r; )
    if (t(n[e], e, n))
      return !0;
  return !1;
}
function tf(n, t) {
  return n.has(t);
}
var ef = 1, nf = 2;
function vo(n, t, e, r, s, i) {
  var l = e & ef, a = n.length, c = t.length;
  if (a != c && !(l && c > a))
    return !1;
  var h = i.get(n), d = i.get(t);
  if (h && d)
    return h == t && d == n;
  var m = -1, g = !0, p = e & nf ? new Tr() : void 0;
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
      if (!Jh(t, function(E, w) {
        if (!tf(p, w) && (b === E || s(b, E, e, r, i)))
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
function rf(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r, s) {
    e[++t] = [s, r];
  }), e;
}
function sf(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r) {
    e[++t] = r;
  }), e;
}
var lf = 1, of = 2, af = "[object Boolean]", cf = "[object Date]", uf = "[object Error]", hf = "[object Map]", ff = "[object Number]", df = "[object RegExp]", gf = "[object Set]", pf = "[object String]", mf = "[object Symbol]", bf = "[object ArrayBuffer]", yf = "[object DataView]", gl = ne ? ne.prototype : void 0, Bs = gl ? gl.valueOf : void 0;
function vf(n, t, e, r, s, i, l) {
  switch (e) {
    case yf:
      if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
        return !1;
      n = n.buffer, t = t.buffer;
    case bf:
      return !(n.byteLength != t.byteLength || !i(new wr(n), new wr(t)));
    case af:
    case cf:
    case ff:
      return In(+n, +t);
    case uf:
      return n.name == t.name && n.message == t.message;
    case df:
    case pf:
      return n == t + "";
    case hf:
      var a = rf;
    case gf:
      var c = r & lf;
      if (a || (a = sf), n.size != t.size && !c)
        return !1;
      var h = l.get(n);
      if (h)
        return h == t;
      r |= of, l.set(n, t);
      var d = vo(a(n), a(t), r, s, i, l);
      return l.delete(n), d;
    case mf:
      if (Bs)
        return Bs.call(n) == Bs.call(t);
  }
  return !1;
}
var Ef = 1, Af = Object.prototype, Nf = Af.hasOwnProperty;
function wf(n, t, e, r, s, i) {
  var l = e & Ef, a = Xs(n), c = a.length, h = Xs(t), d = h.length;
  if (c != d && !l)
    return !1;
  for (var m = c; m--; ) {
    var g = a[m];
    if (!(l ? g in t : Nf.call(t, g)))
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
var Tf = 1, pl = "[object Arguments]", ml = "[object Array]", dr = "[object Object]", xf = Object.prototype, bl = xf.hasOwnProperty;
function Lf(n, t, e, r, s, i) {
  var l = pe(n), a = pe(t), c = l ? ml : Et(n), h = a ? ml : Et(t);
  c = c == pl ? dr : c, h = h == pl ? dr : h;
  var d = c == dr, m = h == dr, g = c == h;
  if (g && Tn(n)) {
    if (!Tn(t))
      return !1;
    l = !0, d = !1;
  }
  if (g && !d)
    return i || (i = new Ct()), l || Ti(n) ? vo(n, t, e, r, s, i) : vf(n, t, c, e, r, s, i);
  if (!(e & Tf)) {
    var p = d && bl.call(n, "__wrapped__"), b = m && bl.call(t, "__wrapped__");
    if (p || b) {
      var v = p ? n.value() : n, y = b ? t.value() : t;
      return i || (i = new Ct()), s(v, y, e, r, i);
    }
  }
  return g ? (i || (i = new Ct()), wf(n, t, e, r, s, i)) : !1;
}
function Eo(n, t, e, r, s) {
  return n === t ? !0 : n == null || t == null || !Ht(n) && !Ht(t) ? n !== n && t !== t : Lf(n, t, e, r, Eo, s);
}
function Sf(n) {
  return function(t, e, r) {
    for (var s = -1, i = Object(t), l = r(t), a = l.length; a--; ) {
      var c = l[++s];
      if (e(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var _f = Sf();
function ti(n, t, e) {
  (e !== void 0 && !In(n[t], e) || e === void 0 && !(t in n)) && Ai(n, t, e);
}
function Of(n) {
  return Ht(n) && _r(n);
}
function ei(n, t) {
  if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
    return n[t];
}
function qf(n) {
  return kn(n, Rn(n));
}
function Cf(n, t, e, r, s, i, l) {
  var a = ei(n, e), c = ei(t, e), h = l.get(c);
  if (h) {
    ti(n, e, h);
    return;
  }
  var d = i ? i(a, c, e + "", n, t, l) : void 0, m = d === void 0;
  if (m) {
    var g = pe(c), p = !g && Tn(c), b = !g && !p && Ti(c);
    d = c, g || p || b ? pe(a) ? d = a : Of(a) ? d = Yl(a) : p ? (m = !1, d = co(c, !0)) : b ? (m = !1, d = go(c, !0)) : d = [] : Eu(c) || Zs(c) ? (d = a, Zs(a) ? d = qf(a) : (!se(a) || Ei(a)) && (d = po(c))) : m = !1;
  }
  m && (l.set(c, d), s(d, c, r, i, l), l.delete(c)), ti(n, e, d);
}
function Ao(n, t, e, r, s) {
  n !== t && _f(t, function(i, l) {
    if (s || (s = new Ct()), se(i))
      Cf(n, t, l, e, Ao, r, s);
    else {
      var a = r ? r(ei(n, l), i, l + "", n, t, s) : void 0;
      a === void 0 && (a = i), ti(n, l, a);
    }
  }, Rn);
}
function Oi(n, t) {
  return Eo(n, t);
}
var ee = tc(function(n, t, e) {
  Ao(n, t, e);
}), q = /* @__PURE__ */ ((n) => (n[n.TYPE = 3] = "TYPE", n[n.LEVEL = 12] = "LEVEL", n[n.ATTRIBUTE = 13] = "ATTRIBUTE", n[n.BLOT = 14] = "BLOT", n[n.INLINE = 7] = "INLINE", n[n.BLOCK = 11] = "BLOCK", n[n.BLOCK_BLOT = 10] = "BLOCK_BLOT", n[n.INLINE_BLOT = 6] = "INLINE_BLOT", n[n.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n[n.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n[n.ANY = 15] = "ANY", n))(q || {});
class kt {
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
class ze extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const No = class ni {
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
      throw new ze(`Unable to create ${e} blot`);
    const i = s, l = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(r)
    ), a = new i(t, l, r);
    return ni.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return ni.find(t, e);
  }
  query(t, e = q.ANY) {
    let r;
    return typeof t == "string" ? r = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? r = this.types.text : typeof t == "number" ? t & q.LEVEL & q.BLOCK ? r = this.types.block : t & q.LEVEL & q.INLINE && (r = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((s) => (r = this.classes[s], !!r)), r = r || this.tags[t.tagName]), r == null ? null : "scope" in r && e & q.LEVEL & r.scope && e & q.TYPE & r.scope ? r : null;
  }
  register(...t) {
    return t.map((e) => {
      const r = "blotName" in e, s = "attrName" in e;
      if (!r && !s)
        throw new ze("Invalid definition");
      if (r && e.blotName === "abstract")
        throw new ze("Cannot register abstract class");
      const i = r ? e.blotName : s ? e.attrName : void 0;
      return this.types[i] = e, s ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : r && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((l) => l.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((l) => {
        (this.tags[l] == null || e.className == null) && (this.tags[l] = e);
      }))), e;
    });
  }
};
No.blots = /* @__PURE__ */ new WeakMap();
let be = No;
function yl(n, t) {
  return (n.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class If extends kt {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    yl(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (yl(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const Tt = If;
function Ms(n) {
  const t = n.split("-"), e = t.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  return t[0] + e;
}
class kf extends kt {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[Ms(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[Ms(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[Ms(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const ie = kf;
class Rf {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = be.find(this.domNode);
    if (t == null)
      return;
    const e = kt.keys(this.domNode), r = Tt.keys(this.domNode), s = ie.keys(this.domNode);
    e.concat(r).concat(s).forEach((i) => {
      const l = t.scroll.query(i, q.ATTRIBUTE);
      l instanceof kt && (this.attributes[l.attrName] = l);
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
const Cr = Rf, wo = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, be.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new ze("Blot definition missing tagName");
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
    this.parent != null && this.parent.removeChild(this), be.blots.delete(this.domNode);
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
      throw new ze(`Cannot wrap ${t}`);
    return r.appendChild(this), r;
  }
};
wo.blotName = "abstract";
let To = wo;
const xo = class extends To {
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
xo.scope = q.INLINE_BLOT;
let Bf = xo;
const Q = Bf;
class Mf {
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
function vl(n, t) {
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
const Lo = class Xt extends To {
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
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, Xt.uiClass && this.uiNode.classList.add(Xt.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new Mf(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = vl(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof ze)
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
    return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, s] : r instanceof Xt ? r.descendant(t, s) : [null, -1];
  }
  descendants(t, e = 0, r = Number.MAX_VALUE) {
    let s = [], i = r;
    return this.children.forEachAt(
      e,
      r,
      (l, a, c) => {
        (t.blotName == null && t(l) || t.blotName != null && l instanceof t) && s.push(l), l instanceof Xt && (s = s.concat(
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
      ) || (e.statics.scope === q.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof Xt ? e.unwrap() : e.remove());
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
    return r instanceof Xt ? i.concat(r.path(s, e)) : (r != null && i.push([r, s]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return r instanceof Xt && this.moveChildren(r), super.replaceWith(r);
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
      const a = vl(i, this.scroll);
      (a.next !== l || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, l || void 0));
    }), this.enforceAllowedChildren();
  }
};
Lo.uiClass = "";
let $f = Lo;
const Nt = $f;
function Df(n, t) {
  if (Object.keys(n).length !== Object.keys(t).length)
    return !1;
  for (const e in n)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
const Me = class $e extends Nt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query($e.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Cr(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((r) => {
        r instanceof $e || (r = r.wrap($e.blotName, !0)), this.attributes.copy(r);
      }), this.unwrap();
    else {
      const r = this.scroll.query(t, q.INLINE);
      if (r == null)
        return;
      r instanceof kt ? this.attributes.attribute(r, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
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
    r instanceof $e && r.prev === this && Df(e, r.formats()) && (r.moveChildren(this), r.remove());
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
    return r instanceof $e && this.attributes.move(r), r;
  }
};
Me.allowedChildren = [Me, Q], Me.blotName = "inline", Me.scope = q.INLINE_BLOT, Me.tagName = "SPAN";
let jf = Me;
const qi = jf, De = class ri extends Nt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(ri.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Cr(this.domNode);
  }
  format(t, e) {
    const r = this.scroll.query(t, q.BLOCK);
    r != null && (r instanceof kt ? this.attributes.attribute(r, e) : t === this.statics.blotName && !e ? this.replaceWith(ri.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
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
De.blotName = "block", De.scope = q.BLOCK_BLOT, De.tagName = "P", De.allowedChildren = [
  qi,
  De,
  Q
];
let Pf = De;
const Sn = Pf, si = class extends Nt {
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
si.blotName = "container", si.scope = q.BLOCK_BLOT;
let Uf = si;
const Ir = Uf;
class Ff extends Q {
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
const st = Ff, Hf = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, zf = 100, je = class extends Nt {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((r) => {
      this.update(r);
    }), this.observer.observe(this.domNode, Hf), this.attach();
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
      r.has(c.domNode) && (c instanceof Nt && c.children.forEach(l), r.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= zf)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const d = this.find(h.target, !0);
        d != null && (d.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((m) => {
          const g = this.find(m, !1);
          i(g, !1), g instanceof Nt && g.children.forEach((p) => {
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
je.blotName = "scroll", je.defaultChild = Sn, je.allowedChildren = [Sn, Ir], je.scope = q.BLOCK_BLOT, je.tagName = "DIV";
let Gf = je;
const Ci = Gf, ii = class So extends Q {
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
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof So && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
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
ii.blotName = "text", ii.scope = q.INLINE_BLOT;
let Kf = ii;
const xr = Kf, Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: kt,
  AttributorStore: Cr,
  BlockBlot: Sn,
  ClassAttributor: Tt,
  ContainerBlot: Ir,
  EmbedBlot: st,
  InlineBlot: qi,
  LeafBlot: Q,
  ParentBlot: Nt,
  Registry: be,
  Scope: q,
  ScrollBlot: Ci,
  StyleAttributor: ie,
  TextBlot: xr
}, Symbol.toStringTag, { value: "Module" }));
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _o(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var li = { exports: {} }, it = -1, et = 1, G = 0;
function _n(n, t, e, r, s) {
  if (n === t)
    return n ? [[G, n]] : [];
  if (e != null) {
    var i = nd(n, t, e);
    if (i)
      return i;
  }
  var l = Ii(n, t), a = n.substring(0, l);
  n = n.substring(l), t = t.substring(l), l = kr(n, t);
  var c = n.substring(n.length - l);
  n = n.substring(0, n.length - l), t = t.substring(0, t.length - l);
  var h = Wf(n, t);
  return a && h.unshift([G, a]), c && h.push([G, c]), ki(h, s), r && Yf(h), h;
}
function Wf(n, t) {
  var e;
  if (!n)
    return [[et, t]];
  if (!t)
    return [[it, n]];
  var r = n.length > t.length ? n : t, s = n.length > t.length ? t : n, i = r.indexOf(s);
  if (i !== -1)
    return e = [
      [et, r.substring(0, i)],
      [G, s],
      [et, r.substring(i + s.length)]
    ], n.length > t.length && (e[0][0] = e[2][0] = it), e;
  if (s.length === 1)
    return [
      [it, n],
      [et, t]
    ];
  var l = Xf(n, t);
  if (l) {
    var a = l[0], c = l[1], h = l[2], d = l[3], m = l[4], g = _n(a, h), p = _n(c, d);
    return g.concat([[G, m]], p);
  }
  return Zf(n, t);
}
function Zf(n, t) {
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
            return El(n, t, T, _);
        }
      }
    }
    for (var R = -y + b; R <= y - v; R += 2) {
      var L = i + R, I;
      R === -y || R !== y && c[L - 1] < c[L + 1] ? I = c[L + 1] : I = c[L - 1] + 1;
      for (var U = I - R; I < e && U < r && n.charAt(e - I - 1) === t.charAt(r - U - 1); )
        I++, U++;
      if (c[L] = I, I > e)
        v += 2;
      else if (U > r)
        b += 2;
      else if (!m) {
        var w = i + d - R;
        if (w >= 0 && w < l && a[w] !== -1) {
          var T = a[w], _ = i + T - w;
          if (I = e - I, T >= I)
            return El(n, t, T, _);
        }
      }
    }
  }
  return [
    [it, n],
    [et, t]
  ];
}
function El(n, t, e, r) {
  var s = n.substring(0, e), i = t.substring(0, r), l = n.substring(e), a = t.substring(r), c = _n(s, i), h = _n(l, a);
  return c.concat(h);
}
function Ii(n, t) {
  if (!n || !t || n.charAt(0) !== t.charAt(0))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(i, s) == t.substring(i, s) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return Oo(n.charCodeAt(s - 1)) && s--, s;
}
function Al(n, t) {
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
function kr(n, t) {
  if (!n || !t || n.slice(-1) !== t.slice(-1))
    return 0;
  for (var e = 0, r = Math.min(n.length, t.length), s = r, i = 0; e < s; )
    n.substring(n.length - s, n.length - i) == t.substring(t.length - s, t.length - i) ? (e = s, i = e) : r = s, s = Math.floor((r - e) / 2 + e);
  return qo(n.charCodeAt(n.length - s)) && s--, s;
}
function Xf(n, t) {
  var e = n.length > t.length ? n : t, r = n.length > t.length ? t : n;
  if (e.length < 4 || r.length * 2 < e.length)
    return null;
  function s(p, b, v) {
    for (var y = p.substring(v, v + Math.floor(p.length / 4)), E = -1, w = "", T, _, L, I; (E = b.indexOf(y, E + 1)) !== -1; ) {
      var R = Ii(
        p.substring(v),
        b.substring(E)
      ), U = kr(
        p.substring(0, v),
        b.substring(0, E)
      );
      w.length < U + R && (w = b.substring(E - U, E) + b.substring(E, E + R), T = p.substring(0, v - U), _ = p.substring(v + R), L = b.substring(0, E - U), I = b.substring(E + R));
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
function Yf(n) {
  for (var t = !1, e = [], r = 0, s = null, i = 0, l = 0, a = 0, c = 0, h = 0; i < n.length; )
    n[i][0] == G ? (e[r++] = i, l = c, a = h, c = 0, h = 0, s = n[i][1]) : (n[i][0] == et ? c += n[i][1].length : h += n[i][1].length, s && s.length <= Math.max(l, a) && s.length <= Math.max(c, h) && (n.splice(e[r - 1], 0, [
      it,
      s
    ]), n[e[r - 1] + 1][0] = et, r--, r--, i = r > 0 ? e[r - 1] : -1, l = 0, a = 0, c = 0, h = 0, s = null, t = !0)), i++;
  for (t && ki(n), td(n), i = 1; i < n.length; ) {
    if (n[i - 1][0] == it && n[i][0] == et) {
      var d = n[i - 1][1], m = n[i][1], g = Al(d, m), p = Al(m, d);
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
      ), n[i + 1][0] = it, n[i + 1][1] = d.substring(p), i++), i++;
    }
    i++;
  }
}
var Nl = /[^a-zA-Z0-9]/, wl = /\s/, Tl = /[\r\n]/, Qf = /\n\r?\n$/, Jf = /^\r?\n\r?\n/;
function td(n) {
  function t(p, b) {
    if (!p || !b)
      return 6;
    var v = p.charAt(p.length - 1), y = b.charAt(0), E = v.match(Nl), w = y.match(Nl), T = E && v.match(wl), _ = w && y.match(wl), L = T && v.match(Tl), I = _ && y.match(Tl), R = L && p.match(Qf), U = I && b.match(Jf);
    return R || U ? 5 : L || I ? 4 : E && !T && _ ? 3 : T || _ ? 2 : E || w ? 1 : 0;
  }
  for (var e = 1; e < n.length - 1; ) {
    if (n[e - 1][0] == G && n[e + 1][0] == G) {
      var r = n[e - 1][1], s = n[e][1], i = n[e + 1][1], l = kr(r, s);
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
function ki(n, t) {
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
      case it:
        r++, i += n[e][1], e++;
        break;
      case G:
        var c = e - s - r - 1;
        if (t) {
          if (c >= 0 && Io(n[c][1])) {
            var h = n[c][1].slice(-1);
            if (n[c][1] = n[c][1].slice(
              0,
              -1
            ), i = h + i, l = h + l, !n[c][1]) {
              n.splice(c, 1), e--;
              var d = c - 1;
              n[d] && n[d][0] === et && (s++, l = n[d][1] + l, d--), n[d] && n[d][0] === it && (r++, i = n[d][1] + i, d--), c = d;
            }
          }
          if (Co(n[e][1])) {
            var h = n[e][1].charAt(0);
            n[e][1] = n[e][1].slice(1), i += h, l += h;
          }
        }
        if (e < n.length - 1 && !n[e][1]) {
          n.splice(e, 1);
          break;
        }
        if (i.length > 0 || l.length > 0) {
          i.length > 0 && l.length > 0 && (a = Ii(l, i), a !== 0 && (c >= 0 ? n[c][1] += l.substring(
            0,
            a
          ) : (n.splice(0, 0, [
            G,
            l.substring(0, a)
          ]), e++), l = l.substring(a), i = i.substring(a)), a = kr(l, i), a !== 0 && (n[e][1] = l.substring(l.length - a) + n[e][1], l = l.substring(
            0,
            l.length - a
          ), i = i.substring(
            0,
            i.length - a
          )));
          var m = s + r;
          i.length === 0 && l.length === 0 ? (n.splice(e - m, m), e = e - m) : i.length === 0 ? (n.splice(e - m, m, [et, l]), e = e - m + 1) : l.length === 0 ? (n.splice(e - m, m, [it, i]), e = e - m + 1) : (n.splice(
            e - m,
            m,
            [it, i],
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
  g && ki(n, t);
}
function Oo(n) {
  return n >= 55296 && n <= 56319;
}
function qo(n) {
  return n >= 56320 && n <= 57343;
}
function Co(n) {
  return qo(n.charCodeAt(0));
}
function Io(n) {
  return Oo(n.charCodeAt(n.length - 1));
}
function ed(n) {
  for (var t = [], e = 0; e < n.length; e++)
    n[e][1].length > 0 && t.push(n[e]);
  return t;
}
function $s(n, t, e, r) {
  return Io(n) || Co(r) ? null : ed([
    [G, n],
    [it, t],
    [et, e],
    [G, r]
  ]);
}
function nd(n, t, e) {
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
      return $s(v, E, w, h);
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
      return $s(c, E, w, L);
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
      return $s(v, E, w, L);
    }
  return null;
}
function Rr(n, t, e, r) {
  return _n(n, t, e, r, !0);
}
Rr.INSERT = et;
Rr.DELETE = it;
Rr.EQUAL = G;
var rd = Rr, Lr = { exports: {} };
Lr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", l = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", d = "[object Function]", m = "[object GeneratorFunction]", g = "[object Map]", p = "[object Number]", b = "[object Object]", v = "[object Promise]", y = "[object RegExp]", E = "[object Set]", w = "[object String]", T = "[object Symbol]", _ = "[object WeakMap]", L = "[object ArrayBuffer]", I = "[object DataView]", R = "[object Float32Array]", U = "[object Float64Array]", $t = "[object Int8Array]", Vt = "[object Int16Array]", le = "[object Int32Array]", oe = "[object Uint8Array]", jn = "[object Uint8ClampedArray]", Pn = "[object Uint16Array]", Un = "[object Uint32Array]", jr = /[\\^$.*+?()[\]{}|]/g, Pr = /\w*$/, Ur = /^\[object .+?Constructor\]$/, Fr = /^(?:0|[1-9]\d*)$/, D = {};
  D[i] = D[l] = D[L] = D[I] = D[a] = D[c] = D[R] = D[U] = D[$t] = D[Vt] = D[le] = D[g] = D[p] = D[b] = D[y] = D[E] = D[w] = D[T] = D[oe] = D[jn] = D[Pn] = D[Un] = !0, D[h] = D[d] = D[_] = !1;
  var Hr = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, zr = typeof self == "object" && self && self.Object === Object && self, dt = Hr || zr || Function("return this")(), Fn = t && !t.nodeType && t, j = Fn && !0 && n && !n.nodeType && n, Hn = j && j.exports === Fn;
  function Gr(o, u) {
    return o.set(u[0], u[1]), o;
  }
  function gt(o, u) {
    return o.add(u), o;
  }
  function zn(o, u) {
    for (var f = -1, A = o ? o.length : 0; ++f < A && u(o[f], f, o) !== !1; )
      ;
    return o;
  }
  function Gn(o, u) {
    for (var f = -1, A = u.length, k = o.length; ++f < A; )
      o[k + f] = u[f];
    return o;
  }
  function Ye(o, u, f, A) {
    for (var k = -1, C = o ? o.length : 0; ++k < C; )
      f = u(f, o[k], k, o);
    return f;
  }
  function Qe(o, u) {
    for (var f = -1, A = Array(o); ++f < o; )
      A[f] = u(f);
    return A;
  }
  function Kn(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Je(o) {
    var u = !1;
    if (o != null && typeof o.toString != "function")
      try {
        u = !!(o + "");
      } catch {
      }
    return u;
  }
  function Vn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A, k) {
      f[++u] = [k, A];
    }), f;
  }
  function tn(o, u) {
    return function(f) {
      return o(u(f));
    };
  }
  function Wn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A) {
      f[++u] = A;
    }), f;
  }
  var Kr = Array.prototype, Vr = Function.prototype, Te = Object.prototype, en = dt["__core-js_shared__"], Zn = function() {
    var o = /[^.]+$/.exec(en && en.keys && en.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Xn = Vr.toString, Lt = Te.hasOwnProperty, xe = Te.toString, Wr = RegExp(
    "^" + Xn.call(Lt).replace(jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ae = Hn ? dt.Buffer : void 0, Le = dt.Symbol, nn = dt.Uint8Array, lt = tn(Object.getPrototypeOf, Object), Yn = Object.create, Qn = Te.propertyIsEnumerable, Zr = Kr.splice, rn = Object.getOwnPropertySymbols, Se = ae ? ae.isBuffer : void 0, Jn = tn(Object.keys, Object), _e = mt(dt, "DataView"), ce = mt(dt, "Map"), pt = mt(dt, "Promise"), Oe = mt(dt, "Set"), sn = mt(dt, "WeakMap"), ue = mt(Object, "create"), ln = tt(_e), he = tt(ce), on = tt(pt), an = tt(Oe), cn = tt(sn), Wt = Le ? Le.prototype : void 0, tr = Wt ? Wt.valueOf : void 0;
  function Dt(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Xr() {
    this.__data__ = ue ? ue(null) : {};
  }
  function Yr(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function Qr(o) {
    var u = this.__data__;
    if (ue) {
      var f = u[o];
      return f === r ? void 0 : f;
    }
    return Lt.call(u, o) ? u[o] : void 0;
  }
  function er(o) {
    var u = this.__data__;
    return ue ? u[o] !== void 0 : Lt.call(u, o);
  }
  function un(o, u) {
    var f = this.__data__;
    return f[o] = ue && u === void 0 ? r : u, this;
  }
  Dt.prototype.clear = Xr, Dt.prototype.delete = Yr, Dt.prototype.get = Qr, Dt.prototype.has = er, Dt.prototype.set = un;
  function K(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Jr() {
    this.__data__ = [];
  }
  function ts(o) {
    var u = this.__data__, f = Ce(u, o);
    if (f < 0)
      return !1;
    var A = u.length - 1;
    return f == A ? u.pop() : Zr.call(u, f, 1), !0;
  }
  function es(o) {
    var u = this.__data__, f = Ce(u, o);
    return f < 0 ? void 0 : u[f][1];
  }
  function ns(o) {
    return Ce(this.__data__, o) > -1;
  }
  function rs(o, u) {
    var f = this.__data__, A = Ce(f, o);
    return A < 0 ? f.push([o, u]) : f[A][1] = u, this;
  }
  K.prototype.clear = Jr, K.prototype.delete = ts, K.prototype.get = es, K.prototype.has = ns, K.prototype.set = rs;
  function Z(o) {
    var u = -1, f = o ? o.length : 0;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function ss() {
    this.__data__ = {
      hash: new Dt(),
      map: new (ce || K)(),
      string: new Dt()
    };
  }
  function is(o) {
    return de(this, o).delete(o);
  }
  function ls(o) {
    return de(this, o).get(o);
  }
  function os(o) {
    return de(this, o).has(o);
  }
  function as(o, u) {
    return de(this, o).set(o, u), this;
  }
  Z.prototype.clear = ss, Z.prototype.delete = is, Z.prototype.get = ls, Z.prototype.has = os, Z.prototype.set = as;
  function nt(o) {
    this.__data__ = new K(o);
  }
  function cs() {
    this.__data__ = new K();
  }
  function us(o) {
    return this.__data__.delete(o);
  }
  function hs(o) {
    return this.__data__.get(o);
  }
  function fs(o) {
    return this.__data__.has(o);
  }
  function ds(o, u) {
    var f = this.__data__;
    if (f instanceof K) {
      var A = f.__data__;
      if (!ce || A.length < e - 1)
        return A.push([o, u]), this;
      f = this.__data__ = new Z(A);
    }
    return f.set(o, u), this;
  }
  nt.prototype.clear = cs, nt.prototype.delete = us, nt.prototype.get = hs, nt.prototype.has = fs, nt.prototype.set = ds;
  function qe(o, u) {
    var f = gn(o) || ke(o) ? Qe(o.length, String) : [], A = f.length, k = !!A;
    for (var C in o)
      Lt.call(o, C) && !(k && (C == "length" || Ss(C, A))) && f.push(C);
    return f;
  }
  function nr(o, u, f) {
    var A = o[u];
    (!(Lt.call(o, u) && or(A, f)) || f === void 0 && !(u in o)) && (o[u] = f);
  }
  function Ce(o, u) {
    for (var f = o.length; f--; )
      if (or(o[f][0], u))
        return f;
    return -1;
  }
  function St(o, u) {
    return o && dn(u, mn(u), o);
  }
  function hn(o, u, f, A, k, C, M) {
    var B;
    if (A && (B = C ? A(o, k, C, M) : A(o)), B !== void 0)
      return B;
    if (!Ot(o))
      return o;
    var H = gn(o);
    if (H) {
      if (B = xs(o), !u)
        return Ns(o, B);
    } else {
      var $ = Pt(o), X = $ == d || $ == m;
      if (ar(o))
        return Ie(o, u);
      if ($ == b || $ == i || X && !C) {
        if (Je(o))
          return C ? o : {};
        if (B = _t(X ? {} : o), !u)
          return ws(o, St(B, o));
      } else {
        if (!D[$])
          return C ? o : {};
        B = Ls(o, $, hn, u);
      }
    }
    M || (M = new nt());
    var rt = M.get(o);
    if (rt)
      return rt;
    if (M.set(o, B), !H)
      var z = f ? Ts(o) : mn(o);
    return zn(z || o, function(Y, V) {
      z && (V = Y, Y = o[V]), nr(B, V, hn(Y, u, f, A, V, o, M));
    }), B;
  }
  function gs(o) {
    return Ot(o) ? Yn(o) : {};
  }
  function ps(o, u, f) {
    var A = u(o);
    return gn(o) ? A : Gn(A, f(o));
  }
  function ms(o) {
    return xe.call(o);
  }
  function bs(o) {
    if (!Ot(o) || Os(o))
      return !1;
    var u = pn(o) || Je(o) ? Wr : Ur;
    return u.test(tt(o));
  }
  function ys(o) {
    if (!ir(o))
      return Jn(o);
    var u = [];
    for (var f in Object(o))
      Lt.call(o, f) && f != "constructor" && u.push(f);
    return u;
  }
  function Ie(o, u) {
    if (u)
      return o.slice();
    var f = new o.constructor(o.length);
    return o.copy(f), f;
  }
  function fn(o) {
    var u = new o.constructor(o.byteLength);
    return new nn(u).set(new nn(o)), u;
  }
  function fe(o, u) {
    var f = u ? fn(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.byteLength);
  }
  function rr(o, u, f) {
    var A = u ? f(Vn(o), !0) : Vn(o);
    return Ye(A, Gr, new o.constructor());
  }
  function sr(o) {
    var u = new o.constructor(o.source, Pr.exec(o));
    return u.lastIndex = o.lastIndex, u;
  }
  function vs(o, u, f) {
    var A = u ? f(Wn(o), !0) : Wn(o);
    return Ye(A, gt, new o.constructor());
  }
  function Es(o) {
    return tr ? Object(tr.call(o)) : {};
  }
  function As(o, u) {
    var f = u ? fn(o.buffer) : o.buffer;
    return new o.constructor(f, o.byteOffset, o.length);
  }
  function Ns(o, u) {
    var f = -1, A = o.length;
    for (u || (u = Array(A)); ++f < A; )
      u[f] = o[f];
    return u;
  }
  function dn(o, u, f, A) {
    f || (f = {});
    for (var k = -1, C = u.length; ++k < C; ) {
      var M = u[k], B = void 0;
      nr(f, M, B === void 0 ? o[M] : B);
    }
    return f;
  }
  function ws(o, u) {
    return dn(o, jt(o), u);
  }
  function Ts(o) {
    return ps(o, mn, jt);
  }
  function de(o, u) {
    var f = o.__data__;
    return _s(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function mt(o, u) {
    var f = Kn(o, u);
    return bs(f) ? f : void 0;
  }
  var jt = rn ? tn(rn, Object) : Cs, Pt = ms;
  (_e && Pt(new _e(new ArrayBuffer(1))) != I || ce && Pt(new ce()) != g || pt && Pt(pt.resolve()) != v || Oe && Pt(new Oe()) != E || sn && Pt(new sn()) != _) && (Pt = function(o) {
    var u = xe.call(o), f = u == b ? o.constructor : void 0, A = f ? tt(f) : void 0;
    if (A)
      switch (A) {
        case ln:
          return I;
        case he:
          return g;
        case on:
          return v;
        case an:
          return E;
        case cn:
          return _;
      }
    return u;
  });
  function xs(o) {
    var u = o.length, f = o.constructor(u);
    return u && typeof o[0] == "string" && Lt.call(o, "index") && (f.index = o.index, f.input = o.input), f;
  }
  function _t(o) {
    return typeof o.constructor == "function" && !ir(o) ? gs(lt(o)) : {};
  }
  function Ls(o, u, f, A) {
    var k = o.constructor;
    switch (u) {
      case L:
        return fn(o);
      case a:
      case c:
        return new k(+o);
      case I:
        return fe(o, A);
      case R:
      case U:
      case $t:
      case Vt:
      case le:
      case oe:
      case jn:
      case Pn:
      case Un:
        return As(o, A);
      case g:
        return rr(o, A, f);
      case p:
      case w:
        return new k(o);
      case y:
        return sr(o);
      case E:
        return vs(o, A, f);
      case T:
        return Es(o);
    }
  }
  function Ss(o, u) {
    return u = u ?? s, !!u && (typeof o == "number" || Fr.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function _s(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function Os(o) {
    return !!Zn && Zn in o;
  }
  function ir(o) {
    var u = o && o.constructor, f = typeof u == "function" && u.prototype || Te;
    return o === f;
  }
  function tt(o) {
    if (o != null) {
      try {
        return Xn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function lr(o) {
    return hn(o, !0, !0);
  }
  function or(o, u) {
    return o === u || o !== o && u !== u;
  }
  function ke(o) {
    return qs(o) && Lt.call(o, "callee") && (!Qn.call(o, "callee") || xe.call(o) == i);
  }
  var gn = Array.isArray;
  function Re(o) {
    return o != null && cr(o.length) && !pn(o);
  }
  function qs(o) {
    return ur(o) && Re(o);
  }
  var ar = Se || Is;
  function pn(o) {
    var u = Ot(o) ? xe.call(o) : "";
    return u == d || u == m;
  }
  function cr(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= s;
  }
  function Ot(o) {
    var u = typeof o;
    return !!o && (u == "object" || u == "function");
  }
  function ur(o) {
    return !!o && typeof o == "object";
  }
  function mn(o) {
    return Re(o) ? qe(o) : ys(o);
  }
  function Cs() {
    return [];
  }
  function Is() {
    return !1;
  }
  n.exports = lr;
})(Lr, Lr.exports);
var ko = Lr.exports, Sr = { exports: {} };
Sr.exports;
(function(n, t) {
  var e = 200, r = "__lodash_hash_undefined__", s = 1, i = 2, l = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", d = "[object Boolean]", m = "[object Date]", g = "[object Error]", p = "[object Function]", b = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", E = "[object Null]", w = "[object Object]", T = "[object Promise]", _ = "[object Proxy]", L = "[object RegExp]", I = "[object Set]", R = "[object String]", U = "[object Symbol]", $t = "[object Undefined]", Vt = "[object WeakMap]", le = "[object ArrayBuffer]", oe = "[object DataView]", jn = "[object Float32Array]", Pn = "[object Float64Array]", Un = "[object Int8Array]", jr = "[object Int16Array]", Pr = "[object Int32Array]", Ur = "[object Uint8Array]", Fr = "[object Uint8ClampedArray]", D = "[object Uint16Array]", Hr = "[object Uint32Array]", zr = /[\\^$.*+?()[\]{}|]/g, dt = /^\[object .+?Constructor\]$/, Fn = /^(?:0|[1-9]\d*)$/, j = {};
  j[jn] = j[Pn] = j[Un] = j[jr] = j[Pr] = j[Ur] = j[Fr] = j[D] = j[Hr] = !0, j[a] = j[c] = j[le] = j[d] = j[oe] = j[m] = j[g] = j[p] = j[v] = j[y] = j[w] = j[L] = j[I] = j[R] = j[Vt] = !1;
  var Hn = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Gr = typeof self == "object" && self && self.Object === Object && self, gt = Hn || Gr || Function("return this")(), zn = t && !t.nodeType && t, Gn = zn && !0 && n && !n.nodeType && n, Ye = Gn && Gn.exports === zn, Qe = Ye && Hn.process, Kn = function() {
    try {
      return Qe && Qe.binding && Qe.binding("util");
    } catch {
    }
  }(), Je = Kn && Kn.isTypedArray;
  function Vn(o, u) {
    for (var f = -1, A = o == null ? 0 : o.length, k = 0, C = []; ++f < A; ) {
      var M = o[f];
      u(M, f, o) && (C[k++] = M);
    }
    return C;
  }
  function tn(o, u) {
    for (var f = -1, A = u.length, k = o.length; ++f < A; )
      o[k + f] = u[f];
    return o;
  }
  function Wn(o, u) {
    for (var f = -1, A = o == null ? 0 : o.length; ++f < A; )
      if (u(o[f], f, o))
        return !0;
    return !1;
  }
  function Kr(o, u) {
    for (var f = -1, A = Array(o); ++f < o; )
      A[f] = u(f);
    return A;
  }
  function Vr(o) {
    return function(u) {
      return o(u);
    };
  }
  function Te(o, u) {
    return o.has(u);
  }
  function en(o, u) {
    return o == null ? void 0 : o[u];
  }
  function Zn(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A, k) {
      f[++u] = [k, A];
    }), f;
  }
  function Xn(o, u) {
    return function(f) {
      return o(u(f));
    };
  }
  function Lt(o) {
    var u = -1, f = Array(o.size);
    return o.forEach(function(A) {
      f[++u] = A;
    }), f;
  }
  var xe = Array.prototype, Wr = Function.prototype, ae = Object.prototype, Le = gt["__core-js_shared__"], nn = Wr.toString, lt = ae.hasOwnProperty, Yn = function() {
    var o = /[^.]+$/.exec(Le && Le.keys && Le.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Qn = ae.toString, Zr = RegExp(
    "^" + nn.call(lt).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), rn = Ye ? gt.Buffer : void 0, Se = gt.Symbol, Jn = gt.Uint8Array, _e = ae.propertyIsEnumerable, ce = xe.splice, pt = Se ? Se.toStringTag : void 0, Oe = Object.getOwnPropertySymbols, sn = rn ? rn.isBuffer : void 0, ue = Xn(Object.keys, Object), ln = jt(gt, "DataView"), he = jt(gt, "Map"), on = jt(gt, "Promise"), an = jt(gt, "Set"), cn = jt(gt, "WeakMap"), Wt = jt(Object, "create"), tr = tt(ln), Dt = tt(he), Xr = tt(on), Yr = tt(an), Qr = tt(cn), er = Se ? Se.prototype : void 0, un = er ? er.valueOf : void 0;
  function K(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function Jr() {
    this.__data__ = Wt ? Wt(null) : {}, this.size = 0;
  }
  function ts(o) {
    var u = this.has(o) && delete this.__data__[o];
    return this.size -= u ? 1 : 0, u;
  }
  function es(o) {
    var u = this.__data__;
    if (Wt) {
      var f = u[o];
      return f === r ? void 0 : f;
    }
    return lt.call(u, o) ? u[o] : void 0;
  }
  function ns(o) {
    var u = this.__data__;
    return Wt ? u[o] !== void 0 : lt.call(u, o);
  }
  function rs(o, u) {
    var f = this.__data__;
    return this.size += this.has(o) ? 0 : 1, f[o] = Wt && u === void 0 ? r : u, this;
  }
  K.prototype.clear = Jr, K.prototype.delete = ts, K.prototype.get = es, K.prototype.has = ns, K.prototype.set = rs;
  function Z(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function ss() {
    this.__data__ = [], this.size = 0;
  }
  function is(o) {
    var u = this.__data__, f = Ie(u, o);
    if (f < 0)
      return !1;
    var A = u.length - 1;
    return f == A ? u.pop() : ce.call(u, f, 1), --this.size, !0;
  }
  function ls(o) {
    var u = this.__data__, f = Ie(u, o);
    return f < 0 ? void 0 : u[f][1];
  }
  function os(o) {
    return Ie(this.__data__, o) > -1;
  }
  function as(o, u) {
    var f = this.__data__, A = Ie(f, o);
    return A < 0 ? (++this.size, f.push([o, u])) : f[A][1] = u, this;
  }
  Z.prototype.clear = ss, Z.prototype.delete = is, Z.prototype.get = ls, Z.prototype.has = os, Z.prototype.set = as;
  function nt(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++u < f; ) {
      var A = o[u];
      this.set(A[0], A[1]);
    }
  }
  function cs() {
    this.size = 0, this.__data__ = {
      hash: new K(),
      map: new (he || Z)(),
      string: new K()
    };
  }
  function us(o) {
    var u = mt(this, o).delete(o);
    return this.size -= u ? 1 : 0, u;
  }
  function hs(o) {
    return mt(this, o).get(o);
  }
  function fs(o) {
    return mt(this, o).has(o);
  }
  function ds(o, u) {
    var f = mt(this, o), A = f.size;
    return f.set(o, u), this.size += f.size == A ? 0 : 1, this;
  }
  nt.prototype.clear = cs, nt.prototype.delete = us, nt.prototype.get = hs, nt.prototype.has = fs, nt.prototype.set = ds;
  function qe(o) {
    var u = -1, f = o == null ? 0 : o.length;
    for (this.__data__ = new nt(); ++u < f; )
      this.add(o[u]);
  }
  function nr(o) {
    return this.__data__.set(o, r), this;
  }
  function Ce(o) {
    return this.__data__.has(o);
  }
  qe.prototype.add = qe.prototype.push = nr, qe.prototype.has = Ce;
  function St(o) {
    var u = this.__data__ = new Z(o);
    this.size = u.size;
  }
  function hn() {
    this.__data__ = new Z(), this.size = 0;
  }
  function gs(o) {
    var u = this.__data__, f = u.delete(o);
    return this.size = u.size, f;
  }
  function ps(o) {
    return this.__data__.get(o);
  }
  function ms(o) {
    return this.__data__.has(o);
  }
  function bs(o, u) {
    var f = this.__data__;
    if (f instanceof Z) {
      var A = f.__data__;
      if (!he || A.length < e - 1)
        return A.push([o, u]), this.size = ++f.size, this;
      f = this.__data__ = new nt(A);
    }
    return f.set(o, u), this.size = f.size, this;
  }
  St.prototype.clear = hn, St.prototype.delete = gs, St.prototype.get = ps, St.prototype.has = ms, St.prototype.set = bs;
  function ys(o, u) {
    var f = ke(o), A = !f && or(o), k = !f && !A && Re(o), C = !f && !A && !k && ur(o), M = f || A || k || C, B = M ? Kr(o.length, String) : [], H = B.length;
    for (var $ in o)
      lt.call(o, $) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
      ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      k && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
      Ls($, H))) && B.push($);
    return B;
  }
  function Ie(o, u) {
    for (var f = o.length; f--; )
      if (lr(o[f][0], u))
        return f;
    return -1;
  }
  function fn(o, u, f) {
    var A = u(o);
    return ke(o) ? A : tn(A, f(o));
  }
  function fe(o) {
    return o == null ? o === void 0 ? $t : E : pt && pt in Object(o) ? Pt(o) : ir(o);
  }
  function rr(o) {
    return Ot(o) && fe(o) == a;
  }
  function sr(o, u, f, A, k) {
    return o === u ? !0 : o == null || u == null || !Ot(o) && !Ot(u) ? o !== o && u !== u : vs(o, u, f, A, sr, k);
  }
  function vs(o, u, f, A, k, C) {
    var M = ke(o), B = ke(u), H = M ? c : _t(o), $ = B ? c : _t(u);
    H = H == a ? w : H, $ = $ == a ? w : $;
    var X = H == w, rt = $ == w, z = H == $;
    if (z && Re(o)) {
      if (!Re(u))
        return !1;
      M = !0, X = !1;
    }
    if (z && !X)
      return C || (C = new St()), M || ur(o) ? dn(o, u, f, A, k, C) : ws(o, u, H, f, A, k, C);
    if (!(f & s)) {
      var Y = X && lt.call(o, "__wrapped__"), V = rt && lt.call(u, "__wrapped__");
      if (Y || V) {
        var Zt = Y ? o.value() : o, Ut = V ? u.value() : u;
        return C || (C = new St()), k(Zt, Ut, f, A, C);
      }
    }
    return z ? (C || (C = new St()), Ts(o, u, f, A, k, C)) : !1;
  }
  function Es(o) {
    if (!cr(o) || _s(o))
      return !1;
    var u = ar(o) ? Zr : dt;
    return u.test(tt(o));
  }
  function As(o) {
    return Ot(o) && pn(o.length) && !!j[fe(o)];
  }
  function Ns(o) {
    if (!Os(o))
      return ue(o);
    var u = [];
    for (var f in Object(o))
      lt.call(o, f) && f != "constructor" && u.push(f);
    return u;
  }
  function dn(o, u, f, A, k, C) {
    var M = f & s, B = o.length, H = u.length;
    if (B != H && !(M && H > B))
      return !1;
    var $ = C.get(o);
    if ($ && C.get(u))
      return $ == u;
    var X = -1, rt = !0, z = f & i ? new qe() : void 0;
    for (C.set(o, u), C.set(u, o); ++X < B; ) {
      var Y = o[X], V = u[X];
      if (A)
        var Zt = M ? A(V, Y, X, u, o, C) : A(Y, V, X, o, u, C);
      if (Zt !== void 0) {
        if (Zt)
          continue;
        rt = !1;
        break;
      }
      if (z) {
        if (!Wn(u, function(Ut, ge) {
          if (!Te(z, ge) && (Y === Ut || k(Y, Ut, f, A, C)))
            return z.push(ge);
        })) {
          rt = !1;
          break;
        }
      } else if (!(Y === V || k(Y, V, f, A, C))) {
        rt = !1;
        break;
      }
    }
    return C.delete(o), C.delete(u), rt;
  }
  function ws(o, u, f, A, k, C, M) {
    switch (f) {
      case oe:
        if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset)
          return !1;
        o = o.buffer, u = u.buffer;
      case le:
        return !(o.byteLength != u.byteLength || !C(new Jn(o), new Jn(u)));
      case d:
      case m:
      case y:
        return lr(+o, +u);
      case g:
        return o.name == u.name && o.message == u.message;
      case L:
      case R:
        return o == u + "";
      case v:
        var B = Zn;
      case I:
        var H = A & s;
        if (B || (B = Lt), o.size != u.size && !H)
          return !1;
        var $ = M.get(o);
        if ($)
          return $ == u;
        A |= i, M.set(o, u);
        var X = dn(B(o), B(u), A, k, C, M);
        return M.delete(o), X;
      case U:
        if (un)
          return un.call(o) == un.call(u);
    }
    return !1;
  }
  function Ts(o, u, f, A, k, C) {
    var M = f & s, B = de(o), H = B.length, $ = de(u), X = $.length;
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
    for (var Zt = M; ++rt < H; ) {
      z = B[rt];
      var Ut = o[z], ge = u[z];
      if (A)
        var Ki = M ? A(ge, Ut, z, u, o, C) : A(Ut, ge, z, o, u, C);
      if (!(Ki === void 0 ? Ut === ge || k(Ut, ge, f, A, C) : Ki)) {
        V = !1;
        break;
      }
      Zt || (Zt = z == "constructor");
    }
    if (V && !Zt) {
      var hr = o.constructor, fr = u.constructor;
      hr != fr && "constructor" in o && "constructor" in u && !(typeof hr == "function" && hr instanceof hr && typeof fr == "function" && fr instanceof fr) && (V = !1);
    }
    return C.delete(o), C.delete(u), V;
  }
  function de(o) {
    return fn(o, mn, xs);
  }
  function mt(o, u) {
    var f = o.__data__;
    return Ss(u) ? f[typeof u == "string" ? "string" : "hash"] : f.map;
  }
  function jt(o, u) {
    var f = en(o, u);
    return Es(f) ? f : void 0;
  }
  function Pt(o) {
    var u = lt.call(o, pt), f = o[pt];
    try {
      o[pt] = void 0;
      var A = !0;
    } catch {
    }
    var k = Qn.call(o);
    return A && (u ? o[pt] = f : delete o[pt]), k;
  }
  var xs = Oe ? function(o) {
    return o == null ? [] : (o = Object(o), Vn(Oe(o), function(u) {
      return _e.call(o, u);
    }));
  } : Cs, _t = fe;
  (ln && _t(new ln(new ArrayBuffer(1))) != oe || he && _t(new he()) != v || on && _t(on.resolve()) != T || an && _t(new an()) != I || cn && _t(new cn()) != Vt) && (_t = function(o) {
    var u = fe(o), f = u == w ? o.constructor : void 0, A = f ? tt(f) : "";
    if (A)
      switch (A) {
        case tr:
          return oe;
        case Dt:
          return v;
        case Xr:
          return T;
        case Yr:
          return I;
        case Qr:
          return Vt;
      }
    return u;
  });
  function Ls(o, u) {
    return u = u ?? l, !!u && (typeof o == "number" || Fn.test(o)) && o > -1 && o % 1 == 0 && o < u;
  }
  function Ss(o) {
    var u = typeof o;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
  }
  function _s(o) {
    return !!Yn && Yn in o;
  }
  function Os(o) {
    var u = o && o.constructor, f = typeof u == "function" && u.prototype || ae;
    return o === f;
  }
  function ir(o) {
    return Qn.call(o);
  }
  function tt(o) {
    if (o != null) {
      try {
        return nn.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function lr(o, u) {
    return o === u || o !== o && u !== u;
  }
  var or = rr(/* @__PURE__ */ function() {
    return arguments;
  }()) ? rr : function(o) {
    return Ot(o) && lt.call(o, "callee") && !_e.call(o, "callee");
  }, ke = Array.isArray;
  function gn(o) {
    return o != null && pn(o.length) && !ar(o);
  }
  var Re = sn || Is;
  function qs(o, u) {
    return sr(o, u);
  }
  function ar(o) {
    if (!cr(o))
      return !1;
    var u = fe(o);
    return u == p || u == b || u == h || u == _;
  }
  function pn(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function cr(o) {
    var u = typeof o;
    return o != null && (u == "object" || u == "function");
  }
  function Ot(o) {
    return o != null && typeof o == "object";
  }
  var ur = Je ? Vr(Je) : As;
  function mn(o) {
    return gn(o) ? ys(o) : Ns(o);
  }
  function Cs() {
    return [];
  }
  function Is() {
    return !1;
  }
  n.exports = qs;
})(Sr, Sr.exports);
var Ro = Sr.exports, Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
const sd = ko, id = Ro;
var oi;
(function(n) {
  function t(i = {}, l = {}, a = !1) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    let c = sd(l);
    a || (c = Object.keys(c).reduce((h, d) => (c[d] != null && (h[d] = c[d]), h), {}));
    for (const h in i)
      i[h] !== void 0 && l[h] === void 0 && (c[h] = i[h]);
    return Object.keys(c).length > 0 ? c : void 0;
  }
  n.compose = t;
  function e(i = {}, l = {}) {
    typeof i != "object" && (i = {}), typeof l != "object" && (l = {});
    const a = Object.keys(i).concat(Object.keys(l)).reduce((c, h) => (id(i[h], l[h]) || (c[h] = l[h] === void 0 ? null : l[h]), c), {});
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
})(oi || (oi = {}));
Ri.default = oi;
var Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
var ai;
(function(n) {
  function t(e) {
    return typeof e.delete == "number" ? e.delete : typeof e.retain == "number" ? e.retain : typeof e.retain == "object" && e.retain !== null ? 1 : typeof e.insert == "string" ? e.insert.length : 1;
  }
  n.length = t;
})(ai || (ai = {}));
Br.default = ai;
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
const xl = Br;
class ld {
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
      const r = this.offset, s = xl.default.length(e);
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
    return this.ops[this.index] ? xl.default.length(this.ops[this.index]) - this.offset : 1 / 0;
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
Bi.default = ld;
(function(n, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
  const e = rd, r = ko, s = Ro, i = Ri;
  t.AttributeMap = i.default;
  const l = Br;
  t.Op = l.default;
  const a = Bi;
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
              const R = T.retain == null ? "insert" : "retain", [U, $t, Vt] = h(T[R], _.retain), le = d.getHandler(U);
              L[R] = {
                [U]: le.compose($t, Vt, R === "retain")
              };
            }
            const I = i.default.compose(T.attributes, _.attributes, typeof T.retain == "number");
            if (I && (L.attributes = I), E.push(L), !b.hasNext() && s(E.ops[E.ops.length - 1], L)) {
              const R = new d(p.rest());
              return E.concat(R).chop();
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
              const I = E.next(L), R = w.next(L);
              s(I.insert, R.insert) ? v.retain(L, i.default.diff(I.attributes, R.attributes)) : v.push(R).delete(L);
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
            let R = typeof I == "object" && I !== null ? I : w;
            if (typeof L == "object" && L !== null && typeof I == "object" && I !== null) {
              const U = Object.keys(L)[0];
              if (U === Object.keys(I)[0]) {
                const $t = d.getHandler(U);
                $t && (R = {
                  [U]: $t.transform(L[U], I[U], p)
                });
              }
            }
            E.retain(R, i.default.transform(T.attributes, _.attributes, p));
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
})(li, li.exports);
var ht = li.exports;
const O = /* @__PURE__ */ _o(ht);
class xt extends st {
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
xt.blotName = "break";
xt.tagName = "BR";
let wt = class extends xr {
};
function Mr(n) {
  return n.replace(/[&<>"']/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t]);
}
const qt = class qt extends qi {
  static compare(t, e) {
    const r = qt.order.indexOf(t), s = qt.order.indexOf(e);
    return r >= 0 || s >= 0 ? r - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, r, s) {
    if (qt.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, q.BLOT)) {
      const i = this.isolate(t, e);
      s && i.wrap(r, s);
    } else
      super.formatAt(t, e, r, s);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof qt && qt.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
};
x(qt, "allowedChildren", [qt, xt, st, wt]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
x(qt, "order", [
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
let Rt = qt;
const Ll = 1;
class W extends Sn {
  constructor() {
    super(...arguments);
    x(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = Bo(this)), this.cache.delta;
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
    super.insertBefore(e, r), s instanceof xt && s.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + Ll), this.cache.length;
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
    if (r && (e === 0 || e >= this.length() - Ll)) {
      const i = this.clone();
      return e === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const s = super.split(e, r);
    return this.cache = {}, s;
  }
}
W.blotName = "block";
W.tagName = "P";
W.defaultChild = xt;
W.allowedChildren = [xt, Rt, st, wt];
class ut extends st {
  attach() {
    super.attach(), this.attributes = new Cr(this.domNode);
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
function Bo(n) {
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
const ot = class ot extends st {
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
    const e = this.prev instanceof wt ? this.prev : null, r = e ? e.length() : 0, s = this.next instanceof wt ? this.next : null, i = s ? s.text : "", {
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
let Ve = ot;
var Mo = { exports: {} };
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
})(Mo);
var od = Mo.exports;
const ad = /* @__PURE__ */ _o(od), ci = /* @__PURE__ */ new WeakMap(), ui = ["error", "warn", "log", "info"];
let hi = "warn";
function $o(n) {
  if (hi && ui.indexOf(n) <= ui.indexOf(hi)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      e[r - 1] = arguments[r];
    console[n](...e);
  }
}
function ft(n) {
  return ui.reduce((t, e) => (t[e] = $o.bind(console, e, n), t), {});
}
ft.level = (n) => {
  hi = n;
};
$o.level = ft.level;
const Ds = ft("quill:events"), cd = ["selectionchange", "mousedown", "mouseup", "click"];
cd.forEach((n) => {
  document.addEventListener(n, function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = ci.get(s);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class S extends ad {
  constructor() {
    super(), this.domListeners = {}, this.on("error", Ds.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return Ds.log.call(Ds, ...e), super.emit(...e);
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
const js = ft("quill:selection");
class re {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class ud {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new re(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
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
    return js.info("getNativeRange", r), r;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ps(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const r = e.map((l) => {
      const [a, c] = l, h = this.scroll.find(a, !0), d = h.offset(this.scroll);
      return c === 0 ? d : h instanceof Q ? d + h.index(a, c) : d + h.length();
    }), s = Math.min(Math.max(...r), this.scroll.length() - 1), i = Math.min(s, ...r);
    return new re(i, s - i);
  }
  normalizeNative(t) {
    if (!Ps(this.root, t.startContainer) || !t.collapsed && !Ps(this.root, t.endContainer))
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
    if (js.info("setNativeRange", t, e, r, s), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
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
    if (typeof e == "string" && (r = e, e = !1), js.info("setRange", t), t != null) {
      const s = this.rangeToNative(t);
      this.setNativeRange(...s, e);
    } else
      this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.sources.USER;
    const e = this.lastRange, [r, s] = this.getRange();
    if (this.lastRange = r, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !Oi(e, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const l = this.cursor.restore();
        l && this.setNativeRange(l.startNode, l.startOffset, l.endNode, l.endOffset);
      }
      const i = [S.events.SELECTION_CHANGE, He(this.lastRange), He(e), t];
      this.emitter.emit(S.events.EDITOR_CHANGE, ...i), t !== S.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function Ps(n, t) {
  try {
    t.parentNode;
  } catch {
    return !1;
  }
  return n.contains(t);
}
const hd = /^[ -~]*$/;
class fd {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const r = Sl(t), s = new O();
    return gd(r.ops.slice()).reduce((l, a) => {
      const c = ht.Op.length(a);
      let h = a.attributes || {}, d = !1, m = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const b = a.insert;
          m = !b.endsWith(`
`) && (e <= l || !!this.scroll.descendant(ut, l)[0]), this.scroll.insertAt(l, b);
          const [v, y] = this.scroll.line(l);
          let E = ee({}, at(v));
          if (v instanceof W) {
            const [w] = v.descendant(Q, y);
            w && (E = ee(E, at(w)));
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
            y instanceof wt ? y.value()[E] !== `
` && (d = !0) : y instanceof st && y.statics.scope === q.INLINE_BLOT && (d = !0);
          }
          if (this.scroll.insertAt(l, b, a.insert[b]), v) {
            const [y] = this.scroll.descendant(Q, l);
            if (y) {
              const E = ee({}, at(y));
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
    const s = new O().retain(t).retain(e, He(r));
    return this.update(s);
  }
  formatText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r).forEach((i) => {
      this.scroll.formatAt(t, e, i, r[i]);
    });
    const s = new O().retain(t).retain(e, He(r));
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
        h = dd(at(d), h);
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
      return r.length() >= s + e && !(s === 0 && e === i) ? On(r, s, e, !0) : On(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((r) => typeof r.insert == "string").map((r) => r.insert).join("");
  }
  insertContents(t, e) {
    const r = Sl(e), s = new O().retain(t).concat(r);
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
    }), this.update(new O().retain(t).insert(e, He(r)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return !0;
    if (this.scroll.children.length > 1) return !1;
    const t = this.scroll.children.head;
    if ((t == null ? void 0 : t.statics.blotName) !== W.blotName) return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof xt;
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
    e[0].target.data.match(hd) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), l = at(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(Ve.CONTENTS, ""), h = new O().insert(c), d = new O().insert(i.value()), m = r && {
        oldRange: _l(r.oldRange, -a),
        newRange: _l(r.newRange, -a)
      };
      t = new O().retain(a).concat(h.diff(d, m)).reduce((p, b) => b.insert ? p.insert(b.insert, l) : p.push(b), new O()), this.delta = s.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !Oi(s.compose(t), this.delta)) && (t = s.diff(this.delta, r));
    return t;
  }
}
function Pe(n, t, e) {
  if (n.length === 0) {
    const [p] = Us(e.pop());
    return t <= 0 ? `</li></${p}>` : `</li></${p}>${Pe([], t - 1, e)}`;
  }
  const [{
    child: r,
    offset: s,
    length: i,
    indent: l,
    type: a
  }, ...c] = n, [h, d] = Us(a);
  if (l > t)
    return e.push(a), l === t + 1 ? `<${h}><li${d}>${On(r, s, i)}${Pe(c, l, e)}` : `<${h}><li>${Pe(n, t + 1, e)}`;
  const m = e[e.length - 1];
  if (l === t && a === m)
    return `</li><li${d}>${On(r, s, i)}${Pe(c, l, e)}`;
  const [g] = Us(e.pop());
  return `</li></${g}>${Pe(n, t - 1, e)}`;
}
function On(n, t, e) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in n && typeof n.html == "function")
    return n.html(t, e);
  if (n instanceof wt)
    return Mr(n.value().slice(t, t + e));
  if (n instanceof Nt) {
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
      }), Pe(h, -1, []);
    }
    const s = [];
    if (n.children.forEachAt(t, e, (h, d, m) => {
      s.push(On(h, d, m));
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
function dd(n, t) {
  return Object.keys(t).reduce((e, r) => {
    if (n[r] == null) return e;
    const s = t[r];
    return s === n[r] ? e[r] = s : Array.isArray(s) ? s.indexOf(n[r]) < 0 ? e[r] = s.concat([n[r]]) : e[r] = s : e[r] = [s, n[r]], e;
  }, {});
}
function Us(n) {
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
function Sl(n) {
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
function _l(n, t) {
  let {
    index: e,
    length: r
  } = n;
  return new re(e + t, r);
}
function gd(n) {
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
var Vs;
let Mt = (Vs = class {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}, x(Vs, "DEFAULTS", {}), Vs);
const gr = "\uFEFF";
class Mi extends st {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r) => {
      this.contentNode.appendChild(r);
    }), this.leftGuard = document.createTextNode(gr), this.rightGuard = document.createTextNode(gr), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, r;
    const s = t.data.split(gr).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof wt) {
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
    else t === this.rightGuard && (this.next instanceof wt ? (this.next.insertAt(0, s), e = {
      startNode: this.next.domNode,
      startOffset: s.length
    }) : (r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this.next), e = {
      startNode: r,
      startOffset: s.length
    }));
    return t.data = gr, e;
  }
  update(t, e) {
    t.forEach((r) => {
      if (r.type === "characterData" && (r.target === this.leftGuard || r.target === this.rightGuard)) {
        const s = this.restore(r.target);
        s && (e.range = s);
      }
    });
  }
}
class pd {
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
    e && !(e instanceof Mi) && (this.emitter.emit(S.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(S.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(S.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(S.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
const Nn = class Nn {
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
x(Nn, "DEFAULTS", {
  modules: {}
}), x(Nn, "themes", {
  default: Nn
});
let We = Nn;
const md = (n) => n.parentElement || n.getRootNode().host || null, bd = (n) => {
  const t = n.getBoundingClientRect(), e = "offsetWidth" in n && Math.abs(t.width) / n.offsetWidth || 1, r = "offsetHeight" in n && Math.abs(t.height) / n.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + n.clientWidth * e,
    bottom: t.top + n.clientHeight * r,
    left: t.left
  };
}, pr = (n) => {
  const t = parseInt(n, 10);
  return Number.isNaN(t) ? 0 : t;
}, Ol = (n, t, e, r, s, i) => n < e && t > r ? 0 : n < e ? -(e - n + s) : t > r ? t - n > r - e ? n + s - e : t - r + i : 0, yd = (n, t) => {
  var i, l, a;
  const e = n.ownerDocument;
  let r = t, s = n;
  for (; s; ) {
    const c = s === e.body, h = c ? {
      top: 0,
      right: ((i = window.visualViewport) == null ? void 0 : i.width) ?? e.documentElement.clientWidth,
      bottom: ((l = window.visualViewport) == null ? void 0 : l.height) ?? e.documentElement.clientHeight,
      left: 0
    } : bd(s), d = getComputedStyle(s), m = Ol(r.left, r.right, h.left, h.right, pr(d.scrollPaddingLeft), pr(d.scrollPaddingRight)), g = Ol(r.top, r.bottom, h.top, h.bottom, pr(d.scrollPaddingTop), pr(d.scrollPaddingBottom));
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
    s = c || d.position === "fixed" ? null : md(s);
  }
}, vd = 100, Ed = ["block", "break", "cursor", "inline", "scroll", "text"], Ad = (n, t, e) => {
  const r = new be();
  return Ed.forEach((s) => {
    const i = t.query(s);
    i && r.register(i);
  }), n.forEach((s) => {
    let i = t.query(s);
    i || e.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let l = 0;
    for (; i; )
      if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, l += 1, l > vd) {
        e.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), r;
}, Ge = ft("quill"), mr = new be();
Nt.uiClass = "ql-ui";
const vt = class vt {
  static debug(t) {
    t === !0 && (t = "log"), ft.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return ci.get(t) || mr.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && Ge.error(`Cannot import ${t}. Are you sure it was registered?`), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), r = "attrName" in t ? t.attrName : t.blotName;
      typeof r == "string" ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach((s) => {
        this.register(s, t[s], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], r = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !r && Ge.warn(`Overwriting ${t} with`, e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && mr.register(e), typeof e.register == "function" && e.register(mr);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = Nd(t, e), this.container = this.options.container, this.container == null) {
      Ge.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && vt.debug(this.options.debug);
    const r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", ci.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new S();
    const s = Ci.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new fd(this.scroll), this.selection = new ud(this.scroll, this.emitter), this.composition = new pd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(S.events.EDITOR_CHANGE, (l) => {
      l === S.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(S.events.SCROLL_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      bt.call(this, () => this.editor.update(null, a, d), l);
    }), this.emitter.on(S.events.SCROLL_EMBED_UPDATE, (l, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), d = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      bt.call(this, () => {
        const m = new O().retain(l.offset(this)).retain({
          [l.statics.blotName]: a
        });
        return this.editor.update(m, [], d);
      }, vt.sources.USER);
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
    return [t, e, , r] = Ft(t, e, r), bt.call(this, () => this.editor.deleteText(t, e), r, t, -1 * e);
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
    return bt.call(this, () => {
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
    return [t, e, l, i] = Ft(
      t,
      e,
      // @ts-expect-error
      r,
      s,
      i
    ), bt.call(this, () => this.editor.formatLine(t, e, l), i, t, 0);
  }
  formatText(t, e, r, s, i) {
    let l;
    return [t, e, l, i] = Ft(
      // @ts-expect-error
      t,
      e,
      r,
      s,
      i
    ), bt.call(this, () => this.editor.formatText(t, e, l), i, t, 0);
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
    return [t, e] = Ft(t, e), this.editor.getContents(t, e);
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
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = Ft(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = Ft(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : vt.sources.API;
    return bt.call(this, () => this.editor.insertEmbed(t, e, r), s, t);
  }
  insertText(t, e, r, s, i) {
    let l;
    return [t, , l, i] = Ft(t, 0, r, s, i), bt.call(this, () => this.editor.insertText(t, e, l), i, t, e.length);
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
    return [t, e, , r] = Ft(t, e, r), bt.call(this, () => this.editor.removeFormat(t, e), r, t);
  }
  scrollRectIntoView(t) {
    yd(this.root, t);
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
    return bt.call(this, () => {
      t = new O(t);
      const r = this.getLength(), s = this.editor.deleteText(0, r), i = this.editor.insertContents(0, t), l = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(l);
    }, e);
  }
  setSelection(t, e, r) {
    t == null ? this.selection.setRange(null, e || vt.sources.API) : ([t, e, , r] = Ft(t, e, r), this.selection.setRange(new re(Math.max(0, t), e), r), r !== S.sources.SILENT && this.scrollSelectionIntoView());
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
    return bt.call(this, () => (t = new O(t), this.editor.applyDelta(t)), e, !0);
  }
};
x(vt, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: mr,
  theme: "default"
}), x(vt, "events", S.events), x(vt, "sources", S.sources), x(vt, "version", "2.0.2"), x(vt, "imports", {
  delta: O,
  parchment: Vf,
  "core/module": Mt,
  "core/theme": We
});
let N = vt;
function ql(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function Fs(n) {
  return Object.entries(n ?? {}).reduce((t, e) => {
    let [r, s] = e;
    return {
      ...t,
      [r]: s === !0 ? {} : s
    };
  }, {});
}
function Cl(n) {
  return Object.fromEntries(Object.entries(n).filter((t) => t[1] !== void 0));
}
function Nd(n, t) {
  const e = ql(n);
  if (!e)
    throw new Error("Invalid Quill container");
  const s = !t.theme || t.theme === N.DEFAULTS.theme ? We : N.import(`themes/${t.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${t.theme}. Did you register it?`);
  const {
    modules: i,
    ...l
  } = N.DEFAULTS, {
    modules: a,
    ...c
  } = s.DEFAULTS;
  let h = Fs(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const d = ee({}, Fs(i), Fs(a), h), m = {
    ...l,
    ...Cl(c),
    ...Cl(t)
  };
  let g = t.registry;
  return g ? t.formats && Ge.warn('Ignoring "formats" option because "registry" is specified') : g = t.formats ? Ad(t.formats, m.registry, Ge) : m.registry, {
    ...m,
    registry: g,
    container: e,
    theme: s,
    modules: Object.entries(d).reduce((p, b) => {
      let [v, y] = b;
      if (!y) return p;
      const E = N.import(`modules/${v}`);
      return E == null ? (Ge.error(`Cannot load ${v} module. Are you sure you registered it?`), p) : {
        ...p,
        // @ts-expect-error
        [v]: ee({}, E.DEFAULTS || {}, y)
      };
    }, {}),
    bounds: ql(m.bounds)
  };
}
function bt(n, t, e, r) {
  if (!this.isEnabled() && t === S.sources.USER && !this.allowReadOnlyEdits)
    return new O();
  let s = e == null ? null : this.getSelection();
  const i = this.editor.delta, l = n();
  if (s != null && (e === !0 && (e = s.index), r == null ? s = Il(s, l, t) : r !== 0 && (s = Il(s, e, r, t)), this.setSelection(s, S.sources.SILENT)), l.length() > 0) {
    const a = [S.events.TEXT_CHANGE, l, i, t];
    this.emitter.emit(S.events.EDITOR_CHANGE, ...a), t !== S.sources.SILENT && this.emitter.emit(...a);
  }
  return l;
}
function Ft(n, t, e, r, s) {
  let i = {};
  return typeof n.index == "number" && typeof n.length == "number" ? typeof t != "number" ? (s = r, r = e, e = t, t = n.length, n = n.index) : (t = n.length, n = n.index) : typeof t != "number" && (s = r, r = e, e = t, t = 0), typeof e == "object" ? (i = e, s = r) : typeof e == "string" && (r != null ? i[e] = r : s = e), s = s || S.sources.API, [n, t, i, s];
}
function Il(n, t, e, r) {
  const s = typeof e == "number" ? e : 0;
  if (n == null) return null;
  let i, l;
  return t && typeof t.transformPosition == "function" ? [i, l] = [n.index, n.index + n.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, r !== S.sources.USER)
  )) : [i, l] = [n.index, n.index + n.length].map((a) => a < t || a === t && r === S.sources.USER ? a : s >= 0 ? a + s : Math.max(t, a + s)), new re(i, l - i);
}
class Ae extends Ir {
}
function kl(n) {
  return n instanceof W || n instanceof ut;
}
function Rl(n) {
  return typeof n.updateContent == "function";
}
class Ue extends Ci {
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
      const l = i.children.head instanceof xt ? null : i.children.head;
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
      Hs(this, t, h);
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
        Hs(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, l || void 0), Object.keys(c.attributes).forEach((d) => {
          h.format(d, c.attributes[d]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = l ? l.offset(l.scroll) + a : this.length();
      Hs(this, c, s.delta);
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
    return t === this.length() ? this.line(t - 1) : this.descendant(kl, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r = (s, i, l) => {
      let a = [], c = l;
      return s.children.forEachAt(i, l, (h, d, m) => {
        kl(h) ? a.push(h) : h instanceof Ir && (a = a.concat(r(h, d, c))), c -= m;
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
      return i && !Rl(i);
    }), t.length > 0 && this.emitter.emit(S.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(S.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, r) {
    const [s] = this.descendant((i) => i instanceof ut, t);
    s && s.statics.blotName === e && Rl(s) && s.updateContent(r);
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
x(Ue, "blotName", "scroll"), x(Ue, "className", "ql-editor"), x(Ue, "tagName", "DIV"), x(Ue, "defaultChild", W), x(Ue, "allowedChildren", [W, ut, Ae]);
function Hs(n, t, e) {
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
const $i = {
  scope: q.BLOCK,
  whitelist: ["right", "center", "justify"]
}, wd = new kt("align", "align", $i), Do = new Tt("align", "ql-align", $i), jo = new ie("align", "text-align", $i);
class Po extends ie {
  value(t) {
    let e = super.value(t);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : e;
  }
}
const Td = new Tt("color", "ql-color", {
  scope: q.INLINE
}), Di = new Po("color", "color", {
  scope: q.INLINE
}), xd = new Tt("background", "ql-bg", {
  scope: q.INLINE
}), ji = new Po("background", "background-color", {
  scope: q.INLINE
});
class Ne extends Ae {
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
${Mr(this.code(t, e))}
</pre>`;
  }
}
class J extends W {
  static register() {
    N.register(Ne);
  }
}
x(J, "TAB", "  ");
class Pi extends Rt {
}
Pi.blotName = "code";
Pi.tagName = "CODE";
J.blotName = "code-block";
J.className = "ql-code-block";
J.tagName = "DIV";
Ne.blotName = "code-block-container";
Ne.className = "ql-code-block-container";
Ne.tagName = "DIV";
Ne.allowedChildren = [J];
J.allowedChildren = [wt, xt, Ve];
J.requiredContainer = Ne;
const Ui = {
  scope: q.BLOCK,
  whitelist: ["rtl"]
}, Uo = new kt("direction", "dir", Ui), Fo = new Tt("direction", "ql-direction", Ui), Ho = new ie("direction", "direction", Ui), zo = {
  scope: q.INLINE,
  whitelist: ["serif", "monospace"]
}, Go = new Tt("font", "ql-font", zo);
class Ld extends ie {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const Ko = new Ld("font", "font-family", zo), Vo = new Tt("size", "ql-size", {
  scope: q.INLINE,
  whitelist: ["small", "large", "huge"]
}), Wo = new ie("size", "font-size", {
  scope: q.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), Sd = ft("quill:keyboard"), _d = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class $r extends Mt {
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
    const s = qd(t);
    if (s == null) {
      Sd.warn("Attempted to add invalid keyboard binding", s);
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
      const s = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((E) => $r.match(t, E));
      if (s.length === 0) return;
      const i = N.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      const l = this.quill.getSelection();
      if (l == null || !this.quill.hasFocus()) return;
      const [a, c] = this.quill.getLine(l.index), [h, d] = this.quill.getLeaf(l.index), [m, g] = l.length === 0 ? [h, d] : this.quill.getLeaf(l.index + l.length), p = h instanceof xr ? h.value().slice(0, d) : "", b = m instanceof xr ? m.value().slice(g) : "", v = {
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
        } else if (typeof E.format == "object" && !Object.keys(E.format).every((w) => E.format[w] === !0 ? v.format[w] != null : E.format[w] === !1 ? v.format[w] == null : Oi(E.format[w], v.format[w])))
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
    Fi({
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
const Od = {
  bindings: {
    bold: zs("bold"),
    italic: zs("italic"),
    underline: zs("underline"),
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
    "indent code-block": Bl(!0),
    "outdent code-block": Bl(!1),
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
          const [e, r, s, i] = t.getTable(n), l = Cd(e, r, s, i);
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
    "embed left": br("ArrowLeft", !1),
    "embed left shift": br("ArrowLeft", !0),
    "embed right": br("ArrowRight", !1),
    "embed right shift": br("ArrowRight", !0),
    "table down": Ml(!1),
    "table up": Ml(!0)
  }
};
$r.DEFAULTS = Od;
function Bl(n) {
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
function br(n, t) {
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
      return i instanceof st ? (n === "ArrowLeft" ? t ? this.quill.setSelection(r.index - 1, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index - 1, N.sources.USER) : t ? this.quill.setSelection(r.index, r.length + 1, N.sources.USER) : this.quill.setSelection(r.index + r.length + 1, N.sources.USER), !1) : !0;
    }
  };
}
function zs(n) {
  return {
    key: n[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(n, !e.format[n], N.sources.USER);
    }
  };
}
function Ml(n) {
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
function qd(n) {
  if (typeof n == "string" || typeof n == "number")
    n = {
      key: n
    };
  else if (typeof n == "object")
    n = He(n);
  else
    return null;
  return n.shortKey && (n[_d] = n.shortKey, delete n.shortKey), n;
}
function Fi(n) {
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
function Cd(n, t, e, r) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? r === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const Id = /font-weight:\s*normal/, kd = ["P", "OL", "UL"], $l = (n) => n && kd.includes(n.tagName), Rd = (n) => {
  Array.from(n.querySelectorAll("br")).filter((t) => $l(t.previousElementSibling) && $l(t.nextElementSibling)).forEach((t) => {
    var e;
    (e = t.parentNode) == null || e.removeChild(t);
  });
}, Bd = (n) => {
  Array.from(n.querySelectorAll('b[style*="font-weight"]')).filter((t) => {
    var e;
    return (e = t.getAttribute("style")) == null ? void 0 : e.match(Id);
  }).forEach((t) => {
    var r;
    const e = n.createDocumentFragment();
    e.append(...t.childNodes), (r = t.parentNode) == null || r.replaceChild(e, t);
  });
};
function Md(n) {
  n.querySelector('[id^="docs-internal-guid-"]') && (Bd(n), Rd(n));
}
const $d = /\bmso-list:[^;]*ignore/i, Dd = /\bmso-list:[^;]*\bl(\d+)/i, jd = /\bmso-list:[^;]*\blevel(\d+)/i, Pd = (n, t) => {
  const e = n.getAttribute("style"), r = e == null ? void 0 : e.match(Dd);
  if (!r)
    return null;
  const s = Number(r[1]), i = e == null ? void 0 : e.match(jd), l = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${l}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: l,
    type: h,
    element: n
  };
}, Ud = (n) => {
  var l, a;
  const t = Array.from(n.querySelectorAll("[style*=mso-list]")), e = [], r = [];
  t.forEach((c) => {
    (c.getAttribute("style") || "").match($d) ? e.push(c) : r.push(c);
  }), e.forEach((c) => {
    var h;
    return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
  });
  const s = n.documentElement.innerHTML, i = r.map((c) => Pd(c, s)).filter((c) => c);
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
function Fd(n) {
  n.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Ud(n);
}
const Hd = [Fd, Md], zd = (n) => {
  n.documentElement && Hd.forEach((t) => {
    t(n);
  });
}, Gd = ft("quill:clipboard"), Kd = [[Node.TEXT_NODE, sg], [Node.TEXT_NODE, jl], ["br", Yd], [Node.ELEMENT_NODE, jl], [Node.ELEMENT_NODE, Xd], [Node.ELEMENT_NODE, Zd], [Node.ELEMENT_NODE, ng], ["li", tg], ["ol, ul", eg], ["pre", Qd], ["tr", rg], ["b", Gs("bold")], ["i", Gs("italic")], ["strike", Gs("strike")], ["style", Jd]], Vd = [wd, Uo].reduce((n, t) => (n[t.keyName] = t, n), {}), Dl = [jo, ji, Di, Ho, Ko, Wo].reduce((n, t) => (n[t.keyName] = t, n), {});
class Zo extends Mt {
  constructor(t, e) {
    super(t, e), this.quill.root.addEventListener("copy", (r) => this.onCaptureCopy(r, !1)), this.quill.root.addEventListener("cut", (r) => this.onCaptureCopy(r, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Kd.concat(this.options.matchers ?? []).forEach((r) => {
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
    return Bn(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new O().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    zd(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const r = e.body, s = /* @__PURE__ */ new WeakMap(), [i, l] = this.prepareMatching(r, s);
    return Hi(this.quill.scroll, r, i, l, s);
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
    (l = t.clipboardData) == null || l.setData("text/plain", i), (a = t.clipboardData) == null || a.setData("text/html", s), e && Fi({
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
    Gd.log("onPaste", l, {
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
x(Zo, "DEFAULTS", {
  matchers: []
});
function we(n, t, e, r) {
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
function Bn(n, t) {
  let e = "";
  for (let r = n.ops.length - 1; r >= 0 && e.length < t.length; --r) {
    const s = n.ops[r];
    if (typeof s.insert != "string") break;
    e = s.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function Jt(n, t) {
  if (!(n instanceof Element)) return !1;
  const e = t.query(n);
  return e && e.prototype instanceof st ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n.tagName.toLowerCase());
}
function Wd(n, t) {
  return n.previousElementSibling && n.nextElementSibling && !Jt(n.previousElementSibling, t) && !Jt(n.nextElementSibling, t);
}
const yr = /* @__PURE__ */ new WeakMap();
function Xo(n) {
  return n == null ? !1 : (yr.has(n) || (n.tagName === "PRE" ? yr.set(n, !0) : yr.set(n, Xo(n.parentNode))), yr.get(n));
}
function Hi(n, t, e, r, s) {
  return t.nodeType === t.TEXT_NODE ? r.reduce((i, l) => l(t, i, n), new O()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, l) => {
    let a = Hi(n, l, e, r, s);
    return l.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(l, c, n), a), a = (s.get(l) || []).reduce((c, h) => h(l, c, n), a)), i.concat(a);
  }, new O()) : new O();
}
function Gs(n) {
  return (t, e, r) => we(e, n, !0, r);
}
function Zd(n, t, e) {
  const r = kt.keys(n), s = Tt.keys(n), i = ie.keys(n), l = {};
  return r.concat(s).concat(i).forEach((a) => {
    let c = e.query(a, q.ATTRIBUTE);
    c != null && (l[c.attrName] = c.value(n), l[c.attrName]) || (c = Vd[a], c != null && (c.attrName === a || c.keyName === a) && (l[c.attrName] = c.value(n) || void 0), c = Dl[a], c != null && (c.attrName === a || c.keyName === a) && (c = Dl[a], l[c.attrName] = c.value(n) || void 0));
  }), Object.entries(l).reduce((a, c) => {
    let [h, d] = c;
    return we(a, h, d, e);
  }, t);
}
function Xd(n, t, e) {
  const r = e.query(n);
  if (r == null) return t;
  if (r.prototype instanceof st) {
    const s = {}, i = r.value(n);
    if (i != null)
      return s[r.blotName] = i, new O().insert(s, r.formats(n, e));
  } else if (r.prototype instanceof Sn && !Bn(t, `
`) && t.insert(`
`), "blotName" in r && "formats" in r && typeof r.formats == "function")
    return we(t, r.blotName, r.formats(n, e), e);
  return t;
}
function Yd(n, t) {
  return Bn(t, `
`) || t.insert(`
`), t;
}
function Qd(n, t, e) {
  const r = e.query("code-block"), s = r && "formats" in r && typeof r.formats == "function" ? r.formats(n, e) : !0;
  return we(t, "code-block", s, e);
}
function Jd() {
  return new O();
}
function tg(n, t, e) {
  const r = e.query(n);
  if (r == null || // @ts-expect-error
  r.blotName !== "list" || !Bn(t, `
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
function eg(n, t, e) {
  const r = n;
  let s = r.tagName === "OL" ? "ordered" : "bullet";
  const i = r.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), we(t, "list", s, e);
}
function jl(n, t, e) {
  if (!Bn(t, `
`)) {
    if (Jt(n, e) && (n.childNodes.length > 0 || n instanceof HTMLParagraphElement))
      return t.insert(`
`);
    if (t.length() > 0 && n.nextSibling) {
      let r = n.nextSibling;
      for (; r != null; ) {
        if (Jt(r, e))
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
function ng(n, t, e) {
  var i;
  const r = {}, s = n.style || {};
  return s.fontStyle === "italic" && (r.italic = !0), s.textDecoration === "underline" && (r.underline = !0), s.textDecoration === "line-through" && (r.strike = !0), ((i = s.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((l, a) => {
    let [c, h] = a;
    return we(l, c, h, e);
  }, t), parseFloat(s.textIndent || 0) > 0 ? new O().insert("	").concat(t) : t;
}
function rg(n, t, e) {
  var s, i;
  const r = ((s = n.parentElement) == null ? void 0 : s.tagName) === "TABLE" ? n.parentElement : (i = n.parentElement) == null ? void 0 : i.parentElement;
  if (r != null) {
    const a = Array.from(r.querySelectorAll("tr")).indexOf(n) + 1;
    return we(t, "table", a, e);
  }
  return t;
}
function sg(n, t, e) {
  var s;
  let r = n.data;
  if (((s = n.parentElement) == null ? void 0 : s.tagName) === "O:P")
    return t.insert(r.trim());
  if (!Xo(n)) {
    if (r.trim().length === 0 && r.includes(`
`) && !Wd(n, e))
      return t;
    const i = (l, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && l ? " " : c;
    };
    r = r.replace(/\r\n/g, " ").replace(/\n/g, " "), r = r.replace(/\s\s+/g, i.bind(i, !0)), (n.previousSibling == null && n.parentElement != null && Jt(n.parentElement, e) || n.previousSibling instanceof Element && Jt(n.previousSibling, e)) && (r = r.replace(/^\s+/, i.bind(i, !1))), (n.nextSibling == null && n.parentElement != null && Jt(n.parentElement, e) || n.nextSibling instanceof Element && Jt(n.nextSibling, e)) && (r = r.replace(/\s+$/, i.bind(i, !1)));
  }
  return t.insert(r);
}
class Yo extends Mt {
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
      s === N.events.SELECTION_CHANGE ? i && a !== N.sources.SILENT && (this.currentRange = i) : s === N.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === N.sources.USER ? this.record(i, l) : this.transform(i)), this.currentRange = fi(this.currentRange, i));
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
      range: fi(s.range, l)
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
    Pl(this.stack.undo, e), Pl(this.stack.redo, e);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e) {
    if (e.range)
      this.quill.setSelection(e.range, N.sources.USER);
    else {
      const r = lg(this.quill.scroll, e.delta);
      this.quill.setSelection(r, N.sources.USER);
    }
  }
}
x(Yo, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function Pl(n, t) {
  let e = t;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = n[r];
    n[r] = {
      delta: e.transform(s.delta, !0),
      range: s.range && fi(s.range, e)
    }, e = s.delta.transform(e), n[r].delta.length() === 0 && n.splice(r, 1);
  }
}
function ig(n, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith(`
`) : e.attributes != null ? Object.keys(e.attributes).some((r) => n.query(r, q.BLOCK) != null) : !1;
}
function lg(n, t) {
  const e = t.reduce((s, i) => s + (i.delete || 0), 0);
  let r = t.length() - e;
  return ig(n, t) && (r -= 1), r;
}
function fi(n, t) {
  if (!n) return n;
  const e = t.transformPosition(n.index), r = t.transformPosition(n.index + n.length);
  return {
    index: e,
    length: r - e
  };
}
class Qo extends Mt {
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
Qo.DEFAULTS = {
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
const og = ["insertText", "insertReplacementText"];
class ag extends Mt {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (r) => {
      this.handleBeforeInput(r);
    }), /Android/i.test(navigator.userAgent) || t.on(N.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    Fi({
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
    if (this.quill.composition.isComposing || t.defaultPrevented || !og.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const r = cg(t);
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
function cg(n) {
  var t;
  return typeof n.data == "string" ? n.data : (t = n.dataTransfer) != null && t.types.includes("text/plain") ? n.dataTransfer.getData("text/plain") : null;
}
const ug = /Mac/i.test(navigator.platform), hg = 100, fg = (n) => !!(n.key === "ArrowLeft" || n.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n.key === "ArrowUp" || n.key === "ArrowDown" || n.key === "Home" || ug && n.key === "a" && n.ctrlKey === !0);
class dg extends Mt {
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
        if (!(s instanceof Nt) || !s.uiNode)
          return !0;
        const l = getComputedStyle(s.domNode).direction === "rtl";
        return l && i.key !== "ArrowRight" || !l && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(e.index - 1, e.length + (i.shiftKey ? 1 : 0), N.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e) => {
      !e.defaultPrevented && fg(e) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + hg, this.isListening) return;
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
    if (!(s instanceof Nt) || !s.uiNode) return;
    const i = document.createRange();
    i.setStartAfter(s.uiNode), i.setEndAfter(s.uiNode), e.removeAllRanges(), e.addRange(i);
  }
}
N.register({
  "blots/block": W,
  "blots/block/embed": ut,
  "blots/break": xt,
  "blots/container": Ae,
  "blots/cursor": Ve,
  "blots/embed": Mi,
  "blots/inline": Rt,
  "blots/scroll": Ue,
  "blots/text": wt,
  "modules/clipboard": Zo,
  "modules/history": Yo,
  "modules/keyboard": $r,
  "modules/uploader": Qo,
  "modules/input": ag,
  "modules/uiNode": dg
});
class gg extends Tt {
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
const pg = new gg("indent", "ql-indent", {
  scope: q.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class di extends W {
}
x(di, "blotName", "blockquote"), x(di, "tagName", "blockquote");
class gi extends W {
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
x(gi, "blotName", "header"), x(gi, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class Mn extends Ae {
}
Mn.blotName = "list-container";
Mn.tagName = "OL";
class $n extends W {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    N.register(Mn);
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
$n.blotName = "list";
$n.tagName = "LI";
Mn.allowedChildren = [$n];
$n.requiredContainer = Mn;
class qn extends Rt {
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
x(qn, "blotName", "bold"), x(qn, "tagName", ["STRONG", "B"]);
class pi extends qn {
}
x(pi, "blotName", "italic"), x(pi, "tagName", ["EM", "I"]);
class te extends Rt {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return Jo(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
x(te, "blotName", "link"), x(te, "tagName", "A"), x(te, "SANITIZED_URL", "about:blank"), x(te, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Jo(n, t) {
  const e = document.createElement("a");
  e.href = n;
  const r = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(r) > -1;
}
class mi extends Rt {
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB") return "sub";
    if (t.tagName === "SUP") return "super";
  }
}
x(mi, "blotName", "script"), x(mi, "tagName", ["SUB", "SUP"]);
class bi extends qn {
}
x(bi, "blotName", "strike"), x(bi, "tagName", ["S", "STRIKE"]);
class yi extends Rt {
}
x(yi, "blotName", "underline"), x(yi, "tagName", "U");
class Er extends Mi {
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
x(Er, "blotName", "formula"), x(Er, "className", "ql-formula"), x(Er, "tagName", "SPAN");
const Ul = ["alt", "height", "width"];
class vi extends st {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Ul.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return Jo(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Ul.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
x(vi, "blotName", "image"), x(vi, "tagName", "IMG");
const Fl = ["height", "width"];
class Ar extends ut {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Fl.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static sanitize(t) {
    return te.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Fl.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
}
x(Ar, "blotName", "video"), x(Ar, "className", "ql-video"), x(Ar, "tagName", "IFRAME");
const vn = new Tt("code-token", "hljs", {
  scope: q.INLINE
});
class zt extends Rt {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(J.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, r) {
    super(t, e, r), vn.add(this.domNode, r);
  }
  format(t, e) {
    t !== zt.blotName ? super.format(t, e) : e ? vn.add(this.domNode, e) : (vn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), vn.value(this.domNode) || this.unwrap();
  }
}
zt.blotName = "code-token";
zt.className = "ql-token";
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
    return this.formatAt(0, this.length(), zt.blotName, !1), super.replaceWith(t, e);
  }
}
class An extends Ne {
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
        const l = this.children.reduce((c, h) => c.concat(Bo(h, !1)), new O()), a = t(s, i);
        l.diff(a).reduce((c, h) => {
          let {
            retain: d,
            attributes: m
          } = h;
          return d ? (m && Object.keys(m).forEach((g) => {
            [ct.blotName, zt.blotName].includes(g) && this.formatAt(c, d, g, m[g]);
          }), c + d) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [r] = this.children.find(t);
    return `<pre data-language="${r ? ct.formats(r.domNode) : "plain"}">
${Mr(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = ct.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
An.allowedChildren = [ct];
ct.requiredContainer = An;
ct.allowedChildren = [zt, Ve, wt, xt];
const mg = (n, t, e) => {
  if (typeof n.versionString == "string") {
    const r = n.versionString.split(".")[0];
    if (parseInt(r, 10) >= 11)
      return n.highlight(e, {
        language: t
      }).value;
  }
  return n.highlight(t, e).value;
};
class ta extends Mt {
  static register() {
    N.register(zt, !0), N.register(ct, !0), N.register(An, !0);
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
      if (!(t instanceof An)) return;
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
    (t == null ? this.quill.scroll.descendants(An) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(N.sources.SILENT), r != null && this.quill.setSelection(r, N.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return Mr(t).split(`
`).reduce((s, i, l) => (l !== 0 && s.insert(`
`, {
        [J.blotName]: e
      }), s.insert(i)), new O());
    const r = this.quill.root.ownerDocument.createElement("div");
    return r.classList.add(J.className), r.innerHTML = mg(this.options.hljs, e, t), Hi(this.quill.scroll, r, [(s, i) => {
      const l = vn.value(s);
      return l ? i.compose(new O().retain(i.length(), {
        [zt.blotName]: l
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((l, a, c) => (c !== 0 && l.insert(`
`, {
      [J.blotName]: e
    }), l.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
ta.DEFAULTS = {
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
const wn = class wn extends W {
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", zi()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === wn.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
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
x(wn, "blotName", "table"), x(wn, "tagName", "TD");
let At = wn;
class Gt extends Ae {
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
x(Gt, "blotName", "table-row"), x(Gt, "tagName", "TR");
class It extends Ae {
}
x(It, "blotName", "table-body"), x(It, "tagName", "TBODY");
class Ze extends Ae {
  balanceCells() {
    const t = this.descendants(Gt), e = t.reduce((r, s) => Math.max(s.children.length, r), 0);
    t.forEach((r) => {
      new Array(e - r.children.length).fill(0).forEach(() => {
        let s;
        r.children.head != null && (s = At.formats(r.children.head.domNode));
        const i = this.scroll.create(At.blotName, s);
        r.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(It);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t);
      s != null && s.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(It);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t), i = At.formats(r.children.head.domNode), l = this.scroll.create(At.blotName, i);
      r.insertBefore(l, s);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(It);
    if (e == null || e.children.head == null) return;
    const r = zi(), s = this.scroll.create(Gt.blotName);
    e.children.head.children.forEach(() => {
      const l = this.scroll.create(At.blotName, r);
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
x(Ze, "blotName", "table-container"), x(Ze, "tagName", "TABLE");
Ze.allowedChildren = [It];
It.requiredContainer = Ze;
It.allowedChildren = [Gt];
Gt.requiredContainer = It;
Gt.allowedChildren = [At];
At.requiredContainer = Gt;
function zi() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class bg extends Mt {
  static register() {
    N.register(At), N.register(Gt), N.register(It), N.register(Ze);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ze).forEach((t) => {
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
    if (e == null || e.statics.blotName !== At.blotName)
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
        table: zi()
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
const Hl = ft("quill:toolbar");
class Gi extends Mt {
  constructor(t, e) {
    var r, s;
    if (super(t, e), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), yg(i, this.options.container), (s = (r = t.container) == null ? void 0 : r.parentNode) == null || s.insertBefore(i, t.container), this.container = i;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Hl.error("Container required for toolbar", this.options);
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
      Hl.warn("ignoring attaching to nonexistent format", e, t);
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
        this.quill.scroll.query(e).prototype instanceof st
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
Gi.DEFAULTS = {};
function zl(n, t, e) {
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), e != null ? (r.value = e, r.setAttribute("aria-label", `${t}: ${e}`)) : r.setAttribute("aria-label", t), n.appendChild(r);
}
function yg(n, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const r = document.createElement("span");
    r.classList.add("ql-formats"), e.forEach((s) => {
      if (typeof s == "string")
        zl(r, s);
      else {
        const i = Object.keys(s)[0], l = s[i];
        Array.isArray(l) ? vg(r, i, l) : zl(r, i, l);
      }
    }), n.appendChild(r);
  });
}
function vg(n, t, e) {
  const r = document.createElement("select");
  r.classList.add(`ql-${t}`), e.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), r.appendChild(i);
  }), n.appendChild(r);
}
Gi.DEFAULTS = {
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
const Eg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', Ag = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', Ng = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', wg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', Tg = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', xg = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', Lg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', Sg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Gl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', _g = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', Og = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', qg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', Cg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', Ig = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', kg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Rg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Bg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', Mg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', $g = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', Dg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', jg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', Pg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', Ug = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', Fg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Hg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', zg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Gg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Kg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', Vg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Wg = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', Zg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', Xg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', Yg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', Cn = {
  align: {
    "": Eg,
    center: Ag,
    right: Ng,
    justify: wg
  },
  background: Tg,
  blockquote: xg,
  bold: Lg,
  clean: Sg,
  code: Gl,
  "code-block": Gl,
  color: _g,
  direction: {
    "": Og,
    rtl: qg
  },
  formula: Cg,
  header: {
    1: Ig,
    2: kg,
    3: Rg,
    4: Bg,
    5: Mg,
    6: $g
  },
  italic: Dg,
  image: jg,
  indent: {
    "+1": Pg,
    "-1": Ug
  },
  link: Fg,
  list: {
    bullet: Hg,
    check: zg,
    ordered: Gg
  },
  script: {
    sub: Kg,
    super: Vg
  },
  strike: Wg,
  table: Zg,
  underline: Xg,
  video: Yg
}, Qg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Kl = 0;
function Vl(n, t) {
  n.setAttribute(t, `${n.getAttribute(t) !== "true"}`);
}
class Dr {
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
    this.container.classList.toggle("ql-expanded"), Vl(this.label, "aria-expanded"), Vl(this.options, "aria-hidden");
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
    return t.classList.add("ql-picker-label"), t.innerHTML = Qg, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = `ql-picker-options-${Kl}`, Kl += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
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
class ea extends Dr {
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
class na extends Dr {
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
const Jg = (n) => {
  const {
    overflowY: t
  } = getComputedStyle(n, null);
  return t !== "visible" && t !== "clip";
};
class ra {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Jg(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
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
const tp = [!1, "center", "right", "justify"], ep = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], np = [!1, "serif", "monospace"], rp = ["1", "2", "3", !1], sp = ["small", !1, "large", "huge"];
class Dn extends We {
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
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && yn(s, tp), typeof e.align == "object"))
        return new na(s, e.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && yn(s, ep, i === "background" ? "#ffffff" : "#000000"), new ea(s, e[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? yn(s, np) : s.classList.contains("ql-header") ? yn(s, rp) : s.classList.contains("ql-size") && yn(s, sp)), new Dr(s);
    });
    const r = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(S.events.EDITOR_CHANGE, r);
  }
}
Dn.DEFAULTS = ee({}, We.DEFAULTS, {
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
class sa extends ra {
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
        t = ip(t);
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
function ip(n) {
  let t = n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : n;
}
function yn(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((r) => {
    const s = document.createElement("option");
    r === e ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(r)), n.appendChild(s);
  });
}
const lp = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class ia extends sa {
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
            const c = a[a.length - 1], h = this.quill.getIndex(c), d = Math.min(c.length() - 1, s.index + s.length - h), m = this.quill.getBounds(new re(h, d));
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
x(ia, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class la extends Dn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = lp), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new ia(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), Cn), this.buildPickers(t.container.querySelectorAll("select"), Cn));
  }
}
la.DEFAULTS = ee({}, Dn.DEFAULTS, {
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
const op = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class oa extends sa {
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
          const [i, l] = this.quill.scroll.descendant(te, e.index);
          if (i != null) {
            this.linkRange = new re(e.index - l, i.length());
            const a = te.formats(i.domNode);
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
x(oa, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class aa extends Dn {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = op), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), Cn), this.buildPickers(t.container.querySelectorAll("select"), Cn), this.tooltip = new oa(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, r) => {
      t.handlers.link.call(t, !r.format.link);
    }));
  }
}
aa.DEFAULTS = ee({}, Dn.DEFAULTS, {
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
  "attributors/attribute/direction": Uo,
  "attributors/class/align": Do,
  "attributors/class/background": xd,
  "attributors/class/color": Td,
  "attributors/class/direction": Fo,
  "attributors/class/font": Go,
  "attributors/class/size": Vo,
  "attributors/style/align": jo,
  "attributors/style/background": ji,
  "attributors/style/color": Di,
  "attributors/style/direction": Ho,
  "attributors/style/font": Ko,
  "attributors/style/size": Wo
}, !0);
N.register({
  "formats/align": Do,
  "formats/direction": Fo,
  "formats/indent": pg,
  "formats/background": ji,
  "formats/color": Di,
  "formats/font": Go,
  "formats/size": Vo,
  "formats/blockquote": di,
  "formats/code-block": J,
  "formats/header": gi,
  "formats/list": $n,
  "formats/bold": qn,
  "formats/code": Pi,
  "formats/italic": pi,
  "formats/link": te,
  "formats/script": mi,
  "formats/strike": bi,
  "formats/underline": yi,
  "formats/formula": Er,
  "formats/image": vi,
  "formats/video": Ar,
  "modules/syntax": ta,
  "modules/table": bg,
  "modules/toolbar": Gi,
  "themes/bubble": la,
  "themes/snow": aa,
  "ui/icons": Cn,
  "ui/picker": Dr,
  "ui/icon-picker": na,
  "ui/color-picker": ea,
  "ui/tooltip": ra
}, !0);
const yt = ft("quill-placeholder-blot");
function Ks(n) {
  if (!(n instanceof HTMLElement))
    return;
  let t = {};
  return n.hasAttribute("data-id") && (t.id = n.getAttribute("data-id")), n.hasAttribute("data-label") && (t.label = n.getAttribute("data-label")), t.required = n.hasAttribute("data-required"), t;
}
class ap extends Event {
  constructor(t, e) {
    super(t, e), this.value = {}, this.event = new Event(t);
  }
}
const Yt = class Yt extends st {
  constructor(t, e) {
    super(t, e), this.mounted = !1, yt.log("PlaceholderBlot constructed", e);
  }
  static create(t) {
    yt.log("create static", t);
    let e = super.create();
    if (!(e instanceof HTMLElement))
      return e;
    yt.log(e), t.required && e.setAttribute("data-required", "true"), e.setAttribute("data-id", t.id), e.setAttribute("data-label", t.label), e.setAttribute("spellcheck", "false");
    const r = document.createElement("span");
    r.setAttribute("contenteditable", "false");
    const { delimiters: s } = Yt, i = typeof s == "string" ? `${s}${t.label}${s}` : `${s[0]}${t.label}${s[1] || s[0]}`;
    return r.innerText = i, e.appendChild(r), e;
  }
  static value(t) {
    return yt.log("value static"), Ks(t);
  }
  static formats(t, e) {
    yt.log("formats (ignore)");
  }
  format(t, e) {
    yt.log("format " + t + " (ignore)");
  }
  attach() {
    yt.log("attach()"), super.attach(), this.mounted || (this.parent && this.parent.statics.allowedChildren && this.parent.statics.allowedChildren.indexOf(Yt) < 0 && (this.parent.statics.allowedChildren.push(Yt), yt.log("PlaceholderBlot alloweed for parent")), this.clickHandler = this.getClickHandler(), this.domNode.addEventListener("click", this.clickHandler, !1));
  }
  detach() {
    yt.log("detach()"), super.detach(), this.mounted = !1, this.clickHandler && (this.domNode.removeEventListener("click", this.clickHandler), this.clickHandler = void 0);
  }
  value() {
    return yt.log("value"), Ks(this.domNode);
  }
  length() {
    return 1;
  }
  deleteAt(t, e) {
    let r = Ks(this.domNode);
    (!r || !r.required) && super.deleteAt(t, e);
  }
  getClickHandler() {
    return (t) => {
      yt.log("onClick", t);
      const e = this.buildEvent("placeholder-clicked", t);
      this.scroll.domNode.dispatchEvent(e), t.preventDefault();
    };
  }
  buildEvent(t, e) {
    const r = new ap(t, {
      bubbles: !0,
      cancelable: !0
    });
    return r.value = Object.assign({}, this.domNode.dataset), r.event = e, r.sourceNode = this.domNode, r;
  }
};
Yt.blotName = "placeholder", Yt.tagName = "span", Yt.className = "ql-placeholder-content";
let Fe = Yt;
const Be = ft("quill-placeholder-blot"), cp = N.import("core/module");
class bp extends cp {
  constructor(t, e) {
    if (super(t, e), this.placeholders = [], this.spaceAfterInsert = !0, e) {
      this.spaceAfterInsert = e.spaceAfterInsert === !0;
      const s = e.debug || "warn";
      ft.level(s), Be.log("Level: " + s), Array.isArray(e.placeholders) && (this.placeholders = e.placeholders), Fe.className = e.className || "ql-placeholder-content", Fe.delimiters = e.delimiters || ["{", "}"];
    }
    this.quill.scroll.statics.allowedChildren.push(Fe), t.getModule("toolbar").addHandler("placeholder", this.toolbarHandler.bind(this)), this.quill.scroll.domNode.addEventListener("placeholder-clicked", this.onClick.bind(this));
  }
  onClick(t) {
    t.preventDefault(), Be.log("handle placeholder onClick()", t);
    const e = be.find(t.sourceNode);
    if (Be.log(e), e instanceof Fe) {
      const r = this.quill.getIndex(e);
      this.setSelection(r + 1);
    }
  }
  toolbarHandler(t) {
    const e = this.quill.getSelection();
    if (e !== null) {
      const r = this.placeholders.filter((i) => i.id === t)[0];
      if (!r)
        throw new Error(`Missing placeholder for ${t}`);
      const s = e.index;
      this.quill.deleteText(s, e.length), this.quill.insertEmbed(s, "placeholder", r, N.sources.USER), this.spaceAfterInsert ? (this.quill.insertText(s + 1, " ", N.sources.USER), this.setSelection(s + 2)) : this.setSelection(s + 1);
    }
  }
  setSelection(t, e = 0, r = 50) {
    Be.log("setSelection " + t + " => " + e), this.quill.setSelection(new re(t, e), N.sources.USER);
  }
  onTextChange(t, e, r) {
    if (r === N.sources.USER) {
      const s = this.quill.getContents();
      Be.log(s);
      try {
        const i = s.diff(e);
        i.ops.filter((a) => {
          let c = a.insert;
          return c && c.placeholder && c.placeholder.required;
        }).length > 0 && this.quill.updateContents(i, N.sources.SILENT);
      } catch (i) {
        Be.error(i);
      }
    }
  }
}
export {
  Fe as PlaceholderBlot,
  ap as PlaceholderEvent,
  bp as default,
  Ks as readNodeData
};
