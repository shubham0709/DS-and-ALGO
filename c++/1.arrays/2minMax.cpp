using namespace std;
#include <iostream>
#include <string>
int main()
{
    int arr[5];
    for (int i = 0; i < 5; i++)
    {
        int n;
        cin >> n;
        arr[i] = n;
    }
    int min = arr[0];
    int max = arr[0];
    for (int i = 0; i < 5; i++)
    {
        if (min > arr[i])
            min = arr[i];
        if (max < arr[i])
            max = arr[i];
    }
    cout << min << " " << max << endl;
}