export interface LocationData {
  slug: string;
  name: string;
  fullName: string;
  postcode: string;
  type: 'town' | 'warrington-area';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whyWCD: string;
  nearbyLocations: string[];
  distance: string;
}

export const allLocations: LocationData[] = [
  // ─── SURROUNDING TOWNS ──────────────────────────────────────────────────────
  {
    slug: 'car-detailing-warrington',
    name: 'Warrington',
    fullName: 'Car Detailing Warrington',
    postcode: 'WA1–WA5',
    type: 'town',
    metaTitle: 'Car Detailing Warrington | #1 Rated Local Detailers | WCD',
    metaDescription:
      "Warrington's #1 car detailing specialists. Mobile & studio detailing across WA1, WA2, WA3, WA4, WA5. 5-star Google rating. Call 07958 752513.",
    h1: 'Car Detailing in Warrington',
    intro:
      'WCD Car Detailing is Warrington\'s premier detailing studio, based at Fairclough Mill in WA5. We serve every postcode across Warrington — from Great Sankey and Westbrook in the west, to Birchwood and Culcheth in the east, and Stockton Heath and Grappenhall in the south. Whether you\'re based near Warrington Bank Quay, the Cockhedge Shopping Centre, or out in the quieter residential suburbs, our mobile unit comes to you. We cover WA1, WA2, WA3, WA4, and WA5 in full.',
    whyWCD:
      'As Warrington\'s home-grown detailing business, we know every road, estate, and suburb in the town. We\'ve built our reputation on delivering showroom-quality results across all of Warrington — with the kind of local service and care that national chains simply can\'t offer.',
    nearbyLocations: [
      'car-detailing-widnes',
      'car-detailing-runcorn',
      'car-detailing-st-helens',
      'car-detailing-newton-le-willows',
      'car-detailing-lymm',
      'car-detailing-knutsford',
    ],
    distance: '0 miles — Based here',
  },
  {
    slug: 'car-detailing-st-helens',
    name: 'St Helens',
    fullName: 'Car Detailing St Helens',
    postcode: 'WA9–WA10',
    type: 'town',
    metaTitle: 'Car Detailing St Helens | Mobile Valeting WA9 WA10 | WCD',
    metaDescription:
      'Professional car detailing in St Helens. WCD mobile unit covers WA9 & WA10 postcodes. 5-star rated, fully equipped. Free quote: 07958 752513.',
    h1: 'Car Detailing in St Helens',
    intro:
      'WCD Car Detailing provides professional mobile car detailing and valeting throughout St Helens, including Eccleston, Rainford, Haydock, Billinge, Bold, and the surrounding WA9 and WA10 postcode areas. St Helens is home to a proud motoring community and we regularly travel across the town to deliver full exterior and interior detailing, ceramic coatings, paint correction, and mobile valeting services. Whether you\'re near St Helens town centre, out in Rainford village, or based in the Haydock industrial belt, WCD brings the detail studio to your door.',
    whyWCD:
      'St Helens customers consistently rate us 5 stars for punctuality, professionalism, and results. We\'ve detailed everything from family hatchbacks to prestige vehicles across the St Helens borough — and we know the roads here as well as we know the ones at home in Warrington.',
    nearbyLocations: [
      'car-detailing-warrington',
      'car-detailing-wigan',
      'car-detailing-liverpool',
      'car-detailing-newton-le-willows',
      'car-detailing-widnes',
    ],
    distance: '10 miles from Warrington',
  },
  {
    slug: 'car-detailing-widnes',
    name: 'Widnes',
    fullName: 'Car Detailing Widnes',
    postcode: 'WA8',
    type: 'town',
    metaTitle: 'Car Detailing Widnes | Mobile Valeting WA8 | WCD Warrington',
    metaDescription:
      'Car detailing and mobile valeting in Widnes WA8. WCD travels from Warrington covering Farnworth, Ditton, Hough Green and all WA8 areas.',
    h1: 'Car Detailing in Widnes',
    intro:
      'WCD Car Detailing regularly serves customers across Widnes, covering Farnworth, Ditton, Hough Green, Upton, Appleton, Kingsway, and all WA8 postcode areas. Sitting just across the Mersey from Runcorn and a short drive from Warrington, Widnes is well within our mobile service zone. Our fully-equipped van carries everything needed to deliver a full detail at your home, driveway, or place of work — no need to take time out of your day.',
    whyWCD:
      'Widnes customers appreciate our no-fuss mobile service — we travel from our Warrington base, arrive on time, and transform your vehicle without disrupting your day. Our WA8 coverage is comprehensive and we\'re familiar with every part of the town.',
    nearbyLocations: [
      'car-detailing-warrington',
      'car-detailing-runcorn',
      'car-detailing-liverpool',
      'car-detailing-st-helens',
    ],
    distance: '7 miles from Warrington',
  },
  {
    slug: 'car-detailing-runcorn',
    name: 'Runcorn',
    fullName: 'Car Detailing Runcorn',
    postcode: 'WA7',
    type: 'town',
    metaTitle: 'Car Detailing Runcorn | Mobile Valeting WA7 | WCD',
    metaDescription:
      'Professional car detailing in Runcorn WA7. Mobile unit covers Halton, Frodsham, Helsby, Sutton Weaver and all Runcorn areas. WCD 5-star rated.',
    h1: 'Car Detailing in Runcorn',
    intro:
      'WCD serves the full Runcorn area including Halton, Frodsham, Helsby, Sutton Weaver, Murdishaw, Palace Fields, and all WA7 postcodes with our fully-equipped mobile detailing unit. Runcorn\'s mix of new estates and older residential streets means vehicles are often exposed to road grime, salt, and industrial fallout — exactly the kind of contamination our decontamination and detailing packages are designed to remove. We\'ll meet you at your home, workplace, or any convenient location.',
    whyWCD:
      'We\'ve built a strong client base across Runcorn and the wider Halton area. Our customers value our honest pricing, professional results, and the fact that we come to them — no dropping the car off, no waiting around.',
    nearbyLocations: [
      'car-detailing-widnes',
      'car-detailing-warrington',
      'car-detailing-chester',
      'car-detailing-northwich',
    ],
    distance: '9 miles from Warrington',
  },
  {
    slug: 'car-detailing-wigan',
    name: 'Wigan',
    fullName: 'Car Detailing Wigan',
    postcode: 'WN',
    type: 'town',
    metaTitle: 'Car Detailing Wigan | Mobile Valeting WN | WCD Warrington',
    metaDescription:
      'Car detailing and mobile valeting in Wigan. WCD travels from Warrington covering Standish, Ashton, Leigh and all WN postcodes. Book 07958 752513.',
    h1: 'Car Detailing in Wigan',
    intro:
      'WCD Car Detailing travels to Wigan and the surrounding WN postcode areas, including Standish, Ashton-in-Makerfield, Leigh, Abram, and Hindley. Our mobile unit makes the short run up from Warrington regularly, bringing professional-grade detailing to Wigan customers who want showroom results without the hassle. From a fresh mobile valet to a full multi-stage paint correction, we handle every type of vehicle and every level of detail.',
    whyWCD:
      'Wigan customers choose WCD because we bring the same professional standard we deliver in Warrington directly to their door — no compromise on quality, products, or results, regardless of how far we travel.',
    nearbyLocations: [
      'car-detailing-st-helens',
      'car-detailing-manchester',
      'car-detailing-warrington',
      'car-detailing-newton-le-willows',
    ],
    distance: '16 miles from Warrington',
  },
  {
    slug: 'car-detailing-manchester',
    name: 'Manchester',
    fullName: 'Car Detailing Manchester',
    postcode: 'M',
    type: 'town',
    metaTitle: 'Car Detailing Manchester | Mobile Valeting | WCD Warrington',
    metaDescription:
      'Car detailing and mobile valeting in Manchester. WCD travels from Warrington covering Sale, Trafford, Altrincham and South Manchester.',
    h1: 'Car Detailing in Manchester',
    intro:
      'WCD Car Detailing extends our mobile service into Greater Manchester, covering Sale, Altrincham, Stretford, Urmston, Trafford, and South Manchester. Manchester drivers are spoilt for choice with prestige and performance vehicles, and our detailing standards match that. Whether you own a German saloon, a classic, or a track-prepped hatchback, our team delivers paint correction, ceramic coating, and full-detail packages to your Manchester address.',
    whyWCD:
      'Manchester customers who\'ve used WCD tell us they struggled to find detailers who matched our combination of product knowledge, machine polishing skill, and attention to detail. We carry the full studio to your Manchester postcode.',
    nearbyLocations: [
      'car-detailing-sale',
      'car-detailing-stockport',
      'car-detailing-wigan',
      'car-detailing-warrington',
    ],
    distance: '20 miles from Warrington',
  },
  {
    slug: 'car-detailing-liverpool',
    name: 'Liverpool',
    fullName: 'Car Detailing Liverpool',
    postcode: 'L',
    type: 'town',
    metaTitle: 'Car Detailing Liverpool | Mobile Valeting | WCD Warrington',
    metaDescription:
      'Professional car detailing in Liverpool. WCD mobile unit travels from Warrington covering Woolton, Speke, Garston and all Liverpool areas.',
    h1: 'Car Detailing in Liverpool',
    intro:
      'WCD Car Detailing travels to Liverpool to serve customers across Woolton, Speke, Garston, Allerton, Childwall, and the wider Liverpool area. Liverpool\'s coastal air and busy roads mean vehicles pick up contamination, rail dust, and road salt at a higher rate than inland areas — making professional decontamination and protection services all the more worthwhile. Our mobile unit arrives fully equipped to deliver a full exterior and interior transformation at your Liverpool address.',
    whyWCD:
      'Liverpool customers have found WCD through word of mouth and our Google reputation. We bring the same Warrington-standard detailing to every job in Liverpool — using the same products, the same equipment, and the same high expectations.',
    nearbyLocations: [
      'car-detailing-st-helens',
      'car-detailing-widnes',
      'car-detailing-warrington',
    ],
    distance: '18 miles from Warrington',
  },
  {
    slug: 'car-detailing-sale',
    name: 'Sale',
    fullName: 'Car Detailing Sale',
    postcode: 'M33',
    type: 'town',
    metaTitle: 'Car Detailing Sale Manchester | Mobile Valeting M33 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Sale, Manchester M33. WCD travels from Warrington. Brooklands, Ashton on Mersey covered. Call 07958 752513.',
    h1: 'Car Detailing in Sale',
    intro:
      'WCD Car Detailing travels to Sale, covering Brooklands, Ashton on Mersey, Dane Road, and all M33 postcodes. Sale is a leafy commuter suburb with a high density of prestige vehicles, and our ceramic coating, paint correction, and full detailing packages are in demand here. Our mobile unit brings everything needed for a complete exterior or interior transformation directly to your Sale address.',
    whyWCD:
      'Sale customers rate WCD for our clear communication, precise machine polishing, and the fact that we treat every vehicle — regardless of value — with the same care and attention.',
    nearbyLocations: [
      'car-detailing-manchester',
      'car-detailing-stockport',
      'car-detailing-lymm',
      'car-detailing-knutsford',
    ],
    distance: '18 miles from Warrington',
  },
  {
    slug: 'car-detailing-stockport',
    name: 'Stockport',
    fullName: 'Car Detailing Stockport',
    postcode: 'SK',
    type: 'town',
    metaTitle: 'Car Detailing Stockport | Mobile Valeting SK | WCD',
    metaDescription:
      'Professional car detailing in Stockport SK. WCD covers Bramhall, Cheadle, Hazel Grove and all Stockport areas. Mobile unit from Warrington.',
    h1: 'Car Detailing in Stockport',
    intro:
      'WCD Car Detailing serves Stockport and the surrounding SK postcodes, including Bramhall, Cheadle, Cheadle Hulme, Hazel Grove, and Edgeley. Stockport\'s affluent southern suburbs are home to some of the finest cars in the North West, and our detailing services — from entry-level mobile valets to full multi-stage paint correction and ceramic coating — are a perfect match for discerning vehicle owners in the area.',
    whyWCD:
      'Stockport customers have praised our ability to restore paint finishes they thought were beyond help. Our multi-stage correction process can remove up to 90% of swirl marks and fine scratches, leaving a deep, mirror-like finish.',
    nearbyLocations: [
      'car-detailing-manchester',
      'car-detailing-sale',
    ],
    distance: '22 miles from Warrington',
  },
  {
    slug: 'car-detailing-chester',
    name: 'Chester',
    fullName: 'Car Detailing Chester',
    postcode: 'CH',
    type: 'town',
    metaTitle: 'Car Detailing Chester | Mobile Valeting CH | WCD Warrington',
    metaDescription:
      'Car detailing and mobile valeting in Chester CH. WCD from Warrington covers Handbridge, Blacon, Saughall and all Chester postcodes. Free quote.',
    h1: 'Car Detailing in Chester',
    intro:
      'WCD Car Detailing provides mobile car detailing throughout Chester, covering Handbridge, Blacon, Saughall, Boughton, and all CH postcode areas. Chester\'s mix of historic streets and modern residential areas means vehicles here are often exposed to tree sap, bird lime, and road grime that require professional decontamination. Our mobile unit carries the full product range — from pre-wash foam to ceramic coating — to deliver a complete detail at your Chester address.',
    whyWCD:
      'Chester customers choose WCD because we offer a professional studio standard of detailing at their door. No need to drive to a studio — we bring the studio to you.',
    nearbyLocations: [
      'car-detailing-runcorn',
      'car-detailing-northwich',
      'car-detailing-widnes',
    ],
    distance: '20 miles from Warrington',
  },
  {
    slug: 'car-detailing-northwich',
    name: 'Northwich',
    fullName: 'Car Detailing Northwich',
    postcode: 'CW9',
    type: 'town',
    metaTitle: 'Car Detailing Northwich | Mobile Valeting CW9 | WCD',
    metaDescription:
      'Professional car detailing in Northwich CW9. WCD covers Hartford, Davenham, Weaverham and all Northwich areas. Mobile from Warrington.',
    h1: 'Car Detailing in Northwich',
    intro:
      'WCD Car Detailing serves Northwich and the surrounding CW9 postcode area, including Hartford, Davenham, Weaverham, Rudheath, and Lostock Gralam. Northwich sits in the heart of the Cheshire countryside, and our Warrington base puts us perfectly positioned to travel south along the A559 to serve customers here. From a maintenance wash and protection package to a full paint correction and ceramic coating, we deliver the full range of detailing services at your door.',
    whyWCD:
      'Northwich customers appreciate our honest, transparent pricing and the fact that we explain every step of the process before we start. No surprises — just exceptional results.',
    nearbyLocations: [
      'car-detailing-chester',
      'car-detailing-knutsford',
      'car-detailing-runcorn',
      'car-detailing-warrington',
    ],
    distance: '12 miles from Warrington',
  },
  {
    slug: 'car-detailing-knutsford',
    name: 'Knutsford',
    fullName: 'Car Detailing Knutsford',
    postcode: 'WA16',
    type: 'town',
    metaTitle: 'Car Detailing Knutsford | Mobile Valeting WA16 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Knutsford WA16. WCD covers Mobberley, Mere, Tabley and all Knutsford areas. Book 07958 752513.',
    h1: 'Car Detailing in Knutsford',
    intro:
      'WCD Car Detailing travels to Knutsford and the WA16 postcode area, serving Mobberley, Mere, Tabley, Plumley, and the surrounding Cheshire countryside. Knutsford is one of the most affluent towns in the North West and is home to an impressive collection of prestige, classic, and performance vehicles. Our ceramic coating, paint correction, and full exterior detailing services are popular with Knutsford customers who demand the best for their vehicles.',
    whyWCD:
      'Knutsford customers trust WCD with their most valued vehicles — from Bentleys to classic Porsches. We use only professional-grade products and take the time to do things right.',
    nearbyLocations: [
      'car-detailing-northwich',
      'car-detailing-lymm',
      'car-detailing-manchester',
      'car-detailing-warrington',
      'car-detailing-sale',
    ],
    distance: '10 miles from Warrington',
  },
  {
    slug: 'car-detailing-newton-le-willows',
    name: 'Newton-le-Willows',
    fullName: 'Car Detailing Newton-le-Willows',
    postcode: 'WA12',
    type: 'town',
    metaTitle: 'Car Detailing Newton-le-Willows | Mobile Valeting WA12 | WCD',
    metaDescription:
      'Professional car detailing in Newton-le-Willows WA12. WCD covers Earlestown, Haydock and all WA12 areas. Mobile from Warrington.',
    h1: 'Car Detailing in Newton-le-Willows',
    intro:
      'WCD Car Detailing serves Newton-le-Willows and the WA12 postcode area, including Earlestown, Haydock, Parkside, and the residential areas surrounding Newtons town centre. Located between Warrington and St Helens, Newton-le-Willows is a short drive from our Fairclough Mill base and is well within our mobile service zone. We provide full detailing, mobile valeting, paint correction, and ceramic coating services across the whole WA12 area.',
    whyWCD:
      'Newton-le-Willows customers benefit from our central location — we\'re equidistant between Warrington and St Helens, meaning fast response times and flexible booking options.',
    nearbyLocations: [
      'car-detailing-st-helens',
      'car-detailing-warrington',
      'car-detailing-wigan',
    ],
    distance: '8 miles from Warrington',
  },
  {
    slug: 'car-detailing-lymm',
    name: 'Lymm',
    fullName: 'Car Detailing Lymm',
    postcode: 'WA13',
    type: 'town',
    metaTitle: 'Car Detailing Lymm | Mobile Valeting WA13 | WCD Warrington',
    metaDescription:
      'Car detailing and mobile valeting in Lymm WA13. WCD is based just 5 miles away covering Thelwall, Grappenhall borders and all Lymm areas.',
    h1: 'Car Detailing in Lymm',
    intro:
      'WCD Car Detailing is practically on the doorstep of Lymm — our Fairclough Mill base in Warrington is just five miles away via the A56. We regularly serve customers across Lymm village, Thelwall, and the surrounding WA13 postcode area. Lymm is a desirable Cheshire village popular with professionals who drive prestige vehicles, and our ceramic coating and paint correction services are in high demand here. We come to your home or workplace, so your car is transformed without any inconvenience.',
    whyWCD:
      'Being so close to Lymm means we can often accommodate same-day or next-day bookings. Lymm customers love the convenience and the quality — a combination that\'s hard to beat.',
    nearbyLocations: [
      'car-detailing-warrington',
      'car-detailing-knutsford',
      'car-detailing-sale',
      'car-detailing-thelwall-warrington',
    ],
    distance: '5 miles from Warrington',
  },

  // ─── WARRINGTON NEIGHBOURHOODS ───────────────────────────────────────────────
  {
    slug: 'car-detailing-great-sankey-warrington',
    name: 'Great Sankey',
    fullName: 'Car Detailing Great Sankey',
    postcode: 'WA5',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Great Sankey Warrington WA5 | WCD',
    metaDescription:
      'Mobile car detailing and valeting in Great Sankey, Warrington WA5. WCD comes to your door. Professional results, 5-star rated. Call 07958 752513.',
    h1: 'Car Detailing in Great Sankey, Warrington',
    intro:
      'Great Sankey is one of Warrington\'s largest residential areas, spread across the WA5 postcode and encompassing Dallam, Howley, Sankey Bridges, and the new-build estates bordering the M62. It\'s one of the areas we serve most regularly — our Fairclough Mill studio is just minutes away. Whether you\'re on Liverpool Road, near the Gemini Retail Park, or on one of the newer estates in the north of the village, our mobile unit can reach you quickly and deliver a full professional detail on your driveway.',
    whyWCD:
      'Great Sankey residents benefit from our proximity — we know the area well and can often offer flexible same-week booking. Our team is discreet, efficient, and leaves your driveway exactly as we found it.',
    nearbyLocations: [
      'car-detailing-westbrook-warrington',
      'car-detailing-penketh-warrington',
      'car-detailing-callands-warrington',
      'car-detailing-warrington',
    ],
    distance: '2 miles from our studio',
  },
  {
    slug: 'car-detailing-stockton-heath-warrington',
    name: 'Stockton Heath',
    fullName: 'Car Detailing Stockton Heath',
    postcode: 'WA4',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Stockton Heath Warrington WA4 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Stockton Heath WA4 Warrington. WCD serves all of South Warrington. Free quotes: 07958 752513.',
    h1: 'Car Detailing in Stockton Heath, Warrington',
    intro:
      'Stockton Heath is one of Warrington\'s most sought-after areas — a village-like suburb south of the River Mersey with independent shops, bars, and a high density of quality vehicles. We serve all of Stockton Heath, including Walton Road, London Road, Grappenhall Road, and the residential streets running off the village centre. Our mobile detailing unit is a familiar sight in this part of WA4, and we\'ve built strong relationships with customers across the area who return season after season.',
    whyWCD:
      'Stockton Heath customers tell us they chose WCD because our results match the standard they expect for their premium vehicles. We use only professional-grade products and take a methodical, careful approach to every job.',
    nearbyLocations: [
      'car-detailing-latchford-warrington',
      'car-detailing-grappenhall-warrington',
      'car-detailing-appleton-warrington',
      'car-detailing-warrington',
    ],
    distance: '4 miles from our studio',
  },
  {
    slug: 'car-detailing-birchwood-warrington',
    name: 'Birchwood',
    fullName: 'Car Detailing Birchwood',
    postcode: 'WA3',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Birchwood Warrington WA3 | WCD',
    metaDescription:
      'Professional car detailing in Birchwood WA3 Warrington. Mobile unit comes to you at home or work. Call WCD 24/7 on 07958 752513.',
    h1: 'Car Detailing in Birchwood, Warrington',
    intro:
      'Birchwood is a planned residential and business district in the east of Warrington, spanning the WA3 postcode and home to thousands of workers and families. It\'s a popular area for our mobile service — we\'re often booked to detail vehicles at the Birchwood Park business district, giving professionals a freshly detailed car ready for the end of their working day. We cover all of Birchwood, including Benson Road, Dovecot, Locking Stumps, Gorse Covert, and the Birchwood Shopping Centre area.',
    whyWCD:
      'Birchwood\'s business community loves the convenience of our workplace mobile service. You drop the car at your building, we detail it while you work, and you drive away in a transformed vehicle.',
    nearbyLocations: [
      'car-detailing-culcheth-warrington',
      'car-detailing-padgate-warrington',
      'car-detailing-fearnhead-warrington',
      'car-detailing-warrington',
    ],
    distance: '6 miles from our studio',
  },
  {
    slug: 'car-detailing-padgate-warrington',
    name: 'Padgate',
    fullName: 'Car Detailing Padgate',
    postcode: 'WA1',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Padgate Warrington WA1 | WCD',
    metaDescription:
      'Mobile car detailing in Padgate Warrington WA1. WCD professionals come to you. Ceramic coating, valeting and more. Book 07958 752513.',
    h1: 'Car Detailing in Padgate, Warrington',
    intro:
      'Padgate is a residential suburb in east Warrington, situated in the WA1 postcode and well connected via Padgate Lane and Fearnhead Lane to the rest of the town. It\'s a quiet, family-orientated area with a mix of semi-detached homes and newer builds — exactly the kind of neighbourhood where a mobile driveway detail makes perfect sense. We serve all of Padgate, including the areas around Padgate Academy, Longbarn, and the residential streets connecting it to Fearnhead and Woolston.',
    whyWCD:
      'Padgate residents love the driveway service — you don\'t need to travel anywhere. We arrive, we detail, and we leave your car looking better than the day you bought it.',
    nearbyLocations: [
      'car-detailing-fearnhead-warrington',
      'car-detailing-woolston-warrington',
      'car-detailing-birchwood-warrington',
      'car-detailing-warrington',
    ],
    distance: '4 miles from our studio',
  },
  {
    slug: 'car-detailing-latchford-warrington',
    name: 'Latchford',
    fullName: 'Car Detailing Latchford',
    postcode: 'WA4',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Latchford Warrington WA4 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Latchford Warrington WA4. Quick access from Warrington town centre. WCD 5-star rated. 07958 752513.',
    h1: 'Car Detailing in Latchford, Warrington',
    intro:
      'Latchford is a densely-populated residential district on the southern bank of the Manchester Ship Canal, connected to Warrington town centre via Loushers Lane and Wilderspool Causeway. It\'s one of Warrington\'s most established communities, with a mix of terraced streets, semis, and recently-redeveloped areas. Our mobile unit serves all of Latchford, from the streets closest to the canal to the outer residential areas bordering Stockton Heath. We\'ve built a loyal customer base here through consistent quality and honest service.',
    whyWCD:
      'Latchford customers often have limited driveway space, so we work efficiently and clean up thoroughly — leaving no trace except a beautifully detailed car.',
    nearbyLocations: [
      'car-detailing-stockton-heath-warrington',
      'car-detailing-grappenhall-warrington',
      'car-detailing-warrington',
    ],
    distance: '3 miles from our studio',
  },
  {
    slug: 'car-detailing-fearnhead-warrington',
    name: 'Fearnhead',
    fullName: 'Car Detailing Fearnhead',
    postcode: 'WA2',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Fearnhead Warrington WA2 | WCD',
    metaDescription:
      'Mobile car detailing in Fearnhead Warrington WA2. WCD brings professional detailing to your door. Book now: 07958 752513.',
    h1: 'Car Detailing in Fearnhead, Warrington',
    intro:
      'Fearnhead is a suburb in the north-east of Warrington, located in the WA2 postcode between Birchwood and Padgate. It\'s a mainly residential area with a mix of detached and semi-detached properties, where a driveway mobile detail service is an obvious choice for busy households. We cover all of Fearnhead, including Fearnhead Cross, Long Lane, Solway Close, and the estates connecting it to Croft and Culcheth to the north.',
    whyWCD:
      'Fearnhead customers often have more than one vehicle to detail, and we\'re happy to tackle a fleet of household cars in one visit — great value and maximum convenience.',
    nearbyLocations: [
      'car-detailing-padgate-warrington',
      'car-detailing-birchwood-warrington',
      'car-detailing-culcheth-warrington',
      'car-detailing-warrington',
    ],
    distance: '5 miles from our studio',
  },
  {
    slug: 'car-detailing-grappenhall-warrington',
    name: 'Grappenhall',
    fullName: 'Car Detailing Grappenhall',
    postcode: 'WA4',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Grappenhall Warrington WA4 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Grappenhall Warrington WA4. WCD serves Grappenhall Heys and all surrounding areas. Call 07958 752513.',
    h1: 'Car Detailing in Grappenhall, Warrington',
    intro:
      'Grappenhall and the newer Grappenhall Heys development sit on the southern edge of Warrington in the WA4 postcode, bordering Lymm and the Cheshire countryside. It\'s one of Warrington\'s most desirable areas, characterised by large detached homes, tree-lined avenues, and a higher-than-average concentration of premium vehicles. Our ceramic coating and paint correction services are particularly popular in Grappenhall — the kind of work that protects and enhances vehicles that owners take real pride in.',
    whyWCD:
      'Grappenhall customers know quality when they see it. We\'re trusted with some of the finest vehicles in Warrington in this area, and we take that responsibility seriously.',
    nearbyLocations: [
      'car-detailing-stockton-heath-warrington',
      'car-detailing-appleton-warrington',
      'car-detailing-thelwall-warrington',
      'car-detailing-warrington',
    ],
    distance: '5 miles from our studio',
  },
  {
    slug: 'car-detailing-westbrook-warrington',
    name: 'Westbrook',
    fullName: 'Car Detailing Westbrook',
    postcode: 'WA5',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Westbrook Warrington WA5 | WCD',
    metaDescription:
      'Mobile car detailing in Westbrook Warrington WA5. WCD covers Cromwell Avenue area and all Westbrook estates. Free quote 07958 752513.',
    h1: 'Car Detailing in Westbrook, Warrington',
    intro:
      'Westbrook is a large residential district in the west of Warrington, centred around the Westbrook Centre retail park and spreading across wide residential estates in WA5. It\'s one of Warrington\'s fastest-growing areas, with extensive new-build housing attracting young families and professionals. Our mobile service is a natural fit for the busy households of Westbrook — we come to your driveway and deliver a full professional detail while you get on with your day.',
    whyWCD:
      'Westbrook residents make up a significant proportion of our repeat customer base. The convenience of the mobile service combined with the quality of the results keeps them coming back.',
    nearbyLocations: [
      'car-detailing-great-sankey-warrington',
      'car-detailing-callands-warrington',
      'car-detailing-penketh-warrington',
      'car-detailing-warrington',
    ],
    distance: '3 miles from our studio',
  },
  {
    slug: 'car-detailing-penketh-warrington',
    name: 'Penketh',
    fullName: 'Car Detailing Penketh',
    postcode: 'WA5',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Penketh Warrington WA5 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Penketh Warrington WA5. WCD serves Liverpool Road area and all Penketh estates. Book 07958 752513.',
    h1: 'Car Detailing in Penketh, Warrington',
    intro:
      'Penketh is a semi-rural suburb on the western edge of Warrington, located in WA5 and bordered by the River Mersey to the south and the M62 to the north. It\'s a quieter, more spacious part of the town with wide driveways — perfect for our mobile detailing service. We serve all of Penketh, including Penketh Lane, Liverpool Road, Houghton Green, and the residential estates running towards Great Sankey.',
    whyWCD:
      'Penketh customers typically have space for our full mobile setup and enjoy watching the transformation process. We\'re happy to talk through what we\'re doing and explain our products and techniques.',
    nearbyLocations: [
      'car-detailing-great-sankey-warrington',
      'car-detailing-westbrook-warrington',
      'car-detailing-warrington',
    ],
    distance: '4 miles from our studio',
  },
  {
    slug: 'car-detailing-woolston-warrington',
    name: 'Woolston',
    fullName: 'Car Detailing Woolston',
    postcode: 'WA1',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Woolston Warrington WA1 | WCD',
    metaDescription:
      'Mobile car detailing in Woolston Warrington WA1. WCD covers Martinscroft and Woolston Park areas. Professional results. 07958 752513.',
    h1: 'Car Detailing in Woolston, Warrington',
    intro:
      'Woolston is an established residential suburb in east Warrington, located in the WA1 postcode between Padgate and the River Mersey. The area includes Woolston Park, Martinscroft, and Risley — a mix of older housing stock and newer builds that sits within easy reach of both Warrington town centre and the M6. Our mobile team regularly visits Woolston to deliver driveway detailing, mobile valeting, and headlight restoration services.',
    whyWCD:
      'Woolston customers are regular returners — once you\'ve experienced a proper professional detail, a standard car wash simply doesn\'t cut it anymore.',
    nearbyLocations: [
      'car-detailing-padgate-warrington',
      'car-detailing-fearnhead-warrington',
      'car-detailing-warrington',
    ],
    distance: '4 miles from our studio',
  },
  {
    slug: 'car-detailing-appleton-warrington',
    name: 'Appleton',
    fullName: 'Car Detailing Appleton',
    postcode: 'WA4',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Appleton Warrington WA4 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Appleton Warrington WA4. WCD covers Appleton Thorn, Broomfields and surrounding areas. 07958 752513.',
    h1: 'Car Detailing in Appleton, Warrington',
    intro:
      'Appleton and Appleton Thorn are desirable residential areas in the south of Warrington, spanning the WA4 postcode between Grappenhall and Broomfields. The area is popular with families who commute to both Warrington and Manchester, and many residents drive premium vehicles. Our mobile detailing service covers all of Appleton, including Appleton Thorn village, Broomfields, and the estates connecting to Stockton Heath and Grappenhall.',
    whyWCD:
      'Appleton customers are among our most loyal — the combination of desirable location, quality vehicles, and appreciation for professional results makes for an ideal match with what WCD delivers.',
    nearbyLocations: [
      'car-detailing-grappenhall-warrington',
      'car-detailing-stockton-heath-warrington',
      'car-detailing-warrington',
    ],
    distance: '5 miles from our studio',
  },
  {
    slug: 'car-detailing-callands-warrington',
    name: 'Callands',
    fullName: 'Car Detailing Callands',
    postcode: 'WA5',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Callands Warrington WA5 | WCD',
    metaDescription:
      'Mobile car detailing in Callands Warrington WA5. WCD covers Callands Road, Lingley Mere and surrounding estates. Book 07958 752513.',
    h1: 'Car Detailing in Callands, Warrington',
    intro:
      'Callands is a residential area in the west of Warrington, WA5, situated between Westbrook and Great Sankey. It\'s a well-established suburb with wide residential streets, good driveway space, and easy access from the M62 — making it straightforward for our mobile unit to reach. We cover all of Callands, including Callands Road, Lingley Mere Business Park (for workplace bookings), and the estates running towards Chapelford Village.',
    whyWCD:
      'Callands is minutes from our Fairclough Mill studio, so we can offer some of the fastest turnaround times in the area. Book Monday, detail Tuesday — we\'re that close.',
    nearbyLocations: [
      'car-detailing-westbrook-warrington',
      'car-detailing-great-sankey-warrington',
      'car-detailing-penketh-warrington',
      'car-detailing-warrington',
    ],
    distance: '2 miles from our studio',
  },
  {
    slug: 'car-detailing-culcheth-warrington',
    name: 'Culcheth',
    fullName: 'Car Detailing Culcheth',
    postcode: 'WA3',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Culcheth Warrington WA3 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Culcheth Warrington WA3. WCD covers Glazebury, Croft and all surrounding areas. Free quote 07958 752513.',
    h1: 'Car Detailing in Culcheth, Warrington',
    intro:
      'Culcheth is a rural village in the north-east of Warrington, located in WA3 and surrounded by open countryside between Warrington, Newton-le-Willows, and Leigh. It\'s a popular commuter village with spacious properties and garages, making it ideal for driveway and garage-based detailing. We serve all of Culcheth, including Glazebury, Croft, and the lanes connecting Culcheth to Birchwood and Fearnhead.',
    whyWCD:
      'Culcheth customers typically have the space for our full mobile setup including water supply from their own tap. We bring the rest — the equipment, the products, and the expertise.',
    nearbyLocations: [
      'car-detailing-birchwood-warrington',
      'car-detailing-fearnhead-warrington',
      'car-detailing-warrington',
    ],
    distance: '7 miles from our studio',
  },
  {
    slug: 'car-detailing-thelwall-warrington',
    name: 'Thelwall',
    fullName: 'Car Detailing Thelwall',
    postcode: 'WA4',
    type: 'warrington-area',
    metaTitle: 'Car Detailing Thelwall Warrington WA4 | WCD',
    metaDescription:
      'Car detailing and mobile valeting in Thelwall Warrington WA4. WCD covers Thelwall Lane and Viaduct area. Professional results. 07958 752513.',
    h1: 'Car Detailing in Thelwall, Warrington',
    intro:
      'Thelwall is a picturesque village on the southern edge of Warrington, WA4, sitting alongside the Manchester Ship Canal and in the shadow of the famous Thelwall Viaduct. It\'s a quiet, characterful village popular with professionals and families who appreciate its rural feel while remaining connected to Warrington, Lymm, and the wider North West. Our mobile detailing service covers all of Thelwall, including Thelwall Lane, Bell Lane, and the residential roads running towards Grappenhall and Lymm.',
    whyWCD:
      'Thelwall is close to both Warrington and Lymm, meaning we know the roads here well and can schedule efficiently. Village driveways are ideal for our mobile setup.',
    nearbyLocations: [
      'car-detailing-grappenhall-warrington',
      'car-detailing-lymm',
      'car-detailing-appleton-warrington',
      'car-detailing-warrington',
    ],
    distance: '5 miles from our studio',
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return allLocations.find((loc) => loc.slug === slug);
}

export const townLocations = allLocations.filter((l) => l.type === 'town');
export const warringtonAreas = allLocations.filter((l) => l.type === 'warrington-area');
