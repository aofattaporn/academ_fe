#!/bin/bash

# Step 1: Build React Vite app
npm run build

# Step 2: Copy build files to Nginx directory
sudo cp -r ./dist/* /usr/local/var/www

# Step 3: Restart Nginx
sudo nginx -s reload

# Step 3: Stop Nginx
sudo nginx -s stop

# Step 4: Start Nginx
sudo nginx