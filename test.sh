#!/usr/bin/env bash

echo "hello tests"
gcloud pubsub topics publish topic-name --message 'Ahoy hoy from gcloud'
curl -X POST -H "Content-Type:application/json" -H "X-MyHeader: 123" http://localhost:5001/jthegedus-firebase-extensions/us-central1/helloWorld?foo=baz -d '{"text":"ahoy hoy from curl"}'
