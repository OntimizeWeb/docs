// Load jsTree
$(document).ready(function () { $('.jstreeloader').jstree(); });

// Show trees on initial load with width bigger than 1260px
window.onload = function() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth > 1260) {
        var toggleButtons = document.getElementsByClassName('jstreeloader');
        for (let div of toggleButtons){
            div.classList.remove('collapsed');
            div.parentElement.querySelector('.material-symbols-outlined').textContent = 'left_panel_open';
        }
    }
};

// Toggle tree multicolumn
document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = document.getElementsByClassName('toggle-tree-btn');
    for (let btn of toggleButtons) {
        btn.addEventListener('click', function() {
            var jstreeLoader = btn.closest('.multicolumn').querySelector('.jstreeloader');
            jstreeLoader.classList.toggle('collapsed');
            var isCollapsed = jstreeLoader.classList.contains('collapsed');
            var spanElement = btn.querySelector('.material-symbols-outlined');
            if (isCollapsed) {
                spanElement.textContent = 'right_panel_open';
            } else {
                spanElement.textContent = 'left_panel_open';
            }
        });
    }
});

// Collapsible TOC
document.addEventListener("DOMContentLoaded", function() {
    var tocTitle = document.getElementById("tocTitle");

    if(tocTitle != null){
        tocTitle.addEventListener("click", function() {
            var toc = document.getElementById("toc");
            toc.querySelector('.toc__menu').classList.toggle('collapsed');
            toc.closest('.sidebar__right').classList.toggle('collapsed');
            tocTitle.classList.toggle('collapsed');
            toc.classList.toggle('collapsed');
        });
    }
});

// Anchor scroll behaviour for sticky header
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var offset = targetElement.offsetTop;
                if (windowWidth > 800) {
                    var offset = offset - 72;
                }
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

