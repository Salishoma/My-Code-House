/*
HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

The special characters and their entities for HTML are:

Quotation Mark: the entity is &quot; and symbol character is ".
Single Quote Mark: the entity is &apos; and symbol character is '.
Ampersand: the entity is &amp; and symbol character is &.
Greater Than Sign: the entity is &gt; and symbol character is >.
Less Than Sign: the entity is &lt; and symbol character is <.
Slash: the entity is &frasl; and symbol character is /.
Given the input text string to the HTML parser, you have to implement the entity parser.

Return the text after replacing the entities by the special characters.

LeetCode: 1410. HTML Entity Parser
*/

var entityParser = function(text) {
    let seen = {
        "&quot;": "\"",
        "&apos;": "'",
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/"        
    }
    let i = 0;
    let str = "";
    while(i < text.length){
        if(text[i] === "&"){
            let index = text.slice(i,i + 7).indexOf(";");
            let s = text.slice(i,i + index + 1)
            if(seen[s]){
                str += seen[s];
                i += index + 1;
            }else{
                str += text[i];
                i++;
            }
        }else{
            str += text[i];
            i++;
        }
    }
    return str;
};
entityParser("x &gt; y &amp;&amp; x &lt; y is always false")