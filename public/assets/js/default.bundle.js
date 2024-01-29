Ext.define("StolenTech.myExplorer.Header", {
    extend: "Ext.panel.Header",
    mixins: ["StolenTech.UI.ServerHandler", "StolenTech.UI.ActionHandler"],
    statics: {sprite: new StolenTech.UI.Sprite("headericons")},
    config: {userName: "", userFullName: "", isAdministrator: !1, isGroupManager: !1},
    constructor: function (n) {
        this.mixins.serverHandler.constructor.call(this, n);
        this.mixins.actionHandler.constructor.call(this, n);
        this.callParent(arguments)
    },
    initComponent: function () {
        this.iconCls = this.statics().sprite.getIcon("myExplorer").getIconCls();
        this.addControlActions([{
            actionName: "UserSettings",
            languageKey: "myExplorer.Action.UserSettings",
            iconName: "UserSettings"
        }, {
            actionName: "Administration",
            languageKey: "myExplorer.Action.Administration",
            iconName: "Administration"
        }, {actionName: "FolderBrowsing", languageKey: "677", iconName: "FolderBrowsing"}, {
            actionName: "Logout",
            languageKey: "myExplorer.Action.Logout",
            iconName: "Logout"
        }], this.statics().sprite);
        var n = [this.applyControlAction({}, "UserSettings", 16)];
        (this.isAdministrator || this.isGroupManager) && n.push(this.applyControlAction({}, "Administration", 16));
        n.push("-");
        n.push(this.applyControlAction({}, "Logout", 16));
        Ext.apply(this, {
            cls: "x-toolbar-default",
            items: [{
                xtype: "button",
                ui: "default-toolbar",
                focusable: !1,
                iconCls: this.statics().sprite.getIcon("UserProfile").getIconCls(),
                text: Ext.String.trim(this.userFullName) ? this.userFullName : this.userName,
                tooltip: StolenTech.Util.Language.getEntry("myExplorer.Label.LoggedInAs", this.userName),
                menu: n
            }]
        });
        this.callParent()
    },
    onActionUserSettings: function () {
        this.ownerCt.createUrlWindow({
            title: StolenTech.Util.Language.getEntry("myExplorer.Action.UserSettings"),
            width: 400,
            height: 260,
            url: "usersettingsdialog.php"
        })
    },
    onActionAdministration: function () {
        window.location.href = "administration.php"
    },
    onActionFolderBrowsing: function () {
        window.location.href = "./"
    },
    onActionLogout: function () {
        this.callServerHandlerMethod({
            name: "Logout", parameters: {}, callback: function (n, t) {
                t || (window.location.href = "login.php")
            }, scope: this
        })
    }
});

