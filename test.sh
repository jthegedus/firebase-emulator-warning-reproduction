#!/usr/bin/env bash

echo "hello tests"
curl -X POST -H "Content-Type:application/json" -H "X-MyHeader: 123" http://localhost:5001/jthegedus-firebase-extensions/us-central1/helloWorld --data '{"text":"ahoy hoy from http via curl"}'
curl -X POST -H 'content-type:application/json' -H "X-MyHeader: 123" http://localhost:8085/v1/projects/jthegedus-firebase-extensions/topics/topic-name:publish --data $'{ "messages": [{"data": "YWhveSBob3kgZnJvbSBwdWJzdWIgdmlhIGN1cmw="}]}'
