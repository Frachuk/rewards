#!/bin/sh
set -e

. abin/node/seeds.sh
. abin/node/migrations.sh

nodeStartScript() {
    echo "Starting node app"

    npm run start

}

nodeRunMigrations
nodeRunSeeds
nodeStartScript