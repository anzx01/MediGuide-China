# Third-Party Notices

Last reviewed: 2026-05-24

This repository is licensed under the MIT License in `LICENSE`. Third-party packages are installed from npm using `mediguide-china/package-lock.json`; dependency source code is not vendored in this repository.

## Runtime Packages

The production dependency closure in the current lockfile is MIT licensed:

| Package | Version | License |
| --- | --- | --- |
| cookie | 1.1.1 | MIT |
| react | 19.2.4 | MIT |
| react-dom | 19.2.4 | MIT |
| react-router | 7.13.0 | MIT |
| react-router-dom | 7.13.0 | MIT |
| scheduler | 0.27.0 | MIT |
| set-cookie-parser | 2.7.2 | MIT |

## Development Dependencies

The current lockfile includes development-only packages under these license families:

| License | Package count |
| --- | ---: |
| MIT | 178 |
| Apache-2.0 | 12 |
| BSD-2-Clause | 6 |
| BSD-3-Clause | 2 |
| ISC | 10 |
| CC-BY-4.0 | 1 |
| Python-2.0 | 1 |

Notable non-code/dev-data package:

- `caniuse-lite@1.0.30001766` is listed as `CC-BY-4.0` in the lockfile.

## Icons

Some inline SVG path data in `mediguide-china/src/components/Icons.jsx` is adapted from Heroicons by Tailwind Labs, licensed under MIT:

- Repository: https://github.com/tailwindlabs/heroicons
- License: https://github.com/tailwindlabs/heroicons/blob/master/LICENSE

## Distribution Note

If you distribute a built bundle outside GitHub, include this notice file, the project `LICENSE`, and any license files generated or provided by your dependency tooling.
