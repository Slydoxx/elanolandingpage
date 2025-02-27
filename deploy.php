
<?php
// Script de déploiement pour Hostinger
// Ce script simulera un "npm run build" en copiant les fichiers nécessaires

// Créer le dossier de sortie s'il n'existe pas
if (!file_exists('build')) {
    mkdir('build', 0755, true);
}

// Copier les fichiers statiques
copy('index.html', 'build/index.html');
copy('src/main.js', 'build/src/main.js');

// Message de succès
echo "Déploiement simulé terminé avec succès!";
?>
