<?php
if(!empty($_POST))
            {
            // affichage des saisies pour être sur de les obtenir avant de les exploiter.
    
            echo "sujet : $_POST[sujet] <br>";
            echo "message : $_POST[message] <br>";
            echo "expediteur : $_POST[expediteur] <br>";
            // entête email
            $headers = 'MIME-Version: 1.0' . "\n";
            $headers .= 'Content-type: text/html; charset=ISO-8859-1'."\n";
            $headers .= 'Reply-To: ' . $_POST['expediteur'] . "\n";
            $headers .= 'From: "' . ucfirst(substr($_POST['expediteur'], 0, strpos($_POST['expediteur'], '@'))) . '"<'.$_POST['expediteur'].'>' . "\n";
            $headers .= 'Delivered-to: ibo.sozlu@gmail.com' . "\n";
            mail("ibo.sozlu@gmail.com", $_POST['sujet'], $_POST['message'], $headers);
            
            }
?>