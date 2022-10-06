<?php
class Alumnos extends Conectar{


    public function inserJson($Array){
 
       
     //echo var_dump($Array);
     foreach ($Array as $Array){
      $matricula = $Array['Matricula'];
        $carrera= $Array['Carrera'];
        $nombre = $Array ['Nombres'];
        $apellidoP = $Array['Apellido_Paterno'];
        $apellidoM = $Array['Apellido_Materno'];
        $estado = $Array['Estado'];
        $correo = $Array['Correo'];
        $semestre= $Array['Semestre'];
        $generacion = $Array['Generacion'];
        $idrol ="1";
     
        

        $conectar= parent::conexion();
          parent::set_names();
          $sql= "INSERT INTO estudiante(nombre_estudiante,estado_estudiante,id_carrera,id_rol,a_paterno_E,a_materno_E,correo_inst_E,matricula,semestre,generacion) 
          Values(:nombre,:estado,:carrera,:idrol,:AP,:AM,:correo,:matri,:semestre,:generacion)";
          $inser=$conectar->prepare($sql);
        
            $inser->execute([':nombre' => $nombre,
                          ':estado' => $estado,
                          ':carrera' => $carrera,
                          ':idrol' => $idrol,
                          ':AP' => $apellidoP,
                          ':AM' => $apellidoM,
                          ':correo' => $correo,
                          ':matri' => $matricula,
                          ':semestre' => $semestre,
                          ':generacion' => $generacion
                         ]);
      
     }


     }



}
?>
