



var config = {
  container: 'map',
  style: "mapbox://styles/erikrenglish/cl8blt1d5000414nvo2z327c5",
  accessToken:
    "pk.eyJ1IjoiZXJpa3JlbmdsaXNoIiwiYSI6ImNqNXdnZDdnNTBlMDcyd3FzNHg5YjNsN3kifQ.kDgqHDJ00xCjvUXy8x57UA",
  showMarkers: false,
  markerColor: "#3FB1CE",
  projection: "globe",


  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  legend: true, // if legend is set to true, inset will be disabled.
  theme: "dark",
  use3dTerrain: true, //set true for enabling 3D maps.
  useCustomLayers: false, //set true for enabling custom layers from sources.js
  bookmarks: true,
  chapterReturn: true,
  title: "Mapped: The worst epidemics and pandemics in human history",
  logo: "",
  subtitle:
    "Even the dead tell stories",
  byline: "Roughly 5,000 years ago in inner Mongolia, the bodies of some 97 humans were stuffed into a small old house and set ablaze. Known today as “Hamin Mangha”, it is one of the best-preserved prehistoric sites and is evidence of one of the earliest epidemics in human history. While the disease is not known, it is clear that the survivors acted quickly to isolate the bodies of the afflicted and abandon the village never to return. The history of human civilization is riddled with grizzly stories of epidemics–some borne out of nature and others through war. As early as the transition from hunter-gatherer to agrarian societies, the conditions for the spread of disease existed. As early empires stretched across the global landscape, they brought with them a score of new diseases as viruses clung to new hosts that provided the means to spread. Global trade networks, industrialization, and war would further add to the bodycount. Epidemics and pandemics have changed the course of history and destroyed civilizations. While no two epidemics are the same, it bears looking at the choices made in the past and understanding not just how pandemics begin, but how humans react to the diseases they confront. Perhaps we can learn something from the mistakes of the past, or at least be a little less surprised when they slink out of the forest.",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="https://cdn-icons-png.flaticon.com/512/41/41707.png">', // to add custom messaging in the header for mobile devices
  footer:
    'Source: source citations, etc.<br> Read more at <a href="https://thebulletin.org" target="_blank">TheBulletin.org</a>.',

  
  
  chapters: [
    {
      id: "antonine0",
      alignment: "right",
      hidden: false,
      title: "",
      image: "https://www.alpharesumes.com.au/wp-content/uploads/2018/11/Scroll-Down-icon-Home.gif",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em></em></span>',
      description: "",
      location: {
       center: [-122.418398, 37.759483],
        zoom: 2,
        pitch: 20,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'roman-empire-180',
             opacity: 0         
         },
          {
             layer: 'mex-ind',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'roman-empire-180',
             opacity: 0.5
         }
      ],
    },

    // ANTONINE PLAGUE

    {
      id: "antonine",
      alignment: "right",
      hidden: false,
      title: "The Antonine Plague",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/The_angel_of_death_striking_a_door_during_the_plague_of_Rome_Wellcome_V0010664.jpg/2880px-The_angel_of_death_striking_a_door_during_the_plague_of_Rome_Wellcome_V0010664.jpg",
      caption: "The angel of death striking a door during the plague of Rome (Wikimedia Commons)",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Antonine Plague</b><br>Smallpox or Measles<br>165–180 C.E.<br>5–10 million dead</em></span>',
      description:
        "The earliest Roman plague was the Plague of Athens, but the Antonine plague was the first known epidemic that killed more than 1 million people.",
      location: {
        center: [12.49, 41],
        zoom: 4,
        pitch: 45,
        bearing: 25,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "roman-empire-180",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "roman-empire-180",
          opacity: 0.5,
        },
      ],
    },
    
    
    {
      id: "antonine2",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Antonine Plague</b><br>Smallpox or Measles<br>165–180 C.E.<br>5–10 million dead</em></span>',
      description:
"The Antonine plague began as Roman soldiers returned from the Parthian war. Traveling back through Egypt towards Rome, the trail of disease in their wake would spread for nearly a century. In some accounts, the disease spread along Roman trading routes as far as China.",
      location: {
        center: [35.06231, 35.04131],
        zoom: 4.83,
        pitch: 60,
        bearing: -41.60,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "roman-empire-180",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "roman-empire-180",
          opacity: 0,
        },
      ],
    },
    
        {
      id: "antonine3",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Antonine Plague</b><br>Smallpox or Measles<br>165–180 C.E.<br>5–10 million dead</em></span>',
      description:
"Upon its arrival in Rome, Galen, the famed medical observer, abandoned they city as the disease killed all of his slaves. By some accounts, upwards of 2,000 people a day died in the city of Rome alone. The epidemic would eventually claim the life of Marcus Aurelius and potentially mark the beginning of the end of the Roman Empire.",
      location: {
        center: [12.51087, 41.86166],
        zoom: 12,
        pitch: 60,
        bearing: -20.80,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "settlement-major-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 0,
        },
      ],
    },

        {
      id: "antonine4",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Antonine Plague</b><br>Smallpox or Measles<br>165–180 C.E.<br>5–10 million dead</em></span>',
      description:
        "Lethal epidemics were not uncommon in the Roman Empire, and outbreaks occurred roughly every 10–20 years. However, the Antonine plague stands out as particularly malicious, as roughly 5–10 million people would die during the course of the epidemic—between 25-33% of the Roman population. Galen called this epidemic under Marcus Aurelius ‘the great plague’ but it was likely either smallpox or measles.",
      location: {
        center: [12.49, 41],
        zoom: 4,
        pitch: 45,
        bearing: 25,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "roman-empire-180",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "roman-empire-180",
          opacity: 0,
        },
      ],
    },
    
    
    //PLAGUE OF JUSTINIAN

    {
      id: "justinian",
      alignment: "right",
      hidden: false,
      title: "The Plague of Justinian",
      author: "",
      image: "https://www.grunge.com/img/gallery/what-life-was-like-during-the-plague-of-justinian/l-intro-1634746693.jpg",
            caption: "Saint Sebastian pleads with Jesus for the life of a gravedigger afflicted by plague during the plague of Justinian. (Josse Lieferinxe, Public domain, via Wikimedia Commons)",
      description: "Once the Western Roman Empire fell to Germanic conquerers in 476 CE, the Eastern Empire continued on as what would later be known as the Byzantine Empire.",
      legend: '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead</em></span>',

      location: {
        center: [12.49, 41],
          zoom: 4,
        pitch: 45,
        bearing: 25,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [{
          layer: "byzantium",
          opacity: 0.5,
        },
                      
      ],
      onChapterExit: [
        {
          layer: "byzantium",
          opacity: 0.5,
          
        }
      ],
    },
 
     {
          id: "justinian2",
      alignment: "right",
      hidden: false,
      title: "",
      author: "",
      image: "",
      description: "After arriving in Roman Egypt in 541, the disease would spread around the entire Mediterranean Basin, Europe, and the Near East.",
      legend: '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead</em></span>',

      location: {
        center: [30.01048, 27.34877],
        zoom: 4,
        pitch: 60,
        bearing: -47.20,
      },
      mapAnimation: "flyTo",
      duration: 6000,
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [{
          layer: "byzantium",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "byzantium",
          opacity: 0,
        },
      ],
    },
         {
          id: "justinian3",
      alignment: "right",
      hidden: false,
      title: "",
      author: "",
      image: "",
      description: "The capital of the Byzantine Empire, Constantinople (modern Istanbul), was severely affected and roughly one fifth of its citizens would die of the disease.",
      legend: '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead</em></span>',

      location: {
        center: [28.96543, 41.00852],
        zoom: 8.5,
        pitch: 16,
        bearing: 30.41,
      },
      mapAnimation: "flyTo",
      duration: 6000,
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [{
          layer: "settlement-major-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 0,
        },
      ],
    },
       {
          id: "justinian4",
      alignment: "right",
      hidden: false,
      title: "",
      author: "",
      image: "",
      description: "Named after the Byzantine Emperor Justinian, who would at one point be infected and survive the disease, this was the first major outbreak of the first bubonic plague pandemic. Like other outbreaks of plague that would come later, notably the Black Death, this was spread by the rat flea.",
      legend: '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead</em></span>',

      location: {
        center: [29, 41],
        zoom: 3,
        pitch: 40,
        bearing: -40,
      },
      mapAnimation: "flyTo",
      duration: 6000,
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [{
          layer: "byzantium",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "byzantium",
          opacity: 0,
        },
      ],
    },

    // JAPANESE SMALLPOX

    {
      id: "japan",
      alignment: "right",
      hidden: false,
      title: "Japanese Smallpox Epidemic",
      image:
        "https://wattention.com/wp-content/uploads/2020/05/pandemic_main_s-.jpg",
      caption: "'Shoshin no kago ni yorite ryōyaku akubyō o tai ji su' (Various protective gods help good drugs cure vicious diseases)/Utagawa, Yoshikazu, 1858, Special Collection Room, Tokyo Metropolitan Central Library.",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead</em></span>',
      description:
        '<a href="https://www.who.int/health-topics/smallpox#tab=tab_1" style="color:yellow;">Smallpox</a> reached Japan in the sixth century, having been introduced by merchants and Buddhist missionaries from the Korean kingdom of Paekche. Once introduced, it continued to appear in waves. Increased contact across the Sea of Japan and the Korean Straight resulted in more frequent outbreak of diseases.',
      location: {
        center: [139, 35],
        zoom: 5.5,
        pitch: 45,
        bearing: -90,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "japan-smallpox",
          opacity: 0.5,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "japan-smallpox",
          opacity: 0,
        },
      ],
    },
    
        {
      id: "japan2",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead</em></span>',
      description:
'In 735, reports of smallpox began to emerge out of Kyushu, a southern Japanese island. Beginning at the port of Dazaifu, fisherman reported encountering a “barbarian ship” that was infested with smallpox—likely sailing from Silla in Korea. By 736, many land tenants in Kyushu were either dying or forsaking their crops, leading to poor agricultural yields and ultimately famine. ',      location: {
        center: [130, 34.6],
        zoom: 6,
        pitch: 60,
        bearing: 44,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "country-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "country-label",
          opacity: 0,
        },
      ],
    },
    
            {
      id: "japan3",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead</em></span>',
      description:
'In 736, a group of Japanese governmental officials passed through northern Kyushu while the epidemic was intensifying.',      location: {
        center: [ 130.3668699072519,33.61328011668302],
        zoom: 9,
        pitch: 60,
        bearing: -56,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "settlement-major-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 1,
        },
      ],
    },
    
             {
      id: "japan4",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead</em></span>',
      description:
'As members of the party sickened and died, the group abandoned its intended mission to the Korean peninsula. Returning to the capital with smallpox, the officials helped spread the disease to eastern Japan and Nara.',      location: {
        center: [135.78407, 34.66149],
        zoom: 9,
        pitch: 60,
        bearing: -56,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "settlement-major-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 0,
        },
      ],
    },
        {
      id: "japan5",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead</em></span>',
      description:
        'By 737, smallpox ravaged nearly all corners of Japan, and deaths from the disease reduced the population by a third.',
      location: {
        center: [139, 35],
        zoom: 5.5,
        pitch: 45,
        bearing: -90,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "japan-smallpox",
          opacity: 0.5,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "japan-smallpox",
          opacity: 0,
        },
      ],
    },

    // THE BLACK DEATH
 
    {
      id: "black-1346",
      alignment: "right",
      hidden: false,
      title: "The Black Death",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/The_black_death._Watercolour_by_Monro_S._Orr._Wellcome_V0017196.jpg",
      caption: "The black death. Watercolour by Monro S. Orr. (Wikimedia Commons)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1346</b></em></span>',
      description:
        "To this day, the Black Death remains the deadliest epidemic in history.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
    },
    
     {
      id: "black-1347",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1347</b></em></span>',
      description:
        "At the time, Italian cities, especially Genoa and Venice, were enormous sea powers that sailed all the way to Crimea, Egypt, and around the Mediterranean Sea, through Gibraltar and all the way to Bruges and London.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
      {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
    },
    
     {
      id: "black-1348",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1348</b></em></span>',
      description:
        "These voyages relied on a network of seaports, trading posts, and factories along the sea lanes that would ultimately facilitate the wide spread of the Bubonic plague through Europe, Asia, and North Africa.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
    {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
    },
    
     {
      id: "black-1349",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1349</b></em></span>',
      description:
        "At the end of the thirteenth century, Italy was overpopulated to such a degree that existing agricultural structures could not feed the population of 12.5 million",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
  {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
    },
    
         {
      id: "black-1350",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1350</b></em></span>',
      description:
        "A large network of importing and distribution was created—specifically, of cereals, which have a high calorific content in relation to weight and transport costs—from Sicily, Provence, and Egypt.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
 {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
         },
    
       
         {
      id: "black-1351",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1351</b></em></span>',
      description:
        "The food import network became a breeding ground for ground squirrels, black rats and fleas, which spread the disease to humans.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
 {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
         },
       
         {
      id: "black-1352",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1352</b></em></span>',
      description:
        "By the end of the Black Death, it is estimated that 75–200 million people had died, between 17–54% of the global population.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
    {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
         },
       
         {
      id: "black-1353",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target="_blank"></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br></br><b>Year: 1353</b></em></span>',
      description:
        "The Black Death marks the beginning of the second plague pandemic. Although the plague died out in many places, it became endemic and recurred regularly. In some places, it recurred until the early 19th century.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 4,
        pitch: 44,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
 {
             
           layer: 'blackdeath',
             opacity: 0.8,
         }
      ],
      onChapterExit: [
         {
             layer: 'blackdeath',
             opacity: 0,
         }
      ],
         },
   
    
      // 1520 MEXICO SMALLPOX EPIDEMIC

    {
      id: "1520-mexico",
      alignment: "right",
      hidden: false,
      title: "1520 Mexico Smallpox Epidemic",
      image:
        "https://www.pastmedicalhistory.co.uk/wp-content/uploads/2017/12/The_Conquest_of_Tenochtitlan.jpg",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead</em></span>',
      description:
        "The age of exploration and the beginning of European colonialism goes hand-in-hand with the destructive power of an epidemic. One of the most damning examples is the Spanish conquest of the Aztec Empire, where smallpox would emerge in 1520 and would remain for 520 years until its eradication in 1951.",
      location: {
        center: [-94.6, 15.9],
        zoom: 4.76,
        pitch: 15.5,
        bearing: 21.21,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
             layer: 'mexico-1520',
             opacity: 0.5,
             duration: 2000
         }
      ],
      onChapterExit: [
         {
             layer: 'mexico-1520',
             opacity: 0
         }
      ],
    },
       {
      id: "1520-mexico2",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead</em></span>',
      description:
        "In 1520, Hernán Cortés and his conquistadores were kicked out of the Aztec capital of Tenochtitlan, today’s Mexico City, after taking the emperor Moctezuma captive, where he died. They left befind indigenous and African slaves from Cuba, some of which were already infected with smallpox.",
      location: {
        center: [-99.12495385665807,19.456996401931544],
        zoom: 10,
        pitch: 15.5,
        bearing: 21.21,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 1
         }
      ],
    },
        {
      id: "1520-mexico3",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead</em></span>',
      description:
        "The Aztecs tried medicinal steam baths known as temezcales, a sort of sweat lodge and long-trusted remedy for illness, but because people were packed so tightly into the enclosed stone and mud chambers, the baths served only to propagate the disease more efficiently.",
      location: {
        center: [-99.12495385665807,19.456996401931544],
        zoom: 10,
        pitch: 15.5,
        bearing: 21.21,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
    {
    
     id: "1520-mexico4",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead</em></span>',
      description:
        "Cortés and his men would reenter and conquer the disease-ravaged city a year later in August 1521",
      location: {
        center: [-99.12495385665807,19.456996401931544],
        zoom: 4.76,
        pitch: 15.5,
        bearing: 21.21,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
             layer: 'mexico-1520',
             opacity: 0.5,
         }
      ],
      onChapterExit: [
         {
             layer: 'mexico-1520',
             opacity: 0
         }
      ],
    },

    // COCOLIZTLI EPIDEMIC OF 1545–1548

    {
      id: "1545-cocoliztli",
      alignment: "right",
      hidden: false,
      title: "Cocoliztli epidemic of 1545–1548",
      image: "https://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2018/01/conquest.jpeg",
      caption: "Conquistadors from the 16th century as depicted in a painting from the 1700s. (Library of Congress)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1545 Cocoliztli Epidemic</b><br>Cocoliztli<br>1545–1548 C.E.<br>5–15 million dead</em></span>',
      description: "As the Spanish occupation spread throughout “New Spain”, an outbreak of a mysterious disease would cause millions of deaths. The Aztec people called it cocoliztli, which translates to ‘pestilence’. It is still unclear exactly which virus or disease was spreading.",
      location: {
        center: [-104.39519, 21.24548],
        zoom: 4.76,
        pitch: 50,
        bearing: 21.21,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
 
      ],
    },
        {
      id: "1545-cocoliztli2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1545 Cocoliztli Epidemic</b><br>Cocoliztli<br>1545–1548 C.E.<br>5–15 million dead</em></span>',
      description: "Leading theories posit that it was either Salmonella or a viral hemorrhagic fever tied to drought and poor living conditions of the indigenous population under the Spanish. Outbreaks generally coincided with the heavy rains that followed drought.",
      location: {
        center: [-110.45975, 22.36110],
        zoom: 4.76,
        pitch: 30,
        bearing: 30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
 
      ],
    },

    // COCOLIZTLI EPIDEMIC OF 1576

    {
      id: "1576-cocoliztli",
      alignment: "right",
      hidden: false,
      title: "Cocoliztli epidemic of 1576",
      image: "https://images.squarespace-cdn.com/content/v1/57d0686e6b8f5b98e0543620/1589843867701-4NDN0ZEN86MY514IGCN2/800px-Arrival_of_Hernan_Cortez_in_Veracruz_Detail.jpg?format=1500w",
      caption: "Detail of a painting by Diego Rivera depicting the arrival of Cortez, via WIkimedia Commons",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1576 Cocoliztli Epidemic</b><br>Cocoliztli<br>1576–1580 C.E.<br>2–2.5 million dead</em></span>',
      description: "A second epidemic of Cocoliztli in 1576 would kill an additional 2–2.5 million people across Mexico",
      location: {
        center: [-100,20],
        zoom: 4,
        pitch: 36,
        bearing: -30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
    //      {
    //         layer: 'mex-ind',
    //         opacity: 0,
    //     }
    //  ],
    //  onChapterExit: [
    //     {
    //         layer: 'mex-ind',
    //         opacity: 0
    //     }
      ],
    },
        {
      id: "1576-cocoliztli2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1576 Cocoliztli Epidemic</b><br>Cocoliztli<br>1576–1580 C.E.<br>2–2.5 million dead<br></br><b>Indigenous population decline</b><br><img src="https://cdn.glitch.global/ff108f64-08e9-4d39-85aa-d4e2e0f2d9f2/mex1-01.png?v=1667309340305" >>0%<br><img src="https://cdn.glitch.global/ff108f64-08e9-4d39-85aa-d4e2e0f2d9f2/mex2-01.png?v=1667309340324">>25%<br><img src="https://cdn.glitch.global/ff108f64-08e9-4d39-85aa-d4e2e0f2d9f2/mex3-01.png?v=1667309340330">>50%<br><img src="https://cdn.glitch.global/ff108f64-08e9-4d39-85aa-d4e2e0f2d9f2/mex4-01.png?v=1667309340305">>75%<br></em></span>',
      description: "As a result, the indigenous population continued to decline rapidly. In 1600, eighty-one years after the arrival of the Spanish, only two million of the previous 15-30 million inhabitants of Mexico were still alive.",
      location: {
        center: [-100,20],
        zoom: 4,
        pitch: 36,
        bearing: -30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
          {
             layer: 'mex-ind',
             opacity: 0.5,
         }
      ],
      onChapterExit: [
         {
             layer: 'mex-ind',
             opacity: 0
         }
      ],
    },

    // 1629–1631 ITALIAN PLAGUE

    {
      id: "italy-1629",
      alignment: "right",
      hidden: false,
      title: "1629–1631 Italian plague",
      image: "https://iiif.wellcomecollection.org/image/b12024533_V0017189-RA-RA.jp2/full/1338%2C/0/default.jpg",
      caption: "The plague of the Philistines at Ashdod. Oil painting by Pieter van Halen, 1661. (Wellcome Collection)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description: "The Italian Plague of 1629–1631, also referred to as the Great Plague of Milan, was part of the second plague pandemic that began with the Black Death in 1348 and ended in the 18th century.",
      location: {
        center: [9.30199, 45.46860],
        zoom: 5.14,
        pitch: 60,
        bearing: -73.79,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
        {
      id: "italy-1629-2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description: "Originating in Northern France in 1623, troop movements associated with the Thirty Years’ War allowed plague to spread throughout Europe.",
      location: {
        center: [4.85917,48.80472],
        zoom: 4,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
       {
      id: "italy-1629-3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description: "After becoming infected, Venetian troops carried the disease back to Milan, where nearly 50% of the population would perish.",
      location: {
        center: [9.16442,45.44135],
        zoom: 9,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
         {
      id: "italy-1629-4",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description: "The plague affected northern and central Italy and resulted in at least 280,000 deaths, with some estimating fatalities as high as one million, or about 35% of the population.",
      location: {
        center: [9.16442,45.44135],
        zoom: 5.14,
        pitch: 45,
        bearing: -45,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: '',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: '',
             opacity: 0
         }
      ],
    },

    // NAPLES PLAGUE

    {
      id: "naples",
      alignment: "right",
      hidden: false,
      title: "Naples Plague",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Micco_Spadaro_-_Largo_Mercatello_durante_la_peste_a_Napoli_%281656%29.jpg",
      caption: "Largo Mercatello a Napoli durante la peste del 1656. Painting by Domenico Gargiulo",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description: "The Naples Plague refers to a plague epidemic in Italy between 1656–1658 that nearly eradicated the population of Naples.",
      location: {
        center: [14.25442, 40.83328],
        zoom: 9,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
      {
      id: "naples2",
      alignment: "right",
      hidden: false,
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description: "Spreading from Algiers to Spain in 1647, the disease spread through Valencia, Aragon, Andalusia, and Catalonia before reaching Italy.",
      location: {
        center: [3.06053, 36.77624],
        zoom: 8,
        pitch: 60,
        bearing: -30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
    
        {
      id: "naples3",
      alignment: "right",
      hidden: false,
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description: "It reached the Kingdom of Naples in the spring of 1656 and spread throughout several provinces in southern Italy.",
      location: {
        center: [14.25442, 40.83328],
        zoom: 9,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
      {
      id: "naples4",
      alignment: "right",
      hidden: false,
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description: "The epidemic affected mostly central and southern Italy, killing up to 1,250,000 people throughout the Kingdom of Naples according to some estimates. In Naples alone, approximately 150,000–200,000 people died in 1656 due to the plague, accounting for more than half of the population.",
      location: {
        center: [14.25442, 40.83328],
        zoom: 6,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
    
    // 1772–1773 PERSIAN PLAGUE

    {
      id: "persia",
      alignment: "right",
      hidden: false,
      title: "1772–1773 Persian Plague",
      image: "https://muslimheritage.com/wp-content/uploads/2020/05/islamic-hospital-08.jpg",
      caption: "Depicting a scene in the hospital at Cordóba, then in Al-Andalus (Muslim Spain), this 1883 illustration shows the famed physician Al-Zahrawi (called Abulcasis in the West) attending to a patient while his assistant carries a box of medicines.",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description: "Plague is one of the oldest infectious diseases in Iran, having arrived in 543 CE when the Roman Empire and Persian Empire were at war. It has since had devastating effects on the human population of Iran.",
      location: {
        center: [54.47412, 31.91063],
        zoom: 4.5,
        pitch: 55.5,
        bearing: 115.81,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
        {
      id: "persia2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description: "In the winter of 1772, plague reached Baghdad and, in 1773, Basra. 250,000 people died in Basra alone.",
      location: {
        center: [46.06495, 31.96043],
        zoom: 7,
        pitch: 55.5,
        bearing: 115.81,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
    
           {
      id: "persia3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description: "More than a thousand deaths were recorded every day as the disease spread as far as Bombay (Mumbai).",
      location: {
        center: [72.86660, 19.08956],
        zoom: 4,
        pitch: 55.5,
        bearing: -15.81,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
    
       {
      id: "persia4",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description: "Plague also spread southward along the Persian Gulf to Bushehr, and reached Bahrain in 1773.",
      location: {
        center: [50.58105, 26.03748],
        zoom: 9,
        pitch: 55.5,
        bearing: -15.81,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
           {
      id: "persia5",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description: "It was also during this epidemic that quarantine practices were introduced into the Persian Gulf region for first time. Despite this, the outbreak is recorded as one of the most severe epidemics of plague, killing an estimated two million people in Persia (Iran) and Persian-controlled lands to the west. ",
      location: {
        center: [54.47412, 31.91063],
        zoom: 4,
        pitch: 55.5,
        bearing: 60,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },

    // 1846–1860 CHOLERA EPIDEMIC

    {
      id: "1846-cholera",
      alignment: "right",
      hidden: false,
      title: "1846–1860 cholera pandemic",
      image: "https://iiif.wellcomecollection.org/image/V0010485/full/1338%2C/0/default.jpg",
      caption: "A Viennese woman who died of cholera, depicted when healthy and four hours before death. (Wellcome Collection)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead</em></span>',
      description: "Originating in India, the cholera pandemic beginning in 1846 was the third major outbreak of cholera.",
      location: {
        center: [78.57620645773343,21.949169915907895],
        zoom: 4,
        pitch: 45,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 1
         }
      ],
    },
{
          id: "1846-cholera2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead</em></span>',
      description: "During this outbreak, more than one million people died of cholera in Russia alone.",
      location: {
        center: [93.1935202598586, 61.567876248391386],
        zoom: 3,
        pitch: 45,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 1
         }
      ],
    },
    {
              id: "1846-cholera3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead</em></span>',
      description: "In 1853–54, the epidemic in London claimed over 10,000 lives, and there were 23,000 deaths for all of Great Britain. This pandemic was considered to have the highest fatalities of the 19th-century epidemics.",
      location: {
        center: [-0.13667, 51.51334],
        zoom: 5,
        pitch: 45,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
      {
                id: "1846-cholera4",
      alignment: "right",
      hidden: false,
      title: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Snow-cholera-map-1.jpg",
      caption: "Original map made by John Snow in 1854. (Wikimedia Commons)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead<br><img src="https://cdn.glitch.global/ff108f64-08e9-4d39-85aa-d4e2e0f2d9f2/pink4-01.png?v=1667306705854">Deaths</img><br><img src="https://cdn.glitch.global/ff108f64-08e9-4d39-85aa-d4e2e0f2d9f2/purple%203-01.png?v=1667306809110">Water pumps</img></em></span>',
      description: "In 1854, English physician John Snow conducted the famous Broad Street outbreak study in London, showing that contaminated water was an important factor in the spread of cholera. Removal of the pump after Snow's findings brought the local outbreak to an end.",
      location: {
        center: [-0.13667, 51.51334],
        zoom: 16,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: 'johnsnowdata',
             opacity: 0.7,
           duration: 6000,
         },
            {
             layer: 'road-label',
             opacity: 1,
           duration: 6000,
         }
      ],
      onChapterExit: [
         {
             layer: 'johnsnowdata',
             opacity: 0
         }
      ],
    },
    // THIRD PLAGUE PANDEMIC

    {
      id: "third-plague",
      alignment: "right",
      hidden: false,
      title: "Third plague pandemic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Man_being_injected_by_doctor%2C_during_the_outbreak_of_bubonic_Wellcome_V0029287.jpg/2880px-Man_being_injected_by_doctor%2C_during_the_outbreak_of_bubonic_Wellcome_V0029287.jpg",
      caption: "Plague patient being injected by a doctor 1897 in British Raj India.",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description: "The third plague virus was a major bubonic plague pandemic that began in Yunnan, China, in 1855.",
      location: {
        center: [101.48482194825681,24.433194990112213],
        zoom: 4,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0,
         }
      ],
    },
        {
      id: "third-plague2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description: "This episode of bubonic plague spread to all inhabited continents, and ultimately led to more than 12 million deaths in India and China (and perhaps over 15 million worldwide).",
      location: {
        center: [101.48482194825681,24.433194990112213],
        zoom: 2,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
          {
      id: "third-plague3",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description: "In India alone, which was then under British Raj Colonial Rule, at least 10 million Indians died.",
      location: {
        center: [78.63393589075721,19.426169751696726],
        zoom: 5,
        pitch: 45,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
    
             {
      id: "third-plague4",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description: "According to the World Health Organization, the pandemic was considered active until 1960 when worldwide casualties dropped to 200 per year. Plague deaths have continued declined but still occur in rural areas of the United Stated, parts of Africa, and Asia.",
      location: {
        center: [101.48482194825681,24.433194990112213],
        zoom: 2,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },

    //  1889–1890 FLU PANDEMIC

    {
      id: "flu-pandemic",
      alignment: "right",
      hidden: false,
      title: "1889–1890 Flu Pandemic",
      image: "https://iiif.wellcomecollection.org/image/V0011917/full/1338%2C/0/default.jpg",
      caption: "The Dutch minister Bergansius and Hendrik Pieter Tindal visit an influenza hospital populated with representations of the countries of Europe; Bergansius points to the Dutch representative, attempting to persuade the apocalyptic Tindal that all is indeed well. Reproduction of a lithograph by J. Braakensiek, 1889. (Wellcome Collection)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1889–1890 Flu Pandemic</b><br>Influenza<br>1889–1890 C.E.<br>1 million dead</em></span>',
      description: "Though it would later be referred to as “Russian influenza” or the “Asian flu”, the first cases of the 1889 flu pandemic were reported out of Bukhara, Turkestan, in May of 1889",
      location: {
        center: [64.42038926930047,39.77195457819885],
        zoom: 8,
        pitch: -15,
        bearing: 60,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-minor-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-minor-label',
             opacity: 0
         }
      ],
    },
    
      {
      id: "flu-pandemic2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1889–1890 Flu Pandemic</b><br>Influenza<br>1889–1890 C.E.<br>1 million dead</em></span>',
      description: "In November 1889, a rash of cases of influenza-like-illness appeared in St. Petersburg, Russia. Soon, the “Russia Influenza” spread across Europe and the world.",
      location: {
        center: [30.32454423230024,59.934792396529254],
        zoom: 8,
        pitch: -15,
        bearing: 60,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
    
      {
      id: "flu-pandemic3",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1889–1890 Flu Pandemic</b><br>Influenza<br>1889–1890 C.E.<br>1 million dead</em></span>',
      description: "Although contemporaries described the pandemic as influenza and twentieth-century scholars identified several influenza strains as the possible pathogen, some more recent authors suggest that it may have been caused by human coronavirus OC43.",
      location: {
        center: [40,0],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },

    // SPANISH FLU

    {
      id: "spanish-flu",
      alignment: "right",
      hidden: false,
      title: "Spanish Flu",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg/2880px-Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg",
      caption: "Soldiers sick with Spanish flu at a hospital ward, Camp Funston, Fort Riley, Kansas",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description: "Just before breakfast on the morning of March 4, Private Albert Gitchell of the U.S. Army reports to the hospital at Fort Riley, Kansas, complaining of the cold-like symptoms of sore throat, fever and headache. Soon after, over 100 of his fellow soldiers had reported similar symptoms, marking what are believed to be the first cases in the historic influenza pandemic of 1918, later known as Spanish flu.",
      location: {
        center: [-96.83135293910054,39.29611955561039],
        zoom: 12,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-minor-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-minor-label',
             opacity: 0
         }
      ],
    },
    
    
          {
      id: "spanish-flu2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description: "The Spanish Flu did not originate in Spain, though news coverage of it did. During World War I, Spain was a neutral country with a free media that covered the outbreak from the start, first reporting on it in Madrid in late May of 1918. Meanwhile, Allied countries and the Central Powers had wartime censors who covered up news of the flu to keep morale high. Because Spanish news sources were the only ones reporting on the flu, many believed it originated there (the Spanish, meanwhile, believed the virus came from France and called it the “French Flu.”)",
      location: {
        center: [-3.600298537658028,40.262124291223],
        zoom: 5,
        pitch: 60,
        bearing: 45,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
    
             {
      id: "spanish-flu3",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description: "Over the summer, the first wave of the epidemic hit German forces on the Western Front, where they were waging a final, no-holds-barred offensive that would determine the outcome of the war. It had a significant effect on the already weakening morale of the troops—as German army commander Crown Prince Rupprecht wrote on August 3: poor provisions, heavy losses, and the deepening influenza have deeply depressed the spirits of men in the III Infantry Division.",
       location: {
        center: [7.0127751382435095,48.174415564415284],
        zoom: 5,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },

                {
      id: "spanish-flu4",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description: "Meanwhile, the flu was spreading fast beyond the borders of Western Europe, due to its exceptionally high rate of virulence and the massive transport of men on land and aboard ship due to the war effort. By the end of the summer, numerous cases had been reported in Russia, North Africa and India; China, Japan, the Philippines and even New Zealand would eventually fall victim as well. The virus would cause more deaths than the total deaths in World War I.",
      location: {
        center: [7.0127751382435095,48.174415564415284],
        zoom: 2,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
    
    // 1918–1922 RUSSIA TYPHUS EPIDEMIC

    {
      id: "russia-typhus",
      alignment: "right",
      hidden: false,
      title: "1918–1922 Russia typhus epidemic",
      image: "https://russianlife.com/sites/default/cache/file/8293AB1A-DDD1-472E-E4B49BFC557293B7_fullpage.jpg",
      caption: "An incident at the cholera barracks. Ivan Vladimirov (early twentieth century)",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Russian Typhus Epidemic</b><br>Typhus<br>1918–1922 C.E.<br>2–3 million dead</em></span>',
      description: "While typhus was endemic in late nineteenth- and early twentieth-century Russia, the worst typhus epidemics took place late in World War I and in the years of civil war following the Bolshevik Revolution.",
      location: {
        center: [93.00116632536346,62.34943272851824],
        zoom: 3.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
       {
      id: "russia-typhus2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Russian Typhus Epidemic</b><br>Typhus<br>1918–1922 C.E.<br>2–3 million dead</em></span>',
      description: "During World War I and the Russian Civil War between the White and Red, the typhus epidemic caused 2–3 million deaths out of 20–30 million cases in Russia between 1918 and 1922.",
      location: {
        center: [93.00116632536346,62.34943272851824],
        zoom: 3.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
    
        {
      id: "russia-typhus3",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>Russian Typhus Epidemic</b><br>Typhus<br>1918–1922 C.E.<br>2–3 million dead</em></span>',
      description: "Incidence rates fell dramatically in the later 1920s and the disease had ceased to be a significant cause of death by 1940. There was, however, a sharp flare-up in the early 1930s, undoubtedly associated with the dislocations caused by Stalin's industrialization and collectivization drives, and the ensuing famines.",
      location: {
        center: [93.00116632536346,62.34943272851824],
        zoom: 3.5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },

    // 1957–1958 INFLUENZA PANDEMIC

    {
      id: "1957-influenza",
      alignment: "right",
      hidden: false,
      title: "1957–1958 Influenza Pandemic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Asian_flu_in_Sweden_1957_%282%29.jpg/640px-Asian_flu_in_Sweden_1957_%282%29.jpg",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description: "In the winter of 1957, a new virus emerged out of China and would quickly spread worldwide.",
      location: {
        center: [106.66837743652584,26.95222476587677],
        zoom: 5,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-minor-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-minor-label',
             opacity: 0
         }
      ],
    },
        {
      id: "1957-influenza2",
      alignment: "right",
      hidden: false,
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description: "In April, it sparked a major epidemic in Hong Kong, where about 250,000 people were infected.",
      location: {
        center: [114.18862641544442,22.27064922170938],
        zoom: 9,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
        {
      id: "1957-influenza3",
      alignment: "right",
      hidden: false,
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description: "By June India had seen over a million cases.",
      location: {
        center: [79.74679999503157,22.182113746377624],
        zoom: 4,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
        {
      id: "1957-influenza4",
      alignment: "right",
      hidden: false,
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description: "As the virus spread around the globe, an estimated 1–4 million deaths would occur worldwide. It is generally considered to be the least severe of the three influenza pandemics of the 20th century.",
      location: {
        center: [79.74679999503157,22.182113746377624],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },

    // HONG KONG FLU

    {
      id: "hong-kong",
      alignment: "right",
      hidden: false,
      title: "1968 Flu Pandemic",
      image: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/images/methode/2018/07/13/aa7b9af4-7f3b-11e8-8c40-58d9485981d4_1280x720_151904.JPG?itok=boqkUoqt",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1968 Influenza Pandemic</b><br>Influenza A/H3N2<br>1968–1969 C.E.<br>1–4 million dead</em></span>',
      description: "The first reported case of the 1968 pandemic occurred on July 13, 1968, in Hong Kong. That month, Hong Kong would confirm 500,000 cases of influenza-like illness—the largest influenza outbreak since the 1957 outbreak.",
      location: {
        center: [114.18862641544442,22.27064922170938],
        zoom: 9,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
       {
      id: "hong-kong2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1968 Influenza Pandemic</b><br>Influenza A/H3N2<br>1968–1969 C.E.<br>1–4 million dead</em></span>',
      description: "Commercial air travel by an estimated 160 million persons during the pandemic facilitated rapid transmission worldwide.",
      location: {
        center: [114.18862641544442,22.27064922170938],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },
    
         {
      id: "hong-kong3",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>1968 Influenza Pandemic</b><br>Influenza A/H3N2<br>1968–1969 C.E.<br>1–4 million dead</em></span>',
      description: "Since then, this subtype has circulated as a seasonal influenza A virus associated with more severe annual epidemics than those caused by influenza A(H1N1) and influenza B viruses. ",
      location: {
        center: [114.18862641544442,22.27064922170938],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'country-label',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: 'country-label',
             opacity: 0
         }
      ],
    },

    // HIV/AIDS PANDEMIC

    {
      id: "hiv-aids",
      alignment: "right",
      hidden: false,
      title: "HIV/AIDS Pandemic",
      image: "https://th-thumbnailer.cdn-si-edu.com/mZynat6qkxGDIHMP7xyIoSXIN34=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/2f/00/2f00e1fe-45c3-4f23-832a-edbce29e8c07/aids-research-hysteria.jpg",
      caption: "Smithsonian Magazine",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description: "In early June, 1981, The U.S. Center for Disease Control (CDC) published an article that described cases of a rare lung infection in  five young, previously healthy gay men in Los Angeles. It was also report that all the men have other unusual infections as well, indicating that their immune systems are not working. Two had already died by the time the report was published and the others will die soon after. This marks the first official reporting of what will later become known as the AIDS (Acquired Immunodeficiency Syndrome) epidemic.",
      location: {
        center: [-118.27698642485488,34.04792496932722],
        zoom: 10,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
     {
      id: "hiv-aids2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description: "Scientists believe that HIV originally came from a virus particular to chimpanzees in West Africa during the 1930s, and originally transmitted to humans through the transfer of blood through hunting. Over the decades, the virus spread through Africa, and to other parts of the world. However, it wasn’t until the early 1980s, when rare types of pneumonia, cancer, and other illnesses were being reported to doctors that the world became aware of HIV and AIDS.",
      location: {
        center: [2.423969345007412,10.72948036832832],
        zoom: 3,
        pitch: 60,
        bearing: 40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: '',
             opacity: 0,
         }
      ],
      onChapterExit: [
         {
             layer: '',
             opacity: 0
         }
      ],
    },
       {
      id: "hiv-aids3",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description: "AIDS-related deaths and hospitalizations in developed countries began to decline sharply in 1995 thanks to new medications and the introduction of HAART. Still, by 1999, AIDS was the fourth biggest cause of death in the world and the leading cause of death in Africa.",
      location: {
        center: [0,0],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
         {
             layer: 'hiv-aids',
             opacity: 0.75,
           duration:1000,
         }
      ],
      onChapterExit: [
         {
             layer: 'hiv-aids',
             opacity: 0
         }
      ],
    },

    // COVID-19 PANDEMIC

    {
      id: "covid",
      alignment: "right",
      hidden: false,
      title: "COVID-19 Pandemic",
      image: "https://media.wbur.org/wp/2020/12/0327_brigham-womens06.jpg",
      caption: "",
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>COVID-19 Pandemic</b><br>COVID-19<br>2019–Present<br>7–25 million dead (August 2022)</em></span>',
      description: "In December of 2019, a cluster of patients in China’s Hubei Province, in the city of Wuhan, began to experience the symptoms of an atypical pneumonia-like illness that does not respond well to standard treatments.",
      location: {
        center: [114.2627913610221,30.616944059529875],
        zoom: 11,
        pitch: 60,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
       {
      id: "covid2",
      alignment: "right",
      hidden: false,
      website: '<a href="" target=""></a>',
      author: "",
      legend: '<span style="font-size: 0.85em;"><em><b>COVID-19 Pandemic</b><br>COVID-19<br>2019–Present<br>7–25 million dead (August 2022)</em></span>',
      description: "The World Health Organization (WHO) declared the outbreak a public health emergency of international concern on 30 January 2020 and a pandemic on 11 March 2020. As of 25 October 2022, the pandemic had caused more than 628 million cases and 6.58 million confirmed deaths, making it one of the deadliest in history.",
      location: {
        center: [114.2627913610221,30.616944059529875],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
         {
             layer: 'settlement-major-label',
             opacity: 1,
         }
      ],
      onChapterExit: [
         {
             layer: 'settlement-major-label',
             opacity: 0
         }
      ],
    },
  ],
};
