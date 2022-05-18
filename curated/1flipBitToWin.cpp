// how many consecutive ones can you get by flipping a zero to one.
//  only one of the zero can be flipped.
using namespace std;
#include <iostream>
#include <vector>
int main()
{
    int num = 1775;
    vector<int> bin;
    while (num > 0)
    {
        int r = num % 2;
        bin.push_back(r);
        num /= 2;
    }
    int maxcount = 0;
    for (int i = bin.size() - 1; i >= 0; i--)
    {
        if (bin[i] == 0)
        {
            int temp = 0;
            int left = i - 1;
            int right = i + 1;
            while (left >= 0 && bin[left] == 1)
            {
                temp++;
                left--;
            }
            while (right < bin.size() && bin[right] == 1)
            {
                temp++;
                right++;
            }
            maxcount = max(maxcount, temp);
        }
    }
    cout << maxcount + 1 << endl;
}