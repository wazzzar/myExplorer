/*!
 * Viewer v0.2.0
 * https://github.com/fengyuanchen/viewer
 *
 * Copyright (c) 2015 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2015-10-18T11:12:56.198Z
 */
(function (n) {
    typeof define == "function" && define.amd ? define("viewer", ["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
})(function (n) {
    "use strict";

    function ct(n) {
        return typeof n == "string"
    }

    function r(n) {
        return typeof n == "number" && !isNaN(n)
    }

    function p(n) {
        return typeof n == "undefined"
    }

    function lt(n, t) {
        var i = [];
        return r(t) && i.push(t), i.slice.apply(n, i)
    }

    function it(n, t) {
        var i = lt(arguments, 2);
        return function () {
            return n.apply(t, i.concat(lt(arguments)))
        }
    }

    function hi(n) {
        var t = [], i = n.rotate, u = n.scaleX, f = n.scaleY;
        return r(i) && t.push("rotate(" + i + "deg)"), r(u) && r(f) && t.push("scale(" + u + "," + f + ")"), t.length ? t.join(" ") : "none"
    }

    function ci(n) {
        return ct(n) ? n.replace(/^.*\//, "").replace(/[\?&#].*$/, "") : ""
    }

    function ri(n, t) {
        var i;
        if (n.naturalWidth) return t(n.naturalWidth, n.naturalHeight);
        i = document.createElement("img");
        i.onload = function () {
            t(this.width, this.height)
        };
        i.src = n.src
    }

    function f(t, i) {
        this.$element = n(t);
        this.options = n.extend({}, f.DEFAULTS, n.isPlainObject(i) && i);
        this.isImg = !1;
        this.isBuilt = !1;
        this.isShown = !1;
        this.isViewed = !1;
        this.isFulled = !1;
        this.isPlayed = !1;
        this.playing = !1;
        this.fading = !1;
        this.transitioning = !1;
        this.action = !1;
        this.target = !1;
        this.timeout = !1;
        this.index = 0;
        this.length = 0;
        this.init()
    }

    var w = n(window), at = n(document), i = "viewer", ui = document.createElement(i), rt = "viewer-toggle",
        ut = "viewer-fixed", b = "viewer-open", v = "viewer-show", e = "viewer-hide", ft = "viewer-fade",
        s = "viewer-in", fi = "viewer-move", et = "viewer-active", h = "viewer-invisible", t = "viewer-transition",
        k = "viewer-fullscreen", d = "viewer-fullscreen-exit", c = "img",
        vt = "mousedown touchstart pointerdown MSPointerDown", yt = "mousemove touchmove pointermove MSPointerMove",
        pt = "mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",
        wt = "wheel mousewheel DOMMouseScroll", g = "transitionend", l = "load." + i, bt = "keydown." + i,
        nt = "click." + i, kt = "resize." + i, dt = "build." + i, ot = "built." + i, gt = "show." + i,
        st = "shown." + i, ni = "hide." + i, ti = "hidden." + i, ei = "view." + i, ht = "viewed." + i,
        oi = typeof ui.style.transition != "undefined", si = Math.round, ii = Math.sqrt, tt = Math.abs, y = Math.min,
        a = Math.max, u = Number, o = {};
    n.extend(o, {
        init: function () {
            var i = this.options, t = this.$element, u = t.is(c), r = u ? t : t.find(c), f = r.length,
                e = n.proxy(this.ready, this);
            if (f) {
                if (n.isFunction(i.build)) t.one(dt, i.build);
                if (!this.trigger(dt).isDefaultPrevented()) if (oi || (i.transition = !1), this.isImg = u, this.length = f, this.count = 0, this.$images = r, this.$body = n("body"), i.inline) {
                    t.one(ot, n.proxy(function () {
                        this.view()
                    }, this));
                    r.each(function () {
                        if (this.complete) e(); else n(this).one(l, e)
                    })
                } else {
                    r.addClass(rt);
                    t.on(nt, n.proxy(this.start, this))
                }
            }
        }, ready: function () {
            this.count++;
            this.count === this.length && this.build()
        }
    });
    n.extend(o, {
        build: function () {
            var t = this.options, o = this.$element, r, i, s, u;
            if (!this.isBuilt) {
                r && r.length || (r = o.parent());
                this.$parent = r;
                this.$viewer = i = n(f.TEMPLATE);
                this.$canvas = i.find(".viewer-canvas");
                this.$canvas.on("contextmenu", function () {
                    return !1
                });
                if (t.button = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled, this.$footer = i.find(".viewer-footer"), this.$title = i.find(".viewer-title").toggleClass(e, !t.title), this.$toolbar = u = i.find(".viewer-toolbar").toggleClass(e, !t.toolbar), this.$navbar = i.find(".viewer-navbar").toggleClass(e, !t.navbar), this.$button = s = i.find(".viewer-button").toggleClass(e, !t.button), this.$tooltip = i.find(".viewer-tooltip"), this.$player = i.find(".viewer-player"), this.$list = i.find(".viewer-list"), u.find("li[class*=zoom]").toggleClass(h, !t.zoomable), u.find("li[class*=flip]").toggleClass(h, !t.scalable), t.rotatable || u.find("li[class*=rotate]").addClass(h).appendTo(u), t.inline ? (s.addClass(k), i.css("z-index", t.zIndexInline), r.css("position") === "static" && r.css("position", "relative")) : (s.addClass(k), i.css("z-index", t.zIndex).addClass([ut, ft, e].join(" "))), o.after(i), t.inline && (this.render(), this.bind(), this.isShown = !0), this.isBuilt = !0, n.isFunction(t.built)) o.one(ot, t.built);
                this.trigger(ot)
            }
        }, unbuild: function () {
            var n = this.options, t = this.$element;
            this.isBuilt && (n.inline && !n.container && t.removeClass(e), this.$viewer.remove())
        }
    });
    n.extend(o, {
        bind: function () {
            this.$viewer.on(nt, n.proxy(this.click, this)).on(wt, n.proxy(this.wheel, this));
            this.$canvas.on(vt, n.proxy(this.mousedown, this));
            at.on(yt, this._mousemove = it(this.mousemove, this)).on(pt, this._mouseup = it(this.mouseup, this)).on(bt, this._keydown = it(this.keydown, this));
            w.on(kt, this._resize = it(this.resize, this))
        }, unbind: function () {
            this.$viewer.off(nt, this.click).off(wt, this.wheel);
            this.$canvas.off(vt, this.mousedown);
            at.off(yt, this._mousemove).off(pt, this._mouseup).off(bt, this._keydown);
            w.off(kt, this._resize)
        }
    });
    n.extend(o, {
        render: function () {
            this.initContainer();
            this.initViewer();
            this.initList();
            this.renderViewer()
        }, initContainer: function () {
            this.container = {width: w.innerWidth(), height: w.innerHeight()}
        }, initViewer: function () {
            var i = this.options, r = this.$parent, t;
            i.inline && (this.parent = t = {width: a(r.width(), i.minWidth), height: a(r.height(), i.minHeight)});
            (this.isFulled || !t) && (t = this.container);
            this.viewer = n.extend({}, t)
        }, renderViewer: function () {
            this.options.inline && !this.isFulled && this.$viewer.css(this.viewer)
        }, initList: function () {
            var r = this.options, f = this.$element, i = this.$list, u = [];
            this.$images.each(function (t) {
                var f = this.src, e = this.alt || ci(f), i = r.url;
                f && (ct(i) ? i = this.getAttribute(i) : n.isFunction(i) && (i = i.call(this, this)), u.push('<li><img src="' + f + '" data-action="view" data-index="' + t + '" data-original-url="' + (i || f) + '" alt="' + e + '"><\/li>'))
            });
            i.html(u.join("")).find(c).one(l, {filled: !0}, n.proxy(this.loadImage, this));
            if (this.$items = i.children(), r.transition) f.one(ht, function () {
                i.addClass(t)
            })
        }, renderList: function (n) {
            var t = n || this.index, i = this.$items.eq(t).width(), r = i + 1;
            this.$list.css({width: r * this.length, marginLeft: (this.viewer.width - i) / 2 - r * t})
        }, resetList: function () {
            this.$list.empty().removeClass(t).css("margin-left", 0)
        }, initImage: function (t) {
            var f = this.options, o = this.$image, e = this.viewer, s = this.$footer.height(), i = e.width,
                r = e.height, u = this.image || {};
            ri(o[0], n.proxy(function (e, o) {
                var a = e / o, h = i, c = r, l, s;
                r * a > i ? c = i / a : h = r * a;
                h = y(h * 1, e);
                c = y(c * 1, o);
                s = {
                    naturalWidth: e,
                    naturalHeight: o,
                    aspectRatio: a,
                    ratio: h / e,
                    width: h,
                    height: c,
                    left: (i - h) / 2,
                    top: (r - c) / 2
                };
                l = n.extend({}, s);
                f.rotatable && (s.rotate = u.rotate || 0, l.rotate = 0);
                f.scalable && (s.scaleX = u.scaleX || 1, s.scaleY = u.scaleY || 1, l.scaleX = 1, l.scaleY = 1);
                this.image = s;
                this.initialImage = l;
                this.trigger("initImage.viewer", {image: s});
                n.isFunction(t) && t()
            }, this))
        }, renderImage: function (t) {
            var i = this.image, r = this.$image;
            if (r.css({
                width: i.width,
                height: i.height,
                marginLeft: i.left,
                marginTop: i.top,
                transform: hi(i)
            }), n.isFunction(t)) if (this.options.transition) r.one(g, t); else t()
        }, resetImage: function () {
            this.$image.remove();
            this.$image = null
        }
    });
    n.extend(o, {
        start: function (t) {
            var i = t.target;
            n(i).hasClass(rt) && (this.target = i, this.show())
        }, click: function (t) {
            var r = n(t.target), u = r.data("action"), i = this.image;
            switch (u) {
                case"mix":
                    this.isPlayed ? this.stop() : this.options.inline ? this.isFulled ? this.exit() : this.full() : this.hide();
                    break;
                case"view":
                    this.view(r.data("index"));
                    break;
                case"zoom-in":
                    this.zoom(.1, !0);
                    break;
                case"zoom-out":
                    this.zoom(-.1, !0);
                    break;
                case"one-to-one":
                    this.image.ratio === 1 ? this.zoomTo(this.initialImage.ratio) : this.zoomTo(1);
                    break;
                case"reset":
                    this.reset();
                    break;
                case"prev":
                    this.prev();
                    break;
                case"play":
                    this.play();
                    break;
                case"next":
                    this.next();
                    break;
                case"rotate-left":
                    this.rotate(-90);
                    break;
                case"rotate-right":
                    this.rotate(90);
                    break;
                case"flip-horizontal":
                    this.scale(-i.scaleX || -1, i.scaleY || 1);
                    break;
                case"flip-vertical":
                    this.scale(i.scaleX || 1, -i.scaleY || -1);
                    break;
                case"fullscreen":
                    this.fullscreen();
                    break;
                default:
                    this.isPlayed && this.stop()
            }
        }, load: function () {
            var i = this.options, r = this.viewer, u = this.$image;
            this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
            u.removeClass(h).css("cssText", "width:0;height:0;margin-left:" + r.width / 2 + "px;margin-top:" + r.height / 2 + "px;max-width:none!important;visibility:visible;");
            this.initImage(n.proxy(function () {
                u.toggleClass(t, i.transition).toggleClass(fi, i.movable);
                this.renderImage(n.proxy(function () {
                    this.isViewed = !0;
                    this.trigger(ht)
                }, this))
            }, this))
        }, loadImage: function (t) {
            var u = t.target, f = n(u), e = f.parent(), i = e.width(), r = e.height(), o = t.data && t.data.filled;
            ri(u, n.proxy(function (n, t) {
                var u = n / t, e = i, s = r;
                r * u > i ? o ? e = r * u : s = i / u : o ? s = i / u : e = r * u;
                f.css({width: e, height: s, marginLeft: (i - e) / 2, marginTop: (r - s) / 2})
            }, this))
        }, resize: function () {
            this.initContainer();
            this.initViewer();
            this.renderViewer();
            this.renderList();
            this.initImage(n.proxy(function () {
                this.renderImage()
            }, this));
            this.isPlayed && this.$player.find(c).one(l, n.proxy(this.loadImage, this)).trigger(l)
        }, wheel: function (n) {
            var t = n.originalEvent, r = u(this.options.zoomRatio) || .1, i = 1;
            this.isViewed && (n.preventDefault(), t.deltaY ? i = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? i = -t.wheelDelta / 120 : t.detail && (i = t.detail > 0 ? 1 : -1), this.zoom(-i * r, !0))
        }, keydown: function (n) {
            var t = this.options, i = n.which;
            if (this.isFulled && t.keyboard) switch (i) {
                case 27:
                    this.isPlayed ? this.stop() : t.inline ? this.isFulled && this.exit() : this.hide();
                    break;
                case 37:
                    this.prev();
                    break;
                case 38:
                    this.zoom(t.zoomRatio, !0);
                    break;
                case 39:
                    this.next();
                    break;
                case 40:
                    this.zoom(-t.zoomRatio, !0);
                    break;
                case 48:
                case 49:
                    (n.ctrlKey || n.shiftKey) && (n.preventDefault(), this.image.ratio === 1 ? this.zoomTo(this.initialImage.ratio) : this.zoomTo(1))
            }
        }, mousedown: function (n) {
            var e = this.options, t = n.originalEvent, r = t && t.touches, i = n, u = e.movable ? "move" : !1, f;
            if (this.isViewed) {
                if (r) {
                    if (f = r.length, f > 1) if (e.zoomable && f === 2) i = r[1], this.startX2 = i.pageX, this.startY2 = i.pageY, u = "zoom"; else return; else this.isSwitchable() && (u = "switch");
                    i = r[0]
                }
                u && (n.preventDefault(), this.action = u, this.startX = i.pageX || t && t.pageX, this.startY = i.pageY || t && t.pageY)
            }
        }, mousemove: function (n) {
            var e = this.options, o = this.action, s = this.$image, i = n.originalEvent, u = i && i.touches, r = n, f;
            if (this.isViewed) {
                if (u) {
                    if (f = u.length, f > 1) if (e.zoomable && f === 2) r = u[1], this.endX2 = r.pageX, this.endY2 = r.pageY; else return;
                    r = u[0]
                }
                o && (n.preventDefault(), o === "move" && e.transition && s.hasClass(t) && s.removeClass(t), this.endX = r.pageX || i && i.pageX, this.endY = r.pageY || i && i.pageY, this.change())
            }
        }, mouseup: function (n) {
            var i = this.action;
            i && (n.preventDefault(), i === "move" && this.options.transition && this.$image.addClass(t), this.action = !1)
        }
    });
    n.extend(o, {
        show: function () {
            var i = this.options, r;
            if (!i.inline && !this.transitioning) {
                if (this.isBuilt || this.build(), n.isFunction(i.show)) this.$element.one(gt, i.show);
                if (!this.trigger(gt).isDefaultPrevented()) {
                    this.$body.addClass(b);
                    r = this.$viewer.removeClass(e);
                    this.$element.one(st, n.proxy(function () {
                        this.view((this.target ? this.$images.index(this.target) : 0) || this.index);
                        this.target = !1
                    }, this));
                    i.transition ? (this.transitioning = !0, r.addClass(t).get(0).offsetWidth, r.one(g, n.proxy(this.shown, this)).addClass(s)) : (r.addClass(s), this.shown())
                }
            }
        }, hide: function () {
            var t = this.options, i = this.$viewer;
            if (!t.inline && !this.transitioning && this.isShown) {
                if (n.isFunction(t.hide)) this.$element.one(ni, t.hide);
                if (!this.trigger(ni).isDefaultPrevented()) if (this.isViewed && t.transition) {
                    this.transitioning = !0;
                    this.$image.one(g, n.proxy(function () {
                        i.one(g, n.proxy(this.hidden, this)).removeClass(s)
                    }, this));
                    this.zoomTo(0, !1, !0)
                } else i.removeClass(s), this.hidden()
            }
        }, htmlEncode: function () {
            function t(n) {
                return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function i(t) {
                return n[t]
            }

            var n = {"&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;"},
                r = typeof Object.keys == "function" ? function (n) {
                    return n ? Object.keys(n) : []
                } : function (n) {
                    var t = [];
                    for (var i in n) n.hasOwnProperty(i) && t.push(i);
                    return t
                }, u = new RegExp("[" + t(r(n).join("")) + "]", "g");
            return function (n) {
                return n ? String(n).replace(u, i) : n
            }
        }(), view: function (t) {
            var o = this.$title, i, f, e, u, r;
            if ((t = Number(t) || 0, this.isShown && !this.isPlayed && !(t < 0) && !(t >= this.length) && (!this.isViewed || t !== this.index)) && !this.trigger(ei).isDefaultPrevented()) {
                if (f = this.$items.eq(t), e = f.find(c), u = e.data("originalUrl"), r = e.attr("alt"), u = this.htmlEncode(u), r = this.htmlEncode(r), this.$image = i = n('<img src="' + u + '" alt="' + r + '">'), this.$items.eq(this.index).removeClass(et), f.addClass(et), this.isViewed = !1, this.index = t, this.image = null, this.$canvas.html(i.addClass(h)), i[0].complete) this.load(); else {
                    i.one(l, n.proxy(this.load, this));
                    this.timeout && clearTimeout(this.timeout);
                    this.timeout = setTimeout(function () {
                        i.removeClass(h)
                    }, 1e3)
                }
                o.empty();
                this.renderList();
                this.$element.one(ht, n.proxy(function () {
                    var n = this.image, t = n.naturalWidth, i = n.naturalHeight;
                    o.html(r + " (" + t + " &times; " + i + ")")
                }, this))
            }
        }, prev: function () {
            this.view(a(this.index - 1, 0))
        }, next: function () {
            this.view(y(this.index + 1, this.length - 1))
        }, move: function (n, t) {
            var i = this.image;
            this.moveTo(p(n) ? n : i.left + u(n), p(t) ? t : i.top + u(t))
        }, moveTo: function (n, t) {
            var f = this.image, i = !1;
            p(t) && (t = n);
            n = u(n);
            t = u(t);
            this.isShown && !this.isPlayed && this.options.movable && (r(n) && (f.left = n, i = !0), r(t) && (f.top = t, i = !0), i && this.renderImage())
        }, zoom: function (n, t) {
            var i = this.image;
            n = u(n);
            n = n < 0 ? 1 / (1 - n) : 1 + n;
            this.zoomTo(i.width * n / i.naturalWidth, t)
        }, zoomTo: function (n, t, i) {
            var f = this.options, e = .01, o = 100, u = this.image, c = u.width, l = u.height, s, h;
            n = a(0, n);
            r(n) && this.isShown && !this.isPlayed && (i || f.zoomable) && (i || (e = a(e, f.minZoomRatio), o = y(o, f.maxZoomRatio), n = y(a(n, e), o)), n > .95 && n < 1.05 && (n = 1), s = u.naturalWidth * n, h = u.naturalHeight * n, u.left -= (s - c) / 2, u.top -= (h - l) / 2, u.width = s, u.height = h, u.ratio = n, this.renderImage(), t && this.tooltip())
        }, rotate: function (n) {
            this.rotateTo((this.image.rotate || 0) + u(n))
        }, rotateTo: function (n) {
            var t = this.image;
            n = u(n);
            r(n) && this.isShown && !this.isPlayed && this.options.rotatable && (t.rotate = n, this.renderImage())
        }, scale: function (n, t) {
            var f = this.image, i = !1;
            p(t) && (t = n);
            n = u(n);
            t = u(t);
            this.isShown && !this.isPlayed && this.options.scalable && (r(n) && (f.scaleX = n, i = !0), r(t) && (f.scaleY = t, i = !0), i && this.renderImage())
        }, scaleX: function (n) {
            this.scale(n, this.image.scaleY)
        }, scaleY: function (n) {
            this.scale(this.image.scaleX, n)
        }, play: function () {
            var u = this.options, h = this.$player, a = n.proxy(this.loadImage, this), f = [], e = 0, i = 0, o;
            this.isShown && !this.isPlayed && (u.fullscreen && this.fullscreen(), this.isPlayed = !0, h.addClass(v), this.$items.each(function (r) {
                var v = n(this), y = v.find(c),
                    o = n('<img src="' + y.data("originalUrl") + '" alt="' + y.attr("alt") + '">');
                e++;
                o.addClass(ft).toggleClass(t, u.transition);
                v.hasClass(et) && (o.addClass(s), i = r);
                f.push(o);
                o.one(l, {filled: !1}, a);
                h.append(o)
            }), r(u.interval) && u.interval > 0 && (o = n.proxy(function () {
                this.playing = setTimeout(function () {
                    f[i].removeClass(s);
                    i++;
                    i = i < e ? i : 0;
                    f[i].addClass(s);
                    o()
                }, u.interval)
            }, this), e > 1 && o()))
        }, stop: function () {
            this.isPlayed && (this.isPlayed = !1, clearTimeout(this.playing), this.$player.removeClass(v).empty())
        }, full: function () {
            var i = this.options, r = this.$image, u = this.$list;
            this.isShown && !this.isPlayed && !this.isFulled && i.inline && (this.isFulled = !0, this.$body.addClass(b), this.$button.addClass(d), i.transition && (r.removeClass(t), u.removeClass(t)), this.$viewer.addClass(ut).removeAttr("style").css("z-index", i.zIndex), this.initContainer(), this.viewer = n.extend({}, this.container), this.renderList(), this.initImage(n.proxy(function () {
                this.renderImage(function () {
                    i.transition && setTimeout(function () {
                        r.addClass(t);
                        u.addClass(t)
                    }, 0)
                })
            }, this)))
        }, exit: function () {
            var i = this.options, r = this.$image, u = this.$list;
            this.isFulled && (this.isFulled = !1, this.$body.removeClass(b), this.$button.removeClass(d), i.transition && (r.removeClass(t), u.removeClass(t)), this.$viewer.removeClass(ut).css("z-index", i.zIndexInline), this.viewer = n.extend({}, this.parent), this.renderViewer(), this.renderList(), this.initImage(n.proxy(function () {
                this.renderImage(function () {
                    i.transition && setTimeout(function () {
                        r.addClass(t);
                        u.addClass(t)
                    }, 0)
                })
            }, this)))
        }, tooltip: function () {
            var i = this.options, n = this.$tooltip, u = this.image, f = [v, ft, t].join(" "), r;
            this.isShown && !this.isPlayed && i.tooltip && (n.text(si(u.ratio * 100) + "%"), this.fading ? clearTimeout(this.fading) : i.transition ? n.fadeIn() : n.addClass(v), r = this, this.fading = setTimeout(function () {
                i.transition ? n.fadeOut() : n.removeClass(v);
                r.fading = !1
            }, 1e3))
        }, toggle: function () {
            this.image.ratio === 1 ? this.zoomTo(this.initialImage.ratio) : this.zoomTo(1)
        }, reset: function () {
            this.isShown && !this.isPlayed && (this.image = n.extend({}, this.initialImage), this.renderImage())
        }, destroy: function () {
            var n = this.$element;
            this.options.inline ? this.unbind() : (this.isShown && this.unbind(), this.$images.removeClass(rt), n.off(nt, this.start));
            this.unbuild();
            n.removeData(i)
        }
    });
    n.extend(o, {
        trigger: function (t, i) {
            var r = n.Event(t, i);
            return this.$element.trigger(r), r
        }, shown: function () {
            var t = this.options;
            if (this.transitioning = !1, this.isFulled = !0, this.isShown = !0, this.isVisible = !0, this.render(), this.bind(), n.isFunction(t.shown)) this.$element.one(st, t.shown);
            this.trigger(st)
        }, hidden: function () {
            var t = this.options;
            if (this.transitioning = !1, this.isViewed = !1, this.isFulled = !1, this.isShown = !1, this.isVisible = !1, this.unbind(), this.$body.removeClass(b), this.$viewer.addClass(e), this.resetList(), this.resetImage(), n.isFunction(t.hidden)) this.$element.one(ti, t.hidden);
            this.trigger(ti)
        }, fullscreen: function () {
            var n = document.documentElement;
            this.isFulled && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen && document.mozCancelFullScreen(), this.$button.removeClass(d), this.$button.addClass(k)) : (n.requestFullscreen ? n.requestFullscreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullscreen && n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT), this.$button.removeClass(k), this.$button.addClass(d)))
        }, change: function () {
            var n = this.endX - this.startX, t = this.endY - this.startY;
            switch (this.action) {
                case"move":
                    this.move(n, t);
                    break;
                case"zoom":
                    this.zoom(function (n, t, i, r) {
                        var u = ii(n * n + t * t), f = ii(i * i + r * r);
                        return (f - u) / u
                    }(tt(this.startX - this.startX2), tt(this.startY - this.startY2), tt(this.endX - this.endX2), tt(this.endY - this.endY2)));
                    this.startX2 = this.endX2;
                    this.startY2 = this.endY2;
                    break;
                case"switch":
                    this.action = "switched";
                    n > 1 ? this.prev() : n < -1 && this.next()
            }
            this.startX = this.endX;
            this.startY = this.endY
        }, isSwitchable: function () {
            var n = this.image, t = this.viewer;
            return n.left >= 0 && n.top >= 0 && n.width <= t.width && n.height <= t.height
        }
    });
    n.extend(f.prototype, o);
    f.DEFAULTS = {
        inline: !1,
        button: !0,
        navbar: !0,
        title: !0,
        toolbar: !0,
        tooltip: !0,
        movable: !0,
        zoomable: !0,
        rotatable: !0,
        scalable: !0,
        transition: !0,
        fullscreen: !0,
        keyboard: !0,
        interval: 5e3,
        minWidth: 200,
        minHeight: 100,
        zoomRatio: .1,
        minZoomRatio: .01,
        maxZoomRatio: 100,
        zIndex: 2015,
        zIndexInline: 0,
        url: "src",
        build: null,
        built: null,
        show: null,
        shown: null,
        hide: null,
        hidden: null
    };
    f.TEMPLATE = '<div class="viewer-container"><div class="viewer-canvas"><\/div><div class="viewer-footer"><div class="viewer-title"><\/div><ul class="viewer-toolbar"><li class="viewer-zoom-in" data-action="zoom-in"><\/li><li class="viewer-zoom-out" data-action="zoom-out"><\/li><li class="viewer-one-to-one" data-action="one-to-one"><\/li><li class="viewer-reset" data-action="reset"><\/li><li class="viewer-rotate-left" data-action="rotate-left"><\/li><li class="viewer-rotate-right" data-action="rotate-right"><\/li><li class="viewer-flip-horizontal" data-action="flip-horizontal"><\/li><li class="viewer-flip-vertical" data-action="flip-vertical"><\/li><\/ul><div class="viewer-navbar"><ul class="viewer-list"><\/ul><\/div><\/div><div class="viewer-tooltip"><\/div><div class="viewer-button" data-action="fullscreen"><\/div><div class="viewer-player"><\/div><\/div>';
    f.other = n.fn.viewer;
    n.fn.viewer = function (t) {
        var u = lt(arguments, 1), r;
        return this.each(function () {
            var o = n(this), e = o.data(i), s;
            if (!e) {
                if (/destroy|hide|exit|stop|reset/.test(t)) return;
                o.data(i, e = new f(this, t))
            }
            ct(t) && n.isFunction(s = e[t]) && (r = s.apply(e, u))
        }), p(r) ? this : r
    };
    n.fn.viewer.Constructor = f;
    n.fn.viewer.setDefaults = f.setDefaults;
    n.fn.viewer.noConflict = function () {
        return n.fn.viewer = f.other, this
    }
});