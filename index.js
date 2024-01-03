const eventEmitter = require("node:events");

const emitter = new eventEmitter();

//emitter.on is the event listener
emitter.on("order-pizza", (size, topping)=>{
    console.log("Order received, baking a ${size} pizza with ${topping}")
})
emitter.on("order-pizza", (size)=>{
    if(size==="large")
    console.log("Serving complementary drink");
})
//event emitter
emitter.emit("order-pizza", "small", "mushroom");

