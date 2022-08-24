#!/bin/bash
date_1=$(date +%s);

npm start &

while [[ ! $diff = 100 ]]; do
    date_2=$(date +%s);
    diff=$((($date_2 - $date_1)))
done


kill -9 $(lsof -t -i :3000) &
echo "sleep"
if [[ $diff = 100 ]]; then

  sleep 100 &
fi
echo "wake up"
npm start