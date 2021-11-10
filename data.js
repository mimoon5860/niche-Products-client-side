const data = [
    {
        name: 'Pre-Owned Datejust',
        brand: 'Rolex',
        price: '9950',
        img: 'https://i.ibb.co/wMR9LFX/watch1.jpg',
        details: 'This item will be available to ship in 3-6 weeks. Photo is representative-only. Pre-Owned Rolex Datejust (116234) self-winding automatic watch, features a 36mm stainless steel case with an 18k white gold fluted bezel surrounding a blue dial on a stainless steel Oyster bracelet with folding buckle. Functions include hours, minutes, seconds and date. This watch comes complete with box and papers. Scattered Serial. Majority of time remaining on the factory warranty!'
    },
    {
        name: 'Pre-Owned Nautilus Chronograph',
        brand: 'Patek Philippe',
        price: 139950,
        img: 'https://i.ibb.co/qYfNCP4/watch2.jpg',
        details: 'This item will be available to ship in 3-6 weeks. Photo is representative-only. Pre-Owned Patek Philippe Nautilus Chronograph (5980R001) self - winding automatic watch, features a 40.5mm 18k rose gold case surrounding a brown/black dial on a brown alligator strap with an 18k rose gold deployant buckle. Functions include hours, minutes, small seconds, date and chronograph. This watch comes complete with box and papers. We back this watch with a 2-Year Watchbox warranty!'
    },
    {
        name: 'Pre-Owned Aquanaut Luce',
        brand: 'Patek Philippe',
        price: 56950,
        img: 'https://i.ibb.co/NC374Ly/watch3.jpg',
        details: 'Pre-Owned Patek Philippe Aquanaut Luce (5267200A001) quartz watch, features a 38.8mm stainless steel case with a diamond bezel surrounding a black Aquanaut pattern embossed dial on a black Tropical rubber strap with a stainless steel deployant buckle. Functions include hours, minutes, seconds and date. This watch comes complete with box and papers. We back this watch with a 2-Year Watchbox warranty!'
    },
    {
        name: 'Pre-Owned Day-Date 228239',
        brand: 'Rolex',
        price: 44950,
        img: 'https://i.ibb.co/HYz9J64/watch4.jpg',
        details: 'Pre-Owned Rolex Day-Date (228239) self - winding automatic watch, features a 40mm 18k white gold case surrounding a silver stripe motif dial on an 18k white gold President bracelet with folding buckle. Functions include hours, minutes, seconds, day and date. This watch comes complete with box and papers. We back this watch with a 2-Year Watchbox warranty! '
    },
    {
        name: 'Company Ball for BMW Chronograph',
        brand: 'Ball Watch',
        price: 1950,
        img: 'https://i.ibb.co/8bxPS7Q/watch5.jpg',
        details: 'Pre-Owned Ball Watch Company Ball for BMW Chronograph (CM3010CLCJBK) self-winding automatic watch, features a 44mm stainless steel case surrounding a black dial on a black leather strap with a stainless steel tang buckle. Functions include hours, minutes, small seconds, day, date, chronograph and tachymeter. This watch comes complete with box and papers. Majority of time remaining on the factory warranty!'
    },
    {
        name: 'Pre-Owned Fifty Fathoms',
        brand: 'Blancpain',
        price: 10450,
        img: 'https://i.ibb.co/K2sVnMk/watch6.jpg',
        details: 'Pre-Owned Blancpain Fifty Fathoms (5015113052A) self - winding automatic watch, features a 45mm stainless steel case surrounding a black dial on a brand new black sail-canvas strap with a stainless steel tang buckle. Functions include hours, minutes, seconds and date. This watch comes complete with box and papers. Time remaining on the factory warranty!'
    },
    {
        name: 'Pre-Owned Time Pyramid',
        brand: 'Arnold & Son',
        price: 15950,
        img: 'https://i.ibb.co/x6zssmT/watch7.jpg',
        details: 'Pre-Owned Arnold & Son Time Pyramid (TPBSR01AC124B) manual wind watch, features a 44.6mm black DLC coated stainless steel case surrounding a skeleton dial on a black alligator strap with a black DLC coated stainless steel tang buckle. Functions include hours and minutes. This watch comes complete with box and papers. We back this watch with a 2-Year Watchbox warranty!'
    },
    {
        name: 'Pre-Owned Santos de Cartier Large Model',
        brand: 'Cartier',
        price: 26950,
        img: 'https://i.ibb.co/NrxQsv1/watch8.jpg',
        details: 'Pre-Owned Cartier Santos de Cartier Large Model (WHSA0007) watch, features a 39.8mm stainless steel case surrounding a skeleton dial on a stainless steel bracelet with folding buckle. Functions include hours and minutes. This watch has been serviced and comes complete with box and papers. Time remaining on the Manufacturers service warranty! This watch will be ready to ship in 5-7 days!'
    },
    {
        name: 'Pre-Owned Zeitwerk Minute Repeater',
        brand: 'A. Lange & Sohne',
        price: 329950,
        img: 'https://i.ibb.co/wBPPhJy/watch9.jpg',
        details: 'Pre-Owned A. Lange & Sohne Zeitwerk Minute Repeater (147025F) manual wind watch, features a 44.2mm platinum case surrounding a silver dial on a brand new black alligator strap with a platinum deployant buckle. Functions include jumpimg hours, jumping minutes, small seconds, day/night indicator and minute repeater. This watch comes complete with box and papers. We back this watch with a 2-Year Watchbox warranty!'
    },
    {
        name: 'Pre-Owned Royal Oak',
        brand: 'Audemars Piguet',
        price: 47950,
        img: 'https://i.ibb.co/KDm6v3Q/watch10.jpg',
        details: 'Pre-Owned Audemars Piguet Royal Oak (15400STOO1220ST04) self - winding automatic watch, features a 41mm stainless steel case surrounding a grey Petite Tapiserrie bracelet with folding buckle. Functions include hours, minutes, seconds and date. This watch comes complete with box and papers. K Serial. We back this watch with a 2-Year Watchbox warranty!'
    },
    {
        name: 'Exospace B55 Night Mission',
        brand: 'Breitling',
        price: 5490,
        img: 'https://i.ibb.co/yRsQD0P/watch11.jpg',
        details: 'Pre-Owned Breitling Exospace B55 Night Mission (VB5510H2BE45) quartz watch, features a 46mm PVD coated black titanium case surrounding a Volcano black dial on a blue and black Twin Pro rubber strap with a PVD coated titanium deployant buckle. Functions include hours, minutes, seconds, date, flyback chronograph, tachymeter, and E.O.L. indicator and alarm. This watch comes complete with box and papers. Majority of Time Remaining on Factory Warranty! This watch will be ready to ship in 5-7 days!'
    },
    {
        name: 'Pre-Owned Royal Oak Offshore Chronograph Volcano Model',
        brand: 'Audemars Piguet',
        price: 27950,
        img: 'https://i.ibb.co/9h7zvq3/watch12.jpg',
        details: 'Pre-Owned Audemars Piguet Royal Oak Offshore Chronograph Volcano Model (26170STOOD101CR01) self - winding automatic watch, features a 42mm stainless steel case surrounding a black Mega Tapiserrie dial with an orange inner bezel on a black alligator strap with a stainless steel deployant buckle. Functions include hours, minutes, small seconds, date, chronograph and tachymeter. This watch has been serviced and comes complete with box and papers. G Serial. Time remaining on the Manufacturers service warranty!'
    }
]