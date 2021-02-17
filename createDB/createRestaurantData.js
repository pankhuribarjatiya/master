db = db.getSiblingDB('EatEZ')
db.createCollection('restaurants')
restaurantsCollection = db.getCollection('restaurants')
restaurantsCollection.remove({})
restaurantsCollection.insert(
{
	  _id:1,
	  restaurantName: "RedHawks Cafeteria",
	  restaurantAddress: "Seattle University, Seattle, WA 98109",
	  phoneNumber: "+1-2035674567"
}
)
restaurantsCollection.insert(
{
	  _id:2, 
	  restaurantName: "Din Tai Fung",
	  restaurantAddress: "Seattle 600 Pine St #403, Seattle, WA 98101",
	  phoneNumber: "+1-4086456767",
	  
}
)
restaurantsCollection.insert(
{
	  _id:3,
	  restaurantName: "Cheese Wizards",
	  restaurantAddress: "Pike Place Market, Seattle, WA 98109",
	  phoneNumber: "+1-9017694560",
	  
}
)

restaurantsCollection.insert(
	{
		  _id:4,
		  restaurantName: "7 Elleven",
		  restaurantAddress: "Pike Place Market, Seattle, WA 98109",
		  phoneNumber: "+1-9017694900",
		  
	}
	)
db.createCollection('restaurantMenu')
menuCollection = db.getCollection("restaurantMenu")
menuCollection.remove({})

menuCollection.insert(
{
 	  restaurantId: "1",
	  itemName:"California Rolls",
	  itemDescription: "A California roll is a fresh take on traditional Japanese rice rolls. Filled with avocado, crab, and cucumber, it's fresh and crunchy and makes a filling meal. You can use real or imitation crab.",
	  itemPrice: 9
}
)
menuCollection.insert(
	{
		   restaurantId: "1",
		  itemName:"Creame Rolls",
		  itemDescription: "A creame roll is a fresh take on traditional Japanese rice rolls. Filled with avocado, crab, and cucumber, it's fresh and crunchy and makes a filling meal. You can use real or imitation crab.",
		  itemPrice: 10
	}
	)

menuCollection.insert(
{
	  restaurantId:"1", 
	  itemName: "Sprout Salad",
	  itemDescription: "Thinly sliced Brussels sprouts using a mandoline. Tossed  with the olive oil, lemon juice, pine nuts, cranberries, pecorino cheese, chives, and pinches of salt and pepper.",
	  itemPrice: 8
}
)

menuCollection.insert(
	 {
	  restaurantId:"1", 
	  itemName:"Scrambled Eggs with Cheese",
	  itemDescription: "eggs beaten slightly with a little milk and cheese ,stirred while cooking",
	  itemPrice: 5
	 }
)

menuCollection.insert(
	 {
	  restaurantId:"1",
	  itemName:"Vanilla Latte",
	  itemDescription: "Made with full-bodied espresso, creamy steamed milk and classic vanila syrup",
	  itemPrice: 4
	 }
)


menuCollection.insert(
	{
	restaurantId:"2",
	itemName:"Kimchi Dumplings",
	itemDescription: "Authentic Korean kimchi, chives, and glass noodles are finely chopped and folded into our savory Kurobuta pork filling. Fresh kimchi juice is rolled into the dough, giving them their signature orange hue.*Contains shellfish.",
	itemPrice: 12
	}
)

menuCollection.insert(
	{
	restaurantId:"2",
	itemName:"Hot & sour tofu soup",
	itemDescription: "Our delicious, thick Hot & Sour Soup is chock full of fresh ingredients, including sliced bamboo shoots, silky eggs, crunchy wood ear mushrooms, and buttery-soft tofu. Topped with fresh green onion and our house seasoning, it’s perfect for any occasion.",
	itemPrice: 10
	}
)

menuCollection.insert(
	{
	restaurantId:"2",
	itemName:"Bubble Tea",
	itemDescription: "Bubble tea is a Taiwanese recipe made by blending a tea base with milk, fruit and fruit juices, then adding the signature “bubbles” - yummy tapioca pearls that sit at the bottom.",
	itemPrice: 5
	}
)

menuCollection.insert(
	{
	restaurantId:"2",
	itemName:"Sautéed String Beans with garlic",
	itemDescription: "Freshly-cut string beans, coated with minced garlic and tossed over high heat for a savory, umami-packed bite.",
	itemPrice: 6
	}
)


menuCollection.insert(
	 {
		restaurantId:"3",
		itemName:"The Goblin King Sandwich",
		itemDescription: "Emmentaler Swiss and monterey jack cheeses, cream cheese, roasted red peppers, chicken breast, and mild sriracha black pepper aioli.",
		itemPrice: 8
	 }
)

menuCollection.insert(
	{
	restaurantId:"3",
	itemName:"The ForestLord Sandwich",
	itemDescription: "Provolone and mozzarella, cream cheese, mortadella, salami, black forest ham, and herbed olive muffaletta.",
	itemPrice: 8
	}
)

menuCollection.insert(
	 {
		restaurantId:"3",
		itemName:"Tomato Basil Power-Up Soup",
		itemDescription: "Delicious nutritious proportions",
		itemPrice: 10
	 }
)

menuCollection.insert(
	 {
		restaurantId:"3",
		itemName:"Tim's Gourmet Chips",
		itemDescription: "BBQ, Original, Jalapeno, Maui Onion.",
		itemPrice: 5
	 }

)