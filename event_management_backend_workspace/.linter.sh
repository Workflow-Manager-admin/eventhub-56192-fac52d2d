#!/bin/bash
cd /home/kavia/workspace/code-generation/eventhub-56192-fac52d2d/event_management_backend_workspace/event_management_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

