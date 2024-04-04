#!/bin/sh
set -e

nodeStartScript() {
    echo "Starting node app"

    npm run start

}

nodeStartScript