module.exports=app=>{
const product = require("../controllers/Obtener.js");
  app.get("/products",product.findAll);  
  
  // Retrieve a single product with productId
  app.get("/Products/:productId", product.findOne);
  // Create a new product
  app.post("/Products", product.create);
  //delete a Product
  app.delete("/Products/:productId",product.delete);
  //update product
  app.put("/Products/:productId",product.update)
}