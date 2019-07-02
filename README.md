# vuex-firebase-login

## Problembeschreibung

Die vue.js App erst darf geladen werden, nachdem die Authentifizierung des Benutzers abgeschlossen wurde, um z.B. Benutzerabhängige (Firestore-)Collections verwenden zu können.

## Problemlösung

Der Firebase-Auth-OnAuthStateChanged-Observer wird der App-Initialisierung vorgeschaltet und mit unsubscribe() beendet, sobald ein Statuswechsel stattgefunden hat. So bleibt der Benutzer auch nach einem Neuladen der Seite eingeloggt, und die App wird nicht neu gerendert, wenn sich sein Authentifizierungsstatus ändert.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
