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

function showClientMessage(n) {
    var t = document.getElementById("ClientMessage");
    return n ? confirm(t.value) : (alert(t.value), !0)
}

function enableElement(n, t, i, r) {
    var u = n.nodeType ? n : document.getElementById(n);
    return (u.disabled = !t, r) ? u : (u.type == "text" || u.type == "password" ? u.value = i != null ? i : "" : u.type == "checkbox" || u.type == "radio" ? u.checked = i != null ? i : !1 : u.type == "select-one" && (u.selectedIndex = i != null ? i : -1), u)
}

function onRequestJsonError(n) {
    n.Message.indexOf("SessionExpiredOrUserNotFound") != -1 ? parent && StolenTech.JavaScript.Util.RefreshPage(parent) : alert(n.ImportantMessage || n.Message)
}

function cloneNodeToWindow(n, t) {
    var u = document.getElementById(n), i, f, e, r;
    return u ? (i = t.document.getElementById(n), i && t.document.body.removeChild(i), f = u.outerHTML, f ? (e = t.document.createDocumentFragment(), r = t.document.createElement("div"), e.appendChild(r), r.innerHTML = f, i = r.firstChild, t.document.body.appendChild(i)) : (i = u.cloneNode(!0), t.document.body.appendChild(i)), i) : null
}

