#!/bin/sh

rm -rf ../../11_wholessence_web/wholessence/public/projects/quest-for-interactive-apps/ 2>/dev/null
mkdir ../../11_wholessence_web/wholessence/public/projects/quest-for-interactive-apps/ 2>/dev/null
mkdir ../../11_wholessence_web/wholessence/public/projects/quest-for-interactive-apps/dist/ 2>/dev/null
cp -r public/* ../../11_wholessence_web/wholessence/public/projects/quest-for-interactive-apps/
cp -r build/* ../../11_wholessence_web/wholessence/public/projects/quest-for-interactive-apps/dist/
