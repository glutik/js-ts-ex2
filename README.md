[9/10 12:55 PM] Eyal EllenbogenHOME EXERCISE

Build the following, use classes and modules as you see fit
	
Store includes products, customers and orders
		Products (id, name, itemsInStock)
		Customers (id, name, address)
		Orders (customer, products)
	
Initialize a store with hard-coded data
Implement
		
addOrder(customerId, …productIds) - fails if any product has no items in stock, adds order, decrements itemsInStock
printOrders() – print all orders and its relevant info (console.log)
save() – creates an object with all relevant data and prints it in JSON
load(state) – resets store state according to the given value (value - JSON string)
notify() – sets a 10sec interval that prints to the console all products that are out of stock
