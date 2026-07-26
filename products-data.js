// Stablo proizvoda: kategorija -> podkategorija -> proizvod (proizvoljna dubina).
// Svaki čvor: { id, slug, title, image (null = koristi placeholder karticu), children? }
// Nema children -> čvor je finalni proizvod (list).
const PRODUCTS_TREE = [
    {
        id: 'zidne-obloge', slug: 'zidne-obloge', title: 'Zidne obloge',
        image: 'KOSI22cm_WALL_FINAL_WEB-scaled.jpg',
        children: [
            {
                id: 'v-cut-obrada', slug: 'v-cut-obrada', title: 'V cut obrada', image: null,
                children: [
                    { id: 'earth-rings', slug: 'earth-rings', title: 'Earth rings', image: null },
                    { id: 'woodline', slug: 'woodline', title: 'Woodline', image: null },
                    { id: 'magic-motor', slug: 'magic-motor', title: 'Magic motor', image: null },
                ]
            },
            {
                id: '3d-forme', slug: '3d-forme', title: '3D forme', image: null,
                children: [
                    { id: 'heidi', slug: 'heidi', title: 'Heidi', image: null },
                    { id: 'dragon', slug: 'dragon', title: 'Dragon', image: null },
                    { id: 'quadris', slug: 'quadris', title: 'Quadris', image: null },
                ]
            },
            {
                id: 'parametric', slug: 'parametric', title: 'Parametric', image: null,
                children: [
                    { id: 'sound-wave', slug: 'sound-wave', title: 'Sound wave', image: null },
                    { id: 'mars-crater', slug: 'mars-crater', title: 'Mars crater', image: null },
                ]
            },
        ]
    },
    {
        id: 'pregrade-prostora', slug: 'pregrade-prostora', title: 'Pregrade prostora',
        image: 'VORONOI-WEB-scaled.jpg',
        children: [
            {
                id: 'air-divider', slug: 'air-divider', title: 'Air divider', image: null,
                children: [
                    { id: 'rain', slug: 'rain', title: 'Rain', image: null },
                    { id: 'bubles', slug: 'bubles', title: 'Bubles', image: null },
                ]
            },
            {
                id: 'freestanding-divider', slug: 'freestanding-divider', title: 'Freestanding divider', image: null,
                children: [
                    { id: 'stone', slug: 'stone', title: 'Stone', image: null },
                    { id: 'nex', slug: 'nex', title: 'Nex', image: null },
                ]
            },
        ]
    },
    {
        id: 'stropni-baflesi', slug: 'stropni-baflesi', title: 'Stropni baflesi',
        image: 'buff_240_final-render-scaled.jpg',
        children: [
            {
                id: '24mm-ploce', slug: '24mm-ploce', title: '24 mm ploče', image: null,
                children: [
                    { id: 'krug', slug: 'krug', title: 'Krug', image: null },
                    { id: 'kvadrat', slug: 'kvadrat', title: 'Kvadrat', image: null },
                ]
            },
            {
                id: 'traverza-pera', slug: 'traverza-pera', title: 'Traverza + pera', image: null,
                children: [
                    { id: 'goliath', slug: 'goliath', title: 'Goliath', image: null },
                    { id: 'parametric-2', slug: 'parametric', title: 'Parametric', image: null },
                ]
            },
            {
                id: 'traverza-pera-2', slug: 'traverza-pera-2', title: 'Traverza + pera 2', image: null,
                children: [
                    { id: 'sunflower', slug: 'sunflower', title: 'Sunflower', image: null },
                    { id: 'orbis', slug: 'orbis', title: 'Orbis', image: null },
                ]
            },
        ]
    },
    {
        id: 'lampe', slug: 'lampe', title: 'Lampe',
        image: 'samba_lamp-1-scaled.jpg',
        children: [
            {
                id: 'lampe-modeli', slug: 'lampe', title: 'Lampe', image: null,
                children: [
                    { id: 'samba', slug: 'samba', title: 'Samba', image: null },
                    { id: 'lusteri', slug: 'lusteri', title: 'Lusteri', image: null },
                ]
            },
        ]
    },
    {
        id: 'custom-made', slug: 'custom-made', title: 'Custom made', image: null,
        children: [
            { id: 'bmw-otok', slug: 'bmw-otok', title: 'BMW otok', image: null },
            { id: 'beehive', slug: 'beehive', title: 'Beehive', image: null },
        ]
    },
];
