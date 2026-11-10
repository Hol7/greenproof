module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/arbres/Status.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Status
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$arbres$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/arbres/data.ts [app-rsc] (ecmascript)");
;
;
;
const icons = {
    ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoCheckmarkCircleOutline"],
    watch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoEyeOutline"],
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoWaterOutline"],
    unknown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoTimeOutline"]
};
function Status({ state }) {
    const Icon = icons[state];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: 'tree-status tone-' + state,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/app/arbres/Status.tsx",
                lineNumber: 6,
                columnNumber: 54
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$arbres$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["statusLabels"][state]
        ]
    }, void 0, true, {
        fileName: "[project]/app/arbres/Status.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/arbres/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "statusLabels",
    ()=>statusLabels,
    "trees",
    ()=>trees
]);
const trees = [
    {
        id: "gp-001",
        image: "/arbres/gp-001.webp",
        name: "Arbre de Fifadji",
        place: "Jardin public de Fifadji · Cotonou",
        state: "ok",
        planted: "12 juin 2018",
        origin: "Pépinière municipale",
        visited: "9 novembre 2026",
        watered: "8 novembre 2026",
        soil: "Humide",
        leaves: "Normales",
        next: "Contrôle prévu le 16 novembre.",
        author: "Adoscam",
        file: "ARBRE SOLITAIRE AU (jardin public de Fifadji) à cotonou(BENIN).jpg"
    },
    {
        id: "gp-039",
        image: "/arbres/palmier-marina.webp",
        name: "Palmier d’alignement",
        place: "Boulevard de la Marina · Cotonou",
        state: "watch",
        planted: "Date inconnue",
        origin: "Provenance non renseignée",
        visited: "8 novembre 2026",
        watered: "5 novembre 2026",
        soil: "À vérifier",
        leaves: "Quelques feuilles jaunies",
        next: "Prévoir une nouvelle observation des feuilles et du sol.",
        author: "Osia ZANNOU",
        file: "Boulevard de la Marina.jpg"
    },
    {
        id: "gp-027",
        image: "/arbres/gp-027.webp",
        name: "Arbre à pain",
        place: "Cotonou · Bénin",
        state: "priority",
        planted: "3 mai 2021",
        origin: "Pépinière locale",
        visited: "10 novembre 2026",
        watered: "4 novembre 2026",
        soil: "Sec",
        leaves: "Flétries",
        next: "Vérifier l’humidité en profondeur avant de décider de l’arrosage.",
        author: "Azogbonon",
        file: "Arbre à pain (Artocarpus altilis).jpg"
    },
    {
        id: "gp-052",
        image: "/arbres/place-souvenir.webp",
        name: "Arbre du jardin",
        place: "Place du Souvenir · Cotonou",
        state: "unknown",
        planted: "Date inconnue",
        origin: "Provenance non renseignée",
        visited: "29 octobre 2026",
        watered: "Non renseigné",
        soil: "Humide au dernier passage",
        leaves: "Normales au dernier passage",
        next: "Contrôle attendu le 5 novembre. Programmer un passage pour actualiser la fiche.",
        author: "Yayitalon",
        file: "Jardin du monument cotonou.jpg"
    }
];
const statusLabels = {
    ok: "Suivi à jour",
    watch: "À surveiller",
    priority: "Contrôle prioritaire",
    unknown: "Contrôle en retard"
};
}),
"[project]/app/demo/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Demo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TreeMonitor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TreeMonitor.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$arbres$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/arbres/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$arbres$2f$Status$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/arbres/Status.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function Demo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "tree-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "tree-back",
                href: "/",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoArrowBack"], {}, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 10,
                        columnNumber: 39
                    }, this),
                    " Greenproof"
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "tree-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Scanner un arbre."
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 11,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Scannez une plaquette ou ouvrez sa fiche pour consulter le dernier relevé."
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 11,
                        columnNumber: 62
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Quatre arbres de démonstration",
                className: "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$arbres$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trees"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "qr-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: '/arbres/' + t.id,
                                className: "cover-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: t.image,
                                    alt: t.name + ' · ' + t.place,
                                    width: 400,
                                    height: 240
                                }, void 0, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 14,
                                    columnNumber: 58
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 14,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "qr-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$arbres$2f$Status$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        state: t.state
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 15,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 15,
                                        columnNumber: 59
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t.place
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 15,
                                        columnNumber: 76
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "qr-image",
                                        src: '/arbres/' + t.id + '-qr.png',
                                        width: "152",
                                        height: "152",
                                        alt: 'QR code public de ' + t.id.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "qr-caption",
                                        children: t.id.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 17,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 15,
                                columnNumber: 9
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "sector-map",
                open: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Carte du secteur de démonstration"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 20,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TreeMonitor$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 20,
                        columnNumber: 94
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/demo/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/demo/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/TreeMonitor.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/TreeMonitor.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/TreeMonitor.tsx", "default");
}),
"[project]/components/TreeMonitor.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TreeMonitor$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/TreeMonitor.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TreeMonitor$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-mib08wp9yss._.js.map