<?php

require_once("conexion.php");
require_once("controller.php");
//recibe toadas las
$accion=""; 

$nombre="";
$carrera="";

$Estado="";
$json="";
$matricula="";
$correo="";
$apellidoP="";
$semestre="";
$apellidoM="";
$generacion="";
//reasignar variables
//if(!empty($_SESSION['id']))
if(!empty($_POST['data']))
{
 $json=$_POST['data'];
 $accion='excel';
}

if(!empty($_POST['carrera']))
{
 $carrera=$_POST['carrera'];
}

if(!empty($_POST['nombre']))
{
 $nombre=$_POST['nombre'];
}

if(!empty($_POST['Estado'])){
    $Estado=$_POST['Estado'];

}


if(!empty($_POST['accion'])){
    $accion=$_POST['accion'];
}

////////////////////////
if(!empty($_POST['matricula'])){
    $matricula=$_POST['matricula'];
}
if(!empty($_POST['correo'])){
    $correo=$_POST['correo'];
}
if(!empty($_POST['apellidoP'])){
    $apellidoP=$_POST['apellidoP'];
}
if(!empty($_POST['semestre'])){
    $semestre=$_POST['semestre'];
}
if(!empty($_POST['apellidoM'])){
    $apellidoM=$_POST['apellidoM'];
}
if(!empty($_POST['generacion'])){
    $generacion=$_POST['generacion'];
}


$class_Alumnos=new Alumnos();
switch ($accion) {
    
   
    case 'excel':
        // //instanciando nuestra clase

      
        $productos=json_decode($json,true);
        echo var_dump($productos);
       // $class_Alumnos->inserJson($productos);
   

    break;
    case 'guardar':
        echo $nombre;
   
    default:
        # code...
        break;
}









?>
