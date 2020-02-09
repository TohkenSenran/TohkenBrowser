// 刀剣専覧関連
export const twitterURL: string = 'https://twitter.com/TohkenBrowser';

// ブラウザ側設定
export const gameURL: string = 'http://pc-play.games.dmm.com/play/tohken/';
export const gameTitle: string = `刀剣専覧 ${chrome.runtime.getManifest().version} -刀剣乱舞専用ブラウザ-`;
export const gameSize: any = { width: 1030, height: 580 };
export const gameRatio: number = gameSize.height / gameSize.width;
export const handbookTitle: string = `便利帳 ${gameTitle}`;

// 表示系設定
export const headerMenuHeight: number = 65;
export const statusViewHeight: number = 300;

// ゲーム内定数
export const browserWindow = 'browserWindow';
export const handbookWindow = 'handbookWindow';

export const partyNo = 4;
export const partyMemberNo = 6;
export const forgeNo = 4;
export const repairNo = 4;

export const statusLabel = {
  none: '',
  hp: '生存',
  atk: '打撃',
  def: '統率',
  mobile: '機動',
  back: '衝力',
  scout: '偵察',
  hide: '隠蔽',
  loyalties: '必殺',
  fatigue: '英気',
  amulet: '御守',
};

export const forgeColorName = {
  20: 'navy',
  25: 'darkgreen',
  30: 'olive',
  40: 'limegreen',
  90: 'greenyellow',
  150: 'chartreuse',
  180: 'goldenrod',
  200: 'gold',
  240: 'crimson',
  300: 'red',
  360: 'ghostwhite',
  601: 'purple',
};

