import React, { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/573003298899?text=quiero%20hablar%20con%20juan%20para%20que%20hablemos%20de%20mi%20sitio%20web%20paisainmuebles%20y%20de%20el%20marketing%20de%20el%20mismo";

  const properties = [
    {
      id: 1,
      title: "Mansión de Diseño Moderno",
      location: "El Poblado, Medellín",
      price: "$17,000,000,000 COP",
      image: "/casa-1.png" 
    },
    {
      id: 2,
      title: "Finca de Retiro Exclusiva",
      location: "Llanogrande, Antioquia",
      price: "Consultar Precio",
      image: "/casa-2.png" 
    },
    {
      id: 3,
      title: "Apartamento de Lujo",
      location: "Las Palmas, Medellín",
      price: "Arriendo Amoblado",
      image: "/casa-3.png" 
    }
  ];

  // VIDEOS ACTUALIZADOS: 1 de TikTok y 2 de Instagram Reels
  const videosDestacados = [
    {
      id: 1,
      title: "Tour Mansión Poblado",
      embedUrl: "https://www.tiktok.com/embed/v2/7677264421156080904" 
    },
    {
      id: 2,
      title: "Recorrido Exclusivo",
      // Enlace de Instagram adaptado para formato Embed (sin códigos de rastreo)
      embedUrl: "https://www.instagram.com/reel/DdMcZaOQcon/embed/" 
    },
    {
      id: 3,
      title: "Propiedad de Lujo",
      // Enlace de Instagram adaptado para formato Embed
      embedUrl: "https://www.instagram.com/reel/Dc81drbuxFD/embed/" 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-16 md:pb-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        html { scroll-behavior: smooth; }
        
        .hero-bg {
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo Paisa Inmuebles" 
              className="h-10 w-10 rounded-full object-cover bg-black"
            />
            <h1 className={`font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-semibold ${isScrolled ? 'text-black' : 'text-white'}`}>
              Paisa Inmuebles
            </h1>
          </div>
          <nav className={`hidden md:flex gap-8 text-[10px] lg:text-xs uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>
            <a href="#agencia" className="hover:opacity-60 transition-opacity">La Agencia</a>
            <a href="#servicios" className="hover:opacity-60 transition-opacity">Servicios</a>
            <a href="#videos" className="hover:opacity-60 transition-opacity">Recorridos</a>
            <a href="#coleccion" className="hover:opacity-60 transition-opacity">Portafolio</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full hero-bg">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pt-20">
          <FadeIn>
            <p className="text-white text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-light">
              Paisa Inmuebles 360 S.A.S.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl max-w-4xl mx-auto leading-tight shadow-sm">
              Las maravillas inmobiliarias <br className="hidden md:block" /> de Antioquia.
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <a href="#coleccion" className="inline-block mt-12 border border-white text-white px-10 py-4 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors duration-500">
              Ver Colección
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SECCIÓN LA AGENCIA */}
      <section id="agencia" className="py-24 md:py-32 bg-[#fafafa] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-serif text-3xl md:text-5xl mb-8">Elevando el estándar inmobiliario en Antioquia</h3>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-gray-500 font-light leading-relaxed text-lg mb-10">
              Somos especialistas en conectar a clientes extraordinarios con propiedades excepcionales. Ya sea que busques una finca de descanso exclusiva en el oriente antioqueño, o un penthouse amoblado de lujo en el corazón de Medellín. Brindamos un servicio de curaduría inmobiliaria con absoluta discreción y profesionalismo.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-sm tracking-[0.2em] uppercase font-medium text-black">Juan Álvarez — Asesor Inmobiliario</p>
          </FadeIn>
        </div>
      </section>

      {/* SECCIÓN VIDEOS */}
      <section id="videos" className="py-24 md:py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-4 block">Experiencia Inmersiva</span>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">Recorridos Virtuales</h3>
              <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto">Explora cada detalle de nuestras propiedades exclusivas antes de visitarlas en persona.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {videosDestacados.map((video, index) => (
              <FadeIn key={video.id} delay={index * 200}>
                <div className="flex flex-col gap-4 group">
                  <div className="relative w-full aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/30 transition-colors">
                    <iframe 
                      src={video.embedUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                  <h4 className="font-serif text-xl text-center text-gray-300">{video.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-4">Servicios Exclusivos</h3>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <FadeIn delay={100}>
            <div className="p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
              <h4 className="font-serif text-2xl mb-4">Amoblados de Lujo</h4>
              <p className="text-gray-500 font-light text-sm">Apartamentos completamente equipados con los más altos estándares, listos para habitar en las mejores zonas de Medellín.</p>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="p-8 border border-gray-100 bg-black text-white hover:shadow-2xl transition-shadow duration-500">
              <h4 className="font-serif text-2xl mb-4 text-white">Fincas & Recreo</h4>
              <p className="text-gray-300 font-light text-sm">Las propiedades rurales más imponentes de Antioquia, ideales para el descanso, eventos o como inversión de capital.</p>
            </div>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
              <h4 className="font-serif text-2xl mb-4">Venta de Propiedades</h4>
              <p className="text-gray-500 font-light text-sm">Acompañamiento integral en la compra y venta de inmuebles premium, garantizando negocios seguros y rentables.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="coleccion" className="py-24 md:py-32 px-6 max-w-7xl mx-auto bg-white">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">Colección Destacada</h3>
              <p className="text-gray-500 font-light tracking-wide">Una muestra de nuestro portafolio actual.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="border-b border-black pb-1 uppercase tracking-widest text-xs font-semibold hover:text-gray-500 transition-colors">
              Solicitar Catálogo Completo
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {properties.map((prop, index) => (
            <FadeIn key={prop.id} delay={index * 200}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"; 
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-serif text-2xl group-hover:text-gray-600 transition-colors">{prop.title}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{prop.location}</p>
                  <p className="text-sm font-medium mt-2">{prop.price}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div>
            <h2 className="font-serif text-2xl mb-6 tracking-widest">PAISA INMUEBLES</h2>
            <p className="text-gray-400 font-light text-sm max-w-xs mx-auto md:mx-0">
              Transformando la experiencia de bienes raíces en Colombia a través de la excelencia y el diseño.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Contacto</h4>
            <ul className="text-gray-400 font-light text-sm space-y-3">
              <li>Carrera 74 B # 65 - 41</li>
              <li>Medellín, Antioquia</li>
              <li>+57 313 323 0879</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Síguenos</h4>
            <div className="flex justify-center md:justify-start gap-6 text-sm font-light text-gray-400">
              <a href="https://www.instagram.com/paisa_inmuebless/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@paisa_inmuebless" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
              <a href="https://www.facebook.com/people/paisa_immuebles/100064058053125/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center text-xs text-gray-600 uppercase tracking-widest">
          © 2026 Paisa Inmuebles 360 S.A.S. Todos los derechos reservados.
        </div>
      </footer>

      {/* MENÚ MÓVIL INFERIOR */}
      <div className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur border-t border-gray-100 z-40 px-6 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <a href="#" className="flex flex-col items-center text-black">
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span className="text-[9px] uppercase tracking-widest">Inicio</span>
        </a>
        <a href="#videos" className="flex flex-col items-center text-gray-400 hover:text-black">
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          <span className="text-[9px] uppercase tracking-widest">Videos</span>
        </a>
        <a href="#coleccion" className="flex flex-col items-center text-gray-400 hover:text-black transition-colors">
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="text-[9px] uppercase tracking-widest">Buscar</span>
        </a>
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-24 md:bottom-8 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}