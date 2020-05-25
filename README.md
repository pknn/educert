# educert

> Education Certification Management Application

## Prerequisite
1. PostgreSQL
2. Node.js version 8+
3. ganache-cli
4. Metamask Google Chrome Extension

## Build Setup
Before start
1. Run ganache-cli with port 8545
2. Create PostgreSQL database and user `createdb educert && createuser educert`
3. Migrate database with predata 
```sh
mv .env.example .env
source .env
psql -U $PGUSER -d educert -f ./migration/init.sql
```
4. Import Officer Private Key to your Metamask (Located in `private_keys` directory)
5. Run `npm install && npm run build && npm run start`

## Invite Student
1. Invite student in page `/users/students`
2. Copy student public address, and run `./migration/getVC.sh [public_address]`
3. Copy Verification code from shell command, and use it in register page.

