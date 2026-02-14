#!/usr/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
# echo "The script's absolute directory is: ${SCRIPT_DIR}"

# To get the full path including the script name:
# SCRIPT_PATH="$SCRIPT_DIR/$(basename "$BASH_SOURCE")"
# echo "The script's absolute path is: $SCRIPT_PATH"

rm -Rf ${SCRIPT_DIR}/src
mkdir -p ${SCRIPT_DIR}/src/main/resources/META-INF/resources

cp -Rf ${SCRIPT_DIR}/../react/dist ${SCRIPT_DIR}/src/main/resources/META-INF/resources
