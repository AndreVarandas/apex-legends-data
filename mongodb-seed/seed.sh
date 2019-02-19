#!/usr/bin/env bash

mongoimport --host apex_mongodb --db apex-legends --collection legends --type json --file /seed/legends.json --jsonArray
mongoimport --host apex_mongodb --db apex-legends --collection weapons --type json --file /seed/weapons.json --jsonArray