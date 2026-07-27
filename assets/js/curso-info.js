/* ============================================================
   curso-info.js — Datos estandar del curso compartidos
   Programación III (EIF206) — UNA
   ============================================================ */

var CursoInfo = {
    codigo: "EIF206",
    sede: "Sección Regional Central Occidente, UNA",
    
    grupos: {
        "41": {
            docente: "Prof. Siandi Araya Bello",
            dia: "Martes",
            horario: "13:00 - 16:20",
            nrc: "52906",
            atencionDia: "Martes",
            atencionHorario: "10:00 - 12:00",
            color: "var(--una-red)"
        },
        "40": {
            docente: "Prof. Kristel Duarte Pérez",
            dia: "Miércoles",
            horario: "08:00 - 11:20",
            nrc: "52907",
            atencionDia: "Miércoles",
            atencionHorario: "13:00 - 14:00",
            color: "var(--accent-blue)"
        }
    },

    getLineaHub: function () {
        var g41 = this.grupos["41"];
        var g40 = this.grupos["40"];
        return '<strong>Grupo 41</strong> &mdash; ' + g41.docente + ' &middot; ' + g41.dia + ' ' + g41.horario + ' &middot; NRC: ' + g41.nrc +
               ' <span class="hidden md:inline text-gray-300">|</span> ' +
               '<strong>Grupo 40</strong> &mdash; ' + g40.docente + ' &middot; ' + g40.dia + ' ' + g40.horario + ' &middot; NRC: ' + g40.nrc;
    }
};

// Rellenar elementos con data-curso
(function () {
    'use strict';
    var data = {
        '41-docente':   CursoInfo.grupos["41"].docente,
        '41-horario':   CursoInfo.grupos["41"].dia + ' ' + CursoInfo.grupos["41"].horario,
        '41-atencion':  CursoInfo.grupos["41"].atencionDia + ' ' + CursoInfo.grupos["41"].atencionHorario,
        '40-docente':   CursoInfo.grupos["40"].docente,
        '40-horario':   CursoInfo.grupos["40"].dia + ' ' + CursoInfo.grupos["40"].horario,
        '40-atencion':  CursoInfo.grupos["40"].atencionDia + ' ' + CursoInfo.grupos["40"].atencionHorario,
    };
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-curso]').forEach(function (el) {
            var key = el.getAttribute('data-curso');
            if (data[key]) el.textContent = data[key];
        });
    });
})();