var elementDialog = frameElement ? frameElement.parentNode.parentNode : null;
var StolenTech = StolenTech || {};
StolenTech.myExplorer = StolenTech.myExplorer || {};
StolenTech.myExplorer.ManagePublicLinksDialogMinimumWidth = 400;
StolenTech.myExplorer.ManagePublicLinksDialogMinimumHeight = 200;
StolenTech.myExplorer.ManagePublicLinksDialogCssClass = "gt-nonSelectableText";
StolenTech.myExplorer.ManagePublicLinksDialogInfoPaneCssClass = "gt-infoPane";
StolenTech.myExplorer.ManagePublicLinksDialogInfoPaneTitleCssClass = "gt-infoPaneTitle";
StolenTech.myExplorer.ManagePublicLinksDialogWarningTextCssClass = "gt-warningText";
StolenTech.myExplorer.ManagePublicLinksDialogPublicLinksGridColumnType = {
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
StolenTech.myExplorer.ManagePublicLinksDialog = function (n) {
    var i, u, t, r;
    if (StolenTech.JavaScript.Util.GetIEVersion() < 7) {
        alert("myExplorer requires Internet Explorer 7 as a minimum.\nPlease upgrade your IE version or use another browser.");
        return
    }
    this.Parameters = n;
    i = this;
    this.ElementControl = document.createElement("div");
    this.ElementControl.id = this.Parameters.ElementId;
    this.ElementControl.className = StolenTech.myExplorer.ManagePublicLinksDialogCssClass;
    this.ElementControl.style.height = "1px";
    this.ElementControl.style.webkitTouchCallout = "none";
    this.ElementControl.style.webkitUserSelect = "none";
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "contextmenu", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "selectstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    StolenTech.JavaScript.Util.AddEvent(this.ElementControl, "dragstart", StolenTech.JavaScript.Util.CancelEventExceptForTextInput);
    document.body.appendChild(this.ElementControl);
    this.ElementControl.style.position = "absolute";
    this.ElementInfoPane = document.createElement("div");
    this.ElementInfoPane.id = this.Parameters.ElementId + "-infoPane";
    this.ElementInfoPane.className = StolenTech.myExplorer.ManagePublicLinksDialogInfoPaneCssClass;
    this.ElementInfoPane.style.height = "48px";
    this.ElementInfoPane.style.paddingLeft = "6px";
    this.ElementInfoPane.style.paddingTop = "6px";
    this.ElementInfoPane.style.paddingRight = "6px";
    this.ElementInfoPane.style.paddingBottom = "6px";
    this.ElementInfoPane.style.position = "relative";
    this.ElementControl.appendChild(this.ElementInfoPane);
    this.ElementInfoPaneImage = new Image;
    this.ElementInfoPaneImage.src = this.getResourceUrl("images/icons48/publiclinks.png");
    this.ElementInfoPaneImage.style.width = "48px";
    this.ElementInfoPaneImage.style.height = "48px";
    this.ElementInfoPaneImage.style.cssFloat = "left";
    this.ElementInfoPaneImage.style.styleFloat = "left";
    this.ElementInfoPaneImage.title = StolenTech.Util.Language.getEntry("myExplorer.Label.PublicLinks");
    this.ElementInfoPane.appendChild(this.ElementInfoPaneImage);
    this.ElementInfoPaneTitle = document.createElement("div");
    this.ElementInfoPaneTitle.style.width = "250px";
    this.ElementInfoPaneTitle.style.maxHeight = "48px";
    this.ElementInfoPaneTitle.style.overflow = "hidden";
    this.ElementInfoPaneTitle.style.position = "absolute";
    this.ElementInfoPaneTitle.style.left = "60px";
    this.ElementInfoPaneTitle.className = StolenTech.myExplorer.ManagePublicLinksDialogInfoPaneTitleCssClass;
    this.ElementInfoPaneTitle.title = this.ElementInfoPaneImage.title;
    this.ElementInfoPaneTitle.appendChild(document.createTextNode(this.ElementInfoPaneTitle.title));
    this.ElementInfoPane.appendChild(this.ElementInfoPaneTitle);
    this.ElementInfoPaneStats = document.createElement("div");
    this.ElementInfoPaneStats.style.width = "150px";
    this.ElementInfoPaneStats.style.maxHeight = "48px";
    this.ElementInfoPaneStats.style.position = "absolute";
    this.ElementInfoPaneStats.style.left = "310px";
    this.ElementInfoPaneStats.appendChild(document.createTextNode(String.fromCharCode(160)));
    this.ElementInfoPane.appendChild(this.ElementInfoPaneStats);
    this.BusyCount = 0;
    this.ElementBusyImage = new Image;
    this.ElementBusyImage.src = this.getResourceUrl("images/loader.gif");
    this.ElementBusyImage.style.visibility = "hidden";
    this.ElementBusyImage.style.width = "16px";
    this.ElementBusyImage.style.height = "11px";
    this.ElementBusyImage.style.cssFloat = "right";
    this.ElementBusyImage.style.styleFloat = "right";
    this.ElementBusyImage.style.marginRight = "10px";
    this.ElementBusyImage.style.marginTop = "19px";
    this.ElementInfoPane.appendChild(this.ElementBusyImage);
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
    for (u in StolenTech.myExplorer.ManagePublicLinksDialogPublicLinksGridColumnType) t = StolenTech.myExplorer.ManagePublicLinksDialogPublicLinksGridColumnType[u], r = this.GridView.AddColumn(u, StolenTech.Util.Language.getEntry(t.Text), t.Type, t.AlignRight, null, t.Size), r.hidden = t.Hidden, t.TitleColumn && (this.GridView.rowTitleColumn = r), t.DefaultSortColumn && (this.GridView.sortColumn = r), t.Descending && (this.GridView.sortDescending = !0);
    this.GridView.Render(this.Parameters.ElementId + "-gridView", this.ElementControl);
    this.ElementWarning = document.createElement("div");
    this.ElementWarning.className = StolenTech.myExplorer.ManagePublicLinksDialogWarningTextCssClass;
    this.ElementWarning.style.display = "none";
    this.ElementWarning.style.position = "absolute";
    this.ElementWarning.style.width = "100%";
    this.ElementWarning.style.top = "45px";
    this.ElementWarning.style.textAlign = "center";
    this.ElementWarning.appendChild(document.createTextNode(String.fromCharCode(160)));
    this.GridView.divElement.appendChild(this.ElementWarning);
    this.ElementFooter = document.createElement("div");
    this.ElementFooter.id = this.Parameters.ElementId + "-footer";
    this.ElementFooter.style.position = "relative";
    this.ElementFooter.style.paddingTop = "10px";
    this.ElementFooter.style.paddingLeft = "6px";
    this.ElementFooter.style.paddingBottom = "10px";
    this.ElementFooter.style.paddingRight = "6px";
    this.ElementControl.appendChild(this.ElementFooter);
    this.ButtonClose = document.createElement("input");
    this.ButtonClose.type = "button";
    this.ButtonClose.value = StolenTech.Util.Language.getEntry("Label.Close");
    this.ButtonClose.style.width = "80px";
    this.ButtonClose.style.cssFloat = "right";
    this.ButtonClose.style.styleFloat = "right";
    this.ElementFooter.appendChild(this.ButtonClose);
    this.ElementFooter.style.height = this.ButtonClose.offsetHeight + "px";
    StolenTech.JavaScript.Util.AddEvent(this.ButtonClose, "click", function () {
        elementDialog.close()
    });
    StolenTech.JavaScript.UI.ContextMenuIconsPath["default"] = this.getResourceUrl("images/icons16/");
    this.ContextMenus = StolenTech.JavaScript.UI.ContextMenu.Parse(this.ElementControl, StolenTech.myExplorer.ManagePublicLinksDialogContextMenusData, function (n) {
        i.onAction(n, n.menu.target)
    }, StolenTech.Util.Language);
    this.resize();
    this.onGetPublicLinksSuccess(this.Parameters)
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.getResourceUrl = function (n) {
    return this.Parameters.ResourceBasePath + n
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.getFileUltimateResourceUrl = function (n) {
    return this.Parameters.FileUltimateResourceBasePath + n
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.getActionUrl = function (n) {
    return this.Parameters.ActionBasePath + n
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.SetSize = function (n, t) {
    var r, u, i = this;
    return StolenTech.JavaScript.Util.EnsureDisplay(this.ElementControl, function (f) {
        n ? (f.style.width = n, f.style.width = f.offsetWidth < StolenTech.myExplorer.ManagePublicLinksDialogMinimumWidth ? StolenTech.myExplorer.ManagePublicLinksDialogMinimumWidth - (f.offsetWidth - f.clientWidth) + "px" : f.clientWidth - (f.offsetWidth - f.clientWidth) + "px") : f.offsetWidth < StolenTech.myExplorer.ManagePublicLinksDialogMinimumWidth && (f.style.width = StolenTech.myExplorer.ManagePublicLinksDialogMinimumWidth - (f.offsetWidth - f.clientWidth) + "px");
        t ? (f.style.height = t, f.style.height = f.offsetHeight < StolenTech.myExplorer.ManagePublicLinksDialogMinimumHeight ? StolenTech.myExplorer.ManagePublicLinksDialogMinimumHeight - (f.offsetHeight - f.clientHeight) + "px" : f.clientHeight - (f.offsetHeight - f.clientHeight) + "px") : f.offsetHeight < StolenTech.myExplorer.ManagePublicLinksDialogMinimumHeight && (f.style.height = StolenTech.myExplorer.ManagePublicLinksDialogMinimumHeight - (f.offsetHeight - f.clientHeight) + "px");
        r = f.clientWidth;
        u = f.clientHeight;
        i.ElementInfoPaneTitle.style.top = (i.ElementInfoPane.clientHeight - i.ElementInfoPaneTitle.offsetHeight) / 2 + "px";
        i.ElementInfoPaneStats.style.top = (i.ElementInfoPane.clientHeight - i.ElementInfoPaneStats.offsetHeight) / 2 + "px";
        i.GridView.Resize(r, u - i.ElementInfoPane.offsetHeight - i.ElementFooter.offsetHeight)
    }), [r, u]
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.resize = function () {
    var n = StolenTech.JavaScript.Util.Viewport.GetScrollLeft(), t = StolenTech.JavaScript.Util.Viewport.GetScrollTop(),
        i = StolenTech.JavaScript.Util.Viewport.GetWidth(), r = StolenTech.JavaScript.Util.Viewport.GetHeight();
    this.Parameters.ViewportLeftMargin && (n += this.Parameters.ViewportLeftMargin, i -= this.Parameters.ViewportLeftMargin);
    this.Parameters.ViewportTopMargin && (t += this.Parameters.ViewportTopMargin, r -= this.Parameters.ViewportTopMargin);
    this.ElementControl.style.left = n + "px";
    this.ElementControl.style.top = t + "px";
    this.SetSize(i + "px", r + "px")
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onBusy = function (n) {
    n ? this.BusyCount++ : this.BusyCount--;
    this.ElementBusyImage.style.visibility = this.BusyCount > 0 ? "inherit" : "hidden"
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onRequestJsonError = function (n) {
    n.Message.indexOf("SessionExpiredOrUserNotFound") != -1 ? StolenTech.JavaScript.Util.RefreshPage(parent) : alert(n.ImportantMessage || n.Message)
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onInfoPaneChange = function (n) {
    this.ElementInfoPaneStats.innerHTML = n;
    this.ElementInfoPaneStats.style.top = (this.ElementInfoPane.clientHeight - this.ElementInfoPaneStats.offsetHeight) / 2 + "px"
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onGridWarningChange = function (n, t) {
    n ? (this.ElementWarning.firstChild.nodeValue = t, this.ElementWarning.style.display = "block") : this.ElementWarning.style.display = "none"
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onGridRowDoubleClick = function (n) {
    this.onAction({action: "PropertiesOfPublicLink"}, n)
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onGridRowContextMenu = function (n, t) {
    this.GridView.selectedCount == 1 && this.ContextMenus.PublicLinkGridRow.Popup(t, n)
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onGridContextMenu = function (n) {
    this.GridView.UnSelectAllRows();
    this.ContextMenus.PublicLinksMain.Popup(n)
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.GetPublicLinks = function () {
    var n = this;
    this.onGridWarningChange(!1);
    this.GridView.RemoveAllRows();
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("GetPublicLinks"), {
        managedGroupId: null,
        rootFolderId: this.Parameters.RootFolderId,
        path: this.Parameters.Path,
        name: this.Parameters.FileName
    }, function (t) {
        n.onBusy(!1);
        n.onGetPublicLinksSuccess(t)
    }, function (t) {
        n.onBusy(!1);
        n.onRequestJsonError(t);
        n.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
    }, function () {
        n.onBusy(!1);
        n.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionUnavailable"))
    })
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onGetPublicLinksSuccess = function (n) {
    for (var t = n.PublicLinks, i = 0; i < t.length; i++) {
        var r = t[i][0], u = t[i][1], f = t[i][2], e = t[i][3], o = t[i][4], s = t[i][5], h = t[i][6], c = t[i][7],
            l = t[i][8], a = t[i][9], v = this.GridView.AddRow([u, f, e, o, s, h, c, l, a], "publiclink.png");
        v.publicLinkId = r
    }
    this.onInfoPaneChange(StolenTech.Util.Language.getEntry("myExplorer.Label.PublicLinksCount", "<b>" + t.length + "<\/b>"));
    if (this.GridView.rowsArray.length == 0) this.onGridWarningChange(!0, StolenTech.Util.Language.getEntry("myExplorer.Label.SectionEmpty"));
    this.GridView.Sort();
    this.GridView.RenderRows()
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.DeletePublicLink = function (n) {
    var t = this;
    this.onBusy(!0);
    StolenTech.JavaScript.Util.RequestJson(this.getActionUrl("DeletePublicLink"), {
        publicLinkId: n,
        managedGroupId: null
    }, function (n) {
        t.onBusy(!1);
        t.onDeletePublicLinkSuccess(n)
    }, function (n) {
        t.onBusy(!1);
        t.onRequestJsonError(n)
    }, function () {
        t.onBusy(!1)
    })
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onDeletePublicLinkSuccess = function () {
    this.GetPublicLinks()
};
StolenTech.myExplorer.ManagePublicLinksDialog.prototype.onAction = function (n, t) {
    var i, r, u, f;
    switch (n.action) {
        case"RefreshPublicLinks":
            this.GetPublicLinks();
            break;
        case"DeletePublicLink":
            i = t;
            r = i.publicLinkId;
            u = i.GetCellValue(this.GridView.columns.Name);
            confirm(StolenTech.Util.Language.getEntry("548", u)) && this.DeletePublicLink(r);
            break;
        case"PropertiesOfPublicLink":
            i = t;
            r = i.publicLinkId;
            f = "publiclinkdialog.php?publicLinkId=" + r;
            frameElement.contentWindow.parent.fileManager.createUrlWindow({
                title: StolenTech.Util.Language.getEntry("Label.EditPublicLink"),
                width: 400,
                height: 490,
                url: f
            })
    }
};
StolenTech.myExplorer.ManagePublicLinksDialogContextMenusData = {
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
