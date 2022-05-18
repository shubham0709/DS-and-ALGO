using namespace std;
#include <iostream>
int main()
{
    int arr[10];
    int j = 0;
    for (int i = 0; i < 10; i++)
    {   
        j++;
        arr[i] = j*j;
    }
    for (int i = 0; i < 10; i++)
    {
        cout << arr[i] << endl;
    }
}