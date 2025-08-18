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

// Changes the theme mode into dark and light
document.onreadystatechange = function (e) {
  if (document.readyState != 'loading') {
    if (localStorage.getItem("theme") == null) {
      localStorage.setItem("theme", "light");
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementsByClassName('toggle-theme');
  var githubIcon = document.getElementsByClassName('github-img');
  var scriptElements = document.getElementsByTagName('script');
  var base_path;
  let light_cards = document.getElementsByClassName("card-light");
  let dark_cards = document.getElementsByClassName("card-dark");

  for (let element of scriptElements) {
    if (element.getAttribute('base_path')) {
      base_path = element.getAttribute('base_path');
      break;
    }
  }

  if (localStorage.getItem("theme") == "light") {
    toggleButton[0].src = base_path + '/assets/icons/light_mode.svg';
    githubIcon[0].src = base_path + '/assets/icons/github-front.svg';
    for (let i = 0; i < dark_cards.length; i++) {
      dark_cards[i].classList.add("hidden");
      light_cards[i].classList.remove("hidden");
    }
  } else {
    toggleButton[0].src = base_path + '/assets/icons/dark_mode.svg';
    githubIcon[0].src = base_path + '/assets/icons/github-front-dark.svg';
    for (let i = 0; i < light_cards.length; i++) {
      dark_cards[i].classList.remove("hidden");
      light_cards[i].classList.add("hidden");
    }
  }

  toggleButton[0].addEventListener('click', function () {
    if (jtd.getTheme() == 'dark') {
      localStorage.setItem("theme", "light");
      jtd.setTheme('ontimize');
      toggleButton[0].src = base_path + '/assets/icons/light_mode.svg';
      githubIcon[0].src = base_path + '/assets/icons/github-front.svg';
      for (let i = 0; i < dark_cards.length; i++) {
        dark_cards[i].classList.add("hidden");
        light_cards[i].classList.remove("hidden");
      }
    } else {
      localStorage.setItem("theme", "dark");
      jtd.setTheme('ontimize-dark');
      toggleButton[0].src = base_path + '/assets/icons/dark_mode.svg';
      githubIcon[0].src = base_path + '/assets/icons/github-front-dark.svg';
      for (let i = 0; i < light_cards.length; i++) {
        dark_cards[i].classList.remove("hidden");
        light_cards[i].classList.add("hidden");
      }
    }
  });
});
