def is_anagram(str1, str2):
    sorted_str1 = ''.join(sorted(str1.lower()))
    sorted_str2 = ''.join(sorted(str2.lower()))
    
    return sorted_str1 == sorted_str2

print(is_anagram("listen", "silent"))   # True
print(is_anagram("hello", "world"))     # False

