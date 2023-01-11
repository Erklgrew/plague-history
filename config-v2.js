var config = {
  container: "map",
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
  chapterReturn: false,
  logo: "",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="https://cdn-icons-png.flaticon.com/512/41/41707.png">', // to add custom messaging in the header for mobile devices
  footer:
    '',

  chapters: [
    {
      id: "antonine0",
      alignment: "right",
      hidden: false,
      title: "The Antonine plague",
      image: "https://cdn.mediatheque.epmoo.fr/link/hgd189jps8ets5c.jpg",
      caption:
        "Peste à Rome | Plague in Rome. (Elie Delaunay, via Musée d'Orsay)",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Antonine plague</b><br>Smallpox<br>165–180 C.E.<br>5–10 million dead<br>Map: <a href="https://github.com/maptiler/roman-empire/blob/master/data/provinces.geojson"target="_blank" rel="noopener noreferrer">Roman Empire</a></em></span>',
      description:
        "Evidence of smallpox has been found as far back as <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1200696/'target='_blank' rel='noopener noreferrer'>1570 BCE in Egypt</a> but as will be seen, the existence of a disease is only one part of what it takes to make an epidemic. The earliest major epidemic of smallpox was the Antonine plague, estimated to have killed <a href='https://www.jstor.org/stable/293979' target='_blank' rel='noopener noreferrer'>5–10</a> million people, between a quarter and a third of the Roman population.",
      location: {
        center: [12.49, 41],
        zoom: 2,
        pitch: 20,
        bearing: 0,
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
          duration: 2000,
        },
        {
          layer: "mex-ind",
          opacity: 0,
        },
         {
          layer: "blackdeath",
          opacity: 0,
        },
         {
          layer: "byzantium",
          opacity: 0,
        },
         {
          layer: "traderoutes",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
         // layer: "roman-empire-180",
         // opacity: 0.5,
        },
      ],
    },

    // ANTONINE PLAGUE

    {
      id: "antonine2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Antonine plague</b><br>Smallpox<br>165–180 C.E.<br>5–10 million dead<br>Map: <a href="https://github.com/maptiler/roman-empire/blob/master/data/provinces.geojson">Roman Empire</a></em></span>',
      description:
        "The Antonine plague began during the time of the co-regency of emperors Lucius Verus and Marcus Aurelius, as <a href='https://www.jstor.org/stable/10.1163/j.ctv2gjwz64.19'>Roman soldiers returned</a> through Mesopotamia from the Parthian war (and therefore gaining the appellation Antonine, after their family name, Antoninus). Traveling towards Rome, soldiers left a trail of disease in their wake that would spread for nearly a century.",
      location: {
        center: [35.06231, 35.04131],
        zoom: 4.83,
        pitch: 60,
        bearing: -41.6,
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
      image: "",
      caption: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Antonine plague</b><br>Smallpox<br>165–180 C.E.<br>5–10 million dead<br>Map: <a href="https://github.com/maptiler/roman-empire/blob/master/data/provinces.geojson">Roman Empire</a></em></span>',
      description:
        "Upon the epidemic’s arrival in Rome, Galen, the famed medical observer, <a href='https://journal.fi/arctos/article/view/84955/54434'>abandoned the city</a>; the disease would ultimately kill all his slaves, who remained in the city. By some accounts, upwards of <a href='https://journal.fi/arctos/article/view/84955/54434'>2,000 people died every day</a> in the city of Rome alone. The epidemic would eventually claim the life of Marcus Aurelius and mark the beginning of the end of the Roman Empire.",
      location: {
        center: [12.51087, 41.86166],
        zoom: 12,
        pitch: 60,
        bearing: -20.8,
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
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Antonine plague</b><br>Smallpox<br>165–180 C.E.<br>5–10 million dead<br>Map: <a href="https://github.com/maptiler/roman-empire/blob/master/data/provinces.geojson">Roman Empire</a></em></span>',
      description:
        "Epidemics occurred roughly <a href='https://journal.fi/arctos/article/view/84955/54434'>every 10 to 20 years</a> in the Roman Empire, but the Antonine plague is unique for its scale and impact. Galen called this epidemic under Marcus Aurelius “the great plague,” but that term is often used to mean “pestilence” rather than a specific disease. The Antonine plague was likely caused by <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1200696/''>smallpox</a>.",
      location: {
        center: [12.49, 41],
        zoom: 3,
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
        {
          layer: "byzantium",
          opacity: 0,
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
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg/1599px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg?20150826145909",
      caption:
        "The Course of Empire: Destruction. (Thomas Cole, Public domain, via Wikimedia Commons)",
      description:
        "In 476, the Western Roman Empire would collapse in part <a href='https://www.worldhistory.org/article/1346/the-isaurians-and-the-end-of-germanic-influence-in/'>due to the expansion of Germanic tribes</a>. However, the Eastern Empire would continue as what historians would later refer to as the Byzantine Empire.",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead<br>Map: <a href="https://www.google.com/books/edition/The_Dynamics_of_Ancient_Empires/6vnkts2rOJUC?hl=en&amp;gbpv=0">Byzantine Empire</a></em></span>',
      location: {
        center: [12.49, 41],
        zoom: 3,
        pitch: 45,
        bearing: 25,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "byzantium",
          opacity: 0.5,
        },
        {
          layer: "roman-empire-180",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "byzantium",
          opacity: 0.5,
        },
      ],
    },

    {
      id: "justinian2",
      alignment: "right",
      hidden: false,
      title: "",
      author: "",
      image: "",
      description:
        "In 541, bubonic plague began to emerge throughout the Byzantine Empire, marking the beginning of the “<a href='https://origins.osu.edu/connecting-history/covid-justinianic-plague-lessons?language_content_entity=en'>first plague pandemic</a>”. Likely transported by rats or ground squirrels in a <a href='https://link.springer.com/chapter/10.1007/978-3-540-75855-6_1'>shipment of grain from Egypt</a>, the disease would reach Constantinople and eventually spread via trade routes around the empire.",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead<br>Map: <a href="https://www.google.com/books/edition/The_Dynamics_of_Ancient_Empires/6vnkts2rOJUC?hl=en&amp;gbpv=0">Byzantine Empire</a></em></span>',

      location: {
        center: [30.01048, 27.34877],
        zoom: 4,
        pitch: 50,
        bearing: -30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
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
      description:
        "The densely populated capital of the Byzantine Empire, Constantinople (today known as Istanbul), was severely affected and would see <a href='https://www.researchgate.net/publication/272458393_The_epidemic_of_Justinian_AD_542_a_prelude_to_the_Middle_Ages'>10,000 people</a> die per day. Roughly <a href='https://www.worldhistory.org/article/782/justinians-plague-541-542-ce/'>one fifth</a> of the city’s citizens would die of the disease. It is estimated that by the year 590, <a href='https://www.ph.ucla.edu/epi/bioter/anempiresepidemic.html#:~:text=By%20the%20time%20Justinian's%20plague,brought%20on%20the%20Dark%20Ages.'>100 million people</a> had died.",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead<br>Map: <a href="https://www.google.com/books/edition/The_Dynamics_of_Ancient_Empires/6vnkts2rOJUC?hl=en&amp;gbpv=0">Byzantine Empire</a></em></span>',

      location: {
        center: [28.96543, 41.00852],
        zoom: 8.5,
        pitch: 16,
        bearing: 30.41,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "settlement-major-label",
          opacity: 1,
        },
        {
          layer: "byzantium",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 0.5,
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
      description:
        "Justinian had sought to reunite the Western and Eastern remnants of the Roman Empire, but as trade throughout the region collapsed, so too did <a href='https://link.springer.com/chapter/10.1007/978-3-540-75855-6_1'>the vestiges of the Roman Empire</a>. This is generally considered <a href='https://www.researchgate.net/publication/272458393_The_epidemic_of_Justinian_AD_542_a_prelude_to_the_Middle_Ages'>the end of the age of antiquity</a> and the beginning of “<a href='https://origins.osu.edu/connecting-history/covid-justinianic-plague-lessons?language_content_entity=en'>the Dark Ages</a>” in Europe—though, some have argued that these estimates of deaths caused by the plague are <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6926030/'>exaggerated</a>.",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Plague of Justinian</b><br>541–549 C.E.<br>Bubonic Plague<br>15–100 million dead<br>Map: <a href="https://www.google.com/books/edition/The_Dynamics_of_Ancient_Empires/6vnkts2rOJUC?hl=en&amp;gbpv=0">Byzantine Empire</a></em></span>',
      location: {
        center: [29, 41],
        zoom: 3,
        pitch: 40,
        bearing: -40,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
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
        "https://cdn.calisphere.org/data/13030/5g/hb8199p45g/files/hb8199p45g-FID4.jpg",
      caption:
        "'Hōsō taiji no zu' | 'Defeating smallpox'. (Shungyō, Courtesy of UC San Francisco, Special Collections)",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead<br>Map: <a href="https://github.com/dataofjapan/land/blob/master/japan.geojson">Japan</a></em></span>',
      description:
        "The history of smallpox stretches back as far as the Egyptians, <a href='https://www.cdc.gov/smallpox/history/history.html'>with 3,000 year old mummies</a> showing signs of smallpox rashes. Written accounts of smallpox date back to as early as the fourth century in China. Smallpox reached Japan in the sixth century, having been <a href='https://www.asianstudies.org/wp-content/uploads/Chapter-4-Rod-ari.pdf'>introduced by merchants and Buddhist missionaries</a> from the Korean kingdom of Paekche. Once introduced, it recurred in waves. <a href='https://www.asianstudies.org/wp-content/uploads/Chapter-4-Rod-ari.pdf'>Increased trade</a> across the Sea of Japan and the Korean Straight resulted in more frequent outbreaks.",
      location: {
        center: [139, 40],
        zoom: 5.5,
        pitch: 45,
        bearing: -120,
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
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead<br>Map: <a href="https://github.com/dataofjapan/land/blob/master/japan.geojson">Japan</a></em></span>',
      description:
        "In 735, reports of <a href='https://www.asianstudies.org/wp-content/uploads/Chapter-4-Rod-ari.pdf'>smallpox began to emerge out of Kyushu</a>, a southern Japanese island. Beginning at the port of Dazaifu, fisherman reported a “<a href='https://www.asianstudies.org/wp-content/uploads/Chapter-4-Rod-ari.pdf'>barbarian ship</a>” that was infested with smallpox—likely sailing from Korea. Because the island had no previous experience of the disease, and hence no immunity, it spread rapidly through the population—known as a “<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3143877/'>virgin soil</a>” epidemic. The government’s response was “<a href='https://www.google.com/books/edition/Population_Disease_and_Land_in_Early_Jap/5dmxY_HIWp8C?hl=en&amp;gbpv=1'>a predictable mixture of prescriptions and prayers</a>.” Ultimately, a famine would result.",
      location: {
        center: [130, 34.6],
        zoom: 5,
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
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead<br>Map: <a href="https://github.com/dataofjapan/land/blob/master/japan.geojson">Japan</a></em></span>',
      description:
        "In 736, a group of Japanese emissaries led by Abe no Ason Tsugumaro <a href='https://www.google.com/books/edition/Population_Disease_and_Land_in_Early_Jap/5dmxY_HIWp8C?hl=en&amp;gbpv=1'>passed through smallpox-riddled Daizafu</a> on their way to Korea. Abe no Ason would ultimately contract smallpox and die when the group reached Tsushima.",
      location: {
        center: [130.3668699072519, 33.61328011668302],
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
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead<br>Map: <a href="https://github.com/dataofjapan/land/blob/master/japan.geojson">Japan</a></em></span>',
      description:
        "Forced to turn back before reaching Korea, the group returned to the capital with smallpox, helping <a href='https://www.google.com/books/edition/Population_Disease_and_Land_in_Early_Jap/5dmxY_HIWp8C?hl=en&amp;gbpv=1'>spread the disease</a> to eastern Japan and Nara.",
      location: {
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
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Japanese Smallpox Epidemic</b><br>Smallpox<br>735–737 C.E.<br>2 million dead<br>Map: <a href="https://github.com/dataofjapan/land/blob/master/japan.geojson">Japan</a></em></span>',
      description:
        "By 737, smallpox had spread across Japan and <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3143877/'>killed a third</a> of the population. The <a href='https://www.google.com/books/edition/Population_Disease_and_Land_in_Early_Jap/5dmxY_HIWp8C?hl=en&amp;gbpv=1'>death toll</a> is calculated based on records of loan defaults for rice purchases, assumed to be tied to the death of the borrower, and the estimated population at the time. It is potentially a conservative estimate.",
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
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/55/Doutielt3.jpg?20190701150620",
      caption:
        "Miniature by Pierart dou Tielt illustrating the Tractatus quartus bu Gilles li Muisit (Tournai, c. 1353). The people of Tournai bury victims of the Black Death. (Wikimedia Commons)",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br>Map: <a href="https://www.pnas.org/doi/10.1073/pnas.1412887112" target="_blank" rel="noopener">14th century maritime trade networks</a></em><br></br><span class="dot-trade-ven"></span> Venetian trade networks<br><span class="dot-trade-eur"></span> Other European networks</span>',
      description:
        "In the mid–14th century, large Italian cities managed an <a href='https://www.jstage.jst.go.jp/article/ase/125/1/125_161011/_html/-char/en'>expansive trading network</a>. With a growing population of around 12.5 million people, large quantities of agricultural goods were imported. In particular, large trade networks for grain and flour were established across Europe.",
      location: {
        center: [2, 44.66149],
        zoom: 2,
        pitch: 30,
        bearing: -11.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "traderoutes",
          opacity: 1,
        },
           {
          layer: "byzantium",
          opacity: 0,
        },
           {
          layer: "blackdeath",
          opacity: 0,
        },
          {
          layer: "roman-empire-180",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "traderoutes",
          opacity: 1,
        },
      ],
    },

    {
      id: "black-1347",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br>Map: <a href="https://www.pnas.org/doi/10.1073/pnas.1412887112" target="_blank" rel="noopener">14th century maritime trade networks</a></em><br></br><span class="dot-trade-ven"></span> Venetian trade networks<br><span class="dot-trade-eur"></span> Other European networks</span>',
      description:
        "That trading network became a breeding ground for squirrels and black rats, which carry rat fleas, thought to be the main transmitter of bubonic plague to humans. Specifically, <a href='https://www.jstor.org/stable/pdf/24936021.pdf?refreqid=excelsior%3A3df0648da520fb289f810334888e8c76&amp;ab_segments=&amp;origin='>merchant ships sailing from the Black Sea</a> into Italy are thought to have been the source of the bubonic plague outbreak in 1348.",
      location: {
        center: [29,42],
        zoom: 3,
        pitch: 30,
        bearing: -45,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "traderoutes",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "traderoutes",
          opacity: 0,
        },
      ],
    },

    {
      id: "black-1348",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br>Map: <a href="https://www.jstage.jst.go.jp/article/ase/125/1/125_161011/_html/-char/en" target="_blank" rel="noopener">Spread of bubonic plague during the Black Death</a></em><br></br><span class="dot-bd-1346"></span> 1346<br><span class="dot-bd-1347"></span> 1347<br><span class="dot-bd-1348"></span> 1348<br><span class="dot-bd-1349"></span> 1349<br><span class="dot-bd-1350"></span> 1350<br><span class="dot-bd-1351"></span> 1351<br><span class="dot-bd-1352"></span> 1352<br><span class="dot-bd-1353"></span> 1353<br></span>',
      description:
        "Other recent theories have posited that <a href='https://www.pnas.org/doi/full/10.1073/pnas.1715640115'>human body lice</a> are a more likely transmitter of bubonic plague during the Black Death. Regardless of the vectors of spread, <a href='https://www.americanscientist.org/article/the-bright-side-of-the-black-death#:~:text=The%20Black%20Death%20was%20so,when%20the%20plague%20reached%20London.'>between 1347 and 1351</a>, it is estimated that more than <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7513766/'>25 million people died</a>. Worldwide, the plague has killed more than 200 million people throughout history.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 3,
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
          layer: "blackdeath",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "blackdeath",
          opacity: 0.5,
        },
      ],
    },

    {
      id: "black-1349",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Black Death</b><br>Bubonic Plague<br>1346–1353 C.E.<br>75–200 million dead<br>Map: <a href="https://www.jstage.jst.go.jp/article/ase/125/1/125_161011/_html/-char/en" target="_blank" rel="noopener">Spread of bubonic plague during the Black Death</a></em><br></br><span class="dot-bd-1346"></span> 1346<br><span class="dot-bd-1347"></span> 1347<br><span class="dot-bd-1348"></span> 1348<br><span class="dot-bd-1349"></span> 1349<br><span class="dot-bd-1350"></span> 1350<br><span class="dot-bd-1351"></span> 1351<br><span class="dot-bd-1352"></span> 1352<br><span class="dot-bd-1353"></span> 1353<br></span>',
      description:
        "The Black Death marks the beginning of the second plague pandemic. The plague eventually became endemic and recurred regularly, but the second plague pandemic did not end until <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6775055/'>the late 18th-century</a>. Outbreaks of plague still occur today, but the disease is now <a href='https://www.cdc.gov/plague/index.html'>treatable</a> with antibiotics.",
      location: {
        center: [16.18408, 44.66149],
        zoom: 3,
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
          layer: "blackdeath",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "blackdeath",
          opacity: 0,
        },
         {
          layer: "traderoutes",
          opacity: 0,
        },
      
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
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead<br>Map: <a href="https://ecoevocommunity.nature.com/posts/30037-mixtecs-aztecs-and-the-great-cocoliztli-epidemic-of-ad-1545-1550" target="_blank" rel="noopener"><em>Aztec and Mixtec areas of influence at the time of European contact</em></a></em></span>',
      description:
        "The Spanish conquest of 16th-century Mexico is one of the most dramatic population collapses in human history. At the time of the Spanish arrival, there were 15 million to 30 million native inhabitants, but the native population would be <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2730237/'>decimated by the end of the century</a>.",
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
          layer: "mexico-1520",
          opacity: 0.5,
          duration: 2000,
        },
      ],
      onChapterExit: [
        {
          layer: "mexico-1520",
          opacity: 0,
        },
      ],
    },
    {
      id: "1520-mexico2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead</em></span>',
      description:
        "In 1520, Hernán Cortés and his conquistadores were forced to flee the Aztec capital of Tenochtitlan, today’s Mexico City, just a few years after conquering it. But the Spanish left behind indigenous and African slaves from Cuba, some of which were infected with smallpox.",
      location: {
        center: [-99.12495385665807, 19.456996401931544],
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
          layer: "settlement-major-label",
          opacity: 1,
        },
      ],
      
    },
    {
      id: "1520-mexico3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1520 Mexico Smallpox Epidemic</b><br>Smallpox<br>1520 C.E.<br>5–8 million dead</em></span>',
      description:
        "In another example of “virgin soil” epidemic, the disease spread quickly, and some two million people would die during the outbreak.",
      location: {
        center: [-99.12495385665807, 19.456996401931544],
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

    // COCOLIZTLI EPIDEMIC OF 1545–1548

    {
      id: "1545-cocoliztli",
      alignment: "right",
      hidden: false,
      title: "Cocoliztli epidemic of 1545–1548",
      image:
        "https://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2018/01/conquest.jpeg",
      caption:
        "Conquistadors from the 16th century as depicted in a painting from the 1700s. (Library of Congress)",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1545 Cocoliztli Epidemic</b><br>Cocoliztli<br>1545–1548 C.E.<br>5–15 million dead</em></span>',
      description:
        "As the Spanish occupation spread throughout “New Spain,” an outbreak of a mysterious disease would cause millions of deaths. The Aztec people called it cocoliztli, which translates to “pestilence.” It is still unclear exactly which virus or disease was spreading.",
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
      onChapterEnter: [],
    },
    {
      id: "1545-cocoliztli2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1545 Cocoliztli Epidemic</b><br>Cocoliztli<br>1545–1548 C.E.<br>5–15 million dead</em></span>',
      description:
        "Leading theories posit that it was either salmonella or a viral hemorrhagic fever tied to drought and poor living conditions of the indigenous population under the Spanish. Outbreaks generally coincided with the heavy rains that followed drought.",
      location: {
        center: [-110.45975, 22.3611],
        zoom: 4.76,
        pitch: 30,
        bearing: 30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
    },

    // COCOLIZTLI EPIDEMIC OF 1576

    {
      id: "1576-cocoliztli",
      alignment: "right",
      hidden: false,
      title: "Cocoliztli epidemic of 1576",
      image:
        "https://images.squarespace-cdn.com/content/v1/57d0686e6b8f5b98e0543620/1589843867701-4NDN0ZEN86MY514IGCN2/800px-Arrival_of_Hernan_Cortez_in_Veracruz_Detail.jpg?format=1500w",
      caption:
        "Detail of a painting by Diego Rivera depicting the arrival of Cortez, via WIkimedia Commons",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1576 Cocoliztli Epidemic</b><br>Cocoliztli<br>1576–1580 C.E.<br>2–2.5 million dead</em><br></br><i><a href="https://academic.oup.com/femsle/article/240/1/1/536409" target="_blank" rel="noopener">Indigenous population decline</a>:<br><span class="dot-mex1"></span> >75%<br><span class="dot-mex2"></span> >50%<br><span class="dot-mex3"></span> >25%<br><span class="dot-mex4"></span> 0-25%</i></span>',
      description:
        "A second epidemic of Cocoliztli in 1576 would kill an additional two to two-and-a-half million people across Mexico. As a result, the indigenous population continued to decline rapidly. In 1600, 81 years after the arrival of the Spanish, only two million of the previous 15-30 million inhabitants of Mexico were still alive.",
      location: {
        center: [-100, 20],
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
      image:
        "https://iiif.wellcomecollection.org/image/b12024533_V0017189-RA-RA.jp2/full/1338%2C/0/default.jpg",
      caption:
        "The plague of the Philistines at Ashdod. Oil painting by Pieter van Halen, 1661. (Wellcome Collection)",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description:
        "Between 1629 and 1631, a series of outbreaks of bubonic plague would occur in northern Italy. Part of the second plague pandemic that began with the Black Death and ended in the 18<sup>th</sup> century, the northern Italian outbreak would come to be known as “<a href='https://www.scirp.org/journal/paperinformation.aspx?paperid=78367'>The Great Plague of Milan</a>”.",
      location: {
        center: [9.30199, 45.4686],
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
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description:
        "The plague was thought to have been spread throughout Europe by French and German armies during the <a href='https://www.scirp.org/journal/paperinformation.aspx?paperid=78367'>Thirty Years’ War</a>, but infected Venetian soldiers brought the illness to Northern Italy.",
      location: {
        center: [4.85917, 48.80472],
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
      id: "italy-1629-3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Great Plague of Milan</b><br>Bubonic Plague<br>1629–1631 C.E.<br>1 million dead</em></span>',
      description:
        "Estimates are hard to come by but, generally, it is thought that roughly <a href='https://www.francescomercadante.it/covid-19-northern-italy-like-at-the-time-of-the-1630-plague/'>one million people</a> perished from <a href='https://www.cambridge.org/core/journals/renaissance-quarterly/article/abs/carlo-m-cipolla-cristofano-and-the-plague-a-study-in-the-history-of-public-health-in-the-age-of-galileo-berkeleylos-angeles-university-of-california-press-1973-188-pp-750/82B073C902213215F3B42175E560F699'>plague in northern Italy</a> during the outbreak.",
      location: {
        center: [9.16442, 45.44135],
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

    // NAPLES PLAGUE

    {
      id: "naples",
      alignment: "right",
      hidden: false,
      title: "Naples Plague",
      image:
        "https://fitz-cms-images.s3.eu-west-2.amazonaws.com/pd531958_lrg.jpg",
      caption:
        "L'Umana Fragilità | Human Frailty (Salvator Rosa, via The Fitzwilliam Museum)",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description:
        "In 1656, Salvator Rosa painted “<a href='https://fitzmuseum.cam.ac.uk/objects-and-artworks/highlights/PD53-1958'>Human Frailty</a>,” wherein a baby signs a <a href='https://www.theguardian.com/artanddesign/2020/mar/17/plague-visionaries-how-rembrandt-titian-and-caravaggio-tackled-pestilence'>contract with Death</a>, agreeing that “<a href='https://fitzmuseum.cam.ac.uk/objects-and-artworks/highlights/PD53-1958'>Conception is a sin, Birth is pain, Life is toil, Death a necessity</a>.” The painting was created during the Naples plague, which ravaged the Kingdom of Naples and killed more than half of the population of the city of Naples.",
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
      id: "naples2",
      alignment: "right",
      hidden: false,
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description:
        "Spreading from Algiers in 1647, the plague outbreak <a href='https://wwwnc.cdc.gov/eid/article/18/1/11-0597_article'>reached the Kingdom of Naples</a> in the spring of 1656 and spread through southern Italy. The outbreak is <a href='https://ibn.idsi.md/sites/default/files/imag_file/A%20crisis%20in%20the%20past.%20Plague%20and%20mortality%20in%20the%20Kingdom%20of%20Naples%20in%20the%2017th%20century.pdf'>estimated</a> to have <a href='https://academic.oup.com/ereh/article/17/4/408/499216?login=false'>killed 1,250,000</a> people throughout the Kingdom of Naples.",
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
      id: "naples3",
      alignment: "right",
      hidden: false,
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Naples Plague</b><br>Bubonic Plague<br>1656–1658 C.E.<br>1.25 million dead</em></span>',
      description:
        "In Naples alone, approximately 150,000 to <a href='https://ibn.idsi.md/sites/default/files/imag_file/A%20crisis%20in%20the%20past.%20Plague%20and%20mortality%20in%20the%20Kingdom%20of%20Naples%20in%20the%2017th%20century.pdf'>200,000 people</a> (half the population) died in 1656 due to the plague, accounting for more than half of the population, including Rosa’s <a href='https://fitzmuseum.cam.ac.uk/objects-and-artworks/highlights/PD53-1958'>son, brother, sister, her husband, and their five children</a>.",
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
          layer: "settlement-major-label",
          opacity: 1,
        },
        {
          layer: "blackdeath",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 0,
        },
      ],
    },

    // 1772–1773 PERSIAN PLAGUE

    {
      id: "persia",
      alignment: "right",
      hidden: false,
      title: "1772–1773 Persian Plague",
      image:
        "https://iiif.wellcomecollection.org/image/L0073711/full/1338%2C/0/default.jpg",
      caption:
        "Physician talking to a female patient in a garden with servants preparing medicaments and potions. Persian lacquered binding board front cover of Avicenna's Canon of Medicine transcribed in Isfahan 1632. (Wellcome Collection)",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description:
        "<a href='https://www.gutenberg.org/files/16764/16764-h/16764-h.htm'>Encouraged by war</a> between the Romans and Persians, plague arrived in Persia (Iran) in 543 CE after passing from <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5037359/#!po=13.6364'>Italy through Syria, Palestine, and Iraq</a>. It became an endemic disease with outbreaks usually confined to rural areas.",
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
      id: "persia2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description:
        "Beginning in Baghdad, the 1772–1773 Persian plague was much more virulent and spread quickly throughout most of Persia. While staff of the British East India Company <a href='https://www.google.com/books/edition/Encyclopedia_of_Plague_and_Pestilence/tzRwRmb09rgC?hl=en&amp;gbpv=1'>quarantined themselves</a> away from the city, widespread quarantine practices wouldn’t be introduced in the Gulf region until the <a href='https://www.google.com/books/edition/Encyclopedia_of_Plague_and_Pestilence/tzRwRmb09rgC?hl=en&amp;gbpv=1'>Persian Plague of 1800</a>, and disease would continue to spread widely.",
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
      id: "persia3",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>The Persian Plague</b><br>Bubonic Plague<br>1772–1773 C.E.<br>2 million dead</em></span>',
      description:
        "The 1772 outbreak killed an estimated <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5037359/#b29-epih-38-e2016033'>two million</a> people across Persia.",
      location: {
        center: [72.8666, 19.08956],
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

    // 1846–1860 CHOLERA EPIDEMIC

    {
      id: "1846-cholera",
      alignment: "right",
      hidden: false,
      title: "Cholera outbreaks 1817–present",
      image:
        "https://iiif.wellcomecollection.org/image/V0010485/full/1338%2C/0/default.jpg",
      caption:
        "A Viennese woman who died of cholera, depicted when healthy and four hours before death. (Wellcome Collection)",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead<br>Map: <a href="https://www.researchgate.net/publication/342081135_Climate_drivers_of_plague_epidemiology_in_British_India_1898-1949">British India 1898–1949</a></em></span>',
      description:
        "Cholera outbreaks have occurred in <a href='https://www.cbc.ca/news/science/cholera-s-seven-pandemics-1.758504'>waves since 1817</a>. In all, there have been seven major cholera outbreaks, the third and most deadly of which occurred between 1846 and 1860, beginning in <a href='https://books.google.at/books?id=GyE8Qt-kS1kC&amp;lpg=PA217&amp;vq=raj&amp;pg=PA226#v=twopage&amp;q&amp;f=false'>Bengal, India, in 1839</a>. At the time, India was under British colonial rule—known as the British Raj—and the outbreak of cholera was worsened by British soldiers spreading the disease across Asia during <a href='https://books.google.at/books?redir_esc=y&amp;id=GyE8Qt-kS1kC&amp;q=raj#v=onepage&amp;q=1846&amp;f=false'>the Opium War</a> between Britain and China in 1840.",
      location: {
        center: [78.57620645773343, 21.949169915907895],
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
          layer: "country-label",
          opacity: 1,
        },
        {
          layer: "india-raj",
          opacity: 0.5,
        },
      ],
      onChapterExit: [
        {
          layer: "country-label",
          opacity: 1,
        },
        {
          layer: "india-raj",
          opacity: 0,
        },
      ],
    },
    {
      id: "1846-cholera2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead</em></span>',
      description:
        "Cholera would also spread along trade routes <a href='https://books.google.at/books?id=GyE8Qt-kS1kC&amp;lpg=PA217&amp;vq=raj&amp;pg=PA226#v=twopage&amp;q&amp;f=false'>around the globe</a>, penetrating deep into Arabia through pilgrimage traffic, crossing the United States, and reaching as far as Brazil through Portuguese trade. Estimates of a global death toll don’t exist, but some local and regional estimates do. For example, more than <a href='https://books.google.at/books?id=oh-5AAmboMUC&amp;pg=PA9&amp;redir_esc=y#v=onepage&amp;q&amp;f=false'>one million people</a> are believed to have died of cholera in Russia alone during the third cholera major outbreak.",
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
          layer: "country-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "country-label",
          opacity: 1,
        },
      ],
    },
    {
      id: "1846-cholera3",
      alignment: "right",
      hidden: false,
      title: "",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/Snow-cholera-map-1.jpg",
      caption: "Original map made by John Snow in 1854. (Wikimedia Commons)",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead<br></br><a href="https://github.com/mjdanielson/Cholera-Map/tree/master/Data" target="_blank" rel="noopener">Broad Street outbreak:</a><br><span class="chol-death"></span> Deaths<br><span class="chol-pump"></span> Water pumps<br></em></span>',
      description:
        "In 1854, English physician John Snow conducted the <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7150208/#:~:text=John%20Snow%20conducted%20pioneering%20investigations,key%20source%20of%20the%20epidemics.'>famous Broad Street outbreak study</a> in London, showing that contaminated water helped to spread cholera. The subsequent removal of the pump brought the local outbreak to an end.",
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
          layer: "johnsnowdata",
          opacity: 0.7,
          duration: 6000,
        },
        {
          layer: "road-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "johnsnowdata",
          opacity: 0,
        },
        {
          layer: "road-label",
          opacity: 0,
        },
      ],
    },
    {
      id: "1846-cholera4",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Cholera Pandemic</b><br>Cholera<br>1846–1860 C.E.<br>1 million+ dead<br></em></span>',
      description:
        "There have been seven major outbreaks of cholera since 1817 and it has <a href='https://www.who.int/news-room/fact-sheets/detail/cholera'>become endemic in many countries</a>, causing millions of deaths around the world. The seventh major cholera outbreak is a current pandemic, which has been ongoing since 1961 according to the WHO.",
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
    // THIRD PLAGUE PANDEMIC

    {
      id: "third-plague",
      alignment: "right",
      hidden: false,
      title: "Third plague pandemic",
      image:
        "https://iiif.wellcomecollection.org/image/V0029288/full/1338%2C/0/default.jpg",
      caption:
        "Female patient with bubonic plague in Karachi, India. Photograph, 1897.​ (Wellcome Collection)",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description:
        "The third plague pandemic <a href='https://archive.org/details/blackdeathtransf00samu/mode/2up'>began in Yunnan, China, in the 1840s</a>. Aided by the transition from slower <a href='https://apps.who.int/iris/handle/10665/66010'>sailing ships to faster steamboats</a> in merchant fleets, the plague <a href='https://royalsocietypublishing.org/doi/full/10.1098/rspb.2018.2429#RSPB20182429C15'>reached Europe in 1899</a> and would quickly spread around the globe.",
      location: {
        center: [101.48482194825681, 24.433194990112213],
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
      id: "third-plague2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description:
        "While this outbreak of plague was global, the majority of deaths occurred in India, where <a href='https://scholarworks.harding.edu/cgi/viewcontent.cgi?article=1170&amp;context=tenor'>12 million people died</a> out of more than <a href='https://jmvh.org/article/the-history-of-plague-part-1-the-three-great-pandemics/''>15 million estimated worldwide</a>.",
      location: {
        center: [101.48482194825681, 24.433194990112213],
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
          layer: "country-label",
          opacity: 0,
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
      id: "third-plague3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Third Plague Pandemic</b><br>Bubonic Plague<br>1855–1960 C.E.<br>12–15 million dead</em></span>',
      description:
        "The pandemic was <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7753327/'>considered active until 1960</a> when worldwide casualties dropped below 200 per year. Plague deaths have continued to decline but still occur in rural areas of the <a href='https://www.cdc.gov/plague/index.html#:~:text=Presently%2C%20human%20plague%20infections%20continue,parts%20of%20Africa%20and%20Asia.'>United States, parts of Africa, and Asia</a>.",
      location: {
        center: [78.63393589075721, 19.426169751696726],
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

    //  1889–1890 FLU PANDEMIC

    {
      id: "flu-pandemic",
      alignment: "right",
      hidden: false,
      title: "1889–1890 Flu Pandemic",
      image:
        "https://iiif.wellcomecollection.org/image/V0011917/full/1338%2C/0/default.jpg",
      caption:
        "The Dutch minister Bergansius and Hendrik Pieter Tindal visit an influenza hospital populated with representations of the countries of Europe; Bergansius points to the Dutch representative, attempting to persuade the apocalyptic Tindal that all is indeed well. Reproduction of a lithograph by J. Braakensiek, 1889. (Wellcome Collection)",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1889–1890 Flu Pandemic</b><br>Influenza<br>1889–1890 C.E.<br>1 million dead</em></span>',
      description:
        "Often referred to as “<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8813723/'>Russian influenza</a>,” the first cases of the 1889 flu pandemic were reported out of Turkestan.",
      location: {
        center: [64.42038926930047, 39.77195457819885],
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
          layer: "settlement-minor-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-minor-label",
          opacity: 0,
        },
      ],
    },

    {
      id: "flu-pandemic2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1889–1890 Flu Pandemic</b><br>Influenza<br>1889–1890 C.E.<br>1 million dead</em></span>',
      description:
        "After reaching St. Petersburg in November 1889, the pandemic would cause the city to lose <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8813723/'>180 thousand of the city’s one million inhabitants</a> within five weeks.",
      location: {
        center: [30.32454423230024, 59.934792396529254],
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
      id: "flu-pandemic3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1889–1890 Flu Pandemic</b><br>Influenza<br>1889–1890 C.E.<br>1 million dead</em></span>',
      description:
        "It took about a year for the flu to <a href='https://circulatingnow.nlm.nih.gov/2014/08/11/mapping-the-1889-1890-russian-flu/'>spread around the world</a>; it is <a href='https://www.google.com/books/edition/Encyclopedia_of_Contemporary_American_So/BjKWfAz0tx4C?hl=en&amp;gbpv=1&amp;pg=PA1510&amp;printsec=frontcover'>estimated</a> to have caused <a href='https://web.archive.org/web/20171212211549/https:/dda.health.maryland.gov/Pages/Developments/2015/Influenza%20and%20Pneumonia%20Caring%20for%20patients%20in%20community.pdf'>one million</a> deaths.",
      location: {
        center: [40, 0],
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

    // SPANISH FLU

    {
      id: "spanish-flu",
      alignment: "right",
      hidden: false,
      title: "Spanish Flu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg/2880px-Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg",
      caption:
        "Soldiers sick with Spanish flu at a hospital ward, Camp Funston, Fort Riley, Kansas",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description:
        "Known as “The Great Influenza Pandemic,” the first recorded cases of the 1918 influenza pandemic occurred at <a href='https://www.paho.org/en/who-we-are/history-paho/purple-death-great-flu-1918#:~:text=Despite%20its%20name%2C%20researchers%20believe,breeding%20ground%20for%20the%20virus.'>Fort Riley, Kansas</a>. At the time, the United States was preparing to send thousands of soldiers to fight in World War I. The movements of troops between bases and close quarters helped the first wave of the disease to spread quickly and broadly across the United States.",
      location: {
        center: [-96.83135293910054, 39.29611955561039],
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
          layer: "settlement-minor-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-minor-label",
          opacity: 0,
        },
      ],
    },

    {
      id: "spanish-flu2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description:
        "Once in Europe, the <a href='https://www.cdc.gov/flu/pandemic-resources/1918-pandemic-h1n1.html'>avian H1N1 virus</a> would continue to spread, following <a href='https://www.nber.org/papers/w26866'>the movement of war</a>.",
      location: {
        center: [-3.600298537658028, 40.262124291223],
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
      id: "spanish-flu3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description:
        "Interestingly, despite originating in the US, the outbreak came to be known as the “Spanish flu” because, during the war, Spain was a neutral country whose newspapers covered the pandemic from the start. Warring countries censored news of the flu to keep morale high—but because <a href='https://www.nber.org/system/files/working_papers/w26866/w26866.pdf'>Spanish news sources were the only ones reporting</a> on the flu, many believed it originated there.",
      location: {
        center: [7.0127751382435095, 48.174415564415284],
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
      id: "spanish-flu4",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Spanish Flu</b><br>Influenza A/H1N1<br>1918–1920 C.E.<br>17–100 million dead</em></span>',
      description:
        "Death rates for influenza can reach <a href='https://www.google.com/books/edition/Encyclopedia_of_Contemporary_American_So/BjKWfAz0tx4C?hl=en&amp;gbpv=1'>incredibly high levels</a> because it doesn’t require humans to survive—birds are reservoirs of influenza, and it can also survive in pigs. Between 1918 and 1920, the virus is estimated to have caused between an <a href='https://www.nber.org/digest/may20/social-and-economic-impacts-1918-influenza-epidemic'>40 million</a> and <a href='https://www.army.mil/article/210420/worldwide_flu_outbreak_killed_45000_american_soldiers_during_world_war_i'>50 million</a> human deaths, more than the total deaths in World War I.",
      location: {
        center: [7.0127751382435095, 48.174415564415284],
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

    // 1918–1922 RUSSIA TYPHUS EPIDEMIC

    {
      id: "russia-typhus",
      alignment: "right",
      hidden: false,
      title: "1918–1922 Russia typhus epidemic",
      image:
        "https://russianlife.com/sites/default/cache/file/8293AB1A-DDD1-472E-E4B49BFC557293B7_fullpage.jpg",
      caption:
        "An incident at the cholera barracks. Ivan Vladimirov (early twentieth century)",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Russian Typhus Epidemic</b><br>Typhus<br>1918–1922 C.E.<br>2–3 million dead</em></span>',
      description:
        "Typhus thrives in unsanitary conditions, and multiple wars allowed the disease to flourish in Russia in the early 20th century. Fueled by the <a href='https://www.cambridge.org/core/services/aop-cambridge-core/content/view/0AF993E555D30A9F8DCD864F4DDD4344/S0025727300058725a.pdf/div-class-title-typhus-and-its-control-in-russia-1870-1940-div.pdf'>Bolshevik Revolution in 1917, World War I, the Russian Civil War, and the Great Influenza Pandemic of 1918</a>, typhus would spread widely.",
      location: {
        center: [93.00116632536346, 62.34943272851824],
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
      id: "russia-typhus2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Russian Typhus Epidemic</b><br>Typhus<br>1918–1922 C.E.<br>2–3 million dead</em></span>',
      description:
        "Typhus declined during peacetime, but another outbreak occurred after 1931 during Stalin’s collectivization and gulag prison systems. Fear of typhus spread through Eastern Europe, and animosity was channeled towards those perceived as carriers of lice—refugees and Jewish peoples. Over time, the fear of lice <a href='https://journals.uvic.ca/index.php/corvette/article/view/20803#:~:text=Typhus%20has%20long%20been%20a,government%20policies%2C%20and%20racial%20violence.'>merged with anti-Semitism</a>, and Jews began to be seen as transmitters of parasites. The notion of “<a href='https://journals.uvic.ca/index.php/corvette/article/view/20803#:~:text=Typhus%20has%20long%20been%20a,government%20policies%2C%20and%20racial%20violence.'>epidemic control</a>” would be used as a tool of propaganda in Nazi Germany.",
      location: {
        center: [93.00116632536346, 62.34943272851824],
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
      id: "russia-typhus3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>Russian Typhus Epidemic</b><br>Typhus<br>1918–1922 C.E.<br>2–3 million dead</em></span>',
      description:
        "The typhus epidemic caused two to three million deaths out of 20–30 million cases in Russia between 1918 and 1922. Today, typhus can be treated with antibiotics, but there is still <a href='https://www.cdc.gov/typhus/epidemic/index.html'>no typhus vaccine</a>.",
      location: {
        center: [93.00116632536346, 62.34943272851824],
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

    // 1957–1958 INFLUENZA PANDEMIC

    {
      id: "1957-influenza",
      alignment: "right",
      hidden: false,
      title: "1957–1958 Influenza Pandemic",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Asian_flu_in_Sweden_1957_%282%29.jpg/640px-Asian_flu_in_Sweden_1957_%282%29.jpg",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description:
        "In the winter of 1957, a new virus emerged from China that would be referred to as the “Asian flu.” Aided by air travel, the virus quickly <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(2031201-0/fulltext'>spread worldwide</a>.",
      location: {
        center: [106.66837743652584, 26.95222476587677],
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
          layer: "settlement-minor-label",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-minor-label",
          opacity: 0,
        },
      ],
    },
    {
      id: "1957-influenza2",
      alignment: "right",
      hidden: false,
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description:
        "At the time, it was unclear if the virus was the same as the 1918 influenza virus, but it would later be revealed that it was an <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(2031201-0/fulltext'>H2N2 virus</a>, rather than H1N1.",
      location: {
        center: [114.18862641544442, 22.27064922170938],
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
      id: "1957-influenza3",
      alignment: "right",
      hidden: false,
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1957 Influenza Pandemic</b><br>Influenza A/H2N2<br>1957–1958 C.E.<br>1–4 million dead</em></span>',
      description:
        "An estimated <a href='https://www.history.com/news/1957-flu-pandemic-vaccine-hilleman'>one to four million deaths</a> would occur worldwide. In the US, 116,000 Americans would die, but it is thought that the number would have been much higher if not for the emergence of a <a href='https://www.smithsonianmag.com/smithsonian-institution/united-states-vaccine-1957-flu-pandemic-180974906/'>flu vaccine</a> that was provided to 30 million Americans. This is generally considered to be the least severe of the three influenza pandemics of the 20th century.",
      location: {
        center: [79.74679999503157, 22.182113746377624],
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

    // HONG KONG FLU

    {
      id: "hong-kong",
      alignment: "right",
      hidden: false,
      title: "1968 Flu Pandemic",
      image:
        "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/images/methode/2018/07/13/aa7b9af4-7f3b-11e8-8c40-58d9485981d4_1280x720_151904.JPG?itok=boqkUoqt",
      caption: "",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1968 Influenza Pandemic</b><br>Influenza A/H3N2<br>1968–1969 C.E.<br>1–4 million dead</em></span>',
      description:
        "The third influenza pandemic of the twentieth century began in Hong Kong in 1968. Known as the “Hong Kong flu,” the H3N2 influenza was <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7144439/'>less deadly</a> than the previous Asian flu but <a href='https://www.britannica.com/event/1968-flu-pandemic'>highly contagious</a>.",
      location: {
        center: [114.18862641544442, 22.27064922170938],
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
      id: "hong-kong2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1968 Influenza Pandemic</b><br>Influenza A/H3N2<br>1968–1969 C.E.<br>1–4 million dead</em></span>',
      description:
        "During the pandemic, an estimated <a href='https://link.springer.com/article/10.1023/A:1026140019146'>160 million people</a> would travel by commercial airliners, increasing the speed of the spread.",
      location: {
        center: [114.18862641544442, 22.27064922170938],
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
          layer: "country-label",
          opacity: 0,
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
      id: "hong-kong3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>1968 Influenza Pandemic</b><br>Influenza A/H3N2<br>1968–1969 C.E.<br>1–4 million dead</em></span>',
      description:
        "Between 1968 and 1970, the pandemic caused by the H3N2 virus would kill <a href='https://www.cdc.gov/flu/pandemic-resources/1968-pandemic.html'>one million people worldwide</a>. A vaccine was <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7144439/'>developed and manufactured</a> in 1968, but the virus had already peaked in many countries and, as demand dropped, the vaccine was phased out of production in 1969. The pandemic, however, never ended—the pandemic caused by the H3N2 influenza virus continues today and is considered a seasonal influenza. (Get your flu shot.)",
      location: {
        center: [114.18862641544442, 22.27064922170938],
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
          layer: "country-label",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "country-label",
          opacity: 0,
        },
      ],
    },

    // HIV/AIDS PANDEMIC

    {
      id: "hiv-aids",
      alignment: "right",
      hidden: false,
      title: "HIV/AIDS Pandemic",
      image:
        "https://th-thumbnailer.cdn-si-edu.com/mZynat6qkxGDIHMP7xyIoSXIN34=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/2f/00/2f00e1fe-45c3-4f23-832a-edbce29e8c07/aids-research-hysteria.jpg",
      caption: "Smithsonian Magazine",
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description:
        "In early June 1981, the CDC published an <a href='https://www.cdc.gov/mmwr/preview/mmwrhtml/june_5.htm'>article</a> that described lung infections and suppressed immune systems in five gay men in Los Angeles. By the time the report was published, two of the five gay men were dead, and the others would die shortly thereafter. This was the first clinical article that described what would eventually be known as the <a href='https://www.hiv.gov/hiv-basics/overview/history/hiv-and-aids-timeline#year-1981'>HIV/AIDS epidemic</a>.",
      location: {
        center: [-118.27698642485488, 34.04792496932722],
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
      id: "hiv-aids2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description:
        "The specific circumstances of HIV/AIDS’ origin is still unknown, but it is generally considered to have crossed over from primates to humans prior to the 1940s, likely as a result of <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1088480/''>direct exposure of humans to animal blood</a> while hunting or consuming bushmeat in sub-Saharan Africa. However, cross-species transmission does not lead to wide spread of a disease. It is thought that <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2848574/'>colonial practices</a> around <a href='https://digitalcommons.linfield.edu/symposium/2021/all/14/'>sex work, unsafe sex practices, and unsterile medical treatments</a> created the conditions for the virus to spread widely.",
      location: {
        center: [2.423969345007412, 10.72948036832832],
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
          layer: "",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0,
        },
      ],
    },
    {
      id: "hiv-aids3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description:
        "As of 2021, HIV/AIDS had killed more than <a href='https://www.unaids.org/en/resources/fact-sheet'>40 million people</a>. The number of new infections has been declining since the late 1990s, while deaths from HIV/AIDS have been <a href='https://ourworldindata.org/hiv-aids#is-the-world-making-progress-in-its-fight-against-hiv-aids'>declining since the mid-2000s</a>. Moreover, more people with HIV/AIDS are living longer, thanks to the emergence of <a href='https://ourworldindata.org/hiv-aids#anti-retroviral-treatment-art'>anti-retroviral drugs</a>.",
      location: {
        center: [0, 0],
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
          layer: "hiv-aids",
          opacity: 0.75,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "hiv-aids",
          opacity: 0,
        },
      ],
    },
    {
      id: "hiv-aids4",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>HIV/AIDS Global Pandemic</b><br>HIV/AIDS<br>1981–Present<br>40.1 million dead (as of 2021)</em></span>',
      description:
        "Despite the progress, HIV/AIDS remains an ongoing pandemic. Across sub-Saharan Africa, in particular, death rates are still very high. In South Africa, Mozambique, and Botswana, HIV/AIDS is the <a href='https://ourworldindata.org/hiv-aids#hiv-aids-is-one-of-the-world-s-most-fatal-infectious-disease'>leading cause of death</a>.",
      location: {
        center: [0, 0],
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
          layer: "hiv-aids",
          opacity: 0.75,
          duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "hiv-aids",
          opacity: 0,
        },
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
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>COVID-19 Pandemic</b><br>COVID-19<br>2019–Present<br>7–25 million dead (August 2022)</em></span>',
      description:
        "In December of 2019, patients in Wuhan, China, began to exhibit <a href='https://www.cdc.gov/museum/timeline/covid19.html'>pneumonia-like symptoms</a>.",
      location: {
        center: [114.2627913610221, 30.616944059529875],
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
      id: "covid2",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>COVID-19 Pandemic</b><br>COVID-19<br>2019–Present<br>7–25 million dead (August 2022)</em></span>',
      description:
        "The general consensus is that the coronavirus known as SARS-CoV-2 spilled over from animals to humans, likely late in 2019. As yet, however, it is unclear whether the spillover occurred naturally or was the result of an accident in a laboratory studying coronaviruses.",
      location: {
        center: [114.2627913610221, 30.616944059529875],
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
      id: "covid3",
      alignment: "right",
      hidden: false,
      website: '',
      author: "",
      legend:
        '<span style="font-size: 0.85em;"><em><b>COVID-19 Pandemic</b><br>COVID-19<br>2019–Present<br>7–25 million dead (August 2022)</em></span>',
      description:
        "Since then, it is estimated that somewhere between <a href='https://www.economist.com/graphic-detail/coronavirus-excess-deaths-estimates'>6.7 and 28.1 million people have died</a>.",
      location: {
        center: [114.2627913610221, 30.616944059529875],
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
  ],
};
