export function truncateText(text, numChars) {
    // Truncate the input text after a specified number of characters.
    if (text.length <= numChars) {
        return text;
    } else {
        return text.substring(0, numChars) + '...';
    }
}