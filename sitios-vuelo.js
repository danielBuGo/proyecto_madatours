// Datos de sitios de vuelo por departamento
const flightSitesData = {
    antioquia: {
        name: "Antioquia",
        sites: [
            {
                nombre: "San Félix",
                msnm: "2.400m",
                viento: "Noreste",
                mejorHorario: "9:00 AM - 5:00 PM",
                Ubicacion: "A 1h de Medellín",
                coordenadas: "5.8833, -75.6167",
                acceso: "Fácil",
                aterrizaje: "La meseta en el municipio de Bello",
                seguridad: "Viento térmico, Dinamico, TermoDinamico y restitucion experiencia requerida"
            },
            {
                nombre: "Titiribí",
                msnm: "1.900m",
                viento: "Suroeste",
                mejorHorario: "11:00 AM - 2:00 PM",
                Ubicacion: "A 45 min de Medellín",
                coordenadas: "6.0333, -75.8000",
                acceso: "Medio",
                aterrizaje: "Bolombolo",
                seguridad: " Vuelo termico, Zona despejada, ideal para principiantes"
            },
            {
                nombre: "Jericó",
                msnm: "2.200m",
                viento: "Este",
                mejorHorario: "10:00 AM - 4:00 PM",
                Ubicacion: "A 2h 30min de Medellín",
                coordenadas: "5.8000, -75.7333",
                acceso: "Fácil",
                aterrizaje: "Facil, multiples opciones",
                seguridad: "Viento suave, vistas panorámicas"
            },
            {
                nombre: "Calentón - Santa Fe de Antioquia",
                msnm: "1.700m",
                viento: "Oeste",
                mejorHorario: "9:00 AM - 3:00 PM",
                bloqueUbicacion: "A 1h de Medellín",
                coordenadas: "6.5500, -75.8333",
                acceso: "Facil",
                aterrizaje: "Campo privado",
                seguridad: "Zona caliente, térmica fuerte"
            },
            {
                nombre: "Jardín",
                msnm: "2.100m",
                viento: "Noreste",
                mejorHorario: "10:00 AM - 5:00 PM",
                bloqueUbicacion: "A 3h de Medellín",
                coordenadas: "5.5833, -75.5167",
                acceso: "dificil 4x4 necesario",
                aterrizaje: "Dificil, terreno montañoso",
                seguridad: "Pueblo turístico, espacio limitado"
            },
            {
                nombre: "Fredonia",
                msnm: "1.800m",
                viento: "Suroeste",
                mejorHorario: "10:00 AM - 3:00 PM",
                bloqueUbicacion: "A 50 min de Medellín",
                coordenadas: "5.9333, -75.6667",
                acceso: "easy",
                aterrizaje: "Campo abierto en puente iglesias",
                seguridad: "Zona segura, viento constante"
            },
            {
                nombre: "Cerro Amarillo",
                msnm: "2.500m",
                viento: "Sur",
                mejorHorario: "9:30 AM - 3:30 PM",
                bloqueUbicacion: "A 2h 15min de Medellín",
                coordenadas: "6.0000, -75.7500",
                acceso: "Medio, camino sin pavimentar",
                aterrizaje: "Finca privada",
                seguridad: "Elevación máxima, termales fuertes"
            },
            {
                nombre: "Damasco",
                msnm: "2.000m",
                viento: "Noreste",
                mejorHorario: "10:30 AM - 3:30 PM",
                Ubicacion: "A 1:30 hora de Medellín",
                coordenadas: "5.9167, -75.7167",
                acceso: "Dificil, camino de tierra",
                aterrizaje: "Dificil, terreno irregular",
                seguridad: "Zona rural, viento predecible"
            }
        ]
    },
    caldas: {
        name: "Caldas",
        sites: [
            {
                nombre: "La Merced",
                msnm: "1.500m",
                viento: "Oeste",
                mejorHorario: "7:00 AM - 10:00 AM",
                bloqueUbicacion: "A 45 min de Manizales",
                coordenadas: "5.3833, -75.5500",
                acceso: "easy",
                aterrizaje: "Cancha municipal",
                seguridad: "Valle cálido, térmica moderada"
            },
            {
                nombre: "San José",
                msnm: "1.700m",
                viento: "Suroeste",
                mejorHorario: "7:00 AM - 10:00 AM",
                bloqueUbicacion: "A 30 min de Manizales",
                coordenadas: "5.0667, -75.6500",
                acceso: "easy",
                aterrizaje: "Finca privada",
                seguridad: "Zona cafetera, viento suave"
            }
        ]
    },
    risaralda: {
        name: "Risaralda",
        sites: [
            {
                nombre: "Apía",
                msnm: "1.600m",
                viento: "Noreste",
                mejorHorario: "6:00 AM - 9:00 AM",
                bloqueUbicacion: "A 45 min de Pereira",
                coordenadas: "5.1167, -75.9333",
                acceso: "easy",
                aterrizaje: "Cancha municipal",
                seguridad: "Zona rural, viento constante"
            }
        ]
    },
    valle: {
        name: "Valle del Cauca",
        sites: [
            {
                nombre: "Ansermanuevo",
                msnm: "1.400m",
                viento: "Oeste",
                mejorHorario: "7:00 AM - 10:00 AM",
                bloqueUbicacion: "A 1h de Cali",
                coordenadas: "4.8000, -76.0167",
                acceso: "easy",
                aterrizaje: "Cancha de fútbol",
                seguridad: "Valle del Cauca, térmica suave"
            },
            {
                nombre: "Roldanillo - Despegue Norte",
                msnm: "1.500m",
                viento: "Suroeste",
                mejorHorario: "6:30 AM - 9:30 AM",
                bloqueUbicacion: "A 1h 15min de Cali",
                coordenadas: "4.4167, -76.1500",
                acceso: "easy",
                aterrizaje: "Plaza de mercado",
                seguridad: "Zona urbana, espacio amplio"
            },
            {
                nombre: "Roldanillo - Despegue Sur",
                msnm: "1.450m",
                viento: "Oeste",
                mejorHorario: "7:00 AM - 10:00 AM",
                bloqueUbicacion: "A 1h 15min de Cali",
                coordenadas: "4.4000, -76.1667",
                acceso: "easy",
                aterrizaje: "Cancha municipal",
                seguridad: "Viento diferente al norte"
            },
            {
                nombre: "Roldanillo - La Ladera",
                msnm: "1.600m",
                viento: "Noreste",
                mejorHorario: "6:00 AM - 9:00 AM",
                bloqueUbicacion: "A 1h 20min de Cali",
                coordenadas: "4.4333, -76.1333",
                acceso: "4x4",
                aterrizaje: "Finca privada",
                seguridad: "Mayor elevación, mejores termales"
            },
            {
                nombre: "Roldanillo - El Puerto",
                msnm: "1.300m",
                viento: "Oeste",
                mejorHorario: "7:30 AM - 10:30 AM",
                bloqueUbicacion: "A 1h 10min de Cali",
                coordenadas: "4.3833, -76.1833",
                acceso: "easy",
                aterrizaje: "Zona plana",
                seguridad: "Cerca del río, humedad alta"
            },
            {
                nombre: "Piedechinche",
                msnm: "1.800m",
                viento: "Suroeste",
                mejorHorario: "6:30 AM - 9:30 AM",
                bloqueUbicacion: "A 50 min de Cali",
                coordenadas: "3.5500, -76.5000",
                acceso: "easy",
                aterrizaje: "Cancha municipal",
                seguridad: "Zona cañera, viento térmico"
            }
        ]
    }
};


