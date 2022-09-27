<?php

    function insertarExcel_Model(){
        
        $sql = "INSERT INTO estudiante(nombre_estudiante,estado_estudiante,id_carrera,id_rol,a_paterno_E,a_materno_E,correo_inst_E,matricula,semestre,generacion) 
        Values(?,?,?,?,?,?,?,?,?,?)";
        return $sql;
    }
    function hola(){
        $sql="INSERT INTO hola(nombre) Values (?)";
        return $sql;
    }


    
?>