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

function setPadding(n, t) {
    var i = n.getElementsByTagName("SPAN")[0];
    i.style.paddingLeft = t + "px";
    i.style.paddingRight = t + "px"
}

function showTab(n, t) {
    var f = n + "_", e, u, r, h, i, o, s;
    if (document.getElementById("tabView" + f + t)) {
        if (activeTabIndex[n] >= 0) {
            if (activeTabIndex[n] == t) return;
            e = document.getElementById("tabTab" + f + activeTabIndex[n]);
            e.className = "tabInactive";
            e.style.backgroundImage = "url('" + tabImagesPath + "tab_left_inactive.gif')";
            r = e.getElementsByTagName("IMG")[0];
            r.src.indexOf("tab_") == -1 && (r = e.getElementsByTagName("IMG")[1]);
            r.src = tabImagesPath + "tab_right_inactive.gif";
            document.getElementById("tabView" + f + activeTabIndex[n]).style.display = "none"
        }
        for (u = document.getElementById("tabTab" + f + t), u.className = "tabActive", u.style.backgroundImage = "url('" + tabImagesPath + "tab_left_active.gif')", r = u.getElementsByTagName("IMG")[0], r.src.indexOf("tab_") == -1 && (r = u.getElementsByTagName("IMG")[1]), r.src = tabImagesPath + "tab_right_active.gif", document.getElementById("tabView" + f + t).style.display = "block", activeTabIndex[n] = t, onTabChange && onTabChange(t), h = u.parentNode, i = h.getElementsByTagName("DIV")[0], countObjects = 0, o = 2, s = !1; i;) i.tagName == "DIV" && (s && (s = !1, o -= 2), i == u ? (o -= 2, s = !0, setPadding(i, textPadding + 1)) : setPadding(i, textPadding), i.style.left = o + "px", countObjects++, o += 2), i = i.nextSibling;
        return
    }
}

function tabClick() {
    if (this.parentNode) {
        var n = this.id.split("_");
        showTab(this.parentNode.parentNode.id, n[n.length - 1].replace(/[^0-9]/gi, ""))
    }
}

function rolloverTab() {
    if (this.className.indexOf("tabInactive") >= 0) {
        this.className = "inactiveTabOver";
        this.style.backgroundImage = "url('" + tabImagesPath + "tab_left_over.gif')";
        var n = this.getElementsByTagName("IMG")[0];
        n.src.indexOf("tab_") <= 0 && (n = this.getElementsByTagName("IMG")[1]);
        n.src = tabImagesPath + "tab_right_over.gif"
    }
}

function rolloutTab() {
    if (this.className == "inactiveTabOver") {
        this.className = "tabInactive";
        this.style.backgroundImage = "url('" + tabImagesPath + "tab_left_inactive.gif')";
        var n = this.getElementsByTagName("IMG")[0];
        n.src.indexOf("tab_") <= 0 && (n = this.getElementsByTagName("IMG")[1]);
        n.src = tabImagesPath + "tab_right_inactive.gif"
    }
}

function hoverTabViewCloseButton() {
    this.src = this.src.replace("close.gif", "close_over.gif")
}

function stopHoverTabViewCloseButton() {
    this.src = this.src.replace("close_over.gif", "close.gif")
}

