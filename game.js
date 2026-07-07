const output = document.getElementById("output");
const input = document.getElementById("player-input");
const submitBtn = document.getElementById("submit-btn");

let playerName = "";

let stage = "intro";

let forestVisited = false;
let pathVisited = false;
let playgroundVisited = false;

function slowPrint(text, delay = 35) {

    return new Promise(resolve => {

        let i = 0;

        const interval = setInterval(() => {

            output.innerHTML += text.charAt(i);

            output.scrollTop = output.scrollHeight;

            i++;

            if(i >= text.length){

                clearInterval(interval);

                output.innerHTML += "<br><br>";

                output.scrollTop = output.scrollHeight;

                resolve();

            }

        }, delay);

    });

}

async function chooseNextLocation(){

    if(forestVisited && pathVisited && playgroundVisited){

        await slowPrint("");
        await slowPrint("The strange feeling inside you grows stronger.");
        await slowPrint("Every place you've visited feels connected...");
        await slowPrint("As if each one was trying to remind you of something.");
        await slowPrint("");
        await slowPrint("Through the thinning fog...");
        await slowPrint("An old building slowly comes into view.");
        await slowPrint("");
        await slowPrint("\"POLICE STATION\"");
        await slowPrint("");
        await slowPrint("Maybe your answers are waiting inside.");
        await slowPrint("");
        await slowPrint("Press Enter to continue.");

        stage = "chapter2";
        return;
    }

    await slowPrint("");
    await slowPrint("════════════════════════════");
    await slowPrint("Where will you search next?");
    await slowPrint("════════════════════════════");
    await slowPrint("");
    await slowPrint("Type one of these locations:");

    if(!forestVisited)
        await slowPrint("> forest");

    if(!pathVisited)
        await slowPrint("> path");

    if(!playgroundVisited)
        await slowPrint("> playground");

    await slowPrint("");
    await slowPrint("Press Enter after typing your choice.");

    stage = "chapter1";
}


async function gameLogic(inputText){

    inputText = inputText.trim().toLowerCase();

    switch(stage){

        case "intro":

            await slowPrint("══════════════════════════════");
            await slowPrint("THE FORGOTTEN SEARCH");
            await slowPrint("══════════════════════════════");

            await slowPrint("An Interactive Psychological Mystery");

            await slowPrint("");

            await slowPrint("How to Play");

            await slowPrint("• Read carefully.");
            await slowPrint("• Whenever choices appear, type the exact word shown (for example: forest).");
            await slowPrint("• Press Enter or click Submit to continue.");
            await slowPrint("• Explore every location to uncover the truth.");
            await slowPrint("");

            await slowPrint("What is your name?");

            stage = "name";

            break;

        case "name":

            playerName = inputText || "Unknown";

            await slowPrint(`Welcome, ${playerName}.`);

            await slowPrint("");

            await slowPrint("════════════════════");
            await slowPrint("CHAPTER I");
            await slowPrint("Awakening");
            await slowPrint("════════════════════");

            await slowPrint("");

            await slowPrint("The first thing you notice...");

            await slowPrint("...is silence.");

            await slowPrint("");

            await slowPrint("Not the peaceful silence of an empty room.");

            await slowPrint("The kind of silence that makes your ears ring.");

            await slowPrint("");

            await slowPrint("Slowly...");

            await slowPrint("You open your eyes.");

            await slowPrint("");

            await slowPrint("A thick blanket of pale fog stretches endlessly around you.");

            await slowPrint("Ancient trees tower over your head.");

            await slowPrint("No birds sing.");

            await slowPrint("No wind blows.");

            await slowPrint("");

            await slowPrint("Everything feels strangely familiar.");

            await slowPrint("Like returning to a place you've forgotten.");

            await slowPrint("");

            await slowPrint("You search your memories.");

            await slowPrint("");

            await slowPrint("Nothing.");

            await slowPrint("No home.");

            await slowPrint("No family.");

            await slowPrint("No friends.");

            await slowPrint("No childhood.");

            await slowPrint("");

            await slowPrint("Only one certainty remains.");

            await slowPrint("\"I exist.\"");

            await slowPrint("");

            await slowPrint("A strange feeling begins pulling at your heart.");

            await slowPrint("Not fear.");

            await slowPrint("Not pain.");

            await slowPrint("A longing.");

            await slowPrint("");

            await slowPrint("You need to find someone.");

            await slowPrint("");

            await slowPrint("Who?");

            await slowPrint("");

            await slowPrint("You don't know.");

            await slowPrint("");

            await slowPrint("Why?");

            await slowPrint("");

            await slowPrint("You don't know that either.");

            await slowPrint("");

            await slowPrint("Yet every instinct tells you...");

            await slowPrint("");

            await slowPrint("\"Keep searching.\"");

            await slowPrint("");

            await slowPrint("Three places catch your attention.");

            await slowPrint("");

            await slowPrint("Where would you like to search?");

            await slowPrint("");
            
            await slowPrint("Type one of the following:");
            
            await slowPrint("> forest")
            await slowPrint("> path")
            await slowPrint("> playground");
            
            await slowPrint("");
            
            await slowPrint("Example: Type 'forest' and press Enter.");

            stage = "chapter1";

            break;

        case "chapter1":

        await chooseNextLocation();



            break;

        case "chapter2":

            await slowPrint("Chapter II coming next...");

            stage = "done";

            break;

    }

}

submitBtn.addEventListener("click", async()=>{

    const inputText = input.value.trim();

    if(!inputText) return;

    output.innerHTML += `<span>> ${inputText}</span><br>`;

    input.value="";

    await gameLogic(inputText);

});

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter")
        submitBtn.click();

});