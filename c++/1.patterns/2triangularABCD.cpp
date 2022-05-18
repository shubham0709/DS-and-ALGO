using namespace std;
#include <iostream>
int main()
{
    int n;
    cin >> n;
    int i = 0;
    while (i <= n)
    {
        int j = 0;
        while (j <= i)
        {
            cout << char('A' + j);
            j++;
        }
        cout << endl;
        i++;
    }
}