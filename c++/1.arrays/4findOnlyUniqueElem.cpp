using namespace std;
#include <iostream>
// find the element that occurs only one time.....accepted...
int main()
{
    int arr[9] = {1, 2, 3, 4, 4, 3, 2, 1, 7};
    int ans = 0;
    for (int i = 0; i < 9; i++)
    {
        ans = ans ^ arr[i];
    }
    cout << ans << ' ' << endl;
}