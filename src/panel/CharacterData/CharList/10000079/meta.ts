import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 迪希雅 */
export const meta: CharDetailInfo  = {
    info: {
		title: "炽鬃之狮",
		allegiance: "镀金旅团",
		birth: "4-7",
		astro: "蝎尾鬃狮座",
		desc: "横行须弥沙漠的佣兵组织「镀金旅团」的成员，勇敢而又强大的战士，在「镀金旅团」内部声名赫赫。",
		cncv: "陈雨",
		jpcv: "福原绫香",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 15675,
		[AttrKeys.atk]: 265.49,
		[AttrKeys.def]: 627.91
	},
	growAttr:{
		key: AttrKeys.hp + "Pct",
		value: 28.8
	},
	materials:{
		[MaterialType.gem]: "燃愿玛瑙",
		[MaterialType.boss]: "导光四面体",
		[MaterialType.specialty]: "沙脂蛹",
		[MaterialType.normal]: "织金红绸",
		[MaterialType.talent]: "「笃行」的哲学",
		[MaterialType.weekly]: "傀儡的悬丝"
	},
	talent:{
		[GsTalentType.a]: {
			id: 7931,
			name: "普通攻击·拂金剑斗术",
			desc: [
				"<h3>普通攻击</h3>",
				"结合双手剑与体术，进行至多四段的连续攻击。",
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
						"62.12%",
						"67.17%",
						"72.23%",
						"79.45%",
						"84.51%",
						"90.29%",
						"98.23%",
						"106.18%",
						"114.12%",
						"122.79%",
						"131.46%",
						"140.13%",
						"148.79%",
						"157.46%",
						"166.13%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"61.71%",
						"66.73%",
						"71.76%",
						"78.93%",
						"83.95%",
						"89.7%",
						"97.59%",
						"105.48%",
						"113.37%",
						"121.99%",
						"130.6%",
						"139.21%",
						"147.82%",
						"156.43%",
						"165.04%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"76.63%",
						"82.87%",
						"89.11%",
						"98.02%",
						"104.25%",
						"111.38%",
						"121.18%",
						"130.99%",
						"140.79%",
						"151.48%",
						"162.17%",
						"172.87%",
						"183.56%",
						"194.25%",
						"204.94%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"95.29%",
						"103.05%",
						"110.8%",
						"121.88%",
						"129.64%",
						"138.51%",
						"150.69%",
						"162.88%",
						"175.07%",
						"188.37%",
						"201.66%",
						"214.96%",
						"228.26%",
						"241.55%",
						"254.85%"
					]
				},
				{
					name: "重击循环伤害",
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
						"215.49%",
						"229.7%",
						"243.9%",
						"258.11%",
						"272.32%"
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
			id: 7932,
			name: "熔铁流狱",
			desc: [
				"迪希雅依据战局状况，施展不同的自创战斗技艺。",
				"<h3>净焰昂藏</h3>",
				"当前场上不存在迪希雅自己的「净焰剑狱」时施展。",
				"造成火元素范围伤害，并产生净焰剑狱领域。",
				"<h3>剑域炽焰</h3>",
				"当前场上存在迪希雅自己的净焰剑狱时施展。",
				"进行腾跃攻击，造成火元素范围伤害，并在新的位置重新产生净焰剑狱领域。",
				"通过这种方式重新产生的净焰剑狱领域将继承原本的持续时间。",
				"在1次净焰剑狱领域的持续时间内，只能施展1次剑域炽焰。",
				"<h3>净焰剑狱</h3>",
				"领域中的敌人受到伤害时，净焰剑狱将进行协同攻击，基于迪希雅的攻击力与生命值上限，对其造成火元素范围伤害。该效果每2.5秒至多触发一次。",
				"提升领域中当前场上角色的抗打断能力，并在这些角色受到伤害时，消解部分伤害，将其转入「赤鬃之血」，由迪希雅在10秒内承担。赤鬃之血储存的伤害值达到或超过迪希雅生命值上限的一定比例时，将不再消解伤害。",
				"同时只能存在1个由迪希雅自己创造的净焰剑狱。",
				"<i>一同度过这赤焰之试，烧却不洁吧，就如炽光之兽必自焚灼中降临那样。</i>"
			],
			tables: [
				{
					name: "净焰昂藏伤害",
					isSame: false,
					values: [
						"112.88%",
						"121.35%",
						"129.81%",
						"141.1%",
						"149.57%",
						"158.03%",
						"169.32%",
						"180.61%",
						"191.9%",
						"203.18%",
						"214.47%",
						"225.76%",
						"239.87%",
						"253.98%",
						"268.09%"
					]
				},
				{
					name: "剑域炽焰伤害",
					isSame: false,
					values: [
						"132.8%",
						"142.76%",
						"152.72%",
						"166%",
						"175.96%",
						"185.92%",
						"199.2%",
						"212.48%",
						"225.76%",
						"239.04%",
						"252.32%",
						"265.6%",
						"282.2%",
						"298.8%",
						"315.4%"
					]
				},
				{
					name: "领域伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"60.2%攻击力 + 1.03%",
						"64.71%攻击力 + 1.11%",
						"69.23%攻击力 + 1.19%",
						"75.25%攻击力 + 1.29%",
						"79.76%攻击力 + 1.37%",
						"84.28%攻击力 + 1.44%",
						"90.3%攻击力 + 1.55%",
						"96.32%攻击力 + 1.65%",
						"102.34%攻击力 + 1.75%",
						"108.36%攻击力 + 1.86%",
						"114.38%攻击力 + 1.96%",
						"120.4%攻击力 + 2.06%",
						"127.93%攻击力 + 2.19%",
						"135.45%攻击力 + 2.32%",
						"142.97%攻击力 + 2.45%"
					]
				},
				{
					name: "消解减免",
					isSame: false,
					values: [
						"32%",
						"34%",
						"36%",
						"38%",
						"40%",
						"42%",
						"44%",
						"46%",
						"48%",
						"50%",
						"52%",
						"54%",
						"56%",
						"56%",
						"56%"
					]
				},
				{
					name: "赤鬃之血上限",
					unit: "生命值上限",
					isSame: false,
					values: [
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%",
						"200%"
					]
				},
				{
					name: "领域持续时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 7939,
			name: "炎啸狮子咬",
			desc: [
				"释放炙热的怒火，放弃不便的大剑，进入「炽炎狮子」状态，提升抗打断能力。",
				"在这种状态下，迪希雅将自动连续挥舞炽鬃拳，基于攻击力与生命值上限造成火元素伤害，并在持续时间结束时，进行焚落踢，基于攻击力与生命值上限造成火元素范围伤害。",
				"施放时，如果场上存在迪希雅自己的元素战技「熔铁流狱」的「净焰剑狱」领域，迪希雅会将其收回，并在炽炎狮子状态结束时在新的位置重新产生，重新产生时将继承被收回时的持续时间。",
				"在这种状态下，迪希雅无法施放元素战技，无法进行普通攻击、重击与下落攻击。「普通攻击·拂金剑斗术」与元素战技「熔铁流狱」将被替换为「炎咆连打」。",
				"<h3>炎咆连打</h3>",
				"施展炽鬃拳后的0.4秒内施放炎咆连打，将提升下一次炽鬃拳施展的速度。",
				"<i>流变之火也要顺从她的怒意，变化利爪尖牙般的锋锐之型。</i>"
			],
			tables: [
				{
					name: "炽鬃拳伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"98.7%攻击力 + 1.69%",
						"106.1%攻击力 + 1.82%",
						"113.51%攻击力 + 1.95%",
						"123.37%攻击力 + 2.12%",
						"130.78%攻击力 + 2.24%",
						"138.18%攻击力 + 2.37%",
						"148.05%攻击力 + 2.54%",
						"157.92%攻击力 + 2.71%",
						"167.79%攻击力 + 2.88%",
						"177.66%攻击力 + 3.05%",
						"187.53%攻击力 + 3.21%",
						"197.4%攻击力 + 3.38%",
						"209.74%攻击力 + 3.6%",
						"222.08%攻击力 + 3.81%",
						"234.41%攻击力 + 4.02%"
					]
				},
				{
					name: "焚落踢伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"139.3%攻击力 + 2.39%",
						"149.75%攻击力 + 2.57%",
						"160.2%攻击力 + 2.75%",
						"174.13%攻击力 + 2.99%",
						"184.57%攻击力 + 3.16%",
						"195.02%攻击力 + 3.34%",
						"208.95%攻击力 + 3.58%",
						"222.88%攻击力 + 3.82%",
						"236.81%攻击力 + 4.06%",
						"250.74%攻击力 + 4.3%",
						"264.67%攻击力 + 4.54%",
						"278.6%攻击力 + 4.78%",
						"296.01%攻击力 + 5.07%",
						"313.42%攻击力 + 5.37%",
						"330.84%攻击力 + 5.67%"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒"
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
				62.12,
				67.17,
				72.23,
				79.45,
				84.51,
				90.29,
				98.23,
				106.18,
				114.12,
				122.79,
				131.46,
				140.13,
				148.79,
				157.46,
				166.13
			]],
			["二段伤害", [
				61.71,
				66.73,
				71.76,
				78.93,
				83.95,
				89.7,
				97.59,
				105.48,
				113.37,
				121.99,
				130.6,
				139.21,
				147.82,
				156.43,
				165.04
			]],
			["三段伤害", [
				76.63,
				82.87,
				89.11,
				98.02,
				104.25,
				111.38,
				121.18,
				130.99,
				140.79,
				151.48,
				162.17,
				172.87,
				183.56,
				194.25,
				204.94
			]],
			["四段伤害", [
				95.29,
				103.05,
				110.8,
				121.88,
				129.64,
				138.51,
				150.69,
				162.88,
				175.07,
				188.37,
				201.66,
				214.96,
				228.26,
				241.55,
				254.85
			]],
			["重击循环伤害", [
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
			]],
			["重击终结伤害", [
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
				215.49,
				229.7,
				243.9,
				258.11,
				272.32
			]],
			["下坠期间伤害", [
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
			]],
			["低空/高空坠地冲击伤害", [
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
			]],
			["低空/高空坠地冲击伤害2", [
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
			]]
		]),
		[GsTalentType.e]: new Map([
			["净焰昂藏伤害", [
				112.88,
				121.35,
				129.81,
				141.1,
				149.57,
				158.03,
				169.32,
				180.61,
				191.9,
				203.18,
				214.47,
				225.76,
				239.87,
				253.98,
				268.09
			]],
			["剑域炽焰伤害", [
				132.8,
				142.76,
				152.72,
				166,
				175.96,
				185.92,
				199.2,
				212.48,
				225.76,
				239.04,
				252.32,
				265.6,
				282.2,
				298.8,
				315.4
			]],
			["领域伤害", [
				61.230000000000004,
				65.82,
				70.42,
				76.54,
				81.13000000000001,
				85.72,
				91.85,
				97.97,
				104.09,
				110.22,
				116.33999999999999,
				122.46000000000001,
				130.12,
				137.76999999999998,
				145.42
			]],
			["领域伤害2", [
				[60.2, 1.03],
				[64.71, 1.11],
				[69.23, 1.19],
				[75.25, 1.29],
				[79.76, 1.37],
				[84.28, 1.44],
				[90.3, 1.55],
				[96.32, 1.65],
				[102.34, 1.75],
				[108.36, 1.86],
				[114.38, 1.96],
				[120.4, 2.06],
				[127.93, 2.19],
				[135.45, 2.32],
				[142.97, 2.45]
			]],
			["消解减免", [
				32,
				34,
				36,
				38,
				40,
				42,
				44,
				46,
				48,
				50,
				52,
				54,
				56,
				56,
				56
			]],
			["赤鬃之血上限", [
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200,
				200
			]]
		]),
		[GsTalentType.q]: new Map([
			["炽鬃拳伤害", [
				100.39,
				107.91999999999999,
				115.46000000000001,
				125.49000000000001,
				133.02,
				140.55,
				150.59,
				160.63,
				170.67,
				180.71,
				190.74,
				200.78,
				213.34,
				225.89000000000001,
				238.43
			]],
			["炽鬃拳伤害2", [
				[98.7, 1.69],
				[106.1, 1.82],
				[113.51, 1.95],
				[123.37, 2.12],
				[130.78, 2.24],
				[138.18, 2.37],
				[148.05, 2.54],
				[157.92, 2.71],
				[167.79, 2.88],
				[177.66, 3.05],
				[187.53, 3.21],
				[197.4, 3.38],
				[209.74, 3.6],
				[222.08, 3.81],
				[234.41, 4.02]
			]],
			["焚落踢伤害", [
				141.69,
				152.32,
				162.95,
				177.12,
				187.73,
				198.36,
				212.53,
				226.7,
				240.87,
				255.04000000000002,
				269.21000000000004,
				283.38,
				301.08,
				318.79,
				336.51
			]],
			["焚落踢伤害2", [
				[139.3, 2.39],
				[149.75, 2.57],
				[160.2, 2.75],
				[174.13, 2.99],
				[184.57, 3.16],
				[195.02, 3.34],
				[208.95, 3.58],
				[222.88, 3.82],
				[236.81, 4.06],
				[250.74, 4.3],
				[264.67, 4.54],
				[278.6, 4.78],
				[296.01, 5.07],
				[313.42, 5.37],
				[330.84, 5.67]
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "皎洁之火铓辉灿漫",
			desc: [
				"迪希雅的生命值上限提升20%；此外，基于生命值上限，迪希雅的以下攻击造成的伤害提高：",
				"·熔铁流狱伤害提高值：生命值上限的3.6%；",
				"·炎啸狮子咬伤害提高值：生命值上限的6%。"
			]
		}],
		[2, {
			name: "净沙利刃明映万乘",
			desc: [
				"施放熔铁流狱·剑域炽焰时，重新产生的净焰剑狱领域持续时间将延长6秒。",
				"此外，场上存在净焰剑狱领域时，领域内的当前场上角色受到攻击时，将使净焰剑狱下次协同攻击造成的伤害提升50%。"
			]
		}],
		[3, {
			name: "怒势疾迅如焚掠地",
			desc: [
				"炎啸狮子咬的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "服膺誓禁恪守无失",
			desc: [
				"炎啸狮子咬的炽鬃拳与焚落踢命中敌人时，将为迪希雅恢复1.5点元素能量，并基于生命值上限的2.5%，为迪希雅恢复生命值。该效果每0.2秒至多触发一次。"
			]
		}],
		[5, {
			name: "猎兽魁首卓荦不羁",
			desc: [
				"熔铁流狱的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "燎燃利爪裂帛斫金",
			desc: [
				"炎啸狮子咬的暴击率提升10%。",
				"此外，在一次炽炎狮子的持续期间，炽鬃拳命中敌人并造成暴击后，将使持续期间内炎啸狮子咬的暴击伤害提升15%，炽炎狮子的持续时间延长0.5秒。该效果每0.2秒至多触发一次，至多通过这种方式使持续时间延长2秒，暴击伤害提升60%。"
			]
		}]
	]),
	passive: [
		{
			name: "日照的正途",
			desc: [
				"在白天（6时至18时），队伍中自己的角色移动速度提高10%。",
				"该效果在秘境、征讨领域、深境螺旋中无效，且无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "不吝佑助",
			desc: [
				"迪希雅通过熔铁流狱·剑域炽焰或炎啸狮子咬回收净焰剑狱后的6秒内，迪希雅承担来自赤鬃之血的伤害时，受到的伤害降低60%。该效果每2秒至多触发一次。",
				"此外，迪希雅施放熔铁流狱·净焰昂藏后的9秒内，将为队伍中所有角色赋予「熔金铸躯」状态。处于熔金铸躯状态下的角色处于净焰剑狱领域中时，将获得额外的抗打断能力。每18秒至多产生一次熔金铸躯状态。"
			],
		},
		{
			name: "崇诚之真",
			desc: [
				"生命值低于40%时，迪希雅将基于生命值上限的20%恢复生命值，并在接下来的10秒内，每2秒基于生命值上限的6%为迪希雅恢复生命值。该效果每20秒至多触发一次。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.hp + "Pct"
		],
		details: new Map([
			["1", [1220, 20.67, 48.88, 0]],
			["20", [3165, 53.61, 126.8, 0]],
			["40", [6302, 106.74, 252.44, 0]],
			["50", [8106, 137.29, 324.7, 7.2]],
			["60", [10168, 172.22, 407.32, 14.4]],
			["70", [11993, 203.13, 480.41, 14.4]],
			["80", [13829, 234.23, 553.99, 21.6]],
			["90", [15675, 265.49, 627.91, 28.8]],
			["20+", [4212, 71.33, 168.71, 0]],
			["40+", [7045, 119.33, 282.22, 7.2]],
			["50+", [9097, 154.08, 364.41, 14.4]],
			["60+", [10912, 184.81, 437.1, 14.4]],
			["70+", [12736, 215.72, 510.19, 21.6]],
			["80+", [14573, 246.82, 583.77, 28.8]]
		])
	},
};