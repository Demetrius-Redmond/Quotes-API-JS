def binary_search(sorted_list: list[int], target: int)->int:
    left = 0
    right = len(sorted_list) - 1

    while left <= right:
        middle = (left + right) // 2
        if target == sorted_list[middle]:
            return middle
        if target < sorted_list[middle]:
            right = middle - 1
        if target > sorted_list[middle]:
            left = middle + 1
    return "N/A"

print(binary_search([5,6,7,8,9,10,14,16,19,22], 19))