const{jsPDF} = require('jspdf')



const doc = new jsPDF();
doc.text('Hello World', 10,10);
doc.save("a4.pdf");