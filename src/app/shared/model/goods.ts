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
	// 新品
	fresh: boolean;
	// 拼团类型
	type: 2 | 5 | 10;
	// 描述图片
	pictures: Resource[];
}

export interface Resource {
	url: string;
	alt: string;
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
