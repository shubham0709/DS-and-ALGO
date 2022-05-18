using namespace std;
#include <iostream>

int search(int arr[], int size, int target, bool flag)
{
    int idx = -1;
    int left = 0;
    int right = size - 1;
    int mid = (left + right) / 2;
    while (left <= right)
    {
        if (arr[mid] == target)
        {
            idx = mid;
            if (flag)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        else if (target < arr[mid])
        {
            right = mid - 1;
        }
        else
        {
            left = mid + 1;
        }
        mid = (left + right) / 2;
    }

    return idx;
}

int main()
{
    int arr[10] = {-10, -9, -8, -8, -8, 1, 2, 3, 4, 100};
    int size = sizeof(arr) / sizeof(int);
    int target = -8;
    int idx1 = search(arr, size, target, true);//for last index
    int idx2 = search(arr, size, target, false);//for first index
    cout << idx1 << ' ' << endl;
    cout << idx2 << ' ' << endl;

    pair<int, int> p;
    p.first = idx2;
    p.second = idx1;
    
}