import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 艾尔海森 */
export const meta: CharDetailInfo  = {
    info: {
		title: "诲韬诤言",
		allegiance: "须弥教令院",
		birth: "2-11",
		astro: "天隼座",
		desc: "须弥教令院现任书记官，有过人的智慧与才能。生活得自由自在，一般人基本找不到他。",
		cncv: "杨超然",
		jpcv: "梅原裕一郎",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 13348,
		[AttrKeys.atk]: 313.32,
		[AttrKeys.def]: 781.62
	},
	growAttr:{
		key: AttrKeys.dmg,
		value: 28.8
	},
	materials:{
		[MaterialType.gem]: "生长碧翡",
		[MaterialType.boss]: "苍砾蕊羽",
		[MaterialType.specialty]: "沙脂蛹",
		[MaterialType.normal]: "织金红绸",
		[MaterialType.talent]: "「巧思」的哲学",
		[MaterialType.weekly]: "无心的渊镜"
	},
	talent:{
		[GsTalentType.a]: {
			id: 7831,
			name: "普通攻击·溯因反绎法",
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
						"49.53%",
						"53.56%",
						"57.59%",
						"63.35%",
						"67.38%",
						"71.99%",
						"78.32%",
						"84.65%",
						"90.99%",
						"97.9%",
						"104.81%",
						"111.72%",
						"118.63%",
						"125.54%",
						"132.45%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"50.75%",
						"54.88%",
						"59.01%",
						"64.91%",
						"69.04%",
						"73.76%",
						"80.26%",
						"86.75%",
						"93.24%",
						"100.32%",
						"107.4%",
						"114.48%",
						"121.56%",
						"128.64%",
						"135.73%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"34.18% + 34.18%",
						"36.96% + 36.96%",
						"39.74% + 39.74%",
						"43.72% + 43.72%",
						"46.5% + 46.5%",
						"49.68% + 49.68%",
						"54.05% + 54.05%",
						"58.42% + 58.42%",
						"62.79% + 62.79%",
						"67.56% + 67.56%",
						"72.33% + 72.33%",
						"77.1% + 77.1%",
						"81.87% + 81.87%",
						"86.64% + 86.64%",
						"91.41% + 91.41%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"66.77%",
						"72.2%",
						"77.64%",
						"85.4%",
						"90.84%",
						"97.05%",
						"105.59%",
						"114.13%",
						"122.67%",
						"131.98%",
						"141.3%",
						"150.62%",
						"159.93%",
						"169.25%",
						"178.57%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"83.85%",
						"90.68%",
						"97.5%",
						"107.25%",
						"114.08%",
						"121.88%",
						"132.6%",
						"143.33%",
						"154.05%",
						"165.75%",
						"177.45%",
						"189.15%",
						"200.85%",
						"212.55%",
						"224.25%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"55.26% + 55.26%",
						"59.75% + 59.75%",
						"64.25% + 64.25%",
						"70.67% + 70.67%",
						"75.17% + 75.17%",
						"80.31% + 80.31%",
						"87.38% + 87.38%",
						"94.45% + 94.45%",
						"101.51% + 101.51%",
						"109.22% + 109.22%",
						"116.94% + 116.94%",
						"124.64% + 124.64%",
						"132.35% + 132.35%",
						"140.07% + 140.07%",
						"147.77% + 147.77%"
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
			id: 7832,
			name: "共相·理式摹写",
			desc: [
				"迅速突进，在突进结束时对身边的敌人造成草元素伤害，并凝聚「琢光镜」。",
				"长按时将以不同的方式施放。",
				"<h3>长按</h3>",
				"进入瞄准状态，以调整突进的方向。",
				"<h3>琢光镜</h3>",
				"施放时，艾尔海森将产生1枚琢光镜；若此时未持有任何琢光镜，则额外产生1枚。琢光镜具有如下效果：",
				"·持有琢光镜时，艾尔海森的普通攻击、重击与下落攻击将转为无法被附魔覆盖的草元素伤害；",
				"·上述攻击命中敌人时，琢光镜将进行光幕攻击，造成基于琢光镜数量的草元素范围伤害；",
				"·至多持有3枚琢光镜；",
				"·琢光镜将随着时间流逝逐枚消失，并将在艾尔海森退场时全部消失。",
				"<i>「真理本就存在于不确定性当中，即便再伟大的学者也不能免于错谬。」</i>"
			],
			tables: [
				{
					name: "突进攻击伤害",
					isSame: false,
					values: [
						"193.6%攻击 + 154.88%精通",
						"208.12%攻击 + 166.5%精通",
						"222.64%攻击 + 178.11%精通",
						"242%攻击 + 193.6%精通",
						"256.52%攻击 + 205.22%精通",
						"271.04%攻击 + 216.83%精通",
						"290.4%攻击 + 232.32%精通",
						"309.76%攻击 + 247.81%精通",
						"329.12%攻击 + 263.3%精通",
						"348.48%攻击 + 278.78%精通",
						"367.84%攻击 + 294.27%精通",
						"387.2%攻击 + 309.76%精通",
						"411.4%攻击 + 329.12%精通",
						"435.6%攻击 + 348.48%精通",
						"459.8%攻击 + 367.84%精通"
					]
				},
				{
					name: "光幕攻击间隔",
					isSame: true,
					values: [
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒",
						"1.6秒"
					]
				},
				{
					name: "1枚光幕攻击伤害",
					isSame: false,
					values: [
						"67.2%攻击 + 134.4%精通",
						"72.24%攻击 + 144.48%精通",
						"77.28%攻击 + 154.56%精通",
						"84%攻击 + 168%精通",
						"89.04%攻击 + 178.08%精通",
						"94.08%攻击 + 188.16%精通",
						"100.8%攻击 + 201.6%精通",
						"107.52%攻击 + 215.04%精通",
						"114.24%攻击 + 228.48%精通",
						"120.96%攻击 + 241.92%精通",
						"127.68%攻击 + 255.36%精通",
						"134.4%攻击 + 268.8%精通",
						"142.8%攻击 + 285.6%精通",
						"151.2%攻击 + 302.4%精通",
						"159.6%攻击 + 319.2%精通"
					]
				},
				{
					name: "2枚光幕攻击伤害",
					isSame: false,
					values: [
						"(67.2%攻击 + 134.4%精通)*2",
						"(72.24%攻击 + 144.48%精通)*2",
						"(77.28%攻击 + 154.56%精通)*2",
						"(84%攻击 + 168%精通)*2",
						"(89.04%攻击 + 178.08%精通)*2",
						"(94.08%攻击 + 188.16%精通)*2",
						"(100.8%攻击 + 201.6%精通)*2",
						"(107.52%攻击 + 215.04%精通)*2",
						"(114.24%攻击 + 228.48%精通)*2",
						"(120.96%攻击 + 241.92%精通)*2",
						"(127.68%攻击 + 255.36%精通)*2",
						"(134.4%攻击 + 268.8%精通)*2",
						"(142.8%攻击 + 285.6%精通)*2",
						"(151.2%攻击 + 302.4%精通)*2",
						"(159.6%攻击 + 319.2%精通)*2"
					]
				},
				{
					name: "3枚光幕攻击伤害",
					isSame: false,
					values: [
						"(67.2%攻击 + 134.4%精通)*3",
						"(72.24%攻击 + 144.48%精通)*3",
						"(77.28%攻击 + 154.56%精通)*3",
						"(84%攻击 + 168%精通)*3",
						"(89.04%攻击 + 178.08%精通)*3",
						"(94.08%攻击 + 188.16%精通)*3",
						"(100.8%攻击 + 201.6%精通)*3",
						"(107.52%攻击 + 215.04%精通)*3",
						"(114.24%攻击 + 228.48%精通)*3",
						"(120.96%攻击 + 241.92%精通)*3",
						"(127.68%攻击 + 255.36%精通)*3",
						"(134.4%攻击 + 268.8%精通)*3",
						"(142.8%攻击 + 285.6%精通)*3",
						"(151.2%攻击 + 302.4%精通)*3",
						"(159.6%攻击 + 319.2%精通)*3"
					]
				},
				{
					name: "琢光镜消失间隔",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 7839,
			name: "殊境·显象缚结",
			desc: [
				"创造殊相缚境，造成多次草元素范围伤害。",
				"施放时，若持有琢光镜，将消耗所有的琢光镜，增加造成伤害的次数。",
				"施放完成2秒后，若施放时消耗了0/1/2/3个琢光镜，则将为艾尔海森产生3/2/1/0个琢光镜。",
				"<i>「学者如果将追求智慧作为自己的目标，那么他就必须与他所读到的每一个字为敌，这样才有可能免于偏见。」</i>"
			],
			tables: [
				{
					name: "单次伤害",
					isSame: false,
					values: [
						"121.6%攻击 + 97.28%精通",
						"130.72%攻击 + 104.58%精通",
						"139.84%攻击 + 111.87%精通",
						"152%攻击 + 121.6%精通",
						"161.12%攻击 + 128.9%精通",
						"170.24%攻击 + 136.19%精通",
						"182.4%攻击 + 145.92%精通",
						"194.56%攻击 + 155.65%精通",
						"206.72%攻击 + 165.38%精通",
						"218.88%攻击 + 175.1%精通",
						"231.04%攻击 + 184.83%精通",
						"243.2%攻击 + 194.56%精通",
						"258.4%攻击 + 206.72%精通",
						"273.6%攻击 + 218.88%精通",
						"288.8%攻击 + 231.04%精通"
					]
				},
				{
					name: "基本攻击次数",
					isSame: true,
					values: [
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次",
						"4次"
					]
				},
				{
					name: "1枚攻击次数",
					isSame: true,
					values: [
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次",
						"6次"
					]
				},
				{
					name: "2枚攻击次数",
					isSame: true,
					values: [
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次",
						"8次"
					]
				},
				{
					name: "3枚攻击次数",
					isSame: true,
					values: [
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次",
						"10次"
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
				49.53,
				53.56,
				57.59,
				63.35,
				67.38,
				71.99,
				78.32,
				84.65,
				90.99,
				97.9,
				104.81,
				111.72,
				118.63,
				125.54,
				132.45
			]],
			["二段伤害", [
				50.75,
				54.88,
				59.01,
				64.91,
				69.04,
				73.76,
				80.26,
				86.75,
				93.24,
				100.32,
				107.4,
				114.48,
				121.56,
				128.64,
				135.73
			]],
			["三段伤害", [
				68.36,
				73.92,
				79.48,
				87.44,
				93,
				99.36,
				108.1,
				116.84,
				125.58,
				135.12,
				144.66,
				154.2,
				163.74,
				173.28,
				182.82
			]],
			["三段伤害2", [
				[34.18, 34.18],
				[36.96, 36.96],
				[39.74, 39.74],
				[43.72, 43.72],
				[46.5, 46.5],
				[49.68, 49.68],
				[54.05, 54.05],
				[58.42, 58.42],
				[62.79, 62.79],
				[67.56, 67.56],
				[72.33, 72.33],
				[77.1, 77.1],
				[81.87, 81.87],
				[86.64, 86.64],
				[91.41, 91.41]
			]],
			["四段伤害", [
				66.77,
				72.2,
				77.64,
				85.4,
				90.84,
				97.05,
				105.59,
				114.13,
				122.67,
				131.98,
				141.3,
				150.62,
				159.93,
				169.25,
				178.57
			]],
			["五段伤害", [
				83.85,
				90.68,
				97.5,
				107.25,
				114.08,
				121.88,
				132.6,
				143.33,
				154.05,
				165.75,
				177.45,
				189.15,
				200.85,
				212.55,
				224.25
			]],
			["重击伤害", [
				110.52,
				119.5,
				128.5,
				141.34,
				150.34,
				160.62,
				174.76,
				188.9,
				203.02,
				218.44,
				233.88,
				249.28,
				264.7,
				280.14,
				295.54
			]],
			["重击伤害2", [
				[55.26, 55.26],
				[59.75, 59.75],
				[64.25, 64.25],
				[70.67, 70.67],
				[75.17, 75.17],
				[80.31, 80.31],
				[87.38, 87.38],
				[94.45, 94.45],
				[101.51, 101.51],
				[109.22, 109.22],
				[116.94, 116.94],
				[124.64, 124.64],
				[132.35, 132.35],
				[140.07, 140.07],
				[147.77, 147.77]
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
			["突进攻击伤害", [
				348.48,
				374.62,
				400.75,
				435.6,
				461.74,
				487.87,
				522.72,
				557.5699999999999,
				592.4200000000001,
				627.26,
				662.1099999999999,
				696.96,
				740.52,
				784.08,
				827.64
			]],
			["突进攻击伤害2", [
				[193.6, 154.88],
				[208.12, 166.5],
				[222.64, 178.11],
				[242, 193.6],
				[256.52, 205.22],
				[271.04, 216.83],
				[290.4, 232.32],
				[309.76, 247.81],
				[329.12, 263.3],
				[348.48, 278.78],
				[367.84, 294.27],
				[387.2, 309.76],
				[411.4, 329.12],
				[435.6, 348.48],
				[459.8, 367.84]
			]],
			["1枚光幕攻击伤害", [
				201.60000000000002,
				216.71999999999997,
				231.84,
				252,
				267.12,
				282.24,
				302.4,
				322.56,
				342.71999999999997,
				362.88,
				383.04,
				403.20000000000005,
				428.40000000000003,
				453.59999999999997,
				478.79999999999995
			]],
			["1枚光幕攻击伤害2", [
				[67.2, 134.4],
				[72.24, 144.48],
				[77.28, 154.56],
				[84, 168],
				[89.04, 178.08],
				[94.08, 188.16],
				[100.8, 201.6],
				[107.52, 215.04],
				[114.24, 228.48],
				[120.96, 241.92],
				[127.68, 255.36],
				[134.4, 268.8],
				[142.8, 285.6],
				[151.2, 302.4],
				[159.6, 319.2]
			]],
			["2枚光幕攻击伤害", [
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false
			]],
			["2枚光幕攻击伤害2", [
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2],
				[, , 2]
			]],
			["3枚光幕攻击伤害", [
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false
			]],
			["3枚光幕攻击伤害2", [
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3],
				[, , 3]
			]]
		]),
		[GsTalentType.q]: new Map([
			["单次伤害", [
				218.88,
				235.3,
				251.71,
				273.6,
				290.02,
				306.43,
				328.32,
				350.21000000000004,
				372.1,
				393.98,
				415.87,
				437.76,
				465.12,
				492.48,
				519.84
			]],
			["单次伤害2", [
				[121.6, 97.28],
				[130.72, 104.58],
				[139.84, 111.87],
				[152, 121.6],
				[161.12, 128.9],
				[170.24, 136.19],
				[182.4, 145.92],
				[194.56, 155.65],
				[206.72, 165.38],
				[218.88, 175.1],
				[231.04, 184.83],
				[243.2, 194.56],
				[258.4, 206.72],
				[273.6, 218.88],
				[288.8, 231.04]
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "直观",
			desc: [
				"光幕攻击命中敌人时，将使共相·理式摹写的冷却时间减少1.2秒。该效果每1秒至多触发一次。"
			]
		}],
		[2, {
			name: "辩章",
			desc: [
				"艾尔海森产生琢光镜时，每1枚产生的琢光镜将使元素精通提升50点，持续8秒。该效果最多叠加4层，每层独立计算持续时间。琢光镜数量达到上限时依然能触发该效果。"
			]
		}],
		[3, {
			name: "遮诠",
			desc: [
				"共相·理式摹写的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "义贯",
			desc: [
				"施放殊境·显象缚结时，会依据通过本次施放消耗与产生的琢光镜数量，产生如下效果：",
				"·每消耗1枚琢光镜，使队伍中附近的其他角色元素精通提升30点，持续15秒；",
				"·每产生1枚琢光镜，使艾尔海森获得10%草元素伤害加成，持续15秒。",
				"上述效果的持续期间内重复施放殊境·显象缚结时，将先移除原有的效果。"
			]
		}],
		[5, {
			name: "智度",
			desc: [
				"殊境·显象缚结的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "正理",
			desc: [
				"<h3>艾尔海森获得如下效果：</h3>",
				"·殊境·显象缚结施放完成2秒后，将无视消耗琢光镜的个数，固定产生3枚琢光镜；",
				"·艾尔海森产生琢光镜时，若琢光镜数量已达到上限，艾尔海森的暴击率提升10%，暴击伤害提升70%，持续6秒。该效果在持续期间重复触发时，剩余持续时间将增加6秒。"
			]
		}]
	]),
	passive: [
		{
			name: "超定归约律",
			desc: [
				"合成武器突破素材时，有10%概率获得2倍产出。"
			],
		},
		{
			name: "四因订顽",
			desc: [
				"艾尔海森的重击或下落攻击命中敌人时，将产生一枚琢光镜。该效果每12秒至多触发一次。"
			],
		},
		{
			name: "谜林道破",
			desc: [
				"艾尔海森的每点元素精通，都会使光幕伤害与殊境·显象缚结造成的伤害提升0.1%。",
				"通过这种方式，至多使光幕伤害与殊境·显象缚结造成的伤害提升100%。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.dmg
		],
		details: new Map([
			["1", [1039, 24.39, 60.85, 0]],
			["20", [2695, 63.27, 157.84, 0]],
			["40", [5366, 125.97, 314.24, 0]],
			["50", [6902, 162.03, 404.19, 7.2]],
			["60", [8659, 203.25, 507.04, 14.4]],
			["70", [10213, 239.72, 598.02, 14.4]],
			["80", [11777, 276.44, 689.61, 21.6]],
			["90", [13348, 313.32, 781.62, 28.8]],
			["20+", [3586, 84.19, 210.01, 0]],
			["40+", [5999, 140.83, 351.31, 7.2]],
			["50+", [7747, 181.84, 453.61, 14.4]],
			["60+", [9292, 218.11, 544.11, 14.4]],
			["70+", [10846, 254.58, 635.09, 21.6]],
			["80+", [12410, 291.3, 726.67, 28.8]]
		])
	},
};