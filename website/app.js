// TrailTrustTravel - Main JavaScript

// Trek Data
const treks = [
  {
    id: 'everest-base-camp',
    rank: 1,
    name: 'Everest Base Camp',
    shortName: 'EBC',
    difficulty: 'Hard',
    duration: '12–14 days',
    durationDays: 14,
    maxAltitude: '5,364 m',
    altitudeMeters: 5364,
    description: 'Follow the classic trail to the foot of the world\'s highest peak—through Sherpa villages, suspension bridges, and glacier moraine. This iconic trek takes you through the heart of the Khumbu region, offering unparalleled views of Mount Everest and surrounding Himalayan giants.',
    shortDescription: 'The ultimate Himalayan adventure to the base of the world\'s highest peak.',
    image: 'images/everest-base-camp.jpg',
    price: '$1,800 – $2,500',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', description: 'Welcome to Nepal! Transfer to your hotel and trek briefing.', elevation: '1,400 m' },
      { day: 2, title: 'Fly to Lukla, Trek to Phakding', description: 'Scenic flight to Lukla (2,840m), then gentle trek to Phakding.', elevation: '2,610 m', distance: '8 km', duration: '3-4 hours' },
      { day: 3, title: 'Namche Bazaar', description: 'Cross suspension bridges and climb to the Sherpa capital.', elevation: '3,440 m', distance: '10 km', duration: '6-7 hours' },
      { day: 4, title: 'Acclimatization Day', description: 'Hike to Everest View Hotel for first glimpse of Everest.', elevation: '3,880 m' },
      { day: 5, title: 'Tengboche', description: 'Descend to Dudh Koshi, then climb to Tengboche Monastery.', elevation: '3,860 m', distance: '10 km', duration: '5-6 hours' },
      { day: 6, title: 'Dingboche', description: 'Trek through rhododendron forests to Dingboche.', elevation: '4,410 m', distance: '11 km', duration: '5-6 hours' },
      { day: 7, title: 'Acclimatization Day', description: 'Hike to Nangkartshang Peak for acclimatization.', elevation: '5,083 m' },
      { day: 8, title: 'Lobuche', description: 'Cross Thukla Pass with memorials to fallen climbers.', elevation: '4,940 m', distance: '8 km', duration: '5-6 hours' },
      { day: 9, title: 'Everest Base Camp', description: 'Trek to EBC via Gorak Shep. Celebrate your achievement!', elevation: '5,364 m', distance: '15 km', duration: '7-8 hours' },
      { day: 10, title: 'Kala Patthar & Pheriche', description: 'Sunrise climb to Kala Patthar (5,545m) for best Everest views.', elevation: '4,371 m', distance: '13 km', duration: '7-8 hours' },
      { day: 11, title: 'Namche Bazaar', description: 'Descend through Tengboche back to Namche.', elevation: '3,440 m', distance: '18 km', duration: '7-8 hours' },
      { day: 12, title: 'Lukla', description: 'Final trek day back to Lukla.', elevation: '2,840 m', distance: '18 km', duration: '6-7 hours' },
      { day: 13, title: 'Fly to Kathmandu', description: 'Morning flight back to Kathmandu. Free time.', elevation: '1,400 m' },
      { day: 14, title: 'Departure', description: 'Transfer to airport for your onward journey.', elevation: '1,400 m' }
    ],
    included: [
      'Airport transfers',
      'Kathmandu-Lukla-Kathmandu flights',
      'All accommodation (teahouses)',
      'All meals during trek',
      'Experienced English-speaking guide',
      'Porters (1 porter per 2 trekkers)',
      'Sagarmatha National Park permit',
      'TIMS card',
      'First aid kit'
    ],
    excluded: [
      'International flights',
      'Nepal visa ($30-50)',
      'Travel insurance',
      'Personal expenses',
      'Tips for guide and porters',
      'Extra nights in Kathmandu',
      'WiFi and charging costs',
      'Alcoholic beverages'
    ],
    highlights: [
      'Stand at the base of Mount Everest',
      'Sunrise from Kala Patthar (5,545m)',
      'Sherpa culture and monasteries',
      'Namche Bazaar - the Sherpa capital',
      'Tengboche Monastery with mountain views',
      'Khumbu Glacier and Icefall'
    ],
    tips: 'Physical fitness is essential. Train with cardio and hiking before the trek. Allow extra days for weather delays on Lukla flights.'
  },
  {
    id: 'annapurna-circuit',
    rank: 2,
    name: 'Annapurna Circuit',
    shortName: 'Annapurna',
    difficulty: 'Moderate-Hard',
    duration: '14–18 days',
    durationDays: 16,
    maxAltitude: '5,416 m',
    altitudeMeters: 5416,
    description: 'Circle the Annapurna massif, crossing the Thorong La Pass and descending through the world\'s deepest valley. This classic trek offers incredible diversity—from subtropical forests to high-altitude deserts.',
    shortDescription: 'The classic circuit around the Annapurna massif with Thorong La Pass crossing.',
    image: 'images/annapurna-circuit.jpg',
    price: '$1,400 – $2,000',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Besisahar', description: 'Drive to Besisahar, the starting point of the trek.', elevation: '760 m' },
      { day: 2, title: 'Besisahar to Chame', description: 'Trek through subtropical forests to Chame.', elevation: '2,670 m', distance: '20 km', duration: '6-7 hours' },
      { day: 3, title: 'Chame to Pisang', description: 'Walk through apple orchards with Annapurna II views.', elevation: '3,200 m', distance: '14 km', duration: '5-6 hours' },
      { day: 4, title: 'Pisang to Manang', description: 'Choose upper or lower route to Manang.', elevation: '3,540 m', distance: '18 km', duration: '6-7 hours' },
      { day: 5, title: 'Acclimatization in Manang', description: 'Rest day with optional hikes to Ice Lake or Milarepa Cave.', elevation: '3,540 m' },
      { day: 6, title: 'Manang to Yak Kharka', description: 'Gradual ascent through alpine meadows.', elevation: '4,050 m', distance: '10 km', duration: '4-5 hours' },
      { day: 7, title: 'Yak Kharka to Thorong Phedi', description: 'Short trek to base of Thorong La.', elevation: '4,525 m', distance: '7 km', duration: '4-5 hours' },
      { day: 8, title: 'Cross Thorong La to Muktinath', description: 'Early start for the challenging pass crossing.', elevation: '5,416 m', distance: '16 km', duration: '8-10 hours' },
      { day: 9, title: 'Muktinath to Marpha', description: 'Descend to the windy valley of Lower Mustang.', elevation: '2,670 m', distance: '22 km', duration: '6-7 hours' },
      { day: 10, title: 'Marpha to Ghasa', description: 'Trek through the world\'s deepest gorge.', elevation: '2,010 m', distance: '18 km', duration: '6-7 hours' },
      { day: 11, title: 'Ghasa to Tatopani', description: 'Descend further with hot springs at Tatopani.', elevation: '1,190 m', distance: '15 km', duration: '5-6 hours' },
      { day: 12, title: 'Tatopani to Ghorepani', description: 'Steep climb through rhododendron forests.', elevation: '2,880 m', distance: '15 km', duration: '7-8 hours' },
      { day: 13, title: 'Poon Hill & Tadapani', description: 'Sunrise at Poon Hill, then trek to Tadapani.', elevation: '2,630 m', distance: '12 km', duration: '5-6 hours' },
      { day: 14, title: 'Tadapani to Ghandruk', description: 'Descend to the beautiful Gurung village.', elevation: '1,940 m', distance: '10 km', duration: '4-5 hours' },
      { day: 15, title: 'Ghandruk to Pokhara', description: 'Trek to Nayapul, drive to Pokhara.', elevation: '820 m' },
      { day: 16, title: 'Pokhara to Kathmandu', description: 'Drive or fly back to Kathmandu.', elevation: '1,400 m' }
    ],
    included: [
      'All ground transportation',
      'All accommodation during trek',
      'All meals during trek',
      'Experienced guide and porters',
      'ACAP permit',
      'TIMS card',
      'First aid kit'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips',
      'Pokhara-Kathmandu flight (optional)'
    ],
    highlights: [
      'Cross Thorong La Pass (5,416m)',
      'Sacred Muktinath Temple',
      'World\'s deepest valley - Kali Gandaki',
      'Diverse landscapes and climates',
      'Traditional villages and culture',
      'Sunrise from Poon Hill'
    ],
    tips: 'The pass crossing is weather-dependent. Start early (3-4 AM) for the safest conditions. Bring warm layers.'
  },
  {
    id: 'langtang-valley',
    rank: 3,
    name: 'Langtang Valley',
    shortName: 'Langtang',
    difficulty: 'Moderate',
    duration: '7–10 days',
    durationDays: 9,
    maxAltitude: '4,984 m',
    altitudeMeters: 4984,
    description: 'A compact valley north of Kathmandu with ancient monasteries, rhododendron forests, and big mountain views. This trek is perfect for those with limited time who still want an authentic Himalayan experience.',
    shortDescription: 'A beautiful valley trek close to Kathmandu with stunning mountain views.',
    image: 'images/langtang-valley.jpg',
    price: '$800 – $1,200',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Syabrubesi', description: 'Scenic drive through mountain roads.', elevation: '1,550 m' },
      { day: 2, title: 'Syabrubesi to Lama Hotel', description: 'Trek through forests along the Langtang River.', elevation: '2,380 m', distance: '11 km', duration: '6 hours' },
      { day: 3, title: 'Lama Hotel to Langtang Village', description: 'Climb through rhododendron and oak forests.', elevation: '3,430 m', distance: '14 km', duration: '6-7 hours' },
      { day: 4, title: 'Langtang to Kyanjin Gompa', description: 'Short trek to the monastery with mountain views.', elevation: '3,870 m', distance: '7 km', duration: '3-4 hours' },
      { day: 5, title: 'Acclimatization Day', description: 'Hike to Tserko Ri (4,984m) or Kyanjin Ri.', elevation: '4,984 m', distance: '12 km', duration: '6-7 hours' },
      { day: 6, title: 'Kyanjin to Lama Hotel', description: 'Descend back through the valley.', elevation: '2,380 m', distance: '21 km', duration: '6-7 hours' },
      { day: 7, title: 'Lama Hotel to Syabrubesi', description: 'Continue descent to the road head.', elevation: '1,550 m', distance: '11 km', duration: '4-5 hours' },
      { day: 8, title: 'Drive to Kathmandu', description: 'Return drive to Kathmandu.', elevation: '1,400 m' },
      { day: 9, title: 'Departure', description: 'Transfer to airport.', elevation: '1,400 m' }
    ],
    included: [
      'Kathmandu-Syabrubesi transport',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'Langtang National Park permit',
      'TIMS card'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Close to Kathmandu (no flights needed)',
      'Kyanjin Gompa monastery',
      'Panoramic views from Tserko Ri',
      'Tamang culture and villages',
      'Rhododendron forests',
      'Yak cheese factory'
    ],
    tips: 'This trek was heavily affected by the 2015 earthquake but has been rebuilt. Your visit supports local communities.'
  },
  {
    id: 'manaslu-circuit',
    rank: 4,
    name: 'Manaslu Circuit',
    shortName: 'Manaslu',
    difficulty: 'Hard',
    duration: '14–16 days',
    durationDays: 15,
    maxAltitude: '5,106 m',
    altitudeMeters: 5106,
    description: 'Trek around the eighth-highest mountain on a trail that feels like Nepal did decades ago. This restricted area trek offers raw Himalayan beauty and authentic cultural experiences.',
    shortDescription: 'Remote trek around the eighth-highest mountain in the world.',
    image: 'images/manaslu-circuit.jpg',
    price: '$1,600 – $2,200',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Soti Khola', description: 'Drive to the starting point of the trek.', elevation: '700 m' },
      { day: 2, title: 'Soti Khola to Machha Khola', description: 'Trek through rice terraces and forests.', elevation: '930 m', distance: '14 km', duration: '6-7 hours' },
      { day: 3, title: 'Machha Khola to Jagat', description: 'Cross suspension bridges and enter restricted area.', elevation: '1,410 m', distance: '15 km', duration: '6-7 hours' },
      { day: 4, title: 'Jagat to Deng', description: 'Trek through Mani walls and Buddhist villages.', elevation: '1,804 m', distance: '15 km', duration: '6-7 hours' },
      { day: 5, title: 'Deng to Namrung', description: 'Enter Nubri region with Tibetan influence.', elevation: '2,630 m', distance: '16 km', duration: '6-7 hours' },
      { day: 6, title: 'Namrung to Samagaon', description: 'Great views of Manaslu and Ganesh Himal.', elevation: '3,530 m', distance: '15 km', duration: '6-7 hours' },
      { day: 7, title: 'Acclimatization in Samagaon', description: 'Visit Pungyen Gompa or Birendra Lake.', elevation: '3,530 m' },
      { day: 8, title: 'Samagaon to Samdo', description: 'Short trek near the Tibetan border.', elevation: '3,860 m', distance: '8 km', duration: '3-4 hours' },
      { day: 9, title: 'Acclimatization in Samdo', description: 'Day hike to Tibet border viewpoint.', elevation: '4,400 m' },
      { day: 10, title: 'Samdo to Dharamsala', description: 'Trek to base of Larkya La.', elevation: '4,460 m', distance: '7 km', duration: '4-5 hours' },
      { day: 11, title: 'Cross Larkya La to Bimthang', description: 'Challenging pass crossing with stunning views.', elevation: '5,106 m', distance: '18 km', duration: '8-10 hours' },
      { day: 12, title: 'Bimthang to Tilije', description: 'Descend through pine and rhododendron forests.', elevation: '2,300 m', distance: '18 km', duration: '6-7 hours' },
      { day: 13, title: 'Tilije to Tal', description: 'Continue descent to Annapurna Circuit trail.', elevation: '1,700 m', distance: '15 km', duration: '5-6 hours' },
      { day: 14, title: 'Tal to Syange', description: 'Final trek day to road head.', elevation: '1,100 m', distance: '12 km', duration: '4-5 hours' },
      { day: 15, title: 'Drive to Kathmandu', description: 'Return drive to Kathmandu.', elevation: '1,400 m' }
    ],
    included: [
      'Kathmandu-Soti Khola-Syange transport',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'Manaslu Restricted Area Permit',
      'MCAP and ACAP permits',
      'TIMS card'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Cross Larkya La Pass (5,106m)',
      'Views of Manaslu (8,163m)',
      'Remote Nubri culture',
      'Ancient monasteries',
      'Restricted area experience',
      'Less crowded than EBC/Annapurna'
    ],
    tips: 'Requires minimum 2 trekkers and a guide. Book well in advance for permit processing.'
  },
  {
    id: 'upper-mustang',
    rank: 5,
    name: 'Upper Mustang',
    shortName: 'Mustang',
    difficulty: 'Moderate',
    duration: '10–12 days',
    durationDays: 12,
    maxAltitude: '3,810 m',
    altitudeMeters: 3810,
    description: 'Explore the rain-shadow plateau behind the Himalaya—cliff villages, caves, and Tibetan traditions. This former kingdom offers a unique landscape that resembles Tibet more than Nepal.',
    shortDescription: 'Explore the hidden kingdom behind the Himalayas with Tibetan culture.',
    image: 'images/upper-mustang.jpg',
    price: '$2,000 – $2,800',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Pokhara', description: 'Drive or fly to Pokhara.', elevation: '820 m' },
      { day: 2, title: 'Fly to Jomsom, Trek to Kagbeni', description: 'Scenic flight, then trek to the gateway of Upper Mustang.', elevation: '2,810 m', distance: '10 km', duration: '3-4 hours' },
      { day: 3, title: 'Kagbeni to Chele', description: 'Enter the restricted area of Upper Mustang.', elevation: '3,050 m', distance: '12 km', duration: '5-6 hours' },
      { day: 4, title: 'Chele to Syangboche', description: 'Cross passes with views of Nilgiri and Tilicho.', elevation: '3,800 m', distance: '14 km', duration: '6-7 hours' },
      { day: 5, title: 'Syangboche to Ghami', description: 'Trek through the longest mani wall in Mustang.', elevation: '3,520 m', distance: '12 km', duration: '5-6 hours' },
      { day: 6, title: 'Ghami to Tsarang', description: 'Cross Tsarang La and visit the old palace.', elevation: '3,620 m', distance: '12 km', duration: '5-6 hours' },
      { day: 7, title: 'Tsarang to Lo Manthang', description: 'Trek to the walled capital of Mustang.', elevation: '3,810 m', distance: '13 km', duration: '5-6 hours' },
      { day: 8, title: 'Explore Lo Manthang', description: 'Visit monasteries, palace, and surrounding caves.', elevation: '3,810 m' },
      { day: 9, title: 'Lo Manthang to Yara', description: 'Trek to remote village with ancient caves.', elevation: '3,838 m', distance: '15 km', duration: '6-7 hours' },
      { day: 10, title: 'Yara to Tangge', description: 'Return trek through dramatic landscapes.', elevation: '3,240 m', distance: '18 km', duration: '7-8 hours' },
      { day: 11, title: 'Tangge to Chuksang', description: 'Descend to Kali Gandaki valley.', elevation: '2,980 m', distance: '16 km', duration: '6-7 hours' },
      { day: 12, title: 'Chuksang to Jomsom', description: 'Trek to Jomsom for flight to Pokhara.', elevation: '2,720 m', distance: '12 km', duration: '4-5 hours' }
    ],
    included: [
      'Pokhara-Jomsom-Pokhara flights',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'Upper Mustang Restricted Area Permit ($500)',
      'ACAP permit'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Kathmandu-Pokhara transport',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Walled city of Lo Manthang',
      'Ancient cave dwellings',
      'Tibetan Buddhist culture',
      'Dramatic desert landscapes',
      'Royal palace and monasteries',
      'Unique rain-shadow terrain'
    ],
    tips: 'The permit is expensive ($500) but worth it for this unique experience. Best done in monsoon when other regions are wet.'
  },
  {
    id: 'annapurna-base-camp',
    rank: 6,
    name: 'Annapurna Base Camp',
    shortName: 'ABC',
    difficulty: 'Moderate',
    duration: '7–12 days',
    durationDays: 10,
    maxAltitude: '4,130 m',
    altitudeMeters: 4130,
    description: 'Trek into the heart of the Annapurna Sanctuary, surrounded by a natural amphitheater of peaks. This trek offers incredible mountain views without the extreme altitude of EBC.',
    shortDescription: 'Trek into the Annapurna Sanctuary surrounded by towering peaks.',
    image: 'images/annapurna-base-camp.jpg',
    price: '$900 – $1,400',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Pokhara', description: 'Drive or fly to Pokhara.', elevation: '820 m' },
      { day: 2, title: 'Pokhara to Nayapul, Trek to Ghandruk', description: 'Drive to trailhead, trek to Gurung village.', elevation: '1,940 m', distance: '12 km', duration: '5-6 hours' },
      { day: 3, title: 'Ghandruk to Chhomrong', description: 'Descend to river, climb to Chhomrong.', elevation: '2,170 m', distance: '10 km', duration: '5-6 hours' },
      { day: 4, title: 'Chhomrong to Bamboo', description: 'Descend to Chhomrong Khola, climb through forest.', elevation: '2,310 m', distance: '10 km', duration: '5-6 hours' },
      { day: 5, title: 'Bamboo to Deurali', description: 'Trek through bamboo and rhododendron forests.', elevation: '3,200 m', distance: '10 km', duration: '5-6 hours' },
      { day: 6, title: 'Deurali to Annapurna Base Camp', description: 'Enter the sanctuary and reach ABC.', elevation: '4,130 m', distance: '8 km', duration: '5-6 hours' },
      { day: 7, title: 'ABC to Bamboo', description: 'Sunrise views, then descend.', elevation: '2,310 m', distance: '16 km', duration: '6-7 hours' },
      { day: 8, title: 'Bamboo to Jhinu Danda', description: 'Trek to hot springs.', elevation: '1,780 m', distance: '12 km', duration: '5-6 hours' },
      { day: 9, title: 'Jhinu to Nayapul, Drive to Pokhara', description: 'Final trek and drive to Pokhara.', elevation: '820 m', distance: '12 km', duration: '4-5 hours' },
      { day: 10, title: 'Pokhara to Kathmandu', description: 'Return to Kathmandu.', elevation: '1,400 m' }
    ],
    included: [
      'Kathmandu-Pokhara transport',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'ACAP permit',
      'TIMS card'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      '360° mountain views at ABC',
      'Annapurna Sanctuary',
      'Machhapuchhre (Fishtail) views',
      'Natural hot springs at Jhinu',
      'Gurung villages',
      'Rhododendron forests'
    ],
    tips: 'A great alternative to EBC with lower altitude but equally stunning views.'
  },
  {
    id: 'gokyo-lakes',
    rank: 7,
    name: 'Gokyo Lakes',
    shortName: 'Gokyo',
    difficulty: 'Hard',
    duration: '12–14 days',
    durationDays: 13,
    maxAltitude: '5,357 m',
    altitudeMeters: 5357,
    description: 'Trek to the highest freshwater lake system in the world, with turquoise glacial lakes and views of four 8,000m peaks. A stunning alternative to the classic EBC route.',
    shortDescription: 'Trek to the world\'s highest freshwater lakes with stunning turquoise waters.',
    image: 'images/gokyo-lakes.jpg',
    price: '$1,600 – $2,200',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Lukla to Phakding', description: 'Flight and gentle start.', elevation: '2,610 m' },
      { day: 2, title: 'Namche Bazaar', description: 'Climb to Sherpa capital.', elevation: '3,440 m' },
      { day: 3, title: 'Acclimatization Day', description: 'Hike to Everest View Hotel.', elevation: '3,880 m' },
      { day: 4, title: 'Dole', description: 'Trek through Mong La to Dole.', elevation: '4,038 m', distance: '12 km', duration: '5-6 hours' },
      { day: 5, title: 'Machhermo', description: 'Climb through rhododendron forests.', elevation: '4,470 m', distance: '7 km', duration: '3-4 hours' },
      { day: 6, title: 'Gokyo', description: 'Reach the turquoise lakes.', elevation: '4,790 m', distance: '7 km', duration: '3-4 hours' },
      { day: 7, title: 'Gokyo Ri', description: 'Sunrise climb for panoramic views.', elevation: '5,357 m', distance: '6 km', duration: '4-5 hours' },
      { day: 8, title: 'Fifth Lake Excursion', description: 'Day trip to sacred lakes.', elevation: '4,900 m', distance: '12 km', duration: '5-6 hours' },
      { day: 9, title: 'Dole', description: 'Descend back through the valley.', elevation: '4,038 m', distance: '14 km', duration: '5-6 hours' },
      { day: 10, title: 'Namche Bazaar', description: 'Continue descent.', elevation: '3,440 m', distance: '15 km', duration: '5-6 hours' },
      { day: 11, title: 'Lukla', description: 'Final trek day.', elevation: '2,840 m', distance: '18 km', duration: '6-7 hours' },
      { day: 12, title: 'Fly to Kathmandu', description: 'Return flight.', elevation: '1,400 m' },
      { day: 13, title: 'Departure', description: 'Transfer to airport.', elevation: '1,400 m' }
    ],
    included: [
      'Kathmandu-Lukla flights',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'Sagarmatha National Park permit',
      'TIMS card'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Six turquoise glacial lakes',
      'Gokyo Ri viewpoint (5,357m)',
      'Views of 4 eight-thousanders',
      'Ngozumpa Glacier',
      'Less crowded than EBC',
      'Sacred lakes'
    ],
    tips: 'Can be combined with EBC via Cho La Pass for a comprehensive Everest region experience.'
  },
  {
    id: 'mardi-himal',
    rank: 8,
    name: 'Mardi Himal',
    shortName: 'Mardi',
    difficulty: 'Moderate',
    duration: '5–7 days',
    durationDays: 6,
    maxAltitude: '4,500 m',
    altitudeMeters: 4500,
    description: 'A relatively new and less-crowded trek offering stunning views of Machhapuchhre (Fishtail), Annapurna South, and Hiunchuli. Perfect for those seeking solitude and spectacular mountain vistas.',
    shortDescription: 'A hidden gem trek with stunning views of Machhapuchhre (Fishtail).',
    image: 'images/mardi-himal.jpg',
    price: '$600 – $900',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Pokhara to Kande, Trek to Forest Camp', description: 'Drive to trailhead, trek through forest.', elevation: '2,550 m', distance: '10 km', duration: '5-6 hours' },
      { day: 2, title: 'Low Camp', description: 'Trek through rhododendron forest.', elevation: '2,990 m', distance: '7 km', duration: '4-5 hours' },
      { day: 3, title: 'High Camp', description: 'Climb above tree line with mountain views.', elevation: '3,580 m', distance: '6 km', duration: '4-5 hours' },
      { day: 4, title: 'Mardi Himal Base Camp & Return', description: 'Sunrise trek to viewpoint, return to Low Camp.', elevation: '4,500 m', distance: '12 km', duration: '6-7 hours' },
      { day: 5, title: 'Siding Village', description: 'Descend through different route.', elevation: '1,700 m', distance: '14 km', duration: '5-6 hours' },
      { day: 6, title: 'Drive to Pokhara', description: 'Return to Pokhara.', elevation: '820 m' }
    ],
    included: [
      'Pokhara transport',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'ACAP permit',
      'TIMS card'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Close-up views of Machhapuchhre',
      'Less crowded trail',
      'Rhododendron forests',
      'High ridge walking',
      'Short duration',
      'Authentic village experience'
    ],
    tips: 'A great short trek that can be done in a week. Perfect for those with limited time.'
  },
  {
    id: 'kanchenjunga-base-camp',
    rank: 9,
    name: 'Kanchenjunga Base Camp',
    shortName: 'Kanchenjunga',
    difficulty: 'Extreme',
    duration: '20–24 days',
    durationDays: 22,
    maxAltitude: '5,143 m',
    altitudeMeters: 5143,
    description: 'Trek to the base of the world\'s third-highest mountain in remote eastern Nepal. This challenging trek takes you through pristine wilderness and offers views of Kanchenjunga and surrounding peaks.',
    shortDescription: 'Remote trek to the base of the world\'s third-highest mountain.',
    image: 'images/kanchenjunga.jpg',
    price: '$2,500 – $3,500',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Kathmandu to Taplejung', description: 'Flight to Bhadrapur, drive to Taplejung.', elevation: '1,820 m' },
      { day: 2, title: 'Chirwa', description: 'Trek along Tamor River.', elevation: '1,270 m', distance: '15 km', duration: '6-7 hours' },
      { day: 3, title: 'Sekathum', description: 'Enter the restricted area.', elevation: '1,660 m', distance: '12 km', duration: '5-6 hours' },
      { day: 4, title: 'Amjilosa', description: 'Climb through bamboo forests.', elevation: '2,308 m', distance: '10 km', duration: '5-6 hours' },
      { day: 5, title: 'Gyabla', description: 'Trek through rhododendron forests.', elevation: '2,730 m', distance: '9 km', duration: '4-5 hours' },
      { day: 6, title: 'Ghunsa', description: 'Reach Tibetan village.', elevation: '3,595 m', distance: '12 km', duration: '5-6 hours' },
      { day: 7, title: 'Acclimatization Day', description: 'Explore Ghunsa and surrounding area.', elevation: '3,595 m' },
      { day: 8, title: 'Kambachen', description: 'Trek with mountain views.', elevation: '4,050 m', distance: '10 km', duration: '5-6 hours' },
      { day: 9, title: 'Lhonak', description: 'High altitude trek.', elevation: '4,780 m', distance: '10 km', duration: '5-6 hours' },
      { day: 10, title: 'Pangpema (North Base Camp)', description: 'Reach Kanchenjunga North Base Camp.', elevation: '5,143 m', distance: '12 km', duration: '6-7 hours' },
      { day: 11, title: 'Return to Ghunsa', description: 'Descend to Ghunsa.', elevation: '3,595 m', distance: '25 km', duration: '8-9 hours' },
      { day: 12, title: 'High Camp', description: 'Climb to high camp for pass crossing.', elevation: '4,100 m', distance: '10 km', duration: '5-6 hours' },
      { day: 13, title: 'Cross Sele La to Tseram', description: 'Cross high pass.', elevation: '4,290 m', distance: '12 km', duration: '6-7 hours' },
      { day: 14, title: 'Oktang (South Base Camp)', description: 'Trek to south side base camp.', elevation: '4,730 m', distance: '14 km', duration: '6-7 hours' },
      { day: 15, title: 'Tseram', description: 'Return to Tseram.', elevation: '3,870 m', distance: '14 km', duration: '5-6 hours' },
      { day: 16, title: 'Torontan', description: 'Descend through forest.', elevation: '2,995 m', distance: '15 km', duration: '5-6 hours' },
      { day: 17, title: 'Yamphudin', description: 'Continue descent.', elevation: '2,080 m', distance: '16 km', duration: '6-7 hours' },
      { day: 18, title: 'Mamankhe', description: 'Trek to village.', elevation: '1,810 m', distance: '12 km', duration: '5-6 hours' },
      { day: 19, title: 'Lali Kharka', description: 'Continue trek.', elevation: '2,220 m', distance: '14 km', duration: '5-6 hours' },
      { day: 20, title: 'Suketar', description: 'Final trek day.', elevation: '2,420 m', distance: '10 km', duration: '4-5 hours' },
      { day: 21, title: 'Fly to Kathmandu', description: 'Flight via Biratnagar.', elevation: '1,400 m' },
      { day: 22, title: 'Departure', description: 'Transfer to airport.', elevation: '1,400 m' }
    ],
    included: [
      'Kathmandu-Taplejung transport',
      'All accommodation',
      'All meals during trek',
      'Guide and porters',
      'Kanchenjunga Restricted Area Permit',
      'KCAP permit'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Views of Kanchenjunga (8,586m)',
      'Both North and South Base Camps',
      'Remote wilderness experience',
      'Cross Sele La Pass',
      'Pristine nature',
      'Rai and Limbu culture'
    ],
    tips: 'The most remote and challenging trek in Nepal. Requires excellent fitness and preparation.'
  },
  {
    id: 'ghorepani-poon-hill',
    rank: 10,
    name: 'Ghorepani Poon Hill',
    shortName: 'Poon Hill',
    difficulty: 'Easy-Moderate',
    duration: '4–5 days',
    durationDays: 5,
    maxAltitude: '3,210 m',
    altitudeMeters: 3210,
    description: 'A short, rewarding trek through rhododendron forests to one of the best sunrise viewpoints in Nepal. Perfect for beginners, families, or those with limited time.',
    shortDescription: 'The perfect short trek with stunning sunrise views over the Annapurnas.',
    image: 'images/poon-hill.jpg',
    price: '$400 – $700',
    bestTime: ['March-May', 'September-November'],
    itinerary: [
      { day: 1, title: 'Pokhara to Nayapul to Tikhedhunga', description: 'Drive to trailhead, gentle trek.', elevation: '1,540 m', distance: '10 km', duration: '4-5 hours' },
      { day: 2, title: 'Ghorepani', description: 'Climb stone steps through rhododendron forest.', elevation: '2,860 m', distance: '12 km', duration: '6-7 hours' },
      { day: 3, title: 'Poon Hill Sunrise to Tadapani', description: 'Early morning climb for sunrise, trek to Tadapani.', elevation: '2,630 m', distance: '10 km', duration: '5-6 hours' },
      { day: 4, title: 'Ghandruk', description: 'Descend to beautiful Gurung village.', elevation: '1,940 m', distance: '8 km', duration: '3-4 hours' },
      { day: 5, title: 'Nayapul to Pokhara', description: 'Trek to road and drive to Pokhara.', elevation: '820 m', distance: '12 km', duration: '4-5 hours' }
    ],
    included: [
      'Pokhara transport',
      'All accommodation',
      'All meals during trek',
      'Guide',
      'ACAP permit',
      'TIMS card'
    ],
    excluded: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    highlights: [
      'Sunrise from Poon Hill (3,210m)',
      'Panoramic mountain views',
      'Rhododendron forests',
      'Gurung villages',
      'Short duration',
      'Suitable for beginners'
    ],
    tips: 'The most popular short trek in Nepal. Book accommodation in advance during peak season.'
  }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const featuredTreksContainer = document.getElementById('featuredTreks');
