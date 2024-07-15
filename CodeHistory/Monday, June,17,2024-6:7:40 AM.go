package main

import (
    "fmt"
    "sort"
    "strings"
)

func isAnagram(word1, word2 string) bool {
    // Convert the words to lowercase for case insensitivity
    word1 = strings.ToLower(word1)
    word2 = strings.ToLower(word2)

    // Sort the characters of both words
    word1Sorted := sortString(word1)
    word2Sorted := sortString(word2)

    // Compare the sorted words
    return word1Sorted == word2Sorted
}

func sortString(w string) string {
    s := strings.Split(w, "")
    sort.Strings(s)
    return strings.Join(s, "")
}

func main() {
    word1 := "listen"
    word2 := "silent"

    if isAnagram(word1, word2) {
        fmt.Printf("%s and %s are anagrams\n", word1, word2)
    } else {
        fmt.Printf("%s and %s are not anagrams\n", word1, word2)
    }
}

