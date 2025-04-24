/**
 *
 * @param {string} text
 */
function CountWordFrequencies(text) {
    //split to array
    let arr = text
        .split(" ")
        .map((t) => t.trim().toLowerCase())
        .filter((t) => t !== "");

    let words = [...new Set(arr)];
    let wordCounts = [];

    arr.forEach((t) => {
        const idx = words.findIndex((item) => item == t);
        // console.log(idx);
        if (!wordCounts[idx]) {
            wordCounts[idx] = 0;
        }

        wordCounts[idx] = wordCounts[idx] + 1;
    });

    const objs = words
        .map((w, idx) => {
            return {
                name: w,
                wordCount: wordCounts[idx],
            };
        })
        .sort((prev, next) => prev.wordCount - next.wordCount);

    return objs;
}

async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
    // alert("runs after 3 seconds");
    console.log("runs after 3 seconds");
}

async function fetchData(url, callback) {
    if (!url) {
        callback("URL is required", null);
    } else {
        await new Promise((resolve) => setTimeout(resolve, 1000)); //simulate fetching
        callback(null, `Data from ${url}`);
    }
}

function processData(data, callback) {
    setTimeout(() => {
        if (!data) {
            callback("Data is required", null);
        } else {
            callback(null, data.toUpperCase());
        }
    }, 1000);
}

async function main() {
    //LEVEL 1
    console.log("LEVEL 1 ==================================");
    const ans1 = CountWordFrequencies("Four One two two three Three three four  four   four");
    ans1.forEach((ob) => {
        console.log(`${ob.name} => ${ob.wordCount}`);
    });

    //LEVEL 2 --will be run after 3 seconds
    console.log("LEVEL 2 ==================================");
    //1. rewrite delay
    await delay(3000);

    //2.  Rewrite using Async/Await:
    await fetchData("https://example.com", (err, data) => {
        if (err) {
            console.error("Fetch Error:", err);
        } else {
            processData(data, (err, processedData) => {
                if (err) {
                    console.error("Process Error:", err);
                } else {
                    console.log("Processed Data:", processedData);
                }
            });
        }
    });
}

main();
