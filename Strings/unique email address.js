/*  Unique Email Addresses
Easy
Topics
Company Tags
A valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@neetcode.io", "alice" is the local name, and "neetcode.io" is the domain name.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@neetcode.io" and "alicez@neetcode.io" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.
You are given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

Example 1:

Input: emails = ["test.email+alex@neetcode.com","test.e.mail+bob.cathy@neetcode.com","testemail+david@nee.tcode.com"]

Output: 2
Explanation: "testemail@neetcode.com" and "testemail@nee.tcode.com" actually receive mails.

Example 2:

Input: emails = ["a@neetcode.com","b@neetcode.com","c@neetcode.com"]

Output: 3
Constraints:

1 <= emails.length <= 100
1 <= emails[i].length <= 100
emails[i] consist of lowercase English letters, '+', '.' and '@'.
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.
Domain names end with the ".com" suffix.
Domain names must contain at least one character before ".com" suffix.  */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    // Set stores only unique email addresses
    let uniqueEmails = new Set();

    for (let email of emails) {

        // Split email into local name and domain
        let [local, domain] = email.split("@");

        // Ignore everything after '+'
        local = local.split("+")[0];

        // Remove all '.' from local name
        local = local.replaceAll(".", "");

        // Combine the cleaned local name with the domain
        let finalEmail = local + "@" + domain;

        // Add to Set
        uniqueEmails.add(finalEmail);
    }

    // Number of unique emails
    return uniqueEmails.size;
};