let selectedFile;
//console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (e) => {
    selectedFile = e.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data);
    
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
            
         let data = event.target.result;
        
         let workbook = XLSX.read(data,{type:"binary"});
        

         //console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            
              //asiganacion del parametro length del arreglo 
          
               let count=Object.keys(rowObject).length;
              console.log(count);
              
               
              for(let i=1;i<count;){
                let nombre=rowObject[i].no_de_control;
                console.log(nombre);
                var expresion_matricula = /^\d{2}VC\d{4}$/;
                if(!expresion_matricula.test(nombre)){
                    console.log(i);
                    alert("nel la fila"+i+"de la columna no_de_control"+nombre);
                   return false;
                    }
                console.log(nombre);
                
            
                i++;
              }
             
            //   for(let item of rowObject){
            //         let nombre = item.nombre_alumno;
            //         let apellidoP =item.apellido_paterno;
            //         let apellidoM=item.apellido_materno;
            //         let matricula=item.no_de_control;
            //         let semestre=item.semestre;
            //         let carrera=item.carrera;
            //         let correo=item.correo;
            //         let Estado=item.estatus_alumno;
            //         let generacion=item.generacion;
            //        // console.log(generacion);
            //             // const accion="insertarExcelAlumnos" 
            //             // $.ajax({
            //             //     type: 'GET',
            //             //     url: "rutas.php",
            //             //     data: {"nombre":nombre,"apellidoP":apellidoP,"apellidoM":apellidoM,"matricula":matricula,"semestre":semestre,"carrera":carrera,"correo":correo,"Estado":Estado,"generacion":generacion,"accion":accion}, //datos que se envian
            //             //     contentType:false, //content type
            //             //     processData: false,
            //             //     success:function(resp){
                               
            //             //     },
            //             //     error: function(datos,XMLHttpRequest, textStatus, errorThrown){
            //             //      console.log(data);
            //             //     }
            //             // }
            //             // )
            //   }
         });
        }
       
    }
});