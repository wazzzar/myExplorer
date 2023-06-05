this.JSON || (this.JSON = {}), function () {
    "use strict";

    function i(n) {
        return n < 10 ? "0" + n : n
    }

    function e(n) {
        return f.lastIndex = 0, f.test(n) ? '"' + n.replace(f, function (n) {
            var t = o[n];
            return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + n + '"'
    }

    function u(i, f) {
        var c, l, s, a, v = n, h, o = f[i];
        o && typeof o == "object" && typeof o.toJSON == "function" && (o = o.toJSON(i));
        typeof t == "function" && (o = t.call(f, i, o));
        switch (typeof o) {
            case"string":
                return e(o);
            case"number":
                return isFinite(o) ? String(o) : "null";
            case"boolean":
            case"null":
                return String(o);
            case"object":
                if (!o) return "null";
                if (n += r, h = [], Object.prototype.toString.apply(o) === "[object Array]") {
                    for (a = o.length, c = 0; c < a; c += 1) h[c] = u(c, o) || "null";
                    return s = h.length === 0 ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + v + "]" : "[" + h.join(",") + "]", n = v, s
                }
                if (t && typeof t == "object") for (a = t.length, c = 0; c < a; c += 1) l = t[c], typeof l == "string" && (s = u(l, o), s && h.push(e(l) + (n ? ": " : ":") + s)); else for (l in o) Object.hasOwnProperty.call(o, l) && (s = u(l, o), s && h.push(e(l) + (n ? ": " : ":") + s));
                return s = h.length === 0 ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + v + "}" : "{" + h.join(",") + "}", n = v, s
        }
    }

    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n, r, o = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, t;
    typeof JSON.stringify != "function" && (JSON.stringify = function (i, f, e) {
        var o;
        if (n = "", r = "", typeof e == "number") for (o = 0; o < e; o += 1) r += " "; else typeof e == "string" && (r = e);
        if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
        return u("", {"": i})
    });
    typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(n, t) {
            var r, u, i = n[t];
            if (i && typeof i == "object") for (r in i) Object.hasOwnProperty.call(i, r) && (u = walk(i, r), u !== undefined ? i[r] = u : delete i[r]);
            return reviver.call(n, t, i)
        }

        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (n) {
            return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse");
    })
}();
var StolenTech = StolenTech || {};
StolenTech.Util = StolenTech.Util || {};
StolenTech.Util.Language || (StolenTech.Util.Language = {}, StolenTech.Util.Language.name = "", StolenTech.Util.Language.entries = {}, StolenTech.Util.Language.getEntry = function (n, t, i, r) {
    var u = StolenTech.Util.Language.entries[n];
    if (u === undefined) throw new Error('Language entry with key "{0}" not found.'.replace(/\{0\}/g, n));
    if (u == null) throw new Error('Value for language entry with key "{0}" is missing.'.replace(/\{0\}/g, n));
    return t != undefined && (u = u.replace(/\{0\}/g, t)), i != undefined && (u = u.replace(/\{1\}/g, i)), r != undefined && (u = u.replace(/\{2\}/g, r)), u
});
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.Util = {};
StolenTech.JavaScript.Util.OnDomReady = function (n) {
    var t = t || {}, i, r, u, f;
    if (t.loaded) return n();
    if (i = t.observers, i || (i = t.observers = []), i[i.length] = n, !t.callback) {
        t.callback = function () {
            var i, n, r, u;
            if (!t.loaded) {
                for (t.loaded = !0, t.timer && (clearInterval(t.timer), t.timer = null), i = t.observers, n = 0, r = i.length; n < r; n++) u = i[n], i[n] = null, u();
                t.callback = t.observers = null
            }
        };
        var s = !!(window.attachEvent && !window.opera), e = !1, o = navigator.userAgent.match(/AppleWebKit\/(\d+)/);
        o && o[1] < 525 && (e = !0);
        document.readyState && e ? t.timer = setInterval(function () {
            var n = document.readyState;
            (n == "loaded" || n == "complete") && t.callback()
        }, 50) : document.readyState && s && window == window.top ? (r = !1, u = function () {
            r || (r = !0, t.callback())
        }, function () {
            try {
                document.documentElement.doScroll("left")
            } catch (n) {
                setTimeout(arguments.callee, 50);
                return
            }
            u()
        }(), document.onreadystatechange = function () {
            document.readyState == "complete" && (document.onreadystatechange = null, u())
        }) : window.addEventListener ? (document.addEventListener("DOMContentLoaded", t.callback, !1), window.addEventListener("load", t.callback, !1)) : window.attachEvent ? window.attachEvent("onload", t.callback) : (f = window.onload, window.onload = function () {
            t.callback();
            f && f()
        })
    }
};
StolenTech.JavaScript.Util.AddEvent = function (n, t, i) {
    return n.addEventListener ? (n.addEventListener(t, i, !1), !0) : n.attachEvent ? n.attachEvent("on" + t, i) : !1
};
StolenTech.JavaScript.Util.RemoveEvent = function (n, t, i) {
    return n.removeEventListener ? (n.removeEventListener(t, i, !1), !0) : n.detachEvent ? n.detachEvent("on" + t, i) : !1
};
StolenTech.JavaScript.Util.SimulateMouse = function (n) {
    var i = n.changedTouches, r = i[0], t = "";
    switch (n.type) {
        case"touchstart":
            t = "mousedown";
            break;
        case"touchmove":
            t = "mousemove";
            break;
        case"touchend":
            t = "mouseup";
            break;
        default:
            return
    }
    StolenTech.JavaScript.Util.TriggerMouseEvent(r, t);
    n.preventDefault()
};
StolenTech.JavaScript.Util.SimulateClick = function (n) {
    function i(n) {
        if (StolenTech.JavaScript.Util.RemoveEvent(t, "touchend", i), t.touchContextMenuFired) {
            t.touchContextMenuFired = !1;
            n.preventDefault();
            return
        }
        n.changedTouches[0].target == t && StolenTech.JavaScript.Util.TriggerMouseEvent(n.changedTouches[0], "click");
        n.preventDefault()
    }

    if (n.type == "touchstart") {
        var t = n.changedTouches[0].target;
        StolenTech.JavaScript.Util.AddEvent(t, "touchend", i);
        n.preventDefault()
    }
};
StolenTech.JavaScript.Util.SimulateContextMenu = function (n, t) {
    function r(n) {
        clearTimeout(u);
        n.preventDefault()
    }

    if (n.type == "touchstart") {
        var u, i = n.changedTouches[0].target;
        StolenTech.JavaScript.Util.AddEvent(i, "touchend", r);
        StolenTech.JavaScript.Util.AddEvent(i, "touchmove", r);
        u = setTimeout(function () {
            StolenTech.JavaScript.Util.RemoveEvent(i, "touchend", r);
            StolenTech.JavaScript.Util.RemoveEvent(i, "touchmove", r);
            i.touchContextMenuFired = !0;
            var u = !0;
            t && (u = t());
            u && StolenTech.JavaScript.Util.TriggerMouseEvent(n.changedTouches[0], "contextmenu")
        }, 750);
        n.preventDefault()
    }
};
StolenTech.JavaScript.Util.TriggerMouseEvent = function (n, t, i) {
    var r = document.createEvent("MouseEvent");
    r.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null);
    r.isSimulatedMouseEvent = !0;
    i ? i.dispatchEvent(r) : n.target.dispatchEvent(r)
};
StolenTech.JavaScript.Util.CancelEvent = function (n) {
    if (!n) var n = window.event;
    return n.cancelBubble = !0, n.stopPropagation && n.stopPropagation(), n.returnValue = !1, n.preventDefault && n.preventDefault(), !1
};
StolenTech.JavaScript.Util.CancelEventExceptForTextInput = function (n) {
    var n, t;
    return n || (n = window.event), t = StolenTech.JavaScript.Util.GetEventTarget(n), t.type == "text" || t.type == "password" || t.type == "textarea" || t.type == "file" ? !0 : StolenTech.JavaScript.Util.CancelEvent(n)
};
StolenTech.JavaScript.Util.GetEventTarget = function (n) {
    var t;
    return n.target ? t = n.target : n.srcElement && (t = n.srcElement), t.nodeType == 3 && (t = t.parentNode), t
};
StolenTech.JavaScript.Util.FindPosition = function (n) {
    var t = 0, i = 0;
    if (n.offsetParent) for (t = n.offsetLeft, i = n.offsetTop; n = n.offsetParent;) t += n.offsetLeft, i += n.offsetTop;
    return [t, i]
};
StolenTech.JavaScript.Util.GetStyleProperty = function (n, t) {
    var i = "";
    return n.currentStyle ? i = n.currentStyle[t] : window.getComputedStyle && (i = document.defaultView.getComputedStyle(n, null).getPropertyValue(t)), i
};
StolenTech.JavaScript.Util.GetStyleObject = function (n) {
    var f, r, u, i, t;
    if (!document.styleSheets) return null;
    for (f = "." + StolenTech.JavaScript.Util.Trim(n).toLowerCase(), r = 0; r < document.styleSheets.length; r++) try {
        for (u = document.styleSheets[r], i = u.cssRules ? u.cssRules : u.rules, t = 0; t < i.length; t++) if (i[t] && i[t].selectorText && i[t].selectorText.toLowerCase() === f) return i[t].style
    } catch (e) {
    }
    return null
};
StolenTech.JavaScript.Util.EnsureDisplay = function (n, t) {
    for (var f = [], i = n, e, r, u; i && i !== document;) StolenTech.JavaScript.Util.GetStyleProperty(i, "display") == "none" && f.push(i), i = i.parentNode;
    if (f.length > 0) {
        for (e = {visibility: "hidden", display: "block"}, r = 0; r < f.length; r++) {
            i = f[r];
            i.originalStyle = {};
            for (u in e) i.originalStyle[u] = i.style[u], i.style[u] = e[u]
        }
        for (t(n), r = 0; r < f.length; r++) {
            i = f[r];
            for (u in e) i.style[u] = i.originalStyle[u];
            try {
                delete i.originalStyle
            } catch (o) {
                i.originalStyle = null
            }
        }
    } else t(n)
};
StolenTech.JavaScript.Util.RequestJson = function (n, t, i, r, u) {
    var o = function () {
        var n = null;
        if (window.XMLHttpRequest) try {
            n = new XMLHttpRequest
        } catch (t) {
            n = null
        } else if (window.ActiveXObject) try {
            n = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {
            try {
                n = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
                n = null
            }
        }
        return n
    }, f, e;
    if ((f = o()) != null) {
        f.onreadystatechange = function () {
            var n, t, o, s, e;
            if (f.readyState == 4) {
                try {
                    f.status !== undefined && f.status != 0 ? (n = f.status, t = f.statusText) : (n = 13030, t = "Status Unavailable")
                } catch (h) {
                    n = 13030;
                    t = "Status Unavailable"
                }
                if (n == 200) {
                    if (o = f.getResponseHeader("Content-Type"), s = o && o.indexOf("application/json") != -1, s) {
                        e = JSON.parse(f.responseText);
                        e.Success ? i && i(e.Result) : r && r(e.Result);
                        return
                    }
                    t += "\n(Response content-type is not application/json)"
                }
                n >= 100 && n < 600 ? alert("HTTP Error:\n\n" + n + " - " + t) : alert("Connection Error:\n\n" + n + " - " + t);
                u && u()
            }
        };
        try {
            e = t != null ? JSON.stringify(t) : null;
            f.open("POST", n, !0);
            f.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            f.setRequestHeader("Accept", "application/json");
            f.send(e)
        } catch (s) {
            alert("Connection Error:\n\n" + s.toString())
        }
    } else alert("A required object, XMLHttpRequest is not found!")
};
StolenTech.JavaScript.Util.FormatFileSize = function (n) {
    var t;
    if (n.length == 0) return "";
    var i = ["B", "KB", "MB", "GB", "TB"], r = i.length - 1;
    for (n = +n, t = 0; n >= 1024 && t < r;) n /= 1024, t++;
    return n.toFixed([0, 0, 2, 2, 2][t]) + " " + i[t]
};
StolenTech.JavaScript.Util.GetFileNameWithoutExtension = function (n) {
    var t = n.lastIndexOf(".");
    return t > 0 ? n.substr(0, t) : n
};
StolenTech.JavaScript.Util.GetFileExtension = function (n) {
    var t = n.lastIndexOf(".");
    return t > 0 ? n.substr(t, n.length) : ""
};
StolenTech.JavaScript.Util.GetZipFileName = function (n) {
    var u, f = "", t, i, r;
    return t = /(\.\w+)$/, i = t.exec(n), i && (f = i[1].toLowerCase(), n = n.replace(t, f)), f == "" ? u = n + ".zip" : f == ".zip" ? (t = /\((\d+)\)\.zip$/, i = t.exec(n), r = i ? parseInt(i[1]) : 0, r++, u = r == 1 ? n.replace(/\.zip$/, " (" + r + ").zip") : n.replace(t, " (" + r + ").zip")) : u = n.replace(t, ".zip"), u
};
StolenTech.JavaScript.Util.CheckFileName = function (n) {
    return !/[\/:\*\?"<>|\\]/.test(n)
};
StolenTech.JavaScript.Util.TrimFileName = function (n) {
    while (n.substring(0, 1) == " " || n.substring(0, 1) == "\n" || n.substring(0, 1) == "\r") n = n.substring(1, n.length);
    while (n.substring(n.length - 1, n.length) == " " || n.substring(n.length - 1, n.length) == "." || n.substring(n.length - 1, n.length) == "\n" || n.substring(n.length - 1, n.length) == "\r") n = n.substring(0, n.length - 1);
    return n
};
StolenTech.JavaScript.Util.Trim = function (n, t) {
    return n = StolenTech.JavaScript.Util.TrimStart(n, t), StolenTech.JavaScript.Util.TrimEnd(n, t)
};
StolenTech.JavaScript.Util.TrimStart = function (n, t) {
    for (t || (t = " "); n.substring(0, 1) == t;) n = n.substring(1, n.length);
    return n
};
StolenTech.JavaScript.Util.TrimEnd = function (n, t) {
    for (t || (t = " "); n.substring(n.length - 1, n.length) == t;) n = n.substring(0, n.length - 1);
    return n
};
StolenTech.JavaScript.Util.EscapeRegExpPattern = function (n) {
    return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
};
StolenTech.JavaScript.Util.GetIEVersion = function () {
    if (document.body.style.scrollbar3dLightColor != undefined) return document.body.style.opacity != undefined ? 9 : document.querySelector != undefined ? 8 : document.body.style.msInterpolationMode != undefined ? 7 : document.body.style.textOverflow != undefined ? 6 : 5.5
};
StolenTech.JavaScript.Util.SetOpacity = function (n, t) {
    "opacity" in n.style ? n.style.opacity = t / 10 : n.style.filter = t == 10 ? "" : "alpha(opacity=" + t * 10 + ")"
};
StolenTech.JavaScript.Util.SetBorderRadius = function (n, t, i, r, u) {
    var f = t + "px " + i + "px " + r + "px " + u + "px";
    "borderRadius" in n.style ? n.style.borderRadius = f : "MozBorderRadius" in n.style ? n.style.MozBorderRadius = f : "webkitBorderRadius" in n.style && (n.style.webkitBorderRadius = f)
};
StolenTech.JavaScript.Util.uniqueIdCounter = Math.floor(Math.random() * 8999 + 1e3);
StolenTech.JavaScript.Util.CreateUniqueId = function () {
    var n = "" + StolenTech.JavaScript.Util.uniqueIdCounter++, t = "0000000",
        i = t.substring(0, t.length - n.length) + n;
    return (new Date).getTime() + i
};
StolenTech.JavaScript.Util.GetPropertyName = function (n, t) {
    for (var i in n) if (n[i] == t) return i;
    return ""
};
StolenTech.JavaScript.Util.SelectInputText = function (n, t, i) {
    if (n.createTextRange) {
        var r = n.createTextRange();
        r.collapse(!0);
        r.moveStart("character", t);
        r.moveEnd("character", i - t);
        r.select()
    } else n.setSelectionRange ? n.setSelectionRange(t, i) : n.selectionStart && (n.selectionStart = t, n.selectionEnd = i);
    n.disabled || n.focus()
};
StolenTech.JavaScript.Util.DeSelectAllRanges = function () {
    document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
};
StolenTech.JavaScript.Util.SelectRange = function (n) {
    var t;
    StolenTech.JavaScript.Util.DeSelectAllRanges();
    document.selection ? (t = document.body.createTextRange(), t.moveToElementText(document.getElementById(n)), t.select()) : window.getSelection && (t = document.createRange(), t.selectNode(document.getElementById(n)), window.getSelection().addRange(t))
};
StolenTech.JavaScript.Util.ExecuteFunctionByName = function (n, t) {
    for (var u = Array.prototype.slice.call(arguments, 2), i = n.split("."), f = i.pop(), r = 0; r < i.length; r++) t = t[i[r]];
    return t[f].apply(t, u)
};
StolenTech.JavaScript.Util.AppendToUrl = function (n, t) {
    return n[n.length - 1] != "/" ? n + "/" + t : n + t
};
StolenTech.JavaScript.Util.RefreshPage = function (n) {
    var t = n || window;
    t.location.href.indexOf("#") == -1 ? t.location.href = t.location.href : t.location.reload()
};
StolenTech.JavaScript.Util.Viewport = {};
StolenTech.JavaScript.Util.Viewport.GetWidth = function () {
    var n;
    return self.innerHeight ? n = self.innerWidth : document.documentElement && document.documentElement.clientWidth ? n = document.documentElement.clientWidth : document.body && (n = document.body.clientWidth), n
};
StolenTech.JavaScript.Util.Viewport.GetHeight = function () {
    var n;
    return self.innerHeight ? n = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? n = document.documentElement.clientHeight : document.body && (n = document.body.clientHeight), n
};
StolenTech.JavaScript.Util.Viewport.GetScrollLeft = function () {
    var n;
    return self.pageXOffset || self.pageYOffset ? n = self.pageXOffset : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) ? n = document.documentElement.scrollLeft : document.body && (n = document.body.scrollLeft), n
};
StolenTech.JavaScript.Util.Viewport.GetScrollTop = function () {
    var n;
    return self.pageXOffset || self.pageYOffset ? n = self.pageYOffset : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) ? n = document.documentElement.scrollTop : document.body && (n = document.body.scrollTop), n
};
StolenTech.JavaScript.Util.Viewport.GetScrollWidth = function () {
    var n;
    return document.documentElement && (document.documentElement.scrollWidth || document.documentElement.scrollHeight) ? n = document.documentElement.scrollWidth : document.body && (n = document.body.scrollWidth), n
};
StolenTech.JavaScript.Util.Viewport.GetScrollHeight = function () {
    var n;
    return document.documentElement && (document.documentElement.scrollWidth || document.documentElement.scrollHeight) ? n = document.documentElement.scrollHeight : document.body && (n = document.body.scrollHeight), n
};
StolenTech.JavaScript.Util.Sort = {};
StolenTech.JavaScript.Util.Sort.types = {};
StolenTech.JavaScript.Util.Sort.AddSortType = function (n, t, i, r) {
    StolenTech.JavaScript.Util.Sort.types[n] = {
        name: n,
        comparableValueFunction: t,
        compareFunction: i,
        defaultFormatFunction: r
    }
};
StolenTech.JavaScript.Util.Sort.CompareBasic = function (n, t) {
    return n < t ? -1 : n > t ? 1 : 0
};
StolenTech.JavaScript.Util.Sort.GetSelf = function (n) {
    return n
};
StolenTech.JavaScript.Util.Sort.GetLowerCase = function (n) {
    return n.toLowerCase()
};
StolenTech.JavaScript.Util.Sort.GetNumber = function (n) {
    return +n
};
StolenTech.JavaScript.Util.Sort.GetDate = function (n) {
    return new Date(n)
};
StolenTech.JavaScript.Util.Sort.FormatSfDate = function (n) {
    return n.substring(n.indexOf("|") + 1, n.length)
};
StolenTech.JavaScript.Util.Sort.FormatIsoDate = function (n, format) {
    var addLeadingZero = function (n) {
        return (n < 10 && n >= 0 ? "0" : "") + n
    }, t = function (n) {
        var t, dateObj, oh = 0, om = 0;
        t = /^(\d{4})?-?(\d\d)?-?(\d\d)?[T ]?(\d\d)?:?(\d\d)?:?(\d\d)?([Z+-])?(\d\d)?:?(\d\d)?$/.test(n);
        with (RegExp) $7 != "Z" && (oh = $7 + $8, $9 && (om = $7 + $9)), dateObj = $7 ? new Date(Date.UTC($1 || 77, $2 - 1, $3, $4 - oh, $5 - om, $6)) : new Date($1 || 77, $2 - 1, $3, $4, $5, $6);
        return t ? dateObj : null
    }, str, i = t(n);
    with (i) str = format, str = str.replace("dd", addLeadingZero(getDate())), str = str.replace("MM", addLeadingZero(getMonth() + 1)), str = str.replace("yyyy", getFullYear()), str = str.replace("HH", addLeadingZero(getHours())), str = str.replace("mm", addLeadingZero(getMinutes()));
    return str
};
StolenTech.JavaScript.Util.Sort.AddSortType("String", StolenTech.JavaScript.Util.Sort.GetSelf, StolenTech.JavaScript.Util.Sort.CompareBasic, null);
StolenTech.JavaScript.Util.Sort.AddSortType("CaseInsensitiveString", StolenTech.JavaScript.Util.Sort.GetLowerCase, StolenTech.JavaScript.Util.Sort.CompareBasic, null);
StolenTech.JavaScript.Util.Sort.AddSortType("Number", StolenTech.JavaScript.Util.Sort.GetNumber, StolenTech.JavaScript.Util.Sort.CompareBasic, null);
StolenTech.JavaScript.Util.Sort.AddSortType("Date", StolenTech.JavaScript.Util.Sort.GetDate, StolenTech.JavaScript.Util.Sort.CompareBasic, null);
StolenTech.JavaScript.Util.Sort.AddSortType("SortableFormattedDate", StolenTech.JavaScript.Util.Sort.GetSelf, StolenTech.JavaScript.Util.Sort.CompareBasic, StolenTech.JavaScript.Util.Sort.FormatSfDate);
StolenTech.JavaScript.Util.Sort.AddSortType("ISODate", StolenTech.JavaScript.Util.Sort.GetSelf, StolenTech.JavaScript.Util.Sort.CompareBasic, StolenTech.JavaScript.Util.Sort.FormatIsoDate);
var StolenTech = StolenTech || {};
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.UI = StolenTech.JavaScript.UI || {};
StolenTech.JavaScript.UI.ToolBarCount = 0;
StolenTech.JavaScript.UI.ToolBarCssClass = "gt-toolBar";
StolenTech.JavaScript.UI.ToolBarButtonCssClass = "gt-toolBarButton";
StolenTech.JavaScript.UI.ToolBarButtonHoverCssClass = "gt-toolBarButton gt-toolBarButton-hover";
StolenTech.JavaScript.UI.ToolBarButtonSelectedCssClass = "gt-toolBarButton gt-toolBarButton-selected";
StolenTech.JavaScript.UI.ToolBarSeparatorCssClass = "gt-toolBarSeparator";
StolenTech.JavaScript.UI.ToolBar = function () {
    this.index = StolenTech.JavaScript.UI.ToolBarCount++;
    this.items = [];
    this.buttons = {};
    this.imagesPath = "";
    this.buttonWidth = 10;
    this.buttonHeight = 10;
    this.buttonBorder = 1;
    this.vertical = !1;
    this.onButtonClick = null
};
StolenTech.JavaScript.UI.ToolBar.prototype.SetButtonSize = function (n, t, i) {
    this.buttonWidth = n;
    this.buttonHeight = t;
    this.vertical = i
};
StolenTech.JavaScript.UI.ToolBar.prototype.SetImages = function (n, t, i) {
    this.imagesPath = n;
    this.imagesWidth = t;
    this.imagesHeight = i
};
StolenTech.JavaScript.UI.ToolBar.prototype.GetHeight = function () {
    return this.divElement.offsetHeight
};
StolenTech.JavaScript.UI.ToolBar.prototype.AddButton = function (n, t, i, r) {
    i && (i = this.imagesPath + i);
    var u = new StolenTech.JavaScript.UI.ToolBarButton(n, t, i, r, this.buttonWidth - this.buttonBorder * 2, this.buttonHeight - this.buttonBorder * 2);
    return u.toolbar = this, u.index = this.items.length, this.items[u.index] = u, this.buttons[n] = u, u
};
StolenTech.JavaScript.UI.ToolBar.prototype.AddSeparator = function () {
    var n = new StolenTech.JavaScript.UI.ToolBarSeparator(this.buttonHeight);
    return n.toolbar = this, this.items[this.items.length] = n, n
};
StolenTech.JavaScript.UI.ToolBar.prototype.ToggleActions = function (n) {
    for (var t = 0; t < n.length; t++) {
        var r = n[t][0], u = n[t][1], i = this.buttons[r];
        u ? i.Enable() : i.Disable()
    }
};
StolenTech.JavaScript.UI.ToolBar.prototype.Render = function (n, t) {
    this.divElement = document.createElement("div");
    t.appendChild(this.divElement);
    this.divElement.id = n;
    this.divElement.className = StolenTech.JavaScript.UI.ToolBarCssClass;
    this.vertical ? this.divElement.style.width = this.buttonWidth + 6 - 2 + "px" : this.divElement.style.height = this.buttonHeight + 6 - 2 + "px";
    this.divElement.style.overflow = "hidden";
    for (var i = 0; i < this.items.length; i++) this.items[i].Render(this.divElement)
};
StolenTech.JavaScript.UI.ToolBar.prototype.RenderItem = function (n) {
    n.Render(this.divElement)
};
StolenTech.JavaScript.UI.ToolBarButton = function (n, t, i, r, u, f) {
    this.action = n;
    this.description = t;
    this.image = i;
    this.width = u;
    this.height = f;
    this.disabled = r;
    this.toolbar = null;
    this.index = -1;
    this.divElement = null;
    this.imgElement = null;
    this.isToolbarButton = !0
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.Render = function (n) {
    var r = this, t = document.createElement("div"), i;
    t.title = this.description;
    t.style.cssFloat = "left";
    t.style.styleFloat = "left";
    t.style.textAlign = "center";
    t.style.padding = "2px";
    t.style.width = this.width + "px";
    t.style.height = this.height + "px";
    t.className = StolenTech.JavaScript.UI.ToolBarButtonCssClass;
    StolenTech.JavaScript.Util.AddEvent(t, "mouseover", function (n) {
        r.onMouseOver(n)
    });
    StolenTech.JavaScript.Util.AddEvent(t, "mouseout", function (n) {
        r.onMouseOut(n)
    });
    StolenTech.JavaScript.Util.AddEvent(t, "mousedown", function (n) {
        r.onMouseDown(n)
    });
    StolenTech.JavaScript.Util.AddEvent(t, "mouseup", function (n) {
        r.onMouseUp(n)
    });
    StolenTech.JavaScript.Util.AddEvent(t, "click", function (n) {
        r.onClick(n)
    });
    this.divElement = t;
    this.image && (i = new Image, i.src = this.image, i.style.width = this.toolbar.imagesWidth + "px", i.style.height = this.toolbar.imagesHeight + "px", i.style.marginLeft = (this.width - this.toolbar.imagesWidth) / 2 + "px", i.style.marginRight = (this.width - this.toolbar.imagesWidth) / 2 + "px", i.style.marginTop = (this.height - this.toolbar.imagesHeight) / 2 + "px", this.imgElement = i, t.appendChild(i));
    n.appendChild(t);
    this.disabled && (this.disabled = !1, this.Disable())
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.onMouseOver = function () {
    this.disabled || (this.divElement.className = StolenTech.JavaScript.UI.ToolBarButtonHoverCssClass, this.divElement.style.padding = "2px")
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.onMouseOut = function () {
    this.disabled || (this.divElement.className = StolenTech.JavaScript.UI.ToolBarButtonCssClass, this.divElement.style.padding = "2px")
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.onMouseDown = function (n) {
    var n, t;
    this.disabled || (n || (n = window.event), t = n.which ? n.which : n.button, t == 1) && (this.divElement.className = StolenTech.JavaScript.UI.ToolBarButtonSelectedCssClass, this.divElement.style.paddingTop = "3px", this.divElement.style.paddingLeft = "3px", this.divElement.style.paddingBottom = "1px", this.divElement.style.paddingRight = "1px")
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.onMouseUp = function (n) {
    var n, t;
    this.disabled || (n || (n = window.event), t = n.which ? n.which : n.button, t == 1) && (this.divElement.className = StolenTech.JavaScript.UI.ToolBarButtonHoverCssClass, this.divElement.style.padding = "2px")
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.onClick = function (n) {
    if (!this.disabled) {
        if (!n) var n = window.event;
        this.onMouseOut(n);
        if (this.toolbar.onButtonClick) this.toolbar.onButtonClick(this, n)
    }
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.Enable = function () {
    this.disabled && (this.divElement.disabled = !1, StolenTech.JavaScript.Util.SetOpacity(this.divElement, 10), this.disabled = !1)
};
StolenTech.JavaScript.UI.ToolBarButton.prototype.Disable = function () {
    this.disabled || (this.divElement.className = StolenTech.JavaScript.UI.ToolBarButtonCssClass, this.divElement.style.padding = "2px", this.divElement.disabled = !0, StolenTech.JavaScript.Util.SetOpacity(this.divElement, 4), this.disabled = !0)
};
StolenTech.JavaScript.UI.ToolBarSeparator = function (n) {
    this.height = n;
    this.toolbar = null
};
StolenTech.JavaScript.UI.ToolBarSeparator.prototype.Render = function (n) {
    var t = document.createElement("div");
    t.style.cssFloat = "left";
    t.style.styleFloat = "left";
    t.style.marginTop = "0px";
    t.style.marginLeft = "3px";
    t.style.marginBottom = "0px";
    t.style.marginRight = "3px";
    t.style.width = "1px";
    t.style.height = this.height + 2 + "px";
    t.className = StolenTech.JavaScript.UI.ToolBarSeparatorCssClass;
    n.appendChild(t)
};/*!
 * iScroll Lite base on iScroll v4.1.6 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function () {
    var i = Math, r = function (n) {
            return n >> 0
        },
        n = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera" in window ? "O" : "",
        g = /android/gi.test(navigator.appVersion), y = /iphone|ipad/gi.test(navigator.appVersion),
        p = /playbook/gi.test(navigator.appVersion), w = /hp-tablet/gi.test(navigator.appVersion),
        c = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, t = "ontouchstart" in window && !w,
        b = n + "Transform" in document.documentElement.style, k = y || p, d = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
                return setTimeout(n, 17)
            }
        }(), l = function () {
            return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        }(), o = "onorientationchange" in window ? "orientationchange" : "resize", s = t ? "touchstart" : "mousedown",
        u = t ? "touchmove" : "mousemove", f = t ? "touchend" : "mouseup", e = t ? "touchcancel" : "mouseup",
        a = "translate" + (c ? "3d(" : "("), v = c ? ",0)" : ")", h = function (i, r) {
            var u = this, e = document, f;
            u.wrapper = typeof i == "object" ? i : e.getElementById(i);
            u.wrapper.style.overflow = "hidden";
            u.scroller = u.wrapper.children[0];
            u.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                onRefresh: null,
                onBeforeScrollStart: function (n) {
                    n.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null
            };
            for (f in r) u.options[f] = r[f];
            u.x = u.options.x;
            u.y = u.options.y;
            u.options.useTransform = b ? u.options.useTransform : !1;
            u.options.hScrollbar = u.options.hScroll && u.options.hScrollbar;
            u.options.vScrollbar = u.options.vScroll && u.options.vScrollbar;
            u.options.useTransition = k && u.options.useTransition;
            u.scroller.style[n + "TransitionProperty"] = u.options.useTransform ? "-" + n.toLowerCase() + "-transform" : "top left";
            u.scroller.style[n + "TransitionDuration"] = "0";
            u.scroller.style[n + "TransformOrigin"] = "0 0";
            u.options.useTransition && (u.scroller.style[n + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)");
            u.options.useTransform ? u.scroller.style[n + "Transform"] = a + u.x + "px," + u.y + "px" + v : u.scroller.style.cssText += ";position:absolute;top:" + u.y + "px;left:" + u.x + "px";
            u.refresh();
            u._bind(o, window);
            u._bind(s);
            t || u._bind("mouseout", u.wrapper)
        };
    h.prototype = {
        enabled: !0, x: 0, y: 0, steps: [], scale: 1, handleEvent: function (n) {
            var i = this;
            switch (n.type) {
                case s:
                    if (!t && n.button !== 0) return;
                    i._start(n);
                    break;
                case u:
                    i._move(n);
                    break;
                case f:
                case e:
                    i._end(n);
                    break;
                case o:
                    i._resize();
                    break;
                case"mouseout":
                    i._mouseout(n);
                    break;
                case"webkitTransitionEnd":
                    i._transitionEnd(n)
            }
        }, _resize: function () {
            this.refresh()
        }, _pos: function (t, i) {
            t = this.hScroll ? t : 0;
            i = this.vScroll ? i : 0;
            this.options.useTransform ? this.scroller.style[n + "Transform"] = a + t + "px," + i + "px" + v + " scale(" + this.scale + ")" : (t = r(t), i = r(i), this.scroller.style.left = t + "px", this.scroller.style.top = i + "px");
            this.x = t;
            this.y = i
        }, _start: function (i) {
            var r = this, c = t ? i.touches[0] : i, h, o, s;
            r.enabled && (r.options.onBeforeScrollStart && r.options.onBeforeScrollStart.call(r, i), r.options.useTransition && r._transitionTime(0), r.moved = !1, r.animating = !1, r.zoomed = !1, r.distX = 0, r.distY = 0, r.absDistX = 0, r.absDistY = 0, r.dirX = 0, r.dirY = 0, r.options.momentum && (r.options.useTransform ? (h = getComputedStyle(r.scroller, null)[n + "Transform"].replace(/[^0-9-.,]/g, "").split(","), o = h[4] * 1, s = h[5] * 1) : (o = getComputedStyle(r.scroller, null).left.replace(/[^0-9-]/g, "") * 1, s = getComputedStyle(r.scroller, null).top.replace(/[^0-9-]/g, "") * 1), (o != r.x || s != r.y) && (r.options.useTransition ? r._unbind("webkitTransitionEnd") : l(r.aniTime), r.steps = [], r._pos(o, s))), r.startX = r.x, r.startY = r.y, r.pointX = c.pageX, r.pointY = c.pageY, r.startTime = i.timeStamp || Date.now(), r.options.onScrollStart && r.options.onScrollStart.call(r, i), r._bind(u), r._bind(f), r._bind(e))
        }, _move: function (n) {
            var r = this, s = t ? n.touches[0] : n, u = s.pageX - r.pointX, f = s.pageY - r.pointY, e = r.x + u,
                o = r.y + f, h = n.timeStamp || Date.now();
            (r.options.onBeforeScrollMove && r.options.onBeforeScrollMove.call(r, n), r.pointX = s.pageX, r.pointY = s.pageY, (e > 0 || e < r.maxScrollX) && (e = r.options.bounce ? r.x + u / 2 : e >= 0 || r.maxScrollX >= 0 ? 0 : r.maxScrollX), (o > 0 || o < r.maxScrollY) && (o = r.options.bounce ? r.y + f / 2 : o >= 0 || r.maxScrollY >= 0 ? 0 : r.maxScrollY), r.distX += u, r.distY += f, r.absDistX = i.abs(r.distX), r.absDistY = i.abs(r.distY), r.absDistX < 6 && r.absDistY < 6) || (r.options.lockDirection && (r.absDistX > r.absDistY + 5 ? (o = r.y, f = 0) : r.absDistY > r.absDistX + 5 && (e = r.x, u = 0)), r.moved = !0, r._pos(e, o), r.dirX = u > 0 ? -1 : u < 0 ? 1 : 0, r.dirY = f > 0 ? -1 : f < 0 ? 1 : 0, h - r.startTime > 300 && (r.startTime = h, r.startX = r.x, r.startY = r.y), r.options.onScrollMove && r.options.onScrollMove.call(r, n))
        }, _end: function (n) {
            if (!t || n.touches.length == 0) {
                var o = this, v = t ? n.changedTouches[0] : n, s, y, h = {dist: 0, time: 0}, c = {dist: 0, time: 0},
                    p = (n.timeStamp || Date.now()) - o.startTime, l = o.x, a = o.y, w;
                if (o._unbind(u), o._unbind(f), o._unbind(e), o.options.onBeforeScrollEnd && o.options.onBeforeScrollEnd.call(o, n), !o.moved) {
                    if (t) {
                        for (s = v.target; s.nodeType != 1;) s = s.parentNode;
                        s.tagName != "SELECT" && s.tagName != "INPUT" && s.tagName != "TEXTAREA" && (y = document.createEvent("MouseEvents"), y.initMouseEvent("click", !0, !0, n.view, 1, v.screenX, v.screenY, v.clientX, v.clientY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, 0, null), y._fake = !0, s.dispatchEvent(y))
                    }
                    o._resetPos(200);
                    o.options.onTouchEnd && o.options.onTouchEnd.call(o, n);
                    return
                }
                if (p < 300 && o.options.momentum && (h = l ? o._momentum(l - o.startX, p, -o.x, o.scrollerW - o.wrapperW + o.x, o.options.bounce ? o.wrapperW : 0) : h, c = a ? o._momentum(a - o.startY, p, -o.y, o.maxScrollY < 0 ? o.scrollerH - o.wrapperH + o.y : 0, o.options.bounce ? o.wrapperH : 0) : c, l = o.x + h.dist, a = o.y + c.dist, (o.x > 0 && l > 0 || o.x < o.maxScrollX && l < o.maxScrollX) && (h = {
                    dist: 0,
                    time: 0
                }), (o.y > 0 && a > 0 || o.y < o.maxScrollY && a < o.maxScrollY) && (c = {
                    dist: 0,
                    time: 0
                })), h.dist || c.dist) {
                    w = i.max(i.max(h.time, c.time), 10);
                    o.scrollTo(r(l), r(a), w);
                    o.options.onTouchEnd && o.options.onTouchEnd.call(o, n);
                    return
                }
                o._resetPos(200);
                o.options.onTouchEnd && o.options.onTouchEnd.call(o, n)
            }
        }, _resetPos: function (n) {
            var t = this, i = t.x >= 0 ? 0 : t.x < t.maxScrollX ? t.maxScrollX : t.x,
                r = t.y >= 0 || t.maxScrollY > 0 ? 0 : t.y < t.maxScrollY ? t.maxScrollY : t.y;
            if (i == t.x && r == t.y) {
                t.moved && (t.options.onScrollEnd && t.options.onScrollEnd.call(t), t.moved = !1);
                return
            }
            t.scrollTo(i, r, n || 0)
        }, _mouseout: function (n) {
            var t = n.relatedTarget;
            if (!t) {
                this._end(n);
                return
            }
            while (t = t.parentNode) if (t == this.wrapper) return;
            this._end(n)
        }, _transitionEnd: function (n) {
            var t = this;
            n.target == t.scroller && (t._unbind("webkitTransitionEnd"), t._startAni())
        }, _startAni: function () {
            var n = this, r = n.x, u = n.y, o = Date.now(), t, f, e;
            if (!n.animating) {
                if (!n.steps.length) {
                    n._resetPos(400);
                    return
                }
                if (t = n.steps.shift(), t.x == r && t.y == u && (t.time = 0), n.animating = !0, n.moved = !0, n.options.useTransition) {
                    n._transitionTime(t.time);
                    n._pos(t.x, t.y);
                    n.animating = !1;
                    t.time ? n._bind("webkitTransitionEnd") : n._resetPos(0);
                    return
                }
                e = function () {
                    var s = Date.now(), h, c;
                    if (s >= o + t.time) {
                        n._pos(t.x, t.y);
                        n.animating = !1;
                        n.options.onAnimationEnd && n.options.onAnimationEnd.call(n);
                        n._startAni();
                        return
                    }
                    s = (s - o) / t.time - 1;
                    f = i.sqrt(1 - s * s);
                    h = (t.x - r) * f + r;
                    c = (t.y - u) * f + u;
                    n._pos(h, c);
                    n.animating && (n.aniTime = d(e))
                };
                e()
            }
        }, _transitionTime: function (t) {
            this.scroller.style[n + "TransitionDuration"] = t + "ms"
        }, _momentum: function (n, t, u, f, e) {
            var h = .0006, s = i.abs(n) / t, o = s * s / (2 * h), l = 0, c = 0;
            return n > 0 && o > u ? (c = e / (6 / (o / s * h)), u = u + c, s = s * u / o, o = u) : n < 0 && o > f && (c = e / (6 / (o / s * h)), f = f + c, s = s * f / o, o = f), o = o * (n < 0 ? -1 : 1), l = s / h, {
                dist: o,
                time: r(l)
            }
        }, _offset: function (n) {
            for (var t = -n.offsetLeft, i = -n.offsetTop; n = n.offsetParent;) t -= n.offsetLeft, i -= n.offsetTop;
            return {left: t, top: i}
        }, _bind: function (n, t, i) {
            (t || this.scroller).addEventListener(n, this, !!i)
        }, _unbind: function (n, t, i) {
            (t || this.scroller).removeEventListener(n, this, !!i)
        }, destroy: function () {
            var t = this;
            t.scroller.style[n + "Transform"] = "";
            t._unbind(o, window);
            t._unbind(s);
            t._unbind(u);
            t._unbind(f);
            t._unbind(e);
            t._unbind("mouseout", t.wrapper);
            t.options.useTransition && t._unbind("webkitTransitionEnd");
            t.options.onDestroy && t.options.onDestroy.call(t)
        }, refresh: function () {
            var t = this, i;
            t.wrapperW = t.wrapper.clientWidth;
            t.wrapperH = t.wrapper.clientHeight;
            t.scrollerW = t.scroller.offsetWidth;
            t.scrollerH = t.scroller.offsetHeight;
            t.maxScrollX = t.wrapperW - t.scrollerW;
            t.maxScrollY = t.wrapperH - t.scrollerH;
            t.dirX = 0;
            t.dirY = 0;
            t.hScroll = t.options.hScroll && t.maxScrollX < 0;
            t.vScroll = t.options.vScroll && (!t.options.bounceLock && !t.hScroll || t.scrollerH > t.wrapperH);
            i = t._offset(t.wrapper);
            t.wrapperOffsetLeft = -i.left;
            t.wrapperOffsetTop = -i.top;
            t.scroller.style[n + "TransitionDuration"] = "0";
            t._resetPos(200)
        }, scrollTo: function (n, t, i, r) {
            var e = this, u = n, f, o;
            for (e.stop(), u.length || (u = [{
                x: n,
                y: t,
                time: i,
                relative: r
            }]), f = 0, o = u.length; f < o; f++) u[f].relative && (u[f].x = e.x - u[f].x, u[f].y = e.y - u[f].y), e.steps.push({
                x: u[f].x,
                y: u[f].y,
                time: u[f].time || 0
            });
            e._startAni()
        }, scrollToElement: function (n, t) {
            var u = this, r;
            (n = n.nodeType ? n : u.scroller.querySelector(n), n) && (r = u._offset(n), r.left += u.wrapperOffsetLeft, r.top += u.wrapperOffsetTop, r.left = r.left > 0 ? 0 : r.left < u.maxScrollX ? u.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < u.maxScrollY ? u.maxScrollY : r.top, t = t === undefined ? i.max(i.abs(r.left) * 2, i.abs(r.top) * 2) : t, u.scrollTo(r.left, r.top, t))
        }, disable: function () {
            this.stop();
            this._resetPos(0);
            this.enabled = !1;
            this._unbind(u);
            this._unbind(f);
            this._unbind(e)
        }, enable: function () {
            this.enabled = !0
        }, stop: function () {
            l(this.aniTime);
            this.steps = [];
            this.moved = !1;
            this.animating = !1
        }
    };
    typeof exports != "undefined" ? exports.iScroll = h : window.iScroll = h
})();
var StolenTech = StolenTech || {};
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.UI = StolenTech.JavaScript.UI || {};
StolenTech.JavaScript.UI.TreeViewCount = 0;
StolenTech.JavaScript.UI.TreeViewCssClass = "gt-treeView";
StolenTech.JavaScript.UI.TreeViewTitleBarCssClass = "gt-treeViewTitleBar";
StolenTech.JavaScript.UI.TreeViewNodeCssClass = "gt-treeViewNode";
StolenTech.JavaScript.UI.TreeViewNodeHoverCssClass = "gt-treeViewNode gt-treeViewNode-hover";
StolenTech.JavaScript.UI.TreeViewNodeSelectedCssClass = "gt-treeViewNode gt-treeViewNode-selected";
StolenTech.JavaScript.UI.TreeViewNodeSelectedHoverCssClass = "gt-treeViewNode gt-treeViewNode-selectedHover";
StolenTech.JavaScript.UI.TreeViewNodeContentCssClass = "gt-treeViewNodeContent";
StolenTech.JavaScript.UI.TreeViewExpandImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnElEQVR42u2SvQ3DIBBGv0SeAMQAjIKEREHlLTySt3BFgYREyxAI90bGIxC5xyROGeWV9/N0ujvgNwkh1OM46ie1QysYY0RKCeu6Vs75oyd4XiWklPDen7L6lYAQAq01rLXIOdfbghNKKcZxxDzP2LatKRl6gn3fsSwLpmkCY6y5i8sJSikwxkApddncncA5ByEE3l2hyZ0/+AO8ANtIO3303KMKAAAAAElFTkSuQmCC";
StolenTech.JavaScript.UI.TreeViewCollapseImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASUlEQVR42mNgGAV4wc6dO/+3t7f/J1uzqqoqGONTx4RLc05ODoOxsTFBi5go0YxhAKmaMQw4d+4cmD579iwcJyUlkRWGo4CeAABhhiWnOPGAPAAAAABJRU5ErkJggg==";
StolenTech.JavaScript.UI.TreeViewExpandOverImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5UlEQVR42mNgGH7g8Zc/DeV3fv2/8P73/4dANiH1TOgCv/4yMGx9848h995fhoff/9c/+ozfEAwDfv8H4f8MqaKMDHn3/jC8+P2v/ikeQzAM+APUDAJqnIwMFTJMDDE3/jLc//mv/uVX7IZgGADVzwCilNgZGZpkmRgigIZ8+sNQj80AFgwDGCE0iLr5/T9Dz7N/DBu1mBmADmokygBmoFaQ5uvf/jNMffmPYaEKM4MgC1OjDB9LA1EGgATYmBgZFr35z9CrwMIgwMLYKI9DM3YDgKHiKczEECLACNaswI9b8yiAAACGIFRbsOC+PAAAAABJRU5ErkJggg==";
StolenTech.JavaScript.UI.TreeViewCollapseOverImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVR42mNgGPKAEZ/ko89/GpiAKtiYGBjEuFgaSDL55oc/DQue/PqfeO3n/0df/uDUzIRN8PL73w37P/6tb3z4l2H3u38Mv/7htgjDgEvvfjcc+vivvuPJP4Z4SRaw2J//RBpwA+jsY5/+1Xc//ceQANTMBAshYgwAaT4K1NyJrhkImPEENQsy58iX/wy/gbbNefYHLuYqxMTAjCew4WaDXMAC9e9fqATIeaxAgh3IkeFjaWAYBbQBAKW0TF5U1gMLAAAAAElFTkSuQmCC";
StolenTech.JavaScript.UI.TreeViewLoadingImage = "data:image/gif;base64,R0lGODlhEAAQAPYAAP///wAAANTU1JSUlGBgYEBAQERERG5ubqKiotzc3KSkpCQkJCgoKDAwMDY2Nj4+Pmpqarq6uhwcHHJycuzs7O7u7sLCwoqKilBQUF5eXr6+vtDQ0Do6OhYWFoyMjKqqqlxcXHx8fOLi4oaGhg4ODmhoaJycnGZmZra2tkZGRgoKCrCwsJaWlhgYGAYGBujo6PT09Hh4eISEhPb29oKCgqioqPr6+vz8/MDAwMrKyvj4+NbW1q6urvDw8NLS0uTk5N7e3s7OzsbGxry8vODg4NjY2PLy8tra2np6erS0tLKyskxMTFJSUlpaWmJiYkJCQjw8PMTExHZ2djIyMurq6ioqKo6OjlhYWCwsLB4eHqCgoE5OThISEoiIiGRkZDQ0NMjIyMzMzObm5ri4uH5+fpKSkp6enlZWVpCQkEpKSkhISCIiIqamphAQEAwMDKysrAQEBJqamiYmJhQUFDg4OHR0dC4uLggICHBwcCAgIFRUVGxsbICAgAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAHjYAAgoOEhYUbIykthoUIHCQqLoI2OjeFCgsdJSsvgjcwPTaDAgYSHoY2FBSWAAMLE4wAPT89ggQMEbEzQD+CBQ0UsQA7RYIGDhWxN0E+ggcPFrEUQjuCCAYXsT5DRIIJEBgfhjsrFkaDERkgJhswMwk4CDzdhBohJwcxNB4sPAmMIlCwkOGhRo5gwhIGAgAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYU7A1dYDFtdG4YAPBhVC1ktXCRfJoVKT1NIERRUSl4qXIRHBFCbhTKFCgYjkII3g0hLUbMAOjaCBEw9ukZGgidNxLMUFYIXTkGzOmLLAEkQCLNUQMEAPxdSGoYvAkS9gjkyNEkJOjovRWAb04NBJlYsWh9KQ2FUkFQ5SWqsEJIAhq6DAAIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhQkKE2kGXiwChgBDB0sGDw4NDGpshTheZ2hRFRVDUmsMCIMiZE48hmgtUBuCYxBmkAAQbV2CLBM+t0puaoIySDC3VC4tgh40M7eFNRdH0IRgZUO3NjqDFB9mv4U6Pc+DRzUfQVQ3NzAULxU2hUBDKENCQTtAL9yGRgkbcvggEq9atUAAIfkECQoAAAAsAAAAABAAEAAAB4+AAIKDhIWFPygeEE4hbEeGADkXBycZZ1tqTkqFQSNIbBtGPUJdD088g1QmMjiGZl9MO4I5ViiQAEgMA4JKLAm3EWtXgmxmOrcUElWCb2zHkFQdcoIWPGK3Sm1LgkcoPrdOKiOCRmA4IpBwDUGDL2A5IjCCN/QAcYUURQIJIlQ9MzZu6aAgRgwFGAFvKRwUCAAh+QQJCgAAACwAAAAAEAAQAAAHjIAAgoOEhYUUYW9lHiYRP4YACStxZRc0SBMyFoVEPAoWQDMzAgolEBqDRjg8O4ZKIBNAgkBjG5AAZVtsgj44VLdCanWCYUI3txUPS7xBx5AVDgazAjC3Q3ZeghUJv5B1cgOCNmI/1YUeWSkCgzNUFDODKydzCwqFNkYwOoIubnQIt244MzDC1q2DggIBACH5BAkKAAAALAAAAAAQABAAAAeJgACCg4SFhTBAOSgrEUEUhgBUQThjSh8IcQo+hRUbYEdUNjoiGlZWQYM2QD4vhkI0ZWKCPQmtkG9SEYJURDOQAD4HaLuyv0ZeB4IVj8ZNJ4IwRje/QkxkgjYz05BdamyDN9uFJg9OR4YEK1RUYzFTT0qGdnduXC1Zchg8kEEjaQsMzpTZ8avgoEAAIfkECQoAAAAsAAAAABAAEAAAB4iAAIKDhIWFNz0/Oz47IjCGADpURAkCQUI4USKFNhUvFTMANxU7KElAhDA9OoZHH0oVgjczrJBRZkGyNpCCRCw8vIUzHmXBhDM0HoIGLsCQAjEmgjIqXrxaBxGCGw5cF4Y8TnybglprLXhjFBUWVnpeOIUIT3lydg4PantDz2UZDwYOIEhgzFggACH5BAkKAAAALAAAAAAQABAAAAeLgACCg4SFhjc6RhUVRjaGgzYzRhRiREQ9hSaGOhRFOxSDQQ0uj1RBPjOCIypOjwAJFkSCSyQrrhRDOYILXFSuNkpjggwtvo86H7YAZ1korkRaEYJlC3WuESxBggJLWHGGFhcIxgBvUHQyUT1GQWwhFxuFKyBPakxNXgceYY9HCDEZTlxA8cOVwUGBAAA7AAAAAAAAAAAA";
StolenTech.JavaScript.UI.TreeViewSelectionImage = "";
StolenTech.JavaScript.UI.TreeViewNodeRoundBorders = !1;
StolenTech.JavaScript.UI.TreeView = function () {
    this.index = StolenTech.JavaScript.UI.TreeViewCount++;
    this.root = null;
    this.nodes = [];
    this.selectedNode = null;
    this.nodeIndentSize = 10;
    this.textTitle = null;
    this.separator = "/";
    this.imgPlus = new Image;
    this.imgPlus.src = StolenTech.JavaScript.UI.TreeViewExpandImage;
    this.imgMinus = new Image;
    this.imgMinus.src = StolenTech.JavaScript.UI.TreeViewCollapseImage;
    this.imgPlusHover = new Image;
    this.imgPlusHover.src = StolenTech.JavaScript.UI.TreeViewExpandOverImage;
    this.imgMinusHover = new Image;
    this.imgMinusHover.src = StolenTech.JavaScript.UI.TreeViewCollapseOverImage;
    this.imgLoading = new Image;
    this.imgLoading.src = StolenTech.JavaScript.UI.TreeViewLoadingImage;
    StolenTech.JavaScript.UI.TreeViewSelectionImage && (this.imgSelection = new Image, this.imgSelection.src = StolenTech.JavaScript.UI.TreeViewSelectionImage);
    this.icons = {};
    this.iconsSelected = {};
    this.onTreeNodeSelect = null;
    this.onTreeNodeExpand = null;
    this.onTreeNodeContextMenu = null;
    this.onTreeNodeSignMouseOver = null;
    this.onTreeNodeMouseOver = null
};
StolenTech.JavaScript.UI.TreeView.prototype.SetIconSize = function (n, t) {
    this.iconWidth = n;
    this.iconHeight = t
};
StolenTech.JavaScript.UI.TreeView.prototype.SetSignSize = function (n, t) {
    this.signWidth = n;
    this.signHeight = t
};
StolenTech.JavaScript.UI.TreeView.prototype.CreateRoot = function () {
    return this.root = new StolenTech.JavaScript.UI.TreeViewNode(this, "", "Root"), this.root.id = "root", this.nodes.root = this.root, this.root.expanded = !0, this.root
};
StolenTech.JavaScript.UI.TreeView.prototype.SetTitle = function (n) {
    this.elementTitle && (this.elementTitle.nodeValue = n)
};
StolenTech.JavaScript.UI.TreeView.prototype.SetSignIcons = function (n, t, i, r) {
    this.imgPlus.src = n;
    this.imgPlusHover.src = t;
    this.imgMinus.src = i;
    this.imgMinusHover.src = r
};
StolenTech.JavaScript.UI.TreeView.prototype.SetNodeIcons = function (n, t, i) {
    var u = new Image, r;
    u.src = t;
    this.icons[n] = u;
    i && (r = new Image, r.src = i, this.iconsSelected[n] = r)
};
StolenTech.JavaScript.UI.TreeView.prototype.SetLoadingIcon = function (n) {
    this.imgLoading.src = n
};
StolenTech.JavaScript.UI.TreeView.prototype.SetHeight = function (n) {
    this.divTreeTitleBar && (n -= this.divTreeTitleBar.offsetHeight);
    this.divTreeBody.style.height = n + "px"
};
StolenTech.JavaScript.UI.TreeView.prototype.Render = function (n, t) {
    var o = StolenTech.JavaScript.Util.GetStyleObject(StolenTech.JavaScript.UI.TreeViewNodeCssClass), r, u, e, i, f;
    for (this.treeNodeHeight = parseInt(o.height), (isNaN(this.treeNodeHeight) || this.treeNodeHeight < 18) && (this.treeNodeHeight = 18), r = document.createElement("div"), t.appendChild(r), r.id = n, r.className = StolenTech.JavaScript.UI.TreeViewCssClass, this.textTitle && (u = document.createElement("div"), r.appendChild(u), u.className = StolenTech.JavaScript.UI.TreeViewTitleBarCssClass, e = document.createTextNode(this.textTitle), u.appendChild(e), this.elementTitle = e, this.divTreeTitleBar = u), i = document.createElement("div"), r.appendChild(i), i.style.overflowX = "hidden", i.style.overflowY = "auto", i.style.position = "relative", this.divTreeBody = i, this.root.divNode = document.createElement("div"), i.appendChild(this.root.divNode), this.root.divNode.style.padding = "10px 1px 10px 1px", this.root.divChildNodes = document.createElement("div"), this.root.divNode.appendChild(this.root.divChildNodes), this.root.divChildNodes.style.display = this.root.expanded ? "block" : "none", typeof iScroll == "function" && /(iPhone|iPod|iPad)/i.test(navigator.userAgent) && (this.iScroll = new iScroll(this.divTreeBody)), f = 0; f < this.root.childNodes.length; f++) this.root.childNodes[f].Render(this.root.divChildNodes)
};
StolenTech.JavaScript.UI.TreeViewNode = function (n, t, i, r) {
    this.tree = n;
    this.text = t;
    this.type = i;
    this.value = r;
    this.indent = 0;
    this.selected = !1;
    this.selectable = !0;
    this.expanded = !1;
    this.contextSelected = !1;
    this.loaded = !1;
    this.loading = !1;
    this.expandable = !1;
    this.childNodes = [];
    this.parent = null;
    this.icon = "";
    this.isTreeNode = !0;
    this.isRendered = !1;
    var u = this;
    this.mouseOverSignEvent = function () {
        if (u.imgSign.src = u.expanded || u.loading ? u.tree.imgMinusHover.src : u.tree.imgPlusHover.src, u.isMouseOverSign = !0, u.tree.onTreeNodeSignMouseOver) u.tree.onTreeNodeSignMouseOver(u)
    };
    this.mouseOutSignEvent = function () {
        u.imgSign.src = u.expanded || u.loading ? u.tree.imgMinus.src : u.tree.imgPlus.src;
        u.isMouseOverSign = !1
    };
    this.clickSignEvent = function (n) {
        return u.expanded ? u.Collapse() : u.Expand(), u.tree.iScroll && setTimeout(function () {
            u.tree.iScroll.refresh()
        }, 0), StolenTech.JavaScript.Util.CancelEvent(n)
    }
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.AddChildNode = function (n, t, i, r) {
    var u = new StolenTech.JavaScript.UI.TreeViewNode(this.tree, n, i, r);
    return u.id = this.id + "_" + this.childNodes.length, u.indent = this.indent + 1, u.expandable = t, u.parent = this, this.childNodes[this.childNodes.length] = u, this.tree.nodes[u.id] = u, u
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.Update = function (n, t, i, r) {
    this.text = n;
    this.expandable = t;
    this.type = i;
    this.value = r;
    this.isRendered = !1
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.Render = function (n) {
    var t, i, u, r;
    if (!this.isRendered) {
        if (t = this, i = (this.indent - 1) * this.tree.nodeIndentSize, this.divNodeContainer) n.appendChild(this.divNodeContainer), this.divNodeContainer.title = this.text, this.indent > 0 && this.expandable ? (this.imgSign || (this.imgSign = new Image, this.imgSign.style.width = this.tree.signWidth + "px", this.imgSign.style.height = this.tree.signHeight + "px", this.imgSign.style.position = "absolute", this.imgSign.style.left = i + 8 + "px", this.divNode.insertBefore(this.imgSign, this.divNodeContent), this.imgSign.style.top = Math.round((this.tree.treeNodeHeight - this.tree.signHeight) / 2) + 1 + "px", StolenTech.JavaScript.Util.AddEvent(this.imgSign, "mouseover", this.mouseOverSignEvent), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "mouseout", this.mouseOutSignEvent), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "click", this.clickSignEvent)), this.imgSign.src = this.expanded ? this.tree.imgMinus.src : this.tree.imgPlus.src) : this.imgSign && (StolenTech.JavaScript.Util.RemoveEvent(this.imgSign, "mouseover", this.mouseOverSignEvent), StolenTech.JavaScript.Util.RemoveEvent(this.imgSign, "mouseout", this.mouseOutSignEvent), StolenTech.JavaScript.Util.RemoveEvent(this.imgSign, "click", this.clickSignEvent), this.divNode.removeChild(this.imgSign), this.imgSign = null, this.expanded = !1), this.imgNode.src = this.icon != "" ? this.icon : this.tree.icons[this.type] ? this.tree.icons[this.type].src : "", this.spanNode.firstChild.nodeValue = this.text, this.expandable || this.UnloadChildren(), this.divChildNodes.style.display = this.expanded ? "block" : "none"; else for (this.divNodeContainer = document.createElement("div"), n.appendChild(this.divNodeContainer), this.divNodeContainer.title = this.text, this.divNode = document.createElement("div"), this.divNodeContainer.appendChild(this.divNode), this.divNode.className = StolenTech.JavaScript.UI.TreeViewNodeCssClass, this.divNode.style.position = "relative", StolenTech.JavaScript.UI.TreeViewNodeRoundBorders && StolenTech.JavaScript.Util.SetBorderRadius(this.divNode, 3, 3, 3, 3), this.divNode.style.overflow = "hidden", this.tree.imgSelection && (this.divNode.style.backgroundImage = "url('" + this.tree.imgSelection.src + "')"), StolenTech.JavaScript.Util.AddEvent(this.divNode, "mouseover", function (n) {
            return t.onMouseOver(n)
        }), StolenTech.JavaScript.Util.AddEvent(this.divNode, "mouseout", function (n) {
            return t.onMouseOut(n)
        }), StolenTech.JavaScript.Util.AddEvent(this.divNode, "click", function (n) {
            return t.onClick(n)
        }), StolenTech.JavaScript.Util.AddEvent(this.divNode, "contextmenu", function (n) {
            return t.onContextMenu(n)
        }), u = this, StolenTech.JavaScript.Util.AddEvent(this.divNode, "touchstart", function (n) {
            var t = StolenTech.JavaScript.Util.GetEventTarget(n);
            t.parentNode == u.divNode && (StolenTech.JavaScript.Util.SimulateClick(n), n.stopPropagation())
        }), StolenTech.JavaScript.Util.AddEvent(this.divNode, "touchstart", StolenTech.JavaScript.Util.SimulateContextMenu), this.indent > 0 && (this.childNodes.length > 0 || this.expandable) && (this.imgSign = new Image, this.imgSign.style.width = this.tree.signWidth + "px", this.imgSign.style.height = this.tree.signHeight + "px", this.imgSign.style.position = "absolute", this.imgSign.style.left = i + 8 + "px", this.imgSign.src = this.expanded ? this.tree.imgMinus.src : this.tree.imgPlus.src, this.divNode.appendChild(this.imgSign), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "mouseover", this.mouseOverSignEvent), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "mouseout", this.mouseOutSignEvent), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "click", this.clickSignEvent)), this.divNodeContent = document.createElement("div"), this.divNode.appendChild(this.divNodeContent), this.divNodeContent.className = StolenTech.JavaScript.UI.TreeViewNodeContentCssClass, this.divNodeContent.style.position = "absolute", this.divNodeContent.style.left = i + 22 + "px", this.divNodeContent.style.whiteSpace = "nowrap", this.imgNode = new Image, this.imgNode.style.width = this.tree.iconWidth + "px", this.imgNode.style.height = this.tree.iconHeight + "px", this.imgNode.style.verticalAlign = "top", this.imgNode.style.position = "relative", this.imgNode.style.marginRight = "4px", this.imgNode.src = this.icon != "" ? this.icon : this.tree.icons[this.type] ? this.tree.icons[this.type].src : "", this.divNodeContent.appendChild(this.imgNode), this.spanNode = document.createElement("span"), this.divNodeContent.appendChild(this.spanNode), this.spanNode.appendChild(document.createTextNode(this.text)), this.divNodeContent.style.height = this.tree.treeNodeHeight + "px", this.divNodeContent.style.lineHeight = this.tree.treeNodeHeight - 2 + "px", this.imgNode.style.top = Math.round((this.tree.treeNodeHeight - this.tree.iconHeight) / 2) - 1 + "px", this.imgSign && (this.imgSign.style.top = Math.round((this.tree.treeNodeHeight - this.tree.signHeight) / 2) + 1 + "px"), this.divChildNodes = document.createElement("div"), this.divNodeContainer.appendChild(this.divChildNodes), this.divChildNodes.style.display = this.expanded ? "block" : "none", r = 0; r < this.childNodes.length; r++) this.childNodes[r].Render(this.divChildNodes);
        this.isRendered = !0
    }
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.onMouseOver = function () {
    if (this.divNode.className = this.selected || this.contextSelected ? StolenTech.JavaScript.UI.TreeViewNodeSelectedHoverCssClass : StolenTech.JavaScript.UI.TreeViewNodeHoverCssClass, this.tree.onTreeNodeMouseOver) this.tree.onTreeNodeMouseOver(this)
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.onMouseOut = function () {
    this.divNode.className = this.selected || this.contextSelected ? StolenTech.JavaScript.UI.TreeViewNodeSelectedCssClass : StolenTech.JavaScript.UI.TreeViewNodeCssClass
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.onClick = function () {
    this.Select();
    this.loaded && this.Expand()
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.onContextMenu = function (n) {
    if (n || (n = window.event), this.contextSelected || (this.divNode.className = StolenTech.JavaScript.UI.TreeViewNodeSelectedCssClass, this.contextSelected = !0), this.tree.onTreeNodeContextMenu) this.tree.onTreeNodeContextMenu(this, n);
    return !0
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.onContextMenuClose = function () {
    !this.selected && this.contextSelected && (this.divNode.className = StolenTech.JavaScript.UI.TreeViewNodeCssClass);
    this.contextSelected = !1
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.Collapse = function () {
    this.expanded && (this.expanded = !1, this.imgSign && (this.imgSign.src = this.isMouseOverSign ? this.tree.imgPlusHover.src : this.tree.imgPlus.src), this.divChildNodes.style.display = "none")
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.Expand = function () {
    if (!this.expanded && (this.expanded = !0, this.imgSign && (this.imgSign.src = this.isMouseOverSign ? this.tree.imgMinusHover.src : this.tree.imgMinus.src), this.divChildNodes.style.display = "block", this.tree.onTreeNodeExpand)) this.tree.onTreeNodeExpand(this)
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.Select = function () {
    if (!this.selected && this.selectable && (this.tree.selectedNode && this.tree.selectedNode.Unselect(), this.tree.iconsSelected[this.type] && (this.loading ? this.originalImageSrc = this.tree.iconsSelected[this.type].src : this.imgNode.src = this.tree.iconsSelected[this.type].src), this.divNode.className = StolenTech.JavaScript.UI.TreeViewNodeSelectedCssClass, this.selected = !0, this.tree.selectedNode = this, this.tree.onTreeNodeSelect)) this.tree.onTreeNodeSelect(this)
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.Unselect = function () {
    this.selected && (this.tree.icons[this.type] && (this.loading ? this.originalImageSrc = this.tree.icons[this.type].src : this.imgNode.src = this.tree.icons[this.type].src), this.divNode.className = StolenTech.JavaScript.UI.TreeViewNodeCssClass, this.selected = !1, this.tree.selectedNode = null)
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.SortChildren = function () {
    if (this.childNodes.length != 0) {
        var n = function (n, t) {
            var i = n.text.toLowerCase(), r = t.text.toLowerCase();
            return StolenTech.JavaScript.Util.Sort.CompareBasic(i, r)
        };
        this.childNodes.sort(n)
    }
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.LoadChildren = function () {
    for (var i, t, u, r, n = 0; n < this.childNodes.length; n++) i = this.childNodes[n], i.isRendered && (this.divChildNodes.removeChild(i.divNodeContainer), this.childNodes.splice(n, 1), n--);
    if (t = this, this.childNodes.length == 0) this.imgSign && (StolenTech.JavaScript.Util.RemoveEvent(this.imgSign, "mouseover", this.mouseOverSignEvent), StolenTech.JavaScript.Util.RemoveEvent(this.imgSign, "mouseout", this.mouseOutSignEvent), StolenTech.JavaScript.Util.RemoveEvent(this.imgSign, "click", this.clickSignEvent), this.divNode.removeChild(this.imgSign), this.imgSign = null, this.expandable = !1), this.divChildNodes.style.display = "none"; else {
        for (this.indent > 0 && (this.imgSign ? this.imgSign.src = this.isMouseOverSign ? this.tree.imgMinusHover.src : this.tree.imgMinus.src : (u = (this.indent - 1) * this.tree.nodeIndentSize, this.imgSign = new Image, this.imgSign.style.width = this.tree.signWidth + "px", this.imgSign.style.height = this.tree.signHeight + "px", this.imgSign.style.position = "absolute", this.imgSign.style.left = u + 8 + "px", this.imgSign.src = this.tree.imgMinus.src, this.divNode.insertBefore(this.imgSign, this.divNodeContent), this.imgSign.style.top = Math.round((this.tree.treeNodeHeight - this.tree.signHeight) / 2) + 1 + "px", StolenTech.JavaScript.Util.AddEvent(this.imgSign, "mouseover", this.mouseOverSignEvent), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "mouseout", this.mouseOutSignEvent), StolenTech.JavaScript.Util.AddEvent(this.imgSign, "click", this.clickSignEvent))), this.expanded = !0, this.divChildNodes.style.display = "block", r = document.createDocumentFragment(), n = 0; n < t.childNodes.length; n++) t.childNodes[n].Render(r);
        this.divChildNodes.appendChild(r)
    }
    t.tree.iScroll && setTimeout(function () {
        t.tree.iScroll.refresh()
    }, 0);
    this.loaded = !0;
    this.loading = !1
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.UnloadChildren = function () {
    for (var t, n; this.divChildNodes.firstChild;) this.divChildNodes.removeChild(this.divChildNodes.firstChild);
    for (t = this, t.tree.iScroll && setTimeout(function () {
        t.tree.iScroll.refresh()
    }, 0), n = 0; n < this.childNodes.length; n++) delete this.childNodes[n];
    this.childNodes.length = 0;
    this.loaded = !1;
    this.expanded = !1
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.ShowLoading = function () {
    this.divChildNodes.firstChild || (this.imgSign && (this.imgSign.src = this.isMouseOverSign ? this.tree.imgMinusHover.src : this.tree.imgMinus.src), this.originalImageSrc = this.imgNode.src, this.imgNode.src = this.tree.imgLoading.src, this.loading = !0)
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.HideLoading = function () {
    this.loading && (this.imgSign && (this.imgSign.src = this.isMouseOverSign ? this.tree.imgPlusHover.src : this.tree.imgPlus.src), this.imgNode.src = this.originalImageSrc, this.loading = !1)
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.GetPath = function () {
    var u, n, t, r, i, f;
    if (this == this.tree.root) return null;
    if (t = this.id.split("_"), f = this.tree.separator, i = "", t.length > 1) for (r = "root", n = 1; n < t.length; n++) r += "_" + t[n], u = this.tree.nodes[r], i += u.text, n != t.length - 1 && (i += f);
    return i
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.GetRootValue = function () {
    if (this == this.tree.root) return null;
    var t, n, i, r;
    return n = this.id.split("_"), n.length > 1 && (i = "root_" + n[1], t = this.tree.nodes[i], r = t.value), r
};
StolenTech.JavaScript.UI.TreeViewNode.prototype.GetChildNode = function (n) {
    for (var i = null, t = 0; t < this.childNodes.length; t++) if (this.childNodes[t].text == n) {
        i = this.childNodes[t];
        break
    }
    return i
};
StolenTech.JavaScript.UI.TreeView.prototype.SelectNode = function (n, t) {
    for (var i = null, u, f, r = 0; r < this.root.childNodes.length; r++) if (this.root.childNodes[r].value == n) {
        i = this.root.childNodes[r];
        break
    }
    if (i) {
        for (f = t.split(this.tree.separator), r = 0; r < f.length; r++) for (u = 0; u < i.childNodes.length; u++) if (i.childNodes[u].text == f[r]) {
            i = i.childNodes[u];
            break
        }
        i.parent && i.parent.Expand();
        i.Select(!0);
        (i.childNodes.length > 0 || i.expandable) && i.Expand()
    }
};
StolenTech.JavaScript.UI.TreeView.prototype.GetNode = function (n, t) {
    for (var r = null, u, f, i = 0; i < this.root.childNodes.length; i++) if (this.root.childNodes[i].value == n) {
        r = this.root.childNodes[i];
        break
    }
    if (!r) return null;
    for (f = t.split(this.tree.separator), i = 0; i < f.length; i++) for (u = 0; u < r.childNodes.length; u++) if (r.childNodes[u].text == f[i]) {
        r = r.childNodes[u];
        break
    }
    return r
};
var StolenTech = StolenTech || {};
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.UI = StolenTech.JavaScript.UI || {};
StolenTech.JavaScript.UI.GridViewCount = 0;
StolenTech.JavaScript.UI.GridViewCssClass = "gt-gridView";
StolenTech.JavaScript.UI.GridViewColumnCssClass = "gt-gridViewColumn";
StolenTech.JavaScript.UI.GridViewColumnHoverCssClass = "gt-gridViewColumn gt-gridViewColumn-hover";
StolenTech.JavaScript.UI.GridViewColumnSelectedCssClass = "gt-gridViewColumn gt-gridViewColumn-selected";
StolenTech.JavaScript.UI.GridViewCellCssClass = "gt-gridViewCell";
StolenTech.JavaScript.UI.GridViewRowCssClass = "gt-gridViewRow";
StolenTech.JavaScript.UI.GridViewRowHoverCssClass = "gt-gridViewRow-hover";
StolenTech.JavaScript.UI.GridViewRowSelectedCssClass = "gt-gridViewRow-selected";
StolenTech.JavaScript.UI.GridViewRowSelectedHoverCssClass = "gt-gridViewRow-selectedHover";
StolenTech.JavaScript.UI.GridViewAscendingImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAXElEQVQI12P48+cPAww7JJX8R+bDGTZxRf/DZh/4H9ex8D+KpE1kzv/Eadv+t514/X/i6Tf/Z207ClbA4Byf/79949H/ux59+b/17qf/Rx5/+X/q2df/h598/Q8A22pR/QPxkAUAAAAASUVORK5CYII=";
StolenTech.JavaScript.UI.GridViewDescendingImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAXElEQVQI12OwiSv6nzRr5/+Clcf+F60+9b95183/U489+D/r+IP/DH/+/GEI6l79v3jTjf8zL7z7v/n2x/9HHn/5DxIHS4Jw+prL/5fd+AyXQJEE4Vmnn/1H5gMA7c1UrTOSm6YAAAAASUVORK5CYII=";
StolenTech.JavaScript.UI.GridViewSelectionImage = "";
StolenTech.JavaScript.UI.GridViewRowRoundBorders = !1;
StolenTech.JavaScript.UI.GridViewRowFocusedCssClass = "gt-gridViewRow-focused";
StolenTech.JavaScript.UI.GridView = function () {
    this.index = StolenTech.JavaScript.UI.GridViewCount++;
    this.columnsArray = [];
    this.columns = {};
    this.rowsArray = [];
    this.selectedRowsArray = [];
    this.lastSelectedRow = null;
    this.lastFocusedRow = null;
    this.selectedCount = 0;
    this.rowTitleColumn = null;
    this.sortColumn = null;
    this.sortDescending = !1;
    this.iconsPath = {};
    this.iconWidth = 0;
    this.iconHeight = 0;
    this.multipleSelection = !0;
    this.useIconCls = !1;
    this.onColumnClick = this.onColumnClickInternal;
    this.onRowContextMenu = null;
    this.onRowDoubleClick = null;
    this.onSelectionComplete = null;
    this.onGridContextMenu = null;
    this.onRowsRenderedForOnce = null;
    this.imgOrder = new Image;
    this.imgAscending = new Image;
    this.imgAscending.src = StolenTech.JavaScript.UI.GridViewAscendingImage;
    this.imgDescending = new Image;
    this.imgDescending.src = StolenTech.JavaScript.UI.GridViewDescendingImage;
    StolenTech.JavaScript.UI.GridViewSelectionImage && (this.imgSelection = new Image, this.imgSelection.src = StolenTech.JavaScript.UI.GridViewSelectionImage);
    this.isIE7 = StolenTech.JavaScript.Util.GetIEVersion() == 7
};
StolenTech.JavaScript.UI.GridView.prototype.SetIconSize = function (n, t) {
    this.iconWidth = n;
    this.iconHeight = t
};
StolenTech.JavaScript.UI.GridView.prototype.Resize = function (n, t) {
    var i = this;
    StolenTech.JavaScript.Util.EnsureDisplay(this.divElement, function (r) {
        var a, w, k, u, e, d, h, y, c, g, l;
        n && (r.style.width = n + "px");
        a = r.offsetWidth - 30;
        a < 0 && (a = 0);
        i.rowsTable.style.width = a + "px";
        i.divRowsTable.style.width = i.rowsTable.offsetWidth + "px";
        i.divColumns.style.width = (i.divRowsTable.offsetWidth == 30 ? r.offsetWidth : i.divRowsTable.offsetWidth) + "px";
        var s = i.divColumns.getElementsByTagName("div"), o = s.length, f, v = 0, p = 16, b = !0;
        if (i.tbody.childNodes.length == 0) {
            for (f = Math.floor(i.divColumns.offsetWidth / o) - p, f < 0 && (f = 0), w = 0, u = 0; u < o; u++) e = s[u], w += e.offsetWidth;
            if (w == i.divColumns.offsetWidth) b = !1; else for (u = 0; u < o - 1; u++) e = s[u], e.style.width = f + "px", v += e.offsetWidth
        } else for (k = i.tbody.childNodes[0], u = 0; u < o - 1; u++) e = s[u], d = k.childNodes[u], f = d.offsetWidth - p, f < 0 && (f = 0), u == 0 && (f += 6), e.style.width = f + "px", v += e.offsetWidth;
        o > 1 && b && (f = i.divColumns.offsetWidth - v - p, f < 0 && (f = 0), h = s[o - 1], h.style.cssFloat = "", h.style.styleFloat = "", h.style.position = "absolute", h.style.left = v + "px", h.style.width = f + "px");
        o > 1 && (y = s[0], c = i.columnsArray[y.columnIndex], c.paddingLeft = 10, c.paddingRight = 4, y.style.paddingLeft = c.paddingLeft + "px", y.style.paddingRight = c.paddingRight + "px");
        i.sortColumn && !i.sortColumn.hidden && (i.imgOrder.style.left = i.sortColumn.divElement.offsetLeft + Math.round((i.sortColumn.divElement.offsetWidth - i.imgOrder.offsetWidth) / 2) - 1 + "px");
        g = StolenTech.JavaScript.Util.FindPosition(r);
        i.verticalScrollbarX = g[0] + r.offsetWidth - 18;
        t && (r.style.height = t + "px");
        l = r.offsetHeight - i.divColumns.offsetHeight - 6;
        r.scrollWidth > r.clientWidth && (l -= 18);
        l < 0 && (l = 0);
        i.divRowsTable.style.height = l + "px";
        i.iScroll && (r.firstChild.style.width = i.divRowsTable.offsetWidth + "px", setTimeout(function () {
            i.iScroll.refresh();
            i.iScroll2.refresh()
        }, 0))
    })
};
StolenTech.JavaScript.UI.GridView.prototype.AddColumn = function (n, t, i, r, u, f) {
    var e = new StolenTech.JavaScript.UI.GridViewColumn(t, i, r, u, f);
    return e.grid = this, e.index = this.columnsArray.length, this.columnsArray[e.index] = e, this.columns[n] = e, e
};
StolenTech.JavaScript.UI.GridView.prototype.AddRow = function (n, t) {
    var i = new StolenTech.JavaScript.UI.GridViewRow(this, n, t);
    return i.index = this.rowsArray.length, this.rowsArray[i.index] = i, i
};
StolenTech.JavaScript.UI.GridView.prototype.Render = function (n, t) {
    var i, r;
    if (!this.divElement) {
        if (this.styleGridRow = StolenTech.JavaScript.UI.GridViewRowCssClass, this.styleGridRowHover = StolenTech.JavaScript.UI.GridViewRowHoverCssClass, this.styleGridRowSelected = StolenTech.JavaScript.UI.GridViewRowSelectedCssClass, this.styleGridRowSelectedHover = StolenTech.JavaScript.UI.GridViewRowSelectedHoverCssClass, this.styleGridRowFocused = StolenTech.JavaScript.UI.GridViewRowFocusedCssClass, this.gridRowHeight = 18, (isNaN(this.gridRowHeight) || this.gridRowHeight < 18) && (this.gridRowHeight = 18), this.divElement = document.createElement("div"), this.divElement.id = n, this.divElement.style.overflowX = "auto", this.divElement.style.overflowY = "hidden", this.divElement.style.position = "relative", this.divElement.className = StolenTech.JavaScript.UI.GridViewCssClass, t.appendChild(this.divElement), i = this, this.onGridContextMenu && (StolenTech.JavaScript.Util.AddEvent(this.divElement, "contextmenu", this.onGridContextMenu), StolenTech.JavaScript.Util.AddEvent(this.divElement, "touchstart", function (n) {
            StolenTech.JavaScript.Util.SimulateContextMenu(n, function () {
                return i.rowContextMenuActive ? (i.rowContextMenuActive = !1, !1) : !0
            })
        })), this.divColumns = document.createElement("div"), this.divElement.appendChild(this.divColumns), this.divColumns.style.overflow = "hidden", this.divColumns.style.position = "relative", this.imgOrder.style.position = "absolute", this.imgOrder.style.top = "2px", this.RefreshColumns(!0), this.divRowsTable = document.createElement("div"), this.divRowsTable.style.overflowX = "hidden", this.divRowsTable.style.overflowY = "auto", this.divRowsTable.style.paddingTop = "6px", this.divRowsTable.style.paddingLeft = "6px", this.divRowsTable.style.paddingRight = "24px", this.divElement.appendChild(this.divRowsTable), StolenTech.JavaScript.Util.AddEvent(this.divRowsTable, "mousedown", function (n) {
            return i.onMousedown(n)
        }), StolenTech.JavaScript.Util.AddEvent(this.divRowsTable, "mouseup", function (n) {
            return i.onMouseUp(n)
        }), StolenTech.JavaScript.Util.AddEvent(this.divRowsTable, "touchstart", StolenTech.JavaScript.Util.SimulateMouse), StolenTech.JavaScript.Util.AddEvent(this.divRowsTable, "touchend", StolenTech.JavaScript.Util.SimulateMouse), this.rowsTable = document.createElement("table"), this.divRowsTable.appendChild(this.rowsTable), this.rowsTable.cellPadding = 0, this.rowsTable.cellSpacing = 0, this.tbody = document.createElement("tbody"), this.rowsTable.appendChild(this.tbody), typeof iScroll == "function" && /(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
            for (this.iScroll = new iScroll(this.divRowsTable, {hScroll: !1}), r = document.createElement("div"); this.divElement.firstChild;) r.appendChild(this.divElement.firstChild);
            this.divElement.appendChild(r);
            this.iScroll2 = new iScroll(this.divElement, {vScroll: !1})
        }
        this.RenderRows(!0)
    }
};
StolenTech.JavaScript.UI.GridView.prototype.RenderRows = function (n) {
    for (var i = document.createDocumentFragment(), t = 0; t < this.rowsArray.length; t++) this.rowsArray[t].index = t, this.rowsArray[t].Render(i);
    this.tbody.appendChild(i);
    n || this.Resize();
    this.onRowsRenderedForOnce && (this.onRowsRenderedForOnce(), this.onRowsRenderedForOnce = null)
};
StolenTech.JavaScript.UI.GridView.prototype.Clear = function () {
    this.RemoveAllRows(!0);
    for (var n = 0; n < this.columnsArray.length; n++) this.columnsArray[n].divElement && this.divColumns.removeChild(this.columnsArray[n].divElement), this.columnsArray[n] = null;
    this.columnsArray.length = 0;
    this.sortDescending = !1;
    this.Resize()
};
StolenTech.JavaScript.UI.GridView.prototype.RemoveRow = function (n) {
    n.Unselect();
    this.lastSelectedRow == n && (this.lastSelectedRow = null);
    this.lastFocusedRow == n && (this.lastFocusedRow = null);
    this.tbody.removeChild(n.rowElement);
    this.rowsArray.splice(n.index, 1);
    delete n;
    for (var t = 0; t < this.rowsArray.length; t++) this.rowsArray[t].index = t;
    this.Resize()
};
StolenTech.JavaScript.UI.GridView.prototype.RemoveAllRows = function (n) {
    this.selectedRowsArray.length = 0;
    this.lastSelectedRow = null;
    this.lastFocusedRow = null;
    this.selectedCount = 0;
    this.rowsTable.removeChild(this.tbody);
    this.tbody = document.createElement("tbody");
    this.rowsTable.appendChild(this.tbody);
    for (var t = 0; t < this.rowsArray.length; t++) this.rowsArray[t] != undefined && delete this.rowsArray[t];
    this.rowsArray.length = 0;
    n || this.Resize()
};
StolenTech.JavaScript.UI.GridView.prototype.onMousedown = function (n) {
    n || (n = window.event);
    var t = StolenTech.JavaScript.Util.GetEventTarget(n),
        i = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft();
    return this.gridmousedown = t == this.divRowsTable, this.gridmousedown && this.divRowsTable.scrollHeight > this.divRowsTable.clientHeight && (this.gridmousedown = i < this.verticalScrollbarX), !0
};
StolenTech.JavaScript.UI.GridView.prototype.onMouseUp = function (n) {
    n || (n = window.event);
    var t = StolenTech.JavaScript.Util.GetEventTarget(n);
    return this.gridmousedown && t == this.divRowsTable && this.UnSelectAllRows(), !0
};
StolenTech.JavaScript.UI.GridView.prototype.onColumnClickInternal = function (n) {
    n == this.sortColumn ? this.Reverse() : this.Sort(n);
    this.Refresh()
};
StolenTech.JavaScript.UI.GridView.prototype.Sort = function (n, t, i) {
    var r, c;
    if (!n) if (this.sortColumn) n = this.sortColumn; else return;
    var e = this.rowsArray.length, l = n.index, a = n.sortType.comparableValueFunction, o = n.sortType.compareFunction,
        u = new Array(e);
    if (t) var v = t.index, y = t.sortType.comparableValueFunction, h = t.sortType.compareFunction, f = new Array(e);
    if (i) var p = i.index, w = i.sortType.comparableValueFunction, b = i.sortType.compareFunction, s = new Array(e);
    for (r = 0; r < e; r++) this.rowsArray[r].index = r, u[r] = a(this.rowsArray[r].cells[l]), t && (f[r] = y(this.rowsArray[r].cells[v])), i && (s[r] = w(this.rowsArray[r].cells[p]));
    c = i ? function (n, t) {
        var i = n.index, r = t.index, c = o(u[i], u[r]), e;
        return c != 0 ? c : (e = h(f[i], f[r]), e != 0) ? e : b(s[i], s[r])
    } : t ? function (n, t) {
        var i = n.index, r = t.index, e = o(u[i], u[r]);
        return e != 0 ? e : h(f[i], f[r])
    } : function (n, t) {
        var i = n.index, r = t.index;
        return o(u[i], u[r])
    };
    this.rowsArray.sort(c);
    this.sortDescending && this.rowsArray.reverse();
    this.sortColumn = i || t || n;
    this.divElement && !this.sortColumn.hidden && (this.imgOrder.src = this.sortDescending ? this.imgDescending.src : this.imgAscending.src, this.divColumns.appendChild(this.imgOrder), this.imgOrder.style.left = this.sortColumn.divElement.offsetLeft + Math.round((this.sortColumn.divElement.offsetWidth - this.imgOrder.offsetWidth) / 2) - 1 + "px")
};
StolenTech.JavaScript.UI.GridView.prototype.ResetSort = function () {
    this.sortColumn && (this.sortColumn = null, this.sortDescending = !1, this.imgOrder.parentNode == this.divColumns && this.divColumns.removeChild(this.imgOrder))
};
StolenTech.JavaScript.UI.GridView.prototype.Reverse = function () {
    this.rowsArray.reverse();
    this.sortDescending = !this.sortDescending
};
StolenTech.JavaScript.UI.GridView.prototype.Refresh = function () {
    var r = this.sortColumn, i, n, t;
    for (r && !r.hidden && (this.imgOrder.src = this.sortDescending ? this.imgDescending.src : this.imgAscending.src, this.divColumns.appendChild(this.imgOrder), this.imgOrder.style.left = this.sortColumn.divElement.offsetLeft + Math.round((this.sortColumn.divElement.offsetWidth - this.imgOrder.offsetWidth) / 2) - 1 + "px"), i = this.selectedRowsArray.slice(), this.unselectAllRowsInternal(), n = 0; n < this.rowsArray.length; n++) this.rowsArray[n].index = n, this.tbody.appendChild(this.rowsArray[n].rowElement);
    for (t = 0; t < i.length; t++) i[t].Select()
};
StolenTech.JavaScript.UI.GridView.prototype.RefreshColumns = function (n) {
    var i, t;
    for (this.visibleFirstColumn = null, this.visibleLastColumn = null, i = document.createDocumentFragment(), t = 0; t < this.columnsArray.length; t++) this.columnsArray[t].Render(i), this.columnsArray[t].hidden || (this.visibleFirstColumn == null && (this.visibleFirstColumn = this.columnsArray[t]), this.visibleLastColumn = this.columnsArray[t]);
    this.divColumns.appendChild(i);
    n || this.Resize()
};
StolenTech.JavaScript.UI.GridView.prototype.GetSelectedFirstRow = function () {
    return this.selectedRowsArray.length > 0 ? this.selectedRowsArray[0] : null
};
StolenTech.JavaScript.UI.GridView.prototype.GetSelectedLastRow = function () {
    return this.selectedRowsArray.length > 0 ? this.selectedRowsArray[this.selectedRowsArray.length - 1] : null
};
StolenTech.JavaScript.UI.GridView.prototype.GetSelectedCellValues = function (n) {
    for (var i = [], t = 0; t < this.selectedRowsArray.length; t++) i[t] = this.selectedRowsArray[t].GetCellValue(n);
    return i
};
StolenTech.JavaScript.UI.GridView.prototype.GetCellValues = function (n) {
    for (var i = [], t = 0; t < this.rowsArray.length; t++) i[t] = this.rowsArray[t].GetCellValue(n);
    return i
};
StolenTech.JavaScript.UI.GridView.prototype.SelectAllRows = function () {
    this.selectAllRowsInternal();
    this.onSelectionComplete && this.onSelectionComplete()
};
StolenTech.JavaScript.UI.GridView.prototype.UnSelectAllRows = function () {
    this.unselectAllRowsInternal();
    this.onSelectionComplete && this.onSelectionComplete()
};
StolenTech.JavaScript.UI.GridView.prototype.selectAllRowsInternal = function () {
    for (var n = 0; n < this.rowsArray.length; n++) this.rowsArray[n].Select()
};
StolenTech.JavaScript.UI.GridView.prototype.unselectAllRowsInternal = function () {
    for (var n = 0; n < this.selectedRowsArray.length; n++) this.selectedRowsArray[n].Unselect(), n--
};
StolenTech.JavaScript.UI.GridView.prototype.InvertSelectedRows = function () {
    for (var n = 0; n < this.rowsArray.length; n++) this.rowsArray[n].selected ? this.rowsArray[n].Unselect() : this.rowsArray[n].Select();
    this.onSelectionComplete && this.onSelectionComplete()
};
StolenTech.JavaScript.UI.GridView.prototype.ScrollToRow = function (n) {
    this.divRowsTable.scrollTop = n.rowElement.offsetTop
};
StolenTech.JavaScript.UI.GridViewColumn = function (n, t, i, r, u) {
    this.text = n;
    this.alignRight = i;
    this.format = r;
    this.hidden = !1;
    this.grid = null;
    this.index = -1;
    this.sortType = StolenTech.JavaScript.Util.Sort.types[t] ? StolenTech.JavaScript.Util.Sort.types[t] : StolenTech.JavaScript.Util.Sort.types.String;
    this.formatFunction = this.sortType.defaultFormatFunction ? this.sortType.defaultFormatFunction : null;
    this.size = u;
    this.paddingTop = 3;
    this.paddingLeft = i ? 10 : 4;
    this.paddingBottom = 1;
    this.paddingRight = i ? 4 : 10;
    this.divElement = null
};
StolenTech.JavaScript.UI.GridViewColumn.prototype.Render = function (n) {
    var i, t, r;
    this.hidden || (n || (n = this.grid.divColumns), i = this, t = document.createElement("div"), t.style.cssFloat = "left", t.style.styleFloat = "left", t.style.whiteSpace = "nowrap", t.className = StolenTech.JavaScript.UI.GridViewColumnCssClass, this.alignRight && (t.style.textAlign = "right"), t.style.paddingTop = this.paddingTop + "px", t.style.paddingLeft = this.paddingLeft + "px", t.style.paddingBottom = this.paddingBottom + "px", t.style.paddingRight = this.paddingRight + "px", t.columnIndex = this.index, StolenTech.JavaScript.Util.AddEvent(t, "mouseover", function (n) {
        return i.onMouseOver(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "mouseout", function (n) {
        return i.onMouseOut(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "mousedown", function (n) {
        return i.onMouseDown(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "mouseup", function (n) {
        return i.onMouseUp(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "click", function (n) {
        return i.onClick(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "contextmenu", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(t, "touchstart", function (n) {
        i.onMouseOver(n);
        i.onMouseDown(n);
        i.onClick(n);
        return StolenTech.JavaScript.Util.CancelEvent(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "touchend", function (n) {
        i.onMouseOut(n);
        i.onMouseUp(n);
        return StolenTech.JavaScript.Util.CancelEvent(n)
    }), this.divElement = t, r = document.createTextNode(this.text), t.appendChild(r), this == this.grid.sortColumn && (this.grid.imgOrder.src = this.grid.sortDescending ? this.grid.imgDescending.src : this.grid.imgAscending.src, this.grid.divColumns.appendChild(this.grid.imgOrder), this.grid.imgOrder.style.left = t.offsetLeft + Math.round((t.offsetWidth - this.grid.imgOrder.offsetWidth) / 2) - 1 + "px"), n.appendChild(t))
};
StolenTech.JavaScript.UI.GridViewColumn.prototype.onMouseOver = function () {
    this.divElement.className = StolenTech.JavaScript.UI.GridViewColumnHoverCssClass;
    this.divElement.style.paddingTop = this.paddingTop + "px";
    this.divElement.style.paddingLeft = this.paddingLeft + "px";
    this.divElement.style.paddingBottom = this.paddingBottom + "px";
    this.divElement.style.paddingRight = this.paddingRight + "px"
};
StolenTech.JavaScript.UI.GridViewColumn.prototype.onMouseOut = function () {
    this.divElement.className = StolenTech.JavaScript.UI.GridViewColumnCssClass;
    this.divElement.style.paddingTop = this.paddingTop + "px";
    this.divElement.style.paddingLeft = this.paddingLeft + "px";
    this.divElement.style.paddingBottom = this.paddingBottom + "px";
    this.divElement.style.paddingRight = this.paddingRight + "px"
};
StolenTech.JavaScript.UI.GridViewColumn.prototype.onMouseDown = function (n) {
    n || (n = window.event);
    var t = n.which ? n.which : n.button;
    t == 1 && (this.divElement.className = StolenTech.JavaScript.UI.GridViewColumnSelectedCssClass, this.divElement.style.paddingTop = this.paddingTop + 1 + "px", this.divElement.style.paddingLeft = this.paddingLeft + "px", this.divElement.style.paddingBottom = this.paddingBottom - 1 + "px", this.divElement.style.paddingRight = this.paddingRight + "px")
};
StolenTech.JavaScript.UI.GridViewColumn.prototype.onMouseUp = function (n) {
    n || (n = window.event);
    var t = n.which ? n.which : n.button;
    t == 1 && (this.divElement.className = StolenTech.JavaScript.UI.GridViewColumnHoverCssClass, this.divElement.style.paddingTop = this.paddingTop + "px", this.divElement.style.paddingLeft = this.paddingLeft + "px", this.divElement.style.paddingBottom = this.paddingBottom + "px", this.divElement.style.paddingRight = this.paddingRight + "px")
};
StolenTech.JavaScript.UI.GridViewColumn.prototype.onClick = function (n) {
    this.grid.onColumnClick(this, n)
};
StolenTech.JavaScript.UI.GridViewRow = function (n, t, i) {
    var r, u;
    this.grid = n;
    this.cells = t;
    n.useIconCls ? this.icon = i : (r = i.split(":"), this.icon = r.length > 1 ? n.iconsPath[r[0]] + r[1] : n.iconsPath["default"] + i);
    this.index = -1;
    this.rowElement = null;
    this.selected = !1;
    this.isGridRow = !0;
    u = this;
    this.mouseUpEvent = function (n) {
        return u.onMouseUp(n)
    }
};
StolenTech.JavaScript.UI.GridViewRow.prototype.GetCellValue = function (n) {
    return typeof n == "string" && (n = this.grid.columns[n]), this.cells[n.index]
};
StolenTech.JavaScript.UI.GridViewRow.prototype.SetCellValue = function (n, t) {
    typeof n == "string" && (n = this.grid.columns[n]);
    this.cells[n.index] = t
};
StolenTech.JavaScript.UI.GridViewRow.prototype.Render = function (n) {
    var o = this, t = document.createElement("tr"), i, e, u, f, s, h, r, c;
    for (n ? n.appendChild(t) : this.grid.tbody.appendChild(t), this.grid.rowTitleColumn && (t.title = this.cells[this.grid.rowTitleColumn.index]), StolenTech.JavaScript.Util.AddEvent(t, "mouseover", function (n) {
        return o.onMouseOver(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "mouseout", function (n) {
        return o.onMouseOut(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "mousedown", function (n) {
        return o.onMouseDown(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "dblclick", function (n) {
        return o.onDoubleClick(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "contextmenu", function (n) {
        return o.onContextMenu(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "touchstart", function (n) {
        StolenTech.JavaScript.Util.SimulateMouse(n);
        var t = StolenTech.JavaScript.Util.GetEventTarget(n),
            i = t.nodeName == "SPAN" && t.firstChild.nodeType == 3 && t.firstChild.nodeValue == String.fromCharCode(160);
        t.nodeName == "TD" || t.isContainerSpan || i || n.stopPropagation()
    }), StolenTech.JavaScript.Util.AddEvent(t, "touchstart", StolenTech.JavaScript.Util.SimulateContextMenu), StolenTech.JavaScript.Util.AddEvent(t, "touchmove", function (n) {
        var t = document.elementFromPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY), i = t,
            r = i.nodeName == "SPAN" && i.firstChild.nodeType == 3 && i.firstChild.nodeValue == String.fromCharCode(160);
        if (i.nodeName != "TD" && !i.isContainerSpan && !r) {
            while (t.nodeName.toUpperCase() != "TR" && t != document.body) t = t.parentNode;
            t.nodeName.toUpperCase() == "TR" && StolenTech.JavaScript.Util.TriggerMouseEvent(n.changedTouches[0], "mouseover", t)
        }
    }), t.className = this.grid.styleGridRow, this.grid.imgSelection && (t.style.backgroundImage = "url('" + this.grid.imgSelection.src + "')"), i = 0; i < this.cells.length; i++) this.grid.columnsArray[i].hidden || (e = document.createElement("td"), e.noWrap = !0, e.className = StolenTech.JavaScript.UI.GridViewCellCssClass, t.appendChild(e), this.grid.columnsArray[i].alignRight && (e.style.textAlign = "right"), e.style.minWidth = "80px", u = document.createElement("span"), e.appendChild(u), s = this.grid.columnsArray[i].formatFunction, f = s ? s(this.cells[i], this.grid.columnsArray[i].format, this) : this.cells[i], f.length == 0 && (f = " "), this.grid.columnsArray[i].size > 0 && f.length > this.grid.columnsArray[i].size && (f = f.substr(0, this.grid.columnsArray[i].size) + "..."), h = document.createTextNode(f != null ? f : String.fromCharCode(160)), i == this.grid.visibleFirstColumn.index ? (this.grid.useIconCls ? (r = document.createElement("span"), r.className = this.icon, r.style.display = "inline-block") : (r = new Image, r.src = this.icon), r.style.width = this.grid.iconWidth + "px", r.style.height = this.grid.iconHeight + "px", r.style.verticalAlign = "top", this.grid.isIE7 || (r.style.position = "relative"), r.style.marginRight = "4px", u.appendChild(r), c = document.createElement("span"), u.appendChild(c), c.appendChild(h), u.style.display = "block", u.style.height = this.grid.gridRowHeight + "px", u.style.lineHeight = this.grid.gridRowHeight - 2 + "px", r.style.top = Math.round((this.grid.gridRowHeight - this.grid.iconHeight) / 2) - 1 + "px", u.isContainerSpan = !0) : u.appendChild(h));
    this.rowElement = t;
    n || this.grid.Resize()
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onMouseDown = function (n) {
    var f, e, c, r, o, s, h, u, t, i;
    if (n || (n = window.event), f = n.which ? n.which == 1 : n.button == 1, e = n.which ? n.which == 3 : n.button == 2, e && (f = !1), c = n.metaKey || n.ctrlKey, n.isSimulatedMouseEvent && (t = StolenTech.JavaScript.Util.GetEventTarget(n), i = t.nodeName == "SPAN" && t.firstChild.nodeType == 3 && t.firstChild.nodeValue == String.fromCharCode(160), t.nodeName == "TD" || t.isContainerSpan || i)) return !1;
    if (this.grid.mouseDownRow = this, StolenTech.JavaScript.Util.AddEvent(document, "mouseup", this.mouseUpEvent), StolenTech.JavaScript.Util.AddEvent(document, "touchend", StolenTech.JavaScript.Util.SimulateMouse), n.isSimulatedMouseEvent) return !0;
    if (f) if (n.shiftKey) {
        for (r = this.grid.lastSelectedRow, this.grid.unselectAllRowsInternal(), o = r ? r.index : 0, s = this.index, h = o < s ? 1 : -1, u = o; u != s + h; u += h) this.grid.rowsArray[u].Select();
        this.grid.lastSelectedRow = r
    } else c ? this.selected ? this.Unselect() : this.Select() : (this.grid.unselectAllRowsInternal(), this.Select()); else e && (t = StolenTech.JavaScript.Util.GetEventTarget(n), i = t.nodeName == "SPAN" && t.firstChild.nodeType == 3 && t.firstChild.nodeValue == String.fromCharCode(160), this.selected || t.nodeName == "TD" || t.isContainerSpan || i || (this.grid.unselectAllRowsInternal(), this.Select()));
    return !0
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onMouseUp = function (n) {
    if (n || (n = window.event), n.isSimulatedMouseEvent && (this.selected ? this.grid.rowContextMenuActive ? this.grid.rowContextMenuActive = !1 : this.grid.mouseOverActive ? this.grid.mouseOverActive = !1 : this.Unselect() : this.grid.mainContextMenuActive ? this.grid.mainContextMenuActive = !1 : this.Select()), this.grid.mouseDownRow = null, StolenTech.JavaScript.Util.RemoveEvent(document, "mouseup", this.mouseUpEvent), StolenTech.JavaScript.Util.RemoveEvent(document, "touchend", StolenTech.JavaScript.Util.SimulateMouse), this.grid.onSelectionComplete) this.grid.onSelectionComplete(n);
    return !0
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onMouseOver = function (n) {
    var t;
    if (n || (n = window.event), this.grid.mouseDownRow) {
        if (this.grid.mouseDownRow == this && !n.isSimulatedMouseEvent || !this.grid.lastSelectedRow) return;
        if (n.isSimulatedMouseEvent && (this.grid.mainContextMenuActive || this.grid.rowContextMenuActive)) return;
        this.grid.mouseOverActive = !0;
        var i = this.grid.lastSelectedRow.index, r = this.index, u = i <= r ? 1 : -1;
        for (i += u, r += u, t = i; t != r; t += u) this.grid.rowsArray[t].Select()
    } else {
        if (n.isSimulatedMouseEvent) return;
        if (this.selected) this.onStyleChange(this.grid.styleGridRowSelectedHover); else this.onStyleChange(this.grid.styleGridRowHover)
    }
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onMouseOut = function () {
    var n;
    if (this.grid.mouseDownRow) {
        if (this.grid.lastSelectedRow == this || !this.grid.lastSelectedRow) return;
        var t = this.grid.lastSelectedRow.index, i = this.index, r = t < i ? 1 : -1;
        for (n = t; n != i; n += r) this.grid.rowsArray[n].Unselect()
    } else if (this.selected) this.onStyleChange(this.grid.lastSelectedRow == this ? this.grid.styleGridRowFocused : this.grid.styleGridRowSelected); else this.onStyleChange(this.grid.styleGridRow)
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onContextMenu = function (n) {
    n || (n = window.event);
    var t = StolenTech.JavaScript.Util.GetEventTarget(n),
        i = t.nodeName == "SPAN" && t.firstChild.nodeType == 3 && t.firstChild.nodeValue == String.fromCharCode(160);
    if (!this.selected && (t.nodeName == "TD" || t.isContainerSpan || i)) {
        this.onMouseOut(n);
        return this.grid.mainContextMenuActive = !0, !1
    }
    if (this.grid.onRowContextMenu) {
        n.isSimulatedMouseEvent && !this.selected && (this.grid.unselectAllRowsInternal(), this.Select());
        this.grid.onRowContextMenu(this, n);
        return this.grid.rowContextMenuActive = !0, StolenTech.JavaScript.Util.CancelEvent(n)
    }
    return !0
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onDoubleClick = function (n) {
    if (n || (n = window.event), this.grid.onRowDoubleClick) this.grid.onRowDoubleClick(this, n)
};
StolenTech.JavaScript.UI.GridViewRow.prototype.Select = function () {
    if (!this.selected && (this.grid.multipleSelection || !(this.grid.selectedCount > 0))) {
        if (this.selected = !0, this.grid.selectedRowsArray.push(this), this.grid.lastFocusedRow = this, this.grid.selectedCount++, this.grid.lastSelectedRow) this.grid.lastSelectedRow.onStyleChange(this.selected ? this.grid.styleGridRowSelected : this.grid.styleGridRow);
        this.grid.lastSelectedRow = this;
        this.onStyleChange(this.grid.styleGridRowFocused)
    }
};
StolenTech.JavaScript.UI.GridViewRow.prototype.Unselect = function () {
    if (this.selected) {
        this.selected = !1;
        for (var n = 0; n < this.grid.selectedRowsArray.length; n++) if (this.grid.selectedRowsArray[n] == this) {
            this.grid.selectedRowsArray.splice(n, 1);
            break
        }
        this.grid.lastSelectedRow = this;
        this.grid.selectedCount--;
        this.grid.lastSelectedRow == this && (this.grid.lastSelectedRow = null);
        this.onStyleChange(this.grid.styleGridRow)
    }
};
StolenTech.JavaScript.UI.GridViewRow.prototype.onStyleChange = function (n) {
    this.rowElement.className = n
};
var StolenTech = StolenTech || {};
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.UI = StolenTech.JavaScript.UI || {};
StolenTech.JavaScript.UI.ContextMenuCount = 0;
StolenTech.JavaScript.UI.ContextMenuPopupImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAMAAADNcxasAAAABlBMVEX19fUAAADRVAjdAAAAAXRSTlMAQObYZgAAABtJREFUCNdjYGQAAUZGCMkIIRkhJCOCjVADIgAC7QAadtCx+AAAAABJRU5ErkJggg==";
StolenTech.JavaScript.UI.ContextMenuPopupHoverImage = StolenTech.JavaScript.UI.ContextMenuPopupImage;
StolenTech.JavaScript.UI.ContextMenuSelectionImage = "";
StolenTech.JavaScript.UI.ContextMenuIconsPath = {};
StolenTech.JavaScript.UI.ContextMenuCssClass = "gt-contextMenu";
StolenTech.JavaScript.UI.ContextMenuSeparatorCssClass = "gt-contextMenuSeparator";
StolenTech.JavaScript.UI.ContextMenuVerticalSeparatorCssClass = "gt-contextMenuVerticalSeparator";
StolenTech.JavaScript.UI.ContextMenuItemCssClass = "gt-contextMenuItem";
StolenTech.JavaScript.UI.ContextMenuItemHoverCssClass = "gt-contextMenuItem gt-contextMenuItem-hover";
StolenTech.JavaScript.UI.ContextMenuItemDisabledCssClass = "gt-contextMenuItem gt-contextMenuItem-disabled";
StolenTech.JavaScript.UI.ContextMenuItemIconCssClass = "gt-contextMenuItemIcon";
StolenTech.JavaScript.UI.ContextMenuItemRoundBorders = !1;
StolenTech.JavaScript.UI.ContextMenu = function () {
    this.index = StolenTech.JavaScript.UI.ContextMenuCount++;
    this.items = [];
    this.menuItems = {};
    this.divElement = null;
    this.iconWidth = 16;
    this.iconHeight = 16;
    this.hidden = !0;
    this.itemClicked = !1;
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.lastSubmenu = null;
    this.showLeft = !1;
    this.defaultMenuItem = null;
    this.parentMenuItem = null;
    this.depth = 0;
    this.target = null;
    this.onMenuItemClick = null;
    this.imgPopup = new Image;
    this.imgPopup.src = StolenTech.JavaScript.UI.ContextMenuPopupImage;
    this.imgPopupHover = new Image;
    this.imgPopupHover.src = StolenTech.JavaScript.UI.ContextMenuPopupHoverImage;
    StolenTech.JavaScript.UI.ContextMenuSelectionImage && (this.imgSelection = new Image, this.imgSelection.src = StolenTech.JavaScript.UI.ContextMenuSelectionImage)
};
StolenTech.JavaScript.UI.ContextMenu.Parse = function (n, t, i, r) {
    var o = {}, u = t.ContextMenus, s = function (t, i, r) {
        var f = new StolenTech.JavaScript.UI.ContextMenu, c, o, u, h, e, l;
        for (f.onMenuItemClick = i, t.Item.length || (c = t.Item, t.Item = [], t.Item[0] = c), o = 0; o < t.Item.length; o++) u = t.Item[o], h = u.action, h == "[Separator]" ? f.AddSeparator() : (e = f.AddMenuItem(h, u.text ? r.getEntry(u.text) : h, u.description, u.icon), e.ParentPermissionList = u.parentPermissionList, e.PermissionList = u.permissionList, u.isDefault == "yes" && f.SetDefault(e), u.ContextMenu && (l = s(u.ContextMenu, i, r), e.SetSubmenu(l)));
        return f.Render(n ? n : document.body), f.container = n, f
    }, h, f, e, c;
    for (u.ContextMenu.length || (h = u.ContextMenu, u.ContextMenu = [], u.ContextMenu[0] = h), f = 0; f < u.ContextMenu.length; f++) e = u.ContextMenu[f], c = s(e, i, r), o[e.Name] = c;
    return o
};
StolenTech.JavaScript.UI.ContextMenu.prototype.SetIconSize = function (n, t) {
    this.iconWidth = n;
    this.iconHeight = t
};
StolenTech.JavaScript.UI.ContextMenu.prototype.AddMenuItem = function (n, t, i, r) {
    var u = new StolenTech.JavaScript.UI.ContextMenuItem(n, t, i, r);
    return u.menu = this, u.index = this.items.length, this.items[u.index] = u, this.menuItems[n] = u, u
};
StolenTech.JavaScript.UI.ContextMenu.prototype.AddSeparator = function () {
    var n = new StolenTech.JavaScript.UI.ContextMenuSeparator;
    n.menu = this;
    n.index = this.items.length;
    this.items[n.index] = n
};
StolenTech.JavaScript.UI.ContextMenu.prototype.InsertMenuItem = function (n, t, i, r, u) {
    var f = new StolenTech.JavaScript.UI.ContextMenuItem(t, i, r, u), e;
    for (f.menu = this, f.index = n, this.items.splice(n, 0, f), this.menuItems[t] = f, e = 0; e < this.items.length; e++) this.items[e].index = e;
    return f.Render(this.divElement, this.items[n + 1].divElement), f
};
StolenTech.JavaScript.UI.ContextMenu.prototype.SetDefault = function (n) {
    this.defaultMenuItem && this.defaultMenuItem.spanElement && (this.defaultMenuItem.spanElement.style.fontWeight = "");
    this.defaultMenuItem = n;
    n.spanElement && (n.spanElement.style.fontWeight = "bold")
};
StolenTech.JavaScript.UI.ContextMenu.prototype.Render = function (n) {
    var i = this, t = document.createElement("div"), r;
    for (t.className = StolenTech.JavaScript.UI.ContextMenuCssClass, t.style.position = "absolute", t.style.display = "none", t.style.visibility = "hidden", t.style.cursor = "default", StolenTech.JavaScript.Util.AddEvent(t, "mousedown", function (n) {
        return i.onCancelEvent(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "mouseup", function (n) {
        return i.onCancelEvent(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "contextmenu", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(t, "selectstart", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(t, "dragstart", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(t, "touchstart", function (n) {
        return i.onCancelEvent(n)
    }), StolenTech.JavaScript.Util.AddEvent(t, "touchend", function (n) {
        return i.onCancelEvent(n)
    }), this.divElement = t, n.appendChild(t), this.verticalSeparator = document.createElement("div"), this.divElement.appendChild(this.verticalSeparator), this.verticalSeparator.className = StolenTech.JavaScript.UI.ContextMenuVerticalSeparatorCssClass, this.verticalSeparator.style.position = "absolute", this.verticalSeparator.style.width = "1px", this.verticalSeparator.style.left = "29px", r = 0; r < this.items.length; r++) this.items[r].Render(t)
};
StolenTech.JavaScript.UI.ContextMenu.prototype.CalculateDimensions = function () {
    for (var n, r, t = 0, i = 0; i < this.items.length; i++) n = this.items[i], n.hidden || (n.isSeparator ? (n.divElement.clientHeight > 1 && (n.divElement.style.height = "1px"), t += 8) : (n.topDistance = t, n.calculatedHeight = n.divElement.offsetHeight, t += n.calculatedHeight, n.submenu && (n.imgPopup.style.top = (n.divElement.clientHeight == 0 ? (n.divElement.offsetHeight - 2 - n.imgPopup.offsetHeight) / 2 : (n.divElement.clientHeight - n.imgPopup.offsetHeight) / 2) + "px")));
    this.calculatedWidth = this.divElement.offsetWidth;
    this.calculatedHeight = this.divElement.offsetHeight;
    this.verticalSeparator.style.height = this.divElement.clientHeight - 4 + "px";
    r = StolenTech.JavaScript.Util.FindPosition(this.divElement.offsetParent);
    this.parentLeft = r[0];
    this.parentTop = r[1]
};
StolenTech.JavaScript.UI.ContextMenu.prototype.onCancelEvent = function (n) {
    return this.itemClicked ? (this.itemClicked = !1, !1) : StolenTech.JavaScript.Util.CancelEvent(n)
};
StolenTech.JavaScript.UI.ContextMenu.prototype.Popup = function (n, t) {
    var u, i, r, f, e;
    StolenTech.JavaScript.Util.DeSelectAllRanges();
    u = this;
    StolenTech.JavaScript.Util.EnsureDisplay(this.divElement, function () {
        u.CalculateDimensions()
    });
    i = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft();
    r = n.pageY ? n.pageY : n.clientY + StolenTech.JavaScript.Util.Viewport.GetScrollTop();
    i -= this.parentLeft;
    r -= this.parentTop;
    f = this.container.offsetWidth - i;
    e = this.container.offsetHeight - r;
    f < this.calculatedWidth && (i -= this.calculatedWidth);
    e < this.calculatedHeight && (r -= this.calculatedHeight);
    this.target = t;
    this.Show(i, r);
    StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu = function (n) {
        u.HidePopup(n)
    };
    StolenTech.JavaScript.Util.AddEvent(document, "mousedown", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    StolenTech.JavaScript.Util.AddEvent(document, "touchstart", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu)
};
StolenTech.JavaScript.UI.ContextMenu.prototype.PopupXY = function (n, t, i) {
    StolenTech.JavaScript.Util.DeSelectAllRanges();
    var r = this;
    StolenTech.JavaScript.Util.EnsureDisplay(this.divElement, function () {
        r.CalculateDimensions()
    });
    i && (n -= this.calculatedWidth);
    this.Show(n, t);
    StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu = function (n) {
        r.HidePopup(n)
    };
    StolenTech.JavaScript.Util.AddEvent(document, "mousedown", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    StolenTech.JavaScript.Util.AddEvent(document, "touchstart", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu)
};
StolenTech.JavaScript.UI.ContextMenu.prototype.PopupSubmenu = function () {
    var i = this;
    StolenTech.JavaScript.Util.EnsureDisplay(this.divElement, function () {
        i.CalculateDimensions()
    });
    var n = this.parentMenuItem.menu.right - 6, t = this.parentMenuItem.menu.top + this.parentMenuItem.topDistance,
        r = this.container.clientWidth - n, u = this.container.clientHeight - t;
    this.parentMenuItem.menu.showLeft || r < this.calculatedWidth ? (n = this.parentMenuItem.menu.left - this.calculatedWidth + 4, this.showLeft = !0) : this.showLeft = !1;
    u < this.calculatedHeight && (t = this.parentMenuItem.menu.bottom - this.calculatedHeight);
    this.depth = this.parentMenuItem.menu.depth + 1;
    this.divElement.style.zIndex = this.depth;
    this.target = this.parentMenuItem.menu.target;
    this.Show(n, t);
    this.parentMenuItem.menu.lastSubmenu = this
};
StolenTech.JavaScript.UI.ContextMenu.prototype.Show = function (n, t) {
    this.left = n;
    this.right = n + this.calculatedWidth;
    this.top = t;
    this.bottom = t + this.calculatedHeight;
    this.divElement.style.top = this.top + "px";
    this.divElement.style.left = this.left + "px";
    this.divElement.style.display = "block";
    this.divElement.style.visibility = "visible";
    this.hidden = !1
};
StolenTech.JavaScript.UI.ContextMenu.prototype.Hide = function () {
    this.lastSubmenu && !this.lastSubmenu.hidden && this.lastSubmenu.Hide();
    this.divElement.style.display = "none";
    this.divElement.style.visibility = "hidden";
    this.hidden = !0;
    this.parentMenuItem && !this.parentMenuItem.disabled && this.parentMenuItem.onUnSelect()
};
StolenTech.JavaScript.UI.ContextMenu.prototype.HidePopup = function () {
    this.Hide();
    StolenTech.JavaScript.Util.RemoveEvent(document, "mousedown", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    StolenTech.JavaScript.Util.RemoveEvent(document, "mouseup", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    StolenTech.JavaScript.Util.RemoveEvent(document, "touchstart", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    StolenTech.JavaScript.Util.RemoveEvent(document, "touchend", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    this.target && this.target.onContextMenuClose && this.target.onContextMenuClose()
};
StolenTech.JavaScript.UI.ContextMenuItem = function (n, t, i, r) {
    if (this.action = n, this.text = t, this.description = i, r != null) if (r.indexOf("data:") == 0) this.icon = r; else {
        var u = r.split(":");
        this.icon = u.length > 1 ? StolenTech.JavaScript.UI.ContextMenuIconsPath[u[0]] + u[1] : StolenTech.JavaScript.UI.ContextMenuIconsPath["default"] + r
    } else this.icon = r;
    this.index = -1;
    this.disabled = !1;
    this.hidden = !1;
    this.topDistance = 0;
    this.menu = null;
    this.submenu = null;
    this.divElement = null;
    this.imgIcon = null;
    this.imgSpan = null;
    this.imgPopup = null;
    this.spanElement = null;
    this.isMenuItem = !0
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.SetSubmenu = function (n) {
    this.submenu = n;
    n.parentMenuItem = this
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.Render = function (n, t) {
    var f = this, i = document.createElement("div"), o, u, e, s, r;
    t ? n.insertBefore(i, t) : n.appendChild(i);
    this.description != null && (i.title = this.description);
    i.className = StolenTech.JavaScript.UI.ContextMenuItemCssClass;
    i.style.whiteSpace = "nowrap";
    i.style.paddingLeft = "2px";
    i.style.paddingRight = "40px";
    i.style.position = "relative";
    StolenTech.JavaScript.UI.ContextMenuItemRoundBorders && StolenTech.JavaScript.Util.SetBorderRadius(i, 3, 3, 3, 3);
    this.menu.imgSelection && (i.style.backgroundImage = "url('" + this.menu.imgSelection.src + "')");
    StolenTech.JavaScript.Util.AddEvent(i, "mouseover", function (n) {
        return f.onMouseOver(n)
    });
    StolenTech.JavaScript.Util.AddEvent(i, "mouseout", function (n) {
        return f.onMouseOut(n)
    });
    StolenTech.JavaScript.Util.AddEvent(i, "mousedown", function (n) {
        return f.onMouseDown(n)
    });
    StolenTech.JavaScript.Util.AddEvent(i, "mouseup", function (n) {
        return f.onMouseUp(n)
    });
    StolenTech.JavaScript.Util.AddEvent(i, "touchstart", function (n) {
        return f.onTouchStart(n)
    });
    StolenTech.JavaScript.Util.AddEvent(i, "touchend", function (n) {
        return f.onTouchEnd(n)
    });
    this.divElement = i;
    o = 9;
    this.icon != null ? (u = new Image, u.src = this.icon, u.style.width = this.menu.iconWidth + "px", u.style.height = this.menu.iconHeight + "px", u.style.verticalAlign = "middle", u.style.marginRight = "4px", this.imgIcon = u, this.imgSpan = document.createElement("span"), this.imgSpan.className = StolenTech.JavaScript.UI.ContextMenuItemIconCssClass, this.imgSpan.style.display = "inline-block", this.imgSpan.appendChild(this.imgIcon), i.appendChild(this.imgSpan)) : o += this.menu.iconWidth + 4;
    e = document.createElement("span");
    e.style.marginLeft = o + "px";
    this.menu.defaultMenuItem == this && (e.style.fontWeight = "bold");
    this.spanElement = e;
    s = document.createTextNode(this.text);
    e.appendChild(s);
    i.appendChild(e);
    this.submenu && (r = new Image, r.src = this.menu.imgPopup.src, r.style.position = "absolute", r.style.width = "5px", r.style.height = "9px", r.style.right = "6px", this.imgPopup = r, i.appendChild(r));
    this.disabled && this.Disable()
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.HideIcon = function () {
    this.imgIcon && (this.imgIcon.style.visibility = "hidden")
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.ShowIcon = function () {
    this.imgIcon && (this.imgIcon.style.visibility = "visible")
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onMouseOver = function () {
    this.disabled || (this.onSelect(), this.menu.lastSubmenu && this.menu.lastSubmenu != this.submenu && this.menu.lastSubmenu.Hide(), this.submenu && this.submenu.hidden && this.submenu.PopupSubmenu())
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onMouseOut = function (n) {
    var t, i, r;
    this.disabled || (this.submenu && !this.submenu.hidden ? (n || (n = window.event), t = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft(), i = n.pageY ? n.pageY : n.clientY + StolenTech.JavaScript.Util.Viewport.GetScrollTop(), t -= this.menu.parentLeft, i -= this.menu.parentTop, r = t > this.submenu.left - 10 && t < this.submenu.right + 10 && i > this.submenu.top - 10 && i < this.submenu.bottom + 10, !r && n.changedTouches && n.changedTouches.length == 0 && this.submenu.Hide()) : this.onUnSelect())
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onMouseDown = function () {
    StolenTech.JavaScript.Util.AddEvent(document, "mouseup", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu);
    StolenTech.JavaScript.Util.AddEvent(document, "touchend", StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu)
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onMouseUp = function (n) {
    if (!this.disabled && !this.submenu) {
        n || (n = window.event);
        var t = n.which ? n.which == 1 : n.button == 1;
        if ((t || !n.changedTouches || n.changedTouches.length != 0) && (this.menu.itemClicked = !0, StolenTech.JavaScript.UI.ContextMenu.hideCurrentMenu(), this.menu.onMenuItemClick)) this.menu.onMenuItemClick(this, n)
    }
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onTouchStart = function (n) {
    this.onMouseOver(n);
    n.preventDefault()
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onTouchEnd = function (n) {
    this.onMouseOut(n);
    StolenTech.JavaScript.Util.SimulateMouse(n)
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onSelect = function () {
    this.divElement.className = StolenTech.JavaScript.UI.ContextMenuItemHoverCssClass;
    this.imgPopup && (this.imgPopup.src = this.menu.imgPopupHover.src)
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.onUnSelect = function () {
    this.divElement.className = StolenTech.JavaScript.UI.ContextMenuItemCssClass;
    this.imgPopup && (this.imgPopup.src = this.menu.imgPopup.src)
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.Enable = function () {
    this.divElement.disabled = !1;
    this.divElement.className = StolenTech.JavaScript.UI.ContextMenuItemCssClass;
    this.imgSpan && StolenTech.JavaScript.Util.SetOpacity(this.imgSpan, 10);
    this.imgPopup && StolenTech.JavaScript.Util.SetOpacity(this.imgPopup, 10);
    this.disabled = !1
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.Disable = function () {
    this.divElement.disabled = !0;
    this.divElement.className = StolenTech.JavaScript.UI.ContextMenuItemDisabledCssClass;
    this.imgSpan && StolenTech.JavaScript.Util.SetOpacity(this.imgSpan, 4);
    this.imgPopup && StolenTech.JavaScript.Util.SetOpacity(this.imgPopup, 4);
    this.disabled = !0
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.Show = function () {
    this.divElement.style.display = "block";
    this.hidden = !1
};
StolenTech.JavaScript.UI.ContextMenuItem.prototype.Hide = function () {
    this.divElement.style.display = "none";
    this.hidden = !0
};
StolenTech.JavaScript.UI.ContextMenuSeparator = function () {
    this.menu = null;
    this.index = -1;
    this.divElement = null;
    this.hidden = !1;
    this.isSeparator = !0
};
StolenTech.JavaScript.UI.ContextMenuSeparator.prototype.Render = function (n) {
    var t = document.createElement("div"), i;
    t.className = StolenTech.JavaScript.UI.ContextMenuSeparatorCssClass;
    t.style.marginTop = "2px";
    t.style.marginLeft = "30px";
    t.style.marginBottom = "2px";
    t.style.marginRight = "0px";
    t.style.lineHeight = "1px";
    t.style.fontSize = "1px";
    this.divElement = t;
    i = document.createTextNode(String.fromCharCode(160));
    t.appendChild(i);
    n.appendChild(t)
};
StolenTech.JavaScript.UI.ContextMenuSeparator.prototype.Show = function () {
    this.divElement.style.display = "block";
    this.hidden = !1
};
StolenTech.JavaScript.UI.ContextMenuSeparator.prototype.Hide = function () {
    this.divElement.style.display = "none";
    this.hidden = !0
};
var StolenTech = StolenTech || {};
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.UI = StolenTech.JavaScript.UI || {};
StolenTech.JavaScript.UI.ModalDialogDialogCssClass = "gt-modalDialog gt-nonSelectableText";
StolenTech.JavaScript.UI.ModalDialogTitleBarCssClass = "gt-modalDialogTitleBar";
StolenTech.JavaScript.UI.ModalDialogParentMaskCssClass = "gt-modalDialogParentMask";
StolenTech.JavaScript.UI.ModalDialogContentMaskCssClass = "gt-modalDialogContentMask";
StolenTech.JavaScript.UI.ModalDialogCloseImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVR42mNgoBAwgojLJ04zdOeW/X96/yFRmqQV5RlKJ3cx6lqYQgyINrL/nxjnx+BkZUCUAfuOXWCYv2gTw9JzBxlZQAIvHj1mcDLXYWB4eJMoA0Bq21umgtkscNG/vxkYfv9kmH3xBcOu++/BQm6KgmAamZ+qLwFRCwUIA/4ABX/9ACtes3ImWCgkPB1MI/NTNQUgaqGACc76/YuB4ed3BjcZLhSNyJpBciA1YLUYBvz8wfD/6xeGFBkmBjdxVrghcM1AMZAcSA1ILYYXXly7yPDl2E4w+xOLMtBoCYa7d+/CFX56/pjh7mMIn+cPA6YLmFhYGJhY2Rk2sqkxnABq7mwrgysCsUFiIDmQGpBaTAPYOBiYObkZTjCIwjWXV3WBMdwQoBxIDUgthheYODgYWHh4GawZvsA1WXN8gRsE44PUgNRiGMDCwcXAysPPEMXznyGK4TNKwkHl84PVohggISfLcOz2awZbM0eiUuLRq4/Aehje3ENkpraMwv+vnjwjygAxGSmGiqk9jPrWFkSpxwsAVd+RBzp7tZ4AAAAASUVORK5CYII=";
StolenTech.JavaScript.UI.ModalDialogPromptImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAJ4UlEQVR4nLVXe3BU9RX+7mt3k93NE3mEkJCUEJUgtiWgrHUoDi2QjKZOrc86HZHawc7YgVHrFGwV2mmxYjsV1PLQkU7QquNIEasj5S2QRIGwgiFIQhISyZMku5t93Xv7nbtJBJ1S+kc3c+buZu893znf+c75nVVwha+Hly4t4SVAm0kroxXRxg1/fZ7WRAvS6mgH1q1f33glfrUrAJ773blzn0xLS/vz9OuuqwrcdNMN8+fPn1xRUZF5W1WVvmDhQn1OIJB53YwZkwsKCsrT09MXhUKhxXNuvLHk+uuv76+trW2+nH/1MsDFK1aseJFOty1ctOgny5Yv9wcCAZcNTfn0VCfe+uBzPP2XA1i5dh82vPEZDh7tQigCJTAn4JJ75Rl5VnyIr/8pAD5wy/gJE3bcFAg8+OCSJX6v16scP9mGPccN/L2uBJv2FKJ6/1jsb5qMgy2F+MeRXLzwQSbWbMvGExsH8PJbQRguryLPig/xJT6vKADeeOukSZNer6qqKp1aWqqdaDiLk12FeOvjArxT40FjaxTRWByGloCCGB3EYKhJfjZhmSbaum1U73Xj8Q0xvLS1FiVTp2riS3yK76/i6V/NnDduvvuee3J7enpwtlPB3s+KUH8mht7+QZJvEdREMmkhSbAEzTaTTMOimCyoig1dNaG4LERNC6/+S8OR0yew7K7xEJ9bq6s3E+NOCnTn1xiQOpGqdRWVlQ54d2wiM87AgeOD6OuPMEsCJuIYHErATSUUTzQwp8yHwIwMlOanId0NhMIpdiyLQdgJ+NJsBM+qeHx9K9rOdUJ8C8bFmhgNIDsn57HymTOnsN44P+DD9hoN9Y0DzDDBzE3EEgmMyzXw2H352PJUKV5ZOQXPPjKZVoyNK6/Blt9Mx/L7ipDtUxAZisK2kjCTDNaw0d4L/OqFBng8aRAMwbokAGk1v893T/msWdrR46ex71QuTp4Z5Jekl2aS5mgshnu/PwY/uNmPMRmX1tFgM48fY+C+RRPwp2XTMD5bQTQah2klWKpUEE0s55oNByAYgiWYoxpg1vfPmj3bd+LECbRFStHQHHbo1jWb4BaNtSatUob/9DIthdowMa0kCz+9vRArnj9OLTA/26Il4fUoeL8ugcpD9RAslvl+PrZblQmnadoPy8rKlFPN/Whod6OrL0yxUWhJyZ41ZT0tsqDYwkgC+2oa8ceNH+GXnAF/faMegyF2g6JAVTUGbuPmb01Ajt9ytCAMii/QXB4dL7/TAMESTMEWBgJsN3dXVxc6wnlo/SLsZGtR0VJHcsCrKDyJvXXn8P6eT7Dz4wjilovfAbFoFwM28cTiMgKCYCr8PgNZPgsXIqnOEHCFd7t1haK00dzSgdKrr3bX1tQEJICZRUVFRn3wFE51XosLg0NOlgJq25KF5QSi0sl7B/vYego86Rlw26ZD76Ct4WRTP7p7+lkyHYZhIBY3cb5rEP0DKnQGoCAVhMqKDMVsbN95DPNmFxkMYKYEUJaXl6d8EjyH890JKpd0qrZDn83am8NB8AOdm9CZhU1xxQkSicbQNxBFXqYHnR3tMDx+jBubjaMn29HeFYGqp8FW7WGViJ5sR7AHjnyBe6tmK4KtsA5nn161quAP63fgUNt0BhAXSaWEZ1ujTEgtZdJFYwm2WRzhoRivScz7ZjoeqsykkNOQnZ2L/PyxeOR3/8SOj/rgS3eNgguaMKGoCrzaAPZUL8aTK1e2SBuOy8jIQE9/qt2SDCCRSL0XsywRYAzhSBQ9fSF094Youogjytu/48XihT7nvjifMcjni9WH8WFNNzL8aQ5bujZsfK9qGtlVyYoLginYo4PIIvUJDg4HcNhgxRFn/wuoWIhByP/jHEoVN/jwwIIsaOKcdXe7DTy3pQ4vvPk5Muk8nS3ocenwuMX4veHmBHXBpesc11+eANqs8vIlcp7vZ3+2XshNKZ/GtBAheO9AmKJKOBqAnRJkpk/HsrsLHIo13WB2Bta9FsSeYzFkZVGgBsWnqWREc4QppjnvNQasw6UO4Y4FU7Fr1652CaBKlonm5jOob/Oz11M1H4rHnDNAZoGA284MkPPAxDWT0/Gj+QUOeFaGF+/sOo33akK4KjeLIlO+BFUNJ1uN80FMca46Mj0hdkEeDh86dFRKEGxvb7cL8rLh1YeQJMXRWBR9F8JObWWKCe1OAHZqoPjTVZ5+JvsaTp83t0fh92cSXIWLVBuGi9mTbrkaKYZ0zeAkNZzhO6M0Ex0dHdIeQSlGXVNTU6K8vNyVu/sg+iM5uOBknnDUm5pmHCQWFazbSOdIPcth9eyWY8yG7nQVrZ0mfB6vQ7miaM5UTG17iriAnbpQfPQUi6Bi3jQ0nTkuAHUSwIFTDQ2xyspK1zUTBlH3ucfpBAGVOWDJGGXmZJamUkgKBsJJ7PvU4snnJjMqQTPgTTMIrA8Dqylwx758SRBjvAOYVjoJH773ZkywnTsee/TRzbLDxWJx5Rdrg+jo99FZapbbw2NUZ/96PFJPFd/I9+LOW8Yinyegpbg5muOoDYZJ90gAmpNuagQNs8C/SCSJn99homii297x7ruvrHnmmQeUkeNYFkjZ4Z76/UvYsFPoVIcHkM1gwHpKW5EBtwvL7yrEtEIXh1GC/zPg8efgt5s6OMZdDkt8wmGG0fEgG56CrMM4XyM2PVOJTRs3Dra0tNzKzWj3KEeyvcoCWVRcrC1d8Tfsbcx2Dg/JXpTtdsANtp4bqx66GuMyVUTjSWpAQ052Fn69rhkdvT62GU8NU+XxrMEe4V28JFrx0qprObLPmvv279+4evXqn+HiIg2vZDtkgezmSvbE2l040uLj4FBoKsVnONlLe91280T8uCJ/tNcPHuvE81v72ZY5DrDFzIUBJ3tmrpideHKpD8UF2Xj77bcbvujoWMTsz1wSwHAQspS+LgvkmaZmrFj7Po6dy0IaM5cA0jxuUk6a2VLTp/hQMtGDngtJ1NTHkFSuIpjB1pXsCZ4U+jV4tCY8viQHM2cUgktpT2tr6yVL6aUyxehavlkWSBfBVj/3Gj5qMHhAZzmTT4IwdA+z5CRIqpztHpbHy47hMpLU2UE6r2QhEcWUvAY8tXwWdZHAu9u3C/gDBN92Md7XAhhhQrZXWSBlh9u99yC2bvsYLb1+WPoY6AR0qdJ2Ht7tYs0F2MUzgl2Q6EOuvxX33paHiu99Gzzzzdq6utOk/eGLM79sACOakO1VFkjZ4WSNam1rxwe76nCisQu9gwqXCzluZcoBORkqSiZnYMEt01FSnIdgMGjXHD4cGgyFqvt6e9eM1PyKA7gokLmytMoOJ6ubbE+ywOTm5o4cqRgYGID8lpCRLlNVBhv3iTfD4fCr0mqX8/9fA7gokP/Lz/N/A7fn0Fs02DPwAAAAAElFTkSuQmCC";
StolenTech.JavaScript.UI.ModalDialog = function (n) {
    this.parentNode = n || document.body;
    this.parentDocument = this.parentNode.ownerDocument;
    this.dialogCount = 0;
    this.OkButtonText = "OK";
    this.CancelButtonText = "Cancel";
    this.PromptTitleText = "Prompt";
    this.imgClose = new Image;
    this.imgClose.src = StolenTech.JavaScript.UI.ModalDialogCloseImage;
    this.imgPrompt = new Image;
    this.imgPrompt.src = StolenTech.JavaScript.UI.ModalDialogPromptImage
};
StolenTech.JavaScript.UI.ModalDialog.prototype.calculateParentDimensions = function () {
    var i = this.parentNode.appendChild(this.parentDocument.createElement("div")), n, t;
    this.parentNode == this.parentDocument.body ? (this.parentLeft = StolenTech.JavaScript.Util.Viewport.GetScrollLeft(), this.parentTop = StolenTech.JavaScript.Util.Viewport.GetScrollTop(), this.parentWidth = StolenTech.JavaScript.Util.Viewport.GetWidth(), this.parentHeight = StolenTech.JavaScript.Util.Viewport.GetHeight()) : this.parentNode == i.offsetParent ? (this.parentLeft = 0, this.parentTop = 0, this.parentWidth = this.parentNode.clientWidth, this.parentHeight = this.parentNode.clientHeight) : (n = StolenTech.JavaScript.Util.FindPosition(this.parentNode), this.parentLeft = n[0], this.parentTop = n[1], this.parentNode.offsetParent && (t = StolenTech.JavaScript.Util.FindPosition(this.parentNode.offsetParent), this.parentLeft -= t[0], this.parentTop -= t[1]), this.parentWidth = this.parentNode.clientWidth, this.parentHeight = this.parentNode.clientHeight);
    this.parentRight = this.parentLeft + this.parentWidth;
    this.parentBottom = this.parentTop + this.parentHeight;
    this.parentNode.removeChild(i)
};
StolenTech.JavaScript.UI.ModalDialog.prototype.createParentMask = function () {
    if (!this.elementParentMask) {
        this.oldParentOverflow = this.parentNode.style.overflow;
        this.parentNode.style.overflow = "hidden";
        this.calculateParentDimensions();
        this.elementParentMask = this.parentDocument.createElement("div");
        this.elementParentMask.className = StolenTech.JavaScript.UI.ModalDialogParentMaskCssClass;
        this.elementParentMask.style.position = "absolute";
        this.elementParentMask.style.top = this.parentTop + "px";
        this.elementParentMask.style.left = this.parentLeft + "px";
        this.elementParentMask.style.width = this.parentWidth + "px";
        this.elementParentMask.style.height = this.parentHeight + "px";
        this.elementParentMask.style.zIndex = "1000";
        this.parentNode.appendChild(this.elementParentMask);
        StolenTech.JavaScript.Util.AddEvent(this.elementParentMask, "contextmenu", StolenTech.JavaScript.Util.CancelEvent);
        StolenTech.JavaScript.Util.SetOpacity(this.elementParentMask, 4);
        var n = this;
        this.elementParentMask.windowResizeEvent = function () {
            "ontouchstart" in window || setTimeout(function () {
                n.resizeParentMask()
            }, 200)
        };
        StolenTech.JavaScript.Util.AddEvent(window, "resize", this.elementParentMask.windowResizeEvent)
    }
};
StolenTech.JavaScript.UI.ModalDialog.prototype.removeParentMask = function () {
    this.elementParentMask && (this.dialogCount > 0 || (this.parentNode.removeChild(this.elementParentMask), StolenTech.JavaScript.Util.RemoveEvent(window, "resize", this.elementParentMask.windowResizeEvent), this.parentNode.style.overflow = this.oldParentOverflow, this.elementParentMask = null))
};
StolenTech.JavaScript.UI.ModalDialog.prototype.resizeParentMask = function () {
    this.calculateParentDimensions();
    this.elementParentMask.style.top = this.parentTop + "px";
    this.elementParentMask.style.left = this.parentLeft + "px";
    this.elementParentMask.style.width = this.parentWidth + "px";
    this.elementParentMask.style.height = this.parentHeight + "px"
};
StolenTech.JavaScript.UI.ModalDialog.prototype.createDialog = function (n, t, i) {
    var c = this, r = this.parentDocument.createElement("div"), u, o, l, s, e, h, f;
    return r.className = StolenTech.JavaScript.UI.ModalDialogDialogCssClass, r.style.position = "absolute", r.style.zIndex = "1001", r.style.padding = "0px", r.style.width = n + "px", this.parentNode.appendChild(r), r.close = function () {
        c.Close(r)
    }, u = this.parentDocument.createElement("div"), u.className = StolenTech.JavaScript.UI.ModalDialogTitleBarCssClass, u.style.padding = "6px", r.appendChild(u), StolenTech.JavaScript.Util.AddEvent(u, "mousedown", function (n) {
        c.onMoveStart(n, r)
    }), StolenTech.JavaScript.Util.AddEvent(u, "contextmenu", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(u, "selectstart", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(u, "dragstart", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(u, "touchstart", StolenTech.JavaScript.Util.SimulateMouse), StolenTech.JavaScript.Util.AddEvent(u, "touchmove", StolenTech.JavaScript.Util.SimulateMouse), StolenTech.JavaScript.Util.AddEvent(u, "touchend", StolenTech.JavaScript.Util.SimulateMouse), o = this.parentDocument.createElement("div"), o.style.cssFloat = "left", o.style.styleFloat = "left", u.appendChild(o), l = this.parentDocument.createTextNode(i != null ? i : String.fromCharCode(160)), o.appendChild(l), s = this.parentDocument.createElement("div"), s.style.cssFloat = "right", s.style.styleFloat = "right", u.appendChild(s), e = this.parentDocument.createElement("img"), e.src = this.imgClose.src, e.style.width = "16px", e.style.height = "16px", s.appendChild(e), StolenTech.JavaScript.Util.AddEvent(e, "mousedown", StolenTech.JavaScript.Util.CancelEvent), StolenTech.JavaScript.Util.AddEvent(e, "click", r.close), StolenTech.JavaScript.Util.AddEvent(e, "touchstart", StolenTech.JavaScript.Util.SimulateClick), u.style.height = o.offsetHeight + "px", s.style.height = o.offsetHeight + "px", e.style.marginTop = (s.offsetHeight - e.offsetHeight) / 2 + "px", h = this.parentDocument.createElement("div"), h.style.width = n + "px", h.style.height = t + "px", r.appendChild(h), f = this.parentDocument.createElement("div"), f.className = StolenTech.JavaScript.UI.ModalDialogContentMaskCssClass, f.style.display = "none", f.style.position = "absolute", f.style.left = "0px", f.style.top = u.offsetHeight + "px", f.style.width = n + "px", f.style.height = t + "px", r.appendChild(f), StolenTech.JavaScript.Util.SetOpacity(f, 4), r.style.top = this.parentTop + (this.parentHeight - r.offsetHeight) / 2 + "px", r.style.left = this.parentLeft + (this.parentWidth - r.offsetWidth) / 2 + "px", this.dialogCount++, r.elementTitleBar = u, r.elementContent = h, r.elementContentMask = f, r
};
StolenTech.JavaScript.UI.ModalDialog.prototype.removeDialog = function (n) {
    this.parentNode.removeChild(n);
    this.dialogCount--
};
StolenTech.JavaScript.UI.ModalDialog.prototype.SetSize = function (n, t, i) {
    n.elementContent.style.width = t + "px";
    n.elementContent.style.height = i + "px";
    n.frameContent && (n.frameContent.style.width = t + "px", n.frameContent.style.height = i + "px");
    n.elementContentMask.style.left = "0px";
    n.elementContentMask.style.top = n.elementTitleBar.offsetHeight + "px";
    n.elementContentMask.style.width = t + "px";
    n.elementContentMask.style.height = i + "px"
};
StolenTech.JavaScript.UI.ModalDialog.prototype.center = function (n) {
    n.style.top = this.parentTop + (this.parentHeight - n.offsetHeight) / 2 + "px";
    n.style.left = this.parentLeft + (this.parentWidth - n.offsetWidth) / 2 + "px"
};
StolenTech.JavaScript.UI.ModalDialog.prototype.onMoveStart = function (n, t) {
    var r, u, f, i;
    (n || (n = window.event), r = n.which ? n.which == 1 : n.button == 1, r) && (u = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft(), f = n.pageY ? n.pageY : n.clientY + StolenTech.JavaScript.Util.Viewport.GetScrollTop(), t.relativeMouseX = u - t.offsetLeft, t.relativeMouseY = f - t.offsetTop, t.mouseMaxLeft = this.parentLeft, t.mouseMaxTop = this.parentTop, t.mouseMaxRight = this.parentRight - t.offsetWidth, t.mouseMaxBottom = this.parentBottom - t.offsetHeight, i = this, this.documentMouseUpEvent = function (n) {
        i.onMoveStop(n, t)
    }, this.documentMouseMoveEvent = function (n) {
        i.onMove(n, t)
    }, StolenTech.JavaScript.Util.AddEvent(t.ownerDocument, "mouseup", this.documentMouseUpEvent), StolenTech.JavaScript.Util.AddEvent(t.ownerDocument, "mousemove", this.documentMouseMoveEvent), t.elementContentMask.style.display = "block")
};
StolenTech.JavaScript.UI.ModalDialog.prototype.onMove = function (n, t) {
    var i;
    if (n || (n = window.event), i = n.which ? n.which == 1 : n.button == 1, !i) this.onMoveStop(n, t);
    var r = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft(),
        u = n.pageY ? n.pageY : n.clientY + StolenTech.JavaScript.Util.Viewport.GetScrollTop(), f = r - t.relativeMouseX,
        e = u - t.relativeMouseY;
    t.style.left = f + "px";
    t.style.top = e + "px"
};
StolenTech.JavaScript.UI.ModalDialog.prototype.onMoveStop = function (n, t) {
    StolenTech.JavaScript.Util.RemoveEvent(t.ownerDocument, "mouseup", this.documentMouseUpEvent);
    StolenTech.JavaScript.Util.RemoveEvent(t.ownerDocument, "mousemove", this.documentMouseMoveEvent);
    t.elementContentMask.style.display = "none"
};
StolenTech.JavaScript.UI.ModalDialog.prototype.ShowElement = function (n, t, i, r, u) {
    var o, e, f;
    return this.createParentMask(), o = n.style.visibility, n.style.visibility = "hidden", i && i(), e = this, StolenTech.JavaScript.Util.EnsureDisplay(n, function (n) {
        f = e.createDialog(n.offsetWidth, n.offsetHeight, t)
    }), f.elementContent.appendChild(n), f.onClose = r, f.onClosed = u, n.style.visibility = o, f.windowResizeEvent = function () {
        setTimeout(function () {
            e.center(f)
        }, 200)
    }, StolenTech.JavaScript.Util.AddEvent(window, "resize", f.windowResizeEvent), f
};
StolenTech.JavaScript.UI.ModalDialog.prototype.ShowUrl = function (n, t, i, r) {
    var f, u, e;
    return this.createParentMask(), f = this.createDialog(t, i, r), u = this.parentDocument.createElement("iframe"), u.style.backgroundColor = "transparent", u.allowTransparency = "true", u.scrolling = "no", u.frameBorder = "0", u.style.width = t + "px", u.style.height = i + "px", f.elementContent.appendChild(u), u.src = n, u.focus(), f.frameContent = u, e = this, f.windowResizeEvent = function () {
        setTimeout(function () {
            e.center(f)
        }, 200)
    }, StolenTech.JavaScript.Util.AddEvent(window, "resize", f.windowResizeEvent), f
};
StolenTech.JavaScript.UI.ModalDialog.prototype.Prompt = function (n, t, i, r, u, f, e) {
    var k, tt, w, it, d, s, g, c, l, rt, a;
    this.createParentMask();
    var o = this.createDialog(375, 135, this.PromptTitleText), y = this, h = this.parentDocument.createElement("table");
    h.border = 0;
    h.cellPadding = 8;
    h.cellSpacing = 0;
    h.style.width = "100%";
    h.style.height = "100%";
    h.style.fontSize = "1em";
    StolenTech.JavaScript.Util.AddEvent(h, "contextmenu", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    StolenTech.JavaScript.Util.AddEvent(h, "selectstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    StolenTech.JavaScript.Util.AddEvent(h, "dragstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    var p = this.parentDocument.createElement("tbody"), b = this.parentDocument.createElement("tr"),
        nt = this.parentDocument.createElement("td"), v = this.parentDocument.createElement("img");
    return v.style.border = "none", v.style.width = "32px", v.style.height = "32px", v.src = this.imgPrompt.src, nt.appendChild(v), b.appendChild(nt), k = this.parentDocument.createElement("td"), tt = this.parentDocument.createTextNode(n), k.appendChild(tt), b.appendChild(k), w = this.parentDocument.createElement("tr"), it = this.parentDocument.createElement("td"), w.appendChild(it), d = this.parentDocument.createElement("td"), s = this.parentDocument.createElement("input"), s.type = "text", s.style.width = "300px", s.value = t, s.disabled = u, d.appendChild(s), w.appendChild(d), g = this.parentDocument.createElement("tr"), c = this.parentDocument.createElement("td"), c.colSpan = 2, c.align = "center", l = this.parentDocument.createElement("input"), l.type = "button", l.value = this.OkButtonText, l.style.width = "82px", StolenTech.JavaScript.Util.AddEvent(l, "click", function () {
        var n = s.value;
        r(n) ? (y.Close(o), i(n)) : (s.value == "" && (s.value = t), s.select())
    }), c.appendChild(l), rt = this.parentDocument.createTextNode(String.fromCharCode(160) + String.fromCharCode(160)), c.appendChild(rt), a = this.parentDocument.createElement("input"), a.type = "button", a.value = this.CancelButtonText, a.style.width = "82px", StolenTech.JavaScript.Util.AddEvent(a, "click", function () {
        y.Close(o);
        i(null)
    }), c.appendChild(a), g.appendChild(c), p.appendChild(b), p.appendChild(w), p.appendChild(g), h.appendChild(p), o.elementContent.appendChild(h), typeof f == "undefined" && (f = 0), typeof e == "undefined" && (e = s.value.length), StolenTech.JavaScript.Util.SelectInputText(s, f, e), o.windowResizeEvent = function () {
        setTimeout(function () {
            y.center(o)
        }, 200)
    }, StolenTech.JavaScript.Util.AddEvent(window, "resize", o.windowResizeEvent), o.okButton = l, o.cancelButton = a, o.keyDownEvent = function (n) {
        y.onKeyDown(n, o)
    }, StolenTech.JavaScript.Util.AddEvent(o, "keydown", o.keyDownEvent), o
};
StolenTech.JavaScript.UI.ModalDialog.prototype.PromptAction = function (n, t, i, r, u, f) {
    var a, b, k, s, c, l, h;
    this.createParentMask();
    var e = this.createDialog(420, 250, this.PromptTitleText), v = this, o = this.parentDocument.createElement("table");
    o.border = 0;
    o.cellPadding = 8;
    o.cellSpacing = 0;
    o.style.width = "100%";
    o.style.height = "100%";
    o.style.fontSize = "1em";
    StolenTech.JavaScript.Util.AddEvent(o, "contextmenu", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    StolenTech.JavaScript.Util.AddEvent(o, "selectstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    StolenTech.JavaScript.Util.AddEvent(o, "dragstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    var y = this.parentDocument.createElement("tbody"), p = this.parentDocument.createElement("tr"),
        w = this.parentDocument.createElement("td");
    return w.style.verticalAlign = "top", a = this.parentDocument.createElement("img"), a.style.border = "none", a.style.width = "32px", a.style.height = "32px", a.src = this.imgPrompt.src, w.appendChild(a), p.appendChild(w), b = this.parentDocument.createElement("td"), b.innerHTML = n.replace(/\n/g, "<br/>"), p.appendChild(b), k = this.parentDocument.createElement("tr"), s = this.parentDocument.createElement("td"), s.colSpan = 2, s.align = "center", c = this.parentDocument.createElement("input"), c.type = "button", c.value = t, c.style.width = "82px", c.style.height = "26px", StolenTech.JavaScript.Util.AddEvent(c, "click", function () {
        e.onClosed = null;
        v.Close(e);
        r()
    }), s.appendChild(c), s.appendChild(this.parentDocument.createTextNode(String.fromCharCode(160) + String.fromCharCode(160))), l = this.parentDocument.createElement("input"), l.type = "button", l.value = i, l.style.width = "82px", l.style.height = "26px", StolenTech.JavaScript.Util.AddEvent(l, "click", function () {
        e.onClosed = null;
        v.Close(e);
        u()
    }), s.appendChild(l), s.appendChild(this.parentDocument.createTextNode(String.fromCharCode(160) + String.fromCharCode(160))), h = this.parentDocument.createElement("input"), h.type = "button", h.value = this.CancelButtonText, h.style.width = "82px", h.style.height = "26px", StolenTech.JavaScript.Util.AddEvent(h, "click", function () {
        e.onClosed = null;
        v.Close(e);
        f()
    }), s.appendChild(h), k.appendChild(s), y.appendChild(p), y.appendChild(k), o.appendChild(y), e.elementContent.appendChild(o), e.onClosed = f, e.windowResizeEvent = function () {
        setTimeout(function () {
            v.center(e)
        }, 200)
    }, StolenTech.JavaScript.Util.AddEvent(window, "resize", e.windowResizeEvent), e.cancelButton = h, e.keyDownEvent = function (n) {
        v.onKeyDown(n, e)
    }, StolenTech.JavaScript.Util.AddEvent(e, "keydown", e.keyDownEvent), e
};
StolenTech.JavaScript.UI.ModalDialog.prototype.onKeyDown = function (n, t) {
    n || (n = window.event);
    switch (n.keyCode) {
        case 13:
            return t.okButton && t.okButton.click(), !1;
        case 27:
            return t.cancelButton.click(), !1
    }
    return !0
};
StolenTech.JavaScript.UI.ModalDialog.prototype.Close = function (n) {
    if (n.onClose) {
        var t = n.onClose();
        if (!t) return
    }
    this.removeDialog(n);
    this.removeParentMask();
    StolenTech.JavaScript.Util.RemoveEvent(window, "resize", n.windowResizeEvent);
    n.onClosed && n.onClosed()
};
var StolenTech = StolenTech || {};
StolenTech.JavaScript = StolenTech.JavaScript || {};
StolenTech.JavaScript.UI = StolenTech.JavaScript.UI || {};
StolenTech.JavaScript.UI.SeparatorCssClass = "gt-Separator";
StolenTech.JavaScript.UI.Separator = function (n, t, i) {
    this.ElementControl = document.createElement("div");
    n.appendChild(this.ElementControl);
    this.ElementControl.id = n.id + "-separator";
    this.ElementControl.className = StolenTech.JavaScript.UI.SeparatorCssClass;
    this.ElementControl.style.cssFloat = "left";
    this.ElementControl.style.styleFloat = "left";
    this.ElementControl.style.width = t + "px";
    this.dragStopCallback = i;
    this.dragging = !1;
    var r = this;
    this.onMouseDown = function (n) {
        r.onDragStart(n)
    };
    this.onMouseUp = function (n) {
        r.onDragStop(n)
    };
    this.onMouseMove = function (n) {
        r.onDrag(n)
    };
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "mousedown", this.onMouseDown);
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "touchstart", StolenTech.JavaScript.Util.SimulateMouse);
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "touchmove", StolenTech.JavaScript.Util.SimulateMouse);
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "touchend", StolenTech.JavaScript.Util.SimulateMouse)
};
StolenTech.JavaScript.UI.Separator.prototype.onDragStart = function (n) {
    var n, t, i;
    (n || (n = window.event), t = n.which ? n.which == 1 : n.button == 1, t) && (this.elementLeftPane = this.ElementControl.previousSibling, this.elementRightPane = this.ElementControl.nextSibling, this.dragging = !0, i = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft(), this.relativeMouseX = i - this.elementLeftPane.offsetWidth, StolenTech.JavaScript.Util.AddEvent(document, "mouseup", this.onMouseUp), StolenTech.JavaScript.Util.AddEvent(document, "mousemove", this.onMouseMove))
};
StolenTech.JavaScript.UI.Separator.prototype.onDragStop = function () {
    this.dragging = !1;
    StolenTech.JavaScript.Util.RemoveEvent(document, "mouseup", this.onMouseUp);
    StolenTech.JavaScript.Util.RemoveEvent(document, "mousemove", this.onMouseMove)
};
StolenTech.JavaScript.UI.Separator.prototype.onDrag = function (n) {
    var n, i, f;
    if (this.dragging) {
        n || (n = window.event);
        var e = n.pageX ? n.pageX : n.clientX + StolenTech.JavaScript.Util.Viewport.GetScrollLeft(),
            t = e - this.relativeMouseX, r = 100,
            u = this.ElementControl.parentNode.clientWidth - 100 - this.ElementControl.offsetWidth;
        t < r && (t = r);
        t > u && (t = u);
        i = t + this.ElementControl.offsetWidth;
        f = this.ElementControl.parentNode.clientWidth - i;
        this.elementLeftPane.style.width = t + "px";
        this.elementRightPane.style.left = i + "px";
        this.elementRightPane.style.width = f + "px";
        this.dragStopCallback && this.dragStopCallback()
    }
};
StolenTech.JavaScript.UI.Separator.prototype.SetHeight = function (n) {
    this.ElementControl.style.height = n - (this.ElementControl.offsetHeight - this.ElementControl.clientHeight) + "px"
};

function initHeader(n, t, i) {
    var r = document.getElementById("pageHeader"), f = document.getElementById("userInfo"),
        u = StolenTech.JavaScript.UI.ContextMenu.Parse(document.body, {
            ContextMenus: {
                ContextMenu: {
                    Name: "User",
                    Item: [{
                        action: "UserSettings",
                        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB20lEQVQ4jY3R/0sacRzH8f6gBvsp0h9S0FurM6aQa30ja31dieJsKSnYmlvplaY12ewrNIcUlFuDFQP7Mhzrl8MgqJ/8IbDjooKx/TB/eXWfIw8jyzt4ctznw+dxx73LAJSRtFqtVSgjhIIC+f3CblxkQaVSmSjqEWiaBkVREqDRaFBVpTKVBCorFR63pQ2Trh601OugUCihVCohrJPWSgJTrs6H+4lpkPY+v4V7oCl/mJQsCewnwmp2cx7s5gJSqwy2PtoRf9cGv80oD9hZfq3+vR4CaS/mxfeIBQmmHc6uOgJYSwKk5KIbJPL2r4EuxEabUV7+gJU1BdJGsJvdCPbgy8RzxL2tGOun4RhqUssCjNHhhY7QECKeZoTtBvGwd5yRFTlsehp1ocHvQGzmlfjpscnOOw/s/kzduBMg82zWhUbGiaPzf0idZGH+5Bc3c7ncveUB1Eec0I9akeYu8XLlPVrnPLeA+MEfsaLAk6ANNcO9iO5swRCywzjjkADbNx7bR2eoXuJw8fd/UYDVh+3QeV6gdmwAOp8ZdYxFAqZ2eVR84PDjkBOf0+m0mARcT8FqCA9maAGoHunG4zd9EsDzPH4dczjNnhb/B4XzFSC9YXowQPvMSbljvAKo+HqGVIqR7gAAAABJRU5ErkJggg==",
                        text: "myExplorer.Action.UserSettings"
                    }, {
                        action: "Administration",
                        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZ0lEQVQ4y2NgQAPZeQUJJeWV+4G0AJKYQW1DM0gsgIEQmDVv4f/zV2/+b2nvOg8yBISb2jruX7vz4H//5Kn7CRoAUgRSfPLcpf9dvRPuT5w64z7IQKIN6Jkw6TxIMTYMksPQAPIXyGQQBik4dPz0f1wGgORAakBqQV4FhRcDKHDQFYKcPGXGrOdxCUkNYRFRFSA2zBvIakCBDQ5hUCAhKwBpMDW3UIC5EsQGicHkQeEDC2SYNwRAgQVTUFVdU4Hu1db2joZHz1/+B+G1GzbenzFrtgByOAiAQhxmAEhxa2fPf2IwWDPIOSBnwQzYuHXbc1waDh05hkIzgAICPYDuPnoClvz16xdeDHNBAihKkKMR5E90A1Ze+gTGGAZgS0jIBhRtffX/wI3X/90Xvvj/7stPwgaAXIJswMRDr/6bzXzxf8/VF2D+xYsXwZhoA169evX/+M0X/58/e449DLAl7SXLV+wnNhoB6CBG65nnE0AAAAAASUVORK5CYII=",
                        text: "myExplorer.Action.Administration"
                    }, {action: "[Separator]"}, {
                        action: "Logout",
                        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcUlEQVQ4T42R60uTURzHH6WCwBSsRpF/QC+8QWS6wEnbo81HccutbFM2ddOajg3dcstNl/fccuY0QdP1QhdSUJYvUgIRQcg3w3fdxHXBhArBSiGrb+eMNqYU68DncPid8/2cGwOAoYhEIiNhhYAI3KH5SHY0WhAIBGqWzQXHcWBZNiwQCoXIzhaoowoyM7McdoMKPbZqlMoKkJXFB5/PB6lTHkQV3LRp0hcn+0GZv9sBe60iFKbMRhUsTnpy/NOj8E97sXDfhZkhEyY6VXDWyf9PMDfWkvPsYR8o8752PBk0YNJVDqu2kAqMUQWU2Tt2UOjuj91a+FqVSE5O8e8O/1Mw1Vvln+qtxqMblZhoL0NXDQdLgyJndziQtyeVEBOW0U4+3Oit6GvAoEMJj0kaDJuvV4PU/YT0SMHL4oN4z8amhQVkgfr8sA0XnBb4Bq4Ej+7r0dBwJOpQYKPmMN6qkrBdyAQlVLBSctuGiy4rnn/+hoV3q9CPO6EYbUbJSBPW5HH4pIj/QwI29Tx8rz+CN6VJCJxh0qgAskErJK1GLK2to/7eLZSNOKDytkDjbcOXykRsG3h/ZUl+PHh/FPXWQdx4CcNzM5D2mSAfsEAxZIeS8KEoDh9l8WG2tIn4oTuEZSkPq6diUqjAL/GYUODQIb+rFgXdehS6DJAQKZUFxx4zzpH3EXfoMr4qExAoPoZXGUxq7BgOhH7BKPWYVzgiyLtWhbNtl5HfWRMU0jGVFLnrILxazr0QH8XP00zq8i/s3efB/h1/TEQSab/ZzXXrZ/M7dOtiEhY1VoBt0mzkNmufppewJ15nMie3NhFH19MT/AYAojY4p+0wcQAAAABJRU5ErkJggg==",
                        text: "myExplorer.Action.Logout"
                    }]
                }
            }
        }, function (i) {
            switch (i.action) {
                case"UserSettings":
                    n.ShowUrl("usersettingsdialog.php", 400, 230, StolenTech.Util.Language.getEntry("myExplorer.Action.UserSettings"));
                    break;
                case"Administration":
                    window.location.href = "administration.php";
                    break;
                case"Logout":
                    StolenTech.JavaScript.Util.RequestJson(t, null, function () {
                        window.location.href = "login.php"
                    }, function (n) {
                        alert(StolenTech.Util.Language.getEntry("544") + "\n\n" + (n.ImportantMessage || n.Message))
                    })
            }
        }, StolenTech.Util.Language);
    return u.User.divElement.style.zIndex = 2, i && u.User.menuItems.Administration.Hide(), StolenTech.JavaScript.Util.AddEvent(f, "click", function () {
        u.User.PopupXY(r.offsetWidth, r.offsetHeight, !0)
    }), r
}

var StolenTech = StolenTech || {};
StolenTech.myExplorer = StolenTech.myExplorer || {};
StolenTech.myExplorer.AdministrationPageMinimumWidth = 400;
StolenTech.myExplorer.AdministrationPageMinimumHeight = 200;
StolenTech.myExplorer.AdministrationPageCssClass = "gt-administrationPage gt-nonSelectableText";
StolenTech.myExplorer.AdministrationPageInfoPaneCssClass = "gt-infoPane";
StolenTech.myExplorer.AdministrationPageInfoPaneTitleCssClass = "gt-infoPaneTitle";
StolenTech.myExplorer.AdministrationPageWarningTextCssClass = "gt-warningText";
StolenTech.myExplorer.AdministrationPageTreeNodeType = {
    Users: 1,
    Groups: 2,
    RootFolders: 3,
    Events: 4,
    ManagedGroup: 5,
    PublicLinks: 6
};
StolenTech.myExplorer.AdministrationPageUsersGridColumnType = {
    Name: {
        Text: "Label.Column.Name",
        Type: "CaseInsensitiveString",
        DefaultSortColumn: !0
    },
    FullName: {Text: "Label.Column.FullName", Type: "CaseInsensitiveString"},
    LoginCount: {Text: "Label.Column.LoginCount", Type: "Number", AlignRight: !0},
    LastLoginTime: {Text: "Label.Column.LastLoginTime", Type: "SortableFormattedDate"},
    DateCreated: {Text: "Label.Column.DateCreated", Type: "SortableFormattedDate"},
    DateModified: {Text: "Label.Column.DateModified", Type: "SortableFormattedDate"},
    Description: {Text: "Label.Column.Description", Type: "CaseInsensitiveString", Hidden: !0, TitleColumn: !0}
};
StolenTech.myExplorer.AdministrationPageGroupsGridColumnType = {
    Name: {
        Text: "Label.Column.Name",
        Type: "CaseInsensitiveString",
        DefaultSortColumn: !0
    },
    Members: {Text: "Label.Column.Members", Type: "Number", AlignRight: !0},
    DateCreated: {Text: "Label.Column.DateCreated", Type: "SortableFormattedDate"},
    DateModified: {Text: "Label.Column.DateModified", Type: "SortableFormattedDate"},
    Description: {Text: "Label.Column.Description", Type: "CaseInsensitiveString", Hidden: !0, TitleColumn: !0}
};
StolenTech.myExplorer.AdministrationPageRootFoldersGridColumnType = {
    Name: {
        Text: "Label.Column.Name",
        Type: "CaseInsensitiveString",
        DefaultSortColumn: !0
    },
    Path: {Text: "Label.Column.Location", Type: "CaseInsensitiveString"},
    DateCreated: {Text: "Label.Column.DateCreated", Type: "SortableFormattedDate"},
    DateModified: {Text: "Label.Column.DateModified", Type: "SortableFormattedDate"},
    Description: {Text: "Label.Column.Description", Type: "CaseInsensitiveString", Hidden: !0, TitleColumn: !0}
};
StolenTech.myExplorer.AdministrationPageEventsGridColumnType = {
    Type: {
        Text: "Label.Column.Type",
        Type: "CaseInsensitiveString",
        TitleColumn: !0
    },
    Date: {Text: "617", Type: "SortableFormattedDate", DefaultSortColumn: !0, Descending: !0},
    Time: {Text: "618", Type: "SortableFormattedDate"},
    User: {Text: "Label.Column.User", Type: "CaseInsensitiveString"}
};
StolenTech.myExplorer.AdministrationPagePublicLinksGridColumnType = {
    Name: {
        Text: "Label.Column.Name",
        Type: "CaseInsensitiveString",
        TitleColumn: !0
    },
    LinkedItem: {Text: "myExplorer.Label.LinkedItem", Type: "CaseInsensitiveString"},
    CreatedBy: {Text: "myExplorer.Label.CreatedBy", Type: "CaseInsensitiveString"},
    HitCount: {Text: "myExplorer.Label.HitCount", Type: "Number", AlignRight: !0},
    LastHitTime: {Text: "myExplorer.Label.LastHitTime", Type: "SortableFormattedDate"},
    Expiration: {Text: "myExplorer.Label.Expiration", Type: "CaseInsensitiveString"},
    HitLimit: {Text: "myExplorer.Label.HitLimit", Type: "CaseInsensitiveString"},
    DateCreated: {
        Text: "Label.Column.DateCreated",
        Type: "SortableFormattedDate",
        DefaultSortColumn: !0,
        Descending: !0
    },
    DateModified: {Text: "Label.Column.DateModified", Type: "SortableFormattedDate"}
};
StolenTech.myExplorer.AdministrationPage = function (n) {
    var i, e, a, c, o, h, s, v, y, t, p, w, f, l, b, u, r, k;
    if (StolenTech.JavaScript.Util.GetIEVersion() < 7) {
        alert("myExplorer requires Internet Explorer 7 as a minimum.\nPlease upgrade your IE version or use another browser.");
        return
    }
    if (this.Parameters = n, i = this, this.ElementControl = document.createElement("div"), this.ElementControl.id = this.Parameters.ElementId, this.Parameters.ShowOnLoad || (this.ElementControl.style.display = "none"), this.ElementControl.className = StolenTech.myExplorer.AdministrationPageCssClass, this.ElementControl.style.height = "1px", this.ElementControl.style.webkitTouchCallout = "none", this.ElementControl.style.webkitUserSelect = "none", StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "contextmenu", StolenTech.JavaScript.Util.CancelEventExceptForTextInput), StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "selectstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput), StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "dragstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput), document.body.appendChild(this.ElementControl), this.ElementControl.style.position = "absolute", this.ElementLeftPane = document.createElement("div"), this.ElementLeftPane.id = this.Parameters.ElementId + "-leftPane", this.ElementLeftPane.style.cssFloat = "left", this.ElementLeftPane.style.styleFloat = "left", this.ElementLeftPane.style.width = "200px", this.ElementControl.appendChild(this.ElementLeftPane), this.TreeView = new StolenTech.JavaScript.UI.TreeView, this.TreeView.SetIconSize(16, 16), this.TreeView.SetSignSize(16, 16), this.TreeView.SetNodeIcons(StolenTech.myExplorer.AdministrationPageTreeNodeType.Users, this.getResourceUrl("images/icons16/users.png")), this.TreeView.SetNodeIcons(StolenTech.myExplorer.AdministrationPageTreeNodeType.Groups, this.getResourceUrl("images/icons16/groups.png")), this.TreeView.SetNodeIcons(StolenTech.myExplorer.AdministrationPageTreeNodeType.RootFolders, this.getResourceUrl("images/icons16/rootfolders.png")), this.TreeView.SetNodeIcons(StolenTech.myExplorer.AdministrationPageTreeNodeType.Events, this.getResourceUrl("images/icons16/events.png")), this.TreeView.SetNodeIcons(StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup, this.getResourceUrl("images/icons16/group.png")), this.TreeView.SetNodeIcons(StolenTech.myExplorer.AdministrationPageTreeNodeType.PublicLinks, this.getResourceUrl("images/icons16/publiclinks.png")), this.TreeView.onTreeNodeSelect = function (n) {
        i.onTreeNodeSelect(n)
    }, this.TreeView.onTreeNodeContextMenu = function (n, t) {
        i.onTreeNodeContextMenu(n, t)
    }, this.TreeView.CreateRoot(), this.TreeView.Render(this.Parameters.ElementId + "-treeView", this.ElementLeftPane), this.Parameters.ManagedGroups.length > 0) {
        for (e = 0; e < this.Parameters.ManagedGroups.length; e++) a = this.Parameters.ManagedGroups[e][0], c = this.TreeView.root.AddChildNode(a, !0, StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup), c.groupId = +this.Parameters.ManagedGroups[e][1], c.selectable = !1;
        for (this.TreeView.root.SortChildren(), this.TreeView.root.LoadChildren(), o = 0; o < this.TreeView.root.childNodes.length; o++) {
            for (h = this.TreeView.root.childNodes[o], s = 0; s < this.Parameters.Sections.length; s++) v = this.Parameters.Sections[s][0], y = +this.Parameters.Sections[s][1], h.AddChildNode(v, !1, y);
            h.LoadChildren();
            o > 0 && h.Collapse()
        }
    } else {
        for (t = 0; t < this.Parameters.Sections.length; t++) p = this.Parameters.Sections[t][0], w = +this.Parameters.Sections[t][1], this.TreeView.root.AddChildNode(p, !1, w);
        this.TreeView.root.LoadChildren()
    }
    for (this.Separator = new StolenTech.JavaScript.UI.Separator(this.ElementControl, 3, function () {
        i.GridView.Resize()
    }), this.ElementRightPane = document.createElement("div"), this.ElementRightPane.id = this.Parameters.ElementId + "-rightPane", this.ElementRightPane.style.position = "absolute", this.ElementRightPane.style.overflow = "hidden", this.ElementRightPane.style.width = "1px", this.ElementControl.appendChild(this.ElementRightPane), this.ToolBar = new StolenTech.JavaScript.UI.ToolBar, this.ToolBar.SetButtonSize(28, 32), this.ToolBar.onButtonClick = function (n) {
        i.onAction(n)
    }, this.ToolBar.SetImages(this.getResourceUrl("images/icons24/"), 24, 24), f = StolenTech.myExplorer.AdministrationPageToolBarData.ToolBar.Item, t = 0; t < f.length; t++) (l = f[t].action, b = f[t].permission, this.Parameters.ManagedGroups.length > 0 && b == "Administrator") || (l == "[Separator]" ? this.ToolBar.AddSeparator() : this.ToolBar.AddButton(l, StolenTech.Util.Language.getEntry(f[t].description), f[t].image));
    this.ToolBar.Render(this.Parameters.ElementId + "-toolbar", this.ElementRightPane);
    this.BusyCount = 0;
    u = document.createElement("div");
    this.ToolBar.divElement.appendChild(u);
    u.style.cssFloat = "right";
    u.style.styleFloat = "right";
    u.style.height = "38px";
    u.style.marginRight = "10px";
    this.ElementBusyImage = new Image;
    u.appendChild(this.ElementBusyImage);
    this.ElementBusyImage.src = this.getResourceUrl("images/loader.gif");
    this.ElementBusyImage.style.visibility = "hidden";
    this.ElementBusyImage.style.width = "16px";
    this.ElementBusyImage.style.height = "11px";
    this.ElementBusyImage.style.marginTop = "14px";
    this.ElementInfoPane = document.createElement("div");
    this.ElementInfoPane.id = this.Parameters.ElementId + "-infoPane";
    this.ElementInfoPane.className = StolenTech.myExplorer.AdministrationPageInfoPaneCssClass;
    this.ElementInfoPane.style.height = "48px";
    this.ElementInfoPane.style.paddingLeft = "6px";
    this.ElementInfoPane.style.paddingTop = "6px";
    this.ElementInfoPane.style.paddingRight = "6px";
    this.ElementInfoPane.style.paddingBottom = "6px";
    this.ElementInfoPane.style.visibility = "hidden";
    this.ElementInfoPane.style.position = "relative";
    this.ElementRightPane.appendChild(this.ElementInfoPane);
    this.ImageBigUsers = new Image;
    this.ImageBigUsers.src = this.getResourceUrl("images/icons48/users.png");
    this.ImageBigGroups = new Image;
    this.ImageBigGroups.src = this.getResourceUrl("images/icons48/groups.png");
    this.ImageBigRootFolders = new Image;
    this.ImageBigRootFolders.src = this.getResourceUrl("images/icons48/rootfolders.png");
    this.ImageBigEvents = new Image;
    this.ImageBigEvents.src = this.getResourceUrl("images/icons48/events.png");
    this.ImageBigPublicLinks = new Image;
    this.ImageBigPublicLinks.src = this.getResourceUrl("images/icons48/publiclinks.png");
    this.ElementInfoPaneImage = new Image;
    this.ElementInfoPaneImage.style.width = "48px";
    this.ElementInfoPaneImage.style.height = "48px";
    this.ElementInfoPaneImage.style.cssFloat = "left";
    this.ElementInfoPaneImage.style.styleFloat = "left";
    this.ElementInfoPane.appendChild(this.ElementInfoPaneImage);
    this.ElementInfoPaneTitle = document.createElement("div");
    this.ElementInfoPaneTitle.style.width = "250px";
    this.ElementInfoPaneTitle.style.maxHeight = "48px";
    this.ElementInfoPaneTitle.style.overflow = "hidden";
    this.ElementInfoPaneTitle.style.position = "absolute";
    this.ElementInfoPaneTitle.style.left = "60px";
    this.ElementInfoPaneTitle.className = StolenTech.myExplorer.AdministrationPageInfoPaneTitleCssClass;
    this.ElementInfoPaneTitle.appendChild(document.createTextNode(String.fromCharCode(160)));
    this.ElementInfoPane.appendChild(this.ElementInfoPaneTitle);
    this.ElementInfoPaneStats = document.createElement("div");
    this.ElementInfoPaneStats.style.width = "150px";
    this.ElementInfoPaneStats.style.maxHeight = "48px";
    this.ElementInfoPaneStats.style.position = "absolute";
    this.ElementInfoPaneStats.style.left = "310px";
    this.ElementInfoPaneStats.appendChild(document.createTextNode(String.fromCharCode(160)));
    this.ElementInfoPane.appendChild(this.ElementInfoPaneStats);
    this.GridView = new StolenTech.JavaScript.UI.GridView;
    this.GridView.SetIconSize(16, 16);
    this.GridView.iconsPath["default"] = this.getResourceUrl("images/icons16/");
    this.GridView.onRowDoubleClick = function (n) {
        i.onGridRowDoubleClick(n)
    };
    this.GridView.onRowContextMenu = function (n, t) {
        i.onGridRowContextMenu(n, t)
    };
    this.GridView.onGridContextMenu = function (n) {
        i.onGridContextMenu(n)
    };
    this.GridView.Render(this.Parameters.ElementId + "-gridView", this.ElementRightPane);
    this.ElementWarning = document.createElement("div");
    this.ElementWarning.className = StolenTech.myExplorer.AdministrationPageWarningTextCssClass;
    this.ElementWarning.style.display = "none";
    this.ElementWarning.style.position = "absolute";
    this.ElementWarning.style.width = "100%";
    this.ElementWarning.style.top = "45px";
    this.ElementWarning.style.textAlign = "center";
    this.ElementWarning.appendChild(document.createTextNode(String.fromCharCode(160)));
    this.GridView.divElement.appendChild(this.ElementWarning);
    StolenTech.JavaScript.UI.ContextMenuIconsPath["default"] = this.getResourceUrl("images/icons16/");
    this.ContextMenus = StolenTech.JavaScript.UI.ContextMenu.Parse(this.ElementControl, StolenTech.myExplorer.AdministrationPageContextMenusData, function (n) {
        i.onAction(n, n.menu.target)
    }, StolenTech.Util.Language);
    this.Parameters.ManagedGroups.length > 0 && (r = this.ContextMenus.UsersMain.menuItems.ImportUsers, r.Hide(), r = this.ContextMenus.RootFoldersMain.menuItems.NewRootFolder, r.Hide(), this.ContextMenus.RootFoldersMain.items[r.index + 1].Hide(), r = this.ContextMenus.RootFolderGridRow.menuItems.DeleteRootFolder, r.Hide(), r = this.ContextMenus.RootFolderGridRow.menuItems.RenameRootFolder, r.Hide(), this.ContextMenus.RootFolderGridRow.items[r.index + 1].Hide());
    this.ModalDialog = new StolenTech.JavaScript.UI.ModalDialog;
    this.ModalDialog.OkButtonText = StolenTech.Util.Language.getEntry("Label.OK");
    this.ModalDialog.CancelButtonText = StolenTech.Util.Language.getEntry("Label.Cancel");
    this.EventFilter = {};
    this.EventFilter.Types = null;
    this.EventFilter.UserName = null;
    this.EventFilter.FromDate = null;
    this.EventFilter.ToDate = null;
    this.EventFilter.IsSet = !1;
    StolenTech.JavaScript.Util.AddEvent(window, "resize", function () {
        "ontouchstart" in window || i.resize()
    });
    k = initHeader(this.ModalDialog, this.getActionUrl("Logout"), !0);
    this.Parameters.ViewportTopMargin = k.offsetHeight;
    this.Parameters.ManagedGroups.length > 0 ? this.TreeView.root.childNodes[0].childNodes[0].Select() : this.TreeView.root.childNodes[0].Select();
    this.ElementControl.style.display = "block";
    this.resize()
};
StolenTech.myExplorer.AdministrationPage.prototype.getResourceUrl = function (n) {
    return this.Parameters.ResourceBasePath + n
};
StolenTech.myExplorer.AdministrationPage.prototype.getFileUltimateResourceUrl = function (n) {
    return this.Parameters.FileUltimateResourceBasePath + n
};
StolenTech.myExplorer.AdministrationPage.prototype.getActionUrl = function (n) {
    return this.Parameters.ActionBasePath + n
};
StolenTech.myExplorer.AdministrationPage.prototype.SetSize = function (n, t) {
    var u, r, i = this;
    return StolenTech.JavaScript.Util.EnsureDisplay(this.ElementControl, function (f) {
        n ? (f.style.width = n, f.style.width = f.offsetWidth < StolenTech.myExplorer.AdministrationPageMinimumWidth ? StolenTech.myExplorer.AdministrationPageMinimumWidth - (f.offsetWidth - f.clientWidth) + "px" : f.clientWidth - (f.offsetWidth - f.clientWidth) + "px") : f.offsetWidth < StolenTech.myExplorer.AdministrationPageMinimumWidth && (f.style.width = StolenTech.myExplorer.AdministrationPageMinimumWidth - (f.offsetWidth - f.clientWidth) + "px");
        t ? (f.style.height = t, f.style.height = f.offsetHeight < StolenTech.myExplorer.AdministrationPageMinimumHeight ? StolenTech.myExplorer.AdministrationPageMinimumHeight - (f.offsetHeight - f.clientHeight) + "px" : f.clientHeight - (f.offsetHeight - f.clientHeight) + "px") : f.offsetHeight < StolenTech.myExplorer.AdministrationPageMinimumHeight && (f.style.height = StolenTech.myExplorer.AdministrationPageMinimumHeight - (f.offsetHeight - f.clientHeight) + "px");
        u = f.clientWidth;
        r = f.clientHeight;
        var e = i.ElementLeftPane.offsetWidth + i.Separator.ElementControl.offsetWidth, o = u - e;
        i.ElementLeftPane.style.height = r + "px";
        i.Separator.SetHeight(r);
        i.ElementRightPane.style.left = e + "px";
        i.ElementRightPane.style.width = o + "px";
        i.ElementRightPane.style.height = r + "px";
        i.ElementInfoPaneTitle.style.top = (i.ElementInfoPane.clientHeight - i.ElementInfoPaneTitle.offsetHeight) / 2 + "px";
        i.ElementInfoPaneStats.style.top = (i.ElementInfoPane.clientHeight - i.ElementInfoPaneStats.offsetHeight) / 2 + "px";
        i.TreeView.SetHeight(i.ElementLeftPane.clientHeight);
        i.GridView.Resize(null, i.ElementRightPane.clientHeight - i.ToolBar.GetHeight() - i.ElementInfoPane.offsetHeight)
    }), [u, r]
};
StolenTech.myExplorer.AdministrationPage.prototype.resize = function () {
    var n = StolenTech.JavaScript.Util.Viewport.GetScrollLeft(), t = StolenTech.JavaScript.Util.Viewport.GetScrollTop(),
        i = StolenTech.JavaScript.Util.Viewport.GetWidth(), r = StolenTech.JavaScript.Util.Viewport.GetHeight();
    this.Parameters.ViewportLeftMargin && (n += this.Parameters.ViewportLeftMargin, i -= this.Parameters.ViewportLeftMargin);
    this.Parameters.ViewportTopMargin && (t += this.Parameters.ViewportTopMargin, r -= this.Parameters.ViewportTopMargin);
    this.ElementControl.style.left = n + "px";
    this.ElementControl.style.top = t + "px";
    this.SetSize(i + "px", r + "px")
};
StolenTech.myExplorer.AdministrationPage.prototype.onBusy = function (n) {
    n ? this.BusyCount++ : this.BusyCount--;
    this.ElementBusyImage.style.visibility = this.BusyCount > 0 ? "inherit" : "hidden"
};
StolenTech.myExplorer.AdministrationPage.prototype.onRequestJsonError = function (n) {
    n.Message.indexOf("SessionExpiredOrUserNotFound") != -1 ? StolenTech.JavaScript.Util.RefreshPage() : alert(n.ImportantMessage || n.Message)
};
StolenTech.myExplorer.AdministrationPage.prototype.onInfoPaneChange = function (n, t, i, r) {
    n && (this.ElementInfoPaneImage.src = n);
    t && (this.ElementInfoPaneTitle.firstChild.nodeValue = t, this.ElementInfoPaneTitle.style.top = (this.ElementInfoPane.clientHeight - this.ElementInfoPaneTitle.offsetHeight) / 2 + "px");
    i && (this.ElementInfoPaneTitle.title = this.ElementInfoPaneImage.title = i);
    r && (this.ElementInfoPaneStats.innerHTML = r, this.ElementInfoPaneStats.style.top = (this.ElementInfoPane.clientHeight - this.ElementInfoPaneStats.offsetHeight) / 2 + "px");
    this.ElementInfoPane.style.visibility = "inherit"
};
StolenTech.myExplorer.AdministrationPage.prototype.onGridWarningChange = function (n, t) {
    n ? (this.ElementWarning.firstChild.nodeValue = t, this.ElementWarning.style.display = "block") : this.ElementWarning.style.display = "none"
};
StolenTech.myExplorer.AdministrationPage.prototype.onGridColumnsChange = function (n) {
    var r, t, i;
    this.onGridWarningChange(!1);
    this.GridView.Clear();
    for (r in n) t = n[r], i = this.GridView.AddColumn(r, StolenTech.Util.Language.getEntry(t.Text), t.Type, t.AlignRight, null, t.Size), i.hidden = t.Hidden, t.TitleColumn && (this.GridView.rowTitleColumn = i), t.DefaultSortColumn && (this.GridView.sortColumn = i), t.Descending && (this.GridView.sortDescending = !0);
    this.GridView.RefreshColumns()
};
StolenTech.myExplorer.AdministrationPage.prototype.onTreeNodeSelect = function (n) {
    switch (n.type) {
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Users:
            this.GetUsers(n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Groups:
            this.GetGroups(n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.RootFolders:
            this.GetRootFolders(n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Events:
            this.GetEvents(n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.PublicLinks:
            this.GetPublicLinks(n)
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onTreeNodeContextMenu = function (n, t) {
    switch (n.type) {
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Users:
            this.ContextMenus.UsersMain.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Groups:
            this.ContextMenus.GroupsMain.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.RootFolders:
            this.ContextMenus.RootFoldersMain.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Events:
            this.ContextMenus.EventsMain.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.PublicLinks:
            this.ContextMenus.PublicLinksMain.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup:
            n.expanded ? (this.ContextMenus.ManagedGroup.menuItems.Expand.Hide(), this.ContextMenus.ManagedGroup.menuItems.Collapse.Show(), this.ContextMenus.ManagedGroup.SetDefault(this.ContextMenus.ManagedGroup.menuItems.Collapse)) : (this.ContextMenus.ManagedGroup.menuItems.Expand.Show(), this.ContextMenus.ManagedGroup.menuItems.Collapse.Hide(), this.ContextMenus.ManagedGroup.SetDefault(this.ContextMenus.ManagedGroup.menuItems.Expand));
            this.ContextMenus.ManagedGroup.Popup(t, n)
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGridRowDoubleClick = function (n) {
    switch (this.TreeView.selectedNode.type) {
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Users:
            this.onAction({action: "PropertiesOfUser"}, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Groups:
            this.onAction({action: "PropertiesOfGroup"}, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.RootFolders:
            this.onAction({action: "PropertiesOfRootFolder"}, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Events:
            this.onAction({action: "PropertiesOfEvent"}, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.PublicLinks:
            this.onAction({action: "PropertiesOfPublicLink"}, n)
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGridRowContextMenu = function (n, t) {
    switch (this.TreeView.selectedNode.type) {
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Users:
            this.GridView.selectedCount === 1 ? this.ContextMenus.UserGridRow.Popup(t, n) : this.ContextMenus.UserGridRows.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Groups:
            this.GridView.selectedCount === 1 && this.ContextMenus.GroupGridRow.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.RootFolders:
            this.GridView.selectedCount === 1 && this.ContextMenus.RootFolderGridRow.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.Events:
            this.GridView.selectedCount === 1 && this.ContextMenus.EventGridRow.Popup(t, n);
            break;
        case StolenTech.myExplorer.AdministrationPageTreeNodeType.PublicLinks:
            this.GridView.selectedCount === 1 && this.ContextMenus.PublicLinkGridRow.Popup(t, n)
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGridContextMenu = function (n) {
    if (this.TreeView.selectedNode) {
        this.GridView.UnSelectAllRows();
        switch (this.TreeView.selectedNode.type) {
            case StolenTech.myExplorer.AdministrationPageTreeNodeType.Users:
                this.ContextMenus.UsersMain.Popup(n);
                break;
            case StolenTech.myExplorer.AdministrationPageTreeNodeType.Groups:
                this.ContextMenus.GroupsMain.Popup(n);
                break;
            case StolenTech.myExplorer.AdministrationPageTreeNodeType.RootFolders:
                this.ContextMenus.RootFoldersMain.Popup(n);
                break;
            case StolenTech.myExplorer.AdministrationPageTreeNodeType.Events:
                this.ContextMenus.EventsMain.Popup(n);
                break;
            case StolenTech.myExplorer.AdministrationPageTreeNodeType.PublicLinks:
                this.ContextMenus.PublicLinksMain.Popup(n)
        }
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.GetUsers = function (n) {
    var t = this;
    this.onInfoPaneChange(this.ImageBigUsers.src, n.text, n.text, String.fromCharCode(160));
    this.onGridColumnsChange(StolenTech.myExplorer.AdministrationPageUsersGridColumnType);
    if (!n.loading) {
        n.loading = !0;
        this.onBusy(!0);
        StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("GetUsers"), {managedGroupId: n.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? n.parent.groupId : null}, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGetUsersSuccess(i, n)
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) {
                t.onRequestJsonError(i);
                t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
            }
        }, function () {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
        })
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGetUsersSuccess = function (n) {
    for (var r, t = n.Users, i = 0; i < t.length; i++) {
        var u = t[i][0], f = t[i][1], e = t[i][2], o = t[i][3], s = t[i][4], h = t[i][5], c = t[i][6], l = t[i][7],
            a = this.GridView.AddRow([e, o, s, h, c, l, f], "user.png");
        a.userId = u
    }
    r = StolenTech.Util.Language.getEntry("527", "<b>" + t.length + "<\/b>");
    this.Parameters.ManagedGroups.length == 0 && (r += '<br/><span class="gt-textButton" onclick="administrationPage.onAction({ action: \'ImportUsers\' });">' + StolenTech.Util.Language.getEntry("Label.ImportUsers") + "<\/span>");
    this.onInfoPaneChange(null, null, null, r);
    if (this.GridView.rowsArray.length == 0) this.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionEmpty"));
    this.GridView.Sort();
    this.GridView.RenderRows()
};
StolenTech.myExplorer.AdministrationPage.prototype.GetGroups = function (n) {
    var t = this;
    this.onInfoPaneChange(this.ImageBigGroups.src, n.text, n.text, String.fromCharCode(160));
    this.onGridColumnsChange(StolenTech.myExplorer.AdministrationPageGroupsGridColumnType);
    if (!n.loading) {
        n.loading = !0;
        this.onBusy(!0);
        StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("GetGroups"), null, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGetGroupsSuccess(i, n)
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) {
                t.onRequestJsonError(i);
                t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
            }
        }, function () {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
        })
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGetGroupsSuccess = function (n) {
    for (var t = n.Groups, i = 0; i < t.length; i++) {
        var r = t[i][0], u = t[i][1], f = t[i][2], e = t[i][3], o = t[i][4], s = t[i][5],
            h = this.GridView.AddRow([f, e, o, s, u], "group.png");
        h.groupId = r
    }
    this.onInfoPaneChange(null, null, null, StolenTech.Util.Language.getEntry("528", "<b>" + t.length + "<\/b>"));
    if (this.GridView.rowsArray.length == 0) this.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionEmpty"));
    this.GridView.Sort();
    this.GridView.RenderRows()
};
StolenTech.myExplorer.AdministrationPage.prototype.GetRootFolders = function (n) {
    var t = this;
    this.onInfoPaneChange(this.ImageBigRootFolders.src, n.text, n.text, String.fromCharCode(160));
    StolenTech.myExplorer.AdministrationPageRootFoldersGridColumnType.Path.Hidden = n.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup;
    this.onGridColumnsChange(StolenTech.myExplorer.AdministrationPageRootFoldersGridColumnType);
    if (!n.loading) {
        n.loading = !0;
        this.onBusy(!0);
        StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("GetRootFolders"), {managedGroupId: n.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? n.parent.groupId : null}, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGetRootFoldersSuccess(i, n)
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) {
                t.onRequestJsonError(i);
                t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
            }
        }, function () {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
        })
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGetRootFoldersSuccess = function (n) {
    for (var t = n.RootFolders, i = 0; i < t.length; i++) {
        var r = t[i][0], u = t[i][1], f = t[i][2], e = t[i][3], o = t[i][4], s = t[i][5],
            h = this.GridView.AddRow([f, e, o, s, u], "rootfolder.png");
        h.rootFolderId = r
    }
    this.onInfoPaneChange(null, null, null, StolenTech.Util.Language.getEntry("529", "<b>" + t.length + "<\/b>"));
    if (this.GridView.rowsArray.length == 0) this.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionEmpty"));
    this.GridView.Sort();
    this.GridView.RenderRows()
};
StolenTech.myExplorer.AdministrationPage.prototype.GetEvents = function (n) {
    var t = this;
    this.onInfoPaneChange(this.ImageBigEvents.src, n.text, n.text, String.fromCharCode(160));
    this.onGridColumnsChange(StolenTech.myExplorer.AdministrationPageEventsGridColumnType);
    if (!n.loading) {
        n.loading = !0;
        this.onBusy(!0);
        StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("GetEvents"), {
            managedGroupId: n.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? n.parent.groupId : null,
            types: this.EventFilter.Types,
            userName: this.EventFilter.UserName,
            fromDate: this.EventFilter.FromDate,
            toDate: this.EventFilter.ToDate
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGetEventsSuccess(i, n)
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) {
                t.onRequestJsonError(i);
                t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
            }
        }, function () {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
        })
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGetEventsSuccess = function (n) {
    for (var t = n.Events, i = 0; i < t.length; i++) {
        var u = t[i][0], r = t[i][1], f = t[i][2], e = t[i][3], o = t[i][4],
            s = StolenTech.Util.Language.getEntry("myExplorer.Event." + this.Parameters.EventNames[r]),
            h = this.Parameters.EventIcons[r], c = this.GridView.AddRow([s, f, e, o], h);
        c.eventId = u
    }
    this.onInfoPaneChange(null, null, null, StolenTech.Util.Language.getEntry("635", "<b>" + t.length + "<\/b>") + '<br/><span class="gt-textButton" onclick="administrationPage.onAction({ action: \'FilterEvents\' });">' + StolenTech.Util.Language.getEntry("myExplorer.Label.Filtered") + "<\/span>");
    if (this.GridView.rowsArray.length == 0) this.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionEmpty"));
    this.GridView.Sort();
    this.GridView.RenderRows()
};
StolenTech.myExplorer.AdministrationPage.prototype.GetPublicLinks = function (n) {
    var t = this;
    this.onInfoPaneChange(this.ImageBigPublicLinks.src, n.text, n.text, String.fromCharCode(160));
    this.onGridColumnsChange(StolenTech.myExplorer.AdministrationPagePublicLinksGridColumnType);
    if (!n.loading) {
        n.loading = !0;
        this.onBusy(!0);
        StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("GetPublicLinks"), {
            managedGroupId: n.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? n.parent.groupId : null,
            rootFolderId: null,
            path: null,
            name: null
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGetPublicLinksSuccess(i, n)
        }, function (i) {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) {
                t.onRequestJsonError(i);
                t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
            }
        }, function () {
            t.onBusy(!1);
            if (n.loading = !1, n.selected) t.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
        })
    }
};
StolenTech.myExplorer.AdministrationPage.prototype.onGetPublicLinksSuccess = function (n) {
    for (var t = n.PublicLinks, i = 0; i < t.length; i++) {
        var r = t[i][0], u = t[i][1], f = t[i][2], e = t[i][3], o = t[i][4], s = t[i][5], h = t[i][6], c = t[i][7],
            l = t[i][8], a = t[i][9], v = this.GridView.AddRow([u, f, e, o, s, h, c, l, a], "publiclink.png");
        v.publicLinkId = r
    }
    this.onInfoPaneChange(null, null, null, StolenTech.Util.Language.getEntry("myExplorer.Label.PublicLinksCount", "<b>" + t.length + "<\/b>"));
    if (this.GridView.rowsArray.length == 0) this.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionEmpty"));
    this.GridView.Sort();
    this.GridView.RenderRows()
};
StolenTech.myExplorer.AdministrationPage.prototype.DeleteUser = function (n, t, i) {
    var r = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("DeleteUser"), {
        userId: t,
        managedGroupId: i
    }, function (t) {
        r.onBusy(!1);
        r.onDeleteUserSuccess(t, n)
    }, function (n) {
        r.onBusy(!1);
        r.onRequestJsonError(n)
    }, function () {
        r.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onDeleteUserSuccess = function (n, t) {
    this.GetUsers(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.DeleteUsers = function (n, t, i) {
    var r = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("DeleteUsers"), {
        userIds: t,
        managedGroupId: i
    }, function (t) {
        r.onBusy(!1);
        r.onDeleteUsersSuccess(t, n)
    }, function (n) {
        r.onBusy(!1);
        r.onRequestJsonError(n)
    }, function () {
        r.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onDeleteUsersSuccess = function (n, t) {
    this.GetUsers(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.RenameUser = function (n, t, i, r) {
    var u = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("RenameUser"), {
        userId: t,
        newUserName: i,
        managedGroupId: r
    }, function (t) {
        u.onBusy(!1);
        u.onRenameUserSuccess(t, n)
    }, function (n) {
        u.onBusy(!1);
        u.onRequestJsonError(n)
    }, function () {
        u.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onRenameUserSuccess = function (n, t) {
    this.GetUsers(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.DeleteGroup = function (n, t) {
    var i = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("DeleteGroup"), {groupId: t}, function (t) {
        i.onBusy(!1);
        i.onDeleteGroupSuccess(t, n)
    }, function (n) {
        i.onBusy(!1);
        i.onRequestJsonError(n)
    }, function () {
        i.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onDeleteGroupSuccess = function (n, t) {
    this.GetGroups(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.RenameGroup = function (n, t, i) {
    var r = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("RenameGroup"), {
        groupId: t,
        newGroupName: i
    }, function (t) {
        r.onBusy(!1);
        r.onRenameGroupSuccess(t, n)
    }, function (n) {
        r.onBusy(!1);
        r.onRequestJsonError(n)
    }, function () {
        r.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onRenameGroupSuccess = function (n, t) {
    this.GetGroups(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.DeleteRootFolder = function (n, t) {
    var i = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("DeleteRootFolder"), {rootFolderId: t}, function (t) {
        i.onBusy(!1);
        i.onDeleteRootFolderSuccess(t, n)
    }, function (n) {
        i.onBusy(!1);
        i.onRequestJsonError(n)
    }, function () {
        i.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onDeleteRootFolderSuccess = function (n, t) {
    this.GetRootFolders(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.RenameRootFolder = function (n, t, i) {
    var r = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("RenameRootFolder"), {
        rootFolderId: t,
        newRootFolderName: i
    }, function (t) {
        r.onBusy(!1);
        r.onRenameRootFolderSuccess(t, n)
    }, function (n) {
        r.onBusy(!1);
        r.onRequestJsonError(n)
    }, function () {
        r.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onRenameRootFolderSuccess = function (n, t) {
    this.GetRootFolders(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.DeletePublicLink = function (n, t, i) {
    var r = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("DeletePublicLink"), {
        publicLinkId: t,
        managedGroupId: i
    }, function (t) {
        r.onBusy(!1);
        r.onDeletePublicLinkSuccess(t, n)
    }, function (n) {
        r.onBusy(!1);
        r.onRequestJsonError(n)
    }, function () {
        r.onBusy(!1)
    })
};
StolenTech.myExplorer.AdministrationPage.prototype.onDeletePublicLinkSuccess = function (n, t) {
    this.GetPublicLinks(t)
};
StolenTech.myExplorer.AdministrationPage.prototype.onAction = function (n, t) {
    var i, r, u, c, s, h, v, l, f, e, y = this, o, p, a;
    switch (n.action) {
        case"FolderBrowsing":
            window.location.href = "./";
            break;
        case"Settings":
            this.ModalDialog.ShowUrl("settingsdialog.php", 420, 520, StolenTech.Util.Language.getEntry("636"));
            break;
        case"License":
            this.ModalDialog.ShowUrl("licensedialog.php", 400, 400, StolenTech.Util.Language.getEntry("531"));
            break;
        case"About":
            this.ModalDialog.ShowUrl("aboutdialog.php", 400, 400, StolenTech.Util.Language.getEntry("Label.About"));
            break;
        case"Expand":
            i = t;
            i.Expand();
            break;
        case"Collapse":
            i = t;
            i.Collapse();
            break;
        case"NewUser":
            i = t ? t : this.TreeView.selectedNode;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            e = "userdialog.php";
            u && (e += "?groupId=" + u);
            o = this.ModalDialog.ShowUrl(e, 400, 445, StolenTech.Util.Language.getEntry("533"));
            o.targetTreeNode = i;
            break;
        case"ImportUsers":
            e = "userimportdialog.php";
            o = this.ModalDialog.ShowUrl(e, 800, 540, StolenTech.Util.Language.getEntry("Label.ImportUsers"));
            o.targetTreeNode = i;
            break;
        case"RefreshUsers":
            i = t ? t : this.TreeView.selectedNode;
            i.Select();
            this.GetUsers(i);
            break;
        case"DeleteUser":
            i = this.TreeView.selectedNode;
            r = t;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            s = r.userId;
            f = r.GetCellValue(this.GridView.columns.Name);
            confirm(StolenTech.Util.Language.getEntry("548", f)) && this.DeleteUser(i, s, u);
            break;
        case"DeleteUsers":
            for (i = this.TreeView.selectedNode, u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null, p = [], a = 0; a < this.GridView.selectedRowsArray.length; a++) p.push(this.GridView.selectedRowsArray[a].userId);
            confirm(StolenTech.Util.Language.getEntry("548", this.GridView.selectedCount + " users")) && this.DeleteUsers(i, p, u);
            break;
        case"RenameUser":
            i = this.TreeView.selectedNode;
            r = t;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            s = r.userId;
            f = r.GetCellValue(this.GridView.columns.Name);
            this.ModalDialog.Prompt(StolenTech.Util.Language.getEntry("549"), f, function (n) {
                n && y.RenameUser(i, s, n, u)
            }, function (n) {
                return n = StolenTech.JavaScript.Util.Trim(n), n == "" || n == f ? !1 : !0
            });
            break;
        case"PropertiesOfUser":
            i = this.TreeView.selectedNode;
            r = t;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            s = r.userId;
            e = "userdialog.php";
            e += u ? "?groupId=" + u + "&userId=" + s : "?userId=" + s;
            this.ModalDialog.ShowUrl(e, 400, 445, StolenTech.Util.Language.getEntry("545"));
            break;
        case"NewGroup":
            i = t ? t : this.TreeView.selectedNode;
            o = this.ModalDialog.ShowUrl("groupdialog.php", 400, 500, StolenTech.Util.Language.getEntry("540"));
            o.targetTreeNode = i;
            break;
        case"RefreshGroups":
            i = t ? t : this.TreeView.selectedNode;
            i.Select();
            this.GetGroups(i);
            break;
        case"DeleteGroup":
            i = this.TreeView.selectedNode;
            r = t;
            c = r.groupId;
            f = r.GetCellValue(this.GridView.columns.Name);
            confirm(StolenTech.Util.Language.getEntry("548", f)) && this.DeleteGroup(i, c);
            break;
        case"RenameGroup":
            i = this.TreeView.selectedNode;
            r = t;
            c = r.groupId;
            f = r.GetCellValue(this.GridView.columns.Name);
            this.ModalDialog.Prompt(StolenTech.Util.Language.getEntry("549"), f, function (n) {
                n && y.RenameGroup(i, c, n)
            }, function (n) {
                return n = StolenTech.JavaScript.Util.Trim(n), n == "" || n == f ? !1 : !0
            });
            break;
        case"PropertiesOfGroup":
            r = t;
            c = r.groupId;
            this.ModalDialog.ShowUrl("groupdialog.php?groupId=" + c, 400, 500, StolenTech.Util.Language.getEntry("546"));
            break;
        case"NewRootFolder":
            i = t ? t : this.TreeView.selectedNode;
            o = this.ModalDialog.ShowUrl("rootfolderdialog.php", 800, 540, StolenTech.Util.Language.getEntry("541"));
            o.targetTreeNode = i;
            break;
        case"RefreshRootFolders":
            i = t ? t : this.TreeView.selectedNode;
            i.Select();
            this.GetRootFolders(i);
            break;
        case"DeleteRootFolder":
            i = this.TreeView.selectedNode;
            r = t;
            h = r.rootFolderId;
            f = r.GetCellValue(this.GridView.columns.Name);
            confirm(StolenTech.Util.Language.getEntry("548", f)) && this.DeleteRootFolder(i, h);
            break;
        case"RenameRootFolder":
            i = this.TreeView.selectedNode;
            r = t;
            h = r.rootFolderId;
            f = r.GetCellValue(this.GridView.columns.Name);
            this.ModalDialog.Prompt(StolenTech.Util.Language.getEntry("549"), f, function (n) {
                n && y.RenameRootFolder(i, h, n)
            }, function (n) {
                return n = StolenTech.JavaScript.Util.Trim(n), n == "" || n == f ? !1 : !0
            });
            break;
        case"PropertiesOfRootFolder":
            i = this.TreeView.selectedNode;
            r = t;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            h = r.rootFolderId;
            e = "rootfolderdialog.php";
            e += u ? "?groupId=" + u + "&rootFolderId=" + h : "?rootFolderId=" + h;
            this.ModalDialog.ShowUrl(e, 800, 540, StolenTech.Util.Language.getEntry("547"));
            break;
        case"FilterEvents":
            i = t ? t : this.TreeView.selectedNode;
            o = this.ModalDialog.ShowUrl("eventfilterdialog.php", 330, 350, StolenTech.Util.Language.getEntry("645"));
            o.targetTreeNode = i;
            break;
        case"RefreshEvents":
            i = t ? t : this.TreeView.selectedNode;
            i.Select();
            this.GetEvents(i);
            break;
        case"PropertiesOfEvent":
            i = this.TreeView.selectedNode;
            r = t;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            v = r.eventId;
            e = "eventdialog.php";
            e += u ? "?groupId=" + u + "&eventId=" + v : "?eventId=" + v;
            this.ModalDialog.ShowUrl(e, 400, 300, StolenTech.Util.Language.getEntry("646"));
            break;
        case"RefreshPublicLinks":
            i = t ? t : this.TreeView.selectedNode;
            i.Select();
            this.GetPublicLinks(i);
            break;
        case"DeletePublicLink":
            i = this.TreeView.selectedNode;
            r = t;
            u = i.parent.type == StolenTech.myExplorer.AdministrationPageTreeNodeType.ManagedGroup ? i.parent.groupId : null;
            l = r.publicLinkId;
            f = r.GetCellValue(this.GridView.columns.Name);
            confirm(StolenTech.Util.Language.getEntry("548", f)) && this.DeletePublicLink(i, l, u);
            break;
        case"PropertiesOfPublicLink":
            r = t;
            l = r.publicLinkId;
            e = "publiclinkdialog.php?publicLinkId=" + l;
            this.ModalDialog.ShowUrl(e, 400, 460, StolenTech.Util.Language.getEntry("Label.EditPublicLink"))
    }
};
StolenTech.myExplorer.AdministrationPageToolBarData = {
    "ToolBar": {
        "Item": [{
            "action": "FolderBrowsing",
            "description": "530",
            "image": "back.png"
        }, {"action": "[Separator]", "permission": "Administrator"}, {
            "action": "Settings",
            "description": "636",
            "image": "settings.png",
            "permission": "Administrator"
        }, {
            "action": "License",
            "description": "531",
            "image": "license.png",
            "permission": "Administrator"
        }, {"action": "About", "description": "Label.About", "image": "about.png", "permission": "Administrator"}]
    }
};

StolenTech.myExplorer.AdministrationPageContextMenusData = {
    "ContextMenus": {
        "ContextMenu": [{
            "Item": [{"action": "NewUser", "icon": "user.png", "text": "533"}, {
                "action": "ImportUsers",
                "icon": "importusers.png",
                "text": "Label.ImportUsers"
            }, {"action": "[Separator]"}, {"action": "RefreshUsers", "icon": "refresh.png", "text": "534"}],
            "Name": "UsersMain"
        }, {
            "Item": [{"action": "DeleteUser", "icon": "delete.png", "text": "537"}, {
                "action": "RenameUser",
                "icon": "rename.png",
                "text": "538"
            }, {"action": "[Separator]"}, {"action": "PropertiesOfUser", "isDefault": "yes", "text": "539"}],
            "Name": "UserGridRow"
        }, {
            "Item": {"action": "DeleteUsers", "icon": "delete.png", "text": "537"},
            "Name": "UserGridRows"
        }, {
            "Item": [{
                "action": "NewGroup",
                "icon": "group.png",
                "text": "540"
            }, {"action": "[Separator]"}, {"action": "RefreshGroups", "icon": "refresh.png", "text": "534"}],
            "Name": "GroupsMain"
        }, {
            "Item": [{"action": "DeleteGroup", "icon": "delete.png", "text": "537"}, {
                "action": "RenameGroup",
                "icon": "rename.png",
                "text": "538"
            }, {"action": "[Separator]"}, {"action": "PropertiesOfGroup", "isDefault": "yes", "text": "539"}],
            "Name": "GroupGridRow"
        }, {
            "Item": [{
                "action": "NewRootFolder",
                "icon": "rootfolder.png",
                "text": "541"
            }, {"action": "[Separator]"}, {"action": "RefreshRootFolders", "icon": "refresh.png", "text": "534"}],
            "Name": "RootFoldersMain"
        }, {
            "Item": [{"action": "DeleteRootFolder", "icon": "delete.png", "text": "537"}, {
                "action": "RenameRootFolder",
                "icon": "rename.png",
                "text": "538"
            }, {"action": "[Separator]"}, {"action": "PropertiesOfRootFolder", "isDefault": "yes", "text": "539"}],
            "Name": "RootFolderGridRow"
        }, {
            "Item": [{
                "action": "FilterEvents",
                "icon": "filter.png",
                "text": "645"
            }, {"action": "[Separator]"}, {"action": "RefreshEvents", "icon": "refresh.png", "text": "534"}],
            "Name": "EventsMain"
        }, {
            "Item": {"action": "PropertiesOfEvent", "isDefault": "yes", "text": "539"},
            "Name": "EventGridRow"
        }, {
            "Item": {"action": "RefreshPublicLinks", "icon": "refresh.png", "text": "534"},
            "Name": "PublicLinksMain"
        }, {
            "Item": [{
                "action": "DeletePublicLink",
                "icon": "delete.png",
                "text": "537"
            }, {"action": "[Separator]"}, {"action": "PropertiesOfPublicLink", "isDefault": "yes", "text": "539"}],
            "Name": "PublicLinkGridRow"
        }, {
            "Item": [{"action": "Expand", "text": "Label.Expand"}, {"action": "Collapse", "text": "Label.Collapse"}],
            "Name": "ManagedGroup"
        }]
    }
};
