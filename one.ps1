# PowerShell Script to Setup Node.js Enterprise Environment

# Create Enterprise Architecture Folders and Files
$rootDir = "C:\Users\JustinSaadein\OneDrive - HarborGrid Inc\Desktop\ocr-4"
$dirs = @(
    "src",
    "src\controllers",
    "src\models",
    "src\routes",
    "src\utils",
    "config",
    "logs",
    "tests"
)

foreach ($dir in $dirs) {
    New-Item -Path "$rootDir\$dir" -ItemType Directory
}

# Create main app file and other essential files
New-Item -Path "$rootDir\src" -Name "app.js" -ItemType File
New-Item -Path "$rootDir" -Name "package.json" -ItemType File
New-Item -Path "$rootDir" -Name ".env" -ItemType File
New-Item -Path "$rootDir" -Name ".gitignore" -ItemType File

# Initialize npm in the directory
Set-Location -Path $rootDir
npm init -y

# Install essential enterprise packages
npm install express mongoose dotenv winston

# Output
Write-Output "Node.js Enterprise Environment setup complete!"

