using namespace std;
#include <iostream>
int search(int arr[], int size)
{
    int left = 0;
    int right = size - 1;
    int mid = (left + right) / 2;
    while (left < right)
    {
        if (arr[mid] < arr[mid + 1])
        {
            left = mid + 1;
        }
        else
        {
            right = mid;
        }
        mid = (left + right) / 2;
    }
    return left;
}
int main()
{
    int arr[8] = {1, 2, 3, 4, 90, 2, 1, 0};
    int idx = search(arr, 7);
    cout << idx << ' ';
}