function fileManagerLoading(n) {
    var t = n;
    StolenTech.FileUltimate.FileManagerPermissionTypes.CreatePublicLink = 1073741824;
    Ext.override(t, {
        createUrlWindow: function (n) {
            this.createChildWindow(Ext.apply({
                childWindowId: "url-" + n.url,
                modal: !0,
                resizable: !0,
                maximizable: !1,
                minimizable: !1,
                items: {
                    xclass: "StolenTech.UI.IFrame", src: n.url, listeners: {
                        ready: function (n) {
                            var i = n.ownerCt, t = n.getFrame().parentNode.parentNode;
                            t.close = function () {
                                i.close()
                            };
                            i.on("beforeclose", function () {
                                return t.onClose ? t.onClose() : !0
                            })
                        }, scope: this
                    }
                }
            }, n))
        }, createViewItemContextMenu: function () {
            var n = this.callParent();
            return n.insert(n.items.findIndex("itemId", "Upload") + 1, [this.applyControlAction({showConditions: {itemTypes: {File: {parentPermissions: ["CreatePublicLink"]}}}}, "CreatePublicLink", 16), this.applyControlAction({showConditions: {itemTypes: {File: {parentPermissions: ["CreatePublicLink"]}}}}, "ManagePublicLinks", 16)]), n
        }, createNavigationViewItemContextMenu: function () {
            var n = this.callParent();
            return n.insert(n.items.findIndex("itemId", "Upload") + 1, [this.applyControlAction({showConditions: {itemTypes: {File: {parentPermissions: ["CreatePublicLink"]}}}}, "CreatePublicLink", 16), this.applyControlAction({showConditions: {itemTypes: {File: {parentPermissions: ["CreatePublicLink"]}}}}, "ManagePublicLinks", 16)]), n
        }, onActionCreatePublicLink: function (n, t, i) {
            var r, u, f;
            switch (i) {
                case StolenTech.UI.ExplorerViewActionContext.NavigationViewItem:
                    r = this.contextMenuSelection.parentNode;
                    u = this.contextMenuSelection;
                    break;
                case StolenTech.UI.ExplorerViewActionContext.View:
                    r = this.navigationSelection;
                    u = this.viewSelection[0];
                    break;
                case StolenTech.UI.ExplorerViewActionContext.ViewItem:
                    r = this.navigationSelection;
                    u = this.contextMenuSelection;
                    break;
                default:
                    return
            }
            f = "publiclinkdialog.php?";
            f += Ext.Object.toQueryString({
                stateId: this.stateId,
                path: r.getPathData().fullPath,
                fileName: u.data.name
            });
            this.createUrlWindow({
                title: StolenTech.Util.Language.getEntry("Label.NewPublicLink"),
                width: 400,
                height: 490,
                url: f
            })
        }, onActionManagePublicLinks: function (n, t, i) {
            var u, r, f;
            switch (i) {
                case StolenTech.UI.ExplorerViewActionContext.NavigationViewItem:
                    u = this.contextMenuSelection.parentNode;
                    r = this.contextMenuSelection;
                    break;
                case StolenTech.UI.ExplorerViewActionContext.View:
                    u = this.navigationSelection;
                    r = this.viewSelection[0];
                    break;
                case StolenTech.UI.ExplorerViewActionContext.ViewItem:
                    u = this.navigationSelection;
                    r = this.contextMenuSelection;
                    break;
                default:
                    return
            }
            f = "managepubliclinksdialog.php?";
            f += Ext.Object.toQueryString({
                stateId: this.stateId,
                path: u.getPathData().fullPath,
                fileName: r.data.name
            });
            this.createUrlWindow({
                title: StolenTech.Util.Language.getEntry("Label.PublicLinksFor", r.data.name),
                width: 750,
                height: 530,
                url: f
            })
        }
    })
}

function fileManagerLoaded(n) {
    var t = n, i;
    t.header = Ext.apply(headerConfig, {xclass: "StolenTech.myExplorer.Header"});
    t.addControlActions([{
        actionName: "CreatePublicLink",
        languageKey: "Label.CreatePublicLink",
        iconName: "CreatePublicLink"
    }, {
        actionName: "ManagePublicLinks",
        languageKey: "Label.ManagePublicLinks",
        iconName: "ManagePublicLinks"
    }], new StolenTech.UI.Sprite("headericons"));
    i = t.ribbon.items.getAt(0);
    t.ribbon.insertGroup(i, i.items.getCount() - 1, {
        itemId: "shareGroup",
        title: StolenTech.Util.Language.getEntry("Label.Share.Verb"),
        layout: "vbox",
        items: [t.applyControlAction({
            showConditions: {
                itemTypes: {
                    RootFolder: {permissions: ["CreatePublicLink"]},
                    Folder: {permissions: ["CreatePublicLink"]},
                    File: {permissions: ["CreatePublicLink"]}
                }
            }, enableConditions: {itemTypes: {File: {parentPermissions: ["CreatePublicLink"]}}}
        }, "CreatePublicLink", 16), t.applyControlAction({
            showConditions: {
                itemTypes: {
                    RootFolder: {permissions: ["CreatePublicLink"]},
                    Folder: {permissions: ["CreatePublicLink"]},
                    File: {permissions: ["CreatePublicLink"]}
                }
            }, enableConditions: {itemTypes: {File: {parentPermissions: ["CreatePublicLink"]}}}
        }, "ManagePublicLinks", 16)]
    })
}