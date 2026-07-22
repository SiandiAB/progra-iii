/* ============================================================
   presentacion.js — Lógica compartida para presentaciones
   Programación III (EIF206) — UNA
   ============================================================ */

(function () {
    'use strict';

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const progressBar = document.getElementById('progressBar');

    let currentSlide = 0;

    /* --- Barra de progreso --- */
    function updateProgress() {
        if (!progressBar) return;
        const percentage = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = percentage + '%';
    }

    /* --- Navegación entre slides --- */
    function changeSlide(direction) {
        if (document.querySelector('.modal-backdrop.active')) return;

        slides[currentSlide].classList.remove('active');
        currentSlide += direction;

        if (currentSlide < 0) currentSlide = 0;
        if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;

        slides[currentSlide].classList.add('active');
        updateProgress();
        checkButtons();
    }

    /* --- Estado de los botones (prev/next) --- */
    function checkButtons() {
        const prev = document.getElementById('prevBtn');
        const next = document.getElementById('nextBtn');
        if (!prev || !next) return;

        prev.style.opacity = currentSlide === 0 ? '0.3' : '1';
        prev.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';

        next.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
        next.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'auto';
    }

    /* --- Eventos de teclado --- */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            changeSlide(1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            changeSlide(-1);
        } else if (e.key === 'Escape') {
            document.querySelectorAll('.modal-backdrop').forEach(function (modal) {
                modal.classList.remove('active');
            });
        }
    });

    /* --- Modales --- */
    window.openModal = function (modalId) {
        var modal = document.getElementById(modalId);
        if (modal) modal.classList.add('active');
    };

    window.closeModal = function (modalId) {
        var modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    };

    document.querySelectorAll('.modal-backdrop').forEach(function (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) this.classList.remove('active');
        });
    });

    /* --- Tema claro/oscuro --- */
    window.toggleTheme = function () {
        var html = document.documentElement;
        var icon = document.getElementById('theme-icon');
        if (!icon) return;

        if (html.getAttribute('data-theme') === 'light') {
            html.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            html.setAttribute('data-theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    /* --- Inicialización --- */
    if (totalSlides > 0) {
        updateProgress();
        checkButtons();
    }

    /* Exponer cambio de slide globalmente (útil si se necesita desde el HTML) */
    window.changeSlide = changeSlide;

})();
