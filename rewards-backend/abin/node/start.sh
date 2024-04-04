#!/bin/sh
set -e

. abin/node/migrations.sh

nodeStartScript() {
    echo "Starting node app"

    npm run start

}

nodeRunMigrations
nodeStartScript