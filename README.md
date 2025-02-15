# Bracket Check

Dette programmet sjekker om tekstinnholdet i et gitt dokument har korrekte åpnende og lukkende parentes.

Programmet utføres med [NodeJS](https://nodejs.org/en/download) (installér dette først dersom du ikke har det:).

Deretter er utføringen ganske enkel:

```
$ node bracket-check.js <path/to/file>
```

Programmet inneholder to varianter for algoritmen: 
- én linear med et støtte-array,
- én rekursiv.
