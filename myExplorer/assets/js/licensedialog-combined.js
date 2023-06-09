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

function onRadioButtonLicenseModeClick() {
    var n = document.getElementById("RadioButtonPurchasedLicenseMode").checked;
    n || (document.getElementById("divLicenseKey").className = "disabled", enableElement("CheckBoxApplyLicenseKey", !1, !0));
    onCheckBoxApplyLicenseKeyClick()
}

function onCheckBoxApplyLicenseKeyClick() {
    var n = document.getElementById("RadioButtonPurchasedLicenseMode").checked && document.getElementById("CheckBoxApplyLicenseKey").checked;
    enableElement("LicenseKey", n, "", n)
}

StolenTech.JavaScript.Util.OnDomReady(function () {
    var n = document.getElementById("OnLoadCommand").value;
    switch (n) {
        case"Redirect":
            parent.window.location.href = "./";
            return;
        case"Close":
            elementDialog.close();
            return
    }
    onRadioButtonLicenseModeClick();
    n == "Message" && showClientMessage()
});