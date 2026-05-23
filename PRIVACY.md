# Privacy Notice

Last reviewed: 2026-05-24

MediGuide China is currently a static, client-side MVP. It has no backend service and does not send hospital visit progress, health details, insurance status, passport details, or identity information to a server controlled by this project.

## Local Browser Storage

The app stores only the following values in `localStorage`:

- `disclaimerAccepted`: whether the user accepted the disclaimer modal.
- `currentStep_{hospitalId}`: the current navigation step for a selected hospital.
- `completedSteps_{hospitalId}`: completed navigation steps for a selected hospital.

These values stay in the user's browser unless the user clears site data or browser storage.

## Hosting Logs

If the app is deployed to a third-party host, that host may collect standard access logs such as IP address, user agent, and request time. This repository does not include analytics, tracking pixels, cookies, or a backend database.

## Future Changes

If analytics, maps, accounts, insurance verification, AI features, or backend APIs are added, this privacy notice should be updated before release.
