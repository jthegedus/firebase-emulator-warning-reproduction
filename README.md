# firebase-emulator-warning-reproduction

Minimal reproduction for https://github.com/firebase/firebase-tools/issues/1489

In the GitHub Action:

- set **Node 10** with `asdf` and ensure running `node --version` in a later step produces the version set by `asdf`
- `firebase emulators:exec ...` runs and prints
	```
	⚠  Your requested "node" version "10" doesn't match your global version "12"
	```

Node 12.19.0 is the default for the GitHub Action runner I am using (ubuntu-latest as seen here - https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)

The emulator runs, but I am unsure if the code is actually running in Node 12 or if this is a just a logging and detection error :shrug: 

Observe the issue in it's entirety in the GitHub Actions tab logs for `Run Firebase Emulator` section, eg https://github.com/jthegedus/firebase-emulator-warning-reproduction/runs/1362513509 or see the summary below:

```
Run firebase emulators:exec ./test.sh --project=jthegedus-firebase-extensions
⚠  emulators: You are not currently authenticated so some features may not work correctly. Please run firebase login to authenticate the CLI.
i  emulators: Starting emulators: auth, functions, firestore, pubsub
⚠  functions: The following emulators are not running, calls to these services from the Functions emulator will affect production: database, hosting
⚠  Your requested "node" version "10" doesn't match your global version "12"
```
