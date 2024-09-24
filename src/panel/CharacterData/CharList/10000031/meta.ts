import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 菲谢尔 */
export const metaData = {
	info: {
		title: "断罪皇女！！",
		allegiance: "冒险家协会",
		birth: "5-27",
		astro: "幻鸦座",
		desc: "自称「断罪之皇女」，与名为奥兹的漆黑夜鸦同行的神秘少女。",
		cncv: "Mace&赵悦程",
		jpcv: "内田真礼&增谷康纪",
		ver: 1
	},
	costumes: [203101],
	baseAttr: {
		[AttrKeys.hp]: 9189,
		[AttrKeys.atk]: 244.26,
		[AttrKeys.def]: 593.79
	},
	growAttr: {
		key: AttrKeys.atk + "Pct",
		value: 24
	},
	materials: {
		[MaterialType.gem]: "最胜紫晶",
		[MaterialType.boss]: "雷光棱镜",
		[MaterialType.specialty]: "小灯草",
		[MaterialType.normal]: "历战的箭簇",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "北风的魂匣"
	},
	talent: {
		[GsTalentType.a]: {
			id: 3131,
			name: "普通攻击·罪灭之矢",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续弓箭射击。",
				"<h3>重击</h3>",
				"进行伤害更高、更为精准的瞄准射击。",
				"瞄准时，幽夜净土的黯雷精灵会听从皇女的号令，凭附在她的雷影魔箭上。聚满了断罪之雷的魔箭会造成高额的雷元素伤害。",
				"<h3>下落攻击</h3>",
				"从空中射出箭雨，并迅速下坠冲击地面，在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"44.12%",
						"47.71%",
						"51.3%",
						"56.43%",
						"60.02%",
						"64.13%",
						"69.77%",
						"75.41%",
						"81.05%",
						"87.21%",
						"93.37%",
						"99.52%",
						"105.68%",
						"111.83%",
						"117.99%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"46.78%",
						"50.59%",
						"54.4%",
						"59.84%",
						"63.65%",
						"68%",
						"73.98%",
						"79.97%",
						"85.95%",
						"92.48%",
						"99.01%",
						"105.54%",
						"112.06%",
						"118.59%",
						"125.12%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"58.14%",
						"62.87%",
						"67.6%",
						"74.36%",
						"79.09%",
						"84.5%",
						"91.94%",
						"99.37%",
						"106.81%",
						"114.92%",
						"123.03%",
						"131.14%",
						"139.26%",
						"147.37%",
						"155.48%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"57.71%",
						"62.4%",
						"67.1%",
						"73.81%",
						"78.51%",
						"83.88%",
						"91.26%",
						"98.64%",
						"106.02%",
						"114.07%",
						"122.12%",
						"130.17%",
						"138.23%",
						"146.28%",
						"154.33%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"72.07%",
						"77.93%",
						"83.8%",
						"92.18%",
						"98.05%",
						"104.75%",
						"113.97%",
						"123.19%",
						"132.4%",
						"142.46%",
						"152.52%",
						"162.57%",
						"172.63%",
						"182.68%",
						"192.74%"
					]
				},
				{
					name: "瞄准射击",
					isSame: false,
					values: [
						"43.86%",
						"47.43%",
						"51%",
						"56.1%",
						"59.67%",
						"63.75%",
						"69.36%",
						"74.97%",
						"80.58%",
						"86.7%",
						"92.82%",
						"98.94%",
						"105.06%",
						"111.18%",
						"117.3%"
					]
				},
				{
					name: "满蓄力瞄准射击",
					isSame: false,
					values: [
						"124%",
						"133.3%",
						"142.6%",
						"155%",
						"164.3%",
						"173.6%",
						"186%",
						"198.4%",
						"210.8%",
						"223.2%",
						"235.6%",
						"248%",
						"263.5%",
						"279%",
						"294.5%"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"56.83%",
						"61.45%",
						"66.08%",
						"72.69%",
						"77.31%",
						"82.6%",
						"89.87%",
						"97.14%",
						"104.41%",
						"112.34%",
						"120.27%",
						"128.2%",
						"136.12%",
						"144.05%",
						"151.98%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"113.63% / 141.93%",
						"122.88% / 153.49%",
						"132.13% / 165.04%",
						"145.35% / 181.54%",
						"154.59% / 193.1%",
						"165.16% / 206.3%",
						"179.7% / 224.45%",
						"194.23% / 242.61%",
						"208.77% / 260.76%",
						"224.62% / 280.57%",
						"240.48% / 300.37%",
						"256.34% / 320.18%",
						"272.19% / 339.98%",
						"288.05% / 359.79%",
						"303.9% / 379.59%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 3132,
			name: "夜巡影翼",
			desc: [
				"召唤奥兹。暗影与雷电构成的夜鸦降生尘世时，会在小范围内造成雷元素伤害。",
				"存在期间内，奥兹会持续发射雷之魔弹攻击附近的敌人。",
				"<h3>长按以调整技能生效位置。</h3>",
				"奥兹存在期间内再次点按可以将其召唤至身旁。",
				"<i>「本皇女的精力，可是很宝贵的，不值得浪费在你们这种人身上…奥兹，请你替我降下那撕开永夜的断罪之雷吧。」</i>",
				"<i>——《菲谢尔皇女夜谭·卷四·「永别世界夫人」》</i>"
			],
			tables: [
				{
					name: "奥兹攻击伤害",
					isSame: false,
					values: [
						"88.8%",
						"95.46%",
						"102.12%",
						"111%",
						"117.66%",
						"124.32%",
						"133.2%",
						"142.08%",
						"150.96%",
						"159.84%",
						"168.72%",
						"177.6%",
						"188.7%",
						"199.8%",
						"210.9%"
					]
				},
				{
					name: "召唤伤害",
					isSame: false,
					values: [
						"115.44%",
						"124.1%",
						"132.76%",
						"144.3%",
						"152.96%",
						"161.62%",
						"173.16%",
						"184.7%",
						"196.25%",
						"207.79%",
						"219.34%",
						"230.88%",
						"245.31%",
						"259.74%",
						"274.17%"
					]
				},
				{
					name: "奥兹存在时间",
					isSame: true,
					values: [
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒",
						"25秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 3139,
			name: "至夜幻现",
			desc: [
				"呼唤奥兹，张开纯粹的夜色编织成的双翼，守护菲谢尔。",
				"持续期间，具有如下效果：",
				"·以奥兹的形态进行高速移动；",
				"·对附近的敌人降下落雷，造成雷元素伤害。每个敌人只能受到一次落雷伤害；",
				"·效果结束时，奥兹将会停留在战场上，攻击皇女的敌人。若奥兹已经在场，则重置奥兹的存在时间。",
				"<i>…追随着受诅咒的断罪之血而来的群兽当中，只有那见证过一千世界寂灭的夜鸦亲王，能明白她的崇高。于是它张开至夜织成的双翼荫蔽高贵的皇女，并发誓永远守护她。</i>",
				"<i>——《菲谢尔皇女夜谭·卷一·「末日解体概要」》</i>"
			],
			tables: [
				{
					name: "落雷伤害",
					isSame: false,
					values: [
						"208%",
						"223.6%",
						"239.2%",
						"260%",
						"275.6%",
						"291.2%",
						"312%",
						"332.8%",
						"353.6%",
						"374.4%",
						"395.2%",
						"416%",
						"442%",
						"468%",
						"494%"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				44.12,
				47.71,
				51.3,
				56.43,
				60.02,
				64.13,
				69.77,
				75.41,
				81.05,
				87.21,
				93.37,
				99.52,
				105.68,
				111.83,
				117.99
			],
			"二段伤害": [
				46.78,
				50.59,
				54.4,
				59.84,
				63.65,
				68,
				73.98,
				79.97,
				85.95,
				92.48,
				99.01,
				105.54,
				112.06,
				118.59,
				125.12
			],
			"三段伤害": [
				58.14,
				62.87,
				67.6,
				74.36,
				79.09,
				84.5,
				91.94,
				99.37,
				106.81,
				114.92,
				123.03,
				131.14,
				139.26,
				147.37,
				155.48
			],
			"四段伤害": [
				57.71,
				62.4,
				67.1,
				73.81,
				78.51,
				83.88,
				91.26,
				98.64,
				106.02,
				114.07,
				122.12,
				130.17,
				138.23,
				146.28,
				154.33
			],
			"五段伤害": [
				72.07,
				77.93,
				83.8,
				92.18,
				98.05,
				104.75,
				113.97,
				123.19,
				132.4,
				142.46,
				152.52,
				162.57,
				172.63,
				182.68,
				192.74
			],
			"瞄准射击": [
				43.86,
				47.43,
				51,
				56.1,
				59.67,
				63.75,
				69.36,
				74.97,
				80.58,
				86.7,
				92.82,
				98.94,
				105.06,
				111.18,
				117.3
			],
			"满蓄力瞄准射击": [
				124,
				133.3,
				142.6,
				155,
				164.3,
				173.6,
				186,
				198.4,
				210.8,
				223.2,
				235.6,
				248,
				263.5,
				279,
				294.5
			],
			"下坠期间伤害": [
				56.83,
				61.45,
				66.08,
				72.69,
				77.31,
				82.6,
				89.87,
				97.14,
				104.41,
				112.34,
				120.27,
				128.2,
				136.12,
				144.05,
				151.98
			],
			"低空/高空坠地冲击伤害": [
				[113.63, 141.93],
				[122.88, 153.49],
				[132.13, 165.04],
				[145.35, 181.54],
				[154.59, 193.1],
				[165.16, 206.3],
				[179.7, 224.45],
				[194.23, 242.61],
				[208.77, 260.76],
				[224.62, 280.57],
				[240.48, 300.37],
				[256.34, 320.18],
				[272.19, 339.98],
				[288.05, 359.79],
				[303.9, 379.59]
			],
			"低空/高空坠地冲击伤害2": [
				[113.63, 141.93],
				[122.88, 153.49],
				[132.13, 165.04],
				[145.35, 181.54],
				[154.59, 193.1],
				[165.16, 206.3],
				[179.7, 224.45],
				[194.23, 242.61],
				[208.77, 260.76],
				[224.62, 280.57],
				[240.48, 300.37],
				[256.34, 320.18],
				[272.19, 339.98],
				[288.05, 359.79],
				[303.9, 379.59]
			]
		},
		[GsTalentType.e]: {
			"奥兹攻击伤害": [
				88.8,
				95.46,
				102.12,
				111,
				117.66,
				124.32,
				133.2,
				142.08,
				150.96,
				159.84,
				168.72,
				177.6,
				188.7,
				199.8,
				210.9
			],
			"召唤伤害": [
				115.44,
				124.1,
				132.76,
				144.3,
				152.96,
				161.62,
				173.16,
				184.7,
				196.25,
				207.79,
				219.34,
				230.88,
				245.31,
				259.74,
				274.17
			]
		},
		[GsTalentType.q]: {
			"落雷伤害": [
				208,
				223.6,
				239.2,
				260,
				275.6,
				291.2,
				312,
				332.8,
				353.6,
				374.4,
				395.2,
				416,
				442,
				468,
				494
			]
		}
	},
	cons: new Map([
		[1, {
			name: "幽邃鸦眼",
			desc: [
				"奥兹不在战场上时，也会透过鸦眼守望菲谢尔。在菲谢尔对敌人进行普通攻击时，奥兹会通过鸦眼协同攻击，造成22%攻击力的伤害。"
			]
		}],
		[2, {
			name: "圣裁影羽",
			desc: [
				"施放夜巡影翼时，能额外造成200%攻击力的伤害，并使影响范围扩大50%。"
			]
		}],
		[3, {
			name: "渊色黑翼",
			desc: [
				"夜巡影翼的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "皇女幻绮谭",
			desc: [
				"施放至夜幻现时，会对周围的敌人造成222%攻击力的雷元素伤害；",
				"技能效果结束时，会为菲谢尔恢复20%生命值。"
			]
		}],
		[5, {
			name: "至夜默示录",
			desc: [
				"至夜幻现的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "永夜之禽",
			desc: [
				"奥兹的存在时间延长2秒。此外，奥兹会协同当前场上自己的角色一起攻击，造成菲谢尔30%攻击力的雷元素伤害。"
			]
		}]
	]),
	passive: [
		{
			name: "吾之后花园",
			desc: [
				"在蒙德执行探索派遣任务时，消耗的时间缩短25%。"
			],
		},
		{
			name: "噬星魔鸦",
			desc: [
				"菲谢尔以蓄力完成的瞄准射击命中奥兹时，奥兹会对附近敌人降下圣裁之雷，造成等同射击伤害152.7%的雷元素范围伤害。"
			],
		},
		{
			name: "断罪雷影",
			desc: [
				"奥兹在场时，若当前场上自己的角色攻击敌人时触发了雷元素相关反应，则会对敌人降下圣裁之雷，造成菲谢尔80%攻击力的雷元素伤害。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.atk + "Pct"
		],
		details: new Map([
			["1", [770, 20.48, 49.79, 0]],
			["20", [1979, 52.61, 127.9, 0]],
			["40", [3827, 101.72, 247.29, 0]],
			["50", [4872, 129.51, 314.84, 6]],
			["60", [6054, 160.92, 391.2, 12]],
			["70", [7099, 188.68, 458.7, 12]],
			["80", [8144, 216.47, 526.24, 18]],
			["90", [9189, 244.26, 593.79, 24]],
			["20+", [2555, 67.91, 165.09, 0]],
			["40+", [4236, 112.59, 273.71, 6]],
			["50+", [5418, 144, 350.07, 12]],
			["60+", [6463, 171.79, 417.62, 12]],
			["70+", [7508, 199.55, 485.12, 18]],
			["80+", [8553, 227.34, 552.67, 24]]
		])
	},
};