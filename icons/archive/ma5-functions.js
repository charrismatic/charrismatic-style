! function() { "use strict"; var c = {}; try { "undefined" != typeof window && (c = window) } catch(c) {} var l = (c.navigator || {}).userAgent,
		h = void 0 === l ? "" : l,
		z = c,
		v = (~h.indexOf("MSIE") || h.indexOf("Trident/"), "___FONT_AWESOME___"),
		m = function() { try { return !0 } catch(c) { return !1 } }(),
		s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		e = s.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(s.map(function(c) { return c + "x" })).concat(e.map(function(c) { return "w-" + c })); var a = z || {};
	a[v] || (a[v] = {}), a[v].styles || (a[v].styles = {}), a[v].hooks || (a[v].hooks = {}), a[v].shims || (a[v].shims = []); var t = a[v],
		M = Object.assign || function(c) { for(var l = 1; l < arguments.length; l++) {


! function(c) { try { c() } catch(c) { if(!m) throw c } }(function() {! function c(l, z) { var h = Object.keys(z).reduce(function(c, l) { var h = z[l]; return h.icon ? c[h.iconName] = h.icon : c[l] = h, c }, {}); "function" == typeof t.hooks.addPack ? t.hooks.addPack(l, h) : t.styles[l] = M({}, t.styles[l] || {}, h), "fas" === l && c("fa", z) }("fas", f) }) }(),
function() { "use strict"; var c = function() {},
		l = {},
		h = {},
		z = null,
		v = { mark: c, measure: c }; try { "undefined" != typeof window && (l = window), "undefined" != typeof document && (h = document), "undefined" != typeof MutationObserver && (z = MutationObserver), "undefined" != typeof performance && (v = performance) } catch(c) {} var m = (l.navigator || {}).userAgent,
		s = void 0 === m ? "" : m,
		r = l,
		H = h,
		e = z,
		a = v,
		t = !!r.document,
		M = !!H.documentElement && !!H.head && "function" == typeof H.addEventListener && "function" == typeof H.createElement,
		p = ~s.indexOf("MSIE") || ~s.indexOf("Trident/"),
		f = "___FONT_AWESOME___",
		b = 16,
		i = "svg-inline--fa",
		g = "data-fa-i2svg",
		V = "data-fa-pseudo-element",
		n = "data-prefix",
		o = "data-icon",
		C = "fontawesome-i2svg",
		L = ["HTML", "HEAD", "STYLE", "SCRIPT"],
		u = function() { try { return !0 } catch(c) { return !1 } }(),
		d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		S = d.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
		y = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
		w = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(d.map(function(c) { return c + "x" })).concat(S.map(function(c) { return "w-" + c })),
		k = function(c, l) { if(!(c instanceof l)) throw new TypeError("Cannot call a class as a function") },
		x = function() {
			function z(c, l) { for(var h = 0; h < l.length; h++) { var z = l[h];
					z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(c, z.key, z) } } return function(c, l, h) { return l && z(c.prototype, l), h && z(c, h), c } }(),
		A = Object.assign || function(c) { for(var l = 1; l < arguments.length; l++) { var h = arguments[l]; for(var z in h) Object.prototype.hasOwnProperty.call(h, z) && (c[z] = h[z]) } return c },
		q = function(c, l) { if(Array.isArray(c)) return c; if(Symbol.iterator in Object(c)) return function(c, l) { var h = [],
					z = !0,
					v = !1,
					m = void 0; try { for(var s, e = c[Symbol.iterator](); !(z = (s = e.next()).done) && (h.push(s.value), !l || h.length !== l); z = !0); } catch(c) { v = !0, m = c } finally { try {!z && e.return && e.return() } finally { if(v) throw m } } return h }(c, l); throw new TypeError("Invalid attempt to destructure non-iterable instance") },
		j = function(c) { if(Array.isArray(c)) { for(var l = 0, h = Array(c.length); l < c.length; l++) h[l] = c[l]; return h } return Array.from(c) },
		O = r.FontAwesomeConfig || {}; if(H && "function" == typeof H.querySelector) {
		[
			["data-family-prefix", "familyPrefix"],
			["data-replacement-class", "replacementClass"],
			["data-auto-replace-svg", "autoReplaceSvg"],
			["data-auto-add-css", "autoAddCss"],
			["data-auto-a11y", "autoA11y"],
			["data-search-pseudo-elements", "searchPseudoElements"],
			["data-observe-mutations", "observeMutations"],
			["data-keep-original-source", "keepOriginalSource"],
			["data-measure-performance", "measurePerformance"],
			["data-show-missing-icons", "showMissingIcons"]
		].forEach(function(c) { var l, h = q(c, 2),
				z = h[0],
				v = h[1],
				m = "" === (l = function(c) { var l = H.querySelector("script[" + c + "]"); if(l) return l.getAttribute(c) }(z)) || "false" !== l && ("true" === l || l);
			null != m && (O[v] = m) }) } var N = A({ familyPrefix: "fa", replacementClass: i, autoReplaceSvg: !0, autoAddCss: !0, autoA11y: !0, searchPseudoElements: !1, observeMutations: !0, keepOriginalSource: !0, measurePerformance: !1, showMissingIcons: !0 }, O);
	N.autoReplaceSvg || (N.observeMutations = !1); var E = A({}, N);
	r.FontAwesomeConfig = E; var P = r || {};
	P[f] || (P[f] = {}), P[f].styles || (P[f].styles = {}), P[f].hooks || (P[f].hooks = {}), P[f].shims || (P[f].shims = []); var T = P[f],
		_ = [],
		R = !1;
	M && ((R = (H.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(H.readyState)) || H.addEventListener("DOMContentLoaded", function c() { H.removeEventListener("DOMContentLoaded", c), R = 1, _.map(function(c) { return c() }) })); var F = function(c) { M && (R ? setTimeout(c, 0) : _.push(c)) },
		I = b,
		W = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };

	function Y(c) { if(c && M) { var l = H.createElement("style");
			l.setAttribute("type", "text/css"), l.innerHTML = c; for(var h = H.head.childNodes, z = null, v = h.length - 1; - 1 < v; v--) { var m = h[v],
					s = (m.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(s) && (z = m) } return H.head.insertBefore(l, z), c } } var B = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	function D() { for(var c = 12, l = ""; 0 < c--;) l += B[62 * Math.random() | 0]; return l }

	function X(c) { for(var l = [], h = (c || []).length >>> 0; h--;) l[h] = c[h]; return l }

	function U(c) { return c.classList ? X(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function(c) { return c }) }

	function K(c, l) { var h, z = l.split("-"),
			v = z[0],
			m = z.slice(1).join("-"); return v !== c || "" === m || (h = m, ~w.indexOf(h)) ? null : m }

	function G(c) { return("" + c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }

	function J(h) { return Object.keys(h || {}).reduce(function(c, l) { return c + (l + ": ") + h[l] + ";" }, "") }

	function Q(c) { return c.size !== W.size || c.x !== W.x || c.y !== W.y || c.rotate !== W.rotate || c.flipX || c.flipY }

	function Z(c) { var l = c.transform,
			h = c.containerWidth,
			z = c.iconWidth; return { outer: { transform: "translate(" + h / 2 + " 256)" }, inner: { transform: "translate(" + 32 * l.x + ", " + 32 * l.y + ") " + " " + ("scale(" + l.size / 16 * (l.flipX ? -1 : 1) + ", " + l.size / 16 * (l.flipY ? -1 : 1) + ") ") + " " + ("rotate(" + l.rotate + " 0 0)") }, path: { transform: "translate(" + z / 2 * -1 + " -256)" } } } var $ = { x: 0, y: 0, width: "100%", height: "100%" },
		cc = function(c) { var l = c.children,
				h = c.attributes,
				z = c.main,
				v = c.mask,
				m = c.transform,
				s = z.width,
				e = z.icon,
				a = v.width,
				t = v.icon,
				M = Z({ transform: m, containerWidth: a, iconWidth: s }),
				f = { tag: "rect", attributes: A({}, $, { fill: "white" }) },
				r = { tag: "g", attributes: A({}, M.inner), children: [{ tag: "path", attributes: A({}, e.attributes, M.path, { fill: "black" }) }] },
				H = { tag: "g", attributes: A({}, M.outer), children: [r] },
				i = "mask-" + D(),
				V = "clip-" + D(),
				n = { tag: "defs", children: [{ tag: "clipPath", attributes: { id: V }, children: [t] }, { tag: "mask", attributes: A({}, $, { id: i, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" }), children: [f, H] }] }; return l.push(n, { tag: "rect", attributes: A({ fill: "currentColor", "clip-path": "url(#" + V + ")", mask: "url(#" + i + ")" }, $) }), { children: l, attributes: h } },
		lc = function(c) { var l = c.children,
				h = c.attributes,
				z = c.main,
				v = c.transform,
				m = J(c.styles); if(0 < m.length && (h.style = m), Q(v)) { var s = Z({ transform: v, containerWidth: z.width, iconWidth: z.width });
				l.push({ tag: "g", attributes: A({}, s.outer), children: [{ tag: "g", attributes: A({}, s.inner), children: [{ tag: z.icon.tag, children: z.icon.children, attributes: A({}, z.icon.attributes, s.path) }] }] }) } else l.push(z.icon); return { children: l, attributes: h } },
		hc = function(c) { var l = c.children,
				h = c.main,
				z = c.mask,
				v = c.attributes,
				m = c.styles,
				s = c.transform; if(Q(s) && h.found && !z.found) { var e = h.width / h.height / 2,
					a = .5;
				v.style = J(A({}, m, { "transform-origin": e + s.x / 16 + "em " + (a + s.y / 16) + "em" })) } return [{ tag: "svg", attributes: v, children: l }] },
		zc = function(c) { var l = c.prefix,
				h = c.iconName,
				z = c.children,
				v = c.attributes,
				m = c.symbol,
				s = !0 === m ? l + "-" + E.familyPrefix + "-" + h : m; return [{ tag: "svg", attributes: { style: "display: none;" }, children: [{ tag: "symbol", attributes: A({}, v, { id: s }), children: z }] }] };

	function vc(c) { var l = c.icons,
			h = l.main,
			z = l.mask,
			v = c.prefix,
			m = c.iconName,
			s = c.transform,
			e = c.symbol,
			a = c.title,
			t = c.extra,
			M = c.watchable,
			f = void 0 !== M && M,
			r = z.found ? z : h,
			H = r.width,
			i = r.height,
			V = "fa-w-" + Math.ceil(H / i * 16),
			n = [E.replacementClass, m ? E.familyPrefix + "-" + m : "", V].filter(function(c) { return -1 === t.classes.indexOf(c) }).concat(t.classes).join(" "),
			o = { children: [], attributes: A({}, t.attributes, { "data-prefix": v, "data-icon": m, class: n, role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + H + " " + i }) };
		f && (o.attributes[g] = ""), a && o.children.push({ tag: "title", attributes: { id: o.attributes["aria-labelledby"] || "title-" + D() }, children: [a] }); var C = A({}, o, { prefix: v, iconName: m, main: h, mask: z, transform: s, symbol: e, styles: t.styles }),
			L = z.found && h.found ? cc(C) : lc(C),
			u = L.children,
			d = L.attributes; return C.children = u, C.attributes = d, e ? zc(C) : hc(C) }

	function mc(c) { var l = c.content,
			h = c.width,
			z = c.height,
			v = c.transform,
			m = c.title,
			s = c.extra,
			e = c.watchable,
			a = void 0 !== e && e,
			t = A({}, s.attributes, m ? { title: m } : {}, { class: s.classes.join(" ") });
		a && (t[g] = ""); var M, f, r, H, i, V, n, o, C, L = A({}, s.styles);
		Q(v) && (L.transform = (f = (M = { transform: v, startCentered: !0, width: h, height: z }).transform, r = M.width, H = void 0 === r ? b : r, i = M.height, V = void 0 === i ? b : i, n = M.startCentered, C = "", C += (o = void 0 !== n && n) && p ? "translate(" + (f.x / I - H / 2) + "em, " + (f.y / I - V / 2) + "em) " : o ? "translate(calc(-50% + " + f.x / I + "em), calc(-50% + " + f.y / I + "em)) " : "translate(" + f.x / I + "em, " + f.y / I + "em) ", C += "scale(" + f.size / I * (f.flipX ? -1 : 1) + ", " + f.size / I * (f.flipY ? -1 : 1) + ") ", C += "rotate(" + f.rotate + "deg) "), L["-webkit-transform"] = L.transform); var u = J(L);
		0 < u.length && (t.style = u); var d = []; return d.push({ tag: "span", attributes: t, children: [l] }), m && d.push({ tag: "span", attributes: { class: "sr-only" }, children: [m] }), d } var sc = function() {},
		ec = E.measurePerformance && a && a.mark && a.measure ? a : { mark: sc, measure: sc },
		ac = 'FA "5.4.1"',
		tc = function(c) { ec.mark(ac + " " + c + " ends"), ec.measure(ac + " " + c, ac + " " + c + " begins", ac + " " + c + " ends") },
		Mc = { begin: function(c) { return ec.mark(ac + " " + c + " begins"),
					function() { return tc(c) } }, end: tc },
		fc = function(c, l, h, z) { var v, m, s, e, a, t = Object.keys(c),
				M = t.length,
				f = void 0 !== z ? (e = l, a = z, function(c, l, h, z) { return e.call(a, c, l, h, z) }) : l; for(void 0 === h ? (v = 1, s = c[t[0]]) : (v = 0, s = h); v < M; v++) s = f(s, c[m = t[v]], m, c); return s },
		rc = T.styles,
		Hc = T.shims,
		ic = {},
		Vc = {},
		nc = {},
		oc = function() { var c = function(z) { return fc(rc, function(c, l, h) { return c[h] = fc(l, z, {}), c }, {}) };
			ic = c(function(c, l, h) { return c[l[3]] = h, c }), Vc = c(function(l, c, h) { var z = c[2]; return l[h] = h, z.forEach(function(c) { l[c] = h }), l }); var m = "far" in rc;
			nc = fc(Hc, function(c, l) { var h = l[0],
					z = l[1],
					v = l[2]; return "far" !== z || m || (z = "fas"), c[h] = { prefix: z, iconName: v }, c }, {}) };

	function Cc(c, l) { return ic[c][l] } oc(); var Lc = T.styles,
		uc = function() { return { prefix: null, iconName: null, rest: [] } };

	function dc(c) { return c.reduce(function(c, l) { var h = K(E.familyPrefix, l); if(Lc[l]) c.prefix = l;
			else if(h) { var z = "fa" === c.prefix ? nc[h] || { prefix: null, iconName: null } : {};
				c.iconName = z.iconName || h, c.prefix = z.prefix || c.prefix } else l !== E.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l); return c }, uc()) }

	function pc(c, l, h) { if(c && c[l] && c[l][h]) return { prefix: l, iconName: h, icon: c[l][h] } }

	function bc(c) { var h, l = c.tag,
			z = c.attributes,
			v = void 0 === z ? {} : z,
			m = c.children,
			s = void 0 === m ? [] : m; return "string" == typeof c ? G(c) : "<" + l + " " + (h = v, Object.keys(h || {}).reduce(function(c, l) { return c + (l + '="') + G(h[l]) + '" ' }, "").trim()) + ">" + s.map(bc).join("") + "</" + l + ">" } var gc = function() {};

	function Sc(c) { return "string" == typeof(c.getAttribute ? c.getAttribute(g) : null) } var yc = { replace: function(c) { var l = c[0],
				h = c[1].map(function(c) { return bc(c) }).join("\n"); if(l.parentNode && l.outerHTML) l.outerHTML = h + (E.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- " + l.outerHTML + " --\x3e" : "");
			else if(l.parentNode) { var z = document.createElement("span");
				l.parentNode.replaceChild(z, l), z.outerHTML = h } }, nest: function(c) { var l = c[0],
				h = c[1]; if(~U(l).indexOf(E.replacementClass)) return yc.replace(c); var z = new RegExp(E.familyPrefix + "-.*");
			delete h[0].attributes.style; var v = h[0].attributes.class.split(" ").reduce(function(c, l) { return l === E.replacementClass || l.match(z) ? c.toSvg.push(l) : c.toNode.push(l), c }, { toNode: [], toSvg: [] });
			h[0].attributes.class = v.toSvg.join(" "); var m = h.map(function(c) { return bc(c) }).join("\n");
			l.setAttribute("class", v.toNode.join(" ")), l.setAttribute(g, ""), l.innerHTML = m } };

	function wc(h, c) { var z = "function" == typeof c ? c : gc;
		0 === h.length ? z() : (r.requestAnimationFrame || function(c) { return c() })(function() { var c = !0 === E.autoReplaceSvg ? yc.replace : yc[E.autoReplaceSvg] || yc.replace,
				l = Mc.begin("mutate");
			h.map(c), l(), z() }) } var kc = !1; var xc = null;

	function Ac(c) { if(e && E.observeMutations) { var v = c.treeCallback,
				m = c.nodeCallback,
				s = c.pseudoElementsCallback,
				l = c.observeMutationsRoot,
				h = void 0 === l ? H.body : l;
			xc = new e(function(c) { kc || X(c).forEach(function(c) { if("childList" === c.type && 0 < c.addedNodes.length && !Sc(c.addedNodes[0]) && (E.searchPseudoElements && s(c.target), v(c.target)), "attributes" === c.type && c.target.parentNode && E.searchPseudoElements && s(c.target.parentNode), "attributes" === c.type && Sc(c.target) && ~y.indexOf(c.attributeName))
						if("class" === c.attributeName) { var l = dc(U(c.target)),
								h = l.prefix,
								z = l.iconName;
							h && c.target.setAttribute("data-prefix", h), z && c.target.setAttribute("data-icon", z) } else m(c.target) }) }), M && xc.observe(h, { childList: !0, attributes: !0, characterData: !0, subtree: !0 }) } } var qc = function(c) { var l = c.getAttribute("style"),
			h = []; return l && (h = l.split(";").reduce(function(c, l) { var h = l.split(":"),
				z = h[0],
				v = h.slice(1); return z && 0 < v.length && (c[z] = v.join(":").trim()), c }, {})), h };

	function jc(c) { for(var l = "", h = 0; h < c.length; h++) { l += ("000" + c.charCodeAt(h).toString(16)).slice(-4) } return l } var Oc = function(c) { var l, h, z = c.getAttribute("data-prefix"),
				v = c.getAttribute("data-icon"),
				m = void 0 !== c.innerText ? c.innerText.trim() : "",
				s = dc(U(c)); return z && v && (s.prefix = z, s.iconName = v), s.prefix && 1 < m.length ? s.iconName = (l = s.prefix, h = c.innerText, Vc[l][h]) : s.prefix && 1 === m.length && (s.iconName = Cc(s.prefix, jc(c.innerText))), s },
		Nc = function(c) { var l = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }; return c ? c.toLowerCase().split(" ").reduce(function(c, l) { var h = l.toLowerCase().split("-"),
					z = h[0],
					v = h.slice(1).join("-"); if(z && "h" === v) return c.flipX = !0, c; if(z && "v" === v) return c.flipY = !0, c; if(v = parseFloat(v), isNaN(v)) return c; switch(z) {
					case "grow":
						c.size = c.size + v; break;
					case "shrink":
						c.size = c.size - v; break;
					case "left":
						c.x = c.x - v; break;
					case "right":
						c.x = c.x + v; break;
					case "up":
						c.y = c.y - v; break;
					case "down":
						c.y = c.y + v; break;
					case "rotate":
						c.rotate = c.rotate + v } return c }, l) : l },
		Ec = function(c) { return Nc(c.getAttribute("data-fa-transform")) },
		Pc = function(c) { var l = c.getAttribute("data-fa-symbol"); return null !== l && ("" === l || l) },
		Tc = function(c) { var l = X(c.attributes).reduce(function(c, l) { return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c }, {}),
				h = c.getAttribute("title"); return E.autoA11y && (h ? l["aria-labelledby"] = E.replacementClass + "-title-" + D() : l["aria-hidden"] = "true"), l },
		_c = function(c) { var l = c.getAttribute("data-fa-mask"); return l ? dc(l.split(" ").map(function(c) { return c.trim() })) : uc() },
		Rc = { iconName: null, title: null, prefix: null, transform: W, symbol: !1, mask: null, extra: { classes: [], styles: {}, attributes: {} } };

	function Fc(c) { this.name = "MissingIcon", this.message = c || "Icon unavailable", this.stack = (new Error).stack }(Fc.prototype = Object.create(Error.prototype)).constructor = Fc; var Ic = { fill: "currentColor" },
		Wc = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
		Yc = { tag: "path", attributes: A({}, Ic, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" }) },
		Bc = A({}, Wc, { attributeName: "opacity" }),
		Dc = { tag: "g", children: [Yc, { tag: "circle", attributes: A({}, Ic, { cx: "256", cy: "364", r: "28" }), children: [{ tag: "animate", attributes: A({}, Wc, { attributeName: "r", values: "28;14;28;28;14;28;" }) }, { tag: "animate", attributes: A({}, Bc, { values: "1;0;1;1;0;1;" }) }] }, { tag: "path", attributes: A({}, Ic, { opacity: "1", d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z" }), children: [{ tag: "animate", attributes: A({}, Bc, { values: "1;0;0;0;0;1;" }) }] }, { tag: "path", attributes: A({}, Ic, { opacity: "0", d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z" }), children: [{ tag: "animate", attributes: A({}, Bc, { values: "0;0;1;1;0;0;" }) }] }] },
		Xc = T.styles,
		Uc = "fa-layers-text",
		Kc = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,
		Gc = { Solid: "fas", Regular: "far", Light: "fal", Brands: "fab" },
		Jc = { 900: "fas", 400: "far", 300: "fal" };

	function Qc(c, l) { var h = { found: !1, width: 512, height: 512, icon: Dc }; if(c && l && Xc[l] && Xc[l][c]) { var z = Xc[l][c];
			h = { found: !0, width: z[0], height: z[1], icon: { tag: "path", attributes: { fill: "currentColor", d: z.slice(4)[0] } } } } else if(c && l && !E.showMissingIcons) throw new Fc("Icon is missing for prefix " + l + " with icon name " + c); return h }

	function Zc(c) { var l, h, z, v, m, s, e, a, t, M, f, r, H, i, V, n, o, C, L, u = (h = Oc(l = c), z = h.iconName, v = h.prefix, m = h.rest, s = qc(l), e = Ec(l), a = Pc(l), t = Tc(l), M = _c(l), { iconName: z, title: l.getAttribute("title"), prefix: v, transform: e, symbol: a, mask: M, extra: { classes: m, styles: s, attributes: t } }); return ~u.extra.classes.indexOf(Uc) ? function(c, l) { var h = l.title,
				z = l.transform,
				v = l.extra,
				m = null,
				s = null; if(p) { var e = parseInt(getComputedStyle(c).fontSize, 10),
					a = c.getBoundingClientRect();
				m = a.width / e, s = a.height / e } return E.autoA11y && !h && (v.attributes["aria-hidden"] = "true"), [c, mc({ content: c.innerHTML, width: m, height: s, transform: z, title: h, extra: v, watchable: !0 })] }(c, u) : (f = c, H = (r = u).iconName, i = r.title, V = r.prefix, n = r.transform, o = r.symbol, C = r.mask, L = r.extra, [f, vc({ icons: { main: Qc(H, V), mask: Qc(C.iconName, C.prefix) }, prefix: V, iconName: H, transform: n, symbol: o, mask: C, title: i, extra: L, watchable: !0 })]) }

	function $c(c) { if(M) { var l = Mc.begin("searchPseudoElements");
			kc = !0,
				function() { X(c.querySelectorAll("*")).filter(function(c) { return !(c.parentNode === document.head || ~L.indexOf(c.tagName.toUpperCase()) || c.getAttribute(V) || c.parentNode && "svg" === c.parentNode.tagName) }).forEach(function(f) {
						[":before", ":after"].forEach(function(l) { var c = X(f.children).filter(function(c) { return c.getAttribute(V) === l })[0],
								h = r.getComputedStyle(f, l),
								z = h.getPropertyValue("font-family").match(Kc),
								v = h.getPropertyValue("font-weight"); if(c && !z) f.removeChild(c);
							else if(z) { var m = h.getPropertyValue("content"),
									s = ~["Light", "Regular", "Solid", "Brands"].indexOf(z[1]) ? Gc[z[1]] : Jc[v],
									e = Cc(s, jc(3 === m.length ? m.substr(1, 1) : m)); if(!c || c.getAttribute(n) !== s || c.getAttribute(o) !== e) { c && f.removeChild(c); var a = Rc.extra;
									a.attributes[V] = l; var t = vc(A({}, Rc, { icons: { main: Qc(e, s), mask: uc() }, prefix: s, iconName: e, extra: a, watchable: !0 })),
										M = H.createElement("svg"); ":before" === l ? f.insertBefore(M, f.firstChild) : f.appendChild(M), M.outerHTML = t.map(function(c) { return bc(c) }).join("\n") } } }) }) }(), kc = !1, l() } }

	function cl(c) { var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; if(M) { var h = H.documentElement.classList,
				z = function(c) { return h.add(C + "-" + c) },
				v = function(c) { return h.remove(C + "-" + c) },
				m = Object.keys(Xc),
				s = ["." + Uc + ":not([" + g + "])"].concat(m.map(function(c) { return "." + c + ":not([" + g + "])" })).join(", "); if(0 !== s.length) { var e = X(c.querySelectorAll(s)); if(0 < e.length) { z("pending"), v("complete"); var a = Mc.begin("onTree"),
						t = e.reduce(function(c, l) { try { var h = Zc(l);
								h && c.push(h) } catch(c) { u || c instanceof Fc && console.error(c) } return c }, []);
					a(), wc(t, function() { z("active"), z("complete"), v("pending"), "function" == typeof l && l() }) } } } }

	function ll(c) { var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
			h = Zc(c);
		h && wc([h], l) } var hl = function() { var c = i,
			l = E.familyPrefix,
			h = E.replacementClass,
			z = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}"; if("fa" !== l || h !== c) { var v = new RegExp("\\.fa\\-", "g"),
				m = new RegExp("\\." + c, "g");
			z = z.replace(v, "." + l + "-").replace(m, "." + h) } return z };

	function zl(c) { return { found: !0, width: c[0], height: c[1], icon: { tag: "path", attributes: { fill: "currentColor", d: c.slice(4)[0] } } } }

	function vl() { E.autoAddCss && !tl && (Y(hl()), tl = !0) }

	function ml(l, c) { return Object.defineProperty(l, "abstract", { get: c }), Object.defineProperty(l, "html", { get: function() { return l.abstract.map(function(c) { return bc(c) }) } }), Object.defineProperty(l, "node", { get: function() { if(M) { var c = H.createElement("div"); return c.innerHTML = l.html, c.children } } }), l }

	function sl(c) { var l = c.prefix,
			h = void 0 === l ? "fa" : l,
			z = c.iconName; if(z) return pc(al.definitions, h, z) || pc(T.styles, h, z) } var el, al = new(function() {
			function c() { k(this, c), this.definitions = {} } return x(c, [{ key: "add", value: function() { for(var l = this, c = arguments.length, h = Array(c), z = 0; z < c; z++) h[z] = arguments[z]; var v = h.reduce(this._pullDefinitions, {});
					Object.keys(v).forEach(function(c) { l.definitions[c] = A({}, l.definitions[c] || {}, v[c]),
							function c(l, z) { var h = Object.keys(z).reduce(function(c, l) { var h = z[l]; return h.icon ? c[h.iconName] = h.icon : c[l] = h, c }, {}); "function" == typeof T.hooks.addPack ? T.hooks.addPack(l, h) : T.styles[l] = A({}, T.styles[l] || {}, h), "fas" === l && c("fa", z) }(c, v[c]), oc() }) } }, { key: "reset", value: function() { this.definitions = {} } }, { key: "_pullDefinitions", value: function(m, c) { var s = c.prefix && c.iconName && c.icon ? { 0: c } : c; return Object.keys(s).map(function(c) { var l = s[c],
							h = l.prefix,
							z = l.iconName,
							v = l.icon;
						m[h] || (m[h] = {}), m[h][z] = v }), m } }]), c }()),
		tl = !1,
		Ml = { i2svg: function() { var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; if(M) { vl(); var l = c.node,
						h = void 0 === l ? H : l,
						z = c.callback,
						v = void 0 === z ? function() {} : z;
					E.searchPseudoElements && $c(h), cl(h, v) } }, css: hl, insertCss: function() { tl || (Y(hl()), tl = !0) }, watch: function() { var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
					l = c.autoReplaceSvgRoot,
					h = c.observeMutationsRoot;!1 === E.autoReplaceSvg && (E.autoReplaceSvg = !0), E.observeMutations = !0, F(function() { Hl({ autoReplaceSvgRoot: l }), Ac({ treeCallback: cl, nodeCallback: ll, pseudoElementsCallback: $c, observeMutationsRoot: h }) }) } },
		fl = (el = function(c) { var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				h = l.transform,
				z = void 0 === h ? W : h,
				v = l.symbol,
				m = void 0 !== v && v,
				s = l.mask,
				e = void 0 === s ? null : s,
				a = l.title,
				t = void 0 === a ? null : a,
				M = l.classes,
				f = void 0 === M ? [] : M,
				r = l.attributes,
				H = void 0 === r ? {} : r,
				i = l.styles,
				V = void 0 === i ? {} : i; if(c) { var n = c.prefix,
					o = c.iconName,
					C = c.icon; return ml(A({ type: "icon" }, c), function() { return vl(), E.autoA11y && (t ? H["aria-labelledby"] = E.replacementClass + "-title-" + D() : H["aria-hidden"] = "true"), vc({ icons: { main: zl(C), mask: e ? zl(e.icon) : { found: !1, width: null, height: null, icon: {} } }, prefix: n, iconName: o, transform: A({}, W, z), symbol: m, title: t, extra: { attributes: H, styles: V, classes: f } }) }) } }, function(c) { var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				h = (c || {}).icon ? c : sl(c || {}),
				z = l.mask; return z && (z = (z || {}).icon ? z : sl(z || {})), el(h, A({}, l, { mask: z })) }),
		rl = { noAuto: function() { E.autoReplaceSvg = !1, E.observeMutations = !1, xc && xc.disconnect() }, config: E, dom: Ml, library: al, parse: { transform: function(c) { return Nc(c) } }, findIconDefinition: sl, icon: fl, text: function(c) { var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
					h = l.transform,
					z = void 0 === h ? W : h,
					v = l.title,
					m = void 0 === v ? null : v,
					s = l.classes,
					e = void 0 === s ? [] : s,
					a = l.attributes,
					t = void 0 === a ? {} : a,
					M = l.styles,
					f = void 0 === M ? {} : M; return ml({ type: "text", content: c }, function() { return vl(), mc({ content: c, transform: A({}, W, z), title: m, extra: { attributes: t, styles: f, classes: [E.familyPrefix + "-layers-text"].concat(j(e)) } }) }) }, counter: function(c) { var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
					h = l.title,
					z = void 0 === h ? null : h,
					v = l.classes,
					m = void 0 === v ? [] : v,
					s = l.attributes,
					e = void 0 === s ? {} : s,
					a = l.styles,
					t = void 0 === a ? {} : a; return ml({ type: "counter", content: c }, function() { return vl(),
						function(c) { var l = c.content,
								h = c.title,
								z = c.extra,
								v = A({}, z.attributes, h ? { title: h } : {}, { class: z.classes.join(" ") }),
								m = J(z.styles);
							0 < m.length && (v.style = m); var s = []; return s.push({ tag: "span", attributes: v, children: [l] }), h && s.push({ tag: "span", attributes: { class: "sr-only" }, children: [h] }), s }({ content: c.toString(), title: z, extra: { attributes: e, styles: t, classes: [E.familyPrefix + "-layers-counter"].concat(j(m)) } }) }) }, layer: function(c) { return ml({ type: "layer" }, function() { vl(); var l = []; return c(function(c) { Array.isArray(c) ? c.map(function(c) { l = l.concat(c.abstract) }) : l = l.concat(c.abstract) }), [{ tag: "span", attributes: { class: E.familyPrefix + "-layers" }, children: l }] }) }, toHtml: bc },
		Hl = function() { var c = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
				l = void 0 === c ? H : c;
			0 < Object.keys(T.styles).length && M && E.autoReplaceSvg && rl.dom.i2svg({ node: l }) };! function(c) { try { c() } catch(c) { if(!u) throw c } }(function() { t && (r.FontAwesome || (r.FontAwesome = rl), F(function() { Hl(), Ac({ treeCallback: cl, nodeCallback: ll, pseudoElementsCallback: $c }) })), T.hooks = A({}, T.hooks, { addPack: function(c, l) { T.styles[c] = A({}, T.styles[c] || {}, l), oc(), Hl() }, addShims: function(c) { var l;
				(l = T.shims).push.apply(l, j(c)), oc(), Hl() } }) }) }();
