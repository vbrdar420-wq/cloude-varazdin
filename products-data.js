// Stablo proizvoda: kategorija -> proizvod.
// Svaki čvor: { id, slug, title, image (null = koristi placeholder karticu), children? }
// Nema children -> čvor je finalni proizvod (list).
const PRODUCTS_TREE = [
    {
        id: 'zidne-obloge', slug: 'zidne-obloge', title: 'Obloge zida',
        image: 'obloge-zida-hero.jpeg',
        children: [
            { id: 'earth-lines', slug: 'earth-lines', title: 'Earth Lines', image: null },
            { id: 'lines', slug: 'lines', title: 'Lines', image: null },
            { id: 'lines-33', slug: 'lines-33', title: 'Lines 33', image: null },
            { id: 'geometric', slug: 'geometric', title: 'Geometric', image: null },
            { id: 'lola-lines', slug: 'lola-lines', title: 'Lola Lines', image: null },
            { id: 'harmony', slug: 'harmony', title: 'Harmony', image: null },
            { id: 'mosaic', slug: 'mosaic', title: 'Mosaic', image: null },
            { id: 'window', slug: 'window', title: 'Window', image: null },
            { id: 'stream-lines', slug: 'stream-lines', title: 'Stream Lines', image: null },
            { id: 'dragon', slug: 'dragon', title: 'Dragon', image: null },
            { id: 'fishermans-net', slug: 'fishermans-net', title: "Fisherman's Net", image: null },
            { id: 'heidi', slug: 'heidi', title: 'Heidi', image: null },
            { id: 'quadris', slug: 'quadris', title: 'Quadris', image: null },
            { id: 'mars-crater', slug: 'mars-crater', title: 'Mars Crater', image: null },
            { id: 'bamboo', slug: 'bamboo', title: 'Bamboo', image: null },
            { id: 'parametric-wave', slug: 'parametric-wave', title: 'Parametric Wave', image: null },
        ]
    },
    {
        id: 'pregrade-prostora', slug: 'pregrade-prostora', title: 'Pregrade prostora',
        image: 'pregrade-prostora-hero.jpeg',
        children: [
            { id: 'big-x', slug: 'big-x', title: 'Big X', image: null },
            { id: 'bubbles', slug: 'bubbles', title: 'Bubbles', image: null },
            { id: 'dark-wood', slug: 'dark-wood', title: 'Dark Wood', image: null },
            { id: 'nex', slug: 'nex', title: 'Nex', image: null },
            { id: 'stone', slug: 'stone', title: 'Stone', image: null },
            { id: 'rain', slug: 'rain', title: 'Rain', image: null },
            { id: 'triangle', slug: 'triangle', title: 'Triangle', image: null },
            { id: 'voronoi', slug: 'voronoi', title: 'Voronoi', image: null },
        ]
    },
    {
        id: 'stropni-baflesi', slug: 'stropni-baflesi', title: 'Stropni apsorberi',
        image: 'stropni-apsorberi-hero.jpeg',
        children: [
            { id: 'circle', slug: 'circle', title: 'Circle', image: null },
            { id: 'goliath', slug: 'goliath', title: 'Goliath', image: null },
            { id: 'i-stripes', slug: 'i-stripes', title: 'I Stripes', image: null },
            { id: 'orbis', slug: 'orbis', title: 'Orbis', image: null },
            { id: 'sunflower', slug: 'sunflower', title: 'Sunflower', image: null },
            { id: 'tree-crown', slug: 'tree-crown', title: 'Tree Crown', image: null },
        ]
    },
    {
        id: 'lampe', slug: 'lampe', title: 'Rasvjeta',
        image: 'rasvjeta-hero.jpeg',
        children: [
            { id: 'basket', slug: 'basket', title: 'Basket', image: null },
            { id: 'avocado', slug: 'avocado', title: 'Avocado', image: null },
            { id: 'fig', slug: 'fig', title: 'Fig', image: null },
            { id: 'pear', slug: 'pear', title: 'Pear', image: null },
            { id: 'pumpkin', slug: 'pumpkin', title: 'Pumpkin', image: null },
            { id: 'samba', slug: 'samba', title: 'Samba', image: null },
        ]
    },
    {
        id: 'custom-made', slug: 'custom-made', title: 'PET felt elementi u namještaju', image: 'pet-felt-namjestaj-hero.jpeg',
        children: [
            { id: 'desk-divider', slug: 'desk-divider', title: 'Desk Divider', image: null },
            { id: 'shell', slug: 'shell', title: 'Shell', image: null },
            { id: 'tool-box', slug: 'tool-box', title: 'Tool Box', image: null },
            { id: 'planter', slug: 'planter', title: 'Planter', image: null },
        ]
    },
];
