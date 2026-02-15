#!/bin/bash

echo "🚀 Setting up Anglify on GitHub..."

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "📦 GitHub CLI (gh) not found. Installing via Homebrew..."
    brew install gh
fi

# Check authentication
if ! gh auth status &> /dev/null; then
    echo "🔑 Please authenticate with GitHub..."
    gh auth login
fi

# Create repository
echo "🏗️ Creating repository 'anglify'..."
# Try to create public repo, fall back if fails (e.g. already exists)
gh repo create anglify --public --source=. --remote=origin || echo "⚠️ Repo might already exist, continuing..."

# Push code
echo "⬆️ Pushing code to main branch..."
git branch -M main
git push -u origin main

echo "✅ Done! Your code is live on GitHub."
