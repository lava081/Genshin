import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 妮露 */
export const meta: CharDetailInfo  = {
    info: {
		title: "莲光落舞筵",
		allegiance: "祖拜尔剧场",
		birth: "12-3",
		astro: "睡莲座",
		desc: "祖拜尔剧场的知名舞者，舞姿灵动优美，为人纯真亲善。",
		cncv: "紫苏九月",
		jpcv: "金元寿子",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 15185,
		[AttrKeys.atk]: 229.61,
		[AttrKeys.def]: 728.59
	},
	growAttr:{
		key: AttrKeys.hp + "Pct",
		value: 28.8
	},
	materials:{
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "永续机芯",
		[MaterialType.specialty]: "帕蒂沙兰",
		[MaterialType.normal]: "孢囊晶尘",
		[MaterialType.talent]: "「笃行」的哲学",
		[MaterialType.weekly]: "祸神之禊泪"
	},
	talent:{
		[GsTalentType.a]: {
			id: 7031,
			name: "普通攻击·弦月舞步",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多三段的连续剑击。",
				"<h3>重击</h3>",
				"消耗一定体力，进行一次旋转斩击。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"50.31%",
						"54.4%",
						"58.5%",
						"64.35%",
						"68.44%",
						"73.12%",
						"79.56%",
						"85.99%",
						"92.43%",
						"99.44%",
						"106.46%",
						"113.48%",
						"120.5%",
						"127.52%",
						"134.54%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"45.44%",
						"49.14%",
						"52.84%",
						"58.12%",
						"61.82%",
						"66.04%",
						"71.86%",
						"77.67%",
						"83.48%",
						"89.82%",
						"96.16%",
						"102.5%",
						"108.84%",
						"115.18%",
						"121.52%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"70.35%",
						"76.08%",
						"81.81%",
						"89.99%",
						"95.71%",
						"102.26%",
						"111.26%",
						"120.26%",
						"129.26%",
						"139.07%",
						"148.89%",
						"158.71%",
						"168.52%",
						"178.34%",
						"188.16%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"50.22% + 54.44%",
						"54.31% + 58.87%",
						"58.4% + 63.3%",
						"64.24% + 69.63%",
						"68.33% + 74.06%",
						"73% + 79.12%",
						"79.42% + 86.09%",
						"85.85% + 93.05%",
						"92.27% + 100.01%",
						"99.28% + 107.61%",
						"106.29% + 115.21%",
						"113.3% + 122.8%",
						"120.3% + 130.4%",
						"127.31% + 137.99%",
						"134.32% + 145.59%"
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
			id: 7032,
			name: "七域舞步",
			desc: [
				"展开「翩转」状态，基于妮露的生命值上限，对身边的敌人造成水元素伤害。",
				"在翩转状态下，妮露在进行普通攻击或施放元素战技时，将转为分别进行「剑舞步」与「旋舞步」，造成的伤害转为无法被附魔覆盖、视为元素战技伤害的水元素伤害。",
				"在这种状态下，妮露的第三段舞步将移除翩转状态，并依据第三段舞步的类型分别产生如下效果：",
				"·剑舞步：释放一道水月，对触及的敌人造成水元素伤害，并为妮露赋予祷月状态。在此状态下她进行普通攻击时，将转为进行剑舞步，并在进行最后一击时释放水月；",
				"·旋舞步：施展一道涤空水轮，造成水元素范围伤害，并产生会跟随自己的当前场上角色行动的净天水环，持续为其中的敌人施加潮湿状态。",
				"在翩转或祷月状态下时，妮露无法进行重击；这些状态将会在妮露退场时解除。",
				"<i>「她纤巧的足尖轻轻点过水面，摇漾的涟光宛如七天的流绚。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"3.34%",
						"3.59%",
						"3.84%",
						"4.17%",
						"4.42%",
						"4.67%",
						"5.01%",
						"5.34%",
						"5.68%",
						"6.01%",
						"6.34%",
						"6.68%",
						"7.1%",
						"7.51%",
						"7.93%"
					]
				},
				{
					name: "剑舞步/旋舞步一段伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"4.55% / 3.26%",
						"4.89% / 3.51%",
						"5.24% / 3.75%",
						"5.69% / 4.08%",
						"6.03% / 4.32%",
						"6.37% / 4.57%",
						"6.83% / 4.89%",
						"7.28% / 5.22%",
						"7.74% / 5.55%",
						"8.19% / 5.87%",
						"8.65% / 6.2%",
						"9.1% / 6.52%",
						"9.67% / 6.93%",
						"10.24% / 7.34%",
						"10.81% / 7.75%"
					]
				},
				{
					name: "剑舞步/旋舞步二段伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"5.14% / 3.96%",
						"5.53% / 4.26%",
						"5.92% / 4.55%",
						"6.43% / 4.95%",
						"6.82% / 5.25%",
						"7.2% / 5.54%",
						"7.72% / 5.94%",
						"8.23% / 6.34%",
						"8.75% / 6.73%",
						"9.26% / 7.13%",
						"9.77% / 7.52%",
						"10.29% / 7.92%",
						"10.93% / 8.42%",
						"11.58% / 8.91%",
						"12.22% / 9.41%"
					]
				},
				{
					name: "水月/水轮伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"7.17% / 5.06%",
						"7.71% / 5.44%",
						"8.24% / 5.82%",
						"8.96% / 6.33%",
						"9.5% / 6.71%",
						"10.04% / 7.09%",
						"10.75% / 7.59%",
						"11.47% / 8.1%",
						"12.19% / 8.6%",
						"12.9% / 9.11%",
						"13.62% / 9.62%",
						"14.34% / 10.12%",
						"15.23% / 10.76%",
						"16.13% / 11.39%",
						"17.03% / 12.02%"
					]
				},
				{
					name: "翩转持续时间",
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
					name: "祷月持续时间",
					isSame: true,
					values: [
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒"
					]
				},
				{
					name: "净天水环持续时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 7039,
			name: "浮莲舞步·远梦聆泉",
			desc: [
				"进行远梦聆泉之舞，绽开遥水莲华，基于妮露的生命值上限，造成水元素范围伤害，并为命中的敌人施加「永世流沔」状态。",
				"短暂间隔后，处于永世流沔状态下的敌人将受到水元素伤害。",
				"<i>「纵然我们不曾将那遥远的梦目睹，唯有这支舞，仍将似梦的遐景摹录。」</i>"
			],
			tables: [
				{
					name: "技能伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"18.43%",
						"19.81%",
						"21.2%",
						"23.04%",
						"24.42%",
						"25.8%",
						"27.65%",
						"29.49%",
						"31.33%",
						"33.18%",
						"35.02%",
						"36.86%",
						"39.17%",
						"41.47%",
						"43.78%"
					]
				},
				{
					name: "永世流沔伤害",
					unit: "生命值上限",
					isSame: false,
					values: [
						"22.53%",
						"24.22%",
						"25.91%",
						"28.16%",
						"29.85%",
						"31.54%",
						"33.79%",
						"36.04%",
						"38.3%",
						"40.55%",
						"42.8%",
						"45.06%",
						"47.87%",
						"50.69%",
						"53.5%"
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
				50.31,
				54.4,
				58.5,
				64.35,
				68.44,
				73.12,
				79.56,
				85.99,
				92.43,
				99.44,
				106.46,
				113.48,
				120.5,
				127.52,
				134.54
			]],
			["二段伤害", [
				45.44,
				49.14,
				52.84,
				58.12,
				61.82,
				66.04,
				71.86,
				77.67,
				83.48,
				89.82,
				96.16,
				102.5,
				108.84,
				115.18,
				121.52
			]],
			["三段伤害", [
				70.35,
				76.08,
				81.81,
				89.99,
				95.71,
				102.26,
				111.26,
				120.26,
				129.26,
				139.07,
				148.89,
				158.71,
				168.52,
				178.34,
				188.16
			]],
			["重击伤害", [
				104.66,
				113.18,
				121.69999999999999,
				133.87,
				142.39,
				152.12,
				165.51,
				178.89999999999998,
				192.28,
				206.89,
				221.5,
				236.1,
				250.7,
				265.3,
				279.90999999999997
			]],
			["重击伤害2", [
				[50.22, 54.44],
				[54.31, 58.87],
				[58.4, 63.3],
				[64.24, 69.63],
				[68.33, 74.06],
				[73, 79.12],
				[79.42, 86.09],
				[85.85, 93.05],
				[92.27, 100.01],
				[99.28, 107.61],
				[106.29, 115.21],
				[113.3, 122.8],
				[120.3, 130.4],
				[127.31, 137.99],
				[134.32, 145.59]
			]],
			["下坠期间伤害", [
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
			]],
			["低空/高空坠地冲击伤害", [
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
			]],
			["低空/高空坠地冲击伤害2", [
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
			]]
		]),
		[GsTalentType.e]: new Map([
			["技能伤害", [
				3.34,
				3.59,
				3.84,
				4.17,
				4.42,
				4.67,
				5.01,
				5.34,
				5.68,
				6.01,
				6.34,
				6.68,
				7.1,
				7.51,
				7.93
			]],
			["剑舞步/旋舞步一段伤害", [
				[4.55, 3.26],
				[4.89, 3.51],
				[5.24, 3.75],
				[5.69, 4.08],
				[6.03, 4.32],
				[6.37, 4.57],
				[6.83, 4.89],
				[7.28, 5.22],
				[7.74, 5.55],
				[8.19, 5.87],
				[8.65, 6.2],
				[9.1, 6.52],
				[9.67, 6.93],
				[10.24, 7.34],
				[10.81, 7.75]
			]],
			["剑舞步/旋舞步一段伤害2", [
				[4.55, 3.26],
				[4.89, 3.51],
				[5.24, 3.75],
				[5.69, 4.08],
				[6.03, 4.32],
				[6.37, 4.57],
				[6.83, 4.89],
				[7.28, 5.22],
				[7.74, 5.55],
				[8.19, 5.87],
				[8.65, 6.2],
				[9.1, 6.52],
				[9.67, 6.93],
				[10.24, 7.34],
				[10.81, 7.75]
			]],
			["剑舞步/旋舞步二段伤害", [
				[5.14, 3.96],
				[5.53, 4.26],
				[5.92, 4.55],
				[6.43, 4.95],
				[6.82, 5.25],
				[7.2, 5.54],
				[7.72, 5.94],
				[8.23, 6.34],
				[8.75, 6.73],
				[9.26, 7.13],
				[9.77, 7.52],
				[10.29, 7.92],
				[10.93, 8.42],
				[11.58, 8.91],
				[12.22, 9.41]
			]],
			["剑舞步/旋舞步二段伤害2", [
				[5.14, 3.96],
				[5.53, 4.26],
				[5.92, 4.55],
				[6.43, 4.95],
				[6.82, 5.25],
				[7.2, 5.54],
				[7.72, 5.94],
				[8.23, 6.34],
				[8.75, 6.73],
				[9.26, 7.13],
				[9.77, 7.52],
				[10.29, 7.92],
				[10.93, 8.42],
				[11.58, 8.91],
				[12.22, 9.41]
			]],
			["水月/水轮伤害", [
				[7.17, 5.06],
				[7.71, 5.44],
				[8.24, 5.82],
				[8.96, 6.33],
				[9.5, 6.71],
				[10.04, 7.09],
				[10.75, 7.59],
				[11.47, 8.1],
				[12.19, 8.6],
				[12.9, 9.11],
				[13.62, 9.62],
				[14.34, 10.12],
				[15.23, 10.76],
				[16.13, 11.39],
				[17.03, 12.02]
			]],
			["水月/水轮伤害2", [
				[7.17, 5.06],
				[7.71, 5.44],
				[8.24, 5.82],
				[8.96, 6.33],
				[9.5, 6.71],
				[10.04, 7.09],
				[10.75, 7.59],
				[11.47, 8.1],
				[12.19, 8.6],
				[12.9, 9.11],
				[13.62, 9.62],
				[14.34, 10.12],
				[15.23, 10.76],
				[16.13, 11.39],
				[17.03, 12.02]
			]]
		]),
		[GsTalentType.q]: new Map([
			["技能伤害", [
				18.43,
				19.81,
				21.2,
				23.04,
				24.42,
				25.8,
				27.65,
				29.49,
				31.33,
				33.18,
				35.02,
				36.86,
				39.17,
				41.47,
				43.78
			]],
			["永世流沔伤害", [
				22.53,
				24.22,
				25.91,
				28.16,
				29.85,
				31.54,
				33.79,
				36.04,
				38.3,
				40.55,
				42.8,
				45.06,
				47.87,
				50.69,
				53.5
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "却月的轻舞",
			desc: [
				"七域舞步获得如下强化：",
				"·水月造成的伤害提升65%；",
				"·净天水环的持续时间延长6秒。"
			]
		}],
		[2, {
			name: "星天的花雨",
			desc: [
				"处于「金杯的丰馈」状态下的角色对敌人造成水元素伤害后，该敌人的水元素抗性降低35%，持续10秒；触发绽放反应对敌人造成伤害后，该敌人的草元素抗性降低35%，持续10秒。",
				"需要解锁固有天赋「折旋落英之庭」。"
			]
		}],
		[3, {
			name: "倾影的莲步",
			desc: [
				"浮莲舞步·远梦聆泉的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "挽漪的节音",
			desc: [
				"七域舞步的翩转状态下的第三段舞步命中敌人后，将为妮露恢复15点元素能量，并使妮露的浮莲舞步·远梦聆泉造成的伤害提升50%，持续8秒。"
			]
		}],
		[5, {
			name: "翩旋的流光",
			desc: [
				"七域舞步的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "断霜的弦歌",
			desc: [
				"每1000点生命值上限，将使妮露的暴击率提升0.6%，暴击伤害提升1.2%。",
				"通过这种方式，妮露的暴击率至多提升30%，暴击伤害至多提升60%。"
			]
		}]
	]),
	passive: [
		{
			name: "白玉莲盏",
			desc: [
				"完美烹饪冒险类食物时，有12%概率获得2倍产出。"
			],
		},
		{
			name: "折旋落英之庭",
			desc: [
				"队伍中所有角色的元素类型均为草元素与水元素，并且至少有一名草元素角色、一名水元素角色时：",
				"妮露完成七域舞步的第三段舞步会为附近的所有角色赋予持续30秒的「金杯的丰馈」状态。",
				"处于金杯的丰馈状态下的角色受到草元素攻击会使附近的所有角色元素精通提升100点，持续10秒；此外，触发绽放反应时，将取代草原核产生「丰穰之核」。",
				"相比草原核，丰穰之核在产生后将迅速迸发，并且具有更大的影响范围。",
				"丰穰之核无法触发超绽放与烈绽放反应，与草原核共享数量上限。丰穰之核的攻击视为绽放反应的草原核的攻击。",
				"当队伍中角色的元素类型不满足本固有天赋的条件时，将移除已有的金杯的丰馈效果。"
			],
		},
		{
			name: "翩舞永世之梦",
			desc: [
				"基于妮露生命值上限超过30000的部分，每1000点生命值上限将使处于「金杯的丰馈」状态下的角色触发的丰穰之核造成的伤害提升9%。",
				"通过这种方式至多使丰穰之核造成的伤害提升400%。"
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
			["1", [1182, 17.88, 56.72, 0]],
			["20", [3066, 46.37, 147.13, 0]],
			["40", [6105, 92.31, 292.92, 0]],
			["50", [7852, 118.74, 376.76, 7.2]],
			["60", [9850, 148.95, 472.64, 14.4]],
			["70", [11618, 175.68, 557.44, 14.4]],
			["80", [13397, 202.58, 642.82, 21.6]],
			["90", [15185, 229.61, 728.59, 28.8]],
			["20+", [4080, 61.69, 195.76, 0]],
			["40+", [6825, 103.2, 327.48, 7.2]],
			["50+", [8813, 133.25, 422.84, 14.4]],
			["60+", [10571, 159.84, 507.19, 14.4]],
			["70+", [12338, 186.56, 592, 21.6]],
			["80+", [14117, 213.47, 677.37, 28.8]]
		])
	},
};