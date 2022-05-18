using namespace std;
#include <iostream>
int main()
{
    int n;
    cin >> n;
    int i = 1;
    while (i <= n)
    {
        int j = 0;
        while (j < n)
        {
            if (j >= n - i)
            {
                cout << '*';
            }
            else
            {
                cout << ' ';
            }
            j++;
        }
        cout << endl;
        i++;
    }
}