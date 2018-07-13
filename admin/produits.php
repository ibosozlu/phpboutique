<?php

// faire la page qui liste les produits dans un tableau HTML
// tous les champs sauf la description
// bonus :

require_once __DIR__ . '/../include/init.php';
adminSecurity();

// lister les catégories dans un tableau HTML

// le requêtage ici
$stmt = $pdo->query('SELECT P.*, C.nom as cat_name FROM produit P INNER JOIN categorie C on P.categorie_id=C.id');
$produits = $stmt->fetchAll();

require __DIR__ . '/../layout/top.php';
?>
<h1>Gestion produits</h1>

<p><a href="produits-edit.php">Ajouter un produit</a></p>

<!-- le tableau HTML ici -->
<table class="table">
    <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Référence</th>
        <th>Prix</th>
        <th>Categorie_ID</th>
        <th width="250px"></th>
    </tr>
    <?php
    foreach ($produits as $produits) :
    ?>
    <tr>
        <td><?= $produits['id']; ?></td>
        <td><?= $produits['nom']; ?></td>
        <td><?= $produits['reference']; ?></td>
        <td><?= prixFR($produits['prix']); ?></td>
        <td><?= $produits['cat_name']; ?></td>
        
      <td>
            <a class="btn btn-primary"
               href="produits-edit.php?id=<?= $produits['id']; ?>">
               Modifier
            </a>
            <a class="btn btn-danger"
               href="produits-delete.php?id=<?= $produits['id']; ?>">
               Supprimer
            </a>
        </td> 
    </tr>
    
    <?php
    endforeach;
    ?>
</table>

<?php
require __DIR__ . '/../layout/bottom.php';
?>
