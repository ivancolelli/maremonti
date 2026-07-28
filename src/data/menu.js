export const menuTabs = [
  { id: 'paste', label: '🍝 Pastas de la Casa' },
  { id: 'pesce', label: '🐟 Mar' },
  { id: 'carne', label: '🥩 Tierra' },
  { id: 'fatta', label: '🫕 Pasta Artesanal' },
  { id: 'insalate', label: '🥗 Ensaladas' },
  { id: 'dolce', label: '🍮 Postres' },
]

export const menuData = {
  paste: {
    note: 'Pastas frescas preparadas al momento',
    sections: [
      {
        items: [
          { name: 'Fetuccini Lalo', price: '$329', desc: 'A la mexicana — salsa de aceite y ajo con chile, tomate, cebolla y camarones flameados al vino blanco.', star: '★ La Firma' },
          { name: 'Fetuccini Maremonti', price: '$329', desc: 'Salsa de tomate con camarones y hongo porcini.', star: '★ Del Restaurante' },
          { name: 'Linguine Villas', price: '$329', desc: 'Salsa de ajo y aceite de oliva con camarones, alcachofas, tomate seco y alcaparras.' },
          { name: 'Fetuccini Gamberi', price: '$329', desc: 'Salsa rosa con camarones flameados con brandy.' },
          { name: 'Spaguetti Rossatto', price: '$329', desc: 'Salsa rosa con un poco de picante y queso parmesano.' },
          { name: 'Spaguetti Gamberi e Chipotle', price: '$329', desc: 'Salsa de tomate con chipotle, cilantro y camarones.' },
          { name: 'Spaghetti Miguelle', price: '$329', desc: 'Salsa de aceite de oliva con camarones, anchoas, aceitunas negras y alcaparras.' },
          { name: 'Fetuccini Gorgonzola e Prosciutto', price: '$329', desc: 'Salsa blanca con queso gorgonzola y prosciutto.' },
          { name: 'Linguine Menier', price: '$329', desc: 'Salsa a base de mantequilla, chile serrano, camarones y champiñones con un toque de limón.' },
          { name: 'Linguine Cozze', price: '$329', desc: 'Mejillones salteados al vino blanco, apio y salsa de tomate con un toque de limón.' },
          { name: 'Linguine Granchio', price: '$349', desc: 'Cangrejo moro con espárragos y alcaparras en aceite de oliva y ajo.' },
        ],
      },
    ],
  },
  pesce: {
    note: 'Salmón y pescado fresco · 200–220 gr',
    sections: [
      {
        items: [
          { name: 'Salmone Pistache', price: '$359', desc: 'Salmón en costra de pistache sobre una salsa de gorgonzola, acompañado de espárragos.', star: '★ El más pedido' },
          { name: 'Salmone Mandorle', price: '$359', desc: 'Salmón con costra de almendras sobre una salsa de gorgonzola, acompañado de espárragos.' },
          { name: 'Salmone a la Griglia', price: '$359', desc: 'Salmón a la parrilla con mantequilla, ajo y eneldo.' },
          { name: 'Salmone Venezia', price: '$359', desc: 'Salmón horneado y servido en salsa blanca de queso parmesano con pimientos rojos y chalot.' },
          { name: 'Salmone Valentín', price: '$359', desc: 'Chicharrón de salmón en trozos, salsa tártara de la casa.' },
          { name: 'Pesce Menier', price: '$359', desc: 'Lonja de robalo en una salsa a base de mantequilla, chile serrano y champiñones.' },
          { name: 'Pesce Mezcal', price: '$295', desc: 'Lonja de robalo en salsa a base de mantequilla y ajo, salteado y flameado con mezcal y naranja.' },
          { name: 'Pesce di Uva', price: '$295', desc: 'Filete de pescado basa al sartén con salsa de uva.' },
          { name: 'Pesce Fiorento', price: '$359', desc: 'Filete de pescado basa bañado en una salsa blanca con espinacas.' },
          { name: 'Tonno Rafayelle', price: '$359', desc: 'Atún bañado en salsa fría de tomate con anchoas y aceitunas negras.' },
          { name: 'Tonno in Crosta', price: '$359', desc: 'Atún en costra de nuez, almendras y cacahuate.' },
        ],
      },
    ],
  },
  carne: {
    note: 'Platos principales · Tierra — carnes y aves con técnica italiana',
    sections: [
      {
        items: [
          { name: 'Pollo a la Parmigiana', price: '$319', desc: 'Pechuga con corteza de queso parmesano, sobre un espejo de salsa Alfredo y espárragos.', badge: '210 gr' },
          { name: 'Pollo Piamonte', price: '$319', desc: 'Pechuga al vino tinto y pera.', badge: '210 gr' },
          { name: 'Costilla Adobada', price: '$379', desc: 'Costilla de cerdo horneada con adobo de la casa.', badge: '400 gr' },
          { name: 'Rib Eye', price: '$595', desc: 'A la parrilla y perfumado con romero.', badge: '400 gr' },
          { name: 'Cabrerías', price: '$595', desc: 'Tablitas de filete a la parrilla aromatizadas con tomillo.', badge: '400 gr' },
          { name: 'Filetto a la Toscana', price: '$595', desc: 'Filete de res con salsa de tres quesos y hongos porcini.', badge: '215 gr' },
          { name: 'Filetto a la Rossini', price: '$595', desc: 'Filete de res con vino Marsala, gratinado de queso mozzarella y prosciutto con aceite de trufa.', badge: '215 gr' },
        ],
      },
    ],
  },
  fatta: {
    note: 'Pasta artesanal y risotti preparados al momento',
    sections: [
      {
        title: 'Pasta Artesanal',
        items: [
          { name: 'Lasagna', price: '$249', desc: 'Bolognesa con pasta, queso mozzarella y bechamel.' },
          { name: 'Ravioli de Formaggio', price: '$249', desc: 'Rellenos de espinacas, champiñones y queso ricota, bañados en salsa de tomate.' },
          { name: 'Ravioli di Salmone', price: '$299', desc: 'Rellenos de salmón y bañados en salsa de azafrán.' },
          { name: 'Ravioli di Granchio', price: '$349', desc: 'Rellenos de cangrejo moro, bañados en salsa blanca con mantequilla y toque de limón.' },
        ],
      },
      {
        title: 'Risotti',
        items: [
          { name: 'Risotto con Spinaci', price: '$269', desc: 'Arroz arborio con espinacas cocidas y queso gorgonzola.', badge: '20 min' },
          { name: 'Risotto Porcini', price: '$319', desc: 'Arroz arborio con hongos porcini.', badge: '20 min' },
        ],
      },
    ],
  },
  insalate: {
    note: 'Ensaladas de autor — ingredientes frescos, aderezos de la casa',
    sections: [
      {
        items: [
          { name: 'Insalate di Pere', price: '$180', desc: 'Lechugas mixtas, queso brie, láminas de pera y cacahuate bañadas en vinagreta de cítricos.' },
          { name: 'Insalata di Mama', price: '$180', desc: 'Lechuga italiana y morada con uva, manzana y nuez en vinagreta de tomate.' },
          { name: 'Insalata Cesar', price: '$180', desc: 'Lechuga orejona con aderezo de la casa, queso parmesano y crutones.' },
          { name: 'Insalata Caprese', price: '$180', desc: 'Rodajas de tomate y queso mozzarella fresco, con tomate seco, cebolla morada, albahaca y aceite de oliva.' },
          { name: 'Insalata de Campo', price: '$180', desc: 'Lechuga italiana y morada con tomate, aceitunas, cebolla morada, queso mozzarella fresco y prosciutto.' },
          { name: 'Insalata Manzana y Gorgonzola', price: '$180', desc: 'Lechugas mixtas, manzana, espinaca, arúgula y nuez caramelizada en reducción de vino tinto con gorgonzola.' },
          { name: 'Insalata Fusilli con Pollo', price: '$180', desc: 'Lechugas mixtas, pechuga de pollo a la parrilla, pasta fusilli en aderezo Cesar con pesto.' },
        ],
      },
    ],
  },
  dolce: {
    note: 'Postres y bebidas para cerrar la noche',
    sections: [
      {
        title: 'Postres',
        items: [
          { name: 'Strudel de Manzana', price: '$179', desc: 'Manzana y canela en masa de hojaldre, acompañado de nieve de vainilla.' },
          { name: 'Tiramisú', price: '$179', desc: 'Pastelito con café y queso mascarpone.' },
          { name: 'Crème Brûlée', price: '$179', desc: 'Crema de vainilla y caramelo.' },
          { name: 'Obsesión de Chocolate', price: '$179', desc: 'Pan de chocolate relleno de chocolate caliente, horneado al momento.', badge: '20 min' },
          { name: 'Frutti Rossi Elevati', price: '$179', desc: 'Galletas tulipán con crema dulce y frutos rojos.' },
          { name: 'Flan Napolitano', price: '$179', desc: 'Clásico flan napolitano de la casa.' },
        ],
      },
      {
        title: 'Café & Digestivos',
        items: [
          { name: 'Americano / Espresso', price: '$59' },
          { name: 'Cappuccino', price: '$69' },
          { name: 'Digestivos — Licor 43 · Bailey\'s · Chinchón', price: '$139' },
        ],
      },
      {
        title: 'Vinos',
        items: [
          { name: 'Copa de Vino', price: '$159', badge: '150 ml' },
          { name: 'Descorche', price: '$195', badge: 'Botella 750 ml' },
        ],
      },
    ],
  },
}
