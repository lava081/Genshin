import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 魈 */
export const meta: CharDetailInfo  = {
    info: {
		title: "护法夜叉",
		allegiance: "璃月仙人",
		birth: "4-17",
		astro: "金翅鹏王座",
		desc: "守护璃月的仙人，「夜叉」。美号「降魔大圣」，妙称「护法夜叉大将」。",
		cncv: "kinsen",
		jpcv: "松冈祯丞",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 12736,
		[AttrKeys.atk]: 349.2,
		[AttrKeys.def]: 799.3
	},
	growAttr:{
		key: AttrKeys.cpct,
		value: 19.2
	},
	materials:{
		[MaterialType.gem]: "自在松石",
		[MaterialType.boss]: "未熟之玉",
		[MaterialType.specialty]: "清心",
		[MaterialType.normal]: "史莱姆原浆",
		[MaterialType.talent]: "「繁荣」的哲学",
		[MaterialType.weekly]: "武炼之魂·孤影"
	},
	talent:{
		[GsTalentType.a]: {
			id: 2631,
			name: "普通攻击·卷积微尘",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多六段的连续枪击。",
				"<h3>重击</h3>",
				"消耗一定体力，进行上挑攻击。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。",
				"魈进行下落攻击时，不会承受坠落伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"27.54% + 27.54%",
						"29.42% + 29.42%",
						"31.3% + 31.3%",
						"33.8% + 33.8%",
						"35.68% + 35.68%",
						"37.87% + 37.87%",
						"40.69% + 40.69%",
						"43.51% + 43.51%",
						"46.32% + 46.32%",
						"49.14% + 49.14%",
						"51.96% + 51.96%",
						"54.77% + 54.77%",
						"57.59% + 57.59%",
						"60.41% + 60.41%",
						"63.23% + 63.23%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"56.94%",
						"60.82%",
						"64.7%",
						"69.88%",
						"73.76%",
						"78.29%",
						"84.11%",
						"89.93%",
						"95.76%",
						"101.58%",
						"107.4%",
						"113.22%",
						"119.05%",
						"124.87%",
						"130.69%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"68.55%",
						"73.23%",
						"77.9%",
						"84.13%",
						"88.81%",
						"94.26%",
						"101.27%",
						"108.28%",
						"115.29%",
						"122.3%",
						"129.31%",
						"136.33%",
						"143.34%",
						"150.35%",
						"157.36%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"37.66% + 37.66%",
						"40.23% + 40.23%",
						"42.8% + 42.8%",
						"46.22% + 46.22%",
						"48.79% + 48.79%",
						"51.79% + 51.79%",
						"55.64% + 55.64%",
						"59.49% + 59.49%",
						"63.34% + 63.34%",
						"67.2% + 67.2%",
						"71.05% + 71.05%",
						"74.9% + 74.9%",
						"78.75% + 78.75%",
						"82.6% + 82.6%",
						"86.46% + 86.46%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"71.54%",
						"76.42%",
						"81.3%",
						"87.8%",
						"92.68%",
						"98.37%",
						"105.69%",
						"113.01%",
						"120.32%",
						"127.64%",
						"134.96%",
						"142.27%",
						"149.59%",
						"156.91%",
						"164.23%"
					]
				},
				{
					name: "六段伤害",
					isSame: false,
					values: [
						"95.83%",
						"102.37%",
						"108.9%",
						"117.61%",
						"124.15%",
						"131.77%",
						"141.57%",
						"151.37%",
						"161.17%",
						"170.97%",
						"180.77%",
						"190.58%",
						"200.38%",
						"210.18%",
						"219.98%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"121.09%",
						"129.34%",
						"137.6%",
						"148.61%",
						"156.86%",
						"166.5%",
						"178.88%",
						"191.26%",
						"203.65%",
						"216.03%",
						"228.42%",
						"240.8%",
						"253.18%",
						"265.57%",
						"277.95%"
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
						"81.83%",
						"88.49%",
						"95.16%",
						"104.67%",
						"111.33%",
						"118.94%",
						"129.41%",
						"139.88%",
						"150.35%",
						"161.76%",
						"173.18%",
						"184.6%",
						"196.02%",
						"207.44%",
						"218.86%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"163.63% / 204.39%",
						"176.95% / 221.02%",
						"190.27% / 237.66%",
						"209.3% / 261.42%",
						"222.62% / 278.06%",
						"237.84% / 297.07%",
						"258.77% / 323.21%",
						"279.7% / 349.36%",
						"300.63% / 375.5%",
						"323.46% / 404.02%",
						"346.29% / 432.54%",
						"369.12% / 461.06%",
						"391.96% / 489.57%",
						"414.79% / 518.09%",
						"437.62% / 546.61%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 2632,
			name: "风轮两立",
			desc: [
				"疾速突进，对路径上的敌人造成风元素伤害。",
				"可以在空中施放。",
				"初始拥有2次可使用次数。",
				"<i>在他乡的传说里，世界会被两大风轮碾碎。魈的枪术已臻化境，来回之间仿佛两座风轮同时撕裂敌人。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"252.8%",
						"271.76%",
						"290.72%",
						"316%",
						"334.96%",
						"353.92%",
						"379.2%",
						"404.48%",
						"429.76%",
						"455.04%",
						"480.32%",
						"505.6%",
						"537.2%",
						"568.8%",
						"600.4%"
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
			id: 2639,
			name: "靖妖傩舞",
			desc: [
				"展现数千年前令神魔精妖睹之胆颤的夜叉傩面。",
				"<h3>夜叉傩面</h3>",
				"·大幅提升魈的跳跃能力；",
				"·提高攻击范围与攻击伤害；",
				"·将攻击伤害转为风元素伤害，该元素转化无法被附魔覆盖。",
				"在这个状态下，魈会持续损失生命值。",
				"效果将在魈退场时解除。",
				"<i>戴上降魔的傩面，现出令诸恶胆寒，除尽妖魔奸邪的「护法夜叉」之姿。获得强大的力量，也会引导出巨大的痛苦。其式既名「靖妖傩舞」。</i>"
			],
			tables: [
				{
					name: "普通攻击/重击/下落攻击伤害提升",
					isSame: false,
					values: [
						"58.45%",
						"61.95%",
						"65.45%",
						"70%",
						"73.5%",
						"77%",
						"81.55%",
						"86.1%",
						"90.65%",
						"95.2%",
						"99.75%",
						"104.3%",
						"108.85%",
						"113.4%",
						"117.95%"
					]
				},
				{
					name: "生命流失",
					unit: "当前生命值",
					isSame: false,
					values: [
						"每秒3%",
						"每秒3%",
						"每秒3%",
						"每秒2.5%",
						"每秒2.5%",
						"每秒2.5%",
						"每秒2%",
						"每秒2%",
						"每秒2%",
						"每秒2%",
						"每秒2%",
						"每秒2%",
						"每秒2%",
						"每秒2%",
						"每秒2%"
					]
				},
				{
					name: "持续时间",
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
					name: "冷却时间",
					isSame: true,
					values: [
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: new Map([
			["一段伤害", [
				55.08,
				58.84,
				62.6,
				67.6,
				71.36,
				75.74,
				81.38,
				87.02,
				92.64,
				98.28,
				103.92,
				109.54,
				115.18,
				120.82,
				126.46
			]],
			["一段伤害2", [
				[27.54, 27.54],
				[29.42, 29.42],
				[31.3, 31.3],
				[33.8, 33.8],
				[35.68, 35.68],
				[37.87, 37.87],
				[40.69, 40.69],
				[43.51, 43.51],
				[46.32, 46.32],
				[49.14, 49.14],
				[51.96, 51.96],
				[54.77, 54.77],
				[57.59, 57.59],
				[60.41, 60.41],
				[63.23, 63.23]
			]],
			["二段伤害", [
				56.94,
				60.82,
				64.7,
				69.88,
				73.76,
				78.29,
				84.11,
				89.93,
				95.76,
				101.58,
				107.4,
				113.22,
				119.05,
				124.87,
				130.69
			]],
			["三段伤害", [
				68.55,
				73.23,
				77.9,
				84.13,
				88.81,
				94.26,
				101.27,
				108.28,
				115.29,
				122.3,
				129.31,
				136.33,
				143.34,
				150.35,
				157.36
			]],
			["四段伤害", [
				75.32,
				80.46,
				85.6,
				92.44,
				97.58,
				103.58,
				111.28,
				118.98,
				126.68,
				134.4,
				142.1,
				149.8,
				157.5,
				165.2,
				172.92
			]],
			["四段伤害2", [
				[37.66, 37.66],
				[40.23, 40.23],
				[42.8, 42.8],
				[46.22, 46.22],
				[48.79, 48.79],
				[51.79, 51.79],
				[55.64, 55.64],
				[59.49, 59.49],
				[63.34, 63.34],
				[67.2, 67.2],
				[71.05, 71.05],
				[74.9, 74.9],
				[78.75, 78.75],
				[82.6, 82.6],
				[86.46, 86.46]
			]],
			["五段伤害", [
				71.54,
				76.42,
				81.3,
				87.8,
				92.68,
				98.37,
				105.69,
				113.01,
				120.32,
				127.64,
				134.96,
				142.27,
				149.59,
				156.91,
				164.23
			]],
			["六段伤害", [
				95.83,
				102.37,
				108.9,
				117.61,
				124.15,
				131.77,
				141.57,
				151.37,
				161.17,
				170.97,
				180.77,
				190.58,
				200.38,
				210.18,
				219.98
			]],
			["重击伤害", [
				121.09,
				129.34,
				137.6,
				148.61,
				156.86,
				166.5,
				178.88,
				191.26,
				203.65,
				216.03,
				228.42,
				240.8,
				253.18,
				265.57,
				277.95
			]],
			["下坠期间伤害", [
				81.83,
				88.49,
				95.16,
				104.67,
				111.33,
				118.94,
				129.41,
				139.88,
				150.35,
				161.76,
				173.18,
				184.6,
				196.02,
				207.44,
				218.86
			]],
			["低空/高空坠地冲击伤害", [
				[163.63, 204.39],
				[176.95, 221.02],
				[190.27, 237.66],
				[209.3, 261.42],
				[222.62, 278.06],
				[237.84, 297.07],
				[258.77, 323.21],
				[279.7, 349.36],
				[300.63, 375.5],
				[323.46, 404.02],
				[346.29, 432.54],
				[369.12, 461.06],
				[391.96, 489.57],
				[414.79, 518.09],
				[437.62, 546.61]
			]],
			["低空/高空坠地冲击伤害2", [
				[163.63, 204.39],
				[176.95, 221.02],
				[190.27, 237.66],
				[209.3, 261.42],
				[222.62, 278.06],
				[237.84, 297.07],
				[258.77, 323.21],
				[279.7, 349.36],
				[300.63, 375.5],
				[323.46, 404.02],
				[346.29, 432.54],
				[369.12, 461.06],
				[391.96, 489.57],
				[414.79, 518.09],
				[437.62, 546.61]
			]]
		]),
		[GsTalentType.e]: new Map([
			["技能伤害", [
				252.8,
				271.76,
				290.72,
				316,
				334.96,
				353.92,
				379.2,
				404.48,
				429.76,
				455.04,
				480.32,
				505.6,
				537.2,
				568.8,
				600.4
			]]
		]),
		[GsTalentType.q]: new Map([
			["普通攻击/重击/下落攻击伤害提升", [
				58.45,
				61.95,
				65.45,
				70,
				73.5,
				77,
				81.55,
				86.1,
				90.65,
				95.2,
				99.75,
				104.3,
				108.85,
				113.4,
				117.95
			]],
			["生命流失", [
				3,
				3,
				3,
				2.5,
				2.5,
				2.5,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "坏劫·毁坏三界",
			desc: [
				"风轮两立的可使用次数增加1次。"
			]
		}],
		[2, {
			name: "空劫·虚空华开敷变",
			desc: [
				"处于队伍后台时，魈自己的元素充能效率提高25%。"
			]
		}],
		[3, {
			name: "降魔·忿怒显相",
			desc: [
				"风轮两立的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "神通·诸苦灭尽",
			desc: [
				"魈的生命值低于50%时，获得100%防御力提升。"
			]
		}],
		[5, {
			name: "成劫·无明增长",
			desc: [
				"靖妖傩舞的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "降魔·护法夜叉",
			desc: [
				"在靖妖傩舞状态下，下落攻击命中至少2个敌人时，风轮两立立刻获得1次可使用次数，并且在接下来1秒内，可以无视冷却时间施放风轮两立。"
			]
		}]
	]),
	passive: [
		{
			name: "神通·空中自在法",
			desc: [
				"队伍中自己的角色攀爬消耗的体力降低20%。",
				"无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "降魔·平妖大圣",
			desc: [
				"在靖妖傩舞状态下，魈造成的所有伤害提高5%。此后，在技能持续时间内，每经过3秒，造成的伤害再额外提高5%。",
				"至多获得25%伤害加成。"
			],
		},
		{
			name: "坏劫·国土碾尘",
			desc: [
				"施放风轮两立会使之后7秒内的风轮两立造成的伤害提高15%。",
				"该效果持续7秒，最多叠加3次，叠加时刷新持续时间。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.cpct
		],
		details: new Map([
			["1", [991, 27.19, 62.22, 0]],
			["20", [2572, 70.52, 161.41, 0]],
			["40", [5120, 140.39, 321.35, 0]],
			["50", [6586, 180.58, 413.33, 4.8]],
			["60", [8262, 226.53, 518.5, 9.6]],
			["70", [9744, 267.17, 611.54, 9.6]],
			["80", [11236, 308.09, 705.2, 14.4]],
			["90", [12736, 349.2, 799.3, 19.2]],
			["20+", [3422, 93.83, 214.76, 0]],
			["40+", [5724, 156.95, 359.26, 4.8]],
			["50+", [7391, 202.66, 463.87, 9.6]],
			["60+", [8866, 243.09, 556.41, 9.6]],
			["70+", [10348, 283.73, 649.45, 14.4]],
			["80+", [11840, 324.65, 743.11, 19.2]]
		])
	},
};