# Golang

[Back](../README.md)

## Word Counter

For the code sample can be accessed here https://goplay.tools/snippet/ATfXiAdh2Yt.

Or you can copy the snippet below then run `go run main.go`

```go
package main

import (
	"fmt"
	"sort"
	"strings"
)

type WordCount struct {
	Name      string
	WordCount int
}

func CountWordFrequencies(text string) []WordCount {

	wordsRaw := strings.Fields(text)
	wordMap := make(map[string]int)

	for _, word := range wordsRaw {
		trimmed := strings.ToLower(strings.TrimSpace(word))
		if trimmed != "" {
			wordMap[trimmed]++
		}
	}

	var result []WordCount
	for word, count := range wordMap {
		result = append(result, WordCount{
			Name:      word,
			WordCount: count,
		})
	}

	sort.Slice(result, func(i, j int) bool {
		return result[i].WordCount < result[j].WordCount
	})

	return result
}

func main() {
	text := "Four One two two three Three three four  four   four"
	wordCounts := CountWordFrequencies(text)

	for _, wc := range wordCounts {
		fmt.Printf("%s: %d\n", wc.Name, wc.WordCount)
	}
}
```
