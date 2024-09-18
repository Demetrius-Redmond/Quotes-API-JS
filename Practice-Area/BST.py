def binary_search(sorted_list: list[int], target: int)->int:
    left = 0
    right = len(sorted_list) - 1

    while left <= right:
        middle = (left + right) // 2
        if target == sorted_list[middle]:
            return middle
        if sorted_list[middle] > target:
            right = middle - 1
        if sorted_list[middle] < target:
            left = middle + 1

    print("N/A")

print(binary_search([5,6,7,8,9,10,14,16,19,22], 7))