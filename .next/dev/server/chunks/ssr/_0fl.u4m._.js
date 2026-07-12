module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Hero'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Marquee'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Intro'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/MediaBreak'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/UnitsSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Modalities'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Gallery'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Partners'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/VIP'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const UNITS = [
    {
        id: 1,
        name: "Guadalajara",
        address: "Rua Araré, 641",
        district: "Guadalajara",
        search: "01 guadalajara rua arare"
    },
    {
        id: 2,
        name: "Potira",
        address: "Rua Padre Alfredo Nesi, 1322",
        district: "Potira",
        search: "02 potira rua padre alfredo nesi"
    },
    {
        id: 3,
        name: "Arianópolis",
        address: "Rua Danilo Correia, 777",
        district: "Arianópolis",
        search: "03 arianopolis rua danilo correia"
    },
    {
        id: 4,
        name: "Parque Albano",
        address: "Rua Gonçalves Dias, 1988",
        district: "Parque Albano",
        search: "04 parque albano rua goncalves dias"
    },
    {
        id: 5,
        name: "Granja Lisboa",
        address: "Rua Xavier da Silveira, 3949",
        district: "Granja Lisboa",
        search: "05 granja lisboa rua xavier da silveira"
    },
    {
        id: 6,
        name: "Bela Vista",
        address: "Rua Espiriro Santo, 614",
        district: "Bela Vista",
        search: "06 bela vista rua espiriro santo espirito"
    },
    {
        id: 7,
        name: "Antônio Bezerra",
        address: "Rua Martins Neto, 810",
        district: "Antônio Bezerra",
        search: "07 antonio bezerra rua martins neto"
    }
];
function Home() {
    const [filteredUnits, setFilteredUnits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(UNITS);
    const [selectedUnit, setSelectedUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = (query)=>{
        const normalized = query.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
        if (!query.trim()) {
            setFilteredUnits(UNITS);
        } else {
            setFilteredUnits(UNITS.filter((unit)=>unit.search.includes(normalized)));
        }
    };
    const handleSelectUnit = (unit)=>{
        setSelectedUnit(unit);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Marquee, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Intro, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaBreak, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnitsSection, {
                        units: filteredUnits,
                        onSearch: handleSearch,
                        onSelectUnit: handleSelectUnit
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modalities, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Gallery, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Partners, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VIP, {
                        selectedUnit: selectedUnit
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0fl.u4m._.js.map