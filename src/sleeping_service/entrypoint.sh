#!/bin/bash
date_1=$(date +%s);

npm start &

while [[ ! $diff = 100 ]]; do
    date_2=$(date +%s);
    diff=$((($date_2 - $date_1)))
done

if [[ $diff = 100 ]]; then
  echo "sleep"
  kill -9 $(lsof -t -i :3000) &
fi

while [[ ! $diff = 200 ]]; do
    date_2=$(date +%s);
    diff=$((($date_2 - $date_1)))
done

if [[ $diff = 200 ]]; then
  echo "wake up"
  npm start
fi