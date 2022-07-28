const data = {
  sections: [
    {
      id: "section1",
      anchor: "consulta",
      bg: "fachada.jpg",
      header: {
        sub: "CIERRA PUERTAS PATRIO",
        title: "DESCUENTO DE HASTA US$40,000",
        details: "¡El departamento de tus sueños te espera en San Miguel!",
      },
    },
    {
      id: "section2",
      anchor: "vistas",
      bg: "",
      header: {
        sub: "VISTAS IMPONENTES",
        title: "Diseñado Magistralmente",
      },
    },
    {
      id: "section3",
      anchor: "video",
      bg: "lobby-bg.jpg",
      header: {
        sub: "Valente 2:",
        title: "Vive tu mejor vida",
      },
    },
    {
      id: "section4",
      anchor: "caracteristicas",
      bg: "",
      header: {
        sub: "CARACTERÍSTICAS",
        title: "Una obra maestra de ingeniería y arquitectura",
        details:
          "Vive la vida a tu manera y llena de momentos memorables en tu nuevo hogar.<br>Disfruta la libertad y potencia la fuerza de tu espíritu en un departamento único, con espacios modernos y funcionales que solo Valente 2 te puede brindar.",
      },
    },
    {
      id: "section5",
      anchor: "equipo",
      bg: "",
      header: {
        sub: "EL EQUIPO DISEÑADOR",
        title: "Carlos Ott & Carlos Ponce de León",
        details:
          "The Grand fue diseñado por los creadores de obras magistrales como la Ópera de la Bastilla, Paris; Burj Al Arab, Dubai; Jade Ocean, Echo Brickell y Waldorf Astoria, Miami. ",
      },
    },
    {
      id: "section6",
      anchor: "ubicacion",
      bg: "",
      header: {},
    },
    {
      id: "section7",
      anchor: "creditos",
      bg: "",
      header: {},
    },
    {
      id: "section8",
      anchor: "creditos",
      bg: "",
      header: {},
    },
  ],
  projectName: "",
  form: {
    title: "CONSULTA POR LA PROMOCIÓN",
    action:
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfofqfJiZUpocaN-ddn2-hjWCI458Cbn9jeVmc_07XWUB7yWA/formResponse",
    target: "iframe-hidden",
    method: "post",
    items: [
      {
        type: "text",
        required: true,
        placeholder: "Nombre y apellido",
        name: "entry.520986562",
      },
      {
        type: "text",
        required: true,
        placeholder: "Celular",
        name: "entry.1096430527",
      },
      {
        type: "email",
        required: true,
        placeholder: "Correo electrónico",
        name: "entry.2018751719",
      },
    ],
    buttonlabel: "CONOCE MÁS",
  },
  gallery: [
    { title: "Valente 2", sub: "FACHADA", src: "fachada-wide.jpg" },
    { title: "Lobby", sub: "AMENITIES", src: "lobby.jpg" },
    { title: "Piscina", sub: "AMENITIES", src: "piscina.jpg" },
    { title: "Funcional Gym", sub: "AMENITIES", src: "gym.jpg" },
    { title: "Zona de parrillas", sub: "AMENITIES", src: "parrillas.jpg" },
    { title: "Sum", sub: "AMENITIES", src: "sum.jpg" },
    {
      title: "Dormitorio principal",
      sub: "INTERIOR",
      src: "dormitorio-p.jpg",
    },
    {
      title: "Dormitorio secundario",
      sub: "INTERIOR",
      src: "dormitorio-s.jpg",
    },
    { title: "Sala", sub: "INTERIOR", src: "sala.jpg" },
    { title: "Terraza", sub: "AMENITIES", src: "terraza.jpg" },
    { title: "Terraza", sub: "VISTA AL MAR", src: "terraza-mar.jpg" },
  ],
  video: {
    url: "https://www.youtube.com/embed/Z3E501CgZ20",
    preview: "fachada.jpg",
  },
  features: [
    "Edificio con 16 pisos",
    "2 Sótanos de estacionamientos",
    "Lobby",
    "Coworking",
    "Piscina",
    "Funcional Gym",
    "SUM",
    "Zona de parrillas",
    "Centro de lavado",
  ],
  team: {
    building: "fachada-slim.jpg",
    items: [
      {
        src: "Carlos-Ott-2.jpg",
        fullname: "Carlos Ott",
        label: "ARQUITECTO",
        bio: "Arquitecto reconocido internacionalmente por sus diseños únicos, ganador del concurso para la Ópera de la Bastilla en París (entre 1,700 participantes).",
      },
      {
        src: "Carlos-Ponde-.jpg",
        fullname: "Carlos Ponce de León",
        label: "ARQUITECTO",
        bio: "Arquitecto con destacada experiencia en proyectos corporativos y residenciales a gran escala en las zonas más exclusivas de América Latina, India, Asia y Emiratos Árabes.",
      },
      {
        src: "jordi-1-2.jpg",
        fullname: "Jordi Puig",
        label: "ARQUITECTO DE INTERIORES",
        bio: "",
      },
      {
        src: "Claudia-1-2.jpg",
        fullname: "Claudia Paz",
        label: "DISEÑO DE ILUMINACIÓN",
        bio: "",
      },
    ],
  },
  location: {
    map: "map.jpg",
    status: "Proyeto en construcción",
    district: "San Miguel",
    price: "US$ 501,000",
    offerprice: "US$ 440,000*",
    finish: "2do Semestre 2023",
  },
  credits: [
    {
      title: "CONSTRUYE",
      src: "grupo_octagon.png",
      details:
        "Grupo de empresas inmobiliarias con más de 20 años dedicados al desarrollo inmobiliario en Estados Unidos y actualmente desarrolla 4 proyectos en el Perú: The Grand en San Isidro, The Modern y Oficinas Boutique en Barranco y Miramar en San Bartolo.",
    },
    {
      title: "INVIERTE",
      src: "peninsula_logotipo.png",
      details:
        "Fondo de inversión inmobiliario con proyectos en 15 ciudades de Latinoamérica. En 11 años de trayectoria ha construido más de 60 proyectos, 1.2 millones de m2, 15mil unidades residenciales y 50mil m2 comerciales.",
    },
    {
      title: "FINANCIA",
      src: "banco-de-credito-del-peru-bcp.png",
      details:
        "Sólida institución financiera líder indiscutible del mercado peruano a lo largo de sus más de 115 años de trayectoria. Forma parte del conglomerado financiero local Credicorp. El banco cuenta con una filial en Bolivia y sucursales en Miami, Florida (EEUU), Chile y Panamá.",
    },
  ],
  info: {
    showroom: "Calle Libertadores 237, San Isidro",
    ventas: "Av. Pezet con Av. Gral. Portillo, San Isidro, Lima – Perú.",
    email: "thegrand@grupoctagon.com",
    phone: "+51 938071005",
    schedule: "Lun. a dom. de  10:00 a 19:00 hrs",
  },
};

export default data;
