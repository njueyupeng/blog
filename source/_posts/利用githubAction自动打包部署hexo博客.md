---
title: 利用githubAction自动打包部署hexo博客
date: 2021-10-18 13:35:21
tags:
categories:
---

```bash
name: 自动化部署hexo博客
on:
  push:
    branches:
      - hexo
      
env:
  NODE_VERSION: '14.x'
  
jobs:
  build:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: 🚚 Get latest code
        uses: actions/checkout@v2.3.2
      - name: Use Node.js ${{ env.NODE_VERSION }}
        uses: actions/setup-node@v2
        with:
            node-version: ${{ env.NODE_VERSION }}
            
      - name: npm install, build
        run: |
         # build之后部署到阿里云服务器
         npm install yarn -g
         yarn install
         hexo g 
         
      - name: FTP Deploy
        uses: SamKirkland/FTP-Deploy-Action@4.0.0
        with:
          server: ${{ secrets.FTPSERVER }}
          username: ${{ secrets.FTPNAME }}
          password: ${{ secrets.FTPPASSWORD }}
          local-dir: ./public/
          server-dir: ./
          
```