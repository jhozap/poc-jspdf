import { Component } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-jspdf';


  generatePDF = () => {

    console.log('Print');

    // al instanciar un nuevo documento con jsPDF 
    // se añade la configuracion de cifrado del documento
    const doc = new jsPDF({
      encryption: {
        userPassword: "user",
        ownerPassword: "owner",
        userPermissions: ["print", "modify", "copy", "annot-forms"]
      }
    });

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
    doc.autoPrint();
  }

}
