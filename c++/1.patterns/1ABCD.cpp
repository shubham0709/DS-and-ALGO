using namespace std;
#include <iostream>
int main()
{
    int x;
    cin >> x;
    char ch = 'A';
    int i = 0;
    while (i < x)
    {
        int j = i;
        while (j < x + i)
        {
            cout << char('A' + j)<<' ';
            j++;
        }
        cout << endl;
        i++;
    }
}