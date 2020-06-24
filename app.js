const docx4js = require("docx4js")

docx4js.docx.load("test.docx").then(docx=>{
  //you can render docx to anything (react elements, tree, dom, and etc) by giving a function
  console.log(docx)

})
