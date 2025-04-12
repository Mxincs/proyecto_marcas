gsap.registerPlugin(ScrollTrigger);

// Animación con ScrollTrigger
gsap.from(".logo", {
  scrollTrigger: {
    trigger: ".contenido", // Esto indica que la animación comienza cuando ".contenido" entra en vista
    start: "top bottom", // Cuando la parte superior de ".contenido" alcanza la parte inferior de la ventana
    end: "top center", // La animación termina cuando la parte superior de ".contenido" llega al centro de la ventana
    scrub: true, // Hace que la animación se controle de acuerdo con el desplazamiento del scroll
  },
  y: "50vh", // Mueve el logo 50vh hacia abajo desde su posición original
  scale: 6, // Aumenta el tamaño del logo
  yPercent: -50, // Desplazamiento adicional en el eje Y
});