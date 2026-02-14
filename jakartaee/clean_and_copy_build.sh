#!/usr/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

rm -Rf ${SCRIPT_DIR}/src
mkdir -p ${SCRIPT_DIR}/src/main/resources/META-INF/resources

cp -Rf ${SCRIPT_DIR}/../react/dist ${SCRIPT_DIR}/src/main/resources/META-INF/resources
