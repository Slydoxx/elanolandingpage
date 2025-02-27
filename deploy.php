
<?php
// Simple deployment configuration
$publicPath = getcwd() . '/public';

// Ensure the index.html is in the correct location
if (file_exists('index.html') && !file_exists($publicPath . '/index.html')) {
    if (!is_dir($publicPath)) {
        mkdir($publicPath, 0755, true);
    }
    copy('index.html', $publicPath . '/index.html');
}

echo "Deployment configuration completed successfully.\n";
?>
