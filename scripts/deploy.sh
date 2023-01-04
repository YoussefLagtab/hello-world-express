#!/usr/bin/env bash

# install curl
sudo apt install curl git

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc

# install node
nvm install 16

# install yarn
npm i -g yarn

# clone repo (now public)
git clone https://github.com/YoussefLagtab/hello-world-express.git

# run the server
cd hello-world-express
yarn
yarn start
