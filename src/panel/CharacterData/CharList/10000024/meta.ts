import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 北斗 */
export const metaData = {
	info: {
		title: "无冕的龙王",
		allegiance: "南十字船队",
		birth: "2-14",
		astro: "南天海山座",
		desc: "武装船队「南十字」的首领，豪快的大姐头。",
		cncv: "唐雅菁",
		jpcv: "小清水亚美",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 13050,
		[AttrKeys.atk]: 225.14,
		[AttrKeys.def]: 648.4
	},
	growAttr: {
		key: AttrKeys.dmg,
		value: 24
	},
	materials: {
		[MaterialType.gem]: "最胜紫晶",
		[MaterialType.boss]: "雷光棱镜",
		[MaterialType.specialty]: "夜泊石",
		[MaterialType.normal]: "攫金鸦印",
		[MaterialType.talent]: "「黄金」的哲学",
		[MaterialType.weekly]: "东风的吐息"
	},
	talent: {
		[GsTalentType.a]: {
			id: 2431,
			name: "普通攻击·征涛",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续挥砍。",
				"<h3>重击</h3>",
				"持续消耗体力，快速进行连续的斩击。",
				"重击结束时，会进行一次格外有力的挥砍。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"71.12%",
						"76.91%",
						"82.7%",
						"90.97%",
						"96.76%",
						"103.38%",
						"112.47%",
						"121.57%",
						"130.67%",
						"140.59%",
						"151.96%",
						"165.33%",
						"178.71%",
						"192.08%",
						"206.67%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"70.86%",
						"76.63%",
						"82.4%",
						"90.64%",
						"96.41%",
						"103%",
						"112.06%",
						"121.13%",
						"130.19%",
						"140.08%",
						"151.41%",
						"164.73%",
						"178.06%",
						"191.38%",
						"205.92%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"88.32%",
						"95.51%",
						"102.7%",
						"112.97%",
						"120.16%",
						"128.38%",
						"139.67%",
						"150.97%",
						"162.27%",
						"174.59%",
						"188.71%",
						"205.32%",
						"221.92%",
						"238.53%",
						"256.65%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"86.52%",
						"93.56%",
						"100.6%",
						"110.66%",
						"117.7%",
						"125.75%",
						"136.82%",
						"147.88%",
						"158.95%",
						"171.02%",
						"184.85%",
						"201.12%",
						"217.39%",
						"233.65%",
						"251.4%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"112.14%",
						"121.27%",
						"130.4%",
						"143.44%",
						"152.57%",
						"163%",
						"177.34%",
						"191.69%",
						"206.03%",
						"221.68%",
						"239.61%",
						"260.7%",
						"281.78%",
						"302.87%",
						"325.87%"
					]
				},
				{
					name: "重击循环伤害",
					isSame: false,
					values: [
						"56.24%",
						"60.82%",
						"65.4%",
						"71.94%",
						"76.52%",
						"81.75%",
						"88.94%",
						"96.14%",
						"103.33%",
						"111.18%",
						"120.17%",
						"130.75%",
						"141.32%",
						"151.9%",
						"163.43%"
					]
				},
				{
					name: "重击终结伤害",
					isSame: false,
					values: [
						"101.82%",
						"110.11%",
						"118.4%",
						"130.24%",
						"138.53%",
						"148%",
						"161.02%",
						"174.05%",
						"187.07%",
						"201.28%",
						"217.56%",
						"236.71%",
						"255.85%",
						"275%",
						"295.88%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点"
					]
				},
				{
					name: "最大持续时间",
					isSame: true,
					values: [
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"74.59%",
						"80.66%",
						"86.73%",
						"95.4%",
						"101.47%",
						"108.41%",
						"117.95%",
						"127.49%",
						"137.03%",
						"147.44%",
						"157.85%",
						"168.26%",
						"178.66%",
						"189.07%",
						"199.48%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"149.14% / 186.29%",
						"161.28% / 201.45%",
						"173.42% / 216.62%",
						"190.77% / 238.28%",
						"202.91% / 253.44%",
						"216.78% / 270.77%",
						"235.86% / 294.6%",
						"254.93% / 318.42%",
						"274.01% / 342.25%",
						"294.82% / 368.25%",
						"315.63% / 394.24%",
						"336.44% / 420.23%",
						"357.25% / 446.23%",
						"378.06% / 472.22%",
						"398.87% / 498.21%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 2432,
			name: "捉浪",
			desc: [
				"没有什么好担心的。如果有人敢对她或她的人出手，那就以雷电与大剑十倍奉还。",
				"<h3>点按</h3>",
				"积聚雷之力，猛烈向前挥舞大剑，造成雷元素伤害。",
				"<h3>长按</h3>",
				"举起武器形成护盾，伤害吸收量受益于北斗的生命值上限。",
				"松开技能或持续时间结束时，会挥舞大剑释放积攒的力量进行攻击，造成雷元素伤害。依据技能期间受到攻击的次数，提高释放时造成的伤害。触发2次达到最高伤害加成。",
				"护盾具有如下效果：",
				"·对雷元素伤害有250%的吸收效果；",
				"·施放的瞬间，为北斗施加雷元素附着。",
				"<i>渺渺征船，追电捉浪。</i>"
			],
			tables: [
				{
					name: "护盾吸收量",
					isSame: false,
					values: [
						"14.4%HP + 1386.37",
						"15.48%HP + 1525.02",
						"16.56%HP + 1675.23",
						"18%HP + 1837",
						"19.08%HP + 2010.32",
						"20.16%HP + 2195.19",
						"21.6%HP + 2391.62",
						"23.04%HP + 2599.61",
						"24.48%HP + 2819.15",
						"25.92%HP + 3050.24",
						"27.36%HP + 3292.89",
						"28.8%HP + 3547.09",
						"30.6%HP + 3812.85",
						"32.4%HP + 4090.16",
						"34.2%HP + 4379.03"
					]
				},
				{
					name: "基础伤害",
					isSame: false,
					values: [
						"121.6%",
						"130.72%",
						"139.84%",
						"152%",
						"161.12%",
						"170.24%",
						"182.4%",
						"194.56%",
						"206.72%",
						"218.88%",
						"231.04%",
						"243.2%",
						"258.4%",
						"273.6%",
						"288.8%"
					]
				},
				{
					name: "受击时伤害提升",
					isSame: false,
					values: [
						"160%",
						"172%",
						"184%",
						"200%",
						"212%",
						"224%",
						"240%",
						"256%",
						"272%",
						"288%",
						"304%",
						"320%",
						"340%",
						"360%",
						"380%"
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
			id: 2439,
			name: "斫雷",
			desc: [
				"重忆斩灭海山巨兽之战，唤起巨兽与雷电的力量，创造环绕自身的雷兽之盾，并对周围的敌人造成雷元素伤害。",
				"<h3>雷兽之盾</h3>",
				"·普通攻击与重击命中时，释放雷电之力，引来1道能在敌人之间跃动的闪雷，造成雷元素伤害；",
				"·提高角色的抗打断能力，并降低受到的伤害。",
				"<h3>每秒至多触发1道闪雷。</h3>",
				"<i>赫赫雷来，斫灭海山。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"121.6%",
						"130.72%",
						"139.84%",
						"152%",
						"161.12%",
						"170.24%",
						"182.4%",
						"194.56%",
						"206.72%",
						"218.88%",
						"231.04%",
						"243.2%",
						"258.4%",
						"273.6%",
						"288.8%"
					]
				},
				{
					name: "闪雷伤害",
					isSame: false,
					values: [
						"96%",
						"103.2%",
						"110.4%",
						"120%",
						"127.2%",
						"134.4%",
						"144%",
						"153.6%",
						"163.2%",
						"172.8%",
						"182.4%",
						"192%",
						"204%",
						"216%",
						"228%"
					]
				},
				{
					name: "伤害减免",
					isSame: false,
					values: [
						"20%",
						"21%",
						"22%",
						"24%",
						"25%",
						"26%",
						"28%",
						"30%",
						"32%",
						"34%",
						"35%",
						"36%",
						"37%",
						"38%",
						"39%"
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
				71.12,
				76.91,
				82.7,
				90.97,
				96.76,
				103.38,
				112.47,
				121.57,
				130.67,
				140.59,
				151.96,
				165.33,
				178.71,
				192.08,
				206.67
			],
			"二段伤害": [
				70.86,
				76.63,
				82.4,
				90.64,
				96.41,
				103,
				112.06,
				121.13,
				130.19,
				140.08,
				151.41,
				164.73,
				178.06,
				191.38,
				205.92
			],
			"三段伤害": [
				88.32,
				95.51,
				102.7,
				112.97,
				120.16,
				128.38,
				139.67,
				150.97,
				162.27,
				174.59,
				188.71,
				205.32,
				221.92,
				238.53,
				256.65
			],
			"四段伤害": [
				86.52,
				93.56,
				100.6,
				110.66,
				117.7,
				125.75,
				136.82,
				147.88,
				158.95,
				171.02,
				184.85,
				201.12,
				217.39,
				233.65,
				251.4
			],
			"五段伤害": [
				112.14,
				121.27,
				130.4,
				143.44,
				152.57,
				163,
				177.34,
				191.69,
				206.03,
				221.68,
				239.61,
				260.7,
				281.78,
				302.87,
				325.87
			],
			"重击循环伤害": [
				56.24,
				60.82,
				65.4,
				71.94,
				76.52,
				81.75,
				88.94,
				96.14,
				103.33,
				111.18,
				120.17,
				130.75,
				141.32,
				151.9,
				163.43
			],
			"重击终结伤害": [
				101.82,
				110.11,
				118.4,
				130.24,
				138.53,
				148,
				161.02,
				174.05,
				187.07,
				201.28,
				217.56,
				236.71,
				255.85,
				275,
				295.88
			],
			"下坠期间伤害": [
				74.59,
				80.66,
				86.73,
				95.4,
				101.47,
				108.41,
				117.95,
				127.49,
				137.03,
				147.44,
				157.85,
				168.26,
				178.66,
				189.07,
				199.48
			],
			"低空/高空坠地冲击伤害": [
				[149.14, 186.29],
				[161.28, 201.45],
				[173.42, 216.62],
				[190.77, 238.28],
				[202.91, 253.44],
				[216.78, 270.77],
				[235.86, 294.6],
				[254.93, 318.42],
				[274.01, 342.25],
				[294.82, 368.25],
				[315.63, 394.24],
				[336.44, 420.23],
				[357.25, 446.23],
				[378.06, 472.22],
				[398.87, 498.21]
			],
			"低空/高空坠地冲击伤害2": [
				[149.14, 186.29],
				[161.28, 201.45],
				[173.42, 216.62],
				[190.77, 238.28],
				[202.91, 253.44],
				[216.78, 270.77],
				[235.86, 294.6],
				[254.93, 318.42],
				[274.01, 342.25],
				[294.82, 368.25],
				[315.63, 394.24],
				[336.44, 420.23],
				[357.25, 446.23],
				[378.06, 472.22],
				[398.87, 498.21]
			]
		},
		[GsTalentType.e]: {
			"护盾吸收量": [
				1400.77,
				1540.5,
				1691.79,
				1855,
				2029.3999999999999,
				2215.35,
				2413.22,
				2622.65,
				2843.63,
				3076.16,
				3320.25,
				3575.8900000000003,
				3843.45,
				4122.5599999999995,
				4413.23
			],
			"护盾吸收量2": [
				[14.4, 1386.37],
				[15.48, 1525.02],
				[16.56, 1675.23],
				[18, 1837],
				[19.08, 2010.32],
				[20.16, 2195.19],
				[21.6, 2391.62],
				[23.04, 2599.61],
				[24.48, 2819.15],
				[25.92, 3050.24],
				[27.36, 3292.89],
				[28.8, 3547.09],
				[30.6, 3812.85],
				[32.4, 4090.16],
				[34.2, 4379.03]
			],
			"基础伤害": [
				121.6,
				130.72,
				139.84,
				152,
				161.12,
				170.24,
				182.4,
				194.56,
				206.72,
				218.88,
				231.04,
				243.2,
				258.4,
				273.6,
				288.8
			],
			"受击时伤害提升": [
				160,
				172,
				184,
				200,
				212,
				224,
				240,
				256,
				272,
				288,
				304,
				320,
				340,
				360,
				380
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				121.6,
				130.72,
				139.84,
				152,
				161.12,
				170.24,
				182.4,
				194.56,
				206.72,
				218.88,
				231.04,
				243.2,
				258.4,
				273.6,
				288.8
			],
			"闪雷伤害": [
				96,
				103.2,
				110.4,
				120,
				127.2,
				134.4,
				144,
				153.6,
				163.2,
				172.8,
				182.4,
				192,
				204,
				216,
				228
			],
			"伤害减免": [
				20,
				21,
				22,
				24,
				25,
				26,
				28,
				30,
				32,
				34,
				35,
				36,
				37,
				38,
				39
			]
		}
	},
	cons: new Map([
		[1, {
			name: "鱼龙沉四方",
			desc: [
				"施放斫雷时：",
				"生成一个伤害吸收量等于生命值上限16%的护盾，持续15秒。",
				"该护盾对雷元素伤害有250%的吸收效果。"
			]
		}],
		[2, {
			name: "赫赫雷涌起",
			desc: [
				"斫雷的闪雷能额外弹跳2个敌人。"
			]
		}],
		[3, {
			name: "潮奔蓦引电",
			desc: [
				"捉浪的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "牵星觅乡岸",
			desc: [
				"受到攻击后的10秒内，北斗的普通攻击附带20%额外雷元素伤害。"
			]
		}],
		[5, {
			name: "踏浪霞连阶",
			desc: [
				"斫雷的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "北斗祓幽孽",
			desc: [
				"斫雷持续期间，周围敌人的雷元素抗性降低15%。"
			]
		}]
	]),
	passive: [
		{
			name: "拥涛踏潮",
			desc: [
				"队伍中自己的角色游泳消耗的体力降低20%。",
				"无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "遍宇灵光",
			desc: [
				"在被攻击瞬间施放的捉浪反击，拥有最高伤害加成。"
			],
		},
		{
			name: "霹雳连霄",
			desc: [
				"施放拥有最高伤害加成的捉浪后的10秒内，获得如下效果：",
				"·普通攻击与重击造成的伤害提高15%，攻击速度提高15%；",
				"·大幅减少重击需要的准备时间。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.dmg
		],
		details: new Map([
			["1", [1094, 18.88, 54.36, 0]],
			["20", [2811, 48.49, 139.66, 0]],
			["40", [5435, 93.76, 270.03, 0]],
			["50", [6919, 119.37, 343.79, 6]],
			["60", [8597, 148.32, 427.17, 12]],
			["70", [10081, 173.92, 500.87, 12]],
			["80", [11565, 199.53, 574.63, 18]],
			["90", [13050, 225.14, 648.4, 24]],
			["20+", [3628, 62.6, 180.27, 0]],
			["40+", [6015, 103.78, 298.88, 6]],
			["50+", [7694, 132.73, 382.26, 12]],
			["60+", [9178, 158.34, 456.02, 12]],
			["70+", [10662, 183.94, 529.73, 18]],
			["80+", [12146, 209.55, 603.49, 24]]
		])
	},
};