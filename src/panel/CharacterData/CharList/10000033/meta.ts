import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 达达利亚 */
export const metaData = {
	info: {
		title: "「公子」",
		allegiance: "愚人众",
		birth: "7-20",
		astro: "鲸天座",
		desc: "愚人众执行官第十一位，「公子」，其战绩威名远扬。",
		cncv: "鱼冻",
		jpcv: "木村良平",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 13103,
		[AttrKeys.atk]: 301.36,
		[AttrKeys.def]: 814.67
	},
	growAttr: {
		key: AttrKeys.dmg,
		value: 28.8
	},
	materials: {
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "净水之心",
		[MaterialType.specialty]: "星螺",
		[MaterialType.normal]: "尉官的徽记",
		[MaterialType.talent]: "「自由」的哲学",
		[MaterialType.weekly]: "魔王之刃·残片"
	},
	talent: {
		[GsTalentType.a]: {
			id: 3331,
			name: "普通攻击·断雨",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多六段的连续弓箭射击。",
				"<h3>重击</h3>",
				"进行伤害更高、更为精准的瞄准射击。",
				"瞄准时，水元素之力会在箭矢上持续积聚。聚满了激流的箭矢会在命中敌人时造成水元素伤害，并施加断流效果。",
				"<h3>断流</h3>",
				"处于断流影响下的敌人受到达达利亚的各种攻击时，将产生水元素范围伤害效果。这些效果造成的伤害视为普通攻击伤害。",
				"·断流·闪：满蓄力瞄准射击命中处于断流影响下的敌人时，会引发连续范围伤害。断流·闪每0.7秒至多触发一次。",
				"·断流·破：击败处于断流影响下的敌人时会引发水之绽放，对附近的敌人施加断流效果。",
				"<h3>下落攻击</h3>",
				"从空中射出箭雨，并迅速下坠冲击地面，在落地时造成范围伤害。",
				"处于魔王武装·狂澜的近战状态下时，无法施展下落攻击。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"41.28%",
						"44.64%",
						"48%",
						"52.8%",
						"56.16%",
						"60%",
						"65.28%",
						"70.56%",
						"75.84%",
						"81.6%",
						"87.36%",
						"93.12%",
						"98.88%",
						"104.64%",
						"110.4%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"46.27%",
						"50.03%",
						"53.8%",
						"59.18%",
						"62.95%",
						"67.25%",
						"73.17%",
						"79.09%",
						"85%",
						"91.46%",
						"97.92%",
						"104.37%",
						"110.83%",
						"117.28%",
						"123.74%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"55.38%",
						"59.89%",
						"64.4%",
						"70.84%",
						"75.35%",
						"80.5%",
						"87.58%",
						"94.67%",
						"101.75%",
						"109.48%",
						"117.21%",
						"124.94%",
						"132.66%",
						"140.39%",
						"148.12%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"57.02%",
						"61.66%",
						"66.3%",
						"72.93%",
						"77.57%",
						"82.88%",
						"90.17%",
						"97.46%",
						"104.75%",
						"112.71%",
						"120.67%",
						"128.62%",
						"136.58%",
						"144.53%",
						"152.49%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"60.89%",
						"65.84%",
						"70.8%",
						"77.88%",
						"82.84%",
						"88.5%",
						"96.29%",
						"104.08%",
						"111.86%",
						"120.36%",
						"128.86%",
						"137.35%",
						"145.85%",
						"154.34%",
						"162.84%"
					]
				},
				{
					name: "六段伤害",
					isSame: false,
					values: [
						"72.76%",
						"78.68%",
						"84.6%",
						"93.06%",
						"98.98%",
						"105.75%",
						"115.06%",
						"124.36%",
						"133.67%",
						"143.82%",
						"153.97%",
						"164.12%",
						"174.28%",
						"184.43%",
						"194.58%"
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
					name: "断流·闪 伤害",
					isSame: false,
					values: [
						"12.4%*3",
						"13.33%*3",
						"14.26%*3",
						"15.5%*3",
						"16.43%*3",
						"17.36%*3",
						"18.6%*3",
						"19.84%*3",
						"21.08%*3",
						"22.32%*3",
						"23.56%*3",
						"24.8%*3",
						"26.35%*3",
						"27.9%*3",
						"29.45%*3"
					]
				},
				{
					name: "断流·破 伤害",
					isSame: false,
					values: [
						"62%",
						"66.65%",
						"71.3%",
						"77.5%",
						"82.15%",
						"86.8%",
						"93%",
						"99.2%",
						"105.4%",
						"111.6%",
						"117.8%",
						"124%",
						"131.75%",
						"139.5%",
						"147.25%"
					]
				},
				{
					name: "断流持续时间",
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
			id: 3332,
			name: "魔王武装·狂澜",
			desc: [
				"解放纯水构成的武装，对周围的敌人造成水元素伤害，并进入近战状态。",
				"在此状态下，达达利亚的普通攻击与重击将转为无法被附魔覆盖的水元素伤害，并发生以下变化：",
				"<h3>普通攻击</h3>",
				"进行至多六段的连续水元素斩击。",
				"<h3>重击</h3>",
				"消耗体力，瞬间向前方挥出两剑，造成水元素伤害。",
				"<h3>断流·斩</h3>",
				"近战攻击命中处于断流影响下的敌人时，将引发一次断流·斩，造成水元素范围伤害。断流·斩造成的伤害视为元素战技伤害，每1.5秒至多触发一次。",
				"30秒后或再次施放时效果将会解除，回到远程状态，并使技能进入冷却。近战状态下持续的时间越长，冷却时间越长。",
				"若持续30秒后自动回到远程状态，技能将进入更长的冷却周期。",
				"<i>为了克服自己不擅使弓的弱点，他才选择弓作为自己的武器。但在真正的战斗中，不得不拿出真正的实力…</i>"
			],
			tables: [
				{
					name: "状态激发伤害",
					isSame: false,
					values: [
						"72%",
						"77.4%",
						"82.8%",
						"90%",
						"95.4%",
						"100.8%",
						"108%",
						"115.2%",
						"122.4%",
						"129.6%",
						"136.8%",
						"144%",
						"153%",
						"162%",
						"171%"
					]
				},
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"38.87%",
						"42.04%",
						"45.2%",
						"49.72%",
						"52.88%",
						"56.5%",
						"61.47%",
						"66.44%",
						"71.42%",
						"76.84%",
						"82.26%",
						"87.69%",
						"93.11%",
						"98.54%",
						"103.96%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"41.62%",
						"45.01%",
						"48.4%",
						"53.24%",
						"56.63%",
						"60.5%",
						"65.82%",
						"71.15%",
						"76.47%",
						"82.28%",
						"88.09%",
						"93.9%",
						"99.7%",
						"105.51%",
						"111.32%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"56.33%",
						"60.91%",
						"65.5%",
						"72.05%",
						"76.63%",
						"81.88%",
						"89.08%",
						"96.28%",
						"103.49%",
						"111.35%",
						"119.21%",
						"127.07%",
						"134.93%",
						"142.79%",
						"150.65%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"59.94%",
						"64.82%",
						"69.7%",
						"76.67%",
						"81.55%",
						"87.12%",
						"94.79%",
						"102.46%",
						"110.13%",
						"118.49%",
						"126.85%",
						"135.22%",
						"143.58%",
						"151.95%",
						"160.31%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"55.3%",
						"59.8%",
						"64.3%",
						"70.73%",
						"75.23%",
						"80.37%",
						"87.45%",
						"94.52%",
						"101.59%",
						"109.31%",
						"117.03%",
						"124.74%",
						"132.46%",
						"140.17%",
						"147.89%"
					]
				},
				{
					name: "六段伤害",
					isSame: false,
					values: [
						"35.43% + 37.67%",
						"38.32% + 40.73%",
						"41.2% + 43.8%",
						"45.32% + 48.18%",
						"48.2% + 51.25%",
						"51.5% + 54.75%",
						"56.03% + 59.57%",
						"60.56% + 64.39%",
						"65.1% + 69.2%",
						"70.04% + 74.46%",
						"74.98% + 79.72%",
						"79.93% + 84.97%",
						"84.87% + 90.23%",
						"89.82% + 95.48%",
						"94.76% + 100.74%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"60.2% + 71.98%",
						"65.1% + 77.84%",
						"70% + 83.7%",
						"77% + 92.07%",
						"81.9% + 97.93%",
						"87.5% + 104.62%",
						"95.2% + 113.83%",
						"102.9% + 123.04%",
						"110.6% + 132.25%",
						"119% + 142.29%",
						"127.4% + 152.33%",
						"135.8% + 162.38%",
						"144.2% + 172.42%",
						"152.6% + 182.47%",
						"161% + 192.51%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点"
					]
				},
				{
					name: "断流·斩 伤害",
					isSame: false,
					values: [
						"60.2%",
						"65.1%",
						"70%",
						"77%",
						"81.9%",
						"87.5%",
						"95.2%",
						"102.9%",
						"110.6%",
						"119%",
						"127.4%",
						"135.8%",
						"144.2%",
						"152.6%",
						"161%"
					]
				},
				{
					name: "最大持续时间",
					isSame: true,
					values: [
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒",
						"6到36秒"
					]
				},
				{
					name: "持续时间耗尽冷却时间",
					isSame: true,
					values: [
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒",
						"45秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 3339,
			name: "极恶技·尽灭闪",
			desc: [
				"依据达达利亚当前所处的状态，进行不同的攻击：",
				"<h3>远程状态·魔弹一闪</h3>",
				"向前方快速射出一发饱含水元素的魔箭，造成水元素范围伤害，并施加断流效果。",
				"施放后，返还部分元素能量。",
				"<h3>近战状态·尽灭水光</h3>",
				"进行一次大范围斩击，对附近所有敌人造成大量水元素伤害，并能引发断流·爆。",
				"<h3>断流·爆</h3>",
				"尽灭水光命中处于断流状态下的敌人时，会消耗断流效果并引发水爆，造成水元素范围伤害。断流·爆造成的伤害视为元素爆发伤害。",
				"<i>湍流的水，在他的雪国故土并不常见。或许能将流水握在手中，正是因为明白流水的珍贵吧。</i>"
			],
			tables: [
				{
					name: "技能伤害·近战",
					isSame: false,
					values: [
						"464%",
						"498.8%",
						"533.6%",
						"580%",
						"614.8%",
						"649.6%",
						"696%",
						"742.4%",
						"788.8%",
						"835.2%",
						"881.6%",
						"928%",
						"986%",
						"1044%",
						"1102%"
					]
				},
				{
					name: "技能伤害·远程",
					isSame: false,
					values: [
						"378.4%",
						"406.78%",
						"435.16%",
						"473%",
						"501.38%",
						"529.76%",
						"567.6%",
						"605.44%",
						"643.28%",
						"681.12%",
						"718.96%",
						"756.8%",
						"804.1%",
						"851.4%",
						"898.7%"
					]
				},
				{
					name: "断流·爆 伤害",
					isSame: false,
					values: [
						"120%",
						"129%",
						"138%",
						"150%",
						"159%",
						"168%",
						"180%",
						"192%",
						"204%",
						"216%",
						"228%",
						"240%",
						"255%",
						"270%",
						"285%"
					]
				},
				{
					name: "技能返还元素能量（远程）",
					isSame: true,
					values: [
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20",
						"20"
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
				41.28,
				44.64,
				48,
				52.8,
				56.16,
				60,
				65.28,
				70.56,
				75.84,
				81.6,
				87.36,
				93.12,
				98.88,
				104.64,
				110.4
			],
			"二段伤害": [
				46.27,
				50.03,
				53.8,
				59.18,
				62.95,
				67.25,
				73.17,
				79.09,
				85,
				91.46,
				97.92,
				104.37,
				110.83,
				117.28,
				123.74
			],
			"三段伤害": [
				55.38,
				59.89,
				64.4,
				70.84,
				75.35,
				80.5,
				87.58,
				94.67,
				101.75,
				109.48,
				117.21,
				124.94,
				132.66,
				140.39,
				148.12
			],
			"四段伤害": [
				57.02,
				61.66,
				66.3,
				72.93,
				77.57,
				82.88,
				90.17,
				97.46,
				104.75,
				112.71,
				120.67,
				128.62,
				136.58,
				144.53,
				152.49
			],
			"五段伤害": [
				60.89,
				65.84,
				70.8,
				77.88,
				82.84,
				88.5,
				96.29,
				104.08,
				111.86,
				120.36,
				128.86,
				137.35,
				145.85,
				154.34,
				162.84
			],
			"六段伤害": [
				72.76,
				78.68,
				84.6,
				93.06,
				98.98,
				105.75,
				115.06,
				124.36,
				133.67,
				143.82,
				153.97,
				164.12,
				174.28,
				184.43,
				194.58
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
			"断流·闪 伤害": [
				37.2,
				39.99,
				42.78,
				46.5,
				49.29,
				52.08,
				55.800000000000004,
				59.519999999999996,
				63.239999999999995,
				66.96000000000001,
				70.67999999999999,
				74.4,
				79.05000000000001,
				83.69999999999999,
				88.35
			],
			"断流·闪 伤害2": [
				[12.4, 3],
				[13.33, 3],
				[14.26, 3],
				[15.5, 3],
				[16.43, 3],
				[17.36, 3],
				[18.6, 3],
				[19.84, 3],
				[21.08, 3],
				[22.32, 3],
				[23.56, 3],
				[24.8, 3],
				[26.35, 3],
				[27.9, 3],
				[29.45, 3]
			],
			"断流·破 伤害": [
				62,
				66.65,
				71.3,
				77.5,
				82.15,
				86.8,
				93,
				99.2,
				105.4,
				111.6,
				117.8,
				124,
				131.75,
				139.5,
				147.25
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
			"状态激发伤害": [
				72,
				77.4,
				82.8,
				90,
				95.4,
				100.8,
				108,
				115.2,
				122.4,
				129.6,
				136.8,
				144,
				153,
				162,
				171
			],
			"一段伤害": [
				38.87,
				42.04,
				45.2,
				49.72,
				52.88,
				56.5,
				61.47,
				66.44,
				71.42,
				76.84,
				82.26,
				87.69,
				93.11,
				98.54,
				103.96
			],
			"二段伤害": [
				41.62,
				45.01,
				48.4,
				53.24,
				56.63,
				60.5,
				65.82,
				71.15,
				76.47,
				82.28,
				88.09,
				93.9,
				99.7,
				105.51,
				111.32
			],
			"三段伤害": [
				56.33,
				60.91,
				65.5,
				72.05,
				76.63,
				81.88,
				89.08,
				96.28,
				103.49,
				111.35,
				119.21,
				127.07,
				134.93,
				142.79,
				150.65
			],
			"四段伤害": [
				59.94,
				64.82,
				69.7,
				76.67,
				81.55,
				87.12,
				94.79,
				102.46,
				110.13,
				118.49,
				126.85,
				135.22,
				143.58,
				151.95,
				160.31
			],
			"五段伤害": [
				55.3,
				59.8,
				64.3,
				70.73,
				75.23,
				80.37,
				87.45,
				94.52,
				101.59,
				109.31,
				117.03,
				124.74,
				132.46,
				140.17,
				147.89
			],
			"六段伤害": [
				73.1,
				79.05,
				85,
				93.5,
				99.45,
				106.25,
				115.6,
				124.95,
				134.3,
				144.5,
				154.7,
				164.9,
				175.10000000000002,
				185.3,
				195.5
			],
			"六段伤害2": [
				[35.43, 37.67],
				[38.32, 40.73],
				[41.2, 43.8],
				[45.32, 48.18],
				[48.2, 51.25],
				[51.5, 54.75],
				[56.03, 59.57],
				[60.56, 64.39],
				[65.1, 69.2],
				[70.04, 74.46],
				[74.98, 79.72],
				[79.93, 84.97],
				[84.87, 90.23],
				[89.82, 95.48],
				[94.76, 100.74]
			],
			"重击伤害": [
				132.18,
				142.94,
				153.7,
				169.07,
				179.83,
				192.12,
				209.03,
				225.94,
				242.85,
				261.28999999999996,
				279.73,
				298.18,
				316.62,
				335.07,
				353.51
			],
			"重击伤害2": [
				[60.2, 71.98],
				[65.1, 77.84],
				[70, 83.7],
				[77, 92.07],
				[81.9, 97.93],
				[87.5, 104.62],
				[95.2, 113.83],
				[102.9, 123.04],
				[110.6, 132.25],
				[119, 142.29],
				[127.4, 152.33],
				[135.8, 162.38],
				[144.2, 172.42],
				[152.6, 182.47],
				[161, 192.51]
			],
			"断流·斩 伤害": [
				60.2,
				65.1,
				70,
				77,
				81.9,
				87.5,
				95.2,
				102.9,
				110.6,
				119,
				127.4,
				135.8,
				144.2,
				152.6,
				161
			]
		},
		[GsTalentType.q]: {
			"技能伤害·近战": [
				464,
				498.8,
				533.6,
				580,
				614.8,
				649.6,
				696,
				742.4,
				788.8,
				835.2,
				881.6,
				928,
				986,
				1044,
				1102
			],
			"技能伤害·远程": [
				378.4,
				406.78,
				435.16,
				473,
				501.38,
				529.76,
				567.6,
				605.44,
				643.28,
				681.12,
				718.96,
				756.8,
				804.1,
				851.4,
				898.7
			],
			"断流·爆 伤害": [
				120,
				129,
				138,
				150,
				159,
				168,
				180,
				192,
				204,
				216,
				228,
				240,
				255,
				270,
				285
			]
		}
	},
	cons: new Map([
		[1, {
			name: "魔王武装·遏浪",
			desc: [
				"魔王武装·狂澜的冷却时间降低20%。"
			]
		}],
		[2, {
			name: "魔王武装·暗流",
			desc: [
				"处于断流效果影响下的敌人被击败时，为达达利亚恢复4点元素能量。"
			]
		}],
		[3, {
			name: "深渊之灾·纷争涡源",
			desc: [
				"魔王武装·狂澜的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "深渊之灾·凝水盛放",
			desc: [
				"每4秒，场上存在达达利亚自身施加的断流效果时，若达达利亚当前处于魔王武装·狂澜的近战状态，则触发断流·斩；否则，触发断流·闪。",
				"通过此命之座触发的断流·斩与断流·闪不受这两种断流各自的触发间隔限制，也不会影响其触发间隔。"
			]
		}],
		[5, {
			name: "极恶技·斩水斩雨",
			desc: [
				"极恶技·尽灭闪的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "极恶技·天使灭尽",
			desc: [
				"在近战状态下施放极恶技·尽灭闪时，清除魔王武装·狂澜的冷却时间。",
				"该效果会在回到远程状态后触发。"
			]
		}]
	]),
	passive: [
		{
			name: "诸武精通",
			desc: [
				"队伍中自己的角色普通攻击等级提高1级。"
			],
		},
		{
			name: "永无谢幕",
			desc: [
				"<h3>断流效果的持续时间延长8秒。</h3>"
			],
		},
		{
			name: "水形剑",
			desc: [
				"处于魔王武装·狂澜的近战状态时，普通攻击与重击在造成暴击时，会为命中的敌人施加断流效果。"
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
			["1", [1020, 23.46, 63.42, 0]],
			["20", [2646, 60.86, 164.51, 0]],
			["40", [5268, 121.16, 327.53, 0]],
			["50", [6776, 155.84, 421.28, 7.2]],
			["60", [8500, 195.5, 528.47, 14.4]],
			["70", [10025, 230.57, 623.3, 14.4]],
			["80", [11561, 265.89, 718.76, 21.6]],
			["90", [13103, 301.36, 814.67, 28.8]],
			["20+", [3521, 80.97, 218.89, 0]],
			["40+", [5889, 135.45, 366.16, 7.2]],
			["50+", [7604, 174.9, 472.79, 14.4]],
			["60+", [9121, 209.79, 567.11, 14.4]],
			["70+", [10647, 244.87, 661.94, 21.6]],
			["80+", [12182, 280.18, 757.4, 28.8]]
		])
	},
};