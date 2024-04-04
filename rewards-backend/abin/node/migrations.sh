#!/bin/sh
set -e

nodeRunMigrations() {
  echo "Running migrations..."

  npm run migrate
}
