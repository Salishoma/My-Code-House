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