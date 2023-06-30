gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    defaults: {ease: 'expo.inOut', duration: 2}
})

tl.from('.bg-hero-bg', { backgroundSize: '150%' })
.from('.heroBg', { scale: 0 }, '<')
.from('.heroText', { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'}, '1' )
.from('#navbar', { top: '-10vh' }, '1')
.from('.mobile-nav-toggle', { top: '-10vh' }, '1')
.from('.heroTexture', { bottom: '-20vh' }, '1')

gsap.from('#aboutImg', { scrollTrigger: {trigger: '#aboutText', start: 'top 60%'}, opacity: '0', translateX: '20px' });
gsap.from('#aboutText', { scrollTrigger: {trigger: '#aboutText', start: 'top 60%'}, opacity: '0', translateX: '-20px' });

gsap.from('#skills', { scrollTrigger: {trigger: '#skills', start: 'top 60%'}, opacity: '0' })

gsap.from('#projects', { scrollTrigger: {trigger: '#projects', start: 'top 60%'}, opacity: '0' })

document.querySelectorAll('.work.translate-y-0').forEach(
    (e) => {
        gsap.from(e, { scrollTrigger: {trigger: e, start: 'top 60%'}, opacity: '0', translateY: '-20px'})
    }
)
document.querySelectorAll('.work.translate-y-8').forEach(
    (e) => {
        gsap.from(e, { scrollTrigger: {trigger: e, start: 'top center'}, opacity: '0', translateY: '-20px' })
    }
)

gsap.from("#graphicHeading", { scrollTrigger: {trigger: '#graphicHeading', start: 'top 60%'}, opacity: 0, translateY: '-20px' })

gsap.from('#contact', { scrollTrigger: {trigger: '#contact', start: 'top 60%'}, opacity: '0', translateY: '40px' })

gsap.from('.footer-text', { scrollTrigger: {trigger: '#footer', start: 'center bottom'}, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'})
