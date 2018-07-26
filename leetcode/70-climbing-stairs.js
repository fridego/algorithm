/**
 * 假设你正在爬楼梯。需要 n 步你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 示例 1：
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 步 + 1 步
 * 2.  2 步
 * 示例 2：
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 步 + 1 步 + 1 步
 * 2.  1 步 + 2 步
 * 3.  2 步 + 1 步
 */

 /**
 * @param {number} n
 * @return {number}
 */

module.exports = function climbStairs (n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let [start, end] = [1, 2];
    for(let i = 3; i < n + 1; i++) {
        [start, end] = [end, start + end];
    }
    return end;
};