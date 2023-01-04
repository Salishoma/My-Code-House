/*
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.

LeetCode: 914. X of a Kind in a Deck of Cards
*/

function hasGroupsSizeX(deck) {
    let count = Array(10000).fill(0);
    for (let c of deck) count[c]++;
    let g = -1;
    for (let i = 0; i < 10000; ++i)
        if (count[i] > 0) {
            if (g === -1) g = count[i];   
            else g = gcd(g, count[i]);             
        }

    return g >= 2;
}

function gcd(x, y) {
    return x === 0 ? y : gcd(y%x, x);
}
hasGroupsSizeX([1,1,1,2,2,2,3,3])