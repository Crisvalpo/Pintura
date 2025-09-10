document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE LA APLICACIÓN ---
    // (Tus datos de fluidos, materiales y esquemas van aquí, sin cambios)
    const fluids = [
        { ral: "1016", name: "Gas Natural", hex: "#EDFF21", abbr: "NG" },
        { ral: "2008", name: "Drenaje Ácido WSA", hex: "#FF7900", abbr: "ASD" },
        { ral: "2008", name: "Soda Caustica", hex: "#FF7900", abbr: "NA" },
        { ral: "2008", name: "Acido Sulfúrico", hex: "#FF7900", abbr: "SU" },
        { ral: "3020", name: "Red Contra Incendios", hex: "#CC0605", abbr: "FW" },
        { ral: "5013", name: "Retorno de Agua de Enfriamiento", hex: "#1E2460", abbr: "CWR" },
        { ral: "5013", name: "Suministro de Agua de Enfriamiento", hex: "#1E2460", abbr: "CWS" },
        { ral: "5015", name: "Agua de Planta", hex: "#2271B3", abbr: "PW" },
        { ral: "5015", name: "Agua Cruda", hex: "#2271B3", abbr: "RW" },
        { ral: "5015", name: "Agua de Servicio", hex: "#2271B3", abbr: "SW" },
        { ral: "5015", name: "Agua de Lavado", hex: "#2271B3", abbr: "WW" },
        { ral: "5019", name: "Agua Potable", hex: "#1B5583", abbr: "DW" },
        { ral: "6001", name: "Aire de Planta", hex: "#287233", abbr: "PA" },
        { ral: "7040", name: "Residuos de Hidrocarburos", hex: "#9DA1AA", abbr: "X" },
        { ral: "7040", name: "Aire Amoníaco", hex: "#9DA1AA", abbr: "AA" },
        { ral: "7040", name: "Aire de Enfriamiento", hex: "#9DA1AA", abbr: "AC" },
        { ral: "7040", name: "Gas Ácido/Gas Residual", hex: "#9DA1AA", abbr: "AG" },
        { ral: "7040", name: "Aire Caliente", hex: "#9DA1AA", abbr: "AH" },
        { ral: "7040", name: "Ventilación Atmosférica", hex: "#9DA1AA", abbr: "AV" },
        { ral: "7040", name: "Agua Amoniacal", hex: "#9DA1AA", abbr: "AW" },
        { ral: "7040", name: "Purga de Caldera", hex: "#9DA1AA", abbr: "BBD" },
        { ral: "7040", name: "Purga/Antorcha", hex: "#9DA1AA", abbr: "BD" },
        { ral: "7040", name: "Vapor/Agua en Fase Mixta", hex: "#9DA1AA", abbr: "BW" },
        { ral: "7040", name: "Agua de Alimentación de Caldera", hex: "#9DA1AA", abbr: "BFW" },
        { ral: "7040", name: "Aire de Combustión", hex: "#9DA1AA", abbr: "CA" },
        { ral: "7040", name: "Gas Limpio", hex: "#9DA1AA", abbr: "CG" },
        { ral: "7040", name: "Químico", hex: "#9DA1AA", abbr: "CH" },
        { ral: "7040", name: "Drenajes a Drenaje Cerrado", hex: "#9DA1AA", abbr: "DR" },
        { ral: "7040", name: "Gas Combustible", hex: "#9DA1AA", abbr: "FG" },
        { ral: "7040", name: "Aire para Calentadores", hex: "#9DA1AA", abbr: "HA" },
        { ral: "7040", name: "Vapor de Alta Presión", hex: "#9DA1AA", abbr: "HP" },
        { ral: "7040", name: "Vapor de Baja Presión", hex: "#9DA1AA", abbr: "LS" },
        { ral: "7040", name: "Vapor de Media Presión", hex: "#9DA1AA", abbr: "MS" },
        { ral: "7040", name: "Gas Acido/Proceso/Residual", hex: "#9DA1AA", abbr: "O" },
        { ral: "7040", name: "Agua Acida", hex: "#9DA1AA", abbr: "OPW" },
        { ral: "7040", name: "Agua con Aceite", hex: "#9DA1AA", abbr: "OW" },
        { ral: "7040", name: "Gas Acido a Antorcha", hex: "#9DA1AA", abbr: "RV" },
        { ral: "7040", name: "Condensado Frío", hex: "#9DA1AA", abbr: "SC" },
        { ral: "7040", name: "Condensado Baja Presion", hex: "#9DA1AA", abbr: "SCL" },
        { ral: "7040", name: "Condensado Media Presion", hex: "#9DA1AA", abbr: "SCM" },
        { ral: "9016", name: "Aire de Instrumentos", hex: "#F6F6F6", abbr: "IA" },
        { ral: "9016", name: "Nitrógeno", hex: "#F6F6F6", abbr: "N" },
        { ral: "9016", name: "Nitrógeno de Media Presión", hex: "#F6F6F6", abbr: "NM" }
    ];
    const paintMaterials = {
        "P1": { name: "Epoxi Rico en Zinc", jotun: "Barrier 90" }, "P2": { name: "Epoxi de Alto Sólidos (70-80%)", jotun: "Jotamastic 80/90" }, "P3": { name: "Poliuretano Acrílico Alifático", jotun: "Hardtop XP/A" }, "P4": { name: "Epoxi Fenólico (CUI)", jotun: "Epoxy HR" }, "P5": { name: "Zinc Inorgánico (Silicato de Etilo)", jotun: "Resist 86" }, "P6": { name: "Pintura de Silicona (Alta Temperatura)", jotun: "Solvalitt / Solvalitt AL" }, "P7": { name: "Copolímero Inorgánico (CUI para Inox)", jotun: "Solvalitt / Solvalitt ALU" }, "P9": { name: "Imprimación Epoxi para Galvanizado", jotun: "Penguard Express" }, "P10": { name: "Epoxi HS para Galvanizado Dañado", jotun: "Jotamastic 80/90" }, "P11": { name: "Epoxi con Escamas de Vidrio", jotun: "Jotamastic 87 GF" }, "P12": { name: "Autoprimante de Alto Sólidos", jotun: "Jotamastic 87 Aluminium" }, "P15": { name: "Sellador Epoxi para Fireproofing" }, "P16": { name: "Hormigón Ligero para Fireproofing" }, "P17": { name: "Pintura Intumescente Epoxi", jotun: "Jotachar 1709" }, "P18": { name: "Primer para Cintas (Tubería Enterrada)" }, "P19": { name: "Cinta Interna (Tubería Enterrada)" }, "P20": { name: "Cinta Externa (Tubería Enterrada)" }
    };
    const paintSchemes = [
        { code: "ENPSP1", material: "Acero al carbono sin aislar", temp: "Hasta 110°C", prep: "SSPC SP10, Rugosidad 50-70 µm", layers: [{ p: "P1", t: 75 }, { p: "P2", t: 200 }, { p: "P3", t: 100 }], totalThickness: 375, uses: "Estructuras, tuberías, tanques exteriores" }, { code: "ENPSP2", material: "Acero al carbono sin aislar", temp: "111-200°C", prep: "SSPC SP10, Rugosidad 50-70 µm", layers: [{ p: "P4", t: 150, c: 2 }], totalThickness: 300, uses: "Tuberías y equipos en zonas de media temperatura" }, { code: "ENPSP3", material: "Acero al carbono sin aislar", temp: "201-540°C", prep: "SSPC SP10", layers: [{ p: "P5", t: 75 }, { p: "P6", t: 50, c: 2 }], totalThickness: 125, uses: "Hornos, chimeneas, equipos de alta temperatura" }, { code: "ENPSP4", material: "Acero al carbono aislado", temp: "Hasta 200°C", prep: "SSPC SP10", layers: [{ p: "P4", t: 130, c: 2 }], totalThickness: 260, uses: "Tuberías y tanques bajo aislamiento térmico" }, { code: "ENPSP5", material: "Acero al carbono aislado", temp: "201-540°C (continuo)", prep: "SSPC SP10", layers: [{ p: "P5", t: 75 }], totalThickness: 75, uses: "Equipos con aislamiento en refinerías" }, { code: "ENPSP6", material: "Acero al carbono aislado", temp: "201-540°C (intermitente)", prep: "SSPC SP10", layers: [{ p: "P5", t: 75 }, { p: "P6", t: 60, c: 2 }], totalThickness: 195, uses: "Tuberías con ciclos de temperatura variables" }, { code: "ENPSP7", material: "Acero al carbono aislado", temp: "Hasta 110°C", prep: "SSPC SP10", layers: [{ p: "P1", t: 60 }, { p: "P2", t: 150 }], totalThickness: 210, uses: "Tuberías no fabricadas (bulk)" }, { code: "ENPSP8", material: "Acero inoxidable (304, 316)", temp: "-3°C a 200°C", prep: "Granallado ligero (50-85 µm)", layers: [{ p: "P4", t: 130, c: 2 }], totalThickness: 260, uses: "Equipos y tuberías de acero inoxidable aislados" }, { code: "ENPSP9", material: "Acero inoxidable aislado", temp: "201-430°C", prep: "Granallado con discos libres de cloruros", layers: [{ p: "P7", t: 125, c: 2 }], totalThickness: 250, uses: "Equipos en ambientes corrosivos y térmicos" }, { code: "ENPSP11", material: "Superficies galvanizadas", temp: "Hasta 110°C", prep: "SSPC SP7", layers: [{ p: "P9", t: 40 }, { p: "P2", t: 210 }, { p: "P3", t: 70 }], totalThickness: 320, uses: "Estructuras galvanizadas en ambientes C5" }, { code: "ENPSP12", material: "Galvanizado con daños", temp: "Hasta 110°C", prep: "SSPC SP11", layers: [{ p: "P1", t: 75 }, { p: "P10", t: 370 }], totalThickness: 445, uses: "Reparación de zonas dañadas en galvanizado" }, { code: "ENPSP13", material: "Tuberías enterradas con protección catódica", temp: "Ambiente", prep: "SSPC SP10", layers: [{ p: "P2", t: 80 }, { p: "P11", t: 780 }], totalThickness: 860, uses: "Sistemas para pruebas ASTM D5162" }, { code: "ENPSP14", material: "Pernos y tornillos estructurales", temp: "N/A", prep: "SSPC SP11", layers: [{ p: "P12", t: 600 }], totalThickness: 600, uses: "Protección de elementos metálicos expuestos" }, { code: "ENPSP17", material: "Estructuras con protección pasiva contra fuego", temp: "N/A", prep: "SSPC SP10", layers: [{ p: "P1", t: 60, n: "Malla galvanizada" }, { p: "P16", t: "2000-4000" }, { p: "P15", t: 200 }], totalThickness: "2260+", uses: "Zonas de alto riesgo de incendio (Fireproofing)" }, { code: "ENPSP18", material: "Estructuras con pintura intumescente", temp: "N/A", prep: "SSPC SP10", layers: [{ p: "P1", t: 40 }, { p: "P17", t: "2000-4000" }, { p: "P3", t: 100 }], totalThickness: "2140+", uses: "Protección intumescente, requiere pruebas UL" }, { code: "ENPSP20", material: "Tuberías enterradas sin protección catódica", temp: "-34°C a 94°C", prep: "SSPC SP11", layers: [{ p: "P18", t: 60 }, { p: "P19", t: 888 }, { p: "P20", t: 381 }], totalThickness: 1329, uses: "Sistema de cintas para tuberías enterradas" }
    ];

    // --- 2. ELEMENTOS DEL DOM ---
    const btnRalColors = document.getElementById('btnRalColors');
    const btnPaintSchemes = document.getElementById('btnPaintSchemes');
    const btnVideos = document.getElementById('btnVideos'); // Nuevo
    const ralColorsSection = document.getElementById('ral-colors-section');
    const paintSchemesSection = document.getElementById('paint-schemes-section');
    const videoSection = document.getElementById('video-section'); // Nuevo
    const headerContent = document.getElementById('header-content');
    const modal = document.getElementById('colorModal');

    // --- 3. LÓGICA DE NAVEGACIÓN ---
    function switchSection(activeSection) {
        // Ocultar todas las secciones y botones
        [ralColorsSection, paintSchemesSection, videoSection].forEach(section => section.classList.remove('active'));
        [btnRalColors, btnPaintSchemes, btnVideos].forEach(btn => btn.classList.remove('active'));

        // Activar la sección y botón correctos y cambiar el título
        if (activeSection === 'ral') {
            ralColorsSection.classList.add('active');
            btnRalColors.classList.add('active');
            headerContent.innerHTML = '<h1>Colores RAL</h1><p>Fluidos de Cañerías Industriales</p>';
        } else if (activeSection === 'schemes') {
            paintSchemesSection.classList.add('active');
            btnPaintSchemes.classList.add('active');
            headerContent.innerHTML = '<h1>Esquemas de Pintura</h1><p>Ciclos de Protección Industrial</p>';
        } else if (activeSection === 'video') {
            videoSection.classList.add('active');
            btnVideos.classList.add('active');
            headerContent.innerHTML = '<h1>Resumen de Procedimientos</h1><p>K484-0000-0000-JSD-2300-01_A</p><p>K484-0000-0000-MS-2300-01_0</p>';
        }
    }

    // --- 4. LÓGICA PARA COLORES RAL ---
    function groupFluidsByRAL() {
        return Object.values(fluids.reduce((acc, fluid) => {
            acc[fluid.ral] = acc[fluid.ral] || { ral: fluid.ral, hex: fluid.hex, fluids: [] };
            acc[fluid.ral].fluids.push(fluid);
            return acc;
        }, {})).sort((a, b) => a.ral.localeCompare(b.ral));
    }

    function createColorGroup(group) {
        const fluidsList = group.fluids.map(fluid => `
            <div class="fluid-item" data-fluid='${JSON.stringify(fluid)}' style="--fluid-color: ${group.hex};">
                <div class="fluid-name">
                    <span class="fluid-abbr">${fluid.abbr}</span>
                    <span>${fluid.name}</span>
                </div>
            </div>
        `).join('');
        return `
            <div class="color-group" data-ral="${group.ral}">
                <div class="color-header">
                    <div class="color-indicator" style="background-color: ${group.hex}"></div>
                    <div class="color-info">
                        <div class="ral-code">RAL ${group.ral}</div>
                        <div class="fluid-count">${group.fluids.length} fluido${group.fluids.length !== 1 ? 's' : ''}</div>
                    </div>
                    <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg>
                </div>
                <div class="fluids-container"><div class="fluids-list">${fluidsList}</div></div>
            </div>
        `;
    }

    function renderRalColors() {
        document.getElementById('colorsList').innerHTML = groupFluidsByRAL().map(createColorGroup).join('');
        addRalEventListeners();
    }

    function addRalEventListeners() {
        document.querySelectorAll('#ral-colors-section .color-header').forEach(h => h.addEventListener('click', () => h.parentElement.classList.toggle('expanded')));
        document.querySelectorAll('#ral-colors-section .fluid-item').forEach(i => i.addEventListener('click', (e) => { e.stopPropagation(); showModal(JSON.parse(i.dataset.fluid)); }));
    }

    function showModal(fluid) {
        document.getElementById('modalTitle').textContent = fluid.name;
        document.getElementById('modalColor').style.backgroundColor = fluid.hex;
        document.getElementById('modalRalCode').textContent = `RAL ${fluid.ral}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // --- 5. LÓGICA PARA ESQUEMAS DE PINTURA ---
    function createSchemeCard(scheme) {
        const numericThickness = parseInt(scheme.totalThickness.toString().replace(/[^0-9]/g, ''), 10);
        const isHighThickness = numericThickness >= 1000;
        const layersHtml = scheme.layers.map(layer => {
            const material = paintMaterials[layer.p] || { name: 'Desconocido' };
            const coats = layer.c > 1 ? `(${layer.c} capas)` : `(1 capa)`;
            const note = layer.n ? ` <span class="layer-note">+ ${layer.n}</span>` : '';
            const jotunHtml = material.jotun ? `<span class="jotun-product">Producto Jotun: ${material.jotun}</span>` : '';
            return `<div class="layer-item"><strong>${material.name} (${layer.p})</strong><p>Espesor: ${layer.t} µm ${coats}${note}</p>${jotunHtml}</div>`;
        }).join('');
        return `
            <div class="scheme-card ${isHighThickness ? 'high-thickness' : ''}">
                <div class="scheme-header">
                    <div class="scheme-code">${scheme.code.replace('ENPSP', '')}<span>${scheme.code}</span></div>
                    <div class="scheme-summary"><h3>${scheme.material}</h3><p>${scheme.layers.length} capas, ${scheme.totalThickness.toString().replace(/\+/g, '')} µm total</p></div>
                    <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg>
                </div>
                <div class="scheme-details">
                    <div class="detail-grid">
                        <div class="detail-item"><strong>Temperatura:</strong> <span>${scheme.temp}</span></div>
                        <div class="detail-item"><strong>Preparación:</strong> <span>${scheme.prep}</span></div>
                    </div>
                    <div class="detail-item"><strong>Aplicaciones:</strong> <span>${scheme.uses}</span></div>
                    <h4 class="layers-title">Capas del Sistema</h4>
                    <div class="layers-list">${layersHtml}</div>
                </div>
            </div>
        `;
    }

    function renderPaintSchemes() {
        const sorted = paintSchemes.sort((a, b) => parseInt(a.code.replace('ENPSP', '')) - parseInt(b.code.replace('ENPSP', '')));
        document.getElementById('schemesList').innerHTML = sorted.map(createSchemeCard).join('');
        addSchemeEventListeners();
    }

    function addSchemeEventListeners() {
        document.querySelectorAll('#paint-schemes-section .scheme-header').forEach(h => h.addEventListener('click', () => h.parentElement.classList.toggle('expanded')));
    }

    // --- 6. INICIALIZACIÓN DE LA APLICACIÓN ---
    function init() {
        renderRalColors();
        renderPaintSchemes();

        btnRalColors.addEventListener('click', () => switchSection('ral'));
        btnPaintSchemes.addEventListener('click', () => switchSection('schemes'));
        btnVideos.addEventListener('click', () => switchSection('video')); // Nuevo
        
        document.querySelector('.close-btn').addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });
        
        switchSection('ral');
    }

    init();
});