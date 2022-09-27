<?php
class Alumnos extends Conectar{



    public function hola($nombre){
        require 'model.php';
        $rol=1;
        $conectar= parent::conexion();
        parent::set_names();
        $sql= hola();
        $inser=$conectar->prepare($sql);
        $inser->execute([$nombre]);
       
    }



}
?>
