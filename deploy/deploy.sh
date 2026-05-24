#!/usr/bin/env bash
set -euo pipefail

# Deploy velio-ww marketing site to VPS
REPO_DIR="/home/admin/velio-ww"
SERVICE_NAME="velio-ww"
IMAGE_NAME="velio-ww"

echo "==> Pulling latest code..."
cd "$REPO_DIR"
git pull origin master

echo "==> Building Docker image..."
docker build -t "$IMAGE_NAME:latest" .

echo "==> Restarting service..."
systemctl restart "$SERVICE_NAME"

echo "==> Status:"
systemctl status "$SERVICE_NAME" --no-pager

echo "==> Deploy complete."
