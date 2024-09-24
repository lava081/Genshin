import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 刻晴 */
export const metaData = {
	info: {
		title: "霆霓快雨",
		allegiance: "璃月七星",
		birth: "11-20",
		astro: "金紫定垂座",
		desc: "璃月七星之一，玉衡星。对「帝君一言而决的璃月」颇有微词——但实际上，神挺欣赏她这样的人。",
		cncv: "谢莹",
		jpcv: "喜多村英梨",
		ver: 1
	},
	costumes: [204201],
	baseAttr: {
		[AttrKeys.hp]: 13103,
		[AttrKeys.atk]: 322.89,
		[AttrKeys.def]: 799.3
	},
	growAttr: {
		key: AttrKeys.cdmg,
		value: 38.4
	},
	materials: {
		[MaterialType.gem]: "最胜紫晶",
		[MaterialType.boss]: "雷光棱镜",
		[MaterialType.specialty]: "石珀",
		[MaterialType.normal]: "原素花蜜",
		[MaterialType.talent]: "「繁荣」的哲学",
		[MaterialType.weekly]: "北风之环"
	},
	talent: {
		[GsTalentType.a]: {
			id: 4231,
			name: "普通攻击·云来剑法",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续剑击。",
				"<h3>重击</h3>",
				"消耗一定体力，瞬间向前方挥出两剑。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"41.02%",
						"44.36%",
						"47.7%",
						"52.47%",
						"55.81%",
						"59.62%",
						"64.87%",
						"70.12%",
						"75.37%",
						"81.09%",
						"86.81%",
						"92.54%",
						"98.26%",
						"103.99%",
						"109.71%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"41.02%",
						"44.36%",
						"47.7%",
						"52.47%",
						"55.81%",
						"59.62%",
						"64.87%",
						"70.12%",
						"75.37%",
						"81.09%",
						"86.81%",
						"92.54%",
						"98.26%",
						"103.99%",
						"109.71%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"54.44%",
						"58.87%",
						"63.3%",
						"69.63%",
						"74.06%",
						"79.12%",
						"86.09%",
						"93.05%",
						"100.01%",
						"107.61%",
						"115.21%",
						"122.8%",
						"130.4%",
						"137.99%",
						"145.59%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"31.48% + 34.4%",
						"34.04% + 37.2%",
						"36.6% + 40%",
						"40.26% + 44%",
						"42.82% + 46.8%",
						"45.75% + 50%",
						"49.78% + 54.4%",
						"53.8% + 58.8%",
						"57.83% + 63.2%",
						"62.22% + 68%",
						"66.61% + 72.8%",
						"71% + 77.6%",
						"75.4% + 82.4%",
						"79.79% + 87.2%",
						"84.18% + 92%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"66.99%",
						"72.45%",
						"77.9%",
						"85.69%",
						"91.14%",
						"97.37%",
						"105.94%",
						"114.51%",
						"123.08%",
						"132.43%",
						"141.78%",
						"151.13%",
						"160.47%",
						"169.82%",
						"179.17%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"76.8% + 86%",
						"83.05% + 93%",
						"89.3% + 100%",
						"98.23% + 110%",
						"104.48% + 117%",
						"111.63% + 125%",
						"121.45% + 136%",
						"131.27% + 147%",
						"141.09% + 158%",
						"151.81% + 170%",
						"162.53% + 182%",
						"173.24% + 194%",
						"183.96% + 206%",
						"194.67% + 218%",
						"205.39% + 230%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"63.93%",
						"69.14%",
						"74.34%",
						"81.77%",
						"86.98%",
						"92.93%",
						"101.1%",
						"109.28%",
						"117.46%",
						"126.38%",
						"135.3%",
						"144.22%",
						"153.14%",
						"162.06%",
						"170.98%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"127.84% / 159.68%",
						"138.24% / 172.67%",
						"148.65% / 185.67%",
						"163.51% / 204.24%",
						"173.92% / 217.23%",
						"185.81% / 232.09%",
						"202.16% / 252.51%",
						"218.51% / 272.93%",
						"234.86% / 293.36%",
						"252.7% / 315.64%",
						"270.54% / 337.92%",
						"288.38% / 360.2%",
						"306.22% / 382.48%",
						"324.05% / 404.76%",
						"341.89% / 427.04%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 4232,
			name: "星斗归位",
			desc: [
				"迅速投出雷楔，以疾雷之势歼敌。",
				"雷楔命中时会对小范围内的敌人造成雷元素伤害，并在命中的位置留下雷楔标记。",
				"<h3>长按</h3>",
				"长按以调整雷楔标记投掷的方向。",
				"通过长按投出的雷楔，可以悬浮在空中，并使刻晴再次施放星斗归位时跨越地形。",
				"<h3>雷楔</h3>",
				"在雷楔的持续期间内，刻晴再次施放星斗归位或施展重击时，会清除雷楔标记并造成不同的效果：",
				"·再次施放星斗归位时，瞬移到标记处进行一次斩击，造成雷元素范围伤害。瞬移至长按投掷的雷楔处时，可以跨越地形障碍；",
				"·施展重击时，在标记处引发雷暴连斩，造成数次雷元素范围伤害。",
				"<i>「人像是蛾子，总奔着名叫神仙的火光而去。但是我这光是自己点的。」</i>"
			],
			tables: [
				{
					name: "雷楔伤害",
					isSame: false,
					values: [
						"50.4%",
						"54.18%",
						"57.96%",
						"63%",
						"66.78%",
						"70.56%",
						"75.6%",
						"80.64%",
						"85.68%",
						"90.72%",
						"95.76%",
						"100.8%",
						"107.1%",
						"113.4%",
						"119.7%"
					]
				},
				{
					name: "斩击伤害",
					isSame: false,
					values: [
						"168%",
						"180.6%",
						"193.2%",
						"210%",
						"222.6%",
						"235.2%",
						"252%",
						"268.8%",
						"285.6%",
						"302.4%",
						"319.2%",
						"336%",
						"357%",
						"378%",
						"399%"
					]
				},
				{
					name: "雷暴连斩伤害",
					isSame: false,
					values: [
						"84%*2",
						"90.3%*2",
						"96.6%*2",
						"105%*2",
						"111.3%*2",
						"117.6%*2",
						"126%*2",
						"134.4%*2",
						"142.8%*2",
						"151.2%*2",
						"159.6%*2",
						"168%*2",
						"178.5%*2",
						"189%*2",
						"199.5%*2"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒",
						"7.5秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 4239,
			name: "天街巡游",
			desc: [
				"爆发雷电的力量，造成范围雷元素伤害。",
				"随后隐入剑影中，对周围的敌人进行如同迅雷霆霓般疾速的连斩，造成多段雷元素伤害，并在最后一击时造成高额雷元素范围伤害。",
				"<i>刻晴自己剑术中最为迅捷的一招，可将诸星斩落。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"88%",
						"94.6%",
						"101.2%",
						"110%",
						"116.6%",
						"123.2%",
						"132%",
						"140.8%",
						"149.6%",
						"158.4%",
						"167.2%",
						"176%",
						"187%",
						"198%",
						"209%"
					]
				},
				{
					name: "连斩伤害",
					isSame: false,
					values: [
						"24%*8",
						"25.8%*8",
						"27.6%*8",
						"30%*8",
						"31.8%*8",
						"33.6%*8",
						"36%*8",
						"38.4%*8",
						"40.8%*8",
						"43.2%*8",
						"45.6%*8",
						"48%*8",
						"51%*8",
						"54%*8",
						"57%*8"
					]
				},
				{
					name: "最后一击伤害",
					isSame: false,
					values: [
						"188.8%",
						"202.96%",
						"217.12%",
						"236%",
						"250.16%",
						"264.32%",
						"283.2%",
						"302.08%",
						"320.96%",
						"339.84%",
						"358.72%",
						"377.6%",
						"401.2%",
						"424.8%",
						"448.4%"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				41.02,
				44.36,
				47.7,
				52.47,
				55.81,
				59.62,
				64.87,
				70.12,
				75.37,
				81.09,
				86.81,
				92.54,
				98.26,
				103.99,
				109.71
			],
			"二段伤害": [
				41.02,
				44.36,
				47.7,
				52.47,
				55.81,
				59.62,
				64.87,
				70.12,
				75.37,
				81.09,
				86.81,
				92.54,
				98.26,
				103.99,
				109.71
			],
			"三段伤害": [
				54.44,
				58.87,
				63.3,
				69.63,
				74.06,
				79.12,
				86.09,
				93.05,
				100.01,
				107.61,
				115.21,
				122.8,
				130.4,
				137.99,
				145.59
			],
			"四段伤害": [
				65.88,
				71.24000000000001,
				76.6,
				84.25999999999999,
				89.62,
				95.75,
				104.18,
				112.6,
				121.03,
				130.22,
				139.41,
				148.6,
				157.8,
				166.99,
				176.18
			],
			"四段伤害2": [
				[31.48, 34.4],
				[34.04, 37.2],
				[36.6, 40],
				[40.26, 44],
				[42.82, 46.8],
				[45.75, 50],
				[49.78, 54.4],
				[53.8, 58.8],
				[57.83, 63.2],
				[62.22, 68],
				[66.61, 72.8],
				[71, 77.6],
				[75.4, 82.4],
				[79.79, 87.2],
				[84.18, 92]
			],
			"五段伤害": [
				66.99,
				72.45,
				77.9,
				85.69,
				91.14,
				97.37,
				105.94,
				114.51,
				123.08,
				132.43,
				141.78,
				151.13,
				160.47,
				169.82,
				179.17
			],
			"重击伤害": [
				162.8,
				176.05,
				189.3,
				208.23000000000002,
				221.48000000000002,
				236.63,
				257.45,
				278.27,
				299.09000000000003,
				321.81,
				344.53,
				367.24,
				389.96000000000004,
				412.66999999999996,
				435.39
			],
			"重击伤害2": [
				[76.8, 86],
				[83.05, 93],
				[89.3, 100],
				[98.23, 110],
				[104.48, 117],
				[111.63, 125],
				[121.45, 136],
				[131.27, 147],
				[141.09, 158],
				[151.81, 170],
				[162.53, 182],
				[173.24, 194],
				[183.96, 206],
				[194.67, 218],
				[205.39, 230]
			],
			"下坠期间伤害": [
				63.93,
				69.14,
				74.34,
				81.77,
				86.98,
				92.93,
				101.1,
				109.28,
				117.46,
				126.38,
				135.3,
				144.22,
				153.14,
				162.06,
				170.98
			],
			"低空/高空坠地冲击伤害": [
				[127.84, 159.68],
				[138.24, 172.67],
				[148.65, 185.67],
				[163.51, 204.24],
				[173.92, 217.23],
				[185.81, 232.09],
				[202.16, 252.51],
				[218.51, 272.93],
				[234.86, 293.36],
				[252.7, 315.64],
				[270.54, 337.92],
				[288.38, 360.2],
				[306.22, 382.48],
				[324.05, 404.76],
				[341.89, 427.04]
			],
			"低空/高空坠地冲击伤害2": [
				[127.84, 159.68],
				[138.24, 172.67],
				[148.65, 185.67],
				[163.51, 204.24],
				[173.92, 217.23],
				[185.81, 232.09],
				[202.16, 252.51],
				[218.51, 272.93],
				[234.86, 293.36],
				[252.7, 315.64],
				[270.54, 337.92],
				[288.38, 360.2],
				[306.22, 382.48],
				[324.05, 404.76],
				[341.89, 427.04]
			]
		},
		[GsTalentType.e]: {
			"雷楔伤害": [
				50.4,
				54.18,
				57.96,
				63,
				66.78,
				70.56,
				75.6,
				80.64,
				85.68,
				90.72,
				95.76,
				100.8,
				107.1,
				113.4,
				119.7
			],
			"斩击伤害": [
				168,
				180.6,
				193.2,
				210,
				222.6,
				235.2,
				252,
				268.8,
				285.6,
				302.4,
				319.2,
				336,
				357,
				378,
				399
			],
			"雷暴连斩伤害": [
				168,
				180.6,
				193.2,
				210,
				222.6,
				235.2,
				252,
				268.8,
				285.6,
				302.4,
				319.2,
				336,
				357,
				378,
				399
			],
			"雷暴连斩伤害2": [
				[84, 2],
				[90.3, 2],
				[96.6, 2],
				[105, 2],
				[111.3, 2],
				[117.6, 2],
				[126, 2],
				[134.4, 2],
				[142.8, 2],
				[151.2, 2],
				[159.6, 2],
				[168, 2],
				[178.5, 2],
				[189, 2],
				[199.5, 2]
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				88,
				94.6,
				101.2,
				110,
				116.6,
				123.2,
				132,
				140.8,
				149.6,
				158.4,
				167.2,
				176,
				187,
				198,
				209
			],
			"连斩伤害": [
				192,
				206.4,
				220.8,
				240,
				254.4,
				268.8,
				288,
				307.2,
				326.4,
				345.6,
				364.8,
				384,
				408,
				432,
				456
			],
			"连斩伤害2": [
				[24, 8],
				[25.8, 8],
				[27.6, 8],
				[30, 8],
				[31.8, 8],
				[33.6, 8],
				[36, 8],
				[38.4, 8],
				[40.8, 8],
				[43.2, 8],
				[45.6, 8],
				[48, 8],
				[51, 8],
				[54, 8],
				[57, 8]
			],
			"最后一击伤害": [
				188.8,
				202.96,
				217.12,
				236,
				250.16,
				264.32,
				283.2,
				302.08,
				320.96,
				339.84,
				358.72,
				377.6,
				401.2,
				424.8,
				448.4
			]
		}
	},
	cons: new Map([
		[1, {
			name: "雷厉",
			desc: [
				"雷楔存在期间再次施放星斗归位时，在刻晴消失与出现的位置造成50%攻击力的雷元素范围伤害。"
			]
		}],
		[2, {
			name: "苛捐",
			desc: [
				"刻晴普通攻击与重击命中受到雷元素影响的敌人时，有50%几率产生一个元素微粒。",
				"该效果每5秒只能触发一次。"
			]
		}],
		[3, {
			name: "登楼",
			desc: [
				"天街巡游的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "调律",
			desc: [
				"刻晴触发雷元素相关反应后的10秒内，攻击力提升25%。"
			]
		}],
		[5, {
			name: "移灯",
			desc: [
				"星斗归位的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "廉贞",
			desc: [
				"进行普通攻击、重击、施放元素战技或元素爆发时，刻晴获得6%雷元素伤害加成，持续8秒。",
				"由普通攻击、重击、元素战技或元素爆发引起的效果分别独立存在。"
			]
		}]
	]),
	passive: [
		{
			name: "总务土地",
			desc: [
				"在璃月执行探索派遣任务时，消耗的时间缩短25%。"
			],
		},
		{
			name: "抵天雷罚",
			desc: [
				"雷楔存在期间再次施放星斗归位后的5秒内，刻晴获得雷元素附魔。"
			],
		},
		{
			name: "玉衡之贵",
			desc: [
				"施放天街巡游时，刻晴的暴击率提升15%，元素充能效率提升15%，持续8秒。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.cdmg
		],
		details: new Map([
			["1", [1020, 25.14, 62.22, 0]],
			["20", [2646, 65.21, 161.41, 0]],
			["40", [5268, 129.82, 321.35, 0]],
			["50", [6776, 166.97, 413.33, 9.6]],
			["60", [8500, 209.46, 518.5, 19.2]],
			["70", [10025, 247.04, 611.54, 19.2]],
			["80", [11561, 284.88, 705.2, 28.8]],
			["90", [13103, 322.89, 799.3, 38.4]],
			["20+", [3521, 86.76, 214.76, 0]],
			["40+", [5889, 145.13, 359.26, 9.6]],
			["50+", [7604, 187.39, 463.87, 19.2]],
			["60+", [9121, 224.77, 556.41, 19.2]],
			["70+", [10647, 262.36, 649.45, 28.8]],
			["80+", [12182, 300.19, 743.11, 38.4]]
		])
	},
};