#! /bin/sh
psql -U $PGUSER -d $PGDATABASE -f migration/down.sql
psql -U $PGUSER -d $PGDATABASE -f migration/up.sql