const allTreksContainer = document.getElementById('allTreks');
const trekSelect = document.getElementById('trek');
const trekModal = document.getElementById('trekModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const successModal = document.getElementById('successModal');
const successClose = document.getElementById('successClose');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Helper Functions
function getDifficultyClass(difficulty) {
  const map = {
    'Easy': 'difficulty-easy',
    'Easy-Moderate': 'difficulty-easy',
    'Moderate': 'difficulty-moderate',
    'Moderate-Hard': 'difficulty-hard',
    'Hard': 'difficulty-hard',
    'Extreme': 'difficulty-extreme'
  };
  return map[difficulty] || 'difficulty-moderate';
}

function createTrekCard(trek, isFeatured = false) {
  return `
    <div class="trek-card" data-trek="${trek.id}">
      <div class="trek-image">
        <img src="${trek.image}" alt="${trek.name}" loading="lazy">
        <span class="trek-rank">#${trek.rank}</span>
        <span class="trek-difficulty ${getDifficultyClass(trek.difficulty)}">${trek.difficulty}</span>
      </div>
      <div class="trek-content">
        <h3>${trek.name}</h3>
        <p>${trek.shortDescription}</p>
        <div class="trek-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            ${trek.duration}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
            </svg>
            ${trek.maxAltitude}
          </span>
        </div>
        <div class="trek-footer">
          <span class="trek-price">${trek.price}</span>
          <span class="trek-cta">
            View Details
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedTreks() {
  if (!featuredTreksContainer) return;
  const featured = treks.slice(0, 3);
  featuredTreksContainer.innerHTML = featured.map(trek => createTrekCard(trek, true)).join('');
}

function renderAllTreks(filteredTreks = treks) {
  if (!allTreksContainer) return;
  allTreksContainer.innerHTML = filteredTreks.map(trek => createTrekCard(trek)).join('');
}

function populateTrekSelect() {
  if (!trekSelect) return;
  trekSelect.innerHTML = '<option value="">Select a trek</option>' + 
    treks.map(trek => `<option value="${trek.id}">${trek.name}</option>`).join('');
}

function openTrekModal(trekId) {
  const trek = treks.find(t => t.id === trekId);
  if (!trek || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-hero">
      <img src="${trek.image}" alt="${trek.name}">
    </div>
    <div class="modal-header">
      <span class="trek-difficulty ${getDifficultyClass(trek.difficulty)}">${trek.difficulty}</span>
      <h2 class="modal-title">${trek.name}</h2>
      <div class="modal-meta">
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          ${trek.duration}
        </span>
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
          </svg>
          ${trek.maxAltitude}
        </span>
      </div>
    </div>
    <div class="modal-content-body">
      <div class="modal-main">
        <div class="modal-tabs">
          <button class="modal-tab active" data-tab="overview">Overview</button>
          <button class="modal-tab" data-tab="itinerary">Itinerary</button>
          <button class="modal-tab" data-tab="details">Details</button>
        </div>
        
        <div class="tab-content active" id="tab-overview">
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${trek.description}</p>
          <h4 style="margin-bottom: 1rem;">Highlights</h4>
          <ul style="display: grid; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${trek.highlights.map(h => `
              <li style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary);">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" width="16" height="16">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                ${h}
              </li>
            `).join('')}
          </ul>
          <div style="background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem;">
            <strong style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" width="18" height="18">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              Pro Tips
            </strong>
            <p style="font-size: 0.875rem; color: var(--text-secondary);">${trek.tips}</p>
          </div>
        </div>
        
        <div class="tab-content" id="tab-itinerary">
          <div class="itinerary-list">
            ${trek.itinerary.map(day => `
              <div class="itinerary-item">
                <div class="itinerary-header">
                  <span class="itinerary-day">${day.day}</span>
                  <div class="itinerary-info">
                    <h4>${day.title}</h4>
                    <div class="meta">
                      <span>${day.elevation}</span>
                      ${day.distance ? `<span>${day.distance}</span>` : ''}
                      ${day.duration ? `<span>${day.duration}</span>` : ''}
                    </div>
                  </div>
                </div>
                <div class="itinerary-content">
                  <p>${day.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="tab-content" id="tab-details">
          <div class="lists-grid">
            <div class="list-section included">
              <h4>What's Included</h4>
              <ul>
                ${trek.included.map(item => `
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    ${item}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="list-section excluded">
              <h4>What's Not Included</h4>
              <ul>
                ${trek.excluded.map(item => `
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                    ${item}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-sidebar">
        <h3 style="font-family: var(--font-display); font-size: 1.125rem; margin-bottom: 1rem;">Trek Info</h3>
        <div class="info-row">
          <span class="label">Duration</span>
          <span class="value">${trek.duration}</span>
        </div>
        <div class="info-row">
          <span class="label">Max Altitude</span>
          <span class="value">${trek.maxAltitude}</span>
        </div>
        <div class="info-row">
          <span class="label">Difficulty</span>
          <span class="value">${trek.difficulty}</span>
        </div>
        <div class="info-row">
          <span class="label">Price</span>
          <span class="price">${trek.price}</span>
        </div>
        <div class="best-time">
          <h4>Best Time To Visit</h4>
          <div class="time-tags">
            ${trek.bestTime.map(time => `<span class="time-tag">${time}</span>`).join('')}
          </div>
        </div>
        <a href="#booking" class="btn-primary full-width" style="margin-top: 1rem;" onclick="selectTrek('${trek.id}'); closeModal();">
          Book This Trek
        </a>
      </div>
    </div>
  `;

  // Add tab functionality
  modalBody.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      modalBody.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      modalBody.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      modalBody.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  trekModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  trekModal.classList.remove('active');
  document.body.style.overflow = '';
}

function selectTrek(trekId) {
  if (trekSelect) {
    trekSelect.value = trekId;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  }
}

function filterTreks() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const activeFilter = document.querySelector('.filter-btn.active');
  const difficultyFilter = activeFilter ? activeFilter.dataset.filter : 'all';

  let filtered = treks;

  if (searchTerm) {
    filtered = filtered.filter(trek => 
      trek.name.toLowerCase().includes(searchTerm) ||
      trek.description.toLowerCase().includes(searchTerm)
    );
  }

  if (difficultyFilter !== 'all') {
    filtered = filtered.filter(trek => trek.difficulty.includes(difficultyFilter));
  }

  renderAllTreks(filtered);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Render treks
  renderFeaturedTreks();
  renderAllTreks();
  populateTrekSelect();

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Trek card click handlers
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.trek-card');
    if (card) {
      const trekId = card.dataset.trek;
      if (trekId) {
        openTrekModal(trekId);
      }
    }
  });

  // Modal close
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  trekModal.addEventListener('click', (e) => {
    if (e.target === trekModal) {
      closeModal();
    }
  });

  // Success modal close
  if (successClose) {
    successClose.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  // Search and filter
  if (searchInput) {
    searchInput.addEventListener('input', filterTreks);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTreks();
    });
  });

  // Booking form
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Processing...';

      // Simulate form submission
      setTimeout(() => {
        successModal.classList.add('active');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Booking Request';
        bookingForm.reset();
      }, 1500);
    });
  }

  // Contact form
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(() => {
        alert('Thank you for your message! We will get back to you within 24 hours.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        contactForm.reset();
      }, 1500);
    });
  }

  // Footer trek links
  document.querySelectorAll('[data-trek]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const trekId = link.dataset.trek;
      openTrekModal(trekId);
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Set minimum date for booking
  const startDateInput = document.getElementById('startDate');
  if (startDateInput) {
    const today = new Date().toISOString().split('T')[0];
    startDateInput.setAttribute('min', today);
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    successModal.classList.remove('active');
  }
});
