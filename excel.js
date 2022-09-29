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
        
         let jsonCorregido;
         let validacion;   
         let accion;
         //console.log(workbook);
        workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
           console.log(rowObject);

           //////////////////////////////////////////////////////////////

            prueba1=JSON.stringify(rowObject);
            console.log(prueba1);
           correcion=prueba1.replace(/["]\s+|\s+["]/g,'"'); //tanto tiempo de investigacion para resumir lo aprendido en 3  lineas 
           //>:V/
            console.log(correcion);
            jsonCorregido=JSON.parse(correcion);

            //////////////////////////////////////////////////////////7777

            console.log(jsonCorregido);
            //asiganacion del parametro length del arreglo 
          
            let count=Object.keys(jsonCorregido).length;
            //console.log(count);
              
            let contador;
            let i;
            let accion
              for( i=0;i<count;){         
                let matricula=jsonCorregido[i].Matricula;
                let carrera=jsonCorregido[i].Carrera;
                let nombre=jsonCorregido[i].Nombres;
                let apellido_paterno=jsonCorregido[i].Apellido_Paterno;
                let apellido_materno=jsonCorregido[i].Apellido_Materno;
                let estado=jsonCorregido[i].Estado;
                let correo=jsonCorregido[i].Correo;
                let semestre=jsonCorregido[i].Semestre;
                let generacion=jsonCorregido[i].Generacion;
              
                //validaciones
                var expresion_matricula = /^\d{2}VC\d{4}$/;
                var expresion_carrera=/^(ISIC)?(IFOR)?(IGEO)?(IIAL)?(IGEM)?$/;
                var expresion_nombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
                var expresion_estado= /^(ACTIVO)?(INACTIVO)?$/;
                var expresion_correo=/^[a-z]+\.[a-z]+\@itsvc.edu.mx$/;
                var expresion_semestre = /^[01]{1}[012]{1}$/;
                var expresion_generacion=/^20[0-9]{2}-20[0-9]{2}$/;

                let num=i+2;
                //validacion Matricula 
                if(!expresion_matricula.test(matricula)){
                    alert("Error  en la columna Matrícula , en la fila  "+num+" cuyo valor es:  "+matricula+" no cumple los parámetros establecidos");
                    return false;
                    }
                //validacion Matricula
                
                //validacion Carrera
                if(!expresion_carrera.test(carrera)){
                    alert("Error  en la columna Carrera , en la fila  "+num+"  cuyo valor es:  "+carrera+" no cumple los parametros establecidos");
                    return false;
                    }
                //validacion Carrera

                //validacion Nombre
                if(!expresion_nombre.test(nombre)){
                    alert("Error  en la columna Nombre, en la fila  "+num+" cuyo valor es:  "+nombre+" no cumple los parametros establecidos");
                    return false;
                    }
                //validacion Nombre

                //validacion Apellido Paterno
                if(!expresion_nombre.test(apellido_paterno)){
                    alert("Error  en la columna Apellido Paterno , en la fila  "+num+" cuyo valor es:  "+apellido_paterno+" no cumple los parametros establecidos");
                    return false;
                    } 
                //validacion Apellido Paterno

                //validacion Apellido Materno
                if(!expresion_nombre.test(apellido_materno)){
                    alert("Error  en la columna Apellido Materno , en la fila  "+num+" cuyo valor es:  "+apellido_materno+" no cumple los parametros establecidos");
                    return false;
                    }
                //validacion Apellido Materno

                //validacion Estado
                if(!expresion_estado.test(estado)){
                    alert("Error  en la columna Estado , en la fila  "+num+" cuyo valor es:  "+estado+" no cumple los parametros establecidos");
                    return false;
                    }
                //validacion Estado

                //validacion Correo
                if(!expresion_correo.test(correo)){
                    alert("Error  en la columna Correo , en la fila  "+num+" cuyo valor es:  "+correo+" no cumple los parametros establecidos");
                    return false;
                    }
                //validacion Correo

                //validacion  Semestre
                if(!expresion_semestre.test(semestre)){
                    alert("Error  en la columna Semestre, en la fila  "+num+"cuyo valor es:  "+semestre+" no cumple los parametros establecidos");
                    return false;
                    }
                //validacion Semestre

                //validacion Generacion
                if(!expresion_generacion.test(generacion)){
                    alert("Error  en la columna Generación , en la fila  "+num+"cuyo valor es:  "+generacion+" no cumple los parametros establecidos");
                    return false;
                    }
                    contador=i;
                    i++;      
 
                //validacion Generacion
                console.log(matricula,carrera,nombre,apellido_paterno,apellido_materno,estado,correo,semestre,generacion);
               
 
              }
          
              if ((contador+1)==count){
                
                accion="ingresar_Json";
              }
              
              console.log(accion);
             
          
         });
        
     
        //  if(validacion != "false"){
        //     accion="insertar";
        //     $ajax({
        //         data:{"json":jsonCorregido,"accion":accion},
        //         type:'POST',
        //         dataType'JSON',
        //         URL:'rutas.php',
        //     })
        //     .done(function( data, textStatus, jqXHR ) {
        //         if ( console && console.log ) {
        //             console.log( "La exportacion se ha completado correctamente." );
        //         }
        //     })
        //     .fail(function( jqXHR, textStatus, errorThrown ) {
        //         if ( console && console.log ) {
        //             console.log( "La solicitud a fallado: " +  textStatus);
        //         }
        //    });
        //   }
      
        }
       
    }
});