#! /bin/sh
psql -U educert -d educert -c "select verification_code from pending_users where public_address='$1'"