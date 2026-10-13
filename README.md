# Gambit

A small resizable chess window. Play the computer or two players on one screen. Castling, en passant, and promotion are included.

## Play in the browser

Open `desk-chess.html` in Chrome or Edge and resize the window. The board fills the window.

## Mac

The packaged Mac app is about 274 MB. GitHub rejects files over 100 MB on a normal commit, so the zip is not in this repo.

If macOS says the app is damaged after a download:

```bash
xattr -cr "Gambit.app"
open "Gambit.app"
```

This build is Apple Silicon only.

## Windows

Unzip and run `Gambit.exe`. If Windows warns you, choose More info, then Run anyway.
