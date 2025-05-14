// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 汉堡菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        
        // 动画
        hamburger.classList.toggle('toggle');
    });
    
    // 导航链接点击后关闭菜单
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });
    
    // 滚动动画
    const animateElements = document.querySelectorAll('.animate-fade-in');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
    
    // 首屏动画效果
    const hero = document.querySelector('.hero-content');
    const heroTitle = hero.querySelector('h1');
    const heroSubtitle = hero.querySelector('h2');
    const heroText = hero.querySelector('p');
    const heroButtons = hero.querySelector('.cta-buttons');
    
    function animateHero() {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 400);
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 600);
        
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 800);
    }
    
    // 初始英雄区域动画
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';
    heroTitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transform = 'translateY(30px)';
    heroSubtitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    heroText.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    heroButtons.style.opacity = '0';
    heroButtons.style.transform = 'translateY(30px)';
    heroButtons.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // 当页面加载或滚动到顶部时执行动画
    window.addEventListener('load', animateHero);
    window.addEventListener('scroll', function() {
        if (window.scrollY < window.innerHeight) {
            animateHero();
        }
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});