function isAnagram(str1, str2)
    if #str1 ~= #str2 then
        return false
    end

    local count1 = {}
    local count2 = {}

    for i = 1, #str1 do
        local char1 = string.sub(str1, i, i)
        count1[char1] = (count1[char1] or 0) + 1

        local char2 = string.sub(str2, i, i)
        count2[char2] = (count2[char2] or 0) + 1
    end

    for char, count in pairs(count1) do
        if count ~= (count2[char] or 0) then
            return false
        end
    end

    return true
end

-- Example usage
if isAnagram("listen", "silent") then
    print("The two words are anagrams.")
else
    print("The two words are not anagrams.")
end

