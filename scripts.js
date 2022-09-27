function fileReader(oEvent) {
    var File = oEvent.target.files[0];
    var sFilename = File.name;

    var reader = new FileReader();
    var result = {};

    reader.onload = function (e) {
        var data = e.target.result;//dentro del evento tenemos caracteristicas de file pero en target se encuentra el arreglo del contenido  en result
        
        data = new Uint8Array(data);//representa una matriz de enteros sin signo de 8 bits.
      
        var fileExcel = XLSX.read(data, {type: 'array'});
        console.log(fileExcel);
        var result = {};
        fileExcel.SheetNames.forEach(function (sheetName) {
            var roa = XLSX.utils.sheet_to_json(fileExcel.Sheets[sheetName], {header: 1});//toma una matriz de objetos y devuelve una hoja de trabajo con "encabezados" generados automáticamente en función de las claves de los objetos. 
            if (roa.length) result[sheetName] = roa;
        });
            // ver el resultado, precaución: funciona después de que finaliza el evento del lector.
        console.log(result);
        
       

    };
    reader.readAsArrayBuffer(File);
    // El método se utiliza para comenzar a leer el contenido de un blob o file.
    //  Cuando finaliza la operación de lectura, readyState se convierte en DONE(hecho) y se activa el extremo de carga. En ese momento,
    //  el atributo de resultado contiene un ArrayBuffer que representa los datos del archivo.
}

// Agregue su id de "Entrada de archivo"
$("#input").change(function(e) {
// Hacer algo
    fileReader(e);
});