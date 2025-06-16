# Git Guide for TK Website Project

## Terminal Commands Sequence

### 1. Initial Setup
```bash
# Navigate to project directory
cd /Users/stefantillman/Desktop/TK website/public_html

# Initialize Git (only needed once)
git init

# Add all files to Git
git add .

# Make first commit
git commit -m "Initial commit - Website rebuild with interactive features"
```

### 2. Connect to GitHub
```bash
# Remove existing remote (if needed)
git remote remove origin

# Add GitHub repository
git remote add origin https://github.com/Skranta2/TKwebsite.git

# Force push to overwrite remote repository
git push -f origin main
```

### 3. Regular Workflow
```bash
# 1. Always pull first
git pull origin main

# 2. Add changes
git add .

# 3. Commit changes
git commit -m "Your commit message"

# 4. Pull again
git pull origin main

# 5. Push your changes
git push origin main
```

## Common Scenarios

### 1. Making Changes
```bash
# Navigate to project
cd /Users/stefantillman/Desktop/TK website/public_html

# Pull latest changes
git pull origin main

# Make your changes...

# Add and commit
git add .
git commit -m "Your commit message"

# Pull again
git pull origin main

# Push changes
git push origin main
```

### 2. Checking Status
```bash
# Check current status
git status

# Check remote changes
git fetch origin
git log --oneline origin/main..main
```

### 3. Resolving Conflicts
```bash
# If you get conflicts
git status  # Shows which files have conflicts
# Edit the files to resolve conflicts
git add <filename>
git commit -m "Resolve merge conflicts"
git push origin main
```
