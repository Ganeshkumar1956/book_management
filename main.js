const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const dbHelper=require('./helpers/helper')
const { getBookList,createBook, fetchSingleBook, updateBook, deleteBook } = require('./book/controller/book-controller')

app.get('/', (req, res) => {
  res.send('Hello World! simha')
})
app.use(bodyParser.json());
app.listen(port, (err) => {
  if(err){
    console.log("error");
  }
  dbHelper.connect()
  .then(()=> {
    console.log("Success");
    app.get("/api/book",getBookList);
    app.post("/api/book",createBook);
    app.get("/api/book/:id",fetchSingleBook);
    app.put("/api/book/:id",updateBook);
    app.delete("/api/book/:id",deleteBook);
  })
  .catch((err)=> {console.log(err);})
});