function renderTabPanel(n, t, i, r, u, f, e) {
    var v, y, h, c, s, w, a, l, p, o;
    for (f || (f = []), e && e != "undefined" ? (v = tabObj[n].getElementsByTagName("DIV")[0], y = tabObj[n].getElementsByTagName("DIV")[1], u = tabViewHeight[n], i = tabView_countTabs[n]) : (tabObj[n] = document.getElementById(n), r = r + "", r.indexOf("%") < 0 && (r = r + "px"), tabObj[n].style.width = r, u = u + "", u.length > 0 && (u.indexOf("%") < 0 && (u = u + "px"), tabObj[n].style.height = u), tabViewHeight[n] = u, v = document.createElement("DIV"), y = tabObj[n].getElementsByTagName("DIV")[0], tabObj[n].insertBefore(v, y), v.className = "tabPanel", tabView_countTabs[n] = 0), o = 0; o < t.length; o++) h = document.createElement("DIV"), h.id = "tabTab" + n + "_" + (o + tabView_countTabs[n]), h.onmouseover = rolloverTab, h.onmouseout = rolloutTab, h.onclick = tabClick, h.className = "tabInactive", h.style.backgroundImage = "url('" + tabImagesPath + "tab_left_inactive.gif')", v.appendChild(h), c = document.createElement("SPAN"), c.innerHTML = t[o], c.style.position = "relative", h.appendChild(c), f[o] && (s = document.createElement("IMG"), s.src = tabImagesPath + "close.gif", s.height = closeImageHeight + "px", s.width = closeImageHeight + "px", s.setAttribute("height", closeImageHeight), s.setAttribute("width", closeImageHeight), s.style.position = "absolute", s.style.top = "6px", s.style.right = "0px", s.onmouseover = hoverTabViewCloseButton, s.onmouseout = stopHoverTabViewCloseButton, c.innerHTML = c.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", w = c.innerHTML + "", s.onclick = function () {
        deleteTab(this.parentNode.innerHTML)
    }, c.appendChild(s)), a = document.createElement("IMG"), a.valign = "bottom", a.src = tabImagesPath + "tab_right_inactive.gif", (navigatorVersion && navigatorVersion < 6 || MSIE && !strictDocType) && (a.style.styleFloat = "none", a.style.position = "relative", a.style.top = "4px", c.style.paddingTop = "4px", h.style.cursor = "default"), h.appendChild(a);
    for (l = tabObj[n].getElementsByTagName("DIV"), p = 0, o = 0; o < l.length; o++) l[o].className == "tab" && l[o].parentNode.id == n && (u.length > 0 && (l[o].style.height = tabObj[n].offsetHeight - v.offsetHeight - 11 + "px"), l[o].style.width = tabObj[n].offsetWidth - 12 + "px", l[o].style.display = "none", l[o].id = "tabView" + n + "_" + p, p++);
    return tabView_countTabs[n] = tabView_countTabs[n] + t.length, showTab(n, i), i
}

function showAjaxTabContent(n, t, i) {
    var r = document.getElementById("tabView" + t + "_" + i);
    r.innerHTML = ajaxObjects[n].response
}

function resetTabIds(n) {
    for (var u = 0, r = 0, i = tabObj[n].getElementsByTagName("DIV"), t = 0; t < i.length; t++) i[t].className == "tab" && (i[t].id = "tabView" + n + "_" + u, u++), i[t].id.indexOf("tabTab") >= 0 && (i[t].id = "tabTab" + n + "_" + r, r++);
    tabView_countTabs[n] = r
}

function createNewTab(n, t, i, r, u) {
    var e, o, f;
    tabView_countTabs[n] >= tabView_maxNumberOfTabs || (e = document.createElement("DIV"), e.className = "tab", tabObj[n].appendChild(e), o = renderTabPanel(n, Array(t), 0, "", "", Array(u), !0), i && (e.innerHTML = i), r && (f = ajaxObjects.length, ajaxObjects[f] = new sack, ajaxObjects[f].requestFile = r, ajaxObjects[f].onCompletion = function () {
        showAjaxTabContent(f, n, o)
    }, ajaxObjects[f].runAJAX()))
}

function getTabIndexByTitle(n) {
    var f = new RegExp("(.*?)&nbsp.*$", "gi"), r, i, t, u;
    n = n.replace(f, "$1");
    for (r in tabObj) for (i = tabObj[r].getElementsByTagName("DIV"), t = 0; t < i.length; t++) if (i[t].id.indexOf("tabTab") >= 0) {
        var e = i[t].getElementsByTagName("SPAN")[0], o = new RegExp("(.*?)&nbsp.*$", "gi"),
            s = e.innerHTML.replace(o, "$1");
        if (s == n) return u = i[t].id.split("_"), Array(r, u[u.length - 1].replace(/[^0-9]/g, "") / 1)
    }
    return -1
}

