function showClientMessage(n) {
    var t = document.getElementById("ClientMessage");
    return n ? confirm(t.value) : (alert(t.value),
        !0)
}
function enableElement(n, t, i, r) {
    var u = n.nodeType ? n : document.getElementById(n);
    return (u.disabled = !t,
        r) ? u : (u.type == "text" || u.type == "password" ? u.value = i != null ? i : "" : u.type == "checkbox" || u.type == "radio" ? u.checked = i != null ? i : !1 : u.type == "select-one" && (u.selectedIndex = i != null ? i : -1),
        u)
}
function onRequestJsonError(n) {
    n.Message.indexOf("SessionExpiredOrUserNotFound") != -1 ? parent && GleamTech.JavaScript.Util.RefreshPage(parent) : alert(n.ImportantMessage || n.Message)
}
function cloneNodeToWindow(n, t) {
    var u = document.getElementById(n), i, f, e, r;
    return u ? (i = t.document.getElementById(n),
    i && t.document.body.removeChild(i),
        f = u.outerHTML,
        f ? (e = t.document.createDocumentFragment(),
            r = t.document.createElement("div"),
            e.appendChild(r),
            r.innerHTML = f,
            i = r.firstChild,
            t.document.body.appendChild(i)) : (i = u.cloneNode(!0),
            t.document.body.appendChild(i)),
        i) : null
}
var elementDialog = frameElement ? frameElement.parentNode.parentNode : null;
