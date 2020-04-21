/*
Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

LeetCode: 929. Unique Email Addresses
*/

var numUniqueEmails = function(emails) {
   const set = new Set()
   for(let email of emails) {
       let ind = email.indexOf("@")
       let str1 = email.slice(0, ind);
       let str2 = email.slice(ind);
       if(email.includes("+")){
           let j = email.indexOf("+");
           str1 = email.slice(0, j);
       }
       email = str1.replace(/\./g,"") + str2;
       set.add(email)
   }
    return set.size;
};
numUniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"])