function addAjaxContentToTab(n, t) {
    var r = getTabIndexByTitle(n), i;
    r != -1 && (i = ajaxObjects.length, tabId = r[1], parentId = r[0], ajaxObjects[i] = new sack, ajaxObjects[i].requestFile = t, ajaxObjects[i].onCompletion = function () {
        showAjaxTabContent(i, parentId, tabId)
    }, ajaxObjects[i].runAJAX())
}

function deleteTab(n, t, i) {
    var r, u, e, f;
    n ? (r = getTabIndexByTitle(n), r != -1 && deleteTab(!1, r[1], r[0])) : t >= 0 && document.getElementById("tabTab" + i + "_" + t) && (u = document.getElementById("tabTab" + i + "_" + t), e = u.parentNode.parentNode.id, u.parentNode.removeChild(u), f = document.getElementById("tabView" + i + "_" + t), f.parentNode.removeChild(f), resetTabIds(i), activeTabIndex[i] = -1, showTab(i, "0"))
}

var tabImagesPath = "", onTabChange = null, textPadding = 3, strictDocType = !0, tabView_maxNumberOfTabs = 6,
    tabObj = [], activeTabIndex = [], MSIE = navigator.userAgent.indexOf("MSIE") >= 0 ? !0 : !1,
    regExp = new RegExp(".*MSIE ([0-9].[0-9]).*", "g"), navigatorVersion = navigator.userAgent.replace(regExp, "$1"),
    ajaxObjects = [], tabView_countTabs = [], tabViewHeight = [], tabDivCounter = 0, closeImageHeight = 8,
    closeImageWidth = 8;

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

function initEventCheckBoxes() {
    var n, t, i;
    for (n in eventTypes) t = eventTypes[n], i = document.getElementById("EventCheckBox." + n), i.checked = (selectedEventTypes & t) == t;
    onEventSetCheckBoxChange()
}

function onEventSetCheckBoxClick(n) {
    var u = n.id.split("."), f = u[1], e = eventSetTypes[f], i, t, r;
    for (i in eventTypes) (t = eventTypes[i], (e & t) == t) && (r = document.getElementById("EventCheckBox." + i), r.checked = n.checked, onEventCheckBoxChange(r, t))
}

function onEventSetCheckBoxChange() {
    var n, t, i;
    for (n in eventSetTypes) t = eventSetTypes[n], i = document.getElementById("EventSetCheckBox." + n), i.checked = (selectedEventTypes & t) == t
}

function onEventCheckBoxClick(n) {
    var t = n.id.split("."), i = t[1], r = eventTypes[i];
    onEventCheckBoxChange(n, r);
    onEventSetCheckBoxChange()
}

function onEventCheckBoxChange(n, t) {
    n.checked ? selectedEventTypes |= t : selectedEventTypes &= ~t
}

var eventSetTypes, eventTypes, selectedEventTypes;

function checkBoxBaseUrlClick(n) {
    enableElement("DropDownBaseUrl", n, "", !0);
    enableElement("TextBoxBaseUrl", n, "", !0)
}

function onSubmit() {
    document.getElementById("FieldLogSize").value = document.getElementById("TextBoxLogSize").value;
    document.getElementById("FieldLogClearDays").value = document.getElementById("TextBoxLogClearDays").value;
    document.getElementById("FieldMaxPasswordAge").value = document.getElementById("TextBoxMaxPasswordAge").value;
    document.getElementById("FieldMaxAttempts").value = document.getElementById("TextBoxMaxAttempts").value;
    document.getElementById("FieldMaxPublicLinkAge").value = document.getElementById("TextBoxMaxPublicLinkAge").value;
    document.getElementById("FieldMaxPublicLinkHits").value = document.getElementById("TextBoxMaxPublicLinkHits").value;
    document.getElementById("SelectedEventTypes").value = selectedEventTypes
}