export const equipStatus = {
  0: {
    name: '不明',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  1: {
    name: '投石兵・並',
    soldier: 8,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 1,
    hide: 1,
  },
  2: {
    name: '投石兵・上',
    soldier: 9,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 2,
    hide: 2,
  },
  3: {
    name: '投石兵・特上',
    soldier: 10,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 3,
    hide: 3,
  },
  4: {
    name: '槍兵・並',
    soldier: 7,
    atk: 0,
    def: 0,
    mobile: 1,
    back: 2,
    scout: 0,
    hide: 0,
  },
  5:
  {
    name: '槍兵・上',
    soldier: 7,
    atk: 0,
    def: 0,
    mobile: 2,
    back: 3,
    scout: 0,
    hide: 0,
  },
  6: {
    name: '槍兵・特上',
    soldier: 8,
    atk: 0,
    def: 0,
    mobile: 3,
    back: 5,
    scout: 0,
    hide: 0,
  },
  7: {
    name: '軽歩兵・並',
    soldier: 8,
    atk: 0,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 1,
  },
  8: {
    name: '軽歩兵・上',
    soldier: 9,
    atk: 0,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 2,
  },
  9: {
    name: '軽歩兵・特上',
    soldier: 10,
    atk: 0,
    def: 0,
    mobile: 5,
    back: 0,
    scout: 0,
    hide: 3,
  },
  10: {
    name: '重歩兵・並',
    soldier: 10,
    atk: 1,
    def: 2,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11: {
    name: '重歩兵・上',
    soldier: 11,
    atk: 2,
    def: 2,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  12: {
    name: '重歩兵・特上',
    soldier: 12,
    atk: 3,
    def: 5,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  13: {
    name: '盾兵・並',
    soldier: 11,
    atk: 0,
    def: 5,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  14: {
    name: '盾兵・上',
    soldier: 13,
    atk: 0,
    def: 7,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  15: {
    name: '盾兵・特上',
    soldier: 15,
    atk: 0,
    def: 10,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  16: {
    name: '軽騎兵・並',
    soldier: 9,
    atk: 1,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 0,
  },
  17: {
    name: '軽騎兵・上',
    soldier: 10,
    atk: 2,
    def: 1,
    mobile: 3,
    back: 0,
    scout: 0,
    hide: 0,
  },
  18: {
    name: '軽騎兵・特上',
    soldier: 12,
    atk: 3,
    def: 3,
    mobile: 5,
    back: 0,
    scout: 0,
    hide: 0,
  },
  19: {
    name: '重騎兵・並',
    soldier: 11,
    atk: 1,
    def: 3,
    mobile: 0,
    back: 1,
    scout: 0,
    hide: 0,
  },
  20: {
    name: '重騎兵・上',
    soldier: 12,
    atk: 2,
    def: 3,
    mobile: 1,
    back: 2,
    scout: 0,
    hide: 0,
  },
  21: {
    name: '重騎兵・特上',
    soldier: 13,
    atk: 3,
    def: 5,
    mobile: 3,
    back: 3,
    scout: 0,
    hide: 0,
  },
  22: {
    name: '精鋭兵・並',
    soldier: 11,
    atk: 0,
    def: 2,
    mobile: 2,
    back: 0,
    scout: 1,
    hide: 1,
  },
  23: {
    name: '精鋭兵・上',
    soldier: 12,
    atk: 0,
    def: 3,
    mobile: 3,
    back: 0,
    scout: 2,
    hide: 2,
  },
  24: {
    name: '精鋭兵・特上',
    soldier: 13,
    atk: 0,
    def: 5,
    mobile: 5,
    back: 0,
    scout: 3,
    hide: 3,
  },
  25: {
    name: '弓兵・並',
    soldier: 6,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 2,
  },
  26: {
    name: '弓兵・上',
    soldier: 7,
    atk: 1,
    def: 0,
    mobile: 0,
    back: 1,
    scout: 0,
    hide: 3,
  },
  27: {
    name: '弓兵・特上',
    soldier: 8,
    atk: 3,
    def: 0,
    mobile: 0,
    back: 3,
    scout: 0,
    hide: 5,
  },
  28: {
    name: '銃兵・並',
    soldier: 5,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 2,
    hide: 0,
  },
  29: {
    name: '銃兵・上',
    soldier: 6,
    atk: 1,
    def: 0,
    mobile: 0,
    back: 1,
    scout: 3,
    hide: 0,
  },
  30: {
    name: '銃兵・特上',
    soldier: 6,
    atk: 3,
    def: 0,
    mobile: 0,
    back: 3,
    scout: 5,
    hide: 0,
  },
  31: {
    name: '投豆兵・並',
    soldier: 8,
    atk: 2,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 1,
    hide: 1,
  },
  32: {
    name: '投豆兵・上',
    soldier: 9,
    atk: 3,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 2,
    hide: 2,
  },
  33: {
    name: '投豆兵・特上',
    soldier: 12,
    atk: 6,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 3,
    hide: 3,
  },
  10001: {
    name: '01王庭',
    soldier: 0,
    atk: 3,
    def: 0,
    mobile: 7,
    back: 0,
    scout: 0,
    hide: 0,
  },
  10002: {
    name: '02三国黒',
    soldier: 0,
    atk: 0,
    def: 3,
    mobile: 10,
    back: 3,
    scout: 0,
    hide: 0,
  },
  10003: {
    name: '03松風',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 13,
    back: 0,
    scout: 0,
    hide: 0,
  },
  10004: {
    name: '04小雲雀',
    soldier: 0,
    atk: 0,
    def: 2,
    mobile: 17,
    back: 0,
    scout: 2,
    hide: 2,
  },
  10005: {
    name: '05高盾黒',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 13,
    back: 3,
    scout: 0,
    hide: 0,
  },
  10006: {
    name: '06花柑子',
    soldier: 0,
    atk: 0,
    def: 3,
    mobile: 15,
    back: 0,
    scout: 0,
    hide: 0,
  },
  10007: {
    name: '07青海波',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 13,
    back: 0,
    scout: 3,
    hide: 2,
  },
  10008: {
    name: '08望月',
    soldier: 0,
    atk: 3,
    def: 0,
    mobile: 17,
    back: 0,
    scout: 0,
    hide: 2,
  },
  11011: {
    name: '白毛',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 5,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11021: {
    name: '鹿毛',
    soldier: 0,
    atk: 3,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11031: {
    name: '青毛',
    soldier: 0,
    atk: 5,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11041: {
    name: '祝一号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
  11042: {
    name: '祝一号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
  11043: {
    name: '祝三号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
  11044: {
    name: '祝四号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
};

export const swordName = {
  0: '不明',
  3: '三日月宗近',
  4: '三日月宗近・極',
  5: '小狐丸',
  6: '小狐丸・極',
  7: '石切丸',
  8: '石切丸・極',
  9: '岩融',
  10: '岩融・極',
  11: '今剣',
  12: '今剣・極',
  13: '大典太光世',
  14: '大典太光世・極',
  15: 'ソハヤノツルキ',
  16: 'ソハヤノツルキ・極',
  17: '数珠丸恒次',
  18: '数珠丸恒次・極',
  19: 'にっかり青江',
  20: 'にっかり青江・極',
  23: '鳴狐',
  24: '鳴狐・極',
  25: '一期一振',
  26: '一期一振・極',
  27: '鯰尾藤四郎',
  28: '鯰尾藤四郎・極',
  29: '骨喰藤四郎',
  30: '骨喰藤四郎・極',
  31: '平野藤四郎',
  32: '平野藤四郎・極 ',
  33: '厚藤四郎',
  34: '厚藤四郎・極 ',
  35: '後藤藤四郎',
  36: '後藤藤四郎・極',
  37: '信濃藤四郎',
  38: '信濃藤四郎・極',
  39: '前田藤四郎',
  40: '前田藤四郎・極',
  41: '秋田藤四郎',
  42: '秋田藤四郎・極',
  43: '博多藤四郎',
  44: '博多藤四郎・極',
  45: '乱藤四郎',
  46: '乱藤四郎・極',
  47: '五虎退',
  48: '五虎退・極',
  49: '薬研藤四郎',
  50: '薬研藤四郎・極',
  51: '包丁藤四郎',
  52: '包丁藤四郎・極',
  53: '大包平',
  54: '大包平・極',
  55: '鶯丸',
  56: '鶯丸・極',
  57: '明石国行',
  58: '明石国行・極',
  59: '蛍丸',
  60: '蛍丸・極',
  61: '愛染国俊',
  62: '愛染国俊・極',
  63: '千子村正',
  64: '千子村正・極',
  65: '蜻蛉切',
  66: '蜻蛉切・極',
  67: '物吉貞宗',
  68: '物吉貞宗・極',
  69: '太鼓鐘貞宗',
  70: '太鼓鐘貞宗・極',
  71: '亀甲貞宗',
  72: '亀甲貞宗・極',
  73: '燭台切光忠',
  74: '燭台切光忠・極',
  75: '大般若長光',
  76: '大般若長光・極',
  77: '小竜景光',
  78: '小竜景光・極',
  79: '江雪左文字',
  80: '江雪左文字・極',
  81: '宗三左文字',
  82: '宗三左文字・極',
  83: '小夜左文字',
  84: '小夜左文字・極',
  85: '加州清光',
  86: '加州清光・極',
  87: '大和守安定',
  88: '大和守安定・極',
  89: '歌仙兼定',
  90: '歌仙兼定・極',
  91: '和泉守兼定',
  92: '和泉守兼定・極',
  93: '陸奥守吉行',
  94: '陸奥守吉行・極',
  95: '山姥切国広',
  96: '山姥切国広・極',
  97: '山伏国広',
  98: '山伏国広・極',
  99: '堀川国広',
  100: '堀川国広・極',
  101: '蜂須賀虎徹',
  102: '蜂須賀虎徹・極',
  103: '浦島虎徹',
  104: '浦島虎徹・極',
  105: '長曽祢虎徹',
  106: '長曽祢虎徹・極',
  107: '髭切',
  108: '髭切・特一',
  109: '髭切・特二',
  110: '髭切・特三',
  111: '髭切・極',
  112: '膝丸',
  113: '膝丸・特一',
  114: '膝丸・特二',
  115: '膝丸・極',
  116: '大倶利伽羅',
  117: '大倶利伽羅・極',
  118: 'へし切長谷部',
  119: 'へし切長谷部・極',
  120: '不動行光',
  121: '不動行光・極',
  122: '獅子王',
  123: '獅子王・極',
  124: '小烏丸',
  125: '小烏丸・極',
  128: '同田貫正国',
  129: '同田貫正国・極',
  130: '鶴丸国永',
  131: '鶴丸国永・極',
  132: '太郎太刀',
  133: '太郎太刀・極',
  134: '次郎太刀',
  135: '次郎太刀・極',
  136: '日本号',
  137: '日本号・極',
  138: '御手杵',
  139: '御手杵・極',
  140: '巴形薙刀',
  141: '巴形薙刀・極',
  142: '毛利藤四郎',
  143: '毛利藤四郎・極',
  144: '篭手切江',
  145: '篭手切江・極',
  146: '謙信景光',
  147: '謙信景光・極',
  148: '小豆長光',
  149: '小豆長光・極',
  150: '日向正宗',
  151: '日向正宗・極',
  152: '静形薙刀',
  153: '静形薙刀・極',
  154: '南泉一文字',
  155: '南泉一文字・極',
  156: '千代金丸',
  157: '千代金丸・極',
  158: '山姥切長義',
  159: '山姥切長義・極',
  160: '豊前江',
  161: '豊前江・極',
  162: '祢々切丸',
  163: '祢々切丸・極',
  164: '白山吉光',
  165: '白山吉光・極',
  166: '南海太郎朝尊',
  167: '南海太郎朝尊・極',
  168: '肥前忠広',
  169: '肥前忠広・極',
  170: '北谷菜切',
  171: '北谷菜切・極',
  172: '桑名江',
  173: '桑名江・極',
  174: '水心子正秀',
  175: '水心子正秀・極',
  176: '源清麿',
  177: '源清麿・極',
  178: '松井江',
  179: '松井江・極',
  180: '山鳥毛',
  181: '山鳥毛・極',
};

export enum swordNameType {
  tanto = '短刀',
  wakizashi = '脇差',
  uchigatana = '打刀',
  tachi = '太刀',
  odachi = '大太刀',
  yari = '槍',
  naginata = '薙刀',
  tsurugi = '剣',
}

export const raritySlotNUmber = {
  1: 1,
  2: 2,
  3: 2,
  4: 3,
  5: 3,
};

export const swordProps = {
  0: {
    name: '不明',
    type: '短刀',
  },
  3: {
    name: '三日月宗近',
    type: '太刀',
  },
  4: {
    name: '三日月宗近・極',
    type: '太刀',
  },
  5: {
    name: '小狐丸',
    type: '太刀',
  },
  6: {
    name: '小狐丸・極',
    type: '太刀',
  },
  7: {
    name: '石切丸',
    type: '大太刀',
  },
  8: {
    name: '石切丸・極',
    type: '大太刀',
  },
  9: {
    name: '岩融',
    type: '薙刀',
  },
  10: {
    name: '岩融・極',
    type: '薙刀',
  },
  11: {
    name: '今剣',
    type: '短刀',
  },
  12: {
    name: '今剣・極',
    type: '短刀',
  },
  13: {
    name: '大典太光世',
    type: '太刀',
  },
  14: {
    name: '大典太光世・極',
    type: '太刀',
  },
  15: {
    name: 'ソハヤノツルキ',
    type: '太刀',
  },
  16: {
    name: 'ソハヤノツルキ・極',
    type: '太刀',
  },
  17: {
    name: '数珠丸恒次',
    type: '太刀',
  },
  18: {
    name: '数珠丸恒次・極',
    type: '太刀',
  },
  19: {
    name: 'にっかり青江',
    type: '脇差',
  },
  20: {
    name: 'にっかり青江・極',
    type: '脇差',
  },
  23: {
    name: '鳴狐',
    type: '打刀',
  },
  24: {
    name: '鳴狐・極',
    type: '打刀',
  },
  25: {
    name: '一期一振',
    type: '太刀',
  },
  26: {
    name: '一期一振・極',
    type: '太刀',
  },
  27: {
    name: '鯰尾藤四郎',
    type: '脇差',
  },
  28: {
    name: '鯰尾藤四郎・極',
    type: '脇差',
  },
  29: {
    name: '骨喰藤四郎',
    type: '脇差',
  },
  30: {
    name: '骨喰藤四郎・極',
    type: '脇差',
  },
  31: {
    name: '平野藤四郎',
    type: '短刀',
  },
  32: {
    name: '平野藤四郎・極 ',
    type: '短刀',
  },
  33: {
    name: '厚藤四郎',
    type: '短刀',
  },
  34: {
    name: '厚藤四郎・極 ',
    type: '短刀',
  },
  35: {
    name: '後藤藤四郎',
    type: '短刀',
  },
  36: {
    name: '後藤藤四郎・極',
    type: '短刀',
  },
  37: {
    name: '信濃藤四郎',
    type: '短刀',
  },
  38: {
    name: '信濃藤四郎・極',
    type: '短刀',
  },
  39: {
    name: '前田藤四郎',
    type: '短刀',
  },
  40: {
    name: '前田藤四郎・極',
    type: '短刀',
  },
  41: {
    name: '秋田藤四郎',
    type: '短刀',
  },
  42: {
    name: '秋田藤四郎・極',
    type: '短刀',
  },
  43: {
    name: '博多藤四郎',
    type: '短刀',
  },
  44: {
    name: '博多藤四郎・極',
    type: '短刀',
  },
  45: {
    name: '乱藤四郎',
    type: '短刀',
  },
  46: {
    name: '乱藤四郎・極',
    type: '短刀',
  },
  47: {
    name: '五虎退',
    type: '短刀',
  },
  48: {
    name: '五虎退・極',
    type: '短刀',
  },
  49: {
    name: '薬研藤四郎',
    type: '短刀',
  },
  50: {
    name: '薬研藤四郎・極',
    type: '短刀',
  },
  51: {
    name: '包丁藤四郎',
    type: '短刀',
  },
  52: {
    name: '包丁藤四郎・極',
    type: '短刀',
  },
  53: {
    name: '大包平',
    type: '太刀',
  },
  54: {
    name: '大包平・極',
    type: '太刀',
  },
  55: {
    name: '鶯丸',
    type: '太刀',
  },
  56: {
    name: '鶯丸・極',
    type: '太刀',
  },
  57: {
    name: '明石国行',
    type: '太刀',
  },
  58: {
    name: '明石国行・極',
    type: '太刀',
  },
  59: {
    name: '蛍丸',
    type: '大太刀',
  },
  60: {
    name: '蛍丸・極',
    type: '大太刀',
  },
  61: {
    name: '愛染国俊',
    type: '短刀',
  },
  62: {
    name: '愛染国俊・極',
    type: '短刀',
  },
  63: {
    name: '千子村正',
    type: '打刀',
  },
  64: {
    name: '千子村正・極',
    type: '打刀',
  },
  65: {
    name: '蜻蛉切',
    type: '槍',
  },
  66: {
    name: '蜻蛉切・極',
    type: '槍',
  },
  67: {
    name: '物吉貞宗',
    type: '脇差',
  },
  68: {
    name: '物吉貞宗・極',
    type: '脇差',
  },
  69: {
    name: '太鼓鐘貞宗',
    type: '短刀',
  },
  70: {
    name: '太鼓鐘貞宗・極',
    type: '短刀',
  },
  71: {
    name: '亀甲貞宗',
    type: '打刀',
  },
  72: {
    name: '亀甲貞宗・極',
    type: '打刀',
  },
  73: {
    name: '燭台切光忠',
    type: '太刀',
  },
  74: {
    name: '燭台切光忠・極',
    type: '太刀',
  },
  75: {
    name: '大般若長光',
    type: '太刀',
  },
  76: {
    name: '大般若長光・極',
    type: '太刀',
  },
  77: {
    name: '小竜景光',
    type: '太刀',
  },
  78: {
    name: '小竜景光・極',
    type: '太刀',
  },
  79: {
    name: '江雪左文字',
    type: '太刀',
  },
  80: {
    name: '江雪左文字・極',
    type: '太刀',
  },
  81: {
    name: '宗三左文字',
    type: '打刀',
  },
  82: {
    name: '宗三左文字・極',
    type: '打刀',
  },
  83: {
    name: '小夜左文字',
    type: '短刀',
  },
  84: {
    name: '小夜左文字・極',
    type: '短刀',
  },
  85: {
    name: '加州清光',
    type: '打刀',
  },
  86: {
    name: '加州清光・極',
    type: '打刀',
  },
  87: {
    name: '大和守安定',
    type: '打刀',
  },
  88: {
    name: '大和守安定・極',
    type: '打刀',
  },
  89: {
    name: '歌仙兼定',
    type: '打刀',
  },
  90: {
    name: '歌仙兼定・極',
    type: '打刀',
  },
  91: {
    name: '和泉守兼定',
    type: '打刀',
  },
  92: {
    name: '和泉守兼定・極',
    type: '打刀',
  },
  93: {
    name: '陸奥守吉行',
    type: '打刀',
  },
  94: {
    name: '陸奥守吉行・極',
    type: '打刀',
  },
  95: {
    name: '山姥切国広',
    type: '打刀',
  },
  96: {
    name: '山姥切国広・極',
    type: '打刀',
  },
  97: {
    name: '山伏国広',
    type: '太刀',
  },
  98: {
    name: '山伏国広・極',
    type: '太刀',
  },
  99: {
    name: '堀川国広',
    type: '脇差',
  },
  100: {
    name: '堀川国広・極',
    type: '脇差',
  },
  101: {
    name: '蜂須賀虎徹',
    type: '打刀',
  },
  102: {
    name: '蜂須賀虎徹・極',
    type: '打刀',
  },
  103: {
    name: '浦島虎徹',
    type: '脇差',
  },
  104: {
    name: '浦島虎徹・極',
    type: '脇差',
  },
  105: {
    name: '長曽祢虎徹',
    type: '打刀',
  },
  106: {
    name: '長曽祢虎徹・極',
    type: '打刀',
  },
  107: {
    name: '髭切',
    type: '太刀',
  },
  108: {
    name: '髭切・特一',
    type: '太刀',
  },
  109: {
    name: '髭切・特二',
    type: '太刀',
  },
  110: {
    name: '髭切・特三',
    type: '太刀',
  },
  111: {
    name: '髭切・極',
    type: '太刀',
  },
  112: {
    name: '膝丸',
    type: '太刀',
  },
  113: {
    name: '膝丸・特一',
    type: '太刀',
  },
  114: {
    name: '膝丸・特二',
    type: '太刀',
  },
  115: {
    name: '膝丸・極',
    type: '太刀',
  },
  116: {
    name: '大倶利伽羅',
    type: '打刀',
  },
  117: {
    name: '大倶利伽羅・極',
    type: '打刀',
  },
  118: {
    name: 'へし切長谷部',
    type: '打刀',
  },
  119: {
    name: 'へし切長谷部・極',
    type: '打刀',
  },
  120: {
    name: '不動行光',
    type: '短刀',
  },
  121: {
    name: '不動行光・極',
    type: '短刀',
  },
  122: {
    name: '獅子王',
    type: '太刀',
  },
  123: {
    name: '獅子王・極',
    type: '太刀',
  },
  124: {
    name: '小烏丸',
    type: '太刀',
  },
  125: {
    name: '小烏丸・極',
    type: '太刀',
  },
  128: {
    name: '同田貫正国',
    type: '打刀',
  },
  129: {
    name: '同田貫正国・極',
    type: '打刀',
  },
  130: {
    name: '鶴丸国永',
    type: '太刀',
  },
  131: {
    name: '鶴丸国永・極',
    type: '太刀',
  },
  132: {
    name: '太郎太刀',
    type: '大太刀',
  },
  133: {
    name: '太郎太刀・極',
    type: '大太刀',
  },
  134: {
    name: '次郎太刀',
    type: '大太刀',
  },
  135: {
    name: '次郎太刀・極',
    type: '大太刀',
  },
  136: {
    name: '日本号',
    type: '槍',
  },
  137: {
    name: '日本号・極',
    type: '槍',
  },
  138: {
    name: '御手杵',
    type: '槍',
  },
  139: {
    name: '御手杵・極',
    type: '槍',
  },
  140: {
    name: '巴形薙刀',
    type: '薙刀',
  },
  141: {
    name: '巴形薙刀・極',
    type: '薙刀',
  },
  142: {
    name: '毛利藤四郎',
    type: '短刀',
  },
  143: {
    name: '毛利藤四郎・極',
    type: '短刀',
  },
  144: {
    name: '篭手切江',
    type: '脇差',
  },
  145: {
    name: '篭手切江・極',
    type: '脇差',
  },
  146: {
    name: '謙信景光',
    type: '短刀',
  },
  147: {
    name: '謙信景光・極',
    type: '短刀',
  },
  148: {
    name: '小豆長光',
    type: '太刀',
  },
  149: {
    name: '小豆長光・極',
    type: '太刀',
  },
  150: {
    name: '日向正宗',
    type: '短刀',
  },
  151: {
    name: '日向正宗・極',
    type: '短刀',
  },
  152: {
    name: '静形薙刀',
    type: '薙刀',
  },
  153: {
    name: '静形薙刀・極',
    type: '薙刀',
  },
  154: {
    name: '南泉一文字',
    type: '打刀',
  },
  155: {
    name: '南泉一文字・極',
    type: '打刀',
  },
  156: {
    name: '千代金丸',
    type: '太刀',
  },
  157: {
    name: '千代金丸・極',
    type: '太刀',
  },
  158: {
    name: '山姥切長義',
    type: '打刀',
  },
  159: {
    name: '山姥切長義・極',
    type: '打刀',
  },
  160: {
    name: '豊前江',
    type: '打刀',
  },
  161: {
    name: '豊前江・極',
    type: '打刀',
  },
  162: {
    name: '祢々切丸',
    type: '大太刀',
  },
  163: {
    name: '祢々切丸・極',
    type: '大太刀',
  },
  164: {
    name: '白山吉光',
    type: '剣',
  },
  165: {
    name: '白山吉光・極',
    type: '剣',
  },
  166: {
    name: '南海太郎朝尊',
    type: '打刀',
  },
  167: {
    name: '南海太郎朝尊・極',
    type: '打刀',
  },
  168: {
    name: '肥前忠広',
    type: '脇差',
  },
  169: {
    name: '肥前忠広・極',
    type: '脇差',
  },
  170: {
    name: '北谷菜切',
    type: '短刀',
  },
  171: {
    name: '北谷菜切・極',
    type: '短刀',
  },
  172: {
    name: '桑名江',
    type: '打刀',
  },
  173: {
    name: '桑名江・極',
    type: '打刀',
  },
  174: {
    name: '水心子正秀',
    type: '打刀',
  },
  175: {
    name: '水心子正秀・極',
    type: '打刀',
  },
  176: {
    name: '源清麿',
    type: '打刀',
  },
  177: {
    name: '源清麿・極',
    type: '打刀',
  },
  178: {
    name: '松井江',
    type: '打刀',
  },
  179: {
    name: '松井江・極',
    type: '打刀',
  },
  180: {
    name: '山鳥毛',
    type: '太刀',
  },
  181: {
    name: '山鳥毛・極',
    type: '太刀',
  },
};

// 抜けている番号は情報不足のためフォロー必須
export const itemName = {
  1: {
    1: 'お守り',
    3: '仙人団子',
    4: '御札・富士',
    5: '御札・松',
    6: '御札・竹',
    7: '御札・梅',
    8: '手伝い札',
    13: '小判箱・小',
    14: '小判箱・中',
    15: '小判箱・大',
    17: '幕ノ内弁当',
    18: '手紙一式',
    19: '旅装束',
    20: '旅道具',
    21: '遠征呼び戻し鳩',
    22: '兵糧丸',
    24: '蘇言機',
    25: '笛',
    26: '琴',
    27: '三味線',
    28: '太鼓',
    29: '鈴',
    37: '一口団子',
    50: '三倍枡',
    58: '引換シール',
    60: '福豆',
    68: '堆肥',
    69: '特別肥料',
    89: '紅白饅頭',
    113: '慈姑',
    114: '花梨',
    115: '寒椿',
    116: '喜知次',
    119: '芥子菜',
    120: '檸檬',
    121: '菜の花',
    122: '公魚',
    1001: '根兵糖',
  },
  2: {},
  // 装備類（馬，刀装）
  // 3: {},
  4: {
    0: '小判',
  },
  5: {
    1: '依頼札',
    2: '木炭',
    3: '玉鋼',
    4: '冷却材',
    5: '砥石',
  },
};

// リソースのid確認
export const resourceId = {
  charcoal: 2,
  steel: 3,
  coolant: 4,
  file: 5,
};

export const conquestData = {
  1: {
    age: '維新の記憶',
    destination: '鳥羽・伏見の戦い',
    require: {
      time: 10,
      totalLv: 5,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 25,
        user_exp: 10,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 10,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 15,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  2: {
    age: '維新の記憶',
    destination: '世直し一揆',
    require: {
      time: 30,
      totalLv: 10,
      swordType: {
        tanto: true,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 70,
        user_exp: 20,
        item: [
          {
            item_type: 5,
            item_id: 4,
            item_num: 30,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 30,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  3: {
    age: '維新の記憶',
    destination: '甲州勝沼の戦い',
    require: {
      time: 20,
      totalLv: 20,
      swordType: {
        tanto: false,
        wakizashi: true,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 65,
        user_exp: 20,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 20,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 20,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  4: {
    age: '維新の記憶',
    destination: '白河戦線',
    require: {
      time: 60,
      totalLv: 30,
      swordType: {
        tanto: true,
        wakizashi: true,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 135,
        user_exp: 35,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 60,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 60,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  5: {
    age: '江戸の記憶',
    destination: '公武合体運動',
    require: {
      time: 90,
      totalLv: 50,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 285,
        user_exp: 55,
        item: [
          {
            item_type: 5,
            item_id: 4,
            item_num: 90,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 90,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 13,
            item_num: 1,
          },
        ],
      },
    },
  },
  6: {
    age: '江戸の記憶',
    destination: '加役方人足寄場',
    require: {
      time: 180,
      totalLv: 60,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: true,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 570,
        user_exp: 100,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 50,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 250,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 13,
            item_num: 1,
          },
        ],
      },
    },
  },
  7: {
    age: '江戸の記憶',
    destination: '享保の大飢饉',
    require: {
      time: 120,
      totalLv: 80,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: true,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 380,
        user_exp: 70,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 120,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 120,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 5,
            item_id: 1,
            item_num: 1,
          },
        ],
      },
    },
  },
  8: {
    age: '江戸の記憶',
    destination: '天下泰平',
    require: {
      time: 150,
      totalLv: 100,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: true,
        tachi: true,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 585,
        user_exp: 90,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 180,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 120,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 1,
          },
        ],
      },
    },
  },
  9: {
    age: '織豊の記憶',
    destination: '美濃国の決戦',
    require: {
      time: 240,
      totalLv: 110,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 760,
        user_exp: 130,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 130,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 240,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 5,
            item_id: 1,
            item_num: 1,
          },
        ],
      },
    },
  },
  10: {
    age: '織豊の記憶',
    destination: '反旗を翻した原因',
    require: {
      time: 180,
      totalLv: 120,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: true,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 700,
        user_exp: 105,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 60,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 150,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 1,
          },
        ],
      },
    },
  },
  11: {
    age: '織豊の記憶',
    destination: '安土城の警備',
    require: {
      time: 600,
      totalLv: 130,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 2325,
        user_exp: 315,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 14,
            item_num: 1,
          },
        ],
      },
    },
  },
  12: {
    age: '織豊の記憶',
    destination: '天下布武',
    require: {
      time: 480,
      totalLv: 140,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 1860,
        user_exp: 255,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 1,
          },
        ],
      },
    },
  },
  13: {
    age: '戦国の記憶',
    destination: '長篠城攻城戦',
    require: {
      time: 120,
      totalLv: 150,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 540,
        user_exp: 80,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 80,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 60,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 5,
            item_id: 1,
            item_num: 1,
          },
        ],
      },
    },
  },
  14: {
    age: '戦国の記憶',
    destination: '西上作戦',
    require: {
      time: 300,
      totalLv: 180,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 1345,
        user_exp: 170,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 380,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 14,
            item_num: 1,
          },
        ],
      },
    },
  },
  15: {
    age: '戦国の記憶',
    destination: '甲相駿三国同盟',
    require: {
      time: 720,
      totalLv: 200,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 3600,
        user_exp: 385,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 2,
          },
        ],
      },
    },
  },
  16: {
    age: '戦国の記憶',
    destination: '比叡山延暦寺',
    require: {
      time: 360,
      totalLv: 220,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 1610,
        user_exp: 200,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 150,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 400,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
        ],
      },
    },
  },
  17: {
    age: '武家の記憶',
    destination: '鎌倉防衛戦',
    require: {
      time: 720,
      totalLv: 240,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 3220,
        user_exp: 380,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 250,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 250,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 250,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 2,
          },
        ],
      },
    },
  },
  18: {
    age: '武家の記憶',
    destination: '元寇防塁',
    require: {
      time: 1080,
      totalLv: 260,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: true,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 4830,
        user_exp: 560,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 500,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 300,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 2,
          },
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
        ],
      },
    },
  },
  19: {
    age: '武家の記憶',
    destination: '流鏑馬揃え',
    require: {
      time: 900,
      totalLv: 280,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: true,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 4500,
        user_exp: 475,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 350,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 250,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
        ],
      },
    },
  },
  20: {
    age: '武家の記憶',
    destination: '奥州合戦',
    require: {
      time: 1440,
      totalLv: 300,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 7200,
        user_exp: 1490,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 300,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 400,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
          {
            item_type: 5,
            item_id: 1,
            item_num: 3,
          },
        ],
      },
    },
  },

};
