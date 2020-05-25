#! /bin/sh
psql -U $PGUSER -d $PGDATABASE -f migration/init.sql