/**
 * Renderiza el acordeón de departamentos y sitios de vuelo
 * Genera HTML dinámicamente y lo inserta en el contenedor #departmentsAccordion
 */
function renderDepartmentsAccordion() {
    const container = document.getElementById('departmentsAccordion');
    if (!container) return;
    let html = '';
    Object.entries(flightSitesData).forEach(([depKey, depData], idx) => {
        html += `
        <div class="accordion-department">
            <button class="accordion-toggle" aria-expanded="false" aria-controls="panel-${depKey}" onclick="toggleDepartmentAccordion(this, '${depKey}')">
                <span class="dep-title"><i class="fas fa-location-dot"></i> ${depData.name}</span>
                <span class="chevron"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="accordion-panel" id="panel-${depKey}" hidden>
                ${depData.sites.map(site => `
                    <div class="flight-site-card">
                        <div class="site-header">
                            <span class="site-name">${site.nombre}</span>
                            <a href="https://www.google.com/maps/search/?api=1&query=${site.coordenadas}" target="_blank" class="site-gps-btn">
                                <i class="fas fa-map-marker-alt"></i> GPS
                            </a>
                        </div>
                        <div class="site-info-grid">
                            <div><strong>Altitud:</strong> ${site.msnm}</div>
                            <div><strong>Viento:</strong> ${site.viento}</div>
                            <div><strong>Horario:</strong> ${site.mejorHorario}</div>
                            <div><strong>Ubicación:</strong> ${site.Ubicacion || site.bloqueUbicacion || ''}</div>
                            <div><strong>Coordenadas:</strong> ${site.coordenadas}</div>
                            <div><strong>Acceso:</strong> ${site.acceso}</div>
                            <div><strong>Aterrizaje:</strong> ${site.aterrizaje}</div>
                            <div><strong>Seguridad:</strong> ${site.seguridad}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

/**
 * Alterna la visibilidad de un panel de departamento en el acordeón
 * @param {HTMLElement} btn - Botón del departamento
 * @param {string} depKey - Clave del departamento
 */
function toggleDepartmentAccordion(btn, depKey) {
    const panel = document.getElementById(`panel-${depKey}`);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    if (panel) {
        panel.hidden = expanded;
    }
    // Cierra otros paneles
    document.querySelectorAll('.accordion-toggle').forEach(otherBtn => {
        if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherDep = otherBtn.getAttribute('onclick').match(/'([^']+)'/)[1];
            const otherPanel = document.getElementById(`panel-${otherDep}`);
            if (otherPanel) otherPanel.hidden = true;
        }
    });
}

// Inicializa el acordeón al cargar la página
document.addEventListener('DOMContentLoaded', renderDepartmentsAccordion);