// Select the text of an HTML element
let text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);

let text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);

// Modify the text of an HTML element
// d3.select(".text1").text("Exploring air quality is of paramount importance due to its significant impact on human health, the environment, and socioeconomic factors.  Exploring air quality is crucial for safeguarding human health, protecting the environment, addressing climate change, promoting social equity, complying with regulations, and driving technological innovation. Your project can contribute to these efforts by raising awareness, conducting research, and developing solutions to improve air quality.");
// Select the .text1 element and modify its text content
d3.select(".text1")
    .text("Exploring air quality is essential, given its profound impact on human health, the environment, and various socioeconomic factors.")
    // Apply CSS styles to make the text bold and increase font size
    .style("font-weight", "bold")
    .style("font-size", "1.2em"); 

// Capture the HTML of a selection
let myLink = d3.select(".my-link").html();
console.log("my-link: ", myLink);

// Select an element's child element
// An object is returned
let myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

// Capture the child element's href attribute
let myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);

// Change an element's attribute
myLinkAnchor.attr("href", "https://github.com/AshleyJubilee/air-quality-project.git");

// Use chaining to join methods
d3.select(".my-link>a").attr("href", "https://github.com/AshleyJubilee/air-quality-project.git").text("This is a link to Git Project Team 3");

// Select all list items, then change their font color
d3.selectAll("li").style("color", "blue");

let li1 = d3.select("ul").append("li");

