// Packs del CIBERLUNES — SIMBA Kids UY.
// "discount" es el % que se muestra en la landing. "price" es el precio promo y NO se muestra:
// solo se usa para calcular el total del mensaje de WhatsApp.
//
// "addon" = pregunta de venta adicional ("¿Querés sumar…?"):
//   type "designs" (por defecto): se eligen diseños de un producto, sin límite de cantidad.
//   type "plain":  producto sin diseños, se elige solo la cantidad (sin límite).
//   type "bundle": una promo con varios productos a elegir, 1 sola unidad (precio fijo "fixedPrice").
//   Precio por unidad = redondeo(basePrice × (1 − discount/100)), salvo que tenga "fixedPrice".
window.SIMBA_PACKS = [
  {
    "slug": "descubrimiento",
    "name": "Pack \"Descubrimiento\" 4 Pañales",
    "subtitle": "2 Estándar + 1 Premium DryFit Café + 1 Premium Carbón de Bambú",
    "discount": 35,
    "price": 2735,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PORTADA_PACK_DESCUBRIMIENTO_NUEVA_14c0b856-8435-4830-81bc-c07f7f43f694.png?v=1785172615",
    "components": [
      { "product": "panal-estandar", "label": "Pañal Estándar", "qty": 2 },
      { "product": "panal-dryfit-cafe", "label": "Pañal Café", "qty": 1 },
      { "product": "panal-carbon-bambu", "label": "Pañal Carbón", "qty": 1 }
    ],
    "addon": { "type": "designs", "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40", "noun": "una bolsa impermeable mediana adicional", "discount": 16, "basePrice": 590 }
  },
  {
    "slug": "x8-dryfit-cafe",
    "name": "PACK x8 Pañales DryFit Café",
    "subtitle": "8 Pañales Premium DryFit Café + Bolsa Impermeable Mediana de regalo",
    "discount": 35,
    "price": 4745,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/8_PANALES_ECOLOGICOS_SIMBA_PREMIUM_DRYFIT_CAFE.png?v=1769443766",
    "components": [
      { "product": "panal-dryfit-cafe", "label": "Pañal Café", "qty": 8 },
      { "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40 de Regalo 🎁", "qty": 1 }
    ],
    "addon": { "type": "plain", "label": "Pack x8 Absorbentes Combinados de 4 capas", "noun": "un pack de 8 absorbentes combinados adicional", "discount": 10, "basePrice": 1690 }
  },
  {
    "slug": "x12-estandar",
    "name": "PACK x12 Pañales Estándar",
    "subtitle": "12 Pañales Estándar + Bolsa Impermeable Mediana de regalo",
    "discount": 40,
    "price": 4835,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/12_PANALES_REUTILIZABLES_SIMBA_ESTANDAR.png?v=1769538120",
    "components": [
      { "product": "panal-estandar", "label": "Pañal Estándar", "qty": 12 },
      { "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40 de Regalo 🎁", "qty": 1 }
    ],
    "addon": { "type": "plain", "label": "Pack x8 Absorbentes Combinados de 4 capas", "noun": "un pack de 8 absorbentes combinados adicional", "discount": 10, "basePrice": 1690 }
  },
  {
    "slug": "promo-playa",
    "name": "Promo Playa",
    "subtitle": "2 Pañales para el Agua + Bolsa Impermeable Chica",
    "discount": 25,
    "price": 1140,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PROMO_DE_PANALES_PARA_EL_AGUA_COLECCION_2026_1.png?v=1788447901",
    "components": [
      { "product": "panal-agua", "label": "Pañal de Agua", "qty": 2 },
      { "product": "bolsa-chica", "label": "Bolsa Impermeable Chica 20x25", "qty": 1 }
    ],
    "addon": { "type": "designs", "product": "remera-uv", "label": "Remera UV", "noun": "una remera UV adicional", "discount": 20, "basePrice": 890, "sizeChart": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/TABLA_DE_TALLES_PARA_LAS_FOTOS_DE_LAS_DESCRIPCION.png?v=1786962235" }
  },
  {
    "slug": "promo-verano",
    "name": "Promo Verano",
    "subtitle": "Pañal para el Agua + Bolsa Impermeable Chica + Remera UV",
    "discount": 20,
    "price": 1460,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PROMO_DE_PANALES_PARA_EL_AGUA_COLECCION_2026_3.png?v=1787002806",
    "components": [
      { "product": "panal-agua", "label": "Pañal de Agua", "qty": 1 },
      { "product": "bolsa-chica", "label": "Bolsa Impermeable Chica 20x25", "qty": 1 },
      { "product": "remera-uv", "label": "Remera UV", "qty": 1, "sizeChart": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/TABLA_DE_TALLES_PARA_LAS_FOTOS_DE_LAS_DESCRIPCION.png?v=1786962235" }
    ],
    "addon": { "type": "designs", "product": "panal-agua", "label": "Pañal de Agua", "noun": "un pañal para el agua adicional", "discount": 20, "basePrice": 590 }
  },
  {
    "slug": "panaleo-mixto",
    "name": "PACK x10 Pañaleo Mixto",
    "subtitle": "4 Estándar + 3 DryFit Café + 3 Carbón de Bambú + Bolsa Mediana de regalo",
    "discount": 35,
    "price": 6990,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PANALEO_MIXTO_DE_SIMBA_PANALES_VARIADOS.png?v=1769504492",
    "components": [
      { "product": "panal-estandar", "label": "Pañal Estándar", "qty": 4 },
      { "product": "panal-dryfit-cafe", "label": "Pañal Café", "qty": 3 },
      { "product": "panal-carbon-bambu", "label": "Pañal Carbón", "qty": 3 },
      { "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40 de Regalo 🎁", "qty": 1 }
    ],
    "addon": { "type": "plain", "label": "Pack x3 Rollos de Bambú", "noun": "un pack de 3 rollos de bambú adicional", "discount": 11, "basePrice": 1099 }
  },
  {
    "slug": "maxima-experiencia",
    "name": "PACK x20 Máxima Experiencia",
    "subtitle": "8 Estándar + 6 DryFit Café + 6 Carbón de Bambú + 3 Bolsas de regalo",
    "discount": 40,
    "price": 13099,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PACK_MAXIMA_EXPERIENCIA_DE_SIMBA_COMPLETO.png?v=1769504517",
    "components": [
      { "product": "panal-estandar", "label": "Pañal Estándar", "qty": 8 },
      { "product": "panal-dryfit-cafe", "label": "Pañal Café", "qty": 6 },
      { "product": "panal-carbon-bambu", "label": "Pañal Carbón", "qty": 6 },
      { "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40 de Regalo 🎁", "qty": 2 },
      { "product": "bolsa-chica", "label": "Bolsa Impermeable Chica 20x25 de Regalo 🎁", "qty": 1 }
    ],
    "addon": {
      "type": "bundle",
      "label": "Promo Playa",
      "noun": "una Promo Playa adicional",
      "discount": 25,
      "fixedPrice": 1140,
      "components": [
        { "product": "panal-agua", "label": "Pañal de Agua", "qty": 2 },
        { "product": "bolsa-chica", "label": "Bolsa Impermeable Chica 20x25", "qty": 1 }
      ]
    }
  },
  {
    "slug": "x8-insertos",
    "name": "PACK x8 Insertos Combinados de 4 capas",
    "subtitle": "8 Absorbentes Combinados de 4 capas para tus pañales",
    "discount": 40,
    "price": 1200,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PACK_DE_8_INSERTOS_COMBINADOS_DE_4_CAPAS_PARA_PANALES_ECOLOGICOS_SIMBA.jpg?v=1787233621",
    "components": [],
    "addon": { "type": "designs", "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40", "noun": "una bolsa impermeable mediana", "discount": 16, "basePrice": 590 }
  },
  {
    "slug": "x5-rollos",
    "name": "PACK x5 Rollos de Toallitas Biodegradables",
    "subtitle": "5 Rollos de toallitas biodegradables de bambú",
    "discount": 30,
    "price": 1360,
    "image": "https://cdn.shopify.com/s/files/1/0930/9575/6095/files/PACK_X5_LINERS_DE_BAMBOO_BIODEGRADABLES_PARA_PANALES.jpg?v=1787227673",
    "components": [],
    "addon": { "type": "designs", "product": "bolsa-mediana", "label": "Bolsa Impermeable Mediana 30x40", "noun": "una bolsa impermeable mediana", "discount": 16, "basePrice": 590 }
  }
]
;
