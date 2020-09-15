import { Customer } from "./customer.js";
import { Order } from "./order.js";
import { Product } from "./product.js";

class Store {
	constructor() {
		this.products = [new Product("p1", "Canon", 4), new Product("p2", "Nikon", 2), new Product("p3", "Leica", 3)];
		this.customers = [new Customer("c1", "Alice", "USA"), new Customer("c2", "Bob", "GB")];
		this.orders = [];
	}

	addOrder(customerId, ...productIds) {
		if (
			productIds.some((productId) => {
				const foundProduct = this.products.find((product) => product.id === productId);
				return !foundProduct || foundProduct.itemsInStock === 0;
			})
		) {
			return;
		} else {
			this.orders.push(new Order(customerId, productIds));
			for (let orderedProduct of productIds) {
				for (let product of this.products) {
					if (product.id === orderedProduct) {
						product.itemsInStock--;
					}
				}
			}
		}
	}

	printOrders() {
		const orders = this.orders.map((order) => ({
			customerId: order.customer,
			customerName: this.customers.find((c) => c.id === order.customer).name,
			products: order.products.map((p) => ({ productId: p.id, productName: this.products.find((prod) => prod.id === p).name })),
		}));
		console.log(orders);
	}

	save() {
		console.log(JSON.stringify(this));
	}

	load(state) {
		let { products, customers, orders } = JSON.parse(state);
		this.customers = customers;
		this.products = products;
		this.orders = orders;
	}

	notify() {
		setTimeout(() => {
			const outOfStock = this.products.filter((p) => p.itemsInStock === 0).map((pr) => ({ id: pr.id, name: pr.name }));
			console.log(outOfStock);
		}, 1000);
	}
}
