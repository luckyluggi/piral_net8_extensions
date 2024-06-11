// import / define the API of your app shell below
type PiletApi = {};
type AddScript = (path: string, attrs?: Record<string, string>) => void;

import "../piral~/ShopPilet/dist/_content/MudBlazor/MudBlazor.min.css"
export default function(api: PiletApi, addScript: AddScript) {
    // wire-up your components here
    addScript("_content/MudBlazor/MudBlazor.min.js");
}
