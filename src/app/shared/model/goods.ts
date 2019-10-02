export interface Goods {
	goods: Array<GoodsDetails>;
}

export interface GoodsDetails {
	id: number;
	title: string;
	label: string;
	// 价格
	price: Price;
	// 平均评价
	mean_rate: number;
	// 封面
	cover: string;
}

export interface Price {
	// 最终价格
	ultimately: number;
	// 原始价格
	original: number;
}

export interface Banner {
	banner: string[];
}
