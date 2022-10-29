/**
 * 给定一个区间的集合internals,其中internals[i] = [starti,endi]。返回
 * 需要移除区间的最小数量，使剩余区间不重叠
 */

const internals = [[1,2],[2,3],[3,4],[1,3]];

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    console.log(intervals,"intervalsintervals")
    let count = 0;
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i ++) {
        const inv = intervals[i];
        if (inv[0] >= end) {
            end = inv[1];
            count ++;
        }
    }
    console.log(count)
    return count;

}
eraseOverlapIntervals(internals)