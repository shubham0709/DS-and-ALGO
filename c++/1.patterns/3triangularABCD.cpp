using namespace std;
#include <iostream>
int main()
{
    int n;
    cin >> n;
    int i = 1;
    while (i <= n)
    {
        char start = 'A' + n - i;
        int j = 0;
        while (j < i)
        {
            cout << char(start + j);
            j++;
        }
        cout << endl;
        i++;
    }
}