function onClearLog() {
    return confirm(document.getElementById("ConfirmMessage").value)
}

function onEmailDeliveryChange(n) {
    switch (n.selectedIndex) {
        case 0:
            document.getElementById("SpecifiedPickupSettingsTable").style.display = "none";
            document.getElementById("SmtpServerSettingsTable").style.display = "";
            break;
        case 1:
            document.getElementById("SmtpServerSettingsTable").style.display = "none";
            document.getElementById("SpecifiedPickupSettingsTable").style.display = "";
            break;
        case 2:
            document.getElementById("SmtpServerSettingsTable").style.display = "none";
            document.getElementById("SpecifiedPickupSettingsTable").style.display = "none"
    }
}

function onSmtpAuthenticationChange(n) {
    n.disabled || n.selectedIndex != 2 ? (document.getElementById("LabelSmtpUserName").className = "disabled", document.getElementById("TextboxSmtpUserName").disabled = !0, document.getElementById("LabelSmtpPassword").className = "disabled", document.getElementById("TextboxSmtpPassword").disabled = !0) : (document.getElementById("LabelSmtpUserName").className = "", document.getElementById("TextboxSmtpUserName").disabled = !1, document.getElementById("LabelSmtpPassword").className = "", document.getElementById("TextboxSmtpPassword").disabled = !1)
}

function getResourceUrl(n) {
    return document.getElementById("form1").ResourceBasePath.value + n
}

function onListBoxUploadMethodChange(n) {
    document.getElementById("MoveUpButton").disabled = n.selectedIndex < 1;
    document.getElementById("MoveDownButton").disabled = n.selectedIndex == -1 || n.selectedIndex > n.length - 2
}

function onUploadMethodMoveUp() {
    var n = document.getElementById("ListBoxUploadMethod");
    swapListBoxOption(n, n.selectedIndex, n.selectedIndex - 1);
    onListBoxUploadMethodChange(n);
    saveUploadMethods(n)
}

function onUploadMethodMoveDown() {
    var n = document.getElementById("ListBoxUploadMethod");
    swapListBoxOption(n, n.selectedIndex, n.selectedIndex + 1);
    onListBoxUploadMethodChange(n);
    saveUploadMethods(n)
}

function swapListBoxOption(n, t, i) {
    var r = n.options[t].text, u = n.options[t].value;
    n.options[t].text = n.options[i].text;
    n.options[t].value = n.options[i].value;
    n.options[i].text = r;
    n.options[i].value = u;
    n.options[i].selected = !0
}

function saveUploadMethods(n) {
    for (var i = [], t = 0; t < n.options.length; t++) i.push(n.options[t].value);
    document.getElementById("UploadMethods").value = i.join()
}

StolenTech.JavaScript.Util.OnDomReady(function () {
    var n = document.getElementById("OnLoadCommand").value;
    switch (n) {
        case"Close":
            elementDialog.close();
            return
    }
    tabImagesPath = getResourceUrl("images/tabpanel/");
    onTabChange = function (n) {
        document.getElementById("ActiveTab").value = n
    };
    renderTabPanel("tabPanel", Array(document.getElementById("TextGeneral").value, document.getElementById("TextFolderBrowsing").value, document.getElementById("TextLogging").value, document.getElementById("TextEmail").value), document.getElementById("ActiveTab").value, "100%", "470", Array(!1, !1, !1, !1));
    document.getElementById("CheckBoxBaseUrl").checked || checkBoxBaseUrlClick(!1);
    selectedEventTypes = document.getElementById("SelectedEventTypes").value;
    initEventCheckBoxes();
    onEmailDeliveryChange(document.getElementById("DropDownEmailDeliveryMethod"));
    onSmtpAuthenticationChange(document.getElementById("DropDownSmtpAuthentication"));
    n == "Message" && showClientMessage()
});