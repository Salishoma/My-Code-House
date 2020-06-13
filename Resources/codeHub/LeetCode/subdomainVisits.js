/*
A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

LeetCode: 811. Subdomain Visit Count
*/

var subdomainVisits = function(cpdomains) {
    const visit = {};
    for(let domain of cpdomains){
        let [count, address] = domain.split(' ');
        count = parseInt(count)
        visit[address] = (parseInt(visit[address]) || 0) + count;
        const subdomain = address.split('.');
        let str = `${subdomain[subdomain.length - 1]}`
        visit[str] = (parseInt(visit[str]) || 0) + count;
        for(let i = subdomain.length - 2; i > 0; i--){
            str = `${subdomain[i]}.${str}`;
            visit[str] = (parseInt(visit[str]) || 0) + count;
        }
    }
    const sites = [];
    for(let key in visit){
        const str = `${visit[key]} ${key}`;
        sites.push(str);
    }
    return sites;
};
subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])