export interface Goods {
	id: number;
	title: string;
	label: string;
	price: Price;
	mean_rate: number;
	cover: string;
}

export interface Price {
	ultimately: number;
	original: number;
	discounts: boolean;
}
