
# Repro Steps
- `cd ./appshell` and run `npm i` and then `npm run build`
- `cd ../ShopPilet` and run `dotnet build`
- `cd ../piral~/ShopPilet` and run `pilet debug`


# Problem
Open `http://localhost:1234/`.
You'll see the extension shown on the page.
When you click the button a dialog is opened.
The extension should also be shown in the dialog, but it is not.