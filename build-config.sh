#!/bin/bash
set -e

ARRAY_VALUES=("REACT_APP_API_TIMEOUT" \
  "REACT_APP_API_URL" \
  "REACT_APP_FULCRUM_URL" \
  "DD_SERVICE" \
  "REACT_APP_PATH_NAME" \
  "REACT_APP_DATADOG_APP_ID" \
  "DD_ENV" \
  "REACT_APP_DATADOG_CLIENT_TOKEN" \
  "REACT_APP_ROSTER_URL"
)

result='window.env={};'
for value in ${ARRAY_VALUES[@]}; do
    result+="window.env.$value=\"${!value}\";"
done

echo $result
