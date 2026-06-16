const products = [
  // Men's Shoes
  {
    id: "men_1",
    name: "經典手工雕花牛皮鞋",
    category: "mens",
    categoryLabel: "男鞋",
    price: 3880,
    rating: 4.9,
    reviewsCount: 84,
    image: "assets/images/men_1.png",
    description: "精心挑選上等頭層牛皮，傳承百年手工製鞋工藝。優雅的布洛克雕花設計，展現不凡的紳士品味與商務格調。",
    sizes: [39, 40, 41, 42, 43, 44],
    details: [
      "鞋面材質：進口頭層牛皮，光澤自然且質地細緻",
      "內裡材質：透氣真皮內裡，柔軟舒適且吸濕防潮",
      "鞋底材質：耐磨防滑高密度橡膠大底",
      "精緻布洛克雕花工藝，走線均勻嚴密",
      "適合場合：商務會議、正式晚宴、婚禮及日常紳士穿搭"
    ]
  },
  {
    id: "men_2",
    name: "極速閃電專業慢跑鞋",
    category: "mens",
    categoryLabel: "男鞋",
    price: 2680,
    rating: 4.8,
    reviewsCount: 142,
    image: "assets/images/men_2.png",
    description: "為跑者量身打造的輕量化跑鞋。採用高回彈避震中底，搭配一體成型飛織鞋面，提供極致的包覆性與爆發力。",
    sizes: [40, 41, 42, 43, 44, 45],
    details: [
      "鞋面材質：一體成型高彈力透氣飛織網布",
      "中底技術：全新高回彈 EVA 避震緩衝科技，有效減緩足部壓力",
      "鞋底材質：耐磨耐抓地碳素橡膠，抓地力卓越",
      "超輕量設計，單隻鞋重僅約 240g",
      "反光條設計，提升夜間跑步的安全性"
    ]
  },
  {
    id: "men_3",
    name: "征服者戶外防水登山靴",
    category: "mens",
    categoryLabel: "男鞋",
    price: 4500,
    rating: 4.7,
    reviewsCount: 65,
    image: "assets/images/men_3.png",
    description: "專為崎嶇地形設計的專業登山靴。高筒包覆腳踝防扭傷，鞋面具備優異的防水透氣功能，無懼風雨泥濘。",
    sizes: [40, 41, 42, 43, 44, 45],
    details: [
      "鞋面材質：高強度防潑水麂皮搭配抗撕裂尼龍網布",
      "防水技術：內置防水透氣薄膜，全天候保持雙腳乾爽",
      "鞋底材質：Vibram 黃金大底，深齒紋設計，防滑抗磨",
      "加強型橡膠防撞鞋頭，有效保護腳趾",
      "高規踝部支承系統，提供卓越的支撐與穩定性"
    ]
  },
  {
    id: "men_4",
    name: "悠活藍調休閒帆布懶人鞋",
    category: "mens",
    categoryLabel: "男鞋",
    price: 1380,
    rating: 4.6,
    reviewsCount: 98,
    image: "assets/images/men_4.png",
    description: "經典百搭的一腳蹬帆布鞋。海軍藍色調洋溢夏日海洋風情，柔軟鞋底帶來舒適的步行體驗，隨意穿搭皆好看。",
    sizes: [39, 40, 41, 42, 43, 44],
    details: [
      "鞋面材質：高密度耐磨水洗帆布，透氣不悶熱",
      "鞋墊材質：加厚記憶海綿鞋墊，貼合足弓",
      "鞋底材質：高彈力硫化橡膠底，防滑耐穿",
      "雙側鬆緊帶設計，穿脫極其便利",
      "適合場合：週末出遊、海灘度假、日常休閒穿搭"
    ]
  },

  // Women's Shoes
  {
    id: "women_1",
    name: "烈焰紅唇漆皮細高跟鞋",
    category: "womens",
    categoryLabel: "女鞋",
    price: 3280,
    rating: 4.9,
    reviewsCount: 73,
    image: "assets/images/women_1.png",
    description: "極致優雅的亮面漆皮高跟鞋。迷人的烈焰紅散發性感魅力，流線型鞋身搭配纖細鞋跟，拉長腿部線條。",
    sizes: [35, 36, 37, 38, 39, 40],
    details: [
      "鞋面材質：高品質鏡面漆皮，光澤耀眼且易於清潔",
      "鞋跟高度：8.5cm 精緻細高跟，修飾完美身形",
      "內裡材質：天然羊皮內裡與鞋墊，柔軟親膚防滑防腳痛",
      "人體工學足弓支撐，減輕站立負擔",
      "適合場合：時尚派對、正式晚宴、約會及展現個人氣場場合"
    ]
  },
  {
    id: "women_2",
    name: "漫步雲端針織透氣平底鞋",
    category: "womens",
    categoryLabel: "女鞋",
    price: 1880,
    rating: 4.7,
    reviewsCount: 112,
    image: "assets/images/women_2.png",
    description: "如襪子般貼合的舒適針織平底鞋。極簡米色百搭典雅，透氣輕量，是上班族女性通勤與日常購物的最佳伴侶。",
    sizes: [35, 36, 37, 38, 39, 40],
    details: [
      "鞋面材質：環保再生紗線針織鞋面，柔軟透氣且彈力十足",
      "鞋底材質：超軟彈性熱塑橡膠，可輕鬆折疊彎曲",
      "鞋尖設計：優雅尖頭微圓設計，視覺修飾腳型",
      "後跟防磨腳貼心設計，告別新鞋適應期",
      "可裝入洗衣袋直接機洗，保養非常方便"
    ]
  },
  {
    id: "women_3",
    name: "英倫風尚真皮粗跟短靴",
    category: "womens",
    categoryLabel: "女鞋",
    price: 3680,
    rating: 4.8,
    reviewsCount: 59,
    image: "assets/images/women_3.png",
    description: "經典黑色牛皮短靴，英倫感十足。厚實的粗跟設計兼顧穩定與高度，流線造型無論搭配裙裝或緊身褲都帥氣亮眼。",
    sizes: [35, 36, 37, 38, 39, 40],
    details: [
      "鞋面材質：嚴選細緻牛皮，柔韌有彈性",
      "鞋跟高度：5.5cm 中粗跟，好穿好走無壓力",
      "拉鍊設計：內側優質金屬拉鍊，順暢易拉好穿脫",
      "舒適保暖絨面內裡，適合秋冬季節穿著",
      "抗震緩壓氣墊鞋墊，提升行走舒適度"
    ]
  },
  {
    id: "women_4",
    name: "粉漾甜心潮流老爹鞋",
    category: "womens",
    categoryLabel: "女鞋",
    price: 2480,
    rating: 4.8,
    reviewsCount: 130,
    image: "assets/images/women_4.png",
    description: "街頭時尚必備的粉嫩拼色老爹鞋。增高厚底設計（約4cm）能完美修飾腿型，復古運動風潮與甜美粉色的完美碰撞。",
    sizes: [35, 36, 37, 38, 39, 40],
    details: [
      "鞋面材質：透氣網布拼接質感超細纖維皮革",
      "鞋底材質：MD 輕量大底搭配防滑橡膠貼片，防震耐磨",
      "隱形增高：4cm 厚底，展現修長美腿視覺效果",
      "內裡採用三維透氣網布，四季穿著皆宜",
      "適合場合：街頭潮搭、運動健走、出國旅遊拍照"
    ]
  },

  // Kids' Shoes
  {
    id: "kids_1",
    name: "炫彩星空 LED 發光運動鞋",
    category: "kids",
    categoryLabel: "童鞋",
    price: 1680,
    rating: 4.9,
    reviewsCount: 156,
    image: "assets/images/kids_1.png",
    description: "孩子最愛的發光運動鞋！踏步時鞋底閃爍七彩光芒，炫目吸睛。超彈力氣墊底護腳，安全與趣味兼具。",
    sizes: [28, 29, 30, 31, 32, 33, 34, 35],
    details: [
      "鞋底發光：高品質高感度重力感應 LED 燈，踩踏即亮",
      "鞋面材質：超透氣大網眼緹花織物，小腳丫不悶熱",
      "安全設計：魔鬼氈搭配鬆緊帶，方便兒童自行穿脫且不易鬆脫",
      "防撞設計：包覆式橡膠鞋頭，防止踢撞受傷",
      "鞋墊內置防菌防臭因子，呵護孩子稚嫩肌膚"
    ]
  },
  {
    id: "kids_2",
    name: "童趣黃色小鴨輕便涼鞋",
    category: "kids",
    categoryLabel: "童鞋",
    price: 880,
    rating: 4.7,
    reviewsCount: 92,
    image: "assets/images/kids_2.png",
    description: "專為幼童設計的夏季卡通涼鞋。亮眼的小鴨黃帶來活力，全包覆式鞋頭保護小腳趾，防滑又防水，沙灘玩水必備。",
    sizes: [24, 25, 26, 27, 28, 29, 30],
    details: [
      "鞋面材質：安全無毒優質 EVA 材質，超輕量且易清洗",
      "防滑鞋底：輪胎級排水防滑底紋，在濕滑地面也能穩健行走",
      "魔鬼氈織帶：可隨腳背高度調整寬鬆度，穩固貼合",
      "3D 足床設計：貼合幼兒足部曲線，促進健康發育",
      "極速快乾設計，水陸兩用非常方便"
    ]
  },
  {
    id: "kids_3",
    name: "學院風經典黑皮小紳士鞋",
    category: "kids",
    categoryLabel: "童鞋",
    price: 1480,
    rating: 4.6,
    reviewsCount: 43,
    image: "assets/images/kids_3.png",
    description: "氣質學院風的兒童皮鞋。精選柔軟皮革不磨腳，舒適度極佳，適合學校典禮、音樂會發表或家族聚會等正式場合。",
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36],
    details: [
      "鞋面材質：超軟仿皮，耐刮防潑水且易於擦拭保養",
      "內裡材質：柔軟超細纖維，吸汗透氣，貼合腳部",
      "鞋底材質：高彈力防滑牛筋底，靜音且吸震",
      "貼心後跟加厚泡棉設計，有效防止磨腳",
      "魔鬼氈扣帶設計（外觀為釦子），讓孩子輕鬆穿脫"
    ]
  },
  {
    id: "kids_4",
    name: "小飛俠活力魔鬼氈慢跑鞋",
    category: "kids",
    categoryLabel: "童鞋",
    price: 1280,
    rating: 4.8,
    reviewsCount: 118,
    image: "assets/images/kids_4.png",
    description: "極度輕巧的兒童慢跑鞋。藍橘亮眼配色動感活力，超彈力中底提供充足的緩衝，讓孩子盡情在操場奔跑嬉戲。",
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
    details: [
      "鞋面材質：雙層蜂巢透氣網布，輕盈透氣不悶汗",
      "中底材質：高彈輕量 MD 中底，減輕跑步時對關節的衝擊",
      "穿脫設計：單片魔鬼氈搭配彈性織帶，穿脫快速便利",
      "鞋後跟環形 TPU 穩定片，保護兒童踝關節發育",
      "耐磨橡膠底貼片，延長鞋子使用壽命"
    ]
  },

  // Others Category
  {
    id: "other_1",
    name: "極致親膚雲朵保暖拖鞋",
    category: "others",
    categoryLabel: "其它類",
    price: 680,
    rating: 4.8,
    reviewsCount: 204,
    image: "assets/images/other_1.png",
    description: "像踩在雲朵上一般的居家拖鞋。採用厚實的毛絨材質與高密度記憶海綿，給您雙腳最溫暖的包覆與放鬆。",
    sizes: ["S (36-37)", "M (38-39)", "L (40-41)", "XL (42-43)"],
    details: [
      "鞋面材質：細緻珊瑚絨，手感極佳且不易掉毛",
      "中底夾層：加厚記憶海綿搭配高回彈海綿，久壓不塌陷",
      "鞋底材質：防滑防水靜音 TPR 鞋底，不傷木地板",
      "極佳的保暖效果，冬季居家辦公必備",
      "支持手洗與低溫機洗，乾淨衛生"
    ]
  },
  {
    id: "other_2",
    name: "高抗震防水泡專業運動襪",
    category: "others",
    categoryLabel: "其它類",
    price: 390,
    rating: 4.9,
    reviewsCount: 310,
    image: "assets/images/other_2.png",
    description: "專業跑者一致推薦的排汗運動襪。針對足底、腳踝等易磨損部位加厚緩衝，配合足弓壓縮帶，有效防震及防磨水泡。",
    sizes: ["M (22-25cm)", "L (25-28cm)"],
    details: [
      "材質組成：75% Coolmax 吸濕排汗纖維、20% 彈性纖維、5% 尼龍",
      "防護技術：前掌與後跟 3D 毛圈加厚，提供絕佳避震性",
      "足弓支撐：環狀足弓壓力帶設計，緊密貼合、防止襪身滑動",
      "透氣排汗：腳背大面積網眼設計，加速汗水排出，乾爽不臭",
      "無縫腳趾接縫技術，徹底告別摩擦不適感"
    ]
  },
  {
    id: "other_3",
    name: "尊榮級真皮鞋類護理清潔組",
    category: "others",
    categoryLabel: "其它類",
    price: 850,
    rating: 4.7,
    reviewsCount: 88,
    image: "assets/images/other_3.png",
    description: "愛鞋人士必備的頂級保養套組。包含進口天然護理膏、精細馬毛刷及高去污力清潔泡沫，能有效延長皮革壽命與光澤。",
    sizes: ["單一規格"],
    details: [
      "內容物包含：皮革專用清潔泡沫 (150ml)、天然蜂蠟滋養霜 (50g)、精選100%馬毛鞋刷、超細纖維拋光布",
      "馬毛刷：質地柔軟，不刮傷皮革，能深入皮紋帶走灰塵",
      "天然滋養霜：含蜂蠟與貂油成分，深層滋潤、防乾裂並具防潑水效果",
      "清潔泡沫：中性溫和配方，免水洗，去污力強且不傷皮質",
      "適用於一般牛皮、羊皮等光滑皮革（麂皮與磨砂皮請參照專用說明）"
    ]
  },
  {
    id: "other_4",
    name: "水陸兩棲全方位越野運動涼鞋",
    category: "others",
    categoryLabel: "其它類",
    price: 1980,
    rating: 4.6,
    reviewsCount: 75,
    image: "assets/images/other_4.png",
    description: "夏天戶外活動的最佳首選。採用快乾織帶鞋面，結合強悍抓地大底，不論是溯溪玩水、露營爬山還是雨天通勤都能輕鬆駕馭。",
    sizes: [39, 40, 41, 42, 43, 44],
    details: [
      "織帶鞋面：環保快乾尼龍織帶，耐磨損且親水透氣",
      "調整結構：三點式黏扣帶（魔鬼氈）設計，可精準調整以貼合足部",
      "中底材質：人體工學 EVA 足床，提供極佳的支撐與減震性能",
      "鞋底材質：越野級多向防滑大底，在濕滑岩石上亦有卓越抓地力",
      "加強防護型護趾鞋頭，防止在野外踢到硬物受傷"
    ]
  }
];

// If Node.js environment, export the products array
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
