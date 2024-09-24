import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 九条裟罗 */
export const metaData = {
	info: {
		title: "黑羽鸣镝",
		allegiance: "天领奉行",
		birth: "7-14",
		astro: "羽团扇座",
		desc: "「天领奉行」的大将，杀伐果断，骁勇善战。",
		cncv: "杨梦露",
		jpcv: "濑户麻沙美",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 9570,
		[AttrKeys.atk]: 195.41,
		[AttrKeys.def]: 627.92
	},
	growAttr: {
		key: AttrKeys.atk + "Pct",
		value: 24
	},
	materials: {
		[MaterialType.gem]: "最胜紫晶",
		[MaterialType.boss]: "雷霆数珠",
		[MaterialType.specialty]: "血斛",
		[MaterialType.normal]: "不祥的面具",
		[MaterialType.talent]: "「风雅」的哲学",
		[MaterialType.weekly]: "灰烬之心"
	},
	talent: {
		[GsTalentType.a]: {
			id: 5631,
			name: "普通攻击·天狗传弓术",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续弓箭射击。",
				"<h3>重击</h3>",
				"进行伤害更高、更为精准的瞄准射击。",
				"瞄准时，雷霆的力量会汇聚到她的箭矢上。聚满了雷霆之力的箭矢在命中敌人时造成雷元素伤害。",
				"处于「乌羽护持」状态下时，蓄力完成的箭矢会在命中时留下「乌羽」。",
				"<h3>下落攻击</h3>",
				"从空中射出箭雨，并迅速下坠冲击地面，在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"36.89%",
						"39.9%",
						"42.9%",
						"47.19%",
						"50.19%",
						"53.62%",
						"58.34%",
						"63.06%",
						"67.78%",
						"72.93%",
						"78.08%",
						"83.23%",
						"88.37%",
						"93.52%",
						"98.67%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"38.7%",
						"41.85%",
						"45%",
						"49.5%",
						"52.65%",
						"56.25%",
						"61.2%",
						"66.15%",
						"71.1%",
						"76.5%",
						"81.9%",
						"87.3%",
						"92.7%",
						"98.1%",
						"103.5%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"48.5%",
						"52.45%",
						"56.4%",
						"62.04%",
						"65.99%",
						"70.5%",
						"76.7%",
						"82.91%",
						"89.11%",
						"95.88%",
						"102.65%",
						"109.42%",
						"116.18%",
						"122.95%",
						"129.72%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"50.4%",
						"54.5%",
						"58.6%",
						"64.46%",
						"68.56%",
						"73.25%",
						"79.7%",
						"86.14%",
						"92.59%",
						"99.62%",
						"106.65%",
						"113.68%",
						"120.72%",
						"127.75%",
						"134.78%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"58.05%",
						"62.77%",
						"67.5%",
						"74.25%",
						"78.97%",
						"84.38%",
						"91.8%",
						"99.23%",
						"106.65%",
						"114.75%",
						"122.85%",
						"130.95%",
						"139.05%",
						"147.15%",
						"155.25%"
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
			id: 5632,
			name: "鸦羽天狗霆雷召咒",
			desc: [
				"以天狗之神速向后转移，并唤来乌羽的加护。",
				"获得持续18秒的「乌羽护持」，当九条裟罗发射完成蓄力的箭矢时，会消耗「乌羽护持」，并在命中的位置留下「乌羽」。",
				"「乌羽」会在短时间后引发天狗咒雷·伏，对范围内敌人造成雷元素伤害，并使其范围内的当前场上角色基于九条裟罗的基础攻击力，以一定比例获得攻击力加成。",
				"各种天狗咒雷提供的攻击力提升不能叠加，效果与持续时间由后生效的为准。",
				"<i>天狗一族不乏获取雷元素神之眼的异士。只不过他们操作雷元素时，仍会习惯性诵咒，礼赞雷神。咒曰：</i>",
				"<i>「礼赞鸣神大权现，善信某甲，请祈黄雷。娑婆诃！」</i>"
			],
			tables: [
				{
					name: "天狗咒雷·伏 伤害",
					isSame: false,
					values: [
						"125.76%",
						"135.19%",
						"144.62%",
						"157.2%",
						"166.63%",
						"176.06%",
						"188.64%",
						"201.22%",
						"213.79%",
						"226.37%",
						"238.94%",
						"251.52%",
						"267.24%",
						"282.96%",
						"298.68%"
					]
				},
				{
					name: "攻击力加成比例",
					isSame: false,
					values: [
						"42.96%",
						"46.18%",
						"49.4%",
						"53.7%",
						"56.92%",
						"60.14%",
						"64.44%",
						"68.74%",
						"73.03%",
						"77.33%",
						"81.62%",
						"85.92%",
						"91.29%",
						"96.66%",
						"102.03%"
					]
				},
				{
					name: "攻击力加成持续时间",
					isSame: true,
					values: [
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒"
					]
				},
				{
					name: "冷却时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 5639,
			name: "煌煌千道镇式",
			desc: [
				"在目标的位置降下天狗咒雷·金刚坏，造成雷元素范围伤害。此后，天狗咒雷·金刚坏将扩散转为4道连续的天狗咒雷·雷砾，造成雷元素范围伤害。",
				"天狗咒雷·金刚坏与天狗咒雷·雷砾会使其范围内的当前场上角色获得与元素战技「鸦羽天狗霆雷召咒」相同的攻击力加成。",
				"各种天狗咒雷提供的攻击力提升不能叠加，效果与持续时间由后生效的为准。",
				"<i>裟罗背离天狗之众，又短暂对天领奉行失去了信仰。在打破迷惘之后，这是她重新所找到的，属于自己的雷光。</i>"
			],
			tables: [
				{
					name: "天狗咒雷·金刚坏 伤害",
					isSame: false,
					values: [
						"409.6%",
						"440.32%",
						"471.04%",
						"512%",
						"542.72%",
						"573.44%",
						"614.4%",
						"655.36%",
						"696.32%",
						"737.28%",
						"778.24%",
						"819.2%",
						"870.4%",
						"921.6%",
						"972.8%"
					]
				},
				{
					name: "天狗咒雷·雷砾 伤害",
					isSame: false,
					values: [
						"34.12%",
						"36.68%",
						"39.24%",
						"42.65%",
						"45.21%",
						"47.77%",
						"51.18%",
						"54.59%",
						"58%",
						"61.42%",
						"64.83%",
						"68.24%",
						"72.5%",
						"76.77%",
						"81.04%"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				36.89,
				39.9,
				42.9,
				47.19,
				50.19,
				53.62,
				58.34,
				63.06,
				67.78,
				72.93,
				78.08,
				83.23,
				88.37,
				93.52,
				98.67
			],
			"二段伤害": [
				38.7,
				41.85,
				45,
				49.5,
				52.65,
				56.25,
				61.2,
				66.15,
				71.1,
				76.5,
				81.9,
				87.3,
				92.7,
				98.1,
				103.5
			],
			"三段伤害": [
				48.5,
				52.45,
				56.4,
				62.04,
				65.99,
				70.5,
				76.7,
				82.91,
				89.11,
				95.88,
				102.65,
				109.42,
				116.18,
				122.95,
				129.72
			],
			"四段伤害": [
				50.4,
				54.5,
				58.6,
				64.46,
				68.56,
				73.25,
				79.7,
				86.14,
				92.59,
				99.62,
				106.65,
				113.68,
				120.72,
				127.75,
				134.78
			],
			"五段伤害": [
				58.05,
				62.77,
				67.5,
				74.25,
				78.97,
				84.38,
				91.8,
				99.23,
				106.65,
				114.75,
				122.85,
				130.95,
				139.05,
				147.15,
				155.25
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
			"天狗咒雷·伏 伤害": [
				125.76,
				135.19,
				144.62,
				157.2,
				166.63,
				176.06,
				188.64,
				201.22,
				213.79,
				226.37,
				238.94,
				251.52,
				267.24,
				282.96,
				298.68
			],
			"攻击力加成比例": [
				42.96,
				46.18,
				49.4,
				53.7,
				56.92,
				60.14,
				64.44,
				68.74,
				73.03,
				77.33,
				81.62,
				85.92,
				91.29,
				96.66,
				102.03
			]
		},
		[GsTalentType.q]: {
			"天狗咒雷·金刚坏 伤害": [
				409.6,
				440.32,
				471.04,
				512,
				542.72,
				573.44,
				614.4,
				655.36,
				696.32,
				737.28,
				778.24,
				819.2,
				870.4,
				921.6,
				972.8
			],
			"天狗咒雷·雷砾 伤害": [
				34.12,
				36.68,
				39.24,
				42.65,
				45.21,
				47.77,
				51.18,
				54.59,
				58,
				61.42,
				64.83,
				68.24,
				72.5,
				76.77,
				81.04
			]
		}
	},
	cons: new Map([
		[1, {
			name: "乌眼",
			desc: [
				"天狗咒雷为角色施加攻击力提升效果或命中敌人后，鸦羽天狗霆雷召咒的冷却时间减少1秒。",
				"该效果每3秒至多触发一次。"
			]
		}],
		[2, {
			name: "鸦羽",
			desc: [
				"施放鸦羽天狗霆雷召咒时，会在九条裟罗原本的位置留下能引发一次较弱的天狗咒雷·伏的「乌羽」，造成原本30%的伤害。"
			]
		}],
		[3, {
			name: "心魔",
			desc: [
				"煌煌千道镇式的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "彻证",
			desc: [
				"煌煌千道镇式释放的天狗咒雷·雷砾增加至6道。"
			]
		}],
		[5, {
			name: "咒咏",
			desc: [
				"鸦羽天狗霆雷召咒的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "我界",
			desc: [
				"处于天狗咒雷带来的攻击力提升效果状态下的角色，其雷元素伤害的暴击伤害提高60%。"
			]
		}]
	]),
	passive: [
		{
			name: "检地",
			desc: [
				"在稻妻执行探索派遣任务时，消耗的时间缩短25%。"
			],
		},
		{
			name: "不动心",
			desc: [
				"处于鸦羽天狗霆雷召咒的「乌羽护持」状态下时，瞄准射击的所需的蓄力时间减少60%。"
			],
		},
		{
			name: "御公仪",
			desc: [
				"天狗咒雷·伏命中敌人后，将基于九条裟罗的元素充能效率，每100%为队伍中所有角色恢复1.2点元素能量。该效果每3秒至多触发一次。"
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
			["1", [802, 16.38, 52.65, 0]],
			["20", [2061, 42.09, 135.25, 0]],
			["40", [3985, 81.38, 261.5, 0]],
			["50", [5074, 103.61, 332.93, 6]],
			["60", [6305, 128.73, 413.68, 12]],
			["70", [7393, 150.95, 485.06, 12]],
			["80", [8481, 173.18, 556.49, 18]],
			["90", [9570, 195.41, 627.92, 24]],
			["20+", [2661, 54.33, 174.58, 0]],
			["40+", [4411, 90.07, 289.45, 6]],
			["50+", [5642, 115.2, 370.19, 12]],
			["60+", [6731, 137.43, 441.62, 12]],
			["70+", [7819, 159.64, 513, 18]],
			["80+", [8907, 181.87, 584.43, 24]]
		])
	},
};