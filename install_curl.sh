#!/bin/bash
rm -rf /tmp/zalo_curl
mkdir /tmp/zalo_curl
git clone https://github.com/huanhoahongso3-collab/zalo-linux-unofficial /tmp/zalo_curl
cd /tmp/zalo_curl
chmod +x install.sh
./install.sh
