/* Given a date string in the form Day Month Year, where:

Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
Year is in the range [1900, 2100].
Convert the date string to the format YYYY-MM-DD, where:

YYYY denotes the 4 digit year.
MM denotes the 2 digit month.
DD denotes the 2 digit day.
 

Example 1:

Input: date = "20th Oct 2052"
Output: "2052-10-20"
Example 2:

Input: date = "6th Jun 1933"
Output: "1933-06-06"
Example 3:

Input: date = "26th May 1960"
Output: "1960-05-26"
 

Constraints:

The given dates are guaranteed to be valid, so no error handling is necessary. */

/**
 * LeetCode 1507 - Reformat Date
 *
 * Approach:
 * 1. Split the input string into Day, Month, and Year.
 * 2. Convert the month abbreviation into its numeric form using a HashMap.
 * 3. Remove the ordinal suffix (st, nd, rd, th) from the day.
 * 4. Ensure the day has two digits using padStart().
 * 5. Return the formatted date as YYYY-MM-DD.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var reformatDate = function (date) {

    // Mapping month abbreviation to month number
    const months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
    };

    // Split the date into Day, Month, Year
    let parts = date.split(" ");

    // Extract year directly
    let year = parts[2];

    // Convert month abbreviation to numeric month
    let month = months[parts[1]];

    // Remove the suffix (st, nd, rd, th) from the day
    let day = parts[0].replace(/(st|nd|rd|th)/, "");

    // Ensure day always has two digits
    day = day.padStart(2, "0");

    // Return the date in YYYY-MM-DD format
    return `${year}-${month}-${day}`;
};


// ------------------- Testing -------------------

console.log(reformatDate("20th Oct 2052")); // 2052-10-20
console.log(reformatDate("6th Jun 1933"));  // 1933-06-06
console.log(reformatDate("26th May 1960")); // 1960-05-26