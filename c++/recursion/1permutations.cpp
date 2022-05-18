using namespace std;
#include <iostream>
#include <vector>

void permute(vector<int> arr, int idx, vector<vector<int>> &ans)
{
    if (idx >= arr.size())
    {
        ans.push_back(arr);
        return;
    }
    for (int i = 0; i < arr.size(); i++)
    {
        swap(arr[i], arr[i + 1]);
        permute(arr, i, ans);
    }
}

int main()
{
    vector<int> given = {1, 2, 3};
    vector<vector<int>> ans;
    permute(given, 0, ans);
    for (int i = 0; i < ans.size(); i++)
    {
        for (int j = 0; j < ans[i].size(); j++)
        {
            cout << ans[i][j] << ' ';
        }
        cout << endl;
    }
}