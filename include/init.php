<?php
// initialisation de la session
session_start();
define('RACINE_WEB', '/formation/php/boutique/');

define('PHOTO_DIR', $_SERVER['DOCUMENT_ROOT'] . '/formation/php/boutique/photo/');
define('PHOTO_WEB', RACINE_WEB . 'photo/');

define('PHOTO_DEFAULT',
        'https://dummyimage.com/600x400/cccccc/ffffff&text=Pas+d\'image');



require_once __DIR__ . '/cnx.php';
require_once __DIR__ .'/fonctions.php';


?>